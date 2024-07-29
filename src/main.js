const path = require("node:path");
const { BrowserWindow, app, ipcMain } = require("electron");
const express = require("express");
const printerRoutes = require("./routes");
const { getPrintersList } = require("./printerUtils");
const https = require("https");
const fs = require("fs");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 550,
    height: 550,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      enableRemoteModule: true,
    },
  });
  mainWindow
    .loadFile(path.join(__dirname, "index.html"))
    .then(() => {
      // mainWindow.webContents.openDevTools();
    })
    .catch((err) => {
      console.error("Failed to load index.html:", err);
    });

  // mainWindow.setMenu(null);

  global.mainWindow = mainWindow;
}

if (require("electron-squirrel-startup")) app.quit();

app.whenReady().then(() => {
  createWindow();

  const exp = express();
  exp.use(express.json());

  exp.use("/api", printerRoutes);

  const port = 8080;

  // Load SSL certificates
  const httpsOptions = {
    key: fs.readFileSync(path.resolve(__dirname, "../creds/key.pem")),
    cert: fs.readFileSync(path.resolve(__dirname, "../creds/cert.pem")),
  };

  // Create and start HTTPS server
  const httpsServer = https.createServer(httpsOptions, exp);
  httpsServer.listen(port, () => {
    console.log(`HTTPS Server running on port ${port}`);

    mainWindow.webContents.once("did-finish-load", () => {
      mainWindow.webContents.send("server-port", port);
    });
  });


  // Handle the 'get-server-port' IPC call from the renderer process
  ipcMain.handle("get-server-port", async () => port);

  // Optionally, handle the 'get-printers' IPC call from the renderer process
  ipcMain.handle("get-printers", async () => {
    try {
      const printers = await getPrintersList(mainWindow);
      return printers;
    } catch (error) {
      console.error("Failed to get printers:", error);
      return [];
    }
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

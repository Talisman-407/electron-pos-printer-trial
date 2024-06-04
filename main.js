const { BrowserWindow, app, ipcMain } = require("electron");
const path = require("node:path");
const express = require("express");
const { getPrintersList } = require("./printerUtils");

// require('@electron/remote/main').initialize();
const printerRoutes = require("./printerRoutes"); // Import the router
let selectedPrinter = null; // Global variable to keep track of the selected printer

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      enableRemoteModule: true,
    },
  });
  mainWindow.loadFile("index.html");
  mainWindow.webContents.openDevTools(); // Optional: Opens DevTools for debugging

  // require('@electron/remote/main').enable(mainWindow.webContents);
  global.mainWindow = mainWindow; // Make mainWindow accessible globally
}

app.whenReady().then(() => {
  // Register the IPC handler
  // ipcMain.handle('get-server-port', () => serverPort);
  // ipcMain.handle('get-selected-printer', () => selectedPrinter);

  createWindow();

  // Set up the Express server
  const exp = express();
  exp.use(express.json());

  // use the API routes
  exp.use("/api", printerRoutes);

  const port = 3000;
  exp.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    // Notify renderer process of the server port
    mainWindow.webContents.send("server-port", port);
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

const { contextBridge, ipcRenderer } = require("electron");

console.log("Preload script loaded");

// Expose the API to the renderer process
contextBridge.exposeInMainWorld("electronAPI", {
  getServerPort: async () => {
    const port = await ipcRenderer.invoke("get-server-port");
    return port;
  },
  onPrinterSelected: (callback) => {
    ipcRenderer.on("printer-selected", (event, printerName) => {
      callback(printerName);
    });
  }
});

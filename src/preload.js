const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  ipcRenderer: {
    invoke: (...args) => ipcRenderer.invoke(...args),
    on: (...args) => ipcRenderer.on(...args),
  },
  getServerPort: async () => {
    const port = await ipcRenderer.invoke("get-server-port");
    return port;
  },
  onPrinterSelected: (callback) => {
    ipcRenderer.on("printer-selected", (event, printerName) => {
      callback(printerName);
    });
  },
});

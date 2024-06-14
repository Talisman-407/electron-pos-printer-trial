const { PosPrinter } = require("electron-pos-printer");
// const {PosPrinter} = require('@electron/remote').remote.require("electron-pos-printer");

// Mock of selectedPrinter to be updated via the API
let selectedPrinter = null;

const getPrintersList = async (mainWindow) => {
  console.log("from get printers method");
  try {
    const printers = await mainWindow.webContents.getPrintersAsync();
    console.log("Printers List:", printers);
    return printers;
  } catch (error) {
    console.error("Failed to get printers:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

// Function to check printer health
const checkPrinterHealth = async (printerName, mainWindow) => {
  const printersList = await getPrintersList(mainWindow);
  return printersList.some(printer => printer.name === printerName);
};

// handles printing
const handlePrintRequest = (req, res) => {
  const { content, options } = req.body;

  // printer name from options
  const { printerName } = options;
  if (!printerName) {
    return res
      .status(400)
      .json({ error: "printerName is required in options" });
  }
//   selectedPrinter = printerName;
//   global.mainWindow.webContents.send("printer-selected", selectedPrinter);

  PosPrinter.print(content, options)
    .then(() => res.json({ success: true }))
    .catch((error) => res.status(500).json({ error: error.message }));
}; 

module.exports = { getPrintersList, handlePrintRequest, checkPrinterHealth };

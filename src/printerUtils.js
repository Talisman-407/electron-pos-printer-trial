const { PosPrinter } = require("electron-pos-printer");
// const {PosPrinter} = require('@electron/remote').remote.require("electron-pos-printer");

// Mock of selectedPrinter to be updated via the API
let selectedPrinter = null;

const getPrintersList = async (mainWindow) => {
  try {
    const printers = await mainWindow.webContents.getPrintersAsync();
    return printers;
  } catch (error) {
    console.error("Failed to get printers:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

// Function to check printer health
const checkPrinterHealth = async (printerName, mainWindow) => {
  const printersList = await getPrintersList(mainWindow);
  return printersList.some((printer) => printer.name === printerName);
};

// handles printing
const handlePrintRequest = async (req, res) => {
  const { options, content } = req.body;

  try {
    const { printerName } = options;

    if (!printerName) {
      return res
        .status(400)
        .json({ error: "printerName is required in options" });
    }

    const response = await PosPrinter.print(content, options);

    res.json({ success: true, message: "Invoice printed successfully" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getPrintersList, handlePrintRequest, checkPrinterHealth };

const express = require("express");
const router = express.Router();
const { testDataObject } = require('./testData'); 
const { getPrintersList, handlePrintRequest } = require('./printerUtils'); 


// Route to check if service is up or down
router.get("/v1/health", (req, res) => {
  res.send("Hello from Shoopy POS printer App!");
});


// Route to get the list of printers
router.get('v1/printers', async (req, res) => {
  try {
    const printers = await getPrintersList(global.mainWindow);
    res.json(printers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get printers' });
  }
});

// checks whether the printer is connected or not
router.get("/v1/printer-health", (req, res) => {
  const printers = global.mainWindow.webContents.getPrinters();
  res.json(printers);
});

// Route to handle test printing
router.post("/v1/test", (req, res) => {
  req.body.content = testDataObject; // Use predefined test data
  handlePrintRequest(req, res);
});

// Route to handle regular printing
router.post('/print', (req, res) => {
    handlePrintRequest(req, res);
});

module.exports = router;

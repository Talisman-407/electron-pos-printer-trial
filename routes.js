const express = require("express");
const router = express.Router();
const { sampleData, testData} = require('./sampleData'); 
const { getPrintersList, handlePrintRequest, checkPrinterHealth } = require('./printerUtils'); 

// Define the allowed origins
const allowedOrigins = ['https://stage.web.shoopy.in', 'https://web.shoopy.in', 'http://localhost:3002'];

const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200
};

router.use(cors(corsOptions));

// Route to check if service is up or down
router.get("/v1/health", (req, res) => {
  res.send("Hello from Shoopy POS printer App!");
});


// Route to get the list of printers
router.get('/v1/printers', async (req, res) => {
  try {
    const printers = await getPrintersList(global.mainWindow);
    res.json(printers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get printers' });
  }
});

// checks whether the printer is connected or not
router.get('/v1/printer-health', async (req, res) => {
  const printerName = req.query.printerName;
  if (!printerName) {
    return res.status(400).json({ error: 'printerName query parameter is required' });
  }
  try {
    const isPrinterConnected = await checkPrinterHealth(printerName, global.mainWindow);
    if (isPrinterConnected) {
      res.json({ message: `Printer ${printerName} is connected` });
    } else {
      res.status(404).json({ error: `Printer ${printerName} is not connected` });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to check printer health' });
  }
});

// Route to handle test printing
router.post("/v1/test", (req, res) => {
  req.body.content = testData; // Use predefined test data
  handlePrintRequest(req, res);
});

// Route to handle regular printing
router.post('/v1/print', (req, res) => {
    handlePrintRequest(req, res);
});

module.exports = router;

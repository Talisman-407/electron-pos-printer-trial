document.addEventListener("DOMContentLoaded", () => {
  const { ipcRenderer, getServerPort, onPrinterSelected } = window.electron;

  const fetchPrinters = () => {
    const loaderContainer = document.getElementById("loader_container");
    const printersListElement = document.getElementById("printers_container");
    const rescanButton = document.getElementById("rescan_button");
    if (loaderContainer && printersListElement && rescanButton) {
      // Show the loader and hide the rescan button
      loaderContainer.style.display = "block";
      rescanButton.style.display = "none";
      printersListElement.innerHTML = "";
    }

    ipcRenderer
      .invoke("get-printers")
      .then((printers) => {
        if (loaderContainer && printersListElement && rescanButton) {
          loaderContainer.style.display = "none"; // Hide the loader
          printersListElement.innerHTML = "";
          if (printers.length > 0) {
            printers.forEach((printer) => {
              const printerElement = document.createElement("div");
              printerElement.className = "printer";
              const printerImage = document.createElement("img");
              printerImage.src = "../assets/printer-logo.png"; // Path to your printer icon
              printerImage.alt = "Printer Icon";
              printerImage.className = "printer-icon";
              printerElement.appendChild(printerImage);
              const printerName = document.createElement("span");
              printerName.textContent = printer.name;
              printerElement.appendChild(printerName);
              printersListElement.appendChild(printerElement);
            });
          } else {
            const noPrintersElement = document.createElement("div");
            noPrintersElement.className = "no-printers";

            const noPrintersImage = document.createElement("img");
            noPrintersImage.src = "../assets/no-printers-icon.png"; // Path to your no printers icon
            noPrintersImage.alt = "No Printers Icon";
            noPrintersImage.className = "no-printers-icon";

            const noPrintersText = document.createElement("p");
            noPrintersText.textContent =
              "No devices found. Please connect a printer and click Scan Devices";
            noPrintersText.className = "no-printers-text";

            noPrintersElement.appendChild(noPrintersImage);
            noPrintersElement.appendChild(noPrintersText);
            printersListElement.appendChild(noPrintersElement);
          }
          // Show the rescan button after the list is rendered
          rescanButton.style.display = "block";
        }
      })
      .catch((error) => {
        console.error("Error fetching printers:", error);
        const errorElement = document.createElement("p");
        errorElement.textContent = "Failed to load printers";
        if (printersListElement) {
          printersListElement.appendChild(errorElement);
        }
        if (loaderContainer) {
          loaderContainer.style.display = "none";
        }
        if (rescanButton) {
          rescanButton.style.display = "block"; // Show the rescan button even if there's an error
        }
      });
  };

  // Initial fetch of printers
  fetchPrinters();

  // Update server info
  getServerPort().then((port) => {
    const serverInfoElement = document.getElementById("server-info");
    if (serverInfoElement) {
      serverInfoElement.textContent = `Server is running on port ${port}`;
    }
  });

  // Example of using onPrinterSelected callback
  onPrinterSelected((printerName) => {
    console.log("Printer selected:", printerName);
  });

  // Add event listener to the rescan button
  const rescanButton = document.getElementById("rescan_button");
  if (rescanButton) {
    rescanButton.addEventListener("click", fetchPrinters);
  }
});

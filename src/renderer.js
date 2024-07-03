document.addEventListener("DOMContentLoaded", () => {
  const { ipcRenderer, getServerPort, onPrinterSelected } = window.electron;

  // Update server info
  getServerPort().then((port) => {
    const serverInfoElement = document.getElementById("server-info");
    if (serverInfoElement) {
      serverInfoElement.textContent = `Server is running on port ${port}`;
    }
  });

  ipcRenderer
    .invoke("get-printers")
    .then((printers) => {
      const printersListElement = document.getElementById("printers_container");
      const loaderContainer = document.getElementById("loader_container");
      if (printersListElement && loaderContainer) {
        loaderContainer.remove(); // Remove the loader container from the DOM
        printersListElement.innerHTML = "";
        if (printers.length > 0) {
          printers.forEach((printer) => {
            const printerElement = document.createElement("div");
            printerElement.className = "printer";
            // Create an image element
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
          const noPrintersElement = document.createElement("p");
          noPrintersElement.textContent = "No printers found";
          printersListElement.appendChild(noPrintersElement);
        }
      }
    })
    .catch((error) => {
      console.error("Error fetching printers:", error);
      const errorElement = document.createElement("p");
      errorElement.textContent = "Failed to load printers";
      const printersListElement = document.getElementById("printers_container");
      if (printersListElement) {
        printersListElement.appendChild(errorElement);
      }
    });

  // Example of using onPrinterSelected callback
  onPrinterSelected((printerName) => {
    console.log("Printer selected:", printerName);
  });
});

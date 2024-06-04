window.addEventListener('DOMContentLoaded', async () => {
    const serverInfo = document.getElementById('server-info');
    try {
        const port = await window.electronAPI.getServerPort();
        serverInfo.textContent = `Server is running on port: ${port}`;
      } catch (error) {
        console.error('Error fetching server port:', error);
        serverInfo.textContent = 'Error loading server info.';
      }
  
      window.electronAPI.onPrinterSelected((printerName) => {
        printerInfo.textContent = `Printing on ${printerName}...`;
      });
});

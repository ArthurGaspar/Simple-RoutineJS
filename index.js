const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Load the initial HTML file
  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));
  ipcMain.on('colorChange', (event, colorMode) => {
    mainWindow.webContents.send('colorChange', colorMode);
  });
}

app.whenReady().then(createWindow);
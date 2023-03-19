const { app, BrowserWindow } = require('electron');
const path = require('path');

let scale = 1;
function createWindow () {
  const win = new BrowserWindow({
    width: 232 * scale,
    height: 322 * scale,
    titleBarStyle:"hidden",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    resizable:false,
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

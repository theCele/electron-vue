import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (process.env.APP_DEV) {
    win.loadURL('http://localhost:8080');
  } else {
    win.loadURL(path.join(__dirname, '..', 'renderer', `index.html`));
  }

  ipcMain.on('cele', (a, b) => {
    console.log(b);
    a.sender.send('pong', 'ping');
  });
}

app.on('ready', createWindow);
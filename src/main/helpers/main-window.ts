import * as path from 'path';
import * as url from 'url';
import { BrowserWindow, ipcMain } from 'electron';

let authWindow: BrowserWindow;

async function createAuthWindow(): Promise<void> {
  authWindow = new BrowserWindow({
    width: 700,
    height: 400,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, '/authwindow/preload.js'),
    },
    maxHeight: 400,
    maxWidth: 700,
    minHeight: 400,
    minWidth: 700,
    resizable: false,
    transparent: true,
  });
  authWindow.webContents.openDevTools();
  authWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '/authwindow/auth.html'),
      protocol: 'file',
      slashes: true,
    })
  );
}

function closeMainWindow(): void {
  ipcMain.emit('quit');
}

async function closeAuthWindow(): Promise<void> {
  authWindow.hide();
  authWindow = null;
}

export default {
  createAuthWindow,
  closeAuthWindow,
  closeMainWindow,
};

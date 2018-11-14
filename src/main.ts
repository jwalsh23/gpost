import { app, BrowserWindow } from 'electron';
declare var __dirname: string;

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({ width: 800, height: 600 });
  // and load the index.html of the app.

  const fileName = `file://${__dirname}/index.html`;
  win.loadURL(fileName);
}

app.on('ready', createWindow);

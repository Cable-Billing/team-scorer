const electron = require('electron');
const url = require('url');
const path = require('path');

const {app , BrowserWindow, Menu} = electron;

let mainWindow;

// Listen for the app to be ready
app.on('ready', function() {
    mainWindow = new BrowserWindow({}); // Create new window
    mainWindow.setMenu(null); // Disable menu bar
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    // Quit app when main window is closed
    mainWindow.on('closed', function() {
        app.quit();
    });
});

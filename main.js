const electron = require('electron');
const url = require('url');
const path = require('path');

const {app , BrowserWindow, Menu} = electron;

let mainWindow;

// Listen for the app to be ready
app.on('ready', function() {
    mainWindow = new BrowserWindow({ /*frame: false*/ }); // Create new window
    //mainWindow.setMenu(null); // Disable menu bar
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

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert Menu
    Menu.setApplicationMenu(mainMenu);
});

// Create menu template
const mainMenuTemplate = [{
    label: 'File',
    submenu: [{
        label: 'Reload',
        accelerator: process.platform == 'darwin' ? 'Command+R' : 'Ctrl+R',
        click() {
            mainWindow.reload();
        }
    }, {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
            app.quit();
        }
    }]
}, {
    label: 'View',
    submenu: [{
        label: 'Fullscreen',
        accelerator: process.platform == 'darwin' ? 'Command+F' : 'Ctrl+F',
        click() {
            if (mainWindow.isFullScreen()) {
                mainWindow.setFullScreen(false);
                mainWindow.setMenuBarVisibility(true);
            } else {
                mainWindow.setFullScreen(true);
                mainWindow.setMenuBarVisibility(false);
            }
        }
    }]
}];

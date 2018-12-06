const electron = require('electron');
const url = require('url');
const path = require('path');

const {app , BrowserWindow, Menu, remote, ipcMain} = electron;

let mainWindow;
let teamWindow;

// Listen for the app to be ready
app.on('ready', function() {
    mainWindow = new BrowserWindow({ title: 'Team Scorer' }); // Create new window
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    const menu = Menu.buildFromTemplate(menuTemplate); // Build menu from template
    Menu.setApplicationMenu(menu); // Insert Menu
    teamScoreWindow(); // Create team view
    mainWindow.focus(); // Make main window on top
});

// Team Score window
function teamScoreWindow() {
    teamWindow = new BrowserWindow({ title: 'Team Scorer' }); // Create new window
    // Load html into window
    teamWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'teamWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
}

// Make provided window fullscreen and remove menu
function makeFullscreen(window) {
    window.setFullScreen(true);
    window.setMenuBarVisibility(false);
}

// Catch team data
ipcMain.on('team-submit', function(e, teamData) {
    //console.log(teamData);
    teamWindow.webContents.send('team-submit', teamData)
    teamWindow.focus(); // Make team window on top
    makeFullscreen(teamWindow); // Fullscreen team window
    //mainWindow.close(); // Close main window
});

// Create menu template
const menuTemplate = [{
    label: 'File',
    submenu: [{
        label: 'Dev Tools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click() {
            teamWindow.toggleDevTools();
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
            if (teamWindow.isFullScreen()) {
                teamWindow.setFullScreen(false);
                teamWindow.setMenuBarVisibility(true);
            } else {
                teamWindow.setFullScreen(true);
                teamWindow.setMenuBarVisibility(false);
            }
        }
    }]
}];

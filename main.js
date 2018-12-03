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

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert Menu
    Menu.setApplicationMenu(mainMenu);
    teamScoreWindow(); // Create team view
    mainWindow.focus(); // Make main window on top
});

// Team Score window
function teamScoreWindow() {
    teamWindow = new BrowserWindow({}); // Create new window
    // Load html into window
    teamWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'teamWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Build menu from template
    const teamMenu = Menu.buildFromTemplate(teamMenuTemplate);
    // Insert Menu
    Menu.setApplicationMenu(teamMenu);
}

// Catch team data
ipcMain.on('team:submit', function(e, teamData) {
    //console.log(teamData);
    teamWindow.webContents.send('team:submit', teamData)
});

// Create main menu template
const mainMenuTemplate = [{
    label: 'File',
    submenu: [{
        label: 'Reload',
        accelerator: process.platform == 'darwin' ? 'Command+R' : 'Ctrl+R',
        click() {
            mainWindow.reload();
        }
    }, {
        label: 'Toggle Developer Tools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click() {
            mainWindow.toggleDevTools();
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

// Create team menu template
const teamMenuTemplate = [{
    label: 'File',
    submenu: [{
        label: 'Reload',
        accelerator: process.platform == 'darwin' ? 'Command+R' : 'Ctrl+R',
        click() {
            teamWindow.reload();
        }
    }, {
        label: 'Toggle Developer Tools',
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

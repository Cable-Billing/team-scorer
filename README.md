# team-scorer

Before running, make sure Electron is installed and to install all required packages
```
npm install electron --save-dev
npm install
```
Use `npm start` or `electron .` to run the app. If you want to compile for Linux, Mac OS or Windows you need to install Electron Packager
```
npm install electron-packager --save-dev
```
`Main.js` has scripts built in for compiling for each operating system
```
npm run package-mac
npm run package-win
npm run package-linux
```
To avoid any problems only compile for the operating system you are currently using

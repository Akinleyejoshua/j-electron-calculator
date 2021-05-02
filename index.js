const electron = require('electron')

const { app, BrowserWindow } = require('electron')

function createWindow() {
    // Create the browser window
    let win = new BrowserWindow({
        width: 445,
        height: 600,

        webPreferences: {
            nodeIntegration: true
        }

    })

    win.loadFile('Calculator.html')
}

app.on('ready', createWindow)

var close = document.getElementById('close');

close.addEventListener('click', (event) => {
    win.close()
})

const ELECTRON = require("electron")
const {app, BrowserWindow} = ELECTRON
const PATH = require("path")
const URL = require("url")

let win

function createWindow(){
  win = new BrowserWindow({ height: 600, width: 800})

  win.loadURL(URL.format({
      pathname : PATH.join(__dirname, 'index.html'),
      protocol : 'file',
      slashes : true
  }))
}

app.on('ready', createWindow)

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')

let win = null
let isDevelopment = true
if(isDevelopment){
  require('electron-reload',__dirname,{
    ignored: /node_modules|[\/\\]\./
  })
}
function createWindow(){
  
  win = new BrowserWindow({ width: 800, height: 600 })
  win.loadURL(`http://localhost:8080/index.html`)
  
  if(isDevelopment){
    win.webContents.openDevTools()
  }

  require('./native/menus.js')
  require('./native/ipcMain')
  require('./native/tray.js')
  win.on('closed', function(e) {
    win = null
  })
}

//监听应用准备完成的事件
app.on('ready', createWindow);

//监听所有窗口关闭的事件
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate',()=>{
    if(win===null) createWindow()
})

require('./native/shortCut')
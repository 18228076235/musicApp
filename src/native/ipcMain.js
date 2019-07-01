const {ipcMain, BrowserWindow} = require('electron')
const path = require('path')
ipcMain.on('sendMsg',(event, data)=>{
    console.log('data\n', data)
    console.log('event\n', event)
})

ipcMain.on('sendMsg',(event, data)=>{
    event.sender.send('sendFeedbackToRender', '来自主进程的反馈')
})

ipcMain.on('sendSync',(event, data)=>{
    event.returnValue='渲染进程和主进程同步通信 接收同步广播，来自主进程的反馈.'
})

let win
ipcMain.on('openWindow',(event, data)=>{
    let winId = BrowserWindow.getFocusedWindow().id
    win=new BrowserWindow({
        width: 200,
        height:200
    })
    win.loadURL(path.join('file:',__dirname,'../news.html'))
    win.webContents.openDevTools()
    win.webContents.on('did-finish-load',()=>{
        let id = BrowserWindow.getFocusedWindow().id
        win.webContents.send('toNew', data,winId, id)
    })
    win.on('close',()=>{
        win = null
    })
})


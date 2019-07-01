const send = document.querySelector('#send')

const {ipcRenderer, shell, remote} = require('electron')
send.onclick=()=>{
    ipcRenderer.send('sendMsg',{name:'poetries', age:18})
}

ipcRenderer.on('sendFeedbackToRender',(e,data)=>{
    console.log('event\n', e)
    console.log('data\n', data)
})

const sendSync = document.querySelector('#sendSync')
sendSync.onclick=()=>{
    const msg = ipcRenderer.sendSync('sendSync',{name:'p', age: 23})
    console.log('msg\n', msg)
}

const openWindow = document.querySelector('#openWindow')
openWindow.onclick=()=>{
    localStorage.setItem('name','小红')
    ipcRenderer.sendSync('openWindow',{'name':'66666'})
}
ipcRenderer.on('toIndex',(e,data)=>{
    console.log('===', data)
})

ipcRenderer.on('thisWin',(e,data)=>{
    console.log('=2=', data)
})

const  shellDom = document.querySelector('#shellDom')
shellDom.onclick=()=>{
    shell.openExternal('https://github.com/poetries')
}


const webview = document.querySelector('#webview')
ipcRenderer.on('openwebview',(e,url)=>[
    webview.src=url
])


let showError = document.querySelector('#showError');
let showMsg = document.querySelector('#showMsg');
let showOpenDialog = document.querySelector('#showOpenDialog');
let saveDialog = document.querySelector('#saveDialog');

showError.onclick=()=>{
    remote.dialog.showErrorBox('警告','操作有误')
}
showMsg.onclick=()=>{
    remote.dialog.showMessageBox({
        type:'info',
        title:'提示',
        message:'内容',
        buttons:['确定','取消']
    },(index)=>{
        console.log(index)
    })
}

showOpenDialog.onclick=()=>{
    remote.dialog.showOpenDialog({
        properties:['openDirectory','openFile']
    },(data)=>{
        console.log(data)
    })
}
saveDialog.onclick=()=>{
    remote.dialog.showSaveDialog({
        title:'Savle File',
        defaultPath:'/Users/poetry/Downloads/',
        filters:[
            { name: 'Images', extensions: ['jpg', 'png', 'gif'] }
        ]
    },(path)=>{
        console.log(path)
    })
}
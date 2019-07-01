const {globalShortcut, app} = require('electron')
app.on('ready',()=>{
    globalShortcut.register('command+e',()=>{
        console.log(1)
    })
    let isRegister = globalShortcut.isRegistered('command+e')
    console.log(isRegister)

    app.on('will-quit',()=>{
        globalShortcut.unregister('command+e')
    })
})
const path = require('path')

let options = {
    title:'electron 通知APi',
    body: 'hello poetries',
    icon: path.join(__dirname,'./../','src/static/boot.png')
}

document.querySelector('#showNotification').onclick=function(){
    let myNotification = new window.Notification(options.title, options)
    myNotification.onclick=function(){
        console.log('click notification')
    }
}

window.addEventListener('online', function(){
    console.log('online')
 }); 
 
 window.addEventListener('offline', function(){
    console.log('offline')
 });


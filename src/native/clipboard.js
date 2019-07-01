const {clipboard, nativeImage} = require('electron')

let msg = document.querySelector('#msg')
let plat = document.querySelector('#plat')
let text = document.querySelector('#text')

msg.ondblclick = function(){
    clipboard.writeText(msg.innerHTML)
    alert(msg.innerHTML)
}

plat.onclick=function(){
    text.value = clipboard.readText()
}

let copyImg = document.querySelector('#copyImg')
copyImg.onclick=function(){
    let image=nativeImage.createFromPath('./static/boot.png')
    clipboard.writeImage(image)
    let imgSrc = clipboard.readImage().toDataURL()
    console.log(imgSrc)
    let imgDom = new Image()
    imgDom.src = imgSrc
    document.body.appendChild(imgDom)
}
const { Menu, BrowserWindow, shell } = require('electron')

function openWebView(url) {
  let win = BrowserWindow.getFocusedWindow()
  win.webContents.send('openwebview', url)
}

function openWeb(url) {
  shell.openExternal(url)
}
const menus = [
  {
    label: '文件',
    submenu: [
      {
        label: '新建文件',
        acceler: 'ctrl+n',
        click: () => {
          openWeb('http://blog.poetries.top')
          console.log('新建文件')
        }
      },
      {
        label: '新建窗口',
        click: () => {
          openWeb('https://github.com/poetries')
          console.log('新建窗口')
        }
      }
    ]
  },
  {
    label: '加载网页',
    submenu: [
      {
        label: '博客',
        click: () => {
          openWebView('http://blog.poetries.top')
        }
      },
      {
        label: 'GitHub',
        click: function() {
          openWebView('https://github.com/poetries')
        }
      },
      {
        label: '优酷',
        click: function() {
          openWebView('https://www.youku.com')
        }
      }
    ]
  },
  {
    label: '编辑',
    submenu: [
      {
        label: '复制',
        role: 'copy'
      },
      {
        label: '剪切',
        role: 'cut'
      }
    ]
  }
]

const buildFromTemplate = Menu.buildFromTemplate(menus)
Menu.setApplicationMenu(buildFromTemplate)

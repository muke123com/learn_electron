const { app, BrowserWindow } = require('electron')

function createWindow () {
    // 创建浏览器窗口
    win = new BrowserWindow({ width: 800, height: 600 })
    win.webContents.openDevTools();
    // 然后加载应用的 index.html。
    win.loadFile('learn_dht/index.html')
}

app.on('ready', createWindow);
const { app, BrowserWindow } = require('electron')

function createWindow () {
    // 创建浏览器窗口
    let win = new BrowserWindow({ width: 800, height: 600 })
    win.webContents.openDevTools();
    console.log(win.isMovable);
    // 然后加载应用的 index.html。
    // 加载远程URL
    win.loadFile('learn/index.html')
}

app.on('ready', createWindow);
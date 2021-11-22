// C:\Windows\Boot\BootDebuggerFiles.ini

// 1. 引入fs模块
const fs = require('fs');

// 2. 调用方法
// 将反斜杠写为 \\   或改为正斜杠 /
fs.readFile('C:\\Windows\\Boot\\BootDebuggerFiles.ini', (err, data) => {
    if(err) throw err;
    // 输出读取的内容
    console.log(data.toString());
});


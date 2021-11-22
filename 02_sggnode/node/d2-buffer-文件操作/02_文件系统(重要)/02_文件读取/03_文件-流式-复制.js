// 1. 复制文件 = 流式读取 + 写入

// 引入fs模块
const { RSA_NO_PADDING } = require('constants');
const fs = require('fs');

// 2. 创建读取和写入流对象
const crs = fs.createReadStream('./Red.mp3');
const cws = fs.createWriteStream('./file/black.mp3');

// 第一种写法
// 3. 绑定事件读取内容
// crs.on('data', chunk => {
//     // 写入文件
//     cws.write(chunk);
// });


// 第二种写法
crs.pipe(cws);
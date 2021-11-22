/**
    1. 流式读取文件： fs.createReadStream(path[, options])

    ## readFile 与 createReadStream
        * 对于小文件读取和处理 readFile
        * 对于大文件读取      createReadStream
 */

// 1. 引入fs模块
const fs = require('fs');

// 2. 创建读取流对象
const crs = fs.createReadStream('./Red.mp3');

//3. 绑定事件 when 当....时候   chunk 块   当读取完一块数据后 触发
// chunk 时buffer格式
// chunk.length  每块所占大小  即每次读取多大一块的内容
// 这种读取是一块一块内容读取而不是一次读完
crs.on('data', (chunk) => {
    // console.log(chunk);
    console.log(chunk.length);
}); 

// 读取流打开的时候触发
crs.on('open', () => {
    console.log('读取流打开了');
});
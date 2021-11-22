/**
    文件删除
        * fs.unlink('./test.log', function(err){});
        * fs.unlinkSync('./move.txt');
 */

// 1. 引入 fs 模块
const fs = require('fs');

//2. 调用方法
// 异步
// fs.unlink('./project/index.js', err => {
//     if(err) throw err;
//     console.log('删除成功');
// });

// 同步
// fs.unlinkSync('./project/app.js');
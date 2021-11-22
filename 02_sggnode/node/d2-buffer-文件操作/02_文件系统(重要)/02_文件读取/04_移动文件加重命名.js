/**
 重命名： fs.rename(oldPath, newPath, callback)
 */
// 1. 引入模块
const fs = require('fs');

//2. 调用方法 
// 重命名
// 异步
// fs.rename('./home.js', './index.js', err => {
//     if(err) throw err;
//     console.log('重命名成功');
// });

// project文件夹必须已经存在
// 移动   改名
// fs.rename('./index1.html', './project/首页.html', err => {
//     if(err) throw err;
//     console.log('重命名成功');
// });

// 同步API
fs.renameSync('./project/app.css', './project/index.css');
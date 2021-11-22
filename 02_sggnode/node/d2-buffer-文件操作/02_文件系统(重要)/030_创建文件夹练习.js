/**
 通过 fs 模块创建下列文件结构 创建在 D:/    D:/project 
    project
        images
            logo.png
        css
            app.css
        js
            app.js
        index.html
 */

// 1. 引入fs模块
const fs = require('fs');

// 2. 创建文件夹
fs.mkdir('D:/project', err => {
    if(err) throw err;
    // project创建成功
    // 创建images文件夹
    fs.mkdir('D:/project/images', err => {
        if(err) throw err;
        const cws1 = fs.createWriteStream('D:/project/images/logo.png');
        cws1.close();
    })
    // 创建css文件夹
    fs.mkdir('D:/project/css', err => {
        if(err) throw err;
        const cws2 = fs.createWriteStream('D:/project/css/app.css');
        cws2.close();
    })
    // 创建js文件夹
    fs.mkdir('D:/project/js', err => {
        if(err) throw err;
        const cws3 = fs.createWriteStream('D:/project/js/app.js');
        cws3.close();
    })
    // 创建index.html
    const cws = fs.createWriteStream('D:/project/index.html');
    cws.close();
})





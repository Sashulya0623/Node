// fs 模块的路径问题
/**
 * 路径的分类
 * 绝对路径
 *   * D:/www/share/day05/代码/1-nodejs/write.js (windows)
 *   * C:/images/logo.png  (windows)
 *   * /usr/root/www/website/index.html (linux)
 * 相对路径
 *   * ./index.html
 *   * ../css/app.css  上一级目录中找 css/app.css
 *   * index.html  当前文件夹下的 index.html
 */ 

// fs 模块中的相对路径 参照的是执行命令时进入的工作目录
 const fs = require('fs');
 // fs.writeFileSync('D:\\www\\share\\day05\\课堂\\1-NodeJS\\代码\\3-文件系统\\index.html','abc');
 
 //特殊的变量  __dirname『始终保存的是当前文件所在文件夹的绝对路径』
 // console.log(__dirname);
 fs.writeFileSync(__dirname + '/index9.html','abc');
 
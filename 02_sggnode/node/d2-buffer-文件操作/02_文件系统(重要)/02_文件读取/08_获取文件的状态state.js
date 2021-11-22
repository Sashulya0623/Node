// stat 查看『资源的状态』
const fs = require('fs');

// 查看文件状态
fs.stat('./file', (err, stats) => {
    if(err) throw err;
    // 如果没有错
    console.log('是否为文件夹' + stats.isDirectory());
    console.log('是否为文件' + stats.isFile());
});
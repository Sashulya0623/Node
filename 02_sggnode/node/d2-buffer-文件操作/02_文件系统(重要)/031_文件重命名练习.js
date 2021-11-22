/**
 对一个文件夹中的文件, 进行重命名排序(file文件夹)
```
1-xxx.html
10-uio.html
4-xyz.html
6-abc.html
9-cef.html
```
    ||
    ||
    \/
```
1-xxx.html
2-xyz.html
3-abc.html
4-cef.html
5-uio.html
```
 */

// 1. 引入fs模块
const fs = require('fs');

// 2. 重命名
fs.rename('./file/10-uio.html', './file/5-uio.html', err => {
    if(err) throw err;
    console.log('重命名成功');
})
fs.rename('./file/4-xyz.html', './file/2-xyz.html', err => {
    if(err) throw err;
    console.log('重命名成功');
})
fs.rename('./file/6-abc.html', './file/3-abc.html', err => {
    if(err) throw err;
    console.log('重命名成功');
})
fs.rename('./file/9-cef.html', './file/4-cef.html', err => {
    if(err) throw err;
    console.log('重命名成功');
})
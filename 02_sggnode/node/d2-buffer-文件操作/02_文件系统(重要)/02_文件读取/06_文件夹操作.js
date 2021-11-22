/**
 文件夹操作
    * mkdir  创建文件夹
      * path
      * options 
        * recursive 是否递归调用删除
        * mode  权限 默认为 0o777
      * callback 
    * rmdir 删除文件夹
    * readdir  读取文件夹
 */

// 文件夹操作
const fs = require('fs');

// 1. 创建文件夹
// fs.mkdir('./html', err => {
//     if(err) throw err;
//     console.log('创建成功');
// });

// 2. 读取文件夹 read 读取  dir 文件夹
// fs.readdir('./project', (err, files) => {
//     if(err) throw err;
//     //输出文件夹下的『文件列表』
//     console.log(files);
// });

fs.readdir('d:/', (err, files) => {
    if(err) throw err;
    //输出文件夹下的『文件列表』
    console.log(files);
});

// 3. 删除文件夹  不要随意删
// 当文件夹非空时  添加{recursive: true}可以直接删除
// fs.rmdir('./project', {recursive: true},err => {
//     console.log(err);
// });
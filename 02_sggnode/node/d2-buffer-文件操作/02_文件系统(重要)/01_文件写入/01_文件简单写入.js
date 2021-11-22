/**
 1. 文件系统 fs
        fs全称为 file system，是 NodeJS 中的内置模块，可以对计算机磁盘中的文件进行增删改查等操作
 2. 文件写入
    2.1 简单写入
    2.1.1 异步写入：fs.writeFile(file, data[, options], callback)
            file: 文件名或文件描述
            data: 写入的数据
                - 写入的数据换行
                    * windows下： \r\n
                    * linux下：\n
                    * mac下： \r
            options: 设置字符编码、文件权限，可省略
                -  encoding: 字符集，默认utf-8
                -  flag文件系统标志(默认w)
                    * r   read  只读
                    * w   write 可写(原内容会被新写的内容覆盖)
                    * a   append  追加(在原来的内容基础上追加新内容)
                -  mode权限模式： 默认值0o666
                    * 0o666  Linux 下文件权限的管理方式
                        - 6   文件所有者(文件的创造者)的权限  例index.html的所有者是我
                        - 6   文件所属组的权限  
                        - 6   其他人权限
                        * 6 怎么来的   4 + 2可读可写
                        * 4   可读
                        * 2   可写
                        * 1   可执行
                        最高权限 chmod 0777 -R www，但一般不会这么设置太危险了
                        chmod 0755 文件  一般除文件所有者只可读可执行
                        chmod 0644 文件夹  
            callback: 回调函数
    2.1.2 同步写入：fs.writeFileSync(file, data[, options])
            与异步相比没有回调函数

    * 6. 异步与同步区别
            * 6.1 异步函数的回调不是立刻执行的
            * 6.2 如何判定回调的执行是同步还是异步的??
                * 6.2.1 尝试在回调中进行内容输出(log), 然后在回调后也进行输出, 然后对比输出顺序
            * 6.3 关于同步API与异步 API的选择
                * 6.3.1 如果要做服务, 需要使用『异步』
                * 6.3.2 如果做文件相关的处理,  不涉及为用户提供服务, 可以使用同步API(简单写入, 读取)
            
 */
// 1. 文件写入步骤
// 1.1 引入fs模块
const fs = require('fs');

// 1.2 调用 fs 中的方法 writeFile 写入文件
// 在当前文件夹下写入index.html文件
// 1.21 异步API    写入writeFile方法
fs.writeFile('./index.html', '是人行邪道，不能见如来\r\n', {flag: 'a'}, function(err) {
    // 判断是否写入失败  写入失败返回失败 若无失败 返回null
    if(err) {
        console.log('写入失败');
        console.log('失败的错误为'+ err);
        return;
    }
    // 写入成功
    console.log('写入成功');
    // console.log(111);
});
// console.log(222);


// 2. 同步API 
fs.writeFileSync('./app.css', '* {margin: 0; padding: 0}');


// 同步与异步的演示
// const arr = [1,2,3,4,5,6,9];

// arr.forEach(item => {
//     // console.log(item * 10000);
//     console.log(11);
// });

// setTimeout(() => {
//     console.log(111);
// })

console.log('22');
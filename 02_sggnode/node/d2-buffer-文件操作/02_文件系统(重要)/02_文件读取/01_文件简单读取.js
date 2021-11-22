/**
  * 读取分为异步读取和同步读取
    异步： fs.readFile(path[, options], callback)
    同步： fs.readFileSync(path[, options])
  1.  读取文件常见错误
        ```
        [Error: ENOENT: no such file or directory, open 
        ```
        没有找到目标文件, 遇到此情况需要仔细检查目标路径
 */
// 1. 引入fs模块
const fs = require('fs');

// 2. 异步读取 调用方法读取内容
// err是读取失败的错误， data是读取成功的内容，buffer格式
// fs.readFile('./health.html', (err, data) => {
//     if(err) {
//         console.log('读取失败');
//         console.log('错误为');
//         console.log(err);
//         return;
//     }
//     // 读取成功 输出读取的内容  是buffer格式 要转成字符串
//     console.log(data.toString());
// })

// 3. 同步读取
let result = fs.readFileSync('./index.html');
console.log(result.toString());
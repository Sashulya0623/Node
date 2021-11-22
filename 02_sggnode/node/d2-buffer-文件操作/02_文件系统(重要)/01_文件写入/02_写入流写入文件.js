/**
    1. writeFile 与 createWriteStream 使用场景
            对于简单的写入次数较少的情况, 可以使用 writeFile , 
            如果是批量要写入的场景,使用 createWriteStream
 */
// 1. 引入fs模块
const fs = require('fs');

// 2. 创建写入流对象
// const cws = fs.createWriteStream('./home.html');
const cws = fs.createWriteStream('./home.js');

// 3. 执行写入： 写入内容
// cws.write('<html>');
// cws.write(`
//     <head>
//         <title>这是一个脚本创建的文件哦</title>
//     </head>
//     <body>
//         <h1>哎呦 不错哦~</h1>
//     </body>
// `);
// cws.write('</html>');


cws.write(`
    const body = document.body;
    body.style.background = 'pink';
    setTimeout(() => {
        alert('恭喜中奖啦!!!');
    }, 1000);
`)


// 4. 关闭写入流
cws.close();
// 1. 引入fs模块
const fs = require('fs');

// 2. 读取
fs.readFile('./data.json', (err, data) => {
    if(err) throw  err;
    // 2.1 将内容由buffer转为字符串并赋值给变量
    let str = data.toString();
    // 2.2 将字符串转化为json格式
    let dataJSON = JSON.parse(str);
    console.log(dataJSON);
})
// 这是用法二：数据遍历 单独写的文件
// html数据分离
const express = require('express');
const app = express();

const ejs = require('ejs');
const fs = require('fs');
 
// 静态资源服务
app.use(express.static('../public'));
// 显示歌曲列表
app.get('/songs', (request, response) => {
    // 字符串参数
    let str = fs.readFileSync('./views/歌曲列表.html').toString();
    // 数据对象
    let data = {
        songs: [
            'Oops',
            'Something just like this',
            'Red',
            'Spark Fly',
            'Love Story'
        ]
    };
    // 编译内容
    const result = ejs.render(str, data);
    // 响应
    response.send(result);
})

app.listen(8000);
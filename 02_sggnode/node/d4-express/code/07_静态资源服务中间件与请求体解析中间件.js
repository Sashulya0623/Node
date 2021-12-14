const express = require('express');
const app = express();


// 1. 静态资源服务中间件： 设置之后，发起请求都会先在静态资源public目录中查找
app.use(express.static('./public'));


// 2. npm安装body-parser中间件
// 2.1 引入body-parser
const bodyParser = require('body-parser');
// 2.2 使用配置body-parser中间件
// app.use(bodyParser.urlencoded({ extended: false }));


// 3. 简易的自定义请求体处理中间件
let myBodyParser = function(request, response, next) {
    // 获取请求体
    let body = '';
    request.on('data', chunk => {
        body += chunk;
    });
    request.on('end', () => {
        // 解析
        let newBody = new URLSearchParams(body);
        // 笨方法 自己创建一个对象 遍历填值
        let data =　{};
        newBody.forEach((value, name) => {
            data[name] = value;
        })
        // 将请求体对象作为属性 存储到 request 对象中
        request.body = data;
        next();
    })
}
// 3.1 自定义中间件配置
app.use(myBodyParser)

// 2.3 请求体参数的获取  中间件 body-parser
app.get('/login', (request, response) => {
    // 将某和文件的内容 响应给浏览器
    response.sendFile(__dirname + '/02_login.html');
})

app.post('/test', (request, response) => {
    // 获取请求体 body-parser
    //  3> request.body 获取请求体中的某个属性
    // 3> 使用了body-parser中间件 request.body才能获取到参数
    // 3> 即request.body要和中间件一起使用
    console.log(request.body);
    console.log(request.body.username);
    console.log(request.body.password);
    response.send('请求体参数接收完毕')
})

app.listen(8000)
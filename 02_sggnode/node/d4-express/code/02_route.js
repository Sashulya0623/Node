// 路由实例
// 1. 引入express包
const express = require('express');
const fs = require('fs');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// 一个路由规则一个页面

// 3.1 get方法
app.get('/', (request, response) => {
    // send 是express封装的相应方法，里面已经设置了字符集
    // response.setHeader('Content-Type','text/html;charset=utf-8');
    response.send('Hello route!');
});
// 登录页面
app.get('/login', (request, response) => {
    let html = fs.readFileSync(__dirname + '/02_login.html');
    response.end(html);
});
// 注册页面
app.get('/register', (request, response) => {
    response.send('注册页面');
});

// 3.2 post方法
// 登录发送页面
app.post('/login', (request, response) => {
    response.send('登录发送页面');
});

// 3.3 all  任意方法
app.all('/test', (request, response) => {
    response.send('all 所有方法');
});

// 4. 内网穿透 - 外网访问 ： 我用手机数据访问电脑服务
app.get('/introduce', (request, response) => {
    const body = fs.readFileSync(__dirname + '/02_intro.html');
    response.end(body);  
});

// 4. 监听端口
app.listen(8000);
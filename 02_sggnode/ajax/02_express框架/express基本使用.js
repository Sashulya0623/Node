// 在ajax根目录下安装express
// 首先初始化目录： npm init --yes
// 安装express: npm i express

// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/', (request, response)=> {
    // 设置响应
    response.send('Hello Express');
})

// 4. 监听端口启动服务
app.listen(8000, ()=> {
    console.log("服务已启动，8000 端口监听中....");
})

// 执行    node express基本使用.js
// 终端打印出： 服务已启动.....
// 打开127.0.0.1:8000页面，，网页显示 ：Hello Express
const express = require('express');
// 1. 下载安装
// 2. 引入cookie-parser
const app =express();
const cookieParser = require('cookie-parser');

// 3. 设置中间件 cookie-parser     cookie 方法中间件内部添加的
app.use(cookieParser());

// 路由设置
app.get('/', (request, response) => {
    response.send('Hello cookie');
})
app.get('/set-cookie', (request, response) => {
    // 4. cookie的设置   键值对的形式
    response.cookie('email', 'exfrvg123@qq.con'); 
    // 4.1 设置有时效的cookie  单位是毫秒
    response.cookie('unaed', 'uwdef23efr', {maxAge: 1*60*1000});// 1min
    response.send('cookie设置');
})

// 4.2 获取cookie
app.get('/get-cookie', (request, response) => {
    // 读取cookie  请求头中
    console.log(request.cookies);// 这里有 s 一定要注意
    response.send('cookie读取');
})

// 4.3 清空cookie
app.get('/clear-cookie', (request, response) => {
    response.clearCookie('email');
    response.send('cookie的清除');
})

app.listen(8000, () => {
    console.log('端口8000已启动 监听中');
})
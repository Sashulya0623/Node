//  中间件是一个函数
const express = require('express');
// 引入moment插件包
const moment = require('moment');
const fs = require('fs');

const app = express();
// 1. 中间件分为全局中间件和路由中间件，前者在全局中都可使用，后者在规定的路由规则中使用
// 现在有一需求：将用户发起的http请求的 路径和 请求时间 记录在文件 access.log中

// 一般做法是在路由规则中写代码获取，但是不同的http请求都要记录，则要在不同的路由中写大量重复的代码
// 此时可以用中间件来减少代码重复

// 2. 全局中间件
// 2.1 先声明一个中间件函数， next是一个函数类型的值 
let record = function(request, response, next) {
    // 先获取时间 这里用了  时间处理插件 momentjs
    let time = moment().format('YYYY-MM-DD HH:mm:ss');
    // 获取路径
    const path = request.url;
    // 拼接要写入文件的字符串
    let str = `[${time}] ${path}\r\n`;
    // 写入文件
    fs.writeFileSync('./access.log', str, {flag: 'a'});
    // * 调用next函数   
    // 如果不调用next方法，下面路由将不起作用
    next();
}

// 2.2 声明了需要调用才能起作用 use方法
// 使用中间件 即中间件的配置
// 全局中间件：没有挂载路径，应用的每个请求都会执行该中间件
app.use(record)


// 3. 路由中间件  指定某路由使用该中间件
// 3.1 先声明中间件函数  
let checkUser = function(request, response, next) {
    // 获取admin 值      url参数中
    let isAdmin = request.query.admin;
    // 判断
    if(isAdmin === '1') {
        // 满足条件
        next();
    }else {
        // 不满足 跳转页面
        response.redirect('/login');
    }
}

// 3.2 用在哪个路由规则 则添加中间件到第二个参数中
// 127.0.0.1/main?admin=1
app.get('/main', checkUser, (request, response) => {
    response.send('首页');
});
app.get('/setting', checkUser, (request, response) => {
    response.send('后台设置');
});

app.get('/', (request, response) => {
    response.send('中间件');
});
app.get('/home', (request, response) => {
    response.send('前端首页');
})

app.get('/cart', (request, response) => {
    response.send('购物车');
});

app.get('/login', (request, response) => {
    response.send('登录页面');
});

app.listen(8000);
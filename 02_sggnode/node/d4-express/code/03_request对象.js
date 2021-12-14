// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建服务
app.get('/', (request, response) => {
    // 设置响应
    response.send('Hello Express request');
});

// 3.1 request对象属性和方法
app.get('/req', (request, response) => {
    // 获取请求方法类型
    // console.log(request.method);
    // 获取请求的URL
    // console.log(request.url);
    // 获取请求HTTP协议版本
    // console.log(request.httpVersion);
    // 获取请求头
    // console.log(request.headers);
    // 获取请求头中指定key对应的value
    console.log(request.headers['accept-language']);


    // 输入路径 http://127.0.0.1:8000/req?username=admin&password=123456
    // 3.1 request.query	获取get请求查询字符串的参数，拿到的是一个对象
    console.log(request.query);// { username: 'admin', password: '123456' }
    // request.get(xxxx)	获取请求头中指定key对应的value
    console.log(request.get('accept-language'));


    response.send('请求内容的获取');
})

// 3.2 request.params	获取get请求参数路由的参数，拿到的是一个对象
// 不同id对应不同新闻内容
// 3.2.1 url规则中填写占位符(:标识符)
app.get('/news/:id.html', (request, response) => {
    // 3.2.2 获取url中的路径参数  
    // http://127.0.0.1:8000/news/198358.html
    let id = request.params.id;
    console.log(id);
    response.send(`id为${id}的新闻内容`);// id为198358的新闻内容
});

// 仿京东的路由设置
app.get('/:abc.html', (request, response) => {
    let id = request.params.abc;
    response.send('id 为 '+id+' 的商品信息');// id 为 abc 的商品信息
});


// 3.3 request.body	获取post请求体，拿到的是一个对象（要借助一个中间件）
// 中间件后续介绍 

// 4. 监听端口
app.listen(8000, () => {
    console.log('服务已经启动.. 端口 8000 监听中....');
});
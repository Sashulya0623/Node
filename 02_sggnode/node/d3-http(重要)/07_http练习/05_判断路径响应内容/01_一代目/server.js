// 1. 引入http模块
const http = require('http');
const fs = require('fs');

// 2. 创建http服务
const server = http.createServer((request, response) => {
    // 根据路径响应对应的内容， 要先获取请求的路径
    let myUrl = new URL(`${request.url}`, 'http:127.0.0.1:8000');
    let pathname = myUrl.pathname;
    //判断
    if(pathname === '/index.html'){
        //读取 public/index.html 文件中的内容
        let html = fs.readFileSync(__dirname + '/public/index.html');
        response.end(html);
    }else if(pathname === '/css/app.css'){
        let css = fs.readFileSync(__dirname + '/public/css/app.css');
        response.end(css);
    }else if(pathname === '/css/home.css'){
        let css = fs.readFileSync(__dirname + '/public/css/home.css');
        response.end(css);
    }else if(pathname === '/js/app.js'){
        let js = fs.readFileSync(__dirname + '/public/js/app.js');
        response.end(js);
    }else if(pathname === '/images/logo.JPG'){
        let img = fs.readFileSync(__dirname + '/public/images/logo.JPG');
        response.end(img);
    }else {
        response.statusCode = 404;
        response.end('Not Found');
    }
});

// 3. 监听服务
server.listen(8000);
// 1. 引入http模块
const http = require('http');
const fs = require('fs');

// 2. 创建服务
const server = http.createServer((request, response) => {
    // 请求路径
    let myUrl = new URL(`${request.url}`, 'http://127.0.0.1:8000');
    let pathname = myUrl.pathname;
    // 响应路径 
    let respath = __dirname + pathname;

    // 读取文件内容
    fs.readFile(respath, (err, data) => {
        if(err) {
            // 404 响应
            response.statusCode = 404;
            response.end('<h1>404 Not Found</h1>');
        }else{
            // 响应文件内容
            response.end(data);
        }
    })
});

// 3. 监听端口
server.listen(8000);
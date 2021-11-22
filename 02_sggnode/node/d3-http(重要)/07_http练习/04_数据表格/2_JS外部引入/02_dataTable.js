// 1. 引入http模块
const http = require('http');
const fs = require('fs');

// 2. 创建http服务
const server = http.createServer((request, response) => {
    // 要做路径判断
    let myUrl = new URL(`${request.url}`, 'http://127.0.0.01:8000');
    let pathname = myUrl.pathname;
    let method = request.method;
    if(method.toUpperCase() === 'GET' && pathname === '/table') {
        // 读取html文件
        let dataTable = fs.readFileSync(__dirname + '/02_dataTable.html');
        response.end(dataTable);
    } else if(method.toUpperCase() === 'GET' && pathname === '/data.js') {
        // 读取文件
        let dataJS = fs.readFileSync(__dirname + '/data.js');
        response.end(dataJS);
    } else {
        response.end('NOT FOUND 404');
    }
});

// 3. 监听端口
server.listen(8000);
// 1. 引入http模块
const http = require('http');
const fs = require('fs');

// 2. 创建http服务
const server = http.createServer((request, response) => {
    // 读取html文件
    let dataTable = fs.readFileSync(__dirname + '/01_dataTable.html');
    response.end(dataTable);
});

// 3. 监听端口
server.listen(8000);
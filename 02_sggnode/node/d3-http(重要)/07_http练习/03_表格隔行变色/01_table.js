// 1. 引入http模块
const http = require('http');
const fs = require('fs');

// 2. 创建服务
const server = http.createServer((request, response) => {
    // 读取01_table.html
    const table = fs.readFileSync(__dirname + '/01_table.html');
    response.end(table);
})

// 3. 监听端口
server.listen(8000);
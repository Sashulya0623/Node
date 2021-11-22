// 1. 引入http模块
const http = require('http');

// 2. 调用方法 创建服务对象
/**
 * request 请求报文的封装对象
 * response 响应报文的封装对象
 */
const server = http.createServer(function(request, response) {
    response.end('Hello HTTP server');
});

// 3. 监听端口 启动服务
/**
 *端口号 
 * 计算的服务窗口  总共65536端口  HTTP服务常用端口 8000 3000 9000 8080
 * HTTP 默认端口 80  ,80于8000是不同的端口号
 * ctrl + c 停止终端启动的服务
 * 启动后在浏览器打开服务 127.0.0.1:8000
 * 127.0.0.1  本机的回环地址   永远指向本机
 */
server.listen(8000, function() {
    console.log('服务已启动，端口8000监听中');
})
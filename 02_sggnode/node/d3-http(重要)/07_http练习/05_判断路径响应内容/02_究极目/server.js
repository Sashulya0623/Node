// 1. 引入http模块
const http = require('http');
const fs = require('fs');

// 6. 和一代目的区别在于判断代码简化了  


// 2. 创建http服务
const server = http.createServer((request, response) => {
    // 2.1 根据路径响应对应的内容， 要先获取请求的路径
    let myUrl = new URL(`${request.url}`, 'http:127.0.0.1:8000');
    let pathname = myUrl.pathname;
    // 2.2 根据一代目代码可以发现请求响应路径 等于    __dirname + '/public' +  pathname
    // 2.3 网站的根目录:  服务根据请求路径到『指定文件夹』下找文件, 那么这个『指定的文件夹』就是网站的根目录
    // let directory = __dirname + '/public';
    // let filePath = directory + pathname;
    let filePath = __dirname + '/public' + pathname;
    // 读取文件内容
    fs.readFile(filePath, (err, data) => {
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

// 3. 监听服务
server.listen(8000);
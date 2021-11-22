// 简写创建服务
require('http')
.createServer((request, response) => {
    // 1. 响应行信息设置
    // 1.1 响应成功状态码
    response.statusCode = 255;
    response.statusCode = 300;
    // 1.2 响应状态字符串： 响应成功返回信息
    response.statusMessage = 'iuhcufbvbyg';

    // 2. 响应头
    response.setHeader('Content-type', 'text/html;charset=utf-8');
    // 2.1 自定义头信息
    response.setHeader('username', 'sggnodejs');

    // 3. 响应体：响应体不能为空，必须有内容
    // 响应体有两种设置方法： write(字符串或缓冲区)和end
    response.write('1111');
    response.write('2222');
    response.write("3333");
    response.write("4444");
    response.end('Hello response information');
}).listen(8000)
// 我在浏览器输入的url是 http://127.0.0.1:8000/apnguozhi?is_lajiao=1&is_xiangcai=0&is_latiao=1

// 1. 引入http模块
const http = require('http');

// 2. 调用方法 创建http服务对象
const server = http.createServer(function(request, response) {
    // 2.0 获取请求报文中的内容
    // 2.1 获取请求类型：即请求方法的类型
    console.log(request.method);// get
    // 2.2 获取请求的url
    console.log(request.url);// /apnguozhi?is_lajiao=1&is_xiangcai=0&is_latiao=1
    // 2.3 获取http协议版本
    console.log(request.httpVersion);


    // 2.4 获取url中的路径部分: 需用到url模块
    // 2.4.0 先new一个URL实例
    const myUrl = new URL(`${request.url}`,'http://localhost:8000/');
    console.log(myUrl);
    // 2.4.1 获取想要获取的数据
    // 2.4.2 获取url中的路径部分
    console.log(myUrl.pathname);
    // 2.4.3 获取查询字符串
    console.log(myUrl.search);// 返回值是字符串
    console.log(myUrl.searchParams);// 伪对象形式


    
    // 2.4.4 获取请求头信息
    console.log(request.headers);
    // 获取单个请求头信息 ['请求头名称']
    console.log(request.headers['accept-encoding']);

    response.end('hello http');
})

// 3. 监听端口 启动服务
server.listen(8000, function() {
    console.log('服务已启动，端口8000监听中');
})
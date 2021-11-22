// post请求有请求体，get请求体是空的
// 新建一个form文件，含有post请求
// 点击登录 发送post请求   admin2  admin2

// req.on(data)指每次发送的数据；req.on(end)数据发送完成；

// 1. 引入http模块
const http = require('http');

// 2. 创建http服务
const server = http.createServer(function(request, response) {
    // 2.0 提取请求体内容 post请求
    // 2.1 声明一个字符串变量
    let reqBody = '';
    // 2.2 绑定 data事件
    request.on('data', chunk => {
        // 拼接
        reqBody += chunk.toString();
    });
    // 2.3 绑定end事件
    request.on('end', () => {
        // 打印出请求体
        console.log(reqBody);// username=admin2&password=admin2
        // 把键值对字符串形式转为对象形式
        // 3. new URLSearchParams(iterable)： 替代querystring
        // iterable <Iterable> 元素为键值对的可迭代对象,例如username=admin2&password=admin2
        let body = new URLSearchParams(reqBody);
        // 笨方法 自己创建一个对象 遍历填值
        let obj =　{};
        body.forEach((value, name) => {
            obj[name] = value;
        })
        // 下面是更笨的obj创建方法
        // let username = body.get('username');
        // let password = body.get('password');
        // let obj = {
        //     username: username,
        //     password: password
        // }


        console.log(obj);

        response.end('request body information');
    })
    
});

// 3. 监听http服务
server.listen(8000, function() {
    console.log('服务已启动去，端口8000监听中');
})
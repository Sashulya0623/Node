// 1. 引入http模块
const http = require('http');
const fs = require('fs');

// 2. 创建服务
const server = http.createServer((request, response) => {
    // 设置响应头
    response.setHeader('Content-type', 'text/html;charset=utf-8');

    // 根据浏览器中输入的不同路径返回相应内容
    // 2.1 首先获取输入的路径和请求方法
    let myUrl = new URL(`${request.url}`, 'http://localhost:8000/');
    let path = myUrl.pathname;//      /....
    let methods = request.method;
    // 2.2 判断请求方法类型和输入的路径  返回相应的页面面
    // 先创建好对应页面   再fs读取页面文件  ，这样页面更改不需要重启服务器
    // 不确定方法类型的大小写 都转成大写 toUpperCase
    if(methods.toUpperCase() === 'GET' && path === '/login') {
        // 响应登录页面
        response.end(fs.readFileSync(__dirname + '/login.html'));
    } else if(methods.toUpperCase() === 'GET' && path === '/register') {
        // 响应注册页面
        response.end(fs.readFileSync(__dirname + '/register.html'));
    } else if(methods.toUpperCase() === 'POST' && path === '/register') {
        // 3. 响应注册行为
        // 点击注册后 把用户信息写入user.json中
        // 声明变量 保存数据
        let data = '';
        // 3.1 监听data事件获取数据
        request.on('data', chunk => {
            data += chunk;
        })

        // 3.2 监听end事件 输出数据
        request.on('end', () => {
            // 3.2.1 监听到的新用户注册信息
            // console.log(data); // email=1234%40qq.com&password=1234
            // 3.2.1.1 把新用户信息由字符串形式转换成对象形式
            // querystring.parse弃用后自己用的笨方法：自己创建对象
            // console.log(new URLSearchParams(data));
            let data1 = new URLSearchParams(data);
            let newObj = {};
            data1.forEach((value, name) => {
                newObj[name] = value;
            })

            // console.log(newObj);


            // 3.2.2 把已有的所有的用户信息都读取出来 
            // 读出来的数据是buffer格式的 要转为字符串形式
            const users = fs.readFileSync('./user.json').toString();
            // console.log(users);// 字符串：包含一个对象(包含用户信息)
            // 3.2.2.1 把用户信息users转化为对象形式
            const usersObj = JSON.parse(users);
            // console.log(usersObj);// 对象格式：一个对象(包含用户信息)


            // 3.2.3 将新用户的对象压入到 usersObj 对象
            usersObj.data.push(newObj);
            // 3.2.4 将对象转化为JSON字符串
            let str = JSON.stringify(usersObj);
            // 3.2.5 存储新的数据
            fs.writeFileSync('./user.json', str);

           
            
            response.end('恭喜恭喜 注册成功');
        })
    } else{
        response.end('<h1>404 Not Found</h1>');
    }

});

// 3. 监听服务
server.listen(8000);
// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 路由设置
app.get('/res', (request, response) => {
    // 3.1 响应状态码设置: 2种
    // response.statusCode = 250;
    response.status(200);
    // 3.2 响应状态信息
    response.statusMessage = 'ok';
    // 3.3 设置响应头： 2种
    // response.setHeader('week','san');
    // response.setHeader('Content-type','text/html;charset=utf-8');
    // response.set('a', '100');
    // 3.4 设置响应体 : 设置响应体之后, 就不能再设置响应头了
    // response.write('Hello');// 和response.send不能同时用

    // 3.5 response.download()	告诉浏览器下载一个文件
    // response.download与response.setHeader不能同时用
    // response.download与response.send一般有一个就好
    // response.download('../package.json');

    // 3.6 response.sendFile()	给浏览器发送一个文件(必须为绝对路径)
    // response.sendFile(__dirname + '/02_intro.html');

    // 3.7 response.redirect()	重定向到一个新的地址（url）
    // response.redirect('https://www.baidu.com');

    // 3.9 response.send()	给浏览器做出一个响应(自动追加响应头:字符集设置等)
    response.send('断剑重铸之日，骑士归来之时');
    // response.end('response.write和response.send不能同时用')	// 给浏览器做出一个响应（不会自动追加响应头）

    


})

// 4. 监听端口
app.listen(8000, () => {
    console.log('端口8000监听中');
})
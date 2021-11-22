// 1. 引入http模块
const http = require('http');

// 2. 创建http服务对象
const server = http.createServer((request, response) => {
    // 解决中文乱码问题：有两种方式
    // 方式一：设置响应头
    response.setHeader('Content-type', 'text/html;charset=utf-8');

    // 获取url中的bg参数值
    // 先new一个URL实例
    let myUrl = new URL(`${request.url}`,'http://localhost:8000/');
    // 获取查询字符串
    console.log(myUrl.search);// ?bg=rgb(0,10,200)
    let myQuery = new URLSearchParams(myUrl.search);
    console.log(myQuery);// bg=rgb(0,10,200)
    let bg = myQuery.get('bg') ? myQuery.get('bg') : '#edf';
    // console.log(bg);  // rgb(0,10,200)
    
    // 返回一个html页面
    response.end(
        `
        <!DOCTYPE html>
        <html>
            <head>
                <!-- 方式二：直接meta设置字符集 -->
                <!-- <meta charset="utf-8"> -->
                <title>背景颜色</title>
                <style>
                body {
                    /* background-color: pink; */
                    /* 根据参数背景颜色变换则是变量不能写死 */
                    background-color: ${bg};
               }
                </style>
            </head>
            <body>
                <h1>身是菩提树，心如明镜台，时时勤拂拭，勿使惹尘埃。</h1>
            </body>
        </html>
        `
    )
    
}).listen(8000);
// 1. 导入express包
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 设置路由
app.get('/', (request, response) => {
    response.end('Hello EXPRESS!');
})

// 4. 端口 启动服务
app.listen(8000, () => {
    console.log('端口8000已启动，监听中');
})
const express = require('express');
const app = express();

// 1. 创建一个 routes 文件夹
// 2. 创建单独的文件 front-router.js
// 3. 修改 front-router.js 中代码(四步)
// 4. 主文件中引入 front-router.js
// 5. app.use 设置中间件

// 引入
const Router = require('./routes/front-router.js');
const MyRouter = require('./routes/end-router.js');
// 设置
app.use(Router);
app.use(MyRouter);

app.listen(8000)
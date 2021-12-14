// 选手数据
const player = [
    { id: 1, name: '百里守约' },
    { id: 2, name: '诸葛亮' },
    { id: 3, name: '马可波罗' },
    { id: 4, name: '铠' },
];

// 引入 express 包
const express = require('express');
// 创建应用对象
const app = express();

// 1. 安装ejs
// 2. 设置 express 使用的模板引擎 ejs
app.set('view engine', 'ejs');// 模板不止ejs一种,这里使用的是ejs
// 2.1 设置 ejs 使用的模板的存放位置   模板指的就是 HTML 代码存放的文件
app.set('views', './template'); // 第二个参数可改动 是存放.ejs文件的位置

// 路由设置
app.get('/player', (request, response) => {
    // 3. 到指定的文件夹下创建模板文件
    // 4. 设置模板响应  使用 ejs 编译 ./template/player.ejs 文件中的内容
    response.render('player.ejs', {player: player})
});

// 监听端口 启动服务
app.listen(8000, () => {
    console.log('服务已经启动.. 端口 8000 监听中....');
});
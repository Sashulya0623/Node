// 把用户注册信息存储在数据库中
// 连接上数据库以后在发起http请求

// 下载引入mongoose
const mongoose = require('mongoose');

// 下载引入express
const express = require('express');
// 下载引入body-parser
const bodyParser = require('body-parser');
// 下载引入 md5
const md5 = require('md5');

// 连接数据库
mongoose.connect('mongodb://127.0.0.1/project');

// 数据库连接成功
mongoose.connection.on('open', (err, data) => {
    if(err) throw err;
    // 连接成功 发起http请求 并把用户数据存储在数据库中
    // 现在数据库中创建文档结构和文档对象模型
    const MemberSchema = new mongoose.Schema({
        username: String,
        password: String
    });
    const MemberModel = mongoose.model('members', MemberSchema);

    const app = express();
    // 1. 安装 配置 ejs
    app.set('view engine', 'ejs');// 指定ejs模板
    app.set('views', './views');// 模板文件位置

    // 2.1 配置body-parser中间件
    app.use(bodyParser.urlencoded({ extended: false }));

    // 1.1 注册页面
    app.get('/register', (request, response) => {
        // 跳转到注册页面
        response.render('register');
    });

    // 2. 注册行为
    app.post('/register', (request, response) => {
        // 获取请求体 body-parser  用户数据
        // console.log(request.body);
        // md5 对密码加密
        request.body.password = md5(request.body.password);

        // 把用户数据存储在数据库中 
        MemberModel.create(request.body, (err, data) => {
            if(err) throw err;
            response.send('获取用户数据');
        });

    });
    app.listen(8000);

})



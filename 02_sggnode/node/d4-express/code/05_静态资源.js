// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 6. 配置网站的根目录 public文件夹
// 6.1 发起请求  先在根目录下匹配  如果根目录下有对应路径文件 则返回
// 6.2 如果根目录下没有  则在路由中进行匹配
// 6.3 如果路由中也没有 则返回报错信息
app.use(express.static(__dirname + '/public'));

// 3. 路由设置
app.get('/home', (request, response) => {
    response.send('home 页面');
});

app.get('/home.html', (request, response) => {
    response.send('<h1>home.html</h1>')
})

app.get('/videos', (request, response) => {
    //数据处理  读取数据库  读取文件
    response.send('电影列表页 每天不一样');
});

app.get('/x/cover/:id.html', (request, response) => {
    //获取id
    let id = request.params.id;
    console.log(id);
    //获取 电影的信息 JSON 
    // 与 HTML 结构拼接 形成最终的 HTML (响应体)
    response.send(`id为${id}的电影内容`);
})



// 4. 监听端口
app.listen(8000, () => {
    console.log('端口8000监听中');
})
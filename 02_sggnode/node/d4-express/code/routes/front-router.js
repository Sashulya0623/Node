// 修改4步骤
// 1. 引入express
const express = require('express');

// 2. 创建路由器对象 Router是一个微型的app对象
const router = express.Router();

// 3. 修改路由 
router.get('/home', (request, response) => {
    response.send('home 页面');
});

router.get('/home.html', (request, response) => {
    response.send('<h1>home.html</h1>')
})

router.get('/videos', (request, response) => {
    //数据处理  读取数据库  读取文件
    response.send('电影列表页 每天不一样');
});

router.get('/x/cover/:id.html', (request, response) => {
    //获取id
    let id = request.params.id;
    console.log(id);
    //获取 电影的信息 JSON 
    // 与 HTML 结构拼接 形成最终的 HTML (响应体)
    response.send(`id为${id}的电影内容`);
})

// 4. 暴露Router对象
module.exports = router;
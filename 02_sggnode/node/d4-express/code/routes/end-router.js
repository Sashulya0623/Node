// 1. 引入express
const express = require('express');

// 2. 创建路由器对象 Router是一个微型的app对象
const router = express.Router(); 

// 3. 修改路由
router.get('/end-home', (request, response) => {
    response.send('后端首页');
});

router.get('/end-my', (request, response) => {
    response.send('<h1>后端我的页面</h1>')
})

// 4. 暴露Router对象
module.exports = router;
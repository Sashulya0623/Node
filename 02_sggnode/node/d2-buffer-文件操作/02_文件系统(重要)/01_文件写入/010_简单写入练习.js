let data = { 
    "id": 4860, 
    "uuid": "5e398eef-f5cf-4ff6-a000-c24913de86dd", 
    "hitokoto": "世上所以不公平之事是由于当事人能力不足所致。", 
    "type": "a", 
    "from": "金木研", 
    "from_who": null, 
    "creator": "夕之树", 
    "creator_uid": 4248, 
    "reviewer": 4756, 
    "commit_from": "web", 
    "created_at": "1573331301", 
    "length": 22 
};

// 将 JS 对象数据保存 D:/data.json 文件中
// 1. 先将data对象转化为字符串
// toString方法不行，用json方法
const str = JSON.stringify(data);
// 2. 引入fs模块
const fs = require('fs');
// 3. 调用writeFile()方法
fs.writeFile('D:/data.json', str, function(err) {
    if(err) {
        console.log('写入失败1');
    }
    console.log('写入成功1');
})

// 在 D 盘创建一个文件『元旦祝福.md』并写入内容: 投我以木瓜，报之以琼琚。匪报也，永以为好也！
fs.writeFile('D:/元旦祝福.md', '投我以木瓜，报之以琼琚。匪报也，永以为好也!', function(err) {
    if(err) {
        console.log('写入失败2');
    }
    console.log('写入成功2');
})
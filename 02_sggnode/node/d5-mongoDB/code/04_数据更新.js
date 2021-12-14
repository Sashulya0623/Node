// 1. 下载安装
// 2. 引入
const  mongoose = require('mongoose');

// 3. 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/project');

// 4. 连接成功的回调
mongoose.connection.on('open', () => {
    // 5. 设置文档结构对象
    const StarSchema = new mongoose.Schema({
        name: String,
        age:  Number,
        tags: Array
    });
    // 6. 创建文档对象模型
    const StarModel = mongoose.model('stars', StarSchema);
    // 7. 更新数据  把 name ： 蔡徐坤改成KUN
    // 7.1 更新一条
    // StarModel.updateOne({name: '蔡徐坤'}, {name: 'KUN'}, (err, data) => {
    //     if(err) throw err;
    //     console.log(data);
    // });

    // 7.2 更新多条
    StarModel.updateMany({name: '蔡徐坤'}, {name: 'KUN'}, (err, data) => {
        if(err) throw err;
        console.log(data);
    })
})
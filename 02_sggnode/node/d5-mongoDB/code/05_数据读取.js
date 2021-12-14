// 1. 下载安装
// 2. 引入
const mongoose = require('mongoose');

// 3. 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/project');

// 4. 连接成功后的回调
mongoose.connection.on('open', () => {
    // 5. 文档结构对象
    const StarSchema = new mongoose.Schema({
        name: String,
        age:  Number,
        tags: Array
    });
    // 6. 文档对象模型
    const StarModel = mongoose.model('stars', StarSchema);
    // 7. 数据读取
    // 7.1 多条读取
    // StarModel.find({name: 'KUN'}, (err, data) => {
    //     if(err) throw err;
    //     console.log(data);// 结果是个数组
    // })
    // 7.2 单条读取
    // StarModel.findOne({name: 'KUN'}, (err, data) => {
    //     if(err) throw err;
    //     console.log(data);// 结果是个对象
    // })

    // 7.3 根据ID 获取数据
    StarModel.findById('61b7557d094593bda456154c', (err, data) => {
        if(err) throw err;
        console.log(data);// 结果是个对象
    })
})
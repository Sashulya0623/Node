// 1. 下载安装
// 2. 引入mongoose
const mongoose = require('mongoose');
const {Schema} = mongoose;// Schema = mongoose.Schema

// 3. 连接数据库  没加端口号27017也连接成功了
mongoose.connect('mongodb://127.0.0.1/project');

// 4. 连接成功回调
mongoose.connection.on('open', () => {
    // 5. 创建文档结构对象
    const StarSchema = new Schema({
        name: String,
        age:  Number,
        tags: Array
    });
    // 6. 创建文档模型对象            集合名称
    const StarModel = mongoose.model('stars', StarSchema);
    // 7. 批量插入
    StarModel.insertMany([
        {
            name: '蔡徐坤',
            age:  26,
            tags: ['唱','跳','rap','篮球']
        },
        {
            name: '马保国',
            age: 69,
            tags: ['不讲武德','大意了','我没有闪']
        },
        {
            name: '马老师',
            age: 35,
            tags: ['鬼刀','走位','炸胡']
        }
    ], (err, data) => {
        if(err) throw err;
        //如果成功 输出data
        console.log(data);
        //选做 
        mongoose.connection.close();
    });
})

// show dbs --- use project  -- show collections; -- db.stars.find();
// 显示插入的数据  ， 证明插入成功
// 1. 下载安装
// 2. 引入mongoose包
const mongoose = require('mongoose');

// 3. 连接数据库
// project 数据库名称  ，如果数据库不存在就会被创建
mongoose.connect('mongodb://127.0.0.1:27017/project');

// 4. 设置数据库连接成功的回调
mongoose.connection.on('open', () => {
    // 连接成功则执行本回调函数
    // 5.创建文档结构对象  包含的属性
    const UserSchema = new mongoose.Schema({
        username: String,
        password: String,
        age: Number
    });
    // 6. 创建文档对象模型   是一个数组集合
    const UserModel = mongoose.model('user', UserSchema);
    // 7. 数据操作
    UserModel.create({
        username: 'wxy',
        password: '19950126',
        age: 26
    }, (err, data) => {
        if(err) throw err;
        // 若没有错误
        // _id    :   mongodb 自动生成的文档的唯一编号
        // __v    : 是 mongoose 自动生成的属性
        console.log(data);
        // 8. 选做  关闭数据库连接   一般不关闭
        mongoose.connection.close();
    })
})

// 检查数据是否插入成功
// 在命令行
// show dbs --- use project  -- show collections; -- db.users.find();
// 显示插入的数据  ， 证明插入成功

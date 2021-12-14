// 6 我没有做这个文件  因为不知道怎么把数据导入对应数据库data
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/data')

mongoose.connection.on('open', () => {
    //创建结构对象
    const SongSchema = new mongoose.Schema({
        language: String,
        hot: Number,
        title: String,
        author: String,
        duration: Number
    });

    //创建模型对象
    const SongModel = mongoose.model('songs', SongSchema);

    // 1. 读取数据  {} 不加条件
    // SongModel.find({}, (err, data) => {
    //     console.log(data);
    // })
    // 2. 字段(属性)筛选
    // SongModel.find().select({author: 1, title: 1, _id: 0}).exec((err, data) => {
    //     if(err) throw err;
    //     console.log(data);
    // });

    // 3. 排序  1 为升序  -1 为降序
    // SongModel.find().sort({hot: -1}).select({hot:1, title: 1}).exec((err, data) => {
    //     console.log(data);
    // });

    // 4. 降序 读取 10 条数据
    // skip 跳过 N 条
    // limit 取出 N 条
    SongModel.find()
        .select({author: 1, title: 1, _id: 0, hot: 1})
        .sort({hot: -1})
        .skip(10)
        .limit(10)
        .exec((err, data) => {
            console.log(data);
        });
})
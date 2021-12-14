// 1. 下载安装
// 2. 引入mongoose
const mongoose = require('mongoose');


// 3. 连接数据库  默认端口27017    修改为27018
// 启动命令和运行命令都要改mongod --port=27018      mongo --port=27018
// 修改失败   没有在尝试
mongoose.connect('mongodb://127.0.0.1:27017/project');

// 4. 连接成功回调
mongoose.connection.on('open', () => {
    // 5. 结构对象
    const StarSchema = new mongoose.Schema({
        name: String,
        age:  Number,
        tags: Array
    });
    // 6. 创建模型对象
    const StarModel = mongoose.model('stars', StarSchema);
    // 7. 文档操作
    // 7.1 单条删除
    // StarModel.deleteOne({name:'马保国'}, (err, data) => {
    //     if(err) throw err;
    //     // 根据删除数据的数量 判断删除是否成功
    //     if(data.deletedCount >= 1){
    //         console.log('删除成功');
    //     }else{
    //         console.log('删除失败');
    //     }
    //     //关闭链接
    //     mongoose.connection.close();
    // });

    // 7.2 批量删除
    StarModel.deleteMany({name: '马老师'}, (err, data) => {
        console.log(data);
    });
})

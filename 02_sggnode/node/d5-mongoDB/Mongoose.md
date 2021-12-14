## Mongoose

### 介绍
*Mongoose 是一个对象文档模型（ODM）库，它对Node原生的MongoDB模块进行了进一步的优化封装，并提供了更多的功能。 官网 <http://www.mongoosejs.net/>

### 作用
* 使用代码操作 mongodb 数据库

### 使用流程

一、安装 mongoose

在命令行下使用 npm 或者其他包管理工具安装（cnpm  yarn）

```sh
npm install mongoose --save
yarn add mongoose
```

二、引入包

在运行文件中引入 mongoose

```js
const mongoose = require('mongoose');
```

三、连接数据库
```js
mongoose.connect('mongodb://127.0.0.1:27017/project');

// 如果启动时遇到警告提醒， 则按照提示增加选项即可(没遇到)
mongoose.connect('mongodb://127.0.0.1/data', {useNewUrlParser: true, useUnifiedTopology: true});
```
四、监听连接事件

```js
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
```

### 数据类型

文档结构可选的字段类型列表

- ==String==
- ==Number==
- Date
- Buffer
- Boolean
- Mixed   任意类型（使用 mongoose.Schema.Types.Mixed 设置）
- ObjectId
- ==Array==
- Decimal128（4.3版本后加入）

## mongodb 服务修改监听端口
```启动命令
mongod --port=27018
```
客户端连接
```运行命令
mongo --port=27018
```
## mongoose 注意点
* 数据库中集合的名称会自动转为『复数』
  
## 比较出名的数据库图形化工具
* navicat

### CURD

数据库的基本操作包括四个，增加（create），删除（delete），修改（update），查（read）

#### 增加

插入一条

```js
SongModel.create({
    title:'给我一首歌的时间',
    author: 'Jay'
}, function(err, data){
    //错误
    console.log(err);
    //插入后的数据对象
    console.log(data);
});
```

批量插入

```js
SongModel.insertMany([
    {
        title:'给我一首歌的时间',
        author: 'Jay'
    },
    {
        title:'爱笑的眼睛',
        author: 'JJ Lin',
    },
    {
        title:'缘分一道桥',
        author: 'Leehom Wang'
    }
], function(err, data){
    console.log(err);
    console.log(data);
});
```

#### 删除

删除一条数据

```js
SongModel.deleteOne({_id:'5dd65f32be6401035cb5b1ed'}, function(err, data){
    console.log(err);
    console.log(data);
});
```

批量删除

```js
SongModel.deleteMany({author:'Jay'}, function(err, data){
    console.log(err);
    console.log(data);
});
```

#### 更新

更新一条数据

```js
SongModel.updateOne({author: 'JJ Lin'}, {author: '林俊杰'}, function (err, data) {
    console.log(err);
    console.log(data);
});
```

批量更新数据

```js
SongModel.updateMany({author: 'Leehom Wang'}, {author: '王力宏'}, function (err, data) {
    console.log(err);
    console.log(data);
});
```

#### 查询

查询一条数据

```js
SongModel.findOne({author: '王力宏'}, function(err, data){
    console.log(err);
    console.log(data);
});
//根据 id 查询数据
SongModel.findById('5dd662b5381fc316b44ce167',function(err, data){
    console.log(err);
    console.log(data);
});
```

批量查询数据

```js
//不加条件查询
SongModel.find(function(err, data){
    console.log(err);
    console.log(data);
});
//加条件查询
SongModel.find({author: '王力宏'}, function(err, data){
    console.log(err);
    console.log(data);
});
```

##### 字段筛选

```js
SongModel.find().select({_id:0,title:1}).exec(function(err,data){
    console.log(data);
});
```

##### 数据排序

```js
SongModel.find().sort({hot:1}).exec(function(err,data){
    console.log(data);
});
```

##### 数据截取

```js
SongModel.find().skip(10).limit(10).exec(function(err,data){
    console.log(data);
});
```

## 图形化操作
- studio 3T
- 安装打开  连接数据库  端口27017 

## 附录

###  mongodb 配置密码

一、启动 mongod 带验证选项

```sh
# mongod --auth
```

二、创建用户

```sh
> use admin
> db.createUser({user:"admin",pwd:"password",roles:["root"]})
```

三、连接 mongod 服务

```
> mongo
> use admin
> db.auth("admin", "password")
```

四、mongoose 连接操作

```js
mongoose.connect('mongodb://admin:password@localhost/prepare?authSource=admin');
```



### 关系型数据库（RDBS）

代表有：MySQL、Oracle、DB2、SQL Server...

特点：关系紧密，都是表


优点：

1、易于维护：都是使用表结构，格式一致；

2、使用方便：通用，可用于复杂查询；

3、高级查询：可用于一个表以及多个表之间非常复杂的查询。  

缺点：

1、读写性能比较差，尤其是海量数据的高效率读写；

2、有固定的表结构，字段不可随意更改，灵活度稍欠；

3、高并发读写需求，传统关系型数据库来说，硬盘I/O是一个很大的瓶颈。

### 非关系型数据库（NoSQL   not  only  SQL ）

代表有：MongoDB、Redis...

特点：关系不紧密，有文档，有键值对



优点：

1、格式灵活：存储数据的格式可以是key,value形式。

2、速度快：nosql可以内存作为载体，而关系型数据库只能使用硬盘；

3、易用：nosql数据库部署简单。

缺点：

1、不支持事务；

2、复杂查询时语句过于繁琐。


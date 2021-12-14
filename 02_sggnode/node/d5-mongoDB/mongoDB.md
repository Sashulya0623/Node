## cookie
cookie 在不同的浏览器之间是不共享的. 即使在同一台电脑
* chrome 无法获取 ie 浏览器的 cookie
* cookie 是用户非常重要的凭据

## mangoDB数据库
> 1. 简介
* MongoDB 是为快速开发互联网 Web 应用而设计的数据库系统，官方地址 <https://www.mongodb.com/>
* 数据库（DataBase）是按照数据结构来组织、存储和管理数据的仓库。是一个应用程序
> 2. 常见数据库
mongodb 是数据库软件中的一员.
* MySQL
* Oracle
* SqlServer
* db2
* sqlite
* monoDB
> 3. 下载安装
* 下载地址 <https://www.mongodb.com/download-center/community>
* 选择下载msi安装包
* 中间主要是选择“Custom”自定义安装路径修改下：F:\MongoDB（路径根据个人而异）
* 然后不断“下一步”，安装至结束
* 安装完成后在data文件夹中创建db文件夹
> 4. 配置环境变量
* path: 设置 mongod.exe 所在文件夹路径:F:\MongoDB\bin
* cmd 配置存储路径并打开mongo服务
    mongod --dbpath F:\MongoDB\data\db
    启动如图![avatar](./img/mongod服务器启动.jpg)
* 再打开一个cmd，输入mongo ，显示版本号如图![avatar](./img/mongo客户端运行.jpg)，即为安装成功
> 5. 把mongodb设置成Windows服务：这样一开机mongodb就启动了
* 需要在log文件夹下面创建一个db.log文件
* 然后在bin目录打开shell窗口输入==> 
*  mongod.exe --dbpath "F:\MongoDB\data" --logpath "F:\MongoDB\log\mongod.log" --install --serviceName "mongo" --logappend --directoryperdb 
* 配置服务（在bin同级目录创建mongodb.config文件）
* 然后在bin目录打开shell窗口输入==> 
*  mongod --config "F:\MongoDB\mongodb.config" --install --serviceName "MongoDB"  
*  如图![avatar](./img/配置服务.jpg)
*  重启mongo服务,管理员身份打开cmd输入net start MongoDB(注意，这里"MongoDB"是前面我自己取的服务名称)
* 如图![avatar](./img/启动服务.jpg)

- 设置完成后直接运行mango就行

## mangoDB数据库使用

### 三个重要概念

* 一个 mongodb 服务可以创建多个数据库
* 数据库（database） 数据库是一个仓库，在仓库中可以存放集合
* 集合（collection）    集合类似于JS中的数组，在集合中可以存放文档
* 文档（document）  文档数据库中的最小单位，类似于 JS 中的对象，在 MongoDB 中每一条数据都是一个 JS 的对象
![avatar](img/mangodb.jpg)

### 一个项目『一般』只使用一个数据库

### 数据库集合命令
1) 显示所有的数据库

```sh
show dbs
show databases
```

2) （创建）切换到指定的数据库: 不存在就会创建

```
use 数据库名
```

3) 显示当前所在的数据库

```
db
```

4)   删除当前数据库（先切换再删除）

```
use project_1
db.dropDatabase()
```

5)  显示当前数据库中的所有集合

```js
db.createCollection('user'); //创建集合
show collections
```

6)  删除当前集合

```js
db.collection.drop()//  db.集合名称.drop()
```

7)  重命名集合

```js
db.collection.renameCollection('newName')
```

> 操作集合时，如果集合不存在则会自动创建集合

#### 文档命令
1）插入文档

```
db.collection.insert(文档对象);  // db.被插入集合名称.insert(文档对象)
```

2)  查询文档

```
db.collection.find(查询条件)	
db.collection.findOne(查询条件)
```

3)  更新文档

```js
db.collection.update(查询条件,新的文档,配置对象)   
// 更新一个
db.collection.updateOne(查询条件,要更新的内容[,配置对象]) 
// 批量更新
db.collection.updateMany(查询条件,要更新的内容[,配置对象])
//eg
db.students.update({name:'xiaohigh'},{$set:{age:19}})
//配置对象
{
    //可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入
    upsert: <boolean>,   
    //可选，mongodb 默认是false,只更新找到的第一条记录，如果为true, 就把按条件查出来多条记录全部更新
    multi: <boolean>
}

```

4)  删除集合中的文档

```
db.collection.remove(查询条件)
```

#### 条件控制

##### 运算符

在 mongodb 不能 > < >=  <= !== 等运算符，需要使用替代符号

* `>`   使用 `$gt`   
* `<`   使用 `$lt`
* `>=`   使用 `$gte`
* `<=`   使用 `$lte`
* `!==`   使用 `$ne`

##### 逻辑或

`$in` 满足其中一个即可 

```
db.students.find({age:{$in:[18,24,26]}}) //   
```

`$or` 逻辑或的情况

```js
db.students.find({$or:[{age:18},{age:24}]});
```

`$and` 逻辑与的情况

```
db.students.find({$and: [{age: {$lt:20}}, {age: {$gt: 15}}]});
```

##### 正则匹配

条件中可以直接使用 JS 的正则语法

```js
db.students.find({name:/imissyou/});
```

### express简介
> Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架
> 它提供一系列强大的特性，帮助你快速创建各种 Web 和移动设备应用
> 简单来说Express就是运行在node中的用来搭建服务器的模块
> express就是一个封装好的npm包

### express的使用
1. 下载安装： 
> npm i express --save   安装express并添加到依赖项
> yarn add express --save
2. 在js文件中导入express包
3. 创建应用对象
   
### 路由route

#### 路由简介
> 指的是如何定义应用的端点(URIs)以及如何响应客户端的请求
> 路由是由一个URI、HTTP请求(GET\POST等)和若干个句柄组成的

#### 路由的定义
分为三部分：
> 第一部分： HTTP请求的方法(get或post)
> 第二部分： URI路径
> 第三部分： 回调函数

#### express中路由的实现
> app.<method>(path, callback)
> app: express应用对象
> method: http请求方法
> path: 指要通过回调函数来处理的URL地址
> callback: 是处理该请求并把响应发回客户端的请求处理程序

#### route的运行流程
> 当Express服务器接收到一个HTTP请求时，它会查找设置的路由规则
> 如果找到一个匹配的路由规则
> request和response对象会被创建，并被传递给路由的回调函数
> 可以通过request对象读取请求参数，通过response对象返回响应

#### utools工具(https://u.tools/index.html):c盘
> uTools 是一个极简、插件化的现代桌面软件，通过自由选配丰富的插件，打造得心应手的工具集合
> 通过快捷键（默认 alt + space ）就可以快速呼出这个搜索框
> uTools 最大的特点就是拥有强大的插件系统
> 输入 [插件市场] 进入插件管理，你就可以根据自己的需求挑选安装
> 下载这个工具原本是为了它的[内网穿透]插件，可惜该插件已经停用


#### 内网穿透-外网访问本机服务
> 使用NATAPP进行内网穿透
> 在网站注册：https://natapp.cn/
>  20秒快速注册后，需要再实名认证一下，姓名和身份证
> 点击购买隧道:免费隧道(一个注册用户可免费拥有2条不同协议的隧道)
> 购买完隧道后，在我的隧道中查看已拥有的隧道列表，点击显示可以复制token
> 客户端下载： 根据本地电脑系统，选择对应的安装版本
> 下载完后启动软件： 输入命令  natapp -authtoken=上面复制的token
> 最重要的是forwarding：http地址，通过这个地址找到本机上的 8000 端口应用，实现内网穿透
> 本地ip和端口需和Natapp官网上的配置保持一致
> 若不一致的情况下，需在Natapp官网中，我的隧道->配置（修改隧道配置），修改为本地地址和本地端口

#### 修改 hosts 文件
路径
```
C:\Windows\System32\drivers\etc\hosts
```
打开文件并编辑
```
127.0.0.1       item.jd.com  给本机起别名  http://127.0.0.1/news  ---   http://item.jd.com/news
127.0.0.1       qq.com
```
最后保存文件

#### express中request对象
> request对象是路由回调函数中的第一个参数，代表了用户发送给服务器的请求信息
> 通过request对象可以读取用户发送的请求包括URL地址中的查询字符串中的参数，和post请求的请求体中的参数
> request.query	获取get请求查询字符串的参数，拿到的是一个对象
> request.params	获取get请求参数路由的参数，拿到的是一个对象
> request.body	获取post请求体，拿到的是一个对象（要借助一个中间件）
> request.get(xxxx)	获取请求头中指定key对应的value


#### express中response对象
> response对象是路由回调函数中的第二个参数，代表了服务器发送给用户的响应信息。
> 通过response对象可以设置响应报文中的各个内容，包括响应头和响应体
> response.send()	给浏览器做出一个响应
> response.end()	给浏览器做出一个响应（不会自动追加响应头）
> response.set(header,value)	自定义响应头内容
> res.status(code)	设置响应状态码
> response.download()	告诉浏览器下载一个文件(与设置响应头方法不能同时用)
> response.sendFile()	给浏览器发送一个文件
> response.redirect()	重定向到一个新的地址（url）
> 后三个方法  与response.send()或response.end()  同时用一个就好

#### 网站根目录 --- 静态资源放在网站根目录中
网站根目录会放置的静态资源
* html 文件
* css 文件
* JS 文件
* 图片
* 视频
* 音频
* 字体
  
#### 对于内容要频繁变化的资源, 设置路由规则响应网页内容

#### 时间处理插件:格式化时间等
http://momentjs.cn/

npm install moment --save   # npm
yarn add moment             # Yarn
在js中引入： const moment = require('moment');

#### 中间件简介
> Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架
> 从本质上来说，一个 Express 应用就是在调用各种中间件
> 中间件（Middleware） 是一个函数
> 它可以访问请求对象（request）, 响应对象（response）, 和 web 应用中处于请求-响应循环流程中的中间件
> 一般被命名为 next 的变量

#### 中间件功能
> 执行任何代码
> 修改请求和响应对象
> 终结请求-响应循环
> 调用堆栈中的下一个中间件

#### 中间件分类(大类自定义及引用或全局与指定路由)
> 应用级中间件（过滤非法的请求，例如防盗链）
> 第三方中间件（通过npm下载的中间件，例如body-parser）
> 内置中间件（express内部封装好的中间件）
> 路由器中间件 （Router）

#### 中间件使用(参考文档)
> 0. 安装(某些从npm中下载的中间件)
> 1. 声明中间件函数
> 2. 如果全局使用则  app.use(函数)
> 3. 如果指定路由中使用，则添加中间件到http请求方法的第二个参数中
> 4. 可选(在回调的函数中使用指定语法操作)

#### 静态资源
长时间内容不发生改变的资源.
* CSS 
* JS
* 图片
* 音频
* 视频
* 字体

#### 动态资源
内容时常会发生改变的, 包含但不限于
* 首页
* 列表页
* 购物车
* 订单

#### body-parser
> body-parser是一个HTTP请求体解析中间件
> 安装： npm install body-parser  或 yarn add body-parser
> 使用：
> 1. const bodyParser = require('body-parser')
> 2. app.use(bodyParser.urlencoded({ extended: false }))
> bodyParser.json() - 解析JSON格式
> bodyParser.raw() - 解析二进制格式
> bodyParser.text() - 解析文本格式
> bodyParser.urlencoded() - 解析文本格式

#### Router路由器
> Router 是一个完整的中间件和路由系统，也可以看做是一个小型的app对象
> 把路由规则代码单独抽离出来放在一个或多个js文件中,同意放在router文件夹下
> 这样可以更好的分类管理route
- 步骤
> 1. 创建一个 routes 文件夹
> 2. 创建单独的文件 front-router.js
> 3. 修改 front-router.js 中代码(四步)
    1. 引入express
    2. 创建路由器对象
    3. 修改路由
    4. 暴露Router对象
> 4. 主文件中引入 front-router.js
> 5. app.use 设置中间件

#### EJS模板(非JS独有)
> EJS是一个高效的 JavaScript 模板引擎
> 模板引擎是为了使用户界面与业务数据（内容）分离而产生的。
> 简单来说，使用EJS模板引擎就能动态渲染数据
- 直接在js文件中使用步骤
> 1. 下载安装:
    npm i ejs --save
    yarn add ejs
> 2. 引入ejs
    const ejs = require('ejs');
> 3. 调用方法
    ejs.render(str, data)
    str    要编译的字符串
    data   数据对象
- 在express中使用
> 1. 安装ejs
> 2. 设置 express 使用的模板引擎 ejs
    app.set('view engine', 'ejs')
> 3. 设置 ejs 使用的模板的存放位置   模板指的就是.ejs文件存放的文件
    app.set('views', './template'); // 第二个参数可改动 是存放.ejs文件的位置
> 4. 到指定的文件夹下创建模板文件
> 5. 设置模板响应  使用 ejs 编译 ./template/player.ejs 文件中的内容
    response.render('player.ejs', {player: player})
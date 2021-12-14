## 会话控制
> HTTP协议是一个无状态的协议
> 它无法区分多次请求是否发送自同一客户端即无法区分请求是谁发送的
> 在实际的使用中，却有大量的这种需求，
> 我们需要通过会话的控制来解决该问题

## Cookie
> cookie本质是一个存储在浏览器的文本，随着http请求自动传递给服务器
    - 所以cookie存在于【浏览器端】
> 也可以说cookie是一个头（请求头/响应头）：
    - 服务器以【响应头】的形式将Cookie发送给浏览器
    - 浏览器收到以后会自动将Cookie保存
    - 浏览器再次访问服务器时，会以【请求头】的形式将Cookie发回
    - 服务器就可以通过检查浏览器发回的Cookie来识别出不同的浏览器

## 注意点
* cookie 虽然存在于浏览器端, 但是在电脑中不能直接查看 cookie 的内容.
* cookie 是按照 『域名』 进行分类保存的
* 发送请求时, 只会携带当前域名下的 cookie 进行请求
* cookie 是由服务器『响应』回来的 (响应头)
* set-cookie 中的 『path=/』 是设置此 cookie 生效的路径,  / 表明此 cookie 在当前网站下都可用
* 假如 path=/abc   表明cookie只能在/abc网站下使用
* 通常path=/
* 带有时效性的 cookie, 关闭浏览器不会销毁此 cookie.
* 不带时效性的 cookie, 关闭浏览器就会销毁, 如果不关闭浏览器, 此 cookie 就一直有效
* cookie 体积不宜过大, 会影响请求的效率

## 关于域名
163.com 与 www.163.com 不是同一个域名
* 顶级域名   163.com    absffweafw.com
* 二级域名   www.163.com   music.absffweafw.com

### cookie的不足
* 各个浏览器对cookie的数量和大小都有不同的限制
* 不能在Cookie中保存过多的信息
* cookie是由服务器发送给浏览器，再由浏览器将cookie发回
* 如果cookie较大会导致发送速度非常慢，降低用户的体验

###  cookie 存储
cookie 一般会存储与当前用户相关信息, 例如唯一标识, 用户信息

### cookie的使用
> 通过配置cookie-parser中间件，可以将cookie解析为一个对象，并且添加为req的cookies属性
> 使用步骤:
    1)	下载安装
    npm i cookie-parser --save
    yarn add cookie-parser
    2)	引入
    var cookieParser = require("cookie-parser");
    3)	设置为中间件
    app.use(cookieParser());
    4)	创建Cookie
    res.cookie("username","sunwukong" , {maxAge:15000});
    // 设置一个有效期为1天的cookie
    res.cookie("username","sunwukong" , {maxAge:1000*60*60*24});
    // 设置一个永久有效的cookie
    res.cookie("username","sunwukong" , {maxAge:1000*60*60*24*365*10});
    5)	修改Cookie
    // Cookie一旦发送给浏览器，就不能再修改了
    // 但是我们可以使用同名的cookie来替换已有cookie
    res.cookie("username","zhubajie");
    6)	删除Cookie
    // 可以通过使用一个立即失效的cookie来替换cookie的形式来删除cookie
    res.cookie("username","11",{maxAge:0});
    // 用来删除一个cookie
    res.clearCookie(“username”)用来删除一个指定cookie

## Session
> Session 是一个对象，存储特定用户会话所需的属性及配置信息

### session运作流程
* 我们可以在服务器中为每一次会话创建一个对象
* 然后每个对象都设置一个唯一的id
* 并将该id以cookie的形式发送给浏览器，
* 然后将会话中产生的数据统一保存到这个对象中
* 这样我们就可以将用户的数据全都保存到服务器中，而不需要保存到客户端
* 客户端只需要保存一个id即可

### session的使用
1)	下载安装
npm install express-session --save
yarn add express-session
2)	引入模块
const  session = require("express-session");
3)	设置为中间件
app.use(session({
  name: 'id22',   //设置cookie的name，默认值是：connect.sid
  secret: 'atguigu', //参与加密的字符串（又称签名）
  saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
  resave: true ,//是否在每次请求时重新保存session
  cookie: {
    httpOnly: true, // 开启后前端无法通过 JS 操作
    maxAge: 1000*30 // 这一条 是控制 sessionID 的过期时间的！！！
  },
}));


## cookie和session的区别：  常考
1)	存在的位置：
    cookie 存在于客户端，临时文件夹中
    session 存在于服务器的内存中，一个session域对象为一个用户浏览器服务
2)	安全性(http证书)：
    cookie是以明文的方式存放在客户端的，安全性低，可以通过一个加密算法进行加密后存放
    session存放于服务器的内存中，所以安全性好
3)	网络传输量：
    cookie会传递消息给服务器
    session本身存放于服务器，但是通过cookie传递id，会有少量的传送流量
4)	生命周期(以20分钟为例)：
    cookie的生命周期是累计的，从创建时，就开始计时，20分钟后，cookie生命周期结束
    session的生命周期是间隔的，从创建时，开始计时如在20分钟，没有访问session，那么session生命周期被销毁；但是，如果在20分钟内（如在第19分钟时）访问过session，那么，将重新计算session的生命周期；关机会造成session生命周期的结束，但是对cookie没有影响
5)	大小：
    cookie 保存的数据不能超过4K，很多浏览器都限制一个站点最多保存50个cookie
    session 保存数据理论上没有任何限制（内存有多大就能有多大）




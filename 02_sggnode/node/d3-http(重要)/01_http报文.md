## HTTP 报文

### 请求报文
* 请求行
* 请求头    格式:  『请求头的名字: 请求头的值』
* 请求空行
* 请求体
```
请求行      GET https://www.baidu.com/?tn=80035161_1_dg HTTP/1.1
请求头       Accept: text/html, application/xhtml+xml, image/jxr, */*       表明客户端所能接受的数据的类型     
            Accept-Language: zh-Hans-CN,zh-Hans;q=0.5                       表明客户端支持的语言类型
            User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko    客户端的字符串标志(每一款浏览器的 user-agent 值都是不一样的)
            Accept-Encoding: gzip, deflate           表明客户端支持的压缩方式                             
            Host: www.baidu.com                      服务端的主机名
            Connection: Keep-Alive                   连接配置  Keep-Alive 保持连接  close  断开
            Cookie: BD_UPN=1126314751; BD_HOME=1;    Cookie 小甜饼
            Cache-Control: max-age=120               缓存控制
            Upgrade-Insecure-Requests: 1             强制浏览器发送请求时使用 https


```

#### 请求行
```
GET https://www.baidu.com/?tn=80035161_1_dg HTTP/1.1
```
* GET                                       请求方式  常见的 HTTP 的请求方法: GET 和 POST  (PUT DELETE PATCH)
* https://www.baidu.com/?tn=80035161_1_dg   请求的 URL
* HTTP/1.1                                  HTTP协议的版本

##### URL
```
https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1#logo
```
* https/http/mongodb/ftp/ssh        协议
* www.baidu.com                     域名(IP地址)
* /s                                路径
* ie=utf-8&f=8&rsv_bp=1&rsv_idx=1   查询字符串(query string)    name=煎饼果子&is_lajiao=0&conghua=1&xiangcai=0
* `#logo`                             页面跳转的锚点

### 请求体(GET 请求请求体是空的, 但是 POST 请求请求体一般不为空)
```
POST https://processon.com/login HTTP/1.1
Accept: text/html, application/xhtml+xml, image/jxr, */*
Referer: https://processon.com/login?f=index
Accept-Language: zh-Hans-CN,zh-Hans;q=0.5
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko
Content-Type: application/x-www-form-urlencoded
Accept-Encoding: gzip, deflate
Host: processon.com
Content-Length: 61
Connection: Keep-Alive
Cache-Control: no-cache

login_email=779498590@qq.com&login_password=GREM9pus.fek-soos
```
#### 请求体内容
```
login_email=779498590@qq.com&login_password=GREM9pus.fek-soos
```
form 表单
```html
<form method="post">
    <input name="login_email">
    <input name="login_password">
    <input type="submit" value="登录"/>
</form>
```
> 请求体的格式是非常灵活的, 不限于为 url的查询字符串形式,  『任意格式都可以』. 
> 『JSON』与『URL查询字符串』两种形式用的较多

### 响应报文

* 响应行
* 响应头
* 响应空行
* 响应体

```html
HTTP/1.1 200 OK
Bdpagetype: 1
Bdqid: 0xf4330ae2000009bd
Cache-Control: private
Connection: keep-alive
Content-Type: text/html;charset=utf-8
Date: Sat, 07 Nov 2020 03:08:03 GMT
Expires: Sat, 07 Nov 2020 03:08:03 GMT
Server: BWS/1.1
Set-Cookie: BDSVRTM=12; path=/
Set-Cookie: BD_HOME=1; path=/
Set-Cookie: H_PS_PSSID=32815_1424_32952_31254_32970_32723_32961_32937_26350_32913; path=/; domain=.baidu.com
Strict-Transport-Security: max-age=172800
Traceid: 1604718483242292455417596420134845548989
X-Ua-Compatible: IE=Edge,chrome=1
Content-Length: 289603

<!DOCTYPE html><!--STATUS OK-->
<html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta content="always" name="referrer"><meta name="theme-color" content="#2932e1"><meta name="description" content="全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。"><link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /><link rel="search" type="application/opensearchdescription+xml" href="/content-search.xml" title="百度搜索" /><link rel="icon" sizes="any" mask href="//www.baidu.com/img/baidu_85beaf5496f291521eb75ba38eacbd87.svg"><link rel="dns-prefetch" href="//dss0.bdstatic.com"/><link rel="dns-prefetch" href="//dss1.bdstatic.com"/><link rel="dns-prefetch" href="//ss1.bdstatic.com"/><link rel="dns-prefetch" href="//sp0.baidu.com"/><link rel="dns-prefetch" href="//sp1.baidu.com"/><link rel="dns-prefetch" href="//sp2.baidu.com"/><title>百度一下，你就知道</title><style index="newi" type="text/css">#form .bdsug{top:39px}.bdsug{display:none;position:absolute;width:535px;background:#fff;border:1px solid #ccc!important;_overflow:hidden;box-shadow:1px 1px 3px #ededed;-webkit-box-shadow:1px 1px 3px #ededed;-moz-box-shadow:1px 1px 3px #ededed;-o-box-shadow:1px 1px 3px #ededed}.bdsug li{width:519px;color:#000;font:14px arial;line-height:25px;padding:0 8px;position:relative;cursor:default}.bdsug li.bdsug-s{background:#f0f0f0}.bdsug-store span,.bdsug-store b{color:#7A77C8}.bdsug-store-del{font-size:12px;color:#666;text-decoration:underline;position:absolute;right:8px;top:0;cursor:pointer;display:none}.bdsug-s .bdsug-store-del{display:inline-block}.bdsug-ala{display:inline-block;border-bottom:1px solid #e6e6e6}.bdsug-ala h3{line-height:14px;
    </style>
    </head>
    <body>
	<div id="bottom_layer" class="s-bottom-layer s-isindex-wrap"><div class="s-bottom-layer-left"><p class="lh"><a class="c-color-gray2" href="//www.baidu.com/cache/setindex/index.html" target="_blank">设为首页</a></p><p class="lh"><a class="c-color-gray2" href="//home.baidu.com" target="_blank">关于百度</a></p><p class="lh"><a class="c-color-gray2" href="http://ir.baidu.com" target="_blank">About Baidu</a></p><p class="lh"><a class="c-color-gray2" href="https://isite.baidu.com/site/e.baidu.com/d38e8023-2131-4904-adf7-a8d1108f51ef?refer=888" target="_blank">百度营销</a></p><p class="lh"><a class="c-color-gray2" href="//www.baidu.com/duty" target="_blank">使用百度前必读</a></p><p class="lh"><a class="c-color-gray2" href="//help.baidu.com/newadd?prod_id=1&category=4" target="_blank">意见反馈</a></p><p class="lh"><a class="c-color-gray2" href="//help.baidu.com" target="_blank">帮助中心</a></p></div><div id="s-bottom-layer-right" class="s-bottom-layer-right"><span class="lh">&#169;2020&nbsp;Baidu&nbsp;</span><span class="lh">(京)-经营性-2017-0020</span><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001"  target="_blank"><span class="lh s-bottom-recordcode">京公网安备11000002000001号</span></a><span class="lh">京ICP证030173号</span></div>

```

#### 响应行

```
HTTP/1.1 200 OK
```

* HTTP/1.1          http协议的版本
* 200                    响应的状态码
* OK                     响应的状态字符串

常见的响应状态码:

* 200      成功
* 302      跳转
* 404      找不到资源
* 403      禁止的
* 500      服务器内部错误

响应状态码 MDN地址 https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status

```
信息响应(100–199)，
成功响应(200–299)，
重定向(300–399)，
客户端错误(400–499)
服务器错误 (500–599)
```

#### 响应头

响应头格式与请求头格式一致  『名字: 值』

```
Bdpagetype: 1
Bdqid: 0xf4330ae2000009bd
Cache-Control: private
Connection: keep-alive
Content-Type: text/html;charset=utf-8
Date: Sat, 07 Nov 2020 03:08:03 GMT
Expires: Sat, 07 Nov 2020 03:08:03 GMT
Server: BWS/1.1
Set-Cookie: BDSVRTM=12; path=/
Strict-Transport-Security: max-age=172800
Traceid: 1604718483242292455417596420134845548989
X-Ua-Compatible: IE=Edge,chrome=1
Content-Length: 289603
```

Bdpagetype 和 Bdqid 为百度自定义的响应头

* Cache-Control     缓存控制  private 只允许客户端缓存数据  public
* Connection         连接设置
* <span style="color:red;font-weight: bold">Content-Type</span>      『响应体』内容的类型   
  * https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types
  * text/html 表明响应体为 HTML 内容
  * text/css   表明响应体为 CSS 内容
  * application/javascript  表明响应体为 JavaScript
  * image/png  表明响应体为 png 的图片
* Date      响应时间
* Expires   过期时间
* Server    服务器信息
* Set-Cookie   设置 cookie
* Strict-Transport-Security    响应头与Upgrade-Insecure-Requests结合使用
* Traceid   跟踪 id
* X-Ua-Compatible      IE=Edge,chrome=1 强制IE浏览器使用最新的解析器解析网页, 使用 chrome 的内核解析网页
* Content-Length   响应体的长度

#### 响应体

响应体格式比较灵活, 场景的格式有

* HTML
* JavaScript
* CSS
* JSON
* 图片
### 响应体的设置
可使用的方法
1. write(字符串或缓冲区)
2. end 
> 响应体不能为空 必须得有内容 无论用 write 还是用 end, 最后要保证响应体不能为空


### 网页加载过程不是一次性的. 而是循序渐进的
   1. 第一次先获取 HTML 内容的数据
   2. 遇到 link 标签, 发送 HTTP 请求获取 CSS 资源
   3. 遇到 script 标签, 发送 HTTP 请求获取 JavaScript 资源
   4. 遇到 img 标签, 发送 HTTP 请求获取 图片 资源
   5. iframe frameset

### 127.0.0.1
该 IP 地址永远指向本机

## 获取本机 IP 的方式
```
ipconfig
```
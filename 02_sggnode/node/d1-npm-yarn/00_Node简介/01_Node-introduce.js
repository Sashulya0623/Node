/*
    1、从C盘切换到其他盘，D盘、E盘   d:
    2、打开D盘下的某个文件夹  cd test
    3、返回上一级目录   cd ..
    4、回到根目录  cd \

    1. node基础
        1.1 node是一个javascript代码运行环境
            * 打破了过去 JavaScript 只能在浏览器中运行的局面
        1.2 node基于Chrome V8引擎
        1.3 官网：https://nodejs.org/en/  选择安装LTS = Long Term Support 长期支持版 稳定版
        1.4 Javascript由ECMAscript、DOM、BOM组成
        1.5 Node.js是由ECMAScript及Node环境提供的一些附加API组成的，包括文件、网络、路径等等一些更加强大的 API
        1.6 所有ECMAScript语法在Node环境中都可以使用
        1.7 在Node环境下执行代码，使用Node命令执行后缀为.js的文件即可
            1.7.1 进入js文件所在目录   输入命令  node name.js  回车执行代码
        1.8 powershell命令行功能多于cmd  如果想要powershell一打开就在js文件所在目录
            1.8.1 按住shift键，鼠标放在js文件所在的目录上，点击右键---在此处打开powershell窗口
            1.8.2 然后输入  node name.js
            1.8.3 如果js文件名字过长，也可以输入文件名的开头，在按下tab键，自动匹配js文件

    2. Node.js全局对象global
        2.1 在浏览器中全局对象是window，在Node中全局对象是global
        2.2 Node中全局对象下有以下方法，可以在任何地方使用，global可以省略
            2.2.1 console.log()     在控制台中输出
            2.2.2 setTimeout()     设置超时定时器
            2.2.3 clearTimeout()  清除超时时定时器
            2.2.4 setInterval()      设置间歇定时器
            2.2.5 clearInterval()   清除间歇定时器
    

    3. 在vscode中执行代码
        * 安装 扩展code runner
        * 运行程序： 右键  run code
    
    4. nodejs注意
        * nodejs包含ecmascript  + 核心的api(重点)，不包含DOM和BOM
        * 提供了文件操作系统(fs)和web服务功能(http)
            */ 
var num = 10;
console.log(num);

if(true) {
    console.log('Hello Node.js v14.16.0');
}

function fn (){
	console.log('fn函数被调用了');
}

fn();

for (var i = 0; i <5; i ++) {
	console.log(i);
}
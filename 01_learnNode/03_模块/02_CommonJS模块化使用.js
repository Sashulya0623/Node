/*
    1. Node 应用由模块组成，采用 CommonJS 模块规范。每个js文件就是一个模块，有自己的作用域
    2. 基本语法：
        2.1 导出模块：exports.XXX = value 或 module.exports = value
        2.2 引入模块：require(xxx) 如果是第三方模块，xxx为模块名；如果是自定义模块，xxx为模块文件路径
*/

// 在本模块中使用m1模块的数据
// 引入m1数据
const m1 = require('./modules/m1')  // 模块路径
// 使用m1数据
console.log(m1); // { num: 10, sum: [Function: sum], Star: [class Star] }
console.log(m1.num);
console.log(m1.sum(12,15));
const obj = new m1.Star()
console.log(obj.uname);

// 注意要点：
// 1、CommonJS 的规范中，需要使用其他模块的数据的时候，引入的关键方法是require
// 2、require("./modules/m1.js");   参数可以是相对路径(./不能省略)，也可以是绝对路径
// 3、模块的扩展名(.js)可以不写，也可以写
// 4、导出之后一般有一个常量来接收 (const 常量名), 常量名一般和模块名一致(不一致也不会报错)

/**
 * 1. node中的任何一个模块(js文件)都被一个外层函数所包裹
 *      这个外层函数是什么？传递什么参数
 *      function (exports, require, module, __filename, __dirname) {???}
 *      exports:用于支持CommonJs模块化规范的暴露语法
 *      require:用于支持CommonJs模块化规范的引入语法
 *      module:用于支持CommonJs模块化规范的暴露语法
 *      __filename: 当前运行js文件的绝对路径
 *      __dirname： 当前运行js文件所在文件夹的绝对路径
 * 
 * 2. 为什么要设计这个外层函数(这个外层函数有什么作用)
 *      1) 用于支持模块化语法(exports, require, module)
 *      2）隐藏服务器内部实现(从作用域角度去看)
 */

// 3. 在一个函数中，如何输出函数本身？(这个不常用)
//  arguments.callee.toString()
// function demo() {
//     console.log(arguments.callee.toString());
// }
// demo(); // 输出demo函数本身


// 4. 输出外层函数
// console.log(arguments.callee.toString());

// 5. 输出__dirname  __filename
// e:\source\Node\02_sggnode\node\d1-npm-yarn\01_Node中函数的特点\node_function.js
console.log(__filename);
// e:\source\Node\02_sggnode\node\d1-npm-yarn\01_Node中函数的特点
console.log(__dirname);
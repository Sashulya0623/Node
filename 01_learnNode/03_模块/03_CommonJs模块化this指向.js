// 1. exports 和module.exports
console.log(exports);// {}
console.log(module.exports); // {}
console.log(exports === module.exports);// true

let a = 10;
// exports.a = a; 

// module.exports = {
//     a
// }
// exports = module.exports 

console.log("-------------------------------");
console.log("this的值：", this);  // this的值： {}
console.log(this === exports);  // true

// 1. exports是module.exports的引用，js文件中才有exports，交互模式(cmd)下没有exports
// 2. 在js文件中， this 指向这个模块导出的这个对象 module.exports
// 3. this===global在交互模式下成立 （交互模式下，this指向全局变量global）
// 4. 导出的格式，放在文件最后面去写，this一般也不会在导出后面出现，this，指向这个模块
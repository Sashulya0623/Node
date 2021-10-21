let num = 10

function sum(a, b) {
    return a + b
}

class Star {
    constructor() {
        this.uname = '张学友'
    }
}

// 1. 首先要导出数据

// 2. 第一种导出方式
// exports.num = num    // 左边的num是导出的变量名(自己定义)，右边的num是上面定义的变量，一般保持名字一致
// exports.sum = sum
// exports.Star = Star

// 3. 第二种导出方式
module.exports = {
    num, // num: num   简写语法
    sum,
    Star
}
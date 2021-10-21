// 1. 传统形参的默认写法
function fun(x) {
    var x = x || 10;
    console.log(x);
}
fun(); // 10
fun(100); // 100

// 2. es6 形参默认值写法
function fun1(y = 66) {
    console.log(y);
}
fun1(); // 66
fun1(666); // 666

// 3. 多个形参默认值写法，逗号隔开
function fun2(uname = 'mk', age = 25) {
    console.log(uname, age);
}
fun2(); // mk  25
fun2('sys',20);  // sys  20

// 4.如果传递了实际参数，就按照实际参数的值来使用，如果没有传递实参，就会使用等号后面的默认值
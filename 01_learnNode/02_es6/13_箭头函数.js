// * 箭头函数是es6中新的定义函数的一种方式

// 1. 传统函数写法
function func(){
    console.log("hello");
}
// 2. 箭头函数写法
let func1 = () => {   // 等效于上面书写的函数
    console.log("hello");
}

func()
func1()

// 3. 箭头函数常规写法
// let func2 = (x1) => {
//     console.log(x1)
// }

// 3.1 化简的写法
let func2 = x1 => console.log(x1);

let ret = func2(10);  //获取这个函数的返回值
console.log(ret);  //undefined
// 为什么是undefined： 
// 因为func2函数没有返回值，该函数是一个输出语句，不是return
// 和下面的func3区别在于func3有返回值


// let func3 = () => 999+1;  相当于下面这个函数
let func3 = () => {
    return 999+1;
}

let ret2 = func3()
console.log(ret2); // 1000


let func4 = () => {
    return {a:10, b:20}
}
console.log(func4());

// 注意点：
// 1、书写箭头函数，形参依旧放在小括号中，多个形参以及默认值的书写格式和之前相同
// 2、如果只有1个形参，并且没有带默认值，可以省略小括号不写
// 3、如果函数体(大括号)里面只有一个语句，可以省略大括号不写
// 4、第3点的基础之上，会返回一个值，给到函数的调用结果(函数最终返回=>后面的这个语句)
// 5、如果函数体有多条语句，不可以省略大括号。
// 6、如果函数体(大括号)里面只有一个语句，且返回值是一个对象，建议：不要写简写的方式
// * 对象简化语法
// 如果变量的名称(属性对应值的变量名称)和属性的名称一致，则可以直接只写变量名
// 如果函数的名称和属性的名称一致，直接写函数名即可
let uname = "nodejs"
let age = 11
let email = "nodejs@163.com"

// let obj = {
//     uname:uname,
//     age:11,
//     email:"nodejs@163.com"
// }

let obj = {uname,age,email}

console.log(obj);

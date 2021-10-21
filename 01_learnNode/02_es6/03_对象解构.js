// * 对象解构
let obj = {
    name:"nodejs",
    age:11,
    email:"nodejs@163.com"
}

// 获取obj的属性有哪些方法：
// 1. 方法1：
// let name = obj.name;
// let age = obj.age;
// let email = obj.eamil;

// 2. 方法2：
// let name = obj["name"];
// let age = obj["age"];
// let email = obj["email"];

// 3. 方法3：(解构)
// let {name, email, age} = obj;  //完全解构    解构的写法等效于上面的方法1
// console.log(name, age, email);


let {name} = obj;   // 部分解构  等效于： let name = obj.name
console.log(name);


let {name:myName} = obj;   // 部分解构起别名  等效于： let name = obj.name
console.log(myName);

// 注意点： 
// 1、大括号里面的变量名，只能和obj里面的属性名一致。
// 2、大括号里面的变量名顺序可以任意
// 3、如果只想获取部分属性，可以只写这部分属性名
// 4、let {name} = obj;  等效于： let name = obj.name
// 5、let {name:myName} = obj; 给name起了一个别名叫myName，取obj的name属性赋值给myName这个新变量
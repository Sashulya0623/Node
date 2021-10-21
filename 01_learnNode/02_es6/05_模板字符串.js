let obj = {
    name:"nodejs",
    age:11,
    email:"nodejs@163.com"
}

console.log(obj.name+"的年龄是"+obj.age+", 它的邮箱是"+obj.email);

//  * 模板语法 `${动态数据}`
console.log(`${obj.name}的年龄是${obj.age}, 它的邮箱是${obj.email}`);

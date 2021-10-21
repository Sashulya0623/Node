let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];

function func(a, b, c) {
    console.log(a, b, c);
}
func(arr1[0],arr1[1],arr1[2])
// 1. 剩余参数
func(...arr1)   // 把arr1里面的元素都扩展(拆解)开来，等效于 func(arr1[0],arr1[1],arr1[2])

// 2. 合并数组
let newArr = [...arr1, ...arr2]
console.log(newArr);

// 3. 合并对象
let obj1 = {
    name:"nodejs",
    age:11
} 
let obj2 = {
    name:"javascript",
    email:"nodejs@163.com"
} 

let newObj = {...obj1, ...obj2}  // 3.1 把对象中的键值对拆解出来
console.log(newObj);  // 3.2 如果有同属性名，后面的会覆盖前面的属性值


// 4. es6中其他合并对象的做法：
let newObj2 = Object.assign({job:"web"}, obj1, obj2) // 把第二个和第二个以上的参数合并到第一个对象中
console.log(newObj2);

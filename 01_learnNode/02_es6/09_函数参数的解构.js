let obj = {
    uname:"nodejs",
    age:11,
    email:"nodejis@163.com" 
}
// 1. 解构格式： let {uname,age} = obj

function func({uname,age}){   // 等效于{uname,age} = obj    解构的格式
    //  name和age的值就是obj中的属性的值
    console.log(uname,age);
}
func(obj)  



let obj2 = {
    name:"javascript",
    age:25,
    email:"js@163.com"
}
func(obj2)

// * 注意事项：
// * 调用func这个函数的时候，传来的对象必须有uname和age属性，如果没有，则uname和age的值是undefined
// func()   //{uname,age} = null  就会报错
func({})  //{uname,age} = {}   undefined  undefined
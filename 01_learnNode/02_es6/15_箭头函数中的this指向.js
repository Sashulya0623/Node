function People(uname, age) {
    this.uname = uname;
    this.age = age;
    this.say = function(){
        // 定时器   1秒钟之后输出自己的名字

        //以前的写法
        // console.log(this.uname);
        // var that = this  // 保存this的指向
        // setTimeout(function(){
        //     // function 有自己的作用域
        //     // 局部
        //     console.log(that.uname);
        // },1000)
        
        //箭头函数的写法
        setTimeout(() => {
            // 箭头函数没有自己的作用域， 作用域和外层相同
            console.log(this.uname);
        },1000)
        
    }
}

let p1 = new People("zhangsan", 18); 
// p1.say()


// 注意点： 如果是以字面量的形式创建对象的话，不适合书写箭头函数
let obj = {
    name:"nodejs",
    age:11,
    say:function(){
        console.log(this.name);
    }
}
obj.say()
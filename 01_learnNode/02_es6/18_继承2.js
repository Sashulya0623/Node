class Animal{    // 父类  基类
    constructor(name){
        this.name=name   
    }  

    showName(){
        console.log(`My name is ${this.name}`);
    }

    static eat(){  
        console.log("吃-----------");
    }
}
// 继承的格式：
// class 子类名 extends 父类名
class Cat extends Animal{   //子类   派生类
    
    constructor(name){
        super(name)  // super调用父类的constructor方法
        this.age = 10;  //这个this指向创建的这个新对象
    }

    catchMouse(){  //实例方法
        console.log("抓老鼠");
    }

    showName(){  //如果子类方法和父类的方法名一致，就重写父类方法
        console.log(`Miao, Miao, My name is ${this.name}`);
    }

}

let cat = new Cat("Tom");
console.log(cat.name);
cat.showName()   // 调用的是子类中重写了的这个方法
Cat.eat()
cat.catchMouse()
console.log(cat.age);

// 继承的写法： 
// 1、在继承的这个子类中，出现和父类方法名一样的方法，这就是重写。这样一来，对象调用的就是子类中的这个方法
// 2、一旦子类中定义了constructor方法，就必须在子类constructor方法中调用super()。如果父类的constructor方法需要传递参数，则super也需要传递参数
// 3、子类中的this，在调用super()之后才起作用。在super()之前使用this会报错。
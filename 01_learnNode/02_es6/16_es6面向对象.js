/*

class 类名{

    constructor(){
        在这里面定义初始属性
    }

    实例方法名(){

    }

}
*/

class Animal{   // 定义一个类， 首字母大写
 
    //构造器
    constructor(uname){
        // 什么时候执行这个方法？？
        console.log("constructor");
        
        this.uname = uname    //实例属性
    }  

    //定义一个实例方法
    showName(){
        console.log(`My name is ${this.uname}`);
    }

    // 定义一个静态方法
    static eat(){  // 里面不需要用到this
        console.log("吃-----------");
    }
}

// 定义静态属性
Animal.num = 10;

// 实例化一个对象，创建对象
let dog = new Animal("小白");
console.log(dog.name);
dog.showName();

let cat = new Animal("汤姆");

Animal.eat();
console.log(Animal.num);

// 注意要点：
// 1、实例属性和实例方法都是给实例对象去调用的
// 2、每一个实例对象在内存中是独立的，各自拥有自己的属性和方法， 互不干扰，互相独立
// 3、let dog = new Animal("小白");做了3件事情：1创建了新的对象，2调用constructor方法，并且传入对应的参数，3把这个对象的指向给到dog标识符
// 4、因为第3点中传入的参数，并执行了constructor方法，所以新对象才有了这些属性。
// 5、静态方法是通过 类名来调用的，  Animal.eat()
// 6、静态属性的定义，在目前的es6中，只能在类外面通过  类名.属性名=值  来定义

// 7、如果一个方法不确定要定义成是实例方法还是静态方法：写完这个方法之后，它函数体里面有没有用到this，如果没有，就是静态方法，加上static。如果用到this，就是实例方法


function func({uname, age}={}){  
    // 等号后面是默认值
    // 如果没有传参数进来，就使用这个默认值，name和age就是undefined
    console.log(uname, age);
}

func()  //undefined undefined



function func1({myName="nodejs", myAge=11}={}){  //解构，然后赋值
    // 等号后面是默认值
    // 如果没有传参数进来，就使用这个默认值
    console.log(myName, myAge);
}

func1()  // nodejs  11

// 在形参出现解构的时候，需要设置属性默认值的时候，我们需要这么写。
// es6出现了很多简化代码的思路。
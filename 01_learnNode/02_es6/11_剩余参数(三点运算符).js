function func(a, b, ...rest){ 
    // 收集剩下的实参到rest这个变量中，称为剩余参数
    console.log(a, b);
    console.log(rest);  // 是一个数组
    
}  

func(10, 20, 30, 40, 50, 60)


function func2(...rest){
    console.log(rest);
}
func2(10, 20, 30, 40, 50, 60)

// ...这种写法称为三点运算符，在形参中，称为剩余参数，其他地方不这么叫(后面说)
/*
    1. 输出从 1 - 10
    `1 2 3 4 5 6 7 8 9 10`

    2. 在控制台输出一下形状
    ```
    *
    **
    ***
    ****
    *****
    ```
    *
    ***
    *****
    *******
    *********

    3. 99乘法表
    ```
    1*1=1
    1*2=2  2*2=4  
    1*3=3  2*3=6  3*3=9
    1*4=4  2*4=8  3*4=12   4*4=16
    ```
*/

// 1. 1-10
let str = '';
for(let i = 1; i <= 10; i++) {
    str += i + ' ';
}
console.log(str);

// 2. *  双重循环
let str1 = '';
for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++) {
        str1 += '*';
    }
    str1 += '\n';
}
console.log(str1);

// 2.1 另一种写法 代码更简洁
for(let i=1;i<=5;i++){
    //输出当前行 star
    // console.log();
    // console.log('*'.repeat(i));
    let str = '';
    for(let j=1;j<=2*i-1;j++){
        str += '*';
    }
    //输出结果
    console.log(str);
}

// 3. 99乘法表
let str2 = '';
for(let i = 1; i <= 9; i++) {
    for(let j = 1; j <= i; j++) {
        str2 += j + "*" + i + "=" + i * j + '\t';
    }
    str2 += "\n"
}
console.log(str2);

// 3.1 
for(let i = 1; i <= 9; i++) {
    let str = '';
    for(let j = 1; j <= i; j++) {
        str += j + "*" + i + "=" + i * j + '\t';
    }
    console.log(str);
}

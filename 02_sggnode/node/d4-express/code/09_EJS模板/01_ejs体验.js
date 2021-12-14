// 1. 引入ejs
const ejs = require('ejs');
const fs = require('fs');

// 2. 调用方法 ejs.render(str, data)

// 2.1 用法一： 变量的拼接
/**
 * str    要编译的字符串
 * data   数据对象
 * ejs识别的语法： <%= 内容 %>
 */
// let str = '<h1><%= msg %></h1>'
// 把结构单独抽离到views/荣耀.html中
let str = fs.readFileSync('./views/荣耀.html').toString();
let data = {
    msg: '为荣耀而生，为荣誉而死',
    title: '20211205'
}
const result = ejs.render(str, data);
console.log(result);// <h1>为荣耀而生，为荣誉而死</h1

// 2.2 用法二： 数据遍历
// 把for循环写在 <% %> 中， 数据写在 <%= %>中
let str1 = `
    <ul>
        <% for(let i = 0; i < songs.length; i++) { %>
        <li><%= songs[i] %></li>
        <% } %>
    </ul>
`;
let data1 = {
    songs: [
        'Oops',
        'Something just like this',
        'Red',
        'Spark Fly',
        'Love Story'
    ]
}
const result1 = ejs.render(str1, data1);
console.log(result1);

// 2.3 用法三： 判断
let str2 = `
    <h2>呵呵TV</h2>
    <% if(!VIP) { %>
    <p><%= ad %></p>
    <% } %>
`;
const result2 = ejs.render(str2, {
    VIP: 0,
    ad : '希望现在的努力都是有效的'
})

console.log(result2);
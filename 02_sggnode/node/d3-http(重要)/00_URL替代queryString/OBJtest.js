const obj = {
    id:4,
    name: '五月天',
    song:'干杯'
};

// 1. 把对象的属性转换成数组： Object.keys(obj)

// 2. 求对象的长度: 先把属性转换成数组  在求长度
console.log(Object.keys(obj).length);

// 3. 遍历对象属性和值
const data = Object.keys(obj);
for(let i = 0; i < data.length; i++) {
    const key = data[i];
    const value = obj[key];
    console.log('key:' + data[i], 'value:' + obj[key]);
}

// 4. 真正的对象obj是无法通过forEach遍历出属性和值的
// 4.1 通过new URLSearchParams(myUrl)转化的伪对象可以通过forEach遍历出属性和值的
// new URLSearchParams(?is_lajiao=1&is_xiangcai=0&is_latiao=1)
// ------> 伪对象  URLSearchParams { 'is_lajiao' => '1', 'is_xiangcai' => '0', 'is_latiao' => '1' }
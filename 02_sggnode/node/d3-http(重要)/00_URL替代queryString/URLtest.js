const myUrl = new URL('/apnguozhi?is_lajiao=1&is_xiangcai=0&is_latiao=1','http://localhost:8000/');
console.log(myUrl);// URL{}

// 1. new URLSearchParams(string)  将 string 解析为查询字符串，并使用它来实例化新的 URLSearchParams 对象。 前导 '?'（如果存在）将被忽略
// 2. new URLSearchParams(myUrl)   =   myUrl.searchParams 所以用myUrl.searchParams更直接
console.log(myUrl.searchParams); // myUrl.searchParams是查询字符串的为对象形式 
// 3. 把查询字符串转成对象形式  
// 遍历查询字符串，放入新空对象中
let qs = myUrl.searchParams;  // URLSearchParams { 'is_lajiao' => '1', 'is_xiangcai' => '0', 'is_latiao' => '1' }
let obj ={};
qs.forEach((value, name) => {
    console.log(name, value);
    obj[name] = value;
})
console.log(obj);

// 4.　单独取出一个属性的值
console.log(qs.get('is_lajiao')); //  1
/**
 URL {
  href: 'http://localhost:8000/apnguozhi?is_lajiao=1&is_xiangcai=0&is_latiao=1',
  origin: 'http://localhost:8000',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:8000',
  hostname: 'localhost',
  port: '8000',
  pathname: '/apnguozhi',
  search: '?is_lajiao=1&is_xiangcai=0&is_latiao=1',
  searchParams: URLSearchParams { 'is_lajiao' => '1', 'is_xiangcai' => '0', 'is_latiao' => '1' },
  hash: ''
}
 */
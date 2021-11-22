/**
  1. buffer是一个类似数组的对象，不同的是buffer专门存储二进制
        * 最大数255： 1111 1111

    特点：
        1. 大小固定：在创建时就固定了且无法调整
        2. 性能较好： 直接对计算机的内存进行操作
        3. 每个元素的大小为 1 字节(byte)
    
    2. buffer的创建
       - Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
       - Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它每次值都不一样，速度比上面的稍微快一点
       - 通过数组和字符串创建 Buffer.from
       Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
            Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

    3. 关于单位换算
        1Bit 对应的是 1 个二进制位
        8 Bit = 1 字节（Byte）
        1024Byte = 1KB 
        1024KB = 1MB
        1024MB = 1GB
        1024GB = 1TB
        平时所说的网速 10M 20M 100M 这里指的是 Bit ，所以理论下载速度 除以 8 才是正常的理解的下载速度
 */

// 1. buffer的创建
const buf_1 = Buffer.alloc(10);// 10代表buf_1占10个字节
const buf_2 = Buffer.allocUnsafe(10);
const buf_3 = Buffer.from('iloveyou');// 8个字符占8个字节
console.log(buf_1);
console.log(buf_2);
console.log(buf_3);// 字符先转换为ascci码编号，再由编号(十进制)转为十六进制

// 2. buffer的读取和设置
// 2.1 读取： 通过索引号
// console.log(buf_3[0]); // 105  返回的是对应的ASCII码编号
// 2.2 把buffer转成字符串  常用重点 toString()
// console.log(buf_3.toString()); // iloveyou
// 2.3 设置： 通过索引直接设置
// buf_3[0] = 119;
// console.log(buf_3.toString()); // wloveyou

// 通过数字获取对应的 ASCII 字符 这两个不常用
console.log(String.fromCharCode(105));
// 通过 ASCII 字符获取对应的编号
console.log('a'.charCodeAt());


// 3. 关于溢出  高位舍弃 
buf_3[0] = 365;  // 0001 0110 1101  =>  0110 1101(109-m)
console.log(buf_3.toString());// mloveyou

// 4. 关于中文  一个utf-8中文字符占据3个字节
let buf_4 = Buffer.from('我爱你');
console.log(buf_4);

// 5. 关于字符集
// ASCII (数字和符号的映射表)：单字节码表
// 早起只能保存128个符号
//     ||
//     ||
//     \/

// ASCII 扩展表(128-255)

//     ||
//     ||
//     \/

// 双字节码表 2字节 => 16 二进制位  => 65536(有跨语言问题，每个国家不同)
// * gbk
// * gb2312
// * big5

//     ||
//     ||
//     \/

// 万国码(unicode)： 全世界的符号进行统一编码
// 编码方式
// * utf-8
// * utf-16  

// 6. unicode 使用 ： 
// unicode 字符集
//  https://www.tamasoft.co.jp/en/general-info/unicode.html
//  https://www.cnblogs.com/whiteyun/archive/2010/07/06/1772218.html  
// unicode16进制： 纵坐标加上横坐标  
// 字符串中使用unicode
let str = '\u6211\u7231\u4f60';
console.log(str);

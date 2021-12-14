// 1. 从data.json中读取数据

// 6. 失败原因： fs是node中的模块
// 6.1 而本文件在浏览器中加载，require不能被识别
// 6.2 如果写在服务器js上则html与js分离失败
// 6.3 暂时放弃
// 1.1 引入fs模块
const fs = require('fs');
// 1.2 读取data.json  读出的数据格式是buffer转为字符串
// let dataStr = fs.readFileSync(__dirname + '/data.json').toString();
fs.readFile(__dirname + "/data.json", (err, dataO) => {
  // 将读取的数据由buffer转为字符串再转为json格式
  let data = JSON.parse(dataO.toString());

  // 2. 获取data中对象个数   对象个数 = 需要渲染的行数
  let dataNum = data.length;
  console.log(dataNum);

  // 3. 获取table元素
  let table = document.querySelector("table");

  // 4. 把tr追加在table的末尾  追加个数等于对象个数
  for (let i = 0; i < dataNum; i++) {
    // 4.1 创建tr标签
    let tr = document.createElement("tr");
    let dataSon = data[i];
    let dataObj = Object.keys(dataSon);
    for (let i = 0; i < dataObj.length; i++) {
      // 4.2 创建td
      let td = document.createElement("td");
      // 4.3 给td填充值
      const key = dataObj[i];
      const values = dataSon[key];
      td.innerHTML = values;
      // 4.4 td加入到tr里面
      tr.appendChild(td);
    }

    // 把tr加入到table里面
    table.appendChild(tr);
  }
  //   console.log(table);

  //  5. 隔行换色
  // 获取行数
  let trs = document.querySelectorAll("tr");

  // 第一行标题 颜色为棕色
  trs[0].style.backgroundColor = "#793301";

  // 遍历判断行数奇偶
  for (let i = 1; i < trs.length; i++) {
    if (i % 2 === 0) {
      trs[i].style.backgroundColor = "tomato";
    } else {
      trs[i].style.backgroundColor = "purple";
    }
  }
});

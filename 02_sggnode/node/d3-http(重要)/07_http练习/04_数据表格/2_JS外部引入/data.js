const data = [
  {
    id: 1,
    name: "孙燕姿",
    song: "逆光",
  },
  {
    id: 2,
    name: "周杰伦",
    song: "不能说的密码",
  },
  {
    id: 3,
    name: "林俊杰",
    song: "不为谁而作的歌",
  },
  {
    id: 4,
    name: "五月天",
    song: "干杯",
  },
  {
    id: 5,
    name: "张艺兴",
    song: "莲",
  },
  {
    id: 6,
    name: "刘德华",
    song: "冰雨",
  },
  {
    id: 7,
    name: "张学友",
    song: "情人",
  },
];

// 1. 获取data中对象个数   对象个数 = 需要渲染的行数
let dataNum = data.length;

// 2. 获取table元素
let table = document.querySelector("table");

/**
  这里给td填值代码之所以复杂，是因为我假设不知道data数组中的对象有多少个属性
  所以这种写法可以遍历出每个属性及其值

  如果不求这种效果，可以直接用对象属性名及其值填充td
  //遍历数组
        for (let i = 0; i < data.length; i++) {
            trs += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].song}</td></tr>`;
        }
 */

// 3. 把tr追加在table的末尾  追加个数等于对象个数
for (let i = 0; i < dataNum; i++) {
  // 3.1 创建tr标签
  let tr = document.createElement("tr");
  // 创建td标签 把td加入到tr里面
  // 注意对象属性值个数获取不是obj.length， 不是数组
  // Object.keys(obj).length
  let dataSon = data[i];
  let dataObj = Object.keys(dataSon);
  for (let i = 0; i < dataObj.length; i++) {
    // 3.2 创建td
    let td = document.createElement("td");
    // 3.3 给td填充值
    const key = dataObj[i];
    const values = dataSon[key];
    td.innerHTML = values;
    // 3.4 td加入到tr里面
    tr.appendChild(td);
  }

  // 把tr加入到table里面
  table.appendChild(tr);
}
//   console.log(table);

//  4. 隔行换色
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

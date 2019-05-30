const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')
}

// const formatNumber = n => {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }

// module.exports = {
//   formatTime: formatTime
// }

function formatDate(date, split) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return [year, month, day].map(formatNumber).join(split || '')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  randomNum: randomNum
}
function randomNum(num, n) {  //实现数组的随机
  if (typeof num !== "number" || typeof n !== "number") return false;  //对象检测
  var aNum = [];
  if (num <= n) {
    for (var j = 0; j < num; j++) {
      aNum.push(j);
    };
    return aNum;
  }         //如果n大于num就生成0到num-1的每一个数
  else {
    while (aNum.length < n) {
      var random = Math.round(Math.random() * num);
      if (aNum.indexOf(random) == -1) {
        aNum.push(random);
      }
    }
    return aNum;
  }
}
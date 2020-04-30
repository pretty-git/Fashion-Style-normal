// 云函数入口文件
const cloud = require('wx-server-sdk')
// npm install--save wx - server - sdk@latest
cloud.init()
const db = cloud.database()
exports.main = async (event, context) =>

  db.collection('clothes').where({
    name: {
      $regex: event.a,
      $options: event.b
    }
  }).get()


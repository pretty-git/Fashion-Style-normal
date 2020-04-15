var amapFile = require('../../common/amap-wx.js');//如：..­/..­/libs/amap-wx.js

Page({
  data:{
    weatherData:''
  },
  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: '1086065bcc087f39ebf8b09ebb743d2a' });
    myAmapFun.getWeather({
      success: function (data) {
        //成功回调
        console.log(data)
        that.setData({
          weatherData: data.liveData
        })
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
  }
})
var amapFile = require('../../common/amap-wx.js');//如：..­/..­/libs/amap-wx.js

Page({
  data:{
    weatherData:'',
    imagsrc:'../../images/qingtian.png',
    livelist:[],
    dayList:[],
    location
  },
  onLoad: function () {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: '1086065bcc087f39ebf8b09ebb743d2a' });
    myAmapFun.getWeather({
      success: function (data) {
        //成功回调
        console.log(data)
        that.setData({
          weatherData: data
        })
        wx.hideLoading()
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
    wx.request({
      url: 'https://api.seniverse.com/v3/weather/now.json?key=SQHiSnuSXVOy549Ai&location=ip&language=zh-Hans&unit=c',
      success(res) {
        console.log(res)
        var list = res.data.results[0].now.code
          if (list == 0 || list == 1 || list == 2 || list == 3) {
            that.data.imagsrc = "../../images/qingtian.png"
          } else if (list == 8 || list == 5 || list == 6 || list == 7) {
            that.data.imagsrc = "../../images/wanduoyun.png"
          } else if (list == 4 || list == 9) {
            that.data.imagsrc = "../../images/阴天.png"
          } else if (list == 10) {
            that.data.imagsrc = "../../images/dayu.png"
          }
          else if (list == 11 || list == 16 || list == 14 || list == 15 || list == 17 || list == 18) {
            that.data.imagsrc = "../../images/leizhenyu.png"
          } else if (list == 13) {
            that.data.imagsrc = "../../images/xiaoyu.png"
          }
         
        that.setData({
          imagsrc: that.data.imagsrc
        })
      }
    })
    wx.request({
      url: `https://api.seniverse.com/v3/weather/daily.json?key=SQHiSnuSXVOy549Ai&location=ip&language=zh-Hans&unit=c&start=0&days=5`,
      success(res){
        var list = res.data.results[0].daily
        for(var item of list) {
          if (item.code_night == 0 || item.code_night == 1 || item.code_night == 2 || item.code_night == 3) {
            item.src = "../../images/qingtian.png"
          } else if (item.code_night == 8 || item.code_night == 5 || item.code_night == 6 || item.code_night == 7) {
            item.src = "../../images/wanduoyun.png"
          } else if (item.code_night == 4 || item.code_night == 9) {
            item.src = "../../images/阴天.png"
          } else if (item.code_night == 10) {
            item.src = "../../images/dayu.png"
          }
          else if (item.code_night == 11 ||   item.code_night == 16 || item.code_night == 14 || item.code_night == 15 || item.code_night == 17 || item.code_night == 18) {
            item.src = "../../images/leizhenyu.png"
          }else if(item.code_night == 13) {
            item.src = "../../images/xiaoyu.png"
          }
          
        }
        that.setData({
          location: res.data.results[0].location.name,
          dayList:res.data.results[0].daily
        })
      }
    })
     wx.request({
      url: 'https://api.seniverse.com/v3/life/suggestion.json?key=SQHiSnuSXVOy549Ai&location=ip&language=zh-Hans',
      success(res){
        var list = [
          {
            title: res.data.results[0].suggestion.car_washing.brief,
            src: '../../images/车.png'
          },
          {
            title: res.data.results[0].suggestion.dressing.brief,
            src: '../../images/wear.png'
          },
          {
            title: res.data.results[0].suggestion.sport.brief,
            src: '../../images/户外.png'
          },
          {
            title: res.data.results[0].suggestion.travel.brief,
            src: '../../images/旅游业.png'
          },
          {
            title: res.data.results[0].suggestion.uv.brief,
            src: '../../images/防晒霜.png'
          },
          {
            title: res.data.results[0].suggestion.flu.brief,
            src: '../../images/感冒药物.png'
          },
        ]
        that.setData({
          livelist: list
        })
      }
    })
  }
})
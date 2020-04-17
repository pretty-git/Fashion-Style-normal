var amapFile = require('../../common/amap-wx.js');//如：..­/..­/libs/amap-wx.js

Page({
  data:{
    weatherData:'',
    imagsrc:'https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/qingtian.png?sign=ca64ae2f57e42d7db3251ad627858d82&t=1587103535',
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
            that.data.imagsrc = "https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/qingtian.png?sign=ca64ae2f57e42d7db3251ad627858d82&t=1587103535"
          } else if (list == 8 || list == 5 || list == 6 || list == 7) {
            that.data.imagsrc = "https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/wanduoyun.png?sign=f30b0e024ab11d37698a11eec67ec0bd&t=1587103594"
          } else if (list == 4 || list == 9) {
            that.data.imagsrc = "https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/%E9%98%B4%E5%A4%A9.png?sign=1185373dedc5aa24367eaf288a024f32&t=1587103582"
          } else if (list == 10) {
            that.data.imagsrc = "https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/dayu.png?sign=cc2a65d99947a78bb110ad63341fda8f&t=1587103573"
          }
          else if (list == 11 || list == 16 || list == 14 || list == 15 || list == 17 || list == 18) {
            that.data.imagsrc = "https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/leizhenyu.png?sign=e8e8e3f081aab86b0e6a7e66c38b38b3&t=1587103562"
          } else if (list == 13) {
            that.data.imagsrc = "https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/xiaoyu.png?sign=f72c4016b499c2851e28df308a22ece9&t=1587103547"
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
            item.src = "https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/qingtian.png?sign=ca64ae2f57e42d7db3251ad627858d82&t=1587103535"
          } else if (item.code_night == 8 || item.code_night == 5 || item.code_night == 6 || item.code_night == 7) {
            item.src = "https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/wanduoyun.png?sign=f30b0e024ab11d37698a11eec67ec0bd&t=1587103594"
          } else if (item.code_night == 4 || item.code_night == 9) {
            item.src = "https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/%E9%98%B4%E5%A4%A9.png?sign=1185373dedc5aa24367eaf288a024f32&t=1587103582"
          } else if (item.code_night == 10) {
            item.src = "https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/dayu.png?sign=cc2a65d99947a78bb110ad63341fda8f&t=1587103573"
          }
          else if (item.code_night == 11 ||   item.code_night == 16 || item.code_night == 14 || item.code_night == 15 || item.code_night == 17 || item.code_night == 18) {
            item.src = "https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/leizhenyu.png?sign=e8e8e3f081aab86b0e6a7e66c38b38b3&t=1587103562"
          }else if(item.code_night == 13) {
            item.src = "https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/xiaoyu.png?sign=f72c4016b499c2851e28df308a22ece9&t=1587103547"
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
            src: 'https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/%E8%BD%A6.png?sign=cd4d6c49f68e436b318cbd21060b9f37&t=1587103441'
          },
          {
            title: res.data.results[0].suggestion.dressing.brief,
            src: 'https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/T%E6%81%A4.png?sign=78bfbc842d46fb0748231ed5fe5bd616&t=1587103964'
          },
          {
            title: res.data.results[0].suggestion.sport.brief,
            src: 'https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/%E6%88%B7%E5%A4%96.png?sign=2da36447306492c33945e94142f5ebda&t=1587103501'
          },
          {
            title: res.data.results[0].suggestion.travel.brief,
            src: 'https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/%E6%97%85%E6%B8%B8%E4%B8%9A.png?sign=1c146f2f7fb03aa3606fae133a1e3989&t=1587103509'
          },
          {
            title: res.data.results[0].suggestion.uv.brief,
            src: 'https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/%E9%98%B2%E6%99%92%E9%9C%9C.png?sign=4a4e058dafeb2b7bb4b18547b88335a4&t=1587103517'
          },
          {
            title: res.data.results[0].suggestion.flu.brief,
            src: 'https://7765-we-63574e-1258830969.tcb.qcloud.la/weather/%E6%84%9F%E5%86%92%E8%8D%AF%E7%89%A9.png?sign=bbcc48026fb4137548d08c1371ac55ed&t=1587103524'
          },
        ]
        that.setData({
          livelist: list
        })
      }
    })
  }
})
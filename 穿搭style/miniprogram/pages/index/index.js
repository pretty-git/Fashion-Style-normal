// pages/index/index.js
const util = require('../../utils/util.js')
var app = getApp()
var imgArray;
Page({
  data: {
    placeholder: '输入你想搜索的搭配元素',
    imgUrls:'',
    style: "",
    indicatordots: "true",
    autoplay: "true",
    interval: "3000",
    duration: "400",
    imageList: [],
    nameImage: [],
    manImage:[],
    womenImage:[],
    imgArray :['http://mkzgr.top:4545/images/42534f54ffbc4a70be5ba444a626ee04.jpg',
      'http://mkzgr.top:4545/images/454a3c20d30245afb6018dace42f4681.jpg',
      'http://mkzgr.top:4545/images/328fa00149b347dfb507358abb226c22.jpg',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner19.png?sign=a319ad62b42f1710d848b0853f069d9d&t=1557834682',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner18.png?sign=561cb44ecc8480976e54c257f80e1e6d&t=1557834826',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner17.png?sign=09236c952a2448e5d8fd41ca5b9650c8&t=1557834853',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner16.png?sign=b4798c4c13664b69844bb2918d55da44&t=1557834876',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner15.png?sign=164a9c013d58fa2659917ddf55687978&t=1557834899',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner14.png?sign=665abb67a579b3ef60ad5c2a2c387b28&t=1557834915',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner13.png?sign=dcabada3aadbcde4910c7da2b5a0d452&t=1557834935',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner12.png?sign=225f917701431125bc1588bbac202d9e&t=1557834949',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner11.png?sign=d42b71e26afaf147994af1a544968e4e&t=1557834963',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner10.png?sign=f77c4e510d956578dfd727ecfc94da7e&t=1557834977',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner9.png?sign=416ee711d030c72a12a5efe811fd39d0&t=1557834992',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner8.png?sign=30d1ec44902f0e34fd50bf7afaf835e1&t=1557835005',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner7.png?sign=4d57a1e21964c407864585df70d127b5&t=1557835021',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner6.png?sign=a3e6fd3cc9b432358fd026debb7943e9&t=1557835037',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner5.png?sign=befa79d15621aff6e636358863ace6ca&t=1557835051',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner4.png?sign=c5f5c6c18346cd0d043d2ce521682fe9&t=1557835064',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner3.png?sign=71e217211f1f3ba3d2b86375980e08b4&t=1557835075',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner2.png?sign=d48cf1a372e00e2d061a150327260223&t=1557835086',
      'https://7765-we-63574e-1258830969.tcb.qcloud.la/banner/banner1.png?sign=7f21ec07c5d28b6a88630077182791d1&t=1557835097'
    ],
    w1: "../../images/icon/w0.png",
    w2: "../../images/icon/w1.png",
    w3: "../../images/icon/w2.png",
    w4: "../../images/icon/w2.png",
    m1: "../../images/icon/m0.png",
    m2: "../../images/icon/m0.png",
    m3: "../../images/icon/m0.png",
    m4: "../../images/icon/m0.png",
    wimageList: [],
    wnameImage: [],
    mimageList: [],
    mnameImage: [],
  },
  onLoad: function () {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    // wx.removeStorageSync("collection")
   
    var n = util.randomNum(that.data.imgArray.length - 1, 3)
    var url = new Array()
     url = url.concat(that.data.imgArray[n[0]])
    url = url.concat(that.data.imgArray[n[1]])
    url = url.concat(that.data.imgArray[n[2]])
    // console.log(url)
    this.setData({
      imgUrls: url
    })
    // console.log(that.data.imgUrls)
    //女士专区
    wx.cloud.init();
    
    var count;
    const db = wx.cloud.database();
    wx.cloud.callFunction({
      name: 'name',
      data: {
        a: '女士上衣'
      },
      success: res => {
        var list;
        var n = util.randomNum(res.result.data.length-1, 6)
        that.setData({
          womenImage: res.result.data
        })
        //  console.log(n)
        list = that.data.imageList.concat(res.result.data[n[0]].url)
        var name = that.data.nameImage.concat(res.result.data[n[0]].name)
        for (let i = 1; i < 6; i++) {
          list = list.concat(res.result.data[n[i]].url)
          name = name.concat(res.result.data[n[i]].name)
        }
        that.setData({
              wimageList: list,
              wnameImage: name
        })
        // console.log(that.data.wimageList)
        // console.log(that.data.styleList)
        // console.log(res.result.data[0].url)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '调用失败',
        })
        console.error('[云函数] [database] 调用失败：', err)
      }
    })
    //男士专区
    wx.cloud.callFunction({
      name: 'name',
      data: {
        a: '男衣'
      },
      success: res => {
        // console.log(res)
        var list;
        var style;
        that.setData({
          manImage: res.result.data
        })
        var n = util.randomNum(res.result.data.length-1, 6)
        // console.log(n)
        list = that.data.imageList.concat(res.result.data[n[0]].url)
        // console.log(style)
        var name = that.data.nameImage.concat(res.result.data[n[0]].name)
        for (let i = 1; i < 6; i++) {
          list = list.concat(res.result.data[n[i]].url)
          name = name.concat(res.result.data[n[i]].name)
        }
        that.setData({
          mimageList: list,
          mnameImage: name
        })
        wx.hideLoading()
        // console.log(that.data.mimageList,'男士')
        // console.log(that.data.styleList)
        // console.log(res.result.data[0].url)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '调用失败',
        })
        console.error('[云函数] [database] 调用失败：', err)
      }
    })
  },

  womanmore: function () {
    wx.navigateTo({
      url: '../wmore/wmore',
    })
  },
  manmore: function () {
    wx.navigateTo({
      url: '../mmore/mmore',
    })
  },
  wdetails: function (e) {
    var that = this;
    var url = JSON.stringify(that.data.wimageList);
    var src = e.target.dataset.src;
    var index = e.target.dataset.index;
    console.log(index)
    wx.navigateTo({
      url: "../details/details?imageList=" + url + '&src=' + src + '&name=' + that.data.wnameImage[index] + '&index=' + index
    })
  },
  mdetails: function (e) {
    var that = this;
    var url = JSON.stringify(that.data.mimageList);
    var src = e.target.dataset.src;
    var index = e.target.dataset.index;
    wx.navigateTo({
      url: "../details/details?imageList=" + url + '&src=' + src + '&name=' + that.data.mnameImage[index]
    })
  },
    
  clickPages:function(e) {
      wx.navigateTo({
        url: "../indexpages/indexpages?id=" + e.target.dataset.id
      })
  },

  /**
   * 用户点击右上角分享
   */
  onPullDownRefresh:function() {
    var that = this;
    // wx.removeStorageSync("collection")
    var n = util.randomNum(that.data.imgArray.length - 1, 3)
    var url = new Array()
    url = url.concat(that.data.imgArray[n[0]])
    url = url.concat(that.data.imgArray[n[1]])
    url = url.concat(that.data.imgArray[n[2]])
    // console.log(url)
    this.setData({
      imgUrls: url
    })
    var list;
    var n = util.randomNum(that.data.womenImage.length - 1, 6)
    //  console.log(n)
    list = that.data.imageList.concat(that.data.womenImage[n[0]].url)
    var name = that.data.nameImage.concat(that.data.womenImage[n[0]].name)
    for (let i = 1; i < 6; i++) {
      list = list.concat(that.data.womenImage[n[i]].url)
      name = name.concat(that.data.womenImage[n[i]].name)
    }
    that.setData({
      wimageList: list,
      wnameImage: name
    })
//男士
    var list;
    var style;
    var n = util.randomNum(that.data.manImage.length - 1, 6)
    // console.log(n)
    list = that.data.imageList.concat(that.data.manImage[n[0]].url)
    // console.log(style)
    var name = that.data.nameImage.concat(that.data.manImage[n[0]].name)
    for (let i = 1; i < 6; i++) {
      list = list.concat(that.data.manImage[n[i]].url)
      name = name.concat(that.data.manImage[n[i]].name)
    }
    that.setData({
      mimageList: list,
      mnameImage: name
    })
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 500);

  },
  onShareAppMessage: function () {
  
  }
})
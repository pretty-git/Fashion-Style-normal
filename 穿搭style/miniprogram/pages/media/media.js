// pages/media/media.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total:'',
    lower_color:'',
    upper_color:'',
    upper_wear:'',
    lower_wear:'',
    colorImage:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var that = this
    if (options.upper_color == '粉') {
      that.setData({
        upper_color: '红'
      })
    }
    else if (options.upper_color == '灰') {
      that.setData({
        upper_color: '白'
      })
    } 
    else if (options.upper_color == '棕') {
      that.setData({
        upper_color: '黄'
      })
    } 
    else {
      that.setData({
        upper_color: options.upper_color
      })
    }

    console.log(that.data.upper_color)
    wx.cloud.callFunction({
      name: 'color',
      data: {
        a: that.data.upper_color
      },
      success: res => {
        // console.log(res.result.data)
        that.setData({
          total: res.result.data.length
        })
        var n = util.randomNum(res.result.data.length - 1, 21)
        // console.log(n)
        var list = that.data.colorImage.concat(res.result.data[n[0]].url);
        for (var i = 1; i < 21; i++) {
          list = list.concat(res.result.data[n[i]].url)
        }
        that.setData({
          colorImage: list
        })
        console.log(that.data.colorImage)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '失败，请重试',
        })
        console.error('[云函数] [database] 调用失败：', err)
      }
    })
  },
  preview: function (e) {
    var that = this;
    var list = that.data.colorImage
    var index = e.target.dataset.src;
    wx.previewImage({
      current: index,     //当前图片地址
      urls: list        //所有要预览的图片的地址集合 数组形式

    })
  }
})
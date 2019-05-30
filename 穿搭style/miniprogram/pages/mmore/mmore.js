// pages/indexpages/indexpages.js
const util = require('../../utils/util.js')

Page({
  data: {
    imageList: [],
    total: '',
    nameImage: [],
    name: '',
    classify: '',
    height: ''
  },
  lower: function () {
    var that = this;
    wx.cloud.callFunction({
      name: 'name',
      data: {
        a: '男衣'
      },
      success: function (res) {
        // console.log(res)
        var n = util.randomNum(that.data.total - 1, 12)
        // console.log(n)
        var name = that.data.nameImage.concat(res.result.data[n[0]].name);
        var list = that.data.imageList.concat(res.result.data[n[0]].url);
        for (var i = 1; i < n.length; i++) {
          list = list.concat(res.result.data[n[i]].url)
          name = name.concat(res.result.data[n[i]].name)
        }
        that.setData({
          imageList: list,
          nameImage: name
        })
      }
    })
  },
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    })
    wx.cloud.init();
    var that = this;
    var count;
    const db = wx.cloud.database();
    wx.cloud.callFunction({
      name: 'name',
      data: {
        a:'男衣'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          total: res.result.data.length
        })
        var n = util.randomNum(res.result.data.length - 1, 12)
        // console.log(n)
        var name = that.data.nameImage.concat(res.result.data[n[0]].name);
        var list = that.data.imageList.concat(res.result.data[n[0]].url);
        for (var i = 1; i < n.length; i++) {
          list = list.concat(res.result.data[n[i]].url)
          name = name.concat(res.result.data[n[i]].name)
        }
        that.setData({
          imageList: list,
          nameImage: name
        })
      }
    })
  },

  previewImage: function (e) {
    var that = this;
    var list = JSON.stringify(this.data.imageList)
    var index = e.target.dataset.index;
    wx.navigateTo({
      url: '../details/details?imageList=' + list + '&src=' + e.target.dataset.src + '&name=' + that.data.nameImage[index] + '&index=' + index
    })
  }
})
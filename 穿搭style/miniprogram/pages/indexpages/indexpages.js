// pages/indexpages/indexpages.js
const util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList:[],
    nameImage: [],
    total: '',
    list: ['女士上衣', '女士裙子', '女鞋', '男衣', '男士裤装','男士裤鞋'],
    id:'',
    loading:true
  },
  lower: function (e) {
    var that = this;
    wx.cloud.callFunction({
      name: 'name',
      data: {
        a: that.data.list[that.data.id]
      },
      success: res => {
        console.log(res.result.data)
        var list;
        var style;
        var n = util.randomNum(that.data.total - 1, 20)
        console.log(n)
        list = that.data.imageList.concat(res.result.data[n[0]].url)
        // console.log(style)
        var name = that.data.nameImage.concat(res.result.data[n[0]].name)
        for (let i = 1; i < 20; i++) {
          list = list.concat(res.result.data[n[i]].url)
          name = name.concat(res.result.data[n[i]].name)
        }
        that.setData({
          imageList: list,
          nameImage: name
        })
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
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    })
    this.setData({
      id:options.id
    })
    console.log(this.data.id)
    wx.cloud.init();
    var that = this;
    var count;
    const db = wx.cloud.database();
    
    wx.cloud.callFunction({
      name: 'name',
      data: {
        a: this.data.list[this.data.id]
      },
      success: res => {
        var list;
        var style;
        console.log(res)
        that.setData({
          total: res.result.data.length
        })
        var n = util.randomNum(res.result.data.length, 20)
        // console.log(n)
        list = that.data.imageList.concat(res.result.data[n[0]].url)
        // console.log(style)
        var name = that.data.nameImage.concat(res.result.data[n[0]].name)
        for (let i = 1; i < 20; i++) {
          list = list.concat(res.result.data[n[i]].url)
          name = name.concat(res.result.data[n[i]].name)
        }
        that.setData({
          imageList: list,
          nameImage: name,
          loading:false
        })
        // console.log(that.data.imageList)
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
  previewImage:function(e) {
    var that = this;
    var url = JSON.stringify(that.data.imageList);
    var src = e.target.dataset.src;
    var index = e.target.dataset.index;
    wx.navigateTo({
      url: "../details/details?imageList=" + url + '&src=' + src  + '&name=' + that.data.nameImage[index] + '&index=' + index
    })
    console.log(index)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/result/result.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: [],
    imageList: '',
    length:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    if (options && options.searchValue) {
      this.setData({
        searchValue: options.searchValue.split(",")

      });
      this.setData({
       length: this.data.searchValue.length
      })
      console.log(this.data.searchValue.length)
    }
    
  },
  preview:function(e) {
    var that = this;
    var list = JSON.stringify(this.data.imageList)
    var index = e.target.dataset.index;
    wx.navigateTo({
      url: '../searchdetails/searchdetails?imageList=' + list + '&src=' + e.target.dataset.src  + '&index=' + index
    }) 
  }
})

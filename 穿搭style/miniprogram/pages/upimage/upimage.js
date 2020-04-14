// miniprogram/pages/upimage/upimage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  addImage: function () {
    let that = this;
    wx.navigateTo({
      url: '../addimage/addimage',
    })
  },

})
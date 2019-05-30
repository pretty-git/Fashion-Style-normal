const app = getApp();

Page({
  data: {
    userInfo: null,
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      userInfo: app.globalData.userInfo
    });
    console.log(that.data.userInfo)
    app.userInfo = that.data.userInfo
  },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '个人主页'
    });
  },
  about: function (e) {
    wx.showModal({
      title: '温馨提示',
      content:  '图片来自网络，若有侵权，请联系作者删除！' || '',
      showCancel: false
    });
    wx.makePhoneCall({
      phoneNumber: '15559193973' // 仅为示例，并非真实的电话号码
    })
  }
});

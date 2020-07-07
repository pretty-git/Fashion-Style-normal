const app = getApp();

Page({
  data: {
    userInfo: null,
  },
  onLoad: function (options) {
    var that = this;
    if (wx.getStorageSync('userInfo')){
      that.setData({
        userInfo: wx.getStorageSync('userInfo')
      });
    }
  },
  getuserinfo() {
    wx.showLoading({
      title: '获取中',
    })
    // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // console.log(res)
                // 可以将 res 发送给后台解码出 unionId
                wx.setStorageSync('userInfo', res.userInfo)
                this.setData({
                  userInfo: res.userInfo
                });
                wx.hideLoading()
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              }
            })
          } else {
            wx.reLaunch({
              url: '/pages/authorize/authorize',
            })
          }
        }
      })
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
  }
});

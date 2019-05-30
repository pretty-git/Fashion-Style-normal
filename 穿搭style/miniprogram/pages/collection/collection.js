// pages/collection/collection.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // imgList:'', //字符数组很好的定义解决了preview的问题
    imageList : [],
    bigImg:'',
    list:[]
  },
  deletec:function(e) {
    var that = this
    var pageData = that.data.list
    var src = e.target.dataset.src
    console.log(pageData)
    wx.showModal({ //使用模态框提示用户进行操作
      title: '提示',
      content: '确定移除改收藏吗？',
      success: function (res) {
        for (var i = 0; i < pageData.length; i++) {
          if (pageData[i] == src) {
            console.log('取消成功')
            pageData.splice(i, 1);
            // console.log('取消后的数组' + pageData)
           that.setData({
             imageList: pageData
           })
            break;
          }
      }
        wx.showToast({
          title: '移除成功',
        })
        wx.setStorageSync('collection', pageData);
      }
    })
  },
 
  previewImage: function (e) {//预览tupia
    var that = this;
    var dataid = e.currentTarget.dataset.id;
    var src = that.data.imageList[dataid].src
   wx.previewImage({
     urls: that.data.list,
     current:src
   })
  },
  onLoad:function() {
    var that = this;
    var m = wx.getStorageSync('collection')
    var list = that.data.list
    that.setData({
      imageList: m
    })
    for(var i = 0; i < m.length; i++) {
      list = list .concat(m[i])
    }
    that.setData({
      list:list
    })
    console.log(list)
  }
})
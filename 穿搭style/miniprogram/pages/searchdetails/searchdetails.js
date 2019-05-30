var app = getApp();
Page({
  data: {
    // 相册列表数据
    imageList: [],
    code: 'abc',
    src: '',
    style: '',
    youlike: [],
    total: '',
    name: '',
    nameImage: [],
    styleImage: [],
    index: ''

  },
  onLoad: function (options) {
    // console.log(app.data.searchnameImage)
    var url = JSON.parse(options.imageList);
    var that = this;
    that.setData({
      imageList: url,
      src: options.src,
      style: app.data.searchstyleImage[options.index],
      name: app.data.searchnameImage[options.index],
      index: options.index
    })
    console.log(that.data.name)
    // 制作智能推荐
    var count;
    const db = wx.cloud.database();
    db.collection('clothes').where({
      style: that.data.style
    }).count({
      success(res) {
        count = res.total
        that.setData({
          total: res.total
        })
        console.log(count);
      }
    })
    wx.cloud.callFunction({
      name: 'style',
      data: {
        a: that.data.style
      },
      success: res => {
        var list;
        var a = that.data.index;
        console.log(a)
        var name;
        var style
        var i;
        if (a >= 3) {
          list = that.data.youlike.concat(res.result.data[0].url)
          name = that.data.nameImage.concat(res.result.data[0].name)
          style = that.data.styleImage.concat(res.result.data[0].style)
          for (i = 1; i < 3; i++) {
            list = list.concat(res.result.data[i].url)
            name = name.concat(res.result.data[i].name)
            style = style.concat(res.result.data[i].style)
          }
        }
        else {
          list = that.data.youlike.concat(res.result.data[3].url)
          name = that.data.nameImage.concat(res.result.data[3].name)
          style = that.data.styleImage.concat(res.result.data[3].style)
          for (i = 4; i < 6; i++) {
            list = list.concat(res.result.data[i].url)
            name = name.concat(res.result.data[i].name)
            style = style.concat(res.result.data[i].style)
          }
        }
        that.setData({
          youlike: list,
          nameImage: name,
          styleImage: style
        })
        console.log(that.data.youlike)
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

  previewImage: function (e) {
    var that = this;
    wx.previewImage({
      current: that.data.src,     //当前图片地址
      urls: that.data.imageList         //所有要预览的图片的地址集合 数组形式

    })
    console.log(that.data.imageList)
  },
  previewImage1: function (e) {
    var that = this;
    var url = JSON.stringify(that.data.youlike);
    var src = e.target.dataset.src;
    var index = e.target.dataset.index;
    var style = that.data.styleImage[index];
    wx.navigateTo({
      url: "../details/details?imageList=" + url + '&src=' + src + '&style=' + style + '&name=' + that.data.nameImage[index]
    })
    console.log(src)
  },
  copylink: function () {
    wx.setClipboardData({
      data: this.data.name,
      success: function () {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  }
})
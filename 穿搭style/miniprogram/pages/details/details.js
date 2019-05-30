const util = require('../../utils/util.js')
const app = getApp()
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
    index: '',
    isCollect: false,
    liuyanlist: [],
    show: '留下你的精彩评论吧',
    replaylist: [],
    userName: '',
    btnName: '发送',
    replayedId: '',
    replayedName: '',
    inputValue: '',
    count: ''

  },

  onLoad: function (options) {
    var url = JSON.parse(options.imageList);
    var that = this
    that.setData({
      imageList: url,
      src: options.src,
      name: options.name
    })
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              // console.log(res.userInfo),
              that.setData({
                userName: res.userInfo.nickName,
                nickName: res.userInfo.nickName,
                avatarUrl: res.userInfo.avatarUrl,
              })
            }
          })
        }
      }
    })
    const db = wx.cloud.database()
    db.collection('liuyan').where({
      imageId: that.data.src
    }).get({
      success(res) {
        console.log(res)
        var a = res.data
        that.setData({
          count: a.length
        })
        var b = new Array();
        for (var i = a.length - 1; i >= 0; i--) {
          b.push(a[i])
        }
        that.setData({
          liuyanlist: b
        })
        // console.log(that.data.liuyanlist)
      }
    })
    db.collection('replay').where({
      imageId: that.data.src
    }).get({
      success(res) {
        // console.log(res)
        that.setData({
          replaylist: res.data
        })
        // console.log(that.data.replaylist)
      }
    })

    // 读取收藏缓存
    var pageData = wx.getStorageSync('collection') || []
    console.log(pageData)
    for (var i = 0; i < pageData.length; i++) {
      if (pageData[i] == that.data.src) {
        that.setData({ isCollect: true });
        break;
      }
    }
  },
  // 收藏功能
  collecte: function (e) {
    var that =this
    var pageData = wx.getStorageSync('collection') || []
    console.log('取消收藏前的数组'+pageData)
    if (that.data.isCollect == true) {
      for (var i = 0; i < pageData.length; i++) {
        if (pageData[i] == that.data.src) {
          console.log('取消成功')
          pageData.splice(i, 1);
          console.log('取消后的数组'+pageData)
          that.setData({ isCollect: false });
          break;
        }
      }
    } else {
      var src = new Array(that.data.src);
      /*  var item = { src: that.data.src,index: that.data.index };
        console.log(typeof(item))*/
      pageData.unshift(src);
      console.log('收藏成功后的数组'+pageData)
      that.setData({ isCollect: true });
      console.log('收藏成功')
    }
    try {
      wx.setStorageSync('collection', pageData);
    } catch (e) {
    }
    // console.log(pageData);
  },
  // 预览图片的功能
  previewImage: function (e) {
    var that = this;
    wx.previewImage({
      current: that.data.src,     //当前图片地址
      urls: that.data.imageList         //所有要预览的图片的地址集合 数组形式

    })
    // console.log(that.data.imageList)
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
  },
  replay: function (e) {
    var that = this
    that.setData({
      show: '回复' + e.target.dataset.name + ':',
      btnName: '回复'
    })
    that.setData({
      replayedId: e.target.dataset.id,
      replayedName: e.target.dataset.name,
      inputValue: ''
    })

  },
  // 删除子评论
  replaylongpress: function (e) {
    wx.showModal({ //使用模态框提示用户进行操作
      title: '提示',
      content: '确定删除改评论吗？',
      success: function (res) {
        if (res.confirm) { //判断用户是否点击了确定
          var id = e.target.dataset.id
          var userid = e.target.dataset.userid
          const db = wx.cloud.database()
          db.collection('replay').doc(id).remove({
            success: res => {
              wx.showToast({
                title: '删除成功',
              })
              db.collection('replay').where({
                imageId: that.data.src
              }).get({
                success(res) {
                  that.setData({
                    replaylist: res.data
                  })
                  // console.log(that.data.replaylist)
                }
              })
            }, fail: err => {
              wx.showToast({
                icon: 'none',
                title: '删除失败',
              })
              console.error('[数据库] [删除记录] 失败：', err)
            }
          })
        }
      }
    })
  },
  // 删除父评论
  longpress: function (e) {
    wx.showModal({ //使用模态框提示用户进行操作
      title: '提示',
      content: '确定删除改评论吗？',
      success: function (res) {
        if (res.confirm) { //判断用户是否点击了确定
          var id = e.target.dataset.id
          var userid = e.target.dataset.userid
          const db = wx.cloud.database()
          db.collection('liuyan').doc(id).remove({
            success: res => {
              wx.showToast({
                title: '删除成功',
              })
            }, fail: err => {
              wx.showToast({
                icon: 'none',
                title: '删除失败',
              })
              console.error('[数据库] [删除记录] 失败：', err)
            }
          })
        }
      }
    })
  },
  // 发表评论和回复
  formSubmit: function (e) {
    if (this.data.btnName == '发送') {
      var that = this;
      var lytime = util.formatTime(new Date())
      // console.log(lytime)
      var liuyantext = e.detail.value.liuyantext; //获取表单所有name=liuyantext的值 
      var nickName = e.detail.value.nickname; //获取表单所有name=nickName的值 
      // console.log(nickName)
      var headimg = e.detail.value.headimg; //获取表单所有name=headimg的值 
      const db = wx.cloud.database()
      var counterId
      db.collection('liuyan').add({
        data: {
          liuyantext: liuyantext,
          nickName: nickName,
          headimg: headimg,
          lytime: lytime,
          imageId:that.data.src
        },
        success: res => {
          console.log("评论成功")
        },
      })
      db.collection('liuyan').where({
        imageId: that.data.src
      }).get({
        success(res) {
          // console.log(res.data)
          var a = res.data
          // console.log(a.length)
          var b = new Array();
          for (var i = a.length - 1; i >= 0; i--) {
            b.push(a[i])
          }
          that.setData({
            count: a.length,
            liuyanlist: b
          })
          // console.log(that.data.liuyanlist)
        }
      })
      wx.showToast({
        title: '评论成功',
      })
      that.setData({
        show: '留下你的精彩评论吧'
      })
    }
    else {
      var that = this;
      var liuyantext = e.detail.value.liuyantext; //获取表单所有name=liuyantext的值 
      var nickName = e.detail.value.nickname; //获取表单所有name=nickName的值 
      // console.log(nickName)
      var headimg = e.detail.value.headimg; //获取表单所有name=headimg的值 
      var lytime = util.formatTime(new Date())
      const db = wx.cloud.database()
      db.collection('replay').add({
        data: {
          replayedName: that.data.replayedName,
          liuyantext: liuyantext,
          nickName: nickName,
          headimg: headimg,
          lytime: lytime,
          replayId: that.data.replayedId,
          imageId: that.data.src
        },
        success: res => {
          console.log('回复成功')
        },
      })
      db.collection('replay').where({
        imageId: that.data.src
      }).get({
        success(res) {
          // console.log(res.data)
          that.setData({
            replaylist: res.data
          })
          // console.log(that.data.replaylist)
        }
      })
      wx.showToast({
        title: '回复成功',
      })
      that.setData({
        show: '留下你的精彩评论吧',
        btnName: '发送'
      })
    }
  },
  // // 点赞
  // clickzan:function(e){
  //   var id = e.target.dataset.id
  //   // console.log(id)
  //   var that = this
  //   if(that.data.clickor == true) {
  //     that.setData({
  //       clickor: false,
  //       countZan:0
  //     })
  //   }
  //   else {
  //   that.setData({
  //     clickor:true,
  //     countZan:1
  //   })
  //   }
  //   console.log(id)
  //   const db = wx.cloud.database()
  //   db.collection('liuyan').where({
  //     _id: id
  //   }).get({
  //     success(res) {
  //       console.log(res)
  //       var newCount = res.data[0].countZan+1;
  //       var liuyantext=res.data[0].liuyantext;
  //       var nickName = res.data[0].nickName;
  //       var headimg = res.data[0]. headimg;
  //       var lytime = res.data[0].lytime;
  //       }
  //     })
  //   db.collection('liuyan').doc(id).remove({
  //     success: res => {
  //       wx.showToast({
  //         title: '删除成功',
  //       })
  //       this.setData({
  //         liuyantext: '',
  //         nickName: '',
  //         headimg: '',
  //         lytime: ''
  //       })
  //   db.collection('liuyan').add({
  //     data: {
  //       liuyantext: liuyantext,
  //       nickName: nickName,
  //       headimg: headimg,
  //       lytime: lytime,
  //       countZan: newCount
  //     },
  //     success: res => {
  //       console.log('点赞成功')
  //     },
  //   })
  // },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    var that = this
    that.setData({
      show: '留下你的精彩评论吧',
      btnName: '发送'
    })
    const db = wx.cloud.database()
    db.collection('liuyan').where({
      imageId:that.data.src
    }).get({
      success(res) {
        console.log(res)
        var a = res.data
        // console.log(a.length)
        var b = new Array();
        for (var i = a.length - 1; i >= 0; i--) {
          b.push(a[i])
        }
        that.setData({
          count: a.length,
          liuyanlist: b
        })
        // console.log(that.data.liuyanlist) 
      }
    })
    // 回复刷新
    db.collection('replay').where({
      imageId: that.data.src
    }).get({
      success(res) {
        that.setData({
          replaylist: res.data
        })
        // console.log(that.data.replaylist)
      }
    })

    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 500);
  },
})
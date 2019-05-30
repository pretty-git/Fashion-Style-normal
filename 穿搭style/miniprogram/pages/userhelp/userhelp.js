import Poster from '../../miniprogram_dist/poster/poster';
const util = require('../../utils/util.js')
const app = getApp()

const posterConfig = {
  
  jdConfig: {
    width: 750,
    height: 1334,
    backgroundColor: '#fff',
    debug: false,
    blocks: [
     
      // {
      //   width: 634,
      //   height: 74,
      //   x: 59,
      //   y: 770,
      //   backgroundColor: '#fff',
      //   opacity: 0.5,
      //   zIndex: 100,
      // },
    ],
    texts: [ 
      {
        x: 360,
        y: 1230,
        baseLine: 'top',
        text: '长按识别小程序码',
        fontSize: 38,
        color: '#fff',
      },
      {
        x: 372,
        y: 1290,
        baseLine: 'top',
        text: '快来和我一起学穿搭呀',
        fontSize: 28,
        color: '#fff',
      },
    ],
    images: [
   
      {
        width: 1100,
        height: 1450,
        x: 0,
        y: 0,
        url: 'https://7765-we-63574e-1258830969.tcb.qcloud.la/%E5%88%86%E4%BA%AB%E8%83%8C%E6%99%AF%E5%9B%BE.jpg?sign=0323a81e7c0cab0783f3d65be3cb1283&t=1557923250', 
        // 背景图
      },
      {
        width: 220,
        height: 220,
        x: 80,
        y: 1150,
        url: 'https://7765-we-63574e-1258830969.tcb.qcloud.la/logo.PNG?sign=414c82e7b6598fc78a4b5482905aaca1&t=1557806230',//小程序码
      },
    ]

  },
}
Page({
  data: {
    posterConfig: posterConfig.jdConfig,
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
    show: '有什么好的意见吗？',
    replaylist: [],
    userName: '',
    btnName: '发送',
    replayedId: '',
    replayedName: '',
    inputValue: '',
    count: ''

  },
  haibao:function() {
    wx.showToast({
      title: '正在生成海报中',
      icon: 'loading'
    })
  } ,
  onPosterSuccess(e) {
    wx.hideToast()
    const { detail } = e;
    wx.previewImage({
      current: detail,
      urls: [detail]
    })
  },
  onPosterFail(err) {
    console.error(err);
  },
  onLoad: function (options) {
var that =this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo),
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
      detail:'留言'
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
      detail: '留言'
    }).get({
      success(res) {
        // console.log(res)
        that.setData({
          replaylist: res.data
        })
        // console.log(that.data.replaylist)
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
  // 删除子留言
  replaylongpress: function (e) {
    wx.showModal({ //使用模态框提示用户进行操作
      title: '提示',
      content: '确定删除改留言吗？',
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
                detail: '留言'
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
  // 删除父留言
  longpress: function (e) {
    wx.showModal({ //使用模态框提示用户进行操作
      title: '提示',
      content: '确定删除改留言吗？',
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
              console.log(res)
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
  // 发表留言和回复
  formSubmit: function (e) {
    if (this.data.btnName == '发送') {
      var that = this;
      var lytime = util.formatTime(new Date())
      // console.log(lytime)
      var liuyantext = e.detail.value.liuyantext; //获取表单所有
      if(!liuyantext){
        wx.showToast({
          title: '留言不能为空哦！',
          icon: 'none'
        })
        return 0;
      }
       
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
          detail: '留言'
        },
        success: res => {
          console.log("留言成功")
        },
      })
      db.collection('liuyan').where({
        detail: '留言'
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
        title: '留言成功',
      })
      that.setData({
        show: '有什么好的意见吗？'
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
          detail: '留言'
        },
        success: res => {
          console.log('回复成功')
        },
      })
      db.collection('replay').where({
        detail: '留言'
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
        show: '有什么好的意见吗？',
        btnName: '发送'
      })
    }
  },

  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    var that = this
    that.setData({
      show: '有什么好的意见吗？',
      btnName: '发送'
    })
    const db = wx.cloud.database()
    db.collection('liuyan').where({
      detail: '留言'
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
      detail: '留言'
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
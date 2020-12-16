// pages/collection/collection.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 下拉菜单
    show:false,
    testbtn1:false,
    testbtn2: false,
    testbtn3: false,
    testbtn4: false,
    showModal: false,
    area_list: [
      { key: 1, value: "女士上衣" },
      { key: 2, value: "女士外套" },
      { key: 3, value: "女裙" },
      { key: 4, value: "女裤" },
      { key: 5, value: "女鞋" },
    ],
    rent_list: [
      { key: 1, value: "男衣" },
      { key: 2, value: "男裤或男鞋" }
    ],
    area: '女装',
    rent: '男装',
    select_area: false,
    select_rent: false,
    // 下拉菜单结束
    imagefilepath: '', //字符数组很好的定义解决了preview的问题
    imageList: [],
    // allList:app.allImageList,
    bigImg: '',
  
    casArray2: ['日系甜美', '淑女优雅', '文艺复古', '恋爱气息', '职场穿搭', '国民风尚', '个性潮流', '运动休闲', '绅士熟男', '简约时尚'],
    casArray3: ['红', '橙', '黄', '绿', '蓝', '黑', '白', '紫'],
    casArray1: [
      {
        id: 0,
        child: ['卫衣', 'T恤', '雪纺', '西装', '衬衫', '一字肩', '针织衫', '背心', '棒球服', '小个子上衣', '羽绒服', '毛衣']
      }
    ],
    casArray4: [{id:1,child:['牛仔外套', '棒球服', '开衫外套', '轻薄外套', '宽松外套', '小个子外套', '针织衫外套', '背心款外套', '风衣外套', '早春外套', '西服外套', '夏款外套']}],
    casArray6: [{ id: 2, child: ['碎花裙', 'A字裙', '吊带裙', '仙女裙', '淑女裙', '背带裙', '半身裙', '长裙', '名媛裙', '蛋糕裙', '沙滩裙', '雪纺裙'] }],
    casArray7: [{ id: 3, child: ['短裤', '运动裤', '喇叭裤', '西装裤', '背带裤', '正装裤', '雪纺裤', '阔腿裤', '工装裤', '开叉裤', '牛仔裤', '休闲裤'] }],
    casArray8: [{ id: 4, child: ['豆豆鞋', '高跟鞋', '凉鞋', '英伦鞋', '小白鞋', '单鞋', '踩底鞋', '拖鞋', '长靴', '尖头鞋', '运动鞋', '帆布鞋'] }],

    casArray5: [{id:1,child:['休闲鞋', '小白鞋', '运动鞋', '短裤', '运动裤', '牛仔裤', '西裤', '背带裤', '休闲裤', '小脚裤', '哈伦裤', '九分裤']}],
    casArray9: [{id:0,child:['T恤', '卫衣', '衬衫', '夹克', '牛仔外套', '西装', '运动服', '长袖', '风衣', '背心', '毛衣', '羽绒服']}],
    casIndex1: 0,
    casIndex2: 0,
    casIndex3: 0,
    casIndex4: 0,
    casIndex5: 0,
    casIndex6: 0,
    casIndex7: 0,
    casIndex8: 0,
    casIndex9: 0,
    details: '卫衣',
    style: '日系甜美',
    color: '红',
    url: '',
    name: '',
    inputValue: '',
    fileID: '',
    classify: '',
    filePath:'',
    cloudPath:''
  },
  // 关闭标题弹窗
  close(){
    this.setData({
      show:false
    })
    this.addImage1()
  },
  onClose(){
    this.setData({
      show:false
    })
  },
  // 下拉菜单
  select_item: function (e) {
    switch (e.currentTarget.dataset.item) {
      case "1":
        this.setData({
          rent: "男装"
        })
        if (this.data.select_area) {
          this.setData({
            select_area: false,
          });
        }
        else {
          this.setData({
            select_area: true,
            select_rent: false
          });
        }
        break;
      case "2":
        this.setData({
          area:"女装"
        })
        if (this.data.select_rent) {
          this.setData({
            select_rent: false,
          });
        }
        else {
          this.setData({
            select_area: false,
            select_rent: true
          });
        }
        break;
    }
  },

  // 下拉菜单
  formSubmit: function (e) {
    var that = this
    var name = that.data.name
    var cloudPath = that.data.cloudPath
    var style = that.data.style
    var color = that.data.color
    if(!name) {
      wx.showToast({
        title: '你忘记给图片起个名字啦',
        icon: 'none',
        duration: 1000
      })
    }
   else if(!cloudPath) {
      wx.showToast({
        title: '请上传图片哦',
        icon: 'none',
        duration: 1000
      })
   }
else {
    const db = wx.cloud.database();
    db.collection("clothes").add({
      data: {
        name: that.data.name,
        classify: that.data.classify,
        details: that.data.details,
        style: that.data.style,
        color: that.data.color,
        url: that.data.url,
        imagefrom:'up'
      },
      success: function () {
        wx.showToast({
          title: '提交成功',
          'icon': 'none',
          duration: 3000,
        })
        console.log(that.data.details)
      },
      fail: function () {
        wx.showToast({
          title: '提交失败',
          'icon': 'none',
          duration: 3000
        })
      }
    })
}
  },
  // 获取输入框的值
  inputText:function(e) {
    this.setData({
      name: e.detail.value.replace(/\ +/g, "")//去掉空格
    })
    // console.log(this.data.name)
  },
  // 三个picker_view
  bindCasPickerChange1: function (e) {
    var a = e.detail.value
    this.setData({
      casIndex1: e.detail.value,
      details: this.data.casArray1[0].child[a],
      area: this.data.casArray1[0].child[a],
      classify: '女士上衣',
      select_area: false
    })
    // console.log(this.data.casIndex1)
    console.log(this.data.classify)
  },
  bindCasPickerChange2: function (e) {
    var a = e.detail.value
    this.setData({
      testbtn1:true,
      casIndex2: e.detail.value,
      style: this.data.casArray2[a]
    })
    // console.log(this.data.casIndex2)
    console.log(this.data.style)
  },
  bindCasPickerChange3: function (e) {
    var a = e.detail.value
    this.setData({
      casIndex3: e.detail.value,
      color: this.data.casArray3[a]
    })
    console.log(this.data.color)
    // console.log(this.data.color)
  },
  bindCasPickerChange4: function (e) {
    var a = e.detail.value
    this.setData({
      area: this.data.casArray4[0].child[a],
      casIndex4: e.detail.value,
      details: this.data.casArray4[0].child[a],
      classify: '女士外套',
      select_area: false,
    })
    console.log(this.data.classify)
    // console.log(this.data.color)
  },
  bindCasPickerChange5: function (e) {
    var a = e.detail.value
    this.setData({
      rent: this.data.casArray5[0].child[a],
      casIndex5: e.detail.value,
      details: this.data.casArray5[0].child[a],
      classify: '男士裤鞋',
      select_rent: false,
    })
    // console.log(this.data.casIndex1)
    console.log(this.data.classify)
  },
  bindCasPickerChange6: function (e) {
    var a = e.detail.value
    this.setData({
      area: this.data.casArray6[0].child[a],
      casIndex6: e.detail.value,
      details: this.data.casArray6[0].child[a],
      classify: '女士裙子',
      select_area: false,
    })
    console.log(this.data.details)
    // console.log(this.data.color)
  },
  bindCasPickerChange7: function (e) {
    var a = e.detail.value
    this.setData({
      area: this.data.casArray7[0].child[a],
      casIndex7: e.detail.value,
      details: this.data.casArray7[0].child[a],
      classify: '女士裤子',
      select_area: false,
    })
    // console.log(this.data.casIndex7)
    console.log(this.data.classify)
  },
  bindCasPickerChange8: function (e) {
    var a = e.detail.value
    this.setData({
      area: this.data.casArray8[0].child[a],
      casIndex8: e.detail.value,
      details: this.data.casArray8[0].child[a],
      classify: '女鞋',
      select_area: false,
    })
    console.log(this.data.classify)
    // console.log(this.data.color)
  },
  bindCasPickerChange9: function (e) {
    var a = e.detail.value
    this.setData({
      rent: this.data.casArray9[0].child[a],
      casIndex9: e.detail.value,
      details: this.data.casArray9[0].child[a],
      classify: '男衣',
      select_rent: false,
    })
    console.log(this.data.classify)
    // console.log(this.data.color)
  },
  addImage(){
    this.setData({
      show:true
    })
  },
  // 上传图片
  addImage1: function () {
 
    var that = this;
    var name= that.data.name
    if (!name) {
      wx.showToast({
        title: '你忘记给图片起个名字啦',
        icon: 'none',
        duration: 1000
      })
    }
    else {
  
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        wx.showLoading({
          title: '上传中',
        })
        const filePath = res.tempFilePaths[0]
        // 上传图片
        const cloudPath = that.data.name + filePath.match(/\.[^.]+?$/)[0]
        console.log(cloudPath);
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            wx.showToast({
              icon: 'none',
              title: '图片上传成功',
            })
            console.log('[上传文件] 成功：', res)
            that.setData({
              cloudPath: cloudPath,
              url: 'https://7765-we-63574e-1258830969.tcb.qcloud.la/' + cloudPath
            })
            console.log(that.data.url)
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
    }
  },
onLoad:function() {
  var that = this
  var pop
  var length
  const db = wx.cloud.database()
  wx.cloud.callFunction({
    name: 'login',
    data: {},
    success: res => {
      console.log(res.result.openid)
      db.collection('popuser').where({
        _openid: res.result.openid
      }).get({
        success(res) {
          console.log(res)
          if (res.data.length == 0) {
            that.setData({
              showModal: true
            })
            console.log(that.data.showModal)
          }
        }
      })
    }
  })

},
  ok: function () {
    this.setData({
      showModal: false
    })
    const db = wx.cloud.database()
    db.collection('popuser').add({
      data: {
        pop:1
      }
      
    })
  }
})
// pages/index/index.js
const util = require('../../utils/util.js')
var app = getApp()
var imgArray;
Page({
  data: {
    placeholder: '输入你想搜索的搭配元素',
    imgUrls:'',
    style: "",
    indicatordots: "true",
    autoplay: "true",
    interval: "3000",
    duration: "400",
    imageList: [],
    nameImage: [],
    manImage:[],
    womenImage:[],
    imgArray :['https://img.freepik.com/free-photo/graceful-stylish-woman-pink-dress_197531-13228.jpg',
  'https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2692.jpg',
'https://img.freepik.com/free-photo/stylish-woman-jeans-white-sneakers-blouse-with-lace-sitting-floor-street-modern-woman-with-short-hair-poses-outside_197531-19313.jpg','https://img.freepik.com/free-photo/full-shot-cool-people-wearing-chain-necklace_23-2149409723.jpg',
'https://img.freepik.com/premium-photo/full-length-portrait-young-woman-shot-pink-background-she-looks-her-shoulder_264197-21805.jpg'],
    w1: "../../images/icon/w0.png",
    w2: "../../images/icon/w1.png",
    w3: "../../images/icon/w2.png",
    w4: "../../images/icon/w2.png",
    m1: "../../images/icon/m0.png",
    m2: "../../images/icon/m0.png",
    m3: "../../images/icon/m0.png",
    m4: "../../images/icon/m0.png",
    wnameImage: [],
    wimageList: ['https://img.freepik.com/free-photo/portrait-cheerful-fashion-hipster-girl-sunglasses-casual-clothes-isolated_231208-5747.jpg',
  'https://img.freepik.com/free-photo/technology-millennials-lifestyle-concept-carefree-cute-brunette-female-student-put-headphones-plug-smartphone-picking-song-smiling-standing-blue-background-make-playlist-study_1258-72987.jpg','https://img.freepik.com/free-photo/amazing-girl-purple-jacket-having-fun-during-indoor-photoshoot-cute-female-model-sunglasses-pink-peruke-dancing-laughing_197531-5377.jpg'],
    mimageList: ['https://img.freepik.com/premium-photo/full-length-image-young-asian-man-posing-blue-background_296537-5889.jpg','https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-black-suit-touching-his-sunglasse_171337-9187.jpg','https://img.freepik.com/free-photo/handsome-asian-man-listening-music-through-headphones_23-2149038622.jpg'],
    mnameImage: [],
  },

  womanmore: function () {
    wx.navigateTo({
      url: '../wmore/wmore',
    })
  },
  manmore: function () {
    wx.navigateTo({
      url: '../mmore/mmore',
    })
  },
  wdetails: function (e) {
    var that = this;
    var url = JSON.stringify(that.data.wimageList);
    var src = e.target.dataset.src;
    var index = e.target.dataset.index;
    console.log(index)
    wx.navigateTo({
      url: "../details/details?imageList=" + url + '&src=' + src + '&name=' + that.data.wnameImage[index] + '&index=' + index
    })
  },
  mdetails: function (e) {
    var that = this;
    var url = JSON.stringify(that.data.mimageList);
    var src = e.target.dataset.src;
    var index = e.target.dataset.index;
    wx.navigateTo({
      url: "../details/details?imageList=" + url + '&src=' + src + '&name=' + that.data.mnameImage[index]
    })
  },
    
  clickPages:function(e) {
      wx.navigateTo({
        url: "../indexpages/indexpages?id=" + e.target.dataset.id
      })
  },

  /**
   * 用户点击右上角分享
   */
  onPullDownRefresh:function() {
    var that = this;
    // wx.removeStorageSync("collection")
    var n = util.randomNum(that.data.imgArray.length - 1, 3)
    var url = new Array()
    url = url.concat(that.data.imgArray[n[0]])
    url = url.concat(that.data.imgArray[n[1]])
    url = url.concat(that.data.imgArray[n[2]])
    // console.log(url)
    this.setData({
      imgUrls: url
    })
    var list;
    var n = util.randomNum(that.data.womenImage.length - 1, 6)
    //  console.log(n)
    list = that.data.imageList.concat(that.data.womenImage[n[0]].url)
    var name = that.data.nameImage.concat(that.data.womenImage[n[0]].name)
    for (let i = 1; i < 6; i++) {
      list = list.concat(that.data.womenImage[n[i]].url)
      name = name.concat(that.data.womenImage[n[i]].name)
    }
    that.setData({
      wimageList: list,
      wnameImage: name
    })
//男士
    var list;
    var style;
    var n = util.randomNum(that.data.manImage.length - 1, 6)
    // console.log(n)
    list = that.data.imageList.concat(that.data.manImage[n[0]].url)
    // console.log(style)
    var name = that.data.nameImage.concat(that.data.manImage[n[0]].name)
    for (let i = 1; i < 6; i++) {
      list = list.concat(that.data.manImage[n[i]].url)
      name = name.concat(that.data.manImage[n[i]].name)
    }
    that.setData({
      mimageList: list,
      mnameImage: name
    })
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 500);

  },
  onShareAppMessage: function () {
  
  }
})
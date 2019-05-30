// pages/your/your.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList: ["http://5b0988e595225.cdn.sohucs.com/images/20170903/393517cd3d9f4e81b41fd171d6821732.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/45bb2014fb7c4b889ba822b9527037f0.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/c1ea79533b144decba0ec17d21287231.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/8cbcd1bc6ee54ef4b9f8e9d14e329b90.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/f58add7a96154016b5b9e94f7e1487c3.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/d5f95a1992c0473d8534cfbb9752bac0.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/6b0e13898da942ffbb7204c67664e847.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/ca3c89a73fde45019e2f6c0bdbf7dc55.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/f9869379d305425a899ae9f8a4540e06.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/da07b77aaf914f4d84a0ebc1577ebc49.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/eea0f15a32564497b64a0d9236987212.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/c999aede4f874d45a67f9719c76255bf.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/f41aede1b9144d8cb4e49c0a929cc87a.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/80251e1603554f3fa38ab49b0f3ac1c1.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/c4be8129887740269efefc64670de800.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/c38bfae0da284b76bf73dcd8ecce58ca.png", "http://5b0988e595225.cdn.sohucs.com/images/20170903/b55064f1a3e345a198413985fb3c86d2.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/a73b71cd471c4245901c233bca518d53.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/15b400f4175040dbb6cb3529fd29524b.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/3d54dfe645bd473391bc34504c26aa6d.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/43c54784043c4710adb131f416261aca.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/4a61ba57da0e44718b24bd525e7a3f25.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/9767611e2d2c4bf0baf219ff04fbca76.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/b67deca3dd8d49e89248c591d0235640.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/f2568d7d36be4520a1e99549114cc9a5.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/8b04c365cf42486ea15c17e9ef58c5af.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/82049a4fb0364a19b36d1c747754b5ec.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/179f60770db74be68549c5137a3ea5fb.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/bd009146611544a39aed3d49461524ff.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/88acf3f3ca9d4e57bc9278de5657e8ff.png", "http://5b0988e595225.cdn.sohucs.com/images/20170903/3635eed0de9e4a31968579f3cdafd65e.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/abc66e4358cb41989a86565cd03089cc.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/34d307e7d0024fb3b65ea14cf56a24e3.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/b9e11ab29d6949fba56d01f97449c58a.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/8c29625f79c64b3cb70bf1a79489488b.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/8c29625f79c64b3cb70bf1a79489488b.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/dfe5783c5b4a446b94b71dcee9a1dcda.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/2b41a17f33674ae3b6cdd73b1b7bb7e5.jpeg", "http://5b0988e595225.cdn.sohucs.com/images/20170903/eeac05f42e6e465a868697c81ba3fd1e.jpeg","http://5b0988e595225.cdn.sohucs.com/images/20170903/f288760f89324c9aa2d94261a02aec44.jpeg"]
  },
  priview:function(e) {
    var src = e.target.dataset.src;
    // console.log(src)
    wx.previewImage({
      current: src,
      urls: this.data.imageList,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    let users = wx.getStorageSync('user');
    if (res.from === 'button') { }
    return {
      title: '转发',
      path: '/pages/index/index?from_uid=' + users.id,
      success: function (res) { }
    }
    
  }
})
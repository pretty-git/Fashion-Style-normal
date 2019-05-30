//index.js
var WxSearch = require('../../wxSearchView/wxSearchView.js');

Page({
  data: {},

  // 搜索栏
  onLoad: function () {
    var that = this;
    WxSearch.init(
      that,  // 本页面一个引用
      ['T恤', '连衣裙', "衬衫", "卫衣", '小个子', '显瘦'], // 热点搜索推荐，[]表示不使用
      ['衬衫', '阔腿裤', '短裤', "牛仔外套"],// 搜索匹配，[]表示不使用
      that.mySearchFunction, // 提供一个搜索回调函数
      that.myGobackFunction 
      //提供一个返回回调函数
    );
  },

  // 转发函数,固定部分
  wxSearchInput: WxSearch.wxSearchInput,  // 输入变化时的操作
  wxSearchKeyTap: WxSearch.wxSearchKeyTap,  // 点击提示或者关键字、历史记录时的操作
  wxSearchDeleteAll: WxSearch.wxSearchDeleteAll, // 删除所有的历史记录
  wxSearchConfirm: WxSearch.wxSearchConfirm,  // 搜索函数
  wxSearchClear: WxSearch.wxSearchClear,  // 清空函数

  // 搜索回调函数  
  mySearchFunction: function (value) {
    // do your job here
    // 跳转
    wx.navigateTo({
      url: '../result/result?searchValue='+value
    })
  },

  // 返回回调函数
  myGobackFunction: function () {
    // do your job here
    // 跳转
    wx.navigateTo({
      url: '../result/result?searchValue=' + value  
    })
  }

})

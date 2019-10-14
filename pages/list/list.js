// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toAdd: function (){
    //页面跳转 路由跳转不能和tabBar底部导航栏同时使用
    wx.navigateTo({
      url: '../add/add',
    })
  }
})
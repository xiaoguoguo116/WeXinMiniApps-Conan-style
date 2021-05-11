// pages/wechatLogin/wechatlogin.js
Page({
  getMyInfo:function(e){
    let info=e.detail.userInfo;
    this.setData({
      src:info.avatarUrl,
      name:info.nickName
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
      src:'',
      name:''
  },
  gotoindex:function(){
    if(this.data.name.length==0)
    {
      wx.showToast({
        title: '请先登录',
        icon:'none',
        duration:2000
      })
    }
    else{
    wx.switchTab({
      url: '../index/index',
    })
  }
  },
  gotosetting:function(){
    if(this.data.name.length==0)
    {
      wx.showToast({
        title: '请先登录',
        icon:'none',
        duration:2000
      })
    }
    else{
    wx.navigateTo({
      url: '../setting/setting',
    })
  }
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
  onShareAppMessage: function () {

  }
})
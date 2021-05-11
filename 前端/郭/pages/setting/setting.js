// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      identify:['点击选择身份','配送员','商家','用户'],
      position:['点击选择位置','松轩','竹轩','柏轩'],
      num1:0,
      num2:0
  },
  bindPickerChange:function(e){
   
    //that.setData
     this.setData({
       num1:e.detail.value,
     
     })
    
  },
  bindPickerChange1:function(e){
    this.setData({
      num2:e.detail.value
    })
  },
  gotoindex:function(){
    if(this.data.num1==0||this.data.num2==0)
    {
      wx.showToast({
        title: '请设置好身份和位置信息',
        icon:'none'
      })
    }
    else{
    wx.switchTab({
      url: '../index/index'
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
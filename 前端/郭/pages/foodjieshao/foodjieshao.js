// pages/foodjieshao/foodjieshao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      article:{
        id:'264',
        title:'黄焖鸡',
        poster:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1951698874,31135803&fm=26&gp=0.jpg',
        content:'原料：鸡肉，金针菇',
        add_date:'3'
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
  onLoad: function () {
    var self=this;
       wx.request({
        
         url: 'http://localhost:8080/food',
         method: "POST",
         data:({
            id:app.globalData.id,
            name:that.data.name
         }),
       header: {
         'content-type': 'application/json'
         },
         success(res){
          this.setData({
           article:res.data
          });
           
         }
       })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var self=this;

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
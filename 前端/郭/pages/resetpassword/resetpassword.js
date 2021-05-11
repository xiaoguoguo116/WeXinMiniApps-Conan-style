const app = getApp()
Page({
  name:function(e){
    this.setData({
       userName:e.detail.value
     });
     console.log(this.data.userName.length)
  },
  password:function(e){
    this.setData({
      password:e.detail.value
     
    });
  },
  xiugaipassword:function(e){
    this.setData({
      xiugaipassword:e.detail.value
     
    });
    console.log(this.data.xiugaipassword)
  },
  querenpassword:function(e){
    this.setData({
      querenpassword:e.detail.value
     
    });
  },
  xiugai:function(){
    if(this.data.xiugaipassword.length==0||this.data.querenpassword.length==0){
      wx.showToast({
        title: '输入不能为空',
        icon:'none',
        duration:2000
      })
    }
    else if(this.data.xiugaipassword!=this.data.querenpassword)
    {
      wx.showToast({
        title: '两次输入不相同',
        icon:'none',
        duration:2000
      })
    }
    else
    {
      var that=this;
        wx.request({
          url: 'http://localhost:8080/login',
          method: "POST",
          data:({
            username:that.data.userName,
            password:that.data.password
          }),
          header: {
            'content-type': 'application/json'
          },
          success(res){
            if(res.data=="yes"){
              wx.request({
                url: 'http://localhost:8080/reset',
                method: "POST",
               data:({
                  username:that.data.userName,
                  xiugaipassword:that.data.xiugaipassword
               }),
             header: {
               'content-type': 'application/json'
               },
              })
              wx.switchTab({
                url: '../login/login',
              })
             }
             else{
              wx.showToast({
                title: '请确保您已有账号',
                icon:'none',
                duration:2000
              })
            }
          }
        })
    }
  },
  data: {
     chushipassword:'',
     xiugaipassword:'',
     querenpassword:'',
     userName:'',
     password:''
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
// pages/login/login.js
const app = getApp()
Page({
  testTap:function(e){
    this.setData({
       userName:e.detail.value
     });
  },
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
    console.log(this.data.password.length)
  },
  zhuce:function(){
     wx.navigateTo({
       url: '../setting/setting',
     })
  },
  zhuce1:function(){
    if(this.data.userName.length==0||this.data.password.length==0){
      wx.showToast({
        title: '账号密码不为空',
        icon:'none',
        duration:2000
      })
    }
    else
    {
      var that=this;
      console.log(that.data.userName),
      console.log(that.data.password),
      wx.showToast({
        title: '注册成功',
        icon:'succes',
        duration:2000
      })
      wx.request({
        url: 'http://localhost:8080/zhuce',
        method: "POST",
        data:({
          username:that.data.userName,
          password:that.data.password
        }),
         header: {
      'content-type': 'application/json'
    },
        
          success(res){
           
            wx.navigateTo({
              url: '../setting/setting',
              
            })
          }
        }
      )
  }
},
  gotoReset:function(){
      wx.navigateTo({
        url: '../resetpassword/resetpassword',
      })
  },
  login:function(){
      var that=this;
      if(this.data.userName.length==0||this.data.password.length==0){
        wx.showToast({
          title: '账号密码不能为空',
          icon:'none',
          duration:2000
        })
      }
      else{
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
                App.globalData.name=this.data.userName;
             wx.switchTab({
               
               url: '../index/index',
             })
            }
            else{
              wx.showToast({
                title: '您的用户名或密码不正确',
                icon:'none',
                duration:2000
              })
            }
             
            }
          }
        )
    }
  },
  data: {
     welcome:'欢迎登录',
     userName:'',
     password:''
  },
  inputName:function(){
    this.setData({
      userName:e.detail.value
    })
   console.log(this,data.userName)
  },
  inputPassword:function(){
    this.setData({
      password:e.detail.value
    })
    console.log(this,data.password)
  },
  guan:function(){
   wx.navigateTo({
     url: '../guanLogin/guanLogin',
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
  onShareAppMessage: function () {

  }
})
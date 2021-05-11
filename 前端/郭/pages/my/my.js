// pages/user/user.js
const app = getApp();
Page({
  gotoSetting:function(){
    wx.navigateTo({
      url: '../setting/setting',
    })
  },
  gotoBuyer:function(){
    wx.navigateTo({
      url: '../buyer/buyer',
    })
  },
  gotoReset:function(){
     wx.navigateTo({
       url: '../resetpassword/resetpassword',
     })
  },
  gotoLogin:function(){
    wx.navigateTo({
      url: '../login/login',
    })
  }
  


})
var app = getApp()
Page({
  data: {
     money:'20',
     hiddenmodalput: true,
     num:'0'
  },
  num:function(e){
    this.setData({
       num:e.detail.value
     });
    },
    confirm:function(){
      this.data.money=this.data.money+this.num;
      wx.request({
        url: 'http://localhost:8080/chonghzi',
        method: "POST",
        data:({
          usename:app.globalData.name,
          money:that.data.money
        }),
         header: {
      'content-type': 'application/json'
    },
    success(res){
      this.setData({
        hiddenmodalput: !this.data.hiddenmodalput
      })
    }
      })
    },
  onLoad: function () {
    var that=this;
    console.log(app.globalData.name);
     wx.request({
       url: 'http://localhost:8080/yue',
       method: "POST",
       data:({
         username:app.globalData.name,
         a:'2'
       }),
        header: {
     'content-type': 'application/json'
   },
       success:(res)=>{
          console.log(res.data);
           that.data.money=res.data;
       }
     })
  },
  toFirst(){
    this.setData({
      nowPage:"firstPage",
      nowIndex: 0
    })
  },
  toSecond() {
    this.setData({
      nowPage: "secondPage",
      nowIndex: 1
    })
  },
   chong: function () {
    this.setData({
     
      hiddenmodalput: !this.data.hiddenmodalput
    })
  }
})
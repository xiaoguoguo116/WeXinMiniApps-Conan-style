//index.js
//获取应用实例
var app = getApp()
//var common=require('../../utils/common.js')
var isEnd=false;
var curentPage=1;
Page({
  tabIndex:0,
  gotodetail:function(e){
    app.globalData.id=e.currentTarget.dataset.id;
    console.log(app.globalData.id);
     wx.navigateTo({
       url: '../foodjieshao/foodjieshao',
     })
  },
  data: {
     swiperImg:[
       {
         src:'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00554-1906.jpg'
       },
       {
        src:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3312252476,778740219&fm=26&gp=0.jpg'
      },
      {
        src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1951698874,31135803&fm=26&gp=0.jpg'
      }
     ],
     OnShow:function(){
       wx.request({
         url: 'http://localhost:8080/img',
         method: "POST",
        header: {
          'content-type': 'application/json'
        },
        success(res){
          console.log("yes");
          for(var i=0;i<res.data.length;i++)
          {
            swiperImg[i]=res.data[i];
          }
        }
       })
       wx.request({
         url: 'http://localhost:8080/menu',
         method: "POST",
         data:{
           flag:0,
           id:1
         },
         header: {
           'content-type': 'application/json'
         },
         success(res){
           for(var i=0;i<res.data.length;i++)
           {
             items[i].image=res.data[i].image;
             items[i].price=res.data[i].price;
             items[i].name=res.data[i].name;
             items[i].image=res.data[i].image;
           }
         }
       })
     },
     orderCount:{
        number:0,
        money:0
     },
     menus:[{
          id:0,
          menu:'正餐'
     },
     {
       id:1,
       menu:'小食'
     }
    ],
    items:[{
        id:1,
        title:'黄焖鸡',
        price:15,
        active:false,
        num:1,
        image:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1207216383,3381007823&fm=26&gp=0.jpg'
    },
    {
      id:2,
      title:'米线',
      price:13,
      active:false,
      num:1,
      image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4244748601,1259081812&fm=26&gp=0.jpg'
    },
    {
      id:3,
      title:'拌饭',
      price:13,
      active:false,
      num:1,
      image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4004796345,3721558113&fm=26&gp=0.jpg'
    },
    {
      id:4,
      title:'豌杂面',
      price:13,
      active:false,
      num:1,
      image:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2840867671,2298965058&fm=26&gp=0.jpg'
    }
  ],
     goodsList:[{
       id:'264',
       title:'黄焖鸡',
       poster:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1951698874,31135803&fm=26&gp=0.jpg',
add_date:'3'
     }]
  },
  gotoGouwuche:function(){
     let that=this;
     if(that.data.orderCount.num!==0)
     {
       wx.switchTab({
         url: '../gouwuche/gouwuche',
       });
     }
     else{
       wx.showToast({
      title:'请选择商品',
      icon:'none',
      duration:2000
     })
      

     }
  },
  showmenu:function(event){
      let index=event.target.dataset.index;
      this.setData({
        tabIndex:index
      });
   // console.log(this.data.item.menu)
  },
  allmoney:function(event){
    let that=this;
    let id=event.target.dataset.id;
    let index = event.target.dataset.index;
    let param=this.data.items[index];
    let subOrders=[];
    param.active ? param.active = false : param.active = true;
    this.data.items.splice(index, 1, param);
    that.setData({
      items: this.data.items
    });
    this.data.items.forEach(item => {
      if (item.active) {
        subOrders.push(item);
      }
    });
    if (subOrders.length == 0) {
      that.setData({
        bottomFlag: false
      });
    } else {
      that.setData({
        bottomFlag: true
      });
    }
    let money = 0;
    let num = subOrders.length;
    subOrders.forEach(item => {
      money += item.price; 
    });
    let orderCount = {
      num,
      money
    }
    this.setData({
      orderCount
    });
    wx.setStorage({
      key: "orders",
      data: subOrders
    });
   
  },
  onLoad: function () {
    wx.request({
      url: 'http://localhost:8080/menu',
    })
  }
  /*getWeather:function(){
    var that =this;
    wx.request({
      url: 'https://free-api.heweather.com/s6/weather/now',
      data: {
       location:that.data.region[1],
       key:'5878d71d67fc443c958503d0b917b696'

      },
      success:function(res){
        that.setData({now:res.data.HeWeather6[0].now});
        //console.log(res.data);
      }
    })
  },
  regionChange:function(e){
    this.setData({region:e.detail.value});
    this.getWeather();
  },
  onLoad:function(options){
    this.getWeather();
  },*/
}
  //事件处理函数
 /* bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
}*/)

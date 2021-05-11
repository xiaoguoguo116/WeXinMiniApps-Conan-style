const app = getApp()

Page({
  data: {
    orderCount: {
      num: 0,
      money: 0
    },
    bottomFlag: false,
    orders: true,
    items: []
  },
  del: function (event) {
    let that = this;
    let id = event.target.dataset.id;
    let index = event.target.dataset.index;
    let param = this.data.items[index];
    if(param.num > 0){
      param.num--; 
    } else {
      param.num = 0;
    }
    this.data.items.splice(index, 1, param);
    that.setData({
      items: this.data.items
    });
    let money = 0;
    let num = 0;
    this.data.items.forEach(item => {
      money += item.price * item.num;
      num += item.num;
    });
    let orderCount = {
      num,
      money
    }
    this.setData({
      orderCount
    });
  },
  add: function(event) {
    let that = this;
    let id = event.target.dataset.id;
    let index = event.target.dataset.index;
    let param = this.data.items[index];
    let subOrders = []; 
    param.num++; 
    console.log(param);
    this.data.items.splice(index, 1, param);
    that.setData({
      items: this.data.items
    });
    let money = 0;
    let num = 0;
    this.data.items.forEach(item => {
      money += item.price*item.num;
      num += item.num; 
    });
    let orderCount = {
      num,
      money
    }
    this.setData({
      orderCount
    });
  },
  pay: function() {
    let that = this;
    let str = '选中' + that.data.orderCount.num + '件商品，共' + that.data.orderCount.money + '元，是否要支付？'
    wx.showModal({
      title: '提示',
      content: str,
      success: function (res) {
        if (that.data.orderCount.num !== 0){
          if (res.confirm) {
            wx.scanCode({
              onlyFromCamera: true,
              success: (res) => {
                wx.request({
                  url: 'http://localhost:8080/payfor',
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
                      wx.showToast({
                        title: '支付成功',
                        icon:'none',
                        duration:2000
                      })
                    
                    }
                    else{
                      wx.showToast({
                        title: '余额不足请充值',
                        icon:'none',
                        duration:2000
                      })
                    }
                    }
                  }
                )
            }
            });
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        } else {
          wx.showToast({
            title: '您未选中任何商品',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  onLoad: function() {
    let that = this;
    wx.getStorage({
      key: 'orders',
      success: function (res) {
        that.setData({
          items: res.data
        });
        let money = 0;
        let num = res.data.length;
        res.data.forEach(item => {
          money += (item.price*item.num); 
        });
        let orderCount = {
          num,
          money
        }
        that.setData({
          orderCount
        });
      }
    })
  }
})
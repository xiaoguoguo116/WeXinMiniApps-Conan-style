const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

var baseUrl='http://localhost/myfood'  //服务器域名地址
var getNewsList=baseUrl+'/thinkphp_3.2.4/Index/getfoods'  //获取新闻列表接口
var getNewsById=baseUrl+'/thinkphp_3.2.4/Index/getfoods' //根据新闻id获取新闻内容接口

function goToDetail(id){
  wx.navigateTo({
    url: '../detail/detail?id='+id,
  })
}

module.exports={
  getNewsList:getfoods,
  getNewsById:getfoods,
  goToDetail:getfoods
}
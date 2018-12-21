Page({
  data: {

},
  onShareAppMessage: function () {
    return {
      title: '招商银行信用卡申请',
      desc: '信用卡申请，这里有你需要的！',
      path: 'pages/index/index'
    }
  },
  linkone:function(event){
    var Id = this.data.movies[index].id;
    console.log(Id)
    wx.navigateTo({
      url: '/pages/link/linkone/linkone',
    })
  },
  linktwo: function () {
    wx.navigateTo({
      url: '/pages/link/linktwo/linktwo',
    })
  },
  linkthr: function () {
    wx.navigateTo({
      url: '/pages/link/linkthr/linkthr',
    })
  },
  goHash:function(){
    wx.navigateToMiniProgram({
      appId: 'wx651ac999a21208a3',
      path: '',
      envVersion: 'release',
      success(res) {
       console.log('ok')
      }
    })
  },

  onPullDownRefresh: function () {  
    this.getdata()
  }, 

onLoad:function(){
  this.getdata()
},
getdata:function(data){
  let that = this, Url = "http://192.168.10.159:3000/api";
  wx.request({
    url: Url,
    data: data,
    header: {
      "Content-Type": "application/json"
    },
    success: function (res) {
      wx.stopPullDownRefresh();
      that.setData({
        movies: res.data[0],
        viewList: res.data[1],
      })
    },
    fail: function (err) {
      console.log(err)
    }

  })
}
  

})

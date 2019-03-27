// pages/sponsor/sponsor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxInfo: [
      {
        listImg: [
          'http://39.105.45.100/images/wx-pay.png',
        ],
        name: "微信二维码"
      }
    ],
    listImg: [
      'http://39.105.45.100/images/wx-pay.png',
      'http://39.105.45.100/images/zfb-pay.jpg',
    ]

  },
  previewImage: function(e) {
    console.log(e);
    var current = e.target.dataset.src;
    var listImg = this.data.listImg;
    console.log(current);
    console.log(listImg);
    wx.previewImage({
      current: current,
      urls: listImg
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //设置用户信息
    userList: [
      {
        userName: "未获取",
        userHeaderUrl: ""
      }
    ],
    //功能列表
    userNavList: [
      {
        hrefUrl: "../reply/reply",
        openType: "navigate",
        imgUrl: "../../images/user.png",
        title: "我的发布/回复",
        badge: 8
      },
      {
        hrefUrl: "../about/about",
        openType: "navigate",
        imgUrl: "../../images/message.png",
        title: "关于丢丢",
      },
      {
        hrefUrl: "../sponsor/sponsor",
        openType: "navigate",
        imgUrl: "../../images/vip.png",
        title: "赞助丢丢",
      },
      {
        hrefUrl: "../copyright/copyright",
        openType: "navigate",
        imgUrl: "../../images/explain.png",
        title: "版权说明",
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    //登录的信息创建
    wx.login({
      success: function (e) {
        wx.setStorage({
          key: "key",
          data: e.errMsg
        })
      }
    })
    //获取用户的信息
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        let userInfo = res.userInfo
        let nickName = userInfo.nickName
        let avatarUrl = userInfo.avatarUrl
        //先将信息存放到本地
        wx.setStorageSync('nickName', nickName);
        wx.setStorageSync('avatarUrl', avatarUrl);

        let user = [{
          userName: nickName,
          userHeaderUrl: avatarUrl,
        }]
        that.setData({
          userList: user,
        })
      }
    })
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
// pages/leaveMsg/leaveMsgUser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMsgBtn: true,
    isShow: false,

    //--内容列表--
    listInfo: [],

  },
  /**
   * 事件处理函数
   */
  showMsg: function (e) {
    this.setData({
      isShow: true,
    });
  },
  bodyClick: function () {
    this.setData({
      isShow: false,
    });
  },
  zanChange: function (e) {
    console.log(e);
  },

  //下拉加载请求函数
  dropdownRequest(url, index) {
    wx.showLoading({
      title: '加载中',
    })
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    // this.loadProgress(); //进度条加载
    var that = this;
    wx.request({
      url: url, // 仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'get',
      success(res) {
        console.log(res.data);
        var list_num = "listInfo";
        that.setData({
          [list_num]: res.data
        }),
          wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
        wx.showToast({
          title: '已完成',
          icon: 'success',
          duration: 1500
        })
      }
    })
  },
  //上拉请求函数
  pullupRequest(url, index) {
    var that = this;
    that.setData({
      isLoading: true,
    })
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    wx.request({
      url: url, // 仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'get',
      success(res) {

        console.log(res.data);
        var list_num = "listInfo[0].leaveList";

        that.setData({
          [list_num]: that.data.listInfo[0].leaveList.concat(res.data[0].leaveList)
        })

        that.setData({
          isLoading: false,
        }),
          wx.hideNavigationBarLoading();

      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //默认请求第一页数据
    this.dropdownRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b/leaveMsgUser');

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

    console.log('下拉刷新');
    console.log('down-0');
    this.dropdownRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b/leaveMsgUser');

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

    console.log("上拉触底");
    console.log('pull0');
    this.pullupRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b/leaveMsgUser');

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
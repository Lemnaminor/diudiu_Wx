// pages/leaveMsg/leaveMsg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMsgBtn: true,
    isShow: false,

    //--内容列表--
    listInfo: [
      {
        userID: 1,
        userHeader: "../../images/logo.png",
        userName: "隔壁老王",
        userTime: "2019-03-01 11:11",
        userContent: "正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容",
        listImg: [
          'http://39.105.45.100/images/case1.jpg',
          'http://39.105.45.100/images/case2.jpg',
          'http://39.105.45.100/images/case3.jpg',
        ],
        userAddress: "成都市青羊区红星路一段方正东街22号院",
        shareNum: "998",
        messageNum: "4",
        zanNum: "5.5万",
        leaveList: [
          {
            leaveUserImg: "http://39.105.45.100/images/case3.jpg",
            leaveUser: "普通市民",
            leaveInfo: "我在方正东街拾到充气娃娃一个。目测已经漏气，估计是隔壁老王的。",
            commentNum: "6",
            floor: "第1楼",
            leaveTime: "2019年03月10日",
            isZan: true,
            zanNum: "12",
            idx: ""
          },
          {
            leaveUserImg: "http://39.105.45.100/images/case2.jpg",
            leaveUser: "普通市民2",
            leaveInfo: "我在春熙路捡到一个老妹。。长得还丑。",
            commentNum: "10",
            floor: "第2楼",
            leaveTime: "2019年03月11日",
            isZan: false,
            zanNum: "332"
          },
          {
            leaveUserImg: "http://39.105.45.100/images/case3.jpg",
            leaveUser: "普通市民333",
            leaveInfo: "我在春熙路捡到一个萝莉。",
            commentNum: "10",
            floor: "第2楼",
            leaveTime: "2019年03月11日",
            isZan: false,
            zanNum: "66"
          },
          {
            leaveUserImg: "http://39.105.45.100/images/case4.jpg",
            leaveUser: "普通市民44",
            leaveInfo: "我在春熙路捡到一个女装大佬。",
            commentNum: "10",
            floor: "第2楼",
            leaveTime: "2019年03月11日",
            isZan: true,
            zanNum: "22"
          }
        ]
      }
    ],

  },
  /**
   * 事件处理函数
   */
  showMsg:function(e){
    this.setData({
      isShow: true,
    });
  },
  bodyClick:function(){
    this.setData({
      isShow: false,
    });
  },
  zanChange:function(e){
    console.log(e);
  },
  toMsgUser:function(){
    wx.navigateTo({
      url: '/pages/leaveMsg/leaveMsgUser',
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
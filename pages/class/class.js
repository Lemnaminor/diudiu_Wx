// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    TabCur: 0,
    scrollLeft: 0,
    className: [
      { name: "最新" },
      { name: "附近" },
      { name: "榜单" },
      { name: "寻物" },
      { name: "寻人" },
      { name: "寻宠" },
      { name: "赏金" },
      { name: "招领" },
    ],

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
        messageNum: "6541",
        zanNum: "5.5万",
        leaveList: [
          {
            leaveUserImg: "http://39.105.45.100/images/case3.jpg",
            leaveUser: "普通市民",
            leaveInfo: "我在方正东街拾到充气娃娃一个。目测已经漏气，估计是隔壁老王的。",
            leaveReplay: [
              { info: "可能是隔壁老王丢的。！" },
            ],
            leaveTime: "2019年03月10日",
            isZan: false,
          },
          {
            leaveUserImg: "http://39.105.45.100/images/case2.jpg",
            leaveUser: "普通市民2",
            leaveInfo: "我在春熙路捡到一个老妹。。长得还丑。",
            leaveReplay: [
              { info: "是隔壁老王丢的。！" },
              { info: "不对，应该是隔壁老张丢的。。" },
            ],
            leaveTime: "2019年03月11日",
            dianzan: true,
          }
        ]
      },
      {
        userID: 2,
        userHeader: "../../images/logo.png",
        userName: "张三",
        userTime: "2019-03-01 11:11",
        userContent: "正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容",
        listImg: [
          'http://39.105.45.100/images/case4.jpg',
          'http://39.105.45.100/images/case3.jpg',
          'http://39.105.45.100/images/case2.jpg',
          'http://39.105.45.100/images/case1.jpg',
        ],
        userAddress: "成都市青羊区红星路一段方正东街22号院",
        shareNum: "998",
        messageNum: "6541",
        zanNum: "5.5万",
      },
      {
        userID: 3,
        userHeader: "../../images/logo.png",
        userName: "李四",
        userTime: "2019-03-01 11:11",
        userContent: "正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容",
        listImg: [
          'http://39.105.45.100/images/case4.jpg',
          'http://39.105.45.100/images/case2.jpg',
          'http://39.105.45.100/images/case1.jpg',
        ],
        userAddress: "成都市青羊区红星路一段方正东街22号院",
        shareNum: "998",
        messageNum: "6541",
        zanNum: "5.5万",
      }
    ],


    listInfo2: [
      {
        userID: 3,
        userHeader: "../../images/logo.png",
        userName: "隔壁老王22",
        userTime: "2019-03-01 11:11",
        userContent: "正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容",
        listImg: [
          'http://39.105.45.100/images/case1.jpg',
          'http://39.105.45.100/images/case1.jpg',
          'http://39.105.45.100/images/case2.jpg',
          'http://39.105.45.100/images/case2.jpg',
        ],
        userAddress: "成都市青羊区红星路一段方正东街22号院",
        shareNum: "998",
        messageNum: "6541",
        zanNum: "5.5万",
      },
      {
        userID: 4,
        userHeader: "../../images/logo.png",
        userName: "张三22",
        userTime: "2019-03-01 11:11",
        userContent: "正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容",
        listImg: [
          'http://39.105.45.100/images/case3.jpg',
          'http://39.105.45.100/images/case3.jpg',
          'http://39.105.45.100/images/case4.jpg',
          'http://39.105.45.100/images/case4.jpg',
        ],
        userAddress: "成都市青羊区红星路一段方正东街22号院",
        shareNum: "998",
        messageNum: "6541",
        zanNum: "5.5万",
      }
    ],

  },

  /**
   * 事件操作函数
   */

  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
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
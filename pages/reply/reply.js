// pages/reply/reply.js
var sliderWidth = 96;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //内容筛选
    tabs: ["我的发布", "我的回复"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,

    //--内容列表--
    listInfo: [{
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
        leaveList: [{
            leaveUserImg: "http://39.105.45.100/images/case3.jpg",
            leaveUser: "普通市民",
            leaveInfo: "我在方正东街拾到充气娃娃一个。目测已经漏气，估计是隔壁老王的。",
            leaveReplay: [{
              info: "可能是隔壁老王丢的。！"
            }, ],
            leaveTime: "2019年03月10日",
            isZan: false,
          },
          {
            leaveUserImg: "http://39.105.45.100/images/case2.jpg",
            leaveUser: "普通市民2",
            leaveInfo: "我在春熙路捡到一个老妹。。长得还丑。",
            leaveReplay: [{
                info: "是隔壁老王丢的。！"
              },
              {
                info: "不对，应该是隔壁老张丢的。。"
              },
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


    listInfo2: [{
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
   * 事件处理函数
   */
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  /**内容列表**/
  previewImage: function(e) {
    let current = e.target.dataset.src;
    let idx = e.target.dataset.id - 1;
    let listImg = this.data.listInfo[idx].listImg;
    console.log(idx);
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: listImg // 需要预览的图片http链接列表
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    /**内容筛选**/
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

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
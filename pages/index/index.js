//index.js

//获取应用实例
const app = getApp()
var sliderWidth = 96;

Page({
  data: {
    //搜索框
    colorSearchBar: {
      inputShowed: false,
      inputVal: ""
    },
    //广告位
    indicatorDots: true,
    indicatorActiveColor: "#23beff",
    autoplay: true,
    interval: 5000,
    duration: 600,
    circular: true,
    imgUrls: [
      '../../images/banner1.png',
      '../../images/banner1.png',
      '../../images/banner1.png',
      '../../images/banner1.png',
    ],

    //滚动提示语
    indicatorDotsMsg: false,
    autoplay: true,
    interval: 5000,
    duration: 600,
    verticalMsg: true,
    circularMsg: true,
    msgList: [
      '有联系失主捡到东西要收费的请注意真实性！',
      '风险提示：信息又网友发布，不代表本平台立场！',
    ],
    //导航
    navbar: [{
        imgUrl: "../../images/release.png",
        name: "寻物"
      },
      {
        imgUrl: "../../images/release.png",
        name: "寻人"
      },
      {
        imgUrl: "../../images/release.png",
        name: "寻宠"
      },
      {
        imgUrl: "../../images/release.png",
        name: "赏金"
      },
      {
        imgUrl: "../../images/release.png",
        name: "招领"
      }
    ],
    //内容筛选
    tabs: ["最新发布", "离我最近"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,

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
        // leaveList: [
        //   {
        //     leaveUserImg: "http://39.105.45.100/images/case3.jpg",
        //     leaveUser: "普通市民",
        //     leaveInfo: "我在方正东街拾到充气娃娃一个。目测已经漏气，估计是隔壁老王的。",
        //     leaveReplay: [
        //       { info: "可能是隔壁老王丢的。！" },
        //     ],
        //     floor: "第1楼",
        //     leaveTime: "2019年03月10日",
        //     isZan: false,
        //   },
        //   {
        //     leaveUserImg: "http://39.105.45.100/images/case2.jpg",
        //     leaveUser: "普通市民2",
        //     leaveInfo: "我在春熙路捡到一个老妹。。长得还丑。",
        //     leaveReplay: [
        //       {info: "是隔壁老王丢的。！"},
        //       { info: "不对，应该是隔壁老张丢的。。" },
        //     ],
        //     floor: "第2楼",
        //     leaveTime: "2019年03月11日",
        //     dianzan: true,
        //   }
        // ]
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
        userHeader: "http://39.105.45.100/images/case4.jpg",
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
  //searchBar
  // showInput: function() {
  //   this.setData({
  //     searchBar: {
  //       inputShowed: true
  //     }
  //   });
  // },
  // hideInput: function() {
  //   this.setData({
  //     searchBar: {
  //       inputVal: "",
  //       inputShowed: false
  //     }
  //   });
  // },
  // clearInput: function() {
  //   this.setData({
  //     searchBar: {
  //       inputVal: "",
  //     }
  //   });
  // },
  // inputTyping: function(e) {
  //   this.setData({
  //     searchBar: {
  //       inputVal: e.detail.value
  //     }
  //   });
  // },

  //事件处理函数
  toLeaveMsg:function(){
    wx.navigateTo({
      url: '/pages/leaveMsg/leaveMsg',
    })
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  /**内容列表**/
  previewImage: function (e) {
    let current = e.target.dataset.src;
    let idx = e.target.dataset.id-1;
    let listImg = this.data.listInfo[idx].listImg;
    console.log(idx);
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: listImg // 需要预览的图片http链接列表
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },

  
  onLoad: function() {



    /**内容筛选**/
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
})
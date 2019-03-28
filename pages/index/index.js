//index.js

//获取应用实例
const app = getApp()
var sliderWidth = 96;

Page({
  data: {
    //data Start
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
    //tab栏目切换
    tabs: ["最新发布", "离我最近"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,

    //--内容列表--
    listInfoArr:[
      {
        listInfo: []
      },
      {
        listInfo: []
      }
    ]

  //data End
  },


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

    //tab切换判断内容是否为空请求数据
    var index = parseInt(e.currentTarget.id);
    switch (index) {
      case 0:
        if (this.data.listInfoArr[index].listInfo == '') {
          console.log('pull0');
          this.dropdownRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b/listInfo_0', index);
        }
        break;
      case 1:
        if (this.data.listInfoArr[index].listInfo == '') {
          console.log('pull1');
          this.dropdownRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b/listInfo_1', index);
        }
        break;
    }

  },
  /**内容列表-图片预览**/
  previewImage: function (e) {
    let current = e.target.dataset.src; //点击的图片路径
    let index = this.data.activeIndex; //tab栏目ID
    let idx = e.currentTarget.dataset.id; //栏目下单条数据ID
    let listImg = this.data.listInfoArr[index].listInfo[idx].listImg; //单个数据的图片数组赋值
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: listImg // 需要预览的图片http链接列表
    })
  },
  // cardSwiper
  // cardSwiper(e) {
  //   this.setData({
  //     cardCur: e.detail.current
  //   })
  // },

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
        var list_num = "listInfoArr[" + index + "].listInfo";
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
        var list_num = "listInfoArr[" + index + "].listInfo";

        that.setData({
          [list_num]: that.data.listInfoArr[index].listInfo.concat(res.data)
        })

        that.setData({
          isLoading: false,
        }),
          wx.hideNavigationBarLoading();

      }
    })

  },
  
  onLoad: function() {

    //默认请求第一页数据
    this.dropdownRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b/listInfo_0', '0');

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
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

    console.log('下拉刷新');
    var index = parseInt(this.data.activeIndex);
    console.log(index);
    switch (index) {
      case 0:
        console.log('down-0');
        this.dropdownRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b/listInfo_0', index);
        break;
      case 1:
        console.log('down-1');
        this.dropdownRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b/listInfo_1', index);
        break;
    }

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

    console.log("上拉触底");
    var index = parseInt(this.data.activeIndex);
    console.log(index);
    switch (index) {
      case 0:
        console.log('pull0');
        this.pullupRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b/listInfo_0', index);
        break;
      case 1:
        console.log('pull1');
        this.pullupRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b/listInfo_1', index);
        break;
    }

  },



})
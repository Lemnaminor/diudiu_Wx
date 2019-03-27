// pages/news/news.js

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //tab切换
    tabs: ["最新文章", "最热文章"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,

    //新闻列表
    newsListArr:[
      {
        newsList: [],    
      },
      {
        newsList: [
          // {
          //   hrefUrl: "../detail/newsDetail",
          //   openType: "navigate",
          //   newsImg: "../../images/banner1.png",
          //   title: "222锤子科技无限屏手机坚果 Pro 2S 发布，售价 1798 元起",
          //   describe: "2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办",
          //   source: "本网站",
          //   time: "2019-02-26 10:10",
          //   browse: "6515"
          // }
        ],
      }
    ],
    //loading
    isLoading: false,

  },

  //事件处理函数
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
    //tab切换判断内容是否为空请求数据
    var index = e.currentTarget.id;
    if (this.data.newsListArr[index].newsList == ''){
      this.dropdownRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b', index);
    }

  },
  //下拉加载请求函数
  dropdownRequest(url, index) {
    wx.showLoading({
      title: '加载中',
    })
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    var that = this;
    wx.request({
      // url: 'https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b', // 仅为示例，并非真实的接口地址
      url: url,
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'get',
      success(res) {
        console.log(res.data);
        var newsList_num = "newsListArr[" + index +"].newsList";
        that.setData({
          [newsList_num]: res.data
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
  pullupRequest(url,index){
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
        var newsList_num = "newsListArr[" + index + "].newsList";

        that.setData({
          [newsList_num]: that.data.newsListArr[index].newsList.concat(res.data)
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
  onLoad: function(options) {

    //tab切换
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

    //第一次请求第一页数据
    this.dropdownRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b','0');

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

    console.log('下拉刷新');

    var index = parseInt(this.data.activeIndex);
    console.log(index);
    switch (index){
      case 0:
      console.log('down-0');
        this.dropdownRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b',index);
        break;
      case 1:
        console.log('down-1');
        this.dropdownRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b', index);
        break;
    }


  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("上拉触底");


    var index = parseInt(this.data.activeIndex);
    console.log(index);
    switch (index) {
      case 0:
        console.log('pull0');
        this.pullupRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b', index);
        break;
      case 1:
        console.log('pull1');
        this.pullupRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b', index);
        break;
    }



  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
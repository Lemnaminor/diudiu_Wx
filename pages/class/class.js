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
    listInfoArr:[
      {
        listInfo:[]
      },
      {
        listInfo:[]
      },
      {
        listInfo:[]
      }
    ]

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

    //tab切换判断内容是否为空请求数据
    var index = parseInt(e.currentTarget.dataset.id);
    console.log(index);
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
    let index = this.data.TabCur; //tab栏目ID
    let idx = e.currentTarget.dataset.id; //栏目下单条数据ID
    let listImg = this.data.listInfoArr[index].listInfo[idx].listImg; //单个数据的图片数组赋值
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: listImg // 需要预览的图片http链接列表
    })
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


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //默认请求第一页数据
    this.dropdownRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b/listInfo_0', 0);

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
    var index = parseInt(this.data.TabCur);
    console.log(index);
    switch (index) {
      case 0:
        console.log('down-0');
        this.dropdownRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b/listInfo_0', '0');
        break;
      case 1:
        console.log('down-1');
        this.dropdownRequest('https://www.easy-mock.com/mock/5c7f2260e26f262296f92a1b/listInfo_1', '1');
        break;
    }

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

    console.log("上拉触底");
    var index = parseInt(this.data.TabCur);
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
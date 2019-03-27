// pages/map/map.js
// 引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0, //地图初次加载时的纬度坐标
    longitude: 0, //地图初次加载时的经度坐标
    name: "" //选择的位置名称
  },

  //移动选点
  moveToLocation: function() {
    var that = this;
    wx.chooseLocation({
      success: function(res) {
        console.log(res);
        console.log(res.address);
        //选择地点之后返回到原来页面
        var mapAddress = res.address;
        app.globalData.mapAddress = mapAddress;
        wx.switchTab({
          url: "/pages/release/release",
          success:function(e){
            var page = getCurrentPages().pop();
            if(page == undefined || page == null){
              return false;
            }
            page.onLoad();
          }
        });
      },
      fail: function(err) {
        console.log(err);
        wx.switchTab({
          url: '/pages/release/release',
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'MNXBZ-G5TWD-GYF42-HHZJL-2W2J3-PVBX4'
    });

    this.moveToLocation()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        console.log(latitude);
        console.log(longitude);
        console.log(speed);
        console.log(accuracy);
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // 调用接口
    qqmapsdk.search({
      keyword: '酒店',
      success: function(res) {
        console.log(res);
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {
        console.log(res);
      }
    });
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
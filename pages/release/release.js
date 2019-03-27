// pages/release/release.js
// 引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeholder: "请描述信息内容...",
    formSubmit(e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
    formReset() {
      console.log('form发生了reset事件')
    },

    //图片上传
    files: [],
    
    //发布类别
    classArray: ['寻物启示', '寻人启示', '寻宠启示', '赏金启示', '失物招领'],
    classIndex: 0,

    //物品分类
    multiArray: [
      ['寻物启示', '寻人启示', '寻宠启示'],
      ['卡包', '钥匙', '数码电子', '金银首饰', '其他'],
    ],
    multiIndex: [0, 0],
    multiVal: '',

    //地图地址选择
    address: "",
    src: ""

  },
  //事件处理函数
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },

  //发布类别
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      classIndex: e.detail.value
    })
  },
  //物品类别
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      multiIndex: e.detail.value,
      multiVal: this.data.multiArray[1][this.data.multiIndex[1]]
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['卡包', '钥匙', '数码电子', '金银首饰', '其他'];
            break;
          case 1:
            data.multiArray[1] = ['老人', '成年人', '青少年', '儿童', '其他'];
            break;
          case 2:
            data.multiArray[1] = ['狗', '猫', '其他'];
            break;
        }
        data.multiIndex[1] = 0;
        break;
    }
    this.setData(data);

  },

  //地图地址选择
  onChangeAddress: function (e) {
    wx.navigateTo({
      url: "/pages/map/map"
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var mapAddress = app.globalData.mapAddress;
    /*判断是第一次加载还是从position页面返回
       如果从position页面返回，会传递用户选择的地点*/
    if (mapAddress != "") {
      //设置变量 address 的值
      this.setData({
        address: mapAddress
      });
    } else {
      // 实例化API核心类
      qqmapsdk = new QQMapWX({
        //此key需要用户自己申请
        key: 'NOSBZ-WSWWO-U22WE-SES62-Y7RS3-MTFAG'
      });
      var that = this;
      // 调用接口
      qqmapsdk.reverseGeocoder({
        success: function (res) {
          that.setData({
            address: res.result.address
          });
        },
        fail: function (res) {
          //console.log(res);
        },
        complete: function (res) {
          //console.log(res);
        }
      });
    }

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
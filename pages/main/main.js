var that;
var Bmob = require('../../utils/bmob.js');
Page({
  data: {
    choseQuestionBank: "点击选择",

    array: ['加菲猫饮食题库', '加菲猫生活题库'],


    objectArray: [
      {
        id: 0,
        name: '加菲猫饮食题库'
      },
      {
        id: 1,
        name: '加菲猫生活题库'
      }
    ],
    index: 0,
    loading: true,
    currentUserId: ''
  },

  onLoad: function () {
    that = this;
  },

  onShow: function () {

  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      choseQuestionBank: that.data.array[e.detail.value]
    })
  },

chose: function () {
  var choseQuestionBank = that.data.choseQuestionBank;
  if (choseQuestionBank != "点击选择") {
    getApp().globalData.choseQuestionBank = choseQuestionBank;
    getApp().globalData.score = 0;

    wx.navigateTo({
      url: '../choiceDetail/choiceDetail'
    });
  }
  else if (choseQuestionBank == "点击选择") {
    wx.showToast({
      title: '请选择题库',
      image: '../../images/warn.png',
      duration: 2000
    })
  }
    // wx.request({
    //   url: 'http://localhost:8011/login',
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   data: {},
    //   success: function (res) {
    //     console.log(res.data)
    //     if (register == true) {
    //       var choseQuestionBank = that.data.choseQuestionBank;
    //       if (choseQuestionBank != "点击选择") {
    //         getApp().globalData.choseQuestionBank = choseQuestionBank;
    //         getApp().globalData.score = 0;

    //         wx.navigateTo({
    //           url: '../singleChoiceExplain/singleChoiceExplain'
    //         });
    //       }
    //       else if (choseQuestionBank == "点击选择") {
    //         wx.showToast({
    //           title: '请选择题库',
    //           image: '../../images/warn.png',
    //           duration: 2000
    //         })
    //       }
    //     }
    //   }
    // })
  },


  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '加菲猫题库',
      path: '/pages/choiceMain/choiceMain',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }

})
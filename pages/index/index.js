//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: false,
    isNewOpen: true,
    // interval: 2000,
    // duration: 1000,
    current: 0,
    activeImgIndex: 2,
    titleImgSrc:"../img/3.png",
    bgm: '../img/music.png',
    movies: [
      {
        activeUrl: '../img/1－2.png',
        quietUrl: '../img/1－1.png',
        titleImgUrl: '../img/1.png'
      },
      {
        activeUrl: '../img/2－2.png',
        quietUrl: '../img/2－1.png',
        titleImgUrl: '../img/2.png'
      },
      {
        activeUrl: '../img/3－2.png',
        quietUrl: '../img/3－1.png',
        titleImgUrl: '../img/3.png'
      },
      {
        activeUrl: '../img/4－2.png',
        quietUrl: '../img/4－1.png',
        titleImgUrl: '../img/6.png'
      },
      {
        activeUrl: '../img/5－2.png',
        quietUrl: '../img/5－1.png',
        titleImgUrl: '../img/5.png'
      },
      {
        activeUrl: '../img/6－2.png',
        quietUrl: '../img/6－1.png',
        titleImgUrl: '../img/6.png'
      },
      {
        activeUrl: '../img/7－2.png',
        quietUrl: '../img/7－1.png',
        titleImgUrl: '../img/7.png'
      },
      {
        activeUrl: '../img/8－2.png',
        quietUrl: '../img/8－1.png',
        titleImgUrl: '../img/8.png'
      },
      {
        activeUrl: '../img/9－2.png',
        quietUrl: '../img/9－1.png',
        titleImgUrl: '../img/9.png'
      },
      {
        activeUrl: '../img/10－2.png',
        quietUrl: '../img/10－1.png',
        titleImgUrl: '../img/10.png'
      },
      {
        activeUrl: '../img/11－2.png',
        quietUrl: '../img/11－1.png',
        titleImgUrl: '../img/11.png'
      },
      {
        activeUrl: '../img/12－2.png',
        quietUrl: '../img/12－1.png',
        titleImgUrl: '../img/12.png'
      }
    ],
    audioAction: {
      method: 'pause'
    },
    isClose: true,
    bighash_bottom: '67rpx',
    bighash_left: '24.25%'
  },

  audioPlay: function () {
    var that = this;
    this.setData({
      isMute: !this.data.isMute
    })
    if (that.data.audioAction.method == "play") {
      this.setData({
        audioAction: {
          method: 'pause'
        },

      });
    } else {
      this.setData({
        audioAction: {
          method: 'play'
        }
      });
    }
  },
  tocontent: function () {
    this.setData({
        isNewOpen: true,
        audioAction: {
          method: 'pause'
        }
      }),
      wx.navigateTo({
        url: '../content/content?'
      })

  },

  onLoad: function (options) {
    this.audioPlay();
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        //屏幕的宽度/屏幕的高度 = 微信固定宽度(750)/微信高度
        that.setData({
          winHeight: res.windowHeight - (res.windowWidth * 90 / 750) + 'px'
        })
      }
    });
  },
  onShow: function () {
    if (!this.data.isNewOpen) {
      this.setData({
        isNewOpen: true,
        audioAction: {
          method: 'play'
        }
      })
    }
  },
  changeSwiper(e) {
    console.log(e.detail);
    if (e.detail.source === 'touch') {
      var len = this.data.movies.length;
      var cur = 0;
      var aii = 0;
      var tit = 0;
      switch (e.detail.current) {
        case len - 1:
          aii = 1;
          tit = 1;
          break;
        case len - 2:
          aii = 0;
          tit = 0;
          break;
        default:
          aii = e.detail.current + 2;
          tit = e.detail.current + 2;
          break;
      }
      this.setData({
        current: e.detail.current,
        activeImgIndex: aii,
        titleImgSrc: tit
      });
    }

  },
  tapSwiper: function (e) {
    var len = this.data.movies.length;
    var index = e.currentTarget.dataset.index;
    var cur = 0;
    var aii = 0;
    var tit = 0;
    var bottom_positon = 0;
    var left_positon = 0;
    switch (index) {
      case 0:
        cur = len - 2
        aii = index;
        bottom_positon = "67rpx";
        left_positon = "24.25%";
        break;
      case 1:
        cur = len - 1
        aii = index;
        tit = index;
        bottom_positon = "13.25%";
        left_positon = "24.25%";
        break;
      case len - 1:
        cur = len - 3
        aii = index;
        tit = index;
        bottom_positon = "12.25%";
        left_positon = "37.25%";
        break;
      case len - 2:
        cur = len - 4
        aii = index;
        tit = index;
        break;

      default:
        cur = index - 2
        aii = index;
        tit = index;
    }
    this.setData({
      current: cur,
      activeImgIndex: aii,
      titleImgSrc: this.data.movies[index].titleImgUrl,
      bighash_bottom: bottom_positon,
      bighash_left: left_positon
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  moveSwiper(e) {
    console.log(e.detail);

  }
})
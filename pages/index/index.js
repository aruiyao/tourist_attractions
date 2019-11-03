//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    but_1:true,
    but_2: true,
    but_3: true,
    but_4: true,
    but_5: true,
    but_6: true,
    but_7: true,
    but_8: true,
    but_9: true,
    but_10: true,
    but_11: true,
    but_12: true,
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
        titleImgUrl: '../img/4.png'
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
    bighash_bottom: '65%',
    bighash_left: '65%',
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
        url: '../content/content?chooseIndex='+this.data.activeImgIndex
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
      var bottom_positon = 0;
      var left_positon = 0;
      var len = this.data.movies.length;
      var cur = 0;
      var aii = 0;
      var tit = 0;
      switch (e.detail.current) {
        case 11:
          aii = 1;
          bottom_positon = "8%";
          left_positon = "25%";
          break;
        case 10:
          aii = 0;
          bottom_positon = "65%";
          left_positon = "65%";
          break;
        case 9:
          aii = 11;
          bottom_positon = "65%";
          left_positon = "39%";
          break;
        case 8:
          aii = 10;
          bottom_positon = "41.5%";
          left_positon = "72%";
          break;
        case 7:
          aii = 9;
          bottom_positon = "50%";
          left_positon = "73%";
          break;
        case 6:
          aii = 8;
          bottom_positon = "12.4%";
          left_positon = "37%";
          break;
        case 5:
          aii = 7;
          bottom_positon = "12.7%";
          left_positon = "23%";
          break;
        case 4:
          aii = 6;
          bottom_positon = "48%";
          left_positon = "33%";
          break;
        case 3:
          aii = 5;
          bottom_positon = "65%";
          left_positon = "65%";
          break;
        case 2:
          aii = 4;
          bottom_positon = "36%";
          left_positon = "67%";
          break;
        case 1:
          aii = 3;
          bottom_positon = "75.5%";
          left_positon = "7%";
          break;
        case 0:
          aii = 2;
          bottom_positon = "65%";
          left_positon = "65%";
          break;
        default:
          aii = e.detail.current + 2;
          break;
      }
      this.setData({
        current: e.detail.current,
        activeImgIndex: aii,
        bighash_bottom: bottom_positon,
        bighash_left: left_positon,
        titleImgSrc: this.data.movies[aii].titleImgUrl
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
        bottom_positon = "21%";
        left_positon = "39%";
        break;
      case 1:
        cur = len - 1
        aii = index;
        tit = index;
        bottom_positon = "8%";
        left_positon = "25%";
        
        break;
      case 11:
        cur = len - 3
        aii = index;
        tit = index;
        bottom_positon = "65%";
        left_positon = "39%";
        break;
      case 10:
        cur = len - 4
        aii = index;
        tit = index;
        bottom_positon = "41.5%";
        left_positon = "72%";
        break;
      case 9:
        cur = len - 5
        aii = index;
        tit = index;
        bottom_positon = "50%";
        left_positon = "73%";
        break;
      case 8:
        cur = len - 6
        aii = index;
        tit = index;
        bottom_positon = "12.4%";
        left_positon = "37%";
        break;
      case 7:
        cur = len - 7
        aii = index;
        tit = index;
        bottom_positon = "12.7%";
        left_positon = "23%";
        break;
      case 6:
        cur = len - 8
        aii = index;
        tit = index;
        bottom_positon = "48%";
        left_positon = "33%";
        break;
      case 5:
        cur = len - 9
        aii = index;
        tit = index;
        bottom_positon = "65%";
        left_positon = "65%";
        break;
      case 4:
        cur = len - 10
        aii = index;
        tit = index;
        bottom_positon = "36%";
        left_positon = "67%";
        break;
      case 3:
        cur = len - 11
        aii = index;
        tit = index;
        bottom_positon = "75.5%";
        left_positon = "7%";
        break;
      case 2:
        cur = len - 12
        aii = index;
        tit = index;
        bottom_positon = "65%";
        left_positon = "65%";
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
      bighash_left: left_positon,
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
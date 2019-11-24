//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: false,
    isNewOpen: true,
    // interval: 2000,
    // duration: 1000,
    animationData: {},
    hidden: false,
    current: 11,
    activeImgIndex: 1,
    titleImgSrc:"https://www.uumon.com/rgtImg/img/222.png",
    bgm: 'https://www.uumon.com/rgtImg/icon/img/music.png',
    movies: [
      {
        activeUrl: 'https://www.uumon.com/rgtImg/img/1-2.png',
        quietUrl: 'https://www.uumon.com/rgtImg/img/1-1.png',
        titleImgUrl: 'https://www.uumon.com/rgtImg/img/111.png'
      },
      {
        activeUrl: 'https://www.uumon.com/rgtImg/img/2-2.png',
        quietUrl: 'https://www.uumon.com/rgtImg/img/2-1.png',
        titleImgUrl: 'https://www.uumon.com/rgtImg/img/222.png'
      },
      {
        activeUrl: 'https://www.uumon.com/rgtImg/img/3-2.png',
        quietUrl: 'https://www.uumon.com/rgtImg/img/3-1.png',
        titleImgUrl: 'https://www.uumon.com/rgtImg/img/333.png'
      },
      {
        activeUrl: 'https://www.uumon.com/rgtImg/img/4-2.png',
        quietUrl: 'https://www.uumon.com/rgtImg/img/4-1.png',
        titleImgUrl: 'https://www.uumon.com/rgtImg/img/444.png'
      },
      {
        activeUrl: 'https://www.uumon.com/rgtImg/img/5-2.png',
        quietUrl: 'https://www.uumon.com/rgtImg/img/5-1.png',
        titleImgUrl: 'https://www.uumon.com/rgtImg/img/555.png'
      },
      {
        activeUrl: 'https://www.uumon.com/rgtImg/img/6-2.png',
        quietUrl: 'https://www.uumon.com/rgtImg/img/6-1.png',
        titleImgUrl: 'https://www.uumon.com/rgtImg/img/666.png'
      },
      {
        activeUrl: 'https://www.uumon.com/rgtImg/img/7-2.png',
        quietUrl: 'https://www.uumon.com/rgtImg/img/7-1.png',
        titleImgUrl: 'https://www.uumon.com/rgtImg/img/777.png'
      },
      {
        activeUrl: 'https://www.uumon.com/rgtImg/img/8-2.png',
        quietUrl: 'https://www.uumon.com/rgtImg/img/8-1.png',
        titleImgUrl: 'https://www.uumon.com/rgtImg/img/888.png'
      },
      {
        activeUrl: 'https://www.uumon.com/rgtImg/img/9-2.png',
        quietUrl: 'https://www.uumon.com/rgtImg/img/9-1.png',
        titleImgUrl: 'https://www.uumon.com/rgtImg/img/999.png'
      },
      {
        activeUrl: 'https://www.uumon.com/rgtImg/img/10-2.png',
        quietUrl: 'https://www.uumon.com/rgtImg/img/10-1.png',
        titleImgUrl: 'https://www.uumon.com/rgtImg/img/1010.png'
      },
      {
        activeUrl: 'https://www.uumon.com/rgtImg/img/11-2.png',
        quietUrl: 'https://www.uumon.com/rgtImg/img/11-1.png',
        titleImgUrl: 'https://www.uumon.com/rgtImg/img/1111.png'
      },
      {
        activeUrl: 'https://www.uumon.com/rgtImg/img/12-2.png',
        quietUrl: 'https://www.uumon.com/rgtImg/img/12-1.png',
        titleImgUrl: 'https://www.uumon.com/rgtImg/img/1212.png'
      }
    ],
    audioAction: {
      method: 'pause'
    },
    isClose: true,
    bighash_bottom: '9%',
    bighash_left: '28%',
   // but_3:false
    activeImgIndex: 1
  },
  bindfollow: function (e) {
    var animation = wx.createAnimation({
      duration: 3000,
      timingFunction: 'linear',
    })

    this.animation = animation

    animation.opacity(0).step()

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      this.setData({
        hidden: true
      })
    }.bind(this), 3000)

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
        isNewOpen: false,
        audioAction: {
          method: 'pause'
        }
      }),
      wx.navigateTo({
        url: '../content/content?chooseIndex='+this.data.activeImgIndex
      })

  },

  onLoad: function (options) {
    setTimeout(function () {
      this.bindfollow();
    }.bind(this), 2000)
    
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
    //console.log(e.detail);
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
          bottom_positon = "9%";
          left_positon = "28%";
          break;
        case 10:
          aii = 0;
          bottom_positon = "76%";
          left_positon = "68%";
          break;
        case 9:
          aii = 11;
          bottom_positon = "77%";
          left_positon = "40%";
          break;
        case 8:
          aii = 10;
          bottom_positon = "45%";
          left_positon = "76%";
          break;
        case 7:
          aii = 9;
          bottom_positon = "59%";
          left_positon = "73%";
          break;
        case 6:
          aii = 8;
          bottom_positon = "14.4%";
          left_positon = "40%";
          break;
        case 5:
          aii = 7;
          bottom_positon = "13%";
          left_positon = "23.5%";
          break;
        case 4:
          aii = 6;
          bottom_positon = "57%";
          left_positon = "35%";
          break;
        case 3:
          aii = 5;
          bottom_positon = "30%";
          left_positon = "76%";
          break;
        case 2:
          aii = 4;
          bottom_positon = "39%";
          left_positon = "73%";
          break;
        case 1:
          aii = 3;
          bottom_positon = "88.5%";
          left_positon = "7%";
          break;
        case 0:
          aii = 2;
          bottom_positon = "76%";
          left_positon = "68%";
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
        titleImgSrc: this.data.movies[aii].titleImgUrl,
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
        bottom_positon = "22%";
        left_positon = "40%";
        break;
      case 1:
        cur = len - 1
        aii = index;
        tit = index;
        bottom_positon = "9%";
        left_positon = "28%";
        break;
      case 11:
        cur = len - 3
        aii = index;
        tit = index;
        bottom_positon = "77%";
        left_positon = "40%";
        console.log('123456789');
        break;
      case 10:
        cur = len - 4
        aii = index;
        tit = index;
        bottom_positon = "45%";
        left_positon = "76%";
        break;
      case 9:
        cur = len - 5
        aii = index;
        tit = index;
        bottom_positon = "59%";
        left_positon = "73%";
        break;
      case 8:
        cur = len - 6
        aii = index;
        tit = index;
        bottom_positon = "14.4%";
        left_positon = "40%";
        break;
      case 7:
        cur = len - 7
        aii = index;
        tit = index;
        bottom_positon = "13%";
        left_positon = "23.5%";
        break;
      case 6:
        cur = len - 8
        aii = index;
        tit = index;
        bottom_positon = "57%";
        left_positon = "35%";
        break;
      case 5:
        cur = len - 9
        aii = index;
        tit = index;
        bottom_positon = "30%";
        left_positon = "76%";
        break;
      case 4:
        cur = len - 10
        aii = index;
        tit = index;
        bottom_positon = "39%";
        left_positon = "73%";
        break;
      case 3:
        cur = len - 11
        aii = index;
        tit = index;
        bottom_positon = "88.5%";
        left_positon = "7%";
        break;
      case 2:
        cur = len - 12
        aii = index;
        tit = index;
        bottom_positon = "76%";
        left_positon = "68%";
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
    //console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  moveSwiper(e) {
    //console.log(e.detail);

  }
})
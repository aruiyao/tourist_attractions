Page({
  data: {
    isPlay: true,
    but_1: true,
    but_2: false,
    but_3: false,
    but_4: false,
    but_5: false,
    toView: "m2",
    winHeight: '100%',
    banner_autoplay: true,
    banner_interval: 2000,
    banner_duration: 500,
    banner_dots: true,
    isHave3D: false,
    imgs: [],
    currentSwiper: 0,
    isMute: false,
    playState: true,
    innerAudioContext: wx.createInnerAudioContext(),
    currentTime: '00:00',
    duration: '00:00',
    circleLeft: 0,
    startPageX: 0,
    second_top: 0,
    third_top: 0,
    solid_height: 0,
    detail: "",
    panorama: "",
    open_time: "",
    ticket_policy: "",
    phone: "",
    address: "",
    pageConfig: [{
        imgs: [{
            url: '../img/detail/虎丘塔1.jpg',
            isHave3D: false
          },
          {
            url: '../img/detail/虎丘塔2.jpg',
            isHave3D: true
          }
        ],
        detail: "&nbsp;&nbsp; &nbsp;&nbsp;苏东坡：尝言过姑苏不游虎丘，不谒闾丘，乃二欠事\n&nbsp;&nbsp; &nbsp;&nbsp;虎丘山风景名胜区，位于苏州古城西北角的虎丘风景名胜区，有“吴中第一名胜”、“吴中第一山”的美誉。虎丘塔位于虎丘山山门内，始建于959年，落成于961年，世界第二斜塔，中国第一斜塔，1961年被列为全国重点保护文物保护单位。\n&nbsp;&nbsp; &nbsp;&nbsp;虎丘塔，仿楼阁式砖木套筒结构，七级八面，塔身全砖砌。屋檐为仿木斗拱，飞檐起翘，塔内两层塔壁，仿佛小塔外面又套了一座大塔，其层间的连接以叠涩砌作的砖砌体连接上下和左右。",
        panorama: "../img/detail/虎丘塔1.jpg",
        open_time: "1.7:30-17:30（5月1日-10月7日）旺季\n2.7:30-17:00（10月8日-4月30日）淡季",
        ticket_policy: "淡季:60人民币；\n旺季:80人民币 \n半票:6周岁（不含6周岁）～18周岁（含18周岁）\n&nbsp;&nbsp; &nbsp;&nbsp;未成年人凭居民身份证或学生证等有效证件、全日制大学本科及以下学历学生凭学生证等有效证件、全国60周岁及以上老人（除江苏省外）等群体凭有效证件免票\n&nbsp;&nbsp; &nbsp;&nbsp;6周岁（含6周岁）以下或身高在1.4米（含1.4米）以下儿童、中华人民共和国现役军人凭军人证等有效证件、军队离休干部和退休干部凭离退休干部证、革命伤残军人持国务院颁发的伤残军人证、全国70周岁以上的老年人持《高龄证》或居民身份证、全国“劳动模范”凭苏州市园林和绿化管理局和苏州市总工会发放的“游园证”、全国残疾人员凭有效《残疾证》免票入园。",
        phone: "0512-67232305\n0512-65323488",
        address: "苏州市虎丘区山门内8号",
      },
      {
        imgs: [{
            url: '../img/detail/瑞光塔1.jpg',
            isHave3D: false
          },
          {
            url: '../img/detail/瑞光塔2.jpg',
            isHave3D: true
          }
        ],
        detail: "&nbsp;&nbsp; &nbsp;&nbsp;瑞光寺初名普济禅院，据志书记载为三国吴赤乌四年（241年）孙权为迎接西域康居国僧人性康而建。十年，孙权为报母恩又建十三层舍利塔于寺中。而根据 先后在塔内发现的宝幢木函、佛经、石佛、石础、塔砖等文物上的纪年文字，与塔的平面、结构、外观综合考证，今塔系北宋景德元年（1004年）至天圣八年（ 1030年）所建，当时佛寺名为瑞光禅院。寺院里历经毁修，塔曾于南宋淳熙，明 洪武、永乐、天顺、嘉靖崇祯，以及清康熙、乾隆、道光年间修葺。清咸丰十年 （1860年）又遭兵燹，寺毁塔存，同治十一年（1872年）曾加以维修,有九层",
        panorama: "https://www.uumon.com/rgtImg/detail/Bitmap@2x.png",
        open_time: "每天9:00-17:00",
        ticket_policy: "门票：￥40/人\n学生票半价、退休人员免",
        phone: "0519-123456789",
        address: "江苏省苏州市姑苏区东大街49号盘门景区内",
      },
    ]
  },
  onLoad: function (options) {
    let that = this;
    let pageConfig = this.data.pageConfig[0];
    this.setData({
      imgs: pageConfig.imgs,
      detail: pageConfig.detail,
      panorama: pageConfig.panorama,
      open_time: pageConfig.open_time,
      ticket_policy: pageConfig.ticket_policy,
      phone: pageConfig.phone,
      address: pageConfig.address,
    })
    this.setData({
      isHave3D: pageConfig.imgs[0].isHave3D
    })
    wx.getSystemInfo({
      success: function (res) {
        wx.createSelectorQuery().selectAll('.fixed-area').boundingClientRect(function (rects) {
          rects.forEach(function (rect) {
            that.setData({
              winHeight: res.windowHeight - rect.bottom + 5 + 'px'
            });
          })
        }).exec();
        wx.createSelectorQuery().select('#open-time').boundingClientRect(function (openTime) {
          wx.createSelectorQuery().select('#ticket').boundingClientRect(function (ticket) {
            wx.createSelectorQuery().select('#phone').boundingClientRect(function (phone) {
              that.setData({
                second_top: ticket.top - openTime.top - 5 + "px",
                third_top: phone.top - openTime.top - 5 + "px",
                solid_height: phone.top - openTime.top + "px",
              })

            }).exec();
          }).exec();
        }).exec();
      }
    });
    this.innerAudioContext = wx.createInnerAudioContext();
    this.innerAudioContext.src = 'https://www.uumon.com/rgtImg/bgm/bgm.mp3'
    this.innerAudioContext.onPlay(() => {
      this.updateTime();
    });
    this.innerAudioContext.autoplay = true;
    this.innerAudioContext.onError(res => {
      console.log(res.errMsg);
      console.log(res.errCode);
    });

  },
  onUnload() {
    this.innerAudioContext.destroy()
  },
  audioPlay() {
    this.data.isPlay ? this.innerAudioContext.pause() : this.innerAudioContext.play();
    this.setData({
      isPlay: !this.data.isPlay
    })
  },
  updateTime() {
    this.setData({
      circleLeft: this.innerAudioContext.currentTime /
        this.innerAudioContext.duration *
        560
    })
    setTimeout(this.updateTime, 1000);
  },
  dragStart(e) {
    this.startPageX = e.touches[0].clientX;
  },
  dragMove(e) {
    // console.log(e.touches[0].clientX);
    let newLeft = 0;
    if (
      (this.data.circleLeft >= this.startPageX - e.touches[0].clientX &&
        this.startPageX - e.touches[0].clientX >= 0) ||
      (this.data.circleLeft <= 560 + this.startPageX - e.touches[0].clientX &&
        this.startPageX - e.touches[0].clientX <= 0)
    ) {
      newLeft = (e.touches[0].clientX - this.startPageX) * 2;
      this.startPageX = e.touches[0].clientX;
      this.setData({
        circleLeft: newLeft + this.data.circleLeft
      })
      let newPosition = this.data.circleLeft / 560 * this.innerAudioContext.duration;
      this.innerAudioContext.seek(newPosition);
      if (this.innerAudioContext.paused) {
        this.innerAudioContext.play();
        this.playState = true;
      }
    }
  },
  clickBtn1: function (e) {
    this.setData({
      but_1: true,
      but_2: false,
      but_3: false,
      but_4: false,
      but_5: false,
      toView: e.currentTarget.dataset.hash
    })
  },
  clickBtn2: function (e) {
    this.setData({
      but_1: false,
      but_2: true,
      but_3: false,
      but_4: false,
      but_5: false,
      toView: e.currentTarget.dataset.hash
    })
  },
  clickBtn3: function (e) {
    this.setData({
      but_1: false,
      but_2: false,
      but_3: true,
      but_4: false,
      but_5: false,
      toView: e.currentTarget.dataset.hash
    })
  },
  clickBtn4: function (e) {
    this.setData({
      but_1: false,
      but_2: false,
      but_3: false,
      but_4: true,
      but_5: false,
      toView: e.currentTarget.dataset.hash
    })
  },
  clickBtn5: function (e) {
    this.setData({
      but_1: false,
      but_2: false,
      but_3: false,
      but_4: false,
      but_5: true,
      toView: e.currentTarget.dataset.hash
    })
  },
  swiperChange: function (e) {
    var is3D = this.data.imgs[e.detail.current].isHave3D
    this.setData({
      currentSwiper: e.detail.current,
      isHave3D: is3D
    })
  },
  changeVoice() {
    this.setData({
      isMute: !this.data.isMute
    })
    if (this.data.isMute) {
      this.innerAudioContext.volume = 0
    } else {
      this.innerAudioContext.volume = 1
    }

  }
})
Page({
  data: {
    url: ""

  },
  onLoad: function (options) {
    let chooseIndex = options.chooseIndex;
    switch (chooseIndex) {
      case "0":
        this.title = "天香小筑";
        this.url = "https://py3jjd9m9q.720yun.com/t/171j5Okvru2"
        break;
      case "1":
        this.title = "瑞光塔";
        this.url = "https://py3jjd9m9q.720yun.com/t/86vkimdb7p7"
        break;
      case "2":
        this.title = "太平天国忠王府";
        this.url = "https://py3jjd9m9q.720yun.com/t/cc3j5z4aey7"
        break;
      case "3":
        this.title = "虎丘塔";
        this.url = "https://py3jjd9m9q.720yun.com/t/84vkihr9Opy"
        break;
      case "4":
        this.title = "罗汉院双塔及正殿遗址";
        this.url = "https://py3jjd9m9q.720yun.com/t/61vkimih02q"
        break;
      case "5":
        this.title = "东吴大学（旧址）";
        this.url = ""
        break;
      case "6":
        this.title = "俞樾旧居（曲园）";
        this.url = ""
        break;
      case "7":
        this.title = "开元寺无梁殿";
        this.url = "https://py3jjd9m9q.720yun.com/t/34vkimibgpe"
        break;
      case "8":
        this.title = "文庙大成殿";
        this.url = "https://py3jjd9m9q.720yun.com/t/4a4jrzynva1"
        break;
      case "9":
        this.title = "全晋会馆";
        this.url = ""
        break;
      case "10":
        this.title = "甲辰巷砖塔";
        this.url = "https://py3jjd9m9q.720yun.com/t/85vkimimp2b"
        break;
      case "11":
        this.title = "报恩寺塔（北寺塔）";
        this.url = "https://py3jjd9m9q.720yun.com/t/4b4j5Okvra7"
        break;
      default:
        this.title = "";
        this.url = ""
        break;
    }
    this.setData({
      url: this.url
    })
    wx.setNavigationBarTitle({
      title: this.title
    })

  },


})
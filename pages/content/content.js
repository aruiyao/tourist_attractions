Page({
  data: {
    isPlay: true,
    but_1: true,
    but_2: false,
    but_3: false,
    but_4: false,
    but_5: false,
    toView: "",
    winHeight: '100%',
    banner_autoplay: true,
    banner_interval: 3000,
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
    m1_top: 0,
    m2_top: 0,
    m3_top: 0,
    m4_top: 0,
    m5_top: 0,
    getPosition: "",
    detail: "",
    panorama: "",
    open_time: "",
    ticket_policy: "",
    phone: "",
    address: "",
    traffic: "",
    detail_img: "",
    microShowImg: "",
    _setTime: null,
    pageConfig: [
      //
      {
        name: "天香小筑",
        isHave3D: false,
        bgm: "",
        microShowImg: "",
        imgs: [{
            url: 'https://www.uumon.com/rgtImg/img/detail/天香小筑1.jpg',
          },
          {
            url: 'https://www.uumon.com/rgtImg/img/detail/天香小筑2.jpg',
          },
          {
            url: 'https://www.uumon.com/rgtImg/img/detail/天香小筑3.jpg',
          }
        ],
        detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;天香小筑，位于苏州市人民路，一处中西合璧式花园别墅，分住宅和园林两部分， 2013年被列为全国重点文物保护单位。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;住宅坐北朝南，呈“回”字形格局，有大厅（鸳鸯厅）、主楼及东西两厢楼。各楼间隙以湖石丛竹点缀，地面铺筑花街。各楼有精美砖刻门额。门窗格扇裙板雕刻花卉、古钱、鸟兽等图案及历代文人书法。园在主楼东侧，园中堆土叠石为山，砌石阶小径，山上建有六角凉亭，树木葱茏。山周绕以水池，缀以湖石、花径，池北亭廊曲折蜿蜒。",
        panorama: "https://www.uumon.com/rgtImg/img/detail/天香小筑1.jpg",
        address: "江苏省苏州市姑苏区人民路878号",
        open_time: "09:00-21:00 (1月1日-12月31日 周一-周日)",
        ticket_policy: "免费",
        phone: "",
        traffic: "乘坐地铁4号线在人民桥南站下车，乘坐公交游4路、1路、5路在团结桥北站下车。乘1号线到乐桥站下车，从5号口出来即可。乘8、309等到饮马桥东站下车；或乘1、5、102、308、933、游2路、游4路等到三元坊站下车。",
        detail_img: "https://www.uumon.com/rgtImg/detail/天香小筑.png"
      },
      {
        name: "瑞光塔",
        isHave3D: true,
        bgm: "https://www.uumon.com/rgtImg/bgm/rgt.mp3",
        microShowImg: "https://www.uumon.com/rgtImg/detail/micoshow_rgt.jpg",
        imgs: [{
            url: 'https://www.uumon.com/rgtImg/img/detail/瑞光塔1.jpg',
          },
          {
            url: 'https://www.uumon.com/rgtImg/img/detail/瑞光塔2.jpg',
          }
        ],
        detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;瑞光塔位于苏州古城西南,为七级八面砖木混合结构楼阁式塔。相传始建于三国赤乌年间，现塔据考建于北宋景德元年（1004）至天圣八年（1030），通塔高52.87米，占地面积约432 平米，1956年被列为江苏省文物保护单位，1988年1月国务院公布为全国重点文物保护单位。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;瑞光寺初名普济禅院，据志书记载为三国吴赤乌四年（241年）孙权为迎接西域康居国僧人性康而建。十年，孙权为报母恩又建十三层舍利塔于寺中。而根据在塔内发现的宝幢木函、佛经、石佛、石础、塔砖等文物上的纪年文字，今塔系北宋景德元年（1004年）至天圣八年（ 1030年）所建，当时佛寺名为瑞光禅院。寺院历经毁修，塔曾于南宋淳熙，明 洪武、永乐、天顺、嘉靖崇祯，以及清康熙、乾隆、道光年间修葺。清咸丰十年 （1860年）又遭兵燹，寺毁塔存，同治十一年（1872年）曾加以维修。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自清同治十一年后，瑞光塔失修100多年，残损日甚。为防倾圮，1954年对底加固，长期封闭。1963年对全塔作调查测绘，在塔内发现佛像和铭文砖。1978年4月，在第三层塔心内发现真珠舍利宝幢等一批晚唐、五代和北宋时期的佛教文物。1987年-1990年大修，包括大修塔顶和重安塔刹，修复各层外壁、塔心、壸门、佛龛、腰檐、平座、楼面、扶梯和塔内外木构件，加固塔基，修复基台须弥座、月台，重建副阶等。2010年5月，瑞光塔塔顶及六、七层木结构又发现存在较为严重的安全隐患，2013年底再次启动了维修工程，并于2014年5月底竣工。",
        panorama: "https://www.uumon.com/rgtImg/img/detail/瑞光塔1.jpg",
        address: "江苏省苏州市盘门东大街49号",
        open_time: "08:00-17:00 (1月1日-12月31日 周一-周日)",
        ticket_policy: "需先购买盘门景区门票40元，进入景区登瑞光塔6元。",
        phone: "0512-65260004",
        traffic: "乘70路东线、70路内环在盘门站下车，或乘39路、47路、305路、游2路、游5北线/南线、949路等公交车在盘门景区北站下车。",
        detail_img: "https://www.uumon.com/rgtImg/detail/瑞光塔.png"
      },
      {
        name: "太平天国忠王府",
        isHave3D: false,
        bgm: "",
        microShowImg: "",
        imgs: [{
            url: 'https://www.uumon.com/rgtImg/img/detail/太平天国忠王府1.jpg',
          },
          {
            url: 'https://www.uumon.com/rgtImg/img/detail/太平天国忠王府2.jpg',
          }
        ],
        detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 太平天国忠王府，位于苏州市娄门内东北街，是我国历史上遗存下来最完整的农民起义军王府。1961年被列为全国重点文物保护单位。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;忠王府建筑群雄伟壮丽，错落曲折。其风格属于江南小巧玲珑型，营造了一种“小桥流水、山石花卉”的氛围。正殿、穿廊与后轩平面呈“工”字形，合称为工字殿。在公署建筑中，至今还保存着400余方隽秀的梁枋彩绘，9幅生动的壁画，其苏式彩绘堪称一绝，正殿门窗上有精细的龙凤纹窗格等艺术珍品。",
        panorama: "https://www.uumon.com/rgtImg/img/detail/太平天国忠王府1.jpg",
        address: "江苏省苏州市姑苏区娄门内东北街204号",
        open_time: "09:00-17:00；\n停止入场时间:16:00 (1月1日-12月31日 周二-周日)\n不对外开放 (1月1日-12月31日 周一)\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 遇有重大活动或重要设备设施维修保养时，会根据需要临时闭馆，届时参考官网公告；每年4-10月来景色更好一些。",
        ticket_policy: "免费",
        phone: "0512-67575666",
        traffic: "乘坐游1、2、5线、202路、313路、301、40路、55路、309路、923路、529路、811路可到达。",
        detail_img: "https://www.uumon.com/rgtImg/detail/太平天国忠王府.png"
      },
      {
        name: "虎丘塔",
        isHave3D: false,
        bgm: "",
        microShowImg: "",
        imgs: [{
            url: 'https://www.uumon.com/rgtImg/img/detail/虎丘塔1.jpeg',
          },
          {
            url: 'https://www.uumon.com/rgtImg/img/detail/虎丘塔2.jpeg',
          }
        ],
        detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;虎丘山风景名胜区，位于苏州古城西北角的虎丘风景名胜区，有“吴中第一名胜”、“吴中第一山”的美誉。虎丘塔位于虎丘山山门内，始建于959年，落成于961年，世界第二斜塔，中国第一斜塔，1961年被列为全国重点保护文物保护单位。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;虎丘塔，仿楼阁式砖木套筒结构，七级八面，塔身全砖砌。屋檐为仿木斗拱，飞檐起翘，塔内两层塔壁，仿佛小塔外面又套了一座大塔，其层间的连接以叠涩砌作的砖砌体连接上下和左右。",
        panorama: "https://www.uumon.com/rgtImg/img/detail/虎丘塔1.jpeg",
        open_time: "1.7:30-17:30（5月1日-10月7日）旺季\n2.7:30-17:00（10月8日-4月30日）淡季",
        ticket_policy: "淡季:60人民币；\n旺季:80人民币 \n半票:6周岁（不含6周岁）～18周岁（含18周岁）\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;未成年人凭居民身份证或学生证等有效证件、全日制大学本科及以下学历学生凭学生证等有效证件、全国60周岁及以上老人（除江苏省外）等群体凭有效证件免票\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6周岁（含6周岁）以下或身高在1.4米（含1.4米）以下儿童、中华人民共和国现役军人凭军人证等有效证件、军队离休干部和退休干部凭离退休干部证、革命伤残军人持国务院颁发的伤残军人证、全国70周岁以上的老年人持《高龄证》或居民身份证、全国“劳动模范”凭苏州市园林和绿化管理局和苏州市总工会发放的“游园证”、全国残疾人员凭有效《残疾证》免票入园。",
        phone: "0512-67232305；\n0512-65323488",
        address: "苏州市虎丘区山门内8号",
        traffic: "公共交通：\n南门入口：146、游1、游2路虎丘首末站；\n北门入口：32、快线3号虎丘北门站\n\n自驾线路：\n1.杭州方向苏嘉杭苏高速苏州园区出口下高速，上南环东路高架，南环西路高架，福星路出口下，走桐泾南路，桐泾北路，转虎丘路，可达景区南大门。苏嘉杭高速苏州园区出口下高速，上南环东路高架，南环西路高架，西环路高架，在北环西路出口下高架，走桐泾北路，转虎丘路，可达景区南大门。\n2.上海方向沪宁高速苏州东出口下，转国道312直达虎丘北大门。\n3.南京方向沪宁高速苏州新区出口下，经西环高架转城北西路直达虎丘北",
        detail_img: "https://www.uumon.com/rgtImg/detail/虎丘.png"
      },
      {
        name: "罗汉院双塔及正殿遗址",
        isHave3D: false,
        bgm: "",
        microShowImg: "",
        imgs: [{
            url: 'https://www.uumon.com/rgtImg/img/detail/罗汉院双塔及正殿遗址1.jpg',
          },
          {
            url: 'https://www.uumon.com/rgtImg/img/detail/罗汉院双塔及正殿遗址2.jpg',
          }
        ],
        detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;罗汉院双塔及正殿遗址位于苏州市定慧寺巷。罗汉院始建于公元861年，初名般若院，五代时改称罗汉院。公元982年建砖塔一对，称双塔。1860年寺院毁于战火，仅存双塔及正殿遗址，现为全国重点文物保护单位。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;双塔是东西比肩而立的两座七层八角楼阁砖塔，形制模仿木塔，二层以上施平座、腰檐，腰檐微翘，翼角轻举，逐层收缩。塔顶端立有锥形刹轮。殿址在双塔北，平面呈正方形，面阔三间，现存石柱、石础、石罗汉残像、碑刻等遗物。",
        panorama: "https://www.uumon.com/rgtImg/img/detail/罗汉院双塔及正殿遗址1.jpg",
        open_time: "全天 (1月1日-12月31日 周一-周日)",
        ticket_policy: "免费",
        phone: "0512-65225210",
        address: "江苏省苏州凤凰街定慧寺巷34号",
        traffic: "可乘坐地铁1号线至临顿路站，下车后步行即可到达。",
        detail_img: "https://www.uumon.com/rgtImg/detail/罗汉院双塔及正殿遗址.png"
      },
      {
        name: "东吴大学（旧址）",
        isHave3D: false,
        bgm: "",
        microShowImg: "",
        imgs: [{
            url: 'https://www.uumon.com/rgtImg/img/detail/东吴大学1.jpg',
          },
          {
            url: 'https://www.uumon.com/rgtImg/img/detail/东吴大学2.jpeg',
          }
        ],
        detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;东吴大学，现苏州大学的前身。同治十年，美国基督教监理公会在苏州设立存养书院，光绪二十七年，建立东吴大学堂，辛亥革命后改称东吴大学。东吴大学旧址2013年被列为全国重点文保单位。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;东吴大学总平面，呈纵长方形，以钟楼为中心，钟楼又称“林堂”，建于光绪二十九年。主要建筑分布在钟楼前面草坪操场的北、西、东三面。现存14组欧式建筑，建筑各具风格，有欧洲古典式，有中世纪城堡式，有美国教堂式，至今保持原貌。",
        panorama: "https://www.uumon.com/rgtImg/img/detail/东吴大学1.jpg",
        address: "江苏省苏州市沧浪区十梓街1号",
        open_time: "周六、周日8:00-17:00；周一-周五不对外开放",
        ticket_policy: "免费",
        phone: "0512-65113180\n0512-67507948\n0512-67504739",
        traffic: "可乘坐地铁1号线至相门站，下车后步行即可到达。",
        detail_img: "https://www.uumon.com/rgtImg/detail/东吴大学（旧址）.png"
      },
      {
        name: "俞樾旧居（曲园）",
        isHave3D: false,
        bgm: "",
        microShowImg: "",
        imgs: [{
            url: 'https://www.uumon.com/rgtImg/img/detail/俞樾旧居1.jpg',
          },
          {
            url: 'https://www.uumon.com/rgtImg/img/detail/俞樾旧居2.jpg',
          },
          {
            url: 'https://www.uumon.com/rgtImg/img/detail/俞樾旧居3.jpg',
          }
        ],
        detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;俞樾旧居，又名曲园，位于苏州市人民路马医科。俞樾于1874年购得大学士潘世恩故宅废地，购屋30余楹，作为起居、著述之处，2006年被列为全国重点文物保护单位。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;俞樾旧居，半包围格局。主厅为乐知堂，大木结构，采用扁作抬梁式的建筑；乐知堂西为春在堂，堂前缀湖石，植梧桐；春在堂北为认春轩，轩北杂植花木，叠湖石小山为屏，中有山洞蜿蜒。穿山洞右折，东北隅为昔日琴室艮宧，循廊西行，为书房达斋。继续南行，有小亭“曲水”和小池“曲池”，池东假山上有“回峰阁”与亭相对。",
        panorama: "https://www.uumon.com/rgtImg/img/detail/俞樾旧居1.jpg",
        address: "江苏省苏州市平江区人民路马医科43号（近马医科菜场）",
        open_time: "09:00-16:30 (1月1日-12月31日 周一-周日)",
        ticket_policy: "免费",
        phone: "0512-65221406",
        traffic: "1.乘地铁1号线到乐桥站下车，8号口出，步行10分钟左右到达。\n2.乘1路、8路、38路、101路、游4路/长线等公交车到乐桥北站下车。",
        detail_img: "https://www.uumon.com/rgtImg/detail/俞樾旧居（曲园）.png"
      },
      {
        name: "开元寺无梁殿",
        isHave3D: false,
        bgm: "",
        microShowImg: "",
        imgs: [{
            url: 'https://www.uumon.com/rgtImg/img/detail/开元寺无梁殿1.jpeg',
          },
          {
            url: 'https://www.uumon.com/rgtImg/img/detail/开元寺无梁殿2.jpg',
          }
        ],
        detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开元寺无梁殿，位于苏州市盘门内东大街，建于1618年，以纯为磨砖嵌缝纵横拱券结构，不用梁柱。2013年被列为全国重点文物保护单位。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无梁殿，坐北朝南，两层楼阁式，面阔七间。歇山顶及腰檐敷绿间黄琉璃筒瓦，与清水砖外墙面相映成趣。正面上下各有半圆砖倚柱6根，下置雕花须弥座，转角用垂莲柱。正面正中开拱门三个，左右各置拱形窗。柱间有刻南无阿弥陀佛的华版及大小枋子。明间檐下是砖制斜拱，上泵副檐。绕有雕刻的平座栏杆，图案十分典雅。",
        panorama: "https://www.uumon.com/rgtImg/img/detail/开元寺无梁殿1.jpeg",
        address: "江苏省苏州市盘门内东大街11号。",
        open_time: "",
        ticket_policy: "免费",
        phone: "",
        traffic: "[途经公交]47路   932路   318路   305路   935路   949路",
        detail_img: "https://www.uumon.com/rgtImg/detail/开元寺无梁殿.png"
      },
      {
        name: "文庙大成殿",
        isHave3D: false,
        bgm: "",
        microShowImg: "",
        imgs: [{
            url: 'https://www.uumon.com/rgtImg/img/detail/文庙大成殿1.jpg',
          },
          {
            url: 'https://www.uumon.com/rgtImg/img/detail/文庙大成殿2.jpg',
          }
        ],
        detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;苏州文庙，位于苏州市人民路，有江南学府之冠的赞誉。文庙大成殿是苏州文庙的主体建筑，始建于1141年，明朝中期重修，现为全国重点文物保护单位。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;文庙大成殿，面宽七间，进深六间，共有五十根楠木柱支撑，可称为天下奇观。大成殿的梁架结构，斗拱，鸱尾，均有宋代建筑风格。大成殿重檐多宇，崇台列阶，古朴庄重，气势轩昂，其殿堂的建筑规模宏大，是现存最完整的古建筑之一。",
        panorama: "https://www.uumon.com/rgtImg/img/detail/文庙大成殿1.jpg",
        address: "江苏省苏州市姑苏区人民路635号",
        open_time: "08:30-16:00 (1月1日-12月31日 周一-周日)",
        ticket_policy: "免费",
        phone: "0512-65197203",
        traffic: "可乘坐地铁4号线至三元坊站，下车后步行即可到达。",
        detail_img: "https://www.uumon.com/rgtImg/detail/文庙大成殿.png"
      },
      {
        name: "全晋会馆",
        isHave3D: false,
        bgm: "",
        microShowImg: "",
        imgs: [{
            url: 'https://www.uumon.com/rgtImg/img/detail/全晋会馆1.jpg',
          },
          {
            url: 'https://www.uumon.com/rgtImg/img/detail/全晋会馆2.jpg',
          }
        ],
        detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全晋会馆，又名苏州戏曲博物馆，位于苏州市旧城平江路张家巷。始建于1765年，1860年会馆毁于战火，1879年易地重建，1986年修复后作为苏州戏曲博物馆的载体， 2006年被公布为全国重点文物保护单位。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重建后的会馆占地6000平方米，沿街门厅三间，门前八字墙，门两侧上方各有一座鼓吹楼，门内戏楼由戏台及东西厢看楼组成。戏台为歇山顶，檐下上额枋雕饰戏文、龙凤、花卉，斗拱木雕贴金，光彩夺目。正面悬木雕花篮、狮子各一对。",
        panorama: "https://www.uumon.com/rgtImg/img/detail/全晋会馆1.jpg",
        address: "江苏省苏州市姑苏区平江街道中张家巷14号",
        open_time: "08:30-16:30 (1月1日-12月31日 周一-周日)",
        ticket_policy: "20/人",
        phone: "0512-65120473",
        traffic: "可乘坐地铁1号线至相门站，下车后步行即可到达。",
        detail_img: "https://www.uumon.com/rgtImg/detail/全晋会馆.png"
      },
      {
        name: "甲辰巷砖塔",
        isHave3D: false,
        bgm: "",
        microShowImg: "",
        imgs: [{
            url: 'https://www.uumon.com/rgtImg/img/detail/甲辰巷砖塔1.jpeg',
          },
          {
            url: 'https://www.uumon.com/rgtImg/img/detail/甲辰巷砖塔2.jpeg',
          }
        ],
        detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;甲辰巷砖塔，位于苏州相门内干将路甲辰巷市桥头。砖塔历史悠久，形态古朴，是凝聚了古代汉族劳动人民智慧的结晶。2013年被列为全国重点文物保护单位。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;砖塔为五级八面楼阁式砖结构仿木塔，高6.82米，基座每边底宽0.51米，对径1.2米。腰檐、平座以菱角牙子和叠涩砖相间挑出，并有转角铺作及阑额、柱头枋自檐下壁面隐出。八面间隔辟壶门和隐出直棂窗，各层门窗方位交错设置，内部方室逐层转换45度。全塔以清水砖砌成，不施粉彩，朴实无华。",
        panorama: "https://www.uumon.com/rgtImg/img/detail/甲辰巷砖塔1.jpeg",
        address: "江苏省苏州沧浪区干将东路甲辰巷市桥头",
        open_time: "全天 (1月1日-12月31日 周一-周日)",
        ticket_policy: "免费",
        phone: "",
        traffic: "可乘坐地铁1号线至相门站，下车后步行即可到达。",
        detail_img: "https://www.uumon.com/rgtImg/detail/甲辰巷砖塔.png"
      },
      {
        name: "报恩寺塔（北寺塔）",
        isHave3D: false,
        bgm: "",
        microShowImg: "",
        imgs: [{
            url: 'https://www.uumon.com/rgtImg/img/detail/报恩寺塔1.jpg',

          },
          {
            url: 'https://www.uumon.com/rgtImg/img/detail/报恩寺塔2.jpg',

          }
        ],
        detail: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;报恩寺塔，俗称北寺塔，位于苏州市姑苏区人民路，始建于南朝梁时，重建于南宋绍兴年间，2006年被列为全国重点文物保护单位。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;报恩寺塔，九级八面砖身木檐混合结构；塔内为双层套筒，八角塔心内备层都有方形塔心室，木梯设在双层套筒之间的回廊中；各层有平座栏杆，底层由副阶，副阶屋檐与第一层塔身屋檐一坡而下，未设重檐。报恩寺塔整座宝塔气宇轩昂，雄伟壮观。尺度巨大，比例不壮硕，翘起甚高的屋角、瘦长的塔刹，在宏伟中又蕴含着秀逸的风姿。",
        panorama: "https://www.uumon.com/rgtImg/img/detail/报恩寺塔1.jpg",
        address: "江苏省苏州市姑苏区人民路1918号",
        open_time: "07:45-17:30 (1月1日-12月31日 周一-周日)",
        ticket_policy: "免费",
        phone: "",
        traffic: "可乘1路、5路、8路、101路、313路、602路、游4路等公交车到北寺塔站下车。",
        detail_img: "https://www.uumon.com/rgtImg/detail/报恩寺塔（北寺塔）.png"
      },
    ]
  },
  onLoad: function (options) {
    let that = this;
    that.chooseIndex = options.chooseIndex
    let pageConfig = this.data.pageConfig[that.chooseIndex];
    this.setData({
      imgs: pageConfig.imgs,
      detail: pageConfig.detail,
      panorama: pageConfig.panorama,
      open_time: pageConfig.open_time,
      ticket_policy: pageConfig.ticket_policy,
      phone: pageConfig.phone,
      address: pageConfig.address,
      traffic: pageConfig.traffic,
      detail_img: pageConfig.detail_img,
      isHave3D: pageConfig.isHave3D,
      microShowImg: pageConfig.microShowImg
    })
    wx.setNavigationBarTitle({
      title: pageConfig.name
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
        // wx.createSelectorQuery().select('#open-time').boundingClientRect(function (openTime) {
        //   wx.createSelectorQuery().select('#ticket').boundingClientRect(function (ticket) {
        //     wx.createSelectorQuery().select('#phone').boundingClientRect(function (phone) {
        //       that.setData({
        //         second_top: ticket.top - openTime.top - 5 + "px",
        //         third_top: phone.top - openTime.top - 5 + "px",
        //         solid_height: phone.top - openTime.top + "px",
        //       })
        //     }).exec();
        //   }).exec();
        // }).exec();

        wx.createSelectorQuery().select("#m1").boundingClientRect(function (m1) {
          that.setData({
            m1_top: m1.top
          })
        }).exec();
        wx.createSelectorQuery().select("#m2").boundingClientRect(function (m2) {
          that.setData({
            m2_top: m2.top
          })
        }).exec();
        wx.createSelectorQuery().select("#m3").boundingClientRect(function (m3) {
          that.setData({
            m3_top: m3.top
          })
        }).exec();
        wx.createSelectorQuery().select("#m4").boundingClientRect(function (m4) {
          that.setData({
            m4_top: m4.top
          })
        }).exec();
        wx.createSelectorQuery().select("#m5").boundingClientRect(function (m5) {
          that.setData({
            m5_top: m5.top
          })
        }).exec();

      }
    });
    this.innerAudioContext = wx.createInnerAudioContext();

    this.innerAudioContext.onPlay(() => {
      this.updateTime();
    });
    wx.downloadFile({
      url: pageConfig.bgm,
      success: (res) => {
        this.innerAudioContext.src = res.tempFilePath;
        console.log("onPlay");
        this.innerAudioContext.autoplay = true;
      }
    })


    this.innerAudioContext.onError(res => {
      console.log(res.errMsg);
      console.log(res.errCode);
    });

  },
  onUnload() {
    this.innerAudioContext.destroy()
  },
  onShow() {
    this.innerAudioContext.play();
  },
  goToPanorama() {
    this.innerAudioContext.pause();
    wx.navigateTo({
      url: '../panorama/panorama?chooseIndex=' + this.chooseIndex
    })
  },
  goToMiniProgram() {
    this.innerAudioContext.pause();
    let chooseIndex = this.chooseIndex;
    console.log(chooseIndex)
    switch (chooseIndex) {
      case "0":
        this.appId = ""
        break;
      case "1":
        this.appId = "wx58bf9e4546ab7ba5"
        break;
      case "2":
        this.appId = ""
        break;
      case "3":
        this.appId = ""
        break;
      case "4":
        this.appId = ""
        break;
      case "5":
        this.appId = ""
        break;
      case "6":
        this.appId = ""
        break;
      case "7":
        this.appId = ""
        break;
      case "8":
        this.appId = ""
        break;
      case "9":
        this.appId = ""
        break;
      case "10":
        this.appId = ""
        break;
      case "11":
        this.appId = ""
        break;
      default:
        this.appId = ""
        break;
    }
    wx.navigateToMiniProgram({
      appId: this.appId,
      path: 'pages/index/index',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'develop',
      success(res) {
        // 打开成功
      }
    })
  },
  audioPlay() {
    this.data.isPlay ? this.innerAudioContext.pause() : this.innerAudioContext.play();
    this.setData({
      isPlay: !this.data.isPlay
    })
  },
  updateTime(currentTime) {
    this.innerAudioContext.offSeeked();
    let _currentTime = currentTime || this.innerAudioContext.currentTime;
    this.setData({
      circleLeft: _currentTime / this.innerAudioContext.duration * 560,
      _setTime: setTimeout(this.updateTime, 1000)
    })
  },
  dragStart(e) {
    this.startPageX = e.touches[0].clientX;
    this.innerAudioContext.offPlay();
    clearTimeout(this.data._setTime);
  },
  dragMove(e) {
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
    }
  },
  dragEnd(e) {
    let newPosition = this.data.circleLeft / 560 * this.innerAudioContext.duration;

    this.innerAudioContext.onSeeked(() => {
      console.log("onSeeked");
      this.updateTime(newPosition);
    })
    this.innerAudioContext.seek(newPosition);

    if (this.innerAudioContext.paused) {
      this.innerAudioContext.play();
      this.playState = true;
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
    this.setData({
      currentSwiper: e.detail.current,
    })
  },
  // 点击静音按钮
  changeVoice() {
    this.setData({
      isMute: !this.data.isMute
    })
    if (this.data.isMute) {
      this.innerAudioContext.volume = 0
    } else {
      this.innerAudioContext.volume = 1
    }
  },
  // 滑动内容改变导航栏选中的词条
  scrollContent(e) {
    let scrollTop = e.detail.scrollTop + this.data.m1_top;
    switch (true) {
      case scrollTop >= this.data.m1_top && scrollTop < this.data.m2_top:
        this.setData({
          but_1: true,
          but_2: false,
          but_3: false,
          but_4: false,
          but_5: false,
        })
        break;
      case scrollTop >= this.data.m2_top && scrollTop < this.data.m3_top:
        this.setData({
          but_1: false,
          but_2: true,
          but_3: false,
          but_4: false,
          but_5: false,
        })
        break;
      case scrollTop >= this.data.m3_top && scrollTop < this.data.m4_top:
        this.setData({
          but_1: false,
          but_2: false,
          but_3: true,
          but_4: false,
          but_5: false,
        })
        break;
      case scrollTop >= this.data.m4_top && scrollTop < this.data.m5_top:
        this.setData({
          but_1: false,
          but_2: false,
          but_3: false,
          but_4: true,
          but_5: false,
        })
        break;
      case scrollTop >= this.data.m5_top:
        this.setData({
          but_1: false,
          but_2: false,
          but_3: false,
          but_4: false,
          but_5: true,
        })
        break;
      default:
        break;
    }


  }
})
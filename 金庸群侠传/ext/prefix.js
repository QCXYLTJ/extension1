'use strict';
window.jyimport(function (lib, game, ui, get, ai, _status) {
  lib.arenaReady.push(function () {
    var jiexian = {
      yttl_zhangwuji: '界张无忌',
      qtpz_aobai: '界鳌拜',
      sdyx_qiuchuji: "界丘处机",
      sdyx_duanzhixin: "界段智兴",
      sdyx_fengheng: "界冯蘅",
      yttl_songqingshu: "界宋青书",
      yttl_yinsusu: "界殷素素",
      sdyx_wangchongyang: "界王重阳",
      sdyx_yangkang: "界杨康",
      tlbb_xiaoyuanshan: "界萧远山",
      tlbb_murongbo: "界慕容博",
      qtpz_yuanchengzhi: "界袁承志",
      qtpz_wenqingqing: "界温青青",
      tlbb_qinhongmian: "界秦红棉",
      tlbb_tianshantonglao: "界天山童姥",
      tlbb_xuanciyeerniang: "界玄慈叶二娘",
      yttl_xinran: "界辛然",
      tlbb_xuzhuzi: "界虚竹",
      qtpz_shipotian: "界石破天",
      ywhy_suqier: "界苏乞儿",
      tlbb_duanyu: "界段誉",
      sdxl_gongsunzhi: "界公孙止",
      xajh_yucanghai: "界余沧海",
      tlbb_baishijing: "界白世镜",
      sdyx_zhebie: "界哲别",
      sdyx_tuolei: "界拖雷",
      yttl_zhouzhiruo: "界周芷若",
      sdyx_huazheng: "界华筝",
      xajh_ludayou: "界陆大有",
      xajh_moda: "界莫大",
      tlbb_zhaixingzi: "界摘星子",
      xajh_yuelingsan: "界岳灵珊",
      qtpz_diyun: "界狄云",
      sdyx_wangchongyang: "界王重阳",
      ywhy_lixunhuan: "界李寻欢",
      sdyx_hongqigong: "界洪七公",
      ldj_weixiaobaojianning: "界韦小宝建宁",
      yttl_yangxiao: "界杨逍",
      yttl_jixiaofu: "界纪晓芙",
      sdxl_qiuqianchi: "界裘千尺",
      sdxl_yangguo: "界杨过",
      xajh_liangfa: "界梁发",
      qtpz_wentailai: "界文泰来",
      sdyx_guojing: "界郭靖",
      yttl_huqingniu: "界胡青牛",
      qtpz_chenglingsu: "界程灵素",
      xajh_jiangnansiyou: "界江南四友",
      sdyx_meichaofeng: "界梅超风",
      sdyx_munianci: "界穆念慈",
      xajh_renwoxing: "界任我行",
      sdyx_zhoubotong: "界周伯通",
      sdyx_qiuqianren: "界裘千仞",
      ywhy_qiumoyan: "界邱莫言",
      qtpz_xieyanke: "界谢烟客",
      xajh_zuolengchan: "界左冷禅",
      yttl_luhe: "界玄冥二老",
      qtpz_dindian: "界丁典",
      qtpz_wangchengen: "界王承恩",
      qtpz_wuzixu: "界伍子胥",
      qtpz_wuchendashi: "界无嗔大师",
      yttl_yinliting: "界殷梨亭",
      yttl_daiqisi: "界黛绮丝",
      yttl_jinhuapopo: "界金花婆婆",
      yttl_zhangcuishan: "界张翠山",
      xajh_dongfangbubai: "界东方不败",
      yttl_xiaozhao: "界小昭",
      tlbb_yunzhonghe: "界云中鹤",
      tlbb_youtanzhi: "界游坦之",
      yttl_yinyewang: "界殷野王",
      yttl_changyuchun: "界常遇春"
    };
    for (var i in jiexian) {
      if (lib.translate[i]) {
        lib.translate[i] = jiexian[i];
        lib.translate[`${i}_prefix`] = "界";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    var jysp = {
      //xajh_xindongfang: 'SP东方不败',
      ywhy_zhanzhao: 'SP展昭',
      "ywhy_spzhanzhao": "SP展昭",
      yttl_spzhouzhiruo: 'SP周芷若',
      sdyx_spguojing: 'SP郭靖',
      sdyx_sphuangyaoshi: 'SP黄药师',
      sdyx_sp_huangrong: 'SP黄蓉',
      tlbb_spduanyu: 'SP段誉',
      tlbb_spxuzhu: 'SP虚竹',
      tlbb_sptianshantonglao: 'SP天山童姥',
      tlbb_spazi: 'SP阿紫',
      yttl_spyangdingtian: 'SP阳顶天',
      tlbb_spwangyuyan: 'SP王语嫣',
      //sdxl_guoxiang: 'SP郭襄',
      tlbb_spjiumozhi: 'SP鸠摩智',
      yttl_spxuanmingerlao: 'SP玄冥二老',
      sdyx_spyinggu: 'SP瑛姑',
      yttl_spsongyuanqiao: 'SP宋远桥',
      sdxl_spyangguo: 'SP杨过',
      xajh_sp_tianboguang: 'SP田伯光',
      sdyx_spmeichaofeng: 'SP梅超风',
      xajh_spdongfangbubai: 'SP东方不败',
      "yttl_sp_weiyixiao": 'SP韦一笑',
      "sdxl_spguoxiang": "SP郭襄",
      "sdxl_sp_jinlunfawang": "SP金轮法王",
      "sdyx_sp_kezhene": "SP柯镇恶"
    };
    for (var i in jysp) {
      if (lib.translate[i]) {
        lib.translate[i] = jysp[i];
        lib.translate[`${i}_prefix`] = "SP";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    /*
    var jygm = {
        ywhy_baisuzheng: "影白素贞",
        ywhy_qingshe: "影青蛇",
        ywhy_baiyuchuan: '影白玉川',
        ywhy_liulangyue: "影柳朗月",
        ywhy_boya: "影博雅",
        ywhy_qingmin: "影晴明",
        ywhy_jiushu: "影九叔",
        ywhy_yuhuatian: "影雨化田",
        ywhy_abao: "影阿宝",
        ywhy_baozupo: "影包租婆",
        ywhy_xiaowei: "影小唯",
        ywhy_zhizunbao: "影至尊宝",
        ywhy_wukong: '影悟空',
        ywhy_dongtianbao: "影董天宝",
        ywhy_nalanyuanshu: "影纳兰元述",
        ywhy_chunsanshiniang: "影春三十娘",
        ywhy_xiaolong: "影小龙",
    };
    for(var i in jygm){
        if(lib.translate[i]){
            lib.translate[i]=jygm[i];
            lib.translate[`${i}_prefix`]="影";
        }else{
            alert("prefix:"+i+'不存在');
        };
    };
    lib.namePrefix.set('影',{
        //color: '#ed241d',
        //nature: 'soilmm',
        getSpan:() => {
            const span = document.createElement('span'), style = span.style;
            style.writingMode = style.webkitWritingMode = 'horizontal-tb';
            style.fontFamily = 'MotoyaLMaru';
            style.transform = 'scaleY(0.85)';
            span.textContent = '影';
            return span.outerHTML;
        },
    });  */
    var jyying = {
      ywhy_sudaji: "影苏妲己",
      ywhy_baisuzheng: "影白素贞",
      ywhy_qingshe: "影青蛇",
      ywhy_baiyuchuan: '影白玉川',
      ywhy_liulangyue: "影柳朗月",
      ywhy_boya: "影博雅",
      ywhy_qingmin: "影晴明",
      ywhy_jiushu: "影九叔",
      ywhy_yuhuatian: "影雨化田",
      ywhy_abao: "影阿宝",
      ywhy_baozupo: "影包租婆",
      ywhy_xiaowei: "影小唯",
      ywhy_zhizunbao: "影至尊宝",
      ywhy_wukong: '影悟空',
      ywhy_dongtianbao: "影董天宝",
      ywhy_nalanyuanshu: "影纳兰元述",
      ywhy_chunsanshiniang: "影春三十娘",
      ywhy_xiaolong: "影小龙",
      ywhy_zixia: "影紫霞"
    };
    for (var i in jyying) {
      if (lib.translate[i]) {
        lib.translate[i] = jyying[i];
        lib.translate[`${i}_prefix`] = "影";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    lib.namePrefix.set('影', {
      color: '#f087c0',
      nature: '#680e3f'
    });
    var jyyou = {
      ywhy_xiaoxiami: "游小虾米"
    };
    for (var i in jyyou) {
      if (lib.translate[i]) {
        lib.translate[i] = jyyou[i];
        lib.translate[`${i}_prefix`] = "游";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    lib.namePrefix.set('游', {
      color: '#2693cc',
      nature: '#043538'
    });
    var jyxie = {
      xajh_xie_taoguliuxian: "邪桃谷六仙",
      xajh_xieyuebuqun: "邪岳不群",
      tlbb_xie_liqingluo: "邪李青萝",
      tlbb_xie_yeerniang: "邪叶二娘",
      yttl_xie_daiqisi: "邪黛绮丝",
      yttl_xie_yintianzheng: "邪殷天正",
      sdxl_xie_limochou: "邪李莫愁",
      xajh_xie_zuolengchan: "邪左冷禅",
      yttl_xie_weiyixiao: "邪韦一笑",
      yttl_xie_xiexun: "邪谢逊",
      qtpz_xie_hetieshou: "邪何铁手",
      sdyx_xie_ouyangfeng: '邪欧阳锋',
      sdyx_xie_yangkang: '邪杨康',
      sdyx_xie_meiruohua: "邪梅若华",
      sdyx_xie_meichaofeng: "邪梅超风",
      yttl_xie_zhaomin: "邪赵敏",
      tlbb_xie_murongfu: "邪慕容复",
      tlbb_xie_dingchunqiu: "邪丁春秋",
      tlbb_duanyanqing_new: "邪段延庆",
      yttl_xie_zhouzhiruo: "邪周芷若",
      sdxl_xie_gongsunzhi: "邪公孙止",
      xajh_xie_renwoxing: "邪任我行",
      xajh_xieyuebuqun: "邪岳不群",
      tlbb_xie_kangmin: "邪康敏",
      tlbb_xie_kangmin_jing: "邪康敏·镜",
      qtpz_xie_xuedaolaozu: "邪血刀老祖",
      yttl_xie_zhuer: "邪蛛儿",
      xajh_xie_dongfangbubai: "邪东方不败"
    };
    for (var i in jyxie) {
      if (lib.translate[i]) {
        lib.translate[i] = jyxie[i];
        lib.translate[`${i}_prefix`] = "邪";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    lib.namePrefix.set('邪', {
      color: '#52bb36',
      nature: '#firemm'
    });
    var jyjue = {
      qtpz_jue_diyun: "绝狄云",
      ldj_jue_weixiaobao: "绝韦小宝",
      sdxl_jue_duguqiubai: "绝独孤求败",
      sdxl_guojinghuangrong: "绝郭靖黄蓉",
      sdxl_juezhoubotong: "绝周伯通",
      xajh_wumingtaijian: "绝无名太监",
      yttl_doujiushenseng: "绝斗酒神僧",
      yttl_juezhangsanfeng: "绝张三丰",
      sdyx_jue_guojing: "绝郭靖",
      sdyx_jue_huangshang: "绝黄裳",
      sdyx_juehuangyaoshi: "绝黄药师",
      sdyx_yuefei: "绝岳飞",
      tlbb_jue_damo: "绝达摩",
      tlbb_juexiaofeng: "绝萧峰",
      tlbb_muronglongcheng: "绝慕容龙城",
      tlbb_saodiseng: "绝扫地僧",
      ywhy_jinyong: "绝金庸",
      yttl_dujie: "绝渡劫",
      sdyx_jueouyangfeng: "绝欧阳锋",
      tlbb_xiaoyaozi: "绝逍遥子",
      yttl_shaolinsandu: "绝渡厄渡劫渡难",
      sdyx_jue_hongqigong: "绝洪七公",
      sdxl_jue_yanggaizhi: "绝杨改之",
      yttl_jue_zhangwuji: "绝张无忌",
      qtpz_jue_yuanchonghuan: "绝袁崇焕",
      qtpz_jue_shipotian: "绝石破天",
      sdxl_jue_wangchongyang: "绝王重阳",
      tlbb_jue_xuzhu: "绝虚竹",
      tlbb_jue_tianshantonglao: "绝天山童姥"
    };
    for (var i in jyjue) {
      if (lib.translate[i]) {
        lib.translate[i] = jyjue[i];
        lib.translate[`${i}_prefix`] = "绝";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    lib.namePrefix.set('绝', {
      color: '#ffa508',
      nature: 'firemm'
      //nature: 'soilmm',
    });
    var jyyin = {
      yttl_yin_fanyao: "隐范遥"
    };
    for (var i in jyyin) {
      if (lib.translate[i]) {
        lib.translate[i] = jyyin[i];
        lib.translate[`${i}_prefix`] = "隐";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    lib.namePrefix.set('隐', {
      color: '#4040cb',
      nature: '78c2f5'
    });
    //以下两个前缀的 导致武将名字太长  跳过加载
    var config = lib.config.extension_金庸群侠传_prefix;
    if (!config) return;
    return;
    var jylu = { //鹿鼎记
      ldj_zhengkeshuang: "鹿郑克塽",
      ldj_weishihougong: "鹿韦氏后宫",
      ldj_sufeiya: "鹿苏菲亚",
      ldj_ake: "鹿阿珂",
      ldj_weichunhua: "鹿韦春花",
      ldj_pangshoutoutuo: "鹿胖瘦头陀",
      ldj_mujianpin: "鹿沐剑屏",
      ldj_fangyi: "鹿方怡",
      qtpz_weixiaobao: "鹿韦小宝",
      qtpz_weihutou: "鹿韦虎头",
      qtpz_xuanye: "鹿玄烨",
      qtpz_chenjinnan: "鹿陈近南",
      qtpz_jianninggongzhu: "鹿建宁公主",
      qtpz_fengjizhong: "鹿风际中",
      qtpz_haidafu: "鹿海大富",
      qtpz_zengrou: "鹿曾柔",
      qtpz_hongantong: "鹿洪安通",
      qtpz_maodongzhu: "鹿毛东珠",
      qtpz_shuanger: "鹿双儿",
      qtpz_sangjielama: "鹿桑结喇嘛",
      qtpz_wusangui: "鹿吴三桂",
      ldj_wuyingxiong: "鹿吴应熊"
    };
    for (var i in jylu) {
      if (lib.translate[i]) {
        lib.translate[i] = jylu[i];
        lib.translate[`${i}_prefix`] = "鹿";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    lib.namePrefix.set('鹿', {
      color: '#ed241d',
      nature: 'soilmm'
    });
    var jyxiao = { //笑傲江湖
      xajh_xiangwentian: "笑向问天",
      xajh_yuehou: "笑乐厚",
      xajh_linzhennan: "笑林震南",
      xajh_qufeiyan: "笑曲非烟",
      xajh_dingxianshitai: "笑定闲师太",
      xajh_fengqingyang: "笑风清扬",
      xajh_ningzhongze: "笑宁中则",
      xajh_feibin: "笑费彬",
      xajh_tianmendaozhang: "笑天门道长",
      xajh_linghuchongrenyinyin: "笑令狐冲任盈盈",
      xajh_yanglianting: "笑杨莲亭",
      xajh_yuebuqun: "笑岳不群",
      xajh_linghuchong: "笑令狐冲",
      xajh_laodenuo: "笑劳德诺",
      xajh_linpingzhi: "笑林平之",
      xajh_zhuqianqiu: "笑祖千秋",
      xajh_tianboguang: "笑田伯光",
      xajh_renyingying: "笑任盈盈",
      xajh_pingyizhi: "笑平一指",
      xajh_yilin: "笑仪琳",
      xajh_dongfangbubaiyanglianting: "笑东方不败杨莲亭",
      xajh_lanfenghuang: "笑蓝凤凰",
      xajh_taoguliuxian: "笑桃谷六仙",
      xajh_liuzhengfengquyang: "笑刘正风曲洋",
      xajh_shangguanyun: "笑上官云"
    };
    for (var i in jyxiao) {
      if (lib.translate[i]) {
        lib.translate[i] = jyxiao[i];
        lib.translate[`${i}_prefix`] = "笑";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    lib.namePrefix.set('笑', {
      color: '#c319c3',
      nature: 'jy_xiemm'
    });
    var jyyi = { //倚天屠龙记
      yttl_shuobude: "倚说不得",
      yttl_kongjian: "倚空见",
      yttl_ruyangwang: "倚汝阳王",
      yttl_yangdingtian: "倚阳顶天",
      yttl_zhangwujizhaomin: "倚张无忌赵敏",
      yttl_dudajin: "倚都大锦",
      yttl_dingminjun: "倚丁敏君",
      yttl_yulianzhou: "倚俞莲舟",
      yttl_zhangsongxi: "倚张松溪",
      yttl_huangshannv: "倚黄衫女",
      yttl_zhoudian: "倚周颠",
      yttl_hanliner: "倚韩林儿",
      yttl_moshenggu: "倚莫声谷",
      yttl_zhangsanfeng: "倚张三丰",
      yttl_changbaisanqin: "倚长白三禽",
      yttl_fanyao: "倚范遥",
      yttl_zhuyuanzhang: "倚朱元璋",
      yttl_yinli: "倚殷离",
      yttl_changbaoshu: "倚常胜宝树王",
      yttl_changyuchun: "倚常遇春",
      yttl_miejue: "倚灭绝师太",
      yttl_hanqianye: "倚韩千叶",
      yttl_chenyouliang: "倚陈友谅",
      yttl_yangbuhui: "倚杨不悔",
      yttl_xiexun: "倚谢逊",
      yttl_weiyixiao: "倚韦一笑傲",
      yttl_jueyuandashi: "倚觉远大师",
      //yttl_guoxiang: "倚天郭襄",
      yttl_zhaomin: "倚赵敏",
      yttl_yuanzhen: "倚圆真",
      yttl_yudaiyan: "倚俞岱岩",
      yttl_songyuanqiao: "倚宋远桥",
      yttl_yintianzheng: "倚殷天正",
      yttl_wujincao: "倚吴劲草",
      yttl_zhuchangling: "倚朱长龄",
      yttl_zhujiuzhenwuqingying: "倚朱九真武青婴"
    };
    for (var i in jyyi) {
      if (lib.translate[i]) {
        lib.translate[i] = jyyi[i];
        lib.translate[`${i}_prefix`] = "天";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    lib.namePrefix.set('天', {
      color: '#ee9ac7',
      nature: 'firemm'
    });
    var jyshen = { //神雕侠侣
      sdxl_huodu: "神霍都",
      sdxl_gongsunlve: "神公孙绿萼",
      sdxl_wudunruwuxiuwen: "神武敦儒武修文",
      sdxl_daerba: "神达尔巴",
      sdxl_luzhanyuan: "神陆展元",
      sdxl_zhenzhibing: "神甄志丙",
      sdxl_fengmofeng: "神冯默风",
      sdxl_chengying: "神程英",
      sdxl_hubilie: "神忽必烈",
      sdxl_yangguoxiaolongnv: "神杨过小龙女",
      sdxl_xiaolongnv: "神小龙女",
      sdxl_jinlunfawang: "神金轮法王",
      sdxl_mengge: "神蒙哥",
      sdxl_limochou: "神李莫愁",
      sdxl_zhaozhijin: "神赵志敬",
      sdxl_guofuX: "神郭芙",
      sdxl_guopolu: "神郭破虏"
    };
    for (var i in jyshen) {
      if (lib.translate[i]) {
        lib.translate[i] = jyshen[i];
        lib.translate[`${i}_prefix`] = "神";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    lib.namePrefix.set('神', {
      color: '#ee9ac7',
      nature: 'firemm'
    });
    var jyshe = { //射雕英雄
      sdyx_qulingfeng: "射曲灵风",
      sdyx_luchengfeng: "射陆乘风",
      sdyx_hanxiaoying: "射韩小莹",
      sdyx_zhangasheng: "射张阿生",
      sdyx_shangguanjiannan: "射上官剑南",
      sdyx_wanyankang: "射完颜康",
      sdyx_nanxiren: "射南希仁",
      sdyx_hanbaoju: "射韩宝驹",
      sdyx_quanjinfa: "射全金发",
      sdyx_shatongtianhoutonghai: "射沙通天侯通海",
      sdyx_chenxuanfeng: "射陈玄风",
      sdyx_liping: "射李萍",
      sdyx_baoxiruo: "射包惜弱",
      sdyx_guoxiaotian: "射郭啸天",
      sdyx_zhucong: "射朱聪",
      sdyx_huangyaoshi: "射黄药师",
      sdyx_ouyangfeng: "射欧阳锋",
      sdyx_huangrong: "射黄蓉",
      sdyx_ouyangke: "射欧阳克",
      sdyx_yinggu: "射瑛姑",
      sdyx_kezhene: "射阿镇恶",
      sdyx_duantiande: "射段天德",
      sdyx_tiemuzhen: "射铁木真",
      sdyx_wanyanhonglie: "射完颜洪烈",
      sdyx_zhamuhe: "射扎木合",
      sdyx_wokuotai: "射窝阔台",
      sdyx_mayu: "射马钰"
    };
    for (var i in jyshe) {
      if (lib.translate[i]) {
        lib.translate[i] = jyshe[i];
        lib.translate[`${i}_prefix`] = "射";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    lib.namePrefix.set('射', {
      color: '#ee9ac7',
      nature: 'firemm'
    });
    var jytian = { //天龙八部
      tlbb_zhaoqianshun: "天赵钱孙",
      tlbb_kurongdashi: "天枯荣大师",
      tlbb_xuanku: "天玄苦",
      tlbb_zuozimuxinshuangqing: "天左子穆辛双清",
      tlbb_zhiguangdashi: "天智光大师",
      tlbb_yelvnielugu: "天耶律涅鲁古",
      tlbb_shiqinglu: "天石清露",
      tlbb_cuibaiquan: "天崔百泉",
      tlbb_xuemuhua: "天薛慕华",
      tlbb_duanyanqing: "天段延庆",
      tlbb_azhu: "天阿朱",
      tlbb_wangyuyan: "天王语嫣",
      tlbb_kangmin: "天康敏",
      tlbb_suxinghe: "天苏星河",
      tlbb_yuelaosan: "天岳老三",
      tlbb_zhongling: "天钟灵",
      tlbb_wulaoda: "天乌老大",
      tlbb_qiaofeng: "天乔峰",
      tlbb_ganbaobao: "天甘宝宝",
      tlbb_liqingluo: "天李青萝",
      tlbb_yeerniang: "天叶二娘",
      tlbb_madayuan: "天马大元",
      tlbb_huangmeiseng: "天黄眉僧",
      tlbb_xuzhuliqinglu: "天虚竹李清露",
      tlbb_azhi: "天阿紫",
      tlbb_baobutong: "天包不同",
      tlbb_xuanci: "天玄慈",
      tlbb_liqinglu: "天李清露",
      tlbb_liqiushui: "天李秋水",
      tlbb_daobaifeng: "天刀白凤",
      tlbb_duanzhengchun: "天段正淳",
      tlbb_dingchunqiu: "天丁春秋",
      tlbb_xiaofeng: "天萧峰",
      tlbb_muwanqing: "天木婉清",
      tlbb_murongfu: "天慕容复",
      tlbb_ruanxingzhu: "天阮星竹",
      tlbb_quanguanqing: "天全冠清",
      tlbb_wuyazi: "天无崖子",
      tlbb_yelvhongji: "天耶律洪基",
      tlbb_jiumozhi: "天鸠摩智",
      tlbb_qiaofengazhu: "天乔峰阿朱"
    };
    for (var i in jytian) {
      if (lib.translate[i]) {
        lib.translate[i] = jytian[i];
        lib.translate[`${i}_prefix`] = "天";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    lib.namePrefix.set('天', {
      color: '#7e0f4e',
      nature: 'firemm'
    });
    var jybi = { //碧血血剑
      qtpz_yuanchengzhiwenqingqing: "碧袁承志温青青",
      qtpz_murenqing: "碧穆人清",
      qtpz_hehongyao: "碧何红药",
      qtpz_weizhongxian: "碧魏忠贤",
      qtpz_songxiance: "碧宋献策",
      qtpz_niujinxing: "碧牛金星",
      qtpz_xiaxueyi: "碧夏雪宜",
      qtpz_chengbenzhi: "碧程本直",
      qtpz_hongniangzi: "碧红娘子",
      qtpz_jyliyan: "碧李岩",
      qtpz_lizicheng: "碧李自成",
      qtpz_ajiu: "碧阿九",
      qtpz_zhuyoujian: "碧朱由检",
      qtpz_duoergun: "碧多尔衮"
    };
    for (var i in jybi) {
      if (lib.translate[i]) {
        lib.translate[i] = jybi[i];
        lib.translate[`${i}_prefix`] = "碧";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    lib.namePrefix.set('碧', {
      color: '#e81310',
      nature: 'firemm'
    });
    var jyshu = { //书剑恩仇录
      qtpz_xinyan: "书心砚",
      qtpz_zhaobanshan: "书赵半山",
      qtpz_hongli: "书弘历",
      qtpz_zhangzhaozhong: "书张召重",
      qtpz_yuyutong: "书余鱼同",
      qtpz_liyuanzhi: "书李沅芷",
      qtpz_muzhuolun: "书木卓伦",
      qtpz_huoayi: "书霍阿伊",
      qtpz_kasili: "书喀丝丽",
      qtpz_chenjialuo: "书陈家洛",
      qtpz_huoqingtong: "书霍青桐",
      qtpz_luobing: "书骆冰"
    };
    for (var i in jyshu) {
      if (lib.translate[i]) {
        lib.translate[i] = jyshu[i];
        lib.translate[`${i}_prefix`] = "书";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    lib.namePrefix.set('书', {
      color: '#084d72',
      nature: 'firemm'
    });
    var jyfei = { //飞狐外传
      qtpz_miaoruolan: "飞苗若兰",
      qtpz_pingasi: "飞平阿四",
      qtpz_yuanzhiyi: "飞袁紫衣",
      qtpz_hufei: "飞胡斐",
      qtpz_fengtiannan: "飞凤天南",
      qtpz_tangpei: "飞汤沛"
    };
    for (var i in jyfei) {
      if (lib.translate[i]) {
        lib.translate[i] = jyfei[i];
        lib.translate[`${i}_prefix`] = "飞";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    var jyxue = { //雪山飞狐
      qtpz_huyidao: "飞胡一刀",
      qtpz_tianguinong: "飞田归农",
      qtpz_miaorenfeng: "飞苗人凤"
    };
    for (var i in jyxue) {
      if (lib.translate[i]) {
        lib.translate[i] = jyxue[i];
        lib.translate[`${i}_prefix`] = "飞";
      } else {
        alert("prefix:" + i + '不存在');
      };
    };
    lib.namePrefix.set('飞', {
      color: '#084d72',
      nature: 'firemm'
    });
    var jyxia = { //侠客行
      qtpz_dingbusandingbusi: "侠丁不三丁不四",
      qtpz_longmudaozhu: "侠龙木岛主",
      qtpz_shizhongyu: "侠石中玉",
      qtpz_zhangsanlisi: "侠张三李四"
    };
    var jylian = { //连城诀
      qtpz_wanzhenshan: "连万震山",
      qtpz_shuisheng: "连水笙",
      qtpz_huatiegan: "连花铁干",
      qtpz_xuedaolaozhu: "连血刀老祖",
      qtpz_lintuisi: "连凌退思",
      qtpz_meiniansheng: "连梅念笙"
    };
    var jyyue = { //越女剑
      qtpz_goujian: "越勾践",
      qtpz_fanli: "越范蠡",
      qtpz_aqing: "越阿青",
      qtpz_xishi: "越西施"
    };
    var jybai = { //白马啸西风
      qtpz_liwenxiu: "白李文秀",
      qtpz_supu: "白苏普"
    };
    var jyyuan = {
      //鸳鸯刀
    };});
});
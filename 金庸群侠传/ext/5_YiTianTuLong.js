'use strict';
window.jyimport(function (lib, game, ui, get, ai, _status) {
  game.import('character', function () {
    lib.config.all.characters.add('yttl');
    lib.config.characters.add('yttl');
    lib.translate.yttl_character_config = '<img style=width:100px  src=extension/金庸群侠传/image/title/jy_title_yttl.jpg>';
    var Group = function (str1, str2) {
      if (!str2) return str1;
      return lib.config.extension_金庸群侠传_changeGroup ? str2 : str1;
    };
    var tupo = function (str1, str2) {
      return lib.config.extension_金庸群侠传_jiexiantupo ? str2 : str1;
    };
    var yttl = {
      name: 'yttl',
      connect: true,
      characterFilter: {},
      characterSort: {
        yttl: {
          //绝世高手
          yttl_jueshi: ['yttl_jue_zhangwuji', 'yttl_doujiushenseng', 'yttl_juezhangsanfeng', 'yttl_shaolinsandu'],
          //武当派
          yttl_wudang: ['yttl_songqingshu', 'yttl_zhangsanfeng', 'yttl_zhangcuishan', 'yttl_yinliting', 'yttl_songyuanqiao', 'yttl_spsongyuanqiao', 'yttl_yulianzhou', 'yttl_zhangsongxi', 'yttl_moshenggu', 'yttl_yudaiyan'],
          //明教
          yttl_mingjiao: ['yttl_yin_fanyao', 'yttl_wangnangu', 'yttl_lengqian', 'yttl_xie_xiexun', 'yttl_xie_weiyixiao', 'yttl_xuda', 'yttl_sp_weiyixiao', 'yttl_huqingniu', 'yttl_changyuchun', 'yttl_zhuyuanzhang', 'yttl_hanliner', 'yttl_xinran', 'yttl_wujincao', 'yttl_yangbuhui', 'yttl_spyangdingtian', 'yttl_yangdingtian', 'yttl_zhoudian', 'yttl_zhangwuji', 'yttl_zhangwujizhaomin', 'yttl_yangxiao', 'yttl_fanyao', 'yttl_weiyixiao', 'yttl_xiexun', 'yttl_shuobude'],
          //峨眉派
          yttl_emei: ['yttl_xie_zhouzhiruo', 'yttl_guoxiang', 'yttl_jixiaofu', 'yttl_miejue', 'yttl_zhouzhiruo', 'yttl_spzhouzhiruo', 'yttl_dingminjun'],
          //天鹰教
          yttl_tianyingjiao: ['yttl_xie_yintianzheng', 'yttl_xie_zhuer', 'yttl_yinli', 'yttl_yinsusu', 'yttl_yinyewang', 'yttl_yintianzheng'],
          //丐帮
          yttl_gaibang: ['yttl_chenyouliang'],
          //少林
          yttl_shaolin: ['yttl_xie_xiexun', 'yttl_jueyuandashi', 'yttl_kongjian'],
          //波斯明教
          yttl_bosi: ['yttl_xie_daiqisi', 'yttl_daiqisi', 'yttl_jinhuapopo', 'yttl_xiaozhao', 'yttl_changbaoshu'],
          //元室
          yttl_yuanshi: ['yttl_aerasan', 'yttl_chengkun', 'yttl_xie_zhaomin', 'yttl_yuanzhen', 'yttl_spxuanmingerlao', 'yttl_luhe', 'yttl_ruyangwang', 'yttl_zhaomin'],
          //红梅山庄
          yttl_hongmei: ['yttl_zhujiuzhenwuqingying', 'yttl_zhuchangling'],
          //龙门镖局
          yttl_longmen: ['yttl_dudajin'],
          //江湖侠客
          yttl_xiake: ['yttl_huangshannv', 'yttl_changbaisanqin', 'yttl_hanqianye']
        }
      },
      character: {
        //倚天屠龙mark
        yttl_yin_fanyao: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_huirong', 'yttl_antan'], ['bangpai:jy_mingjiao:jy_dalu'], { drawer: '画师:新射雕群侠传', skinLevel: 3 }],
        yttl_aerasan: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_suigu', 'yttl_bigong'], ['bangpai:jy_dalu'], { drawer: '画师:佚名', skinLevel: 1 }],
        yttl_wangnangu: ['female', Group('wu', 'jy_yuan'), 3, ['yttl_duzhao', 'yttl_dujing'], ['bangpai:jy_mingjiao'], { drawer: '画师:全民武馆', skinLevel: 2 }],
        yttl_lengqian: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_xizi', 'yttl_lengmian'], ['bangpai:jy_mingjiao'], { drawer: '画师:佚名', skinLevel: 1 }],
        yttl_xie_daiqisi: ['female', Group('jin', 'jy_xie'), 3, ['yttl_qianfu', 'yttl_anchao', 'yttl_shengnv'], ['bangpai:jy_bosi'], { drawer: '画师:光翼学园', skinLevel: 4 }],
        yttl_xie_yintianzheng: ['male', Group('jin', 'jy_xie'), 3, ['yttl_yinglue', 'yttl_yingji', 'yttl_ytzyingyang'], ['bangpai:jy_mingjiao:jy_tianyingjiao'], { drawer: '画师:战江湖', skinLevel: 2 }],
        yttl_xie_xiexun: ['male', Group('jin', 'jy_xie'), 13, ['yttl_shixin_1st', 'yttl_minghen', 'yttl_shixin_2nd'], ['bangpai:jy_mingjiao'], { drawer: '画师:孙奥', skinLevel: 4 }], //leewiart.com/space/37036.html
        yttl_xie_weiyixiao: ['male', Group('jin', 'jy_xie'), 4, ['yttl_meiying', 'yttl_hanmai', 'yttl_zhuiyun'], ['bangpai:jy_mingjiao'], { drawer: '画师:佚名', skinLevel: 3 }],
        yttl_chengkun: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_hunyuan', 'yttl_pili', 'yttl_qunce'], ['bangpai:jy_dalu'], { drawer: '画师:佚名', skinLevel: 1 }],
        yttl_xuda: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_zhenglu', 'yttl_hulve', 'yttl_chengzhi'], ['bangpai:jy_mingjiao'], { drawer: '画师:佚名', skinLevel: 3 }],
        yttl_xie_zhouzhiruo: ['female', Group('jin', 'jy_xie'), 4, ['yttl_daoguang', 'yttl_yiming'], ['bangpai:jy_emei'], { drawer: '画师:射雕', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=447003509&bvid=BV1Bj411z7s4&cid=1227881105&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        yttl_jue_zhangwuji: ['male', Group('shen', 'jy_jue'), 4, ['yttl_tianni_new', 'yttl_tianyu_new', 'yttl_tianyang_new'], ['bangpai:jy_mingjiao'], { drawer: '画师:佚名', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=1503377545&bvid=BV1zD421H7fs&cid=1512773530&p=1" &autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        yttl_sp_weiyixiao: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_binzhang_new', 'yttl_xuefu_new', 'yttl_zhuiyun'], ['bangpai:jy_mingjiao'], { drawer: '画师:佚名', skinLevel: 3 }],
        yttl_xie_zhuer: ['female', Group('jin', 'jy_xie'), 4, ['yttl_qianzhu', 'yttl_wandu', 'yttl_gonghuan'], ['bangpai:jy_tianyingjiao'], { drawer: '画师:新倚天屠龙记', skinLevel: 3 }],
        yttl_xie_zhaomin: ['female', Group('jin', 'jy_xie'), 3, ['yttl_hehe', 'yttl_ruanjin', 'yttl_jieqin'], ['bangpai:jy_dalu'], { drawer: '画师:新倚天屠龙记', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=914100103&bvid=BV1MM4y1H7rP&cid=1213266055&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        yttl_shaolinsandu: ['male', Group('shen', 'jy_jue'), 3, ['yttl_jingang', 'yttl_fumo_new', 'yttl_wujie_new'], ['bangpai:jy_shaolin'], { drawer: '画师:佚名', skinLevel: 3 }],
        yttl_shuobude: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_xingnang', 'yttl_poxi'], ['bangpai:jy_mingjiao'], { drawer: '画师:侠义世界', skinLevel: 3 }],
        yttl_kongjian: ['male', Group('wu', 'jy_yuan'), 6, ['yttl_tiequ', 'yttl_shie'], ['bangpai:jy_shaolin'], { drawer: '画师:新倚天屠龙记', skinLevel: 3 }],
        yttl_ruyangwang: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_pingluan', 'yttl_weijiao', 'yttl_qianglu'], ['zhu', 'bangpai:jy_dalu'], { drawer: '画师:佚名', skinLevel: 2 }],
        yttl_yangdingtian: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_kangyuan', 'yttl_qianyi', 'yttl_mingzun'], ['zhu', 'bangpai:jy_mingjiao'], { drawer: '画师:佚名', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=362225357&bvid=BV1y94y1k7MQ&cid=1230783960&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        yttl_zhangwujizhaomin: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_nuoyi', 'yttl_shiquan', 'yttl_guitian'], ['bangpai:jy_dalu:jy_mingjiao'], { drawer: '画师:倚天屠龙记', skinLevel: 3 }],
        yttl_dudajin: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_yabiao', 'yttl_shizui'], ['bangpai:jy_shaolin'], { drawer: '画师:佚名', skinLevel: 2 }],
        //"yttl_dujie":["male",Group("shen","jy_jue"),2,["yttl_wujie","yttl_exiang"],['bangpai:jy_shaolin']],
        yttl_dingminjun: ['female', Group('wu', 'jy_yuan'), 3, ['yttl_zhengfeng', 'yttl_feiyi'], ['bangpai:jy_emei'], { drawer: '画师:倚天屠龙记', skinLevel: 3 }],
        yttl_juezhangsanfeng: ['male', Group('shen', 'jy_jue'), 3, ['yttl_liangyi', 'yttl_sixiang'], ['bangpai:jy_wudang:jy_emei'], { drawer: '画师:画画的OCASS', skinLevel: 4 }], //20211218//zcool.com.cn/u/2279468
        //jy_wudang【武当派】
        yttl_yulianzhou: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_juehu', 'yttl_rouquan', 'yttl_chuandao'], ['bangpai:jy_wudang'], { drawer: '画师:新倚天屠龙记', skinLevel: 3 }],
        yttl_zhangsongxi: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_shien', 'qtpz_roudao'], ['bangpai:jy_wudang'], { drawer: '画师:佚名', skinLevel: 2 }],
        yttl_xinran: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_cuihuo', 'yttl_shanfeng'], ['bangpai:jy_mingjiao'], { drawer: '画师:Phoenix Lu', skinLevel: 3 }],
        //jy_mingjiao【中土明教】  jy_bosi【波斯明教】
        yttl_huangshannv: ['female', Group('wu', 'jy_yuan'), 3, ['yttl_taiying', 'yttl_xianzong'], ['bangpai:jy_gumu'], { drawer: '画师:龙印2', skinLevel: 3 }],
        yttl_zhoudian: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_dianxian', 'yttl_nizhan'], ['bangpai:jy_mingjiao'], { drawer: '画师:佚名', skinLevel: 2 }],
        yttl_hanliner: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_guyong', 'yttl_juezhu'], ['bangpai:jy_mingjiao'], { drawer: '画师:佚名', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=787311515&bvid=BV1114y1v7Cb&cid=1237307905&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        //"yttl_hanliner":["male",Group('wu',"jy_yuan"),3,["yttl_guyong","yttl_juezhu",'jy_zhuangbeicesi'],['bangpai:jy_mingjiao:jy_bosi']],
        yttl_moshenggu: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_roujian', 'yttl_xunjie'], ['bangpai:jy_wudang'], { drawer: '画师:佚名', skinLevel: 2 }],
        yttl_zhangsanfeng: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_taiji', 'yttl_chunyang', 'yttl_taoli'], ['zhu', 'bangpai:jy_wudang'], { drawer: '画师:战江湖', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=829726813&bvid=BV1wu4y197rh&cid=1231419209&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        yttl_changbaisanqin: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_fendao', 'yttl_kuiyu'], ['bangpai:jy_hanfei'], { drawer: '画师:佚名', skinLevel: 1 }],
        yttl_yangxiao: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_xingshi', 'yttl_jieao'], ['bangpai:jy_mingjiao'], { drawer: '画师:布言空', skinLevel: 4 }],
        yttl_fanyao: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_qianwo', 'yttl_guijiao'], ['bangpai:jy_mingjiao'], { drawer: '画师:佚名', skinLevel: 1 }],
        yttl_zhuyuanzhang: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_qingce', 'yttl_yaolu', 'yttl_yinyuan'], ['zhu', 'bangpai:jy_mingjiao'], { drawer: '画师:佚名', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=447288705&bvid=BV1sj411B7RS&cid=1236922047&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        //"yttl_due":["male",Group('wu',"jy_yuan"),3,["yttl_jingang","yttl_fumo","yttl_kuchan"],['bangpai:jy_shaolin']],
        //jy_shaolin【少林】
        yttl_yinli: ['female', Group('wu', 'jy_yuan'), 4, ['yttl_chuxin', 'yttl_maodu'], ['bangpai:jy_tianyingjiao'], { drawer: '画师:倚天屠龙记', skinLevel: 3 }],
        yttl_jinhuapopo: ['female', Group('wu', 'jy_yuan'), 3, ['yttl_jinhua', 'yttl_jiedao'], ['bangpai:jy_bosi'], { drawer: '画师:佚名', skinLevel: 2 }],
        yttl_changbaoshu: ['male', Group('qun', 'jy_lie'), 4, ['yttl_qizhao', 'yttl_lingjian'], ['bangpai:jy_bosi'], { drawer: '画师:万王之王', skinLevel: 2 }], //newgame.yzz.cn/china/jietu/200903/10955_9.shtml
        yttl_changyuchun: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_xiaoyong_new', 'yttl_xianfeng_new'], ['bangpai:jy_mingjiao'], { drawer: '画师:佚名', skinLevel: 2 }],
        yttl_yinliting: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_channuo', 'yttl_tongshou'], ['bangpai:jy_wudang'], { drawer: '画师:佚名', skinLevel: 1 }],
        //"yttl_luhe":["male",Group('wu',"jy_yuan"),4,tupo(["yttl_xuanming","yttl_hanyin"],["yttl_xuanming2","yttl_hanyin2"]),['bangpai:jy_dalu']],
        yttl_luhe: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_xuanming2', 'yttl_hanyin2'], ['bangpai:jy_dalu'], { drawer: '画师:佚名', skinLevel: 1 }],
        yttl_miejue: ['female', Group('wu', 'jy_yuan'), 3, ['yttl_zhangjian', 'yttl_huiqiao', 'yttl_jie'], ['bangpai:jy_emei'], { drawer: '画师:佚名', skinLevel: 2 }],
        //jy_emei【峨眉派】
        yttl_songqingshu: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_jixian', 'yttl_nishi'], ['bangpai:jy_wudang'], { drawer: '画师:佚名', skinLevel: 2 }],
        yttl_zhangcuishan: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_taiji', 'yttl_yinjiu'], ['bangpai:jy_wudang'], { drawer: '画师:Junhuang Guo', skinLevel: 3 }], //artstation.com/artwork/qNkgD
        yttl_zhangwuji: ['male', Group('wu', 'jy_yuan'), 4, [lib.config.extension_金庸群侠传_jiexiantupo ? 'yttl_nijue' : 'yttl_nijue_two', 'yttl_jiuyang', 'yttl_chuqiao'], ['zhu', 'bangpai:jy_mingjiao:jy_wudang'], { drawer: '画师:倚天屠龙记', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=489728532&bvid=BV1xN411z7uc&cid=1231179885&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        yttl_daiqisi: ['female', Group('wu', 'jy_yuan'), 3, ['yttl_miling', 'yttl_yixin'], ['bangpai:jy_bosi'], { drawer: '画师:佚名', skinLevel: 2 }],
        yttl_spzhouzhiruo: ['female', Group('wu', 'jy_yuan'), 3, ['yttl_duanren', 'yttl_juejue'], ['bangpai:jy_emei'], { drawer: '画师:佚名', skinLevel: 2 }],
        yttl_hanqianye: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_gudan', 'yttl_qiyuan', 'yttl_yinshi'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 2 }],
        yttl_zhouzhiruo: ['female', Group('wu', 'jy_yuan'), 4, ['yttl_yaren', 'yttl_zhangquan'], ['bangpai:jy_emei'], { drawer: '画师:第七个桔子', skinLevel: 4 }],
        yttl_chenyouliang: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_cefan', 'yttl_dongyi'], ['bangpai:jy_gaibang'], { drawer: '画师:龙印2', skinLevel: 2 }],
        yttl_spyangdingtian: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_yixing', 'yttl_qiangmei'], ['bangpai:jy_mingjiao'], { drawer: '画师:佚名', skinLevel: 1 }],
        yttl_yangbuhui: ['female', Group('wu', 'jy_yuan'), 3, ['yttl_jiandie', 'yttl_biyi'], ['bangpai:jy_mingjiao'], { drawer: '画师:奈奈Ann', skinLevel: 2 }],
        yttl_yinsusu: ['female', Group('wu', 'jy_yuan'), 3, ['yttl_congshan_new', 'yttl_tuobiao'], ['bangpai:jy_tianyingjiao'], { drawer: '画师:佚名', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=701622571&bvid=BV1Pm4y1x7aQ&cid=1215476676&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        yttl_yinyewang: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_feiding', 'yttl_yangwei'], ['bangpai:jy_mingjiao:jy_tianyingjiao'], { drawer: '画师:全额世界', skinLevel: 1 }],
        yttl_spxuanmingerlao: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_xuanyin', 'yttl_mingjiang'], ['bangpai:jy_dalu'], { drawer: '画师:佚名', skinLevel: 2 }],
        yttl_xiexun: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_shihou', 'yttl_wudao'], ['bangpai:jy_mingjiao'], { drawer: '画师:佚名', skinLevel: 2 }],
        yttl_weiyixiao: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_binzhang', 'yttl_xuefu', 'yttl_zhuiyun'], ['bangpai:jy_mingjiao'], { drawer: '画师:佚名', skinLevel: 3 }],
        yttl_xiaozhao: ['female', Group('wu', 'jy_yuan'), 3, ['yttl_lianxiang', 'yttl_yibi'], ['bangpai:jy_bosi'], { drawer: '画师:布言空', skinLevel: 4 }],
        yttl_jueyuandashi: ['male', Group('wei', 'jy_song'), 4, ['yttl_cangjing', 'yttl_hudu', 'yttl_kuangyi'], ['bangpai:jy_shaolin'], { drawer: '画师:新倚天屠龙记', skinLevel: 3 }],
        yttl_guoxiang: ['female', Group('wu', 'jy_song'), 4, ['yttl_bianxun', 'yttl_changyi', 'yttl_daoyin'], ['bangpai:jy_emei'], { drawer: '画师:佚名', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=507649997&bvid=BV1yu411S7iG&cid=470735376&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        yttl_zhaomin: ['female', Group('wu', 'jy_yuan'), 3, ['yttl_youzhu', 'yttl_cifeng'], ['bangpai:jy_dalu'], { drawer: '画师:布言空', skinLevel: 4, videos: ['<iframe src="http:iframe src="http://player.bilibili.com/player.html?aid=317248401&bvid=BV12P411W7r5&cid=&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>', '<iframe src="http://player.bilibili.com/player.html?aid=445853271&bvid=BV1Rj411Z7Ys&cid=1192667445&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        yttl_yuanzhen: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_celuan', 'yttl_zhawang'], ['bangpai:jy_shaolin'], { drawer: '画师:佚名', skinLevel: 2 }],
        yttl_yudaiyan: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_zhukou', 'yttl_zhuizei'], ['bangpai:jy_wudang'], { drawer: '画师:新倚天屠龙记', skinLevel: 2 }],
        yttl_jixiaofu: ['female', Group('wu', 'jy_yuan'), 3, [lib.config.extension_金庸群侠传_jiexiantupo ? 'yttl_sishou2' : 'yttl_sishou', lib.config.extension_金庸群侠传_jiexiantupo ? 'yttl_buyu2' : 'yttl_buyu'], ['bangpai:jy_emei'], { drawer: '画师:诛仙', skinLevel: 3 }],
        yttl_huqingniu: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_huitian', 'yttl_bianjiu'], ['bangpai:jy_mingjiao'], { drawer: '画师:新倚天屠龙记', skinLevel: 3 }],
        yttl_songyuanqiao: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_zhengyuan', 'yttl_shameng'], ['bangpai:jy_wudang'], { drawer: '画师:九阴真经', skinLevel: 3 }],
        yttl_doujiushenseng: ['male', Group('shen', 'jy_jue'), '3/6', ['yttl_jiyang', 'yttl_jiusheng'], ['bangpai:jy_youxia'], { drawer: '画师:盛趣游戏星辰杀', skinLevel: 3 }],
        yttl_yintianzheng: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_yingxi', 'yttl_yiyuan'], ['bangpai:jy_mingjiao:jy_tianyingjiao'], { drawer: '画师:南帝北丐', skinLevel: 2 }],
        yttl_wujincao: ['male', Group('wu', 'jy_yuan'), 4, ['yttl_zhengqi', 'yttl_duanzhu'], ['bangpai:jy_mingjiao'], { drawer: '画师:刀剑OnLine', skinLevel: 3 }],
        yttl_zhuchangling: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_mouxian', 'yttl_bixian', 'yttl_fenzhuang'], ['bangpai:jy_wangzu'], { drawer: '画师:佚名', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=627673648&bvid=BV1tt4y1e7Af&cid=254038218&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>', '<iframe src="http://player.bilibili.com/player.html?aid=542642489&bvid=BV1Ai4y1L7KQ&cid=254038416&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        yttl_zhujiuzhenwuqingying: ['female', Group('wu', 'jy_yuan'), 3, ['yttl_zongquan', 'yttl_cuhai'], ['bangpai:jy_wangzu'], { drawer: '画师:佚名', skinLevel: 2 }],
        yttl_spsongyuanqiao: ['male', Group('wu', 'jy_yuan'), 3, ['yttl_yuanmeng', 'yttl_taiji'], ['bangpai:jy_wudang'], { drawer: '画师:佚名', skinLevel: 1 }]
      },
      characterIntro: {},
      characterTitle: {
        yttl_yin_fanyao: '星火燎原',
        yttl_aerasan: '大力金刚',
        yttl_lengqian: '冷面先生',
        yttl_xie_daiqisi: '暗潮汹涌',
        yttl_xie_yintianzheng: '鹰瞵鹗视',
        yttl_chengqun: '混元霹雳手',
        yttl_xie_zhaomin: '血溅华堂',
        yttl_yulianzhou: '传道授业',
        yttl_zhangsongxi: '施恩布道',
        yttl_xinran: '淬火炼金',
        yttl_huangshannv: '古墓仙踪',
        yttl_zhoudian: '颠言逆语',
        yttl_hanliner: '',
        yttl_moshenggu: '',
        yttl_zhangsanfeng: '',
        yttl_changbaisanqin: '',
        yttl_yangxiao: '',
        yttl_fanyao: '',
        yttl_zhuyuanzhang: '',
        yttl_due: '',
        yttl_yinli: '',
        yttl_jinhuapopo: '',
        yttl_changbaoshu: '',
        yttl_changyuchun: '',
        yttl_yinliting: '',
        yttl_luhe: '',
        yttl_miejue: '',
        yttl_songqingshu: '',
        yttl_zhangcuishan: '',
        yttl_zhangwuji: '',
        yttl_daiqisi: '',
        yttl_spzhouzhiruo: '',
        yttl_hanqianye: '',
        yttl_zhouzhiruo: '',
        yttl_chenyouliang: '',
        yttl_spyangdingtian: '',
        yttl_yangbuhui: '',
        yttl_yinsusu: '',
        yttl_yinyewang: '',
        yttl_spxuanmingerlao: '',
        yttl_xiexun: '',
        yttl_weiyixiao: '',
        yttl_xiaozhao: '',
        yttl_jueyuandashi: '',
        yttl_guoxiang: '',
        yttl_zhaomin: '',
        yttl_yuanzhen: '',
        yttl_yudaiyan: '',
        yttl_jixiaofu: '',
        yttl_huqingniu: '',
        yttl_songyuanqiao: '',
        yttl_doujiushenseng: '',
        yttl_yintianzheng: '',
        yttl_wujincao: '',
        yttl_zhuchangling: '',
        yttl_zhujiuzhenwuqingying: '',
        yttl_spsongyuanqiao: ''
      },
      //卡牌
      card: {
        jydiy_baimangbian: {
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -4
          },
          derivation: 'yttl_xie_zhouzhiruo',
          fullskin: true,
          skills: ['jydiy_baimangbian_skill', 'jydiy_baimangbian_skill2']
        }
      },
      skill: {
        //////技能开始//////////////
        //隐范遥 霸天20240627
        yttl_huirong: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'showCharacterAfter'
          },
          forced: true,
          hiddenSkill: true,
          filter(event, player) {
            return true;
          },
          content: async function (event, trigger, player) {
            if (player != _status.currentPhase) {
              const names = get.rawName2(player.name1);
              lib.translate[player.name1] = '范遥';
              player.node.name.innerHTML = get.slimName(player.name1);
              if (player.canMoveCard()) {
                const { result: move1 } = await player.moveCard();
                if (move1.bool) {
                  if (player.canMoveCard()) {
                    const { result: move2 } = await player.moveCard();
                    if (move2.bool) {
                      if (player.canMoveCard()) {
                        const { result: move3 } = await player.moveCard();
                        if (move3.bool) {
                          if (player.canMoveCard()) {
                            const { result: move4 } = await player.moveCard();
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              const names = get.rawName2(player.name1);
              lib.translate[player.name1] = '苦头陀';
              player.node.name.innerHTML = get.slimName(player.name1);
              if (player.hasUseTarget({ name: 'nanman' })) {
                const { result: result1 } = await player.chooseUseTarget({ name: 'nanman' }, false);
                if (result1.bool) {
                  if (player.hasUseTarget({ name: 'nanman' })) {
                    const { result: result1 } = await player.chooseUseTarget({ name: 'nanman' }, false);
                  }
                }
              }
            }
          }
        },
        yttl_antan: {
          mod: {
            targetInRange(card, player, target) {
              if (card.yttl_antan && player.inRange(target)) return true;
            }
          },
          filterTarget(card, player, target) {
            const group2 = get.jy_group(target);
            if (lib.translate[player.name1] == '苦头陀') {
              if (group2 != 'yizu') return false;
            } else {
              if (group2 != 'hanren') return false;
            }
            return _status.event._backup.filterTarget.apply(this, arguments);
          },
          complexSelect: true,
          enable: 'phaseUse',
          filterCard: () => false,
          selectCard: [0, 1],
          viewAs: {
            name: 'tuixinzhifu',
            yttl_antan: true
          },
          usable: 1,
          prompt: '出牌阶段限一次,若你名为范遥/苦头陀,你可以视为对攻击范围内一名汉人/异族使用一张[推心置腹].',
          check(card) {
            return 1;
          },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          derivation: ['yttl_chidan', 'yttl_liaoyuan'],
          content: async function (event, trigger, player) {
            if (lib.translate[player.name1] == '苦头陀') {
              lib.translate[player.name1] = '范遥';
            } else {
              lib.translate[player.name1] = '苦头陀';
            }
            player.node.name.innerHTML = get.slimName(player.name1);
            if (lib.translate[player.name1] == '苦头陀') {
              player.addAdditionalSkills('yttl_antan', ['yttl_chidan']);
            } else {
              player.addAdditionalSkills('yttl_antan', ['yttl_liaoyuan']);
            }
          }
        },
        yttl_liaoyuan: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          filterCard() {
            return false;
          },
          selectCard: [-1, -1],
          usable: 1,
          check(card) {
            return 1;
          },
          filterTarget(card, player, target) {
            if (target == player) return false;
            return !target.hasSkill('yttl_liaoyuan_fire');
          },
          content: async function (event, trigger, player) {
            await event.target.addTempSkills('yttl_liaoyuan_fire', { player: 'phaseUseEnd' });
            if (!player.hasSkill('jy_bosi')) {
              await player.
              changeSkills(['jy_bosi'], []).
              set('$handle', function (player, addSkills, removeSkills, changeSkills) {
                if (addSkills.length) {
                  game.log(
                    player,
                    '获得了技能',
                    ...addSkills.map((i) => {
                      return '#g【' + get.translation(i) + '】';
                    })
                  );
                  addSkills.forEach((skill) => {
                    player.addTempSkill(skill, function (eventx, playerx, namex) {
                      if (namex == 'die') {
                        return eventx.player == changeSkills.source;
                      }
                      if (namex == 'phaseAfter') {
                        return eventx.player == changeSkills.source;
                      }
                      return false;
                    });
                  });
                }
              }).
              set('source', event.target);
            }
          },
          ai: {
            order: 9,
            result: {
              target: 1
            }
          },
          subSkill: {
            fire: {
              mark: true,
              nopop: true,
              intro: {
                name: '燎原—火攻',
                content: '下回合内可以将一张红色牌当火攻使用'
              },
              name: '燎原—火攻',
              charlotte: true,
              enable: 'phaseUse',
              filterCard(card, player) {
                return get.color(card) == 'red';
              },
              viewAs: {
                name: 'huogong'
              },
              viewAsFilter(player) {
                if (!player.isPhaseUsing()) return false;
                if (!player.countCards('hs', { color: 'red' })) return false;
              },
              position: 'hs',
              prompt: '将一张红色牌当火攻使用',
              check(card) {
                var player = get.player();
                if (player.countCards('h') > player.hp) {
                  return 6 - get.value(card);
                }
                return 3 - get.value(card);
              }
            }
          }
        },
        yttl_chidan: {
          subSkill: {
            used: {
              charlotte: true,
              mark: true,
              intro: {
                content: '本轮已发动'
              }
            },
            ying: {
              mod: {
                cardname(card, player) {
                  if (get.itemtype(card) == 'card' && card.hasGaintag('yttl_chidan')) {
                    return 'ying';
                  }
                },
                cardnumber(card, player) {
                  if (get.itemtype(card) == 'card' && card.hasGaintag('yttl_chidan')) {
                    return 1;
                  }
                }
              },
              onremove(player) {
                player.removeGaintag('yttl_chidan');
              },
              forced: true,
              forceDie: true,
              charlotte: true
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseUseBegin'
          },
          filter(event, player) {
            if (player.hasSkill('yttl_chidan_used')) return false;
            return (
              event.player != player &&
              event.player.countCards('h', function (i) {
                return !i.hasGaintag('yttl_chidan');
              }) > 0);

          },
          logTarget: 'player',
          check(event, player) {
            if (get.attitude(player, event.player) > 0) return false;
            return true;
          },
          content: async function (event, trigger, player) {
            player.addTempSkill('yttl_chidan_used', 'roundStart');
            const count = Math.ceil(
              trigger.player.countCards('h', function (i) {
                return !i.hasGaintag('yttl_chidan');
              }) / 2
            );
            const next = player.choosePlayerCard('h', trigger.player, count, true, 'visible');
            next.set('filterButton', function (button) {
              return !button.link.hasGaintag('yttl_chidan');
            });
            next.set('ai', function (button) {
              const player = _status.event.player;
              const target = _status.event.target;
              return get.value(button.link, target);
            });
            const { bool, cards: choosecards } = await next.forResult();
            if (bool) {
              trigger.player.addGaintag(choosecards, 'yttl_chidan');
              const phase = trigger.getParent('phase');
              trigger.player.addTempSkill('yttl_chidan_ying', function (eventx, playerx, namex) {
                if (namex == 'die') {
                  return eventx.player == playerx;
                }
                if (namex == 'phaseAfter') {
                  if (eventx == phase) return false;
                  return eventx.player == playerx;
                }
                return false;
              });
            }
          }
        },
        //阿二阿三
        yttl_suigu: {
          group: 'yttl_suigu_damage',
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            player: 'useCard1'
          },
          forced: true,
          filter(trigger, player) {
            return trigger.card.name == 'sha' && trigger.targets.length;
          },
          content() {
            'step 0';
            const list = ['XXX造成伤害废除目标一个装备栏', 'XXX造成伤害弃置目标X张牌(X为其废弃装备栏数)', '背水:你将一张【兵粮寸断】置入判定区并且XXX不能被抵消'];
            const cardx = get.translation(trigger.card);
            const list2 = [];
            for (var i = 0; i < list.length; i++) {
              list2.push([i, list[i].replace(/XXX/g, cardx)]);
            }
            const next = player.chooseButton([get.prompt(event.name), [list2, 'textbutton']]);
            next.set('selectButton', [1, 1]);
            next.set('filterButton', function (button) {
              return true;
            });
            next.set('bool4', Math.min(trigger.targets[0].countDisabledSlot(), trigger.targets[0].countDiscardableCards(player, 'he')) > 0);
            next.set('bool3', get.attitude(player, trigger.targets[0]) > 0);
            next.set('ai', function (button) {
              if (_status.event.bool3) return -1;
              if (!_status.event.bool4 && button.link == 1) return -1;
              return Math.random();
            });
            'step 1';
            if (result.bool) {
              const link = result.links[0];
              if (link == 2) {
                const bingliang = get.cardPile(function (card) {
                  return card.name == 'bingliang' && player.canAddJudge(card);
                });
                if (bingliang) {
                  player.addJudge(bingliang);
                } else {
                  const bingliang2 = get.cardPile(function (card) {
                    return player.canAddJudge({ name: 'bingliang', cards: [card] });
                  });
                  if (bingliang2) {
                    player.addJudge({ name: 'bingliang' }, [bingliang2]);
                  }
                }
                trigger.card.yttl_suigu0 = true;
                trigger.card.yttl_suigu1 = true;
                trigger.directHit.addArray(game.filterPlayer());
              } else if (link == 1) {
                trigger.card.yttl_suigu1 = true;
              } else if (link == 0) {
                trigger.card.yttl_suigu0 = true;
              }
            }
          },
          subSkill: {
            damage: {
              trigger: {
                source: 'damageSource'
              },
              forced: true,
              filter(event, player) {
                if (!event.card) return false;
                if (event.card.name != 'sha') return false;
                if (!event.player.isAlive()) return false;
                return event.card && event.card.yttl_suigu0 || event.card.yttl_suigu1;
              },
              content() {
                'step 0';
                if (!trigger.card.yttl_suigu0) {
                  event.goto(2);
                  return;
                }
                const list = [];
                for (var i = 1; i < 6; i++) {
                  if (trigger.player.isDisabled(i)) continue;
                  list.push('equip' + i);
                }
                if (list.length > 1) {
                  const next = player.chooseControl(list);
                  next.set('prompt', '请废除' + get.translation(trigger.player) + '一个装备栏');
                  next.set('ai', () => {
                    return list.randomGet();
                  });
                  next.set('list', list);
                } else if (list.length == 1) {
                  event._result = { control: list[0] };
                } else {
                  event.goto(2);
                }
                'step 1';
                if (result.control) {
                  trigger.player.disableEquip(result.control);
                }
                'step 2';
                if (trigger.card.yttl_suigu1) {
                  const count = Math.min(trigger.player.countDisabledSlot(), trigger.player.countDiscardableCards(player, 'he'));
                  if (count > 0) {
                    player.line(trigger.player);
                    player.discardPlayerCard('he', trigger.player, true, count);
                  }
                }
              }
            }
          }
        },
        yttl_bigong: {
          enable: 'phaseUse',
          filterCard() {
            return false;
          },
          selectCard: -1,
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filterTarget(card, player, target) {
            if (target == player) return false;
            return true;
          },
          content() {
            'step 0';
            const next = player.chooseToDuiben(target);
            next.set('title', '谋弈');
            next.set('namelist', ['宁死不屈', '虚与委蛇', '施刑', '利诱']);
            next.set('translationList', [`${get.translation(player)}选择施刑:${get.translation(player)}对你视为对你使用一张不计次数无视距离的【杀】`, `${get.translation(player)}选择利诱:${get.translation(player)}观看你手牌并获得其中不同颜色的牌各一张`, `${get.translation(target)}选择宁死不屈:你视为对${get.translation(target)}使用一张不计次数无视距离的【杀】`, `${get.translation(target)}选择虚与委蛇:你观看${get.translation(target)}手牌并获得其中不同颜色的牌各一张`]);
            next.set('ai', (button) => 1 + Math.random());
            'step 1';
            if (result.bool) {
              if (result.player == 'db_def1') {
                if (player.canUse({ name: 'sha' }, target, false)) {
                  player.useCard({ name: 'sha' }, target, false);
                }
              } else {
                let count = 0;
                if (target.countGainableCards(player, 'h', { color: 'red' }) > 0) count += 1;
                if (target.countGainableCards(player, 'h', { color: 'black' }) > 0) count += 1;
                if (count) {
                  player.
                  gainPlayerCard(target, count, 'h', true, 'visible').
                  set('filterButton', function (button) {
                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                      if (get.color(button.link) == get.color(ui.selected.buttons[i].link)) return false;
                    }
                    return true;
                  }).
                  set('complexSelect', true);
                } else if (target.countCards('h')) {
                  player.viewHandcards(target);
                }
              }
            } else {
              event.finish();
            }
          },
          ai: {
            order: 12,
            result: {
              target(player, target) {
                return Math.min(-1, -target.countCards('h'));
              }
            }
          }
        },
        //王难姑 霸天20240623
        yttl_duzhao: {
          group: 'yttl_duzhao_move',
          subSkill: {
            move: {
              trigger: {
                source: 'damageSource'
              },
              forced: true,
              filter(event, player) {
                return event.hasNature('jy_du') && player.canMoveCard();
              },
              content() {
                player.moveCard(get.prompt('yttl_duzhao')).set('prompt2', '移动场上的一张牌');
              }
            },
            off: {
              charlotte: true
            }
          },
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (player.hasSkill('yttl_duzhao_off')) return false;
            return game.hasPlayer(function (current) {
              return current != player && player.canCompare(current);
            });
          },
          filterTarget(card, player, target) {
            return target != player && player.canCompare(target);
          },
          content() {
            'step 0';
            player.chooseToCompare(target);
            'step 1';
            if (result.bool) {
              const bool = game.hasPlayer(function (current) {
                return current != player && target != current && target.inRange(current);
              });
              if (bool) {
                player.
                chooseTarget(function (card, player, target) {
                  const source = _status.event.source;
                  return target != player && target != source && source.inRange(target);
                }, true).
                set('ai', function (target) {
                  const player = _status.event.player;
                  return get.damageEffect(target, player, player, 'jy_du');
                }).
                set('source', target);
              } else {
                event.finish();
              }
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool && result.targets && result.targets.length) {
              player.addTempSkill('yttl_duzhao_off', 'phaseUseAfter');
              player.line(result.targets[0], 'green');
              result.targets[0].damage(player, 'jy_du');
            }
          },
          ai: {
            order: 0.5,
            result: {
              target(player, target) {
                const att = get.attitude(player, target);
                const oc = target.countCards('h') == 1;
                if (att > 0 && oc) return 0;
                const players = game.filterPlayer();
                for (var i of players) {
                  if (i != target && i != player && target.inRange(i)) {
                    if (get.damageEffect(i, player, player, 'jy_du') > 0) {
                      return att > 0 ? att / 2 : att - (oc ? 5 : 0);
                    }
                  }
                }
                return 0;
              }
            }
          }
        },
        yttl_dujing: {
          global: ['jydiy_beisuqinfeng_skill', 'jydiy_shixiangruanjinsan_skill', 'jydiy_qinghua_skill'],
          group: ['yttl_dujing_beisuqinfeng', 'yttl_dujing_shixiangruanjinsan', 'yttl_dujing_qinghua'],
          subSkill: {
            beisuqinfeng: {
              enable: 'chooseToUse',
              filterCard(card, player) {
                return card.suit == 'spade' && card.hasGaintag('yttl_dujing');
              },
              viewAs: {
                name: 'jydiy_beisuqinfeng'
              },
              viewAsFilter(player) {
                if (
                !player.countCards('s', function (card) {
                  return card.suit == 'spade' && card.hasGaintag('yttl_dujing');
                }))

                return false;
              },
              position: 's',
              prompt: '将一张♠️️[毒]当【悲酥清风】使用',
              check() {
                return 1;
              }
            },
            shixiangruanjinsan: {
              enable: 'chooseToUse',
              filterCard(card, player) {
                return card.suit == 'club' && card.hasGaintag('yttl_dujing');
              },
              viewAs: {
                name: 'jydiy_shixiangruanjinsan'
              },
              viewAsFilter(player) {
                if (
                !player.countCards('s', function (card) {
                  return card.suit == 'club' && card.hasGaintag('yttl_dujing');
                }))

                return false;
              },
              position: 's',
              prompt: '将一张♣️️[毒]当【十香软筋散】使用',
              check() {
                return 1;
              }
            },
            qinghua: {
              enable: 'chooseToUse',
              filterCard(card, player) {
                return get.color(card) == 'red' && card.hasGaintag('yttl_dujing');
              },
              viewAs: {
                name: 'jydiy_qinghua'
              },
              viewAsFilter(player) {
                if (
                !player.countCards('s', function (card) {
                  return get.color(card) == 'red' && card.hasGaintag('yttl_dujing');
                }))

                return false;
              },
              position: 's',
              prompt: '将一张红色[毒]当【情花】使用',
              check() {
                return 1;
              }
            }
          },
          mod: {
            cardEnabled2(card, player) {
              if (card.hasGaintag('yttl_dujing')) {
                const evt = _status.event;
                if (evt.name != 'chooseToUse' && evt.name != 'chooseToRespond') return false;
                if (!evt.skill) return false;
                if (!['yttl_dujing_beisuqinfeng', 'yttl_dujing_shixiangruanjinsan', 'yttl_dujing_qinghua'].includes(evt.skill)) return false;
              }
            }
          },
          intro: {
            mark(dialog, storage, player) {
              const cards = player.getCards('s', (i) => {
                return i.hasGaintag('yttl_dujing');
              });
              if (!cards.length) return '共有零张牌';
              dialog.addAuto(cards);
            },
            markcount(storage, player) {
              const cards = player.getCards('s', (i) => {
                return i.hasGaintag('yttl_dujing');
              });
              return cards.length;
            }
          },
          onremove(player, skill) {
            const cards = player.getCards('s', (i) => {
              return i.hasGaintag('yttl_dujing');
            });
            if (cards.length) player.loseToDiscardpile(cards);
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: ['chooseToCompareAfter', 'compareMultipleAfter'],
            target: ['chooseToCompareAfter', 'compareMultipleAfter']
          },
          filter(event, player) {
            if (event.preserve) return false;
            if (player == event.player) {
              return !get.owner(event.card1);
            } else {
              return !get.owner(event.card2);
            }
          },
          forced: true,
          content() {
            if (player == trigger.player) {
              game.loseAsync({
                player: player,
                cards: [trigger.card1],
                tag: 'yttl_dujing',
                toStorage: true,
                target: player
              }).setContent(function () {
                target.directgains(cards, null, event.tag);
                target.markSkill('yttl_dujing');
              });
            } else {
              game.loseAsync({
                player: player,
                cards: [trigger.card2],
                tag: 'yttl_dujing',
                toStorage: true,
                target: player
              }).setContent(function () {
                target.directgains(cards, null, event.tag);
                target.markSkill('yttl_dujing');
              });
            }
          }
        },
        //冷谦 霸天 20240604
        yttl_xizi2: {
          audio: 'yttl_xizi',
          trigger: { player: 'phaseJieshuBegin' },
          filter(event, player) {
            const history = player.getHistory('useCard', function (evt2) {
              return evt2.isPhaseUsing(player);
            });
            let count = 0;
            for (const evt2 of history) {
              count += get.cardNameLength(evt2.card);
            }
            return count > 0;
          },
          content() {
            'step 0';
            event.redoCount = 10; //重复判断10次
            'step 1';
            const history = player.getHistory('useCard', function (evt2) {
              return evt2.isPhaseUsing(player);
            });
            let count = 0;
            for (const evt2 of history) {
              count += get.cardNameLength(evt2.card);
            }
            const gains = [];
            const getNum = function (gainsx) {
              return gainsx.reduce(function (num, card) {
                return num + get.cardNameLength(card);
              }, 0);
            };
            while (getNum(gains) < count) {
              const gain = get.randomCard(function (card) {
                if (gains.includes(card)) return false;
                return getNum(gains) + get.cardNameLength(card) <= count;
              });
              if (gain) {
                gains.push(gain);
              } else {
                break;
              }
            }
            if (getNum(gains) == count) {
              player.gain(gains, 'log', 'gain2');
            } else {
              event.redoCount--;
              if (event.redoCount > 0) {
                event.redo();
              } else {
                game.log('没有符合要求的牌了!');
                event.finish();
              }
            }
          }
        },
        yttl_xizi: {
          group: 'yttl_xizi2',
          mod: {
            cardUsable(card, player, target) {
              if (player.isPhaseUsing()) return Infinity;
            },
            aiOrder(player, card, num) {
              if (typeof card == 'object' && player.isPhaseUsing()) {
                return 15 / get.cardNameLength(card) + num;
              }
            }
          },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            player: 'useCard'
          },
          filter(event, player) {
            if (!event.isPhaseUsing(player)) return false;
            return true;
          },
          init(player, skill) {
            lib.dynamicTranslate.yttl_xizi = function (player) {
              let info = lib.translate.yttl_xizi_info;
              if (!player.isPhaseUsing()) return info;
              const history = player.getHistory('useCard', function (evt2) {
                return evt2.isPhaseUsing(player);
              });
              let count = 0;
              for (const evt2 of history) {
                count += get.cardNameLength(evt2.card);
              }
              return info + '<br><li><span class="firetext">回合内已累计使用牌名字数(' + count + ')</span>';
            };
          },
          content() {
            const history = player.getHistory('useCard', function (evt2) {
              return evt2.isPhaseUsing(player);
            });
            let count = 0;
            for (const evt2 of history) {
              count += get.cardNameLength(evt2.card);
            }
            if (count >= 8) {
              const evt = event.getParent('phaseUse');
              if (evt && evt.name == 'phaseUse') {
                evt.skipped = true;
              }
              player.skip('phaseDiscard');
              game.log(player, '结束了', '#g出牌阶段');
              game.log(player, '跳过了', '#g弃牌阶段');
            } else {
              if (trigger.addCount !== false) {
                trigger.addCount = false;
                const stat = player.getStat();
                if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
              }
            }
          }
        },
        yttl_lengmian2: {
          audio: 'yttl_lengmian',
          trigger: {
            player: 'equipEnd'
          },
          cost() {
            'step 0';
            player.
            chooseTarget(get.prompt('yttl_lengmian'), '令一名角色获得一张【无懈可击】', function (card, player, target) {
              return true;
            }).
            set('ai', function (target) {
              if (target.hasSkillTag('nogain')) return 0;
              return get.attitude(player, target);
            });
            'step 1';
            if (result.bool) {
              event.result = result;
            }
          },
          content() {
            let wuxie = get.cardPile(function (card) {
              return card.name == 'wuxie';
            });
            if (!wuxie) {
              wuxie = game.createCard('wuxie');
            }
            event.targets[0].gain(wuxie, 'gain2', 'log');
          }
        },
        yttl_lengmian: {
          group: 'yttl_lengmian2',
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            player: 'loseAfter',
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter']
          },
          getIndex(event, player, triggername) {
            const evt = event.getl(player);
            if (evt && evt.player === player && evt.es) return evt.es.length;
            return false;
          },
          cost() {
            'step 0';
            player.
            chooseTarget(get.prompt('yttl_lengmian'), '令一名角色获得一张轻功【闪】', function (card, player, target) {
              return true;
            }).
            set('ai', function (target) {
              if (target.hasSkillTag('nogain')) return 0;
              return get.attitude(player, target);
            });
            'step 1';
            if (result.bool) {
              event.result = result;
            }
          },
          content() {
            event.targets[0].gain(game.createCard('shan', null, null, lib.card.shan.jy_nature.randomGet()), 'gain2', 'log');
          },
          ai: {
            noe: true,
            reverseEquip: true,
            effect: {
              target(card, player, target, current) {
                if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 2];
              }
            }
          }
        },
        //邪黛绮丝 霸天20240604
        yttl_qianfu: {
          ai: {
            combo: 'yttl_anchao'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'washCard',
            player: 'yttl_anchaoEnd'
          },
          filter(event, player) {
            const count = Math.min(7, ui.cardPile.childNodes.length);
            if (!count) return false;
            const botton = get.bottomCards(count, true);
            return botton.some((i) => i.suit == 'club');
          },
          content() {
            const count = Math.min(7, ui.cardPile.childNodes.length);
            if (!count) return false;
            const botton = get.bottomCards(count, true);
            player.gain(
              botton.filter((i) => i.suit == 'club'),
              'gain2',
              'log'
            );
          }
        },
        yttl_anchao: {
          ai: {
            combo: 'yttl_qianfu'
          },
          subSkill: {
            round: {
              charlotte: true,
              trigger: {
                global: 'roundStart'
              },
              forced: true,
              popup: false,
              content() {
                player.storage.yttl_anchao = 0;
              }
            }
          },
          group: 'yttl_anchao_round',
          init(player, skill) {
            player.storage[skill] = 0;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseBegin'
          },
          filter(event, player) {
            if (!ui.cardPile.childNodes.length) return false;
            return player.storage.yttl_anchao < 2;
          },
          content() {
            player.storage.yttl_anchao += 1;
            const cardPile = get.cards(ui.cardPile.childNodes.length - 1); //留一张
            while (cardPile.length) {
              const cardx = cardPile.pop();
              ui.cardPile.appendChild(cardx);
            }
          },
          mark: true,
          intro: {
            mark(dialog, storage, player) {
              const count = Math.min(7, ui.cardPile.childNodes.length);
              if (!count) return '';
              const cards = get.cards(count, true);
              const botton = get.bottomCards(count, true);
              if (player.isUnderControl(true)) {
                dialog.addText('牌堆顶');
                dialog.addSmall(cards);
                dialog.addText('牌堆底');
                dialog.addSmall(botton);
              } else {
                return '';
              }
            }
          }
        },
        yttl_shengnv: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCard1'
          },
          firstDo: true,
          filter(event, player) {
            if (event.card.suit != 'club') return false;
            if (get.type(event.card) == 'equip') return false;
            if (!event.isPhaseUsing(player)) return false;
            if (!event.targets || !event.targets.length) return false;
            const history = player.getHistory('useCard', function (evt2) {
              if (evt2.card.suit != 'club') return false;
              if (get.type(evt2.card) == 'equip') return false;
              return evt2.isPhaseUsing(player);
            });
            const nameCard = ['guohe', 'shunshou', 'juedou', 'nanman'][history.indexOf(event) % 4];
            if (nameCard == event.card.name) return false;
            const newCard = event.card;
            newCard.name = nameCard;
            if (
            event.targets.some(function (i) {
              return !player.canUse(newCard, i, false);
            }))

            return false;
            return true;
          },
          logTarget: 'targets',
          init(player, skill) {
            lib.dynamicTranslate.yttl_shengnv = function (player) {
              let info = lib.translate.yttl_shengnv_info;
              if (!player.isPhaseUsing()) return info;
              const history = player.getHistory('useCard', function (evt2) {
                if (evt2.card.suit != 'club') return false;
                if (get.type(evt2.card) == 'equip') return false;
                return evt2.isPhaseUsing(player);
              });
              const id = history.length % 4;
              if (id == 0) {
                return info.replace(/见招拆招/g, `<span class="firetext">见招拆招</span>`);
              } else if (id == 1) {
                return info.replace(/妙手空空/g, `<span class="firetext">妙手空空</span>`);
              } else if (id == 2) {
                return info.replace(/比武/g, `<span class="firetext">比武</span>`);
              } else if (id == 3) {
                return info.replace(/鞑虏入侵/g, `<span class="firetext">鞑虏入侵</span>`);
              }
              return info;
            };
          },
          check(event, player) {
            const history = player.getHistory('useCard', function (evt2) {
              if (evt2.card.suit != 'club') return false;
              if (get.type(evt2.card) == 'equip') return false;
              return evt2.isPhaseUsing(player);
            });
            const nameCard = ['guohe', 'shunshou', 'juedou', 'nanman'][history.indexOf(event) % 4];
            const newCard = event.card;
            newCard.name = nameCard;
            const cardResult = event.targets.reduce(function (num, target) {
              return num + get.effect(target, event.card, player, player);
            }, 0);
            const newResult =
            event.targets.reduce(function (num, target) {
              return num + get.effect(target, newCard, player, player);
            }, 0) - cardResult;
            return newResult > 0;
          },
          prompt2(event, player) {
            const history = player.getHistory('useCard', function (evt2) {
              if (evt2.card.suit != 'club') return false;
              if (get.type(evt2.card) == 'equip') return false;
              return evt2.isPhaseUsing(player);
            });
            const nameCard = ['guohe', 'shunshou', 'juedou', 'nanman'][history.indexOf(event) % 4];
            const newCard = event.card;
            newCard.name = nameCard;
            return `将${get.translation(event.card)}改为${get.translation(newCard)}`;
          },
          content() {
            const history = player.getHistory('useCard', function (evt2) {
              if (evt2.card.suit != 'club') return false;
              if (get.type(evt2.card) == 'equip') return false;
              return evt2.isPhaseUsing(player);
            });
            const nameCard = ['guohe', 'shunshou', 'juedou', 'nanman'][history.indexOf(trigger) % 4];
            const oldCard = trigger.card;
            trigger.card.name = nameCard;
            game.log(oldCard, '改为了', trigger.card);
          },
          ai: {
            combo: 'yttl_anchao'
          },
          mod: {
            targetInRange(card, player, target) {
              const suit = card.suit;
              if (suit === 'club' || suit === 'unsure') return true;
            },
            ignoredHandcard(card, player) {
              if (card.suit == 'club') {
                return true;
              }
            },
            cardDiscardable(card, player, name) {
              if (name == 'phaseDiscard' && card.suit == 'club') return false;
            },
            cardRecastable(card, player, source) {
              if (player._yttl_shengnv) return;
              if (get.position(card) != 'h') return;
              if (card.suit != 'club') return;
              player._yttl_shengnv = true;
              const mod = game.checkMod(card, player, source, 'unchanged', 'cardRecastable', player);
              delete player._yttl_shengnv;
              if (mod !== false) return true;
            }
          }
        },
        //邪殷天正 霸天 20240531
        yttl_yinglue2: {
          audio: 'yttl_yinglue',
          trigger: {
            player: ['choosePlayerCardBegin', 'discardPlayerCardBegin', 'gainPlayerCardBegin']
          },
          forced: true,
          popup: false,
          firstDo: true,
          silent: true,
          _priority: -100,
          content() {
            const hs = trigger.target.getCards('h', function (card) {
              return lib.skill.yttl_yinglue.filterCardx(card, player, trigger.target);
            });
            if (hs.length) {
              trigger.target.addGaintag(hs, 'visible_yttl_yinglue');
              const next = game.createEvent('zhuque_clear', false);
              next.player = trigger.target;
              event.next.remove(next);
              trigger.after.push(next);
              next.setContent(function () {
                player.removeGaintag('visible_yttl_yinglue');
              });
            }
          }
        },
        yttl_yinglue: {
          ai: {
            combo: 'yttl_yingji',
            viewHandcard: true,
            skillTagFilter(player, tag, arg) {
              if (player == arg) return false;
              const cards = arg.getCards('h');
              const cards2 = cards.filter(function (i) {
                if (get.is.shownCard(i)) return true;
                const number = i.number;
                return (player.storage.yttl_yinglue || 0) >= number;
              });
              return cards.length == cards2.length;
            }
          },
          group: 'yttl_yinglue2',
          logTarget: 'player',
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            global: 'phaseEnd'
          },
          filterCardx(card, player, target) {
            if (player.hasSkillTag('viewHandcard', null, target, true)) return true;
            if (get.is.shownCard(card)) return true;
            const number = card.number;
            return (player.storage.yttl_yinglue || 0) >= number;
          },
          intro: {
            markcount(storage, player) {
              return 0;
            },
            mark(dialog, storage, player) {
              const players = game.filterPlayer((i) => i != player);
              let add = false;
              players.forEach(function (i) {
                const cards = i.getCards('h', function (card) {
                  return lib.skill.yttl_yinglue.filterCardx(card, player, i);
                });
                if (cards.length) {
                  dialog.addText(get.translation(i) + '的手牌', false);
                  dialog.add(cards);
                  add = true;
                }
              });
              if (!add) {
                dialog.addText('<li>暂无', false);
              }
            }
          },
          mark: true,
          marktext: 'A',
          init(player, skill) {
            if (!player.storage[skill]) {
              player.storage[skill] = 1;
            }
            lib.translate.visible_yttl_yinglue = 'invisible';
            lib.dynamicTranslate.yttl_yinglue = function (player) {
              let info = lib.translate.yttl_yinglue_info;
              let num = get.strNumber(player.storage.yttl_yinglue);
              return info.replace(/A/g, '<span class="firetext">' + num + '</span>');
            };
          },
          filter(event, player) {
            if (event.player == player) return false;
            return event.player.getCards('h').some(function (i) {
              return i.number > player.storage.yttl_yinglue;
            });
          },
          check(event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          content() {
            'step 0';
            event.cards = trigger.player.getCards('h').filter(function (i) {
              return i.number > player.storage.yttl_yinglue;
            });
            trigger.player.
            chooseBool('是否令' + get.translation(player) + '获得' + get.translation(event.cards) + '？否则你弃置这些牌!').
            set('goon', get.attitude(trigger.player, player) > 0).
            set('ai', () => _status.event.goon);
            'step 1';
            if (result.bool) {
              trigger.player.give(event.cards, player);
              player.storage.yttl_yinglue += event.cards.length;
              if (player.storage.yttl_yinglue > 13) player.storage.yttl_yinglue = 13;
              game.broadcastAll(
                function (player, num) {
                  player.storage.yttl_yinglue = num;
                  if (player.marks.yttl_yinglue) player.marks.yttl_yinglue.firstChild.innerHTML = get.strNumber(num);
                  //delete player.storage.yttl_yinglue_markcount;
                },
                player,
                player.storage.yttl_yinglue
              );
            } else {
              trigger.player.discard(event.cards);
            }
          }
        },
        yttl_yingji: {
          ai: {
            combo: 'yttl_yinglue'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            //global:"useCardToTargeted",
            player: 'useCardToTargeted'
          },
          forced: true,
          logTarget: 'target',
          lastDo: true,
          filter(event, player) {
            if (!event.isFirstTarget) return false;
            if (!get.tag(event.card, 'damage')) return false;
            return event.targets.length == 1;
          },
          content() {
            trigger.target.addTempSkill('yttl_yingji_dianshu');
            trigger.target.storage.yttl_yingji_dianshu.add(player);
          },
          subSkill: {
            dianshu: {
              onremove(player, skill) {
                delete player.storage[skill];
              },
              charlotte: true,
              init(player, skill) {
                if (!player.storage[skill]) player.storage[skill] = [];
              },
              mod: {
                cardEnabled2(card, player) {
                  const bool = player.storage.yttl_yingji_dianshu.some((i) => lib.skill.yttl_yinglue.filterCardx(card, i, player));
                  if (bool) return false;
                }
              }
            }
          }
        },
        yttl_ytzyingyang: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          subSkill: {
            choose: {
              trigger: {
                global: 'chooseCardBegin'
              },
              forced: true,
              filter(event, player) {
                if (event.player == player) return false;
                const evt = event.parent;
                if (!evt || evt.name != 'chooseCardOL') return false;
                if (evt.yttl_ytzyingyang) return false;
                if (evt.type != 'debate') return false;
                if (evt.source != player) return false;
                if (evt.parent.name != 'chooseToDebate') return false;
                return true;
              },
              content() {
                'step 0';
                const next = player.choosePlayerCard(trigger.player, get.prompt('yttl_ytzyingyang', trigger.player), 'h');
                next.set('ai', function (button) {
                  return 1;
                });
                next.set('prompt2', '代替其选择议事牌');
                'step 1';
                if (result.bool) {
                  const cardx = result.links[0];
                  trigger.directresult = [result.links[0]];
                  trigger.parent.set('yttl_ytzyingyang', true);
                }
              }
            }
          },
          filter(event, player) {
            return game.hasPlayer(function (current) {
              return current.countCards('h') > 0;
            });
          },
          addEquipTarget(target) {
            const next = game.createEvent('zhuque_clear', false);
            next.player = target;
            next.setContent(lib.skill.yttl_ytzyingyang.addEquip);
            return next;
          },
          addEquip() {
            const equip = get.cardPile(function (card) {
              if (get.type(card) != 'equip') return false;
              if (get.color(card, false) != event.colorx) return false;
              if (get.cardtag(card, 'gifts')) return false;
              if (!player.canUse(card, player)) return false;
              return player.canEquip(card);
            });
            if (equip) {
              player.useCard(equip, player, false);
            } else {
              const equip2 = get.cardPile(function (card) {
                if (get.type(card) != 'equip') return false;
                if (get.color(card, false) != event.colorx) return false;
                if (get.cardtag(card, 'gifts')) return false;
                if (!player.canUse(card, player)) return false;
                return player.canEquip(card, true);
              });
              if (equip2) {
                player.useCard(equip2, player, false);
              } else {
                game.log('没有符合', player, '的装备牌了!');
              }
            }
          },
          content() {
            'step 0';
            player.addTempSkill('yttl_ytzyingyang_choose');
            player.chooseToDebate(game.filterPlayer());
            'step 1';
            player.removeSkill('yttl_ytzyingyang_choose');
            if (result.bool && result.opinion) {
              event.opinion = result.opinion;
              if (event.opinion != 'red' && event.opinion != 'black') {
                event.finish();
              }
            } else {
              event.finish();
            }
            'step 2';
            const next = player.chooseTarget([1, 3], '是否令至多三名角色各使用一张' + get.translation(event.opinion) + '装备牌', function (card, player, target) {
              if (!['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].some((i) => target.hasEquipableSlot(i))) return false;
              return true;
            });
            next.set('ai', function (target) {
              const player = _status.event.player;
              const att = get.attitude(player, target);
              if (att > 0) return ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].filter((i) => target.hasEmptySlot(i)).length;
              return 0;
            });
            'step 3';
            if (result.bool) {
              player.line(result.targets);
              result.targets.forEach(function (i) {
                lib.skill.yttl_ytzyingyang.addEquipTarget(i).set('colorx', event.opinion);
              });
            }
          },
          ai: {
            order: 1,
            result: {
              player: 1
            }
          }
        },
        //邪谢逊 霸天 20240429
        yttl_shixin_1st: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            player: 'useCard'
          },
          filter(event, player) {
            if (!get.tag(event.card, 'damage')) return false;
            if (!event.targets || !event.targets.length) return false;
            return true;
            //const type=get.type(event.card);
            //return type=='trick'||type=='basic';
          },
          forced: true,
          content() {
            player.loseHp();
          },
          ai: {
            maihp: true,
            effect: {
              player(card, player, target) {
                const using = player == _status.currentPhase;
                //player.isPhaseUsing();
                if (get.tag(card, 'damage') && target) {
                  if (!using) return [1, -2];
                }
              },
              target(card, player, target) {
                const using = target == _status.currentPhase;
                //const using=target.isPhaseUsing();
                if (!using) return;
                if (get.tag(card, 'damage')) {
                  if (player.hasSkillTag('jueqing', false, target)) return [1, 1];
                  return 1.2;
                }
                if (get.tag(card, 'loseHp')) {
                  if (target.hp <= 1) return;
                  return [1, 0.2];
                }
              }
            }
          },
          group: 'yttl_shixin_1st_buff',
          subSkill: {
            buff: {
              trigger: {
                player: 'loseHpEnd'
              },
              forced: true,
              filter(event, player) {
                return player == _status.currentPhase;
              },
              content() {
                player.addTempSkill('yttl_shixin_1st_buff2');
                player.addMark('yttl_shixin_1st_buff2', 1, false);
              }
            },
            buff2: {
              mod: {
                selectTarget(card, player, range) {




                  //if(get.tag(card,"damage")){
                  //    if (Array.isArray(range) && range[1] != -1) range[1]+=player.countMark("yttl_shixin_1st_buff2");
                  //
                  //}
                }, attackRange(player, distance) {return distance + player.countMark('yttl_shixin_1st_buff2');}, cardUsable(card, player, num) {
                  if (card.name == 'sha') return num + player.countMark('yttl_shixin_1st_buff2');
                }
              },
              charlotte: true,
              forced: true,
              trigger: {
                player: 'useCard2'
              },
              filter(event, player) {
                if (!get.tag(event.card, 'damage')) return false;
                return game.hasPlayer(function (current) {
                  return !event.targets.includes(current) && player.canUse(event.card, current);
                });
              },
              forced: true,
              content() {
                'step 0';
                player.
                chooseTarget([1, player.countMark('yttl_shixin_1st_buff2')], '失心:是否为' + get.translation(trigger.card) + `增加至多${player.countMark('yttl_shixin_1st_buff2')}个目标`, function (card, player, target) {
                  return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
                }).
                set('sourcex', trigger.targets).
                set('ai', function (target) {
                  var player = _status.event.player;
                  return get.effect(target, _status.event.card, player, player);
                }).
                set('card', trigger.card);
                'step 1';
                if (result.bool) {
                  event.targets = result.targets;
                } else {
                  event.finish();
                }
                'step 2';
                player.line(event.targets);
                trigger.targets.addArray(event.targets);
              },
              intro: {
                content: '<li>使用【杀】的次数上限+#<br><li>攻击范围+#<br><li>伤害牌目标数加+#'
              }
            }
          }
        },
        yttl_minghen: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            player: 'damageEnd'
          },
          forced: true,
          content() {
            'step 0';
            event.count = Math.min(trigger.num, 9);
            'step 1';
            event.count--;
            const cardNames = player.
            getCards('j', (card) => {
              return (card.viewAs || card.name) == 'xumou_jsrg';
            }).
            map(function (card) {
              return card.name;
            });
            const judge = get.randomCard(function (card) {
              if (!get.tag(card, 'damage')) return false;
              return !cardNames.includes(card.name);
            });
            if (judge) {
              player.addJudge({ name: 'xumou_jsrg' }, [judge]);
            } else {
              event.finish();
            }
            'step 2';
            if (event.count > 0) {
              var next = player.chooseBool(get.prompt2(event.name));
              next.set('frequentSkill', event.name);
            } else {
              event.finish();
            }
            'step 3';
            if (result.bool) {
              event.goto(1);
            }
          }
        },
        yttl_shixin_2nd: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'loseToDiscardpile'
          },
          limited: true,
          filter(event, player) {
            if (player.storage['yttl_shixin_2nd']) return false;
            return event.parent.name == 'xumou_jsrg';
          },
          init(player, skill) {
            player.storage[skill] = false;
          },
          check(event, player) {
            const count = player.maxHp / player.hp;
            return count >= 3;
          },
          content() {
            'step 0';
            player.awakenSkill(event.name);
            player.storage[event.name] = true;
            'step 1';
            const count = player.maxHp - player.hp;
            player.recover(count);
          },
          mark: true,
          intro: {
            content: 'limited'
          }
        },
        //邪韦一笑 霸天 20240428
        yttl_meiying: {
          shaRelated: true,
          audio: 'ext:金庸群侠传/peiyin:6',
          trigger: {
            player: 'useCardToPlayered',
            target: 'useCardToTargeted'
          },
          logTarget(event, player) {
            if (event.player == player) return event.target;
            return event.player;
          },
          group: ['yttl_meiying_roundStart', 'yttl_meiying_lose'],
          getYing(count) {
            var cards = [];
            if (typeof count != 'number') count = 1;
            while (count-- > 0) {
              let card = game.createCard('ying');
              cards.push(card);
            }
            return cards;
          },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            return event.player != event.target;
          },
          content() {
            const targetx = lib.skill[event.name].logTarget(trigger, player);
            targetx.gain(lib.skill[event.name].getYing(1), 'gain2');
          },
          forced: true,
          subSkill: {
            roundStart: {
              trigger: {
                global: 'roundStart'
              },
              forced: true,
              content() {
                'step 0';
                player.
                chooseTarget([1, 2], get.prompt('yttl_meiying'), '令至多两名其他角色各获得一张【影】', function (card, player, target) {
                  return target != player;
                }).
                set('ai', function (target) {
                  const player = get.player();
                  return get.attitude(player, target);
                });
                'step 1';
                if (result.bool) {
                  result.targets.forEach((i) => {
                    i.gain(lib.skill.yttl_meiying.getYing(1), 'gain2');
                  });
                }
              }
            },
            lose: {
              trigger: {
                global: ['equipAfter', 'addJudgeAfter', 'loseAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter']
              },
              forced: true,
              filter(event, player) {
                return game.hasPlayer(function (current) {
                  const evt = event.getl(current);
                  return (
                    evt &&
                    evt.hs &&
                    evt.hs.length &&
                    evt.hs.some(function (i) {
                      return i.name == 'ying';
                    }));

                });
              },
              bool1(event, player) {
                const evt = event.getParent('phase');
                if (!evt) return false;
                if (evt.name != 'phase') return false;
                if (!evt.yttl_meiying_swapSeat) evt.yttl_meiying_swapSeat = [];
                if (evt.yttl_meiying_swapSeat.includes(player)) return false;
                return true;
              },
              bool2(event, player) {
                return player.countMark('charge') > 0;
              },
              content() {
                'step 0';
                event.list = game.filterPlayer(function (current) {
                  const evt = trigger.getl(current);
                  return (
                    evt &&
                    evt.hs &&
                    evt.hs.length &&
                    evt.hs.some(function (i) {
                      return i.name == 'ying';
                    }));

                });
                'step 1';
                if (!event.list.length) {
                  event.finish();
                  return;
                }
                var target = event.list.shift();
                event.target = target;
                const bool1 = lib.skill[event.name].bool1(event, player);
                const bool2 = lib.skill[event.name].bool2(event, player);
                if (!bool1 && !bool2) {
                  event.finish();
                  return;
                }
                if (target.isIn()) {
                  const list = [
                  [1, '当前回合结束时你与其交换位置'],
                  [2, '消耗1点蓄力值,令其失去1体力,你回复1体力']];

                  const next = player.chooseButton([get.prompt('yttl_meiying', target), [list, 'textbutton']]);
                  next.set('forced', false);
                  next.set('selectButton', [1, 1]);
                  next.set('filterButton', function (button) {
                    if (button.link == 1) {
                      return _status.event.bool1;
                    }
                    return _status.event.bool2;
                  });
                  next.set('bool1', bool1);
                  next.set('bool2', bool2);
                  next.set(
                    'effect1',
                    function (player, target) {
                      if (player.hasUnknown()) return 0;
                      const source = _status.currentPhase;
                      const att = get.sgn(get.attitude(player, target));
                      if (source == player) {
                        if (target == player.previous && att > 0) return att;
                        if (target == player.next && att < 0) return -att;
                        const att2 = get.sgn(get.attitude(player, player.next));
                        if (target == player.next.next && att < 0 && att2 < 0) return -att - att2;
                        return 0;
                      } else {
                        if (target == source.next && att < 0) return -att;
                        return 0;
                      }
                    }(player, target)
                  );
                  next.set(
                    'effect2',
                    function (player, target) {
                      let effect = get.sgn(get.effect(target, { name: 'losehp' }, target, player));
                      if (player.isDamaged()) {
                        effect += get.sgn(get.recoverEffect(player, player, player));
                      }
                      return effect;
                    }(player, target)
                  );
                  next.set('ai', function (button) {
                    const player = _status.event.player;
                    return _status.event['effect' + button.link];
                  });
                } else event.redo();
                'step 2';
                if (result.bool) {
                  if (result.links[0] == 1) {
                    const evt = event.getParent('phase');
                    if (!evt.yttl_meiying_swapSeat) evt.yttl_meiying_swapSeat = [];
                    evt.yttl_meiying_swapSeat.add(player);
                    const next2 = game.jy_swapSeat(player, target);
                    event.next.remove(next2);
                    evt.after.push(next2);
                  } else {
                    target.loseHp();
                    if (player.isDamaged()) {
                      player.recover();
                    }
                    player.loseCharge(1);
                  }
                }
                event.goto(1);
              }
            }
          }
        },
        yttl_hanmai: {
          chargeSkill: true,
          enable: 'phaseUse',
          filter(event, player) {
            if (player.countMark('charge') < 2) return false;
            return game.hasPlayer((i) => i.countCards('h', 'ying') > 0);
          },
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:4',
          filterTarget(card, player, target) {
            return target.countCards('h', 'ying') > 0;
          },
          content() {
            'step 0';
            player.loseCharge(2);
            'step 1';
            target.gain(lib.skill.yttl_meiying.getYing(target.countCards('h', 'ying')), 'gain2');
          },
          ai: {
            order: 6,
            result: {
              target: -1
            }
          },
          group: ['yttl_hanmai_damage', 'yttl_hanmai_init'],
          subSkill: {
            damage: {
              trigger: {
                player: 'addCharge'
              },
              forced: true,
              filter(event, player, name) {
                return player.countMark('charge') >= 5;
              },
              content() {
                'step 0';
                player.loseCharge(player.countMark('charge'));
                'step 1';
                player.draw(5);
                'step 2';
                player.damage(3, 'ice', 'nosource', 'nocard');
              }
            },
            init: {
              trigger: {
                global: 'phaseBefore',
                player: ['enterGame', 'swapSeat'],
                target: 'swapSeat'
              },
              forced: true,
              filter(event, player, name) {
                if (name == 'swapSeat') return player.countMark('charge') < 5;
                return (event.name != 'phase' || game.phaseNumber == 0) && player.countMark('charge') < 3;
              },
              content() {
                if (event.triggername == 'swapSeat') {
                  const count = Math.min(2, 5 - player.countMark('charge'));
                  player.addCharge(count);
                } else {
                  const count = Math.min(3, 5 - player.countMark('charge'));
                  player.addCharge(count);
                }
              }
            }
          }
        },
        //成昆  霸天 20240427
        yttl_hunyuan: {
          mod: {
            aiOrder(player, card, num) {
              if (num <= 0 || get.itemtype(card) !== 'card' || get.type(card) !== 'equip') return num;
              let eq = player.getEquip(get.subtype(card));
              if (eq && get.equipValue(card) < get.equipValue(eq)) return 0;
            }
          },
          ai: {
            order: 1,
            result: {
              player: 1
            },
            nokeep: true,
            skillTagFilter(player, tag, arg) {
              if (tag === 'nokeep') {
                return (!arg || arg && arg.card && arg.card.name === 'tao') && player.isPhaseUsing() && !player.getStat().skill.yttl_hunyuan && player.hasCard((card) => card.name !== 'tao', 'h');
              }
            }
          },
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 1,
          position: 'h',
          discard: false,
          lose: false,
          delay: false,
          selectCard: -1,
          filterCard(card, player, event) {
            return lib.filter.cardRecastable(card, player);
          },
          filter(event, player) {
            return player.hasCard((card) => lib.filter.cardRecastable(card, player), 'h');
          },
          contentUse() {
            'step 0';
            const libVcard = lib.inpile.filter(function (name) {
              const Vcard = { name: name };
              if (!get.tag(Vcard, 'damage')) return false;
              const info = get.info(Vcard);
              if (!info.filterTarget) return false;
              const selectTarget = get.select(info.selectTarget);
              if (selectTarget[0] != selectTarget[1] || selectTarget[0] != 1) return false;
              return player.hasUseTarget(Vcard, false);
            });
            if (!libVcard.length) {
              event.finish();
              return;
            }
            const libVcards = [];
            for (let use of libVcard) {
              libVcards.push([get.type(use), '', use]);
              if (use == 'sha') {
                for (var i of lib.inpile_nature) {
                  if (player.hasUseTarget({ name: 'sha', nature: i }, false)) {
                    libVcards.push([get.type(use), '', use, i]);
                  }
                }
              }
            }
            player.
            chooseButton(['混元:是否视为使用一张牌', [libVcards, 'vcard']]).
            set('filterButton', function (button) {
              const player = _status.event.player;
              const Vcard = {
                name: button.link[2],
                nature: button.link[3]
              };
              return player.hasUseTarget(Vcard, false);
            }).
            set('ai', function (button) {
              const player = _status.event.player;
              const Vcard = {
                name: button.link[2],
                nature: button.link[3]
              };
              return player.getUseValue(Vcard, false);
            });
            'step 1';
            if (result.bool) {
              const Vcard = {
                name: result.links[0][2],
                nature: result.links[0][3]
              };
              player.chooseUseTarget(Vcard, true, false, 'nodistance');
            }
          },
          content() {
            'step 0';
            const _args = [
            cards,
            function (player, cards) {
              player.loseToDiscardpile(cards).log = false;
            },
            function (player, cards) {
              const next = player.draw(cards.length);
              next.log = false;
              get.event().getParent('yttl_hunyuan').recastEnd = next;
            }];

            player.recast(..._args);
            event.count = cards.reduce(function (num, card) {
              return num + card.number;
            }, 0);
            'step 1';
            if (!event.recastEnd || !event.recastEnd.result || event.recastEnd.player != player) {
              event.finish();
              return;
            }
            event.newCount = player.getCards('h').reduce(function (num, card) {
              return num + card.number;
            }, 0);
            if (event.newCount == event.count) event.finish();
            'step 2';
            if (event.newCount > event.count) {
              const next = game.createEvent('zhuque_clear');
              next.player = player;
              next.setContent(lib.skill[event.name].contentUse);
              event.finish();
            } else {
              player.draw();
            }
            'step 3';
            const newCount = player.getCards('h').reduce(function (num, card) {
              return num + card.number;
            }, 0);
            if (newCount < event.count) {
              player.draw();
              event.redo();
            }
          }
        },
        yttl_pili: {
          mod: {
            attackRange(player, num) {
              return num + game.roundNumber;
            }
          },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCard'
          },
          filter(event, player) {
            const type = get.type(event.card);
            const number = get.type(event.card);
            if (!get.tag(event.card, 'damage')) return false;
            const range = player.getAttackRange();
            if (typeof number == 'number') {
              if (number >= range) return false;
            }
            return type == 'trick' || type == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name);
          },
          content() {
            trigger.directHit.addArray(game.filterPlayer());
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              return lib.skill.yttl_pili.filter({ card: arg.card }, player);
            }
          }
        },
        yttl_qunce: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:3',
          filter(event, player) {
            return game.hasPlayer((current) => {
              return current.countCards('h') > 0;
            });
          },
          filterTarget(card, player, target) {
            return true; //target.countCards('h')>0;
          },
          selectTarget: -1,
          multitarget: true,
          multiline: true,
          usable: 1,
          content() {
            'step 0';
            player.chooseToDebate(targets);
            'step 1';
            if (result && result.bool && result.opinion) {
              event.opinion = result.opinion;
            } else {
              event.finish();
            }
            'step 2';
            const useCards = get.randomCards(999, function (i) {
              if (get.type(i, null, false) != 'trick') return false;
              if (get.color(i, false) != event.opinion) return false;
              return player.hasUseTarget(i);
            });
            if (!useCards || !useCards.length) {
              event.finish();
              return false;
            }
            const dialog = [`群策:是否选择使用牌堆一张${get.translation(event.opinion)}普通锦囊牌`, useCards];
            player.
            chooseButton(dialog).
            set('filterButton', function (button) {
              const player = _status.event.player;
              const cardx = button.link;
              return player.hasUseTarget(cardx);
            }).
            set('ai', function (button) {
              const player = _status.event.player;
              const cardx = button.link;
              return player.getUseValue(cardx);
            });
            'step 3';
            if (result.bool) {
              player.chooseUseTarget(result.links[0], true, false);
            }
          },
          content_old() {
            'step 0';
            player.chooseToDebate(targets);
            'step 1';
            if (result && result.bool && result.opinion) {
              event.opinion = result.opinion;
            } else {
              event.finish();
            }
            'step 2';
            const suits = function () {
              if (event.opinion == 'red') return ['diamond', 'heart'];
              return ['club', 'spade'];
            }();
            const libVcard = lib.inpile.filter(function (name) {
              if (get.type(name) != 'trick') return false;
              return player.hasUseTarget({ name: name });
            });
            const libVcard1 = [];
            const libVcard2 = [];
            for (let use of libVcard) {
              const type = get.type(use);
              libVcard1.push([suits[0], '', use]);
              libVcard2.push([suits[1], '', use]);
            }
            const dialog = [`群策:是否选择使用一张${get.translation(event.opinion)}普通锦囊牌`, '<div class="text center">' + get.translation(suits[0] + '2') + '</div>', [libVcard1, 'vcard'], '<div class="text center">' + get.translation(suits[1] + '2') + '</div>', [libVcard2, 'vcard']];
            player.
            chooseButton(dialog).
            set('filterButton', function (button) {
              const player = _status.event.player;
              const Vcard = {
                suit: button.link[0],
                name: button.link[2],
                nature: button.link[3]
              };
              return player.hasUseTarget(Vcard);
            }).
            set('ai', function (button) {
              const player = _status.event.player;
              const Vcard = {
                suit: button.link[0],
                name: button.link[2],
                nature: button.link[3]
              };
              return player.getUseValue(Vcard);
            });
            'step 3';
            if (result.bool) {
              const Vcard = {
                suit: result.links[0][0],
                name: result.links[0][2],
                nature: result.links[0][3]
              };
              player.chooseUseTarget(Vcard, true);
            }
          },
          ai: {
            order: 1,
            result: {
              player: 1
            }
          }
        },
        //徐达  20240322 霸天
        yttl_zhenglu: {
          forced: true,
          mod: {
            playerEnabled(card, player, target) {
              if (_status.event.name != 'chooseToUse') return;
              if (player.yttl_zhenglu) return;
              if (_status.currentPhase != player) return;
              if (!['basic', 'trick'].includes(get.type(card))) return;
              var uses = player.getHistory('useCard', function (evt) {
                if (!['basic', 'trick'].includes(get.type(evt.card))) return false;
                return true;
              });
              if (!uses.length) return;
              var use = uses[uses.length - 1];
              if (!use.targets.length) return;
              player.yttl_zhenglu = true;
              var bool = lib.filter.targetEnabled2(card, player, target);
              delete player.yttl_zhenglu;
              return bool;
            },
            cardEnabled(card, player) {
              if (_status.event.name != 'chooseToUse') return;
              if (_status.currentPhase != player) return;
              if (!['basic', 'trick'].includes(get.type(card))) return;
              var uses = player.getHistory('useCard', function (evt) {
                if (!['basic', 'trick'].includes(get.type(evt.card))) return false;
                return true;
              });
              if (!uses.length) return;
              var use = uses[uses.length - 1];
              if (!use.targets.length) return;
              return true;
            },
            selectTarget(card, player, range) {
              if (_status.event.name != 'chooseToUse') return;
              if (_status.currentPhase != player) return;
              if (!['basic', 'trick'].includes(get.type(card))) return;
              var uses = player.getHistory('useCard', function (evt) {
                if (!['basic', 'trick'].includes(get.type(evt.card))) return false;
                return true;
              });
              if (!uses.length) return;
              var use = uses[uses.length - 1];
              if (!use.targets.length) return;
              range[1] = use.targets.length;
              range[0] = 1;
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCard'
          },
          filter(event, player) {
            if (_status.currentPhase != player) return false;
            if (!['basic', 'trick'].includes(get.type(event.card))) return false;
            return event.targets.length;
          },
          content() {}
        },
        yttl_chengzhi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'dieEnd'
          },
          forced: true,
          init(player) {
            if (game.online) return;
            var players = game.filterPlayer();
            if (players.length == 2) {
              player.addAdditionalSkills('yttl_chengzhi', 'jydiy_wumuyishu_skill');
              return;
            }
            var targets = player.getFriends(true);
            targets.forEach((i) => {
              players.remove(i);
            });
            if (players.length - targets.length >= 2) {
              player.addAdditionalSkills('yttl_chengzhi', 'jydiy_wumuyishu_skill');
            }
          },
          content() {
            var players = game.filterPlayer();
            if (players.length == 2) {
              player.addAdditionalSkills('yttl_chengzhi', 'jydiy_wumuyishu_skill');
              return;
            }
            var targets = player.getFriends(true);
            targets.forEach((i) => {
              players.remove(i);
            });
            if (players.length - targets.length >= 2) {
              player.addAdditionalSkills('yttl_chengzhi', 'jydiy_wumuyishu_skill');
            }
          }
        },
        yttl_hulve: {
          selectTarget(card, player) {
            var range,
              info = get.info(card);
            var select = get.copy(info.selectTarget);
            if (select == undefined) {
              if (info.filterTarget == undefined) return [0, 0];
              range = [1, 1];
            } else if (typeof select == 'number') range = [select, select];else
            if (get.itemtype(select) == 'select') range = select;else
            if (typeof select == 'function') range = select(card, player);
            //game.checkMod(card, player, range, 'selectTarget', player);
            //if (info.singleCard && info.filterAddedTarget) return [range[0] * 2, range[1] * 2];
            if (Array.isArray(range) && range[1] == -1) {
              var num = game.countPlayer((i) => player.canUse(card, i));
              range[0] = num;
              range[1] = num;
            }
            return range;
          },
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            player: 'useCardToPlayered'
          },
          check(event, player) {
            var range = lib.skill.yttl_hulve.selectTarget(event.card, player);
            if (Array.isArray(range) && range[1] - event.targets.length) return !get.tag(event.card, 'norepeat');
            return true;
          },
          filter(event, player) {
            if (!['basic', 'trick'].includes(get.type(event.card))) return false;
            if (event.parent.triggeredTargets3.length != event.targets.length) return false;
            var range = lib.skill.yttl_hulve.selectTarget(event.card, player);
            return range[1] != event.targets.length;
          },
          content() {
            var range = lib.skill.yttl_hulve.selectTarget(trigger.card, player);
            var num = range[1] - trigger.targets.length;
            if (num > 0) {
              trigger.parent.effectCount += num;
              game.log(trigger.card, '额外结算' + num + '次');
            } else {
              player.draw(-num);
            }
          }
        },
        //邪周芷若
        //光宗 剑影 遗命  霸天20230701
        //白蟒鞭的技能
        jydiy_baimangbian_skill2: {
          trigger: { player: 'useCard2' },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            return game.hasPlayer(function (current) {
              return !event.targets.includes(current) && player.canUse(event.card, current);
            });
          },
          forced: true,
          equipSkill: true,
          content() {
            'step 0';
            player.
            chooseTarget([1, 2], '白蟒鞭', '是否为' + get.translation(trigger.card) + '增加至多2个目标?', function (card, player, target) {
              return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
            }).
            set('sourcex', trigger.targets).
            set('ai', function (target) {
              var player = _status.event.player;
              return get.effect(target, _status.event.card, player, player);
            }).
            set('card', trigger.card);
            'step 1';
            if (result.bool) {
              event.targets = result.targets;
            } else {
              event.finish();
            }
            'step 2';
            player.line(event.targets);
            trigger.targets.addArray(event.targets);
          }
        },
        jydiy_baimangbian_skill: {
          trigger: {
            player: 'useCardToPlayered'
          },
          filter(event, player) {
            if (event.target.isLinked()) return false;
            return event.card && event.card.name == 'sha';
          },
          check(event, player) {
            return get.attitude(player, event.target) <= 0;
          },
          logTarget: 'target',
          content() {
            trigger.target.link();
          },
          equipSkill: true
        },
        //遗命
        yttl_yiming: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: ['gainAfter', 'equipAfter']
          },
          init(player, skill) {
            player.storage[skill] = false;
            if (!player.storage[skill + '2'])
            player.storage[skill + '2'] = {
              jian: false,
              dao: false
            };
          },
          forced: true,
          dutySkill: true,
          forced: true,
          group: ['yttl_yiming_fail'],
          derivation: ['yttl_guangzong', 'yttl_jianying'],
          filter(event, player) {
            if (player.storage.yttl_yiming) return false;
            if (event.name == 'equip' && event.card) {//QQQ
              if (event.card.name == 'jydiy_yitianjian') player.storage['yttl_yiming2'].jian = true;
              if (event.card.name == 'jydiy_tulongdao') player.storage['yttl_yiming2'].dao = true;
            }
            var dao = false,
              jian = false;
            player.getAllHistory('gain', function (evt) {
              if (evt && evt.cards && evt.cards.length) {
                evt.cards.filter(function (i) {
                  if (i.name == 'jydiy_yitianjian') jian = true;
                  if (i.name == 'jydiy_tulongdao') dao = true;
                });
              }
            });
            if (!dao) dao = player.storage['yttl_yiming2'].dao;
            if (!jian) jian = player.storage['yttl_yiming2'].jian;
            return dao && jian;
          },
          content() {
            'step 0';
            player.storage.yttl_yiming = true;
            player.awakenSkill('yttl_yiming');
            game.log(player, '使命成功');
            player.loseMaxHp();
            'step 1';
            player.chooseDrawRecover('摸两张牌或回复1点体力', true, 2, 1);
            'step 2';
            player.addSkills('yttl_guangzong');
          },
          subSkill: {
            fail: {
              audio: 'yttl_yiming',
              trigger: {
                player: 'dying'
              },
              forced: true,
              dutySkill: true,
              forced: true,
              filter(event, player) {
                if (player.storage.yttl_yiming) return false;
                return true;
              },
              content() {
                'step 0';
                player.storage.yttl_yiming = true;
                player.awakenSkill('yttl_yiming');
                game.log(player, '使命失败');
                player.loseMaxHp();
                'step 1';
                player.recover(2);
                'step 2';
                player.addSkills('yttl_jianying');
              }
            }
          }
        },
        //剑影
        yttl_jianying: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'equipBegin'
          },
          forced: true,
          init(player) {
            player.countCards('e', function (cardx) {
              if (get.subtype(cardx) != 'equip1') return false;
              if (cardx.name == 'jydiy_tulongdao_re') return false;
              if (cardx.name == 'jydiy_yitianjian_re') return false;
              if (cardx.name == 'jydiy_baimangbian') return false;
              if (cardx.origin_name) return false;
              if (!lib.inpile.includes(cardx.name)) {
                return false;
              }
              var origin_name = cardx.name;
              var str = get.translation(origin_name);
              if (str.indexOf('刀') == -1 && str.indexOf('剑') == -1 && str.indexOf('鞭') == -1) return false;
              var new_name = 'jydiy_yitianjian_re';
              if (str.includes('刀')) new_name = 'jydiy_tulongdao_re';
              if (str.includes('鞭')) new_name = 'jydiy_baimangbian';
              player.removeEquipTrigger(cardx);
              cardx.name = new_name;
              cardx.origin_name = origin_name;
              player.addEquipTrigger(cardx);
            });
          },
          onremove(player) {
            player.countCards('e', function (cardx) {
              if (get.subtype(cardx) != 'equip1') return false;
              if (!cardx.origin_name) return false;
              if (cardx.name != 'jydiy_tulongdao_re' && cardx.name != 'jydiy_yitianjian_re' && cardx.name != 'jydiy_baimangbian') return false;
              player.removeEquipTrigger(cardx);
              var origin_name = cardx.origin_name;
              delete cardx.origin_name;
              cardx.name = origin_name;
              player.addEquipTrigger(cardx);
            });
          },
          filter(event, player) {
            if (get.subtype(event.card) != 'equip1') return false;
            const name = event.card.name;
            if (name == 'jydiy_tulongdao_re' || name == 'jydiy_yitianjian_re' || name == 'jydiy_baimangbian') return false;
            const str = get.translation(name);
            return str.includes('刀') || str.includes('剑') || str.includes('鞭');
          },
          content() {
            trigger.pushHandler(function (event, option) {
              if (event.step == 3 && option.state == 'begin') {
                if (event.card.origin_name) return false;
                if (!lib.inpile.includes(event.card.name)) return false;
                const origin_name = event.card.name;
                let new_name = 'jydiy_yitianjian_re';
                const str = get.translation(origin_name);
                if (str.includes('刀')) new_name = 'jydiy_tulongdao_re';
                if (str.includes('鞭')) new_name = 'jydiy_baimangbian';
                event.card.name = new_name;
                event.card.origin_name = origin_name;
              }
            });
          }
        },
        //光宗
        yttl_guangzong: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: ['jydiy_jiuyinzhengjing_skill', 'jydiy_wumuyishu_skill'],
          ai: {
            effect: {
              target(card, player, target) {
                if (player == target && (card.name == 'jydiy_jiuyinzhengjing' || card.name == 'jydiy_jiuyinzhengjing')) {
                  return 0;
                }
              }
            }
          }
        },
        //刀光 假象 20230630
        yttl_daoguang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            return game.hasPlayer(function (current) {
              if (player == current) return false;
              return current.countGainableCards(player, 'e');
            });
          },
          filterTarget(card, player, target) {
            if (player == target) return false;
            return target.countGainableCards(player, 'e') > 0;
          },
          content() {
            'step 0';
            if (target.countGainableCards(player, 'e')) {
              player.gainPlayerCard('e', target, true);
            }
            'step 1';
            if (result.bool) {
              if (
              game.hasPlayer(function (current) {
                return current != target && current != player && target.inRange(current);
              }))
              {
                target.
                chooseTarget(function (card, player, target) {
                  var source = _status.event.source;
                  return target != source && target != player && player.inRange(target);
                }, true).
                set('ai', function (target) {
                  var player = _status.event.player;
                  return get.damageEffect(target, player, player);
                }).
                set('source', player);
              } else {
                event.finish();
              }
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool && result.targets && result.targets.length) {
              target.line(result.targets[0], 'green');
              result.targets[0].damage(target);
            }
          },
          ai: {
            order: 8.5,
            result: {
              target(player, target) {
                return -1;
              }
            }
          },
          threaten: 0.5
        },
        //绝张无忌 霸天 2023.06
        yttl_tianni_new2: {
          charlotte: true,
          trigger: { global: 'roundEnd' },
          forced: true,
          lastDo: true,
          popup: false,
          forceDie: true,
          content() {
            if (!_status.phaseLoop_reverse) return;
            const allPlayer = game.players.slice(0).concat(game.dead);
            const firstPlayer = allPlayer.find((i) => i.seatNum == 1);
            allPlayer.sortBySeat(firstPlayer);
            allPlayer.remove(firstPlayer);
            const swapSeat = [];
            while (allPlayer.length > 1) {
              const player1 = allPlayer.shift();
              const player2 = allPlayer.pop();
              swapSeat.push([player1, player2]);
            }
            while (swapSeat.length) {
              const changed = swapSeat.shift();
              game.jy_swapSeat(changed[0], changed[1]);
            }
            delete _status.phaseLoop_reverse;
            player.removeSkill('yttl_tianni_new2');
          }
        },
        yttl_tianni_new: {
          init(player, name) {
            if (!player.storage[name]) player.storage[name] = [1, 1];
          },
          group: 'yttl_tianni_new_draw',
          subSkill: {
            draw: {
              forced: true,
              trigger: {
                player: 'phaseDrawBegin2'
              },
              filter(event, player) {
                if (!_status.phaseLoop_reverse) return false;
                return !event.numFixed;
              },
              content() {
                if (!player.storage.yttl_tianni_new) player.storage.yttl_tianni_new = [1, 1];
                trigger.num += player.storage.yttl_tianni_new[1];
              }
            }
          },
          mod: {
            attackRange(player, distance) {
              if (!player.storage.yttl_tianni_new) player.storage.yttl_tianni_new = [1, 1];
              if (!_status.phaseLoop_reverse) return distance + player.storage.yttl_tianni_new[0];
              return distance;
            },
            maxHandcard(player, num) {
              if (!player.storage.yttl_tianni_new) player.storage.yttl_tianni_new = [1, 1];
              if (!_status.phaseLoop_reverse) return num + player.storage.yttl_tianni_new[0];
              return num;
            },
            cardUsable(card, player, num) {
              if (!player.storage.yttl_tianni_new) player.storage.yttl_tianni_new = [1, 1];
              if (card.name == 'sha' && _status.phaseLoop_reverse) return num + player.storage.yttl_tianni_new[1];
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'roundBegin'
          },
          filter(event, player) {
            if (_status.phaseLoop_reverse) return false;
            //if(game.countPlayer2(lib.filter.all,true)<=2) return false;
            return true;
          },
          check(trigger, player) {
            let goon = true;
            const target1 = trigger.player.previous;
            const target2 = trigger.player.next;
            const att1 = get.sgn(get.attitude(player, target1));
            const att2 = get.sgn(get.attitude(player, target2));
            if (att1 == att2) {
              goon = false;
            } else if (att1 < att2) {
              goon = false;
            }
            return goon;
          },
          content() {
            const allPlayer = game.players.slice(0).concat(game.dead);
            const firstPlayer = allPlayer.find((i) => i.seatNum == 1);
            allPlayer.sortBySeat(firstPlayer);
            allPlayer.remove(firstPlayer);
            const swapSeat = [];
            while (allPlayer.length > 1) {
              const player1 = allPlayer.shift();
              const player2 = allPlayer.pop();
              swapSeat.push([player1, player2]);
            }
            while (swapSeat.length) {
              const changed = swapSeat.shift();
              game.jy_swapSeat(changed[0], changed[1]);
            }
            _status.phaseLoop_reverse = true;
            player.addSkill('yttl_tianni_new2');
          }
        },
        yttl_tianyu_new: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'chooseToUse',
          filterCard(card, player) {
            return card.suit == 'spade';
          },
          position: 'hes',
          viewAs: {
            name: 'jydiy_yungongliaoshang'
          },
          viewAsFilter(player) {
            if (!player.countCards('hes', { suit: 'spade' })) return false;
          },
          prompt: '将一张♠️️牌当运功疗伤使用',
          check(card) {
            return 8 - get.value(card);
          },
          group: ['yttl_tianyu_new_judge', 'yttl_tianyu_new_judge2'],
          subSkill: {
            judge2: {
              forced: true,
              lastDo: true,
              trigger: {
                global: 'phaseJudge'
              },
              filter(event, player) {
                if (event.excluded) return false;
                if (event.cancelled) return false;
                var name = event.card.viewAs || event.card.name;
                if (name != 'jydiy_yungongliaoshang') return false;
                if (event.player != player && event.card.useCardSource != player) return false;
                if (game.roundNumber <= 1) return false;
                return true;
              },
              content() {
                'step 0';
                event.count = game.roundNumber - 1;
                if (event.count > 8) event.count = 8;
                'step 1';
                event.count--;
                trigger.player.judge(trigger.card).set('type', 'phase');
                'step 2';
                if (result) {
                  var name = trigger.card.viewAs || trigger.card.name;
                  var next = game.createEvent(name);
                  next.setContent(lib.card[name].effect);
                  next._result = result;
                  next.cards = [trigger.card];
                  if (!trigger.card.viewAs) next.card = trigger.card;else
                  next.card = { name: name };
                  next.player = trigger.player;
                }
                if (event.count > 0) {
                  event.goto(1);
                }
              }
            },
            judge: {
              forced: true,
              trigger: {
                player: 'useCardEnd'
              },
              filter(event, player) {
                if (!event.card || event.card.name != 'jydiy_yungongliaoshang') return false;
                if (!event.cards || !event.cards.length) return false;
                if (!event.targets || !event.targets.length) return false;
                return event.targets[0].getCards('j').includes(event.cards[0]);
              },
              content() {
                trigger.cards[0].useCardSource = player;
              }
            }
          }
        },
        yttl_tianyang_new: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'judgeEnd'
          },
          filter(event, player) {
            if (!player.storage.yttl_tianni_new) player.storage.yttl_tianni_new = [1, 1];
            if (!(player.storage.yttl_tianni_new[0] < 9 || player.storage.yttl_tianni_new[1] < 9)) return false;
            return event.result.suit == 'spade';
          },
          content() {
            'step 0';
            if (!player.storage.yttl_tianni_new) player.storage.yttl_tianni_new = [1, 1];
            if (player.storage.yttl_tianni_new[0] < 9 && player.storage.yttl_tianni_new[1] < 9) {
              player.
              chooseControl().
              set('choiceList', ['攻击范围和手牌上限+1', '摸牌阶段的摸牌数和出牌阶段使用【杀】的额定次数+1']).
              set('prompt', '选择令【天逆】中的一项红色数字+1').
              set('ai', () => {
                return [0, 1].randomGet();
              });
            } else if (player.storage.yttl_tianni_new[0] < 9) {
              player.storage.yttl_tianni_new[0]++;
              event.finish();
            } else if (player.storage.yttl_tianni_new[1] < 9) {
              player.storage.yttl_tianni_new[1]++;
              event.finish();
            } else {
              event.finish();
            }
            'step 1';
            if (result) {
              player.storage.yttl_tianni_new[result.index]++;
            }
          }
        },
        //邪蛛儿
        yttl_wandu: {
          //棉花糖
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'gainEnd'
          },
          forced: true,
          filter(event, player) {
            if (!event.cards) return;
            var count = player.countCards('hej', function (card) {
              if (!event.cards.includes(card)) return false;
              var name = card.name,
                nature = get.nature(card, false),
                str = get.translation(card),
                subtype = get.subtype(card, false);
              if (name == 'sha' && nature == 'jy_du') return true;
              if (subtype == 'jy_duyao') return true;
              return str.includes('毒');
            });
            return count > 0;
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2(event.name), function (card, player, target) {
              return target != player;
            }).
            set('ai', function (target) {
              var player = _status.event.player;
              return get.damageEffect(target, player, player, 'jy_du');
            });
            'step 1';
            if (result.bool) {
              result.targets[0].damage(1, player, 'nocard', 'jy_du');
            }
          }
        },
        yttl_qianzhu: {
          //
          group: 'yttl_qianzhu_recover',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: '_lianhuanBegin' },
          forced: true,
          filter(event, player) {
            var damage = event._trigger;
            return damage.nature == 'jy_du';
          },
          content() {
            trigger.pushHandler(function (event, option) {
              if (event.yttl_qianzhu) return;
              if (event.step == 2 && option.state == 'begin') {
                event.set('yttl_qianzhu', true);
                event._args[0] += 1;
              }
            });
            //trigger.setContent(lib.skill.yttl_qianzhu.contentx);
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                if (!get.tag(card, 'jy_duDamage')) return;
                if (target.isDamaged() && target.hp > 1) {
                  if (player == target) return [0.5, 2];
                  return [0.5, 0.7];
                } else {
                  if (player == target) return [0.5, 0];
                  return [0.5, 0];
                }
              }
            }
          },
          subSkill: {
            recover: {
              audio: 'yttl_qianzhu',
              trigger: { player: 'damageEnd' },
              forced: true,
              filter(event, player) {
                return event.num > 0 && event.nature == 'jy_du';
              },
              content() {
                player.recover(1 + trigger.num);
              }
            }
          }
        },
        yttl_gonghuan: {
          //假象
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filter(event, player) {
            return (
              game.countPlayer(function (current) {
                return get.jy_deEffect(current);
              }) > 0 && !get.jy_deEffect(player));

          },
          selectTarget: 1,
          usable: 1,
          filterTarget(card, player, target) {
            return get.jy_deEffect(target);
          },
          content() {
            var count1 = 0,
              count2 = 0,
              count3 = 0,
              count4 = 0;
            //复制废除装备区
            var hasDisabledSlot = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5', 'equip6'];
            for (var k = 0; k < hasDisabledSlot.length; k++) {
              if (target.hasDisabledSlot(hasDisabledSlot[k])) {
                player.disableEquip(hasDisabledSlot[k])._triggered = null;
                count1 = 1;
              }
            }
            //复制横置、翻面
            if (target.isTurnedOver()) {
              player.turnOver(true);
              count2 = 1;
            }
            if (target.isLinked()) {
              player.link(true);
              count3 = 1;
              //延时锦囊牌
            }
            target.getCards('j', function (judge) {
              if ((judge.viewAs || judge.name) != 'jydiy_yungongliaoshang') {
                player.$gain2(judge);
                player.addJudge(game.createCard(judge));
                count4 = 1;
              }
            });
            var num = count1 + count2 + count3 + count4;
            player.draw(3 * num);
          },
          ai: {
            order: 8,
            result: {
              player(player, target) {
                var num = 0;
                var hasDisabledSlot = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5', 'equip6'];
                var bool1 = false;
                for (var k = 0; k < hasDisabledSlot.length; k++) {
                  if (target.hasDisabledSlot(hasDisabledSlot[k])) {
                    if (!bool1) {
                      bool1 = true;
                      num += 3;
                    }
                    if (player.getEquip(hasDisabledSlot[k])) {
                      num -= 3;
                    } else {
                      num -= 1;
                    }
                  }
                }
                if (target.isTurnedOver()) {
                  num += 1;
                }
                if (target.isLinked()) {
                  num += 2;
                }
                var bool2 = false;
                target.getCards('j', function (judge) {
                  if ((judge.viewAs || judge.name) != 'jydiy_yungongliaoshang') {
                    if (!bool2) {
                      bool2 = true;
                      num += 3;
                    }
                    num -= 2;
                  }
                });
                return num;
              }
            },
            expose: 0.4,
            threaten: 3
          }
        },
        //邪赵敏-霸天20220723
        yttl_jieqin: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            global: ['logSkillBegin', 'useSkillBegin']
          },
          popup: false,
          limited: true,
          logTarget: 'player',
          check(event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          filter(event, player) {
            if (player.storage.yttl_jieqin) return false;
            if (player == event.player) return false;
            var name = event.skill;
            if (lib.translate[name] && lib.translate[name + '_info']) {
              var info = lib.translate[name + '_info'];
              if (info.includes('同性')) return true;
              if (info.includes('异性')) return true;
              if (info.includes('男性')) return true;
              if (info.includes('女性')) return true;
            }
            return false;
          },
          content() {
            player.storage.yttl_jieqin = true;
            player.awakenSkill('yttl_jieqin');
            trigger.player.removeSkills(trigger.skill);
            player.addSkills(trigger.skill);
          },
          mark: true,
          intro: {
            content: 'limited'
          },
          init(player, skill) {
            player.storage[skill] = false;
          }
        },
        yttl_hehe: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            global: 'phaseJieshuBegin'
          },
          filter(event, player) {
            if (!event.player.isIn()) return false;
            var players = [],
              num = 0;
            var damages = event.player.getHistory('sourceDamage');
            for (var i of damages) {
              players.add(i.player);
              num += i.num;
            }
            if (num >= 2) return true;
            if (players.length >= 2) return true;
            return false;
          },
          check(event, player) {
            var att = get.attitude(player, event.player);
            if (att >= 0) return true;
            if (player.countCards('h', (card) => card.name == 'du') && !event.player.hasSkillTag('nodu')) return true;
            if (event.player.hasSkillTag('nogain')) return true;
            return false;
          },
          logTarget: 'player',
          content() {
            'step 0';
            player.draw(3);
            'step 1';
            if (player.countCards('h') && trigger.player != player) {
              player.
              chooseCard('选择交给' + get.translation(trigger.player) + '一张手牌', 'h', true).
              set('ai', function (card) {
                if (_status.event.att > 0) {
                  return 11 - get.value(card);
                } else {
                  if (card.name == 'du') return 20;
                  return 7 - get.value(card);
                }
              }).
              set('att', get.attitude(player, trigger.player));
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              player.line(trigger.player);
              player.give(result.cards, trigger.player, true);
              //trigger.player.gain(result.cards,'giveAuto',player);
            }
          }
        },
        yttl_ruanjin2: {
          audio: 'yttl_ruanjin',
          enable: 'chooseToUse',
          filterCard(card, player) {
            return true;
          },
          position: 'hes',
          viewAs: {
            name: 'jydiy_shixiangruanjinsan'
          },
          check(card) {
            var val = get.value(card);
            return 6 - val;
          },
          viewAsFilter(player) {
            if (!player.countCards('hes')) return false;
            var evt = _status.event.getParent('jydiy_shixiangruanjinsan_skill');
            if (!evt) return false;
            var trigger = evt._trigger;
            if (!trigger) return false;
            if (!trigger.player) return false;
            if (!trigger.player.isLinked()) return false;
            return true;
          },
          prompt: '将一张牌当十香软筋散使用',
          ai: {
            customEnable: true,
            skillTagFilter(player, tag, arg) {
              if (!player.countCards('hes')) return false;
              if (!arg) return false;
              if (!arg.name) return false;
              if (!arg.target) return false;
              if (arg && arg.name != 'jydiy_shixiangruanjinsan') return false;
              if (!arg.target.isLinked()) return false;
              if (player == arg.target) return false;
              return true;
            }
          }
        },
        yttl_ruanjin: {
          audio: 'ext:金庸群侠传/peiyin:3',
          group: 'yttl_ruanjin2',
          trigger: {
            global: 'useCard2'
          },
          forced: true,
          filter(event, player) {
            if (event.card.name != 'tiesuo') return false;
            var bool =
            player.countCards('he', function (card) {
              return lib.filter.cardDiscardable(card, player, 'yttl_ruanjin');
            }) > 0;
            if (!bool) return false;
            return game.hasPlayer(function (current) {
              return !event.targets.includes(current) && event.player.canUse(event.card, current);
            });
          },
          content() {
            'step 0';
            player.chooseCardTarget({
              prompt: get.prompt(event.name),
              prompt2: '弃置一张牌为' + get.translation(trigger.card) + '增加一个目标',
              filterCard(card, player) {
                return lib.filter.cardDiscardable.apply(this, arguments);
              },
              position: 'he',
              filterTarget(card, player, target) {
                var evt = _status.event;
                return !evt._trigger.targets.includes(target) && evt._trigger.player.canUse(evt._trigger.card, target);
              },
              ai1(card) {
                return 5 - get.value(card);
              },
              ai2(target) {
                var evt = _status.event;
                return get.effect(target, evt._trigger.card, evt._trigger.player, evt.player);
              },
              _trigger: trigger
            });
            'step 1';
            if (result.bool) {
              player.discard(result.cards[0]);
              var evt = trigger;
              trigger.targets.add(result.targets[0]);
              if (evt.cards.length) {
                game.log(result.targets[0], '额外成为了', evt.card, '(', evt.cards, ')', '的目标');
              } else {
                game.log(result.targets[0], '额外成为了', evt.card, '的目标');
              }
            }
          }
        },
        //少林三渡---霸天20220517
        yttl_wujie_new2: {
          audio: 'yttl_wujie_new',
          trigger: { player: 'phaseDrawBegin2' },
          forced: true,
          filter(event, player) {
            return !event.numFixed;
          },
          content() {
            trigger.num++;
          }
        },
        yttl_wujie_new: {
          group: 'yttl_wujie_new2',
          audio: 'ext:金庸群侠传/peiyin:2',
          //trigger:{player:["chooseToUseBefore","chooseUseTargetBefore"]},
          ai: { jiuOther: true },
          charlotte: true,
          firstDo: true,
          popup: false,
          forced: true,
          checkTarget(card, player, target, now) {
            if (game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player) == false) return false;
            if (game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target) == false) return false;
            const filter = get.info(card).filterTarget;
            if (typeof filter == 'boolean') return filter;
            if (typeof filter == 'function') return Boolean(filter(card, player, target) || filter(card, target, target));
            return false;
          },
          mod: {
            maxHandcard(player, num) {
              return num + 3;
            },
            attackRange(player, distance) {
              return distance + 3;
            },
            playerEnabled(card, player, target, now) {
              if (player.yttl_wujie_new_target) return;
              if (player == target && card.name == 'sha') return true;
              player.yttl_wujie_new_target = true;
              const bool = lib.skill.yttl_wujie_new.checkTarget(card, player, target);
              delete player.yttl_wujie_new_target;
              if (bool === true) return bool;
            },
            cardSavable(card, player, target) {
              if (player['yttl_wujie_new_target3']) return;
              const savable = get.info(card).savable;
              if (!savable) return;
              player['yttl_wujie_new_target3'] = true;
              const mod = game.checkMod(card, player, target, 'unchanged', 'cardSavable', player);
              delete player['yttl_wujie_new_target3'];
              if (mod !== false) return true;
            },
            cardEnabled(card, player, event) {
              if (player['yttl_wujie_new_target2']) return;
              const enable = get.info(card).enable;
              if (!enable) return;
              player['yttl_wujie_new_target2'] = true;
              const bool = lib.filter.cardEnabled(card, player, 'forceEnable');
              delete player['yttl_wujie_new_target2'];
              if (bool) return bool;
            },
            cardUsable(card, player, num) {
              if (typeof num == 'number') return num + 3;
            },
            selectTarget(card, player, range) {
              //if(Array.isArray(range) && range[1]==-1) return;
              const type = get.type(card);
              const info = get.info(card);
              if (type == 'basic' || type == 'trick') {
                if (info.notarget) return;
                if (info.multitarget) return;
                if (info.singleCard) return;
                range[0] = 1;
                if (Array.isArray(range) && range[1] == -1) {
                  if (!info.toself) {
                    range[1] = Infinity;
                  } else {
                    range[1] = 4;
                  }
                } else range[1] += 3;
              }
              if (type == 'equip' || type == 'delay') {
                if (info.notarget) return;
                if (info.multitarget) return;
                if (info.singleCard) return;
                range[0] = 1;
                range[1] = 1;
              }
            }
          }
        },
        yttl_fumo_new2: {
          audio: 'yttl_fumo_new',
          trigger: {
            player: 'turnOverEnd'
          },
          forced: true,
          filter(event, player) {
            return !player.isTurnedOver() && player.hasUseTarget({ name: 'sha', nature: 'jy_du' });
          },
          content() {
            player.chooseUseTarget('###是否发动【伏魔】？###视为使用一张【毒杀】', { name: 'sha', nature: 'jy_du' }, false);
          }
        },
        yttl_fumo_new: {
          group: 'yttl_fumo_new2',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'turnOverEnd' },
          filter(event, player) {
            if (
            !game.hasPlayer(function (target) {
              return !target.isLinked();
            }))

            return false;
            return player.isTurnedOver();
          },
          logTarget(event, player) {
            return game.filterPlayer(function (target) {
              return !target.isLinked();
            });
          },
          async content(event, trigger, player) {
            const players = game.filterPlayer();
            for (var i of players) {
              if (!i.isLinked()) await i.link();
            }
          },
          ai: {
            expose: 0.1,
            threaten: 2
          }
        },
        yttl_jingang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          //audioname:["yttl_kongjian"],
          audioname2: {
            //武将名:引用的技能配音
            //"yttl_zhangsanfeng":"yttl_taiji",
            yttl_kongjian: 'yttl_jingang_kongjian'
          },
          enable: ['chooseToUse', 'chooseToRespond'],
          filterCard() {
            return false;
          },
          selectCard: [0, 1],
          init(player, skill) {

            //player.addMark("yttl_jingang",8);
          }, viewAsFilter(player) {
            if (player.countMark('yttl_jingang') >= 8) return false;
            return true;
          },
          viewAs: { name: 'wuxie' },
          marktext2: '刚',
          markimage: 'extension/金庸群侠传/image/icon/jyjingang.jpg',
          //mark:true,
          intro: {
            name2: '金刚',
            content: '你已经发动#次金刚.'
            //content:'mark',
          },
          precontent() {
            player.turnOver();
            player.addMark('yttl_jingang', 1, false);
            event.result.card = { name: 'wuxie' };
          },
          prompt: '每局限8次,当你需要使用【金刚护体】时,你可以翻面,视为你使用了此牌.',
          check() {
            return 1;
          }
        },
        //说不得--20220420棉花糖
        //行囊
        yttl_xingnang: {
          intro: {
            name: '乾坤一气袋',
            markcount: 'expansion',
            content(content, player) {
              var content = player.getExpansions('yttl_xingnang');
              return '共有' + get.cnNumber(content.length) + '张牌';
            }
          },
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          },
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            player: 'drawBegin'
          },
          forced: true,
          marktext: '袋',
          group: ['yttl_xingnang_source', 'yttl_xingnang_lose'],
          init(player) {
            player.addToExpansion(get.cards(10), player, 'draw').gaintag.add('yttl_xingnang');
          },
          contentx() {
            'step 0';
            var cardx = player.getExpansions('yttl_xingnang');
            if (cardx.length < event.num) {
              player.addToExpansion(get.cards(10), player, 'draw').gaintag.add('yttl_xingnang');
              event.redo();
            }
            'step 1';
            if (event.num < 1) return;
            var list = [];
            var cardx = player.getExpansions('yttl_xingnang');
            for (var i = 0; i < event.num; i++) {
              list.push(cardx[i]);
            }
            var next = player.gain(list);
            game.log(player, '从<乾坤一气袋中>摸了', event.num, '张牌');
            if (event.$draw) {
              player.$draw(list.length);
            }
            if (event.gaintag) next.gaintag.addArray(event.gaintag);
            event.result = list;
            //trigger.changeToZero();
          },
          content() {
            trigger.setContent(lib.skill.yttl_xingnang.contentx);
          },
          subSkill: {
            source: {
              trigger: {
                source: 'damageAfter'
              },
              filter(event, player) {
                if (
                game.countPlayer(function (current) {
                  return current.countCards('ej') && current != player;
                }) > 0 &&
                player.getExpansions('yttl_xingnang').length < 10)

                return true;
                return false;
              },
              prompt(event, player) {
                return '是否发动【行囊】选择场上的至多两张牌并将其置入<乾坤一气袋>？';
              },
              check(event, player) {
                return 1;
              },
              content() {
                'step 0';
                event.num = Math.min(10 - player.getExpansions('yttl_xingnang').length, 2);
                'step 1';
                player.
                chooseTarget('请选择将一名角色的牌置入<乾坤一气袋>.', function (card, player, target) {
                  return target != player && target.countCards('ej');
                }).
                set('ai', function (target) {
                  const player = _status.event.player;
                  return get.effect(
                    target,
                    {
                      name: 'loseCard_ai',
                      position: 'ej',
                      select: [1, event.num]
                    },
                    player,
                    player
                  );
                });
                'step 2';
                if (result.bool) {
                  player.choosePlayerCard(result.targets[0], '请选择至多' + get.translation(event.num) + '张牌置入<乾坤一气袋>.', [1, event.num], 'ej').set('ai', lib.card.loseCard_ai.button);
                }
                'step 3';
                if (result.bool) {
                  for (var i of result.cards) {
                    event.num -= result.cards.length;
                    player.addToExpansion(i, player, 'draw').gaintag.add('yttl_xingnang');
                    game.log(player, '将', i, '置入了<乾坤一气袋>');
                  }
                  if (
                  event.num > 0 &&
                  game.countPlayer(function (current) {
                    return current.countCards('ej') && current != player;
                  }) > 0)

                  event.goto(1);
                }
              }
            },
            lose: {
              audio: 'yttl_xingnang',
              trigger: {
                global: 'phaseJieshuBegin'
              },
              check(event, player) {
                return 1;
              },
              filter(event, player) {
                var cards = [];
                var history = event.player.getHistory('lose', function (evt) {
                  for (var i of evt.cards) {
                    if (get.position(i) == 'd') cards.add(i);
                  }
                });
                return cards.length && event.player != player && player.getExpansions('yttl_xingnang').length < 10;
              },
              prompt(event, player) {
                return '是否发动【行囊】选择' + get.translation(event.player) + '本回合失去的一张牌并将其置入<乾坤一气袋>';
              },
              content() {
                'step 0';
                var cards = [];
                var history = trigger.player.getHistory('lose', function (evt) {
                  for (var i of evt.cards) {
                    if (get.position(i) == 'd') cards.add(i);
                  }
                });
                if (cards.length)
                player.chooseButton(['行囊:选择一张牌将其置入<乾坤一气袋>', [cards, 'vcard']]).set('ai', function (button) {
                  return 8 - get.value(button.link);
                });
                'step 1';
                if (result.bool) {
                  player.addToExpansion(result.links[0], player, 'draw').gaintag.add('yttl_xingnang');
                }
              }
            }
          }
        },
        yttl_poxi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'dying'
          },
          filter(event, player) {
            return player.getExpansions('yttl_xingnang').length;
          },
          check(event, player) {
            return 1;
          },
          content() {
            'step 0';
            var cards = player.getExpansions('yttl_xingnang');
            event.list = [];
            for (var i of cards) {
              event.list.push(i);
            }
            'step 1';
            if (event.list.length > 1) {
              player.chooseCardButton('将<乾坤一气袋>的牌分配给任意角色', true, event.list, [1, event.list.length]).set('ai', function (button) {
                if (ui.selected.buttons.length == 0) return 1;
                return 0;
              });
            } else if (event.list.length == 1) {
              event._result = { links: event.list.slice(0), bool: true };
            } else if (event.list.length <= 0) event.finish();
            'step 2';
            if (result.bool) {
              for (var i of result.links) {
                event.list.remove(i);
              }
              event.togive = result.links.slice(0);
              player.
              chooseTarget('将' + get.translation(result.links) + '交给一名角色', true).
              set('ai', function (target) {
                var att = get.attitude(_status.event.player, target);
                if (_status.event.enemy) {
                  return -att;
                } else if (att > 0) {
                  return att / (1 + target.countCards('h'));
                } else {
                  return att / 100;
                }
              }).
              set('enemy', get.value(event.togive[0], player, 'raw') < 0);
            }
            'step 3';
            if (result.targets.length) {
              result.targets[0].gain(event.togive, 'draw');
              player.line(result.targets[0], 'green');
              game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
              event.goto(1);
            }
          },
          ai: {
            threaten: 1.3,
            expose: 0.6,
            effect: {
              target(card, player, target) {
                var cardx = target.getExpansions('yttl_xingnang');
                if (target.hp <= 1 && cardx.length > 1) {
                  if (get.tag(card, 'damage')) return [1, 3];
                  if (get.tag(card, 'loseHp')) return [1, 3];
                  if (player.hasSkillTag('jueqing', false, target)) return [1, 3];
                  if (!target.hasFriend()) return;
                }
                return [1, 1];
              },
              player(card, player, target) {
                if (!target) return;
                var cardx = target.getExpansions('yttl_xingnang');
                if (target.hp <= 1 && cardx.length > 1) {
                  if (get.tag(card, 'damage')) return [3, 1];
                  if (get.tag(card, 'loseHp')) return [3, 1];
                  if (player.hasSkillTag('jueqing', false, target)) return [3, 1];
                  if (player.hasCard('tao', 'h')) return [3, 1];
                  if (!target.hasFriend()) return;
                }
                return [1, 1];
              }
            }
          }
        },
        //空见
        //释厄、渡劫--霸天20220701
        yttl_dujiekj: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseJieshuBegin'
          },
          forced: true,
          content() {
            'step 0';
            player.draw(player.hp, 'visible');
            'step 1';
            if (result && result.length) {
              var num = 0;
              for (var i of result) {
                num += i.number;
              }
              if (num > 13) player.loseHp(1);
            }
          }
        },
        yttl_shie2: {
          audio: 'yttl_shie',
          trigger: {
            player: 'dying'
          },
          charlotte: true,
          forced: true,
          popup: false,
          content() {
            'step 0';
            event.isbool = false;
            var damage = trigger.reason;
            var evt = trigger.getParent('yttl_shie');
            if (damage && damage.card && damage.card.yttl_shie) {
              if (evt.player == player && damage.source == evt.target) {
                evt.noDying = false;
                event.isbool = true;
                game.log('失败!!');
              }
            }
            'step 1';
            if (event.isbool) {
              player.loseMaxHp();
            }
            'step 2';
            if (event.isbool) {
              if (player.isDamaged()) player.recover();
            }
          }
        },
        yttl_shie: {
          derivation: ['yttl_jingang', 'yttl_dujiekj'],
          mark: true,
          dutySkill: true,
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          init(player, skill) {
            player.storage[skill] = false;
          },
          ai: {
            order: 10,
            result: {
              target: 1
            }
          },
          filterTarget(card, player, target) {
            return target != player;
          },
          filter(event, player) {
            if (player.storage.yttl_shie) return false;
            return true;
          },
          content() {
            'step 0';
            var cards = get.cards(13);
            target.showCards(cards);
            game.cardsGotoOrdering(cards);
            event.cards = cards;
            event.noDying = true;
            player.addTempSkill('yttl_shie2');
            'step 1';
            if (event.cards.length) {
              var list = event.cards.filter((card) => get.tag(card, 'damage') && target.canUse(card, player, false));
              if (list.length > 1) {
                var next = target.chooseCardButton('选择对' + get.translation(player) + '使用的牌', event.cards);
                next.set('filterButton', function (button) {
                  return _status.event.sourcex.includes(button.link);
                });
                next.set('sourcex', list);
              } else if (list.length == 1) {
                event._result = { bool: true, links: list };
              } else {
                event.goto(4);
              }
            } else {
              event.goto(4);
            }
            'step 2';
            if (result.bool) {
              event._result = { bool: false };
              var next = target.useCard(result.links[0], player, 'noai');
              next.card.yttl_shie = true;
              event.cards.remove(result.links[0]);
            } else {
              event.goto(4);
            }
            'step 3';
            if (player.isAlive()) {
              event.goto(1);
            }
            'step 4';
            if (event.noDying) {
              game.log(player, '成功完成使命');
              player.addSkills('yttl_jingang');
              target.jy_chooseSkill(lib.jy_shaolin_skills);
              //目标从少林技能库选择获得技能的代码//
            } else {
              game.log(player, '使命失败');
              player.addSkills('yttl_dujiekj');
              //target.addSkills('七伤');
            }
            player.removeSkill('yttl_shie2');
            player.storage.yttl_shie = true;
            player.awakenSkill('yttl_shie');
          }
        },
        ////空见金刚配音
        yttl_jingang_kongjian: {
          audio: 'ext:金庸群侠传/peiyin:2'
        },
        //铁躯---藏海20220417
        yttl_tiequ: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            target: 'useCardToTargeted',
            player: 'useCardToTargeted'
          },
          forced: true,
          filter(event, player) {
            if (event.player == event.target) return false;
            if (!event.isFirstTarget) return false;
            if (!get.tag(event.card, 'damage')) return false;
            if (!['basic', 'trick'].includes(get.type(event.card))) return false;
            var number = event.card.number;
            if (typeof number != 'number') return false;
            return number >= player.hp + 7;
          },
          content() {
            if (trigger.target == player) {
              trigger.parent.excluded.add(player);
            } else {
              trigger.directHit.addArray(
                game.filterPlayer(function (current) {
                  return current != player;
                })
              );
            }
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              var target = arg.target;
              var card = arg.card;
              if (!target || !card) return false;
              if (player == target) return false;
              if (!get.tag(card, 'damage')) return false;
              if (!['basic', 'trick'].includes(get.type(card))) return false;
              var number = card.number;
              if (typeof number != 'number') return false;
              return number >= player.hp + 7;
            },
            effect: {
              target(card, player, target) {
                if (player == target) return;
                if (!get.tag(card, 'damage')) return;
                if (!['basic', 'trick'].includes(get.type(card))) return;
                var number = card.number;
                if (typeof number != 'number') return;
                if (number >= target.hp + 7) {
                  return 'zerotarget';
                }
              }
            }
          }
        },
        //汝阳王-20220411吃朵棉花糖
        yttl_pingluan: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            var list = player.getEnemies().sortBySeat();
            if (list.length) {
              for (var i of list) {
                if (i.countCards('he')) return true;
              }
            }
            return false;
          },
          content() {
            'step 0';
            event.list = [];
            for (var i of player.getEnemies()) {
              if (i.countCards('he')) event.list.add(i);
            }
            'step 1';
            if (event.list.length) {
              target = event.list.shift();
              player.discardPlayerCard(target, 'he', true);
              if (target.countCards('he') == 1) target.damage(player, 'noCard');
            } else {
              event.finish();
            }
            'step 2';
            if (result.cards?.length) {
              for (var i of result.cards) {
                if (get.type(i) == 'equip') player.draw(i.length);
              }
            }
            event.goto(1);
          },
          ai: {
            order: 12,
            result: {
              player: 1
            }
          }
        },
        yttl_weijiao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCardToTargeted'
          },
          usable: 1,
          filter(event, player) {
            return event.card && event.targets && event.targets.length > 1 && event.card.name != 'nanman';
          },
          check(event, player) {
            return get.attitude(player, event.target) < 0;
          },
          content() {
            if (trigger.targets.includes(player)) {
              if (trigger.player == player) trigger.targets.remove(player);
            }
            event.cardx = trigger.card;
            trigger.card.name = 'nanman';
            game.log(event.cardx, '改为了', trigger.card);
          }
        },
        yttl_qianglu: {
          group: ['yttl_qianglu_remove'],
          subSkill: {
            remove: {
              trigger: {
                global: 'gameStart',
                player: 'enterGame'
              },
              popup: false,
              forced: true,
              filter(event, player) {
                return player.identity != 'zhu';
              },
              content() {
                player.removeSkill('yttl_qianglu');
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'damageEnd' },
          _priority: -8,
          zhuSkill: true,
          forced: true,
          filter(event, player) {
            if (!player.hasZhuSkill('yttl_qianglu')) return false;
            if (!event.source) return false;
            if (event.source == player) return false;
            if (event.num < 1) return false;
            var group = 'wu';
            if (lib.jy_changeSkill) group = 'jy_yuan';
            if (group != event.source.group) return false;
            return event.card && event.card.name == 'nanman';
          },
          content() {
            'step 0';
            trigger.source.chooseBool('强虏:是否令' + get.translation(player) + '摸一张牌？').set('ai', function () {
              if (get.attitude(trigger.source, player) > 0) return true;
              return false;
            });
            'step 1';
            if (result.bool) {
              trigger.source.line(player);
              player.draw();
            }
          }
        },
        //SP阳顶天--20220405霸天
        //牵移正式版-棉花糖
        yttl_qianyi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          mark: true,
          marktexe: '移',
          intro: {
            name: '乾坤大挪移',
            content(storage, player) {
              var str = '';
              var num1 = ui.cardPile.childNodes.length;
              var num2 = ui.discardPile.childNodes.length;
              if (num1) str += '牌堆:' + get.translation(num1) + '<br>';
              if (num2) str += '弃牌堆:' + get.translation(num2) + '<br>';
              if (player.isUnderControl(true)) return str;
              return '';
            }
          },
          subSkill: { hs: { sub: true } },
          filter(event, player) {
            return !player.hasSkill('yttl_qianyi_hs');
          },
          content() {
            'step 0';
            player.
            chooseControl('交换牌堆', 'cancel2').
            set('prompt', '交换牌堆:交换牌堆和弃牌堆的牌').
            set('ai', function () {
              var num1 = ui.cardPile.childNodes.length;
              var num2 = ui.discardPile.childNodes.length;
              if (num1 > num2 || num2 == 0) return '交换牌堆';
              return 'cancel2';
            });
            'step 1';
            if (result.control == '交换牌堆') {
              player.jy_swapCardPile().set('noswap', true);
              player.addTempSkill('yttl_qianyi_hs');
              player.$fullscreenpop('乾坤大挪移', 'thunder');
            }
          },
          ai: {
            order: 12,
            result: {
              player(player) {
                var num1 = ui.cardPile.childNodes.length;
                var num2 = ui.discardPile.childNodes.length;
                if (num1 > num2 || num2 == 0) return 10;
                return 0;
              }
            }
          }
        },
        yttl_kangyuan: {
          group: 'yttl_kangyuan2',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'washCard' },
          forced: true,
          content() {
            'step 0';
            //player.gainMaxHp(); //取消增加体力上限
            'step 1';
            //if(player.isDamaged()) player.recover();  //取消回复体力
            event.listEquip = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
            'step 2';
            if (event.listEquip.length) {
              var pos = event.listEquip.shift();
              if (player.hasEmptySlot(pos)) {
                var equip = get.cardPile(function (card) {
                  return get.type(card) == 'equip' && get.subtype(card) == pos;
                });
                if (equip) {
                  player.equip(equip);
                  player.$gain2(equip, false);
                }
              }
              event.redo();
            }
            'step 3';
            player.draw(5);
          }
        },
        yttl_kangyuan2: {
          audio: 'yttl_kangyuan',
          trigger: { global: 'useCardEnd' },
          filter(event, player) {
            if (event.card.name != 'nanman') return false;
            var num = game.countPlayer2(function (current) {
              return current.getHistory('respond', function (evt) {
                return evt.card && evt.card.name == 'sha' && evt.respondTo && evt.respondTo[1] == event.card;
              }).length;
            });
            return num > 0;
          },
          forced: true,
          content() {
            var num = game.countPlayer2(function (current) {
              return current.getHistory('respond', function (evt) {
                return evt.card && evt.card.name == 'sha' && evt.respondTo && evt.respondTo[1] == trigger.card;
              }).length;
            });
            player.draw(num);
          }
        },
        yttl_mingzun: {
          group: ['yttl_mingzun_remove'],
          subSkill: {
            remove: {
              trigger: { global: 'gameStart', player: 'enterGame' },
              popup: false,
              forced: true,
              filter(event, player) {
                return player.identity != 'zhu';
              },
              content() {
                player.removeSkill('yttl_mingzun');
              }
            }
          },
          zhuSkill: true,
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: { global: 'damageSource' },
          forced: true,
          filter(event, player) {
            if (!player.hasZhuSkill('yttl_mingzun')) return false;
            if (!event.source) return false;
            if (event.source == player) return false;
            var group = 'wu';
            if (lib.jy_changeSkill) group = 'jy_yuan';
            if (group != event.source.group) return false;
            return event.num > 0;
          },
          content() {
            'step 0';
            trigger.source.chooseBool('是否发动' + get.translation(player) + '的〖明尊〗？').set('ai', function () {
              if (get.attitude(trigger.player, player) > 0) return true;
              return false;
            });
            'step 1';
            if (result.bool) {
              trigger.source.line(player);
              var cards = get.cards(trigger.num * 10);
              game.cardsDiscard(cards);
              game.log(cards, '置入了弃牌堆');
            }
          }
        },
        //斗酒神僧
        yttl_jiyang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'gainEnd'
          },
          forced: true,
          filter(event, player, name) {
            if (!event.cards) return false;
            return player.getCards('h', function (cardx) {
              return event.cards && event.cards.includes(cardx) && get.color(cardx) == 'red';
            }).length;
          },
          content() {
            'step 0';
            var filter = trigger.cards;
            event.togain = player.getCards('h', function (cardx) {
              return filter.includes(cardx) && get.color(cardx) == 'red';
            });
            var dialog = ui.create.dialog('<img style=width:150px  src=extension/金庸群侠传/image/button/jy_button_jiuyang.jpg><br>是否将' + get.translation(event.togain) + '交给一名其他角色或弃置之,你摸等量的牌.', event.togain, true, 'hidden');
            player.
            chooseTarget(dialog, function (card, player, target) {
              return target != player && !target.hasSkill('yttl_jiyang');
            }).
            set('ai', function (target) {
              return get.attitude(player, target);
            });
            'step 1';
            if (result.bool) {
              player.line(result.targets[0], 'fire');
              //result.targets[0].gain(event.togain,player,'give');
              player.give(event.togain, result.targets[0], true);
            } else {
              player.lose(event.togain, ui.ordering);
              //player.discard(event.togain);
            }
            player.draw(event.togain.length);
          }
        },
        yttl_jiusheng: {
          group: 'yttl_jiusheng_lose',
          subSkill: {
            lose: {
              trigger: { player: 'useCardEnd' },
              forced: true,
              filter(event, player) {
                return event.card && event.card.name == 'jiu';
              },
              content() {
                'step 0';
                var num = player.maxHp;
                if (num > 1) {
                  player.loseMaxHp();
                }
                'step 1';
                if (player.maxHp == player.hp) {
                  player.draw(2);
                } else {
                  player.recover();
                }
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'chooseToUse',
          filterCard(card, player) {
            return card.suit == 'spade';
          },
          position: 'hs',
          viewAs: { name: 'jiu' },
          viewAsFilter(player) {
            if (!player.countCards('hs', { suit: 'spade' })) return false;
            return true;
          },
          prompt: '将一张♠️️手牌当酒使用',
          check(card) {
            if (_status.event.type == 'dying') return 1 / Math.max(0.1, get.value(card));
            return 4 - get.value(card);
          },
          ai: { threaten: 1.5 }
        },
        //张无忌赵敏20220217---霸天20220123
        yttl_shiquan: {
          enable: 'phaseUse',
          filterCard: true,
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          check(card) {
            return 12 - get.value(card);
          },
          position: 'e',
          filter(event, player) {
            if (!player.countCards('e')) return false;
            return game.hasPlayer((target) => lib.skill.yttl_shiquan.filterTarget(null, player, target));
          },
          filterTarget(card, player, target) {
            return get.jy_deEffect(target);
          },
          content() {
            'step 0';
            var controls = [];
            if (target.isLinked()) {
              controls.push('解除横置');
            }
            if (target.isTurnedOver()) {
              controls.push('解除翻面');
            }
            if (
            target.countCards('j', function (card) {
              return (card.viewAs || card.name) != 'jydiy_yungongliaoshang';
            }))
            {
              controls.push('弃置负面判定牌');
            }
            if (target.countDisabledSlot()) {
              controls.push('复原装备栏');
            }
            if (controls.length == 1) {
              event._result = { control: controls[0] };
            } else {
              target.chooseControl(controls).ai = function () {
                var num = 0;
                var control = '解除横置';
                var temp = target.countCards('j', function (card) {
                  return (card.viewAs || card.name) != 'jydiy_yungongliaoshang';
                });
                if (temp > num) {
                  num = 2 * temp;
                  control = '弃置负面判定牌';
                }
                if (target.isTurnedOver()) {
                  if (3 > num) {
                    num = 3;
                    control = '解除翻面';
                  }
                }
                if (target.isLinked()) {
                  if (1 > num) {
                    num = 1;
                    control = '解除横置';
                  }
                }
                temp = target.countDisabledSlot() * 2;
                if (temp > num) {
                  control = '复原装备栏';
                }
                return control;
              };
            }
            'step 1';
            if (result.control == '解除横置') {
              target.link();
            } else if (result.control == '解除翻面') {
              target.turnOver();
            } else if (result.control == '复原装备栏') {
              if (target.hasDisabledSlot('equip1')) target.enableEquip('equip1');
              if (target.hasDisabledSlot('equip2')) target.enableEquip('equip2');
              if (target.hasDisabledSlot('equip3')) target.enableEquip('equip3');
              if (target.hasDisabledSlot('equip4')) target.enableEquip('equip4');
              if (target.hasDisabledSlot('equip5')) target.enableEquip('equip5');
            } else if (result.control == '弃置负面判定牌') {
              target.discard(
                target.getCards('j', function (card) {
                  return (card.viewAs || card.name) != 'jydiy_yungongliaoshang';
                })
              );
            }
          },
          ai: {
            order: 12,
            result: {
              target(player, target) {
                var num = 0;
                var temp = target.countCards('j', function (card) {
                  return (card.viewAs || card.name) != 'jydiy_yungongliaoshang';
                });
                if (temp > num) num = 2 * temp;
                if (target.isTurnedOver()) {
                  if (3 > num) num = 3;
                }
                if (target.isLinked()) {
                  if (1 > num) num = 1;
                }
                temp = target.countDisabledSlot() * 2;
                if (temp > num) num = temp;
                return num;
              }
            }
          }
        },
        //挪移
        yttl_nuoyi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return player.hasCard((card) => lib.skill.yttl_nuoyi.filterCard(card, player), 'h');
          },
          ai: {
            basic: { order: 12 },
            result: {
              player: 1
            }
          },
          content() {
            'step 0';
            event.suit = cards[0].suit;
            event.players = game.filterPlayer((i) => i != player);
            player.moveCard(true, event.players, player, { suit: event.suit }).set('nojudge', true);
            'step 1';
            if (result && result.bool) {
              if (player.canMoveCard(null, true, event.players, player, { suit: event.suit })) player.moveCard(event.players, player, { suit: event.suit }).set('nojudge', true);
            }
          },
          enable: 'phaseUse',
          filterCard(card, player) {
            var suit = card.suit;
            if (!lib.suit.includes(suit)) return false;
            var players = game.filterPlayer((i) => i != player);
            return player.canMoveCard(null, true, players, player, { suit: card.suit });
          },
          usable: 1,
          position: 'h',
          check(card) {
            var suit = card.suit;
            var player = get.player();
            var players = game.filterPlayer((i) => i != player);
            var bool = player.canMoveCard(true, true, players, player, { suit: card.suit });
            if (bool) return 8 - get.value(card);
            return 0;
          }
        },
        //归田
        yttl_guitian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseJieshuBegin' },
          filter(event, player) {
            return (
              player.countCards('he', function (card) {
                if (get.position(card) != 'e' && !get.tag(card, 'damage')) return false;
                return lib.filter.cardDiscardable(card, player, 'yttl_guitian');
              }) > 0);

          },
          content() {
            'step 0';
            var cards = player.getCards('he', function (card) {
              if (get.position(card) != 'e' && !get.tag(card, 'damage')) return false;
              return lib.filter.cardDiscardable(card, player, 'yttl_guitian');
            });
            player.discard(cards);
            event.cards = cards;
            'step 1';
            player.draw(cards.length * 2);
          }
        },
        //都大锦---霸天20220123
        yttl_yabiao: {
          audio: 'ext:金庸群侠传/peiyin:4',
          group: ['yttl_yabiao_draw', 'yttl_yabiao_damage'],
          subSkill: {
            mark: {
              mark: true,
              marktext: '镖'
            },
            draw: {
              trigger: { global: 'phaseZhunbeiBegin' },
              forced: true,
              filter(event, player) {
                return player.storage.yttl_yabiao && player.storage.yttl_yabiao[event.player.playerid];
              },
              content() {
                var gain = player.storage.yttl_yabiao[trigger.player.playerid][1];
                if (gain.length) {
                  player.draw(gain.length);
                  trigger.player.gain(gain, 'gain2', 'fromStorage');
                } else {
                  player.damage(trigger.player);
                }
                delete player.storage.yttl_yabiao[trigger.player.playerid];
                player.markSkill('yttl_yabiao');
              }
            },
            damage: {
              trigger: { player: 'damageEnd' },
              forced: true,
              filter(event, player) {
                if (!event.source || !event.source.isIn() && event.num < 10) return false;
                var storage = player.storage.yttl_yabiao;
                if (!storage) return false;
                for (var i in storage) {
                  if (storage[i][1].length) return true;
                }
                return false;
              },
              content() {
                'step 0';
                var cards = [];
                var storage = player.storage.yttl_yabiao;
                for (var i in storage) {
                  cards.addArray(storage[i][1]);
                }
                trigger.source.chooseCardButton('是否选择一张"镖"获得之', cards).set('ai', function (button) {
                  return get.value(button.link);
                });
                'step 1';
                if (result.links?.length) {
                  trigger.source.gain(result.links, 'gain2', 'fromStorage');
                  var storage = player.storage.yttl_yabiao;
                  for (var i in storage) {
                    storage[i][1].removeArray(result.links);
                  }
                  if (!player.storage.yttl_shizui) player.storage.yttl_shizui = [];
                  player.storage.yttl_shizui.add(trigger.source);
                }
                player.markSkill('yttl_yabiao');
              }
            }
          },
          intro: {
            onunmark(storage, player) {
              var cards = [];
              if (!storage) return;
              for (var i in storage) {
                cards.addArray(storage[i][1]);
              }
              if (cards.length) {
                game.cardsDiscard(cards);
                player.$throw(cards, 1000);
                game.log(cards, '被置入了弃牌堆');
              }
            },
            markcount(storage) {
              var cards = [];
              if (!storage) return;
              for (var i in storage) {
                cards.addArray(storage[i][1]);
              }
              return cards.length;
            },
            mark(dialog, storage, player) {
              if (storage) {
                for (var i in storage) {
                  dialog.addText(get.translation(storage[i][0]));
                  dialog.addAuto(storage[i][1]);
                }
              }
            }
          },
          trigger: { global: 'phaseDiscardAfter' },
          filter(event, player) {
            if (player.hasSkill('yttl_yabiao_mark')) return false;
            if (event.player != player && event.player.isIn()) {
              return event.cards && event.cards.length && event.cards.jyCanGainD('od').length;
            }
            return false;
          },
          check(event, player) {
            return get.attitude(player, event.player) > 0 && event.cards.jyCanGainD('od').length > 1;
          },
          logTarget: 'player',
          content() {
            player.addTempSkill('yttl_yabiao_mark', 'roundStart');
            var list = trigger.cards.jyCanGainD('od');
            player.$gain2(list);
            game.log(player, '把', list, '置于侠客牌上');
            game.cardsGotoSpecial(list);
            if (!player.storage.yttl_yabiao) player.storage.yttl_yabiao = {};
            if (!player.storage.yttl_yabiao[trigger.player.playerid]) player.storage.yttl_yabiao[trigger.player.playerid] = [trigger.player, []];
            player.storage.yttl_yabiao[trigger.player.playerid][1].addArray(list);
            player.markSkill('yttl_yabiao');
          }
        },
        yttl_shizui: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'useCard2' },
          forced: true,
          filter(event, player) {
            const storage = player.storage.yttl_shizui;
            if (!storage) return false;
            if (!storage.length) return false;
            if (!event.targets || !event.targets.length || !event.targets.includes(player)) return false;
            if (event.card.name != 'sha' && !(get.type(event.card) == 'trick' && get.tag(event.card, 'damage'))) return false;
            if (player.countCards('he') == 0) return false;
            return game.hasPlayer(function (current) {
              return !event.targets.includes(current) && storage.includes(current) && event.player.canUse(event.card, current, false);
            });
          },
          content() {
            'step 0';
            var next = player.chooseCardTarget({
              position: 'he',
              selectTarget: [1, Infinity],
              filterCard: lib.filter.cardDiscardable,
              filterTarget(card, player, target) {
                var trigger = _status.event._trigger;
                return !trigger.targets.includes(target) && player.storage.yttl_shizui.includes(target) && trigger.player.canUse(trigger.card, target, false);
              },
              ai1(card) {
                return get.unuseful(card) + 9;
              },
              ai2(target) {
                var trigger = _status.event._trigger;
                var player = _status.event.player;
                return get.effect(target, trigger.card, trigger.player, player);
              },
              prompt: get.prompt('yttl_shizui'),
              prompt2: lib.translate.yttl_shizui_info,
              _trigger: trigger
            });
            'step 1';
            if (result.bool) {
              var targets = result.targets;
              player.discard(result.cards);
              trigger.targets.addArray(targets);
            }
          }
        },
        //渡劫
        yttl_wujie1: {
          audio: 'yttl_wujie',
          //trigger:{player:"chooseToUseBefore"},
          ai: { jiuOther: true },
          charlotte: true,
          firstDo: true,
          popup: false,
          forced: true,
          mod: {
            playerEnabled(card, player, target, now) {
              if (player['yttl_wujie1_target']) return;
              if (player == target && card.name == 'sha') return true;
              player['yttl_wujie1_target'] = true;
              var bool = lib.filter.targetEnabled2(card, player, target);
              delete player['yttl_wujie1_target'];
              if (bool === true) return bool;
            },
            cardSavable(card, player, target) {
              if (player['yttl_wujie1_target3']) return;
              const savable = get.info(card).savable;
              if (!savable) return;
              player['yttl_wujie1_target3'] = true;
              var mod = game.checkMod(card, player, target, 'unchanged', 'cardSavable', player);
              delete player['yttl_wujie1_target3'];
              if (mod !== false) return true;
            },
            cardEnabled(card, player, event) {
              if (player['yttl_wujie1_target2']) return;
              const enable = get.info(card).enable;
              if (!enable) return;
              player['yttl_wujie1_target2'] = true;
              var bool = lib.filter.cardEnabled(card, player, 'forceEnable');
              delete player['yttl_wujie1_target2'];
              if (bool) return bool;
            },
            targetInRange(card, player, target, now) {
              return true;
            },
            cardUsable(card, player, num) {
              return Infinity;
            },
            selectTarget(card, player, range) {
              //if(Array.isArray(range) && range[1]==-1) return;
              var type = get.type(card);
              var info = get.info(card);
              if (type == 'basic' || type == 'trick') {
                if (info.notarget) return;
                if (info.multitarget) return;
                if (info.singleCard) return;
                range[0] = 1;
                range[1] = Infinity;
              }
              if (type == 'equip' || type == 'delay') {
                if (info.notarget) return;
                if (info.multitarget) return;
                if (info.singleCard) return;
                range[0] = 1;
                range[1] = 1;
              }
            }
          }
        },
        yttl_wujie: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          content() {
            'step 0';
            player.turnOver();
            'step 1';
            player.draw(3);
            player.skip('phaseDiscard');
            player.addTempSkill('yttl_wujie1', 'phaseJieshuBegin');
          },
          ai: { basic: { order: 11 }, result: { player: 1 } }
        },
        yttl_exiang: {
          group: 'yttl_exiang_use',
          subSkill: {
            use: {
              audio: 'ext:金庸群侠传/peiyin:2',
              trigger: { player: 'useCardEnd' },
              forced: true,
              filter(event, player) {
                if (event.card.name != 'wuxie') return false;
                var color = get.color(event.card);
                if (color != 'red' && color != 'black') return false;
                var sha =
                color == 'red' ?
                { name: 'sha', nature: 'fire' } :
                {
                  name: 'sha',
                  nature: 'jy_du'
                };
                return player.hasUseTarget(sha, color != 'red' ? false : null);
              },
              content() {
                var color = get.color(trigger.card);
                var sha =
                color == 'red' ?
                { name: 'sha', nature: 'fire' } :
                {
                  name: 'sha',
                  nature: 'jy_du'
                };
                var next = player.chooseUseTarget(false, sha, get.prompt('yttl_exiang')); //此处原为中文
                var str = color != 'red' ? '无距离限制的' : '伤害基数为2的';
                next.set('prompt2', '视为使用一张' + str + get.translation(sha));
                if (color == 'red') {
                  next.set('oncard', function (card, player) {
                    var evt = this;
                    if (!evt.baseDamage) evt.baseDamage = 1;
                    evt.baseDamage += 1;
                  });
                } else {
                  next.set('nodistance', true);
                }
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'turnOverEnd' },
          forced: true,
          content() {
            var cardname = player.isTurnedOver() ? 'tiesuo' : 'wuxie';
            var card = get.cardPile(function (card) {
              return card.name == cardname;
            });
            if (!card) {
              player.chat('无牌可得了吗');
              game.log('但是牌堆里面已经没有', { name: cardname }, '了!');
              event.finish();
              return;
            }
            player.gain(card, 'gain2', 'log');
          }
        },
        //丁敏君
        //-----------------诽议
        yttl_feiyi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 1,
          forced: true,
          trigger: { global: 'discardBegin' },
          filter(event, player) {
            return event.player != player && event.player.isAlive();
          },
          content() {
            'step 0';
            var suits = [];
            trigger.player.countCards('e', function (card) {
              suits.add(card.suit);
            });
            var aicheck = get.attitude(player, trigger.player) < 0;
            player.
            chooseControl(['heart2', 'diamond2', 'club2', 'spade2', 'cancel2']).
            set('ai', function (event) {
              if (!_status.event.aicheck) return 'cancel2';
              var suits = _status.event.suits;
              if (suits.length) return suits.randomGet() + '2';
              return ['heart2', 'diamond2', 'club2', 'spade2'].randomGet();
            }).
            set('aicheck', aicheck).
            set('suits', suits).
            set('prompt', get.prompt2(event.name, trigger.player));
            'step 1';
            if (result && result.control && result.control != 'cancel2') {
              event.choice = result.control.slice(0, result.control.length - 1);
              var next = game.createEvent('yttl_feiyi_after', false);
              next.player = player;
              next.target = trigger.player;
              next.forceDie = true;
              event.next.remove(next);
              next.choiceSuit = event.choice;
              next._trigger = trigger;
              trigger.after.push(next);
              next.setContent(function () {
                var suit = event.choiceSuit;
                for (var i of trigger.cards) {
                  if (i.suit == suit) {
                    return;
                  }
                }
                var bool =
                target.countCards('he', function (card) {
                  return card.suit == suit && lib.filter.cardDiscardable(card, target, 'yttl_feiyi_after');
                }) > 0;
                if (bool)
                target.
                chooseToDiscard('he', true, function (card, player) {
                  return card.suit == _status.event.suitx && lib.filter.cardDiscardable.apply(this, arguments);
                }).
                set('suitx', suit);
              });
            } else {
              player.getStat('triggerSkill')[event.name]--;
            }
          }
        },
        //------------争锋
        yttl_zhengfeng: {
          subSkill: {
            off: {
              mark: true,
              marktext: '争',
              intro: { content: '你本轮已发动【争锋】.' }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'equipEnd' },
          //round:1,
          forced: true,
          //check:function(event,player){
          //    var att=get.attitude(player,event.player);
          //    if(att<0) return 10;
          //   if(att>0) return 5;
          //    return true;
          //},
          //"prompt":function(event,player){
          //    var num1=Math.min(5,Math.abs(player.getAttackRange()-(event.player).getAttackRange()))
          //    return '是否发动<争锋>?'+'你摸'+num1+'张牌;'+'或者令'+get.translation(event.player)+'弃置'+num1+'张牌?';
          //},
          filter(event, player) {
            if (player.hasSkill('yttl_zhengfeng_off')) return false;
            var range = player.getAttackRange();
            return get.subtype(event.card) == 'equip1' && event.player != player && event.player.getAttackRange() > range;
          },
          content() {
            'step 0';
            num2 = Math.min(5, Math.abs(player.getAttackRange() - trigger.player.getAttackRange()));
            event.num2 = num2;
            var str1 = '令' + get.translation(trigger.player) + '弃' + get.cnNumber(num2, true) + '张牌';
            var str2 = '令' + get.translation(player) + '摸' + get.cnNumber(num2, true) + '张牌';
            player.chooseControl('弃牌', '摸牌', 'cancel2').set('prompt', '是否发动【争锋】？<br><br><div class="text">弃牌:' + str1 + '</div><br><div class="text">摸牌:' + str2 + '</div></br>').ai = function () {
              var att1 = get.attitude(player, trigger.player);
              if (att1 > 0) return '摸牌';
              if (att1 < 0) return '弃牌';
              return '摸牌';
            };
            'step 1';
            if (result.control && result.control != 'cancel2') {
              var num2 = event.num2;
              if (result.control == '弃牌') {
                //player.line(trigger.player,'green');
                trigger.player.chooseToDiscard(num2, true, 'he');
              } else if (result.control == '摸牌') {
                //player.line(player,'green');
                player.draw(num2);
              }
              player.addTempSkill(event.name + '_off', 'roundStart');
            }
          }
        },
        //绝张三丰
        yttl_sixiang: {
          subSkill: {
            heart: { sub: true },
            diamond: { sub: true },
            club: { sub: true },
            spade: { sub: true }
          },
          trigger: { player: 'useCardEnd' },
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            var suit = event.card.suit;
            if (suit && ['heart', 'diamond', 'club', 'spade'].includes(suit)) {
              return !player.hasMark('yttl_sixiang_' + suit);
            }
            return false;
          },
          marktext: '象',
          intro: {
            name: '四象',
            content(storage, player) {
              var str = '';
              var list = ['heart', 'diamond', 'club', 'spade'];
              for (var e of list) {
                if (player.hasMark('yttl_sixiang_' + e)) str += '<img style=width:15px height:15px src=extension/金庸群侠传/image/icon/jy_avatar_' + e + '.jpg>:' + get.translation(player.countMark('yttl_sixiang_' + e)) + '张&ensp;&ensp;';
              }
              return str;
            }
          },
          popup: false,
          forced: true,
          content() {
            'step 0';
            var suit = trigger.card.suit;
            player.addMark('yttl_sixiang_' + suit, 1, false);
            player.markSkill('yttl_sixiang');
            'step 1';
            var list = ['heart', 'diamond', 'club', 'spade'];
            for (var e of list) {
              if (!player.hasMark('yttl_sixiang_' + e)) return;
            }
            for (var j of list) {
              player.removeMark('yttl_sixiang_' + j, 1, false);
            }
            if (player.hasUseTarget({ name: 'sha' }, false)) player.chooseUseTarget('四象:是否视为使用一张没有距离限制的【杀】？', { name: 'sha' }, false, 'nodistance');
          }
        },
        yttl_liangyi: {
          audio: 'ext:金庸群侠传/peiyin:3',
          //trigger:{player:'phaseUseBegin'},
          usable: 1,
          enable: 'phaseUse',
          ai: { order: 12, result: { player: 1 }, threaten: 1.5 },
          content() {
            //player.addTempSkill('yttl_liangyi2','phaseUseEnd');
            var red = get.randomCardsNum(function (card) {
              return get.color(card) == 'red';
            }, 'cardPile');
            var black = get.randomCardsNum(function (card) {
              return get.color(card) == 'black';
            }, 'cardPile');
            if (red == black) {
              game.log('牌堆卡牌红黑颜色数量相等!');
              if (player.canUse({ name: 'wuzhong' }, player)) {
                player.useSkill('yttl_taiji');
              }
              //player.popup('悲剧!','fire');
              return;
            }
            var color = red > black ? 'red' : 'black';
            var num = red - black;
            if (num < 0) num = -num;
            if (num > 35) num = 35;
            var cards = get.randomCards(
              num,
              function (card) {
                return get.color(card) == color;
              },
              'cardPile'
            );
            //game.log(cards)
            player.gain(cards, 'log', true);
          }
        },
        //俞莲舟
        yttl_juehu_h: {},
        yttl_juehu_e: {},
        yttl_juehu_j: {},
        yttl_juehu: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return game.hasPlayer((i) => lib.skill.yttl_juehu.filterTarget(null, player, i));
          },
          filterTarget(card, player, target) {
            var bool1 = !player.hasSkill('yttl_juehu_h');
            var bool2 = !player.hasSkill('yttl_juehu_e');
            var bool3 = !player.hasSkill('yttl_juehu_j');
            if (bool1 && target.countDiscardableCards(player, 'h') == 1 && target.countCards('h') == 1) {
              return true;
            }
            if (bool2 && target.countDiscardableCards(player, 'e') == 1 && target.countCards('e') == 1) {
              return true;
            }
            if (bool3 && target.countDiscardableCards(player, 'j') == 1 && target.countCards('j') == 1) {
              return true;
            }
            return false;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            'step 0';
            var pos = '';
            var bool1 = !player.hasSkill('yttl_juehu_h');
            var bool2 = !player.hasSkill('yttl_juehu_e');
            var bool3 = !player.hasSkill('yttl_juehu_j');
            event.hCards = target.getCards('h');
            event.eCards = target.getCards('e');
            event.jCards = target.getCards('j');
            if (bool1 && target.countDiscardableCards(player, 'h') == 1 && target.countCards('h') == 1) {
              pos += 'h';
            }
            if (bool2 && target.countDiscardableCards(player, 'e') == 1 && target.countCards('e') == 1) {
              pos += 'e';
            }
            if (bool3 && target.countDiscardableCards(player, 'j') == 1 && target.countCards('j') == 1) {
              pos += 'j';
            }
            if (pos == '') {
              event.finish();
              return;
            }
            player.discardPlayerCard(pos, target, true);
            'step 1';
            if (result.links?.length) {
              //var pos=result.links[0].original;
              var pos = '';
              if (event.hCards.includes(result.links[0])) {
                pos = 'h';
              } else if (event.eCards.includes(result.links[0])) {
                pos = 'e';
              } else if (event.jCards.includes(result.links[0])) {
                pos = 'j';
              }
              if (pos == 'h' || pos == 'e' || pos == 'j') player.addTempSkill('yttl_juehu_' + pos, 'phaseUseEnd');
            }
          },
          ai: {
            order: 2,
            result: {
              target(player, target) {
                var bool = get.attitude(player, target) > 0;
                var bool1 = !player.hasSkill('yttl_juehu_h');
                var bool2 = !player.hasSkill('yttl_juehu_e');
                var bool3 = !player.hasSkill('yttl_juehu_j');
                var temp = 0;
                if (bool) {
                  if (bool1 && target.countDiscardableCards(player, 'h') == 1 && target.countCards('h') == 1) {
                    temp = -1;
                  }
                  if (bool2 && target.countDiscardableCards(player, 'e') == 1 && target.countCards('e') == 1) {
                    var es = target.getCards('e');
                    if (get.jyValue(es[0], target) < 0) temp = 1;
                  }
                  if (bool3 && target.countDiscardableCards(player, 'j') == 1 && target.countCards('j') == 1) {
                    var js = target.getCards('j');
                    if (get.jyValue(js[0], target) < 0) temp = 1;
                  }
                } else {
                  if (bool1 && target.countDiscardableCards(player, 'h') == 1 && target.countCards('h') == 1) {
                    temp = -1;
                  }
                  if (bool2 && target.countDiscardableCards(player, 'e') == 1 && target.countCards('e') == 1) {
                    var es = target.getCards('e');
                    if (get.jyValue(es[0], target) > 0) temp = -1;
                  }
                  if (bool3 && target.countDiscardableCards(player, 'j') == 1 && target.countCards('j') == 1) {
                    var js = target.getCards('j');
                    if (get.jyValue(js[0], target) > 0) temp = -1;
                  }
                }
                return temp;
              }
            }
          }
        },
        yttl_rouquan: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:3',
          filter(event, player) {
            return player.countCards('h');
          },
          selectCard() {
            if (ui.selected.cards.length) return -1;
            return [1, 2];
          },
          usable: 1,
          check(card) {
            var player = _status.event.player;
            //暂无AI
            return -1;
          },
          filterCard(card, player) {
            if (ui.selected.cards.length) return get.color(card) == get.color(ui.selected.cards[0]);
            return true;
          },
          content() {
            player.addTempSkill('yttl_rouquan_' + get.color(cards[0], player));
          },
          ai: {
            order: 14,
            result: {
              player(player, target) {
                return 0;
              }
            }
          }
        },
        yttl_rouquan_black: {
          trigger: { source: 'damageBegin1' },
          filter(event, player) {
            return event.card && get.color(event.card) == 'red' && event.notLink();
          },
          forced: true,
          content() {
            trigger.num++;
          },
          ai: {
            effect: {
              player(card, player, target, current, isLink) {
                if (!target) return;
                if (isLink) return;
                if (!get.tag(card, 'damage')) return;
                if (get.color(card) != 'red') return;
                if (
                target.hasSkillTag('filterDamage', null, {
                  player: player,
                  card: card
                }))

                return;
                return [1, 0, 1, -1.5];
              }
            }
          }
        },
        yttl_rouquan_red: {
          trigger: { source: 'damageBegin1' },
          filter(event, player) {
            return event.card && get.color(event.card) == 'black' && event.notLink();
          },
          forced: true,
          content() {
            trigger.num++;
          },
          ai: {
            effect: {
              player(card, player, target, current, isLink) {
                if (!target) return;
                if (isLink) return;
                if (!get.tag(card, 'damage')) return;
                if (get.color(card) != 'black') return;
                if (
                target.hasSkillTag('filterDamage', null, {
                  player: player,
                  card: card
                }))

                return;
                return [1, 0, 1, -1.5];
              }
            }
          }
        },
        yttl_chuandao: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:3',
          mark: true,
          marktext2: '道',
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_chuandao.png',
          limited: true,
          init(player) {
            player.storage.yttl_chuandao = false;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filter(event, player) {
            if (player.storage.yttl_chuandao) return false;
            return game.hasPlayer(function (current) {
              return !current.hasSkill('yttl_taiji') && current.countCards('h') == 0;
            });
          },
          filterTarget(card, player, target) {
            return !target.hasSkill('yttl_taiji') && target.countCards('h') == 0;
          },
          content() {
            player.awakenSkill('yttl_chuandao');
            player.storage.yttl_chuandao = true;
            target.addSkills('yttl_taiji');
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                if (target.hasSkillTag('taijiTag')) return 0;
                return 2;
              }
            },
            threaten: 2
          }
        },
        //张松溪
        yttl_roudaozsx: {
          audio: 'ext:金庸群侠传/peiyin:4'
        },
        yttl_shien: {
          enable: 'phaseUse',
          selectCard: [1, Infinity],
          discard: false,
          lose: false,
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          delay: 0,
          filterTarget(card, player, target) {
            return player != target;
          },
          filterCard(card, player) {
            return get.color(card) == 'black';
          },
          filter(event, player) {
            return player.countCards('h', { color: 'black' }) > 0;
          },
          check(card) {
            var player = _status.event.player;
            //////////////////////////////////////
            if (card.name == 'du') return 100;
            if (
            !player.countCards('h', function (cardx) {
              return !ui.selected.cards.includes(cardx) && cardx.name == 'du' && get.color(cardx) == 'black';
            }) &&
            ui.selected.cards.length &&
            ui.selected.cards[0].name == 'du')

            return -1;
            ////////////ai坑人/////////////////////
            /////////////////////////////////////
            if (
            !game.hasPlayer(function (current) {
              return !current.hasJudge('lebu') && current != player && get.attitude(player, current) > 2;
            }))

            return -1;
            //////////////////////////////////////
            var bool = player.hasSkill('qtpz_roudao');
            if (bool) return 1;
            return 8 - get.value(card);
          },
          content() {
            //target.gain(cards,player,'giveAuto');
            player.give(cards, target);
          },
          ai: {
            order: 2,
            effect: {
              target(card, player, target, current) {
                if (player == target && get.color(card) == 'black' && get.type(card) == 'equip' && target.getEquip(get.subtype(card)) && target.hasSkill('qtpz_roudao')) return 0;
              }
            },
            result: {
              target(player, target) {
                if (target.hasSkillTag('nogain')) return 0;
                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                  if (target.hasSkillTag('nodu')) return 0;
                  return -10;
                }
                if (target.hasJudge('lebu')) return 0;
                var nh = target.countCards('h');
                return Math.max(1, 15 - nh);
              }
            }
          }
        },
        yttl_shien_old: {
          enable: 'phaseUse',
          filterCard: true,
          selectCard: [1, Infinity],
          discard: false,
          lose: false,
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:4',
          delay: 0,
          filterTarget(card, player, target) {
            return player != target;
          },
          check(card) {
            var player = _status.event.player;
            //////////////////////////////////////
            if (card.name == 'du') return 100;
            if (
            !player.countCards('h', function (cardx) {
              return !ui.selected.cards.includes(cardx) && cardx.name == 'du';
            }) &&
            ui.selected.cards.length &&
            ui.selected.cards[0].name == 'du')

            return -1;
            ////////////ai坑人/////////////////////
            /////////////////////////////////////
            if (
            !game.hasPlayer(function (current) {
              return !current.hasJudge('lebu') && current != player && get.attitude(player, current) > 2;
            }))

            return -1;
            //////////////////////////////////////
            var bool = player.hasSkill('qtpz_roudao');
            var value = 20 - get.value(card);
            if (bool && player.countCards('h') - ui.selected.cards.length != 1) value += 30;
            if (['wuxie', 'jiu', 'tao'].includes(card.name)) value += 5;
            //有桃手牌尽量留红
            if (
            bool &&
            player.countCards('h', function (xxx) {
              return xxx.name == 'tao';
            }) &&
            card.name != 'tao' &&
            get.color(card) == 'red')

            value -= 10;
            //if(player.getUseValue(card)<=0)value+=5;
            if (bool && get.color(card) == 'black') value += 5;
            if (player.hasSkill('yttl_yuanlv') && player.countCards('h') - ui.selected.cards.length == 1 && get.color(card) == 'red' && player.hasSkill('qtpz_roudao')) return -1;
            //////////////////////////////////////
            return value;
          },
          content() {
            //target.gain(cards,player,'giveAuto');
            player.give(cards, target);
          },
          //locked:false,
          //mod:{
          //	aiOrder:function(player,card,num){
          //		if(get.itemtype(card)=='card'&&player.hasSkill('qtpz_roudao')){
          //            if(card.name=='tao') return 10;
          //            if(card.name=='sha') return 10;
          //            //if(card.name=='jiu') return 10.1;
          //        }
          //	},
          //},
          ai: {
            order: 2,
            //presha:true,
            //pretao:true,
            //skillTagFilter:function(player,tag,arg){
            //if(!player.hasSkill('qtpz_roudao')) return false;
            //},
            effect: {
              target(card, player, target, current) {
                if (player == target && get.type(card) == 'equip' && target.getEquip(get.subtype(card)) && target.hasSkill('qtpz_roudao')) return 0;
              }
            },
            result: {
              target(player, target) {
                if (target.hasSkillTag('nogain')) return 0;
                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                  if (target.hasSkillTag('nodu')) return 0;
                  return -10;
                }
                if (target.hasJudge('lebu')) return 0;
                var nh = target.countCards('h');
                return Math.max(1, 15 - nh);
              }
            }
          }
        },
        yttl_yuanlv: {
          enable: 'phaseUse',
          usable: 1,
          subSkill: { backup: {} },
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return player.countCards('h') == 1;
          },
          chooseButton: {
            dialog(event, player) {
              var list = [];
              for (var i = 0; i < lib.inpile.length; i++) {
                if (get.type(lib.inpile[i]) == 'trick') list.push(['锦囊', '', lib.inpile[i]]);
              }
              return ui.create.dialog(get.translation('yttl_yuanlv'), [list, 'vcard']);
            },
            filter(button, player) {
              var cards = player.getCards('h');
              return lib.filter.filterCard(
                {
                  name: button.link[2],
                  cards: cards
                },
                player,
                _status.event.parent
              );
            },
            check(button) {
              var player = _status.event.player;
              var name = button.link[2];
              var card = { name: name };
              return player.getUseValue(card);
            },
            backup(links, player) {
              return {
                audio: 'yttl_yuanlv',
                filterCard: true,
                selectCard: -1,
                popname: true,
                position: 'h',
                viewAs: { name: links[0][2] }
              };
            },
            prompt(links, player) {
              return '将最后一张手牌当作' + get.translation(links[0][2]) + '使用';
            }
          },
          ai: {
            order: 1,
            result: { player: 1 },
            threaten: 1.6
          }
        },
        //辛然
        yttl_shanfeng: {
          mod: {
            cardnature(card, player) {
              var cards = player.getCards('e', function (card) {
                return get.subtype(card) == 'equip1';
              });
              if (cards.length && get.color(cards) == 'red') {
                if (card.name == 'sha') return 'fire';
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { source: 'damageBegin1' },
          filter(event, player) {
            return event.hasNature('fire') && event.notLink();
          },
          forced: true,
          content() {
            trigger.num++;
          },
          ai: {
            effect: {
              target(card, player, target) {
                if (player == target && get.type(card) == 'equip' && get.subtype(card) == 'equip1') {
                  var cards2 = player.getCards('e', function (card) {
                    return get.subtype(card) == 'equip1';
                  });
                  if (!cards2.length) return;
                  if (get.color(cards2) == 'black') return;
                  if (get.color(card) == 'black') return 0;
                }
              },
              player(card, player, target, current, isLink) {
                if (!target) return;
                if (isLink) return;
                if (!game.hasNature(card, 'fire') && !get.tag(card, 'fireDamage')) return;
                if (
                target.hasSkillTag('filterDamage', null, {
                  player: player,
                  card: card
                }))

                return;
                return [1, 0, 1, -1.5];
              }
            }
          }
        },
        yttl_cuihuo: {
          subSkill: { effect: {}, backup: {} },
          getRange(card) {
            //if(get.type(card)=="equip"&&get.subtype(card)=="equip1"){
            var range = 0;
            if (lib.card[card.name] && lib.card[card.name].distance) {
              var dist = lib.card[card.name].distance;
              if (dist.attackFrom) {
                range = 1 - dist.attackFrom;
              } else {
                range = 1;
              }
            }
            //}
            return range;
          },
          /////////////////
          enable: 'phaseUse',
          filter(event, player) {
            return game.hasPlayer(function (current) {
              return current.getEquip(1);
            });
          },
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:3',
          chooseButton: {
            dialog(event, player) {
              var list = [
              [0, '攻击范围更大的武器'],
              [1, '攻击范围更小的武器']];

              var dialog = ['淬火:请选择一项', [list, 'textbutton']];
              return ui.create.dialog.apply(ui.create, dialog);
            },
            check(button) {
              return Math.random() < 0.5 ? 0 : 1;
            },
            backup(links) {
              if (links[0] == 0) {
                return {
                  audio: 'yttl_cuihuo',
                  filterTarget(card, player, target) {
                    return target.getEquip(1);
                  },
                  filterCard() {
                    return false;
                  },
                  selectCard: -1,
                  content() {
                    var equip = get.randomCard(function (cardx) {
                      var equip1 = target.getEquip(1);
                      if (get.type(cardx) == 'equip' && get.subtype(cardx) == 'equip1') {
                        return lib.skill.yttl_cuihuo.getRange(cardx) > lib.skill.yttl_cuihuo.getRange(equip1);
                      }
                      return false;
                    });
                    if (equip) {
                      target.useCard(equip, target, false);
                    } else {
                      game.log('然而什么事也没发生!');
                    }
                  },
                  ai: {
                    result: {
                      target(player, target) {
                        return 1;
                      }
                    }
                  }
                };
              } else {
                return {
                  audio: 'yttl_cuihuo',
                  filterTarget(card, player, target) {
                    return target.getEquip(1);
                  },
                  filterCard() {
                    return false;
                  },
                  selectCard: -1,
                  content() {
                    var equip = get.randomCard(function (cardx) {
                      var equip1 = target.getEquip(1);
                      if (get.type(cardx) == 'equip' && get.subtype(cardx) == 'equip1') {
                        return lib.skill.yttl_cuihuo.getRange(cardx) < lib.skill.yttl_cuihuo.getRange(equip1);
                      }
                      return false;
                    });
                    if (equip) {
                      target.useCard(equip, target, false);
                    } else {
                      game.log('然而什么事也没发生!');
                    }
                  },
                  ai: {
                    result: {
                      target: 1
                    }
                  }
                };
              }
            },
            prompt() {
              return '请选择【淬火】的目标';
            }
          },
          ai: {
            order: 7,
            result: {
              player: 1
            }
          }
        },
        //黄衫女
        yttl_xianzong: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: ['logSkillBegin', 'useSkillBegin']
          },
          popup: false,
          forced: true,
          init(player) {
            if (!player.storage.yttl_xianzong) {
              var list = [];
              if (!player.hasSkill('dxl_hebi')) list.push('sdxl_hebi');
              if (!player.hasSkill('sdxl_zhangqing')) list.push('sdxl_zhangqing');
              if (!player.hasSkill('sdxl_biefu')) list.push('sdxl_biefu');
              player.storage.yttl_xianzong = list;
              //player.storage.yttl_xianzong=['sdxl_hebi','sdxl_zhangqing','sdxl_biefu'];
            }
            if (player.storage.yttl_xianzong.length) player.addAdditionalSkills('yttl_xianzong', player.storage.yttl_xianzong);
          },
          filter(event, player, name) {
            if (player.storage.yttl_xianzong2) return false;
            if (!player.storage.yttl_xianzong.length) return false;
            return player.storage.yttl_xianzong.includes(event.skill);
          },
          content() {
            player.storage.yttl_xianzong.remove(trigger.skill);
            if (player.storage.yttl_xianzong.length) {
              player.removeAdditionalSkills('yttl_xianzong', trigger.skill);
            } else {
              player.removeAdditionalSkills('yttl_xianzong');
              player.awakenSkill('yttl_xianzong');
              player.storage.yttl_xianzong2 = true;
            }
          }
        },
        yttl_taiying: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: { player: ['drawBegin', 'recoverBegin'] },
          forced: true,
          group: ['yttl_taiying2'],
          filter(event, player, name) {
            if (name == 'recoverBegin') return player.getDamagedHp() > event.num;
            return true;
          },
          content() {
            trigger.num++;
          }
        },
        yttl_taiying2: {
          audio: 'yttl_taiying',
          trigger: { player: ['equipEnd'] },
          forced: true,
          filter(event, player, name) {
            if (event.getParent(3).name == 'yttl_taiying2') return false;
            return get.cardPile(function (cardx) {
              return get.type(cardx) == 'equip' && player.canUse(cardx, player);
            });
            //return get.cardPile(function(cardx){
            //   return get.type(cardx)=="equip"&&!player.hasDisabledSlot(get.subtype(cardx));
            //});
            // return get.cardPile(function(cardx){
            //return get.type(cardx)=="equip"&&player.hasEmptySlot(get.subtype(cardx));
            //});
          },
          content() {
            'step 0';
            var equip = get.cardPile(function (cardx) {
              return get.type(cardx) == 'equip' && player.canUse(cardx, player);
            });
            player.useCard(equip, player);
          }
        },
        //周颠
        yttl_dianxian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCard2'
          },
          filter(event, player) {
            if (!event.targets || event.targets.length != 1) return false;
            if (event.player == player || event.player == event.targets[0]) return false;
            var card = event.card;
            if (get.type(event.card) == 'equip') return false;
            var suit = event.card.suit;
            if (!lib.suit.includes(suit) || !player.countCards('he', { suit: suit })) return false;
            return event.targets[0].canUse(event.card, event.player);
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseToDiscard('he', get.prompt2('yttl_dianxian'), function (card) {
              if (trigger.card.suit != card.suit) return false;
              return lib.filter.cardDiscardable.apply(this, arguments);
            }).
            set('ai', function (card) {
              var trigger = _status.event.getTrigger();
              var player = _status.event.player;
              if (get.attitude(player, trigger.player) == 0 && get.attitude(player, trigger.targets[0]) == 0) return -1;
              if (get.effect(trigger.targets[0], trigger.card, player, player) > 0) return -1;
              if (get.effect(trigger.player, trigger.card, player, player) < 0) return -1;
              return 6 - get.value(card);
            });
            'step 1';
            if (result.bool) {
              var player1 = trigger.targets[0];
              var player2 = trigger.player;
              player.line2([trigger.targets[0], trigger.player]);
              game.log(trigger.targets[0], '成为了', trigger.card, '的使用者');
              game.log(trigger.player, '成为了', trigger.card, '的目标');
              trigger.player = player1;
              trigger.targets = [player2];
            }
          }
        },
        yttl_dianxian_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCardToTargeted'
          },
          filter(event, player) {
            if (event.player == player) return false;
            if (!event.targets || event.targets.length > 1) return false;
            var card = event.card;
            if (get.type(event.card) == 'equip') return false;
            var suit = event.card.suit;
            if (!lib.suit.includes(suit) || !player.countCards('he', { suit: suit })) return false;
            return game.hasPlayer(function (current) {
              return (
                event.player != current &&
                game.hasPlayer(function (current2) {
                  return current.canUse(event.card, current2);
                }));

            });
          },
          forced: true,
          content() {
            'step 0';
            var next = player.chooseCardTarget({
              position: 'he',
              filterCard(card, player) {
                var trigger = _status.event;
                if (trigger.card.suit != card.suit) return false;
                return lib.filter.cardDiscardable.apply(this, arguments);
              },
              selectTarget() {
                var trigger = _status.event;
                if (ui.selected.targets.length == 0) return [2, 2];
                if (ui.selected.targets.length == 1 && ui.selected.targets[0].canUse(trigger.card, ui.selected.targets[0])) return [1, 2];
                return [2, 2];
              },
              filterTarget(card, player, target) {
                var trigger = _status.event;
                if (ui.selected.targets.length == 0) {
                  return (
                    target != trigger.source &&
                    game.hasPlayer(function (current2) {
                      return target.canUse(trigger.card, current2);
                    }));

                } else {
                  return ui.selected.targets[0].canUse(trigger.card, target);
                }
              },
              ai1(card) {
                return 5 - get.value(card);
              },
              ai2(target) {
                var trigger = _status.event;
                var player = _status.event.player;
                if (get.effect(trigger.target, trigger.card, player, player) > 0) return 0;
                if (get.attitude(player, target) == 0) return 0;
                if (ui.selected.targets.length == 0) {
                  var list = game.filterPlayer(function (target) {
                    return (
                      target != trigger.source &&
                      game.hasPlayer(function (current2) {
                        return target.canUse(trigger.card, current2);
                      }));

                  });
                  list.sort(function (a, b) {
                    return (get.effect(b, trigger.card, target, target) - get.effect(a, trigger.card, target, target)) * get.attitude(player, target);
                  });
                  if (target == list[0]) return 10;
                  return 0;
                } else {
                  if (ui.selected.targets[0].canUse(trigger.card, ui.selected.targets[0]) && get.effect(target, trigger.card, ui.selected.targets[0], ui.selected.targets[0]) * get.attitude(player, target) > 0) return 0;
                  return get.effect(target, trigger.card, ui.selected.targets[0], ui.selected.targets[0]) * get.attitude(player, target);
                }
              },
              targetprompt: ['成为使用者/或目标', '成为目标'],
              prompt: get.prompt2('yttl_dianxian'),
              source: trigger.player,
              target: trigger.target,
              card: trigger.card
            });
            'step 1';
            if (result.bool) {
              player.line2(result.targets);
              var target0 = result.targets[0];
              var target1 = result.targets[1] || result.targets[0];
              player.discard(result.cards);
              var evt = trigger.parent;
              evt.triggeredTargets2.remove(trigger.target);
              evt.targets.remove(trigger.target);
              evt.targets.push(target1);
              trigger.untrigger();
              trigger.parent.player = target0;
              game.log(target0, '成为了', trigger.card, '的使用者');
              game.log(target1, '成为了', trigger.card, '的目标');
            }
          }
        },
        yttl_nizhan: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          selectTarget: 2,
          filterTarget(card, player, target) {
            if (target.isMin()) return false;
            return target.getEquip(1);
          },
          filter(event, player) {
            return (
              game.countPlayer(function (current) {
                return current.getEquip(1);
              }) > 1);

          },
          multitarget: true,
          content() {
            'step 0';
            //甘露技能
            event.range0 = targets[0].getAttackRange();
            event.range1 = targets[1].getAttackRange();
            'step 1';
            event.cards = [targets[0].getEquip(1), targets[1].getEquip(1)];
            targets[0].lose(targets[0].getEquip(1), ui.ordering, 'visible');
            targets[1].lose(targets[1].getEquip(1), ui.ordering, 'visible');
            if (event.cards[0]) targets[0].$give(event.cards[0], targets[1], false);
            if (event.cards[1]) targets[1].$give(event.cards[1], targets[0], false);
            //targets[0].swapEquip(targets[1]);
            'step 2';
            targets[0].equip(event.cards[1]);
            targets[1].equip(event.cards[0]);
            'step 3';
            if (event.range0 > targets[0].getAttackRange()) {
              targets[0].draw(1);
            } else if (event.range0 < targets[0].getAttackRange()) {
              if (targets[0].countCards('he')) targets[0].chooseToDiscard('he', true);
            }
            ///////////////////////////////////////
            if (event.range1 > targets[1].getAttackRange()) {
              targets[1].draw(1);
            } else if (event.range1 < targets[1].getAttackRange()) {
              if (targets[1].countCards('he')) targets[1].chooseToDiscard('he', true);
            }
            /////////////////////////////
            if (event.range1 == targets[1].getAttackRange() && event.range0 == targets[0].getAttackRange()) {
              player.draw(2);
            }
          },
          getRange(equip) {
            if (get.subtype(equip) == 'equip1') {
              if (lib.card[equip.name] && lib.card[equip.name].distance) {
                var dist = lib.card[equip.name].distance;
                if (dist.attackFrom) {
                  return -dist.attackFrom + 1;
                } else return 1;
              }
              return 1;
            }
            return 0;
          },
          ai: {
            order: 10,
            result: {
              target(player, target) {
                var att = get.attitude(player, target);
                if (ui.selected.targets.length == 0) {
                  if (
                  game.hasPlayer(function (current) {
                    if (current != target) {
                      var equip1 = target.getEquip(1);
                      var equip2 = current.getEquip(1);
                      if (equip1 && equip2) {
                        if (lib.skill.yttl_nizhan.getRange(equip1) == lib.skill.yttl_nizhan.getRange(equip2)) return true;
                      }
                      return false;
                    }
                    return false;
                  }))

                  return att;
                } else {
                  var targetx = ui.selected.targets[0];
                  //var att=get.attitude(player,targetx);
                  var equip1 = target.getEquip(1);
                  var equip2 = targetx.getEquip(1);
                  if (equip1 && equip2) {
                    if (lib.skill.yttl_nizhan.getRange(equip1) == lib.skill.yttl_nizhan.getRange(equip2)) return att;
                  }
                }
                if (ui.selected.targets.length == 0) {
                  if (
                  att > 0 &&
                  game.hasPlayer(function (current) {
                    if (current != target) {
                      var equip1 = target.getEquip(1);
                      var equip2 = current.getEquip(1);
                      if (equip1 && equip2) {
                        if (lib.skill.yttl_nizhan.getRange(equip1) > lib.skill.yttl_nizhan.getRange(equip2)) return true;
                      }
                      return false;
                    }
                    return false;
                  }))

                  return 2;
                  //return 0;
                } else {
                  var targetx = ui.selected.targets[0];
                  var attx = get.attitude(player, targetx);
                  var equip1 = target.getEquip(1);
                  var equip2 = targetx.getEquip(1);
                  if (attx > 0 && equip1 && equip2) {
                    if (lib.skill.yttl_nizhan.getRange(equip1) < lib.skill.yttl_nizhan.getRange(equip2)) return -2;
                  }
                  //return 0;
                }
                /////////////////////////////////////////////////////////////////
                if (ui.selected.targets.length == 0) {
                  if (
                  game.hasPlayer(function (current) {
                    return current != target && target.getEquip(1) && current.getEquip(1) && get.effect(target, current.getEquip(1), target, target) < 0 && get.effect(current, target.getEquip(1), current, current) > 0 && get.attitude(player, current) > 0;
                  }))

                  return -1;
                  if (
                  game.hasPlayer(function (current) {
                    return current != target && target.getEquip(1) && current.getEquip(1) && get.effect(target, current.getEquip(1), target, target) > 0 && get.effect(current, target.getEquip(1), current, current) < 0 && get.attitude(player, current) < 0;
                  }))

                  return 1;
                  return 0;
                } else {
                  var player1 = ui.selected.targets[0];
                  var card = player1.getEquip(1);
                  return get.effect(target, card, target, target);
                }
              }
            }
          }
        },
        //韩林儿
        yttl_guyong: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseZhunbeiBegin' },
          forced: true,
          filter(event, player) {
            return game.hasPlayer(function (current) {
              return (
                current != player &&
                player.canUse(
                  {
                    name: 'juedou'
                  },
                  current,
                  false
                ) &&
                player.countCards('h') < current.countCards('h'));

            });
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('yttl_guyong'), function (card, player, target) {
              if (player == target) return false;
              if (player.countCards('h') >= target.countCards('h')) return false;
              return player.canUse({ name: 'juedou' }, target, false);
            }).
            set('ai', function (target) {
              var player = _status.event.player;
              var effect = get.effect(target, { name: 'juedou' }, player);
              if (effect > 0) return effect;
              if (get.attitude(player, target) <= 0) return target.countCards('h') - player.countCards('h');
              return 0;
            });
            'step 1';
            if (result.bool) {
              event.target = result.targets[0];
            } else {
              event.finish();
            }
            'step 2';
            player.draw();
            'step 3';
            if (player.canUse({ name: 'juedou' }, target, false)) {
              player.useCard({ name: 'juedou' }, target);
            } else {
              game.log(target, '不是', { name: 'juedou' }, '的合法目标!');
              //event.finish();
            }
            'step 4';
            if (player.countCards('h') < target.countCards('h')) event.goto(2);
          }
        },
        jy_zhuangbeicesi: {
          enable: 'phaseUse',
          filterTarget(card, player, target) {
            return true;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          usable: 1,
          content() {
            'step 0';
            var card = get.cardPile(function (card) {
              return get.type(card) == 'equip' && get.subtype(card) == 'equip1';
            });
            if (card) {
              target.equip(card);
            }
            'step 1';
            var card = get.cardPile(function (card) {
              return get.type(card) == 'equip' && get.subtype(card) == 'equip2';
            });
            if (card) {
              target.equip(card);
            }
            'step 2';
            var card = get.cardPile(function (card) {
              return get.type(card) == 'equip' && get.subtype(card) == 'equip3';
            });
            if (card) {
              target.equip(card);
            }
            'step 3';
            var card = get.cardPile(function (card) {
              return get.type(card) == 'equip' && get.subtype(card) == 'equip4';
            });
            if (card) {
              target.equip(card);
            }
            'step 4';
            var card = get.cardPile(function (card) {
              return get.type(card) == 'equip' && get.subtype(card) == 'equip5';
            });
            if (card) {
              target.equip(card);
            }
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                return 2;
              }
            },
            threaten: 2
          }
        },
        yttl_juezhu: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:3',
          filter(event, player) {
            var players = game.filterPlayer((i) => i != player);
            if (player.canMoveCard(null, true, players, player)) return true;
            if (player.canMoveCard(null, true, player, players)) return true;
            return false;
          },
          complexSelect: true,
          filterTarget(event, player, target) {
            if (target == player) return false;
            if (player.canMoveCard(null, true, target, player)) return true;
            if (player.canMoveCard(null, true, player, target)) return true;
            return false;
          },
          content() {
            'step 0';
            var next = player.moveCard(true, [player, target], [player, target]);
            next.set('nojudge', true);
            event.moveCardEnd = next;
            'step 1';
            if (result && result.bool) {
              var targets = event.moveCardEnd.targets;
              if (targets[1].countCards('e') > targets[0].countCards('e')) {
                targets[1].damage('nocard', targets[0]);
              }
            }
          },
          ai: {
            basic: {
              order: 11
            },
            damage: true,
            result: {
              player(player, target) {
                if (player.canMoveCard(true, true, target, player)) {
                  if (player.countCards('e') + 2 > target.countCards('e')) {
                    if (get.damageEffect(player, target, player) > 0) return 3;
                    return 0;
                  } else {
                    return 2;
                  }
                }
                if (player.canMoveCard(true, true, player, target)) {
                  if (target.countCards('e') + 2 > player.countCards('e')) {
                    if (get.damageEffect(target, player, player) > 0) return 3;
                    return 0;
                  } else {
                    return 1;
                  }
                }
                return 0;
              },
              threaten: 0.8
            }
          }
        },
        //莫声谷
        yttl_roujian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCardToPlayered' },
          check(event, player) {
            return get.attitude(player, event.target) <= 0;
          },
          filter(event, player) {
            if (event.target.countCards('h') == 0) return false;
            var rednum = event.target.countCards('h', function (card) {
              return get.color(card) == 'red' && lib.filter.cardDiscardable(card, event.target, event);
            });
            var blacknum = event.target.countCards('h', function (card) {
              return get.color(card) == 'black' && lib.filter.cardDiscardable(card, event.target, event);
            });
            if (rednum == blacknum) return false;
            return event.card && event.card.name == 'sha';
          },
          logTarget: 'target',
          content() {
            var target = trigger.target;
            var rednum = target.countCards('h', function (card) {
              return get.color(card) == 'red' && lib.filter.cardDiscardable(card, target, trigger);
            });
            var blacknum = target.countCards('h', function (card) {
              return get.color(card) == 'black' && lib.filter.cardDiscardable(card, target, trigger);
            });
            var num = rednum - blacknum;
            var color;
            if (num > 0) {
              color = 'red';
            } else {
              num = 0 - num;
              color = 'black';
            }
            target.
            chooseToDiscard(true, num, '请弃置' + get.cnNumber(num) + '张' + get.translation(color) + '牌', 'h', function (card) {
              return get.color(card) == _status.event.color && lib.filter.cardDiscardable(card, _status.event.player, trigger);
            }).
            set('color', color);
          }
        },
        yttl_xunjie: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'loseAfter' },
          usable: 1,
          logTarget: 'player',
          check(event, player) {
            var bool = get.attitude(player, event.player) > 0;
            var num = 0;
            var hastaojiu = false;
            var cards = event.cards2.filterInD('od');
            if (Array.isArray(cards)) for (var i of cards) {
              var nume = i.name;
              if (nume != 'du') {
                if (nume == 'tao') {
                  num += 2;
                  hastaojiu = true;
                }
                if (nume == 'jiu') {
                  hastaojiu = true;
                }
                num += 1;
              } else {
                num -= 2;
              }
            }
            if (bool && num > 3 && event.player.hp > 1) return true;
            if (!bool && event.player.hp == 1 && !hastaojiu) return true;
            if (!bool && event.player.hp == 1 && num <= 2) return true;
            return false;
          },
          filter(event, player) {
            if (!event.player.isIn()) return false;
            return event.type && event.type == 'discard' && event.cards2 && event.cards2.filterInD('od').length > 1;
          },
          content() {
            'step 0';
            trigger.player.loseHp(1);
            'step 1';
            trigger.player.gain(trigger.cards2.filterInD('od'), 'gain2', 'log');
          }
        },
        //新范遥20220224---霸天
        yttl_qianwo2: {
          nopop: true,
          charlotte: true,
          popup: false,
          forced: true,
          audio: 'yttl_qianwo',
          trigger: {
            global: ['logSkillBegin', 'useSkillBegin']
          },
          filter(event, player, name) {
            if (!player.storage.yttl_qianwo2) return false;
            if (!player.storage.yttl_qianwo2.isIn()) return false;
            if (event.player != player && event.player != player.storage.yttl_qianwo2) return false;
            return lib.jy_bangPaiList.includes(event.skill);
          },
          content() {
            var target = trigger.player == player ? player.storage.yttl_qianwo2 : player;
            if (target == player) {
              player.storage.yttl_qianwo2.line(player);
            } else player.line(target);
            target.draw(2);
          }
        },
        yttl_qianwo: {
          limited: true,
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return !player.storage.yttl_qianwo && game.hasPlayer((target) => target != player && get.jy_hasbangpai(target));
          },
          init(player, skill) {
            player.storage[skill] = false;
          },
          filterTarget(card, player, target) {
            if (target == player) return false;
            return get.jy_hasbangpai(target);
          },
          mark: true,
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            'step 0';
            player.awakenSkill('yttl_qianwo');
            player.storage.yttl_qianwo = true;
            'step 1';
            player.storage.yttl_qianwo2 = target;
            var bp = lib.jy_bangPaiList.slice(0);
            var list = [];
            for (var i of bp) {
              if (target.hasSkill(i, false, false, false) && !player.hasSkill(i, false, false, false)) list.push(i);
            }
            player.addSkill('yttl_qianwo2');
            if (list.length) {
              player.addAdditionalSkills('yttl_qianwo2', list);
            }
          },
          intro: {
            content: 'limited'
          },
          ai: {
            expose: 0.4,
            order: 4,
            result: {
              target: 1
            }
          }
        },
        yttl_guijiao2: {
          nopop: true,
          enable: ['chooseToUse'],
          audio: 'yttl_qianwo',
          filterCard(card, player) {
            return get.color(card) == 'red';
          },
          position: 'hs',
          viewAs: { name: 'sha', nature: 'fire' },
          viewAsFilter(player) {
            if (!player.countCards('hs', { color: 'red' })) return false;
            return true;
          },
          prompt: '将一张红色手牌当火杀使用',
          check(card) {
            return 6 - get.value(card);
          },
          ai: {
            skillTagFilter(player, tag, arg) {
              if (!player.countCards('hs', { color: 'red' })) return false;
              if (arg != 'use') return false;
            },
            respondSha: true
          }
        },
        yttl_guijiao: {
          juexingji: true,
          derivation: ['jy_bosi'],
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'dying' },
          filter(event, player) {
            if (!player.storage.yttl_qianwo2) return false;
            if (!player.storage.yttl_qianwo2.isIn()) return false;
            if (event.player != player && event.player != player.storage.yttl_qianwo2) return false;
            return !player.storage.yttl_guijiao;
          },
          forced: true,
          init(player, skill) {
            player.storage[skill] = false;
          },
          content() {
            player.removeSkill('yttl_qianwo2');
            player.removeAdditionalSkills('yttl_qianwo2');
            player.addSkills('jy_bosi');
            player.addSkill('yttl_guijiao2');
            player.awakenSkill(event.name);
            player.storage[event.name] = true;
          }
        },
        //范遥旧版
        yttl_guijiaoold: {
          audio: 'ext:金庸群侠传/peiyin:2',
          prompt: '与亲信角色交换区域内的牌.',
          enable: 'phaseUse',
          mark: true,
          marktext2: '归',
          markimage: 'extension/金庸群侠传/image/icon/jyguijiao.jpg',
          limited: true,
          line: true,
          selectTarget: 1,
          filter(event, player) {
            if (!player.storage.yttl_qianwoold_qx) {
              return false;
            }
            return player.storage.yttl_qianwoold_qx.isIn();
          },
          filterTarget(card, player, target) {
            return target == player.storage.yttl_qianwoold_qx;
          },
          ai: {
            order: 5,
            result: {
              player(player, target) {
                var val = 0;
                val = val + target.countCards('h') - player.countCards('h');
                val = val + target.countCards('e') * 2 - player.countCards('e') * 2;
                return val;
              },
              target(player, target) {
                var val = 0;
                val = val + target.countCards('h') - player.countCards('h');
                val = val + target.countCards('e') * 2 - player.countCards('e') * 2;
                return -val;
              }
            }
          },
          content() {
            'step 0';
            player.awakenSkill('yttl_guijiaoold');
            targets[0].swapEquip(player);
            'step 1';
            targets[0].swapJudge(player);
            'step 2';
            targets[0].swapHandcards(player);
            'step 3';
            player.
            chooseTarget('重新选择亲信角色', function (card, player, target) {
              return target != player && target != player.storage.yttl_qianwoold_qx;
            }).
            set('ai', function (target) {
              var att = get.attitude(_status.event.player, target);
              if (att > 0) {
                return target.hp * 2;
              }
              return att;
            });
            'step 4';
            if (result.bool && result.targets.length) {
              if (player.storage.yttl_qianwoold_qx) {
                if (player.storage.yttl_qianwoold_qx.hasSkill('yttl_qianwoold_qinxin')) {
                  player.storage.yttl_qianwoold_qx.say(['苦头陀,你藏得好深啊!', '我待你不薄,你为何背叛于我？'].randomGet());
                  player.storage.yttl_qianwoold_qx.removeSkill('yttl_qianwoold_qinxin');
                }
              }
              player.storage.yttl_qianwoold_qx = result.targets[0];
              result.targets[0].say(['范兄弟,你终于回来了!', '范兄弟,你辛苦了……', '范兄弟,何苦做到这种地步啊!'].randomGet());
              player.say(['光明右使范遥,参见教主!', '不得已助纣为虐,还望教主宽宥!'].randomGet());
              if (!player.storage.yttl_qianwoold_qx.hasSkill('yttl_qianwoold_qinxin')) {
                player.storage.yttl_qianwoold_qx.addSkill('yttl_qianwoold_qinxin');
              }
            } else {
              player.storage.yttl_qianwoold_qx = undefined;
            }
            player.storage.yttl_guijiaoold_end = true;
          }
        },
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        yttl_qianwoold_use: {
          forced: true,
          trigger: { global: 'useCard2' },
          forced: true,
          filterx(event, player) {
            //if(get.color(event.card)!='red') return false;
            var info = get.info(event.card);
            if (info.allowMultiple == false) return false;
            if (event.targets && !info.multitarget) {
              if (
              game.hasPlayer(function (current) {
                return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
              }))
              {
                return true;
              }
            }
            return false;
          },
          filter(event, player) {
            if (event.player != player && event.player != player.storage.yttl_qianwoold_qx) return false;
            if (!event.card.yttl_qianwoold_use) return false;
            return true;
          },
          content() {
            'step 0';
            //优先增加目标
            if (lib.skill.yttl_qianwoold_use.filterx(trigger, trigger.player)) {
              var prompt2 = '潜卧:是否为' + get.translation(trigger.card) + '增加一个的目标？';
              trigger.player.
              chooseTarget([1, 1], function (card, player, target) {
                var player = _status.event.player;
                if (_status.event.targets.includes(target)) return false;
                return lib.filter.targetEnabled2(_status.event.card, player, target);
              }).
              set('prompt2', prompt2).
              set('ai', function (target) {
                var trigger = _status.event.getTrigger();
                var player = _status.event.player;
                return get.effect(target, trigger.card, player, player);
              }).
              set('targets', trigger.targets).
              set('card', trigger.card);
            } else {
              event.noaddtarget = true;
              if (get.tag(trigger.card, 'damage') && (get.type(trigger.card) == 'basic' || get.type(trigger.card) == 'trick')) {
                trigger.player.
                chooseBool().
                set('ai', function () {
                  return [true, false].randomGet();
                }).
                set('prompt', '是否令' + get.translation(trigger.card) + '造成伤害加一？');
              } else {
                event.finish();
              }
            }
            'step 1';
            if (result.bool) {
              if (event.noaddtarget) {
                if (trigger.baseDamage != undefined) {
                  trigger.baseDamage += 1;
                  game.log(trigger.player, '令【', trigger.card, '】伤害加一.');
                }
              } else {
                event.targets = result.targets;
                trigger.targets.addArray(event.targets);
                player.line(event.targets, 'green');
                game.log(trigger.player, '使用牌【', trigger.card, '】额外指定了', event.targets, '为目标.');
              }
              event.finish();
            } else {
              if (!event.noaddtarget && get.tag(trigger.card, 'damage') && (get.type(trigger.card) == 'basic' || get.type(trigger.card) == 'trick')) {
                trigger.player.
                chooseBool().
                set('ai', function () {
                  return [true, false].randomGet();
                }).
                set('prompt', '是否令' + get.translation(trigger.card) + '造成伤害加一？');
              } else {
                event.finish();
              }
            }
            'step 2';
            if (result.bool) {
              if (trigger.baseDamage != undefined) {
                trigger.baseDamage += 1;
                game.log(trigger.player, '令【', trigger.card, '】伤害加一.');
              }
            }
          }
        },
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        yttl_qianwoold: {
          audio: 'ext:金庸群侠传/peiyin:3',
          prompt: '查看标记角色手牌',
          enable: 'phaseUse',
          usable: 1,
          line: true,
          ai: {
            order: 20,
            result: {
              player: 3,
              target(player, target) {
                return 1;
              }
            }
          },
          group: ['yttl_qianwoold_start', 'yttl_qianwoold_damage', 'yttl_qianwoold_lose', 'yttl_qianwoold_use'],
          filter(event, player) {
            const target = player.storage.yttl_qianwoold_qx;
            if (!target) {
              return false;
            }
            if (!target.isIn()) {
              return false;
            }
            if (player.countGainableCards(target, 'h') == 0) {
              return false;
            }
            if (target.countGainableCards(player, 'h') == 0) {
              return false;
            }
            return true;
          },
          filterTarget(card, player, target) {
            return target == player.storage.yttl_qianwoold_qx;
          },
          content() {
            'step 0';
            var qxCards = target.getGainableCards(player, 'h');
            player.
            chooseCardButton(qxCards, [0, 1], '是否选择交换一张手牌', function (button) {
              return true;
            }).
            set('ai', function (button) {
              return _status.event.player.getUseValue(button.link);
            });
            'step 1';
            if (result.bool && result.links.length >= 1) {
              var c = result.links[0];
              event.qxCard = c;
              var myCards = player.getGainableCards(target, 'h');
              player.
              chooseCardButton(myCards, [1, 1], '请选择你的一张手牌,交换' + get.translation(target) + '的' + get.translation(c), function (button) {
                return true;
              }).
              set('ai', function (button) {
                return _status.event.targetx.getUseValue(button.link) * get.attitude(_status.event.player, _status.event.targetx);
              }).
              set('targetx', target);
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool && result.links.length >= 1) {
              var myCard = result.links[0];
              event.myCard = myCard;
              var qxCard = event.qxCard;
              player.line(target, 'green');
              //game.log(target,'获得了',player,'的一张牌');
              //target.gain(myCard,player).gaintag.add('yttl_qianwoold');
              player.give(myCard, target, true).gaintag.add('yttl_qianwoold');
              if (!event.myCard.storage) event.myCard.storage = {};
              event.myCard.storage.yttl_qianwoold = true;
              //target.$gain2(myCard);
            } else {
              event.finish();
            }
            'step 3';
            //game.log(player,'获得了',target,'的一张牌')
            //player.gain(event.qxCard,target).gaintag.add('yttl_qianwoold');
            target.give(event.qxCard, player, true).gaintag.add('yttl_qianwoold');
            if (!event.qxCard.storage) event.qxCard.storage = {};
            event.qxCard.storage.yttl_qianwoold = true;
            //player.$gain2(event.qxCard);
            'step 4';
            //if(player.storage.yttl_qianwoold_cards==undefined){
            //player.storage.yttl_qianwoold_cards=[];
            //}
            //player.storage.yttl_qianwoold_cards.push(event.qxCard);
            //player.storage.yttl_qianwoold_cards.push(event.myCard);
          },
          subSkill: {
            lose: {
              trigger: { global: ['loseEnd'] },
              silent: true,
              filter(event, player) {
                //if(event.name=='lose'&&event.type&&event.type=='use') return false;
                if (event.getParent(2).name == 'yttl_qianwoold') return false;
                return event.player == player || event.player == player.storage.yttl_qianwoold_qx;
              },
              content() {
                if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                  if (i.storage && i.storage.yttl_qianwoold) {
                    if (trigger.type && trigger.type == 'use') {
                      var evt = trigger.getParent('useCard');
                      if (evt && evt.card) {
                        evt.card.yttl_qianwoold_use = true;
                      }
                    }
                    //game.log(trigger.player,'失去了潜卧牌',i)
                    delete i.storage.yttl_qianwoold;
                  }
                }
              }
            },
            qinxin: {
              mark: true,
              marktext2: '亲',
              markimage: 'extension/金庸群侠传/image/icon/jyqinxin.jpg',
              intro: {
                content() {
                  return '神秘侠客选择了你作为他的亲信.';
                }
              }
            },
            damage: {
              trigger: {
                source: 'damageBegin2',
                player: 'damageBegin2'
              },
              forced: true,
              filter(event, player) {
                if (!player.storage.yttl_qianwoold_qx) return false;
                var hasOthers = false;
                for (var i of game.players) {
                  if (i != player && i != player.storage.yttl_qianwoold_qx) {
                    hasOthers = true;
                    break;
                  }
                }
                if (!hasOthers) {
                  return false;
                }
                if (!event.source) {
                  return false;
                }
                if (event.source == event.player) return false;
                return event.source == player.storage.yttl_qianwoold_qx || event.player == player.storage.yttl_qianwoold_qx;
              },
              content() {
                game.log(trigger.source, '触发了【潜卧】,取消其对', trigger.player, '造成的伤害');
                if (!player.storage.yttl_guijiaoold_end) {
                  if (trigger.source == player) {
                    player.say('切不可轻举妄动,误了大事.');
                  } else {
                    player.say('难道我已经被怀疑了？还是小心谨慎为妙.');
                  }
                } else {
                  player.say('教主,我来向您讨教几招.');
                }
                trigger.cancel();
              }
            },
            start: {
              trigger: {
                global: 'gameStart',
                player: 'enterGame'
              },
              forced: true,
              filter(event, player) {
                return game.players.length > 1;
              },
              content() {
                'step 0';
                player.
                chooseTarget('选择【潜卧】的目标<br>' + lib.translate.yttl_qianwoold_info, true, function (card, player, target) {
                  return target != player;
                }).
                set('ai', function (target) {
                  var att = get.attitude(_status.event.player, target);
                  return 1;
                  //return -att;
                });
                'step 1';
                if (result.bool) {
                  var target = result.targets[0];
                  player.line(target, 'green');
                  game.log(player, '成为了', target, '的亲信.');
                  player.storage.yttl_qianwoold_qx = target;
                  if (!target.hasSkill('yttl_qianwoold_qinxin')) {
                    target.addSkill('yttl_qianwoold_qinxin');
                    target.storage.yttl_qianwoold_qxx = player;
                  }
                  player.$fullscreenpop('潜入敌营', 'fire');
                }
              }
            }
          }
        },
        //倚天屠龙mark
        yttl_syqtaiji: {
          audio: 'ext:金庸群侠传/peiyin:2'
        },
        yttl_yuanmeng: {
          trigger: {
            global: 'loseAfter'
          },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (event.player == player) return false;
            var evt = event.parent;
            if (evt.name != 'discard' || event.type != 'discard') return false;
            var num = player.getHistory('custom', function (evt) {
              return evt.yttl_yuanmeng && evt.yttl_yuanmeng == event.player;
            }).length;
            if (num > 0) return false;
            if (event.cards2 && event.cards2.length && event.cards2.filterInD('d').length) {
              return player.countCards('h') && player.countCards('h') >= event.cards2.filterInD('d').length && event.player.isIn();
            }
            return false;
          },
          content() {
            'step 0';
            var numm = trigger.cards2.filterInD('d').length;
            var next = player.chooseCard(numm, 'h', get.prompt2('yttl_yuanmeng', trigger.player));
            next.set('ai', function (card) {
              var att = get.attitude(_status.event.player, _status.event.sourcex);
              if (_status.event.sourcex.hasSkillTag('nogain')) return -1;
              if (att < 0) {
                if (_status.event.isdu) return 6 - get.value(card);
                return -1;
              } else {
                if (_status.event.isdu) return -1;
                var name = card.name;
                if (name == 'tao' || name == 'jiu' || name == 'wuxie') return -1;
                if (player.hasSkillTag('noh')) return 9 - get.value(card);
                return 6 - get.value(card);
              }
            });
            next.set('sourcex', trigger.player);
            next.set('isdu', trigger.cards2.filterInD('d').length == 1 && trigger.cards2.filterInD('d')[0].name == 'du');
            'step 1';
            if (result.bool) {
              player.discard(result.cards);
              player.getHistory('custom').push({ yttl_yuanmeng: trigger.player });
            }
            'step 2';
            if (result.bool) {
              trigger.player.gain(trigger.cards2.filterInD('d'), 'gain2');
            }
          }
        },
        yttl_cuhai: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filterTarget(card, player, target) {
            return target != player && target.countCards('h');
          },
          content() {
            'step 0';
            var num = target.countDiscardableCards(player, 'h', function (cardx) {
              return get.color(cardx) == 'red';
            });
            var num1 = target.countCards('h', { color: 'red' }) - player.countCards('h', { color: 'red' });
            num = Math.min(Math.max(0, num1), num);
            event.numm = Math.max(0, num1);
            if (num > 0) {
              var str = '<img style=width:150px  src=extension/金庸群侠传/image/button/jy_button_chuhai.jpg><br>是否弃置' + get.translation(target) + '' + num + '张红色手牌？';
              str += '否则你随机获得' + event.numm + '张红色牌.';
              player.discardPlayerCard(num, str, target, 'h', 'visible').set('filterButton', function (button) {
                return get.color(button.link) == 'red';
              });
            } else {
              player.viewHandcards(target);
              event.finish();
            }
            'step 1';
            if (!result || !result.bool) {
              var gains = get.randomCards(event.numm, function (cardx) {
                return get.color(cardx) == 'red';
              });
              if (gains) {
                player.gain(gains, 'log', 'draw');
              } else {
                game.log('没有符合要求的牌');
              }
            }
          },
          ai: {
            result: {
              player: 1,
              target(player, target) {
                if (target.isMaxHandcard()) return -2; //美妙的世界改
                var att = get.attitude(player, target);
                var num = target.countDiscardableCards(player, 'h', function (cardx) {
                  return get.color(cardx) == 'red';
                });
                var num1 = target.countCards('h', { color: 'red' }) - player.countCards('h', { color: 'red' });
                num = Math.min(Math.max(0, num1), num);
                if (num == 0 || att == 0) return 0;
                return num / att;
              }
            },
            order: 1
          }
        },
        yttl_zongquan: {
          ai: {
            order: 6,
            result: {
              player: 1
            }
          },
          audio: 'ext:金庸群侠传/peiyin:3',
          marktext2: '犬',
          markimage: 'extension/金庸群侠传/image/icon/jyzhongquan.jpg',
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          },
          intro: {
            markcount: 'expansion',
            mark(dialog, storage, player) {
              var cards = player.getExpansions('yttl_zongquan');
              if (player.isUnderControl(true)) dialog.addAuto(cards);else
              dialog.addAuto([[['', '', cards[0].name]], 'vcard']);
            }
          },
          discard: false,
          lose: false,
          enable: 'phaseUse',
          filterCard: true,
          usable: 1,
          check(card) {
            var value = get.value(card);
            if (card.suit == 'spade') value -= 5;
            return 9 - value;
          },
          content() {
            'step 0';
            var cardsx = player.getExpansions('yttl_zongquan');
            if (cardsx.length) {
              player.gain(cardsx, 'gain2', 'log');
            }
            'step 1';
            player.addToExpansion(cards, 'giveAuto').gaintag.add('yttl_zongquan');
          },
          group: ['yttl_zongquan_start', 'yttl_zongquan_remove'],
          subSkill: {
            remove: {
              check(event, player) {
                return get.attitude(player, event.player) <= 0;
              },
              logTarget: 'player',
              audio: 'yttl_zongquan',
              trigger: {
                global: 'equipEnd'
              },
              filter(event, player) {
                if (event.player == player) return false;
                var cardsx = player.getExpansions('yttl_zongquan');
                if (!cardsx.length) return false;
                if (cardsx[0].suit != event.card.suit) return false;
                if (!event.player.getCards('e').includes(event.card)) return false;
                return true;
              },
              content() {
                if (player.hasDisabledSlot(get.subtype(trigger.card))) {
                  trigger.player.discard(trigger.card);
                } else {
                  trigger.player.$give(trigger.card, player);
                  player.equip(trigger.card);
                }
              }
            },
            start: {
              audio: 'yttl_zongquan',
              trigger: {
                global: 'gameStart',
                player: 'enterGame'
              },
              forced: true,
              content() {
                player.addToExpansion(get.cards(1), 'gain2', 'log').gaintag.add('yttl_zongquan');
              }
            }
          }
        },
        yttl_fenzhuang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filter(event, player) {
            return !player.storage.yttl_fenzhuang;
          },
          filterTarget(card, player, target) {
            return player != target;
          },
          limited: true,
          selectTarget: -1,
          marktext2: '焚',
          markimage: 'extension/金庸群侠传/image/icon/jyfenzhuang.jpg',
          mark: true,
          multitarget: true,
          multiline: true,
          line: 'fire',
          content() {
            'step 0';
            player.
            chooseControl(['一', '二'], function (event, player) {
              if (player.hasSkillTag('nofire')) return '二';
              if (player.hp - 2 > 0) return '二';
              return '一';
            }).
            set('prompt', '请选择要造成的伤害');
            'step 1';
            event.onfire = result.control == '二' ? 2 : 1;
            player.damage('fire', event.onfire);
            player.storage.yttl_fenzhuang = true;
            player.awakenSkill('yttl_fenzhuang');
            event.num1 = 0;
            'step 2';
            if (event.num1 < targets.length) {
              if (targets[event.num1].countCards('e') && player.isIn()) {
                targets[event.num1].chooseBool('是否将装备区的牌交给' + get.translation(player) + '?否则受到' + get.translation(player) + (event.onfire == 2 ? '二' : '一') + '点火焰伤害').set('ai', function (evt, playerx) {
                  var num = evt.onfire;
                  if (playerx.hasSkillTag('nofire')) return false;
                  if (get.attitude(playerx, evt.player) > 0) return true;
                  if (playerx.countCards('e') == 1) return true;
                  if (playerx.hp - num > 1) return true;
                  return get.damageEffect(playerx, playerx, playerx, 'fire') < 0;
                });
              } else {
                targets[event.num1].damage('fire', event.onfire);
                event.num1++;
                event.redo();
              }
            } else {
              event.finish();
            }
            'step 3';
            if (result && result.bool) {
              targets[event.num1].give(targets[event.num1].getCards('e'), player, true);
            } else {
              targets[event.num1].damage('fire', event.onfire);
              targets[event.num1].say(['庄主煞费苦心,就为欺骗我等？', '我绝不透露屠龙刀之机密!'].randomGet());
            }
            event.num1++;
            event.goto(2);
          },
          ai: {
            order: 1,
            result: {
              player(player) {
                var num = 0,
                  players = game.filterPlayer();
                for (var i of players) {
                  if (player != i && get.damageEffect(i, player, i, 'fire') < 0) {
                    var att = get.attitude(player, i);
                    if (att > 0 && !i.countCards('e') && !i.hasSkillTag('nofire')) {
                      num -= 1;
                    } else if (att < 0 && !i.hasSkillTag('nofire')) {
                      num += 1;
                    }
                  }
                }
                if (player.hasSkillTag('nofire')) {
                  return num;
                } else return num - 1;
              }
            }
          },
          init(player) {
            player.storage.yttl_fenzhuang = false;
          },
          intro: {
            content: 'limited'
          }
        },
        yttl_bixian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseDiscardAfter'
          },
          filter(event, player) {
            if (event.player != player && event.player.isIn()) {
              var cardx = [];
              event.player.getHistory('lose', function (evt) {
                if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.cards2.filterInD('d').length) cardx.addArray(evt.cards2.filterInD('d'));
              });
              return cardx.length >= 2;
            }
            return false;
          },
          forced: true,
          content() {
            'step 0';
            var cardx = [];
            trigger.player.getHistory('lose', function (evt) {
              if (evt.type == 'discard' && evt.getParent('phaseDiscard') == trigger && evt.cards2.filterInD('d').length) cardx.addArray(evt.cards2.filterInD('d'));
            });
            event.cardx = cardx;
            player.
            chooseCardButton(cardx, get.prompt2('yttl_bixian', trigger.player)).
            set('ai', function (button) {
              var att = get.attitude(_status.event.player, _status.event.targets0);
              if (button.link.suit == 'club') {
                if (!_status.event.targets0.isLinked() && att <= 0) {
                  return 2 * get.value(button.link, _status.event.player);
                } else if (!_status.event.targets0.isLinked() && att > 0) {
                  return 0;
                }
                return get.value(button.link, _status.event.player);
              } else {
                return get.value(button.link, _status.event.player);
              }
            }).
            set('targets0', trigger.player);
            'step 1';
            if (result.bool) {
              player.gain(result.links[0], 'gain2');
              if (result.links[0].suit == 'club' && !trigger.player.isLinked()) trigger.player.link();
            }
          },
          ai: {
            threaten: 1.3
          }
        },
        yttl_mouxian: {
          subSkill: {
            draw: {
              mod: {
                maxHandcard(player, num) {
                  return num - 1;
                }
              },
              trigger: {
                player: 'phaseDrawBegin2'
              },
              filter(event, player) {
                return !event.numFixed;
              },
              content() {
                trigger.num++;
              },
              mark: true,
              marktext2: '谋',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_mouxian.jpg',
              intro: {
                content: '你下个回合摸牌阶段多摸一张牌且弃牌阶段手牌上限-1.'
              },
              forced: true
            }
          },
          trigger: {
            player: 'phaseJieshuBegin'
          },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('yttl_mouxian'), function (card, player, target) {
              return target != player && !target.hasSkill('yttl_mouxian_draw');
            }).
            set('ai', function (target) {
              if (target.hasJudge('lebu')) return 0.5;
              if (target.hasJudge('bingliang')) return 0.3;
              return get.attitude(player, target);
            });
            'step 1';
            if (result.bool) {
              result.targets[0].addTempSkill('yttl_mouxian_draw', { player: 'phaseEnd' });
            }
          }
        },
        yttl_duanzhu2: {
          ai: {
            order: 9,
            result: {
              target(player, target) {
                if (target.hasEmptySlot('equip1')) return 2;
                return 0;
              }
            },
            threaten: 2
          },
          enable: 'phaseUse',
          filter(event, player) {
            var cardsx = player.getExpansions('yttl_duanzhu');
            return cardsx.length >= 2;
          },
          filterTarget(card, player, target) {
            if (target.hasDisabledSlot('equip1')) return false;
            return true;
          },
          content() {
            'step 0';
            var cardsx = player.getExpansions('yttl_duanzhu');
            var dialog = ui.create.dialog('锻铸<br>请选择置于【' + get.translation(target) + '】装备区的装备牌,先选择的额外拥有后一张装备牌的技能,此牌离开装备区后变回原装备', cardsx, 'hidden');
            player.chooseButton(2, dialog, true);
            'step 1';
            player.lose(result.links, ui.special);
            event.cardsx = result.links;
            player.$throw(event.cardsx);
            var name = event.cardsx[0].name + 'yttl_duanzhu';
            lib.card[name] = get.copy(get.info(event.cardsx[0]));
            lib.card[name].cardimage = event.cardsx[0].name;
            lib.card[name].source_name = event.cardsx[0].name;
            lib.translate[name] = lib.translate[event.cardsx[0].name];
            var skills1 = get.copy(get.info(event.cardsx[0])).skills;
            var skills2 = get.copy(get.info(event.cardsx[1])).skills;
            if (skills1 && skills2) {
              lib.card[name].skills = skills1.concat(skills2);
              lib.translate[name + '_info'] = '<li>' + lib.translate[event.cardsx[0].name + '_info'] + '<br><br><li>' + lib.translate[event.cardsx[1].name + '_info'];
            } else if (skills1) {
              lib.card[name].skills = skills1;
              lib.translate[name + '_info'] = '<li>' + lib.translate[event.cardsx[0].name + '_info'];
            } else if (skills2) {
              lib.card[name].skills = skills2;
              lib.translate[name + '_info'] = '<li>' + lib.translate[event.cardsx[1].name + '_info'];
            } else {
              lib.card[name].skills = [];
              lib.translate[name + '_info'] = '';
            }
            lib.card[name].onLose = function () {
              var xxx = card.xxx;
              xxx.discard();
              player.$throw(xxx);
              delete card.xxx;
              card.init([card.suit, card.number, lib.card[card.name].source_name, card.nature]);
            };
            event.cardsx[0].init([event.cardsx[0].suit, event.cardsx[0].number, name, event.cardsx[0].nature]);
            event.cardsx[0].xxx = event.cardsx[1];
            player.$give(event.cardsx[0], target, false);
            target.equip(event.cardsx[0]);
            //event.cardsx[0].classList.add('glow');
          },
          audio: 'yttl_duanzhu'
        },
        yttl_duanzhu: {
          group: 'yttl_duanzhu2',
          marktext2: '锻',
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_duanzhu.jpg',
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          },
          intro: {
            content: 'expansion',
            markcount: 'expansion'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'loseEnd' },
          filter(event, player) {
            var cardsx = player.getExpansions('yttl_duanzhu');
            if (cardsx.length >= 5) return false;
            if (event.player == player) return false;
            if (event.parent.name == 'useCard') return false;
            var cards = event.cards.filter(function (card) {
              if (get.position(card) != 'd') return false;
              if (get.type(card) != 'equip') return false;
              if (get.subtype(card) != 'equip1') return false;
              if (card.origin_name) return false;
              if (!lib.inpile.includes(card.name)) {
                return false;
              }
              return true;
            });
            return cards.length;
          },
          forced: true,
          content() {
            'step 0';
            'step 1';
            var cards = trigger.cards.filter(function (card) {
              if (get.position(card) != 'd') return false;
              if (get.type(card) != 'equip') return false;
              if (get.subtype(card) != 'equip1') return false;
              if (card.origin_name) return false;
              if (!lib.inpile.includes(card.name)) {
                return false;
              }
              return true;
            });
            var cardsx = player.getExpansions('yttl_duanzhu');
            if (cards.length + cardsx.length < 6) {
              event._result = { bool: true, links: cards };
            } else {
              player.chooseCardButton(true, cards, 5 - cardsx.length, '选择要置于侠客牌上的牌');
            }
            'step 2';
            if (result.bool) {
              player.addToExpansion(result.links, 'gain2', 'log').gaintag.add('yttl_duanzhu');
            }
          }
        },
        yttl_zhengqi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'roundStart' },
          forced: true,
          filter(event, player) {
            return player.countCards('h');
          },
          content() {
            'step 0';
            player.chooseCardTarget({
              position: 'h',
              selectTarget: 2,
              filterCard: lib.filter.cardDiscardable,
              filterTarget(card, player, target) {
                return !target.hasSkill('yttl_zhengqi_zheng');
              },
              ai1(card) {
                return -1;
              },
              ai2(target) {
                return -1;
              },
              prompt: get.prompt2('yttl_zhengqi')
            });
            'step 1';
            if (result.bool) {
              player.discard(result.cards);
              result.targets[0].addSkill('yttl_zhengqi_zheng');
              result.targets[1].addSkill('yttl_zhengqi_zheng');
              result.targets[0].storage.yttl_zhengqi_zheng = result.targets[1];
              result.targets[1].storage.yttl_zhengqi_zheng = result.targets[0];
              result.targets[0].markSkillCharacter('yttl_zhengqi_zheng', result.targets[1], '整旗', '交换回合');
              result.targets[1].markSkillCharacter('yttl_zhengqi_zheng', result.targets[0], '整旗', '交换回合');
            }
          },
          subSkill: {
            zheng: {
              trigger: { player: 'phaseBefore' },
              forced: true,
              _priority: 200,
              popup: false,
              firstDo: true,
              temp: true,
              charlotte: true,
              filter(event, player) {
                if (event.yttl_zhengqi_zheng && event.yttl_zhengqi_zheng === true) return false;
                return true;
              },
              content() {
                player.removeSkill('yttl_zhengqi_zheng');
                player.unmarkSkill('yttl_zhengqi_zheng');
                if (player.storage.yttl_zhengqi_zheng.isAlive()) {
                  trigger.player = player.storage.yttl_zhengqi_zheng;
                }
                delete player.storage.yttl_zhengqi_zheng;
              }
            }
          }
        },
        yttl_yiyuan: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: { global: 'phaseUseBegin' },
          filter(event, player) {
            return event.player != player && player.countCards('he', { type: 'equip' });
          },
          forced: true,
          content() {
            'step 0';
            var next = player.
            chooseCard('he', '义援<br>是否交给' + get.translation(trigger.player) + '一张装备牌？', function (card, player) {
              return get.type(card) == 'equip';
            }).
            set('ai', function (card) {
              var att = get.attitude(player, trigger.player);
              if (att > 0) {
                if (player.countCards('he', { subtype: get.subtype(card) }) > 1 && trigger.player.hasEmptySlot(get.subtype(card))) {
                  return 30 - get.equipValue(card);
                } else if (get.type(card) == 'equip' && trigger.player.hasEmptySlot(get.subtype(card))) {
                  return 20 - get.equipValue(card);
                }
                return -1;
              }
              return -1;
            });
            'step 1';
            if (result.bool) {
              //trigger.player.gain(result.cards,'give');
              player.give(result.cards, trigger.player, true);
              if (trigger.player.countCards('h', 'sha')) {
                var num = 0;
                trigger.player.countCards('h', function (cardx) {
                  var number = cardx.number;
                  if (cardx.name == 'sha' && num < number) num = number;
                });
                trigger.player.
                chooseCard('h', '交给' + get.translation(player) + '一张点数最大的杀？', function (card, player) {
                  return card.name == 'sha' && card.number == num;
                }).
                set('ai', function (card) {
                  var att = get.attitude(trigger.player, player);
                  var bool = true;
                  if (trigger.player.countCards('h', 'sha') > 1) {
                    bool = true;
                  } else {
                    if (
                    game.hasPlayer(function (current) {
                      return get.attitude(trigger.player, current) < 0 && trigger.player.canUse('sha', current);
                    }))

                    bool = false;
                  }
                  if (bool) return att;
                  return -1;
                });
              } else {
                event.finish();
              }
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              //trigger.player.line(player);
              trigger.player.give(result.cards, player, true);
              //player.gain(result.cards,'give');
            }
          }
        },
        yttl_yingxi: {
          ai: {
            effect: {
              player(card, player, target) {
                var num = (14 - card.number) / 5;
                if (card.name == 'sha') return [1, num];
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          mod: {
            attackRange(player, distance) {
              return distance + 2;
            }
          },
          trigger: {
            player: 'useCardToPlayered'
          },
          check(event, player) {
            return true;
            var att = get.attitude(player, event.target);
            if (att > 0) return get.effect(event.target, { name: 'guohe' }, player, player) > 0;
            return get.attitude(player, event.target) < 0;
          },
          filter(event, player) {
            if (typeof event.card.number != 'number') return false;
            return event.card && event.card.name == 'sha' && event.target.countDiscardableCards(player, 'hej');
          },
          logTarget: 'target',
          content() {
            player.
            discardPlayerCard([1, Infinity], trigger.target, 'hej', 'visible').
            set('filterButton', function (button) {
              var number = _status.event.number,
                num = 0;
              for (var i = 0; i < ui.selected.buttons.length; i++) {
                num += ui.selected.buttons[i].link.number;
              }
              if (num + button.link.number > number) return false;
              return true;
            }).
            set('number', trigger.card.number);
          }
        },
        yttl_zhengyuan: {
          trigger: {
            player: 'phaseDrawBegin1'
          },
          forced: true,
          filter(event, player) {
            return !event.numFixed;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          content() {
            'step 0';
            var check;
            var num = game.countPlayer(function (current) {
              return current != player && get.attitude(player, current) > 0;
            });
            check = num >= 2;
            player.
            chooseTarget(
              get.prompt('yttl_zhengyuan'),
              [1, 2],
              function (card, player, target) {
                return player != target;
              },
              function (target) {
                var player = _status.event.player;
                var att = get.attitude(player, target);
                if (!_status.event.aicheck) return 0;
                if (player.hasSkillTag('noh') && !player.countCards('h')) return 0;
                if (player.needsToDiscard(_status.event.numm) && player.skipList.includes('phaseUse')) return att;
                return att;
              }
            ).
            set('aicheck', check).
            set('numm', trigger.num);
            'step 1';
            if (result.bool) {
              game.asyncDraw(result.targets);
              trigger.changeToZero();
            } else {
              event.finish();
            }
            'step 2';
          },
          ai: {
            threaten: 1.3,
            expose: 0.3
          }
        },
        yttl_zhengyuan_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filterCard(card, player) {
            return true;
          },
          filter(event, player) {
            return player.countCards('h') >= 2;
          },
          usable: 1,
          selectTarget: [1, 2],
          selectCard: [2, 2],
          check(card) {
            if (ui.selected.targets.length != 2) return -1;
            return 6 - get.value(card);
          },
          filterTarget(card, player, target) {
            return target != player;
          },
          content() {
            target.draw();
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                return 1;
              }
            },
            threaten: 1
          }
        },
        yttl_shameng: {
          filter(event, player) {
            return event.parent.name = 'phase';
          },
          trigger: {
            player: ['phaseUseBegin']
          },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('yttl_shameng'), '是否选择一名角色与其交换所有手牌,若如此做,回合结束时你与其交换手牌', function (card, player, target) {
              if (!player.countCards('h') && !target.countCards('h')) return false;
              return target != player;
            }).
            set('ai', function (target) {
              var att = get.attitude(player, target);
              if (att < 0) {
                return target.countCards('h') - player.countCards('h') + 1;
              } else if (att > 0) {
                return player.countCards('h') - target.countCards('h') - 2;
              } else return -1;
            });
            'step 1';
            if (result.bool) {
              player.swapHandcards(result.targets[0]);
              trigger.parent;
              var next = game.createEvent('yttl_shameng_after', false);
              next.player = player;
              next.target = result.targets[0];
              next.setContent(function () {
                if (player.isIn() && target.isIn() && (player.countCards('h') || target.countCards('h'))) player.swapHandcards(target);
              });
              event.next.remove(next);
              trigger.parent.after.push(next);
            }
          }
        },
        //界胡青牛 霸天 20230706
        yttl_huitian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filterTarget(card, player, target) {
            return player.canCompare(target);
          },
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          content() {
            'step 0';
            player.chooseToCompare(target);
            player.say(['哪里来的野小子,还不速速离去？', '老夫只救明教中人!'].randomGet());
            'step 1';
            if (result.bool) {
              if (
              game.hasPlayer(function (current) {
                return current.isDamaged();
              }))
              {
                player.
                chooseTarget('是否选择一名角色回复一点体力?', function (card, player, target) {
                  return target.isDamaged();
                }).
                set('ai', function (target) {
                  var player = _status.event.player;
                  var effect = get.attitude(player, target) > 0 ? 1 : -1;
                  if (effect < 0) return -1;
                  var count = target.maxHp - target.hp;
                  var bp = get.jy_bangpai(target);
                  if (bp.includes('jy_bosi') || bp.includes('jy_mingjiao')) {
                    if (count >= 2) return 4;
                    return 2;
                  } else {
                    return 4;
                  }
                });
              } else {
                event.finish();
              }
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              player.line(result.targets[0], 'green');
              var target = result.targets[0];
              var count = target.maxHp - target.hp;
              var bp = get.jy_bangpai(target);
              if (bp.includes('jy_bosi') || bp.includes('jy_mingjiao')) {
                if (count >= 2) {
                  target.recover(2);
                } else {
                  target.recover(1);
                }
              } else {
                target.recover(1);
                player.draw(2);
              }
            }
          },
          ai: {
            result: {
              player(player, target) {
                if (player.hasSkill('yttl_bianjiu')) return 0.5;
                return -0.5;
              },
              target(player, target) {
                var att = get.attitude(player, target);
                if (att < 0) return -0.4;
                if (att > 0 && player.hasSkill('yttl_bianjiu')) return 0.5;
                if (att > 0) return -0.4;
                return -0.5;
              }
            },
            order: 6
          }
        },
        yttl_bianjiu_tao: {
          enable: 'chooseToUse',
          filter(event, player) {
            if (player.storage.yttl_bianjiu_tao) return false;
            if (!player.hasMark('yttl_bianjiu')) return false;
            if (event.type == 'dying') {
              if (player == event.dying) return true;
            }
            return false;
          },
          viewAsFilter(player) {
            if (player.storage.yttl_bianjiu_tao) return false;
            if (!player.hasMark('yttl_bianjiu')) return false;
            var event = _status.event;
            if (event.type == 'dying') {
              if (player == event.dying) return true;
            }
            return false;
          },
          ignoreMod: true,
          precontent() {
            event.result.card = {
              name: 'tao'
            };
            player.storage.yttl_bianjiu_tao = true;
            player.removeMark('yttl_bianjiu');
            var target = game.findPlayer(function (current) {
              return current.hasSkill('yttl_bianjiu');
            });
            if (target) {
              if (target != player) target.line(player);
              target.say(['普天这下,没有我胡青牛解不了的毒!', '起死回生,妙手回春!', '待老夫为你施上一针!'].randomGet());
            }
          },
          filterCard() {
            return false;
          },
          selectCard: [0, 1],
          viewAs: {
            name: 'tao'
          },
          prompt: "弃置一枚'灸'标记视为使用一张【九花玉露丸】",
          check() {
            return 1;
          },
          ai: {
            save: true,
            skillTagFilter(player, tag, target) {
              if (player.storage.yttl_bianjiu_tao) return false;
              if (!player.hasMark('yttl_bianjiu')) return false;
              if (player != target) return false;
              return true;
            }
          }
        },
        yttl_bianjiu_wuxie: {
          enable: 'chooseToUse',
          filterCard() {
            return false;
          },
          selectCard: [0, 1],
          viewAsFilter(player) {
            if (!player.hasMark('yttl_bianjiu')) return false;
            return true;
          },
          viewAs: {
            name: 'wuxie'
          },
          ignoreMod: true,
          precontent() {
            event.result.card = {
              name: 'wuxie'
            };
            player.removeMark('yttl_bianjiu');
            var target = game.findPlayer(function (current) {
              return current.hasSkill('yttl_bianjiu');
            });
            if (target) {
              if (target != player) target.line(player);
              target.say(['针灸绝技,速见神效!', '老夫只救明教中人!', '待老夫为你施上一针!'].randomGet());
            }
          },
          prompt: '弃置一枚灸标记,视为使用一张【金刚护体】',
          check() {
            return 1;
          }
        },
        yttl_bianjiu: {
          marktext: '灸',
          intro: {
            name: '砭灸',
            name2: '灸',
            content: '当前有#个<灸>'
          },
          global: ['yttl_bianjiu_wuxie', 'yttl_bianjiu_tao'],
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'compare'
          },
          forced: true,
          content() {
            'step 0';
            var bool = true;
            if (trigger.iwhile && typeof trigger.iwhile == 'number') bool = false;
            if (bool) {
              player.chooseBool(get.prompt2('yttl_bianjiu', trigger.player)).set('ai', function () {
                return get.attitude(player, trigger.player) > 0;
              });
            } else event.goto(2);
            'step 1';
            if (result && result.bool) {
              trigger.player.addMark('yttl_bianjiu');
            }
            'step 2';
            player.chooseBool(get.prompt2('yttl_bianjiu', trigger.target)).set('ai', function () {
              return get.attitude(player, trigger.target) > 0;
            });
            'step 3';
            if (result.bool) {
              trigger.target.addMark('yttl_bianjiu');
            }
          }
        },
        //旧胡青牛
        yttl_huitian_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filterTarget(card, player, target) {
            if (player.hp != target.hp && player.countCards('h') != target.countCards('h')) return false;
            return player.canCompare(target);
          },
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          content() {
            'step 0';
            player.chooseToCompare(target);
            //.set('small',true);
            'step 1';
            if (result.bool) {
              event.recover = game.filterPlayer(function (current) {
                return get.distance(target, current, 'attack') <= 1 && current.isDamaged();
              });
            } else {
              event.finish();
            }
            'step 2';
            if (event.recover.length) {
              player.
              chooseTarget('是否选择一名角色回复一点体力?', function (card, player, target) {
                return _status.event.list.includes(target);
              }).
              set('list', event.recover).
              set('ai', function (target) {
                var player = _status.event.player;
                return get.attitude(player, target);
              });
            } else {
              event.finish();
            }
            'step 3';
            if (result.bool) {
              player.line(result.targets[0], 'green');
              result.targets[0].recover();
            }
          },
          ai: {
            result: {
              target(player, target) {
                var hs = player.getCards('h');
                if (hs.length < 3) return 0;
                var bool = false;
                for (var i = 0; i < hs.length; i++) {
                  if (hs[i].number >= 9 && get.value(hs[i]) < 7) {
                    bool = true;
                    break;
                  }
                }
                var recover = game.filterPlayer(function (current) {
                  return get.attitude(player, current) > 0 && get.distance(target, current, 'attack') <= 1 && current.isDamaged();
                });
                if (!bool) return 0;
                if (recover.length) return -3;
                return -0.5;
              }
            },
            order: 3
          }
        },
        yttl_bianjiu_old_wuxie: {
          mark: true,
          marktext2: '灸',
          charlotte: true,
          intro: { name: '灸', content: 'mark' },
          markimage: 'extension/金庸群侠传/image/icon/jybianjiu.jpg',
          enable: 'chooseToUse',
          filterCard() {
            return false;
          },
          selectCard: [0, 1],
          viewAsFilter(player) {
            if (!player.hasMark('yttl_bianjiu_old_wuxie')) return false;
            return true;
          },
          viewAs: { name: 'wuxie' },
          precontent() {
            player.removeMark('yttl_bianjiu_old_wuxie');
          },
          prompt: "弃置一枚'灸'标记视为使用一张【金刚护体】",
          check() {
            return 1;
          }
        },
        yttl_bianjiu_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'compare' },
          forced: true,
          content() {
            'step 0';
            var bool = true;
            if (trigger.iwhile && typeof trigger.iwhile == 'number') bool = false;
            if (bool) {
              player.chooseBool('是否对' + get.translation(trigger.player) + '发动【砭灸】？').set('ai', function () {
                return get.attitude(player, trigger.player) > 0;
              });
            } else event.goto(2);
            'step 1';
            if (result && result.bool) {
              trigger.player.addSkill('yttl_bianjiu_old_wuxie');
              trigger.player.addMark('yttl_bianjiu_old_wuxie');
            }
            'step 2';
            player.chooseBool('是否对' + get.translation(trigger.target) + '发动【砭灸】？').set('ai', function () {
              return get.attitude(player, trigger.target) > 0;
            });
            'step 3';
            if (result.bool) {
              trigger.target.addSkill('yttl_bianjiu_old_wuxie');
              trigger.target.addMark('yttl_bianjiu_old_wuxie');
            }
          }
        },
        //旧私授
        yttl_sishou: {
          audio: 'yttl_sishou2',
          enable: 'phaseUse',
          filter(event, player) {
            if (player.countCards('h') == 0) return false;
            return game.hasPlayer(function (target) {
              return player.canCompare(target);
            });
          },
          filterTarget(card, player, target) {
            return player.canCompare(target);
          },
          usable: 1,
          content() {
            'step 0';
            player.chooseToCompare(target, function (card) {
              if (card.name == 'du') return 20;
              var player = get.owner(card);
              var target = _status.event.parent.target;
              if (player != target && get.attitude(player, target) > 0) {
                return -card.number;
              }
              return card.number;
            });
            'step 1';
            event.count = 0;
            event.gained = [];
            if (result && result.winner == player) {
              event.num = result.num1;
              event.source = player;
            } else if (result && result.winner == target) {
              event.num = result.num2;
              event.source = target;
            } else {
              event.finish();
            }
            'step 2';
            event.cards = get.cards(1);
            event.source.showCards(event.cards, '私授');
            event.gained.push(event.cards[0]);
            event.count += event.cards[0].number;
            'step 3';
            if (event.count < event.num) {
              event.goto(2);
            } else {
              event.source.gain(event.gained, 'gain2');
            }
          },
          ai: {
            basic: {
              order: 10
            },
            expose: 0.2,
            result: {
              target(player, target) {
                if (player.countCards('h', 'du') && get.attitude(player, target) < 0) return -1;
                if (player.countCards('h') <= player.hp) return 0;
                var maxnum = 0;
                var cards2 = target.getCards('h');
                for (var i = 0; i < cards2.length; i++) {
                  var number = cards2[i].number;
                  if (number > maxnum) {
                    maxnum = number;
                  }
                }
                if (maxnum > 10) maxnum = 10;
                if (maxnum < 5 && cards2.length > 1) maxnum = 5;
                var cards = player.getCards('h');
                if (Array.isArray(cards)) for (var i of cards) {
                  if (i.number > maxnum) return -1;
                }
                return 0;
              }
            }
          }
        },
        //新私授--霸天
        yttl_sishou2: {
          mod: {
            aiOrder(player, card, num) {
              if (card.name == 'wuzhong') return num + 10;
              return num;
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filter(event, player) {
            if (
            player.countCards('h', function (card) {
              return get.type(card, 'trick') == 'trick';
            }) > 0)

            return true;
            return false;
          },
          filterCard(card, player, event) {
            return get.type(card, 'trick') == 'trick';
          },
          filterTarget(card, player, target) {
            return player != target;
          },
          usable: 1,
          selectCard: [1, Infinity],
          discard: false,
          lose: false,
          delay: 0,
          content() {
            var num = 0;
            if (Array.isArray(cards)) for (var i of cards) {
              if (i.suit == 'heart') num++;
            }
            if (num > 0) {
              player.draw(cards.length * 2);
            } else {
              player.draw(cards.length);
            }
            player.give(cards, target, true);
            //target.gain(cards,player,'giveAuto');
          },
          ai: {
            basic: { order: 10 },
            expose: 0.2,
            result: {
              target(player, target) {
                var bool = game.hasPlayer(function (current) {
                  return current != target && current != player && get.attitude(player, current) > 0 && !current.hasSkillTag('nogain');
                });
                if (target.hasSkillTag('nogain')) {
                  if (bool) return 0;
                  return 1;
                }
                var num = 10;
                if (target.hasJudge('lebu')) num / 3;
                if (target.isTurnedOver()) num / 3;
                return num;
              }
            }
          }
        },
        //旧不渝
        yttl_buyu: {
          audio: 'yttl_buyu2',
          trigger: { global: 'compare' },
          forced: true,
          filter(event, player) {
            if (event.iwhile && !event.target.countCards('h')) return false;
            return event.player.countCards('h') || event.target.countCards('h');
          },
          content() {
            'step 0';
            var targets = [];
            if (trigger.target.countCards('h')) targets.add(trigger.target);
            if (!trigger.iwhile && trigger.player.countCards('h')) targets.add(trigger.player);
            player.
            chooseTarget(get.prompt2('yttl_buyu'), function (card, player, target) {
              return targets.includes(target);
            }).
            set('ai', function (target) {
              return get.attitude(player, target);
            });
            'step 1';
            if (result.bool) {
              event.target = result.targets[0];
            } else {
              event.finish();
            }
            'step 2';
            target.chooseCard(1, 'h', '【不渝】</b><br>展示一张手牌', true).set('ai', function (card) {
              return card.number;
            });
            'step 3';
            if (result.bool) {
              target.showCards(result.cards, '不渝');
              if (target == trigger.player) {
                trigger.num1 += result.cards[0].number;
                if (trigger.num1 > 13) trigger.num1 = 13;
                var strNumber = get.strNumber(trigger.num1);
                game.log(target, '拼点牌点数改为', '#y' + strNumber);
              } else {
                trigger.num2 += result.cards[0].number;
                if (trigger.num2 > 13) trigger.num2 = 13;
                var strNumber = get.strNumber(trigger.num2);
                game.log(target, '拼点牌点数改为', '#y' + strNumber);
              }
            }
          }
        },
        //新不渝--霸天
        yttl_buyu2: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCard' },
          forced: true,
          filter(event, player) {
            return get.tag(event.card, 'damage') && get.type(event.card) == 'trick' && !player.getStorage('yttl_buyu2').includes(event.card.name);
          },
          group: ['yttl_buyu2_target'],
          content() {
            player.markAuto('yttl_buyu2', [trigger.card.name]);
          },
          //onremove:true,
          marktext: '渝',
          intro: { content: '已记录牌名:$' },
          subSkill: {
            target: {
              audio: 'ext:金庸群侠传/peiyin:2',
              trigger: { target: 'useCardToTargeted' },
              forced: true,
              filter(event, player) {
                return get.tag(event.card, 'damage') && get.type(event.card) == 'trick' && !player.getStorage('yttl_buyu2').includes(event.card.name);
              },
              content() {
                trigger.parent.excluded.add(player);
                var evt = trigger;
                if (evt.cards.length) {
                  game.log(evt.card, '(', evt.cards, ')', '对', player, '无效!');
                } else {
                  game.log(evt.card, '对', player, '无效!');
                }
              }
            }
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                if (get.tag(card, 'damage') && get.type(card) == 'trick' && !target.getStorage('yttl_buyu2').includes(card.name)) return 'zeroplayertarget';
              }
            }
          }
        },
        yttl_zhukou: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'rewriteDiscardResult' },
          forced: true,
          filter(event, player) {
            return player.countCards('h') > 0 && event.player != event.target && player.canUse({ name: 'sha' }, event.player, false);
          },
          content() {
            'step 0';
            player.
            chooseToDiscard('h', get.prompt('yttl_zhukou', trigger.player), '弃置一张手牌视为对其使用一张杀').
            set('ai', function (card) {
              if (get.effect(trigger.player, { name: 'sha' }, player, player) > 0) {
                return 6 - get.value(card);
              }
              return -1;
            })(
              'step 1');
            if (result.bool) {
              player.useCard({ name: 'sha' }, trigger.player).animate = false;
            }
          }
        },
        yttl_zhuizei: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'rewriteGainResult'
          },
          prompt2(event, player) {
            var prompt = '<span style="color: #FF0000">【' + get.translation(event.player) + '】</span>';
            prompt += '即将获得<span style="color: #FF0000">【' + get.translation(event.target) + '】</span>的';
            prompt += get.translation(event.result.cards) + ',是否发动【追贼】？';
            return prompt;
          },
          check(event, player) {
            return get.attitude(player, event.player) < 0 && get.attitude(player, event.target) > 0;
          },
          logTarget: 'player',
          filter(event, player) {
            if (event.player == event.target) return false;
            return event.player != player && player.canCompare(event.player);
          },
          content() {
            'step 0';
            player.chooseToCompare(trigger.player);
            'step 1';
            if (result.bool) {
              trigger.cancel();
            }
          }
        },
        yttl_zhawang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'phaseUseBegin' },
          logTarget: 'player',
          check(event, player) {
            var hp = player.hp * 2,
              num = 0,
              group = [];
            var players = game.filterPlayer();
            for (var i of players) {
              if (!group.includes(i.group)) {
                var att = get.attitude(player, i) > 0;
                var num = get.jyGuoHeAI(player, i, 'he');
                if (att && num > 0 || !att && num < 0) {
                  if (i != event.player) group.add(i.group);
                }
              }
            }
            if (player.hp != 1) return false;
            if (group.length + event.player.needsToDiscard() > hp + 1 && get.attitude(player, event.player) < 0) return true;
            return false;
          },
          filter(event, player) {
            if (player.hp < 1) return false;
            if (event.player == player) return false;
            return true;
          },
          content() {
            trigger.cancel();
            var num = player.hp;
            if (num > 0) player.loseHp(num);
          },
          group: 'yttl_zhawang_dying',
          subSkill: {
            dying: {
              audio: 'ext:金庸群侠传/peiyin:2',
              trigger: { player: 'dying' },
              forced: true,
              filter(event, player) {
                return game.hasPlayer(function (current) {
                  return current.countDiscardableCards(player, 'he');
                });
              },
              content() {
                'step 0';
                player.
                chooseTarget(get.prompt('yttl_zhawang'), '弃置任意名不同势力的角色各一张牌', [1, Infinity], function (card, player, target) {
                  if (target.group == 'unknown') return false;
                  for (var i = 0; i < ui.selected.targets.length; i++) {
                    if (ui.selected.targets[i].group == target.group) return false;
                  }
                  return target.countDiscardableCards(player, 'he');
                }).
                set('ai', function (target) {
                  return get.effect(
                    target,
                    {
                      name: 'guohe_copy2'
                    },
                    player,
                    player
                  );
                }).
                set('complexSelect', true);
                'step 1';
                if (result.bool) {
                  for (var i = 0; i < result.targets.length; i++) {
                    player.discardPlayerCard('he', result.targets[i], true);
                  }
                }
              }
            }
          }
        },
        yttl_celuan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          multitarget: true,
          multiline: true,
          line: 'fire',
          filterTarget(card, player, target) {
            if (target.group == 'unknown') return false;
            if (ui.selected.targets.length == 0) return player != target && target.countCards('h');
            if (ui.selected.targets.length) {


              //var num=ui.selected.targets[0].countCards('h');
              // if(ui.selected.targets.length-2>=num) return false;
            }for (var i = 0; i < ui.selected.targets.length; i++) {if (ui.selected.targets[i].group == target.group) return false;
            }
            return true;
          },
          filter(event, player) {
            if (game.countGroup() < 2) return false;
            return player.countCards('h') > 0;
          },
          complexSelect: true,
          discard: false,
          filterCard: true,
          lose: false,
          position: 'h',
          selectTarget() {
            return game.countGroup();
          },
          targetprompt: ['逆党', '诛杀逆党', '诛杀逆党', '诛杀逆党', '诛杀逆党', '诛杀逆党', '诛杀逆党', '诛杀逆党', '诛杀逆党', '诛杀逆党', '诛杀逆党'],
          check(card) {
            return 5 - get.value(card);
          },
          content() {
            'step 0';
            player.give(cards, targets[0], true).gaintag.add('yttl_celuan');
            //targets[0].gain(cards,player,'give','log').gaintag.add('yttl_celuan');
            event.cardx = cards[0];
            event.num = 1;
            'step 1';
            if (event.num == targets.length) event.num = 1;
            if (targets[event.num].isIn() && targets[0].isIn() && targets[0].countDiscardableCards(targets[event.num], 'h')) {
              targets[event.num].discardPlayerCard('h', targets[0], true).set('boolline', true);
            } else {
              event.finish();
            }
            'step 2';
            if (result && result.bool && result.links) {
              if (result.links.includes(event.cardx)) {
                if (targets[event.num].isDamaged()) {
                  targets[event.num].recover();
                  game.log(targets[event.num], '因弃置了', targets[0], '的', event.cardx, '回复一点体力');
                }
                event.finish();
              }
            } else {
              event.finish();
            }
            'step 3';
            event.num++;
            event.goto(1);
          },
          ai: {
            result: {
              target(player, target) {
                if (ui.selected.targets.length == 0) {
                  if (target.hasSkillTag('nogain')) return -0.5;
                  return -target.countCards('h');
                } else {
                  var att = get.attitude(player, target);
                  if (att > 0) return 1;
                  return -0.5;
                }
              }
            },
            order: 3
          }
        },
        yttl_youzhu: {
          subSkill: {
            off: {
              mark: true,
              marktext2: '诛',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_youzhu.jpg',
              intro: {
                content: '你本轮已发动【诱诛】.'
              }
            }
          },
          trigger: {
            global: 'phaseJieshuBegin'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          filter(event, player) {
            if (player.hasSkill('yttl_youzhu_off')) return false;
            return game.hasPlayer(function (current) {
              return current != event.player && current.countDiscardableCards(event.player, 'he');
            });
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('yttl_youzhu'), function (card, player, target) {
              return target != _status.event.sourcex && target.countDiscardableCards(_status.event.sourcex, 'he');
            }).
            set('ai', function (target) {
              var att1 = get.attitude(_status.event.player, _status.event.sourcex);
              var att2 = get.attitude(_status.event.player, target);
              if (att1 < 0 && att2 < 0 && target.countCards('he') == 1) return 20;
              if (att1 < 0 && att2 < 0) return 0.5;
              return 0;
            }).
            set('sourcex', trigger.player);
            'step 1';
            if (result.bool) {
              player.addTempSkill('yttl_youzhu_off', 'roundStart');
              trigger.player.discardPlayerCard('he', result.targets[0], true);
              event.targetss = result.targets[0];
              event.hCards = event.targetss.getCards('h');
              event.eCards = event.targetss.getCards('e');
            } else {
              event.finish();
            }
            'step 2';
            if (result.links?.length) {
              var bool = false;
              if (event.hCards.length == 1 && event.hCards.includes(result.links[0])) {
                bool = true;
              } else if (event.eCards.length == 1 && event.eCards.includes(result.links[0])) {
                bool = true;
              }
              if (bool) {
                trigger.player.damage(event.targetss);
              }
            }
          }
        },
        yttl_cifeng: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'phaseJieshuBegin' },
          filter(event, player) {
            var players = game.filterPlayer2();
            var num = 0,
              targets = [],
              number = 0;
            for (var target of players) {
              var historys = target.getHistory('sourceDamage');
              if (historys.length) {
                number++;
                if (target.isIn()) targets.add(target);
                for (var history of historys) {
                  num += history.num;
                }
              }
            }
            event.set('yttl_cifeng_list', [number, targets]);
            return num >= 2;
          },
          content() {
            'step 0';
            event.targets = trigger.yttl_cifeng_list[1];
            event.targets.add(player);
            event.num = trigger.yttl_cifeng_list[0];
            if (event.targets.length) {
              player.
              chooseControl().
              set('choiceList', ['摸' + get.cnNumber(event.num, true) + '张牌', '令' + get.translation(event.targets) + '各摸一张牌']).
              set('ai', function () {
                var number = 0;
                for (var play of event.targets) {
                  var att = get.attitude(player, play);
                  if (att > 0) {
                    number++;
                  } else {
                    number--;
                  }
                }
                if (number > event.num) return 1;
                return 0;
              });
            } else event._result = { index: 0 };
            'step 1';
            if (result.index == 0) {
              player.draw(event.num);
            } else {
              player.line(event.targets);
              game.asyncDraw(event.targets);
            }
          }
        },
        yttl_bianxun: {
          trigger: { global: 'useCardEnd' },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          filter(event, player) {
            if (_status.currentPhase == player) return false;
            if (event.player == player) return false;
            return player.countCards('hs', { name: event.card.name }) > 0;
          },
          content() {
            'step 0';
            player.
            chooseToDiscard('hs', get.prompt2('yttl_bianxun'), '弃置一张与' + get.translation(trigger.card) + '名字相同的手牌并摸两张牌', function (card, player) {
              if (card.name != trigger.card.name) return false;
              return lib.filter.cardDiscardable.apply(this, arguments);
            }).
            set('ai', function (card) {
              return 8 - get.value(card);
            })(
              'step 1');
            if (result.bool) {
              player.draw(2);
            }
          }
        },
        yttl_changyi: {
          subSkill: {
            die: {
              trigger: { global: 'die' },
              forced: true,
              forceDie: true,
              popup: false,
              silent: true,
              filter(event, player) {
                return event.player == player.storage.yttl_changyi_two || event.player == player;
              },
              content() {
                'step 0';
                player.unmarkSkill('yttl_changyi_two');
                player.storage.yttl_changyi_two.unmarkSkill('yttl_changyi_two');
                'step 1';
                player.removeSkill('yttl_changyi_two');
              }
            },
            two: {
              group: 'yttl_changyi_die',
              trigger: { global: 'damageSource' },
              audio: 'ext:金庸群侠传/peiyin:2',
              forced: true,
              filter(event, player) {
                if (!event.card || !event.card.name) return false;
                if (!event.cards || !event.cards.filterInD('od').length) return false;
                if (!player.storage.yttl_changyi_two || !player.storage.yttl_changyi_two.isIn()) return false;
                return event.source == player || event.source == player.storage.yttl_changyi_two;
              },
              content() {//QQQ
                'step 0';
                if (trigger.source == player) {
                  event.source = player;
                  event.target = player.storage.yttl_changyi_two;
                } else {
                  event.source = player.storage.yttl_changyi_two;
                  event.target = player;
                }
                event.cards = trigger.cards.filterInD('od');
                'step 1';
                event.source.
                chooseBool('长忆<br>是否令' + get.translation(event.target) + '获得' + get.translation(event.cards) + '？').
                set('ai', function () {
                  var player = _status.event.player;
                  var targets0 = _status.event.targets0;
                  return get.attitude(targets0, player) > 0;
                }).
                set('targets0', event.target);
                'step 2';
                if (result.bool) {
                  event.source.give(event.cards, event.target, true);
                  //event.target.gain(event.cards,'give','log',event.source);
                }
              }
            }
          },
          enable: 'phaseUse',
          mark: true,
          limited: true,
          intro: {
            content: 'limited'
          },
          init(player, skill) {
            player.storage[skill] = false;
          },
          filter(event, player) {
            if (player.storage.yttl_changyi) return false;
            if (player.storage.yttl_changyi_two) return false;
            if (player.hasSkill('yttl_changyi_two')) return false;
            return game.hasPlayer(function (current) {
              return current != player && current.hasSex('male');
            });
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filterTarget(card, player, target) {
            return target != player && target.hasSex('male');
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          content() {
            player.awakenSkill(event.name);
            player.storage[event.name] = true;
            player.line(target, 'green');
            game.log(target, '成为了', '【长忆】', '的目标');
            target.markSkillCharacter('yttl_changyi_two', player, '长忆', '使用牌造成伤害后,可将此牌交给长忆角色');
            player.markSkillCharacter('yttl_changyi_two', target, '长忆', '使用牌造成伤害后,可将此牌交给长忆角色');
            player.storage.yttl_changyi_two = target;
            player.addSkill('yttl_changyi_two');
          },
          ai: {
            order: 11,
            result: {
              target: 1
            }
          }
        },
        yttl_daoyin: {
          init(player, skill) {
            player.storage[skill] = false;
          },
          group: 'yttl_daoyin_end',
          subSkill: {
            end: {
              trigger: { player: ['phaseJieshuBegin', 'phaseZhunbeiEnd'] },
              popup: false,
              forced: true,
              filter(event, player, name) {
                if (player.storage.yttl_daoyin) return false;
                return player.countCards('h') > 0;
              },
              content() {
                if (trigger.name == 'phaseZhunbei') {
                  player.removeGaintag('yttl_daoyin');
                } else {
                  var cards = player.getCards('h');
                  player.addGaintag(cards, 'yttl_daoyin');
                }
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          derivation: ['yttl_lizong', 'jy_emei'],
          trigger: { player: 'phaseZhunbeiBefore' },
          filter(event, player) {
            if (player.storage.yttl_daoyin) return false;
            if (player.phaseNumber == 1) return false;
            return (
              player.countCards('h', function (card) {
                return card.hasGaintag('yttl_daoyin');
              }) == 0);

          },
          forced: true,
          _priority: 3,
          content() {
            player.loseMaxHp();
            player.addSkills('yttl_lizong');
            player.addSkills('jy_emei');
            player.removeSkills('yttl_bianxun');
            player.awakenSkill(event.name);
            player.storage[event.name] = true;
          }
        },
        yttl_lizong: {
          mod: {
            cardUsable(card, player, num) {
              if (player == _status.currentPhase) return Infinity;
            },
            targetInRange(card, player, target, now) {
              if (player == _status.currentPhase) return true;
            }
          },
          trigger: { source: 'damageSource' },
          filter(event, player) {
            return player == _status.currentPhase && event.num > 0;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          group: 'yttl_lizong2',
          content() {
            player.draw(trigger.num);
          }
        },
        yttl_lizong2: {
          trigger: { player: 'phaseJieshuBegin' },
          filter(event, player) {
            return (
              player.getHistory('sourceDamage', function (evt) {
                return evt.num > 0 && evt.player != player;
              }).length);

          },
          audio: 'yttl_lizong',
          forced: true,
          content() {
            var targets = [];
            player.getHistory('sourceDamage', function (evt) {
              if (evt.num > 0 && evt.player != player) targets.add(evt.player);
            });
            player.draw(targets.length);
          }
        },
        yttl_cangjing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          //audioname:["ywhy_zhangjunbao"],
          audioname2: {
            //武将名:引用的技能配音
            ywhy_zhangjunbao: 'ywhy_cangjinzjb'
          },
          trigger: { player: 'changeHp' },
          forced: true,
          content() {
            var trick = get.cardPile(function (card) {
              return get.type(card, 'trick') == 'trick';
            });
            if (trick) {
              player.gain(trick, 'gain2');
            } else {
              var list = get.inpile('trick', 'trick');
              var cardss = game.createCard(list.randomGet());
              player.gain(cardss, 'gain2', 'log');
            }
          },
          ai: {
            maixie: true,
            threaten: 1.3
          }
        },
        yttl_kuangyi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          derivation: ['yttl_lieyang', 'yttl_boyang', 'yttl_zhenyang'],
          init(player, skill) {
            player.storage[skill] = false;
          },
          trigger: { player: 'dying' },
          filter(event, player) {
            return !player.storage.yttl_kuangyi;
          },
          forced: true,
          content() {
            'step 0';
            var str = '狂呓<br>';
            str += '<br>' + lib.translate.yttl_kuangyi_info + '<br>';
            str += '<br><span style="color: #FF7F00">是否选择获得技能的顺序?</span><br>';
            str += '1:【烈阳】【博阳】【真阳】</b><br>';
            str += '2:【博阳】【真阳】【烈阳】</b><br>';
            str += '3:【真阳】【烈阳】【博阳】</b><br><br><br><br><br><br><br><br>';
            var dialog = ui.create.dialog(str, 'hidden');
            var controls = [1, 2, 3, '取消'];
            player.chooseControl(controls, dialog).ai = function () {
              return Math.floor(Math.random() * (controls.length - 1));
            };
            'step 1';
            if (result.control) {
              if (result.control == 1) {
                event.skills = ['yttl_lieyang', 'yttl_boyang', 'yttl_zhenyang'];
                event.prompt = ['【烈阳】', '【博阳】', '【真阳】'];
              } else if (result.control == 2) {
                event.skills = ['yttl_boyang', 'yttl_zhenyang', 'yttl_lieyang'];
                event.prompt = ['【博阳】', '【真阳】', '【烈阳】'];
              } else if (result.control == 3) {
                event.skills = ['yttl_zhenyang', 'yttl_lieyang', 'yttl_boyang'];
                event.prompt = ['【真阳】', '【烈阳】', '【博阳】'];
              } else event.finish();
            } else {
              event.finish();
            }
            'step 2';
            player.
            chooseTarget([1, 3], get.prompt('yttl_kuangyi'), '选择依次获得' + event.prompt + '的角色?', function (card, player, target) {
              if (target == player) return false;
              if (ui.selected.targets.length == 0) return !target.hasSkill(event.skills[0]);
              if (ui.selected.targets.length == 1) return !target.hasSkill(event.skills[1]);
              if (ui.selected.targets.length == 2) return !target.hasSkill(event.skills[2]);
              return true;
            }).
            set('ai', function (target) {
              return get.attitude(player, target);
            }).
            set('targetprompt', event.prompt).
            set('complexSelect', true);
            'step 3';
            if (result.bool) {
              for (var i = 0; i < result.targets.length; i++) {
                result.targets[i].addSkills(event.skills[i]);
              }
              player.storage.yttl_kuangyi = true;
              player.awakenSkill('yttl_kuangyi');
            }
          }
        },
        yttl_boyang: {
          mark: true,
          marktext2: '阳',
          markimage: 'extension/金庸群侠传/image/icon/jyjueyuanboyang.jpg',
          intro: { content: 'info' },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCard' },
          forced: true,
          filter(event, player) {
            return get.type(event.card) == 'equip';
          },
          shaRelated: true,
          content() {
            var sha = get.cardPile(function (card) {
              return card.name == 'sha';
            });
            if (sha) {
              player.gain(sha, 'gain2', 'log');
            } else {
              var cardss = game.createCard('sha');
              player.gain(cardss, 'gain2', 'log');
            }
          },
          ai: {
            threaten: 1.4
          }
        },
        yttl_zhenyang: {
          mark: true,
          marktext2: '真',
          shaRelated: true,
          markimage: 'extension/金庸群侠传/image/icon/jyjueyuanzhenyang.jpg',
          intro: { content: 'info' },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'useCardEnd' },
          forced: true,
          filter(event, player) {
            if (event.player == player) return false;
            if (get.subtype(event.card) != 'equip1') return false;
            return event.player.isAlive() && lib.filter.targetEnabled({ name: 'sha' }, player, event.player) && player.hasSha();
          },
          content() {
            player.chooseToUse({
              prompt: '真阳',
              prompt2: '是否对' + get.translation(trigger.player) + '使用一张杀？',
              addCount: false,
              complexSelect: true,
              sourcex: trigger.player,
              targetRequired: true,
              logSkill: 'yttl_zhenyang',
              filterCard(card, player, event) {
                if (card.name != 'sha') return false;
                return lib.filter.filterCard.apply(this, arguments);
              },
              filterTarget(card, player, target) {
                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                return lib.filter.targetEnabled.apply(this, arguments);
              }
            });
          },
          ai: {
            threaten: 0.8
          }
        },
        yttl_lieyang: {
          mark: true,
          marktext2: '烈',
          markimage: 'extension/金庸群侠传/image/icon/jyjueyuanlieyang.jpg',
          intro: { content: 'info' },
          audio: 'ext:金庸群侠传/peiyin:2',
          shaRelated: true,
          trigger: { player: 'useCardToPlayered' },
          check(event, player) {
            return get.attitude(player, event.target) <= 0;
          },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            var e = player.getEquip(1);
            if (!e) return false;
            return get.color(event.card) == get.color(e);
          },
          logTarget: 'target',
          content() {
            trigger.parent.directHit.add(trigger.target);
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              var bool = player.getEquip(1);
              var bool2 = get.attitude(player, arg.target) > 0;
              if (bool2 || arg.card.name != 'sha' || !bool || get.color(arg.card) != get.color(bool)) return false;
            }
          }
        },
        yttl_hudu: {
          subSkill: {
            remove: {
              trigger: {
                global: ['phaseZhunbeiBegin', 'dieAfter']
              },
              forced: true,
              popup: false,
              filter(event, player) {
                return event.player == player.storage.yttl_hudu_du;
              },
              content() {
                player.removeSkill('yttl_hudu_du');
              }
            },
            du: {
              group: 'yttl_hudu_remove',
              onremove(player) {
                delete player.storage.yttl_hudu_du;
              },
              marktext2: '护',
              markimage: 'extension/金庸群侠传/image/icon/jyhudu.jpg',
              mark: true,
              intro: {
                content: '锁定技.防止你下一次受到的伤害.'
              },
              charlotte: true,
              _priority: -20,
              trigger: { player: 'damageBegin' },
              forced: true,
              popup: false,
              audio: 'yttl_hudu',
              content() {
                trigger.cancel();
                player.removeSkill('yttl_hudu_du');
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseJieshuBegin'
          },
          forced: true,
          content() {
            'step 0';
            var check = game.countPlayer(function (current) {
              return current != player && get.attitude(player, current) > 0 && !current.hasSkill('yttl_hudu_du');
            });
            check = num >= 2;
            player.
            chooseTarget(get.prompt2('yttl_hudu'), [1, 2], function (card, player, target) {
              return target != player && !target.hasSkill('yttl_hudu_du');
            }).
            set('ai', function (target) {
              if (!_status.event.aicheck) return 0;
              if (_status.event.player.hp <= 1) return 0;
              var att = get.attitude(_status.event.player, target);
              if (att > 0 && target.hp <= 2) return att + 10;
              if (ui.selected.targets.length) return att;
              return 0;
            }).
            set('aicheck', check);
            'step 1';
            if (result.bool) {
              player.loseHp();
              for (var i = 0; i < result.targets.length; i++) {
                result.targets[i].storage.yttl_hudu_du = player;
                result.targets[i].addSkill('yttl_hudu_du');
              }
            }
          }
        },
        yttl_binzhang: {
          init(player, skill) {
            player.storage.yttl_binzhang = [];
            player.storage.yttl_binzhang_map = [];
          },
          marktext2: '掌',
          markimage: 'extension/金庸群侠传/image/icon/jybingzhang.jpg',
          mark: true,
          intro: {
            content(storage) {
              if (!storage.length) {
                return '未发动过冰掌';
              } else {
                var str = '已发动过' + get.translation(storage[0]);
                for (var i = 1; i < storage.length; i++) {
                  str += '、' + get.translation(storage[i]);
                }
                str += '冰掌.';
                return str;
              }
            }
          },
          trigger: { source: 'damageSource' },
          audio: 'ext:金庸群侠传/peiyin:2',
          check(event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          _priority: -1,
          filter(event, player) {
            if (!event.card || event.card.name != 'sha' || !event.player.isIn()) return false;
            if (player.storage.yttl_binzhang_map.includes(event.player)) return false;
            if (player.storage.yttl_binzhang.length >= 4) return false;
            var list = ['heart', 'diamond', 'club', 'spade'];
            for (var i = 0; i < list.length; i++) {
              var suit = list[i];
              if (!player.storage.yttl_binzhang.includes(suit) && !event.player.hasSkill('yttl_binzhang_' + suit)) return true;
            }
            return false;
          },
          content() {
            'step 0';
            var list = ['heart', 'diamond', 'club', 'spade'];
            var controls = [];
            for (var i = 0; i < list.length; i++) {
              var suit = list[i];
              if (!player.storage.yttl_binzhang.includes(suit) && !trigger.player.hasSkill('yttl_binzhang_' + suit)) controls.push(suit);
            }
            var str = '冰掌:选择令【' + get.translation(trigger.player) + '】于本局游戏中不能使用或打出的一种花色的非装备牌.';
            player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
              return Math.floor(Math.random() * controls.length);
            };
            'step 1';
            if (result.control) {
              player.popup(result.control);
              player.line(trigger.player, 'green');
              game.log(player, '声明了', result.control);
              player.storage.yttl_binzhang_map.push(trigger.player);
              player.storage.yttl_binzhang.push(result.control);
              trigger.player.addSkill('yttl_binzhang_' + result.control);
              player.markSkill('yttl_binzhang');
            }
          },
          subSkill: {
            spade2: {
              marktext: '♠️️︎️',
              intro: { content: 'mark' }
            },
            heart2: {
              marktext: '♥️️︎️',
              intro: { content: 'mark' }
            },
            club2: {
              marktext: '♣️️︎️',
              intro: { content: 'mark' }
            },
            diamond2: {
              marktext: '♦️️︎',
              intro: { content: 'mark' }
            },
            heart: {
              mark: true,
              marktext2: '♥️️',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_hongtao.jpg',
              intro: {
                content: '你本局游戏中不能使用或打出♥️️非装备️牌.'
              },
              mod: {
                cardEnabled(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'heart') return false;
                },
                cardUsable(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'heart') return false;
                },
                cardRespondable(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'heart') return false;
                },
                cardSavable(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'heart') return false;
                },
                targetInRange(card) {
                  if (get.type(card) != 'equip' && card.suit == 'heart') return false;
                }
              }
            },
            diamond: {
              mark: true,
              marktext2: '♦️️️',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_fangpian.jpg',
              intro: {
                content: '你本局游戏中不能使用或打出♦️️️非装备牌.'
              },
              mod: {
                cardEnabled(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'diamond') return false;
                },
                cardUsable(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'diamond') return false;
                },
                cardRespondable(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'diamond') return false;
                },
                cardSavable(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'diamond') return false;
                },
                targetInRange(card) {
                  if (get.type(card) != 'equip' && card.suit == 'diamond') return false;
                }
              }
            },
            club: {
              mark: true,
              marktext2: '♣️️',
              markimage: 'extension/金庸群侠传/image/icon/jymilingmeihua.jpg',
              intro: {
                content: '你本局游戏中不能使用或打出♣️️非装备牌.'
              },
              mod: {
                cardEnabled(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'club') return false;
                },
                cardUsable(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'club') return false;
                },
                cardRespondable(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'club') return false;
                },
                cardSavable(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'club') return false;
                },
                targetInRange(card) {
                  if (get.type(card) != 'equip' && card.suit == 'club') return false;
                }
              }
            },
            spade: {
              mark: true,
              marktext2: '♠️️️',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_heitao.jpg',
              intro: {
                content: '你本局游戏中不能使用或打出♠️️️非装备牌.'
              },
              mod: {
                cardEnabled(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'spade') return false;
                },
                cardUsable(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'spade') return false;
                },
                cardRespondable(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'spade') return false;
                },
                cardSavable(card, player) {
                  if (get.type(card) != 'equip' && card.suit == 'spade') return false;
                },
                targetInRange(card) {
                  if (get.type(card) != 'equip' && card.suit == 'spade') return false;
                }
              }
            }
          }
        },
        yttl_zhuiyun: {
          mod: {
            globalFrom(from, to, distance) {
              return distance - 1;
            }
          }
        },
        yttl_xuefu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseDiscardBegin'
          },
          forced: true,
          content() {},
          mod: {
            maxHandcard(player, num) {
              if (_status.currentPhase == player) {
                var bool = false;
                var history = player.getHistory('useCard');
                for (var i = 0; i < history.length; i++) {
                  if (history[i].card.name == 'tao') bool = true;
                }
                if (bool) return num + 1;
                return num - 1;
              }
            }
          }
        },
        //新怜香--霸天20220618
        yttl_lianxiang2: {
          audio: 'yttl_lianxiang',
          enable: 'phaseUse',
          filter(event, player) {
            return (
              player.countCards('he', { subtype: 'equip1' }) &&
              game.hasPlayer(function (current) {
                return current != player && current.hasSkill('yttl_lianxiang') && current.isLinked();
              }));

          },
          filterCard(card, player) {
            return get.subtype(card) == 'equip1';
          },
          position: 'he',
          prompt() {
            var player = _status.event.player;
            var list = game.filterPlayer(function (current) {
              return current != player && current.hasSkill('yttl_lianxiang') && current.isLinked();
            });
            var str = '弃置一张武器令' + get.translation(list);
            if (list.length > 1) str += '中的一人';
            str += '解除横置';
            return str;
          },
          check(card) {
            return 8 - get.value(card);
          },
          filterTarget(card, player, current) {
            return current != player && current.hasSkill('yttl_lianxiang') && current.isLinked();
          },
          content() {
            target.link().set('source', player);
          },
          ai: {
            order: 2,
            threaten: 1.5,
            result: {
              player(player, target) {
                var target = game.findPlayer(function (current) {
                  return current != player && current.hasSkill('yttl_lianxiang') && current.isLinked();
                });
                if (target) {
                  return get.attitude(player, target);
                }
              }
            }
          }
        },
        yttl_lianxiang: {
          global: 'yttl_lianxiang2',
          group: ['yttl_lianxiang_dist', 'yttl_lianxiang3'],
          subSkill: {
            dist: {
              trigger: {
                player: 'phaseZhunbeiBegin'
              },
              forced: true,
              filter(event, player) {
                return !player.isLinked();
              },
              content() {
                player.link();
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            target: 'useCardToTargeted'
          },
          forced: true,
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          content() {
            'step 0';
            var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
            trigger.player.
            chooseToDiscard('he', '怜香:弃置一张牌,否则杀对' + get.translation(player) + '无效').
            set('ai', function (card) {
              if (_status.event.eff > 0) {
                return 10 - get.value(card);
              }
              return 0;
            }).
            set('eff', eff);
            'step 1';
            if (result.bool == false) {
              trigger.parent.excluded.add(player);
            }
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                if (card.name == 'sha' && get.attitude(player, target) < 0) {
                  if (_status.event.name == 'yttl_lianxiang') return;
                  var bs = player.getCards('he');
                  if (bs.length < 2) return 0;
                  if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
                  if (bs.length <= 3 && player.countCards('h', 'sha') <= 1) {
                    for (var i = 0; i < bs.length; i++) {
                      if (bs[i].name != 'sha' && get.value(bs[i]) < 7) {
                        return [1, 0, 1, -0.5];
                      }
                    }
                    return 0;
                  }
                  return [1, 0, 1, -0.5];
                }
              }
            }
          }
        },
        yttl_lianxiang3: {
          audio: 'yttl_lianxiang',
          trigger: {
            player: 'linkEnd'
          },
          forced: true,
          filter(event, player) {
            if (player.isLinked()) return false;
            if (event.source) return true;
            var evt = event.parent;
            if (evt.name == 'tiesuo' && evt.card && evt.card.name == 'tiesuo') return true;
            return false;
          },
          content() {
            'step 0';
            player.draw(3);
            'step 1';
            if (!result || !result.length) {
              event.finish();
              return;
            }
            event.togain = result;
            var bool = event.togain.some((card) => player.getCards('h').includes(card));
            if (!bool) {
              event.finish();
              return;
            }
            var target;
            if (trigger.source) {
              target = trigger.source;
            } else {
              var evt = trigger.parent;
              if (evt.name == 'tiesuo' && evt.card && evt.card.name == 'tiesuo') {
                target = evt.player;
              } else {
                event.finish();
                return;
              }
            }
            if (target == player) {
              event.finish();
              return;
            }
            event.target = target;
            player.
            chooseCard([1, event.togain.length], '是否交给摸到的任意张牌给' + get.translation(target) + '?', function (card) {
              return _status.event.cards.includes(card);
            }).
            set('ai', function (card) {
              if (_status.event.att <= 0) return -1;
              return 7 - get.value(card);
            }).
            set('cards', event.togain).
            set('att', get.attitude(player, target));
            'step 2';
            if (result.bool) {
              player.give(result.cards, target);
              //target.gain(result.cards,player,'giveAuto');
            }
          }
        },
        //旧怜香
        yttl_lianxiang_old: {
          trigger: { target: 'useCardToTargeted' },
          forced: true,
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          content() {
            'step 0';
            var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
            trigger.player.
            chooseToDiscard('he', '怜香:弃置一张牌,否则杀对' + get.translation(player) + '无效!').
            set('ai', function (card) {
              if (_status.event.eff > 0) {
                return 10 - get.value(card);
              }
              return 0;
            }).
            set('eff', eff);
            'step 1';
            if (result.bool == false) {
              trigger.parent.excluded.add(player);
            }
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                if (card.name == 'sha' && get.attitude(player, target) < 0) {
                  if (_status.event.name == 'yttl_lianxiang_old') return;
                  var bs = player.getCards('he');
                  if (bs.length < 2) return 0;
                  if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
                  if (bs.length <= 3) {
                    for (var i = 0; i < bs.length; i++) {
                      if (get.value(bs[i]) < 7) {
                        return [1, 0, 1, -0.5];
                      }
                    }
                    return 0;
                  }
                  return [1, 0, 1, -0.5];
                }
              }
            }
          }
        },
        yttl_yibi_off: {},
        yttl_yibi: {
          subSkill: {
            draw: {
              audio: 'yttl_yibi',
              trigger: {
                global: 'damageEnd'
              },
              forced: true,
              popup: false,
              filter(event, player) {
                if (event.card && event.card.name == 'sha' && event.card.yttl_yibi && event.card.yttl_yibi.includes(player)) return true;
                return false;
                //if(event.card&&event.card.storage&&event.card.storage.yttl_yibi&&event.card.storage.yttl_yibi==player) return true;
              },
              content() {
                player.draw();
              }
            }
          },
          group: ['yttl_yibi_draw'],
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          selectCard: [1, Infinity],
          check(card) {
            //if(ui.selected.cards.length>1) return 0;
            return 10 - get.value(card);
          },
          filterTarget(card, player, target) {
            return target != player && target.hasSex('male') && !target.hasSkill('yttl_yibi_off');
          },
          filter(event, player) {
            if (!player.countCards('h', 'sha')) return false;
            return (
              game.countPlayer(function (current) {
                return current != player && current.hasSex('male') && !current.hasSkill('yttl_yibi_off');
              }) > 0);

          },
          discard: false,
          lose: false,
          delay: false,
          //filterCard:true,
          filterCard: { name: 'sha' },
          content() {
            player.give(cards, target, true).gaintag.add('yttl_yibi', player.name);
            //target.gain(cards,player,'giveAuto').gaintag.add('yttl_yibi',player.name);
            if (Array.isArray(cards)) for (var i of cards) {
              if (!i.storage) i.storage = {};
              i.storage.yttl_yibi = player;
            }
            target.addTempSkill('yttl_yibi_off');
            if (!target.hasSkill('yttl_yibi2')) {
              target.addSkill('yttl_yibi2');
            }
          },
          ai: {
            order: 2,
            result: {
              target(player, target) {
                if (target.hasJudge('lebu')) return 0;
                if (target.hasSha()) return 1.2;
                return 1;
              }
            }
          }
        },
        yttl_yibi2: {
          group: ['yttl_yibi2_lose'],
          subSkill: {
            lose: {
              audio: 'yttl_yibi',
              trigger: { player: ['loseEnd'] },
              silent: true,
              filter(event, player) {
                //if(event.name=='lose'&&event.type&&event.type=='use') return false;
                return event.cards && event.cards.length;
              },
              content() {
                if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                  if (i.storage && i.storage.yttl_yibi) {
                    if (trigger.type && trigger.type == 'use') {
                      var evt = trigger.getParent('useCard');
                      //兼容转化类卡牌触发
                      if (evt && evt.card) {
                        if (!evt.card.yttl_yibi) evt.card.yttl_yibi = [];
                        if (i.storage.yttl_yibi.isIn()) evt.card.yttl_yibi.add(i.storage.yttl_yibi);
                      }
                      //includes()
                    }
                    delete i.storage.yttl_yibi;
                  }
                }
              }
            }
          },
          mod: {
            aiOrder(player, card, num) {
              //card.hasGaintag('yttl_yibi')
              if (get.itemtype(card) == 'card') {
                if (card.storage && card.storage.yttl_yibi && card.storage.yttl_yibi.isIn()) {
                  return num + get.sgn(get.attitude(player, card.storage.yttl_yibi));
                }
              }
            }
          },
          trigger: { player: 'useCard1' },
          forced: true,
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            if (event.card && event.card.yttl_yibi) return true;
            return false;
          },
          content() {
            'step 0';
            if (trigger.addCount !== false) {
              trigger.addCount = false;
              player.stat[player.stat.length - 1].card[trigger.card.name]--;
            }
            'step 1';
            player.line(trigger.card.yttl_yibi, 'green');
            // game.log(trigger.card.storage.yttl_yibi)
            //if(trigger.card.storage.yttl_yibi.isIn()){
            //player.line(trigger.card.storage.yttl_yibi,'green');
            //trigger.card.storage.yttl_yibi.draw();
            //}
          }
        },
        //界飞针--霸天
        yttl_feiding: {
          mod: {
            targetEnabled(card, player, target, now) {
              var name = card.name;
              if (name == 'jydiy_qixingding') return false;
            }
          },
          trigger: {
            player: 'jydiy_qixingding_result'
          },
          forced: true,
          filter(event, player) {
            if (event.name == 'chooseToUse') return player.countCards('hes', { suit: 'diamond' }) > 0;
            return true;
          },
          content() {
            var control = trigger.result.control;
            if (control == '给牌') {
              player.draw();
            } else {
              trigger.baseDamage++;
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          viewAsFilter(player) {
            if (!player.countCards('hes', { suit: 'diamond' })) return false;
            return true;
          },
          enable: 'chooseToUse',
          filterCard(card, player) {
            return card.suit == 'diamond';
          },
          position: 'hes',
          viewAs: {
            name: 'jydiy_qixingding'
          },
          prompt: '将一张♦️️️牌当【七星钉】使用',
          check(card) {
            return 6 - get.value(card);
          }
        },
        //旧飞钉
        yttl_feiding_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          viewAsFilter(player) {
            if (!player.countCards('hs', { suit: 'diamond' })) return false;
            return true;
          },
          enable: 'chooseToUse',
          filterCard(card, player) {
            return card.suit == 'diamond';
          },
          position: 'hs',
          viewAs: { name: 'jydiy_qixingding' },
          prompt: '将一张♦️️手牌当七星钉使用',
          check(card) {
            return 6 - get.value(card);
          }
        },
        //新扬刀--霸天
        yttl_yangwei: {
          ai: {
            effect: {
              target(card, player, target, current) {
                var name = card.name;
                if (name == 'jydiy_tulongdao_re' || name == 'jydiy_tulongdao') return [1, 3];
              }
            }
          },
          trigger: {
            global: 'phaseBefore',
            player: 'enterGame'
          },
          forced: true,
          filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          content() {
            var card = game.createCard2('jydiy_tulongdao_re', 'spade', 13);
            //player.equip(card)
            ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
            game.log(card, '洗入了牌堆!');
            game.broadcastAll(function () {
              lib.inpile.add('jydiy_tulongdao_re');
            });
            game.updateRoundNumber();
          },
          group: ['yttl_yangwei_equip', 'yttl_yangwei_damage'],
          subSkill: {
            equip: {
              trigger: {
                player: 'equipEnd'
              },
              audio: 'yttl_yangwei',
              forced: true,
              filter(event, player) {
                return event.card && (event.card.name == 'jydiy_tulongdao' || event.card.name == 'jydiy_tulongdao_re'); //QQQ
              },
              content() {
                player.draw(2);
                if (player.isDamaged()) player.recover();
              }
            },
            damage: {
              trigger: {
                source: 'damageSource'
              },
              audio: 'yttl_yangwei',
              filter(event, player) {
                if (!event.card || event.card.name != 'sha') return false;
                if (
                !player.countCards('e', function (card) {
                  return card.name == 'jydiy_tulongdao' || card.name == 'jydiy_tulongdao_re';
                }))

                return false;
                return player != event.player && event.player.isAlive();
              },
              forced: true,
              logTarget: 'player',
              content() {
                trigger.player.addMark('yttl_yangwei_handcard', 2, false);
                trigger.player.addTempSkill('yttl_yangwei_handcard', { player: 'phaseZhunbeiEnd' });
              }
            },
            handcard: {
              mark: true,
              marktext: '※',
              charlotte: true,
              intro: {
                name: '扬威',
                content: '下个回合手牌上限减#'
              },
              trigger: {
                player: 'phaseZhunbeiBegin'
              },
              forced: true,
              firstDo: true,
              popup: false,
              content() {
                player.addMark('yttl_yangwei_handcard2', player.countMark('yttl_yangwei_handcard'), false);
                player.addTempSkill('yttl_yangwei_handcard2', 'phaseJieshuBegin');
              }
            },
            handcard2: {
              lastDo: true,
              mark: true,
              marktext: '※',
              charlotte: true,
              forced: true,
              popup: false,
              intro: {
                name: '扬威',
                content: '手牌上限减#'
              },
              mod: {
                maxHandcard(player, num) {
                  return num - player.countMark('yttl_yangwei_handcard2');
                }
              }
            }
          }
        },
        //旧扬威
        yttl_yangwei_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          marktext2: '威',
          markimage: 'extension/金庸群侠传/image/icon/jyyangwei.jpg',
          mark: true,
          init(player, skill) {
            player.storage[skill] = false;
          },
          intro: { content: 'limited' },
          limited: true,
          xiandingji: true,
          filter(event, player) {
            if (player.storage.yttl_yangwei_old) return false;
            if (!player.countCards('hes', { subtype: 'equip1' })) return false;
            return game.hasPlayer(function (target) {
              return player != target && target.hasEnabledSlot(1);
            });
          },
          filterCard: { subtype: 'equip1' },
          filterTarget(card, player, target) {
            return player != target && target.hasEnabledSlot(1);
          },
          content() {
            target.disableEquip('equip1');
            player.storage.yttl_yangwei_old = true;
            player.awakenSkill('yttl_yangwei_old');
          },
          check(card) {
            return 10 - get.value(card);
          },
          position: 'hes',
          ai: {
            order: 8.5,
            result: { target: -1 }
          }
        },
        yttl_shihou: {
          audio: 'ext:金庸群侠传/peiyin:2',
          //audioname:["ywhy_baozupo"],
          audioname2: {
            //武将名:引用的技能配音
            ywhy_baozupo: 'ywhy_shihoubzp'
          },
          trigger: { player: 'shaBegin' },
          forced: true,
          filter(event, player) {
            var number = event.card.number;
            return typeof number == 'number';
          },
          content() {
            trigger.set('yttl_shihou', true);
            trigger.target.addTempSkill('yttl_shihou_dianshu', 'shaAfter');
          },
          subSkill: {
            dianshu: {
              mark: true,
              marktext2: '狮',
              markimage: 'extension/金庸群侠传/image/icon/jyshihou.jpg',
              intro: {
                content: '你只能使用比此杀点数大的闪来抵消之.'
              },
              mod: {
                cardEnabled(card, player) {
                  if (card.name != 'shan') return;
                  var evt = _status.event.getParent('sha');
                  if (!evt || !evt.yttl_shihou) return;
                  var number = card.number;
                  var number2 = evt.card.number;
                  if (typeof number != 'number') return false;
                  if (number <= number2) return false;
                },
                cardRespondable(card, player) {
                  return lib.skill.yttl_shihou_dianshu.mod.cardEnabled(card, player);
                }
              }
            }
          }
        },
        yttl_wudao2: {
          trigger: { player: 'equipBegin' },
          forced: true,
          filter(event, player) {
            if (event.card && player.storage.yttl_wudao && player.storage.yttl_wudao.card.name == event.card.name) return false;
            return get.subtype(event.card) == 'equip1';
          },
          content() {
            trigger.pushHandler(function (event, option) {
              if (event.step == 3 && option.state == 'begin') {
                if (event.card.origin_name) return false;
                if (!lib.inpile.includes(event.card.name)) return false;
                const origin_name = event.card.name;
                if (!event.player.storage.yttl_wudao) return false;
                event.card.name = event.player.storage.yttl_wudao.name;
                event.card.origin_name = origin_name;
              }
            });
          }
        },
        yttl_wudao: {
          group: 'yttl_wudao2',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'gameStart',
            player: 'enterGame'
          },
          forced: true,
          content() {
            'step 0';
            const list = [];
            const list1 = get.inpile('equip1');
            for (var i = 0; i < list1.length; i++) {
              const info = get.info({ name: list1[i] });
              if (info.skills) {
                list.push(['武器', '', list1[i]]);
              }
            }
            if (list.length) {
              player.chooseButton(['选择一张武器牌获得该武器牌的技能', [list, 'vcard']], true).set('ai', function (button) {
                const card = { name: button.link[2] };
                let value = get.value(card);
                if (player.hasSkill('yttl_shihou') && card.name == 'zhuge') value += 10;
                if (player.hasSkill('wusheng') && card.name == 'zhuge') value += 10;
                if (player.hasSkill('yttl_qizhao') && card.name == 'zhuge') value += 10;
                if (player.hasSkill('paoxiao') && card.name == 'zhangba') value += 10;
                return value;
              });
            } else {
              event.finish();
            }
            'step 1';
            if (result.bool) {
              var card2 = { name: result.links[0][2] };
              var info = get.info(card2);
              player.storage.yttl_wudao = { name: result.links[0][2], card: card2, skills: info.skills || [] };
              var card = { name: result.links[0][2] };
              game.log(player, '声明了', card);
              player.popup(result.links[0][2], 'fire');
            }
          }
        },
        //以下为突破版SP玄冥二老技能,作者霸天
        yttl_xuanyin: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { source: 'damageEnd' },
          forced: true,
          filter(event, player) {
            if (event.player.countDisabledSlot() >= 5) return false;
            return event.player.isIn();
          },
          content() {
            'step 0';
            var list = [
            ['装备', '', 'jydiy_tulongdao'],
            ['装备', '', 'jydiytaohuazhen'],
            ['装备', '', 'jydiyheimeigui'],
            ['装备', '', 'jydiyhanxuebaoma'],
            ['装备', '', 'jydiy_wumuyishu']];

            var disCount = Math.min(trigger.num, 5 - trigger.player.countDisabledSlot());
            var str = '玄阴:是否废除' + get.translation(trigger.player) + disCount + '个装备栏？';
            player.
            chooseButton(disCount, 'hidden', [str, [list, 'vcard'], 'hidden']).
            set('filterButton', function (button) {
              var card = { name: button.link[2] };
              var subtype = get.subtype(card);
              if (trigger.player.hasDisabledSlot(subtype)) return false;
              return true;
            }).
            set('ai', function (button) {
              var att = get.attitude(player, trigger.player);
              var card = { name: button.link[2] };
              var subtype = get.subtype(card);
              if (att > 0) {
                return -1;
              }
              if (att <= 0) {
                if (trigger.player.getEquip(subtype)) return 1;
                return 0.5;
              }
              return 0.5;
            });
            'step 1';
            if (result.bool) {
              trigger.player.addSkill('yttl_xuanyin1');
              trigger.player.markAuto(
                'yttl_xuanyin1',
                function (links) {
                  var list = [];
                  for (var i of links) {
                    var card = { name: i[2] };
                    var subtype = get.subtype(card);
                    list.add(subtype);
                    if (!trigger.player.storage.yttl_xuanyin_source) trigger.player.storage.yttl_xuanyin_source = {};
                    trigger.player.storage.yttl_xuanyin_source[subtype] = player;
                    trigger.player.disableEquip(subtype);
                  }
                  return list;
                }(result.links)
              );
            }
          }
        },
        yttl_xuanyin1: {
          audio: 'yttl_xuanyin',
          trigger: { player: 'useCardEnd' },
          forced: true,
          charlotte: true,
          popup: false,
          filter(event, player, name) {
            var storage = player.getStorage('yttl_xuanyin1');
            if (!storage.length || player.countDisabledSlot() == 0) {
              delete player.storage.yttl_xuanyin2;
              delete player.storage.yttl_xuanyin_source;
              player.removeSkill('yttl_xuanyin1');
              return false;
            }
            return true;
          },
          content() {
            'step 0';
            if (!player.storage.yttl_xuanyin2) player.storage.yttl_xuanyin2 = {};
            if (!player.storage.yttl_xuanyin2[trigger.card.name]) player.storage.yttl_xuanyin2[trigger.card.name] = 0;
            player.storage.yttl_xuanyin2[trigger.card.name]++;
            //game.log('测试:',trigger.card.name,player.storage.yttl_xuanyin2[trigger.card.name]);
            if (player.storage.yttl_xuanyin2[trigger.card.name] != 3) {
              event.finish();
              return;
            } else {
              player.storage.yttl_xuanyin2[trigger.card.name] = 0;
            }
            var listEquip = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
            var storage = player.getStorage('yttl_xuanyin1');
            var list2 = listEquip.filter((e) => storage.includes(e) && player.hasDisabledSlot(e));
            if (!list2.length) {
              event.finish();
              return;
            }
            var list = [
            ['装备', '', 'zhuge'],
            ['装备', '', 'bagua'],
            ['装备', '', 'dilu'],
            ['装备', '', 'chitu'],
            ['装备', '', 'muniu']];

            var str = '玄阴:选择回复一个装备栏';
            player.
            chooseButton(true, 1, 'hidden', [str, [list, 'vcard'], 'hidden']).
            set('filterButton', function (button) {
              var card = { name: button.link[2] };
              var subtype = get.subtype(card);
              if (!player.hasDisabledSlot(subtype)) return false;
              var storage = player.getStorage('yttl_xuanyin1');
              if (storage.includes(subtype)) return true;
              return false;
            }).
            set('ai', function (button) {
              return 3;
            });
            'step 1';
            if (result.bool) {
              var card = { name: result.links[0][2] };
              var subtype = get.subtype(card);
              player.enableEquip(subtype);
              player.unmarkAuto('yttl_xuanyin1', [subtype]);
              if (player.storage.yttl_xuanyin_source) {
                var source = player.storage.yttl_xuanyin_source[subtype];
                if (source && source.isAlive()) {
                  delete player.storage.yttl_xuanyin_source[subtype];
                  source.draw(3);
                }
              }
            }
          }
        },
        yttl_mingjiang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'useCardToPlayered' },
          forced: true,
          groupList: [
          'jy_qin',
          'jy_tang',
          'jy_song',
          'jy_ming',
          'wei',
          'shu',
          'wu',
          'jin'
          //'qun',
          ],
          filter(event, player) {
            var name = event.card.name;
            if (name != 'wanjian' && name != 'nanman') return false;
            if (event.parent.triggeredTargets3.length > 1) return false;
            if (event.targets.length) {
              var list = event.targets.filter(function (target) {
                var group2 = get.jy_group(target);
                return group2 == 'hanren';
              });
              return list.length;
            }
            return false;
          },
          content() {
            var list = trigger.targets.filter(function (target) {
              var group2 = get.jy_group(target);
              return group2 == 'hanren';
            });
            player.draw(list.length);
          }
        },
        //以下为旧版SP玄冥二佬技能
        yttl_xuanyin_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            source: 'damageEnd'
          },
          forced: true,
          filter(event, player) {
            if (event.player.countDisabledSlot() >= 5) return false;
            return event.player.isIn();
          },
          content() {
            'step 0';
            var list = [
            ['装备', '', 'zhuge'],
            ['装备', '', 'bagua'],
            ['装备', '', 'dilu'],
            ['装备', '', 'chitu'],
            ['装备', '', 'muniu']];

            var str = '<span style="color: #FF0000">玄阴:是否废除' + get.translation(trigger.player) + '一个装备栏?</span>';
            player.
            chooseButton(1, 'hidden', [str, [list, 'vcard'], 'hidden']).
            set('filterButton', function (button) {
              var card = { name: button.link[2] };
              var subtype = get.subtype(card);
              if (trigger.player.hasDisabledSlot(subtype)) return false;
              return true;
            }).
            set('ai', function (button) {
              var att = get.attitude(player, trigger.player);
              var card = { name: button.link[2] };
              if (att > 0) {
                if (!trigger.player.getEquip(get.subtype(card))) return 1;
              }
              if (att <= 0) {
                if (trigger.player.getEquip(get.subtype(card))) return 1;
              }
              return 0.5;
            });
            'step 1';
            if (result.bool) {
              var card = { name: result.links[0][2] };
              trigger.player.disableEquip(get.subtype(card));
              trigger.player.addSkill('yttl_xuanyin_old1');
              trigger.player.storage.yttl_xuanyin_old1.push(get.subtype(card));
            }
          }
        },
        yttl_xuanyin_old1: {
          audio: 'ext:金庸群侠传/peiyin:2',
          init(player, skill) {
            if (!player.storage[skill]) player.storage[skill] = [];
          },
          trigger: {
            player: 'useCardEnd'
          },
          forced: true,
          popup: false,
          filter(event, player) {
            var history = player.getHistory('useCard', function (evt) {
              return evt.card.name == event.card.name;
            });
            if (history.length < 3) return false;
            if (history[2] != event) return false;
            if (!player.storage.yttl_xuanyin_old1 || !player.storage.yttl_xuanyin_old1.length) return false;
            for (var i = 0; i < player.storage.yttl_xuanyin_old1.length; i++) {
              if (player.hasDisabledSlot(player.storage.yttl_xuanyin_old1[i])) return true;
            }
            return false;
          },
          content() {
            'step 0';
            var list = [
            ['装备', '', 'zhuge'],
            ['装备', '', 'bagua'],
            ['装备', '', 'dilu'],
            ['装备', '', 'chitu'],
            ['装备', '', 'muniu']];

            var str = '玄阴:选择回复一个装备栏';
            player.
            chooseButton(true, 1, 'hidden', [str, [list, 'vcard'], 'hidden']).
            set('filterButton', function (button) {
              var card = { name: button.link[2] };
              var subtype = get.subtype(card);
              if (!player.hasDisabledSlot(subtype)) return false;
              if (player.storage.yttl_xuanyin_old1.includes(subtype)) return true;
              return false;
            }).
            set('ai', function (button) {
              return 3;
            });
            'step 1';
            if (result.bool) {
              var card = { name: result.links[0][2] };
              var subtype = get.subtype(card);
              player.enableEquip(subtype);
              player.storage.yttl_xuanyin_old1.remove(subtype);
            }
          }
        },
        yttl_mingjiang_old: {
          mod: {
            playerEnabled(card, player, target) {
              if (get.itemtype(card) == 'card' && card.hasGaintag('yttl_mingjiang_old') && player.storage.yttl_mingjiang_old && target == player.storage.yttl_mingjiang_old) return false;
              if (card.cards && card.cards.length == 1 && get.itemtype(card.cards[0]) == 'card' && card.cards[0].hasGaintag('yttl_mingjiang_old') && player.storage.yttl_mingjiang_old && target == player.storage.yttl_mingjiang_old) return false;
            }
          },
          group: 'yttl_mingjiang_old_clear',
          subSkill: {
            clear: {
              trigger: {
                player: 'phaseUseEnd'
              },
              filter(event, player) {
                return player.storage.yttl_mingjiang_old;
              },
              silent: true,
              content() {
                delete player.storage.yttl_mingjiang_old;
                player.removeGaintag('yttl_mingjiang_old');
              },
              forced: true,
              popup: false
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filterCard() {
            return false;
          },
          selectCard: -1,
          filterTarget(card, player, target) {
            return target.countDisabledSlot() > 0;
          },
          content() {
            'step 0';
            var list = [
            ['装备', '', 'zhuge'],
            ['装备', '', 'bagua'],
            ['装备', '', 'dilu'],
            ['装备', '', 'chitu'],
            ['装备', '', 'muniu']];

            var str = '名缰:选择回复' + get.translation(targets[0]) + '一个装备栏';
            player.
            chooseButton(true, 1, 'hidden', [str, [list, 'vcard'], 'hidden']).
            set('filterButton', function (button) {
              var card = { name: button.link[2] };
              var subtype = get.subtype(card);
              if (!targets[0].hasDisabledSlot(subtype)) return false;
              return true;
            }).
            set('ai', function (button) {
              return 3;
            });
            'step 1';
            if (result.bool) {
              var card = { name: result.links[0][2] };
              var subtype = get.subtype(card);
              targets[0].enableEquip(subtype);
              player.draw(2).gaintag = ['yttl_mingjiang_old'];
              player.storage.yttl_mingjiang_old = targets[0];
            } else {
              event.finish();
            }
          },
          ai: {
            order: 1,
            result: {
              player(player, target) {
                var att = get.attitude(player, target);
                if (att > 0) return 3;
                if (att <= 0) return 1;
                return 0;
              }
            },
            threaten: 1
          }
        },
        yttl_cefan: {
          subSkill: {
            sha: {
              mark: true,
              marktext2: '反',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_chefan.jpg',
              intro: {
                content: '你本回合不能使用杀.'
              },
              mod: {
                cardEnabled(card, player) {
                  if (card.name == 'sha') return false;
                },
                cardUsable(card, player) {
                  if (card.name == 'sha') return false;
                },
                targetInRange(card) {
                  if (card.name == 'sha') return false;
                }
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseUseBegin'
          },
          forced: true,
          filter(event, player) {
            if (event.player == player) return false;
            if (
            game.hasPlayer(function (current) {
              return lib.filter.targetEnabled({ name: 'sha' }, event.player, current) && get.distance(event.player, current, 'attack') <= 1;
            }))
            {
              return true;
            }
            return false;
          },
          content() {//QQQ
            'step 0';
            player.
            chooseTarget(get.prompt('yttl_cefan'), function (card, player, target) {
              return target != trigger.player && lib.filter.targetEnabled({ name: 'sha' }, trigger.player, target) && get.distance(trigger.player, target, 'attack') <= 1;
            }).
            set('ai', function (target) {
              var att = get.attitude(_status.event.player, trigger.player);
              if (att <= 0 && !trigger.player.hasSha()) return -1;
              return get.effect(target, { name: 'sha' }, _status.event.player);
            });
            'step 1';
            if (result.bool) {
              player.line(trigger.player, 'green');
              event.target = result.targets[0];
            } else {
              event.finish();
            }
            'step 2';
            trigger.player.chooseToUse({
              prompt: '策反',
              prompt2: '是否对' + get.translation(target) + '使用一张不计入次数的杀并摸一张牌？',
              addCount: false,
              complexSelect: true,
              sourcex: target,
              targetRequired: true,
              filterCard(card, player, event) {
                if (card.name != 'sha') return false;
                return lib.filter.filterCard.apply(this, arguments);
              },
              filterTarget(card, player, target) {
                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                return lib.filter.targetEnabled.apply(this, arguments);
              }
            });
            'step 3';
            if (result.bool) {
              trigger.player.draw();
            } else {
              event.finish();
              //trigger.player.addTempSkill('yttl_cefan_sha');
            }
          }
        },
        yttl_dongyi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { target: 'useCardToTargeted' },
          check(event, player) {
            return get.effect(player, event.card, event.player, player) > 0;
          },
          filter(event, player) {
            if (event.player == player) return false;
            return event.card && event.card.name == 'sha';
          },
          content() {
            var cards = get.cards(1);
            game.cardsGotoOrdering(cards);
            player.showCards(cards, '恫疑');
            if (cards[0].name == 'sha') {
              trigger.parent.excluded.add(player);
            }
            //if(get.type(cards[0])!='basic'){
            //    trigger.parent.excluded.add(player);
            //};
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                if (card.name == 'sha' && get.attitude(player, target) < 0) {
                  return [1, 0, 1, -0.5];
                }
              }
            }
          }
        },
        yttl_yixing: {
          subSkill: {
            off: {
              marktext2: '移',
              markimage: 'extension/金庸群侠传/image/icon/jyyixing.jpg',
              mark: true,
              intro: {
                content: '本轮已发动【移形】,本轮不能再发动此技能.'
              }
            }
          },
          trigger: { global: 'phaseZhunbeiBefore' },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          filter(event, player) {
            if (player.hasSkill('yttl_yixing_off')) return false;
            if (!player.countCards('he')) return false;
            return player.canMoveCard();
          },
          content() {
            'step 0';
            player.
            chooseToDiscard('he', get.prompt('yttl_yixing'), '弃置一张牌并移动场上的一张牌', lib.filter.cardDiscardable).
            set('ai', function (card) {
              if (!_status.event.check) return 0;
              return 7 - get.value(card);
            }).
            set('check', player.canMoveCard(true))(
              'step 1');
            if (result.bool) {
              player.moveCard(true);
              player.addTempSkill('yttl_yixing_off', 'roundStart');
            }
          },
          ai: {
            expose: 0.3
          }
        },
        yttl_qiangmei: {
          group: 'yttl_qiangmei_gain',
          subSkill: {
            bgg: {
              mark: true,
              marktext2: '强',
              markimage: 'extension/金庸群侠传/image/icon/jyqiangmei.jpg',
              //intro:{content:"神秘侠客通过【强媒】获得过你的牌.当你获得除其以外的男性角色的牌时,你可对该神秘侠客造成一点伤害."},
              intro: { name: '媒', content: 'mark' }
            },
            gain: {
              global: ['gainAfter', 'loseAsyncAfter'],
              forced: true,
              popup: false,
              filter(event, player) {
                //if(!event.giver) return false;
                //if(event.giver==player) return false;
                //if(!event.giver.hasSex('male')) return false;
                //var cards=event.getl(event.giver).cards2;
                if (event.name == 'loseAsync') {
                  if (event.type != 'gain') return false;
                  if (!event.player) return false;
                  if (event.player == player) return false;
                  if (!event.player.hasSex('male')) return false;
                  var evt = event.getl(event.player);
                  if (!evt || evt.cards2.length) return false;
                  var cards = evt.cards2;
                  return game.hasPlayer(function (current) {
                    if (current == player) return false;
                    if (!current.hasSex('female')) return false;
                    if (!current.hasMark('yttl_qiangmei_bgg')) return false;
                    var cardsx = event.getg(current);
                    for (var i of cardsx) {
                      if (cards.includes(i)) return true;
                    }
                    return false;
                  });
                }
                if (event.name == 'gain') {
                  if (!event.player.hasSex('female')) return false;
                  if (!event.player.hasMark('yttl_qiangmei_bgg')) return false;
                  return game.hasPlayer(function (current) {
                    if (current == player) return false;
                    if (!current.hasSex('male')) return false;
                    var evt = event.getl(current);
                    return (
                      evt &&
                      evt.cards2 &&
                      evt.cards2.filter(function (card) {
                        return evtent.cards2.includes(card);
                      }).length);

                  });
                }
                return false;
              },
              content() {
                'step 0';
                var targets = [];
                if (trigger.name == 'loseAsync') {
                  if (trigger.type != 'gain') return;
                  if (!trigger.player) return;
                  if (trigger.player == player) return;
                  if (!trigger.player.hasSex('male')) return;
                  var evt = trigger.getl(trigger.player);
                  if (!evt || evt.cards2.length) return;
                  var cards = evt.cards2;
                  targets = game.filterPlayer(function (current) {
                    if (current == player) return false;
                    if (!current.hasSex('female')) return false;
                    if (!current.hasMark('yttl_qiangmei_bgg')) return false;
                    var cardsx = trigger.getg(current);
                    for (var i of cardsx) {
                      if (cards.includes(i)) return true;
                    }
                    return false;
                  });
                } else if (trigger.name == 'gain') {
                  targets = [trigger.player];
                }
                event.targets = targets;
                'step 1';
                if (!targets.length) {
                  event.finish();
                  return;
                }
                var target = event.targets.shift();
                if (!target.isIn()) {
                  event.redo();
                  return;
                }
                event.target = target;
                target.chooseBool('是否对' + get.translation(player) + '造成一点伤害？').set('ai', function () {
                  var evt = _status.event.parent;
                  if (get.damageEffect(evt.player, evt.target, evt.target) > 0) return true;
                  return false;
                });
                'step 2';
                if (result.bool) {
                  target.line(player);
                  player.damage(1, target);
                }
                if (targets.length) event.goto(1);
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            return game.hasPlayer(function (current) {
              return current != player && current.hasSex('female') && current.countGainableCards(player, 'h') > 0;
            });
          },
          selectTarget: [1, Infinity],
          filterTarget(card, player, target) {
            if (!target.hasSex('female')) return false;
            return player != target && target.countGainableCards(player, 'h') > 0;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            player.gainPlayerCard(target, 'h', true);
            if (!target.hasMark('yttl_qiangmei_bgg')) {
              target.addMark('yttl_qiangmei_bgg');
            }
          },
          ai: {
            result: {
              target: -0.5
            },
            basic: {
              order: 9
            }
          }
        },
        yttl_jiandie: {
          trigger: { player: 'loseEnd' },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          usable: 1,
          filter(event, player) {
            return event.cards && event.cards.length;
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('yttl_jiandie'), function (card, player, target) {
              return target != player;
            }).
            set('ai', function (target) {
              var num1 = trigger.cards.length;
              var num2 = target.countCards('e');
              var num3 = target.countCards('h');
              var num4 = target.countCards('he');
              var att = get.attitude(player, target);
              if (att > 0 && num4 == 0) return num1;
              if (att > 0 && num2 == 0) return 1;
              if (att > 0 && num3 - num1 > 0) return 0.5;
              return -1;
            });
            'step 1';
            if (result.bool) {
              if (result.targets[0].countCards('he')) result.targets[0].chooseToDiscard(trigger.cards.length, 'he', true);
              result.targets[0].draw(trigger.cards.length);
            }
          }
        },
        yttl_biyi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseJieshuBegin' },
          filter(event, player) {
            var targets = game.filterPlayer(function (current) {
              return (
                current.getHistory('lose', function (evt) {
                  return evt.cards2.length;
                }).length);

            });
            return targets.length;
          },
          check(event, player) {
            var num = 0;
            var targets = game.filterPlayer(function (current) {
              return (
                current.getHistory('lose', function (evt) {
                  return evt.cards2.length;
                }).length);

            });
            for (var i = 0; i < targets.length; i++) {
              if (get.attitude(player, targets[i]) >= 0) num++;
              if (get.attitude(player, targets[i]) < 0) num--;
            }
            if (num > 0) return true;
          },
          logTarget(event, player) {
            var targets = game.filterPlayer(function (current) {
              return (
                current.getHistory('lose', function (evt) {
                  return evt.cards2.length;
                }).length);

            });
            return targets;
          },
          content() {
            var targets = game.filterPlayer(function (current) {
              return (
                current.getHistory('lose', function (evt) {
                  return evt.cards2.length;
                }).length);

            });
            game.asyncDraw(targets);
          }
        },
        //界从善--霸天
        yttl_congshan_new: {
          subSkill: {
            off: {
              charlotte: true
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          group: 'yttl_congshan_new2',
          init(player, skill) {
            player.storage[skill] = false;
          },
          enable: 'phaseUse',
          filterCard: true,
          position: 'h',
          mark: true,
          zhuanhuanji: true,
          marktext: '☯',
          intro: {
            content(storage, player, skill) {
              return lib.dynamicTranslate.yttl_congshan_new(player);
            }
          },
          filter(event, player) {
            if (player.hasSkill('yttl_congshan_new_off')) return false;
            var num = player.countCards('h');
            if (!player.storage.yttl_congshan_new) return false;
            return player.storage['yttl_congshan_new2'] <= num;
          },
          selectCard() {
            var player = _status.event.player;
            var num = player.storage['yttl_congshan_new2'];
            var num2 = player.countCards('h');
            if (num == num2) return [-1, -1];
            return [num, num];
          },
          discard: false,
          lose: false,
          delay: 0,
          filterTarget(card, player, target) {
            return player != target;
          },
          check(card) {
            var player = _status.event.player;
            var num = player.countCards('h');
            var players = game.filterPlayer();
            for (var i of players) {
              if (i.hasSkill('haoshi') && !i.isTurnedOver() && !i.hasJudge('lebu') && get.attitude(player, i) >= 3 && get.attitude(i, player) >= 3) {
                return 11 - get.value(card);
              }
            }
            return 10 - get.value(card);
          },
          content() {
            player.give(cards, target);
            //target.gain(cards,player,'giveAuto');
            delete player.storage['yttl_congshan_new2'];
            player.changeZhuanhuanji('yttl_congshan_new');
            player.addTempSkill('yttl_congshan_new_off', 'phaseUseEnd');
          },
          ai: {
            order(skill, player) {
              return 10;
            },
            result: {
              target(player, target) {
                if (target.hasSkillTag('nogain')) return 0;
                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                  if (target.hasSkillTag('nodu')) return 0;
                  return -10;
                }
                if (target.hasJudge('lebu')) return 0;
                var nh = target.countCards('h');
                var np = player.countCards('h');
                return Math.max(1, 5 - nh);
              }
            },
            effect: {
              target(card, player, target) {
                if (player == target && get.type(card) == 'equip') {
                  if (player.hasSkill('yttl_congshan_new_off')) return;
                  if (player.storage['yttl_congshan_new2']) return;
                  if (player.countCards('e', { subtype: get.subtype(card) })) {
                    var players = game.filterPlayer();
                    for (var i of players) {
                      if (i != player && get.attitude(player, i) > 0) {
                        return 0;
                      }
                    }
                  }
                }
              }
            },
            threaten: 0.8
          }
        },
        yttl_congshan_new2: {
          audio: 'yttl_congshan_new',
          enable: 'phaseUse',
          usable: 1,
          discard: false,
          filter(event, player) {
            if (player.hasSkill('yttl_congshan_new_off')) return false;
            return !player.storage.yttl_congshan_new;
          },
          filterCard(card, player) {
            return false;
          },
          selectCard: -1,
          filterTarget(card, player, target) {
            if (player == target) return false;
            return target.countGainableCards(player, 'h') > 0;
          },
          content() {
            'step 0';
            var num = target.countGainableCards(player, 'h');
            player.gainPlayerCard(target, [1, num], 'h', true);
            'step 1';
            if (result && result.links && result.links.length) {
              player.storage['yttl_congshan_new2'] = result.links.length;
              player.changeZhuanhuanji('yttl_congshan_new');
              player.addTempSkill('yttl_congshan_new_off', 'phaseUseEnd');
            }
          },
          ai: {
            order(skill, player) {
              return 10;
            },
            result: {
              target(player, target) {
                var num = target.countGainableCards(player, 'h');
                return -num;
              }
            }
          }
        },
        //旧从善
        yttl_congshan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          init(player) {
            player.storage.yttl_congshan = true;
          },
          enable: 'phaseUse',
          usable: 1,
          discard: false,
          filter(event, player) {
            if (player.storage.yttl_congshan == true) {
              return true;
            } else if (player.storage.yttl_congshan == false) {
              return player.countCards('h') > 0;
            } else {
              return true;
            }
          },
          filterCard(card, player) {
            var player = _status.event.player;
            if (player.storage.yttl_congshan == true) return false;
            return true;
          },
          selectCard() {
            var player = _status.event.player;
            if (player.storage.yttl_congshan == true) {
              return -1;
            } else if (player.storage.yttl_congshan == false) {
              return [1, 1];
            }
          },
          filterTarget(card, player, target) {
            if (player == target) return false;
            if (player.storage.yttl_congshan == true) {
              return target.countGainableCards(player, 'h') > 0;
            } else if (player.storage.yttl_congshan == false) {
              return true;
            }
          },
          content() {
            'step 0';
            if (cards.length == 0) {
              player.gainPlayerCard(target, 'h', true);
              player.storage.yttl_congshan = false;
            } else {
              player.give(cards, target);
              //target.gain(cards,player,'giveAuto');
              player.storage.yttl_congshan = true;
            }
          },
          check(card) {
            if (ui.selected.cards.length) return 0;
            if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
            if (!ui.selected.cards.length && card.name == 'du') return 20;
            var player = get.owner(card);
            if (player.hp == player.maxHp || player.countCards('h') <= 1) {
              if (ui.selected.cards.length) {
                return -1;
              }
              var players = game.filterPlayer();
              for (var i of players) {
                if (i.hasSkill('haoshi') && !i.isTurnedOver() && !i.hasJudge('lebu') && get.attitude(player, i) >= 3 && get.attitude(i, player) >= 3) {
                  return 11 - get.value(card);
                }
              }
              if (player.countCards('h') > player.hp) return 10 - get.value(card);
              if (player.countCards('h') > 2) return 6 - get.value(card);
              return -1;
            }
            return 10 - get.value(card);
          },
          position: 'h',
          ai: {
            order(skill, player) {
              return 1;
            },
            result: {
              target(player, target) {
                if (ui.selected.cards.length == 0) return -1;
                if (target.hasSkillTag('nogain')) return 0;
                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                  if (target.hasSkillTag('nodu')) return 0;
                  return -10;
                }
                if (target.hasJudge('lebu')) return 0;
                var nh = target.countCards('h');
                var np = player.countCards('h');
                if (player.countCards('h') <= 1) {
                  if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                }
                return Math.max(1, 5 - nh);
              }
            },
            effect: {
              target(card, player, target) {
                if (player == target && get.type(card) == 'equip') {
                  if (player.countCards('e', { subtype: get.subtype(card) })) {
                    var players = game.filterPlayer();
                    for (var i of players) {
                      if (i != player && get.attitude(player, i) > 0) {
                        return 0;
                      }
                    }
                  }
                }
              }
            },
            threaten: 0.8
          }
        },
        yttl_tuobiao: {
          group: ['yttl_tuobiao1'],
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseJieshuBegin' },
          //filter:function(event,player){return player.countCards('h')},
          //direct:true,
          content() {
            'step 0';
            player.draw();
            'step 1';
            if (player.countCards('h')) {
              player.chooseCardTarget({
                position: 'h',
                filterCard: true,
                filterTarget(card, player, target) {
                  return player != target;
                },
                ai1(card) {
                  if (card.name == 'du') return 20;
                  return 5 - get.value(card);
                },
                ai2(target) {
                  var att = get.attitude(_status.event.player, target);
                  if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                    if (target.hasSkillTag('nodu')) return 0;
                    return 1 - att;
                  }
                  return -att;
                },
                forced: true,
                prompt: '请选择交给别人的牌'
                //prompt:get.prompt2('yttl_tuobiao'),
              });
            } else event.finish();
            'step 2';
            if (result.bool) {
              var target = result.targets[0];
              var cards = result.cards;
              player.give(cards, target, true).gaintag.add('yttl_tuobiao');
              //target.gain(cards,player,'give').gaintag.add('yttl_tuobiao');
              game.log(player, '将', cards, '作为<镖>交给了', target);
              if (!player.storage.yttl_tuobiao) player.storage.yttl_tuobiao = {};
              player.storage.yttl_tuobiao[target.playerid] = cards[0];
            }
          }
        },
        yttl_tuobiao1: {
          trigger: { global: ['phaseZhunbeiBefore', 'die'] },
          forced: true,
          popup: false,
          filter(event, player) {
            return player.storage.yttl_tuobiao && player.storage.yttl_tuobiao[event.player.playerid];
          },
          content() {
            'step 0';
            if (trigger.name != 'die') {
              player.line(trigger.player, 'green');
              if (!trigger.player.countGainableCards(player, 'h')) {
                trigger.player.damage(1, player);
                var tuobiao = player.storage.yttl_tuobiao[trigger.player.playerid];
                if (trigger.player.getCards('h').includes(tuobiao)) trigger.player.removeGaintag('yttl_tuobiao', [tuobiao]);
                delete player.storage.yttl_tuobiao[trigger.player.playerid];
                event.finish();
              } else {
                player.gainPlayerCard(trigger.player, 'h', true, 'visibleMove');
              }
            } else {
              delete player.storage.yttl_tuobiao[trigger.player.playerid];
              event.finish();
            }
            'step 1';
            if (result && result.links) {
              //player.showCards(result.links,'托镖')
              var tuobiao = player.storage.yttl_tuobiao[trigger.player.playerid];
              player.$compare(tuobiao, trigger.player, result.links[0]);
              if (tuobiao != result.links[0]) {
                trigger.player.damage(1, player);
                if (trigger.player.getCards('h').includes(tuobiao)) trigger.player.removeGaintag('yttl_tuobiao', [tuobiao]);
              }
            }
            delete player.storage.yttl_tuobiao[trigger.player.playerid];
          }
        },
        yttl_yaren: {
          trigger: {
            global: ['useCard', 'respond']
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            var respondTo = event.respondTo;
            if (!respondTo) return false;
            if (player == event.player) return true;
            if (respondTo[0] == player) return true;
            return false;
          },
          intro: {
            content: 'expansion',
            markcount: 'expansion'
          },
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          },
          forced: true,
          marktext2: '忍',
          markimage: 'extension/金庸群侠传/image/icon/jyyaren.jpg',
          mod: {
            maxHandcard(player, num) {
              var cards = player.getExpansions('yttl_yaren');
              return num + cards.length;
            },
            attackRange(player, distance) {
              var cards = player.getExpansions('yttl_yaren');
              return distance + cards.length;
            }
          },
          content() {
            var cards = get.cards(1);
            player.addToExpansion(cards, 'gain2', 'log').gaintag.add('yttl_yaren');
          },
          ai: {
            effect: {
              player(card, player, target) {
                if (_status.currentPhase != player) return;
                var cards = player.getExpansions('yttl_yaren');
                if (card.name == 'sha' && !player.needsToDiscard() && !cards.length && target.hp > 1) {
                  return 'zeroplayertarget';
                }
              }
            },
            threaten: 1.4
          }
        },
        yttl_zhangquan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'yttl_yarenAfter'
          },
          forced: true,
          derivation: ['yttl_fayi'],
          filter(event, player) {
            var cards = player.getExpansions('yttl_yaren');
            return !player.hasSkill('yttl_fayi') && cards.length >= 3;
          },
          content() {
            'step 0';
            player.loseMaxHp();
            player.draw(2);
            player.update();
            player.$fullscreenpop('九阴白骨爪', 'thunder');
            'step 1';
            if (player.isDamaged()) player.recover();
            player.addSkills('yttl_fayi');
            player.awakenSkill('yttl_zhangquan');
          }
        },
        yttl_fayi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseZhunbeiBegin'
          },
          group: 'yttl_fayi3',
          check(event, player) {
            if (event.player.countCards('j') > 0) return 0;
            return get.attitude(player, event.player) < 0 && event.player.needsToDiscard(2);
          },
          filter(event, player) {
            var cards = player.getExpansions('yttl_yaren');
            return event.player != player && cards.length;
          },
          content() {
            'step 0';
            var cards = player.getExpansions('yttl_yaren');
            player.chooseCardButton(get.translation('yttl_yaren'), cards, true);
            'step 1';
            if (result.bool) {
              player.loseToDiscardpile(result.links);
              trigger.player.addTempSkill('yttl_fayi2');
            }
          },
          ai: {
            threaten: 1.6
          }
        },
        yttl_fayi3: {
          trigger: { player: 'phaseDrawBegin2' },
          check(event, player) {
            if (!player.hasSha()) return false;
            return game.hasPlayer(function (current) {
              return get.attitude(player, current) < 0 && player.canUse('sha', current);
            });
          },
          filter(event, player) {
            var cards = player.getExpansions('yttl_yaren');
            return !event.numFixed && event.num > 0 && cards.length;
          },
          content() {
            'step 0';
            var cards = player.getExpansions('yttl_yaren');
            player.chooseCardButton(get.translation('yttl_yaren'), cards, true);
            'step 1';
            if (result.bool) {
              player.loseToDiscardpile(result.links);
              player.addTempSkill('yttl_fayi4', 'phaseJieshuBegin');
              trigger.num++;
            }
          }
        },
        yttl_fayi4: {
          charlotte: true,
          mod: {
            cardUsable(card, player, num) {
              if (card.name == 'sha') return num + 1;
            }
          }
        },
        yttl_fayi2: {
          trigger: { player: 'phaseDrawBegin1' },
          filter(event, player) {
            return !event.numFixed;
          },
          forced: true,
          content() {
            trigger.num--;
          },
          charlotte: true,
          mark: true,
          marktext2: '伐',
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_fayi.jpg',
          intro: { content: '周芷若为了争夺掌门人之位,令你本回合手牌上限-1.' },
          mod: {
            maxHandcard(player, num) {
              return num - 1;
            }
          }
        },
        yttl_gudan: {
          group: ['yttl_gudan_after'],
          subSkill: {
            after: {
              trigger: {
                player: 'useCardAfter'
              },
              filter(event, player) {
                if (event.card.name != 'sha') return false;
                if (!event.targets || !event.targets.length) return false;
                if (
                game.hasPlayer2(function (current) {
                  return current.getHistory('damage', function (card) {
                    return card.card == event.card;
                  }).length;
                }))

                return false;
                return event.yttl_gudan_addSha && event.yttl_gudan_addSha == true;
              },
              forced: true,
              popup: false,
              content() {
                'step 0';
                player.chooseToDiscard(1, 'h', '是否弃置一张牌,否则你令此杀其中的一个目标摸一张牌？').set('ai', function (card) {
                  return -1;
                });
                'step 1';
                if (result.bool) {
                  event.finish();
                }
                'step 2';
                player.
                chooseTarget(true, function (card, player, target) {
                  return trigger.targets.includes(target);
                }).
                set('ai', function (target) {
                  return get.attitude(player, target);
                });
                'step 3';
                if (result.bool) {
                  result.targets[0].draw();
                }
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCard2' },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            return game.hasPlayer(function (current) {
              return !event.targets.includes(current) && player.canUse(event.card, current);
            });
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('yttl_gudan'), '为' + get.translation(trigger.card) + '增加一个目标', function (card, player, target) {
              return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
            }).
            set('sourcex', trigger.targets).
            set('ai', function (target) {
              var player = _status.event.player;
              return get.effect(target, _status.event.card, player, player);
            }).
            set('card', trigger.card);
            'step 1';
            if (result.bool) {
              event.target = result.targets[0];
            } else {
              event.finish();
            }
            'step 2';
            trigger.targets.push(event.target);
            trigger.set('yttl_gudan_addSha', true);
          }
        },
        yttl_qiyuan: {
          trigger: {
            player: 'gainEnd'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (Array.isArray(event.cards)) for (var i of event.cards) {
              if (i.suit == 'club') return true;
            }
            return false;
          },
          forced: true,
          content() {
            'step 0';
            event.cards = trigger.cards.slice(0);
            var num = 0;
            if (Array.isArray(event.cards)) for (var i of event.cards) {
              if (i.suit == 'club') num++;
            }
            player.
            chooseCard([1, num], 'h', '是否展示其中的♣️️牌并摸等量的牌？', function (card, player) {
              return card.suit == 'club' && _status.event.parent.cards.includes(card);
            }).
            set('ai', function (card) {
              return 1;
            });
            'step 1';
            if (result.bool) {
              player.showCards(result.cards, '奇缘');
              player.draw(result.cards.length);
            }
          }
        },
        yttl_yinshi: {
          subSkill: {
            off: {
              mark: true,
              marktext2: '隐',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_yinshi.jpg',
              intro: {
                content: '你不能成为拼点的对象,且其他角色拼点后,于不能于当前回合对你发动技能.'
              },
              mod: {
                playerEnabled(card, player, target) {
                  if (player.storage.yttl_yinshi && player.storage.yttl_yinshi.includes(target)) return false;
                }
              },
              onremove(player) {
                delete player.storage.yttl_yinshi;
              }
            }
          },
          trigger: { global: 'compare' },
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (event.player != player && _status.currentPhase == event.player) return true;
            if (event.target != player && _status.currentPhase == event.target) return true;
            return false;
          },
          forced: true,
          content() {
            if (trigger.player != player && _status.currentPhase == trigger.player) {
              trigger.player.addTempSkill('yttl_yinshi_off');
              game.log(trigger.player, '本回合不能对', player, '使用牌');
              if (!trigger.player.storage.yttl_yinshi) {
                trigger.player.storage.yttl_yinshi = [];
              }
              trigger.player.storage.yttl_yinshi.add(player);
            }
            if (trigger.target != player && _status.currentPhase == trigger.target) {
              trigger.target.addTempSkill('yttl_yinshi_off');
              game.log(trigger.target, '本回合不能对', player, '使用牌');
              if (!trigger.target.storage.yttl_yinshi) {
                trigger.target.storage.yttl_yinshi = [];
              }
              trigger.target.storage.yttl_yinshi.add(player);
            }
          },
          ai: {
            noCompareTarget: true,
            noCompareSource: true
          }
        },
        yttl_juejue: {
          group: 'yttl_juejue_end',
          subSkill: {
            end: {
              //trigger:{global:"gainEnd"},
              //forced:true,
              //audio:"yttl_juejue",
              //filter:function(event,player){
              //    var lose=event.relatedLose;
              //    if(!lose) return false;
              //    if(lose.player==player&&event.player!=player) return true;
              //    if(lose.player!=player&&event.player==player) return true;
              //    return false;
              //},
              //content:function(){
              //    trigger.player.discard(trigger.cards);
              //},
              trigger: {
                global: ['gainAfter', 'loseAsyncAfter']
              },
              forced: true,
              audio: 'yttl_juejue',
              filter(event, player) {
                if (event.name == 'loseAsync') {
                  if (event.type != 'gain') return false;
                  var evt = event.getl(player);
                  if (!evt || !evt.cards2.length) return false;
                  var cards = evt.cards2;
                  return game.hasPlayer(function (current) {
                    if (current == player) return false;
                    var cardsx = event.getg(current);
                    for (var i of cardsx) {
                      if (cards.includes(i)) return true;
                    }
                    return false;
                  });
                }
                if (event.player != player) {
                  var evt = event.getl(player);
                  return (
                    evt &&
                    evt.cards2 &&
                    evt.cards2.filter(function (card) {
                      return evt.cards2.includes(card);
                    }).length);

                }
                return false;
              },
              content() {
                var cards = trigger.getl(player).cards2;
                game.countPlayer(function (current) {
                  if (current == player) return false;
                  var hs = current.getCards('h'),
                    cardsx = trigger.getg(current).filter(function (card) {
                      return hs.includes(card) && cards.includes(card);
                    });
                  if (cardsx.length) {
                    player.line(current);
                    current.discard(cardsx);
                  }
                });
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            return player.countCards('e', { type: 'equip' }) > 0;
          },
          filterCard(card, player) {
            return get.type(card) == 'equip';
          },
          position: 'e',
          check(card) {
            var player = _status.currentPhase;
            var car = player.getEquip(card);
            if (player.hasSkillTag('reverseEquip')) return 1;
            return get.equipValue(car) - get.equipValue(card) + 0.1;
          },
          filterTarget(card, player, target) {
            if (target.isMin()) return false;
            return player != target && target.getEquip(card);
          },
          content() {
            'step 0';
            event.targetCard = targets[0].getEquip(cards[0]);
            event.playerCard = cards[0];
            targets[0].lose(event.targetCard, ui.special);
            player.lose(cards[0], ui.special);
            'step 1';
            targets[0].equip(event.playerCard);
            target.$give(event.targetCard, player);
            player.equip(event.targetCard);
            player.$give(event.playerCard, player);
          },
          discard: false,
          lose: false,
          ai: {
            order() {
              return 10;
            },
            result: {
              player(player, target) {
                if (player.hasSkillTag('reverseEquip')) return 1;
                return 0;
              }
            },
            effect: {
              target(card, player, target, current) {
                if (card.name == 'shunshou') {
                  return [0, 0, 1, -0.5];
                }
              },
              player(card, player, target) {
                if (card.name == 'shunshou') return [1, -0.3];
              }
            }
          }
        },
        yttl_duanren: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'loseAfter',
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter']
          },
          forced: true,
          filter(event, player) {
            var evt = event.getl(player);
            return evt && evt.player == player && evt.es && evt.es.length;
          },
          content() {
            'step 0';
            var renum = 0,
              blnum = 0;
            var es = trigger.getl(player).es;
            for (var i of es) {
              var color = get.color(i, player);
              if (color == 'red') {
                renum += 2;
              } else if (color == 'black') {
                blnum++;
              }
            }
            if (renum > 0) player.draw(renum);
            event.blnum = blnum;
            'step 1';
            if (event.blnum > 0) {
              player.
              chooseTarget(get.prompt('yttl_duanren'), function (card, player, target) {
                return player != target;
              }).
              set('ai', function (target) {
                return get.damageEffect(target, player, player);
              });
            } else event.finish();
            'step 2';
            if (result.bool) {
              result.targets[0].damage(1, player);
              event.blnum--;
              if (event.blnum > 0) event.goto(1);
            }
          },
          ai: {
            noe: true,
            reverseEquip: true,
            effect: {
              target(card, player, target, current) {
                if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
              }
            }
          }
        },
        yttl_miling: {
          subSkill: {
            useskill: {
              mark: true,
              marktext2: '密',
              markimage: 'extension/金庸群侠传/image/icon/jymiling.jpg',
              intro: {
                content: '已发动【密令】.'
              }
            },
            ondis: {
              mark: true,
              marktext2: '♣️️️',
              markimage: 'extension/金庸群侠传/image/icon/jymilingmeihua.jpg',
              intro: {
                content: '你已使用过♣️️️牌.'
              }
            },
            cl: {
              marktext2: '弃',
              markimage: 'extension/金庸群侠传/image/icon/jymiling.jpg',
              intro: {
                content: '你未使用过♣️️️牌.'
              },
              trigger: {
                global: 'dieBefore'
              },
              filter(event, player) {
                return event.player == player || event.player == player.storage.yttl_miling;
              },
              group: ['yttl_miling_use', 'yttl_miling_dis'],
              content() {
                'step 0';
                if (trigger.player == player.storage.yttl_miling) {
                  player.removeSkill('yttl_miling_cl');
                  event.finish();
                }
                'step 1';
                player.storage.yttl_miling.removeSkill('yttl_miling_useskill');
                player.storage.yttl_miling.unmarkSkill('yttl_miling_use');
                player.storage.yttl_miling.restoreSkill('yttl_miling');
                game.log(player.storage.yttl_miling, '重置了密令');
                'step 2';
                delete player.storage.yttl_miling;
                player.removeSkill('yttl_miling_cl');
              },
              forced: true,
              popup: false
            },
            dis: {
              trigger: {
                player: 'phaseEnd'
              },
              filter(event, player) {
                if (player.hasSkill('yttl_miling_ondis')) return false;
                var source = player.storage.yttl_miling;
                if (!source || !source.isIn()) return false;
                var count = player.countDiscardableCards(source, 'he');
                return count > 0;
              },
              content() {
                'step 0';
                var source = player.storage.yttl_miling;
                var count = player.countDiscardableCards(source, 'he');
                if (count > 2) count = 2;
                source.discardPlayerCard('密令:是否弃置' + get.translation(player) + '的牌？', 'he', count, player);
                'step 1';
                if (result.bool) {
                }
              },
              forced: true,
              popup: false
            },
            use: {
              trigger: {
                player: ['useCard', 'respond']
              },
              filter(event, player) {
                if (event.card.suit != 'club') return false;
                return true;
              },
              content() {
                'step 0';
                player.storage.yttl_miling.draw(2);
                if (_status.currentPhase == player && !player.hasSkill('yttl_miling_ondis')) {
                  player.addTempSkill('yttl_miling_ondis', 'phaseAfter');
                }
              },
              forced: true,
              popup: false
            }
          },
          enable: 'phaseUse',
          position: 'h',
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (player.hasSkill('yttl_miling_useskill')) return false;
            return true;
            // return player.countCards('h',{suit:'club'})>0;
          },
          //check:function(card){
          //     return 9-get.value(card)
          //  },
          // filterCard:function(card){
          //     return card.suit=='club';
          //  },
          filterTarget(card, player, target) {
            if (target.hasSkill('yttl_miling_cl')) return false;
            if (target == player) return false;
            return true;
          },
          content() {
            'step 0';
            // target.gain(cards,player);
            target.storage.yttl_miling = player;
            player.addSkill('yttl_miling_useskill');
            target.addSkill('yttl_miling_cl');
            'step 1';
            player.markSkillCharacter('yttl_miling_use', target, '');
            player.awakenSkill('yttl_miling');
          },
          discard: false,
          //prepare:function(cards,player,targets){
          //  player.$give(cards,targets[0],false);
          // },
          ai: {
            basic: {
              order: 10.5
            },
            result: {
              target(player, target) {
                return -0.5;
              }
            },
            threaten: 1
          }
        },
        //霸天
        yttl_yixin: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            return player.canMoveCard() && player.countCards('he', { suit: 'club' }) > 0;
          },
          check(card) {
            return 10 - get.value(card);
          },
          filterCard(card, player) {
            return card.suit == 'club';
          },
          position: 'he',
          content() {
            player.moveCard(true);
          },
          ai: {
            order: 10,
            result: {
              player(player) {
                if (player.canMoveCard(true)) return 1;
                return -1;
              }
            },
            expose: 0.4,
            threaten: 1.3
          }
        },
        //霸天版本的新逆绝,更智能,不需要频繁选交换哪个区域
        yttl_nijue: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 2,
          subSkill: { e: {}, j: {} },
          getResult(player) {
            var list1 = [],
              list2 = [];
            game.countPlayer(function (current) {
              if (get.attitude(player, current) > 0) {
                list1.push(current);
              } else list2.push(current);
            });
            var results = [[], []];
            for (var i of list1) {
              for (var j of list2) {
                if (lib.skill.yttl_nijue.filterEquipx(i, j) && lib.skill.yttl_nijue.sortEquip_ai(i, j) > 0) results[0].push([i, j]);
                if (lib.skill.yttl_nijue.filterJudgex(i, j) && lib.skill.yttl_nijue.sortJudge_ai(i, j) > 0) results[1].push([i, j]);
              }
            }
            if (results[0].length) {
              results[0].sort(function (a, b) {
                return lib.skill.yttl_nijue.sortEquip_ai(b[0], b[1]) - lib.skill.yttl_nijue.sortEquip_ai(a[0], a[1]);
              });
            }
            if (results[1].length) {
              results[1].sort(function (a, b) {
                return lib.skill.yttl_nijue.sortJudge_ai(b[0], b[1]) - lib.skill.yttl_nijue.sortJudge_ai(a[0], a[1]);
              });
            }
            var next = {};
            if (results[0].length) next.equip = results[0][0];
            if (results[1].length) next.judge = results[1][0];
            return next;
          },
          sortEquip_ai(a, b) {
            var count = 0;
            var e1 = a.getCards('e');
            var e2 = b.getCards('e');
            for (var j of e1) {
              var num = get.equipValue(j, a);
              var bool = !b.hasDisabledSlot(get.subtype(j));
              if (bool) {
                if (num > 0) {
                  count -= 2;
                } else count += 2;
              } else {
                if (num > 0) {
                  count -= 1;
                } else count += 1;
              }
            }
            for (var j of e2) {
              var num = get.equipValue(j, b);
              var bool = !a.hasDisabledSlot(get.subtype(j));
              if (bool) {
                if (num > 0) {
                  count += 2;
                } else count -= 2;
              } else {
                if (num > 0) {
                  count += 1;
                } else count -= 1;
              }
            }
            return count;
          },
          sortJudge_ai(a, b) {
            var count = 0;
            var j1 = a.getCards('j');
            var j2 = b.getCards('j');
            for (var j of j1) {
              var d = { name: j.viewAs || j.name, cards: [j] };
              var num = get.effect(a, d, a, a);
              var bool = lib.skill.yttl_nijue.canAddJudge(b, d);
              if (bool) {
                if (num > 0) {
                  count -= 2;
                } else count += 2;
              } else {
                if (num > 0) {
                  count -= 1;
                } else count += 1;
              }
            }
            for (var j of j2) {
              var d = { name: j.viewAs || j.name, cards: [j] };
              var num = get.effect(b, d, b, b);
              var bool = lib.skill.yttl_nijue.canAddJudge(a, d);
              if (bool) {
                if (num > 0) {
                  count += 2;
                } else count -= 2;
              } else {
                if (num > 0) {
                  count += 1;
                } else count -= 1;
              }
            }
            return count;
          },
          canAddJudge(target, card) {
            if (target.isDisabledJudge()) return false;
            var mod = game.checkMod(card, target, target, 'unchanged', 'targetEnabled', target);
            if (mod != 'unchanged') return mod;
            return true;
          },
          filterEquipx(player1, player2) {
            if (player1 == player2) return false;
            if (player1.isMin()) return false;
            if (player2.isMin()) return false;
            if (player1.countCards('e') == 0 && player2.countCards('e') == 0) return false;
            return true;
          },
          filterJudgex(player1, player2) {
            if (player1 == player2) return false;
            if (player1.isDisabledJudge()) return false;
            if (player2.isDisabledJudge()) return false;
            if (player1.countCards('j') == 0 && player2.countCards('j') == 0) return false;
            return true;
          },
          filter(event, player) {
            var boole = !player.hasSkill('yttl_nijue_e');
            var boolj = !player.hasSkill('yttl_nijue_j');
            if (boole) {
              if (
              game.hasPlayer(function (current1) {
                return game.hasPlayer(function (current2) {
                  return lib.skill.yttl_nijue.filterEquipx(current1, current2);
                });
              }))

              return true;
            }
            if (boolj) {
              if (
              game.hasPlayer(function (current1) {
                return game.hasPlayer(function (current2) {
                  return lib.skill.yttl_nijue.filterJudgex(current1, current2);
                });
              }))

              return true;
            }
            return false;
          },
          selectTarget: 2,
          filterTarget(card, player, target) {
            var boole = !player.hasSkill('yttl_nijue_e');
            var boolj = !player.hasSkill('yttl_nijue_j');
            if (ui.selected.targets.length == 0) {
              if (
              boolj &&
              game.hasPlayer(function (current2) {
                return lib.skill.yttl_nijue.filterJudgex(target, current2);
              }))

              return true;
              if (
              boole &&
              game.hasPlayer(function (current2) {
                return lib.skill.yttl_nijue.filterEquipx(target, current2);
              }))

              return true;
              return false;
            } else {
              var targetx = ui.selected.targets[0];
              if (boole && lib.skill.yttl_nijue.filterEquipx(targetx, target)) return true;
              if (boolj && lib.skill.yttl_nijue.filterJudgex(targetx, target)) return true;
              return false;
            }
          },
          multitarget: true,
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            'step 0';
            var boole = lib.skill.yttl_nijue.filterEquipx(targets[0], targets[1]) && !player.hasSkill('yttl_nijue_e');
            var boolj = lib.skill.yttl_nijue.filterJudgex(targets[0], targets[1]) && !player.hasSkill('yttl_nijue_j');
            if (boole && boolj) {
              if (get.attitude(player, targets[0]) < 0) targets.reverse();
              var num = lib.skill.yttl_nijue.sortEquip_ai(targets[0], targets[1]) - lib.skill.yttl_nijue.sortJudge_ai(targets[0], targets[1]);
              player.
              chooseControl('装备牌', '判定牌', function (event, player) {
                if (_status.event.numx > 0) return '装备牌';
                return '判定牌';
              }).
              set('prompt', '逆绝:选择要交换的牌').
              set('numx', num);
            } else if (boole) {
              event._result = { control: '装备牌' };
            } else if (boolj) {
              event._result = { control: '判定牌' };
            } else event.finish();
            'step 1';
            if (result.control == '装备牌') {
              player.addTempSkill('yttl_nijue_e');
              //game.log(targets[0],targets[1],lib.skill.yttl_nijue.sortEquip_ai(targets[0],targets[1]));
              targets[0].swapEquip(targets[1]);
            } else {
              player.addTempSkill('yttl_nijue_j');
              //game.log(targets[0],targets[1],lib.skill.yttl_nijue.sortJudge_ai(targets[0],targets[1]));
              targets[0].swapJudge(targets[1]);
            }
          },
          ai: {
            order: 11,
            result: {
              target(player, target) {
                //别问我为什么不用吴国太甘露ai 是因考虑到负面装备 和废除装备栏的情况//
                //判定牌同理//
                var boole = !player.hasSkill('yttl_nijue_e');
                var boolj = !player.hasSkill('yttl_nijue_j');
                _status.event.yttl_nijue_ai = _status.event.yttl_nijue_ai || lib.skill.yttl_nijue.getResult(player);
                var yttl_nijue_ai = _status.event.yttl_nijue_ai;
                if (ui.selected.targets.length == 0) {
                  if (boole) {
                    if (yttl_nijue_ai.equip) {
                      //game.log('equip:',yttl_nijue_ai.equip)
                      if (target == yttl_nijue_ai.equip[0]) return 1;
                    }
                  }
                  if (boolj) {
                    if (yttl_nijue_ai.judge) {
                      //game.log('judge:',yttl_nijue_ai.judge)
                      if (target == yttl_nijue_ai.judge[0]) return 1;
                    }
                  }
                  return 0;
                } else {
                  var targetx = ui.selected.targets[0];
                  if (boole) {
                    if (yttl_nijue_ai.equip) {
                      if (targetx == yttl_nijue_ai.equip[0] && target == yttl_nijue_ai.equip[1]) return -1;
                    }
                  }
                  if (boolj) {
                    if (yttl_nijue_ai.judge) {
                      if (targetx == yttl_nijue_ai.judge[0] && target == yttl_nijue_ai.judge[1]) return -1;
                    }
                  }
                  return 0;
                }
              }
            }
          }
        },
        yttl_nijue_two: {
          inherit: 'yttl_nijue',
          audio: 'yttl_nijue',
          filter(event, player) {
            if (!player.countCards('h', { color: 'black' })) return false;
            return lib.skill.yttl_nijue.filter(event, player);
          },
          filterCard(card, player) {
            return get.color(card) == 'black';
          },
          selectCard: 1,
          position: 'h'
        },
        //九阳
        yttl_jiuyang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: function () {
            if (lib.config.extension_金庸群侠传_jiexiantupo) return ['yttl_jiuyang_before', 'yttl_jiuyang_jiuyang'];
            return 'yttl_jiuyang_before';
          }(),
          //group:"yttl_jiuyang_before",
          subSkill: {
            jiuyang: {
              audio: 'yttl_jiuyang',
              name: '九阳',
              inherit: 'jydiy_jiuyangzhengjing_skill'
            },
            before: {
              trigger: {
                global: 'equipBefore'
              },
              forced: true,
              popup: false,
              filter(event, player) {
                if (event.player == player) return false;
                if (get.subtype(event.card) == 'equip1') return true;
                return false;
              },
              content() {
                trigger.attrangeBefore = true;
                trigger.attrangeBeforeNUM = trigger.player.getAttackRange();
              }
            }
          },
          trigger: { global: 'equipEnd' },
          forced: true,
          filter(event, player) {
            if (event.player == player) return false;
            if (!event.attrangeBefore) return false;
            if (get.subtype(event.card) != 'equip1') return false;
            if (event.attrangeBeforeNUM < event.player.getAttackRange()) return player.hasSha();
            return false;
          },
          content() {
            'step 0';
            event.num = trigger.player.getAttackRange() - trigger.attrangeBeforeNUM;
            event.jiuyangstartnum = event.num;
            'step 1';
            if (!trigger.player.isIn()) {
              event.finish();
              return;
            }
            if (event.num > 0 && player.hasSha()) {
              player.chooseToUse({
                prompt: '九阳',
                prompt2: '是否对' + get.translation(trigger.player) + '使用一张杀？',
                addCount: false,
                complexSelect: true,
                sourcex: trigger.player,
                targetRequired: true,
                logSkill: 'yttl_jiuyang',
                filterCard(card, player, event) {
                  if (card.name != 'sha') return false;
                  return lib.filter.filterCard.apply(this, arguments);
                },
                filterTarget(card, player, target) {
                  if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                  return lib.filter.targetEnabled.apply(this, arguments);
                }
              });
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              if (event.num == event.jiuyangstartnum) {
                player.$fullscreenpop('九阳神功', 'fire');
              }
              event.num--;
              event.goto(1);
            }
          },
          ai: {
            threaten: 0.8
          }
        },
        yttl_chuqiao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: ['yttl_chuqiao_remove'],
          subSkill: {
            remove: {
              trigger: {
                global: 'gameStart',
                player: 'enterGame'
              },
              popup: false,
              forced: true,
              filter(event, player) {
                return player.identity != 'zhu';
              },
              content() {
                player.removeSkill('yttl_chuqiao');
              }
            }
          },
          trigger: {
            global: 'shaUnhirt'
          },
          _priority: -8,
          zhuSkill: true,
          forced: true,
          filter(event, player) {
            if (!player.hasZhuSkill('yttl_chuqiao')) return false;
            if (event.player == player) return false;
            var group = 'wu';
            if (lib.jy_changeSkill) group = 'jy_yuan';
            if (group != event.player.group) return false;
            if (event.cards) return event.cards && event.cards.filterInD('od').length;
            return false;
          },
          content() {
            'step 0';
            event.togive = trigger.cards.filterInD('od');
            trigger.player.chooseBool('楚翘:是否令' + get.translation(player) + '获得' + get.translation(event.togive) + '？').set('ai', function () {
              if (get.attitude(trigger.player, player) > 0) return true;
              return false;
            });
            'step 1';
            if (result.bool) {
              trigger.player.line(player);
              player.gain(event.togive, 'gain2', 'log');
            }
          }
        },
        yttl_cstaiji: {
          audio: 'ext:金庸群侠传/peiyin:2'
        },
        //新引咎//霸天
        yttl_yinjiu2: {
          trigger: {
            player: 'damageBefore'
          },
          filter(event, player) {
            if (!event.source) return false;
            if (event.source == player) return false;
            var list = player.getStorage('yttl_yinjiu');
            if (!list.includes(event.source)) return false;
            return event.card && get.type(event.card) == 'trick';
          },
          forced: true,
          content() {
            trigger.cancel();
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                var list = target.getStorage('yttl_yinjiu');
                if (!list.includes(player)) return;
                if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                  return 'zeroplayertarget';
                }
              }
            }
          }
        },
        yttl_yinjiu: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 1,
          filterTarget(card, player, target) {
            return player != target;
          },
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          intro: {
            content: 'players'
          },
          filterCard: true,
          selectCard: -1,
          discard: false,
          lose: false,
          delay: false,
          group: 'yttl_yinjiu2',
          content() {
            'step 0';
            player.give(cards, target);
            //target.gain(cards,player,'giveAuto');
            player.markAuto('yttl_yinjiu', [target]);
            'step 1';
            if (target.countCards('h') < 1) {
              event.finish();
            }
            'step 2';
            var next = target.chooseCard([1, Infinity], 'h', '是否交给' + get.translation(player) + '任意张牌？');
            next.set('ai', function (card) {
              var att = get.attitude(target, player);
              if (att > 0) {
                var count = target.countCards('h');
                if (target.hasJudge('lebu') && count > target.hp) {
                  if (count - ui.selected.cards.length == target.hp) return -1;
                  return 1;
                }
                if (ui.selected.cards.length) return -1;
                return 1;
              }
              return -1;
            });
            'step 3';
            if (result.bool) {
              //target.line(player,'green');
              target.give(result.cards, player, true);
              //player.gain(result.cards,player,'giveAuto');
            }
          },
          ai: {
            order: 1,
            result: {
              target(player, target) {
                var num = 1;
                var list = player.getStorage('yttl_yinjiu');
                if (!list.includes(target)) num = 2;
                if (target.hasSkillTag('nogain')) return 0;
                if (player.countCards('h') == player.countCards('h', 'du')) return -num;
                //if(target.hasJudge('lebu')) return 0;
                return num;
              }
            }
          }
        },
        //旧引咎
        yttl_yinjiu_old: {
          init(player) {
            player.storage.yttl_yinjiu_old = [];
          },
          marktext2: '引',
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_yinjiu.jpg',
          intro: { content: 'players' },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseZhunbeiBegin' },
          forced: true,
          filter(event, player, name) {
            if (!player.countCards('h')) return false;
            return game.hasPlayer(function (current) {
              return !player.storage.yttl_yinjiu_old.includes(current) && current != player;
            });
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('yttl_yinjiu_old'), '是否将全部手牌交给一名你未依此法交过牌的其他角色？若如此做,当其使用普通锦囊牌对你造成伤害时,取消之', function (card, player, target) {
              if (player.storage.yttl_yinjiu_old.includes(target)) return false;
              return target != player;
            }).
            set('ai', function (target) {
              var att = get.attitude(player, target);
              var hs = player.getCards('h');
              if (att > 0 && hs.length > 1) return att;
              if (att <= 0 && hs.length == 1 && get.value(hs[0]) < 6) return 1;
              return -1;
            });
            'step 1';
            if (result.bool) {
              player.line(result.targets[0], 'green');
              player.storage.yttl_yinjiu_old.add(result.targets[0]);
              player.markSkill('yttl_yinjiu_old');
              var hs = player.getCards('h');
              player.give(hs, result.targets[0], true);
              event.tar = result.targets[0];
            } else {
              event.finish();
            }
            'step 2';
            var next = event.tar.chooseCard([1, Infinity], 'h', '是否交给' + get.translation(player) + '任意张牌？');
            var att1 = get.attitude(event.tar, player);
            next.set('ai', function (card) {
              if (att1 > 0) {
                if (ui.selected.cards.length) return -1;
                return 1;
              }
              return -1;
            });
            'step 3';
            if (result.bool) {
              event.tar.give(result.cards, player, true);
              //event.tar.line(player,'green');
              //player.gain(result.cards,event.tar);
              //event.tar.$give(result.cards.length,player);
              //game.log(player,'获得'+result.cards.length+'张牌');
            }
          },
          group: 'yttl_yinjiu_old_undamage',
          subSkill: {
            undamage: {
              audio: 'yttl_yinjiu_old',
              trigger: { player: 'damageBefore' },
              filter(event, player) {
                if (!event.source) return false;
                if (event.source == player) return false;
                if (!player.storage.yttl_yinjiu_old) return player.storage.yttl_yinjiu_old = [];
                if (!player.storage.yttl_yinjiu_old.includes(event.source)) return false;
                return event.card && get.type(event.card) == 'trick';
              },
              forced: true,
              content() {
                trigger.cancel();
              }
            }
          },
          ai: {
            jy_nodamage: true,
            skillTagFilter(player, tag, arg) {
              if (!player.storage.yttl_yinjiu_old) return false;
              if (!arg.player) return false;
              if (!arg.card) return false;
              if (get.type(arg.card) != 'trick') return false;
              if (!player.storage.yttl_yinjiu_old.includes(arg.player)) return false;
              return true;
            },
            //notrick:true,
            //notricksource:true,
            effect: {
              target(card, player, target, current) {
                if (!target.storage.yttl_yinjiu_old) return;
                if (!target.storage.yttl_yinjiu_old.includes(player)) return;
                if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                  return 'zeroplayertarget';
                }
              }
            }
          }
        },
        yttl_jixian: {
          init(player, skill) {
            player.storage[skill] = true;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: ['gainEnd', 'loseEnd'] },
          filter(event, player, cards) {
            if (event.player == player) return false;
            if (event.name == 'gain' && player.storage.yttl_jixian == true && event.cards && event.cards.length > 1) return true;
            if (event.name == 'lose' && event.cards2 && event.cards2.length >= 2 && player.storage.yttl_jixian == false) {
              if (
              player.countCards('he', function (card) {
                return lib.filter.cardDiscardable(card, player, 'yttl_jixian');
              }) >= event.cards2.length)

              return true;
            }
            return false;
          },
          check(event, player) {
            if (event.name == 'gain') return true;
            if (event.name == 'lose') return true;
            return false;
          },
          content() {
            'step 0';
            var numm = trigger.cards.length;
            if (trigger.name == 'lose') numm = trigger.cards2.length;
            if (trigger.name == 'gain') {
              player.draw(numm + 1);
              player.storage.yttl_jixian = false;
              event.finish();
              return;
            }
            if (trigger.name == 'lose') {
              var aicheck = get.damageEffect(trigger.player, player, player) > 0;
              var count = player.countCards('he', function (card) {
                return lib.filter.cardDiscardable(card, player, 'yttl_jixian');
              });
              player.
              chooseToDiscard([numm, count], 'he', true).
              set('ai', function (card) {
                var disnum = _status.event.disnum;
                if (!_status.event.aicheck) {
                  if (ui.selected.cards.length == disnum) return -1;
                  return get.unuseful(card);
                }
                var playernum = _status.event.playernum;
                if (playernum > disnum) {
                  if (ui.selected.cards.length > disnum) return -1;
                  return 6 + get.unuseful(card);
                } else {
                  if (ui.selected.cards.length == 2) return -1;
                  return get.unuseful(card);
                }
              }).
              set('aicheck', aicheck).
              set('disnum', numm).
              set('playernum', count);
              player.storage.yttl_jixian = true;
            }
            'step 1';
            if (result.bool && result.cards && result.cards.length > trigger.cards.length) {
              trigger.player.damage(player);
            }
          }
        },
        yttl_jixian_old: {
          init(player) {
            player.storage.yttl_jixian = true;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: ['gainEnd', 'loseEnd']
          },
          filter(event, player, cards) {
            if (event.player == player) return false;
            if (event.name == 'gain' && player.storage.yttl_jixian == true && event.cards && event.cards.length > 1) return true;
            if (event.name == 'lose' && event.cards && event.cards.length > 1 && player.storage.yttl_jixian == false) {
              if (player.countCards('he') >= event.cards.length) return true;
            }
            return false;
          },
          check(event, player) {
            if (event.name == 'gain') return true;
            if (event.name == 'lose' && event.cards.length == 2) return true;
            return false;
          },
          content() {
            'step 0';
            var numm = trigger.cards.length;
            if (trigger.name == 'gain') {
              player.draw(numm);
              player.storage.yttl_jixian = false;
            }
            if (trigger.name == 'lose') {
              player.chooseToDiscard(numm, 'he', true);
              player.storage.yttl_jixian = true;
            }
          }
        },
        yttl_nishi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          position: 'he',
          usable: 1,
          filter(event, player) {
            if (player.countCards('h') >= 2) return true;
            return player.countCards('he', { type: 'equip' }) > 0;
          },
          complexSelect: true,
          complexCard: true,
          selectCard() {
            var player = _status.event.player;
            var tar = ui.selected.targets;
            var ca = ui.selected.cards;
            if (!player.countCards('he', { type: 'equip' })) {
              return 2;
            }
            if (ca.length == 1 && get.type(ca[0]) == 'equip') {
              if (get.position(ca[0]) == 'e') return 1;
              if (!tar.length) return [1, 2];
              return 1;
            }
            return 2;
          },
          filterCard(card, player) {
            var ca = ui.selected.cards;
            if (ca.length == 0) return true;
            if (ca.length == 1) {
              if (get.type(ca[0]) == 'equip') {
                if (get.position(ca[0]) == 'e') {
                  return false;
                } else if (get.position(ca[0]) == 'h') {
                  if (get.position(card) == 'e') return false;
                }
              } else if (get.type(ca[0]) != 'equip') {
                if (get.position(card) == 'e') return false;
              }
            }
            return true;
          },
          check(card) {
            var player = _status.event.player;
            if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
              if (ui.selected.cards.length && get.type(ui.selected.cards[0]) == 'equip') return -1;
              return 11 - get.equipValue(card);
            } else {
              return 6 - get.value(card);
            }
          },
          filterTarget(card, player, target) {
            var ca = ui.selected.cards;
            if (ca.length == 1 && get.type(ca[0]) == 'equip') return player != target && target.hasEmptySlot(get.subtype(card));
            return target != player && target.countCards('e');
          },
          content() {
            'step 0';
            if (cards.length == 1) {
              player.$give(cards[0], target, false);
              target.equip(cards[0]);
              var num = Math.min(2, target.countGainableCards(player, 'h'));
              if (num > 0) {
                player.gainPlayerCard(num, target, true, 'h');
                if (num < 2) player.draw(2 - num);
              } else player.draw(2);
            } else if (cards.length == 2) {
              player.give(cards, target, true);
              var num = target.countGainableCards(player, 'e');
              if (num > 0)
              player.gainPlayerCard(1, target, true, 'e').set('ai', function (button) {
                var target = _status.event.target;
                var player = _status.event.player;
                var att = get.attitude(player, target);
                var func = function (button) {
                  var val = get.buttonValue(button);
                  if (att > 0) return -val;
                  return val;
                };
                var effect = get.effect(player, button.link, player, player);
                var effect2 = get.effect(target, button.link, target, target);
                if (att > 0) {
                  if (effect2 < 0) return -effect2;
                  if (effect > 0 && player.hasEmptySlot(get.subtype(button.link))) return effect / 5;
                }
                if (att < 0) {
                  if (effect2 < 0) return effect2;
                  if (effect > 0 && player.hasEmptySlot(get.subtype(button.link))) return effect;
                }
                return func(button);
              });
            }
          },
          discard: false,
          lose: false,
          ai: {
            order: 10,
            result: {
              target(player, target) {
                var cas = ui.selected.cards.length;
                if (cas == 1) {
                  return 1 - Math.min(2, target.countGainableCards(player, 'h'));
                }
                if (cas == 2) {
                  return 0.5;
                }
                return 0;
              }
            },
            threaten: 1
          }
        },
        yttl_nishi_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          position: 'he',
          usable: 1,
          filter(event, player) {
            if (player.countCards('h') >= 2) return true;
            return player.countCards('he', { type: 'equip' }) > 0;
          },
          complexSelect: true,
          complexCard: true,
          selectCard(target, card, player) {
            var tar = ui.selected.targets;
            var ca = ui.selected.cards;
            if (ca.length == 0) return 2;
            if (ca.length == 1) {
              if (get.type(ca[0]) == 'equip') {
                if (get.position(ca[0]) == 'e') {
                  return 1;
                } else if (get.position(ca[0]) == 'h') {
                  if (tar.length == 0) return [1, 2];
                  if (tar.length == 1) return 1;
                }
              } else if (get.type(ca[0]) != 'equip') {
                return 2;
              }
            }
            if (ca.length > 1) return ca.length;
          },
          filterCard(card, player) {
            var ca = ui.selected.cards;
            if (ca.length == 0) return true;
            if (ca.length == 1) {
              if (get.type(ca[0]) == 'equip') {
                if (get.position(ca[0]) == 'e') {
                  return false;
                } else if (get.position(ca[0]) == 'h') {
                  if (get.position(card) == 'e') return false;
                }
              } else if (get.type(ca[0]) != 'equip') {
                if (get.position(card) == 'e') return false;
              }
            }
            if (ca.length > 1) return false;
            return true;
          },
          check(card) {
            var player = _status.currentPhase;
            if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
              if (ui.selected.cards.length && get.type(ui.selected.cards[0]) == 'equip') return -1;
              return 11 - get.equipValue(card);
            } else {
              return 4 - get.value(card);
            }
          },
          filterTarget(card, player, target) {
            var ca = ui.selected.cards;
            if (ca.length == 0) return false;
            if (ca.length == 1) {
              if (get.type(ca[0]) == 'equip') {
                if (get.position(ca[0]) == 'e') {
                  if (target.isMin()) return false;
                  if (!target.countCards('h')) return false;
                  return player != target && target.hasEmptySlot(get.subtype(card));
                } else if (get.position(ca[0]) == 'h') {
                  if (target.isMin()) return false;
                  if (!target.countCards('h')) return false;
                  return player != target && target.hasEmptySlot(get.subtype(card));
                }
              } else if (get.type(ca[0]) != 'equip') {
                return false;
              }
            }
            if (ca.length == 2) {
              if (target == player) return false;
              if (!target.countCards('e')) return false;
            }
            if (ca.length > 2) return false;
            return true;
          },
          content() {
            'step 0';
            if (cards.length == 1) {
              target.equip(cards[0]);
              player.$give(cards[0], target, false);
              var num = Math.min(2, target.countCards('h'));
              if (num > 0) player.gainPlayerCard(num, target, true, 'h');
            } else if (cards.length == 2) {
              player.give(cards, target, true);
              var num = target.countCards('e');
              if (num > 0)
              player.gainPlayerCard(1, target, true, 'e').set('ai', function (button) {
                var player = _status.currentPhase;
                if (player.hasEmptySlot(get.subtype(button.link))) return 3;
                return 1;
              });
            }
          },
          discard: false,
          lose: false,
          ai: {
            order: 10,
            result: {
              target(player, target) {
                var num = 0;
                var cas = ui.selected.cards.length;
                if (cas == 1) {
                  if (target.getGainableCards(player, 'h').length >= 2) {
                    if (target.getGainableCards(player, 'h').length <= 5) {
                      if (target.getGainableCards(player, 'h', 'tao').length) num++;
                      if (target.getGainableCards(player, 'h', 'wuzhong').length) num++;
                      if (target.getGainableCards(player, 'h', 'shunshou').length) num++;
                      if (target.getGainableCards(player, 'h', 'lebu').length) num++;
                      if (target.getGainableCards(player, 'h', 'guohe').length) num++;
                      var bool = game.hasPlayer(function (current) {
                        return get.attitude(player, current) < 0 && player.canUse('sha', current);
                      });
                      if (player.countUsed('sha') == 0 && !player.hasSha() && bool && target.getGainableCards(player, 'h', 'sha').length) num++;
                    }
                  }
                  return -num;
                }
                if (cas == 2) {
                  var num2 = 2 / target.countCards('h') + 1;
                  if (target.hasSkillTag('reverseEquip')) num += 1;
                  for (var i = 1; i < 6; i++) {
                    if (target.getEquip(i) && player.hasEmptySlot(i)) num += 1;
                    break;
                  }
                  return num > num2 ? num : num2;
                }
                return 1;
              }
            },
            threaten: 1
          }
        },
        yttl_huiqiao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: ['loseEnd']
          },
          //usable:1,
          check(event, player) {
            if (get.attitude(player, event.player) > 0) return 1;
            return 0.8;
          },
          filter(event, player) {
            if (event.player == player) return false;
            if (event.parent.name == 'useCard') return false;
            if (event.parent.name == 'equip') return false;
            if (Array.isArray(event.cards)) for (var i of event.cards) {
              if (get.subtype(i) == 'equip1' && get.position(i) == 'd') {
                return game.hasPlayer(function (current) {
                  return current.hasEmptySlot(1);
                });
              }
            }
          },
          forced: true,
          content() {
            'step 0';
            'step 1';
            var cards = [];
            if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
              if (get.subtype(i) == 'equip1' && get.position(i) == 'd') {
                cards.push(i);
              }
            }
            if (cards.length) {
              event.zhuangbei = cards;
            }
            'step 2';
            if (event.zhuangbei.length > 1) {
              player.chooseCardButton(event.zhuangbei, 1, '请选择一张装备').set('filterButton', function (button) {
                return get.subtype(button.link) == 'equip1';
              });
            } else if (event.zhuangbei.length == 1) {
              event._result = { bool: true, links: [event.zhuangbei[0]] };
            } else {
              event.finish();
            }
            'step 3';
            if (result?.links?.length) {//QQQ
              event.gainzhuangbei = result.links[0];
              event.zhuangbei.remove(result.links[0]);
            } else {
              event.finish();
            }
            'step 4';
            player.
            chooseTarget('是否选择一名角色装备' + get.translation(event.gainzhuangbei) + '？', function (card, player, target) {
              return target.hasEmptySlot(1);
            }).
            set('ai', function (target) {
              return get.effect(target, event.gainzhuangbei, target, player);
            });
            'step 5';
            if (result?.targets?.length) {
              result.targets[0].equip(event.gainzhuangbei, true).set('delay', true);
              result.targets[0].$draw(event.gainzhuangbei);
            }
            'step 6';
            if (
            game.hasPlayer(function (current) {
              return current.hasEmptySlot(1);
            }))

            event.goto(2);
          }
        },
        yttl_jie: {
          trigger: {
            global: 'dying'
          },
          _priority: 6,
          audio: 'ext:金庸群侠传/peiyin:2',
          check(event, player) {
            var att1 = get.attitude(player, event.parent.source);
            var att2 = get.attitude(player, event.player);
            var hs = false;
            var es = false;
            var js = false;
            if (event.parent.source.countDiscardableCards(player, 'h')) hs = true;
            if (event.parent.source.countDiscardableCards(player, 'e')) es = true;
            if (event.parent.source.countDiscardableCards(player, 'j')) js = true;
            if (att1 <= 0 && att2 > 0) {
              if (hs == true && es == true && js == true) return true;
              if (hs == true && es == true && js == false) return true;
              if (hs == true && es == false && js == false) return true;
              if (hs == false && es == true && js == false) return true;
            }
            if (att1 <= 0 && att2 <= 0) {
              if (hs == true && es == true && js == true) return true;
              if (hs == true && es == true && js == false) return true;
              if (hs == false && es == true && js == false) return true;
              if (hs == true && es == false && js == false) return true;
            }
            if (att1 > 0 && att2 > 0) {
              if (hs == true && es == true && js == true) return true;
              if (hs == false && es == false && js == true) return true;
              if (hs == false && es == true && js == true) return true;
              if (hs == true && es == false && js == true) return true;
            }
            if (att1 > 0 && att2 <= 0) {
              if (hs == false && es == false && js == true) return true;
            }
            return false;
          },
          filter(event, player) {
            if (event.fadongjineng == true) return false;
            if (!event.parent.source) return false;
            if (!event.parent.source.countDiscardableCards(player, 'hej')) return false;
            return event.parent.source.isIn() && event.player.hp <= 0;
          },
          content() {
            'step 0';
            trigger.fadongjineng = true;
            var num = 0;
            if (trigger.parent.source.countDiscardableCards(player, 'h')) num++;
            if (trigger.parent.source.countDiscardableCards(player, 'e')) num++;
            if (trigger.parent.source.countDiscardableCards(player, 'j')) num++;
            if (num > 0) {
              player.
              discardPlayerCard(trigger.parent.source, num, 'hej', true).
              set('filterButton', function (button) {
                for (var i = 0; i < ui.selected.buttons.length; i++) {
                  if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                }
                return true;
              }).
              set('ai', function (button) {
                var att1 = get.attitude(player, trigger.parent.source);
                var att2 = get.attitude(player, trigger.player);
                if (att1 > 0 && att2 > 0) {
                  if (ui.selected.buttons.length == 0) {
                    if (get.position(button.link) == 'j') return 1;
                    return -1;
                  }
                  if (ui.selected.buttons.length) {
                    if (get.color(button.link) != get.color(ui.selected.buttons[0].link)) return 1;
                    return -1;
                  }
                }
                if (att1 > 0 && att2 <= 0) {
                  if (ui.selected.buttons.length == 0) {
                    if (get.position(button.link) == 'j') return 1;
                    return -1;
                  }
                  if (ui.selected.buttons.length) {
                    if (get.color(button.link) == get.color(ui.selected.buttons[0].link)) return 1;
                    return -1;
                  }
                }
                if (att1 <= 0 && att2 > 0) {
                  if (ui.selected.buttons.length == 0) {
                    if (get.position(button.link) != 'j') return 1;
                    return -1;
                  }
                  if (ui.selected.buttons.length) {
                    if (get.position(button.link) != 'j' && get.color(button.link) != get.color(ui.selected.buttons[0].link)) return 1;
                    if (get.position(button.link) != 'j' && get.color(button.link) == get.color(ui.selected.buttons[0].link)) return 0.5;
                    return -1;
                  }
                }
                if (att1 <= 0 && att2 <= 0) {
                  if (ui.selected.buttons.length == 0) {
                    if (get.position(button.link) != 'j') return 1;
                    return -1;
                  }
                  if (ui.selected.buttons.length) {
                    if (get.position(button.link) != 'j' && get.color(button.link) == get.color(ui.selected.buttons[0].link)) return 0.5;
                    return -1;
                  }
                }
                return -1;
              });
            }
            'step 1';
            if (result.bool) {
              var col = [];
              var car = result.links;
              player.showCards(car, '嫉恶');
              for (var i = 0; i < car.length; i++) {
                var cols = get.color(car[i]);
                col.add(cols);
              }
              if (col.length >= 2) trigger.player.recover();
            }
          },
          ai: {
            threaten: 1.4
          }
        },
        yttl_zhangjian: {
          shaRelated: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCardToPlayered' },
          filter(event, player) {
            if (!player.getEquip(1)) return false;
            if (event.card.name != 'sha') return false;
            return event.isFirstTarget;
          },
          forced: true,
          content() {
            player.draw();
          },
          ai: {
            effect: {
              player(card, player, target) {
                if (card.name == 'sha' && player.getEquip(1)) return [1, 1];
              }
            }
          }
        },
        yttl_xuanming: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'shaBegin' },
          forced: true,
          filter(event, player) {
            var number = event.card.number;
            return typeof number == 'number';
          },
          content() {
            var number = trigger.card.number;
            if (number % 2 == 0) trigger.target.addTempSkill('yttl_xuanming_ou', 'shaAfter');
            if (number % 2 == 1) trigger.target.addTempSkill('yttl_xuanming_ji', 'shaAfter');
          },
          subSkill: {
            ou: {
              mark: true,
              marktext2: '奇',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_xuanmingyangou.jpg',
              intro: { content: '你不能打出点数为奇数的牌.' },
              mod: {
                cardEnabled(card, player) {
                  var num1 = card.number;
                  if (typeof num1 == 'number' && num1 % 2 == 1) return false;
                },
                cardRespondable(card, player) {
                  var num1 = card.number;
                  if (typeof num1 == 'number' && num1 % 2 == 1) return false;
                }
              }
            },
            ji: {
              mark: true,
              marktext2: '偶',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_xuanmingyinji.jpg',
              intro: { content: '你不能打出点数为偶数的牌.' },
              mod: {
                cardEnabled(card, player) {
                  var num1 = card.number;
                  if (typeof num1 == 'number' && num1 % 2 == 0) return false;
                },
                cardRespondable(card, player) {
                  var num1 = card.number;
                  if (typeof num1 == 'number' && num1 % 2 == 0) return false;
                }
              }
            },
            nature: {
              audio: 'yttl_xuanming',
              trigger: { source: 'damageBegin' },
              filter(event, player) {
                return !event.hasNature();
              },
              forced: true,
              content() {
                game.setNature(trigger, 'ice');
              },
              ai: {
                effect: {
                  player(card, player, target, current, isLink) {
                    if (!target) return;
                    if (isLink) return;
                    if (!get.tag(card, 'damage')) return;
                    if (game.hasNature(card) || get.tag(card, 'natureDamage')) return;
                    if (player.storage._yttl_xuanming) return;
                    player.storage._yttl_xuanming = true;
                    const count = get.damageEffect(target, player, player, 'ice');
                    const count2 = get.damageEffect(target, player, player);
                    delete player.storage._yttl_xuanming;
                    if (count > count2) return [1, 0, 1, -0.5];
                    if (count < count2) return [1, 0, 1, 0.2];
                  }
                }
              }
            }
          }
        },
        yttl_xuanming2: {
          inherit: 'yttl_xuanming',
          group: 'yttl_xuanming_nature',
          audio: 'ext:金庸群侠传/peiyin:2'
        },
        yttl_hanyin2: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseUseBegin' },
          content() {
            'step 0';
            event.cards = get.cards(2);
            game.cardsGotoOrdering(event.cards);
            player.showCards(event.cards, '酣淫');
            'step 1';
            var str = '将其中一张黑色牌当【酒】使用或将其中一张红色牌当【无中生有】使用(你依此法使用【无中生有】时可以令一名女性角色成为额外目标).';
            player.
            chooseCardButton(event.cards, 1, str).
            set('filterButton', function (button) {
              var card = button.link;
              var color = get.color(card);
              if (color != 'black' && color != 'red') return false;
              var vcard;
              if (color == 'red') {
                vcard = { name: 'wuzhong', cards: [card] };
              } else {
                vcard = { name: 'jiu', cards: [card] };
              }
              return player.canUse(vcard, player, false);
            }).
            set('ai', function (button) {
              var card = button.link;
              var color = get.color(card);
              var vcard;
              if (color == 'red') {
                vcard = { name: 'wuzhong', cards: [card] };
              } else {
                vcard = { name: 'jiu', cards: [card] };
              }
              return player.getUseValue(vcard);
              //if(vcard.name=='wuzhong') return 2;
              //return 1;
            });
            'step 2';
            if (result.bool) {
              var card = result.links[0];
              var vcard;
              var color = get.color(card);
              if (color == 'red') {
                vcard = { name: 'wuzhong', cards: [card] };
              } else {
                vcard = { name: 'jiu', cards: [card] };
              }
              event.vcard = vcard;
              var bool =
              vcard.name == 'wuzhong' &&
              game.hasPlayer(function (target) {
                return lib.filter.targetEnabled2(vcard, player, target) && target.sex == 'female' && target != player;
              });
              if (bool) {
                var prompt2 = '是否额外指定一名女性角色名为' + get.translation(vcard) + '的目标';
                player.
                chooseTarget(1, '酣淫', function (card, player, target) {
                  var player = _status.event.player;
                  var vcard = _status.event.card;
                  return lib.filter.targetEnabled2(vcard, player, target) && target.sex == 'female' && target != player;
                }).
                set('prompt2', prompt2).
                set('ai', function (target) {
                  var player = _status.event.player;
                  var vcard = _status.event.card;
                  return get.effect(target, vcard, player, player);
                }).
                set('card', vcard);
              } else event._result = { bool: false };
            } else event.finish();
            'step 3';
            var targets = [player];
            if (result.bool) {
              targets.add(result.targets[0]);
            }
            player.useCard({ name: event.vcard.name }, targets, event.vcard.cards, false);
          }
        },
        yttl_hanyin: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseUseBegin'
          },
          content() {
            'step 0';
            event.cards = get.cards(2);
            game.cardsGotoOrdering(event.cards);
            player.showCards(event.cards, '酣淫');
            'step 1';
            var skr = '是否选择一张黑色牌或【无极而生】？若为【无极而生】你获得之,否则你将此牌当酒使用,若你依此法使用了牌或获得了牌,你此回合不能使用与该牌颜色不同的牌.';
            player.
            chooseCardButton(event.cards, 1, skr).
            set('filterButton', function (button) {
              var cards = button.link;
              return get.color(cards) == 'black' || cards.name == 'wuzhong';
            }).
            set('ai', function (button) {
              var resha = false;
              var blsha = false;
              var blnum = 0;
              var renum = 0;
              var ca = player.getCards('h');
              for (var i = 0; i < ca.length; i++) {
                if (get.color(ca[i]) == 'black') {
                  var canblack = game.hasPlayer(function (current) {
                    return get.effect(current, ca[i], player, player) > 0 && player.canUse(ca[i], current);
                  });
                  if (canblack && ca[i].name != 'sha') blnum++;
                  if (canblack && ca[i].name == 'sha' && blsha == false) blsha = true;
                }
                if (get.color(ca[i]) == 'red') {
                  var canred = game.hasPlayer(function (current) {
                    return get.effect(current, ca[i], player, player) > 0 && player.canUse(ca[i], current);
                  });
                  if (canred && ca[i].name != 'sha') renum++;
                  if (canred && ca[i].name == 'sha' && resha == false) resha = true;
                }
              }
              if (resha == true) renum++;
              if (blsha == true) blnum++;
              if (get.color(button.link) == 'black') {
                if (blsha == true && renum < 2) return 1;
              }
              if (get.color(button.link) == 'red') {
                if (resha == true && blnum < 2) return 1;
                if (resha == false && blsha == false && blnum < 2) return 1;
              }
              return -1;
            });
            'step 2';
            if (result.bool) {
              if (result.links[0].name == 'wuzhong') {
                player.gain(result.links[0], 'gain2');
                //player.useCard(result.links[0],player);
              } else {
                player.useCard({ name: 'jiu' }, player, result.links);
              }
              player.addTempSkill('yttl_hanyin_' + get.color(result.links[0]));
            }
          },
          subSkill: {
            red: {
              mark: true,
              marktext2: '黑',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_hanyin.jpg',
              intro: {
                content: '酒色误事,你本回合不能使用黑色牌.'
              },
              mod: {
                cardEnabled(card, player) {
                  if (get.color(card) == 'black') return false;
                },
                cardUsable(card, player) {
                  if (get.color(card) == 'black') return false;
                },
                cardSavable(card, player) {
                  if (get.color(card) == 'black') return false;
                },
                targetInRange(card) {
                  if (get.color(card) == 'black') return false;
                }
              }
            },
            black: {
              mark: true,
              marktext2: '红',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_hanyin.jpg',
              intro: {
                content: '酒色误事,你本回合不能使用红色牌.'
              },
              mod: {
                cardEnabled(card, player) {
                  if (get.color(card) == 'red') return false;
                },
                cardUsable(card, player) {
                  if (get.color(card) == 'red') return false;
                },
                cardSavable(card, player) {
                  if (get.color(card) == 'red') return false;
                },
                targetInRange(card) {
                  if (get.color(card) == 'red') return false;
                }
              }
            }
          }
        },
        yttl_lttaiji: {
          audio: 'ext:金庸群侠传/peiyin:2'
        },
        //新孱懦和新同寿--霸天
        yttl_channuo: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageBegin3'
          },
          filter(event, player) {
            if (!event.source) return false;
            if (!event.source.isIn()) return false;
            return event.num > 0 && player.countCards('h') > 0 && event.card && get.color(event.card) == 'black' && event.card.name == 'sha';
          },
          forced: true,
          content() {
            'step 0';
            if (player.storage.yttl_tongshou) event.goto(3);
            'step 1';
            player.chooseCard('h', get.prompt('同寿', trigger.source), '交给' + get.translation(trigger.source) + '一张手牌').set('ai', function (card) {
              return 6.5 - get.value(card);
            });
            'step 2';
            if (result.bool) {
              //trigger.source.gain(result.cards[0],player,'giveAuto');
              player.give(result.cards[0], trigger.source);
              trigger.num--;
            }
            event.finish();
            'step 3';
            player.chooseToDiscard('h', 1, get.prompt2('yttl_channuo')).set('ai', function (card) {
              return 7 - get.value(card);
            });
            'step 4';
            if (result.bool) {
              trigger.num--;
            }
          }
        },
        yttl_tongshou: {
          audio: 'ext:金庸群侠传/peiyin:2',
          derivation: ['yttl_taiji'],
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          filter(event, player) {
            if (player.storage.yttl_tongshou) return false;
            return player.countCards('h') <= 0;
          },
          forced: true,
          _priority: 3,
          content() {
            'step 0';
            player.$fullscreenpop('天地同寿', 'fire');
            player.loseMaxHp();
            'step 1';
            if (player.isDamaged()) player.recover();
            player.addSkills('yttl_taiji');
            player.storage[event.name] = true;
            player.awakenSkill('yttl_tongshou');
          },
          ai: {
            taijiTag: true,
            threaten(player, target) {
              return 0.5;
            }
          }
        },
        //旧孱懦和旧同寿
        yttl_channuo_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'damageBegin1' },
          filter(event, player) {
            if (!event.source) return false;
            if (!event.source.isIn()) return false;
            return event.num > 0 && player.countCards('h') > 0 && event.card && get.color(event.card) == 'black' && event.card.name == 'sha';
          },
          forced: true,
          content() {
            'step 0';
            player.chooseCard('h', get.prompt('yttl_channuo_old', trigger.source), '交给' + get.translation(trigger.source) + '一张手牌').set('ai', function (card) {
              return 6.5 - get.value(card);
            });
            'step 1';
            if (result.bool) {
              trigger.source.gain(result.cards[0], player, 'giveAuto');
              trigger.num--;
            }
          }
        },
        yttl_tongshou_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          derivation: ['yttl_taiji'],
          trigger: { player: 'phaseZhunbeiBegin' },
          filter(event, player) {
            return player.countCards('h') <= 0;
          },
          forced: true,
          _priority: 3,
          content() {
            player.$fullscreenpop('天地同寿', 'fire');
            player.loseMaxHp();
            player.addSkills('yttl_taiji');
            player.awakenSkill('yttl_tongshou_old');
          },
          ai: {
            taijiTag: true,
            threaten(player, target) {
              return 0.5;
            }
          }
        },
        yttl_xiaoyong: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          mod: {
            cardUsable(card, player, num) {
              if (card.name == 'sha' && card.yttl_xiaoyong) return Infinity;
            }
          },
          filterCard(card, player) {
            return get.type(card, 'trick') == 'trick';
          },
          position: 'hs',
          viewAsFilter(player) {
            if (
            !player.countCards('hs', function (card) {
              return get.type(card, 'trick') == 'trick';
            }))

            return false;
            return true;
          },
          viewAs: {
            name: 'sha',
            yttl_xiaoyong: true
          },
          prompt: '将一张锦囊牌当杀使用',
          check(card) {
            return 6 - get.value(card);
          },
          precontent() {
            if (event.getParent(2).name == 'phaseUse') {
              event.parent.addCount = false;
            }
          },
          ai: {
            order() {
              var player = _status.event.player;
              if (player.countCards('hs', 'sha')) return get.order({ name: 'sha' }) + 0.1;
              return get.order({ name: 'sha' }) - 0.1;
            }
          }
        },
        yttl_xianfeng: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseBegin' },
          forced: true,
          content() {
            trigger.phaseList.unshift('phaseUse|yttl_xianfeng');
          }
        },
        yttl_xiaoyong_new: {
          audio: 'yttl_xiaoyong',
          mod: {
            cardUsable(card, player, num) {
              if (card.name == 'sha' && card.yttl_xiaoyong_new) return Infinity;
            }
          },
          precontent() {
            event.parent.addCount = false;
          },
          enable: 'phaseUse',
          filterCard(card, player) {
            return get.type(card) != 'basic';
          },
          filter(event, player) {
            return (
              player.countCards('hes', function (card) {
                return get.type(card) != 'basic';
              }) > 0);

          },
          position: 'hes',
          viewAs: {
            name: 'sha',
            yttl_xiaoyong_new: true
          },
          usable: 1,
          prompt: '将一张非基本牌当不计次数的【杀】使用.',
          check(card) {
            var val = get.value(card);
            return 5 - val;
          }
        },
        yttl_xianfeng_new: {
          group: 'yttl_xianfeng_new_add',
          subSkill: {
            add: {
              trigger: {
                player: 'phaseDrawBegin2'
              },
              audio: 'yttl_xianfeng',
              forced: true,
              filter(event, player) {
                if (event.numFixed) return false;
                var stat = player.getStat();
                return stat.damage && stat.damage > 0;
              },
              content() {
                trigger.num += player.getStat().damage;
              }
            }
          },
          trigger: {
            player: 'phaseBegin'
          },
          audio: 'yttl_xianfeng',
          forced: true,
          content() {
            trigger.phaseList.unshift('phaseUse|yttl_xianfeng');
          }
        },
        yttl_qizhao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: ['chooseToRespond', 'chooseToUse'],
          filterCard(card, player) {
            var equip = player.getCards('e', function (e) {
              return get.subtype(e) == 'equip1';
            });
            return equip.some(function (e) {
              return get.color(card) == get.color(e);
            });
          },
          position: 'hes',
          viewAs: { name: 'sha' },
          viewAsFilter(player) {
            var equip = player.getCards('e', function (e) {
              return get.subtype(e) == 'equip1';
            });
            if (!equip.length) return false;
            if (
            !player.countCards('hes', function (card) {
              return equip.some(function (e) {
                return get.color(card) == get.color(e);
              });
            }))

            return false;
            return true;
          },
          prompt: '将一张与你武器牌颜色相同的牌当杀使用或打出',
          check(card) {
            var value = get.value(card);
            if (get.subtype(card) == 'equip1') value += 7;
            if (get.position(card) == 'e' && get.subtype(card) == 'equip1') value += 2;
            if (get.position(card) == 'e' && card.name == 'zhuge') value += 1;
            if (card.name == 'zhuge') value += 1;
            return 20 - value;
          },
          ai: {
            skillTagFilter(player) {
              return lib.skill.yttl_qizhao.viewAsFilter(player);
            },
            respondSha: true
          }
        },
        yttl_lingjian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          mark: true,
          markimage: 'extension/金庸群侠传/image/icon/jylingjian.jpg',
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          init(player, skill) {
            player.storage[skill] = false;
          },
          filter(event, player) {
            if (!event.player.hasEmptySlot(1)) return false;
            return !player.storage.yttl_lingjian;
          },
          check(event, player) {
            if (event.player == player) return true;
            return false;
          },
          content() {
            'step 0';
            player.awakenSkill('yttl_lingjian');
            trigger.player.draw(2);
            player.storage.yttl_lingjian = true;
            'step 1';
            if (player.countCards('he') > 0) {
              player.chooseToDiscard(1, 'he', true);
            }
            'step 2';
            var list = [];
            for (var i = 0; i < lib.inpile.length; i++) {
              var name = lib.inpile[i];
              var card = { name: name };
              var subtype = get.subtype(card);
              if (subtype && subtype == 'equip1') {
                list.push(['武器', '', name]);
              }
            }
            player.chooseButton(['选择一张武器牌令其装备之', [list, 'vcard'], 'hidden'], true).set('ai', function (button) {
              var card = { name: button.link[2] };
              var value = get.value(card);
              if (trigger.player.hasSkill('wusheng') && card.name == 'zhuge') value += 10;
              if (trigger.player.hasSkill('yttl_qizhao') && card.name == 'zhuge') value += 10;
              if (trigger.player.hasSkill('paoxiao') && card.name == 'zhangba') value += 10;
              return value;
            });
            'step 3';
            if (result.bool) {
              var card = game.createCard(result.links[0][2]);
              //card._destroy=true;
              trigger.player.equip(card).pushHandler(function (event, option) {
                if (event.step == 7 && option.state == 'end') {
                  event.card.destroyed = true;
                }
              });
              var next = game.createEvent('zhuque_clear');
              next.card = card;
              event.next.remove(next);
              trigger.parent.after.push(next);
              next.setContent(function () {
                const player = get.owner(card);
                if (player) {
                  card.destroyed = true;
                  player.lose(card, ui.special);
                }
              });
            }
          },
          intro: {
            content: 'limited'
          }
        },
        //金花婆婆新技能金花--霸天20220530
        yttl_jinhua: {
          marktext: '金花',
          intro: {
            name: '金花',
            name2: '金花',
            content: '当前有#个<金花>'
          },
          group: ['yttl_jinhua2', 'yttl_jinhua3', 'yttl_jinhua4'],
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          forced: true,
          filter(event, player) {
            return !player.hasMark('yttl_jinhua');
          },
          content() {
            player.addMark('yttl_jinhua', 7);
          }
        },
        yttl_jinhua2: {
          audio: 'yttl_jinhua',
          trigger: {
            player: 'phaseJieshuBegin'
          },
          forced: true,
          filter(event, player) {
            return player.hasMark('yttl_jinhua');
          },
          content() {
            player.removeMark('yttl_jinhua', 1);
            var card = get.cardPile(function (cardx) {
              return lib.jy_anqiList.includes(cardx.name);
            });
            if (card) {
              player.gain(card, 'gain2', 'log');
            } else {
              player.chat('没有暗器牌了吗');
              game.log('但是牌堆里已经没有暗器牌了!');
            }
          }
        },
        yttl_jinhua3: {
          audio: 'yttl_jinhua',
          trigger: {
            target: 'useCardToTargeted'
          },
          forced: true,
          filter(event, player) {
            if (event.player == player) return false;
            if (!player.hasMark('yttl_jinhua')) return false;
            var count = player.countMark('yttl_jinhua');
            var number = event.card.number;
            if (typeof number != 'number') return false;
            return number < count;
          },
          content() {
            trigger.parent.excluded.add(player);
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                if (player = target) return;
                if (!target.hasMark('yttl_jinhua')) return;
                var count = player.countMark('yttl_jinhua');
                var number = card.number;
                if (typeof number != 'number') return;
                if (number < count) return 'zerotarget';
              }
            }
          }
        },
        yttl_jinhua4: {
          audio: 'yttl_jinhua',
          check(event, player) {
            if (event.small) return false;
            var num = player.countMark('yttl_jinhua');
            if (player == event.player) {
              if (event.num1 + num < event.num2) return false;
            } else {
              if (event.num2 + num < event.num1) return false;
            }
            return true;
          },
          trigger: { player: 'compare', target: 'compare' },
          filter(event, player) {
            if (!player.hasMark('yttl_jinhua')) return false;
            if (player != event.target && event.iwhile) return false;
            return true;
          },
          content() {
            'step 0';
            var num = player.countMark('yttl_jinhua');
            var num2, num3;
            num3 = trigger.num2 - trigger.num1;
            if (player != trigger.player) num3 = -num3;
            if (num3 > 0) {
              if (num3 + 1 >= num) {
                num2 = num;
              } else {
                num2 = num3 + 1;
              }
            } else {
              num2 = num;
            }
            var map = {};
            var list = [];
            for (var i = 1; i <= num; i++) {
              var cn = get.cnNumber(i, true);
              map[cn] = i;
              list.push(cn);
            }
            event.map = map;
            player.
            chooseControl(list, function () {
              return get.cnNumber(_status.event.goon, true);
            }).
            set('prompt', '选择增加任意点数').
            set('goon', num2);
            'step 1';
            var num = event.map[result.control] || 1;
            if (player == trigger.player) {
              trigger.num1 += num;
            } else {
              trigger.num2 += num;
            }
            player.removeMark('yttl_jinhua', num);
            game.log(player, '拼点牌点数+' + num);
          }
        },
        //金花婆婆旧技能寒疾
        yttl_hanji: {
          mod: {
            targetEnabled(card, player, target) {
              var number = card.number;
              if (typeof number != 'number') return;
              if (player != target && number < 6) return false;
            },
            playerEnabled(card, player, target) {
              var number = card.number;
              if (typeof number != 'number') return;
              if (player != target && number > 11) return false;
            }
          }
        },
        //新借刀//霸天
        yttl_jiedao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filterTarget(card, player, target) {
            return player.canCompare(target);
          },
          filter(event, player) {
            if (!player.countCards('h')) return false;
            var bool = game.hasPlayer(function (current) {
              return current != player && current.countCards('e', (card) => get.subtype(card) == 'equip1');
            });
            if (!bool) return false;
            return game.hasPlayer((target) => target != player && player.canCompare(target));
          },
          content() {
            'step 0';
            player.chooseToCompare(target);
            'step 1';
            if (result.bool) {
              var cardx = result.player;
              var vcard = { name: 'jiedao', cards: [cardx] };
              if (get.position(cardx) == 'd' && player.hasUseTarget(vcard)) {
                player.chooseUseTarget(vcard, [cardx], false).viewAs = true;
              }
            }
          },
          ai: {
            order(item, player) {
              player = player || _status.event.player;
              var bool = game.hasPlayer(function (current) {
                if (current == player) return false;
                var vcard = { name: 'jiedao' };
                return current != player && player.canUse(vcard, current) && get.effect(current, vcard, player, player) > 0;
              });
              if (bool) return 7.9;
              if (player.needsToDiscard()) return 0.2;
              return 0;
            },
            result: {
              target: -1
            },
            threaten: 1.3
          }
        },
        //旧借刀
        yttl_jiedao_old2: {
          audio: 'yttl_jiedao',
          enable: 'chooseToUse',
          filterCard(card, player) {
            return card.suit == 'club';
          },
          position: 'hs',
          viewAs: { name: 'jiedao' },
          viewAsFilter(player) {
            if (!player.countCards('hs', { suit: 'club' })) return false;
            return true;
          },
          prompt: '将一张♣️️手牌当【借剑杀人】使用.',
          check(card) {
            return 6 - get.value(card);
          }
        },
        yttl_jiedao_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseUseBegin' },
          forced: true,
          filter(event, player) {
            return player.countCards('h');
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('yttl_jiedao_old2'), function (card, player, target) {
              return player.canCompare(target);
            }).
            set('ai', function (target) {
              if (!_status.event.goon) return 0;
              return -get.attitude(_status.event.player, target);
            }).
            set(
              'goon',
              player.needsToDiscard() ||
              player.hasCard(function (card) {
                var val = get.value(card);
                if (val < 0) return true;
                if (val <= 5) {
                  return card.number >= 11;
                }
                if (val <= 6) {
                  return card.number >= 12;
                }
                return false;
              })
            );
            'step 1';
            if (result.bool) {
              event.target = result.targets[0];
              player.chooseToCompare(event.target);
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              player.addTempSkill('yttl_jiedao_old2', 'phaseEnd');
            } else {
              if (player.getEquips(1).length) {
                player.discard(player.getEquips(1));
              }
            }
          }
        },
        yttl_chuxin: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: ['useCard', 'respond'] },
          juexingji: true,
          init(player, skill) {
            player.storage[skill] = false;
          },
          filter(event, player) {
            if (player.storage.yttl_chuxin) return false;
            var suits = lib.suit.slice(0);
            var suit = event.card.suit;
            return suit && suits.includes(suit);
          },
          content() {
            player.awakenSkill(event.name);
            player.storage[event.name] = true;
            player.addSkill('yttl_chuxin_heart');
            player.markAuto('yttl_chuxin_heart', [trigger.card.suit]);
          },
          forced: true,
          subSkill: {
            heart: {
              mark: true,
              marktext: '初',
              charlotte: true,
              nopop: true,
              intro: { content: '你的$牌不计入手牌上限,你在本局游戏中使用$牌摸一张牌' },
              mod: {
                aiValue(player, card, num) {
                  var list = player.getStorage('yttl_chuxin_heart');
                  if (list.includes(card.suit)) {
                    return num + 3;
                  }
                  return num;
                },
                aiUseful(player, card, num) {
                  var list = player.getStorage('yttl_chuxin_heart');
                  if (list.includes(card.suit)) {
                    return num + 3;
                  }
                  return num;
                },
                ignoredHandcard(card, player) {
                  var list = player.getStorage('yttl_chuxin_heart');
                  if (list.includes(card.suit)) {
                    return true;
                  }
                },
                cardDiscardable(card, player, name) {
                  var list = player.getStorage('yttl_chuxin_heart');
                  if (name == 'phaseDiscard' && list.includes(card.suit)) return false;
                }
              },
              trigger: { player: 'useCard2' },
              forced: true,
              filter(event, player) {
                var list = player.getStorage('yttl_chuxin_heart');
                return list.includes(event.card.suit);
              },
              content() {
                player.draw();
              },
              ai: {
                effect: {
                  player(card, player, target) {
                    var list = player.getStorage('yttl_chuxin_heart');
                    if (list.includes(card.suit)) return [1, 1];
                  }
                }
              }
            }
          }
        },
        yttl_maodu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filterTarget(card, player, target) {
            return target != player && target.maxHp + 2 > player.maxHp;
          },
          selectTarget: [0, 1],
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            player.loseMaxHp(2);
            if (targets && targets.length) {
              targets[0].loseHp(1);
            } else {
              player.draw(4);
            }
          },
          subSkill: {
            damage: {
              audio: 'yttl_maodu',
              trigger: { player: 'damageEnd', source: 'damageSource' },
              filter(event, player) {
                var list = Array.from(lib.nature.keys());
                if (event.nature && list.includes(event.nature) && event.num > 0) return true;
              },
              forced: true,
              content() {
                player.gainMaxHp(trigger.num);
              }
            }
          },
          group: ['yttl_maodu_damage'],
          ai: {
            basic: { order: 1 },
            result: {
              player(player) {
                if (player.maxHp - player.hp >= 2) return 1;
                return -1;
              },
              target(player, target) {
                if (target.hp == 1) return -5;
                return 0;
              }
            }
          }
        },
        //老渡厄技能
        yttl_fumo: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'turnOverEnd' },
          forced: true,
          filter(event, player) {
            return player.isTurnedOver();
          },
          logTarget(event, player) {
            return game.filterPlayer(function (target) {
              return !target.isLinked();
            });
          },
          content() {
            'step 0';
            event.num = 0;
            event.players = game.filterPlayer(function (target) {
              return !target.isLinked();
            });
            'step 1';
            if (event.num < event.players.length) {
              var target = event.players[event.num];
              if (!target.isLinked()) {
                target.link();
              }
              event.num++;
              event.redo();
            }
          },
          ai: {
            expose: 0.1,
            threaten: 2
          }
        },
        yttl_kuchan: {
          audio: 'ext:金庸群侠传/peiyin:6',
          trigger: {
            player: 'turnOverEnd'
          },
          forced: true,
          filter(event, player) {
            //return!player.isTurnedOver();
            return player.isAlive();
          },
          content() {
            'step 0';
            player.
            chooseTarget(function (card, player, target) {
              var list = get.inpile('trick', 'trick');
              return !target.storage.yttl_kuchan || target.storage.yttl_kuchan.length < list.length;
            }, '枯禅<br><br><div class="text center">令一名其他角色本局游戏不能成为一张锦囊牌的目标').
            set('ai', function (target) {
              var player = _status.event.player;
              var list = get.inpile('trick', 'trick');
              var max = 0;
              for (var i = 0; i < list.length; i++) {
                if (!target.storage.yttl_kuchan || !target.storage.yttl_kuchan.includes(list[i])) {
                  var temp = -get.effect(target, { name: list[i] }, player, player);
                  if (temp > max) max = temp;
                }
              }
              if (max > 0 && target == player) max += 40;
              if (player.identity != 'nei' && target.identity == 'zhu' && max > 0) max += 10;
              //AI  针对策略
              return max;
            });
            'step 1';
            if (result.bool) {
              var target = result.targets[0];
              event.target = target;
              target.addSkill('yttl_kuchan2');
              if (!target.storage.yttl_kuchan) {
                target.storage.yttl_kuchan = [];
              }
              var list = get.inpile('trick', 'trick');
              for (var i = 0; i < list.length; i++) {
                list[i] = ['锦囊', '', list[i]];
              }
              player.
              chooseButton(true, [[list, 'vcard']]).
              set('filterButton', function (button) {
                if (target.storage.yttl_kuchan && target.storage.yttl_kuchan.includes(button.link[2])) return false;
                return true;
              }).
              set('ai', function (button) {
                return -get.effect(target, { name: button.link[2] }, player, player);
              });
            }
            'step 2';
            if (result.bool) {
              game.log(event.target, '不能成为', { name: result.links[0][2] }, '的目标');
              event.target.storage.yttl_kuchan.add(result.links[0][2]);
            }
          }
        },
        ////11111111111111111111
        yttl_kuchan2: {
          mark: true,
          marktext: '禁',
          intro: { content: '不能成为$的目标' },
          charlotte: true,
          mod: {
            targetEnabled(card, player, target) {
              if (target.storage.yttl_kuchan && target.storage.yttl_kuchan.includes(card.name)) return false;
            }
          }
        },
        yttl_qingce: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCard2' },
          forced: true,
          filter(event, player) {
            var type = get.type(event.card);
            var info = get.info(event.card);
            return type == 'trick' && info.enable;
          },
          content() {
            'step 0';
            var goon = false;
            var info = get.info(trigger.card);
            if (trigger.targets && !info.multitarget) {
              var players = game.filterPlayer();
              for (var i of players) {
                if (lib.filter.targetEnabled2(trigger.card, player, i) && !trigger.targets.includes(i)) {
                  goon = true;
                  break;
                }
              }
            }
            if (goon) {
              player.
              chooseTarget('清侧:是否额外指定你与任意名距离为一的角色成为' + get.translation(trigger.card) + '的目标？', [1, Infinity], function (card, player, target) {
                var trigger = _status.event;
                if (trigger.targets.includes(target)) return false;
                return lib.filter.targetEnabled2(trigger.card, _status.event.player, target) && get.distance(player, target) <= 1;
              }).
              set('ai', function (target) {
                var trigger = _status.event.getTrigger();
                var player = _status.event.player;
                return get.effect(target, trigger.card, player, player);
              }).
              set('targets', trigger.targets).
              set('card', trigger.card);
            } else {
              if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
                event.goto(3);
              }
            }
            'step 1';
            if (result.bool) {
              event.targets = result.targets;
            } else {
              event.finish();
            }
            'step 2';
            if (event.targets) {
              game.log(event.targets, '额外成为了', trigger.card, '的目标');
              trigger.targets.addArray(event.targets);
            }
            event.finish();
            'step 3';
            player.
            chooseTarget('清侧:是否取消任意你与距离为一的角色' + get.translation(trigger.card) + '的目标？', [1, Infinity], function (card, player, target) {
              return _status.event.targets.includes(target) && get.distance(player, target) <= 1;
            }).
            set('ai', function (target) {
              var trigger = _status.event.getTrigger();
              return -get.effect(target, trigger.card, trigger.player, _status.event.player);
            }).
            set('targets', trigger.targets);
            'step 4';
            if (result.bool) {
              event.targets = result.targets;
              if (event.isMine()) {
                event.finish();
              }
              for (var i = 0; i < result.targets.length; i++) {
                trigger.targets.remove(result.targets[i]);
              }
            } else {
              event.finish();
            }
            'step 5';
          }
        },
        yttl_yinyuan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'gameStart',
            player: 'enterGame'
          },
          zhuSkill: true,
          popup: false,
          forced: true,
          filter(event, player) {
            return player.identity != 'zhu';
          },
          content() {
            player.removeSkill('yttl_yinyuan');
          },
          mod: {
            globalFrom(from, to, distance) {
              if (!from.hasZhuSkill('yttl_yinyuan')) return distance;
              var group = 'wu';
              if (lib.jy_changeSkill) group = 'jy_yuan';
              if (group != to.group) return distance;
              return -Infinity;
            }
          }
        },
        yttl_yaolu1: {
          enable: 'phaseUse',
          filter(event, player) {
            if (!player.countCards('he', { type: 'equip' })) return false;
            return game.hasPlayer(function (current) {
              return (
                current != player &&
                current.hasSkill('yttl_yaolu') &&
                player.countCards('he', function (card) {
                  return get.type(card) == 'equip' && current.hasEmptySlot(get.subtype(card));
                }) > 0);

            });
          },
          position: 'he',
          filterCard(card, player) {
            return get.type(card) == 'equip';
          },
          forced: true,
          clearTime: true,
          check(card) {
            var player = _status.event.player;
            if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
              return 11 - get.equipValue(card);
            }
            return 6 - get.value(card);
          },
          filterTarget(card, player, target) {
            if (target.isMin()) return false;
            return player != target && target.hasEmptySlot(get.subtype(card)) && target.hasSkill('yttl_yaolu');
          },
          content() {
            player.say('愿助将军成就大业!');
            target.equip(cards[0]);
            target.say('事成之日,定不会辜负诸位!');
            player.draw(2);
          },
          discard: false,
          prepare(cards, player, targets) {
            player.$give(cards, targets[0], false);
          },
          ai: {
            basic: { order: 10 },
            result: {
              player: 1,
              target(player, target) {
                var card = ui.selected.cards[0];
                if (card) return get.effect(target, card, target, target);
                return 3;
              }
            }
          }
        },
        yttl_yaolu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          global: 'yttl_yaolu1'
        },
        yttl_xingshi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCard2' },
          forced: true,
          filter(event, player) {
            if (get.type(event.card) != 'trick' && get.type(event.card) != 'basic') return false;
            var info = get.info(event.card);
            if (info.allowMultiple == false) return false;
            if (event.targets && !info.multitarget) {
              if (
              game.hasPlayer(function (current) {
                return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
              }))
              {
                return true;
              }
            }
            return false;
          },
          content() {
            'step 0';
            var next = player.chooseCardTarget({
              position: 'h',
              filterCard: lib.filter.cardDiscardable,
              filterTarget(card, player, target) {
                var trigger = _status.event.getTrigger();
                var player = _status.event.player;
                if (trigger.targets.includes(target)) return false;
                return lib.filter.targetEnabled2(trigger.card, player, target);
                return false;
              },
              ai1(card) {
                if (trigger.card.name == 'jiu') return -1;
                var value = get.value(card);
                if (lib.config.extension_金庸群侠传_jiexiantupo && (card.suit == 'heart' || trigger.card.suit == 'heart')) {
                  value -= 4;
                }
                return 4 - value;
              },
              ai2(target) {
                var trigger = _status.event.getTrigger();
                var player = _status.event.player;
                return get.effect(target, trigger.card, player, player);
              },
              prompt: get.prompt('yttl_xingshi'),
              prompt2: lib.translate.yttl_xingshi_info
            });
            'step 1';
            if (result.bool) {
              player.discard(result.cards);
              event.targets = result.targets;
              event.cardx = result.cards[0];
            } else {
              event.finish();
            }
            'step 2';
            if (event.targets) {
              if (trigger.cards.length && !trigger.card.isCard) {
                game.log(event.targets, '额外成为了', trigger.card, '(', trigger.cards, ')', '的目标');
              } else {
                game.log(event.targets, '额外成为了', trigger.card, '的目标');
              }
              trigger.targets.addArray(event.targets);
            }
            'step 3';
            if (lib.config.extension_金庸群侠传_jiexiantupo && (event.cardx.suit == 'heart' || trigger.card.suit == 'heart')) {
              player.
              chooseTarget('选择一个目标令其摸一张牌', function (card, target, player) {
                return true;
              }).
              set('ai', function (target) {
                return get.attitude(player, target) > 0;
              });
            } else {
              event.finish();
            }
            'step 4';
            if (result.bool) {
              player.line(result.targets[0]);
              result.targets[0].draw();
            }
          },
          ai: { threaten: 2 }
        },
        yttl_jieao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseJieshuBegin' },
          filter(event, player) {
            var targets = [];
            var history = player.getHistory('useCard');
            for (var i = 0; i < history.length; i++) {
              if (get.type(history[i].card) == 'trick' && history[i].targets && history[i].targets.length) targets.addArray(history[i].targets);
            }
            targets.remove(player);
            return targets.length;
          },
          content() {
            'step 0';
            var targets = [];
            var history = player.getHistory('useCard');
            for (var i = 0; i < history.length; i++) {
              if (get.type(history[i].card) == 'trick' && history[i].targets && history[i].targets.length) targets.addArray(history[i].targets);
            }
            targets.remove(player);
            event.num1 = targets.length;
            player.draw(event.num1);
            'step 1';
            if (event.num1 > 3) {
              if (!lib.config.extension_金庸群侠传_jiexiantupo) player.turnOver();
            }
            if (event.num1 >= 6) {
              player.$fullscreenpop('桀骜不驯', 'fire');
            }
          }
        },
        yttl_taiji: {
          mod: {
            aiValue(player, card, num) {
              var equip1 = player.getEquip(1);
              if (equip1 != card && equip1 && (equip1.name == 'zhangba' || equip1.name == 'jydiy_zhenwujian')) return num / 10;
              ////////////////////////////////////////
              if (card.name == 'zhangba') return 10;
              if (card.name == 'jydiy_zhenwujian') return 10;
              ////////////////////////////////////////
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          //audioname:["yttl_spsongyuanqiao","yttl_yinliting","yttl_zhangcuishan","ywhy_zhangjunbao"],
          audioname2: {
            //武将名:引用的技能配音
            //"yttl_zhangsanfeng":"yttl_taiji",
            yttl_spsongyuanqiao: 'yttl_syqtaiji',
            yttl_yinliting: 'yttl_lttaiji',
            yttl_zhangcuishan: 'yttl_cstaiji',
            ywhy_zhangjunbao: 'ywhy_taijizjb'
          },
          trigger: {
            player: 'loseAfter',
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter']
          },
          forced: true,
          filter(event, player) {
            if (!player.canUse({ name: 'wuzhong' }, player)) return false;
            if (player.countCards('h')) return false;
            var evt = event.getl(player);
            return evt && evt.player == player && evt.hs && evt.hs.length;
          },
          content() {
            player.useCard({ name: 'wuzhong' }, player);
          },
          ai: {
            threaten: 0.8,
            effect: {
              target(card, player, target, current) {
                //ai 快乐矛 ai快乐剑
                if (get.type(card) == 'equip' && get.subtype(card) == 'equip1') {
                  var equip1 = target.getEquip(1);
                  if (equip1 && (equip1.name == 'zhangba' || equip1.name == 'jydiy_zhenwujian')) return [0.1, -20];
                }
                if (card.name == 'zhangba' || card.name == 'jydiy_zhenwujian') return [1, 20];
                if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
              }
            },
            noh: true,
            taijiTag: true,
            taiJiBuff: true,
            nokeep: true,
            skillTagFilter(player, tag) {
              if (tag == 'taiJiBuff') {
                if (!player.canUse({ name: 'wuzhong' }, player)) return false;
              }
              if (tag == 'noh') {
                if (player.countCards('h') != 1) return false;
              }
            }
          }
        },
        yttl_chunyang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: ['chooseToUse', 'chooseToRespond'],
          filterCard: true,
          selectCard: 2,
          position: 'hs',
          viewAs: { name: 'sha' },
          complexCard: true,
          filter(event, player) {
            return player.countCards('hs') >= 2;
          },
          usable: 1,
          prompt: '将两张手牌当杀使用或打出',
          viewAsFilter(player) {
            return player.countCards('hs') >= 2;
          },
          checkx(card) {
            let player = _status.event.player;
            if (
            player.hasCard(function (card) {
              return card.name == 'sha';
            }))

            return 0;
            if (
            _status.event &&
            _status.event.name == 'chooseToRespond' &&
            player.hp < 3 &&
            !player.countCards('hs', function (card) {
              return card.name != 'tao' && card.name != 'jiu';
            }))

            return (player.hp > 1 ? 10 : 8) - get.value(card);
            return Math.max(5, 8 - 0.7 * player.hp) - get.value(card);
          },
          check(card) {
            var player = _status.event.player;
            var buff = player.hasSkillTag('taiJiBuff');
            if (buff && player.countCards('hs') == 2) return 12 - get.value(card);
            if (buff) return 10 - get.value(card);
            //if(card.name=='sha') return 0;
            return lib.skill.yttl_chunyang.checkx(card);
          },
          ai: {
            respondSha: true,
            skillTagFilter(player) {
              return player.countCards('hs') >= 2;
            }
          }
        },
        yttl_taoli: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'loseEnd' },
          zhuSkill: true,
          forced: true,
          filter(event, player) {
            var group = 'wu';
            if (lib.jy_changeSkill) group = 'jy_yuan';
            if (player.countCards('h') <= 0) return false;
            if (event.player.countCards('h') > 0) return false;
            if (event.player == player) return false;
            if (!player.hasZhuSkill('yttl_taoli')) return false;
            if (group != event.player.group) return false;
            return event.player.isIn();
          },
          content() {
            'step 0';
            player.chooseCard('是否交给' + get.translation(trigger.player) + '一张手牌？', 1).set('ai', function (card) {
              return get.attitude(_status.event.player, trigger.player) > 0 ? 1 : -1;
            });
            'step 1';
            if (result.bool) {
              //trigger.player.gain(result.cards,player,'giveAuto');
              player.give(result.cards, trigger.player, true);
              trigger.player.say(['多谢师父!', '徒儿定当铭记恩师教诲!'].randomGet());
            }
          }
        },
        yttl_fendao: {
          targetCardEffect(card, player, player2) {
            const sgn = get.sgnAttitude(player2, player);
            const value = get.sgn(get.equipValue(card, player));
            const color = get.color(card);
            if (player.isDamaged() && color == 'red') {
              return 2 - value + 0.9;
            }
            if (color == 'red') {
              return -value + 0.9;
            }
            if (color == 'black') {
              if (sgn > 0) return -value + 0.9 + 1;
              return -value + 0.9 - 1;
            }
            return 0;
          },
          ai: {
            threaten: 1.2,
            result: {
              //player:0.5,
              target(player, target) {
                //const bool=get.recoverEffect(target,player,player)>0;
                //const att=get.attitude(player,target);
                //const value = get.equipValue(card, target);
                const es = target.getCards('e', function (i) {
                  return target.canRecast(i);
                });
                const sgn = get.sgnAttitude(player, target);
                const effects = es.map((i) => lib.skill.yttl_fendao.targetCardEffect(i, target, player));
                return Math[sgn > 0 ? 'max' : 'min'](...effects);
              }
            },
            order: 10,
            expose: 0.6
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filterTarget(card, player, target) {
            return (
              target.countCards('e', function (i) {
                return target.canRecast(i);
              }) > 0);

          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            'step 0';
            player.
            choosePlayerCard('焚刀', 'e', target, true, 'visible').
            set('ai', function (button) {
              const card = button.link;
              const player = _status.event.player;
              const target = _status.event.target;
              const sgn = get.sgnAttitude(player, target);
              const value = get.sgn(get.equipValue(card, target));
              const color = get.color(card);
              if (target.isDamaged() && color == 'red') {
                return (2 - value + 0.9) * sgn;
              }
              if (color == 'red') {
                return (-value + 0.9) * sgn;
              }
              if (color == 'black') {
                return 1 + (-value + 0.9) * sgn;
              }
              return 0;
            }).
            set('filterButton', function (button) {
              const card = button.link;
              const target = _status.event.target;
              return target.canRecast(card);
            });
            'step 1';
            if (result.bool) {
              var chat = ['屠龙刀是我们的了,哈哈!', '武林至尊,宝刀屠龙.号令天下,莫敢不从!'].randomGet();
              player.say(chat);
            } else {
              event.finish();
              return;
            }
            'step 2';
            event.shovCards = result.cards;
            player.showCards(result.cards, get.translation(player) + '发动了【焚刀】');
            target.recast(result.cards);
            if (get.color(result.cards[0]) == 'red') {
              if (target.isDamaged()) target.recover();
              event.finish();
            } else {
            }
            'step 3';
            const gains = event.shovCards.filterInD('od');
            if (gains.length) player.gain(gains, 'gain2', 'log');
          }
        },
        yttl_kuiyu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCard' },
          forced: true,
          filter(event, player) {
            var type = get.type(event.card, 'trick');
            return type == 'equip';
          },
          content() {
            player.draw();
          },
          ai: {
            reverseEquip: true,
            effect: {
              target(card, player, target, current) {
                if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
              }
            }
          }
        },
        yttl_binzhang_new3: {
          trigger: {
            player: 'loseAfter',
            global: 'loseAsyncAfter'
          },
          filter(event, player) {
            if (event.type != 'discard' || event.getlx === false) return false;
            if (event.name == 'lose') {
              if (event.getParent(3).name == 'icesha_skill') return false;
            }
            var evt = event.getl(player);
            if (!evt || !evt.cards2) return false;
            return evt.cards2.some((i) => get.position(i) == 'd');
          },
          content() {
            var cards2 = trigger.getl(player).cards2;
            var list = cards2.filter((i) => get.position(i) == 'd').map((i) => i.suit);
            player.unmarkAuto('yttl_binzhang_new3', list);
            if (!player.getStorage('yttl_binzhang_new3').length) player.removeSkill('yttl_binzhang_new3');
          },
          mark: true,
          marktext: '冰',
          popup: false,
          nopop: true,
          forced: true,
          charlotte: true,
          mod: {
            cardEnabled(card, player) {
              if (player.getStorage('yttl_binzhang_new3').includes(card.suit)) return false;
            },
            cardSavable(card, player) {
              if (player.getStorage('yttl_binzhang_new3').includes(card.suit)) return false;
            }
          },
          intro: {
            name: '冰掌',
            name2: '冰掌',
            markcount(storage, player) {
              return player.getStorage('yttl_binzhang_new3').length;
            },
            content(storage, player) {
              return '不能使用:(' + get.translation(player.getStorage('yttl_binzhang_new3')) + ')的牌';
            }
          }
        },
        yttl_binzhang_new2: {
          trigger: {
            player: 'discardPlayerCardEnd'
          },
          audio: 'yttl_binzhang',
          forced: true,
          logTarget: 'target',
          filter(event, player) {
            if (event.parent.name != 'icesha_skill') return false;
            if (!event.result.bool) return false;
            return event.result.cards.some((i) => get.position(i, true) == 'd');
          },
          content() {
            var list = trigger.result.cards.filter((i) => get.position(i, true) == 'd').map((i) => i.suit);
            trigger.target.addSkill('yttl_binzhang_new3');
            player.getHistory('custom').push({ yttl_binzhang_new: true });
            trigger.target.markAuto('yttl_binzhang_new3', list);
          }
        },
        yttl_binzhang_new: {
          audio: 'yttl_binzhang',
          group: 'yttl_binzhang_new2',
          enable: ['chooseToRespond', 'chooseToUse'],
          filterCard(card, player) {
            return card.name == 'sha' && !get.nature(card);
          },
          position: 'hes',
          viewAs: {
            name: 'sha',
            nature: 'ice'
          },
          precontent() {
            player.getHistory('custom').push({ yttl_binzhang_new: true });
          },
          viewAsFilter(player) {
            if (
            !player.countCards('hes', function (card) {
              return card.name == 'sha' && !get.nature(card);
            }))

            return false;
          },
          prompt: '你可以将普通【杀】当冰【杀】使用.',
          check(card) {
            var val = get.value(card);
            if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
            return 5 - val;
          },
          ai: {
            skillTagFilter(player) {
              if (
              !player.countCards('hes', function (card) {
                return card.name == 'sha' && !get.nature(card);
              }))

              return false;
            },
            respondSha: true
          }
        },
        yttl_xuefu_new: {
          subSkill: {
            add: {
              mark: true,
              intro: {
                content: '手牌上限+1'
              },
              charlotte: true,
              mod: {
                maxHandcard(player, num) {
                  return num + 1;
                }
              }
            },
            lose: {
              charlotte: true,
              mark: true,
              intro: {
                content: '手牌上限-1'
              },
              mod: {
                maxHandcard(player, num) {
                  return num - 1;
                }
              }
            }
          },
          trigger: {
            player: 'phaseUseEnd'
          },
          forced: true,
          audio: 'yttl_xuefu',
          content() {
            'step 0';
            var bool =
            player.getHistory('custom', function (evt) {
              return evt.yttl_binzhang_new == true;
            }).length;
            if (bool) {
              player.
              chooseTarget('对一名角色造成一点寒冰伤害并且手牌上限-1', true, function (card, player, target) {
                return target != player;
              }).
              set('ai', function (target) {
                var player = _status.event.player;
                return get.damageEffect(target, player, player, 'ice');
              });
            } else {
              if (player.isDamaged()) player.recover();
              player.addTempSkill('yttl_xuefu_new_add');
              event.finish();
            }
            'step 1';
            if (result.bool) {
              player.line(result.targets, 'wood');
              player.addTempSkill('yttl_xuefu_new_lose');
              result.targets[0].damage(1, 'ice');
            }
          }
        }
      },
      translate: {
        //倚天屠龙mark
        yttl_aerasan: '阿二阿三',
        yttl_suigu: '碎骨',
        yttl_suigu_info: '当你使用【杀】指定目标时,你可选择一项:此杀造成伤害后废除目标一个装备栏;此杀造成伤害后弃置目标X张牌(X为其废弃装备栏数).<p>背水:你将一张【摧经断骨】置入自己判定区且此杀不能被抵消.',
        yttl_bigong: '逼供',
        yttl_bigong_info: '出牌阶段限一次,你可与一名其他角色谋弈:若你选择<施刑>而目标选择<宁死不屈>,你视为对其使用一张不计次数无视距离的【杀】;若你选择<利诱>而目标选择<虚与委蛇>,你观看目标手牌并获得其中不同颜色的牌各一张.',
        yttl_lengqian: '冷谦',
        yttl_xizi: '惜字',
        yttl_xizi2: '惜字',
        yttl_xizi2_info: '结束阶段,你可以随机获得任意张牌名字数之和等于X的牌(X为你本回合使用牌的牌名字数之和).',
        yttl_xizi_info: '<b>锁定技.</b>你于出牌阶段使用牌时,若你于本阶段使用的牌的牌名累计字数:未超过8,此牌不占用额定次数;已超过8,此牌结算完后,结束你的出牌阶段且跳过弃牌阶段.<p>结束阶段,你可随机获得任意张牌名字数之和等于X的牌(X为你本回合使用牌的牌名字数之和).',
        yttl_lengmian: '冷面',
        yttl_lengmian_info: '当你装备区里置入装备/失去装备区里的装备后,你可以令一名角色获得一张【金刚护体】/轻功【闪】.',
        yttl_lengmian2: '冷面',
        yttl_lengmian2_info: '当你装备区里置入装备/失去装备区里的装备后,你可以令一名角色获得一张【金刚护体】/轻功【闪】.',
        yttl_xuda: '徐达',
        yttl_zhenglu: '征虏',
        yttl_zhenglu_info: '<b>锁定技.</b>你于出牌阶段使用基本牌或普通锦囊牌时,此牌最多可以指定X名目标(X为你于本阶段使用的上一张基本牌或普通锦囊牌指定的目标数).',
        yttl_hulve: '虎略',
        yttl_hulve_info: '你使用基本牌或普通锦囊牌指定目标后,若此牌的实际目标数比此牌的默认目标数:大,你摸X张牌;小,此牌对目标额外结算X次(X为此牌实际目标数与默认目标数之差的绝对值).',
        yttl_chengzhi: '承志',
        yttl_chengzhi_info: '<b>锁定技.</b>若场上敌方角色数量比友方多2及以上,或场上存活角色数为2,你始终视为装备了【武穆遗书】.',
        yttl_jue_zhangwuji: '绝张无忌',
        yttl_tianni_new: '天逆',
        yttl_tianni_new_info: "每轮游戏开始时,你可以令除1号位外的所有其他角色座次号逆转.锁定技,若本轮场上所有角色的回合顺序为逆时针,则本轮你攻击范围和手牌上限+<span class='firetext'>1</span>;若本轮场上所有角色的回合顺序为顺时针,则本轮你摸牌阶段的摸牌数和出牌阶段使用【杀】的额定次数+<span class='firetext'>1</span>.",
        yttl_tianyu_new: '天愈',
        yttl_tianyu_new_info: '你可以将♠️️牌当【运功疗伤】使用;<b>锁定技,</b>你对使用的和你判定区里的【运功疗伤】判定X次(X为当前的轮次且至多为9).',
        yttl_tianyang_new: '天阳',
        yttl_tianyang_new_info: '当有角色判定后,若判定结果为♠️️,你可以选择令〖天逆〗中的一项红色数字+1(至多为9).',
        yttl_sp_weiyixiao: 'SP韦一笑',
        yttl_binzhang_new: '霜封',
        yttl_binzhang_new_info: '你可以将普通【杀】当冰【杀】使用.<b>锁定技.</b>当你因寒冰伤害弃置一名角色的牌时,目标无法使用你弃置的花色的牌(其下次弃置此花色的牌后解除封禁).',
        yttl_xuefu_new: '寒掌',
        yttl_xuefu_new_info: '<b>锁定技.</b>出牌阶段结束时,若你本阶段:未发动过〖霜封〗,你回复一点体力且本回合手牌上限+1;发动过〖霜封〗,你对一名角色造成一点寒冰伤害且本回合手牌上限-1.',
        yttl_binzhang_new2: '霜封',
        yttl_binzhang_new3: '霜封',
        yttl_shuobude: '说不得',
        yttl_xingnang: '行囊',
        yttl_xingnang_info: '你出场时,将牌堆前10张牌装入<乾坤一气袋>中.<b>锁定技,</b>你摸牌时,改为从<乾坤一气袋>中摸牌,且摸牌时其中牌数不足时,补至10张,其中最多只能有10张牌.<p>你造成伤害后,可以将场上至多两张牌装入<乾坤一气袋>中.<p>其他角色回合结束时,你可将其此回合内因失去进入弃牌堆中的一张牌装入<乾坤一气袋>中.',
        yttl_poxi: '破隙',
        yttl_poxi_info: '你进入濒死状态时,可任意分配当前<乾坤一气袋>中所有牌.',
        yttl_kongjian: '空见',
        yttl_tiequ: '铁躯',
        yttl_tiequ_info: '<b>锁定技.</b>其他角色/你使用的点数比你体力值大7及以上的伤害类卡牌对你无效/不能被抵消或响应.',
        yttl_shie: '释厄',
        yttl_shie_info: '<b>使命技.</b>出牌阶段,你可令一名其他角色亮出牌堆顶13张牌,按任意顺序对你使用其中的伤害牌.若你未因此濒死过,视为使命成功;否则你每依此法进入一次濒死状态,减1点体力上限,回复1点体力,且视为使命失败.<p>成功:〖释厄〗目标需选择失去其一项非锁定技并从少林技能库中选一个获得,你获得〖金刚〗.<P>失败:〖释厄〗目标获得〖七伤〗,你获得〖渡劫〗.',
        yttl_dujiekj: '渡劫',
        yttl_dujiekj_info: '<b>锁定技.</b>结束阶段开始时,你摸等同于你体力值数量的牌,若这些牌的点数和不大于13,你失去一点体力.',
        yttl_ruyangwang: '汝阳王',
        yttl_pingluan: '平乱',
        yttl_pingluan_info: '出牌阶段限一次,你可弃置每名敌方角色一张牌,因此失去最后一张牌的角色受到你一点伤害,你摸X张牌(X为此次失去装备牌的角色数).',
        yttl_weijiao: '围剿',
        yttl_weijiao_info: '每回合限一次,一名角色使用牌指定超过一名目标时,你可以将此牌改为【鞑虏入侵】.',
        yttl_yangdingtian: '阳顶天',
        yttl_kangyuan2: '抗元',
        yttl_kangyuan: '抗元',
        yttl_kangyuan_info: '洗牌后,将装备牌补满,摸五张牌.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一名角色使用的【鞑虏入侵】结算完后,你摸X张牌(X为打出杀来响应此牌的角色数).',
        yttl_mingzun: '明尊',
        yttl_mingzun_info: '<b>盟主技.</b>其他元势力角色造成X点伤害后,其可以将牌堆前10X张牌置入弃牌堆.',
        yttl_qianyi: '牵移',
        yttl_qianyi_info: '出牌阶段限一次,你可以交换牌堆和弃牌堆.',
        yttl_yulianzhou: '俞莲舟',
        yttl_juehu: '绝户',
        yttl_juehu_info: '出牌阶段各区域限一次,你可以弃置一名角色手牌区、装备区或判定区里数量唯一的牌.',
        yttl_rouquan: '柔拳',
        yttl_rouquan_info: '出牌阶段限一次,你可弃置你手牌中一种颜色的所有牌(至少1张).若如此做,你本回合使用另一种颜色的牌造成的伤害+1.',
        yttl_chuandao: '传道',
        yttl_chuandao_info: '<b>限定技.</b>出牌阶段,你令一名没有手牌且没有技能〖太极〗的角色获得之.',
        yttl_zhangsongxi: '张松溪',
        yttl_shien: '施恩',
        yttl_shien_info: '出牌阶段限一次,你可以将任意张黑色手牌交给一名其他角色.',
        yttl_yuanlv_backup: '远虑',
        yttl_yuanlv: '远虑',
        yttl_yuanlv_info: '出牌阶段限一次,若你手牌数量为一,你可以将此牌当任意普通锦囊牌使用.',
        yttl_spsongyuanqiao: 'sp宋远桥',
        yttl_yuanmeng: '援盟',
        yttl_yuanmeng_info: '每名角色的回合限一次,其他角色因弃置而失去牌时,你可以弃置等量的牌,将其失去的牌返回其手牌区.',
        yttl_zhujiuzhenwuqingying: '朱九真武青婴',
        yttl_zongquan: '纵犬',
        yttl_zongquan_info: '游戏开始时,你将牌堆顶一张牌当<犬>置于侠客牌上,出牌阶段限开始时,你可用一张手牌替换<犬>.当有角色的装备区里置入一张与<犬>花色相同的装备时,你可将此牌移至你的装备区里.',
        yttl_cuhai: '醋海',
        yttl_cuhai_info: '出牌阶段限一次,你可以观看一名其他角色的手牌,若其红色手牌比你多,你选择弃置其X张红色手牌或随机获得X张红色牌(X为你与其红色手牌数量差).',
        yttl_zhuchangling: '朱长龄',
        yttl_mouxian: '谋陷',
        yttl_mouxian_info: '回合结束时,你可以令一名其他角色下个回合摸牌阶段多摸一张牌且弃牌阶段手牌上限-1.',
        yttl_bixian: '匕见',
        yttl_bixian_info: '其他角色弃牌阶段结束时,若其弃置的牌数大于一,你可以选择获得其中一张牌,若你以此法获得的牌为♣️️牌,你横置其侠客牌.',
        yttl_fenzhuang: '焚庄',
        yttl_fenzhuang_info: '<b>限定技.</b>出牌阶段,你对自己造成1或2点火焰伤害,令所有其他角色选择:将装备区里的所有装备牌交给你(至少一张);或受到你的等量火焰伤害.',
        yttl_wujincao: '吴劲草',
        yttl_zhengqi: '整旗',
        yttl_zhengqi_info: '每轮游戏开始时,你可以弃置一张手牌 ,交换两名角色的回合顺序.',
        yttl_duanzhu: '锻铸',
        yttl_duanzhu_info: '其他角色的武器牌进入弃牌堆后,你可以将此牌 置于<军火库>里(最多5张).出牌阶段,你可以展示<军火库>里的两张武器,令其中一张视为拥有另一张的技能,将此牌置入一名角色的装备区里(此牌离开其装备区后失去此技能).',
        yttl_duanzhu2: '锻铸',
        yttl_duanzhu2_info: '其他角色的武器牌进入弃牌堆后,你可以将此牌 置于<军火库>里(最多5张).出牌阶段,你可以展示<军火库>里的两张武器,令其中一张视为拥有另一张的技能,将此牌置入一名角色的装备区里(此牌离开其装备区后失去此技能).',
        yttl_yintianzheng: '殷天正',
        yttl_yingxi: '鹰袭',
        yttl_yingxi_info: '<b>锁定技.</b>你的攻击范围+2.你使用【杀】指定目标后,你可以观看目标的手牌,弃置其区域内任意张点数之和不大于此杀点数的牌.',
        yttl_yiyuan: '义援',
        yttl_yiyuan_info: '其他角色出牌阶段开始时,你可交给其一张装备牌,其可将手牌中点数最大的【杀】交给你.',
        yttl_songyuanqiao: '宋远桥',
        yttl_shameng: '歃盟',
        yttl_shameng_info: '出牌阶段开始时,你可以与一名其他角色交换所有手牌,若如此做,回合结束时,你与其交换所有手牌.',
        yttl_zhengyuan: '征援',
        yttl_zhengyuan_info: '摸牌阶段开始时,你可以放弃摸牌,令至多2名其他角色各摸1张牌.',
        yttl_zhengyuan_old_info: '出牌阶段限一次,你可以弃置两张手牌令至多两名其他角色各摸一张牌.',
        yttl_huqingniu: '界胡青牛',
        yttl_huitian_old: '回天',
        yttl_huitian_old_info: '出牌阶段限一次,你与一名手牌数或体力值与你相等的角色拼点,若你赢,你令其攻击范围内的一名角色回复一点体力.',
        yttl_bianjiu_old_wuxie: '砭灸金刚',
        yttl_bianjiu_old_wuxie_info: '',
        yttl_bianjiu_old: '砭灸',
        yttl_bianjiu_old_info: '一名角色拼点后,你可以令其获得一枚<灸>标记.一名角色可以在合适的时机移除其一枚<灸>,视为使用一张【金刚护体】.',
        yttl_huitian: '回天',
        yttl_huitian_info: '出牌阶段限一次,你可以与一名其他角色拼点,若你赢,你令一名角色回复1点体力,若回复体力的角色:为明教中人(即帮派技拥有<波斯明教>或<中土明教>),改为回复2点体力;不为明教中人,你摸2张牌.',
        yttl_bianjiu_wuxie: '砭灸金刚',
        yttl_bianjiu_wuxie_info: '',
        yttl_bianjiu: '砭灸',
        yttl_bianjiu_info: '一名角色拼点后,你可以令其获得一枚<灸>标记.一名角色可以在合适的时机移除其一枚<灸>,视为使用一张【金刚护体】;一名角色进入濒死状态时,其可以移除一枚<炙>,视为使用一张【九花玉露丸】(每名角色每局只能依此法使用一次【九花玉露丸】).',
        yttl_jixiaofu: lib.config.extension_金庸群侠传_jiexiantupo ? '界纪晓芙' : '纪晓芙',
        yttl_sishou: '私授',
        yttl_sishou_info: '出牌阶段限一次,你可以与一名其他角色拼点,拼点赢的角色依次展示牌堆顶牌,直到展示的牌点数不小于其拼点的牌点数为止,其获得展示的牌.',
        yttl_sishou2: '私授',
        yttl_sishou2_info: '出牌阶段限一次,你可以将任意张锦囊牌交给一名其他角色,你摸等量牌(若其中有♥️️牌,改为摸双倍数量的牌).',
        yttl_buyu: '不渝',
        yttl_buyu_info: '一名角色拼点时,你可以令其展示一张手牌,此牌的点数和其拼点牌的点数之和,视为其拼点的点数(最大为13).',
        yttl_buyu2: '不渝',
        yttl_buyu2_info: '<b>锁定技.</b>当你成为伤害类普通锦囊牌的目标时,若你本局游戏未使用过此牌,则此牌对你无效.',
        yttl_yudaiyan: '俞岱岩',
        yttl_zhukou: '诛寇',
        yttl_zhukou_info: '其他角色弃置另一名角色区域的牌时,你可以弃置一张手牌,视为对其使用了一张【杀】.',
        yttl_zhuizei: '追贼',
        yttl_zhuizei_info: '一名其他角色获得另一名角色区域的牌前,你可以与其拼点,若你赢则取消之.',
        yttl_yuanzhen: '圆真',
        yttl_zhawang: '诈亡',
        yttl_zhawang_info: '其他角色的出牌阶段开始时,你可以失去你所有体力,其跳过出牌阶段;你进入濒死状态时,你可以弃置任意名不同势力的角色各一张牌.',
        yttl_celuan: '策乱',
        yttl_celuan_info: '出牌阶段限一次,若你有牌,你可以选择一名其他角色并交给其一张手牌,称为<逆党>牌,选择任意名与其势力不同的角色各一名,这些角色轮流弃置其一张手牌,直到逆党牌被弃置为止,弃置<逆党>牌的角色回复一点体力.',
        yttl_zhaomin: '赵敏',
        yttl_youzhu: '诱诛',
        yttl_youzhu_info: '每轮限一次,一名角色回合结束时,你可以令其弃置由你选择的另一名角色一张牌,若其失去最后的手牌或装备区的牌,其对当前回合角色造成一点伤害.',
        yttl_cifeng: '赐封',
        yttl_cifeng_info: '一名角色的回合结束时,若此回合场上角色造成的伤害总和不小于两点,则你可以选择一项:你摸X张牌(X为造成伤害的角色数),或你与造成伤害的角色各摸一张牌.',
        yttl_guoxiang: '郭襄',
        yttl_bianxun: '遍寻',
        yttl_bianxun_info: '你的回合外,其他角色使用牌后.你可以弃置一张与此牌牌名相同的手牌并摸两张牌.',
        yttl_changyi: '长忆',
        yttl_changyi_info: '游戏开始时,你选择一名男性角色,你/该角色使用造成伤害后,可将此牌交给该角色/你.',
        yttl_daoyin: '道隐',
        yttl_daoyin_info: '<b>觉醒技,</b>准备阶段,若你手牌不包含你上回合结束时的手牌,则你减一点体力上限,失去〖遍寻〗,获得〖立宗〗和〖出鞘〗 .',
        yttl_lizong: '立宗',
        yttl_lizong2: '立宗',
        yttl_lizong_info: '<b>锁定技.</b>你于回合内使用牌无数次数和距离限制,回合结束时,你摸X张牌(X为你本回合内对其他角色造成伤害的角色数量).',
        yttl_jueyuandashi: '觉远大师',
        yttl_cangjing: '藏经',
        yttl_cangjing_info: '每当你体力值变化时你随机获得一张锦囊牌.',
        yttl_kuangyi: '狂呓',
        yttl_kuangyi_info: '<b>限定技.</b>你进入濒死状态时,你可以令至多三名角色各获以下一项技能.<br><br><b>烈阳:</b>你使用与武器牌颜色相同的【杀】时,你可以令此【杀】不可闪避.<br><br><b>博阳:</b>每当你使用一张装备牌时,你可以获得一张【杀】.<br><br><b>真阳:</b>其他角色使用武器牌后,你可以对其使用一张【杀】.',
        yttl_boyang: '博阳',
        yttl_boyang_info: '每当你使用一张装备牌时,你可以获得一张【杀】.',
        yttl_zhenyang: '真阳',
        yttl_zhenyang_info: '其他角色使用武器牌后,你可以对其使用一张【杀】.',
        yttl_lieyang: '烈阳',
        yttl_lieyang_info: '你使用与武器牌颜色相同的【杀】时,你可以令此【杀】不可闪避.',
        yttl_hudu: '护犊',
        yttl_hudu_info: '回合结束时,你可以失去一点体力,并选择至多两名其他角色.直到你下个回合开始,防止其首次受到的伤害.',
        yttl_xiaozhao: '界小昭',
        yttl_lianxiang_old: '怜香',
        yttl_lianxiang_old_info: '<b>锁定技,</b>当其他玩家使用【杀】指定你为目标时,需额外弃掉一张牌,否则此【杀】对你无效.',
        yttl_lianxiang3: '怜香',
        yttl_lianxiang2: '怜香',
        yttl_lianxiang: '怜香',
        yttl_lianxiang_info: '<b>锁定技,</b>当其他玩家使用【杀】指定你为目标时,需额外弃掉一张牌,否则此【杀】对你无效.<p><b>锁定技,</b>你的回合开始时,若你未横置,你横置;其他角色的出牌阶段,若你处于横置中,其可以弃置一张武器牌,令你解除横置状态.<p>当有角色令你解除横置状态后,你可以摸3张牌且可以将其中任意张牌交给该角色.',
        yttl_lianxiang2_info: '<b>锁定技,</b>当其他玩家使用【杀】指定你为目标时,需额外弃掉一张牌,否则此【杀】对你无效.<p><b>锁定技,</b>你的回合开始时,若你未横置,你横置;其他角色的出牌阶段,若你处于横置中,其可以弃置一张武器牌,令你解除横置状态.<p>当有角色令你解除横置状态后,你可以摸3张牌且可以将其中任意张牌交给该角色.',
        yttl_lianxiang3_info: '<b>锁定技,</b>当其他玩家使用【杀】指定你为目标时,需额外弃掉一张牌,否则此【杀】对你无效.<p><b>锁定技,</b>你的回合开始时,若你未横置,你横置;其他角色的出牌阶段,若你处于横置中,其可以弃置一张武器牌,令你解除横置状态.<p>当有角色令你解除横置状态后,你可以摸3张牌且可以将其中任意张牌交给该角色.',
        yttl_yibi: '义婢',
        yttl_yibi_info: '出牌阶段,你可以将任意张【杀】牌送给一名男性角色,每名角色限一次,其使用的这些【杀】不计入出【杀】次数,其每使用这些【杀】造成一次伤害,你摸一张牌.',
        yttl_yibi1: '义婢',
        yttl_yibi1_info: '',
        yttl_weiyixiao: '韦一笑',
        yttl_binzhang: '冰掌',
        yttl_binzhang_info: '你使用【杀】造成伤害后,你可以令目标于本局游戏不能使用或打出一种花色的非装备牌(对每名角色限一次,每种花色限一次).',
        yttl_zhuiyun: '追云',
        yttl_zhuiyun_info: '<b>锁定技.</b>你计算与其他角色的距离-1.',
        yttl_xuefu: '血蝠',
        yttl_xuefu_info: '<b>锁定技.</b>若你于本回合使用过九花玉露丸,你本回合手牌上限+1;若你于本回合未使用过九花玉露丸桃,你本回合手牌上限-1.',
        yttl_yinyewang: '界殷野王',
        yttl_spxuanmingerlao: 'sp玄冥二老',
        yttl_xiexun: '谢逊',
        yttl_feiding_old: '飞钉',
        yttl_feiding_old_info: '你的回合外,你可以将一张♦️️手牌当<七星钉>使用.',
        yttl_feiding_old_old_info: '一名其他角色的结束阶段开始时,若该角色在你的攻击范围内并且装备了武器牌,你可以对其使用一张【杀】.若其受到伤害,你获得其武器牌.',
        yttl_feiding: '飞钉',
        yttl_feiding_info: '你可以将♦️️牌当【七星钉】使用;锁定技,若你使用【七星钉】指定的目标:选择受到你的伤害,此伤害+1;选择交给你装备牌,你摸一张牌;<b>锁定技,</b>你不能成为【七星钉】的目标.',
        yttl_yangwei: '扬刀',
        yttl_yangwei_info: '你出场时,将【伏龙屠狮刀】(♠️️K)洗入牌堆;你的装备区里置入【屠龙刀】或【伏龙屠狮刀】后,回复一点体力并摸两张牌;你使用【杀】造成伤害后,若你装备了上述两张武器之一,目标下个回合手牌上限-2.',
        yttl_yangwei_old: '扬刀',
        yttl_yangwei_old_info: '<b>限定技.</b>出牌阶段,你可以弃置一张武器牌,废除一名有武器栏的其他角色的武器栏.',
        yttl_xuanyin_old: '玄阴',
        yttl_xuanyin_old_info: '你造成伤害后,你可以废除目标的一个装备栏,被你废除装备栏的角色于同一回合内使用第三张同名牌时,其可以回复一个被你废除的装备栏.',
        yttl_xuanyin_old1: '玄阴',
        yttl_xuanyin_old1_info: '',
        yttl_mingjiang_old: '名缰',
        yttl_mingjiang_old_info: '出牌阶段限一次,你可以回复一名角色的一个装备栏并摸2张牌,且你依此法获得的牌,于本回合内不能指定该角色为目标.',
        yttl_xuanyin: '玄阴',
        yttl_xuanyin_info: '你造成伤害后,你可以废除目标的一X个装备栏(X为伤害数),目标累计使用三张同名的牌后,其可以复一个被你废除的装备栏,你摸3张牌.',
        yttl_xuanyin1: '玄阴',
        yttl_xuanyin1_info: '你造成伤害后,你可以废除目标的一X个装备栏(X为伤害数),目标累计使用三张同名的牌后,其可以复一个被你废除的装备栏,你摸3张牌.',
        yttl_mingjiang: '名缰',
        yttl_mingjiang_info: '你使用【鞑虏入侵】、【漫天花雨】(【南蛮入侵】【万箭齐发】)时,可以摸X张牌(X为其中汉人角色数).',
        yttl_shihou: '狮吼',
        yttl_shihou_info: '<b>锁定技,</b>你使用【杀】时,目标只能使用点数大于此杀的【闪】来抵消之.',
        yttl_wudao: '悟刀',
        yttl_wudao_info: '游戏开始时,你需声明一张武器牌的牌名.<b>锁定技,</b>你装备区里的武器牌技能无效且视为你声明的武器牌的技能.',
        yttl_yinsusu: '殷素素',
        yttl_congshan_new: '从善',
        yttl_congshan_new2: '从善',
        yttl_congshan_new_info: '<b>转换技.</b>出牌阶段限一次,阴:你可以获得一名其他角色任意张手牌.阳:你可以交给一名其他角色任意张手牌(每轮次发动阴阳技能时的牌数应相等).',
        yttl_congshan_new2_info: '<b>转换技.</b>出牌阶段限一次,阴:你可以获得一名其他角色任意张手牌.阳:你可以交给一名其他角色任意张手牌(每轮次发动阴阳技能时的牌数应相等).',
        yttl_congshan: '从善',
        yttl_congshan_info: '<b>转换技.</b>出牌阶段限一次,①你可以获得一名其他角色一张手牌.②你可以交给一名其他角色一张手牌.',
        yttl_tuobiao: '托镖',
        //"yttl_tuobiao_old_info":"弃牌阶段结束时,你可将你弃置的一张牌交给一名其他角色,称为'镖'.若如此做,其下个回合准备阶段,你获得其一张手牌并展示之.若你未于此阶段获得过'镖'(包括对方没牌的情况),你对其造成一点伤害",
        yttl_tuobiao1: '托镖',
        yttl_tuobiao_info: '你的回合结束时,你可以摸一张牌,若你有手牌,你须将一张手牌当<镖>交给一名其他角色.若如此做,其下个回合开始时,你获得其一张手牌并展示之,若你未于此阶段获得<镖>,你对其造成1点伤害.',
        yttl_tuobiao1_info: '',
        yttl_yangbuhui: '杨不悔',
        yttl_jiandie: '鹣鲽',
        yttl_jiandie_info: '每回限一次,每当你失去牌时,你可以令一名其他角色弃置等量的牌(不足全弃,无牌不弃),其摸等量的牌.',
        yttl_biyi: '比翼',
        yttl_biyi_info: '你的回合结束时,你可以令本回合失去过牌的角色各摸1张牌.',
        yttl_spyangdingtian: 'sp阳顶天',
        yttl_yixing: '移形',
        yttl_yixing_info: '每轮限一次,一名角色回合开始时,你可以弃置一张牌,移动场上一张牌.',
        yttl_qiangmei: '强媒',
        yttl_qiangmei_info: '出牌阶段限一次,你可以获得任意名女性角色各一张手牌,若其没有<媒>标记,其获得一枚此标记.当一名有<媒>的女性角色获得其他男性角色的牌时,其可以对你造成1点伤害.',
        yttl_chenyouliang: '陈友谅',
        yttl_cefan: '策反',
        yttl_cefan_info: '其他角色出牌阶段开始时,你可以令其对其攻击范围内由你选择的一名角色使用一张不计入出【杀】次数的杀并摸一张牌.',
        yttl_dongyi: '恫疑',
        yttl_dongyi_info: '每当其他玩家使用【杀】指定你为目标时,你可以展示牌堆顶一张牌并置入弃牌堆.若展示的牌为【杀】,则其使用的【杀】对你无效.',
        yttl_zhouzhiruo: '周芷若',
        yttl_yaren: '哑忍',
        yttl_yaren_info: '你使用的牌被使用牌抵消或其他角色对你使用的牌被你使用牌抵消,则你可以将牌堆顶的一张牌置于你的侠客牌上,称为<忍>.你的手牌上限和攻击范围)+X(X为你的<忍>的数量).',
        yttl_zhangquan: '掌权',
        yttl_zhangquan_info: '<b>觉醒技,</b>当你<忍>的数量不小于3时,你须减少一点体力上限,回复一点体力,摸两张牌,获得技能〖伐异〗.',
        yttl_fayi: '伐异',
        yttl_fayi_info: '当一名其他角色回合开始时,你可以弃置一张<忍>,令当前回合角色本回合摸牌阶段摸牌数量-1且手牌上限-1.摸牌阶段开始时,你可以移除一枚<忍>令你此回合摸牌阶段多摸一张牌、出牌阶段可以额外使用一张【杀】.',
        yttl_fayi2: '伐异',
        yttl_fayi3: '伐异',
        yttl_fayi4: '伐异',
        yttl_fayi2_info: '本回合你的摸牌阶段摸牌数量－1且手牌上限-1',
        yttl_hanqianye: '韩千叶',
        yttl_gudan: '孤胆',
        yttl_gudan_info: '你使用【杀】可以多选择一名角色为目标,若如此做,若此牌没有造成伤害,你需弃置一张牌或者令此牌的目标摸一张牌.',
        yttl_qiyuan: '奇缘',
        yttl_qiyuan_info: '你获得一张♣️️牌后,你可以展示之,你摸一张牌.',
        yttl_yinshi: '隐世',
        yttl_yinshi_info: '<b>锁定技,</b>你不能成为或被指定拼点的目标,每当一名角色于回合内亮出拼点牌后,其本回合不能使用牌指定你为目标.',
        yttl_spzhouzhiruo: 'sp周芷若',
        yttl_juejue: '决绝',
        yttl_juejue_info: '出牌阶段限一次,你可以和一名其他角色交换装备区一张同类型的装备牌.<b>锁定技,</b>其他角色/你获得你/其他角色的牌时,弃置该牌.',
        yttl_duanren: '断刃',
        yttl_duanren_info: '每当你失去装备区里的一张装备牌,若此牌为红色你可以摸两张牌,若为黑色你可以对一名其他角色造成一点伤害.',
        yttl_zhangwuji: lib.config.extension_金庸群侠传_jiexiantupo ? '界张无忌' : '张无忌',
        yttl_nijue_e: '逆绝装备',
        yttl_nijue_j: '逆绝判定',
        //////////
        yttl_nijue: '逆绝',
        yttl_nijue_backup: '逆绝',
        yttl_nijue_info: '出牌阶段限每项限一次,你可以选择两名角色,交换其装备区或判定区里的所有的牌.',
        ////////////
        yttl_nijue_two: '逆绝',
        yttl_nijue_two_info: '出牌阶段限每项限一次,你可以弃置一张黑色手牌并选择两名角色,交换其装备区或判定区里的所有的牌.',
        yttl_jiuyang: '九阳',
        yttl_jiuyang_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '其他角色的装备区置入武器牌后,若其攻击范围因此增加,则你可以对其使用至多X张【杀】(X为其增加的攻击范围数).<p>每当你的装备区置入一张装备后,你获得一张点数为9的牌.';
          return '其他角色的装备区置入武器牌后,若其攻击范围因此增加,则你可以对其使用至多X张杀(X为其增加的攻击范围数).';
        }(),
        //"yttl_jiuyang_info":"其他角色的装备区置入武器牌后,若其攻击范围因此增加,则你可以对其使用至多X张杀(X为其增加的攻击范围数).",
        yttl_chuqiao: '楚翘',
        yttl_chuqiao_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b>其他元势力角色使用的【杀】被抵消后,其可以将此【杀】交给你.';
          return '<b>盟主技.</b>其他吴势力角色使用的【杀】被抵消后,其可以将此【杀】交给你.';
        }(),
        //"yttl_chuqiao_info":"<b>盟主技.</b>其他XXX势力角色使用的杀被抵消后,其可以将此杀交给你.",
        yttl_zhangcuishan: '张翠山',
        yttl_taiji: '太极',
        yttl_taiji_info: '每当你失去最后的手牌后,你可以视为使用一张【无极而生】.',
        yttl_yinjiu_old: '引咎',
        yttl_yinjiu_old_info: '回合开始时,你可以将所有手牌交给一名你未以此法选择过的角色,其可以交给你任意张牌.<b>锁定技,</b>当你受到普通锦囊牌的伤害时,若你对来源发动过<引咎>,则防止此伤害.',
        yttl_yinjiu: '引咎',
        yttl_yinjiu2: '引咎',
        yttl_yinjiu_info: '岀牌阶段限一次,你可以将所有手牌交给一名其他角色,其可以交给你任意张牌.<b>锁定技,</b>当你受到普通锦囊牌的伤害时,若你对来源发动过〖引咎〗,则防止此伤害.',
        yttl_songqingshu: '宋青书',
        yttl_jixian_old: '嫉贤',
        yttl_jixian_old_info: '转换技.①一名其他角色获得至少两张牌后,你可以摸等量的牌.②一名其他角色失去至少两张牌后,你可以弃置等量的牌.',
        yttl_nishi_old: '逆施',
        yttl_nishi_old_info: '出牌阶段,你可以选择一名其他角色,选择一项:交给其两张手牌,获得其装备区里的一张牌;或将一张装备牌置于其装备区并获得其两张手牌(不足则全获得).',
        yttl_jixian: '嫉贤',
        yttl_jixian_info: '转换技.阴:其他角色一次获得X(至少为2)张牌后,你可以摸X+1张牌.阳:其他角色一次失去X(至少为2)张牌后,你可以弃置至少X张牌(若你弃牌数比其多,你对其造成1点伤害).',
        yttl_nishi: '逆施',
        yttl_nishi_info: '出牌阶段限一次, 你可以选择一项:交给一名其他角色两张手牌,获得其装备区里一张装备牌;或 将一张装备牌置入一名其他角色装备区里,你获得其两张手牌(不足则补摸至2张).',
        yttl_daiqisi: '黛绮丝',
        yttl_miling: '密令',
        yttl_miling_info: '<b>限定技.</b>出牌阶段,你可以选择一名其他角色,每当其使用或打出♣️️牌时,你摸2张牌.若其未于回合内使用或打出过♣️️牌,其回合结束时,你可以弃置其两张牌.该角色死亡后,你重置此技能.',
        yttl_yixin: '异心',
        yttl_yixin_info: '出牌阶段限一次,你可以弃置一张♣️️牌,移动场上一张牌.',
        yttl_miejue: '灭绝师太',
        yttl_huiqiao: '回鞘',
        yttl_huiqiao_info: '其他角色的武器牌进入弃牌堆时,你可以将此牌置入一名角色的装备区里(不能替换原武器牌).',
        yttl_jie: '嫉恶',
        yttl_jie_info: '当有角色进入濒死状态时,若有伤害来源,你可以弃置伤害来源所有区域各一张牌,若依此法弃置的牌包含两种颜色,则濒死角色回复1点体力.',
        yttl_zhangjian: '仗剑',
        yttl_zhangjian_info: '当你使用【杀】指定目标后,若你装备区里有武器牌,你可以摸1张牌.',
        yttl_luhe: '玄冥二老',
        yttl_xuanming: '玄冥',
        yttl_xuanming_info: '<b>锁定技.</b>你使用【杀】时,若此杀有点数,则目标只能用点数为奇/偶数【闪】响应你点数为奇/偶数【杀】.',
        yttl_hanyin: '酣淫',
        yttl_hanyin_info: '出牌阶段开始时,你可以亮出牌堆顶2张牌,将其中一张黑色牌当【酒】使用或获得其中一张【无极而生】并将其余牌置入弃牌堆.若你以此法使用了牌或获得了牌,你本回合不能使用与此牌颜色不同的牌.',
        yttl_xuanming2: '玄冥',
        yttl_xuanming2_info: '<b>锁定技.</b>你使用【杀】时,若此杀有点数,则目标只能用点数为奇/偶数【闪】响应你点数为奇/偶数【杀】;你造成的非属性伤害,均视为寒冰属性伤害.',
        yttl_hanyin2: '酣淫',
        yttl_hanyin2_info: '出牌阶段开始时,你可以亮出牌堆顶2张牌,将其中一张黑色牌当【酒】使用或将其中一张红色牌当【无极而生】使用(你依此法使用【无极而生】时可以令一名女性角色成为额外目标).',
        yttl_wudang: '武当派',
        yttl_mingjiao: '明教',
        yttl_emei: '峨眉派',
        yttl_tianyingjiao: '天鹰教',
        yttl_gaibang: '丐帮',
        yttl_shaolin: '少林',
        yttl_bosi: '波斯明教',
        yttl_yuanshi: '元室',
        yttl_hongmei: '红梅山庄',
        yttl_longmen: '龙门镖局',
        yttl_jueshi: '绝世高手',
        yttl_xiake: '江湖侠客',
        yttl_yinliting: '殷梨亭',
        yttl_channuo_old: '孱懦',
        yttl_channuo_old_info: '每当你受到黑色杀造成的伤害时,你可以交给伤害来源一张手牌,此伤害-1.',
        yttl_channuo: '孱懦',
        yttl_channuo_info: '每当你受到黑色杀造成的伤害时,你可以交给伤害来源一张手牌,此伤害-1.',
        yttl_tongshou: '同寿',
        yttl_tongshou_info: '<b>觉醒技.</b>准备阶段开始时,若你没有手牌,你须减1点体力上限,回复一点体力,将〖孱懦〗中的<交给伤害来源一张手牌>改为<弃置一张手牌>,并获得〖太极〗.',
        yttl_tongshou_old: '同寿',
        yttl_tongshou_old_info: '<b>觉醒技.</b>准备阶段开始时,若你没有手牌,你须减1点体力上限,并获得〖太极〗.',
        yttl_changyuchun: '界常遇春',
        yttl_xiaoyong: '骁勇',
        yttl_xiaoyong_info: '出牌阶段限一次,你可以将一张锦囊牌当【杀】使用,且此【杀】不计入回合内次数.',
        yttl_xianfeng: '先锋',
        yttl_xianfeng_info: '<b>锁定技.</b>准备阶段,你执行一个额外的出牌阶段.',
        yttl_xiaoyong_new: '骁勇',
        yttl_xiaoyong_new_info: '出牌阶段限一次,你可以将一张非基本牌当不计次数的【杀】使用.',
        yttl_xianfeng_new: '先锋',
        yttl_xianfeng_new_info: '<b>锁定技.</b>准备阶段,你执行一个额外的出牌阶段.你的摸牌阶段摸牌数+X(X为你本回合造成的伤害值).',
        yttl_xie_weiyixiao: '邪韦一笑',
        yttl_meiying: '魅影',
        yttl_meiying_info: '<b>锁定技.</b>你使用【杀】/成为【杀】的目标时,目标/来源获得一张【影】.每轮开始时,你令至多两名其他角色各获得一张【影】.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他角色失去【影】牌后,你可以选择一项:当前回合结束时,你与其交换座次(此项每回合限选一次);消耗1点蓄力值,令其失去1点体力、你回复1点体力.',
        yttl_hanmai: '寒脉',
        yttl_hanmai_info: '<b>蓄力技(3/5).</b>你的座次变化后,获得2点蓄力值.当你的蓄力值达到5点时,你清空所有蓄力值、摸5张牌、受到3点无来源寒冰伤害.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出牌阶段,你可以减少2点蓄力值,令一名角色手牌中的【影】翻倍.',
        yttl_changbaoshu: '常胜宝树王',
        yttl_lingjianwuqi: '令箭武器',
        yttl_qizhao: '奇招',
        yttl_qizhao_info: '你可以将一张与你装备区里的武器牌颜色相同牌当【杀】使用.',
        yttl_lingjian: '令箭',
        yttl_lingjian_info: '<b>限定技.</b>一名角色出牌阶段开始时,若其没有装备武器牌,你可以令其摸2张牌,你弃一张牌,你声明一张武器牌,令其装备之,其回合结束或死亡时,销毁该武器牌.',
        yttl_jinhuapopo: '金花婆婆',
        yttl_jinhua: '金花',
        yttl_jinhua_info: '回合开始时,若你没有<金花>,你获得7枚此标记.<p>回合结束时,你可以移除一枚<金花>并获得一张暗器牌.<p>其他角色对你使用牌时,若此牌点数小于你的<金花>数,此牌对你无效.<p>你的拼点牌亮出时,你可以移除至多X枚<金花>,令拼点牌点数加X(X为13与你拼点牌点数之差).',
        yttl_jinhua3: '金花',
        yttl_jinhua3_info: '回合开始时,若你没有<金花>,你获得7枚此标记.<p>回合结束时,你可以移除一枚<金花>并获得一张暗器牌.<p>其他角色对你使用牌时,若此牌点数小于你的<金花>数,此牌对你无效.<p>你的拼点牌亮出时,你可以移除至多X枚<金花>,令拼点牌点数加X(X为13与你拼点牌点数之差).',
        yttl_jinhua2: '金花',
        yttl_jinhua2_info: '回合开始时,若你没有<金花>,你获得7枚此标记.<p>回合结束时,你可以移除一枚<金花>并获得一张暗器牌.<p>其他角色对你使用牌时,若此牌点数小于你的<金花>数,此牌对你无效.<p>你的拼点牌亮出时,你可以移除至多X枚<金花>,令拼点牌点数加X(X为13与你拼点牌点数之差).',
        yttl_jinhua4: '金花',
        yttl_jinhua4_info: '回合开始时,若你没有<金花>,你获得7枚此标记.<p>回合结束时,你可以移除一枚<金花>并获得一张暗器牌.<p>其他角色对你使用牌时,若此牌点数小于你的<金花>数,此牌对你无效.<p>你的拼点牌亮出时,你可以移除至多X枚<金花>,令拼点牌点数加X(X为13与你拼点牌点数之差).',
        yttl_hanji: '寒疾',
        yttl_hanji_info: '<b>锁定技.</b>你不能成为其他角色点数小于6的牌的目标;你不能使用点数大于11的牌指定其他角色为目标',
        yttl_jiedao_old2: '借刀',
        yttl_jiedao_old2_info: '你可将你的任意一张♣️️手牌当【借剑杀人】使用.',
        yttl_jiedao_old: '借刀',
        yttl_jiedao_old_info: '出牌阶段开始时,你可以与一名其他角色拼点.若你赢,你可以于此回合内将♣️️牌当【借剑杀人】使用;若你未赢,你须弃置你装备区里的武器牌.',
        yttl_jiedao: '借刀',
        yttl_jiedao_info: '出牌阶段,若其他角色装备了武器,你可以与一名其他角色拼点.若你赢,你可以将你的拼点当【借剑杀人】使用.',
        yttl_yinli: '殷离',
        yttl_chuxin: '初心',
        yttl_chuxin_info: '<b>锁定技.</b>与你于本局游戏使用或打出第一张牌花色相同的手牌,不占用你的手牌上限.且你在本局游戏中使用此花色的牌后摸一张牌',
        yttl_maodu: '蝥毒',
        yttl_maodu_info: '每当你受到或造成1点属性伤害后,你加1点体力上限.出牌阶段限一次,你可以减2点体力上限,选择一项:令一名体力上限大于你的角色失去一点体力;或摸4张牌.',
        yttl_due: '渡厄',
        yttl_jingang: '金刚',
        yttl_jingang_info: '每局限8次,当你需要使用【金刚护体】时,你可以翻面,视为你使用了此牌.',
        yttl_fumo: '伏魔',
        yttl_fumo_info: '每当你的侠客牌翻至背面向上时,你可以横置所有角色的侠客牌.',
        yttl_kuchan: '枯禅',
        yttl_kuchan2: '枯禅',
        yttl_kuchan2_info: '不能成为xxx',
        yttl_kuchan_info: '每当你的侠客牌翻面后,你可选择一名角色并声明一种未对该角色声明过的锦囊牌的牌名,其于本局游戏不能成为此牌的目标.',
        yttl_zhuyuanzhang: '朱元璋',
        yttl_qingce: '清侧',
        yttl_qingce_info: '每当你使用普通锦囊牌时,你可以令你距离1以内的任意名角色也成为目标,或取消你距离1以内的任意名角色为目标.',
        yttl_yinyuan: '夤缘',
        yttl_yinyuan_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b><b>锁定技.</b>你计算其他元势力角色距离为1.';
          return '<b>盟主技.</b><b>锁定技.</b>你计算其他吴势力角色距离为1.';
        }(),
        //"yttl_yinyuan_info":"<b>盟主技.</b><b>锁定技.</b>你计算其他XXX势力角色距离为1.",
        yttl_yaolu1: '邀赂',
        yttl_yaolu1_info: '',
        yttl_yaolu: '邀赂',
        yttl_yaolu_info: '其他角色出牌阶段,其可以将一张装备牌置于你的装备区里(不得替换原装备),其摸2张牌.',
        yttl_yangxiao: lib.config.extension_金庸群侠传_jiexiantupo ? '界杨逍' : '杨逍',
        yttl_xingshi: '兴师',
        yttl_xingshi_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '当你使用基本牌或普通锦囊牌时,你可以弃置一张牌,若如此做,你可以为此牌额外指定一名目标,若你依此法弃置的牌或使用的牌为♥️️,你可以令一名其他角色摸一张牌.';
          return '当你使用基本牌或普通锦囊牌时,你可以弃置一张牌,若如此做,你可以为此牌额外指定一名目标.';
        }(),
        yttl_jieao: '桀骜',
        yttl_jieao_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '<b>锁定技.</b>结束阶段开始时,你摸X张牌(X为你本回合你使用的普通锦囊牌指定除你外的目标数).';
          return '<b>锁定技.</b>结束阶段开始时,你摸X张牌(X为你本回合你使用的普通锦囊牌指定除你外的目标数),若你以此法摸牌数大于3,你翻面.';
        }(),
        yttl_zhangsanfeng: '张三丰',
        yttl_changbaisanqin: '长白三禽',
        yttl_chunyang: '纯阳',
        yttl_chunyang_info: '每回合限一次,你可以将两张手牌当【杀】使用或打出.',
        yttl_taoli: '桃李',
        yttl_taoli_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b>当其他元势力角色失去最后一张手牌时,你可以交给其一张手牌.';
          return '<b>盟主技.</b>当其他吴势力角色失去最后一张手牌时,你可以交给其一张手牌.';
        }(),
        //"yttl_taoli_info":"<b>盟主技.</b>当其他XXX势力角色失去最后一张手牌时,你可以交给其一张手牌.",
        yttl_fendao: '焚刀',
        yttl_fendao_info: ' 出牌阶段限一次,你可以重铸一名其他角色的装备牌,展示所重铸的牌,若为红色,其回复1点体力;若为黑色,你获得此次重铸的装备牌.',
        yttl_kuiyu: '窥觎',
        yttl_kuiyu_info: '每当你使用一张装备牌时,你可以摸1张牌.',
        yttl_qianwo2: '潜卧',
        yttl_qianwo2_info: '<b>限定技.</b>出牌阶段,你选择一名拥有帮派技的角色,若你未拥有其帮派技,你视为拥有之,且每当其/你发动帮派技后,你/其可以摸2张牌.',
        yttl_qianwo: '潜卧',
        yttl_qianwo_info: '<b>限定技.</b>出牌阶段,你选择一名拥有帮派技的角色,若你未拥有其帮派技,你视为拥有之,且每当其/你发动帮派技后,你/其可以摸2张牌.',
        yttl_guijiao: '归教',
        yttl_guijiao2: '归教',
        yttl_guijiao2_info: '<b>觉醒技.</b>你或<潜卧>角色进入濒死状态时,你失去〖潜卧〗并失去因<潜卧>获得的帮派技,本局游戏中你可以将红色手牌当【火杀】使用,获得〖拜火〗.',
        yttl_guijiao_info: '<b>觉醒技.</b>你或<潜卧>角色进入濒死状态时,你失去〖潜卧〗并失去因<潜卧>获得的帮派技,本局游戏中你可以将红色手牌当【火杀】使用,获得〖拜火〗.',
        yttl_fanyao: '范遥',
        yttl_qianwoold: '潜卧',
        yttl_qianwoold_info: '游戏开始时,你标记一名角色成为其<亲信>.<b>锁定技,</b>若场上还有除你与<亲信>以外的角色存活,防止你与<亲信>对对方造成伤害.出牌阶段限一次,你可以查看<亲信>的手牌,用你的一张手牌交换其一张手牌.你与其使用以此法交换的牌时,可以选择:额外指定一名目标;或令此牌造成的伤害+1.',
        yttl_guijiaoold: '归教',
        yttl_guijiaoold_info: '<b>限定技.</b>出牌阶段,你可以与标记<亲信>交换所有区域内的牌.你重新选择<亲信>.',
        yttl_moshenggu: '莫声谷',
        yttl_roujian: '柔剑',
        yttl_roujian_info: '你使用【杀】指定目标时,你可以令目标将手牌中颜色较多的牌弃置至与颜色较少的牌数相等.',
        yttl_xunjie: '训诫',
        yttl_xunjie_info: '每回合限一次,一名角色因弃置一次性失去至少两张牌后,你可以令其失去一点体力 ,将此次失去的牌收回手牌区.',
        yttl_hanliner: '韩林儿',
        yttl_guyong: '孤勇',
        yttl_guyong_info: '准备阶段开始时,你可以选择一名手牌数比你多的其他角色,你摸一张牌并视为对其使用一张【比武】,你需重复此流程,直到你的手牌数不小于该角色为止.',
        yttl_juezhu: '角逐',
        yttl_juezhu_info: '出牌阶段限一次,你可以选择一项:将你一张装备区里的装备牌移至一名其他角色装备区里,若其装备区里的牌比你多,你对其造成一点伤害;或将一名其他角色装备区里的一张装备牌移至你的装备区里,若你装备区里的牌比其多,其对你造成一点伤害(此技能不可替换原装备).',
        yttl_zhoudian: '周颠',
        yttl_dianxian: '颠仙',
        yttl_dianxian_info: '其他角色使用有花色的非装备牌指定唯一的目标时,你可以弃置一张与此牌花色相同的手牌,交换此牌的使用者和目标(需合法).',
        yttl_nizhan: '逆战',
        yttl_nizhan_info: '出牌阶段限一次,你可以交换两名装备了武器牌的角色装备区里的武器牌.攻击范围因此减少的角色摸一张牌;攻击范围因此增加的角色弃置一张牌;若两名角色的攻击范围均未发生变化,你摸两张牌.',
        yttl_huangshannv: '黄衫女',
        yttl_xianzong: '仙踪',
        yttl_xianzong_info: '你可以在合适的时机发动〖葬情〗、〖别赋〗和〖合璧〗(每项技能每局游戏限发动一次).',
        yttl_taiying: '太阴',
        yttl_taiying_info: '<b>锁定技.</b>当你不因此技能:摸牌时,摸牌数+1;装备区里置入装备牌后,额外使用牌堆或弃牌堆中的一张装备牌;回复体力后,额外回复一点体力 .',
        yttl_xinran: '辛然',
        yttl_cuihuo: '淬火',
        yttl_cuihuo_backup: '淬火',
        yttl_cuihuo_info: '出牌阶段限一次,你可以择一项:令一名装备了武器的角色随机使用牌堆或弃牌堆中一张攻击范围更小的武器;或令一名装备了武器的角色随机使用牌堆或弃牌堆中一张攻击范围更大的武器(不满足则不发生事件).',
        yttl_shanfeng: '搧风',
        yttl_shanfeng_info: '<b>锁定技.</b>若你装备区里的武器牌均红色,你手牌中的【杀】均视为【火杀】;你造成的火焰伤害+1.',
        yttl_juezhangsanfeng: '绝张三丰',
        yttl_liangyi: '两仪',
        yttl_liangyi_info: '出牌阶段限一次,你可以随机获得X张牌堆中数量较多的颜色的牌(X为牌堆中两种颜色的牌的差数且最大为35).若牌堆中两种颜色相等,你发动一次太极',
        yttl_sixiang: '四象',
        yttl_sixiang_info: '每当你累计使用四种花色的牌后,你可以视为使用一张无距离限制的【杀】.',
        yttl_dingminjun: '丁敏君',
        yttl_feiyi: '诽议',
        yttl_feiyi_info: '每名角色的回合限一次,其他角色因弃置即将失去牌时,你声明一种仅你知道的花色.若其此次弃置的牌不包含你声明的花色,其需弃置一张你声明花色的牌(无则不弃).',
        yttl_zhengfeng: '争锋',
        yttl_zhengfeng_info: '每轮限一次,其他角色装备区置入武器牌后,若其攻击范围比你大,你可以选择:你摸X张牌;其弃置X张牌(X为其与你攻击范围之差).',
        yttl_dujie: '绝渡劫',
        yttl_wujie1: '无界',
        yttl_wujie1_info: '出牌阶段限一次,你可以翻面,摸三张牌,本回合使用牌无距离、次数、目标限制,且跳过弃牌阶段.',
        yttl_wujie: '无界',
        yttl_wujie_info: '出牌阶段限一次,你可以翻面,摸三张牌,本回合使用牌无距离、次数、目标限制,且跳过弃牌阶段.',
        yttl_exiang: '恶相',
        yttl_exiang_info: '当你的侠客牌翻至正面/背面向上后,你可以获得一张【金刚护体】/【玄铁索链】;你使用黑色/红色的【金刚护体】后,你可以视为使用一张无距离限制的【毒杀】/伤害值+1的【火杀】.',
        yttl_yabiao: '押镖',
        yttl_yabiao_info: '每轮限一次,其他角色弃牌阶段弃牌后,你将这些牌当<镖货>置于侠客牌上,其下回合开始,取回所有<镖货>,你摸等同于其取回牌数量的牌,若其取牌数为0,其对你造成一点伤害.<br>&nbsp;&nbsp;&nbsp;&nbsp;其他角色对你造成伤害后,可以劫获一张<镖货>.',
        yttl_shizui: '释罪',
        yttl_shizui_info: '其他角色对你使用伤害类卡牌时,你可以弃置一张牌,令任意名劫过镖的角色成为合法的额外目标.',
        yttl_dudajin: '都大锦',
        yttl_zhangwujizhaomin: '张无忌赵敏',
        yttl_guitian: '归田',
        yttl_guitian_info: '回合结束时,你可以弃置装备区里的装备牌和手牌中所有的伤害类卡牌,摸两倍数量的牌.',
        yttl_nuoyi: '挪移',
        yttl_nuoyi_info: '出牌阶段限一次,你可以弃置一张手牌,将场上至多两张与此牌花色相同的装备牌移至你的装备区里(不能替换原装备).',
        yttl_shiquan: '释权',
        yttl_shiquan_info: '出牌阶段,你可以弃置装备区里的一张牌,解除一名角色的一项负面状态.',
        yttl_doujiushenseng: '绝斗酒神僧',
        yttl_jiyang: '极阳',
        yttl_jiyang_info: '<b>锁定技.</b>你获得牌后,你须选择将其中的红色牌交给一名不拥有〖极阳〗的其他角色;或弃置之,你摸等量的牌.',
        yttl_jiusheng: '酒圣',
        yttl_jiusheng_info: '你可以将♠️️手牌当【酒】使用.<b>锁定技.</b>你使用酒后,若你的体力上限大于2,你减1点体力上限,若你已受伤,你回复1点体力,若你未受伤,你摸2张牌.',
        yttl_qianglu: '强虏',
        yttl_qianglu_info: '<b>盟主技.</b>与你朝代相同的其他角色使用【鞑虏入侵】造成伤害后,可令你摸一张牌.',
        yttl_shaolinsandu: '渡厄渡劫渡难',
        yttl_fumo_new: '伏魔',
        yttl_fumo_new_info: '当你的侠客牌翻至背面/正面向上后,你可以横置所有角色的侠客牌/视为使用一张【毒杀】.',
        yttl_fumo_new2: '伏魔',
        yttl_fumo_new2_info: '当你的侠客牌翻至背面/正面向上后,你可以横置所有角色的侠客牌/视为使用一张【毒杀】.',
        yttl_wujie_new: '无界',
        yttl_wujie_new_info: '<b>锁定技.</b>你摸牌阶段的摸牌基数为3;你使用牌的额定目标数、使用次数、攻击范围、手牌上限+3;你使用牌指定目标无需合法(如你可以对自己使用【杀】、对其他角色使用装备牌、回合内可以对其他角色使用【九花玉露丸】等).',
        yttl_wujie_new2: '无界',
        yttl_wujie_new2_info: '<b>锁定技.</b>你摸牌阶段的摸牌基数为3;你使用牌的额定目标数、使用次数、攻击范围、手牌上限+3;你使用牌指定目标无需合法(如你可以对自己使用【杀】、对其他角色使用装备牌、回合内可以对其他角色使用【九花玉露丸】等).',
        yttl_xie_zhaomin: '邪赵敏',
        yttl_jieqin: '劫亲',
        yttl_jieqin_info: '<b>限定技.</b>其他角色发动与性别有关的技能后,你令其失去此技能(若该技能不是侠客技能则跳过此步骤),你获得此技能.',
        yttl_hehe: '赫赫',
        yttl_hehe_info: '一名角色的回合结束时,若其于此回合内满足下列条件之一,你可以摸三张牌并交给其一张牌.<p>1.在本回合内造成过至少两点伤害;<p>2.对至少两名角色造成过伤害.',
        yttl_ruanjin: '软禁',
        yttl_ruanjin_info: '一名角色使用【玄铁索链】时,你可以弃置一张牌并为此牌增加一名目标.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他角色的回合开始时,若其处于横置状态,你可以将一张牌当【十香软筋散】对其使用.',
        yttl_ruanjin2: '软禁',
        yttl_ruanjin2_info: '一名角色使用【玄铁索链】时,你可以弃置一张牌并为此牌增加一名目标.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他角色的回合开始时,若其处于横置状态,你可以将一张牌当【十香软筋散】对其使用.',
        yttl_xie_zhuer: '邪蛛儿',
        yttl_qianzhu: '千蛛',
        yttl_qianzhu_info: '<b>锁定技,</b>你受X点蛊毒伤害后,你回复X+1点体力;以你为起点的蛊毒伤害传递给其他横置的角色时,此伤害+1.',
        yttl_wandu: '万毒',
        yttl_wandu_info: '当你获得牌名中含有<毒>字的牌、【毒杀】或毒药牌后,你可对一名其他角色造成1点蛊毒伤害.',
        yttl_gonghuan: '共患',
        yttl_gonghuan_info: '出牌阶段限一次,若你不处于负面状态,你可将一名其他角色的负面状态复制给你自己,你摸3X张牌(X为你依此法进入的负面状态种数).',
        yttl_xie_zhouzhiruo: '邪周芷若',
        yttl_daoguang: '刀光',
        yttl_daoguang_info: '岀牌阶段限一次,你可以获得一名其他角色装备区里的一张装备牌,该角色需选择对其攻击范围内一名除你以外的其他角色造成一点伤害.',
        yttl_yiming: '遗命',
        yttl_yiming2: '遗命',
        yttl_yiming2_info: '<b>使命技.</b>本局游戏中,若【屠龙刀】和【倚天剑】均进入过你的区域内,视为使命成功.达成使命之前若你进入濒死状态,视为使命失败.<p><b>成功:</b>减1点体力上限,回复1点体力或摸2张牌,获得〖光宗〗.<p><b>失败:</b>减1点体力上限,回复2点体力,获得〖剑影〗.',
        yttl_yiming_info: '<b>使命技.</b>本局游戏中,若【屠龙刀】和【倚天剑】均进入过你的区域内,视为使命成功.达成使命之前若你进入濒死状态,视为使命失败.<p><b>成功:</b>减1点体力上限,回复1点体力或摸2张牌,获得〖光宗〗.<p><b>失败:</b>减1点体力上限,回复2点体力,获得〖剑影〗.',
        yttl_guangzong: '光宗',
        yttl_guangzong_info: '<b>锁定技.</b>你视为装备了【武穆遗书】和【九阴真经】.',
        yttl_jianying: '剑影',
        yttl_jianying_info: '<b>锁定技.</b>你装备区里的:刀视为【屠龙伏狮刀】;剑视为【倚天寒锋剑】;鞭视为【白蟒鞭】.',
        jydiy_baimangbian: '白蟒鞭',
        jydiy_baimangbian_info: '你使用的【杀】指定目标的额定数为3,且指定目标时,可以横置其中未横置的目标.',
        yttl_chengkun: '成昆',
        yttl_hunyuan: '混元',
        yttl_hunyuan_info: '出牌阶段限一次,你可以重铸所有手牌,若新手牌点数之和比重铸牌点数之和:大,你可以视为使用一张不计次数、无视距离的单目标伤害牌;小,你可以连续摸牌直到所有手牌点数之和大于等于重铸牌的点数之和.',
        yttl_pili: '霹雳',
        yttl_pili_info: '<b>锁定技.</b>你的攻击范围+X(X为当前轮次数);你使用的点数小于等于你攻击范围(含无点数)的伤害牌,不能被目标抵消或响应. ',
        yttl_qunce: '群策',
        yttl_qunce_info: '出牌阶段限一次,你可以令所有角色议事.若结果为黑色/红色,你可以视为使用一张黑色/红色普通锦囊牌.',
        yttl_xie_xiexun: '邪谢逊',
        yttl_shixin_1st: '失心',
        yttl_shixin_1st_info: '<b>锁定技.</b>你每使用一张伤害牌,失去一点体力.你的回合内,每当你失去体力后,本回合你的攻击范围、使用【杀】的次数、伤害牌的额定目标数+1.',
        yttl_shixin_2nd: '释心',
        yttl_shixin_2nd_info: '<b>限定技.</b>判定阶段开始时,若你在处理蓄谋牌时选择了<将所有的蓄谋牌置入弃牌堆>,你回复所有体力.',
        yttl_minghen: '铭恨',
        yttl_minghen_info: '当你受到伤害后,你可以随机蓄谋一张与现有蓄谋牌牌名均不同的伤害牌.',
        yttl_xie_yintianzheng: '邪殷天正',
        visible_yttl_yinglue: 'invisible',
        yttl_yinglue: '鹰掠',
        yttl_yinglue_info: '<b>锁定技.</b>其他角色的点数不大于[A]的手牌对你始终可见.其他角色的回合结束时,你可以令其选择一项:弃置所有点数大于[A]的手牌;或将所有点数大于[A]的手牌交给你并令[]中点数+X(X为你此次获得的牌数,且最多加至13).',
        yttl_yingji: '鹰击',
        yttl_yingji_info: '<b>锁定技.</b>当你使用伤害牌指定唯一目标后,其无法使用或打出对你可见的手牌直到当前回合结束.',
        yttl_ytzyingyang: '鹰扬',
        yttl_ytzyingyang_info: '出牌阶段限一次,你可以议事,且你发起议事时,你可以代替一名议事成员选择议事牌.若议事结果为:红色/黑色,你可以令至多三名角色各使用一张红色/黑色装备.',
        yttl_yinglue2: '鹰掠',
        yttl_yinglue2_info: 'undefined',
        yttl_yin_fanyao: '隐范遥',
        yttl_huirong: '毁容',
        yttl_huirong_info: '<b>隐匿技.</b>你于回合内登场后,名字显示为范遥,你可以移动场上至多四张牌;你于回合外登场后,名字显示为苦头陀,你可以视为使用两张【鞑虏入侵】.',
        yttl_antan: '暗探',
        yttl_antan_info: '<b>锁定技.</b>准备阶段,你换名;当你的名字为范遥/苦头陀时,拥有【燎原】/【赤胆】.<p>出牌阶段限一次,若你名为范遥/苦头陀,你可以视为对攻击范围内一名汉人/异族使用一张【推心置腹】.',
        yttl_liaoyuan: '燎原',
        yttl_liaoyuan_info: '出牌阶段限一次,你可以获得技能【拜火】,令一名角色下回合内可以将红色手牌当【硝磷火弹】使用,直到其下回合结束或其死亡,你失去【拜火】.',
        yttl_chidan: '赤胆',
        yttl_chidan_info: '每轮限一次,其他角色出牌阶段开始时,你可以观看其手牌,并将其中一半(向上取整)的牌改为【影】(♠️️A),直到其下回合结束时回复.',
        yttl_wangnangu: '王难姑',
        yttl_duzhao: '毒招',
        yttl_duzhao_info: '出牌阶段,你可以与一名其他角色拼点.若你赢,你选择其攻击范围内另一名角色,其受到你的一点蛊毒伤害,且本回合不能再发动此技能.<p>你造成蛊毒伤害后,可以移动场上一张牌.',
        yttl_dujing: '毒经',
        yttl_dujing_info: '<b>锁定技.</b>你拼点后,你将你的拼点牌置于武侠客牌上,称为<毒>. 你可将♠️️<毒>当【悲酥清风】使用、♣️️<毒>当【十香软筋散】使用、红色<毒>当【情花】使用.',
        yttl_xie_daiqisi: '邪黛绮丝',
        yttl_qianfu: '潜伏',
        yttl_qianfu_info: '每当你发动〖暗潮〗后或洗牌后,你获得牌堆底前7张牌中的♣️️牌.',
        yttl_anchao: '暗潮',
        yttl_anchao_info: '<b>锁定技,</b>牌堆顶和牌堆底的前7张牌对你可见;每轮限两次,一名角色的回合开始时,你可以令牌堆翻转.',
        yttl_shengnv: '圣女',
        yttl_shengnv_info: '<b>锁定技,</b>你的♣️️牌不计入手牌上限、你使用♣️️牌无距离限制;出牌阶段,你可重铸♣️️手牌;你于出牌阶段使用第一/二/三/四(五/六/七/八……类推)张♣️️非装备牌指定目标后,你可将此牌改为【见招拆招】/【妙手空空】/【比武】/【鞑虏入侵】.'
      },
      //-------------------------------------技能描述修改区域-------------------------------------------------//
      dynamicTranslate: {
        yttl_tianni_new(player) {
          if (!player.storage.yttl_tianni_new) player.storage.yttl_tianni_new = [1, 1];
          var str = "每轮游戏开始时,你可以弃置一张手牌,令场上所有角色的回合顺序逆转(首号位除外).  锁定技,若本轮场上所有角色的回合顺序为逆时针,则本轮你攻击范围和手牌上限+<span class='firetext'>";
          str += player.storage.yttl_tianni_new[0];
          str += "</span>;若本轮场上所有角色的回合顺序为顺时针,则本轮你摸牌阶段的摸牌数和出牌阶段使用【杀】的额定次数+<span class='firetext'>";
          str += player.storage.yttl_tianni_new[1];
          str += '</span>.';
          return str;
        },
        yttl_lizong(player) {
          var str = '<b>锁定技.</b>转换技,每回合你拥有以下一项效果:';
          var str1 = '①使用牌无次数限制.';
          var str2 = '②使用牌无距离限制.';
          if (player.storage.yttl_lizong == true) {
            str = str + '<span class="bluetext">' + str1 + '</span>' + str2;
          } else {
            str = str + str1 + '<span class="bluetext">' + str2 + '</span>';
          }
          return str;
        },
        yttl_congshan_new(player) {
          if (player.storage.yttl_congshan_new == true) {
            var str = '转换技.出牌阶段限一次,阴:你可以获得一名其他角色任意张手牌.<span class="bluetext">阳:你可以交给一名其他角色' + player.storage['yttl_congshan_new2'] + '张手牌.</span>';
            return str;
          }
          return '转换技,<span class="bluetext">阴:你可以获得一名其他角色任意张手牌.</span>阳:你可以交给一名其他角色任意张手牌';
        },
        yttl_congshan_new2(player) {
          return lib.dynamicTranslate.yttl_congshan_new(player);
        },
        yttl_jixian_old(player) {
          var str = '<b>转换技</b>';
          var str2 = '阴:其他角色一次性获得至少两张牌后,你可以摸等量的牌.';
          var str1 = '阳:其他角色一次性失去至少两张牌后,你可以弃置等量的牌.';
          if (player.storage.yttl_jixian == true) {
            str2 = '<span class="bluetext">' + str1 + '</span>';
          } else {
            str1 = '<span class="bluetext">' + str2 + '</span>';
          }
          return str + str2 + str1;
        },
        yttl_jixian(player) {
          var str = '<b>转换技</b>';
          var str2 = '阴:其他角色一次获得 X(X 至少为 2)张 牌后,你可以摸 X+1 张牌.';
          var str1 = '阳:其他角色一次失去 X(X 至少 为 2)张牌后,你可以弃置至少X张牌(若你弃牌数大于该 角色,你对其造成1点伤害).';
          if (player.storage.yttl_jixian == true) {
            str2 = '<span class="bluetext">' + str1 + '</span>';
          } else {
            str1 = '<span class="bluetext">' + str2 + '</span>';
          }
          return str + str2 + str1;
        },
        yttl_congshan(player) {
          var str = '<b>转换技</b>';
          var str1 = '阴:你可以获得一名其他角色的一张手牌.';
          var str2 = '阳:你可以交给一名其他角色一张手牌.';
          if (player.storage.yttl_congshan == true) {
            str1 = '<span class="bluetext">' + str1 + '</span>';
          } else {
            str2 = '<span class="bluetext">' + str2 + '</span>';
          }
          return str + str2 + str1;
        },
        yttl_kuchan2(player) {
          return '不能成为' + get.translation(player.storage.yttl_kuchan || []) + '的目标.';
        },
        yttl_channuo(player) {
          var str = lib.translate.yttl_channuo_info;
          if (player.storage.yttl_tongshou) return '每当你受到黑色杀造成的伤害时,你可以弃置一张手牌,此伤害-1.';
          return str;
        }
      }
      //-------------------------------------技能描述修改区域-------------------------------------------------//
    };
    for (var i in yttl.character) {
      yttl.character[i][4].push('jy_die_audio');
      //yttl.character[i][4].push(`die:ext:金庸群侠传/peiyin/${i}.mp3`);
      yttl.character[i][4].push(`die:ext:金庸群侠传/peiyin:true`);
      yttl.character[i][4].push('ext:金庸群侠传/character/yuanban/' + i + '.jpg');
    }
    return yttl;
  });
});
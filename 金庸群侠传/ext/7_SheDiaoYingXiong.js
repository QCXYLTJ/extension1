'use strict';
window.jyimport(function (lib, game, ui, get, ai, _status) {
  game.import('character', function () {
    lib.config.all.characters.add('sdyx');
    lib.config.characters.add('sdyx');
    lib.translate.sdyx_character_config = '<img style=width:100px  src=extension/金庸群侠传/image/title/jy_title_sdyx.jpg>';
    var Group = function (str1, str2) {
      if (!str2) return str1;
      return lib.config.extension_金庸群侠传_changeGroup ? str2 : str1;
    };
    var tupo = function (str1, str2) {
      return lib.config.extension_金庸群侠传_jiexiantupo ? str2 : str1;
    };
    var sdyx = {
      name: 'sdyx',
      connect: true,
      characterFilter: {},
      characterSort: {
        sdyx: {
          //绝世高手
          sdyx_jueshi: ['sdxl_jue_wangchongyang', 'sdyx_jue_hongqigong', 'sdyx_yuefei', 'sdyx_jue_huangshang', 'sdyx_jueouyangfeng', 'sdyx_jue_guojing', 'sdyx_juehuangyaoshi'],
          //蒙古
          sdyx_menggu: ['sdyx_zhamuhe', 'sdyx_wokuotai', 'sdyx_tuolei', 'sdyx_tiemuzhen', 'sdyx_huazheng', 'sdyx_spguojing', 'sdyx_zhebie'],
          //金国
          sdyx_jinguo: ['sdyx_xie_yangkang', 'sdyx_duantiande', 'sdyx_baoxiruo', 'sdyx_shatongtianhoutonghai', 'sdyx_wanyankang', 'sdyx_wanyanhonglie'],
          //桃花岛
          sdyx_taohuadao: ['sdyx_wumianfeng', 'sdyx_shagu', 'sdyx_meichaofeng', 'sdyx_spmeichaofeng', 'sdyx_xie_meiruohua', 'sdyx_qulingfeng', 'sdyx_luchengfeng', 'sdyx_fengheng', 'sdyx_chenxuanfeng', 'sdyx_huangyaoshi', 'sdyx_sp_huangrong', 'sdyx_sphuangyaoshi', 'sdyx_huangrong'],
          //全真教
          sdyx_quanzhenjiao: ['sdyx_mayu', 'sdyx_wangchongyang', 'sdyx_qiuchuji', 'sdyx_zhoubotong'],
          //白驼山
          sdyx_baituoshan: ['sdyx_xie_ouyangfeng', 'sdyx_ouyangfeng', 'sdyx_ouyangke'],
          //丐帮
          sdyx_gaibang: ['sdyx_hongqigong'],
          //江南七侠
          sdyx_jiangnanqixia: ['sdyx_sp_kezhene', 'sdyx_zhucong', 'sdyx_nanxiren', 'sdyx_quanjinfa', 'sdyx_zhangasheng', 'sdyx_hanbaoju', 'sdyx_kezhene', 'sdyx_hanxiaoying'],
          //大理
          sdyx_dali: ['sdyx_yinggu', 'sdyx_duanzhixin', 'sdyx_spyinggu'],
          //铁掌帮
          sdyx_tiezhangbang: ['sdyx_shangguanjiannan', 'sdyx_qiuqianren'],
          //江湖侠客
          sdyx_xiake: ['sdyx_guoxiaotian', 'sdyx_munianci', 'sdyx_yangkang', 'sdyx_guojing', 'sdyx_liping']
        }
      },
      character: {
        //2023.06重启
        sdyx_wumianfeng: ['male', Group('wei', 'jy_song'), 3, ['sdyx_renshu', 'sdyx_lingluo', 'sdyx_yiqu'], ['bangpai:jy_taohuadao'], { drawer: '画师:天工AI', skinLevel: 2 }],
        sdyx_xie_ouyangfeng: ['male', Group('jin', 'jy_xie'), '0/4', ['sdyx_niming', 'sdyx_changong'], ['bangpai:jy_baituoshan'], { drawer: '画师:龙印2', skinLevel: 3 }],
        sdxl_jue_wangchongyang: ['male', Group('shen', 'jy_jue'), 4, ['sdxl_candou', 'sdxl_xingluo', 'sdxl_ziwei', 'sdxl_tiangang'], ['bangpai:jy_quanzhen'], { drawer: '画师:Li FengYang', skinLevel: 4, videos: ['<iframe src="http:iframe src="http://player.bilibili.com/player.html?aid=273431382&bvid=BV1uF411Q7oA&cid=&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        sdyx_mayu: ['male', Group('wei', 'jy_song'), 4, ['sdyx_anshou_new', 'sdyx_yunyou_new'], ['bangpai:jy_quanzhen'], { drawer: '画师:龙印', skinLevel: 4 }],
        sdyx_sp_kezhene: ['male', Group('wei', 'jy_song'), 3, ['sdyx_duling_new', 'sdyx_mangxiao_new', 'sdyxbiansheng_new'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 1 }],
        sdyx_shagu: ['female', 'jy_song', 3, ['sdyx_qianchen', 'sdyx_wuyou'], ['bangpai:jy_taohuadao'], { drawer: '画师:祈云之庭', skinLevel: 2 }], //zcool.com.cn/u/14608007
        //20211127重启新武将
        sdyx_zhamuhe: ['male', Group('qun', 'jy_lie'), 4, ['sdyx_wonan', 'sdyx_lianfa'], ['bangpai:jy_dalu'], { drawer: '画师:Mauro Belfiore', skinLevel: 2 }],
        sdyx_wokuotai: ['male', Group('qun', 'jy_lie'), 4, ['sdyx_canshi', 'sdyx_jingtun'], ['bangpai:jy_dalu'], { drawer: '画师:天合科创', skinLevel: 3, videos: ['<iframe src="http:iframe src="http://player.bilibili.com/player.html?aid=744806103&bvid=BV17r4y1d7qS&cid=&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>', '<iframe src="http://player.bilibili.com/player.html?aid=358452256&bvid=BV1wX4y1Y7EL&cid=1196077163&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }], //9abox.com/user/gallery/u5b7ac11dce5ff
        sdyx_guoxiaotian: ['male', Group('wei', 'jy_song'), 3, ['sdyx_zhongyi', 'sdyx_diexue'], ['bangpai:jy_youxia']],
        sdyx_jue_hongqigong: ['male', Group('shen', 'jy_jue'), 3, ['sdyx_qianlong', 'sdyx_shengai', 'sdyx_tugou'], ['bangpai:jy_gaibang'], { drawer: '画师:佚名', skinLevel: 4 }],
        sdyx_xie_meiruohua: ['female', Group('jin', 'jy_xie'), 4, ['sdyx_yaoyao', 'sdyx_qingdou', 'sdyx_xinghong'], ['bangpai:jy_taohuadao'], { drawer: '画师:佚名', skinLevel: 2 }],
        //黑化梅超风
        sdyx_xie_meichaofeng: ['female', Group('jin', 'jy_xie'), 1, [], ['bangpai:jy_taohuadao'], { drawer: '画师:佚名', skinLevel: 2 }],
        sdyx_xie_yangkang: ['male', Group('jin', 'jy_xie'), '6/9', ['sdyx_yinzhua', 'sdyx_weidao'], ['bangpai:jy_dalu'], { drawer: '画师:新射雕英雄传', skinLevel: 4 }],
        sdyx_qulingfeng: ['male', Group('wei', 'jy_song'), 3, ['sdyx_pikong', 'sdyx_daobao'], ['bangpai:jy_taohuadao'], { drawer: '画师:新射雕英雄传', skinLevel: 1 }],
        sdyx_luchengfeng: ['male', Group('wei', 'jy_song'), 3, ['sdyx_sixiang', 'sdyx_guiyun', 'sdyx_chaizhen'], ['bangpai:jy_taohuadao'], { drawer: '画师:龙印', skinLevel: 2 }],
        sdyx_hanxiaoying: ['female', Group('wei', 'jy_song'), 4, ['sdyx_yuenv', 'sdyx_qiaojian'], ['bangpai:jy_youxia'], { drawer: '画师:射雕英雄传', skinLevel: 4 }],
        sdyx_zhangasheng: ['male', Group('wei', 'jy_song'), 3, ['sdyx_paoding', 'sdyx_tiexue'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 2 }],
        sdyx_jueouyangfeng: ['male', Group('shen', 'jy_jue'), 3, ['sdyx_liudu', 'sdyx_nimai'], ['bangpai:jy_baituoshan']],
        sdyx_shangguanjiannan: ['male', Group('wei', 'jy_song'), 3, ['sdyx_wulve', 'sdyx_liufang'], ['bangpai:jy_tiezhangbang'], { drawer: '画师:佚名', skinLevel: 3 }],
        sdyx_juehuangyaoshi: ['male', Group('shen', 'jy_jue'), 3, ['sdyx_qizhen', 'sdyx_xiaojian'], ['bangpai:jy_taohuadao'], { drawer: '画师:巴比将军', skinLevel: 4 }],
        sdyx_wanyankang: ['male', Group('qun', 'jy_lie'), 4, ['sdyx_panguo', 'sdyx_tongdi'], ['bangpai:jy_dalu'], { drawer: '画师:射雕英雄传', skinLevel: 4 }],
        sdyx_nanxiren: ['male', Group('wei', 'jy_song'), 3, ['sdyx_tiejian', 'sdyx_xuezheng'], ['bangpai:jy_youxia'], { drawer: '画师:龙印', skinLevel: 1 }],
        sdyx_spmeichaofeng: ['female', Group('wei', 'jy_song'), 4, ['sdyx_xiezhao', 'sdyx_zhengu'], ['bangpai:jy_taohuadao'], { drawer: '画师:金庸寻侠插画', skinLevel: 4 }],
        //jy_taohuadao<桃花岛>.
        sdyx_wangchongyang: ['male', Group('wei', 'jy_song'), 4, ['sdyx_lunjian', 'sdyx_xuantong'], ['bangpai:jy_quanzhen'], { drawer: '画师:五行师', skinLevel: 4 }],
        sdyx_hanbaoju: ['male', Group('wei', 'jy_song'), 3, ['sdyx_xiangma', 'sdyx_xunhua'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 2 }],
        // jy_youxia<游侠派>,表示无门无派的江湖偏正面人士.
        sdyx_quanjinfa: ['male', Group('wei', 'jy_song'), 3, ['sdyx_hengtong', 'sdyx_jingsuan'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 1 }],
        sdyx_shatongtianhoutonghai: ['male', Group('qun', 'jy_lie'), 4, ['sdyx_panlong', 'sdyx_shuangjiao'], ['bangpai:jy_dalu:jy_hanfei'], { drawer: '画师:佚名', skinLevel: 4 }],
        //jy_dalu<鞑虏>,为金、辽、蒙古等统称,包含这些人的手下或爪牙;jy_hanfei<悍匪帮>,无门无派的江湖邪恶势力.
        sdyx_chenxuanfeng: ['male', Group('wei', 'jy_song'), 3, ['sdyx_daojin', 'sdyx_moke'], ['bangpai:jy_taohuadao'], { drawer: '画师:龙印2', skinLevel: 4 }],
        sdyx_jue_huangshang: ['male', Group('shen', 'jy_jue'), 4, ['jue_jiaoyi', 'jue_tongwu', 'jue_jiuyin'], ['bangpai:jy_youxia'], { drawer: '画师:黄光剑', skinLevel: 4 }],
        sdyx_liping: ['female', Group('wei', 'jy_song'), 4, ['sdyx_piaoping', 'sdyx_dayi'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 2 }],
        sdyx_baoxiruo: ['female', Group('qun', 'jy_lie'), 3, ['sdyx_beimin', 'sdyx_zhuisi'], ['bangpai:jy_youxia'], { drawer: '画师:战国布武', skinLevel: 4 }],
        sdyx_zhucong: ['male', Group('wei', 'jy_song'), 4, ['sdyx_toutian', 'sdyx_huanri'], ['bangpai:jy_youxia'], { drawer: '画师:天涯明月刀', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=642476606&bvid=BV1BY4y1G7KH&cid=746331039&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        sdyx_huazheng: ['female', Group('qun', 'jy_lie'), 3, ['sdyx_xuhun', 'sdyx_changnian', 'sdyx_duanyi'], ['bangpai:jy_dalu'], { drawer: '画师:铁血丹心', skinLevel: 4 }],
        sdyx_huangyaoshi: ['male', Group('wei', 'jy_song'), 3, ['sdyx_beihuai', 'sdyx_qushang'], ['bangpai:jy_taohuadao'], { drawer: '画师:大飞', skinLevel: 4 }],
        sdyx_spguojing: ['male', Group('qun', 'jy_lie'), 4, ['sdyx_jianchi', 'sdyx_yuzhong'], ['bangpai:jy_youxia'], { drawer: '画师:东邪西毒', skinLevel: 4 }],
        //jy_gaibang<丐帮>.一些虽然没有加入某派,但学习了某派拿手绝学的侠客,也会归类到该派别.
        sdyx_guojing: [
        'male',
        Group('wei', 'jy_song'),
        4,
        ['sdyx_danxin', 'sdyx_polu', 'sdyx_longyin'],
        ['zhu', 'bangpai:jy_taohuadao:jy_gaibang'],
        {
          drawer: '画师:战江湖',
          skinLevel: 3,
          videos: ['<iframe src="http://player.bilibili.com/player.html?aid=574588376&bvid=BV1ez4y1W71L&cid=1230201798&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'],
          spineSkins: {
            feishi1: {
              name: '飞矢流星1',
              file: 'extension/金庸换肤/spine/郭靖/飞矢流星/feishiliuxing.json',
              x: [0, 0.4],
              y: [0, 0.6],
              scale: 0,
              width: 560,
              height: 746,
              animation: 'daiji',
              background: 'extension/金庸换肤/skin/guojing.jpg',
              audios: {
                gongji: '../extension/金庸换肤/spine/郭靖/飞矢流星/feishiliuxing.mp3'
              }
            }
          }
        }],

        sdyx_zhebie: ['male', Group('qun', 'jy_lie'), 4, ['sdyx_sheqi', 'sdyx_guifu'], ['bangpai:jy_dalu'], { drawer: '画师:则卷LL', skinLevel: 3 }], //artstation.com/artwork/qAaB0P
        sdyx_ouyangfeng: ['male', Group('qun', 'jy_lie'), 4, ['sdyx_shezhang', 'sdyx_duxi', 'sdyx_nijing'], ['bangpai:jy_baituoshan'], { drawer: '画师:佚名', skinLevel: 2 }],
        //jy_baituoshan<白驼山>
        sdyx_fengheng: ['female', Group('wei', 'jy_song'), 6, ['sdyx_moshu', 'sdyx_cuixin'], ['bangpai:jy_taohuadao'], { drawer: '画师:墨三国', skinLevel: 4 }],
        sdyx_huangrong: ['female', Group('wei', 'jy_song'), 3, ['sdyx_qingshi', 'sdyx_qiaoyan', 'sdyx_qimen'], ['bangpai:jy_taohuadao:jy_gaibang'], { drawer: '画师:射雕英雄传手游', skinLevel: 4 }],
        sdyx_zhoubotong: ['male', Group('wei', 'jy_song'), 3, ['sdyx_mingwan', 'sdyx_shouxun'], ['bangpai:jy_quanzhen'], { drawer: '画师:Li FengYang', skinLevel: 4 }],
        sdyx_ouyangke: ['male', Group('qun', 'jy_lie'), 4, ['sdyx_mushe', 'sdyx_jixia'], ['bangpai:jy_baituoshan'], { drawer: '画师:佚名', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=275172402&bvid=BV1mF411C7AX&cid=1245797303&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>', '<iframe src="http://player.bilibili.com/player.html?aid=50517280&bvid=BV134411h7R8&cid=88441869&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        sdyx_hongqigong: ['male', Group('wei', 'jy_song'), 3, ['sdyx_xiangyan', 'sdyx_shouming'], ['bangpai:jy_gaibang'], { drawer: '画师:Li FengYang', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=50452066&bvid=BV1Q441187bD&cid=88323784&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        sdyx_qiuqianren: ['male', Group('wei', 'jy_song'), 4, [lib.config.extension_金庸群侠传_jiexiantupo ? 'sdyx_tiezhang2' : 'sdyx_tiezhang', 'sdyx_huolian'], ['bangpai:jy_tiezhangbang'], { drawer: '画师:龙印', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=50337187&bvid=BV14441187w9&cid=88125716&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        //jy_tiezhangbang<铁掌帮>
        sdyx_yangkang: ['male', Group('wei', 'jy_song'), 3, ['sdyx_weifu', 'sdyx_lisuo'], ['bangpai:jy_dalu'], { drawer: '画师:董绍华', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=511300407&bvid=BV14u411r7sP&cid=713857071&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }], //weibo.com/u/1252766677
        sdyx_yinggu: ['female', Group('wei', 'jy_song'), 4, ['sdyx_xingshang', 'sdyx_tigu'], ['bangpai:jy_youxia'], { drawer: '画师:霸三国', skinLevel: 1 }],
        sdyx_meichaofeng: ['female', Group('wei', 'jy_song'), 3, ['sdyx_lizhao', 'sdyx_shien', 'sdyx_guidao'], ['bangpai:jy_taohuadao'], { drawer: '画师:东方不败', skinLevel: 4 }],
        sdyx_kezhene: ['male', Group('wei', 'jy_song'), 3, ['sdyx_xiadan', 'sdyx_xiangmo'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 3 }],
        sdyx_duantiande: ['male', Group('wei', 'jy_song'), 3, ['sdyx_ninglu', 'sdyx_huoyan'], ['bangpai:jy_hanfei'], { drawer: '画师:佚名', skinLevel: 1 }],
        sdyx_tiemuzhen: ['male', Group('qun', 'jy_lie'), 4, ['sdyx_rongma', 'sdyx_tuojiang', 'sdyx_tianjiao'], ['zhu', 'bangpai:jy_dalu'], { drawer: '画师:王者荣耀', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=787299038&bvid=BV1Q14y1v7Cu&cid=1234554633&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        sdyx_tuolei: ['male', Group('qun', 'jy_lie'), 4, ['sdyx_yingong', 'sdyx_gepao'], ['bangpai:jy_dalu'], { drawer: '画师:佚名', skinLevel: 4 }],
        sdyx_munianci: ['female', Group('wei', 'jy_song'), 3, ['sdyx_zhaoqing', 'sdyx_qianquan'], ['bangpai:jy_youxia'], { drawer: '画师:随之而来', skinLevel: 4 }], //space.bilibili.com/1830230894
        sdyx_wanyanhonglie: ['male', Group('qun', 'jy_lie'), 3, ['sdyx_lixian', 'sdyx_zhulu', 'sdyx_baye'], ['zhu', 'bangpai:jy_dalu'], { drawer: '画师:腾讯', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=999796633&bvid=BV1u44y1w7Ts&cid=1235658142&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        sdyx_duanzhixin: ['male', Group('qun', 'jy_lie'), 3, ['sdyx_yiyang', 'sdyx_chanxin', 'sdyx_duhua'], ['bangpai:jy_dali'], { drawer: '画师:Li FengYang', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=635657145&bvid=BV1vb4y1H7ur&cid=485191837&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>', '<iframe src="http://player.bilibili.com/player.html?aid=210248343&bvid=BV1ya411B7Lv&cid=470127138&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        //jy_dali<大理段氏>
        sdyx_qiuchuji: ['male', Group('wei', 'jy_song'), 3, ['sdyx_shijian', lib.config.extension_金庸群侠传_jiexiantupo ? 'sdyx_miyue_new' : 'sdyx_miyue'], ['bangpai:jy_quanzhen'], { drawer: '画师:战江湖', skinLevel: 2 }],
        sdyx_jue_guojing: ['male', Group('shen', 'jy_jue'), 5, ['sdyx_zhenwei', 'sdyx_xiagu'], ['bangpai:jy_taohuadao:jy_gaibang'], { drawer: '画师:佚名', skinLevel: 4 }],
        sdyx_sp_huangrong: ['female', Group('wei', 'jy_song'), 3, ['sdyx_baojia', 'sdyx_wuxing'], ['bangpai:jy_taohuadao:jy_gaibang'], { drawer: '画师:新射雕英雄传', skinLevel: 4 }],
        sdyx_spyinggu: ['female', Group('wei', 'jy_song'), 3, ['sdyx_suanchou', 'sdyx_shushu'], ['bangpai:jy_youxia']],
        sdyx_sphuangyaoshi: ['male', Group('wei', 'jy_song'), 3, ['sdyx_luoying', 'sdyx_bichao'], ['bangpai:jy_taohuadao'], { drawer: '画师:火熊网佚名', skinLevel: 4 }],
        sdyx_yuefei: ['male', Group('shen', 'jy_jue'), 6, ['sdyx_falu', 'sdyx_zhanji', 'sdyx_zhonghun'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 4 }]
      },
      characterIntro: {},
      characterTitle: {
        sdyx_quanjinfa: '闹市侠隐',
        sdyx_yuefei: '精忠报国',
        sdyx_jue_guojing: '守城之殇',
        sdyx_spyinggu: '神算子',
        sdyx_zhucong: '妙手书生',
        sdyx_liping: '家国大义',
        sdyx_shatongtianhoutonghai: '黄河双蛟',
        sdyx_jue_huangshang: '震古烁今',
        sdyx_huazheng: '芳心暗许',
        sdyx_sphuangyaoshi: '碧海潮生',
        sdyx_huangrong: '古灵精怪',
        sdyx_sp_huangrong: '咏絮之才',
        sdyx_meichaofeng: '铁尸',
        sdyx_tuolei: '割袍断义',
        sdyx_tiemuzhen: '天之骄子',
        sdyx_duantiande: '大金走狗',
        sdyx_kezhene: '飞天蝙蝠',
        sdyx_yinggu: '杏殇之痛',
        sdyx_yangkang: '认贼作父',
        sdyx_qiuqianren: '铁掌水上漂',
        sdyx_hongqigong: '九指神丐',
        sdyx_ouyangke: '小毒物',
        sdyx_zhoubotong: '老顽童',
        sdyx_fengheng: '过目不忘',
        sdyx_ouyangfeng: '西毒',
        sdyx_guojing: '侠之大者',
        sdyx_zhebie: '弦无虚发',
        sdyx_huangyaoshi: '东邪',
        sdyx_spguojing: '金刀驸马',
        sdyx_munianci: '浪迹的佳人',
        sdyx_wanyanhonglie: '赵王爷',
        sdyx_duanzhixin: '一灯大师',
        sdyx_qiuchuji: '长春真人',
        sdyx_baoxiruo: '睹物思人'
      },
      perfectPair: {


        //"jyqxz_sdyx_tian":['jyqxz_sdyx_shixing'],
      }, skill: { //射雕英雄标记
        //武眠风 霸天 20240525
        sdyx_renshu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCard1'
          },
          filter(event, player) {
            if (!event.targets || !event.targets.length) return false;
            if (event.player != player) return false;
            const suit = event.card.suit;
            const cards = player.
            getCards('he', function (i) {
              return i.suit == suit;
            }).
            filter((i) => lib.filter.cardDiscardable(i, player, 'sdyx_renshu'));
            if (!cards.length) return false;
            const subtype = get.subtype(event.card);
            return subtype && subtype == 'jy_duyao';
          },
          forced: true,
          content() {
            'step 0';
            const cardResult = trigger.targets.reduce(function (num, target) {
              return num + get.effect(target, trigger.card, trigger.player, player);
            }, 0);
            const taoVcard = trigger.card;
            taoVcard.name = 'tao';
            const wuzhongVcard = trigger.card;
            wuzhongVcard.name = 'wuzhong';
            const taoResult =
            trigger.targets.reduce(function (num, target) {
              return num + get.effect(target, taoVcard, trigger.player, player);
            }, 0) - cardResult;
            const wuzhongResult =
            trigger.targets.reduce(function (num, target) {
              return num + get.effect(target, wuzhongVcard, trigger.player, player);
            }, 0) - cardResult;
            event.taoResult = taoResult;
            event.wuzhongResult = wuzhongResult;
            const next = player.chooseToDiscard(get.prompt2(event.name), 1, 'he', function (card, player) {
              const suitx = _status.event.suitx;
              return card.suit == suitx;
            });
            next.set('suitx', trigger.card.suit);
            next.set('ai', function (card) {
              if (!_status.event.aicheck) return -1;
              return 6 - get.value(card);
            });
            next.set('aicheck', taoResult > 0 || wuzhongResult > 0);
            next.set('complexCard', true);
            'step 1';
            if (result.bool) {
              if (trigger.targets[0].isDamaged()) {
                const next2 = player.chooseControl('tao', 'wuzhong');
                next2.set(
                  'aiResult',
                  function () {
                    if (event.taoResult > event.wuzhongResult) return 'tao';
                    return 'wuzhong';
                  }()
                );
                next2.set('prompt', '仁术:选择要更改的牌名');
                next2.set('ai', function () {
                  return _status.event.aiResult;
                });
              } else {
                event._result = { control: 'wuzhong' };
              }
            } else {
              event.finish();
            }
            'step 2';
            if (result.control) {
              const oldCard = trigger.card;
              trigger.card.name = result.control;
              game.log(oldCard, '改为了', trigger.card);
            }
          }
        },
        sdyx_lingluo: {
          getResult: [
          [0, 0],
          [13, 2],
          [1, 3],
          [2, 4],
          [3, 5],
          [4, 6],
          [5, 7],
          [6, 8],
          [7, 9],
          [8, 10],
          [9, 11],
          [10, 12],
          [11, 13],
          [12, 1]],

          checkNum(cardNumber) {
            return cardNumber >= 1 && cardNumber <= 13;
          },
          group: ['sdyx_lingluo_discard', 'sdyx_lingluo_judge'],
          audio: 'ext:金庸群侠传/peiyin:4',
          subSkill: {
            discard: {
              trigger: {
                global: 'loseAfter'
              },
              filter(event, player) {
                if (!player.countCards('h')) return false;
                if (event.type != 'discard' || event.getlx === false) return false;
                const cards = event.cards.slice(0);
                const evt = event.getl(player);
                if (evt && evt.cards) cards.removeArray(evt.cards);
                return cards.filterInD('od').some(function (i) {
                  const cardNumber = i.number;
                  if (!lib.skill.sdyx_lingluo.checkNum(cardNumber)) return false;
                  if (player.countCards('h', (i) => i.number == cardNumber) > 0) return false;
                  let list = lib.skill.sdyx_lingluo.getResult[cardNumber] || [];
                  return list.some(function (number) {
                    return player.countCards('h', (i) => i.number == number) > 0;
                  });
                });
              },
              forced: true,
              content() {
                'step 0';
                'step 1';
                var cards2 = trigger.cards.slice(0),
                  evt = trigger.getl(player);
                if (evt && evt.cards) cards2.removeArray(evt.cards);
                const togain = cards2.filterInD('od').filter(function (i) {
                  const cardNumber = i.number;
                  if (!lib.skill.sdyx_lingluo.checkNum(cardNumber)) return false;
                  if (player.countCards('h', (i) => i.number == cardNumber) > 0) return false;
                  let list = lib.skill.sdyx_lingluo.getResult[cardNumber] || [];
                  return list.some(function (number) {
                    return player.countCards('h', (i) => i.number == number) > 0;
                  });
                });
                if (togain.length) {
                  const next = player.chooseButton(['零落:选择要获得的牌', togain], [1, togain.length]);
                  next.set('ai', function (button) {
                    return get.value(button.link, _status.event.player, 'raw');
                  });
                  next.set('filterButton', function (button) {
                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                      if (button.link.number == ui.selected.buttons[i].link.number) return false;
                    }
                    return true;
                  });
                  next.set('complexSelect', true);
                } else {
                  event.finish();
                }
                'step 2';
                if (result.links?.length) {
                  player.gain(result.links, 'gain2', 'log');
                  event.goto(0);
                }
              }
            },
            judge: {
              trigger: {
                global: 'cardsDiscardAfter'
              },
              forced: true,
              filter(event, player) {
                if (!player.countCards('h')) return false;
                const evt = event.parent.relatedEvent;
                if (!evt || evt.name != 'judge') return;
                if (evt.player == player) return false;
                return event.cards && event.cards.filterInD('od').some(function (i) {
                  const cardNumber = i.number;
                  if (!lib.skill.sdyx_lingluo.checkNum(cardNumber)) return false;
                  if (player.countCards('h', (i) => i.number == cardNumber) > 0) return false;
                  let list = lib.skill.sdyx_lingluo.getResult[cardNumber] || [];
                  return list.some(function (number) {
                    return player.countCards('h', (i) => i.number == number) > 0;
                  });
                });
              },
              content() {
                'step 0';
                const togain = trigger.cards.filterInD('od').filter(function (i) {
                  const cardNumber = i.number;
                  if (!lib.skill.sdyx_lingluo.checkNum(cardNumber)) return false;
                  if (player.countCards('h', (i) => i.number == cardNumber) > 0) return false;
                  let list = lib.skill.sdyx_lingluo.getResult[cardNumber] || [];
                  return list.some(function (number) {
                    return player.countCards('h', (i) => i.number == number) > 0;
                  });
                });
                if (togain.length) {
                  const next = player.chooseButton(['零落:选择要获得的牌', togain], [1, togain.length]);
                  next.set('ai', function (button) {
                    return get.value(button.link, _status.event.player, 'raw');
                  });
                  next.set('filterButton', function (button) {
                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                      if (button.link.number == ui.selected.buttons[i].link.number) return false;
                    }
                    return true;
                  });
                  next.set('complexSelect', true);
                } else {
                  event.finish();
                }
                'step 1';
                if (result.links?.length) {
                  player.gain(result.links, 'gain2', 'log');
                  event.goto(0);
                }
              }
            }
          }
        },
        sdyx_yiqu: {
          enable: 'phaseUse',
          filterOk() {
            const cards = ui.selected.cards.slice(0);
            const targets = ui.selected.targets.slice(0);
            return cards.length == targets.length;
          },
          filter(event, player) {
            if (game.countPlayer() < 3) return false;
            const cards = player.getCards('h').filter((i) => lib.filter.cardDiscardable(i, player, event));
            if (cards.length < 3) return false;
            for (var i of cards) {
              const cardNumber = i.number;
              const bool1 = cards.some((c) => c.number == cardNumber + 1);
              const bool2 = cards.some((c) => c.number == cardNumber - 1);
              if (bool1 && bool2) return true;
            }
            return false;
          },
          selectCard: [3, Infinity],
          selectTarget() {
            return [3, ui.selected.cards.length];
          },
          complexCard: true,
          complexTarget: true,
          complexSelect: true,
          filterCard(card, player, event) {
            if (!lib.filter.cardDiscardable(card, player, event)) return false;
            const cards = ui.selected.cards.slice(0);
            if (!cards.length) {
              const playerCards = player.getCards('h').filter((i) => lib.filter.cardDiscardable(i, player, event));
              const cardNumber = card.number;
              const bool1 = playerCards.some((c) => c.number == cardNumber + 1);
              const bool2 = playerCards.some((c) => c.number == cardNumber - 1);
              return bool1 && bool2;
            } else if (cards.length == 1) {
              const cardNumber = cards[0].number;
              const bool1 = card.number == cardNumber + 1;
              const bool2 = card.number == cardNumber - 1;
              return bool1 || bool2;
            } else {
              cards.sort(function (a, b) {
                return b.number - a.number;
              });
              const bool1 = card.number == cards[cards.length - 1].number - 1;
              const bool2 = card.number == cards[0].number + 1;
              return bool1 || bool2;
            }
          },
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:4',
          check(card) {
            return 9 - get.value(card);
          },
          filterTarget(card, player, target) {
            const targets = ui.selected.targets.slice(0);
            if (!targets.length) return true;
            if (targets.length == 1) {
              const Tnext = targets[0].next;
              const Tprevious = targets[0].previous;
              return target == Tnext || target == Tprevious;
            } else {
              targets.sort(function (a, b) {
                return a.seatNum - b.seatNum;
              });
              const Tnext = targets[targets.length - 1].next;
              const Tprevious = targets[0].previous;
              return target == Tnext || target == Tprevious;
            }
          },
          content() {
            'step 0';
            const targetCards = target.getCards('he').filter((i) => lib.filter.cardDiscardable(i, target, event.name));
            const next = target.
            chooseToDiscard(2, '是否弃置两张花色相同的牌,否则你随机获得两项负面状态', 'he', function (card, player) {
              const targetCards = _status.event.targetCards;
              const suit = card.suit;
              const bool = targetCards.some((i) => i != card && i.suit == suit);
              if (!bool) return false;
              const cards = ui.selected.cards.slice(0);
              if (!cards.length) return true;
              return suit == cards[0].suit;
            }).
            set('ai', (card) => {
              if (card.name == 'tao') return -10;
              return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
            });
            next.set('complexCard', true);
            next.set('targetCards', targetCards);
            'step 1';
            if (result.bool == false) {
              const list = [];
              const list2 = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5', 'equip6'];
              for (var i of list2) {
                if (target.hasEnabledSlot(i)) list.push(['disableEquip', [i]]);
              }
              if (!target.isLinked()) {
                list.push(['link']);
              }
              if (!target.isTurnedOver()) {
                list.push(['turnOver']);
              }
              get.randomCards(100, function (cardx) {
                if (get.type(cardx, null, false) != 'delay') return false;
                const name = cardx.name;
                if (name == 'jydiy_yungongliaoshang') return false;
                if (!target.canAddJudge({ name: name })) return false;
                list.push(['addJudge', [name, cardx]]);
                return false;
              });
              if (list.length) {
                const item = list.randomGets(2);
                item.forEach(function (add) {
                  if (add.length == 1) {
                    target[add[0]]();
                  } else {
                    target[add[0]](...add[1]);
                  }
                });
              }
            }
          },
          ai: {
            order: 10,
            result: {
              target: -2
            }
          }
        },
        //邪欧阳锋  霸天  20240421
        sdyx_niming: {
          intro: {
            name: '逆',
            content: '第#次进入满体力状态'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: ['changeHp', 'phaseEnd']
          },
          filter(event, player) {
            if (event.name == 'phase') return !player.isHealthy();
            var evt = event.parent;
            if (event.num > 0 && player.isHealthy() && evt.name == 'recover') return true;
            return player.hp <= 0;
          },
          forced: true,
          onremove(player, skill) {
            if (player.hp <= 0) player.dying({});
          },
          content() {
            if (trigger.name == 'phase') {
              player.recover();
              return;
            }
            var evt = trigger.parent;
            if (trigger.num > 0 && player.isHealthy() && evt.name == 'recover') {
              player.addMark('sdyx_niming', 1, false);
              if (player.countMark('sdyx_niming') >= 3) player.die();
              return;
            }
            if (evt.name == 'damage' || evt.name == 'loseHp') evt.nodying = true;
            if (player.isDying()) {
              var evt = event,
                histories = [evt];
              while (true) {
                evt = event.getParent('dying');
                if (!evt || evt.name != 'dying' || histories.includes(evt)) break;
                histories.push(evt);
                if (evt.player == player) evt.nodying = true;
              }
            }
          },
          ai: {
            maixie: true,
            maixie_hp: true,
            maihp: true,
            effect: {
              target(card, player, target, current) {
                const att = get.attitude(player, target);
                if (get.tag(card, 'damage') || get.tag(card, 'loseHp')) {
                  if (att > 0) {
                    return 'zerotarget';
                  } else {
                    return -1;
                  }
                }
                if (get.tag(card, 'recover')) {
                  if (target.hp + 1 == target.maxHp) {
                    if (att > 0) {
                      return 'zeroplayertarget';
                    } else {
                      return -2;
                    }
                  } else {
                    if (att > 0) {
                      return -1;
                    } else {
                      return -0.5;
                    }
                  }
                }
              }
            }
          }
        },
        sdyx_changong: {
          chargeSkill: true,
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return player.countMark('charge') > 0 && Math.max(player.maxHp - player.countCards('h'), 0) > 0;
          },
          usable: 1,
          content() {
            player.drawTo(player.maxHp);
            player.loseCharge(1);
          },
          ai: {
            order: 0.5,
            result: {
              player(player, target) {
                return Math.max(player.maxHp - player.countCards('h'), 0);
              }
            }
          },
          group: ['sdyx_changong_damage', 'sdyx_changong_init', 'sdyx_changong_skip', 'sdyx_changong_recover'],
          subSkill: {
            recover: {
              forced: true,
              trigger: {
                player: 'loseCharge'
              },
              filter(event, player) {
                return !player.countMark('charge') && !player.isHealthy();
              },
              content() {
                player.recover(1);
              }
            },
            skip: {
              trigger: {
                player: 'phaseDiscardBefore'
              },
              check(event, player) {
                return player.needsToDiscard();
              },
              prompt2(event, player) {
                return '消耗1蓄力值跳过弃牌阶段';
              },
              filter(event, player) {
                return player.countMark('charge') > 0;
              },
              content() {
                trigger.cancel();
                player.loseCharge(1);
              }
            },
            damage: {
              trigger: {
                player: 'damageEnd'
              },
              forced: true,
              filter(event, player) {
                var num = Math.min(event.num, 5 - player.countMark('charge'));
                return num > 0;
              },
              content() {
                var num = Math.min(trigger.num, 5 - player.countMark('charge'));
                if (num > 0) player.addCharge(num);
              }
            },
            init: {
              trigger: {
                global: 'phaseBefore',
                player: 'enterGame'
              },
              forced: true,
              filter(event, player) {
                return (event.name != 'phase' || game.phaseNumber == 0) && player.countMark('charge') < 5;
              },
              content() {
                player.addCharge(Math.min(5, 5 - player.countMark('charge')));
              }
            }
          }
        },
        //绝王重阳 - 霸天20230714
        ////七星
        tlbb_wcy_tianshu1: {
          logTarget: 'player',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseBegin'
          },
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          filter(event, player) {
            return player.getStorage('sdxl_candou2').includes(1);
          },
          content() {
            player.unmarkAuto('sdxl_candou2', [1]);
            if (Math.random() <= 0.6) {
              game.log(trigger.player, '执行了额外的摸牌阶段');
              let list = [];
              used = false;
              for (var i of trigger.phaseList) {
                list.push(i);
                if (/phaseDraw/.test(i) && !used) {
                  list.push('phaseDraw|tlbb_wcy_tianshu1');
                  used = true;
                }
              }
              if (!used) list.unshift('phaseDraw|tlbb_wcy_tianshu1');
              trigger.phaseList = list;
            }
          }
        },
        tlbb_wcy_tianxuan3: {
          subSkill: {
            nodamage: {
              charlotte: true,
              name: '免疫',
              marktext: '免',
              intro: {
                content: '免疫$属性伤害'
              },
              trigger: {
                player: 'damageBegin'
              },
              filter(event, player) {
                if (!event.hasNature()) return false;
                return player.getStorage('tlbb_wcy_tianxuan3_nodamage').some((i) => event.hasNature(i));
              },
              forced: true,
              content() {
                trigger.cancel();
              },
              ai: {
                effect: {
                  target(card, player, target, current) {
                    var list = target.getStorage('tlbb_wcy_tianxuan3_nodamage');
                    for (var i of list) {
                      if (game.hasNature(card, i) || get.tag(card, i + 'Damage')) return 'zerotarget';
                    }
                  }
                }
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'damageEnd'
          },
          filter(event, player) {
            if (!player.getStorage('sdxl_candou2').includes(3)) return false;
            if (!event.player.isIn()) return false;
            if (event.player == player) return false;
            if (event.num < 1) return false;
            var list = event.player.getStorage('tlbb_wcy_tianxuan3_nodamage');
            return lib.inpile_nature.some((i) => !list.includes(i));
          },
          forced: true,
          logTarget: 'player',
          content() {
            'step 0';
            var list = trigger.player.getStorage('tlbb_wcy_tianxuan3_nodamage');
            var list2 = lib.inpile_nature.filter((i) => !list.includes(i));
            var list3 = list2.map((i) => ['basic', '', 'sha', i]);
            player.chooseButton([get.prompt('tlbb_wcy_tianxuan3', trigger.player), '令其免疫一种属性伤害', [list3, 'vcard']]).set('ai', function (button) {
              var player = _status.event.player;
              return get.attitude(player, trigger.player);
            });
            'step 1';
            if (result && result.bool && result.links[0]) {
              player.unmarkAuto('sdxl_candou2', [3]);
              trigger.player.addSkill('tlbb_wcy_tianxuan3_nodamage');
              trigger.player.markAuto('tlbb_wcy_tianxuan3_nodamage', [result.links[0][3]]);
            }
          }
        },
        tlbb_wcy_tianji5: {
          logTarget: 'player',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseJudgeBefore'
          },
          check(event, player) {
            if (get.attitude(player, event.player) <= 0) return false;
            return (
              event.player.countCards('j', function (card) {
                return (
                  get.effect(
                    event.player,
                    {
                      name: card.viewAs || card.name,
                      cards: [card]
                    },
                    event.player,
                    event.player
                  ) < 0);

              }) > 0);

          },
          filter(event, player) {
            return player.getStorage('sdxl_candou2').includes(5);
          },
          content() {
            player.unmarkAuto('sdxl_candou2', [5]);
            trigger.cancel();
            game.log(trigger.player, '跳过了', '#y判定阶段');
          }
        },
        tlbb_wcy_tianquan7: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          selectCard: -1,
          filterCard() {
            return false;
          },
          filter(event, player) {
            return player.getStorage('sdxl_candou2').includes(7);
          },
          filterTarget(card, player, target) {
            if (!target.canUse({ name: 'jydiybeidouzhen' }, target)) return false;
            return true;
          },
          content() {
            player.unmarkAuto('sdxl_candou2', [7]);
            var card = get.cardPile(function (cardx) {
              return cardx.name == 'jydiybeidouzhen';
            });
            if (!card) {
              card = game.createCard('jydiybeidouzhen');
              card.setMark('tlbb_wcy_tianquan7', player);
            }
            target.useCard(card, target);
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                if (target.hasEmptySlot('equip2')) return 1;
                return 0;
              }
            }
          }
        },
        tlbb_wcy_yuheng9: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseDiscardBefore'
          },
          logTarget: 'player',
          check(event, player) {
            if (get.attitude(player, event.player) <= 0) return false;
            return event.player.needsToDiscard();
          },
          filter(event, player) {
            if (!player.getStorage('sdxl_candou2').includes(9)) return false;
            return event.player.needsToDiscard();
          },
          content() {
            trigger.cancel();
            game.log(trigger.player, '跳过了', '#y弃牌阶段');
            player.unmarkAuto('sdxl_candou2', [9]);
          }
        },
        tlbb_wcy_kaiyang11: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCardAfter'
          },
          logTarget: 'player',
          check(event, player) {
            if (get.attitude(player, event.player) <= 0) return false;
            if (!event.player.hasSha()) return false;
            if (!lib.filter.cardUsable({ name: 'sha' }, event.player, event.getParent('chooseToUse'))) {
              return event.player.hasValueTarget({ name: 'sha' });
            }
            return false;
          },
          filter(event, player) {
            if (!player.getStorage('sdxl_candou2').includes(11)) return false;
            if (event.addCount === false) return false;
            return event.card && event.card.name == 'sha' && event.player.isPhaseUsing();
          },
          content() {
            trigger.addCount = false;
            trigger.player.getStat().card.sha--;
            player.unmarkAuto('sdxl_candou2', [11]);
          }
        },
        tlbb_wcy_yaoguang13: {
          logTarget: 'player',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseJieshuBegin'
          },
          check(event, player) {
            if (get.attitude(player, event.player) <= 0) return false;
            return true;
          },
          filter(event, player) {
            return player.getStorage('sdxl_candou2').includes(13);
          },
          content() {
            player.unmarkAuto('sdxl_candou2', [13]);
            var gain = get.randomCards(3, function (card) {
              return card.number % 2 == 1;
            });
            if (gain.length) {
              trigger.player.gain(gain, 'log', 'gain2');
            }
          }
        },
        ////技能
        sdxl_candou: {
          group: ['tlbb_wcy_tianshu1', 'tlbb_wcy_tianxuan3', 'tlbb_wcy_tianji5', 'tlbb_wcy_tianquan7', 'tlbb_wcy_yuheng9', 'tlbb_wcy_kaiyang11', 'tlbb_wcy_yaoguang13'],
          resultList: [1, 3, 5, 7, 9, 11, 13],
          init(player, skill) {
            if (!player.storage[skill]) {
              player.storage[skill] = [1, 3, 5, 7, 9, 11, 13];
              player.storage[skill].randomSort();
            }
          },
          mark: true,
          forced: true,
          marktext: '斗',
          intro: {
            name: '北斗',
            name2: '斗',
            content(storage, player) {
              var list1 = player.getStorage('sdxl_candou2');
              var list = storage.map(function (i) {
                if (list1.includes(i)) {
                  return '<span class="bluetext">' + get.strNumber(i) + '</span>';
                } else {
                  return get.strNumber(i);
                }
              });
              return '北斗:蓝色为已经点亮<br>' + get.translation(list);
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCardToPlayered',
            target: 'useCardToTargeted'
          },
          filter(event, player, name) {
            //if(event.player==event.target) return false;
            if (name == 'useCardToPlayered') {
              if (!event.isFirstTarget) return false;
            }
            if (name == 'useCardToTargeted') {
              if (player != event.target) return false;
            }
            var num = event.card.number;
            if (typeof num != 'number') return false;
            if (player.getStorage('sdxl_candou').indexOf(num) == -1) return false;
            if (player.getStorage('sdxl_candou2').includes(num)) return false;
            return true;
          },
          content() {
            var num = trigger.card.number;
            player.markAuto('sdxl_candou2', [num]);
            game.log(player, '点亮了', get.strNumber(num));
          }
        },
        sdxl_xingluo: {
          group: 'sdxl_xingluo2',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            source: 'damageSource',
            player: 'damageEnd'
          },
          filter(event, player) {
            if (event.num < 1) return false;
            var list = player.getStorage('sdxl_candou');
            return [1, 3, 5, 7, 9, 11, 13].some(function (value, index, ar) {
              return value != list[index];
            });
          },
          content() {
            'step 0';
            var list = player.getStorage('sdxl_candou').map(function (i, index) {
              if ([1, 3, 5, 7, 9, 11, 13].indexOf(i) == index) {
                return [i, '<span class="firetext">' + get.strNumber(i) + '</span>'];
              } else {
                return [i, get.strNumber(i)];
              }
            });
            var next = player.chooseButton(['星罗:对换两颗【北斗】的位置', '红色为正确位置的点数', [list, 'tdnodes']]);
            next.set('forced', true);
            next.set('selectButton', [2, 2]);
            next.set('filterButton', function (button) {
              var player = _status.event.player;
              var list = player.getStorage('sdxl_candou');
              if ([1, 3, 5, 7, 9, 11, 13].indexOf(button.link) == list.indexOf(button.link)) return false;
              return true;
            });
            next.set('ai', function (button) {
              if (ui.selected.buttons.length == 0) return 1;
              var player = _status.event.player;
              var list = player.getStorage('sdxl_candou');
              var link = ui.selected.buttons[0].link;
              var index = list.indexOf(button.link);
              if ([1, 3, 5, 7, 9, 11, 13][index] == link) return 10;
              return 1;
            });
            'step 1';
            if (result && result.bool) {
              var list = player.getStorage('sdxl_candou');
              var link1 = result.links[0];
              var link2 = result.links[1];
              var index1 = list.indexOf(link1);
              var index2 = list.indexOf(link2);
              list[index1] = link2;
              list[index2] = link1;
              game.log(player, '交换了', get.strNumber(link2), '和', get.strNumber(link1), '的位置');
            }
          }
        },
        sdxl_xingluo2: {
          filter(event, player) {
            var list = player.getStorage('sdxl_candou').filter(function (i, index) {
              if ([1, 3, 5, 7, 9, 11, 13].indexOf(i) == index) {
                return true;
              } else {
                return false;
              }
            });
            return list.length > 1;
          },
          audio: 'sdxl_xingluo',
          trigger: {
            player: 'phaseDrawBegin1'
          },
          content() {
            'step 0';
            var list = player.getStorage('sdxl_candou').filter(function (i, index) {
              if ([1, 3, 5, 7, 9, 11, 13].indexOf(i) == index) {
                return true;
              } else {
                return false;
              }
            });
            var cards = get.cards(list.length * 2);
            game.cardsGotoOrdering(cards);
            var next = player.chooseToMove('【星罗】:请选择排序牌堆顶的牌', true);
            next.set('list', [['牌堆顶', cards]]);
            next.set('filterMove', function (from, to, moved) {
              return true;
            });
            next.set('processAI', function (list) {
              var cards = list[0][1].slice(0).sort(function (a, b) {
                return get.value(b) - get.value(a);
              });
              return [cards];
            });
            'step 1';
            var top = result.moved[0];
            top.reverse();
            for (var i = 0; i < top.length; i++) {
              ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
            }
            game.updateRoundNumber();
          }
        },
        sdxl_tiangang2: {
          marktext: '罡',
          intro: {
            name: '天罡',
            name2: '罡',
            content: '摸牌阶段摸牌基数改为7'
          },
          mark: true,
          audio: 'sdxl_tiangang',
          trigger: {
            player: 'phaseDrawBefore'
          },
          forced: true,
          popup: false,
          nopop: true,
          charlotte: true,
          filter(event, player) {
            return !event.numFixed;
          },
          content() {
            trigger.num = 7;
          }
        },
        sdxl_tiangang: {
          derivation: ['tlbb_wcy_tianshu1', 'tlbb_wcy_tianxuan3', 'tlbb_wcy_tianji5', 'tlbb_wcy_tianquan7', 'tlbb_wcy_yuheng9', 'tlbb_wcy_kaiyang11', 'tlbb_wcy_yaoguang13'],
          juexingji: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'sdxl_xingluoEnd'
          },
          filter(event, player) {
            if (player.storage.sdxl_tiangang) return false;
            return !player.getStorage('sdxl_candou').some(function (i, index) {
              if ([1, 3, 5, 7, 9, 11, 13].indexOf(i) != index) {
                return true;
              } else {
                return false;
              }
            });
          },
          forced: true,
          content() {
            player.awakenSkill(event.name);
            player.storage[event.name] = true;
            if (player.maxHp > 7) {
              player.loseMaxHp(player.maxHp - 7)._triggered = 2;
            } else if (player.maxHp < 7) {
              player.gainMaxHp(7 - player.maxHp)._triggered = 2;
            }
            player.addSkill('sdxl_tiangang2');
            player.removeSkill('sdxl_xingluo');
          }
        },
        sdxl_ziwei: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'sdxl_candouEnd'
          },
          mark: true,
          limited: true,
          forced: true,
          init(player, skill) {
            player.storage[skill] = false;
          },
          filter(event, player) {
            if (player.storage.sdxl_ziwei) return false;
            return player.getStorage('sdxl_candou2').length >= 7;
          },
          content() {
            'step 0';
            player.awakenSkill(event.name);
            player.storage[event.name] = true;
            var gain = get.randomCards(7, function (card) {
              return card.number == 7;
            });
            if (gain.length) {
              player.gain(gain, 'log', 'gain2');
            } else game.log('牌堆没有点数为7的牌了!');
          },
          intro: {
            content: 'limited'
          }
        },
        //马钰道长-霸天20230615
        sdyx_anshou_new: {
          subSkill: {
            disable: {
              charlotte: true,
              mark: true,
              intro: {
                content: '本轮已发动'
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            global: 'useCard2'
          },
          shaRelated: true,
          check(event, player) {
            var distance = 0;
            event.targets.filter(function (i) {
              var dis = get.distance(event.player, i);
              if (dis > distance) distance = dis;
            });
            var att = get.attitude(player, event.player) > 0;
            var bool = game.hasPlayer(function (current) {
              if (event.targets.includes(current)) return false;
              if (!event.player.inRange(current)) return false;
              if (get.distance(event.player, current) <= distance) return false;
              if (!event.player.canUse(event.card, current)) return false;
              return get.effect(current, event.card, event.player, event.player) > 0;
            });
            if (att) return bool;
            return !bool;
          },
          filter(event, player) {
            if (player.hasSkill('sdyx_anshou_new_disable')) return false;
            if (event.card.name != 'sha') return false;
            var distance = 0;
            event.targets.filter(function (i) {
              var dis = get.distance(event.player, i);
              if (dis > distance) distance = dis;
            });
            return game.hasPlayer(function (current) {
              if (event.targets.includes(current)) return false;
              if (!event.player.inRange(current)) return false;
              if (get.distance(event.player, current) <= distance) return false;
              if (!event.player.canUse(event.card, current)) return false;
              return true;
            });
          },
          logTarget: 'player',
          content() {
            'step 0';
            player.addTempSkill('sdyx_anshou_new_disable', 'roundStart');
            var distance = 0;
            trigger.targets.filter(function (i) {
              var dis = get.distance(trigger.player, i);
              if (dis > distance) distance = dis;
            });
            trigger.player.
            chooseTarget(true, '暗授:为' + get.translation(trigger.card) + '增加一到三个目标', [1, 3], function (card, player, target) {
              var trigger = _status.event;
              if (trigger.targets.includes(target)) return false;
              if (!trigger.player.inRange(target)) return false;
              if (get.distance(trigger.player, target) <= trigger.distancex) return false;
              if (!trigger.player.canUse(trigger.card, target)) return false;
              return true;
            }).
            set('targets', trigger.targets).
            set('ai', function (target) {
              var trigger = _status.event;
              return get.effect(target, trigger.card, trigger.player, trigger.player);
            }).
            set('card', trigger.card).
            set('distancex', distance);
            'step 1';
            if (result.targets?.length) {
              event.targets = result.targets;
            } else {
              event.finish();
            }
            'step 2';
            if (trigger.cards.length && !trigger.card.isCard) {
              game.log(event.targets, '额外成为了', trigger.card, '(', trigger.cards, ')', '的目标');
            } else {
              game.log(event.targets, '额外成为了', trigger.card, '的目标');
            }
            trigger.player.line(event.targets);
            trigger.targets.addArray(event.targets);
          },
          ai: {
            effect: {
              player(card, player, target, current, isLink) {
                if (player.hasSkill('sdyx_anshou_new_disable')) return;
                var evt = _status.event.parent;
                if (evt.name == 'sdyx_anshou_new') return;
                if (!isLink && card.name == 'sha') {
                  if (player._sdyx_anshou_new) return;
                  player._sdyx_anshou_new = true;
                  if (get.effect(target, card, player, player) <= 0) {
                    delete player._sdyx_anshou_new;
                    return;
                  }
                  if (
                  game.hasPlayer(function (current) {
                    if (current == target) return false;
                    if (!player.inRange(current)) return false;
                    if (get.distance(player, current) <= get.distance(player, target)) return false;
                    if (!player.canUse(card, current)) return false;
                    return get.effect(current, card, player, player) > 0;
                  }))
                  {
                    delete player._sdyx_anshou_new;
                    return [1, 1];
                  }
                  delete player._sdyx_anshou_new;
                }
              }
            }
          }
        },
        sdyx_yunyou_new: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            player: 'phaseJieshuBegin'
          },
          forced: true,
          ai: {
            effect: {
              player(card, player, target, current, isLink) {
                if (player != _status.currentPhase) return;
                if (!isLink) {
                  if (player._sdyx_yunyou_new) return;
                  player._sdyx_yunyou_new = true;
                  var order = get.order(card);
                  delete player._sdyx_yunyou_new;
                  if (order !== 11) return;
                  //if(!lib.skill.sdyx_yunyou_new.filter(null,player)) return;
                  var history = player.getHistory('useCard', function (evt) {
                    return evt.isPhaseUsing() && evt.targets && evt.targets.length == 1;
                  });
                  var distance = -1;
                  var bool = true;
                  for (var i of history) {
                    var dis = get.distance(player, i.targets[0]);
                    if (dis > distance) {
                      distance = dis;
                    } else {
                      bool = false;
                      break;
                    }
                  }
                  if (!bool) return;
                  if (get.distance(player, target) > distance) {
                    return [1, 3];
                  } else {
                    return 'zeroplayertarget';
                  }
                }
              }
            }
          },
          mod: {
            aiOrder(player, card, num) {
              if (player != _status.currentPhase) return num;
              if (typeof card != 'object') return num;
              var targets = game.filterPlayer(function (current) {
                return lib.filter.filterTarget(card, player, current);
              });
              if (!targets.length) return 1;
              var range = lib.filter.selectTarget(card, player);
              var targets2 = targets.filter(function (i) {
                return get.effect(i, card, player, player) > 0;
              });
              if (range[0] == -1) {
                if (targets.length == 1 && targets2.length == 1) return 11;
                return 1;
              } else {
                if (!targets2.length) return 1;
                if (targets2.length <= range[1] && targets2.length == 1) return 11;
                return 1;
              }
            }
          },
          filter(event, player) {
            var history = player.getHistory('useCard', function (evt) {
              return evt.isPhaseUsing() && evt.targets && evt.targets.length == 1;
            });
            if (history.length < 2) return false;
            var distance = -1;
            var bool = true;
            for (var i of history) {
              var dis = get.distance(player, i.targets[0]);
              if (dis > distance) {
                distance = dis;
              } else {
                bool = false;
                break;
              }
            }
            return bool;
          },
          content() {
            var history = player.getHistory('useCard', function (evt) {
              return evt.isPhaseUsing() && evt.targets && evt.targets.length == 1;
            });
            player.draw(history.length);
          }
        },
        //傻姑-20220909霸天
        //新技能
        sdyx_qianchen: {
          group: 'sdyx_qianchen_dying',
          subSkill: {
            dying: {
              trigger: {
                global: 'dying'
              },
              logTarget: 'source',
              check(event, player) {
                return get.damageEffect(event.source, player, player, 'jy_du') > 0;
              },
              filter(event, player) {
                if (_status.locked_jy_changjin != 'jycj_tieqiangmiao') return false;
                if (player.storage.sdyx_qianchen) return false;
                return event.source && event.source != player;
              },
              content() {
                trigger.source.damage(1, 'jy_du', 'nocard', 'nosource');
                var next = game.createEvent('zhuque_clear');
                next.player = trigger.source;
                next.target = trigger.player;
                event.next.remove(next);
                trigger.after.push(next);
                next.setContent(function () {
                  if (target.isDead()) player.turnOver(true);
                });
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseUseBegin'
          },
          filter(event, player) {
            var storage = player.storage.sdyx_qianchen;
            return true;
          },
          content() {
            player.changeZhuanhuanji(event.name);
            const storage = player.storage.sdyx_qianchen;
            if (storage) {
              _status.locked_jy_changjin = 'jycj_tiejiangpu';
              var next = game.createEvent('_jy_changjin', false);
              next.setContent(lib.skill._jy_changjin.content);
            } else {
              _status.locked_jy_changjin = 'jycj_tieqiangmiao';
              var next = game.createEvent('_jy_changjin', false);
              next.setContent(lib.skill._jy_changjin.content);
            }
          },
          zhuanhuanji: true,
          forced: true,
          mark: true,
          marktext: '☯',
          intro: {
            content(storage, player) {
              if (storage) return '转换技.阳:铁匠铺';
              return '转换技.阴:铁枪庙,在此场景下,当有角色令另一名目标进入濒死状态时,你可令来源受到点无来源的蛊毒伤害,若目标死亡,你可再令来源翻面(若死亡的是你,仍可以发动) ';
            }
          }
        },
        sdyx_wuyou: {
          intro: {
            content(storage, player) {
              var storage = player.storage.sdyx_wuyou;
              let str = '';
              if (storage.basic) {
                str += '【' + get.translation(storage.basic) + '】';
              }
              if (storage.trick) {
                str += '【' + get.translation(storage.trick) + '】';
              }
              return str;
            },
            mark(dialog, storage, player) {
              var storage = player.storage.sdyx_wuyou;
              var vcards = [];
              if (storage.basic) {
                vcards.push(['基本', '', storage.basic]);
                if (storage.basic == 'sha') {
                  for (var i of lib.inpile_nature) {
                    vcards.push(['基本', '', 'sha', i]);
                  }
                }
              }
              if (storage.trick) {
                vcards.push(['锦囊', '', storage.trick]);
              }
              dialog.addAuto([vcards, 'vcard']);
            },
            markcount(storage, player) {
              return 0;
            }
          },
          mod: {
            targetInRange(card) {
              if (card.sdyx_wuyou) return true;
            },
            cardUsable(card) {
              if (card.sdyx_wuyou) return Infinity;
            }
          },
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          init(player, skill) {
            if (!player.storage[skill]) {
              player.storage[skill] = {
                basic: null,
                trick: null
              };
            }
          },
          filter(event, player) {
            const storage = player.storage.sdyx_wuyou;
            if (storage.basic && !player.hasSkill('sdyx_wuyou_basic')) {
              if (event.filterCard && event.filterCard({ name: storage.basic, sdyx_wuyou: true }, player, event)) return true;
              if (storage.basic == 'sha') {
                for (var i of lib.inpile_nature) {
                  if (event.filterCard && event.filterCard({ name: 'sha', nature: i, sdyx_wuyou: true }, player, event)) {
                    return true;
                  }
                }
              }
            }
            if (storage.trick && !player.hasSkill('sdyx_wuyou_trick')) {
              if (event.filterCard && event.filterCard({ name: storage.trick, sdyx_wuyou: true }, player, event)) return true;
            }
            return false;
          },
          chooseButton: {
            dialog(event, player) {
              var vcards = [];
              const storage = player.storage.sdyx_wuyou;
              if (storage.basic && !player.hasSkill('sdyx_wuyou_basic')) {
                if (event.filterCard && event.filterCard({ name: storage.basic, sdyx_wuyou: true }, player, event)) {
                  vcards.push(['基本', '', storage.basic]);
                  if (storage.basic == 'sha') {
                    for (var i of lib.inpile_nature) {
                      if (event.filterCard && event.filterCard({ name: 'sha', nature: i, sdyx_wuyou: true }, player, event)) {
                        vcards.push(['基本', '', 'sha', i]);
                      }
                    }
                  }
                }
              }
              if (storage.trick && !player.hasSkill('sdyx_wuyou_trick')) {
                if (event.filterCard && event.filterCard({ name: storage.trick, sdyx_wuyou: true }, player, event)) {
                  vcards.push(['锦囊', '', storage.trick]);
                }
              }
              var dialog = ui.create.dialog('无忧', [vcards, 'vcard'], 'hidden');
              return dialog;
            },
            backup(links, player) {
              return {
                filterCard() {
                  return false;
                },
                selectCard: [-1, -1],
                viewAs: {
                  name: links[0][2],
                  sdyx_wuyou: true
                },
                ignoreMod: true,
                popname: true,
                precontent() {
                  event.parent.addCount = false;
                  player.addTempSkill('sdyx_wuyou_' + get.type(event.result.card));
                }
              };
            },
            prompt(links, player) {
              return '无忧:视为使用一张' + get.translation(links[0][3] || '') + '【' + get.translation(links[0][2]) + '】';
            }
          },
          ai: {
            order(item, player) {
              var player = _status.event.player;
              var event = _status.event;
              const orders = [];
              const storage = player.storage.sdyx_wuyou;
              if (storage.basic && !player.hasSkill('sdyx_wuyou_basic')) {
                if (event.filterCard && event.filterCard({ name: storage.basic, sdyx_wuyou: true }, player, event)) orders.push({ name: storage.basic, sdyx_wuyou: true });
                if (storage.basic == 'sha') {
                  for (var i of lib.inpile_nature) {
                    if (event.filterCard && event.filterCard({ name: 'sha', nature: i, sdyx_wuyou: true }, player, event)) {
                      orders.push({ name: 'sha', nature: i, sdyx_wuyou: true });
                    }
                  }
                }
              }
              if (storage.trick && !player.hasSkill('sdyx_wuyou_trick')) {
                if (event.filterCard && event.filterCard({ name: storage.trick, sdyx_wuyou: true }, player, event)) orders.push({ name: storage.trick, sdyx_wuyou: true });
              }
              let orders2 = orders.filter((i) => player.getUseValue(i) > 0).map((i) => get.order(i, player));
              orders2.push(0);
              return Math.max(...orders2);
            },
            result: {
              player: 1
            }
          },
          group: ['sdyx_wuyou_roundStart', 'sdyx_wuyou_useCard'],
          subSkill: {
            roundStart: {
              trigger: {
                global: 'roundStart'
              },
              charlotte: true,
              forced: true,
              popup: false,
              content() {
                player.storage.sdyx_wuyou = {
                  basic: null,
                  trick: null
                };
                player.unmarkSkill('sdyx_wuyou');
              }
            },
            useCard: {
              trigger: {
                global: 'useCard'
              },
              filter(event, player) {
                const type = get.type(event.card);
                if (type != 'basic' && type != 'trick') return false;
                return !player.storage.sdyx_wuyou[type];
              },
              charlotte: true,
              forced: true,
              popup: false,
              content() {
                const type = get.type(trigger.card);
                player.storage.sdyx_wuyou[type] = trigger.card.name;
                player.markSkill('sdyx_wuyou');
              }
            },
            basic: {
              mark: true,
              intro: {
                content: '已视为使用基本牌'
              },
              charlotte: true
            },
            trick: {
              mark: true,
              intro: {
                content: '已视为使用锦囊牌'
              },
              charlotte: true
            }
          }
        },
        //旧版傻姑技能 【泄密】
        sdyx_xiemi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'loseAfter',
            global: 'loseAsyncAfter'
          },
          filter(event, player) {
            if (event.type != 'discard' || event.getlx === false) return false;
            var evt = event.getl(player);
            if (!evt || !evt.cards2) return false;
            for (var i = 0; i < evt.cards2.length; i++) {
              if (get.position(evt.cards2[i]) == 'd' && get.type2(evt.cards2[i]) == 'trick') {
                return true;
              }
            }
            return false;
          },
          forced: true,
          preHidden: true,
          usable: 1,
          content() {
            'step 0';
            event.cards = [];
            var cards2 = trigger.getl(player).cards2;
            for (var i = 0; i < cards2.length; i++) {
              if (get.position(cards2[i], true) == 'd' && get.type2(cards2[i]) == 'trick') {
                event.cards.push(cards2[i]);
              }
            }
            if (_status.connectMode)
            game.broadcastAll(function () {
              _status.noclearcountdown = true;
            });
            event.given_map = {};
            'step 1';
            var goon = false;
            if (Array.isArray(event.cards)) for (var i of event.cards) {
              if (i.name == 'du') {
                goon = true;
                break;
              }
            }
            if (!goon) {
              goon = game.hasPlayer(function (current) {
                return player != current && get.attitude(player, current) > 1;
              });
            }
            player.
            chooseButton(['泄密:是否分配本次弃置的锦囊牌？', event.cards], [1, event.cards.length]).
            set('ai', function (button) {
              if (_status.event.goon && ui.selected.buttons.length == 0) return 1 + Math.abs(get.value(button.link));
              return 0;
            }).
            set('goon', goon).
            setHiddenSkill('sdyx_xiemi');
            'step 2';
            if (result.links?.length) {
              event.cards.removeArray(result.links);
              event.togive = result.links.slice(0);
              player.
              chooseTarget('选择一名其他角色获得' + get.translation(result.links), true, lib.filter.notMe).
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
            } else event.goto(4);
            'step 3';
            if (result.targets.length) {
              var id = result.targets[0].playerid,
                map = event.given_map;
              if (!map[id]) map[id] = [];
              map[id].addArray(event.togive);
            }
            if (cards.length) event.goto(1);
            'step 4';
            if (_status.connectMode) {
              game.broadcastAll(function () {
                delete _status.noclearcountdown;
                game.stopCountChoose();
              });
            }
            var list = [],
              targets = [];
            for (var i in event.given_map) {
              var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
              list.push([source, event.given_map[i]]);
              targets.push(source);
            }
            if (targets.length) {
              game.loseAsync({
                gain_list: list,
                giver: player,
                animate: 'gain2'
              }).setContent('gaincardMultiple');
            } else {
              player.getStat('triggerSkill').sdyx_xiemi--;
            }
          },
          ai: {
            expose: 0.1,
            effect: {
              target(card, player, target, current) {
                if (target.getStat('triggerSkill').sdyx_xiemi) return;
                if (target.hasFriend() && get.tag(card, 'discard')) {
                  if (current < 0) return 0;
                  return [1, 1];
                }
              }
            }
          }
        },
        //旧版傻姑技能[痴傻]
        sdyx_chisha: {
          mod: {
            aiValue(player, card, num) {
              if (get.type2(card) == 'trick') return 0;
              return num;
            },
            aiUseful(player, card, num) {
              if (get.type2(card) == 'trick') return 0;
              return num;
            },
            cardEnabled(card, player) {
              if (get.type2(card) == 'trick') return false;
            },
            cardSavable(card, player) {
              if (get.type2(card) == 'trick') return false;
            },
            ignoredHandcard(card, player) {
              if (get.type2(card) == 'trick') {
                return true;
              }
            },
            cardDiscardable(card, player, name) {
              if (name == 'phaseDiscard' && get.type2(card) == 'trick') return false;
            }
          },
          trigger: {
            target: 'useCardToTargeted'
          },
          forced: true,
          filter(event, player) {
            return get.type(event.card) == 'trick' && event.targets.length == 1;
          },
          content() {
            'step 0';
            var guohe = trigger.card;
            var wuzhong = trigger.card;
            guohe.name = 'guohe';
            wuzhong.name = 'wuzhong';
            var list = [];
            if (lib.filter.targetEnabled2(guohe, trigger.player, player) && trigger.card.name != 'guohe') {
              list.push('guohe');
            }
            if (lib.filter.targetEnabled2(wuzhong, trigger.player, player) && trigger.card.name != 'wuzhong') {
              list.push('wuzhong');
            }
            event.listName = list;
            var eff1 = get.effect(player, guohe, trigger.player, trigger.player);
            var eff2 = get.effect(player, wuzhong, trigger.player, trigger.player);
            if (list.length == 2) {
              trigger.player.
              chooseControl('guohe', 'wuzhong', function (event, player) {
                if (eff1 > eff2) return 'guohe';
                return 'wuzhong';
              }).
              set('prompt', '痴傻:将' + get.translation(trigger.card) + '改为【见招拆招】或【无极而生】');
              event.goto(2);
            } else if (list.length == 1) {
              if (trigger.card.name != 'guohe' && trigger.card.name != 'wuzhong') {
                event._result = { control: list[0] };
                event.goto(2);
              } else {
                var value = eff1 - eff2;
                if (list[0] == 'wuzhong') value = -value;
                trigger.player.chooseBool('是否将' + get.translation(trigger.card) + '改为【' + get.translation(list[0]) + '】').ai = function () {
                  return value > 0;
                };
              }
            } else {
              event.finish();
            }
            'step 1';
            if (result.bool) {
              event._result = { control: event.listName[0] };
            } else {
              event.finish();
            }
            'step 2';
            if (result.control) {
              var oldcard = trigger.card;
              trigger.card.name = result.control;
              game.log(oldcard, '改为了', trigger.card);
            }
          }
        },
        //旧无忧
        sdyx_wuyou_old: {
          enable: 'phaseUse',
          audio: 'sdyx_wuyou',
          usable: 1,
          position: 'h',
          filterCard(card, player) {
            return get.type2(card) == 'trick' && player.canRecast(card);
          },
          filter(event, player) {
            if (!player.countCards('h', (i) => get.type2(i) == 'trick' && player.canRecast(i))) return false;
            return true;
          },
          discard: false,
          lose: false,
          delay: false,
          selectCard: [-1, -1],
          check(card) {
            var player = _status.event.player;
            return 1;
            //return 6-get.value(card)
          },
          content() {
            'step 0';
            player.recast(cards);
            event.listName = cards.map((i) => i.name);
            event.targets = game.filterPlayer((i) => i != player).sortBySeat();
            event.boolSkip = false;
            'step 1';
            if (event.targets.length) {
              var target = event.targets.shift();
              if (!target.isIn()) {
                event.redo();
                return;
              }
              target.addTempClass('target');
              player.line(target);
              var dis = target.getCards('h', function (cardx) {
                if (!event.listName.includes(cardx.name)) return false;
                return lib.filter.cardDiscardable(cardx, target, event.name);
              });
              if (dis.length) {
                target.discard(dis);
              } else {
                event.boolSkip = true;
              }
              event.redo();
            }
            'step 2';
            if (event.boolSkip) {
              player.skip('phaseDiscard');
              game.log(player, '跳过了', '#g弃牌阶段');
            }
          },
          ai: {
            order: 1,
            result: {
              player(player, target) {
                var playerCards = player.getCards('h', (i) => get.type2(i) == 'trick' && player.canRecast(i));
                var names = playerCards.map((i) => i.name);
                var num = 0;
                var targets = game.filterPlayer((i) => i != player);
                targets.filter(function (i) {
                  var sgn = get.sgn(get.attitude(player, i));
                  var count =
                  i.countCards('h', function (cardx) {
                    if (names.indexOf(cardx.name) == -1) return false;
                    return lib.filter.cardDiscardable(cardx, i, 'sdyx_wuyou_old');
                  }) * sgn;
                  num += count;
                });
                return num + 0.5;
              }
            },
            threaten: 1.2
          }
        },
        sdyx_lianfa: {
          subSkill: {
            backup: {
            }
          },
          marktext: '伐',
          intro: {
            content: 'expansion',
            markcount: 'expansion'
          },
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          },
          enable: 'phaseUse',
          usable: 3,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return player.getExpansions('sdyx_lianfa').length;
          },
          chooseButton: {
            dialog(event, player) {
              return ui.create.dialog('联伐', player.getExpansions('sdyx_lianfa'), 'hidden');
            },
            filter(button, player) {
              var player = _status.event.player;
              var color = get.color(button.link, false);
              var name = color == 'red' ? 'wanjian' : 'nanman';
              return player.hasUseTarget({ name: name });
            },
            check(button) {
              var player = _status.event.player;
              var color = get.color(button.link, false);
              var suit = button.link.suit;
              var name = color == 'red' ? 'wanjian' : 'nanman';
              if (player.getUseValue({ name: name }) < 0) return -1;
              var bool = game.hasPlayer(function (current) {
                if (current == player) return false;
                if (get.attitude(current, player) < 0) return false;
                return (
                  current.countCards('h', function (card) {
                    if (card.suit != suit) return false;
                    if (get.value(card, current) > 5) return false;
                    return lib.filter.cardDiscardable(card, current, 'sdyx_lianfa_backup');
                  }) > 0);

              });
              return bool ? 1 : -1;
            },
            backup(links, player) {
              return {
                audio: 'sdyx_lianfa',
                filterTarget(card, player, target) {
                  return player != target && target.countCards('h');
                },
                filterCard() {
                  return false;
                },
                selectCard: -1,
                card: links[0],
                delay: false,
                content: lib.skill.sdyx_lianfa.contentx,
                ai: {
                  order: 10,
                  result: {
                    target(player, target) {
                      var cardx = lib.skill.sdyx_lianfa_backup.card;
                      var suit = cardx.suit;
                      var color = get.color(cardx, false);
                      var name = color == 'red' ? 'wanjian' : 'nanman';
                      if (player.getUseValue({ name: name }) < 0) return 0;
                      var bool =
                      target.countCards('h', function (card) {
                        if (card.suit != suit) return false;
                        if (get.value(card, target) > 5) return false;
                        return lib.filter.cardDiscardable(card, target, 'sdyx_lianfa_backup');
                      }) > 0;
                      return bool ? 1 : 0;
                    }
                  }
                }
              };
            },
            prompt() {
              return '请选择〖联伐〗的目标';
            }
          },
          contentx() {
            'step 0';
            var card = lib.skill.sdyx_lianfa_backup.card;
            player.loseToDiscardpile(card);
            var suit = card.suit;
            var att = get.attitude(target, player);
            var color = get.color(card, false);
            var name = color == 'red' ? 'wanjian' : 'nanman';
            event.useName = name;
            if (player.getUseValue({ name: name }) < 0) att = -att;
            var func = function (card) {
              var evt = _status.event;
              if (card.suit != evt.suitx) return false;
              return true;
            };
            var str = '是否弃置一张' + get.translation(suit) + '手牌,令' + get.translation(player) + '视为使用一张' + get.translation(name) + '？';
            target.
            chooseToDiscard(func, 'h', 1, str).
            set('ai', function (card) {
              var evt = _status.event;
              if (evt.attx < 0) return -1;
              return 5.5 - get.value(card);
            }).
            set('attx', att).
            set('suitx', suit);
            'step 1';
            if (result.bool) {
              if (player.hasUseTarget({ name: event.useName })) {
                var card = {
                  name: event.useName
                };
                player.chooseUseTarget(card, true, false);
              }
            }
          },
          ai: {
            order: 1,
            combo: 'sdyx_wonan',
            result: {
              player(player) {
                var cards = player.getExpansions('sdyx_lianfa');
                var bool = cards.some(function (i) {
                  var color = get.color(i, false);
                  var suit = i.suit;
                  var name = color == 'red' ? 'wanjian' : 'nanman';
                  if (player.getUseValue({ name: name }) < 0) return false;
                  var bool = game.hasPlayer(function (current) {
                    if (current == player) return false;
                    if (get.attitude(current, player) < 0) return false;
                    return (
                      current.countCards('h', function (card) {
                        if (card.suit != suit) return false;
                        if (get.value(card, current) > 5) return false;
                        return lib.filter.cardDiscardable(card, current, 'sdyx_lianfa_backup');
                      }) > 0);

                  });
                });
                return bool ? 1 : -1;
              }
            }
          }
        },
        sdyx_wonan: {
          subSkill: {
            jydiyhanxuebaoma: {
              mark: true,
              equipSkill: true,
              nopop: true,
              charlotte: true,
              marktext: '马',
              intro: {
                name: '马',
                content: '视为永久装备【汗血宝马】'
              },
              name: '汗血宝马',
              mod: {
                globalFrom(from, to, current) {
                  if (from.hasEmptySlot(4)) return current - 1;
                }
              }
            },
            jydiy_shediaowangong_skill: {
              mark: true,
              name: '射雕弯弓',
              nopop: true,
              charlotte: true,
              marktext: '弓',
              intro: {
                name: '弓',
                content: '视为永久装备【射雕弯弓】'
              },
              mod: {
                attackRange(from, distance) {
                  if (from.hasEmptySlot(1)) return distance + 4;
                }
              },
              audio: 'jydiy_shediaowangong_skill',
              equipSkill: true,
              noHidden: true,
              inherit: 'jydiy_shediaowangong_skill',
              filter(event, player) {
                if (!lib.skill.jydiy_shediaowangong_skill.filter(event, player)) return false;
                if (!player.hasEmptySlot(1)) return false;
                return true;
              },
              ai: {
                effect: {
                  target(card, player, target) {
                    if (!target.hasEmptySlot(1)) return;
                    if (player == target && get.subtype(card) == 'equip1') {
                      if (get.equipValue(card) <= 7.5) return 0;
                    }
                  }
                }
              }
            }
          },
          intro: {
            content: 'limited'
          },
          mark: true,
          limited: true,
          init(player, skill) {
            player.storage[skill] = false;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filter(event, player) {
            if (player.countCards('h') < 3) return false;
            return game.hasPlayer(function (current) {
              return current != player && current.countCards('h') >= 3 && player.canCompare(current);
            });
          },
          filterTarget(card, player, current) {
            return current != player && current.countCards('h') >= 3 && player.canCompare(current);
          },
          content() {
            'step 0';
            player.awakenSkill(event.name);
            player.storage[event.name] = true;
            event.count = 0;
            event.strList = ['是否令『草原雕』成为你的副将(回合结束时离开你的几率为0%) ？否则『双雕』成为你的副将(回合结束时离开你的几率为0%).对方则为另一个选项', '是否视为永久装备【射雕弯弓】?否则视为永久装备【汗血宝马】!对方则为另一个选项', '是否获得技能〖戎马〗？否则获得技能〖南伐〗!对方则为另一个选项'];
            'step 1';
            event.count += 1;
            if (player.canCompare(target)) {
              player.chooseToCompare(target);
            } else {
              event._result = { bool: false, tie: true };
            }
            'step 2';
            if (result && !result.tie) {
              if (result.bool) {
                event.playerx = player;
                event.playerxCard = result.player;
                event.targetx = target;
                event.targetxCard = result.target;
              } else {
                event.playerx = target;
                event.playerxCard = result.target;
                event.targetx = player;
                event.targetxCard = result.player;
              }
              if (get.position(event.playerxCard) == 'd') {
                player.addToExpansion(event.playerxCard, 'gain2', 'log').gaintag.add('sdyx_lianfa');
              }
              var str = event.strList[event.count - 1];
              event.playerx.chooseBool(str).set('ai', function () {
                return Math.random() < 0.5 ? true : false;
              });
            } else {
              event.goto(1);
            }
            'step 3';
            event.gained = [event.playerx, event.targetx];
            if (!result.bool) event.gained = [event.targetx, event.playerx];
            if (event.count == 1) {
              lib.card.jycw_baishoujinglin.gainChongWu(event.gained[0], 'jycw_caoyuandiao');
              event.gained[0].storage.jycw_caoyuandiao = true;
              lib.card.jycw_baishoujinglin.gainChongWu(event.gained[1], 'jycw_shuangdiao');
              event.gained[1].storage.jycw_shuangdiao = true;
              event.goto(1);
            } else if (event.count == 2) {
              event.gained[0].addSkill(event.name + '_jydiy_shediaowangong_skill');
              event.gained[1].addSkill(event.name + '_jydiyhanxuebaoma');
              event.goto(1);
            } else if (event.count == 3) {
              event.gained[0].addSkills('sdyx_rongma');
              event.gained[1].addSkills('jy_dalu');
            }
            'step 4';
            player.line(target, 'green');
            game.log(target, '成为了', '【割袍】', '的目标');
            player.storage.sdyx_gepao_two = target;
            player.addSkill('sdyx_gepao_two');
            player.loseHp();
            target.loseHp();
            game.asyncDraw([player, target], 2);
          }
        },
        //窝阔台-霸天
        sdyx_canshi: {
          trigger: { global: ['dieAfter', 'changeGroupEnd'] },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          filter(event, player) {
            var evt = event.getParent('phase');
            if (!evt) return false;
            var group;
            if (event.name == 'die') {
              group = event.player.group;
            } else {
              group = event.originGroup;
            }
            if (!lib.group.includes(group)) return false;
            if (
            game.hasPlayer(function (current) {
              return current.group == group;
            }))
            {
              return false;
            }
            return true;
          },
          content() {
            var num = 3;
            if (trigger.source) {
              var list = lib.jy_isMengGu.slice(0);
              var bool = list.some(function (name) {
                if (trigger.source.name == name) return true;
                if (trigger.source.name1 == name) return true;
                if (trigger.source.name2 == name) return true;
                return false;
              });
              if (bool) num = 5;
            }
            player.draw(num);
          }
        },
        sdyx_jingtun: {
          intro: {
            content: '已经选择了$'
          },
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: { source: 'damageSource' },
          check(event, player) {
            return get.attitude(player, event.player) < 0;
          },
          filter(event, player) {
            if (event._notrigger.includes(event.player)) return false;
            if (event.player == player) return false;
            if (!event.player.isAlive()) return false;
            var storage = player.getStorage('sdyx_jingtun');
            if (storage.length >= 3) return false;
            var list = [
            ['装备', '', 'jydiy_tulongdao'],
            ['装备', '', 'jydiytaohuazhen'],
            ['装备', '', 'jydiyheimeigui'],
            ['装备', '', 'jydiyhanxuebaoma'],
            ['装备', '', 'jydiy_wumuyishu']];

            if (!storage.includes('equip')) {
              var bool = list.some((skill) => !event.player.hasDisabledSlot(get.subtype({ name: skill[2] })));
              if (bool) return true;
            }
            if (!storage.includes('maxHp')) {
              return true;
            }
            if (!storage.includes('skill')) {
              var skills = event.player.skills.slice(0);
              var bool = skills.some(function (skill) {
                if (player.hasSkill(skill, null, null, false)) return false;
                var info = get.info(skill);
                if (!lib.translate[skill]) return false;
                if (!lib.translate[skill + '_info']) return false;
                if (!lib.translate[skill + '_info'].length) return false;
                if (!info) return false;
                if (info.sub) return false;
                if (info.charlotte) return false;
                if (info.nopop) return false;
                if (info.cardSkill) return false;
                if (info.equipSkill) return false;
                if (info.forced) return false;
                if (info.hiddenSkill) return false;
                if (info.zhuSkill) return false;
                if (info.limited) return false;
                if (info.dutySkill) return false;
                if (info.unique) return false;
                if (info.juexingji) return false;
                if (info.jy_bangpai) return false;
                return true;
              });
              if (bool) {
                return true;
              }
            }
            return false;
          },
          content() {
            'step 0';
            var storage = player.getStorage('sdyx_jingtun');
            var dialog = ['【鲸吞】:请选择一项'];
            if (!storage.includes('equip')) {
              var list = [
              ['装备', '', 'jydiy_tulongdao'],
              ['装备', '', 'jydiytaohuazhen'],
              ['装备', '', 'jydiyheimeigui'],
              ['装备', '', 'jydiyhanxuebaoma'],
              ['装备', '', 'jydiy_wumuyishu']];

              list = list.filter((skill) => !trigger.player.hasDisabledSlot(get.subtype({ name: skill[2] })));
              if (list.length) {
                dialog.push('<div class="text center">装备</div>');
                dialog.push([list, 'vcard']);
              }
            }
            if (!storage.includes('maxHp')) {
              dialog.push([[['maxHp', '掠夺' + get.translation(trigger.player) + '一点体力上限']], 'textbutton']);
            }
            if (!storage.includes('skill')) {
              var skills = trigger.player.skills.slice(0);
              skills = skills.filter(function (skill) {
                if (player.hasSkill(skill, null, null, false)) return false;
                var info = get.info(skill);
                if (!lib.translate[skill]) return false;
                if (!lib.translate[skill + '_info']) return false;
                if (!lib.translate[skill + '_info'].length) return false;
                if (!info) return false;
                if (info.sub) return false;
                if (info.charlotte) return false;
                if (info.nopop) return false;
                if (info.cardSkill) return false;
                if (info.equipSkill) return false;
                if (info.forced) return false;
                if (info.hiddenSkill) return false;
                if (info.zhuSkill) return false;
                if (info.limited) return false;
                if (info.dutySkill) return false;
                if (info.unique) return false;
                if (info.juexingji) return false;
                if (info.jy_bangpai) return false;
                return true;
              });
              if (skills.length) {
                dialog.push('<div class="text center">技能</div>');
                var listt = [];
                for (var skill of skills) {
                  listt.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
                }
                dialog.push([listt, 'textbutton']);
              }
            }
            var next = player.chooseButton(dialog);
            next.set('forced', true);
            next.set('selectButton', [1, 1]);
            next.set('filterButton', function (button) {
              return true;
            });
            next.set('ai', function (button) {
              return Math.random();
            });
            'step 1';
            var link = result.links[0];
            if (typeof link == 'string') {
              if (link == 'maxHp') {
                player.gainMaxHp();
                trigger.player.loseMaxHp();
                player.markAuto('sdyx_jingtun', ['maxHp']);
              } else {
                player.addSkills(link);
                trigger.player.removeSkills(link);
                player.markAuto('sdyx_jingtun', ['skill']);
              }
            } else {
              var type = get.subtype({ name: link[2] });
              player.markAuto('sdyx_jingtun', ['equip']);
              trigger.player.disableEquip(type);
              ///////////////////////////////////////
              player.expandEquip(type);
              if (!player.storage['sdyx_jingtun2']) {
                player.storage['sdyx_jingtun2'] = {};
              }
              if (!player.storage['sdyx_jingtun2'][type]) {
                player.storage['sdyx_jingtun2'][type] = 1;
              } else {
                player.storage['sdyx_jingtun2'][type]++;
              }
              //player.addSkill('sdyx_jingtun2');
            }
          }
        },
        //郭啸天
        //喋血-霸天
        sdyx_diexue3: {
          audio: 'sdyx_zhongyi',
          forced: true,
          nopop: true,
          popup: false,
          charlotte: true,
          trigger: {
            player: 'changeHp'
          },
          filter(event, player) {
            return player.hp <= 0 && player.hp + player.countMark('sdyx_diexue2') > 0;
          },
          content() {
            var evt = trigger.parent;
            if (evt.name == 'damage' || evt.name == 'loseHp') evt.nodying = true;
            if (player.isDying()) {
              var evt = event,
                histories = [evt];
              while (true) {
                evt = event.getParent('dying');
                if (!evt || evt.name != 'dying' || histories.includes(evt)) break;
                histories.push(evt);
                if (evt.player == player) evt.nodying = true;
              }
            }
          }
        },
        sdyx_diexue2: {
          marktext: '喋',
          intro: {
            name: '喋血',
            name2: '喋血',
            content: '当前手牌上限加#,摸牌阶段摸牌加#出杀次数加#,濒死判定数值-#.'
          },
          mod: {
            maxHandcard(player, num) {
              return num + player.countMark('sdyx_diexue2');
            },
            cardUsable(card, player, num) {
              if (card.name == 'sha') return num + player.countMark('sdyx_diexue2');
            }
          },
          forced: true,
          onremove(player, skill) {
            if (player.hp <= 0) player.dying({});
          },
          charlotte: true,
          forced: true,
          popup: false,
          nopop: true,
          audio: 'sdyx_diexue',
          trigger: {
            player: 'phaseDrawBegin2'
          },
          filter(event, player) {
            return !event.numFixed && player.hasMark('sdyx_diexue2');
          },
          content() {
            trigger.num += player.countMark('sdyx_diexue2');
          },
          group: 'sdyx_diexue3'
        },
        sdyx_diexue: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageEnd'
          },
          forced: true,
          filter(event, player) {
            return event.num > 0;
          },
          content() {
            'step 0';
            event.count = Math.min(trigger.num, 9);
            'step 1';
            event.count--;
            player.
            chooseTarget(get.prompt2(event.name), function (card, player, target) {
              return target != player;
            }).
            set('ai', function (target) {
              var att = get.attitude(player, target);
              return att;
            });
            'step 2';
            if (result.targets?.length) {
              if (!result.targets[0].hasSkill('sdyx_diexue2')) {
                result.targets[0].addSkill('sdyx_diexue2');
              }
              result.targets[0].addMark('sdyx_diexue2', 1, false);
              if (event.count > 0) event.goto(1);
            }
          },
          ai: {
            maixie: true,
            maixie_hp: true,
            effect: {
              target(card, player, target) {
                if (get.tag(card, 'damage')) {
                  if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                  if (!target.hasFriend()) return;
                  var num = 1;
                  if (get.attitude(player, target) > 0) {
                    if (player.needsToDiscard()) {
                      num = 0.2;
                    } else {
                      num = 0.1;
                    }
                  }
                  if (target.hp >= 4) return [1, num * 2];
                  if (target.hp == 3) return [1, num * 1.5];
                  if (target.hp == 2) return [1, num * 0.5];
                }
              }
            }
          }
        },
        //忠裔--霸天20220802
        sdyx_zhongyi: {
          trigger: { player: 'chooseToUseBegin' },
          group: 'sdyx_zhongyi2',
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (event.type != 'wuxie') return false;
            if (event.responded) return false;
            if (event.sdyx_zhongyi) return false;
            if (!event.filterCard || !event.filterCard({ name: 'wuxie' }, player, event)) return false;
            return true;
          },
          forced: true,
          hiddenCard(player, name) {
            if (player._sdyx_zhongyi) return false;
            return name == 'wuxie';
          },
          checkResult(event, player) {
            if (!event) return true;
            if (event.ai1) {
              const ai = event.ai1;
              const tmp = _status.event;
              _status.event = event;
              const result = ai({ name: 'wuxie' }, _status.event.player, event);
              _status.event = tmp;
              return result > 0;
            }
            return false;
          },
          content() {
            'step 0';
            trigger.sdyx_zhongyi = true;
            const equips = [
            ['equip1', '', 'jydiy_tulongdao'],
            ['equip2', '', 'jydiytaohuazhen'],
            ['equip3', '', 'jydiyheimeigui'],
            ['equip4', '', 'jydiyhanxuebaoma'],
            ['equip5', '', 'jydiy_wumuyishu']].
            filter((i) => player.hasEnabledSlot(i[0]));
            const dialog = ['<div class="text center">' + trigger.prompt + '</div>', get.prompt(event.name), '<div class="text center">受到一点无来源的伤害或者废除你的一个装备栏,视为使用一张【无懈可击】</div>', [[['damage', '受到伤害']], 'tdnodes']];
            if (equips.length) dialog.push([equips, 'vcard']);
            dialog.push('hidden');
            const aicheck = function () {
              if (!lib.skill.sdyx_zhongyi.checkResult(trigger, player)) return false;
              player._sdyx_zhongyi = true;
              const haswuxie = player.hasWuxie();
              delete player._sdyx_zhongyi;
              if (haswuxie) return false;
              return true;
            }();
            player.
            chooseButton(1, dialog).
            set('filterButton', function (button) {
              return true;
            }).
            set('ai', function (button) {
              const evt = _status.event;
              const player = evt.player;
              if (!evt.aicheck) return -1;
              if (typeof button.link == 'string') {
                return get.damageEffect(player, player, player);
              } else {
                const card = player.getEquip(button.link[0]);
                if (card) {
                  const val = get.value(card);
                  if (val > 0) return 0;
                  return 5 - val;
                } else {
                  return 0.5;
                }
              }
              return -1;
            }).
            set('aicheck', aicheck);
            'step 1';
            if (result.bool) {
              trigger.untrigger();
              trigger.set('responded', true);
              trigger.result = { bool: true, card: { name: 'wuxie' } };
              const link = result.links[0];
              if (typeof link == 'string') {
                player.damage('nocard', 'nosource');
              } else {
                player.disableEquip(link[0]);
              }
            }
          }
        },
        sdyx_zhongyi3_old: {
          audio: 'sdyx_zhongyi',
          trigger: {
            player: 'useCardEnd'
          },
          forced: true,
          popup: false,
          filter(event, player) {
            if (event.card.name != 'wuxie') return false;
            return event.skill == 'sdyx_zhongyi';
          },
          content() {
            'step 0';
            if (player.countDisabledSlot() < 5) {
              var list = [
              ['装备', '', 'jydiy_tulongdao'],
              ['装备', '', 'jydiytaohuazhen'],
              ['装备', '', 'jydiyheimeigui'],
              ['装备', '', 'jydiyhanxuebaoma'],
              ['装备', '', 'jydiy_wumuyishu']];

              var str = '<span style="color: #FF0000">是否废除一个装备栏,否则你受到一点伤害?</span>';
              player.
              chooseButton(1, 'hidden', [str, [list, 'vcard'], 'hidden']).
              set('filterButton', function (button) {
                var card = { name: button.link[2] };
                var subtype = get.subtype(card);
                if (player.hasDisabledSlot(subtype)) return false;
                return true;
              }).
              set('ai', function (button) {
                var card = { name: button.link[2] };
                if (!player.getEquip(card)) return 1;
                return -1;
              });
            } else {
              event._result = { bool: false };
            }
            'step 1';
            if (result.links?.length) {
              var subtype = get.subtype({ name: result.links[0][2] });
              player.disableEquip(subtype);
            } else {
              player.damage('nocard', 'nosource');
            }
          }
        },
        sdyx_zhongyi_old: {
          group: ['sdyx_zhongyi2', 'sdyx_zhongyi3'],
          enable: 'chooseToUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          filterCard() {
            return false;
          },
          selectCard: -1,
          viewAs: {
            name: 'wuxie'
          },
          prompt: '每当你需要使用【金刚护体】时,你可以选择受到一点无来源的伤害或者废除你的一个装备栏,视为你使用了此牌.',
          ai: {
            result: {
              player(player, target) {
                var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                list = list.filter((i) => player.hasEmptySlot(i));
                if (list.includes('equip5')) return 1;
                if (player.hp <= 1) return -10000;
              }
            },
            basic: {
              useful: [6, 4, 3],
              value: [6, 4, 3]
            },
            expose: 0.2
          }
        },
        sdyx_zhongyi2: {
          audio: 'sdyx_zhongyi',
          trigger: {
            player: 'wuxieEnd'
          },
          filter(event, player) {
            if (event._neutralized) return false;
            const _wuxie = event.getParent(2)._trigger;
            if (_wuxie.name == 'phaseJudge') return false;
            if (_wuxie.card.name == 'wuxie') return false;
            if (!_wuxie.targets || !_wuxie.targets.length) return false;
            const evt = _wuxie.parent;
            const count = evt.num + 1;
            if (count == evt.targets.length) return false;
            const targets = evt.targets.slice(count);
            return targets.some((i) => !evt.excluded.includes(i));
          },
          cost() {
            'step 0';
            const _wuxie = trigger.getParent(2)._trigger;
            const evt = _wuxie.parent;
            const count = evt.num + 1;
            const targetsx = evt.targets.slice(count).filter((i) => !evt.excluded.includes(i));
            const targetsx2 = targetsx.filter((i) => get.effect(i, evt.card, evt.player, player) < 0);
            player.
            chooseTarget([1, targetsx.length], get.prompt('sdyx_zhongyi'), `选择${get.translation(trigger.card)}生效的额外目标?.`, function (card, player, target) {
              return _status.event.sourcex.includes(target);
            }).
            set('ai', function (target) {
              return _status.event.sourcex2.includes(target) ? 1 : 0;
            }).
            set('sourcex', targetsx).
            set('sourcex2', targetsx2);
            'step 1';
            event.result = result;
          },
          content() {
            const _wuxie = trigger.getParent(2)._trigger;
            const evt = _wuxie.parent;
            evt.excluded.addArray(event.targets);
            game.log(trigger.card, '对', event.targets, '额外生效!');
          }
        },
        //绝洪七公--霸天20220721
        sdyx_qianlong: {
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            player: 'damageEnd'
          },
          forced: true,
          filter(event, player) {
            if (event.num < 1) return false;
            return (
              player.countCards('h', function (card) {
                return lib.filter.cardDiscardable(card, player, 'sdyx_qianlong');
              }) > 0);

          },
          content() {
            'step 0';
            player.
            chooseCard('h', get.prompt2(event.name), 1).
            set('ai', function (card) {
              var number = card.number;
              var count = get.randomCardsNum((cardx) => cardx.number == number, 'cardPile');
              if (count > 5) count = 5;
              if (count == 0) return -1;
              var value = get.value(card);
              if (value > 0) {
                value = 1 / value;
              } else value = -value;
              return count + value;
            }).
            set('filterCard', lib.filter.cardDiscardable);
            'step 1';
            if (result.bool && result.cards.length) {
              var number = result.cards[0].number;
              player.discard(result.cards[0]);
              var cards = get.randomCards(5, (cardx) => cardx.number == number, 'cardPile');
              if (cards?.length) {
                player.gain(cards, 'log', 'gain2');
                event.cards = cards;
                event.targets = [];
              } else {
                event.finish();
              }
            } else {
              event.finish();
            }
            'step 2';
            var bool = game.hasPlayer(function (target) {
              return player != target && !event.targets.includes(target);
            });
            var bool2 =
            player.countCards('h', function (card) {
              return event.cards && event.cards.includes(card);
            }) > 0;
            if (!bool || !bool2) {
              event.finish();
            }
            'step 3';
            player.chooseCardTarget({
              filterCard(card, player) {
                return _status.event.parent.cards.includes(card);
              },
              selectCard: 1,
              filterTarget(card, player, target) {
                return player != target && !_status.event.parent.targets.includes(target);
              },
              ai1(card) {
                if (ui.selected.cards.length) return -1;
                if (card.name == 'du') return 20;
                return _status.event.player.countCards('h') - _status.event.player.hp;
              },
              ai2(target) {
                var att = get.attitude(_status.event.player, target);
                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                  if (target.hasSkillTag('nodu')) return 0;
                  return 1 - att;
                }
                return att - 4;
              },
              prompt: '是否选择要送人的卡牌'
            });
            'step 4';
            if (result.targets?.length) {
              player.line(result.targets, 'green');
              result.targets[0].gain(result.cards, player, 'giveAuto');
              //player.give(result.cards,result.targets[0],true);
              event.targets.add(result.targets[0]);
            } else {
              event.finish();
            }
            'step 5';
            event.goto(2);
          },
          ai: {
            maixie: true,
            maixie_hp: true,
            result: {
              effect(card, player, target) {
                if (get.tag(card, 'damage')) {
                  if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                  if (!target.hasFriend()) return;
                  var num = 1;
                  if (get.attitude(player, target) > 0) {
                    if (player.needsToDiscard()) {
                      num = 0.7;
                    } else {
                      num = 0.5;
                    }
                  }
                  if (player.hp >= 4) return [1, num * 2];
                  if (target.hp == 3) return [1, num * 1.5];
                  if (target.hp == 2) return [1, num * 0.5];
                }
              }
            },
            threaten: 0.6
          }
        },
        sdyx_shengai: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          getName(link) {
            var nature = link[3],
              name = link[2];
            for (var i in lib.skill.sdyx_shengai.yansheng) {
              for (var j of lib.skill.sdyx_shengai.yansheng[i]) {
                if (nature && j[3] && nature == j[3]) return i;
                if (name && j[2] && name == j[2]) return i;
              }
            }
            return 'none';
          },
          yansheng: {
            ywhy_libai: [
            ['基本', '', 'jiu', 'jy_yuhu'],
            ['基本', '', 'jiu', 'jy_zhuangyuan'],
            ['基本', '', 'jiu', 'jy_lanlin'],
            ['基本', '', 'jiu', 'jy_wubao'],
            ['基本', '', 'jiu', 'jy_tusu']],

            ywhy_zhaopan: [['锦囊', '', 'jydiy_qinsaoliuhe']],
            ywhy_nezha: [
            ['装备', '', 'jydiyhuojianqiang'],
            ['装备', '', 'jydiyfenghuolun'],
            ['装备', '', 'jydiy_huntianlin'],
            ['装备', '', 'jydiy_qiankunquan']],

            ywhy_zhizunbao: [['装备', '', 'jydiy_yueguangbaohe']],
            ywhy_shifeixuan: [['装备', '', 'jy_heshibi']],
            ywhy_wuqing: [
            ['锦囊', '', 'jydiy_xiujian'],
            ['锦囊', '', 'jydiy_meihuabiao'],
            ['锦囊', '', 'jydiy_zhuihunding'],
            ['锦囊', '', 'jydiy_kongqueling'],
            ['锦囊', '', 'jydiy_tiejili']],

            sdyx_luchengfeng: [
            ['装备', '', 'jydiy_qinglongyutian'],
            ['装备', '', 'jydiy_baihulvwei'],
            ['装备', '', 'jydiy_xuanwuqianyuan'],
            ['装备', '', 'jydiy_zhuquejinghong']],

            sdxl_fengmofeng: [
            ['装备', '', 'jydiy_yitianjian_re'],
            ['装备', '', 'jydiy_dagoubang_re'],
            ['装备', '', 'jydiy_ruanweijia_re'],
            ['装备', '', 'jydiy_shenghuoling_re'],
            ['装备', '', 'jydiytaohuazhen_re']],

            tlbb_zhiguangdashi: [['装备', '', 'tlbb_yanmenyizi']],
            ywhy_shimaige: [['装备', '', 'ywhy_zhizunmojie']],
            yttl_xie_zhouzhiruo: [['装备', '', 'jydiy_baimangbian']],
            ywhy_baolaiying: [['装备', '', 'ywhy_feiyufu']],
            qtpz_xie_xuedaolaozu: [['装备', '', 'jydiy_xuedao_re']]
          },
          content() {
            'step 0';
            var list = [];
            for (var i in lib.skill.sdyx_shengai.yansheng) {
              list.add(i);
            }
            var players = game.players.concat(game.dead);
            for (var i of players) {
              if (i.name && lib.character[i.name]) list.remove(i.name);
              if (i.name1 && lib.character[i.name1]) list.remove(i.name1);
              if (i.name2 && lib.character[i.name2]) list.remove(i.name2);
            }
            if (!list.length) {
              event.finish();
              return;
            }
            list = list.randomGets(3);
            event.listName = list;
            event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【神丐】', [list.slice(0), 'character']);
            'step 1';
            event.dialog.close();
            'step 2';
            var list = [];
            var dialog = ui.create.dialog('hidden');
            for (var i of event.listName) {
              dialog.add(get.translation(i));
              dialog.add([lib.skill.sdyx_shengai.yansheng[i].slice(0), 'vcard']);
            }
            player.
            chooseButton(event.listName.length, true, dialog).
            set('filterButton', function (button) {
              for (var i = 0; i < ui.selected.buttons.length; i++) {
                if (lib.skill.sdyx_shengai.getName(button.link) == lib.skill.sdyx_shengai.getName(ui.selected.buttons[i].link)) return false;
              }
              return true;
            }).
            set('complexSelect', true);
            'step 3';
            if (result.bool) {
              var cards = [];
              for (var i of result.links) {
                var name = [i[2], null, null];
                if (i[3]) name.push(i[3]);
                var card = game.createCard.apply(game, name);
                cards.push(card);
              }
              player.gain('log', cards, 'gain2');
            }
          },
          ai: {
            basic: {
              order: 10
            },
            result: {
              player: 1
            }
          }
        },
        sdyx_tugou: {
          ai: {
            effect: {
              player(card, player, target, current, isLink) {
                if (isLink) return;
                if (player._sdyx_tugou_tmp) return;
                player._sdyx_tugou_tmp = true;
                var bool = true;
                var type = get.type(card);
                if (type != 'basic' && type != 'trick') bool = false;
                var info = get.info(card);
                if (info.allowMultiple == false) bool = false;
                if (!info.enable) bool = false;
                if (info.notarget) bool = false;
                if (!bool) {
                  delete player._sdyx_tugou_tmp;
                  return;
                }
                var targets = game.filterPlayer(function (current) {
                  return lib.filter.targetEnabled2(card, player, current) && target != current && target.group == current.group;
                });
                if (targets.length) {
                  var check = true;
                  for (var i of targets) {
                    if (get.effect(i, card, player, player) < 0) check = false;
                  }
                  if (check) {
                    delete player._sdyx_tugou_tmp;
                    return [1, 2];
                  }
                }
                delete player._sdyx_tugou_tmp;
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCardToPlayer'
          },
          filter(event, player) {
            var type = get.type(event.card);
            if (type != 'basic' && type != 'trick') return false;
            var info = get.info(event.card);
            if (info.allowMultiple == false) return false;
            if (!info.enable) return false;
            if (info.notarget) return false;
            if (!event.targets || !event.targets.length) return false;
            var bool = game.hasPlayer(function (current) {
              return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current) && event.target.group == current.group;
            });
            return bool;
          },
          check(event, player) {
            var targets = lib.skill.sdyx_tugou.logTarget(event, player);
            var check = true;
            player._sdyx_tugou_tmp = true;
            for (var i of targets) {
              if (get.effect(i, event.card, player, player) < 0) check = false;
            }
            delete player._sdyx_tugou_tmp;
            return check;
          },
          logTarget(event, player) {
            var targets = game.filterPlayer(function (current) {
              return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current) && event.target.group == current.group;
            });
            return targets;
          },
          prompt2(event, player) {
            var targets = lib.skill.sdyx_tugou.logTarget(event, player);
            return '令' + get.translation(targets) + '也成为' + get.translation(event.card) + '的目标';
          },
          content() {
            var targets = lib.skill.sdyx_tugou.logTarget(trigger, player);
            var evt = trigger.getParent('useCard');
            evt.targets.addArray(targets);
            if (evt.cards.length) {
              game.log(targets, '额外成为了', evt.card, '(', evt.cards, ')', '的目标');
            } else {
              game.log(targets, '额外成为了', evt.card, '的目标');
            }
          }
        },
        //邪梅超风-霸天20220715
        sdyx_xinghong: {
          juexingji: true,
          derivation: ['sdyx_mozhua'],
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'sdyx_qingdou_count' },
          filter(event, player) {
            return !player.storage.sdyx_xinghong;
          },
          forced: true,
          //_priority:3,
          content() {
            'step 0';
            player.awakenSkill(event.name);
            player.storage[event.name] = true;
            player.removeSkills('sdyx_qingdou');
            player.loseMaxHp();
            'step 1';
            if (player.isDamaged()) player.recover();
            player.addSkills('sdyx_mozhua');
            var skills = get.info({ name: 'jydiy_jiuyinzhengjing' }).skills;
            if (skills) {
              for (var i of skills) {
                player.addSkills(i);
              }
            }
            player.name = 'sdyx_xie_meichaofeng';
            player.name1 = 'sdyx_xie_meichaofeng';
            player.node.name.innerHTML = get.slimName('sdyx_xie_meichaofeng');
            player.setAvatar(player.name, player.name);
          }
        },
        sdyx_qingdou: {
          marktext: '情',
          intro: {
            name: '情窦',
            name2: '情',
            content: '其他角色因情窦累计失去#张♣️️️牌'
          },
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:4',
          filter(event, player) {
            var targets = lib.skill.sdyx_bichao.logTarget(null, player);
            return targets.length;
          },
          content() {
            'step 0';
            event.is_club = false;
            event.count = 0;
            'step 1';
            event.count++;
            var targets = lib.skill.sdyx_bichao.logTarget(null, player);
            if (targets.length) {
              player.useSkill('sdyx_bichao', targets);
            } else {
              event.finish();
              //player.useSkill('sdyx_bichao');
            }
            if (event.count > 10) {
              event.finish();
            }
            'step 2';
            if (!event.is_club) {
              player.chooseBool('是否摸一张牌再次发动【碧潮】？').set('ai', function () {
                return true;
              });
            } else {
              event.finish();
            }
            'step 3';
            if (result.bool) {
              player.draw(1);
              event.goto(1);
            }
          },
          ai: {
            basic: {
              order: 11
            },
            result: {
              player(player) {
                return 1;
              }
            }
          }
        },
        sdyx_yaoyao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'drawEnd' },
          forced: true,
          filter(event, player) {
            var card = ui.cardPile.firstChild;
            if (!card) return false;
            return card.suit == 'club';
          },
          content() {
            var gain = get.cards(1);
            player.gain(gain, 'log', 'gain2');
          }
        },
        sdyx_mozhua: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCard1' },
          filter(event, player) {
            if (Math.floor(game.dead.length / 2) < 1) return false;
            return event.card && event.card.name == 'sha';
          },
          forced: true,
          content() {
            var num = Math.floor(game.dead.length / 2);
            if (!trigger.baseDamage) trigger.baseDamage = 1;
            trigger.baseDamage += num;
          },
          ai: {
            effect: {
              player(card, player, target, current, isLink) {
                if (!target) return;
                if (isLink) return;
                if (card.name != 'sha') return;
                if (Math.floor(game.dead.length / 2) < 1) return;
                if (
                target.hasSkillTag('filterDamage', null, {
                  player: player,
                  card: card
                }))

                return;
                return [1, 0, 1, -1.5 * Math.floor(game.dead.length / 2)];
              }
            }
          }
        },
        //邪杨康
        //阴爪-霸天20220808
        sdyx_yinzhua2: {
          content() {
            var storage1 = player.getStorage('sdyx_yinzhua2');
            var map = {};
            var dis = [];
            var gains = trigger.cards.filter(function (i) {
              var number = i.number;
              if (storage1.includes(number)) {
                var owner = get.owner(i, 'judge');
                if (owner) {
                  var id = owner.playerid;
                  if (!map[id]) map[id] = [owner, []];
                  map[id][1].push(i);
                  return false;
                } else {
                  dis.push(i);
                  return false;
                }
              }
              return true;
            });
            for (var i in map) {
              var owner = map[i][0];
              var next = owner.lose(map[i][1], ui.discardPile);
              next.visible = true;
              game.log(map[i][1], '进入了弃牌堆');
            }
            if (dis.length) {
              game.cardsDiscard(dis);
              game.log(dis, '进入了弃牌堆');
            }
            trigger.cards = gains;
            if (!trigger.cards.length) {
              trigger.cancel();
            }
          },
          marktext: '爪',
          intro: {
            name: '阴爪',
            name2: '爪',
            content: '已经记录了$'
          },
          charlotte: true,
          forced: true,
          popup: false,
          nopop: true,
          audio: 'sdyx_yinzhua',
          trigger: {
            player: 'gainBefore'
          }
        },
        sdyx_yinzhua: {
          filter(event, player) {
            if (event.num < 1) return false;
            var storage1 = player.getStorage('sdyx_yinzhua');
            if (storage1.length >= 9) return false;
            var bool = game.hasPlayer(function (current) {
              var storage2 = current.getStorage('sdyx_yinzhua2');
              return current != player && storage2.length < 3;
            });
            return bool;
          },
          content() {
            'step 0';
            event.count = Math.min(trigger.num, 9);
            'step 1';
            event.count--;
            player.
            chooseTarget(get.prompt2(event.name), function (card, player, target) {
              var storage2 = target.getStorage('sdyx_yinzhua2');
              if (storage2.length >= 3) return false;
              return target != player;
            }).
            set('ai', function (target) {
              return -get.attitude(player, target);
            });
            'step 2';
            if (result.targets?.length) {
              event.target = result.targets[0];
              var storage1 = player.getStorage('sdyx_yinzhua');
              var storage2 = event.target.getStorage('sdyx_yinzhua2');
              var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
              var list2 = [];
              list.filter(function (num) {
                if (storage1.includes(num)) return false;
                list2.push(num.toString());
                return true;
              });
              player.
              chooseControl(list2).
              set('prompt', '选择令其记录一个【阴爪】的数字').
              set('ai', function () {
                var player = _status.event.player;
                return list2.randomGet();
              });
            } else {
              event.finish();
            }
            'step 3';
            var number = parseInt(result.control);
            player.markAuto('sdyx_yinzhua', [number]);
            target.markAuto('sdyx_yinzhua2', [number]);
            if (!target.hasSkill('sdyx_yinzhua2')) {
              target.addSkill('sdyx_yinzhua2');
            }
            var storage1 = player.getStorage('sdyx_yinzhua');
            var bool = game.hasPlayer(function (current) {
              var storage2 = current.getStorage('sdyx_yinzhua2');
              return current != player && storage2.length < 3;
            });
            if (storage1.length < 9 && event.count > 0 && bool) event.goto(1);
          },
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            source: 'damageEnd',
            player: 'damageEnd'
          },
          forced: true,
          intro: {
            name: '阴爪',
            name2: '爪',
            content: '已经选择了$'
          }
        },
        //伪道--棉花糖
        sdyx_weidao: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:3',
          usable: 1,
          filter(event, player) {
            if (player.hp == player.countCards('h')) return false;
            if (player.maxHp <= 1) return false;
            if (player.countCards('h') >= player.maxHp) return false;
            return player.countCards('h') > 0;
          },
          content() {
            'step 0';
            player.loseMaxHp();
            if (player.isDamaged()) player.recover();
            'step 1';
            var num1 = player.countCards('h');
            var num2 = player.hp;
            var num = num2 - num1;
            if (num > 0) {
              player.drawTo(num2);
              player.hp = num1;
              player.update();
            } else if (num < 0) {
              num = Math.abs(num);
              player.hp = num1;
              player.chooseToDiscard(num, 'h', true);
              player.update();
            }
          },
          ai: {
            order: 12,
            result: {
              player: 1
            }
          }
        },
        //曲灵风---霸天
        sdyx_daobao: {
          dutySkill: true,
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          selectCard: -1,
          filterCard() {
            return false;
          },
          usable: 1,
          init(player, skill) {
            player.storage[skill] = false;
          },
          filter(event, player) {
            return !player.storage.sdyx_daobao;
          },
          filterTarget(card, player, target) {
            return target != player;
          },
          content() {
            var card = get.cardPile(function (cardx) {
              return get.type(cardx) == 'equip' && get.subtype(cardx) == 'equip5';
            });
            if (card) {
              target.gain(card, 'log', 'gain2');
            } else {
              player.chat('无牌可得了吗');
              game.log('但是牌堆里面已经没有符合的宝物牌了!');
              event.finish();
              return;
            }
            if (card.name == 'jydiy_jiuyinzhengjing') {
              game.log(player, '成功完成使命');
              player.loseMaxHp();
              player.storage[event.name] = true;
              player.awakenSkill(event.name);
              player.addSkills('jy_taohuadao');
              player.addSkills('sdyx_daobao_addSkill');
            }
          },
          group: ['sdyx_daobao_fail'],
          subSkill: {
            addSkill2: {
              charlotte: true,
              nopop: true,
              mod: {
                bangpaiName(player, name) {
                  if (name == 'jy_taohuadao') return 'jy_youxia';
                  return name;
                }
              }
            },
            addSkill: {
              charlotte: true,
              name: '五运',
              nopop: true,
              group: ['jycj_wuyun2', 'jycj_wuyun'],
              ai: {
                jycj_wuyun: true
              },
              init(current, skill) {
                current.countCards('e', function (cardx) {
                  if (get.subtype(cardx) != 'equip2') return false;
                  if (cardx.name == 'jydiytaohuazhen_re') return false;
                  if (cardx.origin_name) return false;
                  if (!lib.inpile.includes(cardx.name)) {
                    return false;
                  }
                  var origin_name = cardx.name;
                  var new_name = 'jydiytaohuazhen';
                  if (origin_name == 'jydiytaohuazhen') new_name = 'jydiytaohuazhen_re';
                  current.removeEquipTrigger(cardx);
                  cardx.name = new_name;
                  cardx.origin_name = origin_name;
                  current.addEquipTrigger(cardx);
                });
              },
              onremove(current, skill) {
                current.countCards('e', function (cardx) {
                  if (get.subtype(cardx) != 'equip2') return false;
                  if (!cardx.origin_name) return false;
                  if (lib.skill.global.includes('jycj_wuyun')) return false;
                  if (cardx.name != 'jydiytaohuazhen' && cardx.name != 'jydiytaohuazhen_re') return false;
                  current.removeEquipTrigger(cardx);
                  var origin_name = cardx.origin_name;
                  delete cardx.origin_name;
                  cardx.name = origin_name;
                  current.addEquipTrigger(cardx);
                });
              }
            },
            fail: {
              trigger: {
                player: 'dying'
              },
              forced: true,
              content() {
                game.log(player, '使命失败');
                player.storage.sdyx_daobao = true;
                player.awakenSkill('sdyx_daobao');
                player.addSkill('sdyx_daobao_addSkill2');
                var bp = get.jy_bangpai(player);
                for (var i of bp) {
                  player.addSkills(i);
                }
              }
            }
          },
          derivation: 'jy_taohuadao'
        },
        sdyx_pikong: {
          shaRelated: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCardToPlayered'
          },
          filter(event, player) {
            return event.card && event.card.name == 'sha' && event.target.countDiscardableCards(player, 'he') > 0;
          },
          forced: true,
          content() {
            'step 0';
            var ai2 = function (button) {
              var val = get.buttonValue(button);
              if (get.attitude(_status.event.player, get.owner(button.link)) > 0) return -val;
              return val;
            };
            var att = get.attitude(player, trigger.target) <= 0;
            //var boolai=trigger.parent.directHit.includes(trigger.target);
            event.suits = [];
            trigger.target.countCards('he', function (cardx) {
              var suit = cardx.suit;
              if (['club', 'spade', 'diamond', 'heart'].includes(suit)) event.suits.add(suit);
            });
            player.
            discardPlayerCard(trigger.target, get.prompt2('sdyx_pikong', trigger.target), 'he').
            set('ai', function (button) {
              if (!_status.event.att) return 0;
              var ai2 = _status.event.ai2;
              var boolai = _status.event.boolai;
              var result = ai2(button);
              if (result > 0) {
                if (get.position(button.link) == 'e' && get.subtype(button.link) == 'equip2') return result + 10;
              }
              return result;
            }).
            set('att', att).
            set('ai2', ai2);
            'step 1';
            if (result.links?.length) {
              var suits = [];
              trigger.target.countCards('he', function (cardx) {
                var suit = cardx.suit;
                if (['club', 'spade', 'diamond', 'heart'].includes(suit)) suits.add(suit);
              });
              if (suits.length >= event.suits.length) trigger.parent.directHit.add(trigger.target);
            }
          },
          ai: {
            unequip: true,
            skillTagFilter(player, tag, arg) {
              var card = arg.card;
              var target = arg.target;
              if (!card || !target) return false;
              if (card.name != 'sha') return false;
              if (get.attitude(player, target) > 0) return false;
              var equip = target.getEquip(2);
              if (!equip) return false;
              var list = target.getDiscardableCards(player, 'he');
              if (list.includes(equip) && get.equipValue(equip, target) > 0) return true;
              return false;
            }
          }
        },
        //陆乘风--霸天20220624
        sdyx_sixiang: {
          subSkill: { backup: {} },
          marktext: '四',
          intro: {
            content: 'expansion',
            markcount: 'expansion'
          },
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          },
          group: 'sdyx_sixiang2',
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:3',
          filter(event, player) {
            return player.getExpansions('sdyx_sixiang').length;
          },
          chooseButton: {
            dialog(event, player) {
              return ui.create.dialog('四象', player.getExpansions('sdyx_sixiang'), 'hidden');
            },
            backup(links, player) {
              return {
                filterTarget(cardx, player, target) {
                  var card = lib.skill.sdyx_sixiang_backup.card;
                  if (target.isMin()) return false;
                  var type = get.subtype(card);
                  return !target.hasDisabledSlot(type);
                  //return target.hasEmptySlot(type);
                },
                filterCard() {
                  return false;
                },
                selectCard: -1,
                card: links[0],
                delay: false,
                content() {
                  var card = lib.skill.sdyx_sixiang_backup.card;
                  player.$give(card, target, false);
                  target.equip(card);
                },
                ai: {
                  order: 10,
                  result: {
                    target(player, target) {
                      var card = lib.skill.sdyx_sixiang_backup.card;
                      if (card) return get.effect(target, card, target, target);
                      return 0;
                    }
                  }
                }
              };
            },
            prompt() {
              return '请选择〖四象〗的目标';
            }
          },
          ai: {
            order: 10,
            result: {
              player: 1
            }
          }
        },
        sdyx_sixiang2: {
          audio: 'sdyx_sixiang',
          trigger: {
            player: 'phaseBegin'
          },
          forced: true,
          filter(event, player) {
            return player.phaseNumber == 1;
          },
          content() {
            lib.inpile.addArray(['jydiy_qinglongyutian', 'jydiy_baihulvwei', 'jydiy_xuanwuqianyuan', 'jydiy_zhuquejinghong']);
            var cards = [game.createCard2('jydiy_qinglongyutian', null, null), game.createCard2('jydiy_baihulvwei', null, null), game.createCard2('jydiy_xuanwuqianyuan', null, null), game.createCard2('jydiy_zhuquejinghong', null, null)];
            player.addToExpansion(cards, 'gain2').gaintag.add('sdyx_sixiang');
          }
        },
        sdyx_chaizhen: {
          getResult(cards) {
            var l = cards.length;
            var all = Math.pow(l, 2);
            var list = [];
            for (var i = 1; i < all; i++) {
              var array = [];
              for (var j = 0; j < l; j++) {
                if (Math.floor(i % Math.pow(2, j + 1) / Math.pow(2, j)) > 0) array.push(cards[j]);
              }
              var num = 1;
              for (var k of array) {
                num *= k.number;
              }
              if (num == 24) list.push(array);
            }
            if (list.length) {
              list.sort(function (a, b) {
                if (a.length != b.length) return b.length - a.length;
                return get.value(a) - get.value(b);
              });
              return list[0];
            }
            return list;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          global: 'sdyx_chaizhen_use',
          subSkill: {
            use: {
              enable: 'phaseUse',
              ai: {
                order: 11,
                result: {
                  player(player, target) {
                    return get.effect(target, { name: 'guohe_copy' }, player, player);
                  }
                }
              },
              selectCard(card, player) {
                var num = 1;
                if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
                  num *= i.number;
                }
                if (num == 24) return ui.selected.cards.length;
                return ui.selected.cards.length + 2;
              },
              //哎嘿嘿,真的会有小可爱一张牌凑出24点吗?
              position: 'he',
              complexCard: true,
              filterCard(card, player) {
                var num = 1;
                if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
                  num *= i.number;
                }
                if (num == 24) return ui.selected.cards.length;
                return ui.selected.cards.length + 2;
              },
              check(card) {
                return 8 - get.value(card);
              },
              selectTarget: 1,
              filterTarget(card, player, target) {
                return target.countCards('e', function (card) {
                  return ['jydiy_zhuquejinghong', 'jydiy_xuanwuqianyuan', 'jydiy_baihulvwei', 'jydiy_qinglongyutian'].includes(card.name);
                });
              },
              content() {
                'step 0';
                player.choosePlayerCard('e', true, target).set('filterButton', function (button, card) {
                  var v = ['jydiy_zhuquejinghong', 'jydiy_xuanwuqianyuan', 'jydiy_baihulvwei', 'jydiy_qinglongyutian'];
                  return v.includes(button.link.name);
                });
                'step 1';
                if (result.links?.length) {
                  var rc = result.links[0];
                  const next = target.lose(rc, ui.discardPile, 'visible');
                  next._triggered = 2;
                  if (ui.discardPile.childNodes.length) {
                    next.set('insert_index', function (event, card) {
                      const rand = get.rand(ui.discardPile.childNodes.length);
                      game.log(card, '洗入了弃牌堆!');
                      return ui.discardPile.childNodes[rand];
                    });
                  } else {
                    game.log(rc, '洗入了弃牌堆!');
                  }
                }
              }
            }
          }
        },
        sdyx_guiyun: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          selectCard: -1,
          filterCard() {
            return false;
          },
          usable: 1,
          filter(event, player) {
            return game.hasPlayer((target) => lib.skill.sdyx_guiyun.filterTarget(null, player, target));
          },
          filterTarget(card, player, target) {
            var isMin = target.isMinHandcard();
            var isMax = target.isMaxHandcard();
            var isMinTarget = game.findPlayer((Target) => Target != target && Target.isMinHandcard());
            var isMaxTarget = game.findPlayer((Target) => Target != target && Target.isMaxHandcard());
            var hs = target.countCards('h');
            if (isMin && isMaxTarget) {
              return isMaxTarget.countCards('h') - hs > 0;
            }
            if (isMax && isMinTarget) {
              return isMinTarget.countCards('h') - hs < 0;
            }
            return false;
          },
          content() {
            var num = lib.skill.sdyx_guiyun.ai.result.target(player, target);
            if (num > 0) {
              target.draw(num);
            } else if (num < 0) {
              num = -num;
              var count = target.getCards('h', function (i) {
                return lib.filter.cardDiscardable(i, target, event.name);
              });
              if (count.length <= num) {
                target.discard(count);
              } else {
                target.chooseToDiscard('h', num, true, lib.filter.cardDiscardable);
              }
            }
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                var isMin = target.isMinHandcard();
                var isMax = target.isMaxHandcard();
                var isMinTarget = game.findPlayer((Target) => Target != target && Target.isMinHandcard());
                var isMaxTarget = game.findPlayer((Target) => Target != target && Target.isMaxHandcard());
                var hs = target.countCards('h');
                if (isMin && isMaxTarget) {
                  return isMaxTarget.countCards('h') - hs;
                }
                if (isMax && isMinTarget) {
                  return isMinTarget.countCards('h') - hs;
                }
                return 0;
              }
            },
            threaten: 1
          }
        },
        //韩小莹
        //巧剑
        sdyx_qiaojian: {
          mod: {
            aiOrder(player, card, num) {
              var name = card.name,
                nature = get.nature(card);
              if (name == 'jiu') return num + 1;
              if (name != 'sha') return num;
              var historys = player.getAllHistory('useCard', function (evt) {
                return evt.card.name == 'sha';
              });
              if (!historys.length) return num;
              var evt2 = historys[historys.length - 1];
              if (!evt2.card.nature && !nature) return num;
              if (evt2.card.nature != nature) return num + 1;
            }
          },
          ai: {
            effect: {
              player(card, player, target) {
                if (card.name != 'sha') return;
                var historys = player.getAllHistory('useCard', function (evt) {
                  return evt.card.name == 'sha';
                });
                if (!historys.length) return;
                var evt2 = historys[historys.length - 1];
                if (!evt2.card.nature && !card.nature) return;
                if (evt2.card.nature != card.nature) return [1, 1];
              }
            }
          },
          shaRelated: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCardToPlayered'
          },
          check(event, player) {
            var num = 1,
              list = [];
            for (var i of event.targets) {
              list.add(i);
            }
            for (var i of list) {
              if (i.countDiscardableCards(player, 'he')) {
                var att = get.effect(i, { name: 'guohe_copy2' }, player, player);
                if (att > 0) {
                  num++;
                } else {
                  num--;
                }
              }
            }
            return num > 0;
          },
          filter(event, player) {
            if (!event.isFirstTarget) return false;
            if (event.card.name != 'sha') return false;
            var historys = player.getAllHistory('useCard', function (evt) {
              return evt.card.name == 'sha';
            });
            var use = event.parent;
            var pos = historys.indexOf(use);
            if (pos == -1 || pos == 0) return false;
            var evt2 = historys[pos - 1];
            if (!evt2.card.nature && !use.card.nature) return false;
            return evt2.card.nature != use.card.nature;
          },
          logTarget(event, player) {
            var list = [];
            for (var i of event.targets) {
              list.add(i);
            }
            return list;
          },
          content() {
            'step 0';
            player.draw();
            'step 1';
            var list = [];
            for (var i of trigger.targets) {
              list.add(i);
            }
            for (var i of list) {
              if (i.countDiscardableCards(player, 'he')) {
                player.discardPlayerCard('he', i, true);
              }
            }
          }
        },
        //越女
        sdyx_yuenv: {
          ai: {
            reverseEquip: true,
            effect: {
              target(card, player, target, current) {
                if (player != target) return;
                if (get.type(card) != 'equip') return;
                if (get.subtype(card) != 'equip1') return;
                if (!player.hasValueTarget({ name: 'sha' })) return;
                if (get.cardtag(card, 'gifts')) return;
                var list2 = get.jy_cardNameList(card);
                var bool = list2.some(function (i) {
                  if (i.includes('sha::')) {
                    return true;
                  } else {
                    return i == 'sha';
                  }
                });
                if (!bool) return;
                return [1, 3];
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCardEnd'
          },
          filter(event, player) {
            if (get.type(event.card) != 'equip') return false;
            if (get.subtype(event.card) != 'equip1') return false;
            if (!player.hasUseTarget({ name: 'sha' })) return false;
            var list2 = get.jy_cardNameList(event.card);
            var bool = list2.some(function (i) {
              if (i.includes('sha::')) {
                return true;
              } else {
                return i == 'sha';
              }
            });
            return bool;
          },
          forced: true,
          content() {
            'step 0';
            var list2 = get.jy_cardNameList(trigger.card);
            var list = list2.filter(function (i) {
              if (i.includes('sha::')) {
                return true;
              } else {
                return i == 'sha';
              }
            });
            event.shalist = list;
            'step 1';
            if (!event.shalist.length) {
              event.finish();
              return;
            }
            var list = event.shalist;
            var list2 = [];
            for (var i of list) {
              if (i.includes('::')) {
                var name = i.split('::');
                list2.push(['基本', '', name[0], name[1]]);
              } else {
                list2.push(['基本', '', i]);
              }
            }
            event.nochoose = false;
            if (list2.length == 1) {
              event._result = { bool: true, links: list2 };
              event.nochoose = true;
            } else {
              player.
              chooseButton('hidden', [get.prompt('sdyx_yuenv'), [list2, 'vcard'], 'hidden']).
              set('ai', function (button) {
                return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
              }).
              set('filterButton', function (button) {
                return _status.event.player.hasUseTarget({ name: button.link[2], nature: button.link[3] });
              });
            }
            'step 2';
            if (result.bool) {
              event._result = { bool: false };
              var card = { name: result.links[0][2], nature: result.links[0][3] };
              if (card.nature && lib.inpile_nature.includes(card.nature)) {
                event.shalist.remove(card.name + '::' + card.nature);
              } else {
                event.shalist.remove(card.name);
              }
              var next = player.chooseUseTarget(card, event.nochoose ? null : true, false);
              if (event.nochoose) {
                next.set('prompt', get.prompt('sdyx_yuenv'));
                next.set('prompt2', '视为使用一张' + get.translation(card));
              }
            } else {
              event.finish();
            }
            'step 3';
            if (result.bool) {
              if (event.shalist.length) event.goto(1);
            }
          }
        },
        //张阿生--霸天
        sdyx_tiexue: {
          marktext: '捨',
          intro: {
            name: '铁血',
            name2: '捨',
            content: '当前有#个<捨>'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageEnd'
          },
          forced: true,
          content() {
            player.addMark('sdyx_tiexue', 3);
          },
          group: 'sdyx_tiexue_damage',
          subSkill: {
            damage: {
              audio: 'sdyx_tiexue',
              trigger: {
                global: ['addJudgeBegin', 'linkBegin', 'turnOverBegin', 'disableEquipBegin']
              },
              logTarget: 'player',
              prompt2(event, player) {
                var str = get.translation(event.player);
                var name = event.name;
                if (name == 'turnOver') {
                  str = str + '即将翻面';
                } else if (name == 'link') {
                  str = str + '即将横置';
                } else if (name == 'addJudge') {
                  var card = event.card;
                  if (typeof card == 'string') card = { name: card };
                  str = str + '即将贴上' + get.translation(card.name);
                } else if (name == 'disableEquip') {
                  str = str + '即将废除' + get.translation(event.pos) + '栏';
                }
                return str;
              },
              filter(event, player) {
                if (!player.hasMark('sdyx_tiexue')) return false;
                var name = event.name;
                if (name == 'turnOver') {
                  return !event.player.isTurnedOver();
                } else if (name == 'link') {
                  return !event.player.isLinked();
                } else if (name == 'addJudge') {
                  var card = event.card;
                  if (typeof card == 'string') card = { name: card };
                  if (card.name == 'jydiy_yungongliaoshang') return false;
                  return true;
                } else if (name == 'disableEquip') {
                  return true;
                } else {
                  return false;
                }
              },
              check(event, player) {
                return get.attitude(player, event.player) > 0;
              },
              content() {
                player.removeMark('sdyx_tiexue', 1);
                trigger.cancel();
                var name = trigger.name;
                if (name == 'turnOver') {
                  game.log(trigger.player, '取消了翻面');
                } else if (name == 'link') {
                  game.log(trigger.player, '取消了横置');
                } else if (name == 'addJudge') {
                  game.log(trigger.player, '取消了负面锦囊牌');
                  var owner = get.owner(trigger.cards[0]);
                  if (owner && owner.getCards('hejsx').includes(trigger.cards[0])) owner.lose(trigger.cards, ui.discardPile);else
                  game.cardsDiscard(trigger.cards[0]);
                  game.log(trigger.cards, '进入了弃牌堆');
                } else if (name == 'disableEquip') {
                  game.log(trigger.player, '取消了废除', trigger.pos, '栏');
                }
              }
            }
          }
        },
        sdyx_paoding: {
          list: {
            1: [[1]],
            2: [[2]],
            3: [[3], [1, 2]],
            4: [[4], [1, 3]],
            5: [[5], [2, 3], [1, 4]],
            6: [[6], [1, 5], [2, 4], [1, 2, 3]],
            7: [[7], [1, 6], [2, 5], [3, 4], [1, 2, 4]],
            8: [[8], [1, 7], [2, 6], [3, 5], [1, 2, 5], [1, 3, 4]],
            9: [[9], [1, 8], [2, 7], [3, 6], [4, 5], [1, 2, 6], [1, 3, 5], [2, 3, 4]],
            10: [[10], [1, 9], [2, 8], [3, 7], [4, 6], [1, 2, 7], [1, 3, 6], [1, 4, 5], [2, 3, 5], [1, 2, 3, 4]],
            11: [[11], [1, 10], [2, 9], [3, 8], [4, 7], [5, 6], [1, 2, 8], [1, 3, 7], [1, 4, 6], [2, 3, 6], [2, 4, 5], [1, 2, 3, 5]],
            12: [[12], [1, 11], [2, 10], [3, 9], [4, 8], [5, 7], [1, 2, 9], [1, 3, 8], [1, 4, 7], [1, 5, 6], [2, 3, 7], [2, 4, 6], [3, 4, 5], [1, 2, 3, 6], [1, 2, 4, 5]],
            13: [[13], [1, 12], [2, 11], [3, 10], [4, 9], [5, 8], [6, 7], [1, 2, 10], [1, 3, 9], [1, 4, 8], [1, 5, 7], [2, 3, 8], [2, 4, 7], [2, 5, 6], [3, 4, 6], [1, 2, 3, 7], [1, 2, 4, 6]]
          },
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          filterCard(card, player) {
            var playerx = player || get.owner(card);
            var num = card.number;
            if (typeof num != 'number') return false;
            var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
            if (!lib.filter.cardDiscardable(card, playerx)) return false;
            return list.includes(num);
          },
          usable: 1,
          check(card) {
            var num = card.number;
            if (num < 7) return -1;
            return 6 - get.value(card) + (num / 14 - 1);
          },
          filter(event, player) {
            if (!player.countCards('he', lib.skill.sdyx_paoding.filterCard)) return false;
            return game.hasPlayer(function (target) {
              return target != player && target.countCards('he') > 0;
            });
          },
          filterTarget(card, player, target) {
            if (target == player) return false;
            return target.countCards('he') > 0;
          },
          position: 'he',
          discard: false,
          lose: false,
          delay: false,
          selectTarget: [1, 3],
          multitarget: true,
          multiline: true,
          line: 'fire',
          content() {
            'step 0';
            var number = cards[0].number;
            player.discard(cards);
            var id = number.toString();
            var idlist = lib.skill.sdyx_paoding.list[id];
            // var list=idlist.randomGet();
            //  game.log(cards[0],'的点数裂成了',list.slice(0));
            event.chooselist = idlist.slice(0);
            if (event.chooselist.length > 1) {
              var list = [];
              for (var i = 0; i < event.chooselist.length; i++) {
                list.push([i, event.chooselist[i].join('+')]);
              }
              var next = player.chooseButton(['选择要分裂的点数', [list, 'textbutton']]);
              next.set('forced', true);
              next.set('selectButton', [1, 1]);
              next.set('ai', function (button) {
                return Math.random();
              });
            } else {
              event._result = { links: 0 };
            }
            'step 1';
            var list = event.chooselist[result.links[0]];
            game.log(player, '选择了点数', list.slice(0));
            for (var target of targets) {
              var discards = target.getCards('he', function (card) {
                var num = card.number;
                if (!list.includes(num)) return false;
                return lib.filter.cardDiscardable(card, target, event.name);
              });
              if (discards.length) {
                target.discard(discards);
              } else {
                game.log(target, '没有符合可以弃置的牌');
              }
            }
          },
          ai: {
            order: 10,
            result: {
              target(player, target) {
                return -target.countCards('he');
              }
            },
            threaten: 2
          }
        },
        //绝欧阳锋--霸天20220501
        sdyx_nimai3: {
          trigger: { global: 'useCard1' },
          names: {
            guohe: 'wuzhong',
            wuzhong: 'guohe',
            shunshou: 'wugu',
            wugu: 'shunshou',
            wanjian: 'taoyuan',
            taoyuan: 'wanjian'
          },
          filter(event, player) {
            if (get.itemtype(event.card) == 'card') return false;
            var name = event.card.name;
            var bool = lib.skill['sdyx_nimai3'].names[name];
            if (!bool) return false;
            var storage = player.getStorage('sdyx_nimai');
            if (!storage.includes(name)) return false;
            return true;
          },
          logTarget: 'player',
          check(event, player) {
            var eff = 0;
            var name = event.card.name;
            var namex = lib.skill['sdyx_nimai3'].names[name];
            var vcard = event.card;
            vcard.name = namex;
            for (var i = 0; i < event.targets.length; i++) {
              var target = event.targets[i];
              var eff1 = get.effect(target, event.card, event.player, player);
              var eff2 = get.effect(target, vcard, event.player, player);
              eff += eff2;
              eff -= eff1;
            }
            return eff >= 0;
          },
          content() {
            'step 0';
            event.vcard = trigger.card;
            var name = trigger.card.name;
            var namex = lib.skill['sdyx_nimai3'].names[name];
            trigger.card.name = namex;
            game.log(event.vcard, '改为了', trigger.card);
            player.unmarkAuto('sdyx_nimai', [name]);
          }
        },
        sdyx_nimai2: {
          trigger: { player: 'phaseZhunbeiBegin' },
          forced: true,
          popup: false,
          content() {
            var storage = player.getStorage('sdyx_nimai');
            if (!storage.length) return;
            storage = storage.slice(0);
            player.unmarkAuto('sdyx_nimai', storage);
          }
        },
        sdyx_nimai: {
          group: ['sdyx_nimai2', 'sdyx_nimai3'],
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:4',
          usable: 1,
          intro: {
            mark(dialog, storage2, player) {
              var storage = player.getStorage('sdyx_nimai');
              if (!storage.length) return '无';
              var list = [];
              for (var i = 0; i < storage.length; i++) {
                list.push(['锦囊', '', storage[i]]);
              }
              dialog.addAuto([list, 'vcard']);
            },
            markcount(storage, player) {
              return storage.length;
            }
          },
          content() {
            'step 0';
            var text = '逆脉:选择三张牌名记录';
            var inpile = ['guohe', 'wuzhong', 'shunshou', 'wugu', 'wanjian', 'taoyuan'];
            player.chooseVCardButton(true, inpile, text, 3).set('ai', function (button) {
              return 1;
            });
            'step 1';
            if (result.bool) {
              player.markAuto(
                'sdyx_nimai',
                function (links) {
                  var list = [];
                  for (var i of links) {
                    list.add(i[2]);
                  }
                  return list;
                }(result.links)
              );
            }
          },
          ai: {
            basic: { order: 10 },
            result: { player: 1 }
          }
        },
        sdyx_liudu: {
          group: 'sdyx_liudu2',
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            player: 'damageBegin4',
            global: 'damage'
          },
          filter(event, player) {
            return game.hasNature(event, 'jy_du');
          },
          forced: true,
          content() {
            if (event.triggername == 'damageBegin4') {
              trigger.cancel();
            } else player.draw();
          },
          ai: {
            nojy_du: true,
            effect: {
              target(card, player, target, current) {
                if (game.hasNature(card, 'jy_du') || get.tag(card, 'jy_duDamage')) return 'zerotarget';
              }
            }
          }
        },
        sdyx_liudu2: {
          audio: 'sdyx_liudu',
          trigger: {
            global: 'gameStart'
          },
          forced: true,
          content() {
            get.randomCard(function (card) {
              if (card.name == 'sha' && !card.nature) {
                card.addNature('jy_du');
                //game.setNature(card,'jy_du');
                card.setMark('sdyx_liudu', player);
              }
              return false;
            });
            game.addGlobalSkill('sdyx_liudu3');
          }
        },
        sdyx_liudu3: {
          audio: 'sdyx_liudu',
          trigger: {
            player: 'useCardAfter'
          },
          forced: true,
          popup: false,
          _priority: -100,
          lastDo: true,
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            if (event.card.nature != 'jy_du') return false;
            if (!event.targets || !event.targets.length) return false;
            if (!event.cards || event.cards.length != 1) return false;
            if (event.skill) return false;
            if (!event.cards[0].hasMark('sdyx_liudu', true)) return false;
            if (
            !game.hasPlayer2(function (current) {
              return current.getHistory('damage', function (damage) {
                return damage.card == event.card && damage.nature == 'jy_du';
              }).length;
            }))

            return false;
            return true;
          },
          content() {
            trigger.cards[0].removeNature('jy_du');
            //game.setNature(trigger.cards[0],[]);
            trigger.cards[0].clearMark('sdyx_liudu', true);
          }
        },
        //上官剑南---霸天20220428
        //铁掌
        sdyx_tiezhangsgjn: {
          audio: 'ext:金庸群侠传/peiyin:2'
        },
        //流芳
        sdyx_liufang: {
          dutySkill: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'gainEnd',
            global: 'gameDrawAfter'
          },
          group: 'sdyx_liufang2',
          forced: true,
          popup: false,
          filter(event, player) {
            if (player.hasSkill('sdyx_liufang_achieve')) return false;
            if (player.storage.sdyx_liufang) return false;
            if (event.name == 'gain') {
              return event.cards && event.cards.some((card) => card.name == 'jydiy_wumuyishu');
            }
            if (event.name == 'gameDraw') {
              return player.countCards('h', { name: 'jydiy_wumuyishu' });
            }
            return false;
          },
          content() {
            player.addSkill('sdyx_liufang_achieve');
          },
          subSkill: {
            achieve: {
              charlotte: true,
              trigger: {
                player: 'phaseZhunbeiBegin'
              },
              forced: true,
              _priority: -1,
              derivation: 'sdyx_tiezhang2',
              content() {
                var count = player.countCards('he', (card) => card.name == 'jydiy_wumuyishu');
                if (count) {
                  game.log(player, '成功完成使命');
                  player.addSkills('sdyx_liufang3');
                } else {
                  game.log(player, '使命失败');
                  player.addSkills('sdyx_tiezhang2');
                }
                player.removeSkill('sdyx_liufang_achieve');
                player.storage.sdyx_liufang = true;
              }
            }
          }
        },
        sdyx_liufang3: {
          audio: 'sdyx_liufang',
          trigger: {
            player: 'loseAfter'
          },
          charlotte: true,
          filter(event, player) {
            if (event.type != 'discard') return false;
            return event.cards2 && event.cards2.filter((card) => get.position(card, true) == 'd' && card.name == 'jydiy_wumuyishu').length;
          },
          forced: true,
          content() {
            'step 0';
            'step 1';
            var gain = trigger.cards2.filter((card) => get.position(card, true) == 'd' && card.name == 'jydiy_wumuyishu');
            event.togive = gain;
            player.
            chooseTarget('流芳', '是否将' + get.translation(event.togive) + '交给一其他名角色?', function (card, player, target) {
              return target != player;
            }).
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
            'step 2';
            if (result.targets?.length) {
              player.give(event.togive, result.targets[0], true);
              //result.targets[0].gain(event.togive,'gain','log');
              //player.line(result.targets[0],'green');
            }
          }
        },
        sdyx_liufang2: {
          audio: 'sdyx_liufang',
          trigger: {
            global: 'loseAfter'
          },
          filter(event, player) {
            if (event.type != 'discard') return false;
            if (event.player == player) return false;
            return event.cards2 && event.cards2.filter((card) => get.position(card, true) == 'd' && card.name == 'jydiy_wumuyishu').length;
          },
          forced: true,
          content() {
            'step 0';
            'step 1';
            var gain = trigger.cards2.filter((card) => get.position(card, true) == 'd' && card.name == 'jydiy_wumuyishu');
            player.gain(gain, 'gain2', 'log');
          }
        },
        //武略
        sdyx_wulve: {
          logTarget: 'player',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCard2'
          },
          usable: 1,
          check(event, player) {
            var att = get.attitude(player, event.player);
            if (att > 0) {
              if (event.targets.filter((target) => get.effect(target, event.card, event.player, event.player) < 0).length) return true;
              if (
              game.hasPlayer(function (current) {
                return !event.targets.includes(current) && event.player.canUse(event.card, current) && get.effect(current, event.card, event.player, event.player) > 0;
              }))
              {
                return true;
              }
              return false;
            } else {
              var goon = lib.skill.sdyx_wulve.filterx(event, player);
              var count = event.targets.filter((target) => get.effect(target, event.card, event.player, event.player) > 0).length;
              if (!goon) {
                if (count == event.targets.length) return true;
                return false;
              } else {
                var bool = !game.hasPlayer(function (current) {
                  return !event.targets.includes(current) && event.player.canUse(event.card, current) && get.effect(current, event.card, event.player, event.player) > 0;
                });
                if (count == event.targets.length && bool && !event.player.isDamaged()) return true;
                return false;
              }
            }
            return false;
          },
          filter(event, player) {
            if (!event.targets || !event.targets.length) return false;
            return event.targets.length >= 2;
          },
          filterx(event, player) {
            var info = get.info(event.card);
            if (info.allowMultiple == false) return false;
            //if(!info.enable) return false;
            if (!info.multitarget) {
              if (
              game.hasPlayer(function (current) {
                return !event.targets.includes(current) && event.player.canUse(event.card, current);
              }))
              {
                return true;
              }
            }
            return false;
          },
          content() {
            'step 0';
            var goon = lib.skill.sdyx_wulve.filterx(trigger, player);
            if (!goon) event.goto(3);
            'step 1';
            trigger.player.
            chooseTarget('武略', '是否为' + get.translation(trigger.card) + '增加一个目标并回复一体力?', function (card, player, target) {
              return !_status.event.sourcex.includes(target) && _status.event.player.canUse(_status.event.card, target);
            }).
            set('sourcex', trigger.targets).
            set('ai', function (target) {
              var player = _status.event.player;
              return get.effect(target, _status.event.card, player, player);
            }).
            set('card', trigger.card);
            'step 2';
            if (result.targets?.length) {
              event.target = result.targets[0];
              trigger.targets.push(event.target);
              if (trigger.player.isDamaged()) {
                trigger.player.recover();
              }
              trigger.player.line(event.target);
              var evt = trigger;
              if (evt.cards.length) {
                game.log(event.target, '额外成为了', evt.card, '(', evt.cards, ')', '的目标');
              } else {
                game.log(event.target, '额外成为了', evt.card, '的目标');
              }
              event.finish();
            }
            'step 3';
            trigger.player.
            chooseTarget('武略', '减少一名' + get.translation(trigger.card) + '的目标并令' + get.translation(player) + '摸一张牌', true, function (card, player, target) {
              return _status.event.sourcex.includes(target);
            }).
            set('sourcex', trigger.targets).
            set('ai', function (target) {
              var player = _status.event.player;
              return -get.effect(target, _status.event.card, player, player);
            }).
            set('card', trigger.card);
            'step 4';
            if (result.targets?.length) {
              event.target = result.targets[0];
              trigger.targets.remove(event.target);
              player.draw();
              trigger.player.line(event.target);
              var evt = trigger;
              if (evt.cards.length) {
                game.log(event.target, '解除成为', evt.card, '(', evt.cards, ')', '的目标');
              } else {
                game.log(event.target, '解除成为', evt.card, '的目标');
              }
            }
          }
        },
        //绝黄药师
        //奇阵//霸天
        sdyx_qizhen_ai: { charlotte: true },
        sdyx_qizhen2: {
          audio: 'sdyx_qizhen',
          //usable:1,
          trigger: { player: 'useCard', target: 'useCardToPlayered' },
          filter(event, player, name) {
            if (player.hasSkill('sdyx_qizhen_ai')) return false;
            var cards = player.getExpansions('sdyx_qizhen');
            if (cards.length != 1) return false;
            if (name == 'useCardToPlayered' && event.player == player) return false;
            if (name == 'useCard' && get.type(event.card) == 'equip') return false;
            var number = event.card.number;
            if (typeof number != 'number') return false;
            var zheng = cards[0].number;
            zheng = zheng.toString();
            return lib.skill.sdyx_qizhen.numbers[zheng].includes(number);
          },
          prompt(event, player) {
            var num = lib.skill.sdyx_qizhen2.getNumber(event, player);
            return '是否发动【奇阵】,摸' + get.cnNumber(num) + '张牌？';
          },
          getNumber(trigger, player) {
            var number = trigger.card.number;
            var cards = player.getExpansions('sdyx_qizhen');
            var zheng = cards[0].number;
            zheng = zheng.toString();
            var list = lib.skill.sdyx_qizhen.numbers[zheng];
            if (!list.includes(number)) return 0;
            list = list.slice(0);
            var pos = list.indexOf(number);
            if (list.length > 1) list.reverse();
            return list[pos];
          },
          content() {
            var num = lib.skill.sdyx_qizhen2.getNumber(trigger, player);
            player.draw(num);
            player.addTempSkill('sdyx_qizhen_ai');
          },
          mod: {
            aiOrder(player, card, numx) {
              if (get.type(card) == 'equip') return numx;
              if (player.hasSkill('sdyx_qizhen_ai')) return numx;
              var number = card.number;
              if (typeof number != 'number') return numx;
              var num = lib.skill.sdyx_qizhen2.getNumber({ card: card }, player);
              if (num == 0) return numx;
              return numx + num * 10;
            }
          },
          ai: {
            effect: {
              target(card, player, target) {
                if (player == target) return;
                if (target.hasSkill('sdyx_qizhen_ai')) return;
                var cards = target.getExpansions('sdyx_qizhen');
                if (cards.length != 1) return;
                var number = card.number;
                if (typeof number != 'number') return;
                var num = lib.skill.sdyx_qizhen2.getNumber({ card: card }, target);
                if (num == 0) return;
                return [1, num];
              },
              player(card, player, target) {
                if (player.hasSkill('sdyx_qizhen_ai')) return;
                var cards = player.getExpansions('sdyx_qizhen');
                if (cards.length != 1) return;
                if (get.type(card) == 'equip') return;
                var number = card.number;
                if (typeof number != 'number') return;
                var num = lib.skill.sdyx_qizhen2.getNumber({ card: card }, player);
                if (num == 0) return;
                return [1, num];
              }
            }
          }
        },
        sdyx_qizhen: {
          group: 'sdyx_qizhen2',
          intro: {
            content: 'expansion',
            markcount: 'expansion'
          },
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          },
          numbers: {
            1: [1],
            2: [1, 2],
            3: [1, 3],
            4: [1, 2, 4],
            5: [1, 5],
            6: [1, 2, 3, 6],
            7: [1, 7],
            8: [1, 2, 4, 8],
            9: [1, 3, 9],
            10: [1, 2, 5, 10],
            11: [1, 11],
            12: [1, 2, 3, 4, 6, 12],
            13: [1, 13]
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseBefore',
            player: ['enterGame', 'damageEnd']
          },
          forced: true,
          filter(event, player) {
            var cards = player.getExpansions('sdyx_qizhen');
            if (event.name == 'damage') return cards.length == 1;
            return event.name != 'phase' || game.phaseNumber == 0;
          },
          content() {
            'step 0';
            var cards = get.cards(5);
            event.cards = cards;
            var str = '奇阵:选择要操作的牌';
            if (trigger.name == 'damage') str = '奇阵:是否选择替换' + get.translation(player.getExpansions('sdyx_qizhen')[0]) + '的牌';
            var dialog = [str, '<div class="text center">牌堆顶</div>', cards];
            player.chooseButton(dialog, trigger.name == 'damage' ? false : true).set('ai', function (button) {
              var number = button.link.number;
              number = number.toString();
              if (trigger.name == 'damage') {
                var number2 = get.number(player.getExpansions('sdyx_qizhen')[0]);
                number2 = number2.toString();
                return lib.skill.sdyx_qizhen.numbers[number].length - lib.skill.sdyx_qizhen.numbers[number2].length;
              }
              return lib.skill.sdyx_qizhen.numbers[number].length;
            });
            'step 1';
            if (result.links?.length) {
              var link = result.links[0];
              game.cardsGotoSpecial(link);
              if (trigger.name == 'damage') {
                var change = player.getExpansions('sdyx_qizhen')[0];
                player.lose(change, 'visible', ui.special);
                var pos = cards.indexOf(link);
                cards[pos] = change;
              } else {
                cards.remove(link);
              }
              event.cards = cards;
              player.addToExpansion(link, 'gain2', 'log').gaintag.add('sdyx_qizhen');
            }
            'step 2';
            while (cards.length) {
              var target = cards.pop();
              ui.cardPile.insertBefore(target.fix(), ui.cardPile.firstChild);
            }
            game.updateRoundNumber();
          }
        },
        //箫剑//藏海
        sdyx_xiaojian: {
          shaRelated: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCardToPlayered' },
          check(event, player) {
            return (
              get.effect(
                event.target,
                {
                  name: 'guohe_ai',
                  filterCard(card, player) {
                    return card.suit == 'club';
                  },
                  position: 'hej'
                },
                event.target,
                player
              ) > 0);

          },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            return (
              event.target.countDiscardableCards(event.target, 'hej', function (card) {
                return card.suit == 'club';
              }) > 0);

          },
          logTarget: 'target',
          content() {
            var target = trigger.target;
            target.
            discardPlayerCard(true, '请弃置自己区域内的一张♣️️牌', target, 'hej').
            set('visible', true).
            set('filterButton', function (card) {
              return card.link.suit == 'club';
            });
            ///ai有系统默认的
          }
        },
        //完颜康
        sdyx_panguo: {
          mark: '叛',
          intro: {
            content(storage) {
              return '你已经所属过的势力为' + get.translation(storage);
            }
          },
          init(player) {
            player.storage.sdyx_panguo = [player.group];
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'damageEnd' },
          filter(event, player) {
            return game.hasPlayer(function (current) {
              return current.group && current.group != 'unknown' && !player.storage.sdyx_panguo.includes(current.group);
            });
          },
          content() {
            'step 0';
            var list = [];
            game.countPlayer(function (current) {
              if (current.group && current.group != 'unknown' && !player.storage.sdyx_panguo.includes(current.group)) list.add(current.group);
            });
            game.log('你可以选择的势力为' + get.translation(list));
            var list2 = list.slice(0);
            list2.sort(function (a, b) {
              return lib.skill.sdyx_panguo.count(b) - lib.skill.sdyx_panguo.count(a);
            });
            player.chooseControl(list).set('prompt', '请选择一个势力').ai = function () {
              return list2[0];
            };
            'step 1';
            player.popup(result.control, get.groupnature(result.control + 2));
            game.log(player, '选择了', '#g' + get.translation(result.control + 2));
            player.changeGroup(result.control);
            'step 2';
            var num = game.countPlayer(function (current) {
              return current.group == player.group;
            });
            player.draw(num);
            player.storage.sdyx_panguo.add(player.group);
            game.log('你已经所属过的势力为' + get.translation(player.storage.sdyx_panguo));
          },
          count(group) {
            var player = _status.event.player;
            return game.countPlayer(function (current) {
              return current != player && current.group == group && get.attitude(current, player) < 0;
            });
          }
        },
        //通敌调整版
        sdyx_tongdi: {
          init(player) {
            player.storage.sdyx_tongdi = false;
          },
          derivation: ['jy_dalu', 'sdyx_quanwang'],
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseZhunbeiBegin' },
          filter(event, player) {
            return game.countGroup() <= 2 || player.storage.sdyx_panguo.length >= 3 && !player.storage.sdyx_tongdi;
          },
          forced: true,
          content() {
            player.loseMaxHp();
            player.chooseDrawRecover(2, true, function (event, player) {
              if (player.hp == 1 && player.isDamaged()) return 'recover_hp';
              return 'draw_card';
            });
            player.addSkills('jy_dalu');
            player.addSkills('sdyx_quanwang');
            player.awakenSkill('sdyx_tongdi');
            player.storage.sdyx_tongdi = true;
            //player.removeSkills('sdyx_tongdi');
          }
        },
        sdyx_quanwang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { source: 'dieAfter' },
          filter(event, player) {
            if (get.mode() != 'identity') return false;
            //if(player.identity='zhu') return false;
            if (event.player != player) {
              var bp = get.jy_bangpai(event.player);
              for (var i of bp) {
                if (lib.card[i] && !player.hasSkill(i)) return true;
              }
            }
            return false;
          },
          content() {
            trigger.player.choose_bangpai_skill({
              player: trigger.player,
              gainSkillPlayer: player,
              chooseSkillPlayer: player
            });
          }
        },
        //完颜康结束
        //SP梅超风
        sdyx_xiezhao: {
          mod: {
            cardnature(card, player) {
              if (card.name == 'sha' && !card.nature) return 'jy_xie';
            },
            targetInRange(card) {
              if (card.name == 'sha' && get.nature(card) == 'jy_xie') return true;
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: ['useCard1', 'respond'] },
          firstDo: true,
          forced: true,
          filter(event, player) {
            return event.card && event.card.name == 'sha' && event.card.nature == 'jy_xie' && !event.skill && event.cards.length == 1 && event.card.name == 'sha' && event.cards[0].nature != 'jy_xie';
          },
          content() {}
        },
        //震骨
        sdyx_zhengu: {
          subSkill: {
            off: {}
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filterTarget(card, player, target) {
            return target != player && target.countCards('hej') > 0 && !target.hasSkill('sdyx_zhengu_off');
          },
          content() {
            'step 0';
            target.addTempSkill('sdyx_zhengu_off');
            event.isDisCard = false;
            var cards = target.getCards('hej', function (card) {
              return card.number % 2 == 0; //&&lib.filter.cardDiscardable(card,target,'sdyx_zhengu')
            });
            if (cards.length) {
              target.discard(cards);
              event.isDisCard = true;
            }
            'step 1';
            event._result = { bool: false };
            var cardNum = target.countCards('hej');
            if (cardNum > 0 && cardNum % 2 == 0) {
              if (target.countDiscardableCards(target, 'hej')) {
                target.discardPlayerCard('hej', target, true);
              }
            }
            'step 2';
            if (result.bool) event.isDisCard = true;
            if (!event.isDisCard) player.getStat().skill[event.name]--;
          },
          ai: {
            order: 10,
            result: {
              target(player, target) {
                var num = target.countCards('he', function (card) {
                  return card.number % 2 == 0; //&&lib.filter.cardDiscardable(card,target,'sdyx_zhengu')
                });
                var num2 = target.countCards('j', function (card) {
                  return card.number % 2 == 0; //&&lib.filter.cardDiscardable(card,target,'sdyx_zhengu')
                });
                if (num > 0 && num2 == 0) return -num;
                if (num == 0 && num2 > 0) return 2 * num2;
                var num3 = target.countCards('hej', function (card) {
                  return card.number % 2 == 0; //&&lib.filter.cardDiscardable(card,target,'sdyx_zhengu')
                });
                var num4 = target.countCards('hej');
                if (num3 == 0 && num4 > 0 && num4 % 2 == 0) return lib.card.guohe.ai.result.target(target, target);
                return 0;
              }
            }
          }
        },
        //南希仁
        //铁肩
        sdyx_tiejian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'damageBegin3' },
          filter(event, player) {
            if (event.player == player) return false;
            if (event.num < 1) return false;
            if (event.player.hp <= event.num) return true;
            if (event.num > 1) return true;
            if (event.player.getHistory('damage').length) return true;
            return false;
          },
          check(event, player) {
            var att = get.attitude(player, event.player);
            if (att > 0 && player.hp > event.num) return true;
            if (event.num > 1) {
              if (att < 0) return false;
              if (att > 0 && player.hp < event.num + 2) return true;
              if (att > 0 && player.hp > 1) return true;
            }
            return false;
          },
          logTarget: 'player',
          content() {
            'step 0';
            event.tar = trigger.player;
            'step 1';
            trigger.player = player;
            'step 2';
            var num = 3;
            if (event.tar.group == player.group) {
              num = 4;
            } else if (get.jy_bangpai) {
              var bp1 = get.jy_bangpai(player);
              var bp2 = get.jy_bangpai(event.tar);
              for (var i of bp1) {
                if (bp2.includes(i)) {
                  num = 4;
                  break;
                }
              }
            }
            event.tar.draw(num);
            'step 3';
            event.tar.chooseCard('he', '是否交给' + get.translation(player) + '一张牌？').set('ai', function (card) {
              var player = _status.event.player;
              var target = _status.event.parent.player;
              if (get.attitude(player, target) > 0) {
                return get.value(card, target);
              } else {
                return -get.value(card);
              }
            });
            'step 4';
            if (result.cards?.length) {
              event.tar.give(result.cards, player, true);
              //player.gain(result.cards,'giveAuto',event.tar);
            }
          }
        },
        sdyx_tiejian_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: ['damageBegin4']
          },
          filter(event, player) {
            return event.player != player && event.num > 0 && event.num > event.player.hp;
          },
          check(event, player) {
            var att = get.attitude(player, event.player);
            if (att > 0 && player.hp > event.num) return true;
            if (event.num > 1) {
              if (att < 0) return false;
              if (att > 0 && player.hp < event.num + 2) return true;
              if (att > 0 && player.hp > 1) return true;
            }
            return false;
          },
          logTarget: 'player',
          content() {
            'step 0';
            event.tar = trigger.player;
            'step 1';
            trigger.player = player;
            'step 2';
            if (event.tar.group != player.group) event.tar.draw(3);else
            event.tar.draw(4);
          }
        },
        //血证
        sdyx_xuezheng: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'die'
          },
          forced: true,
          forceDie: true,
          filter(event, player) {
            return event.source && event.source.isIn();
          },
          hasStr(str, target) {
            if (!str || !str.length) return false;
            var str2 = '';
            if (target.name1) {
              str2 += lib.skill.sdyx_xuezheng.slimName(target.name1);
            }
            if (target.name2) {
              str2 += lib.skill.sdyx_xuezheng.slimName(target.name2);
            }
            for (var i = 0; i < str.length; i++) {
              if (str2.includes(str[i])) return true;
            }
            return false;
          },
          slimName(str) {
            var str2 = lib.translate[str];
            if (lib.translate[str + '_ab']) str2 = lib.translate[str + '_ab'];
            if (!str2) return '';
            if (str2.indexOf('SP') == 0) {
              str2 = str2.slice(2);
            } else if (str2.indexOf('TW') == 0) {
              str2 = str2.slice(2);
            } else if (str2.indexOf('OL') == 0) {
              str2 = str2.slice(2);
            } else if (str2.indexOf('JSP') == 0) {
              str2 = str2.slice(3);
            } else if (str2.indexOf('☆SP') == 0) {
              str2 = str2.slice(3);
            } else if (str2.indexOf('手杀') == 0) {
              str2 = str2.slice(2);
            }
            return str2;
          },
          content() {
            if (!_status.sdyx_xuezheng) _status.sdyx_xuezheng = '';
            if (trigger.source.name1) {
              _status.sdyx_xuezheng += lib.skill.sdyx_xuezheng.slimName(trigger.source.name1);
            }
            if (trigger.source.name2) {
              _status.sdyx_xuezheng += lib.skill.sdyx_xuezheng.slimName(trigger.source.name2);
            }
            game.addGlobalSkill('sdyx_xuezheng1');
            game.countPlayer(function (current) {
              current.markSkill('sdyx_xuezheng1');
            });
          },
          logTarget: 'source'
        },
        sdyx_xuezheng1: {
          firstDo: true,
          trigger: {
            player: 'useCard1'
          },
          forced: true,
          filter(event, player) {
            return get.tag(event.card, 'damage');
          },
          popup: false,
          content() {
            if (!trigger.directHit) trigger.directHit = [];
            var players = game.filterPlayer(function (current) {
              var str = _status.sdyx_xuezheng;
              return lib.skill.sdyx_xuezheng.hasStr(str, current);
            });
            //game.log('发动sdyx_xuezheng')
            //if(players.length)game.log(players);
            if (players.length) trigger.directHit.addArray(players);
          },
          mark: true,
          intro: {
            content(storage, player) {
              var str = _status.sdyx_xuezheng && _status.sdyx_xuezheng.length ? _status.sdyx_xuezheng : '无';
              return '血证关键字:' + str;
            }
          }
        },
        //
        sdyx_lunjian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseUseBegin' },
          global: 'sdyx_lunjian_die',
          filter(event, player) {
            if (game.roundNumber == 1) return true;
            return game.roundNumber > 0 && game.roundNumber % 4 == 0;
          },
          check(event, player) {
            return (
              player.countCards('h', function (card) {
                return (card.name == 'sha' || get.type(card) == 'trick' && get.tag(card, 'damage')) && player.hasValueTarget(card);
              }) > 0);

          },
          logTarget(current) {
            return game.filterPlayer().sortBySeat();
          },
          content() {
            'step 0';
            event.forceDie = true;
            event.targets = game.filterPlayer().sortBySeat(player);
            event.targets2 = event.targets.slice(0);
            event.UseList = [];
            event.dieList = [];
            event.maxDamage = false;
            'step 1';
            if (targets.length) {
              var target = targets.shift();
              event.target = target;
              if (!target.isIn()) {
                event.redo();
                return;
              }
              player.line(target);
              //target.addTempClass('target');
            } else {
              event.goto(4);
            }
            'step 2';
            var next = target.chooseToUse({
              prompt: '论剑',
              prompt2: '请使用一张杀或带伤害标签的普通锦囊牌!',
              filterCard(cardx, player, target) {
                return (cardx.name == 'sha' || get.type(cardx) == 'trick' && get.tag(cardx, 'damage')) && lib.filter.filterCard.apply(this, arguments);
              },
              //forced:true,//强制使用
              oncard(card, player) {
                if (!card) card = this.card;
                card.sdyx_lunjian = true;
              }
            });
            if (lib.config.extension_金庸群侠传_jiexiantupo) next.set('addCount', false);
            'step 3';
            if (result.bool) {
              event.UseList.add(target);
              //if(lib.config.extension_金庸群侠传_jiexiantupo){
              //    if(target==player){
              //        trigger.addCount=false;
              //        player.getStat().card.sha--
              //    }
              //}
            } else {


              //target.loseHp();
            }event.goto(1);'step 4';
            if (event.UseList.length) {
              var getnum = function (target2, evt2) {
                var damagenum = 0;
                var list = target2.getHistory('sourceDamage', function (evt) {
                  return evt.card && evt.card.sdyx_lunjian && evt.getParent('sdyx_lunjian') == evt2;
                });
                for (var damage of list) {
                  damagenum += damage.num;
                }
                return damagenum;
              };
              event.UseList.sort(function (a, b) {
                return getnum(b, event) - getnum(a, event);
              });
              var mixnum = getnum(event.UseList[0], event);
              if (mixnum > 0 && (event.UseList.length == 1 || event.UseList.length > 1 && mixnum > getnum(event.UseList[1], event))) event.maxDamage = event.UseList[0];
              for (var tar of event.UseList) {
                if (getnum(tar, event) > 0) event.targets2.remove(tar);
              }
            }
            ////////////////////////////
            for (var lose of event.targets2) {
              if (lose.isIn()) lose.loseHp();
            }
            'step 5';
            if (event.dieList.length == 1) {
              var tar2 = event.dieList[0];
              if (tar2.isIn()) {
                tar2.draw(3);
                var card = get.cardPile(function (cardx) {
                  return cardx.name == 'jydiy_jiuyinzhengjing';
                });
                if (!card) {
                  card = game.createCard('jydiy_jiuyinzhengjing');
                }
                if (card) tar2.gain(card, 'gain2', 'log');
                game.log(tar2, '执行击杀奖励!!!');
              }
            }
            'step 6';
            if (event.maxDamage) {
              var tar3 = event.maxDamage;
              if (tar3.isIn()) {
                tar3.draw(3);
                var card = get.cardPile(function (cardx) {
                  return cardx.name == 'jydiy_jiuyinzhengjing';
                });
                if (!card) {
                  card = game.createCard('jydiy_jiuyinzhengjing');
                }
                if (card) tar3.gain(card, 'gain2', 'log');
                game.log(tar3, '执行高伤奖励!!!');
              }
            }
          },
          content_old() {
            'step 0';
            event.forceDie = true;
            event.targets = game.filterPlayer().sortBySeat(player);
            event.targets2 = event.targets.slice(0);
            event.UseList = [];
            event.dieList = [];
            event.maxDamage = false;
            'step 1';
            if (targets.length) {
              event.UseCard = null;
              var target = targets.shift();
              event.target = target;
              if (!target.isIn()) {
                event.redo();
                return;
              }
              player.line(target);
              target.addTempClass('target');
              var card = get.randomCard(function (cardx) {
                if (cardx.name == 'sha' || get.type(cardx) == 'trick' && get.tag(cardx, 'damage')) return target.hasUseTarget(cardx);
                //if(cardx.name=="sha"||(get.type(cardx)=="trick"&&get.tag(card,'damage'))) return true;
                return false;
              });
              if (!card) {
                target.popup('悲剧!', 'fire');
                game.log('牌堆中无合法的牌!!');
                event.redo();
              } else {
                target.gain(card, 'gain2', 'log');
                event.UseCard = card;
              }
            } else {
              event.goto(4);
            }
            'step 2';
            if (event.UseCard && target.hasUseTarget(event.UseCard) && target.getCards('h').includes(event.UseCard)) {
              target.chooseToUse({
                prompt: '论剑',
                prompt2: '请使用' + get.translation(event.UseCard) + '!',
                filterCard(cardx, player, target) {
                  return cardx == _status.event.cardx && lib.filter.filterCard.apply(this, arguments);
                },
                forced: true,
                selectCard: -1,
                cardx: event.UseCard,
                //_get_card:event.UseCard,
                oncard(card, player) {
                  if (!card) card = this.card;
                  card.sdyx_lunjian = true;
                  //game.log(card,"lunjian");
                  //card.sdyx_lunjian=this.getParent("sdyx_lunjian");
                }
              });
            } else {
              event._result = { bool: false };
            }
            'step 3';
            if (result.bool) {
              event.UseList.add(target);
            } else {


              //target.loseHp();
            }event.goto(1);'step 4';
            if (event.UseList.length) {
              var getnum = function (target2, evt2) {
                var damagenum = 0;
                var list = target2.getHistory('sourceDamage', function (evt) {
                  return evt.card && evt.card.sdyx_lunjian && evt.getParent('sdyx_lunjian') == evt2;
                });
                for (var damage of list) {
                  damagenum += damage.num;
                }
                return damagenum;
              };
              event.UseList.sort(function (a, b) {
                return getnum(b, event) - getnum(a, event);
              });
              var mixnum = getnum(event.UseList[0], event);
              if (mixnum > 0 && (event.UseList.length == 1 || event.UseList.length > 1 && mixnum > getnum(event.UseList[1], event))) event.maxDamage = event.UseList[0];
              for (var tar of event.UseList) {
                if (getnum(tar, event) > 0) event.targets2.remove(tar);
              }
            }
            ////////////////////////////
            for (var lose of event.targets2) {
              if (lose.isIn()) lose.loseHp();
            }
            'step 5';
            if (event.dieList.length == 1) {
              var tar2 = event.dieList[0];
              if (tar2.isIn()) {
                tar2.draw(3);
                var card = get.cardPile(function (cardx) {
                  return cardx.name == 'jydiy_jiuyinzhengjing';
                });
                if (!card) {
                  card = game.createCard('jydiy_jiuyinzhengjing');
                }
                if (card) tar2.gain(card, 'gain2', 'log');
                game.log(tar2, '执行击杀奖励!!!');
              }
            }
            'step 6';
            if (event.maxDamage) {
              var tar3 = event.maxDamage;
              if (tar3.isIn()) {
                tar3.draw(3);
                var card = get.cardPile(function (cardx) {
                  return cardx.name == 'jydiy_jiuyinzhengjing';
                });
                if (!card) {
                  card = game.createCard('jydiy_jiuyinzhengjing');
                }
                if (card) tar3.gain(card, 'gain2', 'log');
                game.log(tar3, '执行高伤奖励!!!');
              }
            }
          }
        },
        sdyx_lunjian_die: {
          trigger: { player: 'die' },
          filter(event, player) {
            return event.source && event.reason.card && event.reason.card.sdyx_lunjian;
          },
          forced: true,
          forceDie: true,
          content() {
            event.getParent('sdyx_lunjian').dieList.add(trigger.source);
            game.log(trigger.source, '达成击杀条件!!');
          }
        },
        sdyx_xuantong: {
          audio: 'ext:金庸群侠传/peiyin:3',
          enable: 'phaseUse',
          filterCard: { name: 'sha' },
          filter(event, player) {
            return player.countCards('h', 'sha');
          },
          check(card) {
            return 6 - get.value(card);
          },
          content() {
            var card = get.randomCard(function (card) {
              return get.type(card) == 'trick' && get.tag(card, 'damage');
            });
            if (card) {
              player.gain(card, 'gain2', 'log');
            } else {
              player.popup('悲剧!');
              game.log('牌堆没有合适的锦囊牌');
            }
          },
          ai: {
            order: 2.5,
            result: {
              player: 1
            }
          }
        },
        sdyx_xiangma2: {
          audio: 'sdyx_xiangma',
          trigger: { global: 'equipEnd' },
          filter(event, player) {
            var equip = get.subtype(event.card);
            return equip == 'equip3' || equip == 'equip4';
            //return ['jydiyyinshuangzhudianju','jydiyyuhuacong','jydiyhanxuebaoma','jydiyzhuifenghuang','chitu','dawan','jueying','dilu'].includes(event.card.name);
          },
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          logTarget: 'player',
          content() {
            var name = trigger.card.name;
            if (name == 'jydiyyuhuacong' || name == 'jydiyyinshuangzhudianju' || name == 'jueying' || name == 'dilu') {
              trigger.player.draw(2);
            } else if (name == 'jydiyhanxuebaoma' || name == 'jydiyzhuifenghuang' || name == 'chitu' || name == 'dawan') {
              trigger.player.draw(3);
            } else trigger.player.draw(1);
          }
        },
        sdyx_xiangma: {
          group: 'sdyx_xiangma2',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: ['roundBegin', 'roundEnd']
          },
          forced: true,
          filter(event, player, name) {
            if (name == 'roundBegin') {
              return game.roundNumber == 1;
            } else {
              return game.roundNumber != 1;
            }
          },
          content() {
            'step 0';
            if (game.roundNumber == 1) {
              event.targets = game.filterPlayer(function (current) {
                return current.hasEmptySlot(3) || current.hasEmptySlot(4);
              });
              //game.log('list',event.targets);
            } else {
              event.goto(2);
            }
            'step 1';
            if (targets.length) {
              var target = targets.shift();
              if (!target.isIn()) return;
              player.line(target);
              target.addTempClass('target');
              var card = get.cardPile(function (cardx) {
                var subtype = get.subtype(cardx);
                return get.type(cardx) == 'equip' && (subtype == 'equip3' || subtype == 'equip4') && target.hasEmptySlot(subtype);
              });
              if (!card) {
                target.popup('悲剧!', 'fire');
                game.log('牌堆中无合法的坐骑牌!!');
              } else {
                target.equip(card);
              }
              event.redo();
            } else {
              event.finish();
            }
            'step 2';
            var equips = [];
            game.countPlayer(function (current) {
              var cards = current.getCards('e', function (equip) {
                var subtype = get.subtype(equip);
                return subtype == 'equip3' || subtype == 'equip4';
              });
              var cardsx = current.getExpansions('sdyx_xunhua2');
              if (cards.length && !cardsx.length) {
                current.lose(cards, ui.special, 'visible');
                current.$throw(cards);
                equips.addArray(cards);
              }
            });
            event.equips = equips;
            'step 3';
            if (event.equips && event.equips.length) {
              game.cardsGotoOrdering(event.equips);
            } else {
              event.finish();
            }
            'step 4';
            if (event.equips.length) {
              var doing = event.equips.shift();
              var subtype = get.subtype(doing);
              var targets = game.filterPlayer(function (current) {
                return current.hasEmptySlot(subtype);
              });
              if (targets.length) {
                var target = targets.randomGet();
                player.line(target, 'fire');
                target.equip(doing);
              }
              event.redo();
            } else {
              event.finish();
            }
          }
        },
        sdyx_xunhua: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (!player.countCards('h', 'tiesuo')) return false;
            return game.hasPlayer(function (target) {
              var cards = target.getExpansions('sdyx_xunhua2');
              return !cards.length;
            });
          },
          filterCard: { name: 'tiesuo' },
          filterTarget(card, player, target) {
            var cards = target.getExpansions('sdyx_xunhua2');
            return !cards.length;
          },
          discard: false,
          lose: false,
          content() {
            target.addToExpansion(cards, 'gain2', 'log', player).gaintag.add('sdyx_xunhua2');
            target.addSkill('sdyx_xunhua2');
          },
          check(card) {
            return 1;
          },
          ai: {
            expose: 0.1,
            order: 12,
            result: {
              target: 2
            }
          }
        },
        sdyx_xunhua2: {
          forced: true,
          nopop: true,
          charlotte: true,
          //mark:'card',
          mark: true,
          marktext2: '缰',
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_xunhua.png',
          intro: {
            name: '缰绳',
            content: 'expansion',
            markcount: 'expansion'
          },
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          }
        },
        //全金发
        sdyx_hengtong: {
          content() {
            'step 0';
            player.showCards(get.translation(player) + '展示了', cards);
            var num = 0;
            for (var k of cards) {
              num += k.number;
            }
            event.number = num;
            'step 1';
            //var cardPile=Array.from(ui.cardPile.childNodes);
            var num = player.hp * 10;
            var cardPile = [];
            var cardnum = ui.cardPile.childNodes.length;
            if (num >= cardnum) {
              cardPile = Array.from(ui.cardPile.childNodes);
            } else {
              for (var i = 0; i < num; i++) {
                cardPile.push(ui.cardPile.childNodes[i]);
              }
            }
            var list = lib.skill.sdyx_hengtong.getResult(cardPile, event.number);
            if (list.length) {
              var gain = list.randomGet();
              player.gain(gain, 'gain2', 'log');
            } else {
              player.popup('悲剧!');
              game.log('牌堆没有符合要求的牌!');
            }
          },
          ai: {
            order: 12,
            result: {
              player: 1
            }
          },
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (!player.countCards('hs')) return false;
            return ui.cardPile.childNodes.length;
          },
          position: 'hs',
          discard: false,
          lose: false,
          delay: false,
          getResult(cards, number) {
            var l = cards.length;
            var all = Math.pow(l, 2);
            var list = [];
            for (var i = 1; i < all; i++) {
              var array = [];
              for (var j = 0; j < l; j++) {
                if (Math.floor(i % Math.pow(2, j + 1) / Math.pow(2, j)) > 0) array.push(cards[j]);
              }
              var num = 0;
              for (var k of array) {
                num += k.number;
              }
              if (num == number) list.push(array);
            }
            return list;
          },
          usable: 1,
          filterCard(card, player) {
            return true;
          },
          selectCard() {
            //var player=_status.event.player;
            //var range1=[1,player.hp];
            return 1;
          },
          complexCard: true,
          complexSelect: true,
          check(card) {
            return card.number;
          }
        },
        sdyx_jingsuan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageAfter'
          },
          forced: true,
          filter(event, player) {
            return event.source && event.source != player && player.countCards('he', { color: 'red' });
          },
          content() {
            'step 0';
            player.
            chooseCard(
              'he',
              function (card) {
                return get.color(card) == 'red';
              },
              get.prompt2('sdyx_jingsuan', trigger.source)
            ).
            set('ai', function (card) {
              if (get.attitude(_status.event.player, _status.event.sourcex) > 0) {
                if (_status.event.player.isHealthy()) return -1;
                return card.number;
              } else {
                if (_status.event.player.isHealthy()) return 5 - get.value(card);
                return card.number;
              }
            }).
            set('sourcex', trigger.source);
            'step 1';
            if (result.cards?.length) {
              //trigger.source.gain(result.cards,player,'give','log');
              player.give(result.cards, trigger.source, true);
              //player.$give(result.cards,trigger.source);
              event.playerCard = result.cards[0];
            } else {
              event.finish();
            }
            'step 2';
            if (trigger.source.countCards('he')) {
              trigger.source.
              chooseCard(true, 'he').
              set('ai', function (card) {
                var sourceCard = _status.event.sourceCard;
                if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
                  if (sourceCard == card || card.number < sourceCard.number) {
                    if (get.color(card) == 'red') return 15 - get.value(card);
                    return 7 - get.value(card);
                  }
                  return -1;
                } else {
                  if (sourceCard == card || card.number < sourceCard.number) {
                    return -1;
                  }
                  if (get.color(card) == 'red') return -get.value(card);
                  return 10 - get.value(card);
                }
              }).
              set('sourceCard', event.playerCard);
            } else {
              event.chooselist = true;
            }
            'step 3';
            if (result.cards?.length) {
              //trigger.source.$give(result.cards,player);
              trigger.source.give(result.cards, player, true);
              //player.gain(result.cards,trigger.source,'give','log');
              if (event.playerCard == result.cards[0] || result.cards[0].number < event.playerCard.number) {
                event.chooselist = true;
              }
            }
            'step 4';
            if (event.chooselist) {
              var bool1 = !player.isHealthy();
              var bool2 =
              trigger.source.countCards('he', function (card) {
                return lib.filter.cardDiscardable(card, trigger.source, 'sdyx_jingsuan');
              }) > 0;
              if (bool1 && bool2) {
                player.
                chooseControl().
                set('prompt', '精算:请选择一项').
                set('choiceList', ['回复一体力', '令' + get.translation(trigger.source) + '弃置一张牌']).
                set('ai', function () {
                  var player = _status.event.player;
                  //if(player.isDamaged()&&get.recoverEffect(player,player)>0&&(player.hp==1||player.needsToDiscard()||player.hasSkillTag('maixie_hp'))) return 0;
                  return 0;
                });
              } else if (bool1) {
                event._result = { index: 0 };
              } else if (bool2) {
                event._result = { index: 1 };
              } else {
                event.finish();
              }
            } else {
              event.finish();
            }
            'step 5';
            if (result.index == 0) {
              player.recover();
            } else {
              if (
              trigger.source.countCards('he', function (card) {
                return lib.filter.cardDiscardable(card, trigger.source, 'sdyx_jingsuan');
              }))

              trigger.source.chooseToDiscard('he', true);
            }
          }
        },
        //沙通天侯通海
        sdyx_shuangjiao: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          position: 'he',
          filterCard(card, player) {
            if (ui.selected.cards.length) {
              return card.name == ui.selected.cards[0].name;
            }
            return player.countCards('he', function (cardx) {
              return cardx != card && cardx.name == card.name;
            });
          },
          selectCard: 2,
          complexCard: true,
          filter(event, player) {
            return player.countCards('he', function (cardx) {
              return player.countCards('he', function (card2) {
                return cardx != card2 && cardx.name == card2.name;
              });
            });
          },
          check(card) {
            return 6 - get.value(card);
          },
          content() {
            player.draw(4);
          },
          ai: {
            order: 1,
            result: {
              player: 8
            },
            threaten: 0.8
          }
        },
        sdyx_panlong: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:4',
          filter(event, player) {
            return player.countCards('h', function (cardx) {
              return get.type(cardx) != 'equip';
            });
          },
          filterCard(card, player) {
            return get.type(card) != 'equip';
          },
          usable: 1,
          check(card) {
            var name = card.name;
            if (name == 'shan') return 10;
            if (name == 'sha') return 8;
            if (name == 'tao') return 7;
            if (name == 'jiu') return 7;
            if (name == 'wuzhong') return 7;
            if (name == 'shunshou') return 7;
            if (name == 'guohe') return 7;
            return 5;
          },
          filterTarget(card, player, target) {
            return !target.hasSkill('sdyx_panlong2');
          },
          discard: false,
          lose: false,
          delay: false,
          content() {
            'step 0';
            player.showCards(get.translation(player) + '对' + get.translation(target) + '发动了【蟠龙】', cards);
            'step 1';
            var name = cards[0].name;
            //var name=cards[0].name;
            event.cardname = name;
            target.
            chooseCard('请将一张【' + get.translation(name) + '】,交给' + get.translation(player) + '否则直到下个回合开始你使用或打出的下一张同名的牌无效', 'h', function (card) {
              return card.name == _status.event.cardname;
            }).
            set('ai', function (card) {
              return 5 - get.value(card);
            }).
            set('cardname', name);
            'step 2';
            if (result.cards?.length) {
              //player.gain(result.cards,'giveAuto',target);
              target.give(result.cards, player, true);
            } else {
              target.storage.sdyx_panlong2 = cards[0];
              target.addTempSkill('sdyx_panlong2', { player: 'phaseBegin' });
              target.markSkill('sdyx_panlong2');
            }
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                return -2;
              }
            },
            threaten: 1.5
          }
        },
        sdyx_panlong2: {
          marktext2: '龙',
          marktext: '龙',
          intro: {
            name: '龙',
            content: 'cards'
          },
          onremove(player) {
            delete player.storage.sdyx_panlong2;
          },
          charlotte: true,
          mark: 'card',
          audio: 'sdyx_panlong',
          trigger: { player: ['useCard', 'respond'] },
          forced: true,
          popup: false,
          filter(event, player) {
            return player.storage.sdyx_panlong2 && player.storage.sdyx_panlong2.name == event.card.name;
          },
          content() {
            player.popup('悲剧', trigger.name == 'useCard' ? 'metal' : 'wood');
            player.removeSkill('sdyx_panlong2');
            if (trigger.targets) {
              trigger.targets.length = 0;
            }
            trigger.all_excluded = true;
            var evt = trigger.parent;
            if (evt.name == 'chooseToUse' || evt.name == 'chooseToRespond') {
              if (evt.result && evt.result.bool) evt.result.bool = false;
            }
            //if(trigger.parent.name=='chooseToUse'||trigger.parent.name=='chooseToRespond')trigger.parent.goto(0);
          }
        },
        //绝岳飞
        sdyx_falu: {
          group: 'sdyx_falu2',
          global: 'sdyx_falu_damage',
          subSkill: {
            lu: {
              mark: true,
              marktext2: '虏',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_huluyuefei.jpg',
              intro: { content: '胡虏' }
            },
            damage: {
              marktext2: '胡',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_faluyuefei.jpg',
              intro: { content: '你已对胡虏造成了#点伤害.' },
              trigger: { source: 'damageSource' },
              forced: true,
              popup: false,
              audio: 'ext:金庸群侠传/peiyin:2',
              filter(event, player) {
                return event.player.hasSkill('sdyx_falu_lu');
              },
              content() {
                player.addMark('sdyx_falu_damage', trigger.num);
              }
            }
          },
          trigger: { global: 'roundStart' },
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return game.hasPlayer(function (current) {
              return current != player && !current.hasSkill('sdyx_falu_lu');
            });
            return false;
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('sdyx_falu'), function (card, player, target) {
              return target != player && !target.hasSkill('sdyx_falu_lu');
            }).
            set('ai', function (target) {
              return -get.attitude(player, target);
            });
            'step 1';
            if (result.targets?.length) {
              result.targets[0].addSkill('sdyx_falu_lu');
            }
          }
        },
        sdyx_falu2: {
          trigger: { player: 'useCard1' },
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (!event.card) return false;
            var type = get.type(event.card);
            if (type != 'trick' && type != 'basic') return false;
            var info = get.info(event.card);
            if (!info.enable) return false;
            if (event.targets && !info.multitarget) {
              if (
              game.hasPlayer(function (current) {
                return current.hasSkill('sdyx_falu_lu') && lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
              }))
              {
                return true;
              }
            }
            return false;
          },
          _priority: 30,
          check(event, player) {
            var num = 0;
            var targets = lib.skill.sdyx_falu2.logTarget(event, player);
            for (var target of targets) {
              var eff = get.effect(target, event.card, player, player);
              if (eff > 0) num++;
              if (eff < 0) num--;
            }
            //if(player.hp<=2) return false;
            if (num > 0) return true;
            return false;
          },
          line: 'fire',
          logTarget(event, player) {
            return game.filterPlayer(function (current) {
              return current.hasSkill('sdyx_falu_lu') && lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
            });
          },
          content() {
            'step 0';
            var targets = lib.skill.sdyx_falu2.logTarget(trigger, player);
            var evt = trigger;
            if (evt.cards.length) {
              game.log(targets, '额外成为了', evt.card, '(', evt.cards, ')', '的目标');
            } else {
              game.log(targets, '额外成为了', evt.card, '的目标');
            }
            trigger.targets.addArray(targets);
            'step 1';
            //player.loseHp();
          },
          ai: {
            effect: {
              player(card, player, target, current, isLink) {
                if (isLink || !target) return;
                var info = get.info(card);
                if (!info.enable) return;
                if (player._sdyx_falu2) return;
                player._sdyx_falu2 = true;
                if (!target.hasSkill('sdyx_falu_lu') && ['sha', 'guohe', 'shunshou', 'huogong', 'juedou'].includes(card.name)) {
                  var targets = game.filterPlayer(function (current) {
                    return current.hasSkill('sdyx_falu_lu') && lib.filter.targetEnabled2(card, player, current);
                  });
                  var num = 0;
                  for (var target of targets) {
                    var eff = get.effect(target, card, player, player);
                    if (eff > 0) num++;
                    if (eff < 0) num--;
                  }
                  if (num > 0) {
                    delete player._sdyx_falu2;
                    return [1, 3];
                  }
                  delete player._sdyx_falu2;
                } else {
                  delete player._sdyx_falu2;
                }
              }
            }
          }
        },
        sdyx_zhanji: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: 'sdyx_wumubingshu',
          trigger: { player: 'useCard' },
          forced: true,
          filter(event, player) {
            if (get.type(event.card) != 'trick') return false;
            var info = get.info(event.card);
            if (!info.enable) return false;
            var storage = player.getStorage('sdyx_wumubingshu');
            if (storage.includes(event.card.name)) return false;
            return true;
          },
          content() {
            player.markAuto('sdyx_wumubingshu', [trigger.card.name]);
          },
          ai: { combo: 'sdyx_zhonghun' }
        },
        sdyx_zhonghun: {
          ai: { combo: 'sdyx_zhanji' },
          audio: 'ext:金庸群侠传/peiyin:2',
          derivation: 'sdyx_wumubingshu',
          trigger: { player: 'dying', source: 'dying' },
          filter(event, player) {
            var storage = player.getStorage('sdyx_wumubingshu');
            if (!storage.length) return false;
            return true;
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('sdyx_zhonghun'), function (card, player, target) {
              return target != player;
            }).
            set('ai', function (target) {
              var att = get.attitude(player, target);
              if (att > 0) {
                return 1 + target.countMark('sdyx_falu_damage');
              }
              return 0;
            });
            'step 1';
            if (result.targets?.length) {
              result.targets[0].addSkills('sdyx_wumubingshu');
              var storage = player.getStorage('sdyx_wumubingshu');
              var storage2 = storage.slice(0);
              player.unmarkAuto('sdyx_wumubingshu', storage2);
              result.targets[0].markAuto('sdyx_wumubingshu', storage2);
              var damage = result.targets[0].countMark('sdyx_falu_damage');
              if (damage > 0) {
                result.targets[0].draw(2 * damage);
              }
            }
          }
        },
        sdyx_wumubingshu: {
          subSkill: { backup: {} },
          intro: {
            mark(dialog, storage, player) {
              if (!storage.length) return '无';
              var list = [];
              for (var i = 0; i < storage.length; i++) {
                list.push(['锦囊', '', storage[i]]);
              }
              dialog.addAuto([list, 'vcard']);
            },
            markcount(storage, player) {
              return storage.length;
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            var storage = player.getStorage('sdyx_wumubingshu');
            if (!storage.length) return false;
            var hs = player.getCards('hs');
            if (!hs.length) return false;
            var bool = storage.some(function (name) {
              var vcard = { name: name };
              return event.filterCard(vcard, player, event);
            });
            return bool;
          },
          chooseButton: {
            dialog(event, player) {
              var list = [];
              var storage = player.getStorage('sdyx_wumubingshu');
              var list2 = storage.filter(function (name) {
                var vcard = { name: name };
                return event.filterCard(vcard, player, event);
              });
              for (var i = 0; i < list2.length; i++) {
                list.push(['锦囊', '', list2[i]]);
              }
              return ui.create.dialog(get.translation('<img style=width:150px height=38px src=extension/金庸群侠传/image/button/jy_button_wumubingshu.jpg>'), [list, 'vcard']);
            },
            check(button) {
              var player = _status.event.player;
              var card = { name: button.link[2] };
              return player.getUseValue(card);
            },
            backup(links, player) {
              return {
                audio: 'sdyx_wumubingshu',
                check(card) {
                  var playerx = _status.event.player;
                  if (card.name == links[0][2]) return -1;
                  if (playerx.needsToDiscard()) return 9 - get.value(card);
                  return 6 - get.value(card);
                },
                filterCard: true,
                selectCard: 1,
                popname: true,
                position: 'hs',
                viewAs: { name: links[0][2] }
              };
            },
            prompt(links, player) {
              return '将一张手牌当作' + get.translation(links[0][2]) + '使用';
            }
          },
          ai: {
            order: 1,
            result: { player: 1 },
            threaten: 1.6
          }
        },
        //陈玄风
        sdyx_daojin: {
          derivation: ['sdyx_daojin_heart', 'sdyx_daojin_diamond', 'sdyx_daojin_spade', 'sdyx_daojin_club'],
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseZhunbeiBegin' },
          forced: true,
          filter(event, player) {
            return player.phaseNumber && player.phaseNumber == 1;
          },
          content() {
            'step 0';
            player.judge().judge2 = function (result) {
              return true;
            };
            'step 1';
            if (result && result.suit) {
              player.addSkill('sdyx_daojin_' + result.suit);
            }
          }
        },
        sdyx_daojin_heart: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 1,
          prompt() {
            return lib.skill.jue_jiuyin['1xx'].prompt;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filter(event, player) {
            return lib.skill.jue_jiuyin['1xx'].filter(event, player);
          },
          filterTarget(card, player, target) {
            return lib.skill.jue_jiuyin['1xx'].filterTarget(card, player, target);
          },
          content() {
            lib.skill.jue_jiuyin['1xx'].content(target, player);
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                return lib.skill.jue_jiuyin['1xx'].ai.target(player, target);
              }
            },
            threaten: 2
          }
        },
        sdyx_daojin_diamond: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 1,
          filterCard() {
            return false;
          },
          selectCard: -1,
          prompt() {
            return lib.skill.jue_jiuyin['2xx'].prompt;
          },
          filter(event, player) {
            return lib.skill.jue_jiuyin['2xx'].filter(event, player);
          },
          filterTarget(card, player, target) {
            return lib.skill.jue_jiuyin['2xx'].filterTarget(card, player, target);
          },
          content() {
            lib.skill.jue_jiuyin['2xx'].content(target, player);
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                return lib.skill.jue_jiuyin['2xx'].ai.target(player, target);
              }
            },
            threaten: 2
          }
        },
        sdyx_daojin_spade: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 1,
          prompt() {
            return lib.skill.jue_jiuyin['3xx'].prompt;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filter(event, player) {
            return lib.skill.jue_jiuyin['3xx'].filter(event, player);
          },
          filterTarget(card, player, target) {
            return lib.skill.jue_jiuyin['3xx'].filterTarget(card, player, target);
          },
          content() {
            lib.skill.jue_jiuyin['3xx'].content(target, player);
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                return lib.skill.jue_jiuyin['3xx'].ai.target(player, target);
              }
            },
            threaten: 2
          }
        },
        sdyx_daojin_club: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 1,
          prompt() {
            return lib.skill.jue_jiuyin['4xx'].prompt;
          },
          filter(event, player) {
            return lib.skill.jue_jiuyin['4xx'].filter(event, player);
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filterTarget(card, player, target) {
            return lib.skill.jue_jiuyin['4xx'].filterTarget(card, player, target);
          },
          content() {
            lib.skill.jue_jiuyin['4xx'].content(target, player);
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                return lib.skill.jue_jiuyin['4xx'].ai.target(player, target);
              }
            },
            threaten: 2
          }
        },
        sdyx_moke: {
          subSkill: { backup: {} },
          marktext2: '摹',
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_moke.jpg',
          intro: {
            mark(dialog, storage, player) {
              var list = [];
              var storage = player.getStorage('sdyx_moke');
              for (var i = 0; i < storage.length; i++) {
                var name = storage[i];
                if (name == 'sha') {
                  list.push(['基本', '', 'sha']);
                  for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                } else {
                  var type = get.type(name);
                  if (type == 'trick') list.push(['锦囊', '', name]);
                  if (type == 'basic') list.push(['基本', '', name]);
                }
              }
              dialog.addAuto([list, 'vcard']);
            },
            markcount(storage, player) {
              return storage.length;
            }
          },
          trigger: { player: 'damageEnd' },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          group: ['sdyx_moke_die'],
          filter(event, player) {
            var storage = player.getStorage('sdyx_moke');
            var list = lib.inpile.filter(function (i) {
              if (storage.includes(i)) return false;
              var type = get.type(i);
              if (type == 'equip') return false;
              return true;
            });
            return event.num > 0 && list.length;
          },
          content() {
            'step 0';
            event.count = Math.min(trigger.num, 9);
            'step 1';
            event.count--;
            var storage = player.getStorage('sdyx_moke');
            var list = lib.inpile.filter(function (i) {
              if (storage.includes(i)) return false;
              var type = get.type(i);
              if (type == 'equip') return false;
              return true;
            });
            if (!list.length) {
              event.finish();
              return;
            }
            for (var i = 0; i < list.length; i++) {
              list[i] = [get.type(list[i]), '', list[i]];
            }
            player.chooseButton([get.prompt('sdyx_moke'), [list, 'vcard']]).set('ai', function (button) {
              return Math.random();
            });
            'step 2';
            if (result.links?.length) {
              var name = result.links[0][2];
              player.markAuto('sdyx_moke', [name]);
              game.log(player, '记录了', { name: name });
              if (event.count > 0) event.goto(1);
            }
          }
        },
        sdyx_moke_die: {
          trigger: { player: 'die' },
          forceDie: true,
          filter(event, player) {
            var storage = player.getStorage('sdyx_moke');
            return storage.length;
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('sdyx_moke'), '令一名角色获得皮囊？', function (card, player, target) {
              return target != player;
            }).
            set('forceDie', true).
            set('ai', function (target) {
              return get.attitude(player, target);
            });
            'step 1';
            if (result.targets?.length) {
              var target = result.targets[0];
              target.addSkill('sdyx_moke_use');
              target.storage.sdyx_moke_use = player.getStorage('sdyx_moke').slice(0);
              target.markSkill('sdyx_moke_use');
            }
          }
        },
        sdyx_moke_use: {
          audio: 'sdyx_moke',
          mark: true,
          intro: {
            mark(dialog, storage, player) {
              var list = [];
              var storage = player.getStorage('sdyx_moke_use');
              for (var i = 0; i < storage.length; i++) {
                var name = storage[i];
                if (name == 'sha') {
                  list.push(['基本', '', 'sha']);
                  for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                } else {
                  var type = get.type(name);
                  if (type == 'trick') list.push(['锦囊', '', name]);
                  if (type == 'basic') list.push(['基本', '', name]);
                }
              }
              dialog.addAuto([list, 'vcard']);
            },
            markcount(storage, player) {
              return storage.length;
            }
          },
          //enable:['chooseToUse','chooseToRespond'],
          enable: ['chooseToUse'],
          charlotte: true,
          filter(event, player) {
            if (!player.countCards('hs')) return false;
            var storage = player.getStorage('sdyx_moke_use');
            if (!storage.length) return false;
            for (var i = 0; i < storage.length; i++) {
              if (event.filterCard && event.filterCard({ name: storage[i] }, player, event)) return true;
            }
            return false;
          },
          init(player, skill) {
            if (!player.storage[skill]) player.storage[skill] = [];
          },
          chooseButton: {
            dialog(event, player) {
              var list = [];
              var storage = player.getStorage('sdyx_moke_use');
              storage = storage.filter(function (name) {
                var vcard = { name: name };
                return event.filterCard && event.filterCard(vcard, player, event);
              });
              for (var i = 0; i < storage.length; i++) {
                var name = storage[i];
                if (name == 'sha') {
                  list.push(['基本', '', 'sha']);
                  for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                } else {
                  var type = get.type(name);
                  if (type == 'trick') list.push(['锦囊', '', name]);
                  if (type == 'basic') list.push(['基本', '', name]);
                }
              }
              return ui.create.dialog('摹刻', [list, 'vcard']);
            },
            check(button) {
              var player = _status.event.player;
              var evt = _status.event.parent;
              if (player.countCards('hs', button.link[2]) > 0) return 0;
              var card = { name: button.link[2], nature: button.link[3] };
              if (evt.type == 'dying') {
                var num = get.effect(evt.dying, card, player, player);
                if (num > 0) return get.order(card);
                return -1;
              } else if (card.name == 'shan' || evt.name == 'chooseToRespond') {
                if (evt && (evt.ai || evt.ai1)) {
                  var tmp = _status.event;
                  _status.event = evt;
                  var result = (evt.ai || evt.ai1)(card, player, evt);
                  _status.event = tmp;
                  return result;
                }
                return -1;
              } else {
                var effect = player.getUseValue(card);
                if (effect > 0) return effect;
              }
              return -1;
            },
            backup(links, player) {
              return {
                filterCard: true,
                audio: 'sdyx_moke',
                selectCard: 1,
                popname: true,
                check(card) {
                  var playerx = _status.event.player;
                  if (playerx.needsToDiscard()) return 9 - get.value(card);
                  return 6 - get.value(card);
                },
                position: 'hs',
                viewAs: { name: links[0][2], nature: links[0][3] },
                precontent() {
                  player.unmarkAuto('sdyx_moke_use', [event.result.card.name]);
                }
              };
            },
            prompt(links, player) {
              return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
            }
          },
          /////////////////////////////////////////////////////////
          hiddenCard(player, name) {
            var storage = player.getStorage('sdyx_moke_use');
            return storage.includes(name);
          },
          ai: {
            respondSha: true,
            respondShan: true,
            skillTagFilter(player, tag) {
              var storage = player.getStorage('sdyx_moke_use');
              if (tag == 'respondSha' && storage.includes('sha')) return true;
              if (tag == 'respondShan' && storage.includes('shan')) return true;
              return false;
            },
            order(skill, player) {
              return 1;
            },
            result: {
              player(player) {
                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                return 1;
              }
            }
          }
        },
        //黄裳
        jue_jiaoyi: {
          enable: 'phaseUse',
          position: 'he',
          filter(event, player) {
            return player.countCards('he');
          },
          usable: 2,
          audio: 'ext:金庸群侠传/peiyin:3',
          filterCard(card, player) {
            return true;
          },
          selectCard: [1, 1],
          check(card) {
            return 6 - get.value(card);
          },
          content() {
            var gain = get.randomCard(function (cardx) {
              return cardx.number != cards[0].number;
            });
            if (gain) {
              player.gain(gain, 'draw');
            }
          },
          ai: {
            order: 9,
            result: {
              player: 1
            },
            threaten: 1.55
          }
        },
        jue_tongwu: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: { player: 'useCardAfter' },
          forced: true,
          filter(event, player) {
            if (player.storage.jue_tongwu) return false;
            var history = player.getAllHistory('useCard');
            var numbers = [];
            for (var i = 0; i < history.length; i++) {
              if (typeof history[i].card.number == 'number') numbers.add(history[i].card.number);
            }
            if (player.storage.jue_tongwuList.includes(numbers.length)) return false;
            return numbers.length == 3 || numbers.length == 6 || numbers.length == 9 || numbers.length == 12;
          },
          init(player) {
            player.storage.jue_tongwuList = [];
          },
          content() {
            'step 0';
            if (!player.storage.jue_jiuyin_lv) player.storage.jue_jiuyin_lv = 0;
            player.storage.jue_jiuyin_lv++;
            'step 1';
            var numbers = [];
            var history = player.getAllHistory('useCard');
            for (var i = 0; i < history.length; i++) {
              if (typeof history[i].card.number == 'number') numbers.add(history[i].card.number);
            }
            player.storage.jue_tongwuList.add(numbers.length);
            if (numbers.length >= 12) {
              player.storage.jue_tongwu = true;
              player.awakenSkill('jue_tongwu');
            }
          }
        },
        jue_jiuyin: {
          /////////////////////////////////////////////////
          ///-----------------------主技能---------------------------------------
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:5',
          usable: 1,
          prompt() {
            var player = _status.event.player;
            var map = player.storage.jue_jiuyin_step + 'xx';
            return lib.skill.jue_jiuyin[map].prompt;
          },
          init(player) {
            player.storage.jue_jiuyin_step = 1;
          },
          filter(event, player) {
            if (!player.storage.jue_jiuyin_lv) return false;
            var map = player.storage.jue_jiuyin_step + 'xx';
            return lib.skill.jue_jiuyin[map].filter(event, player);
          },
          filterTarget(card, player, target) {
            if (!player.storage.jue_jiuyin_lv) return false;
            var map = player.storage.jue_jiuyin_step + 'xx';
            return lib.skill.jue_jiuyin[map].filterTarget(card, player, target);
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            'step 0';
            var map = player.storage.jue_jiuyin_step + 'xx';
            lib.skill.jue_jiuyin[map].content(target, player);
            'step 1';
            player.storage.jue_jiuyin_step++;
            //if(player.storage.jue_jiuyin_step>4){
            if (player.storage.jue_jiuyin_step > player.storage.jue_jiuyin_lv) {
              player.storage.jue_jiuyin_step = 1;
            }
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                if (!player.storage.jue_jiuyin_lv) return 0;
                var map = player.storage.jue_jiuyin_step + 'xx';
                return lib.skill.jue_jiuyin[map].ai.target(player, target);
              }
            },
            threaten: 2
          },
          ////////////////////////////////////////////////
          //--------------------------------以下为辅助代码-------------------------------------------
          ////////////////////////////////////////////////
          '1xx': {
            prompt: '少阳:你可以令一名角色摸三张牌,直到你下个回合开始该角色手牌上限+3.',
            filter(event, player) {
              return true;
            },
            filterTarget(card, player, target) {
              return true;
            },
            content(target, player) {
              target.draw(3);
              target.storage.jue_jiuyin1xx = player;
              target.addSkill('jue_jiuyin2');
            },
            ai: {
              target(player, target) {
                var num = target.countCards('h');
                if (num == 0) num = 1;
                return 6 / num;
              }
            }
          },
          '2xx': {
            prompt: '老阳:你可以将一名角色装备区里的装备牌补至三张',
            filter(event, player) {
              return game.hasPlayer(function (target) {
                var number = 3 - target.countCards('e');
                if (number <= 0) return false;
                var types = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                if (!target.hasEmptySlot('equip1')) types.remove('equip1');
                if (!target.hasEmptySlot('equip2')) types.remove('equip2');
                if (!target.hasEmptySlot('equip3')) types.remove('equip3');
                if (!target.hasEmptySlot('equip4')) types.remove('equip4');
                if (!target.hasEmptySlot('equip5')) types.remove('equip5');
                if (!types.length) return false;
                return get.cardPile(function (cardx) {
                  return get.type(cardx) == 'equip' && types.includes(get.subtype(cardx));
                });
              });
            },
            filterTarget(card, player, target) {
              var number = 3 - target.countCards('e');
              if (number <= 0) return false;
              var types = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
              if (!target.hasEmptySlot('equip1')) types.remove('equip1');
              if (!target.hasEmptySlot('equip2')) types.remove('equip2');
              if (!target.hasEmptySlot('equip3')) types.remove('equip3');
              if (!target.hasEmptySlot('equip4')) types.remove('equip4');
              if (!target.hasEmptySlot('equip5')) types.remove('equip5');
              if (!types.length) return false;
              return get.cardPile(function (cardx) {
                return get.type(cardx) == 'equip' && types.includes(get.subtype(cardx));
              });
            },
            content(target, player) {
              var cards = [];
              var number = 3 - target.countCards('e');
              var types = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
              if (!target.hasEmptySlot('equip1')) types.remove('equip1');
              if (!target.hasEmptySlot('equip2')) types.remove('equip2');
              if (!target.hasEmptySlot('equip3')) types.remove('equip3');
              if (!target.hasEmptySlot('equip4')) types.remove('equip4');
              if (!target.hasEmptySlot('equip5')) types.remove('equip5');
              while (number > 0 && types.length) {
                number--;
                var card = get.cardPile(function (cardx) {
                  return get.type(cardx) == 'equip' && types.includes(get.subtype(cardx));
                });
                if (card) {
                  cards.push(card);
                  //names.push(card.name);
                  types.remove(get.subtype(card));
                } else break;
              }
              if (cards.length) {
                for (var equipx of cards) {
                  target.equip(equipx);
                  target.$gain2(equipx);
                }
              }
            },
            ai: {
              target(player, target) {
                var types = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                if (!target.hasEmptySlot('equip1')) types.remove('equip1');
                if (!target.hasEmptySlot('equip2')) types.remove('equip2');
                if (!target.hasEmptySlot('equip3')) types.remove('equip3');
                if (!target.hasEmptySlot('equip4')) types.remove('equip4');
                if (!target.hasEmptySlot('equip5')) types.remove('equip5');
                return types.length;
              }
            }
          },
          '3xx': {
            prompt: '少阴:你可以令一名角色将体力回复至三点',
            filter(event, player) {
              return game.hasPlayer(function (target) {
                if (target.hp >= target.maxHp) return false;
                if (target.hp >= 3) return false;
                return true;
              });
            },
            filterTarget(card, player, target) {
              if (target.hp >= target.maxHp) return false;
              if (target.hp >= 3) return false;
              return true;
            },
            content(target) {
              target.recover(3 - target.hp);
            },
            ai: {
              target(player, target) {
                return 3 - target.hp;
              }
            }
          },
          '4xx': {
            prompt: '老阴:你可以将牌堆或弃牌堆三张延时锦囊牌置入一名角色判定区内.',
            filter(event, player) {
              return game.hasPlayer(function (target) {
                //var number=3-target.countCards("j");
                //if(number<=0) return false;
                return get.cardPile(function (cardx) {
                  return get.type(cardx) == 'delay' && target.canAddJudge({ name: cardx.name });
                });
              });
            },
            filterTarget(card, player, target) {
              //var number=3-target.countCards("j");
              //if(number<=0) return false;
              return get.cardPile(function (cardx) {
                return get.type(cardx) == 'delay' && target.canAddJudge({ name: cardx.name });
              });
            },
            content(target, player) {
              var number = 3;
              var names = [];
              var cards = [];
              while (number > 0) {
                number--;
                var card = get.cardPile(function (cardx) {
                  return get.type(cardx) == 'delay' && target.canAddJudge({ name: cardx.name }) && !names.includes(cardx.name);
                });
                if (card) {
                  cards.push(card);
                  names.push(card.name);
                } else break;
              }
              if (cards.length) {
                for (var equipx of cards) {
                  target.addJudge(equipx);
                  target.$gain2(equipx);
                }
              } else {
                game.log(target, '没有合法的延时锦囊牌!!!!');
              }
            },
            ai: {
              target(player, target) {
                return target.countCards('j') - 6;
              }
            }
          }
        },
        jue_jiuyin2: {
          mark: true,
          marktext2: '九',
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_jiuyin.jpg',
          charlotte: true,
          intro: {
            content: '你的手牌上限+3.'
          },
          mod: {
            maxHandcard(player, num) {
              return num + 3;
            }
          },
          onremove(player) {
            delete player.storage.jue_jiuyin1xx;
          },
          trigger: { global: ['die', 'phaseZhunbeiBegin'] },
          filter(event, player) {
            if (event.name == 'phaseZhunbei') return event.player == player.storage.jue_jiuyin1xx;
            return event.player == player.storage.jue_jiuyin1xx || event.player == player;
          },
          forceDie: true,
          forced: true,
          popup: false,
          content() {
            player.removeSkill('jue_jiuyin2');
          }
        },
        //李萍
        sdyx_piaoping: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: { player: 'damageEnd' },
          forced: true,
          filter(event, player) {
            return event.num > 0;
          },
          content() {
            'step 0';
            var list = lib.jy_changeSkill ? ['jy_song', 'jy_qing', 'jy_ming', 'jy_yuan', 'jy_qin', 'jy_tang', 'jy_lie'] : ['wei', 'shu', 'wu', 'qun', 'jin', 'key'];
            list.remove(player.group);
            var list2 = list.slice(0);
            var choice;
            var getnum = function (group, player) {
              var num = 0;
              var targets = game.filterPlayer(function (current) {
                return current.group == group || player == current;
              });
              for (var target of targets) {
                if (get.attitude(player, target) > 0) {
                  num++;
                } else {
                  num--;
                }
              }
              return num;
            };
            list2.sort(function (a, b) {
              return getnum(b, player) - getnum(a, player);
            });
            choice = list2[0];
            if (getnum(choice, player) <= 0) choice = 'cancel2';
            list.push('cancel2');
            player.
            chooseControl(list).
            set('prompt', get.prompt2('sdyx_piaoping')).
            set('ai', function () {
              return _status.event.choice;
            }).
            set('choice', choice);
            'step 1';
            if (result.control != 'cancel2') {
              player.changeGroup(result.control);
            } else {
              event.finish();
            }
            'step 2';
            var targets = game.filterPlayer(function (current) {
              return current.group == player.group || player == current;
            });
            if (targets.length) {
              game.asyncDraw(targets);
              player.line(targets, 'fire');
            }
          }
        },
        ///
        sdyx_dayi_die: {
          trigger: {
            player: 'die'
          },
          forced: true,
          forceDie: true,
          content() {
            'step 0';
            player.
            chooseTarget(function (card, player, target) {
              return target != player && !target.hasSkill('sdyx_dayi2');
            }).
            set('prompt2', '你已阵亡!是否发动一次大义？').
            set('ai', function (target) {
              if (
              target.countCards('j', function (card) {
                return (card.viewAs || card.name) != 'jydiy_yungongliaoshang';
              }) ||
              target.isTurnedOver() ||
              target.isLinked() ||
              target.countDisabledSlot() >= 1)

              return get.attitude(player, target);
              return -get.attitude(player, target);
            }).
            set('forceDie', true);
            'step 1';
            if (result.bool) {
              var next = game.createEvent('sdyx_dayi');
              next.player = player;
              next.target = result.targets[0];
              next.set('forceDie', true);
              next.set('nolosehp', true);
              next.setContent(lib.skill.sdyx_dayi.content);
            }
          }
        },
        ///
        sdyx_dayi: {
          group: 'sdyx_dayi_die',
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filterTarget(card, player, target) {
            //if(!target.countCards('j',function(card){return card.name!="jydiy_yungongliaoshang"})&&!target.isTurnedOver()&&!target.isLinked()) return false;
            return true;
          },
          filter(event, player) {
            return true;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            'step 0';
            event.set('forceDie', true);
            if (!event.nolosehp) player.loseHp();
            'step 1';
            if (
            target.countCards('j', function (card) {
              return (card.viewAs || card.name) != 'jydiy_yungongliaoshang';
            }) ||
            target.isTurnedOver() ||
            target.isLinked() ||
            target.countDisabledSlot() >= 1)
            {
              var choice = '解除负面';
              if (get.attitude(player, target) < 0) choice = '下回合使用普通锦囊无效';
              player.
              chooseControl('解除负面', '下回合使用普通锦囊无效').
              set('ai', function () {
                return _status.event.choice;
              }).
              set('choice', choice).
              set('forceDie', true);
            } else {
              event._result = { control: '下回合使用普通锦囊无效' };
            }
            'step 2';
            if (result.control == '下回合使用普通锦囊无效') {
              target.addTempSkill('sdyx_dayi2', { player: ['phaseEnd'] });
              event.finish();
              return;
            }
            'step 3';
            if (target.isTurnedOver()) target.turnOver();
            'step 4';
            if (target.isLinked()) target.link();
            'step 5';
            var jscard = target.getCards('j', function (card) {
              return (card.viewAs || card.name) != 'jydiy_yungongliaoshang';
            });
            if (jscard.length) target.discard(jscard);
            'step 6';
            for (var i = 1; i < 6; i++) {
              if (target.hasDisabledSlot(i)) target.enableEquip(i);
            }
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                if (player.hp == 1) return 0;
                var js = target.countCards('j', function (card) {
                  return (card.viewAs || card.name) != 'jydiy_yungongliaoshang';
                });
                var num = 0;
                for (var i = 1; i < 6; i++) {
                  if (target.hasDisabledSlot(i)) num += 1;
                }
                if (target.isTurnedOver() && !target.hasSkillTag('noturn')) num += 3;
                if (target.isLinked() && !target.hasSkillTag('link')) num += 1;
                if (js) num += js * 1.5;
                if (num >= 3) return num;
                if (get.attitude(player, target) < 0 && target.countCards('h') > 5) return -target.countCards('h');
                return 0;
              }
            },
            threaten: 2
          }
        },
        sdyx_dayi2: {
          mark: true,
          marktext2: '义',
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_dayi.jpg',
          intro: {
            content: '锁定技.你在受【大义】影响期间,使用的普通锦囊牌无效.'
          },
          trigger: { player: 'useCard' },
          forced: true,
          filter(event, player) {
            //排除无懈可击
            return event.parent.type == 'phase' && get.type(event.card) == 'trick' && event.card.name != 'wuxie';
          },
          popup: false,
          content() {
            trigger.all_excluded = true;
          },
          ai: {
            notrick: true,
            effect: {
              player(card, player, target, current) {
                if (get.type(card) == 'trick' && card.name != 'wuxie') {
                  return 'zeroplayertarget';
                }
              }
            }
          }
        },
        sdyx_toutian2: {
          trigger: { player: 'gainPlayerCardBefore' },
          popup: false,
          forced: true,
          filter(event, player) {
            if (!event.parent.card) return false;
            if (event.parent.card.name != 'shunshou') return false;
            return event.getParent(2).sdyx_toutian_Add == true;
          },
          content() {
            trigger.selectButton[1] += 1;
          }
        },
        sdyx_toutian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: 'sdyx_toutian2',
          mod: {
            cardname(card, player, name) {
              if (card.name == 'guohe') return 'shunshou';
            },
            targetInRange(card) {
              if (card.name == 'shunshou') return true;
            }
          },
          trigger: {
            player: 'useCard2'
          },
          forced: true,
          filter(event, player) {
            if (event.card.name != 'shunshou') return false;
            return true;
          },
          filterx(event, player) {
            //原来的过滤条件
            var card = event.card;
            var info = get.info(card);
            //if(info.type!='trick'||info.allowMultiple==false) return false;
            if (event.targets && !info.multitarget) {
              if (
              game.hasPlayer(function (current) {
                return !event.targets.includes(current) && player.canUse(card, current);
              }))
              {
                return true;
              }
            }
            return false;
          },
          content() {
            'step 0';
            if (lib.skill.sdyx_toutian.filterx(trigger, player)) {
              var prompt2 = '是否为' + get.translation(trigger.card) + '增加一个目标？否则你可以多选择目标区域的一张牌.';
              player.
              chooseTarget(function (card, player, target) {
                var player = _status.event.player;
                return !_status.event.targets.includes(target) && player.canUse(_status.event.card, target);
              }).
              set('prompt2', prompt2).
              set('ai', function (target) {
                var trigger = _status.event.getTrigger();
                var player = _status.event.player;
                return get.effect(target, trigger.card, player, player);
              }).
              set('card', trigger.card).
              set('targets', trigger.targets);
            } else {
              event._result = { bool: false };
            }
            'step 1';
            if (result.targets?.length) {
              event.targets = result.targets;
            } else {
              trigger.set('sdyx_toutian_Add', true);
              event.finish();
            }
            'step 2';
            if (event.targets) {
              trigger.targets.addArray(event.targets);
            }
          }
        },
        sdyx_huanri: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCardToPlayered'
          },
          filter(event, player) {
            if (
            !player.countCards('h', function (card) {
              var cardx = card;
              return get.type(cardx) == 'trick' && event.player.canUse(cardx, event.target);
            }))

            return false;
            if (get.type(event.card) != 'trick') return false;
            if (event.player == player) return false;
            if (event.targets.length != 1) return false;
            return true;
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseCard(get.translation(trigger.player) + '对' + get.translation(trigger.target) + '使用了' + get.translation(trigger.card) + ',' + get.prompt('sdyx_huanri'), 'h', function (card) {
              if (get.type(card) != 'trick') return false;
              var target = _status.event.targetx;
              var source = _status.event.sourcex;
              var player = _status.event.player;
              var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
              if (mod2 != 'unchanged') return mod2;
              var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
              if (mod != 'unchanged') return mod;
              var cardx = card;
              return source.canUse(cardx, target);
            }).
            set('ai', function (card) {
              var cardx = card;
              var effect = get.effect(_status.event.targetx, _status.event.cardx, _status.event.sourcex, _status.event.sourcex);
              var effect2 = get.effect(_status.event.targetx, cardx, _status.event.sourcex, _status.event.sourcex);
              var result = effect2 - effect;
              var player = _status.event.player;
              var attitude = get.attitude(player, trigger.player);
              if (attitude == 0 || result == 0) return 0;
              if (attitude > 0) {
                return result;
              } else {
                return -result;
              }
            }).
            set('targetx', trigger.target).
            set('sourcex', trigger.player).
            set('cardx', trigger.card);
            'step 1';
            if (result.cards?.length) {
              event.cardx = result.cards[0];
              event.cardxx = [result.cards[0]];
              //player.respond(result.cards[0],'highlight','sdyx_huanri','noOrdering');
              player.respond(result.cards[0], 'highlight', 'sdyx_huanri');
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              var gain = trigger.cards.filterInD('od');
              game.log(trigger.player, '使用的', trigger.card, '的牌改为', event.cardx);
              if (gain.length) {
                player.gain(gain, 'gain2', 'log');
              }
              trigger.card = event.cardx;
              trigger.cards = event.cardxx;
              trigger.card.cards = trigger.cards;
              trigger.parent.card = event.cardx;
              trigger.parent.cards = event.cardxx;
            }
            'step 3';
          }
        },
        sdyx_duanyi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: 'sdyx_duanyi_lose',
          subSkill: {
            lose: {
              trigger: {
                global: 'loseEnd'
              },
              forced: true,
              filter(event, player) {
                if (player.storage.sdyx_duanyi) return false;
                if (!player.storage.sdyx_xuhun_target) return false;
                if (event.player != player.storage.sdyx_xuhun_target) return false;
                if (event.es && event.es.length) {
                  for (var i = 0; i < event.es.length; i++) {
                    if (event.es[i].name == 'jydiy_shediaowangong') return true;
                  }
                }
                return false;
              },
              content() {
                if (player.isDamaged()) player.recover();
                player.draw(2);
                player.storage.sdyx_duanyi = true;
                player.removeSkills('sdyx_changnian');
                player.say('你……怎能负我？');
              }
            }
          },
          init(player) {
            player.storage.sdyx_duanyi = false;
          },
          trigger: {
            global: 'useCard'
          },
          filter(event, player) {
            if (!player.storage.sdyx_duanyi) return false;
            if (!player.storage.sdyx_xuhun_target) return false;
            if (event.targets && event.targets.length > 1) {
              if (event.player == player) {
                return event.targets.includes(player.storage.sdyx_xuhun_target);
              } else if (event.player == player.storage.sdyx_xuhun_target) {
                return event.targets.includes(player);
              }
              return false;
            }
            return false;
          },
          forced: true,
          content() {
            'step 0';
            if (trigger.player == player) {
              event.playerx = player.storage.sdyx_xuhun_target;
              event.targetx = player;
            } else {
              event.playerx = player;
              event.targetx = player.storage.sdyx_xuhun_target;
            }
            'step 1';
            event.playerx.
            chooseBool('断义<br>是否令' + get.translation(event.targetx) + '摸两张牌并取消之?').
            set('ai', function () {
              var player = _status.event.player;
              var targets0 = _status.event.targets0;
              if (get.effect(player, trigger.card, player, player) > 0) return false;
              return true;
            }).
            set('targets0', event.targetx);
            'step 2';
            if (result.bool) {
              event.playerx.line(event.targetx, 'green');
              event.targetx.draw(2);
              trigger.excluded.add(event.playerx);
            }
          }
        },
        sdyx_changnian: {
          trigger: {
            global: 'phaseUseEnd'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          filter(event, player) {
            if (!player.storage.sdyx_xuhun_target) return false;
            return event.player == player.storage.sdyx_xuhun_target || event.player == player;
          },
          content() {
            'step 0';
            if (trigger.player == player) {
              event.playerx = player;
              event.targetx = player.storage.sdyx_xuhun_target;
            } else {
              event.playerx = player.storage.sdyx_xuhun_target;
              event.targetx = player;
            }
            'step 1';
            var controls = ['heart', 'diamond', 'club', 'spade', 'cancel2'];
            var str = '是否声明一种花色,令' + get.translation(event.targetx) + '获得一张你声明花色的牌';
            event.playerx.chooseControl(controls, ui.create.dialog(str, 'hidden')).set('targetx', event.targetx).ai = function () {
              var playerx = _status.event.player;
              var targetx = _status.event.targetx;
              if (get.attitude(playerx, targetx) < 0) return 'cancel2';
              return Math.floor(Math.random() * (controls.length - 1));
            };
            'step 2';
            if (result.control && result.control != 'cancel2') {
              event.playerx.popup(result.control);
              game.log(event.playerx, '声明了', result.control);
              var card = get.cardPile(function (cardx) {
                return cardx.suit == result.control;
              });
              if (card) {
                event.targetx.gain(card, 'gain2');
                //event.targetx.$gain2(card);
              } else {
                game.log('牌堆没有此花色的牌!');
              }
            }
          }
        },
        sdyx_xuhun: {
          audio: 'ext:金庸群侠传/peiyin:2',
          subSkill: {
            die: {
              mod: {
                maxHandcard(player, num) {
                  return num + 1;
                }
              },
              trigger: { global: 'die' },
              forceDie: true,
              forced: true,
              popup: false,
              silent: true,
              filter(event, player) {
                return event.player == player || event.player == player.storage.sdyx_xuhun_target;
              },
              onremove(player) {
                var target = player.storage.sdyx_xuhun_target;
                if (!target) return;
                delete player.storage.sdyx_xuhun_target;
                delete target.storage.sdyx_xuhun_target;
                player.unmarkSkill('sdyx_xuhun');
                target.removeSkill('sdyx_xuhun_die');
                target.unmarkSkill('sdyx_xuhun');
              },
              content() {
                player.removeSkill('sdyx_xuhun_die');
              }
            }
          },
          intro: {
            content: 'limited'
          },
          marktext2: '许',
          markimage: 'extension/金庸群侠传/image/icon/jyxuhun.jpg',
          mark: true,
          limited: true,
          init(player) {
            player.storage.sdyx_xuhun = false;
          },
          enable: 'phaseUse',
          filter(event, player) {
            return !player.storage.sdyx_xuhun;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filterTarget(card, player, target) {
            if (target.hasDisabledSlot('equip1')) return false;
            return target.hasSex('male') && target != player && !target.storage.sdyx_xuhun_target;
          },
          content() {
            'step 0';
            player.awakenSkill('sdyx_xuhun');
            player.storage.sdyx_xuhun = true;
            player.storage.sdyx_xuhun_target = target;
            target.storage.sdyx_xuhun_target = player;
            player.markSkillCharacter('sdyx_xuhun', target, '许婚', '许婚');
            target.markSkillCharacter('sdyx_xuhun', player, '驸马', '许婚');
            player.addSkill('sdyx_xuhun_die');
            var card = get.cardPile(function (cardx) {
              return cardx.name == 'jydiy_shediaowangong';
            });
            if (!card) {
              card = game.createCard('jydiy_shediaowangong');
            }
            target.useCard(card, target);
            target.draw(3);
            'step 1';
            event.oldcurrentPhase = _status.currentPhase;
            _status.currentPhase = player;
            target.phaseUse()._extraPhaseReason = 'sdyx_xuhun';
            'step 2';
            _status.currentPhase = event.oldcurrentPhase;
          },
          ai: {
            order: 11,
            result: {
              target: 1
            }
          }
        },
        sdxl_zhulu: {
          group: ['sdxl_zhulu_end'],
          subSkill: {
            end: {
              trigger: {
                player: 'phaseJieshuBegin'
              },
              popup: false,
              forced: true,
              content() {
                player.storage.sdxl_zhulu = [];
                player.unmarkSkill('sdxl_zhulu');
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filterTarget(card, player, target) {
            return player.canCompare(target);
          },
          selectTarget: [1, 3],
          filterCard() {
            return false;
          },
          selectCard: -1,
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          multitarget: true,
          multiline: true,
          content() {
            player.chooseToCompare(targets).callback = lib.skill.sdxl_zhulu.callback;
          },
          init(player) {
            player.storage.sdxl_zhulu = [];
          },
          marktext2: '逐',
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_guopoluzhulu.jpg',
          intro: {
            content: 'players'
          },
          callback() {
            if (event.num1 < event.num2) {
              target.say(['襄阳城已危在旦夕,你又何必苦苦坚守？', '城破之日,便是你等死期!', '速速开城迎军,尚有一条活路!'].randomGet());
              target.useCard({ name: 'sha' }, player, false);
            } else if (event.num1 > event.num2) {
              player.say(['誓拼热血护襄阳!', '我的身后,是襄阳万千黎民!', '父亲,我定会死守这城池!'].randomGet());
              player.storage.sdxl_zhulu.add(target);
              if (!player.hasSkill('sdxl_zhulu2')) {
                player.addTempSkill('sdxl_zhulu2', 'phaseUseEnd');
              }
              player.markSkill('sdxl_zhulu');
            }
          },
          ai: {
            order: 7,
            result: {
              target(player, target) {
                var num = game.countPlayer(function (current) {
                  return get.attitude(player, current) < 0 && current != player && current.countCards('h');
                });
                if (num > 3) num = 3;
                var hs = player.getCards('h');
                for (var i = 0; i < hs.length; i++) {
                  if (get.value(hs[i]) <= 6 && hs[i].number >= 10) return -1;
                }
                return 0;
              }
            }
          }
        },
        sdxl_zhulu2: {
          trigger: {
            player: 'useCard2'
          },
          forced: true,
          filter(event, player) {
            if (!player.storage.sdxl_zhulu || !player.storage.sdxl_zhulu.length) return false;
            if (get.type(event.card) != 'basic' && get.type(event.card) != 'trick') return false;
            var info = get.info(event.card);
            if (info.allowMultiple == false) return false;
            if (event.targets && !info.multitarget) {
              if (
              game.hasPlayer(function (current) {
                return lib.filter.targetEnabled(event.card, player, current) && !event.targets.includes(current) && player.storage.sdxl_zhulu.includes(current);
              }))
              {
                return true;
              }
            }
            return false;
          },
          content() {
            'step 0';
            player.
            chooseTarget('是否选择' + get.translation(player.storage.sdxl_zhulu) + '成为' + get.translation(trigger.card) + '的额外目标?', [1, player.storage.sdxl_zhulu.length], function (card, player, target) {
              var player = _status.event.player;
              if (_status.event.targets.includes(target)) return false;
              if (!_status.event.list.includes(target)) return false;
              return lib.filter.targetEnabled(_status.event.card, player, target);
            }).
            set('ai', function (target) {
              var trigger = _status.event.getTrigger();
              var player = _status.event.player;
              return get.effect(target, trigger.card, player, player);
            }).
            set('targets', trigger.targets).
            set('card', trigger.card).
            set('list', player.storage.sdxl_zhulu);
            'step 1';
            if (result.targets?.length) {
              event.targets = result.targets;
            } else {
              player.removeSkill('sdxl_zhulu2');
              event.finish();
            }
            'step 2';
            if (event.targets) {
              trigger.targets.addArray(event.targets);
              player.removeSkill('sdxl_zhulu2');
              //player.addTempSkill('sdxl_zhulu2');
            }
          }
        },
        sdxl_zhonggu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageEnd'
          },
          forced: true,
          content() {
            'step 0';
            event.num1 = trigger.num;
            'step 1';
            player.
            chooseTarget(function (card, player, target) {
              return true;
            }).
            set('ai', function (target) {
              return get.attitude(player, target);
            }).
            set('prompt', get.prompt2('sdxl_zhonggu'));
            'step 2';
            if (result.targets?.length) {
              var target = result.targets[0];
              var equip = get.cardPile(function (card) {
                if (get.type(card) == 'equip') {
                  return !target.hasDisabledSlot(get.subtype(card));
                }
                return false;
              });
              if (equip) {
                target.chooseUseTarget(equip, true, 'nopopup');
              }
              var gain = [];
              var trick = get.cardPile(function (card) {
                return get.type(card) == 'trick';
              });
              var basic = get.cardPile(function (card) {
                return get.type(card) == 'basic';
              });
              if (trick) gain.push(trick);
              if (basic) gain.push(basic);
              if (gain.length) target.gain(gain, 'gain2', 'log');
              event.num1--;
              if (event.num1 > 0) event.goto(1);
            }
          }
        },
        sdyx_luoying: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseDrawBegin1' },
          filter(event, player) {
            return !event.numFixed;
          },
          check() {
            return ui.cardPile.hasChildNodes() && ui.cardPile.firstChild.suit != 'club';
          },
          content() {
            'step 0';
            trigger.changeToZero();
            //魔改调兵遣将←_←
            ui.clear();
            var cards = get.cards(1);
            player.$throw(cards, 1000, 'nobroadcast');
            event.dialog = ui.create.dialog('<img style=width:150px height=38px src=extension/金庸群侠传/image/button/jy_button_luoyingshenjian.jpg><br>落英', cards, true);
            _status.dieClose.push(event.dialog);
            event.dialog.videoId = lib.status.videoId++;
            game.addVideo('cardDialog', null, ['落英', get.cardsInfo(cards), event.dialog.videoId]);
            game.log(player, '展示了', cards);
            if (cards[0].suit == 'club') event.goto(3);
            'step 1';
            event.dialog.setCaption('<img style=width:150px height=38px src=extension/金庸群侠传/image/button/jy_button_luoyingshenjian.jpg>');
            var cards = get.cards(1);
            player.$throw(cards, 1000, 'nobroadcast');
            game.log(player, '展示了', cards);
            event.dialog.buttons.push(ui.create.button(cards[0], 'card', event.dialog.buttons[0].parentNode));
            if (cards[0].suit == 'club') event.goto(3);
            'step 2';
            event.goto(1);
            'step 3';
            var gain = [];
            for (var i = 0; i < event.dialog.buttons.length; i++) {
              gain.push(event.dialog.buttons[i].link);
            }
            player.gain(gain, 'gain2');
            'step 4';
            event.dialog.close();
            _status.dieClose.remove(event.dialog);
            game.addVideo('cardDialog', null, event.dialog.videoId);
          }
        },
        sdyx_bichao: {
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          multitarget: true,
          multiline: true,
          audio: 'ext:金庸群侠传/peiyin:3',
          check(event, player) {
            var num = (player.countCards('h') + 1) % 2;
            var targets = game.filterPlayer(function (current) {
              return current.countCards('h') > 0 && current != player && current.countCards('h') % 2 == num;
            });
            var effect = 0;
            for (var j = 0; j < targets.length; j++) {
              if (get.attitude(player, targets[j]) > 0) {
                effect--;
              } else effect++;
            }
            return effect > 0;
          },
          filter(event, player) {
            var num = (player.countCards('h') + 1) % 2;
            return game.hasPlayer(function (current) {
              return current.countCards('h') > 0 && current != player && current.countCards('h') % 2 == num;
            });
          },
          logTarget(event, player) {
            var num = (player.countCards('h') + 1) % 2;
            return game.filterPlayer(function (current) {
              return current.countCards('h') > 0 && current != player && current.countCards('h') % 2 == num;
            });
          },
          content() {
            'step 0';
            //孙休技能魔改
            var num = (player.countCards('h') + 1) % 2;
            if (!event.targets || !event.targets.length) {
              event.targets = lib.skill.sdyx_bichao.logTarget(null, player);
            }
            if (event.targets.length) {
              event.targets.sort(lib.sort.seat);
            }
            'step 1';
            if (event.targets.length) {
              var target = event.targets.shift();
              if (!target.isIn()) {
                event.redo();
                return;
              }
              target.addTempClass('target');
              event.current = target;
            } else {
              event.finish();
            }
            'step 2';
            if (event.current && event.current.countCards('h')) {
              event.current.chooseCard('选择一张手牌置于牌堆顶', 'h', true);
            } else {
              event.goto(1);
            }
            'step 3';
            if (result && result.cards) {
              event.current.lose(result.cards, ui.cardPile, 'visible', 'insert');
              event.current.$throw(result.cards, 1000, 'nobroadcast');
              var evt = event.getParent('sdyx_qingdou');
              if (evt && evt.name) {
                if (result.cards[0].suit == 'club') {
                  evt.is_club = true;
                  player.addMark('sdyx_qingdou', 1, false);
                  if (player.countMark('sdyx_qingdou') >= 9) {
                    event.trigger('sdyx_qingdou_count');
                  }
                }
              }
            }
            'step 4';
            'step 5';
            event.goto(1);
          }
        },
        sdyx_shushu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageEnd'
          },
          filter(event, player) {
            return event.num > 0;
          },
          content() {
            'step 0';
            var controls = ['偶数', '奇数'];
            player.chooseControl(controls, ui.create.dialog('选择声明奇数或偶数', 'hidden')).ai = function () {
              return Math.floor(Math.random() * controls.length);
            };
            'step 1';
            if (result.control == '奇数') {
              event.num1 = 1;
            } else {
              event.num1 = 0;
            }
            player.popup(result.control);
            'step 2';
            var cards = get.cards(3),
              num2 = 0;
            game.cardsGotoOrdering(cards);
            player.showCards(cards);
            if (Array.isArray(cards)) for (var i of cards) {
              num2 += i.number;
            }
            game.log(player, '展示的牌的点数之和为', num2);
            if (num2 % 2 == event.num1) {
              player.gain(cards, 'gain2', 'log');
              event.goto(2);
            }
          },
          ai: {
            maixie: true,
            maixie_hp: true,
            effect: {
              target(card, player, target) {
                if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                if (get.tag(card, 'damage')) return [1, 0.55];
              }
            }
          }
        },
        sdyx_suanchou: {
          contentqi() {
            'step 0';
            player.phaseZhunbei();
            'step 1';
            player.phaseJudge();
            'step 2';
            player.phaseUse();
            'step 3';
            game.broadcastAll(function () {
              if (ui.tempnowuxie) {
                ui.tempnowuxie.close();
                delete ui.tempnowuxie;
              }
            });
            player.phaseDiscard();
            delete player.using;
            delete player._noSkill;
            'step 4';
            player.phaseDraw();
            if (!player.noPhaseDelay) {
              if (player == game.me) {
              } else {
              }
            }
            'step 5';
            player.phaseJieshu();
          },
          contentPAN() {
            'step 0';
            player.phaseZhunbei();
            'step 1';
            player.phaseDraw();
            if (!player.noPhaseDelay) {
              if (player == game.me) {
              } else {
              }
            }
            'step 2';
            player.phaseUse();
            'step 3';
            player.phaseJudge();
            'step 4';
            game.broadcastAll(function () {
              if (ui.tempnowuxie) {
                ui.tempnowuxie.close();
                delete ui.tempnowuxie;
              }
            });
            player.phaseDiscard();
            delete player.using;
            delete player._noSkill;
            'step 5';
            player.phaseJieshu();
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseBefore'
          },
          filter(event, player) {
            return event.noskill !== true && player.countCards('h') > 0;
          },
          //forced:true,
          _priority: 80,
          //popup:false,
          //firstDo:true,
          forced: true,
          content() {
            'step 0';
            var next = player.chooseToDiscard(1, 'h', function (card, player) {
              return true;
            });
            next.ai = function (card) {
              if (player.hasJudge('lebu') && player.needsToDiscard(2) >= 2) {
                return 8 - get.value(card);
              }
              if (player.needsToDiscard() >= 5) {
                return 6 - get.value(card);
              }
              return 0;
            };
            next.prompt = get.prompt2('sdyx_suanchou');
            'step 1';
            if (result.bool) {
              player.chooseControl('选项一', '选项二').set('prompt', '算筹<br><br><div class="text">选项一:判定阶段移至出牌阶段后</div><br><div class="text">选项二:摸牌阶段移至弃牌阶段后</div></br>').ai = function () {
                if (player.hasJudge('lebu') && player.needsToDiscard(2) >= 2) {
                  return '选项一';
                }
                return '选项二';
              };
            } else {
              event.finish();
            }
            'step 2';
            if (result.control == '选项一') {
              if (!trigger.phaseList) {
                trigger.phaseList = ['phaseZhunbei', 'phaseDraw', 'phaseUse', 'phaseJudge', 'phaseDiscard', 'phaseJieshu'];
              } else {
                let list = [],
                  used = false,
                  list2 = [],
                  used2 = false;
                for (var i of trigger.phaseList) {
                  if (/phaseJudge/.test(i) && !used) {
                    used = i;
                  } else {
                    list.push(i);
                  }
                }
                if (used) {
                  for (var i of list) {
                    list2.push(i);
                    if (/phaseUse/.test(i) && !used2) {
                      list.push(used);
                      used2 = true;
                    }
                  }
                  if (used2) trigger.phaseList = list2;
                }
              }
              //trigger.setContent(lib.skill.sdyx_suanchou.contentPAN);
            } else {
              if (!trigger.phaseList) {
                trigger.phaseList = ['phaseZhunbei', 'phaseJudge', 'phaseUse', 'phaseDiscard', 'phaseDraw', 'phaseJieshu'];
              } else {
                let list = [],
                  used = false,
                  list2 = [],
                  used2 = false;
                for (var i of trigger.phaseList) {
                  if (/phaseDraw/.test(i) && !used) {
                    used = i;
                  } else {
                    list.push(i);
                  }
                }
                if (used) {
                  for (var i of list) {
                    list2.push(i);
                    if (/phaseDiscard/.test(i) && !used2) {
                      list.push(used);
                      used2 = true;
                    }
                  }
                  if (used2) trigger.phaseList = list2;
                }
              }
              //trigger.setContent(lib.skill.sdyx_suanchou.contentqi);
            }
          }
        },
        sdyx_baojia: {
          audio: 'ext:金庸群侠传/peiyin:2',
          //audioname:["sdxl_guofuX"],
          audioname2: {
            sdxl_guofuX: 'sdyx_baojia2'
          },
          trigger: {
            target: 'shaBegin'
          },
          check(event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          content() {
            'step 0';
            player.judge().judge2 = function (result) {
              return true;
            };
            'step 1';
            if (result) {
              if (result.color == 'black') {
                player.addTempSkills('jydiytaohuazhen_skill', 'shaEnd');
                game.log(player, '视为装备了', '#y桃花阵');
              } else if (result.color == 'red') {
                var canuse = [];
                var list = ['sha', 'shunshou', 'guohe', 'huogong'];
                for (var i = 0; i < list.length; i++) {
                  if (player.canUse({ name: list[i] }, trigger.player)) {
                    canuse.push(list[i]);
                  }
                }
                if (canuse.length) {
                  player.useCard({ name: canuse.randomGet() }, trigger.player);
                }
              }
            }
          },
          ai: {
            effect: {
              target(card, player, target) {
                if (card.name == 'sha') return [1, 0.6];
              }
            }
          }
        },
        sdyx_baojia2: { audio: 'ext:金庸群侠传/peiyin:2' },
        sdyx_wuxing: {
          mark: true,
          marktext: '五行',
          intro: {
            name: '五行',
            content(storage, player) {
              var str = '';
              var list = ['spade', 'club', 'heart', 'diamond', 'none'];
              for (var i of list) {
                if (player.hasMark('sdyx_wuxing_' + i)) str += get.translation('sdyx_wuxing_' + i) + ':共有' + get.translation(player.countMark('sdyx_wuxing_' + i)) + '个标记<br>';
              }
              return str;
            }
          },
          init(player) {
            lib.translate.sdyx_wuxing_spade = '土';
            lib.translate.sdyx_wuxing_heart = '金';
            lib.translate.sdyx_wuxing_club = '木';
            lib.translate.sdyx_wuxing_diamond = '火';
            lib.translate.sdyx_wuxing_none = '水';
          },
          audio: 'ext:金庸群侠传/peiyin:6',
          group: ['sdyx_wuxing_heart2', 'sdyx_wuxing_diamond2', 'sdyx_wuxing_club2', 'sdyx_wuxing_spade2', 'sdyx_wuxing_none2'],
          forced: true,
          _priority: -1,
          subSkill: {
            spade: {
            },
            heart: {
            },
            club: {
            },
            diamond: {
            },
            none: {
            }
          },
          trigger: { player: 'useCard' },
          content() {
            var suit = trigger.card.suit;
            if (suit && ['heart', 'diamond', 'club', 'spade'].includes(suit)) {
              player.addMark('sdyx_wuxing_' + suit);
            } else {
              player.addMark('sdyx_wuxing_none');
            }
          }
        },
        sdyx_wuxing_heart2: {
          logTarget: 'player',
          audio: 'sdyx_wuxing',
          trigger: { global: 'judge' },
          filter(event, player) {
            var judging = event.player.judging[0];
            if (judging.suit == 'heart') return false;
            return player.hasMark('sdyx_wuxing_heart');
          },
          prompt(event, player) {
            var card = event.player.judging[0];
            return '' + get.translation(event.player) + '的' + get.translation(event.card) + '判定结果为' + get.translation(card) + '是否将判定花色改为♥️️';
          },
          check(event, player) {
            var attitude = get.attitude(player, event.player);
            var judging = event.player.judging[0];
            var heart = { name: judging.name, suit: 'heart', number: judging.number };
            var result = event.judge(heart) - event.judge(judging);
            return result * attitude > 0;
          },
          content() {
            if (trigger.fixedResult) {
              trigger.fixedResult.suit = 'heart';
              trigger.fixedResult.color = 'red';
            } else {
              trigger.fixedResult = { suit: 'heart', color: 'red' };
            }
            game.log(player, '将判定结果改为了', '#y♥️️');
            player.removeMark('sdyx_wuxing_heart');
          }
        },
        sdyx_wuxing_club2: {
          audio: 'sdyx_wuxing',
          enable: 'phaseUse',
          viewAsFilter(player) {
            if (!player.hasMark('sdyx_wuxing_club')) return false;
            if (!player.countCards('hes', { suit: 'club' })) return false;
            return true;
          },
          position: 'hes',
          filterCard(card, player) {
            return card.suit == 'club';
          },
          viewAs: { name: 'tiesuo' },
          precontent() {
            player.removeMark('sdyx_wuxing_club');
          },
          prompt: '弃置一枚木标记并将一张♣️️牌当【玄铁索链】使用',
          check(card) {
            return 4.5 - get.value(card);
          }
        },
        sdyx_wuxing_diamond2: {
          audio: 'sdyx_wuxing',
          trigger: { global: 'damageBegin1' },
          forced: true,
          filter(event, player) {
            if (!player.hasMark('sdyx_wuxing_diamond')) return false;
            if (!player.countCards('hes', { suit: 'diamond' })) return false;
            if (event.hasNature()) return false;
            return true;
          },
          content() {
            'step 0';
            player.
            chooseToDiscard('hes', get.prompt2('sdyx_wuxing_diamond2', trigger.player), function (card, player) {
              if (card.suit != 'diamond') return false;
              return lib.filter.cardDiscardable.apply(this, arguments);
            }).
            set('ai', function (card) {
              var eff1 = get.damageEffect(trigger.player, player, player);
              var eff2 = get.damageEffect(trigger.player, player, player, 'fire');
              if (eff2 - eff1 > 0) return 6 - get.value(card);
              return -1;
            });
            'step 1';
            if (result.bool) {
              game.setNature(trigger, 'fire');
              player.removeMark('sdyx_wuxing_diamond');
            }
          }
        },
        sdyx_wuxing_spade2: {
          audio: 'sdyx_wuxing',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            if (!player.countCards('hes', (i) => i.suit == 'spade')) return false;
            if (player.hasMark('sdyx_wuxing_spade')) {
              return player.canMoveCard(null, null, function (i) {
                return i.suit == 'spade';
              });
            }
            return false;
          },
          check(card) {
            return 10 - get.value(card);
          },
          filterCard(card, player) {
            return card.suit == 'spade';
          },
          position: 'hes',
          content() {
            'step 0';
            player.moveCard(true, function (i) {
              return i.suit == 'spade';
            });
            'step 1';
            if (result && result.bool) {
              player.removeMark('sdyx_wuxing_spade');
            }
          },
          ai: {
            order: 10,
            result: {
              player(player, target) {
                return player.canMoveCard(true, null, function (i) {
                  return i.suit == 'spade';
                }) ?
                1 :
                0;
              }
            },
            expose: 0.4,
            threaten: 1.3
          }
        },
        sdyx_wuxing_none2: {
          audio: 'sdyx_wuxing',
          trigger: { global: 'phaseZhunbeiBegin' },
          logTarget: 'player',
          check(event, player) {
            var att = get.attitude(player, event.player);
            if (event.player.hasJudge('lebu')) return false;
            if (att < 0) {
              if (event.player.needsToDiscard(2) >= 2) return true;
            }
            return false;
          },
          filter(event, player) {
            return event.player != player && player.countMark('sdyx_wuxing_none') >= 3;
          },
          content() {
            trigger.player.skip('phaseUse');
            player.removeMark('sdyx_wuxing_none', 3);
          }
        },
        sdyx_zhenwei: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: { global: 'useCard' },
          forced: true,
          _priority: -5,
          filter(event, player) {
            if (event.card.name == 'sha' || event.card.name == 'nanman' || event.card.name == 'wanjian') {
              if (
              game.hasPlayer(function (current) {
                if (!event.targets.includes(current)) return false;
                return current.hasEmptySlot(2);
              }))

              return player.countCards('he') > 0;
            }
            return false;
          },
          content() {
            'step 0';
            var next = player.chooseCardTarget({
              position: 'he',
              selectTarget: [1, Infinity],
              filterCard: lib.filter.cardDiscardable,
              filterTarget(card, player, target) {
                var trigger = _status.event.getTrigger();
                if (!trigger.targets.includes(target)) return false;
                return target.hasEmptySlot(2); //!target.hasDisabledSlot(2);
              },
              ai1(card) {
                return get.unuseful(card) + 9;
              },
              ai2(target) {
                var trigger = _status.event.getTrigger();
                //var bool1=get.tag(trigger.card,'respondSha')&&!target.hasSha();
                // var bool2=get.tag(trigger.card,'respondShan')&&!target.hasShan();
                //if(bool1||bool2) return get.attitude(_status.event.player,target);
                var att = get.attitude(_status.event.player, target);
                if (trigger.targets.length == 1) {
                  if (trigger.card.name == 'sha' && trigger.card.nature == 'fire' && lib.inpile.includes('tengjia')) return -1;
                  if (trigger.card.name == 'sha' && trigger.card.nature == 'fire' && lib.inpile.includes('jydiywuchanyi')) return -1;
                  if (trigger.card.name == 'sha' && trigger.card.nature == 'jy_du' && lib.inpile.includes('jydiy_jingsibeixin')) return -1;
                }
                return att > 0 ? att : 0;
              },
              prompt: get.prompt('sdyx_zhenwei'),
              prompt2: '弃置一张牌,选择任意名目标直到此牌结算结束,你选择的角色视为装备一张防具牌'
            });
            'step 1';
            if (result.targets?.length) {
              event.targets = result.targets;
              player.discard(result.cards);
              var list = get.inpile(function (name) {
                var card = { name: name };
                var info = get.info(card);
                return info.type == 'equip' && info.subtype == 'equip2' && info.skills;
              });
              for (var i = 0; i < list.length; i++) {
                list[i] = ['防具', '', list[i]];
              }
              var att = get.attitude(player, result.targets[0]) > 0;
              var dialog = ui.create.dialog('选择一张防具牌令你选择的角色视为装备该防具牌', [list, 'vcard'], 'hidden');
              player.
              chooseButton(dialog, true).
              set('ai', function (button) {
                var player = _status.event.player;
                var aibool = _status.event.aibool;
                var cardx = _status.event.cardx;
                var triggerx = _status.event.triggerx;
                var name = button.link[2];
                if (aibool) {
                  if ((cardx.name == 'wanjian' || cardx.name == 'nanman') && (name == 'tengjia' || name == 'jydiywuchanyi' || name == 'jydiy_jingsibeixin')) return 10;
                  if (cardx.name == 'sha' && !cardx.nature && (name == 'tengjia' || name == 'jydiywuchanyi' || name == 'jydiy_jingsibeixin')) return 10;
                  if (cardx.name == 'sha' && get.color(cardx) == 'black' && (name == 'renwang' || name == 'jydiybeidouzhen')) return 10;
                  if (cardx.name == 'sha' && name == 'jydiytaohuazhen_re') return 8;
                  if (cardx.name == 'sha' && (name == 'bagua' || 'jydiytaohuazhen')) return 6;
                  if (triggerx && triggerx.baseDamage && triggerx.baseDamage > 1 && (name == 'jydiy_ruanweijia_re' || name == 'jydiy_ruanweijia')) return 5;
                  if (triggerx && triggerx.baseDamage && triggerx.baseDamage > 1 && name == 'baiyin') return 4;
                  return 0;
                } else {
                  if (cardx.name == 'sha' && cardx.nature && cardx.nature == 'fire' && (name == 'tengjia' || name == 'jydiywuchanyi')) return 10;
                  if (cardx.name == 'sha' && cardx.nature && cardx.nature == 'jy_du' && name == 'jydiy_jingsibeixin') return 10;
                  return 0;
                }
              }).
              set('aibool', att).
              set('cardx', trigger.card).
              set('triggerx', trigger);
            } else event.finish();
            'step 2';
            if (result.links?.length) {
              var card = game.createCard(result.links[0][2], '', '', '');
              var skills = get.info(card).skills;
              skills = skills.slice(0);
              for (var i of event.targets) {
                i.$gain2(card);
                for (var s of skills) {
                  i.addTempSkills(s, 'useCardEnd');
                }
              }
            }
          }
        },
        sdyx_xiagu: {
          init(player) {
            player.storage.sdyx_xiagu = {};
          },
          mark: true,
          marktext2: '侠',
          markimage: 'extension/金庸群侠传/image/icon/jyxiagu.jpg',
          intro: {
            mark(dialog, storage, player) {
              var filter = storage;
              if (!filter) return '没有发动';
              var list = [];
              for (var i in filter) {
                list.push([get.translation(get.type({ name: i })), '', i]);
              }
              if (!list.length) return '没有发动';
              dialog.addAuto([list, 'vcard']);
            },
            markcount(storage, player) {
              var filter = storage;
              if (!filter) return 0;
              var num = 0;
              for (var i in filter) {
                num++;
              }
              return num;
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCard2'
          },
          forced: true,
          _priority: -5,
          filter(event, player) {
            if (player.storage.sdyx_xiagu[event.card.name]) return false;
            if (event.player == player) return false;
            var info = get.info(event.card);
            if (info.allowMultiple == false) return false;
            if (event.targets && event.targets.length > 1 && !info.multitarget) return true;
            return false;
          },
          content() {
            'step 0';
            player.
            chooseTarget([1, Infinity], get.prompt2('sdyx_xiagu'), function (card, player, target) {
              return target != player && _status.event.list.includes(target) && target.countCards('he') > 0;
            }).
            set('ai', function (target) {
              var card = _status.event.cardx;
              var player = _status.event.player;
              var eff1 = get.effect(target, card, player, player);
              var eff2 = get.effect(player, card, player, player);
              return eff2 > eff1;
            }).
            set('list', trigger.targets).
            set('cardx', trigger.card);
            'step 1';
            if (result.bool) {
              player.storage.sdyx_xiagu[trigger.card.name] = true;
              player.gainMultiple(result.targets, 'he');
              player.loseHp(1);
              for (var i = 0; i < trigger.targets.length; i++) {
                for (var j = 0; j < result.targets.length; j++) {
                  if (trigger.targets[i] == result.targets[j]) trigger.targets[i] = player;
                }
              }
            }
          }
        },
        sdyx_shijian: {
          subSkill: {
            distance: {
              mark: true,
              marktext2: '使',
              markimage: 'extension/金庸群侠传/image/icon/jyshijian.jpg',
              intro: {
                content(storage) {
                  return '因你屠戮中原,神秘侠客向你劝谏,下回合你计算与其他角色距离+1.';
                }
              },
              mod: {
                globalFrom(from, to, distance) {
                  if (_status.currentPhase == from) return distance + 1;
                }
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            //player:"phaseJieshuBegin",
            player: 'phaseUseEnd'
          },
          forced: true,
          _priority: 5,
          filter(event, player) {
            if (player.countCards('h') == 0) return false;
            return game.hasPlayer(function (current) {
              return current != player && !current.hasSkill('sdyx_shijian_distance');
            });
          },
          content() {
            'step 0';
            var next = player.chooseCardTarget({
              position: 'h',
              filterCard: lib.filter.cardDiscardable,
              filterTarget(card, player, target) {
                if (target.hasSkill('sdyx_shijian_distance')) return false;
                return target != player;
              },
              ai1(card) {
                return 4 - get.value(card);
              },
              ai2(target) {
                return -get.attitude(_status.event.player, target);
              },
              prompt: get.prompt2('sdyx_shijian')
            });
            'step 1';
            if (result.cards?.length) {
              player.discard(result.cards);
              var target = result.targets[0];
              target.addTempSkill('sdyx_shijian_distance', { player: 'phaseEnd' });
            }
          }
        },
        sdyx_miyue: {
          group: 'sdyx_miyue_count',
          subSkill: {
            map: {
              mark: true,
              marktext2: '约',
              markimage: 'extension/金庸群侠传/image/icon/jymiyue.jpg',
              intro: {
                content(storage) {
                  return '神秘侠客已向你约战,请用功习武哦!';
                }
              }
            },
            count: {
              trigger: { global: ['damageEnd'] },
              popup: false,
              _priority: -10,
              forced: true,
              content() {
                if (trigger.source && player.storage.sdyx_miyue.includes(trigger.source)) {
                  trigger.source.storage.sdyx_miyue_map += trigger.num;
                  trigger.source.markSkill('sdyx_miyue_map');
                }
              }
            }
          },
          init(player) {
            player.storage.sdyx_miyue = [];
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: ['roundStart'] },
          forced: true,
          content() {
            'step 0';
            if (player.storage.sdyx_miyue.length) {
              if (player.storage.sdyx_miyue[0].isAlive() && player.storage.sdyx_miyue[1].isAlive()) {
                var pl1 = player.storage.sdyx_miyue[0];
                var pl2 = player.storage.sdyx_miyue[1];
                var num1 = pl1.storage.sdyx_miyue_map;
                var num2 = pl2.storage.sdyx_miyue_map;
                if (num1 == num2) {
                  player.draw(3);
                } else if (num1 < num2) {
                  pl1.loseHp(1);
                } else if (num1 < num2) {
                  pl2.loseHp(1);
                }
              }
            }
            'step 1';
            player.
            chooseTarget(2, get.prompt2('sdyx_miyue'), function (card, player, target) {
              if (target.hasSkill('sdyx_miyue_map')) return false;
              if (ui.selected.targets.length == 1) {
                var hs = ui.selected.targets[0].countCards('h');
                var hp = ui.selected.targets[0].hp;
                return target.hp == hp || target.countCards('h') == hs;
              }
              return true;
            }).
            set('ai', function (target) {
              return -get.attitude(player, target);
            });
            'step 2';
            if (result.targets?.length) {
              player.storage.sdyx_miyue = result.targets;
              result.targets[1].addTempSkill('sdyx_miyue_map', 'roundStart');
              result.targets[0].addTempSkill('sdyx_miyue_map', 'roundStart');
              result.targets[1].storage.sdyx_miyue_map = 0;
              result.targets[0].storage.sdyx_miyue_map = 0;
            } else {
              player.storage.sdyx_miyue = [];
            }
          }
        },
        sdyx_miyue_new: {
          group: 'sdyx_miyue_new_count',
          subSkill: {
            map: {
              mark: true,
              marktext2: '约',
              markimage: 'extension/金庸群侠传/image/icon/jymiyue.jpg',
              intro: {
                content(storage) {
                  return '神秘侠客已向你约战,请用功习武哦!';
                }
              }
            },
            count: {
              trigger: { global: ['damageEnd'] },
              popup: false,
              _priority: -10,
              forced: true,
              content() {
                if (trigger.source && player.storage.sdyx_miyue_new.includes(trigger.source)) {
                  trigger.source.addMark('sdyx_miyue_new_map', trigger.num, false);
                }
              }
            }
          },
          init(player) {
            player.storage.sdyx_miyue_new = [];
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: ['roundStart'] },
          forced: true,
          content() {
            'step 0';
            if (player.storage.sdyx_miyue_new.length) {
              var pl1 = player.storage.sdyx_miyue_new[0];
              var pl2 = player.storage.sdyx_miyue_new[1];
              var num1 = pl1.storage.sdyx_miyue_new_map;
              var num2 = pl2.storage.sdyx_miyue_new_map;
              if (num1 == num2) {
                player.draw(3);
              } else if (num1 < num2) {
                if (pl1.isAlive()) {
                  pl1.loseHp(1);
                  if (
                  pl1.countCards('he', function (card) {
                    return lib.filter.cardDiscardable(card, pl1, 'sdyx_miyue_new');
                  }))

                  pl1.chooseToDiscard('he', true);
                }
              } else if (num1 < num2) {
                if (pl2.isAlive()) {
                  pl2.loseHp(1);
                  if (
                  pl2.countCards('he', function (card) {
                    return lib.filter.cardDiscardable(card, pl2, 'sdyx_miyue_new');
                  }))

                  pl2.chooseToDiscard('he', true);
                }
              }
            }
            'step 1';
            player.
            chooseTarget(2, get.prompt2('sdyx_miyue_new'), function (card, player, target) {
              if (target.hasSkill('sdyx_miyue_new_map')) return false;
              if (ui.selected.targets.length == 1) {
                var hs = ui.selected.targets[0].countCards('h');
                var hp = ui.selected.targets[0].hp;
                return target.hp == hp || target.countCards('h') == hs;
              }
              return true;
            }).
            set('ai', function (target) {
              return -get.attitude(player, target);
            });
            'step 2';
            if (result.targets?.length) {
              player.storage.sdyx_miyue_new = result.targets;
              result.targets[1].addTempSkill('sdyx_miyue_new_map', 'roundStart');
              result.targets[0].addTempSkill('sdyx_miyue_new_map', 'roundStart');
              result.targets[1].storage.sdyx_miyue_new_map = 0;
              result.targets[0].storage.sdyx_miyue_new_map = 0;
            } else {
              player.storage.sdyx_miyue_new = [];
            }
          }
        },
        sdyx_yiyang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          selectTarget: 1,
          selectCard: -1,
          filterCard: true,
          usable: 1,
          filter(event, player) {
            return player.countCards('h');
          },
          filterTarget(card, player, target) {
            if (target == player) return false;
            if (ui.selected.cards.length) {
              var length = ui.selected.cards.length;
              if (length >= 3) {
                return true;
              } else if (length == 2) {
                return true;
              } else if (length == 1) {
                return target.countDiscardableCards(player, 'he');
              }
            }
            return false;
          },
          content() {
            var length = cards.length;
            if (length >= 3) {
              target.turnOver();
              if (lib.config.extension_金庸群侠传_jiexiantupo) {
                target.damage(1, player);
                if (target.countDiscardableCards(player, 'he')) player.discardPlayerCard('he', target, true);
              }
            } else if (length == 2) {
              target.damage(1, player);
              if (lib.config.extension_金庸群侠传_jiexiantupo) {
                if (target.countDiscardableCards(player, 'he')) player.discardPlayerCard('he', target, true);
              }
            } else if (length == 1) {
              player.discardPlayerCard('he', target, true);
            }
          },
          ai: {
            order: 1,
            result: {
              player(player, target) {
                var cards = player.getCards('h');
                if (lib.config.extension_金庸群侠传_jiexiantupo && cards.length == 3) return;
                if (cards.length > 3 && player.hp >= 3) return -10;
                if (player.getCards('h', 'tao').length) return -10;
                return 0.5;
              },
              target(player, target) {
                var length = ui.selected.cards.length;
                var cards = ui.selected.cards;
                if (Array.isArray(cards)) for (var i of cards) {
                  if (i.name == 'tao') return 0;
                }
                var num = target.isTurnedOver() ? 3 : -3;
                var num2 = get.damageEffect(target, player);
                if (length >= 3) {
                  if (!lib.config.extension_金庸群侠传_jiexiantupo) return num;
                  if (num < 0 && num2 < 0) return num + num2;
                } else if (length == 2) {
                  if (!lib.config.extension_金庸群侠传_jiexiantupo) return num2;
                  if (num2 < 0) return num2 - 1;
                } else if (length == 1) {
                  return -1;
                }
                return 0;
              }
            },
            threaten: 0.8
          }
        },
        sdyx_chanxin: {
          audio: 'ext:金庸群侠传/peiyin:2',
          init(player) {
            player.storage.sdyx_chanxin = [];
            for (var i = 0; i < lib.inpile.length; i++) {
              if (get.type({ name: lib.inpile[i] }) == 'trick') player.storage.sdyx_chanxin.push(lib.inpile[i]);
            }
            player.markSkill('sdyx_chanxin');
          },
          marktext2: '禅',
          markimage: 'extension/金庸群侠传/image/icon/jychanxin.jpg',
          mark: true,
          intro: {
            mark(dialog, storage, player) {
              if (!storage.length) return '无';
              var list = [];
              for (var i = 0; i < storage.length; i++) {
                list.push(['锦囊', '', storage[i]]);
              }
              dialog.addAuto([list, 'vcard']);
            },
            markcount(storage, player) {
              return storage.length;
            }
          },
          filter(event, player) {
            if (!(lib.config.extension_金庸群侠传_jiexiantupo && player.storage.sdyx_duhua) && player.countCards('h')) return false;
            for (var i = 0; i < player.storage.sdyx_chanxin.length; i++) {
              if (player.hasUseTarget({ name: player.storage.sdyx_chanxin[i] })) return true;
            }
            return false;
          },
          trigger: { player: ['damageEnd'] },
          forced: true,
          content() {
            'step 0';
            var list = [];
            var list2 = [];
            for (var i = 0; i < player.storage.sdyx_chanxin.length; i++) {
              if (player.hasUseTarget({ name: player.storage.sdyx_chanxin[i] })) {
                list.push(['锦囊', '', player.storage.sdyx_chanxin[i]]);
              } else {
                list2.push(['锦囊', '', player.storage.sdyx_chanxin[i]]);
              }
            }
            list.sort(lib.sort.name);
            var dialog = ui.create.dialog('<img style=width:150px height=38px src=extension/金庸群侠传/image/button/jy_button_chanxin.jpg><br>可以通过【禅心】使用的普通锦囊牌:', [list, 'vcard']);
            if (list2.length) {
              dialog.add('不可以通过【禅心】使用的普通锦囊牌:');
              dialog.add([list2, 'vcard']);
            }
            player.
            chooseButton(dialog).
            set('ai', function (button) {
              return _status.event.player.getUseValue({ name: button.link[2] });
            }).
            set('filterButton', function (button) {
              return _status.event.player.hasUseTarget({ name: button.link[2] });
            });
            'step 1';
            if (result.links?.length) {
              player.chooseUseTarget({ name: result.links[0][2] }, true);
              player.storage.sdyx_chanxin.remove(result.links[0][2]);
              player.markSkill('sdyx_chanxin');
            }
          }
        },
        sdyx_duhua: {
          audio: 'ext:金庸群侠传/peiyin:2',
          marktext2: '度',
          markimage: 'extension/金庸群侠传/image/icon/jyduhua.jpg',
          mark: true,
          intro: { content: 'limited' },
          init(player) {
            player.storage.sdyx_duhua = false;
          },
          filter(event, player) {
            if (player.storage.sdyx_duhua) return false;
            return true;
          },
          enable: 'phaseUse',
          filterTarget(card, player, target) {
            if (target.hp >= target.maxHp) return false;
            return target != player;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            target.recover(target.maxHp - target.hp);
            player.awakenSkill('sdyx_duhua');
            player.storage.sdyx_duhua = true;
            if (lib.config.extension_金庸群侠传_jiexiantupo) {
              player.removeSkills('sdyx_yiyang');
            } else player.clearSkills();
          },
          ai: {
            order: 4,
            result: {
              target(player, target) {
                if (target.hp > 1) return 0;
                return 1;
              }
            }
          }
        },
        sdyx_lixian: {
          subSkill: {
            draw: {
              onremove(player) {
                delete player.storage.sdyx_lixian_draw;
              },
              init(player) {
                player.storage.sdyx_lixian_draw = 0;
              },
              mark: true,
              markimage: 'extension/金庸群侠传/image/icon/jylixian.jpg',
              intro: {
                content: '六王爷完颜洪烈赏识你的武艺,特将你收于麾下.你在下回合内每造成一次伤害后,你摸一张牌.'
              },
              trigger: { source: 'damageEnd' },
              forced: true,
              silent: true,
              content() {
                player.draw();
                player.storage.sdyx_lixian_draw++;
                if (player.storage.sdyx_lixian_draw >= 3) player.removeSkill('sdyx_lixian_draw');
              },
              popup: false
            }
          },
          trigger: {
            global: 'roundStart'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          _priority: 21,
          filter(event, player) {
            return game.hasPlayer(function (current) {
              return !current.hasSkill('sdyx_lixian_draw');
            });
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('sdyx_lixian'), function (card, player, target) {
              return !target.hasSkill('sdyx_lixian_draw');
            }).
            set('ai', function (target) {
              return get.attitude(player, target);
            });
            'step 1';
            if (result.bool) {
              for (var i of game.players) {
                if (i.hasSkill('sdyx_lixian_draw')) i.removeSkill('sdyx_lixian_draw');
              }
              if (player != result.targets[0]) {
                player.say(['相信你等定不负本王众望!', '本王向来赏识人才!', '大金国向来不会亏待贤士!'].randomGet());
              } else {
                player.say(['本王今日就为诸位露一手!', '本王也并非泛泛之辈!'].randomGet());
              }
              result.targets[0].addSkill('sdyx_lixian_draw');
              if (player != result.targets[0]) {
                result.targets[0].say(['多谢王爷赏识!', '王爷厚恩,在下自会涌泉相报!'].randomGet());
              }
            }
          }
        },
        sdyx_zhulu: {
          trigger: {
            player: 'useCard'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          filter(event, player) {
            if (!event.cards || event.cards.length != 1) return false;
            if (_status.currentPhase != player) return false;
            return event.getParent('phaseUse').name == 'phaseUse';
          },
          content() {
            var cards = get.cards(1);
            game.cardsGotoOrdering(cards);
            player.showCards(cards, '逐鹿');
            if (cards[0].number > trigger.card.number) {
              player.gain(cards, 'gain2', 'log');
            }
          }
        },
        sdyx_baye: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: ['sdyx_baye_remove'],
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
                player.removeSkill('sdyx_baye');
              }
            }
          },
          global: 'sdyx_baye1',
          zhuSkill: true
        },
        sdyx_baye1: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          prompt: '重置你的武将技能',
          usable: 1,
          filter(event, player) {
            var group = 'qun';
            if (lib.jy_changeSkill) group = 'jy_lie';
            if (group != player.group) return false;
            return game.hasPlayer(function (target) {
              return target != player;
            });
          },
          content() {
            'step 0';
            var list = [];
            var skills = player.getOriginalSkills();
            for (var i = 0; i < skills.length; i++) {
              if (lib.skill[skills[i]].limited && player.awakenedSkills.includes(skills[i])) {
                list.push(skills[i]);
              }
            }
            event.limitedSkillList = list;
            if (!player.storage.baye_limit_reset && list.length) {
              player.chooseBool('是否重置一项限定技？否则你重置当前回合技能使用次数.').set('ai', function () {
                return true;
              });
            } else {
              game.playJY(['sdyx_baye1', 'sdyx_baye2'].randomGet());
              if (player.stat.length) {
                var pushStat = {
                  card: player.stat[player.stat.length - 1].card,
                  skill: {
                    sdyx_baye1: 1
                  }
                };
                //player.stat[player.stat.length-1].skill={'sdyx_baye1':1}
                player.stat.push(pushStat);
                game.log(player, '发动了【霸业】,重置了技能本回合使用次数.');
                player.say(['小人必尽心尽力,助王爷成就霸业!', '为王爷肝脑涂地,就在此时!'].randomGet());
              }
              event.finish();
            }
            'step 1';
            if (result.bool) {
              player.chooseControl(event.limitedSkillList).set('prompt', '请选择一项限定技并重置之.');
            } else {
              game.playJY(['sdyx_baye1', 'sdyx_baye2'].randomGet());
              if (player.stat.length) {
                var pushStat = {
                  card: player.stat[player.stat.length - 1].card,
                  skill: {
                    sdyx_baye1: 1
                  }
                };
                //player.stat[player.stat.length-1].skill={'sdyx_baye1':1}
                player.stat.push(pushStat);
                game.log(player, '发动了【霸业】,重置了技能本回合使用次数.');
                player.say(['小人必尽心尽力,助王爷成就霸业!', '为王爷肝脑涂地,就在此时!'].randomGet());
              }
              event.finish();
            }
            'step 2';
            game.playJY(['sdyx_baye1', 'sdyx_baye2'].randomGet());
            player.restoreSkill(result.control);
            player.storage.baye_limit_reset = true;
            game.log(player, '被王霸之气感染,虎躯一震,居然重置了限定技【', result.control, '】!');
            player.$fullscreenpop('王者霸业!');
            player.say(['小人必尽心尽力,助王爷成就霸业!', '为王爷肝脑涂地,就在此时!'].randomGet());
            //寰宇星城:没错,就是要这么炫酷!
          },
          ai: {
            order: 10.5,
            result: {
              player(player) {
                var num1 = 0;
                if (player.getStat().allSkills > 0) num1 += player.getStat().allSkills;
                return num1;
              }
            }
          }
        },
        //新缱绻--霸天 20220609
        sdyx_qianquan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageEnd'
          },
          forced: true,
          filter(event, player) {
            return event.num > 0;
          },
          content() {
            'step 0';
            event.count = Math.min(trigger.num, 9);
            'step 1';
            var next = player.chooseCardTarget({
              position: 'he',
              filterCard: lib.filter.cardDiscardable,
              filterTarget(card, player, target) {
                return target != player;
              },
              ai1(card) {
                return get.unuseful(card) + 9;
              },
              ai2(target) {
                if (target.hasSkillTag('nogain')) return 0;
                var att = get.attitude(_status.event.player, target);
                if (target.hasJudge('lebu')) att / 2;
                if (att > 0) return att;
                return 0;
              },
              selectCard: [1, Infinity],
              prompt: get.prompt(event.name),
              prompt2: '每当你受到一点伤害后,你可以弃置任意数量的牌,令一名其他角色摸双倍数量的牌.'
            });
            'step 2';
            if (result.targets?.length) {
              var target = result.targets[0];
              player.discard(result.cards);
              target.draw(2 * result.cards.length);
              event.count--;
            } else event.finish();
            'step 3';
            if (event.count > 0) event.goto(1);
          }
        },
        //旧缱绻
        sdyx_qianquan_old: {
          audio: 'sdyx_qianquan',
          trigger: {
            player: 'damageEnd'
          },
          filter(event, player) {
            return event.num > 0;
          },
          forced: true,
          content() {
            'step 0';
            event.num1 = trigger.num;
            'step 1';
            player.chooseTarget(get.prompt2('sdyx_qianquan_old')).set('ai', function (target) {
              return get.attitude(player, target);
            });
            'step 2';
            if (result.targets?.length) {
              result.targets[0].addSkill('sdyx_qianquan_old_xie');
              result.targets[0].addMark('sdyx_qianquan_old_xie', 1);
              event.num1--;
              if (event.num1 > 0) event.goto(1);
            } else {
              event.finish();
            }
          },
          subSkill: {
            xie: {
              marktext2: '鞋',
              markimage: 'extension/金庸群侠传/image/icon/jyyuxie.jpg',
              intro: {
                content(storage) {
                  return '当前有' + storage + '枚<玉鞋>标记.';
                }
              },
              trigger: {
                player: 'compare',
                target: 'compare'
              },
              audio: 'ext:金庸群侠传/peiyin:2',
              check(event, player) {
                if (player == event.player) {
                  return get.attitude(player, event.target) < 0 && event.card1.name != 'du';
                } else {
                  return get.attitude(player, event.player) < 0 && event.card2.name != 'du';
                }
              },
              filter(event, player) {
                if (event.iwhile && player == event.player) return false;
                if (event.player == player) {
                  return !get.owner(event.card1) && player.hasMark('sdyx_qianquan_old_xie');
                } else {
                  return !get.owner(event.card2) && player.hasMark('sdyx_qianquan_old_xie');
                }
              },
              prompt(event, player) {
                if (player == event.player) {
                  return '缱绻<br>是否移除一枚<玉鞋>标记令' + get.translation(event.card1) + '的点数视为13并获得该牌？';
                } else {
                  return '缱绻<br>是否移除一枚<玉鞋>标记令' + get.translation(event.card2) + '的点数视为13并获得该牌？';
                }
              },
              content() {
                game.log(player, '拼点牌点数视为', '#K');
                if (player == trigger.player) {
                  trigger.num1 = 13;
                  player.gain(trigger.card1, 'gain2', 'log');
                } else {
                  trigger.num2 = 13;
                  player.gain(trigger.card2, 'gain2', 'log');
                }
                player.removeMark('sdyx_qianquan_old_xie', 1);
              }
            }
          }
        },
        sdyx_zhaoqing: {
          group: 'sdyx_zhaoqing_draw',
          subSkill: {
            draw: {
              audio: 'sdyx_zhaoqing',
              trigger: {
                global: ['damageEnd', 'chooseToCompareAfter', 'compareMultipleAfter']
              },
              filter(event, player) {
                if (event.name == 'damage') {
                  if (event.source && event.source != player) {
                    if (event.card && event.card.name == 'juedou') return event.source && event.source.hasSex('male');
                  }
                } else if (event.name == 'chooseToCompare' || event.name == 'compareMultiple') {
                  if (event.targets && event.targets.length) return false;
                  if (event.num1 > event.num2) {
                    return event.player.hasSex('male') && event.player != player;
                  } else if (event.num1 < event.num2) {
                    return event.target.hasSex('male') && event.target != player;
                  }
                }
                return false;
              },
              logTarget(event, player) {
                if (event.name == 'damage') {
                  return event.source;
                } else if (event.name == 'chooseToCompare' || event.name == 'compareMultiple') {
                  if (event.num1 > event.num2) {
                    return event.player;
                  } else if (event.num1 < event.num2) {
                    return event.target;
                  }
                }
              },
              prompt(event, player) {
                if (event.name == 'damage') {
                  return '招亲<br>是否与' + get.translation(event.source) + '各摸一张牌？';
                } else if (event.name == 'chooseToCompare' || event.name == 'compareMultiple') {
                  if (event.num1 > event.num2) {
                    return '招亲<br>是否与' + get.translation(event.player) + '各摸一张牌？';
                  } else if (event.num1 < event.num2) {
                    return '招亲<br>是否与' + get.translation(event.target) + '各摸一张牌？';
                  }
                }
              },
              check(event, player) {
                if (event.name == 'damage') {
                  return get.attitude(player, event.source) > 0;
                } else if (event.name == 'chooseToCompare' || event.name == 'compareMultiple') {
                  if (event.num1 > event.num2) {
                    return get.attitude(player, event.player) > 0;
                  } else if (event.num1 < event.num2) {
                    return get.attitude(player, event.target) > 0;
                  }
                }
                return false;
              },
              content() {
                if (trigger.name == 'damage') {
                  game.asyncDraw([player, trigger.source]);
                } else if (trigger.name == 'chooseToCompare' || trigger.name == 'compareMultiple') {
                  if (trigger.num1 > trigger.num2) {
                    game.asyncDraw([player, trigger.player]);
                  } else if (trigger.num1 < trigger.num2) {
                    game.asyncDraw([player, trigger.target]);
                  }
                }
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            return (
              game.countPlayer(function (current) {
                return current != player && current.hasSex('male') && current.countCards('h');
              }) > 1);

          },
          filterTarget(card, player, target) {
            if (!target.countCards('h')) return false;
            if (player == target) return false;
            if (!target.hasSex('male')) return false;
            if (ui.selected.targets.length == 1) {
              return ui.selected.targets[0].canCompare(target);
            }
            return true;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          selectTarget: 2,
          multitarget: true,
          content() {
            targets[0].chooseToCompare(targets[1]);
          },
          ai: {
            order: 8,
            result: {
              target(player, target) {
                return -1;
              }
            }
          }
        },
        sdyx_rongma: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          viewAs: { name: 'wanjian' },
          position: 'hs',
          filterCard(card, player) {
            var suit = card.suit;
            if (ui.selected.cards.length) {
              return suit == ui.selected.cards[0].suit;
            }
            var cards = player.getCards('hs');
            if (Array.isArray(cards)) for (var i of cards) {
              if (card != i) {
                if (suit == i.suit) return true;
              }
            }
            return false;
          },
          selectCard: 2,
          complexCard: true,
          check(card) {
            var player = _status.event.player;
            var targets = game.filterPlayer(function (current) {
              return player.canUse('wanjian', current);
            });
            var num = 0;
            for (var i = 0; i < targets.length; i++) {
              var eff = get.sgn(get.effect(targets[i], { name: 'wanjian' }, player, player));
              if (targets[i].hp == 1) {
                eff *= 1.5;
              }
              num += eff;
            }
            if (!player.needsToDiscard(-1)) {
              if (targets.length >= 7) {
                if (num < 2) return 0;
              } else if (targets.length >= 5) {
                if (num < 1.5) return 0;
              }
            }
            return 6 - get.value(card);
          }
        },
        sdyx_tuojiang: {
          mod: {
            maxHandcard(player, num) {
              return (
                num +
                game.countPlayer(function (current) {
                  var group = 'qun';
                  if (lib.jy_changeSkill) group = 'jy_lie';
                  if (player != current && current.group == group) return 2;
                }));

            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            source: 'damageEnd'
          },
          mode: ['identity'],
          filter(event, player) {
            var group = 'qun';
            if (lib.jy_changeSkill) group = 'jy_lie';
            return event.player.group && event.player.group != group;
          },
          logTarget: 'player',
          forced: true,
          content() {
            trigger.player.say(['此地已被鞑子占据,我等且暂避锋芒', '家国沦陷,苍生何辜……', '兴,百姓苦,亡,百姓苦!', '亡国之痛,刻骨铭心……'].randomGet());
            var group = 'qun';
            if (lib.jy_changeSkill) group = 'jy_lie';
            trigger.player.changeGroup(group);
          }
        },
        sdyx_tianjiao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: ['sdyx_tianjiao_remove'],
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
                player.removeSkill('sdyx_tianjiao');
              }
            }
          },
          trigger: {
            global: 'damageEnd'
          },
          _priority: -8,
          zhuSkill: true,
          forced: true,
          filter(event, player) {
            if (!player.hasZhuSkill('sdyx_tianjiao')) return false;
            if (!event.source || !event.source.isIn()) return false;
            if (event.source == player) return false;
            var group = 'qun';
            if (lib.jy_changeSkill) group = 'jy_lie';
            if (group != event.source.group) return false;
            return true;
          },
          content() {
            'step 0';
            trigger.source.chooseBool('天骄:是否令' + get.translation(player) + '摸一张牌?').set('ai', function () {
              if (get.attitude(trigger.source, player) > 0) return true;
              return false;
            });
            'step 1';
            if (result.bool) {
              player.draw();
            }
          }
        },
        sdyx_yingong: {
          group: ['sdyx_yingong_add'],
          subSkill: {
            mark: {
              mark: true,
              marktext2: '弓',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_yingong.jpg',
              intro: {
                content: '拖雷使用<杀>时,可额外指定你为目标.'
              }
            },
            add: {
              trigger: {
                player: 'shaBegin'
              },
              check(event, player) {
                return get.attitude(player, event.target) < 0;
              },
              filter(event, player) {
                if (event.target.hasSkill('sdyx_yingong_mark')) return false;
                return true;
              },
              logTarget: 'target',
              content() {
                trigger.target.addSkill('sdyx_yingong_mark');
              }
            }
          },
          trigger: {
            player: 'useCard'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            var info = get.info(event.card);
            if (event.targets && !info.multitarget) {
              var targets = lib.skill.sdyx_yingong.logTarget(event, player);
              if (targets.length) {
                return true;
              }
            }
            return false;
          },
          _priority: 30,
          check(event, player) {
            var num = 0;
            var targets = lib.skill.sdyx_yingong.logTarget(event, player);
            for (var i = 0; i < targets.length; i++) {
              var eff = get.effect(targets[i], event.card, player, player);
              if (eff > 0) num++;
              if (eff < 0) num--;
            }
            if (num > 0) return true;
            return false;
          },
          logTarget(event, player) {
            var targets = game.filterPlayer(function (current) {
              return current.hasSkill('sdyx_yingong_mark') && lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
            });
            return targets;
          },
          content() {
            var targets = lib.skill.sdyx_yingong.logTarget(trigger, player);
            player.line(targets, 'green');
            game.log(targets, '额外成为了', trigger.card, '的目标');
            trigger.targets.addArray(targets);
          }
        },
        sdyx_gepao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          subSkill: {
            die: {
              trigger: {
                global: 'dieAfter'
              },
              forced: true,
              popup: false,
              silent: true,
              filter(event, player) {
                return event.player == player.storage.sdyx_gepao_two;
              },
              content() {
                player.removeSkill('sdyx_gepao_two');
              }
            },
            two: {
              group: 'sdyx_gepao_die',
              onremove(player) {
                delete player.storage.sdyx_gepao_two;
              },
              intro: {
                content: '你使用牌指定包含$多个目标后或$使用牌指定包含你的多个目标后,取消你或其成为目标并且你与其他各摸一张牌'
              },
              trigger: {
                global: 'useCard'
              },
              _priority: -10,
              forced: true,
              filter(event, player) {
                var info = get.info(event.card);
                if (info.allowMultiple == false || info.multitarget) return false;
                if (!event.targets || event.targets.length < 2) return false;
                if (!player.storage.sdyx_gepao_two) return false;
                if (event.player == player) {
                  if (event.targets.includes(player.storage.sdyx_gepao_two)) return true;
                } else if (event.player == player.storage.sdyx_gepao_two) {
                  if (event.targets.includes(player)) return true;
                }
                return false;
              },
              logTarget(event, player) {
                return player.storage.sdyx_gepao_two;
              },
              async content(event, trigger, player) {
                if (trigger.player == player) {
                  if (trigger.targets.includes(player.storage.sdyx_gepao_two)) {
                    trigger.targets.remove(player.storage.sdyx_gepao_two);
                    game.log(player.storage.sdyx_gepao_two, '取消成为', '#y' + get.translation(trigger.card), '的目标');
                    game.asyncDraw([player, player.storage.sdyx_gepao_two]);
                  }
                } else if (trigger.player == player.storage.sdyx_gepao_two) {
                  if (trigger.targets.includes(player)) {
                    trigger.targets.remove(player);
                    game.log(player, '取消成为', '#y' + get.translation(trigger.card), '的目标');
                    game.asyncDraw([player, player.storage.sdyx_gepao_two]);
                  }
                }
              }
            }
          },
          trigger: {
            global: 'gameStart',
            player: 'enterGame'
          },
          forced: true,
          filter(event, player) {
            return game.players.length > 1 && !player.hasSkill('sdyx_gepao_two');
          },
          content() {
            'step 0';
            player.
            chooseTarget('选择【割袍】的目标', lib.translate.sdyx_gepao_info, true, function (card, player, target) {
              return target != player;
            }).
            set('ai', function (target) {
              var att = get.attitude(_status.event.player, target);
              if (att > 0) return att + 1;
              if (att == 0) return Math.random();
              return att;
            });
            'step 1';
            if (result.targets?.length) {
              var target = result.targets[0];
              player.line(target, 'green');
              game.log(target, '成为了', '【割袍】', '的目标');
              player.storage.sdyx_gepao_two = target;
              player.addSkill('sdyx_gepao_two');
              player.loseHp();
              target.loseHp();
              game.asyncDraw([player, target], 2);
            }
          }
        },
        sdyx_ninglu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            source: 'damageEnd'
          },
          filter(event, player) {
            if (player.hasSkill('sdyx_ninglu_off')) return false;
            return game.hasPlayer(function (current) {
              return current.countGainableCards(player, 'hej') > 0 && current != player && current != event.player && get.distance(event.player, current, 'attack') <= 1;
            });
          },
          forced: true,
          content() {
            'step 0';
            player.chooseTarget(
              '是否发动【佞禄】?',
              lib.translate.sdyx_ninglu_info,
              [1, 2],
              function (card, player, target) {
                return target.countGainableCards(player, 'hej') > 0 && player != target && target != trigger.player && get.distance(trigger.player, target, 'attack') <= 1;
              },
              function (target) {
                var att = get.attitude(_status.event.player, target);
                var att2 = get.attitude(_status.event.player, trigger.player);
                if (att2 > 0) return -1;
                if (target.hasSkill('tuntian')) return att / 10;
                return 1 - att;
              }
            );
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets;
              if (trigger.player.storage.sdyx_ninglu == undefined) {
                trigger.player.storage.sdyx_ninglu = [];
              }
              for (var i = 0; i < result.targets.length; i++) {
                if (!trigger.player.storage.sdyx_ninglu.includes(result.targets[i])) {
                  trigger.player.storage.sdyx_ninglu.push(result.targets[i]);
                }
              }
              if (!player.hasSkill('sdyx_ninglu_off')) {
                player.addTempSkill('sdyx_ninglu_off');
              }
              if (!trigger.player.hasSkill('sdyx_ninglu_no')) trigger.player.addTempSkill('sdyx_ninglu_no', { player: 'phaseEnd' });
            } else {
              event.finish();
            }
            'step 2';
            for (var i = 0; i < event.target.length; i++) {
              player.gainPlayerCard('hej', event.target[i], true);
            }
          },
          subSkill: {
            off: {
            },
            no: {
              mark: true,
              marktext2: '佞',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_ninglu.jpg',
              intro: {
                content: ''
              },
              onremove(player) {
                delete player.storage.sdyx_ninglu;
              },
              mod: {
                playerEnabled(card, player, target) {
                  if (_status.currentPhase == player && player.storage.sdyx_ninglu && player.storage.sdyx_ninglu.includes(target)) return false;
                }
              }
            }
          },
          ai: {
            threaten: 2,
            expose: 0.3
          }
        },
        sdyx_huoyan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            target: 'useCardToBefore'
          },
          filter(event, player) {
            if (event.card.name != 'sha' && event.card.name != 'wanjian') return false;
            if (player.getEquip(2)) return false;
            return game.hasPlayer(function (current) {
              return current != player && current.getEquip(2);
            });
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2(event.name), function (card, player, target) {
              return target != player && target.getEquip(2);
            }).
            set('ai', function (target) {
              if (trigger.card.name == 'sha') {
                if (trigger.card.nature == 'fire' && target.getEquip('tenjia')) return -1;
                if (trigger.card.nature == 'thunder' && target.getEquip('jydiy_jingsibeixin')) return -1;
              }
              return 1;
            });
            'step 1';
            if (result.targets?.length) {
              event.tar = result.targets[0];
            } else {
              event.finish();
            }
            'step 2';
            event.tar.chooseBool('是否令' + get.translation(player) + '视为装备了你的防具牌?否则你弃置你的防具牌.').set('ai', function () {
              //  if(get.attitude(event.tar,player)>0) return true;
              return true;
            });
            'step 3';
            if (result.bool) {
              var car = event.tar.getEquip(2);
              if (car) {
                var info = get.info(car);
                if (info.skills) {
                  for (var i = 0; i < info.skills.length; i++) {
                    if (!player.hasSkill(info.skills[i])) player.addTempSkills(info.skills[i], 'useCardAfter');
                  }
                }
              }
            } else {
              if (event.tar.getEquip(2) != undefined) {
                event.tar.discard(event.tar.getEquip(2));
              }
            }
          }
        },
        sdyx_xiadan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageAfter'
          },
          forced: true,
          filter(event, player) {
            return event.source;
          },
          content() {
            'step 0';
            var History = trigger.source.getAllHistory('sourceDamage');
            var list = [];
            for (var i of History) {
              list.add(i.player);
            }
            event.listPlayer = list;
            var players = game.filterPlayer(function (current) {
              return event.listPlayer.includes(current);
            });
            player.
            chooseTarget(get.prompt2('sdyx_xiadan'), [1, players.length], function (card, player, target) {
              return players.includes(target);
            }).
            set('ai', function (target) {
              return get.attitude(player, target);
            });
            'step 1';
            if (result.bool) {
              event.logxiadan = true;
              game.asyncDraw(result.targets);
            }
            'step 2';
            if (event.listPlayer.length == 1 && event.listPlayer.includes(player)) {
              player.draw(2);
              game.log(player, '#y触发了【侠胆】的额外摸牌效果');
            }
          }
        },
        sdyx_xiangmo: {
          subSkill: {
            off: {
              mark: true,
              marktext2: '降',
              markimage: 'extension/金庸群侠传/image/icon/jyxiangmo.jpg',
              intro: {
                content: '本轮已发动【降魔】.'
              }
            }
          },
          trigger: {
            global: 'damageAfter'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          filter(event, player) {
            if (player.hasSkill('sdyx_xiangmo_off')) return false;
            if (event.source && event.player) {
              if (event.player == event.source) return false;
              if (!event.player.isAlive()) return false;
              if (event.player.countCards('h') >= event.source.countCards('h')) return false;
              return true;
            }
            return false;
          },
          content() {
            'step 0';
            event.num = trigger.source.countCards('h') - trigger.player.countCards('h');
            var str1 = '令' + get.translation(trigger.source) + '弃' + get.cnNumber(event.num, true) + '张牌';
            var str2 = '令' + get.translation(trigger.player) + '摸' + get.cnNumber(event.num, true) + '张牌';
            player.chooseControl('选项一', '选项二', '取消').set('prompt', '降魔<br><br><div class="text">选项一:' + str1 + '</div><br><div class="text">选项二:' + str2 + '</div></br>').ai = function () {
              var att1 = get.attitude(player, trigger.player);
              var att2 = get.attitude(player, trigger.source);
              if (att1 > 0) return '选项二';
              if (att2 < 0) return '选项一';
              return '取消';
            };
            'step 1';
            if (result.control && result.control != '取消') {
              if (result.control == '选项一') {
                player.line(trigger.source, 'green');
                trigger.source.chooseToDiscard(event.num, true, 'h');
                if (!player.hasSkill('sdyx_xiangmo_off')) {
                  player.addTempSkill('sdyx_xiangmo_off', 'roundStart');
                }
              } else if (result.control == '选项二') {
                player.line(trigger.player, 'green');
                trigger.player.draw(event.num);
                if (!player.hasSkill('sdyx_xiangmo_off')) {
                  player.addTempSkill('sdyx_xiangmo_off', 'roundStart');
                }
              }
            }
          }
        },
        sdyx_duling_new: {
          audio: 'sdyx_xiadan',
          mod: {
            targetInRange(card, player, target) {
              if (card.sdyx_duling_new) return true;
            }
          },
          enable: ['chooseToRespond', 'chooseToUse'],
          position: 'hes',
          viewAs: {
            name: 'sha',
            nature: 'jy_du',
            sdyx_duling_new: true
          },
          prompt: '你可以将点数为A,4,7,K的牌当无视距离的毒【杀】使用或打出.',
          check(card) {
            var val = get.value(card);
            if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
            return 5 - val;
          },
          filterCard(card, player) {
            const num = card.number;
            return [1, 4, 7, 13].includes(num);
          },
          viewAsFilter(player) {
            if (
            player.countCards('hes', function (cardx) {
              const num = cardx.number;
              return [1, 4, 7, 13].includes(num);
            }))

            return true;
            return false;
          }
        },
        sdyx_mangxiao_new: {
          audio: 'sdyx_xiangmo',
          trigger: {
            player: 'damageEnd'
          },
          forced: true,
          filter(event, player) {
            if (player == _status.currentPhase) return false;
            return event.source && event.source != player && event.source.isIn() && lib.filter.targetEnabled({ name: 'sha' }, player, event.source) && (player.hasSha() || _status.connectMode);
          },
          content() {
            'step 0';
            player.chooseToUse({
              prompt: get.prompt(event.name, trigger.source),
              prompt2: lib.translate.sdyx_mangxiao_new_info,
              addCount: false,
              logSkill: [event.name, trigger.source],
              complexSelect: true,
              sourcex: trigger.source,
              filterCard(card, player, event) {
                if (card.name != 'sha') return false;
                return lib.filter.filterCard.apply(this, arguments);
              },
              filterTarget(card, player, target) {
                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                return lib.filter.targetEnabled.apply(this, arguments);
              },
              oncard(card, player) {
                if (!card) card = this.card;
                card.sdyx_mangxiao_new = true;
              }
            });
            'step 1';
            if (result.bool) {
              var list = player.getHistory('sourceDamage', function (evt) {
                return evt.card && evt.card.sdyx_mangxiao_new && evt.getParent(event.name) == event && evt.nature == 'jy_du';
              });
              if (list.length && player.isIn() && player.isDamaged()) {
                player.recover();
              }
            }
          }
        },
        sdyxbiansheng_new: {
          trigger: {
            target: 'useCardToTarget'
          },
          filter(event, player) {
            return event.player != player && get.tag(event.card, 'damage') && player.countCards('h') > event.player.countCards('h') && event.cards.filterInD('od').length;
          },
          check(event, player) {
            if (event.player == game.me || event.player.isOnline()) return get.attitude(player, event.player) < 0;
            return get.effect(player, event.card, event.player, player) < 0;
          },
          logTarget: 'player',
          content() {
            'step 0';
            //移形换位——直取要害 (对策成功)
            //移形换位——旁敲侧击 (对策失败)
            //巍然不动——直取要害 (对策失败)
            //巍然不动——旁敲侧击 (对策成功)
            player.chooseToDuiben(trigger.player).set('title', '辩声').set('namelist', ['直取要害', '旁敲侧击', '移形换位', '巍然不动']);
            'step 1';
            if (result.bool) {
              player.gain(trigger.cards.filterInD('od'), 'gain2');
            } else {
              trigger.parent.directHit.add(player);
            }
          }
        },
        //界梅超风--霸天20220619
        sdyx_lizhao: {
          subSkill: {
            mark: {
              mod: {
                maxHandcard(player, num) {
                  return num - 1;
                }
              },
              forced: true,
              temp: true,
              charlotte: true,
              marktext: '爪',
              intro: {
                name: '利爪',
                name2: '白骨爪',
                content(storage, player, skill) {
                  return '你的摸牌阶段摸牌数-1;你的手牌上限-1.';
                }
              },
              trigger: {
                player: 'phaseDrawBegin2'
              },
              filter(event, player) {
                return !event.numFixed && event.num > 0;
              },
              content() {
                trigger.num--;
              }
            }
          },
          trigger: {
            source: 'damageSource'
          },
          filter(event, player) {
            return event.card && event.card.name == 'sha' && !event.player.hasMark('sdyx_lizhao_mark');
          },
          _priority: 10,
          check(event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          logTarget: 'player',
          audio: 'ext:金庸群侠传/peiyin:2',
          content() {
            player.$fullscreenpop('九阴白骨爪', 'thunder');
            trigger.player.addMark('sdyx_lizhao_mark');
            trigger.player.addSkill('sdyx_lizhao_mark');
          }
        },
        sdyx_shien: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'damageBegin'
          },
          logTarget: 'player',
          intro: {
            content: 'players'
          },
          check(event, player) {
            if (player.hp < 2) return false;
            return get.attitude(player, event.player) > 0;
          },
          filter(event, player) {
            return event.source != player && event.player != player;
          },
          content() {
            'step 0';
            var num = 1;
            if (get.jy_bangpai) {
              var bp1 = get.jy_bangpai(trigger.player);
              if (bp1.includes('jy_taohuadao')) {
                num = 2;
              }
            }
            game.asyncDraw([player, trigger.player], num);
            player.markAuto('sdyx_shien', [trigger.player]);
            'step 1';
            trigger.player = player;
          }
        },
        sdyx_guidao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          filter(event, player) {
            if (player.storage.sdyx_guidao) return false;
            var storage = player.getStorage('sdyx_shien');
            return game.hasPlayer(function (current) {
              if (current == player) return false;
              if (!storage.includes(current)) return false;
              var bp = get.jy_bangpai(current);
              if (!bp.length) return false;
              for (var i of bp) {
                if (lib.card[i] && !player.hasSkill(i)) return true;
              }
              return false;
            });
          },
          forced: true,
          mark: true,
          limited: true,
          init(player, skill) {
            player.storage[skill] = false;
          },
          intro: {
            content: 'limited'
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('sdyx_guidao'), function (card, player, current) {
              var storage = player.getStorage('sdyx_shien');
              if (current == player) return false;
              if (!storage.includes(current)) return false;
              var bp = get.jy_bangpai(current);
              if (!bp.length) return false;
              for (var i of bp) {
                if (lib.card[i] && !player.hasSkill(i)) return true;
              }
              return false;
            }).
            set('ai', function (target) {
              return Math.random();
            });
            'step 1';
            if (result.bool) {
              player.awakenSkill('sdyx_guidao');
              player.storage.sdyx_guidao = true;
              var target = result.targets[0];
              target.choose_bangpai_skill({
                player: target,
                gainSkillPlayer: player,
                chooseSkillPlayer: player
              });
            } else {
              event.finish();
            }
          }
        },
        //旧梅超风
        sdyx_lizhao_old: {
          subSkill: {
            mark: {
              mod: {
                maxHandcard(player, num) {
                  if (player.storage.sdyx_lizhao_old_mark !== true) return num - 1;
                }
              },
              forced: true,
              temp: true,
              charlotte: true,
              mark: true,
              marktext2: '厉',
              markimage: 'extension/金庸群侠传/image/icon/jylizhao.jpg',
              trigger: {
                player: ['phaseDrawBegin1', 'phaseJieshuBegin']
              },
              filter(event, player) {
                if (event.name == 'phaseDraw') return player.storage.sdyx_lizhao_old_mark === true && !event.numFixed;
                return true;
              },
              init(player) {
                player.storage.sdyx_lizhao_old_mark = true;
              },
              content() {
                if (trigger.name == 'phaseDraw') {
                  trigger.num--;
                } else {
                  if (player.storage.sdyx_lizhao_old_mark === true) {
                    player.storage.sdyx_lizhao_old_mark = false;
                  } else {
                    player.storage.sdyx_lizhao_old_mark = true;
                  }
                }
              },
              intro: {
                content(storage, player, skill) {
                  if (player.storage.sdyx_lizhao_old_mark === true) return '阴:你的摸牌阶段摸牌数-1.';
                  return '阳:你的手牌上限-1.';
                }
              }
            }
          },
          trigger: { source: 'damageSource' },
          filter(event, player) {
            return event.card && event.card.name == 'sha' && event.player.isIn() && !event.player.hasSkill('sdyx_lizhao_old_mark');
          },
          _priority: 10,
          check(event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          logTarget: 'player',
          audio: 'sdyx_lizhao',
          content() {
            player.$fullscreenpop('九阴白骨爪', 'thunder');
            trigger.player.addSkill('sdyx_lizhao_old_mark');
            trigger.player.storage.sdyx_lizhao_old_mark = true;
          }
        },
        sdyx_shien_old: {
          audio: 'sdyx_shien',
          trigger: {
            global: 'damageBegin'
          },
          _priority: 15,
          forced: true,
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          filter(event, player) {
            return event.source != player && event.player != player;
          },
          content() {
            'step 0';
            player.chooseBool('是否对' + get.translation(trigger.player) + '发动【师恩】代替其承受伤害？').set('ai', function () {
              if (player.hp < 2) return false;
              return get.attitude(player, trigger.player) > 0;
            });
            'step 1';
            if (result.bool) {
              trigger.player.draw();
              player.draw();
              trigger.player.addSkill('sdyx_shien_old2');
              trigger.player.markSkill('sdyx_shien_old2');
              trigger.player = player;
            } else event.finish();
          }
        },
        sdyx_shien_old2: {
          //mark:'character',
          marktext2: '恩',
          markimage: 'extension/金庸群侠传/image/icon/jyshien.jpg',
          init(player) {
            player.storage.sdyx_shien_old2 = [];
          },
          intro: {
            content: 'mark'
          }
        },
        sdyx_guidao_old: {
          audio: 'sdyx_shien',
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          filter(event, player) {
            return game.hasPlayer(function (current) {
              return current.hasSkill('sdyx_shien_old2');
            });
          },
          _priority: 2019,
          forced: true,
          // alter:true,
          createDialog(player, target, onlylist) {
            var names = [];
            var list = [];
            if (target.name && !target.isUnseen(0)) names.add(target.name);
            if (target.name1 && !target.isUnseen(0)) names.add(target.name1);
            if (target.name2 && !target.isUnseen(1)) names.add(target.name2);
            var pss = player.getSkills();
            for (var i = 0; i < names.length; i++) {
              var info = lib.character[names[i]];
              if (info) {
                var skills = info[3];
                for (var j = 0; j < skills.length; j++) {
                  if (
                  lib.translate[skills[j] + '_info'] &&
                  lib.skill[skills[j]] &&
                  //!lib.skill[skills[j]].unique&&
                  !pss.includes(skills[j]))
                  {
                    list.push(skills[j]);
                  }
                }
              }
            }
            if (onlylist) return list;
            var dialog = ui.create.dialog('forcebutton');
            dialog.add('选择获得一项技能');
            _status.event.list = list;
            var clickItem = function () {
              _status.event._result = this.link;
              game.resume();
            };
            for (var i = 0; i < list.length; i++) {
              if (lib.translate[list[i] + '_info']) {
                var translation = get.translation(list[i]);
                if (translation[0] == '新' && translation.length == 3) {
                  translation = translation.slice(1, 3);
                } else {
                  translation = translation.slice(0, 2);
                }
                var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
                item.firstChild.addEventListener('click', clickItem);
                item.firstChild.link = list[i];
              }
            }
            dialog.add(ui.create.div('.placeholder'));
            return dialog;
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('sdyx_guidao_old'), function (card, player, target) {
              if (!target.hasSkill('sdyx_shien_old2')) return false;
              var names = [];
              if (target.name && !target.isUnseen(0)) names.add(target.name);
              if (target.name1 && !target.isUnseen(0)) names.add(target.name1);
              if (target.name2 && !target.isUnseen(1)) names.add(target.name2);
              var pss = player.getSkills();
              for (var i = 0; i < names.length; i++) {
                var info = lib.character[names[i]];
                if (info) {
                  var skills = info[3];
                  for (var j = 0; j < skills.length; j++) {
                    if (
                    lib.translate[skills[j] + '_info'] &&
                    lib.skill[skills[j]] &&
                    //!lib.skill[skills[j]].unique&&
                    !pss.includes(skills[j]))
                    {
                      return true;
                    }
                  }
                }
                return false;
              }
            }).
            set('ai', function (target) {
              if (get.attitude(_status.event.player, target) > 0) return Math.random();
              return 0;
            });
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
            } else {
              event.finish();
            }
            'step 2';
            event.skillai = function (list) {
              return get.max(list, get.skillRank, 'item');
            };
            if (event.isMine()) {
              event.dialog = lib.skill.sdyx_guidao_old.createDialog(player, target); //tianshu
              event.switchToAuto = function () {
                event._result = event.skillai(event.list);
                game.resume();
              };
              _status.imchoosing = true;
              game.pause();
            } else {
              event._result = event.skillai(lib.skill.sdyx_guidao_old.createDialog(player, target, true));
            }
            'step 3';
            _status.imchoosing = false;
            if (event.dialog) {
              event.dialog.close();
            }
            player.addTempSkills(result);
            //	if(get.is.altered('sdyx_guidao_old')){
            //player.awakenSkill('sdyx_guidao_old');
            //}
            //	else{
            //player.awakenSkill('sdyx_shien_old');
            //}
            player.awakenSkill('sdyx_guidao_old');
            player.popup(result);
            game.log(player, '获得了', '【' + get.translation(result) + '】');
          }
        },
        sdyx_xingshang: {
          mod: {
            globalFrom(from, to, current) {
              if (from.hasMark('sdyx_xingshang')) return current - 1;
            }
          },
          trigger: { global: 'damageEnd' },
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (!event.source) return false;
            if (event.source == player || event.player == player) return false;
            return get.distance(player, event.player) <= 1 && event.num > 0;
          },
          forced: true,
          content() {
            player.addMark('sdyx_xingshang', trigger.num);
          },
          marktext2: '杏',
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_xinshang.jpg',
          intro: { content: 'mark' }
        },
        sdyx_tigu: {
          init(player, skill) {
            player.storage[skill] = false;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          derivation: ['sdyx_xuechou'],
          trigger: { player: 'phaseZhunbeiBegin' },
          filter(event, player) {
            if (player.countMark('sdyx_xingshang') < 3) return false;
            return !player.storage.sdyx_tigu;
          },
          forced: true,
          content() {
            player.loseMaxHp();
            player.addSkills('sdyx_xuechou');
            player.awakenSkill('sdyx_tigu');
            player.storage.sdyx_tigu = true;
          }
        },
        sdyx_xuechou: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filterCard: true,
          viewAsFilter(player) {
            if (!player.countCards('hs')) return false;
            if (!player.hasMark('sdyx_xingshang')) return false;
            return true;
          },
          position: 'hs',
          viewAs: { name: 'juedou' },
          precontent(result) {
            player.removeMark('sdyx_xingshang');
          },
          prompt: '移除一枚杏殇并将一张手牌当【比武】使用.',
          check(card, player) {
            return 5 - get.value(card);
          }
        },
        sdyx_weifu: {
          init(player, skill) {
            player.storage[skill] = true;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: ['chooseToCompareAfter', 'compareMultipleAfter', 'damageEnd'] },
          filter(event, player, name) {
            if (player.storage.sdyx_weifu) {
              if (event.name != 'damage') {
                if (event.targets && event.targets.length) return false;
                if (event.num1 == event.num2) return false;
                return event[event.num1 > event.num2 ? 'player' : 'target'].isIn();
              }
              return event.source && event.source.isIn() && event.card && event.card.name == 'juedou' && event.num > 0;
            } else {
              if (event.name != 'damage') {
                if (event.targets && event.targets.length) return false;
                var targets = [];
                if (event.num1 == event.num2) {
                  targets = [event.player, event.target];
                } else targets = [event[event.num1 > event.num2 ? 'target' : 'player']];
                for (var i of targets) {
                  if (
                  i.isIn() &&
                  i.countCards('he', function (card) {
                    return lib.filter.cardDiscardable(card, i, 'sdyx_weifu');
                  }) > 1)

                  return true;
                }
                return false;
              }
              return (
                event.player.isIn() &&
                event.card &&
                event.card.name == 'juedou' &&
                event.num > 0 &&
                event.player.countCards('he', function (card) {
                  return lib.filter.cardDiscardable(card, event.player, 'sdyx_weifu');
                }) > 1);

            }
          },
          logTarget(event, player) {
            if (player.storage.sdyx_weifu) {
              if (event.name != 'damage') {
                var target = event[event.num1 > event.num2 ? 'player' : 'target'];
                return [target];
              }
              return [event.source];
            } else {
              if (event.name != 'damage') {
                var targets = [],
                  targets2 = [];
                if (event.num1 == event.num2) {
                  targets = [event.player, event.target];
                } else targets = [event[event.num1 > event.num2 ? 'target' : 'player']];
                for (var i of targets) {
                  if (
                  i.isIn() &&
                  i.countCards('he', function (card) {
                    return lib.filter.cardDiscardable(card, i, 'sdyx_weifu');
                  }) > 1)

                  targets2.push(i);
                }
                return targets2;
              }
              return [event.player];
            }
          },
          check(event, player) {
            var targets = lib.skill.sdyx_weifu.logTarget(event, player);
            var att = 0;
            for (var i of targets) {
              att += get.attitude(player, i);
            }
            if (player.storage.sdyx_weifu) {
              return att > 0;
            } else {
              return att < 0;
            }
          },
          content() {
            var targets = lib.skill.sdyx_weifu.logTarget(trigger, player);
            if (player.storage.sdyx_weifu) {
              for (var i of targets) {
                i.draw(2);
              }
              player.storage.sdyx_weifu = false;
            } else {
              for (var i of targets) {
                i.chooseToDiscard(2, 'he', true);
              }
              player.storage.sdyx_weifu = true;
            }
          }
        },
        sdyx_lisuo: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'damageEnd' },
          forced: true,
          _priority: 15,
          filter(event, player) {
            if (!player.countCards('h')) return false;
            return game.hasPlayer(function (current) {
              return current != player && current.countCards('h') > player.countCards('h');
            });
          },
          content() {
            'step 0';
            var goon = false;
            //if(player.needsToDiscard()>1){
            //    goon=player.hasCard(function(card){
            //        return card.number>10&&get.value(card)<=5;
            //    });
            //}
            //else{
            //    goon=player.hasCard(function(card){
            //        return(card.number>=9&&get.value(card)<=5)||get.value(card)<=3;
            //   });
            //}
            player.
            chooseTarget(get.prompt('sdyx_lisuo'), function (card, player, target) {
              return target != player && target.countCards('h') > player.countCards('h');
            }).
            set('ai', function (target) {
              var player = _status.event.player;
              //if(_status.event.goon&&get.attitude(player,target)<=0){
              //    return target.countCards('h');
              //}
              if (get.attitude(player, target) <= 0) {
                return target.countCards('h');
              }
              return 0;
            }).
            set('goon', goon);
            'step 1';
            if (result.targets?.length) {
              var target = result.targets[0];
              event.target = target;
              player.chooseToCompare(target);
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              var num1 = event.target.countCards('h') + 1;
              var num2 = player.countCards('h');
              if (num1 - num2 > 0) player.draw(num1 - num2);
            }
          }
        },
        //界铁掌【霸天】
        sdyx_tiezhang3: {
          inherit: 'qinggang_skill',
          audio: 'sdyx_tiezhang2'
        },
        sdyx_tiezhang2: {
          group: 'sdyx_tiezhang3',
          audio: 'ext:金庸群侠传/peiyin:2',
          //audioname:["sdyx_shangguanjiannan"],
          audioname2: {
            //"武将名":"引用的技能配音",
            sdyx_shangguanjiannan: 'sdyx_tiezhangsgjn'
          },
          trigger: { source: 'damageEnd' },
          filter(event, player) {
            if (!event.card || event.card.name != 'sha') return false;
            var suit = function (card) {
              return true;
            };
            var cardSuit = get.color(event.card);
            if (cardSuit == 'black') {
              suit = function (card) {
                return get.color(card) == 'black';
              };
            } else if (cardSuit == 'red') {
              suit = function (card) {
                return get.color(card) == 'red';
              };
            }
            return game.hasPlayer(function (target) {
              return target.countDiscardableCards(player, 'ej', suit) > 0;
            });
          },
          forced: true,
          content() {
            'step 0';
            var suit = function (card) {
              return true;
            };
            var cardSuit = get.color(trigger.card);
            if (cardSuit == 'black') {
              suit = function (card) {
                return get.color(card) == 'black';
              };
            } else if (cardSuit == 'red') {
              suit = function (card) {
                return get.color(card) == 'red';
              };
            }
            player.
            chooseTarget([1, 2], get.prompt2('sdyx_tiezhang2'), function (card, player, target) {
              return target.countDiscardableCards(player, 'ej', suit) > 0;
            }).
            set('ai', function (target) {
              return get.effect(
                target,
                {
                  name: 'guohe_ai',
                  filterCard: _status.event.suitxx,
                  position: 'ej'
                },
                player,
                player
              );
            }).
            set('suitxx', suit);
            event.suitx = suit;
            'step 1';
            if (result.targets?.length) {
              for (var i of result.targets) {
                var str = '选择一张与' + get.translation(trigger.card) + '花色相同的牌令' + get.translation(i) + '弃置之';
                player.
                discardPlayerCard(str, i, 1, 'ej', true).
                set('filterButton', function (button) {
                  var suit = _status.event.suitxx;
                  return suit(button.link);
                }).
                set('suitxx', event.suitx);
              }
            } else {
              event.finish();
            }
          }
        },
        //以下是原版铁掌
        sdyx_tiezhang: {
          audio: 'sdyx_tiezhang2',
          trigger: { source: 'damageEnd' },
          filter(event, player) {
            var list = lib.suit.slice(0);
            if (!event.card || event.card.name != 'sha' || !list.includes(event.card.suit)) return false;
            return game.hasPlayer(function (target) {
              return (
                target.countDiscardableCards(player, 'ej', function (cardxx) {
                  return cardxx.suit == event.card.suit;
                }) > 0);

            });
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('sdyx_tiezhang'), function (card, player, target) {
              //var suits=trigger.card.suit;
              return (
                target.countDiscardableCards(player, 'ej', function (cardxx) {
                  return cardxx.suit == _status.event.suitxx;
                }) > 0);

            }).
            set('ai', function (target) {
              var player = _status.event.player;
              return get.effect(
                target,
                {
                  name: 'guohe_ai',
                  filterCard(cardxx) {
                    return cardxx.suit == _status.event.suitxx;
                  },
                  position: 'ej'
                },
                player,
                player
              );
            }).
            set('suitxx', trigger.card.suit);
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
              var str = '选择一张与' + get.translation(trigger.card) + '花色相同的牌令其弃置之';
              player.
              discardPlayerCard(str, event.target, 1, 'ej', true).
              set('filterButton', function (button) {
                var suits = _status.event.suitxx;
                if (button.link.suit != suits) return false;
                return true;
              }).
              set('suitxx', trigger.card.suit);
            } else {
              event.finish();
            }
          }
        },
        sdyx_huolian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            if (game.countPlayer() < 3) return false;
            return true;
          },
          filterTarget(card, player, target) {
            if (player == target) return false;
            if (ui.selected.targets.length == 0) {
              //if(target.countCards('he')==0) return false;
              var cardss = { name: 'sha' };
              return lib.filter.targetEnabled2(cardss, player, target);
            }
            if (ui.selected.targets.length == 1) {
              return get.distance(ui.selected.targets[0], target, 'attack') <= 1;
            }
            return true;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          targetprompt: ['令其交出牌', '获得牌'],
          selectTarget: 2,
          multitarget: true,
          content() {
            'step 0';
            event.tar1 = targets[0];
            event.tar2 = targets[1];
            player.line(event.tar1, 'green');
            'step 1';
            event.tar1.
            chooseCard(1, 'he', '是否选择一张♥️️牌给' + get.translation(event.tar2) + '?否则' + get.translation(player) + '视为对你使用一张杀.', function (card, player) {
              return card.suit == 'heart';
            }).
            set('ai', function (card) {
              var att1 = get.attitude(event.tar1, event.tar2);
              if (att1 > 0) {
                return 1;
              }
              if (event.tar1.hasShan()) {
                return -1;
              }
              return 4 - get.value(card);
            });
            'step 2';
            if (result.cards?.length) {
              event.tar1.give(result.cards[0], event.tar2, true);
              //event.tar1.line(event.tar2,'green');
              //event.tar2.gain(result.cards[0],event.tar1,'giveAuto');
            } else {
              player.useCard({ name: 'sha' }, event.tar1, false);
            }
          },
          ai: {
            order: 2.9,
            result: {
              target(player, target) {
                if (ui.selected.targets.length == 0) {
                  return -3;
                } else {
                  return 0.5;
                }
              }
            },
            expose: 0.4,
            threaten: 1.4
          }
        },
        //新洪七公:霸天 20220605
        sdyx_xiangyan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageEnd'
          },
          forced: true,
          filter(event, player) {
            return event.num > 0;
          },
          content() {
            'step 0';
            event.num = Math.min(trigger.num, 9);
            'step 1';
            event.cards = get.cards(5);
            game.cardsGotoOrdering(event.cards);
            event.videoId = lib.status.videoId++;
            game.broadcastAll(
              function (player, id, cards) {
                var str;
                if (player == game.me && !_status.auto) {
                  str = '飨宴:获取类型各不相同的牌';
                } else {
                  str = '飨宴';
                }
                var dialog = ui.create.dialog(str, cards);
                dialog.videoId = id;
              },
              player,
              event.videoId,
              event.cards
            );
            event.time = get.utc();
            game.addVideo('showCards', player, ['飨宴', get.cardsInfo(event.cards)]);
            game.addVideo('delay', null, 2);
            'step 2';
            var next = player.chooseButton([0, 5], true);
            next.set('dialog', event.videoId);
            next.set('filterButton', function (button) {
              for (var i = 0; i < ui.selected.buttons.length; i++) {
                if (get.type(button.link, 'trick') == get.type(ui.selected.buttons[i].link, 'trick')) return false;
              }
              return true;
            });
            next.set('ai', function (button) {
              return get.value(button.link, _status.event.player);
            });
            'step 3';
            if (result.bool && result.links) {
              event.cards2 = result.links;
            } else {
              event.cards2 = [];
            }
            var time = 1000 - (get.utc() - event.time);
            if (time > 0) {
            }
            'step 4';
            game.broadcastAll('closeDialog', event.videoId);
            var cards2 = event.cards2;
            if (cards2.length) {
              player.gain(cards2, 'log', 'gain2');
              event.cards.removeArray(cards2);
            }
            if (!event.cards.length) {
              event.goto(7);
            }
            'step 5';
            player.
            chooseTarget(function (card, player, target) {
              return target != player;
            }).
            set('ai', function (target) {
              return get.attitude(player, target) / Math.sqrt(1 + target.countCards('h'));
            }).
            set('createDialog', ['是否选择一名其他角色获得' + get.translation(event.cards) + '？', event.cards]);
            'step 6';
            if (result.targets?.length) {
              player.line(result.targets);
              result.targets[0].gain(event.cards, 'log', 'gain2');
            }
            'step 7';
            event.num--;
            if (event.num > 0) {
              player.chooseBool('是否再次发动【飨宴】？').set('frequentSkill', 'sdyx_xiangyan');
            } else {
              event.finish();
            }
            'step 8';
            if (result.bool) {
              event.goto(1);
            }
          },
          ai: {
            maixie: true,
            maixie_hp: true,
            effect: {
              target(card, player, target) {
                if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                if (get.tag(card, 'damage')) return [1, 0.55];
              }
            }
          }
        },
        sdyx_shouming: {
          derivation: ['tlbb_xianglong', 'jy_gaibang'],
          subSkill: {
            off: {
              marktext: '授',
              mark: true,
              intro: {
                content: '你本轮已发动【授命】.'
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseUseBegin'
          },
          forced: true,
          filter(event, player) {
            if (player.hasSkill('sdyx_shouming_off')) return false;
            if (event.player == player) return false;
            if (!player.countCards('hes', { type: 'equip' })) return false;
            return player.isDamaged();
          },
          content() {
            'step 0';
            player.
            chooseCard(1, 'hes', get.prompt('sdyx_shouming', trigger.player), '选择一张装备交给其其获得【降龙】和【无狗】直到回合结束', function (card, player) {
              return get.type(card) == 'equip';
            }).
            set('ai', function (card) {
              var target = _status.event.targetx;
              var player = _status.event.player;
              var att = get.attitude(player, target);
              if (att > 2 && target.hasSha()) {
                if (target.canUse(card, target)) {
                  var effect = get.effect(target, card, target, target);
                  if (target.getEquip(get.subtype(card))) effect = effect / 3;
                  if (target.hasSkillTag('nogain')) effect = effect / 10;
                  if (effect > 0) return effect;
                  return 0.1;
                }
                return -1;
              }
              return -1;
            }).
            set('targetx', trigger.player);
            'step 1';
            if (result.cards?.length) {
              //trigger.player.gain(result.cards[0],player,'give','log');
              player.give(result.cards[0], trigger.player, true);
              player.addTempSkill('sdyx_shouming_off', 'roundStart');
              trigger.player.addTempSkills('tlbb_xianglong');
              trigger.player.addTempSkills('jy_gaibang');
            }
          }
        },
        //旧享宴
        sdyx_xiangyan_old: {
          audio: 'sdyx_shouming',
          trigger: { player: 'damageEnd' },
          forced: true,
          filter(event, player) {
            return event.num > 0;
          },
          content() {
            'step 0';
            event.num = Math.min(trigger.num, 9);
            'step 1';
            event.cards = get.cards(5);
            game.cardsGotoOrdering(event.cards);
            event.videoId = lib.status.videoId++;
            game.broadcastAll(
              function (player, id, cards) {
                var str;
                if (player == game.me && !_status.auto) {
                  str = '飨宴:获取类型各不相同的牌';
                } else {
                  str = '飨宴';
                }
                var dialog = ui.create.dialog('<img style=width:150px height=38px src=extension/金庸群侠传/image/button/jy_button_yuanyangwuzhenkuai.jpg><br>你可以获得不同类别的牌各一张:', cards);
                dialog.videoId = id;
              },
              player,
              event.videoId,
              event.cards
            );
            event.time = get.utc();
            game.addVideo('showCards', player, ['飨宴', get.cardsInfo(event.cards)]);
            game.addVideo('delay', null, 2);
            'step 2';
            var next = player.chooseButton([0, 5], true);
            next.set('dialog', event.videoId);
            next.set('filterButton', function (button) {
              for (var i = 0; i < ui.selected.buttons.length; i++) {
                if (get.type(button.link, 'trick') == get.type(ui.selected.buttons[i].link, 'trick')) return false;
              }
              return true;
            });
            next.set('ai', function (button) {
              return get.value(button.link, _status.event.player);
            });
            'step 3';
            if (result.bool && result.links) {
              event.cards2 = result.links;
            } else {
              event.finish();
            }
            var time = 1000 - (get.utc() - event.time);
            if (time > 0) {
            }
            'step 4';
            game.broadcastAll('closeDialog', event.videoId);
            var cards2 = event.cards2;
            player.gain(cards2, 'log', 'gain2');
            'step 5';
            if (lib.config.extension_金庸群侠传_jiexiantupo) {
              event.num--;
              if (event.num > 0) {
                player.chooseBool('是否再次发动【飨宴】？').set('frequentSkill', 'sdyx_xiangyan_old');
              } else {
                event.finish();
              }
            } else {
              event.finish();
            }
            'step 6';
            if (result.bool) {
              event.goto(1);
            }
          },
          ai: {
            maixie: true,
            maixie_hp: true,
            effect: {
              target(card, player, target) {
                if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                if (get.tag(card, 'damage')) return [1, 0.55];
              }
            }
          }
        },
        //旧授命
        sdyx_shouming_old: {
          audio: 'sdyx_shouming',
          derivation: ['tlbb_xianglong'],
          subSkill: {
            off: {
              marktext2: '授',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_shouming.jpg',
              mark: true,
              intro: {
                content: '你本轮已发动【授命】.'
              }
            }
          },
          trigger: {
            global: 'phaseUseBegin'
          },
          forced: true,
          filter(event, player) {
            if (player.hasSkill('sdyx_shouming_old_off')) return false;
            if (event.player == player) return false;
            if (!player.countCards('hes', { type: 'equip' })) return false;
            return player.isDamaged();
          },
          content() {
            'step 0';
            player.
            chooseCard(1, 'hes', get.prompt('sdyx_shouming_old', trigger.player), '选择一张装备交给其其获得【降龙】直到回合结束', function (card, player) {
              return get.type(card) == 'equip';
            }).
            set('ai', function (card) {
              var att = get.attitude(player, trigger.player);
              if (att > 2 && trigger.player.hasSha()) {
                if (trigger.player.hasEmptySlot(get.subtype(card))) return 1;
                return -1;
              }
              return -1;
            });
            'step 1';
            if (result.cards?.length) {
              //trigger.player.gain(result.cards[0],player,'give','log');
              player.give(result.cards[0], trigger.player, true);
              player.addTempSkill('sdyx_shouming_old_off', 'roundStart');
              trigger.player.addTempSkills('tlbb_xianglong');
            }
          },
          ai: {
            threaten: 1
          }
        },
        sdyx_shezhang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: 'sdyx_shezhang2'
        },
        sdyx_shezhang2: {
          audio: 'sdyx_shezhang',
          mod: {
            attackRange(from, distance) {
              if (from.hasEmptySlot(1)) return distance + 1;
            }
          },
          equipSkill: true,
          noHidden: true,
          inherit: 'jydiy_shezhang_skill',
          filter(event, player) {
            if (!lib.skill.jydiy_shezhang_skill.filter(event, player)) return false;
            if (!player.hasEmptySlot(1)) return false;
            return true;
          },
          ai: {
            effect: {
              target(card, player, target) {
                if (target.getEquip(1)) return;
                if (player == target && get.subtype(card) == 'equip1') {
                  var num = 2;
                  if (target.hasSkill('sdyx_duxi')) num += 8;
                  if (get.equipValue(card) <= num) return 0;
                }
              }
            }
          }
        },
        sdyx_duxi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            source: 'damageBegin'
          },
          forced: true,
          filter(event, player) {
            if (!player.countCards('h', { suit: 'spade' })) return false;
            return event.hasNature();
          },
          content() {
            'step 0';
            const bool = function () {
              const att = get.attitude(player, trigger.player);
              if (att > 0) return false;
              const count = get.damageEffect(trigger.player, player, player, trigger.nature);
              if (count <= 0) return false;
              if (
              trigger.player.hasSkillTag('filterDamage', null, {
                player: player,
                card: trigger.card
              }))

              return false;
              return true;
            }();
            player.
            chooseToDiscard('h', get.prompt2('sdyx_duxi', trigger.player), function (card, player) {
              if (card.suit != 'spade') return false;
              return lib.filter.cardDiscardable.apply(this, arguments);
            }).
            set('ai', function (card) {
              if (!_status.event.aibool) return -1;
              return 9 - get.value(card);
            }).
            set('aibool', bool);
            'step 1';
            if (result.bool) {
              trigger.num++;
            }
          }
        },
        sdyx_nijing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'chooseToUse',
          filterCard(card, player) {
            return get.jyCardDu(card);
          },
          viewAs: { name: 'jiu' },
          viewAsFilter(player) {
            if (
            !player.countCards('hs', function (card) {
              return get.jyCardDu(card);
            }))

            return false;
            var event = _status.event;
            if (event.type == 'dying') {
              if (player != event.dying) return false;
            }
            return true;
          },
          position: 'hs',
          prompt: '你可以将一张硝磷火弹或属性杀当酒使用.',
          check(card) {
            if (_status.event.type == 'dying') return 1;
            return 6 - get.value(card);
          },
          ai: {
            save: true,
            skillTagFilter(player, tag, target) {
              if (player != target) return false;
              if (
              !player.countCards('hs', function (card) {
                return get.jyCardDu(card);
              }))

              return false;
            }
          }
        },
        sdyx_mushe: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          discard: false,
          lose: false,
          filter(event, player) {
            return player.countCards('h', { suit: 'spade' });
          },
          filterCard(card, player) {
            return card.suit == 'spade';
          },
          filterTarget(card, player, target) {
            if (target.hasSkill('sdyx_mushe')) return false;
            return player != target;
          },
          check(card) {
            return 5 - get.value(card);
          },
          content() {
            player.give(cards, target, true);
            target.storage.sdyx_mushe = player;
            target.addTempSkill('sdyx_mushe_end', { player: 'phaseJieshuEnd' });
          },
          ai: {
            result: {
              target: -0.5
            },
            basic: {
              order: 9
            }
          },
          subSkill: {
            end: {
              mark: true,
              marktext2: '蛇',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_mushe.jpg',
              intro: {
                content: '若你本回合未造成过蛊毒伤害,回合结束时你需要交给欧阳克两张♠️️️牌,或受到其一点蛊毒伤害.'
              },
              onremove(player) {
                delete player.storage.sdyx_mushe;
              },
              trigger: {
                player: 'phaseJieshuBegin'
              },
              forced: true,
              popup: false,
              content() {
                'step 0';
                if (!player.storage.sdyx_mushe.isAlive()) {
                  event.finish();
                  return;
                }
                var list = Array.from(lib.nature.keys());
                if (
                player.getHistory('sourceDamage', function (evt) {
                  return evt.nature && list.includes(evt.nature);
                }).length)
                {
                  event.finish();
                  return;
                }
                if (player.countCards('h', { suit: 'spade' }) < 2) {
                  player.damage(1, 'jy_du', player.storage.sdyx_mushe);
                  event.finish();
                  return;
                }
                'step 1';
                player.
                chooseCard(2, 'he', '是否选择两张♠️️牌交给' + get.translation(player.storage.sdyx_mushe) + '？,否则你受到其1点蛊毒伤害.', function (card, player) {
                  return card.suit == 'spade';
                }).
                set('ai', function (card) {
                  var att1 = get.attitude(player, player.storage.sdyx_mushe);
                  if (att1 > 0) {
                    return 1;
                  }
                  return 5 - get.value(card);
                });
                'step 2';
                if (result.bool) {
                  //player.line(player.storage.sdyx_mushe,'green');
                  //player.storage.sdyx_mushe.gain(result.cards,player,'giveAuto');
                  player.give(result.cards, player.storage.sdyx_mushe, true);
                } else {
                  player.damage(1, 'jy_du', player.storage.sdyx_mushe);
                }
              }
            }
          }
        },
        sdyx_jixia: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseUseBegin'
          },
          filter(event, player) {
            if (player.hasSkill('sdyx_jixia_off')) return false;
            if (event.player == player) return false;
            return true;
          },
          logTarget: 'player',
          check(event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          content() {
            'step 0';
            if (!trigger.player.countCards('h', { suit: 'spade' })) {
              trigger.player.addTempSkill('sdyx_jixia_spade');
              event.finish();
            }
            'step 1';
            trigger.player.
            chooseCard(1, 'he', '是否选择一张♠️️牌给' + get.translation(player) + '？否则你不能使用♠️️牌.', function (card, player) {
              return card.suit == 'spade';
            }).
            set('ai', function (card) {
              var att1 = get.attitude(trigger.player, player);
              if (att1 > 0) {
                return 1;
              }
              return 5 - get.value(card);
            });
            'step 2';
            if (result.cards?.length) {
              //player.gain(result.cards[0],trigger.player,'give');
              trigger.player.give(result.cards[0], player, true);
              player.addTempSkill('sdyx_jixia_off', 'roundStart');
            } else {
              trigger.player.addTempSkill('sdyx_jixia_spade');
            }
          },
          subSkill: {
            off: {
              mark: true,
              marktext2: '积',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_jixia.jpg',
              intro: {
                content: '【积黠】本轮已失效.'
              }
            },
            spade: {
              mark: true,
              marktext2: '♠️️',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_heitao.jpg',
              intro: {
                content: '因你拒绝交给欧阳克♠️️手牌,你本回回合不能使用或打出♠️️牌.'
              },
              mod: {
                cardEnabled(card, player) {
                  if (card.suit == 'spade') return false;
                },
                cardUsable(card, player) {
                  if (card.suit == 'spade') return false;
                },
                cardRespondable(card, player) {
                  if (card.suit == 'spade') return false;
                },
                cardSavable(card, player) {
                  if (card.suit == 'spade') return false;
                },
                targetInRange(card) {
                  if (card.suit == 'spade') return false;
                }
              }
            }
          }
        },
        sdyx_beimin: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: ['dying', 'damageEnd']
          },
          check(event, player) {
            if (get.attitude(player, event.player) <= 0) return false;
            const cards = event.player.getCards('e', function (i) {
              if (get.color(i) != 'red') return false;
              return event.player.canRecast(i);
            });
            if (event.player.hp > 0 && cards.length > 1) return false;
            return true;
          },
          filter(event, player) {
            const cards = event.player.getCards('e', function (i) {
              if (get.color(i) != 'red') return false;
              return event.player.canRecast(i);
            });
            if (!cards.length) return false;
            if (event.name === 'damage') {
              return event.num >= 2;
            } else {
              return event.player.hp <= 0;
            }
          },
          logTarget: 'player',
          content() {
            const cards = trigger.player.getCards('e', function (i) {
              if (get.color(i) != 'red') return false;
              return trigger.player.canRecast(i);
            });
            trigger.player.recast(cards);
            trigger.player.recover();
          },
          ai: {
            expose: 0.2,
            threaten: 1.5
          }
        },
        sdyx_zhuisi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          limited: true,
          mark: true,
          marktext2: '追',
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_zhuisi.jpg',
          init(player) {
            player.storage.sdyx_zhuisi = false;
          },
          enable: 'phaseUse',
          filter(event, player) {
            return !player.storage.sdyx_zhuisi;
          },
          intro: {
            content: 'limited'
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filterTarget(card, player, target) {
            return !target.storage.sdyx_zhuisied;
          },
          content() {
            player.awakenSkill('sdyx_zhuisi');
            player.storage.sdyx_zhuisi = true;
            player.storage.sdyx_zhuisi2 = {
              equip: {}
            };
            player.storage.sdyx_zhuisi2.player = target;
            for (var i = 1; i < 7; i++) {
              if (target.hasDisabledSlot(i)) {
                player.storage.sdyx_zhuisi2.equip['equip' + i] = false;
              } else {
                player.storage.sdyx_zhuisi2.equip['equip' + i] = true;
              }
            }
            target.storage.sdyx_zhuisied = true;
            player.storage.sdyx_zhuisi2.cards = target.getCards('e');
            player.addSkill('sdyx_zhuisi2');
          },
          ai: {
            order: 1,
            result: {
              target(player, target) {
                if (get.attitude(player, target) > 2) {
                  return target.countCards('e');
                }
                return 0;
              }
            }
          }
        },
        sdyx_zhuisi2: {
          audio: 'sdyx_zhuisi',
          trigger: {
            global: ['phaseBegin', 'dieBefore']
          },
          forced: true,
          filter(event, player) {
            return player.storage.sdyx_zhuisi2.player == event.player;
          },
          content() {
            'step 0';
            if (trigger.name == 'die') {
              player.removeSkill('sdyx_zhuisi2');
              player.restoreSkill('sdyx_zhuisi');
              event.finish();
            }
            'step 1';
            var link = player.storage.sdyx_zhuisi2;
            var target = player.storage.sdyx_zhuisi2.player;
            for (var i = 1; i < 7; i++) {
              if (target.hasDisabledSlot(i) && link.equip['equip' + i] == true) {
                target.enableEquip('equip' + i);
              }
              if (!target.hasDisabledSlot(i) && link.equip['equip' + i] == false) {
                target.disableEquip('equip' + i);
              }
            }
            var dis = target.getCards('e', function (card) {
              return !player.storage.sdyx_zhuisi2.cards.includes(card);
            });
            if (dis.length) target.discard(dis);
            for (var i of link.cards) {
              if (!target.getCards('e').includes(i)) {
                var bool = get.cardPile(function (card) {
                  return card == i;
                }, true);
                if (bool) {
                  target.equip(bool);
                } else {
                  target.equip(game.createCard(i));
                }
              }
            }
          }
        },
        sdyx_mingwan: {
          contentqi() {
            'step 0';
            player.phaseZhunbei();
            'step 1';
            player.phaseJudge();
            'step 2';
            player.phaseDraw();
            if (!player.noPhaseDelay) {
              if (player == game.me) {
              } else {
              }
            }
            player.phaseDiscard();
            'step 3';
            player.phaseUse();
            'step 4';
            game.broadcastAll(function () {
              if (ui.tempnowuxie) {
                ui.tempnowuxie.close();
                delete ui.tempnowuxie;
              }
            });
            delete player.using;
            delete player._noSkill;
            'step 5';
            player.phaseJieshu();
          },
          subSkill: {
            qi: {
              audio: 'ext:金庸群侠传/peiyin:2',
              mark: true,
              marktext2: '顽',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_mingwan.jpg',
              intro: {
                name: '冥顽',
                content: '受到周伯通的戏弄,你下个回合的弃牌阶段移至摸牌阶段后.'
              },
              trigger: {
                player: 'phaseBefore'
              },
              forced: true,
              _priority: 100,
              popup: false,
              firstDo: true,
              temp: true,
              charlotte: true,
              content() {
                if (!trigger.phaseList) {
                  trigger.phaseList = ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseDiscard', 'phaseUse', 'phaseJieshu'];
                } else {
                  let list = [],
                    used = false,
                    list2 = [],
                    used2 = false;
                  for (var i of trigger.phaseList) {
                    if (/phaseDiscard/.test(i) && !used) {
                      used = i;
                    } else {
                      list.push(i);
                    }
                  }
                  if (used) {
                    for (var i of list) {
                      list2.push(i);
                      if (/phaseDraw/.test(i) && !used2) {
                        list.push(used);
                        used2 = true;
                      }
                    }
                    if (used2) trigger.phaseList = list2;
                  }
                }
                //trigger.setContent(lib.skill.sdyx_mingwan.contentqi);
                player.removeSkill('sdyx_mingwan_qi');
              }
            },
            pan: {
              audio: 'ext:金庸群侠传/peiyin:2',
              mark: true,
              marktext2: '顽',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_mingwan.jpg',
              intro: {
                name: '冥顽',
                content: '受到周伯通的戏弄,你下个回合的判定阶段移至出牌阶段后.'
              },
              trigger: {
                player: 'phaseBefore'
              },
              forced: true,
              _priority: 100,
              popup: false,
              firstDo: true,
              temp: true,
              charlotte: true,
              content() {
                if (!trigger.phaseList) {
                  trigger.phaseList = ['phaseZhunbei', 'phaseDraw', 'phaseUse', 'phaseJudge', 'phaseDiscard', 'phaseJieshu'];
                } else {
                  let list = [],
                    used = false,
                    list2 = [],
                    used2 = false;
                  for (var i of trigger.phaseList) {
                    if (/phaseJudge/.test(i) && !used) {
                      used = i;
                    } else {
                      list.push(i);
                    }
                  }
                  if (used) {
                    for (var i of list) {
                      list2.push(i);
                      if (/phaseUse/.test(i) && !used2) {
                        list.push(used);
                        used2 = true;
                      }
                    }
                    if (used2) trigger.phaseList = list2;
                  }
                }
                //trigger.setContent(lib.skill.sdyx_suanchou.contentPAN);
                player.removeSkill('sdyx_mingwan_pan');
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            player: ['damageEnd', 'phaseEnd']
          },
          forced: true,
          filter(event, player, name) {
            if (name == 'damageEnd') {
              return event.num > 0;
            }
            return true;
          },
          content() {
            'step 0';
            event.num = 0;
            'step 1';
            player.
            chooseTarget(get.prompt('sdyx_mingwan'), function (card, player, target) {
              return !target.hasSkill('sdyx_mingwan_qi') && !target.hasSkill('sdyx_mingwan_pan');
            }).
            set('ai', function (target) {
              var att = get.attitude(player, target);
              if (att > 2) {
                return target.countCards('j');
              } else if (att < 0 && target.needsToDiscard(1) > 0) {
                return target.needsToDiscard(1);
              } else return -1;
            });
            'step 2';
            if (result.bool) {
              event.num++;
              event.target = result.targets[0];
            } else {
              event.finish();
            }
            'step 3';
            if (event.target) {
              player.chooseControl('选项一', '选项二').set('prompt', '冥顽<br><br><div class="text">选项一:将其下个回合的判定阶段移至出牌阶段后</div><br><div class="text">选项二:将其下个回合的弃牌阶段移至摸牌阶段后</div></br>').ai = function () {
                var att = get.attitude(player, event.target);
                if (att > 0) return '选项一';
                if (att < 0) return '选项二';
                return '选项二';
              };
            }
            'step 4';
            if (result.control == '选项一') {
              event.target.addSkill('sdyx_mingwan_pan');
            } else {
              event.target.addSkill('sdyx_mingwan_qi');
            }
            'step 5';
            if (event.triggername == 'phaseEnd') {
              event.finish();
              return;
            } else {
              if (event.num < trigger.num) event.goto(1);
            }
          }
        },
        sdyx_shouxun: {
          mod: {
            canBeGained(card, source, player) {
              var equips = player.getCards('e', function (i) {
                var sub = get.subtype(i);
                return sub == 'equip1' || sub == 'equip5';
              });
              if (equips.includes(card)) return false;
            },
            canBeDiscarded(card, source, player) {
              var equips = player.getCards('e', function (i) {
                var sub = get.subtype(i);
                return sub == 'equip1' || sub == 'equip5';
              });
              if (equips.includes(card)) return false;
            },
            canBeReplaced(card, player) {
              var equips = player.getCards('e', function (i) {
                var sub = get.subtype(i);
                return sub == 'equip1' || sub == 'equip5';
              });
              if (equips.includes(card)) return false;
            },
            cardDiscardable(card, player) {
              var equips = player.getCards('e', function (i) {
                var sub = get.subtype(i);
                return sub == 'equip1' || sub == 'equip5';
              });
              if (equips.includes(card)) return false;
            },
            cardEnabled2(card, player) {
              var equips = player.getCards('e', function (i) {
                var sub = get.subtype(i);
                return sub == 'equip1' || sub == 'equip5';
              });
              if (equips.includes(card)) return false;
            },
            ignoredHandcard(card, player) {
              var equips = player.getCards('e', function (i) {
                var sub = get.subtype(i);
                return sub == 'equip1' || sub == 'equip5';
              });
              if (equips.includes(card)) return true;
            },
            cardRecastable(card, player, source) {
              var equips = player.getCards('e', function (i) {
                var sub = get.subtype(i);
                return sub == 'equip1' || sub == 'equip5';
              });
              if (equips.includes(card)) return false;
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: ['loseBefore', 'disableEquipBefore'] },
          forced: true,
          filter(event, player) {
            if (event.name == 'disableEquip') return event.slots.includes('equip1') || event.slots.includes('equip5');
            var equips = player.getCards('e', function (i) {
              var sub = get.subtype(i);
              return sub == 'equip1' || sub == 'equip5';
            });
            return event.cards && event.cards.some((card) => equips.includes(card));
          },
          content() {
            if (trigger.name == 'lose') {
              var equips = player.getCards('e', function (i) {
                var sub = get.subtype(i);
                return sub == 'equip1' || sub == 'equip5';
              });
              trigger.cards.removeArray(equips);
            } else {
              while (trigger.slots.includes('equip1')) trigger.slots.remove('equip1');
              while (trigger.slots.includes('equip5')) trigger.slots.remove('equip5');
            }
          },
          group: ['sdyx_shouxun_draw'],
          subSkill: {
            draw: {
              enable: 'phaseUse',
              filterTarget(card, player, target) {
                return player != target && target.countCards('h');
              },
              selectTarget: 1,
              usable: 1,
              filter(event, player) {
                if (!lib.config.extension_金庸群侠传_jiexiantupo) return false;
                return player.getEquip(5);
              },
              content() {
                player.gainPlayerCard(target, true, 'he');
                var cards = player.getEquips('equip5');
                var skills = get.info(cards).skills;
                if (!skills) return;
                skills = skills.slice(0);
                for (var i of skills) {
                  target.addTempSkills(i, { player: 'phaseJieshuBegin' });
                }
              }
            }
          }
        },
        sdyx_qiaoyan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'chooseToCompareBegin'
          },
          forced: true,
          filter(event, player) {
            var targets = event.targets && event.targets.length ? event.targets.slice(0) : [event.target];
            targets.add(event.player);
            return game.hasPlayer(function (current) {
              return !targets.includes(current) && current.countCards('h');
            });
          },
          //check:function(){return 1},
          content() {
            'step 0';
            var targets = trigger.targets && trigger.targets.length ? trigger.targets.slice(0) : [trigger.target];
            targets.add(trigger.player);
            var next = player.chooseTarget(2, function (card, player, target) {
              if (ui.selected.targets.length) {
                return !_status.event.targetx.includes(target) && target.countCards('h');
              } else {
                return _status.event.targetx.includes(target);
              }
            });
            next.set('targetx', targets);
            next.set('ai', function (target) {
              var player = _status.event.player;
              var att = get.attitude(player, target);
              if (ui.selected.targets.length == 0) {
                return att;
              } else return -att;
            });
            next.set('complexSelect', true);
            next.set('multitarget', true);
            next.set('targetprompt', ['被代替拼点', '代替拼点']);
            next.set('prompt', get.prompt2('sdyx_qiaoyan'));
            'step 1';
            if (result.targets?.length) {
              event.target1 = result.targets[0];
              event.target2 = result.targets[1];
              event.target2.chooseCard('请选择一张手牌作为拼点牌打出', 'h', true);
              //event.target2.chooseCard('请选择一张手牌作为拼点牌','h',true);
            } else {
              event.finish();
            }
            'step 2';
            if (result.cards?.length) {
              event.card = result.cards[0];
              event.target2.respond(event.card, 'highlight');
              if (!trigger.fixedResult) trigger.fixedResult = {};
              trigger.fixedResult[event.target1.playerid] = event.card;
            } else {
              event.finish();
            }
            'step 3';
            game.cardsGotoOrdering(event.card).relatedEvent = trigger;
          },
          ai: {
            expose: 0.8
          }
        },
        sdyx_qingshi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          _priority: 2019,
          forced: true,
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          content() {
            'step 0';
            player.
            chooseTarget('选择【请师】的目标', lib.translate.sdyx_qingshi_info, function (card, player, target) {
              if (target.hasSkill('sdyx_qingshi2')) return false;
              return player.canCompare(target);
            }).
            set('ai', function (target) {
              return -get.attitude(player, target);
            });
            'step 1';
            if (result.targets?.length) {
              player.line(result.targets[0]);
              var target = result.targets[0];
              event.target = target;
              player.chooseToCompare(event.target);
            } else {
              event.finish();
            }
            'step 2';
            if (!result.bool) {
              //  var target=event.target;
              event.target.addSkill('sdyx_qingshi2');
              player.damage(event.target);
              event.finish();
            } else {
              player.chooseSkill(event.target, function (info, skill) {
                return event.target.isAlive();
              });
            }
            'step 3';
            if (result.bool) {
              var skill = result.skill;
              player.addTempSkills(skill);
            } else event.finish();
          },
          ai: {
            threaten: 2.3,
            result: {
              target(player, target) {
                return get.damageEffect(target, player, target);
              }
            },
            order: 9
          }
        },
        sdyx_qingshi2: {
          mark: true,
          forced: true,
          init(player) {
            player.markSkill('sdyx_qingshi2');
          },
          marktext2: '师',
          markimage: 'extension/金庸群侠传/image/icon/jyqingshi.jpg',
          intro: {
            content: '神秘侠客对你发动【请师】,快帮帮她吧!'
          },
          content() {}
        },
        sdyx_qimen: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageEnd'
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('sdyx_qimen'), function (card, player, target) {
              return !target.hasSkill('sdyx_qimen2');
            }).
            set('ai', function (target) {
              return get.attitude(player, target);
            });
            'step 1';
            if (result.targets?.length) {
              result.targets[0].addSkill('sdyx_qimen2', { player: 'phaseEnd' });
            }
          },
          ai: {
            maixie: true,
            maixie_hp: true,
            effect: {
              target(card, player, target) {
                if (get.tag(card, 'damage')) {
                  if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                }
              }
            }
          }
        },
        sdyx_qimen2: {
          trigger: { player: 'phaseBegin' },
          forced: true,
          popup: false,
          content() {
            'step 0';
            player.
            chooseControl('判定', '摸牌', function (event, player) {
              if (player.hasJudge('lebu')) return '判定';
              return '摸牌';
            }).
            set('prompt', '奇门:是否跳过判定阶段或者执行一个额外的的摸牌阶段');
            game.playJY(['sdyx_qimen1', 'sdyx_qimen2'].randomGet());
            'step 1';
            if (result.control == '判定') {
              player.skip('phaseJudge');
              player.removeSkill('sdyx_qimen2');
            } else if (result.control == '摸牌') {
              //player.phaseDraw();
              let list = [];
              used = false;
              for (var i of trigger.phaseList) {
                list.push(i);
                if (/phaseDraw/.test(i) && !used) {
                  list.push('phaseDraw|sdyx_qimen');
                  used = true;
                }
              }
              if (!used) list.unshift('phaseUse|yttl_xianfeng');
              trigger.phaseList = list;
              player.removeSkill('sdyx_qimen2');
            }
          }
        },
        sdyx_moshu1: {
          trigger: {
            global: 'useCard'
          },
          usable: 1,
          filter(event, player) {
            if (event.player == player) return false;
            if (get.type(event.card) != 'trick') return false;
            var info = get.info(event.card);
            if (!info.enable) return false;
            if (info.notarget) return false;
            return true;
          },
          content() {
            game.playJY(['sdyx_moshu1', 'sdyx_moshu2'].randomGet());
            player.storage.sdyx_moshu.push(trigger.card.name);
            game.log(player, '记录了', trigger.card);
            player.markSkill('sdyx_moshu');
          }
        },
        sdyx_moshu_debuff: { charlotte: true },
        sdyx_moshu: {
          init(player) {
            player.storage.sdyx_moshu = [];
          },
          mark: true,
          marktext2: '书',
          markimage: 'extension/金庸群侠传/image/icon/jymoshu.jpg',
          intro: {
            mark(dialog, storagex, player) {
              var storage = player.getStorage('sdyx_moshu');
              if (!storage.length) return '无';
              var list = [];
              for (var i = 0; i < storage.length; i++) {
                list.push(['锦囊', '', storage[i]]);
              }
              dialog.addAuto([list, 'vcard']);
            },
            markcount(storage, player) {
              return storage.length;
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          group: ['sdyx_moshu1'],
          enable: 'phaseUse',
          //usable:1,
          filter(event, player) {
            if (!player.countCards('hs')) return false;
            var storage = player.getStorage('sdyx_moshu');
            for (var i = 0; i < storage.length; i++) {
              if (event.filterCard && event.filterCard({ name: storage[i] }, player, event)) return true;
            }
            return false;
          },
          chooseButton: {
            dialog(event, player) {
              var list = [];
              var storage = player.getStorage('sdyx_moshu');
              storage = storage.filter(function (name, index, arr) {
                var id = arr.indexOf(name);
                if (id != index) return false;
                var vcard = { name: name };
                return event.filterCard(vcard, player, event);
              });
              for (var i = 0; i < storage.length; i++) {
                list.push(['锦囊', '', storage[i]]);
              }
              return ui.create.dialog('<img style=width:150px height=38px src=extension/金庸群侠传/image/button/jy_button_moshu.jpg>', [list, 'vcard']);
            },
            check(button) {
              var player = _status.event.player;
              return player.getUseValue({ name: button.link[2] });
            },
            backup(links, player) {
              return {
                filterCard: true,
                check(card) {
                  var value = get.value(card);
                  return 8 - value;
                },
                position: 'hs',
                selectCard: 1,
                popname: true,
                viewAs: { name: links[0][2] },
                onuse(result, player) {
                  player.storage.sdyx_moshu.remove(result.card.name);
                  if (player.hasSkill('sdyx_cuixin')) {
                    if (player.hasSkill('sdyx_moshu_debuff')) {
                      var next = game.createEvent('sdyx_moshu_after', false);
                      next.player = player;
                      next.setContent(function () {
                        if (player.isIn()) player.useSkill('sdyx_cuixin');
                      });
                      _status.event.next.remove(next);
                      _status.event.after.push(next);
                    }
                  }
                  player.addTempSkill('sdyx_moshu_debuff');
                }
              };
            },
            prompt(links, player) {
              return '将一张手牌当作' + get.translation(links[0][2]) + '使用';
            }
          },
          ai: {
            order: 2,
            result: {
              player(player) {
                var storage = player.getStorage('sdyx_moshu');
                if ((!player.hasSkill('sdyx_cuixin') || player.isDamaged() || !player.hasSkill('sdyx_moshu_debuff')) && player.needsToDiscard()) {
                  for (var i = 0; i < storage.length; i++) {
                    if (player.hasValueTarget({ name: storage[i] })) return 1;
                  }
                }
                return -1;
              }
            },
            threaten: 1.1
          }
        },
        sdyx_cuixin: {
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          content() {
            'step 0';
            player.chooseControl('失去体力', '减少上限', function (event, player) {
              if (get.effect(player, { name: 'losehp' }, player, player) > 0) return '失去体力';
              if (player.hp == player.maxHp) return '失去体力';
              if (player.hp < player.maxHp - 1 || player.hp <= 2) return '减少上限';
              return '失去体力';
            });
            'step 1';
            if (result.control == '失去体力') {
              player.loseHp();
            } else {
              player.loseMaxHp();
            }
          },
          ai: {
            threaten: 0.5
          }
        },
        sdyx_beihuai: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          forced: true,
          filter(event, player) {
            if (!player.countCards('h')) return false;
            var cards = player.getCards('h');
            for (var i = 1; i < cards.length; i++) {
              if (i.suit != cards[0].suit) return false;
            }
            return true;
          },
          content() {
            'step 0';
            player.showHandcards();
            var hs = player.getCards('h');
            event.suit = hs[0].suit;
            'step 1';
            ui.clear();
            var cards = get.cards(1);
            player.$throw(cards, 1000, 'nobroadcast');
            event.dialog = ui.create.dialog('<img style=width:150px height=38px src=extension/金庸群侠传/image/button/jy_button_taohuadao.jpg><br>悲怀', cards, true);
            _status.dieClose.push(event.dialog);
            event.dialog.videoId = lib.status.videoId++;
            game.addVideo('cardDialog', null, ['悲怀', get.cardsInfo(cards), event.dialog.videoId]);
            game.log(player, '展示了', cards);
            if (cards[0].suit == event.suit) event.goto(3);
            'step 2';
            event.dialog.setCaption('<img style=width:150px height=38px src=extension/金庸群侠传/image/button/jy_button_taohuadao.jpg><br>悲怀');
            var cards = get.cards(1);
            player.$throw(cards, 1000, 'nobroadcast');
            game.log(player, '展示了', cards);
            event.dialog.buttons.push(ui.create.button(cards[0], 'card', event.dialog.buttons[0].parentNode));
            if (cards[0].suit != event.suit) event.redo();
            'step 3';
            var gain = [];
            for (var i = 0; i < event.dialog.buttons.length; i++) {
              gain.push(event.dialog.buttons[i].link);
            }
            player.gain(gain, 'gain2', 'log');
            'step 4';
            event.dialog.close();
            _status.dieClose.remove(event.dialog);
            game.addVideo('cardDialog', null, event.dialog.videoId);
          }
        },
        sdyx_qushang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageEnd'
          },
          forced: true,
          filter(event, player) {
            return player.countCards('he') > 0;
          },
          content() {
            'step 0';
            player.chooseCardTarget({
              position: 'he',
              complexCard: true,
              filterCard(card, player) {
                var suit = card.suit;
                if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
                  if (i.suit == suit) return false;
                }
                return true;
              },
              selectCard: [1, 4],
              filterTarget(card, player, target) {
                return player != target;
              },
              ai1(card) {
                var player = _status.event.player;
                if (ui.selected.cards.length == 1) return -1;
                return 8 - get.value(card);
              },
              ai2(target) {
                var att = get.attitude(_status.event.player, target);
                if (att >= 0) {
                  if (target.isTurnedOver()) return att;
                  if (
                  target.hp < target.maxHp &&
                  target.countCards('h', function (cardx) {
                    return cardx.suit == ui.selected.cards[0].suit;
                  }))
                  {
                    return att;
                  }
                }
                if (att < 0) {
                  if (target.isTurnedOver()) return -1;
                  if (
                  !target.countCards('he', function (cardx) {
                    return cardx.suit == ui.selected.cards[0].suit;
                  }))
                  {
                    return -att;
                  }
                }
                return 0;
              },
              prompt: '是否弃置任意张不同花色的牌,令一名其他角色选择:弃置等量相同花色组成的牌;或翻面并获得你弃置的牌？'
            });
            'step 1';
            if (result.cards?.length) {
              player.discard(result.cards);
              event.cardsss = result.cards;
              var ssuit = [];
              if (Array.isArray(result.cards)) for (var i of result.cards) {
                var ssuits = i.suit;
                ssuit.add(ssuits);
              }
              event.target = result.targets[0];
              var next = event.target.chooseToDiscard('he', result.cards.length, '是否弃置' + result.cards.length + '张牌回复一点体力？否则翻面并获得其弃置的牌.', function (card, player) {
                var suit = card.suit;
                if (!ssuit.includes(suit)) return false;
                if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
                  if (i.suit == suit || !ssuit.includes(suit)) return false;
                }
                return true;
              });
              next.set('complexCard', true),
              next.set('ai', function (card) {
                if (event.target.isTurnedOver()) return -1;
                if (result.cards.length <= 2 && event.target.hp < event.target.maxHp) return 1;
                if (result.cards.length > 2) return -1;
                return 9 - get.value(card);
              });
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              event.target.recover();
            } else {
              event.target.turnOver();
              event.target.gain(event.cardsss, 'gain2');
            }
          },
          ai: {
            threaten: 0.6
          }
        },
        sdyx_jianchi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          trigger: { player: 'useCard2' },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            if (player.maxHp - player.hp <= 0) return false;
            return game.hasPlayer(function (current) {
              return !event.targets.includes(current) && player.canUse(event.card, current);
            });
          },
          forced: true,
          content() {
            'step 0';
            const damaged = player.maxHp - player.hp;
            const prompt2 = damaged > 1 ? '至多' : '';
            const prompt = `为${get.translation(trigger.card)}增加${prompt2}${get.cnNumber(damaged)}个目标`;
            const next = player.chooseTarget(get.prompt(event.name), prompt, [1, damaged], function (card, player, target) {
              return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
            });
            next.set('sourcex', trigger.targets);
            next.set('ai', function (target) {
              const player = _status.event.player;
              return get.effect(target, _status.event.card, player, player);
            });
            next.set('card', trigger.card);
            'step 1';
            if (result.targets?.length) {
              //event.targets=result.targets[0];
              event.targets = result.targets;
            } else {
              event.finish();
            }
            'step 2';
            trigger.targets.addArray(event.targets);
          },
          //filter:function(event,player){
          //    return !event.audioed&&event.card.name=='sha'&&event.targets.length>1;
          //},
          //content:function(){
          //    trigger.audioed=true;
          //},
          mod: {
            targetInRange(card, player, target, now) {
              if (card.name == 'sha') return true;
            }
            //selectTarget:function(card,player,range){
            //    if(player.maxHp-player.hp>0){
            //        if(card.name=='sha'&&range[1]!=-1)range[1]+=player.maxHp-player.hp;
            //    }
            //},
          }
        },
        sdyx_yuzhong: {
          audio: 'ext:金庸群侠传/peiyin:2',
          mod: {
            cardUsable(card, player, num) {
              if (card.name == 'sha' && card.storage && card.storage.sdyx_yuzhong) return Infinity;
            }
          },
          precontent() {
            if (event.getParent(2).name == 'phaseUse') {
              event.parent.addCount = false;
              player.addTempSkill('sdyx_yuzhong_off', 'phaseEnd');
            }
            var next = player.loseHp();
            event.next.remove(next);
            event.parent.after.push(next);
          },
          subSkill: { off: { sub: true } },
          enable: ['chooseToRespond', 'chooseToUse'],
          viewAs: {
            name: 'sha',
            storage: {
              sdyx_yuzhong: true
            }
          },
          filterCard() {
            return false;
          },
          viewAsFilter(player) {
            if (_status.event.parent.name == 'phaseUse' && player.hasSkill('sdyx_yuzhong_off')) return false;
            return true;
          },
          selectCard: -1,
          mark: false,
          prompt: '视为使用或打出一张杀',
          ai: {
            order() {
              var player = _status.event.player;
              if (_status.currentPhase == player && player.countCards('hs', 'sha') && player.hp >= 2) {
                return get.order({ name: 'sha' }) + 0.1;
              }
              return get.order({ name: 'sha' }) - 0.5;
            },
            skillTagFilter(player, tag, arg) {
              if (_status.event.parent.name == 'phaseUse' && player.hasSkill('sdyx_yuzhong_off')) return false;
            },
            respondSha: true
          }
        },
        sdyx_danxin: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCardToPlayered',
            target: 'useCardToTarget'
          },
          prompt(event, player) {
            var str = get.translation(event.player) + '使用了' + get.translation(event.card) + '指定了' + get.translation(event.target);
            str += get.prompt('sdyx_danxin', event.player);
            return str;
          },
          check(event, player) {
            if (get.attitude(player, event.player) > 0) return false;
            if (event.target == player) return true;
            if (player.hp <= 2 && event.target != player) return false;
            var goon = player.hasCard(function (card) {
              var val = get.value(card);
              if (val < 0) return true;
              if (val <= 5) {
                return card.number >= 10;
              }
              if (val <= 6) {
                return card.number >= 6;
              }
              return false;
            });
            if (!goon) return false;
            return get.effect(event.target, event.card, player, player) < 0;
          },
          filter(event, player, name) {
            if (event.card.name != 'sha') return false;
            if (event.target == player && name == 'useCardToPlayered') return false;
            return player.canCompare(event.player);
          },
          logTarget: 'player',
          content() {
            'step 0';
            player.chooseToCompare(trigger.player);
            if (trigger.target != player) {
              player.say(['休得伤害无辜!', '绝不让鞑子入襄阳城一步!', '住手!'].randomGet());
            }
            'step 1';
            if (result.bool) {
              if (trigger.cards && trigger.cards.filterInD().length) player.gain(trigger.cards.filterInD(), 'gain2', 'log');
              trigger.parent.excluded.add(trigger.target);
            } else if (trigger.target != player) {
              var evt = trigger.parent;
              evt.targets.remove(trigger.target);
              evt.targets.add(player);
            }
          },
          ai: {
            expose: 0.8,
            effect: {
              target(card, player, target, current) {
                if (card.name == 'sha' && current < 0) return 0.7;
              }
            }
          }
        },
        sdyx_polu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          firstDo: true,
          trigger: { player: 'useCard1' },
          forced: true,
          group: ['sdyx_polu_compare', 'sdyx_polu_draw'],
          filter(event, player) {
            return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
          },
          content() {
            trigger.audioed = true;
          },
          //上面这段抄自连弩,触发破虏配音
          mod: {
            attackRange(from, distance) {
              return distance + from.maxHp - from.hp;
            },
            cardUsable(card, player, num) {
              if (card.name == 'sha') {
                if (!player.hasSkill('sdyx_polu_draw1')) return num + player.getDamagedHp();
              }
              if (player.hasSkill('sdyx_polu_draw1')) return Infinity;
            }
          },
          subSkill: {
            draw1: { sub: true },
            compare: {
              trigger: {
                player: 'compare',
                target: 'compare'
              },
              forced: true,
              filter(event, player) {
                if (!lib.config.extension_金庸群侠传_jiexiantupo) return false;
                return player.isDamaged();
              },
              content() {
                var num1 = player.getDamagedHp();
                if (trigger.player != player) {
                  trigger.num2 += num1;
                  var strNumber = get.strNumber(trigger.num1);
                  game.log(player, '拼点牌点数改为', '#y' + strNumber);
                } else {
                  trigger.num1 += num1;
                  var strNumber = get.strNumber(trigger.num1);
                  game.log(player, '拼点牌点数改为', '#y' + strNumber);
                }
              }
            },
            draw: {
              audio: 'sdyx_polu',
              enable: 'phaseUse',
              limited: true,
              complexCard: true,
              position: 'h',
              filterCard(card, player, target) {
                return !get.tag(card, 'damage');
              },
              selectCard() {
                var player = _status.event.player;
                var cardx = player.getCards('h', function (card) {
                  return !get.tag(card, 'damage');
                });
                return cardx.length;
              },
              prompt: '弃置所有非[伤害]卡牌并摸等量的[伤害]卡牌',
              check(card) {
                return 6 - get.value(card);
              },
              filter(event, player) {
                var cardx = player.getCards('h', function (card) {
                  return !get.tag(card, 'damage');
                });
                if (cardx.length <= 0) return false;
                return !player.storage.sdyx_polu_draw;
              },
              check(card) {
                return 6 - get.value(card);
              },
              async content(event, trigger, player) {//QQQ
                player.awakenSkill('sdyx_polu_draw');
                player.storage.sdyx_polu_draw = true;
                var cardx = get.randomCards(cards.length, function (card) {
                  return get.tag(card, 'damage');
                });
                if (cardx.length) player.gain(cardx, 'draw');
                player.addTempSkill('sdyx_polu_draw1');
              },
              ai: {
                order: 1,
                threaten: 1.5,
                result: {
                  player(player) {
                    if (player.countCards('h', 'tao') && player.isDamaged) return 0;
                    var cardx = player.countCards('h', function (card) {
                      return !get.tag(card, 'damage');
                    });
                    if (cardx) {
                      var num = cardx;
                      var mhp = player.maxHp;
                      var hp = player.hp;
                      if (mhp < num) return 1;
                      if (num > hp && mhp > hp) return 1;
                      if (num < hp) return 0;
                    }
                    return 0.5;
                  }
                }
              }
            }
          }
        },
        sdyx_longyin: {
          global: 'sdyx_longyin2',
          zhuSkill: true
        },
        sdyx_longyin2: {
          mod: {
            inRangeOf(from, to) {
              let group = 'wei';
              if (lib.jy_changeSkill) group = 'jy_song';
              if (from.group != group) return;
              var players = game.filterPlayer();
              for (var i of players) {
                if (from != i && to != i && i.hasZhuSkill('sdyx_longyin', from)) {
                  if (i.inRange(to)) return true;
                }
              }
            }
          }
        },
        //界哲别  - 霸天20220626
        sdyx_sheqi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseDiscardBegin'
          },
          forced: true,
          filter(event, player) {
            if (player.getHistory('skipped').includes('phaseUse')) return true;
            var history = player.getHistory('useCard');
            for (var i = 0; i < history.length; i++) {
              if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) return false;
            }
            return true;
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('sdyx_sheqi'), function (card, player, target) {
              return target != player;
            }).
            set('ai', function (target) {
              if (
              target.hasSha() &&
              game.hasPlayer(function (current) {
                return target.canUse({ name: 'sha' }, current, false);
              }) &&
              target.getUseValue({ name: 'sha' }, false) > 0)
              {
                return get.attitude(player, target);
              }
              return 0;
            });
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
            } else {
              event.finish();
            }
            'step 2';
            target.addTempSkill('sdyx_sheqi_wushi2');
            target.chooseToUse({
              prompt: 'sdyx_sheqi',
              prompt2: '是否使用一张杀？',
              addCount: false,
              complexSelect: true,
              filterTarget: lib.filter.targetEnabled,
              filterCard(card, player, event) {
                if (card.name != 'sha') return false;
                return lib.filter.filterCard.apply(this, arguments);
              }
            });
            'step 3';
            target.removeSkill('sdyx_sheqi_wushi2');
          },
          group: ['sdyx_sheqi_wushi', 'sdyx_sheqi_gain', 'sdyx_sheqi_qilin'],
          subSkill: {
            qilin: {
              trigger: {
                source: 'damageSource'
              },
              forced: true,
              filter(event, player) {
                if (event._notrigger.includes(event.player)) return false;
                return event.player.countDiscardableCards(player, 'e', function (i) {
                  var type = get.subtype(i);
                  return type == 'equip3' || type == 'equip4' || type == 'equip6';
                });
              },
              content() {
                'step 0';
                var next = player.discardPlayerCard(get.prompt('sdyx_sheqi', trigger.player), '弃置目标的一张坐骑牌', 'e', trigger.player);
                next.set('filterButton', function (button) {
                  var type = get.subtype(button.link);
                  return type == 'equip3' || type == 'equip4' || type == 'equip6';
                });
              }
            },
            wushi2: {
              inherit: 'qinggang_skill',
              mod: {
                targetInRange(card, player, target, now) {
                  if (card.name == 'sha') return true;
                }
              },
              ai: {
                unequip: true,
                unequip: true,
                skillTagFilter(player, tag, arg) {
                  if (arg && arg.name == 'sha') return true;
                  return false;
                }
              },
              forced: true,
              popup: false,
              equipSkill: true,
              audio: true,
              trigger: {
                player: 'useCardToPlayered'
              },
              filter(event, player) {
                return event.card && event.card.name == 'sha';
              },
              logTarget: 'target',
              content() {
                trigger.target.addTempSkill('qinggang2');
                trigger.target.storage.qinggang2.add(trigger.card);
                trigger.target.markSkill('qinggang2');
              }
            },
            wushi: {
              inherit: 'qinggang_skill',
              mod: {
                targetInRange(card, player, target, now) {
                  if (card.name == 'sha') return true;
                }
              },
              content() {
                trigger.target.addTempSkill('qinggang2');
                trigger.target.storage.qinggang2.add(trigger.card);
                trigger.target.markSkill('qinggang2');
                if (!trigger.target.hasSkill('fengyin')) {
                  trigger.target.addTempSkill('fengyin', function (eventx, playerx, name) {
                    if (name == 'qinggang2End') {
                      if (eventx.player != playerx || playerx.hasSkill('qinggang2')) return false;
                      return true;
                    }
                    if (name == 'phaseAfter') {
                      return true;
                    }
                    return false;
                  });
                }
              },
              ai: {
                unequip: true,
                unequip: true,
                skillTagFilter(player, tag, arg) {
                  if (arg && arg.name == 'sha') return true;
                  return false;
                }
              },
              forced: true,
              popup: false,
              equipSkill: true,
              audio: true,
              trigger: {
                player: 'useCardToPlayered'
              },
              filter(event, player) {
                return event.card && event.card.name == 'sha';
              },
              logTarget: 'target'
            },
            gain: {
              trigger: {
                source: 'damageSource'
              },
              forced: true,
              filter(event, player) {
                return event.player.getCards('e', { subtype: 'equip2' }).length;
              },
              content() {
                'step 0';
                if (trigger.player.countGainableCards(player, 'e', (i) => get.subtype(i) == 'equip2')) {
                  var next = player.gainPlayerCard('e', trigger.player, '射骑,摸2张牌或获得防具');
                  next.set('filterButton', function (button) {
                    var type = get.subtype(button.link);
                    return type == 'equip2';
                  });
                } else {
                  event._result = { bool: false };
                }
                'step 1';
                if (!result.bool) {
                  player.draw(2);
                }
              }
            }
          }
        },
        sdyx_guifu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseJieshuBegin'
          },
          filter(event, player) {
            var cards = [];
            var evt2 = event.getParent('phase');
            var history = player.getHistory('useCard', function (evt) {
              if (evt.getParent('phase') == evt2 && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) return true;
              return false;
            });
            if (history.length) return true;
            var hs = player.getCards('h');
            var history2 = player.getHistory('gain', function (evt) {
              if ((evt.getParent('phaseUse') || {}).name == 'phaseUse' && evt.cards && evt.cards.length && evt.cards.some((i) => hs.includes(i))) return true;
              return false;
            });
            if (history2.length) return true;
            return false;
          },
          forced: true,
          content() {
            'step 0';
            var evt2 = trigger.getParent('phase');
            var usecards = [],
              hs = player.getCards('h'),
              give = [];
            player.getHistory('useCard', function (evt) {
              if (evt.getParent('phase') == evt2 && evt.cards && evt.cards.length) usecards.addArray(evt.cards.filterInD('d'));
            });
            player.getHistory('gain', function (evt) {
              if ((evt.getParent('phaseUse') || {}).name == 'phaseUse' && evt.cards && evt.cards.length) {
                give.addArray(evt.cards.filter((i) => hs.includes(i)));
              }
              return false;
            });
            var count = 1;
            if (usecards.length && give.length) count = 2;
            var dialog = [get.prompt2(event.name)];
            if (usecards.length) {
              dialog.push('<div class="text center">使用的牌</div>');
              dialog.push(usecards);
            }
            if (give.length) {
              dialog.push('<div class="text center">你的牌</div>');
              dialog.push(give);
            }
            var goon = game.hasPlayer(function (current) {
              return player != current && get.attitude(player, current) > 1;
            });
            var next = player.
            chooseButton(dialog, count).
            set('ai', function (button) {
              if (!_status.event.goon) return 0;
              return 1;
            }).
            set('goon', goon);
            next.set('filterButton', function (button) {
              for (var i = 0; i < ui.selected.buttons.length; i++) {
                if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
              }
              return true;
            });
            'step 1';
            if (result.links?.length) {
              event.togive = result.links.slice(0);
              var str = '将' + get.translation(result.links) + '交给一名角色';
              player.
              chooseTarget(str, function (card, player, target) {
                return target != player;
              }).
              set('ai', function (target) {
                var att = get.attitude(_status.event.player, target);
                return att;
              });
            } else {
              event.finish();
            }
            'step 2';
            if (result && result.bool && result.targets.length) {
              player.give(event.togive, result.targets[0]);
            }
          }
        },
        //旧哲别 落影逝尘
        sdyx_sheqi_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseDiscardBegin'
          },
          forced: true,
          filter(event, player) {
            if (player.getHistory('skipped').includes('phaseUse')) return true;
            var history = player.getHistory('useCard');
            for (var i = 0; i < history.length; i++) {
              if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) return false;
            }
            return true;
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('sdyx_sheqi_old'), function (card, player, target) {
              return target != player;
            }).
            set('ai', function (target) {
              if (
              target.hasSha() &&
              game.hasPlayer(function (current) {
                return target.canUse({ name: 'sha' }, current, false);
              }) &&
              target.getUseValue({ name: 'sha' }, false) > 0)
              {
                return get.attitude(player, target);
              }
              return 0;
            });
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
            } else {
              event.finish();
            }
            'step 2';
            target.addSkill('sdyx_sheqi_old_wushi');
            target.chooseToUse({
              prompt: '射骑',
              prompt2: '是否使用一张杀？',
              addCount: false,
              complexSelect: true,
              filterTarget: lib.filter.targetEnabled,
              filterCard(card, player, event) {
                if (card.name != 'sha') return false;
                return lib.filter.filterCard.apply(this, arguments);
              }
            });
            'step 3';
            target.removeSkill('sdyx_sheqi_old_wushi');
          },
          group: ['sdyx_sheqi_old_wushi', 'sdyx_sheqi_old_gain'],
          subSkill: {
            wushi: {
              inherit: 'qinggang_skill',
              mod: {
                targetInRange(card, player, target, now) {
                  if (card.name == 'sha') return true;
                }
              },
              ai: {
                unequip: true,
                unequip: true,
                skillTagFilter(player, tag, arg) {
                  if (arg && arg.name == 'sha') return true;
                  return false;
                }
              },
              forced: true,
              popup: false
            },
            gain: {
              trigger: { source: 'damageBegin2' },
              filter(event, player) {
                return event.player.getCards('e', { subtype: 'equip2' }).length;
              },
              content() {
                'step 0';
                var att = get.attitude(player, trigger.player) <= 0;
                var next = player.chooseButton();
                next.set('att', att);
                next.set('createDialog', ['射骑,摸2张牌或获得防具', trigger.player.getCards('e', { subtype: 'equip2' })]);
                next.set('ai', function (button) {
                  if (_status.event.att) return get.buttonValue(button);
                  return 0;
                });
                'step 1';
                if (result.bool) {
                  player.gain(trigger.player, trigger.player.getCards('e', { subtype: 'equip2' }), 'bySelf', 'give');
                } else {
                  player.draw(2);
                }
              }
            }
          }
        },
        sdyx_guifu_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseJieshuBegin'
          },
          filter(event, player) {
            var cards = [];
            game.countPlayer2(function (current) {
              current.getHistory('useCard', function (evt) {
                if (evt.getParent('phaseUse').player == player && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) cards.addArray(evt.cards.filterInD('d'));
              });
            });
            return cards.length;
          },
          forced: true,
          content() {
            'step 0';
            var cards = [];
            game.countPlayer2(function (current) {
              current.getHistory('useCard', function (evt) {
                if (evt.getParent('phaseUse').player == player && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) cards.addArray(evt.cards.filterInD('d'));
              });
            });
            event.cards = cards;
            'step 1';
            if (event.cards.length > 1) {
              var goon = false;
              if (Array.isArray(event.cards)) for (var i of event.cards) {
                if (i.name == 'du') {
                  goon = true;
                  break;
                }
              }
              if (!goon) {
                goon = game.hasPlayer(function (current) {
                  return player != current && get.attitude(player, current) > 1;
                });
              }
              player.
              chooseCardButton(event.cards, 1, get.prompt2(event.name)).
              set('ai', function (button) {
                if (!_status.event.goon || ui.selected.buttons.length) return 0;
                if (button.link.name == 'du') return 2;
                return 1;
              }).
              set('goon', goon);
            } else if (event.cards.length == 1) {
              event._result = { links: event.cards.slice(0), bool: true };
              event.fored = true;
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              event.fored = !event.fored;
              event.togive = result.links.slice(0);
              var str = '将' + get.translation(result.links) + '交给一名角色';
              str = (event.fored ? '' : get.prompt(event.name) + '<br>') + str;
              player.
              chooseTarget(str, function (card, player, target) {
                return target != player;
              }).
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
              set('enemy', get.value(event.togive[0], player, 'raw') < 0).
              set('forced', event.fored);
            }
            'step 3';
            if (result && result.bool && result.targets.length) {
              result.targets[0].gain(event.togive, 'draw');
              //player.line(result.targets[0],'green');
              game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
            }
          },
          ai: {
            threaten: 1.3,
            expose: 0.2
          }
        }
      },
      translate: {
        //射雕英雄标记
        sdyx_xiemi: '泄密',
        sdyx_xiemi_info: '每回合限一次.当你的牌因弃置而进入弃牌堆时,你可以将其中的锦囊牌分配给其他角色.',
        sdyx_chisha: '痴傻',
        sdyx_chisha_info: '锁定技.当你成为普通锦囊牌的唯一目标时,使用者需选择将此牌改为【见招拆招】或【无极而生】.你无法使用锦囊牌,你的锦囊牌不计入手牌上限.',
        sdyx_wuyou_old: '无忧',
        sdyx_wuyou_old_info: '出牌阶段限一次.你可以重铸手牌中所有锦囊牌,并令其他角色弃置所有与重铸牌同牌名的牌.若没有角色以此法弃置牌,你跳过本回合弃牌阶段.',
        sdyx_shagu: '傻姑',
        sdyx_wuyou: '无忧',
        sdyx_wuyou_info: '出牌阶段限各限一次,你可以视为无距离、次数限制地使用一张场上角色本轮使用的首张普通锦囊牌和基本牌.',
        sdyx_qianchen: '前尘',
        sdyx_qianchen_info: '<b>转换技.</b>出牌阶段开始时,你切换场景,直到下回合开始.阳:铁匠铺;阴:铁枪庙,在此场景下,当有角色令另一名目标进入濒死状态时,你可令来源受到1点无来源的蛊毒伤害,若目标死亡,你可再令来源翻面(若死亡的是你,仍可以发动).',
        sdyx_xie_ouyangfeng: '邪欧阳锋',
        sdyx_niming: '逆命',
        sdyx_niming_info: '<b>锁定技.</b>你不能进入濒死状态;回合结束时,你回复一点体力;你回复体力后,若此时你处于满体力值状态且本次是你本局第三次进入满体力值状态,你死亡.',
        sdyx_changong: '蟾功',
        sdyx_changong_info: '<b>蓄力技.锁定技.</b>你拥有5点初始蓄力值;你每受到一点伤害后,获得1点蓄力值;当你失去所有的蓄力值后,你回复一点体力.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出牌阶段限一次,你可消耗1点蓄力值将手牌补至体力上限;弃牌阶段开始时,你可消耗1点蓄力值跳过之.',
        sdyx_tougu: '透骨',
        sdyx_tougu_info: '出牌阶段,你可以令一名角色在本局中受到的某种属性伤害永久+1(不能重复选择角色和属性).你造成普通伤害时,你可以移除所有蓄力值,令此伤害改为目标的弱点属性.',
        tlbb_wcy_tianshu1: '天枢A',
        tlbb_wcy_tianshu1_info: '一名角色的摸牌阶段结束时,你可以移除此标记,令其有60%的几率额外执行一个摸牌阶段.',
        tlbb_wcy_tianxuan3: '天璇3',
        tlbb_wcy_tianxuan3_info: '其他角色受到伤害后,你可以移除此标记,令其永久免疫一种属性伤害.',
        tlbb_wcy_tianji5: '天玑5',
        tlbb_wcy_tianji5_info: '一名角色的判定阶段开始时,你可以移除此标记,令其跳过此阶段.',
        tlbb_wcy_tianquan7: '天权7',
        tlbb_wcy_tianquan7_info: '出牌阶段,你可以移除此标记,令一名角色使用一张【天罡北斗阵】.',
        tlbb_wcy_yuheng9: '玉衡9',
        tlbb_wcy_yuheng9_info: '一名角色的弃牌阶段开始,你可以移除此标记,令其跳过此阶段.',
        tlbb_wcy_kaiyang11: '开阳J',
        tlbb_wcy_kaiyang11_info: '一名角色在回合内使用【杀】后,你可以移除此标记,令此杀不计入次数.',
        tlbb_wcy_yaoguang13: '瑶光K',
        tlbb_wcy_yaoguang13_info: '一名角色的结束阶段,你可以移除此标记,令其获得三张奇数点数的牌.',
        sdxl_jue_wangchongyang: '绝王重阳',
        sdxl_candou: '参斗',
        sdxl_candou_info: '你出场时,你将点数A、3、5、7、9、J、K随机排列为一个数列,称为<北斗>.当你使用的或以你为目标的与<北斗>点数相同的牌结算完后,若<北斗>中的该点数未点亮,点亮之.你每点亮一颗<北斗>, 获得一枚对应的<七星>标记(你每移除个<北斗>对应的<七星>标记,熄灭该<北斗>).',
        sdxl_xingluo: '星罗',
        sdxl_xingluo_info: '每当你受到或造成伤害后,你可以对换两颗<北斗>的位置.摸牌阶段摸牌时,你可以观看牌堆顶前2X张牌,从中选择要摸的牌(X为北斗归位的数量).',
        sdxl_ziwei: '紫微',
        sdxl_ziwei_info: '<b>锁定技,</b>当<北斗>全部点亮时,你获得七张7点的牌.',
        sdxl_xingluo2: '星罗',
        sdxl_xingluo2_info: '每当你受到或造成伤害后,你可以对换两颗<北斗>的位置.摸牌阶段摸牌时,你可以观看牌堆顶前2X张牌,从中选择要摸的牌(X为北斗归位的数量).',
        sdxl_tiangang2: '天罡',
        sdxl_tiangang2_info: '<b>觉醒技.</b>当全部北斗归位时,你失去〖星罗〗,将摸牌阶段摸牌基数和体力上限均改为7.',
        sdxl_tiangang: '天罡',
        sdxl_tiangang_info: '<b>觉醒技.</b>当全部北斗归位时,你失去〖星罗〗,将摸牌阶段摸牌基数和体力上限均改为7.',
        sdyx_xie_meichaofeng: '梅超风',
        sdyx_xie_meiruohua: '梅若华',
        sdyx_yaoyao: '夭夭',
        sdyx_yaoyao_info: '<b>锁定技.</b>当有角色摸牌后,若此时牌堆顶的第一张牌是♣️️牌,你获得之.',
        sdyx_mozhua: '魔爪',
        sdyx_mozhua_info: '<b>锁定技.</b>你使用【杀】成的伤害值基数+X(X为已死亡的角色数量的一半,向下取整).',
        sdyx_qingdou_info: '出牌阶段限一次,你可以发动〖碧潮〗,若其他角色未因此技能失去过♣️️牌,则你可以摸一张牌,再发动此技能.',
        sdyx_qingdou: '情窦',
        sdyx_xinghong: '猩红',
        sdyx_xinghong_info: '<b>觉醒技.</b>当其他角色累计因〖情窦〗失去第9张牌后,你失去〖情窦〗,减一点体力上限,获得【九阴真经】的技能和〖魔爪〗,改名梅超风并换肤.',
        sdyx_jueshi: '绝世高手',
        sdyx_menggu: '蒙古',
        sdyx_jinguo: '金国',
        sdyx_taohuadao: '桃花岛',
        sdyx_quanzhenjiao: '全真教',
        sdyx_baituoshan: '白驼山',
        sdyx_gaibang: '丐帮',
        sdyx_dali: '大理',
        sdyx_tiezhangbang: '铁掌帮',
        sdyx_xiake: '江湖侠客',
        sdyx_jiangnanqixia: '江南七侠',
        sdyx_hanxiaoying: '韩小莹',
        sdyx_yuenv: '越女',
        sdyx_yuenv_info: '你使用武器牌后,你可以视为使用此牌描述中包含的各种属性的【杀】各一张(不计入回合内次数).',
        sdyx_qiaojian: '巧剑',
        sdyx_qiaojian_info: '你使用【杀】指定目标时,若此【杀】的属性与你于本局游戏中使用的上一张【杀】的属性不同,你可以摸一张牌并弃置目标一张牌.',
        sdyx_wulve: '武略',
        sdyx_wulve_info: '每回合限一次,一名角色使用牌指定至少两个目标时,你可以令其选择:为此牌增加一个合法目标并回复1点体力(若不能增加目标则不能选此项);为此牌减少一个目标并令你摸1张牌.',
        sdyx_liufang_info: '<b>锁定技,</b>当其他角色的【武穆遗书】进入弃牌堆前,你获得之.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>使命技.</b>你获得【武穆遗书】后,直到你下回合开始,若你装备区或手牌中仍有【武穆遗书】,视为使命成功,否则使命失败.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>成功:</b>你发动【武穆遗书】技能后不需弃置此牌,且当你的此牌因弃置进入弃牌堆前,你可以将之交给一名其他角色.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>失败:</b>你获得〖铁掌〗.',
        sdyx_liufang: '流芳',
        sdyx_liufang2: '流芳',
        sdyx_liufang3: '流芳',
        sdyx_shangguanjiannan: '上官剑南',
        sdyx_wanyankang: '完颜康',
        sdyx_panguo: '叛国',
        sdyx_panguo_info: '当你受到伤害后,你可以改变你的势力(只能选择场上存在的势力,且不能选择你曾经所属过的势力),摸X张牌(X为你所在势力存活的角色数).',
        sdyx_tongdi: '通敌',
        sdyx_tongdi_info: '<b>觉醒技.</b>回合开始时,若你曾经所属势力数量不小于三个,或场上存活的势力数为一,你减一点上限,回复一点体力,获得〖南伐〗、〖权妄〗.',
        sdyx_quanwang: '权妄',
        sdyx_quanwang_info: '你【杀】死一名角色后,若其有所属帮派,你可以获得其一个你未拥有的帮派技(若其有多个帮派技则选择其中一个).',
        sdyx_wangchongyang: lib.config.extension_金庸群侠传_jiexiantupo ? '界王重阳' : '王重阳',
        sdyx_lunjian: '论剑',
        sdyx_lunjian_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '首轮或第X轮次的出牌阶段开始时(X为4的倍数),你令所有角色依次合法使用一张杀或带伤害标签的普通锦囊牌,若该角色为你,此杀不计入出牌次数,未因此技能造成伤害的角色失去一点体力.因此技能唯一击杀过角色或造成伤害唯一最多的角色摸三张牌并获得一张九阴真经.';
          return '首轮或第X轮次的出牌阶段开始时(X为4的倍数),你令所有角色依次合法使用一张杀或带伤害标签的普通锦囊牌,若该角色为你,此杀不计入出牌次数,未因此技能造成伤害的角色失去一点体力.因此技能唯一击杀过角色或造成伤害唯一最多的角色摸三张牌并获得一张九阴真经.';
        }(),
        sdyx_lunjian_old_info: '首轮或第X轮次的出牌阶段开始时(X为4的倍数),你可以令所有角色依次获得一张杀或带有伤害标签的普通锦囊牌并合法使用之,未因此技能造成伤害的角色失去一点体力.因此技能唯一击杀过角色或造成伤害唯一最多的角色摸三张牌并获得一张九阴真经.',
        sdyx_xuantong: '玄通',
        sdyx_xuantong_info: '出牌阶段,你可以弃置一张【杀】,获得一张带有伤害标签的普通锦囊牌.',
        sdyx_quanjinfa: '全金发',
        sdyx_hengtong: '亨通',
        sdyx_hengtong_info: '出牌阶段限一次,你可以展示一张手牌,从牌堆顶前X张牌中随机获得任意张点数之和等于你展示牌点数的牌,不满足则不获得牌(X为你的体力值的10倍).',
        sdyx_jingsuan: '精算',
        sdyx_jingsuan_info: '你受到伤害后,你可交给来源一张红色手牌,其需返还你一张手牌(无牌则不返还),若满足以下任一项,你选择:你回复一点体力;来源弃置一张牌.1.其返还的牌点数比你交给其的牌小;2.其返还给你的牌为你交给其的牌;3.其未能返还你牌.',
        sdyx_liping: '李萍',
        sdyx_piaoping: '漂萍',
        sdyx_piaoping_info: '每当你受到伤害后,你可以改变你的势力,你令所有与你势力相同的角色各摸一张牌.',
        sdyx_dayi: '大义',
        sdyx_dayi2: '大义',
        sdyx_dayi_info: '出牌阶段限一次,你可以失去一点体力,选择一项:你令一名角色解除所有负面状态;或你令一名其他角色下个回合内使用的普通锦囊牌无效.',
        sdyx_zhucong: '朱聪',
        sdyx_toutian: '偷天',
        sdyx_toutian_info: '<b>锁定技,</b>你的【见招拆招】视为【妙手空空】;你使用【妙手空空】无距离限制,且你使用此牌指定目标时,可以选择一项:你为此牌额外指定一名合法目标;你额外获得目标区域内一张牌.',
        sdyx_huanri: '换日',
        sdyx_huanri_info: '其他角色使用普通锦囊牌指定唯一目标时,你可以用一张普通锦囊牌来替换此牌(取消该角色使用的牌,改为其对原目标使用你替换的牌).',
        sdyx_toutian2: 'undefined',
        sdyx_toutian2_info: 'undefined',
        sdyx_huazheng: '华筝',
        sdyx_xuhun: '许婚',
        sdyx_xuhun_info: '<b>限定技.</b>出牌阶段,你标记一名男性角色为<驸马>,你令<驸马>使用【射雕弯弓】(可替换原装备),回复1点体力,其摸3张牌并执行一个出牌阶段.你与<驸马>的手牌上限+1(你与驸马其中一名角色死亡后,另一名角色失去此效果).',
        sdyx_changnian: '长念',
        sdyx_changnian_info: '驸马/你的出牌阶段结束时,其/你可以声明一种花色,令你/其随机获得一张此花色的牌.',
        sdyx_duanyi: '断义',
        sdyx_duanyi_info: '<b>锁定技.</b>当<驸马>失去<射雕弯弓>后,你回复1点体力,摸3张牌,失去〖长念〗,每当你或其成为对方使用牌的目标时,若此牌目标数大于1,你或其令对方摸2张牌并取消之.',
        sdxl_guopolu: '郭破虏',
        sdxl_zhulu: '逐虏',
        sdxl_zhulu_info: '出牌阶段限一次,你可以用一张手牌与至多三名角色同时拼点,赢的角色视为对你使用一张【杀】,你于此阶段使用的下一张基本牌或普通锦囊牌可指定未赢的角色为目标.',
        sdxl_zhulu2: '逐虏2',
        sdxl_zhulu2_info: '',
        sdxl_zhonggu: '忠骨',
        sdxl_zhonggu_info: '每当你受到一点伤害后,你可以令一名角色随机使用一张装备牌并从牌堆获得普通锦囊牌和基本牌各一张.',
        sdyx_sphuangyaoshi: 'sp黄药师',
        sdyx_luoying: '落英',
        sdyx_luoying_info: '摸牌阶段开始,你可以放弃摸牌,依次从牌堆顶展示一张牌,直到出现♣️️牌为止,你获得这些牌.',
        sdyx_bichao: '碧潮',
        sdyx_bichao_info: '准备阶段,你可以令手牌数的奇偶性与你不同的所有其他角色所有依次展示一张牌并置于牌堆顶.',
        sdyx_spyinggu: 'sp瑛姑',
        sdyx_shushu: '数术',
        sdyx_shushu_info: '当你受到伤害后,你可以声明奇数或偶数,亮出牌堆顶的三张牌,若这三张牌的点数之和的奇偶与你声明的一致,你获得这三张牌.重复此流程,直到亮出的牌点数之和的奇偶与你声明的不一致.',
        sdyx_suanchou: '算筹',
        sdyx_suanchou_info: '回合开始时,你可以弃置一张手牌,将判定阶段移置出牌阶段后,或将摸牌阶段依置弃牌阶段后.',
        sdyx_sp_huangrong: 'sp黄蓉',
        sdyx_baojia: '宝甲',
        sdyx_baojia_info: '当你成为杀指定目标时,你可以进行一次判定.直到此杀结算完毕,若结果为黑色,则视为你装备栏桃花阵,若为红色,则随机对其合法视为使用见招拆招、妙手空空、磷磷火弹、杀其中的一张牌.',
        sdyx_wuxing: '五行',
        sdyx_wuxing_info: '你使用一张牌后,你按此牌花色获得如下标记,♥️️--金;♣️️--木;♠️️--土;♦️️--火;🃏--水.<p><b>金:</b>一名角色的判定牌生效前,你可以移除一枚金标记,令此牌视为♥️️牌.<p><b>木:</b>出牌阶段,你可以移除一枚木标记并将一张♣️️牌当玄铁索链使用.<p><b>火:</b>一名角色受到普通伤害时,你可以移除一枚火标记并弃置一张♦️️牌,令此伤害改为火焰伤害.<p><b>土:</b>出牌阶段限一次,你可以移除一枚土标记并弃置一张♠️️牌,移动场上一张♠️️牌.<p><b>水:</b>一名其他角色回合开始时,你可以移除三枚水标记令其跳过出牌阶段.',
        sdyx_wuxing_heart2: '五行•金',
        sdyx_wuxing_heart2_info: '一名角色的判定牌生效前,你可以移除一枚金标记,令此牌视为♥️️牌.',
        sdyx_wuxing_club2: '五行•木',
        sdyx_wuxing_club2_info: '出牌阶段,你可以移除一枚木标记并将一张♣️️牌当玄铁索链使用.',
        sdyx_wuxing_diamond2: '五行•火',
        sdyx_wuxing_diamond2_info: '一名角色受到普通伤害时,你可以移除一枚火标记并弃置一张♦️️牌,令此伤害改为火焰伤害.',
        sdyx_wuxing_spade2: '五行•土',
        sdyx_wuxing_spade2_info: '出牌阶段限一次,你可以移除一枚土标记并弃置一张♠️️牌,移动场上一张♠️️牌.',
        sdyx_wuxing_none2: '五行•水',
        sdyx_wuxing_none2_info: '一名其他角色回合开始时,你可以移除三枚水标记令其跳过出牌阶段.',
        sdyx_jue_guojing: '绝郭靖',
        sdyx_zhenwei: '镇卫',
        sdyx_zhenwei_info: '当一名角色使用【杀】、【鞑虏入侵】、【漫天花雨】时,你可以弃置一张牌,选择任意名目标,直到此牌结算结束,这些角色视为装备了由你声明的一种防具牌.',
        //"sdyx_zhenwei_info":"当一名角色使用一张【杀】、【鞑虏入侵】、【漫天花雨】时,弃置一张牌,选择任意名目标直到此牌结算结束,你选择的角色视为随机装备一张防具牌.",
        sdyx_xiagu: '侠骨',
        sdyx_xiagu_info: '其他角色使用牌后指定至少两个目标时,你可以失去一点体力并获得任意名目标各一张牌.若如此做,你代替这些角色成为此牌的目标(若你已是目标则额外结算,每种牌名一局游戏限发动一次).',
        sdyx_qiuchuji: lib.config.extension_金庸群侠传_jiexiantupo ? '界丘处机' : '丘处机',
        sdyx_shijian: '使谏',
        sdyx_shijian_info: '出牌阶段结束时,你可以弃置一张手牌,令一名其他角色下回合计算其他角色的距离+1.',
        sdyx_miyue_new: '密约',
        sdyx_miyue_new_info: '每轮游戏开始时,你可以选择两名体力 值相等或手牌数相等的角色,令这两名角色仅于本轮各获得 一枚<密约>.每轮游戏结束时,拥有此标记的角色中于本 轮造成伤害点数更少的角色失去 1 点体力并弃置 1 张牌;若 两名角色造成的伤害数相等,你摸 3 张牌.(此技能不因密 约角色死亡而取消结算).',
        sdyx_miyue: '密约',
        sdyx_miyue_info: '每轮游戏开始时,你可以选择两名手牌相等或手牌相等的角色,各获得一枚<密约>标记,直到本轮结束时,若这两名角色造成的伤害相等,你摸三张牌,否则造成伤害少的一名角色失去一点体力.',
        sdyx_duanzhixin: lib.config.extension_金庸群侠传_jiexiantupo ? '界段智兴' : '段智兴',
        sdyx_yiyang: '一阳',
        sdyx_yiyang_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '出牌阶段限一次,你可以弃置所有手牌 (至少一张)并选择一名体力值大于 1 的其他角色,你弃置其 1 张牌.若你以此法弃置的牌不少于 2 张,你对其造 成一点伤害;若不少于 3 张,其翻面.';
          return '出牌阶段限一次,你弃置所有手牌并选择一名体力值大于一点其他角色,若你依此法弃置的手牌数为1,你弃置其一张牌.2,你对其造成一点伤害.大于等于3,其翻面.';
        }(),
        sdyx_chanxin: '禅心',
        sdyx_chanxin_info: '你受到伤害后,若你没有手牌,你可以视为使用一张你未依此法使用的普通锦囊牌.',
        sdyx_duhua: '度化',
        sdyx_duhua_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return "<b>限定技.</b>出牌阶段,你可以令一名角色将体力回复至体力上限.你失去一阳.并删除'禅心'描述中的‘若你没有手牌’";
          return '<b>限定技.</b>出牌阶段,你可以令一名角色将体力回复至体力上限.你失去所有技能.';
        }(),
        sdyx_wanyanhonglie: '完颜洪烈',
        sdyx_lixian: '礼贤',
        sdyx_lixian_info: '每轮开始时,你可以选择一名角色,其本轮造成伤害时,其可以摸一张牌(限三次).',
        sdyx_zhulu: '逐鹿',
        sdyx_zhulu_info: '出牌阶段,每当你使用牌时,你可以亮出牌堆顶的一张牌,若此牌点数大于你使用的牌的点数,你获得此牌,否则弃置之.',
        sdyx_baye: '霸业',
        sdyx_baye_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b>其他列国势力角色于其出牌阶段限一次,可以重置除该技能之外其它每回合限制次数的技能,或者重置一项已经发动过的限定技(重置限定技每局游戏限一次).';
          return '<b>盟主技.</b>其他群雄势力角色于其出牌阶段限一次,可以重置除该技能之外其它每回合限制次数的技能,或者重置一项已经发动过的限定技(重置限定技每局游戏限一次).';
        }(),
        //"sdyx_baye_info":"<b>盟主技.</b>其他XXX势力角色于其出牌阶段限一次,可以重置除该技能之外其它每回合限制次数的技能,或者重置一项已经发动过的限定技(重置限定技每局游戏限一次).",
        sdyx_baye1: '霸业',
        sdyx_baye1_info: '',
        sdyx_munianci: '界穆念慈',
        sdyx_zhaoqing: '招亲',
        sdyx_zhaoqing_info: '出牌阶段限一次,你可以令两名男性角色拼点;当一名男性角色拼点赢后,或因【比武】造成伤害后,你可以与其各摸1张牌.',
        sdyx_qianquan_old: '缱绻',
        sdyx_qianquan_old_info: '每当你受到一点伤害后,你可以令一名角色获得一枚<玉鞋>标记.一名角色拼点牌亮出时,若其有<玉鞋>,则其可以移除一枚<玉鞋>令此牌点数视为13并收回之.',
        sdyx_qianquan: '缱绻',
        sdyx_qianquan_info: '每当你受到一点伤害后,你可以令弃置任意张牌,令一名其他角色摸双倍数量的牌.',
        sdyx_tuolei: '拖雷',
        sdyx_yingong: '引弓',
        sdyx_yingong_info: '你使用【杀】指定目标后,若其没有<射>,你令其获得之.你使用【杀】指定目标时,你可以令其余有<射>的角色也成为此牌目标.',
        sdyx_gepao: '割袍',
        sdyx_gepao_info: '游戏开始时,你选择一名其他角色,你与其各失去一点体力并摸两张牌.<b>锁定技.</b>当你与割袍角色使用牌指定包含对方在内的至少两名角色时,你与其各摸1张牌,此牌取消对方为目标.',
        sdyx_tiemuzhen: '铁木真',
        sdyx_rongma: '戎马',
        sdyx_rongma_info: '出牌阶段,你可以将任意两张相同花色的手牌当【漫天花雨】使用.',
        sdyx_tuojiang: '拓疆',
        sdyx_tuojiang_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>锁定技,</b>你对目标造成伤害后,若目标不为列国势力角色,其改为列国势力角色.<b>锁定技,</b>你的手牌加2X(X为其他列国势力角色的数量).';
          return '<b>锁定技,</b>你对目标造成伤害后,若目标不为群雄势力角色,其改为群雄势力角色.<b>锁定技,</b>你的手牌加2X(X为其他群雄势力角色的数量).';
        }(),
        //"sdyx_tuojiang_info":"<b>锁定技,</b>你对目标造成伤害后,若目标不为XXX势力角色,其改为XXX势力角色.<b>锁定技,</b>你的手牌加2X(X为其他XXX势力角色的数量).<br><br><li>仅身份局生效.",
        sdyx_tianjiao: '天骄',
        sdyx_tianjiao_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b>其他列国势力角色造成伤害后,其可以令你摸一张牌.';
          return '<b>盟主技.</b>其他群雄势力角色造成伤害后,其可以令你摸一张牌.';
        }(),
        //"sdyx_tianjiao_info":"<b>盟主技.</b>其他XXX势力角色造成伤害后,其可以令你摸一张牌.",
        sdyx_sp_kezhene: 'SP柯镇恶',
        sdyx_duling_new: '毒菱',
        sdyx_duling_new_info: '你可以将点数为A,4,7,K的牌当无视距离的毒【杀】使用或打出.',
        sdyx_mangxiao_new: '盲侠',
        sdyx_mangxiao_new_info: '当你于回合外受到伤害时,你可以对伤害来源使用一张【杀】.若此【杀】为毒属性且造成伤害,你回复一点体力.',
        sdyxbiansheng_new: '辩声',
        sdyxbiansheng_new_info: '当你成为手牌数不多于你的角色使用的伤害标签牌的目标时,你可以与该角色进行<对策>.若你赢,你获得此牌;若你没赢,你无法响应此牌.',
        sdyx_kezhene: '柯镇恶',
        sdyx_xiadan: '侠胆',
        sdyx_xiadan_info: '你受到伤害后,你可以令曾经受到过来源角色伤害的任意名角色各摸一张牌.若来源只对你造成过伤害,则你摸再摸2张牌.',
        sdyx_xiangmo: '降魔',
        sdyx_xiangmo_info: '每轮限一次,一名角色对另一名角色造成伤害后,你可以选择一项:令来源弃置X张牌,或令目标摸X张牌(X为其与目标的手牌数之差且大于0).',
        sdyx_duantiande: '段天德',
        sdyx_ninglu: '佞禄',
        sdyx_ninglu_info: '每回合限一次,你对目标造成伤害后,你可以获得其攻击范围内的至多两名其他角色,获得这些角色区域里的一张牌,若如此做,其下回合不能使用牌指定这些角色为目标.',
        sdyx_huoyan: '惑言',
        sdyx_huoyan_info: '每当你需要使用一张【闪】时,若你没有装备防具牌,你可以令一名装备了防具牌的角色选择一项:令你视为装备了其防具牌,直到此牌结算完毕;或其弃置其防具牌.',
        sdyx_meichaofeng: '界梅超风',
        sdyx_lizhao: '厉爪',
        sdyx_lizhao_info: '当你使用【杀】造成的伤害后,若目标没有<白骨爪>标记,你可以令其永久获得之.<b>锁定技,</b>拥有<白骨爪>的角色,摸牌阶段的摸牌数和弃牌阶段的手牌上限均-1.',
        sdyx_shien: '师恩',
        sdyx_shien_info: '当其他角色受到来源不为你的伤害时,你可与其各摸一张牌,若如此做,你代替其承受此次伤害(若该角色为桃花岛门人,改为各摸两张牌).',
        sdyx_guidao: '归岛',
        sdyx_guidao_info: '<b>限定技.</b>准备阶段开始时,你可以选择一名你对其发动过〖师恩〗且有帮派属性的其他角色,你获得其一项帮派技.',
        sdyx_baigu: '白骨',
        sdyx_baigu_info: '你的下个回合的摸牌阶段摸牌数-1',
        sdyx_baigu2: '白骨',
        sdyx_baigu2_info: '你的下个回合的弃牌阶段手牌上限-1',
        sdyx_baigu3: '白骨',
        sdyx_lizhao_old: '厉爪',
        sdyx_lizhao_old_info: '<b>九阴白骨爪.</b>当你使用【杀】造成的伤害后,若目标没有<白骨爪>标记,你可以令其永久获得之.<b>转换技,</b>拥有<白骨爪>的角色:阴:摸牌阶段摸牌数-1;阳:手牌上限-1.',
        sdyx_shien_old2: '师恩',
        sdyx_shien_old: '师恩',
        sdyx_shien_old_info: '当其他角色受到来源不为你的伤害时,你可与其各摸一张牌,若如此做,你代替其承受此次伤害.',
        sdyx_guidao_old: '归岛',
        sdyx_guidao_old_info: '<b>限定技.</b>准备阶段开始时,若你发动〖师恩〗的目标角色不少于1个,你可以选择失去技能〖师恩〗并永久拥有技能〖归岛〗(准备阶段开始时,你可选择一名你对其发动过〖师恩〗的角色,获得其一项除盟主技、觉醒技、限定技以外的技能,直到回合结束).',
        sdyx_guidao_old_info_alter: '<b>限定技.</b>准备阶段开始时,你可以选择一名你对其发动过〖师恩〗的角色,获得其一项技能,直到回合结束.',
        sdyx_yangkang: '杨康',
        sdyx_weifu: '威福',
        sdyx_weifu_info: '转换技.阴:当有角色拼点赢后、因【比武】造成伤害后,你可以令其摸2张牌;阳:当有角色拼点未赢后、受到【比武】造成的伤害后,你可以令其弃置2张牌.',
        //"sdyx_weifu_info":"<b>转换技.</b>①当有角色拼点赢后,你可以令其摸两张牌.②当有角色拼点没赢后,你可以令其弃置两张牌.",
        sdyx_lisuo: '利锁',
        sdyx_lisuo_info: '当你受到伤害后,你可以与一名手牌数大于你的角色拼点.若你赢,你将手牌数补至其手牌数多1张.',
        sdyx_yinggu: '瑛姑',
        sdyx_xingshang: '杏殇',
        sdyx_xingshang_info: '每当其他角色对你距离1以内的其他角色造成1点伤害后,你获得一枚<杏殇>标记.<b>锁定技.</b>若你有<杏殇>标记,你计算其他角色的距离-1.',
        sdyx_tigu: '啼孤',
        sdyx_tigu_info: '<b>觉醒技.</b>准备阶段,若你的<杏殇>标记不小于3,你减1点体力上限,并获得技能〖血仇〗.',
        sdyx_xuechou: '血仇',
        sdyx_xuechou_info: '出牌阶段,你可以移除一枚<杏殇>标记,并将一张手牌当【比武】使用.',
        sdyx_qiuqianren: lib.config.extension_金庸群侠传_jiexiantupo ? '界裘千仞' : '裘千仞',
        sdyx_tiezhang: '铁掌',
        sdyx_tiezhang_info: '你使用【杀】造成伤害后,你可以弃置场上一张与此【杀】花色相同装备牌或延时锦囊牌.',
        sdyx_tiezhang2: '铁掌',
        sdyx_tiezhang3: '铁掌',
        sdyx_tiezhang2_info: '锁定技,你的【杀】无视目标的防具.你使用【杀】造成伤害后,你可以弃置场上至多两张与此【杀】颜色相同装备牌或延时锦囊牌;若此【杀】🃏,则你依此法弃置场上的牌不受颜色限制.',
        sdyx_huolian: '祸连',
        sdyx_huolian_info: '出牌阶段限一次,你可以令一名其他角色选择是否交给其攻击范围由你选择的另一名其他角色一张♥️️牌.若其选择否,视为你对其使用了一张【杀】.',
        sdyx_hongqigong: '界洪七公',
        sdyx_xiangyan_old: '飨宴',
        sdyx_xiangyan_old_info: '你受到一点伤害后,你可以亮出牌堆顶5张牌,你获得不同类型的牌各一张,将其余牌置入弃牌堆.',
        sdyx_xiangyan: '飨宴',
        sdyx_xiangyan_info: '你受到一点伤害后,你可以亮出牌堆顶5张牌,你获得不同类型的牌各一张,将其余牌交给一名其他角色或置入弃牌堆.',
        sdyx_shouming: '授命',
        sdyx_shouming_info: '每轮限一次,其他角色出牌阶段开始时,若你已受伤,你可以交给其一张装备牌,若如此做,其本回合内获得〖降龙〗和〖无狗〗.',
        sdyx_shouming_old: '授命',
        sdyx_shouming_old_info: '每轮限一次,其他角色出牌阶段开始时,若你已受伤,你可以交给其一张装备牌,若如此做,其本回合内获得〖降龙〗.',
        sdyx_ouyangke: '欧阳克',
        sdyx_mushe: '牧蛇',
        sdyx_mushe_info: '出牌阶段限一次,你可以将一张♠️️手牌交给一名其他角色.其下个回合结束时,若其未于此回合内造成过蛊毒伤害,其需交给你两张♠️️牌或受到你的一点蛊毒伤害.',
        sdyx_jixia: '积黠',
        sdyx_jixia_info: '其他角色出牌阶段开始时,你可以令其选择:交给你一张♠️️牌;或其不能于此回合内使用♠️️牌.若你以此法获得了牌,此技能失效直到下一轮开始.',
        sdyx_beimin: '悲悯',
        sdyx_beimin_info: '一名角色受到大于一点的伤害后或进入濒死状态时,你可令其重铸其装备区里所有红色装备牌,其回复一点体力.',
        sdyx_zhuisi: '追思',
        sdyx_zhuisi_info: '<b>限定技.</b>出牌阶段,你记录一名角色装备区的状态.其回合开始时,其将装备区还原至你记录的状态.其死亡后你重置此技能.',
        sdyx_zhuisi2: '追思',
        sdyx_zhuisi2_info: '<b>限定技.</b>出牌阶段,你记录一名角色装备区的状态.其回合开始时,其将装备区还原至你记录的状态.其死亡后你重置此技能.',
        sdyx_baoxiruo: '包惜弱',
        sdyx_zhoubotong: lib.config.extension_金庸群侠传_jiexiantupo ? '界周伯通' : '周伯通',
        sdyx_mingwan: '冥顽',
        sdyx_mingwan_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '你的回合结束时、每当你受到一点伤害后,你可以选择一名角色,将其下个回合判定阶段移至出牌阶段后,或将其下个回合弃牌阶段移至摸牌阶段后(已有<判>或<弃>标记的角色不能被选择).';
          return '每当你受到一点伤害后,你可以选择一名角色,将其下个回合判定阶段移至出牌阶段后,或将其下个回合弃牌阶段移至摸牌阶段后(已有<判>或<弃>标记的角色不能被选择).';
        }(),
        sdyx_shouxun: '守训',
        sdyx_shouxun_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '<b>锁定技.</b>你不能失去装备区里的武器牌和秘籍牌;出牌阶段限一次,若你装备了秘籍牌,你可以获得一名角色的一张手牌,令其获得你秘籍牌上的技能直到其下个回合结束.';
          return '<b>锁定技.</b>你不能失去装备区里的武器牌和秘籍牌.';
        }(),
        sdyx_huangrong: '黄蓉',
        sdyx_qiaoyan: '巧言',
        sdyx_qiaoyan_info: '每回合限一次,当一名角色拼点时,你可令另一名未参与此次拼点的角色代替其打出拼点牌.',
        sdyx_qingshi: '请师',
        sdyx_qingshi2: '师',
        sdyx_qingshi_info: '回合开始时,你可与一名其他角色拼点,若你赢,你于此回合内获得其一项除觉醒技、盟主技和限定技以外的技能;若你没赢,本局游戏你不能再对该角色发动〖请师〗且你受到其一点伤害.',
        sdyx_qimen: '奇门',
        sdyx_qimen2: '奇门',
        sdyx_qimen_info: '当你受到1点伤害后,你可以令一名角色于下个回合额外执行一个摸牌阶段或跳过判定阶段.',
        sdyx_fengheng: '冯蘅',
        sdyx_moshu1: '默书',
        sdyx_moshu1_info: '',
        sdyx_moshu: '默书',
        sdyx_moshu_info: '每回合限一次,其他角色使用普通锦囊牌后,你可以获得一枚<拓印>标记,并将此牌拓印于此标记上.出牌阶段,你可以移除一枚<拓印>标记,将一张手牌当此拓印于标记上的普通锦囊牌使用.',
        sdyx_cuixin: '瘁心',
        sdyx_cuixin_info: '<b>锁定技.</b>每当你失去<拓印>标记后,若你不是此回合首次失去此标记,你须选择一项:失去一点体力;或减一点体力一限.',
        sdyx_ouyangfeng: '欧阳锋',
        sdyx_shezhang: '蛇杖',
        sdyx_shezhang_info: '<b>锁定技.</b>若你的装备区里没有装备武器牌,你视为装备了【蛇杖】.',
        sdyx_duxi: '毒袭',
        sdyx_duxi_info: '每当你造成属性伤害时,你可以弃置一张♠️️手牌,令此伤害+1.',
        sdyx_nijing: '逆筋',
        sdyx_nijing_info: '你可以将一张属性【杀】或【硝磷火弹】当【酒】使用.',
        sdyx_zhebie: '界哲别',
        sdyx_huangyaoshi: '黄药师',
        sdyx_spguojing: 'SP郭靖',
        sdyx_sheqi: '射骑',
        sdyx_sheqi_info: '<b>锁定技,</b>你使用的【杀】无距离限制、无视目标的防具且结算完成前目标的非锁定技失效.你对有防具的角色造成伤害后,你可以选择摸两张牌或者获得其防具牌.你对有坐骑牌的角色造成伤害后,可以弃置其装备区里的一张坐骑牌.出牌阶段结束时,若你此阶段未使用过【杀】,你可以令一名其他角色选择是否使用一张无视距离和目标防具的【杀】.',
        sdyx_guifu: '归附',
        sdyx_guifu_info: '出牌阶段结束时,你可以将你于本阶段内获得的以及使用的牌各一张交给一名其他角色.',
        sdyx_sheqi_old: '射骑',
        sdyx_sheqi_old_info: '<b>锁定技,</b>你使用的【杀】无距离限制,且无视目标的防具.你对有防具的角色造成伤害后,你可以选择摸两张牌或者获得其防具牌,出牌阶段结束时,若你此阶段未使用过【杀】,你可以令一名其他角色选择是否使用一张无视距离和目标防具的【杀】.',
        sdyx_guifu_old: '归附',
        sdyx_guifu_old_info: '回合结束时,你可以将你本回合一张因使用而进入弃牌堆的牌交给一名其他角色.',
        sdyx_guojing: lib.config.extension_金庸群侠传_jiexiantupo ? '界郭靖' : '郭靖',
        sdyx_danxin: '丹心',
        sdyx_danxin_info: '其他角色使用【杀】指定目标后,你可以与其拼点,若你赢,此【杀】无效且你获得之;若你未赢且你不是目标,此【杀】的目标改为你.',
        sdyx_polu: '破虏',
        sdyx_polu_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '<b>锁定技,</b>你的攻击范围、使用【杀】的次数、拼点牌点数+X(X为你已损失的体力值).<P><b>限定技,</b>出牌阶段,你弃置所有非伤害类卡牌,获得等量伤害类卡牌.';
          return '<b>锁定技,</b>你的攻击范围+X,你使用【杀】的次数+X(X为你已损失的体力值).';
        }(),
        sdyx_longyin: '龙吟',
        sdyx_longyin_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.锁定技.</b>你攻击范围的角色视为在其他宋势力角色的攻击范围内.';
          return '<b>盟主技.锁定技.</b>你攻击范围的角色视为在其他魏势力角色的攻击范围内.';
        }(),
        //"sdyx_longyin_info":"<b>盟主技.锁定技.</b>你攻击范围的角色视为在其他XXX势力角色的攻击范围内.",
        sdyx_longyin2: '',
        sdyx_beihuai: '悲怀',
        sdyx_beihuai_info: '回合开始时,若你的手牌只含一种花色,你可以展示所有手牌,依次亮出牌堆顶的牌,直到出现与你手牌花色相同的牌为止,你获得这些牌.',
        sdyx_qushang: '曲殇',
        sdyx_qushang_info: '每当你受到伤害后,你可以弃置任意张花色各不同的牌并选择一名其他角色,令其选择一项:弃置与此法弃置花色和数量相同的牌并回复1点体力;或获得你弃置的牌并翻面.',
        sdyx_jianchi: '箭驰',
        sdyx_jianchi_info: '<b>锁定技.</b>你使用的【杀】无距离限制并且可以额外指定X名目标(X为你已损失的体力值).',
        sdyx_yuzhong: '愚忠',
        sdyx_yuzhong_info: '当你需要使用或打出【杀】时,你可以失去一点体力,视为你使用或打出了一张【杀】.你的回合内只能以此法使用一次【杀】,且不计入回合内次数.',
        sdyx_xianglong: '降龙',
        sdyx_xianglong_info: '当你使用【杀】指定目标后,你可以对目标角色造成1点伤害.若如此做,若此【杀】造成伤害,你须失去1点体力.',
        sdyx_jue_huangshang: '绝黄裳',
        jue_jiaoyi: '校译',
        jue_jiaoyi_info: '出牌阶段限两次,你可弃置一张牌,获得一张不同点数的牌.',
        jue_tongwu: '通悟',
        jue_tongwu_info: '<b>锁定技,</b>每当你使用第X种点数的牌后,你按顺序激活〖九阴〗中的一项(X为3的整数倍).',
        jue_jiuyin: '九阴',
        jue_jiuyin2: '九阴',
        jue_jiuyin_info: '<b>激活技,转换技,</b>出牌阶段限一次:<p>少阳:你可以令一名角色摸三张牌,直到你下个回合开始该角色手牌上限+3.<p>老阳:你可以将一名角色装备区里的装备牌补至三张.<p>少阴:你可以令一名角色将体力回复至三点.<p>老阴:你可以将牌堆或弃牌堆三张延时锦囊牌置入一名角色判定区内.',
        sdyx_chenxuanfeng: '陈玄风',
        sdyx_daojin: '盗经',
        sdyx_daojin_info: '<b>锁定技.</b>你的首个回合开始时,你进行判定,若结果为♥️️/♦️️/♠️️/♣️️,你获得〖九阴〗中的少阳/老阳/少阴/老阴.',
        sdyx_daojin_heart: '少阳',
        sdyx_daojin_heart_info: '出牌阶段限一次,你可以令一名角色摸3张牌,若如此做,直到你下个回合开始,其手牌上限+3.',
        sdyx_daojin_diamond: '老阳',
        sdyx_daojin_diamond_info: '出牌阶段限一次,你可以将一名角色装备区里的装备牌补至3张.',
        sdyx_daojin_spade: '少阴',
        sdyx_daojin_spade_info: '出牌阶段限一次,你可以令一名角色将体力回复至3点.',
        sdyx_daojin_club: '老阴',
        sdyx_daojin_club_info: '出牌阶段限一次,你可以将牌堆或弃牌堆3张延时锦囊牌置入一名角色判定区内.',
        sdyx_moke: '摹刻',
        sdyx_moke_use: '摹刻',
        sdyx_moke_use_backup: '摹刻',
        sdyx_moke_info: '你每受到一点伤害后,你可以将一张未以此法记录过的非装备牌的牌名记录在<皮囊>上.你死亡时,你可以将<皮囊>交给一名存活的角色.其每回合限一次,其可以在合适的时机将一张手牌当作<皮囊>上的一种牌名使用,移除该牌名.',
        sdyx_yuefei: '绝岳飞',
        sdyx_falu: '伐虏',
        sdyx_falu_info: '每轮游戏开始时,你可以将一名其他角色标记为<胡虏>.你使用基本牌或普通锦囊牌时,可令不是目标的<胡虏>也成为目标.',
        sdyx_falu2: '伐虏',
        sdyx_falu2_info: '每轮游戏开始时,你可以将一名其他角色标记为<胡虏>.你使用基本牌或普通锦囊牌时,可令不是目标的<胡虏>也成为目标.',
        sdyx_zhanji: '战记',
        sdyx_zhanji_info: '准备阶段,若你没有【武穆兵书】,你获得一张空白的【武穆兵书】;你使用普通锦囊牌后,若你的【武穆兵书】上未记录此牌,你记录之.',
        sdyx_zhonghun: '忠魂',
        sdyx_zhonghun_info: '当你令其他角色进入濒死状态时,或当你进入濒死状态时,你可以将你记录过牌的【武穆兵书】交给一名其他角色,若其曾经对<胡虏>造成过伤害,其摸2X张牌(X为其曾对<胡虏>造成过的伤害数).拥有【武穆兵书】的角色的出牌阶段限一次,其可以将一张手牌当记录于【武穆兵书】上的一张普通锦囊牌使用. ',
        sdyx_wumubingshu: '武穆兵书',
        sdyx_wumubingshu_info: '出牌阶段限一次,你可以将一张手牌当记录与<武穆兵书>的一张普通锦囊牌使用.',
        sdyx_wumubingshu_backup: '武穆兵书',
        sdyx_shatongtianhoutonghai: '沙通天侯通海',
        sdyx_panlong: '蟠龙',
        sdyx_panlong_info: '出牌阶段限一次,你可展示一张非装备手牌并令一名其他角色选择一项:交给你一张同名的牌;直到你下个回合开始,其使用或打出的下一张同名的牌无效.',
        sdyx_panlong2: '蟠龙',
        sdyx_shuangjiao: '双蛟',
        sdyx_shuangjiao_info: '出牌阶段限一次,你可弃置两张同名的牌,摸四张牌.',
        sdyx_hanbaoju: '韩宝驹',
        sdyx_xiangma2: '相马',
        sdyx_xiangma2_info: '一名角色装备栏里置入【银霜逐电驹】、【玉花骢】、【绝影】、【的卢】,后,你可以令其摸2张牌;一名角色装备栏里置入【汗血宝马】、【追风黄】、【赤兔】、【大宛】后,你可以令其摸3张牌;除上述以外的坐骑后,你可以令其摸1张牌.',
        sdyx_xiangma: '相马',
        sdyx_xiangma_info: '首轮游戏开始时,你令牌堆中所有坐骑牌随机置入场上角色的坐骑栏内;每轮游戏结束时,场上所有坐骑牌随机改变位置;一名角色装备栏里置入:【汗血宝马】、【追风黄】、【赤兔】、【大宛】后,你可以令其摸3张牌;【银霜逐电驹】、【玉花骢】、【绝影】、【的卢】,你可以令其摸2张牌;除上述以外的坐骑后,你可以令其摸1张牌.',
        sdyx_xunhua: '驯化',
        sdyx_xunhua_info: '出牌阶段,你可以将一张玄铁索链当<缰绳>置于一名没有<缰绳>的角色侠客牌上.有<缰绳>的角色不能因〖相马〗而失去坐骑牌.',
        sdyx_wumianfeng: '武眠风',
        sdyx_renshu: '仁术',
        sdyx_renshu_info: '其他角色使用毒药牌指定目标时,你可以弃置一张与此毒药牌花色相同的手牌,将此毒药牌改为【九花玉露丸】或【无极而生】.',
        sdyx_lingluo: '零落',
        sdyx_lingluo_info: '当其他角色的牌因弃置或判定进入弃牌堆前,若此牌与你手牌的点数相连且你没有该点数的手牌,你可获得之(A与K点视为相连;若有相同点数的牌仅能获得一张).',
        sdyx_yiqu: '呓曲',
        sdyx_yiqu_info: '出牌阶段限一次,你可以弃置至少3张点数相连的手牌,选择等量名座次相连的角色,令其选择:弃置2张相同花色的牌;随机获得2项负面状态.',
        //20211127重启武将
        sdyx_xuezheng: '血证',
        sdyx_xuezheng_info: '你死亡时,你记录来源的姓名.<b>锁定技,</b>凡是与你以此法记录的角色姓名中有相同字符的角色(含该角色),均不能响应或抵消带有伤害标准的基本牌或普通锦囊牌.',
        sdyx_xuezheng1: '血证',
        sdyx_xuezheng1_info: '你死亡时,你记录来源的姓名.锁定技,凡是与你以此法记录的角色姓名中有相同字符的角色(含该角色),均不能响应或抵消带有伤害标准的基本牌或普通锦囊牌.',
        sdyx_tiejian_info: '当一名角色即将受到令其进入濒死状态的伤害时、受到大于一点的伤害时、于同一回合内第二次受到伤害时,你可以代替其承受此次伤害,其摸3张牌并可以交给你一张手牌;若其与你势力或帮派相同,改为摸4张.',
        sdyx_tiejian: '铁肩',
        sdyx_nanxiren: '南希仁',
        sdyx_spmeichaofeng: 'sp梅超风',
        sdyx_xiezhao: '邪爪',
        sdyx_xiezhao_info: '<b>锁定技.</b>你的普通【杀】视为【邪杀】,你使用【邪杀】无距离限制.',
        sdyx_zhengu: '震骨',
        sdyx_zhengu_info: '出牌阶段限一次,你可以令一名其他角色弃置其区域内所有点数为偶数的牌,若其区域内牌总数为偶数,其需再弃置一张牌.最后,若该角色未因本技能弃过牌,视为本回合你未发动过本技能(每回合不能对同一角色发动此技能).',
        sdyx_xiaojian: '箫剑',
        sdyx_xiaojian_info: '你使用【杀】指定目标后,若目标区域内有♣️️牌,你可以令其弃置其区域内的一张♣️️牌.',
        sdyx_juehuangyaoshi: '绝黄药师',
        sdyx_qizhen: '奇阵',
        sdyx_qizhen_info: '你的首个回合开始时,你将牌堆顶前5张牌中的一张牌当<阵>置于侠客牌上;你受到伤害后,可用牌堆顶前5张牌中的一张牌替换<阵>.每回合限一次,当你使用非装备牌或成为其他角色使用牌的目标后,若此牌点数为<阵>的因数,你摸X张牌(X为<阵>的点数除以此牌点数的商).',
        sdyx_jueouyangfeng: '绝欧阳锋',
        sdyx_liudu: '流毒',
        sdyx_liudu_info: '你出场时,将游戏中所有的普通【杀】改为【毒杀】.<b>锁定技,</b>当有角色使用依此法修改过的牌造成伤害后,此牌回复原牌名.<p><b>锁定技,</b>防止你受到的蛊毒伤害;其他角色受到蛊毒伤害后,你摸一张牌.',
        sdyx_nimai_info: '出牌阶段限一次,你可以从如下牌组六张牌中选择三张牌名记录(你下回合开始时清除此记录).当有角色使用你记录的牌名指定目标后,你将之改为牌组中另一种牌名,清除此条记录.<p>【见招拆招】←→【无极而生】<p>【妙手空空】←→【开仓放粮】<p>【漫天花雨】←→【歃血为盟】',
        sdyx_nimai: '逆脉',
        sdyx_nimai2: '逆脉',
        sdyx_nimai3: '逆脉',
        sdyx_zhangasheng: '张阿生',
        sdyx_paoding: '庖丁',
        sdyx_paoding_info: '出牌阶段限一次,你可以弃置一张手牌,将此牌的点数分解成为任意个互不相同的点数(这些点数之和需等于你弃置牌的点数).你选择至多三名其他角色,令其弃置所有满足如下条件的牌:点数等于你分解得到的数字之一的牌.',
        sdyx_tiexue: '铁血',
        sdyx_tiexue_info: '你受到伤害后,可获得三枚<捨>标记.<p>当有角色因弃置失去牌时,你可移除一个此标记并取消之;<p>当有角色即将进入负面状态时你可移除一个此标记并解除之.',
        sdyx_luchengfeng: '陆乘风',
        sdyx_chaizhen: '拆阵',
        sdyx_chaizhen_info: '每名角色的出牌阶段,其可以弃置点数乘积为24的牌以将场上一张七宿阵置入弃牌堆.',
        sdyx_guiyun: '归云',
        sdyx_guiyun_info: '出牌阶段限一次,你可选择-项:令手牌数最少的角色之一将手牌补至与手牌数最多的角色之一相等;或令手牌数最多的角色之一将手牌弃置至与手牌数最少的角色之一相等.',
        sdyx_sixiang: '四象',
        sdyx_sixiang_info: '你的首个回合开始时,你将【青龙御天阵】、【白虎履尾阵】、【朱雀惊鸿阵】、【玄武潜渊阵】置于侠客牌上,称为七宿阵.出牌阶段限一次,你可以将一张七宿阵置入一名角色的装备区里(可替换原装备).',
        sdyx_qulingfeng: '曲灵风',
        sdyx_pikong: '劈空',
        sdyx_pikong_info: '你使用【杀】指定目标后,你可以弃置目标的一张牌,若其牌的花色数量未因此减少,其不能抵消此【杀】.',
        sdyx_daobao: '盗宝',
        sdyx_daobao_info: '<b>使命技.</b>出牌阶段限一次,你可以令一名其他角色从牌堆或弃牌堆中获得一张宝物牌.若你在濒死前因此技能令其他角色获得了【九阴真经】,则使命成功;否则,使命失败.<p>成功:你减一点体力上限,摸五张牌,获得【五运】和【遁甲】.<p>失败:你将帮派属性由<桃花岛>改为<游侠>并立即获得你的帮派技.',
        sdyx_xie_yangkang: '杨康',
        sdyx_weidao: '伪道',
        sdyx_weidao_info: '出牌阶段限一次,若你的体力上限大于一,有手牌且低于你的体力上限值,你可以减一点上限,回复一点体力,交换你的体力值和手牌数.',
        sdyx_yinzhua: '阴爪',
        sdyx_yinzhua_info: '每当你受到一点伤害或造成伤害后,你可以令名其他角色记录1-9中的一个数字(每个数字只能被记录一次,每名角色最多只能记录3个数字).<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>锁定技,</b>记录过【阴爪】数字的角色,在获得点数等于其【阴爪】数字之一的牌时,立即将之置入弃牌堆.',
        sdyx_yinzhua2: '阴爪',
        sdyx_yinzhua2_info: '每当你受到一点伤害或造成伤害后,你可以令名其他角色记录1-9中的一个数字(每个数字只能被记录一次,每名角色最多只能记录3个数字).<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>锁定技,</b>记录过【阴爪】数字的角色,在获得点数等于其【阴爪】数字之一的牌时,立即将之置入弃牌堆.',
        sdyx_tugou: '屠狗',
        sdyx_tugou_info: '每回合限一次,你使用牌指定目标时,你可以令该朝代的所有角色都成为目标.',
        sdyx_qianlong: '潜龙',
        sdyx_qianlong_info: '每当你受到伤害后,你可弃置一张手牌,获得牌堆中所有点数等于此牌的牌(至多九张),且你可将其中任意张牌交给等量名其他角色各一张.',
        sdyx_shengai_info: '出牌阶段限一次,你可以亮出三张拥有衍生牌的且未出场的侠客牌,你获得这些侠客的各一张衍生牌.',
        sdyx_shengai: '神丐',
        sdyx_jue_hongqigong: '绝洪七公',
        sdyx_guoxiaotian: '郭啸天',
        sdyx_zhongyi: '忠裔',
        sdyx_zhongyi_info: '每当你需要使用【金刚护体】时,你可以选择受到一点无来源的伤害或者废除你的一个装备栏,视为你使用了此牌.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你使用【金刚护体】抵消一张普通锦囊牌时,你可以抵消此牌对其中任意名目标的效果.',
        sdyx_zhongyi2: '忠裔',
        sdyx_zhongyi2_info: '每当你需要使用【金刚护体】时,你可以选择受到一点无来源的伤害或者废除你的一个装备栏,视为你使用了此牌.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你使用【金刚护体】抵消一张普通锦囊牌时,你可以抵消此牌对其中任意名目标的效果.',
        sdyx_zhongyi3: '忠裔',
        sdyx_zhongyi3_info: '每当你需要使用【金刚护体】时,你可以选择受到一点无来源的伤害或者废除你的一个装备栏,视为你使用了此牌.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你使用【金刚护体】抵消一张普通锦囊牌时,你可以抵消此牌对其中任意名目标的效果.',
        sdyx_diexue: '喋血',
        sdyx_diexue_info: '每当你受到一点伤害后,你可以选择一名其他角色,令其摸牌阶段的摸牌数、出牌阶段使用杀的次数、手牌上限数永久+1,进入濒死状态的基础数值永久-1.',
        sdyx_diexue2: '喋血',
        sdyx_diexue3: '喋血',
        sdyx_diexue_draw: '喋血',
        sdyx_diexue_dying: '喋血',
        sdyx_wokuotai: '窝阔台',
        sdyx_canshi: '蚕食',
        sdyx_canshi_info: '每当一个朝代消失后,你可以摸3张牌,如果令该朝代消失的角色是蒙古人,改为摸5张牌.',
        sdyx_jingtun2: '鲸吞',
        sdyx_jingtun2_info: '每项每局游戏限选一次.当你对其他角色造成伤害后,你可以掠取其:1.一点体力上限;2.一个装备栏;3.一项除限定技、觉醒技、锁定技、帮派技和盟主技以外的技能.',
        sdyx_jingtun: '鲸吞',
        sdyx_jingtun_info: '每项每局游戏限选一次.当你对其他角色造成伤害后,你可以掠取其:1.一点体力上限;2.一个装备栏;3.一项除限定技、觉醒技、锁定技、帮派技和盟主技以外的技能.',
        sdyx_zhamuhe: '扎木合',
        sdyx_wonan: '斡难',
        sdyx_wonan_info: '<b>限定技.</b>出牌阶段,若你有至少三张手牌,你选择一名手牌数至少为三的其他角色,你与其依次进行三次拼点.每次拼点赢的角色从以下六项中选择一项,输的角色再选择一项(每项只能选择一次).你将拼点赢的牌当<髀>置于侠客牌上.最后,你对其发动【割袍】.<p>1.令草原雕成为你的副将(回合结束时离开你的几率为0%);<p>2.令双雕成为你的副将(回合结束时离开你的几率为0%);<p>3.视为永久装备【射雕弯弓】;<p>4.视为永久装备【汗血宝马】;<p>5.获得技能【戎马】;<p>6.获得技能【南伐】.',
        sdyx_lianfa: '联伐',
        sdyx_lianfa_info: '出牌阶段,你可移除一张<髀>,令一名其他角色选择是否弃置一张相同花色的手牌.若其选择弃置牌且此牌为:红色,你视为使用一张【漫天花雨】;黑色,你视为使用一张【鞑虏入侵】.',
        sdyx_mayu: '马钰',
        sdyx_anshou_new: '暗授',
        sdyx_anshou_new_info: '每轮限一次,一名角色使用【杀】指定目标时,可若其攻击范围内还有比此【杀】最远的一名目标距离更远的角色,你可以令其选择其中1至3名角色也成为目标.',
        sdyx_yunyou_new: '云游',
        sdyx_yunyou_new_info: '回合结束时,你于本回合内使用的目标唯一的牌中,若你计算与这些牌按出牌顺序指定的目标的距离依次为严格递增,则你摸X张牌(X为本回合内你使用的目标唯一的牌数).'
      },
      //技能动态数据
      dynamicTranslate: {
        sdyx_qianchen(player) {
          var str1 = '阳:铁匠铺';
          var str2 = '阴:铁枪庙,在此场景下,当有角色令另一名目标进入濒死状态时,你可令来源受到1点无来源的蛊毒伤害,若目标死亡,你可再令来源翻面(若死亡的是你,仍可以发动)';
          if (player.storage.sdyx_qianchen) {
            str1 = '<span class="firetext">' + str1 + '</span>';
          } else {
            str2 = '<span class="bluetext">' + str2 + '</span>';
          }
          return '转换技.' + str1 + str2;
        },
        sdyx_liufang(player) {
          var str0 = '使命技,';
          var str1 = '你获得【武穆遗书】后,直到你下回合开始,若你装备区或手牌中仍有【武穆遗书】,视为使命成功,否则使命失败.';
          var str2 = '成功:';
          var str3 = '你发动【武穆遗书】技能后不需弃置此牌,且当你的此牌因弃置进入弃牌堆前,你可以将之交给一名其他角色.';
          var str4 = '失败:';
          var str5 = '你获得〖铁掌〗.';
          if (player.hasSkill('sdyx_tiezhang2')) {
            str0 = '<span style="color: #808080">' + str0 + '</span>';
            str1 = '<span style="color: #808080">' + str1 + '</span>';
            str2 = '<span style="color: #808080">' + str2 + '</span>';
            str3 = '<span style="color: #808080">' + str3 + '</span>';
            str4 = '<span style="color: #808080">' + str4 + '</span>';
            str5 = '<span style="color: #808080">' + str5 + '</span>';
          } else if (player.hasSkill('sdyx_liufang3')) {
            str0 = '<span style="color: #808080">' + str0 + '</span>';
            str1 = '<span style="color: #808080">' + str1 + '</span>';
            str4 = '<span style="color: #808080">' + str4 + '</span>';
            str5 = '<span style="color: #808080">' + str5 + '</span>';
          }
          return '<b>锁定技,</b>当其他角色的【武穆遗书】进入弃牌堆前,你获得之.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>' + str0 + '</b>' + str1 + '<b><i>' + str2 + '</i></b>' + str3 + '<p><b><i>' + str4 + '</i></b>' + str5;
        },
        sdyx_weifu(player) {
          var str1 = '阴:当有角色拼点赢后、因【比武】造成伤害后,你可以令其摸2张牌;';
          var str2 = '阳:当有角色拼点未赢后、受到【比武】造成的伤害后,你可以令其弃置2张牌.';
          if (player.storage.sdyx_weifu) {
            str1 = '<span class="bluetext">' + str1 + '</span>';
          } else {
            str2 = '<span class="bluetext">' + str2 + '</span>';
          }
          return '转换技.' + str1 + str2;
        },
        sdyx_chanxin(player) {
          if (lib.config.extension_金庸群侠传_jiexiantupo && player.storage.sdyx_duhua) return '你受到伤害后,你可以视为使用一张你未依此法使用的普通锦囊牌.';
          return '你受到伤害后,若你没有手牌,你可以视为使用一张你未依此法使用的普通锦囊牌.';
        },
        jue_jiuyin(player) {
          var str = lib.translate.jue_jiuyin_info;
          if (player.storage.jue_jiuyin_lv) {
            if (player.storage.jue_jiuyin_lv >= 1) {
              if (player.storage.jue_jiuyin_step && player.storage.jue_jiuyin_step == 1) {
                str = str.replace(/少阳/g, '<span class="bluetext">已激活-少阳-可用状态</span>');
              } else {
                str = str.replace(/少阳/g, '<span class="firetext">已激活-少阳</span>');
              }
            }
            if (player.storage.jue_jiuyin_lv >= 2) {
              if (player.storage.jue_jiuyin_step && player.storage.jue_jiuyin_step == 2) {
                str = str.replace(/老阳/g, '<span class="bluetext">已激活-老阳-可用状态</span>');
              } else {
                str = str.replace(/老阳/g, '<span class="firetext">已激活-老阳</span>');
              }
            }
            if (player.storage.jue_jiuyin_lv >= 3) {
              if (player.storage.jue_jiuyin_step && player.storage.jue_jiuyin_step == 3) {
                str = str.replace(/少阴/g, '<span class="bluetext">已激活-少阴-可用状态</span>');
              } else {
                str = str.replace(/少阴/g, '<span class="firetext">已激活-少阴</span>');
              }
            }
            if (player.storage.jue_jiuyin_lv >= 4) {
              if (player.storage.jue_jiuyin_step && player.storage.jue_jiuyin_step == 4) {
                str = str.replace(/老阴/g, '<span class="bluetext">已激活-老阴-可用状态</span>');
              } else {
                str = str.replace(/老阴/g, '<span class="firetext">已激活-老阴</span>');
              }
            }
          }
          return str;
        },
        jue_tongwu(player) {
          var history = player.getAllHistory('useCard');
          var str = lib.translate.jue_tongwu_info;
          if (player.storage.jue_tongwu) return str;
          var numbers = [];
          for (var i = 0; i < history.length; i++) {
            if (typeof history[i].card.number == 'number') numbers.add(history[i].card.number);
          }
          if (numbers.length) {
            numbers.sort(function (a, b) {
              return a - b;
            });
            str += '<br>已使用了点数' + get.translation(numbers) + '';
          }
          return str;
        }
      }
    };
    for (var i in sdyx.character) {
      sdyx.character[i][4].push('jy_die_audio');
      //sdyx.character[i][4].push(`die:ext:金庸群侠传/peiyin/${i}.mp3`);
      sdyx.character[i][4].push(`die:ext:金庸群侠传/peiyin:true`);
      sdyx.character[i][4].push('ext:金庸群侠传/character/yuanban/' + i + '.jpg');
    }
    return sdyx;
  });
});
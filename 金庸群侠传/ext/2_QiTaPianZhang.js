'use strict';
window.jyimport(function (lib, game, ui, get, ai, _status) {
  game.import('character', function () {
    lib.config.all.characters.add('qtpz');
    lib.config.characters.add('qtpz');
    lib.translate.qtpz_character_config = '<img style=width:100px  src=extension/金庸群侠传/image/title/jy_title_qtpz.jpg>';
    var Group = function (str1, str2) {
      if (!str2) return str1;
      return lib.config.extension_金庸群侠传_changeGroup ? str2 : str1;
    };
    var tupo = function (str1, str2) {
      return lib.config.extension_金庸群侠传_jiexiantupo ? str2 : str1;
    };
    var qtpz = {
      name: 'qtpz',
      connect: true,
      characterSort: {
        qtpz: {
          //绝世高手
          qtpz_jueshi: ['qtpz_jue_diyun', 'qtpz_jue_yuanchonghuan', 'qtpz_jue_shipotian'],
          //碧血剑
          qtpz_bixuejian: ['qtpz_xie_hetieshou', 'qtpz_yuanchengzhiwenqingqing', 'qtpz_murenqing', 'qtpz_hehongyao', 'qtpz_weizhongxian', 'qtpz_songxiance', 'qtpz_niujinxing', 'qtpz_xiaxueyi', 'qtpz_chengbenzhi', 'qtpz_hongniangzi', 'qtpz_jyliyan', 'qtpz_lizicheng', 'qtpz_ajiu', 'qtpz_wangchengen', 'qtpz_zhuyoujian', 'qtpz_duoergun', 'qtpz_yuanchengzhi', 'qtpz_wenqingqing'],
          //书剑恩仇录
          qtpz_shujianenchoulu: ['qtpz_xinyan', 'qtpz_zhaobanshan', 'qtpz_hongli', 'qtpz_zhangzhaozhong', 'qtpz_yuyutong', 'qtpz_wentailai', 'qtpz_liyuanzhi', 'qtpz_muzhuolun', 'qtpz_huoayi', 'qtpz_kasili', 'qtpz_chenjialuo', 'qtpz_huoqingtong', 'qtpz_luobing'],
          //飞狐系列
          qtpz_feihuxilie: ['qtpz_tangpei', 'qtpz_fengtiannan', 'qtpz_miaoruolan', 'qtpz_pingasi', 'qtpz_wuchendashi', 'qtpz_tianguinong', 'qtpz_miaorenfeng', 'qtpz_yuanzhiyi', 'qtpz_chenglingsu', 'qtpz_hufei', 'qtpz_huyidao'],
          //侠客行
          qtpz_xiakexing: ['qtpz_axiu', 'qtpz_dingbusandingbusi', 'qtpz_longmudaozhu', 'qtpz_shizhongyu', 'qtpz_zhangsanlisi', 'qtpz_xieyanke', 'qtpz_shipotian'],
          //连城诀
          qtpz_lianchengjue: ['qtpz_xie_huatiegan', 'qtpz_qichangfa', 'qtpz_yandaping', 'qtpz_xie_xuedaolaozu', 'qtpz_wanzhenshan', 'qtpz_shuisheng', 'qtpz_huatiegan', 'qtpz_xuedaolaozhu', 'qtpz_lintuisi', 'qtpz_dindian', 'qtpz_diyun', 'qtpz_meiniansheng'],
          //越女剑
          qtpz_yuenvjian: ['qtpz_goujian', 'qtpz_fanli', 'qtpz_aqing', 'qtpz_wuzixu', 'qtpz_xishi'],
          //白马啸西风
          qtpz_baimaxiaoxifeng: ['qtpz_liwenxiu', 'qtpz_supu']
        }
      },
      character: {
        //其他篇章-标记
        qtpz_xie_huatiegan: ['male', Group('jin', 'jy_xie'), '3/5', ['qtpz_xiaming', 'qtpz_qiesi'], ['bangpai:jy_wangzu', 'hiddenSkill'], { drawer: '画师:佚名', skinLevel: 3 }],
        qtpz_axiu: ['female', Group('wei', 'jy_ming'), 3, ['qtpz_junxiu', 'qtpz_pangqiao'], ['bangpai:jy_xueshanpai'], { drawer: '画师:佚名', skinLevel: 2 }],
        qtpz_jue_diyun: ['male', Group('shen', 'jy_jue'), 3, ['qtpz_yinian', 'qtpz_ruzhao', 'qtpz_xueren'], ['bangpai:jy_xuedaomen'], { drawer: '画师:XUE CHENG', skinLevel: 3 }],
        qtpz_xie_hetieshou: ['female', Group('jin', 'jy_xie'), 3, ['qtpz_wudu', 'qtpz_wugou'], ['bangpai:jy_wudu'], { drawer: '画师:大葱君', skinLevel: 4 }],
        qtpz_qichangfa: ['male', Group('qun', 'jy_lie'), 3, ['qtpz_hengjiang', 'qtpz_juelu', 'qtpz_qishi'], ['bangpai:jy_wangzu'], { drawer: '画师:XUE CHENG', skinLevel: 2 }],
        qtpz_yandaping: ['male', Group('qun', 'jy_lie'), 4, ['qtpz_shandou', 'qtpz_juequ'], ['bangpai:jy_wangzu'], { drawer: '画师:shellinlam', skinLevel: 2 }],
        qtpz_jue_yuanchonghuan: ['male', Group('shen', 'jy_jue'), 3, ['qtpz_qianbing', 'qtpz_bixue', 'qtpz_zhonghun'], ['bangpai:jy_youxia'], { drawer: '画师:ZHOUBO-KONGLING', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=404962760&bvid=BV1DG411f7Jf&cid=1238252950&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        qtpz_jue_shipotian: ['male', Group('shen', 'jy_jue'), 3, ['qtpz_taixuan', 'qtpz_yanyan', 'qtpz_xuanjiu'], ['bangpai:jy_youxia'], { drawer: '画师:夜夜夜夜1103', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=273431382&bvid=BV1uF411Q7oA&cid=1198371339&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }], //www.zcool.com.cn/u/13697080
        qtpz_tangpei: ['male', Group('shu', 'jy_qing'), 3, ['qtpz_shihui', 'qtpz_diaoyu'], ['bangpai:jy_wangzu'], { drawer: '画师:佚名', skinLevel: 3 }],
        qtpz_fengtiannan: ['male', Group('shu', 'jy_qing'), 3, ['qtpz_haoduo', 'qtpz_balin'], ['bangpai:jy_wangzu'], { drawer: '画师:佚名', skinLevel: 2 }],
        qtpz_xie_xuedaolaozu: ['male', Group('qun', 'jy_xie'), 4, ['qtpz_xiezun', 'qtpz_xueyue', 'qtpz_jidao'], ['bangpai:jy_xuedaomen'], { drawer: '画师:佚名', skinLevel: 3 }],
        qtpz_dingbusandingbusi: ['male', Group('wu', 'jy_ming'), '3/4', ['qtpz_shadao', 'qtpz_guijue'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 3 }],
        qtpz_xinyan: ['male', Group('shu', 'jy_qing'), 4, ['qtpz_shutong', 'qtpz_anshao'], ['bangpai:jy_honghuahui'], { drawer: '画师:佚名', skinLevel: 3 }],
        qtpz_miaoruolan: ['female', Group('shu', 'jy_qing'), 3, ['qtpz_jinse', 'qtpz_yaxian'], ['bangpai:jy_wangzu'], { drawer: '画师:剑舞江湖', skinLevel: 2 }],
        qtpz_shizhongyu: ['male', Group('wu', 'jy_ming'), 4, ['qtpz_xialuan', 'qtpz_guimou', 'qtpz_mantian'], ['bangpai:jy_xueshanpai'], { drawer: '画师:沈阳炎艺科技', skinLevel: 2 }],
        //jy_xueshanpai【雪山派】帮派技
        qtpz_longmudaozhu: ['male', Group('wu', 'jy_ming'), 3, ['qtpz_shizhou', 'qtpz_qiecuo'], ['bangpai:jy_xiakedao'], { drawer: '画师:佚名', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=573877630&bvid=BV17z4y1x7wB&cid=1212629221&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        //jy_xiakedao【侠客岛】龙木岛主,张三李四等人所在帮派
        qtpz_zhangsanlisi: ['male', Group('wu', 'jy_ming'), 4, ['qtpz_shangcheng', 'qtpz_xuanbing', 'qtpz_bihuo'], ['bangpai:jy_xiakedao'], { drawer: '画师:佚名', skinLevel: 3 }],
        qtpz_supu: ['male', Group('qun', 'jy_lie'), 3, ['qtpz_xianyi', 'qtpz_numa', 'qtpz_qingcang'], ['bangpai:jy_yibang'], { drawer: '画师:佚名', skinLevel: 1 }],
        qtpz_liwenxiu: ['female', Group('qun', 'jy_lie'), 4, ['qtpz_zhuanqing', 'qtpz_lwxsheyou'], ['bangpai:jy_youxia'], { drawer: '画师:金刚猎豹太极', skinLevel: 4 }],
        qtpz_wanzhenshan: ['male', Group('qun', 'jy_lie'), 4, ['qtpz_fengzang', 'qtpz_shishi'], ['bangpai:jy_wangzu'], { drawer: '画师:帜道维景', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=727806511&bvid=BV1mS4y1H7hM&cid=754742359&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }], //weibo.com/3267053892
        qtpz_shuisheng: ['female', Group('qun', 'jy_lie'), 3, ['qtpz_pianjia', 'qtpz_yangbian', 'qtpz_fenti'], ['bangpai:jy_youxia'], { drawer: '画师:一梦江湖', skinLevel: 4 }],
        qtpz_yuanchengzhiwenqingqing: ['male', Group('wu', 'jy_ming'), 4, ['qtpz_shexing', 'qtpz_yandu'], ['bangpai:jy_huashan:jy_wangzu'], { drawer: '画师:梦回笙归客', skinLevel: 4 }],
        qtpz_murenqing: ['male', Group('wu', 'jy_ming'), 4, ['qtpz_dangjian', 'qtpz_xianyuan'], ['bangpai:jy_huashan'], { drawer: '画师:佚名', skinLevel: 3 }],
        qtpz_hehongyao: ['female', Group('wu', 'jy_ming'), 3, ['qtpz_zidao', 'qtpz_yuandu'], ['bangpai:jy_wudu'], { drawer: '画师:沈阳炎艺科技', skinLevel: 3 }], //www.9abox.com/user/photos/u5899292656707/1159
        qtpz_goujian: ['male', Group('qun', 'jy_lie'), 4, ['qtpz_taohui', 'qtpz_xingguo'], ['bangpai:jy_miaotang'], { drawer: '画师:率土之滨', skinLevel: 4 }],
        qtpz_zhaobanshan: ['male', Group('shu', 'jy_qing'), 3, ['qtpz_roudao', 'qtpz_feisuo'], ['bangpai:jy_honghuahui'], { drawer: '画师:书剑恩仇录游戏', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=362629311&bvid=BV1j94y1z7sq&cid=1244447719&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        //jy_honghuahui【红花会】以陈家洛为首的反清组织
        qtpz_hongli: ['male', Group('shu', 'jy_qing'), 4, ['qtpz_woxuan', 'qtpz_chezhou', 'qtpz_tianzun'], ['zhu', 'bangpai:jy_dalu'], { drawer: '画师:藏地', skinLevel: 3 }], //www.zcool.com.cn/u/2550680
        //jy_dalu【鞑虏】主要指长期虎视、侵略、统治中原的辽金蒙满等少民政权
        qtpz_weizhongxian: ['male', Group('wei', 'jy_ming'), 4, ['qtpz_jiedang', 'qtpz_shanchao'], ['bangpai:jy_miaotang:jy_hougong'], { drawer: '画师:阵面对决', skinLevel: 4 }],
        //jy_miaotang【庙堂】指帝王将相、官吏或效力于朝廷的角色
        qtpz_xishi: ['female', Group('qun', 'jy_lie'), 3, ['qtpz_huoxin', 'qtpz_chenyu'], ['bangpai:jy_youxia'], { drawer: '画师:Phoeniz Lu', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=412700297&bvid=BV14V411o7Dr&cid=175939378&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        qtpz_aqing: ['female', Group('qun', 'jy_lie'), 4, ['qtpz_libing', 'qtpz_shujia'], ['bangpai:jy_youxia'], { drawer: '画师:九游', skinLevel: 3 }],
        qtpz_xuedaolaozhu: ['male', Group('qun', 'jy_lie'), 4, ['qtpz_handao', 'qtpz_hanzhan', 'qtpz_shuixiang'], ['bangpai:jy_xuedaomen'], { drawer: '画师:全民武馆', skinLevel: 4 }],
        qtpz_wuzixu: ['male', Group('qun', 'jy_lie'), 3, ['qtpz_zhucheng', 'qtpz_xuezhuang'], ['bangpai:jy_miaotang'], { drawer: '画师:佚名', skinLevel: 4 }],
        qtpz_zhuyoujian: ['male', Group('wu', 'jy_ming'), 4, ['qtpz_zuiji', 'qtpz_youqin', 'qtpz_gangbi'], ['zhu', 'bangpai:jy_miaotang'], { drawer: '画师:张帅', skinLevel: 2 }],
        qtpz_chenglingsu: ['female', Group('shu', 'jy_qing'), 4, ['qtpz_zhidu', 'qtpz_xianghun'], ['bangpai:jy_yaowanggu'], { drawer: '画师:畅游', skinLevel: 2 }],
        //jy_yaowanggu【药王谷】程灵素,无嗔大师等
        qtpz_miaorenfeng: ['male', Group('shu', 'jy_qing'), 4, ['qtpz_fengpo', 'qtpz_yujie'], ['bangpai:jy_youxia'], { drawer: '画师:蜗牛游戏九阴真经', skinLevel: 3 }],
        qtpz_jyliyan: ['male', Group('qun', 'jy_lie'), 3, ['qtpz_quanzhen', 'qtpz_honglve'], ['bangpai:jy_yijun'], { drawer: '画师:龙血战神', skinLevel: 3 }],
        //jy_wangzu【望族】小门小派、或不成大气候的政权的角色统称
        qtpz_yuyutong: ['male', Group('shu', 'jy_qing'), 5, ['qtpz_gaifu', 'qtpz_wuxian'], ['bangpai:jy_honghuahui']],
        qtpz_ajiu: ['female', Group('wu', 'jy_ming'), 3, ['qtpz_guoshang', 'qtpz_fuchao'], ['bangpai:jy_miaotang'], { drawer: '画师:佚名', skinLevel: 3 }, { drawer: 'ill.书剑恩仇录游戏', skinLevel: 3 }],
        qtpz_chengbenzhi: ['male', Group('wu', 'jy_ming'), 4, ['qtpz_yuanbian', 'qtpz_tongzui'], ['bangpai:jy_youxia'], { drawer: '画师:legend of the cryptids', skinLevel: 2 }],
        qtpz_huatiegan: ['male', Group('qun', 'jy_lie'), 4, ['qtpz_jiaoxie', 'qtpz_ruxue', 'qtpz_guming'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 2 }],
        qtpz_kasili: ['female', Group('qun', 'jy_lie'), 3, ['qtpz_daogao', 'qtpz_shenyu'], ['bangpai:jy_yibang'], { drawer: '画师:zhaohuanhua', skinLevel: 4 }], //www.leewiart.com/space/14088.html
        //jy_yibang【异邦】其他国家地区部落等
        qtpz_tianguinong: ['male', Group('shu', 'jy_qing'), 3, ['qtpz_tudu', 'qtpz_xingxun', 'qtpz_xuncai'], ['bangpai:jy_wangzu'], { drawer: '画师:剑舞江湖', skinLevel: 2 }],
        qtpz_xieyanke: ['male', Group('wei', 'jy_ming'), 3, ['qtpz_lingtie', 'qtpz_sunuo', 'qtpz_jieyou'], ['bangpai:jy_youxia'], { drawer: '画师:剑舞江湖', skinLevel: 4 }],
        qtpz_yuanchengzhi: ['male', Group('wu', 'jy_ming'), 4, ['qtpz_pozhen', 'qtpz_dangkou', 'qtpz_jiangmen'], ['zhu', 'bangpai:jy_huashan'], { drawer: '画师:千年盛世OL', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=362251122&bvid=BV1994y1k7kT&cid=1235883862&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        qtpz_hufei: ['male', Group('shu', 'jy_qing'), 4, ['qtpz_anming', 'qtpz_zangbao', 'qtpz_shouxian'], ['zhu', 'bangpai:jy_youxia'], { drawer: '画师:黄光剑', skinLevel: 3, videos: ['<iframe src="http:iframe src="http://player.bilibili.com/player.html?aid=659718579&bvid=BV1vh4y1Q7ep&cid=&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        qtpz_songxiance: ['male', Group('qun', 'jy_lie'), 3, ['qtpz_yaochen', 'qtpz_fuji'], ['bangpai:jy_yijun'], { drawer: '画师:三剑豪', skinLevel: 3 }],
        qtpz_pingasi: ['male', Group('shu', 'jy_qing'), 3, ['qtpz_duanbi', 'qtpz_yusi', 'qtpz_duwu'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 3 }],
        qtpz_diyun: ['male', Group('qun', 'jy_lie'), 4, ['qtpz_hengdao', 'qtpz_sheer', 'qtpz_kuiyi'], ['zhu', 'bangpai:jy_youxia'], { drawer: '画师:Xue Cheng', skinLevel: 3, videos: ['<iframe src="http:iframe src="http:iframe src="http://player.bilibili.com/player.html?aid=317248401&bvid=&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        qtpz_meiniansheng: ['male', Group('qun', 'jy_lie'), 4, ['qtpz_jianshi', 'qtpz_guazhan', 'qtpz_yizhen'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 2 }],
        qtpz_hongniangzi: ['female', Group('qun', 'jy_lie'), 4, ['qtpz_qingying', 'qtpz_jingguo'], ['bangpai:jy_yijun'], { drawer: '画师:佚名', skinLevel: 3 }],
        qtpz_wentailai: ['male', Group('shu', 'jy_qing'), 4, [lib.config.extension_金庸群侠传_jiexiantupo ? 'qtpz_benlei2' : 'qtpz_benlei', 'qtpz_guhuo', 'qtpz_yisui'], ['bangpai:jy_honghuahui'], { drawer: '画师:书剑恩仇录游戏', skinLevel: 3 }],
        qtpz_liyuanzhi: ['female', Group('shu', 'jy_qing'), 3, ['qtpz_youlian', 'qtpz_tingxian'], ['bangpai:jy_honghuahui'], { drawer: '画师:投名状OL', skinLevel: 3 }],
        qtpz_wenqingqing: ['female', Group('wu', 'jy_ming'), 3, ['qtpz_jiexiang', 'qtpz_shenying'], ['bangpai:jy_wangzu'], { drawer: '画师:佚名', skinLevel: 4 }],
        qtpz_wuchendashi: ['male', Group('shu', 'jy_qing'), 3, ['qtpz_jiegu', 'qtpz_shenzhang'], ['bangpai:jy_yaowanggu'], { drawer: '画师:佚名', skinLevel: 2 }],
        qtpz_xiaxueyi: ['male', Group('wu', 'jy_ming'), 4, ['qtpz_sheyou'], ['bangpai:jy_youxia'], { drawer: '画师:剑舞江湖', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=447613641&bvid=BV1Wj411q7Fd&cid=1240860006&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        qtpz_yuanzhiyi: ['female', Group('shu', 'jy_qing'), 3, ['qtpz_sanshe', 'qtpz_zishu'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 4 }],
        qtpz_huoqingtong: ['female', Group('qun', 'jy_lie'), 3, ['qtpz_nagong', 'qtpz_chouxiang', 'qtpz_zhengchi'], ['bangpai:jy_yibang'], { drawer: '画师:书剑恩仇录游戏', skinLevel: 3 }],
        qtpz_dindian: ['male', Group('qun', 'jy_lie'), 4, ['qtpz_zhengu', 'qtpz_shenzhao'], ['bangpai:jy_youxia']],
        qtpz_huoayi: ['male', Group('qun', 'jy_lie'), 4, ['qtpz_chifa', 'qtpz_aobing'], ['bangpai:jy_yibang'], { drawer: '画师:舞之影魅游戏', skinLevel: 2 }],
        qtpz_chenjialuo: ['male', Group('shu', 'jy_qing'), 4, ['qtpz_yongzhu', 'qtpz_mangxin', 'qtpz_yiqi'], ['zhu', 'bangpai:jy_honghuahui'], { drawer: '画师:佚名', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=659718579&bvid=BV1vh4y1Q7ep&cid=1232183189&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        qtpz_muzhuolun: ['male', Group('qun', 'jy_lie'), 5, ['qtpz_chengren', 'qtpz_fuyu', 'qtpz_shayu'], ['zhu', 'bangpai:jy_yibang'], { drawer: '画师:佚名', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=999692224&bvid=BV1B44y1c7ja&cid=1232328435&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        qtpz_wangchengen: ['male', Group('wu', 'jy_ming'), 3, [lib.config.extension_金庸群侠传_jiexiantupo ? 'qtpz_kumeng2' : 'qtpz_kumeng', 'qtpz_xunzhu'], ['bangpai:jy_hougong'], { drawer: '画师:琅琊榜手游', skinLevel: 2 }],
        qtpz_lizicheng: ['male', Group('qun', 'jy_lie'), 4, ['qtpz_mubing', 'qtpz_juyi', 'qtpz_juntian'], ['zhu', 'bangpai:jy_yijun'], { drawer: '画师:佚名', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=702152499&bvid=BV1Wm4y1p71P&cid=1233742190&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        qtpz_niujinxing: ['male', Group('qun', 'jy_lie'), 3, ['qtpz_quanjing', 'qtpz_channi'], ['bangpai:jy_yijun'], { drawer: '画师:佚名', skinLevel: 2 }],
        qtpz_zhangzhaozhong: ['male', Group('shu', 'jy_qing'), 4, ['qtpz_pantou', 'qtpz_zhuiqin'], ['bangpai:jy_miaotang'], { drawer: '画师:剑舞江湖', skinLevel: 4 }],
        qtpz_duoergun: ['male', Group('shu', 'jy_qing'), 3, ['qtpz_fuzheng', 'qtpz_poguan'], ['bangpai:jy_dalu'], { drawer: '画师:投名状OL', skinLevel: 4 }],
        qtpz_lintuisi: ['male', Group('qun', 'jy_lie'), 4, ['qtpz_duxin', 'qtpz_cuidu'], ['bangpai:jy_wangzu'], { drawer: '画师:佚名', skinLevel: 1, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=935342605&bvid=BV1BT4y127Ab&cid=475328391&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        qtpz_luobing: ['female', Group('shu', 'jy_qing'), 4, ['qtpz_shuangdao', 'qtpz_xiadao'], ['bangpai:jy_honghuahui'], { drawer: '画师:黄光剑', skinLevel: 3 }],
        qtpz_huyidao: ['male', Group('shu', 'jy_qing'), 4, ['qtpz_aozhan', 'qtpz_tianyou'], ['bangpai:jy_youxia'], { drawer: '画师:剑舞江湖', skinLevel: 4 }],
        qtpz_shipotian: ['male', Group('wei', 'jy_ming'), 4, ['qtpz_qijing', 'qtpz_chiyan', 'qtpz_tuimeng'], ['zhu', 'bangpai:jy_changlebang'], { drawer: '画师:佚名', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=827935661&bvid=BV1bg4y1A7Vb&cid=1183905886&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>', '<iframe src="http://player.bilibili.com/player.html?aid=257250807&bvid=BV1gY411M7CF&cid=741105986&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        //jy_changlebang【长乐帮】
        qtpz_fanli: ['male', Group('qun', 'jy_lie'), 4, ['qtpz_shangsheng', 'qtpz_aibing'], ['bangpai:jy_miaotang'], { drawer: '画师:菌十一', skinLevel: 3 }] //www.zcool.com.cn/u/1912001
      },
      characterIntro: {},
      characterTitle: {
        qtpz_xie_huatiegan: '毁节求生',
        qtpz_xie_hetieshou: '五毒至尊',
        qtpz_xinyan: '儒雅书童',
        qtpz_supu: '鲜衣怒马',
        qtpz_liwenxiu: '诱敌深入',
        qtpz_hehongyao: '怨毒未尽',
        qtpz_huyidao: '辽东大侠',
        qtpz_yuanzhiyi: '圆性',
        qtpz_xiaxueyi: '金蛇郎君',
        qtpz_wuchendashi: '毒手药王',
        qtpz_wenqingqing: '千里劫饷',
        qtpz_liyuanzhi: '沅有芷兮',
        qtpz_wentailai: '奔雷手',
        qtpz_hongniangzi: '巾帼英雄',
        qtpz_diyun: '散财诱敌',
        qtpz_meiniansheng: '铁骨墨萼',
        qtpz_songxiance: '开国军师',
        qtpz_pingasi: '义抚胡嗣',
        qtpz_hufei: '雪山飞狐',
        qtpz_xieyanke: '摩天居士',
        qtpz_yuanchengzhi: '将门虎子',
        qtpz_tianguinong: '天龙门主',
        qtpz_aqing: '牧羊女侠',
        qtpz_kasili: '香香公主',
        qtpz_huatiegan: '嗜骨啖肉',
        qtpz_yuyutong: '金笛秀才',
        qtpz_ajiu: '末代公主',
        qtpz_chengbenzhi: '泼胆汉',
        qtpz_chenglingsu: '毒圣',
        qtpz_jyliyan: '制将军',
        qtpz_miaorenfeng: '金面佛',
        qtpz_haidafu: '饮鸠止渴',
        qtpz_zhuyoujian: '亡国之君',
        qtpz_wuzixu: '楚人投吴',
        qtpz_xuedaolaozhu: '血谷酣战',
        qtpz_huoqingtong: '翠羽黄衫',
        qtpz_dindian: '菊花剑客',
        qtpz_huoayi: '回疆勇士',
        qtpz_muzhuolun: '回部领袖',
        qtpz_wangchengen: '秉笔太监',
        qtpz_lizicheng: '闯王',
        qtpz_niujinxing: '大顺左辅',
        qtpz_zhangzhaozhong: '火手判官',
        qtpz_duoergun: '摄政王',
        qtpz_lintuisi: '荆州知府',
        qtpz_luobing: '鸳鸯刀'
      },
      perfectPair: {

        //"jyqxz_qtpz_genie":['jyqxz_qtpz_weizhuang'],
      }, skill: {
        //----------------------------------------其他篇章技能开始--------------------------------------------------------
        //邪花铁干  霸天20240622
        qtpz_beici: {
          mod: {
            cardUsable(card, player, num) {
              if (card.name == 'sha' && card.storage && card.storage.qtpz_beici) return Infinity;
            }
          },
          complexCard: true,
          ignoreMod: true,
          position: 'he',
          selectCard: [1, 2],
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          precontent() {
            const cardsx = event.result.cards;
            event.result.card = {
              name: 'sha',
              nature: 'stab',
              storage: { qtpz_beici: true }
            };
            player.discard(cardsx);
            event.parent.addCount = false;
            player.addTempSkill('qtpz_beici_off', 'phaseEnd');
          },
          subSkill: { off: { sub: true } },
          viewAs: {
            name: 'sha',
            nature: 'stab',
            storage: { qtpz_beici: true }
          },
          filterCard(card, player, event) {
            if (!lib.filter.cardDiscardable(card, player, event)) return false;
            const cards = ui.selected.cards;
            if (!cards.length) return true;
            const pos = get.position(card);
            if (cards.length == 1) {
              const pos2 = get.position(cards[0]);
              if (pos2 == 'e') return false;
              if (pos2 == 'h') return pos == 'h';
            }
            return true;
          },
          viewAsFilter(player) {
            if (!player.isPhaseUsing()) return false;
            if (player.hasSkill('qtpz_beici_off')) return false;
            if (
            player.countCards('h', function (i) {
              return lib.filter.cardDiscardable(i, player);
            }) >= 2)

            return true;
            if (
            player.countCards('e', function (i) {
              return lib.filter.cardDiscardable(i, player);
            }) >= 1)

            return true;
            return false;
          },
          filterOk() {
            const cards = ui.selected.cards;
            if (!cards.length) return false;
            if (cards.length == 1 && get.position(cards[0]) == 'e') return true;
            return cards.length == 2;
          },
          check(card) {
            const val = get.value(card);
            return 5 - val;
          },
          ai: {
            respondSha: true,
            skillTagFilter(player, tag, arg) {
              if (arg != 'use') return false;
              return lib.skill.qtpz_beici.viewAsFilter(player);
            }
          }
        },
        qtpz_quxi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: ['qtpz_quxi_lose', 'qtpz_quxi_recover', 'qtpz_quxi_discard'],
          subSkill: {
            lose: {
              trigger: {
                player: 'loseAfter',
                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter']
              },
              forced: true,
              getIndex(event, player, triggername) {
                const evt = event.getl(player);
                if (evt && evt.player === player && evt.es) return evt.es.length;
                return false;
              },
              filter(event, player) {
                return player.isDamaged();
              },
              content() {
                event.name = 'qtpz_quxi';
                player.recover();
              }
            },
            recover: {
              trigger: { player: 'recoverAfter' },
              forced: true,
              getIndex(event, player, triggername) {
                return Math.min(event.num, 9) || 1;
              },
              filter(event, player) {
                const evt = event.getParent('qtpz_quxi');
                if (evt && evt.name == 'qtpz_quxi' && evt.player == player) return false;
                return (
                  player.countCards('he', function (i) {
                    return lib.filter.cardDiscardable(i, player, 'qtpz_quxi');
                  }) >= 2);

              },
              content() {
                event.name = 'qtpz_quxi';
                player.chooseToDiscard(2, 'he', true);
              }
            },
            discard: {
              trigger: {
                player: 'loseAfter',
                global: 'loseAsyncAfter'
              },
              filter(event, player) {
                const evt2 = event.getParent('qtpz_quxi');
                if (evt2 && evt2.name == 'qtpz_quxi' && evt2.player == player) return false;
                if (event.type != 'discard' || event.getlx === false) return false;
                const evt = event.getl(player);
                if (!evt || !evt.cards2) return false;
                return evt.cards2.length >= 2;
              },
              forced: true,
              content() {
                event.name = 'qtpz_quxi';
                if (['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].some((i) => player.hasEmptySlot(i))) {
                  const equip = get.cardPile(function (card) {
                    if (get.type(card) != 'equip') return false;
                    if (get.cardtag(card, 'gifts')) return false;
                    if (!player.canUse(card, player)) return false;
                    return player.canEquip(card);
                  });
                  if (equip) {
                    player.useCard(equip, player, false);
                  } else {
                    game.log('没有符合', player, '的装备牌了!');
                  }
                } else {
                  const equip = get.cardPile(function (card) {
                    if (get.type(card) != 'equip') return false;
                    if (get.cardtag(card, 'gifts')) return false;
                    if (!player.canUse(card, player)) return false;
                    return player.canEquip(card, true);
                  });
                  if (equip) {
                    player.useCard(equip, player, false);
                  } else {
                    game.log('没有符合', player, '的装备牌了!');
                  }
                }
              }
            }
          }
        },
        qtpz_qiesi: {
          subSkill: {
            remove: {
              trigger: {
                player: ['logSkillBegin', 'useSkillBegin']
              },
              forced: true,
              popup: false,
              filter(event, player) {
                const additionalSkills = player.additionalSkills.qtpz_qiesi_remove || [];
                return additionalSkills.includes(event.skill);
              },
              content() {
                player.removeAdditionalSkills('qtpz_qiesi_remove', trigger.skill);
              }
            }
          },
          juexingji: true,
          derivation: ['qtpz_quxi', 'qtpz_beici'],
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'xiamingNoSkill'
          },
          filter(event, player) {
            return !player.storage.qtpz_qiesi;
          },
          forced: true,
          content() {
            'step 0';
            player.changeGroup('jy_xie');
            player.awakenSkill(event.name);
            player.loseMaxHp(2);
            'step 1';
            player.
            chooseTarget([1, 2], '是否分配2点邪属性伤害给不同目标', function (card, player, target) {
              return target != player;
            }).
            set('ai', function (target) {
              return get.damageEffect(target, _status.event.player, _status.event.player, 'jy_du');
            });
            'step 2';
            if (result.targets?.length) {
              result.targets.filter((i) => i.damage('jy_du'));
            }
            'step 3';
            if (!_status.characterlist) {
              lib.skill.qtpz_xiaming.initList();
            }
            _status.characterlist.randomSort();
            const owned = [];
            for (const namex of _status.characterlist) {
              const info = lib.character[namex];
              const skillss = info[3].filter(function (i) {
                if (!lib.skill[i]) return false;
                if (lib.skill[i].juexingji) return false;
                if (lib.skill[i].zhuSkill) return false;
                if (lib.skill[i].dutySkill) return false;
                if (lib.skill[i].forced) return false;
                if (lib.skill[i].jy_bangpai) return false;
                const info2 = get.translation(i);
                if (!info2.includes('邪')) return false;
                return true;
              });
              if (skillss.length) {
                owned.addArray(skillss);
              }
            }
            player.addSkill('qtpz_qiesi_remove');
            player.addAdditionalSkills('qtpz_qiesi_remove', owned.randomGets(3));
            player.addSkills('qtpz_beici');
            player.addSkills('qtpz_quxi');
          },
          ai: {
            combo: 'qtpz_xiaming'
          }
        },
        qtpz_xiaming: {
          group: ['qtpz_xiaming_remove', 'qtpz_xiaming_change'],
          subSkill: {
            remove: {
              trigger: {
                player: ['logSkillBegin', 'useSkillBegin']
              },
              forced: true,
              popup: false,
              filter(event, player) {
                const name = player.storage.qtpz_xiaming.name;
                if (!name) return false;
                const map = player.storage.qtpz_xiaming.owned[name];
                return map && map.includes(event.skill);
              },
              content() {
                const namex = player.storage.qtpz_xiaming.name;
                player.storage.qtpz_xiaming.owned[namex].remove(trigger.skill);
                player.removeAdditionalSkills('qtpz_xiaming', trigger.skill);
                if (!player.storage.qtpz_xiaming.owned[namex].length) {
                  if (player.isDamaged()) {
                    player.recover();
                  }
                  delete player.storage.qtpz_xiaming.owned[namex];
                  player.setAvatar(player.name, player.name);
                }
                if (!Object.keys(player.storage.qtpz_xiaming.owned).length) {
                  event.trigger('xiamingNoSkill');
                }
              }
            },
            change: {
              trigger: {
                player: ['phaseZhunbeiBegin', 'damageEnd', 'phaseJieshuBegin']
              },
              filter(event, player) {
                const name = player.storage.qtpz_xiaming.name;
                if (!name) return false;
                const map = player.storage.qtpz_xiaming.owned;
                return Object.keys(map).remove(name).length;
              },
              content() {
                'step 0';
                player.
                chooseButton(
                  [
                  '选择1张武将牌获得技能',
                  [
                  Object.keys(player.storage.qtpz_xiaming.owned).remove(player.storage.qtpz_xiaming.name),
                  function (item, type, position, noclick, node) {
                    return lib.skill.qtpz_xiaming.$createButton(item, type, position, noclick, node);
                  }]],



                  1,
                  true
                ).
                set('ai', function (button) {
                  const name = button.link;
                  const info = lib.character[name];
                  const skills = player.storage.qtpz_xiaming.owned[name];
                  var eff = 0.2;
                  for (var i of skills) {
                    eff += get.skillRank(i, 'in');
                  }
                  return eff;
                });
                'step 1';
                if (result.links?.length) {
                  const list = result.links;
                  player.storage.qtpz_xiaming.name = list[0];
                  player.addAdditionalSkills('qtpz_xiaming', player.storage.qtpz_xiaming.owned[list[0]]);
                  player.setAvatar(player.name, list[0]);
                }
              }
            }
          },
          initList() {
            var list = [];
            if (_status.connectMode) list = get.charactersOL();else
            {
              var list = [];
              for (var i in lib.character) {
                if (!lib.filter.characterDisabled2(i) && !lib.filter.characterDisabled(i)) list.push(i);
              }
            }
            game.countPlayer2(function (current) {
              list.remove(current.name);
              list.remove(current.name1);
              list.remove(current.name2);
            });
            _status.characterlist = list;
          },
          init(player, skill) {
            if (!player.storage[skill]) {
              player.storage[skill] = {
                owned: {}
              };
            }
            if (!_status.characterlist) {
              lib.skill.qtpz_xiaming.initList();
            }
            _status.characterlist.randomSort();
            const owned = [];
            for (const namex of _status.characterlist) {
              const info = lib.character[namex];
              const skillss = info[3].filter(function (i) {
                if (!lib.skill[i]) return false;
                if (lib.skill[i].juexingji) return false;
                if (lib.skill[i].zhuSkill) return false;
                if (lib.skill[i].dutySkill) return false;
                if (lib.skill[i].forced) return false;
                if (lib.skill[i].jy_bangpai) return false;
                const info2 = get.translation(i);
                if (!info2.includes('侠')) return false;
                return true;
              });
              if (skillss.length) {
                owned.add(namex);
              }
            }
            const namexx = owned.randomGets(3);
            for (const namex of namexx) {
              const info = lib.character[namex];
              const skillss = info[3].filter(function (i) {
                if (!lib.skill[i]) return false;
                if (lib.skill[i].juexingji) return false;
                if (lib.skill[i].zhuSkill) return false;
                if (lib.skill[i].dutySkill) return false;
                if (lib.skill[i].forced) return false;
                if (lib.skill[i].jy_bangpai) return false;
                const info2 = get.translation(i);
                //if(!info2.includes('侠')) return false;
                return true;
              });
              player.storage[skill].owned[namex] = skillss;
            }
          },
          content() {
            'step 0';
            const list2 = lib.group.slice(0);
            const vcard = [];
            for (var i of list2) {
              if (i != 'jy_xie' && i != 'jy_jue' && i != 'shen') {
                if (lib.card['group_' + i]) vcard.push(['', '', 'group_' + i]);
              }
            }
            const bolDialog = ['请选择替换的势力', [vcard, 'vcard']];
            player.chooseButton(bolDialog, true).set('ai', function (button) {
              return Math.random();
            });
            'step 1';
            if (result.links?.length) {
              player.changeGroup(result.links[0][2].slice(6));
            }
            'step 2';
            player.
            chooseButton(
              [
              '选择1张武将牌获得技能',
              [
              Object.keys(player.storage.qtpz_xiaming.owned),
              function (item, type, position, noclick, node) {
                return lib.skill.qtpz_xiaming.$createButton(item, type, position, noclick, node);
              }]],



              1,
              true
            ).
            set('ai', function (button) {
              const name = button.link;
              const info = lib.character[name];
              const skills = player.storage.qtpz_xiaming.owned[name];
              var eff = 0.2;
              for (var i of skills) {
                eff += get.skillRank(i, 'in');
              }
              return eff;
            });
            'step 3';
            if (result.links?.length) {
              const list = result.links;
              player.storage.qtpz_xiaming.name = list[0];
              player.addAdditionalSkills('qtpz_xiaming', player.storage.qtpz_xiaming.owned[list[0]]);
              player.setAvatar(player.name, list[0]);
            }
          },
          $createButton(item, type, position, noclick, node) {
            node = ui.create.buttonPresets.character(item, 'character', position, noclick);
            const info = lib.character[item];
            const skills = _status.event.player.storage.qtpz_xiaming.owned[item];
            if (skills.length) {
              const skillstr = skills.map((i) => `[${get.translation(i)}]`).join('<br>');
              const skillnode = ui.create.caption(`<div class="text" data-nature=${get.groupnature(info[1], 'raw')}m style="font-family: ${lib.config.name_font || 'xinwei'},xinwei">${skillstr}</div>`, node);
              skillnode.style.left = '2px';
              skillnode.style.bottom = '2px';
            }
            node._customintro = function (uiintro, evt) {
              const character = node.link,
                characterInfo = get.character(node.link);
              let capt = get.translation(character);
              uiintro.add(capt);
              if (lib.characterTitle[node.link]) {
                uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
              }
              for (var i = 0; i < skills.length; i++) {
                if (lib.translate[skills[i] + '_info']) {
                  let translation = lib.translate[skills[i] + '_ab'] || get.translation(skills[i]).slice(0, 2);
                  if (lib.skill[skills[i]] && lib.skill[skills[i]].nobracket) {
                    uiintro.add('<div><div class="skilln">' + get.translation(skills[i]) + '</div><div>' + get.skillInfoTranslation(skills[i]) + '</div></div>');
                  } else {
                    uiintro.add('<div><div class="skill">【' + translation + '】</div><div>' + get.skillInfoTranslation(skills[i]) + '</div></div>');
                  }
                  if (lib.translate[skills[i] + '_append']) {
                    uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills[i] + '_append'] + '</div>');
                  }
                }
              }
            };
            return node;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'showCharacterAfter'
          },
          forced: true,
          hiddenSkill: true,
          filter(event, player) {
            //return event.toShow.includes("jin_zhangchunhua")
            return Object.keys(player.storage.qtpz_xiaming.owned).length;
          }
        },
        //阿绣 霸天 20240608
        qtpz_junxiu: {
          enable: 'phaseUse',
          filterCard: true,
          discard: false,
          lose: false,
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:4',
          complexSelect: true,
          check(card) {
            const player = _status.event.player;
            const color = get.color(card, false);
            const color2 = color == 'red' ? 'black' : 'red';
            const count = player.countCards('h', { color: color });
            const getCount = function (target) {
              return count - target.countCards('h', { color: color2 });
            };
            const players = game.filterPlayer((i) => i != player && get.attitude(player, i) > 0);
            if (!players.length) return -1;
            players.sort(function (a, b) {
              return getCount(b) - getCount(a);
            });
            return getCount(players[0]);
          },
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          filterTarget(card, player, target) {
            return target != player;
          },
          content() {
            'step 0';
            const color = get.color(cards[0], false);
            event.color2 = color == 'red' ? 'black' : 'red';
            event.togive = player.getCards('h', { color: color });
            player.give(event.togive, target);
            'step 1';
            event.togive2 = target.getCards('h', { color: event.color2 });
            if (event.togive2.length <= event.togive.length) {
              event._result = { bool: true, cards: event.togive2 };
            } else {
              const next = target.chooseCard(true, event.togive.length, `qtpz_junxiu:选择交给${get.translation(player)}的${get.translation(event.color2)}手牌`, function (card) {
                return get.color(card, false) == _status.event.color2;
              });
              next.set('color2', event.color2);
              next.set('ai', function (card) {
                const player = _status.event.player;
                const source = _status.event.parent.player;
                return 10 - get.value(card);
              });
            }
            'step 2';
            if (result.cards?.length) {
              if (result.cards?.length) {
                target.give(result.cards, player);
              }
              const tocount = event.togive.length - result.cards.length;
              if (tocount > 0) {
                const togains = get.randomCards(tocount, function (cardx) {
                  return get.color(cardx, false) == event.color2;
                });
                if (togains && togains.length) {
                  player.gain('draw', togains);
                }
              }
            }
          },
          ai: {
            order: 14,
            result: {
              target(player, target) {
                const att = get.attitude(player, target);
                const color = get.color(ui.selected.cards[0], false);
                const count = player.countCards('h', { color: color });
                const color2 = color == 'red' ? 'black' : 'red';
                if (att > 0) {
                  return count - target.countCards('h', { color: color2 });
                }
                return 0;
              }
            }
          }
        },
        qtpz_pangqiao: {
          subSkill: {
            useCard: {
              mark: true,
              intro: { content: '使用非装备牌指定目标时,可以观看当前环境中花色和点数均与此牌一致的牌名()限基本牌和普通锦囊),其可将此牌改为这些牌名中的一种牌(若以此法将杀转换成其他牌,此杀不计入本阶段次数)' },
              trigger: { player: 'useCard1' },
              firstDo: true,
              forced: true,
              popup: false,
              charlotte: true,
              filter(event, player) {
                if (get.type(event.card) == 'equip') return false;
                if (!event.targets || !event.targets.length) return false;
                const number = event.card.number;
                const suit = event.card.suit;
                return get.cardPile(function (i) {
                  if (i.name == event.card.name) return false;
                  const type = get.type(i);
                  if (type != 'trick' && type != 'basic') return false;
                  const number2 = i.number;
                  const suit2 = i.suit;
                  if (number != number2) return false;
                  if (suit != suit2) return false;
                  if (
                  event.targets.some(function (t) {
                    return !player.canUse(i, t, false);
                  }))

                  return false;
                  return true;
                });
              },
              content() {
                'step 0';
                const number = trigger.card.number;
                const suit = trigger.card.suit;
                const cardPile = get.randomCards(999, function (i) {
                  if (i.name == trigger.card.name) return false;
                  const type = get.type(i);
                  if (type != 'trick' && type != 'basic') return false;
                  const number2 = i.number;
                  const suit2 = i.suit;
                  if (number != number2) return false;
                  if (suit != suit2) return false;
                  if (
                  trigger.targets.some(function (t) {
                    return !player.canUse(i, t, false);
                  }))

                  return false;
                  return true;
                });
                if (cardPile && cardPile.length) {
                  const cardResult = trigger.targets.reduce(function (num, target) {
                    return num + get.effect(target, trigger.card, player, player);
                  }, 0);
                  const next = player.chooseCardButton('旁敲:是否将此牌改为这些牌名中的一种牌？(若以此法将【杀】转换成其他牌,此杀不计入本阶段次数)', cardPile);
                  next.set('ai', function (button) {
                    const evt = _status.event;
                    const player = evt.player;
                    const cardResult = evt.cardResult;
                    const targetsx = evt.targetsx;
                    const newResult =
                    targetsx.reduce(function (num, target) {
                      return num + get.effect(target, button.link, player, player);
                    }, 0) - cardResult;
                    return newResult;
                  });
                  next.set('cardResult', cardResult);
                  next.set('targetsx', trigger.targets);
                } else {
                  event.finish();
                }
                'step 1';
                if (result.bool) {
                  const oldCard = trigger.card;
                  if (oldCard.name == 'sha') {
                    if (trigger.addCount !== false) {
                      trigger.addCount = false;
                      const stat = player.getStat();
                      if (stat && stat.card && stat.card.sha) stat.card.sha--;
                    }
                  }
                  const resultCard = result.links[0];
                  trigger.card.name = resultCard.name;
                  if (resultCard.nature) {
                    trigger.card.nature = resultCard.nature;
                  }
                  game.log(oldCard, '改为了', trigger.card);
                }
              }
            },
            mark: {
              charlotte: true,
              trigger: { player: 'phaseUseBegin' },
              mark: true,
              intro: { content: '下个出牌阶段,使用非装备牌指定目标时,可以观看当前环境中花色和点数均与此牌一致的牌名(限基本牌和普通锦囊),其可将此牌改为这些牌名中的一种牌(若以此法将【杀】转换成其他牌,此杀不计入本阶段次数)' },
              forced: true,
              popup: false,
              content() {
                player.addTempSkill('qtpz_pangqiao_useCard', { player: 'phaseUseEnd' });
                player.removeSkill('qtpz_pangqiao_mark');
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: { player: 'phaseZhunbeiBegin' },
          cost() {
            'step 0';
            player.
            chooseTarget(get.prompt2('qtpz_pangqiao'), function (card, player, target) {
              //return target!=player;//只能对其他角色发动]旁敲]
              return true; //可以对自己发动[旁敲]
            }).
            set('ai', function (target) {
              const player = _status.event.player;
              return get.attitude(player, target);
            });
            'step 1';
            event.result = result;
          },
          content() {
            event.targets[0].addSkill('qtpz_pangqiao_mark');
          }
        },
        //绝狄云  棉花糖20240512
        qtpz_yinian: {
          audio: 'ext:金庸群侠传/peiyin:6',
          trigger: {
            global: 'gameStart',
            player: ['phaseBegin', 'enterGame']
          },
          forced: true,
          _priority: 1,
          mark: true,
          marktext: '☯',
          intro: {
            content(storage, player) {
              let group = player.group;
              if (['shen', 'jy_jue'].includes(group)) return '阳:摸牌阶段,你可以少摸一张牌,对一名角色发动一次〖行侠〗.';else
              return '阴:本回合内视为拥有〖魔刀〗,使用杀时可以弃置任意张牌并额外指定等量目标.';
            }
          },
          async zhuanhuanji(player, skill) {
            let group = player.group;
            if (['shen', 'jy_jue'].includes(group)) {
              await player.changeGroup('jy_xie', true, true);
              lib.skill[skill].setAvatarDiyun(player, 'qtpz_jue_diyun', 'qtpz_jue_diyun_xie');
            } else {
              await player.changeGroup('jy_jue', true, true);
              player.setAvatar('qtpz_jue_diyun', 'qtpz_jue_diyun');
            }
            lib.skill[skill].getGroupSklill(player, skill);
          },
          async setAvatarDiyun(player, name, name2, video, fakeme) {
            let node;
            if (player.name2 == name) {
              node = player.node.avatar2;
              player.smoothAvatar(true, video);
            } else if (player.name == name) {
              node = player.node.avatar;
              player.smoothAvatar(false, video);
            }
            if (node) {
              node.setBackgroundImage(`extension/金庸群侠传/character/yuanban/qtpz_jue_diyun_xie.jpg`);
              if (player == game.me && ui.fakeme && fakeme !== false) {
                ui.fakeme.style.backgroundImage = node.style.backgroundImage;
              }
              if (video != false) {
                game.addVideo('setAvatar', player, [name, name2]);
              }
            }
            game.broadcast(
              (player, name, name2) => {
                setAvatarDiyun(name, name2, false);
              },
              player,
              name,
              name2
            );
          },
          async getGroupSklill(player, skill) {
            let group = player.group;
            if (['shen', 'jy_jue'].includes(group)) {
              player.addTempSkill('qtpz_yinian_jue', { player: 'phaseBegin' });
            } else {
              player.addTempSkill('qtpz_yinian_xie', { player: 'phaseBegin' });
              player.addTempSkills('jy_xuedaomen');
            }
          },
          filter(event, player, name) {
            if (name == 'gameStart') return game.roundNumber == 0;
            return true;
          },
          async content(event, trigger, player) {
            if (event.triggername == 'gameStart') {
              let list = ['jy_jue', 'jy_xie'];
              const { control } = await player.
              chooseControl(list).
              set('ai', () => {
                return list.randomGet();
              }).
              set('prompt', '请选择切换你的势力').
              forResult();

              if (control) {
                await player.changeGroup(control, true, true);
                if (player.group == 'jy_xie') lib.skill[event.name].setAvatarDiyun(player, 'qtpz_jue_diyun', 'qtpz_jue_diyun_xie');
              }
            } else {
              player.changeZhuanhuanji(event.name);
            }
          },
          subSkill: {
            jue: {
              trigger: {
                player: 'phaseDrawBegin'
              },
              _priority: 1,
              prompt: '是否少摸一张牌,对一名你选择的角色发动行侠？',
              filter(event, player) {
                return !event.numFixed && !event.cancelled;
              },
              check(event, player) {
                return player.getFriends().length;
              },
              async content(event, trigger, player) {
                trigger.num -= 1;
                const { targets } = await player.
                chooseTarget(1, true, '对一名你选择的角色发动行侠', (card, player, target) => {
                  return game.hasPlayer(function (current) {
                    return current != target && current.inRange(target);
                  });
                }).
                set('ai', (target) => {
                  return get.attitude(player, target);
                }).
                forResult();

                if (targets) {
                  targets[0].draw(
                    game.countPlayer(function (current) {
                      return current != targets[0] && current.inRange(targets[0]);
                    })
                  );
                }
              }
            },
            xie: {
              trigger: {
                player: 'useCard2'
              },
              _priority: 1,
              force: true,
              filter(event, player) {
                if (!event.targets || !event.targets.length) return false;
                if (
                !game.hasPlayer((current) => {
                  return !event.targets.includes(current) && player.canUse(event.card, current);
                }))

                return false;
                return event.card && event.card.name == 'sha';
              },
              async content(event, trigger, player) {
                const { targets, cards } = await player.
                chooseCardTarget({
                  position: 'he',
                  filterCard: lib.filter.cardDiscardable,
                  selectCard: [
                  1,
                  game.countPlayer((current) => {
                    return !trigger.targets.includes(current) && player.canUse(trigger.card, current);
                  })],


                  filterTarget(card, player, target) {
                    return !trigger.targets.includes(target) && player.canUse({ name: 'sha' }, target);
                  },
                  selectTarget() {
                    return ui.selected.cards.length;
                  },
                  ai1(card) {
                    return 6 - get.value(card);
                  },
                  ai2(target) {
                    return get.effect(target, trigger.cards[0], player, player);
                  },
                  prompt: `弃置任意张牌并选择等量角色成为${get.translation(trigger.cards[0])}的目标`
                }).
                forResult();
                if (targets && cards) {
                  player.loseToDiscardpile(cards);
                  trigger.targets.addArray(targets);
                  game.log(targets, `成为${get.translation(trigger.cards[0])}的目标`);
                }
              }
            }
          }
        },
        qtpz_ruzhao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseEnd'
          },
          prompt: '是否弃置一半手牌转换一念状态？',
          filter(event, player) {
            return player.countCards('h');
          },
          group: 'qtpz_ruzhao_lose',
          async content(event, trigger, player) {
            player.chooseToDiscard('h', Math.ceil(player.countCards('h') / 2), true);
            player.changeZhuanhuanji('qtpz_yinian');
          },
          subSkill: {
            lose: {
              trigger: {
                player: 'loseAfter',
                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter']
              },
              forced: true,
              _priority: 3,
              filter(event, player) {
                if (player.countCards('h')) return false;
                const evt = event.getl(player);
                return evt && evt.player == player && evt.hs && evt.hs.length;
              },
              async content(event, trigger, player) {
                let num = player.maxHp + player.hujia;
                player.drawTo(num);
              },
              ai: {
                threaten: 0.8,
                effect: {
                  target(card) {
                    if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                  }
                },
                noh: true,
                skillTagFilter(player, tag) {
                  if (tag == 'noh') {
                    if (player.countCards('h') != 1) return false;
                  }
                }
              }
            }
          }
        },
        qtpz_xueren: {
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            source: 'damageSource'
          },
          forced: true,
          _priority: 1,
          filter(event, player) {
            if (['shen', 'jy_jue'].includes(player.group) && !player.hujia) return false;
            if (['jy_xie'].includes(player.group) && player.hujia >= 5) return false;
            return !event.cancelled && !event.nunFixed;
          },
          async content(event, trigger, player) {
            let group = player.group;
            if (['shen', 'jy_jue'].includes(group)) {
              const { targets } = await player.
              chooseTarget(get.prompt2('qtpz_xueren'), player.hujia == 1 ? 1 : [1, Math.min(game.players.length, player.hujia)], (card, player, target) => {
                return target.hasEnabledSlot();
              }).
              set('ai', (target) => get.attitude(_status.event.player, target)).
              forResult();

              if (targets) {
                player.changeHujia(-player.hujia);
                for await (let target of targets) {
                  let list = [];
                  for (var i = 1; i <= 5; i++) {
                    if (target.hasEnabledSlot(i)) list.push(i);
                  }
                  let num = list.randomGet();
                  let cards = get.cardPile((cardx) => get.subtype(cardx) == `equip${num}`);
                  if (cards) target.equip(cards);
                }
              }
            } else {
              player.changeHujia(1);
            }
          }
        },
        //何铁手 霸天 - 20240424
        qtpz_wugou: {
          mod: {
            cardname(card, player, name) {
              const sub = lib.card[card.name].subtype;
              if (sub == 'equip1') return 'sha';
            },
            cardnature(card, player) {
              const sub = lib.card[card.name].subtype;
              if (sub == 'equip1') return 'jy_du';
            }
          },
          init(player, skill) {
            if (!player.storage[skill] && player.hasEnabledSlot('equip1')) {
              player.storage[skill] = true;
              player.disableEquip('equip1');
            }
          },
          onremove(player, skill) {
            if (player.storage[skill] && player.hasDisabledSlot('equip1')) {
              player.storage[skill] = false;
              player.enableEquip('equip1');
            }
          },
          subSkill: {
            buff1: {
              forced: true,
              popup: false,
              firstDo: true,
              charlotte: true,
              nopop: true,
              mark: true,
              mod: {
                attackRangeBase(player, num) {
                  return 1;
                }
              },
              intro: {
                content: '攻击范围1,使用【杀】不能被抵消'
              },
              shaRelated: true,
              trigger: {
                player: 'useCardToPlayered'
              },
              content() {
                trigger.parent.directHit.add(trigger.target);
              },
              ai: {
                directHit_ai: true,
                skillTagFilter(player, tag, arg) {
                  if (arg && arg.card.name != 'sha') return false;
                }
              }
            },
            buff2: {
              forced: true,
              popup: false,
              firstDo: true,
              charlotte: true,
              nopop: true,
              trigger: {
                source: 'damageSource'
              },
              mark: true,
              forced: true,
              filter(event, player) {
                if (!event.player.isAlive()) return false;
                if (event._notrigger.includes(event.player)) return false;
                return event.card && event.card.name == 'sha' && event.player.countGainableCards(player, 'e');
              },
              content() {
                player.gainPlayerCard('e', trigger.player).set('target', trigger.player).set('complexSelect', false).set('ai', lib.card.shunshou.ai.button);
              },
              mod: {
                attackRangeBase(player, num) {
                  return 2;
                }
              },
              intro: {
                content: '攻击范围2,使用【杀】造成伤害后可以获得目标一张装备牌'
              }
            },
            buff3: {
              popup: false,
              charlotte: true,
              nopop: true,
              trigger: {
                source: 'damageSource'
              },
              mark: true,
              prompt2: '是否清除目标被下蛊的记录',
              filter(event, player) {
                if (!event.player.isAlive()) return false;
                if (event._notrigger.includes(event.player)) return false;
                return event.card && event.card.name == 'sha' && ['qtpz_hts_dushe', 'qtpz_hts_xiezi', 'qtpz_hts_wugong', 'qtpz_hts_chanchu', 'qtpz_hts_bihu'].some((i) => event.player.hasSkill(i) && !player.hasMark(i));
              },
              content() {
                const mark = ['qtpz_hts_dushe', 'qtpz_hts_xiezi', 'qtpz_hts_wugong', 'qtpz_hts_chanchu', 'qtpz_hts_bihu'].filter((i) => trigger.player.hasSkill(i) && !player.hasMark(i))[0];
                trigger.player.removeSkill(mark);
                player.addMark(mark, 1, false);
              },
              mod: {
                attackRangeBase(player, num) {
                  return 3;
                }
              },
              intro: {
                content: '攻击范围3,使用【杀】造成伤害后可以清除目标被下蛊的记录'
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseUseBegin'
          },
          forced: true,
          content() {
            'step 0';
            const list = [
            [1, '攻击范围1,使用【杀】不能被抵消'],
            [2, '攻击范围2,使用【杀】造成伤害后可以获得目标一张装备牌'],
            [3, '攻击范围3,使用【杀】造成伤害后可以清除目标被下蛊的记录']];


            const next = player.chooseButton(['【蜈钩】请选择本回合内你的攻击范围和技能', [list, 'textbutton']]);
            next.set('forced', true);
            next.set('selectButton', [1, 1]);
            next.set('filterButton', function (button) {
              return true;
            });
            next.set('ai', function (button) {
              return Math.random() > 0.5 ? 1 : 2;
            });
            'step 1';
            player.addTempSkill('qtpz_wugou_buff' + result.links[0]);
          }
        },
        qtpz_wudu: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:9',
          init(player, skill) {
            if (!player.storage[skill]) {
              player.storage[skill] = true;
              player.addMark('qtpz_hts_dushe', 1, false);
              player.addMark('qtpz_hts_xiezi', 1, false);
              player.addMark('qtpz_hts_wugong', 1, false);
              player.addMark('qtpz_hts_chanchu', 1, false);
              player.addMark('qtpz_hts_bihu', 1, false);
            }
          },
          onremove(player, skill) {},
          content() {
            'step 0';
            const gus = ['qtpz_hts_dushe', 'qtpz_hts_xiezi', 'qtpz_hts_wugong', 'qtpz_hts_chanchu', 'qtpz_hts_bihu'];
            gus.forEach(function (i) {
              if (!player.hasMark(i)) {
                const target = game.findPlayer(function (targetx) {
                  return targetx.hasSkill(i);
                });
                if (target) {
                  target.removeSkill(i);
                  player.addMark(i, 1, false);
                }
              }
            });
            'step 1';
            event.gusMark = ['qtpz_hts_dushe', 'qtpz_hts_xiezi', 'qtpz_hts_wugong', 'qtpz_hts_chanchu', 'qtpz_hts_bihu'].filter((i) => player.hasMark(i));
            'step 2';
            if (event.gusMark.length) {
              event.guToGive = event.gusMark.shift();
              const filterTarget = function (card, player, target) {
                if (target.storage[event.guToGive + 'Ed']) return false;
                return target != player && !['qtpz_hts_dushe', 'qtpz_hts_xiezi', 'qtpz_hts_wugong', 'qtpz_hts_chanchu', 'qtpz_hts_bihu'].some((i) => target.hasSkill(i));
              };
              if (!game.hasPlayer((target) => filterTarget(null, player, target))) {
                event.redo();
                return;
              }
              player.chooseTarget('是否令一名其他角色获得[' + get.translation(event.guToGive) + ']?', filterTarget).set('ai', function (target) {
                return -get.attitude(player, target);
              });
            } else event.finish();
            'step 3';
            if (result.targets?.length) {
              player.line(result.targets);
              result.targets[0].storage[event.guToGive + 'Ed'] = true;
              result.targets[0].addTempSkill(event.guToGive, { player: 'die' });
              player.removeMark(event.guToGive, 1, false);
              player.unmarkSkill(event.guToGive);
            }
            event.goto(2);
          },
          ai: {
            order: 0.5,
            result: {
              player(player) {
                return 1;
              }
            }
          }
        },
        qtpz_hts_dushe: {
          mark: true,
          intro: {
            //content:"info",
            content: '拥有此蛊的角色成为【毒杀】、毒药牌的目标后,随机弃置一张牌.<br><img style=width:165px src=extension/金庸群侠传/image/avatar/hts_dushe.jpg>'
          },
          forced: true,
          popup: false,
          firstDo: true,
          charlotte: true,
          nopop: true,
          audio: 'ext:金庸群侠传/peiyin:1',
          trigger: {
            target: 'useCardToTargeted'
          },
          filter(event, player) {
            if (!player.countCards('he')) return false;
            if (event.card.name == 'sha') {
              if (game.hasNature(event.card, 'jy_du')) return true;
            }
            var subtype = get.subtype(event.card);
            return subtype && subtype == 'jy_duyao';
          },
          content() {
            //game.log("qtpz_hts_dushecontent")
            const cards = player.getCards('he');
            if (cards.length) {
              const lose = cards.randomGet();
              player.lose(lose);
              player.$throw([lose], null, 'nobroadcast');
            }
          },
          ai: {
            effect: {
              target(card, player, target) {
                if (!target.countCards('he')) return;
                if (card.name == 'sha') {
                  if (game.hasNature(card, 'jy_du')) return [1, -1];
                }
                var subtype = get.subtype(card);
                if (subtype && subtype == 'jy_duyao') return [1, -1];
              }
            }
          }
        },
        qtpz_hts_xiezi: {
          mark: true,
          intro: {
            //content:"info",
            content: '所有角色对拥有此蛊的角色使用【杀】的额定次数+1.<br><img style=width:165px src=extension/金庸群侠传/image/avatar/hts_xiezi.jpg>'
          },
          forced: true,
          popup: false,
          firstDo: true,
          charlotte: true,
          nopop: true,
          audio: 'ext:金庸群侠传/peiyin:1',
          trigger: {
            target: 'useCardToTargeted'
          },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            //game.log("qtpz_hts_xiezi1")
            if (!event.player.isPhaseUsing()) return false;
            //game.log("qtpz_hts_xiezi2")
            const evt = event.parent;
            if (evt.addCount === false) return false;
            //game.log("qtpz_hts_xiezi3")
            if (player.hasSkill('qtpz_hts_xiezi_used')) return false;
            //game.log("qtpz_hts_xiezi4")
            return true;
          },
          content() {
            //game.log("qtpz_hts_xiezicontent")
            const evt = trigger.parent;
            if (evt.addCount !== false) {
              evt.addCount = false;
              const stat = trigger.player.getStat('card');
              if (stat.sha && stat.sha > 0) stat.sha--;
              player.addTempSkill('qtpz_hts_xiezi_used');
            }
          },
          global: 'qtpz_hts_xiezi_put',
          subSkill: {
            used: {
              charlotte: true,
              forced: true
            },
            put: {
              forced: true,
              popup: false,
              firstDo: true,
              charlotte: true,
              nopop: true,
              mod: {
                cardUsableTarget(card, player, target) {
                  if (!player.isPhaseUsing()) return;
                  if (!target.hasSkill('qtpz_hts_xiezi')) return;
                  return !target.hasSkill('qtpz_hts_xiezi_used');
                }
              }
            }
          }
        },
        qtpz_hts_wugong: {
          mark: true,
          intro: {
            content: '所有角色出牌阶段限一次,可视为对拥有此蛊的角色使用一张任意普通锦囊牌.<br><img style=width:165px src=extension/金庸群侠传/image/avatar/hts_wugong.jpg>'
            //content:"info",
          },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:1',
          popup: false,
          firstDo: true,
          charlotte: true,
          nopop: true,
          global: 'qtpz_hts_wugong_put',
          subSkill: {
            put: {
              usable: 1,
              enable: 'phaseUse',
              filter(event, player) {
                return game.hasPlayer(function (current) {
                  return (
                    current.hasSkill('qtpz_hts_wugong') &&
                    lib.inpile.some(function (name) {
                      if (get.type(name) != 'trick') return false;
                      return player.canUse({ name: name }, current);
                    }));

                });
              },
              filterTarget(card, player, current) {
                return (
                  current.hasSkill('qtpz_hts_wugong') &&
                  lib.inpile.some(function (name) {
                    if (get.type(name) != 'trick') return false;
                    return player.canUse({ name: name }, current);
                  }));

              },
              selectCard: -1,
              selectTarget() {
                const player = get.player();
                const count = game.countPlayer(function (current) {
                  return (
                    current.hasSkill('qtpz_hts_wugong') &&
                    lib.inpile.some(function (name) {
                      if (get.type(name) != 'trick') return false;
                      return player.canUse({ name: name }, current);
                    }));

                });
                return count == 1 ? [-1, -1] : [1, 1];
              },
              filterCard() {
                return false;
              },
              prompt: "视为对拥有'qtpz_hts_wugong'的角色使用一张任意普通锦囊牌.",
              delay: false,
              log: false,
              content() {
                'step 0';
                const libVcard = lib.inpile.
                filter(function (name) {
                  if (get.type(name) != 'trick') return false;
                  return player.canUse({ name: name }, target);
                }).
                map(function (name) {
                  return ['锦囊', '', name];
                });
                player.
                chooseButton(true, ['选择视为对' + get.translation(target) + '使用一张锦囊牌', [libVcard, 'vcard']]).
                set('filterButton', function (button) {
                  return true;
                }).
                set('ai', function (button) {
                  const player = get.player();
                  return get.effect(target, { name: button.link[2] }, player, player);
                });
                'step 1';
                if (result.links?.length) {
                  player.useCard({ name: result.links[0][2] }, target);
                }
              },
              ai: {
                order: 11,
                result: {
                  player(player) {
                    const used = game.hasPlayer(function (current) {
                      return (
                        current.hasSkill('qtpz_hts_wugong') &&
                        lib.inpile.some(function (name) {
                          if (get.type(name) != 'trick') return false;
                          return player.canUse({ name: name }, current) && get.effect(current, { name: name }, player, player) > 0;
                        }));

                    });
                    return used ? 1 : -1;
                  }
                }
              }
            }
          }
        },
        qtpz_hts_chanchu: {
          audio: 'ext:金庸群侠传/peiyin:1',
          trigger: {
            player: 'gainAfter'
          },
          forced: true,
          filter(event, player) {
            return player.countCards('h') > player.hp * 2;
          },
          content() {
            //game.log("qtpz_hts_chanchucontent")
            const num = player.countCards('h') - player.hp * 2;
            player.chooseToDiscard('h', true, num);
          },
          mark: true,
          intro: {
            //content:"info",
            content: '拥有此蛊的角色获得牌后,若手牌数大于2X,需将手牌弃置至2X张(X为其体力值).<br><img style=width:165px src=extension/金庸群侠传/image/avatar/hts_chanchu.jpg>'
          },
          popup: false,
          firstDo: true,
          charlotte: true,
          nopop: true
        },
        qtpz_hts_bihu: {
          mark: true,
          intro: {
            //content:"info",
            content: '拥有此蛊的其他角色每回合首次成为♥️️非装备牌的目标后,失去一点体力.<br><img style=width:165px src=extension/金庸群侠传/image/avatar/hts_bihu.jpg>'
          },
          forced: true,
          popup: false,
          firstDo: true,
          charlotte: true,
          nopop: true,
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:1',
          trigger: {
            target: 'useCardToTargeted'
          },
          filter(event, player) {
            if (get.type(event.card) == 'equip') return false;
            if (event.card.suit != 'heart') return false;
            return true;
          },
          content() {
            //game.log("qtpz_hts_bihucontent")
            player.loseHp();
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                const sata = target.getStat('triggerSkill');
                if (sata && sata.qtpz_hts_bihu) return;
                if (get.type(card) == 'equip') return;
                if (card.suit != 'heart') return;
                if (get.effect(target, { name: 'losehp' }, target, player) <= 0) return [1, -2];
              }
            }
          }
        },
        //戚长发 霸天230731
        qtpz_hengjiang2: {
          mod: {
            cardEnabled2(card, player) {
              if (get.itemtype(card) == 'card' && card.hasGaintag('qtpz_hengjiang')) return false;
            }
          },
          onremove(player) {
            player.removeGaintag('qtpz_hengjiang');
          },
          charlotte: true,
          mark: true,
          forced: true,
          popup: false,
          nopop: true,
          audio: 'qtpz_hengjiang',
          trigger: {
            player: 'loseEnd'
          },
          content() {
            var cards = player.getCards('h', function (card) {
              return card.hasGaintag('qtpz_hengjiang');
            });
            if (!cards.length) {
              player.removeSkill('qtpz_hengjiang2');
            }
          }
        },
        qtpz_hengjiang: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filterTarget(card, player, target) {
            if (player == target) return false;
            return !target.isLinked();
          },
          filter(event, player) {
            if (
            !game.hasPlayer(function (target) {
              if (player == target) return false;
              return !target.isLinked();
            }))

            return false;
            return (
              player.countCards('he', function (card) {
                if (card.suit != 'spade') return false;
                return lib.filter.cardDiscardable(card, player, event);
              }) > 0);

          },
          filterCard(card, player, event) {
            if (card.suit != 'spade') return false;
            return lib.filter.cardDiscardable(card, player, event);
          },
          position: 'he',
          selectTarget: [1, 3],
          check(card) {
            return 6 - get.value(card);
          },
          content() {
            'step 0';
            if (!target.isLinked()) target.link();
            var getCards = target.getCards('h', function (card) {
              return !card.hasGaintag('qtpz_hengjiang');
            });
            var num = Math.min(getCards.length, targets.length);
            if (num > 0) {
              var dis = getCards.randomGets(num);
              target.addGaintag(dis, 'qtpz_hengjiang');
              target.addSkill('qtpz_hengjiang2');
            }
          },
          ai: {
            result: {
              target: -1
            },
            threaten: 1.2,
            order: 3
          }
        },
        qtpz_juelu2: {
          audio: 'qtpz_juelu',
          trigger: {
            global: 'linkBefore'
          },
          forced: true,
          popup: false,
          filter(event, player) {
            return event.player.isLinked();
          },
          content() {
            trigger.set('qtpz_juelu', true);
          }
        },
        qtpz_juelu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'linkEnd'
          },
          group: 'qtpz_juelu2',
          logTarget: 'player',
          filter(event, player) {
            if (!event.qtpz_juelu) return false;
            if (event.player == player) return false;
            if (
            !event.player.countGainableCards(player, 'he', function (card) {
              return card.hasGaintag('qtpz_hengjiang');
            }))

            return false;
            return !event.player.isLinked();
          },
          content() {
            var gains = trigger.player.getGainableCards(player, 'he', function (card) {
              return card.hasGaintag('qtpz_hengjiang');
            });
            var gain = gains.randomGet();
            player.gain(gain, trigger.player, 'bySelf');
            trigger.player.$giveAuto(gain, player);
            trigger.player.removeSkill('qtpz_hengjiang2');
          }
        },
        qtpz_qishi2: {
          audio: 'qtpz_qishi',
          trigger: {
            player: ['logSkillBegin', 'useSkillBegin']
          },
          charlotte: true,
          mark: true,
          forced: true,
          popup: false,
          nopop: true,
          intro: {
            content(storage, player) {
              var str = '还可以发动' + storage + '次:<br>';
              var skill = player.storage['qtpz_qishi3'];
              str += '【';
              str += get.translation(lib.translate[skill + '_ab'] || get.translation(skill).slice(0, 2));
              str += '】';
              str += get.skillInfoTranslation(skill, player);
              return str;
            }
          },
          onremove(player) {
            player.removeAdditionalSkills('qtpz_qishi2');
            delete player.storage['qtpz_qishi2'];
            delete player.storage['qtpz_qishi3'];
          },
          filter(event, player) {
            return event.skill == player.storage['qtpz_qishi3'];
          },
          content() {
            player.removeMark('qtpz_qishi2', 1, false);
            if (!player.hasMark('qtpz_qishi2')) {
              player.removeSkill('qtpz_qishi2');
            }
          }
        },
        qtpz_qishi: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          mark: true,
          selectCard: -1,
          filterCard() {
            return false;
          },
          limited: true,
          intro: {
            content: 'limited'
          },
          init(player, skill) {
            player.storage[skill] = false;
          },
          filter(event, player) {
            if (player.storage.qtpz_qishi) return false;
            return true;
          },
          filterTarget(card, player, target) {
            if (player == target) return false;
            return get.jy_hasbangpai(target);
          },
          content() {
            'step 0';
            player.awakenSkill(event.name);
            player.storage[event.name] = true;
            var bp = lib.jy_bangPaiList.slice(0);
            for (var i of bp) {
              if (target.hasSkill(i, false, false, false)) target.removeSkills(i);
            }
            'step 1';
            player.choose_bangpai_skill().set('callback', function (event, skill) {
              event.gainSkillPlayer.addMark('qtpz_qishi2', 3, false);
              event.gainSkillPlayer.addSkill('qtpz_qishi2');
              event.gainSkillPlayer.storage['qtpz_qishi3'] = skill;
              event.gainSkillPlayer.addAdditionalSkills('qtpz_qishi2', [skill]);
            });
          }
        },
        //言达平
        //煽斗 棉花糖版 230725
        //霸天版  20240429 完善煽斗、增加攫取
        qtpz_shandou: {
          subSkill: {
            die: {
              popup: false,
              nopop: true,
              forced: true,
              charlotte: true,
              trigger: { player: 'die' },
              forceDie: true,
              content() {
                const damage = trigger.reason;
                if (!damage || !damage.card || !damage.card.qtpz_shandou) return;
                const shandou = damage.getParent('qtpz_shandou');
                if (shandou && shandou.name == 'qtpz_shandou') {
                  shandou.killPlayed.add(trigger.player);
                }
              }
            }
          },
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 1,
          filterTarget: true,
          selectTarget: [2, 3],
          multitarget: true,
          multiline: true,
          marktext: '斗',
          intro: {
            name: '击杀',
            content: 'players'
          },
          targetprompt: ['目标一', '目标二', '目标三'],
          content() {
            'step 0';
            event.cards = [];
            event.killPlayed = [];
            'step 1';
            for (var i = 0; i < targets.length; i++) {
              const cardx = get.cardPile(function (cardx) {
                if (event.cards.includes(cardx)) return false;
                const sub = get.subtype(cardx);
                return event.cards && event.cards.length == 0 ? sub == 'equip5' : sub != 'equip5';
              });
              if (cardx) event.cards.push(cardx);
            }
            if (event.cards.length != targets.length) {
              event.finish();
              game.log('没有符合要求的牌了!');
            }
            'step 2';
            const choose = event.cards.randomSort();
            game.cardsGotoOrdering(choose);
            player.chooseButton(true, ['选择按顺序分配的牌', [choose, 'blank']], targets.length);
            'step 3';
            for (var i = 0; i < result.links.length; i++) {
              targets[i].gain(i, 'draw');
              if (get.subtype(i) == 'equip5') event.targetx = targets[i];
            }
            if (!event.targetx) {
              event.finish();
              return;
            }
            event.usePlayer = targets.filter((i) => i != event.targetx);
            game.addGlobalSkill('qtpz_shandou_die');
            'step 4';
            if (event.usePlayer.length) {
              const usep = event.usePlayer.shift();
              if (usep.isIn() && event.targetx.isIn()) {
                if (usep.canUse({ name: 'juedou' }, event.targetx)) {
                  const next = usep.useCard({ name: 'juedou' }, event.targetx, false, 'noai');
                  next.card.qtpz_shandou = true;
                }
              }
              event.redo();
            }
            'step 5';
            game.removeGlobalSkill('qtpz_shandou_die');
            if (event.killPlayed.length) player.markAuto('qtpz_shandou', event.killPlayed);
          },
          ai: {
            combo: 'qtpz_juequ',
            order: 8,
            result: {
              target(player, target) {
                const att = get.attitude(player, target);
                if (att > 0) return Math.random();
                return -0.3;
              }
            }
          }
        },
        qtpz_juequ: {
          subSkill: {
            gain: {
              forced: true,
              charlotte: true,
              trigger: {
                global: ['gainAfter', 'loseAsyncAfter', 'equipAfter', 'addJudgeAfter']
              },
              filter(event, player, name2) {
                const storage = player.getStorage('qtpz_juequ_gain');
                return storage[0].some(function (i) {
                  const gains = lib.skill.qtpz_juequ_gain.getGain(i, name2, event, player);
                  return gains.some(function (c) {
                    return storage[1].some((suit) => c.suit == suit);
                  });
                });
              },
              getGain(target, name, event, player) {
                if (name == 'gainAfter' || name == 'loseAsyncAfter') {
                  const gains = event.getg(target);
                  return target.getGainableCards(player, 'h').filter((i) => gains.includes(i));
                }
                if (name == 'equipAfter') {
                  const gains = [event.card];
                  return target.getGainableCards(player, 'e').filter((i) => gains.includes(i));
                }
                if (name == 'addJudgeAfter') {
                  const gains = event.cards;
                  return target.getGainableCards(player, 'j').filter((i) => gains.includes(i));
                }
                return [];
              },
              content() {
                'step 0';
                const storage = player.getStorage('qtpz_juequ_gain');
                const list = storage[0].filter(function (i) {
                  const gains = lib.skill.qtpz_juequ_gain.getGain(i, event.triggername, trigger, player);
                  return gains.some(function (c) {
                    return storage[1].some((suit) => c.suit == suit);
                  });
                });
                for (let target of list) {
                  const gains = lib.skill.qtpz_juequ_gain.getGain(target, event.triggername, trigger, player).filter(function (c) {
                    return storage[1].some((suit) => c.suit == suit);
                  });
                  if (gains.length) {
                    const next = player.gain(gains, target, 'bySelf');
                    target[event.triggername == 'gainAfter' || event.triggername == 'loseAsyncAfter' ? '$giveAuto' : '$give'](gains, player);
                    if (!(event.triggername == 'gainAfter' || event.triggername == 'loseAsyncAfter')) next.visible = true;
                    storage[0].remove(target);
                  }
                }
                if (!storage[0].length) player.removeSkill('qtpz_juequ_gain');
              }
            }
          },
          enable: 'phaseUse',
          filterCard() {
            return false;
          },
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:3',
          multitarget: true,
          multiline: true,
          selectCard: -1,
          log: 'notarget',
          selectTarget() {
            const player = _status.event.player;
            const Storage = player.getStorage('qtpz_shandou');
            if (Storage.length > 1) return [1, 2];
            return [1, 1];
          },
          filterTarget(card, player, target) {
            return target != player;
          },
          content() {
            'step 0';
            const count = player.getStorage('qtpz_shandou').length;
            const dialog = [true, count > 0 ? [1, 2] : [1, 1], ['选择' + (count > 0 ? '至多两种' : '一种') + '花色记录', [lib.suit.map((i) => ['', '', 'lukai_' + i]), 'vcard']]];
            const next = player.chooseButton(...dialog);
            next.set('ai', function (button) {
              const player = _status.event.player;
              return Math.random();
            });
            'step 1';
            if (result.links?.length) {
              const suits = result.links.map((i) => i[2].slice(6));
              player.addTempSkill('qtpz_juequ_gain', { player: 'phaseBegin' });
              player.setStorage('qtpz_juequ_gain', [targets, suits]);
            }
          },
          ai: {
            combo: 'qtpz_shandou',
            order: 9,
            result: {
              target: -1
            }
          }
        },
        //绝袁崇焕 霸天 230722
        qtpz_qianbing2: {
          getPreviouss(player) {
            var num = game.players.length;
            var target = player.previous;
            var result = [];
            var count = Math.floor(num / 2);
            while (count > 0) {
              count -= 1;
              result.push(target);
              target = target.previous;
            }
            //game.log(result);
            return result;
          },
          getNexts(player) {
            var num = game.players.length;
            var target = player.next;
            var result = [];
            var count = Math.floor(num / 2);
            while (count > 0) {
              count -= 1;
              result.push(target);
              target = target.next;
            }
            //game.log(result);
            return result;
          },
          audio: 'qtpz_qianbing',
          trigger: {
            global: 'useCardToTargeted'
          },
          forced: true,
          filter(event, player) {
            if (event.player == player) return false;
            if (event.targets.length != event.parent.triggeredTargets4.length) return false;
            if (event.qtpz_qianbing_num && event.qtpz_qianbing_num > 0) return true;
            var nexts = lib.skill['qtpz_qianbing2'].getNexts(event.player);
            var previouss = lib.skill['qtpz_qianbing2'].getPreviouss(event.player);
            var cardTargetNext = [];
            var cardTargetPrevious = [];
            var cardTargetNextMark = [];
            var cardTargetPreviousMark = [];
            for (var i = 0; i < nexts.length; i++) {
              if (!cardTargetNextMark.length) {
                if (nexts[i].hasSkill('qtpz_qianbing_mark')) {
                  cardTargetNextMark.add(nexts[i]);
                }
              } else {
                if (event.targets.includes(nexts[i])) {
                  if (nexts[i].hasSkill('qtpz_qianbing_mark')) {
                    cardTargetNextMark.add(nexts[i]);
                  }
                  cardTargetNext.add(nexts[i]);
                }
              }
            }
            for (var i = 0; i < previouss.length; i++) {
              if (!cardTargetPreviousMark.length) {
                if (previouss[i].hasSkill('qtpz_qianbing_mark')) {
                  cardTargetPreviousMark.add(previouss[i]);
                }
              } else {
                if (event.targets.includes(previouss[i])) {
                  if (previouss[i].hasSkill('qtpz_qianbing_mark')) {
                    cardTargetPreviousMark.add(previouss[i]);
                  }
                  cardTargetPrevious.add(previouss[i]);
                }
              }
            }
            var num = function () {
              var count1 = cardTargetNext.length * cardTargetNextMark.length;
              var count2 = cardTargetPrevious.length * cardTargetPreviousMark.length;
              if (count1 > count2) return count1;
              return count2;
            }();
            //game.log("cardTargetNext",cardTargetNext.length,cardTargetNextMark.length,"=")
            //game.log("cardTargetPrevious",cardTargetPrevious.length,cardTargetPreviousMark.length,"=")
            event.set('qtpz_qianbing_num', num);
            return num > 0;
          },
          content() {
            'step 0';
            player.
            chooseControl('cancel2').
            set('choiceList', ['令' + get.translation(trigger.player) + '弃置' + get.cnNumber(trigger.qtpz_qianbing_num) + '张牌', '摸' + get.cnNumber(trigger.qtpz_qianbing_num) + '张牌']).
            set('prompt', get.prompt(event.name)).
            set('ai', () => {
              return _status.event.choicex;
            }).
            set(
              'choicex',
              function () {
                if (get.attitude(player, trigger.player) > 0) return '选项二';
                var disCards = trigger.player.getCards('he', function (i) {
                  return lib.filter.cardDiscardable(i, trigger.player, event.name);
                });
                if (disCards.length < trigger.qtpz_qianbing_num) {
                  return '选项二';
                } else {
                  return '选项一';
                }
                return '选项二';
              }()
            );
            'step 1';
            if (result.control != 'cancel2') {
              if (result.control == '选项二') {
                player.draw(trigger.qtpz_qianbing_num);
              } else {
                var disCards = trigger.player.getCards('he', function (i) {
                  return lib.filter.cardDiscardable(i, trigger.player, event.name);
                });
                if (disCards.length <= trigger.qtpz_qianbing_num) {
                  trigger.player.discard(disCards);
                } else {
                  trigger.player.chooseToDiscard(trigger.qtpz_qianbing_num, true, 'he');
                }
              }
            }
          }
        },
        qtpz_qianbing: {
          group: 'qtpz_qianbing2',
          subSkill: {
            mark: {
              mark: true,
              popup: false,
              nopop: true,
              marktext: '遣',
              charlotte: true,
              intro: {
                content: '遣'
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            global: 'phaseZhunbeiBegin'
          },
          forced: true,
          content() {
            'step 0';
            if (game.countPlayer((i) => i.hasSkill('qtpz_qianbing_mark')) >= 2) event.goto(3);
            'step 1';
            player.
            chooseTarget(get.prompt(event.name), '令任意一名角色获得「遣」标记', function (card, player, target) {
              return !target.hasSkill('qtpz_qianbing_mark');
            }).
            set('ai', function (target) {
              return Math.random();
            });
            'step 2';
            if (result.targets?.length) {
              result.targets[0].addSkill('qtpz_qianbing_mark');
            }
            event.finish();
            'step 3';
            var next = player.chooseTarget(2, get.prompt(event.name), '移动一枚「遣」标记', function (card, player, target) {
              var selected = ui.selected.targets;
              if (selected.length == 0) return target.hasSkill('qtpz_qianbing_mark');
              if (selected.length == 1) return !target.hasSkill('qtpz_qianbing_mark');
              return false;
            });
            next.set('ai', function (target) {
              return Math.random();
            });
            next.set('targetprompt', ['被移走', '移动目标']);
            next.set('complexTarget', true);
            next.set('filterOk', function () {
              const selected = ui.selected.targets;
              if (selected.length != 2) return false;
              if (!selected[0].hasSkill('qtpz_qianbing_mark')) return false;
              if (selected[1].hasSkill('qtpz_qianbing_mark')) return false;
              return true;
            });
            //next.set('complexSelect',true);
            'step 4';
            if (result.targets?.length) {
              result.targets[0].removeSkill('qtpz_qianbing_mark');
              result.targets[1].addSkill('qtpz_qianbing_mark');
            }
          }
        },
        qtpz_bixue: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageEnd'
          },
          forced: true,
          filter(event, player) {
            if (event.num < 1) return false;
            var count = 0;
            if (get.mode() == 'identity' && _status.mode != 'purple') {
              count = get.population('zhong');
            } else {
              count = player.getFriends(true).length;
            }
            return count > 0;
          },
          content() {
            'step 0';
            var count = 0;
            if (get.mode() == 'identity' && _status.mode != 'purple') {
              count = get.population('zhong');
            } else {
              count = player.getFriends(true).length;
            }
            player.draw(count);
          }
        },
        qtpz_zhonghun: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'die'
          },
          forced: true,
          forceDie: true,
          filter(event, player) {
            return game.hasPlayer((i) => i != player && i.hasSkill('qtpz_qianbing_mark'));
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2(event.name), function (card, player, target) {
              return target != player && target.hasSkill('qtpz_qianbing_mark');
            }).
            set('forceDie', true).
            set('ai', function (target) {
              return get.attitude(_status.event.player, target);
            });
            'step 1';
            if (result.targets?.length) {
              var target = result.targets[0];
              player.line(target, 'green');
              target.addSkills('sdyx_danxin');
            }
          }
        },
        //绝石破天  霸天 20230714
        qtpz_taixuan: {
          taixuanjin: ['赵客缦胡缨', '吴钩霜雪明', '银鞍照白马', '飒沓如流星', '十步杀一人', '千里不留行', '事了拂衣去', '深藏身与名', '闲过信陵饮', '脱剑膝前横', '将炙啖朱亥', '持觞劝侯嬴', '三杯吐然诺', '五岳倒为轻', '眼花耳热后', '意气素霓生', '救赵挥金锤', '邯郸先震惊', '千秋二壮士', '烜赫大梁城', '纵死侠骨香', '不惭世上英', '谁能书阁下', '白首太玄经'],
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            source: 'damageSource',
            player: 'damageEnd'
          },
          filter(event, player) {
            return event.num > 0;
          },
          forced: true,
          content() {
            'step 0';
            event.num = Math.min(trigger.num, 9);
            'step 1';
            var chat = lib.skill.qtpz_taixuan.taixuanjin.randomGet();
            player.chat(chat);
            game.log(player, ':', chat);
            var str = chat[chat.length - 1];
            //----------------------------------------------------
            var card1 = get.randomCard(function (i) {
              return get.is.yayun(str, get.translation(i.name));
            }, 'cardPile');
            var card2 = get.randomCard(function (i) {
              return get.is.yayun(str, get.translation(i.name));
            }, 'discardPile');
            var gains = [];
            if (card1) {
              gains.push(card1);
            }
            if (card2) {
              gains.push(card2);
            }
            if (gains.length) {
              player.gain(gains, 'gain2', 'log');
            }
            event.num--;
            if (event.num > 0) {
              event.goto(1);
            }
          }
        },
        qtpz_yanyan: {
          ai: {
            effect: {
              player(card, player, target, current, isLink) {
                if (!target) return;
                if (isLink) return;
                if (player.storage.qtpz_yanyan) {
                  if (!game.hasNature(card, 'fire') && !get.tag(card, 'fireDamage')) return;
                } else {
                  if (!game.hasNature(card, 'ice') && !get.tag(card, 'iceDamage')) return;
                }
                if (
                target.hasSkillTag('filterDamage', null, {
                  player: player,
                  card: card
                }))

                return;
                return [1, 0, 1, -1.5];
              }
            }
          },
          zhuanhuanji: true,
          mark: true,
          marktext: '火',
          intro: {
            content(storage, player) {
              return lib.dynamicTranslate.qtpz_yanyan(player);
            }
          },
          init(player, skill) {
            player.storage[skill] = true;
            lib.dynamicTranslate.qtpz_yanyan = function (player) {
              var str1 = '阳:你造成的火焰伤害+1.';
              var str2 = '阴:你造成的寒冰伤害+1.';
              if (player.storage.qtpz_yanyan) {
                str1 = '<span class="firetext">' + str1 + '</span>';
              } else {
                str2 = '<span class="bluetext">' + str2 + '</span>';
              }
              return '转换技.' + str1 + str2;
            };
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            source: 'damageBegin1'
          },
          filter(event, player) {
            if (!event.notLink()) return false;
            var nature = player.storage.qtpz_yanyan ? 'fire' : 'ice';
            return event.hasNature(nature);
          },
          forced: true,
          content() {
            player.changeZhuanhuanji(event.name);
            trigger.num++;
            game.broadcastAll(function (player) {
              if (player.marks.qtpz_yanyan) {
                if (player.storage.qtpz_yanyan) {
                  player.marks.qtpz_yanyan.firstChild.innerHTML = '火';
                } else {
                  player.marks.qtpz_yanyan.firstChild.innerHTML = '冰';
                }
              }
            }, player);
          }
        },
        qtpz_xuanjiu2: {
          ai: {
            fireAttack: true,
            iceAttack: true
          },
          forced: true,
          popup: false,
          nopop: true,
          charlotte: true,
          audio: 'qtpz_xuanjiu',
          trigger: {
            source: 'damageBegin'
          },
          filter(event, player) {
            if (!event.notLink()) return false;
            return true;
          },
          content() {
            'step 0';
            player.removeSkill('qtpz_xuanjiu2');
            player.
            chooseControl('fire', 'ice', 'cancel2', function (evt, player) {
              var target = evt._trigger.player;
              var eff1 = get.damageEffect(target, player, player, 'fire');
              var eff2 = get.damageEffect(target, player, player, 'ice');
              var eff3 = get.damageEffect(target, player, player, evt._trigger.nature);
              var result1 = eff1 - eff3;
              var result2 = eff2 - eff3;
              if (result1 > 0 && result1 > result2) return 'fire';
              if (result2 > 0 && result2 > result1) return 'ice';
              return 'cancel2';
            }).
            set('prompt', '玄酒:是否将此次伤害的属性改为火焰或寒冰伤害');
            'step 1';
            if (result.control != 'cancel2') {
              game.setNature(trigger, result.control);
              game.log(player, '修改了此次造成伤害的属性');
            }
          }
        },
        qtpz_xuanjiu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCardAfter'
          },
          forced: true,
          filter(event, player) {
            //return true
            return event.card && event.card.name == 'jiu' && !player.hasSkill('qtpz_xuanjiu2');
          },
          content() {
            player.addSkill('qtpz_xuanjiu2');
          }
        },
        //汤沛--霸天
        qtpz_diaoyu2: {
          audio: 'qtpz_diaoyu',
          trigger: {
            player: 'damageBegin3'
          },
          forced: true,
          filter(event, player) {
            if (event.num <= 1) return false;
            return event.source && player.getStorage('qtpz_diaoyu').includes(event.source);
          },
          content() {
            var count = Math.ceil(trigger.num / 2);
            trigger.num -= count;
          },
          ai: {
            effect: {
              target(card, player, target, current, isLink) {
                if (!target) return;
                if (isLink) return;
                if (!target.getStorage('qtpz_diaoyu').includes(player)) return;
                if (!get.tag(card, 'damage')) return;
                return 0.7;
              }
            }
          }
        },
        qtpz_diaoyu: {
          intro: {
            content: 'players'
          },
          group: 'qtpz_diaoyu2',
          enable: 'phaseUse',
          filterCard() {
            return false;
          },
          selectCard: -1,
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return game.hasPlayer((current) => lib.skill.qtpz_diaoyu.filterTarget(null, player, current));
          },
          filterTarget(card, player, target) {
            if (player.getStorage('qtpz_diaoyu').includes(target)) return false;
            var card = get.cardPile(function (cardx) {
              if (get.type(cardx) != 'equip') return false;
              return target.canUse(cardx, target);
            });
            if (!card) return false;
            return target != player;
          },
          content() {
            'step 0';
            player.markAuto('qtpz_diaoyu', [target]);
            var cards = get.randomCards(999, function (cardx) {
              if (get.type(cardx) != 'equip') return false;
              return target.canUse(cardx, target);
            });
            var next = target.chooseCardButton(cards, '使用一张装备牌', true);
            next.set('ai', function (button) {
              var player = _status.event.player;
              return get.effect(player, button.link, player, player);
            });
            'step 1';
            if (result.links?.length) {
              target.useCard(result.links[0], target);
              player.draw();
            }
          },
          ai: {
            order: 11,
            result: {
              target: 1
            },
            threaten: 2
          }
        },
        qtpz_shihui2: {
          audio: 'qtpz_shihui',
          trigger: {
            player: 'useCardEnd'
          },
          forced: true,
          nopop: true,
          popup: false,
          charlotte: true,
          filter(event, player) {
            return event.card && event.card.name == 'wugu' && event.skill == 'qtpz_shihui';
          },
          content() {
            'step 0';
            var targets = game.filterPlayer(function (current) {
              if (current == player) return false;
              return current.getHistory('gain', function (evt) {
                var wugu = evt.parent;
                var use = evt.getParent(2);
                if (wugu && wugu.name == 'wugu' && use && use == trigger) {
                  return evt.cards && evt.cards.some((i) => get.color(i, false) == 'red');
                }
                return false;
              }).length;
            });
            event.targets = targets;
            if (!targets.length) {
              event.finish();
              return;
            }
            targets.sortBySeat(player);
            //game.log(targets);
            player.
            chooseControl().
            set('ai', function () {
              var player = _status.event.player;
              return 0;
            }).
            set('choiceList', ['摸' + get.cnNumber(targets.length, true) + '张牌', '令' + get.translation(targets) + '交给你一张牌']);
            'step 1';
            if (result.index == 0) {
              player.draw(targets.length);
              event.finish();
            }
            'step 2';
            if (targets.length) {
              var target = targets.shift();
              event.target = target;
              if (!target.isIn()) {
                event.redo();
                return;
              }
              var cards = target.getCards('he');
              if (!cards.length) {
                event.redo();
                return;
              }
              player.line(target);
              target.addTempClass('target');
              if (cards.length > 1) {
                target.chooseCard('交出一张牌给' + get.translation(player), true, 'he').set('ai', function (card) {
                  if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
                    return 11 - get.value(card);
                  } else {
                    return 7 - get.value(card);
                  }
                });
              } else {
                event._result = { bool: true, cards: cards };
              }
            } else {
              event.finish();
              return;
            }
            'step 3';
            if (result.cards?.length) {
              target.give(result.cards, player, true);
              //player.gain(result.cards,'giveAuto',target);
            }
            event.goto(2);
          }
        },
        qtpz_shihui: {
          enable: 'phaseUse',
          filterCard(card, player) {
            return true;
          },
          position: 'hs',
          viewAs: {
            name: 'wugu',
            qtpz_shihui: true
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 1,
          prompt: '将一张手牌当【开仓放粮】使用',
          precontent() {
            player.addTempSkill('qtpz_shihui2');
          },
          viewAsFilter(player) {
            if (!player.countCards('hs')) return false;
            return true;
          },
          check(card) {
            var player = _status.event.player;
            var val = get.value(card);
            return 8 - val;
          },
          ai: {
            wuxie() {
              if (Math.random() < 0.5) return 0;
            },
            basic: {
              order: 3,
              useful: 0.5
            },
            result: {
              target(player, target) {
                var sorter = _status.currentPhase || player;
                if (get.is.versus()) {
                  if (target == sorter) return 1.5;
                  return 1;
                }
                if (player.hasUnknown(2)) {
                  return 0;
                }
                return (1 - get.distance(sorter, target, 'absolute') / game.countPlayer()) * get.attitude(player, target) > 0 ? 0.5 : 0.7;
              }
            },
            tag: {
              draw: 1,
              multitarget: 1
            }
          }
        },
        //凤天南---霸天
        qtpz_balin: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: ['logSkillBegin', 'useSkillBegin']
          },
          popup: false,
          logTarget: 'player',
          filter(event, player) {
            if (player == event.player) return false;
            if (get.distance(player, event.player) > 1) return false;
            for (const card of event.player.getCards('e')) {
              const info = lib.card[card.name];
              if (info?.skills?.includes(event.skill)) {
                event.skillcard = card;
                return true;
              }
            }
          },
          async content(event, trigger, player) {
            const card = trigger.skillcard;
            var str = '是否令' + get.translation(player) + '摸一张牌？否则你弃置' + get.translation(card);
            const { bool } = await trigger.player.
            chooseBool(str).
            set('ai', (evt, player) => get.equipValue(card, trigger.player) > -get.attitude(trigger.player, player)).
            forResult();
            if (bool) {
              player.draw();
              trigger.player.line(player);
            } else {
              trigger.player.discard(card);
            }
          }
        },
        qtpz_haoduo: {
          subSkill: {
            disable: {
              charlotte: true,
              forced: true,
              popup: true,
              nopop: true,
              mark: true,
              intro: {
                content: '本轮已发动'
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'gainAfter'
          },
          filter(event, player) {
            if (player.hasSkill('qtpz_haoduo_disable')) return false;
            if (event.player == player) return false;
            if (!event.cards || !event.cards.length) return false;
            var playerType = [],
              playerSuit = [],
              playerNumber = [],
              playerCards = [];
            var targetType = [],
              targetSuit = [],
              targetNumber = [],
              targetCards = [];
            playerCards = player.getCards('h', function (cardx) {
              var type = get.type(cardx);
              if (typeof type == 'string') playerType.add(type);
              var suit = cardx.suit;
              if (typeof suit == 'string' && suit != 'none') playerSuit.add(suit);
              var num = cardx.number;
              if (typeof num == 'number') playerNumber.add(num);
              return true;
            });
            targetCards = event.player.getCards('h', function (cardx) {
              var type = get.type(cardx);
              if (typeof type == 'string') targetType.add(type);
              var suit = cardx.suit;
              if (typeof suit == 'string' && suit != 'none') targetSuit.add(suit);
              var num = cardx.number;
              if (typeof num == 'number') targetNumber.add(num);
              return true;
            });
            if (targetType.length > playerType.length) return true;
            if (targetSuit.length > playerSuit.length) return true;
            if (targetNumber.length > playerNumber.length) return true;
            if (targetCards.length > playerCards.length) return true;
            return false;
          },
          check(event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          logTarget: 'player',
          content() {
            'step 0';
            var count = 0;
            var playerType = [],
              playerSuit = [],
              playerNumber = [],
              playerCards = [];
            var targetType = [],
              targetSuit = [],
              targetNumber = [],
              targetCards = [];
            playerCards = player.getCards('h', function (cardx) {
              var type = get.type(cardx);
              if (typeof type == 'string') playerType.add(type);
              var suit = cardx.suit;
              if (typeof suit == 'string' && suit != 'none') playerSuit.add(suit);
              var num = cardx.number;
              if (typeof num == 'number') playerNumber.add(num);
              return true;
            });
            targetCards = trigger.player.getCards('h', function (cardx) {
              var type = get.type(cardx);
              if (typeof type == 'string') targetType.add(type);
              var suit = cardx.suit;
              if (typeof suit == 'string' && suit != 'none') targetSuit.add(suit);
              var num = cardx.number;
              if (typeof num == 'number') targetNumber.add(num);
              return true;
            });
            if (targetType.length > playerType.length) count++;
            if (targetSuit.length > playerSuit.length) count++;
            if (targetNumber.length > playerNumber.length) count++;
            if (targetCards.length > playerCards.length) count++;
            if (!targetCards.length || count == 0) {
              event.finish();
              return;
            }
            if (count >= targetCards.length) {
              event._result = { bool: true, cards: targetCards };
            } else {
              trigger.player.chooseCard(count, 'h', true, '交给' + get.translation(player) + get.cnNumber(count) + '张牌').set('ai', function (card) {
                if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
                  return 11 - get.value(card);
                } else {
                  return 7 - get.value(card);
                }
              });
            }
            'step 1';
            if (result.cards?.length) {
              trigger.player.give(result.cards, player, true);
              //player.gain(result.cards,'giveAuto',trigger.player);
              player.addTempSkill('qtpz_haoduo_disable', 'roundStart');
            }
          },
          ai: {
            expose: 0.3
          }
        },
        //邪血刀老祖
        qtpz_jidao: {
          juexingji: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'qtpz_xueyue_bool'
          },
          forced: true,
          content() {
            player.awakenSkill(event.name);
            player.storage[event.name] = true;
          }
        },
        qtpz_manyue: {
          audio: 'ext:金庸群侠传/peiyin:1',
          group: 'qtpz_manyue_jydiy_xuedao_skill',
          subSkill: {
            jydiy_xuedao_skill: {
              ai: {
                jydiy_xuedao: true,
                forced_jydiy_xuedao: true
              },
              equipSkill: true,
              nopop: true,
              mod: {
                attackRange(player, distance) {
                  if (player.hasEmptySlot(1)) {
                    if (player.storage.qtpz_jidao) return distance + 2;
                    return distance + 1;
                  }
                }
              },
              name: '血刀',
              inherit: 'jydiy_xuedao_skill',
              filter(event, player) {
                if (!lib.skill.jydiy_xuedao_skill.filter(event, player)) return false;
                if (!player.hasEmptySlot(1)) return false;
                return true;
              },
              mark: true,
              marktext: '刀',
              intro: {
                name: '刀',
                content: '视为永久装备【血刀】'
              }
            }
          }
        },
        qtpz_canyue: {
          audio: 'ext:金庸群侠传/peiyin:1',
          trigger: {
            global: 'recoverEnd'
          },
          forced: true,
          filter(event, player) {
            return event.player != player && player.inRange(event.player);
          },
          content() {
            'step 0';
            event.num = Math.min(trigger.num, 9);
            'step 1';
            player.chooseDrawRecover(get.prompt(event.name), 2, 1)('step 2');
            if (result.control != 'cancel2') {
              event.num--;
              if (event.num > 0) {
                event.goto(1);
              }
            }
          }
        },
        qtpz_xuanyue: {
          audio: 'ext:金庸群侠传/peiyin:1',
          forced: true,
          global: 'qtpz_xuanyue_sha',
          subSkill: {
            sha: {
              mod: {
                cardnature(card, player) {
                  if (player._qtpz_xuanyue_tmp) return;
                  player._qtpz_xuanyue_tmp = true;
                  var name = card.name,
                    nature = get.nature(card);
                  delete player._qtpz_xuanyue_tmp;
                  var bool = game.hasPlayer(function (current) {
                    return current.hasSkill('qtpz_xuanyue');
                  });
                  if (!bool) return;
                  if (name == 'sha' && (!nature || !Array.from(lib.nature.keys()).includes(nature))) return 'jy_xie';
                }
              }
            }
          }
        },
        qtpz_anyue: {
          global: 'qtpz_anyue_ai',
          subSkill: {
            ai: {
              ai: {
                effect: {
                  target(card, player, target) {
                    var targetx = game.findPlayer(function (current) {
                      return current.hasSkill('qtpz_anyue') && get.attitude(current, target) < 0;
                    });
                    if (targetx) {
                      if (get.tag(card, 'recover')) return 'zerotarget';
                      if (card.name == 'jiu' && target.isDying()) return 'zerotarget';
                    }
                  }
                }
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:1',
          trigger: {
            global: 'recoverBefore'
          },
          logTarget: 'player',
          check(event, player) {
            return get.attitude(player, event.player) < 0;
          },
          filter(event, player) {
            return event.player != player;
          },
          content() {
            trigger.cancel();
          }
        },
        qtpz_xueyue: {
          mark: true,
          intro: {
            content(storage, player) {
              var discardPile = Array.from(ui.discardPile.childNodes);
              var num = discardPile.length % 10;
              var str = '弃牌堆个位数:' + num + '<br>月相<br>';
              for (var i in player.storage.qtpz_xueyue) {
                str += '<br><li>' + i + ':' + get.translation(player.storage.qtpz_xueyue[i]);
              }
              return str;
            }
          },
          init(player, skill) {
            if (!player.storage[skill]) {
              player.storage[skill] = {
                0: 'qtpz_manyue',
                1: 'qtpz_xuanyue',
                2: 'qtpz_canyue',
                3: 'qtpz_xuanyue',
                4: 'qtpz_anyue',
                5: 'qtpz_canyue',
                6: 'qtpz_manyue',
                7: 'qtpz_anyue',
                8: 'qtpz_xuanyue',
                9: 'qtpz_manyue'
              };
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          forced: true,
          content() {
            'step 0';
            var discardPile = Array.from(ui.discardPile.childNodes);
            var num = discardPile.length % 10;
            var number = num.toString();
            var skill = player.storage.qtpz_xueyue[number];
            if (skill) {
              player.markAuto('qtpz_xueyue2', [skill]);
              event.skill = skill;
              if (skill == 'qtpz_manyue') {
                player.addSkill(skill);
              } else {
                player.addTempSkill(skill, { player: 'phaseZhunbeiBegin' });
                event.goto(5);
              }
            } else {
              event.finish();
            }
            'step 1';
            event.numberList = [];
            for (var i in player.storage.qtpz_xueyue) {
              if (player.storage.qtpz_xueyue[i] == 'qtpz_manyue') {
                event.numberList.push(i);
              }
            }
            player.chooseBool('是否将满月的点数分配到其他月相?否则永久移除满月的点数并摸9张牌').set('ai', function () {
              return Math.random() < 0.5 ? true : false;
            });
            'step 2';
            if (result.bool) {
              event.goto(3);
            } else {
              player.draw(9);
              for (var i of event.numberList) {
                delete player.storage.qtpz_xueyue[i];
              }
              event.goto(5);
            }
            'step 3';
            event.strNumber = event.numberList.shift();
            player.
            chooseControl('qtpz_anyue', 'qtpz_canyue', 'qtpz_xuanyue', function (event, player) {
              return ['qtpz_anyue', 'qtpz_canyue', 'qtpz_xuanyue'].randomGet();
            }).
            set('prompt', '血月:将' + event.strNumber + '分配到其他月相');
            'step 4';
            player.storage.qtpz_xueyue[event.strNumber] = result.control;
            if (event.numberList.length) {
              event.goto(3);
            }
            'step 5';
            var storage2 = player.getStorage('qtpz_xueyue2');
            if (storage2.length == 4 && !player.storage.qtpz_jidao) {
              event.trigger('qtpz_xueyue_bool');
            }
          }
        },
        qtpz_xiezun: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: 'qtpz_xiezun2',
          trigger: { player: 'useCardToPlayered' },
          filter(event, player) {
            return event.card && event.card.name == 'sha' && game.hasNature(event.card, 'jy_xie');
          },
          logTarget: 'target',
          forced: true,
          content() {
            trigger.parent.directHit.add(trigger.target);
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (!arg.card) return false;
              if (arg && arg.card.name != 'sha') return false;
              if (!game.hasNature(arg.card, 'jy_xie')) return false;
            }
          }
        },
        qtpz_xiezun2: {
          trigger: { player: 'damageBegin4' },
          filter(event, player) {
            return event.card && event.card.name == 'sha' && game.hasNature(event.card, 'jy_xie');
          },
          forced: true,
          content() {
            trigger.cancel();
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                if (player.hasSkillTag('jueqing', false, target)) return;
                var name = card.name;
                if (name == 'sha' && game.hasNature(card, 'jy_xie')) return 'zerotarget';
              }
            }
          }
        },
        //丁不三丁不四--棉花糖20220717
        qtpz_shadao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          forced: true,
          _priority: 12,
          zhuanhuanji: true,
          mark: true,
          marktext: '杀',
          intro: {
            content(storage, player, skill) {
              if (player.storage.qtpz_shadao == true) return '阴:你可以获得任意名已损失体力值之和为3的角色区域内各1张牌';
              return '阳:你可以对任意名体力值为4的角色各造成1点伤害';
            }
          },
          content() {
            if (player.storage.qtpz_shadao == true) {
              player.storage.qtpz_shadao = false;
              player.addTempSkill('qtpz_shadao_damage');
            } else {
              player.storage.qtpz_shadao = true;
              player.addTempSkill('qtpz_shadao_gain');
            }
          },
          subSkill: {
            gain: {
              enable: 'phaseUse',
              usable: 1,
              filterTarget(card, player, target) {
                var targets = ui.selected.targets;
                var num = 0;
                if (target.isHealthy()) return false;
                for (var i = 0; i < targets.length; i++) {
                  num += targets[i].getDamagedHp();
                }
                if (!target.countGainableCards(player, 'hej')) return false;
                return num + target.getDamagedHp() <= 3;
              },
              filterOk() {
                var targets = ui.selected.targets;
                var num = 0;
                for (var i = 0; i < targets.length; i++) {
                  num += targets[i].getDamagedHp();
                }
                if (num == 3) return true;
                return false;
              },
              multitarget: true,
              multiline: true,
              selectTarget: [1, Infinity],
              filter(event, player) {
                var targets = game.filterPlayer();
                var num = 0;
                for (var i = 0; i < targets.length; i++) {
                  num += targets[i].getDamagedHp();
                }
                return num > 3;
              },
              content() {
                player.gainMultiple(targets, 'hej');
              },
              ai: {
                order: 12,
                result: {
                  target(player, target) {
                    const effect = get.effect(target, { name: 'shunshou_ai2' }, player, player);
                    const att = get.sgnAttitude(player, target);
                    if (effect > 0) {
                      if (att > 0) return 1.2;
                      return -1;
                    }
                    return 0;
                  }
                }
              }
            },
            damage: {
              enable: 'phaseUse',
              usable: 1,
              filterTarget(card, player, target) {
                var targets = ui.selected.targets;
                var num = 0;
                //if(player==target) return false;
                if (target.hp > 4) return false;
                for (var i = 0; i < targets.length; i++) {
                  num += targets[i].hp;
                }
                return num + target.hp <= 4;
              },
              filterOk() {
                var targets = ui.selected.targets;
                var num = 0;
                for (var i = 0; i < targets.length; i++) {
                  num += targets[i].hp;
                }
                if (num == 4) return true;
                return false;
              },
              selectTarget: [1, Infinity],
              multitarget: true,
              multiline: true,
              filter(event, player) {
                var targets = game.filterPlayer();
                var num = 0;
                for (var i = 0; i < targets.length; i++) {
                  num += targets[i].hp;
                }
                return num > 4;
              },
              content() {
                for (var i = 0; i < targets.length; i++) {
                  targets[i].damage(player, 'nocard');
                }
              },
              ai: {
                order: 12,
                damage: true,
                order: 8,
                result: {
                  target(player, target) {
                    return get.damageEffect(target, player);
                  }
                }
              }
            }
          }
        },
        qtpz_guijue: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            global: 'loseAfter'
          },
          filter(event, player) {
            if (event.player == player) return false;
            if (event.type != 'discard' || !event.hs || !event.hs.filterInD('d').length) return false;
            if (player.storage.qtpz_shadao == true) {
              var num = 3;
            } else {
              var num = 4;
            }
            var list = [];
            if (Array.isArray(event.cards))
            for (var i of event.cards) {
              if (i.number % num == 0) list.push(i);
            }
            if (!list.length) return false;
            return true;
          },
          check(event, player) {
            return 1;
          },
          content() {
            if (player.storage.qtpz_shadao == true) {
              var num = 3;
            } else {
              var num = 4;
            }
            var list = [];
            if (Array.isArray(trigger.cards))
            for (var i of trigger.cards) {
              if (i.number % num == 0) list.push(i);
            }
            if (list.length) player.gain(list, 'gain2');
          }
        },
        //心砚---霸天20220717
        qtpz_anshao: {
          group: 'qtpz_anshao_clear',
          subSkill: {
            clear: {
              trigger: { player: 'changeHp' },
              silent: true,
              forced: true,
              popup: false,
              content() {
                var Stat = player.getStat('skill');
                if (Stat.qtpz_anshao && Stat.qtpz_anshao > 0) Stat.qtpz_anshao--;
              }
            }
          },
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          content() {
            'step 0';
            var list = [];
            var inpile = get.inpile(function (name) {
              var type = get.type(name);
              if (type != 'trick' && type != 'basic') return false;
              var nameStr = lib.translate[name];
              return nameStr && nameStr.length == player.hp;
            });
            //var inpile2=inpile.filter(name=>player.hasUseTarget({name:name}));
            for (var j of inpile) {
              list.push([get.type(j), '', j]);
              if (j == 'sha') {
                for (var i of lib.inpile_nature) {
                  if (player.hasUseTarget({ name: j, nature: i })) list.push([get.type(j), '', j, i]);
                }
              }
            }
            if (list.length == 1) {
              event._result = { bool: true, links: list };
            } else if (list.length > 1) {
              var dialog = [[list, 'vcard']];
              player.chooseButton(dialog, true).set('ai', function (button) {
                var value = _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                if (value > 0 && button.link[2] == 'tao') return 1000;
                if (value == 0) return 0.5;
                return value;
              });
            } else {
              game.log('没有符合条件的牌名!');
            }
            'step 1';
            if (result.links?.length) {
              var vcard = { name: result.links[0][2], nature: result.links[0][3] };
              var bool = player.hasUseTarget(vcard);
              if (bool) {
                player.chooseUseTarget(vcard, true, false);
              } else {
                var card = get.cardPile(function (cardx) {
                  return cardx.name == vcard.name;
                });
                if (!card) {
                  card = game.createCard(vcard.name);
                }
                player.gain(card, 'log', 'gain2');
              }
            }
          },
          ai: { order: 12, result: { player: 1 }, threaten: 1.5 }
        },
        qtpz_shutong: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'useCard' },
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          logTarget: 'player',
          filter(event, player) {
            if (!event.card.isCard) return true;
            if (!event.cards.length) return true;
            return false;
          },
          content() {
            var card = get.cardPile(function (cardx) {
              return cardx.name == trigger.card.name;
            });
            if (!card) {
              card = game.createCard(trigger.card.name);
            }
            trigger.player.gain(card, 'log', 'gain2');
          }
        },
        //苗若兰---棉花糖
        qtpz_jinse: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:3',
          filterTarget(card, player, target) {
            return target.countDiscardableCards(player, 'he') > 0;
          },
          selectTarget: 1,
          //"出牌阶段限一次,你可以选择一项: 弃置一名角色一张牌,其摸X张名字只有一个汉字的牌(X为弃置牌名字中的汉字数);
          //或弃置一名角色所有名字只有一个汉字的手牌(至多只能弃置五张),其获得一张名字中含有X个汉字的牌(X为其此次弃置牌的张数).",
          content() {
            'step 0';
            let prompt = '弃置其一张牌,其摸X张名字只有一个汉字的牌(X为弃置牌名字中的汉字数);';
            prompt += '<br>或者弃置其所有名字只有一个汉字的手牌(至多只能弃置五张),其获得一张名字中含有X个汉字的牌(X为其此次弃置牌的张数)';
            const next = player.discardPlayerCard(target, prompt, 'visible', [1, 5], true, 'he');
            next.set('filterButton', function (button) {
              const selected = ui.selected.buttons;
              if (!selected.length) return true;
              const pos = get.position(selected[0]);
              if (pos == 'e') return false; //选择装备牌 就不能再选牌
              const count = get.cardNameLength(selected[0]);
              if (count > 1) return false; //如果名字大于一 就不能再选
              if (pos == 'h') {
                if (get.position(button.link) == 'e') return false; // 选了手牌 就不能再选 就不能选择装备牌
              }
              return get.cardNameLength(button.link) == 1;
            });
            next.set('ai', function (button) {
              const player = _status.event.player;
              const target = _status.event.target;
              const att = get.sgnAttitude(player, target);
              const count = get.cardNameLength(button.link);
              if (att > 0) return count;
              return (6 - count) / 6;
            });
            next.set('complexSelect', true);
            //next.set("filterOk",function(){
            //    var att=get.attitude(_status.event.player,ui.selected.targets[0]);
            //    var valuex=get.value(button.link)
            //    if(att>=0) return 4-valuex
            //    return 12-value;
            //});
            'step 1';
            if (result.links?.length) {
              if (result.links.length == 1) {
                const count2 = get.cardNameLength(result.links[0]);
                const gains = get.randomCards(count2, function (card) {
                  return get.cardNameLength(card) == 1;
                });
                if (gains && gains.length) {
                  target.gain(gains, 'log', 'gain2');
                }
              } else {
                const count3 = result.links.length;
                const gains2 = get.randomCards(1, function (card) {
                  return get.cardNameLength(card) == count3;
                });
                if (gains2 && gains2.length) {
                  target.gain(gains2, 'log', 'gain2');
                }
              }
            }
          },
          ai: {
            order: 12,
            result: {
              target(player, target) {
                const cards = target.getDiscardableCards(player, 'he');
                const att = get.sgnAttitude(player, target);
                if (att > 0) {
                  const effects = cards.map((i) => get.cardNameLength(i));
                  return Math.max(...effects) - 1;
                } else if (att < 0) {
                  const effects2 = cards.filter((i) => get.cardNameLength(i) == 1);
                  return 1 - Math.min(effects2.length, 5);
                }
                return 0;
              }
            },
            threaten: 2
          }
        },
        qtpz_yaxian: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            player: 'phaseJieshuBegin'
          },
          forced: true,
          filterXiangTong(history) {
            let xiangTong = true;
            const count = get.cardNameLength(history[0].card);
            for (var i = 1; i < history.length; i++) {
              const count2 = get.cardNameLength(history[i].card);
              if (count != count2) {
                xiangTong = false;
                break;
              }
            }
            return xiangTong;
          },
          filterBuTong(history) {
            let buTong = true;
            const counts = [get.cardNameLength(history[0].card)];
            for (var i = 1; i < history.length; i++) {
              const count2 = get.cardNameLength(history[i].card);
              if (counts.includes(count2)) {
                buTong = false;
                break;
              } else {
                counts.push(count2);
              }
            }
            return buTong;
          },
          filter(event, player) {
            const history = player.getHistory('useCard');
            if (history.length < 2) return false;
            if (lib.skill.qtpz_yaxian.filterXiangTong(history)) return true;
            if (lib.skill.qtpz_yaxian.filterBuTong(history)) return true;
            return false;
          },
          content() {
            'step 0';
            const history = player.getHistory('useCard');
            if (lib.skill.qtpz_yaxian.filterBuTong(history)) {
              player.chooseBool(get.prompt(event.name), '将手牌从当前游戏环境中补齐不同字数的牌?').set('ai', () => {
                return true;
              });
            } else {
              event.goto(2);
            }
            'step 1';
            if (result.bool) {
              const numbers = [1, 2, 3, 4, 5, 6, 7];
              player.getCards('h').filter((i) => numbers.remove(get.cardNameLength(i)));
              const gains = [];
              numbers.forEach((i) => {
                const gain = get.cardPile((cardx) => {
                  return get.cardNameLength(cardx) == i;
                });
                if (gain) gains.push(gain);
              });
              if (gains.length) {
                player.gain('draw', gains);
              } else {
                game.log('牌堆没有符合', player, '要求的牌了!');
              }
            }
            event.finish();
            'step 2';
            const history2 = player.getHistory('useCard');
            event.count = get.cardNameLength(history2[0].card);
            player.
            chooseTarget([1, 3], get.prompt(event.name), `令至多3名角色使用一张牌名字数为${event.count}的装备牌`, function (card, player, target) {
              const count = _status.event.cardCount;
              return get.cardPile(function (cardx) {
                if (get.cardNameLength(cardx) != count) return false;
                if (get.type(cardx) != 'equip') return false;
                if (get.cardtag(cardx, 'gifts')) return false;
                if (!target.hasEmptySlot(get.subtype(cardx))) return false;
                //if(get.effect(player,card,player,player)<0) return false;
                return target.hasUseTarget(cardx);
              });
            }).
            set('ai', function (target) {
              return get.attitude(_status.event.player, target);
            }).
            set('cardCount', event.count);
            'step 3';
            if (result.targets?.length) {
              event.targets = result.targets;
            } else {
              event.finish();
            }
            'step 4';
            if (event.targets.length) {
              event.target = event.targets.shift();
              const count = _status.event.cardCount;
              const equipCard = get.cardPile(function (cardx) {
                if (get.cardNameLength(cardx) != event.count) return false;
                if (get.type(cardx) != 'equip') return false;
                if (get.cardtag(cardx, 'gifts')) return false;
                if (!event.target.hasEmptySlot(get.subtype(cardx))) return false;
                //if(get.effect(player,card,player,player)<0) return false;
                return event.target.hasUseTarget(cardx);
              });
              if (equipCard) {
                event.target.chooseUseTarget(equipCard, true, 'nopopup');
              } else {
                game.log('牌堆没有符合', event.target, '要求的装备牌了!');
              }
              event.redo();
            }
          }
        },
        //石中玉--霸天20220611
        //瞒天
        qtpz_mantian2: {
          trigger: {
            player: ['addJudgeBefore', 'linkBefore', 'turnOverBefore', 'disableEquipBefore']
          },
          forced: true,
          filter(event, player) {
            var name = event.name;
            if (name == 'turnOver') {
              if (player.isTurnedOver()) return false;
              return game.hasPlayer((target) => target != player && !target.isTurnedOver());
            } else if (name == 'link') {
              if (player.isLinked()) return false;
              return game.hasPlayer((target) => target != player && !target.isLinked());
            } else if (name == 'addJudge') {
              var card = event.card;
              if (typeof card == 'string') card = { name: card };
              if (card.name == 'jydiy_yungongliaoshang') return false;
              return game.hasPlayer((target) => target != player && target.canAddJudge({ name: card.name, cards: [card] }));
            } else if (name == 'disableEquip') {
              return game.hasPlayer((target) => target != player && event.slots.some((i) => target.hasEnabledSlot(i)));
            } else {
              return false;
            }
          },
          content() {
            'step 0';
            var func = function () {
              return true;
            };
            var AItarget = function (target) {
              return -1;
            };
            var str = get.translation(player);
            var name = trigger.name;
            if (name == 'turnOver') {
              str = str + '即将翻面';
              func = function (card, player, target) {
                return target != player && !target.isTurnedOver();
              };
              AItarget = function (target) {
                if (target.hasSkillTag('noturn')) return 0;
                return -get.attitude(player, target);
              };
            } else if (name == 'link') {
              str = str + '即将横置';
              func = function (card, player, target) {
                return target != player && !target.isLinked();
              };
              AItarget = function (target) {
                return -1;
              };
            } else if (name == 'addJudge') {
              var cardx = trigger.card;
              str = str + '即将贴上' + get.translation(cardx.name);
              if (typeof cardx == 'string') cardx = { name: cardx };
              func = function (card, player, target) {
                return target != player && target.canAddJudge({ name: cardx.name });
              };
              AItarget = function (target) {
                return -get.attitude(player, target);
              };
            } else if (name == 'disableEquip') {
              str = str + '即将废除' + get.translation(trigger.slots) + '栏';
              func = function (card, player, target) {
                return target != player && trigger.slots.some((i) => target.hasEnabledSlot(i));
              };
              AItarget = function (target) {
                return -get.attitude(player, target);
              };
            } else {
              func = function (card, player, target) {
                return false;
              };
            }
            player.chooseTarget(get.prompt('qtpz_mantian'), str, func).set('ai', AItarget);
            'step 1';
            if (result.targets?.length) {
              trigger.player = result.targets[0];
              trigger.untrigger();
              trigger.trigger(trigger.name + 'Before');
              player.loseHp();
            }
          }
        },
        qtpz_mantian: {
          group: 'qtpz_mantian2',
          filter(event, player) {
            if (!get.tag(event.card, 'damage')) return false;
            if (event.player == player) return false;
            var bool = game.hasPlayer(function (current) {
              return event.player.inRange(current) && current != event.player && current != player && event.player.canUse(event.card, current);
            });
            if (!bool) return false;
            return event.card && event.card.name == 'sha' || get.type(event.card) == 'trick';
          },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            target: 'useCardToTarget'
          },
          content() {
            'step 0';
            var eff = get.effect(player, trigger.card, trigger.player, player);
            player.
            chooseTarget(get.prompt2(event.name), function (card, player, current) {
              var trigger = _status.event.getTrigger();
              return trigger.player.inRange(current) && current != trigger.player && current != player && trigger.player.canUse(trigger.card, current);
            }).
            set('ai', function (target) {
              var player = _status.event.player;
              var trigger = _status.event.getTrigger();
              if (_status.event.eff < 0) {
                if (trigger.parent.excluded.includes(player)) return -1;
                var eff = get.effect(target, trigger.card, trigger.player, player);
                if (trigger.parent.excluded.includes(target)) return 0;
                var bool = trigger.parent.directHit.includes(target);
                var bool2 = trigger.parent.directHit.includes(player);
                if (get.tag(trigger.card, 'respondSha')) {
                  if ((!target.hasSha() || bool) && (!player.hasSha() || bool2)) {
                    return eff * 1.2;
                  }
                } else if (get.tag(trigger.card, 'respondShan')) {
                  if ((!target.hasShan() || bool) && (!player.hasShan() || bool2)) {
                    return eff * 1.2;
                  }
                }
                return eff;
              } else {
                return -1;
              }
              return -1;
            }).
            set('eff', eff);
            'step 1';
            if (result.bool) {
              player.loseHp();
              var target = result.targets[0];
              var evt = trigger.parent;
              evt.triggeredTargets2.remove(player);
              evt.targets.remove(player);
              evt.targets.push(target);
            }
          }
        },
        //诡谋
        qtpz_guimou: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseZhunbeiBegin'
          },
          changeSeat: true,
          forced: true,
          filter(event, player) {
            if (event.player == player) return false;
            if (player.hasSkill('qtpz_guimou_disable')) return false;
            return game.hasPlayer(function (current) {
              return current != player && current != event.player;
            });
          },
          round: 1,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('qtpz_guimou'), function (card, player, target) {
              return target != player && trigger.player != target;
            }).
            set('ai', function (target) {
              return Math.random();
            });
            'step 1';
            if (result.bool) {
              player.addTempSkill('qtpz_guimou_disable', 'roundStart');
              game.broadcastAll(
                function (target1, target2) {
                  game.swapSeat(target1, target2);
                },
                player,
                result.targets[0]
              );
              var next = game.createEvent('qtpz_guimou_after', false);
              next.player = player;
              next.target = result.targets[0];
              next.forceDie = true;
              next.setContent(function () {
                game.broadcastAll(
                  function (target1, target2) {
                    game.swapSeat(target1, target2);
                  },
                  player,
                  target
                );
              });
              event.next.remove(next);
              trigger.parent.after.push(next);
            }
          },
          subSkill: {
            disable: {
              mark: true,
              intro: {
                content: '本轮已发动'
              }
            }
          }
        },
        //狎乱
        qtpz_xialuan2: {
          trigger: {
            global: 'dieEnd'
          },
          forced: true,
          forceDie: true,
          content() {
            'step 0';
            game.countPlayer((target) => target.removeSkill('qtpz_xialuan3'));
            if (game.hasPlayer((i) => i.hasSex('female')) || trigger.player == player) {
              event.finish();
            }
            'step 1';
          }
        },
        qtpz_xialuan3: {
          charlotte: true,
          init(player, skill) {
            const equips = player.getCards('e', function (card) {
              var sub = get.subtype(card);
              if (!['equip1', 'equip2', 'equip5'].includes(sub)) return false;
              return true;
              //return !ui.selected.cards||!ui.selected.cards.includes(card);
            });
            const skills = [];
            for (var i of equips) {
              const skillsx = get.info(i).skills;
              if (skillsx && skillsx.length) skills.addArray(skillsx);
            }
            if (skills.length) player.disableSkill(skill, skills);
          },
          onremove(player, skill) {
            player.enableSkill(skill);
          },
          mod: {
            attackRange(player, num) {
              const equips = player.getCards('e', function (card) {
                var sub = get.subtype(card);
                if (!['equip1', 'equip2', 'equip5'].includes(sub)) return false;
                return !ui.selected.cards || !ui.selected.cards.includes(card);
              });
              return num - player.getEquipRange(equips) + 1;
            }
          },
          trigger: {
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter', 'loseAfter']
          },
          filter(event, player) {
            if (event.name == 'equip' && event.player == player) {
              const sub = get.subtype(event.card);
              if (!['equip1', 'equip2', 'equip5'].includes(sub)) return false;
              return true;
            }
            const evt = event.getl(player);
            return (
              evt &&
              evt.player == player &&
              evt.es &&
              evt.es.some((card) => {
                const sub = get.subtype(card);
                if (!['equip1', 'equip2', 'equip5'].includes(sub)) return false;
                return true;
              }));

          },
          forced: true,
          popup: false,
          firstDo: true,
          async content(event, trigger, player) {
            lib.skill['qtpz_xialuan3'].onremove(player, 'qtpz_xialuan3');
            lib.skill['qtpz_xialuan3'].init(player, 'qtpz_xialuan3');
          }
        },
        qtpz_xialuan: {
          //group:'qtpz_xialuan2',
          getEquipGlobalFrom(player) {
            var range = 0;
            //range = game.checkMod(player, player, range, "globalFrom", player);
            var equips = player.getCards('e', function (card) {
              var sub = get.subtype(card);
              if (!['equip1', 'equip2', 'equip5'].includes(sub)) return false;
              return !ui.selected.cards || !ui.selected.cards.includes(card);
            });
            for (var i = 0; i < equips.length; i++) {
              var info = get.info(equips[i]).distance;
              if (!info) continue;
              if (info.globalFrom) {
                range += info.globalFrom;
              }
            }
            return -range;
          },
          getEquipGlobalTo(player) {
            var range = 0;
            //range = game.checkMod(player, player, range, "globalTo", player);
            var equips = player.getCards('e', function (card) {
              var sub = get.subtype(card);
              if (!['equip1', 'equip2', 'equip5'].includes(sub)) return false;
              return !ui.selected.cards || !ui.selected.cards.includes(card);
            });
            for (var i = 0; i < equips.length; i++) {
              var info = get.info(equips[i]).distance;
              if (!info) continue;
              if (info.globalTo) {
                range += info.globalTo;
              }
            }
            return range;
          },
          mod: {
            globalFrom(from, to, distance) {
              var count = 0;
              game.countPlayer(function (current) {
                if (from == current) return false;
                if (!current.hasSex('female')) return false;
                current.countCards('e', function (cardx) {
                  if (!['equip1', 'equip2', 'equip5'].includes(get.subtype(cardx))) return false;
                  if (ui.selected.cards && ui.selected.cards.includes(cardx)) return false;
                  const info = lib.card[cardx.name];
                  if (info && info.distance && info.distance.globalFrom) count += info.distance.globalFrom;
                });
              });
              return distance + count;
            },
            globalTo(from, to, distance) {
              var count = 0;
              game.countPlayer(function (current) {
                if (to == current) return false;
                if (!current.hasSex('female')) return false;
                current.countCards('e', function (cardx) {
                  if (!['equip1', 'equip2', 'equip5'].includes(get.subtype(cardx))) return false;
                  if (ui.selected.cards && ui.selected.cards.includes(cardx)) return false;
                  const info = lib.card[cardx.name];
                  if (info && info.distance && info.distance.globalTo) count += info.distance.globalTo;
                });
              });
              return distance + count;
            },
            attackRangeBase(player) {
              let range = player.getEquipRange();
              const players = game.filterPlayer(function (i) {
                if (player == i) return false;
                if (!i.hasSex('female')) return false;
                return true;
              });
              for (const target of players) {
                const equips = target.getCards('e', function (card) {
                  const sub = get.subtype(card);
                  if (!['equip1', 'equip2', 'equip5'].includes(sub)) return false;
                  return !ui.selected.cards || !ui.selected.cards.includes(card);
                });
                const range2 = target.getEquipRange(equips);
                if (range2 > range) range = range2;
              }
              return range;
            },
            attackTo(from, to, distance) {
              var count = 0;
              game.countPlayer(function (current) {
                if (to == current) return false;
                if (!current.hasSex('female')) return false;
                current.countCards('e', function (cardx) {
                  if (!['equip1', 'equip2', 'equip5'].includes(get.subtype(cardx))) return false;
                  if (ui.selected.cards && ui.selected.cards.includes(cardx)) return false;
                  var info = lib.card[cardx.name];
                  if (info && info.distance && info.distance.attackTo) count += info.distance.attackTo;
                });
              });
              return distance + count;
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: ['dieEnd', 'equipEnd', 'loseEnd']
          },
          forced: true,
          filter(event, player) {
            if (event.player.equiping) return false;
            if (!event.player.hasSex('female')) return false;
            if (event.player == player) return false;
            if (event.name == 'lose') {
              return event.es && event.es.length && event.es.filter((card) => ['equip1', 'equip2', 'equip5'].includes(get.subtype(card))).length;
            } else if (event.name == 'equip') {
              return ['equip1', 'equip2', 'equip5'].includes(get.subtype(event.card));
            } else {
              return true;
            }
          },
          init(player) {
            //if(game.online) return;
            var skills = [];
            game.countPlayer(function (current) {
              if (player == current) return false;
              if (!current.hasSex('female')) return false;
              current.countCards('e', function (cardx) {
                if (!['equip1', 'equip2', 'equip5'].includes(get.subtype(cardx))) return false;
                if (ui.selected.cards && ui.selected.cards.includes(cardx)) return false;
                var info = lib.card[cardx.name];
                if (info && info.skills) skills.addArray(info.skills);
              });
            });
            if (skills.length) player.addAdditionalSkills('qtpz_xialuan', skills);
          },
          content() {
            lib.skill.qtpz_xialuan.init(player);
          }
        },
        //龙木岛主---棉花糖
        qtpz_shizhou: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseJieshuBegin'
          },
          content() {
            'step 0';
            player.chooseTarget('选择一名角色令其摸5张牌').set('ai', function (target) {
              var cards = Array.from(ui.cardPile.childNodes).slice(0);
              var list = [];
              for (var i of cards) {
                if (list.length < 5) list.push(i);
              }
              var num = 0;
              var str;
              for (var i of list) {
                str = lib.translate[i.name + '_info'];
                if (str.includes('回复')) {
                  num -= 1;
                }
                if (str.includes('伤害')) {
                  num += 1;
                }
              }
              var player = _status.event.player;
              var att = get.attitude(player, target);
              if (num <= 0) return att;
              return -att;
            });
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
              result.targets[0].draw(5);
            } else {
              event.finish();
            }
            'step 2';
            var list1 = [];
            var list2 = [];
            var cards = result.slice(0);
            var str;
            for (var i of cards) {
              str = lib.translate[i.name + '_info'];
              if (str.includes('回复')) {
                list1.add(i);
              }
              if (str.includes('伤害')) {
                list2.add(i);
              }
            }
            if (list1.length) event.target.recover(list1.length);
            if (list2.length) event.target.damage(list2.length, player, 'nocard');
          },
          ai: {
            unequip2: true
          }
        },
        qtpz_qiecuo: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filterTarget(card, player, target) {
            return target.countCards('h');
          },
          usable: 1,
          selectTarget: [1, 3],
          multitarget: true,
          targetprompt: ['目标一', '目标二', '目标三'],
          prompt: '【切磋】选择至多3名角色切磋武艺',
          content() {
            'step 0';
            event.num = 0;
            'step 1';
            if (!targets[event.num].countCards('h')) {
              event.goto(4);
              return;
            }
            event.draw = false;
            event.cardx = ui.cardPile.childNodes[event.num];
            targets[event.num].chooseCard('请选择一张牌交换牌堆顶第' + get.translation(event.num + 1) + '张牌', 'h', 1, true);
            'step 2';
            if (result.cards?.length) {
              var next = targets[event.num].lose(result.cards[0], ui.cardPile);
              next.insert_index_card = event.cardx;
              next.insert_index = function (event, card) {
                return event.insert_index_card;
              };
              //ui.cardPile.insertBefore(result.cards[0],ui.cardPile.childNodes[event.num]);
              game.log(targets[event.num], '将一张牌置于牌堆');
              game.broadcastAll(function (player) {
                var cardx = ui.create.card();
                cardx.classList.add('infohidden');
                cardx.classList.add('infoflip');
                player.$throw(cardx, 1000, 'nobroadcast');
              }, targets[event.num]);
              if (event.cardx.name == result.cards[0].name || get.type(event.cardx) == 'equip5') event.draw = true;
            } else {
              event.goto(4);
              return;
            }
            'step 3';
            targets[event.num].gain(event.cardx, 'gain2');
            if (event.draw) {
              targets[event.num].draw('bottom');
            }
            'step 4';
            event.num++;
            if (event.num < targets.length) {
              event.goto(1);
            }
          },
          ai: { order: 10, result: { target: 1 } }
        },
        //苏普:霸天20220520
        qtpz_qingcang2: {
          audio: 'qtpz_qingcang',
          trigger: { source: 'damage' },
          filter(event, player) {
            if (!event.card) return false;
            var info = player.storage.qtpz_qingcang2;
            if (!info) return false;
            if (info.card != event.card) return false;
            if (info.target != event.player) return false;
            return event.player.countCards('h');
          },
          forced: true,
          content() {
            player.randomGain(Math.floor(trigger.player.countCards('h') / 2), trigger.player, 'bySelf', 'giveAuto');
          }
        },
        qtpz_qingcang: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            player: 'useCardToTargeted'
          },
          filter(event, player) {
            if (!event.isFirstTarget) return false;
            if (!get.tag(event.card, 'damage')) return false;
            if (!event.targets || !event.targets.length) return false;
            var targets = event.targets.slice(0);
            targets.remove(player);
            return targets.length;
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('qtpz_qingcang'), function (card, player, target) {
              return target != player && _status.event.sourcex.includes(target);
            }).
            set('ai', function (target) {
              var att = get.attitude(player, target);
              if (target.hasSkillTag('nogain')) return 0;
              var usecard = _status.event.evtuse;
              var directHit = usecard.directHit;
              var excluded = usecard.excluded;
              if (att > 0) {
                if (excluded.includes(target)) return 2;
                if (get.tag(usecard.card, 'respondSha') && target.hasSha()) return 0.6;
                if (get.tag(usecard.card, 'respondShan') && target.hasShan()) return 0.6;
                if (target.countCards('h') == 0) return 0.4;
              } else if (att <= 0) {
                if (excluded.includes(target)) return 0;
                if (get.effect(target, usecard.card, player, player) <= 0) return 0;
                if (directHit.includes(target)) return target.countCards('h') + 1;
              }
              return 0;
            }).
            set('sourcex', trigger.targets).
            set('evtuse', trigger.parent);
            'step 1';
            if (result.targets?.length) {
              result.targets[0].draw();
              player.storage.qtpz_qingcang2 = { card: trigger.card, target: result.targets[0] };
              player.addTempSkill('qtpz_qingcang2');
            }
          }
        },
        qtpz_xianyi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player, name) {
            return get.cardPile(function (cardx) {
              var type = get.type(cardx),
                subtype = get.subtype(cardx);
              return type == 'equip' && player.hasEmptySlot(subtype) && player.canUse(cardx, player);
            });
          },
          content() {
            var equip = get.cardPile(function (cardx) {
              var type = get.type(cardx),
                subtype = get.subtype(cardx);
              return type == 'equip' && player.hasEmptySlot(subtype) && player.canUse(cardx, player);
            });
            player.useCard(equip, player);
          },
          ai: {
            order: 10,
            result: {
              player: 1
            },
            threaten: 1.5
          }
        },
        qtpz_numa: {
          mod: {
            globalFrom(from, to, distance) {
              if (from.hasDisabledSlot('equip3')) return;
              var num = 0;
              from.countCards('e', function (equip) {
                var subtype = get.subtype(equip);
                if (subtype != 'equip3') return false;
                if (ui.selected.cards && ui.selected.cards.includes(equip)) return false;
                var info = lib.card[equip.name];
                if (info && info.distance && info.distance.globalTo) num += info.distance.globalTo;
              });
              return distance - num;
            },
            globalTo(from, to, distance) {
              if (to.hasDisabledSlot('equip3')) return;
              var num = 0;
              to.countCards('e', function (equip) {
                var subtype = get.subtype(equip);
                if (subtype != 'equip3') return false;
                if (ui.selected.cards && ui.selected.cards.includes(equip)) return false;
                var info = lib.card[equip.name];
                if (info && info.distance && info.distance.globalTo) num += info.distance.globalTo;
              });
              return distance - num;
            }
          },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCard'
          },
          filter(event, player) {
            var type = get.type(event.card);
            var count = game.countPlayer();
            var num = game.countPlayer(function (current) {
              return current != player && get.distance(player, current) <= 1;
            });
            if (!num) return false;
            var rand = Math.random();
            if (num / count < rand) return false;
            if (type != 'trick' && type != 'basic') return false;
            if (!get.tag(event.card, 'damage')) return false;
            return !['shan', 'tao', 'jiu', 'du'].includes(event.card.name);
          },
          content() {
            trigger.directHit.addArray(game.filterPlayer((target) => target != player));
          }
        },
        //李文秀
        //设诱--霸天
        //新设诱
        qtpz_lwxsheyou_use: {
          audio: 'qtpz_lwxsheyou',
          enable: 'phaseUse',
          filter(event, player) {
            const hs = player.getCards('hs', 'ying');
            if (!hs.length) return false;
            return hs.some(function (ying) {
              const yingSuit = ying.suit;
              const used = get.cardPile(function (cardx) {
                if (get.type(cardx) != 'trick') return false;
                if (yingSuit != cardx.suit) return false;
                const viewAs = { name: cardx.name };
                return event.filterCard(viewAs, player, event);
              });
              if (used) return true;
              const allCards = [];
              game.countPlayer(function (i) {
                allCards.addArray(i.getCards('hejsx'));
              });
              return allCards.some(function (i) {
                if (get.type(i) != 'trick') return false;
                if (yingSuit != i.suit) return false;
                const viewAs = { name: i.name };
                return event.filterCard(viewAs, player, event);
              });
            });
          },
          usable: 1,
          chooseButton: {
            dialog(event, player) {
              const list = [];
              const hs = player.getCards('hs', 'ying');
              if (!hs.length) return false;
              hs.forEach(function (ying) {
                const yingSuit = ying.suit;
                get.cardPile(function (cardx) {
                  if (get.type(cardx) != 'trick') return false;
                  if (yingSuit != cardx.suit) return false;
                  const viewAs = { name: cardx.name };
                  if (event.filterCard && event.filterCard(viewAs, player, event)) list.add(viewAs.name);
                  return false;
                });
                const allCards = [];
                game.countPlayer(function (i) {
                  allCards.addArray(i.getCards('hejsx'));
                });
                allCards.forEach(function (i) {
                  if (get.type(i) != 'trick') return false;
                  if (yingSuit != i.suit) return false;
                  const viewAs = { name: i.name };
                  if (event.filterCard && event.filterCard(viewAs, player, event)) list.add(viewAs.name);
                });
              });
              const vcard = list.map((i) => ['锦囊', '', i]);
              return ui.create.dialog(get.translation('qtpz_lwxsheyou_use'), [vcard, 'vcard']);
            },
            check(button) {
              const player = _status.event.player;
              return player.getUseValue({ name: button.link[2] });
            },
            backup(links, player) {
              return {
                audio: 'qtpz_lwxsheyou',
                linkSults: function (name) {
                  const suits = [];
                  get.cardPile(function (cardx) {
                    const cardName = cardx.name;
                    if (cardName == name) suits.add(cardx.suit);
                    return false;
                  });
                  const allCards = [];
                  game.countPlayer(function (i) {
                    allCards.addArray(i.getCards('hejsx'));
                  });
                  allCards.forEach(function (i) {
                    const cardName = i.name;
                    if (cardName == name) suits.add(i.suit);
                  });
                  return suits;
                }(links[0][2]),
                filterCard(card, player, event) {
                  if (card.name != 'ying') return false;
                  const suit = card.suit;
                  return lib.skill.qtpz_lwxsheyou_use_backup.linkSults.includes(suit);
                },
                position: 'hs',
                popname: true,
                viewAs: { name: links[0][2] },
                precontent() {
                  event.result.skill = 'qtpz_lwxsheyou_use';
                }
              };
            },
            prompt(links, player) {
              return '将一张【影】当作' + get.translation(links[0][2]) + '使用';
            }
          },
          ai: {
            order: 1,
            result: {
              player: 1
            }
          },
          subSkill: {
            backup: {}
          }
        },
        qtpz_lwxsheyou: {
          group: 'qtpz_lwxsheyou_use',
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          getYing(count) {
            var cards = [];
            if (typeof count != 'number') count = 1;
            while (count-- > 0) {
              let card = game.createCard('ying');
              cards.push(card);
            }
            return cards;
          },
          filterTarget(card, player, target) {
            if (target == player) return false;
            return target.countCards('h') > 0;
          },
          content() {
            'step 0';
            player.choosePlayerCard(target, 'h', [1, 3], true, '【设诱】选择目标1—3张手牌');
            'step 1';
            if (result.links?.length) {
              target.lose(result.links, ui.ordering);
              const cards2 = lib.skill.qtpz_lwxsheyou.getYing(result.links.length);
              game.cardsGotoOrdering(cards2);
              event.allCards = result.links.slice(0).concat(cards2);
              event.allCards.randomSort();
              //event.yingCards=cards2.slice(0);
              event.linksCards = result.links.slice(0);
            } else {
              event.finish();
            }
            'step 2';
            target.chooseButton(true, ['选择获得的牌', [event.allCards, 'blank']], event.linksCards.length);
            'step 3';
            if (result.links?.length) {
              target.gain(result.links, 'log', 'gain2');
              const gains = event.allCards.filter((card) => !result.links.includes(card));
              if (gains.length) {
                player.gain(gains, 'log', 'gain2');
              }
            }
          },
          ai: {
            order: 12,
            result: {
              target(player, target) {
                const count = target.countCards('h');
                if (count > 0) {
                  return -(count / 3);
                }
                return 0;
              }
            },
            threaten: 2
          }
        },
        //旧设诱
        qtpz_lwxsheyou_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filterTarget(card, player, target) {
            if (target == player) return false;
            return target.countCards('h') > 0;
          },
          content() {
            'step 0';
            var num = target.countCards('h');
            if (num > 3) num = 3;
            player.choosePlayerCard(target, 'h', [1, 3], '【设诱】选择1到3张牌');
            'step 1';
            if (result.links?.length) {
              target.lose(result.links, ui.ordering);
              var cards2 = get.cards(result.links.length);
              event.allCards = result.links.slice(0).concat(cards2);
              event.allCards.randomSort();
              game.cardsGotoOrdering(cards2);
              event.linksCards = result.links.slice(0);
            } else {
              event.finish();
            }
            'step 2';
            target.chooseButton(true, ['选择获得的牌', [event.allCards, 'blank']], event.linksCards.length);
            'step 3';
            if (result.links?.length) {
              target.gain(result.links, 'log', 'gain2');
              var list = event.linksCards.filter((card) => !result.links.includes(card));
              if (list.length) {
                player.gain(list, 'log', 'gain2');
              }
            }
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                var num = target.countCards('h');
                var bool = get.attitude(player, target) > 0;
                return bool ? num : -num;
              }
            },
            threaten: 2
          }
        },
        //--假象20220509
        qtpz_zhuanqing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseUseBegin' },
          limited: true,
          content() {
            'step 0';
            player.chooseControl('heart2', 'diamond2', 'club2', 'spade2').ai = function (event) {
              switch (Math.floor(Math.random() * 5)) {
                case 0:
                  return 'heart2';
                case 1:
                case 4:
                  return 'diamond2';
                case 2:
                  return 'club2';
                case 3:
                  return 'spade2';
              }
            };
            'step 1';
            game.log(player, '选择了' + get.translation(result.control));
            event.choice = result.control.slice(0, result.control.length - 1);
            'step 2';
            player.addSkill('qtpz_zhuanqing2');
            var suit = event.choice;
            player.storage.qtpz_zhuanqing2 = [];
            player.storage.qtpz_zhuanqing2.add(suit);
            player.markSkill('qtpz_zhuanqing2');
            player.awakenSkill('qtpz_zhuanqing');
          }
        },
        qtpz_zhuanqing2: {
          group: 'qtpz_zhuanqing3',
          marktext: '专情',
          mark: true,
          intro: { content: '你的$花色的牌不计入摸牌;你的$花色的牌不计入手牌上限;回合内使用$花色的牌无次数限制.' },
          mod: {
            ignoredHandcard(card, player) {
              if (card.suit == player.storage.qtpz_zhuanqing2) {
                return true;
              }
            },
            cardDiscardable(card, player, name) {
              if (name == 'phaseDiscard' && card.suit == player.storage.qtpz_zhuanqing2) return false;
            },
            cardUsable(card, player, num) {
              if (card.suit == player.storage.qtpz_zhuanqing2) return Infinity;
            }
          },
          audio: 'qtpz_zhuanqing',
          trigger: { player: 'drawEnd' },
          forced: true,
          audio: 'qtpz_zhuanqing',
          filter(event, player) {
            if (!event.result || !event.result.length) return false;
            for (var i = 0; i < event.result.length; i++) {
              if (event.result[i].suit == player.storage.qtpz_zhuanqing2) return true;
            }
            return false;
          },
          content() {
            var draw = 0;
            for (var i = 0; i < trigger.result.length; i++) {
              if (trigger.result[i].suit == player.storage.qtpz_zhuanqing2) draw++;
            }
            player.draw(draw);
          }
        },
        qtpz_zhuanqing3: {
          audio: 'qtpz_zhuanqing',
          trigger: { player: 'useCard1' },
          silent: true,
          firstDo: true,
          filter(event, player) {
            if (event.card.suit != player.storage.qtpz_zhuanqing2) return false;
            return event.addCount !== false;
          },
          content() {
            trigger.addCount = false;
            var stat = player.getStat();
            if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
          }
        },
        //万震山20220216-----霸天
        qtpz_fengzang: {
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: { global: 'loseAfter' },
          filter(event, player) {
            if (event.type != 'discard') return false;
            if (event.player == player) return false;
            if (!event.player.isIn()) return false;
            return event.cards && event.cards.length && event.cards.jyCanGainD('od').length;
          },
          check(event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          logTarget: 'player',
          content() {
            'step 0';
            var gain = trigger.cards.jyCanGainD('od');
            trigger.player.addToExpansion(gain, 'gain2', 'log').gaintag.add('qtpz_fengzang2');
            trigger.player.addSkill('qtpz_fengzang2');
            'step 1';
            var suits = [];
            var suitx = {};
            var gains = [];
            var storage = trigger.player.getExpansions('qtpz_fengzang2');
            for (var i of storage) {
              var suit = i.suit;
              suits.add(suit);
              if (suit == 'diamond' || lib.jy_mijiList.includes(i.name)) gains.push(i);
              if (suitx[suit]) {
                suitx[suit]++;
              } else suitx[suit] = 1;
            }
            if (suits.length == 4) {
              trigger.player.damage(player, suitx.spade);
            } else {
              event.finish();
              return;
            }
            if (gains.length) {
              player.gain(gains, 'gain2', 'log');
              player.markAuto('qtpz_shishi', [trigger.player]);
            }
            'step 2';
            var cards = trigger.player.getExpansions('qtpz_fengzang2');
            if (cards.length) {
              trigger.player.loseToDiscardpile(cards);
            }
            'step 3';
            trigger.player.removeSkill('qtpz_fengzang2');
          }
        },
        qtpz_fengzang2: {
          forced: true,
          nopop: true,
          charlotte: true,
          firstDo: true,
          temp: true,
          silent: true,
          popup: false,
          group: 'qtpz_fengzang3',
          marktext: '封',
          intro: {
            content: 'expansion',
            markcount: 'expansion'
          },
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          }
        },
        qtpz_fengzang3: {
          forced: true,
          nopop: true,
          charlotte: true,
          firstDo: true,
          temp: true,
          silent: true,
          popup: false,
          audio: 'qtpz_fengzang',
          trigger: { global: 'dieAfter' },
          forced: true,
          filter(event, player) {
            return !game.hasPlayer((target) => target.hasSkill('qtpz_fengzang'));
          },
          content() {
            player.removeSkill('qtpz_fengzang2');
          }
        },
        //弑师
        qtpz_shishi: {
          init(player) {
            if (!player.storage.qtpz_shishi) player.storage.qtpz_shishi = [];
          },
          intro: { content: 'players' },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { source: 'damageSource' },
          forced: true,
          filter(event, player) {
            if (!event.player.isIn()) return false;
            if (!player.storage.qtpz_shishi.includes(event.player)) return false;
            return event.card && event.player.countDiscardableCards(player, 'he');
          },
          content() {
            player.discardPlayerCard(get.prompt2('qtpz_shishi', trigger.player), 'he', trigger.player);
          }
        },
        //水笙----------霸天20220214
        qtpz_pianjia: {
          group: 'qtpz_pianjia2',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'equipEnd' },
          forced: true,
          filter(event, player) {
            return !event.getParent(2).qtpz_pianjia && get.type(event.card) == 'equip' && (get.subtype(event.card) == 'equip3' || get.subtype(event.card) == 'equip4');
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('qtpz_pianjia'), function (card, player, target) {
              var bool = false;
              //if(target.hasEmptySlot('equip1'))bool=true;
              //if(target.hasEmptySlot('equip2'))bool=true;
              if (target.hasEmptySlot('equip3')) bool = true;
              if (target.hasEmptySlot('equip4')) bool = true;
              //if(target.hasEmptySlot('equip5'))bool=true;
              if (!bool) return false;
              return target != player;
            }).
            set('ai', function (target) {
              return get.attitude(player, target);
            });
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
              var card = get.cardPile(function (cardx) {
                var type = get.type(cardx);
                var subtype = get.subtype(cardx);
                if (type != 'equip') return false;
                if (subtype != 'equip3' && subtype != 'equip4') return false;
                return event.target.hasEmptySlot(subtype) && event.target.canUse(cardx, event.target);
              });
              if (card) {
                event.target.useCard(card, event.target).qtpz_pianjia = true;
              } else {
                event.target.chat('没有符合条件的装备牌了吗');
                game.log('但是牌堆里已经没有符合条件的装备牌了!');
              }
              game.asyncDraw([player, event.target]);
            }
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
              }
            },
            threaten: 1.3
          }
        },
        qtpz_pianjia2: {
          audio: 'qtpz_pianjia',
          trigger: { global: 'equipEnd' },
          filter(event, player) {
            return event.player != player && !event.getParent(2).qtpz_pianjia && get.type(event.card) == 'equip' && (get.subtype(event.card) == 'equip3' || get.subtype(event.card) == 'equip4');
          },
          content() {
            var card = get.cardPile(function (cardx) {
              var type = get.type(cardx);
              var subtype = get.subtype(cardx);
              if (type != 'equip') return false;
              if (subtype != 'equip3' && subtype != 'equip4') return false;
              return player.hasEmptySlot(subtype) && player.canUse(cardx, player);
            });
            if (card) {
              player.useCard(card, player).qtpz_pianjia = true;
            } else {
              player.chat('没有符合条件的装备牌了吗');
              game.log('但是牌堆里已经没有符合条件的装备牌了!');
            }
            game.asyncDraw([player, trigger.player]);
          }
        },
        qtpz_yangbian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'equipAfter' },
          forced: true,
          filter(event, player) {
            return game.hasPlayer((target) => target != player && target.countCards('e')) && get.type(event.card) == 'equip' && (get.subtype(event.card) == 'equip3' || get.subtype(event.card) == 'equip4');
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('qtpz_yangbian'), function (card, player, target) {
              return target != player && target.countCards('e');
            }).
            set('ai', function (target) {
              var att = get.attitude(player, target);
              var num = -1;
              if (att < 0 && !target.hasSkillTag('reverseEquip')) num = target.countCards('e');
              return num;
            });
            'step 1';
            if (result.targets?.length) {
              result.targets[0].discard(result.targets[0].getCards('e'));
            }
          }
        },
        qtpz_fenti: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return player.countCards('he', lib.skill.qtpz_fenti.filterCard);
          },
          filterCard(card, player) {
            if (get.type(card) == 'equip') {
              let type = get.subtype(card);
              return type == 'equip3' || type == 'equip4';
            }
            return false;
          },
          check(card) {
            var player = _status.event.player;
            if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
              return 11 - get.equipValue(card) + get.position(card) == 'e' ? 5 : 0;
            }
            return 6 - get.value(card) + get.position(card) == 'e' ? 5 : 0;
          },
          position: 'he',
          content() {
            player.addTempSkill('qtpz_fenti2');
          },
          ai: {
            order: 11,
            result: {
              player: 1
            }
          }
        },
        qtpz_fenti2: {
          mod: {
            targetInRange(card, player, target, now) {
              return true;
            },
            cardUsable(card, player, num) {
              return Infinity;
            }
          },
          charlotte: true,
          forced: true,
          audio: 'qtpz_fenti',
          trigger: { player: 'useCard' },
          filter(event, player) {
            return event.card && (get.type(event.card) == 'trick' || get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name));
          },
          content() {
            trigger.directHit.addArray(
              game.filterPlayer(function (current) {
                return current != player;
              })
            );
          },
          ai: { directHit_ai: true }
        },
        //张三李四
        //赏惩----------霸天20220118
        qtpz_shangcheng: {
          enable: 'phaseUse',
          filterCard() {
            return false;
          },
          selectCard: -1,
          filterTarget(card, player, target) {
            if (!player.storage.qtpz_shangcheng) return true;
            return target.countCards('h');
          },
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:4',
          init(player, skill) {
            player.storage[skill] = false;
          },
          filter(event, player) {
            return game.hasPlayer((target) => lib.skill.qtpz_shangcheng.filterTarget(null, player, target));
          },
          content() {
            if (!player.storage[event.name]) {
              var gain = get.cardPile(function (card) {
                return get.type(card) == 'basic' && card.name != 'sha';
              });
              if (!gain) {
                target.popup('失败', 'fire');
                game.log('牌堆中无符合的牌了!');
                //event.finish();
              } else {
                target.gain(gain, 'gain2', 'log');
              }
            } else {
              var dis = target.getCards('h', function (card) {
                return lib.filter.cardDiscardable(card, target, event.name) && get.tag(card, 'damage');
              });
              if (dis.length) {
                target.discard(dis);
              } else target.say('没有你要求弃置的牌!');
            }
            player.storage[event.name] = player.storage[event.name] ? false : true;
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                if (!player.storage.qtpz_shangcheng) return 1;
                var dis = target.getCards('h', function (card) {
                  return lib.filter.cardDiscardable(card, target, 'qtpz_shangcheng') && get.tag(card, 'damage');
                });
                return -dis.length;
              }
            },
            threaten: 2
          }
        },
        //碧火---霸天
        qtpz_bihuo2: {
          audio: 'qtpz_bihuo',
          mark: true,
          marktext: '火',
          intro: {
            content(storage) {
              return '你中了火毒';
            }
          },
          trigger: { player: 'useCardEnd' },
          forced: true,
          silent: true,
          filter(event, player) {
            return get.color(event.card) == 'red';
          },
          content() {
            player.addMark('qtpz_bihuo2', 1);
            if (player.countMark('qtpz_bihuo2') % 2 == 0) {
              if (
              player.countCards('he', function (card) {
                return get.color(card) == 'black' && lib.filter.cardDiscardable(card, player, event.name);
              }) > 0)

              player.chooseToDiscard('he', true, function (card) {
                return get.color(card) == 'black';
              });
            }
          },
          popup: false
        },
        qtpz_bihuo: {
          mod: {
            cardnature(card, player) {
              if (card.name == 'sha' && card.suit == 'diamond') return 'fire';
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { source: 'damageEnd' },
          forced: true,
          filter(event, player) {
            if (event.parent.name == '_lianhuan' || event.parent.name == '_lianhuan2') return false;
            return event.nature == 'fire' && event.player != player;
          },
          content() {
            if (!trigger.player.hasSkill('qtpz_bihuo2')) {
              trigger.player.addSkill('qtpz_bihuo2');
            } else {
              if (trigger.player.countMark('qtpz_bihuo2') > 0) trigger.player.removeMark('qtpz_bihuo2', trigger.player.countMark('qtpz_bihuo2'));
            }
          }
        },
        //玄冰----藏海
        qtpz_xuanbing2: {
          mod: {
            cardEnabled(card, player) {
              if (player != _status.currentPhase) return;
              if (player.getHistory('useCard').length >= player.countMark('qtpz_xuanbing2')) return false;
            },
            cardUsable(card, player) {
              if (player != _status.currentPhase) return;
              if (player.getHistory('useCard').length >= player.countMark('qtpz_xuanbing2')) return false;
            }
            //cardRespondable:function(card,player){
            //   if(player.countMark('qtpz_xuanbing2')>=player.storage.qtpz_xuanbing2) return false;
            //  },
          },
          audio: 'qtpz_xuanbing', //子技能配音
          mark: true,
          marktext: '冰',
          intro: {
            content(storage) {
              return '你中了玄冰毒,你的下个回合的出牌阶段只能使用' + get.translation(storage) + '张牌';
            }
          },
          trigger: { player: 'phaseJieshuBegin' },
          forced: true,
          silent: true,
          content() {
            player.addMark('qtpz_xuanbing2', 1);
          }
        },
        qtpz_xuanbing: {
          mod: {
            cardnature(card, player) {
              if (card.name == 'sha' && card.suit == 'spade') return 'ice';
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            source: 'damageEnd'
          },
          forced: true,
          filter(event, player) {
            if (event.parent.name == '_lianhuan' || event.parent.name == '_lianhuan2') return false;
            return event.nature == 'ice' && event.player != player;
          },
          content() {
            if (!trigger.player.hasSkill('qtpz_xuanbing2')) {
              trigger.player.addMark('qtpz_xuanbing2', 1);
              trigger.player.addSkill('qtpz_xuanbing2');
            } else {
              if (trigger.player.countMark('qtpz_xuanbing2') > 1) trigger.player.removeMark('qtpz_xuanbing2', trigger.player.countMark('qtpz_xuanbing2') - 1);
            }
          }
        },
        //袁承志温青青
        //蛇行----霸天20220116
        qtpz_shexing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCardToPlayered' },
          forced: true,
          filter(event, player) {
            if (player != _status.currentPhase) return false;
            var hp1 = player.hp % 2;
            var hp2 = event.target.hp % 2;
            return !event.audioed && event.card && event.target != player && hp1 == hp2;
          },
          content() {
            trigger.audioed = true;
          },
          mod: {
            targetInRange(card, player, target, now) {
              if (player != _status.currentPhase) return;
              var hp1 = player.hp % 2;
              var hp2 = target.hp % 2;
              if (target != player && hp1 == hp2) return true;
            },
            cardUsableTarget(card, player, target) {
              if (player != _status.currentPhase) return;
              var hp1 = player.hp % 2;
              var hp2 = target.hp % 2;
              if (target != player && hp1 == hp2) return true;
            }
          }
        },
        //燕妒---霸天
        qtpz_yandu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filterCard() {
            return false;
          },
          selectCard: -1,
          usable: 1,
          filter(event, player) {
            return game.hasPlayer((target) => lib.skill.qtpz_yandu.filterTarget(null, player, target));
          },
          filterTarget(card, player, target) {
            var es = player.getCards('e');
            var hs = player.getCards('h');
            if (target == player) return false;
            if (hs.length && target.countCards('h')) return true;
            if (es.length) {
              es.sort(function (a, b) {
                return b.number - a.number;
              });
              var number = es[0].number;
              if (
              target.countDiscardableCards(player, 'e', function (cardx) {
                return cardx.number > number;
              }))

              return true;
            }
            return false;
          },
          content() {
            'step 0';
            var bool1 = false,
              bool2 = false;
            var es = player.getCards('e');
            var hs = player.getCards('h');
            if (hs.length && target.countCards('h')) bool1 = true;
            if (es.length) {
              es.sort(function (a, b) {
                return b.number - a.number;
              });
              var number = es[0].number;
              if (
              target.countDiscardableCards(player, 'e', function (cardx) {
                return cardx.number > number;
              }))

              bool2 = true;
            }
            //////////////////////////////
            var dish = [],
              dise = [],
              nume = 0,
              numh = 0;
            if (bool1) {
              hs.sort(function (a, b) {
                return b.number - a.number;
              });
              var number = hs[0].number;
              dish = target.getDiscardableCards(player, 'h', function (cardx) {
                return cardx.number > number;
              });
              event.dish = dish;
            }
            if (bool2) {
              es.sort(function (a, b) {
                return b.number - a.number;
              });
              var number = es[0].number;
              dise = target.getDiscardableCards(player, 'e', function (cardx) {
                return cardx.number > number;
              });
              event.dise = dise;
              for (var i of dise) {
                if (get.equipValue(i, target) > 0) {
                  nume++;
                } else nume--;
              }
            }
            //////////////////////////////
            if (bool1 && bool2) {
              numh = dish.length;
              var num = 0;
              if (get.attitude(player, target) < 0) {
                num = numh - nume;
              } else {
                num = nume - numh;
              }
              player.
              chooseControl('装备牌', '手牌', function (event, player) {
                if (_status.event.numx > 0) return '手牌';
                return '装备牌';
              }).
              set('prompt', '燕妒:选择一项').
              set('numx', num);
            } else if (bool1) {
              event._result = { control: '手牌' };
            } else if (bool2) {
              event._result = { control: '装备牌' };
            } else event.finish();
            'step 1';
            if (result.control == '装备牌') {
              if (event.dise.length) target.discard(event.dise);
              event.finish();
              return;
            } else {
              var content = [get.translation(target) + '的手牌', target.getCards('h')];
              player.chooseControl('ok').set('dialog', content);
              game.log(player, '观看了', target, '的手牌');
            }
            'step 2';
            if (event.dish.length) target.discard(event.dish);
          },
          ai: {
            order: 11,
            result: {
              target(player, target) {
                var es = player.getCards('e');
                var hs = player.getCards('h');
                var dish = [],
                  dise = [],
                  nume = 0,
                  numh = 0;
                if (hs.length) {
                  hs.sort(function (a, b) {
                    return b.number - a.number;
                  });
                  var number = hs[0].number;
                  dish = target.getDiscardableCards(player, 'h', function (cardx) {
                    return cardx.number > number;
                  });
                }
                if (es.length) {
                  es.sort(function (a, b) {
                    return b.number - a.number;
                  });
                  var number = es[0].number;
                  dise = target.getDiscardableCards(player, 'e', function (cardx) {
                    return cardx.number > number;
                  });
                  for (var i of dise) {
                    if (get.equipValue(i, target) > 0) {
                      nume++;
                    } else nume--;
                  }
                }
                numh = dish.length;
                if (get.attitude(player, target) < 0) {
                  return numh > nume ? -numh : -nume;
                } else {
                  return nume < 0 ? -nume : 0;
                }
              }
            }
          }
        },
        //穆人清
        //【荡剑】
        qtpz_dangjian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          shaRelated: true,
          trigger: { player: 'useCardToPlayered' },
          check(event, player) {
            return get.attitude(player, event.target) <= 0;
          },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            var number = event.card.number;
            if (typeof number != 'number') return false;
            return (
              event.target.countCards('he', function (card) {
                return Math.abs(number - card.number) > 4 && lib.filter.cardDiscardable(card, event.target, 'qtpz_dangjian');
              }) > 0);

          },
          logTarget: 'target',
          preHidden: true,
          content() {
            var number = trigger.card.number;
            var cards = trigger.target.getCards('he', function (card) {
              return Math.abs(number - card.number) > 4 && lib.filter.cardDiscardable(card, trigger.target, 'qtpz_dangjian');
            });
            trigger.target.discard(cards);
          },
          ai: {
            effect: {
              player(card, player, target) {
                if (card.name != 'sha') return;
                if (get.attitude(player, target) > 0) return;
                var number = card.number;
                if (typeof number != 'number') return;
                var num = target.countCards('he', function (card) {
                  return Math.abs(number - card.number) > 4 && lib.filter.cardDiscardable(card, target, 'qtpz_dangjian');
                });
                return [1, 0, 1, -num];
              }
            },
            unequip: true,
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (!arg.card) return false;
              if (get.attitude(player, arg.target) > 0) return false;
              if (arg && arg.card.name != 'sha') return false;
              var number = arg.card.number;
              if (typeof number != 'number') return false;
              var cards = arg.target.getCards('he', function (card) {
                return Math.abs(number - card.number) > 4 && lib.filter.cardDiscardable(card, arg.target, 'qtpz_dangjian');
              });
              if (tag == 'directHit_ai')
              return !arg.target.countCards('h', function (card) {
                return !cards.includes(card) && card.name == 'shan';
              });
              var equip = arg.target.getEquip(2);
              if (tag == 'unequip' && equip) {
                return cards.includes(equip);
              }
              return false;
            }
          }
        },
        //【仙猿】
        qtpz_xianyuan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filter(event, player) {
            if (!player.countCards('h')) return false;
            if (
            player.countCards('h', function (card) {
              return card.number > 7;
            }))
            {
              if (
              !player.countCards('h', function (card) {
                return card.number <= 7;
              }))
              {
                return true;
              }
            }
            if (
            player.countCards('h', function (card) {
              return card.number < 7;
            }))
            {
              if (
              !player.countCards('h', function (card) {
                return card.number >= 7;
              }))
              {
                return true;
              }
            }
            return false;
          },
          content() {
            var bool = false;
            if (
            player.countCards('h', function (card) {
              return card.number > 7;
            }))
            {
              if (
              !player.countCards('h', function (card) {
                return card.number <= 7;
              }))
              {
                bool = true;
              }
            }
            var card = get.cardPile(function (cardx) {
              if (bool) {
                return cardx.number < 7;
              } else return cardx.number > 7;
            });
            if (card) player.gain(card, 'log', 'gain2');
          },
          ai: { basic: { order: 11 }, result: { player: 1 } }
        },
        //何红药
        qtpz_zidao2: {
          forced: true,
          popup: false,
          charlotte: true,
          mark: true,
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_zidao.png',
          intro: { content: '你背叛五毒教,现罚你:每当你受到$牌的伤害后,你需弃置一张牌.' },
          audio: 'qtpz_zidao',
          trigger: { player: 'damageEnd' },
          filter(event, player) {
            if (player.countCards('he') == 0) return false;
            if (!event.card) return false;
            if (!player.storage.qtpz_zidao2.includes(event.card.suit)) return false;
            return (
              player.countCards('he', function (card) {
                return lib.filter.cardDiscardable(card, player, 'qtpz_zidao2');
              }) > 0);

          },
          autodelay: true,
          content() {
            player.chooseToDiscard(true, 'he');
          },
          ai: {
            effect: {
              target(card, player, target) {
                if (
                get.tag(card, 'damage') &&
                target.storage.qtpz_zidao2.includes(card.suit) &&
                target.countCards('he', function (card) {
                  return lib.filter.cardDiscardable(card, player, 'qtpz_zidao2');
                }) > 0)

                return [1, -1];
              }
            }
          }
        },
        qtpz_zidao: {
          ai: { basic: { order: 1 }, result: { player: 1 } },
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return get.cardPile(function (card) {
              return get.type(card, 'trick') == 'equip';
            });
          },
          content() {
            'step 0';
            event.count = 2;
            'step 1';
            event.count--;
            var equip = get.cardPile(function (card) {
              return get.type(card, 'trick') == 'equip';
            });
            if (equip) {
              event.equip = equip;
              player.gain(equip, 'gain2');
            } else {
              event.finish();
            }
            'step 2';
            if (event.equip && player.getCards('h').includes(event.equip)) {
              event.togive = event.equip;
              if (!player.storage.qtpz_zidao2) player.storage.qtpz_zidao2 = [];
              player.storage.qtpz_zidao2.add(event.togive.suit);
              player.addTempSkill('qtpz_zidao2', { player: 'phaseBefore' });
              player.markSkill('qtpz_zidao2');
              player.
              chooseTarget('将' + get.translation(event.togive) + '交给一名其他角色', function (card, player, target) {
                return target != player;
              }).
              set('ai', function (target) {
                var player = _status.event.player;
                if (get.type(event.togive) == 'equip' && player.hasEmptySlot(get.subtype(event.togive)) && get.effect(player, event.togive, player, player) > 0) return -1;
                var att = get.attitude(player, target);
                if (att > 0 && !target.hasDisabledSlot(get.subtype(event.togive))) {
                  return get.effect(target, event.togive, target, target);
                } else {
                  return att / 100;
                }
              });
            } else {
              event._result = { bool: false };
            }
            'step 3';
            if (result.targets?.length) {
              player.line(result.targets, 'green');
              player.give(event.equip, result.targets[0], true);
              //result.targets[0].gain(event.equip,player,'giveAuto','log');
            }
            'step 4';
            if (
            event.count > 0 &&
            get.cardPile(function (card) {
              return get.type(card, 'trick') == 'equip';
            }))
            {
              player.chooseBool('是否继续获得一张装备牌?').set('ai', function () {
                return true;
              });
            } else {
              event.finish();
            }
            'step 5';
            if (result.bool) {
              event.goto(1);
            }
          }
        },
        qtpz_yuandu2: {
          audio: 'qtpz_yuandu',
          trigger: { player: 'loseAfter' },
          forced: true,
          filter(event, player) {
            if (event.type != 'discard') return false;
            var cards = player.getExpansions('qtpz_yuandu2');
            if (!cards.length) return false;
            return event.cards && event.cards.length;
          },
          content() {
            'step 0';
            var cards = player.getExpansions('qtpz_yuandu2');
            var suit = cards[0].suit;
            player.removeSkill('qtpz_yuandu2');
            var lose = true;
            if (Array.isArray(trigger.cards))
            for (var i of trigger.cards) {
              if (i.suit == suit) {
                lose = false;
              }
            }
            if (lose) {
              player.loseHp();
            }
          },
          marktext: '毒',
          mark: true,
          intro: {
            content: 'expansion',
            markcount: 'expansion'
          },
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          }
        },
        qtpz_yuandu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'loseAfter'
          },
          filter(event, player) {
            if (event.type != 'discard') return false;
            for (var i = 0; i < event.cards2.length; i++) {
              if (get.position(event.cards2[i]) == 'd') {
                return game.hasPlayer(function (current) {
                  var cards = current.getExpansions('qtpz_yuandu2');
                  return player != current && !cards.length;
                });
              }
            }
            return false;
          },
          forced: true,
          content() {
            'step 0';
            event.cards = [];
            for (var i = 0; i < trigger.cards2.length; i++) {
              if (get.position(trigger.cards2[i], true) == 'd') {
                event.cards.push(trigger.cards2[i]);
              }
            }
            'step 1';
            if (event.cards.length > 1) {
              var goon = game.hasPlayer(function (current) {
                return player != current && get.attitude(player, current) < 0 && !current.hasSkill('qtpz_yuandu2');
              });
              player.
              chooseCardButton(get.prompt('qtpz_yuandu'), event.cards, [1, 1]).
              set('ai', function (button) {
                if (!_status.event.goon) return 0;
                return 1;
              }).
              set('goon', goon);
            } else if (event.cards.length == 1) {
              event._result = { links: event.cards.slice(0), bool: true };
              event.nochoose = true;
            } else {
              event.finish();
            }
            'step 2';
            if (result.links?.length) {
              event.togive = result.links.slice(0);
              player.
              chooseTarget(event.nochoose ? get.prompt('qtpz_yuandu') : '怨毒', '将' + get.translation(result.links) + '当「怨」置于一名其他角色的侠客牌上', event.nochoose ? null : true, function (card, player, target) {
                return target != player && !target.hasSkill('qtpz_yuandu2');
              }).
              set('ai', function (target) {
                var att = get.attitude(_status.event.player, target);
                return -att;
              });
            } else {
              event.finish();
            }
            'step 3';
            if (result.targets?.length) {
              result.targets[0].addToExpansion(event.togive, 'gain2', 'log').gaintag.add('qtpz_yuandu2');
              result.targets[0].addSkill('qtpz_yuandu2');
            } else {
              event.finish();
            }
          }
        },
        //勾践
        qtpz_taohui: {
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            player: ['phaseDiscardBegin', 'phaseJieshuBegin'],
            target: 'useCardToTarget'
          },
          forced: true,
          filter(event, player, name) {
            if (name == 'phaseDiscardBegin') return player.countCards('h', { type: 'equip' }) && player.countCards('h') > player.getHandcardLimit();
            if (name == 'useCardToTarget') return !player.countCards('e') && event.card.name == 'sha';
            return !player.countCards('e');
          },
          content() {
            if (event.triggername != 'phaseDiscardBegin') {
              player.draw();
            }
          },
          mod: {
            ignoredHandcard(card, player) {
              if (get.type(card) == 'equip') {
                return true;
              }
            },
            cardDiscardable(card, player, name) {
              if (name == 'phaseDiscard' && get.type(card) == 'equip') return false;
            }
          }
        },
        qtpz_xingguo: {
          juexingji: true,
          derivation: 'qtpz_jingjia',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseZhunbeiBegin' },
          forced: true,
          filter(event, player) {
            if (player.storage.qtpz_xingguo) return false;
            return player.countCards('h', { type: 'equip' }) > player.countCards('h') - player.countCards('h', { type: 'equip' });
          },
          content() {
            'step 0';
            player.awakenSkill('qtpz_xingguo');
            player.storage.qtpz_xingguo = true;
            player.loseMaxHp();
            'step 1';
            if (player.isDamaged()) player.recover();
            'step 2';
            var equipnum = player.countCards('h', { type: 'equip' });
            var basicnum = player.countCards('h', { type: 'basic' });
            var tricknum = player.countCards('h', { type: 'trick' });
            var basic = equipnum - basicnum;
            var trick = equipnum - tricknum;
            /////////////////
            var gain1 = get.randomCards(basic, function (cardx) {
              var type = get.type(cardx, 'trick');
              return type == 'basic';
            });
            /////////////////
            var gain2 = get.randomCards(trick, function (cardx) {
              var type = get.type(cardx, 'trick');
              return type == 'trick';
            });
            /////////////////
            if (gain1 && gain1.length) {
              player.gain(gain1, 'draw', 'log');
            }
            if (gain2 && gain2.length) {
              player.gain(gain2, 'draw', 'log');
            }
            //////////////////
            'step 3';
            player.addSkills('qtpz_jingjia');
          },
          ai: {
            effect: {
              target(card, player, target) {
                if (player == target && get.type(card) == 'equip' && player.hasSkill('qtpz_taohui') && !player.storage.qtpz_xingguo) {
                  return 0;
                }
              }
            }
          }
        },
        qtpz_jingjia: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCardAfter' },
          forced: true,
          filter(event, player) {
            if (event.cards && event.cards.length && event.cards.length == 1) {
              var list = get.jy_cardNameList(event.card);
              return list.some(function (i) {
                var card;
                if (i.includes('sha::')) {
                  var name = i.split('::');
                  card = { name: name[0], nature: name[1] };
                } else card = { name: i };
                var type = get.type(card, null, false);
                if (type != 'trick' && type != 'basic') return false;
                return player.hasUseTarget(card, false);
              });
            }
            return false;
          },
          content() {
            'step 0';
            var list2 = get.jy_cardNameList(trigger.card);
            var list = [];
            list2.filter(function (i) {
              var card, vcard;
              if (i.includes('sha::')) {
                var name = i.split('::');
                card = { name: name[0], nature: name[1] };
                vcard = [get.type(name[0]), '', name[0], name[1]];
              } else {
                card = { name: i };
                vcard = [get.type(i), '', i];
              }
              var type = get.type(card, null, false);
              if (type != 'trick' && type != 'basic') return false;
              if (player.hasUseTarget(card, false)) list.push(vcard);
            });
            if (list.length == 1) {
              event._result = { bool: true, links: list };
              event.nochoose = true;
            } else {
              player.
              chooseButton('hidden', [get.prompt('qtpz_jingjia'), [list, 'vcard'], 'hidden']).
              set('ai', function (button) {
                return _status.event.player.getUseValue(
                  {
                    name: button.link[2],
                    nature: button.link[3]
                  },
                  false
                );
              }).
              set('filterButton', function (button) {
                return _status.event.player.hasUseTarget(
                  {
                    name: button.link[2],
                    nature: button.link[3]
                  },
                  false
                );
              });
            }
            'step 1';
            if (result.links?.length) {
              var card = { name: result.links[0][2], nature: result.links[0][3] };
              var next = player.chooseUseTarget(card, event.nochoose ? null : true, 'nodistance', false);
              if (event.nochoose) {
                next.set('prompt', get.prompt('qtpz_jingjia'));
                next.set('prompt2', '使用一张' + get.translation(card));
              }
            }
          }
        },
        //赵半山
        qtpz_feisuo: {
          enable: 'chooseToUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          filterCard(card, player) {
            return get.color(card) == 'black';
          },
          position: 'hs',
          viewAs: { name: 'jydiy_feiyanyinsuo' },
          viewAsFilter(player) {
            if (!player.countCards('hs', { color: 'black' })) return false;
            return true;
          },
          prompt: '将一张黑色牌当飞燕银梭使用',
          check(card) {
            return 6 - get.value(card);
          }
        },
        qtpz_roudao: {
          mod: {
            aiOrder(player, card, num) {
              if (card.name == 'jiu') return num + 0.1;
              if (get.color(card) == 'red') return num + 0.1;
            },
            aiValue(player, card, num) {
              ///////////////////////////////////////
              var color = get.color(card);
              var equip1 = player.getEquip(1);
              if (player.countCards('h', { color: 'red' }) && equip1 && card != equip1 && (equip1.name == 'zhangba' || equip1.name == 'jydiy_zhenwujian')) return num / 10;
              if (card.name == 'zhangba') return 10;
              if (card.name == 'jydiy_zhenwujian') return 10;
              ////////////////////////////////////////
              if (
              !player.countCards('h', function (cardx) {
                return cardx != card && get.color(cardx) == color && color == 'red';
              }))

              return num / 4;
            }
          },
          audio: 'ext:金庸群侠传/peiyin:4',
          //audioname:["yttl_zhangsongxi"],
          audioname2: {
            //武将名:引用的技能配音
            yttl_zhangsongxi: 'yttl_roudaozsx'
          },
          trigger: {
            player: ['loseAfter'],
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter']
          },
          forced: true,
          filter(event, player) {
            if (player.countCards('h', { color: 'red' })) return false;
            var evt = event.getl(player);
            if (evt && evt.player == player && evt.hs && evt.hs.length) {
              for (var i of evt.hs) {
                if (get.color(i, player) == 'red') return true;
              }
            }
            return false;
          },
          content() {
            'step 0';
            player.draw();
            'step 1';
            //if(result&&get.color(result[0],player)!='red')event.goto(0)
            if (result && result.length) {
              for (var i of result) {
                if (get.color(i, player) == 'red') return;
              }
              event.goto(0);
            }
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                //if(player!=target) return ;
                //ai 快乐矛 ai快乐剑
                if (get.type(card) == 'equip' && get.subtype(card) == 'equip1') {
                  var equip1 = target.getEquip(1);
                  if (equip1 && (equip1.name == 'zhangba' || equip1.name == 'jydiy_zhenwujian')) return [0.1, -20];
                }
                if (card.name == 'zhangba' || card.name == 'jydiy_zhenwujian') return [1, 20];
              }
            },
            noh: true,
            taiJiBuff: true,
            taijiTag: true,
            nokeep: true, ///有桃直接啃了
            skillTagFilter(player, tag) {
              if (tag == 'taiJiBuff') {
                if (!player.countCards('h', { color: 'red' })) return false;
              }
              if (tag == 'noh') {
                if (player.countCards('h', { color: 'red' }) != 1) return false;
              }
            }
          }
        },
        //弘历
        qtpz_woxuan: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (game.countPlayer() < 3) return false;
            var list = [];
            game.countPlayer(function (target) {
              list.add(target.countCards('h'));
            });
            return list.length >= 3;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filterTarget(card, player, target) {
            for (var i = 0; i < ui.selected.targets.length; i++) {
              if (ui.selected.targets[i].countCards('h') == target.countCards('h')) return false;
            }
            return true;
          },
          multitarget: true,
          multiline: true,
          selectTarget: 3,
          content() {
            'step 0';
            targets.sort(function (a, b) {
              return a.countCards('h') - b.countCards('h');
            });
            event.drawnum = targets[1].countCards('h') - targets[0].countCards('h');
            event.disnum = targets[2].countCards('h') - targets[1].countCards('h');
            'step 1';
            targets[0].draw(event.drawnum);
            'step 2';
            if (result && result.length >= 3) targets[0].loseHp();
            'step 3';
            targets[2].chooseToDiscard(true, 'h', event.disnum);
            'step 4';
            if (result.bool && result.cards && result.cards.length >= 3) {
              if (targets[2].isDamaged()) targets[2].recover();
            }
          },
          ai: {
            order: 8,
            result: {
              target(player, target) {
                var players = game.filterPlayer();
                players.sort(function (a, b) {
                  return a.countCards('h') - b.countCards('h');
                });
                if (ui.selected.targets.length == 0) {
                  var num = players.length - players.indexOf(target);
                  return num > 0 ? num : 0;
                } else if (ui.selected.targets.length == 1) {
                  var targetx = ui.selected.targets[0];
                  if (players.indexOf(target) - players.indexOf(targetx) > 1) return -players.indexOf(target);
                } else {
                  var target0 = ui.selected.targets[0];
                  var target1 = ui.selected.targets[1];
                  var index0 = players.indexOf(target0);
                  var index1 = players.indexOf(target1);
                  var index2 = players.indexOf(target);
                  if (index2 > index0 && index2 < index1) return get.attitude(player, target) > 0 ? 0.5 : -0.5;
                }
                return 0;
              }
            }
          }
        },
        qtpz_chezhou: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            if (!player.countCards('h')) return false;
            return game.hasPlayer(function (target) {
              return player != target && target.countCards('e') > player.countCards('e') && target.inRange(player);
            });
          },
          position: 'h',
          filterCard(card, player) {
            return true;
          },
          filterTarget(card, player, target) {
            return player != target && target.countCards('e') > player.countCards('e') && target.inRange(player);
          },
          content() {
            target.damage('nocard');
          },
          check(card) {
            return 10 - get.value(card);
          },
          ai: {
            order: 8.5,
            result: {
              target(player, target) {
                return get.damageEffect(target, player);
              }
            }
          },
          threaten: 1.5
        },
        qtpz_tianzun: {
          group: ['qtpz_tianzun_remove'],
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
                player.removeSkill('qtpz_tianzun');
              }
            }
          },
          zhuSkill: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { target: 'useCardToTarget' },
          filter(event, player) {
            if (!player.hasZhuSkill('qtpz_tianzun')) return false;
            if (event.card.name != 'sha') return false;
            return game.hasPlayer(function (current) {
              var group = 'wei';
              if (lib.jy_changeSkill) group = 'jy_qing';
              if (group != current.group) return false;
              var nature = get.nature(event.card);
              if (!nature) nature = 'none';
              if (current.storage.qtpz_tianzun && current.storage.qtpz_tianzun.includes(nature)) return false;
              return current != player && lib.filter.targetEnabled(event.card, event.player, current);
            });
          },
          check(event, player) {
            var evt = event.parent;
            if (evt.excluded && evt.excluded.includes(player)) return false;
            if (get.damageEffect(player, event.player, player) >= 0) return false;
            return !player.hasShan() || evt.directHit && evt.directHit.includes(player);
          },
          content() {
            'step 0';
            event.targets = game.
            filterPlayer(function (current) {
              var group = 'wei';
              if (lib.jy_changeSkill) group = 'jy_qing';
              if (group != current.group) return false;
              var nature = get.nature(trigger.card);
              if (!nature) nature = 'none';
              if (current.storage.qtpz_tianzun && current.storage.qtpz_tianzun.includes(nature)) return false;
              return current != player && lib.filter.targetEnabled(trigger.card, trigger.player, current);
            }).
            sortBySeat();
            'step 1';
            if (event.targets.length) {
              event.current = event.targets.shift();
              if (!event.current.isIn()) {
                event.redo();
                return;
              }
              event.current.chooseBool('是否替' + get.translation(player) + '成为' + get.translation(trigger.card) + '的目标？').set('ai', function () {
                var evt = _status.event;
                var player = _status.event.player;
                var trigger = evt.getTrigger();
                var evt = trigger.parent;
                if (get.attitude(player, trigger.target) <= 0) return false;
                if (evt.excluded && evt.excluded.includes(player)) return true;
                if (evt.directHit && evt.directHit.includes(player)) return false;
                if (player.hasShan()) return true;
                return false;
              });
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              event.finish();
              var nature = get.nature(trigger.card);
              if (!nature) nature = 'none';
              if (!event.current.storage.qtpz_tianzun) event.current.storage.qtpz_tianzun = [];
              event.current.storage.qtpz_tianzun.add(nature);
              var evt = trigger.parent;
              evt.triggeredTargets2.remove(player);
              evt.targets.remove(player);
              evt.targets.push(event.current);
              event.current.line(player, 'fire');
            } else {
              event.goto(1);
            }
          }
        },
        //范蠡
        qtpz_shangsheng: {
          ai: {
            basic: { order: 10 },
            result: {
              target(player, target) {
                var att = get.attitude(player, target);
                var card = ui.selected.cards[0];
                if (card && !target.countCards('h') && att > 0) return get.effect(target, card, target, target);
                if (card && att < 0) {
                  var number = card.number,
                    num = 0;
                  target.countCards('h', function (cardx) {
                    num += cardx.number;
                  });
                  if (num <= number) {
                    var num2 = target.countCards('h') - 1;
                    return num2 > 0 ? -num2 : 0;
                  }
                }
                return 0;
              }
            },
            threaten: 1.3
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filter(event, player) {
            return player.countCards('e', { type: 'equip' }) > 0;
          },
          position: 'e',
          filterCard(card, player) {
            return get.type(card) == 'equip';
          },
          check(card) {
            var player = _status.currentPhase;
            if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
              return 11 - get.equipValue(card);
            }
            return 6 - get.value(card);
          },
          filterTarget(card, player, target) {
            if (target.isMin()) return false;
            var type = get.subtype(card);
            return player != target && target.hasEmptySlot(type);
          },
          usable: 1,
          content() {
            'step 0';
            target.equip(cards[0]);
            event.number = cards[0].number;
            'step 1';
            var number = 0;
            target.countCards('h', function (cardx) {
              number += cardx.number;
            });
            if (number <= event.number) {
              if (target.countCards('h')) target.give(target.getCards('h'), player);
              event.finish();
              return;
            } else {
              var str = '交给' + get.translation(player) + '任意张点数之和不小于' + event.number + '的手牌';
              target.
              choosePlayerCard(target, str, true, 'h').
              set('ai', function (button) {
                var player = _status.event.player;
                var number = _status.event.number;
                var num = 0;
                var sourcex = _status.event.sourcex;
                var attitude = get.attitude(player, sourcex);
                if (attitude <= 0) {
                  for (var i = 0; i < ui.selected.buttons.length; i++) {
                    num += ui.selected.buttons[i].link.number;
                  }
                  if (num >= number) return -1;
                  return button.link.number;
                } else {
                  return 14 - button.link.number;
                }
              }).
              set('sourcex', player).
              set('number', event.number).
              set('selectButton', function () {
                var player = _status.event.player;
                var number = _status.event.number;
                var num = 0;
                var sourcex = _status.event.sourcex;
                for (var i = 0; i < ui.selected.buttons.length; i++) {
                  num += ui.selected.buttons[i].link.number;
                }
                if (num >= number) {
                  return [ui.selected.buttons.length, player.countCards('h')];
                } else {
                  return [ui.selected.buttons.length + 1, player.countCards('h')];
                }
              });
            }
            'step 2';
            if (result.links?.length) {
              target.give(result.links, player);
            }
          },
          lose: false,
          discard: false,
          prepare(cards, player, targets) {
            player.$give(cards, targets[0], false);
          }
        },
        qtpz_aibing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          selectCard: [2, 2],
          filter(event, player) {
            return player.countCards('he') >= 2;
          },
          check(card) {
            return 10 - get.value(card);
          },
          filterCard(card, player, event) {
            return lib.filter.cardDiscardable.apply(this, arguments);
          },
          position: 'he',
          filterTarget(card, player, target) {
            return target != player;
          },
          selectTarget: -1,
          content() {
            'step 0';
            if (
            target.countCards('e', function (cardx) {
              return get.type(cardx) == 'equip' && target.next.hasEmptySlot(get.subtype(cardx));
            }))
            {
              target.
              choosePlayerCard(
                target,
                'e',
                function (button) {
                  var player = _status.event.player;
                  var targets0 = _status.event.targets0;
                  return get.attitude(player, targets0);
                },
                true
              ).
              set('targets0', target.next).
              set('filterButton', function (button) {
                var targets0 = _status.event.targets0;
                return targets0.hasEmptySlot(get.subtype(button.link));
              }).
              set('prompt', '选择一张装备牌令' + get.translation(target.next) + '装备之');
            } else if (
            target.countCards('he', function (card) {
              return lib.filter.cardDiscardable(card, target, 'qtpz_aibing');
            }))
            {
              target.chooseToDiscard(true, 'he');
              event.finish();
              return;
            } else {
              event.finish();
              return;
            }
            'step 1';
            if (result.links?.length) {
              target.$give(result.links[0], target.next, false);
              target.next.equip(result.links[0]);
            } else if (
            target.countCards('he', function (card) {
              return lib.filter.cardDiscardable(card, target, 'qtpz_aibing');
            }))
            {
              target.chooseToDiscard(true, 'he');
            }
          }
        },
        qtpz_shanchao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'discardBefore' },
          check(event, player) {
            return get.attitude(player, event.player) < 0;
          },
          logTarget: 'player',
          filter(event, player) {
            if (event.player == player) return false;
            if (event.parent.name != 'chooseToDiscard' || event.getParent(2).name != 'phaseDiscard') return false;
            var position = event.parent.position || 'h';
            if (
            !event.player.getCards(position, function (card) {
              return !event.cards.includes(card);
            }).length)

            return false;
            return true;
          },
          content() {
            'step 0';
            var position = trigger.parent.position || 'h';
            var prompt = get.translation(trigger.player) + '即将弃置' + get.translation(trigger.cards);
            player.
            choosePlayerCard(prompt, 'visible', trigger.player, position, trigger.cards.length, true).
            set('filterButton', function (button) {
              return lib.filter.cardDiscardable(button.link, _status.event.sourcex, _status.event.eventx);
            }).
            set('sourcex', trigger.player).
            set('eventx', trigger.parent).
            set('ai', function (button) {
              var player = _status.event.player;
              var target = _status.event.sourcex;
              var bool = get.attitude(player, target) > 0;
              var value = get.value(button.link, target);
              return bool ? -value : value;
            });
            'step 1';
            trigger.cards = result.links;
            trigger.parent.result.cards = result.links;
          }
        },
        qtpz_shanchao_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'phaseDiscardBegin' },
          check(event, player) {
            return get.attitude(player, event.player) < 0;
          },
          logTarget: 'player',
          filter(event, player) {
            if (event.player == player) return false;
            var handcards = event.player.getCards('h');
            var discardNum = handcards.length - event.player.getHandcardLimit();
            return discardNum > 0;
          },
          content() {
            'step 0';
            var handcards = trigger.player.getCards('h');
            if (handcards) {
              var discardNum = handcards.length - trigger.player.getHandcardLimit();
              if (discardNum > 0) {
                player.discardPlayerCard(discardNum, trigger.player, true, 'h');
              }
            }
            //player.choosePlayerCard(trigger.player,'h',trigger.cards.length,true);
          }
        },
        qtpz_jiedang: {
          content() {
            'step 0';
            event.forceDie = true;
            event.count = 0;
            event.targets = game.filterPlayer(function (target) {
              return (target == player.next || target == player.previous) && target.countCards('he');
            });
            if (!event.targets.length) {
              event.finish();
              return;
            }
            'step 1';
            if (targets.length) {
              var target = targets.shift();
              event.target = target;
              if (!target.isIn()) {
                event.redo();
                return;
              }
              target.addTempClass('target');
              lib.skill.qtpz_jiedang.useCard(target, player, trigger.card);
            } else {
              event.goto(4);
            }
            'step 2';
            if (result.bool) {
              event.goto(1);
              event.count++;
              target.say(['微臣岂敢不从？', '还望九千岁大人多多提携!', '人在屋檐下,不得不低头,唉.'].randomGet());
            } else {
              var bool =
              target.countCards('he', function (card) {
                return lib.filter.cardDiscardable(card, target, 'qtpz_jiedang');
              }) > 0;
              if (bool) {
                target.say(['区区阉奴,还妄想我听命于你？', '奸贼!你怎能欺君罔上!', '我誓不与你等同流合污!'].randomGet());
                target.chooseToDiscard('he', true);
              }
              player.
              chooseBool().
              set('ai', function () {
                if (get.attitude(player, target) > 0) return false;
                return true;
              }).
              set('prompt', '是否令' + get.translation(target) + '本局不能使用' + get.translation(trigger.card.name) + '？');
            }
            'step 3';
            if (result.bool) {
              target.addSkill('qtpz_jiedang_nouse');
              target.markAuto('qtpz_jiedang_nouse', [trigger.card.name]);
              player.say('哼哼？有种!');
              player.line(target);
            }
            event.goto(1);
            'step 4';
            if (event.count > 0) player.draw(event.count);
          },
          subSkill: {
            nouse: {
              forced: true,
              charlotte: true,
              onpop: false,
              popup: false,
              firstDo: true,
              mark: true,
              marktext: '※',
              intro: {
                content: '不能使用或打出$'
              },
              mod: {
                cardEnabled(card, player) {
                  if (player.getStorage('qtpz_jiedang_nouse').includes(card.name)) return false;
                }
              }
            },
            use: {
              filterCard(card, player) {
                return get.itemtype(card) == 'card';
              },
              check(card) {
                return 8 - get.value(card);
              },
              log: false,
              selectCard: 1,
              popname: true,
              charlotte: true,
              fixed: true
            }
          },
          useCard(playerx, sourcex, cardx) {
            var fakeCard = { name: cardx.name, nature: cardx.nature };
            lib.skill.qtpz_jiedang_use.viewAs = fakeCard;
            var next = playerx.chooseToUse();
            if (next.isOnline()) {
              playerx.send(function (card) {
                lib.skill.qtpz_jiedang_use.viewAs = card;
              }, fakeCard);
            }
            next.set('openskilldialog', '结党:将一张' + get.translation(cardx.suit) + '手牌当' + get.translation(fakeCard) + '使用,否则你需弃置一张牌');
            next.set('norestore', true);
            next.set('targetx', sourcex);
            next.set('suitx', cardx.suit);
            next.set('_backupevent', 'qtpz_jiedang_use');
            next.set('filterTarget', function (card, player, target) {
              if (target == _status.event.targetx) return false;
              return lib.filter.filterTarget.apply(this, arguments);
            });
            next.set('filterCard', function (card, player, event) {
              return _status.event.suitx && card.suit == _status.event.suitx && lib.filter.filterCard.apply(this, arguments);
            });
            next.set('custom', {
              add: {},
              replace: { window() {} }
            });
            next.backup('qtpz_jiedang_use');
            return next;
          },
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: { player: 'useCardAfter' },
          logTarget(event, player) {
            return game.filterPlayer(function (target) {
              return (target == player.next || target == player.previous) && target.countCards('he');
            });
          },
          check(event, player) {
            var targets = game.filterPlayer(function (target) {
              return (target == player.next || target == player.previous) && target.countCards('he');
            });
            var number = 0;
            var suit = event.card.suit;
            for (var target of targets) {
              var bool = get.attitude(player, target) > 0;
              if (
              game.hasPlayer(function (current) {
                return target.countCards('h', function (card) {
                  if (card.suit != suit) return false;
                  var cardxx = {
                    name: event.card.name,
                    nature: event.card.nature,
                    cards: [card]
                  };
                  return current != player && target.canUse(cardxx, current) && target.hasValueTarget(cardxx);
                });
              }))
              {
                if (bool) {
                  number++;
                } else {
                  number--;
                }
              } else {
                if (bool) {
                  number--;
                } else {
                  number++;
                }
              }
            }
            return number > 0;
          },
          filter(event, player) {
            if (!['heart', 'diamond', 'club', 'spade'].includes(event.card.suit)) return false;
            if (get.type(event.card) != 'trick') return false;
            if (!get.info(event.card).enable) return false;
            if (!player.isPhaseUsing()) return false;
            return game.hasPlayer(function (target) {
              return (target == player.next || target == player.previous) && target.countCards('he');
            });
          }
        },
        qtpz_chenyu: {
          trigger: { player: 'phaseJieshuBegin' },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          content() {
            'step 0';
            var cards = get.cards(3);
            game.cardsGotoOrdering(cards).relatedEvent = trigger;
            player.showCards(cards);
            event.cards = cards;
            'step 1';
            var gain = [];
            if (Array.isArray(cards))
            for (var i of cards) {
              if (!player.countCards('h', { suit: i.suit })) gain.push(i);
            }
            if (gain.length) player.gain(gain, 'log', 'draw');
          }
        },
        qtpz_huoxin: {
          subSkill: {
            cards: {
              trigger: { player: 'phaseUseBegin' },
              temp: true,
              charlotte: true,
              forced: true,
              mark: true,
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_huoxin.jpg',
              intro: {
                content: 'expansion',
                markcount: 'expansion'
              },
              onremove(player, skill) {
                var cards = player.getExpansions(skill);
                if (cards.length) player.loseToDiscardpile(cards);
              },
              content() {
                'step 0';
                var cardx = player.getExpansions('qtpz_huoxin_cards'),
                  use = [];
                for (var i = 0; i < cardx.length; i++) {
                  if (player.canUse({ name: 'jiu', cards: [cardx[i]] }, player)) use.push(cardx[i]);
                }
                if (!use.length) {
                  player.gain(cardx, 'log', 'draw');
                } else if (use.length == 1) {
                  player.useCard({ name: 'jiu' }, player, use, false);
                  cardx.remove(use[0]);
                  if (cardx.length) player.gain(cardx, 'log', 'draw');
                } else {
                  var str = '祸心:请选择一张牌当酒使用';
                  player.
                  chooseCardButton(true, cardx, 1, str).
                  set('filterButton', function (button) {
                    return _status.event.player.canUse(
                      {
                        name: 'jiu',
                        cards: [button.link]
                      },
                      _status.event.player
                    );
                  }).
                  set('ai', function (button) {
                    var player = _status.event.player;
                    var value = get.equipValue(button.link, player);
                    var num = (20 - value) / 20;
                    return (
                      num +
                      get.effect(
                        player,
                        {
                          name: 'jiu',
                          cards: [button.link]
                        },
                        player,
                        player
                      ));

                  });
                }
                'step 1';
                if (result.links?.length) {
                  var cardx = player.getExpansions('qtpz_huoxin_cards');
                  cardx.remove(result.links[0]);
                  player.useCard({ name: 'jiu' }, result.links, player, false);
                  player.gain(cardx, 'log', 'draw');
                }
                'step 2';
                player.removeSkill('qtpz_huoxin_cards');
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filterTarget(card, player, target) {
            return target.countCards('e') && target != player;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            target.addToExpansion(target.getCards('e'), 'log').gaintag.add('qtpz_huoxin_cards');
            target.addSkill('qtpz_huoxin_cards');
          },
          ai: {
            order: 11,
            result: {
              target(player, target) {
                return -target.countCards('e');
              }
            },
            threaten: 2
          }
        },
        qtpz_tuimeng: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: ['qtpz_tuimeng_remove'],
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
                player.removeSkill('qtpz_tuimeng');
              }
            }
          },
          trigger: { global: 'damageBegin2' },
          _priority: -8,
          zhuSkill: true,
          forced: true,
          filter(event, player) {
            if (!player.hasZhuSkill('qtpz_tuimeng')) return false;
            if (!event.source || event.source == player) return false;
            var group = 'wei';
            if (lib.jy_changeSkill) group = 'jy_ming';
            if (group != event.source.group) return false;
            return true;
          },
          content() {
            'step 0';
            var str = '是否交给' + get.translation(player) + '一张牌发动其的【推盟】？';
            trigger.source.chooseCard('h', str).set('ai', function (card) {
              var att2 = get.attitude(trigger.source, player);
              return att2 > 0 ? 1 : -1;
            });
            'step 1';
            if (result.bool) {
              trigger.source.line(player, 'green');
              //player.gain(result.cards,trigger.source,'give');
              trigger.source.give(result.cards, player, true);
              trigger.source.say(['少侠莫要谦让!', '少侠众望所归,不必推辞!'].randomGet());
              trigger.source = player;
            }
          }
        },
        qtpz_chiyan: {
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filter(card, player, event) {
            if (player.countCards('h', { color: 'red' }) == player.countCards('h', { color: 'black' })) return false;
            if (player.countCards('h', { color: 'red' }) > player.countCards('h', { color: 'black' })) {
              return player.hasMark('qtpz_chiyan_black');
            } else {
              return player.hasMark('qtpz_chiyan_red');
            }
          },
          content() {
            var num = player.countCards('h', { color: 'red' }) - player.countCards('h', { color: 'black' });
            var color;
            if (num > 0) {
              color = 'black';
              player.removeMark('qtpz_chiyan_black', 1);
            } else {
              num = -num;
              player.removeMark('qtpz_chiyan_red', 1);
              color = 'red';
            }
            var gains = get.randomCards(num, function (cardx) {
              return get.color(cardx) == color;
            });
            if (gains) {
              player.gain(gains, 'log', 'gain2');
            } else {
              game.log('没有符合要求的牌了');
            }
          },
          ai: { basic: { order: 3 }, result: { player: 1 } },
          group: ['qtpz_chiyan_black', 'qtpz_chiyan_red', 'qtpz_chiyan_damage', 'qtpz_chiyan_phase'],
          subSkill: {
            red: {
              mark: true,
              markimage: 'extension/金庸群侠传/image/icon/jytaixuanyang.jpg',
              intro: {
                name: '阳',
                content: '你可以移除一枚阳标记,随机将手牌中的红色牌补至与黑色牌相等.'
              }
            },
            black: {
              mark: true,
              markimage: 'extension/金庸群侠传/image/icon/jytaixuanying.jpg',
              intro: {
                name: '阴',
                content: '你可以移除一枚阴标记,随机将手牌中的黑色牌补至与红色牌相等.'
              }
            },
            damage: {
              trigger: { source: 'damageAfter', player: 'damageAfter' },
              forced: true,
              audio: 'qtpz_chiyan',
              content() {
                if (trigger.player == trigger.source) {
                  player.addMark('qtpz_chiyan_red', trigger.num);
                  player.addMark('qtpz_chiyan_black', trigger.num);
                } else if (trigger.source == player) {
                  player.addMark('qtpz_chiyan_red', trigger.num);
                } else {
                  player.addMark('qtpz_chiyan_black', trigger.num);
                }
              }
            },
            phase: {
              trigger: { player: 'phaseZhunbeiBegin' },
              filter(event, player) {
                if (player.phaseNumber > 1) return false;
                return true;
              },
              forced: true,
              audio: 'qtpz_chiyan',
              content() {
                player.addMark('qtpz_chiyan_red', 1);
                player.addMark('qtpz_chiyan_black', 1);
              }
            }
          }
        },
        //新奇经--霸天20220618
        qtpz_qijing: {
          subSkill: {
            heart: {
              charlotte: true,
              mark: true,
              marktext: '♥️️️',
              intro: {
                content: '♠️️️牌视为♥️️️牌.'
              },
              mod: {
                suit(card, suit) {
                  if (suit == 'spade') return 'heart';
                }
              }
            },
            spade: {
              charlotte: true,
              mark: true,
              marktext: '♠️️',
              intro: {
                content: '♥️️牌视为♠️️牌.'
              },
              mod: {
                suit(card, suit) {
                  if (suit == 'heart') return 'spade';
                }
              }
            },
            club: {
              charlotte: true,
              mark: true,
              marktext: '♣️️️',
              intro: {
                content: '♦️️️牌视为♣️️️牌.'
              },
              mod: {
                suit(card, suit) {
                  if (suit == 'diamond') return 'club';
                }
              }
            },
            diamond: {
              charlotte: true,
              mark: true,
              marktext: '♦️️️',
              intro: {
                content: '♣️️️牌视为♦️️️牌.'
              },
              mod: {
                suit(card, suit) {
                  if (suit == 'club') return 'diamond';
                }
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 1,
          enable: 'phaseUse',
          content() {
            'step 0';
            player.
            chooseControl().
            set('ai', function () {
              var suits = ['spade', 'diamond', 'club', 'heart'];
              var suit = suits.randomGet();
              var index = suits.indexOf(suit);
              return index;
            }).
            set('choiceList', ['令你的♥️️️牌视为♠️️️', '令你的♣️️️牌视为♦️️️', '令你的♦️️️牌视为♣️️️', '令你的♠️️️牌视为♥️️️']);
            'step 1';
            var index = result.index;
            var suit = ['spade', 'diamond', 'club', 'heart'][index];
            game.log(player, '选择了', suit);
            player.popup(suit);
            player.addTempSkill('qtpz_qijing_' + suit);
          },
          ai: {
            basic: {
              order: 8
            },
            result: {
              player: 1
            }
          }
        },
        //旧奇经
        qtpz_qijing_old: {
          subSkill: {
            mod: {
              mod: {
                suit(card, suit) {
                  if (suit == 'spade') {
                    return 'heart';
                  } else if (suit == 'heart') {
                    return 'spade';
                  } else if (suit == 'club') {
                    return 'diamond';
                  } else if (suit == 'diamond') {
                    return 'club';
                  }
                }
              },
              forced: true,
              popup: false
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 1,
          enable: 'phaseUse',
          content() {
            player.addTempSkill('qtpz_qijing_old_mod');
          },
          ai: { basic: { order: 8 }, result: { player: 1 } }
        },
        qtpz_aozhan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filterTarget(card, player, target) {
            if (player.countCards('h') == target.countCards('h')) return false;
            return target.canUse({ name: 'juedou' }, player) && player.canUse({ name: 'juedou' }, target);
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            'step 0';
            var choose = ['手牌多的一方弃牌', '手牌少的一方摸牌'],
              choice;
            var count = player.countCards('h') - target.countCards('h');
            if (count < 0) {
              choice = 0;
            } else {
              choice = 1;
            }
            player.
            chooseControl().
            set('choiceList', choose).
            set('ai', function () {
              return _status.event.choice;
            }).
            set('prompt', get.prompt('鏖战')).
            set('choice', choice);
            'step 1';
            if (result) {
              var index = result.index;
              var count = player.countCards('h') - target.countCards('h');
              if (index == 1) {
                if (count > 0) {
                  target.draw(count);
                } else if (count < 0) {
                  player.draw(-count);
                }
              } else {
                if (count > 0) {
                  player.chooseToDiscard(count, 'h', true);
                } else if (count < 0) {
                  target.chooseToDiscard(-count, 'h', true);
                }
              }
            }
            'step 2';
            player.useCard({ name: 'juedou' }, target);
            'step 3';
            if (player.isAlive() && target.isAlive()) {
              target.useCard({ name: 'juedou' }, player);
            }
          },
          ai: {
            order: 1,
            result: {
              target(player, target) {
                var count = player.countCards('h') - target.countCards('h');
                if (count < 0) {
                  return count;
                }
                return 0;
              }
            },
            threaten: 2
          }
        },
        qtpz_tianyou: {
          subSkill: {
            die: {
              trigger: { player: 'gainEnd' },
              forced: true,
              _priority: 100,
              popup: false,
              firstDo: true,
              filter(event, player) {
                if (event.parent.name != 'draw') return false;
                if (Array.isArray(event.cards))
                for (var i of event.cards) {
                  if (i.qtpz_tianyou && i.qtpz_tianyou === true) return true;
                }
                return false;
              },
              content() {
                if (Array.isArray(trigger.cards))
                for (var i of trigger.cards) {
                  if (i.qtpz_tianyou && i.qtpz_tianyou === true) {
                    event.cardx = i;
                    delete i.qtpz_tianyou;
                    break;
                  }
                }
                player.showCards('闯王宝藏', event.cardx);
                if (get.type(event.cardx) == 'basic') {
                  if (player.isDamaged()) player.recover();
                } else {
                  player.draw(2);
                }
                //var card=get.cardPile(function(cardx){return cardx.qtpz_tianyou&&cardx.qtpz_tianyou===true; },'field');
                //if(!card){game.removeGlobalSkill('qtpz_tianyou_die')}
              }
            }
          },
          trigger: { player: 'die' },
          forceDie: true,
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return ui.cardPile.childNodes.length && player.countCards('h');
          },
          content() {
            'step 0';
            event.set('forceDie', true);
            var list = [];
            for (var i = 0; i < 7; i++) {
              if (i >= ui.cardPile.childNodes.length) continue;
              list.push([i, '第' + get.translation(i + 1) + '张']);
            }
            var next = player.chooseButton(2, true, [get.prompt('qtpz_tianyou'), '<div class="text center">将一张牌置于牌堆第几张?</div>', [list, 'tdnodes'], '<div class="text center">手牌</div>', player.getCards('h')]);
            next.set('complexSelect', true);
            next.set('filterButton', function (button) {
              if (ui.selected.buttons.length && typeof button.link == typeof ui.selected.buttons[0].link) return false;
              return true;
            });
            next.set('ai', function (button) {
              return Math.random();
            });
            next.set('forceDie', true);
            'step 1';
            if (result.links?.length) {
              var links = result.links;
              if (typeof links[0] == 'number') links.reverse();
              var loseCard = links[0];
              var index = links[1];
              var next = player.lose(loseCard, ui.cardPile);
              loseCard.qtpz_tianyou = true;
              next.set('forceDie', true);
              next.set('insert_index_card', ui.cardPile.childNodes[index]);
              next.set('insert_index', function (event) {
                return event.insert_index_card;
              });
              game.addGlobalSkill('qtpz_tianyou_die');
            } else event.finish();
            'step 2';
            game.broadcastAll(function (player) {
              var cardx = ui.create.card();
              cardx.classList.add('infohidden');
              cardx.classList.add('infoflip');
              player.$throw(cardx, 1000, 'nobroadcast');
            }, player);
            game.updateRoundNumber();
            game.log(player, '把', '一张手牌放在了牌堆里');
          }
        },
        qtpz_tianyou_old: {
          subSkill: {
            die: {
              trigger: { player: 'gainEnd' },
              forced: true,
              _priority: 100,
              popup: false,
              firstDo: true,
              filter(event, player) {
                if (event.parent.name != 'draw') return false;
                if (Array.isArray(event.cards))
                for (var i of event.cards) {
                  if (i.qtpz_tianyou && i.qtpz_tianyou === true) return true;
                }
                return false;
              },
              content() {
                if (Array.isArray(trigger.cards))
                for (var i of trigger.cards) {
                  if (i.qtpz_tianyou && i.qtpz_tianyou === true) {
                    event.cardx = i;
                    delete i.qtpz_tianyou;
                    break;
                  }
                }
                player.showCards('闯王宝藏', event.cardx);
                if (get.type(event.cardx) == 'basic') {
                  if (player.isDamaged()) player.recover();
                } else {
                  player.draw(2);
                }
                //var card=get.cardPile(function(cardx){return cardx.qtpz_tianyou&&cardx.qtpz_tianyou===true; },'field');
                //if(!card){game.removeGlobalSkill('qtpz_tianyou_die')}
              }
            }
          },
          trigger: {
            player: 'die'
          },
          forceDie: true,
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return ui.cardPile.childNodes.length && player.countCards('h');
          },
          content() {
            'step 0';
            player.chooseCard(get.prompt2('qtpz_tianyou'), 1, 'h').forceDie = true;
            'step 1';
            if (result && result.bool) {
              player.$throw(result.cards.length);
              player.lose(result.cards, ui.special);
              event.card1 = result.cards[0];
              event.card1.qtpz_tianyou = true;
              var num = ui.cardPile.childNodes.length - 1;
              if (num > 6) num = 6;
              var controls = [];
              for (var i = 0; i <= num; i++) {
                controls.push('第' + get.cnNumber(i + 1) + '张');
              }
              var next = player.chooseControl(controls);
              next.set('forceDie', true);
              next.set('prompt', '将' + get.translation(event.card1) + '置于牌堆第几张?');
              next.set('ai', function () {
                return Math.floor(Math.random() * controls.length);
              });
            } else {
              event.finish();
            }
            'step 2';
            var num = { 第一张: 0, 第两张: 1, 第三张: 2, 第四张: 3, 第五张: 4, 第六张: 5, 第七张: 6 }[result.control];
            ui.cardPile.insertBefore(event.card1, ui.cardPile.childNodes[num]);
            game.updateRoundNumber();
            game.log(player, '把', event.card1, '置于牌堆里');
            game.addGlobalSkill('qtpz_tianyou_die');
          }
        },
        qtpz_duxin: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filterCard: true,
          usable: 1,
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          check(card) {
            return 5 - get.value(card);
          },
          filterTarget(card, player, target) {
            //if(target.isLinked()) return false;
            return target != player && target.countCards('e');
          },
          content() {
            'step 0';
            target.
            choosePlayerCard('是否交给' + get.translation(player) + '一张装备区里的一张牌,否则你横置侠客牌.', 'e', target).
            set('ai', function (button) {
              var cards = button.link;
              var players0 = _status.event.players0;
              var targets0 = _status.event.targets0;
              if (players0.isLinked()) return -1;
              if (players0.storage.qtpz_duxin_e) return -1;
              return 8 - get.value(cards);
            }).
            set('targets0', player).
            set('players0', target);
            'step 1';
            if (result.links?.length) {
              //player.gain(result.links,target);
              target.give(result.links, player, true);
              //target.$give(result.links,player,false);
              //player.$gain2(result.links);
              target.say(['我什么都说,可否放我一条生路？', '别打了,我招,我招……'].randomGet());
              if (target.storage.qtpz_duxin_e == undefined) {
                target.storage.qtpz_duxin_e = true;
              }
            } else {
              target.say(['想让我听令与你,真是白日做梦!', '我便是死在这里,也不会交给你!', '有种的,就赶紧杀了我!'].randomGet());
              target.link();
              if (target.storage.qtpz_duxin_link == undefined) {
                target.storage.qtpz_duxin_link = true;
              }
            }
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                if (target.storage.qtpz_duxin_e == undefined) {
                  if (
                  target.hasCard(function (card) {
                    return !player.getEquip(get.subtype(card));
                  }, 'e'))

                  return -2;
                  return -1;
                }
                if (target.isLinked()) return 0.6;
                return -0.5;
              }
            },
            threaten: 1.2
          }
        },
        qtpz_cuidu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseJieshuBegin' },
          filter(event, player) {
            if (!player.countCards('h')) return false;
            var cards = player.getCards('h');
            if (Array.isArray(cards))
            for (var i of cards) {
              if (i.suit != cards[0].suit) return false;
            }
            return true;
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('qtpz_cuidu'), function (card, player, target) {
              return true;
            }).
            set('ai', function (target) {
              var player = _status.event.player;
              var damage = 1;
              if (target.storage.qtpz_duxin_link) {
                if (target.storage.qtpz_duxin_e == undefined) damage++;
              }
              return damage * get.damageEffect(target, player, player, 'jy_du');
            });
            'step 1';
            if (result.bool) {
              player.showHandcards();
              var damage = 1;
              if (result.targets[0].storage.qtpz_duxin_link) {
                if (result.targets[0].storage.qtpz_duxin_e == undefined) damage++;
              }
              result.targets[0].damage(player, damage, 'jy_du');
            }
          }
        },
        qtpz_fuzheng: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseUseAfter'
          },
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          logTarget: 'player',
          filter(event, player) {
            var obj = {},
              types = [];
            var History = event.player.getHistory('useCard', function (evt) {
              var evt2 = evt.getParent('phaseUse');
              return evt2 && evt2 == event;
            });
            for (var i of History) {
              var type = get.type(i.card);
              if (!obj[type]) obj[type] = 0;
              obj[type]++;
              types.add(type);
            }
            if (types.length > 2) return true;
            for (var e in obj) {
              if (obj[e] > 2) return true;
            }
            return false;
          },
          content() {
            'step 0';
            trigger.player.draw(2);
            'step 1';
            event.oldcurrentPhase = _status.currentPhase;
            _status.currentPhase = player;
            trigger.player.phaseUse()._extraPhaseReason = 'qtpz_fuzheng';
            'step 2';
            _status.currentPhase = event.oldcurrentPhase;
          }
        },
        qtpz_poguan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'phaseUseBegin' },
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          logTarget: 'player',
          filter(event, player) {
            if (event.skill) return true;
            if (event._extraPhaseReason) return true;
            var evt = event.parent;
            if (evt.skill && evt.name == 'phase') return true;
            return evt.name != 'phase';
          },
          content() {
            trigger.player.addTempSkill('qtpz_poguan_sha', 'phaseUseEnd');
          },
          global: 'qtpz_poguan_count',
          subSkill: {
            sha: {
              mod: {
                cardUsable(card, player, num) {
                  if (player.hasMark('qtpz_poguan_count')) {
                    if (card.name == 'sha') return num + player.countMark('qtpz_poguan_count');
                  } else return num;
                }
              }
            },
            count: {
              intro: {
                content(storage) {
                  return '此轮执行的额外出牌阶段数为' + storage + '次';
                }
              },
              trigger: {
                player: 'phaseUseBegin',
                global: 'roundStart'
              },
              filter(event, player) {
                if (event.name == 'phaseUse') {
                  if (event.skill) return true;
                  var evt = event.parent;
                  if (evt.skill && evt.name == 'phase') return true;
                  return evt.name != 'phase';
                }
                return true;
              },
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_poguan.jpg',
              _priority: 20,
              forced: true,
              popup: false,
              silent: true,
              content() {
                if (trigger.name == 'phaseUse') {
                  player.addMark('qtpz_poguan_count');
                } else {
                  if (player.hasMark('qtpz_poguan_count')) {
                    player.removeMark('qtpz_poguan_count', player.countMark('qtpz_poguan_count'));
                  }
                }
              }
            }
          }
        },
        qtpz_pantou: {
          init(player, skill) {
            if (!player.storage.qtpz_pantou) {
              player.storage.qtpz_pantou = {};
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filter(event, player) {
            if (!player.countCards('h', { type: 'equip' }) > 0) return false;
            return game.hasPlayer(function (target) {
              if (target == player) return false;
              var cards = player.getCards('h', { type: 'equip' });
              for (var card of cards) {
                if (lib.skill.qtpz_pantou.filterTarget(card, player, target)) return true;
              }
              return false;
            });
          },
          filterCard(card, player) {
            return get.type(card) == 'equip';
          },
          check(card) {
            var player = _status.currentPhase;
            if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
              return 11 - get.equipValue(card);
            }
            return 6 - get.value(card);
          },
          filterTarget(card, player, target) {
            if (target.isMin()) return false;
            var type = get.subtype(card);
            return player != target && target.hasEmptySlot(type);
          },
          content() {
            'step 0';
            target.equip(cards[0]);
            if (!player.storage.qtpz_pantou[target.playerid]) {
              player.storage.qtpz_pantou[target.playerid] = [];
            }
            'step 1';
            if (target.getCards('e').includes(cards[0])) player.storage.qtpz_pantou[target.playerid].add(cards[0]);
          },
          lose: false,
          discard: false,
          prepare(cards, player, targets) {
            player.$give(cards, targets[0], false);
          },
          ai: {
            basic: {
              order: 10
            },
            result: {
              target(player, target) {
                var card = ui.selected.cards[0];
                if (card) return get.effect(target, card, target, target);
                return 0;
              }
            },
            threaten: 1.3
          },
          group: ['qtpz_pantou_lose', 'qtpz_pantou_logskill'],
          subSkill: {
            lose: {
              trigger: { global: 'loseEnd' },
              popup: false,
              forced: true,
              content() {
                if (!trigger.es || !trigger.es.length) return;
                var map = player.storage.qtpz_pantou[trigger.player.playerid];
                if (!map) return;
                for (var i of trigger.es) {
                  map.remove(i);
                }
              }
            },
            logskill: {
              trigger: {
                global: ['logSkillBegin', 'useSkillBegin']
              },
              popup: false,
              forced: true,
              filter(event, player) {
                const map = player.storage.qtpz_pantou[event.player.playerid];
                for (const card of event.player.getCards('e')) {
                  if (map?.includes(card)) {
                    const info = lib.card[card.name];
                    if (info?.skills?.includes(event.skill)) {
                      return true;
                    }
                  }
                }
              },
              async content(event, trigger, player) {
                trigger.player.line(player);
                if (lib.config.extension_金庸群侠传_jiexiantupo) {
                  player.draw(2);
                } else {
                  player.draw();
                }
              }
            }
          }
        },
        qtpz_zhuiqin: {
          group: function () {
            if (lib.config.extension_金庸群侠传_jiexiantupo) return 'qtpz_zhuiqin_end2';
            return 'qtpz_zhuiqin_end';
          }(),
          subSkill: {
            end: {
              audio: 'qtpz_zhuiqin',
              trigger: { player: 'useCardEnd' },
              logTarget(event, player) {
                return game.filterPlayer(function (current) {
                  return (
                    event.targets.includes(current) &&
                    current.getHistory('damage', function (card) {
                      return card.card == event.card;
                    }).length &&
                    !current.isLinked());

                });
              },
              filter(event, player) {
                if (event.card.name != 'sha') return false;
                if (!event.targets || !event.targets.length) return false;
                var targets = lib.skill.qtpz_zhuiqin_end.logTarget(event, player);
                return targets.length;
              },
              content() {
                var targets = lib.skill.qtpz_zhuiqin_end.logTarget(trigger, player);
                for (var i of targets) {
                  i.link();
                }
              }
            },
            end2: {
              audio: 'qtpz_zhuiqin',
              trigger: { source: 'damageSource' },
              forced: true,
              filter(event, player) {
                if (event._notrigger.includes(event.player)) return false;
                return event.card && event.card.name == 'sha' && event.player.countDiscardableCards(player, 'e');
              },
              content() {
                player.gainPlayerCard(get.prompt('qtpz_zhuiqin', trigger.player), '获得其一张装备牌', 'e', trigger.player);
              }
            }
          },
          trigger: { player: 'useCard2' },
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            return game.hasPlayer(function (current) {
              return !event.targets.includes(current) && current.isLinked() && player.canUse(event.card, current);
            });
          },
          forced: true,
          content() {
            'step 0';
            var prompt2 = '额外指定任意名横置的角色成为' + get.translation(trigger.card) + '的目标';
            player.
            chooseTarget([1, Infinity], get.prompt('qtpz_zhuiqin'), function (card, player, target) {
              return !_status.event.sourcex.includes(target) && target.isLinked() && player.canUse(_status.event.card, target);
            }).
            set('sourcex', trigger.targets).
            set('ai', function (target) {
              var player = _status.event.player;
              return get.effect(target, _status.event.card, player, player);
            }).
            set('card', trigger.card).
            set('prompt2', prompt2);
            'step 1';
            if (result.targets?.length) {
              event.targets = result.targets;
            } else {
              event.finish();
            }
            'step 2';
            trigger.targets.addArray(event.targets);
          },
          ai: {
            effect: {
              player(card, player, target, current, isLink) {
                if (!isLink && card.name == 'sha') {
                  if (player._qtpz_zhuiqin) return;
                  player._qtpz_zhuiqin = true;
                  if (get.effect(target, card, player, player) <= 0) {
                    delete player._qtpz_zhuiqin;
                    return;
                  }
                  if (
                  game.hasPlayer(function (current) {
                    return current != target && current.isLinked() && player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                  }))
                  {
                    delete player._qtpz_zhuiqin;
                    return [1, 1];
                  }
                  delete player._qtpz_zhuiqin;
                }
              }
            }
          }
        },
        qtpz_quanjing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseZhunbeiBegin'
          },
          filter(event, player) {
            return event.player.countCards('h') > event.player.hp && event.player.countCards('e') > 0;
          },
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          logTarget: 'player',
          content() {
            trigger.player.draw();
          }
        },
        qtpz_channi: {
          //mark:true,
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_channi.jpg',
          intro: { content: '' },
          group: ['qtpz_channi_count', 'qtpz_channi_clear'],
          subSkill: {
            count: {
              trigger: {
                global: 'damageEnd'
              },
              filter(event, player) {
                var zhu = get.zhu(player);
                return event.source && event.source == zhu && event.num > 0;
              },
              forced: true,
              popup: false,
              content() {
                player.addMark('qtpz_channi', trigger.num, false);
              }
            },
            clear: {
              trigger: {
                global: 'roundStart'
              },
              forced: true,
              popup: false,
              content() {
                var num = player.countMark('qtpz_channi');
                if (num > 0) player.removeMark('qtpz_channi', num, false);
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: ['phaseZhunbeiBegin', 'phaseJieshuBegin']
          },
          forced: true,
          filter(event, player, name) {
            if (!player.countCards('he')) return false;
            var zhu = get.zhu(player);
            if (!zhu || zhu == event.player) return false;
            if (name == 'phaseZhunbei') {
              return event.player.countCards('h') > zhu.countCards('h');
            } else {
              var num = event.player.getStat('damage');
              if (num > player.storage.qtpz_channi) return true;
            }
            return false;
          },
          content() {
            'step 0';
            var zhu = get.zhu(player);
            var num = trigger.player.countCards('h') - zhu.countCards('h');
            event.num = num;
            var att = get.attitude(player, trigger.player);
            var eff = get.damageEffect(trigger.player, player, player);
            var str = '是否发动【馋逆】?<br>弃置一张牌并';
            if (event.triggername == 'phaseZhunbeiBegin') {
              str += '弃置' + get.translation(trigger.player) + num + '张牌';
            } else {
              str += '对' + get.translation(trigger.player) + '造成一点伤害';
            }
            player.chooseToDiscard(1, 'he', str).set('ai', function (card) {
              if (event.triggername == 'phaseZhunbeiBegin' && att < 0) {
                if (num > 0) {
                  return 5 + num - get.value(card);
                } else return -1;
              } else if (eff > 0) {
                return 6 - get.value(card);
              } else return -1;
            });
            'step 1';
            if (result.bool) {
              trigger.player.say(['你这卑鄙小人,竟然在闯王面前进谗言……', '我之忠心,日月可鉴!', '没想到,我竟然栽在自己人手里……'].randomGet());
              if (event.triggername == 'phaseZhunbeiBegin') {
                if (event.num > 0) player.discardPlayerCard('h', event.num, trigger.player, true);
              } else {
                trigger.player.damage(player, 1);
              }
            }
          }
        },
        qtpz_mubing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseDiscardBefore'
          },
          forced: true,
          filter(event, player) {
            if (event.player == player) return false;
            return event.player.needsToDiscard() && event.player.countCards('h', { suit: 'diamond' }) > 0;
          },
          content() {
            'step 0';
            trigger.player.
            chooseCard(1, 'h', '募兵', '是否选择一张牌交给' + get.translation(player) + '？跳过弃牌阶段.', function (card, player) {
              return card.suit == 'diamond';
            }).
            set('ai', function (card) {
              var num = trigger.player.needsToDiscard();
              var att1 = get.attitude(trigger.player, player);
              if (att1 > 0) {
                return 1;
              }
              if (num < 2) return -1;
              if (num > 2) return 9 - get.value(card);
              return -1;
            });
            'step 1';
            if (result.bool) {
              trigger.player.line(player, 'green');
              //player.gain(result.cards[0],trigger.player,'giveAuto');
              trigger.player.give(result.cards[0], player, true);
              trigger.player.say('盼闯王,迎闯王!');
              trigger.cancel();
            }
          }
        },
        qtpz_juyi: {
          init(player) {
            player.storage.qtpz_juyi = false;
          },
          derivation: 'qtpz_yuanzheng',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          filter(event, player) {
            return event.player.isMaxHandcard(true) && !player.storage.qtpz_juyi;
          },
          forced: true,
          _priority: 3,
          content() {
            'step 0';
            var equip1 = get.cardPile(function (card) {
              return get.type(card) == 'equip';
            }, 'field');
            if (equip1) {
              var owner = get.owner(equip1);
              if (owner) {
                var cardss = game.createCard(equip1);
                player.equip(cardss, true).set('delay', true);
              } else {
                player.equip(equip1, true).set('delay', true);
              }
            } else {
              var list = get.inpile('equip');
              var cardss = game.createCard(list.randomGet());
              player.equip(cardss, true).set('delay', true);
            }
            'step 1';
            player.loseMaxHp();
            player.addSkills('qtpz_yuanzheng');
            player.awakenSkill('qtpz_juyi');
            player.storage.qtpz_juyi = true;
          }
        },
        qtpz_yuanzheng: {
          audio: 'ext:金庸群侠传/peiyin:2',
          mod: {
            aiOrder(player, card, num) {
              if (card.suit == 'diamond' && get.type(card) == 'equip' && !player.hasEmptySlot(get.subtype(card))) {
                return 1;
              }
            },
            globalFrom(from, to, current) {
              var count = from.countMark('qtpz_yuanzheng');
              if (count && _status.currentPhase == from) {
                return current - count;
              }
              return current;
            }
          },
          mark: true,
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_yuanzheng.jpg',
          intro: { content: '你可以将♦️️手牌当【妙手空空】使用;你本回合内每使用一张普通锦囊牌,你计算与其他角色的距离便-1.' },
          group: ['qtpz_yuanzheng_trick', 'qtpz_yuanzheng_end'],
          subSkill: {
            trick: {
              trigger: { player: 'useCardAfter' },
              filter(event, player) {
                if (_status.currentPhase != player) return false;
                return get.type(event.card) == 'trick';
              },
              forced: true,
              popup: false,
              content() {
                player.addMark('qtpz_yuanzheng', 1, false);
              }
            },
            end: {
              trigger: { player: 'phaseAfter' },
              forced: true,
              popup: false,
              content() {
                player.removeMark('qtpz_yuanzheng', player.countMark('qtpz_yuanzheng'), false);
                player.markSkill('qtpz_yuanzheng');
              }
            }
          },
          viewAsFilter(player) {
            if (!player.countCards('hs', { suit: 'diamond' })) return false;
            return true;
          },
          enable: 'chooseToUse',
          filterCard(card, player) {
            return card.suit == 'diamond';
          },
          position: 'hs',
          viewAs: { name: 'shunshou' },
          prompt: '将一张♦️️手牌当【妙手空空】使用.',
          check(card) {
            return 9 - get.value(card);
          },
          ai: { threaten: 1.5 }
        },
        qtpz_juntian: {
          group: ['qtpz_juntian_remove'],
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
                player.removeSkill('qtpz_juntian');
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          zhuSkill: true,
          trigger: { player: 'loseAfter' },
          filter(event, player) {
            if (event.type != 'discard') return false;
            if (!player.hasZhuSkill('qtpz_juntian')) return false;
            for (var i = 0; i < event.cards2.length; i++) {
              if (get.color(i, player) == 'red' && get.position(event.cards2[i]) == 'd') {
                return (
                  game.countPlayer(function (current) {
                    var group = 'qun';
                    if (lib.jy_changeSkill) group = 'jy_lie';
                    if (group != current.group) return false;
                    return current != player;
                  }) > 0);

              }
            }
            return false;
          },
          forced: true,
          popup: false,
          content() {
            'step 0';
            event.cards = [];
            if (Array.isArray(trigger.cards))
            for (var i of trigger.cards) {
              if (get.color(i, player) == 'red' && get.position(i) == 'd') {
                event.cards.push(i);
              }
            }
            'step 1';
            if (event.cards.length) {
              var goon = false;
              if (Array.isArray(event.cards))
              for (var i of event.cards) {
                if (i.name == 'du') {
                  goon = game.hasPlayer(function (current) {
                    var group = 'qun';
                    if (lib.jy_changeSkill) group = 'jy_lie';
                    if (group != current.group) return false;
                    return player != current && get.attitude(player, current) < 0;
                  });
                  break;
                }
              }
              if (!goon) {
                goon = game.hasPlayer(function (current) {
                  var group = 'qun';
                  if (lib.jy_changeSkill) group = 'jy_lie';
                  if (group != current.group) return false;
                  return player != current && get.attitude(player, current) > 1;
                });
              }
              player.
              chooseCardButton(get.prompt('qtpz_juntian'), event.cards, [1, event.cards.length]).
              set('ai', function (button) {
                if (!_status.event.goon || ui.selected.buttons.length) return 0;
                if (button.link.name == 'du') return 2;
                return 1;
              }).
              set('goon', goon);
            } else {
              event.finish();
            }
            'step 2';
            if (result.links?.length) {
              event.togive = result.links.slice(0);
              var group = 'qun';
              if (lib.jy_changeSkill) group = 'jy_lie';
              player.
              chooseTarget('将' + get.translation(result.links) + '交给一名' + get.translation(group) + '势力角色', true, function (card, player, target) {
                if (group != target.group) return false;
                return target != player;
              }).
              set('ai', function (target) {
                var att = get.attitude(_status.event.player, target);
                if (_status.event.enemy) {
                  return -att;
                } else {
                  if (att > 2) return att / Math.sqrt(1 + target.countCards('h'));
                  return att / Math.sqrt(1 + target.countCards('h')) / 5;
                }
              }).
              set('enemy', get.value(event.togive[0]) < 0);
            } else {
              event.finish();
            }
            'step 3';
            if (result.bool) {
              for (var i = 0; i < event.togive.length; i++) {
                event.cards.remove(event.togive[i]);
              }
              //result.targets[0].gain(event.togive,player,'gain2','log');
              player.give(event.togive, result.targets[0], true);
              result.targets[0].say('闯王来了不纳粮!');
              event.goto(1);
            } else {
              event.finish();
            }
          }
        },
        qtpz_kumeng2: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filterTarget(card, player, target) {
            if (!target.countCards('h')) return false;
            return true;
          },
          content() {
            'step 0';
            var str = get.translation(target);
            player.
            chooseControl().
            set('choiceList', ['令' + str + '失去一半的体力值(向上取整),将手牌数量加倍', '将体力值回复一倍' + str + '弃置一半手牌(向下取整)']).
            set('ai', function () {
              var att = get.attitude(player, target);
              var count = target.countCards('h');
              var hp = target.hp;
              var losehp = 2 * Math.ceil(hp / 2);
              var losecard = Math.floor(count / 2);
              var recover = 2 * Math.min(target.maxHp - target.hp, target.hp);
              if (att > 0) {
                var max = recover - losecard;
                var num = count - losehp;
                if (losehp == hp) num = 0;
                if (num > max) return 0;
                return 1;
              } else {
                var min = recover - losecard;
                var num = count - losehp;
                if (num < min) return 0;
                return 1;
              }
            });
            'step 1';
            var count = target.countCards('h');
            var hp = target.hp;
            var losehp = Math.ceil(hp / 2);
            var losecard = Math.floor(count / 2);
            var recover = Math.min(target.maxHp - target.hp, target.hp);
            if (result.index == 1) {
              if (recover > 0) target.recover(recover);
              if (losecard > 0) target.chooseToDiscard(losecard, true, 'h');
            } else {
              if (losehp > 0) target.loseHp(losehp);
              if (count > 0) target.draw(count);
            }
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                var att = get.attitude(player, target);
                var count = target.countCards('h');
                var hp = target.hp;
                var losehp = 2 * Math.ceil(hp / 2);
                var losecard = Math.floor(count / 2);
                var recover = 2 * Math.min(target.maxHp - target.hp, target.hp);
                if (att > 0) {
                  var max = recover - losecard;
                  var num = count - losehp;
                  if (losehp == hp) num = 0;
                  if (num > max) max = num;
                  max--;
                  return max;
                } else {
                  var min = recover - losecard;
                  var num = count - losehp;
                  if (num < min) min = num;
                  min++;
                  return min;
                }
              }
            },
            threaten: 2
          }
        },
        qtpz_kumeng: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'gainEnd' },
          check(event, player) {
            var cardss = event.cards.slice(0);
            var dis = [];
            for (var i = 0; i < cardss.length; i++) {
              if (event.player.getCards('h').includes(cardss[i])) {
                dis.push(cardss[i]);
              }
            }
            var att = get.attitude(player, event.player);
            if (att > 0) {
              if (event.player.hp > 1 && event.cards.length > 2) return true;
              if (event.player.isDamaged() && dis.length < 3) return true;
            }
            if (att <= 0) {
              if (event.player.hp == event.player.maxHp) return true;
              if (event.player.hp == 1) return true;
              if (dis.length > 3) return true;
            }
            return false;
          },
          logTarget: 'player',
          usable: 1,
          filter(event, player) {
            if (event.getParent(2).name == 'qtpz_kumeng') return false;
            if (event.getParent(2).name == 'phaseDraw') return false;
            return event.cards && event.cards.length;
          },
          content() {
            'step 0';
            var cardss = trigger.cards.slice(0);
            event.dis = [];
            for (var i = 0; i < cardss.length; i++) {
              if (trigger.player.getCards('h').includes(cardss[i])) {
                event.dis.push(cardss[i]);
              }
            }
            'step 1';
            player.
            chooseControl(function () {}).
            set('choiceList', ['令' + get.translation(trigger.player) + '摸' + get.cnNumber(trigger.cards.length, true) + '张牌,其失去一点体力,若其以此法摸超过三张牌,你失去一点体力.', '令' + get.translation(trigger.player) + '弃置这些牌,若其已受伤则其回复一点体力']).
            set('ai', function () {
              var att = get.attitude(player, trigger.player);
              if (att > 0) {
                if (trigger.player.hp > 1 && trigger.cards.length > 2) return 0;
                if (trigger.player.isDamaged() && event.dis.length < 3) return 1;
              }
              if (att <= 0) {
                if (trigger.player.hp == trigger.player.maxHp) return 1;
                if (trigger.player.hp == 1) return 0;
                if (event.dis.length > 3) return 1;
              }
              return 0;
            });
            'step 2';
            if (result.index == 0) {
              trigger.player.draw(trigger.cards.length);
              trigger.player.loseHp();
              if (trigger.cards.length > 3) player.loseHp();
            } else {
              trigger.player.discard(event.dis);
              if (trigger.player.isDamaged()) trigger.player.recover();
            }
          },
          ai: {
            expose: 0.3
          }
        },
        qtpz_xunzhu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: ['dying', 'recoverEnd']
          },
          mode: ['identity'],
          forced: true,
          filter(event, player) {
            if (event.player.identity && event.player.identity == 'zhu') {
              if (event.name == 'dying') {
                return player.countCards('he');
              } else return true;
            }
            return false;
          },
          _priority: 10,
          content() {
            if (trigger.name == 'dying') {
              var cards = player.getCards('he');
              player.discard(cards);
            } else player.draw(2);
          }
        },
        qtpz_fuyu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          subSkill: { backup: {} },
          enable: ['chooseToUse', 'chooseToRespond'],
          hiddenCard(player, name) {
            if (!['sha', 'shan', 'tao', 'jiu'].includes(name)) return false;
            return player.countCards('h');
          },
          mod: {
            aiOrder(player, card, num) {
              var name = card.name;
              if (name != 'sha' && name != 'jiu') return num + 4;
              return num;
            }
          },
          filter(event, player) {
            if (!player.countCards('h')) return false;
            var list = [{ name: 'sha' }, { name: 'shan' }, { name: 'tao' }, { name: 'jiu' }];
            for (var j of lib.inpile_nature) {
              list.push({ name: 'sha', nature: j });
            }
            for (var i of list) {
              if (event.filterCard && event.filterCard(i, player, event)) {
                return true;
              }
            }
            return false;
          },
          chooseButton: {
            dialog(event, player) {
              var list = [];
              var list2 = [{ name: 'sha' }, { name: 'shan' }, { name: 'tao' }, { name: 'jiu' }];
              for (var j of lib.inpile_nature) {
                list2.push({ name: 'sha', nature: j });
              }
              for (var i of list2) {
                if (event.filterCard && event.filterCard(i, player, event)) {
                  if (i.name == 'sha' && i.nature) {
                    list.push(['基本', '', i.name, i.nature]);
                  } else {
                    list.push(['基本', '', i.name]);
                  }
                }
              }
              return ui.create.dialog('负隅', [list, 'vcard'], 'hidden');
            },
            check(button) {
              var player = _status.event.player;
              var evt = _status.event.parent;
              if (player.countCards('h', button.link[2])) return -1;
              if (player.countCards('h', 'tao')) return -1;
              var buff = player.hasSkillTag('taiJiBuff');
              var count = player.countCards('h');
              if (evt.type == 'dying') {
                if (count > 3 && !buff) return -1;
              } else {
                if (count > 2 && !buff) return -1;
              }
              var card = { name: button.link[2], nature: button.link[3] };
              if (evt.type == 'dying') {
                var num = get.effect(evt.dying, card, player, player);
                if (num > 0) return get.order(card) - 0.1;
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
              } else if (card.name != 'jiu' && player.getUseValue(card) > 0) {
                return get.order(card);
              }
              return -1;
            },
            backup(links, player) {
              return {
                audio: 'qtpz_fuyu',
                filterCard() {
                  return false;
                },
                complexCard: true,
                selectCard: -1,
                position: 'h',
                viewAs: { name: links[0][2], nature: links[0][3] },
                popname: true,
                ignoreMod: true,
                precontent() {
                  event.result.card = {
                    name: event.result.card.name,
                    nature: event.result.card.nature
                  };
                  player.discard(player.getCards('h'));
                }
              };
            },
            prompt(links, player) {
              return '弃置全部手牌并视为使用一张' + get.translation(links[0][3] || '') + get.translation(links[0][2]);
            }
          },
          ai: {
            order(skill, player) {
              return 1;
            },
            skillTagFilter(player, tag, arg) {
              if (tag == 'fireAttack') return true;
              if (tag == 'nokeep') return true;
              if (tag == 'pretao') return true;
              if (!player.countCards('h')) return false;
              return true;
            },
            result: {
              player(player) {
                if (_status.event.dying) {
                  if (get.attitude(player, _status.event.dying) <= 0) return -1;
                }
                return 1;
              }
            },
            save: true,
            respondSha: true,
            respondShan: true,
            fireAttack: true,
            nokeep: true
            //pretao:true,
          }
        },
        qtpz_chengren: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'damageBegin'
          },
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          logTarget: 'player',
          filter(event, player) {
            var num = player.getHistory('custom', function (evt) {
              return evt.qtpz_chengren && evt.qtpz_chengren == event.player;
            }).length;
            if (num > 0) return false;
            if (event.player == player) return false;
            return event.card && event.card.name && get.type(event.card, 'trick') == 'trick';
          },
          content() {
            trigger.cancel();
            player.getHistory('custom').push({ qtpz_chengren: trigger.player });
            var evt = trigger.getParent('useCard');
            if (!evt || evt.name != 'useCard') return;
            if (!evt.targets || !evt.targets.length) return;
            if (trigger.card != evt.card) return;
            if (get.type(trigger.card) == 'trick') {
              evt.targets.push(player);
              game.log(player, '额外成为了', trigger.card, '的目标');
            }
          }
        },
        qtpz_shayu: {
          contentjuedou(player) {
            'step 0';
            player.draw();
            'step 1';
            event.card = result.cards[0];
            if (player.getCards('h').includes(event.card)) {
              var card = { name: 'juedou', cards: [event.card] };
              if (lib.filter.cardEnabled(card)) {
                if (
                game.hasPlayer(function (current) {
                  return player.canUse(card, current);
                }))
                {
                  var next = player.chooseToUse();
                  // next.logSkill='qtpz_shayu';
                  next.set('cardx', event.card);
                  next.set('openskilldialog', '铩羽<br>是否将' + get.translation(event.card) + '当' + get.translation(card) + '使用?');
                  next.set('norestore', true);
                  next.set('_backupevent', 'qtpz_shayu_juedou');
                  next.set('custom', {
                    add: {},
                    replace: {
                      window() {}
                    }
                  });
                  next.backup('qtpz_shayu_juedou');
                }
              }
            }
          },
          group: ['qtpz_shayu_remove'],
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
                player.removeSkill('qtpz_shayu');
              }
            },
            juedou: {
              selectCard: 1,
              popname: true,
              viewAs: { name: 'juedou' },
              position: 'h',
              filterCard(card, player) {
                return _status.event.cardx && _status.event.cardx == card;
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          zhuSkill: true,
          trigger: { player: 'damageEnd' },
          filter(event, player) {
            if (!player.hasZhuSkill('qtpz_shayu')) return false;
            var group = 'qun';
            if (lib.jy_changeSkill) group = 'jy_lie';
            return (
              event.card &&
              get.type(event.card, 'trick') == 'trick' &&
              game.hasPlayer(function (current) {
                if (group != current.group) return false;
                return current != player;
              }));

          },
          //direct:true,
          content() {
            'step 0';
            event.targets = game.
            filterPlayer(function (current) {
              var group = 'qun';
              if (lib.jy_changeSkill) group = 'jy_lie';
              if (group != current.group) return false;
              return true;
            }).
            sortBySeat(player);
            event.targets.remove(player);
            'step 1';
            if (targets.length) {
              var target = targets.shift();
              event.target = target;
              if (!target.isIn()) {
                event.redo();
                return;
              }
              target.addTempClass('target');
              target.
              chooseBool('是否令' + get.translation(player) + '摸一张牌？并且' + get.translation(player) + '可以将摸到的牌当【比武】使用.').
              set('ai', function () {
                if (get.attitude(_status.event.player, _status.event.sourcex) > 0) return true;
                return false;
              }).
              set('sourcex', player);
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              target.line(player);
              event.insert(lib.skill.qtpz_shayu.contentjuedou, {
                player: player
              });
            }
            event.goto(1);
          }
        },
        xajh_jiecheng: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseDrawBegin1'
          },
          filter(event, player) {
            if (event.numFixed) return false;
            if (event.player == player) return false;
            if (!event.player.hasSex('male')) return false;
            return player.countCards('he') > 0;
          },
          forced: true,
          content() {
            'step 0';
            player.chooseToDiscard([1, Infinity], 'he', get.prompt('xajh_jiecheng', trigger.player), '弃置任意张牌令其多摸等量的牌').set('ai', function (card) {
              var att = get.attitude(player, trigger.player);
              if (att > 0 && !trigger.player.skipList.includes('phaseUse')) {
                if (player.hasSkill('xajh_fanxin') && card.suit == 'heart') {
                  if (!get.tag(card, 'recover')) return 10 - get.value(card);
                }
                return 6 - get.value(card);
              }
              return -1;
            })('step 1');
            if (result.cards?.length) {
              trigger.num += result.cards.length;
            }
          }
        },
        xajh_fanxin: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'discardAfter'
          },
          filter(event, player) {
            if (Array.isArray(event.cards))
            for (var i of event.cards) {
              if (i.suit == 'heart') {
                return true;
              }
            }
            return false;
          },
          forced: true,
          content() {
            var num = 0;
            if (Array.isArray(trigger.cards))
            for (var i of trigger.cards) {
              if (i.suit == 'heart') {
                num++;
              }
            }
            if (num > 0) player.draw(num);
          }
        },
        xajh_qiyuan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'judge'
          },
          forced: true,
          content() {
            'step 0';
            var cards = get.cards(3);
            game.cardsGotoOrdering(cards);
            player.showCards(cards, '祈愿');
            event.cards = cards;
            player.chooseCardButton(cards, '祈愿', '是否选择一张♥️️牌？你弃置未选择的牌.', [1, 1]).set('filterButton', function (button) {
              return button.link.suit == 'heart';
            });
            'step 1';
            if (result.links?.length) {
              event.link = result.links[0];
            } else {
              event.finish();
              return;
            }
            'step 2';
            player.
            chooseBool(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + '是否打出' + get.translation(event.link) + '代替之?否则你获得' + get.translation(event.link)).
            set('ai', function (card) {
              var trigger = _status.event.getTrigger();
              var player = _status.event.player;
              var judging = _status.event.judging;
              var links = _status.event.links;
              var result = trigger.judge(links) - trigger.judge(judging);
              var attitude = get.attitude(player, trigger.player);
              if (attitude == 0 || result == 0) return false;
              if (attitude > 0) {
                return result > 0;
              } else {
                return result < 0;
              }
            }).
            set('judging', trigger.player.judging[0]).
            set('links', event.link);
            'step 3';
            if (result.bool) {
              player.respond([event.link], 'highlight', 'noOrdering');
              event._result = { bool: true, cards: [event.link] };
            } else {
              player.gain(event.link, 'gain2', 'log');
              event.finish();
              return;
            }
            'step 4';
            if (result.bool) {
              if (trigger.player.judging[0].clone) {
                trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                game.broadcast(function (card) {
                  if (card.clone) {
                    card.clone.classList.remove('thrownhighlight');
                  }
                }, trigger.player.judging[0]);
                game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
              }
              game.cardsDiscard(trigger.player.judging[0]);
              trigger.player.judging[0] = result.cards[0];
              trigger.orderingCards.addArray(result.cards);
              game.log(trigger.player, '的判定牌改为', result.cards[0]);
            }
          },
          ai: {
            tag: {
              rejudge: 1
            }
          }
        },
        qtpz_mangxin: {
          init(player, skill) {
            if (!player.storage[skill]) {
              player.storage[skill] = get.inpile(function (name) {
                var type = get.type(name, 'trick');
                return type == 'trick' || type == 'basic';
              });
            }
            player.markSkill('qtpz_mangxin');
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          mark: true,
          markimage: 'extension/金庸群侠传/image/icon/jymangxin.jpg',
          intro: {
            mark(dialog, storage, player) {
              if (!storage.length) return '无';
              var list = [];
              for (var i = 0; i < storage.length; i++) {
                list.push([get.type(storage[i], 'trick'), '', storage[i]]);
              }
              dialog.addAuto([list, 'vcard']);
            },
            markcount(storage, player) {
              return storage.length;
            }
          },
          trigger: {
            player: 'phaseUseBegin'
          },
          forced: true,
          filter(event, player) {
            if (!player.storage.qtpz_mangxin && !player.storage.qtpz_mangxin.length) {
              return false;
            }
            if (!ui.cardPile.childNodes.length) return false;
            var card = ui.cardPile.childNodes[0];
            for (var i = 0; i < player.storage.qtpz_mangxin.length; i++) {
              if (
              game.hasPlayer(function (current) {
                var name = player.storage.qtpz_mangxin[i];
                var cardx = {
                  name: name,
                  cards: [card]
                };
                return player.canUse(cardx, current, false);
              }))
              {
                return true;
              }
            }
            return false;
          },
          content() {
            'step 0';
            var list = [];
            for (var i = 0; i < player.storage.qtpz_mangxin.length; i++) {
              list.push([get.type(player.storage.qtpz_mangxin[i]), '', player.storage.qtpz_mangxin[i]]);
            }
            player.
            chooseTarget(get.prompt('qtpz_mangxin'), function (card, player, target) {
              return target != player;
            }).
            set('ai', function (target) {
              var player = _status.event.player;
              var card = ui.cardPile.childNodes[0];
              for (var j = 0; j < player.storage.qtpz_mangxin.length; j++) {
                var name = player.storage.qtpz_mangxin[j];
                var cardx = {
                  name: name,
                  cards: [card]
                };
                if (player.getUseValue(cardx, false) > 0) {
                  if (get.type(cardx, 'trick') == get.type(cardx, 'trick')) {
                    return get.attitude(player, target);
                  }
                }
              }
              return -1;
            }).
            set('createDialog', ['盲信牌', [list, 'vcard']]);
            event.manlist = list;
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
              var str = '<span style="color: #FF0000">盲信<br>声明一张牌,' + get.translation(player) + '将牌堆顶的一张牌当此牌使用,若牌堆顶的牌的类型与此牌不同,其失去一点体力</span>';
              event.target.
              chooseButton(true, [1, 1], 'hidden', [str, [event.manlist, 'vcard'], 'hidden']).
              set('filterButton', function (button) {
                var name = button.link[2];
                var card = ui.cardPile.childNodes[0];
                var cardx = {
                  name: name,
                  cards: [card]
                };
                var players0 = _status.event.players0;
                var targets0 = _status.event.targets0;
                if (
                game.hasPlayer(function (current) {
                  return targets0.canUse(cardx, current, false);
                }))
                {
                  return true;
                }
                return false;
              }).
              set('ai', function (button) {
                var name = button.link[2];
                var card = ui.cardPile.childNodes[0];
                var cardx = {
                  name: name,
                  cards: [card]
                };
                var players0 = _status.event.players0;
                var targets0 = _status.event.targets0;
                var att = get.attitude(players0, targets0);
                if (att > 0) {
                  if (get.type(cardx, 'trick') == get.type(card, 'trick')) {
                    return targets0.getUseValue(cardx, false);
                  }
                  return targets0.getUseValue(cardx, false) - 100;
                } else {
                  if (get.type(cardx, 'trick') != get.type(card, 'trick')) {
                    return -targets0.getUseValue(cardx, false);
                  }
                  return -targets0.getUseValue(cardx, false) - 100;
                }
              }).
              set('targets0', player).
              set('players0', result.targets[0]);
            } else {
              event.finish();
              return;
            }
            'step 2';
            if (result.links?.length) {
              game.log(target, '声明了', { name: result.links[0][2] });
              player.storage.qtpz_mangxin.remove(result.links[0][2]);
              player.markSkill('qtpz_mangxin');
              var cardx = get.cards(1)[0];
              game.cardsGotoOrdering(cardx);
              var card = { name: result.links[0][2] };
              player.chooseUseTarget(card, true, false, [cardx], 'nodistance').viewAs = true;
              event.lose = get.type(card, 'trick') != get.type(cardx, 'trick');
            }
            'step 3';
            if (event.lose) {
              player.say(['你……怎可欺我？', '我当初为何要信你!', '大哥岂可背信弃义？'].randomGet());
              player.loseHp();
            }
          }
        },
        qtpz_yongzhu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: ['phaseZhunbeiBegin']
          },
          forced: true,
          filter(event, player) {
            return event.player.identity && event.player.identity == 'zhu';
          },
          content() {
            'step 0';
            player.
            chooseTarget([1, 2], get.prompt2('qtpz_yongzhu'), function (card, player, target) {
              return get.distance(target, trigger.player, 'attack') <= 1;
            }).
            set('ai', function (target) {
              return get.attitude(player, target);
            });
            'step 1';
            if (result.targets?.length) {
              game.asyncDraw(result.targets, 1);
            }
          }
        },
        qtpz_yiqi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: ['qtpz_yiqi_remove'],
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
                player.removeSkill('qtpz_yiqi');
              }
            }
          },
          trigger: {
            global: 'recoverAfter'
          },
          _priority: -8,
          zhuSkill: true,
          forced: true,
          filter(event, player) {
            if (!player.hasZhuSkill('qtpz_yiqi')) return false;
            var group = 'shu';
            if (lib.jy_changeSkill) group = 'jy_qing';
            if (group != event.player.group) return false;
            if (event.player == player) return false;
            return true;
          },
          content() {
            'step 0';
            trigger.player.chooseBool('义旗<br>是否令' + get.translation(player) + '摸一张牌？').set('ai', function () {
              if (get.attitude(trigger.player, player) > 0) return true;
              return false;
            });
            'step 1';
            if (result.bool) {
              trigger.player.line(player);
              trigger.player.say(['反清复明,天下太平!', '总舵主志在抗清,我等誓死追随!'].randomGet());
              player.draw();
            }
          }
        },
        qtpz_chifa: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'loseEnd'
          },
          check(event, player) {
            return get.attitude(player, event.player) < 0;
          },
          logTarget: 'player',
          filter(event, player) {
            if (event.player == player) return false;
            if (!event.player.isAlive()) return false;
            return event.es && event.es.length && (event.player.countCards('he') || player.canUse('sha', event.player, false));
          },
          content() {
            'step 0';
            event.num = trigger.es.length;
            'step 1';
            var bool1 = player.canUse({ name: 'sha' }, trigger.player, false);
            var bool2 = trigger.player.countCards('he');
            if (bool1 && bool2) {
              player.
              chooseControl(function () {
                return 0;
              }).
              set('choiceList', ['视为对' + get.translation(trigger.player) + '使用一张"杀"', '令' + get.translation(trigger.player) + '弃置一张牌']).
              set('ai', function () {
                if (get.effect(trigger.player, { name: 'sha' }, _status.event.player) > 0) return 0;
                return 1;
              });
            } else if (bool1) {
              event.directindex = 0;
            } else if (bool2) {
              event.directindex = 1;
            } else {
              event.finish();
              return;
            }
            'step 2';
            if (result && typeof event.directindex != 'number') {
              event.directindex = result.index;
            }
            if (event.directindex == 0) {
              player.useCard({ name: 'sha' }, trigger.player, false);
            } else {
              trigger.player.chooseToDiscard(1, 'he', true);
            }
            'step 3';
            event.num--;
            if (event.num > 0) event.goto(1);
          }
        },
        qtpz_aobing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          init(player, skill) {
            player.storage[skill] = false;
          },
          intro: { content: 'limited' },
          multiline: true,
          markimage: 'extension/金庸群侠传/image/icon/jyaobing.jpg',
          mark: true,
          line: 'fire',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            var types = [];
            var cards = player.getCards('he');
            if (Array.isArray(cards))
            for (var i of cards) {
              var type = get.type(i, 'trick');
              types.add(type);
            }
            if (types.length < 3) return false;
            if (player.storage.qtpz_aobing) return false;
            return (
              game.countPlayer(function (current) {
                return current != player;
              }) > 1);

          },
          check(card) {
            return 10 - get.value(card);
          },
          filterCard(card, player) {
            var type = get.type(card, 'trick');
            if (Array.isArray(ui.selected.cards))
            for (var i of ui.selected.cards) {
              if (get.type(i, 'trick') == type) return false;
            }
            return true;
          },
          position: 'he',
          filterTarget(card, player, target) {
            if (player == target) return false;
            if (ui.selected.targets.length) {
              return ui.selected.targets[0].canUse({ name: 'juedou' }, target);
            }
            return target.countCards('h');
          },
          targetprompt: ['弃手牌使用比武', '比武目标', '比武目标', '比武目标'],
          complexTarget: true,
          selectTarget: [2, 4],
          selectCard: 3,
          multitarget: true,
          content() {
            'step 0';
            player.storage.qtpz_aobing = true;
            player.awakenSkill('qtpz_aobing');
            var cardsss = targets[0].getCards('h');
            targets[0].discard(cardsss);
            targets[0].say('破釜沉舟,拼死一战!');
            'step 1';
            targets[0].useCard({ name: 'juedou' }, targets.slice(1), 'noai').animate = false;
          },
          ai: {
            order: 8,
            result: {
              target(player, target) {
                if (ui.selected.targets.length == 0) {
                  return -target.countCards('h');
                } else {
                  return -get.effect(target, { name: 'juedou' }, ui.selected.targets[0]);
                }
              }
            }
          }
        },
        qtpz_zhengu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { target: ['rewriteGainResult', 'rewriteDiscardResult'] },
          check(event, player) {
            return get.attitude(player, event.player) < 0;
          },
          logTarget: 'player',
          filter(event, player) {
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
        qtpz_zhengu2: {
          audio: 'qtpz_zhengu',
          trigger: { target: ['rewriteGainResult', 'rewriteDiscardResult'] },
          filter(event, player) {
            //貌似用这两个时机有点问题//
            if (!player.countCards('he', (card) => get.type(card) == 'equip')) return false;
            return event.player != player && game.hasPlayer((target) => target != player && target != event.player);
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
        qtpz_nagong: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCard'
          },
          usable: 1,
          check(event, player) {
            var num = 0;
            var num2 = event.targets.length;
            var att = get.attitude(player, event.player);
            for (var i = 0; i < event.targets.length; i++) {
              var eff = get.effect(event.targets[i], event.card, player, player);
              num += eff;
            }
            if (att > 0 && num2 > 2) {
              return true;
            } else if (att < 0 && num < 0 && num2 == 2) {
              return true;
            } else if (att > 0 && num < 0) {
              return true;
            } else return false;
          },
          logTarget: 'player',
          filter(event, player) {
            return event.targets && event.targets.length > 1;
          },
          content() {
            trigger.player.draw(trigger.targets.length);
            trigger.cancel();
          },
          ai: { threaten: 1.8 }
        },
        qtpz_chouxiang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseJieshuBegin' },
          forced: true,
          filter(event, player) {
            if (!player.countCards('hs')) return false;
            if (
            game.hasPlayer(function (current) {
              var card = { name: 'wugu' };
              return player.canUse(card, current, false) && (current == player || current.isDamaged());
            }))
            {
              return true;
            }
            return false;
          },
          content() {
            'step 0';
            var next = player.chooseToUse();
            next.set('openskilldialog', get.prompt2('qtpz_chouxiang'));
            next.set('norestore', true);
            next.set('bagua_skill', true);
            next.set('_backupevent', 'qtpz_chouxiang_use');
            next.set('custom', {
              add: {},
              replace: { window() {} }
            });
            next.backup('qtpz_chouxiang_use');
          }
        },
        qtpz_chouxiang_use: {
          audio: 'qtpz_chouxiang', //QQQ
          filterCard(card, player) {
            return get.itemtype(card) == 'card';
          },
          selectCard: 1,
          popname: true,
          prompt: '是否将一张手牌当<开仓放粮>使用？仅指定你和已受伤角色为目标.',
          filterTarget(card, player, target) {
            if (target != player && !target.isDamaged()) return false;
            return lib.filter.filterTarget(card, player, target);
          },
          position: 'hs',
          viewAs: { name: 'wugu' },
          check(card) {
            return 8 - get.value(card);
          }
        },
        qtpz_zhengchi: {
          multitarget: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (player.storage.qtpz_zhengchi) return false;
            return (
              game.countPlayer(function (current) {
                return current.countCards('e') && current.isDamaged();
              }) > 1);

          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filterTarget(card, player, target) {
            if (!target.isDamaged()) return false;
            return target.countCards('e');
          },
          complexTarget: true,
          init(player) {
            player.storage.qtpz_zhengchi = false;
          },
          intro: { content: 'limited' },
          selectTarget: [2, Infinity],
          multiline: true,
          markimage: 'extension/金庸群侠传/image/icon/jyzhengchi.jpg',
          mark: true,
          line: 'fire',
          enable: 'phaseUse',
          usable: 1,
          content() {
            'step 0';
            event.equips = [];
            for (var i = 0; i < targets.length; i++) {
              var equip = targets[i].getCards('e');
              event.equips = event.equips.concat(equip);
              targets[i].lose(equip, ui.special);
            }
            'step 1';
            game.cardsGotoOrdering(event.equips);
            'step 2';
            if (event.equips.length) {
              player.chooseCardButton(event.equips, 1, '请选择一张装备牌').set('ai', function (button) {
                return get.value(button.link);
              });
            } else {
              player.storage.qtpz_zhengchi = true;
              player.awakenSkill('qtpz_zhengchi');
              event.finish();
              return;
            }
            'step 3';
            if (result.links?.length) {
              event.toequips = result.links[0];
              event.equips.remove(result.links[0]);
            } else {
              event.finish();
            }
            'step 4';
            player.
            chooseTarget(true, '选择' + get.translation(event.targets) + '中的一名角色装备' + get.translation(event.toequips) + '!', function (card, player, target) {
              var equip = _status.event.equips;
              var list = _status.event.list;
              return list.includes(target) && target.hasEmptySlot(get.subtype(equip));
            }).
            set('list', event.targets).
            set('equips', event.toequips).
            set('ai', function (target) {
              return get.effect(target, event.toequips, target, player);
            });
            'step 5';
            if (result.targets?.length) {
              result.targets[0].equip(event.toequips, true).set('delay', true);
            }
            event.goto(2);
          },
          ai: {
            order: 8,
            result: {
              target(player, target) {
                var eff = game.hasPlayer(function (current) {
                  return get.attitude(player, current) > 0 && current.countCards('e') && current.isDamaged();
                });
                if (eff) {
                  var num = game.countPlayer(function (current) {
                    return current.countCards('e') && current.isDamaged();
                  });
                  if (ui.selected.targets.length < num - 1) {
                    return -target.countCards('e');
                  } else {
                    return 6 - target.countCards('e');
                  }
                }
                return 0;
              }
            },
            expose: 0.4
          }
        },
        qtpz_jiexiang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filterCard() {
            return true;
          },
          discard: false,
          usable: 1,
          lose: false,
          delay: 0,
          check(card) {
            var player = _status.event.player;
            var players = game.filterPlayer((target) => get.attitude(player, target) < 0);
            if (!players.length) return 0;
            var getnum = function (card, player, target) {
              var number = card.number;
              var gains = target.getGainableCards(player, 'h', function (card) {
                var number2 = card.number;
                return Math.abs(number - number2) <= 3;
              });
              return gains.length;
            };
            players.sort(function (a, b) {
              return getnum(card, player, b) - getnum(card, player, a);
            });
            return getnum(card, player, players[0]);
          },
          filter(event, player) {
            if (!player.countCards('h')) return false;
            return game.hasPlayer((current) => current != player && current.countCards('h') > 0);
            //return game.hasPlayer((current)=>current!=player&&current.countGainableCards(player,'h')>0);
          },
          filterTarget(card, player, target) {
            return target != player && target.countCards('h') > 0;
            //return target!=player&&target.countGainableCards(player,'h')>0;
          },
          content() {
            'step 0';
            player.showCards(cards, get.translation(player) + '发动了【劫饷】');
            event.cardsx = cards;
            'step 1';
            var content = [get.translation(target) + '的手牌', target.getCards('h')];
            game.log(player, '观看了' + get.translation(target) + '的手牌');
            player.chooseControl('ok').set('dialog', content);
            'step 2';
            var number = event.cardsx[0].number;
            var gains = target.getGainableCards(player, 'h', function (card) {
              var number2 = card.number;
              return Math.abs(number - number2) <= 3;
            });
            if (gains.length) player.gain(gains, target, 'bySelf', 'give');
          },
          ai: {
            order: 10,
            result: {
              target(player, target) {
                if (!ui.selected.cards.length) return 0;
                var card = ui.selected.cards[0];
                var number = card.number;
                var gains = target.getGainableCards(player, 'h', function (card) {
                  var number2 = card.number;
                  return Math.abs(number - number2) <= 3;
                });
                return -gains.length;
              }
            }
          }
        },
        qtpz_shenying: {
          mod: {
            globalTo(from, to, current) {
              if (to.hp <= 1 && to.hasEmptySlot(3)) return current + 1;
            }
          }
        },
        //新神章-霸天20220527
        qtpz_shenzhang: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filterTarget(card, player, target) {
            if (player == target) return false;
            return target.countCards('h') > 0;
          },
          line: 'fire',
          multitarget: true,
          multiline: true,
          selectTarget: [1, 3],
          content() {
            'step 0';
            event.suitList = [];
            var filterx = function (card) {
              var suit = card.suit;
              return !event.suitList.includes(suit);
            };
            event.filterx = filterx;
            event.targetsx = event.targets.slice(0);
            'step 1';
            if (!event.targetsx.length) {
              event.finish();
              return;
            }
            var target = event.targetsx.shift();
            event.target = target;
            if (!event.target.isAlive()) event.redo();
            'step 2';
            if (target.countDiscardableCards(player, 'h', event.filterx)) {
              player.
              discardPlayerCard(target, 1, 'h', true, 'visible').
              set('filterButton', function (button) {
                var suit = _status.event.filterx;
                return suit(button.link);
              }).
              set('filterx', event.filterx);
            } else {
              if (target.countCards('h')) player.viewHandcards(target);
              event._result = { bool: false };
            }
            'step 3';
            if (result.links?.length) {
              event.suitList.add(result.links[0].suit);
            } else {
              target.damage('fire', player);
            }
            event.goto(1);
          },
          ai: {
            order: 8,
            result: {
              target: -1
            }
          }
        },
        //旧神章
        qtpz_shenzhang_old: {
          mark: true,
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_shenzhang.jpg',
          multiline: true,
          init(player) {
            player.storage.qtpz_shenzhang_old = false;
          },
          intro: { content: 'limited' },
          audio: 'ext:金庸群侠传/peiyin:2',
          selectTarget: [1, 4],
          multitarget: true,
          enable: 'phaseUse',
          filter(event, player) {
            if (player.storage.qtpz_shenzhang_old) return false;
            return true;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filterTarget(card, player, target) {
            return player != target && target.countCards('h');
          },
          content() {
            'step 0';
            event.tar = targets;
            var str = '神章<br>是否弃置';
            for (var i = 0; i < event.tar.length; i++) {
              str += '【' + get.translation(event.tar[i]) + '】、';
            }
            str += '<br><span style="color: #FF7F00">各一张花色不同的手牌?</span><br>';
            str += '<span style="color: #FF00FF">没有弃牌的角色受到你的一点火焰伤害</span>';
            var dialog = ui.create.dialog(str, 'hidden');
            dialog.addText('其他角色的手牌');
            for (var i = 0; i < event.tar.length; i++) {
              if (event.tar[i].getCards('h').length) {
                dialog.addText('【' + get.translation(event.tar[i]) + '】的手牌');
                dialog.add(event.tar[i].getCards('h'));
              } else {
                dialog.addText('【' + get.translation(event.tar[i]) + '】没有手牌');
              }
            }
            player.
            chooseButton(dialog, [1, 4], true).
            set('filterButton', function (button) {
              for (var i = 0; i < ui.selected.buttons.length; i++) {
                if (button.link.suit == ui.selected.buttons[i].link.suit) return false;
              }
              for (var i = 0; i < ui.selected.buttons.length; i++) {
                var owner = get.owner(ui.selected.buttons[i].link);
                if (owner == get.owner(button.link)) return false;
              }
              return true;
            }).
            set('ai', function (button) {
              return -1; //get.value(button.link);
            });
            'step 1';
            if (result.bool) {
              var ownerss = [];
              var list = result.links;
              for (var i = 0; i < list.length; i++) {
                var owner = get.owner(list[i]);
                owner.discard(list[i]);
                if (!ownerss.includes(owner)) {
                  ownerss.push(owner);
                }
              }
              for (var j = 0; j < event.tar.length; j++) {
                if (!ownerss.includes(event.tar[j])) {
                  event.tar[j].damage(1, 'jy_du', player);
                }
              }
            } else {
              for (var j = 0; j < event.tar.length; j++) {
                event.tar[j].damage(1, 'jy_du', player);
              }
            }
            'step 2';
            player.storage.qtpz_shenzhang_old = true;
            player.awakenSkill('qtpz_shenzhang_old');
          },
          ai: {
            order: 11,
            result: { target: -1 },
            threaten: 1.1
          }
        },
        qtpz_jiegu: {
          group: ['qtpz_jiegu1'],
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: ['shaBefore', 'huogongBefore']
          },
          check(event, player) {
            var att = get.attitude(player, event.target);
            var card = event.card,
              target = event.target;
            if (target.hasSkillTag('nofire')) return att >= 0 ? false : true;
            if (card.name == 'sha') {
              if (!event.player.getEquip('qinggang') && target.getEquip('jydiytaohuazhen')) return att >= 0 ? false : true;
              if (target.hasShan()) return att >= 0 ? false : true;
              if (!target.hasShan() && target.hp == 1 && (target.countCards('h', 'tao') || target.countCards('h', 'jiu'))) return att >= 0 ? false : true;
              if (target.countCards('he') <= 2) return att >= 0 ? true : false;
              if (target.hp == 1) return att >= 0 ? true : false;
              return false;
            } else {
              if (target.hp != 1 && target.countDiscardableCards(player, 'he') >= 2) return att >= 0 ? false : true;
              if (target.countDiscardableCards(player, 'he') <= 1) return att >= 0 ? true : false;
              return false;
            }
          },
          filter(event, player) {
            if (event.card.name == 'huogong') return true;
            return event.card && event.card.nature == 'fire';
          },
          logTarget: 'target',
          content() {
            'step 0';
            trigger.cancel();
            'step 1';
            var num = trigger.target.countDiscardableCards(player, 'he');
            var num2 = Math.min(2, num);
            if (num2 > 0) {
              player.discardPlayerCard(num2, 'he', trigger.target, true);
            }
          }
        },
        qtpz_jiegu1: {
          audio: 'qtpz_jiegu',
          trigger: { global: 'damageBefore' },
          filter(event, player) {
            if (!event.player.countCards('he')) return false;
            if (event.hasNature()) return true;
            return false;
          },
          check(event, player) {
            var num1 = get.damageEffect(event.player, player, player, event.nature);
            var num2 = get.damageEffect(event.player, player, player);
            return num2 > num1;
          },
          logTarget: 'player',
          content() {
            delete trigger.nature;
            trigger.player.chooseToDiscard(1, 'he', true);
          }
        },
        //夏雪宜蛇游
        qtpz_sheyou: {
          audio: 'ext:金庸群侠传/peiyin:2',
          nobracket: true,
          trigger: { player: 'useCard' },
          filter(event, player) {
            if (event.targets[0] == player.previous && event.targets[0] == player.next) return false;
            if (event.card.name != 'sha') return false;
            if (event.targets.length != 1) return false;
            if (
            game.hasPlayer(function (current) {
              return current !== event.targets[0] && player.canUse(event.card, current, false);
            }))
            {
              return true;
            }
            return false;
          },
          content() {
            'step 0';
            event.draw = 0;
            event.add = [];
            event.num = 0;
            event.ni_eff = 0;
            event.shun_eff = 0;
            event.target = trigger.targets[0];
            event.shun = [];
            event.ni = [];
            if (player.next != event.target) {
              event.shuned = true;
            } else {
              event.shuned = false;
            }
            if (player.previous != event.target) {
              event.nied = true;
            } else {
              event.nied = false;
            }
            'step 1';
            if (event.shuned) {
              if (event.shunplayer == undefined) {
                event.shunplayer = player.next;
              } else {
                event.shunplayer = event.shunplayer.next;
              }
              if (event.shunplayer != event.target) {
                if (player.canUse(trigger.card, event.shunplayer, false)) {
                  event.shun.push(event.shunplayer);
                  event.shun_eff += get.effect(event.shunplayer, trigger.card, player, player);
                }
              } else {
                event.shuned = false;
              }
              event.redo();
            }
            'step 2';
            if (event.nied) {
              if (event.niplayer == undefined) {
                event.niplayer = player.previous;
              } else {
                event.niplayer = event.niplayer.previous;
              }
              if (event.niplayer != event.target) {
                if (player.canUse(trigger.card, event.niplayer, false)) {
                  event.ni.push(event.niplayer);
                  event.ni_eff += get.effect(event.niplayer, trigger.card, player, player);
                }
              } else {
                event.nied = false;
              }
              event.redo();
            }
            'step 3';
            if (event.ni.length && event.shun.length) {
              player.chooseBool('确定——顺时针<br>取消——逆时针').ai = function (event, player) {
                if (event.ni_eff > event.shun_eff) return false;
                return true;
              };
            } else if (event.ni.length) {
              player.popup('逆时针');
              event.boon = event.ni;
              event.goto(5);
            } else if (event.shun.length) {
              player.popup('顺时针');
              event.boon = event.shun;
              event.goto(5);
            } else {
              event.finish();
            }
            'step 4';
            if (result.bool) {
              player.popup('顺时针');
              event.boon = event.shun;
            } else {
              player.popup('逆时针');
              event.boon = event.ni;
            }
            'step 5';
            player.line(event.boon, ['fire', 'thunder', 'green', 'white'].randomGet());
            game.log(player, '对', event.boon, '发动了蛇游');
            'step 6';
            event.boon[event.num].chooseToDiscard('请弃置1张牌,否则成为' + get.translation(trigger.card) + '的额外目标', 'he').set('ai', function (card) {
              if (!player.hasSkillTag('unequip') && event.boon[event.num].getEquip('renwang') && get.color(trigger.card) == 'black') return -1;
              if (!player.hasSkillTag('unequip') && event.boon[event.num].getEquip('jydiybeidouzhen') && get.color(trigger.card) == 'black') return -1;
              if (!player.hasSkillTag('unequip') && event.boon[event.num].getEquip('jydiywuchanyi') && trigger.card.nature != 'fire' && trigger.card.nature != 'thunder') return -1;
              if (event.boon[event.num].hasSkillTag('maixie') && event.boon[event.num].hp > 2) return -1;
              if (event.boon[event.num].hp < 3) return 6 - get.value(card);
              return 5 - get.value(card);
            });
            'step 7';
            if (!result.bool) {
              player.line(event.boon[event.num], ['fire', 'thunder', 'green', 'white'].randomGet());
              event.add.push(event.boon[event.num]);
              game.log(event.boon[event.num], '是大笨蛋');
            } else {
              event.draw++;
            }
            'step 8';
            event.num++;
            if (event.num < event.boon.length) {
              event.goto(6);
            } else {
              if (event.add.length) {
                trigger.targets.addArray(event.add);
                game.log(event.add, '额外成为了' + get.translation(trigger.card) + '的目标');
                if (event.draw > 0) {
                  var next = game.createEvent('qtpz_sheyou_draw');
                  next.player = player;
                  next.num = event.draw;
                  event.next.remove(next);
                  trigger.after.push(next);
                  next.setContent(function () {
                    player.draw(num);
                    game.log(player, '的技能"蛇游"效果被触发');
                  });
                }
              }
            }
          }
        },
        qtpz_zishu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'damageBegin2' },
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          filter(event, player) {
            if (player.isTurnedOver()) return false;
            return event.num > 1;
          },
          logTarget: 'player',
          _priority: -7,
          content() {
            'step 0';
            player.draw();
            'step 1';
            player.turnOver();
            'step 2';
            trigger.cancel();
          }
        },
        qtpz_sanshe: {
          audio: 'ext:金庸群侠传/peiyin:2',
          subSkill: {
            cheng: {
              trigger: { source: 'damageBegin1' },
              popup: false,
              forced: true,
              filter(event, player) {
                if (event.qtpz_sanshe_ADDdamage) return false;
                if (event.player == event.source) return false;
                if (!event.player.hasSkill('qtpz_sanshe_she')) return false;
                return event.notLink();
              },
              content() {
                trigger.qtpz_sanshe_ADDdamage = true;
                trigger.source.line(trigger.player, 'green');
                trigger.num++;
              },
              _priority: 6,
              mark: true,
              charlotte: true,
              markimage: 'extension/金庸群侠传/image/icon/jycheng.jpg',
              intro: { content: '锁定技.你对有<赦>标记的角色造成伤害时,此伤害+1.' },
              ai: {
                effect: {
                  player(card, player, target, current, isLink) {
                    if (!target) return;
                    if (isLink) return;
                    if (!target.hasSkill('qtpz_sanshe_she')) return;
                    if (!get.tag(card, 'damage')) return;
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
            she: {
              charlotte: true,
              mark: true,
              markimage: 'extension/金庸群侠传/image/icon/jyshe.jpg',
              intro: { content: '锁定技.有<惩>标记的角色对你造成伤害时,此伤害+1.' }
            }
          },
          trigger: { global: 'damageBegin2' },
          check(event, player) {
            if (get.attitude(player, event.player) > 0) return event.num > 1;
            return get.attitude(player, event.player) < 0 && event.num == 1 && event.player.hp != 1;
          },
          init(player, skill) {
            player.storage[skill] = 0;
          },
          filter(event, player) {
            if (player.storage.qtpz_sanshe >= 3) return false;
            return event.source && event.player && event.source != event.player;
          },
          _priority: -6,
          mark: true,
          markimage: 'extension/金庸群侠传/image/icon/jysanshe.jpg',
          intro: { content: 'mark' },
          content() {
            trigger.source.draw();
            trigger.cancel();
            if (!trigger.source.hasSkill('qtpz_sanshe_cheng')) {
              trigger.source.addSkill('qtpz_sanshe_cheng');
            }
            if (!trigger.player.hasSkill('qtpz_sanshe_she')) {
              trigger.player.addSkill('qtpz_sanshe_she');
            }
            player.addMark('qtpz_sanshe', 1);
          }
        },
        qtpz_youlian: {
          subSkill: { off: {} },
          usable: 2,
          trigger: { global: 'loseEnd' },
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (!event.player.isAlive()) return false;
            if (player.hp >= player.maxHp) {
              if (player.hasSkill('qtpz_youlian_off')) return false;
            }
            return event.cards && event.cards.length > 1;
          },
          logTarget: 'player',
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          content() {
            'step 0';
            trigger.player.draw();
            if (!player.hasSkill('qtpz_youlian_off')) {
              player.addTempSkill('qtpz_youlian_off');
            }
            'step 1';
            var num = trigger.player.countCards('h');
            if (trigger.player.hp == num || trigger.player.maxHp == num) player.draw();
          }
        },
        qtpz_tingxian: {
          subSkill: { off: {} },
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 2,
          enable: 'phaseUse',
          filter(event, player) {
            if (!player.countCards('h')) return false;
            if (player.hp >= player.maxHp) {
              if (player.hasSkill('qtpz_tingxian_off')) return false;
            }
            return true;
          },
          filterCard() {
            return true;
          },
          position: 'h',
          selectCard: -1,
          discard: false,
          lose: false,
          delay: false,
          filterTarget(card, player, target) {
            return player != target;
          },
          content() {
            'step 0';
            //target.gain(cards,player,'giveAuto');
            player.give(cards, target, true);
            if (!player.hasSkill('qtpz_tingxian_off')) {
              player.addTempSkill('qtpz_tingxian_off');
            }
            'step 1';
            target.showHandcards();
            'step 2';
            var natures = [];
            for (var i of lib.inpile_nature) {
              natures.add(i);
            }
            for (var i of lib.card.sha.nature) {
              natures.add(i);
            }
            event.shaname = {
              natures1: natures.slice(0),
              natures: natures.slice(0),
              suits: lib.suit.slice(0)
            };
            'step 3';
            var hs = target.getCards('h', function (card) {
              var name = card.name,
                nature = get.nature(card, target),
                suit = card.suit;
              if (name != 'sha') return false;
              if (!player.canUse(card, target, false)) return false;
              if (nature && event.shaname.natures1.includes(nature)) {
                if (event.shaname.natures.includes(nature)) return true;
                if (event.shaname.suits.includes(suit)) return true;
              } else {
                return event.shaname.suits.includes(suit);
              }
              return false;
            });
            if (hs.length) {
              var suit = hs[0].name,
                nature = get.nature(hs[0], target);
              if (nature && event.shaname.natures.includes(nature)) {
                event.shaname.natures.remove(nature);
              } else {
                event.shaname.suits.remove(suit);
              }
              player.useCard(target, false, hs[0]);
              event.redo();
            }
          },
          ai: {
            order(skill, player) {
              return 1;
            },
            result: {
              target(player, target) {
                var num = player.countCards('h', 'sha');
                var num2 = target.countCards('h', 'sha');
                if (num + num2 == 0) {
                  if (!target.hasJudge('lebu')) return 1;
                  return 0;
                }
                if (num + num2 == player.countCards('h')) return -1;
                return 0;
              }
            },
            threaten: 0.8
          }
        },
        qtpz_hengdao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          shaRelated: true,
          trigger: { player: 'useCardToPlayered' },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            var pos = 'he';
            if (player.getEquip(1)) pos = 'hej';
            return event.target.countDiscardableCards(player, pos) > 0;
          },
          forced: true,
          content() {
            var pos = 'he';
            var count = 1;
            if (player.getEquip(1)) {
              pos = 'hej';
              var num = 0;
              if (trigger.target.countDiscardableCards(player, 'h')) num++;
              if (trigger.target.countDiscardableCards(player, 'e')) num++;
              if (trigger.target.countDiscardableCards(player, 'j')) num++;
              count = num;
            }
            const next = player.
            discardPlayerCard(pos, [count, count], trigger.target, get.prompt(event.name, trigger.target)).
            set('ai', function (button) {
              if (!_status.event.att) return 0;
              const evt = _status.event.parent._trigger;
              const player = evt.player;
              const value = get.jyValue(button.link, evt.target);
              if (get.position(button.link) == 'e') {
                if (get.subtype(button.link) == 'equip2') {
                  var effect1 = get.effect(evt.target, evt.card, player, player);
                  player.qtpz_hengdao_temp = true;
                  var effect2 = get.effect(evt.target, evt.card, player, player);
                  delete player.qtpz_hengdao_temp;
                  if (effect1 > effect2) return value * 6;
                  return value * 2;
                }
                return value;
              }
              return value;
            }).
            set('att', get.attitude(player, trigger.target) <= 0);
            next.set('filterButton', function (button) {
              for (var i = 0; i < ui.selected.buttons.length; i++) {
                if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
              }
              return true;
            });
          },
          ai: {
            unequip: true,
            skillTagFilter(player, tag, arg) {
              if (arg && arg.name != 'sha') return false;
              if (arg && !arg.target.getEquip(2)) return false;
              if (player.qtpz_hengdao_temp) return false;
              return true;
            }
          }
        },
        qtpz_hengdao_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          shaRelated: true,
          trigger: { player: 'useCardToPlayered' },
          forced: true,
          filter(event, player) {
            if (lib.config.extension_金庸群侠传_jiexiantupo) {
              if (event.card.name == 'sha' && player.getEquip(1) && event.target.countDiscardableCards(player, 'hej')) {
                return true;
              }
            }
            if (!lib.config.extension_金庸群侠传_jiexiantupo) {
              if (event.card.name == 'sha' && player.getEquip(1) && event.target.countDiscardableCards(player, 'he')) {
                return true;
              }
            }
            return false;
          },
          prompt(event, player) {
            if (lib.config.extension_金庸群侠传_jiexiantupo) {
              return '是否发动【横刀】弃置' + get.translation(event.target) + '一张牌';
            }
            return '是否发动【横刀】弃置' + get.translation(event.target) + '每个区域各一张牌';
          },
          content() {
            if (lib.config.extension_金庸群侠传_jiexiantupo) {
              var num = 0;
              if (trigger.target.countDiscardableCards(player, 'h')) num++;
              if (trigger.target.countDiscardableCards(player, 'e')) num++;
              if (trigger.target.countDiscardableCards(player, 'j')) num++;
              if (num > 0) {
                player.
                discardPlayerCard(get.prompt('qtpz_hengdao'), trigger.target, num, 'hej').
                set('filterButton', function (button) {
                  for (var i = 0; i < ui.selected.buttons.length; i++) {
                    if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                  }
                  return true;
                }).
                set('cardx', trigger.card);
              }
            } else {
              player.
              discardPlayerCard(get.prompt('qtpz_hengdao', trigger.target), 'he', '弃置其一张牌', trigger.target).
              set('ai', function (button) {
                if (!_status.event.att) return 0;
                var evt = _status.event;
                var player = evt.player;
                var value = get.jyValue(button.link, evt.target);
                if (get.position(button.link) == 'e') {
                  if (get.subtype(button.link) == 'equip2') {
                    var effect1 = get.effect(evt.target, evt.cardx, player, player);
                    player.qtpz_hengdao_temp = true;
                    var effect2 = get.effect(evt.target, evt.cardx, player, player);
                    delete player.qtpz_hengdao_temp;
                    if (effect1 > effect2) return value * 6;
                    return value * 2;
                  }
                  return value;
                }
                return value;
              }).
              set('att', get.attitude(player, trigger.target) <= 0).
              set('cardx', trigger.card);
            }
          },
          ai: {
            unequip: true,
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (!player.getEquip(1)) return false;
              if (tag == 'directHit_ai') return arg.card.name == 'sha' && arg.target.countDiscardableCards(player, 'h') == 1 && arg.target.countCards('h') == 1;
              if (arg && arg.name == 'sha' && arg.target.getEquip(2) && !get.equipValue(arg.target.getEquip(2), arg.target) > 0 && !player.qtpz_hengdao_temp) return true;
              return false;
            }
          }
        },
        qtpz_kuiyi: {
          global: 'qtpz_kuiyi2',
          audio: 'ext:金庸群侠传/peiyin:2',
          zhuSkill: true
        },
        qtpz_kuiyi2: {
          audio: 'qtpz_kuiyi',
          forceaudio: true,
          forced: true,
          enable: 'phaseUse',
          filter(event, player) {
            var group = 'shu';
            if (lib.jy_changeSkill) group = 'jy_lie';
            return game.hasPlayer(function (target) {
              if (!target.hasZhuSkill('qtpz_kuiyi', player)) return false;
              if (group != player.group) return false;
              return target != player;
            });
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filterTarget(card, player, target) {
            var group = 'shu';
            if (lib.jy_changeSkill) group = 'jy_lie';
            if (group != player.group) return false;
            return target != player && target.hasZhuSkill('qtpz_kuiyi', player);
          },
          prepare(cards, player, targets) {},
          usable: 1,
          content() {
            event.card = get.cardPile(function (card) {
              return get.type(card) == 'equip';
            });
            if (event.card) {
              target.equip(event.card, true).set('delay', true);
            }
          },
          ai: {
            result: {
              target(player, target) {
                if (target.countCards('e') <= 1) return 3.5;
                return 3;
              }
            },
            order: 4,
            expose: 0.4
          }
        },
        qtpz_sheer1: {
          audio: 'qtpz_sheer',
          trigger: {
            global: 'loseEnd'
          },
          forced: true,
          filter(event, player) {
            var playerx = false;
            var evt = event.parent;
            if (!evt) return false;
            if (evt.player && evt.player != player && evt.player != event.player) {
              playerx = evt.player;
            }
            if (!playerx) {
              evt = evt.parent;
              if (!evt) return false;
              if (evt.player && evt.player != player && evt.player != event.player) {
                playerx = evt.player;
              }
            }
            if (!playerx) {
              evt = evt.parent;
              if (!evt) return false;
              if (evt.player && evt.player != player && evt.player != event.player) {
                playerx = evt.player;
              }
            }
            if (!playerx) {
              evt = evt.parent;
              if (!evt) return false;
              if (evt.player && evt.player != player && evt.player != event.player) {
                playerx = evt.player;
              }
            }
            if (!playerx) return false;
            if (!playerx.isIn()) return false;
            var subtype = [];
            if (!event.es || !event.es.length) return false;
            for (var i = 0; i < event.es.length; i++) {
              subtype.add(get.subtype(event.es[i]));
            }
            for (var i = 0; i < subtype.length; i++) {
              var subtype2 = subtype[i];
              if (player.storage.qtpz_sheer_map[subtype2].includes(event.player)) {
                event.set('qtpz_sheer_target', playerx);
                return true;
              }
            }
            return false;
          },
          content() {
            'step 0';
            event.target = trigger.qtpz_sheer_target;
            event.subtype = [];
            for (var i = 0; i < trigger.es.length; i++) {
              event.subtype.add(get.subtype(trigger.es[i]));
            }
            var list = [
            ['装备', '', 'zhuge'],
            ['装备', '', 'bagua'],
            ['装备', '', 'dilu'],
            ['装备', '', 'chitu'],
            ['装备', '', 'muniu']];


            var str = '设饵:是否选择【' + get.translation(trigger.player) + '】此次失去装备牌的装备栏,并令【' + get.translation(event.target) + '】选择弃置2张牌或失去1点体力？</span>';
            player.
            chooseButton(1, 'hidden', [str, [list, 'vcard'], 'hidden']).
            set('filterButton', function (button) {
              var card = { name: button.link[2] };
              var subtype = get.subtype(card);
              if (event.subtype.includes(subtype)) {
                if (player.storage.qtpz_sheer_map[subtype].includes(trigger.player)) return true;
              }
              return false;
            }).
            set('ai', function (button) {
              return -get.attitude(player, event.target);
            });
            'step 1';
            if (result.links?.length) {
              var card = { name: result.links[0][2] };
              var subtype = get.subtype(card);
              player.storage.qtpz_sheer_map[subtype].remove(trigger.player);
              game.log(player, '清除了设饵记录的', trigger.player, '的', '#y' + get.subtype(card), '栏');
            } else {
              event.finish();
            }
            'step 2';
            if (
            event.target.countCards('he', function (card) {
              return lib.filter.cardDiscardable(card, event.target, event.name);
            }) > 0)
            {
              event.target.chooseToDiscard('he', true);
            }
            event.target.loseHp(1);
          }
        },
        qtpz_sheer: {
          group: ['qtpz_sheer1'],
          init(player, skill) {
            if (player.storage.qtpz_sheer_map == undefined) {
              player.storage.qtpz_sheer_map = {
                equip1: [],
                equip2: [],
                equip3: [],
                equip4: [],
                equip5: []
              };
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filterCard() {
            return false;
          },
          selectCard: -1,
          filter(event, player) {
            if (!player.countCards('h')) return false;
            return true;
          },
          usable: 3,
          filterTarget(card, player, target) {
            var list = ['zhuge', 'bagua', 'dilu', 'chitu', 'muniu'];
            for (var i = 0; i < list.length; i++) {
              var subtype = get.subtype({ name: list[i] });
              if (!player.storage.qtpz_sheer_map[subtype].includes(target) && !target.hasDisabledSlot(subtype)) return true;
              //if(!player.storage.qtpz_sheer_map[subtype].includes(target)&&target.getEquip(subtype)) return true;
            }
            return false;
          },
          content() {
            'step 0';
            event.target = targets[0];
            var list = [
            ['装备', '', 'zhuge'],
            ['装备', '', 'bagua'],
            ['装备', '', 'dilu'],
            ['装备', '', 'chitu'],
            ['装备', '', 'muniu']];


            var str = '<span style="color: #FF0000">设饵:选择记录【' + get.translation(event.target) + '】一个装备栏?</span>';
            player.
            chooseButton(true, 1, 'hidden', [str, [list, 'vcard'], 'hidden']).
            set('filterButton', function (button) {
              var card = { name: button.link[2] };
              var subtype = get.subtype(card);
              var map = event.target;
              //if(player.storage.qtpz_sheer_map[subtype].includes(map)||!event.target.getEquip(subtype)) return false;
              if (player.storage.qtpz_sheer_map[subtype].includes(map) || event.target.hasDisabledSlot(subtype)) return false;
              return true;
            }).
            set('ai', function (button) {
              var card = { name: button.link[2] };
              if (event.target.getEquip(get.subtype(card))) return 1;
              return 0.1;
            });
            'step 1';
            if (result.links?.length) {
              var card = { name: result.links[0][2] };
              var subtype = get.subtype(card);
              var map = event.target;
              player.storage.qtpz_sheer_map[subtype].push(map);
              game.log(player, '记录了', event.target, '的', '#y' + get.subtype(card), '栏');
            }
          },
          ai: {
            order(skill, player) {
              return 1;
            },
            result: {
              player(player) {
                if (player.countCards('e') < 3) return 0;
                return 1;
              },
              target(player, target) {
                var list = ['zhuge', 'bagua', 'dilu', 'chitu', 'muniu'];
                for (var i = 0; i < list.length; i++) {
                  var subtype = get.subtype(list[i]);
                  if (!player.storage.qtpz_sheer_map[subtype].includes(target) && target.getEquip(subtype)) return 1;
                }
                return 0.2;
              }
            },
            threaten: 0.8
          }
        },
        qtpz_jianshi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCard' },
          forced: true,
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          content() {
            var bool = true;
            var number = trigger.card.number;
            if (typeof number == 'number' && number % 2 == 1) bool = false;
            if (bool) player.draw();
          },
          ai: {
            effect: {
              player(card, player, target) {
                if (card.name == 'sha') {
                  var bool = true;
                  var number = card.number;
                  if (typeof number == 'number' && number % 2 == 1) bool = false;
                  if (bool) return [1, 1];
                }
              }
            },
            //unequip:true,
            unequip: true,
            skillTagFilter(player, tag, arg) {
              if (arg && arg.name == 'sha') {
                var number = arg.card.number;
                if (typeof number == 'number' && number % 2 == 0) return false;
                return true;
              }
              return false;
            }
          }
        },
        qtpz_guazhan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseJieshuBegin'
          },
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseUseTarget(
              get.prompt2('qtpz_guazhan'),
              {
                name: 'sha'
              },
              false,
              'nodistance'
            ).
            set('ai', function () {
              var cards = _status.event.player.getCards('h');
              if (cards.length > 2) return -1;
              if (Array.isArray(cards))
              for (var i of cards) {
                if (get.value(i) > 7 || get.tag(i, 'recover') >= 1) return -1;
              }
              return get.effect_use.apply(this, arguments);
            }).
            set('oncard', function (card, player) {
              if (!player) player = this.player;
              var cards = player.getCards('h');
              player.discard(cards);
            });
          },
          ai: {
            threaten(player, target) {
              return 1.6;
            }
          }
        },
        qtpz_yizhen_count: {
          trigger: { player: 'changeHp' },
          forced: true,
          _priority: 100,
          popup: false,
          firstDo: true,
          filter(event, player) {
            if (player.storage.qtpz_yizhen) return false;
            var evt = event.parent;
            if (evt.name != 'recover') return false;
            if (!evt.card || evt.card.name != 'tao') return false;
            //game.log('evt.source:',evt.source);
            if (!evt.source) return false;
            var _save = evt.getParent('_save');
            var dying = evt.getParent('dying');
            if (!_save || !dying) return false;
            //game.log('dying.player:',dying.player);
            if (dying.player != player) return false;
            return true;
          },
          content() {
            var recover = trigger.parent;
            player.getHistory('custom').push({ qtpz_yizhen: recover });
            //var dying=recover.getParent('dying');
            //if(!dying.qtpz_yizhen_targets)dying.qtpz_yizhen_targets=[];
            //dying.qtpz_yizhen_targets.add(recover.source);
          }
        },
        qtpz_yizhen: {
          group: 'qtpz_yizhen_count',
          derivation: ['qtpz_shenzhao'],
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'dyingEnd' },
          limited: true,
          init(player, skill) {
            player.storage[skill] = false;
          },
          //filterxxxxxxxxx:function(event,player){
          //    if(player.storage.qtpz_yizhen) return false;
          //    var recovers=player.getHistory('recover');
          //    var targets=[];
          //    for(var recover of recovers){
          //        if(recover.getParent('dying')==event&&recover.source&&recover.source.isIn()&&recover.card&&recover.card.name=='tao')targets.add(recover.source);
          //    }
          //    event.set("qtpz_yizhen_targets",targets)
          //    return targets.length>0;
          //},
          //filterx:function(dying,player){
          //    if(!dying.qtpz_yizhen_targets) return false;
          //    for(var source of dying.qtpz_yizhen_targets){
          //       if(source.isIn()) return true;
          //   };
          //    return false;
          //},
          filter(dying, player) {
            if (player.storage.qtpz_yizhen) return false;
            var recovers = player.getHistory('custom');
            for (var recover of recovers) {
              if (recover.qtpz_yizhen) {
                var evt = recover.qtpz_yizhen;
                //game.log('recover.source:',evt.source);
                if (evt.getParent('dying') == dying && evt.source && evt.source.isIn()) return true;
              }
            }
            return false;
          },
          forced: true,
          content() {
            'step 0';
            var targets = [];
            var recovers = player.getHistory('custom');
            for (var recover of recovers) {
              if (recover.qtpz_yizhen) {
                var evt = recover.qtpz_yizhen;
                if (evt.getParent('dying') == trigger && evt.source && evt.source.isIn()) targets.add(evt.source);
              }
            }
            //for(var source of trigger.qtpz_yizhen_targets){
            //    if(source.isIn())targets.add(source);
            //};
            player.
            chooseTarget(get.prompt2('qtpz_yizhen'), function (card, player, target) {
              var evt = _status.event;
              return evt.list.includes(target);
            }).
            set('ai', function (target) {
              return get.attitude(player, target);
            }).
            set('list', targets);
            'step 1';
            if (result.bool) {
              player.awakenSkill('qtpz_yizhen');
              player.storage.qtpz_yizhen = true;
              result.targets[0].addSkills('qtpz_shenzhao');
            }
          },
          markimage: 'extension/金庸群侠传/image/icon/jyyizhen.jpg',
          mark: true,
          intro: { content: 'limited' }
        },
        qtpz_shenzhao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseZhunbeiBegin' },
          forced: true,
          filter(event, player) {
            var hs = player.countCards('h');
            var hp = player.hp;
            if (lib.config.extension_金庸群侠传_jiexiantupo) hp = player.maxHp;
            if (hp - hs > 0) return true;
            return false;
          },
          content() {
            var hs = player.countCards('h');
            var hp = player.hp;
            if (lib.config.extension_金庸群侠传_jiexiantupo) hp = player.maxHp;
            if (hp - hs > 0) player.draw(hp - hs);
          }
        },
        qtpz_qingying: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCard2'
          },
          shaRelated: true,
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            if (event.player == player) return false;
            if (!event.player.isPhaseUsing()) return false;
            return player.countCards('h') > 0;
          },
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          forced: true,
          cardUsable2(card, player, event) {
            card = card;
            var info = get.info(card);
            var num = info.usable;
            if (typeof num == 'function') num = num(card, player);
            num = game.checkMod(card, player, num, 'cardUsable', player);
            if (typeof num != 'number') return true;else
            return player.countUsed(card) < num;
          },
          content() {
            'step 0';
            const translation = get.translation(trigger.player);
            const translation2 = get.translation(trigger.card);
            const attbool = get.attitude(player, trigger.player) > 0;
            const redGo = function () {
              if (!attbool) return false;
              if (trigger.addCount === false) return false;
              //if(trigger.player.hasSkill("paoxiao")) return false;
              //if(trigger.player.getEquip("zhuge")) return false;
              //if(trigger.player.hasSkill("fengnu")) return false;
              //if(trigger.player.hasSkill("tanlin3")) return false;
              //if(trigger.player.hasSkill("zhaxiang2")) return false;
              if (!trigger.player.hasSha('use')) return false;
              if (!trigger.player.hasValueTarget({ name: 'sha' })) return false;
              if (lib.skill.qtpz_qingying.cardUsable2({ name: 'sha' }, trigger.player, event.getParent('chooseToUse'))) return false;
              return true;
            }();
            const blackGo = function () {
              if (!attbool) return false;
              return game.hasPlayer(function (current) {
                if (trigger.targets.includes(current)) return false;
                if (!trigger.player.canUse(trigger.card, current)) return false;
                return get.effect(current, trigger.card, trigger.player, trigger.player) > 0;
              });
            }();
            //chooseToDiscard-->chooseCard
            const next = player.chooseCard(1, 'h', get.prompt2(event.name, trigger.player)).set('ai', function (card) {
              const evt = _status.event;
              const redGo = evt.redGo;
              const blackGo = evt.blackGo;
              const color = get.color(card);
              if (redGo && color == 'red') {
                return 4 - get.value(card);
              }
              if (blackGo && color == 'black') {
                return 6 - get.value(card);
              }
              return -1;
            });
            next.set('redGo', redGo);
            next.set('blackGo', blackGo);
            next.set('filterCard', lib.filter.cardDiscardable);
            'step 1';
            if (result.cards?.length) {
              const cardx = result.cards[0];
              const color = get.color(cardx);
              player.discard(cardx);
              if (color == 'red') {
                if (trigger.addCount !== false) {
                  trigger.addCount = false;
                  trigger.player.getStat().card.sha--;
                  game.log(trigger.player, '#y使用的', trigger.card, '不计入出杀次数');
                  event.finish();
                }
              } else if (color == 'black') {
                game.log(trigger.player, '#y使用的', trigger.card, '可以额外指定一个目标');
                trigger.player.
                chooseTarget('请缨', '是否为' + get.translation(trigger.card) + '增加一个目标？', function (card, player, target) {
                  return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
                }).
                set('sourcex', trigger.targets).
                set('ai', function (target) {
                  var player = _status.event.player;
                  return get.effect(target, _status.event.card, player, player);
                }).
                set('card', trigger.card);
              }
            } else {
              event.finish();
            }
            'step 2';
            if (result.targets?.length) {
              event.target = result.targets[0];
            } else {
              event.finish();
            }
            'step 3';
            trigger.player.line(event.target, 'green');
            game.log(event.target, '额外成为了', trigger.card, '的目标');
            trigger.targets.push(event.target);
          }
        },
        qtpz_jingguo: {
          trigger: {
            global: 'useCard'
          },
          lastDo: true,
          _priority: -100,
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          filter(event, player) {
            if (!event.targets || !event.targets.length) return false;
            if (!event.targets.includes(player)) return false;
            return event.targets.length > 1;
          },
          addEquipTarget(target) {
            const next = game.createEvent('zhuque_clear', false);
            next.player = target;
            next.setContent(lib.skill.qtpz_jingguo.addEquip);
          },
          addEquip() {
            if (['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].some((i) => player.hasEmptySlot(i))) {
              const equip = get.cardPile(function (card) {
                if (get.type(card) != 'equip') return false;
                if (get.cardtag(card, 'gifts')) return false;
                if (!player.canUse(card, player)) return false;
                return player.canEquip(card);
              });
              if (equip) {
                player.useCard(equip, player, false);
              } else {
                game.log('没有符合', player, '的装备牌了!');
              }
            } else {
              const equip = get.cardPile(function (card) {
                if (get.type(card) != 'equip') return false;
                if (get.cardtag(card, 'gifts')) return false;
                if (!player.canUse(card, player)) return false;
                return player.canEquip(card, true);
              });
              if (equip) {
                player.useCard(equip, player, false);
              } else {
                game.log('没有符合', player, '的装备牌了!');
              }
            }
          },
          content() {
            'step 0';
            const next = player.chooseTarget([1, 2], get.prompt2(event.name), function (card, player, target) {
              if (!['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].some((i) => target.hasEquipableSlot(i))) return false;
              return _status.event.sourcex.includes(target);
            });
            next.set('sourcex', trigger.targets);
            next.set('ai', function (target) {
              const player = _status.event.player;
              const att = get.attitude(player, target);
              if (att > 0) return ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].filter((i) => target.hasEmptySlot(i)).length;
              return 0;
            });
            'step 1';
            if (result.targets?.length) {
              event.targets = result.targets;
            } else {
              event.finish();
            }
            'step 2';
            if (event.targets.length == 1) {
              lib.skill.qtpz_jingguo.addEquipTarget(event.targets[0]);
              lib.skill.qtpz_jingguo.addEquipTarget(event.targets[0]);
            } else {
              lib.skill.qtpz_jingguo.addEquipTarget(event.targets[0]);
              lib.skill.qtpz_jingguo.addEquipTarget(event.targets[1]);
            }
          }
        },
        qtpz_jingguo_old: {
          mod: {
            maxHandcard(player, num) {
              return num + player.countCards('e');
            }
          },
          group: 'qtpz_jingguo_gain',
          subSkill: {
            gain: {
              trigger: { player: 'gainEnd' },
              forced: true,
              filter(event, player) {
                const wugu = event.parent;
                if (!wugu || wugu.name != 'wugu') return false;
                if (!event.cards || !event.cards.length) return false;
                if (get.type(event.cards[0], null, false) == 'equip') return false;
                const subEquip = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                return subEquip.some(function (sub) {
                  if (!player.hasEmptySlot(sub)) return false;
                  return get.cardPile(function (card) {
                    if (get.type(card) != 'equip') return false;
                    if (get.subtype(card) != sub) return false;
                    if (get.cardtag(card, 'gifts')) return false;
                    //if(get.effect(player,card,player,player)<0) return false;
                    return player.canEquip(card);
                  });
                });
              },
              content() {
                const subEquip = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                const listCards = [];
                subEquip.filter(function (sub) {
                  if (!player.hasEmptySlot(sub)) return false;
                  return get.cardPile(function (card) {
                    if (get.type(card) != 'equip') return false;
                    if (get.subtype(card) != sub) return false;
                    if (get.cardtag(card, 'gifts')) return false;
                    if (!player.canEquip(card)) return false;
                    listCards.push(card);
                    //if(get.effect(player,card,player,player)<0) return false;
                  });
                });
                if (listCards.length) {
                  player.equip(listCards.randomGet());
                } else {
                  player.popup('无装备牌');
                  game.log('牌堆无装备牌');
                }
              }
            }
          },
          trigger: {
            global: 'wuguContentBeforeAfter'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          _priority: 5,
          filter(event, player) {
            if (event.card.name != 'wugu') return false;
            if (!event.targets.includes(player)) return false;
            if (event.targets[0] == player) return false;
            return true;
          },
          content() {
            const evt = trigger.parent;
            evt.targets.remove(player);
            evt.targets.unshift(player);
          }
        },
        qtpz_benlei2: {
          subSkill: {
            beixin: {
              shaRelated: true,
              trigger: { player: 'useCardToPlayered' },
              check(event, player) {
                return get.attitude(player, event.target) <= 0;
              },
              filter(event, player) {
                var equip = event.target.getEquip(2);
                if (!equip) return false;
                if (equip.origin_name) return false;
                if (!lib.inpile.includes(equip.name)) {
                  return false;
                }
                if (equip.name == 'jydiy_jingsibeixin') return false;
                return event.card && event.card.name == 'sha' && event.card.nature == 'thunder';
              },
              logTarget: 'target',
              content() {
                var equip2 = trigger.target.getEquip(2);
                trigger.target.removeEquipTrigger(equip2);
                var origin_name = equip2.name;
                equip2.name = 'jydiy_jingsibeixin';
                equip2.origin_name = origin_name;
                trigger.target.addEquipTrigger(equip2);
                var next = game.createEvent('qtpz_benlei2_clear');
                next.card = equip2;
                next.player = trigger.target;
                next.forceDie = true;
                //next._source_name=_source_name;
                event.next.remove(next);
                trigger.parent.after.push(next);
                next.setContent(function () {
                  if (!card.origin_name) return;
                  var bool = false;
                  if (player.isAlive() && player.getCards('e').includes(card)) bool = true;
                  if (bool) player.removeEquipTrigger(card);
                  var origin_name = card.origin_name;
                  delete card.origin_name;
                  card.name = origin_name;
                  // card.init([
                  //    card.suit,
                  //    card.number,
                  //    event._source_name,
                  //    card.nature
                  // ]);
                  if (bool) player.addEquipTrigger(card);
                });
              },
              ai: {
                unequip: true,
                skillTagFilter(player, tag, arg) {
                  if (get.attitude(player, arg.target) > 0) return false;
                  var equip = arg.target.getEquip(2);
                  if (!equip) return false;
                  if (equip.name == 'jydiy_jingsibeixin') return false;
                  if (arg && arg.card && arg.card.name == 'sha' && arg.card.nature == 'thunder') return true;
                  return false;
                }
              }
            },
            sha: {
              charlotte: true,
              mod: {
                cardnature(card, player) {
                  if (card.name == 'sha') return 'thunder';
                }
              }
            }
          },
          group: 'qtpz_benlei2_beixin',
          audio: 'qtpz_benlei',
          enable: 'phaseUse',
          usable: 1,
          filterTarget(card, player, target) {
            return player.canCompare(target);
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          content() {
            'step 0';
            player.chooseToCompare(target);
            'step 1';
            if (result.bool) {
              player.addTempSkill('qtpz_benlei2_sha');
            }
          },
          ai: {
            order(name, player) {
              var cards = player.getCards('h');
              if (player.countCards('h', 'sha') == 0) {
                return 1;
              }
              if (Array.isArray(cards))
              for (var i of cards) {
                if (i.name != 'sha' && i.number > 11 && get.value(i) < 7) {
                  return 9;
                }
              }
              return get.order({ name: 'sha' }) - 1;
            },
            result: {
              player(player) {
                if (player.countCards('h', 'sha') > 0) return 0.6;
                var num = player.countCards('h');
                if (num > player.hp) return 0;
                if (num == 1) return -2;
                if (num == 2) return -1;
                return -0.7;
              },
              target(player, target) {
                var num = target.countCards('h');
                if (num == 1) return -1;
                if (num == 2) return -0.7;
                return -0.5;
              }
            },
            threaten: 1.3
          }
        },
        qtpz_benlei: {
          subSkill: {
            sha: {
              mod: {
                cardnature(card, player) {
                  if (card.name == 'sha' && card.nature != 'thunder') return 'thunder';
                },
                suit(card, suit) {
                  if (card.name == 'sha' && get.nature(card) == 'thunder') return 'none';
                }
              },
              charlotte: true,
              trigger: { player: 'useCardBegin' },
              forced: true,
              filter(event, player) {
                if (event.card.name == 'sha') {
                  if (event.card.nature == 'thunder') return false;
                  return true;
                }
                return false;
              },
              content() {
                if (get.itemtype(trigger.card) == 'card') {
                  trigger.card = trigger.card;
                }
                trigger.card.nature = 'thunder';
                trigger.card.suit = 'none';
                trigger.card.number = 'none';
                trigger.card.color = 'none';
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filterTarget(card, player, target) {
            return player.canCompare(target);
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          content() {
            'step 0';
            player.chooseToCompare(target);
            'step 1';
            if (result.bool) {
              player.addTempSkill('qtpz_benlei_sha');
            }
          },
          ai: {
            order(name, player) {
              var cards = player.getCards('h');
              if (player.countCards('h', 'sha') == 0) {
                return 1;
              }
              if (Array.isArray(cards))
              for (var i of cards) {
                if (i.name != 'sha' && i.number > 11 && get.value(i) < 7) {
                  return 9;
                }
              }
              return get.order({ name: 'sha' }) - 1;
            },
            result: {
              player(player) {
                if (player.countCards('h', 'sha') > 0) return 0.6;
                var num = player.countCards('h');
                if (num > player.hp) return 0;
                if (num == 1) return -2;
                if (num == 2) return -1;
                return -0.7;
              },
              target(player, target) {
                var num = target.countCards('h');
                if (num == 1) return -1;
                if (num == 2) return -0.7;
                return -0.5;
              }
            },
            threaten: 1.3
          }
        },
        qtpz_guhuo: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'chooseToCompareBegin' },
          forced: true,
          filter(event, player) {
            var targets = event.targets && event.targets.length ? event.targets.slice(0) : [event.target];
            targets.add(event.player);
            targets.remove(player);
            return targets.filter(function (target) {
              if (!target.countCards('h')) return false;
              return !event.fixedResult || !event.fixedResult[target.playerid];
            }).length;
          },
          content() {
            'step 0';
            var targets = trigger.targets && trigger.targets.length ? trigger.targets.slice(0) : [trigger.target];
            targets.add(trigger.player);
            targets.remove(player);
            event.targets = targets.filter(function (target) {
              if (!target.countCards('h')) return false;
              return !trigger.fixedResult || !trigger.fixedResult[target.playerid];
            });
            'step 1';
            event.target = event.targets.shift();
            'step 2';
            var str = '贾祸:是否选择<span style="color: #FF0000">【' + get.translation(target) + '】</span>一张手牌作为其拼点牌';
            player.choosePlayerCard(target, str, 1, 'h', 'visible').set('ai', function (button) {
              var att2 = get.attitude(player, target);
              if (att2 < 0 && button.link.number <= 7) return get.value(button.link);
              return -1;
            });
            'step 3';
            if (result.bool) {
              if (!trigger.fixedResult) trigger.fixedResult = {};
              trigger.fixedResult[target.playerid] = result.links[0];
              var next = game.createEvent('qtpz_guhuo_after', false);
              next.target = player;
              next.player = target;
              next.setContent(function () {
                if (target.isIn() && player.isIn()) {
                  player.say('你怎可碍我大事？');
                  player.chooseToUse({
                    prompt: '贾祸',
                    prompt2: '是否对' + get.translation(target) + '使用一张杀？',
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
                }
              });
              event.next.remove(next);
              trigger.after.push(next);
            }
            'step 4';
            if (event.targets.length) event.goto(1);
          }
        },
        qtpz_yisui: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: function () {
              if (lib.config.extension_金庸群侠传_jiexiantupo) return ['loseHpEnd', 'gainMaxHpEnd', 'loseMaxHpEnd'];
              return ['loseHpEnd'];
            }()
          },
          logTarget: 'player',
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          filter(event, player) {
            return event.num > 0 && event.player != player;
          },
          content() {
            var num = trigger.num;
            if (lib.config.extension_金庸群侠传_jiexiantupo) num = num * 2;
            trigger.player.draw(num);
            player.draw(num);
          }
        },
        qtpz_duanbi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'dying' },
          mark: true,
          markimage: 'extension/金庸群侠传/image/icon/jyduanbi.jpg',
          init(player, skill) {
            player.storage[skill] = false;
          },
          logTarget: 'player',
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          _priority: 2,
          filter(event, player) {
            if (!event.player.isDying()) return false;
            if (player.countDisabledSlot() >= 5) return false;
            return !player.storage.qtpz_duanbi;
          },
          content() {
            'step 0';
            var list = [
            ['装备', '', 'jydiy_tulongdao'],
            ['装备', '', 'jydiytaohuazhen'],
            ['装备', '', 'jydiyheimeigui'],
            ['装备', '', 'jydiyhanxuebaoma'],
            ['装备', '', 'jydiy_wumuyishu']];


            var str = '<span style="color: #FF0000">选择废除至多两个装备栏令【' + get.translation(trigger.player) + '】回复等量体力</span>';
            player.
            chooseButton(true, [1, 2], 'hidden', [str, [list, 'vcard'], 'hidden']).
            set('filterButton', function (button) {
              var card = { name: button.link[2] };
              var subtype = get.subtype(card);
              if (!player.hasEnabledSlot(subtype)) return false;
              return true;
            }).
            set('ai', function (button) {
              var card = { name: button.link[2] };
              if (!player.getEquip(card)) return 1;
              return -1;
            });
            'step 1';
            if (result.links?.length) {
              for (var i of result.links) {
                var card = { name: i[2] };
                player.disableEquip(get.subtype(card));
              }
              player.line(trigger.player, 'fire');
              trigger.player.recover(result.links.length);
              player.storage.qtpz_duanbi = true;
              player.storage.qtpz_yusi = trigger.player;
              player.awakenSkill('qtpz_duanbi');
            }
          },
          intro: { content: 'limited' }
        },
        qtpz_yusi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'phaseDrawBegin1' },
          forced: true,
          filter(event, player) {
            if (event.numFixed) return false;
            if (player.countDisabledSlot() < 1) return false;
            return player.storage.qtpz_yusi && player.storage.qtpz_yusi == event.player;
          },
          logTarget: 'player',
          content() {
            trigger.num += player.countDisabledSlot();
          }
        },
        qtpz_duwu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          //audioname:["sdxl_shendiao","sdxl_spyangguo"],
          audioname2: {
            //武将名:引用的技能配音
            sdxl_shendiao: 'sdxl_duwushendiao',
            sdxl_spyangguo: 'sdxl_duwushendiao'
          },
          trigger: { global: 'phaseJieshuBegin' },
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          logTarget: 'player',
          filter(event, player) {
            if (event.player == player) return false;
            var history = event.player.getHistory('useCard');
            for (var i = 0; i < history.length; i++) {
              if (history[i].isPhaseUsing(event.player) && history[i].card.name == 'sha') return false;
            }
            return true;
          },
          content() {
            'step 0';
            event.target = trigger.player;
            trigger.player.draw();
            'step 1';
            var card = result.cards[0];
            target.showCards(card, '督武');
            if (
            card &&
            game.hasPlayer(function (current) {
              return target.canUse(card, current);
            }) &&
            target.getCards('h').includes(card) &&
            card.name == 'sha')
            {
              target.chooseToUse({
                prompt: '是否使用' + get.translation(card) + '？',
                filterCard(cardx, player, evt) {
                  return cardx == _status.event.cardx && lib.filter.filterCard.apply(this, arguments);
                },
                cardx: card
              });
            } else {
              event.finish();
            }
          },
          ai: {
            threaten: 1
          }
        },
        qtpz_yaochen: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseJieshuBegin'
          },
          filter(event, player) {
            var cards = [];
            game.countPlayer2(function (current) {
              current.getHistory('useCard', function (evt) {
                if (evt.getParent('phaseUse').player == event.player && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) cards.addArray(evt.cards.filterInD('d'));
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
                if (evt.getParent('phaseUse').player == trigger.player && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) cards.addArray(evt.cards.filterInD('d'));
              });
            });
            player.
            chooseCardButton(get.prompt('qtpz_yaochen'), cards, 1, '选择一张因使用而进入弃牌堆的牌置于牌堆顶').
            set('filterButton', function (button) {
              return get.position(button.link) == 'd';
            }).
            set('ai', function (button) {
              var player = _status.event.player;
              var target = _status.event.targetx;
              var att = get.attitude(player, target);
              var judges = target.getCards('j');
              if (judges.length) {
                var judge = get.judge(judges[0]);
                if (ui.cardPile.childNodes.length) return (judge(button.link) - judge(ui.cardPile.firstChild)) * att;
                return judge(button.link) * att;
              } else {
                if (ui.cardPile.childNodes.length >= 2) return (target.getUseValue(button.link) - target.getUseValue(ui.cardPile.childNodes[1])) * att;
                return target.getUseValue(button.link) * att;
              }
            }).
            set('targetx', trigger.player.next);
            'step 1';
            if (result.links?.length) {
              result.links[0].fix();
              game.log(player, '将', result.links[0], '置于牌堆顶');
              player.$throw(result.links[0], 1000);
              ui.cardPile.insertBefore(result.links[0], ui.cardPile.firstChild);
            }
          }
        },
        qtpz_fuji: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          forced: true,
          content() {
            'step 0';
            event.cards = get.cards(1);
            player.showCards(event.cards, '扶乩');
            'step 1';
            var choice = '牌堆底';
            var judges = player.getCards('j');
            if (judges.length) {
              var judge = get.judge(judges[0]);
              if (ui.cardPile.childNodes.length) {
                if (judge(event.cards[0]) - judge(ui.cardPile.firstChild) > 0) choice = '牌堆顶';
              } else {
                if (judge(event.cards[0]) > 0) choice = '牌堆顶';
              }
            } else {
              if (ui.cardPile.childNodes.length >= 2) {
                if (player.getUseValue(event.cards[0]) - player.getUseValue(ui.cardPile.childNodes[1]) > 0) choice = '牌堆顶';
              } else {
                if (player.getUseValue(event.cards[0]) > 0) choice = '牌堆顶';
              }
            }
            player.
            chooseControl('牌堆顶', '牌堆底').
            set('dialog', ['扶乩', event.cards]).
            set('ai', function () {
              return _status.event.choice;
            }).
            set('choice', choice);
            'step 2';
            if (result.control == '牌堆顶') {
              ui.cardPile.insertBefore(event.cards[0], ui.cardPile.firstChild);
              game.log(player, '将', event.cards[0], '置于牌堆顶');
            } else {
              ui.cardPile.appendChild(event.cards[0]);
              game.log(player, '将', event.cards[0], '置于牌堆底');
            }
            //player.$throw(event.cards[0],1000);
            'step 3';
            var card = { name: event.cards[0].name };
            if (
            get.type(card) != 'equip' &&
            game.hasPlayer(function (current) {
              return player.countCards('h', function (xxx) {
                var cardxxx = { name: event.cards[0].name, cards: [xxx] };
                return player.canUse(cardxxx, current);
              });
            }))
            {
              lib.skill.qtpz_fuji_use.viewAs = card;
              var next = player.chooseToUse();
              if (next.isOnline()) {
                player.send(function (card) {
                  lib.skill.qtpz_fuji_use.viewAs = card;
                }, card);
              }
              next.set('openskilldialog', '扶乩:是否将一张手牌当' + get.translation(card) + '使用？');
              next.set('norestore', true);
              next.set('_backupevent', 'qtpz_fuji_use');
              next.set('custom', {
                add: {},
                replace: {
                  window() {}
                }
              });
              next.backup('qtpz_fuji_use');
              next.set('addCount', false); //不计入次数
            }
          },
          ai: {
            guanxing: true
          },
          subSkill: {
            use: {
              filterCard(card, player) {
                return get.itemtype(card) == 'card';
              },
              check(card) {
                return 6 - get.value(card);
              },
              log: false,
              selectCard: 1,
              popname: true,
              charlotte: true,
              fixed: true
            }
          }
        },
        qtpz_anming: {
          subSkill: {
            off: {
              mark: true,
              markimage: 'extension/金庸群侠传/image/icon/jyanming.jpg',
              intro: {
                content: '本轮已发动【安民】.'
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'equipEnd' },
          forced: true,
          filter(event, player) {
            if (player.hasSkill('qtpz_anming_off')) return false;
            return get.subtype(event.card) == 'equip1';
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('qtpz_anming'), [1, 2], function (card, player, target) {
              return trigger.player.inRange(target); ////get.distance(trigger.player,target,'attack')<=1;
            }).
            set('ai', function (target) {
              return get.attitude(player, target);
            });
            'step 1';
            if (result.targets?.length) {
              game.asyncDraw(result.targets);
              player.addTempSkill('qtpz_anming_off', 'roundStart');
            }
          }
        },
        qtpz_zangbao: {
          group: 'qtpz_zangbao1',
          init(player) {
            player.storage.qtpz_zangbao = [];
          },
          mark: true,
          markimage: 'extension/金庸群侠传/image/icon/jyzhangbao.jpg',
          intro: { content: 'cards' },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseBefore'
          },
          filter(event, player) {
            return game.hasPlayer(function (current) {
              return current.countCards('ej', function (cardx) {
                return get.color(cardx) == 'red';
              });
            });
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('qtpz_zangbao'), function (card, player, target) {
              return target.countCards('ej', function (cardx) {
                return get.color(cardx) == 'red';
              });
            }).
            set('ai', function (target) {
              return get.effect(
                target,
                {
                  name: 'loseCard_ai',
                  filterCard(card, player) {
                    return get.color(card) == 'red';
                  },
                  position: 'ej'
                },
                player,
                player
              );
            });
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
              event.set('forceDie', true);
              var list = [];
              for (var i = 0; i < 7; i++) {
                if (i >= ui.cardPile.childNodes.length) continue;
                list.push([i, '第' + get.translation(i + 1) + '张']);
              }
              var next = player.chooseButton(2, true, ['葬宝', '<div class="text center">选择一张红色牌置于牌堆任意前七张</div>', [list, 'tdnodes'], '<div class="text center">红色牌</div>', event.target.getCards('ej', (i) => get.color(i) == 'red')]);
              next.set('complexSelect', true);
              next.set('filterButton', function (button) {
                if (ui.selected.buttons.length && typeof button.link == typeof ui.selected.buttons[0].link) return false;
                return true;
              });
              next.set('ai', function (button) {
                var player = _status.event.player;
                if (typeof button.link == 'number') {
                  if (button.link == 1) return 5;
                  return 0.5;
                } else {
                  return lib.card.loseCard_ai.iCard(button.link, player, event.target);
                }
                return Math.random();
              }).set('forceDie', true);
            } else {
              event.finish();
            }
            'step 2';
            if (result.links?.length) {
              var links = result.links;
              if (typeof links[0] == 'number') links.reverse();
              var loseCard = links[0];
              var index = links[1];
              var next = target.lose(loseCard, ui.cardPile);
              next.set('forceDie', true);
              next.set('insert_index_card', ui.cardPile.childNodes[index]);
              next.set('insert_index', function (event) {
                return event.insert_index_card;
              });
              player.storage.qtpz_zangbao.add(loseCard);
              player.markSkill('qtpz_zangbao');
              game.broadcastAll(
                function (player, card) {
                  player.$throw(card, 1000, 'nobroadcast');
                },
                target,
                loseCard
              );
              game.log(player, '把', target, '一张', loseCard, '放在了牌堆里');
            } else event.finish();
            'step 3';
            game.updateRoundNumber();
          }
        },
        qtpz_zangbao_old: {
          group: 'qtpz_zangbao1',
          init(player) {
            player.storage.qtpz_zangbao = [];
          },
          mark: true,
          markimage: 'extension/金庸群侠传/image/icon/jyzhangbao.jpg',
          intro: {
            content: 'cards'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseBefore'
          },
          filter(event, player) {
            var numej = game.countPlayer(function (current) {
              if (current.countCards('ej')) {
                var ej = current.getCards('ej');
                for (var i = 0; i < ej.length; i++) {
                  if (get.color(ej[i]) == 'red') return true;
                }
                return false;
              }
            });
            if (numej > 0) return true;
            return false;
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('qtpz_zangbao'), function (card, player, target) {
              var ej = target.getCards('ej');
              for (var i = 0; i < ej.length; i++) {
                if (get.color(ej[i]) == 'red') return true;
              }
              return false;
            }).
            set('ai', function (target) {
              var att1 = get.attitude(player, target);
              var jj = false,
                ee = false;
              var e = target.getCards('e');
              var j = target.getCards('j');
              for (var i = 0; i < j.length; i++) {
                if (get.color(j[i]) == 'red' && jj == false) jj = true;
              }
              for (var i = 0; i < e.length; i++) {
                if (get.color(e[i]) == 'red' && ee == false) ee = true;
              }
              if (att1 > 0 && jj == true) return 1.1;
              if (att1 <= 0 && ee == true) return 1;
              return -1;
            });
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
              var skr = '选择一张红色牌置于牌堆任意前七张';
              player.
              choosePlayerCard(event.target, 1, 'ej', true).
              set('filterButton', function (button) {
                if (get.color(button.link) != 'red') return false;
                return true;
              }).
              set('ai', function (button) {
                var att1 = get.attitude(player, event.target);
                if (att1 <= 0) {
                  if (get.position(button.link) == 'e') return 1;
                  return 0.01;
                }
                if (att1 > 0) {
                  if (get.position(button.link) == 'j') return 1;
                  return 0.01;
                }
                return -1;
              });
            } else {
              event.finish();
            }
            'step 2';
            if (result.links?.length) {
              event.card = result.links[0];
              target.lose(result.links[0], ui.special);
              player.storage.qtpz_zangbao.add(event.card);
              player.markSkill('qtpz_zangbao');
            } else {
              event.finish();
            }
            'step 3';
            var controls = ['一', '二', '三', '四', '五', '六', '七'];
            var str = '将' + get.translation(card) + '置于牌堆第X张(X为你选择的数字)';
            var dialog = ui.create.dialog(str, 'hidden');
            dialog.add(event.card);
            player.chooseControl(controls, dialog).ai = function () {
              return '二';
            };
            'step 4';
            var num;
            var map = { 一: 0, 二: 1, 三: 2, 四: 3, 五: 4, 六: 5, 七: 6 };
            num = map[result.control];
            game.broadcastAll(
              function (player, card) {
                player.$throw(card, 1000, 'nobroadcast');
              },
              target,
              card
            );
            var num2 = ui.cardPile.childElementCount;
            var top = true;
            card.fix();
            if (num < num2 - 1) {
              ui.cardPile.insertBefore(card, ui.cardPile.childNodes[num]);
            } else {
              top = false;
              ui.cardPile.appendChild(card);
            }
            game.updateRoundNumber();
            if (top) {
              game.log(player, '把', card, '放在了牌堆第' + result.control + '张');
            } else {
              game.log(player, '把', card, '放在了牌堆底');
            }
          }
        },
        qtpz_zangbao1: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseDrawEnd'
          },
          check(event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          forced: true,
          filter(event, player) {
            if (!event.cards || !event.cards.length) return false;
            if (Array.isArray(event.cards))
            for (var i of event.cards) {
              if (player.storage.qtpz_zangbao.includes(i)) {
                return true;
              }
            }
            return false;
          },
          content() {
            'step 0';
            player.line(trigger.player, 'green');
            'step 1';
            if (Array.isArray(trigger.cards))
            for (var i of trigger.cards) {
              if (player.storage.qtpz_zangbao.includes(i)) {
                player.storage.qtpz_zangbao.remove(i);
                player.markSkill('qtpz_zangbao');
                trigger.player.showCards(i, '宝藏');
                var suit = i.suit;
                if (suit == 'heart') {
                  if (trigger.player.isDamaged()) trigger.player.recover();
                } else if (suit == 'diamond') {
                  trigger.player.draw(2);
                }
              }
            }
          }
        },
        qtpz_shouxian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: ['qtpz_shouxian_remove'],
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
                player.removeSkill('qtpz_shouxian');
              }
            }
          },
          trigger: {
            global: ['phaseJieshuBegin']
          },
          filter(event, player) {
            if (event.player == player) return false;
            if (!player.hasZhuSkill('qtpz_shouxian')) return false;
            var group = 'shu';
            if (lib.jy_changeSkill) group = 'jy_qing';
            if (group != event.player.group) return false;
            return true;
          },
          forced: true,
          zhuSkill: true,
          content() {
            'step 0';
            trigger.player.chooseBool('是否展示牌堆的两张并将其中的装备牌置于' + get.translation(player) + '装备区？将其余的牌置于牌堆顶或弃置之').set('ai', function () {
              return get.attitude(trigger.player, player) > 0;
            });
            'step 1';
            if (result.bool) {
              var carr = get.cards(2);
              event.cards = carr;
              trigger.player.showCards(event.cards, '守险');
            } else {
              event.finish();
            }
            'step 2';
            event.equip = [];
            if (Array.isArray(event.cards))
            for (var i of event.cards) {
              if (get.type(i) == 'equip' && player.hasEmptySlot(get.subtype(i))) {
                event.equip.push(i);
                //player.equip(i);
              }
            }
            'step 3';
            for (var i = 0; i < event.equip.length; i++) {
              player.equip(event.equip[i]);
              event.cards.remove(event.equip[i]);
            }
            'step 4';
            if (event.cards.length) trigger.player.chooseCardButton(event.cards, '将顺序将牌置于牌堆顶(先选择的在上)或置于弃牌堆', event.cards.length);
            'step 5';
            if (result.links?.length) {
              var cards = result.links.slice(0);
              while (cards.length) {
                var card = cards.pop();
                ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
              }
              game.log(trigger.player, '将', cards, '置于牌堆顶');
            } else {
              game.cardsDiscard(event.cards);
              game.log(trigger.player, '将', event.cards, '置于弃牌堆');
            }
          }
        },
        qtpz_dangkou: {
          trigger: { player: 'useCardAfter' },
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            //if(event.card.name=='wuxie') return false;
            if (get.type(event.card) != 'trick') return false;
            if (!event.targets || !event.targets.length) return false;
            if (event.targets && event.targets.includes(player) && event.targets.length == 1) return false; //排除自己,否则开无中、五谷也会提示对自己荡寇----大熊小猫
            if (
            game.hasPlayer2(function (current) {
              return current.getHistory('damage', function (card) {
                return card.card == event.card;
              }).length;
            }))

            return false;
            return game.hasPlayer(function (current) {
              return event.targets.includes(current) && current.countDiscardableCards(player, 'he') > 0;
            });
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget([1, Infinity], get.prompt('qtpz_dangkou'), function (card, player, target) {
              return _status.event.sourcex.includes(target) && target.countDiscardableCards(player, 'he') > 0;
            }).
            set('ai', function (target) {
              var player = _status.event.player;
              return get.effect(
                target,
                {
                  name: 'guohe_copy2'
                },
                player,
                player
              );
            }).
            set('sourcex', trigger.targets);
            'step 1';
            if (result.targets?.length) {
              event.targets = result.targets;
            } else {
              player.getStat('triggerSkill').qtpz_dangkou--;
              event.finish();
            }
            'step 2';
            if (event.targets.length) {
              var target = event.targets.shift();
              if (target.countDiscardableCards(player, 'he')) {
                player.line(target);
                player.discardPlayerCard(target, 'he', true);
              }
              event.redo();
            }
          }
        },
        qtpz_jiangmen: {
          group: ['qtpz_jiangmen_remove'],
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
                player.removeSkill('qtpz_jiangmen');
              }
            }
          },
          trigger: { global: 'phaseUseBegin' },
          audio: 'ext:金庸群侠传/peiyin:2',
          zhuSkill: true,
          filter(event, player) {
            if (!player.hasZhuSkill('qtpz_jiangmen')) return false;
            var group = 'wu';
            if (lib.jy_changeSkill) group = 'jy_ming';
            if (group != event.player.group) return false;
            if (event.player == player) return false;
            var num1 = event.player.countCards('h', { type: 'trick' });
            var num2 = event.player.countCards('h', { type: 'delay' });
            if (num1 + num2 == 0) return false;
            return true;
          },
          forced: true,
          content() {
            'step 0';
            trigger.player.
            chooseCard(1, 'h', '是否选择一张锦囊牌交给' + get.translation(player) + '?你摸一张牌.', function (card, player) {
              return get.type(card, 'trick') == 'trick';
            }).
            set('ai', function (card) {
              var att1 = get.attitude(trigger.player, player);
              if (att1 > 0) {
                return 1;
              }
              return 4 - get.value(card);
            });
            'step 1';
            if (result.bool) {
              trigger.player.line(player, 'green');
              trigger.player.say(['愿助盟主一臂之力!', '少侠如此英才,不可再推脱!'].randomGet());
              //player.gain(result.cards[0],trigger.player,'give');
              trigger.player.give(result.cards[0], player, true);
              trigger.player.draw();
            }
          }
        },
        //破阵突破版(霸天)
        qtpz_pozhen: {
          trigger: { source: 'damageSource' },
          //direct:true,
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return event.card && event.card.name == 'sha' && event.notLink();
          },
          content() {
            var card = get.cardPile(function (card) {
              return card.name == 'guohe';
            });
            if (card) {
              player.gain(card, 'log', 'gain2');
            } else {
              player.chat('没有符合的牌了吗');
              game.log('但是牌堆里已经没有', { name: 'guohe' }, '了!');
            }
          }
        },
        //界谢烟客20220430-霸天
        qtpz_lingtie: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          forced: true,
          intro: {
            mark(dialog, storage2, player) {
              var storage = player.getStorage('qtpz_lingtie');
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
            var list = player.getStorage('qtpz_lingtie');
            if (!list.length) return true;
            return false;
          },
          content() {
            'step 0';
            var inpile = get.inpile(function (name) {
              var card = { name: name };
              var info = get.info(card);
              if (!info.enable) return false;
              var type = info.type;
              return type && (type == 'basic' || type == 'trick');
            });
            var text = '令铁:请选择记录的牌名';
            player.chooseVCardButton(true, inpile, text, 3).set('ai', function (button) {
              return _status.event.player.getUseValue({ name: button.link[2] }, false);
            });
            'step 1';
            if (result.bool) {
              player.markAuto(
                'qtpz_lingtie',
                function (links) {
                  var list = [];
                  for (var i of links) {
                    list.add(i[2]);
                  }
                  return list;
                }(result.links)
              );
            }
          }
        },
        qtpz_sunuo: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseUseBegin'
          },
          filter(event, player) {
            if (event.player == player) return false;
            var list = player.getStorage('qtpz_lingtie');
            if (!list.length) return false;
            return event.player.countCards('h', function (card) {
              for (var i of list) {
                if (event.player.hasUseTarget({ name: i, cards: [card] }, false)) return true;
              }
              return false;
            });
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseVCardButton(player.getStorage('qtpz_lingtie').slice(0), get.prompt2('qtpz_sunuo', trigger.player)).
            set('ai', function (button) {
              var att = get.attitude(_status.event.player, _status.event.targetx);
              var card = { name: button.link[2] };
              return _status.event.targetx.getUseValue(card, false) * (att > 0 ? 1 : -1);
            }).
            set('targetx', trigger.player).
            set('filterButton', function (button) {
              return _status.event.targetx.countCards('h', function (card) {
                if (_status.event.targetx.hasUseTarget({ name: button.link[2], cards: [card] }, false)) return true;
                return false;
              });
            });
            'step 1';
            if (result.links?.length) {
              event.namex = result.links[0][2];
              player.unmarkAuto('qtpz_lingtie', [event.namex]);
              trigger.player.
              chooseCard('h', true, '将一张牌当做【' + get.translation(event.namex) + '】使用', function (card) {
                return _status.event.player.hasUseTarget({ name: event.namex, cards: [card] }, false);
              }).
              set('ai', function (card) {
                return 8 - get.value(card);
              });
            } else event.finish();
            'step 2';
            if (result.cards?.length) {
              trigger.player.chooseUseTarget({ name: event.namex }, result.cards, true, false, 'nodistance').viewAs = true;
              player.draw();
            }
          }
        },
        qtpz_jieyou: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            target: 'useCardToTarget'
          },
          forced: true,
          _priority: 15,
          check(event, player) {
            return get.effect(event.target, event.card, event.player, player) < 0;
          },
          filter(event, player) {
            var list = player.getStorage('qtpz_lingtie');
            if (list.length) return false;
            if (get.type(event.card) != 'trick') return false;
            if (get.color(event.card) != 'black') return false;
            return player != event.player;
          },
          content() {
            trigger.parent.targets.remove(player);
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                var list = target.getStorage('qtpz_lingtie');
                if (list.length) return;
                if (player == target) return;
                if (get.type(card) != 'trick') return;
                if (get.color(card) != 'black') return;
                return 'zeroplayertarget';
              }
            }
          }
        },
        //旧谢烟客
        qtpz_tieling_old: {
          subSkill: {
            on: {
              mark: true,
              markimage: 'extension/金庸群侠传/image/icon/jyxuantieling.jpg',
              init(player) {
                player.storage.qtpz_tieling_old_on = 1;
                player.markSkill('qtpz_tieling_old_on');
              },
              intro: {
                content: '你拥有<玄铁令>,可以请谢烟客前辈完成你的一个心愿.'
              }
            }
          },
          init(player) {
            player.storage.qtpz_tieling_old = false;
            player.storage.qtpz_tieling_oldnum = 0;
          },
          trigger: {
            global: 'phaseUseBegin'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (event.player.hasSkill('qtpz_tieling_old_on')) return false;
            if (player == event.player) return false;
            return !player.storage.qtpz_tieling_old;
          },
          forced: true,
          content() {
            'step 0';
            trigger.player.chooseBool('是否令' + get.translation(player) + '回复一点体力或摸两张牌,你获得玄铁令').set('ai', function () {
              if (get.attitude(trigger.player, player) > 0) return true;
              return false;
            });
            'step 1';
            if (result.bool) {
              trigger.player.line(player, 'green');
              player.storage.qtpz_tieling_oldnum++;
              if (!trigger.player.hasSkill('qtpz_tieling_old_on')) {
                trigger.player.addSkill('qtpz_tieling_old_on');
              } else {
                trigger.player.storage.qtpz_tieling_old_on++;
                trigger.player.markSkill('qtpz_tieling_old_on');
              }
              if (player.storage.qtpz_tieling_oldnum >= 3) {
                player.awakenSkill('qtpz_tieling_old');
                player.storage.qtpz_tieling_old = true;
                player.unmarkSkill('qtpz_tieling_old');
              }
            } else {
              event.finish();
            }
            'step 2';
            player.chooseDrawRecover(true, 2, 1);
          }
        },
        qtpz_jieyou_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { target: 'useCardToBefore' },
          forced: true,
          check(event, player) {
            return get.effect(event.target, event.card, event.player, player) < 0;
          },
          filter(event, player) {
            return event.player.hasSkill('qtpz_tieling_old_on') && get.color(event.card) == 'black';
          },
          content() {
            trigger.cancel();
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                if (!player.hasSkill('qtpz_tieling_old_on')) return;
                if (get.color(card) == 'black') return 'zeroplayertarget';
              }
            }
          }
        },
        qtpz_sunuo_old1: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filterTarget(card, player, current) {
            if (!current.hasSkill('qtpz_sunuo_old') || current == player) return false;
            if (!current.hasSkill('qtpz_sunuo_old_yi') && current.countGainableCards(player, 'e') > 0) return true;
            ///////////////////////////////////
            if (!current.hasSkill('qtpz_sunuo_old_er')) {
              var list = get.inpile('trick', 'trick');
              for (var i = 0; i < list.length; i++) {
                if (
                game.hasPlayer(function (current2) {
                  return current.countCards('h', function (card) {
                    var cardxx = { name: list[i], cards: [card] };
                    return current.canUse(cardxx, current2);
                  });
                }))
                {
                  return true;
                }
              }
            }
            ////////////////////////////////
            if (!current.hasSkill('qtpz_sunuo_old_san') && game.countPlayer() >= 3) return true;
            return false;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filter(event, player) {
            //if(player.hasSkill('qtpz_sunuo_old')) return false;
            if (!player.hasSkill('qtpz_tieling_old_on')) return false;
            if (player.storage.qtpz_tieling_old_on < 1) return false;
            return game.hasPlayer(function (current) {
              if (!current.hasSkill('qtpz_sunuo_old') || current == player) return false;
              if (!current.hasSkill('qtpz_sunuo_old_yi') && current.countGainableCards(player, 'e') > 0) return true;
              ///////////////////////////////////
              if (!current.hasSkill('qtpz_sunuo_old_er')) {
                var list = get.inpile('trick', 'trick');
                for (var i = 0; i < list.length; i++) {
                  if (
                  game.hasPlayer(function (current2) {
                    return current.countCards('h', function (card) {
                      var cardxx = { name: list[i], cards: [card] };
                      return current.canUse(cardxx, current2);
                    });
                  }))
                  {
                    return true;
                  }
                }
              }
              ////////////////////////////////
              if (!current.hasSkill('qtpz_sunuo_old_san') && game.countPlayer() >= 3) return true;
              return false;
            });
          },
          content() {
            'step 0';
            event.target = targets[0];
            'step 1';
            event.videoId = lib.status.videoId++;
            var func = function (target, id, bool1, bool2, bool3) {
              var list = ['获得' + get.translation(target) + '装备区里的一张牌', '令' + get.translation(target) + '将一张手牌当你声明的牌使用', '令' + get.translation(target) + '对你选择的一名其他角色造成一点伤害.'];
              var choiceList = ui.create.dialog('【夙诺】:请选择一项', 'forcebutton');
              choiceList.videoId = id;
              for (var i = 0; i < list.length; i++) {
                var str = '<div class="popup text" style="width:calc(100%-10px);display:inline-block">';
                if (i == 0 && !bool1) str += '<div style="opacity:0.5">';
                if (i == 1 && !bool2) str += '<div style="opacity:0.5">';
                if (i == 2 && !bool3) str += '<div style="opacity:0.5">';
                str += list[i];
                if (i == 0 && !bool1) str += '</div>';
                if (i == 1 && !bool2) str += '</div>';
                if (i == 2 && !bool3) str += '</div>';
                str += '</div>';
                var next = choiceList.add(str);
                next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                next.firstChild.link = i;
                Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                choiceList.buttons.add(next.firstChild);
              }
              return choiceList;
            };
            var bool1 = function () {
              return !target.hasSkill('qtpz_sunuo_old_yi') && target.countGainableCards(player, 'e') > 0;
            }();
            var bool2 = function () {
              if (!target.hasSkill('qtpz_sunuo_old_er')) {
                var list = get.inpile('trick', 'trick');
                for (var i = 0; i < list.length; i++) {
                  if (
                  game.hasPlayer(function (current) {
                    return target.countCards('h', function (card) {
                      var cardxx = { name: list[i], cards: [card] };
                      return target.canUse(cardxx, current);
                    });
                  }))
                  {
                    return true;
                  }
                }
                return false;
              }
              return false;
            }();
            var bool3 = function () {
              return !target.hasSkill('qtpz_sunuo_old_san') && game.countPlayer() >= 3;
            }();
            if (player.isOnline2()) {
              player.send(func, target, event.videoId, bool1, bool2, bool3);
            }
            event.dialog = func(target, event.videoId, bool1, bool2, bool3);
            if (player != game.me || _status.auto) {
              event.dialog.style.display = 'none';
            }
            var next = player.chooseButton();
            next.set('dialog', event.videoId);
            next.set('forced', true);
            next.set('selectButton', [1, 1]);
            next.set('filterButton', function (button) {
              var target = _status.event.sourcex;
              if (button.link == 0) {
                return _status.event.bool1;
              }
              if (button.link == 1) {
                return _status.event.bool2;
              }
              if (button.link == 2) {
                return _status.event.bool3;
              }
              return false;
            });
            next.set('bool1', bool1);
            next.set('bool2', bool2);
            next.set('bool3', bool3);
            //next.set('sourcex',target);
            next.set('ai', function (button) {
              return 0.5 + Math.random();
            });
            'step 2';
            if (player.isOnline2()) {
              player.send('closeDialog', event.videoId);
            }
            event.dialog.close();
            game.log(player, '选择了', '#g【夙诺】', '的', '#y选项' + get.cnNumber(result.links[0] + 1, true));
            event.xuanxiang = result.links[0];
            player.storage.qtpz_tieling_old_on--;
            player.markSkill('qtpz_tieling_old_on');
            if (event.xuanxiang == 0) {
              target.addSkill('qtpz_sunuo_old_yi');
              player.gainPlayerCard(target, true, 'e');
              event.finish();
              return;
            }
            if (event.xuanxiang == 1) {
              target.addSkill('qtpz_sunuo_old_er');
              event.goto(3);
            }
            if (event.xuanxiang == 2) {
              target.addSkill('qtpz_sunuo_old_san');
              event.goto(6);
            }
            'step 3';
            var list2 = [];
            var list = get.inpile('trick', 'trick');
            for (var i = 0; i < list.length; i++) {
              if (
              game.hasPlayer(function (current) {
                return target.countCards('h', function (card) {
                  var cardxx = { name: list[i], cards: [card] };
                  return target.canUse(cardxx, current);
                });
              }))
              {
                list2.push(list[i]);
              }
            }
            for (var i = 0; i < list2.length; i++) {
              list2[i] = ['锦囊', '', list2[i]];
            }
            player.
            chooseButton(true, ['请声明一张可用的普通锦囊', [list2, 'vcard']]).
            set('ai', function (button) {
              var att = get.attitude(_status.event.player, _status.event.targetx);
              var card = { name: button.link[2] };
              return _status.event.targetx.getUseValue(card) * att;
            }).
            set('targetx', target);
            'step 4';
            event.cardx = { name: result.links[0][2] };
            target.
            chooseCard('将一张手牌当' + get.translation(event.cardx) + '使用.', 'h', true, function (card) {
              return game.hasPlayer(function (current) {
                return _status.event.player.canUse({ name: result.links[0][2], cards: [card] }, current);
              });
            }).
            set('ai', function (card) {
              var wugu = { name: result.links[0][2], cards: ui.selected.cards.concat([card]) };
              return _status.event.player.getUseValue(wugu);
            });
            'step 5';
            if (result.cards?.length) {
              target.chooseUseTarget(event.cardx, result.cards, true, false).viewAs = true;
            }
            event.finish();
            'step 6';
            player.
            chooseTarget('选择一名其他角色,令' + get.translation(target) + '对其造成一点伤害', true, function (card, player, target) {
              return target != player && target != event.target;
            }).
            set('ai', function (target) {
              return get.damageEffect(target, _status.event.source, player);
            }).
            set('source', target);
            'step 7';
            if (result.targets?.length) {
              target.line(result.targets[0], 'green');
              result.targets[0].damage(target);
            }
          },
          ai: {
            order: 1,
            result: {
              player(player, target) {
                return 2;
              }
            }
          }
        },
        qtpz_sunuo_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          subSkill: {
            yi: {
              mark: true,
              marktext2: '①',
              markimage: 'extension/金庸群侠传/image/icon/jysunuo1.jpg',
              intro: { content: '已帮他人实现第一个愿望.' }
            },
            er: {
              mark: true,
              marktext2: '②',
              markimage: 'extension/金庸群侠传/image/icon/jysunuo2.jpg',
              intro: { content: '已帮他人实现第二个愿望.' }
            },
            san: {
              mark: true,
              marktext2: '③',
              markimage: 'extension/金庸群侠传/image/icon/jysunuo3.jpg',
              intro: { content: '已帮他人实现第三个愿望.' }
            }
          },
          global: 'qtpz_sunuo_old1'
        },
        //田归农
        qtpz_tudu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          marktext2: '毒',
          markimage: 'extension/金庸群侠传/image/icon/jychangbaotu.jpg',
          intro: {
            content: 'expansion',
            markcount: 'expansion'
          },
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          },
          trigger: { global: 'useCard1' },
          filter(event, player) {
            if (event.player == player) return false;
            if (event.card.name == 'sha' && !event.card.nature) return true;
            return false;
          },
          check(event, player) {
            var eff = 0;
            for (var i = 0; i < event.targets.length; i++) {
              var target = event.targets[i];
              var eff1 = get.damageEffect(target, player, player);
              var eff2 = get.damageEffect(target, player, player, 'jy_du');
              eff += eff2;
              eff -= eff1;
            }
            return eff >= 0;
          },
          content() {
            trigger.card.nature = 'jy_du';
            trigger.card.qtpz_tudu = player;
            if (get.itemtype(trigger.card) == 'card') {
              var next = game.createEvent('qtpz_tudu_clear');
              next.card = trigger.card;
              event.next.remove(next);
              trigger.after.push(next);
              next.setContent(function () {
                delete card.nature;
                delete card.qtpz_tudu;
              });
            }
          },
          group: ['qtpz_tudu_damage'],
          subSkill: {
            damage: {
              trigger: {
                global: 'damageEnd'
              },
              filter(event, player) {
                return event.card && event.card.qtpz_tudu && event.card.qtpz_tudu == player;
              },
              audio: 'qtpz_tudu',
              forced: true,
              content() {
                'step 0';
                player.draw();
                'step 1';
                if (player.countCards('h')) {
                  player.chooseCard('将一张手牌置于侠客牌上作为<残图>', true);
                } else {
                  event.finish();
                }
                'step 2';
                if (result.cards?.length) {
                  player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('qtpz_tudu');
                }
              }
            }
          }
        },
        qtpz_xingxun: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          init(player) {
            player.storage.qtpz_xingxun = false;
          },
          filter(event, player) {
            if (!player.hasSkill('qtpz_tudu')) return false;
            if (player.storage.qtpz_xingxun) return false;
            var cards = player.getExpansions('qtpz_tudu');
            return cards.length;
          },
          content() {
            'step 0';
            event.forceDie = true;
            player.storage.qtpz_xingxun = true;
            player.awakenSkill('qtpz_xingxun');
            'step 1';
            var cards = player.getExpansions('qtpz_tudu');
            player.showCards(cards, '<img style=width:150px height:38px src=extension/金庸群侠传/image/button/jy_button_chuangwangbaozang.jpg><br>残图');
            'step 2';
            event.targets = game.filterPlayer().sortBySeat(player);
            event.targets.remove(player);
            'step 3';
            if (targets.length) {
              var target = targets.shift();
              event.target = target;
              if (!target.isIn()) {
                event.redo();
                return;
              }
              player.line(target);
              target.addTempClass('target');
            } else {
              event.finish();
            }
            'step 4';
            if (player.isIn()) {
              var next = target.chooseCard(1, 'h', '是否选择一张手牌当<残图>置于' + get.translation(player) + '侠客牌上?,不能选择<图>已有的花色,否则你受到' + get.translation(player) + '的两点伤害.', function (card, player) {
                var source = _status.event.source;
                var cards = source.getExpansions('qtpz_tudu');
                var suit = card.suit;
                if (Array.isArray(cards))
                for (var i of cards) {
                  if (i.suit == suit) return false;
                }
                return true;
              });
              next.set('source', player);
              next.set('ai', function (card) {
                return 30 - get.value(card);
              });
            } else {
              event._result = { bool: false };
            }
            'step 5';
            if (result.cards?.length) {
              player.addToExpansion(result.cards[0], target, 'give').gaintag.add('qtpz_tudu');
              target.say(['便是给你,又何妨？', '好汉不吃眼前亏.', '我愿将藏宝图奉上.'].randomGet());
            } else {
              target.say(['我没有你要的东西!', '田归农,你不要欺人太甚!', '想让我屈服于你,白日做梦!'].randomGet());
              target.damage(2, player);
            }
            event.goto(3);
          },
          ai: {
            order: 10,
            result: {
              player(player) {
                return 1;
              }
            }
          }
        },
        qtpz_xuncai: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filter(event, player) {
            if (!player.hasSkill('qtpz_tudu')) return false;
            var cards = player.getExpansions('qtpz_tudu');
            if (cards.length < 4) return false;
            var suit = [];
            if (Array.isArray(cards))
            for (var i of cards) {
              var suits = i.suit;
              suit.add(suits);
            }
            return suit.length >= 4;
          },
          content() {
            'step 0';
            var cards = get.cards(7);
            event.cards = cards;
            game.cardsGotoOrdering(event.cards);
            player.showCards(cards, '<img style=width:150px height:38px src=extension/金庸群侠传/image/button/jy_button_chuangwangbaozang.jpg><br>徇财');
            event.objList = {
              heart: [],
              diamond: [],
              club: [],
              spade: []
            };
            for (var i of cards) {
              var suit = i.suit;
              event.objList[suit].add(i);
            }
            'step 1';
            var objList = event.objList;
            var list = [];
            for (var i in objList) {
              if (objList[i].length) {
                list.push([i, get.translation(objList[i])]);
              }
            }
            var next = player.chooseButton(['<img style=width:150px height:38px src=extension/金庸群侠传/image/button/jy_button_yubifeng.jpg><br>请选择一种花色,你获得展示的7张牌中与此花色相同的牌', [list, 'textbutton']]);
            next.set('forced', true);
            next.set('selectButton', [1, 1]);
            next.set('objList', objList);
            next.set('ai', function (button) {
              var player = _status.event.player;
              var objList = _status.event.objList;
              return get.value(objList[button.link], player, 'raw');
            });
            'step 2';
            if (result.links?.length) {
              var suit = result.links[0];
              game.log(player, '选择了', suit);
              player.popup(suit);
              player.gain(event.objList[suit], 'gain2', 'log');
            }
            'step 3';
            var cards = player.getExpansions('qtpz_tudu');
            if (cards.length) {
              player.showCards(cards, '残图');
              player.loseToDiscardpile(cards);
            }
          },
          ai: {
            basic: {
              order: 1
            },
            result: {
              player(player) {
                if (player.countCards('h') >= player.hp) return -1;
                return 1;
              }
            }
          }
        },
        qtpz_daogao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          global: 'qtpz_daogao1',
          trigger: {
            global: 'gameStart',
            player: 'enterGame'
          },
          forced: true,
          content() {
            var cards = get.cards(7);
            game.cardsGotoSpecial(cards);
            player.addToExpansion(cards, 'gain2', 'log').gaintag.add('qtpz_daogao');
          },
          mark: true,
          marktext2: '祷',
          markimage: 'extension/金庸群侠传/image/icon/jydaogao.jpg',
          intro: {
            content: 'expansion',
            markcount: 'expansion'
          },
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          }
        },
        qtpz_daogao1: {
          enable: 'phaseUse',
          usable: 1,
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return (
              player.countCards('h') &&
              game.hasPlayer(function (current) {
                var cards = current.getExpansions('qtpz_daogao');
                return cards.length;
              }));

          },
          prompt() {
            var player = _status.event.player;
            var list = game.filterPlayer(function (current) {
              var cards = current.getExpansions('qtpz_daogao');
              return cards.length;
            });
            var str = '将一张手牌替换' + get.translation(list);
            if (list.length > 1) str += '其中的一人';
            str += '侠客牌上的"贺兰石"';
            return str;
          },
          content() {
            'step 0';
            var targets = game.filterPlayer(function (current) {
              var cards = current.getExpansions('qtpz_daogao');
              return cards.length;
            });
            if (targets.length == 1) {
              event.target = targets[0];
              event.goto(2);
            } else if (targets.length) {
              player.
              chooseTarget(true, '选择【祷告】的目标', function (card, player, target) {
                return _status.event.list.includes(target);
              }).
              set('list', targets).
              set('ai', function (target) {
                var player = _status.event.player;
                return player.getCards('h', function (card) {
                  var cards = target.getExpansions('qtpz_daogao');
                  for (var card1 of cards) {
                    var daogaoNumber = [];
                    for (var card2 of cards) {
                      var number = card2.number;
                      if (card1 != card2) daogaoNumber.add(number);
                    }
                    var number2 = card.number;
                    if (!daogaoNumber.includes(number2)) {
                      var value1 = get.value(card, player);
                      var value2 = get.value(card1, player);
                      return value2 - value1 > 0;
                    }
                    return false;
                  }
                  return false;
                }).length;
              });
            } else {
              event.finish();
            }
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
            } else {
              event.finish();
            }
            'step 2';
            if (target) {
              var hs = player.getCards('h');
              if (hs.length) {
                var str = '【祷告】';
                var daogao = target.getExpansions('qtpz_daogao');
                var dialog = ui.create.dialog(str, 'hidden');
                dialog.addText('贺兰石');
                dialog.add(daogao);
                //dialog.addSmall(daogao);
                dialog.addText('你的的手牌');
                dialog.add(player.getCards('h'));
                //dialog.addSmall(player.getCards('h'));
                player.
                chooseButton(dialog, 2, true).
                set('filterButton', function (button) {
                  var player = _status.event.player;
                  var playerCard = player.getCards('h');
                  if (ui.selected.buttons.length) {
                    var selected = ui.selected.buttons[0].link;
                    if (playerCard.includes(button.link) && playerCard.includes(selected)) return false;
                    if (!playerCard.includes(button.link) && !playerCard.includes(selected)) return false;
                  }
                  return true;
                }).
                set('ai', function (button) {
                  var player = _status.event.player;
                  var playerCard = player.getCards('h');
                  var daogao = _status.event.daogao;
                  var value = get.value(button.link, player);
                  var daogaoNumber = [];
                  var jiaohuan = [];
                  if (!ui.selected.buttons.length) {
                    if (daogao.includes(button.link)) {
                      daogaoNumber = [];
                      jiaohuan = [];
                      for (var card of daogao) {
                        var number = card.number;
                        if (card != button.link) daogaoNumber.add(number);
                      }
                      for (var card2 of playerCard) {
                        var number2 = card2.number;
                        if (!daogaoNumber.includes(number2)) jiaohuan.add(card2);
                      }
                      if (jiaohuan.length > 1) {
                        jiaohuan.sort(function (a, b) {
                          var value1 = get.value(a, player);
                          var value2 = get.value(b, player);
                          return value1 - value2;
                        });
                        return value - get.value(jiaohuan[0], player);
                      } else if (jiaohuan.length == 1) {
                        return value - get.value(jiaohuan[0], player);
                      } else {
                        return -1;
                      }
                    } else {
                      return -1;
                    }
                  } else {
                    var selected = ui.selected.buttons[0].link;
                    if (daogao.includes(selected) && playerCard.includes(button.link)) {
                      daogaoNumber = [];
                      for (var card of daogao) {
                        var number = card.number;
                        if (card != selected) daogaoNumber.add(number);
                      }
                      var number2 = button.link.number;
                      if (!daogaoNumber.includes(number2)) return 11 - value;
                      return -1;
                    } else {
                      return -1;
                    }
                  }
                }).
                set('daogao', daogao).
                set('complexSelect', true);
              } else {
                event.finish();
              }
            } else {
              event.finish();
            }
            'step 3';
            if (result.bool) {
              var daogao, playerCard;
              var links = result.links;
              if (player.getCards('h').includes(links[0])) {
                playerCard = links[0];
                daogao = links[1];
              } else {
                playerCard = links[1];
                daogao = links[0];
              }
              ////////////////////////////////////////////////////////
              //target.storage.qtpz_daogao.remove(daogao);
              var daogaoNumber = [];
              var Expansions = target.getExpansions('qtpz_daogao');
              Expansions.remove(daogao);
              for (var card of Expansions) {
                var number = card.number;
                daogaoNumber.add(number);
              }
              event.loseBool = daogaoNumber.includes(playerCard.number);
              target.addToExpansion(playerCard, player, 'give', 'log').gaintag.add('qtpz_daogao');
              player.gain(daogao, target, 'give');
            } else {
              event.finish();
            }
            'step 6';
            if (event.loseBool) {
              target.say('所求非善,何必祷神？');
              if (
              player.countCards('he', function (card) {
                return lib.filter.cardDiscardable(card, player, 'qtpz_daogao1');
              }))

              player.chooseToDiscard('he', true);
            } else {
              target.say('愿真主赐福与你!');
              player.draw();
            }
          },
          ai: {
            order: 12,
            result: {
              player(player, target) {
                var bool = game.hasPlayer(function (current) {
                  var cards = current.getExpansions('qtpz_daogao');
                  if (cards.length) {
                    return player.getCards('h', function (card) {
                      for (var card1 of cards) {
                        var daogaoNumber = [];
                        for (var card2 of cards) {
                          var number = card2.number;
                          if (card1 != card2) daogaoNumber.add(number);
                        }
                        var number2 = card.number;
                        if (!daogaoNumber.includes(number2)) {
                          var value1 = get.value(card, player);
                          var value2 = get.value(card1, player);
                          return value2 - value1 > 0;
                        }
                        return false;
                      }
                      return false;
                    }).length;
                  }
                });
                if (bool) {
                  return 1;
                }
                return 0;
              }
            }
          }
        },
        qtpz_shenyu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseUseBegin'
          },
          filter(event, player) {
            if (!player.hasSkill('qtpz_daogao')) return false;
            var daogao = player.getExpansions('qtpz_daogao');
            if (daogao.length < 1) return false;
            var number = [];
            for (var i = 0; i < daogao.length; i++) {
              var numberss = daogao[i].number;
              if (number.includes(numberss)) {
                return false;
              } else {
                number.push(numberss);
              }
            }
            for (var i = 0; i < daogao.length; i++) {
              var suit = daogao[i].suit;
              if (suit == 'heart') {
                return true;
              }
            }
            return false;
          },
          content() {
            'step 0';
            var gaincard = [];
            var daogao = player.getExpansions('qtpz_daogao');
            for (var i = 0; i < daogao.length; i++) {
              var suit = daogao[i].suit;
              if (suit == 'heart') {
                gaincard.push(daogao[i]);
              }
            }
            if (gaincard.length) player.gain(gaincard, 'gain2', 'fromStorage');
            'step 1';
            var num1 = 7 - player.getExpansions('qtpz_daogao').length;
            if (num1 > 0) {
              var cardss = get.cards(num1);
              player.addToExpansion(cardss, 'gain2', 'log').gaintag.add('qtpz_daogao');
            }
            'step 2';
            player.
            chooseTarget('是否选择至多其他三名男性角色并弃置其装备区里的一张牌？', [1, 3], function (card, player, target) {
              if (!target.countDiscardableCards(player, 'e')) return false;
              return target != player && target.hasSex('male');
            }).
            set('ai', function (target) {
              return get.effect(
                target,
                {
                  name: 'guohe_ai',
                  position: 'e'
                },
                player,
                player
              );
            });
            'step 3';
            if (result.targets?.length) {
              event.targets = result.targets;
              event.num = 0;
            } else {
              event.finish();
            }
            'step 4';
            if (event.num < event.targets.length) {
              var target = event.targets[event.num];
              player.line(target, 'green');
              player.discardPlayerCard('e', target, true);
              event.num++;
              event.redo();
            }
          }
        },
        qtpz_jiaoxie: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'chooseToUse',
          mark: true,
          limited: true,
          init(player, skill) {
            player.storage[skill] = false;
          },
          marktext2: '缴',
          markimage: 'extension/金庸群侠传/image/icon/jyjiaoxie.jpg',
          filter(event, player) {
            if (player.storage.qtpz_jiaoxie) return false;
            if (event.type == 'dying') {
              if (player != event.dying) return false;
              return player.getCards('e').length;
            }
            return false;
          },
          content() {
            'step 0';
            player.storage.qtpz_jiaoxie = true;
            player.awakenSkill('qtpz_jiaoxie');
            var es = player.getCards('e');
            player.discard(es);
            'step 1';
            var num = Math.min(2, player.maxHp - player.hp);
            if (num > 0) player.recover(num);
          },
          ai: {
            order: 0.5,
            skillTagFilter(player, tag, target) {
              if (player != target || player.storage.qtpz_jiaoxie) return false;
            },
            save: true,
            result: {
              player: 1
            },
            threaten(player, target) {
              if (!target.storage.qtpz_jiaoxie) return 0.6;
            }
          },
          intro: {
            content: 'limited'
          }
        },
        qtpz_ruxue: {
          audio: 'ext:金庸群侠传/peiyin:2',
          mark: true,
          marktext2: '啖',
          markimage: 'extension/金庸群侠传/image/icon/jydanshi.jpg',
          init(player, skill) {
            if (!player.storage[skill]) player.storage[skill] = [];
          },
          intro: {
            name: '吃掉的尸体',
            content: 'players'
          },
          enable: 'chooseToUse',
          filter(event, player) {
            if (event.type == 'dying') {
              if (player != event.dying) return false;
            }
            var dieList = game.dead.slice(0);
            for (var die of dieList) {
              if (!player.storage.qtpz_ruxue.includes(die)) return true;
            }
            return false;
          },
          viewAsFilter(player) {
            var event = _status.event;
            if (event.type == 'dying') {
              if (player != event.dying) return false;
            }
            var dieList = game.dead.slice(0);
            for (var die of dieList) {
              if (!player.storage.qtpz_ruxue.includes(die)) return true;
            }
            return false;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          viewAs: { name: 'tao' },
          prompt: '选择吃掉1名已阵亡的角色>,视为使用一张【九花玉露丸】.',
          precontent() {
            'step 0';
            player.chooseButton(true, ui.create.dialog('选择吃掉1名已阵亡的角色', game.dead.slice(0))).set('filterButton', function (button) {
              var player = _status.event.player;
              var list = player.storage.qtpz_ruxue;
              return !list.includes(button.link);
            });
            'step 1';
            if (result.links?.length) {
              player.storage.qtpz_ruxue.add(result.links[0]);
              result.links[0].hide();
            }
            game.log(player, '吃掉了', result.links[0]);
            //动画
            var cardname = 'qtpz_ruxue_card_' + result.links[0].name;
            lib.card[cardname] = {
              fullimage: true,
              image: 'character:' + result.links[0].name
            };
            lib.translate[cardname] = lib.translate[result.links[0].name];
            player.$gain2(game.createCard(cardname, '', ''));
            //动画
            player.markSkill('qtpz_ruxue');
            event.result.card = { name: 'tao' };
          },
          ai: {
            save: true,
            skillTagFilter(player, tag, target) {
              if (player != target) return false;
              var dieList = game.dead.slice(0);
              for (var die of dieList) {
                if (!player.storage.qtpz_ruxue.includes(die)) return true;
              }
              return false;
            }
          }
        },
        qtpz_guming: {
          audio: 'ext:金庸群侠传/peiyin:2',
          derivation: 'qtpz_mengju',
          init(player, skill) {
            player.storage[skill] = false;
          },
          trigger: { player: 'phaseZhunbeiBegin' },
          filter(event, player) {
            if (!player.storage.qtpz_ruxue) return false;
            if (!player.storage.qtpz_ruxue.length) return false;
            if (game.dead.length == 0) return false;
            var dieList = game.dead.slice(0);
            for (var die of dieList) {
              if (!player.storage.qtpz_ruxue.includes(die)) return false;
            }
            return !player.storage.qtpz_guming;
          },
          forced: true,
          content() {
            player.storage.qtpz_guming = true;
            player.loseMaxHp();
            player.$fullscreenpop('沽名钓誉', 'fire');
            player.removeSkills('qtpz_ruxue');
            player.addSkills('qtpz_mengju');
            player.awakenSkill('qtpz_guming');
          }
        },
        qtpz_mengju: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseDrawBegin1' },
          check(event, player) {
            var num = game.dead.length;
            //return num>3&&num>trigger.num; //原来代码
            //美妙的世界改
            return num > 3 && num > event.num;
          },
          filter(event, player) {
            return !event.numFixed;
          },
          content() {
            trigger.changeToZero();
            var num = game.dead.length;
            player.addTempSkill('qtpz_mengju_hand');
            if (num > 0) {
              player.draw(num);
            }
          },
          prompt(event, player) {
            var num = game.dead.length;
            return '盟举:是否改为摸' + get.cnNumber(num) + '张牌？';
          },
          subSkill: {
            hand: {
              mod: {
                maxHandcardBase(player, num) {
                  return game.dead.length;
                }
              }
            }
          }
        },
        qtpz_yuanbian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'useCard2' },
          usable: 1,
          _priority: -2,
          check(event, player) {
            return get.effect(event.targets[0], event.card, event.player, player) < 0;
          },
          filter(event, player) {
            if (!event.targets || event.targets.length != 1) return false;
            if (event.player == player) return false;
            if (event.targets.includes(player)) return false;
            if (get.info(event.card).multitarget) return false;
            var type = get.type(event.card);
            if (type != 'basic' && type != 'trick') return false;
            return true;
          },
          logTarget: 'player',
          content() {
            'step 0';
            var eff = get.effect(trigger.targets[0], trigger.card, player, player);
            var eff2 = get.effect(player, trigger.card, player, player);
            player.judge(function (card) {
              if (get.color(card) == 'black') {
                if (eff < 0) return 2;
                return -1;
              }
              if (get.color(card) == 'red') {
                if (eff2 > 0) return 1;
                return -1;
              }
              return 0;
            }).judge2 = function (result) {
              return result.bool;
            };
            'step 1';
            if (result.color == 'black') {
              trigger.excluded.add(trigger.targets[0]);
            } else if (lib.filter.targetEnabled2(trigger.card, trigger.player, player)) {
              trigger.targets.add(player);
              trigger.player.line(player, 'green');
            }
          }
        },
        qtpz_tongzui: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'useCard' },
          _priority: -10,
          check(event, player) {
            var numm = 0;
            for (var i = 0; i < event.targets.length; i++) {
              var juese = event.targets[i];
              var att = get.attitude(player, juese);
              if (att >= 0) {
                numm++;
              }
              if (att < 0) {
                numm--;
              }
            }
            if (numm <= 0) return true;
            return false;
          },
          filter(event, player) {
            if (!event.targets || event.targets.length < 2) return false;
            if (!event.targets.includes(player)) return false;
            return true;
          },
          logTarget: 'targets',
          content() {
            for (var i = 0; i < trigger.targets.length; i++) {
              var juese = trigger.targets[i];
              juese.loseHp(1);
            }
          }
        },
        qtpz_guoshang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { target: 'useCardToTargeted' },
          forced: true,
          filter(event, player) {
            return event.card.suit && event.card.suit == 'club';
          },
          content() {
            player.draw();
          },
          ai: {
            effect: {
              target(card, player, target) {
                if (card.suit == 'club') return [1, 0.6];
              }
            }
          }
        },
        qtpz_fuchao: {
          audio: 'ext:金庸群侠传/peiyin:3',
          group: ['qtpz_fuchao_after', 'qtpz_fuchao_isLinkedbegin', 'qtpz_fuchao_isLinkedafter'],
          subSkill: {
            after: {
              trigger: { global: 'useCardAfter' },
              filter(event, player) {
                if (!event.targets || !event.targets.length) return false;
                if (
                !game.hasPlayer2(function (current) {
                  return (
                    event.targets.includes(current) &&
                    current.getHistory('damage', function (card) {
                      return card.card == event.card;
                    }).length);

                }))

                return false;
                var targets = lib.skill.qtpz_fuchao_after.logTarget(event, player);
                return targets.length;
              },
              logTarget(event, player) {
                var targets = game.filterPlayer(function (current) {
                  return (
                    event.targets.includes(current) &&
                    !current.getHistory('damage', function (card) {
                      return card.card == event.card;
                    }).length &&
                    current.countDisCards('he', null, 'qtpz_fuchao_after'));

                });
                return targets;
              },
              check(event, player) {
                var targets = lib.skill.qtpz_fuchao_after.logTarget(event, player);
                var numm = 0;
                for (var j = 0; j < targets.length; j++) {
                  var juese = targets[j];
                  var att = get.attitude(player, juese);
                  var he = juese.countDisCards('he', null, 'qtpz_fuchao_after');
                  if (att > 0 && he > 0) {
                    numm++;
                  }
                  if (att <= 0 && he > 0) {
                    numm--;
                  }
                }
                if (numm < 0) return true;
                return false;
              },
              content() {
                var targets = lib.skill.qtpz_fuchao_after.logTarget(trigger, player);
                for (var j = 0; j < targets.length; j++) {
                  var juese = targets[j];
                  if (juese.countDisCards('he', null, 'qtpz_fuchao_after')) {
                    juese.chooseToDiscard(1, 'he', true);
                  }
                }
              }
            },
            isLinkedbegin: {
              trigger: { global: ['recoverBegin', 'damageBegin'] },
              forced: true,
              silent: true,
              popup: false,
              filter(event, player) {
                return get.jy_deEffect(event.player);
              },
              content() {
                trigger.set('isLinkedbegin', true);
              }
            },
            isLinkedafter: {
              trigger: { global: ['recoverAfter', 'damageAfter'] },
              audio: 'qtpz_fuchao',
              check(event, player) {
                var nummm = 0;
                var targets = game.filterPlayer(function (current) {
                  return get.jy_deEffect(current) && current != event.player;
                });
                if (targets.length) {
                  for (var i = 0; i < targets.length; i++) {
                    var juese = targets[i];
                    if (event.name == 'damage') {
                      if (juese.countCards('he')) {
                        var att = get.attitude(player, juese);
                        if (att > 0) nummm++;
                        if (att <= 0) nummm--;
                      }
                    }
                    if (event.name == 'recover') {
                      var att = get.attitude(player, juese);
                      if (att > 0) nummm++;
                      if (att <= 0) nummm--;
                    }
                  }
                  if (event.name == 'damage' && nummm < 0) return true;
                  if (event.name == 'recover' && nummm > 0) return true;
                  return false;
                }
                return false;
              },
              logTarget(event, player) {
                return game.filterPlayer(function (current) {
                  return get.jy_deEffect(current) && current != event.player;
                });
              },
              filter(event, player) {
                var targets = game.filterPlayer(function (current) {
                  return get.jy_deEffect(current) && current != event.player;
                });
                if (!targets.length) return false;
                return event.isLinkedbegin == true;
              },
              content() {
                'step 0';
                event.targets = game.filterPlayer(function (current) {
                  return get.jy_deEffect(current) && current != trigger.player;
                });
                event.num = 0;
                event.targets.sort(lib.sort.seat);
                'step 1';
                if (event.num < event.targets.length) {
                  var target = event.targets[event.num];
                  if (trigger.name == 'damage' && target.countDisCards('he', null, event.name)) {
                    target.chooseToDiscard(true, 'he');
                  }
                  if (trigger.name == 'recover') target.draw();
                  event.num++;
                  event.redo();
                }
              }
            }
          }
        },
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        qtpz_fuchao_old: {
          group: ['qtpz_fuchao_after', 'qtpz_fuchao_damage', 'qtpz_fuchao_use', 'qtpz_fuchao_isLinkedbegin', 'qtpz_fuchao_isLinkedafter'],
          subSkill: {
            after: {
              trigger: {
                global: 'useCardAfter'
              },
              filter(event, player) {
                return event.ondamage == true && event.tar.length;
              },
              check(event, player) {
                var numm = 0;
                for (var i = 0; i < event.tar.length; i++) {
                  var juese = event.tar[i];
                  var att = get.attitude(player, juese);
                  var he = juese.countCards('he');
                  if (att > 0 && he > 0) {
                    numm++;
                  }
                  if (att <= 0 && he > 0) {
                    numm--;
                  }
                }
                if (numm < 0) return true;
                return false;
              },
              content() {
                for (var i = 0; i < trigger.tar.length; i++) {
                  var juese = trigger.tar[i];
                  if (juese.countCards('he')) {
                    player.line(juese, 'green');
                    juese.chooseToDiscard(1, 'he', true);
                    //game.playJY(['qtpz_fuchao1','qtpz_fuchao2','qtpz_fuchao3'].randomGet());
                  }
                }
              }
            },
            damage: {
              audio: 'qtpz_fuchao',
              trigger: {
                global: 'damageEnd'
              },
              filter(event, player) {
                return event.getParent(2).tar.length;
              },
              forced: true,
              popup: false,
              content() {
                'step 0';
                if (trigger.getParent(2).ondamage == false) trigger.getParent(2).ondamage = true;
                game.playJY(['qtpz_fuchao1', 'qtpz_fuchao2', 'qtpz_fuchao3'].randomGet());
                'step 1';
                if (trigger.getParent(2).tar.includes(trigger.player)) {
                  trigger.getParent(2).tar.remove(trigger.player);
                }
              }
            },
            use: {
              audio: 'qtpz_fuchao',
              trigger: {
                global: 'useCard'
              },
              forced: true,
              popup: false,
              _priority: -100,
              filter(event, card) {
                if (!event.targets) return false;
                return true;
              },
              content() {
                trigger.tar = trigger.targets.slice(0);
                trigger.ondamage = false;
              }
            },
            isLinkedbegin: {
              audio: 'qtpz_fuchao',
              trigger: {
                global: ['recoverBegin', 'damageBegin']
              },
              forced: true,
              silent: true,
              popup: false,
              filter(event, player) {
                if (!event.player.isLinked()) return false;
                return true;
              },
              content() {
                trigger.isLinkedbegin = true;
              }
            },
            isLinkedafter: {
              audio: 'ext:金庸群侠传/peiyin:3',
              trigger: {
                global: ['recoverAfter', 'damageAfter']
              },
              check(event, player) {
                var nummm = 0;
                var tar = game.
                filterPlayer(function (current) {
                  return current.isLinked() && current != event.player;
                }).
                sortBySeat();
                if (tar.length) {
                  for (var i = 0; i < tar.length; i++) {
                    var juese = tar[i];
                    if (event.name == 'damage') {
                      if (juese.countCards('he')) {
                        var att = get.attitude(player, juese);
                        if (att > 0) nummm++;
                        if (att <= 0) nummm--;
                      }
                    }
                    if (event.name == 'recover') {
                      var att = get.attitude(player, juese);
                      if (att > 0) nummm++;
                      if (att <= 0) nummm--;
                    }
                  }
                  if (event.name == 'damage' && nummm < 0) return true;
                  if (event.name == 'recover' && nummm > 0) return true;
                  return false;
                }
                return false;
              },
              filter(event, player) {
                if (event.name == 'recover' && event.player.isDying()) return false;
                var tar = game.
                filterPlayer(function (current) {
                  return current.isLinked() && current != event.player;
                }).
                sortBySeat();
                if (tar.length < 1) return false;
                return event.isLinkedbegin == true;
              },
              content() {
                'step 0';
                game.playJY(['qtpz_fuchao1', 'qtpz_fuchao2', 'qtpz_fuchao3'].randomGet());
                event.targets = game.filterPlayer(function (current) {
                  if (current.isLinked() && current != trigger.player) {
                    return true;
                  }
                });
                event.num = 0;
                event.targets.sort(lib.sort.seat);
                'step 1';
                if (event.num < event.targets.length) {
                  var target = event.targets[event.num];
                  player.line(target, 'green');
                  if (trigger.name == 'damage' && target.countCards('he')) {
                    target.chooseToDiscard(true, 'he');
                  }
                  if (trigger.name == 'recover') target.draw();
                  event.num++;
                  event.redo();
                }
              }
            }
          }
        },
        qtpz_gaifu: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          selectTarget: [1, 2],
          line: 'thunder',
          multitarget: true,
          multiline: true,
          filterTarget(card, player, target) {
            return player != target;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            'step 0';
            if (player.isLinked()) {
              event._result = { control: '失去体力' };
            } else {
              player.chooseControl('失去体力', '横置', function (event, player) {
                return '横置';
              });
            }
            'step 1';
            if (result.control == '失去体力') {
              player.loseHp();
            } else {
              player.link();
            }
            'step 2';
            targets[0].link();
            if (targets.length == 2) targets[1].link();
          },
          ai: {
            result: {
              target(player, target) {
                if (player.isLinked()) return 0;
                return lib.card.tiesuo.ai.result.target(player, target);
              }
            },
            order: 2,
            expose: 0.3
          }
        },
        qtpz_wuxian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseJieshuBegin'
          },
          check(event, player) {
            var num = player.maxHp - player.hp;
            if (num == 0) return false;
            var cardsss = player.getCards('h');
            if (num >= 1 && get.value(cardsss[0]) < 6 && cardsss.length == 1) return true;
            if (num - cardsss.length > 1) return true;
            for (var i = 0; i < cardsss.length; i++) {
              if (get.value(cardsss[i]) > 7 || get.tag(cardsss[i], 'recover') >= 1) return false;
            }
            return true;
          },
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          content() {
            'step 0';
            var cards = player.getCards('h');
            player.discard(cards);
            'step 1';
            var num1 = player.maxHp - player.hp;
            if (num1 > 0) player.draw(num1);
          }
        },
        qtpz_quanzhen2: {},
        qtpz_quanzhen: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'gainEnd'
          },
          usable: 1,
          //round:1,
          logTarget: 'player',
          check(event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          filter(event, player) {
            return event.player.isMaxHandcard(true) && !player.hasSkill('qtpz_quanzhen2');
          },
          content() {
            'step 0';
            player.addTempSkill('qtpz_quanzhen2', 'roundStart');
            trigger.player.chooseCard('劝赈:将一张手牌当<开仓放粮>使用且你不能成为目标.', 'h', true).set('ai', function (card) {
              var wugu = { name: 'wugu', cards: [card] };
              return _status.event.player.getUseValue(wugu);
            });
            'step 1';
            if (result.bool) {
              if (
              game.hasPlayer(function (current) {
                return (
                  trigger.player != current &&
                  trigger.player.canUse(
                    {
                      name: 'wugu',
                      cards: result.cards
                    },
                    current
                  ));

              }))
              {
                trigger.player.chooseUseTarget({ name: 'wugu' }, result.cards, true, false).set(
                  'targets',
                  game.filterPlayer(function (current) {
                    return (
                      trigger.player != current &&
                      trigger.player.canUse(
                        {
                          name: 'wugu',
                          cards: result.cards
                        },
                        current
                      ));

                  })
                ).viewAs = true;
                trigger.player.say(['在下岂敢不以苍生为念？', '开仓放粮,救济黎民!', '李将军,这样赈灾真的有用？'].randomGet());
              } else {
                trigger.player.discard(result.cards);
              }
            }
          }
        },
        qtpz_honglve: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseUseBegin'
          },
          filter(event, player) {
            return player.countCards('h', { type: 'trick' }) + player.countCards('h', { type: 'delay' }) > 0;
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseCard(1, 'h', '是否弃置一张锦囊牌？若弃置的牌为红色,你本回合使用【九花玉露丸】回复数值加一;若为黑色,你本回合使用黑色牌造成的伤害+1.', function (card, player) {
              return get.type(card) == 'trick' || get.type(card) == 'delay';
            }).
            set('ai', function (card) {
              if (player.countCards('h', 'tao') > 0 && player.canUse({ name: 'tao' }, player)) {
                if (player.maxHp - player.hp > 1) {
                  if (get.color(card) == 'red') return 8 - get.value(card);
                }
              }
              var blsha = false;
              var blnum = 0;
              var ca = player.getCards('h');
              for (var i = 0; i < ca.length; i++) {
                if (get.color(ca[i]) == 'black') {
                  var canblack = game.hasPlayer(function (current) {
                    return get.tag(ca[i], 'damage') && get.effect(current, ca[i], player, player) > 0 && player.canUse(ca[i], current);
                  });
                  if (canblack && ca[i].name != 'sha') blnum++;
                  if (canblack && ca[i].name == 'sha' && blsha == false) blsha = true;
                }
              }
              if (blsha == true) blnum++;
              if (get.color(card) == 'black' && blnum >= 2 && !get.tag(card, 'damage')) return 8 - get.value(card);
              if (get.color(card) == 'black' && blnum >= 3 && get.tag(card, 'damage')) return 6 - get.value(card);
              return -1;
            });
            'step 1';
            if (result.cards?.length) {
              player.discard(result.cards[0]);
              player.addTempSkill('qtpz_honglve_' + get.color(result.cards[0]));
            }
          },
          subSkill: {
            black: {
              mark: true,
              marktext2: '黑',
              markimage: 'extension/金庸群侠传/image/icon/jyhongluelue.jpg',
              intro: {
                content: '你使用黑色牌造成的伤害加一.'
              },
              trigger: { player: 'useCard1' },
              filter(event, player) {
                var type = get.type(event.card);
                if (type == 'equip' || type == 'delay') return false;
                return get.color(event.card) == 'black' && get.tag(event.card, 'damage');
              },
              forced: true,
              charlotte: true,
              firstDo: true,
              content() {
                if (!trigger.baseDamage) trigger.baseDamage = 1;
                trigger.baseDamage += 1;
              }
            },
            red: {
              mark: true,
              marktext2: '红',
              markimage: 'extension/金庸群侠传/image/icon/jyhongluehong.jpg',
              intro: {
                content: '你使用九花玉露丸(桃)时,额外回复一点体力.'
              },
              trigger: { player: 'useCard1' },
              filter(event, player) {
                return event.card && event.card.name == 'tao';
              },
              forced: true,
              charlotte: true,
              firstDo: true,
              content() {
                if (!trigger.baseDamage) trigger.baseDamage = 1;
                trigger.baseDamage += 1;
              }
            }
          }
        },
        qtpz_fengpo: {
          audio: 'ext:金庸群侠传/peiyin:2',
          shaRelated: true,
          trigger: { player: 'useCardToPlayered' },
          filter(event, player) {
            return event.card && event.card.name == 'sha' && player.countCards('h') && event.target.countCards('h');
          },
          forced: true,
          content() {
            'step 0';
            player.chooseToDiscard(get.prompt('qtpz_fengpo', trigger.target), '是否弃置一张牌令其展示手牌并弃置与你弃置的牌花色相同的牌', 'h').set('ai', function (card) {
              var att = get.attitude(player, trigger.target);
              var getCard = trigger.target.countCards('he', { suit: card.suit });
              var value = (10 - get.value(card)) / 10;
              if (att < 0) {
                if (getCard < 2) return -1;
                return getCard + value;
              }
              return -1;
            })('step 1');
            if (result.bool) {
              trigger.target.showHandcards();
              event.suitx = result.cards[0].suit;
            } else event.finish();
            'step 2';
            var todis = trigger.target.getCards('he', { suit: event.suitx });
            if (todis.length) trigger.target.discard(todis);
          }
        },
        qtpz_yujie: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            source: 'damageEnd'
          },
          forced: true,
          filter(event, player) {
            if (!event.card || !event.card.name) return false;
            var evt = event.getParent('useCard');
            if (!evt || evt.name != 'useCard') return false;
            if (evt.card != event.card) return false;
            if (!evt.targets || !evt.targets.length) return false;
            if (evt.cards) return evt.cards.filterInD('od').length;
            return false;
          },
          content() {
            'step 0';
            var evt = trigger.getParent('useCard');
            event.togive = evt.cards.filterInD('od');
            player.
            chooseTarget('是否选择一名角色获得' + get.translation(event.togive) + '？', function (card, player, target) {
              return evt.targets.includes(target);
            }).
            set('ai', function (target) {
              var num = target.countCards('h') - target.hp;
              if (num >= 0) {
                return get.attitude(player, target);
              }
              return get.attitude(player, target);
            });
            'step 1';
            if (result.targets?.length) {
              result.targets[0].gain(event.togive, 'log', 'gain2');
              event.target = result.targets[0];
            }
            'step 2';
            if (event.target) {
              if (event.target.countCards('h') - event.target.hp > 0) player.draw();
            }
          }
        },
        qtpz_zhidu: {
          subSkill: { backup: {} },
          group: ['qtpz_zhidu1'],
          init(player) {
            player.storage.qtpz_zhidu = [];
          },
          marktext2: '毒',
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_zhidu.jpg',
          intro: { content: 'cards' },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            return player.countCards('h', { color: 'black' }) > 0;
          },
          contentx() {
            'step 0';
            var links = lib.skill.qtpz_zhidu_backup.links;
            var loseCard = links[0];
            var index = links[1];
            var next = player.lose(loseCard, ui.cardPile);
            next.set('forceDie', true);
            next.set('insert_index_card', ui.cardPile.childNodes[index]);
            next.set('insert_index', function (event) {
              return event.insert_index_card;
            });
            player.storage.qtpz_zhidu.add(loseCard);
            player.markSkill('qtpz_zhidu');
            game.log(player, '将', get.position(loseCard) == 'h' ? '一张牌' : loseCard, '置于牌堆顶');
            game.broadcastAll(function (player) {
              var cardx = ui.create.card();
              cardx.classList.add('infohidden');
              cardx.classList.add('infoflip');
              player.$throw(cardx, 1000, 'nobroadcast');
            }, player);
            'step 1';
            game.updateRoundNumber();
          },
          chooseButton: {
            dialog(event, player) {
              var list = [];
              for (var i = 0; i < 7; i++) {
                if (i >= ui.cardPile.childNodes.length) continue;
                list.push([i, '第' + get.translation(i + 1) + '张']);
              }
              var dialog = ['植毒', '<div class="text center">将一黑色牌置于牌堆第几张?</div>', [list, 'tdnodes'], '<div class="text center">手牌</div>', player.getCards('he', (i) => get.color(i) == 'black')];
              return ui.create.dialog.apply(ui.create, dialog);
            },
            filter(button) {
              if (ui.selected.buttons.length && typeof button.link == typeof ui.selected.buttons[0].link) return false;
              return true;
            },
            select: 2,
            check(button) {
              var player = _status.event.player;
              return Math.random();
            },
            backup(links, player) {
              if (typeof links[0] == 'number') links.reverse();
              return {
                audio: 'qtpz_zhidu',
                links: links,
                delay: false,
                content: lib.skill.qtpz_zhidu.contentx
              };
            }
          },
          ai: {
            order: 2,
            result: {
              player: 1
            }
          }
        },
        qtpz_zhidu_old: {
          group: ['qtpz_zhidu1'],
          init(player) {
            player.storage.qtpz_zhidu = [];
          },
          marktext2: '毒',
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_zhidu.jpg',
          intro: {
            content: 'cards'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          lose: false,
          discard: false,
          filter(event, player) {
            return player.countCards('h', { color: 'black' }) > 0;
          },
          position: 'h',
          filterCard(card, player) {
            return get.color(card) == 'black';
          },
          check(card) {
            return 7 - get.value(card);
          },
          content() {
            'step 0';
            event.cardssss = cards[0];
            'step 1';
            if (!player.storage.qtpz_zhidu.includes(event.cardssss)) {
              player.storage.qtpz_zhidu.push(event.cardssss);
              player.markSkill('qtpz_zhidu');
            }
            'step 2';
            var controls = ['一', '二', '三', '四', '五', '六', '七'];
            var str = '将该牌置于牌堆第X张(X为你选择的数字)';
            player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
              return Math.floor(Math.random() * controls.length);
            };
            'step 3';
            var num;
            switch (result.control) {
              case '一':
                num = 1;
                break;
              case '二':
                num = 2;
                break;
              case '三':
                num = 3;
                break;
              case '四':
                num = 4;
                break;
              case '五':
                num = 5;
                break;
              case '六':
                num = 6;
                break;
              case '七':
                num = 7;
                break;
            }
            event.num1 = num - 1;
            event.num2 = num;
            'step 4';
            event.cards = get.cards(7);
            'step 5';
            if (Array.isArray(event.cards))
            for (var i of event.cards) {
              if (i == event.num1) {
                ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                event.cardssss.fix();
                ui.cardPile.insertBefore(event.cardssss, ui.cardPile.firstChild);
                player.showCards(event.cardssss, '七心海棠:<br>置于牌堆顶第' + event.num2 + '张');
              } else {
                ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
              }
            }
          },
          ai: {
            order: 3,
            result: {
              player: 1
            }
          }
        },
        qtpz_zhidu1: {
          trigger: {
            global: 'phaseDrawEnd'
          },
          check(event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          forced: true,
          filter(event, player) {
            if (!event.cards || !event.cards.length) return false;
            if (Array.isArray(event.cards))
            for (var i of event.cards) {
              if (player.storage.qtpz_zhidu.includes(i)) {
                return true;
              }
            }
            return false;
          },
          content() {
            'step 0';
            player.line(trigger.player, 'green');
            'step 1';
            if (Array.isArray(trigger.cards))
            for (var i of trigger.cards) {
              if (player.storage.qtpz_zhidu.includes(i)) {
                player.storage.qtpz_zhidu.remove(i);
                player.markSkill('qtpz_zhidu');
                trigger.player.showCards(i, '七心海棠');
                trigger.player.damage(1, 'jy_du', 'nosource');
              }
            }
          },
          ai: {
            order: 3,
            result: {
              player: 1
            }
          }
        },
        qtpz_xianghun: {
          logTarget: 'player',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'damageSource' },
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          filter(event, player) {
            return event.nature && event.player.isIn();
          },
          content() {
            trigger.player.draw();
          },
          ai: {
            effect: {
              target(card, player, target) {
                if (card.nature) return [1, -0.5, 1, 0];
              }
            }
          }
        },
        qtpz_youqin: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseUseBegin'
          },
          filter(event, player) {
            if (event.player == player) return false;
            return player.countCards('h') && event.player.countCards('h');
          },
          forced: true,
          content() {
            'step 0';
            player.chooseToDiscard('h', get.prompt('qtpz_youqin', trigger.player), '弃置一张手牌观看其至多X张手牌并使用其中一张非装备牌(X为其的体力值)？').set('ai', function (card) {
              var att = get.attitude(player, trigger.player);
              if (att < 0) {
                if (
                trigger.player.hp >= trigger.player.countCards('h') &&
                trigger.player.countCards('h', function (cardx) {
                  return player.hasUseTarget(cardx, false) && player.getUseValue(cardx, false) > 0;
                }))
                {
                  return 9 - get.value(card);
                }
                return -1;
              }
              return -1;
            })('step 1');
            if (result.bool) {
              event.hs = trigger.player.getCards('h');
              var num = trigger.player.hp;
              var count = trigger.player.countCards('h');
              if (num > count) num = count;
              event.hs1 = event.hs.randomGets(num);
              //player.showCards(event.hs1)
            } else event.finish();
            'step 2';
            player.
            chooseCardButton(event.hs1, [1, 1], '选择一张牌并使用之').
            set('filterButton', function (button) {
              //if(get.type(button.link)=='equip') return false;
              var player = _status.event.player;
              return player.hasUseTarget(button.link, false);
            }).
            set('ai', function (button) {
              var player = _status.event.player;
              if (player.getUseValue(button.link, false) > 0) return get.order(button.link);
              return get.value(button.link);
            });
            'step 3';
            if (result.links?.length) {
              player.chooseUseTarget(result.links[0], true, false, 'nodistance');
            } else event.finish();
          }
        },
        qtpz_gangbi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { target: 'useCardToTarget' },
          forced: true,
          _priority: 15,
          zhuSkill: true,
          check(event, player) {
            return event.card && event.card.name != 'chiling' && get.effect(event.target, event.card, event.player, player) < 0;
          },
          filter(event, player) {
            var group = 'wu';
            if (lib.jy_changeSkill) group = 'jy_ming';
            if (event.player == player) return false;
            if (!player.hasZhuSkill('qtpz_gangbi')) return false;
            if (group != event.player.group) return false;
            return get.type(event.card, 'trick') == 'trick';
          },
          content() {
            'step 0';
            trigger.player.say(['陛下,这是何故？', '陛下为何不听我谏言？', '闭目塞听,是昏君所为!'].randomGet());
            player.say(['你们这是要误朕吗？', '都给朕退下!', '让朕一个人清静清静.', '卿等只会讲这无用的大道理吗？'].randomGet());
            player.draw();
            'step 1';
            trigger.parent.excluded.add(player);
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                var group = 'wu';
                if (lib.jy_changeSkill) group = 'jy_ming';
                if (player == target) return;
                if (!target.hasZhuSkill('qtpz_gangbi')) return;
                if (group != player.group) return;
                if (get.type(card, 'trick') == 'trick') return 'zeroplayertarget';
              }
            }
          }
        },
        //////////////////////////////////////////////////////////////////
        qtpz_zuiji: {
          mod: {
            aiOrder(player, card, num) {
              ///  假留赞 ///
              if (typeof card == 'object') {
                var list = lib.suit.slice(0);
                var suit = card.suit;
                if (list.includes(suit) && !player.hasMark('qtpz_zuiji_' + suit)) {
                  return num + 10;
                }
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: ['useCard', 'respond'] },
          filter(event, player) {
            return event.cards && event.cards.length;
          },
          forced: true,
          popup: false,
          init(player, skill) {
            player.storage[skill] = [];
          },
          marktext: '罪',
          intro: {
            name: '罪己',
            content(storage, player) {
              var str = '';
              var list = ['heart', 'diamond', 'club', 'spade'];
              for (var e of list) {
                if (player.hasMark('qtpz_zuiji_' + e)) str += '<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jy_avatar_' + e + '.jpg>&ensp;&ensp;';
              }
              return str;
            }
          },
          content() {
            'step 0';
            for (var i of trigger.cards) {
              var suit = i.suit;
              if (!player.hasMark('qtpz_zuiji_' + suit)) {
                player.addMark('qtpz_zuiji_' + suit, false);
                player.markSkill('qtpz_zuiji');
              }
            }
            'step 1';
            var list = ['heart', 'diamond', 'club', 'spade'];
            for (var e of list) {
              if (!player.hasMark('qtpz_zuiji_' + e)) return;
            }
            for (var j of list) {
              player.removeMark('qtpz_zuiji_' + j, false);
              player.unmarkSkill('qtpz_zuiji');
            }
            player.draw(2);
          },
          group: ['qtpz_zuiji_mopai', 'qtpz_zuiji_mopaib'],
          subSkill: {
            heart: {},
            diamond: {},
            club: {},
            spade: {},
            mopai: {
              trigger: {
                player: 'gainAfter'
              },
              _priority: -50,
              forced: true,
              popup: false,
              filter(event, player) {
                if (player.hasSkill('qtpz_zuiji_mopaion')) return false;
                if (event.parent.parent.name == 'phaseDraw') return false;
                return event.cards && event.cards.length;
              },
              content() {
                player.addTempSkill('qtpz_zuiji_mopaion', 'phaseAfter');
              }
            },
            mopaion: {
              mark: true,
              marktext2: '摸',
              markimage: 'extension/金庸群侠传/image/icon/jyzhuijijiechu.jpg',
              intro: {
                content: '已于本回合内获得过牌(摸牌阶段除外).'
              }
            },
            mopaib: {
              trigger: {
                player: 'phaseJieshuBegin'
              },
              _priority: -50,
              forced: true,
              popup: false,
              filter(event, player) {
                return !player.hasSkill('qtpz_zuiji_mopaion');
              },
              content() {
                'step 0';
                game.playJY(['qtpz_zuiji1', 'qtpz_zuiji2'].randomGet());
                'step 1';
                player.chooseControl('失去体力', '翻面', function (event, player) {
                  if (player.isTurnedOver()) return '翻面';
                  if (!player.isTurnedOver() && player.hp >= 2) return '失去体力';
                  //if(!player.isTurnedOver()&&player.previous==trigger.player&&player.hp>=2) return '失去体力';由于朱由检罪己只在自己回合结束发动,故第二项判断条件不可能满足,故删除.
                  //if(player.isLinked()) return '横置';
                  return '翻面';
                });
                'step 2';
                if (result.control == '失去体力') {
                  player.loseHp();
                }
                if (result.control == '翻面') {
                  player.turnOver();
                }
                //if(result.control=='横置'){
                //    player.link();
                //}
              }
            }
          }
        },
        /////////////////////////////////////////////////////////////////////
        //新筑城---吃朵棉花糖20220526
        qtpz_zhucheng: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'phaseDrawBefore' },
          group: ['qtpz_zhucheng_2'],
          check(event, player) {
            return 1;
          },
          prompt: '是否发动【筑城】随机获得弃牌堆4张牌,并将其中2张牌置牌堆顶？',
          filter(event, player) {
            return Array.from(ui.discardPile.childNodes).length >= 4;
          },
          content() {
            'step 0';
            var dis = ui.discardPile.childNodes,
              cardx = [];
            for (var i = 0; i < dis.length; i++) {
              cardx.push(dis[i]);
            }
            cardx = cardx.randomGets(4);
            player.chooseCardButton('选择置于牌堆顶的牌(先选在上)', cardx, true, 2);
            'step 1';
            if (result.links?.length) {
              var top = result.links;
              while (top.length) {
                var card = top.pop();
                ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
              }
              game.log(player, '将', result.links, '置于牌堆顶');
              game.updateRoundNumber();
              event.finish();
            }
          },
          subSkill: {
            2: {
              trigger: {
                global: ['phaseUseBegin', 'phaseJieshuBegin']
              },
              forced: true,
              _priority: 66,
              content() {
                var num = ui.cardPile.childNodes.length;
                if (trigger.name == 'phaseUse') {
                  player.storage.qtpz_zhucheng = num;
                } else {
                  if (player.storage.qtpz_zhucheng == num) {
                    player.draw();
                  }
                }
              }
            }
          }
        },
        //旧筑城
        qtpz_zhucheng_old: {
          group: ['qtpz_zhucheng_old1'],
          marktext2: '城',
          markimage: 'extension/金庸群侠传/image/icon/jyzhucheng.jpg',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'gameDrawAfter'
          },
          forced: true,
          content() {
            'step 0';
            player.draw(4);
            'step 1';
            if (player.countCards('he')) {
              player.chooseCard('将' + get.cnNumber(4) + '张手牌置于侠客牌上作为<城>', 4, true);
            } else {
              event.finish();
            }
            'step 2';
            if (result.cards?.length) {
              player.lose(result.cards, ui.special, 'toStorage');
              player.storage.qtpz_zhucheng_old = player.storage.qtpz_zhucheng_old.concat(result.cards);
              player.markSkill('qtpz_zhucheng_old');
              game.log(player, '将', result.cards, '置于侠客牌上作为<城>');
            }
          },
          intro: {
            content: 'cards',
            onunmark(storage, player) {
              if (storage && storage.length) {
                player.$throw(storage, 1000);
                game.cardsDiscard(storage);
                game.log(storage, '被置入了弃牌堆');
                storage.length = 0;
              }
            }
          }
        },
        qtpz_zhucheng_old1: {
          trigger: { global: 'phaseDrawBegin' },
          //audio:"qtpz_zhucheng_old",
          content() {
            'step 0';
            game.playJY(['qtpz_zhucheng_old1', 'qtpz_zhucheng_old2', 'qtpz_zhucheng_old3', 'qtpz_zhucheng_old4'].randomGet());
            event.cards = get.cards(2);
            var cards = event.cards;
            var content = ['牌堆顶的两张牌', cards];
            game.log(player, '观看了牌堆顶的两张牌');
            player.chooseControl('ok').set('dialog', content);
            'step 1';
            player.storage.qtpz_zhucheng_old = player.storage.qtpz_zhucheng_old.concat(event.cards);
            'step 2';
            player.
            chooseCardButton(player.storage.qtpz_zhucheng_old, true, '将顺序将牌置于牌堆顶(先选择的在上)', 2).
            set('ai', function (button) {
              var player = _status.event.player;
              var target = _status.event.target;
              var cards = player.storage.qtpz_zhucheng_old.slice(0);
              var top = [];
              //ai 塞判定牌 观星AI
              var judges = target.getCards('j');
              var stopped = false;
              var num = get.attitude(player, target) > 0 ? 1 : -1;
              cards.sort(function (a, b) {
                return (get.value(b, target) - get.value(a, target)) * num;
              });
              //cards=top.concat(cards);
              var number = cards.find(button.link);
              return 15 - number;
            }).
            set('target', trigger.player);
            'step 3';
            var cards = result.links.slice(0);
            while (cards.length) {
              var card = cards.pop();
              ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
              player.storage.qtpz_zhucheng_old.remove(card);
            }
            'step 4';
            player.markSkill('qtpz_zhucheng_old');
          }
        },
        qtpz_xuezhuang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'dying' },
          forced: true,
          content() {
            player.draw();
          }
        },
        qtpz_handao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { source: 'damageBegin1' },
          filter(event, player) {
            if (!event.notLink()) return false;
            if (!event.card || event.card.name != 'sha') return false;
            if (!event.player.countCards('h')) return true;
            if (!event.player.getEquip(2)) return true;
            if (event.player.hp == 1) return true;
            return false;
          },
          forced: true,
          content() {
            let count = 0;
            if (!trigger.player.countCards('h')) count += 1;
            if (!trigger.player.getEquip(2)) count += 1;
            if (trigger.player.hp <= 1) count += 1;
            if (count >= 1) {
              player.say(['青海湖西藏之巅,老祖立地顶天!', '一把血刀在手,荡平武林中原!'].randomGet());
            }
            if (count >= 3) {
              player.$fullscreenpop('一刀封喉!', 'fire');
            }
            trigger.num += count;
          },
          ai: {
            effect: {
              player(card, player, target, current, isLink) {
                if (!target) return;
                if (isLink) return;
                if (card.name != 'sha') return;
                if (
                target.hasSkillTag('filterDamage', null, {
                  player: player,
                  card: card
                }))

                return;
                let count = 0;
                if (!target.countCards('h')) count += 1;
                if (!target.getEquip(2)) count += 1;
                if (target.hp <= 1) count += 1;
                return [1, 0, 1, -1.5 * count];
              }
            }
          }
        },
        qtpz_hanzhan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 1,
          enable: 'phaseUse',
          prompt: '失去一点体力或体力上限',
          content() {
            'step 0';
            player.chooseControl('失去体力', '失去一点体力上限', function (event, player) {
              if (get.effect(player, { name: 'losehp' }, player, player) > 0) return '失去体力';
              if (player.hp == player.maxHp) return '失去体力';
              if (player.hp < player.maxHp - 1 || player.hp <= 2) return '失去一点体力上限';
              return '失去体力';
            });
            'step 1';
            if (result.control == '失去体力') {
              player.loseHp();
            } else {
              player.loseMaxHp();
            }
          },
          group: ['qtpz_hanzhan_discard'],
          subSkill: {
            discard: {
              audio: 'qtpz_hanzhan',
              trigger: { player: ['loseHpEnd', 'loseMaxHpEnd'] },
              filter(event, player) {
                return game.players.some((q) => q.countCards('he'));
              },
              logTarget(event, player) {
                return game.players.filter((q) => q.countCards('he'));
              }, //QQQ
              prompt2: '每当你失去一点体力或失去一点体力上限后你可以令其他角色弃置一张牌.',
              check(event, player) {
                var targets = lib.skill.qtpz_hanzhan_discard.logTarget(event, player);
                var num = 0;
                for (var target of targets) {
                  var att = get.attitude(player, target);
                  num += att > 0 ? -1 : 1;
                }
                return num > 0;
              },
              content() {
                var targets = lib.skill.qtpz_hanzhan_discard.logTarget(trigger, player);
                for (var target of targets) {
                  target.chooseToDiscard(1, 'he', true);
                }
              }
            }
          },
          ai: {
            maihp: true,
            effect(card, player, target) {
              if (get.tag(card, 'loseHp')) {
                if (target.hp <= 1) return;
                var targets = lib.skill.qtpz_hanzhan_discard.logTarget(event, player);
                var num = 0;
                for (var target of targets) {
                  var att = get.attitude(player, target);
                  num += num > 0 ? -1 : 1;
                }
                if (num >= 3) return [1, 2];
              }
            },
            result: {
              player(player) {
                if (get.effect(player, { name: 'losehp' }, player, player) > 0) return 1;
                return 0;
              }
            }
          }
        },
        qtpz_shuixiang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCardToPlayered' },
          check(event, player) {
            var num2 = get.effect(event.target, event.card, player, player);
            var num3 = get.effect(event.target, { name: 'guohe_copy' }, player, player);
            return num3 > num2;
          },
          logTarget: 'target',
          filter(event, player) {
            if (!event.target.countDiscardableCards(event.target, 'hej')) return false;
            const type = get.type(event.card);
            return type == 'trick' || type == 'delay';
          },
          content() {
            trigger.parent.excluded.add(trigger.target);
            trigger.target.discardPlayerCard('hej', trigger.target, true);
          }
        },
        qtpz_libing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'equipEnd' },
          filter(event, card, player) {
            if (get.subtype(event.card) != 'equip1') return false;
            return event.player.hasUseTarget({ name: 'sha' });
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('qtpz_libing', trigger.player), '令其视为对其攻击范围内由你选择的另一名角色使用一张杀,其以此法使用的杀不计入回合内次数.', function (card, player, target) {
              var trigger = _status.event.getTrigger();
              return trigger.player.canUse({ name: 'sha' }, target);
            }).
            set('ai', function (target) {
              var trigger = _status.event.getTrigger();
              return get.effect(
                target,
                {
                  name: 'sha'
                },
                trigger.player,
                _status.event.player
              );
            });
            'step 1';
            if (result.targets?.length) {
              player.line2([trigger.player, result.targets[0]]);
              trigger.player.useCard(
                {
                  name: 'sha'
                },
                result.targets[0],
                false
              ).animate = false;
            }
          },
          ai: {
            threaten(player, target) {
              return 1.6;
            }
          }
        },
        qtpz_shujia: {
          trigger: { source: 'damageSource' },
          filter(event, player) {
            if (!event.card || event.card.name != 'sha') return false;
            return event.player.isIn() && event.player.getEquip(2);
          },
          check(event, player) {
            var bool = get.attitude(player, event.player) <= 0;
            var togain = event.player.getEquip(2);
            var value = get.equipValue(togain, event.player);
            if (bool && value > 0) return true;
            if (!bool && value <= 0) return true;
            return false;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          logTarget: 'player',
          content() {
            var equip = trigger.player.getEquip(2);
            player.gain(equip, trigger.player, 'log', 'give', 'bySelf');
          }
        },
        qtpz_xiadao: {
          logTarget: 'source',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'damageSource' },
          filter(event, player) {
            if (!event.source || !event.source.isIn() || !event.player.isIn()) return false;
            if (event.source == player) return false;
            return event.num > 0 && player.canCompare(event.source);
          },
          check(event, player) {
            return get.attitude(player, event.player) > 0 && get.attitude(player, event.source) < 0 && player.countCards('h') > 1;
          },
          content() {
            'step 0';
            player.chooseToCompare(trigger.source);
            'step 1';
            if (result && result.num1 > result.num2) {
              if (get.position(result.player) == 'd') {
                player.line(trigger.player, 'fire');
                trigger.player.gain(result.player, player, 'gain2', 'log');
              }
            } else if (result && result.num1 < result.num2) {
              if (get.position(result.target) == 'd') {
                player.line(trigger.player, 'fire');
                trigger.player.gain(result.target, player, 'gain2', 'log');
              }
            }
          }
        },
        qtpz_shuangdao: {
          mod: {
            cardUsable(card, player, num) {
              if (card.name == 'sha') return num + 1;
            }
          },
          init(player, skill) {
            player.storage[skill] = false;
          },
          onremove(player, skill) {
            if (player.storage[skill] === true) {
              player.storage[skill] = false;
              player.expandedSlots['equip1'] -= 1;
              player.$syncExpand();
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'equipBefore' },
          forced: true,
          filter(event, player) {
            if (player.storage.qtpz_shuangdao === true) {
              return false;
            }
            //if(event.isequipx) return false;
            var info = get.info(event.card, false);
            var current = player.getCards('e', function (card) {
              if (info.customSwap) return info.customSwap(card);
              return get.subtype(card, false) == info.subtype;
            });
            if (!current.length) return false;
            return get.subtype(event.card) == 'equip1';
          },
          content() {
            player.expandEquip('equip1');
            player.storage.qtpz_shuangdao = true;
            //trigger.setContent('jy_equip');
            //if(!trigger.maxCount) trigger.maxCount=1;
            //trigger.maxCount++;
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                if (get.subtype(card) == 'equip1' && !get.cardtag(card, 'gifts')) return [1, 3];
              }
            },
            threaten: 1
          }
        }
      },
      translate: {
        //其他篇章-标记
        qtpz_xie_hetieshou: '邪何铁手',
        qtpz_hts_dushe: '毒蛇',
        qtpz_hts_dushe_info: '拥有此蛊的角色成为【毒杀】、毒药牌的目标后,随机失去一张牌.',
        qtpz_hts_xiezi: '蝎子',
        qtpz_hts_xiezi_info: '所有角色对拥有此蛊的角色使用【杀】的额定次数+1.',
        qtpz_hts_wugong: '蜈蚣',
        qtpz_hts_wugong_info: '所有角色出牌阶段限一次,可视为对拥有此蛊的角色使用一张任意普通锦囊牌.',
        qtpz_hts_chanchu: '蟾蜍',
        qtpz_hts_chanchu_info: '蟾蜍拥有此蛊的角色获得牌后,若手牌数大于2X,需将手牌弃置至2X张(X为其体力值).',
        qtpz_hts_bihu: '壁虎',
        qtpz_hts_bihu_info: '拥有此蛊的其他角色每回合首次成为♥️️非装备牌的目标后,失去一点体力.',
        qtpz_wudu: '五毒',
        qtpz_wudu_info: '你拥有毒蛇、蝎子、蜈蚣、蟾蜍、壁虎五只蛊.出牌阶段,你可以收回场上所有的蛊(若无则跳过此步),对其他角色下蛊(每名角色限下一只蛊,且不能重复下相同的蛊).<p>毒蛇:拥有此蛊的角色成为【毒杀】、毒药牌的目标后,随机弃置一张牌.<p>蝎子:所有角色对拥有此蛊的角色使用【杀】的额定次数+1.<p>蜈蚣:所有角色出牌阶段限一次,可视为对拥有此蛊的角色使用一张任意普通锦囊牌.<p>蟾蜍:拥有此蛊的角色获得牌后,若手牌数大于2X,需将手牌弃置至2X张(X为其体力值).<p>壁虎:拥有此蛊的其他角色每回合首次成为♥️️非装备牌的目标后,失去一点体力.',
        qtpz_wugou: '蜈钩',
        qtpz_wugou_info: '<b>锁定技,</b>废除你的武器栏,你的武器视为【毒杀】;出牌阶段开始时,你需选择本回合内你的攻击范围及对应的技能.<p>1:你使用的【杀】不能被抵消;<p>2:你使用【杀】造成伤害后,可以获得目标一张装备牌;<p>3:你使用【杀】造成伤害后,可以清除目标被下蛊的记录.',
        qtpz_qichangfa: '戚长发',
        qtpz_hengjiang: '横江',
        qtpz_hengjiang_info: '出牌阶段限一次,你可弃置一张♠️️牌,令X(X至多为3)名角色横置,你封印(不能使用或打出)其X张(不足则全部封印)未被其他技能封印过的手牌.',
        qtpz_hengjiang2: '横江2',
        qtpz_hengjiang2_info: '出牌阶段限一次,你可弃置一张♠️️牌,令X(X至多为3)名角色横置,你封印(不能使用或打出)其X张(不足则全部封印)未被其他技能封印过的手牌.',
        qtpz_juelu: '绝路',
        qtpz_juelu_info: '一名角色解除连环状态后,若其有因【横江】封印的手牌,你可以随机获得其一张未因【横江】封印的手牌,解封其因<横江>封印的手牌.',
        qtpz_juelu2: '绝路2',
        qtpz_juelu2_info: '一名角色解除连环状态后,若其有因【横江】封印的手牌,你可以随机获得其一张未因【横江】封印的手牌,解封其因<横江>封印的手牌.',
        qtpz_qishi: '欺师',
        qtpz_qishi_info: '<b>限定技.</b>你可以令一名获得了帮派技的角色失去之,你获得你的帮派技(你依此法获得的帮派技限发动三次).',
        qtpz_qishi2: '欺师2',
        qtpz_qishi2_info: '<b>限定技.</b>你可以令一名获得了帮派技的角色失去之,你获得你的帮派技(你依此法获得的帮派技限发动三次).',
        qtpz_qianbing: '遣兵',
        qtpz_qianbing_info: '一名角色的回合开始时,若场上的<遣>:少于2枚,你可以令任意一名角色获得之;等于2枚,你可以移动一枚<遣>.其他角色使用牌指定目标后,若目标与其之间(按最短路径)的角色有<遣>,你可以选择一项:令其弃置X*Y张牌;或你摸X*Y张牌(X为此牌满足上述条件的目标数,Y为其与目标之间拥有<遣>的角色数).',
        qtpz_bixue: '碧血',
        qtpz_bixue_info: '你受到伤害后,可以摸Z张牌(Z为存活的护法数,国战则改为与你同势力的角色数).',
        qtpz_zhonghun: '忠魂',
        qtpz_zhonghun_info: '你死亡时,可以令一名有<遣>的角色获得〖丹心〗.',
        qtpz_qianbing2: '遣兵2',
        qtpz_qianbing2_info: 'undefined',
        qtpz_jue_yuanchonghuan: '绝袁崇焕',
        qtpz_dingbusandingbusi: '丁不三丁不四',
        qtpz_shadao: '杀道',
        qtpz_shadao_info: '<b>转换技.</b>出牌阶段限一次,阴:你可以获得任意名已损失体力值之和为3的角色区域内各1张牌;阳:你可以对任意名体力值之和为4的角色各造成1点伤害.',
        qtpz_guijue: '诡谲',
        qtpz_guijue_info: '其他角色因弃置失去牌后,若此时〖杀道〗的状态为阴/阳,则你可以获得这些牌中点数为3/4的倍数的牌.',
        qtpz_yandu: '燕妒',
        qtpz_yandu_info: '出牌阶段限一次,你可以选择一项:若你装备区里有牌,你令一名其他角色弃置其装备区里所有点数大于X的装备(X为你装备牌中最大的点数);若你有手牌,你令一名其他角色弃置所有点数大于X的手牌(X为你手牌中最大的点数).',
        qtpz_shexing: '蛇行',
        qtpz_shexing_info: '你的回合内,你对体力值的奇偶性与你一致的其他角色使用牌无距离和次数限制.',
        qtpz_yuanchengzhiwenqingqing: '袁承志温青青',
        qtpz_fanli: '范蠡',
        qtpz_shangsheng: '商圣',
        qtpz_shangsheng_info: '出牌阶段限一次,你可以将一张装备牌置入一名其他角色的装备区里(不可替换原装备),其需交给你任意张点数之和不小于该装备牌点数的手牌,若手牌不足,则其需将所有手牌交给你.',
        qtpz_aibing: '哀兵',
        qtpz_aibing_info: '出牌阶段限次,你可以弃置两张牌,所有 其他角色需依次将装备区里的一张装备牌置入其下家装备区里对应位置(不可替换原装备).无法如此做的角色需弃置一张牌.',
        qtpz_weizhongxian: '魏忠贤',
        qtpz_jiedang: '结党',
        qtpz_jiedang_info: '出牌阶段限一次,你使用有花色的普通锦囊牌后,你可以令你的上家和下家依次选择:将一张与此牌花色相同的手牌当此牌使用(你不能成为此牌的目标);或弃置一张牌,且你可以令其在本局游戏中永久不能再使用该普通锦囊牌.你摸X张牌(X为选择使用牌的角色数).',
        qtpz_shanchao: '擅政',
        qtpz_shanchao_info: '其他角色的弃牌阶段因弃置而失去手牌时,你可以观看其手牌并代替其选择需弃置的手牌.',
        qtpz_xishi: '西施',
        qtpz_huoxin: '祸心',
        qtpz_huoxin_info: '出牌阶段限一次,你可以将一名其他角色装备区里的装备牌置于其侠客牌上.其下个回合出牌阶段开始时,若其侠客牌上有以此法置入的装备牌,其需将其中一张装备牌当<酒>使用,获得其余装备牌.',
        qtpz_chenyu: '沉鱼',
        qtpz_chenyu_info: '结束阶段开始时,你可以亮出牌堆顶的三张牌,获得其中你手牌中没有的花色的牌.',
        qtpz_shipotian: '石破天',
        qtpz_qijing_old: '奇经',
        qtpz_qijing_old_info: '出牌阶段限一次,你可按如下规则改变你手牌的花色:♥️️视为♠️️,♠️️视为♥️️,♣️️视为♦️️,♦️️视为♣️️(仅本回合有效).',
        qtpz_qijing: '奇经',
        qtpz_qijing_info: '出牌阶段限一次,你可以选择一项:<p>1.令你的♥️️手牌视为♠️️;<p>2.令你的♠️️手牌视为♥️️;<p>3.令你的♣️️手牌视为♦️️;<p>4.令你的♦️️手牌视为♣️️.<p>(仅本回合有效)',
        qtpz_chiyan: '赤炎',
        qtpz_chiyan_info: '<b>锁定技,</b>你造成伤害后,获得等同于伤害值数量的<阳>标记;你受到伤害后,获得同于伤害值数量的<阴>标记.出牌阶段限一次,你可以选择:弃置一枚<阳>标记,随机将红色手牌补至与黑色手牌相等;或弃置一枚<阴>标记,随机将黑色手牌补至与红色手牌相等.',
        qtpz_tuimeng: '推盟',
        qtpz_tuimeng_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b>其他明势力角色出牌阶段限一次,其造成伤害后,可交给你一张牌并将伤害来源改为你.';
          return '<b>盟主技.</b>其他魏势力角色出牌阶段限一次,其造成伤害后,可交给你一张牌并将伤害来源改为你.';
        }(),
        //"qtpz_tuimeng_info":"<b>盟主技.</b>其他XXX势力角色出牌阶段限一次,其造成伤害后,可交给你一张牌并将伤害来源改为你.",
        qtpz_huyidao: '胡一刀',
        qtpz_tianyou: '天佑',
        qtpz_tianyou_info: '当你死亡时,你将一张牌置于牌堆顶前7张长任意位置,称为<闯王宝藏>,因摸牌获得此牌的角色按此牌类別执行:基本牌,回复1点体力;非基本牌,摸2张牌.',
        qtpz_aozhan: '鏖战',
        qtpz_aozhan_info: '出牌阶段限一次,你选择一名其他角色,你令你和该角色中手牌数较少的角色手牌至与対方手牌相等,或令手牌数较多的角色將手牌弃置至与対方相等,你和该角色依次视为対対方使用一张【比武】.',
        qtpz_luobing: '骆冰',
        qtpz_xiadao: '侠盗',
        qtpz_xiadao_info: '一名角色角色受到令一名其他角色的伤害后,你可以与伤害来源拼点,将拼点数大的牌交给该角色.',
        qtpz_shuangdao: '双刀',
        qtpz_jueshi: '<img style=width:100px height:25px src=extension/金庸群侠传/image/title/jy_title_jueshi.jpg>',
        qtpz_shuangdao_info: '你可以额外装备一张武器牌;出牌阶段,你可以额外使用一张【杀】.',
        qtpz_shujianenchoulu: '<img style=width:100px height:25px src=extension/金庸群侠传/image/title/jy_title_shujian.jpg>',
        qtpz_feihuxilie: '<img style=width:100px height:25px src=extension/金庸群侠传/image/title/jy_title_feihu.jpg>',
        qtpz_xiakexing: '<img style=width:100px height:25px src=extension/金庸群侠传/image/title/jy_title_xiakexing.jpg>',
        qtpz_yuenvjian: '<img style=width:100px height:25px src=extension/金庸群侠传/image/title/jy_title_yuenujian.jpg>',
        qtpz_bixuejian: '<img style=width:100px height:25px src=extension/金庸群侠传/image/title/jy_title_bixuejian.jpg>',
        qtpz_lianchengjue: '<img style=width:100px height:25px src=extension/金庸群侠传/image/title/jy_title_lianchengjue.jpg>',
        qtpz_baimaxiaoxifeng: '<img style=width:100px height:25px src=extension/金庸群侠传/image/title/jy_title_baima.jpg>',
        qtpz_lintuisi: '凌退思',
        qtpz_duxin: '黩刑',
        qtpz_duxin_info: '出牌阶段,你可以弃置一张手牌,令一名有装备牌的其他角色选择一项:1、交给你其装备区里的一张装备牌;2、横置其置侠客牌.',
        qtpz_cuidu: '淬毒',
        qtpz_cuidu_info: '结束阶段开始时,若你手牌只有一种花色,你可以展示之并对一名其他角色造成一点蛊毒伤害,若其执行过〖黩刑〗第2项且未执行过第1项,此伤害+1.',
        qtpz_duoergun: '多尔衮',
        qtpz_fuzheng: '辅政',
        qtpz_fuzheng_info: '一名角色出牌阶段结束时,若其其此阶段使用过三张不同类别的牌三张类别相同的牌,你令其摸两张牌,执行一个额外的的出牌阶段.',
        qtpz_poguan: '破关',
        qtpz_poguan_info: '一名角色于每轮执行额外的出牌阶段时,你可以令其此阶段使用的杀的额外次数+X(X为其本轮执行的额外出牌阶段).',
        qtpz_zhangzhaozhong: lib.config.extension_金庸群侠传_jiexiantupo ? '界张召重' : '张召重',
        qtpz_pantou: '叛投',
        qtpz_pantou_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '出牌阶段,你可以将你手牌中的一张装备牌置于一名其他角色装备区里(不得替换原装备),其发动此装备的技能时,你摸两张牌,直到其失去此装备牌.';
          return '出牌阶段,你可以将你手牌中的一张装备牌置于一名其他角色装备区里(不得替换原装备),其发动此装备的技能时,你摸一张牌,直到其失去此装备牌.';
        }(),
        qtpz_zhuiqin: '追擒',
        qtpz_zhuiqin_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '你使用【杀】指定目标时,你可以令任意名横置的角色成为此牌的目标.<p>你使用杀造成伤害后,可以获得目标装备区里的一张装备牌.';
          return '你使用【杀】指定目标时,你可以令任意名横置的角色成为此牌的目标.<p>你使用【杀】结束后,你可以令受到此牌伤害的角色横置侠客牌.';
        }(),
        qtpz_niujinxing: '牛金星',
        qtpz_quanjing: '劝进',
        qtpz_quanjing_info: '一名角色回合开始前,若其装备牌有牌并且其手牌数大于其体力值,你可以令其摸一张牌.',
        qtpz_channi: '馋逆',
        qtpz_channi_info: '除主公外的其他角色回合开始时,若其手牌比主公多,你可以弃置一张牌并弃置其X(X为其与主公手牌数之差)张牌.除主公外的其他角色回合结束时,若其此回合造成的伤害比本轮主公造成的伤害多,你可以弃置1张牌并对其造成1点伤害.',
        qtpz_lizicheng: '李自成',
        qtpz_mubing: '募兵',
        qtpz_mubing_info: '其他角色弃牌阶段开始时,其可以交给你一张♦️️牌,你跳过弃牌阶段.',
        qtpz_juyi: '举义',
        qtpz_juyi_info: '<b>觉醒技,</b>准备阶段开始时,若你的手牌为全场最多.你减一点体力上限,随机使用一张装备牌,获得技能〖远征〗.',
        qtpz_yuanzheng: '远征',
        qtpz_yuanzheng_info: '你可以将一张♦️️手牌当【妙手空空】使用.<b>锁定技.</b>你与回合内每使用一张普通锦囊牌,你的进攻距离加1.',
        qtpz_juntian: '均田',
        qtpz_juntian_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技,</b>你于弃牌阶段弃置的红色牌可以交给其他任意列国势力角色.';
          return '<b>盟主技,</b>你于弃牌阶段弃置的红色牌可以交给其他任意群雄势力角色.';
        }(),
        //"qtpz_juntian_info":"<b>盟主技,</b>你于弃牌阶段弃置的红色牌可以交给其他任意XXX势力角色.",
        xajh_yucanghai: '余沧海',
        xajh_cuixin: '摧心',
        xajh_cuixin_info: '出牌阶段限一次,你可以弃置一张♥️️牌,若如此做,你可以弃置一名角色一张手牌,你可以重复此流程,直到你依此法弃置其♥️️手牌或其没有手牌为止.',
        xajh_bianlian: '变脸',
        xajh_bianlian_info: '回合阶段开始时,你可以选择此回合拥有〖摧心〗或〖索袖〗,直到回合结束.',
        xajh_suoxiu: '索袖',
        xajh_suoxiu_info: '出牌阶段结束时,若你此回合没有造成伤害,你可以横置至多两名角色并弃置其各一张牌.',
        xajh_miemen: '灭门',
        xajh_miemen_info: '结束阶段开始时,你可以对没有手牌的任意名角色造成1点火焰伤害.',
        qtpz_wangchengen: '王承恩',
        qtpz_kumeng: '哭梦',
        qtpz_kumeng2: '哭梦',
        qtpz_kumeng_info: '每回合限一次,一名角色于摸牌阶段外获得牌后,你可以选择一项:1.令其摸等量的牌,其失去一点体力,若其以此法摸超过三张牌,你失去一点体力.2.令其弃置这些牌,若其已受伤则其回复一点体力.',
        qtpz_kumeng2_info: '出牌阶段限一次,你可以选择一名有手牌的角色,你选择一项:1.令其失去一半的体力值(向上取整),将手牌数量加倍;2.将体力值回复一倍,其弃置一半手牌(向下取整).',
        qtpz_xunzhu: '殉主',
        qtpz_xunzhu_info: '<b>锁定技.</b>当前主公进入濒死状态时,你弃置所有的牌.当前主公回复体力后你摸两张牌.',
        qtpz_muzhuolun: '木卓伦',
        qtpz_fuyu: '负隅',
        qtpz_fuyu_backup: '负隅',
        qtpz_fuyu_info: '每当你需要使用或打出基本牌时,你可以弃置你的手牌,视为使用或打出了此牌.',
        qtpz_chengren: '成仁',
        qtpz_chengren_info: '其他角色(每名角色每回合限一次)受到锦囊牌的伤害时,你可以取消此次伤害,若此牌为普通锦囊牌,你成为此牌的目标(若你已是此牌的目标,则额外结算一次).',
        qtpz_shayu: '铩羽',
        qtpz_shayu_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技,</b>你受到锦囊牌的伤害后,其他列国势力角色可以令你摸一张牌,你可以将摸到的牌当【比武】使用.';
          return '<b>盟主技,</b>你受到锦囊牌的伤害后,其他群雄势力角色可以令你摸一张牌,你可以将摸到的牌当【比武】使用.';
        }(),
        //"qtpz_shayu_info":"<b>盟主技,</b>你受到锦囊牌的伤害后,其他XXX势力角色可以令你摸一张牌,你可以将摸到的牌当<比武>使用.",
        xajh_yilin: '仪琳',
        xajh_jiecheng: '竭诚',
        xajh_jiecheng_info: '一名男性角色的摸牌阶段开始时,你可以弃置任意张牌,其多摸等量的牌.',
        xajh_fanxin: '梵心',
        xajh_fanxin_info: '<b>锁定技,</b>每当你的一张♥️️牌被弃置后,你摸一张牌.',
        xajh_qiyuan: '祈愿',
        xajh_qiyuan_info: '一名角色判定时,你可以亮出牌堆顶三张牌并选择一张♥️️牌代替判定牌或获得之,你弃置未依此法选择的牌.',
        qtpz_chenjialuo: '陈家洛',
        qtpz_mangxin: '盲信',
        qtpz_mangxin_info: '出牌阶段开始前,你可以令一名其他角色声明一张锦囊牌或基本牌,你将牌堆顶的一张牌当此牌使用,若此牌与牌堆顶的牌类型不同,你失去一点体力.',
        qtpz_yongzhu: '拥主',
        qtpz_yongzhu_info: '主公的回合开始时,你可以令至多两名攻击范围内包含主公的角色(包含主公)摸一张牌.',
        qtpz_yiqi: '义旗',
        qtpz_yiqi_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '盟主技.其他清势力角色回复体力后,其可以令你摸一张牌.';
          return '盟主技.其他蜀势力角色回复体力后,其可以令你摸一张牌.';
        }(),
        //"qtpz_yiqi_info":"盟主技.其他XXX势力角色回复体力后,其可以令你摸一张牌.",
        qtpz_huoayi: '霍阿伊',
        qtpz_chifa: '笞罚',
        qtpz_chifa_info: '每当一名其他角色失去装备区里的一张牌时,你可以选择一项:1视为对其使用一张【杀】.2,令其弃置一张牌.',
        qtpz_aobing: '鏖兵',
        qtpz_aobing_info: '<b>限定技,</b>出牌阶段,你可以弃三张不同类别的牌并选择一名其他角色弃置所有手牌.若如此做,视为其对你选择的至多三名角色使用了一张【比武】.',
        qtpz_dindian: '丁典',
        qtpz_zhengu: '铮骨',
        qtpz_zhengu_info: '当你的牌被其他角色获得或弃置前,你可以与其拼点,若你赢则取消之.',
        qtpz_huoqingtong: '霍青桐',
        qtpz_nagong: '纳贡',
        qtpz_nagong_info: '每回合限一次,一名角色使用牌指定至少两名角色时,你可以令此牌无效,其摸X(X为此牌指定的目标数).',
        qtpz_chouxiang: '筹饷',
        qtpz_chouxiang_info: '回合结束时,你可以将一张牌当【开仓放粮】使用(此牌仅指定你和已受伤角色为目标).',
        qtpz_zhengchi: '整饬',
        qtpz_zhengchi_info: '<b>限定技.</b>你可以选择至少两名已受伤角色,调整这些角色装备区里的牌.',
        tlbb_daobaifeng: '刀白凤',
        tlbb_chunyuan: '春怨',
        tlbb_chunyuan_info: '一名男性角色的回合结束时,你可以摸X张牌(X为其本回合满足以下项数).1.其使用过三种类别的牌.2.其使用过牌指定过其他女性角色为唯一目标.3.其获得过其他女性角色的牌或其他女性角色获得其区域的牌.',
        tlbb_jimie: '寂灭',
        tlbb_jimie_info: '<b>限定技,</b>出牌阶段,你可以展示一张手牌并声明该牌的花色,你弃置所有非该牌花色的手牌并选择至多X名其他角色(X为你弃置的牌数)弃置所有非该牌花色的手牌.',
        qtpz_xiaxueyi: '夏雪宜',
        qtpz_sheyou: '蛇游',
        qtpz_sheyou_info: '你使用杀指定一名目标后,你可以令你与其之间的所有角色(由你选择顺时针或者逆时针)选择是否弃置一张牌,选择否的角色也成为此杀的目标(若已为此杀目标,则跳过此角色).此杀结算后,你摸X张牌(X为选择弃牌的角色数).',
        qtpz_yuanzhiyi: '袁紫衣',
        qtpz_zishu: '自赎',
        qtpz_zishu_info: '一名角色受到大于一点的伤害时,若你的侠客牌正面朝上,你可以翻面,若如此做,你摸一张牌并防止此次伤害.',
        qtpz_sanshe: '三赦',
        qtpz_sanshe_info: '每局限三次,当有角色受到伤害时,你可以防止此伤害,来源摸一张牌并获得一枚<惩>,目标获得一枚<赦>(每名角色只能拥有一枚同名标记).<p><b>锁定技.</b>有<惩>的角色对有<赦>的角色造成的伤害+1.',
        qtpz_wuchendashi: '无嗔大师',
        qtpz_shenzhang: '神章',
        qtpz_shenzhang_info: '出牌阶段限一次,你选择至多三名角色,依次查看并弃置这些角色各一张花色不同的手牌.其中未能弃牌的角色受到你的一点蛊毒伤害.',
        qtpz_shenzhang_old: '神章',
        qtpz_shenzhang_old_info: '<b>限定技.</b>出牌阶段,你选择至多四名角色,依次查看并弃置这些角色各一张花色不同的手牌.这些未弃牌的角色受到你的一点蛊毒伤害.',
        qtpz_jiegu: '解蛊',
        qtpz_jiegu_info: '一名角色成为【火杀】或【硝磷火弹】的目标时,你可以弃置其两张牌(不足全弃,无牌不弃),此牌对其无效;一名角色受到属性伤害时,你可以令其弃置一张牌,此伤害视为普通伤害.',
        qtpz_jiegu1: '解蛊',
        qtpz_jiegu1_info: '一名角色成为属性伤害类卡牌的目标时,你可以弃置其两张牌(不足全弃,无牌不弃),此牌对其无效;一名角色受到属性伤害时,你可以令其弃置1张牌,此伤害视为普通伤害.',
        qtpz_wenqingqing: '温青青',
        qtpz_jiexiang: '劫饷',
        qtpz_jiexiang_info: '出牌阶段限一次,你可以展示一张手牌并选择一名有手牌 的其他角色,你获得其满足如下条件的所有手牌:与你展示 的牌的点数差的绝对值不超过3的牌.',
        //"qtpz_jiexiang_info":"每回合限一次,其他角色于摸牌阶段外获得牌时,你可以与其拼点.若你赢,你从其获得的牌里获得其中一张牌,若你没赢,其弃置这些牌.",
        qtpz_shenying: '神影',
        qtpz_shenying_info: '<b>锁定技,</b>若你体力值为1且未装备+1坐骑,则其他角色计算与你的距离+1.',
        qtpz_liyuanzhi: '李沅芷',
        qtpz_youlian: '忧怜',
        qtpz_youlian_info: '当一名角色一次性失去至少两张牌后,你可以令其摸一张牌,若其手牌数等于其体力值或体力上限,则你摸一张牌(每回合限一次,若你已受伤则限两次).',
        qtpz_tingxian: '铤险',
        qtpz_tingxian_info: '出牌阶段限一次(若你已受伤则限两次),你可以将所有手牌交给一名其他角色(至少1张).其展示所有手牌,你依次对其使用其中每种花色或属性的【杀】各一张.',
        qtpz_wentailai: lib.config.extension_金庸群侠传_jiexiantupo ? '界文泰来' : '文泰来',
        qtpz_benlei: '奔雷',
        qtpz_benlei2: '奔雷',
        qtpz_benlei2_info: '出牌阶段(限一次),你可以和一名其他角色拼点,若你赢,本回合内你的杀均视为【雷杀】;你使用雷杀指定目标时,若其装备了除【金丝背心】外的防具牌,你可以令此防具视为金丝背心.',
        qtpz_benlei_info: '出牌阶段,你可以和一名其他角色拼点,若你赢,你本回合使用的【杀】均视为🃏、🃏的【雷杀】.',
        qtpz_guhuo: '贾祸',
        qtpz_guhuo_info: '其他角色拼点时,你可以观看其手牌并选择其一张手牌作为拼点牌.若如此做,其可以对你使用一张【杀】.',
        qtpz_yisui: '义随',
        qtpz_yisui_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '每当其他角色失去1点体力后或体力上限发生变化后,你可以与其各摸2张牌.';
          return '每当其他角色失去1点体力后,你可以与其各摸1张牌.';
        }(),
        qtpz_hongniangzi: '红娘子',
        qtpz_qingying: '请缨',
        qtpz_qingying_info: '其他角色于出牌阶段使用【杀】时,你可以弃置一张牌.若弃置的牌为红色,则此【杀】不计入回合内次数;若弃置的牌为黑色,则此杀可以额外指定一名目标.',
        qtpz_jingguo: '巾帼',
        qtpz_jingguo_info: '当有角色使用群体性卡牌时,若此牌的目标包含你,你可以选择:令一名目标随机使用两张装备;或令两名目标各使用一张装备(此技能优先使用空置装备栏对应的装备).',
        qtpz_meiniansheng: '梅念笙',
        qtpz_jianshi: '剑诗',
        qtpz_jianshi_info: '<b>锁定技.</b>你使用的【杀】按点数有以下效果.奇数:无视目标防具;偶数:你使用此牌时,摸1张牌;无点数:无视目标防具,且你使用此牌时摸1张牌.',
        qtpz_guazhan: '寡战',
        qtpz_guazhan_info: '结束阶段开始时,你可以弃置所有手牌(至少1张).若如此做,则视为你使用了一张【杀】.',
        qtpz_yizhen: '遗珍',
        qtpz_yizhen_info: '<b>限定技.</b>当你脱离濒死状态后,你令一名此状态对你使用过【九花玉露丸】的角色获得技能〖神照〗.',
        qtpz_shenzhao: '神照',
        qtpz_shenzhao_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '回合开始时,你可以将手牌补至体力上限.';
          return '回合开始时,你可以将手牌补至体力值.';
        }(),
        qtpz_diyun: lib.config.extension_金庸群侠传_jiexiantupo ? '界狄云' : '狄云',
        qtpz_hengdao: '横刀',
        qtpz_hengdao_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '当你使用【杀】指定目标时,若你:没有装备武器牌,可以弃置目标一张牌;装备了武器牌,可以弃置目标所有区域各一张牌.';
          return '当你使用【杀】指定目标时,若你装备区里有武器牌,你可以弃置目标一张牌.';
        }(),
        qtpz_kuiyi: '馈遗',
        qtpz_kuiyi_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b>每名其他列国势力角色出牌阶段限一次,其可以令你随机使用一张装备牌.';
          return '<b>盟主技.</b>每名其他蜀势力角色出牌阶段限一次,其可以令你随机使用一张装备牌.';
        }(),
        //"qtpz_kuiyi_info":"<b>盟主技.</b>每名其他XXX势力角色出牌阶段限一次,其可以令你随机使用一张装备牌.",
        qtpz_kuiyi2: '馈遗',
        qtpz_kuiyi2_info: '',
        qtpz_sheer1: '设饵',
        qtpz_sheer1_info: '',
        qtpz_sheer: '设饵',
        qtpz_sheer_info: '出牌阶段限三次,你可以记录一名角色一个未被记录过的装备栏.其他角色令除其以外的角色失去装备栏里的装备牌后,你可以移除一枚记录了此装备栏的标记,令其失去1点体力并弃置2张牌.',
        qtpz_diyuntishi: '提示',
        qtpz_diyuntishi_info: '每当你失去一张装备牌,可以摸两张牌',
        qtpz_pingasi: '平阿四',
        qtpz_duanbi: '断臂',
        qtpz_duanbi_info: '<b>限定技.</b>一名角色进入濒死状态时,你可以废除你至多两个装备栏并令其回复等量的体力.',
        qtpz_yusi: '育嗣',
        qtpz_yusi_info: '<b>锁定技.</b>你〖断臂〗选择的角色摸牌阶段多摸X张牌(X为你废除的装备栏数量).',
        qtpz_duwu: '督武',
        qtpz_duwu_info: '其他角色回合结束时,若其未于此回合使用过【杀】.你可以令其摸一张牌并展示之,若此牌为【杀】,其可以使用之.',
        qtpz_songxiance: '宋献策',
        qtpz_yaochen: '谣谶',
        qtpz_yaochen_info: '一名角色回合结束阶段开始时,你可以将一张此回合因其使用而进入弃牌堆的牌置于牌堆顶.',
        qtpz_fuji: '扶乩',
        qtpz_fuji_info: '准备阶段,你可以观看牌堆顶1张牌,并将此牌置于牌堆顶或牌堆底.若如此做,你可以将一张手牌当此牌使用.',
        qtpz_yandaping: '言达平',
        qtpz_shandou_info: '出牌阶段限一次,你可以获得1张宝物牌和至多2张非宝物牌,并将这些牌随机扣置于处理区,令等量名角色按你选择的顺序依次获得其中1张牌.最后,未依此法获得宝物牌的角色分别视为对依此法获得宝物牌的角色使用一张【比武】.',
        qtpz_shandou: '煽斗',
        qtpz_juequ: '攫取',
        qtpz_juequ_info: '出牌阶段限一次,你可以记录一个花色和一名角色(若有至少1名角色死于〖煽斗〗,可额外记录一个花色;若有至少2名角色死于〖煽斗〗,可额外记录1名角色;记录仅你知道;下回合开始时清除记录).你记录角色的各个区域和侠客牌上首次进入你记录花色的牌时,你可以获得之.',
        qtpz_jue_diyun: '绝狄云',
        qtpz_yinian: '一念',
        qtpz_yinian_info: '<b>转换技.</b>游戏开始时可自选阴阳状态.回合开始时,势力切换为:阳:绝,摸牌阶段,你可少摸一张牌,对一名角色发动〖行侠〗;阴:邪,本回合内视为拥有〖魔刀〗,使用杀时可弃置任意张牌并额外指定等量目标.',
        qtpz_ruzhao: '入照',
        qtpz_ruzhao_info: '回合结束时,你可以弃置一半(向上取整)的手牌,转换〖一念〗技能状态;<b>锁定技,</b>每当你失去最后的手牌后,可将手牌补至体力上限+护甲值.',
        qtpz_ruzhao_lose: '入照②',
        qtpz_ruzhao_lose_info: '<b>锁定技,</b>每当你失去最后的手牌后,可将手牌补至体力上限+护甲值.',
        qtpz_xueren: '血刃',
        qtpz_xueren_info: '<b>锁定技.</b>你造成伤害后,若此时你是:绝势力,你失去所有护甲,令至多等量名角色各摸一张牌;邪势力,你获得一点护甲.',
        qtpz_xueren_jue: '绝',
        qtpz_xueren_jue_info: '<b>锁定技.</b>你造成伤害后,你失去所有护甲,令至多等量名角色各摸一张牌;',
        qtpz_xueren_xie: '邪',
        qtpz_xueren_xie_info: '<b>锁定技.</b>你造成伤害后,你获得一点护甲.',
        qtpz_hufei: '胡斐',
        qtpz_anming: '安民',
        qtpz_anming_info: '每轮限一次,一名角色装备区置入武器牌后,你可以令其攻击范围内的至多两名角色各摸一张牌.',
        qtpz_zangbao: '葬宝',
        qtpz_zangbao_info: '准备阶段开始时,你可以将场上一张红色牌正面向上置于牌堆顶前7张任意位置,称为<宝藏>.一名角色于摸牌阶段获得此牌时,若为♦️️,其摸2张牌;若为♥️️,其回复1点体力.',
        qtpz_zangbao1: '葬宝',
        qtpz_zangbao1_info: '',
        qtpz_shouxian: '守险',
        qtpz_shouxian_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b>其他清势力角色回合结束时,其可以展示牌堆顶2张牌,将其中一张装备牌置入你的装备区(不能替换原装备),其将其余的牌以任意顺序置于牌堆顶或置入弃牌堆.';
          return '<b>盟主技.</b>其他蜀势力角色回合结束时,其可以展示牌堆顶2张牌,将其中一张装备牌置入你的装备区(不能替换原装备),其将其余的牌以任意顺序置于牌堆顶或置入弃牌堆.';
        }(),
        //"qtpz_shouxian_info":"<b>盟主技.</b>其他XXX势力角色回合结束时,其可以展示牌堆顶2张牌,将其中一张装备牌置入你的装备区(不能替换原装备),其将其余的牌以任意顺序置于牌堆顶或置入弃牌堆.",
        qtpz_yuanchengzhi: '袁承志',
        qtpz_dangkou: '荡寇',
        qtpz_dangkou_info: '每回合限一次,当你使用的普通锦囊牌对其他角色结算完后,若此牌没有造成伤害,你可以弃置此牌任意名目标各一张牌.',
        qtpz_jiangmen: '将门',
        qtpz_jiangmen_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b>其他明势力角色出牌阶段开始时,其可以交给你一张锦囊牌,其摸1张牌.';
          return '<b>盟主技.</b>其他吴势力角色出牌阶段开始时,其可以交给你一张锦囊牌,其摸1张牌.';
        }(),
        //"qtpz_jiangmen_info":"<b>盟主技.</b>其他XXX势力角色出牌阶段开始时,其可以交给你一张锦囊牌,其摸1张牌.",
        qtpz_pozhen: '破阵',
        qtpz_pozhen_info: '你使用【杀】对目标造成伤害后,你可以获得一张【见招拆招】.',
        //"qtpz_pozhen_info":"你使用杀对目标造成伤害后,该目标可以选择你攻击范围内另一名不是此杀目标的角色,你对其选择的角色使用此杀.",
        qtpz_xieyanke: '谢烟客',
        qtpz_lingtie: '令铁',
        qtpz_lingtie_info: '回合开始时,若你的<令铁>少于3枚,你将之补至3枚,并为未记录过牌名的<令铁>记录一张各不相同的基本牌或普通锦囊牌的牌名.',
        qtpz_jieyou: '解忧',
        qtpz_jieyou_info: '<b>锁定技.</b>当你成为其他角色使用的黑色普通锦囊牌的目标时,若你没有<令铁>,取消之.',
        qtpz_sunuo1: '夙诺',
        qtpz_sunuo_info: '其他角色的出牌阶段开始时,若其有手牌,你令其将一张手牌当你的一枚<令铁>记录的牌使用,你摸一张牌.',
        qtpz_sunuo: '夙诺',
        qtpz_supu: '苏普',
        qtpz_xianyi: '鲜衣',
        qtpz_xianyi_info: '出牌阶段限一次,你可以使用一张装备牌(不能替换原装备).',
        qtpz_numa: '怒马',
        qtpz_numa_info: '<b>锁定技.</b>你装备区里的防御坐骑牌视为-1坐骑牌;你使用伤害类卡牌时,此牌有X/Y的几率不能被抵消或者响应(X为你距离1以内的其他角色数,Y为存活的角色数)',
        qtpz_qingcang: '擎苍',
        qtpz_qingcang_info: '你使用伤害类卡牌指定目标时,你可以令其中一名目标摸一张牌,若如此做,在此牌对该目标造成伤害后,你获得其全部手牌.',
        qtpz_tieling_old: '令铁',
        qtpz_tieling_old_info: '每名其他角色限一次,其出牌阶段,可令你回复1点体力或摸2张牌,其获得一枚<玄铁令>标记.每局限三次.',
        qtpz_jieyou_old: '解忧',
        qtpz_jieyou_old_info: '<b>锁定技.</b>当你成为获得过<玄铁令>标记的角色使用的黑色牌的目标时,取消之.',
        qtpz_sunuo_old1: '夙诺',
        qtpz_sunuo_old1_info: '',
        qtpz_sunuo_old: '夙诺',
        qtpz_sunuo_old_info: '其他角色出牌阶段,其可移除其<玄铁令>标记并选择未被选择过的一项:获得你装备区里的一张牌;令你将一张手牌当其声明的普通锦囊牌使用;令你对其选择的另一名其他角色造成一点伤害.',
        qtpz_tianguinong: '田归农',
        qtpz_tudu: '涂毒',
        qtpz_tudu_info: '其他角色使用普通【杀】时,你可以令此牌视为【毒杀】,若此杀造成了伤害,你摸一张牌并将一张手牌置于侠客牌上,称为<残图>.',
        qtpz_xingxun: '刑讯',
        qtpz_xingxun_info: '<b>限定技.</b>出牌阶段,若你的侠客牌上有<残图>,你可以令所有其他角色依次将一张手牌当<残图>置于你的侠客牌上(须与<残图>已包含的花色均不相同).否则其受到你的2点伤害.',
        qtpz_xuncai: '徇财',
        qtpz_xuncai_info: '出牌阶段,若你的<残图>有四种花色,你可以展示牌堆顶7张牌,你选择获得其中某个花色的所有牌,并将其余牌和<残图>置入弃牌堆.',
        qtpz_kasili: '喀丝丽',
        qtpz_daogao: '祷告',
        qtpz_daogao_info: '游戏开始时,你将牌堆顶7张牌当<贺兰石>正面向上置于你的侠客牌上.一名角色出牌阶段限一次,其可以用一张手牌替换一张<贺兰石>牌,若其用于替换的牌与其余<贺兰石>牌点数均不同,其摸一张牌,否则其弃置一张牌.',
        qtpz_daogao1: '祷告',
        qtpz_daogao1_info: '',
        qtpz_shenyu: '神谕',
        qtpz_shenyu_info: '出牌阶段开始时,若<贺兰石>牌点数均不同,你可以获得其中的♥️️牌并从牌堆将<贺兰石>牌补至7张,你可以弃置至多三名男性角色装备区里的一张牌.',
        qtpz_huatiegan: '花铁干',
        qtpz_jiaoxie: '缴械',
        qtpz_jiaoxie_info: '<b>限定技.</b>当你进入濒死状态时,你可以弃置你装备区里的所有牌(至少一张),回复2点体力.',
        qtpz_ruxue: '茹血',
        qtpz_ruxue_info: '<b>锁定技,</b>一名角色死亡后,你获得一枚<啖尸>标记.每当你需要使用【九花玉露丸】时,你可以移除一枚<啖尸>标记,视为你使用了此牌.',
        qtpz_guming: '沽名',
        qtpz_guming_info: '<b>觉醒技.</b>准备阶段开始时,若场上有已死亡的角色,且你没有<啖尸>标记,你减一点体力上限并失去〖茹血〗,获得〖盟举〗.',
        qtpz_mengju: '盟举',
        qtpz_mengju_info: '摸牌阶段开始时,你可以改为摸x张牌,若如此做,你此回合的手牌上限为x(x为已死亡的角色数).',
        qtpz_chengbenzhi: '程本直',
        qtpz_yuanbian: '辩冤',
        qtpz_yuanbian_info: '每回合限一次,其他角色使用基本牌或普通锦囊牌指定其他角色为唯一目标后.你可以判定,若为黑色,则取消之;若为红色,你也成为此牌的目标.',
        qtpz_tongzui: '同罪',
        qtpz_tongzui_info: '当一名角色使用牌指定包含你在内的至少两名目标后,你可以令此牌的所有目标失去一点体力.',
        qtpz_ajiu: '阿九',
        qtpz_guoshang: '国殇',
        qtpz_guoshang_info: '<b>锁定技.</b>当你成为♣️️牌的目标时,你摸1张牌.',
        qtpz_fuchao: '覆巢',
        qtpz_fuchao_info: '一名角色使用牌的结算结束后,若有目标受到此牌的伤害,则你可以令未受到此牌伤害的目标各弃一张牌.一名处于负面状态的角色受到伤害/回复体力后,你可以令其他处于负面状态的角色弃置/摸一张牌.',
        qtpz_yuyutong: '余鱼同',
        qtpz_gaifu: '慨赴',
        qtpz_gaifu_info: '出牌阶段限一次,你可以失去一点体力或横置你的侠客牌,选择至多两名其他角色,横置或重置其侠客牌.',
        qtpz_wuxian: '陷误',
        qtpz_wuxian_info: '回合结束时,你可以弃置所有手牌(至少一张),你摸X张牌(X为你已损失的体力值).',
        qtpz_jyliyan: '李岩',
        qtpz_quanzhen: '劝赈',
        qtpz_quanzhen_info: '每轮限一次,一名角色获得牌后,若其手牌数为唯一最多,你可以令其将一张手牌当【开仓放粮】使用,且其不能成为此牌的目标.',
        qtpz_honglve: '鸿略',
        qtpz_honglve_info: '出牌阶段开始时,你可以弃置一张锦囊牌.若此牌为红色,本阶段内你使用【九花玉露丸】时可额外回复一点体内;若为黑色,你本回合内使用黑色牌造成的伤害+1.',
        qtpz_miaorenfeng: '苗人凤',
        qtpz_fengpo: '凤魄',
        qtpz_fengpo_info: '你使用杀指定目标后,你可以弃置一张手牌,若如此做,目标须展示手牌并弃置与你弃置的牌花色相同的所有手牌.',
        qtpz_yujie: '郁结',
        qtpz_yujie_info: '你使用牌造成伤害后,你可以将此牌交给此牌的一名目标,若其手牌大于其体力值,你摸1张牌.',
        qtpz_chenglingsu: '程灵素',
        qtpz_zhidu: '植毒',
        qtpz_zhidu_backup: '植毒',
        qtpz_zhidu_info: '出牌阶段限一次,你可以将一张黑色手牌正面向上置于牌堆前7张任意位置,称为<七心海棠>.<b>锁定技,</b>因摸牌获得<七得海棠>牌的角色受到1点无来源的蛊毒伤害,若此牌名字中含有毒字或为毒药牌,此伤害+1.',
        qtpz_zhidu1: '植毒',
        qtpz_zhidu1_info: '',
        qtpz_xianghun: '香魂',
        qtpz_xianghun_info: '一名角色受到属性伤害后,你可以令其摸1张牌,若为蛊毒伤害,改为摸2张牌.',
        qtpz_zhuyoujian: '朱由检',
        qtpz_zuiji: '罪己',
        qtpz_zuiji_info: '<b>锁定技.</b>每当你使用或打出第四种花色的牌后,你摸2张牌.回合结束时,若你未于本回合摸牌阶段外获得过牌,你须选择一项:失去1点体力;你翻面.',
        qtpz_youqin: '忧勤',
        qtpz_youqin_info: '其他角色出牌阶段开始时,你可以弃置一张手牌,观看其至多X张手牌并使用其中一张牌(X为其体力值).',
        qtpz_gangbi: '刚愎',
        qtpz_gangbi_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b><b>锁定技.</b>当你成为其他明势力角色使用的普通锦囊牌的目标时,取消之并摸1张牌.';
          return '<b>盟主技.</b><b>锁定技.</b>当你成为其他吴势力角色使用的普通锦囊牌的目标时,取消之并摸1张牌.';
        }(),
        //"qtpz_gangbi_info":"<b>盟主技.</b><b>锁定技.</b>当你成为其他XXX势力角色使用的普通锦囊牌的目标时,取消之并摸1张牌.",
        qtpz_wuzixu: '界伍子胥',
        qtpz_zhucheng: '筑城',
        qtpz_zhucheng_info: '一名角色的摸牌阶段开始时,你可以从弃牌堆中随机观看4张牌,从中选择两张牌并置于牌堆顶.<p>一名角色的回合结束时,若牌堆中牌的数量与其回合开始时的数量一样多,你摸一张牌.',
        qtpz_zhucheng_old: '筑城',
        qtpz_zhucheng_old_info: '游戏开始前,共发你8张牌,选4张作为手牌,其余的牌置于侠客牌上,称为<城>.每当一名角色摸牌阶段开始时,你可以观看牌堆顶2张牌,用至多两张<城>,替换其中等量的牌.',
        qtpz_zhucheng_old1: '筑城',
        qtpz_zhucheng_old1_info: '',
        qtpz_xuezhuang: '血状',
        qtpz_xuezhuang_info: '一名角色进入濒死状态时,你可以摸一张牌.',
        qtpz_xuedaolaozhu: '血刀老祖',
        qtpz_handao: '悍刀',
        qtpz_handao_info: '<b>锁定技.</b>你使用杀造成伤害时,目标每满足以下任意一项,此杀伤害+1:体力值为1;没有手牌;没有装备防具牌.',
        qtpz_hanzhan: '酣战',
        qtpz_hanzhan_info: '出牌阶段,你可失去1点体力或减少1点体力上限.每当你失去1点体力或减少1点体力上限后,你可令所有其他角色弃置1张牌.',
        qtpz_shuixiang: '说降',
        qtpz_shuixiang_info: '每当你使用锦囊牌指定目标后,若其区域内有牌,你可以令其弃置其中一张牌,此牌对其无效.',
        qtpz_aqing: '阿青',
        qtpz_libing: '厉兵',
        qtpz_libing_info: '一名角色的装备区里置入一张兵器牌时,你可以令其视为对其攻击范围内由你选择的另一名角色使用一张【杀】.其以此法使用的【杀】不计入回合内次数.',
        qtpz_shujia: '束甲',
        qtpz_shujia_info: '每当你使用杀造成伤害后,若其装备区里有防具牌,你可以获得之.',
        qtpz_hongli: '弘历',
        qtpz_woxuan: '斡旋',
        qtpz_woxuan_info: '出牌阶段开始时,你可选择三名手牌数量各不相同的角色,你令其中手牌数最多和最少的角色将手牌调整至与另一名角色相等,以此法摸牌／弃置牌超过２张的角色失去／回复一点体力.',
        qtpz_chezhou: '掣肘',
        qtpz_chezhou_info: '出牌阶段限一次,你可以弃置一张手牌并对一名攻击范围内有你且装备区里的装备牌比你多的其他角色造成１点伤害.',
        qtpz_tianzun: '天尊',
        qtpz_tianzun_info: '<b>盟主技.</b>当你成为【杀】的目标时,其他清朝角色可代替你成为此牌目标(每名角色每局游戏每种属性的【杀】限一次).',
        qtpz_zhaobanshan: '赵半山',
        qtpz_feisuo: '飞梭',
        qtpz_feisuo_info: '你可以将黑色手牌当<飞燕银梭>使用.',
        qtpz_roudao: '柔道',
        qtpz_roudao_info: '<b>锁定技.</b>每当你失去最后的红色手牌后,你摸一张牌,你重复此流程,直到摸到红色牌为止.',
        qtpz_goujian: '勾践',
        qtpz_taohui: '韬晦',
        qtpz_taohui_info: '<b>锁定技.</b>装备牌不占用你的手牌上限;回合结束阶段开始时,或你成为杀的目标时,若你装备区里没有装备牌,你可以摸一张牌.',
        qtpz_xingguo: '兴国',
        qtpz_xingguo_info: '<b>觉醒技.</b>准备阶段,若你手牌中装备牌数量比其他类别的牌总数更多,你减一点体力上限,回复一点体力,将手牌中的基本牌和锦囊牌分别随机补至与手牌中的装备牌数量相等,获得〖精甲〗.',
        qtpz_jingjia: '精甲',
        qtpz_jingjia_info: '你使用的实体牌结算完后,你可视为合法使用一张此牌描述中含有的牌名(限基本牌或普通锦囊).',
        qtpz_hehongyao: '何红药',
        qtpz_zidao: '自盗',
        qtpz_zidao2: '自盗',
        qtpz_zidao_info: ' 出牌阶段限一次,你可以选择随机获得一张或两张装备牌,并任意分配给其他角色,你记录这些牌的花色.直到你的下个回合开始,每当你受到这些花色的牌造成的伤害后,你需弃置一张牌(每次记录的花色在你的下个回合开始时清除).',
        qtpz_yuandu: '怨毒',
        qtpz_yuandu2: '怨毒',
        qtpz_yuandu_info: '你因弃置失去牌时,你可将其中一张牌当<怨>置于一名没有<怨>的其他角色的侠客牌上.拥有<怨>的角色因弃置失去牌后,若其此次失去的牌中不包含其<怨>牌的花色,其需失去一点体力,移除其<怨>.',
        qtpz_xianyuan: '仙猿',
        qtpz_xianyuan_info: '出牌阶段限一次,若你所有手牌点数均小/大于7,你可以获得一张点数大/小于7的牌.',
        qtpz_murenqing: '穆人清',
        qtpz_dangjian: '荡剑',
        qtpz_dangjian_info: '你使用【杀】指定目标时,你可以令目标弃置其所有满足如下条件的牌:与此【杀】点数之差的绝对值大于4的牌.',
        qtpz_zhangsanlisi: '张三李四',
        qtpz_xuanbing: '玄冰',
        qtpz_xuanbing_info: '<b>锁定技,</b>你的♠️️【杀】视为【冰杀】;你造成寒冰伤害后,可令目标下回合内只能使用一张牌,且往后的轮次回合内只能比上个轮次回合内多使用一张牌.',
        qtpz_xuanbing2: '玄冰',
        qtpz_xuanbing2_info: '<b>锁定技,</b>你的♠️️【杀】视为【冰杀】;你造成寒冰伤害后,可令目标下回合内只能使用一张牌,且往后的轮次回合内只能比上个轮次回合内多使用一张牌.',
        qtpz_bihuo: '碧火',
        qtpz_bihuo_info: '<b>锁定技,</b>你的♦️️【杀】视为【火杀】;你造成火焰伤害后,目标每累计使用2张红色牌后,需弃置一张黑色牌.',
        qtpz_bihuo2: '碧火',
        qtpz_bihuo2_info: '<b>锁定技,</b>你的♦️️【杀】视为【火杀】;你造成火焰伤害后,目标每累计使用2张红色牌后,需弃置一张黑色牌.',
        qtpz_shangcheng: '赏惩',
        qtpz_shangcheng_info: '<b>转换技,</b>出牌阶段限一次,你可以:阴:令一角角色获得一张除杀以外的基本牌;阳:令一名角色置手牌中的所有伤害类卡牌.',
        qtpz_pianjia: '骈驾',
        qtpz_pianjia2: '骈驾',
        qtpz_pianjia2_info: '你/其他角色的装备区里不因此技能置入坐骑牌后,你/其可以令一名其他角色/你也使用一张坐骑牌,你与其各摸1张牌.',
        qtpz_pianjia_info: '你/其他角色的装备区里不因此技能置入坐骑牌后,你/其可以令一名其他角色/你也使用一张坐骑牌,你与其各摸1张牌.',
        qtpz_yangbian: '扬鞭',
        qtpz_yangbian_info: '每当你的装备区里置入坐骑牌后,你可以令一名其他角色弃置装备区里所有的装备牌.',
        qtpz_fenti2: '奋蹄',
        qtpz_fenti2_info: '出牌阶段限一次,你可以弃置一张坐骑牌,你此阶段内使用牌无距离、次数限制且其他角色不能抵消、响应你使用的牌.',
        qtpz_fenti: '奋蹄',
        qtpz_fenti_info: '出牌阶段限一次,你可以弃置一张坐骑牌,你此阶段内使用牌无距离、次数限制且其他角色不能抵消、响应你使用的牌.',
        qtpz_shuisheng: '水笙',
        qtpz_wanzhenshan: '万震山',
        qtpz_fengzang: '封葬',
        qtpz_fengzang2: '封葬',
        qtpz_fengzang_info: '其他角色的牌因弃置而进入弃牌堆时,你可将这些牌当<封>置于其侠客牌上,当一名角色的<封>达到四种花色时,你对其造成等同于其♠️️<封>数量的伤害,你获得其<封>中的♦️️牌和秘籍牌并移除其余<封>.',
        qtpz_fengzang2_info: '其他角色的牌因弃置而进入弃牌堆时,你可将这些牌当<封>置于其侠客牌上,当一名角色的<封>达到四种花色时,你对其造成等同于其♠️️<封>数量的伤害,你获得其<封>中的♦️️牌和秘籍牌并移除其余<封>.',
        qtpz_shishi: '弑师',
        qtpz_shishi_info: '你使用牌对一名角色造成伤害后,若你获得过该角色的<封>,你可以弃置其一张牌.',
        qtpz_liwenxiu: '李文秀',
        qtpz_zhuanqing: '专情',
        qtpz_zhuanqing2: '专情',
        qtpz_zhuanqing3: '专情',
        qtpz_zhuanqing_info: '<b>限定技.</b>回合开始时,你可以声明一个花色,在本局游戏中,此花色的牌:不占用你的摸牌数、不占用你的手牌上限、不占用你回合内使用的次数.',
        qtpz_lwxsheyou_use_info: '出牌阶段限一次,你可以将【影】牌当任意普通锦囊牌使用.',
        qtpz_lwxsheyou_use: '设诱②',
        qtpz_lwxsheyou: '设诱',
        qtpz_lwxsheyou_info: '出牌阶段限一次,你可以将一名其他角色至多三张手牌与等量【影】混洗后扣置于处理区,令该角色选择其中一半的牌收入手牌,你获得其余牌.出牌阶段限一次,你可以将【影】牌当任意普通锦囊牌使用.',
        qtpz_lwxsheyou_old: '设诱',
        qtpz_lwxsheyou_old_info: '出牌阶段限一次,你可以将一名其他角色至多三张手牌与牌堆顶前等量的牌混洗后扣置于处理区,令该角色选择其中一半的牌收手牌中,你获得剩余牌中原属该角色手牌的牌.',
        qtpz_longmudaozhu: '龙木岛主',
        qtpz_shizhou: '施粥',
        qtpz_shizhou_info: '回合结束时,你可以令一名角色摸五张牌,其回复X点体力,再受到你的Y点伤害(X为其此次摸的牌描述中含有<回复>的牌数,Y为其此次摸的牌描述中含有<伤害>的牌数).',
        qtpz_qiecuo: '切磋',
        qtpz_qiecuo_info: '出牌阶段限一次,你可以选择至多三名有手牌的角色,这些角色依次将一张手牌交换牌堆前第X张牌(X为这些角色的顺序号).若有角色依此法交换的两张牌同名,或依此法获得宝物牌,其从牌堆底摸一张牌 .',
        qtpz_shizhongyu: '石中玉',
        qtpz_xialuan: '狎乱',
        qtpz_xialuan_info: '<b>锁定技.</b>若有女性角色存活,你始终视为装备了所有女性角色装备区里的武器、防具和宝物;若没有女性角色存活,你攻击范围内的男性角色装备区里的上述牌无效.',
        qtpz_guimou: '诡谋',
        qtpz_guimou_info: '每轮限一次,其他角色的回合开始时,你可以和另一名其他角色交换位置,直到此回合结束.',
        qtpz_mantian: '瞒天',
        qtpz_mantian_info: '当你即将进入负面状态/成为伤害牌的目标时,你可以失去一点体力,令一名其他角色代替你进入此状态/来源攻击范围内的一名其他角色代替你成为此牌的目标(已为目标则额外结算).',
        qtpz_miaoruolan: '苗若兰',
        qtpz_jinse: '锦瑟',
        qtpz_jinse_info: '出牌阶段限一次,你可以选择一项: 弃置一名角色一张牌,其摸X张名字只有一个汉字的牌(X为弃置牌名字中的汉字数);或弃置一名角色所有名字只有一个汉字的手牌(至多只能弃置五张),其获得一张名字中含有X个汉字的牌(X为其此次弃置牌的张数).',
        qtpz_yaxian: '雅弦',
        qtpz_yaxian_info: '回合结束时,若你在本回合内使用的牌不少于两张且所有牌名字中的汉字数量:均相同,你可令至多三名角色各使用一张名字字数量相等的装备;均不相同,你可将手牌从当前游戏环境中补齐不同字数的牌.',
        qtpz_xinyan: '心砚',
        qtpz_anshao: '暗哨',
        qtpz_anshao_info: '出牌阶段限一次,你可以选择视为使用一张牌名字数等于你体力值的基本牌或普通锦囊牌(无法使用则获得一张名字字数等于你体力值的牌);你于此阶段体力值发生变化后,此技能重置.',
        qtpz_shutong: '书僮',
        qtpz_shutong_info: '一名角色使用虚拟牌后或因转化使用牌后,你可以令其获得一张该虚拟牌或转化牌的实体牌.',
        qtpz_xie_xuedaolaozu: '邪血刀老祖',
        qtpz_xiezun: '邪尊',
        qtpz_xiezun_info: '<b>锁定技.</b>防止【邪杀】对你造成的伤害;你使用的【邪杀】不能被抵消.',
        qtpz_xueyue: '血月',
        qtpz_xueyue_info: '你的回合开始时,你根据弃牌堆牌数的个位数值,直到你下个回合开始,你获得一个月相技能:<p>4、7→〖暗月〗其他角色回复体力时,你可以取消.<p>A、3、8→〖弦月〗所有角色手牌中的普通杀视为【邪杀】.<p>2、5→〖残月〗你攻击范围内的角色回复体力后,你可以选择回复一点体力或摸两张牌.<p>0、6、9→〖满月〗你将【血刀】永久置于侠客牌上并视为装备了此牌,选择:将<满月>的三个点数任意分配到其他月相;或永久移除此三个点数,摸9张牌.',
        qtpz_manyue: '满月',
        qtpz_manyue_info: '你视为装备了【血刀】',
        qtpz_canyue: '残月',
        qtpz_canyue_info: '你攻击范围内的角色回复体力后,你可以选择回复一点体力或摸两张牌.',
        qtpz_xuanyue: '弦月',
        qtpz_xuanyue_info: '所有角色手牌中的普通【杀】视为【邪杀】.',
        qtpz_anyue: '暗月',
        qtpz_anyue_info: '其他角色回复体力时,你可以取消之.',
        qtpz_jidao: '祭刀',
        qtpz_jidao_info: '<b>觉醒技.</b>当你因〖血月〗获得四种月相技能后且若你拥有【血刀】的技能,则你攻击范围加+1,且你发动【血刀】时你摸X张牌(X为血标记数).',
        qtpz_fengtiannan: '凤天南',
        qtpz_haoduo: '豪夺',
        qtpz_haoduo_info: '每轮限一次,其他角色获得牌后,若其满足以下任意一项,你可令其交给你X张手牌(X为满足的项数,不足全给).<p>1.其手牌中的类别比你手牌中的类型更多;<p>2.其手牌中的花色比你手牌中的花色更多;<p>3.其手牌中的点数比你手牌中的点数更多;<p>4.其手牌数量比你的手牌数量更多.',
        qtpz_balin: '霸邻',
        qtpz_balin_info: '<b>锁定技.</b>你距离１以内的其他角色发动装备区里的装备牌的技能后,其需选择是否令你摸一张牌,若其选择否,其弃置该武器牌.',
        qtpz_tangpei: '汤沛',
        qtpz_shihui: '施惠',
        qtpz_shihui_info: '出牌阶段限一次,你可将一张手牌当【开仓放粮】使用.结算完后,你选择一项:摸X张牌(X为依此法获得红色牌的其他角色数量);令所有依此法获得红色牌的其他角色各交给你一张牌.',
        qtpz_shihui2: '施惠',
        qtpz_shihui2_info: '出牌阶段限一次,你可将一张手牌当【开仓放粮】使用.结算完后,你选择一项:摸X张牌(X为依此法获得红色牌的其他角色数量);令所有依此法获得红色牌的其他角色各交给你一张牌.',
        qtpz_diaoyu: '钓誉',
        qtpz_diaoyu_info: '出牌阶段,你可以令一名其他角色(每局每名其他角色限选一次)使用一张装备牌,你摸一张牌.<b>锁定技,</b>因〖钓誉〗选择过的其他角色对你造成大于一点的伤害时,此伤害值减半(向上取整).',
        qtpz_diaoyu2: '钓誉',
        qtpz_diaoyu2_info: '出牌阶段,你可以令一名其他角色(每局每名其他角色限选一次)使用一张装备牌,你摸一张牌.<b>锁定技,</b>因〖钓誉〗选择过的其他角色对你造成大于一点的伤害时,此伤害值减半(向上取整).',
        qtpz_jue_shipotian: '绝石破天',
        qtpz_taixuan: '太玄',
        qtpz_taixuan_info: '你每受到或造成一点伤害后,你可以随机吟诵<太玄经>里的一句诗,获得牌堆、弃牌堆中所有与这句诗押韵的牌各一张.',
        qtpz_yanyan: '炎炎',
        qtpz_yanyan_info: '<b>转换技.</b>阳:你造成的火焰伤害+1.阴:你造成的寒冰伤害+1.',
        qtpz_xuanjiu: '玄酒',
        qtpz_xuanjiu_info: '你使用【酒】后,你下一次造成的伤害时,你可以将此次伤害改为火焰伤害或寒冰伤害.',
        qtpz_xuanjiu2: '玄酒',
        qtpz_xuanjiu2_info: '你使用【酒】后,你下一次造成的伤害时,你可以将此次伤害改为火焰伤害或寒冰伤害.',
        qtpz_axiu: '阿绣',
        qtpz_junxiu: '隽秀',
        qtpz_junxiu_info: '出牌阶段限一次,你可以将一种颜色的所有手牌交给一名其他角色,其需交给你等量另一种颜色的手牌(不足的从牌堆中补齐).',
        qtpz_pangqiao: '旁敲',
        qtpz_pangqiao_info: '回合开始时,你可选择一名角色.其下个出牌阶段,每当其使用非装备牌指定目标时,其可以观看当前环境中花色和点数均与此牌一致的牌名(限基本牌和普通锦囊),其可将此牌改为这些牌名中的一种牌(若以此法将【杀】转换成其他牌,此杀不计入本阶段次数).',
        qtpz_xie_huatiegan: '邪花铁干',
        qtpz_beici: '背刺',
        qtpz_beici_info: '出牌阶段限一次,你可以弃置装备区里的一张装备或弃置两张手牌,视为使用一张不计次数的【刺杀】.',
        qtpz_quxi: '屈膝',
        qtpz_quxi_info: '<b>锁定技.</b>当你不因此技能执行其中一项后,自动执行下一项(首尾不相连).失去装备区里的装备、回复1点体力、一次性弃置至少2张牌、随机使用1张装备.',
        qtpz_qiesi: '怯死',
        qtpz_qiesi_info: '<b>觉醒技.</b>当你失去【侠名】获得的所有侠客牌后,你将势力改为邪并换肤,减2点体力上限,分配2点邪属性伤害给不同目标,随机获得三个名字含<邪>的技能(每个限发动一次).获得【屈膝】和【背刺】.',
        qtpz_xiaming: '侠名',
        qtpz_xiaming_info: '<b>隐匿技.</b>你出场时,势力改为一个非邪的势力, 随机获得三张技能之一含有<侠>字的男性侠客牌并将侠客牌替换为其中一张.你在准备阶段、回合结束时、受到伤害时也可以这么做.依此法获得的侠客牌上除觉醒技、盟主技、使命技、锁定技、帮派技的技能均发动后,你失去之,回复1点体力.'
      },
      dynamicTranslate: {
        qtpz_yinian(player) {
          let group = player.group;
          let str = `<b>转换技.</b>游戏开始时可自选阴阳状态.回合开始时,势力切换为:`;
          let str2 = `阳:绝,摸牌阶段,你可少摸一张牌,对一名角色发动〖行侠〗;`;
          let str3 = `阴:邪,本回合内视为拥有〖魔刀〗,使用杀时可弃置任意张牌并额外指定等量目标.`;
          if (['shen', 'jy_jue'].includes(group)) {
            str2 = '<span class="bluetext">' + str2 + '</span>';
          } else if (group == 'jy_xie') str3 = '<span class="bluetext">' + str3 + '</span>';else
          return get.translation('qtpz_yinian_info');
          return str + str2 + str3;
        },
        qtpz_shadao(player) {
          var str = '转换技.出牌阶段限一次,';
          var str1 = '阴:你可以获得任意名已损失体力值之和为3的角色区域内各1张牌;';
          var str2 = '阳:你可以对任意名体力值之和为4的角色各造成1点伤害.';
          if (player.storage.qtpz_shadao) {
            str1 = '<span class="bluetext">' + str1 + '</span>';
          } else {
            str2 = '<span class="bluetext">' + str2 + '</span>';
          }
          return '<b>' + str + '</b><li>' + str1 + '<li>' + str2;
        },
        qtpz_shangcheng(player) {
          var str2 = '阴:你可以令一名角色获得一张除杀外的基本牌;';
          var str1 = '阳:你可以令一名角色弃置手牌中所有伤害类卡牌.';
          if (player.storage.qtpz_shangcheng) {
            str1 = '<span class="bluetext">' + str1 + '</span>';
          } else {
            str2 = '<span class="bluetext">' + str2 + '</span>';
          }
          return '转换技.出牌阶段限一次,' + str2 + str1;
        }
      }
    };
    for (var i in qtpz.character) {
      qtpz.character[i][4].push('jy_die_audio');
      //qtpz.character[i][4].push(`die:ext:金庸群侠传/peiyin/${i}.mp3`);
      qtpz.character[i][4].push(`die:ext:金庸群侠传/peiyin:true`);
      qtpz.character[i][4].push('ext:金庸群侠传/character/yuanban/' + i + '.jpg');
    }
    return qtpz;
  });
});
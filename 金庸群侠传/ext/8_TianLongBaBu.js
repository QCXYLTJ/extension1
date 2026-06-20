'use strict';
window.jyimport(function(lib, game, ui, get, ai, _status) {
    game.import('character', function() {
        lib.config.all.characters.add('tlbb');
        lib.config.characters.add('tlbb');
        lib.translate.tlbb_character_config = '<img style=width:100px  src=extension/金庸群侠传/image/title/jy_title_tlbb.jpg>'; //天龙八部
        var Group = function(str1, str2) {
            if (!str2) return str1;
            return lib.config.extension_金庸群侠传_changeGroup ? str2 : str1;
        };
        var tupo = function(str1, str2) {
            return lib.config.extension_金庸群侠传_jiexiantupo ? str2 : str1;
        };
        var tlbb = {
            name: 'tlbb',
            connect: true,
            characterFilter: {
                tlbb_zhiguangdashi(mode) {
                    return mode == 'identity';
                },
            },
            characterSort: {
                tlbb: {
                    //绝世高手
                    tlbb_jueshi: ['tlbb_jue_xuzhu', 'tlbb_muronglongcheng', 'tlbb_juexiaofeng', 'tlbb_saodiseng', 'tlbb_xiaoyaozi', 'tlbb_jue_damo', 'tlbb_jue_tianshantonglao'],
                    //丐帮
                    tlbb_gaibang: ['tlbb_xie_kangmin', 'tlbb_wangjiantong', 'tlbb_qiaofeng', 'tlbb_quanguanqing', 'tlbb_madayuan', 'tlbb_kangmin', 'tlbb_baishijing'],
                    //少林寺
                    tlbb_shaolin: ['tlbb_xuanku', 'tlbb_xuanci', 'tlbb_xuanciyeerniang'],
                    //逍遥派
                    tlbb_xiaoyaopai: ['tlbb_liqiushui', 'tlbb_wuyazi', 'tlbb_spxuzhu', 'tlbb_xuzhuzi', 'tlbb_xuzhuliqinglu', 'tlbb_shiqinglu', 'tlbb_xuemuhua', 'tlbb_suxinghe'],
                    //大理段氏
                    tlbb_dali: ['tlbb_duanyuwangyuyan', 'tlbb_kurongdashi', 'tlbb_daobaifeng', 'tlbb_huangmeiseng', 'tlbb_spduanyu', 'tlbb_duanyu', 'tlbb_duanzhengchun', 'tlbb_duanyanqing'],
                    //灵鹫宫
                    tlbb_lingjiugong: ['tlbb_meilanzhuju', 'tlbb_wulaoda', 'tlbb_xuzhuzi', 'tlbb_tianshantonglao', 'tlbb_sptianshantonglao'],
                    //姑苏慕容
                    tlbb_gushumurong: ['tlbb_fengboe', 'tlbb_xie_murongfu', 'tlbb_azhu', 'tlbb_murongbo', 'tlbb_murongfu', 'tlbb_baobutong'],
                    //星宿派
                    tlbb_xingxiupai: ['tlbb_xie_dingchunqiu', 'tlbb_dingchunqiu', 'tlbb_zhaixingzi', 'tlbb_spazi', 'tlbb_azhi'],
                    //聚贤庄
                    tlbb_juxianzhuang: ['tlbb_youjiyouju', 'tlbb_xie_zhuangjuxian', 'tlbb_youtanzhi'],
                    //辽国
                    tlbb_liao: ['tlbb_xiaofeng', 'tlbb_qiaofengazhu', 'tlbb_yelvhongji', 'tlbb_xiaoyuanshan', 'tlbb_yelvnielugu'],
                    //西夏一品堂
                    tlbb_xixia: ['tlbb_xie_yeerniang', 'tlbb_duanyanqing_new', 'tlbb_heliantieshu', 'tlbb_liqinglu', 'tlbb_yuelaosan', 'tlbb_yunzhonghe', 'tlbb_yeerniang'],
                    //曼陀山庄
                    tlbb_mantuoshanzhuang: ['tlbb_xie_liqingluo', 'tlbb_liqingluo', 'tlbb_spwangyuyan', 'tlbb_wangyuyan'],
                    //万劫谷
                    tlbb_wanjiegu: ['tlbb_ganbaobao', 'tlbb_zhongling'],
                    //无量派剑
                    tlbb_wuliangjian: ['tlbb_zuozimuxinshuangqing'],
                    //藏宗
                    tlbb_zangzhong: ['tlbb_spjiumozhi', 'tlbb_jiumozhi'],
                    //江湖侠客
                    tlbb_xiake: ['tlbb_tangongtanpo', 'tlbb_zhaoqianshun', 'tlbb_qinhongmian', 'tlbb_muwanqing', 'tlbb_zhiguangdashi', 'tlbb_cuibaiquan', 'tlbb_ruanxingzhu'],
                },
            },
            character: {
                tlbb_jue_xiaoyuanshan: ['male', Group('shen', 'jy_jue'), 2, ['tlbb_jiaotou', 'tlbb_chouhai'], []],
                tlbb_jue_murongbo: ['male', Group('shen', 'jy_jue'), 2, ['tlbb_qianyi', 'tlbb_zuiye'], []],
                //////////////
                tlbb_xie_liqingluo: ['female', Group('jin', 'jy_xie'), 3, ['tlbb_xianhua', 'tlbb_zuifeng', 'tlbb_woyu'], ['bangpai:jy_wangzu'], { drawer: '画师:AI', skinLevel: 2 }],
                tlbb_xie_yeerniang: ['female', Group('jin', 'jy_xie'), 3, ['tlbb_shigu', 'tlbb_yingti'], ['bangpai:jy_xixia'], { drawer: '画师:AI', skinLevel: 2 }],
                tlbb_youjiyouju: ['male', Group('wei', 'jy_song'), 4, ['tlbb_juxian', 'tlbb_dunfeng'], ['bangpai:jy_wangzu'], { drawer: '画师:佚名', skinLevel: 1 }],
                tlbb_tangongtanpo: ['male', Group('wei', 'jy_song'), 3, ['tlbb_hanyao', 'tlbb_dielang', 'tlbb_gushi'], ['bangpai:jy_youxia'], { drawer: '画师:天工AI', skinLevel: 1 }],
                tlbb_fengboe: ['male', Group('qun', 'jy_lie'), 4, ['tlbb_haodou', 'tlbb_chandou'], ['bangpai:jy_murong'], { drawer: '画师:龙印', skinLevel: 2 }],
                tlbb_duanyuwangyuyan: ['male', Group('qun', 'jy_lie'), 3, ['tlbb_bowen', 'tlbb_bugang', 'tlbb_liumai'], ['bangpai:jy_dali'], { drawer: '画师:佚名', skinLevel: 2 }],
                tlbb_meilanzhuju: ['female', Group('shu', 'jy_song'), 3, ['tlbb_tongxin', 'tlbb_sijun'], ['bangpai:jy_xiaoyao'], { drawer: '画师:佚名', skinLevel: 2 }],
                tlbb_duanyanqing_new: ['male', Group('jin', 'jy_xie'), 3, ['tlbb_fuyu_new', 'tlbb_konghun_new', 'tlbb_fengyue_new'], ['bangpai:jy_dali:jy_xixia'], { drawer: '画师:ZCZhangChong', skinLevel: 3 }], //weibo.com/u/2674623872
                tlbb_wulaoda: ['male', Group('qun', 'jy_lie'), 36, ['tlbb_fudu_new', 'tlbb_chujie_new', 'tlbb_lvdao_new'], ['bangpai:jy_hanfei'], { drawer: '画师:佚名', skinLevel: 3 }],
                tlbb_wangjiantong: ['male', Group('wei', 'jy_song'), 4, ['tlbb_xueyi', 'tlbb_wusha', 'tlbb_choumou'], ['bangpai:jy_gaibang'], { drawer: '画师:cobb-art', skinLevel: 2 }],
                tlbb_xie_kangmin: ['female', Group('jin', 'jy_xie'), 3, ['tlbb_duhui_xiekangming', 'tlbb_guying', 'tlbb_yuanyi'], ['bangpai:jy_gaibang'], { drawer: '画师:剑舞江湖', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=616284277&bvid=BV1Rh4y1L7wm&cid=1206559441&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                tlbb_xie_kangmin_jing: ['female', Group('jin', 'jy_xie'), 3, ['tlbb_jinggui'], [], { drawer: '画师:剑舞江湖', skinLevel: 3 }],
                tlbb_heliantieshu: ['male', Group('qun', 'jy_lie'), 4, ['tlbb_huansi', 'tlbb_hudan'], ['bangpai:jy_xixia'], { drawer: '画师:佚名', skinLevel: 1, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=1153453084&bvid=BV1NZ421n7yH&cid=1514532885&p=1" &autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>', '<iframe src="http://player.bilibili.com/player.html?aid=488689283&bvid=BV1RN411Y7mr&cid=1205067392&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                tlbb_jue_xuzhu: ['male', Group('shen', 'jy_jue'), 3, ['tlbb_xiaoyao', 'tlbb_minghai'], ['bangpai:jy_xiaoyao'], { drawer: '画师:天龙八部', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=274684284&bvid=BV1sF411Z7BB&cid=1231127161&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                tlbb_xie_zhuangjuxian: ['male', Group('wei', 'jy_xie'), '4/9', ['tlbb_bingcan_new', 'tlbb_xiewang_new', 'tlbb_kuiwei_new'], ['bangpai:jy_wangzu'], { drawer: '画师:剑舞江湖', skinLevel: 3, videos: ['<iframe src="http:http://player.bilibili.com/player.html?aid=445853271&bvid=BV1Rj411Z7Ys&cid=1192667445&p&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                //天龙八部
                tlbb_baiban: ['male', Group('wei', 'jy_song'), 0, [], []],
                tlbb_xie_dingchunqiu: ['male', Group('jin', 'jy_xie'), 4, ['tlbb_shidu', 'tlbb_huagong', 'tlbb_shending'], ['bangpai:jy_xingxiupai'], { drawer: '画师:佚名', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=445925874&bvid=BV14j411d7Pk&cid=1196554224&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                tlbb_xie_murongfu: ['male', Group('wei', 'jy_xie'), '4/6', ['tlbb_bidao', 'tlbb_zhinian', 'tlbb_xinmo', 'tlbb_qingfu'], ['bangpai:jy_murong'], { drawer: '画师:佚名', skinLevel: 2 }],
                tlbb_zhaoqianshun: ['male', Group('wei', 'jy_song'), 4, ['tlbb_maiming', 'tlbb_wenguo', 'tlbb_yinxing'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 1 }],
                tlbb_kurongdashi: ['male', Group('qun', 'jy_lie'), 3, ['tlbb_kuchan', 'tlbb_shaoshang', 'tlbb_fenpu'], ['bangpai:jy_dali'], { drawer: '画师:佚名', skinLevel: 3 }],
                tlbb_xuanku: ['male', Group('wei', 'jy_song'), 3, ['tlbb_ranmu', 'tlbb_shouye'], ['bangpai:jy_shaolin'], { drawer: '画师:王者世界', skinLevel: 1 }],
                tlbb_xiaoyaozi: ['male', Group('shen', 'jy_jue'), 3, ['tlbb_haina', 'tlbb_changchun'], ['bangpai:jy_xiaoyao'], { drawer: '画师:佚名', skinLevel: 4 }],
                tlbb_zuozimuxinshuangqing: ['male', Group('wei', 'jy_song'), 3, ['tlbb_fenting', 'tlbb_doujian', 'tlbb_yubi'], ['bangpai:jy_xiaoyao'], { drawer: '画师:佚名', skinLevel: 4 }],
                tlbb_zhiguangdashi: ['male', Group('wei', 'jy_song'), 3, ['tlbb_pudu', 'tlbb_zaizhang', 'tlbb_tashu'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 1 }],
                tlbb_yelvnielugu: ['male', Group('qun', 'jy_lie'), 3, ['tlbb_xiaoqiang', 'tlbb_qipan'], ['bangpai:jy_dalu'], { drawer: '画师:苏州风行网络科技', skinLevel: 3 }],
                tlbb_shiqinglu: ['female', Group('wei', 'jy_song'), 3, ['tlbb_shihua', 'tlbb_yihui'], ['bangpai:jy_xiaoyao'], { drawer: '画师:佚名', skinLevel: 1 }],
                tlbb_cuibaiquan: ['male', Group('wei', 'jy_song'), 3, ['tlbb_jizhu', 'tlbb_qianzhu'], ['bangpai:jy_wangzu'], { drawer: '画师:天翼决', skinLevel: 1 }],
                tlbb_jue_damo: ['male', Group('shen', 'jy_jue'), 3, ['jue_yijing', 'tlbb_xisui'], ['bangpai:jy_shaolin'], { drawer: '画师:王者荣耀', skinLevel: 4 }],
                tlbb_spwangyuyan: ['female', Group('wei', 'jy_song'), 3, ['tlbb_dianbo', 'tlbb_xunjing'], ['bangpai:jy_dali'], { drawer: '画师:战江湖', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=459328094&bvid=BV1n5411N7fi&cid=300132421&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                tlbb_xuemuhua: ['male', Group('wei', 'jy_song'), 5, ['tlbb_shuming', 'tlbb_bihuo'], ['bangpai:jy_xiaoyao'], { drawer: '画师:佚名', skinLevel: 3 }],
                //jy_xiaoyao【逍遥派】
                tlbb_spduanyu: ['male', Group('qun', 'jy_lie'), 4, ['tlbb_nayuan', 'tlbb_zhuha'], ['bangpai:jy_dali'], { drawer: '画师:战江湖', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=445535584&bvid=BV1Nj411U7Ac&cid=1186822986&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                tlbb_duanyu: ['male', Group('qun', 'jy_lie'), 4, ['tlbb_xiumai', 'tlbb_qingguan', 'tlbb_lingbo', 'tlbb_zhengyan'], ['zhu', 'bangpai:jy_dali'], { drawer: '画师:新天龙八部', skinLevel: 3 }],
                tlbb_duanyanqing: ['male', Group('qun', 'jy_lie'), 4, ['tlbb_qiangcan', 'tlbb_liuwang', 'tlbb_rangquan'], ['bangpai:jy_dali:jy_xixia'], { drawer: '画师:佚名', skinLevel: 2 }],
                tlbb_azhu: ['female', Group('qun', 'jy_lie'), 3, ['tlbb_yirong1', 'tlbb_xiaoti'], ['bangpai:jy_murong:jy_dali'], { drawer: '画师:原画梦佚名', skinLevel: 4 }],
                tlbb_xuzhuzi: ['male', Group('wei', 'jy_song'), 4, ['tlbb_pojie', 'tlbb_huansu', 'tlbb_dacheng'], ['zhu', 'bangpai:jy_shaolin:jy_xiaoyao'], { drawer: '画师:战江湖', skinLevel: 3 }],
                tlbb_wangyuyan: ['female', Group('qun', 'jy_lie'), 3, ['tlbb_dianhua', 'tlbb_wendian'], ['bangpai:jy_dali'], { drawer: '画师:佚名', skinLevel: 3 }],
                tlbb_kangmin: ['female', Group('wei', 'jy_song'), 3, ['tlbb_shifu', 'tlbb_buyao', 'tlbb_siqian'], ['bangpai:jy_gaibang'], { drawer: '画师:Xue Cheng', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=743663333&bvid=BV1qk4y157iY&cid=1205511192&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                tlbb_suxinghe: ['male', Group('wei', 'jy_song'), 3, ['tlbb_xpojie', 'tlbb_yaotie', 'tlbb_yayin'], ['bangpai:jy_xiaoyao'], { drawer: '画师:佚名', skinLevel: 3 }],
                tlbb_yuelaosan: ['male', Group('qun', 'jy_lie'), 4, ['tlbb_yuguan', 'tlbb_qianjun'], ['bangpai:jy_xixia']],
                //jy_xixia【西夏一品堂】
                tlbb_zhongling: ['female', Group('qun', 'jy_lie'), 3, ['tlbb_xundiao', 'tlbb_qiyuan', 'tlbb_xinwu'], ['bangpai:jy_dali:jy_wanjiegu'], { drawer: '画师:Mau Mau', skinLevel: 4 }], //artstation.com/artwork/5v6Dz
                //jy_wanjiegu【万劫谷】
                tlbb_qiaofeng: [
                    'male',
                    Group('wei', 'jy_song'),
                    4,
                    ['tlbb_xianglong', 'tlbb_kanghui', 'tlbb_zongpan'],
                    ['zhu', 'bangpai:jy_gaibang'],
                    {
                        drawer: '画师:新天龙八部',
                        skinLevel: 2,
                        videos: ['<iframe src="http://player.bilibili.com/player.html?aid=50096645&bvid=BV14b41137Us&cid=87693897&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>', '<iframe src="http://player.bilibili.com/player.html?aid=50342065&bvid=BV14441187XG&cid=88133971&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'],
                        //骨骼皮肤测试
                        spineSkins: {
                            feilongzaitian: {
                                name: '飞龙在天',
                                file: 'extension/金庸换肤/spine/乔峰/飞龙在天/feilongzaitian.json',
                                x: [0, 0.6],
                                y: [0, 0.6],
                                scale: 0,
                                width: 560,
                                height: 746,
                                animation: 'daiji',
                                background: 'extension/金庸换肤/skin/1.jpg',
                                audios: {
                                    gongji: '../extension/金庸换肤/spine/乔峰/飞龙在天/feilongzaitian.mp3',
                                },
                            },
                        },
                    },
                ],
                tlbb_ganbaobao: ['female', Group('wei', 'jy_song'), 3, ['tlbb_chouchang', 'tlbb_aijie', 'tlbb_gulian'], ['bangpai:jy_wanjiegu'], { drawer: '画师:天龙八部3D', skinLevel: 4 }],
                tlbb_spxuzhu: ['male', Group('wei', 'jy_song'), 3, ['tlbb_luomei', 'tlbb_jiujie'], ['bangpai:jy_xiaoyao'], { drawer: '画师:新天龙八部', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=913222207&bvid=BV1zM4y1j7pS&cid=1188063199&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                tlbb_liqingluo: ['female', Group('wei', 'jy_song'), 3, ['tlbb_juanzhi', 'tlbb_fanrui', 'tlbb_tongyou'], [], { drawer: '画师:原画梦佚名', skinLevel: 3 }],
                tlbb_tianshantonglao: ['female', Group('wei', 'jy_song'), 3, ['tlbb_zhemei', 'tlbb_bingfu'], ['bangpai:jy_xiaoyao'], { drawer: '画师:原画梦佚名', skinLevel: 4 }],
                tlbb_xiaoyuanshan: ['male', Group('qun', 'jy_lie'), 4, ['tlbb_huoyan', 'tlbb_zheju'], ['bangpai:jy_dalu'], { drawer: '画师:佚名', skinLevel: 3 }],
                tlbb_xuanciyeerniang: ['male', Group('wei', 'jy_song'), 3, ['tlbb_youseng', 'tlbb_duhui'], ['bangpai:jy_shaolin:jy_xixia'], { drawer: '画师:剑网3', skinLevel: 2 }],
                tlbb_yeerniang: ['female', Group('wei', 'jy_song'), 3, ['tlbb_daoying', 'tlbb_gouhe'], ['bangpai:jy_xixia'], { drawer: '画师:佚名', skinLevel: 3 }],
                tlbb_madayuan: ['male', Group('wei', 'jy_song'), 4, ['tlbb_suohou', 'tlbb_jianmi'], ['bangpai:jy_gaibang'], { drawer: '画师:佚名', skinLevel: 1 }],
                tlbb_huangmeiseng: ['male', Group('qun', 'jy_lie'), 3, ['tlbb_duanzhi', 'tlbb_xianji'], ['bangpai:jy_dali'], { drawer: '画师:九游', skinLevel: 2 }],
                tlbb_xuzhuliqinglu: ['male', Group('wei', 'jy_song'), 3, ['tlbb_sekong', 'tlbb_juechen'], ['bangpai:jy_xiaoyao:jy_xixia'], { drawer: '画师:剑三.大葱君', skinLevel: 3 }],
                tlbb_baishijing: ['male', Group('wei', 'jy_song'), 3, ['tlbb_chansi', 'tlbb_shijie', 'tlbb_gouxian'], ['bangpai:jy_gaibang'], { drawer: '画师:佚名', skinLevel: 2 }],
                tlbb_azhi: ['female', Group('qun', 'jy_lie'), 3, ['tlbb_zhonggu', 'tlbb_zisui', 'tlbb_hushi'], ['bangpai:jy_xingxiupai'], { drawer: '画师:天龙八部3D', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=68597132&bvid=BV1sJ411g7aD&cid=118887503&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                //jy_xingxiupai【星宿派】
                tlbb_baobutong: ['male', Group('qun', 'jy_lie'), 3, ['tlbb_zhongjian', 'tlbb_chengbian', 'tlbb_shiwei'], ['bangpai:jy_murong'], { drawer: '画师:佚名', skinLevel: 2 }],
                tlbb_qinhongmian: ['female', Group('wei', 'jy_song'), 3, ['tlbb_xiujian', 'tlbb_qingheng'], ['bangpai:jy_youxia'], { drawer: '画师:九阴真经', skinLevel: 2 }],
                tlbb_xuanci: ['male', Group('wei', 'jy_song'), 3, ['tlbb_fuji', 'tlbb_mengbi', 'tlbb_jiedi'], ['bangpai:jy_shaolin'], { drawer: '画师:三剑豪2', skinLevel: 4 }],
                tlbb_liqinglu: ['female', Group('qun', 'jy_lie'), 3, ['tlbb_chungui', 'tlbb_suyuanlql'], ['bangpai:jy_xixia'], { drawer: '画师:天龙', skinLevel: 2 }],
                tlbb_liqiushui: ['female', Group('wei', 'jy_song'), 4, ['tlbb_souhun', 'tlbb_guixi', 'tlbb_wuxiang'], ['bangpai:jy_xixia:jy_xiaoyao'], { drawer: '画师:天龙八部3D', skinLevel: 3 }],
                tlbb_zhaixingzi: ['male', Group('wei', 'jy_song'), 3, ['tlbb_qianzui', 'tlbb_feilin'], ['bangpai:jy_xingxiupai'], { drawer: '画师:诛仙', skinLevel: 3 }],
                tlbb_daobaifeng: ['female', Group('qun', 'jy_lie'), 3, ['tlbb_chunyuan', 'tlbb_jimie'], ['bangpai:jy_dali'], { drawer: '画师:剑舞江湖', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=337659283&bvid=BV1DR4y1g7id&cid=470932276&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                tlbb_yunzhonghe: ['male', Group('qun', 'jy_lie'), 4, ['tlbb_feihe', 'tlbb_zhuiyun'], ['bangpai:jy_xixia'], { drawer: '画师:新天龙八部.光域', skinLevel: 2 }],
                tlbb_duanzhengchun: ['male', Group('qun', 'jy_lie'), 4, ['tlbb_lanqing', 'tlbb_niezhai'], ['bangpai:jy_dali'], { drawer: '画师:剑舞江湖', skinLevel: 3 }],
                tlbb_sptianshantonglao: ['female', Group('wei', 'jy_song'), 4, ['tlbb_tongyan', 'tlbb_zhongfu', 'tlbb_duzun'], ['bangpai:jy_xiaoyao'], { drawer: '画师:原画梦佚名', skinLevel: 4 }],
                tlbb_dingchunqiu: ['male', Group('wei', 'jy_song'), 3, ['tlbb_misan', 'tlbb_fugong'], ['bangpai:jy_xiaoyao:jy_xingxiupai'], { drawer: '画师:佚名', skinLevel: 4 }],
                tlbb_muronglongcheng: ['male', Group('shen', 'jy_jue'), 3, ['tlbb_huanshi', 'tlbb_huandou'], ['bangpai:jy_murong'], { drawer: '画师:烈火永恒', skinLevel: 3 }],
                tlbb_saodiseng: ['male', Group('shen', 'jy_jue'), 3, ['tlbb_shuofa', 'tlbb_bolan', 'tlbb_qizhao'], ['bangpai:jy_shaolin'], { drawer: '画师:战江湖', skinLevel: 4 }],
                tlbb_xiaofeng: ['male', Group('qun', 'jy_lie'), 4, ['tlbb_yanbing', 'tlbb_xunzhi'], ['bangpai:jy_youxia'], { drawer: '画师:战江湖', skinLevel: 3 }],
                tlbb_muwanqing: ['female', Group('qun', 'jy_lie'), 3, ['tlbb_muli', 'tlbb_muwanqingjueshi', 'tlbb_shiyin'], ['bangpai:jy_youxia:jy_dali'], { drawer: '画师:天龙八部3D', skinLevel: 4 }],
                tlbb_murongfu: ['male', Group('qun', 'jy_lie'), 3, ['tlbb_yixing', 'tlbb_chongzuo', 'tlbb_qingfu', 'tlbb_zifu'], ['zhu', 'bangpai:jy_murong'], { drawer: '画师:佚名', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=490147488&bvid=BV1XN411B7u2&cid=1244487970&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                tlbb_ruanxingzhu: ['female', Group('wei', 'jy_song'), 3, ['tlbb_dianqing', 'tlbb_chunhui', 'tlbb_yuanmeng'], ['bangpai:jy_youxia'], { drawer: '画师:战江湖', skinLevel: 2 }],
                tlbb_quanguanqing: ['male', Group('wei', 'jy_song'), 4, ['tlbb_zhengbian', 'tlbb_yongli'], ['bangpai:jy_gaibang'], { drawer: '画师:剑舞江湖', skinLevel: 3 }],
                tlbb_murongbo: ['male', Group('qun', 'jy_lie'), 4, ['tlbb_yaodie', 'tlbb_fuyan'], ['bangpai:jy_murong'], { drawer: '画师:zero', skinLevel: 2 }],
                tlbb_wuyazi: ['male', Group('wei', 'jy_song'), 3, ['tlbb_zhenlong', 'tlbb_zaojie', 'tlbb_qingshou'], ['bangpai:jy_xiaoyao'], { drawer: '画师:佚名', skinLevel: 4 }],
                tlbb_spazi: ['female', Group('qun', 'jy_lie'), 3, ['tlbb_daoding', 'tlbb_yingu', 'tlbb_quyi'], ['bangpai:jy_dali:jy_xingxiupai'], { drawer: '画师:畅游', skinLevel: 1 }],
                tlbb_yelvhongji: ['male', Group('qun', 'jy_lie'), 4, ['tlbb_nanzheng', 'tlbb_mingjin', 'tlbb_congjian'], ['zhu', 'bangpai:jy_dalu'], { drawer: '画师:佚名', skinLevel: 2 }],
                tlbb_jiumozhi: ['male', Group('qun', 'jy_lie'), 6, ['tlbb_wuchi', 'tlbb_mozhang'], ['bangpai:jy_mizong'], { drawer: '画师:佚名', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=466126486&bvid=BV185411Z7n7&cid=499870582&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                //jy_mizong【西藏密宗】
                tlbb_jue_tianshantonglao: ['female', Group('shen', 'jy_jue'), '3/9', ['tlbb_huantong', 'tlbb_kongfu', 'tlbb_lingzun'], ['bangpai:jy_xiaoyao'], { drawer: '画师:Grace Liu', skinLevel: 4 }], //artstation.com/artwork/rk2Ye
                tlbb_youtanzhi: ['male', Group('wei', 'jy_song'), '2/6', ['tlbb_guiyi', 'tlbb_tuotai', 'tlbb_xunzang'], ['bangpai:jy_wangzu'], { drawer: '画师:三剑豪2', skinLevel: 4 }],
                tlbb_spjiumozhi: ['male', Group('qun', 'jy_lie'), 5, ['tlbb_qixing', 'tlbb_tanchen', 'tlbb_jieduan'], ['bangpai:jy_mizong'], { drawer: '画师:佚名', skinLevel: 2 }],
                tlbb_juexiaofeng: ['male', Group('shen', 'jy_jue'), 6, ['tlbb_kunlong', 'tlbb_zhuixiong', 'tlbb_suyuan'], ['bangpai:jy_youxia'], { drawer: '画师:新天龙八部', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=242670984&bvid=BV1Re411x7GU&cid=174631083&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                tlbb_qiaofengazhu: ['female', Group('wei', 'jy_song'), 4, ['tlbb_qiaozhuang', 'tlbb_cizhu'], ['bangpai:jy_murong:jy_gaibang'], { drawer: '画师:原画梦佚名', skinLevel: 3 }],
            },
            characterIntro: {
                //武将事迹
            },
            characterTitle: {
                tlbb_xie_liqingluo: '娇花陷泥',
                tlbb_xie_yeerniang: '思孤泣血',
                tlbb_youjiyouju: '游氏双雄',
                tlbb_duanyuwangyuyan: '步罡踏斗',
                tlbb_jue_damo: '超凡入圣',
                tlbb_spwangyuyan: '',
                tlbb_xuemuhua: '',
                tlbb_spduanyu: '',
                tlbb_duanyu: '',
                tlbb_duanyanqing: '',
                tlbb_azhu: '',
                tlbb_xuzhuzi: '',
                tlbb_wangyuyan: '',
                tlbb_kangmin: '',
                tlbb_suxinghe: '',
                tlbb_yuelaosan: '',
                tlbb_zhongling: '',
                tlbb_qiaofeng: '',
                tlbb_ganbaobao: '',
                tlbb_spxuzhu: '',
                tlbb_liqingluo: '',
                tlbb_tianshantonglao: '',
                tlbb_xiaoyuanshan: '',
                tlbb_xuanciyeerniang: '',
                tlbb_yeerniang: '',
                tlbb_madayuan: '',
                tlbb_huangmeiseng: '',
                tlbb_xuzhuliqinglu: '',
                tlbb_baishijing: '',
                tlbb_azhi: '',
                tlbb_baobutong: '',
                tlbb_qinhongmian: '',
                tlbb_xuanci: '',
                tlbb_liqinglu: '',
                tlbb_liqiushui: '',
                tlbb_zhaixingzi: '',
                tlbb_daobaifeng: '',
                tlbb_yunzhonghe: '',
                tlbb_duanzhengchun: '',
                tlbb_sptianshantonglao: '',
                tlbb_dingchunqiu: '',
                tlbb_muronglongcheng: '',
                tlbb_saodiseng: '',
                tlbb_xiaofeng: '',
                tlbb_muwanqing: '',
                tlbb_murongfu: '',
                tlbb_ruanxingzhu: '',
                tlbb_quanguanqing: '',
                tlbb_murongbo: '',
                tlbb_wuyazi: '',
                tlbb_spazi: '',
                tlbb_yelvhongji: '',
                tlbb_jiumozhi: '',
                tlbb_jue_tianshantonglao: '',
                tlbb_youtanzhi: '',
                tlbb_spjiumozhi: '',
                tlbb_juexiaofeng: '',
                tlbb_qiaofengazhu: '',
            },
            card: {
                tlbb_daoying_h: {
                    type: 'basic',
                    fullimage: true,
                    image: 'character:tlbb_yeerniang',
                    filter(event, player) {
                        if (player.countCards('h')) return false;
                        return game.hasPlayer(function(current) {
                            if (current == player) return false;
                            return current.countGainableCards(player, 'h') > 0;
                        });
                    },
                    aiNum(player) {
                        var num = game.countPlayer(function(current) {
                            if (current == player) return false;
                            return current.countGainableCards(player, 'h') > 0 && get.attitude(player, current) <= 0;
                        });
                        if (num > 2) num = 2;
                        num = num * 1.2;
                        //game.log('hhhhh',num);
                        return num;
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(true, '盗婴', '获得至多两名角色的各一张手牌', [1, 2], function(card, player, target) {
                                return player != target && target.countGainableCards(player, 'h') > 0;
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(_status.event.player, target);
                                if (target.hasSkill('tuntian')) return att / 10;
                                return 1 - att;
                            });
                        ('step 1');
                        if (result.bool) {
                            result.targets.sortBySeat();
                            player.gainMultiple(result.targets);
                        }
                    },
                },
                tlbb_daoying_e: {
                    type: 'basic',
                    fullimage: true,
                    image: 'character:tlbb_yeerniang',
                    filter(event, player) {
                        if (player.countCards('e')) return false;
                        var players = game.filterPlayer((i) => i != player);
                        return player.canMoveCard(true, true, players, player);
                    },
                    aiNum(player) {
                        var players = game.filterPlayer((i) => i != player);
                        var count = 0;
                        var list = [
                            function(e) {
                                return get.subtype(e) == 'equip1';
                            },
                            function(e) {
                                return get.subtype(e) == 'equip2';
                            },
                            function(e) {
                                return get.subtype(e) == 'equip3';
                            },
                            function(e) {
                                return get.subtype(e) == 'equip4';
                            },
                            function(e) {
                                return get.subtype(e) == 'equip5';
                            },
                            function(e) {
                                return get.subtype(e) == 'equip6';
                            },
                        ];
                        while (list.length) {
                            var filter = list.shift();
                            if (count > 2) break;
                            for (var j of players) {
                                if (player.canMoveCard(true, true, j, player, filter)) {
                                    count += 1.5;
                                    players.remove(j);
                                    break;
                                }
                            }
                        }
                        return count;
                    },
                    content() {
                        'step 0';
                        event.targets = game.filterPlayer((i) => i != player);
                        ('step 1');
                        if (player.canMoveCard(false, true, event.targets, player)) {
                            var next = player.moveCard(true, event.targets, player);
                            next.set('nojudge', true);
                            event.moveCardEvt = next;
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result && result.bool) {
                            event.targets.remove(event.moveCardEvt.targets[0]);
                            if (player.canMoveCard(false, true, event.targets, player)) {
                                var next = player.moveCard(event.targets, player);
                                next.set('nojudge', true);
                            } else {
                                event.finish();
                            }
                        }
                    },
                },
                tlbb_daoying_j: {
                    type: 'basic',
                    fullimage: true,
                    image: 'character:tlbb_yeerniang',
                    filter(event, player) {
                        if (player.countCards('j')) return false;
                        return game.hasPlayer(function(current) {
                            return current != player && current.countGainableCards(player, 'j') > 0;
                        });
                    },
                    aiNum(player) {
                        var num = game.countPlayer(function(current) {
                            if (current == player) return false;
                            if (current.countGainableCards(player, 'j') > 0)
                                return get.effect(
                                    current,
                                    {
                                        name: 'shunshou_ai',
                                        position: 'j',
                                    },
                                    player,
                                    player
                                ) > 0
                                    ? true
                                    : false;
                            return false;
                        });
                        if (num > 2) num = 2;
                        num = num * 1.2;
                        //game.log('jjjjj',num);
                        return num;
                    },
                    content() {
                        'step 0';
                        event.count = 2;
                        event.forced = true;
                        ('step 1');
                        player
                            .chooseTarget(event.forced, '盗婴', '你可以获得场上至多两张延时锦囊牌', [1, event.count], function(card, player, target) {
                                return player != target && target.countGainableCards(player, 'j') > 0;
                            })
                            .set('ai', function(current) {
                                var player = _status.event.player;
                                return get.effect(
                                    current,
                                    {
                                        name: 'shunshou_ai',
                                        position: 'j',
                                    },
                                    player,
                                    player
                                );
                            });
                        ('step 2');
                        if (result.bool) {
                            result.targets.sortBySeat();
                            player.line(result.targets, 'green');
                            if (result.targets.length == 2) {
                                player.gainMultiple(result.targets, 'j');
                                event.finish();
                                return;
                            } else {
                                player.gainPlayerCard('j', result.targets[0], true);
                                event.count--;
                                event.forced = false;
                                if (event.count > 0) {
                                    event.goto(1);
                                }
                            }
                        }
                    },
                },
                jy_qihua: {
                    //addinfo:"桃",
                    //autoViewAs:"tao",
                    //savable:true,
                    derivation: 'tlbb_shiqinglu',
                    image: 'ext:金庸群侠传/image/equip/jy_qihua.png',
                    audio: 'ext:金庸群侠传/peiyin',
                    type: 'basic',
                    fullskin: true,
                    global: 'jy_qihua_skill',
                    ai: {
                        basic: {
                            useful(card, i) {
                                var player = get.owner(card);
                                if (!player) return 0;
                                if (
                                    !game.hasPlayer(function(current) {
                                        return current != player && current.hasSkill('tlbb_shihua') && get.attitude(player, current) > 0;
                                    })
                                )
                                    return 0;
                                if (player.countCards('h') < 1) return 0;
                                return 4;
                            },
                            value(card, player, i) {
                                if (
                                    !game.hasPlayer(function(current) {
                                        return current != player && current.hasSkill('tlbb_shihua') && get.attitude(player, current) > 0;
                                    })
                                )
                                    return 0;
                                if (player.countCards('h') < 1) return 0;
                                return 4;
                            },
                        },
                    },
                },
                jydiy_xuechan: {
                    derivation: 'tlbb_tangongtanpo',
                    image: 'ext:金庸群侠传/image/equip/jydiy_xuechan.png',
                    audio: 'ext:金庸群侠传/peiyin',
                    fullskin: true,
                    type: 'basic',
                    usable: 1,
                    updateUsable: 'phaseUse',
                    enable(card, player) {
                        return game.hasPlayer((target) => target.hp < target.maxHp);
                    },
                    cardcolor: 'red',
                    filterTarget(card, player, target) {
                        return target.hp < target.maxHp;
                    },
                    destroy: 'discardPile',
                    getCards(count) {
                        const cards = [];
                        if (typeof count != 'number') count = 1;
                        while (count-- > 0) {
                            let card = game.createCard('jydiy_xuechan');
                            cards.push(card);
                        }
                        return cards;
                    },
                    content() {
                        'step 0';
                        //if(typeof event.baseDamage != "number") event.baseDamage=1;
                        //if(target.isDying()||event.getParent(2).type=="dying") {
                        //    if(_status.currentPhase==player&&event.parent.addCount!==false) {
                        //        player.getStat().card.jydiy_xuechan--;
                        //        event.parent.addCount=false;
                        //    };
                        //};
                        target
                            .chooseToDiscard(2, '是否弃置两张牌并回复一体力,否则你摸两张牌并流失一体力')
                            .set('ai', function(card) {
                                if (_status.event.effect >= 0) return -1;
                                const name = card.name;
                                if (name == 'tao') return -10;
                                if (name == 'jiu' && _status.event.player.hp == 1) return -10;
                                return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                            })
                            .set('effect', get.effect(target, { name: 'losehp' }, target, target));
                        ('step 1');
                        if (result.bool) {
                            target.recover();
                        } else {
                            target.draw(2);
                            target.loseHp();
                        }
                    },
                    ai: {
                        basic: {
                            order(item, player) {
                                return 10;
                            },
                            useful: [3, 1],
                            value: 0,
                        },
                        result: {
                            target(player, target) {
                                if (get.effect(target, { name: 'losehp' }, target, target) > 0) return 2;
                                const cards = target.getCards('he').filter((i) => lib.filter.cardDiscardable(i, target, 'jydiy_xuechan'));
                                const att1 = get.attitude(player, target);
                                const saveBool = game.hasPlayer(function(play) {
                                    if (get.attitude(play, target) <= 0) return false;
                                    const count = play.countCards('h', function(card) {
                                        const mod2 = game.checkMod(card, play, 'unchanged', 'cardEnabled2', play);
                                        if (mod2 != 'unchanged') return mod2;
                                        const mod = game.checkMod(card, play, target, 'unchanged', 'cardSavable', play);
                                        if (mod != 'unchanged') return mod;
                                        var savable = get.info(card).savable;
                                        if (typeof savable == 'function') savable = savable(card, play, target);
                                        return savable;
                                    });
                                    return count > 0;
                                });
                                if (target.hp == 1 && !saveBool) {
                                    return -1;
                                }
                                if (target.hp == 1 && saveBool) {
                                    return 1;
                                }
                                if (cards.length > 2) return 0.3 * cards.length;
                                return -0.3;
                            },
                        },
                        tag: {
                            draw: 2,
                            loseHp: 1,
                            recover: 1,
                            loseCard: 2,
                            discard: 2,
                        },
                    },
                },
                tlbb_yanmenyizi: {
                    derivation: 'tlbb_zhiguangdashi',
                    type: 'equip',
                    subtype: 'equip5',
                    fullskin: true,
                    forceDie: true,
                    equipDelay: false,
                    async onEquip(event, trigger, player) {
                        if (player.identity == 'zhu') {
                            player.addSkills('tlbb_fuji');
                        } else if (player.identity == 'zhong') {
                            player.addSkills('tlbb_fulong');
                        } else if (player.identity == 'fan') {
                            player.addSkills('tlbb_huoyan');
                        } else if (player.identity == 'nei') {
                            player.addSkills('tlbb_yaodie');
                        }
                        if (event.card.cards?.length) {
                            const cardx = event.card.cards[0];
                            player.lose(cardx, 'visible', ui.special);
                            player.$throw(cardx, null, 'nobroadcast');
                        }//QQQ
                    },
                    loseDelay: false,
                    ai: {
                        result: {
                            keepAI: true,
                            target(player, target) {
                                if (target.identity == 'zhu' && !target.hasSkill('tlbb_fuji')) {
                                    return 6;
                                } else if (target.identity == 'zhong' && !target.hasSkill('tlbb_fulong')) {
                                    return 6;
                                } else if (target.identity == 'fan' && !target.hasSkill('tlbb_huoyan')) {
                                    return 6;
                                } else if (target.identity == 'nei' && !target.hasSkill('tlbb_yaodie')) {
                                    return 6;
                                }
                                return 0;
                            },
                        },
                    },
                },
            },
            //////技能开始/////
            skill: {
                //邪李青萝 霸天 20240706
                tlbb_xianhua: {
                    subSkill: {
                        removeSkill: {
                            mod: {
                                cardname(card, player) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('tlbb_xianhua')) {
                                        return 'jiu';
                                    }
                                },
                            },
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            forceDie: true,
                            charlotte: true,
                            forced: true,
                            content() {
                                if (
                                    !player.countCards('h', function(i) {
                                        return !i.hasGaintag('tlbb_xianhua');
                                    })
                                ) {
                                    player.removeSkill('tlbb_xianhua_removeSkill');
                                }
                            },
                        },
                    },
                    enable: 'phaseUse',
                    audio: 'ext:金庸群侠传/peiyin:3',
                    usable: 1,
                    filter(event, player) {
                        return game.hasPlayer((current) => current != player && current.countCards('h') > 0);
                    },
                    filterTarget(card, player, target) {
                        return target != player && target.countCards('h') > 0;
                    },
                    content() {
                        'step 0';
                        if (
                            target.countCards('h', function(i) {
                                const numm = i.number;
                                return numm != 1 && numm != 13;
                            }) > 0
                        ) {
                            const next = player.choosePlayerCard(target, true, 'h', 'visible');
                            next.set('ai', function(button) {
                                return Math.random();
                            });
                            next.set('filterButton', function(button) {
                                const numm = button.link.number;
                                return numm != 1 && numm != 13;
                            });
                        } else if (target.countCards('h')) {
                            player.viewHandcards(target);
                            event.finish();
                        }
                        ('step 1');
                        if (result.bool) {
                            const resultcard = result.cards[0];
                            const number = resultcard.number;
                            const listnum = [number - 1, number, number + 1];
                            const gains = [];
                            const gain1 = get.cardPile(function(i) {
                                return i.number == number + 1;
                            });
                            if (gain1) {
                                gains.push(gain1);
                                listnum.push(number + 2);
                            }
                            const gain2 = get.cardPile(function(i) {
                                return i.number == number - 1;
                            });
                            if (gain2) {
                                gains.push(gain2);
                                listnum.push(number - 2);
                            }
                            if (gains.length) {
                                target.gain(gains, 'log', 'gain2');
                                const otherCards = target.getCards('h', function(i) {
                                    return !listnum.includes(i.number);
                                });
                                if (otherCards.length) target.addGaintag(otherCards, 'tlbb_xianhua');
                                target.addSkill('tlbb_xianhua_removeSkill');
                            }
                        }
                    },
                    ai: {
                        order: 1,
                        result: {
                            target(player, target) {
                                return target.countCards('h');
                            },
                        },
                    },
                },
                tlbb_zuifeng: {
                    group: ['tlbb_zuifeng_check', 'tlbb_zuifeng_tieji'],
                    subSkill: {
                        check: {
                            trigger: {
                                global: 'jiuBegin',
                            },
                            silent: true,
                            lastDo: true,
                            filter(event, player) {
                                return event.type == 'card' && event.target && !event.target.hasSkill('jiu');
                            },
                            content() {
                                trigger.tlbb_zuifeng = true;
                            },
                            forced: true,
                            popup: false,
                        },
                        keep: {
                            group: 'ywhy_zuiquan3',
                            charlotte: true,
                        },
                        keep2: {
                            charlotte: true,
                            mod: {
                                cardEnabled(card, player) {
                                    return false;
                                },
                            },
                        },
                        tieji: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.target.hasSkill('jiu')) return false;
                                const type = get.type(event.card);
                                return type == 'trick' || (type == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name));
                            },
                            logTarget: 'target',
                            content() {
                                trigger.parent.directHit.add(trigger.target);
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg.target.hasSkill('jiu')) return false;
                                    const card = arg.card;
                                    const type = get.type(card);
                                    return type == 'trick' || (type == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(card.name));
                                },
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'jiuEnd',
                    },
                    check(event, player) {
                        return get.attitude(player, event.target) <= 0;
                    },
                    logTarget: 'player',
                    filter(event, player) {
                        if (!event.tlbb_zuifeng) {
                            return false;
                        }
                        return event.target && event.target == _status.currentPhase && event.target.hasSkill('jiu');
                    },
                    content() {
                        delete trigger.tlbb_zuifeng;
                        const phase = trigger.getParent('phase');
                        trigger.target.addTempSkill('tlbb_zuifeng_keep', function(eventx, playerx, namex) {
                            if (namex == 'phaseEnd') {
                                if (eventx == phase) return false;
                                return eventx.player == playerx;
                            }
                            return false;
                        });
                        trigger.target.addTempSkill('tlbb_zuifeng_keep2', { player: 'phaseUseEnd' });
                    },
                },
                tlbb_woyu: {
                    group: 'tlbb_woyu_add',
                    subSkill: {
                        add: {
                            trigger: {
                                player: 'recoverBegin',
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                const cards = player.getExpansions('tlbb_woyu');
                                if (!cards.length) return false;
                                let num = 0;
                                for (var i of cards) {
                                    num += i.number;
                                }
                                if (num % 5 != 0) return false;
                                if (event.name == 'recover' && player.hp + event.num >= player.maxHp) return false;
                                return true;
                            },
                            check(trigger, player) {
                                if (trigger.name == 'damage') {
                                    if (get.attitude(player, trigger.player) >= -1) return false;
                                    return !trigger.player.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: trigger.card,
                                    });
                                } else {
                                    return true;
                                }
                            },
                            logTarget: 'player',
                            prompt2(event, player) {
                                const cardsx = player.getExpansions('tlbb_woyu');
                                let numx = 0;
                                for (var i of cardsx) {
                                    numx += i.number;
                                }
                                let count = numx / 5;
                                return '你可以令此次' + event.name == 'recover' ? '回复+' : '伤害+' + count + ',移除所有<腴>.';
                            },
                            content() {
                                const cardsx = player.getExpansions('tlbb_woyu');
                                let numx = 0;
                                for (var i of cardsx) {
                                    numx += i.number;
                                }
                                player.loseToDiscardpile(cardsx);
                                trigger.num += numx / 5;
                            },
                        },
                    },
                    marktext: '沃',
                    onremove(player, skill) {
                        const cards = player.getExpansions(skill);
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                    intro: {
                        content: 'expansion',
                        markcount: 'expansion',
                    },
                    audio: 'ext:金庸群侠传/peiyin:3',
                    trigger: {
                        source: 'damageSource',
                        player: 'damageEnd',
                    },
                    filter(event, player) {
                        return game.hasPlayer(function(target) {
                            return target != player && target.countCards('ej');
                        });
                    },
                    cost() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('tlbb_woyu'), function(card, player, target) {
                                return target != player && target.countCards('ej');
                            })
                            .set('ai', function(target) {
                                return get.effect(
                                    target,
                                    {
                                        name: 'loseCard_ai',
                                        position: 'ej',
                                    },
                                    player,
                                    player
                                );
                            });
                        ('step 1');
                        event.result = result;
                    },
                    content() {
                        'step 0';
                        event.target = event.targets[0];
                        player.choosePlayerCard(event.target, 'ej', true).set('ai', function(button) {
                            const player = _status.event.player;
                            const target = _status.event.target;
                            return lib.card.loseCard_ai.iCard(button.link, player, target);
                        });
                        ('step 1');
                        if (result.bool) player.addToExpansion(result.links, target, 'give').gaintag.add('tlbb_woyu');
                    },
                },
                //邪叶二娘 棉花糖 20240702
                tlbb_shigu: {
                    trigger: {
                        player: 'loseAfter',
                    },
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:3',
                    forced: true,
                    _priority: 10,
                    filter(event, player) {
                        if (!player.countCards('h')) return true;
                        let evt = event.getl(player);
                        let num = player
                            .getCards('h')
                            .map((card) => card.number)
                            .sort((a, b) => a - b)[0];
                        let num2 = evt.hs.map((card) => card.number).sort((a, b) => a - b)[0];
                        return num2 < num;
                    },
                    gainCards(player, num) {
                        let cards = [];
                        while (num > 0) {
                            let list = player.getCards('h').map((item) => item.number);
                            let card = get.cardPile((card) => {
                                if (list.includes(num)) return false;
                                return card.number == num;
                            });
                            if (card) cards.push(card);
                            num--;
                        }
                        return cards || [];
                    },
                    async content(event, trigger, player) {
                        let evt = trigger.getl(player),
                            num;
                        num = !evt.hs.length ? trigger.cards.map((card) => card.number).sort((a, b) => a - b)[0] : evt.hs.map((card) => card.number).sort((a, b) => a - b)[0];
                        let cards = lib.skill[event.name].gainCards(player, num);
                        if (cards.length) player.gain(cards, 'gain2');
                        else player.say('没有合适的牌了');
                    },
                    ai: {
                        noh: true,
                        skillTagFilter(player, tag, arg) {
                            if (tag == 'noh' && arg == player) {
                                if (player.countCards('h') == 1) return true;
                            }
                            return false;
                        },
                    },
                },
                tlbb_yingti: {
                    enable: 'phaseUse',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    usable: 1,
                    filtre(event, player) {
                        return game.hasPlayer((current) => {
                            return current != player && current.countCards('h') > 0;
                        });
                    },
                    async content(event, trigger, player) {
                        let targets = game.filterPlayer((current) => {
                            if (current == player) return false;
                            if (!current.countCards('hej')) return false;
                            return true;
                        }),
                            cards = [];
                        if (!targets.length) return;
                        for (let target of targets) {
                            cards.addArray(target.getCards('hej'));
                        }
                        let num = cards.map((item) => item.number).sort((a, b) => a - b)[0];
                        player.gain(
                            cards.filter((item) => item.number == num),
                            'gain2',
                            'log'
                        );
                    },
                    ai: {
                        order() {
                            let player = get.player(),
                                cards = player.getCards('h'),
                                num = cards.map((item) => item.number).sort((a, b) => a - b)[0];
                            let card = cards.filter((item) => item.number == num)[0];
                            return get.useful(card, player);
                        },
                        result: {
                            player(player, target, card) {//QQQ
                                let cards = player.getCards('h'),
                                    num = cards.map((item) => item.number).sort((a, b) => a - b)[0];
                                let cardx = cards.filter((item) => item.number == num)[0];
                                return get.useful(cardx, player);
                            },
                        },
                    },
                },
                //游骥游驹 霸天 20240623
                tlbb_juxian: {
                    group: ['tlbb_juxian_useCard'],
                    subSkill: {
                        lose: {
                            trigger: { global: 'damageEnd' },
                            forced: true,
                            charlotte: true,
                            popup: false,
                            filter(event, player) {
                                if (!event.card) return false;
                                if (event.card.name != 'juedou') return false;
                                const list = player.getStorage('tlbb_juxian');
                                return list.includes(event.player);
                            },
                            content() {
                                player.loseHp();
                            },
                        },
                        useCard: {
                            trigger: { global: 'useCardAfter' },
                            forced: true,
                            charlotte: true,
                            popup: false,
                            filter(event, player) {
                                if (event.card.name != 'juedou') return false;
                                return event.player.hasHistory('lose', function(evt) {
                                    if (evt.parent != event) return false;
                                    for (var i in evt.gaintag_map) {
                                        if (evt.gaintag_map[i].includes('tlbb_juxian')) return true;
                                    }
                                    return false;
                                });
                            },
                            content() {
                                const bool = trigger.player.hasHistory('sourceDamage', function(evt) {
                                    return evt.card == trigger.card;
                                });
                                if (bool) {
                                    const group2 = get.jy_group(trigger.player);
                                    if (group2 == 'yizu') {
                                        player.draw(2);
                                    } else {
                                        player.draw(1);
                                    }
                                }
                                const bool2 = trigger.player.hasHistory('damage', function(evt) {
                                    return evt.card == trigger.card;
                                });
                                if (bool2) player.loseHp();
                            },
                        },
                        removeSkill: {
                            mod: {
                                cardname(card, player) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('tlbb_juxian')) {
                                        return 'juedou';
                                    }
                                },
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            forceDie: true,
                            charlotte: true,
                            forced: true,
                            content() {
                                if (
                                    !player.countCards('h', function(i) {
                                        return !i.hasGaintag('tlbb_juxian');
                                    })
                                ) {
                                    player.removeSkill('tlbb_juxian_removeSkill');
                                }
                            },
                        },
                    },
                    //intro: {
                    //    content:"$受到等量【比武】的伤害后,你流失一体力",
                    //},
                    enable: 'phaseUse',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    complexTarget: true,
                    complexSelect: true,
                    filterTarget(card, player, target) {
                        if (
                            target.countCards('h', function(i) {
                                return !i.hasGaintag('tlbb_juxian');
                            }) == 0
                        )
                            return false;
                        const bp = get.jy_bangpai(target);
                        if (!bp.length) return true;
                        const targets = ui.selected.targets;
                        for (var i of targets) {
                            const bp2 = get.jy_bangpai(i);
                            if (bp2.some((b) => bp.includes(b))) return false;
                        }
                        return true;
                    },
                    usable: 1,
                    selectTarget: [1, 3],
                    filter(event, player) {
                        return (
                            game.countPlayer(function(target) {
                                return target.countCards('h', function(i) {
                                    return !i.hasGaintag('tlbb_juxian');
                                });
                            }) > 0
                        );
                    },
                    content() {
                        'step 0';
                        target
                            .chooseCard('h', '将一张手牌改为比武', true, function(card) {
                                const player = _status.event.player;
                                return !card.hasGaintag('tlbb_juxian');
                            })
                            .set('ai', function(card) {
                                const player = _status.event.player;
                                if (!player.hasValueTarget(card)) return 1;
                                return 0;
                            });
                        ('step 1');
                        if (result.bool) {
                            target.addGaintag(result.cards, 'tlbb_juxian');
                            target.addSkill('tlbb_juxian_removeSkill');
                            //player.markAuto("tlbb_juxian", [target]);
                        }
                    },
                    ai: {
                        order: 9,
                        result: {
                            target: 1,
                        },
                    },
                },
                tlbb_dunfeng: {
                    group: 'tlbb_dunfeng_sha',
                    subSkill: {
                        sha: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            ignoreMod: true,
                            filterCard() {
                                return false;
                            },
                            selectCard: [0, 1],
                            check() {
                                return 1;
                            },
                            precontent() {
                                player.changeHujia(-1);
                            },
                            viewAs: { name: 'sha' },
                            viewAsFilter(player) {
                                return player.hujia > 0;
                            },
                            prompt: '当你需要使用或打出一张【杀】时,可以消耗一点护盾,视为使用或打出之.',
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    return player.hujia > 0;
                                },
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { target: 'taoBegin' },
                    forced: true,
                    filter(event, player) {
                        return player.isHealthy() && event.player == player;
                    },
                    content() {
                        trigger.setContent(function() {
                            const count = (event.baseDamage || 1) + (event.extraDamage || 0);
                            target.changeHujia(2 * count);
                        });
                    },
                    checkTarget(card, player, target, now) {
                        if (game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player) == false) return false;
                        if (game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target) == false) return false;
                        return true;
                    },
                    ai: {
                        nokeep: true,
                        effect: {
                            player(card, player, target) {
                                if (card.name == 'tao' && player == target && player.isHealthy()) return [0, 1];
                            },
                        },
                    },
                    mod: {
                        playerEnabled(card, player, target, now) {
                            if (player.tlbb_dunfeng_target) return;
                            if (player != target) return;
                            if (card.name != 'tao') return;
                            if (!target.isHealthy()) return;
                            player.tlbb_dunfeng_target = true;
                            const bool = lib.skill.tlbb_dunfeng.checkTarget(card, player, target);
                            delete player.tlbb_dunfeng_target;
                            if (bool === true) return bool;
                        },
                        cardEnabled(card, player, event) {
                            if (player['tlbb_dunfeng_target2']) return;
                            if (card.name != 'tao') return;
                            if (!player.isHealthy()) return;
                            player['tlbb_dunfeng_target2'] = true;
                            const bool = lib.filter.cardEnabled(card, player, 'forceEnable');
                            delete player['tlbb_dunfeng_target2'];
                            if (bool) return bool;
                        },
                    },
                },
                //谭公谭婆  霸天20240526
                tlbb_hanyao: {
                    mark: true,
                    intro: {
                        mark(dialog, storage, player) {
                            const cards = player.getCards('s', function(card) {
                                return card.hasGaintag('tlbb_hanyao');
                            });
                            if (!cards.length) return '没有卡牌';
                            dialog.addAuto(cards);
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    mod: {
                        cardEnabled2(card, player) {
                            if (!card.hasGaintag('tlbb_hanyao')) return;
                            if (_status.event.skill) return false;
                        },
                    },
                    init(player, skill) {
                        if (!player.storage[skill]) {
                            player.storage[skill] = true;
                            const next = game.createEvent('tlbb_hanyao_gain', false);
                            next.player = player;
                            next.setContent(function() {
                                'step 0';
                                lib.inpile.add('jydiy_xuechan');
                                const cardsx = lib.card.jydiy_xuechan.getCards(8);
                                game.log(player, '获得了', cardsx);
                                game.cardsGotoSpecial(cardsx);
                                event.cardsx = cardsx;
                                ('step 1');
                                player.directgains(event.cardsx, null, 'tlbb_hanyao');
                                player.markSkill('tlbb_hanyao');
                            });
                        }
                    },
                },
                tlbb_dielang: {
                    mod: {
                        aiOrder(player, card, num) {
                            if (!player.isPhaseUsing()) return num;
                            if (typeof card == 'object') {
                                const type = get.type(card);
                                if (type != 'basic' && type != 'trick') return num;
                                const history = player.getHistory('useCard', function(evt2) {
                                    return evt2.isPhaseUsing(player);
                                });
                                if (history.length > 2) return num;
                                if (player.getUseValue(card) > 0) {
                                    if (history.length == 0) {
                                        let evt = _status.event;
                                        if (evt.name != 'chooseToUse') evt = evt.getParent('chooseToUse');
                                        if (get.itemtype(evt) !== 'event') evt = undefined;
                                        if (!lib.filter.cardUsable(card, player, evt)) return num;
                                        if (game.hasPlayer((i) => !player.canUse(card, i, null, true) && lib.filter.targetEnabled2(card, player, i) && get.effect(i, card, player, player) > 0)) return num + 12;
                                        return num;
                                    }
                                    if (history.length == 1) {
                                        if (!get.tag(card, 'norepeat')) return num + 12;
                                        return num;
                                    }
                                    if (history.length == 2) {
                                        if (get.tag(card, 'damage')) return num + 12;
                                        return num;
                                    }
                                }
                            }
                            return num;
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'useCard2',
                    },
                    filter1(event, player) {
                        const history = player.getHistory('useCard', function(evt2) {
                            return evt2.isPhaseUsing(player);
                        });
                        if (history.indexOf(event) != 0) return false;
                        const info = get.info(event.card);
                        if (info.allowMultiple == false) return false;
                        if (event.targets && !info.multitarget) {
                            if (
                                game.hasPlayer(function(current) {
                                    if (event.targets.includes(current)) return false;
                                    return lib.filter.targetEnabled2(event.card, player, current);
                                })
                            ) {
                                return true;
                            }
                        }
                        return false;
                    },
                    filter2(event, player) {
                        const history = player.getHistory('useCard', function(evt2) {
                            return evt2.isPhaseUsing(player);
                        });
                        if (history.indexOf(event) != 1) return false;
                        return true;
                    },
                    filter3(event, player) {
                        if (!get.tag(event.card, 'damage')) return false;
                        const history = player.getHistory('useCard', function(evt2) {
                            return evt2.isPhaseUsing(player);
                        });
                        if (history.indexOf(event) != 2) return false;
                        return true;
                    },
                    filter(event, player) {
                        if (!event.isPhaseUsing(player)) return false;
                        if (!event.targets || !event.targets.length) return false;
                        const type = get.type(event.card);
                        if (type != 'basic' && type != 'trick') return false;
                        if (lib.skill.tlbb_dielang.filter1(event, player)) return true;
                        if (lib.skill.tlbb_dielang.filter2(event, player)) return true;
                        if (lib.skill.tlbb_dielang.filter3(event, player)) return true;
                        return false;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        if (lib.skill.tlbb_dielang.filter1(trigger, player)) {
                            const prompt2 = '额外指定一名' + get.translation(trigger.card) + '的目标';
                            player
                                .chooseTarget([1, 1], get.prompt(event.name), function(card, player, target) {
                                    var player = _status.event.player;
                                    if (_status.event.targets.includes(target)) return false;
                                    return lib.filter.targetEnabled2(_status.event.card, player, target);
                                })
                                .set('prompt2', prompt2)
                                .set('ai', function(target) {
                                    var trigger = _status.event.getTrigger();
                                    var player = _status.event.player;
                                    return get.effect(target, trigger.card, player, player);
                                })
                                .set('targets', trigger.targets)
                                .set('card', trigger.card);
                        } else if (lib.skill.tlbb_dielang.filter2(trigger, player)) {
                            trigger.effectCount++;
                            game.log(trigger.card, '额外结算一次');
                            event.finish();
                        } else if (lib.skill.tlbb_dielang.filter3(trigger, player)) {
                            if (!trigger.baseDamage) trigger.baseDamage = 1;
                            trigger.baseDamage += 1;
                            game.log(trigger.card, '造成的伤害加一');
                            event.finish();
                        } else {
                            event.finish();
                        }
                        ('step 1');
                        if (result.bool) {
                            event.targets = result.targets;
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (event.targets) {
                            trigger.targets.addArray(event.targets);
                            game.log(event.targets, '成为了', trigger.card, '的目标');
                        }
                    },
                },
                tlbb_gushi: {
                    enable: 'phaseUse',
                    filterCard: true,
                    selectCard: 1,
                    discard: false,
                    lose: false,
                    delay: 0,
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    filterTarget(card, player, target) {
                        return player != target;
                    },
                    check(card) {
                        if (!ui.selected.cards.length && card.name == 'du') return 20;
                        return 10 - get.value(card);
                    },
                    content() {
                        'step 0';
                        player.give(event.cards, target);
                        ('step 1');
                        const nh = target.countCards('h');
                        const np = player.countCards('h');
                        const count = nh - np;
                        if (count > 0) {
                            player.draw(count);
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result && Array.isArray(result)) {
                            const gaineds = player.getCards('h').filter((i) => result.includes(i) && get.color(i, false) == 'red');
                            if (gaineds.length) {
                                player
                                    .chooseCard('是否销毁' + gaineds.length + '张【雪蟾】？否则你流失' + gaineds.length + '点体力', 's', gaineds.length, function(card, player) {
                                        return card.name == 'jydiy_xuechan';
                                    })
                                    .set('ai', function(card) {
                                        if (_status.event.effect >= 0) return -1;
                                        return 1;
                                    })
                                    .set('effect', get.effect(player, { name: 'losehp' }, player, player));
                            }
                            event.loseCount = gaineds.length;
                        } else {
                            event.finish();
                        }
                        ('step 3');
                        if (result.bool) {
                            player.loseToDiscardpile(result.cards);
                        } else {
                            player.loseHp(event.loseCount);
                        }
                    },
                    ai: {
                        order(skill, player) {
                            return 1;
                        },
                        result: {
                            target(player, target) {
                                if (target.hasSkillTag('nogain')) return 0;
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                    return target.hasSkillTag('nodu') ? 0 : -10;
                                }
                                if (target.hasJudge('lebu')) return 0;
                                const nh = target.countCards('h');
                                const np = player.countCards('h');
                                return nh;
                            },
                        },
                        effect: {
                            target(card, player, target) {
                                if (player == target && get.type(card) == 'equip') {
                                    if (player.countCards('e', { subtype: get.subtype(card) })) {
                                        const players = game.filterPlayer();
                                        for (var i of players) {
                                            if (i != player && get.attitude(player, i) > 0) {
                                                return 0;
                                            }
                                        }
                                    }
                                }
                            },
                        },
                    },
                },
                //风波恶  霸天 20240521
                tlbb_haodou3: {
                    audio: 'tlbb_haodou',
                    trigger: {
                        global: 'useCardAfter',
                    },
                    forced: true,
                    filter(event, player) {
                        if (event.card.name != 'sha') return false;
                        if (event.player == player) return false;
                        const suits = ['club', 'spade', 'diamond', 'heart'];
                        const suit = event.card.suit;
                        if (!suits.includes(suit)) return false;
                        if (player.countCards('h', { suit: suit, name: 'sha' })) return false;
                        return event.cards && event.cards.filterInD('od').length;
                    },
                    content() {
                        player.gain(trigger.cards.filterInD('od'), 'gain2');
                    },
                },
                tlbb_haodou2: {
                    forced: true,
                    audio: 'tlbb_haodou',
                    trigger: {
                        global: ['loseAfter', 'useCardAfter', 'loseAsyncAfter'],
                    },
                    filter(event, player) {
                        if (event.name.indexOf('lose') == 0) {
                            if (event.getlx === false || event.type != 'discard') return false;
                            let cards = [];
                            if (event.name == 'lose') {
                                const evt = event.getl(event.player);
                                if (evt && evt.cards2) cards = evt.cards2;
                            } else {
                                game.countPlayer2(function(i) {
                                    if (i == player) return;
                                    const evt = event.getl(i);
                                    if (evt && evt.cards2) cards.addArray(evt.cards2);
                                });
                            }
                            return cards.filterInD('od').some((i) => i.name == 'juedou');
                        } else {
                            if (event.player == player) return false;
                            if (event.card.name != 'juedou') return false;
                            return event.cards && event.cards.filterInD('od').length;
                        }
                        return false;
                    },
                    content() {
                        if (trigger.name.indexOf('lose') == 0) {
                            let cards = [];
                            if (trigger.name == 'lose') {
                                const evt = trigger.getl(trigger.player);
                                if (evt && evt.cards2) cards = evt.cards2;
                            } else {
                                game.countPlayer2(function(i) {
                                    if (i == player) return;
                                    const evt = trigger.getl(i);
                                    if (evt && evt.cards2) cards.addArray(evt.cards2);
                                });
                            }
                            player.gain(
                                cards.filterInD('od').filter((i) => i.name == 'juedou'),
                                'gain2'
                            );
                        } else {
                            player.gain(trigger.cards.filterInD('od'), 'gain2');
                        }
                    },
                },
                tlbb_haodou: {
                    forced: true,
                    group: ['tlbb_haodou2', 'tlbb_haodou3'],
                    ai: {
                        effect: {
                            target(card, player, target) {
                                if (card.name == 'juedou') return [1, 0, 1, -1];
                            },
                            player(card, player, target) {
                                if (card.name == 'juedou') return [1, 0.3];
                            },
                        },
                    },
                    mod: {
                        cardname(card) {
                            const num = card.number;
                            if (num == 1 || num == 13) return 'juedou';
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:4',
                    trigger: {
                        player: 'useCardToPlayered',
                        target: 'useCardToTargeted',
                    },
                    filter(event, player) {
                        return event.card && event.card.name == 'juedou';
                    },
                    logTarget(event, player) {
                        if (event.player == player) return event.target;
                        return event.player;
                    },
                    content() {
                        const targetx = lib.skill.tlbb_haodou.logTarget(trigger, player);
                        if (targetx != player) {
                            if (!targetx.hasSkill('fengyin')) {
                                targetx.addTempSkill('fengyin');
                            }
                        }
                        if (trigger.target == player) {
                            var id = trigger.target.playerid;
                            var map = trigger.parent.customArgs;
                            if (!map[id]) map[id] = {};
                            map[id].turn = trigger.player;
                        }
                    },
                },
                tlbb_chandou2: {
                    mod: {
                        cardEnabled() {
                            return false;
                        },
                        cardSavable() {
                            return false;
                        },
                        targetEnabled() {
                            return false;
                        },
                    },
                    init(player) {
                        player.classList.add('transparent');
                    },
                    onremove(player) {
                        player.classList.remove('transparent');
                    },
                    intro: {
                        content: '不计入距离的计算且不能使用牌且不是牌的合法目标',
                    },
                    group: 'undist',
                    audio: 'tlbb_chandou',
                    trigger: { global: 'dieAfter' },
                    forced: true,
                    popup: false,
                    content() {
                        player.removeSkill('tlbb_chandou2');
                    },
                },
                tlbb_chandou3: {
                    audio: 'tlbb_chandou',
                    trigger: { player: 'phaseAfter' },
                    forced: true,
                    popup: false,
                    _priority: -50,
                    content() {
                        var target = player.storage.tlbb_chandou3;
                        delete player.storage.tlbb_chandou3;
                        player.removeSkill('tlbb_chandou3');
                        if (!target.isAlive()) {
                            event.finish();
                            return;
                        }
                        var next = player.insertEvent('tlbb_chandouLoop', lib.skill.tlbb_chandou.phaseLoop, {
                            targets: [target, player],
                            num: 0,
                            backup: [],
                            source: player,
                        });
                        next.forceDie = true;
                        for (var i of game.players) {
                            if (i != player && i != target) {
                                i.out('tlbb_chandou');
                                next.backup.push(i);
                            }
                        }
                    },
                },
                tlbb_chandou: {
                    enable: 'phaseUse',
                    audio: 'ext:金庸群侠传/peiyin:3',
                    mark: true,
                    filter(event, player) {
                        if (event.skill) return false;
                        if (
                            !game.hasPlayer(function(target) {
                                if (target.hp != player.hp) return false;
                                return player != target;
                            })
                        )
                            return false;
                        return !player.storage.tlbb_chandou;
                    },
                    filterTarget(card, player, target) {
                        if (target.hp != player.hp) return false;
                        return player != target;
                    },
                    attitude(form, to) {
                        if (form == to) return 1;
                        return -1;
                    },
                    content() {
                        player.storage[event.name] = true;
                        player.awakenSkill(event.name);
                        var evt = _status.event;
                        for (var i = 0; i < 10; i++) {
                            if (evt && evt.getParent) {
                                evt = evt.parent;
                            }
                            if (evt.name == 'phaseUse') {
                                evt.skipped = true;
                                break;
                            }
                        }
                        player.storage.tlbb_chandou3 = target;
                        player.addSkill('tlbb_chandou3');
                    },
                    phaseLoop() {
                        'step 0';
                        if (!_status.ai) _status.ai = {};
                        if (!_status.ai.customAttitude) _status.ai.customAttitude = [];
                        _status.ai.customAttitude.push(lib.skill.tlbb_chandou.attitude);
                        ('step 1');
                        targets[0].phase('tlbb_chandou');
                        ('step 2');
                        if (targets[0].isDead() || targets[1].isDead()) {
                            event.goto(4);
                        } else {
                            targets[1].phase('tlbb_chandou');
                        }
                        ('step 3');
                        if (targets[0].isDead() || targets[1].isDead()) {
                            event.goto(4);
                        } else {
                            event.goto(1);
                        }
                        ('step 4');
                        if (targets[0].isDead()) {
                            targets[1].draw(3);
                        } else {
                            targets[0].draw(3);
                        }
                        _status.ai.customAttitude.remove(lib.skill.tlbb_chandou.attitude);
                        for (var i = 0; i < event.backup.length; i++) {
                            event.backup[i].in('tlbb_chandou');
                        }
                    },
                    init(player, skill) {
                        player.storage[skill] = false;
                    },
                    intro: {
                        content: 'limited',
                    },
                    ai: {
                        order: 1,
                        result: {
                            target(player, target) {
                                return -1;
                            },
                        },
                    },
                },
                //绝萧远山慕容博20240410 霸天
                tlbb_tongxiu: {
                    trigger: { player: 'useCard' },
                    forced: true,
                    filter(event, player) {
                        const number = event.card.number;
                        return typeof number == 'number';
                    },
                    content() {
                        const number = trigger.card.number;
                        const card2 = get.cardPile(function(card) {
                            return card.number == number;
                        });
                        if (card2) player.gain(card2, 'gain2');
                    },
                },
                tlbb_jiaotou: {
                    group: 'tlbb_jiaotou_silent',
                    subSkill: {
                        silent: {
                            trigger: {
                                player: 'useCard1',
                            },
                            filter(event, player) {
                                if (event.addCount === false) return false;
                                return (
                                    player.getHistory('lose', function(evt) {
                                        if (evt.parent != event) return false;
                                        for (var i in evt.gaintag_map) {
                                            if (evt.gaintag_map[i].includes('tlbb_jiaotou')) return true;
                                        }
                                        return false;
                                    }).length
                                );
                            },
                            silent: true,
                            firstDo: true,
                            content() {
                                trigger.addCount = false;
                                var stat = player.getStat();
                                if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
                            },
                            forced: true,
                            popup: false,
                        },
                    },
                    mark: true,
                    forced: true,
                    intro: {
                        content: '已经选择了$',
                    },
                    mod: {
                        selectTarget(card, player, range) {
                            if (get.itemtype(card) == 'card') {
                                card = card;
                            }
                            if (!card.cards) return;
                            for (var i of card.cards) {
                                if (i.hasGaintag('tlbb_jiaotou')) {
                                    range[0] = 1;
                                    range[1] = Infinity;
                                    break;
                                }
                            }
                        },
                        aiOrder(player, card, num) {
                            if (get.itemtype(card) == 'card' && card.hasGaintag('tlbb_jiaotou')) return num + 0.1;
                        },
                        maxHandcard(player, num) {
                            return num + 2;
                        },
                        targetInRange(card, player, target) {
                            if (!card.cards) return;
                            for (var i of card.cards) {
                                if (i.hasGaintag('tlbb_jiaotou')) return true;
                            }
                        },
                        cardUsable(card, player, target) {
                            if (!card.cards) return;
                            for (var i of card.cards) {
                                if (i.hasGaintag('tlbb_jiaotou')) return Infinity;
                            }
                        },
                        cardname(card, player) {
                            if (get.itemtype(card) == 'card' && card.hasGaintag('tlbb_jiaotou')) {
                                for (const tag of card.gaintag) {
                                    if (tag.startsWith('tlbb_jiaotou::')) {
                                        let cardname = tag.split('::');
                                        return cardname[1];
                                    }
                                }
                            }
                        },
                    },
                    trigger: {
                        target: 'useCardToTarget',
                    },
                    forced: true,
                    filter(event, player) {
                        if (player.getStorage('tlbb_jiaotou').includes(event.card.name)) return false;
                        if (
                            !player.countCards('h', function(i) {
                                return !i.hasGaintag('tlbb_jiaotou');
                            })
                        )
                            return false;
                        return get.tag(event.card, 'damage');
                    },
                    content() {
                        'step 0';
                        player
                            .chooseCard('h', get.prompt2(event.name), function(card) {
                                const player = _status.event.player;
                                return !card.hasGaintag('tlbb_jiaotou');
                            })
                            .set('ai', function(card) {
                                const player = _status.event.player;
                                if (!player.hasValueTarget(card)) return 1;
                                return 0;
                            });
                        ('step 1');
                        if (result.bool) {
                            player.markAuto(event.name, [trigger.card.name]);
                            player.addGaintag(result.cards, event.name);
                            const tag = event.name + '::' + trigger.card.name;
                            lib.translate[tag] = 'invisible';
                            player.addGaintag(result.cards, tag);
                        }
                    },
                },
                tlbb_chouhai: {
                    enable: 'phaseUse',
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    usable: 1,
                    selectTarget: [1, 4],
                    filterTarget(card, player, target) {
                        if (target == player) return false;
                        return target.countCards('h') >= player.countCards('h');
                    },
                    content() {
                        'step 0';
                        const count1 = target.countCards('h');
                        const count2 = player.countCards('h');
                        const num = count1 - count2 + 1;
                        if (num > 0) {
                            target.chooseToDiscard(num).set('ai', (card) => {
                                const player = _status.event.player;
                                if (card.name == 'tao') return -10;
                                if (card.name == 'jiu' && player.hp == 1) return -10;
                                if (get.effect(player, { name: 'losehp' }, player, player) > 0) return -10;
                                return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                            });
                        } else event._result = { bool: false };
                        ('step 1');
                        if (!result.bool) {
                            target.loseHp();
                        }
                    },
                    ai: {
                        order: 9,
                        result: {
                            target(player, target) {
                                const count1 = target.countCards('h');
                                const count2 = player.countCards('h');
                                const num = count1 - count2 + 1;
                                return num > 0 ? -num : 0;
                            },
                        },
                    },
                },
                tlbb_qianyi: {
                    mod: {
                        maxHandcard(player, num) {
                            return num + 2;
                        },
                    },
                    trigger: { target: 'useCardToTarget' },
                    forced: true,
                    preHidden: true,
                    filter(event, player) {
                        if (get.tag(event.card, 'damage')) return false;
                        if (event.player == player) return false;
                        if (event.targets.length != 1) return false;
                        if (player.countCards('he') == 0) return false;
                        return game.hasPlayer((current) => {
                            return current != player && lib.filter.targetEnabled2(event.card, event.player, current) && !event.targets.includes(current);
                        });
                    },
                    content() {
                        'step 0';
                        player.chooseCardTarget({
                            _trigger: trigger,
                            position: 'he',
                            filterCard: lib.filter.cardDiscardable,
                            filterTarget(card, player, target) {
                                const trigger = _status.event._trigger;
                                if (target != player) {
                                    if (lib.filter.targetEnabled2(trigger.card, trigger.player, target) && !trigger.targets.includes(target)) return true;
                                }
                                return false;
                            },
                            ai1(card) {
                                return get.unuseful(card) + card.number / 13;
                            },
                            ai2(target) {
                                const trigger = _status.event._trigger;
                                const player = _status.event.player;
                                return get.effect(target, trigger.card, trigger.player, player);
                            },
                            prompt: get.prompt(event.name),
                            prompt2: '其他角色使用非伤害类卡牌指定你为唯一目标时,你可以弃置一张手牌并指定一名其他角色,根据你弃置牌的点数,此牌的目标有一定几率转移给你指定的角色.A至4点(60%) ; 5至9点(70%) ; 10至Q(80%),K点(100%).',
                        });
                        ('step 1');
                        if (result.bool) {
                            const target = result.targets[0];
                            player.discard(result.cards);
                            const round = (function(number) {
                                if ([1, 2, 3, 4].includes(number)) {
                                    return 0.6;
                                } else if ([5, 6, 7, 8, 9].includes(number)) {
                                    return 0.7;
                                } else if ([10, 11, 12].includes(number)) {
                                    return 0.8;
                                }
                                return 1;
                            })(result.cards[0].number);
                            if (Math.random() <= round) {
                                const evt = trigger.parent;
                                evt.triggeredTargets2.remove(player);
                                evt.targets.remove(player);
                                evt.targets.push(target);
                            } else {
                                game.log(player, '转移失败!');
                            }
                        }
                    },
                    ai: {
                        effect: {
                            target(card, player, target) {
                            },
                        },
                    },
                },
                tlbb_zuiye: {
                    trigger: {
                        global: 'useCardToTargeted',
                    },
                    lastDo: true,
                    check(event, player) {
                        let eff = 0;
                        player.tlbb_zuiye_unequip = true;
                        player.tlbb_zuiye_target = true;
                        player.tlbb_zuiye_player = true;
                        const fackCard = event.card;
                        fackCard.name = 'juedou';
                        const targets = event.targets.filter((i) => !event.parent.excluded.includes(i));
                        for (var i = 0; i < targets.length; i++) {
                            const target = targets[i];
                            const eff1 = get.effect(target, event.card, event.player, player);
                            const eff2 = get.effect(target, fackCard, event.player, player);
                            eff += eff2;
                            eff -= eff1;
                        }
                        delete player.tlbb_zuiye_unequip;
                        delete player.tlbb_zuiye_target;
                        delete player.tlbb_zuiye_player;
                        return eff > 0;
                    },
                    logTarget: 'targets',
                    prompt2(event, player) {
                        let fackCard = event.card;
                        fackCard.name = 'juedou';
                        return '是否将' + get.translation(event.card) + '改为' + get.translation(fackCard);
                    },
                    filter(event, player) {
                        if (event.targets.length != event.parent.triggeredTargets4.length) return false;
                        if (event.card.suit != 'spade') return false;
                        if (event.card.name == 'juedou') return false;
                        if (event.target == event.player) return false;
                        const type = get.type(event.card);
                        return type == 'trick' || type == 'basic';
                    },
                    content() {
                        const fackCard = trigger.card;
                        trigger.card.name = 'juedou';
                        game.log(player, '将', fackCard, '改为了', trigger.card);
                    },
                    ai: {
                        unequip: true,
                        skillTagFilter(player, tag, arg) {
                            if (get.attitude(player, arg.target) > 0) return false;
                            if (arg && arg.card) {
                                if (arg.card.suit != 'spade') return false;
                                if (arg && arg.card.name == 'juedou') return false;
                                const type = get.type(arg.card);
                                if (type != 'trick' && type != 'basic') return false;
                            }
                            if (player.tlbb_zuiye_unequip) return false;
                            if (arg && arg.card && ['sha', 'wanjian', 'nanman'].includes(arg.card.name) && arg.target.getEquips(2).length) {
                                const eff1 = get.effect(arg.target, arg.card, player, player);
                                player.tlbb_zuiye_unequip = true;
                                const eff2 = get.effect(arg.target, arg.card, player, player);
                                delete player.tlbb_zuiye_unequip;
                                if (eff1 > eff2) return true;
                                return false;
                            }
                            return false;
                        },
                        effect: {
                            target(card, player, target, resultTarget, isLink) {
                                if (!target) return;
                                if (card.suit != 'spade') return;
                                if (card.name == 'juedou') return;
                                const type = get.type(card);
                                if (type != 'trick' && type != 'basic') return;
                                if (target.tlbb_zuiye_target) return;
                                target.tlbb_zuiye_target = true;
                                const evt = _status.event;
                                const sgnAtt = get.sgnAttitude(player, target);
                                const result = get.effect(target, card, player, target) * sgnAtt;
                                const fackCard = card;
                                fackCard.name = 'juedou';
                                const result2 = get.effect(target, fackCard, player, target) * sgnAtt;
                                delete target.tlbb_zuiye_player;
                                //[卡牌对目标的收益倍数,卡牌对目标的额外收益,使用者收益倍数,使用者的额外收益]
                                if (result2 > result) {
                                    return;
                                    //return [1,2,1,0];
                                } else return [0, 1, 1, 0];
                            },
                            player(card, player, target, resultPlayer, isLink) {
                                if (!target) return;
                                if (card.suit != 'spade') return;
                                if (card.name == 'juedou') return;
                                const type = get.type(card);
                                if (type != 'trick' && type != 'basic') return;
                                if (player.tlbb_zuiye_player) return;
                                player.tlbb_zuiye_player = true;
                                const evt = _status.event;
                                const result = get.effect(target, card, player, player);
                                const fackCard = card;
                                fackCard.name = 'juedou';
                                const result2 = get.effect(target, fackCard, player, player);
                                delete player.tlbb_zuiye_player;
                                //[使用者的收益倍数,使用者的额外收益,卡牌对目标的收益倍数,卡牌对目标额外的收益]
                                if (result2 > result) {
                                    return [1, resultPlayer > 0 ? 0.5 : 0.5 - resultPlayer, 1, 0];
                                }
                            },
                        },
                    },
                },
                //段誉王语嫣  霸天20240330
                tlbb_bowen: {
                    //forced:true,
                    onremove(player, skill) {
                        var next = game.createEvent('zhuque_clear');
                        next.player = player;
                        next.setContent(function() {
                            'step 0';
                            if (!player.expandedSlots) player.expandedSlots = {};
                            if (player.hasDisabledSlot(3)) {
                                player.enableEquip(3);
                                if (!player.expandedSlots['equip3']) player.expandedSlots['equip3'] = 0;
                                player.expandedSlots['equip3']--;
                            }
                            if (player.hasDisabledSlot(4)) {
                                player.enableEquip(4);
                                if (!player.expandedSlots['equip4']) player.expandedSlots['equip4'] = 0;
                                player.expandedSlots['equip4']--;
                            }
                            ('step 1');
                            player.$syncExpand();
                        });
                    },
                    init(player, skill) {
                        var next = game.createEvent('zhuque_clear');
                        next.player = player;
                        next.setContent(function() {
                            if (player.hasEnabledSlot(3)) {
                                player.disableEquip(3);
                                player.expandEquip(5);
                            }
                            if (player.hasEnabledSlot(4)) {
                                player.disableEquip(4);
                                player.expandEquip(5);
                            }
                        });
                    },
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    position: 'h',
                    discard: false,
                    lose: false,
                    delay: false,
                    filterCard(card, player, event) {
                        let cardname = card.name;
                        if (lib.jy_mijiList.includes(cardname)) return false;
                        let info = get.translation(cardname, 'info');
                        if (!info || typeof info != 'string') return false;
                        if (!/摸或获得|使用|伤害|回复/.test(info)) return false;
                        return lib.filter.cardDiscardable(card, player, event);
                    },
                    selectCard: [1, 1],
                    check(card) {
                        var player = _status.event.player;
                        if (
                            get.position(card) == 'h' &&
                            !player.countCards('h', 'du') &&
                            (player.hp > 2 ||
                                !player.countCards('h', function(card) {
                                    return get.value(card) >= 8;
                                }))
                        ) {
                            return 1;
                        }
                        return 6 - get.value(card);
                    },
                    content() {
                        'step 0';
                        player.discard(cards);
                        let testx = [];
                        let cardname = cards[0].name;
                        let info = get.translation(cardname, 'info');
                        if (/摸或获得/.test(info)) testx.push('摸或获得');
                        if (/使用/.test(info)) testx.push('使用');
                        if (/伤害/.test(info)) testx.push('伤害');
                        if (/回复/.test(info)) testx.push('回复');
                        const regexp = new RegExp(testx.join('|'), 'g');
                        const miji = get.cardPile(function(card) {
                            if (!lib.jy_mijiList.includes(card.name)) return false;
                            let info2 = get.translation(card.name, 'info');
                            if (!regexp.test(info2)) return false;
                            if (!player.canUse(card, player)) return false;
                            return true;
                        });
                        if (miji) {
                            player.useCard(miji, player);
                        } else {
                            const mijilist = lib.jy_mijiList.filter(function(name) {
                                let info2 = get.translation(name, 'info');
                                if (!regexp.test(info2)) return false;
                                if (!player.canUse({ name: name }, player)) return false;
                                return true;
                            });
                            if (mijilist.length) {
                                player.useCard(game.createCard(mijilist.randomGet()), player);
                            }
                        }
                    },
                },
                tlbb_bugang: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: ['useCard1', 'respond'] },
                    filter(event, player) {
                        if (event.card.name != 'shan') return false;
                        if (!event.card.nature) return false;
                        if (event.skill) return false;
                        if (!event.cards || event.cards.length != 1) return false;
                        if (event.cards[0].nature) return false;
                        return event.card && event.card.nature == 'jy_shuangfei' || event.card.nature == 'jy_lingbo';
                    },
                    forced: true,
                    firstDo: true,
                    content() { },
                    mod: {
                        cardnature(card, owner, nature) {
                            if (card.name != 'shan') return;
                            if (!nature) {
                                var suit = card.suit;
                                if (suit == 'heart') return 'jy_shuangfei';
                                if (suit == 'diamond') return 'jy_lingbo';
                            }
                        },
                    },
                },
                tlbb_liumai2: {
                    popup: false,
                    forced: true,
                    charlotte: true,
                    audio: 'tlbb_liumai',
                    mark: true,
                    mod: {
                        cardEnabled(card) {
                            var number = card.number;
                            if (typeof number !== 'number') return;
                            if (number % 2 == 0) return false;
                        },
                    },
                    intro: {
                        content: '不能使用点数2的倍数点数的牌',
                    },
                },
                tlbb_liumai4: {
                    popup: false,
                    forced: true,
                    audio: 'tlbb_liumai',
                    charlotte: true,
                    ai: {
                        directHit_ai: true,
                        skillTagFilter(player, tag, arg) {
                            var target = arg.target;
                            var bool1 = target.hp == 2;
                            var bool2 = target.countCards('h') == 2;
                            var bool3 = target.countCards('e') == 2;
                            if (!(bool1 || bool2 || bool3)) return false;
                            if (arg && arg.card.name != 'sha') return false;
                        },
                    },
                },
                tlbb_liumai6: {
                    popup: false,
                    forced: true,
                    charlotte: true,
                    charlotte: true,
                    audio: 'tlbb_liumai',
                    trigger: { source: ['damageEnd'] },
                    forced: true,
                    filter(event, player) {
                        if (event.player.isDead() || event.num <= 0) return false;
                        if (!event.card || event.card.tlbb_liumai !== true) return false;
                        return true;
                    },
                    logTarget: 'player',
                    content() {
                        player.addTempSkill('tlbb_liumai66', { player: ['phaseBegin', 'die'] });
                        player.storage['tlbb_liumai66'].add(trigger.player);
                    },
                },
                tlbb_liumai66: {
                    popup: false,
                    forced: true,
                    charlotte: true,
                    charlotte: true,
                    init(player, skill) {
                        if (!player.storage[skill]) player.storage[skill] = [];
                    },
                    audio: 'tlbb_liumai',
                    trigger: { global: ['gainEnd', 'recoverEnd'] },
                    forced: true,
                    filter(event, player) {
                        return player.storage['tlbb_liumai66'].includes(event.player);
                    },
                    content() {
                        if (trigger.name == 'gain') {
                            var count = trigger.player.countCards('h');
                            if (count > 3) {
                                const discount = count - 3;
                                var getCards = trigger.player.getCards('h', function(i) {
                                    return lib.filter.cardDiscardable(i, trigger.player, event.name);
                                });
                                if (discount >= getCards.length) {
                                    player.line(trigger.player);
                                    trigger.player.discard(getCards);
                                } else {
                                    player.line(trigger.player);
                                    trigger.player.chooseToDiscard(discount, true, 'h');
                                }
                            }
                        }
                        if (trigger.name == 'recover') {
                            var count = trigger.player.hp;
                            if (count > 3) {
                                const discount = count - 3;
                                trigger.player.loseHp(discount);
                                player.line(trigger.player);
                            }
                        }
                    },
                },
                tlbb_liumai8: {
                    audio: 'tlbb_liumai',
                    trigger: {
                        player: 'damageEnd',
                    },
                    popup: false,
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        return event.card && event.card.tlbb_liumai === true;
                    },
                    content() {
                        player.turnOver();
                        player.draw(4);
                    },
                },
                tlbb_liumai10: {
                    popup: false,
                    forced: true,
                    audio: 'tlbb_liumai',
                    charlotte: true,
                    ai: {
                        unequip: true,
                        skillTagFilter(player, tag, arg) {
                            if (arg && arg.name == 'sha') return true;
                            return false;
                        },
                    },
                },
                tlbb_liumai12: {
                    popup: false,
                    forced: true,
                    audio: 'tlbb_liumai',
                    charlotte: true,
                    mark: true,
                    mod: {
                        cardEnabled(card) {
                            var number = card.number;
                            if (typeof number !== 'number') return;
                            if ([1, 2, 3, 4, 6, 12].includes(number)) return false;
                        },
                    },
                    intro: {
                        content: '不能使用12的因数点数的牌',
                    },
                },
                tlbb_liumai: {
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    content() {
                        'step 0';
                        const sha = get.cardPile(function(card) {
                            if (card.name != 'sha') return false;
                            if (card.number % 2 != 0) return false;
                            return true;
                        });
                        if (sha) {
                            player.gain(sha);
                            event.shaCard = sha;
                        } else {
                            event.finish();
                        }
                        ('step 1');
                        var card = event.shaCard;
                        if (
                            card &&
                            game.hasPlayer(function(current) {
                                return player.canUse(card, current, card.number == 10 ? false : null);
                            }) &&
                            player.getCards('h').includes(card)
                        ) {
                            if (card.number == 10) player.addTempSkill('tlbb_liumai10');
                            if (card.number == 4) player.addTempSkill('tlbb_liumai4');
                            player.addTempSkill('tlbb_liumai3');
                            //game.log("1111111")
                            player.chooseToUse({
                                prompt: '六脉',
                                prompt2: '是否使用' + get.translation(card) + '？',
                                filterCard(cardx, player, target) {
                                    return cardx == _status.event.cardx;
                                },
                                filterTarget: (function() {
                                    if (card.number == 10) return lib.filter.targetEnabled;
                                    return lib.filter.filterTarget;
                                })(),
                                addCount: false,
                                cardx: card,
                                onresult(result) { },
                                oncard(card, player) {
                                    player.removeSkill('tlbb_liumai10');
                                    player.removeSkill('tlbb_liumai4');
                                    card.tlbb_liumai = true;
                                },
                            });
                        }
                        ('step 2');
                        player.removeSkill('tlbb_liumai10');
                        player.removeSkill('tlbb_liumai4');
                        player.removeSkill('tlbb_liumai3');
                    },
                    ai: {
                        order() {
                            return get.order({ name: 'sha' }) + 0.1;
                        },
                        result: {
                            player: 1,
                        },
                    },
                },
                tlbb_liumai3: {
                    trigger: {
                        player: 'useCardToPlayered',
                    },
                    filter(event, player) {
                        return event.card.tlbb_liumai === true;
                    },
                    popup: false,
                    forced: true,
                    charlotte: true,
                    content() {
                        let number = trigger.card.number;
                        if (number == 2) {
                            trigger.target.addTempSkill('tlbb_liumai2');
                            var next = game.createEvent('zhuque_clear');
                            next.player = trigger.target;
                            event.next.remove(next);
                            trigger.parent.after.push(next);
                            next.setContent(function() {
                                player.removeSkill('tlbb_liumai2');
                            });
                        } else if (number == 4) {
                            var bool1 = trigger.target.hp == 2;
                            var bool2 = trigger.target.countCards('h') == 2;
                            var bool3 = trigger.target.countCards('e') == 2;
                            if (bool1 || bool2 || bool3) trigger.parent.directHit.add(trigger.target);
                        } else if (number == 6) {
                            player.addTempSkill('tlbb_liumai6');
                            //player.addTempSkill("tlbb_liumai6",{player:['phaseBegin','die']});
                            //player.addTempSkill("tlbb_liumai6",{player:['phaseBegin','die']});
                            //player.storage["tlbb_liumai6"].add(trigger.target);
                        } else if (number == 8) {
                            trigger.target.addTempSkill('tlbb_liumai8');
                            var next = game.createEvent('zhuque_clear');
                            next.player = trigger.target;
                            event.next.remove(next);
                            trigger.parent.after.push(next);
                            next.setContent(function() {
                                player.removeSkill('tlbb_liumai8');
                            });
                        } else if (number == 10) {
                            trigger.target.addTempSkill('qinggang2');
                            trigger.target.storage.qinggang2.add(trigger.card);
                            trigger.target.markSkill('qinggang2');
                        } else if (number == 12) {
                            trigger.target.addTempSkill('tlbb_liumai12');
                            var next = game.createEvent('zhuque_clear');
                            next.player = trigger.target;
                            event.next.remove(next);
                            trigger.parent.after.push(next);
                            next.setContent(function() {
                                player.removeSkill('tlbb_liumai12');
                            });
                        }
                    },
                },
                //梅兰竹菊 棉花糖  230814
                tlbb_tongxin: {
                    audio: 'ext:金庸群侠传/peiyin:3',
                    trigger: {
                        target: 'useCardToTarget',
                    },
                    forced: true,
                    _priority: -1,
                    filter(event, player) {
                        if (!event.cards || !event.cards.length) return false;
                        if (event.player == player) return false;
                        if (!event.targets.includes(player)) return false;
                        if (event.card.suit == 'none') return false;
                        var cards = player.getCards('h', function(card) {
                            return card.suit == event.card.suit;
                        });
                        if (cards.length) return false;
                        return true;
                    },
                    group: 'tlbb_tongxin_lose',
                    content() {
                        'step 0';
                        trigger.targets.remove(player);
                        game.log(player, '移除了', trigger.cards[0], '为', player, '的目标');
                        ('step 1');
                        var evt = event.getParent('useCard');
                        if (evt && evt.getParent) {
                            var next = game.createEvent('tlbb_tongxin_gain', false, evt.parent);
                            next.player = player;
                            next.card = trigger.cards[0];
                            next.setContent(function() {
                                //game.cardsGotoSpecial(card);
                                if (get.position(card) == 'd') player.gain(card, 'gain2', 'log');
                            });
                        }
                    },
                    subSkill: {
                        lose: {
                            trigger: {
                                global: 'loseAfter',
                            },
                            _priority: 1,
                            //其他角色因弃置失去一张手牌后,你可以弃置所有与此牌花色相同的手牌,将此牌返还其手牌区里
                            filter(event, player) {
                                if (event.type != 'discard') return false;
                                return event.cards?.some((q) => player.countCards('h', (card) => card.suit == q.suit));
                            },//QQQ
                            prompt(event, player) {
                                var cards = player.getCards('h', function(card) {
                                    return card.suit == event.card.suit;
                                });
                                var str = '同心:是否弃置' + get.translation(cards) + '令' + get.translation(event.cards[0]) + '返回' + get.translation(event.player) + '的手牌区？';
                                return str;
                            },
                            async content(event, trigger, player) {
                                for (const i of trigger.cards) {
                                    const cards = player.getCards('h', (card) => card.suit == i.suit);
                                    if (cards.length) {
                                        player.discard(cards);
                                        trigger.player.gain(i, 'gain2');
                                    }
                                }
                            },
                        },
                    },
                },
                tlbb_sijun: {
                    audio: 'ext:金庸群侠传/peiyin:9',
                    trigger: {
                        player: 'loseAfter',
                    },
                    _priority: -1,
                    firstDo: true,
                    filter(event, player) {
                        if (!event.cards || !event.cards.length) return false;
                        if (event.cards.length < 2) return false;
                        if (event.getParent('tlbb_sijun').name == 'tlbb_sijun') return false;
                        var list = [];
                        var cards = event.cards.slice(0);
                        for (var i of cards) {
                            if (!list.includes(i.suit)) list.add(i.suit);
                        }
                        if (list.includes('none')) return false;
                        if (list.length == 1 || list.length == 4) return true;
                        return false;
                    },
                    spade() {
                        'step 0';
                        var controlList = [`对至多${num}名角色使用一张随机延时锦囊牌`, `弃置至多${num}张延时锦囊牌`];
                        event.trickCard = false;
                        if (
                            !game.hasPlayer(function(current) {
                                return current.countCards('j');
                            })
                        )
                            controlList.remove(controlList[1]);
                        player.chooseControlList(get.prompt(event.name, player), controlList).set('ai', function() {
                            return 1;
                        });
                        ('step 1');
                        if (result.control != 'cancel2') {
                            if (result.index == 0) event.trickCard = true;
                        } else {
                            event.finish();
                            return;
                        }
                        ('step 2');
                        if (!event.trickCard) {
                            var str = `弃置至多${num}张延时锦囊牌`;
                        } else {
                            var str = `对至多${num}名角色使用一张随机延时锦囊牌`;
                        }
                        player.chooseTarget([0, num], str, function(card, player, target) {
                            if (!event.trickCard) {
                                return target.countCards('j');
                            }
                            return true;
                        });
                        ('step 3');
                        if (result.bool) {
                            var targets = result.targets;
                            for (var target of targets) {
                                if (!event.trickCard) {
                                    player.discardPlayerCard('j', target, true);
                                } else {
                                    var cards = Array.from(ui.cardPile.childNodes).filter((card) => get.type(card) == 'delay' && get.color(card) == 'black');
                                    if (cards.length) {
                                        var card = cards.randomGet();
                                    } else {
                                        player.say('牌堆没有延时锦囊牌');
                                        break;
                                    }
                                    if (target.canAddJudge(card)) {
                                        target.addJudge(game.createCard(card));
                                        target.$gain2(card);
                                    }
                                }
                            }
                        }
                    },
                    diamond() {
                        'step 0';
                        player.chooseTarget([1, num], `令一名角色摸${num}张牌或令${num}名角色各摸一张牌`).set('ai', function(target) {
                            var att = get.attitude(player, target);
                            return att;
                        });
                        ('step 1');
                        if (result.bool) {
                            var targets = result.targets;
                            if (targets.length == 1) {
                                targets[0].draw(num);
                            } else {
                                for (var target of targets) {
                                    target.draw();
                                }
                            }
                        }
                    },
                    club() {
                        'step 0';
                        player.chooseTarget([1, num], `令${num}名角色各使用一张攻击范围为1的牌`).set('ai', function(target) {
                            var att = get.attitude(player, target);
                            return att;
                        });
                        ('step 1');
                        if (result.bool) {
                            var targets = result.targets;
                            for (var target of targets) {
                                var cards2 = Array.from(ui.cardPile.childNodes).filter((card) => get.subtype(card) == 'equip1' && player.getEquipRange([card]) == 1);
                                if (cards2.length) {
                                    var card = cards2.randomGet();
                                } else {
                                    player.say('牌堆没有符合条件的武器牌');
                                    break;
                                }
                                if (card) target.equip(card);
                            }
                        } else {
                            var card = get.cardPile(function(cardx) {
                                return get.subtype(cardx) == 'equip1' && get.info(cardx).distance && get.info(cardx).distance.attackFrom == -2;
                            });
                            if (card) player.equip(card);
                        }
                        ('step 2');
                        player
                            .chooseTarget(1, `将${get.translation(cards)}交给一名其他角色`, function(card, player, target) {
                                return target != player;
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(player, target);
                                return att;
                            });
                        ('step 3');
                        if (result.bool) {
                            result.targets[0].gain(cards, 'gain2', 'log');
                        }
                    },
                    heart() {
                        'step 0';
                        player.chooseTarget([1, num], `令${num}回复一点体力或令一名角色回复${num}点体力`).set('ai', function(target) {
                            var att = get.attitude(player, target);
                            return att;
                        });
                        ('step 1');
                        if (result.bool) {
                            var targets = result.targets;
                            if (targets.length == 1) {
                                targets[0].recover(num);
                                event.finish();
                                return;
                            } else {
                                for (var target of targets) {
                                    target.recover();
                                }
                            }
                        }
                    },
                    content() {
                        'step 0';
                        var list = [];
                        var cards = trigger.cards.slice(0);
                        for (var i of cards) {
                            if (!list.includes(i.suit)) list.add(i.suit);
                        }
                        if (!list.length) return;
                        event.list = list.slice(0);
                        ('step 1');
                        var list = event.list.slice(0);
                        if (list.length == 1) {
                            var next = game.createEvent('tlbb_sijun_suitx', false);
                            next.player = player;
                            next.num = trigger.cards.length;
                            next.cards = trigger.cards;
                            next.setContent(lib.skill.tlbb_sijun[list[0]]);
                        } else if (list.length == 4) {
                            var next = game.createEvent('tlbb_sijun_spade', false);
                            next.player = player;
                            next.num = 2;
                            next.setContent(lib.skill.tlbb_sijun.spade);
                            var next = game.createEvent('tlbb_sijun_diamond', false);
                            next.player = player;
                            next.num = 2;
                            next.setContent(lib.skill.tlbb_sijun.diamond);
                            var next = game.createEvent('tlbb_sijun_club', false);
                            next.player = player;
                            next.num = 2;
                            next.cards = trigger.cards;
                            next.setContent(lib.skill.tlbb_sijun.club);
                            var next = game.createEvent('tlbb_sijun_heart', false);
                            next.player = player;
                            next.num = 2;
                            next.setContent(lib.skill.tlbb_sijun.heart);
                        }
                    },
                },
                //邪康敏-霸天 230719
                tlbb_duhui_xiekangming: {
                    marktext: '妒',
                    intro: {
                        mark(dialog, storage, player) {
                            if (!storage.length) return '无';
                            var list = storage.map((i) => [get.type2(i), '', i]);
                            dialog.addAuto([list, 'vcard']);
                        },
                        markcount(storage, player) {
                            return storage.length;
                        },
                    },
                    init(player, skill) {
                        if (!player.storage[skill]) player.storage[skill] = [];
                    },
                    check(event, player) {
                        var value = player.getUseValue({ name: event.card.name, nature: event.card.nature });
                        var num = 0;
                        event.targets.filter(function(i) {
                            num += get.effect(i, event.card, event.player, player);
                        });
                        var att = get.attitude(player, event.player);
                        if (value > 0 && att > 0) return true;
                        if (num < 0 && att > 0) return true;
                        return value > 0;
                    },
                    logTarget: 'player',
                    audio: 'ext:金庸群侠传/peiyin:3',
                    trigger: {
                        global: 'useCard1',
                    },
                    filter(event, player) {
                        if (event.player == player) return false;
                        var type = get.type(event.card);
                        if (!event.targets || !event.targets.length) return false;
                        if (type != 'trick' && type != 'basic') return false;
                        if (player.getStorage('tlbb_duhui_xiekangming').includes(event.card.name)) return false;
                        return player.hasUseTarget({ name: event.card.name, nature: event.card.nature });
                    },
                    content() {
                        'step 0';
                        player.markAuto('tlbb_duhui_xiekangming', [trigger.card.name]);
                        var value = player.getUseValue({ name: trigger.card.name, nature: trigger.card.nature });
                        trigger.player.chooseBool('妒毁<br>是否令' + get.translation(player) + '于' + get.translation(trigger.card) + '结算后视为使用一张同名牌.否则此牌失效').set('ai', function() {
                            var num = 0;
                            trigger.targets.filter(function(i) {
                                num += get.effect(i, trigger.card, trigger.player, player);
                            });
                            if (num <= 0) return false;
                            return true;
                        });
                        ('step 1');
                        if (result.bool) {
                            var next = player.chooseUseTarget({ name: trigger.card.name, nature: trigger.card.nature }, true, false);
                            event.next.remove(next);
                            trigger.after.push(next);
                        } else {
                            trigger.targets.length = 0;
                            trigger.all_excluded = true;
                            game.log(trigger.card, '失效了');
                        }
                    },
                },
                tlbb_guying2: {
                    audio: 'tlbb_guying',
                    trigger: {
                        player: 'useCard',
                    },
                    filter(event, player) {
                        if (get.color(event.card) != 'red') return false;
                        if (event.targets && event.targets.length != 1) return false;
                        if (event.targets[0] != player) return false;
                        var type = get.type(event.card);
                        if (type != 'trick' && type != 'basic') return false;
                        return true;
                    },
                    forced: true,
                    content() {
                        trigger.effectCount++;
                        game.log(trigger.card, '额外结算一次');
                    },
                },
                tlbb_guying: {
                    group: 'tlbb_guying2',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'useCard2',
                    },
                    filter(event, player) {
                        if (get.color(event.card) != 'black') return false;
                        if (event.targets && event.targets.some((i) => i == player)) return false;
                        var type = get.type(event.card);
                        if (type != 'trick' && type != 'basic') return false;
                        var info = get.info(event.card);
                        if (info.allowMultiple == false) return false;
                        if (event.targets && !info.multitarget) {
                            if (
                                game.hasPlayer(function(current) {
                                    return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
                                })
                            ) {
                                return true;
                            }
                        }
                        return false;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt(event.name), '为' + get.translation(trigger.card) + '增加一个目标', function(card, player, target) {
                                if (_status.event.sourcex.includes(target)) return false;
                                return lib.filter.targetEnabled2(_status.event.card, player, target);
                            })
                            .set('sourcex', trigger.targets)
                            .set('ai', function(target) {
                                var player = _status.event.player;
                                return get.effect(target, _status.event.card, player, player);
                            })
                            .set('card', trigger.card);
                        ('step 1');
                        if (result.bool) {
                            event.target = result.targets[0];
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        trigger.targets.push(event.target);
                        if (event.target.hasSex('male')) {
                            trigger.directHit.add(event.target);
                        }
                        if (event.target.hasSex('female')) {
                            if (
                                event.target.countCards('he', function(card) {
                                    return lib.filter.cardDiscardable(card, event.target, event.name);
                                }) > 0
                            ) {
                                event.target.chooseToDiscard('he', true);
                            }
                        }
                    },
                },
                tlbb_yuanyi: {
                    forced: true,
                    derivation: ['tlbb_suijing'],
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseZhunbeiBegin',
                    },
                    marktext: '怨',
                    mark: true,
                    limited: true,
                    init(player, skill) {
                        player.storage[skill] = false;
                    },
                    filter(event, player) {
                        if (!game.dead.length) return false;
                        if (player.storage.tlbb_yuanyi) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        var dialog = [get.prompt(event.name), '<div class="text center">' + get.translation(event.name, 'info') + '</div>', game.dead.slice(0)];
                        player
                            .chooseButton(dialog)
                            .set('filterButton', function(button) {
                                return true;
                            })
                            .set('ai', function(button) {
                                return button.link.maxHp;
                            });
                        ('step 1');
                        if (result.bool) {
                            player.awakenSkill(event.name);
                            player.storage[event.name] = true;
                            var target = result.links[0];
                            player.removeSkill('tlbb_guying');
                            player.addSkills('tlbb_suijing');
                            target.reinit(target.name1, 'tlbb_xie_kangmin_jing', [target.hp, target.maxHp]);
                            target.revive(target.maxHp);
                            var copy = function(list, isj) {
                                var result = [];
                                list.filter(function(i) {
                                    var c;
                                    if (isj) {
                                        c = game.createCard(i.viewAs || i.name, i.suit, i.number, i.nature);
                                    } else {
                                        c = game.createCard(i);
                                    }
                                    c.setMark(event.name, player);
                                    result.push(c);
                                });
                                return result;
                            };
                            var gain = copy(player.getCards('h'));
                            var gain2 = copy(player.getCards('e'));
                            var gain3 = copy(player.getCards('j'), true);
                            if (gain.length) target.directgain(gain);
                            if (gain2.length) {
                                for (const i of gain2) {
                                    target.equip(i);
                                }
                            }
                            gain3.filter((i) => target.addJudge(i));
                        }
                    },
                    intro: {
                        content: 'limited',
                    },
                },
                tlbb_suijing: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'phaseJieshuBegin',
                    },
                    logTarget: 'player',
                    filter(event, player) {
                        return event.player != player;
                    },
                    content() {
                        'step 0';
                        trigger.player.chooseToDiscard('he', '碎镜:是否弃置一张♥️️牌？否则' + get.translation(player) + '选择重置【妒毁】中的一张牌名');
                        ('step 1');
                        if (result.bool) {
                            event.finish();
                        } else {
                            var list = player.getStorage('tlbb_duhui_xiekangming').slice(0);
                            if (!list.length) {
                                event.finish();
                                return;
                            }
                            player.chooseVCardButton(true, list, '选择重置【妒毁】中的一张牌名');
                        }
                        ('step 2');
                        if (result && result.links) {
                            player.unmarkAuto('tlbb_duhui_xiekangming', [result.links[0][2]]);
                            game.log(player, '重置【妒毁】中的', { name: result.links[0][2] });
                        }
                    },
                },
                tlbb_jinggui: {
                    charlotte: true,
                    forced: true,
                    popup: false,
                    _priority: -100,
                    lastDo: true,
                    filterCardx(card) {
                        var info = get.info(card, false);
                        if (!info) return false;
                        if (info.notarget) return false;
                        if (info.selectTarget != undefined) {
                            if (Array.isArray(info.selectTarget)) {
                                if (info.selectTarget[0] < 0) return !info.toself;
                                return info.selectTarget[0] != 1 || info.selectTarget[1] != 1;
                            } else {
                                if (info.selectTarget < 0) return !info.toself;
                                return info.selectTarget != 1;
                            }
                        }
                        return false;
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseBegin',
                        source: 'dieBefore',
                        global: ['damageEnd', 'recoverEnd', 'loseHpEnd', 'equipEnd', 'useCardEnd', 'gainEnd'],
                    },
                    content() {
                        game.playJY(['tlbb_jinggui', 'tlbb_jinggui'].randomGet());
                        if (trigger.name == 'phase') {
                            trigger.cancel();
                        }
                        game.playJY(['tlbb_jinggui', 'tlbb_jinggui'].randomGet());
                        if (trigger.name == 'die') {
                            var target = game.findPlayer((i) => i.name1 == 'tlbb_xie_kangmin' || i.name2 == 'tlbb_xie_kangmin');
                            if (target) {
                                trigger.source = target;
                            }
                        }
                        game.playJY(['tlbb_jinggui', 'tlbb_jinggui'].randomGet());
                        if (trigger.name == 'damage' || trigger.name == 'recover' || trigger.name == 'loseHp') {
                            if (trigger.player.name1 == 'tlbb_xie_kangmin' || trigger.player.name2 == 'tlbb_xie_kangmin') {
                                if (trigger.num > 0) {
                                    if (trigger.name == 'recover' && !player.isDamaged()) {
                                        return;
                                    }
                                    player[trigger.name](trigger.num, 'nosource');
                                }
                            }
                        }
                        game.playJY(['tlbb_jinggui', 'tlbb_jinggui'].randomGet());
                        if (trigger.name == 'equip') {
                            if (trigger.player.name1 == 'tlbb_xie_kangmin' || trigger.player.name2 == 'tlbb_xie_kangmin') {
                                if (trigger.player.getCards('e').includes(trigger.card)) {
                                    var cardx = game.createCard(trigger.card);
                                    cardx.setMark(event.name, player);
                                    player.useCard(cardx, player, 'noai');
                                    //player.equip(cardx);
                                }
                            }
                        }
                        game.playJY(['tlbb_jinggui', 'tlbb_jinggui'].randomGet());
                        if (trigger.name == 'useCard') {
                            if (trigger.player.name1 == 'tlbb_xie_kangmin' || trigger.player.name2 == 'tlbb_xie_kangmin') {
                                if (trigger.targets && trigger.targets.length == 1 && trigger.targets[0].isIn()) {
                                    var type = get.type(trigger.card);
                                    if (type == 'trick' || type == 'basic') {
                                        var use = player.getCards('hs', trigger.card.name);
                                        if (use.length) {
                                            var next = player.useCard(use[0], trigger.targets.slice(0), 'noai');
                                            if (trigger.addedTarget) next.addedTarget = trigger.addedTarget;
                                            if (trigger.addedTargets && trigger.addedTargets.length) next.addedTargets = trigger.addedTargets.slice(0);
                                        }
                                    }
                                }
                            }
                        }
                        game.playJY(['tlbb_jinggui', 'tlbb_jinggui'].randomGet());
                        if (!trigger.tlbb_jinggui && trigger.name == 'gain') {
                            if (trigger.player.name1 == 'tlbb_xie_kangmin' || trigger.player.name2 == 'tlbb_xie_kangmin') {
                                if (trigger.cards && trigger.cards.length) {
                                    player.draw(trigger.cards.length);
                                }
                            } else if (trigger.player == player && trigger.cards && trigger.cards.length) {
                                var target = game.findPlayer((i) => i.name1 == 'tlbb_xie_kangmin' || i.name2 == 'tlbb_xie_kangmin');
                                if (target) {
                                    var togive = player.getCards('h').filter(function(c) {
                                        if (!trigger.cards.includes(c)) return false;
                                        var type = get.type(c, null, false);
                                        if (type == 'equip') return true;
                                        if (type == 'jy_duyao') return true;
                                        if (type == 'delay') return true;
                                        if (type == 'trick') return lib.skill.tlbb_jinggui.filterCardx(c);
                                        if (lib.jy_anqiList.includes(c.name)) return true;
                                        return false;
                                    });
                                    if (togive.length) {
                                        player.give(togive, target).set('tlbb_jinggui', true);
                                    }
                                }
                            }
                        }
                    },
                },
                //赫连铁树 霸天 20230718
                tlbb_huansi: {
                    enable: 'phaseUse',
                    selectCard: -1,
                    filterCard() {
                        return false;
                    },
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    content() {
                        'step 0';
                        target.draw('visible');
                        ('step 1');
                        if (result && result.length) {
                            player.markAuto(
                                'tlbb_huansi_effect',
                                result.map(function(i) {
                                    return get.type2(i, false);
                                })
                            );
                            player.addTempSkill('tlbb_huansi_effect');
                            target.addTempSkill('tlbb_huansi_effect2');
                        }
                    },
                    ai: {
                        order: 9,
                        result: {
                            target(player, target) {
                                return 1;
                            },
                        },
                    },
                    subSkill: {
                        effect2: {
                            charlotte: true,
                        },
                        effect: {
                            marktext: '伺',
                            intro: {
                                content: '$',
                            },
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'shunshou' && card.tlbb_huansi && target.hasSkill('tlbb_huansi_effect2')) return true;
                                },
                            },
                            enable: 'chooseToUse',
                            audio: 'tlbb_huansi',
                            viewAs: {
                                name: 'shunshou',
                                tlbb_huansi: true,
                            },
                            position: 'hes',
                            filterTarget(card, player, target) {
                                var bool = false;
                                var players = ui.selected.targets.slice(0);
                                for (var i of players) {
                                    if (i.hasSkill('tlbb_huansi_effect2')) bool = true;
                                    break;
                                }
                                if (!bool && !target.hasSkill('tlbb_huansi_effect2')) return false;
                                return _status.event._backup.filterTarget.apply(this, arguments);
                            },
                            complexSelect: true,
                            viewAsFilter(player) {
                                return player.countCards('hes', (card) => lib.skill.tlbb_huansi_effect.filterCard(card, player)) > 0;
                            },
                            filterCard(card, player) {
                                var type = get.type2(card),
                                    types = player.getStorage('tlbb_huansi_effect');
                                for (var i of types) {
                                    if (type == i) return true;
                                }
                                return false;
                            },
                            prompt() {
                                var colors = _status.event.player.getStorage('tlbb_huansi_effect');
                                var str = '将一张类型为';
                                for (var i = 0; i < colors.length; i++) {
                                    if (i > 0) str += '或';
                                    str += get.translation(colors[i]);
                                }
                                str += '的牌当做【妙手空空】使用';
                                return str;
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            charlotte: true,
                        },
                    },
                },
                tlbb_hudan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'useCard2',
                    },
                    filter(event, player) {
                        if (get.type(event.card) != 'trick') return false;
                        var info = get.info(event.card);
                        if (info.allowMultiple == false) return false;
                        if (event.targets && !info.multitarget) {
                            if (
                                game.hasPlayer(function(current) {
                                    if (get.jy_group(current) != 'hanren') return false;
                                    return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
                                })
                            ) {
                                return true;
                            }
                        }
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt(event.name), '为' + get.translation(trigger.card) + '增加一个目标', function(card, player, target) {
                                var player = _status.event.player;
                                if (_status.event.sourcex.includes(target)) return false;
                                if (get.jy_group(target) != 'hanren') return false;
                                return lib.filter.targetEnabled2(_status.event.card, player, target);
                            })
                            .set('sourcex', trigger.targets)
                            .set('ai', function(target) {
                                var player = _status.event.player;
                                return get.effect(target, _status.event.card, player, player);
                            })
                            .set('card', trigger.card);
                        ('step 1');
                        if (result.bool) {
                            event.targets = result.targets;
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        trigger.targets.addArray(event.targets);
                    },
                },
                //绝虚竹 霸天 20230711
                tlbb_xiaoyao2: {
                    mod: {
                        targetEnabled(card, player, target, now) {
                            var type = get.type(card);
                            if (type == 'delay' && card.name != 'jydiy_yungongliaoshang') return false;
                        },
                    },
                    audio: 'tlbb_xiaoyao',
                    trigger: {
                        player: 'addJudgeBefore',
                    },
                    forced: true,
                    _priority: 15,
                    check(event, player) {
                        return event.name == 'addJudge' || (event.card.name != 'chiling' && get.effect(event.target, event.card, event.player, player) < 0);
                    },
                    filter(event, player) {
                        var type = get.type(event.card);
                        if (type == 'delay' && event.card.name != 'jydiy_yungongliaoshang') return true;
                        return false;
                    },
                    content() {
                        trigger.cancel();
                        var owner = get.owner(trigger.cards[0]);
                        if (owner && owner.getCards('hejsx').includes(trigger.cards[0])) owner.lose(trigger.cards, ui.discardPile);
                        else game.cardsDiscard(trigger.cards);
                        game.log(trigger.cards, '进入了弃牌堆');
                    },
                    ai: {
                        effect: {
                            target(card, player, target, current) {
                                var type = get.type(card);
                                if (type == 'delay' && card.name != 'jydiy_yungongliaoshang') return 'zeroplayertarget';
                            },
                        },
                    },
                },
                tlbb_xiaoyao: {
                    group: 'tlbb_xiaoyao2',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: ['turnOverBefore', 'linkBefore', 'disableEquipBefore'],
                    },
                    _priority: 20,
                    forced: true,
                    filter(event, player) {
                        if (event.name == 'disableEquip') return true;
                        if (event.name == 'link') return !player.isLinked();
                        return !player.isTurnedOver();
                    },
                    content() {
                        trigger.cancel();
                        if (trigger.name == 'link') {
                            game.log(player, '取消了横置');
                        } else if (trigger.name == 'disableEquip') {
                            game.log(player, '取消了废除装备栏');
                        } else game.log(player, '取消了翻面');
                    },
                    ai: {
                        noturn: true,
                        effect: {
                            target(card) {
                                if (card.name == 'tiesuo') return 'zeroplayertarget';
                            },
                        },
                    },
                },
                tlbb_minghai: {
                    subSkill: {
                        jieshu: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            charlotte: true,
                            content() {
                                player.storage.tlbb_minghai_nohx = [];
                                player.storage.tlbb_minghai_noex = [];
                            },
                        },
                        hxx: {
                            charlotte: true,
                        },
                        hx: {
                            charlotte: true,
                        },
                        ex: {
                            charlotte: true,
                        },
                        jx: {
                            charlotte: true,
                        },
                        backup: {
                        },
                        h: {
                            getResult(player) {
                                var players = game.filterPlayer();
                                players.sort(function(a, b) {
                                    return b.countCards('h') - a.countCards('h');
                                });
                                return players[0].countCards('h') - player.countCards('h');
                            },
                            audio: 'tlbb_minghai',
                            name: 'tlbb_minghai',
                            prompt: '弃置所有手牌,复制一名其他角色的手牌(若依此法复制的手牌在本阶段内全部离开你的手牌区,视为未发动本技能)',
                            filter(event, player) {
                                return game.hasPlayer(function(current) {
                                    if (current == player) return false;
                                    if (current.hasSkill('tlbb_minghai_hxx')) return false;
                                    return current.countCards('h') > 0;
                                });
                            },
                            filterCard() {
                                return false;
                            },
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                if (target.hasSkill('tlbb_minghai_hxx')) return false;
                                return target.countCards('h') > 0;
                            },
                            selectCard: -1,
                            content() {
                                'step 0';
                                var hs = player.getCards('h');
                                if (hs.length) player.discard(hs);
                                ('step 1');
                                var hs = target.getCards('h');
                                target.addTempSkill('tlbb_minghai_hxx');
                                if (hs.length) {
                                    var copy = function(list) {
                                        var result = [];
                                        list.filter(function(i) {
                                            var c = game.createCard(i);
                                            c.setMark('tlbb_minghai', player);
                                            result.push(c);
                                        });
                                        return result;
                                    };
                                    var gain = copy(hs);
                                    player.addTempSkill('tlbb_minghai_hx');
                                    player.storage.tlbb_minghai_nohx = gain;
                                    player.gain(gain, 'log', 'gain2');
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player, target) {
                                        if (!target) return 0;
                                        return target.countCards('h') - player.countCards('h');
                                    },
                                },
                            },
                        },
                        e: {
                            audio: 'tlbb_minghai',
                            getResult(player) {
                                var players = game.filterPlayer();
                                players.sort(function(a, b) {
                                    return b.countCards('e') - a.countCards('e');
                                });
                                return (
                                    players[0].countCards('e', function(i) {
                                        return player.canEquip(i, true);
                                    }) - player.countCards('e')
                                );
                            },
                            name: 'tlbb_minghai',
                            prompt: '弃置装备区里的牌,复制一名其他角色装备区里的装备牌(若依此法复制的装备牌在本阶段内全部离开你的装备区,视为未发动本技能) ',
                            filter(event, player) {
                                return game.hasPlayer(function(current) {
                                    if (current == player) return false;
                                    return (
                                        current.countCards('e', function(i) {
                                            return player.canEquip(i, true);
                                        }) > 0
                                    );
                                });
                            },
                            filterCard() {
                                return false;
                            },
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return (
                                    target.countCards('e', function(i) {
                                        return player.canEquip(i, true);
                                    }) > 0
                                );
                            },
                            selectCard: -1,
                            content() {
                                'step 0';
                                var hs = player.getCards('e');
                                if (hs.length) player.discard(hs);
                                ('step 1');
                                var hs = target.getCards('e', function(i) {
                                    return player.canEquip(i, true);
                                });
                                if (hs.length) {
                                    var copy = function(list) {
                                        var result = [];
                                        list.filter(function(i) {
                                            var c = game.createCard(i);
                                            c.setMark('tlbb_minghai', player);
                                            result.push(c);
                                        });
                                        return result;
                                    };
                                    var gain = copy(hs);
                                    gain.filter((i) => player.equip(i));
                                    player.addTempSkill('tlbb_minghai_ex');
                                    player.storage.tlbb_minghai_noex = gain;
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player, target) {
                                        if (!target) return 0;
                                        return (
                                            target.countCards('e', function(i) {
                                                return player.canEquip(i, true);
                                            }) - player.countCards('e')
                                        );
                                    },
                                },
                            },
                        },
                        j: {
                            audio: 'tlbb_minghai',
                            getResult(player) {
                                var players = game.filterPlayer();
                                players.sort(function(a, b) {
                                    return b.countCards('j') - a.countCards('j');
                                });
                                return (
                                    players[0].countCards('j', function(i) {
                                        return players[1].canAddJudge({ name: i.name });
                                    }) - players[players.length - 1].countCards('j')
                                );
                            },
                            name: '冥海',
                            prompt: '将一名其他角色判定区里的牌复制到另一名其他角色判定区内(可复制空白判定区,即可将一个有判定牌的判定区复制成空白判定区)',
                            selectCard: -1,
                            filterCard() {
                                return false;
                            },
                            targetprompt: ['被复制', '复制'],
                            selectTarget: 2,
                            delay: 0,
                            filter(event, player) {
                                return game.hasPlayer(function(target) {
                                    if (target.isDisabledJudge()) return false;
                                    return game.hasPlayer(function(current) {
                                        if (current.isDisabledJudge()) return false;
                                        if (current == target) return false;
                                        if (current.countCards('j') == 0 && target.countCards('j') == 0) return false;
                                        return true;
                                    });
                                });
                            },
                            filterTarget(card, player, target) {
                                if (target.isDisabledJudge()) return false;
                                if (ui.selected.targets.length == 0) return true;
                                if (ui.selected.targets[0].countCards('j') == 0 && target.countCards('j') == 0) return false;
                                return true;
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                var hs = targets[1].getCards('j');
                                if (hs.length) targets[1].discard(hs);
                                ('step 1');
                                targets[0].countCards('j', function(j) {
                                    if (targets[1].canAddJudge({ name: j.name })) {
                                        var c = game.createCard(j);
                                        c.setMark('tlbb_minghai', player);
                                        targets[1].$gain2(c);
                                        targets[1].addJudge({ name: j.name }, [c]);
                                    }
                                });
                                player.addTempSkill('tlbb_minghai_jx');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (!ui.selected.targets.length) return target.getCards('j').length;
                                        return ui.selected.targets[0].getCards('j').length - target.getCards('j').length;
                                    },
                                },
                            },
                        },
                    },
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:4',
                    filter(event, player) {
                        if (player.hasSkill('tlbb_minghai_jx')) return false;
                        if (
                            player.hasSkill('tlbb_minghai_hx') &&
                            player.storage.tlbb_minghai_nohx &&
                            player.countCards('h', function(i) {
                                return player.storage.tlbb_minghai_nohx.includes(i);
                            })
                        )
                            return false;
                        if (
                            player.hasSkill('tlbb_minghai_ex') &&
                            player.storage.tlbb_minghai_noex &&
                            player.countCards('e', function(i) {
                                return player.storage.tlbb_minghai_noex.includes(i);
                            })
                        )
                            return false;
                        return true;
                    },
                    chooseButton: {
                        check(button) {
                            var player = _status.event.player;
                            return lib.skill['tlbb_minghai_' + button.link].getResult(player);
                        },
                        dialog(event, player) {
                            var list = [
                                ['h', '弃置所有手牌,复制一名其他角色的手牌(若依此法复制的手牌在本阶段内全部离开你的手牌区,视为未发动本技能) '],
                                ['e', '弃置装备区里的牌,复制一名其他角色装备区里的装备牌(若依此法复制的装备牌在本阶段内全部离开你的装备区,视为未发动本技能)'],
                                ['j', '将一名其他角色判定区里的牌复制到另一名其他角色判定区内(可复制空白判定区,即可将一个有判定牌的判定区复制成空白判定区)'],
                            ];
                            return ui.create.dialog('冥海', 'hidden', [list, 'textbutton']);
                        },
                        filter(button, player) {
                            return lib.skill['tlbb_minghai_' + button.link].filter(null, player);
                        },
                        backup(links) {
                            var next = get.copy(lib.skill['tlbb_minghai_' + links[0]]);
                            return next;
                        },
                        prompt(links, player) {
                            return lib.skill['tlbb_minghai_' + links[0]].prompt;
                        },
                    },
                    ai: {
                        order: 1,
                        result: {
                            player: 1,
                        },
                    },
                },
                //汪剑通 霸天20230622
                tlbb_xueyi: {
                    subSkill: {
                        dis: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    var source = game.findPlayer((i) => i.hasSkill('tlbb_xueyi'));
                                    if (!source) return distance;
                                    if (get.jy_group(from) != 'hanren') return distance;
                                    if (get.jy_group(to) != 'yizu') return distance;
                                    return -Infinity;
                                },
                            },
                        },
                        gameDraw: {
                            trigger: {
                                global: 'gameDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !_status.tlbb_xueyi_gameDraw;
                            },
                            content() {
                                _status.tlbb_xueyi_gameDraw = true;
                                var list = [];
                                for (var i in lib.character) {
                                    if (get.jy_group({ name1: i }) == 'yizu') list.push(i);
                                }
                                game.countPlayer2(function(i) {
                                    if (i.name) list.remove(i.name);
                                    if (i.name1) list.remove(i.name1);
                                    if (i.name2) list.remove(i.name2);
                                });
                                if (!list.length) {
                                    event.finish();
                                    return;
                                }
                                var count = game.countPlayer2(function(i) {
                                    if (get.jy_group(i) == 'yizu') return true;
                                    return false;
                                });
                                var targets = game.filterPlayer(function(i) {
                                    if (i == player) return false;
                                    if (get.jy_group(i) != 'yizu') return true;
                                    return false;
                                });
                                targets.remove(player);
                                var count2 = Math.floor(game.countPlayer2() / 2);
                                if (count >= count2) {
                                    event.finish();
                                    return;
                                }
                                var bian = count2 - count;
                                if (bian > targets.length) bian = targets.length;
                                if (bian > list.length) bian = list.length;
                                var bianTargets = targets.randomGets(bian);
                                var bianNames = list.randomGets(bian);
                                for (var i = 0; i < bianTargets.length; i++) {
                                    bianTargets[i].reinit(bianTargets[i].name1, bianNames[i]);
                                    player.line(bianTargets[i]);
                                    game.log(player, '替换了', bianTargets[i], '的侠客牌');
                                }
                            },
                        },
                    },
                    global: ['tlbb_xueyi_dis', 'tlbb_xueyi_gameDraw'],
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'phaseBefore',
                        player: 'enterGame',
                    },
                    forced: true,
                    filter(event, player) {
                        return event.name != 'phase' || game.phaseNumber == 0;
                    },
                    content() {
                        _status.locked_jy_changjin = 'jycj_biansheng';
                        var next = game.createEvent('_jy_changjin', false);
                        next.setContent(lib.skill._jy_changjin.content);
                    },
                },
                tlbb_wusha: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'dieAfter' },
                    forced: true,
                    filter(event, player) {
                        return get.jy_group(event.player) == 'yizu';
                    },
                    content() {
                        if (trigger.player.getFriends(true).includes(player)) {
                            player.loseHp(1);
                            player.draw(3);
                        } else if (trigger.player.getEnemies().includes(player)) {
                            if (player.isDamaged()) player.recover();
                            player.draw(3);
                        }
                    },
                },
                tlbb_choumou: {
                    juexingji: true,
                    derivation: ['tlbb_yixin_new', 'jy_gaibang'],
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'dieAfter' },
                    forced: true,
                    filter(event, player) {
                        if (player.storage.tlbb_choumou) return false;
                        if (get.jy_group(event.player) != 'yizu') return false;
                        return event.player.getFriends(true).includes(player);
                    },
                    forced: true,
                    //_priority:3,
                    content() {
                        'step 0';
                        player.awakenSkill(event.name);
                        player.storage[event.name] = true;
                        player.loseMaxHp();
                        ('step 1');
                        player.addSkills('tlbb_yixin_new');
                        ('step 2');
                        var bool = game.hasPlayer(function(current) {
                            return current != player && !current.hasSkill('jy_gaibang');
                        });
                        if (!bool) {
                            event.finish();
                            return;
                        }
                        player
                            .chooseTarget(true, '令一名其他角色获得〖无狗〗', function(card, player, target) {
                                return target != player && !target.hasSkill('jy_gaibang');
                            })
                            .set('ai', function(target) {
                                return get.attitude(player, target);
                            });
                        ('step 3');
                        if (result.bool) {
                            player.line(result.targets);
                            result.targets[0].addSkills('jy_gaibang');
                            _status.locked_jy_changjin = 'jycj_mengyuan';
                            var next = game.createEvent('_jy_changjin', false);
                            next.setContent(lib.skill._jy_changjin.content);
                        }
                    },
                },
                tlbb_yixin_new2: {
                    audio: 'tlbb_yixin_new',
                    trigger: { player: 'phaseZhunbeiBegin' },
                    filter(event, player) {
                        return player.getStorage('tlbb_yixin_new').length;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var xin = player.getStorage('tlbb_yixin_new')[0];
                        var owner = get.owner(xin);
                        player.unmarkAuto('tlbb_yixin_new', [xin]);
                        xin.clearMark('tlbb_yixin_new', player);
                        if (owner) {
                            var group = get.jy_group(owner);
                            game.log('遗信(', xin, ')在', owner, '的区域里');
                            if (group == 'yizu') {
                                var players = game.filterPlayer(function(current) {
                                    if (current == player) return false;
                                    if (get.jy_group(current) != 'yizu') return false;
                                    return current.countGainableCards(player, 'he') > 0;
                                });
                                if (players.length) player.gainMultiple(players, 'he');
                                event.finish();
                            } else if (group == 'hanren') {
                                var count = game.countPlayer((i) => get.jy_group(i) == 'hanren');
                                player.draw(count);
                                event.finish();
                            } else {
                                event.finish();
                            }
                        } else {
                            var pos = get.position(xin);
                            if (pos == 'c') {
                                game.log('遗信(', xin, ')在牌堆里');
                                var gains = [];
                                var cardpile = Array.from(ui.cardPile.childNodes);
                                for (var i of cardpile) {
                                    gains.push(i);
                                    if (i == xin) break;
                                }
                                player.gain(gains, 'log', 'gain2');
                                event.finish();
                            } else if (pos == 'd') {
                                game.log('遗信(', xin, ')在弃牌堆里');
                            } else {
                                event.finish();
                            }
                        }
                        ('step 1');
                        var players = game.filterPlayer(function(current) {
                            if (get.jy_group(current) != 'yizu') return false;
                            return (
                                current.countCards('h', function(card) {
                                    return lib.filter.cardDiscardable(card, current, event.name);
                                }) > 0
                            );
                        });
                        if (!players.length) {
                            event.finish();
                            return;
                        }
                        player
                            .chooseTarget(true, '令一名异族角色弃置所有手牌', function(card, player, target) {
                                return _status.event.sourcex.includes(target);
                            })
                            .set('ai', function(target) {
                                var count = target.countCards('h', function(card) {
                                    return lib.filter.cardDiscardable(card, target, 'tlbb_yixin_new2');
                                });
                                return get.attitude(player, target) > 0 ? -count : count;
                            })
                            .set('sourcex', players);
                        ('step 2');
                        if (result.bool) {
                            event.targets = result.targets;
                            var dis = result.targets[0].getCards('h', function(card) {
                                return lib.filter.cardDiscardable(card, result.targets[0], 'tlbb_yixin_new2');
                            });
                            if (dis.length) result.targets[0].discard(dis);
                        }
                    },
                },
                tlbb_yixin_new: {
                    marktext: '信',
                    intro: {
                        content: 'cards',
                    },
                    group: 'tlbb_yixin_new2',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'phaseJieshuBegin' },
                    forced: true,
                    filter(event, player) {
                        return player.countCards('h') > 0;
                    },
                    content() {
                        'step 0';
                        player.chooseCard('h', get.prompt2(event.name)).set('ai', function(card) {
                            return 6 - get.value(card);
                        });
                        ('step 1');
                        if (result.bool) {
                            event.cards = result.cards;
                            event.cards[0].setMark(event.name, player);
                            player.markAuto(event.name, event.cards);
                            player.$throw(event.cards);
                            player.lose(event.cards, ui.cardPile).insert_index = function(event, card) {
                                var count = Math.min(3 * game.players.length, ui.cardPile.childElementCount);
                                var rand = get.rand(count);
                                return ui.cardPile.childNodes[rand];
                            };
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        game.updateRoundNumber();
                        game.log(player, '把', get.cnNumber(cards.length), '张牌放在了牌堆里');
                    },
                },
                //乌老大 霸天20230615
                tlbb_fudu_new: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseZhunbeiBegin',
                    },
                    forced: true,
                    filter(event, player) {
                        if (player.canAddJudge({ name: 'bingliang' })) return true;
                        if (player.canAddJudge({ name: 'jydiyshengsifu' })) return true;
                        if (player.canAddJudge({ name: 'jydiy_zouhuorumo' })) return true;
                        return false;
                    },
                    content() {
                        'step 0';
                        if (player.canAddJudge({ name: 'bingliang' })) {
                            var card = get.cardPile(function(card) {
                                return card.name == 'bingliang';
                            });
                            if (!card) {
                                card = get.cards(1)[0];
                                game.cardsGotoOrdering(card);
                            }
                            player.$gain2(card);
                            player.addJudge({ name: 'bingliang' }, [card]);
                        }
                        ('step 1');
                        if (player.canAddJudge({ name: 'jydiyshengsifu' })) {
                            var card = get.cardPile(function(card) {
                                return card.name == 'jydiyshengsifu';
                            });
                            if (!card) {
                                card = get.cards(1)[0];
                                game.cardsGotoOrdering(card);
                            }
                            player.$gain2(card);
                            player.addJudge({ name: 'jydiyshengsifu' }, [card]);
                        }
                        ('step 2');
                        if (player.canAddJudge({ name: 'jydiy_zouhuorumo' })) {
                            var card = get.cardPile(function(card) {
                                return card.name == 'jydiy_zouhuorumo';
                            });
                            if (!card) {
                                card = get.cards(1)[0];
                                game.cardsGotoOrdering(card);
                            }
                            player.$gain2(card);
                            player.addJudge({ name: 'jydiy_zouhuorumo' }, [card]);
                        }
                    },
                },
                tlbb_lvdao_new: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'useCard2',
                    },
                    filter(event, player) {
                        if (event.card.name != 'sha') return false;
                        if (get.color(event.card) != 'black') return false;
                        if (player.hp == 0) return false;
                        if (player.hp % 12 == 0) return true;
                        if (player.hp % 6 == 0) return true;
                        if (player.hp % 3 == 0) {
                            return game.hasPlayer(function(current) {
                                return !event.targets.includes(current) && player.canUse(event.card, current);
                            });
                        }
                        return false;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        if (player.hp % 12 == 0) {
                            trigger.directHit.addArray(
                                game.filterPlayer(function(current) {
                                    return current != player;
                                })
                            );
                        }
                        if (player.hp % 6 == 0) {
                            if (!trigger.baseDamage) trigger.baseDamage = 1;
                            trigger.baseDamage += 1;
                        }
                        player
                            .chooseTarget(get.prompt(event.name), '是否为' + get.translation(trigger.card) + '增加一个目标', function(card, player, target) {
                                return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
                            })
                            .set('sourcex', trigger.targets)
                            .set('ai', function(target) {
                                var player = _status.event.player;
                                return get.effect(target, _status.event.card, player, player);
                            })
                            .set('card', trigger.card);
                        ('step 1');
                        if (result.bool) {
                            event.target = result.targets[0];
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        player.line(event.target);
                        trigger.targets.push(event.target);
                        if (trigger.cards.length && !trigger.card.isCard) {
                            game.log(event.target, '额外成为了', trigger.card, '(', trigger.cards, ')', '的目标');
                        } else {
                            game.log(event.target, '额外成为了', trigger.card, '的目标');
                        }
                    },
                },
                tlbb_chujie_new2: {
                    audio: 'tlbb_chujie_new',
                    charlotte: true,
                    trigger: {
                        player: 'judgeEnd',
                    },
                    popup: false,
                    nopop: true,
                    forced: true,
                    filter(event, player) {
                        if (!event.tlbb_chujie_new) return false;
                        //if(!event.card) return false;
                        //if(!event.cardname) return false;
                        if (get.itemtype(event.card) != 'card') return false;
                        if (event.result.bool === false) return false;
                        return get.position(event.card) == 'd';
                    },
                    content() {
                        player.gain(trigger.card, 'gain2', 'log');
                    },
                    mod: {
                        judge(player, result) {
                            if (!_status.event.cardname) return;
                            if (result.bool == false) {
                                result.bool = true;
                                game.log(player, '的判定结果反转');
                            } else {
                                game.log(player, '的判定结果反转');
                                result.bool = false;
                            }
                        },
                    },
                },
                tlbb_chujie_new: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    forced: true,
                    trigger: {
                        player: 'judge',
                    },
                    check(event, player) {
                        var name = event.cardname;
                        return event.judge(player.judging[0]) < 0;
                    },
                    filter(event, player) {
                        if (!event.cardname) return false;
                        var name = event.cardname;
                        if (name == 'jydiy_yungongliaoshang') return false;
                        if (get.type(name) != 'delay') return false;
                        return true;
                    },
                    content() {
                        player.addTempSkill('tlbb_chujie_new2', { player: 'judgeAfter' });
                        player.loseHp();
                        trigger.set('tlbb_chujie_new', true);
                    },
                },
                //邪段延庆 霸天 20230613
                //控魂
                tlbb_konghun_new: {
                    marktext: '控',
                    intro: {
                        content: '不能对$发动【控魂】',
                    },
                    subSkill: {
                        use: {
                            mark: true,
                            marktext: '魂',
                            intro: {
                                content: '本回合最多使用三张牌',
                            },
                            trigger: {
                                player: ['phaseAfter', 'phaseSkipped', 'phaseCancelled', 'die'],
                            },
                            charlotte: true,
                            forced: true,
                            popup: false,
                            lastDo: true,
                            charlotte: true,
                            forceDie: true,
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                if (event.name == 'die') return true;
                                return event.skill == 'tlbb_konghun_new';
                            },
                            content() {
                                player.removeSkill('tlbb_konghun_new_use');
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    var evtx = _status.event.getParent('phase');
                                    if (!evtx) return;
                                    if (!evtx.skill) return;
                                    if (evtx.skill != 'tlbb_konghun_new') return;
                                    var num = player.getHistory('useCard', function(evt) {
                                        return evt.getParent('phase') == evtx;
                                    }).length;
                                    if (num >= 3) return false;
                                },
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseJieshuBegin',
                    },
                    forced: true,
                    filter(event, player) {
                        return game.hasPlayer(function(current) {
                            if (player.getStorage('tlbb_konghun_new').includes(current)) return false;
                            return current != player && current.hp != player.hp;
                        });
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2(event.name), function(card, player, target) {
                                if (player.getStorage('tlbb_konghun_new').includes(target)) return false;
                                return target != player && target.hp != player.hp;
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(player, target);
                                if (att < 0) {
                                    if (target.hp - player.hp == 1) return 2;
                                    if (target.hp - player.hp > 2) return 0.5;
                                    return 0;
                                } else if (att > 0) {
                                    return 0;
                                }
                                return 0;
                            });
                        ('step 1');
                        if (result.bool) {
                            event.target = result.targets[0];
                            var hp = event.target.hp + player.hp;
                            var pingjun = Math.floor(hp / 2);
                            var plose = false,
                                precover = false,
                                tlose = false,
                                trecover = false;
                            var isyu = hp % 2 == 1;
                            if (isyu) game.asyncDraw([player, event.target]);
                            if (pingjun > event.target.hp) {
                                trecover = true;
                                event.target.recover(pingjun - event.target.hp)._triggered = 2; //避免被取消或增益回复
                            }
                            if (pingjun < event.target.hp) {
                                tlose = true;
                                event.target.loseHp(event.target.hp - pingjun)._triggered = 2; //避免被取消或增益回复
                            }
                            if (pingjun > player.hp) {
                                precover = true;
                                player.recover(pingjun - player.hp)._triggered = 2; //避免被取消或增益回复
                            }
                            if (pingjun < player.hp) {
                                plose = true;
                                player.loseHp(player.hp - pingjun)._triggered = 2; //避免被取消或增益回复
                            }
                            if (plose && trecover) {
                                event.target.phase('nodelay');
                                event.target.addSkill('tlbb_konghun_new_use');
                            }
                            if (tlose && precover) {
                                player.markAuto(event.name, [event.target]);
                            }
                        }
                    },
                },
                //腹语
                tlbb_fuyu_new: {
                    enable: 'phaseUse',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    usable: 1,
                    filter(event, player) {
                        return ui.cardPile.firstChild;
                    },
                    content() {
                        'step 0';
                        var list = [],
                            number2 = [],
                            cardnum = ui.cardPile.firstChild.number;
                        for (var i = 1; i <= 13; i++) {
                            list.push([i, get.strNumber(i)]);
                            number2.push(i);
                        }
                        var choice = number2.filter(function(i) {
                            if (i + 1 == cardnum) return true;
                            if (i - 1 == cardnum) return true;
                            return i == cardnum;
                        });
                        var next = player.chooseButton(['腹语:在A到K之间声明两个数字X和Y', [list, 'tdnodes']]);
                        next.set('forced', true);
                        next.set('selectButton', [2, 2]);
                        next.set('choice', choice);
                        next.set('ai', function(button) {
                            var player = _status.event.player;
                            if (button.link == 7) return 1;
                            if (button.link == 13) return 1;
                            //ai作弊
                            return 0;
                        });
                        ('step 1');
                        var links = result.links.slice(0);
                        if (links[0] > links[1]) links.reverse();
                        event.choicelinks = links.slice(0);
                        var strlog = links.map((i) => get.strNumber(i)).toString();
                        game.log(player, '选择了区间', strlog);
                        player.popup(strlog, 'fire');
                        player.chat('我选择区间' + strlog);
                        ('step 2');
                        var choice = event.choicelinks;
                        player.judge(function(card) {
                            var cardnum = card.number;
                            if (choice[0] <= cardnum && choice[1] >= cardnum) return 2;
                            return -0.5;
                        }).judge2 = function(result) {
                            return result.bool;
                        };
                        ('step 3');
                        if (result.number) {
                            var choice = event.choicelinks;
                            //game.log(choice)
                            //game.log("测试1")
                            if (choice[0] <= result.number && choice[1] >= result.number) {
                                //game.log("测试2")
                                var gains = [];
                                for (var i = 1; i <= 13; i++) {
                                    if (!(choice[0] <= i && choice[1] >= i)) {
                                        var gain = get.randomCard((card) => card.number == i);
                                        if (gain) gains.push(gain);
                                    }
                                }
                                if (gains.length) player.gain(gains, 'log', 'gain2');
                            }
                        }
                    },
                    ai: {
                        order: 9,
                        result: {
                            player: 1,
                        },
                        threaten: 2,
                    },
                },
                tlbb_fengyue_new: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'useCardToPlayered', target: 'useCardToTargeted' },
                    filter(event, player) {
                        var type = get.type(event.card);
                        if (type != 'basic' && type != 'trick') return false;
                        var evt = event.parent;
                        if (!evt.tlbb_fengyue_new) evt.tlbb_fengyue_new = {};
                        if (!evt.tlbb_fengyue_new[player.playerid]) evt.tlbb_fengyue_new[player.playerid] = [];
                        if (evt.tlbb_fengyue_new[player.playerid].includes(event.target)) return false;
                        if (event.player == event.target) return false;
                        if (player == event.player) {
                            return event.target.hasSex('female');
                        }
                        return event.player.hasSex('female');
                    },
                    check(event, player) {
                        if (player == event.player) {
                            if (event.card.name == 'tiesuo') {
                                if (!event.target.isLinked()) return false;
                            }
                            return get.effect(event.target, event.card, player, player) > 0;
                        }
                        if (event.card.name == 'tiesuo') return true;
                        return get.effect(player, event.card, event.player, player) > 0;
                    },
                    logTarget(event, player) {
                        if (event.player == player) return event.target;
                        return event.player;
                    },
                    content() {
                        trigger.target.draw();
                        var evt = trigger.parent;
                        evt.tlbb_fengyue_new[player.playerid].push(trigger.target);
                        evt.targets.push(trigger.target);
                    },
                },
                //邪庄聚贤 霸天20230612
                tlbb_bingcan_new2: {
                    audio: 'tlbb_bingcan_new',
                    trigger: {
                        global: 'damageEnd',
                    },
                    filter(event, player) {
                        var bool = game.hasPlayer2(function(current) {
                            return current.hasSkill('tlbb_bingcan_new_mark');
                        });
                        if (!bool) return false;
                        if (event.num <= 0) return false;
                        return event.nature == 'ice';
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var targetx = game.findPlayer2(function(current) {
                            return current.hasSkill('tlbb_bingcan_new_mark');
                        });
                        var tstr = targetx == player ? '自己' : get.translation(targetx);
                        var str = '是否将' + tstr + '的金睛冰蚕移动至';
                        str += tstr;
                        str += '的上家或下家?';
                        player
                            .chooseTarget(str, function(card, player, target) {
                                return target == targetx.next || target == targetx.previous;
                            })
                            .set('ai', function(target) {
                                return Math.random();
                            });
                        event.targetx = targetx;
                        ('step 1');
                        if (result.bool) {
                            var count = event.targetx.countMark('tlbb_bingcan_new_mark') + 1;
                            event.targetx.removeSkill('tlbb_bingcan_new_mark');
                            result.targets[0].addSkill('tlbb_bingcan_new_mark');
                            if (player.storage.tlbb_bingcan_new2 && player.storage.tlbb_bingcan_new2.includes(result.targets[0])) {
                                result.targets[0].damage(count, player, 'ice');
                                player.storage.tlbb_bingcan_new2 = [];
                                //进入负面状态的代码
                                var target = result.targets[0];
                                event.target = target;
                                var list = [];
                                var list2 = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5', 'equip6'];
                                for (var i of list2) {
                                    if (!target.hasDisabledSlot(i)) list.push(['disableEquip', [i]]);
                                }
                                if (!target.isLinked()) {
                                    list.push(['link']);
                                }
                                if (!target.isTurnedOver()) {
                                    list.push(['turnOver']);
                                }
                                if (!target.isDisabledJudge()) {
                                    list.push(['disableJudge']);
                                }
                                get.randomCards(100, function(cardx) {
                                    if (get.type(cardx, null, false) != 'delay') return false;
                                    var name = cardx.name;
                                    if (name == 'jydiy_yungongliaoshang') return false;
                                    if (!target.canAddJudge({ name: name })) return false;
                                    list.push(['addJudge', [name, cardx]]);
                                    return false;
                                });
                                if (list.length) {
                                    var item = list.randomGet();
                                    if (item.length == 1) {
                                        target[item[0]]();
                                    } else {
                                        target[item[0]].apply(target, item[1]);
                                    }
                                }
                            } else {
                                result.targets[0].addMark('tlbb_bingcan_new_mark', count, false);
                                event.finish();
                            }
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        var targetx = event.target;
                        var bool = game.hasPlayer(function(target) {
                            return target != player && (!player.storage.tlbb_bingcan_new2 || !player.storage.tlbb_bingcan_new2.includes(target)) && target != targetx;
                        });
                        if (!bool) {
                            event.finish();
                            return;
                        }
                        player
                            .chooseTarget('请重新选择【冰蚕】的目标', true, function(card, player, target) {
                                return target != player && (!player.storage.tlbb_bingcan_new2 || !player.storage.tlbb_bingcan_new2.includes(target)) && target != targetx;
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(_status.event.player, target);
                                if (att > 0) return att + 1;
                                if (att == 0) return Math.random();
                                return att;
                            }).animate = false;
                        ('step 3');
                        if (result.bool) {
                            var target = result.targets[0];
                            if (!player.storage.tlbb_bingcan_new2) player.storage.tlbb_bingcan_new2 = [];
                            player.storage.tlbb_bingcan_new2.push(target);
                            player.loseMaxHp();
                        }
                    },
                },
                tlbb_bingcan_new_mark: {
                    marktext: '蚕',
                    intro: {
                        name: '金睛冰蚕',
                        name2: '蚕',
                        content: '受到或造成的普通伤害均改为寒冰伤害,已移动#次',
                    },
                    init(player, skill) {
                        if (!player.storage[skill]) player.storage[skill] = 0;
                        game.log(player, '获得了', { name: '金睛冰蚕' });
                    },
                    onremove(player, skill) {
                        delete player.storage[skill];
                        game.log(player, '失去了', { name: '金睛冰蚕' });
                    },
                    mark: true,
                    popup: false,
                    nopop: true,
                    charlotte: true,
                    audio: 'tlbb_bingcan_new',
                    trigger: {
                        player: 'damageBegin',
                        source: 'damageBegin',
                    },
                    forced: true,
                    filter(event, player) {
                        if (!event.hasNature()) return true;
                        return false;
                    },
                    content() {
                        game.setNature(trigger, 'ice');
                        game.log(player, trigger.player == player ? '受到' : '造成', '普通伤害改为寒冰伤害');
                    },
                    ai: {
                        effect: {
                            player(card, player, target, current, isLink) {
                                if (!target) return;
                                if (isLink) return;
                                if (!get.tag(card, 'damage')) return;
                                if (game.hasNature(card) || get.tag(card, 'natureDamage')) return;
                                if (target.storage._tlbb_bingcan) return;
                                target.storage._tlbb_bingcan = true;
                                const count = get.damageEffect(target, player, target, 'ice');
                                delete target.storage._tlbb_bingcan;
                                if (count >= 0) return 'zeroplayer';
                            },
                            target(card, player, target, current, isLink) {
                                if (!target) return;
                                if (isLink) return;
                                if (!get.tag(card, 'damage')) return;
                                if (game.hasNature(card) || get.tag(card, 'natureDamage')) return;
                                if (target.storage._tlbb_bingcan2) return;
                                target.storage._tlbb_bingcan2 = true;
                                const count = get.damageEffect(target, player, target, 'ice');
                                delete target.storage._tlbb_bingcan2;
                                if (count >= 0) return 'zerotarget';
                            },
                        },
                    },
                },
                tlbb_bingcan_new_die: {
                    audio: 'tlbb_bingcan_new',//QQQ
                    trigger: { player: 'die' },
                    forced: true,
                    forceDie: true,
                    popup: false,
                    content() {
                        game.countPlayer(function(current) {
                            if (current.hasSkill('tlbb_bingcan_new_mark')) current.removeSkill('tlbb_bingcan_new_mark');
                        });
                    },
                },
                tlbb_bingcan_new_die2: {
                    audio: 'tlbb_bingcan_new',
                    trigger: { global: 'dieAfter' },
                    forced: true,
                    //forceDie:true,
                    popup: false,
                    content() {
                        if (trigger.player != player && trigger.player.hasSkill('tlbb_bingcan_new_mark') && !player.hasSkill('tlbb_bingcan_new_mark')) {
                            trigger.player.removeSkill('tlbb_bingcan_new_mark');
                            player.addSkill('tlbb_bingcan_new_mark');
                        }
                    },
                },
                tlbb_bingcan_new: {
                    group: ['tlbb_bingcan_new2', 'tlbb_bingcan_new_die', 'tlbb_bingcan_new_die2'],
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'phaseBefore',
                        player: 'enterGame',
                    },
                    forced: true,
                    filter(event, player) {
                        return game.players.length > 1 && (event.name != 'phase' || game.phaseNumber == 0);
                    },
                    onremove(player, skill) {
                        game.countPlayer(function(current) {
                            if (current.hasSkill('tlbb_bingcan_new_mark')) current.removeSkill('tlbb_bingcan_new_mark');
                        });
                    },
                    content() {
                        'step 0';
                        player.addSkill('tlbb_bingcan_new_mark');
                        player
                            .chooseTarget('请选择【冰蚕】的目标', lib.translate.tlbb_bingcan_new_info, true, function(card, player, target) {
                                return target != player && (!player.storage.tlbb_bingcan_new2 || !player.storage.tlbb_bingcan_new2.includes(target));
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(_status.event.player, target);
                                if (att > 0) return att + 1;
                                if (att == 0) return Math.random();
                                return att;
                            }).animate = false;
                        ('step 1');
                        if (result.bool) {
                            var target = result.targets[0];
                            if (!player.storage.tlbb_bingcan_new2) player.storage.tlbb_bingcan_new2 = [];
                            player.storage.tlbb_bingcan_new2.push(target);
                        }
                    },
                },
                tlbb_xiewang_new: {
                    subSkill: {
                        disable: {
                            mark: true,
                            charlotte: true,
                            intro: {
                                content: '本轮已发动',
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'useCardToTarget',
                    },
                    check(event, player) {
                        if (!player.isDamaged()) return false;
                        if (player.maxHp < 5) return false;
                        return get.effect(player, event.card, event.player, player) > 0;
                    },
                    filter(event, player) {
                        if (!event.targets) return false;
                        if (event.player == player) return false;
                        if (event.targets.includes(player)) return false;
                        if (get.info(event.card).multitarget) return false;
                        if (player.hasSkill('tlbb_xiewang_new_disable')) return false;
                        var type = get.type(event.card);
                        if (type != 'basic' && type != 'trick') return false;
                        if (lib.filter.targetEnabled2(event.card, event.player, player)) {
                            return true;
                        }
                        return false;
                    },
                    autodelay: true,
                    content() {
                        player.loseMaxHp();
                        player.addTempSkill('tlbb_xiewang_new_disable', 'roundStart');
                        trigger.parent.targets.add(player);
                        trigger.player.line(player, 'green');
                    },
                },
                tlbb_kuiwei_new: {
                    group: ['tlbb_kuiwei_new_remove'],
                    subSkill: {
                        remove: {
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return player.identity != 'zhu';
                            },
                            content() {
                                player.removeSkill('tlbb_kuiwei_new');
                            },
                        },
                    },
                    zhuSkill: true,
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    filter(event, player) {
                        if (!player.hasZhuSkill('tlbb_kuiwei')) return false;
                        return game.hasPlayer(function(current) {
                            return current != player && current.group == 'jy_xie';
                        });
                    },
                    filterTarget(card, player, target) {
                        return target != player && target.group == 'jy_xie';
                    },
                    contentBefore() {
                        game.asyncDraw(targets);
                    },
                    content() {
                        'step 0';
                        if (target.countCards('h')) {
                            target.chooseCard('选择一张牌交给' + get.translation(player), true).set('ai', function(card) {
                                var player = _status.event.parent.player,
                                    source = _status.event.player;
                                if (get.attitude(player, source) > 0) return 11 - get.value(card);
                                return 7 - get.value(card);
                            });
                        } else {
                            event.finish();
                        }
                        ('step 1');
                        if (result.bool) {
                            target.give(result.cards, player);
                        }
                    },
                    ai: {
                        order: 1,
                        result: {
                            player(player, target) {
                                return 1;
                            },
                        },
                    },
                },
                tlbb_shidu_temp: {
                    forced: true,
                    nopop: true,
                    charlotte: true,
                    onremove(player, skill) {
                        if (player.name2 && lib.character[player.name2]) {
                            if (lib.jy_xingshi_names.includes(player.name2)) {
                                lib.skill.tlbb_shidu.removefujiang(player, player.name2);
                            }
                        }
                    },
                },
                tlbb_shidu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard(card, player, event) {
                        //return true
                        if (card.name == 'sha' && get.nature(card) == 'jy_du') return lib.filter.cardDiscardable(card, player, event);
                        return false;
                    },
                    selectCard: [1, 1],
                    filterTarget(card, player, target) {
                        if (player == target) return false;
                        return true;
                    },
                    addfujiang(player, name) {
                        var temp_name;
                        if (player.name2 && lib.character[player.name2]) {
                            temp_name = player.name2;
                        } else {
                            player.name2 = 'tlbb_baiban';
                            temp_name = player.name2;
                        }
                        player.classList.add('fullskin2');
                        player.reinit(player.name2, name, [player.hp, player.maxHp]);
                        player.node.avatar2.show();
                        player.node.count.classList.add('p2');
                        player.node.name2.show();
                    },
                    removefujiang(player, name) {
                        player.reinit(player.name2, 'tlbb_baiban', [player.hp, player.maxHp]);
                        delete player.name2;
                        player.classList.remove('fullskin2');
                        player.node.avatar2.hide();
                        player.node.count.classList.remove('p2');
                        player.node.name2.hide();
                    },
                    content() {
                        'step 0';
                        target.damage('nocard', 'jy_du');
                        ('step 1');
                        if (target.isAlive()) {
                            var list = lib.jy_xingshi_names.slice(0);
                            list = list.filter(function(i) {
                                if (!lib.character[i]) {
                                    var result = get.character(i);
                                    if (result) {
                                        if (!result[4]) {
                                            result[4] = [];
                                        }
                                        lib.character[i] = result;
                                        return true;
                                    }
                                    return false;
                                }
                                return true;
                            });
                            if (!list.length) {
                                event.finish();
                                return;
                            }
                            var str = '选择一张行尸类武将';
                            if (target.name2 && lib.character[target.name2]) {
                                list.remove(target.name2);
                                str += '替换' + get.translation(target) + '的副将';
                                str += '你获得其副将(若你已有副将则替换之)';
                            } else {
                                str += '成为' + get.translation(target) + '的副将';
                            }
                            var dialog = ui.create.dialog(str, 'hidden');
                            list.remove(target.name1);
                            if (target.name1 == 'ywhy_jiangshi_female') list.remove('ywhy_jiangshi_male');
                            if (target.name1 == 'ywhy_jiangshi_male') list.remove('ywhy_jiangshi_female');
                            if (target.name1 == 'ywhy_feijiang_female') list.remove('ywhy_feijiang_male');
                            if (target.name1 == 'ywhy_feijiang_male') list.remove('ywhy_feijiang_female');
                            if (target.name1 == 'ywhy_zongzi_female') list.remove('ywhy_zongzi_male');
                            if (target.name1 == 'ywhy_zongzi_male') list.remove('ywhy_zongzi_female');
                            dialog.add([list, 'character']);
                            player.chooseButton(dialog, true).ai = function(button) {
                                return Math.random() + 1;
                            };
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result && result.links && result.links.length) {
                            if (target.name2 && lib.character[target.name2]) {
                                lib.skill.tlbb_shidu.addfujiang(player, target.name2);
                            }
                            lib.skill.tlbb_shidu.addfujiang(target, result.links[0]);
                            target.addTempSkill('tlbb_shidu_temp', { player: 'phaseEnd' });
                        }
                    },
                    check(card) {
                        return 1;
                    },
                    position: 'h',
                    ai: {
                        damage: true,
                        order: 12,
                        result: {
                            target(player, target) {
                                var eff = get.damageEffect(target, player, player, 'jy_du');
                                var att = get.attitude(player, target) < 0 ? 1 : -1;
                                if (att > 0 && eff > 0) return -eff;
                                return 0;
                            },
                        },
                    },
                },
                tlbb_huagong2: {
                    audio: 'tlbb_huagong',
                    trigger: {
                        player: 'damageBegin',
                    },
                    forced: true,
                    filter(event, player) {
                        if (!event.hasNature()) return true;
                        return false;
                    },
                    content() {
                        game.setNature(trigger, 'jy_du');
                    },
                    ai: {
                        effect: {
                            target(card, player, target, current, isLink) {
                                if (!target) return;
                                if (isLink) return;
                                if (!get.tag(card, 'damage')) return;
                                if (game.hasNature(card) || get.tag(card, 'natureDamage')) return;
                                if (target.storage._tlbb_huagong2) return;
                                target.storage._tlbb_huagong2 = true;
                                const count = get.damageEffect(target, player, target, 'jy_du');
                                delete target.storage._tlbb_huagong2;
                                if (count >= 0) return 'zerotarget';
                            },
                        },
                    },
                },
                tlbb_huagong4: {
                    inherit: 'baiban',
                    audio: 'tlbb_huagong',
                    trigger: { player: 'damageEnd' },
                    filter(event, player) {
                        return event.num > 0;
                    },
                    forced: true,
                    popup: false,
                    content() {
                        var skills = Object.keys(player.storage['tlbb_huagong4']);
                        for (var skill of skills) {
                            player.storage['tlbb_huagong4'][skill] -= trigger.num;
                            if (player.storage['tlbb_huagong4'][skill] <= 0) delete player.storage['tlbb_huagong4'][skill];
                        }
                        var skills2 = Object.keys(player.storage['tlbb_huagong4']);
                        if (!skills2.length) player.removeSkill('tlbb_huagong4');
                    },
                    skillBlocker(skill, player) {
                        if (!player.storage['tlbb_huagong4'][skill]) return false;
                        return !lib.skill[skill].charlotte;
                    },
                    init(player, skill) {
                        if (!player.storage[skill]) player.storage[skill] = {};
                        //game.log("测试11111111111",player)
                        player.addSkillBlocker(skill);
                    },
                    onremove(player, skill) {
                        player.removeSkillBlocker(skill);
                        delete player.storage[skill];
                    },
                    intro: {
                        content(storage, player, skill) {
                            var list = player.getSkills(null, false, false).filter(function(i) {
                                return lib.skill.tlbb_huagong4.skillBlocker(i, player);
                            });
                            if (list.length) return '失效技能:' + get.translation(list);
                            return '无失效技能';
                        },
                    },
                },
                tlbb_huagong3: {
                    audio: 'tlbb_huagong',
                    trigger: {
                        global: ['logSkillBegin', 'useSkillBegin'],
                    },
                    popup: false,
                    filter(event, player) {
                        return event.player != player;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        if (get.isXingShi(trigger.player, true)) {
                            player.addMark('tlbb_huagong', 1);
                        }
                        ('step 1');
                        if (player.hasMark('tlbb_huagong') && trigger.player.hasSkill(trigger.skill)) {
                            player.chooseBool(get.prompt('tlbb_huagong', trigger.player), '令其技能失效2回合').set('ai', function() {
                                return false;
                            });
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.bool) {
                            player.removeMark('tlbb_huagong', 1);
                            trigger.player.addSkill('tlbb_huagong4');
                            trigger.player.storage['tlbb_huagong4'][trigger.skill] = 2;
                            player.line(trigger.player);
                        }
                    },
                },
                tlbb_huagong: {
                    group: ['tlbb_huagong2', 'tlbb_huagong3'],
                    marktext: '腐',
                    intro: {
                        name: '腐功',
                        name2: '腐',
                        content: 'mark',
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    filter(event, player) {
                        if (!player.hasMark('tlbb_huagong')) return false;
                        return event.num > 0 && event.nature == 'jy_du';
                    },
                    content() {
                        'step 0';
                        event.count = 1;
                        ('step 1');
                        player.removeMark('tlbb_huagong', 1);
                        player.draw(3);
                        event.given = 0;
                        event.togive = [];
                        ('step 2');
                        if (Array.isArray(result) && result.length) {
                            event.togive = result;
                        } else {
                            event.goto(6);
                        }
                        ('step 3');
                        event.togive = player.getCards('h', function(cardx) {
                            return event.togive.includes(cardx);
                        });
                        if (!event.togive.length) {
                            event.goto(6);
                        }
                        ('step 4');
                        player.chooseCardTarget({
                            filterCard(cardx, player) {
                                return _status.event.togive.includes(cardx);
                            },
                            togive: event.togive,
                            selectCard: [1, event.togive.length],
                            filterTarget(card, player, target) {
                                return player != target;
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
                            prompt: '请选择要送人的卡牌',
                        });
                        ('step 5');
                        if (result.bool) {
                            //player.line(result.targets,'green');
                            player.give(result.cards, result.targets[0], true);
                            //result.targets[0].gain(result.cards,player,'giveAuto');
                            event.goto(3);
                        }
                        ('step 6');
                        event.count += 1;
                        if (event.count < trigger.num && player.hasMark('tlbb_huagong')) {
                            player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                        } else {
                            event.finish();
                        }
                        ('step 7');
                        if (result.bool) {
                            event.goto(1);
                        }
                    },
                },
                tlbb_shending: {
                    group: ['jydiy_shenmuwangding_skill_discard', 'jydiy_shenmuwangding_skill_judge', 'jydiy_shenmuwangding_skill_damage'],
                    forced: true,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'gainAfter',
                    },
                    filter(event, player) {
                        if (event.type != 'jydiy_shenmuwangding') return false;
                        return (
                            event.cards &&
                            event.cards.length &&
                            event.cards.some(function(i) {
                                return i.name == 'sha' && i.nature == 'jy_du';
                            })
                        );
                    },
                    content() {
                        var count = trigger.cards.filter(function(i) {
                            return i.name == 'sha' && i.nature == 'jy_du';
                        }).length;
                        player.addMark('tlbb_huagong', count);
                    },
                },
                //邪慕容复-霸天20220830
                tlbb_bidao: {
                    ai: {
                        combo: 'tlbb_zhinian',
                    },
                    intro: {
                        markcount(storage, player) {
                            var storage = player.getStorage('tlbb_bidao');
                            var skills = player.getStorage('tlbb_bidao2');
                            return storage.length + skills.length;
                        },
                        mark(dialog, storage2, player) {
                            var storage = player.getStorage('tlbb_bidao');
                            var skills = player.getStorage('tlbb_bidao2');
                            if (!storage.length && !skills.length) return '无';
                            var list = [];
                            for (var name of storage) {
                                if (name.includes('::')) {
                                    var name2 = name.split('::');
                                    list.push([get.type(name2[0], null, false), '', name2[0], name2[1]]);
                                } else {
                                    list.push([get.type(name, null, false), '', name]);
                                }
                            }
                            if (list.length) {
                                dialog.addAuto('卡牌');
                                dialog.addAuto([list, 'vcard']);
                            }
                            var list2 = [];
                            if (skills.length) {
                                dialog.addAuto('技能');
                                for (var skill of skills) {
                                    list2.push([skill, '<div class="popup text" style="width:calc(100%-10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
                                }
                                dialog.add([list2, 'textbutton']);
                            }
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    filter(event, player) {
                        return event.source && event.num > 0 && event.source != player && event.source.isIn();
                    },
                    content() {
                        'step 0';
                        event.count = Math.min(trigger.num, 9);
                        ('step 1');
                        event.count--;
                        if (!player.storage.tlbb_bidao) player.storage.tlbb_bidao = [];
                        if (trigger.card) {
                            var name = trigger.card.name,
                                nature = trigger.card.nature;
                            if (name == 'sha' && nature && Array.from(lib.nature.keys()).includes(nature)) name = name + '::' + nature;
                            player.storage.tlbb_bidao.push(name);
                            player.markSkill('tlbb_bidao');
                        }
                        ('step 2');
                        var skills = trigger.source.getSkills(null, false, false);
                        var skills2 = player.getStorage('tlbb_bidao2');
                        var gains = skills.filter(function(skill) {
                            if (!lib.translate[skill]) return false;
                            if (!lib.translate[skill + '_info']) return false;
                            if (!lib.translate[skill + '_info'].length) return false;
                            if (!lib.skill[skill]) return false;
                            if (player.hasSkill(skill, null, false, false)) return false;
                            if (skills2.includes(skill)) return false;
                            if (lib.skill[skill].sub) return false;
                            if (lib.skill[skill].charlotte) return false;
                            if (lib.skill[skill].nopop) return false;
                            if (lib.skill[skill].cardSkill) return false;
                            if (lib.skill[skill].equipSkill) return false;
                            return true;
                        });
                        if (gains.length) {
                            var list = [];
                            for (var skill of skills) {
                                list.push([skill, '<div class="popup text" style="width:calc(100%-10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
                            }
                            var next = player.chooseButton(['【彼道】:选择记录' + get.translation(trigger.source) + '的一项技能', [list, 'textbutton']]);
                            next.set('forced', true);
                            next.set('selectButton', [1, 1]);
                            next.set('ai', function(button) {
                                var player = _status.event.player;
                                return Math.random();
                            });
                        } else {
                            event.goto(4);
                        }
                        ('step 3');
                        game.log(player, '选择了', '#g【' + get.translation(result.links[0]) + '】');
                        player.markAuto('tlbb_bidao2', [result.links[0]]);
                        player.markSkill('tlbb_bidao');
                        ('step 4');
                        if (event.count > 0) {
                            player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                        } else {
                            event.finish();
                        }
                        ('step 5');
                        if (result.bool) {
                            event.goto(1);
                        }
                    },
                },
                tlbb_zhinian: {
                    group: ['tlbb_zhinian_remove'],
                    subSkill: {
                        remove: {
                            trigger: {
                                player: ['logSkillBegin', 'useSkillBegin'],
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                var skills = player.getStorage('tlbb_zhinian');
                                return skills.includes(event.skill);
                            },
                            content() {
                                'step 0';
                                player.unmarkAuto('tlbb_zhinian', [trigger.skill]);
                                var skills = player.getStorage('tlbb_zhinian');
                                player.removeAdditionalSkills('tlbb_zhinian', trigger.skill);
                                ('step 1');
                                var skills = player.getStorage('tlbb_zhinian');
                                if (skills.length == 0) {
                                    event.trigger('tlbb_zhinian_emptySkill');
                                }
                            },
                        },
                    },
                    intro: {
                        mark(dialog, storage2, player) {
                            var skills = player.getStorage('tlbb_zhinian');
                            if (!skills.length) return '无';
                            if (skills.length) {
                                dialog.addAuto('技能');
                                var list = [];
                                for (var skill of skills) {
                                    list.push([skill, '<div class="popup text" style="width:calc(100%-10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
                                }
                                dialog.add([list, 'textbutton']);
                            }
                        },
                    },
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    filter(event, player) {
                        var storage = player.getStorage('tlbb_bidao');
                        var skills = player.getStorage('tlbb_bidao2');
                        return storage.length + skills.length;
                    },
                    content() {
                        'step 0';
                        if (player.maxHp > 1) {
                            player.loseMaxHp();
                        }
                        var storage2 = player.getStorage('tlbb_bidao2');
                        player.markAuto('tlbb_zhinian', storage2);
                        var skills = player.getStorage('tlbb_zhinian');
                        if (skills.length) {
                            player.addAdditionalSkills('tlbb_zhinian', skills, true);
                        }
                        player.storage['tlbb_bidao2'] = [];
                        ('step 1');
                        var storage = player.getStorage('tlbb_bidao');
                        var list = [];
                        for (var name of storage) {
                            if (name.includes('::')) {
                                var name2 = name.split('::');
                                list.push([get.type(name2[0], null, false), '', name2[0], name2[1]]);
                            } else {
                                list.push([get.type(name, null, false), '', name]);
                            }
                        }
                        if (list.length) {
                            var dialog = ui.create.dialog([list, 'vcard']);
                            player
                                .chooseButton(dialog)
                                .set('ai', function(button) {
                                    var link = button.link;
                                    return _status.event.player.getUseValue({ name: link[2], nature: link[3] }, false);
                                })
                                .set('filterButton', function(button) {
                                    var link = button.link;
                                    return _status.event.player.hasUseTarget({ name: link[2], nature: link[3] }, false);
                                });
                        } else {
                            event._result = { bool: false };
                            event.goto(3);
                        }
                        ('step 2');
                        if (result.bool) {
                            var link = result.links[0];
                            var vcard = { name: link[2], nature: link[3] };
                            var name = vcard.name,
                                nature = vcard.nature;
                            if (name == 'sha' && nature && Array.from(lib.nature.keys()).includes(nature)) name = name + '::' + nature;
                            player.unmarkAuto('tlbb_bidao', [name]);
                            player.chooseUseTarget(vcard, false, 'nodistance');
                            event._result = { bool: false };
                        }
                        ('step 3');
                        if (result.bool) {
                            event.goto(1);
                        } else {
                            player.storage.tlbb_bidao = [];
                            player.unmarkSkill('tlbb_bidao');
                            event.finish();
                        }
                    },
                    ai: {
                        order: 6,
                        combo: 'tlbb_bidao',
                        result: {
                            player(player) {
                                if (!player.isDamaged() && player.maxHp > 1) return 0;
                                var storage = player.getStorage('tlbb_bidao');
                                var storage2 = storage.filter(function(name) {
                                    var name2 = name,
                                        nature = null;
                                    if (name.includes('::')) {
                                        var name3 = name.split('::');
                                        name2 = name3[0];
                                        nature = name3[1];
                                    }
                                    var vcard = { name: name2, nature: nature };
                                    return player.getUseValue(vcard, false) > 0;
                                });
                                if (storage2.length) return 1;
                                return -1;
                            },
                        },
                    },
                },
                tlbb_xinmo: {
                    forced: true,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: ['loseAfter', 'tlbb_zhinian_emptySkill'],
                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                    },
                    filter(event, player, name) {
                        if (event.name == 'tlbb_zhinian_remove' || name == 'tlbb_zhinian_emptySkill') return true;
                        if (!event.getl) {
                            game.log('name:' + name);
                            game.log('event.name:' + event.name);
                            return false;
                        }
                        if (player.countCards('e')) return false;
                        var evt = event.getl(player);
                        return evt && evt.es && evt.es.length;
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt('tlbb_xinmo'), '对一名其他角色造成1点伤害', function(card, player, target) {
                                return target != player;
                            })
                            .set('ai', function(target) {
                                var player = _status.event.player;
                                return get.damageEffect(target, player, player);
                            });
                        ('step 1');
                        if (result.bool) {
                            var target = result.targets[0];
                            target.damage();
                        }
                    },
                },
                //界飞鹤-霸天20220619
                tlbb_feihe: {
                    mod: {
                        cardnature(card, player) {
                            if (card.name == 'shan' && !card.nature) return 'jy_shuangfei';
                        },
                    },
                    enable: 'phaseUse',
                    filter(event, player) {
                        return game.hasPlayer((target) => lib.skill.tlbb_feihe.filterTarget(null, player, target));
                    },
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    selectTarget: [1, 3],
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    filterTarget(card, player, target) {
                        if (player == target) return false;
                        var bool = player.inRange(target);
                        var bool2 = get.distance(player, target) <= 1;
                        if (!bool && !bool2) return false;
                        return target.countGainableCards(player, 'h') > 0;
                    },
                    content() {
                        'step 0';
                        if (target.countGainableCards(player, 'h')) {
                            player.gainPlayerCard('h', target, true);
                        }
                        ('step 1');
                        if (result.bool) {
                            if (result.links.length && !target.hasSex('female')) {
                                var cards = player.getCards('h', (card) => result.links.includes(card));
                                if (cards.length) {
                                    player.addGaintag(cards, target.name);
                                }
                                player.addGaintag(cards, target.name);
                                var next = game.createEvent('tlbb_feihe_clear', false);
                                next.cards = result.links.slice(0);
                                next.player = player;
                                next.target = target;
                                event.next.remove(next);
                                event.getParent('phase').after.push(next);
                                next.setContent(function() {
                                    if (!target.isAlive()) return;
                                    var togain = player.getCards('h', (card) => cards.includes(card));
                                    if (togain.length) {
                                        player.give(togain, target, true);
                                        //target.gain(togain,player,'giveAuto');
                                    }
                                });
                            }
                        }
                    },
                    ai: {
                        order: 9,
                        result: {
                            target(player, target) {
                                if (target.hasSex('female')) return -2;
                                return -1;
                            },
                        },
                        threaten: 2,
                    },
                },
                //旧飞鹤
                tlbb_feihe_old: {
                    audio: 'tlbb_feihe',
                    trigger: {
                        global: 'phaseUseBegin',
                    },
                    forced: true,
                    filter(event, player) {
                        if (event.player == player) return false;
                        if (event.player.hasSex('male') && get.distance(player, event.player, 'attack') <= 1) {
                            if (event.player.countDiscardableCards(player, 'hej')) {
                                return true;
                            }
                            return event.player.countCards('h');
                        } else if (event.player.hasSex('female') && get.distance(player, event.player, 'attack') <= 1) {
                            if (event.player.countGainableCards(player, 'hej')) {
                                return true;
                            }
                            return event.player.countCards('h');
                        } else return false;
                    },
                    content() {
                        'step 0';
                        player.chooseToUse({
                            prompt: '是否发动【飞鹤】?',
                            prompt2: lib.translate.tlbb_feihe_old_info,
                            ai1(card) {
                                var event = _status.event;
                                var player = event.player,
                                    target = event.target;
                                var att = get.attitude(player, target) > 0;
                                //if(att>0) return 0;
                                var key = null,
                                    result = 0;
                                if (target.hasSex('male')) {
                                    key = 'countDiscardableCards';
                                    result = get.effect(
                                        target,
                                        {
                                            name: 'guohe_ai',
                                            filterCard(cardx) {
                                                return get.type(cardx, 'trick') == get.type(card, 'trick');
                                            },
                                            position: 'hej',
                                            select: [1, 1],
                                        },
                                        player
                                    );
                                }
                                if (target.hasSex('female')) {
                                    key = 'countGainableCards';
                                    result = get.effect(
                                        target,
                                        {
                                            name: 'shunshou_ai',
                                            filterCard(cardx) {
                                                return get.type(cardx, 'trick') == get.type(card, 'trick');
                                            },
                                            position: 'hej',
                                            select: [1, 1],
                                        },
                                        player
                                    );
                                }
                                if (!key) return 0;
                                return result;
                            },
                            onresult(result) {
                                result.feihe = result;
                            },
                            target: trigger.player,
                        });
                        ('step 1');
                        if (result && result.bool) {
                            var target = trigger.player;
                            var type = get.type(result.card || result.cards[0], 'trick');
                            var key = null,
                                key2 = null;
                            if (target.hasSex('male')) {
                                key = 'countDiscardableCards';
                                key2 = 'discardPlayerCard';
                            }
                            if (target.hasSex('female')) {
                                key = 'countGainableCards';
                                key2 = 'gainPlayerCard';
                            }
                            if (
                                key &&
                                target[key](player, 'hej', function(cardx) {
                                    return get.type(cardx, 'trick') == type;
                                }) > 0
                            ) {
                                var str = '是否' + (key == 'countDiscardableCards' ? '弃置' : '获得') + '<span style="color: #FF00FF">' + get.translation(target) + '</span>区域的一张<span style="color: #FF00FF">' + get.translation(type) + '</span>牌?';
                                player[key2](str, target, 'hej', 'visible').set('filterButton', function(button) {
                                    return get.type(button.link.viewAs || button.link, 'trick') == type;
                                });
                            } else if (target.countCards('h')) {
                                player.viewHandcards(target);
                            }
                        }
                    },
                },
                tlbb_zhuiyun: {
                    mod: {
                        globalFrom(from, to, distance) {
                            return distance - 1;
                        },
                    },
                },
                //赵钱孙
                //埋名--棉花糖
                tlbb_maiming: {
                    getNamePlayer(player, bool, bool2) {
                        const names = lib.skill.tlbb_maiming.getNamePlayer2(player, bool);
                        if (bool2) return lib.skill.tlbb_maiming.getArray(names);
                        return names;
                    },
                    getNamePlayer2(player, bool) {
                        const names = get.rawName2(player.name1);
                        if (bool && player.name2 && lib.character[player.name2]) return names + get.rawName2(player.name2);
                        return names;
                    },
                    getArray(str) {
                        return Array.from(str).filter(function(ttt, index, arr) {
                            //过滤非中文字符串
                            if (/[\u4e00-\u9fa5]/.test(ttt)) return true;
                            return false;
                        });
                    },
                    getList(player) {
                        const init_names = player.storage.tlbb_maiming.init_names;
                        const names = player.storage.tlbb_maiming.names;
                        const list = init_names.filter(function(ttt, index, arr) {
                            return init_names[index] == names[index];
                        });
                        return list;
                    },
                    mod: {
                        maxHandcard(player, num) {
                            const names = lib.skill.tlbb_maiming.getNamePlayer(player, true, true);
                            const players = game.filterPlayer(function(target) {
                                if (target == player) return false;
                                const names2 = lib.skill.tlbb_maiming.getNamePlayer(target, true, true);
                                return names.some((ttt2) => names2.includes(ttt2));
                            });
                            //game.log(player,'埋名手牌上限+',players,'++',players.length);
                            return num + players.length;
                        },
                    },
                    init(player, skill) {
                        const names = get.rawName2(player.name1);
                        const arrNames = lib.skill.tlbb_maiming.getArray(names);
                        player.storage[skill] = {
                            init_names: arrNames.slice(0),
                            names: arrNames.slice(0),
                        };
                        lib.translate[player.name1 + '_old'] = names;
                        lib.translate[player.name1] = names;
                        player.node.name.innerHTML = get.slimName(player.name1);
                        //player.markSkill("tlbb_maiming_add2");
                    },
                    onremove(player, skill) {
                        //delete player._tempTranslate;
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'damageAfter',
                    },
                    _priority: 13,
                    filter(event, player) {
                        if (event.num < 1) return false;
                        return lib.skill.tlbb_maiming.getList(player).length;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        event.num = Math.min(trigger.num, 9);
                        ('step 1');
                        event.list = lib.skill.tlbb_maiming.getList(player);
                        player
                            .chooseTarget(get.prompt('tlbb_maiming'), function(card, player, target) {
                                const namesList = _status.event.namesList;
                                if (target == player) return false;
                                const names = lib.skill.tlbb_maiming.getNamePlayer(target, true, true);
                                return names.some((ttt2) => !namesList.includes(ttt2));
                            })
                            .set('ai', function(target) {
                                const player = _status.event.player;
                                var att = get.attitude(player, target);
                                var num = Math.abs(player.countCards('h') - target.countCards('h'));
                                if (att > 0) return num;
                                return 0;
                            })
                            .set('namesList', event.list);
                        ('step 2');
                        if (result.bool) {
                            event.target = result.targets[0];
                            const names = lib.skill.tlbb_maiming.getNamePlayer(event.target, true, true);
                            const list2 = names.filter((ttt2) => !event.list.includes(ttt2));
                            player.chooseControl(true, list2);
                        } else {
                            event.finish();
                        }
                        ('step 3');
                        if (result.control) {
                            event.text1 = result.control;
                            player.chooseControl(true, event.list.slice(0));
                        } else {
                            event.finish();
                        }
                        ('step 4');
                        if (result.control) {
                            event.text2 = result.control;
                            const nameId = player.storage.tlbb_maiming.names;
                            const id = nameId.indexOf(event.text2);
                            nameId[id] = event.text1;
                            lib.translate[player.name1] = nameId.join('');
                            player.node.name.innerHTML = get.slimName(player.name1);
                            if (!lib.skill.tlbb_maiming.getList(player).length) {
                                event.trigger('tlbb_maiming_bool');
                            }
                        } else {
                            event.finish();
                        }
                        ('step 5');
                        const plyerCount = player.countCards('h');
                        const targetCount = target.countCards('h');
                        if (plyerCount == targetCount) {
                            player.draw(2);
                            target.draw(2);
                        } else {
                            if (plyerCount < targetCount) {
                                player.drawTo(targetCount);
                            } else {
                                target.drawTo(plyerCount);
                            }
                        }
                        event.num -= 1;
                        if (lib.skill.tlbb_maiming.filter({ num: event.num }, player)) event.goto(1);
                    },
                    global: 'tlbb_maiming_max',
                    subSkill: {
                        max: {
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hasSkill('tlbb_maiming')) return num;
                                    const names = lib.skill.tlbb_maiming.getNamePlayer(player, true, true);
                                    const players = game.filterPlayer(function(target) {
                                        if (target == player) return false;
                                        if (!target.hasSkill('tlbb_maiming')) return false;
                                        const names2 = lib.skill.tlbb_maiming.getNamePlayer(target, true, true);
                                        return names.some((ttt2) => names2.includes(ttt2));
                                    });
                                    //game.log(player,'埋名手牌上限+',players,'++',players.length);
                                    return num + players.length;
                                },
                            },
                            charlotte: true,
                        },
                    },
                },
                tlbb_wenguo: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'useCardToPlayer',
                    },
                    prompt(event, player) {
                        return '是否发动【文过】令至多' + get.translation(player.storage.tlbb_wenguo) + '名目标摸一张牌';
                    },
                    filter(event, player) {
                        if (player.hasSkill('tlbb_wenguo_off')) return false;
                        if (!event.targets || !event.targets.length) return false;
                        if (!event.isFirstTarget) return false;
                        if (!get.tag(event.card, 'damage')) return false;
                        if (player.storage.tlbb_wenguo == 1) return get.type(event.card) == 'trick';
                        return true;
                    },
                    forced: true,
                    init(player, skill) {
                        player.storage[skill] = 1;
                    },
                    subSkill: { off: { sub: true } },
                    usable: 1,
                    content() {
                        'step 0';
                        player
                            .chooseTarget('【文过】:是否令至多' + get.translation(player.storage.tlbb_wenguo) + '名角色摸一张牌', [1, player.storage.tlbb_wenguo], function(card, player, target) {
                                const targets = _status.event.targetsList;
                                return targets.includes(target);
                            })
                            .set('ai', function(target) {
                                const player = _status.event.player;
                                return get.attitude(player, target) > 0;
                            })
                            .set('targetsList', trigger.targets);
                        ('step 1');
                        if (result.bool) {
                            game.asyncDraw(result.targets);
                            //player.addTempSkill("tlbb_wenguo_off");
                        } else player.getStat('triggerSkill')[event.name]--;
                    },
                },
                tlbb_yinxing: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'tlbb_maiming_bool',
                    },
                    juexingji: true,
                    _priority: 12,
                    forced: true,
                    mark: true,
                    marktext: '隐',
                    intro: {
                        name: '隐姓',
                        content: 'limited',
                    },
                    filter(event, player) {
                        return !player.storage.tlbb_yinxing;
                    },
                    content() {
                        'step 0';
                        player.awakenSkill('tlbb_yinxing');
                        player.storage.tlbb_yinxing = true;
                        ('step 1');
                        player.loseMaxHp();
                        player.recover();
                        player.storage.tlbb_wenguo = 2;
                    },
                },
                //枯荣大师--霸天
                //枯禅
                tlbb_ku: {
                    forced: true,
                    popup: false,
                    _priority: -100,
                    lastDo: true,
                    charlotte: true,
                    nopop: true,
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
                        },
                    },
                    mod: {
                        targetEnabled(card, player, target, now) {
                            if (target.getStorage('tlbb_ku').includes(card.name)) return false;
                        },
                    },
                },
                tlbb_rong: {
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
                        },
                    },
                    forced: true,
                    popup: false,
                    nopop: true,
                    _priority: -100,
                    lastDo: true,
                    charlotte: true,
                    trigger: {
                        global: 'useCard',
                    },
                    filter(event, player) {
                        if (!event.targets || !event.targets.length) return false;
                        var info = get.info(event.card);
                        if (info.allowMultiple == false) return false;
                        if (info.multitarget) return false;
                        if (!player.getStorage('tlbb_rong').includes(event.card.name)) return false;
                        if (!event.targets.includes(player)) return false;
                        return true;
                    },
                    content() {
                        trigger.targets.push(player);
                    },
                },
                tlbb_kuchan_rong: {
                    trigger: {
                        player: ['recoverAfter', 'gainAfter'],
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player
                            .chooseTarget(
                                function(card, player, target) {
                                    var list = get.inpile(function(name) {
                                        var card = { name: name };
                                        var info = get.info(card);
                                        if (info.allowMultiple == false) return false;
                                        if (info.multitarget) return false;
                                        if (info.notarget) return false;
                                        if (get.type(card) != 'trick') return false;
                                        return !target.getStorage('tlbb_rong').includes(name);
                                    });
                                    return list.length;
                                },
                                '枯禅-荣',
                                '令一名角色本局游戏成为一张锦囊牌的目标后额外结算一次'
                            )
                            .set('ai', function(target) {
                                var player = _status.event.player;
                                var list = get.inpile(function(name) {
                                    var card = { name: name };
                                    var info = get.info(card);
                                    if (info.allowMultiple == false) return false;
                                    if (info.multitarget) return false;
                                    if (info.notarget) return false;
                                    if (get.type(card) != 'trick') return false;
                                    return !target.getStorage('tlbb_rong').includes(name);
                                });
                                var max = 0;
                                for (var i = 0; i < list.length; i++) {
                                    var temp = get.effect(target, { name: list[i] }, player, player);
                                    if (temp > max) max = temp;
                                }
                                if (max > 0 && target == player) max += 40;
                                if (player.identity != 'nei' && target.identity == 'zhu' && max > 0) max += 10;
                                return max;
                            });
                        ('step 1');
                        if (result.bool) {
                            var target = result.targets[0];
                            event.target = target;
                            //target.addSkill('tlbb_rong');
                            var list = get.inpile(function(name) {
                                var card = { name: name };
                                var info = get.info(card);
                                if (info.allowMultiple == false) return false;
                                if (info.multitarget) return false;
                                if (info.notarget) return false;
                                if (get.type(card) != 'trick') return false;
                                return !target.getStorage('tlbb_rong').includes(name);
                            });
                            for (var i = 0; i < list.length; i++) {
                                list[i] = ['锦囊', '', list[i]];
                            }
                            player.chooseButton(true, [[list, 'vcard']]).set('ai', function(button) {
                                if (button.link[2] == 'tiesuo') return 0;
                                return get.effect(target, { name: button.link[2] }, player, player);
                            });
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.bool) {
                            game.log(target, '成为', { name: result.links[0][2] }, '的目标时额外结算一次');
                            target.markAuto('tlbb_rong', [result.links[0][2]]);
                        }
                    },
                },
                tlbb_kuchan_ku: {
                    trigger: {
                        player: ['discard', 'damageEnd'],
                    },
                    forced: true,
                    filter(event, player) {
                        if (event.name == 'damage') return true;
                        var evt = event.done;
                        return evt && evt.player == player && evt.cards2 && evt.cards2.length;
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(
                                function(card, player, target) {
                                    var list = get.inpile(function(name) {
                                        var card = { name: name };
                                        var info = get.info(card);
                                        if (info.allowMultiple == false) return false;
                                        if (info.multitarget) return false;
                                        if (info.notarget) return false;
                                        if (get.type(card) != 'trick') return false;
                                        return !target.getStorage('tlbb_ku').includes(name);
                                    });
                                    return list.length;
                                },
                                '枯禅-枯',
                                '令一名角色本局游戏不能成为一张锦囊牌的目标'
                            )
                            .set('ai', function(target) {
                                var player = _status.event.player;
                                var list = get.inpile(function(name) {
                                    var card = { name: name };
                                    var info = get.info(card);
                                    if (info.allowMultiple == false) return false;
                                    if (info.multitarget) return false;
                                    if (info.notarget) return false;
                                    if (get.type(card) != 'trick') return false;
                                    return !target.getStorage('tlbb_ku').includes(name);
                                });
                                var max = 0;
                                for (var i = 0; i < list.length; i++) {
                                    var temp = -get.effect(target, { name: list[i] }, player, player);
                                    if (temp > max) max = temp;
                                }
                                if (max > 0 && target == player) max += 40;
                                if (player.identity != 'nei' && target.identity == 'zhu' && max > 0) max += 10;
                                return max;
                            });
                        ('step 1');
                        if (result.bool) {
                            var target = result.targets[0];
                            event.target = target;
                            //target.addSkill('tlbb_ku');
                            var list = get.inpile(function(name) {
                                var card = { name: name };
                                var info = get.info(card);
                                if (info.allowMultiple == false) return false;
                                if (info.multitarget) return false;
                                if (info.notarget) return false;
                                if (get.type(card) != 'trick') return false;
                                return !target.getStorage('tlbb_ku').includes(name);
                            });
                            for (var i = 0; i < list.length; i++) {
                                list[i] = ['锦囊', '', list[i]];
                            }
                            player.chooseButton(true, [[list, 'vcard']]).set('ai', function(button) {
                                return -get.effect(target, { name: button.link[2] }, player, player);
                            });
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.bool) {
                            game.log(target, '不能成为', { name: result.links[0][2] }, '的目标');
                            target.markAuto('tlbb_ku', [result.links[0][2]]);
                        }
                    },
                },
                tlbb_kuchan: {
                    group: ['tlbb_kuchan_ku', 'tlbb_kuchan_rong'],
                    global: ['tlbb_ku', 'tlbb_rong'],
                    audio: 'ext:金庸群侠传/peiyin:2',
                },
                //少商
                tlbb_shaoshang: {
                    shaRelated: true,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'useCardToPlayered',
                    },
                    check(event, player) {
                        return get.attitude(player, event.target) <= 0;
                    },
                    filter(event, player) {
                        if (event.card.name != 'sha') return false;
                        var num1 = (player.countCards('h') + 1) % 2;
                        var num2 = (event.target.countCards('h') + 1) % 2;
                        return num1 == num2;
                    },
                    logTarget: 'target',
                    content() {
                        trigger.parent.directHit.add(trigger.target);
                    },
                    ai: {
                        directHit_ai: true,
                        skillTagFilter(player, tag, arg) {
                            if (arg && arg.card.name != 'sha') return false;
                            if (!arg.target) return false;
                            if (get.attitude(player, arg.target) > 0) return false;
                            var num1 =
                                (player.countCards('h', function(card) {
                                    return !ui.selected.cards || !ui.selected.cards.includes(card);
                                }) +
                                    1) %
                                2;
                            var num2 = (arg.target.countCards('h') + 1) % 2;
                            if (num1 != num2) return false;
                        },
                    },
                },
                tlbb_fenpu: {
                    enable: 'phaseUse',
                    position: 'he',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    check(card) {
                        return get.value(card);
                    },
                    filter(event, player) {
                        if (player.storage.tlbb_fenpu) return false;
                        return player.countCards('he', (card) => lib.jy_mijiList.includes(card.name));
                    },
                    discard: false,
                    lose: false,
                    delay: false,
                    filterCard(card, player) {
                        return lib.jy_mijiList.includes(card.name);
                    },
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    mark: true,
                    limited: true,
                    intro: {
                        content: 'limited',
                    },
                    init(player, skill) {
                        player.storage[skill] = false;
                    },
                    content() {
                        player.awakenSkill('tlbb_fenpu');
                        player.storage.tlbb_fenpu = true;
                        player.showCards(cards, get.translation(player) + '发动了【焚谱】');
                        player.lose(cards, ui.special);
                        var name = cards[0].name;
                        var skills = get.info({ name: name }).skills;
                        if (skills) {
                            for (var i of skills) {
                                target.addSkills(i);
                            }
                        }
                    },
                    ai: {
                        order: 13,
                        result: {
                            target: 1,
                        },
                    },
                },
                //玄苦--霸天
                tlbb_shouye: {
                    dutySkill: true,
                    group: ['tlbb_shouye_achieve', 'tlbb_shouye_fail'],
                    derivation: ['tlbb_xiongying'],
                    //derivation:["tlbb_xianglong","tlbb_xiongying"], //不想让【降龙】显示在武将界面上
                    subSkill: {
                        mark: {
                            intro: {
                                name: '授业',
                                content: 'players',
                            },
                        },
                        achieve: {
                            trigger: {
                                global: 'tlbb_xianglong_judge',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (player.storage.tlbb_shouye) return false;
                                var list = player.getStorage('tlbb_shouye_mark');
                                if (!list.length) return false;
                                return event.player == list[0];
                            },
                            content() {
                                'step 0';
                                if (!player.storage.tlbb_shouye2) {
                                    player.storage.tlbb_shouye2 = [];
                                }
                                var result = trigger.result_judge;
                                player.storage.tlbb_shouye2.add(result.color);
                                game.log(trigger.player, '〖降龙〗判定累计的颜色', player.storage.tlbb_shouye2);
                                if (player.storage.tlbb_shouye2.length >= 2) {
                                    player.gainMaxHp();
                                    player.storage.tlbb_shouye = true;
                                    player.awakenSkill('tlbb_shouye');
                                    game.log(player, '成功完成使命');
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (player.isDamaged()) player.recover();
                                player.addSkills('tlbb_xiongying');
                            },
                        },
                        fail: {
                            trigger: {
                                global: 'dying',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (player.storage.tlbb_shouye) return false;
                                var list = player.getStorage('tlbb_shouye_mark');
                                if (!list.length) return false;
                                return event.player == player || event.player == list[0];
                            },
                            content() {
                                var list = player.getStorage('tlbb_shouye_mark');
                                var target = list[0];
                                if (target) {
                                    target.removeSkills('tlbb_xianglong');
                                    target.addSkills('sdyx_shien');
                                }
                                player.storage.tlbb_shouye = true;
                                player.awakenSkill('tlbb_shouye');
                                game.log(player, '使命失败');
                            },
                        },
                    },
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    filter(event, player) {
                        if (player.storage.tlbb_shouye) return false;
                        var list = player.getStorage('tlbb_shouye_mark');
                        return !list.length;
                    },
                    filterTarget(card, player, target) {
                        return target != player && !target.hasSkill('tlbb_xianglong', null, null, false);
                    },
                    content() {
                        player.markAuto('tlbb_shouye_mark', [target]);
                        target.addSkills('tlbb_xianglong');
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: 1,
                        },
                    },
                },
                tlbb_xiongying: {
                    subSkill: {
                        mark: {
                            marktext: '凶',
                            intro: {
                                name: '凶',
                                name2: '凶',
                                content: '当前手牌上限减#',
                            },
                            mark: true,
                            charlotte: true,
                            mod: {
                                maxHandcard(player, num) {
                                    return num - player.countMark('tlbb_xiongying_mark');
                                },
                            },
                            audio: 'ext:金庸群侠传/peiyin:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return player.countMark('tlbb_xiongying_mark') > 0;
                            },
                            prompt: '是否移去一个凶标记',
                            content() {
                                'step 0';
                                player.removeMark('tlbb_xiongying_mark', 1);
                                player.draw(3);
                                if (!player.hasMark('tlbb_xiongying_mark')) {
                                    player.removeSkill('tlbb_xiongying_mark');
                                }
                                var target = game.findPlayer(function(current) {
                                    var list = current.getStorage('tlbb_shouye_mark');
                                    return list && list[0] == player;
                                });
                                if (target) {
                                    event.target = target;
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                player.chooseCard('h', '是否交给' + get.translation(target) + '一张手牌').set('ai', function(card) {
                                    if (get.attitude(_status.event.player, _status.event.parent.target) > 0) {
                                        return 11 - get.value(card);
                                    } else {
                                        return -1;
                                    }
                                });
                                ('step 2');
                                if (result.bool) {
                                    player.give(result.cards, target, true);
                                    //target.gain(result.cards,player,'giveAuto');
                                    //player.line(target);
                                }
                            },
                        },
                        damage: {
                            marktext: '凶',
                            trigger: {
                                player: 'damage',
                            },
                            forced: true,
                            logTarget(event, player) {
                                var list = player.getStorage('tlbb_shouye_mark');
                                return list[0];
                            },
                            content() {
                                var list = player.getStorage('tlbb_shouye_mark');
                                if (!list[0].hasSkill('tlbb_xiongying_mark')) {
                                    list[0].addSkill('tlbb_xiongying_mark');
                                }
                                list[0].addMark('tlbb_xiongying_mark', 1);
                            },
                            filter(event, player) {
                                if (event.num <= 0) return false;
                                var list = player.getStorage('tlbb_shouye_mark');
                                if (!list.length) return false;
                                return list[0].isIn();
                            },
                        },
                    },
                    group: 'tlbb_xiongying_damage',
                    forced: true,
                    popup: false,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'useCard',
                    },
                    filter(event, player) {
                        if (!get.tag(event.card, 'damage')) return false;
                        var list = player.getStorage('tlbb_shouye_mark');
                        if (!list.length) return false;
                        return event.player == list[0];
                    },
                    content() {
                        trigger.directHit.add(player);
                    },
                },
                tlbb_ranmu: {
                    global: 'tlbb_ranmu2',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseUseBegin',
                        source: 'damageBegin1',
                    },
                    _priority: 15,
                    forced: true,
                    getCount() {
                        return game.countPlayer(function(target) {
                            return target.countCards('e', { suit: 'diamond' });
                        });
                    },
                    filter(event, player, name) {
                        if (_status.currentPhase != player) return false;
                        if (event.name == 'damage') {
                            if (!event.hasNature('fire')) return false;
                            if (!lib.skill.tlbb_ranmu.getCount()) return false;
                        } else {
                            return true;
                        }
                    },
                    content() {
                        if (trigger.name == 'damage') {
                            trigger.num += lib.skill.tlbb_ranmu.getCount();
                        }
                    },
                    ai: {
                        effect: {
                            player(card, player, target, current, isLink) {
                                if (!target) return;
                                if (isLink) return;
                                if (!game.hasNature(card, 'fire') && !get.tag(card, 'fireDamage')) return;
                                const count = lib.skill.tlbb_ranmu.getCount();
                                if (!count) return;
                                if (_status.currentPhase != player) return;
                                if (
                                    target.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: card,
                                    })
                                )
                                    return;
                                return [1, 0, 1, -1.5 * count];
                            },
                        },
                    },
                },
                tlbb_ranmu2: {
                    mod: {
                        suit(card, suit) {
                            var playerx = _status.currentPhase;
                            if (!playerx) return;
                            if (playerx.isAlive() && playerx.hasSkill('tlbb_ranmu')) {
                                if (get.position(card) == 'e' && suit == 'club') return 'diamond';
                            }
                        },
                    },
                },
                //绝逍遥子
                //海纳--霸天
                tlbb_haina: {
                    audio: 'ext:金庸群侠传/peiyin:4',
                    trigger: {
                        global: 'useCardAfter',
                    },
                    intro: {
                        mark(dialog, storage, player) {
                            if (!storage || !storage.length) return '无';
                            var list = [];
                            for (var i of storage) {
                                var name = i;
                                if (i.includes('::')) {
                                    name = i.split('::');
                                    list.push([get.type(name[0]), '', name[0], name[1]]);
                                } else {
                                    list.push([get.type(name), '', name]);
                                }
                            }
                            dialog.addAuto([list, 'vcard']);
                        },
                        markcount(storage, player) {
                            return storage.length;
                        },
                    },
                    forced: true,
                    filter(event, player) {
                        if (event.player == player) return false;
                        var gain = event.cards.filterInD('od');
                        if (!gain.length) return false;
                        if (!event.targets || !event.targets.length || !event.targets.includes(player)) return false;
                        var storage = player.getStorage('tlbb_haina');
                        var name = event.card.name;
                        if (name == 'sha' && event.card.nature && Array.from(lib.nature.keys()).includes(event.card.nature)) name = name + '::' + event.card.nature;
                        return !storage.includes(name);
                    },
                    content() {
                        var name = trigger.card.name;
                        if (name == 'sha' && trigger.card.nature && Array.from(lib.nature.keys()).includes(trigger.card.nature)) name = name + '::' + trigger.card.nature;
                        player.markAuto('tlbb_haina', [name]);
                        player.gain(trigger.cards.filterInD('od'), 'log', 'gain2');
                    },
                },
                //长春---棉花糖
                tlbb_changchun: {
                    trigger: {
                        player: ['phaseUseBegin', 'phaseAfter'],
                    },
                    forced: true,
                    fixed: true,
                    charlotte: true,
                    superCharlotte: true,
                    _priority: 100,
                    audio: 'ext:金庸群侠传/peiyin:4',
                    content() {
                        'step 0';
                        if (event.triggername == 'phaseUseBegin') {
                            player.storage.tlbb_changchun = {
                                hs: player.getCards('h'),
                            };
                            event.finish();
                            return;
                        }
                        ('step 1');
                        if (!player.storage.tlbb_changchun || !player.storage.tlbb_changchun.hs) {
                            event.finish();
                            return;
                        }
                        var hs0 = player.getCards('h');
                        if (hs0.length && !player.getHistory('skipped').includes('phaseUse')) player.lose(hs0)._triggered = null;
                        ('step 2');
                        var hs0 = player.storage.tlbb_changchun.hs;
                        var hs2 = [];
                        for (var i = 0; i < hs0.length; i++) {
                            var card = get.cardPile(function(cardx) {
                                return cardx == hs0[i];
                            });
                            if (!card) {
                                card = game.createCard(hs0[i]);
                            }
                            hs2.push(card);
                        }
                        if (hs2.length) player.directgain(hs2);
                        player.update();
                        delete player.storage.tlbb_changchun;
                    },
                },
                //段誉和虚竹的主公技-霸天
                tlbb_zhengyan: {
                    group: ['tlbb_zhengyan_remove'],
                    subSkill: {
                        remove: {
                            trigger: { global: 'gameStart', player: 'enterGame' },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return player.identity != 'zhu';
                            },
                            content() {
                                player.removeSkill('tlbb_zhengyan');
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'loseHpEnd' },
                    forced: true,
                    zhuSkill: true,
                    filter(event, player) {
                        if (!player.hasZhuSkill('tlbb_zhengyan')) return false;
                        var group = 'qun';
                        if (lib.jy_changeSkill) group = 'jy_lie';
                        return game.hasPlayer(function(target) {
                            if (target == player) return false;
                            if (group != target.group) return false;
                            return true;
                        });
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('tlbb_zhengyan'), function(card, player, target) {
                                var group = 'qun';
                                if (lib.jy_changeSkill) group = 'jy_lie';
                                return target != player && group == target.group;
                            })
                            .set('ai', function(target) {
                                return get.attitude(player, target);
                            });
                        ('step 1');
                        if (result.bool) {
                            result.targets[0].draw();
                        }
                    },
                },
                //新大乘
                tlbb_dacheng: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    global: 'tlbb_dacheng2',
                    zhuSkill: true,
                },
                tlbb_dacheng2: {
                    enable: 'phaseUse',
                    audio: 'tlbb_dacheng',
                    line: true,
                    prepare(cards, player, targets) {
                    },
                    prompt() {
                        var player = _status.event.player;
                        var list = game.filterPlayer(function(target) {
                            return target != player && target.hasZhuSkill('tlbb_dacheng', player);
                        });
                        var str = '是否令' + get.translation(list);
                        if (list.length > 1) str += '中的一人';
                        str += '观看你的手牌并可以使用其中一张?';
                        return str;
                    },
                    filter(event, player) {
                        if (
                            !game.hasPlayer(function(target) {
                                if (player.group != target.group) return false;
                                return target != player && target.hasZhuSkill('tlbb_dacheng', player) && !target.hasSkill('tlbb_dacheng3');
                            })
                        )
                            return false;
                        return player.countCards('h') > 0;
                    },
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    log: false,
                    filterTarget(card, player, target) {
                        if (player.group != target.group) return false;
                        return target != player && target.hasZhuSkill('tlbb_dacheng', player) && !target.hasSkill('tlbb_dacheng3');
                    },
                    content() {
                        'step 0';
                        target.addTempSkill('tlbb_dacheng3', 'phaseUseEnd');
                        const next = target
                            .choosePlayerCard('是否使用' + get.translation(player) + '的一张牌', 'h', 'visible', player)
                            .set('ai', function(button) {
                                const card = button.link;
                                const player = _status.event.player;
                                return player.getUseValue(card, false);
                            })
                            .set('filterButton', function(button) {
                                const card = button.link;
                                const player = _status.event.player;
                                return player.hasUseTarget(card, false);
                            });
                        ('step 1');
                        if (result.bool) {
                            var card = result.links[0];
                            target.chooseUseTarget(true, card, false, 'nodistance');
                        }
                    },
                    ai: {
                        expose: 0.3,
                        order: 13,
                        result: {
                            target: 1,
                        },
                    },
                },
                tlbb_dacheng3: {
                    audio: 'tlbb_dacheng',
                    forced: true,
                    charlotte: true,
                },
                //旧大乘,因为石破天的主公技撞了,进行修改.
                tlbb_dacheng_old: {
                    group: ['tlbb_dacheng_old_remove'],
                    subSkill: {
                        remove: {
                            trigger: { global: 'gameStart', player: 'enterGame' },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return player.identity != 'zhu';
                            },
                            content() {
                                player.removeSkill('tlbb_dacheng_old');
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'damageBegin' },
                    _priority: -8,
                    zhuSkill: true,
                    forced: true,
                    filter(event, player) {
                        if (!player.hasZhuSkill('tlbb_dacheng_old')) return false;
                        if (!event.source) return false;
                        if (event.source == player) return false;
                        var group = 'wei';
                        if (lib.jy_changeSkill) group = 'jy_song';
                        if (group != event.source.group) return false;
                        return event.num > 0;
                    },
                    content() {
                        'step 0';
                        trigger.source.chooseBool('大乘:是否令' + get.translation(player) + '成为伤害来源？').set('ai', function() {
                            var att = get.attitude(trigger.source, player);
                            if (att > 0) {
                                if (trigger.player.hp <= trigger.num && player.identity == 'zhu' && trigger.player.identity == 'zhong') return false;
                                return true;
                            } else {
                                if (trigger.player.hp <= trigger.num && player.identity == 'zhu' && trigger.player.identity == 'zhong') return true;
                                return false;
                            }
                            return false;
                        });
                        ('step 1');
                        if (result.bool) {
                            var sourcex = trigger.source;
                            sourcex.line(player);
                            trigger.source = player;
                        }
                    },
                },
                //刀白凤(20220503从其他篇章移过来)
                tlbb_chunyuan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'phaseJieshuBegin' },
                    filter(event, player) {
                        //①其使用过三种类别的牌
                        //②其使用过牌指定过其他女性角色为唯一目标.
                        //③其获得过其他女性角色的牌或其他女性角色获得其区域的牌.
                        var bool1 = false,
                            bool2 = false,
                            bool3 = false,
                            num = 0;
                        if (!event.player.hasSex('male')) return false;
                        var types = [];
                        var History = event.player.getHistory('useCard');
                        for (var useCard of History) {
                            var type = get.type(useCard.card, 'trick');
                            types.add(type);
                            if (useCard.targets && useCard.targets.length == 1 && useCard.targets[0].hasSex('female')) bool2 = true;
                        }
                        if (types.length > 2) bool1 = true;
                        var gains = event.player.getHistory('gain');
                        for (var gain of gains) {
                            var evt = gain.parent;
                            if (evt.name == 'loseAsync' && evt.type != 'gain') return false;
                            if (
                                game.hasPlayer2(function(current) {
                                    if (current == event.player || !current.hasSex('female')) return false;
                                    var lose = gain.getl(current).cards2;
                                    for (var i of lose) {
                                        if (gain.cards.includes(i)) return true;
                                    }
                                    return false;
                                })
                            )
                                bool3 = true;
                        }
                        if (!bool3) {
                            if (
                                game.hasPlayer2(function(current) {
                                    if (current == event.player || !current.hasSex('female')) return false;
                                    var gains = current.getHistory('gain');
                                    for (var i of gains) {
                                        var evt = i.parent;
                                        if (evt.name == 'loseAsync' && evt.type != 'gain') continue;
                                        var lose = i.getl(event.player).cards2;
                                        for (var c of lose) {
                                            if (gain.cards.includes(c)) return true;
                                        }
                                    }
                                    return false;
                                })
                            )
                                bool3 = true;
                        }
                        if (bool1) num++;
                        if (bool2) num++;
                        if (bool3) num++;
                        event.set('tlbb_chunyuan_draw', num);
                        return num > 0;
                    },
                    prompt2(event, player) {
                        return '摸' + get.cnNumber(event.tlbb_chunyuan_draw) + '张牌？';
                    },
                    //frequent:true,
                    content() {
                        player.draw(trigger.tlbb_chunyuan_draw);
                    },
                },
                tlbb_chunyuan_old: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    init(player) {
                        player.storage.tlbb_chunyuan_count = [];
                    },
                    trigger: {
                        global: 'phaseJieshuBegin',
                    },
                    filter(event, player) {
                        if (player.hasSkill('tlbb_chunyuan_female')) return true;
                        if (player.hasSkill('tlbb_chunyuan_type')) return true;
                        if (player.hasSkill('tlbb_chunyuan_gain')) return true;
                        return false;
                    },
                    forced: true,
                    content() {
                        var num = 0;
                        if (player.hasSkill('tlbb_chunyuan_female')) num++;
                        if (player.hasSkill('tlbb_chunyuan_type')) num++;
                        if (player.hasSkill('tlbb_chunyuan_gain')) num++;
                        player.draw(num);
                    },
                    group: ['tlbb_chunyuan_count', 'tlbb_chunyuan_clear'],
                    subSkill: {
                        count: {
                            trigger: {
                                global: ['useCard', 'gainBegin'],
                            },
                            filter(event, player) {
                                if (event.name == 'useCard') {
                                    if (_status.currentPhase == event.player && event.player.hasSex('male')) {
                                        if (event.targets && event.targets.length == 1 && event.targets[0].hasSex('female')) {
                                            if (!player.hasSkill('tlbb_chunyuan_female')) return true;
                                        }
                                        if (!player.storage.tlbb_chunyuan_count.includes(get.type(event.card, 'trick'))) {
                                            if (!player.hasSkill('tlbb_chunyuan_type')) return true;
                                        }
                                    }
                                } else if (event.name == 'gain') {
                                    if (event.source && event.source.hasSex('female')) {
                                        if (_status.currentPhase == event.player && event.player.hasSex('male')) {
                                            if (!player.hasSkill('tlbb_chunyuan_gain')) return true;
                                        }
                                    } else if (event.source && event.source.hasSex('male')) {
                                        if (_status.currentPhase == event.source && event.player.hasSex('female')) {
                                            if (!player.hasSkill('tlbb_chunyuan_gain')) return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            silent: true,
                            async content(event, trigger, player) {
                                if (trigger.name == 'useCard') {
                                    if (_status.currentPhase == trigger.player && trigger.player.hasSex('male')) {
                                        if (trigger.targets && trigger.targets.length == 1 && trigger.targets[0].hasSex('female')) {
                                            player.addTempSkill('tlbb_chunyuan_female', 'phaseAfter');
                                        }
                                        if (!player.storage.tlbb_chunyuan_count.includes(get.type(trigger.card, 'trick'))) {
                                            player.storage.tlbb_chunyuan_count.push(get.type(trigger.card, 'trick'));
                                            if (player.storage.tlbb_chunyuan_count >= 3) {
                                                player.addTempSkill('tlbb_chunyuan_type', 'phaseAfter');
                                            }
                                        }
                                    }
                                } else if (trigger.name == 'gain') {
                                    if (trigger.source && trigger.source.hasSex('female')) {
                                        if (_status.currentPhase == trigger.player && trigger.player.hasSex('male')) {
                                            player.addTempSkill('tlbb_chunyuan_gain', 'phaseAfter');
                                        }
                                    } else if (trigger.source && trigger.source.hasSex('male')) {
                                        if (_status.currentPhase == trigger.source && trigger.player.hasSex('female')) {
                                            player.addTempSkill('tlbb_chunyuan_gain', 'phaseAfter');
                                        }
                                    }
                                }
                            },
                            popup: false,
                        },
                        clear: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            filter(event, player) {
                                return player.storage.tlbb_chunyuan_count && player.storage.tlbb_chunyuan_count.length;
                            },
                            forced: true,
                            popup: false,
                            silent: true,
                            content() {
                                player.storage.tlbb_chunyuan_count = [];
                            },
                        },
                        type: {
                            mark: true,
                            markimage: 'extension/金庸群侠传/image/icon/jychuanyuan1.jpg',
                            intro: {
                                content: '当前回合角色已使用三种类别的牌.',
                            },
                        },
                        gain: {
                            mark: true,
                            markimage: 'extension/金庸群侠传/image/icon/jychuanyuan2.jpg',
                            intro: {
                                content: '当前角色已获得其他女性角色的牌,或其他女性角色已获得当前回合角色的牌.',
                            },
                        },
                        female: {
                            mark: true,
                            markimage: 'extension/金庸群侠传/image/icon/jychuanyuan3.jpg',
                            intro: {
                                content: '当前回合角色已使用牌指定其他女性角色为唯一目标.',
                            },
                        },
                    },
                },
                tlbb_jimie: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    init(player) {
                        player.storage.tlbb_jimie = false;
                    },
                    intro: { content: 'limited' },
                    discard: false,
                    lose: false,
                    multiline: true,
                    markimage: 'extension/金庸群侠传/image/icon/jyjimie.jpg',
                    mark: true,
                    line: 'fire',
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player) {
                        var suits = [];
                        var cards = player.getCards('h');
                        if (Array.isArray(cards)) for (var i of cards) {
                            var suit = i.suit;
                            suits.add(suit);
                        }
                        if (suits.length < 2) return false;
                        if (player.storage.tlbb_jimie) return false;
                        return (
                            game.countPlayer(function(current) {
                                return current != player;
                            }) > 1
                        );
                    },
                    check(card) {
                        var player = _status.event.player;
                        var heart = 0,
                            diamond = 0,
                            club = 0,
                            spade = 0;
                        var cardss = player.getCards('h');
                        for (var i = 0; i < cardss.length; i++) {
                            var value = get.value(cardss[i]);
                            var suit = cardss[i].suit;
                            if (suit == 'heart') {
                                heart += value;
                            } else if (suit == 'diamond') {
                                diamond += value;
                            } else if (suit == 'club') {
                                club += value;
                            } else if (suit == 'spade') {
                                spade += value;
                            }
                        }
                        var suit2 = card.suit;
                        if (suit2 == 'heart') {
                            return heart;
                        }
                        if (suit2 == 'diamond') {
                            return diamond;
                        }
                        if (suit2 == 'club') {
                            return club;
                        }
                        if (suit2 == 'spade') {
                            return spade;
                        }
                        return -1;
                    },
                    filterCard(card, player) {
                        return true;
                    },
                    position: 'h',
                    filterTarget(card, player, target) {
                        return target.countCards('h') > 0 && target != player;
                    },
                    selectTarget(target) {
                        var player = _status.event.player;
                        if (ui.selected.cards.length) {
                            var car = ui.selected.cards;
                            var filter = car[0].suit;
                            var numm = 0;
                            var cards = player.getCards('h');
                            if (Array.isArray(cards)) for (var i of cards) {
                                var suit = i.suit;
                                if (suit != filter) {
                                    numm++;
                                }
                            }
                            return [1, numm];
                        } else return [100, 100];
                    },
                    complexTarget: true,
                    selectCard: 1,
                    multitarget: true,
                    content() {
                        'step 0';
                        player.storage.tlbb_jimie = true;
                        player.awakenSkill('tlbb_jimie');
                        player.showCards(cards[0]);
                        event.suit = cards[0].suit;
                        player.popup(event.suit);
                        game.log(player, '声明了', event.suit);
                        ('step 1');
                        var diss = [];
                        var dis = player.getCards('h');
                        for (var j = 0; j < dis.length; j++) {
                            var suit = dis[j].suit;
                            if (event.suit != suit) {
                                diss.push(dis[j]);
                            }
                        }
                        if (diss.length) player.discard(diss);
                        ('step 2');
                        for (var i = 0; i < targets.length; i++) {
                            var diss = [];
                            var dis = targets[i].getCards('h');
                            for (var j = 0; j < dis.length; j++) {
                                var suit = dis[j].suit;
                                if (event.suit != suit) {
                                    diss.push(dis[j]);
                                }
                            }
                            if (diss.length) targets[i].discard(diss);
                        }
                    },
                    ai: {
                        order: 1,
                        result: {
                            target(player, target) {
                                return -target.countCards('h');
                            },
                        },
                    },
                },
                //左子穆辛双清
                ///20220330霸天
                tlbb_fenting: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'phaseZhunbeiBegin' },
                    forced: true,
                    init(player, skill) {
                        if (!player.storage[skill]) player.storage[skill] = [];
                    },
                    filter(event, player) {
                        var cards = player.getExpansions('tlbb_fenting');
                        if (!cards.length) return true;
                        return false;
                    },
                    content() {
                        'step 0';
                        player.draw(3);
                        ('step 1');
                        var cards = player.getCards('h');
                        var num = cards.length;
                        if (num > 0) {
                            var num2 = Math.min(3, num);
                            if (num == num2) {
                                event._result = { bool: true, cards: cards };
                            } else {
                                player.chooseCard('将' + get.cnNumber(num2, true) + '张手牌置于侠客牌上作为<宗>', num2, true);
                            }
                        } else {
                            event.finish();
                            return;
                        }
                        ('step 2');
                        if (result && result.cards && result.cards.length) {
                            player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('tlbb_fenting');
                        }
                    },
                    intro: {
                        content: 'expansion',
                        markcount: 'expansion',
                    },
                    onremove(player, skill) {
                        var cards = player.getExpansions(skill);
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                    group: 'tlbb_fenting2',
                    ai: { combo: 'tlbb_doujian' },
                },
                tlbb_fenting2: {
                    audio: 'tlbb_fenting',
                    trigger: { player: 'phaseUseBegin' },
                    filter(event, player) {
                        var cards = player.getExpansions('tlbb_fenting');
                        if (!cards.length) return false;
                        return player.countCards('h') > 0;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var hs = player.getCards('h');
                        var hs2 = hs.slice(0);
                        var Storage = player.getExpansions('tlbb_fenting');
                        var Storage2 = Storage.slice(0);
                        var dialog = ['分庭:是否选择要交换的牌', '<div class="text center">你的<宗></div>', Storage, '<div class="text center">' + get.translation(player) + '的手牌</div>', hs];
                        hs2.sort(function(a, b) {
                            return get.value(a) - get.value(b);
                        });
                        Storage2.sort(function(a, b) {
                            return get.value(b) - get.value(a);
                        });
                        var aicheck = false;
                        if (get.value(Storage2[0]) > get.value(hs2[0])) aicheck = true;
                        player
                            .chooseButton(dialog, 2)
                            .set('filterButton', function(button) {
                                if (ui.selected.buttons.length) return get.position(button.link) != get.position(ui.selected.buttons[0].link);
                                return true;
                            })
                            .set('aicheck', aicheck)
                            .set('ai', function(button) {
                                if (!_status.event.aicheck) return -1;
                                var Storage2 = _status.event.Storage2;
                                var hs2 = _status.event.hs2;
                                var card = button.link;
                                if (Storage2.includes(card)) return get.value(card);
                                if (hs2.includes(card)) return 12 - get.value(card);
                                return 0;
                            })
                            .set('hs2', hs2)
                            .set('Storage2', Storage2);
                        ('step 1');
                        if (result.bool) {
                            var cards = result.links;
                            if (player.getCards('h').includes(cards[0])) cards.reverse();
                            player.addToExpansion(cards[1], player, 'giveAuto').gaintag.add('tlbb_fenting');
                            player.gain(cards[0], 'gain2');
                        }
                    },
                },
                tlbb_doujian: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    usable: 1,
                    filterTarget(card, player, target) {
                        return player.canCompare(target);
                    },
                    filter(event, player) {
                        var cards = player.getExpansions('tlbb_fenting');
                        if (!cards.length) return false;
                        if (!player.countCards('h')) return false;
                        return game.hasPlayer((target) => player.canCompare(target));
                    },
                    content() {
                        'step 0';
                        player.chooseToCompare(target);
                        ('step 1');
                        if (result.bool) {
                            var cards = player.getExpansions('tlbb_fenting');
                            player.draw(cards.length);
                            event.finish();
                            return;
                        }
                        ('step 2');
                        var cards = player.getExpansions('tlbb_fenting');
                        if (cards.length == 1) {
                            event._result = { bool: true, links: cards };
                        } else {
                            player.chooseCardButton('弃置一枚<宗>', cards, true);
                        }
                        ('step 3');
                        if (result.bool) {
                            player.loseToDiscardpile(result.links);
                        }
                    },
                    ai: {
                        combo: 'tlbb_fenting',
                        order: 12,
                        result: {
                            player(player) {
                                var num = player.countCards('h');
                                if (num > player.hp) return 1;
                                if (num == 1) return -1;
                                if (num == 2) return 0;
                                return -0.7;
                            },
                            target(player, target) {
                                var goon;
                                goon = player.hasCard(function(card) {
                                    return card.number > 10 && get.value(card) <= 7;
                                });
                                if (!goon) {
                                    goon = player.hasCard(function(card) {
                                        return (card.number >= 9 && get.value(card) <= 5) || get.value(card) <= 3;
                                    });
                                }
                                if (goon) return -2;
                                var num = target.countCards('h');
                                if (num == 1) return -1;
                                if (num == 2) return -0.7;
                                return -0.5;
                            },
                        },
                        threaten: 1.3,
                    },
                },
                tlbb_yubi: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { source: 'damageSource' },
                    filter(event, player) {
                        if (
                            !player.countCards('e', function(cardx) {
                                if (get.type(cardx) == 'equip' && get.subtype(cardx) == 'equip1') {
                                    var str = get.translation(cardx.name);
                                    return str.includes('剑');
                                }
                                return false;
                            })
                        )
                            return false;
                        return event.card && event.card.name == 'sha' && event.num > 0;
                    },
                    content() {
                        var cards = get.cards(2);
                        game.cardsGotoSpecial(cards);
                        player.markAuto('tlbb_fenting', cards);
                        player.$gain2(cards);
                        game.log(player, '将', cards, '作为<宗>置于侠客牌上');
                    },
                    ai: {
                        combo: 'tlbb_fenting',
                        effect: {
                            target(card, player, target) {
                                if (player == target && get.type(card) == 'equip' && get.subtype(card) == 'equip1' && !get.cardtag(card, 'gifts')) {
                                    var equip1 = target.getEquip(1);
                                    if (!equip1) return;
                                    if (equip1 && get.equipValue(equip1, target) <= 0) return 2;
                                    var str = get.translation(equip1.name);
                                    var str2 = get.translation(card.name);
                                    var bool1 = str.includes('剑');
                                    var bool2 = str2.includes('剑');
                                    if (bool1 && bool2) return;
                                    if (bool1 && !bool2) return 0;
                                    if (!bool1 && bool2) return 2;
                                }
                            },
                        },
                    },
                },
                tlbb_tashu: {
                    ai: { combo: 'tlbb_pudu' },
                    mode: ['identity'],
                    juexingji: true,
                    forced: true,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    content() {
                        'step 0';
                        player.awakenSkill(event.name);
                        player.storage[event.name] = true;
                        player.gainMaxHp();
                        ('step 1');
                        if (player.isDamaged()) player.recover();
                        ('step 2');
                        player
                            .chooseTarget(true, '令一名角色获得【雁门余字】', function(card, player, target) {
                                return true;
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(player, target);
                                if (att <= 0) return -1;
                                if (target.identity == 'zhu' && !target.hasSkill('tlbb_fuji')) {
                                    return att;
                                } else if (target.identity == 'zhong' && !target.hasSkill('tlbb_fulong')) {
                                    return att;
                                } else if (target.identity == 'fan' && !target.hasSkill('tlbb_huoyan')) {
                                    return att;
                                } else if (target.identity == 'nei' && !target.hasSkill('tlbb_yaodie')) {
                                    return att;
                                }
                                if (target == player) return 0.5;
                                return 0.2;
                            });
                        ('step 3');
                        if (result.bool) {
                            player.line(result.targets);
                            var card = game.createCard2('tlbb_yanmenyizi');
                            result.targets[0].gain('log', card, 'gain2');
                        }
                    },
                },
                tlbb_zaizhang: {
                    ai: { combo: 'tlbb_pudu' },
                    mode: ['identity'],
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'useCardToPlayered' },
                    filter(event, player) {
                        if (event.targets.length < 2) return false;
                        if (!player.hasMark('tlbb_pudu')) return false;
                        if (!event.targets.filter((target) => !event.excluded.includes(target)).length) return false;
                        return event.isFirstTarget;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var list = trigger.targets.filter((target) => !trigger.excluded.includes(target));
                        player
                            .chooseTarget(get.prompt2(event.name), [1, Math.min(3, list.length)], function(card, player, target) {
                                return _status.event.sourcex.includes(target);
                            })
                            .set('sourcex', list)
                            .set('ai', function(target) {
                                var player = _status.event.player;
                                return -get.effect(target, _status.event.card, player, player);
                            })
                            .set('card', trigger.card);
                        ('step 1');
                        if (result.bool) {
                            event.targets = result.targets;
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        var num = player.countMark('tlbb_pudu');
                        var num2 = Math.floor(Math.random() * 3 + 1);
                        if (num >= num2) {
                            trigger.parent.excluded.addArray(event.targets);
                            if (trigger.cards.length && !trigger.card.isCard) {
                                game.log(trigger.card, '(', trigger.cards, ')', '对', event.targets, '无效!');
                            } else {
                                game.log(trigger.card, '对', event.targets, '无效!');
                            }
                        }
                    },
                },
                tlbb_pudu_recover: {
                    trigger: { global: 'recoverEnd' },
                    forced: true,
                    audio: 'tlbb_pudu',
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter(event, player) {
                        if (!event.card) return false;
                        if (event.card.name != 'taoyuan') return false;
                        if (!event.card.tlbb_pudu) return false;
                        if (event.num < 1) return false;
                        if (!event.source) return false;
                        if (event.source != player) return false;
                        var evt = event.getParent('tlbb_pudu');
                        if (!evt || evt.player != player) return false;
                        return evt.targets && evt.targets.includes(event.player);
                    },
                    content() {
                        var evt = trigger.getParent('tlbb_pudu');
                        evt.targets.remove(trigger.player);
                        evt.recover++;
                    },
                },
                tlbb_pudu: {
                    ai: { combo: 'tlbb_tashu' },
                    mode: ['identity'],
                    marktext: '障',
                    intro: {
                        name: '普度',
                        name2: '障',
                        content: '当前有#个<障>',
                    },
                    audio: 'ext:金庸群侠传/peiyin:4',
                    trigger: { player: 'phaseUseBegin' },
                    forced: true,
                    content() {
                        'step 0';
                        if (!player.storage.tlbb_tashu) player.addMark('tlbb_pudu', 1);
                        if (!player.storage.tlbb_tashu && player.countMark('tlbb_pudu') >= 3 && player.hasSkill('tlbb_tashu')) {
                            player.useSkill('tlbb_tashu');
                        }
                        ('step 1');
                        if (player.storage.tlbb_tashu) {
                            event.goto(8);
                        }
                        ('step 2');
                        var targets = game.filterPlayer((target) => player.canUse({ name: 'taoyuan' }, target));
                        if (!targets.length) {
                            event.finish();
                            return;
                        }
                        var next = player.useCard({ name: 'taoyuan' }, targets);
                        next.card.tlbb_pudu = true;
                        event.targets = targets.slice(0);
                        event.nextUse = next;
                        event.recover = 0;
                        event.deEffect = 0;
                        player.addTempSkill('tlbb_pudu_recover');
                        ('step 3');
                        player.removeSkill('tlbb_pudu_recover');
                        for (var i of targets) {
                            if (i.isIn() && get.jy_deEffect(i)) {
                                var next = game.createEvent('tlbb_pudu_contentx');
                                next.target = i;
                                next.player = i;
                                next.setContent(lib.skill.tlbb_pudu.contentx);
                                event.deEffect++;
                            }
                        }
                        ('step 4');
                        if (event.recover > 0) player.draw(event.recover);
                        if (event.deEffect < 1) event.finish();
                        ('step 5');
                        event.deEffect--;
                        var equip = get.cardPile(function(cardx) {
                            return get.type(cardx) == 'equip' && player.canUse(cardx, player);
                        });
                        if (equip) {
                            player.useCard(equip, player);
                        } else {
                            player.chat('没有符合的牌');
                            game.log('牌堆里面已经没有符合的牌了!');
                            event.finish();
                        }
                        ('step 6');
                        if (event.deEffect > 0) event.goto(5);
                        ('step 7');
                        event.finish();
                        ('step 8');
                        var targets = game.filterPlayer((target) => player.canUse({ name: 'wanjian' }, target));
                        if (!targets.length) {
                            event.finish();
                            return;
                        }
                        var next = player.useCard({ name: 'wanjian' }, targets);
                        event.targets = targets.slice(0);
                        ('step 9');
                        event.targets = event.targets.filter(function(target) {
                            if (!target.isIn()) return false;
                            if (!target.isLinked()) return true;
                            if (!target.isTurnedOver()) return true;
                            if (
                                get.cardPile(function(card) {
                                    if (card.name == 'jydiy_yungongliaoshang') return false;
                                    if (get.type(card) != 'delay') return false;
                                    return target.canAddJudge({ name: card.name, cards: [card] });
                                })
                            )
                                return true;
                            if (target.countDisabledSlot() < 5) return true;
                            return false;
                        });
                        if (!event.targets.length) {
                            event._result = { bool: false };
                            return;
                        }
                        player
                            .chooseTarget(true, '令一名角色随机处于一项负面状态', function(card, player, target) {
                                return _status.event.list.includes(target);
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(player, target);
                                return -att;
                            })
                            .set('list', event.targets);
                        ('step 10');
                        if (result.bool) {
                            var next = game.createEvent('tlbb_pudu_contentxx');
                            player.line(result.targets);
                            next.player = result.targets[0];
                            next.setContent(lib.skill.tlbb_pudu.contentxx);
                        }
                    },
                    contentxx() {
                        'step 0';
                        var list = [];
                        if (!player.isLinked()) list.push('link');
                        if (!player.isTurnedOver()) list.push('turnOver');
                        if (
                            get.cardPile(function(card) {
                                if (card.name == 'jydiy_yungongliaoshang') return false;
                                if (get.type(card) != 'delay') return false;
                                return player.canAddJudge({ name: card.name, cards: [card] });
                            })
                        )
                            list.push('addJudge');
                        if (player.countDisabledSlot() < 5) list.push('disableEquip');
                        if (!list.length) {
                            event.finish();
                            return;
                        }
                        var name = list.randomGet();
                        if (name == 'link') {
                            player.link();
                        } else if (name == 'turnOver') {
                            player.turnOver();
                        } else if (name == 'addJudge') {
                            var card = get.cardPile(function(card) {
                                if (card.name == 'jydiy_yungongliaoshang') return false;
                                if (get.type(card) != 'delay') return false;
                                return player.canAddJudge({ name: card.name, cards: [card] });
                            });
                            player.addJudge(card);
                            player.$gain2(card);
                        } else if (name == 'disableEquip') {
                            var list2 = [];
                            if (!player.hasDisabledSlot('equip1')) list2.push('equip1');
                            if (!player.hasDisabledSlot('equip2')) list2.push('equip2');
                            if (!player.hasDisabledSlot('equip3')) list2.push('equip3');
                            if (!player.hasDisabledSlot('equip4')) list2.push('equip4');
                            if (!player.hasDisabledSlot('equip5')) list2.push('equip5');
                            var name2 = list2.randomGet();
                            player.disableEquip(name2);
                        }
                    },
                    contentx() {
                        'step 0';
                        var controls = [];
                        if (target.isLinked()) {
                            controls.push('解除横置');
                        }
                        if (target.isTurnedOver()) {
                            controls.push('解除翻面');
                        }
                        if (
                            target.countCards('j', function(card) {
                                return card.name != 'jydiy_yungongliaoshang';
                            })
                        ) {
                            controls.push('弃置负面判定牌');
                        }
                        if (target.countDisabledSlot()) {
                            controls.push('复原装备栏');
                        }
                        if (controls.length == 1) {
                            event._result = { control: controls[0] };
                        } else {
                            target.chooseControl(controls).ai = function() {
                                var num = 0;
                                var control = '解除横置';
                                var temp = target.countCards('j', function(card) {
                                    return card.name != 'jydiy_yungongliaoshang';
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
                        ('step 1');
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
                                target.getCards('j', function(card) {
                                    return card.name != 'jydiy_yungongliaoshang';
                                })
                            );
                        }
                    },
                },
                //耶律涅鲁古
                tlbb_xiaoqiang: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'useCardEnd' },
                    forced: true,
                    mark: true,
                    marktext: '墙',
                    intro: {
                        name: '祸起萧墙',
                        content(storage, player) {
                            var str = '';
                            var num1 = player.countMark('tlbb_xiaoqiang_from');
                            var num2 = player.countMark('tlbb_xiaoqiang_to');
                            var num3 = player.countMark('tlbb_xiaoqiang_att');
                            if (num1) str += '进攻距离:' + get.translation(num1) + '<br>';
                            if (num2) str += '防御距离:' + get.translation(num2) + '<br>';
                            if (num3) str += '攻击距离:' + get.translation(num3);
                            return str;
                        },
                    },
                    filter(event, player) {
                        if (get.type(event.card) != 'equip') return false;
                        if (!event.cards || event.cards.length != 1) return false;
                        var subtype = get.subtype(event.card);
                        if (player.hasDisabledSlot(subtype)) return false;
                        return player.getCards('e').includes(event.cards[0]);
                    },
                    content() {
                        'step 0';
                        event.card = trigger.cards[0];
                        if (get.subtype(event.card) == 'equip3' || get.subtype(event.card) == 'equip4') {
                            event.goto(1);
                        } else {
                            var skills = get.info(event.card).skills;
                            if (!skills) return;
                            skills = skills.slice(0);
                            for (var j of skills) {
                                player.addSkills(j);
                            }
                        }
                        ('step 1');
                        var num1 = 0; //进攻
                        var num2 = 0; //防御
                        var num3 = 0; //攻击
                        var info = get.info(event.card).distance;
                        if (!info) return;
                        if (info.globalFrom) {
                            num1 += -info.globalFrom;
                            player.addSkill('tlbb_xiaoqiang_from');
                            player.addMark('tlbb_xiaoqiang_from', num1, false);
                        }
                        if (info.globalTo) {
                            num2 += info.globalTo;
                            player.addSkill('tlbb_xiaoqiang_to');
                            player.addMark('tlbb_xiaoqiang_to', num2, false);
                        }
                        if (info.attackFrom) {
                            num3 += -info.attackFrom;
                            player.addSkill('tlbb_xiaoqiang_att');
                            //player.draw(num3);
                            player.addMark('tlbb_xiaoqiang_att', num3, false);
                        }
                        ('step 2');
                        var e = get.subtype(event.card);
                        player.disableEquip(e);
                        ('step 3');
                        player
                            .chooseTarget('是否将' + get.translation(event.card) + '交给一名其他武将？', function(card, player, target) {
                                return target != player;
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(player, target);
                                if (att <= 0) return -1;
                                if (target.canUse(event.card, target)) {
                                    var eff = get.effect(target, event.card, player, player);
                                    if (eff > 0) {
                                        if (!target.hasEmptySlot(get.subtype(event.card))) eff = eff / 3;
                                    }
                                    if (eff > 0) return eff;
                                }
                                return 1;
                            });
                        ('step 4');
                        if (result.bool) {
                            player.give(event.card, result.targets[0], true);
                            //result.targets[0].gain(event.card,"give",player);
                        }
                    },
                    ai: {
                        expose: 0.3,
                        threaten: 1.2,
                    },
                    subSkill: {
                        from: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - from.countMark('tlbb_xiaoqiang_from');
                                },
                            },
                        },
                        to: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + to.countMark('tlbb_xiaoqiang_to');
                                },
                            },
                        },
                        att: {
                            mod: {
                                attackRange(from, distance) {
                                    return distance + from.countMark('tlbb_xiaoqiang_att');
                                },
                            },
                        },
                    },
                },
                tlbb_qipan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'disableEquipEnd' },
                    filter(event, player) {
                        return player.countDisabledSlot() >= 3;
                    },
                    limited: true,
                    juexingji: true,
                    derivation: ['tlbb_jieshan'],
                    marktext: '叛',
                    intro: {
                        name: '起叛',
                        content: 'limited',
                    },
                    content() {
                        'step 0';
                        player.gainMaxHp();
                        ('step 1');
                        player.recover();
                        player.addSkills('tlbb_jieshan');
                        player.removeSkills('tlbb_xiaoqiang');
                        player.removeSkills('tlbb_qipan');
                        var list = ['tlbb_xiaoqiang_from', 'tlbb_xiaoqiang_to', 'tlbb_xiaoqiang_att'];
                        for (var i of list) {
                            if (player.hasSkill(i)) player.removeSkill(i);
                            if (player.hasMark(i)) player.removeMark(i, player.countMark(i));
                        }
                        ('step 2');
                        //if(!game.hasPlayer(target=>target!=player&&target.countGainableCards(player,'e'))){
                        //    event.finish();
                        //    return;
                        //}
                        player
                            .chooseTarget('选择至多3个目标获得装备区有牌的目标各一张装备牌', [1, 3], true, function(card, player, target) {
                                return target != player && target.countCards('e');
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(player, target);
                                if (att > 0) return -1;
                                var num = 1;
                                if (
                                    target.countGainableCards(player, 'e', function(equip) {
                                        var evalue = get.equipValue(equip, target);
                                        return evalue > 0;
                                    })
                                ) {
                                    num++;
                                }
                                return num;
                            });
                        ('step 3');
                        if (result.bool) {
                            var list = [];
                            for (var i = 0; i < result.targets.length; i++) {
                                var targets = result.targets[i];
                                if (targets.countGainableCards(player, 'e')) {
                                    player.gainPlayerCard(targets, 'e');
                                }
                                list.push(targets);
                            }
                            player.storage.tlbb_jieshan = list;
                        }
                    },
                },
                tlbb_jieshan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { source: 'damageBegin1' },
                    forced: true,
                    mark: true,
                    marktext: '禅',
                    intro: {
                        name: '劫禅',
                        content: '<font color=yellow>$</font>成为了<font color=yellow>起叛</font>的目标',
                    },
                    filter(event, player) {
                        if (!player.storage.tlbb_jieshan) return false;
                        if (!player.storage.tlbb_jieshan.includes(event.player)) return false;
                        return event.player != player;
                    },
                    content() {
                        if (player.countDisabledSlot() > 0) {
                            var next = player.chooseToEnable();
                            event.next.remove(next);
                            trigger.after.push(next);
                        } else {
                            trigger.num++;
                            player.line(trigger.player);
                        }
                    },
                    ai: {
                        effect: {
                            player(card, player, target, current, isLink) {
                                if (!target) return;
                                if (isLink) return;
                                if (player == target) return;
                                if (!get.tag(card, 'damage')) return;
                                if (player.countDisabledSlot() > 0) return;
                                if (!player.storage.tlbb_jieshan) return;
                                if (!player.storage.tlbb_jieshan.includes(target)) return;
                                if (
                                    target.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: card,
                                    })
                                )
                                    return;
                                return [1, 0, 1, -1.5];
                            },
                        },
                    },
                },
                jy_qihua_skill: {
                    cardSkill: true,
                    //silent:true,
                    log: false,
                    popname: true,
                    forced: true,
                    enable: 'chooseToUse',
                    viewAsFilter(player) {
                        if (
                            !game.hasPlayer(function(current) {
                                return current != player && current.hasSkill('tlbb_shihua');
                            })
                        )
                            return false;
                        if (!player.countCards('h', (card) => card.name == 'jy_qihua')) return false;
                        return player.countCards('h') > 1;
                    },
                    filterCard(card, player) {
                        return player.countCards('h', (cardx) => cardx != card && cardx.name == 'jy_qihua') > 0;
                    },
                    position: 'h',
                    viewAs: { name: 'tao' },
                    prompt: '奇花:将一张手牌当桃使用',
                    check(card) {
                        return 15 - get.value(card);
                    },
                    precontent() {
                        'step 0';
                        var targets = game.filterPlayer(function(current) {
                            return current != player && current.hasSkill('tlbb_shihua');
                        });
                        var cardx = event.result.cards[0];
                        player.chooseCardTarget({
                            position: 'h',
                            filterCard(card, player) {
                                return _status.event.cardx != card && card.name == 'jy_qihua';
                            },
                            filterTarget(card, player, target) {
                                return _status.event.targets.includes(target);
                            },
                            cardx: cardx,
                            targets: targets,
                            selectTarget: targets.length == 1 ? -1 : 1,
                            selectCard: 1,
                            prompt: (function() {
                                var str = '将一张情花牌交给' + get.translation(targets);
                                if (targets.length > 1) str += '中的一人';
                                return str;
                            })(),
                            forced: true,
                            ai1(card) {
                                return 10 - get.value(card);
                            },
                            ai2(target) {
                                return get.attitude(_status.event.player, target);
                            },
                        });
                        ('step 1');
                        if (result.bool) {
                            var target = result.targets[0];
                            //player.line(target,'green');
                            player.give(result.cards, target, true);
                            //target.gain(result.cards,player,'giveAuto');
                        }
                    },
                    ai: {
                        basic: {
                            order(card, player) {
                                return get.order({ name: 'tao' }, player) + 1;
                            },
                        },
                    },
                },
                tlbb_shihua: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'phaseBefore', player: 'enterGame' },
                    group: 'tlbb_shihua2',
                    forced: true,
                    filter(event, player) {
                        return event.name != 'phase' || game.phaseNumber == 0;
                    },
                    content() {
                        var cards = [game.createCard2('jy_qihua', 'club', 2), game.createCard2('jy_qihua', 'club', 3), game.createCard2('jy_qihua', 'club', 4), game.createCard2('jy_qihua', 'club', 5), game.createCard2('jy_qihua', 'club', 6), game.createCard2('jy_qihua', 'club', 7), game.createCard2('jy_qihua', 'club', 8), game.createCard2('jy_qihua', 'club', 9)];
                        game.log(player, '将', cards, '洗入了牌堆!');
                        while (cards.length) {
                            var num = get.rand(ui.cardPile.childElementCount);
                            var card = cards.pop();
                            card.fix();
                            ui.cardPile.insertBefore(card, ui.cardPile.childNodes[num]);
                        }
                        game.updateRoundNumber();
                    },
                },
                tlbb_shihua2: {
                    audio: 'tlbb_shihua',
                    trigger: { global: 'judge' },
                    forced: true,
                    filter(event, player) {
                        return event.player.judging[0].name == 'jy_qihua';
                    },
                    content() {
                        'step 0';
                        var str = '莳花:' + get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',请将其改为一种花色';
                        player
                            .chooseControl('spade', 'heart', 'diamond', 'club', 'cancel2')
                            .set('prompt', str)
                            .set('ai', function() {
                                var judging = _status.event.judging;
                                var trigger = _status.event.getTrigger();
                                var res1 = trigger.judge(judging);
                                var list = lib.suit.slice(0);
                                var attitude = get.attitude(player, trigger.player);
                                if (attitude == 0) return 0;
                                var getj = function(suit) {
                                    return trigger.judge({
                                        name: judging.name,
                                        nature: get.nature(judging),
                                        suit: suit,
                                        number: judging.number,
                                    });
                                };
                                list.sort(function(a, b) {
                                    return (getj(b) - getj(a)) * get.sgn(attitude);
                                });
                                return list[0];
                            })
                            .set('judging', trigger.player.judging[0]);
                        ('step 1');
                        if (result.control != 'cancel2') {
                            player.addExpose(0.25);
                            player.popup(result.control);
                            game.log(player, '将判定结果改为了', '#y' + get.translation(result.control + 2));
                            if (!trigger.fixedResult) trigger.fixedResult = {};
                            trigger.fixedResult.suit = result.control;
                            trigger.fixedResult.color = get.color({ suit: result.control });
                            next = game.createEvent('tlbb_shihua_after');
                            next.player = player;
                            next._trigger = trigger;
                            event.next.remove(next);
                            trigger.after.push(next);
                            next.setContent(function() {
                                var result = trigger.result;
                                if (trigger.judge2) {
                                    var judge2 = trigger.judge2(result);
                                    if (typeof judge2 == 'boolean') {
                                        //game.log('log'+judge2)
                                        if (judge2) {
                                            player.draw(2);
                                        } else {
                                            var num = trigger.player.countCards('he', function(card) {
                                                return lib.filter.cardDiscardable(card, trigger.player, event.name);
                                            });
                                            if (num > 0) {
                                                trigger.player.chooseToDiscard('he', true, Math.min(num, 2));
                                            }
                                        }
                                    }
                                }
                            });
                        }
                    },
                    ai: {
                        rejudge: true,
                        tag: { rejudge: 0.4 },
                        expose: 0.5,
                    },
                },
                tlbb_yihui: {
                    enable: 'phaseUse',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'damageEnd' },
                    forced: true,
                    filter(event, player) {
                        if (event.name != 'damage') return !player.hasSkill('tlbb_yihui_air');
                        return true;
                    },
                    content() {
                        var card = get.cardPile(function(card) {
                            return card.name == 'jy_qihua';
                        });
                        if (card) {
                            player.gain(card, 'gain2', 'log');
                        } else {
                            player.chat('没有符合的牌吗');
                            game.log('但是牌堆里已经没有', { name: 'jy_qihua' }, '了!');
                        }
                        if (trigger && trigger.name == 'damage') return;
                        player.addTempSkill('tlbb_yihui_air');
                    },
                    subSkill: { air: {} },
                    mod: {
                        cardname(card, player) {
                            if (card.name != 'jy_qihua') return;
                            var name;
                            var number = card.number;
                            switch (number) {
                                case 2:
                                    name = 'shan';
                                    break;
                                case 3:
                                    name = 'tao';
                                    break;
                                case 4:
                                    name = 'jiu';
                                    break;
                                case 5:
                                    name = 'shunshou';
                                    break;
                                case 6:
                                    name = 'wuzhong';
                                    break;
                                case 7:
                                    name = 'wanjian';
                                    break;
                                case 8:
                                    name = 'jydiy_feiyanyinsuo';
                                    break;
                                case 9:
                                    name = 'lebu';
                                    break;
                                default:
                                    return;
                            }
                            if (!lib.card[name]) return;
                            return name;
                        },
                    },
                    ai: {
                        order: 1,
                        result: { player: 1 },
                        skillTagFilter(player) {
                            if (!player.countCards('h', (card) => card.name == 'jy_qihua' && card.number == 2)) return false;
                        },
                        respondShan: true,
                    },
                },
                //天龙八部
                //崔百泉 设计 吃饱睡睡醒吃  20220308霸天
                tlbb_jizhu: {
                    ai: {
                        order: 1,
                        result: { player: 1 },
                        threaten: 1.55,
                    },
                    enable: 'phaseUse',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    usable: 1,
                    content() {
                        'step 0';
                        var cards = get.cards(5);
                        player.showCards(cards);
                        //game.cardsGotoOrdering(cards)
                        event.cards = cards;
                        event.useEnd = false;
                        ('step 1');
                        var use = event.cards.filter((card) => [1, 5, 10].includes(card.number) && player.hasUseTarget(card));
                        if (use.length > 1) {
                            var next = player.chooseCardButton('【激珠】请选择要使用的牌:', event.cards, true);
                            next.set('filterButton', function(button) {
                                return [1, 5, 10].includes(button.link.number) && _status.event.player.hasUseTarget(button.link);
                            });
                            next.set('ai', function(button) {
                                return _status.event.player.getUseValue(button.link);
                            });
                        } else if (use.length == 1) {
                            if (player.hasUseTarget(use[0])) {
                                event._result = { bool: true, links: use };
                            } else {
                                event.goto(4);
                            }
                        } else {
                            event.goto(4);
                        }
                        ('step 2');
                        if (result.bool) {
                            event._result = { bool: false };
                            event.using = result.links[0];
                            player.chooseUseTarget(event.using, false, true);
                        } else {
                            event.goto(4);
                        }
                        ('step 3');
                        if (result && result.bool) {
                            event.useEnd = true;
                            event.cards.remove(event.using);
                            if (event.cards.length) event.goto(1);
                        }
                        ('step 4');
                        if (!event.useEnd) {
                            player.gain(event.cards, 'gain2', 'log');
                            event.finish();
                            return;
                        } else if (event.cards.length > 1) {
                            player.chooseButton(['请按顺序将卡牌置于牌堆顶(先选择的在上)', event.cards], true, event.cards.length);
                        } else if (event.cards.length == 1) {
                            event._result = { bool: true, links: event.cards };
                        } else event.finish();
                        ('step 5');
                        if (result.bool) {
                            var cardsx = result.links;
                            while (cardsx.length) {
                                var card = cardsx.pop();
                                card.fix();
                                ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                            }
                        }
                    },
                },
                tlbb_qianzhu: {
                    mod: {
                        aiOrder(player, card, num) {
                            if (get.itemtype(card) == 'card' && [1, 5, 10].includes(card.number)) {
                                var enable = player.hasValueTarget(card);
                                if (!enable) return num + 10;
                                return num;
                            } else return num + 1;
                        },
                        aiValue(player, card, num) {
                            if ([1, 5, 10].includes(card.number)) {
                                var enable = player.hasValueTarget(card);
                                if (!enable) return num + 3;
                                return -1;
                            } else return num;
                        },
                        aiUseful(player, card, num) {
                            if ([1, 5, 10].includes(card.number)) {
                                var enable = player.hasValueTarget(card);
                                if (!enable) return num + 3;
                                return -1;
                            } else return num;
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'loseAfter' },
                    filter(event, player) {
                        if (event.type != 'discard') return false;
                        if (!event.hs || !event.hs.length) return false;
                        var use = event.hs.filter((card) => [1, 5, 10].includes(card.number) && get.position(card, true) == 'd');
                        return use.length;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        event.cards = trigger.hs.filter((card) => [1, 5, 10].includes(card.number) && get.position(card, true) == 'd');
                        ('step 1');
                        var use = event.cards.filter((card) => player.hasUseTarget(card));
                        event.forced = true;
                        if (use.length > 1) {
                            var next = player.chooseCardButton('【嵌珠】请选择要使用的牌:', event.cards);
                            next.set('filterButton', function(button) {
                                return _status.event.player.hasUseTarget(button.link);
                            });
                            next.set('ai', function(button) {
                                return _status.event.player.getUseValue(button.link);
                            });
                        } else if (use.length == 1) {
                            if (player.hasUseTarget(use[0])) {
                                event._result = { bool: true, links: use };
                                event.forced = false;
                            } else {
                                event.goto(4);
                            }
                        } else {
                            event.goto(4);
                        }
                        ('step 2');
                        if (result.bool) {
                            event._result = { bool: false };
                            event.using = result.links[0];
                            player.chooseUseTarget(event.using, false, event.forced);
                        } else {
                            event.goto(4);
                        }
                        ('step 3');
                        if (result && result.bool) {
                            event.cards.remove(event.using);
                            if (event.cards.length) event.goto(1);
                        }
                        ('step 4');
                        if (event.cards.length) player.loseHp(event.cards.length);
                    },
                },
                //达摩
                jue_xisuidm: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                },
                jue_yijing: {
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    position: 'h',
                    complexCard: true,
                    complexSelect: true,
                    filterCard(card, player) {
                        if (
                            !player.countCards('h', function(card2) {
                                if (ui.selected.cards.includes(card2)) return false;
                                return card.name == card2.name && card != card2;
                            })
                        )
                            return false;
                        return true;
                    },
                    selectCard() {
                        var player = _status.event.player;
                        var names = [];
                        player.countCards('h', function(card2) {
                            names.add(card2.name);
                        });
                        var num = player.countCards('h') - names.length;
                        return num;
                    },
                    filter(event, player) {
                        return player.countCards('h', function(card) {
                            return player.countCards('h', function(card2) {
                                return card.name == card2.name && card != card2;
                            });
                        });
                    },
                    check(card) {
                        return 10 - get.value(card);
                    },
                    content() {
                        'step 0';
                        event.count = cards.length;
                        event.names = [];
                        player.countCards('h', function(card2) {
                            event.names.add(card2.name);
                        });
                        ('step 1');
                        var list = [];
                        while (event.count > 0) {
                            event.count--;
                            var card = get.cardPile(function(cardx) {
                                return !event.names.includes(cardx.name);
                            });
                            if (card) {
                                list.push(card);
                                event.names.push(card.name);
                            } else break;
                        }
                        if (list.length) {
                            //player.$gain2(list);
                            player.gain(list, 'log', 'gain2');
                        } else {
                            game.log('没有符合要求的牌!');
                        }
                    },
                },
                tlbb_qiaozhuang: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    forced: true,
                    trigger: {
                        player: ['logSkillBegin', 'useSkillBegin'],
                    },
                    popup: false,
                    say: {
                        ywhy_kuanghuo: '花言巧语惑人心,唇枪舌剑抵万军.',
                        tlbb_xianglong: '英雄但有降龙志,虎落平阳犬难欺!',
                        tlbb_yanbing: '怎教白骨攒孤冢,尽为王侯觅战功？',
                        yttl_huitian: '在世华佗薛神医,起死回生阎王敌.',
                        tlbb_yixing: '星辰轮转天地变,山河震撼日月移.',
                        tlbb_gouxian: '画虎画皮难画骨,知人知面不知心.',
                        tlbb_lanqing: '情深不寿,慧极必伤.',
                        yttl_feiding: '梁上君子入佛门,清净宝地染俗尘.',
                    },
                    init(player, skill) {
                        //player.removeAdditionalSkills('tlbb_qiaozhuang');
                        if (!player.storage.tlbb_qiaozhuang) {
                            var skills = ['ywhy_kuanghuo', 'tlbb_xianglong', 'tlbb_yanbing', 'yttl_huitian', 'tlbb_yixing', 'yttl_feiding', 'tlbb_gouxian', 'tlbb_lanqing'];
                            // var skills=lib.skill.tlbb_qiaozhuang.derivation;
                            var list = [];
                            for (var i of skills) {
                                if (!player.hasSkill(i)) list.push(i);
                            }
                            player.storage.tlbb_qiaozhuang = list;
                        }
                        if (player.storage.tlbb_qiaozhuang.length) player.addAdditionalSkills('tlbb_qiaozhuang', player.storage.tlbb_qiaozhuang, true);
                    },
                    filter(event, player, name) {
                        if (player.storage.tlbb_qiaozhuang2) return false;
                        if (!player.storage.tlbb_qiaozhuang.length) return false;
                        return player.storage.tlbb_qiaozhuang.includes(event.skill);
                    },
                    content() {
                        var skillName = trigger.skill;
                        player.storage.tlbb_qiaozhuang.remove(skillName);
                        if (lib.skill.tlbb_qiaozhuang.say[skillName]) player.say(lib.skill.tlbb_qiaozhuang.say[skillName]);
                        if (player.storage.tlbb_qiaozhuang.length) {
                            player.removeAdditionalSkills('tlbb_qiaozhuang', skillName);
                        } else {
                            player.removeAdditionalSkills('tlbb_qiaozhuang');
                            player.awakenSkill('tlbb_qiaozhuang');
                            player.storage.tlbb_qiaozhuang2 = true;
                        }
                    },
                },
                tlbb_qzkanghui: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                },
                tlbb_cizhu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'tlbb_qiaozhuangAfter' },
                    forced: true,
                    derivation: ['tlbb_kanghui', 'tlbb_guhong'],
                    filter(event, player) {
                        return player.storage.tlbb_qiaozhuang2 && player.storage.tlbb_qiaozhuang2 == true;
                    },
                    content() {
                        'step 0';
                        //game.playJY(['tlbb_cizhu1','tlbb_cizhu2'].randomGet());
                        player.awakenSkill('tlbb_cizhu');
                        player.storage.tlbb_cizhu = true;
                        player.say(['阿朱!阿朱!原来是你!', '阿朱!你何苦如此!'].randomGet());
                        player.loseMaxHp();
                        player.recover();
                        player.sex = 'male';
                        ('step 1');
                        player.addSkills('tlbb_kanghui');
                        player.addSkills('tlbb_guhong');
                        ('step 2');
                        //var list=lib.group.slice(0);
                        var list = lib.jy_changeSkill ? ['jy_song', 'jy_ming', 'jy_yuan', 'jy_qing', 'jy_lie', 'jy_tang', 'jy_qin'] : ['wei', 'shu', 'wu', 'qun', 'key', 'jin'];
                        player
                            .chooseControl(list, true)
                            .set('prompt', '请选择你的势力')
                            .set('ai', function() {
                                var count = [];
                                for (var i = 0; i < list.length; i++) {
                                    count[list[i]] = game.countPlayer(function(current) {
                                        return current.group == list[i] && current != player;
                                    });
                                }
                                var minCount = 1000;
                                var minCountGroup = '';
                                for (var key in count) {
                                    if (count[key] < minCount) {
                                        minCountGroup = key;
                                        minCount = count[key];
                                    }
                                }
                                return minCountGroup;
                            });
                        ('step 3');
                        if (result.control) {
                            player.changeGroup(result.control);
                        }
                    },
                },
                tlbb_guhong: {
                    trigger: { player: 'useCard1' },
                    audio: 'ext:金庸群侠传/peiyin:3',
                    logTarget(event, player) {
                        return game.filterPlayer(function(current) {
                            return player.canUse(event.card, current) && !event.targets.includes(current);
                        });
                    },
                    check(event, player) {
                        var targets = lib.skill.tlbb_guhong.logTarget(event, player);
                        var num = 0;
                        for (var i = 0; i < targets.length; i++) {
                            var target = targets[i];
                            num += get.effect(target, event.card, player, player);
                        }
                        return num > 0;
                    },
                    filter(event, player) {
                        var type = get.type(event.card);
                        if (type != 'trick' && type != 'basic') return false;
                        if (!event.targets || !event.targets.length) return false;
                        var info = get.info(event.card);
                        if (info.multitarget) return false;
                        if (info.allowMultiple == false) return false;
                        if (
                            game.hasPlayer(function(current) {
                                return current != player && current.group == player.group;
                            })
                        )
                            return false;
                        return game.hasPlayer(function(current) {
                            return player.canUse(event.card, current) && !event.targets.includes(current);
                        });
                    },
                    content() {
                        var targets = lib.skill.tlbb_guhong.logTarget(trigger, player);
                        trigger.targets.addArray(targets);
                    },
                },
                tlbb_kunlong: {
                    group: ['tlbb_kunlong_die'],
                    subSkill: {
                        die: {
                            audio: 'tlbb_kunlong',
                            trigger: { player: 'die' },
                            forced: true,
                            forceDie: true,
                            popup: false,
                            content() {
                                player.setIdentity = lib.element.player.setIdentity;
                                player.setIdentity();
                                player.removeSkill('tlbb_kunlong_damage');
                            },
                        },
                        damage: {
                            audio: 'tlbb_kunlong',
                            trigger: {
                                source: 'damageBefore',
                                player: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.source) return false;
                                if (event.source == event.player) return false;
                                return event.source == game.zhu || event.player == game.zhu;
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current, isLink) {
                                        if (!target) return;
                                        if (isLink) return;
                                        if (player == target) return;
                                        if (player != game.zhu && target != game.zhu) return;
                                        if (!get.tag(card, 'damage')) return;
                                        return 'zerotarget';
                                    },
                                    player(card, player, target, current, isLink) {
                                        if (!target) return;
                                        if (isLink) return;
                                        if (player == target) return;
                                        if (player != game.zhu && target != game.zhu) return;
                                        if (!get.tag(card, 'damage')) return;
                                        return 'zerotarget';
                                    },
                                },
                            },
                        },
                    },
                    mode: ['identity'],
                    forced: true,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'gameDrawAfter',
                    },
                    filter(event, player) {
                        return player != game.zhu && game.players.length > 2;
                    },
                    content() {
                        'step 0';
                        player.setIdentity('cai');
                        player.setIdentity = function() { };
                        event.current = player.next;
                        event.list = [];
                        for (var i of game.players) {
                            if (i.identity != 'zhu') event.list.push(i.identity);
                        }
                        //game.log(event.list);
                        ('step 1');
                        var id = event.list.randomGet();
                        if (event.current != player && event.current != game.zhu) {
                            event.current.setIdentity('cai');
                            event.current.identity = id;
                            event.list.remove(id);
                            event.current.update();
                        } else if (event.current == player) {
                            player.identity = id;
                            event.list.remove(id);
                            player.addSkill('tlbb_kunlong_damage');
                            player.update();
                        }
                        ('step 2');
                        event.current = event.current.next;
                        if (event.current == player.next) {
                            game.me.setIdentity();
                            event.finish();
                            return;
                        }
                        event.goto(1);
                    },
                    ai: {
                        order: 2,
                        result: {
                            player: 1,
                        },
                    },
                },
                tlbb_zhuixiong: {
                    group: ['tlbb_zhuixiong_die', 'tlbb_zhuixiong_use'],
                    subSkill: {
                        die: {
                            audio: 'ext:金庸群侠传/peiyin:2',
                            derivation: ['tlbb_kanglong'],
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isDead() && player.storage.tlbb_zhuixiong == event.player;
                            },
                            content() {
                                if (trigger.player.identity != 'nei') {
                                    player.loseMaxHp(1);
                                    if (!player.storage.tlbb_kanglong) {
                                        player.storage.tlbb_kanglong = 0;
                                    }
                                    //else{
                                    player.storage.tlbb_kanglong += 1;
                                    //}
                                    player.addSkills('tlbb_kanglong');
                                    var value = false;
                                    for (var i of game.players) {
                                        if (i.identity == 'nei') value = true;
                                    }
                                    if (value) {
                                        var next = game.createEvent('tlbb_zhuixiong', null, trigger);
                                        next.forceDie = true;
                                        next.player = player;
                                        next.setContent(lib.skill.tlbb_zhuixiong.content);
                                    }
                                }
                            },
                        },
                        use: {
                            audio: 'tlbb_zhuixiong',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            logTarget: 'target',
                            filter(event, player) {
                                return player.storage.tlbb_zhuixiong == event.target;
                            },
                            content() {
                                //game.playJY(['tlbb_zhuixiong1','tlbb_zhuixiong2'].randomGet());
                                player.draw();
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'roundStart',
                    },
                    mode: ['identity'],
                    forced: true,
                    filter(event, player) {
                        return game.roundNumber == 1 && game.players.length > 2;
                    },
                    content() {
                        'step 0';
                        player.chooseTarget(true, function(a, b, c) {
                            return c != game.zhu && b != c;
                        }).ai = function(target) {
                            var num2 = [0.5, -0.5].randomGet();
                            var num = Math.random();
                            return target.identity == 'nei' ? num + num2 : num;
                        };
                        ('step 1');
                        if (result.targets.length) {
                            var target = result.targets[0];
                            player.storage.tlbb_zhuixiong = target;
                            game.log(player, '指定了', target, '为内奸');
                        }
                    },
                },
                tlbb_kanglong: {
                    mark: true,
                    //marktext2:'龙',
                    markimage: 'extension/金庸群侠传/image/icon/jy_avatar_kanglong.jpg',
                    //marktext:"<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jy_avatar_kanglong.jpg>",
                    intro: {
                        content(storage, player) {
                            return '你已误认' + player.storage.tlbb_kanglong + '名角色.';
                        },
                    },
                    check(event, player) {
                        player.storage._tlbb_kanglong = true;
                        const count = get.damageEffect(event.player, player, player, event.nature);
                        delete player.storage._tlbb_kanglong;
                        return count <= 0;
                    },
                    init(player) {
                        if (!player.storage.tlbb_kanglong) {
                            player.storage.tlbb_kanglong = 0;
                        }
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        source: 'damageBegin',
                    },
                    content() {
                        player.draw(player.storage.tlbb_kanglong);
                        trigger.cancel();
                    },
                    ai: {
                        effect: {
                            player(card, player, target, current, isLink) {
                                if (!target) return;
                                if (isLink) return;
                                if (!get.tag(card, 'damage')) return;
                                if (player.storage._tlbb_kanglong) return;
                                player.storage._tlbb_kanglong = true;
                                const count = get.effect(target, card, player);
                                delete player.storage._tlbb_kanglong;
                                if (count <= 0) return [1, player.storage.tlbb_kanglong];
                            },
                        },
                    },
                },
                tlbb_suyuan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    derivation: ['tlbb_fulong'],
                    trigger: {
                        global: ['dieAfter', 'gameStart'],
                    },
                    mode: ['identity'],
                    forced: true,
                    juexingji: true,
                    filter(event, player, name) {
                        return (name == 'dieAfter' && event.player && event.player.identity == 'nei') || game.players.length == 2;
                    },
                    content() {
                        player.setIdentity = lib.element.player.setIdentity;
                        player.removeSkill('tlbb_kunlong_damage');
                        player.removeSkills('tlbb_zhuixiong');
                        player.setIdentity();
                        player.addSkills('tlbb_fulong');
                        player.awakenSkill('tlbb_suyuan');
                    },
                },
                tlbb_fulong: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: ['phaseUseAfter'],
                    },
                    mode: ['identity'],
                    forced: true,
                    filter(event, player, name) {
                        return player.getHistory('sourceDamage').length == 0 && player.countCards('he') >= 2;
                    },
                    content() {
                        'step 0';
                        player.chooseCardTarget({
                            position: 'he',
                            filterCard: lib.filter.cardDiscardable,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectCard: 2,
                            complexCard: true,
                            complexSelect: true,
                            ai1(card) {
                                return 9 - get.value(card);
                            },
                            ai2(target) {
                                var att = get.attitude(player, target);
                                if (target.hasSkillTag('noturn')) return 0;
                                if (att > 0 && target.isTurnedOver()) return 10;
                                if (att < 0 && !target.isTurnedOver()) return 5;
                                return 0;
                            },
                            prompt: get.prompt2('tlbb_fulong'),
                        });
                        ('step 1');
                        if (result.bool) {
                            var target = result.targets[0];
                            target.turnOver();
                            player.discard(result.cards);
                        }
                    },
                },
                tlbb_shuming: {
                    trigger: {
                        global: 'dieBefore',
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    mark: true,
                    //marktext2:'命',
                    markimage: 'extension/金庸群侠传/image/icon/jyshuming.jpg',
                    //marktext:"<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jyshuming.jpg>",
                    limited: true,
                    init(player) {
                        player.storage.tlbb_shuming = false;
                    },
                    check(event, player) {
                        return get.attitude(player, event.player) > 0;
                    },
                    logTarget: 'player',
                    filter(event, player) {
                        if (player.storage.tlbb_shuming) return false;
                        //if(!event.player.isDying()) return false;
                        return event.player != player;
                    },
                    content() {
                        'step 0';
                        var num = Math.min(trigger.player.maxHp - trigger.player.hp, 3);
                        if (num > 0) trigger.player.recover(num);
                        player.storage.tlbb_shuming = true;
                        player.awakenSkill('tlbb_shuming');
                        trigger.cancel();
                        ('step 1');
                        var list = [];
                        var skills = trigger.player.skills.slice(0);
                        for (var j = 0; j < skills.length; j++) {
                            var info = lib.skill[skills[j]];
                            if (!player.skills.includes(skills[j]) && !info.sub && !info.unique && !info.forced && !info.limited && !info.juexingji && !info.charlotte && !info.zhuSkill) {
                                list.push(skills[j]);
                            }
                        }
                        if (list.length) {
                            if (list.length == 1) {
                                event._result = { bool: true, control: list[0] };
                            } else {
                                player.chooseControl(list).set('prompt', '选择移除' + get.translation(trigger.player) + '的一项技能并获得之');
                            }
                        }
                        ('step 2');
                        if (result && result.control) {
                            player.addSkills(result.control);
                            trigger.player.removeSkills(result.control);
                            player.loseMaxHp();
                        }
                    },
                    intro: {
                        content: 'limited',
                    },
                },
                tlbb_bihuo: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'damageBegin4',
                    },
                    check(event, player) {
                        const count = get.damageEffect(event.player, event.source || event.player, player, event.nature);
                        return count <= 0;
                    },
                    logTarget: 'player',
                    filter(event, player) {
                        if (event.source && event.source == _status.currentPhase) return false;
                        return event.player.countGainableCards(player, 'he');
                    },
                    content() {
                        trigger.cancel();
                        player.gainPlayerCard('he', trigger.player, true);
                    },
                    ai: {
                        threaten: 3,
                    },
                },
                tlbb_qixing: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseZhunbeiBegin',
                    },
                    forced: true,
                    filter(event, player) {
                        if (!player.countCards('hej')) return false;
                        return game.hasPlayer(function(current) {
                            return (
                                current != player &&
                                current.countCards('e', function(cardx) {
                                    return get.subtype(cardx) == 'equip5';
                                }) &&
                                player.countGainableCards(current, 'hej') > 0
                            );
                        });
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('tlbb_qixing'), function(card, player, target) {
                                return (
                                    target != player &&
                                    target.countCards('e', function(cardx) {
                                        return get.subtype(cardx) == 'equip5';
                                    }) &&
                                    player.countGainableCards(target, 'hej') > 0
                                );
                            })
                            .set('ai', function(target) {
                                return get.effect(
                                    target,
                                    {
                                        name: 'shunshou_copy',
                                    },
                                    player,
                                    player
                                );
                            });
                        ('step 1');
                        if (result.bool) {
                            event.target = result.targets[0];
                            var next = result.targets[0].chooseCard('he', '是否选择一张宝物交给' + get.translation(player) + '？你选择其获得' + get.translation(player) + '区域的一张牌');
                            next.set('filterCard', function(card, player) {
                                return get.subtype(card) == 'equip5';
                            });
                            next.set('ai', function(card) {
                                return get.effect(
                                    player,
                                    {
                                        name: 'shunshou_copy',
                                    },
                                    event.target,
                                    event.target
                                );
                            });
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.bool) {
                            //player.gain(result.cards)
                            event.cards = result.cards;
                            //event.target.lose(result.cards,ui.special);
                            event.target.gainPlayerCard('hej', player, true);
                        } else {
                            event.target.addTempSkill('baiban');
                            event.finish();
                            return;
                        }
                        ('step 3');
                        event.target.give(event.cards, player, true);
                        //player.gain(event.cards,event.target,'log','give');
                    },
                },
                tlbb_jieduan: {
                    audio: 'ext:金庸群侠传/peiyin:3',
                    enable: 'chooseToUse',
                    filterCard(card, player) {
                        return get.color(card) == 'black';
                    },
                    position: 'hs',
                    viewAs: { name: 'jydiy_zouhuorumo' },
                    viewAsFilter(player) {
                        if (!player.countCards('hs', { color: 'black' })) return false;
                        return true;
                    },
                    prompt: '将一张黑色牌当【走火入魔】使用',
                    check(card) {
                        return 4 - get.value(card);
                    },
                },
                tlbb_tanchen: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    //marktext2:'贪',
                    markimage: 'extension/金庸群侠传/image/icon/jy_avatar_tanchen.jpg',
                    //marktext:"<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jy_avatar_tanchen.jpg>",
                    intro: {
                        name: '贪嗔',
                        content: '你的宝物栏已增加了#个.',
                    },
                    group: ['tlbb_tanchen_use'],
                    subSkill: {
                        use: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('tlbb_tanchen') < 2;
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp(1);
                                ('step 1');
                                player.addMark('tlbb_tanchen', 1);
                                player.expandEquip('equip5');
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                },
                                result: {
                                    player(player) {
                                        if (player.hp >= player.maxHp) return 0;
                                        if (player.countCards('h', 'tao')) return 0;
                                        if (player.countCards('he', { subtype: 'equip5' }) > 1) {
                                            return 1;
                                        }
                                        //if(player.countCards('e',{subtype:'equip5'})>player.countMark('tlbb_tanchen')&&player.countCards('h',{subtype:'equip5'})){
                                        //return 1;
                                        //}
                                        return 0;
                                    },
                                },
                            },
                        },
                    },
                },
                //新游坦之---20220224--霸天
                //限定技.出牌阶段,你选择一名其他角色.每当其受到伤害时,你代替其承受此伤害,令其获得至多两张毒药牌,你获得至多两张秘籍牌.
                tlbb_guiyi: {
                    subSkill: {
                        target: {
                            trigger: {
                                global: 'damageBefore',
                            },
                            _priority: -20,
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (event.num <= 0) return false;
                                return player.storage.tlbb_guiyi_target && player.storage.tlbb_guiyi_target == event.player;
                            },
                            content() {
                                'step 0';
                                game.playJY(['tlbb_guiyi1', 'tlbb_guiyi2'].randomGet());
                                var gain = get.randomCards(2, function(card) {
                                    return get.type(card) == 'basic' && get.subtype(card) == 'jy_duyao';
                                });
                                if (gain.length) trigger.player.gain(gain, 'log', 'gain2');
                                ('step 1');
                                var gain = get.randomCards(2, function(card) {
                                    return lib.jy_mijiList.includes(card.name);
                                });
                                if (gain.length) player.gain(gain, 'log', 'gain2');
                                trigger.player = player;
                            },
                        },
                    },
                    init(player) {
                        player.storage.tlbb_guiyi = false;
                    },
                    intro: {
                        content: 'limited',
                    },
                    markimage: 'extension/金庸群侠传/image/icon/jyguiyi.jpg',
                    mark: true,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    filter(event, player) {
                        return !player.storage.tlbb_guiyi;
                    },
                    content() {
                        'step 0';
                        player.storage.tlbb_guiyi = true;
                        player.storage.tlbb_guiyi_target = target;
                        player.addSkill('tlbb_guiyi_target');
                        player.awakenSkill('tlbb_guiyi');
                        player.markSkillCharacter('tlbb_guiyi_target', target, '鬼役', '<span style="color:gold">' + get.translation(target) + '</span>受到伤害时,你代替其承受此伤害.');
                        // 'step 1'
                        // var gain=get.randomCards(2,function(card){
                        //     return get.type(card)=='basic'&&get.subtype(card)=='jy_duyao';
                        // });
                        // if(gain.length) target.gain(gain,'log','gain2');
                        // 'step 2'
                        // var gain=get.randomCards(2,function(card){
                        //     return lib.jy_mijiList.includes(card.name);
                        // });
                        // if(gain.length) player.gain(gain,'log','gain2');
                    },
                    ai: {
                        order: 9,
                        result: {
                            target: 1,
                        },
                    },
                },
                tlbb_tuotai2: {},
                tlbb_tuotai: {
                    marktext: '胎',
                    intro: {
                        content(storage, player, skill) {
                            var str = '无';
                            if (storage && storage.length) str = '已经声明了' + get.translation(storage);
                            return str;
                        },
                    },
                    init(player, skill) {
                        if (!player.storage[skill]) player.storage[skill] = [];
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'dying',
                    },
                    forced: true,
                    filter(event, player) {
                        return player.countMark('tlbb_tuotai2') < 4;
                    },
                    content() {
                        'step 0';
                        player.loseMaxHp();
                        player.addMark('tlbb_tuotai2', 1);
                        ('step 1');
                        if (player.hp < 1) player.recover(1 - player.hp);
                        ('step 2');
                        var suits = ['club', 'spade', 'diamond', 'heart'];
                        var list = player.storage[event.name];
                        for (var i of list) {
                            suits.remove(i);
                        }
                        if (suits.length > 1) {
                            player
                                .chooseControl(suits, function(event, player) {
                                    return suits[0];
                                })
                                .set('prompt', '脱胎:请选择一个花色');
                        } else if (suits.length == 1) {
                            event._result = { control: suits[0] };
                        } else event.finish();
                        ('step 3');
                        player.addSkill('tlbb_tuotai_gain');
                        player.markAuto(event.name, [result.control]);
                        game.log(player, '选择了' + get.translation(result.control));
                        player.popup(result.control);
                    },
                },
                tlbb_tuotai_gain: {
                    audio: 'tlbb_tuotai',
                    trigger: {
                        player: 'loseEnd',
                    },
                    nopop: true,
                    forced: true,
                    filter(event, player) {
                        if (!event.hs || !event.hs.length) return false;
                        if (!player.storage.tlbb_tuotai || !player.storage.tlbb_tuotai.length) return false;
                        for (var i of event.hs) {
                            var suit = i.suit;
                            if (!player.countCards('h', { suit: suit }) && player.storage.tlbb_tuotai.includes(suit)) return true;
                        }
                        return false;
                    },
                    content() {
                        var suits = [];
                        for (var i of trigger.hs) {
                            var suit = i.suit;
                            if (!player.countCards('h', { suit: suit }) && player.storage.tlbb_tuotai.includes(suit)) suits.add(suit);
                        }
                        var gains = [];
                        if (suits.includes('heart')) {
                            var heart = get.randomCard(function(cardx) {
                                return cardx.suit == 'heart';
                            });
                            if (heart) {
                                gains.push(heart);
                            } else {
                                game.log('牌堆没有', '♥️️️', '牌了!');
                            }
                        }
                        if (suits.includes('diamond')) {
                            var diamond = get.randomCard(function(cardx) {
                                return cardx.suit == 'diamond';
                            });
                            if (diamond) {
                                gains.push(diamond);
                            } else {
                                game.log('牌堆没有', '♦️️️', '牌了!');
                            }
                        }
                        if (suits.includes('club')) {
                            var club = get.randomCard(function(cardx) {
                                return cardx.suit == 'club';
                            });
                            if (club) {
                                gains.push(club);
                            } else {
                                game.log('牌堆没有', '♣️️️', '牌了!');
                            }
                        }
                        if (suits.includes('spade')) {
                            var spade = get.randomCard(function(cardx) {
                                return cardx.suit == 'spade';
                            });
                            if (spade) {
                                gains.push(spade);
                            } else {
                                game.log('牌堆没有', '♠️️️', '牌了!');
                            }
                        }
                        if (gains.length) {
                            player.gain(gains, 'gain2', 'log');
                        }
                    },
                },
                tlbb_xunzang: {
                    juexingji: true,
                    derivation: ['tlbb_chuantu'],
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'tlbb_tuotaiEnd',
                        global: 'die',
                    },
                    filter(event, player) {
                        if (player.storage.tlbb_xunzang) return false;
                        if (event.name == 'die') return player.storage.tlbb_guiyi_target && player.storage.tlbb_guiyi_target == event.player;
                        return player.countMark('tlbb_tuotai2') >= 4;
                    },
                    forced: true,
                    content() {
                        player.addSkills('tlbb_chuantu');
                        player.awakenSkill(event.name);
                        player.storage[event.name] = true;
                    },
                },
                tlbb_chuantu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'damageBegin4',
                    },
                    filter(event, player) {
                        return event.hasNature('jy_du');
                    },
                    forced: true,
                    content() {
                        'step 0';
                        trigger.cancel();
                        if (!player.storage.tlbb_tuotai || !player.storage.tlbb_tuotai.length) event.finish();
                        ('step 1');
                        if (player.storage.tlbb_tuotai.length > 1) {
                            player
                                .chooseControl(player.storage.tlbb_tuotai, function(event, player) {
                                    return player.storage.tlbb_tuotai[0];
                                })
                                .set('prompt', 'tlbb_chuantu:移除脱胎选择的一个花色');
                        } else if (player.storage.tlbb_tuotai.length == 1) {
                            event._result = { control: player.storage.tlbb_tuotai[0] };
                        }
                        ('step 2');
                        player.unmarkAuto('tlbb_tuotai', [result.control]);
                        game.log(player, '选择了' + get.translation(result.control));
                        player.popup(result.control);
                        player.gainMaxHp();
                        if (!player.storage.tlbb_tuotai.length) player.removeSkill('tlbb_tuotai_gain');
                    },
                    ai: {
                        nojy_du: true,
                        effect: {
                            target(card, player, target, current) {
                                if (target.storage.tlbb_tuotai && target.storage.tlbb_tuotai.length) return;
                                if (game.hasNature(card, 'jy_du') || get.tag(card, 'jy_duDamage')) return 'zerotarget';
                            },
                        },
                    },
                },
                //旧游坦之
                //绝天山童姥
                tlbb_huantong: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    forced: true,
                    trigger: {
                        player: ['phaseJieshuBegin', 'damageBegin'],
                    },
                    forced: true,
                    content() {
                        var lose;
                        if (trigger.name == 'damage') {
                            lose = trigger.num;
                            player.say(['对一个小姑娘,你也好意思下手？', '谅你也伤不到你姥姥我分毫!', '小子,再回去多练几年吧!'].randomGet());
                            trigger.cancel();
                        } else {
                            lose = 1;
                        }
                        player.loseMaxHp(lose);
                    },
                },
                tlbb_kongfu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    global: 'tlbb_kongfu_draw',
                    subSkill: {
                        draw: {
                            audio: 'tlbb_kongfu',
                            trigger: {
                                player: 'phaseJieshuBegin',
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                if (!player.hasMark('tlbb_kongfu_fu')) return false;
                                return true;
                            },
                            forced: true,
                            popup: false,
                            nopop: true,
                            forced: true,
                            content() {
                                'step 0';
                                //game.playJY(['tlbb_kongfu1','tlbb_kongfu2'].randomGet());
                                if (trigger.name == 'damage') {
                                    if (!player.storage.tlbb_lingzun2) {
                                        game.countPlayer(function(current) {
                                            if (current.hasSkill('tlbb_kongfu')) {
                                                current.draw();
                                            }
                                        });
                                    }
                                    event.finish();
                                }
                                ('step 1');
                                if (player.storage.tlbb_lingzun2) {
                                    player.judge('生死符', function(card) {
                                        if (card.suit != 'club') return -2;
                                        return 0;
                                    }).judge2 = function(result) {
                                        return result.bool;
                                    };
                                    game.countPlayer(function(current) {
                                        if (current.hasSkill('tlbb_kongfu')) {
                                        }
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool == false) {
                                    player.loseHp(1);
                                }
                            },
                        },
                        fu: {
                            mark: true,
                            //marktext2:'符',
                            markimage: 'extension/金庸群侠传/image/icon/jykongfu.jpg',
                            //marktext:"<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jykongfu.jpg>",
                            intro: {
                                name: '控符',
                                name2: '符',
                                content(storage) {
                                    return '你已中<生死符>,好好享受这生不如死的滋味吧.<br><img style=width:165px src=extension/金庸群侠传/image/avatar/jy_avatar_shegshifu.jpg>';
                                },
                            },
                        },
                    },
                    trigger: {
                        player: ['gainMaxHpEnd', 'loseMaxHpEnd'],
                    },
                    filter(event, player) {
                        return game.hasPlayer(function(current) {
                            return current != player && !current.hasMark('tlbb_kongfu_fu');
                        });
                        return false;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('tlbb_kongfu'), function(card, player, target) {
                                return target != player && !target.hasMark('tlbb_kongfu_fu');
                            })
                            .set('ai', function(target) {
                                if (!player.hasSkill('tlbb_lingzun')) return 1;
                                return -get.attitude(player, target);
                            });
                        ('step 1');
                        if (result.bool) {
                            result.targets[0].addMark('tlbb_kongfu_fu', 1);
                            //result.targets[0].addSkill('tlbb_kongfu_fu');
                        }
                    },
                },
                tlbb_lingzun: {
                    juexingji: true,
                    forced: true,
                    init(player) {
                        player.storage.tlbb_lingzun = false;
                    },
                    filter(event, player) {
                        if (player.maxHp > 3) {
                            return false;
                        }
                        return !player.storage.tlbb_lingzun;
                    },
                    intro: {
                        content: 'limited',
                    },
                    mark: true,
                    markimage: 'extension/金庸群侠传/image/icon/jylingzhun.jpg',
                    //marktext2:'尊',
                    //marktext:"<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jylingzhun.jpg>",
                    trigger: {
                        player: ['gainMaxHpEnd', 'loseMaxHpEnd'],
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    content() {
                        player.storage.tlbb_lingzun = true;
                        game.countPlayer(function(current) {
                            current.storage.tlbb_lingzun2 = true;
                        });
                        if (player.hasSkill('tlbb_huantong')) {
                            player.removeSkills('tlbb_huantong');
                        }
                        player.awakenSkill('tlbb_lingzun');
                    },
                },
                tlbb_wuchi: {
                    init(player) {
                        player.storage.tlbb_wuchi = false;
                    },
                    forced: true,
                    derivation: ['tlbb_yandao', 'tlbb_jiezhi', 'tlbb_nianhua'],
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'roundStart',
                    },
                    forced: true,
                    filter(event, player) {
                        return player.storage.tlbb_wuchi !== true;
                    },
                    content() {
                        'step 0';
                        player.loseMaxHp();
                        ('step 1');
                        if (player.storage.tlbb_wuchi === false) {
                            player.addSkills('tlbb_yandao');
                            player.storage.tlbb_wuchi = 'tlbb_yandao';
                        } else if (player.storage.tlbb_wuchi == 'tlbb_yandao') {
                            player.addSkills('tlbb_jiezhi');
                            player.storage.tlbb_wuchi = 'tlbb_jiezhi';
                        } else if (player.storage.tlbb_wuchi == 'tlbb_jiezhi') {
                            player.addSkills('tlbb_nianhua');
                            player.storage.tlbb_wuchi = true;
                            player.awakenSkill('tlbb_wuchi');
                        } else {
                            player.awakenSkill('tlbb_wuchi');
                            player.storage.tlbb_wuchi = true;
                        }
                    },
                },
                tlbb_yandao: {
                    trigger: {
                        player: ['gainMaxHpEnd', 'loseMaxHpEnd'],
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    forced: true,
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('tlbb_yandao'), function(card, player, target) {
                                return target != player;
                            })
                            .set('ai', function(target) {
                                return get.damageEffect(target, _status.event.player, _status.event.player, 'fire');
                            });
                        ('step 1');
                        if (result.bool) {
                            result.targets[0].damage(Math.ceil(2 * Math.random()), 'fire');
                        }
                    },
                },
                tlbb_jiezhi: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        source: 'damageEnd',
                    },
                    filter(event, player) {
                        return event.player.countCards('h') > 0;
                    },
                    content() {
                        'step 0';
                        player.viewHandcards(trigger.player);
                        ('step 1');
                        var dis = trigger.player.getCards('h', function(card) {
                            return get.color(card) == 'red';
                        });
                        if (dis.length) {
                            trigger.player.discard(dis);
                            var gain = get.randomCards(dis.length, function(cardx) {
                                return get.color(cardx) == 'black';
                            });
                            if (gain.length) {
                                trigger.player.gain(gain, 'draw');
                            }
                        }
                    },
                },
                tlbb_nianhua: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    position: 'he',
                    filter(event, player) {
                        if (!player.countCards('he', { color: 'red' })) return false;
                        return (
                            get.randomCardsNum(function(cardx) {
                                return cardx.suit == 'club';
                            }, 'cardPile') >= 2
                        );
                    },
                    filterCard(card, player) {
                        return get.color(card) == 'red';
                    },
                    selectCard: [1, 1],
                    check(card) {
                        var name = card.name;
                        var player = _status.event.player;
                        if (
                            player.countCards('h', function(cardx) {
                                return cardx.name == name;
                            }) > 1
                        )
                            return 1;
                        if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
                            return 11 - get.equipValue(card);
                        }
                        return 6 - get.value(card);
                    },
                    content() {
                        var gain = get.randomCards(
                            2,
                            function(cardx) {
                                return cardx.suit == 'club';
                            },
                            'cardPile'
                        );
                        if (gain.length) {
                            player.gain(gain, 'draw');
                        }
                    },
                    ai: {
                        order: 6,
                        result: {
                            player: 1,
                        },
                        threaten: 1.55,
                    },
                },
                tlbb_mozhang: {
                    audio: 'ext:金庸群侠传/peiyin:3',
                    derivation: ['tlbb_xisui'],
                    enable: 'chooseToUse',
                    mark: true,
                    markimage: 'extension/金庸群侠传/image/icon/jymozhang.jpg',
                    //marktext2:'魔',
                    //marktext:"<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jymozhang.jpg>",
                    limited: true,
                    init(player) {
                        player.storage.tlbb_mozhang = false;
                    },
                    filter(event, player) {
                        if (player.storage.tlbb_mozhang) return false;
                        if (event.type == 'dying') {
                            if (player != event.dying) return false;
                            return true;
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        //-----照抄涅槃-----
                        player.awakenSkill('tlbb_mozhang');
                        player.storage.tlbb_mozhang = true;
                        ('step 1');
                        var num = player.maxHp;
                        if (num > 2) {
                            player.loseMaxHp(num - 2);
                        } else if (num < 2) {
                            player.gainMaxHp(2 - num);
                        }
                        ('step 2');
                        player.clearSkills();
                        if (player.hp < player.maxHp) {
                            //player.recover(player.maxHp-player.hp);
                        }
                        ('step 3');
                        player.addSkills('tlbb_xisui');
                    },
                    ai: {
                        order: 10,
                        skillTagFilter(player) {
                            if (player.storage.tlbb_mozhang) return false;
                            if (player.hp > 0) return false;
                        },
                        save: true,
                        result: {
                            player(player) {
                                if (player.hp == 0) return 10;
                                if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
                                return 0;
                            },
                        },
                        threaten(player, target) {
                            if (!target.storage.tlbb_mozhang) return 0.6;
                        },
                    },
                    intro: {
                        content: 'limited',
                    },
                },
                tlbb_xisui: {
                    trigger: {
                        player: 'loseEnd',
                    },
                    forced: true,
                    filter(event, player) {
                        if (!event.hs || !event.hs.length) return false;
                        var heart = true,
                            diamond = true,
                            club = true,
                            spade = true;
                        var cards = player.getCards('h');
                        if (Array.isArray(cards)) for (var i of cards) {
                            var suit = i.suit;
                            if (suit == 'heart') {
                                heart = false;
                            } else if (suit == 'diamond') {
                                diamond = false;
                            } else if (suit == 'club') {
                                club = false;
                            } else if (suit == 'spade') {
                                spade = false;
                            }
                        }
                        var bool = heart || diamond || club || spade;
                        return bool && !player.isPhaseUsing();
                    },
                    audio: 'ext:金庸群侠传/peiyin:4',
                    //audioname:["tlbb_jue_damo","ywhy_zhangjunbao"],
                    audioname2: {
                        //武将名:引用的技能配音
                        tlbb_jue_damo: 'jue_xisuidm',
                        ywhy_zhangjunbao: 'ywhy_xishuizjb',
                    },
                    content() {
                        //---万恶的特定牌检索눈_눈---
                        var heart = true,
                            diamond = true,
                            club = true,
                            spade = true;
                        var cards = player.getCards('h');
                        if (Array.isArray(cards)) for (var i of cards) {
                            var suit = i.suit;
                            if (suit == 'heart') {
                                heart = false;
                            } else if (suit == 'diamond') {
                                diamond = false;
                            } else if (suit == 'club') {
                                club = false;
                            } else if (suit == 'spade') {
                                spade = false;
                            }
                        }
                        var gains = [];
                        if (heart) {
                            heart = get.randomCard(function(cardx) {
                                return cardx.suit == 'heart';
                            });
                            if (heart) {
                                gains.push(heart);
                            } else {
                                game.log('牌堆没有', '♥️️️', '牌了!');
                            }
                        }
                        if (diamond) {
                            diamond = get.randomCard(function(cardx) {
                                return cardx.suit == 'diamond';
                            });
                            if (diamond) {
                                gains.push(diamond);
                            } else {
                                game.log('牌堆没有', '♦️️️', '牌了!');
                            }
                        }
                        if (club) {
                            club = get.randomCard(function(cardx) {
                                return cardx.suit == 'club';
                            });
                            if (club) {
                                gains.push(club);
                            } else {
                                game.log('牌堆没有', '♣️️️', '牌了!');
                            }
                        }
                        if (spade) {
                            spade = get.randomCard(function(cardx) {
                                return cardx.suit == 'spade';
                            });
                            if (spade) {
                                gains.push(spade);
                            } else {
                                game.log('牌堆没有', '♠️️️', '牌了!');
                            }
                        }
                        if (gains.length) {
                            player.gain(gains, 'gain2');
                        }
                    },
                    mod: {
                        aiOrder(player, card, num) {
                            var suit = card.suit;
                            if (player == _status.currentPhase) return;
                            if (
                                !player.countCards('h', function(cardx) {
                                    return cardx != card && cardx.suit == suit;
                                })
                            )
                                return num + 0.1;
                        },
                        aiValue(player, card, num) {
                            if (player == _status.currentPhase) return;
                            ///////////////////////////////////////
                            var equip1 = player.getEquip(1);
                            if (equip1 && card != equip1 && (equip1.name == 'zhangba' || equip1.name == 'jydiy_zhenwujian')) return num / 10;
                            ////////////////////////////////////////
                            if (card.name == 'zhangba') return 10;
                            if (card.name == 'jydiy_zhenwujian') return 10;
                            ////////////////////////////////////////
                            var suit = card.suit;
                            if (
                                !player.countCards('h', function(cardx) {
                                    return cardx != card && cardx.suit == suit;
                                })
                            )
                                return num / 4;
                            //if(player!=_status.currentPhase) return num/4;
                        },
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
                            },
                        },
                        noh: true,
                        taiJiBuff: true,
                        taijiTag: true,
                        skillTagFilter(player, tag) {
                            if (tag == 'taiJiBuff') {
                                if (player == _status.currentPhase) return false;
                            }
                            if (tag == 'noh') {
                                if (player == _status.currentPhase) return false;
                                if (player.countCards('h') > 4) return false;
                            }
                        },
                    },
                },
                tlbb_nanzheng: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard(card, player) {
                        return get.type(card) == 'equip';
                    },
                    viewAsFilter(player) {
                        if (
                            !player.countCards('hes', function(card) {
                                return get.type(card) == 'equip';
                            })
                        )
                            return false;
                        return true;
                    },
                    position: 'hes',
                    viewAs: {
                        name: 'nanman',
                        nature: false,
                        suit: 'none',
                        number: null,
                    },
                    ignoreMod: true,
                    precontent() {
                        'step 0';
                        player.turnOver();
                        player.say('挥师南下,扫荡中原!');
                        player.discard(event.result.cards);
                        ('step 1');
                        event.result.card = { name: 'nanman' };
                    },
                    check(card) {
                        var player = _status.event.player;
                        var num = 3;
                        if (player.isTurnedOver()) num += 4;
                        if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
                            num += 5;
                            return num - get.equipValue(card);
                        }
                        return num - get.value(card);
                    },
                },
                tlbb_mingjin: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    logTarget(event, player) {
                        const evt = event.parent;
                        const count = evt.num + 1;
                        const targets = evt.targets.slice(count);
                        return targets.filter((i) => !evt.excluded.includes(i));
                    },
                    check(event, player) {
                        const targets = lib.skill.tlbb_mingjin.logTarget(event, player);
                        let effect = get.effect(targets[0], event.card, player, player);
                        if (effect > 0) return false;
                        for (var i = 1; i < targets.length; i++) {
                            effect += get.effect(targets[i], event.card, player, player);
                        }
                        return effect < 0;
                    },
                    trigger: { global: 'useCardToEnd' },
                    filter(event, player) {
                        const evt = event.parent;
                        //if(evt.all_excluded) return false;
                        const count = evt.num + 1;
                        if (count == evt.targets.length) return false;
                        const targets = evt.targets.slice(count);
                        return targets.some((i) => !evt.excluded.includes(i));
                    },
                    content() {
                        trigger.parent.excluded.addArray(game.filterPlayer());
                    },
                },
                tlbb_congjian: {
                    group: ['tlbb_congjian_remove'],
                    subSkill: {
                        remove: {
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return player.identity != 'zhu';
                            },
                            content() {
                                player.removeSkill('tlbb_congjian');
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    global: 'tlbb_congjian2',
                    zhuSkill: true,
                },
                tlbb_congjian2: {
                    audio: 'tlbb_congjian',
                    enable: 'phaseUse',
                    line: true,
                    position: 'he',
                    prompt() {
                        var player = _status.event.player;
                        var group = 'qun';
                        if (lib.jy_changeSkill) group = 'jy_lie';
                        var list = game.filterPlayer(function(target) {
                            if (group != player.group) return false;
                            return target != player && target.hasZhuSkill('tlbb_congjian', player);
                        });
                        var str = '弃置一张装备牌并失去一点体力令' + get.translation(list);
                        if (list.length > 1) str += '中的一人';
                        str += '翻面';
                        return str;
                    },
                    filter(event, player) {
                        if (
                            !player.countCards('he', function(card) {
                                return lib.skill['tlbb_congjian2'].filterCard(card, player);
                            })
                        )
                            return false;
                        var group = 'qun';
                        if (lib.jy_changeSkill) group = 'jy_lie';
                        return game.hasPlayer(function(target) {
                            if (group != player.group) return false;
                            return target != player && target.hasZhuSkill('tlbb_congjian', player);
                        });
                    },
                    selectCard() {
                        return 1;
                    },
                    check(card) {
                        var player = _status.currentPhase;
                        if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
                            return 11 - get.equipValue(card);
                        }
                        return 6 - get.value(card);
                    },
                    filterCard(card, player, event) {
                        if (!lib.filter.cardDiscardable(card, player, event)) return false;
                        return get.type(card) == 'equip';
                    },
                    filterTarget(card, player, target) {
                        return target != player && target.hasZhuSkill('tlbb_congjian', player);
                    },
                    usable: 1,
                    content() {
                        'step 0';
                        player.loseHp();
                        ('step 1');
                        if (target.isTurnedOver()) {
                            player.say(['圣上,南征刻不容缓,怎能在此停歇？', '陛下岂不知天予弗取,反受其咎!', '只要圣上挥师南下,大宋唾手可得!'].randomGet());
                        } else {
                            player.say(['大辽刚刚安定,岂能又起战火？', '南朝势大,岂能轻易取之？', '望陛下以天下苍生为念!'].randomGet());
                        }
                        target.turnOver();
                    },
                    ai: {
                        expose: 0.3,
                        order: 10,
                        result: {
                            player: -1,
                            target(player, target) {
                                if (target.isTurnedOver()) {
                                    return 2;
                                } else {
                                    return -2;
                                }
                            },
                        },
                    },
                },
                tlbb_yingu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseJieshuBegin',
                    },
                    forced: true,
                    filter(event, player) {
                        var hs = player.getCards('h', function(cardx) {
                            var name = cardx.name;
                            var nature = get.nature(cardx);
                            if (name == 'huogong') return true;
                            if (name == 'sha' && nature && game.hasNature(cardx, player)) return true;
                            return false;
                        });
                        return !hs.length;
                    },
                    content() {
                        if (player.getCards('h').length) player.showHandcards();
                        var hs = player.getCards('h');
                        var list = Array.from(lib.nature.keys());
                        var names = list.add('huogong');
                        for (var i = 0; i < hs.length; i++) {
                            var name = hs[i].name;
                            var nature = get.nature(hs[i]);
                            if (name == 'huogong') {
                                names.remove('huogong');
                            } else if (name == 'sha' && nature && names.includes(nature)) {
                                names.remove(nature);
                            }
                        }
                        var gain = get.randomCard(function(cardx) {
                            var name2 = cardx.name;
                            var nature2 = get.nature(cardx);
                            if (name2 == 'sha' && nature2 && names.includes(nature2)) {
                                return true;
                            } else if (name2 == 'huogong' && names.includes(name2)) {
                                return true;
                            } else {
                                return false;
                            }
                        });
                        if (gain) {
                            player.gain(gain, 'draw');
                        } else {
                            if (names.length) {
                                var cardx = null,
                                    gain = gains.randomGet();
                                if ((gain = 'huogong')) {
                                    cardx = game.createCard('huogong');
                                } else {
                                    cardx = game.createCard('sha', null, null, gain);
                                }
                                player.gain(cardx, 'draw');
                            }
                        }
                    },
                },
                tlbb_quyi: {
                    trigger: {
                        global: 'damageEnd',
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    logTarget: 'source',
                    filter(event, player) {
                        if (!event.source) return false;
                        if (event.source == player) return false;
                        if (!event.nature) return false;
                        if (!event.cards && !event.source.getCards('he').length) return false;
                        if (event.cards && !event.source.getCards('he').length) return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0]) != 'd';
                        return true;
                    },
                    check(event, player) {
                        var att = get.attitude(player, event.source);
                        if (att < 0) return true;
                        var bool1 = event.cards && get.position(event.cards[0]) == 'd';
                        var bool2 = event.source.getCards('he').length;
                        if (bool1) return true;
                        return false;
                    },
                    content() {
                        'step 0';
                        var bool1 = trigger.cards && trigger.cards.length && get.position(trigger.cards[0]) == 'd';
                        var bool2 = trigger.source.getCards('he').length;
                        if (bool1 && bool2) {
                            trigger.source.chooseToDiscard('he', '弃置一张牌,或令' + get.translation(player) + '获得' + get.translation(trigger.cards) + '?').set('ai', function(card) {
                                var trigger = _status.event.getTrigger();
                                var att = get.attitude(trigger.source, player);
                                if (att > 0) return -1;
                                return get.value(trigger.cards[0]) - get.value(card);
                            });
                        } else if (bool1) {
                            event._result = { bool: false };
                        } else if (bool2) {
                            trigger.source.chooseToDiscard('he', true);
                        } else {
                            event.finish();
                        }
                        ('step 1');
                        if (result.bool == false) {
                            player.gain(trigger.cards, 'gain2');
                        }
                    },
                },
                //新盗鼎--棉花糖20220705
                tlbb_daoding: {
                    mod: {
                        cardUsable(card, player, target) {
                            if (
                                !player.countCards('e', function(card) {
                                    return card.name == 'jydiy_shenmuwangding';
                                })
                            )
                                return;
                            if (get.jyCardDu(card)) return Infinity;
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'useCard',
                    },
                    group: ['tlbb_daoding_equip'],
                    filter(event, player) {
                        if (
                            !player.countCards('e', function(card) {
                                return card.name == 'jydiy_shenmuwangding';
                            })
                        )
                            return false;
                        if (!player.isPhaseUsing()) return false;
                        if (event.addCount === false) return false;
                        return get.jyCardDu(event.card, false);
                    },
                    forced: true,
                    content() {
                        const cardName = trigger.card.name;
                        trigger.addCount = false;
                        const stat = player.getStat();
                        if (stat && stat.card && stat.card[cardName]) stat.card[cardName]--;
                    },
                    subSkill: {
                        equip: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            _priority: -1,
                            filter(event, player) {
                                return !player.countCards('e', function(card) {
                                    return card.name == 'jydiy_shenmuwangding';
                                });
                            },
                            content() {
                                let card = get.cardPile(function(card) {
                                    return card.name == 'jydiy_shenmuwangding';
                                });
                                if (!card) {
                                    card = game.createCard('jydiy_shenmuwangding');
                                }
                                lib.inpile.add('jydiy_shenmuwangding');
                                player.chooseUseTarget(card, true, 'nopopup');
                            },
                        },
                    },
                },
                //旧盗鼎
                tlbb_daoding_old: {
                    subSkill: {
                        fire: {
                            trigger: {
                                player: 'damageBefore',
                                source: 'damageBefore',
                            },
                            filter(event, player) {
                                if (event.nature && event.nature == 'fire') return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                if (trigger.source && trigger.source != trigger.player) {
                                    trigger.source.line(trigger.player, 'fire');
                                }
                                trigger.nature = 'fire';
                            },
                            charlotte: true,
                            markimage: 'extension/金庸群侠传/image/icon/jydaoding.jpg',
                            mark: true,
                            intro: {
                                content: '锁定技.你造成或受到的伤害均视为火焰伤害.',
                            },
                        },
                    },
                    intro: {
                        content: 'limited',
                    },
                    init(player) {
                        player.storage.tlbb_daoding_old = false;
                    },
                    limited: true,
                    line: 'fire',
                    enable: 'phaseUse',
                    audio: 'tlbb_daoding',
                    filterTarget(card, player, target) {
                        return player != target && !target.hasSkill('tlbb_daoding_old_fire') && !target.hasDisabledSlot(2);
                    },
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    filter(event, player) {
                        if (player.storage.tlbb_daoding_old) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        player.storage.tlbb_daoding_old = true;
                        player.awakenSkill('tlbb_daoding_old');
                        ('step 1');
                        var jydiywuchanyi = get.cardPile('jydiywuchanyi', 'field');
                        if (jydiywuchanyi) {
                            var owner = get.owner(jydiywuchanyi);
                            if (owner) {
                                owner.$give(jydiywuchanyi, target);
                                owner.lose(jydiywuchanyi);
                            }
                            target.chooseUseTarget(jydiywuchanyi, true, 'nopopup');
                            //target.equip(jydiywuchanyi);
                        } else {
                            jydiywuchanyi = game.createCard('jydiywuchanyi');
                            target.chooseUseTarget(jydiywuchanyi, true, 'nopopup');
                            //target.equip(jydiywuchanyi);
                        }
                        ('step 2');
                        target.addSkill('tlbb_daoding_old_fire');
                    },
                    markimage: 'extension/金庸群侠传/image/icon/jydaoding.jpg',
                    mark: true,
                    ai: {
                        order: 8.5,
                        result: {
                            target(player, target) {
                                if (target.hasSkillTag('nofire')) return 10;
                                if (target.countCards('e', { subtype: 'equip2' })) return -2;
                                return -1;
                                //if(!target.countCards('he',{subtype:'equip2'})){
                                //if(get.effect(target,{name:'jydiywuchanyi'},target,target)>0) return get.effect(target,{name:'jydiywuchanyi'},target,target);
                                //return 0;
                                //}
                                //if(!target.countCards('h',{subtype:'equip2'})&&target.countCards('e',{subtype:'equip2'})){
                                //if(target.hp<2) return -2;
                                //if(get.effect(target,{name:'jydiywuchanyi'},target,target)<0) return get.effect(target,{name:'jydiywuchanyi'},target,target);
                                //return 0;
                                //}
                                //return 0;
                            },
                        },
                    },
                },
                tlbb_zhenlong: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        target: 'useCardToBegin',
                        player: 'judge',
                    },
                    forced: true,
                    filter(event, player) {
                        var name = event.parent.name;
                        if (name == 'phaseJudge') {
                            if (event.name == 'judge') return true;
                        } else if (name == 'useCard') {
                            if (event.card && get.type(event.card) == 'trick') return true;
                        } else return false;
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('tlbb_zhenlong'), true, function(card, player, target) {
                                return target != player;
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(_status.event.player, target);
                                return att;
                            });
                        ('step 1');
                        if (result.bool) {
                            event.target = result.targets[0];
                        } else {
                            event.finish();
                            return;
                        }
                        ('step 2');
                        target
                            .chooseBool('珍拢<br>是否令' + get.translation(player) + '随机获得一张<金刚护体>？否则你摸一张牌.')
                            .set('ai', function() {
                                var source = _status.event.source;
                                var player = _status.event.player;
                                if (source.hasSkill('tlbb_qingshou') && !source.storage.tlbb_qingshou) return true;
                                if (get.attitude(player, source) > 0) return true;
                                return false;
                            })
                            .set('source', player);
                        ('step 3');
                        if (result.bool) {
                            target.addMark('tlbb_zhenlong_num', 1);
                            target.line(player, 'green');
                            var wuxie = get.randomCard(function(card) {
                                return card.name == 'wuxie';
                            });
                            if (wuxie) {
                                player.gain(wuxie, 'gain2', 'log');
                            } else {
                                var cardss = game.createCard('wuxie');
                                player.gain(cardss, 'gain2', 'log');
                            }
                        } else {
                            target.draw();
                        }
                    },
                },
                tlbb_zaojie2: {
                    trigger: { player: 'judgeBefore' },
                    forced: true,
                    filter(event, player) {
                        return !event.directresult && player.getExpansions('tlbb_zaojie2').length;
                    },
                    charlotte: true,
                    nopop: false,
                    popup: false,
                    content() {
                        var cards = player.getExpansions('tlbb_zaojie2');
                        trigger.directresult = cards[0];
                    },
                    intro: {
                        content: 'expansion',
                        markcount: 'expansion',
                    },
                    onremove(player, skill) {
                        var cards = player.getExpansions(skill);
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                },
                tlbb_zaojie: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'loseAfter' },
                    filter(event, player) {
                        if (event.type != 'discard') return false;
                        var togain = event.cards2.filterInD('od');
                        if (togain.length) {
                            return game.hasPlayer(function(current) {
                                var cards = current.getExpansions('tlbb_zaojie2');
                                return !cards.length;
                            });
                        }
                        return false;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        event.cards = trigger.cards2.filterInD('od');
                        ('step 1');
                        var bool = game.hasPlayer(function(current) {
                            var cards = current.getExpansions('tlbb_zaojie2');
                            return !cards.length;
                        });
                        if (bool && event.cards.length) {
                            player.chooseCardButton(get.prompt('tlbb_zaojie'), event.cards, [1, 1]).set('ai', function(button) {
                                return 1;
                            });
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.bool) {
                            event.togive = result.links.slice(0);
                            player
                                .chooseTarget('将' + get.translation(result.links) + '置于一名没有"劫"的角色的侠客牌上.', function(card, player, target) {
                                    var cards = target.getExpansions('tlbb_zaojie2');
                                    return !cards.length;
                                })
                                .set('ai', function(target) {
                                    return 1;
                                });
                        } else {
                            event.finish();
                        }
                        ('step 3');
                        if (result.bool) {
                            event.cards.removeArray(event.togive);
                            result.targets[0].addToExpansion(event.togive, 'gain2', 'log').gaintag.add('tlbb_zaojie2');
                            result.targets[0].addSkill('tlbb_zaojie2');
                            if (event.cards.length) event.goto(1);
                        }
                    },
                },
                tlbb_zhenlong_num: {
                    marktext: '珍',
                    intro: {
                        name: '珍拢',
                        name2: '珍',
                        content: '当前有#个<珍>',
                    },
                },
                tlbb_qingshou: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    derivation: ['tlbb_xpojie', 'tlbb_beiming', 'tlbb_wuxiang'],
                    init(player, skill) {
                        player.storage[skill] = false;
                    },
                    logTarget(event, player) {
                        var targets = game.filterPlayer(function(current) {
                            var num = current.countMark('tlbb_zhenlong_num');
                            return !game.hasPlayer(function(target) {
                                var num2 = target.countMark('tlbb_zhenlong_num');
                                return target != current && num2 >= num;
                            });
                        });
                        return targets;
                    },
                    trigger: { player: 'dying' },
                    filter(event, player) {
                        if (player.storage.tlbb_qingshou) return false;
                        var targets = lib.skill.tlbb_qingshou.logTarget(event, player);
                        return targets.length == 1;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        event.targets = lib.skill.tlbb_qingshou.logTarget(trigger, player);
                        event.target = event.targets[0];
                        ('step 1');
                        player.awakenSkill('tlbb_qingshou');
                        player.storage.tlbb_qingshou = true;
                        target.clearSkills();
                        target.maxHp = 3;
                        target.update();
                        ('step 2');
                        target.addSkills('tlbb_pojie');
                        target.addSkills('tlbb_xpojie');
                        target.addSkills('tlbb_beiming');
                        target.addSkills('tlbb_wuxiang');
                        event.cards = get.cards(8);
                        event.gain = false;
                        if (target.storage.tlbb_huansu) {
                            target.addToExpansion(event.cards, 'gain2', 'log').gaintag.add('tlbb_pojie');
                        } else {
                            event.gain = true;
                            game.cardsGotoSpecial(event.cards);
                        }
                        ('step 3');
                        if (event.gain) {
                            game.log(target, '将', event.cards, '置于了侠客牌上');
                            target.$gain2(event.cards);
                            target.directgains(event.cards, null, 'tlbb_pojie');
                        }
                        ('step 4');
                        target.markSkill('tlbb_pojie');
                    },
                },
                tlbb_yaodie: {
                    subSkill: {
                        chongzhi: {
                            trigger: { global: 'roundEnd' },
                            forced: true,
                            filter(event, player) {
                                return player.hasSkill('tlbb_yaodie_target');
                            },
                            content() {
                                player.removeSkill('tlbb_yaodie_target');
                                player.storage.tlbb_yaodie = false;
                                player.restoreSkill('tlbb_yaodie');
                                game.log(player, '重置了', '【谣谍】');
                            },
                        },
                        target: {
                            audio: 'ext:金庸群侠传/peiyin:2',
                            group: 'tlbb_yaodie_chongzhi',
                            logTarget: 'player',
                            onremove(player) {
                                delete player.storage.tlbb_yaodie_target;
                                delete player.storage.tlbb_yaodie_type;
                            },
                            intro: { content: '' },
                            trigger: { global: 'useCard' },
                            forced: true,
                            filter(event, player) {
                                if (get.type(event.card, 'trick') != player.storage.tlbb_yaodie_type) return false;
                                return event.player == player.storage.tlbb_yaodie_target;
                            },
                            content() {
                                'step 0';
                                player.removeSkill('tlbb_yaodie_target');
                                event.num = 0;
                                event.players = game.filterPlayer(function(current) {
                                    return current != trigger.player;
                                });
                                event.players.sort(lib.sort.seat);
                                ('step 1');
                                if (event.num < event.players.length) {
                                    if (!trigger.player.isIn()) {
                                        event.goto(3);
                                        return;
                                    }
                                    var target = event.players[event.num];
                                    player.line(target, 'green');
                                    var cards = get.cards(1);
                                    target.showCards(cards, '谣谍');
                                    if (target.canUse(cards[0], trigger.player, false)) {
                                        target.useCard(cards[0], trigger.player, false, 'noai').set('oncard', function(card, player) {
                                            if (!card) card = this.card;
                                            card.tlbb_yaodie = true;
                                        });
                                        target.say(['兄弟们,上!', '休得犯我大宋河山!', '非我族类,其心必异!'].randomGet());
                                    } else {
                                        player.gain(cards, 'gain2', 'log');
                                        player.say(['积蓄实力,以图复燕大计!', '我且在此坐收渔利!'].randomGet());
                                    }
                                }
                                ('step 2');
                                event.num++;
                                if (event.num < event.players.length) event.goto(1);
                                ('step 3');
                                var list = trigger.player.getHistory('damage', function(evt) {
                                    return evt.card && evt.card.tlbb_yaodie && evt.getParent('tlbb_yaodie_target') == event;
                                });
                                var damagenum = 0;
                                for (var damage of list) {
                                    damagenum += damage.num;
                                }
                                if (damagenum > 0) {
                                    player.draw(damagenum);
                                }
                            },
                        },
                    },
                    init(player) {
                        player.storage.tlbb_yaodie = false;
                    },
                    mark: true,
                    markimage: 'extension/金庸群侠传/image/icon/jy_avatar_yaodie.jpg',
                    intro: { content: 'limited' },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'roundBegin' },
                    forced: true,
                    filter(event, player) {
                        return !player.storage.tlbb_yaodie;
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('tlbb_yaodie'), function(card, player, target) {
                                return target != player;
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(_status.event.player, target);
                                if (att < 0) return target.countCards('h');
                                return 0;
                            });
                        ('step 1');
                        if (result.bool) {
                            player.storage.tlbb_yaodie = true;
                            player.awakenSkill('tlbb_yaodie');
                            player.storage.tlbb_yaodie_target = result.targets[0];
                            player.addSkill('tlbb_yaodie_target');
                            var controls = ['trick', 'basic', 'equip'];
                            var str = '请选择一种类型';
                            player.chooseControl(controls, ui.create.dialog(str, 'hidden')).set('ai', function() {
                                return Math.floor(Math.random() * controls.length);
                            });
                        } else {
                            event.finish();
                            return;
                        }
                        ('step 2');
                        if (result.control) {
                            player.storage.tlbb_yaodie_type = result.control;
                        }
                    },
                },
                tlbb_fuyan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'dieAfter' },
                    filter(event, player) {
                        if (!player.awakenedSkills.includes('tlbb_yaodie')) return false;
                        if (!player.hasSkill('tlbb_yaodie_target')) return false;
                        if (!lib.group.includes(event.player.group)) return false;
                        if (
                            game.hasPlayer(function(current) {
                                return current.group == event.player.group;
                            })
                        ) {
                            return false;
                        }
                        return true;
                    },
                    content() {
                        player.removeSkill('tlbb_yaodie_target');
                        player.storage.tlbb_yaodie = false;
                        player.restoreSkill('tlbb_yaodie');
                        game.log(player, '重置了', '【谣谍】');
                    },
                },
                tlbb_zhengbian: {
                    subSkill: {
                        draw: {
                            mark: true,
                            marktext2: '摸',
                            markimage: 'extension/金庸群侠传/image/icon/jyzhengbian.jpg',
                            //marktext:"<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jyzhengbian.jpg>",
                            intro: {
                                name: '政变',
                                name2: '变',
                                content(storage) {
                                    return '当前因政变摸了' + storage + '张牌.';
                                },
                            },
                        },
                        card: {
                            mark: true,
                            intro: {
                                name: '卡牌',
                                content(storage) {
                                    return '政变卡牌' + get.translation(storage);
                                },
                            },
                        },
                        target: {
                            mark: true,
                            intro: {
                                name: '角色',
                                content(storage) {
                                    return '政变角色' + get.translation(storage);
                                },
                            },
                        },
                        draws: {
                            audio: 'tlbb_zhengbian',
                            trigger: {
                                global: 'useCard',
                            },
                            logTarget: 'player',
                            forced: true,
                            filter(event, player) {
                                if (!player.storage.tlbb_zhengbian_target) return false;
                                if (!player.storage.tlbb_zhengbian_card) return false;
                                if (event.player == player.storage.tlbb_zhengbian_target) return false;
                                if (!event.targets || !event.targets.includes(player.storage.tlbb_zhengbian_target)) return false;
                                return event.card.suit == player.storage.tlbb_zhengbian_card.suit;
                            },
                            content() {
                                trigger.player.draw();
                                trigger.player.addMark('tlbb_zhengbian_draw', 1);
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseZhunbeiBegin',
                    },
                    init(player, skill) {
                        player.storage[skill] = false;
                    },
                    mark: true,
                    marktext2: '变',
                    markimage: 'extension/金庸群侠传/image/icon/jyzhengbian.jpg',
                    //marktext:"<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jyzhengbian.jpg>",
                    intro: {
                        content: 'limited',
                    },
                    forced: true,
                    filter(event, player) {
                        return !player.storage.tlbb_zhengbian;
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('tlbb_zhengbian'), function(card, player, target) {
                                return target != player && target.countCards('h');
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(_status.event.player, target);
                                return -att;
                            });
                        ('step 1');
                        if (result.bool) {
                            var target = result.targets[0];
                            player.storage.tlbb_zhengbian_target = target;
                            player.addSkill('tlbb_zhengbian_target');
                            player.choosePlayerCard('h', target, true, 'visible');
                            event.target = target;
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.bool) {
                            player.storage.tlbb_zhengbian = true;
                            player.awakenSkill('tlbb_zhengbian');
                            player.showCards(get.translation(event.target) + '的一张手牌<br>', result.links);
                            player.storage.tlbb_zhengbian_card = result.links[0];
                            player.addSkill('tlbb_zhengbian_card');
                            player.addSkill('tlbb_zhengbian_draws');
                        } else {
                            event.finish();
                        }
                    },
                },
                tlbb_yongli: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    global: 'tlbb_yongli_sha',
                    subSkill: {
                        sha: {
                            trigger: { player: 'useCard2' },
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                if (
                                    !game.hasPlayer(function(current) {
                                        var storage = current.storage.tlbb_zhengbian_target;
                                        if (current.hasSkill('tlbb_yongli') && storage && player != storage) {
                                            return storage.isDamaged() || storage.isDead();
                                        }
                                        return false;
                                    })
                                )
                                    return false;
                                if (!player.hasMark('tlbb_zhengbian_draw')) return false;
                                var count1 = player.countMark('tlbb_zhengbian_draw');
                                if (
                                    game.hasPlayer(function(current) {
                                        var count = current.countMark('tlbb_zhengbian_draw');
                                        return player != current && count > count1;
                                    })
                                )
                                    return false;
                                return game.hasPlayer(function(current) {
                                    return !event.targets.includes(current) && player.canUse(event.card, current);
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('拥立', '是否为' + get.translation(trigger.card) + '增加一个目标', function(card, player, target) {
                                        return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
                                    })
                                    .set('sourcex', trigger.targets)
                                    .set('ai', function(target) {
                                        var player = _status.event.player;
                                        return get.effect(target, _status.event.card, player, player);
                                    })
                                    .set('card', trigger.card);
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                trigger.targets.push(event.target);
                            },
                        },
                    },
                },
                tlbb_dianqing: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    group: ['tlbb_dianqing_damage'],
                    subSkill: {
                        mark: {
                            marktext2: '青',
                            markimage: 'extension/金庸群侠传/image/icon/jy_avatar_dianqing.jpg',
                            //marktext:"<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jy_avatar_dianqing.jpg>",
                            mark: true,
                            intro: {
                                content: '原来你是阮青竹失散多年的亲生女儿.当她使用普通锦囊牌或基本牌时,若此牌为黑色,你弃置一张牌;若为红色,你摸一张牌.',
                            },
                        },
                        damage: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function(current) {
                                    return current.hasSkill('tlbb_dianqing_mark');
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(2, '点青<br>是否转移一名角色的刺青标记？', function(card, player, target) {
                                        if (ui.selected.targets.length == 0) return target.hasSkill('tlbb_dianqing_mark');
                                        if (ui.selected.targets.length == 1 && ui.selected.targets[0].hasSkill('tlbb_dianqing_mark')) return !target.hasSkill('tlbb_dianqing_mark');
                                        return false;
                                    })
                                    .set('ai', function(target) {
                                        var yi = false,
                                            yi2 = false;
                                        var red = player.countCards('h', { color: 'red' });
                                        var black = player.countCards('h', { color: 'black' });
                                        if (black >= red) yi = true;
                                        if (black < red) yi2 = true;
                                        if (yi && ui.selected.targets.length == 0) return get.attitude(player, target);
                                        if (yi && ui.selected.targets.length == 1) return -get.attitude(player, target);
                                        if (yi2 && ui.selected.targets.length == 0) return -get.attitude(player, target);
                                        if (yi2 && ui.selected.targets.length == 1) return get.attitude(player, target);
                                        return -1;
                                    })
                                    .set('targetprompt', ['被移走', '获得刺青标记']);
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].removeSkill('tlbb_dianqing_mark');
                                    result.targets[1].addSkill('tlbb_dianqing_mark');
                                }
                            },
                        },
                    },
                    trigger: {
                        global: 'gameStart',
                        player: 'enterGame',
                    },
                    forced: true,
                    filter(event, player) {
                        return game.players.length > 1;
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget('选择【点青】的目标', lib.translate.tlbb_dianqing_info, true, function(card, player, target) {
                                return target != player && !target.hasSkill('sdyx_gepao_two');
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(_status.event.player, target);
                                if (att > 0) return -1;
                                if (att == 0) return Math.random();
                                return -att;
                            });
                        ('step 1');
                        if (result.bool) {
                            var target = result.targets[0];
                            target.addSkill('tlbb_dianqing_mark');
                        }
                    },
                },
                tlbb_chunhui: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'useCard',
                    },
                    logTarget(event, player) {
                        return game.filterPlayer(function(current) {
                            return current.hasSkill('tlbb_dianqing_mark');
                        });
                    },
                    forced: true,
                    filter(event, player) {
                        var type = get.type(event.card);
                        var color = get.color(event.card);
                        if (type != 'trick' && type != 'basic') return false;
                        if (color != 'red' && color != 'black') return false;
                        return game.hasPlayer(function(current) {
                            return current.hasSkill('tlbb_dianqing_mark');
                        });
                    },
                    content() {
                        'step 0';
                        event.targets = game.filterPlayer(function(current) {
                            return current.hasSkill('tlbb_dianqing_mark');
                        });
                        event.num = 0;
                        event.targets.sort(lib.sort.seat);
                        ('step 1');
                        var color = get.color(trigger.card);
                        if (event.num < event.targets.length) {
                            var target = event.targets[event.num];
                            if (color == 'red') {
                                target.draw();
                            } else {
                                if (
                                    target.countCards('he', function(cardx) {
                                        return lib.filter.cardDiscardable(cardx, target, event.name);
                                    }) > 0
                                )
                                    target.chooseToDiscard(true, 'he');
                            }
                            event.num++;
                            event.redo();
                        }
                    },
                    ai: {
                        effect: {
                            player(card, player, target) {
                                var type = get.type(card);
                                var color = get.color(card);
                                if (type != 'trick' && type != 'basic') return;
                                if (color != 'red' && color != 'black') return;
                                var targets = game.filterPlayer(function(current) {
                                    return current.hasSkill('tlbb_dianqing_mark');
                                });
                                if (!targets.length) return;
                                var rednum = 0,
                                    blacknum = 0;
                                for (var i = 0; i < targets.length; i++) {
                                    var att = get.attitude(player, targets[i]);
                                    if (
                                        targets[i].countCards('he', function(cardx) {
                                            return lib.filter.cardDiscardable(cardx, targets[i], 'tlbb_chunhui');
                                        }) > 0
                                    ) {
                                        if (att > 0) blacknum--;
                                        if (att <= 0) blacknum++;
                                    }
                                    if (att > 0) rednum++;
                                    if (att <= 0) rednum--;
                                }
                                if (rednum > 0) {
                                    if (color == 'black') return 0;
                                    if (color == 'red') return [1, 1];
                                } else if (blacknum > 0) {
                                    if (color == 'black') return [1, 1];
                                    if (color == 'red') return 0;
                                } else return;
                            },
                        },
                    },
                },
                tlbb_yixing: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { target: 'useCardToTarget' },
                    forced: true,
                    filter(event, player) {
                        if (get.type(event.card) != 'trick') return false;
                        if (event.player == player) return false;
                        if (player.countCards('h') == 0) return false;
                        return game.hasPlayer(function(current) {
                            return current != event.player && current != player && lib.filter.targetEnabled(event.card, event.player, current);
                        });
                    },
                    content() {
                        'step 0';
                        var next = player.chooseCardTarget({
                            position: 'h',
                            selectTarget: (function(player) {
                                if (player.hasSkillTag('yixing_buff', null, null, true)) return [1, 2];
                                return [1, 1];
                            })(player),
                            filterCard: lib.filter.cardDiscardable,
                            filterTarget(card, player, target) {
                                var trigger = _status.event;
                                if (target != trigger.source && target != player) {
                                    if (lib.filter.targetEnabled(trigger.card, trigger.source, target)) return true;
                                }
                                return false;
                            },
                            ai1(card) {
                                return get.unuseful(card) + 9;
                            },
                            ai2(target) {
                                var trigger = _status.event;
                                var player = _status.event.player;
                                var eff = get.effect(player, trigger.card, trigger.source, player);
                                if (eff > 0) return 0;
                                var eff2 = get.effect(target, trigger.card, trigger.source, player);
                                return eff2;
                            },
                            prompt: get.prompt('tlbb_yixing'),
                            prompt2: lib.translate.tlbb_yixing_info,
                            source: trigger.player,
                            card: trigger.card,
                        });
                        ('step 1');
                        if (result.bool) {
                            var targets = result.targets;
                            player.discard(result.cards);
                            var evt = trigger.parent;
                            evt.triggeredTargets2.remove(player);
                            evt.targets.remove(player);
                            player.$fullscreenpop('斗转星移', 'fire');
                            targets.forEach(function(i) {
                                evt.targets.push(i);
                            });
                        }
                    },
                },
                tlbb_chongzuo: {
                    audio: 'ext:金庸群侠传/peiyin:4',
                    trigger: {
                        player: ['equipEnd', 'loseEnd'],
                    },
                    forced: true,
                    filter(event, player) {
                        if (event.name == 'lose') {
                            return event.es && event.es.length;
                        } else {
                            return true;
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        event.count = 1;
                        if (trigger.name == 'lose') {
                            event.count = trigger.es.length;
                            event.goto(3);
                        }
                        ('step 1');
                        player
                            .chooseTarget(get.prompt(event.name), '令一名角色弃一张牌', function(card, player, target) {
                                return target.countDisCards('he', null, 'tlbb_chongzuo') > 0;
                            })
                            .set('ai', function(target) {
                                const player = _status.event.player;
                                return -get.attitude(player, target);
                            });
                        ('step 2');
                        if (result.bool) {
                            result.targets[0].chooseToDiscard(1, true, 'he');
                        }
                        event.finish();
                        ('step 3');
                        player
                            .chooseTarget(get.prompt(event.name), '令一名角色摸一张牌', function(card, player, target) {
                                return true;
                            })
                            .set('ai', function(target) {
                                const player = _status.event.player;
                                return get.attitude(player, target);
                            });
                        ('step 4');
                        if (result.bool) {
                            result.targets[0].draw();
                            event.count--;
                            if (event.count > 0) {
                                event.goto(3);
                            }
                        }
                    },
                    ai: {
                        noe: true,
                        reverseEquip: true,
                        effect: {
                            target(card, player, target, current) {
                                if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                            },
                        },
                    },
                },
                tlbb_qingfu: {
                    //慕容复倾覆会触发重祚,俩技能配音叠一起太吵,所以配音放到了重祚上.
                    //audio:"ext:金庸群侠传/peiyin:2",
                    //audioname:["tlbb_xie_murongfu"],
                    audioname2: {
                        //武将名:引用的技能配音
                        //"yttl_zhangsanfeng":"yttl_taiji",
                        tlbb_xie_murongfu: 'tlbb_qingfu_xmrf',
                    },
                    trigger: {
                        player: 'phaseJieshuBegin',
                    },
                    forced: true,
                    filter(event, player) {
                        var es = player.getDisCards('e', null, 'tlbb_qingfu');
                        return es.length;
                    },
                    content() {
                        var es = player.getDisCards('e', null, 'tlbb_qingfu').randomGet();
                        player.discard(es);
                    },
                },
                //////邪慕容复倾覆
                tlbb_qingfu_xmrf: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                },
                //////
                tlbb_zifu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    group: ['tlbb_zifu_remove'],
                    subSkill: {
                        remove: {
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return player.identity != 'zhu';
                            },
                            content() {
                                player.removeSkill('tlbb_zifu');
                            },
                        },
                    },
                    trigger: {
                        global: 'phaseJieshuBegin',
                    },
                    filter(event, player) {
                        if (player.countCards('e') >= event.player.countCards('e')) return false;
                        if (!player.hasZhuSkill('tlbb_zifu')) return false;
                        var group = 'qun';
                        if (lib.jy_changeSkill) group = 'jy_lie';
                        if (group != event.player.group) return false;
                        if (event.player == player) return false;
                        return player.canMoveCard(false, true, event.player, player);
                    },
                    check(event, player) {
                        return player.canMoveCard(true, true, event.player, player);
                    },
                    logTarget: 'player',
                    _priority: -8,
                    zhuSkill: true,
                    content() {
                        if (player.canMoveCard(false, true, trigger.player, player)) {
                            const next = player.moveCard(trigger.player, player, true);
                            next.set('nojudge', true);
                            next.goto(3);
                            next.set('_result', { bool: true, targets: [trigger.player, player] });
                            next.set('result', { bool: true, targets: [trigger.player, player] });
                            next.set('targets', [trigger.player, player]);
                            player.say(['此物你留着又有何用？', '复兴大燕,还需各位鼎力相助!'].randomGet());
                        }
                    },
                },
                //20220506光明牛奶的修复版
                tlbb_muli: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { target: 'useCardToTarget' },
                    forced: true,
                    filter(event, player) {
                        if (get.type(event.card) != 'trick') return false;
                        if (event.player == player) return false;
                        if (event.targets && event.targets.length > 1) return false;
                        if (player.countCards('h') == 0) return false;
                        return game.hasPlayer(function(current) {
                            return current != event.player && current != player && lib.filter.targetEnabled(event.card, event.player, current);
                        });
                    },
                    content() {
                        'step 0';
                        player.chooseCardTarget({
                            position: 'h',
                            filterTarget(card, player, target) {
                                var trigger = _status.event;
                                if (target != player && target != trigger.source) {
                                    if (lib.filter.targetEnabled(trigger.card, trigger.source, target)) return true;
                                }
                                return false;
                            },
                            ai1(card) {
                                return get.unuseful(card) + 9;
                            },
                            ai2(target) {
                                var trigger = _status.event;
                                var player = _status.event.player;
                                if (get.effect(player, trigger.card, player, player) > 0) return 0;
                                return get.effect(target, trigger.card, player, player);
                            },
                            prompt: get.prompt2('tlbb_muli'),
                            source: trigger.player,
                            card: trigger.card,
                        });
                        ('step 1');
                        if (result.bool) {
                            var target = result.targets[0];
                            //target.gain(result.cards,player);
                            player.give(result.cards, target, true);
                            var evt = trigger.parent;
                            evt.triggeredTargets2.remove(player);
                            evt.targets.remove(player);
                            evt.targets.push(target);
                        }
                    },
                },
                //以下为原版,不能触发决誓
                tlbb_shiyin: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'useCard1',
                    },
                    usable: 1,
                    filter(event, player) {
                        if (get.type(event.card) != 'trick') return false;
                        if (event.player == player) return false;
                        if (!event.targets || event.targets.length != 1 || event.targets.includes(player) || event.targets.includes(event.player)) return false;
                        return event.player.sex && event.player.hasSex('male');
                    },
                    check(event, player) {
                        return get.attitude(player, event.player) > 0;
                    },
                    logTarget: 'player',
                    content() {
                        'step 0';
                        trigger.player.draw();
                        ('step 1');
                        trigger.player = player;
                    },
                },
                tlbb_muwanqingjueshi: {
                    subSkill: {
                        die: {
                            trigger: {
                                global: 'die',
                            },
                            forced: true,
                            popup: false,
                            silent: true,
                            filter(event, player) {
                                return event.player == player.storage.tlbb_muwanqingjueshi_two;
                            },
                            content() {
                                player.removeSkill('tlbb_muwanqingjueshi_two');
                            },
                        },
                        two: {
                            group: 'tlbb_muwanqingjueshi_die',
                            onremove(player) {
                                delete player.storage.tlbb_muwanqingjueshi_two;
                            },
                            intro: {
                                content: '.',
                            },
                            trigger: {
                                global: 'useCard',
                            },
                            audio: 'ext:金庸群侠传/peiyin:2',
                            forced: true,
                            filter(event, player) {
                                if (!event.targets || event.targets.length != 1 || event.targets.includes(player)) return false;
                                if (event.player.sex == event.targets[0].sex) return false;
                                if (player.storage.tlbb_muwanqingjueshi_two && player.storage.tlbb_muwanqingjueshi_two.isIn()) {
                                    if (event.player == player) {
                                        return event.targets[0].countDiscardableCards(player.storage.tlbb_muwanqingjueshi_two, 'he');
                                    }
                                    if (event.player == player.storage.tlbb_muwanqingjueshi_two) {
                                        return event.targets[0].countDiscardableCards(player, 'he');
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                if (trigger.player == player) {
                                    event.player = player.storage.tlbb_muwanqingjueshi_two;
                                    event.target = trigger.targets[0];
                                } else {
                                    event.player = player;
                                    event.target = trigger.targets[0];
                                }
                                ('step 1');
                                event.player
                                    .chooseBool('决誓<br>是否弃置' + get.translation(event.target) + '的一张牌？')
                                    .set('ai', function() {
                                        var player = _status.event.player;
                                        var targets0 = _status.event.targets0;
                                        if (get.attitude(targets0, player) <= 0) return true;
                                        return false;
                                    })
                                    .set('targets0', event.target);
                                ('step 2');
                                if (result.bool) {
                                    event.player.line(event.target, 'green');
                                    event.player.discardPlayerCard('he', event.target, true);
                                }
                            },
                        },
                    },
                    trigger: {
                        global: 'gainEnd',
                    },
                    init(player) {
                        player.storage.tlbb_muwanqingjueshi = false;
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    forced: true,
                    filter(event, player) {
                        if (player.storage.tlbb_muwanqingjueshi) return false;
                        if (player.hasSkill('tlbb_muwanqingjueshi_two')) return false;
                        if (!event.source) return false;
                        if (event.player == player || !event.player.hasSex('male')) return false;
                        return event.source == player;
                    },
                    content() {
                        game.log(trigger.player, '成为了', '【绝誓】', '的目标');
                        player.storage.tlbb_muwanqingjueshi_two = trigger.player;
                        player.addSkill('tlbb_muwanqingjueshi_two');
                        player.awakenSkill('tlbb_muwanqingjueshi');
                        player.storage.tlbb_muwanqingjueshi = true;
                    },
                },
                tlbb_yanbing2: {
                    charlotte: true,
                    mod: {
                        cardSavable(card, player) {
                            return false;
                        },
                        cardEnabled(card, player) {
                            return false;
                        },
                    },
                },
                tlbb_yanbing: {
                    trigger: { global: 'damageAfter' },
                    check(event, player) {
                        var num = 0;
                        var history = event.source.getHistory('sourceDamage', function(evt) {
                            return true;
                            //return evt.isPhaseUsing(event.source)
                        });
                        for (var i = 0; i < history.length; i++) {
                            num += history[i].num;
                        }
                        var isTurnedOver = event.source.isTurnedOver();
                        if (get.attitude(player, event.source) > 0) {
                            if (isTurnedOver) return num > 1;
                            if (!isTurnedOver && event.source == player && player.hasSkill('tlbb_xunzhi') && get.attitude(player, event.player) > 0 && num >= 2) return true;
                            return num > 3;
                        } else if (!isTurnedOver) {
                            return num <= 2;
                        }
                        return false;
                        //else return num<=2&&!event.source.needsToDiscard();
                    },
                    logTarget(event, player) {
                        return event.source;
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    filter(event, player) {
                        if (!event.source) return false;
                        //if(!event.isPhaseUsing(event.source)) return false;
                        var history = event.source.getHistory('sourceDamage', function(evt) {
                            return true;
                            //return evt.isPhaseUsing(event.source)
                        });
                        var numx = 0;
                        for (var i = 0; i < history.length; i++) {
                            numx += history[i].num;
                        }
                        return numx > 1;
                        //if(history.length==1&&history[0]==event&&event.num>1) return true;
                        //return history.length>1;
                    },
                    content() {
                        'step 0';
                        var numx = 0;
                        var history = trigger.source.getHistory('sourceDamage', function(evt) {
                            return true;
                            //return evt.isPhaseUsing(trigger.source);
                        });
                        for (var i = 0; i < history.length; i++) {
                            numx += history[i].num;
                        }
                        trigger.source.turnOver();
                        trigger.source.draw(numx);
                        ('step 1');
                        var evt = trigger.getParent('phaseUse');
                        if (evt && evt.name == 'phaseUse' && evt.player == trigger.source) {
                            trigger.source.skip('phaseDiscard');
                            evt.skipped = true;
                        } else {
                            trigger.source.addTempSkill('tlbb_yanbing2');
                        }
                    },
                },
                tlbb_xunzhi: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'phaseJieshuBegin' },
                    forced: true,
                    filter(event, player) {
                        var targets = [],
                            bool = false;
                        var num = 0;
                        var history = player.getHistory('sourceDamage');
                        for (var i = 0; i < history.length; i++) {
                            num += history[i].num;
                            if (history[i].player.isDamaged() && history[i].player.isAlive()) bool = true;
                        }
                        //if(player.getStat('damage')&&player.getStat('damage')>=2) return bool;
                        if (num >= 2) return bool;
                        return false;
                    },
                    content() {
                        'step 0';
                        var targets = [];
                        var history = player.getHistory('sourceDamage');
                        for (var i = 0; i < history.length; i++) {
                            targets.add(history[i].player);
                        }
                        player
                            .chooseTarget(get.prompt2('tlbb_xunzhi'), function(card, player, target) {
                                return _status.event.list.includes(target) && target.isDamaged();
                            })
                            .set('ai', function(target) {
                                return get.attitude(_status.event.player, target);
                            })
                            .set('list', targets);
                        ('step 1');
                        if (result.bool) {
                            result.targets[0].recover();
                            player.turnOver();
                        }
                    },
                    ai: {
                        effect: {
                            player(card, player, target) {
                                if (player.hasSkill('tlbb_yanbing') && get.tag(card, 'damage') && !player.isTurnedOver()) return [10, 0];
                                if (get.tag(card, 'damage') && player.isTurnedOver()) return [10, 0];
                            },
                        },
                    },
                },
                tlbb_bolan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    //audioname:["ywhy_zhangjunbao"],
                    audioname2: {
                        //武将名:引用的技能配音
                        ywhy_zhangjunbao: 'ywhy_bolanzjb',
                    },
                    trigger: { player: 'phaseJieshuBegin' },
                    forced: true,
                    filter(event, player) {
                        var history = player.getHistory('useCard', function(evt) {
                            return evt.isPhaseUsing();
                        });
                        var suits = [];
                        for (var i = 0; i < history.length; i++) {
                            var suit = history[i].card.suit;
                            if (suit) suits.add(suit);
                        }
                        return suits.length;
                    },
                    content() {
                        var history = player.getHistory('useCard', function(evt) {
                            return evt.isPhaseUsing();
                        });
                        var suits = [];
                        for (var i = 0; i < history.length; i++) {
                            var suit = history[i].card.suit;
                            if (suit) suits.add(suit);
                        }
                        player.draw(suits.length * 2);
                    },
                },
                tlbb_qizhao: {
                    subSkill: {
                        lose: {
                            triggered: true,
                            mark: true,
                            marktext2: '气',
                            markimage: 'extension/金庸群侠传/image/icon/jy_avatar_qizhao.jpg',
                            //marktext:"<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jy_avatar_qizhao.jpg>",
                            intro: { content: '扫地僧见你戾气太重,要你放下屠刀,立地成佛.你于出牌阶段内每发动一次技能,你失去一点体力.' },
                            trigger: {
                                player: ['logSkillBegin', 'useSkillBegin'],
                            },
                            popup: false,
                            filter(event, player) {
                                var info = get.info(event.skill);
                                if (info && info.triggered) return false;
                                if (_status.currentPhase != player) return false;
                                return true; //_status.event.name=='phaseUse'||_status.event.getParent('phaseUse').name=='phaseUse';
                            },
                            forced: true,
                            content() {
                                player.loseHp();
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'phaseZhunbeiBegin',
                    },
                    filter(event, player) {
                        if (event.player == player) return false;
                        if (event.player.hasSkill('tlbb_qizhao_lose')) return false;
                        return player.countCards('h') >= 2;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player.chooseToDiscard(2, 'h', '是否弃置两张手牌令' + get.translation(trigger.player) + '此回合发动技能失去一点体力？').set('ai', function(card) {
                            var att = get.attitude(_status.event.player, trigger.player);
                            if (att < 0) {
                                return 5 - get.value(card);
                            }
                            return -1;
                        });
                        ('step 1');
                        if (result.bool) {
                            trigger.player.addTempSkill('tlbb_qizhao_lose');
                        }
                    },
                },
                tlbb_shuofa: {
                    init(player) {
                        player.storage.tlbb_shuofa = false;
                    },
                    mark: true,
                    marktext2: '法',
                    markimage: 'extension/金庸群侠传/image/icon/jyshuofa.jpg',
                    //marktext:"<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jyshuofa.jpg>",
                    intro: { content: 'limited' },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'useCard' },
                    check(event, player) {
                        var att = get.attitude(player, event.player);
                        var att2 = get.attitude(player, event.targets[0]);
                        if (att < 0 && att2 > 0 && event.targets.length == 1) {
                            return event.player.hp > event.targets[0].hp && event.player.countCards('e') - event.targets[0].countCards('e') > 1;
                        }
                        return false;
                    },
                    logTarget(event, player) {
                        var targets = [event.player];
                        targets.addArray(event.targets);
                        return targets;
                    },
                    filter(event, player) {
                        if (player.storage.tlbb_shuofa) return false;
                        if (event.player == player) return false;
                        if (event.card.name != 'juedou') return false;
                        return event.targets && event.targets.length;
                    },
                    content() {
                        'step 0';
                        trigger.excluded.addArray(
                            game.filterPlayer(function(current) {
                                return true;
                            })
                        );
                        player.storage.tlbb_shuofa = true;
                        player.awakenSkill('tlbb_shuofa');
                        ('step 1');
                        var targets = [trigger.player];
                        targets.addArray(trigger.targets);
                        for (var i = 0; i < targets.length; i++) {
                            targets[i].say(['你是何人？', '为何要多管闲事？', '你这老和尚,我等死斗与你何干？', '少林寺何时有这样一位高手？'].randomGet());
                            var cards = targets[i].getCards('e');
                            if (cards.length) targets[i].discard(cards);
                            var num = targets[i].hp - 1;
                            if (num > 0) {
                                targets[i].loseHp(num);
                            }
                        }
                    },
                },
                tlbb_huanshi: {
                    init(player, skill) {
                        if (!player.storage[skill]) player.storage[skill] = [];
                    },
                    audio: 'ext:金庸群侠传/peiyin:4', //因还拖必然联动触发换斗,为避免配音太吵,将所有配音合并在此技能上
                    group: ['tlbb_huanshi_remove'],
                    trigger: {
                        global: ['logSkillBegin', 'useSkillBegin'],
                    },
                    popup: false,
                    marktext2: '还',
                    markimage: 'extension/金庸群侠传/image/icon/jyhuanshi.jpg',
                    intro: {
                        content(storage) {
                            if (!storage.length) {
                                return '未获得技能';
                            } else {
                                var str = '<ul style="padding-top:0;margin-top:0">';
                                for (var i = 0; i < storage.length; i++) {
                                    str += '<li>' + get.translation(storage[i]) + ':未发动';
                                }
                                str += '</ul>';
                                return str;
                            }
                        },
                    },
                    filter(event, player) {
                        if (event.player == player) return false;
                        var info = get.info(event.skill);
                        if (info.zhuSkill || info.unique || info.forced) return false;
                        if (player.getStorage('tlbb_huanshi').length >= 7) return false;
                        if (player.getStorage('tlbb_huanshi_remove2').includes(event.skill)) return false;
                        if (player.hasSkill(event.skill, false, false, true)) return false;
                        return !player.getStorage('tlbb_huanshi').includes(event.skill);
                    },
                    content() {
                        'step 0';
                        player.addTempSkill('tlbb_huanshi_remove2');
                        player.markAuto('tlbb_huanshi_remove2', [trigger.skill]);
                        player.markAuto('tlbb_huanshi', [trigger.skill]);
                        player.addAdditionalSkills('tlbb_huanshi', trigger.skill, true);
                        ('step 1');
                        if (player.hasSkill('tlbb_huandou')) {
                            player.useSkill('tlbb_huandou');
                        }
                    },
                    ai: {
                        threaten: 1.3,
                    },
                    subSkill: {
                        remove2: {
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            onremove(player, skill) {
                                player.storage[skill] = [];
                            },
                            charlotte: true,
                        },
                        remove: {
                            trigger: {
                                player: ['logSkillBegin', 'useSkillBegin'],
                            },
                            forced: true,
                            popup: false,
                            logSkilled: true,
                            filter(event, player) {
                                return player.getStorage('tlbb_huanshi').includes(event.skill);
                            },
                            content() {
                                player.unmarkAuto('tlbb_huanshi', [trigger.skill]);
                                player.removeAdditionalSkills('tlbb_huanshi', trigger.skill);
                                if (player.hasSkill('tlbb_huandou')) {
                                    player.useSkill('tlbb_huandou');
                                }
                            },
                        },
                    },
                },
                tlbb_huandou: {
                    content() {
                        'step 0';
                        player.draw();
                        ('step 1');
                        if (
                            player.countCards('he', function(card) {
                                return lib.filter.cardDiscardable(card, player, 'tlbb_huandou');
                            })
                        )
                            player.chooseToDiscard(1, 'he', true);
                    },
                },
                tlbb_misan: {
                    subSkill: {
                        use: {
                            init(player, skill) {
                                player.storage[skill] = [];
                            },
                            trigger: { player: 'useCardEnd' },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                if (!event.cards || event.cards.length != 1) return false;
                                var suit = event.card.suit;
                                if (suit && !player.getStorage('tlbb_misan_use').includes(suit)) return true;
                                return false;
                            },
                            charlotte: true,
                            mark: true,
                            marktext2: '迷',
                            markimage: 'extension/金庸群侠传/image/icon/jysanxiaoavatar.jpg',
                            intro: {
                                content(storage) {
                                    if (!storage.length) {
                                        return "你已中<三笑逍遥散><br>未使用过有花色的牌<br>'<img style=width:165px src=extension/金庸群侠传/image/avatar/jy_avatar_xiaoyansan.jpg>'";
                                    } else {
                                        var str = '每当使用第三种花色的牌时受到一点无来源的伤害';
                                        str += ',<br>已使用过' + get.translation(storage[0]);
                                        for (var i = 1; i < storage.length; i++) {
                                            str += '、' + get.translation(storage[i]);
                                        }
                                        str += '牌<br><img style=width:165px src=extension/金庸群侠传/jysanxiao.jpg>';
                                        return str;
                                    }
                                },
                            },
                            content() {
                                player.markAuto('tlbb_misan_use', [trigger.card.suit]);
                                var list = player.getStorage('tlbb_misan_use');
                                if (list.length >= 3) {
                                    player.unmarkAuto('tlbb_misan_use', list);
                                    game.playJY(['tlbb_misan1', 'tlbb_misan2'].randomGet()); //迷散子技能配音
                                    player.damage(1, 'nosource');
                                }
                            },
                        },
                    },
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    filter(event, player) {
                        return game.hasPlayer(function(current) {
                            return !current.hasSkill('tlbb_misan_use');
                        });
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt('tlbb_misan'), function(card, player, target) {
                                return !target.hasSkill('tlbb_misan_use');
                            })
                            .set('ai', function(target) {
                                return -get.attitude(player, target);
                            });
                        ('step 1');
                        if (result.bool) {
                            result.targets[0].addSkill('tlbb_misan_use');
                        }
                    },
                },
                tlbb_fugong: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'damageBegin',
                    },
                    check(event, player) {
                        var card;
                        if (event.card) {
                            card = event.card;
                            card.nature = 'fire';
                        }
                        if (
                            event.player.hasSkillTag('filterDamage', null, {
                                player: event.source,
                                card: card,
                            })
                        )
                            return false;
                        var bool = player.hasCard(function(card) {
                            var val = get.value(card);
                            if (val < 0) return true;
                            if (val <= 5) {
                                return card.number >= 11;
                            }
                            if (val <= 6) {
                                return card.number >= 12;
                            }
                            return false;
                        });
                        if (bool) return get.damageEffect(event.player, player, player, 'fire') > 0;
                        return false;
                    },
                    logTarget: 'player',
                    filter(event, player) {
                        return event.player != player && player.canCompare(event.player);
                    },
                    content() {
                        'step 0';
                        player.chooseToCompare(trigger.player);
                        ('step 1');
                        if (result.bool) {
                            trigger.num++;
                            game.setNature(trigger, 'jy_du');
                        } else {
                            player.damage(1, trigger.player, 'jy_du');
                        }
                    },
                },
                tlbb_tongyan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'judge' },
                    filter(event, player) {
                        if (event.fixedResult && event.fixedResult.suit) return event.fixedResult.suit != 'heart';
                        return player.judging[0].suit != 'heart';
                    },
                    forced: true,
                    content() {
                        game.log(player, '将判定结果改为了', '#y♥️️');
                        if (!trigger.fixedResult) trigger.fixedResult = {};
                        trigger.fixedResult.suit = 'heart';
                        trigger.fixedResult.color = 'red';
                    },
                    //mod:{
                    //suit:function(card,suit){
                    //if(suit!='heart'&&get.position(card)!='e'&&get.position(card)!='h') return 'heart';
                    //},
                    //},
                    ai: {
                        effect: {
                            target(card, player, target) {
                                if (card.name == 'jydiyshengsifu') return [1, 3];
                                if (card.name == 'shandian') return [1, 3];
                                if (card.name == 'lebu') return [1, 0, 1, -1];
                                if (card.name == 'bingliang') return [1, 0, 1, 0.5];
                                if (card.name == 'caomu') return [1, 0, 1, 0.5];
                                if (card.name == 'bagua') return [1, 3];
                                if (card.name == 'jydiytaohuazhen') return [1, 3];
                            },
                        },
                    },
                },
                tlbb_liuyang: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'judge',
                    },
                    forced: true,
                    filter(event, player) {
                        return game.hasPlayer(function(current) {
                            return current.countCards('e');
                        });
                    },
                    content() {
                        'step 0';
                        var str = get.translation(trigger.player) + '的' + (trigger.judgestr || '');
                        str += '判定为' + get.translation(trigger.player.judging[0]) + ',';
                        str += get.prompt('tlbb_liuyang');
                        var dialog = [str];
                        var players = game.filterPlayer();
                        for (var i of players) {
                            var cards = i.getCards('e');
                            if (cards.length) {
                                dialog.push('<div class="text center">【' + get.translation(i) + '】的装备牌</div>');
                                dialog.push(cards);
                            }
                        }
                        player
                            .chooseButton(dialog, function(button) {
                                var card = button.link;
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                var owner = get.owner(card);
                                var att1 = get.sgn(get.attitude(player, owner));
                                var equipValue = get.equipValue(card, owner);
                                //var att=att1*equipValue;
                                var judging = _status.event.judging;
                                var result = trigger.judge(card) - trigger.judge(judging);
                                var attitude = get.sgn(get.attitude(player, trigger.player));
                                var result2 = result * attitude;
                                if (result2 > 0) {
                                    if (att1 <= 0 && equipValue > 0) {
                                        //是敌人且有装备价值的牌
                                        return result2 + equipValue;
                                    } else if (att1 > 0 && equipValue <= 0) {
                                        //是队友且没有装备价值的牌
                                        return result2 + (1 - equipValue);
                                    } else if (att1 > 0 && equipValue > 0) {
                                        //是队友且有装备价值的牌
                                        return 1 / equipValue; //尽量选择价值低的牌
                                    }
                                } else if (result2 == 0) {
                                    if (att1 <= 0 && equipValue > 0) {
                                        //是敌人且有装备价值的牌
                                        return equipValue;
                                    } else if (att1 > 0 && equipValue <= 0) {
                                        //是队友且没有装备价值的牌
                                        return 1 - equipValue;
                                    }
                                }
                                return 0;
                            })
                            .set('judging', trigger.player.judging[0])
                            .set('filterButton', function(button) {
                                var player = _status.event.player;
                                var card = button.link;
                                var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                if (mod2 != 'unchanged') return mod2;
                                var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                if (mod != 'unchanged') return mod;
                                return true;
                            });
                        ('step 1');
                        if (result.bool) {
                            event.forceDie = true;
                            player.respond(result.links, 'tlbb_liuyang', 'highlight', 'noOrdering');
                            result.cards = result.links;
                            var card = result.cards[0];
                            event.card = card;
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.bool) {
                            if (trigger.player.judging[0].clone) {
                                trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                game.broadcast(function(card) {
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
                        rejudge: true,
                        tag: {
                            rejudge: 0.6,
                        },
                    },
                },
                tlbb_duzun: {
                    init(player, skill) {
                        player.storage[skill] = false;
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    derivation: 'tlbb_liuyang',
                    trigger: {
                        global: ['loseAfter', 'addJudgeAfter'],
                    },
                    filter(event, player) {
                        if (player.storage.tlbb_duzun) return false;
                        var count = game.countPlayer((i) => i.countCards('j'));
                        return count == 3;
                    },
                    forced: true,
                    _priority: 3,
                    content() {
                        player.loseMaxHp();
                        player.addSkills('tlbb_liuyang');
                        player.awakenSkill('tlbb_duzun');
                        player.storage.tlbb_duzun = true;
                    },
                },
                tlbb_zhongfu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    subSkill: {
                        use: {
                            position: 'hs',
                            viewAs: { name: 'jydiyshengsifu' },
                            filterCard(card, player, event) {
                                return (
                                    player.canAddJudge({
                                        name: 'jydiyshengsifu',
                                        cards: [card],
                                    }) && get.itemtype(card) == 'card'
                                );
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            log: false,
                        },
                    },
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    filter(event, player) {
                        return event.num > 0;
                    },
                    content() {
                        'step 0';
                        player.draw();
                        ('step 1');
                        if (!player.hasJudge('jydiyshengsifu') && player.countCards('hs')) {
                            var next = player.chooseToUse();
                            next.set('openskilldialog', '种符:是否选择一张手牌当<生死符>使用？');
                            next.set('norestore', true);
                            next.set('_backupevent', 'tlbb_zhongfu_use');
                            next.set('custom', { add: {}, replace: { window() { } } });
                            next.backup('tlbb_zhongfu_use');
                        }
                    },
                },
                tlbb_yuanmeng: {
                    trigger: {
                        player: 'phaseDrawEnd',
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    forced: true,
                    filter(event, player) {
                        if (!player.countCards('h')) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt('tlbb_yuanmeng'), function(card, player, target) {
                                return target != player;
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(player, target);
                                var phs1 = player.countCards('h', { color: 'black' }) + target.countCards('h', { color: 'black' });
                                var phs2 = player.countCards('h', { color: 'red' }) + target.countCards('h', { color: 'red' });
                                var hs = player.countCards('h');
                                var red = phs2 - hs;
                                var black = phs1 - hs;
                                if (att <= 0) {
                                    if (red > 0 && red > black) {
                                        return red;
                                    } else if (black > 0 && red < black) {
                                        return black;
                                    } else if (black > 0 && red == black) {
                                        return black;
                                    } else return -1;
                                }
                                return -1;
                            });
                        ('step 1');
                        if (result.bool) {
                            var hs = player.getCards('h');
                            player.give(hs, result.targets[0], true);
                            //result.targets[0].gain(hs,player,'gain2','log');
                            event.tar = result.targets[0];
                        } else {
                            event.finish();
                            return;
                        }
                        ('step 2');
                        player.chooseControl('红色', '黑色', function(event, player) {
                            if (event.tar.countCards('h', { color: 'black' }) > event.tar.countCards('h', { color: 'red' })) return '黑色';
                            return '红色';
                        });
                        ('step 3');
                        if (result.control == '红色') {
                            var cards = event.tar.getCards('h', { color: 'red' });
                            if (cards.length) {
                                event.tar.give(cards, player, true);
                                //player.gain(cards,event.tar,'gain2','log');
                            }
                        } else {
                            var cards = event.tar.getCards('h', { color: 'black' });
                            if (cards.length) {
                                event.tar.give(cards, player, true);
                                //player.gain(cards,event.tar,'gain2','log');
                            }
                        }
                    },
                },
                tlbb_niezhai: {
                    init(player, skill) {
                        player.storage[skill] = [];
                    },
                    trigger: {
                        player: 'phaseZhunbeiBefore',
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    filter(event, player) {
                        var skills = lib.skill.tlbb_niezhai.derivation;
                        var list = [];
                        for (var i = 0; i < skills.length; i++) {
                            if (!player.hasSkill(skills[i]) && !player.storage.tlbb_niezhai.includes(skills[i])) {
                                list.push(skills[i]);
                            }
                        }
                        if (list.length) {
                            return (
                                game.countPlayer(function(current) {
                                    return current.hasSex('female');
                                }) == 0
                            );
                        }
                        return false;
                    },
                    derivation: ['tlbb_yuanmeng', 'tlbb_jimie', 'tlbb_xiujian', 'tlbb_chouchang', 'tlbb_juanzhi', 'tlbb_buyao'],
                    content() {
                        'step 0';
                        var skills = lib.skill.tlbb_niezhai.derivation;
                        var list = [];
                        for (var i = 0; i < skills.length; i++) {
                            if (!player.hasSkill(skills[i]) && !player.storage.tlbb_niezhai.includes(skills[i])) {
                                list.push(skills[i]);
                            }
                        }
                        if (list.length) {
                            player.jy_chooseSkill(list).set('callback', function(result, player, target) {
                                for (var i of result.links) {
                                    player.addTempSkills(i);
                                    player.storage.tlbb_niezhai.push(i);
                                }
                            });
                        }
                    },
                },
                tlbb_lanqing: {
                    group: ['tlbb_lanqing_draw'],
                    subSkill: {
                        draw: {
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            forced: true,
                            audio: 'tlbb_lanqing',
                            filter(event, player) {
                                if (event.numFixed) return false;
                                return (
                                    game.countPlayer(function(current) {
                                        return current.hasSex('female');
                                    }) > 0
                                );
                            },
                            content() {
                                var num = game.countPlayer(function(current) {
                                    return current.hasSex('female');
                                });
                                trigger.num += num;
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:6',
                    trigger: {
                        player: 'phaseUseEnd',
                    },
                    forced: true,
                    filter(event, player) {
                        return (
                            game.countPlayer(function(current) {
                                return current != player && current.hasSex('female') && player.countDiscardableCards(current, 'he');
                            }) > 0
                        );
                    },
                    content() {
                        'step 0';
                        event.targets = game
                            .filterPlayer(function(current) {
                                return current != player && current.hasSex('female');
                            })
                            .sortBySeat();
                        ('step 1');
                        if (targets.length) {
                            var target = targets.shift();
                            event.target = target;
                            if (!target.isIn()) {
                                event.redo();
                                return;
                            }
                            if (!player.countDiscardableCards(target, 'he')) {
                                event.redo();
                                return;
                            }
                            target.addTempClass('target');
                            var str = '滥情<br>是否弃置<span style="color: #FF00FF">' + get.translation(player) + '</span>的一张牌?';
                            target.discardPlayerCard(str, player, 'he');
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.bool) {
                            target.line(player, 'green');
                            target.say(['负心汉!', '段郎,你跟不跟我走？', '花花公子!', '风流成性!'].randomGet());
                        }
                        event.goto(1);
                    },
                },
                tlbb_qianzui: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'phaseJieshuEnd' },
                    logTarget: 'player',
                    check(event, player) {
                        return get.attitude(player, event.player) <= 0;
                    },
                    filter(event, player) {
                        return event.player != player && event.player.isIn() && !event.player.getHistory('sourceDamage').length && !event.player.hasMark('tlbb_lin');
                    },
                    content() {
                        player.draw(2);
                        trigger.player.addMark('tlbb_lin', 1);
                    },
                },
                tlbb_lin: {
                    marktext2: '磷',
                    markimage: 'extension/金庸群侠传/image/icon/jydulinavatar.jpg',
                    mark: true,
                    forced: true,
                    intro: { content: '你已中【硝磷】<BR><img style=width:165px src=extension/金庸群侠传/image/avatar/jy_avatar_dulin.jpg>' },
                },
                tlbb_feilin: {
                    trigger: {
                        global: 'damageAfter',
                    },
                    //usable:1,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    forced: true,
                    filter(event, player) {
                        if (event.tlbb_feilin_damage) return false;
                        if (event.nature == 'fire')
                            return game.hasPlayer(function(current) {
                                return current.hasMark('tlbb_lin');
                            });
                        return false;
                    },
                    logTarget(event, player) {
                        return game.filterPlayer(function(current) {
                            return current.hasMark('tlbb_lin');
                        });
                    },
                    content() {
                        'step 0';
                        event.targets = game.filterPlayer(function(current) {
                            return current.hasMark('tlbb_lin');
                        });
                        event.num = 0;
                        event.targets.sort(lib.sort.seat);
                        ('step 1');
                        if (event.num < event.targets.length) {
                            var target = event.targets[event.num];
                            target.removeMark('tlbb_lin', target.countMark('tlbb_lin'));
                            var next = target.damage('fire', 1, player);
                            next.tlbb_feilin_damage = true;
                            event.num++;
                            event.redo();
                        }
                    },
                },
                tlbb_wuxiang: {
                    subSkill: { backup: {} },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    filter(event, player) {
                        var players = game.filterPlayer();
                        for (var i of players) {
                            var getCards = i.getCards('j');
                            if (getCards.length) {
                                for (var e of getCards) {
                                    var vcard = {
                                        name: e.viewAs || e.name,
                                        suit: e.suit,
                                    };
                                    if (player.countCards('hs', { color: get.color(vcard, false) }) && event.filterCard && event.filterCard({ name: vcard.name }, player, event)) return true;
                                }
                            }
                        }
                        return false;
                    },
                    chooseButton: {
                        dialog(event, player) {
                            var dialog = ui.create.dialog('无相', 'hidden');
                            var players = game.filterPlayer();
                            for (var i of players) {
                                var getCards = i.getCards('j');
                                if (getCards.length) {
                                    dialog.addText('【' + get.translation(i) + '】的判定牌');
                                    var list = [];
                                    for (var e of getCards) {
                                        list.add([e.suit, '', e.viewAs || e.name]);
                                    }
                                    dialog.add([list, 'vcard']);
                                }
                            }
                            return dialog;
                        },
                        filter(button, player) {
                            var player = _status.event.player;
                            var evt = _status.event.parent;
                            var vcard = { name: button.link[2], suit: button.link[0] };
                            if (!player.countCards('hs', { color: get.color(vcard, false) })) return false;
                            return evt.filterCard({ name: vcard.name }, player, evt);
                        },
                        check(button) {
                            var player = _status.event.player;
                            var card = { name: button.link[2] };
                            return player.getUseValue(card);
                        },
                        backup(links, player) {
                            return {
                                filterCard(card, player) {
                                    return get.color(card) == get.color({ suit: links[0][0] }, false);
                                },
                                check(card) {
                                    var playerx = _status.event.player;
                                    if (card.name == links[0][2]) return -1;
                                    if (playerx.needsToDiscard()) return 9 - get.value(card);
                                    return 6 - get.value(card);
                                },
                                audio: 'tlbb_wuxiang',
                                popname: true,
                                selectCard: 1,
                                position: 'hs',
                                viewAs: { name: links[0][2] },
                            };
                        },
                        prompt(links, player) {
                            var color = get.color({ suit: links[0][0] }, false);
                            var str = color == 'red' ? '红色' : '黑色';
                            return '将一张' + str + '手牌当做' + get.translation(links[0][2]) + '使用';
                        },
                    },
                    ai: {
                        order: 1,
                        result: {
                            player(player) {
                                return 1;
                            },
                        },
                    },
                },
                tlbb_guixi: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'phaseJudgeBefore' },
                    forced: true,
                    content() {
                        trigger.cancel();
                    },
                    ai: {
                        effect: {
                            target(card, player, target, current) {
                                if (get.type(card) == 'delay') return 0;
                            },
                        },
                    },
                },
                tlbb_souhun: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    discard: false,
                    lose: false,
                    delay: false,
                    filterCard(card, player, evt) {
                        return lib.filter.cardDiscardable(card, player, evt);
                    },
                    usable: 1,
                    getnum_h(card1, player, target) {
                        var suit = card1.suit;
                        var gains = target.getGainableCards(player, 'h', function(cardx) {
                            var suit2 = cardx.suit;
                            return suit2 == suit;
                        });
                        return gains.length;
                    },
                    getnum_j(card1, player, target) {
                        var suit = card1.suit;
                        var gains = target.getGainableCards(player, 'j', function(cardx) {
                            var suit2 = cardx.suit;
                            return suit2 == suit;
                        });
                        if (gains.length) {
                            gains.sort(function(a, b) {
                                return lib.skill.tlbb_souhun.geteff(a, target) - lib.skill.tlbb_souhun.geteff(b, target);
                            });
                            return -lib.skill.tlbb_souhun.geteff(gains[0], target);
                        }
                        return 0;
                    },
                    geteff(judge, targetx) {
                        var efff = get.effect(
                            targetx,
                            {
                                name: judge.viewAs || judge.name,
                                cards: [judge],
                            },
                            targetx,
                            targetx
                        );
                        return efff;
                    },
                    check(card) {
                        var player = _status.event.player;
                        var players = game.filterPlayer((target) => get.attitude(player, target) < 0);
                        if (players.length) {
                            players.sort(function(a, b) {
                                return lib.skill.tlbb_souhun.getnum_h(card, player, b) - lib.skill.tlbb_souhun.getnum_h(card, player, a);
                            });
                            var num = lib.skill.tlbb_souhun.getnum_h(card, player, players[0]);
                            if (num > 0) {
                                var value = get.value(card);
                                if (value > 0) {
                                    return num + 1 / (value + 1);
                                } else {
                                    return num - value;
                                }
                            }
                        }
                        var players2 = game.filterPlayer((target) => get.attitude(player, target) > 0);
                        if (players2.length) {
                            players2.sort(function(a, b) {
                                return lib.skill.tlbb_souhun.getnum_j(card, player, b) - lib.skill.tlbb_souhun.getnum_j(card, player, a);
                            });
                            var num = lib.skill.tlbb_souhun.getnum_j(card, player, players2[0]);
                            var value = get.value(card);
                            if (num > 0) {
                                if (value > 0) {
                                    return num + 1 / (value + 1);
                                } else {
                                    return num - value;
                                }
                            }
                        }
                        return 0;
                    },
                    filterTarget(card, player, target) {
                        if (ui.selected.cards.length) {
                            var cardx = ui.selected.cards[0];
                            var bool1 = target.getGainableCards(player, 'j', function(cardxs) {
                                return cardxs.suit == cardx.suit;
                            }).length;
                            var bool2 = target.getGainableCards(player, 'h').length;
                            if (bool1) return true;
                            if (bool2) return target != player;
                            return false;
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        player.discard(cards);
                        event.suitx = cards[0].suit;
                        var js = target.getGainableCards(player, 'j', function(cardx) {
                            return cardx.suit == event.suitx;
                        }).length;
                        var hs = target.getGainableCards(player, 'h', function(cardx) {
                            return cardx.suit == event.suitx;
                        }).length;
                        event.hs = hs;
                        var hs2 = target.getGainableCards(player, 'h').length;
                        if (js && hs2 && target != player) {
                            player
                                .chooseControl(function() { })
                                .set('choiceList', ['观看并获得' + get.translation(target) + '手牌并获得其所有' + get.translation(event.suitx) + '手牌', '获得' + get.translation(target) + '一张' + get.translation(event.suitx) + '判定牌'])
                                .set('ai', function() {
                                    if (get.attitude(player, target) > 0) return 1;
                                    return 0;
                                });
                        } else if (js) {
                            event.directindex = 1;
                        } else if (hs2) {
                            event.directindex = 0;
                        }
                        ('step 1');
                        if (result && typeof event.directindex != 'number') {
                            event.directindex = result.index;
                        }
                        if (event.directindex == 0) {
                            if (event.hs > 0) {
                                player
                                    .gainPlayerCard(event.hs, target, 'h', true, 'visible')
                                    .set('ai', function(button) {
                                        return get.value(button.link);
                                    })
                                    .set('filterButton', function(button) {
                                        return button.link.suit == event.suitx;
                                    });
                            } else if (target.countCards('h')) player.viewHandcards(target);
                        } else if (event.directindex == 1) {
                            player.gainPlayerCard(1, target, 'j', true).set('filterButton', function(button) {
                                return button.link.suit == event.suitx;
                            });
                        }
                    },
                    ai: {
                        result: {
                            target(player, target) {
                                if (ui.selected.cards.length) {
                                    var att = get.attitude(player, target);
                                    var cardx = ui.selected.cards[0];
                                    if (att < 0) {
                                        var num = lib.skill.tlbb_souhun.getnum_h(cardx, player, target);
                                        return -num;
                                    }
                                    if (att > 0) {
                                        var num = lib.skill.tlbb_souhun.getnum_j(cardx, player, target);
                                        if (num > 0) return 1;
                                    }
                                    return 0;
                                }
                            },
                        },
                        order: 9,
                    },
                },
                tlbb_suyuanlql: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    subSkill: {
                        die: {
                            trigger: {
                                global: 'die',
                            },
                            charlotte: true,
                            forceDie: true,
                            forced: true,
                            popup: false,
                            silent: true,
                            filter(event, player) {
                                return event.player == player.storage.tlbb_suyuanlql_two;
                            },
                            content() {
                                player.removeSkill('tlbb_suyuanlql_two');
                                var target = player.storage.tlbb_suyuanlql_two;
                                target.removeSkill('tlbb_suyuanlql_two');
                                delete target.storage.tlbb_suyuanlql_two;
                                delete player.storage.tlbb_suyuanlql_two;
                            },
                        },
                        two: {
                            group: 'tlbb_suyuanlql_die',
                            marktext2: '缘',
                            markimage: 'extension/金庸群侠传/image/icon/jyshuyuan.jpg',
                            mark: true,
                            intro: {
                                content: '与$处于<良缘>状态.',
                            },
                            trigger: {
                                player: 'loseEnd',
                            },
                            charlotte: true,
                            logTarget(event, player) {
                                return player.storage.tlbb_suyuanlql_two;
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.tlbb_suyuanlql_two && player.storage.tlbb_suyuanlql_two.isIn()) {
                                    if (_status.currentPhase != player) return true;
                                }
                                return false;
                            },
                            async content(event, trigger, player) {
                                game.playJY(['tlbb_suyuanlql1', 'tlbb_suyuanlql2'].randomGet());
                                player.storage.tlbb_suyuanlql_two.draw();
                            },
                        },
                    },
                    init(player) {
                        player.storage.tlbb_suyuanlql = false;
                    },
                    intro: {
                        content: 'limited',
                    },
                    mark: true,
                    marktext2: '夙',
                    markimage: 'extension/金庸群侠传/image/icon/jyshuyuan.jpg',
                    enable: 'phaseUse',
                    filterTarget(card, player, target) {
                        return !target.hasSkill('tlbb_suyuanlql_two') && target.hasSex('male') && target != player;
                    },
                    filter(event, player) {
                        if (player.storage.tlbb_suyuanlql) return false;
                        return (
                            game.countPlayer(function(current) {
                                return !current.hasSkill('tlbb_suyuanlql_two') && current != player && current.hasSex('male');
                            }) > 0
                        );
                    },
                    content() {//QQQ
                        player.storage.tlbb_suyuanlql_two = target;
                        player.addSkill('tlbb_suyuanlql_two');
                        target.storage.tlbb_suyuanlql_two = player;
                        target.addSkill('tlbb_suyuanlql_two');
                        player.storage.tlbb_suyuanlql = true;
                        player.awakenSkill('tlbb_suyuanlql');
                    },
                    ai: {
                        order: 9,
                        result: {
                            target(player, target) {
                                return 2;
                            },
                        },
                        threaten: 2,
                    },
                },
                tlbb_chungui: {
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'gainAfter' },
                    forced: true,
                    filter(event, player) {
                        var evt = event.getParent(2);
                        if (!event.player.hasSex('male')) return false;
                        if (_status.currentPhase != event.player) return false;
                        if (evt.name == 'tlbb_chungui') return false;
                        if (evt.name == 'phaseDraw') return false;
                        return event.cards && event.cards.length;
                    },
                    content() {
                        'step 0';
                        trigger.player
                            .chooseBool('是否发动【' + get.translation(player) + '】的【春闺】？')
                            .set('ai', function() {
                                var player = _status.event.player;
                                var targets0 = _status.event.targets0;
                                if (get.attitude(targets0, player) > 0) return true;
                                return false;
                            })
                            .set('targets0', player);
                        ('step 1');
                        if (result.bool) {
                            var num = trigger.cards.length;
                            player.draw(num);
                            if (num > 1) player.chooseToDiscard(num - 1, 'he', true);
                        } else {
                            player.getStat('triggerSkill').tlbb_chungui--;
                            event.finish();
                        }
                    },
                },
                tlbb_fuji: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'phaseBefore', player: 'enterGame' },
                    forced: true,
                    filter(event, player) {
                        return game.players.length > 2 && (event.name != 'phase' || game.phaseNumber == 0);
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget('伏击:请选择一名不为盟主的其他角色', true, function(card, player, target) {
                                return target != player && target != game.zhu;
                            })
                            .set('ai', function(target) {
                                return Math.random();
                            }).animate = false;
                        ('step 1');
                        if (result.bool) {
                            var target = result.targets[0];
                            player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
                            event.target = target;
                            player.storage.tlbb_fuji = target;
                            //if(!player.storage.tlbb_fuji)player.storage.tlbb_fuji=target;
                        }
                        ('step 2');
                        var targets = event.target;
                        player.chooseControl('忠臣', '反贼', '内奸').ai = function(event, player) {
                            if (targets.identity == 'zhong') return '反贼';
                            if (targets.identity == 'fan') return '忠臣';
                            if (targets.identity == 'nei') return '内奸';
                        };
                        ('step 3');
                        event.control = result.control;
                        player.popup(event.control);
                        player.storage.tlbb_fuji1 = { 忠臣: 'zhong', 反贼: 'fan', 内奸: 'nei' }[event.control];
                        //if(event.control=="忠臣")player.storage.tlbb_fuji1+=1;
                        //if(event.control=="反贼")player.storage.tlbb_fuji1+=2;
                        //if(event.control=="内奸")player.storage.tlbb_fuji1+=3;
                    },
                    group: 'tlbb_fuji_choose',
                    subSkill: {
                        choose: {
                            trigger: { global: 'useCard2' },
                            forced: true,
                            filter(event, player) {
                                var target = player.storage.tlbb_fuji;
                                if (!target) return false;
                                if (event.card.name == 'wuxie') return false;
                                if (!target.isAlive()) return false;
                                if (target == event.player) return false;
                                if (event.targets.includes(target) || !lib.filter.targetEnabled2(event.card, event.player, target)) return false;
                                var group = get.jy_group(event.player);
                                var type = get.type(event.card);
                                return (type == 'basic' || type == 'trick') && group == 'hanren';
                            },
                            content() {
                                'step 0';
                                event.players = trigger.player;
                                event.targets = player.storage.tlbb_fuji;
                                event.players
                                    .chooseTarget('是否指定伏击角色为额外目标', function(card, player, target) {
                                        if (target != event.targets) return false;
                                        return lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                                    })
                                    .set('ai', function(target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.players.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
                                    trigger.targets.push(target);
                                    game.log(event.players, '不做人啦!!!!');
                                    if (!player.storage.tlbb_fuji_target) player.storage.tlbb_fuji_target = [];
                                    player.storage.tlbb_fuji_target.push(event.players);
                                }
                            },
                        },
                    },
                },
                tlbb_mengbi: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { target: 'useCardToTargeted' },
                    filter(event, player) {
                        if (!player.storage.tlbb_fuji_target) return false;
                        if (event.player == player) return false;
                        var type = get.type(event.card),
                            color = get.color(event.card);
                        if (color != 'red' && color != 'black') return false;
                        return (type == 'basic' || type == 'trick') && player.storage.tlbb_fuji_target.includes(event.player);
                    },
                    prompt: '是否发动【蒙庇】？',
                    prompt2(event, player) {
                        var color = get.color(event.card);
                        if (color == 'black') {
                            return '令' + get.translation(event.card) + '对你无效';
                        }
                        return '摸一张牌';
                    },
                    check(event, player) {
                        var color = get.color(event.card);
                        if (color == 'black') {
                            player.storage._tlbb_mengbi = true;
                            var eff = get.effect(player, event.card, event.player, player);
                            delete player.storage._tlbb_mengbi;
                            return eff < 0;
                        }
                        return true;
                    },
                    content() {
                        if (get.color(trigger.card) == 'black') {
                            trigger.parent.excluded.add(player);
                            var evt = trigger.parent;
                            if (evt.cards.length) {
                                game.log(evt.card, '(', evt.cards, ')', '对', player, '无效!');
                            } else {
                                game.log(evt.card, '对', player, '无效!');
                            }
                        } else {
                            player.draw();
                        }
                    },
                    ai: {
                        effect: {
                            target(card, player, target, current) {
                                if (target.storage._tlbb_mengbi) return;
                                if (target.storage._tlbb_mengbi2) return;
                                var color = get.color(card);
                                if (target.storage.tlbb_fuji_target && target.storage.tlbb_fuji_target.includes(player)) {
                                    if (color == 'black' && get.attitude(player, target) < 0) {
                                        target.storage._tlbb_mengbi2 = true;
                                        var eff = get.effect(target, card, player, player);
                                        delete target.storage._tlbb_mengbi2;
                                        if (eff > 0) return 'zeroplayertarget';
                                    }
                                    if (color == 'red') return [1, 0.6];
                                }
                            },
                        },
                    },
                },
                tlbb_zhangxing: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    //nobracket:true,
                    trigger: { player: 'phaseJieshuBegin' },
                    forced: true,
                    content() {
                        if (player.hp > 1) player.loseHp();
                        if (!player.storage.tlbb_fuji_target) return;
                        var num = game.countPlayer(function(current) {
                            return player.storage.tlbb_fuji_target.includes(current);
                        });
                        player.draw(num);
                    },
                },
                tlbb_jiedi: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'die' },
                    forceDie: true,
                    derivation: 'tlbb_zhangxing',
                    forced: true,
                    filter(event, player) {
                        if (player.storage.tlbb_fuji != event.player) return false;
                        var target = event.player;
                        //if(target.identity=="zhong"&&player.storage.tlbb_fuji1!=1) return true;
                        //if(target.identity=="fan"&&player.storage.tlbb_fuji1!=2) return true;
                        //if(target.identity=="nei"&&player.storage.tlbb_fuji1!=3) return true;
                        if (target.identity != player.storage.tlbb_fuji1) return true;
                        return false;
                    },
                    content() {
                        trigger.player.say(['居然被你所害,我死不瞑目……', '阴曹地府,我也不会放过你……'].randomGet());
                        player.say(['一时错信歹人,何期铸此大错!', '贫僧有罪……定当日日祷告佛祖为施主超度……'].randomGet());
                        player.$skill('水落石出');
                        player.gainMaxHp();
                        player.addSkills('tlbb_zhangxing');
                        player.awakenSkill('tlbb_jiedi');
                    },
                },
                tlbb_zhongjian: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'useCard' },
                    usable: 1,
                    logTarget: 'player',
                    filter(event, player) {
                        var info = get.info(event.card);
                        if (info.allowMultiple == false) return false;
                        if (info.multitarget) return false;
                        if (!player.canCompare(event.player)) return false;
                        if (!event.targets || event.targets.length != 1) return false;
                        if (event.card && get.type(event.card) == 'trick' && event.player != player && event.player != event.targets[0]) {
                            return game.hasPlayer(function(current) {
                                return lib.filter.targetEnabled2(event.card, event.player, current) && current != event.targets[0];
                            });
                        }
                        return false;
                    },
                    check(event, player) {
                        if (get.effect(event.targets[0], event.card, player, player) <= 0) {
                            return game.hasPlayer(function(current) {
                                return lib.filter.targetEnabled2(event.card, event.player, current) && current != event.targets[0] && get.effect(current, event.card, player, player) > 0;
                            });
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        player.chooseToCompare(trigger.player);
                        ('step 1');
                        if (result.bool) {
                            var targets = game.filterPlayer(function(current) {
                                return lib.filter.targetEnabled2(trigger.card, trigger.player, current) && current != trigger.targets[0];
                            });
                            if (targets.length == 1) {
                                event.target = targets[0];
                                event.goto(3);
                            } else if (targets.length) {
                                player
                                    .chooseTarget(true, '选择' + get.translation(trigger.card) + '的目标', function(card, player, target) {
                                        return _status.event.list.includes(target);
                                    })
                                    .set('list', targets)
                                    .set('ai', function(target) {
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player);
                                    });
                            } else {
                                trigger.excluded.addArray(game.filterPlayer());
                                game.log('没有', trigger.card, '的合法目标');
                                event.finish();
                                return;
                            }
                        } else {
                            if (lib.filter.targetEnabled2(trigger.card, trigger.player, player)) {
                                event.target = player;
                                event.goto(3);
                            } else {
                                trigger.excluded.addArray(game.filterPlayer());
                                game.log(player, '不是', trigger.card, '的合法目标');
                                event.finish();
                                return;
                            }
                        }
                        ('step 2');
                        if (result.bool && result.targets.length) {
                            event.target = result.targets[0];
                        } else {
                            trigger.excluded.addArray(game.filterPlayer());
                            event.finish();
                            return;
                        }
                        ('step 3');
                        trigger.targets = [event.target];
                        player.line(event.target, 'green');
                        game.log(event.target, '成为了', trigger.card, '的目标');
                    },
                },
                tlbb_chengbian: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: ['chooseToCompareAfter', 'compareMultipleAfter'],
                        target: ['chooseToCompareAfter', 'compareMultipleAfter'],
                    },
                    logTarget(event, player) {
                        if (player == event.player) {
                            if (event.num1 > event.num2) {
                                return event.player;
                            } else {
                                return event.target;
                            }
                        } else {
                            if (event.num1 < event.num2) {
                                return event.target;
                            } else {
                                return event.player;
                            }
                        }
                    },
                    filter(event, player) {
                        if (event.targets && event.targets.length) return false;
                        if (player == event.player) {
                            if (event.num1 > event.num2) {
                                return true;
                            } else {
                                return event.target.countDiscardableCards(player, 'he');
                            }
                        } else {
                            if (event.num1 < event.num2) {
                                return true;
                            } else {
                                return event.player.countDiscardableCards(player, 'he');
                            }
                        }
                        return false;
                    },
                    check(event, player) {
                        if (player == event.player) {
                            if (event.num1 > event.num2) {
                                return true;
                            } else {
                                return get.attitude(player, event.target) <= 0;
                            }
                        } else {
                            if (event.num1 < event.num2) {
                                return true;
                            } else {
                                return get.attitude(player, event.player) <= 0;
                            }
                        }
                    },
                    content() {
                        if (player == trigger.player) {
                            if (trigger.num1 > trigger.num2) {
                                player.draw();
                            } else {
                                player.discardPlayerCard('he', trigger.target, true);
                            }
                        } else {
                            if (trigger.num1 < trigger.num2) {
                                player.draw();
                            } else {
                                player.discardPlayerCard('he', trigger.player, true);
                            }
                        }
                    },
                },
                tlbb_shiwei: {
                    marktext2: '微',
                    markimage: 'extension/金庸群侠传/image/icon/jyshiwei.jpg',
                    intro: { content: '你的拼点牌点数减#' },
                    group: 'tlbb_shiwei_number',
                    subSkill: {
                        number: {
                            trigger: {
                                player: 'compare',
                                target: 'compare',
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (event.iwhile && event.player == player) return false;
                                return player.hasMark('tlbb_shiwei');
                            },
                            content() {
                                if (player == trigger.player) {
                                    trigger.num1 = Math.max(1, trigger.num1 - player.countMark('tlbb_shiwei'));
                                    game.log(player, '拼点牌点数视为', '#y' + trigger.num1);
                                } else {
                                    trigger.num2 = Math.max(1, trigger.num2 - player.countMark('tlbb_shiwei'));
                                    game.log(player, '拼点牌点数视为', '#y' + trigger.num2);
                                }
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: ['chooseToCompareAfter', 'compareMultipleAfter'],
                        target: ['chooseToCompareAfter', 'compareMultipleAfter'],
                    },
                    _priority: -1,
                    forced: true,
                    filter(event, player) {
                        if (event.targets && event.targets.length) return false;
                        return event[player == event.player ? 'num1' : 'num2'] < event[player == event.player ? 'num2' : 'num1'];
                    },
                    content() {
                        player.addMark('tlbb_shiwei', 1);
                    },
                },
                tlbb_xiujian: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    mod: {
                        attackRange(player, distance) {
                            return distance + 2;
                        },
                    },
                    trigger: { player: 'useCard2' },
                    filter(event, player) {
                        if (event.card.name != 'sha') return false;
                        if (!player.countCards('h', { suit: 'diamond' })) return false;
                        return game.hasPlayer(function(current) {
                            return !event.targets.includes(current) && player.canUse(event.card, current);
                        });
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var num = player.countCards('h', { suit: 'diamond' });
                        player
                            .chooseTarget(get.prompt(event.name), '为' + get.translation(trigger.card) + '增加目标', [1, num], function(card, player, target) {
                                return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
                            })
                            .set('sourcex', trigger.targets)
                            .set('ai', function(target) {
                                var player = _status.event.player;
                                return get.effect(target, _status.event.card, player, player);
                            })
                            .set('card', trigger.card);
                        ('step 1');
                        if (result.bool) {
                            event.targets = result.targets;
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        trigger.targets.addArray(event.targets);
                    },
                },
                tlbb_qingheng: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    logTarget: 'player',
                    usable: 1,
                    trigger: { global: 'useCard' },
                    filter(event, player) {
                        if (event.player == player) return false;
                        if (get.type(event.card) == 'equip') return false;
                        if (!event.targets || !event.targets.length) return false;
                        if (player.countCards('h', { suit: 'heart' })) return false;
                        return event.card.suit == 'heart';
                    },
                    check: () => true,
                    check_ai(event, player) {
                        var eff = 0;
                        for (var i = 0; i < event.targets.length; i++) {
                            var target = event.targets[i];
                            var eff1 = get.effect(target, event.card, player, player);
                            eff += eff1;
                        }
                        return eff >= 0;
                    },
                    content() {
                        'step 0';
                        var value = get.attitude(trigger.player, player) > 0 || lib.skill.tlbb_qingheng.check_ai(trigger, trigger.player);
                        //var value=get.attitude(trigger.player,player)>0||(trigger.targets&&trigger.targets.length&&lib.skill.tlbb_qingheng.check_ai(trigger,trigger.player))||trigger.cards.name=='wuxie';
                        trigger.player
                            .chooseBool('情恨<br>是否令' + get.translation(player) + '摸一张牌？否则' + get.translation(trigger.card) + '失效.')
                            .set('ai', function() {
                                return _status.event.value;
                            })
                            .set('value', value);
                        ('step 1');
                        if (result.bool) {
                            trigger.player.line(player);
                            player.draw();
                        } else {
                            trigger.targets.length = 0;
                            trigger.all_excluded = true;
                        }
                    },
                },
                tlbb_zhonggu: {
                    subSkill: {
                        damage: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            _priority: -20,
                            forced: true,
                            filter(event, player) {
                                if (event.num <= 0) return false;
                                return true;
                            },
                            content() {
                                trigger.cancel();
                                player.loseHp(trigger.num);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current, isLink) {
                                        if (!target) return;
                                        if (isLink) return;
                                        if (!get.tag(card, 'damage')) return;
                                        if (get.effect(target, { name: 'losehp' }, player, player) <= 0) return [0.2, 0];
                                    },
                                },
                            },
                        },
                        lose: {
                            trigger: {
                                global: 'damageBegin',
                            },
                            _priority: -20,
                            forced: true,
                            filter(event, player) {
                                if (event.num <= 0) return false;
                                return player.storage.tlbb_zhonggu && player.storage.tlbb_zhonggu == event.player;
                            },
                            content() {
                                player.line(trigger.player, 'green');
                            },
                        },
                    },
                    init(player) {
                        player.storage.tlbb_zhonggu = false;
                    },
                    filter(event, player) {
                        if (!player.countCards('h')) return false;
                        return !player.storage.tlbb_zhonggu;
                    },
                    intro: {
                        content: 'limited',
                    },
                    mark: true,
                    marktext2: '蛊',
                    markimage: 'extension/金庸群侠传/image/icon/jy_avatar_zhonggu.jpg',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    filterCard: true,
                    check(card) {
                        return 9 - get.value(card);
                    },
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    content() {
                        'step 0';
                        player.storage.tlbb_zhonggu = target;
                        target.damage(1, 'fire', 'nosource');
                        ('step 1');
                        player.gainMaxHp();
                        ('step 2');
                        var num = player.maxHp - player.hp;
                        if (num > 0) player.recover(num);
                        player.addSkill('tlbb_zhonggu_lose');
                        target.addSkill('tlbb_zhonggu_damage');
                        player.awakenSkill('tlbb_zhonggu');
                    },
                    ai: {
                        order: 9,
                        result: {
                            target(player, target) {
                                if (player.hp >= player.maxHp) return 0;
                                if (target.hp == 1) return -5;
                                return -1;
                            },
                        },
                    },
                },
                tlbb_zisui: {
                    intro: {
                        content: 'expansion',
                        markcount: 'expansion',
                    },
                    onremove(player, skill) {
                        var cards = player.getExpansions(skill);
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                    marktext2: '恣',
                    markimage: 'extension/金庸群侠传/image/icon/jy_avatar_azhishi.jpg',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'loseHpEnd',
                    },
                    forced: true,
                    filter(event, player) {
                        return event.player != player;
                    },
                    content() {
                        'step 0';
                        event.card = get.cards(1)[0];
                        player.showCards(event.card, '恣睢');
                        ('step 1');
                        if (get.color(event.card, false) == 'red') {
                            player.gain(event.card, 'gain2', 'log');
                        } else {
                            player.addToExpansion(event.card, 'gain2', 'log').gaintag.add('tlbb_zisui');
                        }
                    },
                },
                tlbb_hushi: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { target: 'useCardToTargeted' },
                    filter(event, player) {
                        var cards = player.getExpansions('tlbb_zisui');
                        if (cards.length == 0) return false;
                        if (event.targets && event.targets.length > 1) return false;
                        if (event.player != player) return true;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var cards = player.getExpansions('tlbb_zisui');
                        var str = '是否弃置一张"恃"' + get.translation(trigger.card) + '对你无效';
                        player.chooseCardButton(cards, 1, str).set('ai', function(button) {
                            if (get.effect(player, trigger.card, trigger.player, player) > 0) return -1;
                            return 1;
                        });
                        ('step 1');
                        if (result.bool) {
                            player.loseToDiscardpile(result.links);
                            trigger.parent.excluded.add(player);
                        }
                    },
                },
                tlbb_sekong: {
                    subSkill: { backup: {} },
                    init(player, skill) {
                        var list = get.inpile(function(name) {
                            var vcard = { name: name };
                            var info = get.info(vcard);
                            if (!info.enable) return false;
                            if (info.notarget) return false;
                            return get.type2(vcard, false) == 'trick';
                        });
                        player.markAuto(skill, list);
                    },
                    intro: {
                        mark(dialog, storagex, player) {
                            var storage = player.getStorage('tlbb_sekong');
                            if (!storage.length) return '无';
                            var list = [];
                            for (var i = 0; i < storage.length; i++) {
                                list.push(['锦囊', '', storage[i]]);
                            }
                            dialog.addAuto([list, 'vcard']);
                        },
                        markcount(storage, player) {
                            return storage.length;
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    filter(event, player) {
                        var hs = player.getCards('hs');
                        if (!hs.length) return false;
                        var trick = player.countCards('hs', { type: 'trick' });
                        var delay = player.countCards('hs', { type: 'delay' });
                        var storage = player.getStorage('tlbb_sekong');
                        for (var i = 0; i < storage.length; i++) {
                            if (event.filterCard && event.filterCard({ name: storage[i] }, player, event)) {
                                var type = get.type({ name: storage[i] }, null, false);
                                if (type == 'trick' && delay) return true;
                                if (type == 'delay' && trick) return true;
                            }
                        }
                        return false;
                    },
                    chooseButton: {
                        dialog(event, player) {
                            var tricks = [],
                                delays = [];
                            var dialog = ui.create.dialog('色空', 'hidden');
                            var trick = player.countCards('hs', { type: 'trick' });
                            var delay = player.countCards('hs', { type: 'delay' });
                            var storage = player.getStorage('tlbb_sekong');
                            for (var i = 0; i < storage.length; i++) {
                                if (event.filterCard && event.filterCard({ name: storage[i] }, player, event)) {
                                    var type = get.type({ name: storage[i] }, null, false);
                                    if (type == 'trick' && delay) tricks.push(['锦囊', '', storage[i]]);
                                    if (type == 'delay' && trick) delays.push(['锦囊', '', storage[i]]);
                                }
                            }
                            if (delays.length) {
                                dialog.add('延时锦囊牌');
                                dialog.add([delays, 'vcard']);
                            }
                            if (tricks.length) {
                                dialog.add('非延时锦囊牌');
                                dialog.add([tricks, 'vcard']);
                            }
                            return dialog;
                        },
                        check(button) {
                            var player = _status.event.player;
                            var card = { name: button.link[2] };
                            return player.getUseValue(card);
                        },
                        backup(links, player) {
                            var name = links[0][2];
                            var type = get.type({ name: name }, null, false) == 'trick' ? 'delay' : 'trick';
                            var next = {
                                check(card) {
                                    var playerx = _status.event.player;
                                    if (card.name == name) return -1;
                                    if (playerx.needsToDiscard()) return 9 - get.value(card);
                                    return 6 - get.value(card);
                                },
                                audio: 'tlbb_sekong',
                                filterCard(card, player) {
                                    return get.type(card) == type;
                                },
                                selectCard: 1,
                                popname: true,
                                position: 'hs',
                                viewAs: { name: links[0][2] },
                                precontent() {
                                    player.unmarkAuto('tlbb_sekong', [event.result.card.name]);
                                },
                            };
                            return next;
                        },
                        prompt(links, player) {
                            var name = links[0][2];
                            var type = get.type({ name: name }, null, false) == 'trick' ? '延时锦囊牌' : '非延时锦囊牌';
                            return '将一张' + type + '当作' + get.translation(links[0][2]) + '使用';
                        },
                    },
                    ai: {
                        order: 1,
                        result: { player: 1 },
                        threaten: 1.6,
                    },
                },
                tlbb_juechen: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'useCardEnd' },
                    forced: true,
                    usable: 1,
                    _priority: 5,
                    filter(event, player) {
                        if (get.type(event.card) != 'trick' && get.type(event.card) != 'basic') return false;
                        if (event.cards.length) {
                            return event.cards && event.cards.filterInD('od').length;
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        event.cards = trigger.cards.filterInD('od');
                        ('step 1');
                        if (event.cards.length) {
                            var str = '绝尘<br><br>';
                            if (event.cards.length == 1) {
                                str += '是否其置于牌堆顶?';
                            } else if (event.cards.length > 1) {
                                str += '是否将其按顺序置于牌堆顶(先选择的在上)?';
                            }
                            player.chooseCardButton(event.cards, str, event.cards.length);
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.bool) {
                            var cardss = result.links.slice(0);
                            while (cardss.length) {
                                var target = cardss.pop();
                                target.fix();
                                ui.cardPile.insertBefore(target, ui.cardPile.firstChild);
                            }
                            game.log(player, '将', result.links, '置于牌堆顶');
                        } else {
                            player.getStat('triggerSkill').tlbb_juechen--;
                        }
                    },
                    ai: {
                        threaten: 0.8,
                    },
                },
                tlbb_chansi: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'useCard' },
                    forced: true,
                    _priority: 5,
                    filter(event, player) {
                        var type = get.type(event.card);
                        if (type != 'trick' && type != 'basic') return false;
                        if (!event.targets) return false;
                        return event.targets.some((i) => !i.isLinked());
                    },
                    content() {
                        'step 0';
                        var targets = trigger.targets.filter((i) => !i.isLinked());
                        player
                            .chooseTarget(get.prompt2('tlbb_chansi'), function(card, player, target) {
                                return _status.event.targets.includes(target);
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(_status.event.player, target);
                                if (att <= 0) return 1;
                                if (att > 0) {
                                    if (_status.event.player.hasSkill('tlbb_shijie')) return 0.2;
                                    return -1;
                                }
                            })
                            .set('targets', targets);
                        ('step 1');
                        if (result.bool) {
                            result.targets[0].link();
                        }
                    },
                },
                tlbb_shijie_old: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'damageEnd',
                    },
                    filter(event, player) {
                        return game.hasPlayer(function(current) {
                            return current.isLinked();
                        });
                    },
                    content() {
                        'step 0';
                        event.targets = game.filterPlayer(function(current) {
                            return current.isLinked();
                        });
                        event.num = 0;
                        event.targets.sort(lib.sort.seat);
                        ('step 1');
                        event.targets[event.num]
                            .chooseCard(2, 'he', '是否弃置手牌区和装备区各一张牌并重置侠客牌？否则' + get.translation(player) + '摸一张牌.', function(card, player) {
                                var ca = ui.selected.cards;
                                var pos = get.position(card);
                                if (ca.length == 0) return true;
                                if (ca.length == 1) {
                                    var pos1 = get.position(ca[0]);
                                    if (pos1 == 'e') {
                                        if (pos != 'h') return false;
                                    } else if (pos1 == 'h') {
                                        if (pos != 'e') return false;
                                    }
                                }
                                return true;
                            })
                            .set('ai', function(card) {
                                var att = get.attitude(event.targets[event.num], player);
                                if (att >= 0) return -1;
                                if (att < 0) return 4 - get.value(card);
                            });
                        ('step 2');
                        if (result.bool) {
                            event.targets[event.num].line(player, 'green');
                            event.targets[event.num].link(false);
                            event.num++;
                            if (event.num < event.targets.length) event.goto(1);
                        } else {
                            player.draw();
                            event.targets[event.num].line(player, 'green');
                            event.num++;
                            if (event.num < event.targets.length) event.goto(1);
                        }
                    },
                },
                tlbb_shijie: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'damageEnd',
                    },
                    filter(event, player) {
                        return game.hasPlayer(function(current) {
                            return current.isLinked();
                        });
                    },
                    forced: true,
                    content() {
                        'step 0';
                        event.count = Math.min(trigger.num, 9);
                        ('step 1');
                        player
                            .chooseControl(['摸牌', '弃牌', 'cancel2'])
                            .set('ai', function(event) {
                                return '摸牌';
                            })
                            .set('prompt', get.prompt(event.name));
                        ('step 2');
                        if (result && result.control && result.control != 'cancel2') {
                            event.targets = game.filterPlayer(function(current) {
                                return current.isLinked();
                            });
                            if (result.control == '摸牌') {
                                player.draw(event.targets.length);
                                event.goto(5);
                            }
                        } else {
                            event.finish();
                        }
                        ('step 3');
                        if (targets.length) {
                            var target = targets.shift();
                            event.target = target;
                            if (!target.isIn()) {
                                event.redo();
                                return;
                            }
                            player.line(target);
                            target.addTempClass('target');
                            target.chooseToDiscard(1).set('ai', function(card) {
                                if (card.name == 'tao') return -10;
                                if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                            });
                        } else {
                            event.goto(5);
                        }
                        ('step 4');
                        if (result.bool == false) {
                            target.damage();
                            target.link(false);
                        }
                        event.goto(3);
                        ('step 5');
                        event.count--;
                        if (
                            event.count > 0 &&
                            game.hasPlayer(function(current) {
                                return current.isLinked();
                            })
                        ) {
                            event.goto(1);
                        }
                    },
                },
                tlbb_gouxian: {
                    trigger: {
                        global: 'judgeBegin',
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    check(event, player) {
                        return game.hasPlayer(function(current) {
                            return current != player && get.attitude(player, current) > 0;
                        });
                    },
                    content() {
                        'step 0';
                        event.cards = get.cards(1);
                        game.log(player, '观看了牌堆顶的一张牌');
                        ('step 1');
                        var dialog = ui.create.dialog('牌堆顶的一张牌<br>', event.cards, '将' + get.translation(event.cards) + '交给一名角色.', true, 'hidden');
                        player
                            .chooseTarget(dialog, true, function(card, player, target) {
                                return true;
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(_status.event.player, target);
                                if (att > 0) {
                                    return target.countCards('h');
                                }
                                return -1;
                            });
                        ('step 2');
                        if (result.bool) {
                            event.target = result.targets[0];
                            player.line(event.target, 'fire');
                            player.give(event.cards, event.target);
                        }
                        ('step 3');
                        var str = get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '即将开始判定';
                        target.chooseCard('h', str, true).set('ai', function(card) {
                            var result = trigger.judge(card);
                            var attitude = get.attitude(target, trigger.player);
                            if (attitude == 0) return -get.value(card);
                            if (attitude > 0) {
                                return (30 - get.value(card)) * result;
                            } else {
                                return (30 - get.value(card)) * -result;
                            }
                        });
                        ('step 4');
                        if (result.bool) {
                            target.lose(result.cards[0], ui.cardPile, 'visible', 'insert');
                            game.log(event.target, '将', result.cards[0], '置于牌堆顶');
                            event.target.$throw(result.cards[0], 1000, 'nobroadcast');
                        }
                    },
                    ai: {
                        expose: 0.1,
                        tag: {
                            rejudge: 0.5,
                        },
                    },
                },
                tlbb_duanzhi1: {
                    trigger: {
                        player: 'useCard',
                    },
                    forced: true,
                    filter(event, player) {
                        if (player.countDisabledSlot() == 0) return false;
                        if (player.countDisabledSlot() == 1) {
                            if (get.color(event.card) != 'black') return false;
                        } else if (player.countDisabledSlot() > 1) {
                            if (get.color(event.card) != 'black' && get.color(event.card) != 'red') return false;
                        }
                        var info = get.info(event.card);
                        if (info.allowMultiple == false) return false;
                        if (event.targets && !info.multitarget) {
                            if (
                                game.hasPlayer(function(current) {
                                    //player.canUse(event.card,current)
                                    return player.canUse(event.card, current) && !event.targets.includes(current);
                                })
                            ) {
                                return true;
                            }
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        var num = player.countDisabledSlot();
                        var prompt2 = '额外指定至多' + num + '';
                        prompt2 += '名' + get.translation(trigger.card) + '的目标';
                        player
                            .chooseTarget([1, num], get.prompt('tlbb_duanzhi'), function(card, player, target) {
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                if (trigger.targets.includes(target)) return false;
                                return player.canUse(trigger.card, target);
                            })
                            .set('prompt2', prompt2)
                            .set('ai', function(target) {
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                return get.effect(target, trigger.card, player, player);
                            });
                        ('step 1');
                        if (result.bool) {
                            event.targets = result.targets;
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (event.targets) {
                            trigger.targets.addArray(event.targets);
                        }
                    },
                },
                tlbb_duanzhi: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    group: 'tlbb_duanzhi1',
                    trigger: {
                        global: 'gameStart',
                        player: ['enterGame', 'phaseZhunbeiBefore'],
                    },
                    forced: true,
                    init(player) {
                        player.storage.tlbb_duanzhi = false;
                        player.storage.tlbb_duanzhinum = 0;
                    },
                    filter(event, player) {
                        if (player.countDisabledSlot() >= 5) return false;
                        return !player.storage.tlbb_duanzhi;
                    },
                    content() {
                        'step 0';
                        var list = [
                            ['装备', '', 'jydiy_tulongdao'],
                            ['装备', '', 'jydiytaohuazhen'],
                            ['装备', '', 'jydiyheimeigui'],
                            ['装备', '', 'jydiyhanxuebaoma'],
                            ['装备', '', 'jydiy_wumuyishu'],
                        ];
                        var str = '<span style="color: #FF0000">断趾:是否废除一个装备栏?</span>';
                        player
                            .chooseButton(1, 'hidden', [str, [list, 'vcard'], 'hidden'])
                            .set('filterButton', function(button) {
                                var card = { name: button.link[2] };
                                var subtype = get.subtype(card);
                                if (player.hasDisabledSlot(subtype)) return false;
                                return true;
                            })
                            .set('ai', function(button) {
                                var card = { name: button.link[2] };
                                if (!player.getEquip(card)) return 1;
                                return -1;
                            });
                        ('step 1');
                        if (result.bool) {
                            for (var i of result.links) {
                                var card = { name: i[2] };
                                player.disableEquip(get.subtype(card));
                            }
                            player.storage.tlbb_duanzhinum += result.links.length;
                            if (player.storage.tlbb_duanzhinum >= 2) {
                                player.storage.tlbb_duanzhi = true;
                                //player.awakenSkill('tlbb_duanzhi');
                            }
                        }
                    },
                },
                tlbb_xianji: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'roundStart' },
                    forced: true,
                    filter(event, player) {
                        return player.countDisabledSlot() > 0;
                    },
                    content() {
                        'step 0';
                        var num = player.maxHp;
                        var num2 = player.countCards('h');
                        var num3 = num - num2;
                        if (num3 > 0) player.draw(num3);
                        ('step 1');
                        event.oldcurrentPhase = _status.currentPhase;
                        _status.currentPhase = player;
                        player.phaseUse()._extraPhaseReason = 'tlbb_xianji';
                        ('step 2');
                        _status.currentPhase = event.oldcurrentPhase;
                    },
                },
                tlbb_suohou: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    group: 'tlbb_suohou_sha',
                    subSkill: {
                        sha: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            _priority: -1,
                            filter(event, player) {
                                if (event.skipShan) return false;
                                if (event.directHit && event.target.hasSkill('tlbb_suohou_juli')) return false;
                                return !event.target.hasSkill('tlbb_suohou_juli');
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                var bool1 = !trigger.directHit;
                                var bool2 = !trigger.target.hasSkill('tlbb_suohou_juli');
                                if (bool1 && bool2) {
                                    trigger.target
                                        .chooseControl(function() { })
                                        .set('choiceList', ['令' + get.translation(trigger.card) + '不可闪避', '令所有角色于本局游戏计算你的距离为1'])
                                        .set('ai', function() {
                                            return 1;
                                        });
                                } else if (bool1) {
                                    event.directindex = 0;
                                } else if (bool2) {
                                    event.directindex = 1;
                                }
                                ('step 1');
                                if (result && typeof event.directindex != 'number') {
                                    event.directindex = result.index;
                                }
                                if (event.directindex == 0) {
                                    trigger.directHit = true;
                                    trigger.target.say('令' + get.translation(trigger.card) + '不可闪避');
                                } else {
                                    trigger.target.say('令所有角色于本局游戏计算我的距离为1');
                                    trigger.target.addSkill('tlbb_suohou_juli');
                                }
                            },
                        },
                        juli: {
                            mark: true,
                            marktext2: '擒',
                            markimage: 'extension/金庸群侠传/image/icon/jy_avatar_shuohou.jpg',
                            intro: {
                                content: '你被锁喉擒拿手所伤,所有其他角色计算与你的距离为1.',
                            },
                            mod: {
                                globalTo(from, to, current) {
                                    return -Infinity;
                                },
                            },
                        },
                    },
                },
                tlbb_suohou_old: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    init(player) {
                        player.storage.tlbb_suohou = [];
                    },
                    intro: {
                        content: 'characters',
                    },
                    group: 'tlbb_suohou_damage',
                    subSkill: {
                        damage: {
                            trigger: {
                                player: 'shaDamage',
                            },
                            _priority: -1,
                            filter(event, player) {
                                if (player.storage.tlbb_suohou.includes(event.target.name)) return false;
                                return true;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                trigger.target.judge(function(card) {
                                    if (card.suit == 'heart') return 2;
                                    return -2;
                                }).judge2 = function(result) {
                                    return result.bool;
                                };
                                ('step 1');
                                if (result.bool == false) {
                                    if (!trigger.target.hasSkill('tlbb_suohou_juli')) trigger.target.addSkill('tlbb_suohou_juli');
                                }
                                ('step 2');
                                if (!player.storage.tlbb_suohou.includes(trigger.target.name)) {
                                    player.storage.tlbb_suohou.push(trigger.target.name);
                                    player.markSkill('tlbb_suohou');
                                }
                            },
                        },
                        juli: {
                            mark: true,
                            marktext2: '擒',
                            markimage: 'extension/金庸群侠传/image/icon/jy_avatar_shuohou.jpg',
                            intro: {
                                content: '你被锁喉擒拿手所伤,所有其他角色计算与你的距离为1.',
                            },
                            mod: {
                                globalTo(from, to, current) {
                                    return -Infinity;
                                },
                            },
                        },
                    },
                },
                tlbb_jianmi: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: ['gainAfter', 'damage'],
                    },
                    forced: true,
                    filter(event, player) {
                        if (event.parent.parent.name == 'tlbb_jianmi') return false;
                        if (event.parent.parent.name == 'phaseDraw') return false;
                        if (event.name == 'damage' && !event.source) return false;
                        if (_status.currentPhase != event[event.name == 'damage' ? 'source' : 'player']) return false;
                        return !event[event.name == 'damage' ? 'source' : 'player'].isPhaseUsing(true);
                    },
                    content() {
                        player.draw().bottom = true;
                    },
                },
                tlbb_daoying: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseZhunbeiBefore',
                    },
                    filter(event, player) {
                        if (lib.card.tlbb_daoying_h.filter(event, player)) return true;
                        if (lib.card.tlbb_daoying_e.filter(event, player)) return true;
                        if (lib.card.tlbb_daoying_j.filter(event, player)) return true;
                        return false;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var list = [
                            ['', '', 'tlbb_daoying_h'],
                            ['', '', 'tlbb_daoying_e'],
                            ['', '', 'tlbb_daoying_j'],
                        ];
                        var str = get.prompt2('tlbb_daoying');
                        player
                            .chooseButton(1, 'hidden', [str, [list, 'vcard'], 'hidden'])
                            .set('filterButton', function(button) {
                                var name = button.link[2];
                                return lib.card[name].filter(null, _status.event.player);
                            })
                            .set('ai', function(button) {
                                var name = button.link[2];
                                return lib.card[name].aiNum(_status.event.player);
                            });
                        ('step 1');
                        if (result.bool && result.links) {
                            var link = result.links[0][2];
                            var next = game.createEvent('tlbb_daoying_content', false);
                            next.player = player;
                            next.setContent(lib.card[link].content);
                        }
                    },
                    ai: {
                        result: {
                            target: -1,
                        },
                        threaten: 2,
                        expose: 0.3,
                    },
                },
                tlbb_gouhe: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    _priority: 5,
                    filter(event, player) {
                        if (player.countCards('he') < 2) return false;
                        return (
                            game.countPlayer(function(current) {
                                return current.hasSex('male') && current.hp < current.maxHp;
                            }) > 0
                        );
                    },
                    content() {
                        'step 0';
                        player.chooseCardTarget({
                            position: 'he',
                            filterCard: lib.filter.cardDiscardable,
                            selectCard: 2,
                            filterTarget(card, player, target) {
                                return target.hasSex('male') && target.hp < target.maxHp;
                            },
                            complexCard: true,
                            complexSelect: true,
                            ai1(card) {
                                return 6 - get.value(card);
                            },
                            ai2(target) {
                                return get.attitude(_status.event.player, target);
                            },
                            prompt: get.prompt2('tlbb_gouhe'),
                        });
                        ('step 1');
                        if (result.bool) {
                            player.discard(result.cards);
                            result.targets[0].recover();
                        } else {
                            event.finish();
                        }
                    },
                },
                tlbb_youseng: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    usable: 1,
                    filterTarget(card, player, target) {
                        return true;
                    },
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    content() {
                        if (target.isDamaged()) target.recover();
                        var num = target.countDiscardableCards(player, 'he');
                        var num1 = Math.min(2, num);
                        if (num1 > 0) player.discardPlayerCard(num1, target, true, 'he');
                    },
                    ai: {
                        order: 1,
                        result: {
                            target(player, target) {
                                if (target == player && player.countCards('h', 'tao')) return 0;
                                var bool = get.attitude(player, target) > 0;
                                var discard = target.getDiscardableCards(player, 'he');
                                var num = Math.min(2, discard.length);
                                if (target.isDamaged()) {
                                    if (bool) {
                                        return 2.1 - num;
                                    } else {
                                        return 0;
                                    }
                                } else {
                                    if (bool) {
                                        return 0;
                                    } else {
                                        return -num;
                                    }
                                }
                            },
                        },
                        threaten: 1.2,
                    },
                },
                tlbb_duhui: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'phaseJieshuBegin' },
                    filter(event, player) {
                        return player.countCards('h') > 0;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('tlbb_duhui'), function(card, player, target) {
                                return target != player;
                            })
                            .set('ai', function(target) {
                                var att = get.attitude(player, target);
                                var card = player.getCards('h');
                                var num = 0;
                                if (card.length > 3) return -1;
                                for (var i = 0; i < card.length; i++) {
                                    if (get.tag(card[i], 'recover') >= 1) num++;
                                }
                                if (num == 0 && att > 0 && target.isTurnedOver()) return 1;
                                if (num == 0 && att < 0 && !target.isTurnedOver() && player.hp > 1) return 0.5;
                                return -1;
                            });
                        ('step 1');
                        if (result.bool) {
                            var cards = player.getCards('h');
                            player.discard(cards);
                            event.target = result.targets[0];
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (event.target) {
                            event.target
                                .chooseControl()
                                .set('choiceList', ['自己翻面', '对' + get.translation(player) + '造成一点伤害并令其执行摸牌基数为三的摸牌阶段和出牌阶段'])
                                .set('ai', function() {
                                    var player = _status.event.player;
                                    if (player.isTurnedOver()) return 0;
                                    return 1;
                                });
                        } else {
                            event.finish();
                        }
                        ('step 3');
                        if (result.index == 0) {
                            event.target.turnOver();
                            event.finish();
                        } else {
                            player.damage(1, event.target);
                            player.phaseDraw().set('num', 3);
                            event.oldcurrentPhase = _status.currentPhase;
                            _status.currentPhase = player;
                            player.phaseUse()._extraPhaseReason = 'tlbb_duhui';
                        }
                        ('step 4');
                        _status.currentPhase = event.oldcurrentPhase;
                    },
                },
                tlbb_huoyan: {
                    trigger: { player: 'useCard2' },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    forced: true,
                    usable: 1,
                    filter(event, player) {
                        if (_status.currentPhase != player) return false;
                        var info = get.info(event.card);
                        if (info.allowMultiple == false) return false;
                        if (event.targets && !info.multitarget) {
                            if (
                                game.hasPlayer(function(current) {
                                    return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
                                })
                            ) {
                                return true;
                            }
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        var prompt2 = '额外指定任意名名' + get.translation(trigger.card) + '的目标并翻面？若如此做回合结束时你可以摸X张牌(X为你本回合造成的伤害数量)';
                        player
                            .chooseTarget([1, Infinity], get.prompt('tlbb_huoyan'), function(card, player, target) {
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                if (trigger.targets.includes(target)) return false;
                                return lib.filter.targetEnabled2(trigger.card, player, target);
                            })
                            .set('prompt2', prompt2)
                            .set('ai', function(target) {
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                var History = player.getHistory('sourceDamage');
                                var damagenum = 0;
                                for (var damage of History) {
                                    damagenum += damage.num;
                                }
                                if (damagenum < 2 && trigger.card.name != 'sha') return -1;
                                //if(!get.tag(trigger.card,'damage')) return -1;
                                //if(trigger.card.name=='huogong'&&player.countCards('h')<6) return -1;
                                return get.effect(target, trigger.card, player, player);
                            });
                        ('step 1');
                        if (result.bool) {
                            event.targets = result.targets;
                        } else {
                            player.getStat('triggerSkill').tlbb_huoyan--;
                            event.finish();
                        }
                        ('step 2');
                        if (event.targets) {
                            trigger.targets.addArray(event.targets);
                            player.turnOver();
                            var next = game.createEvent('tlbb_huoyan_clear');
                            event.next.remove(next);
                            next.player = player;
                            trigger.getParent('phase').after.push(next);
                            next.setContent(function() {
                                var History = player.getHistory('sourceDamage');
                                var damagenum = 0;
                                for (var damage of History) {
                                    damagenum += damage.num;
                                }
                                if (damagenum > 0) {
                                    player.draw(damagenum);
                                }
                            });
                        }
                    },
                },
                tlbb_zheju: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    group: ['tlbb_zheju_remove'],
                    subSkill: {
                        remove: {
                            trigger: {
                                player: ['logSkillBegin', 'useSkillBegin'],
                            },
                            forced: true,
                            popup: false,
                            logSkilled: true,
                            filter(event, player) {
                                if (event.player != player) return false;
                                return player.storage.tlbb_zheju && player.storage.tlbb_zheju.includes(event.skill);
                            },
                            content() {
                                player.storage.tlbb_zheju.remove(trigger.skill);
                                player.removeAdditionalSkills('tlbb_zheju', trigger.skill);
                                player.markSkill('tlbb_zheju');
                            },
                        },
                    },
                    trigger: {
                        global: ['logSkillBegin', 'useSkillBegin'],
                    },
                    popup: false,
                    filter(event, player) {
                        if (event.player == player) return false;
                        //if(!event.player.hasSkill(event.skill,'e')) return false;
                        if (player.hasSkill(event.skill, false, false, true)) return false;
                        if (lib.skill.global.includes(event.skill)) return false;
                        if (!['jydiy_jiuyangzhengjing_skill', 'jydiy_jiuyangzhengjing_skill', 'jydiy_kuihuabaidian_skill', 'jydiy_wumuyishu_skill'].includes(event.skill)) return false;
                        return player.storage.tlbb_zheju && !player.storage.tlbb_zheju.includes(event.skill);
                    },
                    init(player, skill) {
                        player.storage[skill] = [];
                    },
                    content() {
                        player.storage.tlbb_zheju.push(trigger.skill);
                        player.addAdditionalSkills('tlbb_zheju', trigger.skill, true);
                        player.markSkill('tlbb_zheju');
                    },
                    intro: {
                        content(storage) {
                            if (!storage.length) {
                                return '未获得技能';
                            } else {
                                var str = '<ul style="padding-top:0;margin-top:0">';
                                for (var i = 0; i < storage.length; i++) {
                                    str += '<li>' + get.translation(storage[i]) + ':未发动';
                                }
                                str += '</ul>';
                                return str;
                            }
                        },
                    },
                },
                tlbb_zheju_old: {
                    trigger: { global: 'useCardAfter' },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    forced: true,
                    usable: 1,
                    filter(event, player) {
                        if (!player.isTurnedOver()) return false;
                        if (!player.countCards('he')) return false;
                        if (event.player == player) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        player
                            .chooseToDiscard(get.prompt('tlbb_zheju'), 1, 'he', '是否弃置一张与' + get.translation(trigger.card) + '类型相同的牌并摸一张牌？', function(card, player) {
                                if (get.type(card) != get.type(trigger.card)) return false;
                                return lib.filter.cardDiscardable.apply(this, arguments);
                            })
                            .set('ai', function(card) {
                                return 6 - get.value(card);
                            });
                        ('step 1');
                        if (result.bool) {
                            player.draw();
                        } else {
                            player.getStat('triggerSkill').tlbb_zheju--;
                        }
                    },
                },
                tlbb_zhemei: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    group: ['tlbb_zhemei_damage'],
                    subSkill: {
                        damage: {
                            trigger: { player: 'damageEnd' },
                            getIndex(event, player, triggername) {
                                return Math.min(event.num, 9) || 1;
                            },
                            filter(event, player) {
                                return game.hasPlayer(function(current) {
                                    return current != player && current.countGainableCards(player, 'ej') > 0;
                                });
                            },
                            cost() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('tlbb_zhemei'), function(card, player, target) {
                                        return target != player && target.countGainableCards(player, 'ej') > 0;
                                    })
                                    .set('ai', function(target) {
                                        const player = _status.event.player;
                                        return get.effect(
                                            target,
                                            {
                                                name: 'shunshou_ai',
                                                position: 'ej',
                                            },
                                            player
                                        );
                                    });
                                ('step 1');
                                event.result = result;
                            },
                            content() {
                                player.gainPlayerCard('ej', event.targets[0], true);
                            },
                        },
                    },
                    trigger: {
                        player: 'gainAfter',
                        global: 'loseAsyncAfter',
                    },
                    getIndex(event, player, triggername) {
                        let count = 0;
                        if (event.name == 'loseAsync' && event.type != 'gain') return false;
                        const hs = player.getCards('h');
                        const gain = event.getg(player);
                        if (gain.length == 0) return false;
                        game.countPlayer(function(current) {
                            const loses = event.getl(current);
                            if (!loses || !loses.cards || !loses.cards.length) return false;
                            const ej = loses.es.concat(loses.js);
                            for (var i of ej) {
                                if (hs.includes(i) && gain.includes(i) && i.suit == 'club') count += 1;
                            }
                        });
                        if (count > 0) return count;
                        return false;
                    },
                    cost() {//QQQ
                        'step 0';
                        player.chooseDrawRecover(get.prompt('tlbb_zhemei'), 2, 1); //懒得将效果放content 里面了
                        ('step 1');
                        if (result.control != 'cancel2') {
                            event.result = { bool: true };
                        } else {
                            event.result = { bool: false };
                        }
                    },
                    content() { },
                },
                tlbb_bingfu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    mark: true,
                    marktext2: '冰',
                    markimage: 'extension/金庸群侠传/image/icon/jybingfu.jpg',
                    init(player, skill) {
                        player.storage[skill] = false;
                    },
                    intro: {
                        content: 'limited',
                    },
                    enable: 'phaseUse',
                    position: 'he',
                    filter(event, player) {
                        if (player.storage.tlbb_bingfu) return false;
                        return player.getCards('he').length >= 2;
                    },
                    filterCard: true,
                    selectCard: 2,
                    check(card) {
                        return 5 - get.value(card);
                    },
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    selectTarget: -1,
                    multitarget: true,
                    multiline: true,
                    content() {
                        'step 0';
                        //event.forceDie=true,
                        event.suits = [];
                        if (Array.isArray(cards)) for (var i of cards) {
                            var suit = i.suit;
                            event.suits.add(suit);
                        }
                        player.storage.tlbb_bingfu = true;
                        player.awakenSkill('tlbb_bingfu');
                        ('step 1');
                        if (targets.length) {
                            var target = targets.shift();
                            event.target = target;
                            if (!target.isIn()) {
                                event.redo();
                                return;
                            }
                            target.addTempClass('target');
                            target
                                .chooseToDiscard(2, 'he', '是否弃置两张与' + get.translation(event.cards) + '组成花色相同的牌？否则受到' + get.translation(player) + '的两点冰属性伤害.', function(card, player) {
                                    var evt = _status.event;
                                    var suit = card.suit;
                                    if (evt.suits.length == 1) {
                                        if (!evt.suits[0] != suit) return false;
                                    } else {
                                        if (!evt.suits.includes(suit)) return false;
                                        if (ui.selected.cards) {
                                            if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
                                                if (i.suit == suit) return false;
                                            }
                                        }
                                    }
                                    return lib.filter.cardDiscardable.apply(this, arguments);
                                })
                                .set('suits', event.suits)
                                .set('ai', function(cardx) {
                                    return 10 - get.value(cardx);
                                })
                                .set('complexCard', true);
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (!result.bool) {
                            target.damage(2, 'ice', player);
                        }
                        event.goto(1);
                    },
                    ai: {
                        order: 11,
                        result: {
                            player: 1,
                        },
                    },
                },
                tlbb_juanzhi: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseDrawBegin1',
                    },
                    filter(event, player) {
                        return !event.numFixed;
                    },
                    check(event, player) {
                        return (
                            game.countPlayer(function(current) {
                                return get.attitude(player, current) < 0 && current != player && current.hasSex('female');
                            }) < 3
                        );
                    },
                    content() {
                        trigger.num += 2;
                        var next = game.createEvent('tlbb_juanzhi_after', false);
                        next.player = player;
                        next.setContent(lib.skill.tlbb_juanzhi.contentx);
                        event.next.remove(next);
                        trigger.after.push(next);
                    },
                    contentx() {
                        'step 0';
                        event.targets = game
                            .filterPlayer(function(current) {
                                return current != player && current.hasSex('female');
                            })
                            .sortBySeat();
                        player.line(event.targets);
                        ('step 1');
                        if (targets.length) {
                            var target = targets.shift();
                            event.target = target;
                            if (!target.isIn()) {
                                event.redo();
                                return;
                            }
                            target.addTempClass('target');
                            target.chooseToUse({
                                prompt: '卷帙',
                                prompt2: '是否对' + get.translation(player) + '使用一张杀？',
                                addCount: false,
                                complexSelect: true,
                                sourcex: player,
                                targetRequired: true,
                                filterCard(card, player, event) {
                                    if (card.name != 'sha') return false;
                                    return lib.filter.filterCard.apply(this, arguments);
                                },
                                filterTarget(card, player, target) {
                                    if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                    return lib.filter.targetEnabled.apply(this, arguments);
                                },
                            });
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        event.goto(1);
                    },
                },
                tlbb_tongyou: {
                    trigger: { global: 'useCard2' },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    _priority: -1,
                    forced: true,
                    filter(event, player) {
                        if (event.player == player) return false;
                        if (event.card.name != 'sha') return false;
                        if (!event.targets.includes(player)) return false;
                        var info = get.info(event.card);
                        if (info.allowMultiple == false) return false;
                        if (event.targets && !info.multitarget) {
                            if (
                                game.hasPlayer(function(current) {
                                    return current.hasSex('male') && lib.filter.targetEnabled2(event.card, event.player, current) && !event.targets.includes(current);
                                })
                            ) {
                                return true;
                            }
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        player.chooseCardTarget({
                            position: 'hs',
                            filterCard: lib.filter.cardDiscardable,
                            filterTarget(card, player, target) {
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                if (trigger.targets.includes(target)) return false;
                                if (!target.hasSex('male')) return false;
                                return lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                            },
                            ai1(card) {
                                return get.value(trigger.card) - get.value(card);
                            },
                            ai2(target) {
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                return get.effect(target, trigger.card, player, player);
                            },
                            prompt: get.prompt('tlbb_tongyou'),
                        });
                        ('step 1');
                        if (result.bool) {
                            player.discard(result.cards);
                            event.targets = result.targets;
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (event.targets) {
                            game.log(event.targets, '额外成为了' + get.translation(trigger.card) + '的目标');
                            trigger.targets.addArray(event.targets);
                        }
                    },
                    ai: {
                        effect: {
                            target(card, player, target) {
                                if (target.countCards('he') == 0) return;
                                if (card.name != 'sha') return;
                                var min = 1;
                                var friend = get.attitude(player, target) > 0;
                                var vcard = { name: 'shacopy', nature: card.nature, suit: card.suit };
                                var players = game.filterPlayer();
                                for (var i of players) {
                                    if (player != i && i.hasSex('male') && get.attitude(target, i) < 0 && player.canUse(card, i, false)) {
                                        if (!friend) return 0;
                                        if (get.effect(i, vcard, player, player) > 0) {
                                            if (!player.canUse(card, i, false)) {
                                                return [0, 0.1];
                                            }
                                            min = 0;
                                        }
                                    }
                                }
                                return min;
                            },
                        },
                    },
                },
                tlbb_fanrui: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    mark: true,
                    marktext2: '繁',
                    markimage: 'extension/金庸群侠传/image/icon/jyfanrui.jpg',
                    //marktext:"<img style='width:33px;height:33px;object-fit:cover;' src=extension/金庸群侠传/image/icon/jyfanrui.jpg>",
                    complexCard: true, //此行20210506修复补充
                    init(player, skill) {
                        player.storage[skill] = false;
                    },
                    intro: { content: 'limited' },
                    enable: 'phaseUse',
                    position: 'h',
                    filter(event, player) {
                        if (player.storage.tlbb_fanrui) return false;
                        var list = player.getCards('h');
                        if (list.length < 3) return false;
                        return player.countCards('h', function(card) {
                            var number = card.number;
                            var number1 = number + 1;
                            var number2 = number - 1;
                            return player.countCards('h', { number: number1 }) > 0 && player.countCards('h', { number: number2 }) > 0;
                        });
                    },
                    filterCard(card, player, target) {
                        var number = card.number;
                        var selected = ui.selected.cards;
                        if (selected.length == 0) {
                            var number1 = number + 1;
                            var number2 = number - 1;
                            return player.countCards('h', { number: number1 }) > 0 && player.countCards('h', { number: number2 }) > 0;
                        }
                        if (selected.length == 1) {
                            var number0 = selected[0].number;
                            var number1 = number0 + 1;
                            var number2 = number0 - 1;
                            return number1 == number || number2 == number;
                        }
                        if (selected.length == 2) {
                            var number0 = selected[0].number;
                            var number1 = selected[1].number;
                            var max, min;
                            if (number0 > number1) {
                                max = number0;
                                min = number1;
                            } else {
                                max = number1;
                                min = number0;
                            }
                            if (max + 1 == number) return true;
                            if (min - 1 == number) return true;
                            return false;
                        }
                        return false;
                    },
                    selectCard: 3,
                    discard: false,
                    check(card) {
                        return 20 - get.value(card);
                    },
                    content() {
                        'step 0';
                        event.cards = cards;
                        player.showCards(event.cards, '繁蕊');
                        ('step 1');
                        if (event.current == undefined) event.current = player.next;
                        if (event.current == player) {
                            player.gain(event.cards, 'gain2', 'log');
                            player.storage.tlbb_fanrui = true;
                            player.awakenSkill('tlbb_fanrui');
                            event.finish();
                        }
                        ('step 2');
                        event.current
                            .chooseCard(1, 'h', '是否选择一张手牌当"蕊"展示并回复一点体力？否则失去一点体力.', function(card, player) {
                                var num = card.number;
                                var cards = event.cards.slice(0);
                                if (cards.length) {
                                    cards.sort(function(a, b) {
                                        return a.number - b.number;
                                    });
                                    if (Array.isArray(cards)) for (var i of cards) {
                                        if (num == i.number) {
                                            return false;
                                        }
                                    }
                                    if (cards.length == 2) {
                                        var num0 = cards[0].number,
                                            num1 = cards[1].number;
                                        if (num0 + num1 == num + num) return true;
                                        if (num1 - num0 == num0 - num) return true;
                                        if (num - num1 == num1 - num0) return true;
                                        return false;
                                    }
                                    if (cards.length > 2) {
                                        var num0 = cards[0].number,
                                            num1 = cards[1].number;
                                        if (cards[1].number + num == 2 * cards[0].number) return true;
                                        if (cards[cards.length - 2].number + num == 2 * cards[cards.length - 1].number) return true;
                                        return false;
                                    }
                                }
                                return true;
                            })
                            .set('ai', function(card) {
                                var att1 = get.attitude(event.current, player);
                                if (att1 > 0) {
                                    if (event.current.hp >= event.current.maxHp && card.name == 'tao') return -1;
                                    return 1;
                                }
                                if (card.name == 'tao') return -1;
                                return 1;
                            })
                            .set('complexCard', true);
                        ('step 3');
                        if (result.bool) {
                            event.current.line(player, 'green');
                            event.current.showCards(result.cards[0], '蕊');
                            if (event.current.hp < event.current.maxHp) {
                                event.current.recover();
                            }
                            event.current.$give(result.cards[0], player);
                            event.current.lose(result.cards[0]);
                            event.cards.push(result.cards[0]);
                            player.showCards(event.cards, '繁蕊');
                            event.current = event.current.next;
                            event.goto(1);
                        } else {
                            event.current.loseHp();
                            event.current = event.current.next;
                            event.goto(1);
                        }
                    },
                    ai: {
                        order: 11,
                        result: {
                            player: 1,
                        },
                    },
                },
                tlbb_luomei: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: ['loseEnd'],
                    },
                    filter(event, player) {
                        var evt = event.parent;
                        if (evt && (evt.name == 'discard' || evt.name == 'respond')) {
                            if (Array.isArray(event.cards)) for (var i of event.cards) {
                                if (i.suit == 'club') return true;
                            }
                            return false;
                        } else {
                            var filter = event.es.concat(event.js);
                            for (var i = 0; i < filter.length; i++) {
                                if (filter[i].suit == 'club') return true;
                            }
                            return false;
                        }
                        return false;
                    },
                    content() {
                        var draw = 0;
                        var evt = trigger.parent;
                        if (evt && (evt.name == 'discard' || evt.name == 'respond')) {
                            if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                if (i.suit == 'club') draw += 2;
                            }
                        } else {
                            var filter = trigger.es.concat(trigger.js);
                            for (var i = 0; i < filter.length; i++) {
                                if (filter[i].suit == 'club') draw += 2;
                            }
                        }
                        player.draw(draw);
                    },
                },
                tlbb_jiujie: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'phaseUseBegin' },
                    check(event, player) {
                        if (!player.hasSha()) return false;
                        return game.hasPlayer(function(current) {
                            return get.attitude(player, current) < 0 && player.canUse('sha', current);
                        });
                    },
                    init(player) {
                        player.addMark('tlbb_jiujie', 1);
                    },
                    intro: { content: 'mark' },
                    marktext2: '酒',
                    markimage: 'extension/金庸群侠传/image/icon/jyjiujie.jpg',
                    mark: true,
                    group: 'tlbb_jiujie2',
                    filter(event, player) {
                        if (!player.canUse({ name: 'jiu' }, player)) return false;
                        return player.hasMark('tlbb_jiujie');
                    },
                    content() {
                        player.removeMark('tlbb_jiujie', 1);
                        player.useCard({ name: 'jiu' }, player, false);
                    },
                },
                tlbb_jiujie2: {
                    audio: 'tlbb_jiujie',
                    trigger: { player: 'damageEnd' },
                    forced: true,
                    filter(event, player) {
                        return player.countMark('tlbb_jiujie') < 2;
                    },
                    content() {
                        player.addMark('tlbb_jiujie', 1);
                    },
                },
                tlbb_chouchang: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'useCard',
                    },
                    ai: {
                        pretao: true,
                        nokeep: true,
                    },
                    mod: {
                        aiOrder(player, card, num) {
                            if (num <= 0 || typeof card == 'string') return num;
                            const name = card.name;
                            if (!['sha', 'juedou', 'wanjian', 'nanman'].includes(name)) return num + 11;
                            return num;
                        },
                    },
                    lastDo: true,
                    logTarget: 'targets',
                    check(event, player) {
                        const cards = player.getCards('h', function(i) {
                            return lib.filter.cardDiscardable(i, player);
                        });
                        //if(cards.length==0) return false;
                        //if(get.value(cards[0])<6&&cards.length==1) return true;
                        if (
                            cards.some(function(i) {
                                if (get.value(i) > 7) return true;
                                if (get.tag(i, 'recover') >= 1) return true;
                                return false;
                            })
                        )
                            return false;
                        if (cards.length > 3) return false;
                        const trueTargets = event.targets.filter(function(i) {
                            return !event.excluded.includes(i);
                        });
                        const effect = trueTargets.reduce(function(num, target) {
                            return num + get.effect(target, event.card, player, player);
                        }, 0);
                        if (effect <= 0) return false;
                        const count = event.baseDamage * trueTargets.length * event.effectCount;
                        if (count > 2) return false;
                        if (
                            !trueTargets.some(function(i) {
                                return !event.directHit.includes(i);
                            })
                        )
                            return false;
                        return true;
                    },
                    filter(event, player) {
                        if (event.all_excluded) return false;
                        const cards = player.getCards('h', function(i) {
                            return lib.filter.cardDiscardable(i, player);
                        });
                        if (cards.length == 0) return false;
                        const name = event.card.name;
                        if (name == 'sha' || name == 'juedou') return true;
                        if (name == 'wanjian' || name == 'nanman') return true;
                        return false;
                    },
                    content() {
                        'step 0';
                        const cards = player.getCards('h', function(i) {
                            return lib.filter.cardDiscardable(i, player);
                        });
                        player.discard(cards);
                        ('step 1');
                        trigger.directHit.addArray(game.filterPlayer());
                        const next = game.createEvent('tlbb_chouchang_clear');
                        next.card = trigger.card;
                        event.next.remove(next);
                        next.player = player;
                        trigger.after.push(next);
                        next.setContent(function() {
                            var History = player.getHistory('sourceDamage', function(evt) {
                                return evt.card == card;
                            });
                            var damagenum = 0;
                            for (var damage of History) {
                                damagenum += damage.num;
                            }
                            if (damagenum > 2) {
                                game.log(player, '因愁肠造成的伤害为', damagenum, '受到伤害!');
                                player.damage(1, 'nosource', 'nocard');
                            }
                        });
                    },
                },
                tlbb_aijie: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'damageEnd',
                    },
                    filter(event, player) {
                        return event.num > 0;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        event.num1 = trigger.num;
                        ('step 1');
                        player
                            .chooseTarget(get.prompt2('tlbb_aijie'), function(card, player, target) {
                                return target != player && target.getHandcardLimit() > 0;
                            })
                            .set('ai', function(target) {
                                return -get.attitude(player, target);
                            });
                        ('step 2');
                        if (result.bool) {
                            result.targets[0].addSkill('tlbb_aijie_hs');
                            result.targets[0].addMark('tlbb_aijie_hs', 1);
                            event.num1--;
                            if (event.num1 > 0) event.goto(1);
                        }
                    },
                    subSkill: {
                        hs: {
                            //marktext:'哀',
                            markimage: 'extension/金庸群侠传/image/icon/jyaijie.jpg',
                            intro: {
                                content: '当前手牌上限-#',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - player.countMark('tlbb_aijie_hs');
                                },
                            },
                        },
                    },
                },
                tlbb_gulian: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'damageBegin3' },
                    forced: true,
                    filter(event, player) {
                        if (event.num <= 1) return false;
                        return !player.countCards('h');
                    },
                    lastDo: true,
                    //firstDo:true,
                    _priority: -10,
                    content() {
                        trigger.num = 1;
                    },
                    ai: {
                        filterDamage: true,
                        skillTagFilter(player, tag, arg) {
                            if (player.countCards('h')) return false;
                            return true;
                        },
                    },
                },
                tlbb_xianglong2: {
                    trigger: {
                        player: 'enterGame',
                        global: 'gameStart',
                    },
                    forced: true,
                    content() {
                        game.playJY('tlbb_qiaofengruchang');
                    },
                },
                tlbb_xianglong: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'useCard1' },
                    filter(event, player) {
                        if (event.card.name != 'sha') return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        event.count = 1;
                        if (player.hasSkillTag('xianglong_buff', null, null, true)) event.count = 2;
                        ('step 1');
                        event.count--;
                        player.judge(function(card) {
                            var color = get.color(card);
                            if (color == 'black') return 1;
                            if (color == 'red') {
                                var cansha = game.hasPlayer(function(current) {
                                    return !trigger.targets.includes(current) && player.canUse(trigger.card, current, false) && get.effect(current, trigger.card, player, player) > 0;
                                });
                                //var cansha2=game.hasPlayer(function(current){
                                //   return !trigger.targets.includes(current)&&player.canUse(trigger.card,current,false);
                                //});
                                if (cansha) return 2;
                                //if(cansha2&&player.hasSkill('tlbb_kanghui')) return 2;
                                return -1;
                            }
                        }).judge2 = function(result) {
                            return result.bool;
                        };
                        ('step 2');
                        if (result.color == 'black') {
                            if (!trigger.baseDamage) trigger.baseDamage = 1;
                            trigger.baseDamage += 1;
                            player.$fullscreenpop(['飞龙在天', '见龙在田', '潜龙勿用', '鸿渐于陆', '突如其来', '利涉大川', '震惊百里', '或跃在渊'].randomGet(), 'fire');
                            event.goto(6);
                        } else if (result.color == 'red') {
                            event.goto(3);
                        } else {
                            event.goto(6);
                        }
                        event.result_judge = result;
                        event.trigger('tlbb_xianglong_judge');
                        ('step 3');
                        player
                            .chooseTarget('降龙:是否为' + get.translation(trigger.card) + '增加一个目标?', function(card, player, target) {
                                return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target, false);
                            })
                            .set('sourcex', trigger.targets)
                            .set('ai', function(target) {
                                var player = _status.event.player;
                                return get.effect(target, _status.event.card, player, player);
                            })
                            .set('card', trigger.card);
                        ('step 4');
                        if (result.bool) {
                            event.target = result.targets[0];
                        } else {
                            event.goto(6);
                        }
                        ('step 5');
                        player.line(event.target, 'fire');
                        game.log(event.target, '额外成为了', trigger.card, '的目标');
                        player.$fullscreenpop(['双龙取水', '鱼跃于渊', '时乘六龙', '密云不雨', '损则有孚', '龙战于野', '履霜冰至', '羝羊触蕃', '神龙摆尾'].randomGet(), 'fire');
                        trigger.targets.push(event.target);
                        ('step 6');
                        if (event.count > 0) {
                            event.goto(1);
                        }
                    },
                    group: ['tlbb_xianglong2'],
                },
                tlbb_kanghui: {
                    //audioname:["tlbb_qiaofengazhu"],
                    audioname2: {
                        tlbb_qiaofengazhu: 'tlbb_qzkanghui',
                    },
                    usable: 4,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { source: 'damageBegin' },
                    check(event, player) {
                        return get.attitude(player, event.player) >= 0;
                    },
                    content() {
                        'step 0';
                        player.$fullscreenpop('亢龙有悔', 'fire');
                        player.draw(2);
                        ('step 1');
                        trigger.cancel();
                    },
                    ai: {
                        effect: {
                            player(card, player, target) {
                                //if(['damage','firedamage','thunderdamage','icedamage','jy_dudamage'].includes(card.name)) return;
                                if (target) {
                                    if (!get.tag(card, 'damage')) return;
                                    return [1, 20];
                                }
                            },
                        },
                    },
                },
                tlbb_zongpangp: {
                    audio: 'tlbb_zongpan',
                    trigger: {
                        player: 'judge',
                    },
                    filter(event, player) {
                        if (!player.hasZhuSkill('tlbb_zongpan')) return false;
                        var group = 'wei';
                        if (lib.jy_changeSkill) group = 'jy_song';
                        return game.hasPlayer(function(current) {
                            if (group != current.group) return false;
                            return current != player;
                        });
                    },
                    content() {
                        'step 0';
                        var group = 'wei';
                        if (lib.jy_changeSkill) group = 'jy_song';
                        event.targets = game
                            .filterPlayer(function(current) {
                                if (group != current.group) return false;
                                return current != player;
                            })
                            .sortBySeat();
                        ('step 1');
                        if (targets.length) {
                            var target = targets.shift();
                            event.target = target;
                            if (!target.isIn()) {
                                event.redo();
                                return;
                            }
                            if (!target.countCards('hs')) {
                                event.redo();
                                return;
                            }
                            target.addTempClass('target');
                            player.line(target, 'fire');
                            target
                                .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]), 'hs', function(card) {
                                    var player = _status.event.player;
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                    if (mod != 'unchanged') return mod;
                                    return true;
                                })
                                .set('ai', function(card) {
                                    var trigger = _status.event.getTrigger();
                                    var player = _status.event.player;
                                    var judging = _status.event.judging;
                                    var result = trigger.judge(card) - trigger.judge(judging);
                                    var attitude = get.attitude(player, trigger.player);
                                    if (attitude == 0 || result == 0) return 0;
                                    if (attitude > 0) {
                                        return result;
                                    } else {
                                        return -result;
                                    }
                                })
                                .set('judging', trigger.player.judging[0]);
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.bool) {
                            event.cardx = result.cards[0];
                            var resultx = trigger.judge(event.cardx) - trigger.judge(trigger.player.judging[0]);
                            player.chooseControl('拒绝', '不拒绝', function(event, player) {
                                if (resultx < 0) return '拒绝';
                                if (resultx == 0 && get.attitude(player, target) > 0) return '拒绝';
                                return '不拒绝';
                            });
                            target.say(['乔帮主,我们来好好说道说道!', '还请乔帮主证明自己的清白!', '乔帮主既然身份不明,何以服众？'].randomGet());
                        } else {
                            event.goto(1);
                        }
                        ('step 3');
                        if (result.control == '拒绝') {
                            game.log(player, '拒绝了', target, '替换判定牌');
                            player.chat('拒绝');
                            player.say(['你居心叵测,何必多言？', '够了,不要再说了!', '我乔峰岂会受你这奸邪小人蛊惑!'].randomGet());
                            event.goto(1);
                        } else {
                            player.say(['我自会给兄弟们一个交代.', '既然诸位不放心我,这就交出帮主之位!', '我乔峰顶天立地,并无半字虚言!'].randomGet());
                        }
                        ('step 4');
                        target.respond(event.cardx, 'highlight', 'noOrdering');
                        ('step 5');
                        if (event.cardx) {
                            //target.$gain2(trigger.player.judging[0]);
                            target.gain(trigger.player.judging[0], 'gain2');
                            trigger.player.judging[0] = event.cardx;
                            trigger.orderingCards.addArray([event.cardx]);
                            game.log(trigger.player, '的判定牌改为', event.cardx);
                        }
                        ('step 6');
                        event.goto(1);
                    },
                    ai: {
                        tag: {
                            rejudge: 1,
                        },
                    },
                },
                tlbb_zongpangpin: {
                    audio: 'tlbb_zongpan',
                    trigger: { player: 'compare', target: 'compare' },
                    filter(event, player) {
                        if (player == event.player && event.iwhile) return false;
                        if (!player.hasZhuSkill('tlbb_zongpan')) return false;
                        var group = 'wei';
                        if (lib.jy_changeSkill) group = 'jy_song';
                        return game.hasPlayer(function(current) {
                            if (group != current.group) return false;
                            return current != player;
                        });
                    },
                    content() {
                        'step 0';
                        var group = 'wei';
                        if (lib.jy_changeSkill) group = 'jy_song';
                        event.targets = game
                            .filterPlayer(function(current) {
                                if (group != current.group) return false;
                                return current != player;
                            })
                            .sortBySeat();
                        ('step 1');
                        if (targets.length) {
                            var target = targets.shift();
                            event.target = target;
                            if (!target.isIn()) {
                                event.redo();
                                return;
                            }
                            if (!target.countCards('hs')) {
                                event.redo();
                                return;
                            }
                            target.addTempClass('target');
                            player.line(target, 'fire');
                            var togain = player == trigger.player ? trigger.card1 : trigger.card2;
                            target
                                .chooseCard('hs', '是否打出一张手牌替换' + get.translation(player) + '的拼点牌' + get.translation(togain) + '？', function(card) {
                                    var player = _status.event.player;
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                    if (mod != 'unchanged') return mod;
                                    return true;
                                })
                                .set('ai', function(card) {
                                    var trigger = _status.event.getTrigger();
                                    var player = _status.event.player;
                                    var qiaofeng = _status.event.qiaofeng;
                                    var bool = get.attitude(player, qiaofeng) > 0;
                                    var togain = qiaofeng == trigger.player ? trigger.card1 : trigger.card2;
                                    var small = trigger.small;
                                    var ai = function(card, small, bool) {
                                        if (bool) {
                                            if (small) return 15 - card.number;
                                            return card.number;
                                        } else {
                                            if (small) card.number;
                                            return 15 - card.number;
                                        }
                                    };
                                    return ai(card, small, bool) - ai(togain, small, bool);
                                })
                                .set('qiaofeng', player);
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.bool) {
                            event.cardx = result.cards[0];
                            var togain = player == trigger.player ? trigger.card1 : trigger.card2;
                            var small = trigger.small;
                            var ai = function(card, small) {
                                if (small) return 15 - card.number;
                                return card.number;
                            };
                            var result = ai(event.cardx, small) - ai(togain, small);
                            player.chooseControl('拒绝', '不拒绝', function() {
                                if (result > 0) return '不拒绝';
                                return '拒绝';
                            });
                        } else {
                            event.goto(1);
                        }
                        ('step 3');
                        if (result.control == '拒绝') {
                            game.log(player, '拒绝了', target, '替换拼点牌');
                            player.chat('拒绝');
                            event.goto(1);
                        } else {
                            target.respond(event.cardx, 'highlight');
                        }
                        ('step 4');
                        var togain = player == trigger.player ? trigger.card1 : trigger.card2;
                        target.gain(togain, 'gain2', 'log');
                        trigger[player == trigger.player ? 'card1' : 'card2'] = event.cardx;
                        trigger[player == trigger.player ? 'num1' : 'num2'] = event.cardx.number;
                        var strNumber = get.strNumber(event.cardx.number);
                        game.log(player, '拼点牌', togain, '改为', event.cardx);
                        game.log(player, '拼点牌点数改为', '#y' + strNumber);
                        event.goto(1);
                    },
                },
                tlbb_zongpan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'gameStart',
                        player: 'enterGame',
                    },
                    zhuSkill: true,
                    popup: false,
                    forced: true,
                    filter(event, player) {
                        return player.identity != 'zhu';
                    },
                    content() {
                        player.removeSkill('tlbb_zongpan');
                    },
                    group: ['tlbb_zongpangpin', 'tlbb_zongpangp'],
                },
                tlbb_xundiao: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'damageEnd' },
                    filter(event, player) {
                        if (!event.source) return false;
                        if (!event.player.isAlive() || !event.source.isAlive()) return false;
                        if (
                            !player.countCards('h', function(card) {
                                if (card.name != 'sha') return false;
                                var nature = get.nature(card);
                                if (nature && lib.card.sha.nature.includes(nature)) return false;
                                return true;
                            })
                        )
                            return false;
                        if (!event.source || event.source == player) return false;
                        if (
                            !lib.filter.targetEnabled(
                                {
                                    name: 'sha',
                                    nature: 'jy_du',
                                },
                                player,
                                event.source
                            )
                        )
                            return false;
                        return event.card && event.card.name == 'sha';
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player
                            .chooseCard('h', get.prompt2('tlbb_xundiao'), function(card) {
                                var player = _status.event.player;
                                var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                if (mod2 === false) return false;
                                if (card.name != 'sha') return false;
                                var nature = get.nature(card);
                                if (nature && lib.card.sha.nature.includes(nature)) return false;
                                return player.canUse({ name: 'sha', nature: 'jy_du', cards: [card] }, _status.event.sourcex, false);
                            })
                            .set('sourcex', trigger.source)
                            .set('sourcex2', trigger.player)
                            .set('ai', function(card) {
                                if (get.effect(_status.event.sourcex, { name: 'sha', nature: 'jy_du', cards: [card] }, _status.event.player) <= 0) return 0;
                                if (get.attitude(_status.event.player, _status.event.sourcex2) <= 0) return 0;
                                return 6 - get.value(card);
                            });
                        ('step 1');
                        if (result.bool) {
                            var vcard = { name: 'sha', nature: 'jy_du', cards: result.cards.slice(0), tlbb_xundiao: true };
                            player.useCard(vcard, result.cards, false, trigger.source, 'tlbb_xundiao');
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        var list = player.getHistory('sourceDamage', function(evt) {
                            return evt.card && evt.card.tlbb_xundiao && evt.getParent('tlbb_xundiao') == event && evt.player == trigger.source;
                        });
                        if (list.length && trigger.player.isIn() && trigger.player.isDamaged()) {
                            trigger.player.recover();
                        }
                    },
                },
                tlbb_qiyuan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { target: 'shaBefore' },
                    check(event, player) {
                        //if(get.damageEffect(player,event.player,player)>=0) return false;
                        return true;
                    },
                    filter(event, player) {
                        return game.hasPlayer((target) => target != player && target != event.player && target.countCards('h'));
                    },
                    content() {
                        'step 0';
                        event.targets = game.filterPlayer((target) => target != player && target != trigger.player).sortBySeat(player);
                        //event.targets.remove(player);
                        //event.targets.remove(trigger.player);
                        ('step 1');
                        if (targets.length) {
                            var target = targets.shift();
                            event.target = target;
                            if (!target.isIn()) {
                                event.redo();
                                return;
                            }
                            player.line(target);
                            if (!target.countCards('h', 'sha')) {
                                event.redo();
                                return;
                            }
                            target.addTempClass('target');
                            target
                                .chooseCard(1, 'h', '乞援:是否选择一张杀交给' + get.translation(player) + '？', function(card, player) {
                                    return card.name == 'sha';
                                })
                                .set('ai', function(card) {
                                    if (_status.event.aicheck) {
                                        return 1;
                                    }
                                    return -1;
                                })
                                .set('aicheck', get.attitude(target, player) > 0);
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.bool) {
                            target.give(result.cards, player, true);
                        }
                        event.goto(1);
                    },
                },
                tlbb_xinwu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'gainAfter',
                        global: 'loseAsyncAfter',
                    },
                    filter(event, player) {
                        if (event.name == 'loseAsync' && event.type != 'gain') return false;
                        var hs = player.getCards('h');
                        var gain = event.getg(player);
                        if (gain.length == 0) return false;
                        return game.hasPlayer(function(current) {
                            if (current == player) return false;
                            var lose = event.getl(current).cards2;
                            for (var i of lose) {
                                if (hs.includes(i) && gain.includes(i) && i.name == 'sha') return true;
                            }
                            return false;
                        });
                    },
                    //trigger:{player:"gainEnd"},
                    //filter:function(event,player){
                    //    if(event.relatedLose&&event.relatedLose.player!=player&&event.relatedLose.player.isIn()){
                    //        for (var i=0; i<event.cards.length; i++){
                    //            if(i.name=='sha') return true;
                    //        }
                    //    }
                    //    return false;
                    //},
                    forced: true,
                    content() {
                        'step 0';
                        var hs = player.getCards('h');
                        var gain = trigger.getg(player);
                        event.targets = game
                            .filterPlayer(function(current) {
                                if (current == player) return false;
                                var lose = trigger.getl(current).cards2;
                                for (var i of lose) {
                                    if (hs.includes(i) && gain.includes(i) && i.name == 'sha') return true;
                                }
                                return false;
                            })
                            .sortBySeat();
                        ('step 1');
                        var target = targets.shift();
                        event.target = target;
                        if (target.isIn()) {
                            var hs = player.getCards('h');
                            var list = [];
                            var gain = trigger.getg(player);
                            var lose = trigger.getl(target).cards2;
                            for (var i of lose) {
                                if (hs.includes(i) && gain.includes(i) && i.name == 'sha') list.push(i);
                            }
                            player
                                .chooseCard(1, 'h', '是否展示其中一张杀令' + get.translation(event.target) + '摸一张牌？', function(card, player) {
                                    return _status.event.listx.includes(card);
                                })
                                .set('ai', function(card) {
                                    if (_status.event.aicheck) {
                                        return 1;
                                    }
                                    return -1;
                                })
                                .set('aicheck', get.attitude(player, event.target) > 0)
                                .set('listx', list);
                        } else {
                            if (targets.length) event.goto(1);
                            else event.finish();
                        }
                        ('step 2');
                        if (result.bool) {
                            player.showCards(result.cards[0]);
                            target.draw();
                        } else {
                            if (targets.length) event.goto(1);
                            else event.finish();
                        }
                        ('step 3');
                        if (targets.length) event.goto(1);
                    },
                },
                tlbb_qianjun2: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'shaMiss',
                    },
                    check(event, player) {
                        return get.attitude(player, event.target) < 0;
                    },
                    filter(event, player) {
                        if (!event.responded || !event.responded.cards || event.responded.cards.length != 1) return false;
                        return event.responded && get.itemtype(event.responded.cards) == 'cards';
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var next = player.chooseToDiscard(1, 'h', '是否弃置一张与' + get.translation(trigger.responded.cards[0]) + '花色相同的牌？若如此做,该杀命中.', function(card, player) {
                            return card.suit == trigger.responded.cards[0].suit;
                        });
                        next.set('ai', function(card) {
                            var att = get.attitude(player, trigger.target);
                            if (att < 0) {
                                return 9 - get.value(card);
                            }
                            return -1;
                        });
                        ('step 1');
                        if (result.bool) {
                            trigger.untrigger();
                            trigger.trigger('shaHit');
                            trigger._result.bool = false;
                        }
                    },
                },
                tlbb_yuguan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { source: 'damageEnd' },
                    logTarget(event, player) {
                        return event.player.next;
                    },
                    check(event, player) {
                        return get.effect(event.player.next, event.card, player, player) > 0;
                    },
                    filter(event, player) {
                        if (!event.notLink()) return false;
                        if (!event.card || event.card.name != 'sha') return false;
                        var evt = event.getParent('useCard');
                        if (!evt || evt.name != 'useCard') return false;
                        if (evt.card != event.card) return false;
                        if (!evt.targets || !evt.targets.length) return false;
                        if (player == event.player.next) return false;
                        if (get.distance(event.player, event.player.next) > 1) return false;
                        if (!player.canUse(event.card, event.player.next, false)) return false;
                        return true;
                    },
                    content() {
                        var evt = trigger.getParent('useCard');
                        evt.targets.push(trigger.player.next);
                        if (evt.cards.length) {
                            game.log(trigger.player.next, '额外成为了', evt.card, '(', evt.cards, ')', '的目标');
                        } else {
                            game.log(trigger.player.next, '额外成为了', evt.card, '的目标');
                        }
                    },
                },
                tlbb_qianjun: {
                    subSkill: {
                        use: {
                            trigger: {
                                player: ['useCard1'],
                            },
                            forced: true,
                            popup: false,
                            //audio:"tlbb_qianjun",
                            filter(event, player) {
                                if (event.skill == 'tlbb_qianjun' && event.card.name == 'sha') return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                if (!trigger.baseDamage) trigger.baseDamage = 1;
                                trigger.baseDamage += 1;
                                event.targets = game.filterPlayer();
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    var id = target.playerid;
                                    var map = trigger.customArgs;
                                    if (!map[id]) map[id] = {};
                                    if (typeof map[id].shanRequired == 'number') {
                                        map[id].shanRequired++;
                                    } else {
                                        map[id].shanRequired = 2;
                                    }
                                    event.redo();
                                }
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    group: ['tlbb_qianjun_use'],
                    enable: 'chooseToUse',
                    filterCard: { name: 'sha' },
                    selectCard: 2,
                    viewAs: { name: 'sha' },
                    position: 'hs',
                    ignoreMod: true,
                    complexCard: true,
                    viewAsFilter(player) {
                        if (player.countCards('hs', 'sha') < 2) return false;
                        return true;
                    },
                    prompt: '将两张杀当杀使用',
                    check() {
                        return 1;
                    },
                    ai: {
                        effect: {
                            target(card, player, target, current) {
                                if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                            },
                        },
                        respondSha: true,
                        skillTagFilter(player) {
                            if (player.countCards('hs', 'sha') < 2) return false;
                        },
                        order() {
                            return get.order({ name: 'sha' }) + 0.1;
                        },
                    },
                },
                //破劫(苏星河)
                tlbb_xpojie: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'judge' },
                    forced: true,
                    filter(event, player) {
                        return player.countCards('h') > 0;
                    },
                    content() {
                        'step 0';
                        var str = get.translation(trigger.player) + '的' + (trigger.judgestr || '');
                        str += '判定为' + get.translation(trigger.player.judging[0]) + ',';
                        str += get.prompt('tlbb_xpojie');
                        var dialogx = [str];
                        event.dialogx = dialogx;
                        event.cards = [];
                        event.targetCards = [];
                        event.playerCard = null;
                        event.targets2 = [];
                        event.num1 = 0;
                        player
                            .chooseTarget(
                                str,
                                [1, 3],
                                function(card, player, target) {
                                    if (!target.countCards('h')) return false;
                                    if (ui.selected.targets.length == 0) return player == target;
                                    return true;
                                },
                                function(target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (target.hasSkill('tuntian')) return att / 10;
                                    if (target == _status.event.player) return 1;
                                    return 1 - att;
                                }
                            )
                            .set('complexTarget', true)
                            .set('complexSelect', true);
                        ('step 1');
                        if (result.bool) {
                            event.targets = result.targets;
                        } else {
                            event.finish();
                            return;
                        }
                        ('step 2');
                        if (event.num1 < event.targets.length) {
                            event.targets[event.num1].chooseCard(true).ai = function(card) {
                                if (_status.event.getRand() < 0.5) return Math.random();
                                return -get.value(card);
                            };
                        }
                        ('step 3');
                        if (result.bool) {
                            event.dialogx.push('<div class="text center">【' + get.translation(event.targets[event.num1]) + '】的牌</div>');
                            event.dialogx.push(result.cards);
                            if (event.targets[event.num1] != player) {
                                event.targetCards.push(result.cards[0]);
                                event.targets2.push(event.targets[event.num1]);
                            } else {
                                event.playerCard = result.cards[0];
                            }
                            event.cards.push(result.cards[0]);
                            event.num1++;
                            if (event.num1 < event.targets.length) event.goto(2);
                        } else {
                            event.finish();
                            return;
                        }
                        ('step 4');
                        if (event.targets2.length) {
                            player.$compareMultiple(event.playerCard, event.targets2, event.targetCards);
                        }
                        ('step 5');
                        player
                            .chooseButton(event.dialogx, function(button) {
                                var card = button.link;
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                var owner = get.owner(card);
                                var att1 = get.sgn(get.attitude(player, owner));
                                var judging = _status.event.judging;
                                var result = trigger.judge(card) - trigger.judge(judging);
                                var attitude = get.sgn(get.attitude(player, trigger.player));
                                var result2 = result * attitude;
                                if (result2 > 0) {
                                    if (att1 <= 0) {
                                        //是敌人
                                        return result2;
                                    }
                                } else if (result2 == 0) {
                                    if (att1 <= 0) {
                                        //是敌人
                                        return 2;
                                    }
                                }
                                return 0;
                            })
                            .set('judging', trigger.player.judging[0])
                            .set('filterButton', function(button) {
                                var player = _status.event.player;
                                var card = button.link;
                                var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                if (mod2 != 'unchanged') return mod2;
                                var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                if (mod != 'unchanged') return mod;
                                return true;
                            });
                        ('step 6');
                        if (result.bool) {
                            event.forceDie = true;
                            player.respond(result.links, 'highlight', 'noOrdering');
                            result.cards = result.links;
                            var card = result.cards[0];
                            event.card = card;
                        } else {
                            if (Array.isArray(event.cards)) for (var i of event.cards) {
                                var owner = get.owner(i);
                                if (owner) {
                                    owner.discard(i);
                                }
                            }
                            event.finish();
                        }
                        ('step 7');
                        if (result.bool) {
                            if (trigger.player.judging[0].clone) {
                                trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                game.broadcast(function(card) {
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
                        rejudge: true,
                        tag: {
                            rejudge: 0.6,
                        },
                    },
                },
                //破劫结束
                //霸天版本邀帖
                tlbb_yaotie: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    usable: 1,
                    getResult(player) {
                        var players;
                        if (player) {
                            players = game.filterPlayer(function(current) {
                                return get.attitude(player, current) >= 0;
                            });
                        } else {
                            players = game.players.slice(0);
                        }
                        //game.log(players)
                        var l = players.length;
                        var all = Math.pow(l, 3);
                        var list = [];
                        for (var i = 1; i < all; i++) {
                            var array = [];
                            for (var j = 0; j < l; j++) {
                                if (Math.floor((i % Math.pow(2, j + 1)) / Math.pow(2, j)) > 0) array.add(players[j]);
                            }
                            if (array.length >= 3) {
                                array.sort(function(a, b) {
                                    return a.countCards('h') - b.countCards('h');
                                });
                                var bool = true;
                                var count = array[1].countCards('h') - array[0].countCards('h');
                                for (var z = 2; z < array.length; z++) {
                                    if (array[z].countCards('h') - array[z - 1].countCards('h') != count) {
                                        bool = false;
                                        break;
                                    }
                                }
                                if (bool) list.push(array);
                                ///////////////////////////////////////////////////////////
                                array.sort(function(a, b) {
                                    return a.hp - b.hp;
                                });
                                var bool = true;
                                var count = array[1].hp - array[0].hp;
                                for (var z = 2; z < array.length; z++) {
                                    if (array[z].hp - array[z - 1].hp != count) {
                                        bool = false;
                                        break;
                                    }
                                }
                                if (bool) list.push(array);
                            }
                        }
                        if (player) {
                            if (list.length) {
                                list.sort(function(a, b) {
                                    return b.length - a.length;
                                });
                            }
                            return list[0] || [];
                        }
                        return list;
                    },
                    filterincludes(list1, list2) {
                        for (var c of list1) {
                            if (!list2.includes(c)) {
                                return false;
                            }
                        }
                        return true;
                    },
                    filter(event, player) {
                        if (game.countPlayer() < 3) return false;
                        _status.event.tlbb_yaotie = _status.event.tlbb_yaotie || lib.skill.tlbb_yaotie.getResult();
                        var yaotie = _status.event.tlbb_yaotie;
                        return yaotie.length;
                    },
                    complexSelect: true,
                    filterTarget(card, player, target) {
                        _status.event.tlbb_yaotie = _status.event.tlbb_yaotie || lib.skill.tlbb_yaotie.getResult();
                        var yaotie = _status.event.tlbb_yaotie;
                        var targets = ui.selected.targets;
                        for (var c of yaotie) {
                            var bool = lib.skill.tlbb_yaotie.filterincludes(targets, c);
                            if (bool && c.includes(target)) return true;
                        }
                        return false;
                    },
                    //selectTarget:[3,Infinity],
                    selectTarget() {
                        var targets = ui.selected.targets;
                        targets = targets.slice(0);
                        if (targets.length < 3) return [3, Infinity];
                        var bool = true;
                        targets.sort(function(a, b) {
                            return a.countCards('h') - b.countCards('h');
                        });
                        var count = targets[1].countCards('h') - targets[0].countCards('h');
                        for (var z = 2; z < targets.length; z++) {
                            if (targets[z].countCards('h') - targets[z - 1].countCards('h') != count) {
                                bool = false;
                                break;
                            }
                        }
                        if (bool) return [targets.length, Infinity];
                        var bool = true;
                        targets.sort(function(a, b) {
                            return a.hp - b.hp;
                        });
                        var count = targets[1].hp - targets[0].hp;
                        for (var z = 2; z < targets.length; z++) {
                            if (targets[z].hp - targets[z - 1].hp != count) {
                                bool = false;
                                break;
                            }
                        }
                        if (bool) return [targets.length, Infinity];
                        return targets.length + 1;
                    },
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    content() {
                        target.draw();
                    },
                    ai: {
                        order: 11,
                        result: {
                            target(player, target) {
                                var players = game.filterPlayer(function(current) {
                                    return get.attitude(player, current) >= 0;
                                });
                                if (players.length < 3) return 0;
                                _status.event.tlbb_yaotie_ai = _status.event.tlbb_yaotie_ai || lib.skill.tlbb_yaotie.getResult(player);
                                var yaotie = _status.event.tlbb_yaotie_ai;
                                if (yaotie.length < 3) return 0;
                                if (yaotie.includes(target)) return 1;
                                return 0;
                            },
                        },
                    },
                },
                //苏星河:哑隐
                tlbb_yayin: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'damageBegin' },
                    filter(event, player) {
                        if (!event.card) return true;
                        if (!event.source) return true;
                        return false;
                    },
                    forced: true,
                    content() {
                        trigger.cancel();
                    },
                },
                tlbb_shifu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'gameStart',
                        player: 'enterGame',
                    },
                    forced: true,
                    filter(event, player) {
                        return game.hasPlayer(function(i) {
                            return i != player && i.hasSex('male');
                        });
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('tlbb_shifu'), true, function(card, player, target) {
                                return target != player && target.hasSex('male');
                            })
                            .set('ai', function(target) {
                                return -get.attitude(player, target);
                            });
                        ('step 1');
                        if (result.bool) {
                            var target = result.targets[0];
                            player.line(target, 'green');
                            game.log(target, '成为了', '【弑夫】', '的目标');
                            target.addSkill('tlbb_shifumark');
                        }
                    },
                    group: ['tlbb_shifu_a', 'tlbb_shifu2'],
                    subSkill: {
                        a: {
                            trigger: { player: 'phaseDrawBegin1' },
                            audio: 'tlbb_shifu',
                            forced: true,
                            filter(event, player) {
                                var target = game.findPlayer((i) => i.hasSkill('tlbb_shifumark') && i.isDamaged());
                                if (!target) return false;
                                return !event.numFixed;
                            },
                            content() {
                                var target = game.findPlayer((i) => i.hasSkill('tlbb_shifumark') && i.isDamaged());
                                trigger.num += target.maxHp - target.hp;
                            },
                            ai: { threaten: 1.3 },
                        },
                    },
                },
                tlbb_shifumark: {
                    //marktext2:'软',
                    markimage: 'extension/金庸群侠传/image/icon/jyranjinsanavatar.jpg',
                    //marktext:"<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jyranjinsanavatar.jpg>",
                    mark: true,
                    charlotte: true,
                    nopop: true,
                    intro: { content: '你已中<十香软骨散><br><img style=width:165px src=extension/金庸群侠传/image/avatar/jy_avatar_ruanjinsan.jpg>' },
                },
                tlbb_shifu2: {
                    trigger: { global: 'dieAfter' },
                    forced: true,
                    popup: false,
                    filter(event, player) {
                        return event.player.hasSkill('tlbb_shifumark');
                    },
                    content() {
                        'step 0';
                        var bool = game.hasPlayer((i) => !i.hasSkill('tlbb_shifumark') && i.hasSex('male') && i != trigger.player && i != player);
                        if (!bool) {
                            event.finish();
                            return;
                        }
                        player
                            .chooseTarget('请将' + get.translation(trigger.player) + '的「软骨散」转移给另一名男性角色', true, function(card, player, i) {
                                return !i.hasSkill('tlbb_shifumark') && i.hasSex('male') && i != trigger.player && i != player;
                            })
                            .set('ai', function(target) {
                                var player = _status.event.player;
                                return -get.attitude(player, target);
                            });
                        ('step 1');
                        if (result.bool) {
                            var target = result.targets[0];
                            player.line(target);
                            trigger.player.removeSkill('tlbb_shifumark');
                            target.addSkill('tlbb_shifumark');
                        }
                    },
                },
                tlbb_buyao: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'phaseJieshuBegin' },
                    forced: true,
                    callback() {
                        'step 0';
                        player.gain(card, 'gain2', 'log');
                        ('step 1');
                        var evt = event.getParent(2);
                        if (event.judgeResult.bool == false) {
                            player.damage('nocard', evt.player);
                        }
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('tlbb_buyao'), function(card, player, target) {
                                return target != player;
                            })
                            .set('ai', function(target) {
                                return get.damageEffect(target, _status.event.player, _status.event.player);
                            });
                        ('step 1');
                        if (result.bool) {
                            event.target = result.targets[0];
                            player.chooseControl('heart', 'diamond', 'club', 'spade').set('ai', function(event) {
                                switch (Math.floor(Math.random() * 6)) {
                                    case 0:
                                        return 'heart';
                                    case 1:
                                    case 4:
                                    case 5:
                                        return 'diamond';
                                    case 2:
                                        return 'club';
                                    case 3:
                                        return 'spade';
                                }
                            });
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        game.log(player, '选择了' + get.translation(result.control + 2));
                        event.choice = result.control;
                        target.popup(event.choice);
                        var next = target.judge(function(card) {
                            if (card.suit != event.choice) return -1;
                            return 0;
                        });
                        next.callback = lib.skill.tlbb_buyao.callback;
                        next.judge2 = function(result) {
                            return result.bool;
                        };
                    },
                },
                tlbb_siqian: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'damageEnd' },
                    forced: true,
                    filter(event, player) {
                        var bool = game.hasPlayer(function(current) {
                            if (current.hasSkill('tlbb_shifumark')) {
                                return game.hasPlayer(function(current2) {
                                    return current2 != player && !current2.hasSkill('tlbb_shifumark') && current != current2 && current2.hasSex('male');
                                });
                            }
                            return false;
                        });
                        return bool;
                    },
                    content() {
                        'step 0';
                        var target1 = game.findPlayer((i) => i.hasSkill('tlbb_shifumark'));
                        event.target1 = target1;
                        player
                            .chooseTarget(get.prompt('tlbb_siqian'), '转移' + get.translation(target1) + '的「软骨散」标记', function(card, player, target) {
                                return target != player && target.hasSex('male') && target != target1 && !target.hasSkill('tlbb_shifumark');
                            })
                            .set('ai', function(target) {
                                var player = _status.event.player;
                                return 10 + get.attitude(player, target);
                            });
                        ('step 1');
                        if (result.bool) {
                            var target2 = result.targets[0];
                            player.line(target2);
                            event.target1.removeSkill('tlbb_shifumark');
                            target2.addSkill('tlbb_shifumark');
                        }
                    },
                },
                tlbb_dianhua: {
                    subSkill: { off: { sub: true } },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'useCardToPlayer',
                        //global:"useCard1",
                    },
                    _priority: null,
                    forced: true,
                    filter(event, player) {
                        if (player.hasSkill('tlbb_dianhua_off')) return false;
                        if (event.player == player) return false;
                        var type = get.type(event.card);
                        if (type == 'basic') return false;
                        if (type != 'trick') return false;
                        if (type == 'delay') return false;
                        if (event.card.name == 'wuxie') return false;
                        if (!event.targets || event.targets.length != 1 || event.target == event.player) return false;
                        for (var i = 0; i < lib.inpile.length; i++) {
                            var name = lib.inpile[i];
                            if (get.type(name) == 'trick' && event.card.name != name && name != 'wuxie' && name != 'wugu' && name != 'taoyuan' && name != 'wuzhong' && name != 'zengbin') {
                                var card = { name: name, cards: event.cards };
                                if (event.player.canUse(card, event.target)) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    },
                    check(event, player) {
                        return get.attitude(player, event.player) <= 0;
                    },
                    content() {
                        'step 0';
                        var list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            var name = lib.inpile[i];
                            if (get.type(name) == 'trick' && trigger.card.name != name && name != 'wuxie' && name != 'wugu' && name != 'taoyuan' && name != 'wuzhong' && name != 'zengbin') {
                                var card = { name: name, cards: trigger.cards };
                                if (trigger.player.canUse(card, trigger.target)) {
                                    list.push(['锦囊', '', name]);
                                }
                            }
                        }
                        var str = '<img style=width:150px heigh=38px src=extension/金庸群侠传/image/button/jy_button_langhuangyudong.jpg><br>点化<br>' + get.translation(trigger.player) + '对' + get.translation(trigger.target) + '使用了' + get.translation(trigger.card) + '是否转化?';
                        var dialog = ui.create.dialog(str, [list, 'vcard'], 'hidden');
                        player.chooseButton(dialog).set('ai', function(button) {
                            var card = { name: button.link[2], cards: trigger.cards };
                            return get.effect(trigger.target, card, _status.event.player, _status.event.player) - get.effect(trigger.target, trigger.card, _status.event.player, _status.event.player);
                        });
                        ('step 1');
                        if (result.bool) {
                            event.cardx = trigger.card;
                            trigger.card.name = result.buttons[0].link[2];
                            game.log(event.cardx, '转化为了', trigger.card);
                            player.addTempSkill('tlbb_dianhua_off');
                        }
                    },
                    ai: {
                        expose: 0.8,
                    },
                },
                tlbb_wendian: {
                    global: 'tlbb_wendian1',
                },
                tlbb_wendian1: {
                    subSkill: { off: { sub: true } },
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player) {
                        if (player.hasSkill('tlbb_wendian1_off')) return false;
                        return (
                            player.countCards('h') > 0 &&
                            game.hasPlayer(function(current) {
                                return current.hasSkill('tlbb_wendian') && current != player;
                            })
                        );
                    },
                    forced: true,
                    delay: 0,
                    filterCard: true,
                    discard: false,
                    lose: false,
                    position: 'h',
                    prompt() {
                        var player = _status.event.player;
                        var list = game.filterPlayer(function(current) {
                            return current.hasSkill('tlbb_wendian');
                        });
                        var str = '将一张手牌交给' + get.translation(list);
                        if (list.length > 1) str += '中的一人';
                        return str;
                    },
                    check(card) {
                        return 8 - get.value(card);
                    },
                    content() {
                        'step 0';
                        var targets = game.filterPlayer(function(current, player) {
                            return current.hasSkill('tlbb_wendian') && current != player;
                        });
                        if (targets.length == 1) {
                            event.target = targets[0];
                            event.goto(2);
                        } else if (targets.length) {
                            player
                                .chooseTarget(true, '选择【问典】的目标', function(card, player, target) {
                                    return _status.event.list.includes(target);
                                })
                                .set('list', targets)
                                .set('ai', function(target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target);
                                });
                        } else {
                            event.finish();
                        }
                        ('step 1');
                        if (result.bool && result.targets.length) {
                            event.target = result.targets[0];
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (event.target) {
                            game.playJY(['tlbb_wendian1', 'tlbb_wendian2'].randomGet());
                            player.addTempSkill('tlbb_wendian1_off');
                            event.cardss = cards[0];
                            //player.$give(event.cardss,event.target);
                            //event.target.gain(event.cardss,player);
                            player.give(event.cardss, event.target, true);
                            player.say(['王姑娘可知这是何路数？', '有一招,要向王姑娘请教.', '王姑娘博学多才,不知可否解惑？'].randomGet());
                        } else {
                            event.finish();
                        }
                        ('step 3');
                        if (event.target) {
                            event.target.chooseControl('是', '否').set('prompt', '问典<br><br><div class="text">是否亮出牌堆顶的两张牌令其获得其中的锦囊牌?</div><br><div class="text">').ai = function() {
                                var att = get.attitude(event.target, player);
                                if (att >= 0) return '是';
                                if (att < 0) return '否';
                                return '否';
                            };
                        }
                        ('step 4');
                        if (result.control == '是') {
                            event.cards = get.cards(2);
                            game.cardsGotoOrdering(event.cards);
                            event.target.showCards(event.cards, '问典');
                        }
                        if (result.control == '否') {
                            event.target.say('你心术不正,我又何必告知与你？');
                            game.log(event.target, '拒绝了展示牌堆顶的牌');
                            event.finish();
                        }
                        ('step 5');
                        event.cards = event.cards.filter((i) => get.type(i, 'trick') == 'trick');
                        if (!cards || cards.length == 0) {
                            event.target.say('此招委实怪异,我竟也不知晓.');
                        } else {
                            event.target.say('此招我或许知晓一二.');
                        }
                        player.gain(cards, 'gain2', 'log');
                    },
                    ai: {
                        order: 2,
                        threaten: 1.5,
                        result: {
                            player(player, target) {
                                var target = game.findPlayer(function(current) {
                                    return current.hasSkill('tlbb_wendian');
                                });
                                if (target) {
                                    return get.attitude(player, target);
                                }
                            },
                        },
                    },
                },
                tlbb_nayuan: {
                    audio: 'ext:金庸群侠传/peiyin:4',
                    trigger: {
                        global: 'useCard2',
                    },
                    _priority: Infinity,
                    forced: true,
                    filter(event, player) {
                        if (event.player == player) return true;
                        return event.targets.includes(player);
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('tlbb_nayuan'), function(card, player, target) {
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
                                            if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !lib.skill[skills[j]].unique && !lib.skill[skills[j]].zhuSkill && !pss.includes(skills[j])) {
                                                return true;
                                            }
                                        }
                                    }
                                    return false;
                                }
                            })
                            .set('ai', function(target) {
                                if (get.attitude(_status.event.player, target) > 0) return Math.random();
                                return 0;
                            });
                        ('step 1');
                        if (result.bool) {
                            event.target = result.targets[0];
                            var target = event.target;
                            var names = [];
                            if (target.name && !target.isUnseen(0)) names.add(target.name);
                            if (target.name1 && !target.isUnseen(0)) names.add(target.name1);
                            if (target.name2 && !target.isUnseen(1)) names.add(target.name2);
                            var pss = player.getSkills();
                            var skills1 = [];
                            for (var i = 0; i < names.length; i++) {
                                var info = lib.character[names[i]];
                                if (info) {
                                    var skills = info[3];
                                    for (var j = 0; j < skills.length; j++) {
                                        if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !lib.skill[skills[j]].unique && !lib.skill[skills[j]].zhuSkill && !pss.includes(skills[j])) {
                                            skills1.push(skills[j]);
                                        }
                                    }
                                }
                            }
                            if (skills1.length == 1) {
                                player.addTempSkills(skills1[0]);
                                player.popup(skills1[0]);
                            } else
                                player.jy_chooseSkill(skills).set('callback', function(result, player, target) {
                                    for (var i of result.links) {
                                        player.addTempSkills(i, 'useCardAfter');
                                    }
                                });
                        }
                    },
                },
                'tlbb_nayuan–old': {
                    audio: 'ext:金庸群侠传/peiyin:4',
                    trigger: {
                        global: 'useCard2',
                    },
                    _priority: Infinity,
                    forced: true,
                    filter(event, player) {
                        if (event.player == player) return true;
                        return event.targets.includes(player);
                    },
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
                                    if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !lib.skill[skills[j]].unique && !lib.skill[skills[j]].zhuSkill && !pss.includes(skills[j])) {
                                        list.push(skills[j]);
                                    }
                                }
                            }
                        }
                        if (onlylist) return list;
                        var dialog = ui.create.dialog('forcebutton');
                        dialog.add('选择获得一项技能');
                        _status.event.list = list;
                        var clickItem = function() {
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
                        player
                            .chooseTarget(get.prompt2('tlbb_nayuan'), function(card, player, target) {
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
                                            if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !lib.skill[skills[j]].unique && !lib.skill[skills[j]].zhuSkill && !pss.includes(skills[j])) {
                                                return true;
                                            }
                                        }
                                    }
                                    return false;
                                }
                            })
                            .set('ai', function(target) {
                                if (get.attitude(_status.event.player, target) > 0) return Math.random();
                                return 0;
                            });
                        ('step 1');
                        if (result.bool) {
                            event.target = result.targets[0];
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        event.skillai = function(list) {
                            return get.max(list, get.skillRank, 'item');
                        };
                        if (event.isMine()) {
                            event.dialog = lib.skill.tlbb_nayuan.createDialog(player, target); //tianshu
                            event.switchToAuto = function() {
                                event._result = event.skillai(event.list);
                                game.resume();
                            };
                            _status.imchoosing = true;
                            game.pause();
                        } else {
                            event._result = event.skillai(lib.skill.tlbb_nayuan.createDialog(player, target, true));
                        }
                        ('step 3');
                        _status.imchoosing = false;
                        if (event.dialog) {
                            event.dialog.close();
                        }
                        player.addTempSkills(result, 'useCardAfter');
                    },
                },
                tlbb_zhuha: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'damageBegin4' },
                    filter(event, player) {
                        return event.hasNature();
                    },
                    forced: true,
                    content() {
                        trigger.cancel();
                    },
                    ai: {
                        nofire: true,
                        nothunder: true,
                        effect: {
                            target(card, player, target, current) {
                                if (get.tag(card, 'natureDamage')) return 'zerotarget';
                                if (card.name == 'tiesuo') {
                                    return 'zerotarget';
                                }
                            },
                        },
                    },
                },
                tlbb_lingbo: {
                    subSkill: {
                        add: {
                            mark: true,
                            markimage: 'extension/金庸群侠传/image/icon/jy_avatar_linbo.jpg',
                            //marktext:"<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jy_avatar_linbo.jpg>",
                            intro: { name: '凌波', content: '防御距离+1' },
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:4',
                    trigger: { global: 'useCard' },
                    forced: true,
                    filter(event, player) {
                        if (event.player == player) return false;
                        if (event.player != _status.currentPhase) return false;
                        return !player.hasSkill('tlbb_lingbo_add');
                    },
                    content() {
                        player.addTempSkill('tlbb_lingbo_add', 'phaseEnd');
                    },
                },
                tlbb_qingguan: {
                    forced: true,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'phaseUseBegin' },
                    content() {
                        'step 0';
                        var list = [];
                        if (player.isDamaged()) list.push('回复体力');
                        list.push('失去体力');
                        list.push('取消');
                        player
                            .chooseControl(list, function(event, player) {
                                if (list.includes('回复体力') && player.countCards('h', { type: 'trick' }) > 0 && player.hp % 2 == 1) {
                                    return '回复体力';
                                } else if (get.effect(player, { name: 'losehp' }, player, player) > 0) {
                                    return '失去体力';
                                } else if (player.countCards('h', 'sha') > 0 && player.hp % 2 == 0 && player.hp > 1) {
                                    return '失去体力';
                                } else {
                                    return '取消';
                                }
                            })
                            .set('prompt', get.prompt2('tlbb_qingguan'));
                        ('step 1');
                        if (result && result.control != '取消') {
                            if (result.control == '回复体力') {
                                player.recover();
                                player.addTempSkill('tlbb_qingguan_recover', { player: 'phaseJieshuEnd' });
                            } else if (result.control == '失去体力') {
                                player.loseHp();
                                player.addTempSkill('tlbb_qingguan_loseHp', { player: 'phaseJieshuEnd' });
                            }
                        }
                    },
                },
                tlbb_qingguan_loseHp: {
                    trigger: { player: 'phaseJieshuBegin' },
                    forced: true,
                    charlotte: true,
                    forced: true,
                    popup: false,
                    nopop: true,
                    content() {
                        player.removeSkill('tlbb_qingguan_loseHp');
                        if (player.isDamaged()) {
                            player.recover();
                        }
                    },
                },
                tlbb_qingguan_recover: {
                    trigger: { player: 'phaseJieshuBegin' },
                    forced: true,
                    charlotte: true,
                    forced: true,
                    popup: false,
                    nopop: true,
                    content() {
                        player.removeSkill('tlbb_qingguan_recover');
                        player.loseHp();
                    },
                },
                tlbb_xiumai: {
                    subSkill: {
                        nouse: {
                            mod: {
                                cardUsable(card, player, num) {
                                    var playerx = _status.currentPhase;
                                    if (!playerx) return;
                                    if (playerx.isAlive() && playerx.hasSkill('tlbb_xiumai') && playerx != player) {
                                        var color = get.color(card);
                                        if (playerx.hp % 2 == 0) {
                                            if (color == 'black') return false;
                                        } else {
                                            if (color == 'red') return false;
                                        }
                                    }
                                },
                                cardRespondable(card, player) {
                                    return lib.skill.tlbb_xiumai_nouse.mod.cardUsable(card, player);
                                },
                                cardSavable(card, player, dying) {
                                    return lib.skill.tlbb_xiumai_nouse.mod.cardUsable(card, player);
                                },
                                cardEnabled(card, player) {
                                    return lib.skill.tlbb_xiumai_nouse.mod.cardUsable(card, player);
                                },
                            },
                        },
                    },
                    global: 'tlbb_xiumai_nouse',
                    group: 'tlbb_xiumai_draw',
                    trigger: { player: 'phaseZhunbeiBegin' },
                    _priority: 15,
                    forced: true,
                    filter(event, player, name) {
                        return _status.currentPhase == player;
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    content() { },
                    logTarget(event, player) {
                        return game.filterPlayer(function(current) {
                            return current != player;
                        });
                    },
                },
                tlbb_xiumai_draw: {
                    trigger: { player: 'useCardToPlayered' },
                    filter(event, player) {
                        var hp1 = player.hp % 2;
                        var hp2 = event.target.hp % 2;
                        if (event.target != player && hp1 == hp2) return true;
                        return false;
                    },
                    content() {
                        player.draw();
                    },
                    ai: {
                        effect: {
                            player(card, player, target) {
                                var hp1 = player.hp % 2;
                                if (!target) return;
                                var hp2 = target.hp % 2;
                                if (target != player && hp1 == hp2) return [1, 0.2];
                            },
                        },
                    },
                },
                tlbb_dianbo: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    global: 'tlbb_dianbo2',
                },
                tlbb_dianbo2: {
                    audio: 'tlbb_dianbo',
                    enable: 'phaseUse',
                    filter(event, player) {
                        return (
                            player.countCards('h') &&
                            game.hasPlayer(function(current) {
                                return player != current && current.hasSkill('tlbb_dianbo');
                            })
                        );
                    },
                    usable: 1,
                    forced: true,
                    delay: false,
                    filterCard: true,
                    discard: false,
                    lose: false,
                    position: 'h',
                    prompt() {
                        var player = _status.event.player;
                        var list = game.filterPlayer(function(current) {
                            return player != current && current.hasSkill('tlbb_dianbo');
                        });
                        var str = '将一张牌交给' + get.translation(list);
                        if (list.length > 1) str += '中的一人';
                        return str;
                    },
                    check(card) {
                        if (card.name == 'sha') return 5;
                        return 8 - get.value(card);
                    },
                    content() {
                        'step 0';
                        var targets = game.filterPlayer(function(current) {
                            return player != current && current.hasSkill('tlbb_dianbo');
                        });
                        if (targets.length == 1) {
                            event.target = targets[0];
                            event.goto(2);
                        } else if (targets.length) {
                            player
                                .chooseTarget(true, '选择【点拨】的目标', function(card, player, target) {
                                    return _status.event.list.includes(target);
                                })
                                .set('list', targets)
                                .set('ai', function(target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target);
                                });
                        } else {
                            event.finish();
                        }
                        ('step 1');
                        if (result.bool && result.targets.length) {
                            event.target = result.targets[0];
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (event.target) {
                            event.target
                                .chooseControl('拒绝', '不拒绝')
                                .set('prompt', '是否拒绝？')
                                .set('choice', get.attitude(target, player) <= 0);
                        } else {
                            event.finish();
                        }
                        ('step 3');
                        if (result.control == '拒绝') {
                            game.log(target, '拒绝了');
                            target.chat('拒绝');
                            event.finish();
                            return;
                        }
                        if (event.target) {
                            event.card = cards[0];
                            if (event.target != player) {
                                player.give(cards, event.target);
                            }
                        } else {
                            event.finish();
                        }
                        delete _status.noclearcountdown;
                        game.stopCountChoose();
                        ('step 4');
                        if (target.getCards('h').length == 0) {
                            event.finish();
                            return;
                        } else if (target.getCards('h').length == 0 && player.getCards('h').length == 0) {
                            event.finish();
                            return;
                        } else if (target.getCards('h').length && player.getCards('h').length == 0) {
                            player.viewHandcards(target);
                            event.finish();
                            return;
                        }
                        var dialog = ui.create.dialog('点拨', 'hidden');
                        dialog.addText('<img style=width:150px height:38px src=extension/金庸群侠传/image/button/jy_button_langhuanfudi.jpg><br><b>【' + get.translation(target) + '】的手牌');
                        dialog.add(target.getCards('h'));
                        dialog.addText('你的手牌');
                        dialog.add(player.getCards('h'));
                        player
                            .chooseButton(dialog, 2)
                            .set('filterButton', function(button) {
                                var player = _status.event.player;
                                var target = _status.event.target;
                                var card = button.link;
                                var owner = get.owner(card);
                                if (ui.selected.buttons.length) {
                                    if (get.owner(ui.selected.buttons[0]) == player) return false;
                                    if (owner != player) return false;
                                    if (!lib.filter.cardUsable({ name: ui.selected.buttons[0].name }, player, event.getParent('chooseToUse'))) return false;
                                    if (
                                        game.hasPlayer(function(current) {
                                            return player.canUse(
                                                {
                                                    name: ui.selected.buttons[0].name,
                                                    nature: get.nature(ui.selected.buttons[0]),
                                                    cards: [card],
                                                },
                                                current
                                            );
                                        })
                                    ) {
                                        return true;
                                    }
                                } else {
                                    if (owner == player) return false;
                                    if (get.type(card, 'trick') != 'trick' && get.type(card) != 'basic') return false;
                                    if (!lib.filter.cardUsable({ name: card.name }, player, event.getParent('chooseToUse'))) return false;
                                    if (
                                        game.hasPlayer(function(current) {
                                            return player.canUse({ name: card.name, nature: get.nature(card) }, current);
                                        })
                                    ) {
                                        return true;
                                    }
                                }
                                return false;
                            })
                            .set('ai', function(button) {
                                var card = button.link;
                                var player = _status.event.player;
                                if (ui.selected.buttons.length) {
                                    return 8 - get.value(card);
                                } else {
                                    return player.getUseValue({ name: card.name, nature: get.nature(card) });
                                }
                                return -1;
                            })
                            .set('target', target);
                        ('step 5');
                        if (result.bool) {
                            var card = result.buttons[0].link;
                            var card2 = result.buttons[1].link;
                            player.chooseUseTarget(
                                {
                                    name: card.name,
                                    nature: get.nature(card),
                                },
                                true,
                                [card2]
                            ).viewAs = true;
                        }
                    },
                    ai: {
                        order: 2,
                        threaten: 1.5,
                        result: {
                            player(player, target) {
                                var target = game.findPlayer(function(current) {
                                    return player != current && current.hasSkill('tlbb_dianbo');
                                });
                                if (!player.needsToDiscard()) return 0;
                                if (target) {
                                    return get.attitude(player, target);
                                }
                            },
                        },
                    },
                },
                tlbb_xunjing: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    filter(event, player) {
                        return player.countCards('h', function(card) {
                            var type = get.type(card);
                            if (type == 'trick' || type == 'delay') return true;
                            return false;
                        });
                    },
                    check(card) {
                        return 9 - get.value(card);
                    },
                    usable: 1,
                    filterCard(card, player) {
                        var type = get.type(card);
                        if (type == 'trick' || type == 'delay') return true;
                        return false;
                    },
                    content() {
                        var cardx = get.cardPile(function(cardxx) {
                            return get.type(cardxx) == 'equip' && get.subtype(cardxx) == 'equip5' && cardxx.suit == cards[0].suit;
                        });
                        if (!cardx) {
                            var list = get.inpile('equip5');
                            if (list.length) {
                                var name = list.randomGet();
                                cardx = game.createCard({ name: name, suit: cards[0].suit });
                            }
                        }
                        if (cardx) {
                            player.gain(cardx, 'gain2', 'log');
                        } else {
                            player.popup('杯具');
                            player.chat('没有符合要求的宝物牌了');
                            game.log('没有符合要求的宝物牌了!');
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            player(player) {
                                if (player.countCards('he', { subtype: 'equip5' })) return -1;
                                return 1;
                            },
                        },
                    },
                },
                tlbb_beiming: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'useCardAfter' },
                    usable: 1,
                    forced: true,
                    filter(event, player) {
                        var cards = player.getCards('sx', function(cardx) {
                            return cardx.hasGaintag('tlbb_pojie');
                        });
                        if (!cards.length) return false;
                        if (event.player == player) return false;
                        var color = get.color(event.card);
                        if (color != 'red' && color != 'black') return false;
                        if (get.type(event.card) != 'trick') return false;
                        var info = get.info(event.card);
                        var vcard = {
                            name: event.card.name,
                            nature: event.card.name.nature,
                        };
                        if (info.allowMultiple == false) return false;
                        if (
                            game.hasPlayer(function(current) {
                                return player.canUse(vcard, current);
                            })
                        ) {
                            for (var item of cards) {
                                if (get.color(item, false) == color) return true;
                            }
                            return false;
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        var cards = player.getCards('sx', function(cardx) {
                            return cardx.hasGaintag('tlbb_pojie');
                        });
                        var vcard = {
                            name: trigger.card.name,
                            nature: trigger.card.name.nature,
                        };
                        player
                            .chooseCardButton(cards, [1, 1], '<img style=width:150px height=38px src=extension/金庸群侠传/image/button/jy_button_beimingshengong.jpg><br>是否弃置一张与此牌颜色相同的<戒>视为使用' + get.translation(trigger.card))
                            .set('filterButton', function(button) {
                                return get.color(button.link, false) == _status.event.cardColor;
                            })
                            .set('ai', function(button) {
                                var player = _status.event.player;
                                //if(get.position(button.link)=="s"&&get.value(button.link)>5) return -1;
                                return player.getUseValue(_status.event.cardx);
                            })
                            .set('cardColor', get.color(trigger.card))
                            .set('cardx', vcard);
                        ('step 1');
                        if (result.bool) {
                            player.loseToDiscardpile(result.links);
                            var vcard = {
                                name: trigger.card.name,
                                nature: trigger.card.name.nature,
                            };
                            player.chooseUseTarget(vcard, true);
                        } else {
                            player.getStat('triggerSkill').tlbb_beiming--;
                        }
                    },
                },
                tlbb_pojie_lose: {
                    trigger: { player: ['loseEnd', 'tlbb_pojieAfter'] },
                    firstDo: true,
                    forced: true,
                    popup: false,
                    forced: true,
                    content() {
                        var cards = player.getCards('sx', function(cardx) {
                            return cardx.hasGaintag('tlbb_pojie');
                        });
                        if (cards.length) {
                            player.markSkill('tlbb_pojie');
                        } else {
                            player.unmarkSkill('tlbb_pojie');
                        }
                    },
                },
                tlbb_pojie: {
                    group: 'tlbb_pojie_lose',
                    intro: {
                        mark(dialog, storage, player) {
                            var cards = player.getCards('sx', function(cardx) {
                                return cardx.hasGaintag('tlbb_pojie');
                            });
                            if (cards.length) {
                                dialog.addAuto(cards);
                            } else {
                                return '没有卡牌';
                            }
                        },
                        markcount(storage, player) {
                            var cards = player.getCards('sx', function(cardx) {
                                return cardx.hasGaintag('tlbb_pojie');
                            });
                            return cards.length;
                        },
                    },
                    onremove(player, skill) {
                        var cards = player.getCards('sx', function(cardx) {
                            return cardx.hasGaintag('tlbb_pojie');
                        });
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                    mod: {
                        aiOrder(player, card, num) {
                            if (get.itemtype(card) == 'card' && card.hasGaintag('tlbb_pojie')) return num - 0.1;
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'useCard', source: 'damageSource' },
                    forced: true,
                    filter(event, player) {
                        if (event.name == 'damage') return event.num > 0;
                        if (event.name == 'useCard') {
                            if (event.card.name == 'jiu') return true;
                            if (get.type(event.card) != 'trick') return false;
                            var info = get.info(event.card);
                            if (info.allowMultiple == false) return false;
                            if (event.targets && event.targets.length == 1 && event.targets[0].hasSex('female')) {
                                if (event.targets[0] != player) return true;
                            }
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        var num = trigger.name == 'damage' ? trigger.num : 1;
                        if (trigger.name == 'damage' && trigger.player.isDead()) num = num * 2;
                        event.cards = get.cards(num);
                        event.gain = false;
                        if (player.storage.tlbb_huansu) {
                            player.addToExpansion(event.cards, 'gain2', 'log').gaintag.add('tlbb_pojie');
                        } else {
                            event.gain = true;
                            game.cardsGotoSpecial(event.cards);
                        }
                        ('step 1');
                        if (event.gain) {
                            player.$gain2(event.cards);
                            game.log(player, '将', event.cards, '置于了侠客牌上');
                            player.directgains(event.cards, null, 'tlbb_pojie');
                        }
                        ('step 2');
                        player.markSkill('tlbb_pojie');
                    },
                    markimage: 'extension/金庸群侠传/image/icon/jyxuzhupojie.jpg',
                },
                tlbb_huansu: {
                    init(player, skill) {
                        player.storage[skill] = false;
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    derivation: ['tlbb_beiming'],
                    trigger: { player: 'tlbb_pojieAfter' },
                    forced: true,
                    filter(event, player) {
                        if (player.storage.tlbb_huansu) return false;
                        var count = player.countCards('s', function(cardx) {
                            return cardx.hasGaintag('tlbb_pojie');
                        });
                        return count >= 3;
                    },
                    content() {
                        'step 0';
                        player.$fullscreenpop('还俗', 'fire');
                        player.loseMaxHp();
                        ('step 1');
                        if (player.hp < player.maxHp) {
                            player.recover();
                        }
                        player.node.avatar.setBackgroundImage('extension/金庸群侠传/character/illustration/tlbb_xinxuzhu.jpg');
                        player.update();
                        player.addSkills('tlbb_beiming');
                        player.storage.tlbb_huansu = true;
                        player.awakenSkill('tlbb_huansu');
                        var cards = player.getCards('s', function(cardx) {
                            return cardx.hasGaintag('tlbb_pojie');
                        });
                        player.addToExpansion(cards, 'gain2').gaintag.add('tlbb_pojie');
                        ('step 2');
                        player.markSkill('tlbb_pojie');
                    },
                },
                tlbb_qiangcan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'gameStart',
                        player: 'enterGame',
                    },
                    group: 'tlbb_qiangcan2',
                    filter(event, player) {
                        if (player.hasSkill('tlbb_chusi')) return false;
                        return game.findPlayer(function(current) {
                            return !current.hasSkill('tlbb_chusi');
                        });
                    },
                    forced: true,
                    content() {
                        for (var i of game.players) {
                            if (!i.hasSkill('tlbb_chusi')) {
                                player.addSkills('tlbb_chusi');
                                player.markSkill('tlbb_chusi2');
                                player.update();
                            } else {
                                event.finish();
                            }
                        }
                    },
                    ai: {
                        threaten: 0.8,
                    },
                },
                tlbb_qiangcan2: {
                    trigger: { global: 'dieBegin' },
                    filter(event, player) {
                        return event.player.hasSkill('tlbb_chusi');
                    },
                    forced: true,
                    content() {
                        game.playJY(['tlbb_qiangcan1', 'tlbb_qiangcan2'].randomGet());
                        player.addSkills('tlbb_chusi');
                        player.markSkill('tlbb_chusi2');
                        player.update();
                    },
                    ai: {
                        threaten: 0.8,
                    },
                },
                tlbb_chusi: {
                    trigger: { player: 'damage' },
                    _priority: 28,
                    forced: true,
                    filter(event, player) {
                        if (player.hasSkill('tlbb_chusi')) return true;
                        return false;
                    },
                    group: 'tlbb_chusi2',
                    content() {
                        'step 0';
                        trigger.source.chooseBool('是否废除目标【储嗣】的地位,取而代之？').set('ai', function() {
                            if (get.attitude(trigger.player, trigger.source) <= 0) return true;
                            return false;
                        });
                        ('step 1');
                        if (result.bool) {
                            //  trigger.source.chooseToDiscard('he',true);
                            game.playJY(['tlbb_qiangcan1', 'tlbb_qiangcan2'].randomGet());
                            player.removeSkills('tlbb_chusi');
                            player.unmarkSkill('tlbb_chusi2');
                            trigger.source.addSkills('tlbb_chusi');
                            trigger.source.markSkill('tlbb_chusi2');
                        } else {
                            event.finish();
                        }
                    },
                    ai: {
                        threaten: 3,
                    },
                },
                tlbb_chusi2: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'phaseDrawBegin1' },
                    markimage: 'extension/金庸群侠传/image/icon/jychusi.jpg',
                    //marktext2:'胄',
                    //marktext:"<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jychusi.jpg>",
                    intro: { content: '【遗胄】摸牌阶段,你多摸两张牌;你的手牌上限+2.' },
                    forced: true,
                    filter(event, player) {
                        return !event.numFixed;
                    },
                    content() {
                        trigger.num += 2;
                    },
                    ai: { threaten: 1.5 },
                    mod: {
                        maxHandcard(player, num) {
                            return num + 2;
                        },
                    },
                },
                tlbb_liuwang: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'phaseJieshuBegin' },
                    forced: true,
                    check() {
                        return false;
                    },
                    filter(event, player) {
                        if (player.hasSkill('tlbb_chusi')) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        player.chooseControl('失去体力', '弃两张牌', function(event, player) {
                            if (get.effect(player, { name: 'losehp' }, player, player) > 0) return '失去体力';
                            if (player.hp == player.maxHp || player.countCards('h') < 3) return '失去体力';
                            if (player.hp < player.maxHp - 2 || player.hp <= 1) return '弃两张牌';
                            return '失去体力';
                        });
                        ('step 1');
                        if (result.control == '失去体力') {
                            player.loseHp();
                        } else {
                            player.chooseToDiscard(2, 'he', true);
                        }
                    },
                    ai: { neg: true },
                },
                tlbb_rangquan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'dying' },
                    markimage: 'extension/金庸群侠传/image/icon/jyrangquan.jpg',
                    //marktext2:'权',
                    //marktext:"<img style=width:33px height:33px src=extension/金庸群侠传/image/icon/jyrangquan.jpg>",
                    forced: true,
                    _priority: 6,
                    filter(event, player) {
                        return player.hp <= 0;
                    },
                    init(player) {
                        player.markSkill('tlbb_rangquan');
                        player.storage.tlbb_rangquan = false;
                    },
                    intro: { content: 'limited' },
                    content() {
                        'step 0';
                        player.$fullscreenpop('我才是皇子', 'fire');
                        player.storage.tlbb_rangquan = true;
                        for (var i of game.players) {
                            i.removeSkill('tlbb_chusi');
                            i.removeSkill('tlbb_chusi2');
                            i.unmarkSkill('tlbb_chusi2');
                        }
                        ('step 1');
                        player.removeSkills('tlbb_qiangcan');
                        player.removeSkills('tlbb_liuwang');
                        player.loseMaxHp();
                        player.recover(2);
                        player.draw(2);
                        player.addSkill('tlbb_chusi2');
                        player.markSkill('tlbb_chusi2');
                        player.unmarkSkill('tlbb_rangquan');
                        player.awakenSkill('tlbb_rangquan');
                        player.update();
                    },
                },
                tlbb_yirong1: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'phaseZhunbeiBegin' },
                    filter(event, player) {
                        //if(event.player==player) return true;
                        return player.storage.tlbb_yirong && player.storage.tlbb_yirong.length;
                    },
                    check(event, player) {
                        return get.attitude(player, event.player) > 2;
                    },
                    content() {
                        'step 0';
                        if (player.storage.tlbb_yirong.length > 1) {
                            var dialog = ui.create.dialog('<img style=width:150px  src=extension/金庸群侠传/image/button/jy_button_yirong.jpg><br>选择一张侠客牌对其易容:', 'hidden');
                            dialog.add([player.storage.tlbb_yirong, 'character']);
                            player.chooseButton(dialog, true).ai = function(button) {
                                return get.rank(button.link, true);
                            };
                        } else event._result = { bool: true, links: player.storage.tlbb_yirong };
                        ('step 1');
                        if (result.links[0]) {
                            var name = result.links[0];
                            var cardname = 'yirong_card_' + name;
                            trigger.player.$gain2(game.createCard(cardname, '', ''));
                            player.popup(result.links[0]);
                            trigger.player.setAvatar(trigger.player.name, result.links[0]);
                            var skills = lib.character[name][3].slice(0);
                            trigger.player.addTempSkill('jy_baiban', 'phaseAfter');
                            var banList = trigger.player.getSkills(null, false, false);
                            trigger.player.storage.jy_baiban.addArray(banList);
                            trigger.player.addAdditionalSkills('tlbb_yirong', skills, true);
                            if (trigger.player.storage.tlbb_yirong_source) {
                                trigger.player.storage.tlbb_yirong_source.add(player);
                            } else {
                                trigger.player.storage.tlbb_yirong_source = [player];
                            }
                            var next = game.createEvent('tlbb_yirong_lose', false);
                            next.player = trigger.player;
                            next.forceDie = true;
                            next.setContent(function() {
                                delete player.storage.tlbb_yirong_source;
                                player.removeAdditionalSkills('tlbb_yirong');
                                player.setAvatar(player.name, player.name);
                            });
                            event.next.remove(next);
                            event.getParent('phase').after.push(next);
                            player.storage.tlbb_yirong.remove(name);
                            player.markSkill('tlbb_yirong');
                            player.addTempSkill('tlbb_yirong1_damage');
                        }
                    },
                    group: 'tlbb_yirong',
                    subSkill: {
                        damage: {
                            trigger: { player: 'damageBegin1' },
                            charlotte: true,
                            filter(event, player) {
                                if (!event.card || event.card.name != 'sha') return false;
                                const target = event.source;
                                if (!target) return false;
                                if (!target.storage.tlbb_yirong_source) return false;
                                if (!target.storage.tlbb_yirong_source.includes(player)) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                game.playJY(['tlbb_yirong11', 'tlbb_yirong12'].randomGet());
                                trigger.num++;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current, isLink) {
                                        if (!target) return;
                                        //if(isLink) return;
                                        if (card.name != 'sha') return;
                                        if (
                                            target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: card,
                                            })
                                        )
                                            return;
                                        if (!player.storage.tlbb_yirong_source) return;
                                        if (!player.storage.tlbb_yirong_source.includes(target)) return;
                                        return [1, -1.5];
                                    },
                                },
                            },
                        },
                    },
                },
                tlbb_yirong: {
                    audio: 'tlbb_yirong1',
                    trigger: { global: 'gameStart', player: ['enterGame', 'phaseZhunbeiBefore'] },
                    init(player, skill) {
                        if (!player.storage[skill]) player.storage[skill] = [];
                    },
                    mark: true,
                    markimage: 'extension/金庸群侠传/image/icon/jyyirong.jpg',
                    intro: { content: 'characters' },
                    forced: true,
                    filter(event, player) {
                        return !player.storage.tlbb_yirong || !player.storage.tlbb_yirong.length;
                    },
                    content() {
                        'step 0';
                        var list = [];
                        var list2 = [];
                        var players = game.players.concat(game.dead);
                        for (var i of players) {
                            if (i.name && lib.character[i.name]) list2.add(i.name);
                            if (i.name1 && lib.character[i.name1]) list2.add(i.name1);
                            if (i.name2 && lib.character[i.name2]) list2.add(i.name2);
                        }
                        for (var i in lib.character) {
                            if (lib.character[i][4].includes('boss')) continue;
                            if (lib.character[i][3].length == 0) continue;
                            if (lib.character[i][4].includes('minskin')) continue;
                            if (lib.filter.characterDisabled2(i)) continue;
                            if (list2.includes(i)) continue;
                            list.push(i);
                        }
                        var names = list.randomGets(8);
                        player.storage.tlbb_yirong = names;
                        player.markSkill('tlbb_yirong');
                        event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player), [names, 'character']);
                        var cards = [];
                        for (var j of names) {
                            var cardname = 'yirong_card_' + j;
                            lib.card[cardname] = {
                                fullimage: true,
                                image: 'character:' + j,
                            };
                            lib.translate[cardname] = lib.translate[j];
                            cards.push(game.createCard(cardname, '', ''));
                        }
                        player.$gain2(cards);
                        ('step 1');
                        event.dialog.close();
                    },
                },
                tlbb_xiaoti: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'damageEnd' },
                    usable: 1,
                    filter(event, player) {
                        return player.countCards('h') > 0 && event.player.isAlive() && event.player.isDamaged();
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player.chooseToDiscard(1, 'h', get.prompt2('tlbb_xiaoti', trigger.player)).set('ai', function(card) {
                            var att = get.attitude(_status.event.player, trigger.player);
                            if (att > 2) {
                                if (trigger.player.hp < trigger.player.maxHp) {
                                    return 9 - get.value(card);
                                }
                                return -1;
                            }
                            return -1;
                        });
                        ('step 1');
                        if (result.bool) {
                            trigger.player.recover();
                        } else {
                            player.getStat('triggerSkill').tlbb_xiaoti--;
                        }
                    },
                },
                //-------------end--------
            },
            translate: {
                //翻译/天龙八部
                tlbb_fengboe: '风波恶',
                tlbb_haodou: '好斗',
                tlbb_haodou_info: '<b>锁定技.</b>其他角色的【比武】因弃置和使用进入弃牌堆时,你获得之;其他角色使用的有花色的【杀】进入弃牌堆时,若你手牌中没有该花色的杀,你获得之;你A点和K点的手牌视为比武;你成为比武的目标时,其需先打出杀;你使用或成为比武的目标时,目标/来源的非锁定技失效,直到当前回合结束.',
                tlbb_chandou: '缠斗',
                tlbb_chandou_info: '<b>限定技.</b>出牌阶段,你选择一名体力值等于你的其他角色,你与其进入单挑状态,直到你或其死亡.赢的角色摸三张牌.',
                tlbb_haodou2: '好斗',
                tlbb_haodou2_info: '<b>锁定技.</b>其他角色的【比武】因弃置和使用进入弃牌堆时,你获得之;其他角色使用的有花色的【杀】进入弃牌堆时,若你手牌中没有该花色的杀,你获得之;你A点和K点的手牌视为比武;你成为比武的目标时,其需先打出杀;你使用或成为比武的目标时,目标/来源的非锁定技失效,直到当前回合结束.',
                tlbb_haodou3: '好斗',
                tlbb_haodou3_info: '<b>锁定技.</b>其他角色的【比武】因弃置和使用进入弃牌堆时,你获得之;其他角色使用的有花色的【杀】进入弃牌堆时,若你手牌中没有该花色的杀,你获得之;你A点和K点的手牌视为比武;你成为比武的目标时,其需先打出杀;你使用或成为比武的目标时,目标/来源的非锁定技失效,直到当前回合结束.',
                tlbb_xueyi: '血役',
                tlbb_xueyi_info: '游戏开始前,你将场景永久改为<雁门关> .<p><b>锁定技,</b>汉人角色计算与异族角色的距离为1.',
                tlbb_wusha: '误杀',
                tlbb_wusha_info: '异族角色死亡后,若其为你的:队友,你失去1点体力,摸3张牌;敌方,你回复1点体力,摸3张牌.',
                tlbb_choumou: '绸缪',
                tlbb_choumou_info: '<b>觉醒技.</b>首名异族队友死亡后,你减一点体力上限,获得〖遗信〗,令一名其他角色获得〖无狗〗并将场景永久改为<杏子林>.',
                tlbb_yixin_new: '遗信',
                tlbb_yixin_new2: '遗信',
                tlbb_yixin_new_info: '结束阶段,你可将一张手牌标记为<遗信>并随机洗入牌堆前3X张任意位置(X为存活角色数).下个回合开始时,若<遗信>位于:汉人区域内,你摸汉人数量的牌;异族区域内,你获得异族角色各一张牌;牌堆:你获得此牌至牌堆顶之间的所有牌;弃牌堆,你令一名异族角色弃置所有手牌.',
                tlbb_wangjiantong: '汪剑通',
                tlbb_wulaoda: '乌老大',
                tlbb_fudu_new: '符毒',
                tlbb_fudu_new_info: '<b>锁定技.</b>准备阶段,你将【摧筋断骨】、【走火入魔】、【生死符】各一张置入你的判定区.',
                tlbb_lvdao_new: '绿刀',
                tlbb_lvdao_new_info: '你使用黑色【杀】时,若此时你的体力值为:3的倍数,你可以额外指定一名目标;6的倍数,此牌的伤害+1;12的倍数,此牌不能被抵消.',
                tlbb_chujie_new: '除疖',
                tlbb_chujie_new_info: '<b>锁定技.</b>当你的负面延时锦囊牌判定生效时,你失去一点体力令判定结果反转,若判定失败,你获得此延时锦囊牌.',
                tlbb_chujie_new2: '除疖2',
                tlbb_chujie_new2_info: 'undefined',
                tlbb_duanyanqing_new: '邪段延庆',
                tlbb_fuyu_new: '腹语',
                tlbb_fuyu_new_info: '出牌阶段,你可以在A到K之间声明两个数字X和Y,你判定,若判定牌的点数位于X与Y组成的区间之内(含X和Y),则你获得该区间以外的所有点数的牌各一张.',
                tlbb_konghun_new: '控魂',
                tlbb_konghun_new_info: '结束阶段,你可以选择一名体力值不等于你的其他角色,将双方的体力值调整为双方体力值之和的平均值(向下取整,若有余数则各摸张牌).若此次:你失去了体力且其回复了体力,你立即代替其执行一个回合(该回合内你最多只能使用三张牌);你回复了体力且其失去了体力,本局游戏你不能再对该角色发动〖控魂〗.',
                tlbb_fengyue_new: '风月',
                tlbb_fengyue_new_info: '你对女性角色/女性角色对你使用基本牌或普通锦囊牌时,你可以选择令其/令你摸一张牌,此牌对其/对你额外结算一次.',
                tlbb_haina: '海纳',
                tlbb_haina_info: '其他使用对你使用的牌结算完后,若你未因此技能获得过此牌名的牌,你可以获得之.',
                tlbb_changchun: '长春',
                tlbb_changchun_info: '<b>锁定技.</b>回合结束时,你将手牌回复至本回合出牌阶段开始时的手牌.',
                tlbb_xiaoyaozi: '绝逍遥子',
                tlbb_yanmenyizi: '雁门余字',
                tlbb_yanmenyizi_info: '你使用此牌后,根据你的身份立即获得一顶技能:<br>刺客--〖祸延〗;<br>奸细--〖谣谍〗;<br>护法--〖缚龙〗;<br>盟主--〖伏击〗.<br>销毁此牌.',
                tlbb_zhiguangdashi: '智光大师',
                tlbb_tashu: '拓书',
                tlbb_zaizhang: '灾瘴',
                tlbb_pudu_info: '<b>锁定技.</b>出牌阶段开始时,你获得一枚<瘴>.你视为使用一张【歃血为盟】,此牌结算完后,未因此回复体力的角色可以选择清除其一项负面状态.最后,你摸X张牌,使用Y张装备(X为依此法回复体力值的角色数,Y为依此法清除负面状态的角色数).',
                tlbb_tashu_info: '<b>觉醒技.</b>你累计获得三枚<瘴>后,你加一点上限,回复一点体力,将〖普渡〗改为<<b>锁定技,</b>出牌阶段开始时,你视为使用一张【漫天花雨】,并令此牌的一个目标随机处于一项负面状态.>,你将一张【雁门余字】并交给一名角色.',
                tlbb_zaizhang_info: '当你使用牌指定至少两名角色为目标时,你可以选择其中至多三名目标,令此牌对你选择的角色有X/3的几率无效(X为你的<瘴>数).',
                tlbb_pudu: '普渡',
                tlbb_yelvnielugu: '耶律涅鲁古',
                tlbb_xiaoqiang: '萧墙',
                tlbb_xiaoqiang_info: '<b>锁定技.</b>当你使用装备牌后,你获得此装备牌上的技能,废除对应的装备栏,你可以将因此失去的装备牌交给一名其他角色.',
                tlbb_qipan: '起叛',
                tlbb_qipan_info: '<b>觉醒技.</b>当你被废除的装备栏数达到三个或更多后,你选择任意名其他角色,你获得这些角色装备区里各一张牌(若无装备牌则不获得).你加一点体力上限,回复一点体力,失去〖萧墙〗,获得〖劫禅〗.',
                tlbb_jieshan: '劫禅',
                tlbb_jieshan_info: '<b>锁定技.</b>你对〖起叛〗选择的角色造成伤害时,若你有已废除的装备栏,你回复其中一个;若你没有被废除的装备栏,此伤害+1.',
                jy_qihua: '奇花',
                jy_qihua_info: '当你需要使用一张【九花玉露丸】时,你可以交给一名拥有技能〖莳花〗的其他角色一张牌,你将此牌当【九花玉露丸】使用.',
                jy_qihua_skill: '奇花',
                jy_shihua_skill_info: '当你需要使用一张【九花玉露丸】时,你可以交给一名拥有技能〖莳花〗的其他角色一张牌,你将此牌当【九花玉露丸】使用.',
                tlbb_shihua: '莳花',
                tlbb_shihua_info: '游戏开始时,你将八张【奇花】洗入牌堆(♣️️2至9各一张).<p>当【奇花】作为判定牌生效前,你可以将之更改为任意一个花色,若此次判定结果:生效,你摸两张牌;失效,进行判定的角色弃置两张牌.<p>其他角色需要使用【九花玉露丸】时,可以交给你一张手牌,将其手牌中的一张【奇花】当【九花玉露丸】使用.',
                tlbb_shihua2: '莳花',
                tlbb_yihui: '异卉',
                tlbb_yihui_info: '出牌阶段限一次,或当你受到伤害后,你可以获得一张【奇花】.<b>锁定技,</b>你手牌中的【奇花】按点数视为如下牌:<br>2--【闪】;<br>3--【九花玉露丸】;<br>4--【酒】;<br>5--【妙手空空】;<br>6--【无极而生】;<br>7--【漫天花雨】;<br>8--【飞燕银梭】;<br>9--【隔空点穴】.',
                tlbb_shiqinglu: '石清露',
                tlbb_cuibaiquan: '崔百泉',
                tlbb_jizhu: '激珠',
                tlbb_jizhu_info: '出牌阶段限一次,你可以展示牌堆顶五张牌并使用其中点数为1、5、10的牌(须合法),你将剩余牌以任意顺序置于牌堆顶.若你未以此法使用牌,你获得这五张牌.',
                tlbb_qianzhu: '嵌珠',
                tlbb_qianzhu_info: '<b>锁定技.</b>当你点数为1、5、10的手牌因弃置进入弃牌堆时,你需选择使用其中任意张牌(须合法),失去X点体力(X为这些牌中你未使用的牌数).',
                tlbb_guhong: '孤鸿',
                tlbb_guhong_info: '当你使用基本牌或普通锦囊牌时,若其他角色与你的势力均不相同,你可以令不是此牌目标的角色也成为此牌的目标(需合法).',
                tlbb_juexiaofeng: '绝萧峰',
                tlbb_qiaofengazhu: '乔峰阿朱',
                tlbb_qiaozhuang: '乔妆',
                tlbb_qiaozhuang_info: '你拥有〖降龙〗、〖构陷〗、〖诓惑〗、〖滥情〗、〖回天〗、〖飞钉〗、〖偃兵〗、〖移星〗(每项限用一次).',
                tlbb_cizhu: '辞朱',
                tlbb_cizhu_info: '<b>觉醒技.</b>当你失去〖乔妆〗里的所有技能后,你减一点体力上限,回复一点体力,性别调整为男,改变你的势力并获得〖孤鸿〗、〖亢悔〗.',
                tlbb_kunlong: '困龙',
                tlbb_kunlong_info: '游戏开始时,若你不是盟主,则所有除盟主外的角色随机交换身份牌,且直到你死亡前,隐藏你的身份牌(对你也不可见),且你的身份不能被标记.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>锁定技,</b>你身份牌隐藏期间,取消你和盟主对对方造成的伤害.',
                tlbb_zhuixiong: '追凶',
                tlbb_zhuixiong_info: '游戏首轮开始时,你猜测一名除盟主外的其他角色为内奸,每当你对其使用牌时,你摸一张牌.你猜测的角色死亡后,若其不是内奸,你减一点体力上限,若你没有〖亢龙〗,获得之,重新猜测一名其他角色为内奸.',
                tlbb_kanglong: '亢龙',
                tlbb_kanglong_info: '当你造成伤害时,你可以防止此次伤害,摸X牌(X为你猜测内奸错误的次数).',
                tlbb_fulong: '缚龙',
                tlbb_fulong_info: '出牌阶段结束时,若你未于此回合造成伤害,你可以弃置两张牌并令一名其他角色翻面.',
                tlbb_suyuan: '溯源',
                tlbb_suyuan_info: '<b>觉醒技.</b>内奸死亡后,或场上只有你和盟主存活时,亮出你的身份牌,并获得〖缚龙〗.',
                tlbb_xuemuhua: '薛慕华',
                tlbb_bihuo: '避祸',
                tlbb_bihuo_info: '一名角色受到伤害时,若伤害来源不为当前回合角色,你可以获得其一张牌并防止此伤害.',
                tlbb_shuming: '赎命',
                tlbb_shuming_info: '<b>限定技.</b>其他角色死亡前,你令其回复至多3点体力,移除其一项除盟主技、限定技、锁定技、觉醒技以外的技能,你减1点体力上限并获得其此次移除的技能.',
                tlbb_spjiumozhi: 'sp鸠摩智',
                tlbb_tanchen: '贪嗔',
                tlbb_tanchen_info: '每局游戏限两次,出牌阶段,你可以减一点体力上限,你增加一个宝物栏.',
                tlbb_jieduan: '戒断',
                tlbb_jieduan_info: '你可以将黑色手牌当【走火入魔】使用.',
                tlbb_qixing: '启衅',
                tlbb_qixing_info: '回合开始时,若你区域内有牌,你可以令一名装备了宝物牌的其他角色选择:其用一张宝物牌交换你区域内一张牌;或其技能于此回合无效.',
                tlbb_youtanzhi: '游坦之',
                tlbb_guiyi: '鬼役',
                tlbb_guiyi_info: '<b>限定技.</b>出牌阶段,你选择一名其他角色.每当其受到伤害时,你代替其承受此伤害,令其获得至多两张毒药牌,你获得至多两张秘籍牌.',
                tlbb_tuotai: '脱胎',
                tlbb_tuotai_info: '<b>锁定技.</b>全局限四次,你进入濒死状态时,你减一点体力上限,将体力值回复至1点,声明一个未以此法声明过的花色,每当你失去此花色最后的手牌后,你获得一张此花色的牌.',
                tlbb_xunzang: '殉葬',
                tlbb_xunzang_info: '<b>觉醒技.</b>你因〖鬼役〗选择的角色死亡后或你发动第四次〖脱胎〗后,获得〖舛途〗.',
                tlbb_chuantu: '舛途',
                tlbb_chuantu_info: '<b>锁定技.</b>你受到蛊毒伤害时,取消之,若你有因〖脱胎〗声明过的花色,你移除其中一个花色,加1点体力上限.',
                tlbb_jue_tianshantonglao: '绝天山童姥',
                tlbb_huantong: '还童',
                tlbb_huantong_info: '<b>锁定技.</b>回合结束时,你减一点体力上限;每当你受到伤害时,你改为减等量的体力上限.',
                tlbb_kongfu: '控符',
                tlbb_kongfu_info: '每当你的体力上限变化后,你令一名没有<生死符>的其他角色获得一枚此标记.拥有此标记的角色造成伤害后,你摸一张牌.',
                tlbb_lingzun: '灵尊',
                tlbb_lingzun_info: '觉醒技,<b>锁定技.</b>当你的体力上限变化后,若你的体力上限不大于3,你失去〖还童〗,且拥有<生死符>的角色造成伤害后你不再摸牌,改为其回合结束时进行判定:若不为♣️️,其失去一点体力.',
                tlbb_jiumozhi: '鸠摩智',
                tlbb_wuchi: '武痴',
                tlbb_wuchi_info: '<b>锁定技.</b>每轮游戏开始时,你减一点体力上限,依次获得以下一项:〖焰刀〗、〖劫指〗、〖拈花〗.',
                tlbb_yandao: '焰刀',
                tlbb_yandao_info: '每当你的体力上限变化后,你可以对一名其他角色随机造成1至2点火焰伤害.',
                tlbb_jiezhi: '劫指',
                tlbb_jiezhi_info: '你造成伤害后,你可以观看目标的手牌,弃置其中的所有红色手牌,其随机获得等量黑色牌.',
                tlbb_nianhua: '拈花',
                tlbb_nianhua_info: '出牌阶段限,你可以弃置一张红色牌,随机获得两张♣️️牌.',
                tlbb_mozhang: '魔障',
                tlbb_mozhang_info: '<b>限定技,</b>当你处于濒死状态时,你将体力上限改为2,失去当前所有技能,获得〖洗髓〗.',
                tlbb_xisui: '洗髓',
                tlbb_xisui_info: '<b>锁定技.</b>你的出牌阶段外,当你失去手牌后,若你的手牌少于四种花色,则你将手牌补至四种花色.',
                tlbb_yelvhongji: '耶律洪基',
                tlbb_nanzheng: '南征',
                tlbb_nanzheng_info: '出牌阶段限一次,你可以弃置一张装备牌并翻面,视为使用了一张【鞑虏入侵】.',
                tlbb_mingjin: '鸣金',
                tlbb_mingjin_info: '一名角色使用的牌对其中一名目标结算完毕后,若此牌仍有尚未结算的目标,你可以令此牌停止结算.',
                tlbb_congjian2: '从谏',
                tlbb_congjian2_info: '',
                tlbb_congjian: '从谏',
                tlbb_congjian_info: (function() {
                    if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技,</b>其他列国势力角色的出牌阶段限一次,其可以弃置一张装备牌并失去一点体力,令你翻面.';
                    return '<b>盟主技,</b>其他群雄势力角色的出牌阶段限一次,其可以弃置一张装备牌并失去一点体力,令你翻面.';
                })(),
                //"tlbb_congjian_info":"<b>盟主技,</b>其他XXX势力角色的出牌阶段限一次,其可以弃置一张装备牌并失去一点体力,令你翻面.",
                tlbb_spazi: 'sp阿紫',
                tlbb_daoding_old: '盗鼎',
                tlbb_daoding_old_info: '<b>限定技,</b>你可以令一名角色随机使用(所有区域)一张【乌蚕衣】.<b>锁定技.</b>你因盗鼎选择的角色造成或受到的伤害均视为火焰伤害.',
                tlbb_daoding: '盗鼎',
                tlbb_daoding_info: '出牌阶段,你可以从游戏内使用【神木王鼎】.<b>锁定技,</b>若你装备了【神木王鼎】,你于回合内使用【杀】无次数限制.',
                tlbb_quyi: '驱役',
                tlbb_quyi_info: '一名角色造成伤害属性后,你可以令其选择项:弃置一张牌;或将造成伤害的牌交给你.',
                tlbb_yingu: '引蛊',
                tlbb_yingu_info: '结束阶段,若你的手牌没有硝磷火弹、或属性杀,你可以展示所有手牌,你随机获得这两种牌中的一张.',
                tlbb_wuyazi: '无崖子',
                tlbb_zhenlong: '珍拢',
                tlbb_zhenlong_info: '你成为普通锦囊牌的目标时,或一张延时锦囊牌对你生效前,你可以令一名其他角色选择:令你随机获得一张【金刚护体】;或其摸一张牌.',
                tlbb_zaojie2: '劫',
                tlbb_zaojie2_info: '',
                tlbb_zaojie: '造劫',
                tlbb_zaojie_info: '当你的牌因弃置而置入弃牌堆时,你可以将其中任意张牌置于等量侠客牌上没有<劫>的角色的侠客牌上各一张.一名角色判定时,其将<劫>作为判定牌.',
                tlbb_qingshou: '倾授',
                tlbb_qingshou_info: '<b>限定技.</b>你进入濒死状态时,你令因〖珍拢〗使你获得【金刚护体】最多的角色失去所有技能,其体力上限改为3,其获得〖北冥〗,〖破劫〗,〖无相〗,并将牌堆顶8张牌当<戒>置于侠客牌上.',
                tlbb_murongbo: '慕容博',
                tlbb_yaodie: '谣谍',
                tlbb_yaodie_info: '<b>限定技,</b>一轮游戏开始时,你可以选择一名其他角色并声明一种牌的类别(仅你知道).该角色于本轮首次使用与你记录的类别相同的牌后,除其以外的所有角色依次亮出牌堆顶的一张牌并对其使用亮出的牌,若不能使用,则你获得之.你摸X张牌(X为该角色因此法受到的伤害点数).该轮游戏结束后,若其未于本轮使用过与你记录类别相同的牌,则你重置【谣谍】.',
                tlbb_fuyan: '复燕',
                tlbb_fuyan_info: '<b>锁定技.</b>一个势力最后的角色死亡后,你重置〖谣谍〗.',
                tlbb_quanguanqing: '全冠清',
                tlbb_zhengbian: '政变',
                tlbb_zhengbian_info: '<b>限定技.</b>回合开始时,你选择一名角色并观看其手牌并展示其中一张牌,称为<密信>牌,除其以外的所有角色对其使用与<密信>牌花色相同的的牌时,摸一张牌.',
                tlbb_yongli: '拥立',
                tlbb_yongli_info: '<b>锁定技.</b>若你因〖政变〗选择的角色已受伤或已死亡,则因〖政变〗摸牌最多的角色(可以不唯一)使用<杀>的额定目标加一.',
                tlbb_ruanxingzhu: '阮星竹',
                tlbb_dianqing: '点青',
                tlbb_dianqing_info: '游戏开始时,你选择一名其他角色,令其获得一枚<刺青>标记.你受到伤害后,你可以将<刺青>标记转移至另一名角色.',
                tlbb_chunhui: '春晖',
                tlbb_chunhui_info: '<b>锁定技.</b>你使用普通锦囊牌或基本牌时,若此牌为红色,则拥有<刺青>的角色摸一张牌;若为黑色,则拥有<刺青>的角色需弃置一张牌.',
                tlbb_murongfu: '慕容复',
                tlbb_yixing: '移星',
                tlbb_yixing_info: '当你成为其他角色使用的普通锦囊牌的目标时,你可以弃置一张牌,将此牌转移给一名其他角色(若其已是目标,则额外结算一次).',
                tlbb_chongzuo: '重祚',
                tlbb_chongzuo_info: '每当你装备区置入一张牌/失去一张牌后,你可以令一名角色弃置/摸一张牌.',
                tlbb_qingfu: '倾覆',
                tlbb_qingfu_info: '<b>锁定技,</b>回合结束时,你失去装备区里的一张牌.',
                tlbb_zifu: '自负',
                tlbb_zifu_info: (function() {
                    if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技,</b>其他列国势力角色回合结束时,若其装备区里的牌比你装备区的牌多,你可以将其一张装备牌移至你的装备区里.';
                    return '<b>盟主技,</b>其他群雄势力角色回合结束时,若其装备区里的牌比你装备区的牌多,你可以将其一张装备牌移至你的装备区里.';
                })(),
                //"tlbb_zifu_info":"<b>盟主技,</b>其他XXX势力角色回合结束时,若其装备区里的牌比你装备区的牌多,你可以将其一张装备牌移至你的装备区里.",
                tlbb_muwanqing: '木婉清',
                tlbb_muli: '幕篱',
                tlbb_muli_info: '其他角色使用普通锦囊牌指定你为唯一目标时,你可以交给另一名其他角色一张手牌,其代替你成为此牌的目标.',
                tlbb_shiyin: '使姻',
                tlbb_shiyin_info: '每回合限一次,男性角色使用普通锦囊牌指定你以外的其他唯一目标时,你可以令其摸一张牌,你代替其成为此牌的使用者(不改变目标).',
                tlbb_muwanqingjueshi: '决誓',
                tlbb_muwanqingjueshi_info: '<b>觉醒技,</b>首次有男性获得你的牌后,你与其处于<冥誓>状态.此状态下的角色对唯一其他异性目标使用牌后,令一名角色可以弃置该目标一张牌.',
                tlbb_xiaofeng: '萧峰',
                tlbb_yanbing: '偃兵',
                tlbb_yanbing_info: '一名角色于出牌阶段非首次造成伤害后,或造成大于1点的伤害后,你可以令其摸等同于其本阶段造成伤害数的牌,其翻面,且不能于此阶段使用牌并跳过其弃牌阶段.',
                tlbb_xunzhi: '殉志',
                tlbb_xunzhi_info: '结束阶段开始时,若你此回合造成的伤害数大于1点,你可以令一名此回合内受到过伤害的角色回复一点体力,你翻面.',
                tlbb_saodiseng: '绝扫地僧',
                tlbb_bolan: '博览',
                tlbb_bolan_info: '<b>锁定技.</b>回合结束时,你摸2X张牌(X为你本回合使用牌的花色数).',
                tlbb_qizhao: '气罩',
                tlbb_qizhao_info: '其他角色回合开始时,你可以弃置两张牌,若如此做,其于本回合内每发动一次技能,其失去一点体力.',
                tlbb_shuofa: '说法',
                tlbb_shuofa_info: '<b>限定技,</b>一名角色使用【比武】指定目标时,你可以令此牌无效,该角色与目标失去体力直至只剩一点体力,弃置装备区里的所有装备牌.',
                tlbb_muronglongcheng: '绝慕容龙城',
                tlbb_huanshi: '还施',
                tlbb_huanshi_info: '其他角色发动除盟主技、觉醒技、限定技以外的技能后,你可以获得一枚<还施>标记并记录此技能的名称(不能与已有的<还施>记录的技能名称相同,且同一个回合内,同名的技能只能记录一次).你最多同时拥有7个<还施>标记.你可以在合理的时机移除一枚<还施>,并发动记录于此标记上的技能.',
                tlbb_huandou: '换斗',
                tlbb_huandou_info: '<b>锁定技.</b>每当你的<还施>标记数量发生变化时,你摸一张牌,弃置一张牌.',
                tlbb_dingchunqiu: '丁春秋',
                tlbb_misan: '迷散',
                tlbb_misan_info: '每当你受到伤害后,你可以令一名未拥有<三笑逍遥散>的角色永久获得一枚此标记.一名角色获得<三笑逍遥散>后,每当其使用第三种花色的牌后,其受到一点无来源的伤害.',
                tlbb_fugong: '腐功',
                tlbb_fugong_info: '其他角色受到伤害时,你可以与其拼点.若你赢,则此伤害+1并改为蛊毒伤害;若你未赢,你受到其一点蛊毒伤害.',
                tlbb_sptianshantonglao: 'sp天山童姥',
                tlbb_tongyan: '童颜',
                tlbb_tongyan_info: '<b>锁定技.</b>你的判定牌均视为♥️️.',
                tlbb_liuyang: '六阳',
                tlbb_liuyang_info: '一名角色的判定结果生效前,你可以打出场上一张装备牌代替之.',
                tlbb_duzun: '独尊',
                tlbb_duzun_info: '<b>觉醒技.</b>当场上的延时锦囊牌数量为三时,你减一点体力上限、获得〖六阳〗.',
                tlbb_zhongfu: '种符',
                tlbb_zhongfu_info: '你受到伤害后,你可以摸一张牌,你可以将一张手牌当【生死符】使用.',
                tlbb_duanzhengchun: '界段正淳',
                tlbb_yuanmeng: '鸳梦',
                tlbb_yuanmeng_info: '摸牌阶段结束后,你可以将所有手牌交给一名其他角色,你选择获得其所有红色或黑色手牌.',
                tlbb_niezhai: '孽债',
                tlbb_niezhai_info: '回合阶段开始时,若场上没有存活的女性角色,你可以选择于此回合拥有〖寂灭〗、〖袖剑〗、〖愁肠〗、〖鸳梦〗、〖卷帙〗或〖布谣〗中的一项技能(不能重复选择).',
                tlbb_lanqing: '滥情', //乔峰阿朱滥情
                tlbb_lanqing_info: '<b>锁定技,</b>摸牌阶段,你多摸X张牌(X为存活的女性角色数).出牌阶段结束时,每名女性角色可以弃置你的一张牌.',
                tlbb_lanqingqz: '滥情',
                tlbb_lanqingqz_info: '<b>锁定技,</b>摸牌阶段,你多摸X张牌(X为存活的女性角色数).出牌阶段结束时,每名女性角色可以弃置你的一张牌.',
                tlbb_zhaixingzi: '界摘星子',
                tlbb_qianzui: '谴罪',
                tlbb_qianzui_info: '其他角色回合结束后,若其未于此回合内造成过伤害且其没有<磷>标记,则你摸2张牌,令其获得一枚<磷>.',
                tlbb_lin: '磷',
                tlbb_lin_info: '',
                tlbb_feilin: '飞磷',
                tlbb_feilin_info: '<b>锁定技.</b>当有角色不因此技能受到火焰伤害后,你令所有拥有<磷>的角色受到来自你的一点火焰伤害,其移除<磷>标记.',
                tlbb_liqiushui: '李秋水',
                tlbb_wuxiang: '无相',
                tlbb_wuxiang_backup: '无相',
                tlbb_wuxiang_info: '出牌阶段,你可以将一张手牌当场上一张与此牌颜色相同的的延时锦囊牌使用.',
                tlbb_guixi: '龟息',
                tlbb_guixi_info: '<b>锁定技.</b>你始终跳过你的判定阶段.',
                tlbb_souhun: '搜魂',
                tlbb_souhun_info: '出牌阶段限一次,你可以弃置一张手牌,选择一名角色,选择一项:观看其手牌,并获得其手牌中所有与此牌花色相同的牌;或获得其判定区里与此牌花色相同的一张延时锦囊牌.',
                tlbb_liqinglu: '李清露',
                tlbb_chungui: '春闺',
                tlbb_chungui_info: '每回合限一次,当有男性角色于回合内摸牌阶段外获得牌后,其可以令你摸X张牌,你弃X-1张牌(X为其获得的牌数).',
                tlbb_suyuanlql: '夙缘',
                tlbb_suyuanlql_info: '<b>限定技.</b>出牌阶段你可以与一名男性角色处于<良缘>状态,处于此状态下的角色于回合外失去牌后,对方可以摸一张牌.',
                tlbb_xuanci: '玄慈',
                tlbb_fuji: '伏击',
                tlbb_fuji_info: (function() {
                    if (lib.config.extension_金庸群侠传_changeGroup) return '游戏开始时,你需选择一名除盟主以外的其他角色,猜测其身份.<br>&nbsp;&nbsp;&nbsp;&nbsp;汉人角色使用基本牌或非延时锦囊牌指定目标时,可令<伏击>角色成为额外目标并标记自己为<同谋>角色.';
                    return '游戏开始时,你需选择一名除盟主以外的其他角色,猜测其身份.<br>汉人角色使用基本牌或非延时锦囊牌指定目标时,可令<伏击>角色成为额外目标并标记自己为<同谋>角色.';
                })(),
                //"tlbb_fuji_info":"<li>游戏开始时,你需选择一名除盟主以外的其他角色,猜测其身份.<li>XXX势力角色使用基本牌或非延时锦囊牌指定目标时,可令<伏击>角色成为额外目标并标记自己为<同谋>角色.",
                tlbb_mengbi: '蒙庇',
                tlbb_mengbi_info: '你成为<同谋>角色使用黑色/红色基本牌或非延时锦囊牌的目标时,你可以取消之/摸1张牌.',
                tlbb_jiedi: '揭底',
                tlbb_jiedi_info: '<b>觉醒技,</b>伏击角色即将阵亡时,若你猜错其身份,你加一点体力上限并获得〖杖刑〗.',
                tlbb_zhangxing: '杖刑',
                tlbb_zhangxing_info: '<b>锁定技.</b>回合结束时,你失去1点体力(体力值为1时则跳过此步骤),摸等同于存活的<同谋>角色数的牌.',
                tlbb_qinhongmian: '秦红棉',
                tlbb_xiujian: '袖箭',
                tlbb_xiujian_info: '锁定技,你的攻击范围+2;你使用杀指定目标时,若你手牌中有♦️️牌,你可以为此【杀】额外指定至多X名目标(X为你的♦️️手牌数).',
                //"tlbb_xiujian_info":"出牌阶段限一次,你可以与一名其他角色拼点,若你未赢,改为出牌阶段限两次.<br><br><li>若如此做,你于此阶段使用<杀>时,于此阶段拼点未赢的其他角色也成为此<杀>的目标.",
                tlbb_qingheng: '情恨',
                //"tlbb_qingheng_info":"你拼点后,若你未赢,你可以令一名未参与此次拼点的男性角色选择:视为对一名参与此次拼点的角色使用一张<杀>;或令你摸1张牌.",
                tlbb_qingheng_info: '每回合限一次,其他角色使用♥️️非装备牌时,若此时你没有♥️️手牌,你可以令其选择一项:其使用的♥️️牌无效;令你摸一张牌.',
                tlbb_baobutong: '包不同',
                tlbb_zhongjian: '忠谏',
                tlbb_zhongjian_info: '每回合限一次,当其他角色使用普通锦囊牌指定除其以外的角色为唯一目标时,你可以与其拼点.若你赢,你为此牌重新指定一名目标;若你未赢,此牌目标改为你.',
                tlbb_chengbian: '逞辩',
                tlbb_chengbian_info: '当你拼点赢后,你可以摸1张牌;当你拼点未赢后,你可以弃置对方1张牌.',
                tlbb_shiwei: '式微',
                tlbb_shiwei_info: '<b>锁定技.</b>你拼点的牌亮出后,此牌点数减X(X为本局你拼点未赢的次数).',
                tlbb_azhi: '阿紫',
                tlbb_zhonggu: '纵蛊',
                tlbb_zhonggu_info: '<b>限定技.</b>出牌阶段,你可以弃置一张手牌,令一名其他角色受到一点伤害无来源的火焰伤害,你加一点体力上限并将体力回复至体力上限.<b>锁定技,</b>【纵蛊】的角色受到的伤害均视为失去体力.',
                tlbb_zisui: '恣睢',
                tlbb_zisui_info: '每当其他角色失去体力后,你可以展示牌堆顶一张牌:若为红色,则获得之;黑色,你将此牌置于侠客牌上,称为<恃>.',
                tlbb_hushi: '怙恃',
                tlbb_hushi_info: '每当你成为其他角色使用牌的唯一目标时,你可以移除一张<恃>,若如此做,此牌对你无效.',
                tlbb_baishijing: '白世镜',
                tlbb_chansi: '缠丝',
                tlbb_chansi_info: '你使用一张普通锦囊牌或一张基本牌后,你可以横置一名此牌目标的侠客牌.',
                tlbb_shijie: '失节',
                tlbb_shijie_info: '每当你受到一点伤害后,你可以选择:摸X张牌(X为横置的角色数);或令所有横置的角色各弃置一张手牌,不能依此法弃牌的角色则受到你的1点伤害并重置侠客牌',
                tlbb_gouxian: '构陷',
                tlbb_gouxian_info: '一名角色进行判定前,你可以观看牌堆顶1张牌.若如此做,你将此牌交给一名角色,其将一张手牌置于牌堆顶.',
                tlbb_xuzhuliqinglu: '虚竹李清露',
                tlbb_sekong_backup: '色空',
                tlbb_sekong: '色空',
                tlbb_sekong_info: '出牌阶段,你可以将一张普通锦囊牌当一张由你声明的延时锦囊牌使用;或将一张延时锦囊牌当一张由你声明的普通锦囊牌使用(每种牌名限一次).',
                tlbb_juechen: '绝尘',
                tlbb_juechen_info: '出牌阶段,你使用普通锦囊牌和基本牌后,你可以将此牌置于牌堆顶.',
                tlbb_huangmeiseng: '黄眉僧',
                tlbb_duanzhi1: '断趾',
                tlbb_duanzhi1_info: '',
                tlbb_duanzhi: '断趾',
                tlbb_duanzhi_info: '游戏开始/回合开始前,你可以废除一个装备栏(你最多只能以此法废除两个装备栏).你使用黑色基本牌或普通锦囊牌时,若你废除的装备栏数至少为1,你可以额外指定X名目标;你使用红色基本牌或普通锦囊牌时,若你废除的装备栏数至少为2,你可以额外指定X名目标(X为你废除的装备栏数量).',
                tlbb_xianji: '先机',
                tlbb_xianji_info: '每轮游戏开始时,若你有废除的装备栏,你执行一个额外的出牌阶段,将手牌补至体力上限.',
                tlbb_yunzhonghe: '界云中鹤',
                tlbb_feihe_old: '飞鹤',
                tlbb_feihe_old_info: '其他角色出牌阶段开始时,若该角色在你的攻击范围内,你可以使用一张牌.你观看其手牌,若其为男性,你弃置其区域一张与此牌类别相同的牌;若其为女性,你获得其区域一张类别相同的牌.',
                tlbb_feihe: '飞鹤',
                tlbb_feihe_info: '<b>锁定技,</b>你的普通【闪】视为【闪·双飞彩翼】.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出牌阶段限一次,你可以获得你攻击范围内以及你距离1以内的至多3名角色各一张手牌,本阶段结束时,若这些牌仍然在你的手牌区里,你需将这些牌交还原属角色(若原属角色为女性则不需交还).',
                tlbb_zhuiyun: '追云',
                tlbb_zhuiyun_info: '<b>锁定技,</b>你计算与其他角色的距离-1.',
                tlbb_yeerniang: '叶二娘',
                tlbb_daoying: '盗婴',
                tlbb_daoying_info: '准备阶段开始时,你可以选择一项:若你没有手牌,你可以获得至多两名其他角色各一张手牌;若你没有装备牌,你可将场上至多两张装备牌移至你的装备区里(不能重复选择同一名角色);若你装备区里没有延时锦囊牌,你可以获得场上至多两张延时锦囊牌.',
                tlbb_daoying_h: '手牌',
                tlbb_daoying_h_info: '你可以获得至多两名其他角色各一张手牌',
                tlbb_daoying_e_info: '你可将场上至多两张装备牌移至你的装备区里(不能重复选择同一名角色)',
                tlbb_daoying_j_info: '你可以获得场上至多两张延时锦囊牌',
                tlbb_daoying_e: '装备',
                tlbb_daoying_j: '判定牌',
                tlbb_gouhe: '苟合',
                tlbb_gouhe_info: '你受到伤害后,你可以弃置两张牌,令一名男性角色回复一点体力.',
                tlbb_madayuan: '马大元',
                tlbb_suohou_old: '锁喉',
                tlbb_suohou_old_info: '你使用杀造成伤害后,你可以令目标判定,若结果不为♥️️,则其他角色于本局游戏计算与其距离始终为1(对每名角色限一次).',
                tlbb_suohou: '锁喉',
                tlbb_suohou_info: '你使用【杀】指定目标时,可令目标选择:令所有角色于本局游戏计算与其距离为1(你不能再对其发动此技能);或令此杀不能被抵消.',
                tlbb_jianmi_old: '缄密',
                tlbb_jianmi_old_info: '一名角色判定结束后,你可以从牌堆底摸1张牌.',
                tlbb_jianmi: '缄密',
                tlbb_jianmi_info: '一名角色于回合内摸牌阶段和出牌阶段以外获得牌(不因此技能获得牌)或造成伤害后,你可以从牌堆底摸1张牌.',
                tlbb_xuanciyeerniang: '玄慈叶二娘',
                tlbb_youseng: '诱僧',
                tlbb_youseng_info: '出牌阶段限一次,你可以令一名角色回复1点体力(若其未受伤则跳过此步骤),弃置其两张牌(不足则全其,无牌则不弃).',
                tlbb_duhui: '度悔',
                tlbb_duhui_info: '回合结束时,你可以弃置所有手牌(至少一张),令一名其他角色选择一项:其翻面;或其对你造成1点伤害并令你执行一个摸牌阶段(摸牌基数为三)和出牌阶段.',
                tlbb_xiaoyuanshan: '萧远山',
                tlbb_huoyan: '祸延',
                tlbb_huoyan_info: '出牌阶段限一次,你使用牌指定目标后,你可以翻面,为此牌额外指定任意名无距离限制的目标.若如此做,回合结束时,你摸X张牌(X为你本回合造成的伤害数).',
                tlbb_zheju: '蜇居',
                tlbb_zheju_info: '其他角色发动秘籍牌的技能后,你记录之.你可以在合适的时机移除一条记录并发动对应的秘籍技能.',
                //"tlbb_zheju_info":"每回合限一次,其他角色使用牌后,若你的侠客牌背面向上,你可以弃置一张与此牌类别相同的牌,摸1张牌.",
                tlbb_tianshantonglao: '天山童姥',
                tlbb_zhemei: '折梅',
                tlbb_zhemei_info: '每当你受到一点伤害后,你可以获得场上一张牌.你获得场上一张♣️️牌后,你可以回复一点体力或摸两张牌.',
                tlbb_bingfu: '冰符',
                tlbb_bingfu_info: '<b>限定技.</b>出牌阶段,你弃置两张牌,并令其他角色选择:弃置两张花色组成与你以此法弃置的牌相同的牌;或受到你2点冰属性伤害.',
                tlbb_liqingluo: '李青萝',
                tlbb_juanzhi: '卷帙',
                tlbb_juanzhi_info: '摸牌阶段,你可以多摸2张牌,若如此做,其他女性角色可以对你使用一张【杀】.',
                tlbb_tongyou: '同忧',
                tlbb_tongyou_info: '当你成为杀的目标时,你可以弃置一张牌,选择一名不是此牌目标的男性角色,其也成为此牌的目标.',
                tlbb_fanrui: '繁蕊',
                tlbb_fanrui_info: '<b>限定技.</b>出牌阶段,你将3张点数相连的手牌当<蕊>展示,其他角色需依次将一张点数与<蕊>相连的手牌当<蕊>展示并回复1点体力,否则其失去1点体力.你将所有<蕊>收入手牌.',
                tlbb_spxuzhu: 'sp虚竹',
                tlbb_luomei: '落梅',
                tlbb_luomei_info: '每当你因弃置或打出而失去♣️️牌后,或你失去装备区和判定区里的♣️️牌后,可摸2X张牌(X为此次失去的♣️️牌数).',
                tlbb_jiujie: '酒戒',
                tlbb_jiujie_info: '<b>锁定技.</b>每当你受到伤害后,你获得一枚<酒戒>标记(最多3枚).出牌阶段开始时,你可以移除一枚<酒戒>标记,视为你使用了一张【酒】(不计入次数).',
                tlbb_jiujie2: '酒戒',
                tlbb_jiujie2_info: '',
                tlbb_luomei2: '落梅',
                tlbb_luomei2_info: '',
                tlbb_ganbaobao: '甘宝宝',
                tlbb_chouchang: '愁肠',
                tlbb_chouchang_info: '每当你使用【杀】、【比武】、【鞑虏入侵】和【漫天花雨】时,你可弃置所有手牌(至少一张),令此牌不能被响应或抵消.若此牌造成的伤害大于2点,你受到1点无来源的伤害.',
                tlbb_aijie: '哀结',
                tlbb_aijie_info: '每当你受到1点伤害后,你可以选择一名其他角色,令其手牌上限-1.',
                tlbb_gulian: '顾怜',
                tlbb_gulian_info: '<b>锁定技.</b>你受到大于1点的伤害时,若你没有手牌,则此次伤害改为1点.',
                tlbb_qiaofeng: '乔峰',
                tlbb_xianglong: '降龙',
                tlbb_xianglong_info: '当你使用<杀>时,你可以判定:若为黑色,则此杀造成的伤害+1;红色,你可以为此杀额外增加一名无距离限制的目标.',
                tlbb_kanghui: '亢悔',
                tlbb_kanghui_info: '每回合限四次,当你造成伤害时,你可以防止此伤害,若如此做,你摸2张牌.',
                tlbb_qzkanghui: '亢悔', //乔峰阿朱亢悔
                tlbb_qzkanghui_info: '每回合限四次,当你造成伤害时,你可以防止此伤害,若如此做,你摸2张牌.',
                tlbb_zongpangp: '改判',
                tlbb_zongpangp_info: '',
                tlbb_zongpangpin: '改拼',
                tlbb_zongpangpin_info: '',
                tlbb_zongpan: '众判',
                tlbb_zongpan_info: (function() {
                    if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b>其他宋势力角色可以打出一张手牌替换你的判定牌或拼点牌,且你可以拒绝其替换之.';
                    return '<b>盟主技.</b>其他魏势力角色可以打出一张手牌替换你的判定牌或拼点牌,且你可以拒绝其替换之.';
                })(),
                //"tlbb_zongpan_info":"<b>盟主技.</b>其他XXX势力角色可以打出一张手牌替换你的判定牌或拼点牌,且你可以拒绝其替换之.",
                tlbb_xie_liqingluo: '邪李青萝',
                tlbb_xianhua: '陷花',
                tlbb_xianhua_info: '出牌阶段限一次,你可以观看一名其他角色的手牌并选择其中一张不为A和K点的牌.该角色获得两张与此牌点数相连的不同点数的牌,其手牌中所有不与以上三张牌点数相连的牌均视为【酒】.',
                tlbb_zuifeng: '醉蜂',
                tlbb_zuifeng_info: '其他角色于回合内进入<酒状态>后,你可令其保留该状态直至其下回合结束,且其本回合不能再使用牌.<b>锁定技,</b><酒状态>下的角色不能抵消或响应你的牌.',
                tlbb_woyu: '沃腴',
                tlbb_woyu_info: '你造成或受到伤害后,可将场上一张牌置于你的侠客牌上,称为<腴>.你造成伤害/回复体力时,若你侠客上的<腴>牌点数和为5的整数倍,你可以令此次伤害/回复的体力值+X(X为<腴>牌点数之和除以5),移除所有<腴>.',
                tlbb_spwangyuyan: 'sp王语嫣',
                tlbb_dianbo: '点拨',
                tlbb_dianbo_info: '其他角色的出牌阶段限一次,其可以交给你一张手牌(你可以拒绝之),观看你的手牌.若如此做,其可以将一张手牌当你手牌中的一张基本牌或锦囊牌使用.',
                tlbb_xunjing: '寻经',
                tlbb_xunjing_info: '出牌阶段限一次,你可以弃置一张锦囊牌,获得一张与此牌花色相同的宝物牌.',
                tlbb_dianbo2: '点拨',
                tlbb_zhongling: '钟灵',
                tlbb_xundiao: '驯貂',
                tlbb_xundiao_info: '其他角色使用杀对目标造成伤害后,你可以将一张普通【杀】当【毒杀】对其使用,若此毒杀造成了伤害,则该目标回复1点体力.',
                tlbb_qiyuan: '乞援',
                tlbb_qiyuan_info: '每当你成为【杀】的目标时,其他角色(来源除外)可以交给你一张【杀】.',
                tlbb_xinwu: '信物',
                tlbb_xinwu_info: '你获得其他角色的牌后,你可以展示其中一张【杀】,若如此做,其摸1张牌.',
                tlbb_yuelaosan: '岳老三',
                tlbb_yuguan: '鱼贯',
                tlbb_yuguan_info: '每当你的【杀】造成伤害后,若目标计算下家的距离为1且其下家不为你,你可以令此杀继续对其下家结算',
                tlbb_qianjun: '千钧',
                tlbb_qianjun_info: '你可以将两张【杀】当一张🃏的杀使用,以此法使用的杀需要两张【闪】才能抵消,且造成的伤害+1.',
                tlbb_suxinghe: '苏星河',
                tlbb_xpojie: '破劫',
                tlbb_xpojie_info: '一名角色的判定牌生效前,若你有手牌,你可以令你与至多两名其他角色各展示一张手牌,你选择:将其中一张牌作为判定牌;或弃置这些牌.',
                tlbb_yaotiehc: '手牌邀帖',
                tlbb_yaotiehc_info: '',
                tlbb_yaotiehp: '体力邀帖',
                tlbb_yaotiehp_info: '',
                tlbb_yaotie: '邀帖',
                tlbb_yaotie_info: '出牌阶段限一次,你可以令至少3名手牌数或体力值呈等差数列的角色各摸一张牌.',
                tlbb_yayin: '哑隐',
                tlbb_yayin_info: '<b>锁定技.</b>防止你受到的无牌源或无来源的伤害.',
                tlbb_kangmin: '康敏',
                tlbb_shifu: '弑夫',
                tlbb_shifu_info: '游戏开始时,你令一名男性角色获得<软骨散>标记.拥有该标记的角色死亡时,你令另一名男性角色获得之.<b>锁定技,</b>摸牌阶段,你多摸X张牌(X为拥有<软骨散>的角色已损失的体力值).',
                tlbb_shifumark: '软骨散',
                tlbb_buyao: '布谣',
                tlbb_buyao_info: '结束阶段开始时,你可以声明一种花色,令一名其他角色进行判定并获得判定牌,若判定结果与你声明的花色不同,你对其造成一点伤害.',
                tlbb_siqian: '思迁',
                tlbb_siqian_info: '当你受到伤害后,你可以将<软骨散>标记转移至另一名男性角色.',
                tlbb_wangyuyan: '王语嫣',
                tlbb_dianhua: '点化',
                tlbb_dianhua_info: '每回合限一次,其他角色使用普通锦囊牌指定唯一目标时,你可以将此牌改为另一种合理的普通锦囊牌.',
                tlbb_wendian: '问典',
                tlbb_wendian_info: '其他角色出牌阶段限一次,其可以交给你一张牌,若如此做,你可以亮出牌堆顶2张牌,其获得其中的锦囊牌.',
                tlbb_wendian1: '问典',
                tlbb_wendian1_info: '',
                tlbb_spduanyu: 'sp段誉',
                tlbb_nayuan: '纳元',
                tlbb_nayuan_info: '当你使用牌前,或当你成为其他角色使用牌的目标前,你可以获得一名其他角色一项你没有的除觉醒技、限定技、盟主技以外的技能,直到此牌结算完毕.',
                tlbb_zhuha: '朱蛤',
                tlbb_zhuha_info: '<b>锁定技.</b>防止你受到的属性伤害.',
                tlbb_duanyu: '段誉',
                tlbb_lingbo: '凌波',
                tlbb_lingbo_info: '<b>锁定技.</b>一名角色在其回合内使用牌后,所有其他角色计算与你的距离+1,直到此回合结束.',
                tlbb_qingguan: '情关',
                tlbb_qingguan_info: '出牌阶段开始时,你可以选择:回复1点体力,若如此做,回合内结束时你失去1点体力;或失去1点体力,若如此做,回合结束时你回复1点体力.',
                tlbb_xiumai_draw: '修脉',
                tlbb_xiumai: '修脉',
                tlbb_xiumai_info: '<b>锁定技.</b>你的回合内,若你的体力值为偶数/奇数,其他角色不能使用或打出黑色牌/红色牌.体力值的奇偶性 与你相同的其他角色成为你使用牌的目标后,你摸一张牌.',
                tlbb_lingbo2: '凌波',
                tlbb_lingbo2_info: '',
                tlbb_qingguan_loseHp: '情关',
                tlbb_qingguan_loseHp_info: '',
                tlbb_qingguan_recover: '情关',
                tlbb_qingguan_recover_info: '',
                tlbb_xiumai3: '修脉',
                tlbb_xiumai3_info: '',
                tlbb_xiumai2: '修脉',
                tlbb_xiumai2_info: '',
                tlbb_xuzhuzi: '虚竹',
                tlbb_beiming: '北冥',
                tlbb_beiming_info: '每回合限一次,其他角色使用普通锦囊牌后,你可以弃置一张与此牌颜色相同的<戒>,视为你使用了此牌.',
                tlbb_pojie_use: '破戒',
                tlbb_pojie: '破戒',
                tlbb_pojie_info: '你使用【酒】后、每造成一点伤害后、使用普通锦囊牌指定女性角色为唯一目标后,你将牌堆顶1张牌置于侠客牌上,称为<戒>(若你造成伤害后目标死亡,改为获得2枚<戒>).你可以使用或打出<戒>.',
                tlbb_huansu: '还俗',
                tlbb_huansu_info: '<b>觉醒技.</b>当你获得第3张<戒>后,你减1点体力上限并回复1点体力,且你不能再使用或打出<戒>,获得〖北冥〗.',
                tlbb_duanyanqing: '段延庆',
                tlbb_azhu: '阿朱',
                tlbb_qiangcan: '戕残',
                tlbb_qiangcan_info: '<b>锁定技.</b>游戏开始时,标记你为<储嗣>角色.<储嗣>死亡后,你成为<储嗣>.<储嗣>受到伤害后,来源可以取代其成为<储嗣>.<p><b>遗胄:</b><储嗣>摸牌阶段摸牌多摸2张牌且手牌上限+2.',
                tlbb_chusi: '储嗣',
                tlbb_chusi_info: '当你受到伤害后,伤害来源可取代你的<储嗣>成为新的<储嗣>.',
                tlbb_chusi2: '遗胄',
                tlbb_chusi2_info: '<b>锁定技.</b><储嗣>角色摸牌阶段摸牌多摸两张牌且手牌上限+2.',
                tlbb_liuwang: '流亡',
                tlbb_liuwang_info: '<b>锁定技.</b>结束阶段开始时,若你不是<储嗣>,你需减1点体力或弃置2张牌.',
                tlbb_rangquan: '攘权',
                tlbb_rangquan_info: '<b>觉醒技.</b>当你进入濒死状态时,你减1点体力上限,回复2点体力,并摸2张牌,失去〖戕残〗、〖流亡〗,若你不是<储嗣>,你成为<储嗣>.',
                tlbb_qiangcan2: '戕残',
                tlbb_qiangcan2_info: '<储嗣>受到伤害后,来源可代替其成为<储嗣>.',
                tlbb_yirong1: '易容',
                tlbb_yirong1_info: '所有角色展示侠客牌后,你展示8张未加入游戏的侠客牌,称为<易容>牌,一名角色回合开始时,你可以选择一张<易容>牌,令其获得易容牌上的技能直到回合结束(其本身的技能会在此回合失效).拥有<易容>牌的角色回合内对你使用杀造成的伤害+1.<p><b>锁定技.</b>回合开始时,若你没有<易容>牌,你获得8张<易容>牌.',
                tlbb_yirong: '易容',
                tlbb_yirong_info: '',
                tlbb_yirong2: '易容',
                tlbb_yirong2_info: '',
                tlbb_xiaoti: '孝悌',
                tlbb_xiaoti_info: '每回合限一次,一名角色受到伤害后,你可以弃置一张手牌,其回复1点体力.',
                tlbb_jue_damo: '绝达摩',
                jue_xisuidm: '洗髓',
                jue_xisuidm_info: '<b>锁定技.</b>除你的出牌阶段以外,每当你失去手牌后,若此时你的手牌不足四种花色,你随机将手牌补至四种花色.',
                jue_yijing: '易经',
                jue_yijing_info: '出牌阶段限一次,你可以弃置你手牌中每种牌名多余的牌(即每种牌名只保留一张),获得等量牌名各不相同,且与你手牌中的牌名也不相同的牌.',
                tlbb_zuozimuxinshuangqing: '左子穆辛双清',
                tlbb_fenting: '分庭',
                tlbb_fenting2: '分庭',
                tlbb_fenting_info: '回合开始时,若你没有<宗>,你摸3张牌并将3张手牌当<宗>置于侠客牌上.<p>出牌阶段开始时,你可以用一张手牌替换一张<宗>.',
                tlbb_fenting2_info: '回合开始时,若你没有<宗>,你摸3张牌并将3张手牌当<宗>置于侠客牌上.<p>出牌阶段开始时,你可以用一张手牌替换一张<宗>.',
                tlbb_doujian: '斗剑',
                tlbb_doujian_info: '出牌阶段限一次,你可与一名其他角色拼点,若你赢,你摸等同于你<宗>数的牌;若你未赢,你将一张<宗>置入弃牌堆.',
                tlbb_yubi_info: '<b>锁定技.</b>你使用【杀】造成伤害后,若你此时装备了剑,你获得两张<宗>.',
                tlbb_yubi: '玉璧',
                tlbb_zhengyan: '正严',
                tlbb_zhengyan_info: '<b>盟主技.</b>每当你失去体力后,你可以令一名其他列国/群雄势力角色摸一张牌.',
                tlbb_dacheng_old: '大乘',
                tlbb_dacheng_old_info: '<b>盟主技.</b>每回合限一次,其他同势力角色造成伤害时,其可以令你代替其成为伤害来源.',
                tlbb_dacheng: '大乘',
                tlbb_dacheng_info: '<b>盟主技.</b>每回合限一次,其他同势力角色出牌阶段限一次,可令你观看其手牌并使用其中一张牌.',
                tlbb_dacheng2: '大乘',
                tlbb_dacheng2_info: '<b>盟主技.</b>每回合限一次,其他同势力角色出牌阶段限一次,可令你观看其手牌并使用其中一张牌.',
                tlbb_dacheng3: '大乘',
                tlbb_dacheng3_info: '<b>盟主技.</b>每回合限一次,其他同势力角色出牌阶段限一次,可令你观看其手牌并使用其中一张牌.',
                tlbb_xuanku: '玄苦',
                tlbb_ranmu: '燃木',
                tlbb_ranmu_info: '<b>锁定技.</b>你的回合内,场上的♣️️装备牌视为♦️️;你造成的火焰伤害+X(X为场上的♦️️装备数).',
                tlbb_shouye_info: '<b>使命技.</b>出牌阶段,你令一名其他角色获得〖降龙〗.若其因〖降龙〗判定出现第二种颜色,则使命成功.若使命成功前,你或其进入濒死状态,则使命失败.<p><b><i>成功:</i></b>你加1点体力上限,回复1点体力,获得〖凶影〗.<p><b><i>失败:</i></b>其失去〖降龙〗,获得〖师恩〗.',
                tlbb_shouye: '授业',
                tlbb_xiongying: '凶影',
                tlbb_xiongying_info: '<b>锁定技.</b>你无法响应或抵消〖授业〗角色的伤害类卡牌;你受到伤害后,其获得一个<嫌疑>标记,其手牌上限数减其<嫌疑>数;其造成伤害后,其可以移除一个<嫌疑>并摸三张牌且其可以将给你一张牌.',
                tlbb_kurongdashi: '枯荣大师',
                tlbb_fenpu: '焚谱',
                tlbb_fenpu_info: '<b>限定技.</b>出牌阶段,你可以展示一张宝物牌,令一名其他角色永久获得此宝物牌的技能,你销毁此宝物牌.',
                tlbb_shaoshang: '少商',
                tlbb_shaoshang_info: '<b>锁定技.</b>你使用【杀】指定目标后,若目标手牌数量的奇偶性与你相同,其不能抵消之.',
                tlbb_kuchan_ku: '枯禅枯',
                tlbb_kuchan_ku_info: '枯:你失去牌后,或你受到伤害后,你可以选择一名角色并声明一种普通锦囊牌的名字,令其于本局游戏中,不能成为此牌的目标.',
                tlbb_ku: '枯',
                tlbb_ku_info: '枯:你失去牌后,或你受到伤害后,你可以选择一名角色并声明一种普通锦囊牌的名字,令其于本局游戏中,不能成为此牌的目标.',
                tlbb_rong: '荣',
                tlbb_rong_info: '荣:你获得牌后,或你回复体力后,你可以选择一名角色并声明一种普通锦囊牌的名字,令其于本局游戏中,此牌对其结算完后,额外再结算一次.',
                tlbb_kuchan_rong: '枯禅荣',
                tlbb_kuchan_rong_info: '荣:你获得牌后,或你回复体力后,你可以选择一名角色并声明一种普通锦囊牌的名字,令其于本局游戏中,此牌对其结算完后,额外再结算一次.',
                tlbb_kuchan: '枯禅',
                tlbb_kuchan_info: '荣:你获得牌后,或你回复体力后,你可选择一名角色并声明一种普通锦囊牌的牌名,令其于本局游戏中,此牌对其结算完后,额外再结算一次;枯:你失去牌后,或你受到伤害后,你可选择一名角色并声明一种普通锦囊牌的牌名,令其于本局游戏中,不能成为此牌的目标.',
                tlbb_zhaoqianshun: '赵钱孙',
                tlbb_maiming: '埋名',
                tlbb_maiming_info: '每当你受到一点伤害后,你可以选择一名其他角色,你将你名字中的一个未因此技能替换过的字符替换成其名字中的一个中文字符,你或其将手牌补至与对方相等(若已经相等则改为你和其各摸2张牌).<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>锁定技,</b>与你名字中有相同字符的其他角色手牌上限+1;你手牌上限+X (X为与你名字中有相同字符的其他角色数).',
                tlbb_wenguo: '文过',
                tlbb_wenguo_info: '一级:每回合限一次,当一名角色使用伤害类普通锦囊牌时,你可以令其中一名目标摸一张牌.<p>二级:每回合限一次,当一名角色使用伤害类卡牌时,你可以令其中至多两名目标摸一张牌.',
                tlbb_yinxing: '隐姓',
                tlbb_yinxing_info: '<b>觉醒技.</b>当你名字中最后一个字符被替换后,你减一点体力上限,回复一点体力,升级〖文过〗.',
                tlbb_jueshi: '绝世高手',
                tlbb_gaibang: '丐帮',
                tlbb_shaolin: '少林寺',
                tlbb_xiaoyaopai: '逍遥派',
                tlbb_dali: '大理段氏',
                tlbb_lingjiugong: '灵鹫宫',
                tlbb_gushumurong: '姑苏慕容',
                tlbb_xingxiupai: '星宿派',
                tlbb_juxianzhuang: '聚贤庄',
                tlbb_liao: '辽国',
                tlbb_xixia: '西夏一品堂',
                tlbb_mantuoshanzhuang: '曼陀山庄',
                tlbb_wanjiegu: '万劫谷',
                tlbb_wuliangjian: '无量剑派',
                tlbb_zangzhong: '藏宗',
                tlbb_xiake: '江湖侠客',
                tlbb_xie_murongfu: '邪慕容复',
                tlbb_xinmo: '心魔',
                tlbb_xinmo_info: '每当你失去因〖彼道〗获得的所有技能后,或你失去装备区里所有装备牌后,你可以对一名其他角色造成一点伤害.',
                tlbb_zhinian: '执念',
                tlbb_zhinian_info: '出牌阶段限一次,你可减1点体力上限(体力上限小于2则跳过),获得〖彼道〗记录的所有技能、按任意顺序视为使用你因〖彼道〗记录的所有牌.清除记录.',
                tlbb_bidao: '彼道',
                tlbb_bidao2: '彼道',
                tlbb_bidao2_info: '你每受到其他角色一点伤害后,你记录对你造成伤害的牌名(若无实体牌由跳过),再记录来源一个你未拥有的且未记录的技能(帮派技、盟主技、锁定技、觉醒技、限定技、使命技除外).',
                tlbb_bidao_info: '你每受到其他角色一点伤害后,你记录对你造成伤害的牌名(若无实体牌由跳过),再记录来源一个你未拥有的且未记录的技能(帮派技、盟主技、锁定技、觉醒技、限定技、使命技除外).',
                tlbb_xie_dingchunqiu: '邪丁春秋',
                tlbb_shidu: '尸毒',
                tlbb_shidu_info: '出牌阶段限一次,你可以弃置一张【毒杀】,对一名其他角色造成一点蛊毒伤害.你令一名行尸角色成为其副将(若已有副将成替换之,其原副将成为你的副将).其下个回合结束时,其移除行尸类副将.',
                tlbb_huagong: '化功',
                tlbb_huagong_info: '<b>锁定技.</b>你受到的普通伤害视为蛊毒伤害;每当行尸类侠客发动技能后,你获得一枚<腐>.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你受到蛊毒伤害后,你可以移除一枚<腐>,摸三张牌并任意分配之;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他角色发动技能后,你可以移除一枚<腐>来令其失去此技能(该角色累计受到至少2点伤害后,回复之).',
                tlbb_huagong2: '化功',
                tlbb_huagong2_info: '<b>锁定技.</b>你受到的普通伤害视为蛊毒伤害;每当行尸类侠客发动技能后,你获得一枚<腐>.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你受到蛊毒伤害后,你可以移除一枚<腐>,摸三张牌并任意分配之;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他角色发动技能后,你可以移除一枚<腐>来令其失去此技能(该角色累计受到至少2点伤害后,回复之).',
                tlbb_huagong3: '化功',
                tlbb_huagong3_info: '<b>锁定技.</b>你受到的普通伤害视为蛊毒伤害;每当行尸类侠客发动技能后,你获得一枚<腐>.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你受到蛊毒伤害后,你可以移除一枚<腐>,摸三张牌并任意分配之;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他角色发动技能后,你可以移除一枚<腐>来令其失去此技能(该角色累计受到至少2点伤害后,回复之).',
                tlbb_shending: '神鼎',
                tlbb_shending_info: '<b>锁定技.</b>你视为装备着【神木王鼎】;你因神木王鼎获得【毒杀】后,获得一枚<腐>.',
                tlbb_xie_zhuangjuxian: '庄聚贤',
                tlbb_bingcan_new: '冰蚕',
                tlbb_bingcan_new_info: '出场时你获得<金睛冰蚕>(冰蚕所属者受到或造成的普通伤害改为寒冰伤害),记录一个仅你知道的其他角色.当有角色受到寒冰伤害后,你将冰蚕移至所属者上家或下家.当记录的角色获得冰蚕后 ,其受到你X点寒冰伤害(X为冰蚕移动次数)并随机进入1项负面状态,你减1点体力上限,清除记录的角色和冰蚕移动次数,重新记录一名角色.拥有冰蚕的其他角色死亡后,你收回之.',
                tlbb_xiewang_new: '邪妄',
                tlbb_xiewang_new_info: '每轮限一次,当其他角色成为基本牌或普通锦囊牌的目标时,若你不为目标,你可失去1点体力上限,你也成为目标(无视距离).',
                tlbb_kuiwei_new: '傀伪',
                tlbb_kuiwei_new_info: '<b>盟主技.</b>出牌阶段限一次,你令所有其他邪势力角色各摸一张牌,交给你一张手牌.',
                tlbb_bingcan_new_mark: '金睛冰蚕',
                tlbb_bingcan_new_mark_info: 'undefined',
                tlbb_bingcan_new2: 'undefined',
                tlbb_bingcan_new2_info: 'undefined',
                tlbb_jue_xuzhu: '绝虚竹',
                tlbb_xiaoyao: '逍遥',
                tlbb_xiaoyao_info: '<b>锁定技,</b>防止你进入负面状态.',
                tlbb_minghai: '冥海',
                tlbb_minghai_info: '出牌阶段限一次,你可以选择执行一项:<p>1.弃置所有手牌,复制一名其他角色的手牌(若依此法复制的手牌在本阶段内全部离开你的手牌区,视为未发动本技能;同一回合内不能重复复制同一名角色的手牌);<p>2.弃置装备区里的牌,复制一名其他角色装备区里的装备牌(若依此法复制的装备牌在本阶段内全部离开你的装备区,视为未发动本技能);<p>3.将一名其他角色判定区里的牌复制到另一名其他角色判定区内(可复制空白判定区,即可将一个有判定牌的判定区复制成空白判定区).',
                tlbb_xiaoyao2: '逍遥',
                tlbb_xiaoyao2_info: 'undefined',
                tlbb_heliantieshu: '赫连铁树',
                tlbb_huansi: '环伺',
                tlbb_huansi_info: '出牌阶段限一次,你可以令一名其他角色摸一张牌并展示之,若如此做,本阶段内你可以将你区域内所有与此牌类别相同的牌当作【妙手空空】对其使用(无距离限制).<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你使用【妙手空空】、【见招拆招】指定目标后,若目标的手牌数量大于一,你可以令其将手牌分为两部分,一部分明置,一部分扣置(扣置的牌数不能比明置的牌数多2张及以上).',
                tlbb_hudan: '虎耽',
                tlbb_hudan_info: '你使用普通锦囊牌时,可以额外指定一名汉人角色为目标(无距离限制).',
                tlbb_xie_kangmin: '邪康敏',
                tlbb_xie_kangmin_jing: '邪康敏·镜',
                tlbb_duhui_xiekangming: '妒毁',
                tlbb_duhui_xiekangming_info: '当一名其他角色使用基本牌或普通锦囊牌指定目标时(每种牌名每局限一次),你可以令其选择一项:此牌结算完后,令你也视为使用一张此牌;或此牌无效.',
                tlbb_guying: '顾影',
                tlbb_guying_info: '<b>锁定技.</b>你的回合内,对自己使用的红色基本牌或红色普通锦囊牌额外结算一次,对其他角色使用的黑色基本牌或黑色普通锦囊牌可以额外指定一个目标,且指定目标后,男性目标不能响应或抵消之,女性目标需弃置一张牌.',
                tlbb_yuanyi: '怨艾',
                tlbb_yuanyi_info: '<b>限定技.</b>准备阶段,你将一名已死亡角色的侠客牌替换为邪康敏·镜,其回复所有体力,复制你的区域里的牌,你失去〖顾影〗,获得〖碎镜〗.',
                tlbb_suijing: '碎镜',
                tlbb_suijing_info: '<b>锁定技.</b>其他角色的结束阶段,你可以令其选择一项:其弃置一张♥️️牌;或令你选择重置〖妒毁〗中的一张牌名.',
                tlbb_guying2: '顾影2',
                tlbb_guying2_info: 'undefined',
                tlbb_jinggui: '镜鬼',
                tlbb_jinggui_info: '<b>锁定技.</b>始终跳过你的回合;邪康敏获得牌后,你摸等量的牌;你获得牌后,需将其中的装备牌、延时锦囊牌、多目标普通锦囊牌、暗器牌、毒药牌交给邪康敏;邪康敏的装备区里置入装备牌后,你使用等量的装备牌;邪康敏回复体力后,你回复等量体力;邪康敏受到伤害后、失去体力后,你失去等量体力;邪康敏使用的目标唯一的基本牌或普通锦囊牌结算完后,若你有同名手牌,你须对该目标使用一张此牌(无距离和合法限制);你击杀角色时,改为由邪康敏击杀之.',
                tlbb_tongxin: '同心',
                tlbb_tongxin_info: '<b>锁定技.</b>你当你成为其他角色使用的有花色的牌的目标时,若你没有此花色的手牌,取消此牌对你的效果且结算完进入弃牌堆后你获得之.<p>其他角色因弃置失去一张手牌后,你可以弃置所有与此牌花色相同的手牌,将此牌返还其手牌区里.',
                tlbb_sijun: '四君',
                tlbb_sijun_info: '你一次性失去X张牌后(X大于1),若这些牌花色相同,根据这些牌的花色执行:♠️️,你可以选择对至多X名角色各随机使用一张黑色延时锦囊牌或弃置场上至多X张延时锦囊牌;♦️️,你可以选择令一名角色摸X张牌或令X名角色各摸一张牌;♣️️,你可以选择使用一张攻击范围为X的武器或令X名角色各使用一张攻击范围为1的武器;且可以将你弃置的这些牌交给一名其他角色;♥️️,你选择令一名角色回复X点体力或令X名角色各回复一点体力.<p>若你一次性失去了四种花色的牌,你可以依次执行〖四君〗的四个效果且X视为2.',
                tlbb_meilanzhuju: '梅兰竹菊',
                tlbb_duanyuwangyuyan: '段誉王语嫣',
                tlbb_bowen: '博闻',
                tlbb_bowen_info: '<b>锁定技,</b>你的+1马栏、-1马栏改为宝物栏;出牌阶段限一次,你可弃置一张手牌描述中含有摸或获得/使用/伤害/回复的非秘籍牌,使用一张描述中含有摸或获得/使用/伤害/回复的秘籍牌.',
                tlbb_bugang: '步罡',
                tlbb_bugang_info: '<b>锁定技.</b>你的♦️️/♥️️普通【闪】视为【闪·凌波微步】/【闪·双飞彩翼】.',
                tlbb_liumai: '六脉',
                tlbb_liumai_info: '出牌阶段限一次,你可以获得一张偶数【杀】并可以使用(不计入次数).依此法使用的【杀】按点数拥有效果:<p>2:结算完前,目标不能使用2的倍数点数的牌.<p>4:若目标体力值、手牌数、装备区装备数任一项为2,此杀不能被抵消.<p>6:造成伤害后,直到你下回合开始或你死亡,该角色回复体力后/获得牌后,若体力值/手牌数大于3,其将体力失去至3点/将手牌弃置至3张.<p>8:造成伤害后,目标翻面,摸4张牌.<p>10:无视距离和目标的防具.<p>12:结算完前,目标不能使用12的因数点数的牌.',
                tlbb_youjiyouju: '游骥游驹',
                tlbb_juxian: '聚贤',
                tlbb_juxian_info: '出牌阶段限一次,你可以令至多三名不同帮派的有手牌的角色选择将一张手牌改为【比武】.当这些角色使用此比武造成伤害后,你摸1张牌(若目标为异族,改为2张);当这些角色受到此比武的伤害后,你失去1点体力.',
                tlbb_dunfeng: '盾锋',
                tlbb_dunfeng_info: '你拥有2点初始护盾值;出牌阶段,你可以于满体力值状态下使用【九花玉露丸】来增加2点护盾值.<p>当你需要使用或打出一张杀时,可以消耗一点护盾,视为使用或打出之.',
                tlbb_jue_xiaoyuanshan: '绝萧远山',
                tlbb_jue_murongbo: '绝慕容博',
                tlbb_jue_xiaoyuanshanmorongbo: '绝萧远山慕容博',
                tlbb_jiaotou: '教头',
                tlbb_jiaotou_info: '当你成为伤害类卡牌的目标后,你可以令你一张未以此法选择过的牌视为此牌名,直到其离开你的手牌区.<b>锁定技,</b>你使用依此法改变名字的牌无距离、使用次数和目标数量的限制.<b>锁定技,</b>你的手牌上限+2.',
                tlbb_chouhai: '仇海',
                tlbb_chouhai_info: '出牌阶段限一次,你可以令至多4名手牌数量大于等于你的其他角色选择一项: 1.将手牌数量弃置至比你少至少一张(不符合条件则不能选择此项);2.失去一点体力.',
                tlbb_qianyi: '潜移',
                tlbb_qianyi_info: '其他角色使用非伤害类卡牌指定你为唯一目标时,你可以弃置一张手牌并指定一名其他角色,根据你弃置牌的点数,此牌的目标有一定几率转移给你指定的角色.A至4点(60%);5至9点(70%);10至Q(80%);K点(100%).<b>锁定技,</b>你的手牌上限+2.',
                tlbb_zuiye: '罪业',
                tlbb_zuiye_info: '一名角色使用♠️️基本牌或♠️️普通锦囊牌指定其他角色为目标后,你可以将此牌改为【比武】.',
                tlbb_tongxiu: '同修',
                tlbb_tongxiu_info: '<b>锁定技.</b>你使用有点数的牌后,你可以获得一张该点数的牌.',
                tlbb_shutu: '殊途',
                tlbb_shutu_info: '<b>锁定技,</b>游戏开始时,你将武将拆分为绝萧远山与绝慕容博(拥有独立游戏区域、体力条).回合开始时,若其中至少一名角色存活,你需选择其中一名角色出场;其中一名角色死亡时,另一名角色出场.<p>当你成为其他角色使用牌的目标时,若此时你的侠客牌为绝萧远山/绝慕容博,你可以换绝慕容博/绝萧远山出场.',
                tlbb_shichou: '释仇',
                tlbb_shichou_info: '<b>觉醒技.</b>当绝萧远山与绝慕容博均死亡后,你将侠客牌换为绝萧远山慕容博(拥有独立的游戏区域),摸4张牌、随机使用两张装备牌,失去〖殊途〗,获得〖同修〗.',
                jydiy_xuechan: '雪蟾',
                jydiy_xuechan_info: '出牌阶段对一名已受到的其他角色使用,令其选择执行一项:弃置2张牌并回复1点体力;摸2张牌并失去1点体力(每阶段仅能使用一张).',
                tlbb_tangongtanpo: '谭公谭婆',
                tlbb_hanyao: '寒药',
                tlbb_hanyao_info: '<b>锁定技.</b>你拥有八张【雪蟾】牌(进入弃牌堆后销毁).',
                tlbb_dielang: '叠浪',
                tlbb_dielang_info: '<b>锁定技.</b>出牌阶段,你使用的第一张牌额定目标数+1,第二张牌结算次数+1,第三张牌造成的伤害+1(均需合法).',
                tlbb_gushi: '故识',
                tlbb_gushi_info: '出牌阶段限一次,你可将1张手牌交给1名其他角色,若其手牌比你多,你补至与其手牌相等.若你依此法获得了X张红色牌,你需选择:失去X点体力;销毁X张【雪蟾】(不足则不能选此项).',
                tlbb_xie_yeerniang: '邪叶二娘',
                tlbb_shigu: '失孤',
                tlbb_shigu_info: '<b>锁定技.</b>每回合你首次失去手牌中点数最小的X点的牌后,你将A至X点的牌各补一张.',
                tlbb_yingti: '婴啼',
                tlbb_yingti_info: '出牌阶段限一次,你可以获得所有其他角色区域内点数最小的牌(所有角色区域内的牌合并检索,非单独检索每名角色的区域).',
            },
            dynamicTranslate: {
                tlbb_wenguo(player) {
                    var str1 = '一级:每回合限一次,当一名角色使用伤害类普通锦囊牌时,你可以令其中一名目标摸一张牌.';
                    var str2 = '二级:每回合限一次,当一名角色使用伤害类卡牌时,你可以令其中至多两名目标摸一张牌.';
                    if (player.storage.tlbb_wenguo == 1) {
                        str2 = '<span style="color: #808080">' + str2 + '<span>';
                    } else {
                        str1 = '<span style="color: #808080">' + str1 + '<span>';
                    }
                    return '' + str1 + '<p>' + str2;
                },
                tlbb_pudu(player) {
                    if (!player.storage.tlbb_tashu) return lib.translate.tlbb_pudu_info;
                    return '锁定技,出牌阶段开始时,你视为使用一张漫天花雨并令此牌的一个目标随机处于一项负面状态.';
                },
                tlbb_pojie(player) {
                    if (!player.storage.tlbb_huansu) return lib.translate.tlbb_pojie_info;
                    var str = '你使用<酒>后、每造成一点伤害后、或使用普通锦囊牌指定女性角色为唯一目标后,你将牌堆顶1张牌置于侠客牌上,称为<戒>.(若你造成伤害后目标死亡,改为获得2枚<戒>)';
                    return str;
                },
                tlbb_duanzhi(player) {
                    if (player.countDisabledSlot() == 0) return lib.translate.tlbb_duanzhi_info;
                    var str = '游戏开始/回合开始前,你可以废除一个装备栏(你最多只能以此法废除两个装备栏).';
                    if (player.countDisabledSlot() == 1) {
                        str += '<span class="bluetext">你使用黑色基本牌或普通锦囊牌时,若你废除的装备栏数至少为1,你可以额外指定X名目标;</span>你使用红色基本牌或普通锦囊牌时,若你废除的装备栏数至少为2,你可以额外指定X名目标';
                    } else if (player.countDisabledSlot() >= 2) {
                        str += '你使用黑色基本牌或普通锦囊牌时,若你废除的装备栏数至少为1,你可以额外指定X名目标;<span class="bluetext">你使用红色基本牌或普通锦囊牌时,若你废除的装备栏数至少为2,你可以额外指定X名目标</span>';
                    }
                    str += '(X为你废除的装备栏数量).';
                    return str;
                },
                tlbb_yixing(player) {
                    var str = lib.translate.tlbb_yixing_info;
                    if (player.hasSkillTag('yixing_buff', null, null, true)) return str + '(<li>该技能已被场景技【对质】加强)';
                    return str;
                },
                tlbb_xianglong(player) {
                    var str = lib.translate.tlbb_xianglong_info;
                    if (player.hasSkillTag('xianglong_buff', null, null, true)) return str + '(<li>该技能已被场景技【对质】加强)';
                    return str;
                },
            },
        };
        for (var i in tlbb.character) {
            tlbb.character[i][4].push('jy_die_audio');
            //tlbb.character[i][4].push(`die:ext:金庸群侠传/peiyin/${i}.mp3`);
            tlbb.character[i][4].push(`die:ext:金庸群侠传/peiyin:true`);
            tlbb.character[i][4].push('ext:金庸群侠传/character/yuanban/' + i + '.jpg');
        }
        return tlbb;
    });
});

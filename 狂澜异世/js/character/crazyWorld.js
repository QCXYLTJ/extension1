import { game } from '../../../../noname.js';
// 四季奇葩
game.import('character', function (lib, game, ui, get, ai, _status) {
    return {
        name: 'crazyWorld',
        connect: false,
        characterSort: {
            crazyWorld: {
                crazyW: ['rgxzugeliang', 'rgxdingfeng', 'rgxhuangyueying', 'rgxtgspzhaoyun', 'rgxtgsppangtong', 'rgxspliuyan', 'rgxtgspxuzhu', 'rgxtgspcaocao', 'newjiyu', 'renewjiyu', 'beitaganning', 'rgx_spcaochun', 'yijieyangxiu', 'rgx_zhengquan', 'spzhangliaoo', 'db_rgxspmachao'],
                tenYears: ['rgxyishi', 'rgxershi', 'rgxsanshi', 'rgxsishi', 'rgxwushi', 'rgxliushi', 'rgxqishi', 'rgxbashi', 'rgxjiushi', 'yujicheng'],
                longtao: ['mihoyotufeiding', 'mihoyolurenjia', 'mihoyopaohuiyi', 'mihoyoliumangbing', 'rgxsunquan'],
            },
            lini: {
                cikewuliuqi: ['mihoyoqi'],
                hoyotianxia: ['mihoyolinni', 'mihoyoheita', 'yidemeifang', 'mihoyojingliu', 'mihoyobachong', 'mihoyozhouwang'],
                qunyouzishe: ['mihoyoliuxun'],
            },
            pixelWorld: {
                sanfentianxia: ['pixeljiangwei', 'pixelliubei', 'pixelsunquan', 'pixelzhuegliang', 'pixelsimayi'],
                cemouzhike: ['pixelfazheng', 'pixelliubiao', 'pixeltianfeng', 'pixeljiaxu', 'pixelzhugeruoxue', 'pixelcaoying', 'pixelniujin', 'pixelzhouyu'],
                xueruochongzhi: ['pixelliubiaoU', 'pixelliubiaoL', 'pixeltianfengL', 'pixeljiaxuL', 'pixeljiangweiU', 'pixeljiangweiL', 'pixelzhouyuL', 'pixelsunquanU', 'pixelcaoyingL', 'pixelsunquanL', 'pixelliubeiL'],
            },
            yijiergx: {
                springMonarchChapter: ['yijiesunce', 'yijieliubei', 'yijiecaozei', 'yijieyuanshao', 'yijiezhugeliangkongrong'],
                coolInSummer: [],
                autumnCelebrityChapter: ['yijiexiahoudun', 'yijielubu', 'yijiejiaxu', 'yijiexunyu', 'rgxspluxun'],
                winterGodGeneral: ['yijieguanyv', 'yijiezhangfei', 'yijiehuangzhong', 'yijietaishici', 'yijieyujin'],
                yijieJanuary: ['yutao', 'liuhuaqiang', 'mabaoguo'],
                yijieFebruary: ['bigownerofmelonstall', 'yijie_caixukun', 'chuanshanjia'],
                yijieMarch: ['ejiege'],
                yijieApril: [],
                yijieMay: [],
                yijieJune: [],
                yijieJuly: [],
                yijieAugust: [],
                yijieSeptember: [],
                yijieOctober: [],
                yijieNovember: [],
                yijieDecember: [],
            },
        },
        character: {
            newjiyu: ['male', 'wei', 3, ['xiulu2', 'wugudeng'], ['ext:狂澜异世/image/character/newjiyu.jpg']],
            renewjiyu: ['male', 'wei', 3, ['beiguo', 'shiyongji'], ['ext:狂澜异世/image/character/renewjiyu.jpg']],
            beitaganning: ['male', 'wu', '3/4/1', ['beitalese', 'beitasheniao'], ['ext:狂澜异世/image/character/beitaganning.jpg']],
            yijieyangxiu: ['male', 'wei', 4, ['yijiejilei', 'yijiedanlao'], ['ext:狂澜异世/image/character/yijieyangxiu.jpg']],
            rgx_spcaochun: ['male', 'jin', 3, ['rgx_fufu'], ['ext:狂澜异世/image/character/rgx_spcaochun.jpg']],
            rgx_zhengquan: ['male', 'wu', 3, ['rgx_likejiu', 'rgx_shanbian'], ['ext:狂澜异世/image/character/rgx_zhengquan.jpg']],
            spzhangliaoo: ['male', 'qun', 4, ['supertuxi', 'grayhorse'], ['ext:狂澜异世/image/character/spzhangliaoo.jpg']],
            db_rgxspmachao: ['male', 'shu', 4, ['rgxtieqi', 'rgxliema', 'rgxzhiheng', 'rgxrende'], ['doublegroup:shu:wu', 'ext:狂澜异世/image/character/db_rgxspmachao.jpg']],
            rgxyishi: ['female', 'shen', 3, ['rgxshenyu', 'rgxzhikong'], ['ext:狂澜异世/image/character/rgxyishi.jpg']],
            rgxershi: ['female', 'wei', 3, ['rgxshengge', 'rgxyexing'], ['ext:狂澜异世/image/character/rgxershi.jpg']],
            rgxsanshi: ['female', 'wu', 6, ['rgxqiyu'], ['ext:狂澜异世/image/character/rgxsanshi.jpg']],
            rgxsishi: ['male', 'wei', 3, ['rgxfeilong', 'rgxskyshun'], ['ext:狂澜异世/image/character/rgxsishi.jpg']],
            rgxwushi: ['male', 'shu', 3, ['rgxhaogui', 'rgxyizheng'], ['ext:狂澜异世/image/character/rgxwushi.jpg']],
            rgxliushi: ['female', 'wu', 3, ['rgxzhige', 'rgxtianzang'], ['ext:狂澜异世/image/character/rgxliushi.jpg']],
            rgxqishi: ['female', 'wu', 4, ['rgxdingshui', 'rgxbeijun', 'rgxfuguo'], ['ext:狂澜异世/image/character/rgxqishi.jpg']],
            rgxbashi: ['female', 'wei', 3, ['rgxmulue', 'rgxwangge'], ['ext:狂澜异世/image/character/rgxbashi.jpg']],
            rgxjiushi: ['female', 'shu', 3, ['rgxshenshou', 'rgxtongyu'], ['ext:狂澜异世/image/character/rgxjiushi.jpg']],
            mihoyolurenjia: ['female', 'wu', 3, ['mihoyosanxing', 'moshaozuduan'], ['ext:狂澜异世/image/character/mihoyotest.jpg']],
            rgxsunquan: ['male', 'qun', 4, ['rgx2zhiheng', 'rgxliye'], ['ext:狂澜异世/image/character/rgxsunquan.jpg']],
            yujicheng: ['male', 'shu', '3/4', ['rgx_jiandao', 'rgx_jiuxian', 'rgx_yukey'], ['ext:狂澜异世/image/character/yujicheng.jpg']],
            rgxtgspcaocao: ['male', 'qun', 4, ['rgxzhucheng', 'rgxceji', 'rgxpingguan'], ['ext:狂澜异世/image/character/rgxtgspcaocao.jpg']],
            rgxtgspxuzhu: ['male', 'qun', 4, ['rgxguoyi', 'rgxyaolu'], ['ext:狂澜异世/image/character/rgxtgspxuzhu.jpg']],
            rgxspliuyan: ['male', 'qun', 3, ['rgxtushe', 'rgxlimu'], ['ext:狂澜异世/image/character/rgxspliuyan.jpg']],
            rgxtgsppangtong: ['male', 'qun', 3, ['rgxlianji', 'rgxluofeng'], ['ext:狂澜异世/image/character/rgxtgsppangtong.jpg']],
            rgxtgspzhaoyun: ['male', 'shu', 2, ['rgxhuzhu', 'rgxjuejing'], ['ext:狂澜异世/image/character/rgxtgspzhaoyun.jpg']],
            rgxhuangyueying: ['female', 'qun', 3, ['rgxjizhi', 'rgxqicai'], ['ext:狂澜异世/image/character/rgxhuangyueying.jpg']],
            rgxzugeliang: ['male', 'shu', 3, ['rgxkongcheng', 'rgxjingcui'], ['ext:狂澜异世/image/character/rgxzugeliang.jpg']],
            rgxdingfeng: ['male', 'wu', 4, ['rgxluzhen', 'rgxguanjun'], ['ext:狂澜异世/image/character/rgxdingfeng.jpg']],
            mihoyopaohuiyi: ['female', 'wei', 3, ['mihoyofujiang', 'mihoyoyunjuan'], ['ext:狂澜异世/image/character/mihoyopaohuiyi.jpg']],
            mihoyoliumangbing: ['female', 'shu', 3, ['mihoyoanxing', 'mihoyobuji'], ['ext:狂澜异世/image/character/mihoyoliumangbing.jpg']],
            mihoyotufeiding: ['female', 'qun', 3, ['mihoyoyouji', 'mihoyodubu'], ['ext:狂澜异世/image/character/mihoyotufeiding.jpg']],
            yidemeifang: ['female', 'wei', 2, ['myjisheng'], ['ext:狂澜异世/image/lini/yidemeifang.jpg']],
            mihoyolinni: ['female', 'qun', 3, ['hoyomiying', 'hoyomoshu'], ['ext:狂澜异世/image/lini/mihoyolinni.jpg']],
            mihoyoheita: ['female', 'jin', 3, ['hoyoicome', 'hoyojiwu'], ['ext:狂澜异世/image/lini/mihoyoheita.jpg']],
            mihoyoqi: ['male', 'jin', 4, ['hoyosuming', 'hoyoqianren'], ['ext:狂澜异世/image/lini/mihoyoqi.jpg', 'die:ext:狂澜异世/audio/lini/qi/die.mp3']],
            mihoyojingliu: ['female', 'wei', '3/4', ['hoyoliuying', 'hoyofeiguang', 'hoyoshengmie'], ['ext:狂澜异世/image/lini/mihoyojingliu.jpg', 'die:ext:狂澜异世/audio/lini/jingliu/hoyojingliudie.mp3']],
            mihoyozhouwang: ['female', 'jin', '3/6', ['hoyohumeng', 'hoyoqiuyu'], ['ext:狂澜异世/image/lini/mihoyozhouwang.jpg', 'die:ext:狂澜异世/audio/lini/huli/die.mp3']],
            mihoyobachong: ['female', 'jin', 4, ['hoyoshasheng', 'hoyoyuhui'], ['ext:狂澜异世/image/lini/mihoyozhouwang.jpg']],
            mihoyoliuxun: ['male', 'shu', 4, ['hoyofengche', 'hoyojushou'], ['ext:狂澜异世/image/lini/mihoyoliuxun.jpg', 'die:ext:狂澜异世/audio/lini/mihoyoliuxundie.mp3']],
            pixelzhuegliang: ['male', 'shu', 3, ['pixelzhizhe', 'pixelhuoji'], ['ext:狂澜异世/image/px/pixelzhuegliang.jpg']],
            pixelcaoying: ['female', 'wei', '3/6', ['pixellingren', 'pixelfujian'], ['ext:狂澜异世/image/px/pixelcaoying.jpg']],
            pixelniujin: ['male', 'wei', 4, ['pixelcuirui', 'pixelliewei'], ['ext:狂澜异世/image/px/pixelniujin.jpg']],
            pixelcaoyingL: ['female', 'wei', '3/6', ['pixellingrenL', 'pixelfujian'], ['ext:狂澜异世/image/px/pixelcaoying.jpg']],
            pixelsimayi: ['male', 'jin', 3, ['pixelxingshi', 'pixelsanlue'], ['ext:狂澜异世/image/px/pixelsimayi.jpg']],
            pixelsunquan: ['male', 'wu', 4, ['pixelzhiheng', 'pixeljianye', 'pixelchengdi'], ['ext:狂澜异世/image/px/pixelsunquan.jpg']],
            pixelsunquanL: ['male', 'wu', 4, ['pixelzhihengL', 'pixeljianyeL'], ['ext:狂澜异世/image/px/pixelsunquan.jpg']],
            pixelliubei: ['male', 'shu', 4, ['pixelrende', 'pixelzhangwu', 'pixelzhaolie'], ['ext:狂澜异世/image/px/pixelliubei.jpg']],
            pixelliubeiL: ['male', 'shu', '3/4', ['pixelrendeL', 'pixelzhangwuL'], ['ext:狂澜异世/image/px/pixelliubeiL.jpg']],
            pixelsunquanU: ['male', 'wu', 4, ['pixelzhihengU', 'pixeljianyeU'], ['ext:狂澜异世/image/px/pixelsunquan.jpg']],
            pixelzhouyu: ['male', 'wu', 4, ['pixelfanjian', 'pixelyingzi', 'pixelyanyan'], ['ext:狂澜异世/image/px/pixelzhouyu.jpg']],
            pixelzhouyuL: ['male', 'wu', '3/4', ['pixelfanjianL', 'pixelyingziL'], ['ext:狂澜异世/image/px/pixelzhouyu.jpg']],
            pixelzhugeruoxue: ['female', 'wei', 3, ['pixelqiongying', 'pixelnuanhui'], ['ext:狂澜异世/image/px/pixelzhugeruoxue.jpg']],
            pixeljiangwei: ['male', 'shu', 5, ['pixelkunfen'], ['ext:狂澜异世/image/px/pixeljiangwei.jpg']],
            pixeljiangweiL: ['male', 'shu', 3, ['pixelchichaL', 'pixelguanxingL'], ['ext:狂澜异世/image/px/pixeljiangwei.jpg']],
            pixeljiangweiU: ['male', 'shu', 3, ['pixelchichaU', 'pixelguanxingU', 'pixelbazhenU'], ['ext:狂澜异世/image/px/pixeljiangwei.jpg']],
            pixeljiaxu: ['male', 'qun', 3, ['pixelquanmou', 'pixelzhaji'], ['ext:狂澜异世/image/px/pixeljiaxu.jpg']],
            pixeljiaxuL: ['male', 'qun', 3, ['pixelquanmouL', 'pixelweimuL'], ['ext:狂澜异世/image/px/pixeljiaxu.jpg']],
            pixeltianfeng: ['male', 'qun', 3, ['pixelzhongjian', 'pixelnalue'], ['ext:狂澜异世/image/px/pixeltianfeng.jpg']],
            pixeltianfengL: ['male', 'qun', 3, ['pixelzhongjianL'], ['ext:狂澜异世/image/px/pixeltianfeng.jpg']],
            pixelliubiao: ['male', 'qun', 3, ['pixelwuzheng', 'pixelzongshi', 'pixelshiqi'], ['ext:狂澜异世/image/px/pixelliubiao.jpg']],
            pixelliubiaoL: ['male', 'qun', 3, ['pixelwuzhengL', 'pixelzongshiL'], ['ext:狂澜异世/image/px/pixelliubiao.jpg']],
            pixelliubiaoU: ['male', 'qun', 3, ['pixelwuzhengU', 'pixelzongshiU'], ['ext:狂澜异世/image/px/pixelliubiao.jpg']],
            pixelfazheng: ['male', 'shu', 3, ['pixelxianzheng', 'pixellixian'], ['ext:狂澜异世/image/px/pixelfazheng.jpg']],
            yutao: ['male', 'shu', 3, ['xichang', 'shouzhi', 'zhile'], ['ext:狂澜异世/image/character/yutao.jpg']],
            liuhuaqiang: ['male', 'shu', 3, ['bigdao', 'yingbian', 'dianlu'], ['ext:狂澜异世/image/character/liuhuaqiang.jpg']],
            mabaoguo: ['male', 'shu', 3, ['lightningwhip', 'wude', 'neigong'], ['ext:狂澜异世/image/character/mabaoguo.jpg']],
            chuanshanjia: ['male', 'jin', '7/8', ['dpoioned', 'doubleagent', 'selfbang'], ['ext:狂澜异世/image/character/chuanshanjia.jpg']],
            yijie_caixukun: ['male', 'jin', '7/8', ['kunkundance', 'kunkunpingding', 'kunkunxifans'], ['ext:狂澜异世/image/character/yijie_caixukun.jpg']],
            bigownerofmelonstall: ['male', 'jin', '7/8', ['melonsellersfanga', 'melonscalesgacheng', 'melonstallgatan'], ['ext:狂澜异世/image/character/bigownerofmelonstall.jpg']],
            ejiege: ['male', 'wu', 4, ['ejiebaibu', 'ejieweixie'], ['ext:狂澜异世/image/character/ejiege.jpg']],
            // // 春
            yijiesunce: ['male', 'shu', '4/5', ['yijieyingba', 'yijiezhiyinang', 'yijieyinghun', 'yijieyingzi'], ['ext:狂澜异世/image/character/yijiesunce.jpg']],
            yijieliubei: ['male', 'wei', '3/4', ['yijierende', 'yijiezhangwu'], ['ext:狂澜异世/image/character/yijieliubei.jpg']],
            yijiecaozei: ['male', 'wu', '3/4', ['yijiejianxiong', 'yijiejianci'], ['ext:狂澜异世/image/character/yijiecaozei.jpg']],
            yijieyuanshao: ['male', 'wu', '4/5', ['yijieluanji', 'yijiesheji'], ['ext:狂澜异世/image/character/yijieyuanshao.jpg']],
            yijiezhugeliangkongrong: ['male', 'wei', '1/3', ['yijieguanxing', 'yijiebazhen', 'yijiemingshi'], ['ext:狂澜异世/image/character/yijiezhugeliangkongrong.jpg']],
            // // 夏
            // // 秋
            yijiejiaxu: ['male', 'wu', 4, ['rgxkuangmo', 'rgxgouqie'], ['ext:狂澜异世/image/character/yijiejiaxu.jpg']],
            yijiexunyu: ['male', 'shu', 4, ['rgxqumao', 'rgxtungou', 'rgxximing'], ['ext:狂澜异世/image/character/yijiexunyu.jpg']],
            rgxspluxun: ['male', 'shu', 3, ['rgxzonghuo', 'rgxqianxun', 'rgxlianying'], ['ext:狂澜异世/image/character/rgxspluxun.jpg']],
            yijielubu: ['male', 'wu', 4, ['yijierumou', 'yijieruqian', 'yijieshenfen', 'yijierunu'], ['ext:狂澜异世/image/character/yijielubu.jpg']],
            yijiexiahoudun: ['male', 'shu', 4, ['yijieganglie', 'yijietanlu', 'yijieduyan'], ['ext:狂澜异世/image/character/yijiexiahoudun.jpg']],
            // // 冬
            yijieguanyv: ['male', 'wu', 4, ['wensheng', 'qieshu'], ['ext:狂澜异世/image/character/yijieguanyv.jpg']],
            yijiezhangfei: ['male', 'wei', 4, ['rgxpaoxiao', 'rgxkuangcao'], ['ext:狂澜异世/image/character/yijiezhangfei.jpg']],
            yijiehuangzhong: ['male', 'wu', 4, ['rgxliegong', 'rgxliema2'], ['ext:狂澜异世/image/character/yijiehuangzhong.jpg']],
            yijietaishici: ['male', 'shu', 4, ['rgxdiyi', 'rgxchangbing'], ['ext:狂澜异世/image/character/yijietaishici.jpg']],
            yijieyujin: ['male', 'shu', 4, ['rgxshijie', 'rgxnijun', 'rgxshoufang'], ['ext:狂澜异世/image/character/yijieyujin.jpg']],
        },
        characterIntro: {
            newjiyu: '卫觊(155年—229年),字伯觎,其名与字的对应当取自<觊觎>一词.<三国志>作伯儒当为近音误传.河东安邑(今山西夏县)人.三国时期政治家、文学家、书法家,晋朝太保卫瓘之父.卫觊少年早成,以才学著称.司空曹操辟为属吏,历任茂陵县令、尚书郎、治书侍御史.负责镇守关中,为曹操平定中原、底定关中做好准备.魏国建立后,担任侍中,主掌典礼制度,迁魏国尚书,准备汉魏禅让之事.曹丕称帝后,拜为尚书,封为阳吉亭侯,负责监修国史和谏议朝政.魏明帝曹叡即位后,卫觊进封阌乡侯.太和三年,去世,谥号为敬.著有<魏官仪>等',
            renewjiyu: '卫觊(155年—229年),字伯觎,其名与字的对应当取自<觊觎>一词.<三国志>作伯儒当为近音误传.河东安邑(今山西夏县)人.三国时期政治家、文学家、书法家,晋朝太保卫瓘之父.卫觊少年早成,以才学著称.司空曹操辟为属吏,历任茂陵县令、尚书郎、治书侍御史.负责镇守关中,为曹操平定中原、底定关中做好准备.魏国建立后,担任侍中,主掌典礼制度,迁魏国尚书,准备汉魏禅让之事.曹丕称帝后,拜为尚书,封为阳吉亭侯,负责监修国史和谏议朝政.魏明帝曹叡即位后,卫觊进封阌乡侯.太和三年,去世,谥号为敬.著有<魏官仪>等',
            beitaganning: '快意逍遥打劫四方',
            yijieyangxiu: '当曹贼的谋士不得劲,还得是搞摊煎饼的营生!',
            rgx_spcaochun: '鳝甲比膳甲更好',
            rgx_zhengquan: '郑泉,三国时期吴国人物.字文渊,陈郡人.博学,嗜酒,初为郎中,迁太中大夫.多次出使蜀国.夷陵之战后,作为和睦使者去白帝城面见刘备,开始了两国回复邦交的进程.<吴书>:郑泉字文渊,陈郡人.博学有奇志,而性嗜酒,其闲居每曰:<愿得美酒满五百斛船,以四时甘脆置两头,反覆没饮之,惫即住而啖肴膳.酒有斗升减,随即益之,不亦快乎!>权以为郎中.尝与之言:<卿好於众中面谏,或失礼敬,宁畏龙鳞乎？>对曰:<臣闻君明臣直,今值朝廷上下无讳,实恃洪恩,不畏龙鳞.>后侍宴,权乃怖之,使提出付有司促治罪.泉临出屡顾,权呼还,笑曰:<卿言不畏龙鳞,何以临出而顾乎？>对曰:<实侍恩覆,知无死忧,至当出閤,感惟威灵,不能不顾耳.>使蜀,刘备问曰:<吴王何以不答吾书,得无以吾正名不宜乎？>泉曰:<曹操父子陵轹汉室,终夺其位.殿下既为宗室,有维城之责,不荷戈执殳为海内率先,而於是自名,未合天下之议,是以寡君未复书耳.>备甚惭恧.泉临卒,谓同类曰:<必葬我陶家之侧,庶百岁之后化而成土,幸见取为酒壶,实获我心矣.>',
            spzhangliaoo: '更厉害的辽神,卡死孙权小儿一百年',
            db_rgxspmachao: '不仅蜀而且吴,就问你牛不牛逼吧',
            rgxyishi: '查理一世(英语:Charles I,1600年11月19日—1649年1月30日),又译查尔斯一世.斯图亚特王朝的第十位苏格兰国王、第二位英格兰及爱尔兰国王(1625年3月27日—1649年1月30日在位).詹姆斯一世和丹麦公主安妮的次子,英国历史上唯一被公开处死的国王,欧洲史上第一个被公开处死的君主.查理一世在位期间的特点就是混乱的宗教冲突.臣民们普遍对他们国王的信仰持不信任态度,一方面,在三十年战争中,他的失误成功地帮助了新教势力,然而另一个事实却是他迎娶了一位罗马天主教的公主.查理一世还重用当时具有争议的教会人物.他的很多臣民都认为这样做使得英格兰教会与罗马天主教会的关系太紧密了.此后,查理一世还试图迫使苏格兰进行宗教改革,从而引发了主教战争.这一切都使英格兰和苏格兰国会更加坚定了自己的立场,最终促成了查理一世的灭亡.在查理一世最后的几年中,他与国会之间爆发英国内战.同时他又制定了一系列的宗教政策,引起了以清教徒为代表的加尔文教派的不满.查理一世在第一次英国内战中被击败后,国会希望他能够接受君主立宪制.然而查理一世执迷不悟,他与苏格兰结盟,并逃到了怀特岛郡,这种行为彻底激怒了国会,从而导致了第二次英国内战.查理一世再次被击败,随后他被逮捕,并在不久后以叛国罪被处死,时年49岁.英国的君主体制随即土崩瓦解,共和国成立.这一时期也被称为克伦威尔空位期.查理一世的长子查理二世,在其父死后继位,直到1660年复辟后才行使权力',
            rgxershi: '乔治二世(英语:George II,1683年11月9日-1760年10月25日),德意志汉诺威选帝侯及大不列颠、爱尔兰汉诺威王朝第二位国王(1727年-1760年在位).乔治一世与索菲·多罗特娅的独生子.1705年,与安斯巴赫的威廉敏娜·夏洛特·卡罗琳结婚,共有三个儿子、五个女儿.1727年,乔治一世驾崩后继位为英国国王、汉诺威选侯,称乔治二世.在政治上得到英国首任首相罗伯特.沃波尔的支持,争取到多数辉格党人和有势力的托利党人对其正统地位的承认.乔治二世一生热爱军事.1743年,在奥地利王位继承战争中的代廷根战役中指挥与法国作战,在失去战马的情况下,步行挥剑指挥战斗,最终以很少的代价赢得了战斗',
            rgxsanshi: '路易三世(Louis III,863年—882年8月5日)是西法兰克王国加洛林王朝国王路易二世与王后勃艮第的安斯加尔德的长子,879年其父王死后他与弟卡洛曼(Carloman)平分王国,二王共治,他获得西法兰克和纽斯特里亚(Neustria),直到路易三世先于卡洛曼二世去世',
            rgxsishi: '亨利四世(法语:Henri IV,1553年12月13日—1610年5月14日),本名亨利·德·波旁或亨利·德·纳瓦尔,即位前通常被称为纳瓦拉的亨利.法兰西王国波旁王朝的创建者(1589年8月2日—1610年5月14日在位),纳瓦拉王国国王(称恩里克三世·德·纳瓦尔,1572年6月9日—1610年5月14日在位).亨利四世原为胡格诺派信徒,为了继承法国王位,改信天主教.原为纳瓦拉国王,是法国瓦卢瓦王室的远亲.在胡格诺战争中,以新教领袖的身份参战,凭借出色的军事才能和善于利用敌方矛盾,成为这场内战中的胜利者.1589年,在亨利三世死后,亨利四世得以继位,但因异端身份不被承认.经过与天主教同盟的斗争以及改宗天主教的明智举动,他于1594年正式加冕,并以胜利者的身份进入巴黎,开启了波旁王朝的统治.1595年起,亨利四世相继在方丹、亚眠击败同盟军与西班牙干涉军,稳固了统治.1598年,他颁布<南特敕令>,承认法国国内胡格诺教徒的信仰自由,彻底结束了法国宗教战争.他对内加强君主专制,致力于重建战后的国家,对外则避免卷入大规模的战争,使法国很快从战争中复苏过来.1610年,亨利四世在巴黎被狂热的天主教徒刺杀身亡,人民普遍同情哀悼这位把法国从废墟中重建的国王,赞誉其为<贤明王亨利>(Bon roi Henri,或译为<好王亨利>),并追称为<亨利大帝>',
            rgxwushi: '查理五世(一译卡尔五世)在1500年2月24日生于佛兰德伯国的根特(今属比利时).是哈布斯堡王朝广泛的皇室联姻的最终产物.他是出身于哈布斯堡家族的奥地利大公腓力一世与卡斯蒂利亚女王胡安娜(疯女)之子,阿拉贡的费尔南多二世与卡斯蒂利亚的伊莎贝拉一世的外孙,神圣罗马帝国皇帝马克西米利安一世和勃艮第女公爵玛丽的孙子.他自幼在低地国家被抚养长大,童年时的教师是乌得勒支的艾德里安(即日后的教皇哈德良六世).在查理统治期间,美洲的卡斯蒂利亚领土被赫尔南·科尔特斯和弗朗西斯科·皮萨罗等征服者大大扩展.他们征服了阿兹特克和印加帝国,并在1519年至1542年间将其并入帝国,成为新西班牙和秘鲁的总督.再加上1522年麦哲伦远征队环球航行的成功,这些成功使查理相信了他成为基督教世界领袖的神圣使命,基督教世界仍然感受到来自伊斯兰教的巨大威胁.这些征服也帮助巩固了查理的统治,为国库提供了大量的黄金',
            rgxliushi: '第六世达赖喇嘛·仓央嘉措(藏文:ཚངས་དབྱངས་རྒྱ་མཚོ།;Tshangs-dbyangs-rgya-mtsho;1683.03.01－1706.11.15),门巴族,藏传佛教格鲁派大活佛,法名罗桑仁钦仓央嘉措,中国历史上著名的诗人、政治人物.康熙二十二年(1683年)仓央嘉措生于西藏南部门隅纳拉山下宇松地区乌坚林村的一户农奴家庭,父亲扎西丹增,母亲次旺拉姆.家中世代信奉宁玛派佛教.康熙三十六年(1697年)被当时的西藏摄政王第巴·桑结嘉措认定为五世达赖的转世灵童,同年在桑结嘉措的主持下在布达拉宫举行了坐床典礼.康熙四十年(1701年),陷入拉藏汗和桑结嘉措的冲突.康熙四十四年(1705年)被废,据传在康熙四十五年(1706年)的押解途中圆寂,终年23岁.仓央嘉措是西藏最具代表的民歌诗人,写了很多细腻真挚的诗歌,其中最为经典的是拉萨藏文木刻版<仓央嘉措情歌>',
            rgxqishi: '查理七世(忠于职守的)(法语:Charles VII le Victorieux,1403年2月22日—1461年7月22日),法兰西瓦卢瓦王朝第五位国王(1422年—1461年在位).是疯子查理六世和巴伐利亚的伊萨博之子.因为兄长和弟弟均早逝而成为继承人.查理七世进行一系列重大改革,固定税收制度,建立有骑兵和步兵的常备军(这一政策后来被其子路易十一抛弃).1435年后,查理七世不再定期召开三级会议.1438年查理七世在布尔日颁布国事诏书,使法兰西教会一定程度上服从王室.1439年颁布建立常备军的奥尔良法令.1440年,查理七世平息了大贵族的叛乱.查理七世在1453年结束了百年战争.查理七世统治前后的不同.也许没有圣女贞德,就没有奥尔良保卫战的胜利,但法国后来的统一强盛,查理七世功不可没.查理七世统治早期的法国偏安一隅,物质资源并不丰沛,奥尔良是其领地上唯一的大城市.<所以查理七世常被敌人讽刺地称作布尔日王,暗示其领土建立以来的狭小和从未扩张.>面对支离破碎的法国,查理七世若不能建立起有效的统治,也就不能征收赋税,招募士兵.<国王威信的局限性不仅表现在臣民的反抗和拒不听命,而且表现在国王没有能力在诸侯的采邑里行使他的法律、委派官吏和财政人员.>在波旁家族和勃艮第族眼里,自称的查理七世根本不具有合法性,不能称之为法王.直到1429年7月17日,在贞德的帮助下,查理七世在兰斯大教堂加冕,他才确立了合法性.<其影响也从南部和东部的朗格多克、多菲,扩大到北部、西部的贝里、图海纳、普瓦图及安茹的部分地区.>查理七世在1453年结束了百年战争,收复了除加来之外英国在法国境内的全部领地',
            rgxbashi: '亨利八世(英文:Henry Ⅷ,1491年6月28日—1547年1月28日)是都铎王朝第二位英格兰国王(1509年4月22日—1547年1月28日在位)及首位爱尔兰国王(1541年—1547年1月28日在位).他是英王亨利七世与伊丽莎白王后的次子.做为都铎王朝第二任国王,也是爱尔兰领主,后来更成为爱尔兰国王.亨利八世为了休妻另娶新皇后,与当时的罗马教皇反目,推行宗教改革,并通过一些重要法案,容许自己另娶,并将当时英国主教立为英国国教会大主教,使英国教会脱离罗马教廷,自己成为英格兰最高宗教领袖,并解散修道院,使英国王室的权力因此达到顶峰.他在位期间,把威尔士并入英格兰.1547年1月28日,亨利八世在怀特霍尔宫去世,埋葬在温莎堡的圣乔治教堂,与第三任妻子珍·西摩合葬.他惟一的合法儿子爱德华六世根据第三部<王位继承法>,继承其王位.亨利八世时期没有常备军,国家实施招募雇佣军制度',
            rgxjiushi: '<让我们为所有平息争端者祝福.> ——法王路易九世<br><我独自安眠,绝对安全,因为不会有人对我怀有嫉恨之心.> ——法王路易九世',
            mihoyolurenjia: '路人而已,保持简单和朴素!',
            rgxsunquan: '奇怪的孙权,似乎有啥大病',
            yujicheng: "这里是里根十世!里根十世一共有十个人,分别是Ⅰ,Ⅱ,Ⅲ,Ⅳ,Ⅴ,Ⅵ,Ⅶ,Ⅷ,Ⅸ和<span style='color: #ffc7c7'>Ⅹ</span>",
            rgxtgspcaocao: '渭南之战是汉献帝建安十六年(211年),丞相曹操击破韩遂、马超等关中联军的作战.当时关西诸侯在名义上归顺曹操,曹操欲借道讨伐汉中张鲁,于是,关西诸侯起兵造反,阻止曹军进兵,史称<韩遂、马超之乱>.双方在关中潼关、渭南等地发生大战,最后曹操用计取胜,压制关中',
            rgxtgspxuzhu: '话说潼关一战...船行了不久,船夫又被射死了,船便开始了漂流,这时,又是许褚,一边用马鞍帮曹操挡住射来的流剑,一边用手划桨,将船从黄河南岸划到了北岸,与大部队汇合.终于曹操的部队顺利绕过了潼关,来到了马超的背面.起初马超还想要反抗一下,但慢慢地发现自己兵力不敌曹操,便想着要来讲和,曹操便答应了.但曹操想的是,在结束的时候对马超实行挑拨离间之计.谈判那天,双方的主帅便来到两军的中间地带,军队都退得比较远,两边各出了两个人,一边是马超跟韩遂,一边是曹操跟许褚.欲知后事如何,请君自己百度!',
            rgxtgsppangtong: '煞笔武将,自己百度',
            rgxzugeliang: '',
            mihoyopaohuiyi: '简单的武将,没啥难的',
            mihoyoliuxun: '刘循(生卒年不详)东汉末年益州牧刘焉之孙、刘璋之子.献帝初平年间,奉祖父刘焉之命留守雒城.建安十八年,刘备进围雒城,刘循率军抵抗,坚守近一年,期间乱箭射杀其军师中郎将庞统.刘璋投降后,刘循留在蜀地,被任命为奉车中郎将',
            yidemeifang: '???',
            mihoyolinni: '琳妮特,米哈游出品的游戏<原神>及其衍生作品中的角色,总是藏在阴影中的魔术助手,自称<多功能魔术助理机关>.寡言少语,罕有表情,行动如猫一样难以预料',
            mihoyoheita: '我是黑塔,空间站「黑塔」的主人…仅限于法律上.<br>造好这地方,放完东西,我就不管了<br>——现在和你说话的,是我远程操纵的人偶.<br>好看当然是好看的,但跟我小时候比,勉强七分相似吧',
            mihoyoqi: '伍六七,中国动画<伍六七>及其衍生作品中的男主角,失忆前是第一刺客, 失忆后成了大保发廊的高级发型师,虽然经常接些乱七八糟的廉价任务,但是伍六七却是一个假贱贱、真温柔、热血的短裤男',
            mihoyojingliu: '镜流,米哈游出品的游戏<崩坏:星穹铁道>及其衍生作品中的角色,生于仙舟「苍城」,原「云上五骁」成员、仙舟「罗浮」剑首,云骑军不败盛名的缔造者.而今其名字已被抹去,成为行走于魔阴身边缘的仙舟叛徒,汲汲追寻旧日的夙愿 .倒在她剑下的丰饶之民数不胜数,造翼者的羽卫,步离人的父狼,连高如山岳的器兽也当不住她的一击,可最终因魔阴神智狂乱、大开杀戒,成了逃亡域外的重犯',
            mihoyozhouwang: '穷兵黩武、重刑厚敛、拒谏饰非,是与夏桀并称<桀纣>的典型暴君',
            mihoyobachong: '八重神子,米哈游出品的游戏<原神>及其衍生作品中的角色,掌管鸣神大社的大巫女、狐之血脉的延续者、<永恒>的眷属与友人,以及,轻小说出版社<八重堂>的恐怖总编.有着多重身份的神秘宫司,凡人或许永远无法了解她的真面目与真心',
            pixelzhuegliang: '像素诸葛亮,没见过吧!',
            pixelcaoying: '这次,你见到了像素曹婴',
            pixelcaoyingL: '削弱曹婴',
            pixelniujin: '像素老牛',
            pixelsimayi: '像素司马懿,还是晋势力',
            pixelsunquan: '像素渣权,还会制衡技能,贼牛逼了',
            pixelsunquanL: '削弱版神谋界渣权',
            pixelliubei: '像素刘备',
            pixelliubeiL: '削弱刘备',
            pixelsunquanU: '最垃圾的孙权',
            pixelzhouyu: '像素周瑜',
            pixelzhouyuL: '像素周瑜削弱版',
            pixelzhugeruoxue: '像素诸葛若雪',
            pixeljiangwei: '像素姜维',
            pixeljiangweiL: '削弱像素姜维',
            pixeljiangweiU: '垃圾版本像素姜维',
            pixeljiaxu: '像素贾诩',
            pixeljiaxuL: '削弱贾诩',
            pixeltianfeng: '像素田丰',
            pixeltianfengL: '削弱田丰',
            pixelliubiao: '像素刘表',
            pixelliubiaoL: '削弱刘表',
            pixelliubiaoU: '垃圾刘表',
            pixelfazheng: '法正',
            yutao: '俞涛(1994年-),出生于 浙江省绍兴市 ,网络热梗<九转大肠>主角 ,现为烹饪老师. 其在美食综艺< 顶级厨师 >中,未将大肠清洗干净故意保留部分原汁原味,制作了一份带<馅>的九转大肠,导致评委品尝后面露难色,与俞涛的自信回答形成鲜明对比,被网友制成各种 表情包 和鬼畜视频,刷遍全网',
            liuhuaqiang: '刘华强,是在电视剧<征服>中的登场的反一号男主角,由演员孙红雷所扮演.在剧中刘华强是身份和职业是衡州一黑帮集团的老大,因为另一黑帮头目封彪把他的弟弟刘华文被砍伤,刘华强、企图杀掉与自己所有有过节的人.最后在被警方在藏身之处逮捕,终究未能逃脱疏而不漏的法网',
            mabaoguo: '马保国(1952年-),浑元形意太极门创始人、掌门人他曾写出一本武术专著,认为传统功夫最大的优势就是以柔克刚,刚柔相济.2020年11月,参演电影<少年功夫王>',
            chuanshanjia: 'des:我就是大名鼎鼎的重庆军统和大日本双料高级特工,代号——穿山甲!哼,杜孝先是我放的,这鸡汤里面的毒我也放了,不过这鸡汤我喝了,我肯定得死,你们不喝,也别想活着,龟野先生,天皇陛下,我,我的任务完成啦!啊哈哈哈哈哈,啊哈哈哈哈哈,奶奶的,给我玩阴的是吧,直接来吧!',
            yijie_caixukun: '2018年1月,蔡徐坤参加竞演类综艺节目<偶像练习生>,并于同年4月6日以第一名的成绩正式出道.后来哥哥塌房了,保护我家哥哥,下次我让哥哥给你们下蛋吃!',
            bigownerofmelonstall: '<你这瓜保熟吗？><br><不熟我吃了它,满意了吧!>',
            ejiege: '杰哥,是如果早知道男生也会被性侵的反派,引诱阿伟去他家,从而阿伟被性侵.<啊,杰哥不要啦~>',
            yijiesunce: '那个男人,在他26岁那年,被一位来自2800年的时空穿越者:空间博士 所救.从此那个男人走上了一条截然不同的道路.在另一个时空,那个男人与刘备一同开辟了蜀汉政权,并与东吴联合,一同对抗强大的北魏',
            yijieliubei: '刘备,仁德的君主.在遇到那个男人之前,一直在曹操的军营里编织草鞋为生.5年前,那个男人突然出现在曹操的军营里面,并制造了一场混乱.刘备也趁乱溜走.那个男人看刘备会编草鞋,还算有点用,就带上前往西川.在那里,两人靠刘备编草鞋的能力站稳了脚跟,并建立了蜀汉政权',
            yijiecaozei: '曾经是威风凛凛的魏国大将军,但是在那个男人到来后,情况都变了.虽出现过混乱,但很快就平息.几天后,不知为何,军营里突然紧缺草鞋,引发了集体暴动,曹操被迫出逃至荆州.在那里,遇到了袁绍,两人相见恨晚.4年后,两人一同开辟了东吴政权',
            yijieyuanshao: '曾经拜访诸葛亮和孔融,结果被看不起.袁绍被二人看不起的消息传到军中,袁军大乱,袁绍慌忙逃离.失意的袁绍走上了另一条道路.在3年的漂泊后,袁绍来到了荆州,刚好遇到了曹操.二人一拍即合,在江东打拼多年,建立了东吴政权',
            yijiezhugeliangkongrong: '汉中的名士.二人曾经皆是南华老仙的徒弟.后来因为二人偷取了天书,导致南华老仙被雷劈死.懊悔不已的两人决定加入曹操,帮助魏国抵御北魏.后因曹操跑路,二人便夺取了魏军的控制权',
            yijiejiaxu: '命运尚未显示',
            yijiexunyu: '蜀国的逗猫大师,尤其擅长制作四色猫条.刘备孙策入川后,经常光顾荀彧的店铺,并要求他定期为文武百官表演<驱猫吞狗>之术,以缓解百官水土不服之症状',
            yijieguanyv: '在刘备孙策这对流氓组合入西川时,关羽为躲避战乱离开此地,在路过一村子时,发现里的农民种植的黍产量很高,以为黍是成功的关键,决定偷取村民们的黍,以此作为自己投奔下一家的筹码.后看到曹操招兵买马,开设考试,决定将这些黍赠送给曹操.在关羽三寸不烂之舌以及高强的武力之下,成为东吴的一员大将,威风凛凛,并依靠偷取黍的传统手艺发家致富',
            yijiezhangfei: '命运尚未显示',
            yijiehuangzhong: '命运尚未显示',
            yijietaishici: '命运尚未显示',
            yijieyujin: '命运尚未显示',
            rgxspluxun: '命运尚未显示',
            yijielubu: '命运尚未显示',
            yijiexiahoudun: '命运尚未显示',
        },
        characterTitle: {
            pixelzhuegliang: '#gPx001',
            pixelcaoyingL: '#gPX002L',
            pixelcaoying: '#gPx002',
            pixelniujin: '#gPx003',
            pixelsimayi: '#gPx004',
            pixelsunquan: '#gPx005',
            pixelsunquanL: '#gPx005L',
            pixelliubei: '#gPx006',
            pixelliubeiL: '#gPx006L',
            pixelsunquanU: '#gPx005U',
            pixelzhouyu: '#gPx007',
            pixelzhouyuL: '#gPx007L',
            pixelzhugeruoxue: '#gPx008',
            pixeljiangwei: '#gPx009',
            pixeljiangweiL: '#gPx009L',
            pixeljiangweiU: '#gPx009U',
            pixeljiaxu: '#gPx010',
            pixeljiaxuL: '#gPx010L',
            pixeltianfeng: '#gPx011',
            pixeltianfengL: '#gPx011L',
            pixelliubiao: '#gPx012',
            pixelliubiaoL: '#gPx012L',
            pixelliubiaoU: '#gPx012U',
            yutao: '#r大肠屎者',
            liuhuaqiang: '#r无敌西瓜刀',
            mabaoguo: '#r混元形意太极',
            chuanshanjia: '#b高级特工',
            yijie_caixukun: '#b塌房艺人',
            bigownerofmelonstall: '#g无辜的🖤老板',
            ejiege: '#bWhat‘s this?',
            yijiesunce: '#r辣个男人回来了',
            yijieliubei: '#g真正的君主',
            yijiecaozei: '#r爱好&为人',
            yijieyuanshao: '#b袁神启动!',
            yijiezhugeliangkongrong: '#r丞相叛变了',
            yijiejiaxu: '#r毒士？谋士!',
            yijiexunyu: '#g逗猫大师',
            yijieguanyv: '#r正确的忠义',
            yijiezhangfei: '#b咆笑喝断桥',
            yijiehuangzhong: '#r带<忠>字的',
            yijietaishici: '#r天地人',
            yijieyujin: '#r沉默是金',
            rgxspluxun: '#r纵火犯',
            yijielubu: '#g愚者多谋',
            yijiexiahoudun: '#r痔疮将军',
        },
        perfectPair: {},
        skill: {
            mihoyoyouji: {
                enable: 'chooseToUse',
                filter(event, player) {
                    if (!player.countCards('hes')) return false;
                    for (var i of lib.inpile) {
                        let type = get.type2(i),
                            useHistory = Object.keys(player.getStat('card')),
                            tag = get.tag({ name: i }, 'damage');
                        if (useHistory.length && useHistory.includes(i)) continue;
                        if ((_status.currentPhase == player && !tag) || (_status.currentPhase != player && tag)) continue;
                        if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) return true;
                    }
                    return false;
                },
                chooseButton: {
                    dialog(event, player) {
                        let list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            let name = lib.inpile[i],
                                useHistory = Object.keys(player.getStat('card'));
                            if (useHistory.length && useHistory.includes(name)) continue;
                            if (get.tag({ name: name }, 'damage') && _status.currentPhase == player) {
                                if (name == 'sha') {
                                    if (event.filterCard({ name }, player, event)) list.push(['基本', '', 'sha']);
                                    for (var nature of lib.inpile_nature) {
                                        if (event.filterCard({ name, nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                                    }
                                } else if (get.type2(name) == 'trick' && event.filterCard({ name }, player, event)) list.push(['锦囊', '', name]);
                                else if (get.type(name) == 'basic' && event.filterCard({ name }, player, event)) list.push(['基本', '', name]);
                            } else if (!get.tag(i, 'damage') && _status.currentPhase != player) {
                                if (get.type2(name) == 'trick' && event.filterCard({ name }, player, event)) list.push(['锦囊', '', name]);
                                else if (get.type(name) == 'basic' && event.filterCard({ name }, player, event)) list.push(['基本', '', name]);
                            }
                        }
                        return ui.create.dialog('游击', [list, 'vcard']);
                    },
                    check(button) {
                        if (_status.event.parent.type != 'phase') return 1;
                        var player = _status.event.player;
                        if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                        return player.getUseValue({
                            name: button.link[2],
                            nature: button.link[3],
                        });
                    },
                    backup(links, player) {
                        return {
                            audio: 'wuniang',
                            filterCard: true,
                            popname: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            position: 'hes',
                            viewAs: { name: links[0][2], nature: links[0][3] },
                            precontent() { },
                        };
                    },
                    prompt(links, player) {
                        return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                hiddenCard(player, name) {
                    if (!player.countCards('hes')) return false;
                    let list = [];
                    for (var i of lib.inpile) {
                        let type = get.type2(i),
                            useHistory = Object.keys(player.getStat('card')),
                            tag = get.tag({ name: i }, 'damage');
                        if (useHistory.length && useHistory.includes(i)) continue;
                        if ((_status.currentPhase == player && !tag) || (_status.currentPhase != player && tag)) continue;
                        if (type == 'basic' || type == 'trick') list.push(i);
                    }
                    return list.includes(name);
                },
                ai: {
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player) {
                        if (!player.countCards('hes')) return false;
                        for (var i of lib.inpile) {
                            let type = get.type2(i),
                                useHistory = Object.keys(player.getStat('card')),
                                tag = get.tag({ name: i }, 'damage');
                            if (useHistory.length && useHistory.includes(i)) continue;
                            if ((_status.currentPhase == player && !tag) || (_status.currentPhase != player && tag)) continue;
                            if (type == 'basic' || type == 'trick') return true;
                        }
                        return false;
                    },
                    order: 9,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            mihoyodubu: {
                audio: 'rezhennan',
                usable: 1,
                trigger: { player: 'useCardAfter' },
                forced: true,
                filter(event, player) {
                    const tag = get.tag(event.card, 'damage');
                    return _status.currentPhase == player ? tag : !tag;
                },
                async content(event, trigger, player) {
                    const targets = trigger.targets;
                    player.draw(targets && targets.length ? targets.length : 1);
                },
            },
            mihoyoanxing: {
                audio: 'ext:狂澜异世/audio:4',
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return player != target && target.countCards('he') > 0;
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    let list = ['选择弃置其区域内的各一张牌'];
                    let position = ['h', 'e'];
                    position.forEach((position) => {
                        if (target.countCards(position)) {
                            list.push(`${get.translation(target.name)}的${position == 'h' ? '手' : '装备'}牌`);
                            list.push(target.getCards(position));
                        }
                    });
                    const { bool, links } = await player
                        .chooseButton(true, list, [1, 2])
                        .set('filterButton', function (button) {
                            for (var i = 0; i < ui.selected.buttons.length; i++) {
                                if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                            }
                            return true;
                        })
                        .set('ai', function (button) {
                            return player.getUseValue(button.link) + 0.1;
                        })
                        .forResult();
                    if (bool) {
                        target.discard(links);
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player: 0.5,
                    },
                },
            },
            mihoyobuji: {
                audio: 'ext:狂澜异世/audio:4',
                trigger: {
                    source: 'damageSource',
                    player: 'damageEnd',
                },
                forced: true,
                async content(event, trigger, player) {
                    let num = trigger.num;
                    while (num > 0) {
                        await player.draw(Math.max(1, player.getDamagedHp()));
                        num--;
                    }
                },
            },
            mihoyofujiang: {
                forced: true,
                audio: 'ext:狂澜异世/audio:3',
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trifgger, player) {
                    const pre = player.previous,
                        nxt = player.next;
                    let skills = [];
                    if (pre != nxt) {
                        skills.add(lib.skill.mihoyofujiang.merge(lib.skill.mihoyofujiang.getSkills(pre), lib.skill.mihoyofujiang.getSkills(player)).randomGet());
                        skills.add(lib.skill.mihoyofujiang.merge(lib.skill.mihoyofujiang.getSkills(nxt), lib.skill.mihoyofujiang.getSkills(player)).randomGet());
                    } else {
                        skills = lib.skill.mihoyofujiang.merge(lib.skill.mihoyofujiang.getSkills(pre), lib.skill.mihoyofujiang.getSkills(player)).randomGets(2);
                    }
                    if (skills.length) player.addAdditionalSkills('mihoyofujiang', skills, true);
                },
                group: ['mihoyofujiang_die', 'mihoyofujiang_swap', 'mihoyofujiang_show'],
                subSkill: {
                    die: {
                        trigger: { global: 'dieBefore' },
                        forced: true,
                        filter(event, player) {
                            return event.player != player && (player.next == event.player || player.previous == event.player);
                        },
                        async content(event, trigger, player) {
                            const preT = player.previous,
                                nxtT = player.next;
                            _status.temp = [preT, nxtT];
                            const skillSet = new Set(lib.skill.mihoyofujiang.getSkills(trigger.player));
                            const skills = new Set(lib.skill.mihoyofujiang.getSkills(player).filter((value) => skillSet.has(value)));
                            player.removeSkills([...skills]);
                            player
                                .when({ global: 'die' })
                                .filter((evt, player) => {
                                    return evt.player != player;
                                })
                                .then(() => {
                                    const pre = player.previous,
                                        nxt = player.next,
                                        temp = _status.temp[0] == trigger.player ? pre : nxt;
                                    let skills = [];
                                    skills.add(lib.skill.mihoyofujiang.merge(lib.skill.mihoyofujiang.getSkills(temp), lib.skill.mihoyofujiang.getSkills(player)).randomGet());
                                    if (skills.length) player.addAdditionalSkills('mihoyofujiang', skills, true);
                                    delete _status.temp;
                                });
                        },
                    },
                    swap: {
                        init(player) {
                            game.swapSeat = (player1, player2, prompt, behind, noanimate) => {
                                if (noanimate) {
                                    player1.style.transition = 'all 0s';
                                    player2.style.transition = 'all 0s';
                                    ui.refresh(player1);
                                    ui.refresh(player2);
                                }
                                if (behind) {
                                    let totalPopulation = game.players.length + game.dead.length + 1;
                                    for (var iwhile = 0; iwhile < totalPopulation; iwhile++) {
                                        if (player1.next != player2) {
                                            game.swapSeat(player1, player1.next, false, false);
                                        } else break;
                                    }
                                    if (prompt != false) {
                                        game.log(player1, '将座位移至', player2, '后');
                                    }
                                } else {
                                    game.addVideo('swapSeat', null, [player1.dataset.position, player2.dataset.position]);
                                    let seat1 = player1.seatNum;
                                    let seat2 = player2.seatNum;
                                    player2.seatNum = seat1;
                                    player1.seatNum = seat2;
                                    let temp1, pos, i, num;
                                    temp1 = player1.dataset.position;
                                    player1.dataset.position = player2.dataset.position;
                                    player2.dataset.position = temp1;
                                    game.arrangePlayers();
                                    if (!game.chess) {
                                        if (player1.dataset.position == '0' || player2.dataset.position == '0') {
                                            pos = parseInt(player1.dataset.position);
                                            if (pos == 0) pos = parseInt(player2.dataset.position);
                                            num = game.players.length + game.dead.length;
                                            for (const i of game.players) {
                                                temp1 = parseInt(i.dataset.position) - pos;
                                                if (temp1 < 0) temp1 += num;
                                                i.dataset.position = temp1;
                                            }
                                            for (const i of game.dead.length) {
                                                temp1 = parseInt(i.dataset.position) - pos;
                                                if (temp1 < 0) temp1 += num;
                                                i.dataset.position = temp1;
                                            }
                                        }
                                    }
                                    if (prompt != false) {
                                        game.log(player1, '和', player2, '交换了座位');
                                    }
                                }
                                if (noanimate) {
                                    setTimeout(() => {
                                        player1.style.transition = '';
                                        player2.style.transition = '';
                                    }, 200);
                                }
                                _status.event.trigger('swapSeat');
                            };
                        },
                        trigger: { global: 'swapSeat' },
                        forced: true,
                        async content(event, trigger, player) {
                            const pre = player.previous,
                                nxt = player.next;
                            player.removeSkills(player.additionalSkills);
                            let skills = [];
                            if (pre != nxt) {
                                skills.add(lib.skill.mihoyofujiang.merge(lib.skill.mihoyofujiang.getSkills(pre), lib.skill.mihoyofujiang.getSkills(player)).randomGet());
                                skills.add(lib.skill.mihoyofujiang.merge(lib.skill.mihoyofujiang.getSkills(nxt), lib.skill.mihoyofujiang.getSkills(player)).randomGet());
                            } else {
                                skills = lib.skill.mihoyofujiang.merge(lib.skill.mihoyofujiang.getSkills(pre), lib.skill.mihoyofujiang.getSkills(player)).randomGets(2);
                            }
                            if (skills.length) player.addAdditionalSkills('mihoyofujiang', skills);
                        },
                    },
                    show: {
                        trigger: { global: 'showCharacterAfter' },
                        filter(event, player) {
                            return event.player != player && (player.next == event.player || player.previous == event.player);
                        },
                        forced: true,
                        async content(event, trigger, player) {
                            const pre = player.previous,
                                nxt = player.next;
                            let skills = [];
                            if (pre != nxt) {
                                skills.add(lib.skill.mihoyofujiang.merge(lib.skill.mihoyofujiang.getSkills(pre), lib.skill.mihoyofujiang.getSkills(player)).randomGet());
                                skills.add(lib.skill.mihoyofujiang.merge(lib.skill.mihoyofujiang.getSkills(nxt), lib.skill.mihoyofujiang.getSkills(player)).randomGet());
                            } else {
                                skills = lib.skill.mihoyofujiang.merge(lib.skill.mihoyofujiang.getSkills(pre), lib.skill.mihoyofujiang.getSkills(player)).randomGets(2);
                            }
                            if (skills.length) player.addAdditionalSkills('mihoyofujiang', skills, true);
                        },
                    },
                },
                getSkills(player) {
                    return player.getSkills(null, false, false).filter((skill) => {
                        var info = get.info(skill);
                        if (!info || get.is.empty(info) || info.charlotte) return false;
                        return true;
                    });
                },
                merge(arr1, arr2) {
                    let uniqueArr1 = [...new Set(arr1)];
                    let uniqueInArr1 = uniqueArr1.filter((item) => !arr2.includes(item));
                    return uniqueInArr1;
                },
            },
            mihoyoyunjuan: {
                usable: 1,
                audio: 'ext:狂澜异世/audio:1',
                enable: 'phaseUse',
                multitarget: true,
                multiline: true,
                filterTarget(card, player, target) {
                    return player != target;
                },
                selectTarget: -1,
                async content(event, trigger, player) {
                    const targets = event.targets.sortBySeat();
                    await Promise.all(
                        targets.map(async (target) => {
                            await player.useCard({ name: 'sha' }, target);
                        })
                    );
                    {
                        if (game.players.length > 1) {
                            const { targets } = await player
                                .chooseTarget('选择一名其他角色交换座次', true, function (card, player, target) {
                                    return player != target;
                                })
                                .forResult();
                            game.swapSeat(player, targets[0]);
                        }
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        player: 0.5,
                    },
                },
            },
            rgxluzhen: {
                audio: ['lingce', 2],
                init(player) {
                    if (!player.storage.rgxluzhen) player.storage.rgxluzhen = [];
                },
                trigger: { target: 'useCardToTarget' },
                forced: true,
                filter(event, player) {
                    return !player.getStorage('rgxluzhen').includes(event.card.name) && event.player != player;
                },
                marktext: '戮',
                intro: {
                    content: '$',
                },
                async content(event, trigger, player) {
                    const judgeEvent = player.judge((card) => {
                        return !player.getStorage('rgxluzhen').includes(card.name) ? 0.5 : -0.5;
                    });
                    judgeEvent.judge2 = (result) => result.bool;
                    const { card } = await judgeEvent.forResult();
                    const bool = !player.getStorage('rgxluzhen').includes(card.name);
                    if (bool) {
                        trigger.parent.excluded.add(player);
                        player.markAuto('rgxluzhen', card.name);
                    }
                    player.gain(card, 'gain2', 'log');
                },
                group: 'rgxluzhen_draw',
                subSkill: {
                    draw: {
                        trigger: { global: 'useCard' },
                        forced: true,
                        filter(event, player) {
                            return player.getStorage('rgxluzhen').includes(event.card.name);
                        },
                        async content(event, trigger, player) {
                            player.draw();
                            player.getStorage('rgxluzhen').splice(player.getStorage('rgxluzhen').indexOf(trigger.card.name), 1);
                        },
                    },
                },
            },
            rgxguanjun: {
                enable: 'phaseUse',
                audio: ['dinghan', 2],
                filter(event, player) {
                    return !player.hasSkill('rgxguanjun_nouse');
                },
                filterCard(card, player, target) {
                    return !ui.selected.targets.length;
                },
                selectCard() {
                    return ui.selected.targets.length ? -1 : [0, 2];
                },
                filterTarget(card, player, target) {
                    return !ui.selected.cards.length && player != target && !target.hasSkill('rgxluzhen');
                },
                selectTarget() {
                    return ui.selected.cards.length ? 0 : 1;
                },
                check(card) {
                    const val = get.value(card);
                    return 5 - val;
                },
                async content(event, trigger, player) {
                    const targets = event.targets,
                        cards = event.cards;
                    if (targets.length) {
                        await player.loseMaxHp(Math.max(1, player.getDamagedHp()));
                        await targets[0].loseMaxHp(Math.max(1, targets[0].getDamagedHp()));
                        targets[0].addSkill('rgxluzhen');
                    } else {
                        const players = game.filterPlayer((current) => current.hasSkill('rgxluzhen')).sortBySeat();
                        await Promise.all(
                            players.map(async (player) => {
                                await player.draw(cards.length, 'nodelay');
                            })
                        );
                        player.addTempSkill('rgxguanjun_nouse');
                    }
                },
                subSkill: {
                    nouse: {
                        trigger: { player: 'damageEnd' },
                        forced: true,
                        charlotte: true,
                        content() { },
                        ai: {
                            nohujia: true,
                            skillTagFilter(player) {
                                const evt = _status.event.parent;
                                return evt.name == 'damage';
                            },
                        },
                    },
                },
                ai: {
                    order: 5,
                    result: {
                        player(player, target) {
                            if (player.getDamagedHp() > 0) return ui.selected.cards.length;
                            return 1;
                        },
                        target(player, target) {
                            if (target) {
                                return get.attitude(player, target) * Math.abs(target.getDamagedHp() - player.getDamagedHp()) * 0.12;
                            }
                        },
                    },
                },
            },
            // 鱼鱼
            rgx_jiandao: {
                mark: true,
                forced: true,
                lastDo: true,
                zhuanhuanji: true,
                marktext: '☯',
                intro: {
                    content(storage, player, skill) {
                        if (player.storage.rgx_jiandao_K == true) {
                            // A  ,
                            /* 
              <li>A:当你使用一张【杀】时 <i><li>a:造成一点伤害:摸一张牌</li><li>b:受到一点伤害:与伤害来源交换装备区的牌</li></i></li>\
              <li>B:当你使用一张【闪】时 <i><li>a:造成一点伤害:回收此闪</li><li>b:受到一点伤害:与伤害来源交换手牌</li></i></li>' 
              */
                            //
                            if (player.storage.rgx_jiandao == true) {
                                return 'Aa:造成一点伤害:摸3张牌';
                            } else {
                                return 'Ab:受到一点伤害:与伤害来源交换装备区的牌';
                            }
                        } else {
                            //B
                            // B
                            if (player.storage.rgx_jiandao == true) {
                                return 'Ba:造成一点伤害:从牌堆底摸3张牌';
                            } else {
                                return 'Bb:受到一点伤害:与伤害来源交换手牌';
                            }
                        }
                    },
                },
                init(player) {
                    player.storage.rgx_jiandao = true;
                },
                group: ['rgx_jiandao_Aa', 'rgx_jiandao_Ab', 'rgx_jiandao_Ba', 'rgx_jiandao_Bb', 'rgx_jiandao_K'],
                subSkill: {
                    Aa: {
                        audio: 'zishu',
                        forced: true,
                        trigger: {
                            source: 'damageEnd',
                        },
                        filter(storage, player, skill) {
                            return player.storage.rgx_jiandao_K && player.storage.rgx_jiandao;
                        },
                        content() {
                            player.draw(3);
                            player.storage.rgx_jiandao = false;
                        },
                    },
                    Ab: {
                        audio: 'reganlu',
                        forced: true,
                        trigger: {
                            player: 'damageEnd',
                        },
                        filter(event, player) {
                            return player.storage.rgx_jiandao_K && !player.storage.rgx_jiandao;
                        },
                        content() {
                            player.swapEquip(trigger.source);
                            player.storage.rgx_jiandao = true;
                        },
                    },
                    Ba: {
                        forced: true,
                        trigger: {
                            source: 'damageEnd',
                        },
                        filter(storage, player, skill) {
                            return !player.storage.rgx_jiandao_K && player.storage.rgx_jiandao;
                        },
                        content() {
                            player.draw(3, 'bottom');
                            player.storage.rgx_jiandao = false;
                        },
                    },
                    Bb: {
                        audio: 2,
                        forced: true,
                        trigger: {
                            player: 'damageEnd',
                        },
                        filter(event, player) {
                            return !player.storage.rgx_jiandao_K && !player.storage.rgx_jiandao;
                        },
                        content() {
                            player.swapHandcards(trigger.source);
                            player.storage.rgx_jiandao = true;
                        },
                    },
                    K: {
                        forced: true,
                        firstDo: true,
                        trigger: {
                            player: 'useCard',
                        },
                        init(player) {
                            player.storage.rgx_jiandao_K == false; // 获得时,状态为B,可以发动B转换为A
                        },
                        content() {
                            // 掌握AB转换
                            switch (trigger.card.name) {
                                // 发动A
                                case 'sha':
                                    if (player.storage.rgx_jiandao_K) {
                                        player.storage.rgx_jiandao_K = false;
                                    }
                                    break;
                                // 发动B
                                case 'shan':
                                    if (!player.storage.rgx_jiandao_K) {
                                        player.storage.rgx_jiandao_K = true;
                                    }
                                    break;
                            }
                        },
                    },
                },
            },
            rgx_jiuxian: {
                trigger: {
                    global: 'dying',
                },
                filter(event, player) {
                    return event.player.hp <= 0;
                },
                forced: true,
                content() {
                    'step 0';
                    player.chooseBool('是否发动"救陷",令' + get.translation(trigger.player) + '回复一点体力,摸两张牌,其减一点体力上限？');
                    ('step 1');
                    if (result.bool) {
                        trigger.player.recover();
                        trigger.player.draw(2);
                        trigger.player.loseMaxHp();
                    } else {
                        event.finish();
                    }
                },
            },
            rgx_juqi: {
                audio: 'ext:余既成:2',
                trigger: {
                    global: 'phaseEnd',
                },
                forced: true,
                filter(event, player, target) {
                    return event.player != player;
                },
                content() {
                    'step 0';
                    player.draw();
                    ('step 1');
                    player.chooseBool('是否对其造成一点伤害？');
                    ('step 2');
                    if (result.bool) {
                        trigger.player.damage(player, 'nocard');
                    } else {
                        event.finish();
                    }
                },
            },
            rgx_jiuge: {
                forced: true,
                init(player) {
                    function getRandomInt(min, max) {
                        min = Math.ceil(min);
                        max = Math.floor(max);
                        return Math.floor(Math.random() * (max - min)) + min; //不含最大值,含最小值
                    }
                    if (!player.storage.rgx_jiuge)
                        player.storage.rgx_jiuge = [
                            [3, 6, 6, 9],
                            [6, 6, 6, 9],
                            [9, 9, 9, 6],
                            [1, 0, 0, 0],
                        ];
                    //第一个3是前3张牌
                    for (var i = 0; i <= 2; i++) {
                        player.storage.rgx_jiuge[i][0] = getRandomInt(3 * (i + 1), 3 * (i + 2) + 1);
                        for (var j = 1; j <= 3; j++) {
                            player.storage.rgx_jiuge[i][j] = getRandomInt(3 * j, 3 * (j + 1) + 1);
                        }
                    }
                },
                mark: true,
                marktext: 'G',
                intro: {
                    name: '九歌',
                    mark(dialog, storage, player) {
                        var count;
                        for (var i = 0; i <= 3; i++) {
                            if (player.storage.rgx_jiuge[3][i]) {
                                count = i;
                                break;
                            }
                        }
                        dialog.content.style['overflow-x'] = 'visible';
                        var list = storage;
                        var list2 = player.getStorage('rgx_jiuge');
                        var core = document.createElement('div');
                        var centerX = -38,
                            centerY = -15;
                        for (var i = 0; i < list.length; i++) {
                            var td = document.createElement('div');
                            var color = '';
                            if (list2[count] == list[i]) color = ' class="yellowtext"';
                            else if (list2.includes(list[i])) color = ' class="greentext"';
                            if (i == count) {
                                td.innerHTML = '<span' + color + '>►[' + player.storage.rgx_jiuge[i] + ']</span>';
                                td.style.position = 'absolute';
                                core.appendChild(td);
                                td.style.left = centerX - 16 + 'px';
                                td.style.top = centerY + i * 20 + 'px';
                            } else {
                                td.innerHTML = '<span' + color + '>[' + player.storage.rgx_jiuge[i] + ']</span>';
                                td.style.position = 'absolute';
                                core.appendChild(td);
                                td.style.left = centerX + 'px';
                                td.style.top = centerY + i * 20 + 'px';
                            }
                        }
                        dialog.content.appendChild(core);
                    },
                },
                trigger: {
                    player: 'phaseUseBegin',
                },
                filter(event, player) {
                    var count = 0;
                    for (var i = 0; i <= 3; i++) {
                        if (player.storage.rgx_jiuge[3][i]) {
                            count = i;
                            break;
                        }
                    }
                    for (var i of player.storage.rgx_jiuge[count]) {
                        if (!(player.countCards('h') % i)) {
                            return true;
                        }
                    }
                    return false;
                },
                content() {
                    player.addTempSkill('rgx_jiuge_x');
                },
            },
            rgx_jiuge_x: {
                mod: {
                    cardUsable(card, player) {
                        var cards = player.storage.rgx_jiuge;
                        return Infinity;
                    },
                    targetInRange(card, player) {
                        var cards = player.storage.rgx_jiuge;
                        return true;
                    },
                },
                onremove(player, skill) {
                    function rgx_arr2(a, b, c) {
                        // a是数组名,b是要减的数量,c是数组第几个
                        var innerArrayLength = a[c].length;
                        for (let j = 0; j < innerArrayLength; j++) {
                            a[c][j] -= b;
                        }
                    }
                    var count = 0;
                    var x = 1;
                    for (var i = 0; i <= 3; i++) {
                        if (player.storage.rgx_jiuge[3][i]) {
                            count = i;
                            break;
                        }
                    }
                    for (var i of player.storage.rgx_jiuge[count]) {
                        if (i == 0 && count != 3) {
                            player.chooseDrawRecover(2);
                            player.storage.rgx_jiuge[3][count] = 0;
                            player.storage.rgx_jiuge[3][count + 1] = 1;
                            x = 0;
                            break;
                        }
                    }
                    if (x && count != 3) {
                        rgx_arr2(player.storage.rgx_jiuge, 1, count);
                    }
                },
            },
            rgx_tianxing: {
                enable: 'phaseUse',
                usable: 1,
                selectTarget: 1,
                filterTarget(card, player, target) {
                    return target != player && !target.hasSkill('rgx_tianxing2');
                },
                check(card) {
                    return 2.5;
                },
                content() {
                    target.addSkill('rgx_tianxing2');
                },
                ai: {
                    order: 8,
                    result: {
                        player(player, target) {
                            return 2.5;
                        },
                        target(player, target) {
                            if (player.hp <= 1) return 0;
                            return get.damageEffect(target, player);
                        },
                    },
                },
            },
            rgx_tianxing2: {
                trigger: {
                    player: 'phaseUseBegin',
                },
                forced: true,
                charlotte: true,
                content() {
                    'step 0';
                    player.removeSkill('rgx_tianxing2');
                    player.judge();
                    ('step 1');
                    var i = 0;
                    player.getCards('hej').forEach((element) => {
                        if (player.getCards('hej', { type: get.type(result.card) }).indexOf(element) === -1) {
                            player.discard(element);
                            i++;
                        }
                    });
                    if (i == 0) {
                        player.damage(player.hp, player, 'nocard');
                    }
                },
                mark: true,
                marktext: '⚔',
                intro: {
                    content: '出牌阶段开始时,进行一次判定.其需依次弃置与判定牌类型不同的牌.若其未弃置牌,则受到其等同于其体力值点伤害',
                },
                ai: {
                    order: 7,
                    result: {
                        player: 1,
                    },
                },
            },
            rgx_yukey: {
                forced: true,
                init(player) {
                    if (!player.storage.rgx_yukey) player.storage.rgx_yukey = ['rgx_juqi', 'rgx_yuqi', 'rgx_jiuge', 'rgx_tianxing', 'rgx_startdown'];
                },
                trigger: {
                    player: 'phaseBegin',
                },
                filter(event, player) {
                    return player.storage.rgx_yukey;
                },
                content() {
                    'step 0';
                    var list = [];
                    for (var i of player.storage.rgx_yukey) {
                        if (!player.hasSkill(i)) {
                            i = '获得' + get.translation(i);
                            list.push(i);
                        }
                    }
                    if (list.length) {
                        player
                            .chooseControl()
                            .set('prompt', '御神:请选择一项')
                            .set('choiceList', list)
                            .set('ai', () => {
                                function getRandomInt(min, max) {
                                    min = Math.ceil(min);
                                    max = Math.floor(max);
                                    return Math.floor(Math.random() * (max - min)) + min; //不含最大值,含最小值
                                }
                                return getRandomInt(0, player.storage.rgx_yukey.length);
                            });
                    } else {
                        event.finish();
                    }
                    ('step 1');
                    player.addSkill(player.storage.rgx_yukey[result.index]);
                    player.getStorage('rgx_yukey').splice(result.index, 1);
                },
            },
            rgx_yuqi: {
                audio: 'ext:余既成:2',
                trigger: {
                    global: ['useCard', 'respondBegin'],
                },
                init(player) {
                    if (!player.storage.rgx_yuqist) player.storage.rgx_yuqist = ['spade', 'heart', 'club', 'diamond'];
                    player.markSkill('rgx_yuqi_spade');
                },
                firstDo: true,
                forced: true,
                filter(event, player, target) {
                    var num = player.countMark('rgx_yuqi') % 4 || 0;
                    var suit = player.storage.rgx_yuqist[num];
                    return event.card.suit && event.card.suit == suit;
                },
                content() {
                    var num = player.countMark('rgx_yuqi') % 4 || 0;
                    var skill = function () {
                        if (num == 3) return 'rgx_yuqi_' + player.storage.rgx_yuqist[0];
                        return 'rgx_yuqi_' + player.storage.rgx_yuqist[num + 1];
                    };
                    var skill2 = 'rgx_yuqi_' + player.storage.rgx_yuqist[num];
                    var mkskill = function (skill, option) {
                        player.markSkill(skill);
                        if (option != 'none') {
                            player.unmarkSkill(option);
                        }
                    };
                    mkskill(skill(), skill2);
                    player.addMark('rgx_yuqi');
                    if (player.storage.rgx_jiandao == true) {
                        player.draw();
                    } else {
                        player.draw('bottom');
                    }
                },
                group: ['rgx_yuqi_spade', 'rgx_yuqi_heart', 'rgx_yuqi_club', 'rgx_yuqi_diamond'],
                subSkill: {
                    spade: {
                        marktext: '♠️️︎️',
                        intro: {
                            name: '♠️️',
                            content: 'mark',
                        },
                    },
                    heart: {
                        marktext: '♥️️︎️',
                        intro: {
                            name: '♥️️︎️',
                            content: 'mark',
                        },
                    },
                    club: {
                        marktext: '♣️️︎️',
                        intro: {
                            name: '♣️️︎️',
                            content: 'mark',
                        },
                    },
                    diamond: {
                        marktext: '♦️️︎',
                        intro: {
                            name: '♦️️︎',
                            content: 'mark',
                        },
                    },
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (typeof card == 'object' && player == _status.currentPhase) {
                            var suit = player.getStorage('rgx_yuqist')[player.countMark('rgx_yuqi') % 4];
                            if (suit && card.suit != 'none' && suit == get.color(card)) {
                                return num + 10;
                            }
                        }
                    },
                },
            },
            rgx_startdown: {
                enable: 'phaseUse',
                limited: true,
                selectTarget: 1,
                filterTarget(card, player, target) {
                    if (player == target) return false;
                    return true;
                },
                check(card) {
                    return 6.5;
                },
                content() {
                    player.awakenSkill('rgx_startdown');
                    target.die();
                    game.dead.remove(target);
                    target.delete();
                },
                mark: true,
                intro: {
                    content: 'limited',
                },
                init(player, skill) {
                    player.storage[skill] = false;
                },
                ai: {
                    order: 8,
                    result: {
                        player(player, target) {
                            return 2.5;
                        },
                        target(player, target) {
                            if (player.hp <= 1) return 0;
                            return get.damageEffect(target, player);
                        },
                    },
                },
            },
            rgx2zhiheng: {
                discard: false,
                enable: 'phaseUse',
                filterCard: true,
                selectTarget: [0, 1],
                filterTarget(card, player, target) {
                    return player != target && target.countCards('h') >= ui.selected.cards.length;
                },
                position: 'h',
                selectCard: [1, Infinity],
                async content(event, trigger, player) {
                    const cards = event.cards,
                        targets = event.targets,
                        num = cards.length;
                    if (!targets.length) {
                        let card = get.cards(num);
                        game.cardsGotoPile(cards, 'insert');
                        game.log(player, '将', cards, '置于了牌堆顶');
                        game.updateRoundNumber();
                        player.gain(card, 'gain2', 'log');
                    } else {
                        const { bool, links } = await player.chooseButton(num, true, ['控牌', targets[0].getCards('h')]).forResult();
                        if (bool) {
                            player.gain(links, 'gain2', 'log');
                            targets[0].gain(cards, 'gain2', 'log');
                        }
                    }
                },
            },
            rgxliye: {
                forced: true,
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return (
                        player.getHistory('useSkill', function (evt) {
                            return evt.skill == 'rgx2zhiheng';
                        }).length || 0
                    );
                },
                async content(event, trigger, player) {
                    player.draw(
                        Math.min(
                            player.getHistory('useSkill', function (evt) {
                                return evt.skill == 'rgx2zhiheng';
                            }).length || 0,
                            5
                        ),
                        'bottom'
                    );
                },
            },
            xiulu2: {
                audio: ['fulu', 2],
                trigger: {
                    player: ['useCard', 'respondBegin'],
                },
                mark: false,
                marktext: '♻️',
                intro: {
                    content: '$',
                },
                forced: true,
                content() {
                    if (!player.getStorage('xiulu2').includes(trigger.card.name)) {
                        player.markAuto('xiulu2', [trigger.card.name]);
                    } else {
                        player.draw();
                        var index = player.getStorage('xiulu2').indexOf(trigger.card.name);
                        player.getStorage('xiulu2').splice(index, 1);
                    }
                },
            },
            wugudeng: {
                audio: ['biyue', 2],
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                filterCard() {
                    return false;
                },
                selectCard: -1,
                selectTarget: -1,
                modTarget: true,
                filterTarget(card, player, target) {
                    return target == player;
                },
                prompt: "视为使用一张<span style='color: #ff2e63'>【吾谷丰登】</span>",
                viewAs: {
                    name: 'wugu',
                },
            },
            beitalese: {
                audio: ['gnjinfan', 2],
                trigger: {
                    player: ['useCard', 'respondBegin'],
                },
                init(player) {
                    if (!player.storage.beitalesest) player.storage.beitalesest = ['spade', 'heart', 'club', 'diamond'];
                    player.markSkill('beitalese_spade');
                },
                firstDo: true,
                forced: true,
                filter(event, player, target) {
                    var num = player.countMark('beitalese') % 4 || 0;
                    var suit = player.storage.beitalesest[num];
                    return event.card.suit && event.card.suit == suit;
                },
                content() {
                    var num = player.countMark('beitalese') % 4 || 0;
                    var skill = function () {
                        if (num == 3) {
                            player.draw(4, 'nodelay');
                            return 'beitalese_' + player.storage.beitalesest[0];
                        }
                        return 'beitalese_' + player.storage.beitalesest[num + 1];
                    };
                    var skill2 = 'beitalese_' + player.storage.beitalesest[num];
                    var mkskill = function (skill, option) {
                        player.markSkill(skill);
                        if (option != 'none') {
                            player.unmarkSkill(option);
                        }
                    };
                    mkskill(skill(), skill2);
                    player.addMark('beitalese');
                    player.draw();
                },
                group: ['beitalese_spade', 'beitalese_heart', 'beitalese_club', 'beitalese_diamond'],
                subSkill: {
                    spade: {
                        marktext: '♠️️︎️',
                        intro: {
                            name: '♠️️',
                            content: 'mark',
                        },
                    },
                    heart: {
                        marktext: '♥️️︎️',
                        intro: {
                            name: '♥️️︎️',
                            content: 'mark',
                        },
                    },
                    club: {
                        marktext: '♣️️︎️',
                        intro: {
                            name: '♣️️︎️',
                            content: 'mark',
                        },
                    },
                    diamond: {
                        marktext: '♦️️︎',
                        intro: {
                            name: '♦️️︎',
                            content: 'mark',
                        },
                    },
                },
                mod: {
                    aiOrder(player, card, num) {
                        var suit = player.getStorage('beitalesest')[player.countMark('beitalese') % 4];
                        if (suit && card.suit != 'none' && suit == card.suit) {
                            return num + 10;
                        }
                    },
                },
            },
            beitasheniao: {
                audio: ['drlt_poxi', 2],
                usable: 1,
                enable: 'phaseUse',
                filterCard(card, player, event) {
                    if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
                    return true;
                },
                position: 'hes',
                selectCard: [1, Infinity],
                selectTarget: 1,
                complexCard: true,
                discard: false,
                lose: false,
                delay: false,
                prompt: '你可以将任意张同花色牌交给一名其他角色,其需将与该牌不同花色的等量牌交给你',
                filterTarget(card, player, target) {
                    return target != player;
                },
                check(card) {
                    if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                    if (!ui.selected.cards.length && card.name == 'du') return 20;
                    var player = get.owner(card);
                    if (ui.selected.cards.length >= Math.max(6, player.countCards('h') - player.hp)) return 0;
                    return 15 - get.value(card);
                },
                content() {
                    'step 0';
                    player.give(cards, target);
                    ('step 1');
                    target.chooseCard('he', [1, cards.length], function (card, player, target) {
                        return card.suit != cards[0].suit;
                    }).ai = function (card) {
                        if (_status.event.getRand() < 0.5) return Math.random();
                        return get.value(card);
                    };
                    ('step 2');
                    if (result.bool) {
                        target.give(result.cards, player);
                    }
                    if (!result.cards || result.cards.length < cards.length) {
                        if (!result.cards) {
                            target.damage(cards.length, 'thunder');
                        } else {
                            target.damage(cards.length - result.cards.length, 'thunder');
                        }
                        player.getStat().skill.beitasheniao--;
                    }
                },
                ai: {
                    order(skill, player) {
                        if (player.countCards('h') > 1) {
                            return 10;
                        }
                        return 4;
                    },
                    result: {
                        target(player, target) {
                            return get.damageEffect(target, player) + 0.5;
                        },
                    },
                    threaten: 0.8,
                },
            },
            beiguo: {
                audio: 'huoshou1',
                audioname: ['re_menghuo'],
                trigger: {
                    global: 'useCard1',
                },
                forced: true,
                filter(event, player, trigger) {
                    return event.card && event.card.name == 'sha' && event.player != player;
                },
                content() {
                    trigger.player = player;
                },
            },
            shiyongji: {
                shaRelated: true,
                audio: 'ext:背锅侠:2',
                audioname: ['boss_lvbu3'],
                forced: true,
                trigger: {
                    player: 'useCardToPlayered',
                },
                filter(event, player) {
                    return event.card.name == 'sha';
                },
                content() {
                    'step 0';
                    player.draw();
                },
            },
            yijiejilei: {
                audio: 'danlao',
                enable: 'phaseUse',
                usable: 3,
                selectTarget: 1,
                filterTarget(card, player, target) {
                    return !target.hasSkill('yijieblackempty');
                },
                content() {
                    'step 0';
                    player.turnOver();
                    ('step 1');
                    target.addTempSkill('yijieblackempty', { player: 'turnOverBegin' });
                },
                ai: {
                    order: 8,
                    result: {
                        player(player, target) {
                            return 1.8;
                        },
                        target(player, target) {
                            if (player.hp <= 1) return 0;
                            return get.damageEffect(target, player);
                        },
                    },
                },
            },
            yijieblackempty: {
                forced: true,
                mod: {
                    cardname(card, player, name) {
                        return 'blackempty';
                    },
                },
            },
            yijiedanlao: {
                audio: 'danlao',
                enable: 'phaseUse',
                usable: 1,
                selectTarget: 1,
                filterTarget: true,
                content() {
                    'step 0';
                    target.turnOver();
                    ('step 1');
                    game.asyncDraw([player, target]);
                },
                ai: {
                    order: 8,
                    result: {
                        player(player, target) {
                            return 2;
                        },
                        target(player, target) {
                            return get.damageEffect(target, player);
                        },
                    },
                },
            },
            rgx_shanbian: {
                audio: 'longhun',
                enable: ['chooseToUse', 'chooseToRespond'],
                prompt: '将基本牌当做杀,装备牌当做桃,普通锦囊牌当做闪,延时锦囊牌当做无懈可击使用或打出',
                viewAs(cards, player) {
                    var name = false;
                    var nature = null;
                    switch (get.type(cards[0], player)) {
                        case 'basic':
                            name = 'sha';
                            nature = null;
                            break;
                        case 'equip':
                            name = 'tao';
                            break;
                        case 'trick':
                            name = 'shan';
                            break;
                        case 'delay':
                            name = 'wuxie';
                            break;
                    }
                    if (name) return { name: name, nature: nature };
                    return null;
                },
                position: 'hes',
                filterCard(card, player, event) {
                    event = event || _status.event;
                    var filter = event._backup.filterCard;
                    var name = get.type(card, player);
                    if (name == 'basic' && filter({ name: 'sha', cards: [card], nature: null }, player, event)) return true;
                    if (name == 'equip' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                    if (name == 'trick' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                    if (name == 'delay' && filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
                    return false;
                },
                filter(event, player) {
                    var filter = event.filterCard;
                    if (filter({ name: 'sha', nature: null }, player, event) && player.countCards('hes', { type: 'basic' })) return true;
                    if (filter({ name: 'shan' }, player, event) && player.countCards('hes', { type: 'trick' })) return true;
                    if (filter({ name: 'tao' }, player, event) && player.countCards('hes', { type: 'equip' })) return true;
                    if (filter({ name: 'wuxie' }, player, event) && player.countCards('hes', { type: 'delay' })) return true;
                    return false;
                },
                ai: {
                    save: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag) {
                        var name;
                        switch (tag) {
                            case 'respondSha':
                                name = 'basic';
                                break;
                            case 'respondShan':
                                name = 'trick';
                                break;
                            case 'save':
                                name = 'equip';
                                break;
                        }
                        if (!player.countCards('hes', { type: name })) return false;
                    },
                },
                hiddenCard(player, name) {
                    if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) return true;
                    if (name == 'wuxie') return player.countCards('hs', { type: 'delay' }) > 0;
                    if (name == 'tao') return player.countCards('hs', { type: 'equip' }) > 0;
                },
                group: 'rgx_shanbian2',
            },
            rgx_shanbian2: {
                trigger: {
                    player: ['useCardAfter', 'respondAfter'],
                },
                forced: true,
                charlotte: true,
                popup: false,
                filter(event, player) {
                    return event.skill == 'rgx_shanbian';
                },
                content() {
                    if (trigger.name == 'useCard') {
                        if (player.previous.countCards('he')) {
                            player.gainPlayerCard(player.previous, 'he', true);
                        } else {
                            player.draw();
                        }
                    } else if (trigger.name == 'respond') {
                        if (player.next.countCards('he')) {
                            player.gainPlayerCard(player.next, 'he', true);
                        } else {
                            player.draw();
                        }
                    }
                },
            },
            rgx_likejiu: {
                audio: 'jiushi',
                forced: true,
                firstDo: true,
                trigger: {
                    player: 'useCardAfter',
                },
                nodelay: true,
                filter(event, player) {
                    return event.card.cards && event.card.cards.length && event.card.name != 'sha';
                },
                content() {
                    player.useCard({ name: 'jiu' }, player, true);
                },
            },
            supertuxi: {
                audio: 'retuxi',
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                forced: true,
                filter(event, player) {
                    return event.num > 0;
                },
                content() {
                    'step 0';
                    player.chooseTarget(
                        get.prompt('supertuxi'),
                        [1, game.players.length - 1],
                        function (card, player, target) {
                            return target.countCards('hej') > 0 && player != target;
                        },
                        function (target) {
                            var att = get.attitude(_status.event.player, target);
                            if (target.hasSkill('tuntian')) return att / 10;
                            return 1 - att;
                        }
                    );
                    ('step 1');
                    if (result.bool) {
                        event.targets = result.targets;
                        event.targets.sort(lib.sort.seat);
                        trigger.num -= 1;
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    event.num = 0;
                    player.line(event.targets, 'green');
                    ('step 3');
                    if (num < event.targets.length) {
                        if (!get.is.altered('supertuxi')) {
                            if (event.targets[num].countGainableCards(player, 'hej')) {
                                player.gainPlayerCard(event.targets[num], true, 'hej');
                            }
                        } else {
                            var hej = event.targets[num].getCards('hej');
                            if (hej.length) {
                                var card = hej.randomGet();
                                player.gain(card, event.targets[num]);
                                if (get.position(card) == 'h') {
                                    event.targets[num].$giveAuto(card, player);
                                } else {
                                    event.targets[num].$give(card, player);
                                }
                            }
                        }
                        event.num++;
                        event.redo();
                    }
                },
                group: 'supertuxi_hit',
                subSkill: {
                    hit: {
                        forced: true,
                        firstDo: true,
                        line: true,
                        trigger: {
                            player: 'gainEnd',
                        },
                        filter(event, player) {
                            return event.source && event.cards[0].name == 'shan';
                        },
                        content() {
                            'step 0';
                            trigger.source.damage(player, 'nocard');
                            ('step 1');
                            if (trigger.source.countCards('hej')) {
                                player.gainPlayerCard(true, trigger.source, 'hej');
                            }
                        },
                    },
                },
                ai: {
                    threaten: 1.6,
                    expose: 0.2,
                },
            },
            grayhorse: {
                mod: {
                    globalTo(from, to, distance) {
                        return distance + to.getDamagedHp();
                    },
                    globalFrom(from, to, distance) {
                        return distance - from.hp;
                    },
                },
            },
            rgx_fufu: {
                audio: 'shanjia',
                forced: true,
                trigger: {
                    player: 'phaseDrawBegin',
                },
                filter(event, player) {
                    return player.countCards('hes', { type: 'equip' });
                },
                content() {
                    player.draw(player.countCards('hes', { type: 'equip' }));
                    player.recover();
                },
                mod: {
                    maxHandcard(player, num) {
                        return num + Math.ceil(player.countCards('hes', { type: 'equip' }) / 2) - 1;
                    },
                },
                group: 'rgx_fufu_1',
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            player: 'phaseJieshuBegin',
                        },
                        content() {
                            var types = ['trick', 'basic', 'equip', 'delay'];
                            var cards = [];
                            var str = '';
                            types.forEach((type) => {
                                var card = get.discardPile(function (card) {
                                    return get.type(card) == type;
                                });
                                card ? cards.push(card) : (str += get.translation(type));
                            });
                            if (cards) player.gain(cards, 'gain2', 'log');
                            game.log('#b' + get.translation(player) + '<span style=\"color:' + (str ? 'red\">未' : '#009966\">完美') + "检索</span>到<span class='greentext'>" + str + '牌</span>');
                        },
                    },
                },
            },
            tianxing3: {
                enable: 'phaseUse',
                usable: 1,
                selectTarget: 1,
                filterTarget(card, player, target) {
                    return target != player && !target.hasSkill('tianxing32');
                },
                check(card) {
                    return 2.5;
                },
                content() {
                    target.addSkill('tianxing32');
                },
                ai: {
                    order: 8,
                    result: {
                        player(player, target) {
                            return 2.5;
                        },
                        target(player, target) {
                            if (player.hp <= 1) return 0;
                            return get.damageEffect(target, player);
                        },
                    },
                },
            },
            tianxing32: {
                trigger: {
                    player: 'phaseUseBegin',
                },
                audio: ['rejieyue', 2],
                forced: true,
                charlotte: true,
                content() {
                    'step 0';
                    player.removeSkill('tianxing32');
                    player.judge();
                    ('step 1');
                    var i = 0;
                    player.getCards('hej').forEach((element) => {
                        if (player.getCards('hej', { type: get.type(result.card) }).indexOf(element) === -1) {
                            player.discard(element);
                            i++;
                        }
                    });
                    if (i == 0) {
                        player.damage(player.hp, player, 'nocard');
                    }
                },
                mark: true,
                marktext: '⚔',
                intro: {
                    content: '出牌阶段开始时,进行一次判定.其需依次弃置与判定牌类型不同的牌.若其未弃置牌,则受到其等同于其体力值点伤害',
                },
                ai: {
                    order: 7,
                    result: {
                        player: 1,
                    },
                },
            },
            rgxtieqi: {
                audio: 'retieqi',
                trigger: {
                    player: 'useCardToTarget',
                },
                filter(event, player) {
                    return event.card.name == 'sha';
                },
                content() {
                    'step 0';
                    player.judge();
                    ('step 1');
                    if (result.card) {
                        switch (result.suit) {
                            case 'heart':
                                player.recover();
                                break;
                            case 'spade':
                                player.draw();
                                break;
                            case 'club':
                                trigger.target.damage(player, 'thunder');
                                break;
                            case 'diamond':
                                var skills = [];
                                for (var i in lib.character) {
                                    for (var j = 0; j < lib.character[i][3].length; j++) {
                                        var info = lib.skill[lib.character[i][3][j]];
                                        if (info && (info.gainable || !info.unique)) {
                                            skills.add(lib.character[i][3][j]);
                                        }
                                    }
                                }
                                var link = skills.randomGet();
                                player.addSkill(link);
                                player.gainMaxHp();
                                player.gain(result.card, 'gain2', 'log');
                                player.getStat().card.sha--;
                                break;
                        }
                    }
                },
            },
            rgxliema: {
                audio: 'lingren',
                usable: 1,
                trigger: {
                    global: 'useCardToTarget',
                },
                filter(event, player) {
                    return event.card.name == 'sha' && event.target != player && event.player != player;
                },
                content() {
                    trigger.player = player;
                },
            },
            rgxzhiheng: {
                audio: 'rezhiheng',
                groupSkill: true,
                usable: 1,
                position: 'he',
                discard: false,
                lose: false,
                delay: false,
                selectCard: [1, Infinity],
                filterCard: true,
                enable: 'phaseUse',
                filter(event, player) {
                    return player.group == 'wu' && player.countCards('he');
                },
                content() {
                    'step 0';
                    player.discard(cards);
                    event.num = 0;
                    for (var i of cards) {
                        if (get.type(i) == 'equip') {
                            event.num++;
                        }
                    }
                    ('step 1');
                    player.draw(cards.length + event.num);
                },
            },
            rgxrende: {
                audio: 'rerende',
                groupSkill: true,
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return player.maxHp && player.group == 'shu';
                },
                content() {
                    'step 0';
                    player.chooseTarget('选择一名角色获得一点上限,你失去一点上限', function (target, player) {
                        return target != player;
                    });
                    ('step 1');
                    if (result.bool) {
                        player.loseMaxHp();
                        result.targets[0].gainMaxHp();
                    }
                },
            },
            // 夜行
            rgxyexing: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                init(player) {
                    if (!player.storage.rgxyexing) player.storage.rgxyexing = 0;
                },
                trigger: { player: 'phaseBegin' },
                forced: true,
                lastDo: true,
                content() {
                    var luckynum = [1, 2, 3].randomGet();
                    player.storage.rgxyexing = luckynum;
                    var skill = 'rgxyexing_' + luckynum;
                    player.addTempSkill(skill, { player: 'phaseBefore' });
                    player.markSkill('rgxyexing');
                },
                intro: {
                    content(storage, player) {
                        var x = player.hp * player.getDamagedHp();
                        switch (player.storage.rgxyexing) {
                            case 2:
                                return '摸牌阶段你多摸' + x + '张牌;你的手牌上限+' + x;
                            case 3:
                                return '你的【杀】可多使用' + x + '次';
                            case 1:
                                return '你回复体力后摸' + (x + 1) + '张牌';
                        }
                        return '啥也没有';
                    },
                },
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            player: 'recoverAfter',
                        },
                        content() {
                            player.draw(1 + player.hp * player.getDamagedHp());
                        },
                    },
                    2: {
                        trigger: {
                            player: 'phaseDrawBegin',
                        },
                        forced: true,
                        content() {
                            trigger.num += player.getDamagedHp() * player.hp;
                        },
                        mod: {
                            maxHandcard(player, num) {
                                return num + player.hp * player.getDamagedHp();
                            },
                        },
                    },
                    3: {
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name == 'sha') return num + player.hp * player.getDamagedHp();
                            },
                        },
                    },
                },
            },
            // 笙歌
            rgxshengge: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                init(player) {
                    if (!player.storage.rgxshengge) player.storage.rgxshengge = [];
                },
                trigger: {
                    player: 'damageBegin3',
                },
                filter(event, player) {
                    // game.log('来源', event.source)
                    return event.source != undefined;
                },
                content() {
                    'step 0';
                    player.loseHp();
                    ('step 1');
                    player.draw(player.hp * player.getDamagedHp());
                    trigger.num--;
                    player.addTempSkill('rgxshengge_1');
                    player.storage.rgxshengge.push(trigger.source);
                },
                subSkill: {
                    1: {
                        trigger: {
                            global: 'phaseJieshuBegin',
                        },
                        forced: true,
                        content() {
                            player.recover();
                            player.damage('nosource');
                            // game.log(player.storage.rgxshengge)
                            for (var i of player.storage.rgxshengge) {
                                i.damage('nosource');
                            }
                        },
                        onremove(player) {
                            player.storage.rgxshengge = [];
                        },
                    },
                },
            },
            // 神御
            rgxshenyu: {
                audio: 'ext:狂澜异世/audio:1:mp3',
                trigger: {
                    target: 'useCardToTargeted',
                },
                usable: 1,
                forced: true,
                filter(event, player) {
                    if (get.color(event.card) == 'red' && player.hp != player.maxHp) return true;
                    if (get.color(event.card) == 'black') return player.countCards('h') && event.card.number != player.hp;
                    return false;
                },
                content() {
                    switch (get.color(trigger.card)) {
                        case 'red':
                            player.recover();
                            break;
                        case 'black':
                            player.draw(Math.abs(trigger.card.number - player.hp));
                            break;
                        case 'none':
                            _status.currentPhase.damage();
                            break;
                    }
                },
            },
            // 智控
            rgxzhikong: {
                audio: 'ext:狂澜异世/audio:1:mp3',
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    // get.testProp(event)
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                forced: true,
                content() {
                    var skills = [];
                    for (var i in lib.character) {
                        // game.log(lib.character[i][1])
                        if (lib.character[i][1] != player.group) {
                            continue;
                        } else {
                            for (var j = 0; j < lib.character[i][3].length; j++) {
                                var info = lib.skill[lib.character[i][3][j]];
                                if (info && (info.gainable || !info.unique)) {
                                    skills.add(lib.character[i][3][j]);
                                }
                            }
                        }
                    }
                    var link = skills.randomGet();
                    player.addSkill(link);
                },
            },
            // 奇遇
            rgxqiyu: {
                audio: 'ext:狂澜异世/audio:3:mp3',
                init(player) {
                    if (!player.storage.rgxqiyu) player.storage.rgxqiyu = [];
                },
                trigger: {
                    player: ['useCard', 'respond', 'loseAfter'],
                },
                forced: true,
                filter(event, player) {
                    var num = 0;
                    var hcard = [];
                    var card = player.getCards('h');
                    for (var i of card) {
                        if (!hcard.includes(i.name)) {
                            hcard.add(i.name);
                            num++;
                        }
                    }
                    if (event.name == 'useCard' || event.name == 'respond') {
                        if (event.card.cards && event.card.cards.length) {
                            return event.card.number == num;
                        } else {
                            return false;
                        }
                    }
                    var evt = event.getl(player);
                    if (evt.cards2) {
                        for (var i = 0; i < evt.cards2.length; i++) {
                            return evt.cards2[i].number == num;
                        }
                    }
                },
                mark: true,
                marktext: '奇遇记录',
                intro: {
                    content: '$',
                },
                content() {
                    'step 0';
                    var card = player.getCards('h');
                    for (var i of card) {
                        var bool = game.hasPlayer(function (current) {
                            return player.canUse(i, current) && get.type(i) != 'delay' && get.type(i) != 'equip';
                        });
                        if (bool) {
                            player.storage.rgxqiyu.add(i.name);
                        }
                    }
                    ('step 1');
                    player.chooseBool('是否依次使用' + get.translation(player.storage.rgxqiyu));
                    ('step 2');
                    if (result.bool) {
                        for (var i of player.storage.rgxqiyu) {
                            var bool = game.hasPlayer(function (current) {
                                return player.canUse(i, current);
                            });
                            if (bool) {
                                player.chooseUseTarget(i, true, true, 'nodistance');
                            }
                        }
                    }
                },
                group: 'rgxqiyu_1',
                subSkill: {
                    1: {
                        init(player) {
                            player.markSkill('rgxqiyu_1');
                            if (!player.storage.rgxqiyu_1) player.storage.rgxqiyu_1 = 0;
                        },
                        lastDo: true,
                        popup: false,
                        forced: true,
                        marktext: '手牌牌数',
                        trigger: {
                            player: ['useCard', 'respond', 'loseAfter', 'phaseUseBegin'],
                        },
                        content() {
                            var num = 0;
                            var hcard = [];
                            var card = player.getCards('h');
                            for (var i of card) {
                                if (!hcard.includes(i.name)) {
                                    hcard.add(i.name);
                                    num++;
                                }
                            }
                            player.storage.rgxqiyu_1 = num;
                        },
                        intro: {
                            content: '#',
                        },
                    },
                },
            },
            //飞达
            rgxfeilong: {
                audio: 'ext:狂澜异世/audio:3:mp3',
                forced: true,
                trigger: {
                    player: 'gainBegin',
                },
                filter(event, player) {
                    return event.parent.name == 'draw' && event.getParent(2).name == 'phaseDraw';
                },
                content() {
                    var cards = trigger.cards;
                    trigger.cancel();
                    // game.log(cards)
                    player.loseToSpecial(cards, 'rgxfeilong').visible = false;
                },
                group: 'rgxfeilong_gain',
                subSkill: {
                    gain: {
                        audio: ['rgxfeilong', 3],
                        trigger: {
                            player: 'useCard',
                        },
                        filter(event, player) {
                            return player.hasHistory('lose', function (evt) {
                                if (evt.parent != event) return false;
                                for (var i in evt.gaintag_map) {
                                    if (evt.gaintag_map[i].includes('rgxfeilong')) return true;
                                }
                                return false;
                            });
                        },
                        forced: true,
                        content() {
                            var cardl = [];
                            var card = get.cardPile(function (card) {
                                return get.type(card, false) != get.type(trigger.card);
                            });
                            if (card) cardl.push(card);
                            var card1 = get.discardPile(function (card) {
                                return get.type(card, false) != get.type(trigger.card);
                            });
                            if (card1) cardl.push(card1);
                            player.gain(cardl, 'gain2');
                        },
                        hiddenCard(player, name) {
                            var card = player.getCards('s');
                            if (!card.length) return false;
                            var num = 1;
                            card = card.slice(0, Math.min(num, card.length));
                            return card.some((i) => i.name == name);
                        },
                    },
                },
            },
            // 天顺
            rgxskyshun: {
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (card.name == 'bingliang') return false;
                    },
                },
            },
            // 豪贵
            rgxhaogui: {
                forced: true,
                trigger: {
                    player: 'useCardAfter',
                },
                filter(event, player) {
                    return !event.card.storage || !event.card.storage.rgxhaogui;
                },
                content() {
                    player.gain(trigger.cards, 'gain2').gaintag.add('rgxhaogui');
                    trigger.cards.forEach((card) => {
                        card.storage.rgxhaogui = 1;
                    });
                },
            },
            // 轶政
            rgxyizheng: {
                usable: 1,
                enable: 'phaseUse',
                filterCard: true,
                filterTarget(card, player, target) {
                    return player != target;
                },
                selectTarget: [1, 1],
                selectCard: [1, 1],
                position: 'hes',
                check(card) {
                    return 10 - get.value(card);
                },
                lose: false,
                content() {
                    'step 0';
                    player.give(cards, targets[0]);
                    switch (get.type2(cards[0])) {
                        case 'basic':
                            game.asyncDraw([player, targets[0]]);
                            event.finish();
                            break;
                        case 'equip':
                            player.line(targets[0]);
                            targets[0].damage();
                            event.finish();
                            break;
                        case 'trick':
                            targets[0].chooseToCompare(player);
                    }
                    ('step 1');
                    if (result.bool) {
                        player.loseHp();
                    } else {
                        targets[0].loseHp();
                    }
                },
                ai: {
                    order: 8.5,
                    result: {
                        player(player) {
                            return 2;
                        },
                    },
                },
            },
            //挚歌
            rgxzhige: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                init(player) {
                    if (!player.storage.rgxzhige) player.storage.rgxzhige = ['0', '0', '0'];
                },
                trigger: {
                    player: ['gainAfter', 'loseAfter', 'recoverAfter', 'damageEnd'],
                },
                filter(event, player) {
                    var num = player.maxHp;
                    var num1 =
                        player.getHistory('useSkill', function (evt) {
                            return evt.skill == 'rgxzhige';
                        }).length || 0;
                    if (num1 >= num) return false;
                    if (event.parent.name == 'draw') event.num = event.parent.num;
                    return event.name != player.storage.rgxzhige[0] || _status.currentPhase != player.storage.rgxzhige[1] || event.num != player.storage.rgxzhige[2];
                },
                content() {
                    var num = 0;
                    if (trigger.name == 'gain') trigger.num = trigger.parent.num;
                    if (trigger.name != player.storage.rgxzhige[0]) {
                        num++;
                        player.storage.rgxzhige[0] = trigger.name;
                    }
                    if (_status.currentPhase != player.storage.rgxzhige[1]) {
                        num++;
                        player.storage.rgxzhige[1] = _status.currentPhase;
                    }
                    if (trigger.num != player.storage.rgxzhige[2]) {
                        num++;
                        player.storage.rgxzhige[2] = trigger.num;
                    }
                    player.draw(num);
                },
                mark: true,
                marktext: '挚歌',
                intro: {
                    content(storage, player) {
                        return "<span class='firetext'>" + player.storage.rgxzhige[0] + "</span><span class='greentext'>" + get.translation(player.storage.rgxzhige[1].name) + "</span><span class='thundertext'>" + player.storage.rgxzhige[2] + '</span>';
                    },
                },
            },
            //天葬
            rgxtianzang: {
                trigger: {
                    player: 'dieBefore',
                },
                filter(event, player) {
                    return player.countCards('hes');
                },
                content() {
                    'step 0';
                    var num = player.countCards('hes');
                    if (!num) event.finish();
                    ('step 1');
                    player.chooseCardTarget({
                        filterCard: true,
                        selectCard(card) {
                            var player = get.owner(card);
                            return [1, player.countCards('hes')];
                        },
                        filterTarget(card, player, target) {
                            return target != player;
                        },
                        ai1(card) {
                            return 9 - get.value(card);
                        },
                        prompt: '选择你要给出的牌',
                    });
                    ('step 2');
                    if (result.bool) {
                        player.give(result.cards, result.targets[0]);
                        result.targets[0].chooseDrawRecover();
                        player.loseMaxHp();
                        if (player.countCards('hes') && player.maxHp > 0) {
                            event.goto(0);
                        } else {
                            event.finish();
                        }
                    } else {
                        event.finish();
                    }
                },
            },
            rgxdingshui: {
                init(player) {
                    if (!player.storage.rgxdingshui) player.storage.rgxdingshui = [];
                },
                mark: '固税',
                enable: 'phaseUse',
                filterCard(card, player) {
                    return !player.storage.rgxdingshui.includes(get.type2(card));
                },
                position: 'hes',
                check(card) {
                    return 10 - get.value(card);
                },
                content() {
                    switch (get.type2(cards[0])) {
                        case 'basic':
                            player.chat("这次我规定实施<span class='firetext'>农作物收成和所拥有金银多寡所抽的税</span>!");
                            break;
                        case 'trick':
                            player.chat("这次我规定实施<span class='greentext'>盐税!</span>");
                            break;
                        case 'equip':
                            player.chat("这次我规定实施<span class='thundertext'>货物税!</span>");
                            break;
                    }
                    player.storage.rgxdingshui.add(get.type2(cards[0]));
                },
                intro: {
                    content(storage, player) {
                        var str = '';
                        for (var i = 0; i < player.storage.rgxdingshui.length; i++) {
                            str += '&nbsp<span class=' + ['greentext', 'thundertext', 'firetext', 'yellowtext'].randomGet() + '>' + get.translation(player.storage.rgxdingshui[i]) + '</span>&nbsp';
                        }
                        return str || '未弃置任何类型的牌';
                    },
                },
                group: 'rgxdingshui_draw',
                subSkill: {
                    draw: {
                        forced: true,
                        trigger: {
                            player: 'phaseDrawBegin2',
                        },
                        content() {
                            trigger.num += player.storage.rgxdingshui.length;
                        },
                    },
                    limit: {
                        mod: {
                            maxHandcard(player, num) {
                                return num - player.storage.rgxdingshui.length;
                            },
                        },
                    },
                },
                ai: {
                    order: 8.5,
                    result: {
                        player(player) {
                            return 2;
                        },
                    },
                },
                threaten: 1.5,
            },
            rgxbeijun: {
                trigger: {
                    player: 'phaseDiscardBefore',
                },
                discard: false,
                lose: false,
                delay: false,
                // forced: true,
                filter(event, player) {
                    return player.countCards('h');
                },
                content() {
                    trigger.setContent(lib.skill.rgxbeijun.phaseDiscard);
                },
                phaseDiscard() {
                    'step 0';
                    game.log(player, '进入了弃牌阶段');
                    event.num = player.needsToDiscard() + 1;
                    if (event.num <= 0) event.finish();
                    else {
                        game.broadcastAll(function (player) {
                            if (lib.config.show_phase_prompt) {
                                player.popup('弃牌阶段', null, false);
                            }
                        }, player);
                    }
                    event.trigger('phaseDiscard');
                    ('step 1');
                    player.chooseToDiscard(num, true);
                    ('step 2');
                    if (result.bool) {
                        event.cards = result.cards;
                        player.addToExpansion(result.cards, 'gain2').gaintag.add('rgxbeijun');
                        player.chooseTarget('选择一名角色获得一点护甲');
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    if (result.bool) {
                        result.targets[0].changeHujia();
                    }
                },
                mark: true,
                intro: {
                    content: 'expansion',
                },
            },
            rgxfuguo: {
                dutySkill: true,
                derivation: 'rgxfuguo',
                group: ['rgxfuguo_handcard', 'rgxfuguo_achieve', 'rgxfuguo_fail'],
                subSkill: {
                    handcard: {
                        mod: {
                            maxHandcard(player, num) {
                                return num + 1;
                            },
                        },
                    },
                    achieve: {
                        // 一名其他角色进入濒死时,若你因<固税>弃置的牌数量为3且<军>不小于你的体力值,
                        // 你减一点上限,回复一点体力或摸两张牌,获得技能<狂澜>
                        trigger: { global: 'dying' },
                        filter(event, player) {
                            return event.player != player && player.storage.rgxdingshui && player.storage.rgxdingshui.length == 3 && player.getExpansions('rgxbeijun').length >= player.hp;
                        }, //QQQ
                        forced: true,
                        content() {
                            game.log(player, '成功完成使命');
                            player.awakenSkill('rgxfuguo');
                            player.loseMaxHp();
                            player.chooseDrawRecover(2);
                            player.addSkillLog('rgxcrazyStorm');
                        },
                    },
                    fail: {
                        // 摸牌阶段若你的摸牌数小于游戏轮数或5中的较小值,你获得所有<军>.
                        // 你失去<备军>且手牌上限-X,X为你因<固税>弃置的牌数量
                        trigger: { player: 'phaseDrawAfter' },
                        lastDo: true,
                        forced: true,
                        filter(event, player) {
                            return event.num < Math.min(game.roundNumber, 5);
                        },
                        content() {
                            game.log(player, '使命失败');
                            player.awakenSkill('rgxfuguo');
                            var cards = player.getExpansions('rgxbeijun');
                            player.gain(cards, 'gain2');
                            player.removeSkill('rgxbeijun');
                            player.addSkill('rgxdingshui_limit');
                        },
                    },
                },
            },
            //狂澜
            rgxcrazyStorm: {
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (!player.getExpansions('rgxbeijun').length) return false;
                    for (var i of lib.inpile) {
                        var type = get.type2(i);
                        if (type == 'basic' && event.filterCard({ name: i }, player, event)) return true;
                    }
                    return false;
                },
                check(button) {
                    if (_status.event.parent.type != 'phase') return 1;
                    var player = _status.event.player;
                    return player.getUseValue({
                        name: button.link[2],
                        nature: button.link[3],
                    });
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            var name = lib.inpile[i];
                            if (name == 'sha') {
                                if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                for (var j of lib.inpile_nature) {
                                    if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                                }
                            } else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                        }
                        return ui.create.dialog('狂澜', [list, 'vcard']);
                    },
                    filter(button, player) {
                        return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                    },
                    backup(links, player) {
                        return {
                            filterCard: () => false,
                            selectCard: -1,
                            popname: true,
                            card: links[0],
                            popname: true,
                            viewAs: { name: links[0][2], nature: links[0][3] },
                            precontent() {
                                'step 0';
                                player.chooseButton(ui.create.dialog('狂澜-备军', true, player.getExpansions('rgxbeijun'), 'hidden'), true);
                                ('step 1');
                                if (result.links?.length) {
                                    _status.temp = { card: result.links };
                                    event.card = result.links[0];
                                    var bool = game.hasPlayer(function (current) {
                                        return player.canUse(event.card, current);
                                    });
                                    if (bool) {
                                        player.chooseBool('是否使用' + get.translation(event.card));
                                    } else {
                                        player.loseToDiscardpile(event.card);
                                        event.finish();
                                    }
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.addTempSkill('rgxcrazyStorm_use');
                                } else {
                                    player.loseToDiscardpile(event.card);
                                }
                            },
                        };
                    },
                    prompt(links, player) {
                        return '视为使用' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
                    },
                },
                hiddenCard(player, name) {
                    if (!lib.inpile.includes(name)) return false;
                    var type = get.type2(name);
                    return type == 'basic' && player.getExpansions('rgxbeijun').length;
                },
                ai: {
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player) {
                        if (!player.getExpansions('rgxbeijun')) return false;
                    },
                    order: 1,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
                subSkill: {
                    use: {
                        trigger: { player: ['useCardAfter', 'respondAfter'] },
                        forced: true,
                        popup: false,
                        filter(event, player) {
                            return event.skill == 'rgxcrazyStorm_backup';
                        },
                        content() {
                            player.chooseUseTarget(_status.temp.card, true, true);
                        },
                        precontent() {
                            delete _status.temp;
                        },
                    },
                },
            },
            // 募掠
            rgxmulue: {
                enable: 'phaseUse',
                usable: 2,
                intro: {
                    content(storage) {
                        return (
                            '转换技.出牌阶段限两次,你可以' +
                            (storage
                                ? '弃置一张牌,摸X张牌并展示之,X为此牌的点数'
                                : '选择一名其他角色,从你的下一家开始,有<募>标记且其不为你本次选择的角色须将一张牌当\
【杀】、火【杀】、雷【杀】、刺【杀】、【过河拆桥】、【决斗】、【万箭齐发】或【南蛮入侵】\
对你选择的角色使用')
                        );
                    },
                },
                mark: true,
                marktext: '☯',
                zhuanhuanji: true,
                delay: false,
                init(player) {
                    if (!player.storage.rgxmulue) player.storage.rgxmulue = true;
                },
                filterTarget(card, player, target) {
                    if (player.storage.rgxmulue) return false;
                    return player != target;
                },
                selectTarget() {
                    var player = _status.currentPhase;
                    if (player.storage.rgxmulue) return -1;
                    return [1, 1];
                },
                filterCard(card, player) {
                    if (!player.storage.rgxmulue) return false;
                    return true;
                },
                selectCard() {
                    var player = _status.currentPhase;
                    if (!player.storage.rgxmulue) return -1;
                    return [1, 1];
                },
                check(card) {
                    var player = _status.currentPhase;
                    if (player.storage.rgxmulue) return 7 - get.value(card);
                },
                content() {
                    var next = game.createEvent('rgxmulue_master');
                    event.next.remove(next);
                    event.after.push(next);
                    next.message = {
                        player: player,
                        cards: cards,
                        targets: targets,
                    };
                    next.setContent(player.storage.rgxmulue ? lib.skill.rgxmulue.contentTrue : lib.skill.rgxmulue.contentFalse);
                    player.changeZhuanhuanji('rgxmulue');
                },
                prompt() {
                    var player = _status.currentPhase;
                    return player.storage.rgxmulue ? '弃置一张牌' : '选择一名其他角色';
                },
                contentTrue() {
                    var player = event.message.player;
                    var card = event.message.cards[0];
                    ('step 0');
                    player.draw(card.number);
                    event.players = game.players.filter((item) => item != player);
                    event.num = event.players.length;
                    ('step 1');
                    event.cards = result;
                    player.showCards(event.cards);
                    ('step 2');
                    event.player2 = event.players[event.players.length - event.num];
                    var dialog = ui.create.dialog('募掠☀', event.cards, true);
                    event.player2.chooseButton(dialog, [1, 2], false).ai = function (button) {
                        if (get.attitude(player, event.player2) < 0) {
                            return get.rank(button.link, true);
                        }
                        return 'cancel2';
                    };
                    ('step 3');
                    if (result.bool) {
                        if (event.player2 != player) {
                            event.player2.addMark('rgxmulue_mark', result.links.length);
                        }
                        for (var i = 0; i < result.links.length; i++) {
                            event.cards = event.cards.filter((item) => item != result.links[i]);
                        }
                        event.player2.gain(result.links, 'gain2', 'log');
                    } else {
                        event.goto(4);
                    }
                    ('step 4');
                    if (event.num > 1 && event.cards.length) {
                        event.num--;
                        event.goto(2);
                    } else {
                        event.finish();
                    }
                },
                contentFalse() {
                    var player = event.message.player;
                    var target = event.message.targets[0];
                    ('step 0');
                    event.players = game.filterPlayer(function (current) {
                        return current.hasMark('rgxmulue_mark') && current != target;
                    });
                    event.num = event.players.length;
                    event.name2 = [
                        ['基本', '', 'sha'],
                        ['基本', '', 'sha', 'fire'],
                        ['基本', '', 'sha', 'thunder'],
                        ['基本', '', 'sha', 'stab'],
                        ['锦囊', '', 'guohe'],
                        ['锦囊', '', 'juedou'],
                        ['锦囊', '', 'wanjian'],
                        ['锦囊', '', 'nanman'],
                    ];

                    if (!event.num) event.finish();
                    ('step 1');
                    event.player2 = event.players[event.players.length - event.num];
                    if (!event.player2.countCards('he')) event.goto(5);
                    ('step 2');
                    var dialog = ui.create.dialog('募掠☽', [event.name2, 'vcard'], true);
                    event.player2.chooseButton(dialog, true).ai = function (button) {
                        return player.getUseValue({
                            name: button.link[2],
                            nature: button.link[3],
                        });
                    };
                    ('step 3');
                    event.choice = result.links[0];
                    event.player2.chooseCard(1, 'he', true);
                    ('step 4');
                    var card = { name: event.choice[2], nature: event.choice[3] };
                    event.player2.useCard(card, result.cards, target, false);
                    event.player2.removeMark('rgxmulue_mark');
                    ('step 5');
                    if (event.num > 1 && target.isAlive()) {
                        event.num--;
                        event.name2 = event.name2.filter((item) => {
                            if (item[2] == 'sha') return item[3] != event.choice[3];
                            return item[2] != event.choice[2];
                        });
                        // game.log(event.name2)
                        event.goto(1);
                    } else {
                        event.finish();
                    }
                },
                ai: {
                    order: 9,
                    result: {
                        player: 8,
                        target(player, target) {
                            if (!ui.selected.cards.length) {
                                return get.damageEffect(target, player);
                            }
                        },
                    },
                    threaten: 1.55,
                },
                subSkill: {
                    mark: {
                        marktext: '募',
                        intro: {
                            content() {
                                return '已成为八世的募兵';
                            },
                        },
                    },
                },
            },
            //王歌
            rgxwangge: {
                trigger: {
                    global: 'useCard',
                },
                filter(event, player) {
                    return event.targets.includes(player) && event.player.hasMark('rgxmulue_mark') && event.player != player;
                },
                content() {
                    trigger.all_excluded = true;
                    trigger.targets.length = 0;
                    trigger.player.removeMark('rgxmulue_mark');
                },
                group: 'rgxwangge_die',
                subSkill: {
                    die: {
                        trigger: { global: 'die' },
                        forced: true,
                        filter(event, player) {
                            return event.player.countMark('rgxmulue_mark') > 0;
                        },
                        content() {
                            player.draw(trigger.player.countMark('rgxmulue_mark'));
                        },
                    },
                },
            },
            rgxshenshou: {
                trigger: {
                    player: ['phaseDrawBefore', 'gainBefore'],
                },
                forced: true,
                filter(event, player) {
                    if (event.name == 'phaseDraw') return true;
                    if (event.name == 'gain' && event.getParent(2).name == 'wuzhong') return true;
                    return false;
                },
                content() {
                    if (trigger.name == 'phaseDraw') {
                        trigger.setContent(lib.skill.rgxshenshou.phaseDraw);
                    } else {
                        trigger.setContent(lib.skill.rgxshenshou.usewuzhong);
                    }
                },
                phaseDraw() {
                    'step 0';
                    game.log(player, '进入了摸牌阶段');
                    event.trigger('phaseDrawBegin1');
                    ('step 1');
                    event.trigger('phaseDrawBegin2');
                    ('step 2');
                    var pile = Array.from(ui.cardPile.childNodes);
                    if (pile.length < 3) return;
                    var bool = false,
                        max = Math.pow(2, Math.min(100, pile.length)),
                        index;
                    for (var i = 0; i < max; i++) {
                        var num = 0;
                        index = i.toString(2);
                        while (index.length < pile.length) {
                            index = '0' + index;
                        }
                        for (var k = 0; k < index.length; k++) {
                            if (index[k] == '1') num += pile[k].number;
                            if (num > 36) break;
                        }
                        if (num == 36) {
                            bool = true;
                            break;
                        }
                    }
                    if (bool) {
                        var cards = [];
                        for (var k = 0; k < index.length; k++) {
                            if (index[k] == '1') cards.push(pile[k]);
                        }
                        player.gain(cards, 'gain2');
                    }
                    ('step 3');
                    if (Array.isArray(result)) {
                        event.cards = result;
                    }
                },
                usewuzhong() {
                    'step 0';
                    var pile = Array.from(ui.cardPile.childNodes);
                    if (pile.length < 3) return;
                    var bool = false,
                        max = Math.pow(2, Math.min(100, pile.length)),
                        index;
                    for (var i = 0; i < max; i++) {
                        var num = 0;
                        index = i.toString(2);
                        while (index.length < pile.length) {
                            index = '0' + index;
                        }
                        for (var k = 0; k < index.length; k++) {
                            if (index[k] == '1') num += pile[k].number;
                            if (num > 36) break;
                        }
                        if (num == 36) {
                            bool = true;
                            break;
                        }
                    }
                    if (bool) {
                        var cards = [];
                        for (var k = 0; k < index.length; k++) {
                            if (index[k] == '1') cards.push(pile[k]);
                        }
                        player.gain(cards, 'gain2');
                    }
                    ('step 1');
                    if (Array.isArray(result)) {
                        event.cards = result;
                    }
                },
                group: 'rgxshenshou_judge',
                subSkill: {
                    judge: {
                        forced: true,
                        trigger: {
                            player: 'judgeFixing',
                        },
                        content() {
                            var evt = trigger.parent;
                            if (evt.name == 'phaseJudge') {
                                evt.excluded = true;
                                player.addJudge(trigger.card);
                            } else {
                                evt.cancel();
                                var nexts = trigger.next.slice();
                                for (var next of nexts) {
                                    if (next.name == 'judgeCallback') trigger.next.remove(next);
                                }
                                var evts = game.getGlobalHistory('cardMove', function (evt) {
                                    return evt.getParent(2) == trigger.parent;
                                });
                                var cards = [];
                                for (var i = evts.length - 1; i >= 0; i--) {
                                    var evt = evts[i];
                                    for (var card of evt.cards) {
                                        if (get.position(card, true) == 'o') cards.push(card);
                                    }
                                }
                                trigger.orderingCards.addArray(cards);
                            }
                            player.gain(trigger.result.card, 'gain2');
                        },
                    },
                },
            },
            rgxtongyu: {
                usable: 1,
                enable: 'phaseUse',
                check(card) {
                    return 2.5;
                },
                content() {
                    'step 0';
                    event.card = get.cards(player.hp);
                    game.cardsGotoOrdering(event.card);
                    player.showCards(event.card);
                    ('step 1');
                    event.num = event.card.filter((item) => get.color(item) == 'black').length;
                    if (event.num) {
                        player.chooseTarget(function (card, player, target) {
                            return target != player;
                        }).ai = function (target) {
                            return -get.attitude(player, target);
                        };
                    }
                    ('step 2');
                    player.draw(event.card.length - event.num);
                    if (result.bool) {
                        result.targets[0].damage(event.num, 'thunder');
                        player.line(result.targets[0]);
                        player.addMark('rgxtongyu_mark', event.num);
                    }
                },
                group: 'rgxtongyu_damage',
                subSkill: {
                    mark: {
                        marktext: '统御',
                        intro: {
                            content: '#',
                        },
                    },
                    damage: {
                        forced: true,
                        trigger: { player: 'damageBegin4' },
                        filter(event, player) {
                            return player.countMark('rgxtongyu_mark') >= player.hp;
                        },
                        content() {
                            trigger.cancel();
                            player.removeMark('rgxtongyu_mark', player.hp);
                        },
                    },
                },
                ai: {
                    order: 7,
                    result: {
                        player: 1,
                    },
                },
            },
            moshaozuduan: {
                audio: ['xinfu_shangjian', 2],
                trigger: {
                    player: 'phaseDiscardBefore',
                },
                discard: false,
                lose: false,
                delay: false,
                filter(event, player) {
                    var suits = [];
                    var hs = player.getCards('h');
                    for (var i = 0; i < hs.length; i++) {
                        suits.add(hs[i].suit);
                    }
                    return suits.length <= player.maxHp;
                },
                content() {
                    trigger.setContent(lib.skill.moshaozuduan.phaseDiscard);
                },
                phaseDiscard() {
                    'step 0';
                    game.log(player, '进入了弃牌阶段');
                    game.broadcastAll(function (player) {
                        if (lib.config.show_phase_prompt) {
                            player.popup('弃牌阶段', null, false);
                        }
                    }, player);
                    event.trigger('phaseDiscard');
                    ('step 1');
                    player.discard(player.getCards('h'));
                    ('step 2');
                    event.cards = result.cards;
                    var list = ['shan', 'sha', 'tao', 'jiu'];
                    var cards = [];
                    list.forEach((name) => {
                        var card = get.cardPile((card) => {
                            return card.name == name;
                        });
                        if (card) cards.push(card);
                    });
                    player.gain(cards, 'gain2', 'log');
                },
            },
            mihoyosanxing: {
                usable: 1,
                audio: ['xinfu_qianchong', 2],
                enable: 'phaseUse',
                filterTarget: true,
                content() {
                    targets[0].drawTo(Math.min(targets[0].maxHp, 5));
                },
                prompt: '令一名角色将手牌摸至体力上限(至多为5)',
                ai: {
                    order: 1,
                    result: {
                        player(player, target) {
                            if (player.countCards('h') > 4) return 0;
                            return (player.maxHp - player.countCards('h')) * 0.8;
                        },
                        target(player, target) {
                            if (target.countCards('h') > 4) return 0;
                            return (target.maxHp - target.countCards('h')) * 1.25;
                        },
                    },
                    threaten: 0.5,
                },
            },
            rgxzhucheng: {
                trigger: {
                    player: 'phaseBefore',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('h') != player.hp;
                },
                async content(event, trigger, player) {
                    let num = player.countCards('h') - player.hp;
                    if (num > 0) {
                        const { bool } = await player
                            .chooseToDiscard('h', num, false)
                            .set('ai', function (card) {
                                return 10 - get.value(card);
                            })
                            .forResult();
                        if (bool) player.changeHujia(num);
                    } else {
                        player.drawTo(player.hp);
                        player.changeHujia(-num);
                    }
                },
                ai: {},
            },
            rgxceji: {
                usable: 1,
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return player != target && (!ui.selected.targets[0] || ui.selected.targets[0].countCards('h') != target.countCards('h'));
                },
                selectTarget: 2,
                multitarget: true,
                multiline: true,
                async content(event, trigger, player) {
                    const targets = event.targets;
                    let num = targets[0].countCards('h') - targets[1].countCards('h');
                    let minplayer = targets[num > 0 ? 1 : 0];
                    let maxplayer = targets[num < 0 ? 1 : 0];
                    const { bool } = await minplayer.useCard({ name: 'sha' }, maxplayer, true).forResult();
                    if (bool) {
                        minplayer.discardPlayerCard(maxplayer, 'h', Math.abs(targets[0].countCards('h') - targets[1].countCards('h')), true);
                    }
                },
                ai: {
                    order: 2.5,
                    result: {
                        target(player, target) {
                            return get.damageEffect(target, player);
                        },
                    },
                },
            },
            rgxpingguan: {
                juexingji: true,
                forced: true,
                zhuSkill: true,
                limited: true,
                derivation: ['rgxchongqi', 'rgxjvejun'],
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    return player.hujia >= game.countGroup() && event.player.getStat('kill');
                },
                async content(event, trigger, player) {
                    player.loseMaxHp();
                    player.chooseDrawRecover(2, true);
                    player.removeSkill('rgxzhucheng');
                    player.addSkill('rgxchongqi');
                    player.addSkill('rgxjvejun');
                    game.log(player, '获得了技能', '#g【冲骑】和【决军】');
                    player.awakenSkill('rgxpingguan');
                },
            },
            rgxchongqi: {
                trigger: { player: 'useCardToPlayered' },
                check(event, player) {
                    return get.attitude(player, event.target) <= 0;
                },
                filter(event, player) {
                    return event.card.name == 'sha' && get.distance(player, event.target) == 1 && event.target.countCards('he');
                },
                logTarget: 'target',
                preHidden: true,
                async content(event, trigger, player) {
                    const target = trigger.target;
                    let list = ['选择弃置其区域内的各一张牌'];
                    let position = ['h', 'e'];
                    position.forEach((position) => {
                        if (target.countCards(position)) {
                            list.push(`${get.translation(target.name)}的${position == 'h' ? '手' : '装备'}牌`);
                            list.push(target.getCards(position));
                        }
                    });
                    const { bool, links } = await player
                        .chooseButton(list, [1, 2])
                        .set('filterButton', function (button) {
                            for (var i = 0; i < ui.selected.buttons.length; i++) {
                                if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                            }
                            return true;
                        })
                        .set('ai', function (button) {
                            return player.getUseValue(button.link) + 0.1;
                        })
                        .forResult();
                    if (bool) {
                        target.discard(links);
                    }
                },
            },
            rgxjvejun: {
                trigger: {
                    source: 'damageSource',
                    player: 'damageEnd',
                },
                forced: true,
                async content(event, trigger, player) {
                    let num = trigger.num;
                    while (num > 0) {
                        const { cards } = await player.draw(Math.max(1, player.getDamagedHp())).forResult();
                        if (cards?.length) {
                            player.chooseToDiscard('he', true);
                        }
                        num--;
                    }
                },
            },
            rgxyaolu: {
                enable: 'phaseUse',
                usable: 1,
                audio: ['shuishi', 2],
                async content(event, trigger, player) {
                    await lib.skill.rgxyaolu.judge(player, undefined);
                },
                judge: async function (player, preColor) {
                    const { card, color, judge2 } = await player
                        .judge((card) => {
                            if (get.color(card) != preColor) return 1;
                            return 0;
                        })
                        .set('judge2', (result) => result.bool)
                        .forResult();
                    if (color != preColor) {
                        const { bool, targets } = await player
                            .chooseTarget(`选择一名角色获得判定牌${get.translation(card)}`, true)
                            .set('ai', function (target) {
                                var player = _status.event.player,
                                    att = get.attitude(player, target);
                                if (att <= 0) return att;
                                if (target.countCards('h') + _status.event.num >= _status.event.max) att /= 3;
                                if (target.hasSkillTag('nogain')) att /= 10;
                                return att;
                            })
                            .forResult();
                        if (bool) await targets[0].gain(card, 'gain2', 'log');
                    } else {
                        await player.gain(card, 'gain2', 'log');
                        return;
                    }
                    await lib.skill.rgxyaolu.judge(player, color);
                },
                ai: {
                    order: 9,
                    result: {
                        player: 2,
                    },
                },
            },
            rgxguoyi: {
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                filter(event, player) {
                    return !player.isDisabled(2);
                },
                async content(event, trigger, player) {
                    player.disableEquip(2);
                    player.draw();
                },
                group: 'rgxguoyi_add',
                subSkill: {
                    add: {
                        trigger: {
                            player: 'useCard',
                        },
                        audio: ['reluoyi', 2],
                        filter(event, player) {
                            return (event.card.name == 'sha' || event.card.name == 'juedou') && player.isDisabled(2) && player.countCards('h', { subtype: 'equip2' });
                        },
                        async content(event, trigger, player) {
                            const { bool } = await player
                                .chooseToDiscard('可以弃置一张防具牌令此牌不可被响应且伤害+1', { subtype: 'equip2' })
                                .set('ai', function () {
                                    const target = _status.event.getParent(4).targets[0];
                                    if (get.attitude(player, target) > 0) return 'cancel2';
                                    return true;
                                })
                                .forResult();
                            if (bool) {
                                player.enableEquip(2);
                                trigger.baseDamage++;
                                trigger.directHit.add(trigger.targets[0]);
                            }
                        },
                        ai: {
                            directHit_ai: true,
                        },
                    },
                },
            },
            rgxtushe: {
                audio: ['xinfu_tushe', 2],
                trigger: { target: 'useCardToTarget' },
                forced: true,
                logTarget: 'player',
                filter(event, player) {
                    return get.type(event.card) != 'equip';
                },
                async content(event, trigger, player) {
                    player.draw(trigger.targets.length);
                },
            },
            rgxlimu: {
                enable: 'phaseUse',
                filterCard: true,
                position: 'hes',
                audio: ['xinfu_limu', 2],
                check(card) {
                    var player = _status.event.player;
                    if (get.position(card) == 'e') {
                        return 3;
                    }
                    return 6 - get.value(card);
                },
                async content(event, trigger, player) {
                    const cards = event.cards;
                    player.addJudge({ name: 'xumou_jsrg' }, cards);
                    if (player.hp != 1) {
                        await player.loseHp();
                        player.draw(player.getDamagedHp() + 1);
                    }
                },
                mod: {
                    targetInRange(card, player, target) {
                        if (player.countCards('j')) return true;
                    },
                    cardUsableTarget(card, player, target) {
                        if (player.countCards('j')) return true;
                    },
                },
                ai: {
                    basic: {
                        order: 1,
                    },
                    result: {
                        player(player) {
                            if (player.hp == 1) return -1;
                            return 1;
                        },
                    },
                },
            },
            rgxlianji: {
                audio: ['xinlianhuan', 2],
                forced: true,
                trigger: {
                    global: ['turnOverAfter', 'linkAfter'],
                },
                async content(event, trigger, player) {
                    player.draw();
                },
            },
            rgxluofeng: {
                audio: ['niepan', 2],
                enable: ['chooseToRespond', 'chooseToUse'],
                filterCard: () => false,
                selectCard: -1,
                viewAs(cards, player) {
                    const event = _status.event,
                        filter = event._backup.filterCard;
                    if (filter({ name: 'shan' }, player, event)) return { name: 'shan' };
                    if (filter({ name: 'sha' }, player, event)) return { name: 'sha' };
                    return false;
                },
                filter(event, player) {
                    if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) return player.isTurnedOver() || player.isLinked();
                    return !(player.isTurnedOver() && player.isLinked()) && event.filterCard({ name: 'sha' }, player, event);
                },
                hiddenCard(player, name) {
                    if (name == 'sha') return !(player.isTurnedOver() && player.isLinked());
                    if (name == 'shan') return player.isTurnedOver() || player.isLinked();
                    return false;
                },
                precontent: async function (event, map, player) {
                    player.turnOver();
                    player.link();
                },
                ai: {
                    order(item, player) {
                        return 10;
                    },
                    result: {
                        player: 2,
                    },
                    threaten: 1.55,
                },
            },
            rgxhuzhu: {
                audio: ['longhun', 2],
                enable: 'phaseUse',
                filterCard: true,
                discard: false,
                lose: false,
                forced: true,
                check(card) {
                    if (get.cardNameLength(card) == 3 || get.cardNameLength(card) == 5) return -1;
                    return 8 - get.value(card);
                },
                async content(event, trigger, player) {
                    const card = event.cards[0],
                        num = get.cardNameLength(card),
                        filter = event.getParent(2)._backup.filterCard;
                    let list = [];
                    for (var i = 0; i < lib.inpile.length; i++) {
                        let name = lib.inpile[i],
                            num2 = get.cardNameLength(name),
                            canuse = game.hasPlayer(function (current) {
                                return player.canUse(name, current);
                            });
                        if (num != num2 || !canuse) continue;
                        if (name == 'sha') {
                            if (filter({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                            for (var j of lib.inpile_nature) {
                                if (filter({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                            }
                        } else if (get.type(name) == 'trick' && filter({ name: name }, player, event)) list.push(['锦囊', '', name]);
                        else if (get.type(name) == 'basic' && filter({ name: name }, player, event)) list.push(['基本', '', name]);
                    }
                    const { bool, links } = await player
                        .chooseButton(false, ['选择一张牌', [list, 'vcard']])
                        .set('ai', function (button) {
                            return get.value({ name: button.link[2] });
                        })
                        .forResult();
                    if (bool) {
                        let next = player.chooseUseTarget(true, { name: links[0][2], nature: links[0][3] }, [card], true);
                        next.set('addCount', false);
                        next.viewAs = true;
                        const { bool, targets } = await next.forResult();
                        if (bool && targets && targets.length) {
                            targets.forEach((target) => {
                                if (target.classList.contains('dead')) {
                                    let card = get.cardPile(function (card) {
                                        return card.name == links[0][2] && get.nature(card) == links[0][3];
                                    });
                                    if (card) player.gain(card, 'gain2', 'log');
                                }
                            });
                        }
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        player: 1,
                    },
                    threaten: 1.55,
                },
            },
            rgxjuejing: {
                audio: ['juejing', 2],
                trigger: {
                    target: 'useCardToTarget',
                    player: ['useCard', 'respondAfter'],
                },
                forced: true,
                filter(event, player) {
                    return !player.isMaxHandcard();
                },
                async content(event, trigger, player) {
                    await player.draw();
                },
                mod: {
                    maxHandcard(player, num) {
                        return num + 2;
                    },
                },
            },
            rgxjizhi: {
                audio: ['rejizhi', 2],
                trigger: { global: 'useCard' },
                forced: true,
                nodelay: true,
                filter(event, player) {
                    return get.type2(event.card) == 'trick';
                },
                async content(event, trigger, player) {
                    await player.draw(Math.max(1, player.getDamagedHp()));
                    player.addTempSkill('rgxjizhi_mark');
                    player.addMark('rgxjizhi_mark');
                },
                subSkill: {
                    mark: {
                        mark: true,
                        marktext: '集智',
                        intro: {
                            content: 'mark',
                        },
                    },
                },
            },
            rgxqicai: {
                audio: ['sbqicai', 2],
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                filter(event, player) {
                    return (
                        player.getHistory('useSkill', function (evt) {
                            return evt.skill == 'rgxjizhi';
                        }).length || 0
                    );
                },
                async content(event, trigger, player) {
                    let list = ['准备阶段', '判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段', '结束阶段'],
                        num =
                            player.getHistory('useSkill', function (evt) {
                                return evt.skill == 'rgxjizhi';
                            }).length || 0;
                    const { bool, moved } = await player
                        .chooseToMove(true)
                        .set('list', [
                            [`奇才:你可以选择至多${Math.min(6, num)}个阶段`, [list, 'vcard']],
                            ['不需要的阶段', []],
                        ])
                        .set('filterOk', function (moved) {
                            return moved[0].length <= Math.min(6, num);
                        })
                        .set('processAI', function (list) {
                            let top = [],
                                bottom = [];
                            switch (Math.min(6, num)) {
                                case 1:
                                    top.push(player.countCards('h', 'sha') > 2 ? '出牌阶段' : '摸牌阶段'); //QQQ
                                    break;
                                case 2:
                                    top = player.countCards({ type: 'trick' }) ? ['摸牌阶段', '出牌阶段'] : ['出牌阶段', '摸牌阶段'];
                                    break;
                                case 3:
                                    top = ['摸牌阶段', '出牌阶段', '结束阶段'];
                                    break;
                                default:
                                    top = ['准备阶段', '摸牌阶段', '出牌阶段', '结束阶段'];
                            }
                            top = top.map((value) => ['', '', value]);
                            return [top, bottom];
                        })
                        .forResult();
                    if (bool) {
                        let phase = [];
                        moved[0].forEach((card) => {
                            for (let key in lib.skill.rgxqicai.phase) {
                                if (lib.skill.rgxqicai.phase[key] === card[2]) phase.push('phase' + key);
                            }
                        });
                        player.phase('nodelay').set('phaseList', phase);
                    }
                },
                phase: {
                    Zhunbei: '准备阶段',
                    Judge: '判定阶段',
                    Draw: '摸牌阶段',
                    Use: '出牌阶段',
                    Discard: '弃牌阶段',
                    Jieshu: '结束阶段',
                },
            },
            rgxkongcheng: {
                audio: ['kongcheng', 2],
                trigger: {
                    player: 'useCardAfter',
                },
                forced: true,
                lastDo: true,
                filter(event, player) {
                    return (
                        lib.suit.length -
                        lib.suit.filter((suit) => {
                            return player.countCards('h', { suit });
                        }).length
                    );
                },
                async content(event, trigger, player) {
                    await player.draw(
                        lib.suit.length -
                        lib.suit.filter((suit) => {
                            return player.countCards('h', { suit });
                        }).length,
                        'nodelay'
                    );
                    player.countCards('h') > 1 ? player.chooseToDiscard(true) : player.discard(player.getCards('h'));
                },
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (target.countCards('h') <= target.hp) {
                            if (card.name == 'sha' || card.name == 'juedou') return false;
                        }
                    },
                },
            },
            rgxjingcui: {
                usable: 1,
                enable: 'phaseUse',
                audio: ['rehuoji', 2],
                filterTarget: true,
                derivation: ['gzjili', 'rgxchongqi', 'mashu', 'repojun'],
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    await target.damage('fire');
                    let subtypeSet = new Set(target.getCards('e').map((card) => get.subtype(card)));
                    const skillMap = {
                        equip1: 'gzjili',
                        equip2: 'rgxchongqi',
                        equip3: 'mashu',
                        equip4: 'mashu',
                        equip5: 'repojun',
                    };
                    for (const subtype of subtypeSet) {
                        if (skillMap[subtype]) {
                            player.addTempSkill(skillMap[subtype]);
                        }
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            return (1 + target.countCards('e')) * 0.35;
                        },
                        target(player, target) {
                            return get.damageEffect(target, player) - Math.log(target.countCards('e') + 1) * 1.25;
                        },
                    },
                },
            },
            hoyomiying: {
                audio: 'ext:狂澜异世/audio/lini:1:ogx',
                init(player) {
                    lib.translate['hoyomiying_true'] = '阴';
                    lib.translate['hoyomiying_false'] = '阳';
                    if (!player.storage.hoyomiying) player.storage.hoyomiying = [[], []];
                },
                trigger: {
                    player: 'gainAfter',
                },
                forced: true,
                filter(event, player) {
                    return event.cards && !player.getStorage('hoyomiying').includes(event.cards) && event.parent.name != 'hoyomiying';
                },
                content() {
                    'step 0';
                    var cards = [];
                    trigger.cards.forEach((card) => {
                        var cardx = game.createCard2(card.name, card.suit, card.number, card.nature);
                        cards.push(cardx);
                        player.getStorage('hoyomiying')[0].push(card.cardid);
                        player.getStorage('hoyomiying')[1].push(cardx.cardid);
                    });
                    player.gain(cards).gaintag.add('hoyomiying_true');
                    player.addGaintag(trigger.cards, 'hoyomiying_false');
                },
                group: ['hoyomiying_usecard', 'hoyomiying_losecard'],
                subSkill: {
                    usecard: {
                        trigger: {
                            player: 'useCard',
                        },
                        filter(event, player) {
                            for (var i of player.getStorage('hoyomiying')) {
                                if (i.includes(event.card.cardid)) return true;
                            }
                        },
                        forced: true,
                        content() {
                            var cardxs = player.getStorage('hoyomiying')[0];
                            var cards = player.getStorage('hoyomiying')[1];
                            var num = cardxs.includes(trigger.card.cardid) ? 0 : 1;
                            var index = (num ? cards : cardxs).indexOf(trigger.card.cardid);
                            var card = player.getCards('h', (card) => {
                                return card.cardid == (num ? cardxs : cards)[index];
                            });
                            player.discard(card);
                            trigger.baseDamage++;
                            for (var i of player.getStorage('hoyomiying')) {
                                i.splice(index, 1);
                            }
                            lib.skill.hoyomoshu.precontent(player);
                        },
                    },
                    losecard: {
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        filter(event, player) {
                            if (event.parent.name == 'useCard') return false;
                            if (event.name == 'gain' && event.player == player) return false;
                            var evt = event.getl(player);
                            for (var i of evt.cards2) {
                                for (var j of player.getStorage('hoyomiying')) {
                                    if (j.includes(i.cardid)) return true;
                                }
                            }
                        },
                        content() {
                            'step 0';
                            event.cards = trigger.getl(player).cards2;
                            event.num = event.cards.length;
                            ('step 1');
                            event.card = event.cards[event.cards.length - event.num];
                            var num = 0;
                            for (var i of player.getStorage('hoyomiying')) {
                                if (!i.includes(event.card.cardid)) num++;
                            }
                            if (num == 2) event.goto(4);
                            ('step 2');
                            var cardxs = player.getStorage('hoyomiying')[0];
                            var cards = player.getStorage('hoyomiying')[1];
                            var num = cardxs.includes(event.card.cardid) ? 0 : 1;
                            var index = (num ? cards : cardxs).indexOf(event.card.cardid);
                            var cardid = (num ? cardxs : cards)[index];
                            event.card2 = player.getCards('hs', (card) => {
                                return cardid == card.cardid;
                            });
                            for (var i of player.getStorage('hoyomiying')) {
                                i.splice(index, 1);
                            }
                            if (!event.card2) {
                                event.goto(4);
                            }
                            ('step 3');
                            if (get.itemtype(event.card2[0]) == 'card') {
                                var bool = game.hasPlayer(function (current) {
                                    return player.canUse(event.card2[0], current);
                                });
                                if (bool) player.chooseUseTarget(event.card2);
                            }
                            ('step 4');
                            if (event.num > 1) {
                                event.num--;
                                event.goto(1);
                            } else {
                                event.finish();
                            }
                        },
                    },
                },
            },
            hoyomoshu: {
                audio: 'ext:狂澜异世/audio/lini:2:ogx',
                init(player) {
                    var list = [];
                    for (var i = 0; i < lib.inpile.length; i++) {
                        var name = lib.inpile[i];
                        if (get.type(name) != 'delay' && get.type(name) != 'equip') list.push(name);
                    }
                    var card = list.randomGet();
                    if (card) {
                        if (!player.storage.hoyomoshu) player.storage.hoyomoshu = card;
                    } else {
                        if (!player.storage.hoyomoshu) player.storage.hoyomoshu = 'sha';
                    }
                },
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (!player.getStorage('hoyomoshu')) return false;
                    return event.filterCard({ name: player.storage.hoyomoshu }, player, event);
                },
                viewAs(cards, player) {
                    var name = player.getStorage('hoyomoshu');
                    return { name: name };
                },
                filterCard: () => false,
                selectCard: -1,
                mark: true,
                marktext: '魔术',
                intro: {
                    content(storage, player) {
                        var str = get.translation(player.getStorage('hoyomoshu'));
                        return str || '未表演魔术';
                    },
                },
                prompt(event, player) {
                    var str = '视为使用一张【' + get.translation(event.player.getStorage('hoyomoshu')) + '】';
                    return str;
                },
                precontent() {
                    var list = [];
                    for (var i = 0; i < lib.inpile.length; i++) {
                        var name = lib.inpile[i];
                        if (get.type(name) != 'delay' && get.type(name) != 'equip') list.push(name);
                    }
                    var card = list.randomGet();
                    if (card) {
                        player.storage.hoyomoshu = card;
                    } else {
                        player.storage.hoyomoshu = 'sha';
                    }
                },
                hiddenCard(player, name) {
                    return player.getStorage('hoyomoshu') == name;
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    order: 9,
                    result: {
                        player: 1,
                    },
                },
            },
            hoyoicome: {
                audio: 'ext:狂澜异世/audio/lini:1:mp3',
                trigger: {
                    global: 'damageEnd',
                },
                filter(event, player) {
                    return event.source != player && event.player.hp >= event.player.maxHp / 2;
                },
                marktext: '我来',
                intro: {
                    content: '#',
                },
                content() {
                    'step 0';
                    player.chooseControl('视为使用冰【杀】', '你执行一个回合');
                    ('step 1');
                    if (result.index == 0) {
                        var card = {
                            name: 'sha',
                            nature: 'ice',
                        };
                        var next = player.chooseToUse();
                        lib.skill.hoyoicome_backup.viewAs = card;
                        next.set('selectTarget', function () {
                            return [1, trigger.num];
                        });
                        next.set('filterTarget', () => true);
                        next.set('_backupevent', 'hoyoicome_backup');
                        next.backup('hoyoicome_backup');
                        next.set('openskilldialog', '选择冰杀的目标');
                        next.set('norestore', true);
                        next.set('custom', {
                            add: {},
                            replace: { window() { } },
                        });
                    } else {
                        player.markSkill('hoyoicome');
                        player.addMark('hoyoicome');
                    }
                },
                group: 'hoyoicome_insert',
                subSkill: {
                    backup: {
                        sourceSkill: 'hoyoicome',
                        precontent() {
                            'step 0';
                            var cards = event.result.card.cards;
                            event.result.cards = cards;
                            // event.parent.addCount = false;
                        },
                        filterCard() {
                            return false;
                        },
                        prompt: '请选择冰【杀】的目标',
                        selectCard: -1,
                    },
                    insert: {
                        trigger: {
                            global: 'phaseAfter',
                        },
                        forced: true,
                        filter(event, player) {
                            return player.countMark('hoyoicome');
                        },
                        content() {
                            player.chat('一时来一时爽,一直来一直爽!接下来我来露一手');
                            player.removeMark('hoyoicome');
                            player.phase('nodelay');
                        },
                    },
                },
                ai: {
                    unequip: true,
                    unequip: true,
                },
            },
            hoyojiwu: {
                audio: 'ext:狂澜异世/audio/lini:1:mp3',
                init(player) {
                    if (!player.storage.hoyojiwu) player.storage.hoyojiwu = [];
                },
                trigger: {
                    target: 'useCardToTargeted',
                },
                filter(event, player) {
                    return event.player != player && !player.getStorage('hoyojiwu').includes(event.card.suit);
                },
                forced: true,
                content() {
                    trigger.all_excluded = true;
                    trigger.targets.length = 0;
                    player.getStorage('hoyojiwu').add(trigger.card.suit);
                },
                mark: true,
                marktext: '集物',
                intro: {
                    content: '$',
                },
                group: 'hoyojiwu_usecard',
                subSkill: {
                    usecard: {
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        filter(event, player) {
                            if (event.parent.name == 'hoyojiwu_usecard') return false;
                            if (!event.targets || !event.card) return false;
                            if (event.card && event.card.name == 'wuxie') return false;
                            return player.getStorage('hoyojiwu').includes(event.card.suit);
                        },
                        content() {
                            trigger.parent.effectCount++;
                            player.getStorage('hoyojiwu').splice(player.getStorage('hoyojiwu').indexOf(trigger.card.suit), 1);
                            var card = get.cardPile(function (card) {
                                return get.type(card) == get.type(trigger.card);
                            });
                            if (card) {
                                player.gain(card, 'gain2', 'log');
                            }
                        },
                    },
                },
            },
            myjisheng: {
                init(player) {
                    lib.translate['myxintu'] = '「信徒」';
                    lib.translate['myjisheng_save'] = '救赎';
                    if (!player.storage.myjisheng)
                        player.storage.myjisheng = {
                            targets: [],
                            cards: [],
                        };
                },
                forced: true,
                trigger: {
                    global: 'gameStart',
                    player: 'enterGame',
                },
                content() {
                    'step 0';
                    player.draw(2);
                    ('step 1');
                    player.addGaintag(result, 'myxintu');
                    ('step 2');
                    player.chooseCardTarget({
                        filterTarget(card, player, target) {
                            return !player.getStorage('myjisheng')['targets'].includes(target);
                        },
                        filterCard(card, player, target) {
                            return card.hasGaintag('myxintu') && !player.getStorage('myjisheng')['cards'].includes(card);
                        },
                        forced: true,
                        prompt: '选择一名角色并将一张<信徒>牌交给他',
                    });
                    ('step 3');
                    if (result.bool) {
                        player.give(result.cards, result.targets[0]).gaintag.add('myxintu');
                        result.targets[0].addSkill('myjisheng_biliever');
                        player.getStorage('myjisheng').cards.push(result.cards[0]);
                        player.getStorage('myjisheng').targets.push(result.targets[0]);
                        if (player.getStorage('myjisheng').cards.length != 2) event.goto(2);
                    } else {
                        event.finish();
                    }
                },
                contentAfter() {
                    player.storage.myjisheng = {
                        targets: [],
                        cards: [],
                    };
                },
                group: ['myjisheng_watchCard', 'myjisheng_do', 'myjisheng_give', 'myjisheng_save', 'myjisheng_dyingAfter', 'myjisheng_max'],
                subSkill: {
                    watchCard: {
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        content() {
                            'step 0';
                            player
                                .chooseTarget(function (card, player, target) {
                                    return target.countCards('h', (card) => !card.hasGaintag('myxintu')) && player != target;
                                })
                                .set('ai', function (target) {
                                    return -get.attitude(_status.event.player, target);
                                });
                            ('step 1');
                            if (result.bool) {
                                result.targets[0].addSkill('myjisheng_biliever');
                                event.target = result.targets[0];
                                player.chooseButton(['选择一张牌作为「信徒」', result.targets[0].getCards('h', (card) => !card.hasGaintag('myxintu'))], true).set('ai', function (button) {
                                    var target = _status.event.parent.target;
                                    var card = button.link;
                                    var val = target.getUseValue(card);
                                    if (val > 0) return val;
                                    return get.value(card);
                                });
                            } else {
                                event.finish();
                            }
                            ('step 2');
                            if (result.bool) {
                                event.target.addGaintag(result.links, 'myxintu');
                            }
                        },
                    },
                    biliever: {
                        mod: {
                            cardEnabled2(card) {
                                if (card.hasGaintag && card.hasGaintag('myxintu')) return false;
                            },
                            cardDiscardable(card) {
                                if (card.hasGaintag && card.hasGaintag('myxintu')) return false; //QQQ
                            },
                        },
                        charlotte: true,
                    },
                    do: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.source && event.source.countCards('h', (card) => card.hasGaintag('myxintu'));
                        },
                        content() {
                            player.gain(trigger.source.getCards('h', (card) => card.hasGaintag('myxintu')));
                            trigger.cancel();
                        },
                    },
                    give: {
                        trigger: {
                            global: 'gainAfter',
                        },
                        filter(event, player) {
                            var evt = event.getParent('phaseDraw');
                            if (evt && evt.name != 'phaseDraw') return false;
                            return event.player.countCards('h', (card) => card.hasGaintag('myxintu')) && event.player != player;
                        },
                        forced: true,
                        content() {
                            'step 0';
                            trigger.player.chooseCard('he', function (card, player) {
                                return !card.hasGaintag('myxintu');
                            });
                            ('step 1');
                            if (result.bool) {
                                trigger.player.give(result.cards, player);
                            } else {
                                trigger.player.loseHp();
                            }
                        },
                    },
                    save: {
                        enable: 'chooseToUse',
                        filter(event, player) {
                            if (event.type != 'dying') return false;
                            if (!player.countCards('he', (card) => !card.hasGaintag('myxintu'))) return false;
                            return event.getParent(2).player.countCards('h', (card) => card.hasGaintag('myxintu'));
                        },
                        filterCard: true,
                        position: 'hes',
                        viewAs: { name: 'tao' },
                        check(card) {
                            return 15 - get.value(card);
                        },
                        prompt: '将一张红色牌当桃使用',
                        ai: {
                            save: true,
                            skillTagFilter(player, tag, target) {
                                return target.countCards('h', (card) => card.hasGaintag('myxintu')) && player.countCards('he', (card) => !card.hasGaintag('myxintu'));
                            },
                        },
                    },
                    dyingAfter: {
                        trigger: {
                            global: 'dyingAfter',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.player.countCards('h', (card) => card.hasGaintag('myxintu'));
                        },
                        content() {
                            var num = game.filterPlayer(function (current) {
                                return current.countCards('h', (card) => card.hasGaintag('myxintu')) > 0;
                            }).length;
                            player.draw(num);
                        },
                    },
                    max: {
                        mod: {
                            maxHandcard(player, num) {
                                return (
                                    num +
                                    game.filterPlayer(function (current) {
                                        return current.countCards('h', (card) => card.hasGaintag('myxintu'));
                                    }).length
                                );
                            },
                        },
                    },
                },
            },
            hoyosuming: {
                audio: 'ext:狂澜异世/audio/lini/qi:5:mp3',
                forced: true,
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                mark: true,
                popup: false,
                marktext: '宿命',
                intro: {
                    content(storage, player) {
                        var num = player.countMark('hoyosuming') - player.countMark('hoyosuming_reduce');
                        if (!num) return '宿命尚未显现';
                        return '暗影宿命' + (num > 0 ? '+' : '') + num;
                    },
                    markcount(storage, player) {
                        var num = player.countMark('hoyosuming') - player.countMark('hoyosuming_reduce');
                        if (!num) return '柒';
                        return '距离' + (num > 0 ? '+' : '') + num;
                    },
                },
                filter(event, player) {
                    var evt = event.getl(player);
                    return evt && evt.cards2 && evt.cards2.length;
                },
                content() {
                    var cards = trigger.getl(player).cards2;
                    cards.forEach((card) => {
                        player.addMark(!get.tag(card, 'damage') ? 'hoyosuming' : 'hoyosuming_reduce');
                    });
                    game.playAudio(`../extension/狂澜异世/audio/lini/qi/hoyosuming${(player.countMark('hoyosuming') >= player.countMark('hoyosuming_reduce') ? [1, 2, 5] : [3, 4]).randomGet()}.mp3`);
                },
                group: ['hoyosuming_reduce', 'hoyosuming_distance', 'hoyosuming_do', 'hoyosuming_re'],
                subSkill: {
                    reduce: {},
                    distance: {
                        mod: {
                            globalTo(from, to, current) {
                                var num = to.countMark('hoyosuming') - to.countMark('hoyosuming_reduce');
                                return current + num;
                            },
                        },
                    },
                    do: {
                        enable: 'chooseToUse',
                        filter(event, player) {
                            if (event.type != 'dying') return false;
                            // get.testPar(event)
                            return !player.hasSkill('hoyosuming_block') && event.getParent(2).player == player;
                        },
                        content() {
                            game.playAudio('../extension/狂澜异世/audio/lini/qi/suming.mp3');
                            player.recover(1 - player.hp);
                            player.discard(player.getCards('e'));
                            player.expandEquip(1);
                            player.addSkill('hoyosuming_block');
                            player.addSkill('hoyoyujian');
                        },
                        ai: {
                            save: true,
                        },
                    },
                    block: {},
                    re: {
                        trigger: {
                            global: 'roundStart',
                        },
                        forced: true,
                        content() {
                            game.playAudio('../extension/狂澜异世/audio/lini/qi/hoyosuming.mp3');
                            player.storage.hoyosuming = true;
                            player.storage.hoyosuming_reduce = true;
                        },
                    },
                },
                mod: {
                    maxHandcard(player, num) {
                        var num2 = 0;
                        for (var card of player.getCards('e')) {
                            if (get.subtype(card, false) == 'equip1') num2++;
                        }
                        return num + num2;
                    },
                },
            },
            hoyoqianren: {
                audio: 'ext:狂澜异世/audio/lini/qi:2:mp3',
                enable: 'phaseUse',
                filter(event, player) {
                    return (
                        player.countCards('he') &&
                        !game.hasPlayer(function (current) {
                            return current.countCards('ej', 'hoyoqianren_equip');
                        })
                    );
                },
                content() {
                    'step 0';
                    if (!player.hasSkill('hoyoyujian')) player.loseHp();
                    var players = game.filterPlayer();
                    for (var i = 0; i < players.length; i++) {
                        var card = players[i].getEquips('hoyoqianren_equip');
                    }
                    if (!card.length) {
                        var card = get.cardPile(function (card) {
                            return card.name == 'hoyoqianren_equip';
                        });
                    }
                    if (!card) {
                        var card = game.createCard('hoyoqianren_equip', lib.card['hoyoqianren_equip'].suit, 7);
                    }
                    player.equip(card);
                },
                subSkill: {
                    skill: {
                        equipSkill: true,
                        trigger: { player: 'useCardToPlayered' },
                        audio: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        //priority:1,
                        logTarget: 'target',
                        content() {
                            if (!trigger.target.hasSkill('fengyin')) {
                                trigger.target.addTempSkill('fengyin');
                                trigger.target.addTempSkill('hoyoqianren_use');
                            }
                        },
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name == 'sha') return Infinity;
                            },
                            cardEnabled2(card, player) {
                                if (player.name != 'mihoyoqi' && get.position(card) == 'h') return false;
                            },
                        },
                    },
                    damage: {
                        forced: true,
                        trigger: {
                            player: 'useCard',
                        },
                        filter(event, player) {
                            return event.card.name == 'sha';
                        },
                        content() {
                            var num1 = 0;
                            var num2 = Math.random();
                            // game.log(num2)
                            for (var i of [0.95, 0.9, 0.85, 0.75, 0.65, 0.5, 0]) {
                                if (num2 > i) num1++;
                            }
                            game.playAudio(`../extension/狂澜异世/audio/lini/qi/damage${num1}.mp3`);
                            trigger.baseDamage += num1;
                        },
                    },
                    use: {
                        trigger: { player: 'damageEnd' },
                        forced: true,
                        charlotte: true,
                        content() { },
                        ai: {
                            nohujia: true,
                            skillTagFilter(player) {
                                var evt = _status.event.parent;
                                return evt.name == 'damage' && evt.source && evt.source.countCards('e', { name: 'hoyoqianren_equip' });
                            },
                        },
                    },
                    die: {
                        trigger: { source: 'die' },
                        forced: true,
                        content() {
                            var num = lib.character[trigger.player.name][3].length;
                            player.recover(num);
                            player.draw(num);
                        },
                    },
                },
            },
            hoyoyujian: {
                init(player) {
                    game.playAudio('../extension/狂澜异世/audio/lini/qi/yujian.mp3');
                },
                audio: 'ext:狂澜异世/audio/lini/qi:5:mp3',
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                content() {
                    var card = game.createCard('hoyoyujian_equip', lib.card['hoyoyujian_equip'].suit, 1);
                    player.equip(card);
                },
                subSkill: {
                    feijian: {
                        trigger: {
                            global: 'damageBegin3',
                        },
                        filter(event, player) {
                            return event.player.countCards('h', { color: 'black' });
                        },
                        content() {
                            'step 0';
                            player.chooseButton(['选择弃置一张黑色手牌令此伤害-1', trigger.player.getCards('h')]).set('filterButton', function (button) {
                                return get.color(button.link) == 'black';
                            });
                            ('step 1');
                            if (result.links?.length) {
                                trigger.player.discard(result.links);
                                trigger.num--;
                                game.playAudio('../extension/狂澜异世/audio/lini/qi/wait.mp3');
                                var card = player.getCards('e', (card) => {
                                    return card.name == 'hoyoyujian_equip';
                                });
                                player.draw(2);
                                game.cardsGotoSpecial(card);
                                game.log(card, '被销毁了');
                            }
                        },
                    },
                },
            },
            hoyoliuying: {
                audio: 'ext:狂澜异世/audio/lini/jingliu:2:mp3',
                trigger: {
                    global: 'damageEnd',
                },
                filter(event, player) {
                    if (!event.source) return false;
                    if (event.source != player) return false;
                    return event.card && !(event.card.cards && event.card.cards.length);
                },
                content() {
                    'step 0';
                    if (trigger.card.cards && trigger.card.cards.length) {
                        event.list = [];
                        trigger.card.cards.forEach((card) => {
                            var str = lib.skill.hoyoliuying.checkText(card);
                            for (var i in lib.skill.hoyoliuying.isCardFilter) {
                                if (str.includes(lib.skill.hoyoliuying.isCardFilter[i])) event.list.push(i);
                            }
                        });
                        if (!event.list.length) {
                            event.finish();
                        } else {
                            event.num = event.list.length;
                        }
                    } else {
                        var type = get.type(trigger.card);
                        var card = get.cardPile((card) => {
                            return get.type(card) == type;
                        });
                        if (card) player.gain(card, 'gain2', 'log');
                        event.finish();
                    }
                    ('step 1');
                    var name = event.list[event.list.length - event.num];
                    if (name == 'distance' || name == 'judge') {
                        player.chooseTarget(`${name == 'distance' ? '对一名其他角色造成一点伤害' : '弃置一名其他角色区域内的一张牌'}`, function (card, player, target) {
                            return player != target;
                        });
                    } else {
                        lib.skill.hoyoliuying[name](player);
                        event.goto(3);
                    }
                    ('step 2');
                    if (result.bool) {
                        var name = event.list[event.list.length - event.num];
                        lib.skill.hoyoliuying[name](player, result);
                    }
                    ('step 3');
                    if (event.num > 1) {
                        event.num--;
                        event.goto(1);
                    } else {
                        event.finish();
                    }
                },
                isCardFilter: {
                    damage: '伤害',
                    offset: '抵消',
                    judge: '判定',
                    distance: '距离',
                },
                damage(player) {
                    player.recover();
                },
                offset(player) {
                    player.draw();
                },
                distance(player, result) {
                    result.targets[0].damage(player);
                    player.line(result.targets[0], 'red');
                },
                judge(player, result) {
                    player.discardPlayerCard('hej', result.targets[0]);
                },
                checkText(node) {
                    var str = '',
                        name = node.name;
                    if (lib.translate[name + '_info']) {
                        if (lib.card[name].type && lib.translate[lib.card[name].type]) str += '' + get.translation(lib.card[name].type) + '牌|';
                        if (get.subtype(name)) {
                            str += '' + get.translation(get.subtype(name)) + '|';
                        }
                        if (lib.card[name] && lib.card[name].addinfomenu) {
                            str += '' + lib.card[name].addinfomenu + '|';
                        }
                    }
                    if (lib.card[name].cardPrompt) {
                        str += '' + lib.card[name].cardPrompt(node) + '|';
                    } else if (lib.translate[name + '_info']) {
                        str += '' + lib.translate[name + '_info'] + '|';
                    }
                    if (get.is.yingbianConditional(node)) {
                        const yingbianEffects = get.yingbianEffects(node);
                        if (!yingbianEffects.length) {
                            const defaultYingbianEffect = get.defaultYingbianEffect(node);
                            if (lib.yingbian.prompt.has(defaultYingbianEffect)) yingbianEffects.push(defaultYingbianEffect);
                        }
                        if (yingbianEffects.length) str += `应变:${yingbianEffects.map((value) => lib.yingbian.prompt.get(value)).join(';')}|`;
                    }
                    return str;
                },
            },
            hoyofeiguang: {
                audio: 'ext:狂澜异世/audio/lini/jingliu:3:mp3',
                zhuanhuanji: true,
                mark: true,
                marktext: '☯',
                intro: {
                    content(storage, player) {
                        var num = player.storage.hoyofeiguang == true ? 3 - player.countMark('hoyoshengmie') : player.countMark('hoyoshengmie');
                        if (num > 0) {
                            return `${player.storage.hoyofeiguang == true ? '阴' : '阳'}:将${get.cnNumber(num)}张牌当一张冰【杀】使用或打出`;
                        } else {
                            return `视为使用或打出一张冰【杀】`;
                        }
                    },
                    markcount(storage, player) {
                        var num = player.storage.hoyofeiguang == true ? 3 - player.countMark('hoyoshengmie') : player.countMark('hoyoshengmie');
                        return `${num ? '转化' : '虚拟'}${num}`;
                    },
                },
                enable: ['chooseToUse', 'chooseToRespond'],
                delay: false,
                complexCard: true,
                check(card) {
                    var val = get.value(card);
                    if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                    return 5 - val;
                },
                filterTarget(card, player, target) {
                    var event = _status.event,
                        evt = event;
                    if (event._backup) evt = event._backup;
                    var sha = {
                        name: 'sha',
                        nature: 'ice',
                    };
                    if (evt.filterCard && evt.filterCard(sha, player, event)) {
                        if (event.name == 'chooseToRespond') return false;
                        if (!evt.filterTarget) return true;
                        return (
                            game.hasPlayer(function (current) {
                                return evt.filterTarget(sha, player, current);
                            }) &&
                            player != target &&
                            lib.filter.targetEnabled2(card, player, target) &&
                            lib.filter.targetInRange(card, player, target)
                        );
                    }
                },
                filterCard(event, player, target) {
                    if (player.storage.hoyofeiguang == false && player.countMark('hoyoshengmie') == 0) return false;
                    if (player.storage.hoyofeiguang == true && player.countMark('hoyoshengmie') == 3) return false;
                    return true;
                },
                selectCard() {
                    var player = _status.event.player;
                    if (player.storage.hoyofeiguang == false && player.countMark('hoyoshengmie') == 0) return -1;
                    if (player.storage.hoyofeiguang == true && player.countMark('hoyoshengmie') == 3) return -1;
                    return player.storage.hoyofeiguang == true ? 3 - player.countMark('hoyoshengmie') : player.countMark('hoyoshengmie');
                },
                selectTarget() {
                    if (_status.event.name == 'chooseToRespond') return -1;
                    return ui.selected.cards.some((card) => {
                        return card.name == 'sha';
                    })
                        ? 2
                        : 1;
                },
                hiddenCard(player, name) {
                    var num = player.storage.hoyofeiguang == true ? 3 - player.countMark('hoyoshengmie') : player.countMark('hoyoshengmie');
                    if (name == 'sha') return player.countCards('hes') >= num;
                },
                position: 'hes',
                viewAs: { name: 'sha', nature: 'ice' },
                precontent() {
                    player.changeZhuanhuanji('hoyofeiguang');
                },
                prompt(event) {
                    var player = _status.event.player;
                    var num = player.storage.hoyofeiguang == true ? 3 - player.countMark('hoyoshengmie') : player.countMark('hoyoshengmie');
                    if (num > 0) {
                        return `将${get.cnNumber(num)}张牌当一张冰【杀】${event.name == 'chooseToUse' ? '使用' : '打出'}`;
                    } else {
                        return `视为${event.name == 'chooseToUse' ? '使用' : '打出'}一张冰【杀】`;
                    }
                },
                group: 'hoyofeiguang_add',
                subSkill: {
                    add: {
                        popup: false,
                        trigger: {
                            player: 'respondAfter',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.skill == 'hoyofeiguang' && !(event.cards && event.cards.length);
                        },
                        content() {
                            if (player.countMark('hoyoshengmie') < 3) player.addMark('hoyoshengmie');
                        },
                    },
                },
                viewAsFilter(player) {
                    var num = player.storage.hoyofeiguang == true ? 3 - player.countMark('hoyoshengmie') : player.countMark('hoyoshengmie');
                    return player.countCards('hes') >= num;
                },
                ai: {
                    skillTagFilter(player) {
                        var num = player.storage.hoyofeiguang == true ? 3 - player.countMark('hoyoshengmie') : player.countMark('hoyoshengmie');
                        return player.countCards('hes') >= num;
                    },
                    respondSha: true,
                },
            },
            hoyoshengmie: {
                audio: 'ext:狂澜异世/audio/lini/jingliu:2:mp3',
                init(player) {
                    if (!player.storage.hoyoshengmie) player.storage.hoyoshengmie = 2;
                    game.playAudio('../extension/狂澜异世/audio/lini/jingliu/hoyojingliustart.mp3');
                },
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    return player.countMark('hoyoshengmie') && player.getStat('damage');
                },
                mark: true,
                marktext: '生灭',
                intro: {
                    content(storage, player) {
                        var num = player.countMark('hoyoshengmie');
                        return '剩余次数' + num;
                    },
                    markcount(storage, player) {
                        var num = player.countMark('hoyoshengmie');
                        return num || 0;
                    },
                },
                forced: true,
                content() {
                    'step 0';
                    player.chooseTarget(`请选择至多${get.cnNumber(player.getStat('damage'))}名其他角色,对其使用冰【杀】`, [1, player.getStat('damage')], function (card, player, target) {
                        return player != target;
                    });
                    ('step 1');
                    if (result.bool) {
                        player.useCard({ name: 'sha', nature: 'ice' }, result.targets);
                        player.removeMark('hoyoshengmie');
                    }
                },
                group: ['hoyoshengmie_gain', 'hoyoshengmie_wash'],
                subSkill: {
                    gain: {
                        trigger: {
                            player: 'useCardAfter',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.parent.name == 'hoyoshengmie';
                        },
                        content() {
                            var list = ['sha', 'shan', 'tao', 'jiu'];
                            var cards = [];
                            list.forEach((name) => {
                                var card = get.cardPile((card) => {
                                    return card.name == name;
                                });
                                if (card) cards.push(card);
                            });
                            player.gain(cards, 'gain2', 'log');
                        },
                    },
                    wash: {
                        trigger: {
                            global: 'washCard',
                        },
                        forced: true,
                        content() {
                            if (player.countMark('hoyoshengmie') < 3) player.addMark('hoyoshengmie');
                        },
                    },
                },
            },
            hoyohumeng: {
                audio: 'ext:狂澜异世/audio/lini/huli:1:mp3',
                init(player) {
                    if (!player.storage.hoyohumeng_use) {
                        player.storage.hoyohumeng_use = {
                            live: [],
                            die: [],
                            ear: [],
                            eye: [],
                            mouth: [],
                            nose: [],
                        };
                    }
                },
                forced: true,
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                content() {
                    let cards = get.cards(6);
                    let list = Object.keys(player.getStorage('hoyohumeng_use'));
                    for (var i = 0; i < cards.length; i++) {
                        player.getStorage('hoyohumeng_use')[list[i]].push(cards[i]);
                    }
                },
                mark: true,
                intro: {
                    mark(dialog, storage, player) {
                        dialog.content.style['overflow-x'] = 'visible';
                        var list = player.getStorage('hoyohumeng_use');
                        let list2 = Object.keys(player.getStorage('hoyohumeng_use'));
                        var core = document.createElement('div');
                        core.style.width = '0';
                        var centerX = -48,
                            centerY = 80,
                            radius = 75;
                        var radian = (Math.PI * 2) / 6;
                        for (var i = 0; i < 6; i++) {
                            var td = document.createElement('div');
                            var text = document.createElement('div');
                            td.appendChild(list[list2[i]][0]);
                            text.innerHTML = `${'生死耳目口鼻'[i]}`;
                            td.style.position = 'absolute';
                            td.style.transform = `rotate(${60 * i}deg)`;
                            td.style.scale = '0.5';
                            text.style.position = 'absolute';
                            core.appendChild(td);
                            core.appendChild(text);
                            td.style.left = centerX + radius * Math.sin(radian * i) + 'px';
                            td.style.top = centerY - radius * Math.cos(radian * i) + 'px';
                            text.style.left = 35 * Math.sin(radian * i) + 'px';
                            text.style.top = 125 - 35 * Math.cos(radian * i) + 'px';
                        }
                        dialog.content.appendChild(core);
                    },
                },
                group: ['hoyohumeng_use', 'hoyohumeng_get'],
                subSkill: {
                    use: {
                        usable: 1,
                        enable: ['chooseToUse', 'chooseToRespond'],
                        chooseButton: {
                            dialog(event, player) {
                                let list = [];
                                let content = player.getStorage('hoyohumeng_use');
                                let list2 = Object.keys(content);
                                for (var i = 0; i < 6; i++) {
                                    let card = content[list2[i]][0];
                                    let str = '';
                                    if (get.type(card) != 'equip' && get.type(card) != 'delay') {
                                        str = '生死耳目口鼻'[i];
                                        list.push([str, '', card.name]);
                                    }
                                }
                                return ui.create.dialog('狐梦', [list, 'vcard']);
                            },
                            filter(button, player) {
                                return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                            },
                            backup(links, player) {
                                return {
                                    filterCard: () => false,
                                    selectCard: -1,
                                    viewAs: { name: links[0][2], nature: links[0][3] },
                                    precontent() { },
                                };
                            },
                            check(button) {
                                if (_status.event.parent.type != 'phase') return 1;
                                var player = _status.event.player;
                                if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                return player.getUseValue({
                                    name: button.link[2],
                                    nature: button.link[3],
                                });
                            },
                            prompt(links, player) {
                                return '视为使用一张' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
                            },
                        },
                        hiddenCard(player, Q) {
                            let list = [];
                            for (var i in player.storage.hoyohumeng_use) {
                                let card = player.storage.hoyohumeng_use[i][0];
                                if (card) list.push(card.name);
                            }
                            return list.includes(Q);
                        }, //QQQ
                        ai: {
                            respondSha: true,
                            respondShan: true,
                            order: 7,
                            save: true,
                            skillTagFilter(player) {
                                return !player.getStat().skill.hoyohumeng_use;
                            },
                        },
                    },
                    get: {
                        trigger: {
                            player: 'phaseBegin',
                        },
                        content() {
                            'step 0';
                            let content = player.getStorage('hoyohumeng_use');
                            let list2 = Object.keys(content);
                            let list = [];
                            for (var i = 0; i < 6; i++) {
                                let card = content[list2[i]][0];
                                list.push(card);
                            }
                            player.chooseButton(['狐梦:选择一张牌与牌堆顶的一张牌交换', '', '「生」「死」「耳」「目」「口」「鼻」', list]).set('ai', function (button) {
                                if (get.type(button.link) == 'equip' || get.type(button.link) == 'delay') return 20;
                                if (button.link.name == 'tao' || button.link.name == 'jiu' || button.link.name == 'wuxie') return 0;
                                return get.buttonValue(button);
                            });
                            ('step 1');
                            if (result.links?.length) {
                                let card = get.cards();
                                let keys = Object.keys(player.getStorage('hoyohumeng_use'));
                                for (var i = 0; i < 6; i++) {
                                    let storage = player.getStorage('hoyohumeng_use')[keys[i]];
                                    if (storage[0] == result.links[0]) {
                                        let cardx = storage[0];
                                        storage.push(card[0]);
                                        storage.shift();
                                        game.cardsGotoPile(cardx, 'insert');
                                        game.log(player, '将', cardx, '置于了牌堆顶');
                                        player.addTempSkill(`hoyohumeng_${keys[i]}`, { player: 'phaseBefore' });
                                        break;
                                    }
                                }
                                player.loseMaxHp();
                            }
                        },
                    },
                    unequip: {
                        firstDo: true,
                        ai: { unequip2: true },
                        init(player, skill) {
                            if (!player.storage[skill]) player.storage[skill] = [];
                        },
                        trigger: {
                            player: ['damage', 'damageCancelled', 'damageZero'],
                            source: ['damage', 'damageCancelled', 'damageZero'],
                            target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd', 'eventNeutralized'],
                            global: ['useCardEnd'],
                        },
                        charlotte: true,
                        filter(event, player) {
                            return event.card && (event.name != 'damage' || event.notLink());
                        },
                        silent: true,
                        forced: true,
                        popup: false,
                        _priority: 12,
                        content() { },
                        marktext: '※',
                        intro: { content: '当前防具技能已失效' },
                    },
                    use2: {
                        mod: {
                            targetInRange(card, player, target) {
                                if (target.hasSkill('hoyohumeng_nouse')) {
                                    return true;
                                }
                            },
                            cardUsableTarget(card, player, target) {
                                if (target.hasSkill('hoyohumeng_nouse')) return true;
                            },
                        },
                        charlotte: true,
                    },
                    nouse: {
                        mod: {
                            cardEnabled2(card, player) {
                                if (get.position(card) == 'h') return false;
                            },
                        },
                        ai: {
                            effect: {
                                target(card, player, target) {
                                    if (get.tag(card, 'damage')) return [0, -999];
                                },
                            },
                        },
                        charlotte: true,
                    },
                },
            },
            hoyohumeng_live: {
                audio: 'ext:狂澜异世/audio/lini/huli:1:mp3',
                //「生」:准备阶段开始时,你回复一点体力并获得三种类型不同的牌各一张
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                content() {
                    var types = ['trick', 'basic', 'equip'];
                    var cards = [];
                    var str = '';
                    types.forEach((type) => {
                        var card = get.cardPile(function (card) {
                            return get.type2(card) == type;
                        });
                        card ? cards.push(card) : (str += get.translation(type));
                    });
                    if (cards) player.gain(cards, 'gain2', 'log');
                    player.recover();
                },
            },
            hoyohumeng_die: {
                audio: 'ext:狂澜异世/audio/lini/huli:1:mp3',
                // 「死」:出牌阶段开始时,你令一名其他角色的非锁定技失效,你对其使用牌无距离和次数限制,其不能使用或打出手牌且装备牌失效直到回合结束
                trigger: {
                    player: 'phaseUseBegin',
                },
                content() {
                    'step 0';
                    player
                        .chooseTarget(function (card, player, target) {
                            return player != target;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            return get.damageEffect(target, player, player);
                        });
                    ('step 1');
                    if (result.bool) {
                        let target = result.targets[0];
                        target.addTempSkill('fengyin');
                        target.addTempSkill('hoyohumeng_unequip');
                        player.addTempSkill('hoyohumeng_use2');
                        target.addTempSkill('hoyohumeng_nouse');
                        target.markSkillCharacter('hoyohumeng_nouse', player, '死', '无法使用或打出任何手牌');
                    }
                },
            },
            hoyohumeng_ear: {
                audio: 'ext:狂澜异世/audio/lini/huli:1:mp3',
                // 「耳」:你获得等同于你体力值的护甲.一名其他角色回合开始时,你可以失去一点护甲,获得其一张牌并视为对其使用一张无距离限制的刺【杀】
                init(player) {
                    player.changeHujia(player.hp);
                },
                trigger: {
                    global: 'phaseBegin',
                },
                filter(event, player) {
                    return event.player != player && player.hujia > 0;
                },
                content() {
                    player.changeHujia(-1);
                    if (trigger.player.countCards('he')) {
                        player.gainPlayerCard(trigger.player, 'he');
                    }
                    player.useCard({ name: 'sha', nature: 'stab' }, trigger.player, false);
                },
            },
            hoyohumeng_eye: {
                audio: 'ext:狂澜异世/audio/lini/huli:1:mp3',
                init(player) {
                    if (!player.storage.hoyohumeng_eye) {
                        player.storage.hoyohumeng_eye = 0;
                    }
                },
                // 「目」:出牌阶段限三次,你可以令两名角色交换体力值,回合结束时你摸等同于交换总差值的牌
                usable: 3,
                check(card) {
                    return 2.5;
                },
                enable: 'phaseUse',
                filterTarget: () => true,
                selectTarget: 2,
                multitarget: true,
                multiline: true,
                content() {
                    'step 0';
                    event.target1 = targets[0];
                    event.target2 = targets[1];
                    event.num = event.target1.hp - event.target2.hp;
                    player.storage.hoyohumeng_eye += Math.abs(event.num);
                    ('step 1');
                    event.target1.changeHp(event.num);
                    ('step 2');
                    if (event.target1.hp <= 0) {
                        event.target1.dying({ source: player });
                    }
                    event.target2.changeHp(-event.num);
                    ('step 3');
                    if (event.target2.hp <= 0) {
                        event.target2.dying({ source: player });
                    }
                },
                group: 'hoyohumeng_eye_gain',
                subSkill: {
                    gain: {
                        trigger: {
                            player: 'phaseJieshuBegin',
                        },
                        forced: true,
                        content() {
                            player.draw(player.getStorage('hoyohumeng_eye'));
                            player.storage.hoyohumeng_eye = 0;
                        },
                    },
                },
                ai: {
                    order: 8,
                    result: {
                        player(player, target) {
                            return 1;
                        },
                        target(player, target) {
                            if (ui.selected.targets.length == 0) {
                                return -3;
                            } else {
                                return get.effect(target, { name: 'juedou' }, ui.selected.targets[0], target);
                            }
                        },
                    },
                },
            },
            hoyohumeng_mouth: {
                audio: 'ext:狂澜异世/audio/lini/huli:1:mp3',
                // 「口」:摸牌阶段,你可以改为与至多6名其他角色拼点.你以此法拼点的牌的点数改为从<六狐>牌中任意一张的点数.没赢的角色选择弃置一张牌或令你摸一张牌
                trigger: {
                    player: 'phaseDrawBefore',
                },
                content() {
                    trigger.setContent(lib.skill.hoyohumeng_mouth.phaseDraw);
                },
                phaseDraw() {
                    'step 0';
                    game.log(player, '进入了摸牌阶段');
                    player
                        .chooseTarget(
                            [1, 6],
                            function (card, player, target) {
                                return target.countCards('h') && player != target;
                            },
                            true
                        )
                        .set('ai', function (target) {
                            var att = get.attitude(_status.event.player, target);
                            if (att > 0) return att + 1;
                            if (att == 0) return Math.random();
                            return att;
                        });
                    ('step 1');
                    if (result.bool) {
                        if (!player.countCards('h')) player.draw();
                        player.chooseToCompare(result.targets).callback = lib.skill.hoyohumeng_mouth.callback;
                    }
                },
                callback() {
                    'step 0';
                    if (event.num1 <= event.num2) {
                        player.chooseToDiscard('he', '弃置一张牌,或摸一张牌').set('ai', function () {
                            return -1;
                        });
                    } else event.goto(2);
                    ('step 1');
                    if (!result.bool) {
                        player.draw();
                    }
                    ('step 2');
                    if (event.num1 >= event.num2) {
                        target
                            .chooseToDiscard('he', '弃置一张牌,或令' + get.translation(player) + '摸一张牌')
                            .set('ai', function (card) {
                                if (_status.event.goon) return 6 - get.value(card);
                                return 0;
                            })
                            .set('goon', get.attitude(target, player) < 0);
                    } else event.finish();
                    ('step 3');
                    if (!result.bool) player.draw();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            return 0.5;
                        },
                    },
                },
            },
            hoyohumeng_nose: {
                audio: 'ext:狂澜异世/audio/lini/huli:1:mp3',
                init(player) {
                    if (!player.storage.hoyohumeng_nose) player.storage.hoyohumeng_nose = [];
                },
                // 「鼻」:每名其他角色限一次,当一名角色使用牌结算完毕后,你进行一次判定.若结果为♥️️,其跳过下一个出牌阶段,否则受到一点雷电伤害.
                trigger: {
                    global: 'useCardAfter',
                },
                filter(event, player) {
                    return event.player != player && !player.getStorage('hoyohumeng_nose').includes(event.player);
                },
                content() {
                    'step 0';
                    player.getStorage('hoyohumeng_nose').push(trigger.player);
                    player.judge();
                    ('step 1');
                    if (result.suit == 'heart') {
                        trigger.player.addSkill('hoyohumeng_nose_skip');
                    } else {
                        trigger.player.damage('thunder');
                        player.line(trigger.player);
                    }
                },
                subSkill: {
                    skip: {
                        trigger: { player: 'phaseZhunbeiBegin' },
                        forced: true,
                        charlotte: true,
                        content() {
                            player.skip('phaseUse');
                            player.removeSkill('hoyohumeng_nose_skip');
                            game.log(player, '跳过了出牌阶段');
                        },
                        mark: true,
                        intro: { content: '下个准备阶段开始时跳过出牌阶段' },
                    },
                },
            },
            hoyoqiuyu: {
                audio: 'ext:狂澜异世/audio/lini/huli:2:mp3',
                usable: 1,
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return player != target && target.countCards('h');
                },
                multitarget: true,
                multiline: true,
                selectTarget() {
                    return [Math.floor((game.players.length * 1) / 3) + 1, game.filterPlayer((i) => i != _status.event.player).length];
                },
                content() {
                    player.chooseToDebate(targets).set('callback', lib.skill.hoyoqiuyu.callback);
                },
                callback() {
                    var result = event.debateResult;
                    if (result.bool && result.opinion) {
                        var redtargets = result.red.map((i) => i[0]),
                            blacktargets = result.black.map((i) => i[0]);
                        if (redtargets.length != blacktargets.length) {
                            player.useCard({ name: redtargets.length > blacktargets.length ? 'taoyuan' : 'wugu' }, (redtargets.length > blacktargets.length ? redtargets : blacktargets).sortBySeat(), true);
                        }
                    } else {
                        player.recover();
                        player.draw(2);
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        player: 1,
                        target(player, target) {
                            return 1;
                        },
                    },
                },
            },
            hoyoshasheng: {
                forced: true,
                trigger: {
                    global: 'roundStart',
                },
                async content(event, trigger, player) {
                    const { bool, targets } = await player
                        .chooseTarget(Math.ceil(game.players.length / 2), (card, player, target) => player != target)
                        .set('ai', (target) => target.isFriendsOf(_status.event.player))
                        .forResult(); //QQQ
                    if (bool) {
                        for (var i of targets.sortBySeat()) {
                            i.addMark('hoyoshasheng_mark');
                            player.line(i);
                        }
                    }
                },
                group: 'hoyoshasheng_damage',
                subSkill: {
                    mark: {
                        mark: true,
                        marktext: '樱',
                        intro: {
                            name: '樱',
                            content: 'mark',
                        },
                    },
                    damage: {
                        forced: true,
                        trigger: {
                            global: 'phaseUseBegin',
                        },
                        async content(event, trigger, player) {
                            const players = game.players.slice(1).randomGets(trigger.player.countMark('hoyoshasheng_mark')).sortBySeat();
                            let num = 0;
                            for (var i of players) {
                                let damageEvent = await i.damage(trigger.player, 'thunder');
                                num += damageEvent.num;
                            }
                            if (num > 1) {
                                player.draw();
                            }
                        },
                    },
                },
            },
            hoyoyuhui: {
                init(player) {
                    if (!player.storage.hoyoyuhui) player.storage.hoyoyuhui = [];
                    for (var i = 0; i < lib.inpile.length; i++) {
                        var name = lib.inpile[i];
                        if (name == 'sha') {
                            player.storage.hoyoyuhui.push(['基本', '', 'sha']);
                            for (var j of lib.inpile_nature) {
                                player.storage.hoyoyuhui.push(['基本', '', 'sha', j]);
                            }
                        } else if (get.type2(name) == 'trick' && lib.card[name].ai && lib.card[name].ai.tag && lib.card[name].ai.tag.damage != undefined) {
                            //QQQ
                            player.storage.hoyoyuhui.push(['锦囊', '', name]);
                        } else if (get.type(name) == 'basic') player.storage.hoyoyuhui.push(['基本', '', name]);
                    }
                },
                enable: 'phaseUse',
                async content(event, trigger, player) {
                    const { bool, links } = await player.chooseButton(['御？', [player.getStorage('hoyoyuhui'), 'vcard']]).forResult();
                    if (bool) {
                        let name = links[0][2],
                            nature = links[0][3];
                        const { bool, targets } = await player.chooseTarget(true, 3).forResult();
                        let dieEvent = await player.die();
                        if (player.isDead() && bool) {
                            player.next.gain(dieEvent.cards, 'gain2', 'log');
                            player.useCard({ name: name, nature: nature }, targets).forceDie = true;
                        }
                    }
                },
            },
            hoyofengche: {
                //出牌阶段,若你已使用的牌点数之和不大于13,你使用牌时摸两张牌.若此牌为【杀】,则你令此牌无法响应且伤害+1
                trigger: { player: 'useCard' },
                forced: true,
                filter(event, player) {
                    let evt = event.getParent('phaseUse');
                    const num = player.getHistory('useCard').reduce((total, history) => {
                        return total + history.card.number;
                    }, 0);
                    if (num <= 13) return evt && evt.player == player;
                },
                async content(event, trigger, player) {
                    if (!player.hasSkill('hoyofengche_mark')) player.addTempSkill('hoyofengche_mark');
                    player.draw(2, 'nodelay');
                    if (trigger.card.name == 'sha') {
                        trigger.baseDamage++;
                        trigger.directHit.addArray(game.filterPlayer());
                    }
                },
                subSkill: {
                    mark: {
                        mark: true,
                        marktext: '奉',
                        intro: {
                            markcount(storage, player) {
                                const num = player.getHistory('useCard').reduce((total, history) => {
                                    return total + history.card.number;
                                }, 0);
                                return Math.max(13 - (num || 0), 0);
                            },
                        },
                    },
                },
                mod: {
                    aiOrder(player, card, num) {
                        const num2 = player.getHistory('useCard').reduce((total, history) => {
                            return total + history.card.number;
                        }, 0);
                        if (typeof card == 'object' && player == _status.currentPhase) {
                            if (num2 - card.number <= 13) return 10;
                        }
                    },
                },
            },
            hoyojushou: {
                //当你受到伤害后,你可以展示一张装备牌并使用之,摸X张牌(X为场上装备区内花色与此牌相同的牌数)
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('h', { type: 'equip' });
                },
                async content(event, trigger, player) {
                    const { bool, cards } = await player
                        .chooseCard('展示一张装备牌并使用之', 'h', { type: 'equip' })
                        .set('ai', function (card) {
                            if (typeof card !== 'object') return;
                            let suit = card.suit;
                            if (
                                !lib.suit.includes(suit) ||
                                player.hasCard(function (i) {
                                    return i.suit == suit;
                                }, 'h')
                            )
                                return;
                            return [
                                1,
                                0.8 *
                                game.countPlayer((current) => {
                                    return current.countCards('e', (card) => {
                                        return card.suit == suit;
                                    });
                                }),
                            ];
                        })
                        .forResult();
                    if (bool) {
                        player.showCards(cards);
                        await player.equip(cards[0]);
                        player.draw(
                            game.countPlayer(function (current) {
                                return current.countCards('e', function (card) {
                                    return card.suit == cards[0].suit;
                                });
                            }),
                            'nodelay'
                        );
                    }
                },
                ai: {
                    effect: {
                        player: 1,
                    },
                },
            },
            pixelzhizhe: {
                audio: ['dczhizhe', 2],
                trigger: {
                    player: 'useCardAfter',
                },
                filter(event, player) {
                    return (
                        lib.suit.filter((suit) => {
                            return player.countCards('h', { suit });
                        }).length != 4 && player.getHistory('useCard', (evt) => evt).length == 1
                    );
                },
                forced: true,
                async content(event, trigger, player) {
                    player.draw(
                        lib.suit.length -
                        lib.suit.filter((suit) => {
                            return player.countCards('h', { suit });
                        }).length
                    );
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (typeof card == 'object') {
                            if (player.countCards('h', { name: card.name }) == 1 && !player.getHistory('useCard', (evt) => evt).length) return num + 15;
                        }
                    },
                },
            },
            pixelhuoji: {
                usable: 1,
                enable: 'phaseUse',
                audio: ['rehuoji', 2],
                filterTarget: true,
                derivation: ['mashu'],
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    if (target.countCards('e', { subtype: ['equip3', 'equip4', 'equip6'] })) {
                        player.addTempSkill('mashu');
                    }
                    await target.damage('fire');
                },
                ai: {
                    order: 9.1,
                    result: {
                        player(player, target) {
                            return (1 + target.countCards('e', { subtype: ['equip3', 'equip4', 'equip6'] })) * 0.15;
                        },
                        target(player, target) {
                            return get.damageEffect(target, player) - target.countCards('e', { subtype: ['equip3', 'equip4', 'equip6'] });
                        },
                    },
                },
            },
            pixellingren: {
                audio: ['xinfu_lingren', 2],
                usable: 1,
                trigger: {
                    source: 'damageBegin1',
                },
                filter(event, player) {
                    const target = event.player;
                    return target != player && (player.countCards('h') > target.countCards('h') || player.countCards('e') > target.countCards('e') || player.hp > target.hp);
                },
                check(event, player) {
                    return get.attitude(player, event.player) <= 0; //QQQ
                },
                async content(event, trigger, player) {
                    const target = trigger.player;
                    let list = [];
                    if (player.countCards('h') > target.countCards('h')) list.push(`手牌区:${player.countCards('h') - target.countCards('h')}点伤害`);
                    if (player.hp > target.hp) list.push(`体力:${player.hp - target.hp}点伤害`);
                    if (player.countCards('e') > target.countCards('e')) list.push(`装备区:${player.countCards('e') - target.countCards('e')}点伤害`);
                    const { index } = await player.chooseControlList(true, '选择增加伤害数', list).forResult();
                    const str = list[index],
                        numberStr = str.match(/:(\d+)点伤害/);
                    let num = numberStr ? parseInt(numberStr[1], 10) : NaN;
                    trigger.num += num || 0;
                    _status.temp = player;
                    target
                        .when('damageBegin4')
                        .filter((event, player) => {
                            return event.num;
                        })
                        .assign({
                            lastDo: true,
                            popup: false,
                        })
                        .then(() => {
                            player.addSkill('pixellingren_damagedying');
                        });
                },
                subSkill: {
                    damagedying: {
                        trigger: {
                            player: ['damageEnd', 'dying'],
                        },
                        forced: true,
                        charlotte: true,
                        firstDo: true,
                        popup: false,
                        async content(event, trigger, player) {
                            _status.temp[trigger.name == 'damage' ? 'loseMaxHp' : 'gainMaxHp']();
                            delete _status.temp;
                            player.removeSkill('pixellingren_damagedying');
                        },
                    },
                },
            },
            pixelfujian: {
                audio: ['xinfu_fujian', 2],
                init(player) {
                    if (!player.storage.pixelfujian) player.storage.pixelfujian = 0;
                },
                trigger: {
                    player: 'phaseUseBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const num = player.getDamagedHp();
                    player.storage.pixelfujian = num;
                    player.recover(num);
                    player.draw(num);
                    player.when('phaseUseAfter').then(() => {
                        let num = player.getStorage('pixelfujian');
                        player.loseHp(num);
                        player.countCards('he') <= num ? player.discard(player.getCards('he')) : player.chooseToDiscard('he', num, true);
                        delete player.storage.pixelfujian;
                    });
                },
                mark: true,
                intro: {
                    content(storage, player) {
                        return `伏间${player.storage.pixelfujian ? player.getStorage('pixelfujian') : '寂寞'}`;
                    },
                    markcount(storage, player) {
                        if (player.storage.pixelfujian) return player.getStorage('pixelfujian');
                        return 0;
                    },
                },
            },
            pixelcuirui: {
                audio: ['olcuorui', 2],
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return player != target;
                },
                limited: true,
                line: 'fire',
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.storage.pixelcuirui_d = target;
                    if (target.countCards('hej')) {
                        const { bool, links } = await player
                            .chooseButton([`摧锐:你可以获得其至多${player.maxHp}张牌`, target.getCards('hej')], [0, player.maxHp], true)
                            .set('ai', (button) => get.buttonValue(button))
                            .forResult(); //QQQ
                        if (bool) player.gain(links, 'gain2', 'log');
                    }
                    player.addTempSkill('pixelcuirui_useCard');
                    target.addTempSkill('pixelcuirui_damage');
                    player
                        .when({ global: 'dying' })
                        .filter((evt, player) => {
                            return evt.player == player.storage.pixelcuirui_d;
                        })
                        .then(() => {
                            game.log(player, '将在当前回合结束时重置', '#g【摧锐】');
                            player.addTempSkill('pixelcuirui_remake');
                        });
                    player.awakenSkill('pixelcuirui');
                },
                subSkill: {
                    useCard: {
                        charlotte: true,
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name == 'sha') return num + player.maxHp;
                            },
                        },
                    },
                    remake: {
                        popup: false,
                        forced: true,
                        onremove(player) {
                            game.log(player, '重置了', '#g【摧锐】');
                            player.restoreSkill('pixelcuirui');
                            delete player.storage.pixelcuirui_d;
                        },
                    },
                    damage: {
                        ai: {
                            effect: {
                                target(card, player, target) {
                                    if (get.tag(card, 'damage')) return [0, -999];
                                },
                            },
                        },
                        charlotte: true,
                    },
                },
                ai: {
                    order(item, player) {
                        if (player.countCards('h', 'sha') < 1) return 0;
                        return 10;
                    },
                    result: {
                        player: 2,
                    },
                    target(player, target, card) {
                        return (target.countCards('hej') * get.attitude(player, target)) / 3 + target.hp;
                    },
                },
            },
            pixelliewei: {
                audio: ['liewei', 2],
                forced: true,
                firstDo: true,
                trigger: {
                    global: ['dying', 'dyingAfter'],
                },
                async content(event, trigger, player) {
                    player.draw();
                    if (_status.currentPhase == player && game.dead.length) {
                        player.draw(game.dead.length);
                    }
                },
            },
            pixellingrenL: {
                audio: ['xinfu_lingren', 2],
                usable: 1,
                trigger: {
                    source: 'damageBegin1',
                },
                filter(event, player) {
                    const target = event.player;
                    return target != player && (player.countCards('h') > target.countCards('h') || player.countCards('e') > target.countCards('e') || player.hp > target.hp);
                },
                check(event, player) {
                    return get.attitude(player, event.player) <= 0; //QQQ
                },
                async content(event, trigger, player) {
                    const target = trigger.player;
                    let num = 0;
                    if (player.countCards('h') > target.countCards('h')) num++;
                    if (player.hp > target.hp) num++;
                    if (player.countCards('e') > target.countCards('e')) num++;
                    trigger.num += num;
                    _status.temp = player;
                    target
                        .when('damageBegin4')
                        .filter((event, player) => {
                            return event.num;
                        })
                        .assign({
                            lastDo: true,
                            popup: false,
                        })
                        .then(() => {
                            player.addSkill('pixellingren_damagedying');
                        });
                },
                subSkill: {
                    damagedying: {
                        trigger: {
                            player: ['damageEnd', 'dying'],
                        },
                        forced: true,
                        charlotte: true,
                        firstDo: true,
                        popup: false,
                        async content(event, trigger, player) {
                            _status.temp[trigger.name == 'damage' ? 'loseMaxHp' : 'gainMaxHp']();
                            delete _status.temp;
                            player.removeSkill('pixellingren_damagedying');
                        },
                    },
                },
            },
            pixelxingshi: {
                audio: ['xiongzhi', 2],
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    let mark = player.getStorage('pixelsanlue_mark');
                    return mark.length == 2 && mark[0] !== mark[1];
                },
                async content(event, trigger, player) {
                    let list = player.getStorage('pixelsanlue_mark');
                    list = list.map(function (i) {
                        return ['', '', i];
                    });
                    let next = player.chooseToMove('兴势:调整标记顺序？');
                    next.set('list', [['你可以调整两枚标记在[A,B]中的顺序', [list, 'vcard']]]);
                    const { bool, moved } = await next.forResult();
                    let list2 = moved[0].map(function (i) {
                        return i[2];
                    });
                    player.storage.pixelsanlue_mark = list2;
                },
                group: ['pixelxingshi_shu', 'pixelxingshi_wei', 'pixelxingshi_wu'],
                subSkill: {
                    wu: {
                        audio: ['xinfu_zhanji', 2],
                        trigger: {
                            player: 'gainAfter',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.parent.name == 'draw';
                        },
                        async content(event, trigger, player) {
                            lib.skill.pixelxingshi.mark(player, '吴');
                        },
                    },
                    wei: {
                        audio: ['renjie', 2],
                        trigger: {
                            player: 'damageBegin',
                        },
                        forced: true,
                        async content(event, trigger, player) {
                            lib.skill.pixelxingshi.mark(player, '魏');
                        },
                    },
                    shu: {
                        audio: ['tieji', 2],
                        trigger: {
                            player: 'useCardAfter',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card.name == 'sha';
                        },
                        async content(event, trigger, player) {
                            lib.skill.pixelxingshi.mark(player, '蜀');
                        },
                    },
                },
                mark(player, mark) {
                    if (!player.storage.pixelsanlue_mark) player.storage.pixelsanlue_mark = [];
                    let length = player.getStorage('pixelsanlue_mark').length;
                    switch (length) {
                        case 0:
                            player.storage.pixelsanlue_mark.push(mark);
                            break;
                        case 1:
                            player.storage.pixelsanlue_mark.push(mark);
                            break;
                        case 2:
                            player.storage.pixelsanlue_mark.shift();
                            player.storage.pixelsanlue_mark.push(mark);
                            break;
                        default:
                            player.storage.pixelsanlue_mark.shift();
                            break;
                    }
                },
            },
            pixelsanlue: {
                init(player) {
                    player.markSkill('pixelsanlue_mark');
                },
                forced: true,
                audio: ['sbaiyin', 2],
                trigger: {
                    player: 'phaseBegin',
                },
                filter(event, player) {
                    return player.getStorage('pixelsanlue_mark').length != 2;
                },
                async content(event, trigger, player) {
                    player.gainMaxHp(2 - player.getStorage('pixelsanlue_mark').length);
                    for (var i = 0; i <= 2 - player.getStorage('pixelsanlue_mark').length; i++) {
                        player.getStorage('pixelsanlue_mark').push(['魏', '蜀', '吴'].randomGet());
                    }
                },
                group: ['pixelsanlue_mark', 'pixelsanlue_wu_firstOrder', 'pixelsanlue_wu_secondOrder', 'pixelsanlue_wei_firstOrder', 'pixelsanlue_wei_secondOrder', 'pixelsanlue_shu_firstOrder', 'pixelsanlue_shu_secondOrder'],
                subSkill: {
                    mark: {
                        init(player) {
                            if (!player.storage.pixelsanlue_mark) player.storage.pixelsanlue_mark = [];
                        },
                        mark: true,
                        marktext: '略',
                        intro: {
                            content(storage, player) {
                                let cont = player.getStorage('pixelsanlue_mark');
                                if (!cont.length) return '啥也没';
                                return `[${cont}]`;
                            },
                            markcount(storage, player) {
                                let mark = player.getStorage('pixelsanlue_mark');
                                if (mark.length === 2 && mark[0] === mark[1]) {
                                    return `势${mark[0]}x2`;
                                }
                                return `势${mark}`;
                            },
                        },
                    },
                    // 吴
                    wu_firstOrder: {
                        audio: ['yingzi', 2],
                        firstDo: true,
                        trigger: { player: 'phaseDrawBegin2' },
                        forced: true,
                        filter(event, player) {
                            return !event.numFixed && player.getStorage('pixelsanlue_mark').filter((mark) => mark === '吴').length;
                        },
                        async content(event, trigger, player) {
                            trigger.num++;
                        },
                    },
                    wu_secondOrder: {
                        audio: ['tongli', 2],
                        trigger: { player: 'useCard' },
                        forced: true,
                        filter(event, player) {
                            if (event.parent.name == 'pixelsanlue_wu_secondOrder') return false;
                            if (!event.targets || !event.card) return false;
                            var type = get.type(event.card);
                            if (type != 'basic' && type != 'trick') return false;
                            for (var i = 0; i < event.targets.length; i++) {
                                if (!event.targets[i].isAlive()) return false;
                                if (!player.canUse({ name: event.card.name }, event.targets[i], false, false)) {
                                    return false;
                                }
                            }
                            return player.getStorage('pixelsanlue_mark').filter((mark) => mark === '吴').length > 1;
                        },
                        async content(event, trigger, player) {
                            trigger.effectCount++;
                            game.log(trigger.card, '额外结算一次');
                        },
                        ai: {
                            threaten: 2,
                        },
                    },
                    // 魏
                    wei_firstOrder: {
                        audio: ['reyiji', 2],
                        trigger: { player: 'damageEnd' },
                        forced: true,
                        filter(event, player) {
                            return event.num > 0 && player.getStorage('pixelsanlue_mark').filter((mark) => mark === '魏').length;
                        },
                        async content(event, trigger, player) {
                            event.count = Math.min(trigger.num, 9);
                            do {
                                event.count--;
                                const { targets } = await player
                                    .chooseTarget('选择一名角色摸2张牌', true)
                                    .set('ai', (target) => {
                                        const att = get.attitude(_status.event.player, target);
                                        if (_status.event.enemy) {
                                            return -att;
                                        } else if (att > 0) {
                                            return att / (1 + target.countCards('h'));
                                        } else {
                                            return att / 100;
                                        }
                                    })
                                    .forResult();
                                if (targets.length) {
                                    targets[0].draw(2);
                                }
                            } while (event.count);
                        },
                        ai: {
                            maixie: true,
                            maixie_hp: true,
                            effect: {
                                target(card, player, target) {
                                    if (get.tag(card, 'damage')) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                        if (!target.hasFriend()) return;
                                        let num = 1;
                                        if (get.attitude(player, target) > 0) {
                                            if (player.needsToDiscard()) num = 0.7;
                                            else num = 0.5;
                                        }
                                        if (target.hp >= 4) return [1, num * 2];
                                        if (target.hp == 3) return [1, num * 1.5];
                                        if (target.hp == 2) return [1, num * 0.5];
                                    }
                                },
                            },
                        },
                    },
                    wei_secondOrder: {
                        audio: ['ganglie', 2],
                        trigger: { player: 'damageEnd' },
                        filter(event, player) {
                            return event.source != undefined && event.num > 0 && player.getStorage('pixelsanlue_mark').filter((mark) => mark === '魏').length > 1;
                        },
                        check(event, player) {
                            return get.attitude(player, event.source) <= 0;
                        },
                        lastDo: true,
                        forced: true,
                        async content(event, trigger, player) {
                            event.count = Math.min(trigger.num, 9);
                            do {
                                event.count--;
                                await trigger.source.damage();
                                if (!trigger.source.isAlive()) break;
                            } while (event.count);
                        },
                    },
                    //蜀
                    shu_firstOrder: {
                        audio: ['paoxiao', 2],
                        firstDo: true,
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name == 'sha' && player.getStorage('pixelsanlue_mark').filter((mark) => mark === '蜀').length) return num + 1;
                            },
                        },
                    },
                    shu_secondOrder: {
                        trigger: {
                            player: 'useCard',
                        },
                        audio: ['liegong', 2],
                        lastDo: true,
                        forced: true,
                        filter(event, player) {
                            return event.card.name == 'sha' && player.getStorage('pixelsanlue_mark').filter((mark) => mark === '蜀').length > 1;
                        },
                        async content(event, trigger, player) {
                            trigger.baseDamage++;
                            trigger.directHit.add(trigger.targets[0]);
                        },
                        ai: {
                            directHit_ai: true,
                        },
                    },
                },
            },
            pixelzhiheng: {
                enable: 'phaseUse',
                usable: 1,
                audio: ['zhiheng', 2],
                filter(event, player) {
                    return lib.skill.pixelzhiheng.testSkill(player).length;
                },
                async content(event, trigger, player) {
                    let skills = lib.skill.pixelzhiheng.testSkill(player);
                    let dialog = lib.skill.pixelzhiheng.optionSkill(ui.create.dialog(), skills);
                    const { bool, links } = await player.chooseButton(true, dialog, [1, skills.length]).forResult();
                    if (bool) {
                        if (links.length == skills.length) {
                            await player.draw();
                            player.addMark('pixeljianye');
                        }
                        await player.removeSkill(lib.skill.pixelzhiheng.translateSkill(skills, links));
                        game.log(player, '失去了技能<span class="firetext">' + links.map((item) => `【${item}】`) + '</span>');
                        await lib.skill.pixelzhiheng.addSkill(player, links.length);
                    }
                },
                testSkill(player) {
                    let initSkill = lib.character[player.name][3].filter((skill) => skill);
                    initSkill.push('pixelmingzhi');
                    let skills = player.getSkills(null, false, false).filter((skill) => {
                        let info = get.info(skill);
                        if (!info || get.is.empty(info) || info.charlotte) return false;
                        return !initSkill.includes(skill);
                    });
                    return skills;
                },
                getSkill(player, num) {
                    let skills = [];
                    for (var i in lib.character) {
                        if (!Object.hasOwn(lib.character[i], 3)) continue;
                        for (let j = 0; j < lib.character[i][3].length; j++) {
                            let info = lib.skill[lib.character[i][3][j]];
                            if (player.hasSkill(info)) continue;
                            if (lib.skill.pixelzhiheng.testSkill(player).includes(info)) continue;
                            if (info && (info.gainable || !info.unique)) {
                                skills.add(lib.character[i][3][j]);
                            }
                        }
                    }
                    return skills.randomGets(num);
                },
                optionSkill(dialog, skills) {
                    let translatedSkills = skills.map((skill) => get.translation(skill));
                    dialog.addText('选择技能');
                    dialog.add([translatedSkills, 'tdnodes']);
                    return dialog;
                },
                translateSkill(skillsA, skillsB) {
                    const translationMap = new Map();
                    for (const skill of skillsA) {
                        const translatedSkill = get.translation(skill);
                        translationMap.set(translatedSkill, skill);
                    }
                    const originalSkillsInB = [];
                    for (const translatedSkill of skillsB) {
                        if (translationMap.has(translatedSkill)) {
                            originalSkillsInB.push(translationMap.get(translatedSkill));
                        }
                    }
                    return originalSkillsInB;
                },
                addSkill: async function (player, num) {
                    let skills = lib.skill.pixelzhiheng.getSkill(player, num);
                    await player.addSkill(skills);
                    game.log(player, '获得了技能<span class="greentext">' + skills.map((skill) => `【${get.translation(skill)}】`) + '</span>');
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                    },
                    threaten: 1.55,
                },
            },
            pixeljianye: {
                audio: ['dili_quandao', 2],
                trigger: {
                    player: 'useCardEnd',
                },
                filter(event, player) {
                    return get.type(event.card) == 'equip';
                },
                forced: true,
                async content(event, trigger, player) {
                    const { index } = await player
                        .chooseControl('随机获得一个技能', '摸2张牌并获得一枚标记')
                        .set('ai', function () {
                            let player = _status.event.player;
                            if (player.countCards('h') < player.hp) return 1;
                            if (lib.skill.pixelzhiheng.testSkill(player).length > 2) return 1;
                            return 0;
                        })
                        .forResult();
                    if (index) {
                        player.draw(2);
                        player.addMark('pixeljianye');
                    } else {
                        await lib.skill.pixelzhiheng.addSkill(player, 1);
                    }
                },
                marktext: '业',
                intro: {
                    name: '建业',
                    content: 'mark',
                },
                group: ['pixeljianye_lose', 'pixeljianye_draw'],
                subSkill: {
                    lose: {
                        audio: ['dili_quandao', 2],
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        filter(event, player) {
                            const evt = event.getl(player);
                            return evt && evt.player == player && evt.es && evt.es.length;
                        },
                        forced: true,
                        async content(event, trigger, player) {
                            event.count = trigger.getl(player).es.length;
                            while (event.count-- > 0) {
                                const { index } = await player
                                    .chooseControl('随机获得一个技能', '摸2张牌并获得一枚标记')
                                    .set('ai', function () {
                                        let player = _status.event.player;
                                        if (player.countCards('h') < player.hp) return 1;
                                        if (lib.skill.pixelzhiheng.testSkill(player).length > 2) return 1;
                                        return 0;
                                    })
                                    .forResult();
                                if (index) {
                                    player.draw(2);
                                    player.addMark('pixeljianye');
                                } else {
                                    await lib.skill.pixelzhiheng.addSkill(player, 1);
                                }
                            }
                        },
                    },
                    draw: {
                        audio: ['dili_quandao', 2],
                        trigger: { player: 'phaseDrawBegin2' },
                        forced: true,
                        filter(event, player) {
                            return !event.numFixed && !player.hasSkill('pixelmingzhi') && player.countMark('pixeljianye') > 0;
                        },
                        async content(event, trigger, player) {
                            trigger.num += player.countMark('pixeljianye');
                        },
                    },
                },
            },
            pixelchengdi: {
                audio: ['dili_shengzhi', 2],
                juexingji: true,
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                derivation: 'pixelmingzhi',
                filter(event, player) {
                    return player.countMark('pixeljianye') >= 3;
                },
                async content(event, trigger, player) {
                    await player.gainMaxHp();
                    player.chooseDrawRecover(2, true, function (event, player) {
                        if (player.hp == 1 && player.isDamaged()) return 'recover_hp';
                        return 'draw_card';
                    });
                    player.addSkill('pixelmingzhi');
                    player.awakenSkill('pixelchengdi');
                },
            },
            pixelmingzhi: {
                audio: ['sbtongye', 2],
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countMark('pixeljianye') > 0;
                },
                filterTarget: true,
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    target == player ? player.draw() : target.draw(2);
                    player.removeMark('pixeljianye');
                },
                ai: {
                    order: 7,
                    result: {
                        player(player) {
                            if (!player.needsToDiscard(1)) {
                                return 1;
                            }
                            return player.countMark('pixeljianye') - player.hp;
                        },
                        target: 0.5,
                    },
                },
            },
            pixelzhihengL: {
                enable: 'phaseUse',
                usable: 1,
                audio: ['zhiheng', 2],
                filter(event, player) {
                    return lib.skill.pixelzhihengL.testSkill(player).length;
                },
                async content(event, trigger, player) {
                    let skills = lib.skill.pixelzhihengL.testSkill(player);
                    let dialog = lib.skill.pixelzhihengL.optionSkill(ui.create.dialog(), skills);
                    const { bool, links } = await player.chooseButton(true, dialog, [1, player.hp]).forResult();
                    if (bool) {
                        if (links.length == skills.length) {
                            await player.draw();
                        }
                        await player.removeSkill(lib.skill.pixelzhihengL.translateSkill(skills, links));
                        game.log(player, '失去了技能<span class="firetext">' + links.map((item) => `【${item}】`) + '</span>');
                        await lib.skill.pixelzhihengL.addSkill(player, links.length);
                    }
                },
                testSkill(player) {
                    let initSkill = lib.character[player.name][3].filter((skill) => skill);
                    let skills = player.getSkills(null, false, false).filter((skill) => {
                        let info = get.info(skill);
                        if (!info || get.is.empty(info) || info.charlotte) return false;
                        return !initSkill.includes(skill);
                    });
                    return skills;
                },
                getSkill(player, num) {
                    let skills = [];
                    for (var i in lib.character) {
                        if (!Object.hasOwn(lib.character[i], 3)) continue;
                        for (let j = 0; j < lib.character[i][3].length; j++) {
                            let info = lib.skill[lib.character[i][3][j]];
                            if (player.hasSkill(info)) continue;
                            if (lib.skill.pixelzhihengL.testSkill(player).includes(info)) continue;
                            if (info && (info.gainable || !info.unique)) {
                                skills.add(lib.character[i][3][j]);
                            }
                        }
                    }
                    return skills.randomGets(num);
                },
                optionSkill(dialog, skills) {
                    let translatedSkills = skills.map((skill) => get.translation(skill));
                    dialog.addText('选择技能');
                    dialog.add([translatedSkills, 'tdnodes']);
                    return dialog;
                },
                translateSkill(skillsA, skillsB) {
                    const translationMap = new Map();
                    for (const skill of skillsA) {
                        const translatedSkill = get.translation(skill);
                        translationMap.set(translatedSkill, skill);
                    }
                    const originalSkillsInB = [];
                    for (const translatedSkill of skillsB) {
                        if (translationMap.has(translatedSkill)) {
                            originalSkillsInB.push(translationMap.get(translatedSkill));
                        }
                    }
                    return originalSkillsInB;
                },
                addSkill: async function (player, num) {
                    let skills = lib.skill.pixelzhihengL.getSkill(player, num);
                    await player.addSkill(skills);
                    game.log(player, '获得了技能<span class="greentext">' + skills.map((skill) => `【${get.translation(skill)}】`) + '</span>');
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                    },
                    threaten: 1.55,
                },
            },
            pixeljianyeL: {
                audio: ['dili_quandao', 2],
                trigger: {
                    player: 'useCardEnd',
                },
                filter(event, player) {
                    return get.type(event.card) == 'equip';
                },
                forced: true,
                async content(event, trigger, player) {
                    if (lib.skill.pixelzhihengL.testSkill(player).length > player.maxHp - 2) {
                        player.draw(2);
                    } else {
                        const { index } = await player
                            .chooseControl('随机获得一个技能', '摸2张牌')
                            .set('ai', function () {
                                let player = _status.event.player;
                                if (player.countCards('h') < player.hp) return 1;
                                if (lib.skill.pixelzhihengL.testSkill(player).length > 2) return 1;
                                return 0;
                            })
                            .forResult();
                        index ? await player.draw(2) : await lib.skill.pixelzhihengL.addSkill(player, 1);
                    }
                },
                group: ['pixeljianyeL_draw'],
                subSkill: {
                    draw: {
                        audio: ['dili_quandao', 2],
                        trigger: { player: 'phaseDrawBegin2' },
                        forced: true,
                        filter(event, player) {
                            return !event.numFixed && lib.skill.pixelzhihengL.testSkill(player).length;
                        },
                        async content(event, trigger, player) {
                            trigger.num += lib.skill.pixelzhihengL.testSkill(player).length;
                        },
                    },
                },
                mod: {
                    maxHandcard(player, num) {
                        return num + lib.skill.pixelzhihengL.testSkill(player).length;
                    },
                },
            },
            pixelrende: {
                audio: ['rerende', 2],
                trigger: {
                    global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                check(event, player) {
                    if (event.player) return get.attitude(player, event.player) > 0; //QQQ
                },
                logTarget: 'player',
                prompt(trigger) {
                    const playerL = game.filterPlayer((current) => {
                        if (current.countCards('h')) return false;
                        var evt = trigger.getl(current);
                        return evt && evt.hs && evt.hs.length;
                    });
                    return `是否对${get.translation(playerL)}发动仁德？`;
                },
                filter(event, player) {
                    return game.hasPlayer((current) => {
                        if (current.countCards('h')) return false;
                        var evt = event.getl(current);
                        return evt && evt.hs && evt.hs.length;
                    });
                },
                async content(event, trigger, player) {
                    const playerL = game.filterPlayer((current) => {
                        if (current.countCards('h')) return false;
                        var evt = trigger.getl(current);
                        return evt && evt.hs && evt.hs.length;
                    })[0];
                    await player.draw();
                    if (playerL != player) {
                        {
                            const { bool, cards } = await player.chooseCard(`选择一张牌交给${get.translation(playerL)}`, 'hes', true).forResult();
                            if (bool) await player.give(cards, playerL);
                        }
                        {
                            await player.draw();
                            const { bool, cards } = await player.chooseCard('选择一张牌作为<德>', 'hes', true).forResult();
                            player.addToExpansion(cards).gaintag.add('pixelrende');
                        }
                    } else {
                        await player.draw();
                        const { bool, cards } = await player.chooseCard('选择一张牌作为<德>', 'hes', true).forResult();
                        player.addToExpansion(cards).gaintag.add('pixelrende');
                    }
                },
                intro: {
                    markcount: 'expansion',
                    content: 'expansion',
                },
            },
            pixelzhangwu: {
                init(player) {
                    if (!player.storage.pixelzhangwu) player.storage.pixelzhangwu = true;
                },
                audio: ['sbzhangwu', 2],
                mark: true,
                zhuanhuanji: true,
                marktext: '☯',
                intro: {
                    content(storage, player, skill) {
                        let str = `<span class\="${player.storage.pixelzhangwu ? 'firetext">火' : 'thundertext">雷'}【杀】</span>`;
                        return `你可以将一张${player.storage.pixelzhangwu ? '红色' : '锦囊'}牌当${str}使用或打出`;
                    },
                },
                delay: false,
                forced: true,
                filter(event, player) {
                    const nature = player.storage.pixelzhangwu ? 'fire' : 'thunder';
                    if (event.name == 'chooseToUse' && event.type != 'phase') return false;
                    if (event.name == 'chooseToRespond' && !event.filterCard({ name: 'sha' }, player, event)) return false;
                    if (event.name == 'chooseToUse') {
                        return (
                            player.countCards('hes', (card) => {
                                const player = _status.event.player;
                                return player.storage.pixelzhangwu ? get.color(card) == 'red' : get.type2(card) == 'trick';
                            }) &&
                            game.hasPlayer(function (current) {
                                if (nature == 'fire') return player.canUse('sha', current, false, true);
                                return player.canUse('sha', current);
                            })
                        );
                    } else {
                        return player.countCards('hes', (card) => {
                            const player = _status.event.player;
                            return player.storage.pixelzhangwu ? get.color(card) == 'red' : get.type2(card) == 'trick';
                        });
                    }
                },
                enable: ['chooseToRespond', 'chooseToUse'],
                async content(event, trigger, player) {
                    const evt = event.getParent(2),
                        nature = player.storage.pixelzhangwu ? 'fire' : 'thunder',
                        card = { name: 'sha', nature: nature };
                    let str = `<span class\="${player.storage.pixelzhangwu ? 'firetext">火' : 'thundertext">雷'}【杀】</span>`;
                    if (evt.name == 'chooseToUse') {
                        const { bool, cards, targets } = await player
                            .chooseCardTarget({
                                prompt: `是否将一张${player.storage.pixelzhangwu ? '红色' : '锦囊'}牌当${str}使用或打出?`,
                                position: 'hes',
                                filterCard(card, player) {
                                    return player.storage.pixelzhangwu ? get.color(card) == 'red' : get.type2(card) == 'trick';
                                },
                                filterTarget(card, player, target) {
                                    const nature = player.storage.pixelzhangwu ? 'fire' : 'thunder';
                                    const vcard = { name: 'sha', nature: nature };
                                    if (player.storage.pixelzhangwu) return player != target;
                                    return lib.filter.targetEnabled(vcard, player, target) && lib.filter.targetInRange(vcard, player, target);
                                },
                                selectTarget() {
                                    const player = _status.event.player;
                                    const nature = player.storage.pixelzhangwu ? 'fire' : 'thunder';
                                    const card = { name: 'sha', nature: nature };
                                    return lib.filter.selectTarget(card, player);
                                },
                                ai1(card) {
                                    const val = get.value(card);
                                    if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                    return 5 - val;
                                },
                                ai2(target) {
                                    let player = _status.event.player;
                                    return get.damageEffect(target, player, player);
                                },
                            })
                            .forResult();
                        if (bool) {
                            player.useCard(card, cards, targets, true);
                            player.gainMaxHp();
                            player.changeZhuanhuanji('pixelzhangwu');
                        }
                    } else {
                        const { bool, cards } = await player
                            .chooseCard('hes', (card, player, target) => {
                                return player.storage.pixelzhangwu ? get.color(card) == 'red' : get.type2(card) == 'trick';
                            })
                            .set('prompt', () => {
                                return `是否将一张${player.storage.pixelzhangwu ? '红色' : '锦囊'}牌当${str}使用或打出?`;
                            })
                            .set('ai', function (card) {
                                const val = get.value(card);
                                if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                return 5 - val;
                            })
                            .forResult();
                        if (bool) {
                            evt.result.card = card;
                            evt.result.cards = [cards[0]];
                            player.gainMaxHp();
                            player.changeZhuanhuanji('pixelzhangwu');
                            evt.redo();
                        }
                    }
                },
                prompt() {
                    const player = _status.event.player;
                    let str = `<span class\="${player.storage.pixelzhangwu ? 'firetext">火' : 'thundertext">雷'}【杀】</span>`;
                    return `将一张${player.storage.pixelzhangwu ? '红色' : '锦囊'}牌当${str}使用或打出`;
                },
                check(card) {
                    const val = get.value(card);
                    if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                    return 5 - val;
                },
                ai: {
                    presha: true,
                    skillTagFilter(player) {
                        return player.countCards('hes', (card) => {
                            return player.storage.pixelzhangwu ? get.color(card) == 'red' : get.type2(card) == 'trick';
                        });
                    },
                    respondSha: true,
                },
            },
            pixelzhaolie: {
                audio: ['zhaolie', 2],
                enable: 'phaseUse',
                filterTarget: true,
                filter(event, player) {
                    return player.getExpansions('pixelrende').length;
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    await target.gain(player.getExpansions('pixelrende').randomGet(), 'gain2', 'log');
                    await target.draw();
                    await player.loseMaxHp();
                    player.changeZhuanhuanji('pixelzhangwu');
                },
                ai: {
                    order: 1,
                    result: {
                        player(player) {
                            if (player.maxHp == player.hp) return -1;
                            if (!player.storage.pixelzhangwu) return 0;
                            return 0.3;
                        },
                        target: 1,
                    },
                    threaten: 1.5,
                },
            },
            pixelrendeL: {
                audio: ['rerende', 2],
                trigger: {
                    global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                check(event, player) {
                    return get.attitude(player, event.player) > 0;
                },
                logTarget: 'player',
                prompt(trigger) {
                    const playerL = game.filterPlayer((current) => {
                        if (current.countCards('h') || current == _status.event.player) return false;
                        var evt = trigger.getl(current);
                        return evt && evt.hs && evt.hs.length;
                    });
                    return `是否对${get.translation(playerL)}发动仁德？`;
                },
                filter(event, player) {
                    return game.hasPlayer((current) => {
                        if (current.countCards('h') || current == player) return false;
                        var evt = event.getl(current);
                        return evt && evt.hs && evt.hs.length;
                    });
                },
                async content(event, trigger, player) {
                    const playerL = game.filterPlayer((current) => {
                        if (current.countCards('h') || current == player) return false;
                        var evt = trigger.getl(current);
                        return evt && evt.hs && evt.hs.length;
                    })[0];
                    await player.draw();
                    const { bool, cards } = await player.chooseCard(`选择一张牌交给${get.translation(playerL)}`, 'hes', true).forResult();
                    if (bool) await player.give(cards, playerL);
                },
            },
            pixelzhangwuL: {
                init(player) {
                    if (!player.storage.pixelzhangwuL) player.storage.pixelzhangwuL = true;
                },
                audio: ['sbzhangwu', 2],
                mark: true,
                zhuanhuanji: true,
                marktext: '☯',
                intro: {
                    content(storage, player, skill) {
                        let str = `<span class\="${player.storage.pixelzhangwuL ? 'firetext">火' : 'thundertext">雷'}【杀】</span>`;
                        return `你可以将一张${player.storage.pixelzhangwuL ? '红色' : '锦囊'}牌当${str}使用或打出`;
                    },
                },
                delay: false,
                forced: true,
                filter(event, player) {
                    const nature = player.storage.pixelzhangwuL ? 'fire' : 'thunder';
                    if (event.name == 'chooseToUse' && event.type != 'phase') return false;
                    if (event.name == 'chooseToRespond' && !event.filterCard({ name: 'sha' }, player, event)) return false;
                    if (event.name == 'chooseToUse') {
                        return (
                            player.countCards('hes', (card) => {
                                const player = _status.event.player;
                                return player.storage.pixelzhangwuL ? get.color(card) == 'red' : get.type2(card) == 'trick';
                            }) &&
                            game.hasPlayer(function (current) {
                                if (nature == 'fire') return player.canUse('sha', current, false, true);
                                return player.canUse('sha', current);
                            })
                        );
                    } else {
                        return player.countCards('hes', (card) => {
                            const player = _status.event.player;
                            return player.storage.pixelzhangwuL ? get.color(card) == 'red' : get.type2(card) == 'trick';
                        });
                    }
                },
                enable: ['chooseToRespond', 'chooseToUse'],
                async content(event, trigger, player) {
                    const evt = event.getParent(2),
                        nature = player.storage.pixelzhangwuL ? 'fire' : 'thunder',
                        card = { name: 'sha', nature: nature };
                    let str = `<span class\="${player.storage.pixelzhangwuL ? 'firetext">火' : 'thundertext">雷'}【杀】</span>`;
                    if (evt.name == 'chooseToUse') {
                        const { bool, cards, targets } = await player
                            .chooseCardTarget({
                                prompt: `是否将一张${player.storage.pixelzhangwuL ? '红色' : '锦囊'}牌当${str}使用或打出?`,
                                position: 'hes',
                                filterCard(card, player) {
                                    return player.storage.pixelzhangwuL ? get.color(card) == 'red' : get.type2(card) == 'trick';
                                },
                                filterTarget(card, player, target) {
                                    const nature = player.storage.pixelzhangwuL ? 'fire' : 'thunder';
                                    const vcard = { name: 'sha', nature: nature };
                                    if (player.storage.pixelzhangwuL) return player != target;
                                    return lib.filter.targetEnabled(vcard, player, target) && lib.filter.targetInRange(vcard, player, target);
                                },
                                selectTarget() {
                                    const player = _status.event.player;
                                    const nature = player.storage.pixelzhangwuL ? 'fire' : 'thunder';
                                    const card = { name: 'sha', nature: nature };
                                    return lib.filter.selectTarget(card, player);
                                },
                                ai1(card) {
                                    const val = get.value(card);
                                    if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                    return 5 - val;
                                },
                                ai2(target) {
                                    let player = _status.event.player;
                                    return get.damageEffect(target, player, player);
                                },
                            })
                            .forResult();
                        if (bool) {
                            let useCardRst = await player.useCard(card, cards, targets, true);
                            if (useCardRst.result.bool && player.getDamagedHp()) player.recover();
                            player.changeZhuanhuanji('pixelzhangwuL');
                        }
                    } else {
                        const { bool, cards } = await player
                            .chooseCard('hes', (card, player, target) => {
                                return player.storage.pixelzhangwuL ? get.color(card) == 'red' : get.type2(card) == 'trick';
                            })
                            .set('prompt', () => {
                                return `是否将一张${player.storage.pixelzhangwuL ? '红色' : '锦囊'}牌当${str}使用或打出?`;
                            })
                            .set('ai', function (card) {
                                const val = get.value(card);
                                if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                return 5 - val;
                            })
                            .forResult();
                        if (bool) {
                            evt.result.card = card;
                            evt.result.cards = [cards[0]];
                            player.changeZhuanhuanji('pixelzhangwuL');
                            evt.redo();
                        }
                    }
                },
                prompt() {
                    const player = _status.event.player;
                    let str = `<span class\="${player.storage.pixelzhangwuL ? 'firetext">火' : 'thundertext">雷'}【杀】</span>`;
                    return `将一张${player.storage.pixelzhangwuL ? '红色' : '锦囊'}牌当${str}使用或打出`;
                },
                check(card) {
                    const val = get.value(card);
                    if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                    return 5 - val;
                },
                ai: {
                    presha: true,
                    skillTagFilter(player) {
                        return player.countCards('hes', (card) => {
                            return player.storage.pixelzhangwuL ? get.color(card) == 'red' : get.type2(card) == 'trick';
                        });
                    },
                    respondSha: true,
                },
            },
            pixelzhihengU: {
                enable: 'phaseUse',
                usable: 1,
                audio: ['zhiheng', 2],
                filter(event, player) {
                    return lib.skill.pixelzhihengU.testSkill(player).length;
                },
                async content(event, trigger, player) {
                    let skills = lib.skill.pixelzhihengU.testSkill(player);
                    let dialog = lib.skill.pixelzhihengU.optionSkill(ui.create.dialog(), skills);
                    const { bool, links } = await player.chooseButton(true, dialog, [1, player.hp]).forResult();
                    if (bool) {
                        if (links.length == skills.length) {
                            await player.draw();
                        }
                        await player.removeSkill(lib.skill.pixelzhihengU.translateSkill(skills, links));
                        game.log(player, '失去了技能<span class="firetext">' + links.map((item) => `【${item}】`) + '</span>');
                        await lib.skill.pixelzhihengU.addSkill(player, links.length);
                    }
                },
                testSkill(player) {
                    let initSkill = lib.character[player.name][3].filter((skill) => skill);
                    let skills = player.getSkills(null, false, false).filter((skill) => {
                        let info = get.info(skill);
                        if (!info || get.is.empty(info) || info.charlotte) return false;
                        return !initSkill.includes(skill);
                    });
                    return skills;
                },
                getSkill(player, num) {
                    let skills = [];
                    for (var i in lib.character) {
                        if (!Object.hasOwn(lib.character[i], 3)) continue;
                        for (let j = 0; j < lib.character[i][3].length; j++) {
                            let info = lib.skill[lib.character[i][3][j]];
                            if (player.hasSkill(info)) continue;
                            if (lib.skill.pixelzhihengU.testSkill(player).includes(info)) continue;
                            if (info && (info.gainable || !info.unique)) {
                                skills.add(lib.character[i][3][j]);
                            }
                        }
                    }
                    return skills.randomGets(num);
                },
                optionSkill(dialog, skills) {
                    let translatedSkills = skills.map((skill) => get.translation(skill));
                    dialog.addText('选择技能');
                    dialog.add([translatedSkills, 'tdnodes']);
                    return dialog;
                },
                translateSkill(skillsA, skillsB) {
                    const translationMap = new Map();
                    for (const skill of skillsA) {
                        const translatedSkill = get.translation(skill);
                        translationMap.set(translatedSkill, skill);
                    }
                    const originalSkillsInB = [];
                    for (const translatedSkill of skillsB) {
                        if (translationMap.has(translatedSkill)) {
                            originalSkillsInB.push(translationMap.get(translatedSkill));
                        }
                    }
                    return originalSkillsInB;
                },
                addSkill: async function (player, num) {
                    let skills = lib.skill.pixelzhihengU.getSkill(player, num);
                    await player.addSkill(skills);
                    game.log(player, '获得了技能<span class="greentext">' + skills.map((skill) => `【${get.translation(skill)}】`) + '</span>');
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                    },
                    threaten: 1.55,
                },
            },
            pixeljianyeU: {
                audio: ['dili_quandao', 2],
                trigger: {
                    player: 'useCardEnd',
                },
                filter(event, player) {
                    return get.type(event.card) == 'equip';
                },
                forced: true,
                async content(event, trigger, player) {
                    if (lib.skill.pixelzhihengU.testSkill(player).length > player.maxHp - 3) {
                        player.draw();
                        player.addMark('pixeljianyeU_draw', false);
                    } else {
                        const { index } = await player
                            .chooseControl('随机获得一个技能', '摸一张牌')
                            .set('ai', function () {
                                let player = _status.event.player;
                                if (player.countCards('h') < player.hp) return 1;
                                if (lib.skill.pixelzhihengU.testSkill(player).length > 2) return 1;
                                return 0;
                            })
                            .forResult();
                        if (index) {
                            await player.draw();
                            player.addMark('pixeljianyeU_draw', false);
                        } else {
                            await lib.skill.pixelzhihengU.addSkill(player, 1);
                        }
                    }
                },
                group: ['pixeljianyeU_draw'],
                subSkill: {
                    draw: {
                        audio: ['dili_quandao', 2],
                        trigger: { player: 'phaseDrawBegin2' },
                        forced: true,
                        filter(event, player) {
                            return !event.numFixed && player.countMark('pixeljianyeU_draw');
                        },
                        async content(event, trigger, player) {
                            trigger.num += player.countMark('pixeljianyeU_draw');
                            player.clearMark('pixeljianyeU_draw', false);
                        },
                        marktext: '业',
                        intro: {
                            name: '统业',
                            name2: '业',
                            content: 'mark',
                        },
                    },
                },
            },
            pixelfanjian: {
                audio: ['fanjian', 2],
                init(player) {
                    if (!player.storage.pixelfanjian) player.storage.pixelfanjian = [];
                },
                enable: 'phaseUse',
                discard: false,
                delay: false,
                check(card) {
                    return 10 - get.value(card);
                },
                position: 'he',
                filterCard(card, player, target) {
                    return !player.getStorage('pixelfanjian').includes(get.type2(card));
                },
                filterTarget(card, player, target) {
                    return player != target;
                },
                async content(event, trigger, player) {
                    const cards = event.cards,
                        target = event.targets[0];
                    player.getStorage('pixelfanjian').push(get.type2(cards[0]));
                    await player.$give(cards, target, 'give');
                    target.loseHp();
                },
                group: 'pixelfanjian_draw',
                subSkill: {
                    draw: {
                        trigger: { player: 'phaseDrawBegin2' },
                        popup: false,
                        forced: true,
                        filter(event, player) {
                            return !event.numFixed && player.getStorage('pixelfanjian').length;
                        },
                        async content(event, trigger, player) {
                            trigger.num += player.getStorage('pixelfanjian').length;
                        },
                    },
                },
                ai: {
                    order: 9.1,
                    result: {
                        player(player, target) {
                            return 0.5;
                        },
                        target(player, target) {
                            return get.damageEffect(target, player) + 1;
                        },
                    },
                },
            },
            pixelyingzi: {
                audio: ['sbyingzi', 2],
                forced: true,
                trigger: {
                    player: 'phaseBegin',
                },
                async content(event, trigger, player) {
                    switch (player.getExpansions('pixelyingzi').length) {
                        case 0:
                            player.addToExpansion(get.cards(), 'draw').gaintag.add('pixelyingzi');
                            break;
                        default:
                            await player.gain(player.getExpansions('pixelyingzi'), 'gain2', 'log');
                            player.addToExpansion(get.cards(), 'draw').gaintag.add('pixelyingzi');
                            break;
                    }
                },
                group: 'pixelyingzi_use',
                subSkill: {
                    use: {
                        enable: ['chooseToUse', 'chooseToRespond'],
                        filter(event, player) {
                            return player.getExpansions('pixelyingzi').length && get.type(player.getExpansions('pixelyingzi')[0]) != 'equip';
                        },
                        chooseButton: {
                            dialog(event, player) {
                                let list = [];
                                let content = player.getExpansions('pixelyingzi');
                                content.forEach((card) => {
                                    if (event.filterCard(card, player, event)) list.push([card.suit, card.number, card.name, card.nature]);
                                });
                                return ui.create.dialog('英姿', [list, 'vcard']);
                            },
                            filter(button, player) {
                                return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                            },
                            backup(links, player) {
                                return {
                                    filterCard: () => true,
                                    position: 'hes',
                                    viewAs: { name: links[0][2], nature: links[0][3], suit: links[0][0], number: links[0][1] },
                                    precontent() { },
                                };
                            },
                            check(button) {
                                if (_status.event.parent.type != 'phase') return 1;
                                var player = _status.event.player;
                                if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                return player.getUseValue({
                                    name: button.link[2],
                                    nature: button.link[3],
                                });
                            },
                            prompt(links, player) {
                                return '选择一张牌当' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
                            },
                        },
                        hiddenCard(player, name) {
                            let list = [];
                            let content = player.getExpansions('pixelyingzi');
                            for (var i of content) {
                                list.push(i);
                            }
                            if (!list.includes(name)) return false;
                            return player.countCards('hes');
                        },
                        ai: {
                            order: 7,
                        },
                    },
                },
                mark: true,
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
            },
            pixelyanyan: {
                audio: ['yeyan', 3],
                audio: 2,
                juexingji: true,
                derivation: 'pixelruijin',
                trigger: { player: 'phaseDrawAfter' },
                lastDo: true,
                forced: true,
                filter(event, player) {
                    return event.num >= 5;
                },
                async content(event, trigger, player) {
                    const targets = game.filterPlayer((current) => {
                        return current.isLinked();
                    });
                    player.loseMaxHp();
                    player.chooseDrawRecover(2, true);
                    if (targets.length) targets.randomGet().damage('fire');
                    player.removeSkill('pixelfanjian');
                    player.addSkill('pixelruijin');
                    player.awakenSkill('pixelyanyan');
                },
            },
            pixelruijin: {
                audio: ['dcsbronghuo', 2],
                enable: 'phaseUse',
                init(player) {
                    if (!player.storage.pixelruijin) player.storage.pixelruijin = [];
                },
                filterCard: true,
                filter(event, player) {
                    return player.getStorage('pixelruijin').length + 1 <= player.countCards('hes');
                },
                check(card) {
                    return 10 - get.value(card);
                },
                selectCard() {
                    const player = _status.event.player;
                    return player.getStorage('pixelruijin').length + 1;
                },
                filterTarget(card, player, target) {
                    return player != target;
                },
                position: 'hes',
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        cards = event.cards,
                        types = cards.map((card) => get.type2(card));
                    await lib.skill.pixelruijin.damage(player, target);
                    types.forEach((type) => player.getStorage('pixelruijin').add(type));
                    player.when({ player: 'phaseEnd' }).then(() => {
                        player.storage.pixelruijin = [];
                    });
                },
                damage: async function (player, target) {
                    const num = 3 - player.getStorage('pixelruijin').length;
                    if (num > 0) await player.draw(num);
                    await target.damage();
                },
                group: 'pixelruijin_damage',
                subSkill: {
                    damage: {
                        trigger: {
                            player: 'damageEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            if (player == _status.currentPhase) return false;
                            return player.getStorage('pixelruijin').length + 1 <= player.countCards('hes');
                        },
                        async content(event, trigger, player) {
                            const { bool, cards } = await player
                                .chooseCard(`选择弃置牌,对${get.translation(_status.currentPhase)}造成一点伤害`, lib.skill.pixelruijin.position, player.getStorage('pixelruijin').length + 1)
                                .set('ai', (card) => {
                                    return 10 - get.value(card);
                                })
                                .forResult();
                            if (bool) {
                                await player.discard(cards);
                                await lib.skill.pixelruijin.damage(player, _status.currentPhase);
                                const types = cards.map((card) => get.type2(card));
                                types.forEach((type) => player.getStorage('pixelruijin').add(type));
                            }
                            player.when({ player: 'phaseEnd' }).then(() => {
                                player.storage.pixelruijin = [];
                            });
                        },
                    },
                },
                ai: {
                    order: 8.5,
                    result: {
                        player: 1,
                        target(player, target) {
                            return get.damageEffect(target, player);
                        },
                    },
                },
            },
            pixelfanjianL: {
                usable: 1,
                enable: 'phaseUse',
                discard: false,
                delay: false,
                check(card) {
                    return 10 - get.value(card);
                },
                position: 'he',
                filterCard: true,
                filter(event, player) {
                    return player.countCards('hes') >= Math.min(player.getExpansions('pixelyingziL').length + 1, player.maxHp);
                },
                selectCard() {
                    const player = _status.event.player;
                    return Math.min(player.getExpansions('pixelyingziL').length + 1, player.maxHp);
                },
                filterTarget(card, player, target) {
                    return player != target;
                },
                async content(event, trigger, player) {
                    const cards = event.cards,
                        target = event.targets[0];
                    await player.$give(cards, target, 'give');
                    await target.loseHp();
                    player.gain(player.getExpansions('pixelyingziL'), 'gain2', 'log');
                },
                ai: {
                    order: 1,
                    result: {
                        player(player, target) {
                            return 0.5;
                        },
                        target(player, target) {
                            return get.damageEffect(target, player) + 1;
                        },
                    },
                },
            },
            pixelyingziL: {
                audio: ['sbyingzi', 2],
                forced: true,
                trigger: {
                    player: 'phaseBegin',
                },
                async content(event, trigger, player) {
                    player.addToExpansion(get.cards(2), 'draw').gaintag.add('pixelyingziL');
                },
                group: 'pixelyingziL_use',
                subSkill: {
                    use: {
                        enable: ['chooseToUse', 'chooseToRespond'],
                        filter(event, player) {
                            return player.getExpansions('pixelyingziL').length && !player.hasSkill('pixelyingziL_nouse') && player.countCards('hes');
                        },
                        chooseButton: {
                            dialog(event, player) {
                                let list = [];
                                let content = player.getExpansions('pixelyingziL');
                                content.forEach((card) => {
                                    if (event.filterCard(card, player, event)) list.push([card.suit, card.number, card.name, card.nature]);
                                });
                                return ui.create.dialog('英姿', [list, 'vcard']);
                            },
                            filter(button, player) {
                                return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                            },
                            backup(links, player) {
                                return {
                                    filterCard: () => true,
                                    position: 'hes',
                                    viewAs: { name: links[0][2], nature: links[0][3], suit: links[0][0], number: links[0][1] },
                                    precontent() {
                                        player.addTempSkill('pixelyingziL_nouse');
                                        player.draw('nodelay');
                                    },
                                };
                            },
                            check(button) {
                                if (_status.event.parent.type != 'phase') return 1;
                                var player = _status.event.player;
                                if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                return player.getUseValue({
                                    name: button.link[2],
                                    nature: button.link[3],
                                });
                            },
                            prompt(links, player) {
                                return '选择一张牌当' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
                            },
                        },
                        hiddenCard(player, name) {
                            let list = [];
                            let content = player.getExpansions('pixelyingziL');
                            for (var i of content) {
                                list.push(i);
                            }
                            if (!list.includes(name)) return false;
                            return player.countCards('hes');
                        },
                        ai: {
                            order: 7,
                        },
                    },
                    nouse: {},
                },
                mark: true,
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
            },
            pixelqiongying: {
                audio: ['dcqiongying', 2],
                usable: 1,
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return player != target && target.countCards('h') - player.countCards('h') <= player.hp + player.countCards('h');
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.storage.pixelqiongying = target;
                    await player.swapHandcards(target);
                    player
                        .when({ player: 'phaseJieshuBegin' })
                        .filter((evt, player) => player.storage.pixelqiongying.isAlive())
                        .then(() => {
                            player.swapHandcards(player.storage.pixelqiongying);
                            delete player.storage.pixelqiongying;
                        });
                },
                ai: {
                    order: 7,
                    result: {
                        target(player, target) {
                            return get.damageEffect(target, player) + (target.countCards('h') - player.countCards('h'));
                        },
                    },
                },
            },
            pixelnuanhui: {
                audio: ['dcnuanhui', 2],
                trigger: { global: 'phaseDiscardBefore' },
                filter(event, player) {
                    return player.countCards('hes') >= event.player.getDamagedHp();
                },
                check(event, player) {
                    return (get.attitude(player, event.player) > 0 && event.player.needsToDiscard() > event.player.getDamagedHp()) || (get.attitude(player, event.player) < 0 && event.player.needsToDiscard() <= event.player.getDamagedHp());
                },
                async content(event, trigger, player) {
                    const dhp = trigger.player.getDamagedHp();
                    if (dhp && dhp <= trigger.player.countCards('hes')) {
                        const { bool } = await player.discardPlayerCard(trigger.player, 'hes', dhp).forResult();
                        if (bool) trigger.player.addTempSkill('pixelnuanhui_add');
                    } else if (dhp == 0) {
                        trigger.player.addTempSkill('pixelnuanhui_add');
                    }
                },
                subSkill: {
                    add: {
                        mod: {
                            maxHandcard(player, num) {
                                return num + 2;
                            },
                        },
                    },
                },
            },
            pixelkunfen: {
                audio: ['kunfen', 2],
                usable: 1,
                dutySkill: true,
                derivation: ['pixelchicha', 'pixeltiaoxin', 'guanxing', 'dcqingshi'],
                enable: 'phaseUse',
                async content(event, trigger, player) {
                    player.loseHp();
                    player.draw(2).gaintag = ['pixelkunfen'];
                },
                group: ['pixelkunfen_achieve', 'pixelkunfen_fail', 'pixelkunfen_ignore'],
                subSkill: {
                    achieve: {
                        trigger: { source: 'dieAfter' },
                        forced: true,
                        async content(event, trigger, player) {
                            game.log(player, '成功完成使命');
                            player.loseMaxHp();
                            player.addSkills(['pixelchicha', 'dcqingshi']);
                            player.awakenSkill('pixelkunfen');
                        },
                    },
                    fail: {
                        trigger: { player: 'dying' },
                        forced: true,
                        async content(event, trigger, player) {
                            game.log(player, '使命失败');
                            await player.gainMaxHp();
                            player.hp = player.maxHp;
                            player.addSkills(['pixeltiaoxin', 'guanxing']);
                            player.awakenSkill('pixelkunfen');
                        },
                    },
                    ignore: {
                        charlotte: true,
                        onremove(player) {
                            player.removeGaintag('pixelkunfen');
                        },
                        mod: {
                            ignoredHandcard(card, player) {
                                if (card.hasGaintag('pixelkunfen')) return true;
                            },
                            cardDiscardable(card, player, name) {
                                if (name == 'phaseDiscard' && card.hasGaintag('pixelkunfen')) return false;
                            },
                        },
                    },
                },
                ai: {
                    order: 7,
                    result: {
                        player: 1,
                    },
                },
            },
            pixelchicha: {
                audio: ['kanpo', 2],
                init(player) {
                    if (!player.storage.pixelchicha) player.storage.pixelchicha = [[], []];
                },
                trigger: { global: 'useCard' },
                filter(event, player) {
                    if (!player.getStorage('pixelchicha')[0].includes(event.player)) return false;
                    return player.getStorage('pixelchicha')[1].includes(event.card.name);
                },
                async content(event, trigger, player) {
                    const target = trigger.player,
                        name = trigger.card.name;
                    trigger.targets.length = 0;
                    trigger.all_excluded = true;
                    const del = (arr, player, target) => {
                        let index = arr.indexOf(target);
                        if (index !== -1) {
                            arr.splice(index, 1);
                        }
                    };
                    del(player.getStorage('pixelchicha')[0], player, target);
                    del(player.getStorage('pixelchicha')[1], player, name);
                    if (player.getStorage('pixelchicha')[1].length) player.draw(player.getStorage('pixelchicha')[1].length, 'nodelay');
                },
                group: 'pixelchicha_add',
                subSkill: {
                    add: {
                        trigger: { player: 'phaseJieshuBegin' },
                        async content(event, trigger, player) {
                            const { bool, targets } = await player
                                .chooseTarget(function (card, player, target) {
                                    return player != target;
                                })
                                .set('ai', function (target) {
                                    return -get.attitude(player, target);
                                })
                                .forResult();
                            if (bool) {
                                let list = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    let type = get.type(lib.inpile[i]);
                                    list.push([get.translation(type), '', lib.inpile[i]]);
                                }
                                const { bool, links } = await player
                                    .chooseButton([get.prompt('pixelchicha'), [list, 'vcard']])
                                    .set('ai', function (button) {
                                        var rand = _status.event.rand;
                                        switch (button.link[2]) {
                                            case 'sha':
                                                return 5 + rand[1];
                                            case 'tao':
                                                return 4 + rand[2];
                                            case 'lebu':
                                                return 3 + rand[3];
                                            case 'shan':
                                                return 4.5 + rand[4];
                                            case 'wuzhong':
                                                return 4 + rand[5];
                                            case 'shunshou':
                                                return 3 + rand[6];
                                            case 'nanman':
                                                return 2 + rand[7];
                                            case 'wanjian':
                                                return 2 + rand[8];
                                            default:
                                                return rand[0];
                                        }
                                    })
                                    .set('rand', [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()])
                                    .forResult();
                                if (bool) {
                                    player.getStorage('pixelchicha')[0].push(targets[0]);
                                    player.getStorage('pixelchicha')[1].push(links[0][2]);
                                }
                            }
                        },
                    },
                },
                mark: true,
                intro: {
                    mark(dialog, storage, player) {
                        if (player.getStorage('pixelchicha')[0].length) {
                            dialog.addText('已记录角色');
                            dialog.addSmall([storage[0].map((player) => player.name), 'character']);
                        }
                        if (player.getStorage('pixelchicha')[1].length) {
                            dialog.addText('已记录卡牌');
                            dialog.addSmall([storage[1], 'vcard']);
                        }
                    },
                },
                ai: {
                    result: {
                        player: 1,
                    },
                },
            },
            pixeltiaoxin: {
                audio: ['tiaoxin', 2],
                trigger: { player: 'useCardAfter' },
                forced: true,
                async content(event, trigger, player) {
                    const { bool, targets } = await player
                        .chooseTarget(function (card, player, target) {
                            return player != target && target.countCards('he');
                        })
                        .set('ai', function (target) {
                            return -get.attitude(player, target);
                        })
                        .forResult();
                    if (bool) {
                        const { bool, cards } = await player.discardPlayerCard(targets[0], 'he').forResult();
                        if (bool) {
                            if (cards[0].name != 'sha') {
                                player.gain(cards, 'gain2', 'log');
                                targets[0].damage();
                            } else {
                                const { bool, targets } = await player
                                    .chooseTarget()
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    })
                                    .forResult();
                                if (bool) {
                                    targets[0].gain(cards, 'gain2', 'log');
                                }
                            }
                        }
                    }
                },
            },
            pixelchichaL: {
                audio: ['kanpo', 2],
                init(player) {
                    if (!player.storage.pixelchichaL) player.storage.pixelchichaL = [[], []];
                },
                trigger: { global: 'useCard' },
                filter(event, player) {
                    if (!player.getStorage('pixelchichaL')[0].includes(event.player)) return false;
                    return player.getStorage('pixelchichaL')[1].includes(event.card.name);
                },
                async content(event, trigger, player) {
                    const target = trigger.player,
                        name = trigger.card.name;
                    trigger.targets.length = 0;
                    trigger.all_excluded = true;
                    const del = (arr, player, target) => {
                        let index = arr.indexOf(target);
                        if (index !== -1) {
                            arr.splice(index, 1);
                        }
                    };
                    del(player.getStorage('pixelchichaL')[0], player, target);
                    del(player.getStorage('pixelchichaL')[1], player, name);
                    if (player.getStorage('pixelchichaL')[1].length) player.draw(player.getStorage('pixelchichaL')[1].length, 'nodelay');
                },
                group: 'pixelchichaL_add',
                subSkill: {
                    add: {
                        trigger: { player: 'phaseZhunbeiBegin' },
                        async content(event, trigger, player) {
                            const { bool, targets } = await player
                                .chooseTarget('选择至多3名其他角色', [1, 3], function (card, player, target) {
                                    return player != target;
                                })
                                .set('ai', function (target) {
                                    return -get.attitude(player, target);
                                })
                                .forResult();
                            if (bool) {
                                let list = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    let type = get.type(lib.inpile[i]);
                                    list.push([get.translation(type), '', lib.inpile[i]]);
                                }
                                const { bool, links } = await player
                                    .chooseButton(true, targets.length, [get.prompt('pixelchichaL'), [list, 'vcard']])
                                    .set('ai', function (button) {
                                        let rand = _status.event.rand;
                                        switch (button.link[2]) {
                                            case 'sha':
                                                return 5 + rand[1];
                                            case 'tao':
                                                return 4 + rand[2];
                                            case 'lebu':
                                                return 3 + rand[3];
                                            case 'shan':
                                                return 4.5 + rand[4];
                                            case 'wuzhong':
                                                return 4 + rand[5];
                                            case 'shunshou':
                                                return 3 + rand[6];
                                            case 'nanman':
                                                return 2 + rand[7];
                                            case 'wanjian':
                                                return 2 + rand[8];
                                            default:
                                                return rand[0];
                                        }
                                    })
                                    .set('rand', [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()])
                                    .forResult();
                                if (bool) {
                                    for (var i = 0; i < targets.length; i++) {
                                        player.getStorage('pixelchichaL')[0].push(targets[i]);
                                        player.getStorage('pixelchichaL')[1].push(links[i][2]);
                                    }
                                }
                            }
                        },
                    },
                },
                mark: true,
                intro: {
                    mark(dialog, storage, player) {
                        if (player.getStorage('pixelchichaL')[0].length) {
                            dialog.addText('已记录角色');
                            dialog.addSmall([storage[0].map((player) => player.name), 'character']);
                        }
                        if (player.getStorage('pixelchichaL')[1].length) {
                            dialog.addText('已记录卡牌');
                            dialog.addSmall([storage[1], 'vcard']);
                        }
                    },
                },
                ai: {
                    result: {
                        player: 1,
                    },
                },
            },
            pixelguanxingL: {
                audio: ['guanxing', 2],
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                filter(event, player) {
                    return Array.from(new Set(player.getStorage('pixelchichaL')[0])).length;
                },
                async content(event, trigger, player) {
                    const num = Array.from(new Set(player.getStorage('pixelchichaL')[0])).length;
                    await player.chooseToGuanxing(num);
                    player.draw(num, 'bottom');
                },
            },
            pixelchichaU: {
                audio: ['kanpo', 2],
                init(player) {
                    if (!player.storage.pixelchichaU) player.storage.pixelchichaU = [[], []];
                },
                trigger: { global: 'useCard' },
                filter(event, player) {
                    if (!player.getStorage('pixelchichaU')[0].includes(event.player)) return false;
                    return player.getStorage('pixelchichaU')[1].includes(event.card.name);
                },
                async content(event, trigger, player) {
                    const target = trigger.player,
                        name = trigger.card.name;
                    trigger.targets.length = 0;
                    trigger.all_excluded = true;
                    const del = (arr, player, target) => {
                        let index = arr.indexOf(target);
                        if (index !== -1) {
                            arr.splice(index, 1);
                        }
                    };
                    del(player.getStorage('pixelchichaU')[0], player, target);
                    del(player.getStorage('pixelchichaU')[1], player, name);
                    player.draw('nodelay');
                },
                group: 'pixelchichaU_add',
                subSkill: {
                    add: {
                        enable: 'phaseUse',
                        usable: 1,
                        audio: ['sbkanpo', 2],
                        filterTarget(card, player, target) {
                            return player != target;
                        },
                        async content(event, trigger, player) {
                            const target = event.targets[0];
                            let list = [];
                            for (var i = 0; i < lib.inpile.length; i++) {
                                let type = get.type(lib.inpile[i]);
                                if (type == 'equip') continue;
                                list.push([get.translation(type), '', lib.inpile[i]]);
                            }
                            const { bool, links } = await player
                                .chooseButton([get.prompt('pixelchichaU'), [list, 'vcard']])
                                .set('ai', function (button) {
                                    let rand = _status.event.rand;
                                    switch (button.link[2]) {
                                        case 'sha':
                                            return 5 + rand[1];
                                        case 'tao':
                                            return 4 + rand[2];
                                        case 'lebu':
                                            return 3 + rand[3];
                                        case 'shan':
                                            return 4.5 + rand[4];
                                        case 'wuzhong':
                                            return 4 + rand[5];
                                        case 'shunshou':
                                            return 3 + rand[6];
                                        case 'nanman':
                                            return 2 + rand[7];
                                        case 'wanjian':
                                            return 2 + rand[8];
                                        default:
                                            return rand[0];
                                    }
                                })
                                .set('rand', [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()])
                                .forResult();
                            if (bool) {
                                player.getStorage('pixelchichaU')[0].push(target);
                                player.getStorage('pixelchichaU')[1].push(links[0][2]);
                            }
                        },
                        ai: {
                            order: 10,
                            result: {
                                target(player, target) {
                                    return get.damageEffect(target, player) + (target.countCards('h') - player.countCards('h'));
                                },
                            },
                        },
                    },
                },
                mark: true,
                intro: {
                    mark(dialog, storage, player) {
                        if (player.getStorage('pixelchichaU')[0].length) {
                            dialog.addText('已记录角色');
                            dialog.addSmall([storage[0].map((player) => player.name), 'character']);
                        }
                        if (player.getStorage('pixelchichaU')[1].length) {
                            dialog.addText('已记录卡牌');
                            dialog.addSmall([storage[1], 'vcard']);
                        }
                    },
                    markcount(storage, player) {
                        return storage[1].length;
                    },
                },
                ai: {
                    result: {
                        player: 1,
                    },
                },
            },
            pixelguanxingU: {
                init(player) {
                    if (!player.storage.pixelchichaU) player.storage.pixelchichaU = [[], []];
                }, //QQQ
                audio: ['guanxing', 2],
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                filter(event, player) {
                    return Array.from(new Set(player.getStorage('pixelchichaU')[0])).length;
                },
                async content(event, trigger, player) {
                    const num = Array.from(new Set(player.getStorage('pixelchichaU')[0])).length;
                    await player.chooseToGuanxing(num);
                },
            },
            pixelbazhenU: {
                init(player) {
                    if (!player.storage.pixelchichaU) player.storage.pixelchichaU = [[], []];
                }, //QQQ
                forced: true,
                firstDo: true,
                trigger: { player: ['chooseToRespondBegin', 'chooseToUseBegin'] },
                filter(event, player) {
                    if (event.responded) return false;
                    if (event.pixelbazhenU) return false;
                    if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                    if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                    return true;
                },
                audio: ['bagua_skill', 2],
                check(event, player) {
                    if (event && (event.ai || event.ai1)) {
                        var ai = event.ai || event.ai1;
                        var tmp = _status.event;
                        _status.event = event;
                        var result = ai({ name: 'shan' }, _status.event.player, event);
                        _status.event = tmp;
                        return result > 0;
                    }
                    return true;
                },
                content() {
                    'step 0';
                    trigger.pixelbazhenU = true;
                    player.judge('pixelbazhenU', function (card) {
                        return !player.getStorage('pixelchichaU')[1].includes(card.name) ? 1.5 : -0.5;
                    }).judge2 = function (result) {
                        return result.bool;
                    };
                    ('step 1');
                    if (result.judge > 0) {
                        player.getStorage('pixelchichaU')[1].push(result.card.name);
                        trigger.untrigger();
                        trigger.set('responded', true);
                        trigger.result = { bool: true, card: { name: 'shan' } };
                    }
                },
                ai: {
                    respondShan: true,
                },
            },
            pixelquanmou: {
                audio: ['jianshu', 2],
                enable: 'phaseUse',
                filterTarget: true,
                filter(event, player) {
                    return !player.storage.pixelquanmou;
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    const cards = Array.from(ui.cardPile.childNodes).randomGets(3);
                    const { bool, links } = await player
                        .chooseButton(true, ['权谋:选择一张获得之', cards])
                        .set('ai', function (button) {
                            return player.getUseValue(button.link);
                        })
                        .forResult();
                    if (bool) {
                        player.storage.pixelquanmou = links;
                        await target.gain(links, 'gain2', 'log');
                        player
                            .when({ player: 'useCard' })
                            .filter((event) => {
                                return event.card.name == player.storage.pixelquanmou[0].name;
                            })
                            .then(() => {
                                let links = player.storage.pixelquanmou;
                                switch (get.type(links[0])) {
                                    case 'equip':
                                        game.players.slice(1).randomGet().randomDiscard('hejs');
                                        break;
                                    case 'trick':
                                        trigger.effectCount++;
                                        game.log(trigger.card, '额外结算一次');
                                        break;
                                    case 'basic':
                                        player.draw();
                                        break;
                                }
                                delete player.storage.pixelquanmou;
                            });
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        target: 1,
                    },
                },
                mark: true,
                marktext: '权',
                intro: {
                    name: '权谋',
                    content(storage, player) {
                        if (!player.storage.pixelquanmou) return 'O';
                        return get.translation(player.storage.pixelquanmou[0].name)[0];
                    },
                    markcount(storage, player) {
                        if (!player.storage.pixelquanmou) return 'O';
                        return get.translation(player.storage.pixelquanmou[0].name)[0];
                    },
                },
                mod: {
                    aiOrder(player, card, numx) {
                        const links = player.storage.pixelquanmou;
                        if (links) {
                            if (card.name == links[0].name) return 10;
                        }
                    },
                },
            },
            pixelzhaji: {
                audio: ['yongdi', 2],
                enable: 'phaseUse',
                limited: true,
                filterTarget: true,
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    target.addSkill('pixelzhaji_add');
                    player.awakenSkill('pixelzhaji');
                },
                ai: {
                    order: 1,
                    result: {
                        player(player, target) {
                            return ((game.roundNumber - game.players.length) * game.players.length) / game.roundNumber - 1;
                        },
                        target(player, target) {
                            return ((game.players.length - game.roundNumber - 1) * get.damageEffect(target, player) * game.players.length) / game.roundNumber;
                        },
                    },
                },
            },
            pixelzhaji_add: {
                audio: ['zhaohan', 2],
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                firstDo: true,
                async content(event, trigger, player) {
                    const num = game.roundNumber,
                        playerLength = game.players.length;
                    if (!player.storage.pixelzhaji_add) {
                        player.storage.pixelzhaji_add = {
                            x: Math.floor(num * num + playerLength - 1),
                            num: num,
                            y: Math.floor(playerLength * playerLength - num + 1),
                        };
                    }
                    let key = player.storage.pixelzhaji_add;
                    if (num < key.y + key.x) {
                        await player.gainMaxHp(2 * num + 1);
                        await player.draw(2 * num + 1);
                    }
                },
                group: 'pixelzhaji_add_lose',
                subSkill: {
                    lose: {
                        audio: ['zhaohan', 2],
                        trigger: { player: 'phaseJieshuBegin' },
                        forced: true,
                        filter(event, player) {
                            if (!player.storage.pixelzhaji_add) return false;
                            let key = player.storage.pixelzhaji_add;
                            return game.roundNumber < key.y + key.x + key.num;
                        },
                        async content(event, trigger, player) {
                            let key = player.storage.pixelzhaji_add;
                            player.loseMaxHp(2 * game.players.length - 1);
                            if (game.roundNumber == key.y + key.x + key.num) {
                                player.removeSkill('pixelzhaji_add');
                            }
                        },
                    },
                },
            },
            pixelquanmouL: {
                audio: ['jianshu', 2],
                enable: 'phaseUse',
                usable: 1,
                async content(event, trigger, player) {
                    const cards = Array.from(ui.cardPile.childNodes).randomGets(3);
                    const { bool, links } = await player
                        .chooseButton(['权谋:选择一张获得之', cards])
                        .set('ai', function (button) {
                            return player.getUseValue(button.link);
                        })
                        .forResult();
                    if (bool) {
                        player.storage.pixelquanmouL = links;
                        await player.gain(links, 'gain2', 'log');
                        player
                            .when({ player: 'useCard' })
                            .filter((event) => {
                                return event.card.name == player.storage.pixelquanmouL[0].name;
                            })
                            .then(() => {
                                let links = player.storage.pixelquanmouL;
                                switch (get.type(links[0])) {
                                    case 'equip':
                                        game.players.slice(1).randomGet().randomDiscard('hejs');
                                        break;
                                    case 'trick':
                                        trigger.effectCount++;
                                        game.log(trigger.card, '额外结算一次');
                                        break;
                                    case 'basic':
                                        player.draw();
                                        break;
                                }
                                delete player.storage.pixelquanmouL;
                            });
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player: 1,
                    },
                },
                mark: true,
                marktext: '权',
                intro: {
                    name: '权谋',
                    content(storage, player) {
                        if (!player.storage.pixelquanmouL) return 'O';
                        return get.translation(player.storage.pixelquanmouL[0].name)[0];
                    },
                    markcount(storage, player) {
                        if (!player.storage.pixelquanmouL) return 'O';
                        return get.translation(player.storage.pixelquanmouL[0].name)[0];
                    },
                },
                mod: {
                    aiOrder(player, card, numx) {
                        const links = player.storage.pixelquanmouL;
                        if (links) {
                            if (card.name == links[0].name) return 10;
                        }
                    },
                },
            },
            pixelweimuL: {
                audio: ['weimu', 2],
                forced: true,
                zhuanhuanji: true,
                mark: true,
                marktext: '☯',
                trigger: { player: 'phaseBegin' },
                init(player) {
                    if (!player.storage.pixelweimuL) player.storage.pixelweimuL = true;
                },
                filter(event, player) {
                    return (player.countCards('j', { color: 'red' }) && player.storage.pixelweimuL) || (player.countCards('j', { color: 'black' }) && !player.storage.pixelweimuL);
                },
                async content(event, trigger, player) {
                    if ((player.countCards('j', { color: 'red' }) && player.storage.pixelweimuL) || (player.countCards('j', { color: 'black' }) && !player.storage.pixelweimuL)) {
                        const result = await player.loseToDiscardpile(player.getCards('j', { color: player.storage.pixelweimuL ? 'red' : 'black' })).forResult();
                        if (result && result.cards) {
                            player.changeZhuanhuanji('pixelweimuL');
                            player.draw(result.cards.length, 'nodelay');
                        }
                    }
                },
                group: 'pixelweimuL_1',
                subSkill: {
                    1: {
                        trigger: { global: 'useCard1' },
                        audio: ['weimu', 2],
                        forced: true,
                        firstDo: true,
                        filter(event, player, card) {
                            return player.countCards('j', { color: get.color(event.card) });
                        },
                        async content(event, trigger, player) {
                            trigger.targets.remove(player);
                        },
                        mod: {
                            targetEnabled(card, player, target) {
                                if (player.countCards('j', { color: get.color(card) })) return false;
                            },
                        },
                    },
                },
            },
            pixelzhongjian: {
                audio: ['sijian', 2],
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return target.countCards('h') && !player.getStorage('pixelzhongjian').includes(target);
                },
                init(player) {
                    if (!player.storage.pixelzhongjian) player.storage.pixelzhongjian = [];
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.line(target);
                    player.getStorage('pixelzhongjian').add(target);
                    player.when({ player: 'phaseJieshuBegin' }).then(() => {
                        player.getStorage('pixelzhongjian').at(-1).damage();
                        player.line(player.getStorage('pixelzhongjian').at(-1));
                    });
                },
                group: 'pixelzhongjian_drawRecover',
                subSkill: {
                    drawRecover: {
                        audio: ['sijian', 2],
                        forced: true,
                        trigger: { target: 'useCardToTargeted' },
                        filter(event, player) {
                            return player.getStorage('pixelzhongjian').includes(event.player);
                        },
                        async content(event, trigger, player) {
                            if (trigger.player.isHealthy()) {
                                await trigger.player.draw();
                            }
                            let controls = ['draw_card'];
                            if (trigger.player.isDamaged()) {
                                controls.push('recover_hp');
                                const { control } = await player.chooseControl(controls).forResult();
                                trigger.player[control == 'draw_card' ? 'draw' : 'recover']();
                            }
                        },
                    },
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            return 0.5;
                        },
                        target(player, target) {
                            return true;
                        },
                    },
                },
            },
            pixelnalue: {
                forced: true,
                audio: ['suishi', 2],
                trigger: { player: 'useCard1' },
                filter(event, player) {
                    if (get.type(ui.cardPile.firstChild) == 'equip') return false;
                    return game.hasPlayer(function (current) {
                        return player.canUse(ui.cardPile.firstChild, current, false);
                    });
                },
                async content(event, trigger, player) {
                    const card = ui.cardPile.firstChild;
                    trigger.set('card', { name: card.name, suit: card.suit, number: card.number, nature: card.nature });
                    player.draw();
                },
            },
            pixelzhongjianL: {
                audio: ['sijian', 2],
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    const bool = game.hasPlayer(function (current) {
                        return !player.getStorage('pixelzhongjianL').includes(current);
                    });
                    return !player.getStorage('pixelzhongjianL').includes(target) && bool;
                },
                selectTarget() {
                    const player = _status.event.player;
                    const bool = game.hasPlayer(function (current) {
                        return !player.getStorage('pixelzhongjianL').includes(current);
                    });
                    return bool ? 1 : 0;
                },
                init(player) {
                    if (!player.storage.pixelzhongjianL) player.storage.pixelzhongjianL = [];
                },
                async content(event, trigger, player) {
                    if (event.targets.length) {
                        const target = event.targets[0];
                        player.line(target);
                        player.getStorage('pixelzhongjianL').add(target);
                    } else {
                        player.draw(Math.floor(Math.LOG2E * Math.log(player.getStorage('pixelzhongjianL').length)));
                    }
                },
                group: 'pixelzhongjianL_drawRecover',
                subSkill: {
                    drawRecover: {
                        audio: ['sijian', 2],
                        forced: true,
                        trigger: { global: 'useCardToTarget' },
                        filter(event, player) {
                            return player.getStorage('pixelzhongjianL').includes(event.player) && event.card.name == 'sha';
                        },
                        async content(event, trigger, player) {
                            const judgeEvent = player.judge((card) => {
                                return game.hasPlayer((current) => trigger.target.canUse(card, current, false)) && get.type(card) != 'equip' ? 0.5 : -0.5; //QQQ
                            });
                            judgeEvent.judge2 = (result) => result.bool;
                            const { card } = await judgeEvent.forResult();
                            const bool = game.hasPlayer((current) => trigger.target.canUse(card, current, false)) && get.type(card) != 'equip';
                            if (bool) {
                                trigger.set('card', { name: card.name, suit: card.suit, number: card.number, nature: card.nature });
                            } else {
                                player.gain(card, 'gain2', 'log');
                            }
                        },
                    },
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            return 0.5;
                        },
                        target(player, target) {
                            return true;
                        },
                    },
                },
            },
            pixelwuzheng: {
                audio: ['rezishou', 2],
                init(player) {
                    if (!player.storage.pixelwuzheng) player.storage.pixelwuzheng = 1;
                },
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                forced: true,
                filter(event, player) {
                    return !event.numFixed && (!player.isMaxHandcard(true) || !player.isMinHandcard(true));
                },
                async content(event, trigger, player) {
                    const num = player.getStorage('pixelwuzheng');
                    if (!player.isMaxHandcard(true)) trigger.num += num;
                    if (!player.isMinHandcard(true)) trigger.num += num;
                },
            },
            pixelzongshi: {
                init(player) {
                    if (!player.storage.pixelzongshi) player.storage.pixelzongshi = [];
                },
                audio: ['sbzongshi', 2],
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                filterTarget(card, player, target) {
                    return player != target;
                },
                check(card) {
                    return 7 - get.value(card);
                },
                position: 'he',
                discard: false,
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        cards = event.cards;
                    target.gain(cards, 'gain2', 'log');
                    player.getStorage('pixelzongshi').add(target.group);
                    player.addTempSkill('pixelzongshi_nouse', { player: 'phaseBegin' });
                },
                subSkill: {
                    nouse: {
                        mark: true,
                        intro: {
                            content(storage, player) {
                                let group = player.getStorage('pixelzongshi');
                                return get.translation(group);
                            },
                        },
                        mod: {
                            targetEnabled(card, player, target) {
                                if (target.getStorage('pixelzongshi').includes(player.group)) return false;
                            },
                            cardSavable(card, player, target) {
                                if (target.getStorage('pixelzongshi').includes(player.group)) return false;
                            },
                        },
                        onremove(player) {
                            player.storage.pixelzongshi = [];
                            player.clearMark('pixelzongshi_nouse');
                        },
                    },
                },
                ai: {
                    order: 1,
                    result: {
                        player: -1,
                        target(player, target) {
                            return get.damageEffect(target, player);
                        },
                    },
                },
            },
            pixelshiqi: {
                audio: ['sbzongshi', 2],
                derivation: 'pixelmouli',
                dutySkill: true,
                zhuanhuanji: true,
                group: ['pixelshiqi_achieveT', 'pixelshiqi_achieveF', 'pixelshiqi_failT', 'pixelshiqi_failF', 'pixelshiqi_damage', 'pixelshiqi_mark'],
                subSkill: {
                    achieveT: {
                        trigger: { player: 'phaseZhunbeiBegin' },
                        forced: true,
                        filter(event, player) {
                            return !player.storage.pixelshiqi_mark && player.getAttackRange() > 3;
                        },
                        async content(event, trigger, player) {
                            await player.gainMaxHp();
                            player.chooseDrawRecover(2, true);
                            player.addSkill('pixelmouli');
                            player.awakenSkill('pixelshiqi', true);
                        },
                    },
                    achieveF: {
                        trigger: { player: 'phaseJieshuBegin' },
                        forced: true,
                        filter(event, player) {
                            return player.storage.pixelshiqi_mark && player.getAttackRange() < 3;
                        },
                        async content(event, trigger, player) {
                            await player.gainMaxHp();
                            player.chooseDrawRecover(2, true);
                            player.storage.pixelwuzheng = 2;
                            player.awakenSkill('pixelshiqi', true);
                        },
                    },
                    failT: {
                        trigger: { player: 'phaseZhunbeiBegin' },
                        forced: true,
                        filter(event, player) {
                            return !player.storage.pixelshiqi_mark && player.countCards('h') == 0;
                        },
                        async content(event, trigger, player) {
                            player.removeSkill('pixelzongshi');
                            player.storage.pixelwuzheng = 2;
                            player.awakenSkill('pixelshiqi', true);
                        },
                    },
                    failF: {
                        trigger: { player: 'phaseZhunbeiBegin' },
                        forced: true,
                        filter(event, player) {
                            return player.storage.pixelshiqi_mark && player.countCards('h') == 0;
                        },
                        async content(event, trigger, player) {
                            player.removeSkill('pixelzongshi');
                            player.addSkill('pixelmouli');
                            player.awakenSkill('pixelshiqi', true);
                        },
                    },
                    damage: {
                        trigger: { player: 'damageEnd' },
                        forced: true,
                        lastDo: true,
                        audio: ['shibei', 2],
                        filter(event, player) {
                            return !player.getHistory('damage').indexOf(event) > 0;
                        },
                        async content(event, trigger, player) {
                            await player[player.storage.pixelshiqi_mark ? 'loseHp' : 'recover']();
                            player.changeZhuanhuanji('pixelshiqi_mark');
                        },
                    },
                    mark: {
                        init(player) {
                            if (!player.storage.pixelshiqi_mark) player.storage.pixelshiqi_mark = false;
                            player.markSkill('pixelshiqi_mark');
                        },
                        marktext: '☯',
                        intro: {
                            content(storage, player, skill) {
                                var str = player.storage.pixelshiqi_mark ? '失去' : '回复';
                                return '受到伤害后' + str + '一点体力';
                            },
                        },
                    },
                },
            },
            pixelmouli: {
                audio: ['sbzishou', 2],
                enable: 'phaseUse',
                position: 'he',
                filter(event, player) {
                    const groups = ['wei', 'shu', 'wu'];
                    return game.hasPlayer((current) => {
                        return groups.includes(current.group);
                    });
                },
                filterCard(card, player) {
                    const list = {
                        shu: { name: 'sha' },
                        wei: { name: 'shan' },
                        wu: { type: 'equip' },
                    };
                    for (var i in list) {
                        if (game.hasPlayer((current) => current.group === i)) {
                            let key = Object.keys(list[i])[0],
                                value = list[i][key];
                            if (get[key](card) === value) return true;
                        }
                    }
                },
                check(card) {
                    return 7 - get.value(card);
                },
                selectCard: [1, Infinity],
                async content(event, trigger, player) {
                    const cards = event.cards;
                    player.recast(cards);
                },
                ai: {
                    order: 1,
                    result: {
                        player: 0.5,
                    },
                },
            },
            pixelwuzhengL: {
                audio: ['rezishou', 2],
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                forced: true,
                filter(event, player) {
                    return !event.numFixed && (!player.isMaxHandcard(true) || !player.isMinHandcard(true));
                },
                async content(event, trigger, player) {
                    if (!player.isMaxHandcard(true)) trigger.num += 1;
                    if (!player.isMinHandcard(true)) trigger.num += 1;
                },
            },
            pixelzongshiL: {
                init(player) {
                    if (!player.storage.pixelzongshiL) player.storage.pixelzongshiL = [];
                },
                audio: ['sbzongshi', 2],
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                filterTarget(card, player, target) {
                    return player != target;
                },
                check(card) {
                    return 7 - get.value(card);
                },
                position: 'he',
                discard: false,
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        cards = event.cards;
                    target.gain(cards, 'gain2', 'log');
                    player.getStorage('pixelzongshiL').add(target.group);
                    player.addTempSkill('pixelzongshiL_nouse', { player: 'phaseBegin' });
                },
                subSkill: {
                    nouse: {
                        mark: true,
                        intro: {
                            content(storage, player) {
                                let group = player.getStorage('pixelzongshiL');
                                return get.translation(group);
                            },
                        },
                        mod: {
                            targetEnabled(card, player, target) {
                                if (target.getStorage('pixelzongshiL').includes(player.group)) return false;
                            },
                            cardSavable(card, player, target) {
                                if (target.getStorage('pixelzongshiL').includes(player.group)) return false;
                            },
                        },
                        onremove(player) {
                            player.storage.pixelzongshiL = [];
                            player.clearMark('pixelzongshiL_nouse');
                        },
                    },
                },
                ai: {
                    order: 1,
                    result: {
                        player: -1,
                        target(player, target) {
                            return get.damageEffect(target, player);
                        },
                    },
                },
            },
            pixelwuzhengU: {
                audio: ['rezishou', 2],
                init(player) {
                    if (!player.storage.pixelwuzhengU) player.storage.pixelwuzhengU = 1;
                },
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                forced: true,
                filter(event, player) {
                    return !event.numFixed && (!player.isMaxHandcard(true) || !player.isMinHandcard(true));
                },
                async content(event, trigger, player) {
                    const num = player.getStorage('pixelwuzhengU');
                    if (!player.isMaxHandcard(true)) trigger.num += num;
                    if (!player.isMinHandcard(true)) trigger.num += num;
                },
            },
            pixelzongshiU: {
                zhuanhuanji: true,
                init(player) {
                    if (!player.storage.pixelzongshiU) player.storage.pixelzongshiU = [];
                },
                audio: ['sbzongshi', 2],
                enable: 'phaseUse',
                filterCard(card, player, target) {
                    if (!player.storage.pixelzongshiU_mark) return true;
                    const list = {
                        shu: { name: 'sha' },
                        wei: { name: 'shan' },
                        wu: { type: 'equip' },
                    };
                    for (var i in list) {
                        if (game.hasPlayer((current) => current.group === i)) {
                            let key = Object.keys(list[i])[0],
                                value = list[i][key];
                            if (get[key](card) === value) return true;
                        }
                    }
                },
                selectCard() {
                    const player = _status.event.player;
                    if (!player.storage.pixelzongshiU_mark) return 1;
                    return [1, Infinity];
                },
                filterTarget(card, player, target) {
                    if (player.storage.pixelzongshiU_mark) return false;
                    return player != target && !player.getStorage('pixelzongshiU').includes(target.group);
                },
                selectTarget() {
                    const player = _status.event.player;
                    if (!player.storage.pixelzongshiU_mark) return 1;
                    return -1;
                },
                position: 'he',
                discard: false,
                async content(event, trigger, player) {
                    const cards = event.cards;
                    if (!player.storage.pixelzongshiU_mark) {
                        const target = event.targets[0];
                        target.gain(cards, 'gain2', 'log');
                        player.getStorage('pixelzongshiU').add(target.group);
                        player.addTempSkill('pixelzongshiU_nouse', { player: 'phaseBegin' });
                    } else {
                        player.recast(cards);
                    }
                    player.changeZhuanhuanji('pixelzongshiU_mark');
                },
                group: ['pixelzongshiU_damage', 'pixelzongshiU_mark'],
                subSkill: {
                    damage: {
                        forced: true,
                        audio: ['sbzongshi', 2],
                        trigger: { player: 'damageEnd' },
                        async content(event, trigger, player) {
                            await player[player.storage.pixelzongshiU_mark ? 'loseHp' : 'recover']();
                            player.changeZhuanhuanji('pixelzongshiU_mark');
                        },
                    },
                    nouse: {
                        mark: true,
                        intro: {
                            content(storage, player) {
                                let group = player.getStorage('pixelzongshiU');
                                return get.translation(group);
                            },
                        },
                        mod: {
                            targetEnabled(card, player, target) {
                                if (target.getStorage('pixelzongshiU').includes(player.group)) return false;
                            },
                            cardSavable(card, player, target) {
                                if (target.getStorage('pixelzongshiU').includes(player.group)) return false;
                            },
                        },
                        onremove(player) {
                            player.storage.pixelzongshiU = [];
                            player.clearMark('pixelzongshiU_nouse');
                        },
                    },
                    mark: {
                        init(player) {
                            if (!player.storage.pixelzongshiU_mark) player.storage.pixelzongshiU_mark = false;
                            player.markSkill('pixelzongshiU_mark');
                        },
                        marktext: '☯',
                        intro: {
                            content(storage, player, skill) {
                                var str = player.storage.pixelzongshiU_mark ? '失去' : '回复';
                                return '受到伤害后' + str + '一点体力';
                            },
                        },
                    },
                },
                ai: {
                    order: 1,
                    result: {
                        player(player, target) {
                            return 1;
                        },
                        target(player, target) {
                            if (!player.storage.pixelzongshiU_mark) return get.damageEffect(target, player);
                        },
                    },
                },
            },
            pixelxianzheng: {
                audio: ['xuanhuo', 2],
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                async content(event, trigger, player) {
                    const { cards: cards1 } = await player.draw(Math.floor(Math.LOG2E * Math.log(game.roundNumber + 1))).forResult();
                    const { cards } = await player
                        .chooseCard(`选择将${cards1.length}张牌置于武将牌上`, true, cards1.length, 'hes')
                        .set('ai', (card) => {
                            let val = get.value(card);
                            return 6 - val;
                        })
                        .forResult();
                    player.addToExpansion(cards, 'giveAuto').gaintag.add('pixelxianzheng');
                },
                marktext: '宪',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                group: ['pixelxianzheng_damage', 'pixelxianzheng_useCard', 'pixelxianzheng_drawRecover'],
                subSkill: {
                    damage: {
                        audio: ['reyiji', 2],
                        trigger: { player: 'damageEnd' },
                        forced: true,
                        filter(event, player) {
                            return player.getExpansions('pixelxianzheng').length;
                        },
                        async content(event, trigger, player) {
                            const cards = player.getExpansions('pixelxianzheng');
                            const { bool, links } = await player
                                .chooseButton([1, cards.length], ['请弃置任意张牌', cards])
                                .set('ai', (button) => {
                                    return 5 - _status.event.player.getUseValue(button.link);
                                })
                                .forResult();
                            if (bool) {
                                player.loseToDiscardpile(links);
                                player.draw('nodelay', links.length);
                            }
                        },
                    },
                    useCard: {
                        audio: ['dczuowei', 2],
                        trigger: {
                            player: ['useCard', 'respond'],
                        },
                        forced: true,
                        filter(event, player) {
                            return player.getExpansions('pixelxianzheng').some((card) => event.card.name === card.name);
                        },
                        async content(event, trigger, player) {
                            if ((player.getExpansions('pixelxianzheng').length - 1) % 2) {
                                trigger.baseDamage++;
                            } else if (trigger.name != 'respond') {
                                trigger.directHit.addArray(game.filterPlayer());
                            }
                            const cards = player.getExpansions('pixelxianzheng');
                            player.gain(
                                cards.find((card) => card.name == trigger.card.name),
                                'gain2',
                                'log'
                            );
                        },
                    },
                    drawRecover: {
                        audio: ['danshou', 2],
                        init(player) {
                            if (!player.storage.pixelxianzheng_drawRecover) player.storage.pixelxianzheng_drawRecover = false;
                            player.markSkill('pixelxianzheng_drawRecover');
                        },
                        zhuanhuanji: true,
                        mark: true,
                        marktext: '✪',
                        forced: true,
                        intro: {
                            content(storage, player) {
                                return player.storage.pixelxianzheng_drawRecover ? '回血' : '摸牌';
                            },
                        },
                        trigger: { global: 'phaseJieshuBegin' },
                        filter(event, player) {
                            if (player.storage.pixelxianzheng_drawRecover) return player.getDamagedHp();
                            return player.getExpansions('pixelxianzheng').length;
                        },
                        async content(event, trigger, player) {
                            player[!player.storage.pixelxianzheng_drawRecover ? 'draw' : 'recover']();
                            player.storage.pixelxianzheng_drawRecover = player.storage.pixelxianzheng_drawRecover ? false : true;
                        },
                    },
                },
            },
            pixellixian: {
                audio: ['dccuijin', 2],
                juexingji: true,
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                derivation: 'pixelsuli',
                filter(event, player) {
                    return player.getExpansions('pixelxianzheng').length >= 3;
                },
                async content(event, trigger, player) {
                    const { targets } = await player
                        .chooseTarget(true, '选择一名角色减一点体力上限')
                        .set('ai', function (target) {
                            return -get.attitude(_status.event.player, target);
                        })
                        .forResult();
                    targets[0].loseMaxHp(Math.max(1, targets[0].maxHp - 1));
                    player.chooseDrawRecover(2, true);
                    const target = game.players.filter((player) => player.group != 'shu').randomGet();
                    if (target) {
                        target.damage();
                        player.line(target);
                    }
                    player.addSkill('pixelsuli');
                    player.awakenSkill('pixellixian');
                },
            },
            pixelsuli: {
                audio: ['paiyi', 2],
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.getExpansions('pixelxianzheng').length > 1;
                },
                async content(event, trigger, player) {
                    const cards = player.getExpansions('pixelxianzheng');
                    const { bool, links } = await player
                        .chooseButton(['请弃置一张牌', cards])
                        .set('ai', (button) => {
                            return 5 - _status.event.player.getUseValue(button.link);
                        })
                        .forResult();
                    if (bool) {
                        await player.loseToDiscardpile(links);
                        const cards = player.getExpansions('pixelxianzheng');
                        let types = [...new Set(cards.flatMap((card) => get.type2(card)))];
                        player.draw('nodelay', types.length + 1).gaintag = ['pixelsuli'];
                        player.addTempSkill('pixelsuli_mod');
                    }
                },
                ai: {
                    order(item, player) {
                        const cards = player.getExpansions('pixelxianzheng');
                        let length = [...new Set(cards.flatMap((card) => get.type2(card)))].length;
                        if (length <= cards.length) return 8;
                        return 1;
                    },
                    result: {
                        player: 1,
                    },
                },
                subSkill: {
                    mod: {
                        charlotte: true,
                        mod: {
                            ignoredHandcard(card, player) {
                                if (card.hasGaintag('pixelsuli')) return true;
                            },
                            cardDiscardable(card, player, name) {
                                if (name == 'phaseDiscard' && card.hasGaintag('pixelsuli')) return false;
                            },
                        },
                        onremove(player) {
                            player.removeGaintag('pixelsuli');
                        },
                    },
                },
            },
            //俞涛
            xichang: {
                audio: 'ext:狂澜异世/audio:1:mp3',
                trigger: {
                    global: 'phaseUseBegin',
                },
                forced: true,
                filter(event, player) {
                    return event.player != player && _status.currentPhase.countCards('h');
                },
                async content(event, trigger, player) {
                    const cplayer = _status.currentPhase;
                    await cplayer.showHandcards();
                    if (cplayer.countCards('h', { color: 'black' })) {
                        let hsCards = cplayer.getCards('h', { color: 'black' });
                        cplayer.addToExpansion(hsCards, cplayer, 'giveAuto').gaintag.add('changshi');
                        cplayer.addSkill('changshi');
                    }
                },
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                ai: {
                    result: {
                        player: -0.5,
                    },
                },
            },
            changshi: {
                audio: 'ext:狂澜异世/audio:1:mp3',
                trigger: {
                    global: 'phaseEnd',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return player.getExpansions('changshi').length;
                },
                async content(event, trigger, player) {
                    let cards = player.getExpansions('changshi');
                    player.gain(cards[0], 'draw');
                    game.log(player, '收回了第' + get.cnNumber(cards.length) + '张<屎>牌');
                },
                intro: {
                    markcount: 'expansion',
                    mark(dialog, storage, player) {
                        let cards = player.getExpansions('changshi');
                        if (player.isUnderControl(true)) dialog.addAuto(cards);
                        else return '共有' + get.cnNumber(cards.length) + '张屎牌';
                    },
                },
                mod: {
                    maxHandcard(player, num) {
                        return num - _status.currentPhase.getExpansions('changshi').length;
                    },
                },
            },
            shouzhi: {},
            zhile: {
                audio: 'ext:狂澜异世/audio:1:mp3',
                trigger: {
                    player: 'dieBegin',
                },
                notemp: true,
                forced: true,
                filter(event, player) {
                    return event.source && event.source.isIn();
                },
                async content(event, trigger, player) {
                    if (trigger.source.getExpansions('changshi')) {
                        let cards = trigger.source.getExpansions('changshi');
                        trigger.source.loseHp(cards.length);
                    }
                },
                ai: {
                    maixie_defend: true,
                    threaten(player, target) {
                        if (target.hp == 1) return 0.2;
                        return 1.5;
                    },
                    effect: {
                        target(card, player, target, current) {
                            if (!target.hasFriend()) return;
                            if (target.hp <= 1 && get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return 3;
                                return [1, 0, 0, -3 * get.threaten(player)];
                            }
                        },
                    },
                },
            },
            //华强
            bigdao: {
                audio: 'ext:狂澜异世/audio:1:mp3',
                shaRelated: true,
                trigger: {
                    player: 'useCardToPlayered',
                },
                filter(event, player) {
                    return event.card.name == 'sha';
                },
                logTarget: 'target',
                preHidden: true,
                async content(event, trigger, player) {
                    let target = trigger.target;
                    if (!target.hasSkill('liuxue')) target.addSkill('liuxue');
                    target.addMark('liuxue');
                },
            },
            liuxue: {
                audio: 'ext:狂澜异世/audio:1:mp3',
                trigger: {
                    global: 'useCardAfter',
                },
                marktext: '流',
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return player.countMark('liuxue') > 0;
                },
                async content(event, trigger, player) {
                    player.loseHp(player.countMark('liuxue'));
                },
                intro: {
                    content(storage, player, skill) {
                        return '当前有' + storage + '个<流血>标记';
                    },
                },
            },
            yingbian: {
                audio: "'ext:狂澜异世/audio:1:mp3'",
                mark: true,
                forced: true,
                zhuanhuanji: true,
                marktext: '☯',
                intro: {
                    content(storage, player, skill) {
                        if (player.storage.yingbian == true) return '【阴】:若你没有【闪】,防止此伤害';
                        return '【阳】:若你没有【杀】,防止此伤害';
                    },
                },
                group: 'yingbian_1',
                subSkill: {
                    1: {
                        audio: 'ext:狂澜异世/audio:2:mp3',
                        forced: true,
                        trigger: {
                            player: 'damageBegin4',
                        },
                        filter(event, player) {
                            return (!player.countCards('h', 'sha') && !player.storage.yingbian) || (!player.countCards('h', 'shan') && player.storage.yingbian == true);
                        },
                        async content(event, trigger, player) {
                            const { bool } = await player.chooseBool(get.prompt('yingbian'), '是否发动<应变>,制衡所有手牌,免疫此次伤害').forResult();
                            if (bool) {
                                let hs = player.countCards('h');
                                player.discard(player.getCards('h'), true);
                                player.draw(hs);
                                trigger.cancel();
                                player.changeZhuanhuanji('yingbian');
                            }
                        },
                    },
                },
            },
            dianlu: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                mod: {
                    cardname(card, player) {
                        let type = get.subtype(card, false);
                        if (type == 'equip3' || type == 'equip4' || type == 'equip6') return 'jiu';
                    },
                    globalFrom(from, to, distance) {
                        return distance - 2;
                    },
                },
            },
            //保国
            lightningwhip: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                enable: 'phaseUse',
                filter(event, player) {
                    let num = player.getAttackRange();
                    if ((player.getStat().skill.lightningwhip || 0) >= num) return false;
                    return player.countCards('he', { color: 'black' }) > 0;
                },
                filterTarget: true,
                position: 'he',
                check(card) {
                    return 7 - get.value(card);
                },
                filterCard: {
                    color: 'black',
                },
                selectTarget: 1,
                async content(event, trigger, player) {
                    let target = event.targets[0];
                    target.damage(1, 'thunder');
                    target.link(true);
                },
                ai: {
                    order: 1,
                    result: {
                        player: 2,
                        target: -1,
                    },
                },
            },
            wude: {
                audio: 'ext:狂澜异世/audio:3:mp3',
                trigger: {
                    global: 'phaseBegin',
                },
                filter(event, player) {
                    return event.player != player && _status.currentPhase.countCards('hej');
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                prompt: '是否发动<武德>,视为对其使用一张【过河拆桥】',
                async content(event, trigger, player) {
                    player.useCard({ name: 'guohe', suit: 'spade', number: '69' }, _status.currentPhase, false);
                },
            },
            neigong: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                forced: true,
                trigger: {
                    player: 'damageEnd',
                },
                logTarget: 'source',
                preHidden: true,
                filter(event, player) {
                    return event.source && event.source.countGainableCards(player, 'hej') && event.num > 0 && _status.currentPhase != player;
                },
                async content(event, trigger, player) {
                    player.gainPlayerCard(trigger.source, true, 'hej', trigger.source.countCards('hej'));
                },
                group: 'neigong2',
            },
            neigong2: {
                audio: 'ext:狂澜异世/audio:3:mp3',
                forced: true,
                trigger: {
                    player: 'damageEnd',
                },
                logTarget: 'source',
                preHidden: true,
                filter(event, player) {
                    return event.source && event.source.countGainableCards(player, 'hej') && event.num > 0 && _status.currentPhase == player;
                },
                async content(event, trigger, player) {
                    player.discard(player.getCards('h'), true);
                },
            },
            //穿山甲
            dpoioned: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                dutySkill: true,
                forced: true,
                mark: true,
                marktext: '☢',
                intro: {
                    name: '蓄力点',
                    content(storage, player, skill) {
                        return '蓄力点数量:(' + player.storage.dpoioned + '/7)';
                    },
                },
                init(player) {
                    player.storage.dpoioned = 3;
                },
                trigger: {
                    global: 'phaseBegin',
                },
                filter(event, player) {
                    return event.player != player && _status.currentPhase.countCards('h');
                },
                async content(event, trigger, player) {
                    player.loseMaxHp();
                    player.draw();
                    const { num1, num2 } = await player.chooseToCompare(trigger.player).forResult();
                    if (num1 == num2) {
                        if (player.countMark('dpoioned') != 7) player.addMark('dpoioned');
                        player.loseHp(num1);
                        trigger.player.loseHp(num1);
                    } else if (num1 < num2) {
                        if (player.countMark('dpoioned') != 7) player.addMark('dpoioned');
                        player.loseHp(num1);
                    } else {
                        player.removeMark('dpoioned');
                        trigger.player.loseHp(num2);
                    }
                },
                derivation: 'selfbang',
                group: ['dpoioned_achieve', 'dpoioned_fail'],
                subSkill: {
                    achieve: {
                        trigger: {
                            global: 'dieBegin',
                        },
                        forced: true,
                        filter(event, player) {
                            return game.dead.length >= game.countPlayer() / 2;
                        },
                        async content(event, trigger, player) {
                            game.log(player, '成功完成使命');
                            player.awakenSkill('dpoioned');
                            player.removeSkill('selfbang');
                        },
                    },
                    fail: {
                        trigger: {
                            player: 'dying',
                        },
                        forced: true,
                        async content(event, trigger, player) {
                            game.log(player, '使命失败');
                            player.awakenSkill('dpoioned');
                            player.die();
                        },
                    },
                },
            },
            doubleagent: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                trigger: {
                    global: 'phaseEnd',
                },
                forced: true,
                zhuanhuanji: true,
                async content(event, trigger, player) {
                    let list = lib.skill.doubleagent.groupList;
                    const { control } = await player
                        .chooseControl(Object.keys(list).filter((group) => player.group != group))
                        .set('promote', '选择一个势力')
                        .forResult();
                    player.changeGroup(control);
                    player.changeZhuanhuanji('doubleagent');
                },
                mark: true,
                marktext: '☣',
                intro: {
                    content(storage, player) {
                        let str = '';
                        switch (player.group) {
                            case 'shu':
                                str =
                                    '蜀势力:你的拼点牌点数+' +
                                    game.countPlayer(function (current) {
                                        return current.group == 'shu';
                                    }) +
                                    '点';
                                break;
                            case 'wei':
                                str =
                                    '魏势力:你的拼点牌点数-' +
                                    game.countPlayer(function (current) {
                                        return current.group == 'wei';
                                    }) +
                                    '点';
                                break;
                            case 'wu':
                                str = '吴势力:你的拼点牌点数视为A';
                                break;
                            case 'qun':
                                str = '群势力:你的拼点牌点数视为K';
                                break;
                        }
                        return str || '你啥也没有';
                    },
                },
                group: 'doubleagent_compare',
                subSkill: {
                    compare: {
                        trigger: {
                            player: 'compare',
                            target: 'compare',
                        },
                        audio: ['jieming', 2],
                        filter(event, player) {
                            return ['wu', 'shu', 'wei', 'qun'].includes(player.group);
                        },
                        async content(event, trigger, player) {
                            switch (player.group) {
                                case 'qun':
                                    game.log(player, '拼点牌点数视为', '#yK');
                                    trigger[player == trigger.player ? 'num1' : 'num2'] = 13;
                                    break;
                                case 'shu':
                                    game.log(player, '拼点牌点数+', '蜀势力角色数');
                                    let shuPlayer = game.countPlayer(function (current) {
                                        return current.group == 'shu';
                                    });
                                    player == trigger.player ? (trigger.num1 - shuPlayer > 13 ? (trigger.num1 = 13) : (trigger.num1 += shuPlayer)) : trigger.num2 - shuPlayer > 13 ? (trigger.num2 = 13) : (trigger.num2 += shuPlayer);
                                    break;
                                case 'wu':
                                    game.log(player, '拼点牌点数视为', '#y1');
                                    trigger[player == trigger.player ? 'num1' : 'num2'] = 1;
                                    break;
                                case 'wei':
                                    game.log(player, '拼点牌点数视-', '魏势力角色数');
                                    let weiPlayer = game.countPlayer(function (current) {
                                        return current.group == 'wei';
                                    });
                                    player == trigger.player ? (trigger.num1 - weiPlayer < 1 ? (trigger.num1 = 1) : (trigger.num1 -= weiPlayer)) : trigger.num2 - weiPlayer < 1 ? (trigger.num2 = 1) : (trigger.num2 -= weiPlayer);
                                    break;
                            }
                        },
                        forced: true,
                        popup: false,
                    },
                },
                groupList: {
                    wei: '魏势力',
                    shu: '蜀势力',
                    wu: '吴势力',
                    qun: '群势力',
                },
            },
            selfbang: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                forced: true,
                trigger: {
                    player: 'dieBegin',
                },
                async content(event, trigger, player) {
                    let macks = player.countMark('dpoioned');
                    for (var i of game.players) {
                        i.damage(macks, 'fire');
                    }
                },
            },
            //瓜摊老板
            melonsellersfanga: {
                audio: "'ext:狂澜异世/audio:2:mp3'",
                trigger: {
                    player: 'useCardToPlayered',
                },
                forced: true,
                filter(event, player) {
                    if (player.countMark('melonstallgatan') == 0) return false;
                    if (event.parent.name == 'melonsellersfanga') return false;
                    if (!event.targets || !event.card) return false;
                    if (event.card && event.card.name == 'wuxie') return false;
                    let type = get.type(event.card);
                    if (type != 'trick') return false;
                    return event.isFirstTarget;
                },
                async content(event, trigger, player) {
                    let num = player.countMark('melonstallgatan');
                    trigger.parent.effectCount += num;
                },
            },
            melonscalesgacheng: {
                mark: true,
                zhuanhuanji: true,
                marktext: '↕∆',
                discard: false,
                lose: false,
                delay: false,
                intro: {
                    content(storage, player, skill) {
                        if (player.storage.melonscalesgacheng != true) return '【阳】:将' + player.countMark('melonstallgatan') + '张牌置于牌堆底,摸一张牌';
                        return '【阴】:将1张牌置于牌堆底,摸' + Math.min(player.countMark('melonstallgatan') + 1, 4) + '张牌';
                    },
                },
                enable: 'phaseUse',
                audio: "'ext:狂澜异世/audio:2:mp3'",
                init(player) {
                    player.storage.melonscalesgacheng = false;
                },
                filterCard: true,
                selectCard() {
                    return _status.event.player.getStorage('melonscalesgacheng') == true ? 1 : _status.event.player.countMark('melonstallgatan');
                },
                check(card) {
                    let player = _status.event.player;
                    if (
                        get.position(card) == 'h' &&
                        !player.countCards('h', 'du') &&
                        (player.hp > 2 ||
                            !player.countCards('h', function (card) {
                                return get.value(card) >= 8;
                            }))
                    ) {
                        return 1;
                    }
                    return 6 - get.value(card);
                },
                position: 'hes',
                filter(event, player) {
                    let num = player.countMark('melonstallgatan');
                    if ((player.getStat().skill.melonscalesgacheng || 0) >= num) return false;
                    return true;
                },
                prompt(event, player) {
                    let str = event.player.getStorage('melonscalesgacheng') == true ? '将一张牌置于牌堆底' : '将' + event.player.countMark('melonstallgatan') + '张牌置于牌堆底';
                    return str;
                },
                async content(event, trigger, player) {
                    const cards = event.cards;
                    for (var i of cards) {
                        i.fix();
                        ui.cardPile.appendChild(i);
                    }
                    await player.loseHp();
                    player.draw(player.storage.melonscalesgacheng != false ? player.countMark('melonstallgatan') : 1);
                    player.changeZhuanhuanji('melonscalesgacheng');
                },
                ai: {
                    order: 4,
                    result: {
                        player: 1,
                    },
                    threaten: 1.55,
                },
            },
            melonstallgatan: {
                audio: "'ext:狂澜异世/audio:2:mp3'",
                marktext: '瓜',
                forced: true,
                trigger: {
                    player: 'phaseBegin',
                },
                async content(event, trigger, player) {
                    let gamarkmax = 4;
                    for (var i = 0; i < player.getDamagedHp(); i++) {
                        if (player.countMark('melonstallgatan') != gamarkmax) {
                            player.addMark('melonstallgatan');
                        }
                    }
                },
                intro: {
                    name: '瓜标记',
                    content(storage, player, skill) {
                        return '你使用的普通锦囊牌额外结算' + player.countMark('melonstallgatan') + '次';
                    },
                },
                group: ['melonstallgatan_1', 'melonstallgatan_2'],
                subSkill: {
                    1: {
                        audio: 2,
                        forced: true,
                        trigger: {
                            player: 'loseHpBegin',
                        },
                        async content(event, trigger, player) {
                            let gamarkmax = 4;
                            player.draw(trigger.num);
                            for (var i = 0; i < trigger.num; i++) {
                                if (player.countMark('melonstallgatan') != gamarkmax) {
                                    player.addMark('melonstallgatan');
                                }
                            }
                        },
                    },
                    2: {
                        audio: 2,
                        forced: true,
                        trigger: {
                            player: 'discardAfter',
                        },
                        filter(event, player) {
                            return player.countMark('melonstallgatan');
                        },
                        async content(event, trigger, player) {
                            player.recover(trigger.cards.length);
                            player.removeMark('melonstallgatan', trigger.cards.length);
                        },
                    },
                },
            },
            // 阿杰
            ejiebaibu: {
                audio: "'ext:狂澜异世/audio:2:mp3'",
                trigger: {
                    global: 'phaseBefore',
                },
                forced: true,
                filter(event, player) {
                    return event.player != player && event.player.countCards('h');
                },
                async content(event, trigger, player) {
                    const { bool } = await player.chooseBool(get.prompt('ejiebaibu'), '是否发动<摆布>,展示其手牌？').forResult();
                    if (bool) {
                        trigger.player.showHandcards();
                        let hs = trigger.player.getCards('h');
                        for (var i of hs) {
                            trigger.player.showCards(hs[hs.indexOf(i)], '手牌');
                            switch (i.suit) {
                                case 'club':
                                    trigger.player.damage(1, 'nocard');
                                    trigger.player.turnOver();
                                    continue;
                                case 'diamond':
                                    trigger.player.loseMaxHp();
                                    continue;
                                case 'spade':
                                    trigger.player.clearSkills();
                                    continue;
                                case 'heart':
                                    trigger.player.loseHp();
                                    continue;
                            }
                        }
                    }
                },
            },
            ejieweixie: {
                audio: "'ext:狂澜异世/audio:2:mp3'",
                forced: true,
                group: ['ejieweixie_1', 'ejieweixie_2'],
                subSkill: {
                    1: {
                        audio: 2,
                        forced: true,
                        trigger: {
                            global: 'loseHpBegin',
                        },
                        filter(event, player) {
                            return event.player != player;
                        },
                        async content(event, trigger, player) {
                            player.recover(trigger.num);
                        },
                    },
                    2: {
                        audio: 2,
                        forced: true,
                        trigger: {
                            global: 'discardAfter',
                        },
                        filter(event, player) {
                            return event.player != player;
                        },
                        async content(event, trigger, player) {
                            player.draw(trigger.cards.length);
                        },
                    },
                },
            },
            // 孙策
            yijieyingba: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                enable: 'phaseUse',
                forced: true,
                filter(event, player) {
                    return (
                        player.countCards('h', 'sha') &&
                        game.hasPlayer(function (current) {
                            return player.canUse('sha', current);
                        })
                    );
                },
                async content(event, trigger, player) {
                    const { bool } = await player
                        .chooseToRespond(1, 'h', true, '请选择打出一张【杀】', function (card) {
                            return card.name == 'sha';
                        })
                        .set('ai', function (card) {
                            return get.value(card);
                        })
                        .forResult();
                    if (bool) {
                        const { bool, targets } = await player
                            .chooseTarget('视为对一名其他角色使用一张【杀】', true, function (card, player, target) {
                                return player.canUse({ name: 'sha' }, target, false) && player != target;
                            })
                            .set('ai', function (target) {
                                return get.effect(target, { name: 'sha' }, _status.event.player);
                            })
                            .forResult();
                        if (bool) player.useCard({ name: 'sha' }, targets[0], false);
                    }
                },
                ai: {
                    presha: true,
                    order: 10,
                    result: {
                        player: 2,
                    },
                },
            },
            yijiezhiyinang: {
                audio: 'ext:狂澜异世/audio:4:mp3',
                forced: true,
                trigger: {
                    player: 'chooseToRespondBegin',
                },
                filter(event, player) {
                    return event.filterCard({ name: 'sha' }, player, event);
                },
                async content(event, trigger, player) {
                    player.draw();
                },
            },
            yijieyinghun: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                trigger: { player: 'phaseBegin' },
                forced: true,
                async content(event, trigger, player) {
                    player.draw(player.getDamagedHp());
                },
            },
            yijieyingzi: {
                mod: {
                    maxHandcardBase(player, num) {
                        return num + player.getDamagedHp();
                    },
                },
            },
            // 刘备
            yijierende: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                enable: 'phaseUse',
                filterCard: true,
                selectCard: 1,
                discard: false,
                lose: true,
                filterTarget(card, player, target) {
                    return player != target;
                },
                async content(event, trigger, player) {
                    const cards = event.cards,
                        target = event.targets[0];
                    player.give(cards, target);
                    if (player.hujia < player.maxHp) player.changeHujia();
                },
                group: ['yijierende_yyds'],
                subSkill: {
                    yyds: {
                        audio: 2,
                        trigger: {
                            player: ['phaseBegin', 'phaseEnd'],
                        },
                        forced: true,
                        filter(event, player) {
                            return player.hujia;
                        },
                        async content(event, trigger, player) {
                            player.draw(player.hujia);
                        },
                    },
                },
                ai: {
                    order: 10.5,
                    result: {
                        player: 0.8,
                        target(player, target) {
                            return 2;
                        },
                    },
                },
            },
            yijiezhangwu: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                trigger: {
                    player: ['loseAfter', 'respondAfter'],
                },
                filter(event, player) {
                    return event.type != 'discard' && event.type != 'use';
                },
                async content(event, trigger, player) {
                    let list = [];
                    for (var i = 0; i < lib.inpile.length; i++) {
                        let name = lib.inpile[i];
                        let can = game.hasPlayer(function (current) {
                            return player.canUse(name, current);
                        });
                        if (name == 'sha') {
                            if (can) list.push(['基本', '', 'sha']);
                            for (let j of lib.inpile_nature) {
                                if (can) list.push(['基本', '', 'sha', j]);
                            }
                        } else if (get.type(name) == 'basic' && can) list.push(['基本', '', name]);
                    }
                    if (list.length) {
                        const { bool, links } = await player
                            .chooseButton(['是否视为使用一张基本牌？', [list, 'vcard']])
                            .set('ai', function (button) {
                                let player = _status.event.player;
                                let card = { name: button.link[2], nature: button.link[3] };
                                if (card.name == 'tao') {
                                    if (player.hp == 1 || (player.hp == 2 && !player.hasShan()) || player.needsToDiscard()) {
                                        return 5;
                                    }
                                    return 1;
                                }
                                if (card.name == 'sha') {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        if (card.nature == 'fire') return 2.95;
                                        if (card.nature == 'thunder' || card.nature == 'ice') return 2.92;
                                        return 2.9;
                                    }
                                    return 0;
                                }
                                if (card.name == 'jiu') {
                                    return 0.5;
                                }
                                return 0;
                            })
                            .forResult();
                        if (bool) {
                            let card = { name: links[0][2], nature: links[0][3] };
                            player.chooseUseTarget(card, true);
                        }
                    }
                },
            },
            // 曹操
            yijiejianxiong: {
                forced: true,
                audio: 'ext:狂澜异世/audio:2:mp3',
                trigger: { global: ['damageEnd'] },
                filter(event, player) {
                    return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                },
                async content(event, trigger, player) {
                    player.gain(trigger.cards, 'gain2');
                },
            },
            yijiejianci: {
                forced: true,
                audio: 'ext:狂澜异世/audio:1:mp3',
                line: true,
                trigger: { player: 'gainEnd' },
                async content(event, trigger, player) {
                    const { bool, targets } = await player
                        .chooseTarget(function (card, player, target) {
                            return player != target;
                        })
                        .set('ai', function (target) {
                            let player = _status.event.player;
                            return get.damageEffect(target, player, player);
                        })
                        .forResult();
                    if (bool) {
                        player.line(targets[0], 'green');
                        targets[0].damage(trigger.cards.length, 'nocard');
                        if (targets[0].countCards('he')) player.gainPlayerCard(true, targets[0], 'he');
                    }
                },
                ai: {
                    result: {
                        target: -3,
                    },
                },
            },
            // 袁绍
            yijieluanji: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                enable: 'phaseUse',
                filterCard: true,
                lose: false,
                discard: false,
                selectCard: [1, Infinity],
                filterTarget(card, player, target) {
                    return player != target;
                },
                selectTarget: -1,
                multitarget: true,
                multiline: true,
                check(card) {
                    let player = _status.event.player;
                    if (
                        get.position(card) == 'h' &&
                        !player.countCards('h', function (card) {
                            return get.value(card) >= 8;
                        })
                    ) {
                        return 1;
                    }
                    return 6 - get.value(card);
                },
                position: 'hes',
                async content(event, trigger, player) {
                    const cards = event.cards,
                        targets = event.targets;
                    let suits = [...new Set(cards.map((card) => card.suit))];
                    let next = player.useCard({ name: 'wanjian' }, cards, targets, false);
                    next.baseDamage = suits.length;
                    await next;
                    if (!player.countCards('h')) player.draw(player.getDamagedHp());
                },
                ai: {
                    order: 8.5,
                    result: {
                        target(player, target) {
                            return get.damageEffect(target, player);
                        },
                    },
                },
            },
            yijiesheji: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                trigger: { source: 'damageAfter' },
                forced: true,
                async content(event, trigger, player) {
                    trigger.player.damage(trigger.num, trigger.nature, 'nosource');
                },
            },
            // 诸葛孔明
            yijieguanxing: {
                audio: 'guanxing',
                trigger: {
                    target: 'useCardToTarget',
                },
                async content(event, trigger, player) {
                    let num = Math.ceil(player.maxHp);
                    let cards = get.cards(num);
                    game.cardsGotoOrdering(cards);
                    let next = player.chooseToMove();
                    next.set('list', [['牌堆顶', cards], ['SG']]);
                    next.set('prompt', '观星:点击将牌移动到牌堆顶或SG');
                    next.processAI = function (list) {
                        let cards = list[0][1],
                            player = _status.event.player;
                        let target = _status.event.getTrigger().name == 'phaseZhunbei' ? player : player.next;
                        let att = get.sgn(get.attitude(player, target));
                        let top = [];
                        let judges = target.getCards('j');
                        let stopped = false;
                        cards.sort(function (a, b) {
                            return (get.value(a, player) - get.value(b, player)) * att;
                        });
                        while (cards.length) {
                            if (get.value(cards[0], player) <= 5 == att > 0) break;
                            top.push(cards.shift());
                        }
                        let SG;
                        SG = cards;
                        return [top, SG];
                    };
                    const { bool, moved } = await next.forResult();
                    if (bool) {
                        let top = moved[0];
                        let SG = moved[1];
                        top.reverse();
                        for (var i = 0; i < top.length; i++) {
                            ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                        }
                        player.gain(SG);
                        player.popup(get.cnNumber(top.length) + '牌堆顶' + get.cnNumber(SG.length) + 'SG');
                        game.log(player, '将' + get.cnNumber(top.length) + '张牌置于SG');
                        game.updateRoundNumber();
                    }
                },
            },
            yijiebazhen: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                enable: ['chooseToUse', 'chooseToRespond'],
                delay: false,
                chooseButton: {
                    dialog(event, player) {
                        let list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            let name = lib.inpile[i];
                            if (name == 'sha') {
                                if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                for (let j of lib.inpile_nature) {
                                    if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                                }
                                break;
                            }
                        }
                        if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) list.push(['基本', '', 'shan']);
                        return ui.create.dialog('八阵', [list, 'vcard']);
                    },
                    filter(button, player) {
                        return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                    },
                    check(button) {
                        let player = _status.event.player;
                        return player.getUseValue({
                            name: button.link[2],
                            nature: button.link[3],
                        });
                    },
                    backup(links, player, event) {
                        return {
                            selectCard: -1,
                            filterCard() {
                                return false;
                            },
                            viewAs: { name: links[0][2], nature: links[0][3] },
                            viewAsFilter(player) {
                                return true;
                            },
                            precontent() {
                                'step 0';
                                player.judge('bagua', function (card) {
                                    return get.color(card) == 'black' ? 1.5 : -0.5;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                ('step 1');
                                if (result.judge > 0) {
                                    player
                                        .chooseTarget('弃置一名角色区域内的一张牌', function (card, player, target) {
                                            return target.countCards('hej');
                                        })
                                        .set('ai', function (target) {
                                            let player = _status.event.player;
                                            let att = get.attitude(player, target);
                                            if (att < 0) {
                                                att = -Math.sqrt(-att);
                                            } else {
                                                att = Math.sqrt(att);
                                            }
                                            return att * lib.card.guohe.ai.result.target(player, target);
                                        });
                                    return true;
                                } else if (result.judge < 0) {
                                    player.draw();
                                    return false;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                let evt = event.getParent(2);
                                if (result.bool == true) {
                                    //如果是杀,走这条路线
                                    player.discardPlayerCard(result.targets[0], 'hej', true);
                                } else {
                                    //如果是闪,走这条路线
                                    event.finish();
                                }
                            },
                        };
                    },
                },
                ai: {
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    order: 999,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            yijiemingshi: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                trigger: { player: 'damageBegin3' },
                forced: true,
                filter(event, player) {
                    return event.source != undefined && event.num > 0;
                },
                charlotte: true,
                async content(event, trigger, player) {
                    trigger.num -= Math.abs(trigger.source.hp - player.hp);
                },
            },
            // 狗货
            rgxqumao: {
                usable: 1,
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return player != target && (target.countCards('h') < player.countCards('h') || target.hp < player.hp);
                },
                filterCard(card, player, target) {
                    return !player.getStorage('rgxtungou').includes(card.suit);
                },
                selectCard: 1,
                selectTarget: 1,
                discard: false,
                lose: false,
                delay: false,
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        cards = event.cards;
                    await target.gain(cards, 'gain2');
                    let use = async () => {
                        const { bool, targets: targetD } = await player
                            .chooseTarget('选择一名角色,对其造成一点伤害', true)
                            .set('ai', function (target) {
                                return -get.attitude(player, target);
                            })
                            .forResult();
                        if (bool) {
                            target.line(targetD[0]);
                            game.playAudio('../extension/狂澜异世/audio/earmiao.mp3');
                            game.log('触发了吞狗');
                            const { bool, targets } = await player.chooseTarget('选择一名角色摸' + (player.maxHp - player.getStorage('rgxtungou').length ? player.maxHp - player.getStorage('rgxtungou').length : '个🔨') + '张牌', true).forResult();
                            if (bool && player.maxHp - player.getStorage('rgxtungou').length) {
                                const { cards } = await targets[0].draw(player.maxHp - player.getStorage('rgxtungou').length).forResult();
                                if (cards.length && cards.some((card) => !player.getStorage('rgxtungou').includes(card.suit))) {
                                    let next = targetD[0].damage(target);
                                    next.num += lib.suit.length - player.getStorage('rgxtungou').length;
                                    cards.forEach((card) => {
                                        if (!player.getStorage('rgxtungou').includes(card.suit)) player.getStorage('rgxtungou').push(card.suit);
                                    });
                                    await next;
                                }
                            }
                        }
                    };
                    if (target.countCards('e')) {
                        const { bool } = await target
                            .chooseBool('是否将装备区的牌交给' + get.translation(player))
                            .set('ai', function () {
                                return get.attitude(player, target) > 0;
                            })
                            .forResult();
                        bool ? target.give(target.getCards('e'), player) : await use();
                    } else {
                        await use();
                    }
                },
                ai: {
                    order: 3.5,
                    result: {
                        player: 2,
                    },
                    threaten: 1.55,
                },
            },
            rgxtungou: {
                init(player) {
                    if (!player.storage.rgxtungou) player.storage.rgxtungou = [];
                },
                trigger: {
                    player: 'damageBegin4',
                    source: 'damageBegin1',
                },
                mark: true,
                marktext: '吞狗',
                intro: {
                    content: '$',
                },
                filter(event, player) {
                    let num = player.maxHp - player.getStorage('rgxtungou').length;
                    if (event.source == undefined) return false;
                    if (event.source == player && event.player.hp > player.hp) return num;
                    if (event.source != player && event.player.hp < event.source.hp) return num;
                    return false;
                },
                async content(event, trigger, player) {
                    const { bool, targets } = await player.chooseTarget('选择一名角色摸' + (player.maxHp - player.getStorage('rgxtungou').length ? player.maxHp - player.getStorage('rgxtungou').length : '个🔨') + '张牌', true).forResult();
                    if (bool) {
                        const { cards } = await targets[0].draw(player.maxHp - player.getStorage('rgxtungou').length).forResult();
                        if (cards.length && cards.some((card) => !player.getStorage('rgxtungou').includes(card.suit))) {
                            if (trigger.source == player) {
                                trigger.num += lib.suit.length - player.getStorage('rgxtungou').length;
                            } else {
                                trigger.num -= lib.suit.length - player.getStorage('rgxtungou').length;
                            }
                            cards.forEach((card) => {
                                if (!player.getStorage('rgxtungou').includes(card.suit)) player.getStorage('rgxtungou').push(card.suit);
                            });
                        }
                    }
                },
            },
            rgxximing: {
                trigger: {
                    global: 'dying',
                },
                async content(event, trigger, player) {
                    const { cards } = await player.draw(player.getStorage('rgxtungou').length + 1).forResult();
                    let recover = async () => {
                        let player2;
                        if (trigger.player == player) {
                            player.addGaintag(cards, 'rgxximing');
                            player2 = player;
                        } else {
                            player2 = trigger.player;
                        }
                        let suit = player.getStorage('rgxtungou');
                        const { bool, cards } = await player2
                            .chooseToDiscard([1, player2.getDamagedHp()], function (card, player, target) {
                                return card.hasGaintag('rgxximing') && suit.includes(card.suit);
                            })
                            .set('prompt', '选择至少一张牌,回复等量体力值')
                            .set('ai', (card) => {
                                return true;
                            })
                            .forResult();
                        if (bool) {
                            let list = [];
                            cards.forEach((card) => list.push(card.suit));
                            player.storage.rgxtungou = player.getStorage('rgxtungou').filter((suit) => !list.includes(suit));
                            await player2.recover(cards.length);
                        }
                        player.removeGaintag('rgxximing');
                    };
                    if (trigger.player != player) {
                        let list = lib.suit.filter((suit) => {
                            return player.countCards('he', { suit }) && player.getStorage('rgxtungou').includes(suit);
                        });
                        if (list.length) {
                            const { control } = await player
                                .chooseControl(list, 'cancel2')
                                .set('prompt', '选择一种花色的所有牌交给' + get.translation(trigger.player))
                                .set('ai', function () {
                                    if (get.attitude(player, trigger.player) > 0) return list.randomGet();
                                    return 'cancel2';
                                })
                                .forResult();
                            if (control != 'cancel2') {
                                let card = player.getCards('he', { suit: control });
                                player.give(card, trigger.player).gaintag.add('rgxximing');
                                trigger.player.addTempSkill('rgxximing_tag', { player: 'dyingAfter' });
                                await recover();
                            }
                        }
                    } else {
                        await recover();
                    }
                },
                subSkill: {
                    tag: {
                        onremove(player) {
                            player.removeGaintag('rgxximing');
                        },
                    },
                },
            },
            // 绿布
            yijierumou: {
                audio: ['wumou', 2],
                forced: true,
                trigger: {
                    player: ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore', 'phaseJieshuBefore'],
                },
                async content(event, trigger, player) {
                    let card = get.cardPile(function (card) {
                        return get.type(card) == 'trick';
                    });
                    if (card) {
                        player.gain(card, 'gain2', 'log');
                    }
                },
                group: ['yijierumou_use'],
                subSkill: {
                    use: {
                        trigger: {
                            player: 'useCard',
                        },
                        audio: ['wumou', 2],
                        forced: true,
                        filter(event, player) {
                            return event.parent.name != 'yijierumou_use' && get.type(event.card) == 'trick';
                        },
                        async content(event, trigger, player) {
                            const { bool, cards } = await player
                                .chooseCard('是否弃置一张非锦囊牌令此牌额外结算一次？', function (card) {
                                    return get.type2(card) != 'trick';
                                })
                                .forResult();
                            if (bool) {
                                await player.discard(cards);
                                trigger.effectCount++;
                            } else {
                                player.loseHp();
                            }
                        },
                    },
                },
            },
            yijieruqian: {
                lastDo: true,
                audio: ['wuqian', 2],
                enable: 'phaseUse',
                init(player) {
                    if (!player.storage.yijieruqian) player.storage.yijieruqian == false;
                },
                mark: true,
                zhuanhuanji: true,
                marktext: '☯',
                intro: {
                    content(storage, player, skill) {
                        return `你可以摸${player.getDamagedHp()}张${player.storage.yijieruqian ? '杀' : '闪'}弃置${player.hp}张${player.storage.yijieruqian ? '闪' : '杀'}`;
                    },
                },
                filterCard(card, player, target) {
                    return card.name == 'shan';
                },
                selectCard() {
                    return _status.event.player.hp;
                },
                check(card) {
                    return 8 - get.value(card);
                },
                filter(event, player) {
                    return player.countCards('h', { name: 'shan' }) >= player.hp && player.getStorage('yijieruqian') == true;
                },
                async content(event, trigger, player) {
                    if (player.getDamagedHp()) {
                        let list = await lib.skill.yijieruqian.getCards(player, 'cardPile', 'sha');
                        player.gain(list, 'draw');
                    }
                    player.addTempSkill('yijieruqian_wushuang');
                    player.changeZhuanhuanji('yijieruqian');
                },
                getCards: async function (player, pile, name) {
                    let list = [];
                    for (var i = 0; i < ui[pile].childNodes.length; i++) {
                        let card = ui[pile].childNodes[i];
                        let name2 = card.name;
                        if (!list.includes(card) && name2 == name) {
                            list.push(card);
                            if (list.length >= player.getDamagedHp()) break;
                        }
                    }
                    return list;
                },
                group: 'yijieruqian_false',
                subSkill: {
                    false: {
                        trigger: {
                            player: 'damageEnd',
                            source: 'damageSource',
                        },
                        filter(event, player) {
                            return player.getStorage('yijieruqian') == false;
                        },
                        async content(event, trigger, player) {
                            let list = await lib.skill.yijieruqian.getCards(player, 'cardPile', 'shan');
                            player.gain(list, 'draw');
                            let num = player.countCards('h', { name: 'sha' });
                            if (num > 0) {
                                if (num <= player.hp) {
                                    player.discard(player.getCards('h', { name: 'sha' }, true));
                                } else {
                                    player.chooseToDiscard(
                                        `请弃置${player.hp}张杀`,
                                        true,
                                        'h',
                                        function (card) {
                                            return card.name == 'sha';
                                        },
                                        player.hp
                                    );
                                }
                            }
                            player.addTempSkill('yijieruqian_wudi');
                            player.changeZhuanhuanji('yijieruqian');
                        },
                    },
                    wushuang: {
                        //你使用的【杀】需要使用两张闪才可抵消且本回合你使用杀指定目标的防具无效
                        audio: ['wushuang', 2],
                        trigger: { player: 'useCardToPlayered' },
                        forced: true,
                        filter(event, player) {
                            return event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                        },
                        logTarget: 'target',
                        async content(event, trigger, player) {
                            const id = trigger.target.playerid;
                            const map = trigger.parent.customArgs;
                            if (!map[id]) map[id] = {};
                            if (typeof map[id].shanRequired == 'number') {
                                map[id].shanRequired++;
                            } else {
                                map[id].shanRequired = 2;
                            }
                            trigger.target.addTempSkill('yijieruqian_unequip');
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
                            },
                        },
                    },
                    wudi: {
                        //当你成为【决斗】的目标后,你令此牌需要依次打出两张【杀】响应且本回合你的防具无效
                        audio: ['wushuang_shen_lvbu', 2],
                        trigger: { target: 'useCardToTargeted' },
                        forced: true,
                        logTarget(trigger, player) {
                            return trigger.player;
                        },
                        filter(event, player) {
                            return event.card.name == 'juedou';
                        },
                        async content(event, trigger, player) {
                            const id = trigger.player['playerid'];
                            const idt = trigger.target.playerid;
                            const map = trigger.parent.customArgs;
                            if (!map[idt]) map[idt] = {};
                            if (!map[idt].shaReq) map[idt].shaReq = {};
                            if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
                            map[idt].shaReq[id]++;
                            player.addTempSkill('yijieruqian_unequip');
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                if ((arg && arg.card.name != 'juedou') || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
                            },
                        },
                    },
                    unequip: {
                        charlotte: true,
                        mark: true,
                        marktext: '🚫',
                        intro: {
                            content(storage, player) {
                                return '防具失效了';
                            },
                        },
                        ai: { unequip2: true },
                    },
                },
                ai: {
                    order: 1,
                    result: {
                        player(player) {
                            return Math.abs(player.hp - player.getDamagedHp()) * 0.8;
                        },
                    },
                },
            },
            yijieshenfen: {
                usable: 1,
                audio: ['shenfen', 2],
                enable: 'phaseUse',
                filterCard: true,
                selectCard: 4,
                position: 'hes',
                check(card) {
                    return 7 - get.value(card);
                },
                filterTarget(card, player, target) {
                    return target != player;
                },
                selectTarget: -1,
                multiline: true,
                async content(event, trigger, player) {
                    event.target.turnOver();
                },
                contentAfter() {
                    player.damage('nosource');
                },
                ai: {
                    order(item, player) {
                        if (player.hp < 3) return 0;
                        return 1;
                    },
                    result: {
                        player: 0.5,
                    },
                },
            },
            yijierunu: {
                audio: ['baonu', 2],
                marktext: '暴',
                mark: true,
                firstDo: true,
                init(player) {
                    if (!player.storage.yijierunu) player.storage.yijierunu = 2;
                },
                trigger: {
                    global: 'damageEnd',
                },
                forced: true,
                async content(event, trigger, player) {
                    let odds = (player.maxHp - player.countMark('yijierunu')) / player.maxHp;
                    player[odds >= Math.random() ? 'addMark' : 'removeMark']('yijierunu');
                },
                intro: {
                    name: '暴怒',
                    content: 'mark',
                },
                ai: {
                    maixie: true,
                    maixie_hp: true,
                },
                group: 'yijierunu_use',
                subSkill: {
                    use: {
                        enable: 'chooseToUse',
                        filterCard: () => false,
                        selectCard: -1,
                        filter(event, player) {
                            let num = player.isDying() ? 2 : 1;
                            if (event.type == 'dying' && event.getParent(2).player == player) return event.filterCard({ name: 'tao' }, player, event) && player.countMark('yijierunu') >= num;
                            return event.filterCard({ name: 'sha' }, player, event) && player.countMark('yijierunu') >= num;
                        },
                        viewAs(cards, player) {
                            if (!player.isDying()) return { name: 'sha' };
                            return { name: 'tao' };
                        },
                        precontent() {
                            player.removeMark('yijierunu', player.isDying() ? 2 : 1);
                        },
                        viewAsFilter(player) {
                            let num = player.isDying() ? 2 : 1;
                            return player.countMark('yijierunu') >= num;
                        },
                        ai: {
                            skillTagFilter(player) {
                                if (!player.countMark('yijierunu')) return false;
                            },
                            save: true,
                            presha: true,
                        },
                    },
                },
            },
            // 陆逊
            rgxlianying: {
                audio: ['relianying', 2],
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                filter(event, player) {
                    if (player.countCards('h')) return false;
                    let evt = event.getl(player);
                    return evt && evt.hs && evt.hs.length;
                },
                async content(event, trigger, player) {
                    const num = trigger.getl(player).hs.length;
                    player.draw(num);
                },
            },
            rgxqianxun: {
                audio: ['nzry_cuike', 2],
                trigger: {
                    target: 'useCardToBegin',
                },
                filter(event, player) {
                    if (player.countCards('h') == 0) return false;
                    return true;
                },
                async content(event, trigger, player) {
                    const { cards } = await player.chooseCard('h', [1, player.hp + game.roundNumber], true).forResult();
                    let next = player.addToExpansion(cards, 'draw');
                    next.gaintag.add('rgxzonghuo');
                    await next;
                    player.addSkill('rgxqianxun_gain');
                },
                subSkill: {
                    gain: {
                        trigger: { global: 'phaseEnd' },
                        forced: true,
                        async content(event, trigger, player) {
                            let cards = player.getExpansions('rgxzonghuo');
                            if (cards.length) player.gain(cards, 'draw');
                            const { bool, targets } = await player
                                .chooseTarget('选择一名其他角色', function (card, player, target) {
                                    return player != target;
                                })
                                .set('ai', function (target) {
                                    return -get.attitude(player, target);
                                })
                                .forResult();
                            if (bool) {
                                if (cards.length % 2) {
                                    player.discardPlayerCard('hej', targets[0]);
                                    targets[0].link(true);
                                } else {
                                    targets[0].damage('fire');
                                    player.line(targets[0]);
                                }
                            }
                            player.removeSkill('rgxqianxun_gain');
                        },
                    },
                },
            },
            rgxzonghuo: {
                audio: ['nzry_dinghuo', 2],
                trigger: {
                    player: ['useCardAfter', 'respondAfter', 'damageEnd'],
                    source: 'damageSource',
                },
                popup: false,
                filter(event, player) {
                    return player.getExpansions('rgxzonghuo') && player.getExpansions('rgxzonghuo').length; //QQQ
                },
                async content(event, trigger, player) {
                    const cards = player.getExpansions('rgxzonghuo');
                    if (cards.length) {
                        let next = player.chooseButton(['纵火', player.getExpansions('rgxzonghuo'), '你的手牌', player.getCards('h')]);
                        next.set('filterButton', function (button) {
                            let h = 0,
                                x = 0,
                                suit = [],
                                suit2 = [];
                            for (var i = 0; i < ui.selected.buttons.length; i++) {
                                get.position(ui.selected.buttons[i].link) == 'h' ? h++ : x++;
                                suit.push(ui.selected.buttons[i].link.suit);
                            }
                            for (var i of suit) !suit2.includes(i) ? suit2.push(i) : suit2.splice(suit.indexOf(i), 1);
                            if (h < x) {
                                if (get.position(button.link) == 'x' || !suit2.includes(button.link.suit)) return false;
                            } else if (h > x) {
                                if (get.position(button.link) == 'h' || !suit2.includes(button.link.suit)) return false;
                            }
                            return true;
                        });
                        next.set('selectButton', () => {
                            if (ui.selected.buttons.length % 2) return ui.selected.buttons.length + 1;
                            return [2, Infinity];
                        }).set('ai', function (button) {
                            return 7;
                        });
                        const { bool, links } = await next.forResult();
                        if (bool) {
                            const { bool, targets } = await player
                                .chooseTarget(function (card, player, target) {
                                    return player != target;
                                })
                                .set('ai', function (target) {
                                    return -get.attitude(player, target);
                                })
                                .forResult();
                            if (bool) {
                                player.loseToDiscardpile(links);
                                targets[0].damage(links.length / 2, 'fire');
                                player.line(targets[0]);
                            }
                        }
                    }
                },
                intro: {
                    markcount: 'expansion',
                    content: 'expansion',
                },
            },
            // 黄忠
            rgxliegong: {
                audio: 'liegong',
                forced: true,
                trigger: {
                    player: 'useCardToPlayered',
                },
                logTarget: 'target',
                async content(event, trigger, player) {
                    let num = player.getHistory('useCard').length + player.getHistory('respond').length;
                    if (trigger.target == player) {
                        trigger.target.recover(num);
                        trigger.target.draw(num);
                    } else {
                        player.line(trigger.target);
                        trigger.target.damage(num, 'thunder');
                    }
                },
            },
            rgxliema2: {
                trigger: { source: 'damageBegin2' },
                async content(event, trigger, player) {
                    trigger.cancel();
                    trigger.player.loseMaxHp(true);
                },
            },
            // 于禁
            rgxshijie: {
                trigger: {
                    source: 'damageSource',
                    player: 'damageEnd',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.draw(4 - player.getStorage('rgxnijun').length);
                    if (player.getStorage('rgxnijun').length) {
                        const { bool, cards } = await player.chooseCard(player.getStorage('rgxnijun').length, true).forResult();
                        if (bool) player.addToExpansion(cards, player, 'give').gaintag.add('rgxshijie');
                    }
                },
                group: 'rgxshijie_give',
                subSkill: {
                    give: {
                        trigger: {
                            global: 'phaseEnd',
                        },
                        filter(event, player) {
                            return player.getStorage('rgxnijun').length && player.getExpansions('rgxshijie').length;
                        },
                        async content(event, trigger, player) {
                            let dialog = ui.create.dialog('失节', player.getExpansions('rgxshijie'), 'hidden');
                            const { bool, links } = await player.chooseButton(dialog, [1, player.getStorage('rgxnijun').length]).forResult();
                            if (bool) {
                                await player.give(links, _status.currentPhase, 'visible');
                                if (player.countCards('e') < _status.currentPhase.countCards('e')) {
                                    player.line(_status.currentPhase);
                                    _status.currentPhase.damage();
                                }
                            }
                        },
                    },
                },
                mod: {
                    maxHandcardBase(player, num) {
                        return 3 + player.getStorage('rgxnijun').length;
                    },
                },
                mark: true,
                intro: {
                    content: 'expansion',
                },
            },
            rgxnijun: {
                init(player) {
                    if (!player.storage.rgxnijun) player.storage.rgxnijun = [];
                },
                enable: 'phaseUse',
                mark: true,
                intro: {
                    content: '$',
                },
                filterCard(card, player, target) {
                    return !player.getStorage('rgxnijun').includes(card.suit);
                },
                filterTarget: true,
                selectTarget() {
                    return [1, game.players.length];
                },
                check(card) {
                    return card.name == 'sha';
                },
                discard: false,
                lose: false,
                delay: false,
                multitarget: true,
                multiline: true,
                async content(event, trigger, player) {
                    const cards = event.cards,
                        targets = event.targets;
                    player.getStorage('rgxnijun').add(cards[0].suit);
                    player.useCard(cards, targets);
                },
            },
            rgxshoufang: {
                group: ['rgxshoufang_renwang', 'rgxshoufang_clear'],
                subSkill: {
                    renwang: {
                        equipSkill: true,
                        noHidden: true,
                        inherit: 'renwang_skill',
                        filter(event, player) {
                            if (!lib.skill.renwang_skill.filter(event, player)) return false;
                            if (!player.hasEmptySlot(2)) return false;
                            return true;
                        },
                        ai: {
                            effect: {
                                target(card, player, target) {
                                    if (player == target && get.subtype(card) == 'equip2') {
                                        if (get.equipValue(card) <= 7.5) return 0;
                                    }
                                    if (!target.hasEmptySlot(2)) return;
                                    return lib.skill.renwang_skill.ai.effect.target.apply(this, arguments);
                                },
                            },
                        },
                    },
                    clear: {
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        forced: true,
                        filter(event, player) {
                            let evt = event.getl(player);
                            return evt && evt.player == player && evt.es && evt.es.length;
                        },
                        async content(event, trigger, player) {
                            let suit = trigger.cards[0].suit;
                            if (player.getStorage('rgxnijun').includes(suit)) {
                                let index = player.getStorage('rgxnijun').indexOf(suit);
                                player.getStorage('rgxnijun').splice(index, 1);
                            }
                        },
                    },
                },
            },
            // 关羽
            wensheng: {
                audio: 'wusheng',
                audioname: ['re_guanyu', 'guanzhang', 'jsp_guanyu', 'guansuo'],
                enable: ['chooseToRespond', 'chooseToUse'],
                filterCard(card, player) {
                    if (get.zhu(player, 'shouyue')) return true;
                    return get.color(card) == 'black';
                },
                position: 'hes',
                viewAs: {
                    name: 'sha',
                },
                viewAsFilter(player) {
                    if (player.hasSkill('wensheng_mark')) return false;
                    if (get.zhu(player, 'shouyue')) {
                        if (!player.countCards('hes')) return false;
                    } else {
                        if (!player.countCards('hes', { color: 'black' })) return false;
                    }
                },
                onuse(event, player) {
                    player.addTempSkill('wensheng_mark', ['phaseAfter', 'phaseBefore']);
                },
                onrespond(event, player) {
                    player.addTempSkill('wensheng_mark', ['phaseAfter', 'phaseBefore']);
                },
                prompt: '将一张黑色牌当杀使用或打出,回合结束时你摸一张牌',
                check(card) {
                    let val = get.value(card);
                    if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                    return 5 - val;
                },
                ai: {
                    respondSha: true,
                    order: 4,
                    skillTagFilter(player) {
                        if (get.zhu(player, 'shouyue')) {
                            if (!player.countCards('hes')) return false;
                        } else {
                            if (!player.countCards('hes', { color: 'black' })) return false;
                        }
                    },
                    yingbian(card, player, targets, viewer) {
                        if (get.attitude(viewer, player) <= 0) return 0;
                        let base = 0,
                            hit = false;
                        if (get.cardtag(card, 'yingbian_hit')) {
                            hit = true;
                            if (
                                targets.filter(function (target) {
                                    return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                })
                            )
                                base += 5;
                        }
                        if (get.cardtag(card, 'yingbian_all')) {
                            if (
                                game.hasPlayer(function (current) {
                                    return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                })
                            )
                                base += 5;
                        }
                        if (get.cardtag(card, 'yingbian_damage')) {
                            if (
                                targets.filter(function (target) {
                                    return (
                                        get.attitude(player, target) < 0 &&
                                        (hit ||
                                            !target.mayHaveShan() ||
                                            player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )) &&
                                        !target.hasSkillTag('filterDamage', null, {
                                            player: player,
                                            card: card,
                                            jiu: true,
                                        })
                                    );
                                })
                            )
                                base += 5;
                        }
                        return base;
                    },
                    canLink(player, target, card) {
                        if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                        if (
                            target.mayHaveShan() &&
                            !player.hasSkillTag(
                                'directHit_ai',
                                true,
                                {
                                    target: target,
                                    card: card,
                                },
                                true
                            )
                        )
                            return false;
                        if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                        return true;
                    },
                    basic: {
                        useful: [5, 3, 1],
                        value: [5, 3, 1],
                    },
                    result: {
                        target(player, target, card, isLink) {
                            let eff = (function () {
                                if (!isLink && player.hasSkill('jiu')) {
                                    if (
                                        !target.hasSkillTag('filterDamage', null, {
                                            player: player,
                                            card: card,
                                            jiu: true,
                                        })
                                    ) {
                                        if (get.attitude(player, target) > 0) {
                                            return -7;
                                        } else {
                                            return -4;
                                        }
                                    }
                                    return -0.5;
                                }
                                return -1.5;
                            })();
                            if (
                                !isLink &&
                                target.mayHaveShan() &&
                                !player.hasSkillTag(
                                    'directHit_ai',
                                    true,
                                    {
                                        target: target,
                                        card: card,
                                    },
                                    true
                                )
                            )
                                return eff / 1.2;
                            return eff;
                        },
                    },
                    tag: {
                        respond: 1,
                        respondShan: 1,
                        damage(card) {
                            if (card.hasNature('poison')) return;
                            return 1;
                        },
                        natureDamage(card) {
                            if (card.hasNature()) return 1;
                        },
                        fireDamage(card, nature) {
                            if (card.hasNature('fire')) return 1;
                        },
                        thunderDamage(card, nature) {
                            if (card.hasNature('thunder')) return 1;
                        },
                        poisonDamage(card, nature) {
                            if (card.hasNature('poison')) return 1;
                        },
                    },
                },
                group: 'wensheng_add',
                subSkill: {
                    mark: {
                        mark: true,
                        intro: {
                            name: '文圣',
                            content(storage, player) {
                                return '已发动过文圣';
                            },
                        },
                        onremove(player, skill) {
                            player.draw();
                            if (player.storage.qieshu.length) {
                                player.storage.qieshu.pop();
                                if (player.storage.qieshu.length == 0) {
                                    player.unmarkSkill('qieshu');
                                }
                            }
                            player.removeMark('wensheng_mark', player.countMark('wensheng_mark'));
                        },
                    },
                    add: {
                        forced: true,
                        trigger: {
                            source: 'damageBegin1',
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && get.color(event.card) == 'black';
                        },
                        async content(event, trigger, player) {
                            let num = 0;
                            if (player.countCards('h') > trigger.player.countCards('h')) num++;
                            if (player.hp < trigger.hp) num++;
                            if (get.distance(trigger.player, player) <= 1) num++;
                            if (!trigger.trigger.card.number > game.players.length * 2) num++;
                            trigger.num += num;
                        }, //QQQ
                    },
                },
            },
            qieshu: {
                audio: 'bingqing',
                enable: 'phaseUse',
                marktext: '窃黍',
                intro: {
                    content: '已使用花色: $',
                },
                lose: false,
                init(player) {
                    if (!player.storage.qieshu) player.storage.qieshu = [];
                },
                nodelay: true,
                filterCard(card, player, target) {
                    return !player.storage.qieshu.includes(card.suit);
                },
                position: 'hej',
                filterTarget(card, player, target) {
                    return target.countCards('hej');
                },
                filter(event, player) {
                    let card = player.getCards('hes');
                    if (!player.countCards('hes') > 0) return false;
                    for (var i of card) {
                        if (!player.storage.qieshu.includes(i.suit)) {
                            return true;
                        }
                    }
                    return false;
                },
                check(card) {
                    return 5.5 - get.value(card);
                },
                async content(event, trigger, player) {
                    const card = event.cards[0],
                        cards = event.cards,
                        target = event.targets[0];
                    player.lose(cards, ui.cardPile, 'visible', 'insert');
                    player.storage.qieshu.add(card.suit);
                    player.markSkill('qieshu');
                    player.line(target, 'green');
                    player.gainPlayerCard(target, 'hej', true);
                },
                ai: {
                    order: 3.5,
                    result: {
                        player: 2,
                    },
                    threaten: 1.55,
                },
            },
            //太史慈TODO
            rgxdiyi: {
                mark: true,
                marktext: '地义',
                intro: {
                    content(storage, player) {
                        let str = player.getStorage('rgxdiyi').suit.length ? get.translation(player.getStorage('rgxdiyi').suit) : '啥也没有';
                        return str;
                    },
                },
                init(player) {
                    if (!player.storage.rgxdiyi)
                        return (player.storage.rgxdiyi = {
                            targets: [],
                            suit: [],
                        });
                },
                check(card) {
                    return 10 - get.value(card);
                },
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h', { name: 'sha' });
                },
                filterCard(card, player, target) {
                    return !player.storage.rgxdiyi.suit.includes(card.suit);
                },
                selectCard: [1, 1],
                filterTarget(card, player, target) {
                    return player != target && target.countCards('h');
                },
                selectTarget() {
                    return [1, _status.currentPhase.countCards('h', { name: 'sha' })];
                },
                precontent() {
                    player.draw(2 * player.countCards('h', { name: 'sha' }));
                },
                content() {
                    'step 0';
                    targets = player.getStorage('rgxdiyi').targets.length ? player.getStorage('rgxdiyi').targets : targets;
                    event.targets2 = (event.player2 ? event.targets2 : targets.filter((player) => player)).sortBySeat();
                    event.numx = event.numx || event.targets2.length;
                    event.player2 = event.targets2[event.targets2.length - event.numx];
                    if (event.player2.isIn() && event.player2.isAlive() && event.player2.countCards('h')) {
                        event.player2.chooseToCompare(player);
                    } else {
                        event.goto(3);
                    }
                    ('step 1');
                    if (result.num1 >= result.num2) {
                        player.storage.rgxdiyi.targets = targets.filter((player) => player != event.player2);
                        player.chooseBool('是否失去一点体力摸2张牌？').set('ai', function () {
                            let player = _status.event.player;
                            if (player.hp > 3) return true;
                            if (player.hp == 3 && player.countCards('h') < 3) return true;
                            if (player.hp == 2 && player.countCards('h') == 0) return true;
                            return false;
                        });
                    } else {
                        player.chooseCard(1, 'h');
                    }
                    ('step 2');
                    if (result.bool) {
                        if (result.cards && result.cards.length) {
                            player.useCard({ name: 'sha' }, result.cards, event.player2, false);
                        } else {
                            player.loseHp();
                            player.draw(2);
                        }
                    }
                    ('step 3');
                    if (!event.player2.isIn() || !event.player2.isAlive() || !event.player2.countCards('h')) {
                        player.storage.rgxdiyi.targets = targets.filter((player) => player != event.player2);
                    }
                    if (event.numx > 1) {
                        event.numx--;
                        event.goto(0);
                    } else {
                        event.finish();
                    }
                },
                contentAfter() {
                    player.storage.rgxdiyi.targets = [];
                    player.storage.rgxdiyi.suit.push(event.cards[0].suit);
                },
                ai: {
                    order: 8.5,
                    result: {
                        target(player, target) {
                            return get.damageEffect(target, player);
                        },
                    },
                },
            },
            rgxchangbing: {
                init(player) {
                    if (!player.storage.rgxdiyi)
                        return (player.storage.rgxdiyi = {
                            targets: [],
                            suit: [],
                        });
                },
                forced: true,
                trigger: { player: 'useCardToPlayered' },
                filter(event, player) {
                    return event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    game.broadcastAll(
                        function (target1, target2) {
                            game.swapSeat(target1, target2);
                        },
                        player,
                        trigger.target
                    );
                    if (player.getStorage('rgxdiyi').suit.length) {
                        let index = player.getStorage('rgxdiyi').suit.indexOf(player.getStorage('rgxdiyi').suit.randomGet());
                        player.getStorage('rgxdiyi').suit.splice(index, 1);
                    }
                },
                group: ['rgxchangbing_source', 'rgxchangbing_viewas'],
                subSkill: {
                    source: {
                        trigger: { source: 'damageBegin4' },
                        firstDo: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha'; //QQQ
                        },
                        forced: true,
                        async content(event, trigger, player) {
                            let farplayer = game
                                .filterPlayer(function (current) {
                                    return current.hp == trigger.player.hp;
                                })
                                .randomGet();
                            trigger.source = farplayer;
                        },
                    },
                    viewas: {
                        mod: {
                            cardname(card, player) {
                                let type = get.subtype(card, false);
                                if (type == 'equip1') return 'sha';
                            },
                            cardnature(card, player) {
                                let type = get.subtype(card, false);
                                if (type == 'equip1') return 'fire';
                            },
                        },
                    },
                },
            },
            //贾诩TODO
            rgxkuangmo: {
                usable: 1,
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target != player;
                },
                selectTarget: -1,
                multitarget: true,
                multiline: true,
                content() {
                    'step 0';
                    event.current = player.next;
                    event.currented = [];
                    ('step 1');
                    event.currented.push(event.current);
                    event.current.judge();
                    ('step 2');
                    if (result) {
                        if (player.getStorage('rgxgouqie2').includes(result.suit)) {
                            player.getStorage('rgxgouqie2').splice(player.getStorage('rgxgouqie2').indexOf(result.suit), 1);
                        }
                    }
                    ('step 3');
                    event.current = event.current.next;
                    if (event.current != player && !event.currented.includes(event.current)) {
                        event.goto(1);
                    }
                },
                group: 'rgxkuangmo_judge',
                subSkill: {
                    judge: {
                        trigger: { global: 'judgeEnd' },
                        filter(event, player) {
                            return event.player != player && event.getParent(2).skill == 'rgxkuangmo';
                        },
                        prompt(event, player) {
                            let str = '';
                            if (event.result && event.result.card) {
                                let suit = event.result.card.suit;
                                switch (suit) {
                                    case 'spade':
                                        str = get.translation(event.player) + '对一名其他角色造成0~2点伤害';
                                        break;
                                    case 'heart':
                                        str = get.translation(event.player) + '令一名其他角色翻面其摸一张牌';
                                        break;
                                    case 'diamond':
                                        str = get.translation(event.player) + '发动<奸雄>';
                                        break;
                                    case 'club':
                                        str = get.translation(_status.currentPhase == player ? '你' : _status.currentPhase) + '发动<熊乱>';
                                        break;
                                }
                            }
                            return str;
                        },
                        content() {
                            let next = game.createEvent('rgxkuangmo_judge');
                            next.cards = trigger.result.card;
                            next.player = trigger.player;
                            event.next.remove(next);
                            trigger.after.push(next);
                            switch (trigger.result.card.suit) {
                                case 'spade':
                                    next.setContent(lib.skill.rgxgouqie.damageRandom);
                                    break;
                                case 'heart':
                                    next.setContent(lib.skill.rgxgouqie.turnOver);
                                    break;
                                case 'diamond':
                                    next.setContent(lib.skill.rgxgouqie.gainCard);
                                    break;
                                case 'club':
                                    next.setContent(lib.skill.rgxgouqie.disabledJudge);
                                    break;
                            }
                        },
                    },
                },
                ai: {
                    order: 3.5,
                    result: {
                        player: 2,
                    },
                    threaten: 1.55,
                },
            },
            rgxgouqie: {
                init(player) {
                    if (!player.storage.rgxgouqie2) player.storage.rgxgouqie2 = [];
                    if (!player.storage.rgxgouqie) player.storage.rgxgouqie = false;
                },
                zhuanhuanji: true,
                marktext: '☯',
                mark: true,
                intro: {
                    content(storage, player) {
                        let str = player.getStorage('rgxgouqie') == true ? '阳:造成伤害' : '阴:受到伤害';
                        return str;
                    },
                },
                trigger: {
                    source: 'damageSource',
                    player: 'damageEnd',
                },
                filter(event, player) {
                    let length = 4 - player.getStorage('rgxgouqie2').length;
                    if (event.source == player && player.getStorage('rgxgouqie') == true) return length;
                    if (event.source != player && player.getStorage('rgxgouqie') == false) return length;
                    return false;
                },
                content() {
                    'step 0';
                    player.changeZhuanhuanji('rgxgouqie');
                    let str = '苟且:' + lib.translate.rgxgouqie_info + ',请选择一种花色对应效果';
                    let list = [];
                    for (var i of ['spade', 'heart', 'diamond', 'club']) {
                        if (!player.getStorage('rgxgouqie2').includes(i)) list.push(i);
                    }
                    player.chooseControl(list).set('prompt', str);
                    ('step 1');
                    let next = game.createEvent('rgxgouqie');
                    next.cards = trigger.cards || undefined;
                    next.player = player;
                    event.next.remove(next);
                    trigger.after.push(next);
                    switch (result.control) {
                        case 'spade':
                            next.setContent(lib.skill.rgxgouqie.damageRandom);
                            break;
                        case 'heart':
                            next.setContent(lib.skill.rgxgouqie.turnOver);
                            break;
                        case 'diamond':
                            next.setContent(lib.skill.rgxgouqie.gainCard);
                            break;
                        case 'club':
                            next.setContent(lib.skill.rgxgouqie.disabledJudge);
                            break;
                    }
                },
                damageRandom() {
                    'step 0';
                    event.player.getStorage('rgxgouqie2').add('spade');
                    event.player
                        .chooseTarget(true, function (card, player, target) {
                            return player != target;
                        })
                        .set('ai', function (target) {
                            let player = _status.event.player;
                            return get.damageEffect(target, player, player);
                        });
                    ('step 1');
                    if (result.bool) {
                        event.player.line(result.targets[0]);
                        result.targets[0].damage([0, 1, 2].randomGet());
                    }
                },
                disabledJudge() {
                    'step 0';
                    event.player.getStorage('rgxgouqie2').add('club');
                    let player = _status.currentPhase;
                    player
                        .chooseTarget(function (card, player, target) {
                            return player != target && !target.hasSkill('rgxgouqie_nouse');
                        })
                        .set('ai', function (target) {
                            let player = _status.event.player;
                            return get.damageEffect(target, player, player);
                        });
                    ('step 1');
                    if (result.bool) {
                        let player = _status.currentPhase;
                        let target = result.targets[0];
                        let disables = [];
                        for (var i = 1; i <= 5; i++) {
                            for (let j = 0; j < player.countEnabledSlot(i); j++) {
                                disables.push(i);
                            }
                        }
                        if (disables.length) player.disableEquip(disables);
                        if (!player.isDisabledJudge()) player.disableJudge();
                        player.addTempSkill('rgxgouqie_use');
                        target.addTempSkill('rgxgouqie_nouse');
                        target.markSkillCharacter('rgxgouqie_nouse', player, '苟且', '无法使用或打出任何手牌');
                    }
                },
                gainCard() {
                    event.player.getStorage('rgxgouqie2').add('diamond');
                    if (event.cards != undefined) event.player.gain(event.cards);
                    event.player.draw(2);
                },
                turnOver() {
                    'step 0';
                    event.player.getStorage('rgxgouqie2').add('heart');
                    event.player
                        .chooseTarget(true, function (card, player, target) {
                            return player != target;
                        })
                        .set('ai', function (target) {
                            let player = _status.event.player;
                            return get.damageEffect(target, player, player, 'fire');
                        });
                    ('step 1');
                    if (result.bool) {
                        result.targets[0].turnOver();
                        result.targets[0].draw();
                    }
                },
                group: 'rgxgouqie_mark',
                subSkill: {
                    use: {
                        mod: {
                            targetInRange(card, player, target) {
                                if (target.hasSkill('rgxgouqie_nouse')) {
                                    return true;
                                }
                            },
                            cardUsableTarget(card, player, target) {
                                if (target.hasSkill('rgxgouqie_nouse')) return true;
                            },
                        },
                        charlotte: true,
                    },
                    nouse: {
                        mod: {
                            cardEnabled2(card, player) {
                                if (get.position(card) == 'h') return false;
                            },
                        },
                        ai: {
                            effect: {
                                target(card, player, target) {
                                    if (get.tag(card, 'damage')) return [0, -999];
                                },
                            },
                        },
                        charlotte: true,
                    },
                    mark: {
                        init(player) {
                            player.markSkill('rgxgouqie_mark');
                        },
                        marktext: '苟且',
                        intro: {
                            content(storage, player) {
                                let str = player.getStorage('rgxgouqie2').length ? get.translation(player.getStorage('rgxgouqie2')) : '啥也没有';
                                return str;
                            },
                        },
                    },
                },
            },
            // 张飞
            // 咆哮
            // TODO
            rgxpaoxiao: {
                marktext: '咆笑',
                intro: {
                    content: '已使用花色: $',
                },
                mark: true,
                forceDie: true,
                init(player) {
                    if (!player.storage.rgxpaoxiao) player.storage.rgxpaoxiao = [];
                },
                trigger: {
                    player: 'phaseDiscardBefore',
                },
                filter(event, player) {
                    return (
                        player.countCards('h') &&
                        player.getCards('h').some(
                            (card) =>
                                !player.storage.rgxpaoxiao.includes(card.suit) &&
                                game.hasPlayer(function (current) {
                                    return player.canUse(card, current);
                                })
                        )
                    );
                },
                content() {
                    trigger.setContent(lib.skill.rgxpaoxiao.phaseDiscard);
                },
                phaseDiscard() {
                    'step 0';
                    let next = player.chooseToUse();
                    next.set('filterCard', function (card, player, target) {
                        return (
                            game.hasPlayer(function (current) {
                                return player.canUse(card, current);
                            }) && !player.storage.rgxpaoxiao.includes(card.suit)
                        );
                    });
                    next.set('selectCard', function () {
                        return [1, game.me.getDamagedHp()];
                    });
                    next.set('selectTarget', function () {
                        return [1, game.me.hp];
                    });
                    next.set('filterTarget', function (card, player, target) {
                        return get.distance(player, target) > player.getAttackRange();
                    });
                    player.addSkill('rgxpaoxiao_damage');
                    ('step 1');
                    if (result.bool) {
                        player.storage.rgxpaoxiao.add(result.cards.suit);
                        player.markSkill('rgxpaoxiao');
                    }
                },
                subSkill: {
                    damage: {
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        forceDie: true,
                        async content(event, trigger, player) {
                            await player.loseHp();
                            trigger.baseDamage++;
                            player.removeSkill('rgxpaoxiao_damage');
                        },
                        onremove(player) {
                            player.draw(3);
                        },
                    },
                },
            },
            rgxkuangcao: {
                init(player) {
                    if (!player.storage.rgxpaoxiao) player.storage.rgxpaoxiao = [];
                }, //QQQ
                trigger: {
                    player: ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseJieshuBegin'],
                },
                filter(event, player) {
                    let num = Math.max(player.getDamagedHp(), 1);
                    let num1 =
                        player.getHistory('useSkill', function (evt) {
                            return evt.skill == 'rgxkuangcao';
                        }).length || 0;
                    if (num1 >= num) return false;
                    return true;
                },
                prompt(event, player) {
                    let str = '';
                    switch (event.name) {
                        case 'phaseZhunbei':
                            str = '准备阶段';
                            break;
                        case 'phaseJudge':
                            str = '判定阶段';
                            break;
                        case 'phaseUse':
                            str = '出牌阶段';
                            break;
                        case 'phaseJieshu':
                            str = '结束阶段';
                            break;
                        case 'phaseDraw':
                            str = '摸牌阶段';
                            break;
                    }
                    return "是否将<span class='firetext'>【" + str + "】</span>修改为<span class='greentext'>【弃牌阶段】</span>？";
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                    let next = player['phaseDiscard']();
                    event.next.remove(next);
                    trigger.parent.next.push(next);
                    let list = [];
                    for (var i of player.storage.rgxpaoxiao) {
                        list.push(['花色', '', i]);
                    }
                    if (list.length) {
                        const { bool, links } = await player.chooseButton('狂草', ui.create.dialog([list, 'vcard']), [1, Math.max(player.getDamagedHp(), 1)]).forResult();
                        if (bool) {
                            for (var i = 0; i < links.length; i++) {
                                player.storage.rgxpaoxiao.splice(player.storage.rgxpaoxiao.indexOf([i][2]), 1);
                            }
                        }
                    }
                },
            },
            //蔡徐坤?
            kunkundance: {
                audio: 'ext:狂澜异世/audio:2:mp3',
                trigger: {
                    global: 'phaseZhunbeiBegin',
                },
                forced: true,
                zhuanhuanji: 'number',
                filter(event, player) {
                    return event.player != player && player.countMark('kunkunpingding');
                },
                async content(event, trigger, player) {
                    const list = {
                        1: '唱跳',
                        2: 'rap',
                        3: '篮球',
                    };
                    let listD = Object.values(list).filter((control) => list[(player.storage.kunkundance || 0) - 1] != control);
                    const { control } = await player.chooseControl(listD).set('promote', '选择一项').forResult();
                    let cm = player.countMark('kunkunpingding');
                    switch (control) {
                        case '唱跳':
                            await trigger.player.draw(cm);
                            player.storage.kunkundance = 1;
                            await trigger.player.damage(player.countMark('kunkunpingding'), 'nocard', player);
                            break;
                        case 'rap':
                            await trigger.player.draw(cm);
                            player.storage.kunkundance = 2;
                            break;
                        default:
                            await trigger.player.damage(cm, 'nocard', player);
                            player.storage.kunkundance = 3;
                            break;
                    }
                    player.changeZhuanhuanji('kunkundance');
                },
                mark: true,
                marktext: '♫',
                intro: {},
            },
            kunkunpingding: {
                audio: "'ext:狂澜异世/audio:2:mp3'",
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                forced: true,
                mark: true,
                marktext: '◕',
                intro: {
                    name: '蓄力点',
                    content(storage, player, skill) {
                        return '蓄力点数量:(' + player.storage.kunkunpingding + '/7)';
                    },
                },
                init(player) {
                    if (!player.storage.kunkunpingding) player.storage.kunkunpingding = 1;
                },
                filter(event, player) {
                    return event.player != player;
                },
                async content(event, trigger, player) {
                    let list = ['A', 'B', 'C', 'D', 'F'];
                    const { control } = await trigger.player
                        .chooseControl(list)
                        .set('ai', function () {
                            return list[Math.floor(Math.random() * list.length)];
                        })
                        .set('promote', '选择一项')
                        .forResult();
                    let marks = player.countMark('kunkunpingding');
                    switch (control) {
                        case 'A':
                            if (marks != 7) player.addMark('kunkunpingding');
                            player.draw();
                            player.recover();
                            break;
                        case 'B':
                            if (marks != 7) player.addMark('kunkunpingding');
                            player.recover();
                            break;
                        case 'C':
                            if (marks != 7) player.addMark('kunkunpingding');
                            player.draw();
                            break;
                        case 'D':
                            if (marks != 7) player.addMark('kunkunpingding');
                            break;
                        default:
                            if (marks != 0) player.removeMark('kunkunpingding');
                            player.loseHp();
                            player.loseMaxHp();
                            break;
                    }
                },
            },
            kunkunxifans: {
                audio: "'ext:狂澜异世/audio:2:mp3'",
                trigger: {
                    player: 'useCard2',
                },
                forced: true,
                filter(trigger, player) {
                    return (trigger.card.name == 'jiu' || trigger.card.name == 'tao' || trigger.card.name == 'sha' || get.type(trigger.card) == 'trick') && player.countMark('kunkunpingding') != 0 && trigger.targets.length >= 1;
                },
                filterx(event, player) {
                    let info = get.info(event.card);
                    if (info.allowMultiple == false) return false;
                    if (event.targets && !info.multitarget) {
                        if (
                            game.hasPlayer(function (current) {
                                return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
                            })
                        ) {
                            return true;
                        }
                    }
                    return false;
                },
                line: false,
                async content(event, trigger, player) {
                    let marks = player.countMark('kunkunpingding');
                    let bool1 = game.hasPlayer(function (current) {
                        return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, trigger.player, current);
                    });
                    if (bool1) {
                        const { index, control } = await player
                            .chooseControlList(get.prompt('kunkunxifans'), ['为' + get.translation(trigger.card) + '至多增加' + marks + '个目标', '为' + get.translation(trigger.card) + '至多减少' + marks + '个目标'], function (event, player) {
                                if (_status.event.add) return 0;
                                return 1;
                            })
                            .set('add', get.effect(player, trigger.card, trigger.player, player) >= 0)
                            .forResult();
                        if (control != 'cancel2') {
                            const { bool, targets } = await player
                                .chooseTarget('为' + get.translation(trigger.card) + (!index ? '增加' : '减少') + +marks + '个目标', [1, marks], function (card, player, target) {
                                    let trigger = _status.event.getTrigger();
                                    if (index) return trigger.targets.includes(target);
                                    return lib.filter.targetEnabled2(trigger.card, trigger.player, target) && player != target && !trigger.targets.includes(target);
                                })
                                .forResult();
                            if (bool) {
                                if (index) {
                                    for (var i of targets) {
                                        if (trigger.targets.includes(i)) {
                                            trigger.targets.splice(trigger.targets.indexOf(i), 1);
                                        }
                                    }
                                } else {
                                    for (var i of targets) {
                                        trigger.targets.push(i);
                                    }
                                }
                            }
                        }
                    }
                },
            },
            //夏侯
            yijieganglie: {
                audio: ['reganglie', 2],
                forced: true,
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return event.source != undefined;
                },
                async content(event, trigger, player) {
                    let process = async () => {
                        const { cards } = await player.draw().forResult();
                        await player.showCards(cards);
                        if (get.color(cards[0]) == 'red') {
                            await trigger.source.damage(trigger.num);
                        } else {
                            if (trigger.source.countCards('hej')) await player.discardPlayerCard(trigger.source, 'hej', true, 'visible');
                            await process();
                        }
                    };
                    await process();
                },
                ai: {
                    maixie_defend: true,
                    effect: {
                        target(card, player, target) {
                            return 0.8;
                        },
                    },
                },
            },
            yijietanlu: {
                audio: ['qingjian', 2],
                usable: 1,
                trigger: {
                    global: 'gainAfter',
                },
                filter(event, player) {
                    var evt = event.getParent('phaseDraw');
                    if (evt && evt.name != 'phaseDraw') return false;
                    return event.player != player;
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                async content(event, trigger, player) {
                    const card = trigger.cards;
                    let { cards: cardsG } = await trigger.player.give(card, player);
                    const { cards } = await player
                        .chooseCard(true, function (card) {
                            return cardsG.includes(card);
                        })
                        .set('ai', function (card) {
                            return get.value(card);
                        })
                        .forResult();
                    let next = player.addToExpansion(cards, player, 'giveAuto');
                    next.gaintag.add('yijietanlu');
                    player.getExpansions('yijietanlu').forEach((card) => {
                        if (get.type2(card) == get.type2(cards[0])) player.gain(card, 'gain2', 'log');
                    });
                    await next;
                },
                marktext: '☆',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                ai: {
                    threaten: 3,
                },
            },
            yijieduyan: {
                audio: ['sbyingzi', 2],
                trigger: { player: 'phaseDrawBegin2' },
                forced: true,
                filter(event, player) {
                    return !event.numFixed;
                },
                async content(event, trigger, player) {
                    trigger.num += player.getExpansions('yijietanlu').length;
                },
                mod: {
                    maxHandcard(player, num) {
                        return num + player.getExpansions('yijietanlu').length;
                    },
                    maxHandcardBase(player, num) {
                        return Math.ceil(player.hp / 2);
                    },
                },
            },
        },
        characterReplace: {},
        dynamicTranslate: {
            rgxmulue(player) {
                if (player.storage.rgxmulue)
                    return '阳:你可以弃置一张牌,摸X张牌并展示之,X为此牌的点数.\
从你的下一家开始,其可以选择这些牌中的至多两张牌获得之,获得你牌的角色获得等同于以此法获得牌数量的<募>标记.';

                return '阴:若场上角色有<募>标记,你可以选择一名其他角色,从你的下一家开始,有<募>标记且其不为你本次选择的角色须将一张牌当\
【杀】、火【杀】、雷【杀】、刺【杀】、【过河拆桥】、【决斗】、【万箭齐发】或【南蛮入侵】\
对你选择的角色使用.若其如此做,其移去一枚<募>标记.';
            },
        },
        translate: {
            crazyW: '异世狂澜',
            crazyWorld: '狂澜异世',
            tenYears: '十载春秋',
            longtao: '龙套天下',
            newjiyu: '糊卫觊',
            renewjiyu: '糊界卫觊',
            beitaganning: '糊β甘宁',
            yijieyangxiu: '糊杨修',
            rgx_zhengquan: '糊郑泉',
            spzhangliaoo: '糊张辽',
            rgx_spcaochun: '糊曹纯',
            db_rgxspmachao: '糊马超',
            rgxhuangyueying: '糊黄月英',
            rgxyishi: '一世',
            rgxershi: '二世',
            rgxsanshi: '三世',
            rgxsishi: '四世',
            rgxwushi: '五世',
            rgxliushi: '六世',
            rgxqishi: '七世',
            rgxbashi: '八世',
            rgxjiushi: '九世',
            mihoyolurenjia: '路人甲',
            rgxsunquan: '糊孙权',
            rgx2zhiheng: '制衡',
            rgxtgspxuzhu: '糊许褚',
            rgxspliuyan: '糊刘焉',
            rgxtgsppangtong: '糊庞统',
            rgxtgspzhaoyun: '糊赵云',
            mihoyotufeiding: '土匪丁',
            mihoyoyouji: '游击',
            mihoyoyouji_info: '①回合内,你可以将一张牌当一张你本回合未使用过的伤害牌使用;②回合外,你可以将一张牌当一张你本回合未使用过的非伤害牌使用',
            mihoyodubu: '独步',
            mihoyodubu_info: '锁定技,当你于回合内/外第一次使用的伤害类/非伤害类卡牌结算完毕后,你摸X张牌(X为你此牌的目标数且至少为1)',
            mihoyoliumangbing: '流氓丙',
            rgx2zhiheng_info: '出牌阶段,你可以将任意张手牌与牌堆顶的等量牌或与一名其他角色的等量手牌交换',
            rgxliye: '立业',
            rgxliye_info: '结束阶段,你从牌堆底摸X张牌(至多为5),X为本回合你发动过<制衡>的次数',
            xiulu2: '录淫',
            xiulu2_info: '锁定技,当你使用或打出一张牌时,若此牌的牌名未被记录,则记录之,否则摸一张牌,移除此牌名的记录',
            wugudeng: '吾丰',
            wugudeng_info: "出牌阶段限一次,你可以视为使用一张<span style='color: #ff2e63'>【吾谷丰登】</span>",
            beitalese: '乐色',
            beitalese_info: '锁定技,当你使用或打出一张[♠️️->♥️️->♣️️->♦️️]牌时,你摸一张牌.刷新四色循环时,你摸4张牌',
            beitasheniao: '贼害',
            beitasheniao_info: '出牌阶段限一次,你可以将任意张同花色牌交给一名其他角色,其需将与该牌不同花色的等量牌交给你. 若其未能交给你足够张数的牌,你对其造成X点伤害,你视为未发动此技能(X为不足的牌数)',
            beiguo: '背锅',
            beiguo_info: '锁定技,当一名角色使用杀指定目标后,你将此杀的使用者改为你',
            shiyongji: '势勇',
            shiyongji_info: '锁定技,当你使用杀指定一名目标后,你摸1张牌',
            yijiejilei: '鸡肋',
            yijiejilei_info: '出牌阶段限3次,你可以翻面,另一名角色的牌失效,直到其翻面时',
            yijieblackempty_info: '牌失效了',
            yijieblackempty: '失效',
            yijiedanlao: '啖酪',
            yijiedanlao_info: '出牌阶段限一次,你可以令一名角色翻面.若如此做,你与其各摸一张牌',
            rgx_shanbian: '熊言',
            rgx_shanbian_info: '当你需要使用或打出一张<span class=thundertext>杀</span>/<span class=firetext>闪</span>/<span class=yellowtext>桃</span>/<span class=greentext>无懈</span>时,你可以将一张<span class=thundertext>基本</span>/<span class=firetext>普通锦囊</span>/<span class=yellowtext>装备</span>/<span class=greentext>延时锦囊</span>牌当此牌使用或打出.若为使用,你获得上家一张牌;若为打出,你获得下家一张牌.若没有获得牌,则摸一张牌',
            rgx_likejiu: '酒鬼',
            rgx_likejiu_info: '锁定技,你每使用一张非虚拟牌且牌名不是【杀】的牌后,你视为使用一张【酒】',
            supertuxi: '突袭',
            supertuxi_info: '摸牌阶段开始时,你可以少摸一张牌.若如此做,你获得至少一名其他角色区域内的一张牌.当你获得一名角色的牌为【闪】时,则你再获得其一张牌,对其造成一点伤害',
            grayhorse: '灰影',
            grayhorse_info: '锁定技,你距离其他角色-你的体力值;其他角色计算与你的距离+你已损失体力值',
            rgx_fufu: '鳝甲',
            tianxing3: '天行',
            tianxing32: '天行',
            tianxing3_info: '出牌阶段限一次,你可以令一名其他角色在其下个出牌阶段开始时,进行一次判定.其需弃置与判定牌类型不同的牌.若其本次未弃置牌,则受到等同于其体力值点伤害',
            rgx_fufu_info: '锁定技,摸牌阶段开始时,若你有装备牌,你摸等同于你拥有装备牌数的牌并回复1点体力.回合结束,你从弃牌堆中获得基本、普通锦囊、延时锦囊、装备各一张.你的手牌上限+X,X为你拥有的装备牌/2(向上取整)-1',
            rgxtieqi: '闪骑',
            rgxtieqi_info: '当你使用一张杀指定目标后,你可以进行一次判定.若结果为♣️️♣️️️,目标角色受到一点雷电伤害.若为♥️️♥️️️,你回复一点体力.若为♠️️♠️️️,你摸一张牌.若为♦️️♦️️️,你获得判定牌并另此杀不计入次数,随机获得一个技能并加一点体力上限',
            rgxliema: '断月',
            rgxliema_info: '每回合限一次,当一名其他角色使用一张杀指定其他目标后,你可以将此杀使用者改为你',
            rgxzhiheng: '制衡',
            rgxzhiheng_info: '吴势力技,出牌阶段限一次,你可以弃置任意张牌,摸X张牌.X为弃置的牌数+因此法弃置的装备牌数量',
            rgxrende: '仁德',
            rgxrende_info: '蜀势力技,当你受到伤害后,你可以选择一名其他角色,你失去一点体力上限,其增加一点体力上限',
            rgxzhikong: '祗控',
            rgxzhikong_info: '锁定技,游戏开始时,你随机从技能库中获得一个你所属势力的技能',
            rgxshenyu: '神御',
            rgxshenyu_info: '每回合限一次,当你成为一名角色使用牌的目标后,你根据此牌的颜色以及不同的条件,执行不同的效果.红色:若你已受伤,回复一点体力;黑色:若你有手牌,摸等同于此牌点数的牌与你体力值之差张牌;🃏:你对当前角色造成一点伤害',
            rgxshengge: '笙歌',
            rgxshengge_info: '当你受到有来源的伤害时,你可以失去一点体力令此伤害-1,你摸等同于体力值×已损失体力值张牌.若如此做,当前回合结束时,你回复一点体力并与伤害来源依次受到一点无来源的伤害',
            rgxyexing: '夜行',
            rgxyexing_info:
                '锁定技,回合开始时,你随机获得一个持续到你的下个回合开始前的效果:\
        <span style="color: #30e3ca">①摸牌阶段你多摸<span style="color: #e84a5f">X</span>张牌;你的手牌上限+<span style="color: #e84a5f">X</span></span>\
        <span style="color: #f08a5d">②你的【杀】可多使用<span style="color: #e84a5f">X</span>次</span>\
        <span style="color: #3f72af">③你回复体力后摸<span style="color: #e84a5f">X+1</span>张牌</span><br>\
        <span style="color: #e84a5f">X</span>为你的体力值×你已损失体力值',

            rgxqiyu: '奇遇',
            rgxqiyu_1: '手牌类型',
            rgxqiyu_info: '当你失去一张牌后,若此牌点数等于你手中牌名个数且你手牌中有可以合法使用的牌,你记录手牌中有可以合法使用的牌的牌名(非重复),        你可以依次视为使用这些牌两次',
            rgxfeilong: '飞达',
            rgxskyshun: '天顺',
            rgxskyshun_info: '锁定技,你不能成为【兵粮寸断】的目标',
            rgxfeilong_info: '锁定技,当你摸牌阶段获得牌时,你将这些牌加入s区域.当你使用s区域的牌后,你从牌堆与弃牌堆分别获得两张与此牌类型不同的牌',
            rgxhaogui: '豪贵',
            rgxhaogui_info: "当你使用牌结算完毕后,此牌回到你的手牌区.下一次使用该牌后,此牌不会触发'豪贵'",
            rgxyizheng: '轶政',
            rgxyizheng_info:
                '出牌阶段限一次,你可以交给一名其他角色一张牌.若此牌为:\
<li class="yellowtext">基本牌:你与其各摸一张牌</li>\
<li class="greentext">锦囊牌:其对你发起拼点,没赢的角色失去一点体力</li>\
<li class="thundertext">装备牌:你对其造成一点伤害</li>',

            rgxzhige: '挚歌',
            rgxtianzang: '天葬',
            rgxzhige_info:
                "每回合限X次,X为你的体力上限,当你获得牌/失去牌/回复体力/受到伤害后,你以[<span class='firetext'>事件名</span>,<span class='greentext'>当前回合角色</span>,<span class='thundertext'>数量</span>]的方式记录之.\
你可以摸X张牌,X为新纪录与原记录不符的项数",

            rgxtianzang_info:
                '当你死亡时,你可以将你的牌交给任意名角色.\
以此法获得你牌的角色可以摸一张牌或回复一点体力,你减一点体力上限',

            rgxdingshui: '固税',
            rgxdingshui_info: '出牌阶段,你可以弃置一张牌(本局游戏基本牌、锦囊牌、装备牌各限一次).摸牌阶段你多摸X张牌,X为本局游戏你以此法弃置的牌数',
            rgxbeijun: '备军',
            rgxbeijun_info: '弃牌阶段,你可以多弃置一张牌.若如此做,你将此阶段弃置的牌置于你的武将牌上称为‘军’,你令一名角色获得一点护甲',
            rgxfuguo: '复国',
            rgxfuguo_info:
                "使命技,你的手牌上限+1.\
<li >成功:一名其他角色进入濒死时,若你因<固税>弃置的牌数量为3且<军>不小于你的体力值,你减一点上限,回复一点体力或摸两张牌,获得技能<狂澜>.</li>\
<li >失败:摸牌阶段若你的摸牌数小于[<span class='greentext'>游戏轮数</span>,<span class='firetext'>5</span>]中的<span class='thundertext'>较小值</span>,你获得所有<军>.你失去<备军>且手牌上限-X,X为你因<固税>弃置的牌数量</li>",

            rgxcrazyStorm: '狂澜',
            rgxcrazyStorm_info: '当你需要使用或打出一张基本牌时,你可以移去一张<军>视为使用或打出了此牌.若此<军>你可以合法使用,你可以使用之.',
            rgxmulue: '募掠',
            rgxmulue_info:
                '转换技,出牌阶段限两次,阳:你可以弃置一张牌,摸X张牌并展示之,X为此牌的点数.\
从你的下一家开始,其可以选择这些牌中的至多两张牌获得之,获得你牌的角色获得等同于以此法获得牌数量的<募>标记.\
阴:若场上角色有<募>标记,你可以选择一名其他角色,从你的下一家开始,有<募>标记且其不为你本次选择的角色须将一张牌当\
【杀】、火【杀】、雷【杀】、刺【杀】、【过河拆桥】、【决斗】、【万箭齐发】或【南蛮入侵】\
对你选择的角色使用.若其如此做,其移去一枚<募>标记.',

            rgxwangge: '王歌',
            rgxwangge_info: '当一名其他角色使用牌指定目标包含你时,若其拥有<募>标记,你可以令此牌无效.若如此做,其弃置一枚<募>标记.一名角色死亡时,你摸X张牌,X为其拥有的<募>标记数',
            rgxshenshou: '神授',
            rgxshenshou_info:
                '锁定技,①你的摸牌阶段获得的牌与【无中生有】摸的牌修改为从牌堆中获得点数之和为36的牌.\
        <li>②当你进行判定时,中止此次判定并获得判定牌.</li>',

            rgxtongyu: '统御',
            rgxtongyu_info:
                '出牌阶段限一次,你可以亮出牌堆顶X张牌.\
        你对一名其他角色造成等同于亮出牌中黑色牌数量点雷电伤害并摸等同于红色牌数量的牌.\
        你累计以此法造成的雷电伤害数大于X时,下一次你受到伤害时防止之,X为你的体力值',

            mihoyosanxing: '流风',
            mihoyosanxing_info: '出牌阶段限一次,你可以令一名角色将手牌摸至体力上限(至多为5)',
            moshaozuduan: '葶立',
            moshaozuduan_info: '弃牌阶段,若你的手牌包含花色数不大于你的体力上限,你可以改为弃置所有手牌,获得牌名不同的基本牌各一张',
            yujicheng: '余既成',
            rgx_jiandao: '剑道',
            rgx_jiuxian: '救陷',
            rgx_juqi: '聚气',
            rgx_jiuge: '九歌',
            rgx_jiuge1: '九歌一级',
            rgx_jiuge2: '九歌二级',
            rgx_jiuge3: '九歌三级',
            rgx_yukey: '御神',
            rgx_yuqi: '御气',
            rgx_startdown: '星殒',
            rgx_startdown_info: '限定技,出牌阶段,你可以将一名角色移出游戏',
            rgx_tianxing: '天行',
            rgx_tianxing2: '天行',
            rgx_jiuge_x: '九歌',
            rgx_jiandao_true: '剑道:阳',
            rgx_jiandao_false: '剑道:阴',
            rgx_jiuge_x_info: '<li>九歌一级:锁定技,随机技,出牌阶段开始时,若你的手牌数为[3~6]或[6~9]或[9~12]的倍数,本回合你使用的前[3~6]张牌无次数与距离限制,下次"九歌"发动条件中的数字与技能效果中的数字均-1</li><li>九歌二级:锁定技,随机技,出牌阶段开始时,若你的手牌数为[3~6]或装备数为[6~9]或体力值为[9~12]的倍数,本局回合你使用的前[6~9]张牌无次数与距离限制,下次"九歌"发动条件中的数字与技能效果中的数字均-1</li><li>九歌三级:锁定技,随机技,出牌阶段开始时,若现存势力数为[3~6]或装备数为[6~9]或你的手牌数为[9~12]或的倍数,本回合你使用的前[9~12]张牌无次数与距离限制.下次"九歌"发动条件中的数字与技能效果中的数字均-1</li><li>九歌四级:锁定技,出牌阶段开始时,若你的手牌数+体力值+存活人数+现存势力数为[1~3]的倍数,本回合你使用的牌无次数与距离限制.</li>',
            rgx_jiandao_info: '锁定技,AB转换技,四转换技,杂交技,<li>A:当你使用一张【杀】时 <i><li>a:当你造成一点伤害:摸3张牌</li><li>b:当你受到一点伤害:与伤害来源交换装备区的牌</li></i></li>   <li>B:当你使用一张【闪】时 <i><li>a:当你造成一点伤害:从牌堆底摸3张牌</li><li>b:当你受到一点伤害:与伤害来源交换手牌</li></i></li>',
            rgx_jiuxian_info: '当一名角色进入濒死时,你可以令其回复一点体力.若如此做,其摸两张牌,减一点体力上限',
            rgx_juqi_info: '一名其他角色回合结束时,你从牌堆 阴:底 / 阳:顶 摸一张牌,你可以对其造成一点伤害',
            rgx_jiuge_info: '<li>九歌一级:锁定技,随机技,出牌阶段开始时,若你的手牌数为<span class=thundertext>[3~6]</span>或<span class=thundertext>[6~9]</span>或<span class=thundertext>[9~12]</span>的倍数,本回合你使用的前<span class=thundertext>[3~6]</span>张牌无次数与距离限制,下次"九歌"发动条件中的数字与技能效果中的数字均-1</li><li>九歌二级:锁定技,随机技,出牌阶段开始时,若你的手牌数为<span class=firetext>[3~6]</span>或装备数为<span class=firetext>[6~9]</span>或体力值为<span class=firetext>[9~12]</span>的倍数,本局回合你使用的前<span class=firetext>[6~9]</span>张牌无次数与距离限制,下次"九歌"发动条件中的数字与技能效果中的数字均-1</li><li>九歌三级:锁定技,随机技,出牌阶段开始时,若现存势力数为<span class=greentext>[3~6]</span>或装备数为<span class=greentext>[6~9]</span>或你的手牌数为<span class=greentext>[9~12]</span>或的倍数,本回合你使用的前<span class=greentext>[9~12]</span>张牌无次数与距离限制.下次"九歌"发动条件中的数字与技能效果中的数字均-1</li><li>九歌四级:锁定技,出牌阶段开始时,若你的手牌数+体力值+存活人数+现存势力数为<span class=yellowtext>[1~3]</span>的倍数,本回合你使用的牌无次数与距离限制.</li>',
            rgx_yukey_info: '锁定技,回合开始时,你从"御气","聚气","九歌","天行","星陨"选择一个技能获得之.:<li>1.若技能获取完毕,则不再获取</li><li>2.当你获得"九歌"时,获得4*4随机数字矩阵,矩阵前3行是"九歌"升级关键数字,第四行是确定行.</li><li>3.当"九歌"中的数字变为0时,升级"九歌",并可以摸2张牌或回复1点体力</li></br>',
            rgx_yuqi_info: '锁定技,一名角色使用或打出一张[♠️️->♥️️->♣️️->♦️️]💞牌时,根据"剑道"的状态,你从牌堆 阴:底 / 阳:顶 摸一张牌',
            rgx_tianxing_info: '出牌阶段限一次,你可以令一名其他角色在其下个出牌阶段开始时,进行一次判定.其需弃置与判定牌类型不同的牌.若其本次未弃置牌,则受到等同于其体力值点伤害',
            rgxtgspcaocao: '糊曹操',
            rgxzhucheng: '筑城',
            rgxzhucheng_info: '回合开始前,若你的手牌数与体力值不等,你可以将手牌摸至/弃至与体力值相等.若如此做,你获得等同于两者之差的护甲',
            rgxceji: '策计',
            rgxpingguan: '平关',
            rgxchongqi: '冲骑',
            rgxchongqi_info: '当你使用一张【杀】指定一名与你距离为1目标后,你可以弃置其手牌和装备区各一张牌',
            rgxjvejun: '决军',
            rgxjvejun_info: '锁定技,当你造成或受到一点伤害后,你摸X张牌,弃置一张牌.(X为你已损失体力值且至少为1)',
            rgxceji_info: '出牌阶段限一次,你可以选择两名手牌数不等的其他角色,手牌较少的角色对手牌较多的视为使用一张无距离限制的【杀】.若此杀命中,受伤角色须将手牌弃至与伤害来源相同',
            rgxpingguan_info: '主公技,觉醒技,一名角色回合结束时,若当前回合角色击杀了角色且你的护甲数不小于势力数,你减一点上限,回复一点体力或摸两张牌,失去<筑城>,获得技能<决军>与<冲骑>',
            rgxyaolu: '摇橹',
            rgxyaolu_info:
                '出牌阶段限一次,你可以进行一次判定流程.\
若此技能进行本回合第一次判定或判定颜色与上次判定颜色不同,你令一名角色获得判定牌并继续判定,否则你获得判定牌',

            rgxguoyi: '裸衣',
            rgxguoyi_info: '锁定技,一轮游戏开始时,若你防具栏未被废除,你废除防具栏并摸一张牌.你使用一张【杀】或【决斗】时,若防具栏已被废除,你可以弃置一张防具牌令此牌不可被响应且伤害+1,你回复防具栏',
            rgxtushe: '图射',
            rgxtushe_info: '当你成为非装备牌的目标时,你可以摸X张牌,X为此牌的目标数',
            rgxlimu: '立牧',
            rgxlimu_info: '出牌阶段,你可以蓄谋,若你的体力不为1,你失去一点体力摸X+1张牌,X为你已损失体力值.若你的判定区有牌,你使用牌无距离和次数限制',
            rgxlianji: '链计',
            rgxluofeng: '落凤',
            rgxlianji_info: '锁定技,当一名角色翻面或进入横置或重置时,你摸一张牌',
            rgxluofeng_info: '当你需要使用或打出一张【杀】或【闪】时,若你未处于翻面/横置或重置状态,你可以翻面且横置/重置,视为你使用或打出一张杀或闪',
            rgxhuzhu: '救主',
            rgxhuzhu_info: '出牌阶段,你可以将一张牌当与此牌牌名字数相同的牌使用(以此法使用的杀无次数限制).若此牌击杀了角色,你获得一张与你以此法使用的牌同名同属性的牌',
            rgxjuejing: '绝境',
            rgxjuejing_info: '锁定技,你的手牌上限+2.当你成为牌的目标、使用或打出牌后,若你的手牌数不为全场最多,你摸一张牌',
            rgxjizhi: '集智',
            rgxjizhi_info: '锁定技,当一名角色使用一张锦囊牌时,你摸X张牌,X为你已损失体力值且至少为1',
            rgxqicai: '奇才',
            rgxqicai_info: '回合结束时,若你于本回合内发动过<集智>,你可以进行一个包含至多X个阶段的额外回合,X为你本回合发动<集智>的次数且至多为6',
            rgxkongcheng: '控城',
            rgxjingcui: '尽脆',
            rgxkongcheng_info:
                '锁定技,当你使用一张牌结算完毕后,若你手牌中有缺少的花色数,你摸X张牌并弃置一张牌(X为你缺少的花色数).\
        若你的手牌数不大于你的体力值,你不能成为【杀】和【决斗】的目标',

            rgxjingcui_info:
                '出牌阶段限一次,你可以对一名角色造成一点火焰伤害.\
        若其装备区有坐骑牌,你获得『马术』;有防具牌,你获得『冲骑』;有武器牌,你获得『蒺藜』;有宝物牌,你获得『破军』,直到当前回合角色结束',

            rgxzugeliang: '糊诸葛亮',
            rgxdingfeng: '丁奉',
            rgxluzhen: '戮阵',
            rgxluzhen_info:
                '锁定技,当你成为其他角色使用牌的目标时,你进行一次判定并获得判定牌.若判定牌牌名未被记录,则记录此牌名,令此牌对你无效.\
当一名角色使用一张牌后,若此牌牌名已被记录,则清除此牌名的记录,你摸一张牌',

            rgxguanjun: '冠军',
            rgxguanjun_info:
                '出牌阶段,你可以选择没有技能【戮阵】的一名角色或弃置至多2张手牌.\
若你因此法弃置了牌,场上拥有【戮阵】的角色依次摸等量的牌,本回合你不能再发动此技能且你的护甲不能为你抵挡伤害;\
你与你选择的角色各减X点体力上限(X为各自已损失体力值且至少为1),若如此做,其获得【戮阵】',

            mihoyopaohuiyi: '炮灰乙',
            mihoyofujiang: '附江',
            mihoyofujiang_info: '锁定技,你视为拥有你的上一家或下一家各一个技能',
            mihoyoyunjuan: '云卷',
            mihoyoyunjuan_info: '出牌阶段限一次,你可以对其他角色依次视为使用一张【杀】,你选择与一名其他角色与其交换座次',
            mihoyoanxing: '自侠',
            mihoyobuji: '不羁',
            mihoyoanxing_info: '出牌阶段限一次,你可以弃置一名其他角色的手牌和装备区各一张牌',
            mihoyobuji_info: '锁定技,当你造成或受到一点伤害后,摸X张牌(X为你已损失体力值且至少为1)',
            cikewuliuqi: '<img style=width:80px src=extension/狂澜异世/image/others/wuliuqi.webp />',
            hoyotianxia: '米哈游',
            lini: '群友自设',
            qunyouzishe: '群友自设',
            mihoyolinni: '琳妮特',
            mihoyoheita: '黑塔',
            mihoyoqi: '柒',
            yidemeifang: '巫女K',
            mihoyojingliu: '镜流',
            mihoyozhouwang: '纣王',
            mihoyobachong: '八重神子',
            mihoyoliuxun: '刘循',
            hoyochongvu: '冲虚',
            hoyochongvu_info:
                '出牌阶段限一次,你可以选择一张手牌,冲一把牌堆底的牌(对象为<杀>),将你选择的手牌与牌堆顶的X张牌亮出,X为牌堆顶牌的牌名字数.\
        你将此手牌当【无中生有】使用,获得剩余被亮出的牌并视为你受到或Y点伤害,Y为获得剩余牌的牌数.\
        若你因此受到了伤害,你摸Y张牌',

            hoyoshasheng: '杀生',
            hoyoshasheng_info:
                '锁定技,一轮游戏开始时,你选择X名其他角色,获得‘杀生樱’标记,X为除你以外的场上存活人数一半向下取整.\
        其出牌阶段开始时,随机对Y名其他角色造成一点雷电伤害,若此次造成的总伤害大于1,你摸一张牌,Y为其拥有的标记数',

            hoyoyuhui: '御？',
            hoyoyuhui_info: '出牌阶段你需要使用基本牌或伤害类锦囊牌时,你可以死亡,视为你使用之且此牌目标为3个,将你死亡弃置的牌交给下一家',
            hoyohumeng_eye: '看梦',
            hoyohumeng_eye_info: '出牌阶段限三次,你可以令两名角色交换体力值,回合结束时你摸等同于交换总差值的牌',
            hoyohumeng_live: '生梦',
            hoyohumeng_live_info: '准备阶段开始时,你回复一点体力并获得三种类型不同的牌各一张',
            hoyohumeng_ear: '听梦',
            hoyohumeng_ear_info: '你获得等同于你体力值的护甲.一名其他角色回合开始时,你可以失去一点护甲,获得其一张牌并视为对其使用一张无距离限制的刺【杀】',
            hoyohumeng_nose: '嗅梦',
            hoyohumeng_nose_info: '每名其他角色限一次,当一名角色使用牌结算完毕后,你进行一次判定.若结果为♥️️,其跳过下一个出牌阶段,否则受到一点雷电伤害',
            hoyohumeng_die: '死梦',
            hoyohumeng_die_info: '出牌阶段开始时,你令一名其他角色的非锁定技失效,你对其使用牌无距离和次数限制,其不能使用或打出手牌且装备牌失效直到回合结束',
            hoyohumeng_mouth: '吞梦',
            hoyohumeng_mouth_info: '摸牌阶段,你可以改为与至多6名其他角色拼点.你以此法拼点的牌的点数改为从<六狐>牌中任意一张的点数.没赢的角色选择弃置一张牌或令你摸一张牌',
            hoyohumeng: '狐梦',
            hoyohumeng_info:
                '锁定技,游戏开始时,你将六张牌置于武将牌上,这些牌称之为<六狐>.<br>\
①每张<六狐>牌被依次命名为「生」「死」「耳」「目」「口」「鼻」.<br>\
②每回合限一次,当你需要使用或打出一张>六狐<牌包含牌名的牌时,你可以视为使用或打出之.<br>\
③回合开始时,你可以减一点上限,选择一张<六狐>牌交换牌堆顶的一张牌,并获得一种持续至下一回合开始时的对应效果:<br>\
「生」:准备阶段开始时,你回复一点体力并获得三种类型不同的牌各一张<br>\
「死」:出牌阶段开始时,你令一名其他角色的非锁定技失效,你对其使用牌无距离和次数限制,其不能使用或打出手牌且装备牌失效直到回合结束<br>\
「耳」:你获得等同于你体力值的护甲.一名其他角色回合开始时,你可以失去一点护甲,获得其一张牌并视为对其使用一张无距离限制的刺【杀】<br>\
「目」:出牌阶段限三次,你可以令两名角色交换体力值,回合结束时你摸等同于交换总差值的牌<br>\
「口」:摸牌阶段,你可以改为与至多6名其他角色拼点.若你没有手牌则摸一张进行拼点.没赢的角色选择弃置一张牌或令你摸一张牌<br>\
「鼻」:每名其他角色限一次,当一名角色使用牌结算完毕后,你进行一次判定.若结果为♥️️,其跳过下一个出牌阶段,否则受到一点雷电伤害.<br>',

            hoyoqiuyu: '求谕',
            hoyoqiuyu_info: '出牌阶段限一次,你可以与至少X名其他角色+进行议事,X为1/3场上人数+1(向下取整).若红>黑,你对红色方使用一张【桃园结义】;若黑>红,你对黑色方使用一张【五谷丰登】,否则你回复一点体力并摸两张牌',
            hoyoliuying: '流影',
            hoyoliuying_info:
                '①当你使用虚拟牌造成伤害后,你从牌堆中获得一张与此牌同类别的牌;\
        ②当你使用转化牌造成伤害后,你根据转化牌对应实体牌描述中包含的特定词,执行对应效果:<br>\
        Ⅰ 伤害:回复一点体力<br>\
        Ⅱ 抵消:摸一张牌<br>\
        Ⅲ 距离:对一名其他角色造成一点伤害<br>\
        Ⅳ 判定:弃置一名其他角色区域内的一张牌',

            hoyofeiguang: '飞光',
            hoyofeiguang_info:
                '转换技,当你需要使用或打出一张冰【杀】时,\
        你可以将<span class="greentext">阳:X </span><span class="firetext">阴:3-X</span>张牌当冰【杀】使用或打出,X为『生灭』可发动次数.\
        若此牌为使用且对应的实体牌包含杀,此杀目标数为2;若此牌为打出且为虚拟牌,此杀结算完毕后『生灭』可发动次数+1',

            hoyoshengmie: '生灭',
            hoyoshengmie_info:
                '本局游戏限2次,结束阶段,若你于此回合造成过伤害,你可以视为使用一张无距离限制的、目标数至多为X的冰【杀】,X为本回合造成的伤害值.\
        此牌结算完毕后,你从牌堆中获得牌名不同的基本牌各一张.牌堆洗牌时,此技能可发动次数+1,此技能可使用次数至多为3.',

            myjisheng: '寄生',
            myxintu: '「信徒」',
            myjisheng_info:
                '1.游戏开始时,你摸两张牌并标记为「信徒」,你可以将这些牌分别交给一名角色,其不能使用、打出和弃置「信徒」牌.\
        2.当一名手中有信徒的角色于出牌阶段获得牌时,其需交给你一张非「信徒」牌,否则失去一点体力\
        3.当一名手中有「信徒」牌的角色对你造成伤害时,防止之,你获得其「信徒」牌\
        4.准备阶段开始时,你可以观看一名其他角色的手牌,将其中一张牌标记为「信徒」\
        5.当一名有「信徒」牌的角色进入濒死时,你可以将一张牌当【桃】对其使用.一名有「信徒」牌的角色脱离濒死状态时,你摸X张牌,X为场上有「信徒」牌的角色的数量\
        6.你的手牌上限+X',

            hoyomiying: '谜影',
            hoyomiying_info: '当你获得牌时,你复制这些牌并加入到你的手牌区并与被复制的牌组对,称为<组牌>.当<组牌>中的任意一张因使用而进入弃牌堆时,另一张也弃置之并令此牌基础伤害+1,并刷新<魔术>的随机牌.        当<组牌>中的任意一张不因使用而失去后,你可以使用另一张',
            hoyomoshu: '魔术',
            hoyomoshu_info: '当你需要使用或打出一张随机牌时,你可以视为使用此随机牌',
            hoyoicome: '我来',
            hoyoicome_info: '当一名其他角色造成伤害后,若受伤角色的体力值不低于体力上限的一半,你可以选择一项:1.视为对至多X名角色使用一张冰【杀】(X为此次的伤害值且此【杀】无距离限制无视防具);2.一名角色回合结束后,你额外获得一个回合',
            hoyojiwu: '集物',
            hoyojiwu_info: '当你成为一张牌的目标时,若此牌花色未被记录,则记录之令此牌无效;当你使用牌后,若此牌的花色已被记录,你可以清除此花色令此牌额外结算一次,你随机从牌堆中获得一张同类别的牌',
            hoyosuming: '宿命',
            hoyosuming_info:
                '锁定技,你失去伤害/非伤害类卡牌后,其他角色计算与你的距离-/+1,一轮游戏开始时重置此效果.你的手牌上限+X,X为你装备的武器数.\
        本局游戏限一次,当你进入濒死时,你可以弃置所有装备,将体力值回复至1点,增加一个武器栏获得『御剪』并修改『千刃』:获得【魔刀千刃】不会失去体力',

            hoyoqianren: '千刃',
            hoyoqianren_info:
                "出牌阶段,若场上没有【魔刀千刃】,你可以失去一点体力,获得【魔刀千刃】并置入你的武器栏.\
        <br><span class=\'firetext\'>☆</span><span class=\'thundertext\'>†魔刀千刃:碎刃:当你使用【杀】指定一名目标时,你令其非锁定技失效.\
        你使用的【杀】无次数限制,造成伤害无视护甲且此【杀】伤害+1～+7.\
        汲取:你击杀一名角色后,你回复X点体力并摸X张牌,X为其初始拥有的技能数.\
        其他角色装备该武器后,其失去999点体力且不能使用或打出手牌</span>",

            hoyoyujian: '御剪',
            hoyoyujian_info:
                "准备阶段,你可以获得【剪刀】一把并置入你的武器栏.\
        <br><span class=\'firetext\'>☆</span><span class=\'thundertext\'>\
        ✂︎剪刀:飞剪:当一名角色造成伤害时,你可以观看即将受伤角色的手牌,并选择弃置其一张黑色牌,若如此做,弃置并销毁此武器,令此伤害-1\
        回收:当此牌因发动『飞剪』而销毁时,摸2张牌,</span>",

            hoyofengche: '奉车',
            hoyofengche_info: '出牌阶段,若你已使用的牌点数之和不大于13,你使用牌时摸两张牌.若此牌为【杀】,则你令此牌无法响应且伤害+1',
            hoyojushou: '力守',
            hoyojushou_info: '当你受到伤害后,你可以展示一张装备牌并使用之,摸X张牌(X为场上装备区内花色与此牌相同的牌数)',
            pixelWorld: '像素世界',
            cemouzhike: '策谋之刻⏱️',
            xueruochongzhi: '削弱重置🛞',
            pixelzhuegliang: 'PX诸葛亮',
            pixelcaoyingL: 'XR曹婴',
            sanfentianxia: '三分天下🧭',
            pixelzhizhe: '智哲',
            pixelzhizhe_info: '锁定技,当你于当前角色回合第一次使用牌结算完毕后,若你的手牌包含花色数不为4,你摸X张牌(X为4-手牌中包含的花色数)',
            pixelhuoji: '火计',
            pixelhuoji_info: '出牌阶段限一次,你可以对一名角色造成一点火焰伤害.若其装备区内有坐骑牌,你获得『马术』直到当前回合结束',
            pixelcaoying: 'PX曹婴',
            pixellingren: '凌人',
            pixellingrenL: '凌人',
            pixellingrenL_info: '每回合限一次,当你对其他角色造成伤害时,若X大于0,你可以令此伤害+X(X为你的手牌数、体力值和装备区中的牌数大于其的数量).若其因此而进入濒死状态,你加一点体力上限,否则减少一点体力上限',
            pixelfujian: '伏间',
            pixellingren_info: '每回合限一次,当你对其他角色造成伤害时,若X大于0,你可以令此伤害+X(X为你的手牌数、体力值和装备区中的牌数大于其的数量).若其因此而进入濒死状态,你加一点体力上限,否则减少一点体力上限',
            pixelfujian_info: '锁定技,出牌阶段开始时,你将体力值回复至体力上限并摸等量张牌;出牌阶段结束时,你失去等量点体力并弃置等量张牌',
            pixelniujin: 'PX牛金',
            pixelcuirui: '摧锐',
            pixelcuirui_info:
                '限定技,出牌阶段,你可以获得一名其他角色区域内至多X张牌,本回合你可以额外多使用X张杀(X为你的体力上限).\
        若本回合其进入过濒死状态,你于当前回合结束后重置此技能',

            pixelliewei: '裂围',
            pixelliewei_info: '锁定技,当一名角色进入或脱离濒死状态时,你摸一张牌.若此时是你的回合,你额外摸X张牌(X为场上已死亡角色数)',
            pixelsimayi: 'PX司马懿',
            pixelxingshi: '兴势',
            pixelsanlue: '三略',
            pixelxingshi_info:
                '出牌阶段限一次,你可以调整两枚『三略』标记的顺序.<br>\
        ①当你使用一张杀结算完毕后,你获得一枚<蜀>标记;\
        ②当你受到一点伤害时,你获得一枚<魏>标记;\
        ③当你不因摸牌阶段而摸牌后,你获得一枚<吴>标记.上述标记以[A,B]的形式存在,至多同时存在两枚',

            pixelsanlue_info:
                '锁定技,你拥有对应的『三略』标记,你执行对应效果,若同标记数为2,则触发二阶效果.\
        回合开始时,若你拥有的标记数不为2,你随机获得X枚标记并增加X点体力上限(X为2-拥有的标记数).<br>\
        吴:Ⅰ摸牌阶段多摸一张牌;Ⅱ使用非装备牌和非延时锦囊牌额外结算一次<br>\
        魏:Ⅰ受到一点伤害令一名角色摸2张牌;Ⅱ受到一点伤害后你对伤害来源造成一点伤害<br>\
        蜀:Ⅰ你可使用杀次数+1;Ⅱ杀造成伤害+1且不可被响应',

            pixelsunquan: 'PX孙权',
            pixelzhiheng: '制衡',
            pixeljianye: '建业',
            pixelchengdi: '称帝',
            pixelmingzhi: '明治',
            pixelzhiheng_info:
                '出牌阶段限一次,你可以失去任意个非初始技能,获得等量技能.\
        若你因此法失去了全部非初始技能,你摸一张牌,并增加一枚<建业>标记',

            pixeljianye_info:
                '①当你使用或失去装备区里的一张装备牌后,你可以选择一项:1.随机获得一个技能;2.摸2张牌并获得一枚<建业>标记.<br>\
        ②摸牌阶段你可以多摸X张牌,X为你的<建业>标记数<br><small>修改建业:当你使用或失去装备区里的一张装备牌后,你可以选择一项:1.随机获得一个技能;2.摸2张牌并获得一枚<建业>标记</small>',

            pixelchengdi_info: '觉醒技,准备阶段,若你拥有的<建业>标记大于2,你增加一点体力上限,回复一点体力或摸2张牌,修改『建业』获得<u>※明治</u>',
            pixelmingzhi_info: '出牌阶段,你可以弃置一枚<建业>标记,你摸一张牌或令一名其他角色摸2张牌',
            pixelsunquanL: 'XR孙权',
            pixelzhihengL: '制衡',
            pixeljianyeL: '建业',
            pixelzhihengL_info:
                '出牌阶段限一次,你可以失去不多于体力值个非初始技能,获得等量技能.\
        若你因此法失去了全部非初始技能,你摸一张牌',

            pixeljianyeL_info:
                '①当你使用一张装备牌后,你可以选择一项:1.随机获得一个技能(若你的非初始技能数大于你的体力上限-2,你不可选择此项);2.摸2张牌.<br/>\
        ②摸牌阶段你可以多摸X张牌,你的手牌上限+X,X为你拥有的非初始技能数',

            pixelliubei: 'PX刘备',
            pixelrende: '仁德',
            pixelrende_info: '当一名角色失去最后一张手牌后,你可以摸一张牌并交给其一张牌(若为你则跳过).若如此做,你摸一张牌并将一张牌置于你的武将牌上,称之为<德>',
            pixelzhangwu: '章武',
            pixelzhangwu_info: '转换技,阴:你可以将一张红色牌当无距离限制的火【杀】使用或打出;阳:你可以将一张锦囊牌当无次数限制的雷【杀】使用或打出.你加一点体力上限',
            pixelzhaolie: '昭烈',
            pixelzhaolie_info: '出牌阶段,你可以令一名角色随机获得一张<德>并摸一张牌,转换『章武』状态并减一点体力上限',
            pixelliubeiL: 'XR刘备',
            pixelrendeL: '仁德',
            pixelrendeL_info: '当一名其他角色失去最后一张手牌后,你可以摸一张牌并交给其一张牌',
            pixelzhangwuL: '章武',
            pixelzhangwuL_info: '转换技,阴:你可以将一张红色牌当无距离限制的火【杀】使用或打出;阳:你可以将一张锦囊牌当无次数限制的雷【杀】使用或打出.若此杀命中,你回复一点体力',
            pixelsunquanU: 'Rb孙权',
            pixelzhihengU: '制衡',
            pixeljianyeU: '建业',
            pixelzhihengU_info:
                '出牌阶段限一次,你可以失去不多于体力值个非初始技能,获得等量技能.\
    若你因此法失去了全部非初始技能,你摸一张牌',

            pixeljianyeU_info: '当你使用一张装备牌后,你可以选择一项:1.随机获得一个技能(若你的非初始技能数大于你的体力上限-3,你不可选择此项);2.你摸一张牌,下个摸牌阶段你多摸一张牌',
            pixelzhouyu: 'PX周瑜',
            pixelfanjian: '反间',
            pixelfanjian_info:
                '本局游戏每种类型限一次,出牌阶段你可以将一张牌交给一名其他角色,其失去一点体力.\
摸牌阶段你多摸X张牌(X为因此法给过牌类型数)',

            pixelyingzi: '英姿',
            pixelyingzi_info:
                '回合开始时,你将一张牌置于你的武将牌上或替换已有的英姿牌.\
当你需要使用或打出一张牌时,你可以将一张牌当此牌使用或打出',

            pixelyanyan: '焱焰',
            pixelyanyan_info:
                '觉醒技,摸牌阶段,若你摸牌数不少于5,你减一点体力上限,回复一点体力或摸2张牌,\
失去〖反间〗,对一名场上横置的一名角色造成一点火焰伤害,获得〖锐进〗',

            pixelruijin: '锐进',
            pixelruijin_info:
                '出牌阶段/回合外你受到伤害后,你可以弃置X张牌对一名其他角色/当前回合角色造成一点伤害并摸3-X张牌.若你于回合内发动过〖锐进〗,回合结束时重置X\
        (X为你以此法弃置的牌的类型数+1)',

            pixelzhouyuL: 'XR周瑜',
            pixelfanjianL: '反间',
            pixelfanjianL_info:
                '出牌阶段限一次,出牌阶段你可以将X张牌交给一名其他角色,其失去一点体力(X为你的英姿牌数-1且不超过你的体力上限).\
        若你有英姿牌,你获得这些牌',

            pixelyingziL: '英姿',
            pixelyingziL_info:
                '回合开始时,你将2张牌置于你的武将牌上.\
        每回合限一次,当你需要使用或打出一张牌时,你可以将一张牌当此牌使用或打出(若为装备牌,则直接置入对应的装备区),你摸一张牌',

            pixelzhugeruoxue: 'PX诸葛若雪',
            pixelqiongying: '琼英',
            pixelqiongying_info:
                '出牌阶段限一次,你可以与一名手牌数不大于X的其他角色交换手牌(X为你的手牌数与你的体力值之和)\
        若如此做,回合结束时,你对此重复此流程',

            pixelnuanhui: '暖惠',
            pixelnuanhui_info: '一名角色的弃牌阶段开始时,你可以弃置其X张牌,并令其本回合手牌上限+2(X为其已损失体力值)',
            pixeljiangwei: 'PX姜维',
            pixelkunfen: '困奋',
            pixelkunfen_info:
                '使命技,出牌阶段限一次,你可以失去一点体力摸2张牌,这些牌不计入手牌上限.\
成功:当你击杀角色时,你减一点上限,获得〖叱咤〗和〖情势〗;失败:若你使命达成前进入濒死状态,你加一点体力上限并回复至体力上限,获得〖挑衅〗和〖观星〗',

            pixelchicha: '叱咤',
            pixelchicha_info: '回合结束,你可以指定一名其他角色并记录一个牌名.其使用你记录的牌名时,你可以取消之并清除对应的记录,你摸X张牌(X为你已记录的牌名数)',
            pixeltiaoxin: '挑衅',
            pixeltiaoxin_info: '当你使用一张牌后,你可以弃置一名其他角色一张牌.若此牌不为【杀】,你获得之并对其造成一点伤害,否则你令一名角色获得此牌',
            pixeljiangweiL: 'XR姜维',
            pixelchichaL: '叱咤',
            pixelchichaL_info: '准备阶段,你可以指定至多3名其他角色并记录等量个牌名.其使用你记录的牌名时,你可以取消之并清除对应的记录,你摸X张牌(X为你已记录的牌名数)',
            pixelguanxingL: '观星',
            pixelguanxingL_info: '结束阶段,若你有叱咤记录,你观星X(X为你已记录的非重复角色数),你从牌堆底摸X张牌',
            pixeljiangweiU: 'Rb姜维',
            pixelchichaU: '叱咤',
            pixelchichaU_info: '出牌阶段限一次,你可以指定一名其他角色并记录一个非装备牌牌名.其使用你记录的牌名时,你可以取消之并清除对应的记录,你摸一张牌',
            pixelguanxingU: '观星',
            pixelguanxingU_info: '结束阶段,若你有叱咤记录,你观星X(X为你已记录的非重复角色数)',
            pixelbazhenU: '八阵',
            pixelbazhenU_info: '锁定技,当你需要使用或打出闪时,你进行一次判定.若判定结果未被叱咤记录,则记录此牌,视为你使用或打出了一张闪',
            pixeljiaxu: 'PX贾诩',
            pixelquanmou: '权谋',
            pixelquanmou_info:
                '昂扬技,出牌阶段,你可以选择牌堆中随机3张牌中的一张令一名角色获得之.\
        你下一次使用与此牌同名牌时,若此牌为基本牌,你摸一张牌;\
        若为普通锦囊牌,此牌额外结算一次;\
        若为装备牌,你随机弃置一名其他角色一张牌.激昂:你发动过三项中的任意一项',

            pixelzhaji: '诈计',
            pixelzhaji_info:
                '限定技,出牌阶段,你可以令一名角色在接下来的x²+y-1个回合开始时加2x+1点体力上限并摸等量张牌.\
        若如此做,在y²-x+1个回合结束时,其减2y-1点体力上限(X为当前游戏轮数,Y为场上角色数)',

            pixelzhaji_add: '诈计',
            pixelzhaji_add_info:
                '锁定技,在接下来的x²+y-1个回合开始时加2x+1点体力上限并摸等量张牌.\
        若如此做,在y²-x+1个回合结束时,其减2y-1点体力上限(X为当前游戏轮数,Y为场上角色数)',

            pixeljiaxuL: 'XR贾诩',
            pixelquanmouL: '权谋',
            pixelquanmouL_info:
                '出牌阶段限一次,你可以选择牌堆中随机3张牌中的一张获得之.\
        你下一次使用与此牌同名牌时,若此牌为基本牌,你摸一张牌;\
        若为普通锦囊牌,此牌额外结算一次;\
        若为装备牌,你随机弃置一名其他角色一张牌',

            pixelweimuL: '帷幕',
            pixelweimuL_info:
                '①锁定技,转换技,回合开始时你将判定区内的阳:红色 阴:黑色 判定牌置入弃牌堆,你摸等量的牌;\
        ②若你的判定区内有牌,其他角色使用与这些牌颜色相同的牌指定你为目标时取消之,你不能使用与这些牌颜色相同的牌指定你为目标',

            pixeltianfeng: 'PX田丰',
            pixelzhongjian: '忠谏',
            pixelzhongjian_info: '出牌阶段限一次,你可以选择一名角色,其使用牌指定你为目标后,你选择令其摸一张牌或回复一点体力.回合结束你对其造成一点伤害',
            pixelnalue: '捺寽',
            pixelnalue_info: '锁定技,你使用的牌均修改为牌堆顶的牌你摸一张牌',
            pixeltianfengL: 'XR田丰',
            pixelzhongjianL: '忠谏',
            pixelzhongjianL_info:
                '出牌阶段限一次,你可以选择一名角色,其使用【杀】指定目标后,你进行一次判定.\
        若其可以使用判定牌,其将此牌修改为与判定牌属性相同的牌,否则你获得判定牌.\
        若你因此法选择过所有场上角色,改为你摸Log₂(X)张牌(向上取整,X为你因此法指定过的目标数)',

            pixelliubiao: 'PX刘表',
            pixelwuzheng: '亚心',
            pixelwuzheng_info: '锁定技,若你手牌数不为全场唯一最多或唯一最少,摸牌阶段你多摸一张牌',
            pixelzongshi: '宗室',
            pixelzongshi_info: '出牌阶段限一次,你可以交给一名其他角色一张牌,若如此做,直到回合开始时,其所属势力的角色不能对你使用牌',
            pixelshiqi: '势起',
            pixelshiqi_info:
                '使命技,转换技,当你于回合内第一次受到伤害后,你 阳:{<br/>回复一点体力.\
        成功:准备阶段,若你的攻击范围大于3,你增加一点体力上限,回复一点体力或摸2张牌,获得技能〖谋立〗;\
        失败:结束阶段,若你没有手牌,你失去〖宗室〗,修改技能〖亞心〗:摸牌阶段多摸两张牌.} 阴:{\
        失去一点体力 \
        成功:结束阶段,若你的攻击范围小于3,你增加一点体力上限,回复一点体力或摸2张牌,修改技能〖亞心〗:摸牌阶段多摸两张牌\
        失败:准备阶段,若你没有手牌,你失去〖宗室〗,获得技能〖谋立〗}',

            pixelmouli: '谋立',
            pixelmouli_info:
                '出牌阶段,若场上有蜀势力角色,你可以重铸【杀】;<br/>\
        若场上有魏势力角色,你可以重铸【闪】;<br/>\
        若场上有吴势力角色,你可以重铸装备牌',

            pixelliubiaoL: 'XR刘表',
            pixelwuzhengL: '亚心',
            pixelwuzhengL_info: '锁定技,若你手牌数不为全场唯一最多或唯一最少,摸牌阶段你多摸一张牌',
            pixelzongshiL: '宗室',
            pixelzongshiL_info: '出牌阶段限一次,你可以交给一名其他角色一张牌,若如此做,直到回合开始时,其所属势力的角色不能对你使用牌',
            pixelliubiaoU: 'Rb刘表',
            pixelwuzhengU: '亚心',
            pixelwuzhengU_info: '锁定技,若你手牌数不为全场唯一最多或唯一最少,摸牌阶段你多摸一张牌',
            pixelzongshiU: '宗室',
            pixelzongshiU_info:
                '二元转换技,阳:①出牌阶段,你可以交给一名其他角色一张牌,若如此做,直到回合开始时,其所属势力的角色不能对你使用牌;②当你受到伤害后失去一点体力\
        阴:①出牌阶段若场上有蜀势力角色,你可以重铸【杀】;\
        若场上有魏势力角色,你可以重铸【闪】;\
        若场上有吴势力角色,你可以重铸装备牌②当你受到伤害后回复一点体力',

            pixelxianzheng: '宪政',
            pixelxianzheng_info:
                '锁定技,一轮游戏开始时你摸Log₂(X)张牌(X为游戏轮数+1),你选择等量牌置于武将牌上,称为<宪>.<br/>\
        ①当你受到伤害后,你可以弃置任意张<宪>,摸等量牌<br/>\
        ②当你使用或打出一张牌时,你获得一张与此牌同名的<宪>,若<宪>牌为奇数,此牌不可被响应;若为偶数,此牌伤害+1<br/>\
        ③转换技,一名角色结束阶段,若你有<宪>牌,你阳:回复一点体力 阴:摸一张牌',

            pixellixian: '立宪',
            pixellixian_info: '觉醒技,准备阶段,若你拥有至少三张<宪>,你令一名角色减至一点上限,你回复一点体力或摸2张牌,对场上非蜀势力角色造成一点伤害,获得技能【立制】',
            pixelsuli: '立制',
            pixelsuli_info: '出牌阶段限一次,你可以弃置一张<宪>,摸X张牌(X为<宪>牌包含类型数+1),这些牌本回合不计入手牌上限',
            pixelfazheng: 'PX法正',
            yijieJanuary: '一月·数寒',
            yijieFebruary: '二月·风花',
            yijieMarch: '三月·阳春',
            yijieApril: '四月·桃红',
            yijieMay: '五月·新谷',
            yijieJune: '六月·飞霜',
            yijieJuly: '七月·流火',
            yijieAugust: '八月·金桂',
            yijieSeptember: '九月·揽月',
            yijieOctober: '十月·芳菲',
            yijieNovember: '十一月·寒冬',
            yijieDecember: '十二月·皑皑',
            springMonarchChapter: '春意盎然',
            coolInSummer: '夏日狂想',
            autumnCelebrityChapter: '秋风落叶',
            winterGodGeneral: '冬山如睡',
            fourSeasons: '四季天下',
            yijiergx: '逸杰再现',
            yutao: '俞涛',
            liuhuaqiang: '刘华强',
            mabaoguo: '马保国',
            chuanshanjia: '穿山甲',
            yijie_caixukun: '蔡徐坤',
            bigownerofmelonstall: '瓜摊老板',
            rgxspluxun: '☆陆逊',
            ejiege: '阿杰',
            xichang: '洗肠',
            xichang_info: '【锁定技】,其他角色的出牌阶段开始时,其展示所有手牌.将其中的黑色牌置于其武将牌上,称为<屎>.每张<屎>会减少1手牌上限',
            changshi: '屎',
            shouzhi: '收汁',
            shouzhi_info: '【锁定技】,一名角色回合结束后,武将牌上有<屎>的角色依次收回一张<屎>牌',
            zhile: '值了',
            zhile_info: '【锁定技】,当你死亡时,你令击杀你的角色失去X点体力(X为其拥有的<屎>牌数量)',
            bigdao: '大刀',
            bigdao_info: '当你使用【杀】指定一个目标后,该角色获得一枚<流血>标记.当一张牌被使用并结算完毕后,拥有<流血>标记的角色依次失去X点体力(X为其拥有的流血标记数)',
            liuxue: '流血',
            yingbian: '应变',
            yingbian_info: '锁定技,转换技,当你受到伤害时,若你没有  阳:【杀】/阴:【闪】,你可以弃置所有手牌并摸等量的牌.若如此做,防止此伤害',
            dianlu: '电驴',
            dianlu_info: '锁定技,你的坐骑牌视为【酒】;你计算与其他角色距离-2',
            lightningwhip: '电鞭',
            lightningwhip_info: '出牌阶段限X次,X为你的攻击范围.你可以弃置一张黑色牌,对一名角色造成一点雷属性伤害并横置该角色',
            wude: '武德',
            wude_info: '一名其他角色回合开始时,你可以视为对其使用一张【过河拆桥】',
            neigong: '内功',
            neigong2: '内功',
            neigong_info: '锁定技,当你于回合外受到伤害后,你获得伤害来源的所有牌;当你于回合内受到伤害时,你弃置所有牌',
            dpoioned: '下毒',
            dpoioned_info: '使命技,一名其他角色回合开始时,若其有手牌,你减一点体力上限,摸一张牌,与其进行一次拼点.没赢的角色失去X点体力(X为较小牌的点数).成功:当场上有至少一半的角色(向下取整)死亡时,你失去<自爆>.失败:若你成功达成使命前进入濒死,你死亡',
            doubleagent: '特工',
            doubleagent_info: '锁定技,当一名角色回合结束时,你须选择转换一次势力,获得不同的效果:❶蜀:你的拼点牌点数+场上蜀势力角色数;❷魏:你的拼点牌点数-场上魏势力角色数;❸吴:你的拼点牌点数视为A;❹群:你的拼点牌点数视为K',
            chshu: '特工(蜀)',
            chshu_info: '你的拼点牌点数+蜀势力角色数',
            chwei: '特工(魏)',
            chwei_info: '你的拼点牌点数-魏势力角色数',
            chwu: '特工(吴)',
            chwu_info: '你的拼点牌点数视为A',
            chqun: '特工(群)',
            chqun_info: '你的拼点牌点数视为K',
            selfbang: '自爆',
            selfbang2: '自爆',
            selfbang_info: '锁定技,蓄力技(3/7),当你拼点赢/没赢时,你减少/增加一点蓄力点.当你死亡时,场上角色依次受到Y点火属性伤害(Y为你拥有的蓄力点数量)',
            kunkundance: '坤舞',
            kunkundance_info: '锁定技,一名其他角色出牌阶段开始时,你须选择与上回合选择选项不同的一项,其执行对应效果:❶:唱跳:摸X张牌,受到X点伤害;❷rap:摸X张牌;❸篮球:受到X点伤害',
            kunkunpingding: '评定',
            kunkunpingding_info: '锁定技,一名其他角色回合结束时,其须对你进行一次等级评定,你执行对应效果❶A:摸一张牌并回复一点体力;❷B:回复一点体力;❸C:摸一张牌;❹D:无事发生;❺F:失去一点体力并减一点体力上限',
            kunkunxifans: '吸粉',
            kunkunxifans_info: '锁定技,蓄力技(1/7),当你获得非F/F级评定时,你增加/减少一点蓄力点;当你使用一张牌指定目标时,你可以为该牌增加/减少至多X个目标(X为你的蓄力点点数)',
            melonsellersfanga: '贩瓜',
            melonsellersfanga_info: '锁定技,你使用的普通锦囊牌额外结算X次(X为你拥有<瓜>标记的数量)',
            melonscalesgacheng: '瓜秤',
            melonscalesgacheng_info:
                '转换技,出牌阶段限X次,你可以失去一点体力,\
阳:将X张牌置于牌堆底,摸一张牌;阴:将一张牌置于牌堆底,摸X张牌,X为瓜标记的数量',

            melonstallgatan: '瓜摊',
            melonstallgatan_info:
                '锁定技,回合开始时,你获得已损失体力值数量的<瓜>标记,<瓜>标记上限为4个.\
当你失去一点体力时,摸一张牌,获得一枚<瓜>标记;\
当你弃置一张牌时,回复一点体力,移去一枚<瓜>标记',

            ejiebaibu: '摆布',
            ejiebaibu_info: '一名其他角色回合开始前,若其有手牌,你可以依次展示其手牌,根据牌的花色其执行对应效果:♠️️:失去所有技能;♥️️:失去一点体力;♣️️:受到一点伤害并翻面;♦️️:减少1点体力上限',
            ejieweixie: '强欲',
            ejieweixie_info: '锁定技,当一名其他角色失去一点体力时,你回复一点体力;当一名其他角色弃置一张牌时,你摸一张牌',
            yijiesunce: '☆孙策',
            yijieliubei: '☆刘备',
            yijiecaozei: '☆曹操',
            yijieyuanshao: '☆袁绍',
            yijiezhugeliangkongrong: '☆诸&孔',
            yijieyingba: '英霸',
            yijieyingba_info: '出牌阶段,你可以打出一张【杀】,视为你使用一张【杀】,该【杀】不计入次数且无距离限制',
            yijiezhiyinang: '激昂',
            yijiezhiyinang_info: '锁定技,当你需要打出一张【杀】时,摸一张牌',
            yijieyinghun: '英魂',
            yijieyinghun_info: '锁定技,回合开始时,你摸X张牌(X为你已损失的体力值)',
            yijieyingzi: '英姿',
            yijieyingzi_info: '锁定技,你的手牌上限+X',
            yijierende: '仁德',
            yijierende_info: '出牌阶段,你可以将一张牌交给其他角色,你获得一点护甲(护甲上限为体力上限)回合开始和结束时,你摸等同于护甲数量的牌',
            yijiezhangwu: '章武',
            yijiezhangwu_info: '当你不因使用和弃置而失去牌时,你可以视为使用一张基本牌(你以此法使用的【杀】无次数限制)',
            yijiejianxiong: '奸雄',
            yijiejianxiong_info: '锁定技,当一名角色受到伤害后,你获得造成伤害的牌',
            yijiejianci: '奸雌',
            yijiejianci_info: '当你获得牌后,你可以选择一名其他角色,对其造成一点伤害,你获得其一张牌',
            yijieluanji: '乱击',
            yijieluanji_info: '出牌阶段,你可以将至少一张牌当【万箭齐发】使用.你以此法使用的【万箭齐发】基础伤害为X(X为你以此法选择牌的花色数).若你因此法失去了所有牌,你摸等同于已损体力值张牌',
            yijiesheji: '乱射',
            yijiesheji_info: '锁定技,当你对一名角色造成伤害后,该角色再受到无来源的该类型的等量伤害',
            yijieguanxing: '观星',
            yijieguanxing_info:
                '当你成为一张牌的目标时,你可以观看牌堆顶的X张牌(X为你的体力上限),\
并将其以任意顺序置于牌堆项或下方区域区,你获得下方区域的牌',

            yijiebazhen_backup: '八阵',
            yijiebazhen: '八阵',
            yijiebazhen_info:
                '当你需要使用或打出一张【杀】/【闪】时,你进行一次判定.若判定结果为红色,你摸一张牌\
若结果为黒色,你弃置一名角色一张牌.你视为使用或打出一张【杀】/【闪】',

            yijiemingshi: '名士',
            yijiemingshi_info: '锁定技,当你受到伤害伤害时,你令此伤害值减你与伤害来源体力值之差',
            yijiejiaxu: '☆贾诩',
            yijiexunyu: '☆荀彧',
            rgxkuangmo: '狂魔',
            rgxkuangmo_info: '出牌阶段限一次,你可以从你的下一家开始进行判定,你可以令其发动<苟且>对应花色的效果.你重置本次判定牌对应<苟且>记录的花色',
            rgxgouqie: '苟且',
            rgxgouqie_info:
                '转换技,本局游戏每种花色限一次,当你阳:受到 阴:造成伤害时,你可以:\
        <br>♠️️:对一名其他角色造成0~2点伤害;\
        <br>♣️️:废除当前回合角色装备栏与判定区,若如此做,当前回合角色选择一名其他角色,当前回合角色对其使用牌无次数与距离限制且其不能使用或打出手牌;\
        <br>♦️️️:获得此次造成伤害的牌或<狂魔>的判定牌并摸2张牌;\
        <br>♥️️:令一名其他角色翻面其摸一张牌',

            rgxtungou: '吞狗',
            rgxtungou_info:
                "本局游戏每种花色限一次,当<span class='thundertext'>你</span>/<span class='firetext'>体力值大于你的角色</span>\
     对 <span class='thundertext'>体力值大于你的角色</span>/<span class='firetext'>你</span> 造成伤害时,\
     你可以令一名角色摸等同于你的体力上限-X张牌,若这些牌的有花色未被记录,则记录之并令此伤害<span class='thundertext'>+</span>/<span\
      class='firetext'>-</span>X,X为你未记录的花色数",

            rgxqumao: '驱猫',
            rgxqumao_info:
                '出牌阶段限一次.你可以选择一张<吞狗>未记录的花色的手牌交给体力值或手牌数小于你的一名其他角色,\
    其可以将其装备区的所有牌交给你.若其未交给你牌,其对你选择的一名角色造成一点伤害,此次伤害受到<吞狗>的加伤效果',

            rgxximing: '惜命',
            rgxximing_info:
                '一名角色进入濒死时,你可以摸X+1张牌,\
    可以将已被<吞狗>记录的一种花色的牌交给其(若为自己则跳过),若如此做,其可以弃置其中任意张牌并回复同等体力.\
    若其如此做你清除此花色,X为你已记录的花色数',

            yijieguanyv: '☆关羽',
            yijiezhangfei: '☆张飞',
            yijiehuangzhong: '☆黄忠',
            yijietaishici: '☆太史慈',
            yijieyujin: '☆于禁',
            wensheng: '文圣',
            wensheng_info: '每回合限一次,你可以将一张黑色牌当杀使用或打出,回合结束时你摸一张牌并解放一种"窃黍"已使用花色.你使用的黑色杀造成的伤害+X,X为满足这些条件的个数:①目标手牌数少于你;②目标体力值大于你;③目标与你距离为1;④此牌为转化牌且包含的牌点数大于2*场上存活人数',
            qieshu: '窃黍',
            qieshu_info: '出牌阶段使用,本局游戏每种花色限一次,你可以将一张牌置于牌堆顶,若如此做,你获得一名角色区域内的一张牌',
            rgxpaoxiao: '咆笑',
            rgxpaoxiao_info:
                '本局游戏每种花色限一次,弃牌阶段,你可以改为选择一张牌对你攻击范围之外的至多X名其他角色使用,X为你的体力值.\
        若如此做,下一次你使用牌时失去一点体力令此牌造成的伤害+1并摸三张牌',

            rgxkuangcao: '狂草',
            rgxkuangcao_info:
                '你可以令你本回合的六大阶段中的至多X个非弃牌阶段的阶段改为弃牌阶段\
        .若如此做,你可以重置至多X种<咆笑>的花色,X为你已损失体力值且至少为1',

            rgxliegong: '烈弓',
            rgxliegong_info:
                '锁定技,当你使用一张牌指定目标后,若目标为你,你回复X点体力值并摸X张牌;\
若目标不为你,你对目标造成X点雷电伤害,X为本回合使用和打出的牌数',

            rgxliema2: '烈马',
            rgxliema2_info: '当你对一名角色造成伤害时,你可以防止此伤害.若如此做,其减一点体力上限',
            rgxchangbing: '长兵',
            rgxchangbing_info:
                '锁定技,你的武器牌视为火【杀】,你使用的【杀】造成伤害的damage事件的伤害来源视为体力值等于其的一名角色.\
    当你使用一张杀指定目标后,你与其交换座次并随机重置一种<地义>已使用花色',

            rgxdiyi: '地义',
            rgxdiyi_info: '本局游戏每种花色限一次,你可以弃置一张牌并在此技能结算结束后记录此牌花色,选择至多X名其他角色.若如此做,你摸2X张牌,这些角色依次对你发起拼点,若你赢,你可以将一张牌当【杀】对其使用;若拼点发起方赢则其下一轮继续发起拼点,直到一方没有手牌或其以此法拼点轮数为你以此法选择的目标数;若你没赢可以失去一点体力摸2张牌.X为你手中非转化【杀】的数量;',
            rgxshijie: '失节',
            rgxshijie_info:
                '锁定技,当你造成伤害后或受到伤害后,你摸4-X张牌并将X张手牌置于你的武将牌上称为<节>,X为<殁军>已记录的花色数.\
        一名角色结束阶段,你可以将至多X张<节>交给其,若其装备数多于你,你对其造成一点伤害.你的手牌上限修改为3+X',

            rgxnijun: '殁军',
            rgxnijun_info: '本局游戏每种花色各限一次,你可以选择一张手牌使用之,此牌不计入次数、无距离限制且目标数为任意个',
            rgxshoufang: '守防',
            rgxshoufang_info:
                '锁定技,当你失去一张装备区的牌时,你清除<殁军>对应记录的花色.\
        当你未装备防具时,你视为装备着【仁王盾】',

            rgxlianying: '怜营',
            rgxlianying_info: '锁定技,当你失去最后一张手牌后,你摸此次失去的等量张牌',
            rgxqianxun: '千逊',
            rgxqianxun_info:
                '当你成为一张牌的目标时,你可以将你的不多于体力值+轮次的手牌置于你的武将牌上称为<火>.\
        回合结束时,你获得这些<火>.若这些牌为奇数张,你弃置一名其他角色区域内的一张牌并令其横置;若为偶数张,你对一名其他角色造成一点火焰伤害',

            rgxzonghuo: '纵火',
            rgxzonghuo_info: '当你受伤、造成伤害、使用或打出一张牌后,若你有<火>牌,你可以将你手牌和火牌任意对花色相同的牌置入弃牌堆.若如此做,你选择一名角色,对其造成X点火焰伤害,X为你以此法选择手牌的数量',
            yijielubu: '☆吕布',
            yijierumou: '如谋',
            yijierumou_info:
                '锁定技,每个阶段开始前,你获得一张锦囊牌.\
        当你不因此法而使用一张普通锦囊牌时,你须选择一项:1.失去一点体力;2.弃置一张非锦囊牌并令此牌额外结算一次',

            yijieruqian: '如前',
            yijieruqian_info:
                '转换技,阳:出牌阶段,你可以弃置等同于体力值的闪,摸等同于已损失体力值的杀,若如此做,本回合你使用的【杀】需要使用两张闪才可抵消且本回合你使用杀指定目标的防具无效.\
        阴:当你受到或造成伤害后,你可以摸等同于已损失体力值的闪,弃置等同于体力值的杀(不足则全弃),若如此做,本回合当你成为【决斗】的目标后,你令此牌需要依次打出两张【杀】响应且本回合你的防具无效',

            yijieshenfen: '人愤',
            yijieshenfen_info: '出牌阶段限一次,你可以弃置四张牌,受到一点无来源的伤害.若如此做,场上所有其他角色翻面',
            yijierunu: '如怒',
            yijierunu_info:
                '锁定技,游戏开始时,你获得两枚<如怒>标记.当一名角色受伤时,你有(Y-X)*Z%的概率获得一枚<如怒>标记,否则失去一枚<如怒>标记,(X为你的暴怒标记数,Y为你的体力上限,满足Y*Z=100).\
        当你濒死需要使用【桃】时,你可以弃置2枚暴怒标记,视为你使用一张【桃】;当你需要使用一张杀时,你可以你可以弃置1枚暴怒标记,视为使用一张【杀】',

            yijiexiahoudun: '☆夏侯惇',
            yijieganglie: '肛裂',
            yijietanlu: '贪赂',
            yijieganglie_info: '锁定技,当你受到一点伤害后,你摸一张牌并展示之.若为红色,你对伤害来源造成一点伤害;若为黑色,你弃置伤害来源区域内的一张牌并重复此流程',
            yijietanlu_info:
                '每回合限一次,当一名其他角色于摸牌阶段获得牌后,你可以令其将这些牌交给你.\
        若如此做,你将其中一张牌置于你的武将牌上称之为<☆>,<☆>每种类型各限一张,你获得因此而溢出的牌',

            yijieduyan: '独眼',
            yijieduyan_info: '锁定技,摸牌阶段你多摸X张牌,你的手牌上限+X,但你的手牌上限基数为原来的一半(向上取整),X为你的<☆>数量',
        },
    };
});

import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '脑洞大开',
        content(config, pack) {
            if (config.naodong_name == 'hide') {
                lib.translate.ls_maliang = '马良';
                lib.translate.ls_jushou = '沮授';
                lib.translate.ls_lukang = '陆抗';
                lib.translate.ls_dongzhou = '董卓';
                lib.translate.ls_duangui = '段珪';
                lib.translate.ls_wangji = '王基';
                lib.translate.ls_zhuran = '朱然';
                lib.translate.ls_fuqian = '傅佥';
                lib.translate.ls_lvbu = '吕布';
                lib.translate.ls_yuanshao = '袁绍';
                lib.translate.ls_caocao = '曹操';
                lib.translate.ls_luji = '陆绩';
                lib.translate.ls_sunluyu = '孙鲁育';
                lib.translate.ls_caojie = '曹节';
                lib.translate.ls_gongsunyuan = '公孙渊';
                lib.translate.shen_lsmachao = '神马超';
                lib.translate.sl_shen_taishici = '神•太史慈';
                lib.translate.sl_wangling = '王凌';
                lib.translate.sl_re_lvmeng = '吕蒙';
                lib.translate.sl_sunyi = '孙翊';
                lib.translate.sl_sunce = '孙策';
                lib.translate.sl_zhouchu = '周处';
                lib.translate.buxiangyaohaoming = '不想要好名';
                lib.translate.sl_huojun = '霍峻';
                lib.translate.sl_masu = '马谡';
                lib.translate.sl_sp_kongrong = '孔融';
                lib.translate.sl_re_sunyi = '孙翊';
                lib.translate.sl_taishici = '太史慈';
                lib.translate.zhangzhonjing = '张机';
                lib.translate.sl_sp_ol_zhanghe = '张郃';
                lib.translate.sl_xushao = '许劭';
                lib.translate.sl_zhanghe = '张郃';
                lib.translate.sl_re_quancong = '全琮';
                lib.translate.sl_lvkuanglvxiang = '吕旷吕翔';
                lib.translate.sl_zhugeke = '诸葛恪';
                lib.translate.sl_liuyao = '刘繇';
                lib.translate.sl_re_guanqiujian = '毌丘俭';
                lib.translate.sl_spjiangqin = '蒋钦';
                lib.translate.sl_xin_caozhen = '曹真';
                lib.translate.sl_jin_simazhao = '司马昭';
                lib.translate.sl_wuban = '吴班';
                lib.translate.sl_lingtong = '凌统';
                lib.translate.sl_zhugejin = '诸葛瑾';
                lib.translate.sl_ol_chendeng = '陈登';
                lib.translate.sl_shen_sunce = '神孙策';
                lib.translate.sl_xujing = '许靖';
            }
            if (config.naodong_name == 'show') {
                lib.translate.ls_maliang = '陰•马良';
                lib.translate.ls_jushou = '陰•沮授';
                lib.translate.ls_lukang = '陰•陆抗';
                lib.translate.ls_dongzhou = '陰•董卓';
                lib.translate.ls_duangui = '陰•段珪';
                lib.translate.ls_wangji = '陰•王基';
                lib.translate.ls_zhuran = '陰•朱然';
                lib.translate.ls_fuqian = '陰•傅佥';
                lib.translate.ls_lvbu = '陰•吕布';
                lib.translate.ls_yuanshao = '陰•袁绍';
                lib.translate.ls_caocao = '陰•曹操';
                lib.translate.ls_luji = '陰•陆绩';
                lib.translate.ls_sunluyu = '陰•孙鲁育';
                lib.translate.ls_caojie = '陰•曹节';
                lib.translate.ls_gongsunyuan = '陰•公孙渊';
                lib.translate.shen_lsmachao = '陰•神马超';
                lib.translate.sl_shen_taishici = '陰•神太史慈';
                lib.translate.sl_wangling = '陰•王凌';
                lib.translate.sl_re_lvmeng = '陰•吕蒙';
                lib.translate.sl_sunyi = '陰•孙翊';
                lib.translate.sl_sunce = '陰•孙策';
                lib.translate.sl_zhouchu = '陰•周处';
                lib.translate.buxiangyaohaoming = '阴';
                lib.translate.bxyhm = '陰•霍峻';
                lib.translate.sl_masu = '陰•马谡';
                lib.translate.sl_sp_kongrong = '陰•孔融';
                lib.translate.sl_re_sunyi = '陰•孙翊';
                lib.translate.sl_taishici = '陰•太史慈';
                lib.translate.zhangzhonjing = '陰•张机';
                lib.translate.sl_sp_ol_zhanghe = '陰•张郃';
                lib.translate.sl_xushao = '陰•许劭';
                lib.translate.sl_zhanghe = '陰•张郃';
                lib.translate.sl_re_quancong = '陰•全琮';
                lib.translate.sl_lvkuanglvxiang = '陰•吕旷吕翔';
                lib.translate.sl_zhugeke = '陰•诸葛恪';
                lib.translate.sl_liuyao = '陰•刘繇';
                lib.translate.sl_re_guanqiujian = '陰•毌丘俭';
                lib.translate.sl_spjiangqin = '陰•蒋钦';
                lib.translate.sl_xin_caozhen = '陰•曹真';
                lib.translate.sl_jin_simazhao = '陰•司马昭';
                lib.translate.sl_wuban = '陰•吴班';
                lib.translate.sl_lingtong = '陰•凌统';
                lib.translate.sl_zhugejin = '陰•诸葛瑾';
                lib.translate.sl_ol_chendeng = '陰•陈登';
                lib.translate.sl_shen_sunce = '陰•神孙策';
                lib.translate.sl_xujing = '全擴最廢';
            }
            // ---------------------------------------武将评级------------------------------------------//
            if (lib.rank) {
                lib.rank.rarity.epic.addArray(['sl_sunce', 'ls_maliang', 'ls_jushou', 'ls_duangui', 'ls_lukang', 'ls_wangji', 'ls_zhuran', 'ls_fuqian']);
                lib.rank.rarity.rare.addArray(['ls_caojie', 'ls_gongsunyuan', 'shen_lsmachao', 'sl_wangling', 'ls_sunluyu', 'sl_re_lvmeng']);
                lib.rank.rarity.legend.addArray(['sl_shen_taishici', 'ls_lvbu', 'ls_fuqian', '猫猫', '太史慈', '张机', 'sl_sunyi', 'sl_zhouchu', 'bxyhm', 'buxiangyaohaoming', 'ls_luji']);
            }
            // ---------------------------------------千幻皮肤------------------------------------------//
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '脑洞大开',
                    connect: true,
                    character: {
                        ls_maliang: ['male', 'shu', 3, ['ls_jiquan', 'ls_shengcai'], ['des:一招鲜,吃遍天']],
                        ls_duangui: ['male', 'qun', 4, ['ls_ziru', 'ls_caiqing', 'ls_fuyou'], ['des:身负千甲,先天不败']],
                        ls_jushou: ['male', 'qun', 3, ['ls_guhuo', 'ls_jianying'], ['des:很奇怪,闪可以直接对对面使用,但无懈不行']],
                        ls_lukang: ['male', 'wu', 4, ['ls_juesi', 'ls_poshi'], ['des:永不复行']],
                        ls_wangji: ['male', 'jin', 3, ['qizhi', 'ls_jinqu'], ['des:']],
                        ls_dongzhou: ['male', 'qun', 8, ['ls_tixie', 'ls_qiangzheng', 'ls_nanshu'], ['des:']],
                        ls_zhuran: ['male', 'wu', 4, ['ls_danshou', 'ls_liedan'], ['des:']],
                        ls_lvbu: ['male', 'qun', 4, ['ls2_jieying'], ['des:']],
                        ls_fuqian: ['male', 'shu', 4, ['ls_jueyong', 'ls_paiyi2', 'hslingjian_chaofeng'], ['des:']],
                        ls_yuanshao: ['female', 'qun', 4, ['ls_luanji', 'ls_lveming', 'ls_wangduo'], ['zhu']],
                        ls_caocao: ['male', 'wei', 4, ['ls_poxiang', 'ls_xunfang', 'ls_daishou', 'ls_huiji'], ['zhu']],
                        ls_sunluyu: ['female', 'wu', 3, ['ls_mumu', 'ls_meibu'], ['des:阴间止步']],
                        ls_luji: ['male', 'wu', 3, ['ls_miaobi', 'ls_dinghan', 'ls_jinfan'], ['des:此后六十年,车同轨,书同文']],
                        ls_caojie: ['female', 'wei', 3, ['ls_suixi', 'ls_xianmu'], ['des:']],
                        ls_gongsunyuan: ['male', 'wu', 4, ['ls_tanbao', 'hanzhaneq1', 'ls_zili'], ['des:从今天起我就是燕王.']],
                        shen_lsmachao: ['male', 'shen', 4, ['shengli', 'shentieji'], ['des:坚不可挡,无坚不摧,万般因果难加吾身,万箭攒心难阻吾行.<此一击,你可闪的开>']],
                        sl_shen_taishici: ['male', 'shen', 4, ['sl_dulie', 'sl_powei', 'sl_dangmo'], ['des:初版神太史慈(加强版,可自行通过修改技能为原版而改为真正的初版神太史慈)']],
                        sl_sunce: ['male', 'wu', 5, ['sl_jiang', 'sl_hunzi', 'dangjiang'], ['des:那个男人,太激昂了']],
                        sl_wangling: ['male', 'wei', 4, ['sl_xingqi', 'sl_zifu', 'sl_mibei'], ['des:这不就一亡灵吗,狗卡没🐴']],
                        sl_re_lvmeng: ['male', 'wu', 4, ['sl_keji', 'sl_gonxin', 'sl_qinxue'], ['des:恐惧吧,这就是魔王']],
                        sl_sunyi: ['male', 'wu', 4, ['sl_zaoli'], ['des:无']],
                        sl_zhouchu: ['male', 'wu', 4, ['xianghai', 'sl_chuhai'], ['des:不知道怎么说,反正狗卡没🐴']],
                        sl_masu: ['male', 'shu', 3, ['sl_xinzhan', 'ls_sanyao'], ['des:在哔哩哔哩看到个视频,说马谡等于神吕蒙+许攸+诸葛亮,那么,他来了']],
                        sl_sp_kongrong: ['male', 'qun', 3, ['sl_lirang', 'sl_mingshi'], ['des:🐶卡没🐴']],
                        sl_re_sunyi: ['male', 'wu', 5, ['sl_jiqiao', 'sl_xiongyi'], ['des:孙翊(184年～204年),又名孙俨,字叔弼,是孙坚的第三子,孙策、孙权的弟弟.曾被大臣推荐为继承者.孙权继位后,孙翊任丹杨太守,后被身边的人边鸿刺杀.']],
                        sl_taishici: ['male', 'wu', 4, ['sl_tianyi', 'sl_hanzhan'], ['des:？']],
                        zhangzhonjing: ['male', 'qun', 3, ['xinliaoyi', 'binglun', 'sl_jishi'], ['des:张仲景(约公元150～154年—约公元215～219年),名机,字仲景,南阳涅阳县(今河南省邓州市穰东镇张寨村)人.东汉末年著名医学家,被后人尊称为<医圣>.张仲景广泛收集医方,写出了传世巨著<伤寒杂病论>.它确立的<辨证论治>原则,是中医临床的基本原则,是中医的灵魂所在.在方剂学方面,<伤寒杂病论>也做出了巨大贡献,创造了很多剂型,记载了大量有效的方剂.其所确立的六经辨证的治疗原则,受到历代医学家的推崇.这是中国第一部从理论到实践、确立辨证论治法则的医学专著,是中国医学史上影响最大的著作之一,是后学者研习中医必备的经典著作,广泛受到医学生和临床大夫的重视.']],
                        sl_sp_ol_zhanghe: ['male', 'qun', 4, ['sl_zhouxuan'], ['des:别心怀侥幸了,你们不可能赢(周旋88)']],
                        sl_xushao: ['male', 'qun', 4, ['sl_pingjian'], ['des:真的什么是tmd七阴之首吗']],
                        sl_zhanghe: ['male', 'wei', 4, ['sl_qiaobian'], ['des:变变变']],
                        sl_re_quancong: ['male', 'wu', 4, ['sl_hm_zhenshan', 'sl_yaoming'], ['des:吃饭了,朋友']],
                        sl_lvkuanglvxiang: ['male', 'qun', 5, ['sl_liehou', 'sl_qigong'], ['des:打虎亲兄弟!']],
                        sl_zhugeke: ['male', 'wu', 3, ['sl_aocai', 'sl_duwu'], ['des:攻心为下,攻城为上']],
                        sl_liuyao: ['male', 'qun', 4, ['sl_kannan'], ['des:一刀九九九,全场死光光']],
                        sl_re_guanqiujian: ['male', 'wei', 4, ['sl_zhengrong', 'sl_hongju'], ['des:母兵脸？']],
                        sl_spjiangqin: ['male', 'wu', 4, [], ['des:不可浪费']],
                        sl_xin_caozhen: ['male', 'wei', 4, ['sl_sidi'], ['des:今日,就让你寸步难行']],
                        sl_jin_simazhao: ['male', 'jin', 4, ['sl_tuishi', 'sl_choufa', 'sl_zhaoran', 'sl_chengwu'], ['zhu', 'hiddenSkill', 'des:路人皆知']],
                        sl_wuban: ['male', 'shu', 4, ['sl_jintao'], ['des:恨,杀不尽吴狗!']],
                        sl_lingtong: ['male', 'wu', 4, ['sl_xuanfeng'], ['des:这可不是七阴凌统']],
                        sl_zhugejin: ['male', 'wu', 3, ['sl_mingzhe', 'sl_hongyuan', 'sl_huanshi'], ['des:诸葛瑾:字子瑜,吴国大臣,诸葛亮之兄,诸葛恪之父.经鲁肃推荐,为东吴效力.胸怀宽广,温厚诚信,得到孙权的深深信赖,努力缓和蜀汉与东吴的关系.建安二十五年(220年)吕蒙病逝,诸葛瑾代吕蒙领南郡太守,驻守公安.孙权称帝后,诸葛瑾官至大将军,领豫州牧.']],
                        sl_ol_chendeng: ['male', 'qun', 4, ['sl_fengji'], ['des:陈登(163—201),字元龙,下邳淮浦(今江苏涟水西)人.东汉末年将领、官员.沛相陈珪之子.陈登为人爽朗,性格沈静,智谋过人,少年时有扶世济民之志,并且博览群书,学识渊博.二十五岁时,举孝廉,任东阳县长.虽然年轻,但他能够体察民情,抚弱育孤,深得百姓敬重.后来,徐州牧陶谦提拔他为典农校尉,主管一州农业生产.他亲自考察徐州的土壤状况,开发水利,发展农田灌溉,使汉末迭遭破坏的徐州农业得到一定程度的回复,百姓们安居乐业,<秔稻丰积>.建安初,奉使赴许,向曹操献灭吕布之策,被授广陵太守.以灭吕布有功,加伏波将军.在广陵多年,多次击败孙策势力.迁东城太守,年三十九卒.其子陈肃,魏文帝时追陈登之功,为郎中.']],
                        sl_shen_sunce: ['male', 'shen', '3/7', ['sl_yingba', 'sl_scfuhai', 'sl_pinghe'], ['des:好名为各位把厕所通了一下']],
                        sl_xujing: ['male', 'shu', 3, ['sl_boming', 'sl_ejian'], ['des:再也不是全扩第一废物了']],
                        db_sl_db_wenyang: ['male', 'wei', 5, ['sl_quedi', 'sl_zhuifeng', 'sl_chongjian', 'sl_choujue'], ['doublegroup:wei:wu'], ['des:文俶(238~291年),字次骞,小名阿鸯,世称文鸯,沛国谯郡(今安徽省亳州市)人.魏末晋初时期名将,曹魏扬州刺史文钦之子.骁勇善战,依附大将军曹爽,效忠于王室.大将军司马师废黜皇帝曹芳后,参加毌丘俭淮南起兵.兵败之后投奔吴国.后跟随文钦率军支援诸葛诞发动淮南叛乱,得知父亲为诸葛诞所害,归顺大将军司马昭,受封关内侯.西晋建立后,任平虏护军.咸宁三年(277年),拜平西将军,都督凉秦雍州三州军事,大破西部鲜卑首领秃发树机能,名震天下,迁护东夷校尉,坐事免官.西晋永平元年,为东安王司马繇(诸葛诞外孙)所构陷,遭夷三族之祸,时年五十四岁.文鸯生平:随父勤王 文鸯是曹魏扬州刺史、前将军文钦中子. 文钦骁勇善战,又因为与曹魏一族同乡,特别得到当时得势的大将军曹爽的厚爱,文钦恃著曹爽的权势,行为倨傲.高平陵政变后,曹爽集团被太傅司马懿击灭,文钦顿时失去靠山.<三国志>、<资治通鉴> 并提到,文钦时常虚报战场上的敌获以多求封赏,却被当政的司马师压抑,文钦因此对司马师不满.后来文鸯随其父驻守扬州,以防御吴国.嘉平六年(254年),大将军司马师废黜魏帝曹芳.时任镇东大将军的毌丘俭和扬州刺史文钦等,被司马师的不臣举动激怒,决定起兵勤王. 正元二年(255年),时年18岁,文钦与毌丘俭、郑翼、吕宣、张休等,假托太后诏书,提出司马师的十一道罪状,在寿春起兵,讨伐司马师.毌丘俭曾约兖州刺史邓艾一同起兵,但邓艾斩杀了送信者,并受命率领万余人急行军,到乐嘉城(今河南项城县)做桴桥,迎接司马师.毌丘俭命文钦袭击邓艾.这时,司马师暗中率军自汝阳来到了乐嘉,文钦见到大军忽然到来,错愕得不知如何是好.文鸯告诉父亲:<趁敌人还未站稳脚步,马上袭击,一定可以大败敌军.>于是文钦率兵袭击,与文鸯分兵二路,趁夜夹击司马师.勇退雄兵 文鸯率壮士到达寨前,击鼓喧闹,大叫司马师的名字,司马师全军震动.当初,司马师新割眼睛上的瘤,有人劝他不宜远行,请太尉司马孚(司马师叔父)代替.司马师因这是重要一战,决定抱病出征.文鸯突然来攻,使得司马师大惊,带伤的眼珠从肉瘤疮口内迸出,疼痛难当;司马师恐有乱军心,只好咬被头而忍,被头都被咬烂.文鸯鼓噪了一夜,文钦仍没来会合.天明后,文鸯见魏军兵马强大,只好撤退.据<晋书>记载,文鸯走后,当时已经眼球爆出、血流遍地的司马师命令众将追赶,诸将问:<文钦父子骁勇,并没有受到挫败,必定不会善罢干休.>司马师说:<一鼓作气,再而衰.文鸯鼓噪,却没有得到回应,他们气势已经受挫,不走也不行!>这时文钦要率军回寿春(今安徽寿县),文鸯认为一定要挫一挫司马师军士气,便与骁骑十余人一同杀入敌军阵中,所向披靡,才引兵离去.接着司马师派左长史司马班率骁将八千翼来到,文鸯单枪匹马冲入数千骑兵阵中,转眼间便杀伤百余人,进出六七次,追骑不敢逼近.<晋书>上则未提及此事,只说司马师军大破文钦.司马师回军后就死了.复投魏国 毌丘俭兵败寿春后,文鸯随文钦投降吴国.甘露二年(257年)四月,魏国镇东大将军诸葛诞在寿春起兵反司马昭,吴国命令文钦父子及全端、唐咨等人 入寿春支援.甘露三年(258年)一月,寿春战况十分不理想,诸葛诞原本就和文钦关系不好,在紧急情况下,又更加猜疑.所以最后诸葛诞杀了文钦.文鸯和其弟文虎领兵在小城中,听到父亲死讯,率军要赶往寿春城.但众将士不肯服从,二人只好只身穿越城墙,投奔司马昭.文鸯、文虎投降后,军吏请求诛杀兄弟二人,司马昭说:<文钦罪大恶极,他的儿子当然该杀.只是,兄弟二人是无路可去,投向我军;况且城池未破,击杀他们,反而会使守军害怕,奋战不肯出降.>于是,司马昭赦免二人死罪,又表荐文鸯、文虎作将军,赐爵关内侯,并让二人率领数百骑兵巡城,对城中守军大喊:<文钦的儿子都不被杀,其他人有什么好怕的!>城内因此士气涣散,不久,寿春城便被攻陷.城破后,司马昭让文鸯兄弟殓葬文钦, 并佩给二人车牛.名震天下 咸熙二年(265年)十二月,西晋代魏,文鸯仍仕晋朝,任平虏护军. 泰始六年(270年),秃发鲜卑部首领秃发树机能(南凉主秃发乌孤高祖的从兄)在河西举兵反晋,先后击杀胡烈、苏愉、牵弘、杨欣等封疆大吏,晋武帝司马炎为此寝食难安.咸宁三年(277年)三月,文鸯临危受命,都督凉、秦、雍州三州军力,大破秃发树机能,使得胡人部落有二十万人归降,名闻天下.太康年间(280—289年),文鸯被任命为东夷校尉、假节.他正要上任时,向司马炎告辞,司马炎见了文鸯后很不喜欢,竟找了借口把文鸯免官了.惨遭灭族 司马炎驾崩后,晋惠帝司马衷即位.当时,皇后贾南风发动政变,诛杀掌控朝政的太傅杨骏及其党羽.东安王司马繇是诸葛诞的外孙,常恨当年文鸯背叛诸葛诞,致使诸葛诞败亡、屠灭三族.竟在政变后,诬告文鸯与杨骏一同谋反,因而遭夷灭三族之祸而遇害,时年五十四岁.人物评价:干宝<晋纪>:文淑,字次骞,小名鸯,有武力筹策.杨休(当为杨欣之误)、胡烈为虏所害.晋武帝西忧,遣淑出征,所向披靡.秦凉遂平,名震天下.为东夷校尉,姿器膂力,万人之雄. 孙盛<魏氏春秋>:钦中子俶,小名鸯.年尚幼,勇力绝人. 傅畅<晋诸公赞>:俶后为将军,破凉州虏,名闻天下. 房玄龄<晋书>:钦子鸯,年十八,勇冠三军. <晋书·李庠传>:<李庠弓马便捷,膂力过人,时论方之文鸯.>(此处也可能指鲜卑的段文鸯.) 蔡景历:<武夫则猛气纷纭,雄心四据,陆拔山岳,水断虬龙,六钧之弓,左右驰射,万人之剑,短兵交接,攻垒若文鸯,焚舰如黄盖,百战百胜,貔貅为群.>李贺:<寻常轻宋玉,今日嫁文鸯.戟干横龙簴,刀环倚桂窗.> 杜牧:<念尔跨马事敌,执戈同仇,壮比文鸯,勇同李敢.><西园闻见录>:<赵云、文鸯,出入万众,单枪匹马,所向无前.> <三国志通俗演义>:<昔日当阳喝断桥,张飞从此显英豪.乐嘉城内应无敌,又见文鸯胆气高.> <赠太尉韩允忠神道碑>:<文次骞智敌万人.> 卢弼:<当时勤王诸将,惟文钦父子,粗猛武夫,反复无常.']],
                        sl_tianyu: ['male', 'wei', 4, ['sl_zhuitao'], ['des:还敢夸口？看我拿你!']],
                        sl_buxiangyaohaoming: ['male', 'shen', 3, ['sl_tianluo', 'sl_shenbian'], ['des:本扩展作者,真正的强者,暴打全场,两条命的神凤雏,比马钧都强的辅助,比大宝都强的输出,比🌿🐳都高的过牌,比十殿阎罗都阴间']],
                        sl_guanning: ['male', 'shen', '3/12', ['sl_dunshi'], ['des:仁义礼智信,温良恭谦让']],
                        sl_qian_kun_buxiangyaohaoming: ['male', 'shen', 3, ['sl_jinggua', 'cujue'], ['des:你有血光之灾哟~']],
                        sl_xiaoheizi: ['male', 'shen', 3, ['sl_zhaohuang', '测试', 'zyntm'], ['des:鸡你太美～']],
                        sl_xiaoheizi1: ['male', 'shen', 3, ['wushuang', 'reyaowu'], ['des:鸡你实在是太美～']],
                        sl_xiaoheizi2: ['male', 'shen', 2, ['new_reyiji', 'reguicai'], ['des:迎面走来的你让我蠢蠢欲动～']],
                        byj_huojun: ['male', 'shu', 5, ['sl_jiesho', 'sl_xunji'], ['des:我只能在精神上支持天牢令,因为脑洞大开要更新']],
                        sl_kennidi: ['male', 'shen', '999/999', ['sl_qinzheng'], ['boss', 'bossallowed', 'des:脑洞大开存在的真正意义,被枪击之人,美乐帝,肯尼迪!!!!']],
                        sl_shen_zhangfei: ['male', 'shen', 6, ['hm_shenfa'], ['des:你tm死刑']],
                        sl_dabao: ['male', 'wu', 5, ['sl_pojun'], ['des:大宝·超,拥有三段抓取,长时间无敌,超高伤害']],
                        sl_mou_huangzhong: ['male', 'shu', 4, ['sl_liegong'], ['des:万军只是游戏的极限,不是他的']],
                    },
                    characterTitle: {
                        ls_maliang: '# 巴卡巴卡',
                        ls_jushou: '# 巴卡巴卡',
                        ls_lukang: '# 巴卡巴卡',
                        ls_duangui: '# 巴卡巴卡',
                        ls_dongzhou: '# 巴卡巴卡',
                        ls_wangji: '# 巴卡巴卡',
                        sl_wuban: '# 不想要好名',
                        sl_lingtong: '# 不想要好名',
                        sl_zhugejin: '# 不想要好名',
                        ls_zhuran: '# 巴卡巴卡',
                        ls_fuqian: '# 巴卡巴卡',
                        ls_lvbu: '# 巴卡巴卡',
                        ls_yuanshao: '# 巴卡巴卡',
                        ls_caocao: '# 巴卡巴卡',
                        ls_luji: '# 巴卡巴卡',
                        ls_sunluyu: '# 巴卡巴卡',
                        ls_caojie: '# 巴卡巴卡',
                        张机: '# 巴卡巴卡',
                        shen_lsmachao: '# 巴卡巴卡',
                        猫猫: '# 不想要好名',
                        sl_sunce: '# 不想要好名',
                        sl_re_lvmeng: '# 不想要好名',
                        sl_wangling: '# 不想要好名',
                        太史慈: '# 不想要好名&巴卡巴卡',
                        ls_gongsunyuan: '# 巴卡巴卡',
                        sl_sunyi: '# 不想要好名',
                        sl_shen_taishici: '# 不想要好名',
                        不想要好名: '# 不想要好名',
                        sl_zhouchu: '# 不想要好名',
                        buxiangyaohaoming: '# 不想要好名',
                        bxyhm: '# 不想要好名',
                    },
                    translate: {
                        sl_ol_chendeng: '陈登',
                        sl_shen_sunce: '神孙策',
                        sl_sp_kongrong: '孔融',
                        sl_xujing: '许靖',
                        sl_re_sunyi: '孙翊',
                        sl_wangling: '王凌',
                        sl_sswenyang: '文鸯',
                        db_sl_db_wenyang: '文鸯',
                        sl_taishici: '太史慈',
                        sl_tianyu: '田豫',
                        sl_buxiangyaohaoming: '不想要好名',
                        sl_guanning: '管宁',
                        sl_qian_kun_buxiangyaohaoming: '不想要好名',
                        sl_xiaoheizi: '小黑子之首',
                        sl_xiaoheizi1: '爱坤·树枝',
                        sl_xiaoheizi2: '爱坤·荔枝',
                        byj_huojun: '霍峻',
                        sl_kennidi: '肯尼迪',
                        sl_shen_zhangfei: '神张飞',
                        sl_dabao: '大宝·超',
                        sl_mou_huangzhong: '谋黄忠',
                        sl_jinggua: '经卦',
                        sl_jinggua_info: '游戏开始时,你随机获得总数为三的阳爻与阴爻,你将这些爻组成一个卦象.准备阶段与结束阶段,你可重新将爻进行组合.',
                        sl_qian: '☰乾',
                        sl_kun: '☷坤',
                        sl_zhen: '☳震',
                        sl_xun: '☴巽',
                        sl_kan: '☵坎',
                        sl_li: '☲离',
                        sl_gen: '☶艮',
                        sl_dui: '☱兑',
                        sl_qian_info: '当你造成伤害后,随机获得一个阴卦(离、巽、兑)的效果直到你的下一个回合开始.你处于<乾>卦时,触发阴卦效果后可令一名角色弃置一张牌.',
                        sl_kun_info: '当你受到伤害后,可随机获得一个阳卦(震、坎、艮)的效果直到你的下一个回合结束.你处于<坤>卦时,触发阳卦效果后摸一张牌.',
                        sl_zhen_info: '你使用牌不可被响应.你处于<震>卦时,你造成的雷电伤害+1;当你受到雷电伤害时,防止此伤害.',
                        sl_xun_info: '你使用牌无距离限制.你处于>巽<卦时,出牌阶段限一次,你可获得一名其他角色一张牌.',
                        sl_kan_info: '摸牌阶段,你多摸两张牌.你处于<坎>卦时,每轮游戏开始时,你可对一名与你距离为1的角色造成一点伤害.',
                        sl_li_info: '当你造成伤害后,目标下一个摸牌阶段额定摸牌数-1且你摸一张牌.你处于<离>卦时,摸牌阶段,你少摸一张牌.',
                        sl_gen_info: '每轮游戏开始时,你回复一点体力并摸一张牌.你处于<艮>卦时,结束阶段,你可令一名其他角色选择摸两张牌或回复一点体力.',
                        sl_dui_info: '准备阶段,你可以令你至其距离为1的角色各摸一张牌或各弃一张牌.你处于<兑>卦时,当你受到伤害后,伤害来源弃置一张牌,你随机使用牌堆中的一张装备牌.',
                        sl_qianqian: '乾为天',
                        sl_kunkun: '坤为地',
                        sl_kunzhen: '雷地豫',
                        sl_kunkan: '水地比',
                        sl_kungen: '山地剥',
                        sl_zhenkun: '地雷复',
                        sl_kankun: '地水师',
                        sl_genkun: '地山谦',
                        sl_qianxun: '风天小畜',
                        sl_qianli: '火天大有',
                        sl_qiandui: '泽天夬',
                        sl_liqian: '天火同人',
                        sl_duiqian: '天泽履',
                        sl_zhenzhen: '震为雷',
                        sl_zhenkan: '水雷屯',
                        sl_zhengen: '山雷颐',
                        sl_kanzhen: '雷水解',
                        sl_kankan: '坎为水',
                        sl_kangen: '山水蒙',
                        sl_genzhen: '雷山小过',
                        sl_genkan: '水山蹇',
                        sl_gengen: '艮为山',
                        sl_xunxun: '巽为风',
                        sl_xunli: '火风鼎',
                        sl_xundui: '泽风大过',
                        sl_lixun: '风火家人',
                        sl_lili: '离为火',
                        sl_lidui: '泽火革',
                        sl_duixun: '风泽中孚',
                        sl_duili: '火泽睽',
                        sl_duidui: '兑为泽',
                        ls_shengcai: '自书',
                        ls_shengcai_info: '锁定技,①当你于当前回合第一次使用牌后,你将该牌对应的实体牌置于武将牌上,称之为【书】,你摸一张牌.②你的回合结束时,将所有的【书】置于牌堆顶,并获得上次因此技能失去的【书】.',
                        ls_jiquan: '贺励',
                        ls_jiquan_info: '出牌阶段限一次,你可以流失一点体力,获得你的初始手牌(无论它们在哪).',
                        ls_juesi1: '决堰',
                        ls_huairou: '怀柔',
                        ls_huairou_info: '①你的回合开始时或受到伤害后,你可以将手牌摸到体力上限.②你造成伤害后,回复一点体力.③其他角色出牌阶段结束时,你可以与其拼点,若你赢,视为你对其使用决斗',
                        ls_poshi: '破势',
                        ls_poshi_info: '觉醒技,准备阶段开始时,若你的装备区全部被废除或者体力值为1,你失去【决堰】,获得【怀柔】',
                        ls_juesi: '决堰',
                        ls_juesi_info: '出牌阶段限一次,你可以选择你的一个阶段(除准备和结束),从下个回合开始你永远跳过之.若此阶段为①判定阶段,你废除你的判定区②摸牌阶段,摸十张牌③出牌阶段,此回合内出牌无视距离和次数且不可被响应④弃牌阶段,获得技能【险卫】',
                        ls_jianying: '渐营',
                        ls_jianying_info: '①当你于一个回合内使用一张牌结算完成后,若此牌为锦囊/装备牌,直到回合结束,你使用锦囊/装备时摸一张牌;杀/闪,你获得<挽弓>/<雷击(界)>直到回合结束.②当你造成/受到伤害后,你获得<铁骑(界)>/<恢拓>直到回合结束.',
                        ls_guhuo: '秒策',
                        ls_guhuo_info: '出牌阶段限一次,你可以选择一张手牌并选择一名角色,对其使用此牌,此牌无法响应.你从牌堆获得一张同类型的牌',
                        ls_ziru: '荒暴',
                        ls_ziru_info: '出牌阶段,你可以流失一点体力,本回合杀的攻击距离翻倍,出杀次数加一(可叠加).',
                        ls_ziru1: '荒暴',
                        ls_caiqing: '聚财',
                        ls_caiqing_info: '你的体力值改变后,你摸一张牌.',
                        ls_jucai: '聚财',
                        ls_jucai_info: '当你的护甲抵消伤害后,你可以选择一项,获得一名角色的一张牌,选择将一张手牌放在武将牌上,称为<财>摸一张牌,获得一张<财>',
                        ls_fuyou: '福佑',
                        ls_fuyou_info: '限定技,出牌阶段结束时,你可以获得等同于杀的攻击距离的护甲值.失去技能<自辱>并修改技能<聚财>',
                        ls_jinqu: '进趋',
                        ls_jinqu_info: '①你的出牌阶段开始时,若你没有进趋牌,你可以获得牌堆顶的五张牌,称之为进趋牌,你只能依次使用打出或弃置进趋牌.②当你失去最后一张进趋牌后,若在你的回合内,你获得破竹直到回合结束,反之,你增加一点体力上限,回复一点体力.',
                        ls_nanshu: '难书',
                        ls_nanshu_info: '锁定技,当你死亡时,你令其他所有角色弃置一张杀,否则失去一点体力,视为对你使用一张杀',
                        ls_tixie: '提携',
                        ls_tixie_info: '一轮游戏开始时,你选择一名从未以此法选择的角色,令其增加一点体力上限,回复一点体力.直到下轮游戏开始,每当你成为非延时锦囊,非装备卡牌的唯一目标,其也成为此牌的目标,并且不会成为强征的目标.',
                        ls_tixie2: '提携',
                        ls_qiangzheng: '强征',
                        ls_qiangzheng_info: '锁定技,其他角色出牌阶段开始时,其需对你使用一张杀,否则你观看并获得其一张牌.',
                        ls2_jieying2: '利驱',
                        ls2_jieying: '拜父',
                        ls2_jieying_info: '①你的回合开始时,若场上没有【子】标记,你获得三个.②有【子】标记的角色每有一个【子】标记,摸牌阶段多摸1张牌,出牌阶段杀使用次数加1,手牌上限加1.③你造成伤害/受到伤害后,伤害来源获得伤害目标一张牌.你将一个【子】标记交给对方.④有【子】标记的角色摸牌阶段,其摸牌改为你摸牌.⑤有【子】标记的角色出牌阶段使用牌时,其可以弃置其所有的子标记视为你对其选择的角色使用相同的牌.',
                        ls_paiyi2_backup: '破降',
                        ls_paiyi2: '破降',
                        ls_paiyi2_info: '出牌阶段,你可以将一张绝置于一名武将牌上没有【箓】的其他角色的武将牌上,视为【箓】',
                        ls_jueyong: '绝勇',
                        ls_jueyong_info: '锁定技,当你成为非虚拟,非转化,非装备牌且不是因此技能使用的卡牌的目标后,你将此卡牌置于你的武将牌上,称之为【绝】,若使用者不为你,此卡牌失效.你的回合结束时,你令【绝】的原始使用者对你使用【绝】.',
                        ls_huiji: '悔及',
                        ls_huiji_info: '觉醒技,主公技,当一名魏势力角色死亡后,若其先辅的目标是你,你失去技能怠防',
                        ls_poxiang: '迫降',
                        ls_poxiang_info: '锁定技,其他角色受到你的伤害后,若其没有先辅,需进行选择,1.此伤害翻倍,2.取消此次伤害,获得技能先辅,且先辅的目标为你(每名角色每局限选一次).摸牌阶段你多模两张.体力值小于你的角色无法响应你的牌.',
                        ls_daishou2: '怀恨',
                        ls_daishou2_info: '出牌阶段,若你有先辅,你可以对你先辅的角色发动雄乱,失去先辅和怀恨.',
                        ls_daishou: '怠防',
                        ls_daishou_info: '锁定技,弃牌阶段开始时,你跳过此阶段.弃置手牌中的所有闪和无懈,并摸等量的牌.先辅你的角色在成为你顺手牵羊的目标后,获得技能怀恨.',
                        ls_xunfang: '寻芳',
                        ls_xunfang_info: '锁定技,你的准备阶段开始时,你视为使用一张无距离限制的顺手牵羊.当其他角色成为你的顺手牵羊的目标后,若其是男性,其从弃牌堆获得一种杀;其是女性,其从弃牌堆获得一张无懈可击.',
                        ls_luanji: '乱击',
                        ls_luanji_info: '出牌阶段,你可以将两张花色一样的牌当作万箭齐发使用,你的万剑齐发会指定自己为目标.',
                        ls_wangduo: '妄度',
                        ls_wangduo_info: '主公技,限定技,你的回合开始时,你可以选择至多X名角色,本回合,这些角色无法使用技能,你获得他们各一张牌',
                        ls_lveming: '掠命',
                        ls_lveming_info: '每当你使用锦囊牌造成伤害后,你增加一点体力上限,回复一点体力.出牌阶段限一次,你可以减少体力上限到体力值.若你减少的体力上限大于1,你摸两张牌;大于2,你视为使用一张万剑齐发.',
                        ls_mumu: '穆穆',
                        ls_mumu_info: '出牌阶段开始时,你可以获得一名角色的一张装备牌,回复一点体力.否则回合结束时,你将手牌补至体力上限',
                        ls_meibu: '魅步',
                        ls_meibu_info: '其他角色回合开始时,若你在其攻击范围内,你选择一项1.弃置一张手牌,使其获得【止息】直到其回合结束2.你受到其的一点伤害,使其获得【止息】直到你的回合结束',
                        ls_zhixi: '止息',
                        ls_zhixi_info: '锁定技,①每当你于当前回合获得和失去的牌数大于X,你不能使用或打出手牌直到此回合结束;②任一回合开始时,若你的手牌数大于X,你随机失去手牌到X;③当你击杀一名角色后,你随机移除武将牌上的一个技能.(若孙鲁育存活,则X为你与孙鲁育血量之和;反正X为你的血量.)',
                        ls_jinfan: '天演',
                        ls_jinfan_info: '锁定技,你始终刻意可以看见牌堆顶的一张牌,并且可以如手牌般使用或打出.',
                        ls_jinfan1: '天演',
                        ls_jinfan1_info: '锁定技,你始终刻意可以看见牌堆顶的三张牌,并且可以如手牌般使用或打出.',
                        ls_dinghan: '浑象',
                        ls_dinghan_info: '每当一张牌被使用时,你记录其点数.每回合限两次,你可以将一张已经记录点数的手牌当作任意基本牌使用或打出.',
                        ls_miaobi: '定章',
                        ls_miaobi_info: '锁定技,你的回合结束时,若你已因浑象记录了所有的点数.你进行一次术数推算,成功:你失去技能定章,将天演描述中的<一>改为<三>;失败:你失去所有记录.',
                        ls_suixi: '碎玺',
                        ls_suixi_info: '觉醒技,当你失去牌时,若你没有玉玺,你销毁游戏中的玉玺,重置武将牌,获得技能济世(老),兴学(界),你选择一名角色使其翻面,且所有非锁定技失效直到其下个回合结束.',
                        ls_xianmu: '献穆',
                        ls_xianmu_info: '锁定技,游戏开始时,你装备玉玺.你的回合开始时,如果你装备着玉玺,你获得技能尊位,归心,定汉直到下个回合开始.你不能使用宝物牌.',
                        shentieji: '铁骑',
                        shentieji_add: '铁骑',
                        shentieji_info: '锁定技,①你的【杀】无视防具且无距离限制.②你的杀可以额外指定有<袍>标记的角色为目标.移除其一个<袍>标记.③你的【杀】结算过程中其他角色的技能失效至你的【杀】结算完毕.④你的【杀】造成伤害后,受伤角色获得技能〖弃袍〗',
                        shengli: '神力',
                        shengli_info: '锁定技,①准备阶段,你将武将牌回复至游戏开始时的状态.②结束阶段,你将武将牌翻面,你视为使用两张【杀】',
                        shenqipao: '弃袍',
                        shenqipao_info: '锁定技:①出牌阶段开始时,若你手牌数大于手牌上限,你需将手牌弃到手牌上限(不弃则获得等量的<袍>标记).②回合开始时,你可以弃置一张牌并进行一次判定,如果结果为黑,你移除所有<袍>标记.③你手牌上限减少X,(至少为1),(X为<袍>的数量)',
                        jupai: '惧怕',
                        jupai_info: '锁定技,你的技能失效',
                        sl_dulie: '笃烈',
                        sl_dulie_info: '锁定技,①游戏开始时,你选择X名其他角色(X为场上人数的一半,向下取整),令这些角色获得<围>标记;②你对没有<围>的角色使用【杀】无距离限制;③当你成为没有<围>标记角色使用【杀】或【乐不思蜀】的目标时,你进行一次判定,若判定结果为红色,则取消之,且你摸一张牌.',
                        sl_shenzhu: '神著',
                        sl_shenzhu_info: '锁定技,①当你使用实体【杀】结算完毕后,你摸一张牌;②你使用杀无次数限制.③你使用【杀】可额外指定一名目标.',
                        sl_dangmo: '荡魔',
                        sl_dangmo_info: '当你于出牌阶段内使用第一张【杀】选择目标后,你可以为此牌增加至多Y-1个目标(Y为你的体力上限).',
                        shenwansha: '完杀',
                        shenwansha_info: '完杀,场上除濒死角色外其他角色无法使用或打出【桃】',
                        sl_jishi: '济世',
                        sl_jishi_info: '锁定技.①当你使用的牌结算完成后,若你未因此牌造成过伤害,则你将此牌对应的所有实体牌置于仁库中.②当有牌离开仁库时,你摸一张牌.',
                        fenglve3: '酣战',
                        sl_tianyi: '天义',
                        sl_tianyi_info: '出牌阶段限一次,你可以摸一张牌,选择一名其他角色,你与其进行拼点,若你赢,你从弃牌堆获得一张杀并于本回合内你使用【杀】无距离与次数限制并可额外指定一名目标,若你输,你选择一项,1.弃置一张牌,或2.令赢的角色从弃牌堆获得一张红杀.',
                        sl_hanzhan: '酣战',
                        sl_hanzhan_info: '当你与其他角色进行拼点时,你可以改为随机将其一张牌当做其的拼点牌.你拼点结束后,你获得拼点牌中点数大的【杀】,如果你没有获得你的拼点牌,你可以令对方获得;当你进行的拼点结果亮出前,你可以令对方的拼点数-4/+2;',
                        ls_tanbao: '耽掠',
                        ls_tanbao_info: '1.出牌阶段,你可以选择一名角色,若其没有牌,其摸一张牌.你将其随机一张手牌变成神器,并与其进行拼点.若你赢,你摸一张牌,弃置一张牌,如果该牌是装备牌,你将其置于武将牌上,你重复以上流程.若你输,你失去一点体力.2.你武将牌上每有一张装备牌,其他角色计算与你的距离时加1.',
                        hanzhaneq1: '怀异',
                        hanzhaneq1_info: '当你拼点时,你可令对方随机使用一张装备牌进行拼点.拼点结束后,如果对方的拼点牌为装备牌,你获得之,为神器牌,你使其获得讨灭标记.',
                        ls_zaixiong: '载凶2',
                        ls_zaixiong_info: '出牌阶段限一次,你可以弃置一张装备牌,对一名角色造成一点伤害.如果该角色有讨灭标记,你对其发动讨灭.',
                        ls_rongquan: '载凶',
                        ls_rongquan_info: '1.出牌阶段限一次,你可以从你武将牌上选择一张装备牌获得之,你获得技能【载凶2】直到回合结束.2.你不会因为耽掠而失去体力.',
                        ls_zili: '自立',
                        ls_zili_info: '准备阶段开始时,如果你武将牌上有三张以上的装备,你失去一点体力,获得技能载凶',
                        sl_keji: '克己',
                        sl_keji_info: '弃牌阶段开始时,若你本回合没有使用过【杀】,你可以跳过本次弃牌并获得一个额外的摸牌阶段',
                        dz_nddk_xiuxue: '修学',
                        dz_nddk_xiuxue_info: '转换技,锁定技,你可在出牌阶段弃置一张牌转换技能阴阳,否则技能不会因触发效果而转换阳阳,①阳;摸牌阶段开始时,你观看牌堆顶的X张牌并以任意顺序放回或置于牌堆底(X为你的体力上限),②阴;摸牌阶段开始时,你摸一张牌观看一名其他角色的手牌并弃置其中一张牌',
                        sl_gonxin: '攻心',
                        sl_gonxin_info: '出牌阶段限一次,你可以观看一名其他角色的手牌,并做出如下选择,1.弃置其中一张,2.将其中一张置于牌堆顶',
                        sl_qinxue: '勤学',
                        sl_qinxue_info: '觉醒技,准备阶段,若你的手牌数比体力值多7或更多(若场上存活人数大于6,则改为5),你减少一点体力上限失去技能〖攻心〗获得技能〖修学〗与〖博图〗',
                        sl_botu: '博图',
                        sl_botu_info: '每轮限两次,结束阶段,若你本回合使用过四个花色的牌,你可获得一个额外的回合',
                        sl_zhangming: '彰名',
                        sl_zhangming_info: '锁定技,①你使用牌不可被响应;②每回合限两次,当你对其他角色造成伤害后,你随机弃置其一张手牌,你从牌堆或弃牌堆中获得与此牌类型不同的牌各一张(若其无手牌可弃,你从牌堆与弃牌堆获得三种类型的牌各一张),以此法获得的牌不计入本回合手牌上限,你摸一张牌.',
                        sl_zaoli: '躁厉',
                        sl_zaoli_info: '①当你使用或打出牌后或当你造成/受到伤害后,你获得一个<厉>;②准备阶段,若你有<厉>,你可以移去你所有的<厉>,若此时你有牌,你需弃置至少一张牌,你摸X+Y张牌(X为被移去的<厉>数,Y为你弃置的牌数),若X大于13-你的体力上限,你失去一点体力,反之,X小于13-你的体力值,你回复一点体力;③出牌阶段限一次,你可以弃置两张牌并选择至多三名其他角色,你视为依次对这些角色使用一张无距离与次数限制的【杀】',
                        sl_chuhai: '除害',
                        sl_chuhai_info: '使命技,①出牌阶段限一次,你可以选择一名其他角色,你与其进行拼点,本次你的拼点牌点数+6-你装备区内牌数,若你赢,你观看其手牌并从牌堆/弃牌堆中获得与其手牌中所拥有类型的牌各一张,你视为对其使用一张无距离与次数限制的【杀】;当你本阶段内对其造成伤害后,你将牌堆/弃牌堆中的一张你没有的装备牌置入你的装备区.②成功,当一张装备牌进入你的装备区后,若此时你装备区内的牌数不小于3,你回复满体力值并获得技能〖彰名〗失去技能〖乡害〗,你将手牌摸至体力上限.③失败,若你除害拼点失败且你的本次拼点牌的最终点数不大于8,则你使命失败',
                        jishen: '极神',
                        jishen_info: '锁定技,①当你:进行判定的结算后/武将牌翻面时/回复体力后,你摸一张牌,②你免疫体力上限减少和流失/失去体力,③你的手牌上限为无限,你使用【杀】与【酒】无次数限制,你至其他角色的距离为1,其他角色至你的距离+1.④其他角色使用延时锦囊牌不能指定你为目标.其他角色不能指定你为拼点目标.⑤当你死亡时,若你体力值大于0,则无效.⑥准备阶段,若你有装备栏被废除,则回复之.其他角色不能获得与弃置你的装备牌.',
                        sl_shenbian: ' ',
                        sl_shenbian_info: '',
                        sl_powei: '破围',
                        sl_powei_info: '使命技,①当你使用的【杀】对有<围>的角色造成伤害时,你防止此伤害并移去该角色的<围>,随机弃置其一张牌;②成功,当你使用杀结算后,若场上没有角色拥有<围>,你获得技能〖神著〗并将手牌摸至体力上限;③失败,若你在使命成功前进入濒死状态,则你将体力值回复至3并弃置全部装备区内的牌.',
                        sl_xinzhan: '心战',
                        sl_xinzhan_info: '出牌阶段开始时/结束阶段,你可以依次观看两次牌堆顶的X+1张牌(X为你的体力上限),第一次,你获得其中任意张♥️️牌,第二次,你获得其中任意张♠️️牌,你经卦5(经卦≈观星,观星≠经卦).',
                        ls_sanyao: '制蛮',
                        ls_sanyao_info: '当你造成伤害时,你可以防止此伤害,令受伤角色获得一个<制>;拥有<制>的角色,①受到你造成的伤害时,防止此伤害,你获得其一张牌,②其回合结束时,若其于此之前,1.没有对你造成过伤害,你可以发动一次〖心战〗或弃置一张牌并一名其以外的角色,其视为对你选择的角色造成一点伤害,2.有对你造成过伤害,其失去一点体力.移去其的<制>.当一名角色获得或失去<制>时,你摸一张牌',
                        ls_zhi: '制蛮',
                        ls_zhi_info: 'undefined',
                        sl_lirang: '礼让',
                        sl_lirang_info: '①其他角色的摸牌阶段开始时,若你的<谦>标记不大于1,则你可以获得一枚<谦>标记.若如此做,其本次摸牌多摸X+(Y*1.5(向上取整)+aY)张牌(X为你的体力上限,Y为你已损失体力值,aY为你当前体力值),本回合的弃牌阶段结束后,若其于弃牌阶段有弃置过牌,则你可以获得任意张其弃置的牌或摸一张牌并回复一点体力.②摸牌阶段开始时,若你有<谦>标记,则你可以跳过此摸牌阶段并移除你所有的<谦>标记.',
                        sl_mingshi: '名仕',
                        sl_mingshi_info: '当你拥有<谦>标记时,①当你受到伤害后,你可以令伤害来源弃置Y张牌.若其以此法弃置的第一张牌为:黑色:你获得之.红色,你回复1点体力;你的手牌上限始终+X*2-Y.②其他角色使用【杀】指定你为目标时,你可以交给其一张牌,若如此做,取消此目标',
                        sl_jiqiao: '激峭',
                        sl_jiqiao_info: '出牌阶段开始时,你可将牌堆顶X+2张牌置于武将牌上(X为你的体力上限).本阶段内,当你使用一张牌后,你可以获得这些牌中的一张,若其余牌中两种颜色数量:相等,你回复一点体力;不等,你失去一点体力,摸Y-1(Y为你已损失体力值)张牌.出牌阶段结束时,你将这些牌置入弃牌堆.',
                        sl_xiongyi: '凶疑',
                        sl_xiongyi_info: '此技能不会失效.限定技,当你处于濒死状态时,你可以选择一项:1.将体力值回复至2并获得技能〖魂姿〗与〖激昂〗并摸两张牌,2.替换武将牌为【徐氏】并回复满体力值,摸三张牌.',
                        sl_zhouxuan: '周旋',
                        sl_zhouxuan_info: '弃牌阶段开始时,你可以将任意张牌置于武将牌上,称之为<旋>.你拥有<旋>时,你每使用或打出一张牌后,你可以摸一张牌并移去一个<旋>(若你的手牌数不为全场唯一最多,则多摸X-1张牌,X为<旋>的数量).弃牌阶段开始前,你将所有的<旋>置入弃牌堆',
                        sl_pingjian: '评荐',
                        sl_pingjian_info: '你可以在以下时机由系统随机选择三个可在此时机发动技能的角色并展示,你可选择其中一个技能并发动(或摸一张牌);出牌阶段开始与结束时,出牌阶段限一次,你的回合开始时与准备阶段,摸牌阶段(仅draw1),弃牌阶段开始时与结束时,结束阶段,当你受到伤害后,当你濒死时',
                        sl_qiaobian: '巧变',
                        sl_qiaobian_info: '在以下阶段开始前,你可以弃置一张手牌跳过此阶段,触发对应的效果:判定阶段,你可以视为使用一张【杀】.摸牌阶段,你可以获得任意名其他角色的一张牌.出牌阶段,你摸三张牌,你依次可以:①移动场上至多两张牌,②视为使用一张【决斗】,③视为使用一张【杀】.弃牌阶段,你选择一项,1.翻面,回复一点体力,2.横置,失去一点体力.你可以视为使用一张【过河拆桥】与【顺手牵羊】和【杀】.你以此法使用的牌均无距离与次数限制且不计入次数限制',
                        sl_qiaobian1: '巧变·判定',
                        sl_qiaobian1_info: '',
                        sl_qiaobian2: '巧变·摸牌',
                        sl_qiaobian2_info: '',
                        sl_qiaobian3: '巧变·出牌',
                        sl_qiaobian3_info: '',
                        sl_qiaobian4: '巧变·弃牌',
                        sl_qiaobian4_info: '',
                        sl_zhenshan: '振赡',
                        sl_zhenshan_info: '每回合限一次,当你需要使用或打出一张基本牌时,你可以选择一名手牌数小于你的其他角色,你与其交换手牌并视为你使用或打出了你所需的牌,若你以此法使用牌,你可以选择一名其他角色,你令其弃置一张牌,你可再选择一名角色,你令其摸一张牌.或摸一张牌.若你以此法打出牌,你可以选择一名手牌数小于你的角色,令其摸两张牌',
                        sl_zhenshan_use: '振赡',
                        sl_zhenshan_use_info: '出牌阶段限一次,当你需要使用或打出一张基本牌时,你可以选择一名手牌数不大于你的角色,你与其交换手牌,你视为使用或打出了你需要的牌',
                        sl_yaoming: '邀名',
                        sl_yaoming_info: '每回合每项限一次,一名角色的准备阶段或当你造成与受到伤害后,你可以选择一名其他角色,若其手牌数:大于你:你视为对其使用一张【出其不意】,你获得其一张牌并弃置其一张牌.等于你:你视为对其使用一张【偷梁换柱】并对其造成一点伤害,其与你各弃置一张牌.小于你:你令其摸一张牌,你视为对其使用一张【远交近攻】.此期间你使用的牌不可被【无懈可击】响应.',
                        sl_yaoming2: '邀名',
                        sl_yaoming2_info: '选择一名其他角色,若其手牌数:大于你:你视为对其使用一张【出其不意】,你获得其一张牌并弃置其一张牌.等于你:你视为对其使用一张【偷梁换柱】并对其造成一点伤害,其与你各弃置一张牌.小于你:你令其摸一张牌,你视为对其使用一张【远交近攻】.',
                        sl_liehou: '列侯',
                        sl_liehou_info: '出牌阶段限一次,你可以弃置一张牌并选择至多四名你攻击范围内的角色,这些角色依次选择是否将一张手牌交给你,若选是,你摸一张牌,你获得以下效果;本回合可多使用1张【杀】,手牌上限+1(此效果可叠加);若选否,则其受到你造成的一点伤害.每以此法获得一张其他角色的手牌,你可以将一张牌交给你攻击范围内的一名其他角色(不能是交给你牌触发此效果的角色).',
                        sl_qigong: '齐攻',
                        sl_qigong_info: '当你使用【杀】结算完毕后,你可令一名角色对目标使用一张无距离限制的【杀】.若其选择出【杀】,则其摸一张牌,且此【杀】不可被响应.',
                        sl_qigong2: '齐攻',
                        sl_qigong2_info: '',
                        sl_aocai: '傲才',
                        sl_aocai_info: '当你于回合外需要使用或打出基本牌时,你可以观看牌堆顶的X张牌(X为你当前体力值+1,若你手牌数不大于2,则改X为你的体力上限+2),你可以使用或打出其中的基本牌;出牌阶段限两次,你可以摸一张牌并观看牌堆顶的X张牌,你可以选择其中一张牌,将此牌使用或打出.',
                        sl_aocai2: '傲才',
                        sl_aocai2_info: '',
                        sl_duwu: '黩武',
                        sl_duwu_info: '出牌阶段,你可以选择你攻击范围内的一名其他角色并弃置Y-1张牌(Y为该角色的体力值),你弃置其一张牌并对其造成1点伤害.若其因此进入濒死状态,则完毕后,若其存活,你摸一张牌并失去1点体力.',
                        sl_duwu3: '黩武',
                        sl_duwu3_info: '',
                        sl_iehou2: '列侯',
                        sl_iehou2_info: '',
                        sl_kannan: '堪难',
                        sl_kannan_info: '出牌阶段,你可以摸X张牌并与一名角色拼点,你本次拼点的点数+Y;(5-X)=Y;(X为你已损失体力值).若你赢,且你不为"堪难"状态,你获得"堪难",反之,你进入"堪难"状态.若你没赢,你本回合不能对其发动〖堪难〗且其获得"堪难".当你一名角色使用【杀】时,若其有"堪难",则此【杀】伤害+1并移去其的"堪难"或状态.',
                        sl_zhengrong: '征荣',
                        sl_zhengrong_info: '当你使用带有「伤害」标签的基本牌或锦囊牌指定目标后,你可以将其中一名其他角色的一张牌置于你的武将牌上,称为「荣」.若如此做,你摸一张牌.',
                        sl_qingce: '清侧',
                        sl_qingce_info: '出牌阶段,你可以弃置一张牌并获得一张『荣』,弃置至多两名其他角色区域内的一张牌,若目标无牌,则改为你摸一张牌并对其造成一点伤害',
                        sl_hongju: '鸿举',
                        sl_hongju_info: '觉醒技,准备阶段,若你武将牌上「荣」的数量不小于你当前体力值的双倍且场上有角色已死亡,则你摸等同于「荣」数量的牌.可以用任意数量的手牌交换等量的「荣」.完毕后,你减1点体力上限并获得技能〖清侧〗.',
                        sl_sidi: '司敌',
                        sl_sidi_info: '①当你使用或打出的牌结算完毕后,你可以选择一名其他角色,其为A,你选择一名B.或令A成为其自己关系内的B.双方进行标记(只你可见).当A使用牌时,若此牌指定了B为目标,则:若B为你,你可以弃置A区域内的一张牌.你摸一张牌.不为你,你可以选择一项,1.取消此牌的目标并对A造成一点伤害,2.摸两张牌并可弃置A一张牌.反之,清除AB关系.②弃牌阶段开始时,你可以将至多三张非基本牌置于武将牌上,称为<司>.其他角色的出牌阶段开始时,你可以移去一张<司>.若如此做,其本回合内不能使用或打出与<司>颜色相同的牌且手牌上限-1.此阶段结束时,若其于此阶段内未使用过:【杀】,你视为对其使用一张【杀】并摸一张牌.锦囊牌,你摸一张牌.',
                        sl_zhaoran: '昭然',
                        sl_zhaoran_info: '出牌阶段开始时,你可令你的手牌对其他角色可见直到出牌阶段结束.若如此做,当你于此阶段内失去一张手牌后,若你的手牌里没有与此牌花色相同的牌,则你选择一项:①摸一张牌.②弃置一名其他角色的一张牌.',
                        sl_zhaoran2: '昭然',
                        sl_zhaoran2_info: '',
                        sl_tuishi: '推弑',
                        sl_tuishi_info: '隐匿技,当你登场后,当前回合角色称之为A,A的回合结束时,你可以选择一名其他角色,你获得其一张牌并弃置其一张牌.你可以选择A攻击范围内的一名角色B.A选择一项:①对B使用一张【杀】,你可以获得A一张牌.②受到你造成的1点伤害,你可以弃置A一张牌.',
                        sl_tuishi2: '推弑',
                        sl_tuishi2_info: '',
                        sl_choufa: '筹伐',
                        sl_choufa_info: '出牌阶段限一次,你可以选择一名其他角色,你观看其手牌并展示其中一张手牌A.你令其所有类型与A不同的手牌均视为无属性【杀】,直到其回合结束;锁定技,结束阶段,你摸一张牌,你可以选择一名其他角色或摸一张牌,你观看并弃置其一张牌,你视为对其使用一张无距离限制的【杀】且其获得以下效果直到其下回合结束:①手牌上限-2,②使用【杀】时需弃置一张牌,③造成伤害后,失去一点体力.',
                        sl_choufa2: '筹伐',
                        sl_choufa2_info: '',
                        sl_choufa3: '被伐',
                        sl_choufa3_info: '锁定技,你的手牌上限-2,你使用【杀】时需弃置一张牌,你造成伤害后失去一点体力',
                        sl_chengwu: '成务',
                        sl_chengwu_info: '主公技,锁定技,其他晋势力角色攻击范围内的角色视为在你的攻击范围内;其他晋势力角色出牌阶段限一次,其可以将一张基本牌或锦囊牌交给你,若如此做,其选择,1.摸两张牌,2.回复一点体力.且直到此阶段结束前,你或其使用【杀】时,摸一张牌.',
                        sl_chengwu2: '成务',
                        sl_chengwu2_info: '',
                        sl_chengwu3: '成务',
                        sl_chengwu3_info: '',
                        sl_sidi_ls: '司敌',
                        sl_sidi_ls_info: '弃牌阶段开始时,你可以将至多三张非基本牌置于武将牌上,称为<司>.其他角色的出牌阶段开始时,你可以移去一张<司>.若如此做,其本阶段内不能使用或打出与<司>颜色相同的牌且手牌上限-1.此阶段结束时,若其于此阶段内未使用过:【杀】,你视为对其使用一张【杀】并摸一张牌.锦囊牌,你摸一张牌.',
                        sl_sidi2: '司敌',
                        sl_sidi2_info: '',
                        ls_sidi1: '司敌',
                        ls_sidi1_info: '',
                        ls_sidi2: '司敌',
                        ls_sidi2_info: '',
                        sl_jintao: '进讨',
                        sl_jintao_info: '锁定技,①你使用【杀】无距离限制与次数限制.你于出牌阶段内使用的第一张【杀】伤害+1,使用第二张【杀】时激活③;②你使用【杀】时,你摸X+1张牌(X为你已损失体力值,③生效时,②失效).③:你使用牌不可被响应且基础数值+1,若基础数值为回复,则只基本牌生效.',
                        sl_jintao3: '进讨',
                        sl_jintao3_info: '',
                        sl_xuanfeng: '旋风',
                        sl_xuanfeng_info: '当你失去装备区内的牌时,或于弃牌阶段弃置了手牌后,你可以依次选择一至两名其他角色,你观看其手牌并获得这些角色合计两张牌.',
                        sl_jiang: '激昂',
                        sl_jiang_info: '此技能不会失效.每当你使用(指定目标后)或被使用(成为目标后)一张【决斗】或红色的【杀】时,你可以摸一张牌,若本次触发〖激昂〗是因为使用,则若此时你拥有技能:〖荡江〗;你再摸一张牌且此【杀】/【决斗】不可被响应.〖激峭〗;你将牌堆顶的两张牌置于武将牌上(以此法置于武将牌上的牌可触发〖激峭〗).',
                        sl_yingzi: '英姿',
                        sl_yingzi_info: '锁定技,摸牌阶段,你多摸1+(N)张牌;你的手牌上限等于你的体力上限(N=当前你体力值)',
                        sl_hunzi: '魂姿',
                        sl_hunzi_info: '觉醒技,准备阶段,若你的体力值不大于2,你减少一点体力上限并获得技能〖英姿〗和〖英魂〗;你未觉醒前,其他角色不能使用延时性锦囊牌指定你为目标.',
                        sl_yinghun: '英魂',
                        sl_yinghun_info: '准备阶段开始时,若你已受伤,你可令一名其他角色执行一项:1.摸X张牌,弃置一张牌,2.摸一张牌,弃置X张牌(X为你已损失的体力值,若你装备区内装备牌的数量大于或等于你的体力值,则将X改为你的体力上限)',
                        dangjiang: '荡江',
                        dangjiang_info: '出牌阶段限一次,你可以选择一名其他角色,你摸Ya张牌并与其进行拼点(Ya为目标体力值),若你赢,你对其造成一点伤害,反之,你可以获得双方的拼点牌.',
                        sl_mingzhe: '明哲',
                        sl_mingzhe_info: '当你于回合外使用或打出红色牌,或因弃置失去一张红色牌后,你可以摸1张牌;每回合限一次,你可以将一张红色牌当做任意基本牌或锦囊牌使用.',
                        sl_mingzhe_use: '明哲',
                        sl_mingzhe_use_info: '',
                        sl_mingzhe_lose: '明哲',
                        sl_mingzhe_lose_info: '',
                        sl_hongyuan: '弘援',
                        sl_hongyuan_info: '摸牌阶段,你可以少摸一张牌并指定任意名其他角色.若如此做,这些角色各摸一张牌,若此时你已受伤,你可以摸一张牌.',
                        sl_huanshi: '缓释',
                        sl_huanshi_info: '一名角色的判定生效前,你可以与其各摸一张牌,其观看你的手牌.若如此做,该角色选择你的一张牌,你打出此牌代替本次判定.',
                        hmxzq: '限制',
                        hmxzq_info: '锁定技,若你的手牌数不小于20,你需弃置10张牌',
                        ls_danshou: '胆守',
                        ls_danshou_info: '①当你即将受到伤害时,若伤害来源不为你,你可以弃置X张牌对其造成一点伤害(X为3减去胆裂标记数),②任一角色回合结束时若你没有发动过①你摸一张牌,③当你于任一角色的出牌阶段造成伤害后,你摸一张牌,并令当前阶段立即结束.',
                        ls_liedan: '裂胆',
                        ls_liedan_info: '锁定技,当你于任一角色的出牌阶段受到伤害后,你获得一个胆裂标记.出牌阶段结束时,若你的胆裂标记不小于3,你死亡.',
                        sl_fengji: '丰积',
                        sl_fengji_info: '摸牌阶段开始时,你选择:⒈本回合摸牌阶段的额定摸牌数-1,且令一名其他角色下回合结束前:摸牌阶段的额定摸牌数+X/2,手牌上限+X/2(X为其体力上限,向上取整):⒉本回合:摸牌阶段的额定摸牌数+Y/2,手牌上限+Y/2(Y为你体力上限,向上取整).你选择:⒈本回合使用【杀】的次数上限-1,且令一名其他角色下回合使用【杀】的次数上限+X/2(向下取整);⒉本回合使用【杀】的次数上限+Y/2-1(向上取整);结束阶段,你可以摸一张牌,你可以将一张牌交给一名其他角色,其摸一张牌,且其回合开始时,其可以摸两张牌,此效果持续至其出牌阶段结束.',
                        sl_yingba: '英霸',
                        sl_yingba_info: '出牌阶段限一次,你可弃置一张牌选择一名其他角色,你令其获得一个<平定>标记,若如此做,你减少一点体力上限并失去一点体力.',
                        sl_scfuhai: '覆海',
                        sl_scfuhai_info: '锁定技.①当你使用牌指定目标后,若目标角色有<平定>标记,你摸一张牌并令其不可响应此牌.②拥有<平定>标记的角色死亡时,你增加X点体力上限回复X点体力(X为其拥有的<平定>标记数),若此时处于你的回合且你已发动过〖英霸〗,则本回合内〖英霸〗改为出牌阶段限两次且无须弃牌与失去体力并增加词条:目标需弃置Y张牌,你摸1+Y张牌.(Y为目标已损失体力值)',
                        sl_pinghe: '冯河',
                        sl_pinghe_info: '锁定技.①当你受到伤害时,若你有牌,你防止此伤害,将一张牌交给一名其他角色.②你对拥有<平定>标记的角色使用牌无距离限制,你每回合可多使用一张【杀】,你的手牌上限+你已损失体力值.',
                        sl_yingba2: '英霸',
                        sl_yingba2_info: '',
                        sl_boming: '博名',
                        sl_boming_info: '①出牌阶段每名角色各限一次,你可以将一张牌交给一名其他角色.结束阶段,若你本回合以此法失去过牌,则你摸一张牌.②当你受到伤害后,你可以令伤害来源失去一点体力,若如此做,你与其各摸一张牌,你随机使用牌堆/弃牌堆中一张你未装备的装备牌',
                        sl_boming2: '博名',
                        sl_boming2_info: '',
                        sl_ejian: '恶荐',
                        sl_ejian_info: '当一名其他角色因〖博名〗而获得了你的牌后,若其拥有与此牌类型相同的其他牌,则你可以摸一张牌并令其选择一项:①受到1点伤害.②展示所有手牌,并弃置所有与此牌类别相同的牌.',
                        sl_xingqi: '星启',
                        sl_xingqi_info: '①当你使用或打出一张牌时,若此牌不为延时锦囊牌且你没有与此牌同名的<备>,则你获得一枚与此牌名称相同的<备>.②结束阶段,你可移去一枚<备>,从牌堆/弃牌堆中获得一张与此<备>名称相同的牌,你摸一张牌.',
                        sl_zifu: '自缚',
                        sl_zifu_info: '锁定技.出牌阶段结束时,若你本阶段内未使用牌,则你移去所有<备>并失去一点体力且你本回合手牌上限-1.',
                        sl_mibei: '秘备',
                        sl_mibei_info: '使命技.①使命成功:当你使用的牌结算完成后,若你的<备>中包含的基本牌,锦囊牌,装备牌数量均大于1,则你从牌堆中获得这三种类型的牌各一张并失去技能〖自缚〗且获得技能<谋立>,你回复满体力值并进行洗牌.②使命失败:结束阶段开始时,若你没有<备>,且你于本回合的准备阶段开始时也没有<备>,则你死亡.',
                        sl_mouli: '谋立',
                        sl_mouli_info: '出牌阶段限一次,你可以选择一名角色,其选择并移去你的一个"备",其获得牌堆中一张与"备"相同牌名的牌,你与其各摸一张牌.',
                        sl_mibei2: '秘备',
                        sl_mibei2_info: '',
                        sl_quedi: '却敌',
                        sl_quedi_info: '每回合限一次.当你使用【杀】或【决斗】指定唯一目标后,你可选择:①获得目标角色的一张手牌并摸一张牌.②弃置一张基本牌,令此牌的伤害值基数+1.③背水:减1点体力上限摸一张牌,依次执行上述所有选项.',
                        sl_zhuifeng: '椎锋',
                        sl_zhuifeng_info: '魏势力技.每回合限两次,你可以弃置一张牌失去1点体力并视为使用一张【决斗】.当你因此【决斗】而受到伤害时,你防止此伤害并令此技能失效直到出牌阶段结束.',
                        sl_chongjian: '冲坚',
                        sl_chongjian_info: '吴势力技.你可以将一张装备牌当做【杀】(无距离限制且无视防具)或【酒】使用并摸一张牌,且此牌不可被响应.',
                        sl_choujue: '仇决',
                        sl_choujue_info: '锁定技.当有其他角色于你的回合内进入濒死时,你加1点体力上限回复一点体力并摸两张牌,本回合发动【却敌】的次数上限+1.',
                        sl_mibei3: '使命失败',
                        sl_mibei3_info: '点击听使命失败的语音,我把两个语音给分开了,直接点秘备是成功语音,点这个是失败语音,需要如千幻等显示子技能语音的扩展',
                        sl_zhuitao: '追讨',
                        sl_zhuitao_info: '①准备阶段,或当你受到伤害后,你可选择一名未被〖追讨〗记录过的其他角色,你将其记录进〖追讨〗并令其弃置一张牌.②你至所有被〖追讨〗记录的角色的距离-X.(X为你当前体力值).③当你对一名被〖追讨〗记录过的角色造成伤害后,你从〖追讨〗记录里移除该角色并摸一张牌,且你可视为使用一张无距离限制的【杀】.',
                        sl_saodi: '扫狄',
                        sl_saodi_info: '当你使用【杀】或普通锦囊牌指定唯一其他角色为目标时,你摸一张牌(若可触发后续选项),你可从你与其的上家和你与其的下家中选择一个你与其之间角色最少的方向.你与其之间的所有能成为此牌额外目标的角色均成为此牌的目标.',
                        sl_tianyun: '天运',
                        sl_tianyun_info: '①当你受到一点伤害后,你可随机获得【杀,闪,桃,酒】中的一种,你进行一次判定.若为:♥️️;你选择一项,1.回复一点体力,2.摸两张牌.♦️️;你获得一个额外回合.♠️️;你将武将牌翻面.♣️️;你需弃置一张牌(无牌则不弃).②游戏开始时,你获得一个额外回合',
                        sl_tianluo: '天落',
                        sl_tianluo_info: '觉醒技①此技能不会失效,②当你进入濒死状态时,你体力上限翻两倍回复满体力值并失去【天运】,结束当前角色的回合,完毕后,你获得脑洞大开内大部分角色的技能,且你获得一个额外回合,同时好名会出现限制',
                        sl_dunshi: '遁世',
                        sl_dunshi_info: '每回合限一次.你可以视为使用或打出一张基本牌或锦囊牌,当前回合角色于本回合内下一次造成伤害时,你选择两项:⒈防止此伤害.系统从技能名中包含<仁|义|礼|智|信|温|良|恭|谦|让|忠|孝|廉|耻|勇|诚|悌|勤|雅|恒|天|运|落|极|神>中任意一个字的技能中随机选择七个其未拥有的技能,你令当前回合角色获得其中一个技能.⒉从〖遁世〗中删除你本次使用或打出的牌并获得一个<席>.⒊减1点体力上限并摸X张牌(X为你的<席>数).',
                        cujue: '促决',
                        cujue_info: '每轮限一次,一名角色的出牌阶段结束时,若其未于本回合内使用过【杀】/未造成过伤害,则你可令其选择是否视为对一名其他角色使用一张无距离限制的【杀】.若此【杀】造成了伤害,则你与其各摸一张牌且其跳过本回合弃牌阶段.',
                        sl_zhaohuang: '召唤',
                        sl_zhaohuang_info: '出牌阶段限一次,你可弃置至多两张花色不同的牌,召唤等量的小黑子.<br/>小黑子初始分为"鸡"与"坤"体力值与上限为2.一轮游戏开始时,若有存活的"鸡"或"坤",则转换为爱坤"树枝",爱坤"荔枝"且有几率增加一点体力上限.<br/>树枝:拥有技能〖耀武〗与〖无双〗,体力值与上限为3,荔枝:拥有技能〖遗计〗与〖鬼才〗,体力值与上限为2.<br/>①你同步拥有小黑子/爱坤的技能,每一个小黑子/爱坤都会令技能〖马术〗中的数字+1,初始为0.②你死亡时,小黑子/爱坤一并死亡.③你/小黑子/爱坤使用牌不能指定对方为目标,你使用牌结算完毕后,小黑子/爱坤会对本次目标再次使用该牌,若为对你自己使用牌,则小黑子/爱坤会对自己使用该牌.④小黑子/爱坤拥有你装备区内牌的效果,⑤小黑子/爱坤的回合开始时,改为摸两张牌.小黑子与爱坤总数至多为两个.',
                        zyntm: '切BGM',
                        zyntm_info: '游戏开始时,你切换背景音乐为<只因你太美>.',
                        sl_zhenzhen_info: 'undefined',
                        sl_xunqian: '天雷无妄',
                        sl_xunqian_info: '',
                        sl_jiesho: '竭守',
                        sl_jiesho_info: '锁定技,①游戏开始时,你废除全部装备栏并摸两张牌.②准备阶段或当你受到伤害后,你回复一个装备栏并摸一张牌.③你的手牌上限+X.(X为你已废除的装备栏数).',
                        sl_xunji: '寻机',
                        sl_xunji_info: '觉醒技,出牌阶段开始时,若你没有装备栏被废除,则你减少一点体力上限,回复两点体力值,失去除〖竭守③〗外的全部〖竭守〗效果,获得〖伺破〗.',
                        sl_sipo: '伺破',
                        sl_sipo_info: '出牌阶段限一次,你可废除一个装备栏并选择一名其他角色,你对其造成X点伤害,摸X张牌.',
                        sl_die: '枪击',
                        sl_die_info: '游戏开始时,你受到两次999点的伤害,死亡.',
                        sl_qinzheng: '勤政',
                        sl_qinzheng_info: '无',
                        hm_shenfa: '神罚',
                        hm_shenfa_info: '出牌阶段限一次,你可将一名其他玩家移出游戏.',
                        sl_pojun: '破军',
                        sl_pojun_info: '当你使用【杀】指定目标后,你可以将其的至多X张牌置于你武将牌上(X为其体力值),若如此做,你于当前回合结束时获得这些牌且原拥有者摸等量牌.当你因执行【杀】的效果而对一名角色造成伤害时,若该角色的手牌数和装备区内的牌数均不大于你,则此伤害+1,若你武将牌上有因〖破军〗而置于武将牌上的牌,则改为+你武将牌上的破军牌数.',
                        sl_liegong: '烈弓',
                        sl_liegong_info: '①若你的装备区内没有武器牌,则你手牌区内所有【杀】的属性视为无属性.②当你使用牌时,或成为其他角色使用牌的目标后,你记录此牌的花色.③当你使用【杀】指定唯一目标后,若你〖烈弓②〗的记录不为空,则你可亮出牌堆顶的X张牌(X为你〖烈弓②〗记录过的花色数-1),令此【杀】的伤害值基数+Y(Y为亮出牌中被〖烈弓②〗记录过花色的牌的数量),且目标角色不能使用〖烈弓②〗记录过花色的牌响应此【杀】.此【杀】使用结算结束后,你清除〖烈弓②〗的记录.',
                        sl_hm_zhenshan: '振赡',
                        sl_hm_zhenshan_info: '每回合限一次,当你需要使用或打出一张基本牌时,你可以选择一名手牌数小于你的其他角色,你与其交换手牌并视为你使用或打出了你所需的牌.',
                    },
                    skill: {
                        sl_jinggua: {
                            trigger: {
                                global: 'gameStart',
                                player: ['phaseBegin', 'phaseEnd'],
                            },
                            forced: true,
                            _priority: 2000,
                            filter(event, player) {
                                return !player.hasSkill('sl_qian') / !player.hasSkill('sl_kun');
                            },
                            content() {
                                'step 0';
                                if (trigger.name != 'phase') {
                                    player.storage.gua = '';
                                    player.storage.gua2 = '';
                                    player.storage.yao = Math.round(Math.random()) + Math.round(Math.random()) + Math.round(Math.random());
                                    if (player.storage.yao == 0) {
                                        player.addSkill('sl_kun');
                                    }
                                    if (player.storage.yao == 3) {
                                        player.addSkill('sl_qian');
                                    }
                                }
                                if (player.storage.yao == 1 || player.storage.yao == 2) {
                                    if (player.storage.gua != '') {
                                        player.removeSkill(player.storage.gua);
                                        player.removeSkill(player.storage.gua + '_sub');
                                        player.storage.gua2 = player.storage.gua;
                                    }
                                    if (player.storage.yao == 1) {
                                        list = ['sl_kan', 'sl_zhen', 'sl_gen'];
                                    }
                                    if (player.storage.yao == 2) {
                                        list = ['sl_xun', 'sl_dui', 'sl_li'];
                                    }
                                    var func = function (skills, id) {
                                        var dialog = ui.create.dialog('forcebutton');
                                        dialog.videoId = id;
                                        dialog.add('选择获得一个卦象');
                                        for (var i = 0; i < skills.length; i++) {
                                            dialog.add(`<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【${get.translation(skills[i])}】</div><div>` + lib.translate[`${skills[i]}_info`] + '</div></div>');
                                        }
                                        dialog.addText(' <br> ');
                                    };
                                    if (player == game.me) func(list, event.videoId);
                                    player.chooseControl(list).set('ai', function () {
                                        return list.randomGet();
                                    });
                                } else event.finish();
                                ('step 1');
                                game.broadcastAll('closeDialog', event.videoId);
                                player.addSkillLog(result.control);
                                player.addSkill(result.control + '_sub');
                                player.storage.gua = result.control;
                                game.log(player.storage.gua);
                            },
                            derivation: ['sl_qian', 'sl_kun', 'sl_zhen', 'sl_kan', 'sl_gen', 'sl_xun', 'sl_li', 'sl_dui'],
                        },
                        sl_qian: {
                            mark: true,
                            marktext: '☰',
                            intro: {
                                name2: '乾',
                                content: '当你造成伤害后,随机获得一个阴卦(离、巽、兑)的效果直到你的下一个回合开始.你处于<乾>卦时,触发阴卦效果后可令一名角色弃置一张牌.',
                            },
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                player.storage.yin = ['sl_li', 'sl_dui', 'sl_xun'].randomGet();
                                player.addTempSkill(player.storage.yin, { player: 'phaseBegin' });
                            },
                            subSkill: {
                                sub: {
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseTarget('选择一名角色,令其弃置一张牌').set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            target.chooseToDiscard(get.prompt('sl_qian', target), '弃置一张牌', 'he', 1, true).set('ai', function (card) {
                                                return 8 - get.value(card);
                                            });
                                        }
                                    },
                                },
                            },
                        },
                        sl_kun: {
                            mark: true,
                            marktext: '☷',
                            intro: {
                                name2: '坤',
                                content: '当你受到伤害后,可随机获得一个阳卦(震、坎、艮)的效果直到你的下一个回合结束.你处于<坤>卦时,触发阳卦效果后摸一张牌.',
                            },
                            trigger: {
                                player: 'damageSource',
                            },
                            forced: true,
                            content() {
                                player.storage.yang = ['sl_zhen', 'sl_kan', 'sl_gen'].randomGet();
                                player.addTempSkill(player.storage.yang, { player: 'phaseEnd' });
                            },
                            subSkill: {
                                sub: {
                                    forced: true,
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        sl_zhen: {
                            mark: true,
                            marktext: '☳',
                            intro: {
                                name2: '震',
                                content: '你使用牌不可被响应.你处于<震>卦时,你造成的雷电伤害+1;当你受到雷电伤害时,防止此伤害.',
                            },
                            group: ['sl_zhen_count'],
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.card;
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player;
                                    })
                                );
                                if (player.hasSkill('sl_kun') && player.storage_zhen < 2) {
                                    player.storage_zhen += 1;
                                    player.useSkill('sl_kun_sub');
                                }
                            },
                            ai: {
                                directHit_ai: true,
                            }, //QQQ
                            subSkill: {
                                count: {
                                    forced: true,
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    _priority: 300,
                                    content() {
                                        player.storage_zhen = 0;
                                    },
                                },
                                sub: {
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin1',
                                        player: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        return event.nature == 'thunder';
                                    },
                                    content() {
                                        if (trigger.player == player) trigger.num = 0;
                                        else trigger.num++;
                                    },
                                },
                            },
                        },
                        sl_xun: {
                            mark: true,
                            marktext: '☴',
                            intro: {
                                name2: '巽',
                                content: '你使用牌无距离限制.你处于>巽<卦时,出牌阶段限一次,你可获得一名其他角色一张牌.',
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    return true;
                                },
                            },
                            group: 'sl_xun_sub',
                            subSkill: {
                                sub: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    selectTarget: 1,
                                    filterTarget(card, player, target) {
                                        return target != player && target.countCards('he') > 0;
                                    },
                                    content() {
                                        player.gainPlayerCard(target, true, 'he');
                                    },
                                },
                            },
                        },
                        sl_kan: {
                            mark: true,
                            marktext: '☵',
                            intro: {
                                name2: '坎',
                                content: '摸牌阶段,你多摸两张牌.你处于<坎>卦时,每轮游戏开始时,你可对任意名与你距离为1的角色造成一点伤害.',
                            },
                            forced: true,
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            content() {
                                trigger.num += 2;
                                if (player.hasSkill('sl_kun')) {
                                    player.useSkill('sl_kun_sub');
                                }
                            },
                            subSkill: {
                                sub: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget([1], function (card, player, target) {
                                                return player != target && get.distance(player, target) <= 1;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(_status.event.player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            result.targets.sortBySeat();
                                            event.targets = result.targets;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            var target = event.targets.shift();
                                            event.current = target;
                                            target.damage();
                                        }
                                    },
                                },
                            },
                        },
                        sl_li: {
                            mark: true,
                            marktext: '☲',
                            intro: {
                                name2: '离',
                                content: '每回合限三次,当你造成伤害后,目标下一个摸牌阶段额定摸牌数-1且你摸一张牌.你处于<离>卦时,摸牌阶段,你少摸一张牌.',
                            },
                            forced: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            content() {
                                trigger.player.addMark('sl_li_less', 1);
                                player.draw();
                                if (!trigger.player.hasSkill('sl_li_less')) {
                                    trigger.player.addSkill('sl_li_less');
                                }
                                if (player.hasSkill('sl_qian')) {
                                    player.useSkill('sl_qian_sub');
                                }
                            },
                            group: 'sl_li_sub',
                            subSkill: {
                                sub: {
                                    //QQQ
                                    forced: true,
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    content() {
                                        trigger.num--;
                                    },
                                },
                                less: {
                                    marktext: '☲',
                                    intro: {
                                        name: '离',
                                        name2: '离',
                                        content: '下回合摸牌数-#',
                                    },
                                    forced: true,
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    filter(event, player) {
                                        return player.countMark('sl_li_less') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num -= player.countMark('sl_li_less');
                                        ('step 1');
                                        player.removeMark('sl_li_less', player.countMark('sl_li_less'));
                                    },
                                },
                            },
                        },
                        sl_gen: {
                            mark: true,
                            marktext: '☶',
                            intro: {
                                name2: '艮',
                                content: '每轮游戏开始时,你回复一点体力并摸一张牌.你处于<艮>卦时,结束阶段,你可令一名其他角色选择摸两张牌或回复一点体力.',
                            },
                            forced: true,
                            trigger: {
                                global: 'roundStart',
                            },
                            content() {
                                if (player.hasSkill('sl_kun')) {
                                    player.recover();
                                    player.draw();
                                    player.useSkill('sl_kun_sub');
                                } else {
                                    player.recover();
                                    player.draw();
                                }
                            },
                            subSkill: {
                                sub: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current != player && current.isDamaged();
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget('艮卦:令一名其他角色选择回复一点体力或摸两张牌', function (card, player, target) {
                                            return target != player;
                                        }).ai = function (target) {
                                            return get.recoverEffect(target, player, player);
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            result.targets[0].chooseDrawRecover(2, true, function (event, player) {
                                                if (player.hp == 1 && player.isDamaged()) return 'recover_hp';
                                                return 'draw_card';
                                            });
                                        }
                                    },
                                    ai: {
                                        threaten: 1.5,
                                        expose: 0.2,
                                    },
                                },
                            },
                        },
                        sl_dui: {
                            mark: true,
                            marktext: '☱',
                            intro: {
                                name2: '兑',
                                content: '准备阶段,你可以令你至其距离为1的角色各摸一张牌或各弃一张牌.你处于<兑>卦时,当你受到伤害后,伤害来源弃置一张牌,你随机使用牌堆中的一张装备牌.',
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            logTarget(event, player) {
                                return game
                                    .filterPlayer(function (current) {
                                        return current != player && get.distance(player, current) <= 1;
                                    })
                                    .sortBySeat();
                            },
                            filter: (event, player) => game.players.some((q) => q != player && get.distance(player, q) <= 1), //QQQ
                            check(event, player) {
                                if (player.isHealthy()) return false;
                                var list = game.filterPlayer(function (current) {
                                    return current != player && get.distance(player, current) <= 1;
                                });
                                var draw = 0;
                                var discard = 0;
                                var num = 2 / player.getDamagedHp();
                                while (list.length) {
                                    var target = list.shift();
                                    var att = get.attitude(player, target);
                                    if (att > 0) {
                                        draw++;
                                        if (target.countDiscardableCards(player, 'he') > 0) discard--;
                                    }
                                    if (att == 0) {
                                        draw--;
                                        if (target.countDiscardableCards(player, 'he') > 0) discard--;
                                    }
                                    if (att < 0) {
                                        draw--;
                                        if (target.countDiscardableCards(player, 'he') > 0) discard++;
                                    }
                                }
                                return draw >= num || discard >= num;
                            },
                            content() {
                                'step 0';
                                //player.loseMaxHp();
                                'step 1';
                                var targets = game
                                    .filterPlayer(function (current) {
                                        return current != player && get.distance(player, current) <= 1;
                                    })
                                    .sortBySeat();
                                if (!targets.length) event.finish();
                                else {
                                    event.targets = targets;
                                    player
                                        .chooseControl()
                                        .set('choiceList', [`弃置${get.translation(targets)}的各一张牌`, `令${get.translation(targets)},${get.translation(player)}各摸一张牌`])
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            var list = _status.event.parent.targets.slice(0);
                                            var draw = 0;
                                            var discard = 0;
                                            while (list.length) {
                                                var target = list.shift();
                                                var att = get.attitude(player, target);
                                                if (att > 0) {
                                                    draw++;
                                                    if (target.countDiscardableCards(player, 'he') > 0) discard--;
                                                }
                                                if (att < 0) {
                                                    draw--;
                                                    if (target.countDiscardableCards(player, 'he') > 0) discard++;
                                                }
                                            }
                                            if (draw > discard) return 1;
                                            return 0;
                                        });
                                }
                                ('step 2');
                                event.index = result.index;
                                if (result.index == 1) {
                                    game.asyncDraw(targets);
                                    game.asyncDraw(player);
                                } else event.goto(4);
                                ('step 3');
                                event.finish();
                                ('step 4');
                                var target = targets.shift();
                                if (target.countDiscardableCards(player, 'he') > 0) player.discardPlayerCard(target, 'he', true);
                                if (targets.length) event.redo();
                            },
                            group: 'sl_dui_sub',
                            subSkill: {
                                sub: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.source && event.source.isIn() && event.source != player;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.source) < 0;
                                    },
                                    logTarget: 'source',
                                    prompt: '令伤害来源弃置一张牌,使用一张你未装备的装备牌',
                                    content() {
                                        'step 0';
                                        trigger.source.chooseToDiscard('he', 1, true);
                                        ('step 1');
                                        for (var i = 1; i < 7; i++) {
                                            if (player.isEmpty(i)) {
                                                var sub = 'equip' + i,
                                                    card = get.cardPile(function (card) {
                                                        return get.subtype(card, false) == sub && !get.cardtag(card, 'gifts');
                                                    });
                                                if (card) {
                                                    player.$gain2(card);
                                                    player.equip(card);
                                                    break;
                                                }
                                            }
                                        }
                                    },
                                    ai: {
                                        maixie_defend: true,
                                    },
                                },
                            },
                        },
                        sl_kunzhen: {},
                        sl_kunkan: {},
                        sl_kungen: {},
                        sl_zhenkun: {},
                        sl_kankun: {},
                        sl_genkun: {},
                        sl_qianxun: {},
                        sl_qianli: {},
                        sl_qiandui: {},
                        sl_liqian: {},
                        sl_duiqian: {},
                        sl_zhenzhen: {},
                        sl_zhenkan: {},
                        sl_zhengen: {},
                        sl_kanzhen: {},
                        sl_kankan: {},
                        sl_kangen: {},
                        sl_genzhen: {},
                        sl_genkan: {},
                        sl_gengen: {},
                        sl_xunxun: {},
                        sl_xunli: {},
                        sl_xundui: {},
                        sl_lixun: {},
                        sl_lili: {},
                        sl_lidui: {},
                        sl_duixun: {},
                        sl_duili: {},
                        sl_duidui: {},
                        ls_shengcai: {
                            audio: 'zishu',
                            trigger: {
                                player: ['useCardAfter'],
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                return (get.type(event.card) == 'trick' || get.type2(event.card) == 'basic') && event.cards.filterInD().length;
                            },
                            content() {
                                player.draw();
                                var cards = trigger.cards.filterInD();
                                player.addToExpansion(cards, 'gain2').gaintag.add('ls_shengcai');
                            },
                            group: 'ls_shengcai_1',
                            subSkill: {
                                1: {
                                    audio: 'zishu',
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.getExpansions('ls_shengcai').length;
                                    },
                                    content() {
                                        var cards = player.getExpansions('ls_shengcai');
                                        var num = cards.length;
                                        var list = cards.slice(0);
                                        while (list.length) {
                                            ui.cardPile.insertBefore(list.pop(), ui.cardPile.firstChild);
                                        }
                                        if (player.storage.ls_shengcai) {
                                            var card2 = player.storage.ls_shengcai;
                                            player.gain(card2, 'gain2');
                                        }
                                        player.storage.ls_shengcai = cards;
                                    },
                                },
                            },
                        },
                        ls_jiquan: {
                            audio: 'heli',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.ls_jiquan;
                            },
                            usable: 1,
                            content() {
                                player.loseHp();
                                var cards = player.storage.ls_jiquan;
                                player.gain(cards, 'gain2');
                            },
                            group: 'ls_jiquan_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        player.storage.ls_jiquan = player.getCards('h');
                                    },
                                },
                            },
                        },
                        ls_huairou: {
                            audio: 'drlt_huairou',
                            forced: true,
                            trigger: {
                                player: ['phaseZhunbei', 'damage'],
                            },
                            filter(event, player) {
                                return player.countCards('h') < player.maxHp;
                            },
                            content() {
                                var num = player.maxHp - player.countCards('h');
                                player.draw(num);
                            },
                            group: ['ls_huairou_1', 'ls_huairou_2'],
                            subSkill: {
                                1: {
                                    check(event, player) {
                                        if (get.attitude(player, event.player) < -2) {
                                            var cards = player.getCards('h');
                                            if (cards.length > player.hp) return true;
                                            if (Array.isArray(cards))
                                                for (var i of cards) {
                                                    var useful = get.useful(i);
                                                    if (useful < 5) return true;
                                                    if (i.number > 9 && useful < 7) return true;
                                                }
                                        }
                                        return false;
                                    },
                                    audio: 'drlt_huairou',
                                    trigger: {
                                        global: 'phaseUseEnd',
                                    },
                                    filter(event, player) {
                                        if (player == event.player || !player.countCards('h')) return false;
                                        return player.canCompare(event.player);
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToCompare(trigger.player);
                                        ('step 1');
                                        if (result.bool) {
                                            player.useCard({ name: 'juedou' }, trigger.player, false);
                                        }
                                    },
                                },
                                2: {
                                    audio: 'drlt_huairou',
                                    trigger: {
                                        source: 'damage',
                                    },
                                    filter(event, player) {
                                        return player.hp < player.maxHp;
                                    },
                                    forced: true,
                                    content() {
                                        player.recover();
                                    },
                                },
                            },
                        },
                        ls_poshi: {
                            audio: 'drlt_poshi',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            juexingji: true,
                            derivation: ['ls_huairou'],
                            init(player) {
                                player.storage.ls_poshi = false;
                            },
                            filter(event, player) {
                                return !player.storage.drlt_poshi && (player.countDisabled() == 5 || player.hp == 1);
                            },
                            content() {
                                'step 0';
                                player.storage.ls_poshi = true;
                                player.awakenSkill('ls_poshi');
                                player.loseMaxHp();
                                ('step 1');
                                player.removeSkill('ls_juesi');
                                player.addSkill('ls_huairou');
                            },
                        },
                        ls_juesi: {
                            audio: 'drlt_jueyan',
                            enable: 'phaseUse',
                            usable: 1,
                            init(player) {
                                player.storage.ls_juesi1 = true;
                                player.storage.ls_juesi2 = true;
                                player.storage.ls_juesi3 = true;
                                player.storage.ls_juesi4 = true;
                            },
                            derivation: ['xianwei'],
                            content() {
                                'step 0';
                                var list = [];
                                if (player.storage.ls_juesi1 == true) list.push('判定阶段');
                                if (player.storage.ls_juesi2 == true) list.push('摸牌阶段');
                                if (player.storage.ls_juesi3 == true) list.push('出牌阶段');
                                if (player.storage.ls_juesi4 == true) list.push('弃牌阶段');
                                event.list = list;
                                player
                                    .chooseControl('cancel2')
                                    .set('choiceList', list)
                                    .set('prompt', get.prompt('ls_juesi'))
                                    .set('ai', function (player) {
                                        if (event.list.length == 4) return 3;
                                        else return 0;
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    var num = result.index;
                                    if (event.list[num] == '判定阶段') {
                                        player.disableJudge();
                                        player.storage.ls_juesi1 = false;
                                    }
                                    if (event.list[num] == '摸牌阶段') {
                                        player.draw(10);
                                        player.storage.ls_juesi2 = false;
                                    }
                                    if (event.list[num] == '出牌阶段') {
                                        player.addTempSkill('ls_juesi_2');
                                        player.storage.ls_juesi3 = false;
                                    }
                                    if (event.list[num] == '弃牌阶段') {
                                        player.addSkill('xianwei');
                                        player.storage.ls_juesi4 = false;
                                    }
                                    if (!player.hasSkill('ls_juesi1')) player.addSkill('ls_juesi1');
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                2: {
                                    mod: {
                                        targetInRange(card, player) {
                                            return true;
                                        },
                                        cardUsable(card, player) {
                                            return Infinity;
                                        },
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return current != player;
                                            })
                                        );
                                    },
                                },
                            },
                        },
                        ls_juesi1: {
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var cum = '永远跳过的回合';
                                    if (player.storage.ls_juesi1 == false) cum += ',判定阶段';
                                    if (player.storage.ls_juesi2 == false) cum += ',摸牌阶段';
                                    if (player.storage.ls_juesi3 == false) cum += ',出牌阶段';
                                    if (player.storage.ls_juesi4 == false) cum += ',弃牌阶段';
                                    return cum;
                                },
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            charlotte: true,
                            content() {
                                if (player.storage.ls_juesi1 == false) player.skip('phaseJudge');
                                if (player.storage.ls_juesi2 == false) player.skip('phaseDraw');
                                if (player.storage.ls_juesi3 == false) player.skip('phaseUse');
                                if (player.storage.ls_juesi4 == false) player.skip('phaseDiscard');
                            },
                        },
                        ls_jianying: {
                            audio: 'jianying',
                            group: ['ls_jianying_1', 'ls_jianying_2', 'ls_jianying_3', 'ls_jianying_4', 'ls_jianying_5', 'ls_jianying_6'],
                            subSkill: {
                                1: {
                                    audio: 'jianying',
                                    usable: 1,
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.addTempSkill('huituo');
                                    },
                                },
                                2: {
                                    audio: 'jianying',
                                    usable: 1,
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.addTempSkill('retieji');
                                    },
                                },
                                3: {
                                    audio: 'jianying',
                                    usable: 1,
                                    forced: true,
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return get.type2(event.card) == 'trick';
                                    },
                                    content() {
                                        player.addTempSkill('ls_jianying_t');
                                    },
                                },
                                4: {
                                    audio: 'jianying',
                                    usable: 1,
                                    forced: true,
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'shan';
                                    },
                                    content() {
                                        player.addTempSkill('xinleiji');
                                    },
                                },
                                5: {
                                    audio: 'jianying',
                                    usable: 1,
                                    forced: true,
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.addTempSkill('wangong');
                                    },
                                },
                                6: {
                                    audio: 'jianying',
                                    usable: 1,
                                    forced: true,
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return get.type(event.card) == 'equip';
                                    },
                                    content() {
                                        player.addTempSkill('ls_jianying_e');
                                    },
                                },
                                t: {
                                    audio: 'jianying',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return get.type2(event.card) == 'trick';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                e: {
                                    audio: 'jianying',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return get.type(event.card) == 'equip';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        ls_guhuo: {
                            check(card) {
                                return 8 - get.value(card);
                            },
                            audio: 'shibei',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            filterCard: true,
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                'step 0';
                                player.addTempSkill('ls_guhuo1', { player: 'useCardAfter' });
                                if (
                                    game.hasPlayer(function (current) {
                                        return player.canUse(cards[0], current);
                                    }) ||
                                    cards[0].name == 'shan'
                                ) {
                                    player.useCard(cards[0], target, false);
                                }
                                ('step 1');
                                var card = get.cardPile2(function (i) {
                                    return get.type(i) == get.type(cards[0]);
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                        },
                        ls_guhuo1: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player;
                                    })
                                );
                            },
                        },
                        ls_caiqing: {
                            audio: 'ext:脑洞大开/audio:1',
                            forced: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            content() {
                                player.draw();
                            },
                        },
                        ls_ziru1: {
                            audio: 'ext:脑洞大开/audio:1',
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var num = player.getAttackRange();
                                    for (var i = 1; i <= player.storage.ls_ziru1; i++) {
                                        num = num * 2;
                                    }
                                    var num1 = player.storage.ls_ziru1;
                                    var cum = `本回合杀的攻击距离为${num},出杀次数加` + num1;
                                    return cum;
                                },
                            },
                            init(player) {
                                player.storage.ls_ziru1 = 1;
                            },
                            onremove(player) {
                                player.storage.ls_ziru1 = 0;
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha') {
                                        var num = player.getAttackRange();
                                        for (var i = 1; i <= player.storage.ls_ziru1; i++) {
                                            num = num * 2;
                                        }
                                        if (get.distance(player, target) <= num) return true;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.storage.ls_ziru1;
                                },
                            },
                        },
                        ls_ziru: {
                            audio: 'ext:脑洞大开/audio:1',
                            enable: 'phaseUse',
                            prompt: '失去一点体力并本回合杀的攻击距离翻倍,出杀次数加一',
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                if (!player.storage.ls_ziru1) player.storage.ls_ziru1 = 0;
                                if (player.storage.ls_ziru1 == 0) player.addTempSkill('ls_ziru1');
                                else player.storage.ls_ziru1 += 1;
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.hp < 2) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        ls_jucai: {
                            audio: 'ext:脑洞大开/audio:1',
                            marktext: '财',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            forced: true,
                            trigger: {
                                player: ['damage', 'phaseUseBegin'],
                            },
                            filter(event, player) {
                                if (event.trigger == 'damage') return event.hujia;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('摸牌', '抢牌').ai = function (event, player) {
                                    return 1;
                                };
                                ('step 1');
                                if (result.control == '抢牌') event.goto(2);
                                else event.goto(6);
                                ('step 2');
                                player
                                    .chooseTarget(get.prompt2('ls_jucai'), function (card, player, target) {
                                        return target.countCards('he') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        return -att;
                                    });
                                ('step 3');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.gainPlayerCard(target, true);
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (player.countCards('he')) {
                                    player.chooseCard('将一张手牌置于武将牌上作为<财>', true);
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.cards?.length) {
                                    player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('ls_jucai');
                                }
                                event.finish();
                                ('step 6');
                                player.draw();
                                var cards = player.getExpansions('ls_jucai');
                                if (!cards.length) event.finish();
                                player.chooseButton(true, ['选择获得一张牌', cards]).set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                ('step 7');
                                if (result.bool) {
                                    var card = result.links;
                                    player.gain(card, 'gain2', 'draw');
                                }
                            },
                        },
                        ls_fuyou: {
                            audio: 'ext:脑洞大开/audio:1',
                            derivation: ['ls_jucai'],
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            limited: true,
                            content() {
                                'step 0';
                                var num = player.getAttackRange();
                                for (var i = 1; i <= player.storage.ls_ziru1; i++) {
                                    num = num * 2;
                                }
                                player.changeHujia(num);
                                player.awakenSkill('ls_fuyou');
                                player.removeSkill('ls_ziru');
                                player.removeSkill('ls_caiqing');
                                player.addSkill('ls_jucai');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        ls_jinqu: {
                            derivation: ['pozhu'],
                            audio: 'jinqu',
                            init(player) {
                                player.storage.ls_jinqu = [];
                            },
                            filter(event, player) {
                                return !player.storage.ls_jinqu.length;
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                var card = get.cards(5);
                                player.gain(card, target, 'bySelf', 'give').gaintag.add('ls_jinqu');
                                player.storage.ls_jinqu = card;
                                player.addSkill('ls_jinqu_1');
                            },
                            subSkill: {
                                1: {
                                    audio: 'jinqu',
                                    mod: {
                                        cardEnabled2(card, player) {
                                            if (get.itemtype(card) == 'card' && player.storage.ls_jinqu.includes(card) && card != player.storage.ls_jinqu[0]) return false;
                                        },
                                        cardDiscardable(card, player) {
                                            if (player.storage.ls_jinqu.includes(card) && card != player.storage.ls_jinqu[0]) return false;
                                        },
                                    },
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        for (var i = 0; i < event.cards2.length; i++) {
                                            if (player.storage.ls_jinqu.includes(event.cards2[i])) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        for (var i = 0; i < trigger.cards2.length; i++) {
                                            if (player.storage.ls_jinqu.includes(trigger.cards2[i])) {
                                                player.storage.ls_jinqu.remove(trigger.cards2[i]);
                                            }
                                        }
                                        ('step 1');
                                        if (!player.storage.ls_jinqu.length) {
                                            player.removeGaintag('ls_jinqu');
                                            if (_status.currentPhase == player) player.addTempSkill('pozhu');
                                            else {
                                                player.gainMaxHp();
                                                player.recover();
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        ls_nanshu: {
                            audio: 'benghuai',
                            trigger: {
                                player: 'die',
                            },
                            forced: true,
                            forceDie: true,
                            content() {
                                'step 0';
                                event.targets = game
                                    .filterPlayer(function (current) {
                                        return true;
                                    })
                                    .sortBySeat();
                                event.targets.sort(lib.sort.seat);
                                ('step 1');
                                if (event.targets.length) {
                                    var target = targets.shift();
                                    event.current = target;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.current && event.current.countCards('he')) {
                                    event.current
                                        .chooseToDiscard('he', function (card) {
                                            return card.name == 'sha';
                                        })
                                        .set('prompt', '请弃置一张杀');
                                } else {
                                    event.goto(1);
                                }
                                ('step 3');
                                if (result.bool == false) {
                                    event.current.loseHp();
                                }
                                event.current.useCard({ name: 'sha' }, player);
                                event.goto(1);
                            },
                        },
                        ls_qiangzheng: {
                            audio: 'hengzheng',
                            forced: true,
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player, target, skill) {
                                return event.player != player && event.player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var target = trigger.player;
                                target.chooseToUse(`是否对${get.translation(player)}使用一张杀？`, { name: 'sha' }, player, -1).set('addCount', false);
                                ('step 1');
                                if (result.bool == false && trigger.player.countCards('he') > 0) {
                                    player.gainPlayerCard(trigger.player, 'he', true).set('visible', true);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        ls_tixie: {
                            audio: 'baonue2',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            init(player) {
                                player.storage.ls_tixie = [];
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return !player.storage.ls_tixie.includes(current);
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('请选择【提携】的目标', '选择一名其他角色.该角色回复一点体力,增加一点体力上限,当你成为非装备和延时锦囊牌的唯一目标后,其也成为此牌的无标', function (card, player, target) {
                                        return !player.storage.ls_tixie.includes(target) && target != player;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (player.hp < 3) return -att;
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.storage.ls_tixie2 = player;
                                    player.storage.ls_tixie.push(target);
                                    target.gainMaxHp();
                                    target.recover();
                                    target.addTempSkill('ls_tixie2', 'roundStart');
                                }
                            },
                        },
                        ls_tixie2: {
                            group: ['ls_tixie2_1'],
                            charlotte: true,
                            intro: {
                                content: '当$成为非装备和延时锦囊卡牌的唯一目标后,你也会成为目标(董贼提携,非我所愿啊)',
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'useCardToTargeted',
                                    },
                                    filter(event, player) {
                                        return event.target == player.storage.ls_tixie2 && event.targets.length == 1 && get.type(event.card) != 'equip' && get.type(event.card) != 'delay';
                                    },
                                    forced: true,
                                    content() {
                                        var evt = trigger.parent;
                                        evt.targets.push(player);
                                    },
                                },
                                clear: {
                                    audio: 'ls_tixie',
                                    trigger: {
                                        global: 'die',
                                        player: ['hideCharacterEnd', 'removeCharacterEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.name == 'die') return event.player == player.storage.ls_tixie2;
                                        if (event.name == 'removeCharacter') return event.toRemove == 'luyusheng' || event.toRemove == 'gz_luyusheng';
                                        return event.toHide == 'luyusheng' || event.toHide == 'gz_luyusheng';
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('ls_tixie2');
                                        if (trigger.name != 'die' || get.mode() != 'guozhan') event.finish();
                                        ('step 1');
                                        if (player.name1 == 'gz_luyusheng' || player.name1 == 'luyusheng') player.hideCharacter(0);
                                        if (player.name2 == 'gz_luyusheng' || player.name2 == 'luyusheng') player.hideCharacter(1);
                                    },
                                },
                            },
                        },
                        ls_danshou: {
                            audio: 'danshou',
                            trigger: {
                                player: 'damageBefore',
                            },
                            init(player) {
                                player.storage.ls_danshou = 0;
                            },
                            filter(event, player) {
                                if (event.source != undefined) {
                                    var num = 0;
                                    if (3 > player.countMark('liedan')) num = 3 - player.countMark('liedan');
                                    return player.countCards('he') >= num && event.source != player;
                                }
                                return false;
                            },
                            check(event, player) {
                                if (player.countMark('ls_liedan_mark') > 1) return true;
                                return get.attitude(player, event.source) <= 0;
                            },
                            content() {
                                'step 0';
                                player.storage.ls_danshou = 1;
                                var num = 0;
                                if (3 > player.countMark('liedan')) num = 3 - player.countMark('liedan');
                                if (num > 0)
                                    player
                                        .chooseToDiscard(get.prompt('ls_danshou', trigger.source), num, true, `弃置${get.cnNumber(num)}张牌并对${get.translation(trigger.source)}造成1点伤害`, 'he')
                                        .set('ai', function (card) {
                                            if (get.damageEffect(_status.event.getTrigger().player, _status.event.source, _status.event.source) > 0) return Math.max(5.5, 8 - _status.event.selectTarget) - get.value(card);
                                            return -1;
                                        });
                                ('step 1');
                                trigger.source.damage('nocard');
                            },
                            group: ['ls_danshou_1', 'ls_danshou_3'],
                            subSkill: {
                                1: {
                                    audio: 'danshou',
                                    forced: true,
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    content() {
                                        if (player.storage.ls_danshou == 1) player.storage.ls_danshou = 0;
                                        else player.draw();
                                    },
                                },
                                2: {},
                                3: {
                                    audio: 'danshou',
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    filter(event, player) {
                                        return _status.currentPhase.isPhaseUsing();
                                    },
                                    content() {
                                        player.draw();
                                        var cards = Array.from(ui.ordering.childNodes);
                                        while (cards.length) {
                                            cards.shift().discard();
                                        }
                                    }, //QQQ
                                    ai: {
                                        jueqing: true,
                                    },
                                },
                            },
                        },
                        ls_liedan: {
                            forced: true,
                            trigger: {
                                player: 'damage',
                            },
                            filter(event, player) {
                                return _status.currentPhase.isPhaseUsing();
                            },
                            content() {
                                player.addMark('liedan', 1);
                            },
                            group: 'ls_liedan_1',
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    filter(event, player) {
                                        return player.countMark('liedan') > 3;
                                    },
                                    content() {
                                        player.die();
                                    },
                                },
                            },
                        },
                        ls2_jieying: {
                            audio: 'ext:脑洞大开/audio:2',
                            global: ['ls2_jieying_mark', 'ls2_jieying2'],
                            group: ['ls2_jieying_1', 'ls2_jieying_2', 'ls2_jieying_3'],
                            subSkill: {
                                1: {
                                    audio: 'ls2_jieying',
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !game.hasPlayer(function (current) {
                                            return current.hasMark('ls2_jieying_mark');
                                        });
                                    },
                                    content() {
                                        player.addMark('ls2_jieying_mark', 3);
                                    },
                                },
                                2: {
                                    audio: 'ls2_jieying',
                                    trigger: {
                                        source: 'damageEnd',
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasMark('ls2_jieying_mark') && event.player.countCards('h') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.source.gainPlayerCard(trigger.player, 'he', true);
                                        ('step 1');
                                        if (trigger.source == player) trigger.player.addMark('ls2_jieying_mark', 1);
                                        else trigger.source.addMark('ls2_jieying_mark', 1);
                                        player.removeMark('ls2_jieying_mark', 1);
                                    },
                                },
                                3: {
                                    audio: 'ls2_jieying',
                                    trigger: {
                                        global: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player != event.player && event.player.hasMark('ls2_jieying_mark') && event.player.isAlive();
                                    },
                                    logTarget: 'player',
                                    content() {
                                        trigger.player = player;
                                    },
                                },
                            },
                        },
                        ls2_jieying2: {
                            audio: 'ext:脑洞大开/audio:2',
                            filter(event, player) {
                                return (
                                    (get.type(event.card) == 'trick' || get.type(event.card) == 'basic') &&
                                    !event.numFixed &&
                                    player.hasMark('ls2_jieying_mark') &&
                                    !player.hasSkill('ls2_jieying') &&
                                    game.hasPlayer(function (current) {
                                        return current.hasSkill('ls2_jieying');
                                    })
                                );
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            content() {
                                var num = player.countMark('ls2_jieying_mark');
                                player.removeMark('ls2_jieying_mark', num);
                                var name2 = trigger.card.name;
                                var targets = game
                                    .filterPlayer(function (current) {
                                        return true;
                                    })
                                    .sortBySeat();
                                var player2 = player;
                                for (var j of targets) {
                                    if (j.hasSkill('ls2_jieying')) var player2 = j;
                                }
                                player2.useCard({ name: name2 }, trigger.target, false);
                            },
                        },
                        ls2_jieying_mark: {
                            marktext: '子',
                            intro: {
                                name: '子',
                                content: 'mark',
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (player.hasMark('ls2_jieying_mark') && card.name == 'sha') return num + player.countMark('ls2_jieying_mark');
                                },
                                maxHandcard(player, num) {
                                    if (player.hasMark('ls2_jieying_mark')) return num + player.countMark('ls2_jieying_mark');
                                },
                            },
                            audio: 'ls2_jieying',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    !event.numFixed &&
                                    player.hasMark('ls2_jieying_mark') &&
                                    game.hasPlayer(function (current) {
                                        return current.hasSkill('ls2_jieying');
                                    })
                                );
                            },
                            content() {
                                trigger.num += player.countMark('ls2_jieying_mark');
                            },
                            ai: {
                                nokeep: true,
                                skillTagFilter(player) {
                                    if (!player.hasMark('ls2_jieying_mark')) return false;
                                },
                            },
                        },
                        ls_jueyong: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.cards && event.cards.length == 1 && get.type(event.card) != 'equip' && event.getParent(2).name != 'ls_jueyong_timeout' && get.position(event.cards[0], true) == 'o' && event.card.name == event.cards[0].name;
                            },
                            content() {
                                var card = trigger.cards[0];
                                if (trigger.player != player) {
                                    trigger.targets.remove(player);
                                    trigger.parent.triggeredTargets2.remove(player);
                                }
                                trigger.untrigger();
                                player.addToExpansion(card, 'gain2').gaintag.add('ls_jueyong');
                                if (!player.storage.ls_jueyong) player.storage.ls_jueyong = [[], []];
                                player.storage.ls_jueyong[0].push(card);
                                player.storage.ls_jueyong[1].push(trigger.player);
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                                delete player.storage[skill];
                            },
                            ai: {
                                reverseEquip: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip' && !get.tag(card, 'gifts') && target.storage.ls_jueyong && target.storage.ls_jueyong[1].length) {
                                            var result1 = get.equipResult(player, target, card.name),
                                                subtype = get.subtype(card);
                                            for (var i of target.storage.ls_jueyong[0]) {
                                                if (get.subtype(i, false) == subtype && get.equipResult(target, target, i.name) >= result1) return 'zerotarget';
                                            }
                                        }
                                    },
                                },
                            },
                            group: ['ls_jueyong_timeout'],
                            subSkill: {
                                timeout: {
                                    audio: 'ls_jueyong',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.ls_jueyong && player.storage.ls_jueyong[0].length; //=Math.max(1,player.getDamagedHp());
                                    },
                                    content() {
                                        var list = player.storage.ls_jueyong,
                                            card = list[0].shift(),
                                            source = list[1].shift();
                                        if (player.getExpansions('ls_jueyong').includes(card)) {
                                            if (source && source.isIn() && source.canUse(card, player, false)) source.useCard(card, player, false);
                                            else player.loseToDiscardpile(card);
                                        }
                                        if (list[0].length) event.redo();
                                    },
                                },
                            },
                        },
                        ls_paiyi2: {
                            nopop: true,
                            enable: 'phaseUse',
                            audio: 'ext:脑洞大开/audio:2',
                            filter(event, player) {
                                return player.getExpansions('ls_jueyong').length;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('绝勇', player.getExpansions('ls_jueyong'), 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        nopop: true,
                                        audio: 'ls_paiyi2',
                                        filterTarget(card, player, target) {
                                            return target != player && !target.hasSkill('zlshoufu2');
                                        },
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        card: links[0],
                                        delay: false,
                                        content: lib.skill.ls_paiyi2.contentx,
                                        ai: {
                                            combo: 'quanji',
                                            order: 10,
                                            result: 3,
                                        },
                                    };
                                },
                                prompt() {
                                    return '请选择〖绝勇〗的目标';
                                },
                            },
                            contentx() {
                                'step 0';
                                var cards = lib.skill.ls_paiyi2_backup.card;
                                target.addToExpansion(cards, player, 'give').gaintag.add('zlshoufu2');
                                player.line(target, 'green');
                                target.addSkill('zlshoufu2');
                                ('step 1');
                            },
                            subSkill: {
                                backup: {},
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        ls_huiji: {
                            audio: 'ext:脑洞大开/audio:1',
                            zhuSkill: true,
                            forced: true,
                            juexingji: true,
                            mark: true,
                            trigger: {
                                global: 'dieAfter',
                            },
                            filter(event, player) {
                                if (!player.hasZhuSkill('ls_huiji')) return false;
                                return event.player.hasSkill('xianfu2') && event.player.group == 'wei';
                            },
                            content() {
                                player.removeSkill('ls_daishou');
                                player.awakenSkill(event.name);
                            },
                        },
                        ls_daishou: {
                            derivation: ['ls_daishou2'],
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                var cards = player.getCards('h', function (i) {
                                    return i.name == 'shan' || i.name == 'wuxie';
                                });
                                var num = cards.length;
                                player.discard(cards);
                                player.draw(num);
                            },
                        },
                        ls_poxiang: {
                            audio: 'ext:脑洞大开/audio:2',
                            forced: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.player != player && !event.player.hasSkill('xianfu');
                            },
                            content() {
                                'step 0';
                                if (trigger.player.storage.ls_poxiang == true) {
                                    trigger.num = 2 * trigger.num;
                                    event.finish();
                                }
                                ('step 1');
                                trigger.player.chooseControl('宁死', '投降').ai = function (event, player) {
                                    var num = trigger.num;
                                    var num1 = 2 * num;
                                    if (num > 1 || num1 >= player.hp) return 1;
                                    else return 0;
                                };
                                ('step 2');
                                if (result.control == '投降') {
                                    trigger.cancel();
                                    trigger.player.addSkill('xianfu');
                                    if (!trigger.player.storage.xianfu2) trigger.player.storage.xianfu2 = [];
                                    trigger.player.storage.ls_poxiang = true;
                                    trigger.player.storage.xianfu2.push(player);
                                    trigger.player.addSkill('xianfu2');
                                } else trigger.num = 2 * trigger.num;
                            },
                            group: ['ls_poxiang_1', 'ls_poxiang_3'],
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return (
                                            event.card &&
                                            (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                            game.hasPlayer(function (current) {
                                                return current != player && player.hp > current.hp;
                                            })
                                        );
                                    },
                                    content() {
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return current != player && player.hp > current.hp;
                                            })
                                        );
                                    },
                                    ai: {
                                        directHit_ai: true,
                                    },
                                },
                                2: {
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.player.hasSkill('xianfu') && !event.player.hasSkill('xianfu2');
                                    },
                                    content() {
                                        trigger.num = 2 * trigger.num;
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.numFixed;
                                    },
                                    content() {
                                        trigger.num += 2;
                                    },
                                },
                            },
                        },
                        ls_daishou2: {
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                var next = game.createEvent('drlt_xiongluan', false);
                                next.player = player;
                                next.target = player.storage.xianfu2[0];
                                next.setContent(lib.skill.drlt_xiongluan.content);
                                player.removeSkill('xianfu2');
                                player.removeSkill('xianfu');
                                player.removeSkill('ls_daishou2');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        ls_xunfang: {
                            forced: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                player.chooseUseTarget({ name: 'shunshou' }, true, 'nodistance');
                            },
                            group: 'ls_xunfang_1',
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'shunshou';
                                    },
                                    content() {
                                        if (player.hasSkill('ls_daishou') && trigger.target.hasSkill('xianfu')) {
                                            if (trigger.target.storage.ls_poxiang == true) trigger.target.addSkill('ls_daishou2');
                                        }
                                        if (trigger.target.sex == 'male') {
                                            var card = get.discardPile(function (i) {
                                                return i.name == 'sha';
                                            });
                                            if (card) trigger.target.gain(card, 'gain2');
                                        }
                                        if (trigger.target.sex == 'female') {
                                            var card = get.discardPile(function (i) {
                                                return i.name == 'wuxie';
                                            });
                                            if (card) trigger.target.gain(card, 'gain2');
                                        }
                                    },
                                },
                            },
                        },
                        ls_luanji: {
                            audio: 'ext:脑洞大开/audio:2',
                            enable: 'phaseUse',
                            position: 'hs',
                            viewAs: {
                                name: 'wanjian',
                            },
                            filterCard(card, player) {
                                if (ui.selected.cards.length) {
                                    return card.suit == ui.selected.cards[0].suit;
                                }
                                var cards = player.getCards('hs');
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (card != i) {
                                            if (card.suit == i.suit) return true;
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
                            },
                            group: 'ls_luanji_2',
                            subSkill: {
                                2: {
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'wanjian' && event.targets.length;
                                    },
                                    line: false,
                                    content() {
                                        trigger.targets.push(player);
                                    },
                                },
                            },
                            ai: {
                                basic: {
                                    order: 8.5,
                                    useful: 1,
                                    value: 5,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                result: {
                                    target_use(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                    target(player, target) {
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        ls_lveming: {
                            audio: 'ext:脑洞大开/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.maxHp - player.hp > 0;
                            },
                            filterTarget(card, player, target) {
                                return player.canUse('wanjian', target);
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            line: 'thunder',
                            content() {
                                var num = player.maxHp - player.hp;
                                player.maxHp = player.hp;
                                player.update();
                                targets.sort(lib.sort.seat);
                                if (num > 1) player.draw(2);
                                if (num > 2) player.useCard({ name: 'wanjian' }, targets).animate = false;
                            },
                            group: ['ls_lveming_1'],
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && get.type(event.card) == 'trick';
                                    },
                                    content() {
                                        player.gainMaxHp(true);
                                        player.recover();
                                    },
                                    audio: 'ext:脑洞大开/audio:2',
                                },
                            },
                        },
                        ls_wangduo: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            zhuSkill: true,
                            limited: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            filter(event, player) {
                                if (!player.hasZhuSkill('ls_wangduo')) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                var num = game.countPlayer(function (current) {
                                    if (current.group == 'qun') return 1;
                                });
                                player.chooseTarget(get.prompt2('ls_xueyi'), [1, num]).set('ai', function (target) {
                                    if (get.attitude(player, target) > 0) return 1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets.slice(0).sortBySeat();
                                    event.list = event.targets.slice(0);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    target.addTempSkill('jupai');
                                    if (target.countCards('he')) {
                                        player.gainPlayerCard(target, 'he', true);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                event.goto(2);
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        ls_sanyao: {
                            audio: 'ext:脑洞大开/audio:4',
                            prompt2: '防止本次伤害,令其获得标记,拥有标记的角色结束阶段根据其有没有对你造成过伤害而获得效果',
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return !event.player.hasSkill('ls_zhi');
                            },
                            content() {
                                trigger.cancel();
                                trigger.player.storage.ls_zhi = player;
                                player.draw();
                                trigger.player.addSkill('ls_zhi');
                            },
                            group: 'ls_sanyao_1',
                            subSkill: {
                                1: {
                                    audio: 'ls_sanyao',
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.player.hasSkill('ls_zhi');
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.gainPlayerCard(trigger.player, 'he', true);
                                    },
                                },
                            },
                        },
                        ls_zhi: {
                            audio: 'ls_sanyao',
                            mark: true,
                            intro: {
                                content: '制',
                            },
                            forced: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.player == player.storage.ls_zhi;
                            },
                            content() {
                                player.storage.ls_zhi_1 = true;
                            },
                            group: 'ls_zhi_2',
                            subSkill: {
                                2: {
                                    audio: 'ls_sanyao',
                                    forced: true,
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('ls_zhi');
                                        target1 = player.storage.ls_zhi;
                                        target1.draw();
                                        ('step 1');
                                        if (player.storage.ls_zhi_1 == true) {
                                            player.storage.ls_zhi_1 = false;
                                            player.loseHp();
                                            event.finish();
                                        } else {
                                            if (target1.isAlive()) event.goto(2);
                                            else event.finish();
                                        }
                                        ('step 2');
                                        target1.chooseControl('心战', '制蛮').ai = function (event, player) {
                                            return 0;
                                        };
                                        ('step 3');
                                        if (result.control == '心战') {
                                            target1.useSkill('sl_xinzhan');
                                            event.finish();
                                        }
                                        ('step 4');
                                        target1.chooseToDiscard(1, 'he');
                                        ('step 5');
                                        if (!result.bool) {
                                            event.finish();
                                        }
                                        ('step 6');
                                        target1
                                            .chooseTarget(get.prompt('ls_zhi'), '对一名角色造成一点伤害', function (card, player, target) {
                                                return target != _status.currentPhase && target != player;
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.damageEffect(target, player, player);
                                            });
                                        ('step 7');
                                        if (result.bool && result.targets && result.targets.length) {
                                            player.line(result.targets[0], 'green');
                                            result.targets[0].damage(1);
                                        }
                                    },
                                },
                            },
                        },
                        sl_xinzhan: {
                            audio: 'ext:脑洞大开/audio:3',
                            prompt2: '依次:1.拿♥️️牌,2.拿♠️️牌.进行控顶控底操作',
                            trigger: {
                                player: ['phaseUseBegin', 'phaseJieshuBegin'],
                            },
                            content() {
                                'step 0';
                                var cards = get.cards(player.maxHp + 1);
                                event.cards = cards;
                                var next = player.chooseCardButton(cards, '选择获得的♥️️牌', [1, Infinity]).set('filterButton', function (button) {
                                    return button.link.suit == 'heart';
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.links);
                                    player.$draw(result.links);
                                }
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (!result.bool || !result.links.includes(i)) {
                                            ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                        }
                                    }
                                ('step 2');
                                var cards = get.cards(player.maxHp + 1);
                                event.cards = cards;
                                var next = player.chooseCardButton(cards, '选择获得的♠️️牌', [1, Infinity]).set('filterButton', function (button) {
                                    return button.link.suit == 'spade';
                                });
                                ('step 3');
                                if (result.bool) {
                                    player.gain(result.links);
                                    player.$draw(result.links);
                                }
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (!result.bool || !result.links.includes(i)) {
                                            ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                        }
                                    }
                                ('step 4');
                                player.chooseToGuanxing(5);
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        dz_nddk_xiuxue: {
                            enable: 'phaseUse',
                            filterCard: true,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            position: 'he',
                            content() {
                                if (!player.storage.dz_nddk_xiuxue) player.storage.dz_nddk_xiuxue = true;
                                else player.storage.dz_nddk_xiuxue = false;
                                player.markSkill('dz_nddk_xiuxue');
                            },
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var str = player.storage.dz_nddk_xiuxue ? '阳:观看牌堆顶的X张牌' : '阴:摸牌,看别人牌并弃置其中一张';
                                    return str;
                                },
                            },
                            group: 'dz_nddk_xiuxue_Draw',
                            subSkill: {
                                Draw: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.storage.dz_nddk_xiuxue) {
                                            player.chooseToGuanxing(player.maxHp);
                                            event.finish();
                                        } else {
                                            player.draw();
                                        }
                                        ('step 1');
                                        if (
                                            game.hasPlayer(function (c) {
                                                return c != player && c.countCards('h');
                                            })
                                        ) {
                                            player
                                                .chooseTarget('观看并弃置一名其他角色的一张手牌', true, function (card, player, target) {
                                                    return target != player && target.countCards('h');
                                                })
                                                .set('ai', function (target) {
                                                    return -get.attitude(_status.event.player, target);
                                                });
                                        } else event.finish();
                                        ('step 2');
                                        if (result.targets?.length) {
                                            player.line(result.targets[0]);
                                            player.discardPlayerCard('h', result.targets[0], true, 'visible');
                                        }
                                    },
                                },
                            },
                        },
                        ls_mumu: {
                            audio: 'mumu',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.countCards('e') > 0;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('ls_mumu'), function (card, player, target) {
                                        return target.countCards('e') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player,
                                            att = get.attitude(player, target),
                                            es = target.getCards('e'),
                                            val = 0;
                                        for (var i of es) {
                                            var eff = -(get.value(i, target) - 0.1) * att;
                                            if (eff > val) val = eff;
                                        }
                                        return eff;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.gainPlayerCard(target, 'e', true);
                                    player.recover();
                                    player.storage.ls_mumu = true;
                                }
                            },
                            group: 'ls_mumu_draw',
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        if (player.storage.ls_mumu == true) player.storage.ls_mumu = false;
                                        else player.drawTo(player.maxHp);
                                    },
                                },
                            },
                        },
                        ls_meibu: {
                            audio: 'meibu',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return !event.player.hasSkill('ls_zhixi') && event.player != player && event.player.isAlive() && event.player.inRange(player);
                            },
                            forced: true,
                            derivation: ['ls_zhixi'],
                            check(event, player) {
                                if (get.attitude(player, event.player) < 0) return true;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('受伤', '弃牌', 'cancel2').ai = function (event, player) {
                                    var att1 = get.attitude(player, trigger.player);
                                    if (att1 >= 0) return 2;
                                    else {
                                        var att = player.countCards('h') - player.hp;
                                        if (att >= 0) return 1;
                                        else return 0;
                                    }
                                };
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    if (result.control == '弃牌') event.goto(2);
                                    if (result.control == '受伤') event.goto(4);
                                } else event.finish();
                                ('step 2');
                                player.chooseToDiscard(get.prompt2('ls_meibu', trigger.player), 'h', true);
                                ('step 3');
                                if (result.bool) {
                                    var target = trigger.player;
                                    player.line(target, 'green');
                                    target.storage.ls_zhixi = player;
                                    target.addTempSkill('ls_zhixi', 'phaseAfter');
                                }
                                event.finish();
                                ('step 4');
                                var target = trigger.player;
                                player.damage(target);
                                target.storage.ls_zhixi = player;
                                target.addSkill('ls_zhixi');
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        ls_zhixi: {
                            forced: true,
                            trigger: {
                                player: ['loseBegin', 'gainAfter'],
                            },
                            content() {
                                'step 0';
                                if ((trigger.name = 'gainAfter')) var num = trigger.cards.length;
                                else var num = trigger.cards2.length;
                                player.addMark('ls_zhixi_mark', num);
                                ('step 1');
                                var target = player.storage.ls_zhixi;
                                if (target.isAlive()) var num1 = target.hp + player.hp;
                                else num1 = player.hp;
                                var num2 = player.countMark('ls_zhixi_mark');
                                if (num2 > num1) player.addTempSkill('ls_zhixi_xiying', 'phaseEnd');
                            },
                            group: ['ls_zhixi_remove', 'ls_zhixi_discard', 'ls_zhixi_shiqu'],
                            subSkill: {
                                xiying: {
                                    mark: true,
                                    intro: {
                                        content: '本回合内不能使用或打出牌',
                                    },
                                    mod: {
                                        cardEnabled2(card) {
                                            return false;
                                        },
                                    },
                                },
                                remove: {
                                    forced: true,
                                    trigger: {
                                        global: ['phaseEnd'],
                                    },
                                    content() {
                                        if (player.storage.ls_zhixi == _status.currentPhase) player.removeSkill('ls_zhixi');
                                        num = player.countMark('ls_zhixi_mark');
                                        player.removeMark('ls_zhixi_mark', num);
                                    },
                                },
                                discard: {
                                    forced: true,
                                    trigger: {
                                        global: ['phaseBegin'],
                                    },
                                    filter(event, player) {
                                        var target = player.storage.ls_zhixi;
                                        if (target.isAlive()) var num1 = target.hp + player.hp;
                                        else {
                                            var num1 = player.hp;
                                        }
                                        var mum = player.countCards('h');
                                        return mum > num1;
                                    },
                                    content() {
                                        var target = player.storage.ls_zhixi;
                                        if (target.isAlive()) var num1 = target.hp + player.hp;
                                        else {
                                            var num1 = player.hp;
                                        }
                                        var num2 = player.countCards('h');
                                        player.chooseToDiscard(num2 - num1, 'h', true);
                                    },
                                },
                                shiqu: {
                                    trigger: {
                                        source: 'dieAfter',
                                    },
                                    forced: true,
                                    content() {
                                        var info = lib.character[player.name];
                                        var skills = player.getSkills();
                                        var list = [];
                                        for (var i = 0; i < info[3].length; i++) {
                                            if (lib.skill[info[3][i]].fixed) continue;
                                            if (skills.includes(info[3][i])) {
                                                list.push(info[3][i]);
                                            }
                                        }
                                        if (list.length) {
                                            var skill = list.randomGet();
                                            player.popup(skill);
                                            player.disableSkill('chuanxin_disable', skill, true);
                                        }
                                    },
                                },
                                mark: {
                                    marktext: '止',
                                    intro: {
                                        name: '止息',
                                        content: 'mark',
                                    },
                                },
                            },
                        },
                        ls_miaobi: {
                            audio: 'ext:脑洞大开/audio:2',
                            charlotte: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                for (var i = 1; i < 14; i++) {
                                    if (!player.getStorage('ls_dinghan').includes(i)) return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                l_miaobi = 0;
                                player.storage.miaobi_begin = get.time();
                                ('step 1');
                                l_miaobi++;
                                var list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                                var list2 = [0, 1, 2, 3];
                                ls_jiajian = list2.randomGet();
                                ls_miaobi1 = list1.randomGet();
                                ls_miaobi2 = list1.randomGet();
                                ls_miaobi3 = list1.randomGet();
                                ls_miaobi4 = list1.randomGet();
                                ls_miaobi5 = list1.randomGet();
                                ls_miaobi6 = list1.randomGet();
                                ls_miaobi7 = list1.randomGet();
                                ls_miao1 = ls_miaobi1 * 100 + ls_miaobi2 * 10 + ls_miaobi3;
                                ls_miao2 = ls_miaobi4 * 100 + ls_miaobi5 * 10 + ls_miaobi6;
                                if (ls_jiajian == 0) {
                                    ls_bi1 = ls_miao1 + ls_miao2;
                                    ls_bi2 = ls_bi1 + ls_miaobi6 * 10;
                                    ls_bi3 = ls_bi1 - ls_miaobi5 * 10;
                                    ls_bi4 = ls_bi1 + ls_miaobi3 * 100;
                                    ls_bi5 = ls_bi1 - ls_miaobi6 * 100;
                                }
                                if (ls_jiajian == 1) {
                                    ls_bi1 = ls_miao1 - ls_miao2;
                                    ls_bi2 = ls_bi1 + ls_miaobi6 * 10;
                                    ls_bi3 = ls_bi1 - ls_miaobi5 * 10;
                                    ls_bi4 = ls_bi1 + ls_miaobi3 * 100;
                                    ls_bi5 = ls_bi1 - ls_miaobi6 * 100;
                                }
                                if (ls_jiajian == 2) {
                                    ls_bi1 = ls_miao1 * ls_miaobi7;
                                    ls_bi2 = ls_bi1 + ls_miaobi6 * 10;
                                    ls_bi3 = ls_bi1 - ls_miaobi5 * 10;
                                    ls_bi4 = ls_miao1 * ls_miaobi3;
                                    ls_bi5 = ls_miao2 * ls_miaobi7;
                                }
                                if (ls_jiajian == 3) {
                                    ls_bi1 = ls_miao1 % ls_miaobi7;
                                    ls_bi2 = ls_miao2 - ls_miaobi2;
                                    ls_bi3 = ls_bi1 + ls_miaobi4;
                                    ls_bi4 = ls_bi1 - ls_miaobi6;
                                    ls_bi5 = ls_bi1 + ls_miaobi5;
                                }
                                ls_xuanze = [ls_bi4, ls_bi2, ls_bi5, ls_bi3];
                                ls_xuanze[ls_jiajian] = ls_bi1;
                                ('step 2');
                                var choiceList = [ls_xuanze[0], ls_xuanze[1], ls_xuanze[2], ls_xuanze[3]];
                                var next = player.chooseControl();
                                next.set('choiceList', choiceList);
                                if (ls_jiajian == 0) next.set('prompt', ls_miao1 + `+${ls_miao2}=?`);
                                if (ls_jiajian == 1) next.set('prompt', ls_miao1 + `-${ls_miao2}=?`);
                                if (ls_jiajian == 2) next.set('prompt', ls_miao1 + `*${ls_miaobi7}=?`);
                                if (ls_jiajian == 3) next.set('prompt', ls_miao1 + `%${ls_miaobi7}=?`);
                                next.set('ai', function () {
                                    return ls_jiajian;
                                });
                                ('step 3');
                                if (result.index != ls_jiajian) {
                                    player.say(['天意难测', '星象难寻'].randomGet());
                                    for (var i = 1; i < 14; i++) {
                                        player.unmarkAuto('ls_dinghan', [i]);
                                    }
                                    event.finish();
                                }
                                ('step 4');
                                if (l_miaobi < 3) event.goto(1);
                                ('step 5');
                                player.storage.miaobi = get.time() - player.storage.miaobi_begin;
                                if (player.storage.miaobi > 60) {
                                    player.say(['天象已变', '时不我待'].randomGet());
                                    for (var i = 1; i < 14; i++) {
                                        player.unmarkAuto('ls_dinghan', [i]);
                                    }
                                } else {
                                    player.removeSkill('ls_jinfan');
                                    player.removeSkill('ls_miaobi');
                                    player.addSkill('ls_jinfan1');
                                }
                            },
                        },
                        ls_dinghan: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            init: (player) => (player.storage.ls_dinghan = []), //QQQ
                            filter(event, player) {
                                return !player.getStorage('ls_dinghan').includes(event.card.number);
                            },
                            content() {
                                player.markAuto('ls_dinghan', [trigger.card.number]);
                            },
                            intro: {
                                content: '已记录数字:$',
                            },
                            group: 'ls_dinghan_yizan',
                            subSkill: {
                                yizan: {
                                    audio: 'ls_dinghan',
                                    usable: 2,
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    hiddenCard(player, name) {
                                        if (!['sha', 'shan', 'tao', 'jiu'].includes(name)) return false;
                                        return player.hasCard(function (card) {
                                            return get.type(card) == 'basic';
                                        }, 'hs');
                                    },
                                    filter(event, player) {
                                        if (!player.hasCard((c) => player.storage.ls_dinghan.includes(c.number), 'hs')) {
                                            return false;
                                        }
                                        for (var i in lib.card) {
                                            var info = lib.card[i];
                                            if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                                            if (!info.content) continue;
                                            if (info.type == 'basic' && event.filterCard({ name: i }, player, event)) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            for (var i in lib.card) {
                                                var info = lib.card[i];
                                                if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                                                if (!info.content) continue;
                                                if (info.type == 'basic' && event.filterCard({ name: i }, player, event)) {
                                                    list.add(i);
                                                }
                                            }
                                            return ui.create.dialog('天演', [list, 'vcard'], 'hidden');
                                        },
                                        check(button) {
                                            var player = _status.event.player;
                                            var card = { name: button.link[2], nature: button.link[3] };
                                            if (
                                                _status.event.parent.type != 'phase' ||
                                                game.hasPlayer(function (current) {
                                                    return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                                })
                                            ) {
                                                switch (button.link[2]) {
                                                    case 'tao':
                                                    case 'shan':
                                                        return 5;
                                                    case 'jiu': {
                                                        if (player.countCards('hs') > 0) return 3;
                                                    }
                                                    case 'sha':
                                                        if (button.link[3] == 'fire') return 2.95;
                                                        else if (button.link[3] == 'thunder' || button.link[3] == 'ice') return 2.92;
                                                        else return 2.9;
                                                }
                                            }
                                            return 0;
                                        },
                                        backup(links, player) {
                                            return {
                                                audio: 'ls_jinfan',
                                                position: 'hs',
                                                filterCard(card) {
                                                    return player.getStorage('ls_dinghan').includes(card.number);
                                                },
                                                complexCard: true,
                                                selectCard: 1,
                                                check(card, player, target) {
                                                    if (!ui.selected.cards.length && get.type(card) == 'basic') return 6;
                                                    return 6 - get.value(card);
                                                },
                                                viewAs: { name: links[0][2], nature: links[0][3] },
                                                popname: true,
                                            };
                                        },
                                        prompt(links, player) {
                                            return '将一张牌当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用或打出';
                                        },
                                    },
                                    ai: {
                                        order() {
                                            var player = _status.event.player;
                                            var event = _status.event;
                                            if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) {
                                                return 3.3;
                                            }
                                            return 3.1;
                                        },
                                        skillTagFilter(player, tag, arg) {
                                            if (tag == 'fireAttack') return true;
                                        },
                                        result: {
                                            player: 1,
                                        },
                                        respondSha: true,
                                        respondShan: true,
                                        fireAttack: true,
                                    },
                                },
                            },
                        },
                        ls_jinfan: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                if (player.countCards('s') == 0) return true;
                                else return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (ui.cardPile.childElementCount < 2) event.finish();
                                var list = ['ls_tianyan'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                ('step 1');
                                var card = player.getCards('h', function (card) {
                                    return card.name == 'ls_tianyan';
                                });
                                result.cards = card;
                                player.loseToSpecial(result.cards, 'ls_jinfan').visible = true;
                                ('step 2');
                                player.markSkill('ls_jinfan');
                                ('step 3');
                                var list = [];
                                player.getCards('s', function (card) {
                                    if (card.hasGaintag('ls_jinfan')) list.add(card);
                                });
                                var card = list.randomGet();
                                var name2 = _status.pileTop.name;
                                var card2 = _status.pileTop;
                                if (card) {
                                    card.init([card2.suit, card2.number, name2]);
                                }
                            },
                            marktext: '混',
                            intro: {
                                mark(dialog, storage, player) {
                                    if (player != game.me) return get.translation(player) + '观看牌堆中...';
                                    dialog.addAuto(
                                        player.getCards('s', function (card) {
                                            return card.hasGaintag('ls_jinfan');
                                        })
                                    );
                                },
                                markcount(storage, player) {
                                    return player.getCards('s', function (card) {
                                        return card.hasGaintag('ls_jinfan');
                                    }).length;
                                },
                                onunmark(storage, player) {
                                    var cards = player.getCards('s', function (card) {
                                        return card.hasGaintag('ls_jinfan');
                                    });
                                    if (cards.length) {
                                        player.lose(cards, ui.discardPile);
                                        player.$throw(cards, 1000);
                                        game.log(cards, '进入了弃牌堆');
                                    }
                                },
                            },
                            mod: {
                                aiOrder(player, card, num) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('ls_jinfan')) return num + 0.5;
                                },
                            },
                            group: ['ls_jinfan_heh', 'ls_jinfan_add'],
                            subSkill: {
                                add: {
                                    trigger: {
                                        global: ['gainAfter', 'cardsDiscardAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (get.itemtype(_status.pileTop) == 'card') {
                                            var list = [];
                                            var num = 0;
                                            player.getCards('s', function (card) {
                                                if (card.hasGaintag('ls_jinfan')) {
                                                    list.add(card);
                                                    num += 1;
                                                }
                                            });
                                            if (num != 0) {
                                                var card = list.randomGet();
                                                var name2 = _status.pileTop.name;
                                                return player.countCards('s') > 0 && card.name != name2;
                                            } else return false;
                                        }
                                    },
                                    content() {
                                        if (ui.cardPile.childElementCount < 2) event.finish();
                                        var list = [];
                                        player.getCards('s', function (card) {
                                            if (card.hasGaintag('ls_jinfan')) list.add(card);
                                        });
                                        var card = list.randomGet();
                                        var name2 = _status.pileTop.name;
                                        var card2 = _status.pileTop;
                                        if (card) {
                                            card.init([card2.suit, card2.number, name2]);
                                        }
                                    },
                                },
                                heh: {
                                    audio: 'ls_jinfan',
                                    forced: true,
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.ss || !event.ss.length) return false;
                                        for (var i in event.gaintag_map) {
                                            if (event.gaintag_map[i].includes('ls_jinfan')) return true;
                                            return false;
                                        }
                                    },
                                    onremove: 'lose',
                                    content() {
                                        'step 0';
                                        if (ui.cardPile.childElementCount < 2) event.finish();
                                        var card = get.cards(1);
                                        game.cardsDiscard(card);
                                        ('step 1');
                                        var list = ['ls_tianyan'];
                                        player.gain(game.createCard(list.randomGet()));
                                        player.$draw();
                                        ('step 2');
                                        var card = player.getCards('h', function (card) {
                                            return card.name == 'ls_tianyan';
                                        });
                                        result.cards = card;
                                        player.loseToSpecial(result.cards, 'ls_jinfan').visible = true;
                                        ('step 3');
                                        player.markSkill('ls_jinfan');
                                        ('step 4');
                                        var list = [];
                                        player.getCards('s', function (card) {
                                            if (card.name == 'ls_tianyan') list.add(card);
                                        });
                                        var card = list.randomGet();
                                        var name2 = _status.pileTop.name;
                                        var card2 = _status.pileTop;
                                        if (card) {
                                            card.init([card2.suit, card2.number, name2]);
                                        }
                                    },
                                },
                            },
                        },
                        ls_jinfan1: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            filter(event, player) {
                                if (player.countCards('s') < 3) return true;
                                else return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (ui.cardPile.childElementCount < 4) event.finish();
                                var list = ['ls_tianyan'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                ('step 1');
                                var card = player.getCards('h', function (card) {
                                    return card.name == 'ls_tianyan';
                                });
                                result.cards = card;
                                player.loseToSpecial(result.cards, 'ls_jinfan1').visible = true;
                                ('step 2');
                                var num = 0;
                                player.getCards('s', function (card) {
                                    if (card.hasGaintag('ls_jinfan1')) {
                                        num += 1;
                                    }
                                });
                                if (num < 3) event.goto(0);
                                ('step 3');
                                player.markSkill('ls_jinfan1');
                            },
                            marktext: '天',
                            intro: {
                                mark(dialog, storage, player) {
                                    if (player != game.me) return get.translation(player) + '观看牌堆中...';
                                    dialog.addAuto(
                                        player.getCards('s', function (card) {
                                            return card.hasGaintag('ls_jinfan1');
                                        })
                                    );
                                },
                                markcount(storage, player) {
                                    return player.getCards('s', function (card) {
                                        return card.hasGaintag('ls_jinfan1');
                                    }).length;
                                },
                                onunmark(storage, player) {
                                    var cards = player.getCards('s', function (card) {
                                        return card.hasGaintag('ls_jinfan1');
                                    });
                                    if (cards.length) {
                                        player.lose(cards, ui.discardPile);
                                        player.$throw(cards, 1000);
                                        game.log(cards, '进入了弃牌堆');
                                    }
                                },
                            },
                            mod: {
                                aiOrder(player, card, num) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('ls_jinfan1')) return num + 0.5;
                                },
                            },
                            group: ['ls_jinfan1_heh', 'ls_jinfan1_add'],
                            subSkill: {
                                add: {
                                    trigger: {
                                        global: ['gainAfter', 'cardsDiscardAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var num = 0;
                                        player.getCards('s', function (card) {
                                            if (card.hasGaintag('ls_jinfan1')) {
                                                num += 1;
                                            }
                                        });
                                        var num1 = ui.cardPile.childElementCount;
                                        return num == 3 && num1 > 3;
                                    },
                                    content() {
                                        var list1 = [];
                                        player.getCards('s', function (card) {
                                            if (card.hasGaintag('ls_jinfan1')) list1.add(card);
                                        });
                                        var cards = list1;
                                        var cards2 = [];
                                        for (var i = 0; i < 3; i++) {
                                            cards2[i] = ui.cardPile.childNodes[i];
                                        }
                                        for (var i = 0; i < 3; i++) {
                                            i.init([cards2[i].suit, cards2[i].number, cards2[i].name]);
                                        }
                                    },
                                },
                                heh: {
                                    audio: 'ls_jinfan1',
                                    forced: true,
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.ss || !event.ss.length) return false;
                                        for (var i in event.gaintag_map) {
                                            if (event.gaintag_map[i].includes('ls_jinfan1')) return ui.cardPile.childElementCount > 3;
                                            return false;
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        if (ui.cardPile.childElementCount < 4) event.finish();
                                        var cards = [];
                                        for (var i = 0; i < 3; i++) {
                                            i = ui.cardPile.childNodes[i];
                                        }
                                        var card = trigger.ss;
                                        for (var i = 0; i < 3; i++) {
                                            var card1 = i;
                                            if (i.name == card[0].name && i.number == card[0].number) {
                                                game.cardsDiscard(card1);
                                            }
                                        }
                                        ('step 1');
                                        var list = ['ls_tianyan'];
                                        player.gain(game.createCard(list.randomGet()));
                                        player.$draw();
                                        ('step 2');
                                        var cards2 = player.getCards('h', function (card) {
                                            return card.name == 'ls_tianyan';
                                        });
                                        result.cards = cards2;
                                        player.loseToSpecial(result.cards, 'ls_jinfan1').visible = true;
                                        ('step 3');
                                        if (player.countCards('s') < 3) event.goto(1);
                                        ('step 4');
                                        player.markSkill('ls_jinfan1');
                                        ('step 5');
                                        var list1 = [];
                                        player.getCards('s', function (card) {
                                            if (card.hasGaintag('ls_jinfan1')) list1.add(card);
                                        });
                                        var cards = list1;
                                        var cards2 = [];
                                        for (var i = 0; i < 3; i++) {
                                            cards2[i] = ui.cardPile.childNodes[i];
                                        }
                                        for (var i = 0; i < 3; i++) {
                                            i.init([cards2[i].suit, cards2[i].number, cards2[i].name]);
                                        }
                                    },
                                },
                            },
                        },
                        ls_xianmu: {
                            derivation: ['zunwei', 'dinghan', 'new_guixin'],
                            audio: 'ext:脑洞大开/audio:2',
                            forced: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                if (player.getEquip('yuxi')) {
                                    return true;
                                }
                            },
                            content() {
                                player.storage.zunwei = '';
                                player.addTempSkill('zunwei', { player: 'phaseBegin' });
                                player.addTempSkill('dinghan', { player: 'phaseBegin' });
                                player.addTempSkill('new_guixin', { player: 'phaseBegin' });
                                player.addSkill('ls_xianmu_2');
                            },
                            group: ['ls_xianmu_1'],
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        global: 'gameDrawAfter',
                                        player: 'enterGame',
                                    },
                                    async content(event, trigger, player) {
                                        //QQQ
                                        player.equip(game.createCard2('yuxi', 'diamond', 1)); //QQQ
                                    },
                                },
                                2: {
                                    mod: {
                                        cardEnabled(card) {
                                            if (get.subtype(card) == 'equip5') return false;
                                        },
                                    },
                                },
                            },
                        },
                        ls_shouxi: {
                            audio: 'ext:脑洞大开/audio:6',
                        },
                        ls_huimin: {
                            audio: 'ext:脑洞大开/audio:6',
                        },
                        ls_suixi: {
                            derivation: ['sl_jishi', 'rexingxue'],
                            audio: 'ext:脑洞大开/audio:2',
                            juexingji: true,
                            mark: true,
                            forced: true,
                            trigger: {
                                player: ['loseAfter'],
                            },
                            filter(event, player) {
                                return event.cards && event.cards.some((q) => q.name == 'yuxi');
                            }, //QQQ
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                var list = trigger.cards.filter((q) => q.name == 'yuxi');
                                var card = list[0];
                                if (card) {
                                    card.remove();
                                    card.destroyed = true;
                                    game.log(card, '被销毁了');
                                    event.goto(2);
                                }
                                ('step 1');
                                ('step 2');
                                if (player.isTurnedOver()) player.turnOver();
                                if (player.isLinked()) player.link();
                                player.addSkill('sl_jishi');
                                player.addSkill('rexingxue');
                                ('step 3');
                                player.chooseTarget(lib.filter.notMe, get.prompt('ls_suixi'), '使一名角色翻面,且所有非锁定技失效直到其回合结束').set('ai', function (target) {
                                    var att = get.attitude(player, target);
                                    return -att;
                                });
                                ('step 4');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.turnOver();
                                    if (!target.hasSkill('fengyin')) {
                                        target.addTempSkill('fengyin', { player: 'phaseEnd' });
                                    }
                                }
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        ls_tanbao: {
                            audio: 'ext:脑洞大开/audio:2',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            usable: 1,
                            init(player) {
                                player.storage.ls_tanbao = [];
                                game.shende = ['lingsheji', 'shanrangzhaoshu', 'xingtianpojunfu', 'jinwuluorigong', 'wushuangfangtianji', 'shufazijinguan', 'hongmianbaihuapao', 'linglongshimandai', 'guilongzhanyuedao', 'guofengyupao', 'qimenbagua', 'chixueqingfeng', 'chiyanzhenhunqin', 'juechenjinge', 'xiuluolianyuji', 'xuwangzhimian', 'longfenghemingjian', 'qicaishenlu'];
                            },
                            content() {
                                'step 0';
                                if (target.countCards('h') == 0) {
                                    target.draw();
                                }
                                ('step 1');
                                const shende2 = game.shende.randomGet(); //QQQ
                                var card = target.getCards('h').randomGet();
                                if (card) {
                                    card.init([card.suit, card.number, shende2]);
                                }
                                game.log(target, '将一张手牌转化为', { name: shende2 });
                                ('step 2');
                                if (player.canCompare(target)) {
                                    event.goto(3);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                player.chooseToCompare(target);
                                ('step 4');
                                if (result.bool) {
                                    player.draw();
                                    event.goto(5);
                                } else {
                                    if (!player.hasSkill('ls_rongquan')) player.loseHp();
                                    event.finish();
                                }
                                ('step 5');
                                if (player.countCards('he')) {
                                    player
                                        .chooseCard('he', '弃置一张牌,如果是装备则放在武将牌上', true)
                                        .set('ai', function (card) {
                                            if (get.type(card) != 'basic' && get.type(card) != 'trick') {
                                                return 5 - get.value(card);
                                            }
                                            return -get.value(card);
                                        })
                                        .set('filterCard', lib.filter.cardDiscardable);
                                }
                                ('step 6');
                                if (result.cards?.length) {
                                    if (get.type(result.cards[0]) == 'equip' || game.shende.includes(result.cards[0].name)) {
                                        player.lose(result.cards, ui.special, 'toStorage');
                                        player.storage.ls_tanbao = player.storage.ls_tanbao.concat(result.cards);
                                        player.markSkill('ls_tanbao');
                                        game.log(player, '将', result.cards, '置于武将牌上');
                                    } else {
                                        player.discard(result.cards);
                                    }
                                }
                                if (!player.hasSkill('ls_tanbao_juli')) player.addSkill('ls_tanbao_juli');
                                (nun = player.storage.ls_tanbao.length), event.goto(0);
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
                                },
                            },
                            ai: {
                                order: 7,
                                result: {
                                    player(player) {
                                        if (player.hp > 2) return 3;
                                        var num = player.hp;
                                        if (num < player.countCards('h')) return 0;
                                        if (num == 1) return -2;
                                        if (num == 2) return -1;
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        var num = target.countCards('h');
                                        if (num == 1) return -1;
                                        if (num == 2) return -0.7;
                                        return -0.5;
                                    },
                                },
                                threaten: 1.3,
                            },
                        },
                        ls_tanbao_juli: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + nun;
                                },
                            },
                        },
                        hanzhaneq1: {
                            audio: 'ext:脑洞大开/audio:2',
                            forced: true,
                            trigger: {
                                global: 'chooseToCompareBegin',
                            },
                            filter(event, player) {
                                if (player == event.player) return true;
                                if (event.targets) return event.targets.includes(player);
                                return player == event.target;
                            },
                            logTarget(event, player) {
                                if (player != event.player) return event.player;
                                return event.targets || event.target;
                            },
                            prompt2(event, player) {
                                return '令其改为使用装备区内随机的牌进行拼点';
                            },
                            check(trigger, player) {
                                var num = 3;
                                return num > 0;
                            },
                            content() {
                                var targets = player == trigger.player ? (trigger.targets ? trigger.targets.slice(0) : [trigger.target]) : [trigger.player];
                                if (!trigger.fixedResult) trigger.fixedResult = {};
                                while (targets.length) {
                                    var target = targets.shift();
                                    var hs = target.getCards('e');
                                    if (hs.length) trigger.fixedResult[target.playerid] = hs.randomGet();
                                }
                            },
                            group: ['fenglve4'],
                            subfrequent: ['gain'],
                        },
                        ls_rongquan: {
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.ls_tanbao && player.storage.ls_tanbao.length;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('请选择要获得的装备牌', player.storage.ls_tanbao, 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        card: links[0],
                                        delay: false,
                                        content: lib.skill.ls_rongquan.contentx,
                                    };
                                },
                                prompt(links, player) {
                                    return '选择获得' + get.translation(links[0]);
                                },
                            },
                            contentx() {
                                var card = lib.skill.ls_rongquan_backup.card;
                                player.gain(card, 'gain2', 'log', 'fromStorage');
                                player.storage.ls_tanbao.remove(card);
                                player[player.storage.ls_tanbao.length ? 'markSkill' : 'unmarkSkill']('ls_tanbao');
                                player.addTempSkill('ls_zaixiong');
                            },
                            ai: {
                                order: 8,
                                threaten: 2,
                            },
                        },
                        ls_zili: {
                            audio: 'ext:脑洞大开/audio:2',
                            derivation: ['ls_rongquan', 'ls_zaixiong'],
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.ls_tanbao && player.storage.ls_tanbao.length >= 3;
                            },
                            content() {
                                player.loseMaxHp();
                                player.awakenSkill('ls_zili');
                                player.addSkill('ls_rongquan');
                            },
                        },
                        ls_zaixiong: {
                            audio: 'ext:脑洞大开/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            init(player) {
                                game.shende = ['lingsheji', 'shanrangzhaoshu', 'xingtianpojunfu', 'jinwuluorigong', 'wushuangfangtianji', 'shufazijinguan', 'hongmianbaihuapao', 'linglongshimandai', 'guilongzhanyuedao', 'guofengyupao', 'qimenbagua', 'chixueqingfeng', 'chiyanzhenhunqin', 'juechenjinge', 'xiuluolianyuji', 'xuwangzhimian', 'longfenghemingjian', 'qicaishenlu'];
                            },
                            filterCard(card) {
                                return get.type(card) == 'equip' || game.shende.includes(card.name);
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            position: 'he',
                            check(card) {
                                return 10 - get.value(card);
                            },
                            filterTarget: true,
                            content() {
                                'step 0';
                                if (target.countMark('taomie') > 0) player.addSkill('taomie');
                                ('step 1');
                                target.damage();
                                ('step 2');
                                player.removeSkill('taomie');
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -1,
                                },
                                threaten: 2,
                                expose: 0.2,
                            },
                        },
                        fenglve4: {
                            forced: true,
                            trigger: {
                                player: 'chooseToCompareAfter',
                                target: 'chooseToCompareAfter',
                            },
                            init(player) {
                                game.shende = ['lingsheji', 'shanrangzhaoshu', 'xingtianpojunfu', 'jinwuluorigong', 'wushuangfangtianji', 'shufazijinguan', 'hongmianbaihuapao', 'linglongshimandai', 'guilongzhanyuedao', 'guofengyupao', 'qimenbagua', 'chixueqingfeng', 'chiyanzhenhunqin', 'juechenjinge', 'xiuluolianyuji', 'xuwangzhimian', 'longfenghemingjian', 'qicaishenlu'];
                            }, //QQQ
                            check(event, player) {
                                var card, target;
                                if (player == event.player) {
                                    card = event.card1;
                                    target = event.target;
                                } else {
                                    card = event.card2;
                                    target = event.player;
                                }
                                return get.attitude(player, target) * get.value(card, target, 'raw') > 0;
                            },
                            filter(event, player) {
                                if (event.targets) return false;
                                var card, target;
                                if (player == event.player) {
                                    card = event.card1;
                                    target = event.target;
                                } else {
                                    card = event.card2;
                                    target = event.player;
                                }
                                return get.position(card, true) == 'o';
                            },
                            prompt(event, player) {
                                var card, target;
                                if (player == event.player) {
                                    card = event.card2;
                                    target = event.player;
                                } else {
                                    card = event.card1;
                                    target = event.target;
                                }
                                return '是否发动【怀异】';
                            },
                            logTarget(event, player) {
                                var target;
                                if (player == event.player) {
                                    target = event.target;
                                } else {
                                    target = event.player;
                                }
                                return target;
                            },
                            content() {
                                'step 0';
                                var card, target;
                                if (player == trigger.player) {
                                    card = trigger.card2;
                                    target = trigger.player;
                                    target2 = trigger.target;
                                } else {
                                    card = trigger.card1;
                                    target = trigger.target;
                                    target2 = trigger.player;
                                }
                                if (get.type(card) == 'equip') target.gain(card, 'gain2', 'log');
                                if (game.shende.includes(card.name)) {
                                    target.gain(card, 'gain2', 'log');
                                    target2.addMark('taomie', 1);
                                } //QQQ
                                if (target2.countMark('taomie') > 17) {
                                    target2.remove('taomie', 17);
                                }
                            },
                        },
                        sl_jishi: {
                            audio: ['jishi', 2],
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    event.cards &&
                                    event.cards.filterInD().length &&
                                    !player.getHistory('sourceDamage', function (evt) {
                                        return evt.card == event.card;
                                    }).length
                                );
                            },
                            content() {
                                var cards = trigger.cards.filterInD();
                                game.log(player, '将', cards, '置于了仁库');
                                game.cardsGotoSpecial(cards, 'toRenku');
                            },
                            init(player) {
                                player.storage.renku = true;
                            },
                            group: 'sl_jishi_draw',
                            subSkill: {
                                draw: {
                                    trigger: {
                                        global: ['gainAfter', 'cardsDiscardAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.fromRenku == true;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                    audioname2: {
                                        ls_caojie: 'ls_huimin',
                                    },
                                },
                            },
                            audioname2: {
                                ls_caojie: 'ls_huimin',
                            },
                        },
                        fenglve3: {
                            trigger: {
                                player: 'chooseToCompareAfter',
                                target: 'chooseToCompareAfter',
                            },
                            check(event, player) {
                                var card, target;
                                if (player == event.player) {
                                    card = event.card1;
                                    target = event.target;
                                } else {
                                    card = event.card2;
                                    target = event.player;
                                }
                                return get.attitude(player, target) * get.value(card, target, 'raw') > 0;
                            },
                            filter(event, player) {
                                if (event.targets) return false;
                                var card, target;
                                if (player == event.player) {
                                    card = event.card1;
                                    target = event.target;
                                } else {
                                    card = event.card2;
                                    target = event.player;
                                }
                                return get.position(card, true) == 'o';
                            },
                            prompt(event, player) {
                                var card, target;
                                if (player == event.player) {
                                    card = event.card1;
                                    target = event.target;
                                } else {
                                    card = event.card2;
                                    target = event.player;
                                }
                                return `是否发动【酣战】,令${get.translation(target)}获得${get.translation(card)}？`;
                            },
                            logTarget(event, player) {
                                var target;
                                if (player == event.player) {
                                    target = event.target;
                                } else {
                                    target = event.player;
                                }
                                return target;
                            },
                            content() {
                                var card, target;
                                if (player == trigger.player) {
                                    card = trigger.card1;
                                    target = trigger.target;
                                } else {
                                    card = trigger.card2;
                                    target = trigger.player;
                                }
                                target.gain(card, 'gain2', 'log');
                            },
                        },
                        sl_hanzhan: {
                            audio: ['hanzhan', 2],
                            trigger: {
                                global: 'chooseToCompareBegin',
                            },
                            filter(event, player) {
                                if (player == event.player) return true;
                                if (event.targets) return event.targets.includes(player);
                                return player == event.target;
                            },
                            logTarget(event, player) {
                                if (player != event.player) return event.player;
                                return event.targets || event.target;
                            },
                            prompt2(event, player) {
                                return '令其改为使用随机的牌进行拼点';
                            },
                            check(trigger, player) {
                                var num = 0;
                                var targets = player == trigger.player ? (trigger.targets ? trigger.targets.slice(0) : [trigger.target]) : [trigger.player];
                                while (targets.length) {
                                    var target = targets.shift();
                                    if (target.getCards('h').length > 1) num -= get.attitude(player, target);
                                }
                                return num > 0;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                list.push('选项一');
                                list.push('选项二');
                                list.push('cancel2');
                                player.chooseControl(list).set('choiceList', ['对方拼点牌减少4', '对方拼点牌增加2']);
                                ('step 1');
                                event.control = result.control;
                                var targets = player == trigger.player ? (trigger.targets ? trigger.targets.slice(0) : [trigger.target]) : [trigger.player];
                                if (!trigger.fixedResult) trigger.fixedResult = {};
                                while (targets.length) {
                                    var target = targets.shift();
                                    var hs = target.getCards('he');
                                    if (hs.length) trigger.fixedResult[target.playerid] = hs.randomGet();
                                }
                                if (event.control == '选项一') {
                                    target.addTempSkill('hanzhan1_jian');
                                }
                                if (event.control == '选项二') {
                                    target.addTempSkill('hanzhan1_add');
                                }
                            },
                            group: ['sl_hanzhan_gain', 'fenglve3'],
                            subfrequent: ['gain'],
                        },
                        hanzhan1: {
                            group: ['hanzhan1_add', 'hanzhan1_jian'],
                            subSkill: {
                                add: {
                                    trigger: {
                                        player: 'compare',
                                        target: 'compare',
                                    },
                                    filter(event, player) {
                                        return !event.iwhile;
                                    },
                                    forced: true,
                                    content() {
                                        if (player == trigger.player) {
                                            trigger.num1 += 2;
                                            if (trigger.num1 > 13) trigger.num1 = 13;
                                        } else {
                                            trigger.num2 += 2;
                                            if (trigger.num2 > 13) trigger.num2 = 13;
                                        }
                                        game.log(player, '的拼点牌点数+2');
                                    },
                                },
                                jian: {
                                    trigger: {
                                        player: 'compare',
                                        target: 'compare',
                                    },
                                    filter(event, player) {
                                        return !event.iwhile;
                                    },
                                    forced: true,
                                    content() {
                                        if (player == trigger.player) {
                                            trigger.num1 -= 4;
                                            if (trigger.num1 < 2) trigger.num1 = 1;
                                        } else {
                                            trigger.num2 -= 4;
                                            if (trigger.num2 < 2) trigger.num2 = 1;
                                        }
                                        game.log(player, '的拼点牌点数-4');
                                    },
                                },
                            },
                        },
                        sl_hanzhan_gain: {
                            trigger: {
                                player: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                target: ['chooseToCompareAfter', 'compareMultipleAfter'],
                            },
                            audio: 'sl_hanzhan',
                            filter(event, player) {
                                if (event.preserve) return false;
                                return [event.card1, event.card2].filter(function (card) {
                                    return card.name == 'sha' && get.position(card, true) == 'o';
                                }).length;
                            },
                            forced: true,
                            prompt2(trigger, player) {
                                var cards = [trigger.card1, trigger.card2].filter(function (card) {
                                    return card.name == 'sha' && get.position(card, true) == 'o';
                                });
                                cards.sort(function (a, b) {
                                    return b.number - a.number;
                                });
                                if (cards.length > 1 && cards[0].number > cards[1].number) cards.splice(1);
                                return '获得' + get.translation(cards);
                            },
                            content() {
                                'if';
                                var cards = [trigger.card1, trigger.card2].filter(function (card) {
                                    return card.name == 'sha' && get.position(card, true) == 'o';
                                });
                                cards.sort(function (a, b) {
                                    return b.number - a.number;
                                });
                                if (cards.length > 1 && cards[0].number > cards[1].number) cards.splice(1);
                                player.gain(cards, 'gain2');
                            },
                        },
                        shengli: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.hasSkill('bahu')) player.storage.shengli = true;
                                ('step 1');
                                var i = player.name;
                                player.init(i);
                                ('step 2');
                                if (player.storage.shengli == true) {
                                    player.storage.shengli = false;
                                    player.addSkill('bahu');
                                    player.addSkill('feiyang');
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 2;
                                    return 0.5;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage') == 1 && target.hp == 4 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                    },
                                },
                            },
                            group: ['shengli_lsfanmian'],
                            subSkill: {
                                lsfanmian: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.turnOver();
                                        player.chooseUseTarget({ name: 'sha' }, false);
                                        player.chooseUseTarget({ name: 'sha' }, false);
                                    },
                                },
                            },
                        },
                        shentieji: {
                            derivation: 'shenqipao',
                            audio: 'ext:脑洞大开/audio:2',
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                var targets = game
                                    .filterPlayer(function (current) {
                                        return current != player;
                                    })
                                    .sortBySeat();
                                for (var i of targets) i.addTempSkill('jupai', 'shaEnd');
                            },
                            group: ['shentieji_juli', 'shentieji_shanghai', 'shentieji_mark', 'shentieji_add'],
                            subSkill: {
                                juli: {
                                    forced: true,
                                    mod: {
                                        targetInRange(card, player, target, now) {
                                            if (card.name == 'sha') return true;
                                        },
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.name == 'sha') return true;
                                            return false;
                                        },
                                    },
                                },
                                mark: {},
                                add: {
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    filter(event, player) {
                                        if (!event.targets || event.targets.length != 1) return false;
                                        if (event.card.name != 'sha') return false;
                                        var info = get.info(event.card);
                                        if (info.multitarget) return false;
                                        if (info.allowMultiple == false) return false;
                                        if (info.type == 'delay') return false;
                                        return game.hasPlayer(function (current) {
                                            if (!current.hasMark('shenqipao_mark')) return false;
                                            return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                                        });
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt2('shentieji_add'), [1, Infinity], function (card, player, target) {
                                                if (!target.hasMark('shenqipao_mark')) return false;
                                                var trigger = _status.event.getTrigger();
                                                return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target);
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.effect(target, _status.event.getTrigger().card, player, player);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            event.targets = result.targets.sortBySeat();
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        for (var i = 0; i < event.targets.length; i++) {
                                            event.targets[i].removeMark('shenqipao_mark', 1);
                                        }
                                        trigger.targets.addArray(event.targets);
                                    },
                                },
                                shanghai: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    forced: true,
                                    content() {
                                        var target = trigger.player;
                                        target.addSkill('shenqipao');
                                    },
                                },
                            },
                        },
                        shenwansha: {
                            global: 'wansha3',
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 15,
                            forced: true,
                            preHidden: true,
                            filter(event, player, name) {
                                return _status.currentPhase == player && event.player != player;
                            },
                            content() { },
                        },
                        wansha3: {
                            mod: {
                                cardSavable(card, player) {
                                    if (_status.currentPhase.isAlive() && _status.currentPhase.hasSkill('shenwansha') && _status.currentPhase != player) {
                                        if (card.name == 'tao' && !player.isDying()) return false;
                                    }
                                },
                                cardEnabled(card, player) {
                                    if (_status.currentPhase.isAlive() && _status.currentPhase.hasSkill('shenwansha') && _status.currentPhase != player) {
                                        if (card.name == 'tao' && !player.isDying()) return false;
                                    }
                                },
                            },
                        },
                        jupai: {
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            onremove(player, skill) {
                                player.removeSkillBlocker(skill);
                            },
                            charlotte: true,
                            skillBlocker(skill, player) {
                                return skill != 'jupai' && !lib.skill[skill].charlotte;
                            },
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var str = '<li>锁定技,你的其他技能全部失效.';
                                    var list = player.getSkills(null, false, false).filter(function (i) {
                                        return lib.skill.jupai.skillBlocker(i, player);
                                    });
                                    if (list.length) str += '<br><li>失效技能:' + get.translation(list);
                                    return str;
                                },
                            },
                        },
                        shenqipao: {
                            audio: 'ext:脑洞大开/audio:2',
                            group: ['shenqipao_kaishi', 'shenqipao_jieshu', 'shenqipao_shoupai', 'shenqipao_mark'],
                            subSkill: {
                                kaishi: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h') > player.hp;
                                    },
                                    content() {
                                        'step 0';
                                        var num = player.countCards('h') - player.hp;
                                        player.chooseToDiscard(num, `弃袍:选择${num}张牌弃置`).set('ai', function (card) {
                                            if (num <= 2 && player.hp <= player.countMark('shenqipao_mark')) return 7 - get.value(card);
                                            return -2;
                                        });
                                        ('step 1');
                                        if (!result.bool) {
                                            var num = player.countCards('h') - player.hp;
                                            player.addMark('shenqipao_mark', num);
                                        }
                                    },
                                },
                                jieshu: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return player.countMark('shenqipao_mark') >= 1;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard('是否弃置一张牌来尝试弃置袍标记').set('ai', function (card) {
                                            if (player.hp > 1) {
                                                return 9 - get.value(card);
                                            }
                                            return 0;
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            event.goto(2);
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        player.judge(function (card) {
                                            if (get.color(card) == 'red') return -2;
                                            return 2;
                                        }).judge2 = function (result) {
                                            return result.bool;
                                        };
                                        ('step 3');
                                        if (result.judge == 2) {
                                            var num1 = player.countMark('shenqipao_mark');
                                            player.removeMark('shenqipao_mark', num1);
                                        }
                                    },
                                },
                                shoupai: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            return Math.max(1, player.hp - player.countMark('shenqipao_mark'));
                                        },
                                    },
                                },
                                mark: {
                                    marktext: '袍',
                                    intro: {
                                        name: '袍',
                                        content: 'mark',
                                    },
                                },
                            },
                        },
                        sl_dulie: {
                            audio: 'dulie',
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    game.players.length > 1 &&
                                    !game.hasPlayer(function (current) {
                                        return current.hasMark('sl_dulie');
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                var num = Math.floor(game.players.length / 2);
                                player.chooseTarget(num, true, '请选择【笃烈】的目标', `令${get.cnNumber(num)}名角色获得<围>标记`, lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return Math.max(1, get.attitude(player, target)) / Math.max(1, get.distance(player, target));
                                });
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets.sortBySeat();
                                    for (var i of targets) i.addMark('sl_dulie', 1);
                                }
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha' && !target.hasMark('sl_dulie')) return true;
                                },
                            },
                            marktext: '围',
                            intro: {
                                name: '笃烈/破阵 (围)',
                                name2: '围',
                                content: 'mark',
                            },
                            group: 'sl_dulie_sha',
                            subSkill: {
                                sha: {
                                    audio: 'dulie',
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    forced: true,
                                    logTarget: 'player',
                                    filter(event, player) {
                                        return (event.card && event.card.name == 'sha') || (event.card.name == 'lebu' && event.player.isIn() && !event.player.hasMark('sl_dulie'));
                                    },
                                    content() {
                                        'step 0';
                                        player.judge(function (result) {
                                            if (get.color(result) == 'red' || get.color(result) == 'club') return 2;
                                            return -1;
                                        }).judge2 = function (result) {
                                            return result.bool;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            player.draw();
                                            trigger.targets.remove(player);
                                            trigger.parent.triggeredTargets2.remove(player);
                                            trigger.untrigger();
                                        }
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current, isLink) {
                                                if (card.name == 'sha' && !isLink && !player.hasMark('sl_dulie')) return 0.5;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        sl_shenzhu: {
                            audio: ['shenzhu', 3],
                            mod: {
                                cardUsable(card) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha') range[1] += 1;
                                },
                            },
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.cards.length == 1;
                            },
                            content() {
                                player.draw();
                                //player.addTempSkill('shenzhu_less');
                                //player.addMark('shenzhu_less',1,false);
                            },
                            subSkill: {
                                less: {
                                    charlotte: true,
                                    intro: {
                                        content: '手牌上限-#',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - player.countMark('shenzhu_less');
                                        },
                                    },
                                },
                            },
                        },
                        sl_dangmo: {
                            audio: ['dangmo', 2],
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                var evt = event.getParent('phaseUse');
                                return (
                                    evt &&
                                    evt.player == player &&
                                    player.getHistory('useCard', function (evtx) {
                                        return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
                                    })[0] == event &&
                                    game.hasPlayer(function (current) {
                                        return !event.targets.includes(current) && lib.filter.filterTarget(event.card, player, current);
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                var num = Math.min(
                                    player.maxHp - 1,
                                    game.countPlayer(function (current) {
                                        return !trigger.targets.includes(current) && lib.filter.filterTarget(trigger.card, player, current);
                                    })
                                );
                                player.chooseTarget(
                                    get.prompt('sl_dangmo'),
                                    `为${get.translation(trigger.card)}增加至多${get.translation(num)}个目标`,
                                    [1, num],
                                    function (card, player, target) {
                                        return player != target;
                                    },
                                    function (target) {
                                        var player = get.player();
                                        return -get.attitude(player, target);
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else event.finish();
                                ('step 2');
                                //var target=trigger.targets
                                trigger.targets.addArray(targets);
                            },
                        },
                        sl_tianyi: {
                            audio: 'ext:脑洞大开/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                player.chooseToCompare(target);
                                ('step 2');
                                if (result.bool) {
                                    var card = get.discardPile(function (i) {
                                        return i.name == 'sha';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                    player.addTempSkill('tianyi2');
                                    player.addTempSkill('rezongshi_paoxiao', 'phaseJieshuBegin');
                                    event.finish();
                                }
                                ('step 3');
                                var list = [];
                                list.push('选项一');
                                list.push('选项二');
                                list.push('cancel2');
                                player.chooseControl(list).set('choiceList', ['对方获得一张红杀', '你弃置一张牌']);
                                ('step 4');
                                event.control = result.control;
                                if (event.control == '选项一') {
                                    var card = get.discardPile(function (i) {
                                        return i.name == 'sha' && get.color(i) == 'red';
                                    });
                                    if (card) target.gain(card, 'gain2');
                                }
                                ('step 5');
                                if (event.control == '选项二') {
                                    player.chooseToDiscard('he', true);
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
                                    },
                                },
                                threaten: 1.3,
                            },
                        },
                        sl_keji: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            frequent(event, player) {
                                return player.needsToDiscard();
                            },
                            filter(event, player) {
                                if (player.getHistory('skipped').includes('phaseUse')) return true;
                                var history = player.getHistory('useCard').concat(player.getHistory('respond'));
                                for (var i = 0; i < history.length; i++) {
                                    if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) return false;
                                }
                                return true;
                            },
                            content() {
                                trigger.cancel();
                                var next = player.phaseDraw();
                                event.next.remove(next);
                                trigger.parent.next.push(next);
                            },
                        },
                        sl_gonxin: {
                            audio: 'ext:脑洞大开/audio:2',
                            audioname: ['re_lvmeng', 'gexuan'],
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h');
                            },
                            content() {
                                'step 0';
                                event.videoId = lib.status.videoId++;
                                var cards = target.getCards('h');
                                if (player.isOnline2()) {
                                    player.send(
                                        function (cards, id) {
                                            ui.create.dialog('攻心', cards).videoId = id;
                                        },
                                        cards,
                                        event.videoId
                                    );
                                }
                                event.dialog = ui.create.dialog('攻心', cards);
                                event.dialog.videoId = event.videoId;
                                if (!event.isMine()) {
                                    event.dialog.style.display = 'none';
                                }
                                player
                                    .chooseButton()
                                    .set('filterButton', function (button) {
                                        return button.link.suit == 'heart', 'diamond';
                                    })
                                    .set('dialog', event.videoId);
                                ('step 1');
                                if (result.bool) {
                                    event.card = result.links[0];
                                    var func = function (card, id) {
                                        var dialog = get.idDialog(id);
                                        if (dialog) {
                                            for (var i = 0; i < dialog.buttons.length; i++) {
                                                if (dialog.buttons[i].link == card) {
                                                    dialog.buttons[i].classList.add('selectedx');
                                                } else {
                                                    dialog.buttons[i].classList.add('unselectable');
                                                }
                                            }
                                        }
                                    };
                                    if (player.isOnline2()) {
                                        player.send(func, event.card, event.videoId);
                                    } else if (event.isMine()) {
                                        func(event.card, event.videoId);
                                    }
                                    player.chooseControl('gongxin_discard', 'gongxin_top');
                                } else {
                                    if (player.isOnline2()) {
                                        player.send('closeDialog', event.videoId);
                                    }
                                    event.dialog.close();
                                    event.finish();
                                }
                                ('step 2');
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                var card = event.card;
                                if (result.control == 'gongxin_top') {
                                    player.showCards(card, '置于牌堆顶');
                                    target.lose(card, ui.cardPile, 'insert', 'visible');
                                    game.log(player, '将', event.card, '置于牌堆顶');
                                } else {
                                    target.discard(card);
                                }
                            },
                            ai: {
                                threaten: 1.5,
                                result: {
                                    target(player, target) {
                                        return -target.countCards('h');
                                    },
                                },
                                order: 10,
                                expose: 0.4,
                            },
                        },
                        sl_qinxue: {
                            audio: 'ext:脑洞大开/audio:2',
                            juexingji: true,
                            derivation: ['sl_botu', 'dz_nddk_xiuxue'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.qinxue) return false;
                                if (player.countCards('h') >= player.hp + 7) return true;
                                if (player.countCards('h') >= player.hp + 5 && game.players.length + game.dead.length >= 6) return true;
                                return false;
                            },
                            content() {
                                player.storage.qinxue = true;
                                player.loseMaxHp();
                                player.awakenSkill('sl_gonxin');
                                player.addSkill('dz_nddk_xiuxue');
                                player.addSkill('botu');
                                player.awakenSkill('qinxue');
                            },
                        },
                        sl_botu: {
                            audio: 'ext:脑洞大开/audio:2',
                            round: 2,
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var history = player.getHistory('useCard', function (evt) {
                                    return evt.isPhaseUsing();
                                });
                                var suits = [];
                                for (var i = 0; i < history.length; i++) {
                                    var suit = history[i].card.suit;
                                    if (suit) suits.add(suit);
                                }
                                return suits.length == 4;
                            },
                            content() {
                                player.phase('nodelay');
                            },
                            group: ['sl_botu_roundcount'],
                        },
                        sl_zhangming: {
                            trigger: {},
                            forced: true,
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player;
                                    })
                                );
                            },
                            group: 'sl_zhangming_damage',
                            subSkill: {
                                damage: {
                                    audio: 'zhangming',
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    usable: 2,
                                    forced: true,
                                    filter(event, player) {
                                        return player != event.player;
                                    },
                                    logTarget: 'player',
                                    content() {
                                        var list = [],
                                            cards = [],
                                            target = trigger.player,
                                            hs = target.getCards('h');
                                        if (hs.length) {
                                            var card = hs.randomGet();
                                            list.push(get.type2(card, target));
                                            player.showCards(card, get.translation(player) + `对${get.translation(target)}发动了【彰名】`);
                                        }
                                        target.discard(card);
                                        for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                            var type = get.type2(ui.cardPile.childNodes[i], false);
                                            if (!list.includes(type)) {
                                                list.push(type);
                                                cards.push(ui.cardPile.childNodes[i]);
                                            }
                                        }
                                        player.gain(cards, 'gain2').gaintag.add('zhangming');
                                        player.addTempSkill('zhangming_keep');
                                        player.draw();
                                    },
                                },
                                keep: {
                                    charlotte: true,
                                    onremove(player) {
                                        player.removeGaintag('zhangming');
                                    },
                                    mod: {
                                        ignoredHandcard(card, player) {
                                            if (card.hasGaintag('zhangming')) {
                                                return true;
                                            }
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && card.hasGaintag('zhangming')) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        sl_zaoli: {
                            prompt2: '移去所有厉并弃置牌,摸牌并回血或扣血',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            audio: 'zaoli',
                            filter(event, player) {
                                return player.countMark('zaoli') > 0;
                            },
                            content() {
                                'step 0';
                                event.num = player.storage.zaoli;
                                player.removeMark('zaoli', event.num);
                                if (player.countCards('he') > 0) {
                                    player.chooseToDiscard(true, 'he', [1, Infinity], '躁厉:弃置至少一张牌').set('ai', function (card) {
                                        if (card.hasGaintag('zaoli')) return 1;
                                        return 5 - get.value(card);
                                    });
                                }
                                ('step 1');
                                if (result.bool) num += result.cards.length;
                                player.draw(num);
                                if (event.num > 13 - player.maxHp) player.loseHp();
                                if (event.num < 13 - player.hp) player.recover();
                            },
                            group: ['sl_zaoli_add', 'sl_zaoli_count'],
                            init(player) {
                                if (player == _status.currentPhase) {
                                    var hs = player.getCards('h');
                                    player.getHistory('gain', function (evt) {
                                        hs.removeArray(evt.cards);
                                    });
                                    if (hs.length) player.addGaintag(hs, 'zaoli');
                                }
                            },
                            onremove(player) {
                                player.removeGaintag('zaoli');
                                delete player.storage.zaoli;
                            },
                            intro: {
                                content: 'mark',
                            },
                            subSkill: {
                                add: {
                                    trigger: {
                                        player: ['useCardEnd', 'respondEnd', 'damageEnd'],
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.addMark('zaoli', 1);
                                    },
                                },
                                count: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    selectCard: 2,
                                    filterCard: true,
                                    position: 'he',
                                    selectTarget: [1, 3],
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    filter(event, player) {
                                        return player.countCards('he');
                                    },
                                    content() {
                                        player.canUse({ name: 'sha' }, target, false);
                                        player.useCard({ name: 'sha' }, target, false);
                                    },
                                },
                            },
                        },
                        sl_chuhai: {
                            audio: 'chuhai',
                            inherit: 'chuhai',
                            dutySkill: true,
                            group: ['sl_chuhai_add', 'sl_chuhai_achieve', 'sl_chuhai_fail'],
                            derivation: 'sl_zhangming',
                            prompt: '与一名其他角色进行拼点',
                            subSkill: {
                                add: {
                                    trigger: {
                                        player: 'compare',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.parent.name == 'sl_chuhai' && event.num1 < 13 && player.countCards('e') < 4;
                                    },
                                    content() {
                                        var num = 6 - player.countCards('e');
                                        game.log(player, '的拼点牌点数+', num);
                                        trigger.num1 = Math.min(13, trigger.num1 + num);
                                    },
                                },
                                achieve: {
                                    audio: 'rechuhai',
                                    trigger: {
                                        player: 'equipAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('e') > 2;
                                    },
                                    content() {
                                        player.awakenSkill('sl_chuhai');
                                        game.log(player, '成功完成使命');
                                        player.hp = player.maxHp;
                                        player.removeSkill('xianghai');
                                        player.addSkill('sl_zhangming');
                                        var num = player.maxHp - player.countCards('h');
                                        if (num > 0) player.draw(num);
                                    },
                                },
                                fail: {
                                    trigger: {
                                        player: 'chooseToCompareAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.parent.name == 'rechuhai' && event.num1 < 9 && !event.result.bool;
                                    },
                                    content() {
                                        player.awakenSkill('sl_chuhai');
                                        game.log(player, '使命失败');
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return !player.hasSkillTag('noCompareSource');
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0 && !target.hasSkillTag('noCompareTarget');
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                if (player.canCompare(target)) player.chooseToCompare(target);
                                else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.storage.chuhai2 = target;
                                    player.addTempSkill('chuhai2', 'phaseUseEnd');
                                    if (target.countCards('h') > 0) {
                                        player.viewHandcards(target);
                                        var types = [],
                                            cards = [],
                                            hs = target.getCards('h');
                                        for (var i of hs) {
                                            types.add(get.type2(i, target));
                                        }
                                        for (var i of types) {
                                            var card = get.cardPile(function (card) {
                                                return get.type2(card, false) == i;
                                            });
                                            if (card) cards.push(card);
                                        }
                                        if (cards.length) player.gain(cards, 'gain2', 'log');
                                    }
                                    player.canUse({ name: 'sha' }, target, false);
                                    player.useCard({ name: 'sha' }, target, false);
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (
                                            player.countCards('hs', function (card) {
                                                return get.tag(card, 'damage') > 0 && player.canUse(card, target, null, true) && get.effect(target, card, player, player) > 0 && player.hasValueTarget(card, null, true);
                                            }) > 0
                                        )
                                            return -3;
                                        return -1;
                                    },
                                },
                            },
                        },
                        jishen: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + Infinity;
                                },
                                canBeDiscarded(card, player, target) {
                                    if (player != target && get.type(card) == 'equip' && get.position(card) == 'e') return false;
                                },
                                canBeGained(card, player, target) {
                                    if (player != target && get.type(card) == 'equip' && get.position(card) == 'e') return false;
                                },
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                                attackRange(player, range) {
                                    return (range += Infinity);
                                },
                                maxHandcard(player, num) {
                                    return (num += Infinity);
                                },
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                            group: ['jishen_dyingAfter', 'jishen_draw', 'jishen_lose', 'jishen_busi', 'jishen_zhuangbei', 'jishen_pd'],
                            subSkill: {
                                dyingAfter: {
                                    trigger: {
                                        global: 'dyingAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source && event.source.isIn() && event.source.hp > 0;
                                    },
                                    logTarget: 'source',
                                    content() {
                                        trigger.source.die();
                                    },
                                },
                                zhuangbei: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countDisabled();
                                    },
                                    content() {
                                        var num = player.countDisabled();
                                        if (num > 0) {
                                            for (var i = 1; i < 6; i++) {
                                                if (player.isDisabled(i)) player.enableEquip(i);
                                            }
                                        }
                                    },
                                },
                                pd: {
                                    ai: {
                                        noCompareTarget: true,
                                    },
                                },
                                busi: {
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hp > 0;
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                draw: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'jiu') return Infinity;
                                        },
                                    },
                                    forced: true,
                                    trigger: {
                                        player: ['judgeAfter', 'turnOverBegin', 'recoverEnd'],
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                lose: {
                                    group: ['drlt_qianjie_2', 'drlt_qianjie_3'],
                                    trigger: {
                                        player: ['loseHpBefore', 'loseMaxHpBefore'],
                                    },
                                    forced: true,
                                    content() {
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                },
                            },
                        },
                        sl_shenbian: {
                            derivation: ['sl_tianyun', 'jishen', 'shenhuan'],
                            charlotte: true,
                            trigger: {
                                global: ['gameDrawBefore'],
                                player: ['enterGame'],
                            },
                            forced: true,
                            content() {
                                player.addSkill('sl_tianyun');
                                player.addSkill('jishen');
                                player.removeSkill('sl_shenbian');
                            },
                        },
                        sl_powei: {
                            audio: ['tspowei', 3],
                            dutySkill: true,
                            forced: true,
                            trigger: {
                                source: 'damageBegin2',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player && event.player.isIn() && event.player.hasMark('sl_dulie');
                            },
                            content() {
                                trigger.cancel();
                                trigger.player.removeMark('sl_dulie', trigger.player.countMark('sl_dulie'));
                                trigger.player.discard(
                                    trigger.player
                                        .getCards('h', function (card) {
                                            return lib.filter.cardDiscardable(card, player, 'sl_powei');
                                        })
                                        .randomGet()
                                );
                            },
                            derivation: 'sl_shenzhu',
                            group: ['sl_powei_achieve', 'sl_powei_fail'],
                            ai: {
                                combo: 'sl_dulie',
                                effect: {
                                    player(card, player, target) {
                                        if (card.name == 'sha' && target.hasMark('sl_dulie') && get.attitude(player, target) >= 0) return [1, 1, 0, 0];
                                        if (get.tag(card, 'sl_damage') && _status.event.type == 'respondShan' && _status.event.parent.name == 'sha' && target.hasMark('sl_dulie') && get.attitude(target, player) >= 0) return [1, 1, 0, 0];
                                    },
                                },
                            },
                            subSkill: {
                                achieve: {
                                    audio: 'tspowei1',
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            event.card &&
                                            event.card.name == 'sha' &&
                                            !game.hasPlayer(function (current) {
                                                return current.hasMark('sl_dulie');
                                            })
                                        );
                                    },
                                    content() {
                                        game.log(player, '成功完成使命');
                                        player.addSkillLog('sl_shenzhu');
                                        player.awakenSkill('sl_powei');
                                        player.draw(player.maxHp - player.countCards('h'));
                                    },
                                },
                                fail: {
                                    audio: 'tspowei2',
                                    trigger: {
                                        player: 'dying',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        game.log(player, '使命失败');
                                        if (player.hp < 1) player.recover(3 - player.hp);
                                        ('step 1');
                                        var num = player.countCards('e');
                                        if (num > 0) player.chooseToDiscard('e', true, num);
                                        player.awakenSkill('sl_powei');
                                    },
                                },
                            },
                        },
                        sl_lirang: {
                            audio: 'splirang',
                            trigger: {
                                global: 'phaseDrawBegin2',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return !event.numFixed && event.player != player && player.countMark('sl_lirang') <= 1;
                            },
                            prompt2: '获得一枚<谦>并令其多摸牌',
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                trigger.num += player.maxHp + Math.ceil(player.maxHp - player.hp * 1.5) + player.hp;
                                player.addMark('sl_lirang', 1);
                                player.addTempSkill('sl_lirang_gain');
                            },
                            marktext: '谦',
                            intro: {
                                name: '谦',
                                content: 'mark',
                            },
                            group: 'sl_lirang_skip',
                            subSkill: {
                                gain: {
                                    audio: 'splirang',
                                    trigger: {
                                        global: 'phaseDiscardEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasHistory('lose', function (evt) {
                                            return evt.type == 'discard' && evt.cards2.filterInD('d').length && evt.getParent('phaseDiscard') == event;
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        var cards = [];
                                        trigger.player.getHistory('lose', function (evt) {
                                            if (evt.type == 'discard' && evt.getParent('phaseDiscard') == trigger) cards.addArray(evt.cards2.filterInD('d'));
                                        });
                                        player.chooseButton(['礼让:是否获得其中的任意张牌？;或点取消,摸一张牌回复一点体力', cards], [1, Infinity]);
                                        ('step 1');
                                        if (result.bool) {
                                            player.gain(result.links, 'gain2');
                                        } else {
                                            player.draw();
                                            player.recover();
                                        }
                                    },
                                },
                                skip: {
                                    audio: 'splirang',
                                    prompt2: '跳过本次摸牌,移去你的<谦>',
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    filter(event, player) {
                                        return player.hasMark('sl_lirang');
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.removeMark('sl_lirang', player.countMark('sl_lirang'));
                                    },
                                },
                            },
                        },
                        sl_mingshi: {
                            audio: 'spmingshi',
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += player.maxHp * 2 - (player.maxHp - player.hp));
                                },
                            },
                            prompt2: '令伤害来源弃置等同于你已损失体力值的牌',
                            trigger: {
                                player: 'damageEnd',
                            },
                            logTarget: 'source',
                            filter(event, player) {
                                return event.source && event.source.isIn() && player.hasMark('sl_lirang') && event.source.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                trigger.source
                                    .chooseToDiscard('he', player.maxHp - player.hp, true)
                                    .set('color', get.attitude(trigger.source, player) > 0 ? 'red' : 'black')
                                    .set('ai', function (card) {
                                        return (get.color(card) == _status.event.color ? 4 : 0) - get.value(card);
                                    });
                                ('step 1');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    if (get.color(card, trigger.source) == 'red') player.recover();
                                    else if (get.position(card, true) == 'd') player.gain(card, 'gain2');
                                }
                            },
                            group: 'sl_mingshi_sha',
                            subSkill: {
                                sha: {
                                    audio: 'spmingshi',
                                    trigger: {
                                        target: 'shaBefore',
                                    },
                                    popup: false,
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasMark('sl_lirang') && player.countCards('h');
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCard(`是否交给${get.translation(trigger.player)}一张牌并取消此杀？`).ai = function (card) {
                                            if (get.attitude(player, trigger.player) > 0) {
                                                return 9 - get.value(card);
                                            }
                                            if (player.countCards('h', { name: 'shan' })) return -1;
                                            return 7 - get.value(card);
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.player.gain(result.cards, player);
                                            player.$give(result.cards, trigger.player);
                                            trigger.cancel();
                                        }
                                    },
                                },
                            },
                            ai: {
                                combo: 'xinmingshi',
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage') && target.hasMark('xinlirang')) {
                                            var cards = [card];
                                            if (card.cards && card.cards.length) cards.addArray(card.cards);
                                            if (ui.selected.cards.length) cards.addArray(ui.selected.cards);
                                            if (
                                                !player.countCards('he', function (card) {
                                                    return !cards.includes(card);
                                                })
                                            )
                                                return;
                                            if (
                                                !player.countCards('h', function (card) {
                                                    return !cards.includes(card) && get.color(card) == 'black' && get.value(card, player) < 6;
                                                })
                                            )
                                                return 'zerotarget';
                                            return 0.5;
                                        }
                                    },
                                },
                            },
                        },
                        sl_jiqiao: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                var cards = get.cards(player.maxHp + 2);
                                player.addToExpansion(cards, 'gain2').gaintag.add('sl_jiqiao');
                                player.addTempSkill('sl_jiqiao_gain', 'phaseUseAfter');
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            subSkill: {
                                gain: {
                                    audio: 'sl_jiqiao',
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.hasCard((card) => card.hasGaintag('sl_jiqiao'), 'x');
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('sl_jiqiao');
                                        var dialog = ['激峭:选择获得一张牌'];
                                        var reds = [],
                                            blacks = [];
                                        for (var i of cards) (get.color(i) == 'red' ? reds : blacks).push(i);
                                        if (reds.length) {
                                            dialog.push('<div class="text center">红色牌</div>');
                                            dialog.push(reds);
                                        }
                                        if (blacks.length) {
                                            dialog.push('<div class="text center">黑色牌</div>');
                                            dialog.push(blacks);
                                        }
                                        player.chooseButton(dialog, true).set('ai', function (button) {
                                            var player = _status.event.player;
                                            var color = get.color(button.link),
                                                cards = player.getExpansions('sl_jiqiao');
                                            var num1 = cards.filter((card) => get.color(card) == color),
                                                num2 = cards.length - num1;
                                            if (num1 >= num2) return get.value(button.link);
                                            return 0;
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.gain(result.links, 'gain2');
                                        } else event.finish();
                                        ('step 2');
                                        var map = { red: 0, black: 0 },
                                            cards = player.getExpansions('sl_jiqiao');
                                        for (var i of cards) {
                                            var color = get.color(i, false);
                                            if (map[color] != undefined) map[color]++;
                                        }
                                        if (map.red == map.black) player.recover();
                                        else {
                                            player.loseHp();
                                            player.draw(player.maxHp - player.hp);
                                        }
                                    },
                                    onremove(player) {
                                        var cards = player.getExpansions('sl_jiqiao');
                                        if (cards.length) player.loseToDiscardpile(cards);
                                    },
                                },
                            },
                        },
                        sl_xiongyi: {
                            charlotte: true,
                            audio: 'ext:脑洞大开/audio:4',
                            limited: true,
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (event.type != 'dying') return false;
                                if (player != event.dying) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseControlList(['获得〖魂姿〗与〖激昂〗并摸两张牌', '替换武将牌为【徐氏】并摸三张牌'], true);
                                ('step 1');
                                if (result.index == 0) {
                                    player.awakenSkill('sl_xiongyi');
                                    player.addSkillLog('sl_hunzi');
                                    player.addSkillLog('sl_jiang');
                                    player.recover(2 - player.hp);
                                    player.draw(2);
                                } else {
                                    player.awakenSkill('sl_xiongyi');
                                    if (!_status.characterlist) {
                                        lib.skill.pingjian.initList();
                                    }
                                    _status.characterlist.remove('xushi');
                                    _status.characterlist.add('sl_re_sunyi');
                                    player.reinit('sl_re_sunyi', 'xushi', false);
                                    player.hp = player.maxHp;
                                    player.draw(3);
                                }
                            },
                            ai: {
                                order: 1,
                                save: true,
                                skillTagFilter(player, arg, target) {
                                    return player == target;
                                },
                                result: {
                                    player: 10,
                                },
                            },
                            derivation: ['sl_hunzi', 'sl_jiang', 'sl_yingzi', 'sl_yinghun'],
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        sl_zhouxuan: {
                            audio: ['spolzhouxuan', 2],
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            group: ['sl_zhouxuan_use', 'sl_zhouxuan_discard'],
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCard('he', get.prompt('sl_zhouxuan'), [1, Infinity], '将任意张牌置于武将牌上作为<旋>').set('ai', function (card) {
                                    if (ui.selected.cards.length >= player.needsToDiscard()) return 6 - get.value(card);
                                    return 100 - get.useful(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var cards = result.cards;
                                    player.addToExpansion(cards, player, 'give').gaintag.add('sl_zhouxuan');
                                }
                            },
                            marktext: '旋',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            subSkill: {
                                use: {
                                    audio: 'spolzhouxuan',
                                    trigger: {
                                        player: ['useCardEnd', 'respondEnd'],
                                    },
                                    filter(event, player) {
                                        return player.getExpansions('sl_zhouxuan').length;
                                    },
                                    content() {
                                        'step 0';
                                        var num = Math.min(player.isMaxHandcard(true) ? 1 : player.getExpansions('sl_zhouxuan').length);
                                        if (num > 0) player.draw(num);
                                        ('step 1');
                                        var cards = player.getExpansions('sl_zhouxuan');
                                        if (cards.length) player.chooseButton(['选择移去一张<旋>', cards], true);
                                        else event.finish();
                                        ('step 2');
                                        if (result.bool) player.loseToDiscardpile(result.links);
                                    },
                                },
                                discard: {
                                    trigger: {
                                        player: 'phaseDiscardBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('sl_zhouxuan').length;
                                    },
                                    content() {
                                        player.loseToDiscardpile(player.getExpansions('sl_zhouxuan'));
                                    },
                                },
                            },
                        },
                        sl_pingjian: {
                            init(player) {
                                player.addSkill('pingjian_check');
                                player.storage.pingjian_check = {};
                            },
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                player: ['dying', 'phaseDrawBegin1', 'damageEnd', 'phaseBegin', 'phaseZhunbeiBegin', 'phaseJieshuBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseDiscardEnd'],
                            },
                            initList() {
                                var list = [];
                                if (_status.connectMode) var list = get.charactersOL();
                                else {
                                    var list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                game.countPlayer2(function (current) {
                                    list.remove(current.name);
                                    list.remove(current.name1);
                                    list.remove(current.name2);
                                });
                                _status.characterlist = list;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.storage.pingjian) player.storage.pingjian = [];
                                event._result = { bool: true };
                                ('step 1');
                                if (result.bool) {
                                    if (!_status.characterlist) {
                                        lib.skill.pingjian.initList();
                                    }
                                    var list = [];
                                    var skills = [];
                                    var map = [];
                                    _status.characterlist.randomSort();
                                    var name2 = event.triggername;
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (name.includes('zuoci') || name.includes('xushao')) continue;
                                        var skills2 = lib.character[name][3];
                                        for (var j = 0; j < skills2.length; j++) {
                                            if (player.storage.pingjian.includes(skills2[j])) continue;
                                            if (skills.includes(skills2[j])) {
                                                list.add(name);
                                                if (!map[name]) map[name] = [];
                                                map[name].push(skills2[j]);
                                                skills.add(skills2[j]);
                                                continue;
                                            }
                                            var list2 = [skills2[j]];
                                            game.expandSkills(list2);
                                            for (var k = 0; k < list2.length; k++) {
                                                var info = lib.skill[list2[k]];
                                                if (!info || !info.trigger || !info.trigger.player || info.silent || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
                                                if (info.trigger.player == name2 || (Array.isArray(info.trigger.player) && info.trigger.player.includes(name2))) {
                                                    if (info.init || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                                                    if (info.filter) {
                                                        try {
                                                            var bool = info.filter(trigger, player, name2);
                                                            if (!bool) continue;
                                                        } catch (e) {
                                                            continue;
                                                        }
                                                    }
                                                    list.add(name);
                                                    if (!map[name]) map[name] = [];
                                                    map[name].push(skills2[j]);
                                                    skills.add(skills2[j]);
                                                    break;
                                                }
                                            }
                                        }
                                        if (list.length > 2) break;
                                    }
                                    if (!skills.length) {
                                        player.draw();
                                        event.finish();
                                    } else {
                                        skills.unshift('摸牌');
                                        player
                                            .chooseControl(skills)
                                            .set('dialog', ['请选择要发动的技能', [list, 'character']])
                                            .set('ai', function () {
                                                return 0;
                                            });
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.control == '摸牌') {
                                    player.draw();
                                    return;
                                }
                                player.addTempSkill(result.control, event.triggername == 'damageEnd' ? 'damageAfter' : 'phaseDrawBegin1', 'phaseJieshu', 'phaseBegin', 'phaseZhunbeiBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseDiscardEnd', 'dying');
                            },
                            group: 'pingjian_use',
                            phaseUse_special: ['xinfu_lingren'],
                        },
                        sl_qiaobian: {
                            audio: 'ext:脑洞大开/audio:2',
                            group: ['sl_qiaobian1', 'sl_qiaobian2', 'sl_qiaobian3', 'sl_qiaobian4'],
                            preHidden: true,
                            ai: {
                                threaten: 3,
                            },
                        },
                        sl_qiaobian1: {
                            audio: 'sl_qiaobian',
                            trigger: {
                                player: 'phaseJudgeBefore',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (lib.config.autoskilllist.includes('sl_qiaobian1')) {
                                    event.finish();
                                } else {
                                    var next = player.chooseToDiscard(get.prompt('sl_qiaobian'), '弃置一张手牌并跳过判定阶段,视为使用一张【杀】');
                                    next.set('ai', get.unuseful2);
                                    next.setHiddenSkill('sl_qiaobian');
                                }
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    player.chooseUseTarget('###是否发动【巧变】？###视为使用一张无距离限制且不计入使用次数的【杀】', { name: 'sha' }, false, 'nodistance');
                                }
                            },
                        },
                        sl_qiaobian2: {
                            audio: 'sl_qiaobian',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var check,
                                    i,
                                    num = 0,
                                    num2 = 0,
                                    players = game.filterPlayer();
                                for (var i of players) {
                                    if (player != i && i.countCards('he')) {
                                        var att = get.attitude(player, i);
                                        if (att <= 0) {
                                            num++;
                                        }
                                        if (att < 0) {
                                            num2++;
                                        }
                                    }
                                }
                                check = num >= 2 && num2 > 0;
                                player
                                    .chooseToDiscard(get.prompt('sl_qiaobian'), '弃置一张牌并跳过摸牌阶段,可以获得任意名角色的一张牌', lib.filter.cardDiscardable)
                                    .set('ai', function (card) {
                                        if (!_status.event.check) return 0;
                                        return 7 - get.value(card);
                                    })
                                    .set('check', check)
                                    .setHiddenSkill('sl_qiaobian');
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    player
                                        .chooseTarget([1, Infinity], '获得任意名角色各一张牌', function (card, player, target) {
                                            return target != player && target.countCards('he');
                                        })
                                        .set('ai', function (target) {
                                            return 1 - get.attitude(_status.event.player, target);
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    result.targets.sortBySeat();
                                    player.line(result.targets, 'green');
                                    event.targets = result.targets;
                                    if (!event.targets.length) event.finish();
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                player.gainMultiple(event.targets, 'he');
                                ('step 4');
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        sl_qiaobian3: {
                            audio: 'sl_qiaobian',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var check;
                                if (!player.canMoveCard(true)) {
                                    check = false;
                                } else {
                                    check = game.hasPlayer(function (current) {
                                        return get.attitude(player, current) > 0 && current.countCards('j');
                                    });
                                    if (!check) {
                                        if (player.countCards('h') > player.hp + 1) {
                                            check = false;
                                        } else if (player.countCards('h', { name: ['wuzhong'] })) {
                                            check = false;
                                        } else {
                                            check = true;
                                        }
                                    }
                                }
                                player
                                    .chooseToDiscard(get.prompt('qiaobian'), '弃置一张手牌,摸三张牌并跳过出牌阶段,你依次可以:①移动场上的一张牌,②视为使用一张【决斗】', lib.filter.cardDiscardable)
                                    .set('ai', function (card) {
                                        if (!_status.event.check) return 0;
                                        return 7 - get.value(card);
                                    })
                                    .set('check', check)
                                    .setHiddenSkill('qiaobian');
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    player.draw(3);
                                    player.moveCard();
                                    player.moveCard();
                                    player.chooseUseTarget('###是否发动【巧变】？###视为使用一张【决斗】', { name: 'juedou' }, false, 'nodistance');
                                    player.chooseUseTarget('###是否发动【巧变】？###视为使用一张无距离的【杀】', { name: 'sha' }, false, 'nodistance');
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        sl_qiaobian4: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var discard = player.countCards('h') > player.hp;
                                var next = player.chooseToDiscard(get.prompt('sl_qiaobian4'), '弃置一张手牌并跳过弃牌阶段,你选择一项,1.翻面并回复一点体力,2.横置并失去一点体力,你可以视为使用一张【过河拆桥】和【顺手牵羊】与【杀】');
                                next.setHiddenSkill('sl_qiaobian');
                                next.ai = function (card) {
                                    if (discard) {
                                        return 100 - get.useful(card);
                                    } else {
                                        return -1;
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    player.chooseControlList(['翻面', '横置'], true);
                                }
                                ('step 2');
                                if (result.index == 0) {
                                    player.turnOver();
                                    player.recover();
                                } else {
                                    player.link();
                                    player.loseHp();
                                }
                                ('step 3');
                                player.chooseUseTarget('###是否发动【巧变】？###视为使用一张【过河拆桥】', { name: 'guohe' }, false, 'nodistance');
                                player.chooseUseTarget('###是否发动【巧变】？###视为使用一张无距离限制的【顺手牵羊】', { name: 'shunshou' }, false, 'nodistance');
                                player.chooseUseTarget('###是否发动【巧变】？###视为使用一张无距离限制的【杀】', { name: 'sha' }, false, 'nodistance');
                            },
                        },
                        sl_zhenshan: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (!event.filterCard || (!event.filterCard({ name: 'shan' }, player, event) && !event.filterCard({ name: 'sha' }, player, event))) return false;
                                if (player.hasSkill('zhenshan2')) return false;
                                var nh = player.countCards('h');
                                return game.hasPlayer(function (current) {
                                    return current != player && player.countCards('h') && current.countCards('h') < nh;
                                });
                            },
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('sl_zhenshan'), function (card, player, target) {
                                        return target.countCards('h') <= player.countCards('h') && player != target;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    if (trigger.filterCard({ name: 'shan' }, player)) {
                                        trigger.result = { bool: true, card: { name: 'shan' } };
                                    } else {
                                        trigger.result = { bool: true, card: { name: 'sha' } };
                                    }
                                    player.addTempSkill('zhenshan2');
                                    player.swapHandcards(result.targets[0]);
                                    player
                                        .chooseTarget('选择一名手牌数小于你的角色,令其摸两张牌', function (card, player, target) {
                                            return target.countCards('h') < player.countCards('h') && player != target;
                                        })
                                        .set('ai', function (target) {
                                            return get.attitude(player, target);
                                        });
                                }
                                ('step 2');
                                if (result.bool) {
                                    result.targets[0].draw(2);
                                }
                            },
                            group: 'sl_zhenshan_use',
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        sl_zhenshan_use: {
                            audio: 'sl_zhenshan',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (player.hasSkill('zhenshan2')) return false;
                                var nh = player.countCards('h');
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current != player && player.countCards('h') && current.countCards('h') <= nh;
                                    })
                                ) {
                                    return false;
                                }
                                return event.filterCard({ name: 'sha' }, player, event) || event.filterCard({ name: 'jiu' }, player, event) || event.filterCard({ name: 'tao' }, player, event) || event.filterCard({ name: 'shan' }, player, event);
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                        list.push(['基本', '', 'sha']);
                                        list.push(['基本', '', 'sha', 'fire']);
                                        list.push(['基本', '', 'sha', 'thunder']);
                                        list.push(['基本', '', 'sha', 'ice']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) {
                                        list.push(['基本', '', 'tao']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) {
                                        list.push(['基本', '', 'jiu']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    return ui.create.dialog('振赡', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (card.name == 'jiu') return 0;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        if (card.name == 'sha') {
                                            if (card.nature == 'fire') return 2.95;
                                            else if (card.nature == 'fire') return 2.92;
                                            else return 2.9;
                                        } else if (card.name == 'tao' || card.name == 'shan') {
                                            return 4;
                                        }
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        selectCard: -1,
                                        popname: true,
                                        log: false,
                                        precontent() {
                                            'step 0';
                                            player.chooseTarget(
                                                '选择交换手牌的目标',
                                                function (card, player, target) {
                                                    return target.countCards('h') <= player.countCards('h') && player != target;
                                                },
                                                true
                                            ).ai = function (target) {
                                                return get.attitude(player, target);
                                            };
                                            player.addTempSkill('zhenshan2');
                                            //'step 1'
                                            ('step 1');
                                            if (result.bool) {
                                                result.targets[0].chooseToDiscard('he', 1, true);
                                                player.chooseTarget('选择一名角色,你令其摸一张牌').set('ai', function (target) {
                                                    return get.attitude(player, target);
                                                });
                                            }
                                            ('step 2');
                                            if (result.bool) {
                                                result.targets[0].draw();
                                            }
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '选择' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '的目标';
                                },
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var event = _status.event;
                                    var nh = player.countCards('h');
                                    if (
                                        game.hasPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.countCards('h') <= nh;
                                        })
                                    ) {
                                        if (event.type == 'dying') {
                                            if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) {
                                                return 0.5;
                                            }
                                        } else {
                                            if ((event.filterCard && event.filterCard({ name: 'tao' }, player, event)) || event.filterCard({ name: 'shan' }, player, event)) {
                                                return 4;
                                            }
                                            if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                                return 2.9;
                                            }
                                        }
                                    }
                                    return 0;
                                },
                                save: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    if (player.hasSkill('zhenshan2')) return false;
                                    var nh = player.countCards('h');
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.countCards('h') <= nh;
                                    });
                                },
                                result: {
                                    player(player) {
                                        if (_status.event.type == 'dying') {
                                            return get.attitude(player, _status.event.dying);
                                        } else {
                                            return 1;
                                        }
                                    },
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        sl_yaoming: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                                global: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.storage.xinyaoming.length < 3;
                            },
                            forced: true,
                            init(player) {
                                player.storage.xinyaoming = [];
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('sl_yaoming2'), function (card, player, target) {
                                    var s = player.storage.xinyaoming;
                                    var pe = player.countCards('h');
                                    var te = target.countCards('h');
                                    if (s.includes('大于') && pe > te) return false;
                                    if ((s.includes('等于') || target.countCards('he') == 0) && pe == te) return false;
                                    if (s.includes('小于') && pe < te) return false;
                                    return player != target && true;
                                }).ai = function (target) {
                                    var player = _status.event.player;
                                    return -get.sgn(target.countCards('h') - player.countCards('h')) * get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('sl_yaoming2', 'useCardAfter');
                                }
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    var ph = player.countCards('h');
                                    var th = target.countCards('h');
                                    if (ph > th) {
                                        player.storage.xinyaoming.push('大于');
                                        target.draw();
                                        player.canUse({ name: 'yuanjiao' }, target, false);
                                        player.useCard({ name: 'yuanjiao' }, target, false);
                                        event.finish();
                                    } else if (ph == th) {
                                        player.storage.xinyaoming.push('等于');
                                        player.canUse({ name: 'toulianghuanzhu' }, target, false);
                                        player.useCard({ name: 'toulianghuanzhu' }, target, false);
                                        target.damage();
                                        target.chooseToDiscard('he', 1, true);
                                        player.chooseToDiscard('he', 1, true);
                                    } else {
                                        player.storage.xinyaoming.push('小于');
                                        player.canUse({ name: 'chuqibuyi' }, target, false);
                                        player.useCard({ name: 'chuqibuyi' }, target, false);
                                        player.gainPlayerCard(target, true, 'he');
                                        player.discardPlayerCard(target, 'he', true);
                                        event.finish();
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.bool);
                            },
                            group: 'xinyaoming_kanon',
                            subSkill: {
                                kanon: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    silent: true,
                                    content() {
                                        lib.skill.xinyaoming.init(player);
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        sl_yaoming2: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                trigger.nowuxie = true;
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                        },
                        sl_liehou: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:脑洞大开/audio:2',
                            prompt: '请选择被收保护费的角色',
                            selectCard: 1,
                            filterCard: true,
                            position: 'he',
                            selectTarget: [1, 4],
                            filterTarget(card, player, target) {
                                return player.inRange(target);
                            },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            content() {
                                'step 0';
                                target.chooseCard('h', `请选择被${get.translation(player)}白嫖的牌,或不交保护费,挨打`);
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.cards, target, 'giveAuto');
                                    player.draw();
                                    player.addTempSkill('sl_iehou2');
                                    player.addMark('sl_iehou2', 1, false);
                                } else {
                                    event.finish();
                                    target.damage();
                                }
                                ('step 2');
                                if (
                                    player.countCards('he') &&
                                    game.hasPlayer(function (current) {
                                        return current != target && player.inRange(current);
                                    })
                                ) {
                                    player.chooseCardTarget({
                                        position: 'he',
                                        filterTarget(card, player, target) {
                                            return target != _status.event.parent.target && player.inRange(target);
                                        },
                                        prompt: '你可以将一张牌交给一名攻击范围内的其他角色,但不能是被你白嫖了牌的角色',
                                        ai1(card) {
                                            var player = _status.event.player;
                                            if (card.name == 'du') return 20;
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return current != _status.event.parent.target && player.inRange(current) && get.attitude(player, current) > 0 && current.getUseValue(card) > player.getUseValue(card) && current.getUseValue(card) > player.getUseValue(card);
                                                })
                                            )
                                                return 12;
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return current != player && get.attitude(player, current) > 0;
                                                })
                                            ) {
                                                if (card.name == 'wuxie') return 11;
                                                if (card.name == 'shan' && player.countCards('h', 'shan') > 1) return 9;
                                            }
                                            return 6 / Math.max(1, get.value(card));
                                        },
                                        ai2(target) {
                                            var player = _status.event.player;
                                            var card = ui.selected.cards[0];
                                            var att = get.attitude(player, target);
                                            if (card.name == 'du') return -6 * att;
                                            if (att > 0) {
                                                if (get.position(card) == 'h' && target.getUseValue(card) > player.getUseValue(card)) return 4 * att;
                                                if (get.value(card, target) > get.value(card, player)) return 2 * att;
                                                return 1.2 * att;
                                            }
                                            return (-att * Math.min(4, target.countCards('he'))) / 6;
                                        },
                                    });
                                } else event.finish();
                                ('step 3');
                                if (result.bool) result.targets[0].gain(result.cards, player, 'giveAuto');
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        sl_qigong: {
                            trigger: {
                                player: ['shaAfter'],
                            },
                            forced: true,
                            audio: 'ext:脑洞大开/audio:2',
                            filter(event, player) {
                                return (
                                    event.target.isIn() &&
                                    game.hasPlayer(function (current) {
                                        return current != event.target && current.canUse('sha', event.target, false);
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('sl_qigong'), `令一名角色可再对${get.translation(trigger.target)}使用一张【杀】`, function (card, player, target) {
                                        var source = _status.event.getTrigger().target;
                                        return target != source && target.canUse('sha', source, false);
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player,
                                            card = { name: 'sha' },
                                            source = _status.event.getTrigger().target;
                                        if (target.hasSha()) {
                                            var eff1 = get.effect(source, card, target, target);
                                            if (eff1 > 0) return get.effect(source, card, target, player);
                                        }
                                        return target != player ? Math.random() * get.attitude(player, target) : 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.addTempSkill('qigong_ai', 'chooseToUseEnd');
                                    target
                                        .chooseToUse(
                                            `是否再对${get.translation(trigger.target)}使用一张【杀】？`,
                                            function (card, player, event) {
                                                if (card.name != 'sha') return false;
                                                return lib.filter.filterCard.apply(this, arguments);
                                            },
                                            trigger.target,
                                            -1
                                        )
                                        .set('addCount', false)
                                        .set('oncard', function () {
                                            _status.event.directHit.addArray(game.players);
                                            target.draw();
                                            //target.addTempSkill('sl_qigong2','chooseToUseEnd');
                                        });
                                }
                            },
                            subSkill: {
                                ai: {
                                    ai: {
                                        directHit_ai: true,
                                        skillTagFilter(player, tag, arg) {
                                            return arg.card && arg.card.name == 'sha';
                                        },
                                    },
                                },
                            },
                        },
                        sl_qigong2: {
                            audio: 'sl_iehou',
                            trigger: {
                                source: 'shaBegin',
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        sl_aocai: {
                            audio: 'ext:脑洞大开/audio:8',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (player != _status.currentPhase && get.type(name) == 'basic' && lib.inpile.includes(name)) return true;
                            },
                            filter(event, player) {
                                if (event.responded || event.aocai || player == _status.currentPhase) return false;
                                for (var i of lib.inpile) {
                                    if (get.type(i) == 'basic' && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            delay: false,
                            content() {
                                'step 0';
                                var evt = event.getParent(2);
                                evt.set('aocai', true);
                                var cards = get.cards(get.mode() != 'guozhan' && player.countCards('h') <= 2 ? player.maxHp + 2 : player.hp + 1);
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        ui.cardPile.insertBefore(i.fix(), ui.cardPile.firstChild);
                                    }
                                var aozhan = player.hasSkill('aozhan');
                                player
                                    .chooseButton(['傲才:选择要' + (evt.name == 'chooseToUse' ? '使用' : '打出') + '的牌', cards])
                                    .set('filterButton', function (button) {
                                        return _status.event.cards.includes(button.link);
                                    })
                                    .set(
                                        'cards',
                                        cards.filter(function (card) {
                                            if (aozhan && card.name == 'tao') {
                                                return (
                                                    evt.filterCard(
                                                        {
                                                            name: 'sha',
                                                            cards: [card],
                                                        },
                                                        evt.player,
                                                        evt
                                                    ) ||
                                                    evt.filterCard(
                                                        {
                                                            name: 'shan',
                                                            cards: [card],
                                                        },
                                                        evt.player,
                                                        evt
                                                    )
                                                );
                                            }
                                            return evt.filterCard(card, evt.player, evt);
                                        })
                                    )
                                    .set('ai', function (button) {
                                        var evt = _status.event.getParent(3);
                                        if (evt && evt.ai) {
                                            var tmp = _status.event;
                                            _status.event = evt;
                                            var result = (evt.ai || event.ai1)(button.link, _status.event.player, evt);
                                            _status.event = tmp;
                                            return result;
                                        }
                                        return 1;
                                    });
                                ('step 1');
                                var evt = event.getParent(2);
                                if (result.links?.length) {
                                    var name = result.links[0].name,
                                        aozhan = player.hasSkill('aozhan') && name == 'tao';
                                    if (aozhan) {
                                        name = evt.filterCard(
                                            {
                                                name: 'sha',
                                                cards: [card],
                                            },
                                            evt.player,
                                            evt
                                        )
                                            ? 'sha'
                                            : 'shan';
                                    }
                                    if (evt.name == 'chooseToUse') {
                                        game.broadcastAll(
                                            function (result, name) {
                                                lib.skill.aocai_backup.viewAs = { name: name, cards: [result] };
                                                lib.skill.aocai_backup.prompt = `选择${get.translation(result)}的目标`;
                                            },
                                            result.links[0],
                                            name
                                        );
                                        evt.set('_backupevent', 'aocai_backup');
                                        evt.backup('aocai_backup');
                                    } else {
                                        delete evt.result.skill;
                                        delete evt.result.used;
                                        evt.result.card = result.links[0];
                                        if (aozhan) evt.result.card.name = name;
                                        evt.result.cards = [result.links[0]];
                                        evt.redo();
                                        return;
                                    }
                                }
                                evt.goto(0);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan')) return 0.7;
                                        if (get.tag(card, 'respondSha')) return 0.7;
                                    },
                                },
                                order: 11,
                                respondShan: true,
                                respondSha: true,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                            group: 'sl_aocai_1',
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    content() {
                                        player.addTempSkill('sl_aocai2', 'phaseUseEnd');
                                    },
                                },
                            },
                        },
                        sl_aocai2: {
                            audio: 'sl_aocai',
                            usable: 2,
                            enable: ['chooseToUse', 'chooseToRespond'],
                            delay: false,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                var evt = event.getParent(2);
                                evt.set('aocai', true);
                                var cards = get.cards(get.mode() != 'guozhan' && player.countCards('h') <= 2 ? player.maxHp + 2 : player.hp + 1);
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        ui.cardPile.insertBefore(i.fix(), ui.cardPile.firstChild);
                                    }
                                var aozhan = player.hasSkill('aozhan');
                                player
                                    .chooseButton(['傲才:选择要' + (evt.name == 'chooseToUse' ? '使用' : '打出') + '的牌', cards])
                                    .set('filterButton', function (button) {
                                        return _status.event.cards.includes(button.link);
                                    })
                                    .set(
                                        'cards',
                                        cards.filter(function (card) {
                                            if (aozhan && card.name == 'tao') {
                                                return (
                                                    evt.filterCard(
                                                        {
                                                            name: 'sha',
                                                            cards: [card],
                                                        },
                                                        evt.player,
                                                        evt
                                                    ) ||
                                                    evt.filterCard(
                                                        {
                                                            name: 'shan',
                                                            cards: [card],
                                                        },
                                                        evt.player,
                                                        evt
                                                    )
                                                );
                                            }
                                            return evt.filterCard(card, evt.player, evt);
                                        })
                                    )
                                    .set('ai', function (button) {
                                        var evt = _status.event.getParent(3);
                                        if (evt && evt.ai) {
                                            var tmp = _status.event;
                                            _status.event = evt;
                                            var result = (evt.ai || event.ai1)(button.link, _status.event.player, evt);
                                            _status.event = tmp;
                                            return result;
                                        }
                                        return 1;
                                    });
                                ('step 2');
                                var evt = event.getParent(2);
                                if (result.links?.length) {
                                    var name = result.links[0].name,
                                        aozhan = player.hasSkill('aozhan') && name == 'tao';
                                    if (aozhan) {
                                        name = evt.filterCard(
                                            {
                                                name: 'sha',
                                                cards: [card],
                                            },
                                            evt.player,
                                            evt
                                        )
                                            ? 'sha'
                                            : 'shan';
                                    }
                                    if (evt.name == 'chooseToUse') {
                                        game.broadcastAll(
                                            function (result, name) {
                                                lib.skill.aocai_backup.viewAs = { name: name, cards: [result] };
                                                lib.skill.aocai_backup.prompt = `选择${get.translation(result)}的目标`;
                                            },
                                            result.links[0],
                                            name
                                        );
                                        evt.set('_backupevent', 'aocai_backup');
                                        evt.backup('aocai_backup');
                                    } else {
                                        delete evt.result.skill;
                                        delete evt.result.used;
                                        evt.result.card = result.links[0];
                                        if (aozhan) evt.result.card.name = name;
                                        evt.result.cards = [result.links[0]];
                                        evt.redo();
                                        return;
                                    }
                                }
                                evt.goto(0);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan')) return 0.7;
                                        if (get.tag(card, 'respondSha')) return 0.7;
                                    },
                                },
                                order: 11,
                                respondShan: true,
                                respondSha: true,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                        },
                        sl_duwu: {
                            audio: 'ext:脑洞大开/audio:8',
                            enable: 'phaseUse',
                            filterCard() {
                                if (ui.selected.targets.length) return false;
                                return true;
                            },
                            position: 'he',
                            selectCard: [0, Infinity],
                            complexSelect: true,
                            complexCard: true,
                            filterTarget(card, player, target) {
                                return target != player && target.hp > 0 && player.inRange(target) && ui.selected.cards.length == target.hp - 1;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current != player && current.hp > 0 && player.inRange(current) && ui.selected.cards.length == current.hp && get.damageEffect(current, player, player) > 0;
                                    })
                                )
                                    return 0;
                                switch (ui.selected.cards.length) {
                                    case 0:
                                        return 8 - get.value(card);
                                    case 1:
                                        return 6 - get.value(card);
                                    case 2:
                                        return 3 - get.value(card);
                                    default:
                                        return 0;
                                }
                            },
                            content() {
                                player.addTempSkill('sl_duwu3');
                                player.discardPlayerCard(target, 'he', true);
                                target.damage('nocard');
                            },
                            ai: {
                                damage: true,
                                order: 2,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                threaten: 1.5,
                                expose: 0.3,
                            },
                        },
                        sl_duwu3: {
                            audio: 'sl_duwu',
                            trigger: {
                                global: 'dyingAfter',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            filter(event, player) {
                                return event.player.isAlive() && event.reason && event.reason.parent.name == 'sl_duwu';
                            },
                            content() {
                                player.draw();
                                player.loseHp();
                            },
                        },
                        sl_iehou2: {
                            audio: 'sl_liehou',
                            charlotte: true,
                            marktext: '侯',
                            intro: {
                                content: '兄弟齐心,其利断金!(本回合二吕可多出#张【杀】,手牌上限加#)',
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.countMark('sl_iehou2');
                                },
                                maxHandcard(player, num) {
                                    return num + player.countMark('sl_iehou2');
                                },
                            },
                        },
                        sl_kannan: {
                            audio: 'ext:脑洞大开/audio:2',
                            subSkill: {
                                add: {
                                    trigger: {
                                        player: 'compare',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.parent.name == 'sl_kannan' && event.num1 < 13;
                                    },
                                    content() {
                                        var num = 5 - (player.maxHp - player.hp);
                                        game.log(player, '的拼点牌点数+', num);
                                        trigger.num1 = Math.min(13, trigger.num1 + num);
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.hasSkill('xinfu_kannan_phase')) return false;
                                if (player.getStat().skill.sl_xinfu_kannan >= player.hp) return false;
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                if (target.hasSkill('xinfu_kannan_phase')) return false;
                                return player.canCompare(target);
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) + 0.4;
                                },
                                result: {
                                    target(player, target) {
                                        if (
                                            player.hasCard(function (card) {
                                                if (get.position(card) != 'h') return false;
                                                var val = get.value(card);
                                                if (val < 0) return true;
                                                if (val <= 5) {
                                                    return card.number >= 12;
                                                }
                                                if (val <= 6) {
                                                    return card.number >= 13;
                                                }
                                                return false;
                                            })
                                        )
                                            return -1;
                                        return 0;
                                    },
                                },
                            },
                            content() {
                                'step 0';
                                player.draw(player.maxHp - player.hp);
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    player.storage.kannan_eff++;
                                    if (!player.hasSkill('kannan_eff')) {
                                        player.addSkill('kannan_eff');
                                    } else {
                                        if (!player.storage.kannan_eff) player.storage.kannan_eff = 0;
                                    }
                                    player.markSkill('kannan_eff');
                                } else {
                                    target.addTempSkill('xinfu_kannan_phase');
                                    if (!target.hasSkill('kannan_eff')) {
                                        target.addSkill('kannan_eff');
                                    } else {
                                        if (!target.storage.kannan_eff) player.storage.kannan_eff = 0;
                                        //target.storage.kannan_eff++;
                                        //target.markSkill('kannan_eff');
                                    }
                                    target.storage.kannan_eff++;
                                    target.markSkill('kannan_eff');
                                }
                            },
                            group: ['sl_kannan_add'],
                        },
                        sl_zhengrong: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            audio: 'drlt_zhenrong',
                            filter(event, player) {
                                if (!event.isFirstTarget) return false;
                                if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                                if (get.tag(event.card, 'damage'))
                                    return game.hasPlayer(function (current) {
                                        return event.targets.includes(current) && current.countCards('he') > 0;
                                    });
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('sl_zhengrong'), '将一名目标角色的一张牌置于你的武将牌上,称为「荣」并摸一张牌', function (card, player, target) {
                                        return _status.event.targets.includes(target) && target.countCards('he') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return (1 - get.attitude(_status.event.player, target)) / target.countCards('he');
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = result.targets[0];
                                    player.choosePlayerCard(target, 'he', true).ai = get.buttonValue;
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    var card = result.links[0];
                                    player.addToExpansion(card, 'give', 'log', target).gaintag.add('sl_zhengrong');
                                    player.draw();
                                }
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            marktext: '荣',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                        },
                        sl_qingce: {
                            enable: 'phaseUse',
                            audio: 'drlt_qingce',
                            filter(event, player) {
                                return player.getExpansions('sl_zhengrong').length && player.countCards('h') > 0;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('请选择要获得的「荣」', player.getExpansions('sl_zhengrong'), 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        card: links[0],
                                        filterCard: true,
                                        position: 'h',
                                        selectTarget: [1, 2],
                                        filterTarget(card, player, target) {
                                            return player != target;
                                        },
                                        delay: false,
                                        audio: 'drlt_qingce',
                                        content: lib.skill.sl_qingce.contentx,
                                        ai: {
                                            result: {
                                                target(player, target) {
                                                    var att = get.attitude(player, target);
                                                    if (
                                                        att > 0 &&
                                                        (target.countCards('j') > 0 ||
                                                            target.countCards('e', function (card) {
                                                                return get.value(card, target) < 0;
                                                            }))
                                                    )
                                                        return 2;
                                                    if (att < 0 && target.countCards('e') > 0 && !target.hasSkillTag('noe')) return -1;
                                                    return 0;
                                                },
                                            },
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return `选择弃置一张手牌,获得${get.translation(links[0])}并弃置至多两名角色区域内的一张牌`;
                                },
                            },
                            contentx() {
                                'step 0';
                                var card = lib.skill.sl_qingce_backup.card;
                                player.gain(card, 'gain2', 'log');
                                ('step 1');
                                if (target.countDiscardableCards(player, 'hej') > 0) {
                                    player.discardPlayerCard('hej', true, target);
                                } else {
                                    player.draw();
                                    target.damage();
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                var att = get.attitude(player, current);
                                                if ((att > 0 && current.countCards('j') > 0) || (att < 0 && current.countCards('e') > 0) || (att < 0 && current.countCards('h') > 0)) return true;
                                                return false;
                                            })
                                        )
                                            return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        sl_hongju: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            audio: 'drlt_hongju',
                            forced: true,
                            juexingji: true,
                            derivation: 'sl_qingce',
                            filter(event, player) {
                                return player.getExpansions('sl_zhengrong').length >= player.hp * 2 && game.dead.length;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('sl_hongju');
                                player.draw(player.getExpansions('sl_zhengrong').length);
                                ('step 1');
                                if (player.countCards('h') == 0) event.goto(3);
                                else {
                                    var dialog = ['请选择要交换的手牌和「荣」,或点「取消」', '<div class="text center">「征荣」牌</div>', player.getExpansions('sl_zhengrong'), '<div class="text center">手牌区</div>', player.getCards('h')];
                                    var next = player.chooseButton(dialog);
                                    next.set('filterButton', function (button) {
                                        var ss = _status.event.player.getExpansions('sl_zhengrong');
                                        var hs = _status.event.player.getCards('h');
                                        var sn = 0;
                                        var hn = 0;
                                        var ub = ui.selected.buttons;
                                        for (var i = 0; i < ub.length; i++) {
                                            if (ss.includes(ub[i].link)) sn++;
                                            else hn++;
                                        }
                                        return !((sn >= hs.length && ss.includes(button.link)) || (hn >= ss.length && hs.includes(button.link)));
                                    });
                                    next.set('selectButton', function () {
                                        if (ui.selected.buttons.length == 0) return 2;
                                        var ss = _status.event.player.getExpansions('sl_zhengrong');
                                        var hs = _status.event.player.getCards('h');
                                        var sn = 0;
                                        var hn = 0;
                                        var ub = ui.selected.buttons;
                                        for (var i = 0; i < ub.length; i++) {
                                            if (ss.includes(ub[i].link)) sn++;
                                            else hn++;
                                        }
                                        if (sn != hn) return 2 * Math.max(sn, hn);
                                        else {
                                            if (sn == ss.length || hn == hs.length || sn == hs.length || hn == ss.length) return ub.length;
                                            return [ub.length, ub.length + 1];
                                        }
                                    });
                                    next.set('ai', function () {
                                        return -1;
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    var gains = [];
                                    var pushs = [];
                                    var expansions = player.getExpansions('sl_zhengrong');
                                    for (var i of result.links) {
                                        var card = i;
                                        if (expansions.includes(card)) gains.push(card);
                                        else pushs.push(card);
                                    }
                                    player.addToExpansion(pushs, player, 'give').gaintag.add('sl_zhengrong');
                                    player.gain(gains, 'gain2');
                                }
                                ('step 3');
                                player.addSkill('sl_qingce');
                                game.log(player, '获得了技能', '#g【清侧】');
                                player.loseMaxHp();
                            },
                        },
                        sl_sidi: {
                            audio: 'ext:脑洞大开/audio:4',
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return player != current && (!player.storage.sl_sidi || !player.storage.sl_sidi.includes(current));
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('sl_sidi'), '选择一名角色A与角色B建立A,B关系,或仅选择一名角色,其一人同时成为A与B,A使用牌指定B为目标时,触发效果', [1, 2], function (card, player, target) {
                                        if (ui.selected.targets.length) return true;
                                        return target != player && (!player.storage.sl_sidi || !player.storage.sl_sidi.includes(target));
                                    })
                                    .set('complexTarget', true)
                                    .set('complexSelect', true)
                                    .set('targetprompt', ['A&b', 'B'])
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (!ui.selected.targets.length) {
                                            if (target.getEnemies().length == 1) return 2 + Math.random();
                                            return 1 + Math.random();
                                        }
                                        var targetx = ui.selected.targets[0];
                                        if (targetx.getEnemies().includes(target) && targetx.inRange(target)) return Math.random() - 0.5;
                                        return 0;
                                    }).animate = false;
                                ('step 1');
                                if (result.bool && result.targets.length) {
                                    var targets = result.targets;
                                    if (targets.length == 1) targets.push(targets[0]);
                                    if (!player.storage.sl_sidi) player.storage.sl_sidi = [];
                                    if (!player.storage.sl_sidi2) player.storage.sl_sidi2 = [];
                                    player.storage.sl_sidi.push(targets[0]);
                                    player.storage.sl_sidi2.push(targets[1]);
                                    player.markSkill('sl_sidi');
                                }
                            },
                            intro: {
                                content(storage, player) {
                                    if ((player == game.me || player.iscardUnderControl()) && !game.observe) {
                                        var str = '在AB关系圈中={ ';
                                        for (var i = 0; i < storage.length; i++) {
                                            str += `A是${get.translation(storage[i])},${get.translation(player.storage.sl_sidi2[i])}是其的关系B`;
                                            if (i < storage.length - 1) str += '||';
                                        }
                                        str += ' }';
                                        return str;
                                    }
                                    return get.translation(storage);
                                },
                            },
                            onremove(player) {
                                delete player.storage.sl_sidi;
                                delete player.storage.sl_sidi2;
                            },
                            group: ['sl_sidi_clear', 'sl_sidi_exec', 'sl_sidi_ls', 'sl_sidi2'],
                            subSkill: {
                                clear: {
                                    audio: 'sl_sidi',
                                    trigger: {
                                        global: ['useCardAfter', 'die'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.sl_sidi && player.storage.sl_sidi.includes(event.player);
                                    },
                                    content() {
                                        player.storage.sl_sidi2.splice(player.storage.sl_sidi.indexOf(trigger.player));
                                        player.unmarkAuto('sl_sidi', [trigger.player]);
                                    },
                                },
                                exec: {
                                    audio: 'sl_sidi',
                                    trigger: {
                                        global: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.storage.sl_sidi) return false;
                                        var index = player.storage.sl_sidi.indexOf(event.player);
                                        return index != -1 && player.storage.sl_sidi2[index] == event.target;
                                    },
                                    logTarget: 'player',
                                    content() {
                                        'step 0';
                                        player.storage.sl_sidi2.splice(player.storage.sl_sidi.indexOf(trigger.player));
                                        player.unmarkAuto('sl_sidi', [trigger.player]);
                                        if (trigger.target == player) {
                                            var target = trigger.player;
                                            player.discardPlayerCard(target, 'he');
                                            player.draw();
                                            event.finish();
                                            return;
                                        }
                                        var target = trigger.player;
                                        event.target = target;
                                        player
                                            .chooseControl('cancel2')
                                            .set('choiceList', [`取消${get.translation(trigger.card)}的所有目标并对${get.translation(target)}造成1点伤害`, `摸两张牌,可以弃置${get.translation(target)}一张牌`])
                                            .set('ai', function () {
                                                var player = _status.event.player,
                                                    evt = _status.event.getTrigger();
                                                if (get.damageEffect(evt.player, player, player) > 0 && get.effect(evt.target, evt.card, evt.player, player) < 0) return 0;
                                                return 1;
                                            });
                                        ('step 1');
                                        if (result.index == 0) {
                                            trigger.cancel();
                                            trigger.targets.length = 0;
                                            trigger.parent.triggeredTargets1.length = 0;
                                            target.damage();
                                        } else if (result.index == 1) {
                                            player.draw(2);
                                            player.discardPlayerCard(target, 'he');
                                        }
                                    },
                                },
                            },
                        },
                        sl_zhaoran: {
                            audio: 'ext:脑洞大开/audio:4',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            preHidden: true,
                            content() {
                                player.addTempSkill('sl_zhaoran2', 'phaseUseEnd');
                            },
                        },
                        sl_zhaoran2: {
                            audio: 'sl_zhaoran',
                            global: 'zhaoran3',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            charlotte: true,
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            filter(event, player) {
                                var evt = event.getl(player);
                                if (!evt || !evt.hs || !evt.hs.length) return false;
                                var list = player.getStorage('zhaoran2');
                                for (var i of evt.hs) {
                                    var suit = i.suit;
                                    if (!list.includes(suit) && !player.countCards('h', { suit: suit })) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                var suits = get.copy(player.storage.sl_zhaoran2);
                                suits.addArray(
                                    player.getCards('h').map(function (card) {
                                        return card.suit;
                                    })
                                );
                                var evt = trigger.getl(player);
                                for (var i of evt.hs) {
                                    var suit = i.suit;
                                    if (!suits.includes(suit)) list.add(suit);
                                }
                                event.count = list.length;
                                ('step 1');
                                event.count--;
                                var filterTarget = function (card, player, target) {
                                    return target != player && target.countDiscardableCards(player, 'he') > 0;
                                };
                                if (
                                    !game.hasPlayer(function (current) {
                                        return filterTarget(null, player, current);
                                    })
                                )
                                    event._result = { bool: false };
                                else
                                    player.chooseTarget(filterTarget, '弃置一名其他角色的一张牌或摸一张牌').set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (att >= 0) return 0;
                                        if (
                                            target.countCards('he', function (card) {
                                                return get.value(card) > 5;
                                            })
                                        )
                                            return -att;
                                        return 0;
                                    });
                                ('step 2');
                                if (!result.bool) player.draw();
                                else {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    player.discardPlayerCard(target, true, 'he');
                                }
                                if (event.count > 0) event.goto(1);
                            },
                        },
                        sl_tuishi: {
                            audio: 'ext:脑洞大开/audio:4',
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            forced: true,
                            content() {
                                player.addTempSkill('sl_tuishi2');
                            },
                        },
                        sl_tuishi2: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            audio: 'sl_tuishi',
                            forced: true,
                            filter(event, player) {
                                var target = _status.currentPhase;
                                return (
                                    target &&
                                    target.isAlive() &&
                                    game.hasPlayer(function (current) {
                                        return current != target && target.inRange(current);
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    function (card, player, target) {
                                        return player != target;
                                    },
                                    function (target) {
                                        var player = get.player();
                                        return -get.attitude(player, target);
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.gainPlayerCard(target, true, 'he');
                                    player.discardPlayerCard(target, true, 'he');
                                }
                                ('step 2');
                                var target = _status.currentPhase;
                                event.target = target;
                                player
                                    .chooseTarget(get.prompt2('sl_tuishi', event.target), function (card, player, target) {
                                        var source = _status.event.source;
                                        return source != target && source.inRange(target);
                                    })
                                    .set('source', target)
                                    .set('goon', get.damageEffect(target, player, player) > 0)
                                    .set('ai', function (target) {
                                        if (!_status.event.goon) return 0;
                                        var evt = _status.event;
                                        return get.effect(target, { name: 'sha' }, evt.source, evt.player);
                                    });
                                ('step 3');
                                if (result.bool) {
                                    event.target2 = result.targets[0];
                                    player.line2([target, event.target2]);
                                } else event.finish();
                                ('step 4');
                                target.chooseToUse({
                                    preTarget: event.target2,
                                    prompt: `请对${get.translation(event.target2)}使用一张【杀】,${get.translation(player)}可以获得你一张牌,或受到来自${get.translation(player)}的一点伤害,其可以弃置一张牌`,
                                    filterCard(card, player) {
                                        return card.name == 'sha' && lib.filter.filterCard.apply(this, arguments);
                                    },
                                    filterTarget(card, player, target) {
                                        return target == _status.event.preTarget && lib.filter.filterTarget.apply(this, arguments);
                                    },
                                    addCount: false,
                                });
                                ('step 5');
                                if (!result.bool) {
                                    target.damage();
                                    player.discardPlayerCard(target, 'he');
                                } else player.gainPlayerCard(target, 'he');
                            },
                            ai: {
                                order: 1,
                            },
                        },
                        sl_choufa: {
                            group: 'sl_choufa2',
                            audio: 'ext:脑洞大开/audio:2',
                            inherit: 'choufa',
                            content() {
                                'step 0';
                                player.choosePlayerCard(target, 'h', true, 'visible');
                                ('step 1');
                                player.showCards(result.cards, get.translation(player) + `对${get.translation(target)}发动了【筹伐】`);
                                var type = get.type2(result.cards[0], target),
                                    hs = target.getCards('h', function (card) {
                                        return card != result.cards[0] && get.type2(card, target) != type;
                                    });
                                if (hs.length) {
                                    target.addGaintag(hs, 'xinchoufa');
                                    target.addTempSkill('xinchoufa2', { player: 'phaseAfter' });
                                }
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return lib.skill.choufa.filterTarget(null, player, current);
                                });
                            },
                            filterTarget(card, player, target) {
                                return target != player && !target.hasSkill('sl_choufa2') && target.countCards('h') > 0;
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return -target.countCards('h');
                                    },
                                },
                            },
                        },
                        sl_choufa2: {
                            audio: 'sl_choufa',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw();
                                player.chooseTarget(
                                    '选择一名其他角色,弃置其一张牌并视为对其使用一张【杀】',
                                    function (card, player, target) {
                                        return player != target;
                                    },
                                    function (target) {
                                        var player = get.player();
                                        return -get.attitude(player, target);
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.discardPlayerCard(target, true, 'he', 'visible');
                                    player.canUse({ name: 'sha' }, target, false);
                                    player.useCard({ name: 'sha' }, target, false);
                                    target.addMark('sl_choufa3', 1, false);
                                    target.addTempSkill('sl_choufa3', { player: 'phaseAfter' });
                                } else player.draw();
                            },
                            ai: {
                                order: 7,
                            },
                        },
                        sl_choufa3: {
                            charlotte: true,
                            intro: {
                                content: '司马昭:小比崽子我看你是没见过大军压境奥,我告诉你,到洛阳了,别让我看见你,要让我看见你,指定没有你好果子吃奥,必须伐你,必打你脸!(此角色手牌上限-2,使用【杀】时需弃置一张牌,造成伤害后失去一点体力).好名:🐶卡奥,我看你是真的没🐴,你是真行啊,马上就给你嫖到倒闭,必打你脸!',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num -= 2);
                                },
                            },
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            content() {
                                player.chooseToDiscard('he', 1, true);
                            },
                            group: 'sl_choufa3_lose',
                            subSkill: {
                                lose: {
                                    forced: true,
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    content() {
                                        player.loseHp();
                                    },
                                },
                            },
                            ai: {
                                order: -1,
                            },
                        },
                        sl_chengwu: {
                            audio: 'ext:脑洞大开/audio:4',
                            global: 'sl_chengwu2',
                            zhuSkill: true,
                            mod: {
                                inRange(from, to) {
                                    if (!from.hasZhuSkill('sl_chengwu') || from._sl_chengwu) return;
                                    from._chengwu = true;
                                    var bool = game.hasPlayer(function (current) {
                                        return current != from && current != to && current.group == 'jin' && from.hasZhuSkill('sl_chengwu', current) && current.inRange(to);
                                    });
                                    delete from._chengwu;
                                    if (bool) return true;
                                },
                            },
                        },
                        sl_chengwu2: {
                            audio: 'sl_chengwu',
                            enable: 'phaseUse',
                            discard: false,
                            lose: false,
                            delay: false,
                            line: true,
                            forced: true,
                            clearTime: true,
                            prepare(cards, player, targets) {
                            },
                            prompt() {
                                var player = _status.event.player;
                                var list = game.filterPlayer(function (target) {
                                    return target != player && target.hasZhuSkill('sl_chengwu', player);
                                });
                                var str = '将一张基本牌或锦囊牌交给' + get.translation(list);
                                if (list.length > 1) str += '中的一人';
                                return str;
                            },
                            filter(event, player) {
                                if (player.group != 'jin') return false;
                                if (player.countCards('h', lib.skill.sl_chengwu2.filterCard) == 0) return false;
                                return game.hasPlayer(function (target) {
                                    return target != player && target.hasZhuSkill('sl_chengwu', player) && !target.hasSkill('sl_chengwu3');
                                });
                            },
                            filterCard(card) {
                                var type = get.type(card);
                                return type == 'basic' || type == 'trick';
                            },
                            log: false,
                            visible: true,
                            filterTarget(card, player, target) {
                                return target.hasZhuSkill('sl_chengwu', player) && !target.hasSkill('sl_chengwu3');
                            },
                            content() {
                                target.gain(cards, player, 'giveAuto');
                                player.chooseDrawRecover(2, true, function (event, player) {
                                    if (player.hp == 1 && player.isDamaged()) return 'recover_hp';
                                    return 'draw_card';
                                });
                                player.addMark('sl_chengwu3', 1, false);
                                player.addTempSkill('sl_chengwu3', 'phaseUseEnd');
                                target.addTempSkill('sl_chengwu3', 'phaseUseEnd');
                            },
                            ai: {
                                expose: 0.3,
                                order: 9,
                                result: {
                                    target: 5,
                                },
                            },
                        },
                        sl_chengwu3: {
                            charlotte: true,
                            intro: {
                                content: '使用【杀】时摸一张牌,感谢晋主的恩惠吧',
                            },
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        sl_sidi_ls: {
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            forced: true,
                            audio: 'sl_sidi',
                            filter(event, player) {
                                return (
                                    player.countCards('he', function (card) {
                                        if (_status.connectMode) return true;
                                        return get.type(card) != 'basic';
                                    }) > 0
                                );
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard([1, 3], 'he', get.prompt('sl_sidi_ls'), '将至多三张非基本牌置于武将牌上作为<司>', function (card, player) {
                                        return get.type(card) != 'basic';
                                    })
                                    .set('ai', function (card) {
                                        if (get.position(card) == 'e') return 5 + player.hp - get.value(card);
                                        return 7 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.addToExpansion(result.cards, 'give', player).gaintag.add('sl_sidi_ls');
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
                            group: 'sl_sidi2',
                            ai: {
                                notemp: true,
                            },
                        },
                        sl_sidi2: {
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && player.getExpansions('sl_sidi_ls').length;
                            },
                            content() {
                                'step 0';
                                player.chooseButton([get.prompt('sl_sidi_ls', trigger.player), player.getExpansions('sl_sidi_ls')]).set('ai', function (button) {
                                    var player = _status.event.player;
                                    var target = _status.event.getTrigger().player;
                                    if (get.attitude(player, target) > -1) return 0;
                                    var card = button.link;
                                    var color = get.color(button.link, false);
                                    var eff = target.countCards('h', function (card) {
                                        return get.color(card, target) == color && target.hasValueTarget(card);
                                    });
                                    if (
                                        !target.countCards('h', function (card) {
                                            return get.color(card, target) == color && card.name == 'sha' && target.hasValueTarget(card);
                                        })
                                    )
                                        eff += 1.5;
                                    if (
                                        !target.countCards('h', function (card) {
                                            return get.color(card, target) == color && get.type2(card, target) == 'trick' && target.hasValueTarget(card);
                                        })
                                    )
                                        eff += 1.5;
                                    return eff - 1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    if (!trigger.sl_sidi) trigger.sl_sidi = [];
                                    trigger.sl_sidi.push(player);
                                    var card = result.links[0];
                                    var target = trigger.player;
                                    player.loseToDiscardpile(card);
                                    var color = get.color(card, false);
                                    if (!target.storage.ls_sidi1) target.storage.ls_sidi1 = [];
                                    target.storage.ls_sidi1.add(color);
                                    target.addTempSkill('ls_sidi1', 'phaseAfter');
                                    target.markSkill('ls_sidi1');
                                    player.addTempSkill('ls_sidi2', 'phaseAfter');
                                }
                            },
                        },
                        ls_sidi1: {
                            mod: {
                                maxHandcard(player, num) {
                                    return (num -= 1);
                                },
                                cardEnabled2(card, player) {
                                    if (player.getStorage('ls_sidi1').includes(get.color(card, player))) return false;
                                },
                            },
                            intro: {
                                content: '被困其中,寸步难行:不能使用$牌且手牌上限-1',
                            },
                            marktext: '敌',
                        },
                        ls_sidi2: {
                            audio: 'sl_sidi',
                            trigger: {
                                global: 'phaseUseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.sl_sidi || !event.sl_sidi.includes(player)) return false;
                                var sha = player.canUse('sha', event.player, false),
                                    trick = true;
                                event.player.getHistory('useCard', function (evt) {
                                    if (evt.getParent('phaseUse') != event) return false;
                                    if (sha && evt.card.name == 'sha') sha = false;
                                    if (trick && get.type2(evt.card, false) == 'trick') trick = false;
                                });
                                return sha || trick;
                            },
                            content() {
                                var sha = player.canUse('sha', trigger.player, false),
                                    trick = true;
                                trigger.player.getHistory('useCard', function (evt) {
                                    if (evt.getParent('phaseUse') != trigger) return false;
                                    if (sha && evt.card.name == 'sha') sha = false;
                                    if (trick && get.type2(evt.card, false) == 'trick') trick = false;
                                });
                                if (sha) {
                                    player.useCard({ name: 'sha' }, trigger.player);
                                    player.draw();
                                }
                                if (trick) player.draw(1);
                            },
                        },
                        sl_jintao: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return (num += Infinity);
                                },
                                targetInRange(card) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            audio: 'jintao',
                            forced: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            filter(event, player) {
                                return !player.hasSkill('sl_jintao3');
                            },
                            content() {
                                player.draw(1 + (player.maxHp - player.hp));
                            },
                            group: 'sl_jintao_2',
                            subSkill: {
                                2: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.card.name != 'sha') return false;
                                        var evt = event.getParent('phaseUse');
                                        if (!evt || evt.player != player) return false;
                                        var index = player
                                            .getHistory('useCard', function (evtx) {
                                                return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
                                            })
                                            .indexOf(event);
                                        return index == 0 || index == 1;
                                    },
                                    content() {
                                        var evt = trigger.getParent('phaseUse');
                                        var index = player
                                            .getHistory('useCard', function (evtx) {
                                                return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
                                            })
                                            .indexOf(trigger);
                                        if (index == 0) {
                                            game.log(trigger.card, '伤害+1');
                                            if (typeof trigger.baseDamage != 'number') trigger.baseDamage = 1;
                                            trigger.baseDamage += 1;
                                        } else {
                                            player.addTempSkill('sl_jintao3');
                                        }
                                    },
                                },
                            },
                        },
                        sl_jintao3: {
                            audio: 'jintao',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (typeof trigger.baseDamage != 'number') trigger.baseDamage = 1;
                                trigger.baseDamage++;
                                ('step 1');
                                trigger.directHit.addArray(game.players);
                            },
                        },
                        sl_xuanfeng: {
                            audio: 'ext:脑洞大开/audio:4',
                            trigger: {
                                player: ['loseAfter', 'phaseDiscardEnd'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'phaseDiscard') {
                                    var cards = [];
                                    player.getHistory('lose', function (evt) {
                                        if (evt && evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.hs) cards.addArray(evt.hs);
                                    });
                                    return cards.length;
                                } else {
                                    var evt = event.getl(player);
                                    return evt && evt.es && evt.es.length;
                                }
                            },
                            content() {
                                'step 0';
                                event.count = 2;
                                ('step 1');
                                player
                                    .chooseTarget(get.prompt('sl_xuanfeng'), '弃置一名其他角色的至多两张牌', function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countDiscardableCards(player, 'he');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets[0], 'green');
                                    player.gainPlayerCard(result.targets[0], true, 'he', 'visible');
                                    event.count--;
                                } else event.finish();
                                ('step 3');
                                if (event.count) event.goto(1);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                    },
                                },
                                reverseEquip: true,
                                noe: true,
                            },
                        },
                        sl_jiang: {
                            charlotte: true,
                            shaRelated: true,
                            audio: 'ext:脑洞大开/audio:6',
                            audioname2: {
                                sl_sunce: ['sl_jiang_sl_sunce'],
                                sl_re_sunyi: ['sl_jiang_sl_re_sunyi'],
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    filter(event, player) {
                                        if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'red'))) return false;
                                        return player == event.target || event.parent.triggeredTargets3.length == 1;
                                    },
                                    forced: true,
                                    content() {
                                        if (player.hasSkill('sl_jiqiao')) {
                                            var cards = get.cards(2);
                                            player.addToExpansion(cards, 'gain2').gaintag.add('sl_jiqiao');
                                            player.addTempSkill('sl_jiqiao_gain', 'phaseUseAfter');
                                        }
                                        if (player.hasSkill('dangjiang')) {
                                            player.draw();
                                            trigger.directHit.addArray(game.players);
                                        }
                                    },
                                },
                                sl_sunce: {
                                    audio: 'ext:脑洞大开/audio:6',
                                },
                                sl_re_sunyi: {
                                    audio: 'ext:脑洞大开/audio:2',
                                },
                            },
                            preHidden: true,
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'red'))) return false;
                                return player == event.target || event.parent.triggeredTargets3.length == 1;
                            },
                            prompt2: '摸一张牌,若本次触发〖激昂〗是因为使用,则若此时你为:孙策;你再摸一张牌且此【杀】/【决斗】不可被响应.孙翊;你将牌堆顶的1+Y-2张牌置于武将牌上(可触发〖激峭〗).',
                            forced: true,
                            content() {
                                player.draw();
                                player.addTempSkill('sl_jiang_draw', 'useCard');
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.6];
                                    },
                                    player(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
                                    },
                                },
                            },
                        },
                        sl_yingzi: {
                            audio: 'ext:脑洞大开/audio:6',
                            audioname2: {
                                sl_sunce: ['sl_yingzi_sl_sunce'],
                                sl_re_sunyi: ['sl_yingzi_sl_re_sunyi'],
                            },
                            subSkill: {
                                sl_sunce: {
                                    audio: 'ext:脑洞大开/audio:6',
                                },
                                sl_re_sunyi: {
                                    audio: 'ext:脑洞大开/audio:2',
                                },
                            },
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num += 1 + player.maxHp - (player.maxHp - player.hp);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp;
                                },
                            },
                        },
                        sl_hunzi: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                            audio: 'ext:脑洞大开/audio:4',
                            audioname2: {
                                sl_sunce: ['sl_hunzi_sl_sunce'],
                                sl_re_sunyi: ['sl_hunzi_sl_re_sunyi'],
                            },
                            subSkill: {
                                sl_sunce: {
                                    audio: 'ext:脑洞大开/audio:4',
                                },
                                sl_re_sunyi: {
                                    audio: 'ext:脑洞大开/audio:4',
                                },
                            },
                            juexingji: true,
                            derivation: ['sl_yingzi', 'sl_yinghun'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.hp <= 2 && !player.storage.hunzi;
                            },
                            forced: true,
                            content() {
                                player.loseMaxHp();
                                player.addSkill('sl_yingzi');
                                player.addSkill('sl_yinghun');
                                game.log(player, '获得了技能', '#g【英姿】和【英魂】');
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 2;
                                    return 0.5;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                    },
                                },
                            },
                        },
                        sl_yinghun: {
                            audio: 'ext:脑洞大开/audio:6',
                            audioname2: {
                                sl_sunce: ['sl_yinghun_sl_sunce'],
                                sl_re_sunyi: ['sl_yinghun_sl_re_sunyi'],
                            },
                            subSkill: {
                                sl_sunce: {
                                    audio: 'ext:脑洞大开/audio:6',
                                },
                                sl_re_sunyi: {
                                    audio: 'ext:脑洞大开/audio:2',
                                },
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('sl_yinghun'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (player.maxHp - player.hp == 1 && target.countCards('he') == 0) {
                                            return 0;
                                        }
                                        if (get.attitude(_status.event.player, target) > 0) {
                                            return 10 + get.attitude(_status.event.player, target);
                                        }
                                        if (player.maxHp - player.hp == 1) {
                                            return -1;
                                        }
                                        return 1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.num = player.maxHp - player.hp;
                                    if (player.countCards('e') >= player.hp) {
                                        event.num = player.maxHp;
                                    }
                                    event.target = result.targets[0];
                                    if (event.num == 1) {
                                        event.directcontrol = true;
                                    } else {
                                        var str1 = `摸${get.cnNumber(event.num, true)}弃一`;
                                        var str2 = '摸一弃' + get.cnNumber(event.num, true);
                                        player
                                            .chooseControl(str1, str2, function (event, player) {
                                                return _status.event.choice;
                                            })
                                            .set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
                                        event.str = str1;
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.directcontrol || result.control == event.str) {
                                    event.target.draw(event.num);
                                    event.target.chooseToDiscard(true, 'he');
                                } else {
                                    event.target.draw();
                                    event.target.chooseToDiscard(event.num, true, 'he');
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1 || target.countCards('e') >= target.hp) return 2;
                                    if (target.hp == target.maxHp) return 0.5;
                                    if (target.hp == 2) return 1.5;
                                    return 0.5;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (target.maxHp <= 3) return;
                                        if (get.tag(card, 'damage')) {
                                            if (target.hp == target.maxHp) return [0, 1];
                                        }
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                                    },
                                },
                            },
                        },
                        dangjiang: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:脑洞大开/audio:4',
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.draw(target.hp);
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    target.damage();
                                }
                                if (result.bool == false) {
                                    var list = [];
                                    if (get.position(result.player) == 'd') list.push(result.player);
                                    if (get.position(result.target) == 'd') list.push(result.target);
                                    if (!list.length) event.finish();
                                    else {
                                        event.list = list;
                                        player.chooseBool(`是否获得${get.translation(list)}？`).ai = function () {
                                            return get.value(list) > 0;
                                        };
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.gain(event.list, 'gain2');
                                }
                            },
                        },
                        sl_mingzhe: {
                            audio: 'ext:脑洞大开/audio:6',
                            group: 'sl_mingzhe_use',
                            trigger: {
                                player: ['useCard', 'respond', 'loseAfter'],
                            },
                            usable: 2,
                            forced: true,
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                if (event.name != 'lose') return get.color(event.card) == 'red';
                                if (event.type != 'discard') return false;
                                if (event.cards2) {
                                    for (var i = 0; i < event.cards2.length; i++) {
                                        if (get.color(event.cards2[i], player) == 'red') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.count = 1;
                                if (trigger.name == 'lose') {
                                    event.count = 0;
                                    for (var i = 0; i < trigger.cards2.length; i++) {
                                        if (get.color(trigger.cards2[i], player) == 'red') event.count++;
                                    }
                                }
                                ('step 1');
                                player.draw(1);
                                event.count--;
                                ('step 2');
                                if (event.count) {
                                    player.chooseBool(get.prompt2('sl_mingzhe')).set('frequentSkill', 'sl_mingzhe');
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                threaten: 0.7,
                            },
                        },
                        sl_mingzhe_use: {
                            audio: 'sl_mingzhe',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!player.countCards('hes') || player.hasSkill('sl_mingzhe_lose')) return false;
                                for (var i of lib.inpile) {
                                    var type = get.type2(i);
                                    if ((type == 'basic' || type == 'trick') && lib.filter.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
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
                                        } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                    }
                                    return ui.create.dialog('明哲', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
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
                                        filterCard(card, player) {
                                            if (get.zhu(player, 'shouyue')) return true;
                                            return get.color(card) == 'red';
                                        },
                                        audio: 'sl_mingzhe',
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.addTempSkill('sl_mingzhe_lose');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用并摸X-1张牌,失去一点体力';
                                },
                            },
                            hiddenCard(player, name) {
                                var type = get.type2(name);
                                return (type == 'basic' || type == 'trick') && player.countCards('hes') > 0 && !player.hasSkill('sl_mingzhe_lose');
                            },
                            ai: {
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('hes') || player.hasSkill('sl_mingzhe_lose')) return false;
                                },
                                order: 9,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 9;
                                    },
                                },
                            },
                        },
                        sl_mingzhe_lose: {
                            trigger: {
                                player: 'useCardEnd',
                            },
                            usable: 1,
                            forced: true,
                            content() { },
                        },
                        sl_hongyuan: {
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            audio: 'ext:脑洞大开/audio:6',
                            filter(event, player) {
                                return !event.numFixed && event.num > 0;
                            },
                            content() {
                                'step 0';
                                var check;
                                if (player.countCards('h') == 0) {
                                    check = false;
                                } else {
                                    check =
                                        game.countPlayer(function (current) {
                                            return player != current && get.attitude(player, current) > 1;
                                        }) >= 2;
                                }
                                if (get.is.versus()) {
                                    event.versus = true;
                                    player.chooseBool(get.prompt2('sl_hongyuan')).ai = function () {
                                        return (
                                            game.countPlayer(function (current) {
                                                return player.side == current.side;
                                            }) > 2
                                        );
                                    };
                                } else {
                                    player
                                        .chooseTarget(
                                            get.prompt2('sl_hongyuan'),
                                            [1, Infinity],
                                            function (card, player, target) {
                                                return player != target;
                                            },
                                            function (target) {
                                                if (!_status.event.check) return 0;
                                                return get.attitude(_status.event.player, target);
                                            }
                                        )
                                        .set('check', check);
                                }
                                ('step 1');
                                if (result.bool) {
                                    var targets;
                                    if (event.versus) {
                                        targets = game.filterPlayer(function (current) {
                                            return current != player && current.side == player.side;
                                        });
                                    } else {
                                        targets = result.targets;
                                    }
                                    game.asyncDraw(targets);
                                    trigger.num--;
                                    player.addTempSkill('sl_hongyuan_draw', 'phaseDrawBegin2');
                                }
                            },
                            subSkill: {
                                draw: {
                                    audio: 'sl_hongyuan',
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    filter(event, player) {
                                        return player.hp < player.maxHp;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        sl_huanshi: {
                            audio: 'ext:脑洞大开/audio:6',
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (get.attitude(player, event.player) <= 0) return false;
                                var cards = player.getCards('he');
                                var judge = event.judge(event.player.judging[0]);
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        var judge2 = event.judge(i);
                                        if (judge2 > judge) return true;
                                        if (_status.currentPhase != player && judge2 == judge && get.color(i) == 'red' && get.useful(i) < 5) return true;
                                    }
                                return false;
                            },
                            content() {
                                'step 0';
                                var target = trigger.player;
                                var judge = trigger.judge(target.judging[0]);
                                game.asyncDraw([player, target]);
                                var attitude = get.attitude(target, player);
                                target
                                    .choosePlayerCard('请选择代替判定的牌', 'he', 'visible', true, player)
                                    .set('ai', function (button) {
                                        var card = button.link;
                                        var judge = _status.event.judge;
                                        var attitude = _status.event.attitude;
                                        var result = trigger.judge(card) - judge;
                                        var player = _status.event.player;
                                        if (result > 0) {
                                            return 20 + result;
                                        }
                                        if (result == 0) {
                                            if (_status.currentPhase == player) return 0;
                                            if (attitude >= 0) {
                                                return get.color(card) == 'red' ? 7 : 0 - get.value(card);
                                            } else {
                                                return get.color(card) == 'black' ? 10 : 0 + get.value(card);
                                            }
                                        }
                                        if (attitude >= 0) {
                                            return get.color(card) == 'red' ? 0 : -10 + result;
                                        } else {
                                            return get.color(card) == 'black' ? 0 : -10 + result;
                                        }
                                    })
                                    .set('filterButton', function (button) {
                                        var player = _status.event.target;
                                        var card = button.link;
                                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') return mod2;
                                        var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                        if (mod != 'unchanged') return mod;
                                        return true;
                                    })
                                    .set('judge', judge)
                                    .set('attitude', attitude);
                                ('step 1');
                                if (result.bool) {
                                    event.card = result.links[0];
                                    player.respond(event.card, 'highlight').nopopup = true;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
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
                                    trigger.player.judging[0] = event.card;
                                    trigger.orderingCards.add(event.card);
                                    game.log(trigger.player, '的判定牌改为', event.card);
                                }
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        hmxzq: {
                            trigger: {
                                player: ['loseAfter', 'drawEnd'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') >= 20;
                            },
                            content() {
                                player.chooseToDiscard('h', true, 10);
                            },
                        },
                        sl_fengji: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.numFixed;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('丰积:请选择增加摸牌的目标', '令自己本回合的摸牌数减少,且目标下回合的摸牌数增加.或者点击「取消」,令自己的摸牌数增加', lib.filter.notMe)
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (target.hasJudge('lebu') || target.hasJudge('bingliang')) return 0;
                                        var att = get.attitude(player, target),
                                            dist = get.distance(player, target, 'absolute');
                                        if (_status.event.goon) {
                                            return att / dist;
                                        }
                                        if (
                                            game.countPlayer(function (current) {
                                                return current != player && current != target && get.attitude(player, current) < 0 && get.distance(player, current, 'absolute') < dist;
                                            }) >= target.hp
                                        )
                                            return 0;
                                        return att / dist;
                                    })
                                    .set('goon', player.skipList.includes('lebu'));
                                ('step 1');
                                if (!player.storage.sl_fengji_draw) player.storage.sl_fengji_draw = 0;
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'thunder');
                                    player.storage.sl_fengji_draw--;
                                    if (!target.storage.sl_fengji_draw) target.storage.sl_fengji_draw = 0;
                                    target.storage.sl_fengji_draw += Math.ceil(target.maxHp / 2);
                                    target.addTempSkill('sl_fengji_draw', { player: 'phaseAfter' });
                                    target.markSkill('sl_fengji_draw');
                                } else {
                                    player.storage.sl_fengji_draw += Math.ceil(player.maxHp / 2);
                                }
                                player.addTempSkill('sl_fengji_draw');
                                player.markSkill('sl_fengji_draw');
                                ('step 2');
                                player.chooseTarget('丰积:请选择增加使用杀次数的目标', '令自己本回合使用杀的次数减少,且目标下回合使用杀的次数增加.或者点击「取消」,令自己使用杀的次数增加', lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (target.countMark('sl_fengji_draw') > 0 && target.getCardUsable('sha') < 2) return get.attitude(player, target);
                                    return 0;
                                });
                                ('step 3');
                                if (!player.storage.sl_fengji_sha) player.storage.sl_fengji_sha = 0;
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'fire');
                                    player.storage.sl_fengji_sha--;
                                    if (!target.storage.sl_fengji_sha) target.storage.sl_fengji_sha = 0;
                                    target.storage.sl_fengji_sha += Math.floor(target.maxHp / 2);
                                    target.addTempSkill('sl_fengji_sha', { player: 'phaseAfter' });
                                    target.markSkill('sl_fengji_sha');
                                } else {
                                    player.storage.sl_fengji_sha += Math.ceil(player.maxHp / 2) - 1;
                                }
                                player.addTempSkill('sl_fengji_sha');
                                player.markSkill('sl_fengji_sha');
                            },
                            group: 'sl_fengji_plaget',
                            subSkill: {
                                plaget: {
                                    prompt2: '摸一张牌,可以将一张牌交给一名其他角色,并令其获得增益效果',
                                    audio: 'sl_fengji',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                        player.chooseCardTarget({
                                            filterCard: true,
                                            position: 'he',
                                            filterTarget: lib.filter.notMe,
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            event.target = target;
                                            target.gain(result.cards, player, 'giveAuto');
                                            target.draw();
                                            target.addTempSkill('sl_fengji_pl', { player: 'phaseUseEnd' });
                                            target.markSkill('sl_fengji_pl');
                                        } else event.finish();
                                    },
                                },
                                pl: {
                                    intro: {
                                        content(storage) {
                                            return '准备阶段,可以摸两张牌';
                                        },
                                    },
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    prompt2: '摸两张牌',
                                    content() {
                                        player.draw(2);
                                    },
                                },
                                sha: {
                                    charlotte: true,
                                    intro: {
                                        content(storage) {
                                            return '使用【杀】的次数上限' + (storage >= 0 ? '+' : '') + storage;
                                        },
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + player.storage.sl_fengji_sha;
                                        },
                                    },
                                },
                                draw: {
                                    charlotte: true,
                                    intro: {
                                        content(storage) {
                                            return '额定摸牌数与手牌上限' + (storage >= 0 ? '+' : '') + storage;
                                        },
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return (num += player.storage.sl_fengji_draw);
                                        },
                                    },
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.numFixed;
                                    },
                                    content() {
                                        trigger.num += player.storage.sl_fengji_draw;
                                    },
                                },
                            },
                        },
                        sl_yingba: {
                            audio: 'yingba',
                            enable: 'phaseUse',
                            usable: 1,
                            selectCard: 1,
                            filterCard: true,
                            position: 'he',
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                if (target.isIn()) target.addMark('sl_yingba_mark', 1);
                                var num = Math.max(target.maxHp - target.hp - 1, 1);
                                //target.chooseToDiscard('he',num,true);
                                //player.draw(1+num);
                                player.loseMaxHp();
                                player.loseHp();
                                player.addTempSkill('sl_yingba_ding');
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (target.hasMark('sl_yingba_mark')) return true;
                                },
                            },
                            ai: {
                                order: 11,
                                combo: 'scfuhai',
                                threaten: 3,
                                result: {
                                    player(player) {
                                        if (player.hp <= 2) return player.countCards('h') == 0 ? 1 : 0;
                                        if (player.countCards('h', { name: 'sha', color: 'red' })) return 1;
                                        return player.countCards('h') <= player.hp ? 1 : 0;
                                    },
                                    target(player, target) {
                                        if (target.isHealthy()) return -5;
                                        return -4;
                                    },
                                },
                                effect(card, player, target) {
                                    if (get.tag(card, 'damage')) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, 1];
                                        return 1.2;
                                    }
                                    if (get.tag(card, 'loseHp')) {
                                        if (player.hp <= 1) return;
                                        return [0, 0];
                                    }
                                },
                            },
                            subSkill: {
                                ding: {
                                    audio: 'yingba',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    selectTarget: 1,
                                    filterTarget(card, player, target) {
                                        return target != player;
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('sl_yingba2');
                                    },
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                    content() {
                                        if (target.isIn()) target.addMark('sl_yingba_mark', 1);
                                        var num = Math.max(target.maxHp - target.hp - 1, 1);
                                        target.chooseToDiscard('he', num, true);
                                        player.draw(1 + num);
                                        player.loseMaxHp();
                                    },
                                },
                                mark: {
                                    marktext: '定',
                                    intro: {
                                        name: '平定',
                                        content: 'mark',
                                    },
                                    mod: {
                                        maxHandcard(player, numx) {
                                            var num = player.countMark('sl_yingba_mark');
                                            if (num > 0)
                                                return (
                                                    numx +
                                                    num *
                                                    game.countPlayer(function (current) {
                                                        return current.hasSkill('sl_yingba');
                                                    })
                                                );
                                        },
                                    },
                                },
                            },
                        },
                        sl_scfuhai: {
                            audio: 'scfuhai',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.target && event.target.hasMark('sl_yingba_mark');
                            },
                            logTarget: 'target',
                            content() {
                                player.draw();
                                trigger.directHit.add(trigger.target);
                            },
                            group: ['sl_scfuhai_die'],
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return arg && arg.target && arg.target.hasMark('yingba_mark');
                                },
                            },
                            subSkill: {
                                die: {
                                    audio: 'scfuhai',
                                    trigger: {
                                        global: 'die',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.countMark('sl_yingba_mark') > 0;
                                    },
                                    content() {
                                        player.gainMaxHp(trigger.player.countMark('sl_yingba_mark'));
                                        player.recover(trigger.player.countMark('sl_yingba_mark'));
                                        //player.draw(trigger.player.countMark('sl_yingba_mark'));
                                        player.addTempSkill('sl_yingba2');
                                    },
                                },
                            },
                        },
                        sl_pinghe: {
                            audio: 'pinghe',
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += player.maxHp - player.hp);
                                },
                                targetInRange(card, player, target) {
                                    if (target.hasMark('sl_yingba_mark')) return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return (num += 1);
                                },
                            },
                            trigger: {
                                player: 'damageBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    prompt: '请选择【冯河】的牌和目标',
                                    prompt2: '将一张手牌交给一名其他角色并防止伤害',
                                    filterCard: true,
                                    forced: true,
                                    filterTarget: lib.filter.notMe,
                                    ai1(card) {
                                        if (
                                            get.tag(card, 'recover') &&
                                            !game.hasPlayer(function (current) {
                                                return get.attitude(current, player) > 0 && !current.hasSkillTag('nogain');
                                            })
                                        )
                                            return 0;
                                        return 1 / Math.max(0.1, get.value(card));
                                    },
                                    ai2(target) {
                                        var player = _status.event.player,
                                            att = get.attitude(player, target);
                                        if (target.hasSkillTag('nogain')) att /= 9;
                                        return 4 + att;
                                    },
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    target.gain(result.cards, player, 'giveAuto');
                                    trigger.cancel();
                                }
                            },
                        },
                        sl_yingba2: {},
                        sl_boming: {
                            audio: 'boming',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return (
                                    player.countCards('he') > 0 &&
                                    (!player.storage.sl_boming2 ||
                                        game.hasPlayer(function (current) {
                                            return !player.storage.sl_boming2.includes(current);
                                        }))
                                );
                            },
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return !player.storage.sl_boming2 || !player.storage.sl_boming2.includes(target);
                            },
                            position: 'he',
                            discard: false,
                            lose: false,
                            delay: false,
                            check(cardx) {
                                return 8 - get.value(cardx);
                            },
                            prompt: '将一张牌交给一名任意角色,可令其摸一张牌或自己摸一张牌,若其有与此牌相同类型的牌,你可对其发动〖恶荐〗',
                            content() {
                                'step 0';
                                player.addTempSkill('sl_boming2', 'phaseUseEnd');
                                player.markAuto('sl_boming2', targets);
                                ('step 1');
                                target.gain(cards, player, 'giveAuto');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (!ui.selected.cards.length) return 0;
                                        var card = ui.selected.cards[0];
                                        if (player.hasSkill('sl_ejian') && !player.getStorage('sl_ejian').includes(target)) {
                                            var dam = get.damageEffect(target, player, target);
                                            if (dam > 0) return dam;
                                            var type = get.type(card, target),
                                                ts = target.getCards('he', function (card) {
                                                    return get.type(card) == type;
                                                });
                                            if (ts.length) {
                                                var val = get.value(ts, target);
                                                if (val > get.value(card)) return -Math.max(1, val);
                                                return 0;
                                            }
                                        }
                                        return get.value(card, target) / 1.5;
                                    },
                                },
                            },
                            group: ['sl_boming_draw', 'sl_boming_lose'],
                            subSkill: {
                                lose: {
                                    audio: 'boming',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.source && event.source.isIn() && event.source != player;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.source) < 0;
                                    },
                                    logTarget: 'source',
                                    prompt: '令伤害来源失去一点体力并与其各摸一张牌,使用一张你未装备的装备牌',
                                    content() {
                                        'step 0';
                                        trigger.source.loseHp();
                                        game.asyncDraw([trigger.player, trigger.source]);
                                        ('step 1');
                                        for (var i = 1; i < 7; i++) {
                                            if (player.isEmpty(i)) {
                                                var sub = 'equip' + i,
                                                    card = get.cardPile(function (card) {
                                                        return get.subtype(card, false) == sub && !get.cardtag(card, 'gifts');
                                                    });
                                                if (card) {
                                                    player.$gain2(card);
                                                    player.equip(card);
                                                    break;
                                                }
                                            }
                                        }
                                    },
                                    ai: {
                                        maixie_defend: true,
                                    },
                                },
                                draw: {
                                    audio: 'boming',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getHistory('lose', function (evt) {
                                            return evt.getParent(2).name == 'sl_boming';
                                        }).length;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        sl_boming2: {
                        },
                        sl_ejian: {
                            audio: 'ejian',
                            trigger: {
                                global: 'gainAfter',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player, target) {
                                var evt = event.parent,
                                    target = event.player,
                                    target;
                                if (event.player == player) return false;
                                if (evt.name != 'sl_boming' || evt.player != player || player.getStorage('sl_ejian').includes(target) || !target.isIn()) return false;
                                var he = target.getCards('he'),
                                    card = event.cards[0];
                                if (!he.includes(card)) return false;
                                var type = get.type2(card);
                                for (var i of he) {
                                    if (i != card && get.type2(i) == type) return true;
                                }
                                return false;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.draw();
                                event.cardType = get.type2(trigger.cards[0]);
                                event.target = trigger.player;
                                event.target
                                    .chooseControl()
                                    .set('choiceList', ['受到1点伤害', `展示手牌并弃置所有${get.translation(event.cardType)}牌`])
                                    .set('ai', function (event, player) {
                                        if (get.damageEffect(player, _status.event.parent.player, player) >= 0) return 0;
                                        var type = _status.event.cardType,
                                            cards = player.getCards('he', function (card) {
                                                return get.type2(card) == type;
                                            });
                                        if (cards.length == 1) return 1;
                                        if (cards.length >= 2) {
                                            if (Array.isArray(cards))
                                                for (var i of cards) {
                                                    if (get.tag(i, 'save')) return 0;
                                                }
                                        }
                                        if (player.hp == 1) return 1;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (get.value(i) >= 8) return 0;
                                            }
                                        if (cards.length > 2 && player.hp > 2) return 0;
                                        if (cards.length > 3) return 0;
                                        return 1;
                                    })
                                    .set('cardType', event.cardType);
                                ('step 1');
                                if (result.index == 1) {
                                    if (target.countCards('h') > 0) target.showHandcards();
                                } else {
                                    target.damage();
                                    event.finish();
                                }
                                ('step 2');
                                target.discard(
                                    target.getCards('he', function (card) {
                                        return get.type2(card) == event.cardType;
                                    })
                                );
                            },
                            ai: {
                                combo: 'boming',
                                threaten: 1.5,
                                result: {
                                    target(player, target) {
                                        return -2;
                                    },
                                    halfneg: true,
                                },
                            },
                        },
                        sl_xingqi: {
                            audio: 'ext:脑洞大开/audio:4',
                            trigger: {
                                player: ['useCardBegin', 'respondBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, false) != 'delay' && !player.getStorage('sl_xingqi').includes(event.card.name);
                            },
                            content() {
                                player.markAuto('sl_xingqi', [trigger.card.name]);
                                game.log(player, '获得了一个', `#g【备(${get.translation(trigger.card.name)})】`);
                            },
                            marktext: '备',
                            intro: {
                                content: '$',
                                onunmark(storage, player) {
                                    delete player.storage.xingqi;
                                },
                            },
                            group: 'sl_xingqi_gain',
                            subSkill: {
                                gain: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getStorage('sl_xingqi').length;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('sl_mibei2');
                                        player.chooseButton(['星启:是否获得一张牌？', [player.getStorage('sl_xingqi'), 'vcard']]).set('ai', function (button) {
                                            var card = { name: button.link[2] },
                                                player = _status.event.player;
                                            if (
                                                !get.cardPile2(function (cardx) {
                                                    return cardx.name == card.name;
                                                })
                                            )
                                                return 0;
                                            return get.value(card, player) * player.getUseValue(card);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            var name = result.links[0][2];
                                            game.log(player, '移去了一个', `#g【备(${get.translation(name)})】`);
                                            player.unmarkAuto('sl_xingqi', [name]);
                                            var card = get.cardPile(function (card) {
                                                return card.name == name;
                                            });
                                            if (card) player.gain(card, 'gain2');
                                            player.draw();
                                        }
                                    },
                                },
                            },
                        },
                        sl_zifu: {
                            audio: 'ext:脑洞大开/audio:4',
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    player.getStorage('sl_xingqi').length &&
                                    !player.hasHistory('useCard', function (evt) {
                                        return evt.getParent('phaseUse') == event;
                                    })
                                );
                            },
                            content() {
                                game.log(player, '移去了所有', '#g【备】');
                                player.unmarkSkill('sl_xingqi');
                                player.loseHp();
                            },
                            ai: {
                                neg: true,
                                combo: 'sl_xingqi',
                            },
                        },
                        sl_mibei: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            dutySkill: true,
                            forced: true,
                            filter(event, player) {
                                if (!player.storage.sl_xingqi || !player.storage.sl_xingqi.length) return false;
                                var map = { basic: 0, trick: 0, equip: 0 };
                                for (var i of player.storage.sl_xingqi) {
                                    var type = get.type(i);
                                    if (typeof map[type] == 'number') map[type]++;
                                }
                                for (var i in map) {
                                    if (map[i] < 2) return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                game.log(player, '成功完成使命');
                                player.awakenSkill('sl_zifu');
                                player.awakenSkill('sl_mibei');
                                var list = ['basic', 'equip', 'trick'],
                                    cards = [];
                                for (var i of list) {
                                    var card = get.cardPile2(function (card) {
                                        return get.type(card) == i;
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                                player.hp = player.maxHp;
                                ('step 1');
                                player.addSkill('sl_mouli');
                                var cards = get.cards(ui.cardPile.childElementCount + 1);
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        ui.cardPile.insertBefore(i, ui.cardPile.childNodes[get.rand(ui.cardPile.childElementCount)]);
                                    }
                                game.updateRoundNumber();
                            },
                            group: ['sl_mibei_fail', 'sl_mibei_silent'],
                            derivation: ['sl_mouli', 'sl_mibei3'],
                            subSkill: {
                                silent: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    silent: true,
                                    lastDo: true,
                                    filter(event, player) {
                                        return !player.getStorage('sl_xingqi').length;
                                    },
                                    content() {
                                        player.addTempSkill('sl_mibei2');
                                    },
                                    charlotte: true,
                                    forced: true,
                                    popup: false,
                                },
                                mark: {},
                                fail: {
                                    audio: 'ext:脑洞大开/audio:2',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.getStorage('sl_xingqi').length && player.hasSkill('sl_mibei');
                                    },
                                    content() {
                                        game.log(player, '使命失败');
                                        player.die();
                                    },
                                },
                            },
                        },
                        sl_mouli: {
                            audio: 'ext:脑洞大开/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.getStorage('sl_xingqi').length;
                            },
                            filterTarget(card, player, target) {
                                return (player = target);
                            },
                            content() {
                                'step 0';
                                target.chooseButton(['谋立:是否获得一张牌？', [player.getStorage('sl_xingqi'), 'vcard']], true).set('ai', function (button) {
                                    var card = { name: button.link[2] },
                                        player = _status.event.player;
                                    return get.attitude(player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var name = result.links[0][2];
                                    game.log(player, '移去了一个', `#g【备(${get.translation(name)})】`);
                                    player.unmarkAuto('sl_xingqi', [name]);
                                    var card = get.cardPile2(function (card) {
                                        return card.name == name;
                                    });
                                    if (card) target.gain(card, 'gain2');
                                    game.asyncDraw([player, target]);
                                }
                            },
                            ai: {
                                combo: 'sl_xingqi',
                                order: 15,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        sl_mibei2: {},
                        sl_quedi: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                return (
                                    (event.card.name == 'sha' || event.card.name == 'juedou') &&
                                    event.targets.length == 1 &&
                                    (event.target.countGainableCards(player, 'h') > 0 ||
                                        player.hasCard(function (i) {
                                            return _status.connectMode || (get.type(i, player) == 'basic' && lib.filter.cardDiscardable(i, player, 'sl_quedi'));
                                        }, 'h'))
                                );
                            },
                            content() {
                                'step 0';
                                var target = trigger.target;
                                event.target = target;
                                var list = [];
                                if (target.countGainableCards(player, 'h') > 0) list.push('选项一');
                                if (
                                    player.hasCard(function (i) {
                                        return get.type(i, player) == 'basic' && lib.filter.cardDiscardable(i, player, 'sl_quedi');
                                    }, 'h')
                                )
                                    list.push('选项二');
                                list.push('背水!');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('choiceList', [`获得${get.translation(target)}的一张手牌并摸一张牌`, `弃置一张基本牌并令${get.translation(trigger.card)}伤害+1`, '背水!减1点体力上限并执行所有选项'])
                                    .set('prompt', get.prompt('sl_quedi', target))
                                    .set('ai', function () {
                                        var evt = _status.event.getTrigger(),
                                            player = evt.player,
                                            target = evt.target,
                                            card = evt.card;
                                        if (get.attitude(player, target) > 0) return 'cancel2';
                                        var bool1 = target.countGainableCards(player, 'he') > 0;
                                        var bool2 =
                                            player.hasCard(function (i) {
                                                return get.type(i, player) == 'basic' && lib.filter.cardDiscardable(i, player, 'sl_quedi') && get.value(card, player) < 5;
                                            }, 'h') &&
                                            !target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: card,
                                            });
                                        if (bool1 && bool2 && (target.hp <= 2 || (player.isDamaged() && player.maxHp > 3))) return '背水!';
                                        if (bool1) return '选项一';
                                        if (bool2) return '选项二';
                                        return 'cancel2';
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    event.control = result.control;
                                    if (event.control == '背水!') {
                                        player.loseMaxHp();
                                        player.draw();
                                    }
                                } else {
                                    player.getStat('triggerSkill').sl_quedi--;
                                    event.finish();
                                }
                                ('step 2');
                                if ((event.control == '选项一' || event.control == '背水!') && target.countGainableCards(player, 'he') > 0) {
                                    player.gainPlayerCard(target, true, 'he');
                                    player.draw();
                                }
                                ('step 3');
                                if (
                                    (event.control == '选项二' || event.control == '背水!') &&
                                    player.hasCard(function (i) {
                                        return get.type(i, player) == 'basic' && lib.filter.cardDiscardable(i, player, 'sl_quedi');
                                    }, 'h')
                                ) {
                                    player.chooseToDiscard('h', '弃置一张基本牌', { type: 'basic' }, true);
                                } else event.finish();
                                ('step 4');
                                if (result.bool) trigger.parent.baseDamage++;
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg || !arg.card || !arg.target || (arg.card.name != 'sha' && arg.card.name != 'juedou')) return false;
                                    if (player.getStat('triggerSkill').dbquedi && player.getStat('triggerSkill').dbquedi > 0) return false;
                                    if (
                                        arg &&
                                        arg.target.countCards('h') == 1 &&
                                        (arg.card.name != 'sha' ||
                                            !arg.target.getEquip('bagua') ||
                                            player.hasSkillTag('unequip', false, {
                                                name: arg.card ? arg.card.name : null,
                                                target: arg.target,
                                                card: arg.card,
                                            }) ||
                                            player.hasSkillTag('unequip', false, {
                                                name: arg.card ? arg.card.name : null,
                                                target: arg.target,
                                                card: arg.card,
                                            }))
                                    )
                                        return true;
                                    return false;
                                },
                            },
                        },
                        sl_zhuifeng: {
                            audio: 'ext:脑洞大开/audio:2',
                            groupSkill: true,
                            enable: 'phaseUse',
                            usable: 2,
                            selectCard: 1,
                            filterCard: true,
                            position: 'he',
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            viewAsFilter(player) {
                                return player.group == 'wei' && player.hp > 0;
                            },
                            viewAs: {
                                name: 'juedou',
                            },
                            log: false,
                            precontent() {
                                player.loseHp();
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'juedou' }) - 0.5;
                                },
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 5.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target, card) {
                                        if (
                                            player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        ) {
                                            return 0;
                                        }
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                            },
                            group: 'sl_zhuifeng_self',
                            subSkill: {
                                self: {
                                    trigger: {
                                        player: 'damageBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event.parent;
                                        return evt.skill == 'sl_zhuifeng' && evt.player == player;
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.getStat().skill.sl_zhuifeng = 2;
                                    },
                                },
                            },
                        },
                        sl_chongjian: {
                            audio: 'ext:脑洞大开/audio:2',
                            groupSkill: true,
                            hiddenCard(player, name) {
                                if (
                                    player.group == 'wu' &&
                                    (name == 'sha' || name == 'jiu') &&
                                    player.hasCard(function (card) {
                                        return get.type(card) == 'equip';
                                    }, 'hes')
                                )
                                    return true;
                                return false;
                            },
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return (
                                    player.group == 'wu' &&
                                    player.hasCard(function (card) {
                                        return get.type(card) == 'equip';
                                    }, 'hes') &&
                                    ((event.filterCard && event.filterCard({ name: 'sha' }, player, event)) || event.filterCard({ name: 'jiu' }, player, event))
                                );
                            },
                            mod: {
                                targetInRange(card) {
                                    if (card.storage && card.storage.sl_chongjian) return true;
                                },
                            },
                            chooseButton: {
                                dialog() {
                                    return ui.create.dialog('冲坚', [['sha', 'jiu'], 'vcard']);
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    return evt.filterCard({ name: button.link[2] }, player, evt);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') return 1;
                                    var player = _status.event.player;
                                    if (
                                        button.link[2] == 'jiu' &&
                                        (player.hasCard(function (card) {
                                            return card.name == 'sha';
                                        }, 'hs') ||
                                            player.countCards('hes', function (card) {
                                                if (get.type(card) != 'equip') return false;
                                                if (get.position(card) == 'e') {
                                                    if (player.hasSkillTag('noe')) return 10 - get.value(card) > 0;
                                                    var sub = get.subtype(card);
                                                    if (
                                                        player.hasCard(function (card) {
                                                            return get.subtype(card) == sub && player.canUse(card, player) && get.effect(player, card, player, player) > 0;
                                                        }, 'hs')
                                                    )
                                                        return 10 - get.value(card) > 0;
                                                }
                                                return 5 - get.value(card) > 0;
                                            }) > 1)
                                    )
                                        return player.getUseValue({ name: 'jiu' }) * 4;
                                    return player.getUseValue({ name: button.link[2] }, false);
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'sl_chongjian',
                                        viewAs: {
                                            name: links[0][2],
                                            storage: { dbchongjian: true },
                                        },
                                        filterCard: { type: 'equip' },
                                        position: 'hes',
                                        popname: true,
                                        precontent() {
                                            player.addTempSkill('sl_chongjian_effect');
                                        },
                                        check(card) {
                                            var player = _status.event.player;
                                            if (get.position(card) == 'e') {
                                                if (player.hasSkillTag('noe')) return 10 - get.value(card);
                                                var sub = get.subtype(card);
                                                if (
                                                    player.hasCard(function (card) {
                                                        return get.subtype(card) == sub && player.canUse(card, player) && get.effect(player, card, player, player) > 0;
                                                    }, 'hs')
                                                )
                                                    return 10 - get.value(card);
                                            }
                                            return 5 - get.value(card);
                                        },
                                    };
                                },
                                prompt(links) {
                                    return `将一张装备牌当做【${get.translation(links[0][2])}】使用`;
                                },
                            },
                            ai: {
                                unequip: true,
                                respondSha: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'unequip') {
                                        if (player.group != 'wu' || !arg || !arg.card || !arg.card.storage || !arg.card.storage.sl_chongjian) return false;
                                        return true;
                                    }
                                    return (
                                        player.group == 'wu' &&
                                        arg == 'use' &&
                                        player.hasCard(function (card) {
                                            return get.type(card) == 'equip';
                                        }, 'hes')
                                    );
                                },
                                order(item, player) {
                                    if (_status.event.type != 'phase') return 1;
                                    var player = _status.event.player;
                                    if (
                                        player.hasCard(function (card) {
                                            if (get.value(card, player) < 0) return true;
                                            var sub = get.subtype(card);
                                            return (
                                                player.hasCard(function (card) {
                                                    return get.subtype(card) == sub && player.canUse(card, player) && get.effect(player, card, player, player) > 0;
                                                }, 'hs') > 0
                                            );
                                        }, 'e')
                                    )
                                        return 10;
                                    if (
                                        player.countCards('hs', 'sha') ||
                                        player.countCards('he', function (card) {
                                            return get.type(card) == 'equip' && get.value(card, player) < 5;
                                        }) > 1
                                    )
                                        return get.order({ name: 'jiu' }) - 0.1;
                                    return get.order({ name: 'sha' }) - 0.1;
                                },
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                effect: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.draw();
                                        ('step 1');
                                        trigger.directHit.addArray(game.players);
                                        player.removeSkill('sl_chongjian_effect');
                                    },
                                },
                            },
                        },
                        sl_choujue: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                global: 'dyingBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == player && event.player != player;
                            },
                            content() {
                                player.gainMaxHp();
                                player.recover();
                                player.draw(2);
                                if (!player.getStat('triggerSkill').sl_quedi) player.getStat('triggerSkill').sl_quedi = 0;
                                player.getStat('triggerSkill').sl_quedi--;
                            },
                        },
                        sl_mibei3: {
                            audio: 'sl_mibei_fail',
                        },
                        sl_zhuitao: {
                            audio: 'zhuitao',
                            forced: true,
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'damageEnd'],
                            },
                            filter(event, player) {
                                var storage = player.getStorage('sl_zhuitao');
                                return game.hasPlayer(function (current) {
                                    return current != player && !storage.includes(current);
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('sl_zhuitao'), '令自己至一名其他角色的距离-1', function (card, player, target) {
                                        return target != player && !player.getStorage('sl_zhuitao').includes(target);
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (att < 0 && get.distance(player, target) == 2) return 100;
                                        return get.distance(player, target) * (1 - get.sgn(att) / 3);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.markAuto('sl_zhuitao', result.targets);
                                    target.chooseToDiscard('he', 1, true);
                                }
                            },
                            intro: {
                                content: '至$的距离-X.(X为当前〖追讨〗拥有者的体力值)',
                            },
                            mod: {
                                globalFrom(player, target, distance) {
                                    if (player.getStorage('sl_zhuitao').includes(target)) return distance - player.hp;
                                },
                            },
                            group: 'sl_zhuitao_remove',
                            subSkill: {
                                remove: {
                                    audio: 'zhuitao',
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getStorage('sl_zhuitao').includes(event.player);
                                    },
                                    logTarget: 'player',
                                    content() {
                                        var target = trigger.source;
                                        trigger.cancel();
                                        player.unmarkAuto('sl_zhuitao', [trigger.player]);
                                        target.draw();
                                        player.chooseUseTarget('###请选择一名其他角色###你视为对其使用一张【杀】', { name: 'sha' }, false, 'nodistance');
                                    },
                                },
                            },
                        },
                        sl_saodi: {
                            audio: 'saodi',
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.targets.length != 1 || event.target == player || event.target.hasSkill('nodis')) return false;
                                if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
                                var target = event.target;
                                let left = [], right = [];
                                let left2 = player.previous, right2 = player.next;
                                while (left2 && ![target, player].includes(left2) && right2 && ![target, player].includes(right2)) {
                                    left.push(left2);
                                    right.push(right2);
                                    left2 = left2.previous;
                                    right2 = right2.next;
                                }
                                if (target == left2) {
                                    for (var i of left) {
                                        if (lib.filter.targetEnabled2(event.card, player, i)) return true;
                                    }
                                }
                                if (target == right2) {
                                    for (var i of right) {
                                        if (lib.filter.targetEnabled2(event.card, player, i)) return true;
                                    }
                                }
                                return false;
                            },
                            aiJudge(card, player, target, bool) {
                                var left3 = false, right3 = false;
                                var eff_left = 0,
                                    eff_right = 0;
                                let left = [], right = [];
                                let left2 = player.previous, right2 = player.next;
                                while (left2 && ![target, player].includes(left2) && right2 && ![target, player].includes(right2)) {
                                    left.push(left2);
                                    right.push(right2);
                                    left2 = left2.previous;
                                    right2 = right2.next;
                                }
                                if (target == left2) {
                                    for (var i of left) {
                                        if (lib.filter.targetEnabled2(card, player, i)) {
                                            left3 = true;
                                            eff_left += get.effect(i, card, player, player);
                                        }
                                    }
                                }
                                if (target == right2) {
                                    for (var i of right) {
                                        if (lib.filter.targetEnabled2(card, player, i)) {
                                            right3 = true;
                                            eff_right += get.effect(i, card, player, player);
                                        }
                                    }
                                }
                                if (left3 && right3) {
                                    if (!bool) return Math.max(eff_left, eff_right);
                                    if (eff_left > Math.max(0, eff_right)) return '↖此角色的上家';
                                    if (eff_right > Math.max(0, eff_left)) return '此角色的下家↗';
                                    return 'cancel2';
                                } else if (left3) {
                                    if (bool) return eff_left > 0 ? '↖此角色的上家' : 'cancel2';
                                    return eff_left;
                                } else if (right3) {
                                    if (bool) return eff_right > 0 ? '↖此角色的上家' : 'cancel2';
                                    return eff_right;
                                } else return bool ? 'cancel2' : 0;
                            },
                            content() {
                                'step 0';
                                var choices = [];
                                var target = trigger.target;
                                let left = [], right = [];
                                let left2 = player.previous, right2 = player.next;
                                while (left2 && ![target, player].includes(left2) && right2 && ![target, player].includes(right2)) {
                                    left.push(left2);
                                    right.push(right2);
                                    left2 = left2.previous;
                                    right2 = right2.next;
                                }
                                player.draw();
                                if (target == left2) {
                                    for (var i of left) {
                                        if (lib.filter.targetEnabled2(trigger.card, player, i)) {
                                            choices.push('↖此角色的上家');
                                            break;
                                        }
                                    }
                                }
                                if (target == right2) {
                                    for (var i of right) {
                                        if (lib.filter.targetEnabled2(trigger.card, player, i)) {
                                            choices.push('此角色的下家↗');
                                            break;
                                        }
                                    }
                                }
                                choices.push('cancel2');
                                player
                                    .chooseControl(choices)
                                    .set('prompt', get.prompt('sl_saodi'))
                                    .set('prompt2', `令自己和${get.translation(trigger.target)}某个方向之间的所有角色均成为${get.translation(trigger.card)}的目标`)
                                    .set('choices', choices)
                                    .set('ai', function () {
                                        var evt = _status.event.getTrigger();
                                        return lib.skill.sl_saodi.aiJudge(evt.card, evt.player, evt.target, true);
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    var targets = [];
                                    if (result.control == '↖此角色的上家') {
                                        var current = player.previous;
                                        while (current != trigger.target && current != player) {
                                            if (lib.filter.targetEnabled2(trigger.card, player, current)) targets.push(current);
                                            current = current.previous;
                                        }
                                    } else {
                                        var current = player.next;
                                        while (current != trigger.target && current != player) {
                                            //QQQ
                                            if (lib.filter.targetEnabled2(trigger.card, player, current)) targets.push(current);
                                            current = current.next;
                                        }
                                    }
                                    event.targets = targets;
                                } else event.finish();
                                ('step 2');
                                trigger.targets.addArray(targets);
                            },
                            ai: {
                                effect: {
                                    player_use(card, player, target) {
                                        if (!target || player._sl_saodi_judging || ui.selected.targets.length || player == target || target.hasSkill('nodis')) return;
                                        if (typeof card != 'object' || (card.name != 'sha' && get.type(card) != 'trick')) return false;
                                        player._sl_saodi_judging = tru;
                                    },
                                },
                            },
                        },
                        sl_tianyun: {
                            prompt2: '由系统选择【杀】【闪】【桃】【酒】中的一张并生成,你获得之,并进行一次判定,根据判定结果获得增益或减益',
                            charlotte: true,
                            trigger: {
                                player: ['damageEnd'],
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                var list = ['sha', 'shan', 'tao', 'jiu'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw('nodelay');
                                player.judge();
                                ('step 2');
                                switch (result.suit) {
                                    case 'spade':
                                        player.turnOver();
                                        break; //♠️️
                                    case 'heart':
                                        player.chooseDrawRecover(2, true, function (event, player) {
                                            if (player.hp == 1 && player.isDamaged()) return 'recover_hp';
                                            return 'draw_card';
                                        });
                                        break; //♥️️
                                    case 'club':
                                        player.chooseToDiscard('he', 1, true);
                                        break; //♣️️
                                    default:
                                        player.phase('nodelay'); //其他情况
                                }
                                ('step 3');
                                if (event.count > 0) event.goto(1);
                            },
                            group: 'sl_tianyun_1',
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        global: 'gameDrawEnd',
                                        player: 'enterGame',
                                    },
                                    content() {
                                        player.phase('nodelay');
                                    },
                                },
                            },
                        },
                        sl_tianluo: {
                            charlotte: true,
                            limited: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player) {
                                player.storage.sl_tianluo = false;
                            },
                            filter(event, player) {
                                return player.storage.sl_tianluo == false;
                            },
                            forced: true,
                            trigger: {
                                player: 'dying',
                            },
                            content() {
                                'step 0';
                                player.phase('nodelay');
                                player.awakenSkill('sl_tianyun');
                                player.removeSkill('sl_shenbian');
                                player.addSkill('sl_fengji');
                                player.addSkill('sl_zaoli');
                                player.addSkill('sl_dulie');
                                player.addSkill('sl_shenzhu');
                                player.addSkill('sl_dangmo');
                                player.addSkill('sl_zhangming');
                                player.addSkill('sl_jiqiao');
                                player.addSkill('sl_jiang');
                                player.addSkill('sl_hunzi');
                                player.addSkill('sl_tianyi');
                                player.addSkill('hmxzq');
                                player.addSkill('ls_meibu');
                                player.addSkill('sl_mouli');
                                player.addSkill('sl_xingqi');
                                player.addSkill('sl_xiongyi');
                                player.addSkill('sl_yaoming');
                                player.addSkill('sl_sidi');
                                player.addSkill('sl_mingzhe');
                                player.addSkill('sl_choufa');
                                player.addSkill('sl_zhaorang');
                                player.addSkill('sl_jintao');
                                player.addSkill('dangjiang');
                                player.addSkill('sl_zhengrong');
                                player.addSkill('sl_hongju');
                                player.addSkill('sl_kannan');
                                player.addSkill('sl_liehou');
                                player.addSkill('sl_qigong');
                                player.addSkill('sl_yingba');
                                player.addSkill('sl_scfuhai');
                                player.addSkill('sl_lirang');
                                player.addSkill('sl_mingshi');
                                player.addSkill('sl_zhuitao');
                                player.addSkill('sl_choujue');
                                player.storage.sl_tianluo = true;
                                player.awakenSkill('sl_tianluo');
                                player.gainMaxHp(player.maxHp * 2);
                                ('step 1');
                                player.hp = player.maxHp;
                                var evt = _status.event.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse') {
                                    evt.skipped = true;
                                }
                                var evt = _status.event.getParent('phase');
                                if (evt && evt.name == 'phase') {
                                    evt.finish();
                                }
                            },
                        },
                        sl_dunshi: {
                            audio: 'ext:脑洞大开/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            usable: 1,
                            init(player, skill) {
                                player.storage.sl_dunshi = [['sha', 'shan', 'tao', 'jiu', 'wuxie', 'chuqibuyi', 'huogong', 'guohe', 'shunshou', 'lebu', 'bingliang'], 0];
                            },
                            hiddenCard(player, name) {
                                if (player.storage.sl_dunshi && player.storage.sl_dunshi[0].includes(name) && !player.getStat('skill').sl_dunshi) return true;
                                return false;
                            },
                            marktext: '席',
                            mark: true,
                            intro: {
                                markcount(storage) {
                                    return storage[1];
                                },
                                content(storage, player) {
                                    if (!storage) return;
                                    var str = '<li>';
                                    if (!storage[0].length) {
                                        str += '已无可用牌';
                                    } else {
                                        str += '剩余可用牌:';
                                        str += get.translation(storage[0]);
                                    }
                                    str += '<br><li><席>标记数量:';
                                    str += storage[1];
                                    return str;
                                },
                            },
                            //每回合限一次.你可以视为使用或打出一张基本牌或锦囊牌
                            filter(event, player) {
                                var storage = player.storage.sl_dunshi;
                                if (!storage || !storage[0].length) return false;
                                for (var i of storage[0]) {
                                    if (event.filterCard({ name: i }, player, event)) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    var storage = player.storage.sl_dunshi;
                                    for (var i of storage[0]) {
                                        if (event.filterCard({ name: i }, player, event)) {
                                            list.add(i);
                                        }
                                    } //QQQ
                                    return ui.create.dialog('遁世', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    return _status.event.player.getUseValue({ name: button.link[2] }, null, true);
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'sl_dunshi',
                                        filterCard() {
                                            return false;
                                        },
                                        popname: true,
                                        viewAs: {
                                            name: links[0][2],
                                        },
                                        selectCard: -1,
                                        precontent() {
                                            player.addTempSkill('sl_dunshi_damage');
                                            player.storage.sl_dunshi_damage = event.result.card.name;
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return `选择【${get.translation(links[0][2])}】的目标`;
                                },
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    var storage = player.storage.sl_dunshi;
                                    if (!storage || !storage[0].length) return false;
                                    if (player.getStat('skill').sl_dunshi) return false;
                                    switch (tag) {
                                        case 'respondSha':
                                            return (_status.event.type != 'phase' || player == game.me || player.isUnderControl() || player.isOnline()) && storage[0].includes('sha');
                                        case 'respondShan':
                                            return storage[0].includes('shan');
                                        case 'save':
                                            if (arg == player && storage[0].includes('jiu')) return true;
                                            return storage[0].includes('tao');
                                    }
                                },
                                order: 2,
                                result: {
                                    player(player) {
                                        if (_status.event.type == 'dying') {
                                            return get.attitude(player, _status.event.dying);
                                        }
                                        return 1;
                                    },
                                },
                            },
                            initList() {
                                var list,
                                    skills = [];
                                var banned = ['xunyi'];
                                if (get.mode() == 'guozhan') {
                                    list = [];
                                    for (var i in lib.characterPack.mode_guozhan) list.push(i);
                                } else if (_status.connectMode) list = get.charactersOL();
                                else {
                                    list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                for (var i of list) {
                                    if (i.indexOf('gz_jun') == 0) continue;
                                    for (var j of lib.character[i][3]) {
                                        var skill = lib.skill[j];
                                        if (!skill || skill.zhuSkill || banned.includes(j)) continue;
                                        if (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg)) continue;
                                        var info = get.translation(j);
                                        for (var ix = 0; ix < info.length; ix++) {
                                            if (/仁|义|礼|智|信|温|良|恭|谦|让|忠|孝|廉|耻|勇|诚|悌|勤|雅|恒|天|运|落|极|神/.test(info[ix]) == true) {
                                                skills.add(j);
                                                break;
                                            }
                                        }
                                    }
                                }
                                _status.sl_dunshi_list = skills;
                            },
                            subSkill: {
                                backup: {
                                    audio: 'sl_dunshi',
                                },
                                damage: {
                                    audio: 'sl_dunshi',
                                    trigger: {
                                        global: 'damageBegin2',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.source == _status.currentPhase;
                                    },
                                    logTarget: 'source',
                                    //当前回合角色于本回合内下一次造成伤害时,你选择两项:⒈防止此伤害.系统从技能名中包含<仁|义|礼|智|信|温|良|恭|谦|让|忠|孝|廉|耻|勇|诚|悌|勤|雅|恒|天|运|落|极|神>中任意一个字的技能中随机选择七个其未拥有的技能,你令当前回合角色获得其中一个技能.⒉从〖遁世〗中删除你本次使用或打出的牌并获得一个<席>.⒊减1点体力上限并摸X张牌(X为你的<席>数)
                                    content() {
                                        'step 0';
                                        event.cardname = player.storage.sl_dunshi_damage;
                                        player.removeSkill('sl_dunshi_damage');
                                        event.target = trigger.source;
                                        event.videoId = lib.status.videoId++;
                                        var func = function (card, id, card2, card3) {
                                            var list = [`防止即将对${card3}造成的伤害,并令${card}获得一个技能名中包含<仁|义|礼|智|信|温|良|恭|谦|让|忠|孝|廉|耻|勇|诚|悌|勤|雅|恒|天|运|落|极|神>的技能`, `从〖遁世〗中删除【${card2}】并获得一枚<席>`, '减1点体力上限,摸等同于<席>数的牌'];
                                            var choiceList = ui.create.dialog('遁世:请选择两项');
                                            choiceList.videoId = id;
                                            for (var i = 0; i < list.length; i++) {
                                                var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                                str += list[i];
                                                str += '</div>';
                                                var next = choiceList.add(str);
                                                next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                                next.firstChild.link = i;
                                                Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                                choiceList.buttons.add(next.firstChild);
                                            }
                                            return choiceList;
                                        };
                                        if (player.isOnline2()) {
                                            player.send(func, get.translation(trigger.source), event.videoId, get.translation(event.cardname), get.translation(trigger.player));
                                        }
                                        event.dialog = func(get.translation(trigger.source), event.videoId, get.translation(event.cardname), get.translation(trigger.player));
                                        if (player != game.me || _status.auto) {
                                            event.dialog.style.display = 'none';
                                        }
                                        var next = player.chooseButton();
                                        next.set('dialog', event.videoId);
                                        next.set('forced', true);
                                        next.set('selectButton', 2);
                                        next.set('ai', function (button) {
                                            var player = _status.event.player;
                                            switch (button.link) {
                                                case 0:
                                                    if (get.attitude(player, _status.currentPhase) > 0) return 3;
                                                    return 0;
                                                case 1:
                                                    return 1;
                                                case 2:
                                                    var num = player.storage.sl_dunshi[1];
                                                    for (var i of ui.selected.buttons) {
                                                        if (i.link == 1) num++;
                                                    }
                                                    if (num > 0 && player.isDamaged()) return 2;
                                                    return 0;
                                            }
                                        });
                                        ('step 1');
                                        if (player.isOnline2()) {
                                            player.send('closeDialog', event.videoId);
                                        }
                                        event.dialog.close();
                                        event.links = result.links.sort();
                                        for (var i of event.links) {
                                            game.log(player, '选择了', '#g【遁世】', '的', '#y选项' + get.cnNumber(i + 1, true));
                                        }
                                        if (event.links.includes(0)) {
                                            trigger.cancel();
                                            if (!_status.sl_dunshi_list) lib.skill.sl_dunshi.initList();
                                            var list = _status.sl_dunshi_list
                                                .filter(function (i) {
                                                    return !target.hasSkill(i, null, null, null, null, null, null, false);
                                                })
                                                .randomGets(7);
                                            if (list.length == 0) event.goto(3);
                                            else {
                                                event.videoId = lib.status.videoId++;
                                                var func = function (skills, id) {
                                                    var dialog = ui.create.dialog('forcebutton');
                                                    dialog.videoId = id;
                                                    dialog.add(`令${get.translation(target)}获得一个技能`);
                                                    for (var i = 0; i < skills.length; i++) {
                                                        dialog.add(`<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【${get.translation(skills[i])}】</div><div>` + lib.translate[`${skills[i]}_info`] + '</div></div>');
                                                    }
                                                    dialog.addText(' <br> ');
                                                };
                                                if (player.isOnline()) player.send(func, list, event.videoId);
                                                else if (player == game.me) func(list, event.videoId);
                                                player.chooseControl(list).set('ai', function () {
                                                    var controls = _status.event.controls;
                                                    if (controls.includes('cslilu')) return 'cslilu';
                                                    return controls[0];
                                                });
                                            }
                                        } else event.goto(3);
                                        ('step 2');
                                        game.broadcastAll('closeDialog', event.videoId);
                                        target.addSkillLog(result.control);
                                        ('step 3');
                                        var storage = player.storage.sl_dunshi;
                                        if (event.links.includes(1)) {
                                            storage[0].remove(event.cardname);
                                            storage[1]++;
                                            player.markSkill('sl_dunshi');
                                        }
                                        if (event.links.includes(2)) {
                                            player.loseMaxHp();
                                            if (storage[1] > 0) player.draw(storage[1]);
                                        }
                                    },
                                },
                            },
                        },
                        cujue: {
                            trigger: {
                                global: 'phaseUseEnd',
                            },
                            round: 1,
                            filter(event, player) {
                                return !_status.currentPhase.getHistory('sourceDamage').length;
                                var player = _status.currentPhase;
                                if (player.getHistory('skipped').includes('phaseUse')) return true;
                                var history = player.getHistory('useCard').concat(player.getHistory('respond'));
                                for (var i = 0; i < history.length; i++) {
                                    if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                _status.currentPhase.chooseUseTarget('###是否遵循好名的命令？###视为使用一张无距离限制的【杀】', { name: 'sha' }, false, 'nodistance');
                                ('step 1');
                                if (
                                    result.bool &&
                                    _status.currentPhase.getHistory('sourceDamage', function (evt) {
                                        return evt.getParent(4) == event;
                                    }).length
                                ) {
                                    game.asyncDraw([player, _status.currentPhase]);
                                    _status.currentPhase.skip('phaseDiscard');
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        return 2;
                                    },
                                },
                            },
                            group: ['cujue_roundcount'],
                        },
                        sl_zhaohuang: {
                            enable: 'phaseUse',
                            usable: 1,
                            charlotte: true,
                            fixed: true,
                            audio: 'ext:脑洞大开/audio:2',
                            filterCard(card) {
                                var num = 2 - (_status.sl_zhaohuang_ji.length + _status.sl_zhaohuang_kun.length);
                                if (ui.selected.cards.length >= num) return false;
                                var suit = card.suit;
                                if (Array.isArray(ui.selected.cards))
                                    for (var i of ui.selected.cards) {
                                        if (i.suit == suit) return false;
                                    }
                                return true;
                            },
                            selectCard: [1, 4],
                            check(card) {
                                return 8 - get.value(card);
                            },
                            complexCard: true,
                            prompt: '弃置任意张不同花色的牌后令场上增加等量名你的【小黑子】,之后会变成【爱坤】',
                            init(player) {
                                if (!player.storage.sl_zhaohuang_kuilei) player.storage.sl_zhaohuang_kuilei = ['nan', 'nv'];
                                _status.sl_zhaohuang_ji = [];
                                _status.sl_zhaohuang_kun = [];
                                lib.translate.qy_qynvkuilei = '小黑子·鸡';
                                lib.translate.qy_qynankuilei = '小黑子·坤';
                                lib.character.qy_qynvkuilei = ['female', 'qun', 2, ['sl_zhaohuang_in'], ['character:ns_nanhua_right']];
                                lib.character.qy_qynankuilei = ['male', 'qun', 2, ['sl_zhaohuang_init'], ['character:ns_nanhua_left']];
                            },
                            filter(event, player) {
                                return _status.sl_zhaohuang_ji.length + _status.sl_zhaohuang_kun.length < 4;
                            },
                            onremove() {
                                game.countPlayer(function (current) {
                                    if (_status.sl_zhaohuang_ji.concat(_status.sl_zhaohuang_kun).includes(current) && current.master && current.master == player) {
                                        const next = game.createEvent('diex', false);
                                        next.source = player;
                                        next.player = current;
                                        next._triggered = null;
                                        next.restMap = { type: null, count: null, audio: null };
                                        next.excludeMark = [];
                                        next.setContent('die');
                                        current.remove();
                                        _status.sl_zhaohuang_ji.remove(current);
                                        _status.sl_zhaohuang_kun.remove(current);
                                    }
                                });
                            },
                            content() {
                                'step 0';
                                event.num = cards.length;
                                ('step 1');
                                if (_status.sl_zhaohuang_ji.action === false) {
                                    _status.sl_zhaohuang_ji.action = true;
                                } else {
                                    _status.sl_zhaohuang_ji.action = false;
                                }
                                var action = _status.sl_zhaohuang_ji.action,
                                    length = _status.sl_zhaohuang_kun.length + 1;
                                var fellow = game.addFellow(action ? 1 : game.players.length + game.dead.length - _status.sl_zhaohuang_kun.length, `qy_qy${player.storage.sl_zhaohuang_kuilei.randomGet()}kuilei`);
                                fellow.classList.add('minskin');
                                fellow.side = player.side;
                                fellow.master = player;
                                if (action) {
                                    game.players.remove(fellow);
                                    game.players.unshift(fellow);
                                    game.arrangePlayers();
                                }
                                var left = 80;
                                if (action) {
                                    left = 600;
                                }
                                if (_status[!action ? 'sl_zhaohuang_ji' : 'sl_zhaohuang_kun'].length) left += 150;
                                fellow.css({
                                    pointerEvents: 'auto',
                                    top: '45vh',
                                    left: left + 'px',
                                });
                                ui.arena.appendChild(fellow);
                                _status[!action ? 'sl_zhaohuang_ji' : 'sl_zhaohuang_kun'].add(fellow);
                                fellow.identity = player.identity;
                                if (fellow.identity === 'zhu') fellow.identity = 'zhong';
                                if (fellow.identity === 'nei') fellow.identity = '？';
                                fellow.setIdentity('爱坤');
                                fellow.node.identity.dataset.color = 'black';
                                if (get.mode() == 'doudizhu') {
                                    fellow.identity = player.identity;
                                    fellow.setIdentity('爱坤');
                                }
                                event.num--;
                                ('step 2');
                                if (event.num > 0) event.goto(1);
                                else event.finish();
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    var players = _status.sl_zhaohuang_ji.concat(_status.sl_zhaohuang_kun);
                                    if (players) return distance - players.length;
                                },
                                targetEnabled(card, player, target, now) {
                                    var players = _status.sl_zhaohuang_ji.concat(_status.sl_zhaohuang_kun);
                                    if (players && players.length) {
                                        if (players.includes(player)) return false;
                                    }
                                },
                                playerEnabled(card, player, target) {
                                    if (_status.sl_zhaohuang_ji.concat(_status.sl_zhaohuang_kun).includes(target) && target.master && target.master == player) {
                                        return false;
                                    }
                                },
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['sl_zhaohuang_die', 'sl_zhaohuang_equip', 'sl_zhaohuang_use', 'sl_zhaohuang_win'],
                            subSkill: {
                                in: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    charlotte: true,
                                    filter(event, player) {
                                        return !player.hasSkill('sl_zhaohuang');
                                    },
                                    init(player) {
                                        player.addSkill('sl_zhaohuang_remove');
                                    },
                                    onremove(player) {
                                        player.addSkill('sl_zhaohuang_remove');
                                    },
                                    content() {
                                        player.init('sl_xiaoheizi2');
                                        var num = [1, 2].randomGet();
                                        if (num == 1) player.gainMaxHp();
                                        else player.recover();
                                    },
                                },
                                init: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    charlotte: true,
                                    filter(event, player) {
                                        return !player.hasSkill('sl_zhaohuang');
                                    },
                                    init(player) {
                                        player.addSkill('sl_zhaohuang_remove');
                                    },
                                    onremove(player) {
                                        player.addSkill('sl_zhaohuang_remove');
                                    },
                                    content() {
                                        player.init('sl_xiaoheizi1');
                                        var num = [1, 2].randomGet();
                                        if (num == 1) player.gainMaxHp();
                                        else player.recover();
                                    },
                                },
                                remove: {
                                    trigger: {
                                        player: ['die', 'phaseBefore'],
                                    },
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    forceDie: true,
                                    fixed: true,
                                    charlotte: true,
                                    init(player) {
                                        player.addSkill('sl_zhaohuang_init');
                                    },
                                    onremove(player) {
                                        player.addSkill('sl_zhaohuang_init');
                                    },
                                    filter(event, player) {
                                        return _status.sl_zhaohuang_ji.concat(_status.sl_zhaohuang_kun).includes(player);
                                    },
                                    content() {
                                        if (event.triggername == 'phaseBefore') {
                                            trigger.cancel();
                                            player.draw(2);
                                        } else {
                                            player.master.removeAdditionalSkill(player.name1);
                                            player.remove();
                                            _status.sl_zhaohuang_ji.remove(player);
                                            _status.sl_zhaohuang_kun.remove(player);
                                        }
                                    },
                                    mod: {
                                        playerEnabled(card, player, target) {
                                            if (_status.sl_zhaohuang_ji.concat(_status.sl_zhaohuang_kun).includes(target) && target != player) {
                                                return false;
                                            }
                                        },
                                        globalFrom(from, to, distance) {
                                            return distance - _status.sl_zhaohuang_ji.length - _status.sl_zhaohuang_kun.length;
                                        },
                                    },
                                },
                                die: {
                                    trigger: {
                                        player: 'die',
                                    },
                                    silent: true,
                                    charlotte: true,
                                    forced: true,
                                    popup: false,
                                    forceDie: true,
                                    filter(event, player) {
                                        var players = _status.sl_zhaohuang_ji.concat(_status.sl_zhaohuang_kun);
                                        if (!players || !players.length) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    content() {
                                        var players = _status.sl_zhaohuang_ji.concat(_status.sl_zhaohuang_kun);
                                        game.countPlayer(function (current) {
                                            if (players.includes(current) && current.master && current.master == player) {
                                                current.die();
                                                current.remove();
                                                _status.sl_zhaohuang_ji.remove(current);
                                                _status.sl_zhaohuang_kun.remove(current);
                                            }
                                        });
                                    },
                                },
                                equip: {
                                    trigger: {
                                        global: ['equipEnd', 'loseEnd', 'sl_zhaohuangAfter', 'changeHp', 'loseBegin'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    silent: true,
                                    filter(event, player, name) {
                                        var players = _status.sl_zhaohuang_ji.concat(_status.sl_zhaohuang_kun);
                                        if (!players || !players.length) return false;
                                        if (name == 'loseEnd') {
                                            if (Array.isArray(event.cards))
                                                for (var i of event.cards) {
                                                    if (i.original == 'e') return true;
                                                }
                                        } else return true;
                                    },
                                    content() {
                                        var info = [];
                                        var es = player.getCards('e');
                                        var equips = [];
                                        for (var i = 0; i < es.length; i++) {
                                            if (es[i].clearLose) continue;
                                            equips.add(es[i].name);
                                            var skill = lib.card[es[i].name].skills;
                                            if (skill && skill.length) info.addArray(skill);
                                        }
                                        var players = _status.sl_zhaohuang_ji.concat(_status.sl_zhaohuang_kun);
                                        game.countPlayer(function (current) {
                                            if (players.includes(current) && current.master && current.master == player) {
                                                current.storage.sl_zhaohuang_equip = equips;
                                                current.addSkill('sl_zhaohuang_equip');
                                                current.markSkill('sl_zhaohuang_equip');
                                                current.removeAdditionalSkill('sl_zhaohuang_equip');
                                                current.addAdditionalSkill('sl_zhaohuang_equip', info, true);
                                                current.master.addAdditionalSkill(
                                                    current.name1,
                                                    current.skills.filter((value) => ['ymhuajing', 'ymdujie', 'sl_zhaohuang_init', 'sl_zhaohuang_remove'].includes(value) === false),
                                                    true
                                                );
                                            }
                                        });
                                    },
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            var num = 0;
                                            if (!from.storage.sl_zhaohuang_equip) return;
                                            for (var i = 0; i < from.storage.sl_zhaohuang_equip.length; i++) {
                                                var info = lib.card[from.storage.sl_zhaohuang_equip[i]];
                                                if (info && info.distance && info.distance.globalFrom) num += info.distance.globalFrom;
                                            }
                                            return distance + num;
                                        },
                                        globalTo(from, to, distance) {
                                            var num = 0;
                                            if (!to.storage.sl_zhaohuang_equip) return;
                                            for (var i = 0; i < to.storage.sl_zhaohuang_equip.length; i++) {
                                                var info = lib.card[to.storage.sl_zhaohuang_equip[i]];
                                                if (info && info.distance && info.distance.globalTo) num += info.distance.globalTo;
                                            }
                                            return distance + num;
                                        },
                                        attackFrom(from, to, distance) {
                                            var num = 0;
                                            if (!from.storage.sl_zhaohuang_equip) return;
                                            for (var i = 0; i < from.storage.sl_zhaohuang_equip.length; i++) {
                                                var info = lib.card[from.storage.sl_zhaohuang_equip[i]];
                                                if (info && info.distance && info.distance.attackFrom) num += info.distance.attackFrom;
                                            }
                                            return distance + num;
                                        },
                                        attackTo(from, to, distance) {
                                            var num = 0;
                                            if (!to.storage.sl_zhaohuang_equip) return;
                                            for (var i = 0; i < to.storage.sl_zhaohuang_equip.length; i++) {
                                                var info = lib.card[to.storage.sl_zhaohuang_equip[i]];
                                                if (info && info.distance && info.distance.attackTo) num += info.distance.attackTo;
                                            }
                                            return distance + num;
                                        },
                                    },
                                    marktext: '魂',
                                    intro: {
                                        content(storage, player, skill) {
                                            var str = `<li>当前装备:${get.translation(player.storage.sl_zhaohuang_equip)}<br>–––––––––––––––––––––––`;
                                            for (var i = 0; i < player.storage.sl_zhaohuang_equip.length; i++) {
                                                str += `<br>*<span class="bluetext">【${lib.translate[player.storage.sl_zhaohuang_equip[i]]}】:` + lib.translate[`${player.storage.sl_zhaohuang_equip[i]}_info`] + '</span>';
                                            }
                                            return str;
                                        },
                                        onunmark(storage, player) {
                                            player.removeAdditionalSkill('sl_zhaohuang_equip');
                                            delete player.storage.sl_zhaohuang_equip;
                                            player.addEquipTrigger();
                                        },
                                    },
                                },
                                use: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        if (!['trick', 'basic'].includes(get.type(event.card))) return false;
                                        var players = _status.sl_zhaohuang_ji.concat(_status.sl_zhaohuang_kun);
                                        return players && players.length;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var players = _status.sl_zhaohuang_ji.concat(_status.sl_zhaohuang_kun);
                                        game.countPlayer(function (current) {
                                            if (!players.includes(current) || !current.master || current.master != player) {
                                                players.remove(current);
                                            }
                                        });
                                        event.num = 0;
                                        event.kuilei = players;
                                        ('step 1');
                                        event.targets = trigger.targets.slice(0);
                                        for (var i = 0; i < event.targets.length; i++) {
                                            if (!event.kuilei[event.num].canUse(trigger.card, event.targets[i], false, false) || !event.targets[i].isAlive()) {
                                                event.targets.remove(event.targets[i]);
                                            }
                                        }
                                        var card = game.createCard(trigger.card);
                                        if (trigger.targets.length == 1 && trigger.targets[0] == player) event.kuilei[event.num].useCard(card, event.kuilei[event.num], false);
                                        else if (event.targets.length) event.kuilei[event.num].useCard(card, event.targets, false);
                                        event.num++;
                                        if (event.num < event.kuilei.length) event.redo();
                                    },
                                },
                                win: {
                                    trigger: {
                                        global: ['dieBegin', 'die', 'phaseAfter'],
                                    },
                                    silent: true,
                                    popup: false,
                                    forced: true,
                                    filter(event, player, name) {
                                        var mode = get.mode();
                                        var players = _status.sl_zhaohuang_ji.concat(_status.sl_zhaohuang_kun);
                                        if (!players || !players.length) return false;
                                        if (mode == 'identity' && name == 'dieBegin' && player.identity == 'nei') {
                                            return game.players.length - players.length <= 2 && event.player != player;
                                        } else if (name == 'die' || name == 'phaseAfter') return player.getEnemies().length == 0;
                                    },
                                    content() {
                                        'step 0';
                                        'step 1';
                                        if (game.showIdentity) {
                                            game.showIdentity();
                                        }
                                        if (player.isUnderControl(true) || player.getFriends().includes(game.me)) {
                                            game.over(true);
                                        } else {
                                            game.over(true);
                                        }
                                    },
                                },
                            },
                        },
                        zyntm: {
                            audio: 'ext:脑洞大开/audio:1',
                            init(player) {
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = ui.backgroundMusic.src = `extension/脑洞大开/audio/zyntm1.mp3`;
                            },
                            fixed: true,
                            charlotte: true,
                        },
                        sl_xunqian: {},
                        sl_jiesho: {
                            mod: {
                                maxHandcard(player, num) {
                                    var X = player.maxHp;
                                    var Y = player.countDisabled();
                                    return (num += Y);
                                },
                            },
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            forced: true,
                            content() {
                                var X = player.maxHp;
                                for (var i = 1; i < 6; i++) {
                                    if (player.isDisabled(i)) continue;
                                    else {
                                        player.disableEquip(i);
                                    }
                                }
                                player.draw(2);
                            },
                            group: ['sl_jiesho_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['phaseZhunbeiBegin', 'damageEnd'],
                                    },
                                    filter(event, player) {
                                        return player.countDisabled() > 0;
                                    },
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        player.chooseToEnable();
                                        player.draw();
                                    },
                                },
                            },
                        },
                        sl_xunji: {
                            derivation: 'sl_sipo',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            juexingji: true,
                            filter(event, player) {
                                return player.countDisabled() < 1;
                            },
                            forced: true,
                            content() {
                                player.loseMaxHp();
                                player.recover(2);
                                player.addSkillLog('sl_sipo');
                                player.awakenSkill('sl_xunji');
                                player.awakenSkill('sl_jiesho');
                            },
                        },
                        sl_sipo: {
                            mod: {
                                maxHandcard(player, num) {
                                    var X = player.maxHp;
                                    var Y = player.countDisabled();
                                    return (num += Y);
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                                for (var i = 0; i < list.length; i++) {
                                    if (!player.isDisabled(list[i]) && (!player.storage.kengo_guidui2 || !player.storage.kengo_guidui2.includes(list[i]))) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                                for (var i = 0; i < list.length; i++) {
                                    if (player.isDisabled(list[i]) || (player.storage.kengo_guidui2 && player.storage.kengo_guidui2.includes(list[i]))) list.splice(i--, 1);
                                }
                                player.chooseControl(list).set('prompt', '请选择废除一个装备栏').ai = function () {
                                    if (
                                        list.includes('equip1') &&
                                        player.isEmpty('equip1') &&
                                        player.countCards('h', function (card) {
                                            return card.name == 'sha' && player.getUseValue(card) > 0;
                                        })
                                    )
                                        return 'equip1';
                                    if (list.includes('equip3') && player.isEmpty('equip3')) return 'equip3';
                                    if (list.includes('equip4') && player.isEmpty('equip4')) return 'equip4';
                                    if (list.includes('equip5') && player.isEmpty('equip5')) return 'equip5';
                                    if (list.includes('equip2') && player.isEmpty('equip2')) return 'equip2';
                                    return list.randomGet();
                                };
                                ('step 1');
                                player.disableEquip(result.control);
                                ('step 2');
                                var Y = player.countDisabled();
                                target.damage(Y);
                                player.draw(Y);
                            },
                        },
                        sl_die: {
                            forced: true,
                            trigger: {
                                global: 'gameDrawEnd',
                                player: 'enterGame',
                            },
                            content() {
                                player.damage(999);
                                player.damage(999);
                                player.die();
                            },
                        },
                        sl_qinzheng: {
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                return num % 3 == 0 || num % 5 == 0 || num % 8 == 0;
                            },
                            content() {
                                var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                var cards = [];
                                if (num % 3 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return card.name == 'sha' || card.name == 'shan';
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 5 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return ['tao', 'jiu', 'zong', 'xionghuangjiu'].includes(card.name);
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 8 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return ['juedou', 'wuzhong', 'zengbin', 'sadouchengbing', 'dongzhuxianji', 'tongzhougongji'].includes(card.name);
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                            intro: {
                                content(num) {
                                    var str = '<li>总次数:';
                                    str += num;
                                    str += '<br><li>杀/闪:';
                                    str += num % 3;
                                    str += '/3<br><li>桃/酒:';
                                    str += num % 5;
                                    str += '/5<br><li>决斗/无中生有:';
                                    str += num % 8;
                                    str += '/8';
                                    return str;
                                },
                            },
                        },
                        hm_shenfa: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                game.players.remove(target);
                                target.delete();
                                const next = game.createEvent('diex', false);
                                next.source = player;
                                next.player = target;
                                next._triggered = null;
                                next.restMap = { type: null, count: null, audio: null };
                                next.excludeMark = [];
                                next.setContent('die');
                            },
                        },
                        sl_pojun: {
                            shaRelated: true,
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.hp, trigger.target.countCards('he'))], get.prompt('sl_pojun', trigger.target));
                                next.set('ai', function (button) {
                                    if (!_status.event.goon) return 0;
                                    var val = get.value(button.link);
                                    if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                                    return val;
                                });
                                next.set('goon', get.attitude(player, trigger.target) <= 0);
                                next.set('forceAuto', true);
                                ('step 1');
                                if (result.bool) {
                                    var num = result.cards.length;
                                    var target = trigger.target;
                                    target.addSkill('sl_pojun_1');
                                    target.addMark('sl_pojun_1', num);
                                    player.addToExpansion('giveAuto', result.cards, target).gaintag.add('sl_pojun_2');
                                }
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0) return false;
                                    if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                    if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                                    return false;
                                },
                            },
                            group: ['sl_pojun_2', 'sl_pojun_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.hasMark('sl_pojun_1');
                                    },
                                    content() {
                                        var num = player.countMark('sl_pojun_1');
                                        player.draw(num);
                                        player.removeMark('sl_pojun_1', player.countMark('sl_pojun_1'));
                                        player.removeSkill('sl_pojun_1');
                                    },
                                    intro: {
                                        markcount: 'expansion',
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.getExpansions('sl_pojun_2').length;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('sl_pojun_2');
                                        player.gain(cards, 'draw');
                                        game.log(player, `收回了${get.cnNumber(cards.length)}张<破军>牌`);
                                    },
                                    intro: {
                                        markcount: 'expansion',
                                        mark(dialog, storage, player) {
                                            var cards = player.getExpansions('sl_pojun_2');
                                            if (player.isUnderControl(true)) dialog.addAuto(cards);
                                            else return `共有${get.cnNumber(cards.length)}张牌`;
                                        },
                                    },
                                },
                                3: {
                                    audio: 'sl_pojun',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    logTarget: 'player',
                                    filter(event, player) {
                                        var target = event.player;
                                        return event.parent.name == 'sha' && player.countCards('h') >= target.countCards('h') && player.countCards('e') >= target.countCards('e');
                                    },
                                    content() {
                                        var num = player.getExpansions('sl_pojun_2').length;
                                        if (num > 0) {
                                            trigger.num += num;
                                        } else trigger.num++;
                                    },
                                },
                            },
                        },
                        sl_liegong: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            audio: 'ext:脑洞大开/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return !event.parent._sl_liegong_player && event.targets.length == 1 && event.card.name == 'sha' && player.getStorage('sl_liegong').length;
                            },
                            prompt2(event, player) {
                                var str = '',
                                    storage = player.getStorage('sl_liegong');
                                if (storage.length > 1) {
                                    str += `展示牌堆顶的${get.cnNumber(storage.length + 1)}张牌并增加伤害;且`;
                                }
                                str += `令${get.translation(event.target)}不能使用花色为`;
                                for (var i = 0; i < storage.length; i++) {
                                    str += get.translation(storage[i]);
                                }
                                str += '的牌响应' + get.translation(event.card);
                                return str;
                            },
                            logTarget: 'target',
                            check(event, player) {
                                var target = event.target;
                                if (get.attitude(player, target) > 0) return false;
                                if (
                                    target.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: event.card,
                                    })
                                )
                                    return false;
                                var storage = player.getStorage('sl_liegong');
                                if (storage.length >= 4) return true;
                                if (storage.length < 3) return false;
                                if (target.hasShan()) return storage.includes('heart') && storage.includes('diamond');
                                return true;
                            },
                            content() {
                                var storage = player.getStorage('sl_liegong').slice(0);
                                var num = storage.length + 1;
                                var evt = trigger.parent;
                                if (num > 0) {
                                    if (typeof evt.baseDamage != 'number') evt.baseDamage = 1;
                                    var cards = get.cards(num);
                                    player.showCards(cards.slice(0), get.translation(player) + '发动了【烈弓】');
                                    while (cards.length) {
                                        var card = cards.pop();
                                        if (storage.includes(card.suit)) evt.baseDamage++;
                                        ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    }
                                    game.updateRoundNumber();
                                }
                                evt._sl_liegong_player = player;
                                player.addTempSkill('sl_liegong_clear');
                                var target = trigger.target;
                                target.addTempSkill('sl_liegong_block');
                                if (!target.storage.sl_liegong_block) target.storage.sl_liegong_block = [];
                                target.storage.sl_liegong_block.push([evt.card, storage]);
                                lib.skill.sl_liegong.updateBlocker(target);
                            },
                            updateBlocker(player) {
                                var list = [],
                                    storage = player.storage.sl_liegong_block;
                                if (storage && storage.length) {
                                    for (var i of storage) list.addArray(i[1]);
                                }
                                player.storage.sl_liegong_blocker = list;
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target == game.me) return 0.9;
                                    return list[1];
                                },
                                directHit_ai: true,
                                halfneg: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.card && arg.card.name == 'sha') {
                                        var storage = player.getStorage('sl_liegong');
                                        if (storage.length < 3 || !storage.includes('heart') || !storage.includes('diamond')) return false;
                                        var target = arg.target;
                                        if (target.hasSkill('bagua_skill') || target.hasSkill('bazhen') || target.hasSkill('rw_bagua_skill')) return false;
                                        return true;
                                    }
                                    return false;
                                },
                            },
                            intro: {
                                content: '已记录花色:$',
                            },
                            group: 'sl_liegong_count',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event._sl_liegong_player == player;
                                    },
                                    content() {
                                        player.unmarkSkill('sl_liegong');
                                    },
                                },
                                block: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (!player.storage.sl_liegong_blocker) return;
                                            var suit = card.suit;
                                            if (suit == 'none') return;
                                            var evt = _status.event;
                                            if (evt.name != 'chooseToUse') evt = evt.getParent('chooseToUse');
                                            if (!evt || !evt.respondTo || evt.respondTo[1].name != 'sha') return;
                                            if (player.storage.sl_liegong_blocker.includes(suit)) return false;
                                        },
                                    },
                                    trigger: {
                                        player: ['damageBefore', 'damageCancelled', 'damageZero'],
                                        target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd'],
                                        global: ['useCardEnd'],
                                    },
                                    forced: true,
                                    firstDo: true,
                                    charlotte: true,
                                    onremove(player) {
                                        delete player.storage.sl_liegong_block;
                                        delete player.storage.sl_liegong_blocker;
                                    },
                                    filter(event, player) {
                                        if (!event.card || !player.storage.sl_liegong_block) return false;
                                        for (var i of player.storage.sl_liegong_block) {
                                            if (i[0] == event.card) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var storage = player.storage.sl_liegong_block;
                                        for (var i = 0; i < storage.length; i++) {
                                            if (storage[i][0] == trigger.card) {
                                                storage.splice(i--, 1);
                                            }
                                        }
                                        if (!storage.length) player.removeSkill('sl_liegong_block');
                                        else lib.skill.sl_liegong.updateBlocker(target);
                                    },
                                },
                                count: {
                                    trigger: {
                                        player: 'useCard',
                                        target: 'useCardToTargeted',
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (name != 'useCard' && player == event.player) return false;
                                        var suit = event.card.suit;
                                        if (!lib.suit.includes(suit)) return false;
                                        if (player.storage.sl_liegong && player.storage.sl_liegong.includes(suit)) return false;
                                        return true;
                                    },
                                    content() {
                                        player.markAuto('sl_liegong', [trigger.card.suit]);
                                    },
                                },
                            },
                        },
                        sl_hm_zhenshan: {
                            audio: 'sl_zhenshan',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (event.type == 'wuxie') return false;
                                var nh = player.countCards('h');
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current != player && current.countCards('h') < nh;
                                    })
                                ) {
                                    return false;
                                }
                                for (var i of lib.inpile) {
                                    if (get.type(i) != 'basic') continue;
                                    var card = { name: i };
                                    if (event.filterCard && event.filterCard(card, player, event)) return true;
                                    if (i == 'sha') {
                                        for (var j of lib.inpile_nature) {
                                            card.nature = j;
                                            if (event.filterCard && event.filterCard(card, player, event)) return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (get.type(i) != 'basic') continue;
                                        var card = { name: i };
                                        if (event.filterCard && event.filterCard(card, player, event)) list.push(['基本', '', i]);
                                        if (i == 'sha') {
                                            for (var j of lib.inpile_nature) {
                                                card.nature = j;
                                                if (event.filterCard && event.filterCard(card, player, event)) list.push(['基本', '', i, j]);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('振赡', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (card.name == 'jiu') return 0;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        if (card.name == 'sha') {
                                            var eff = player.getUseValue(card);
                                            if (eff > 0) return 2.9 + eff / 10;
                                            return 0;
                                        } else if (card.name == 'tao' || card.name == 'shan') {
                                            return 4;
                                        }
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                        selectCard: -1,
                                        precontent() {
                                            'step 0';
                                            player
                                                .chooseTarget(
                                                    '选择一名手牌数小于你的角色交换手牌',
                                                    function (card, player, target) {
                                                        return target != player && target.countCards('h') < player.countCards('h');
                                                    },
                                                    true
                                                )
                                                .set('ai', function (target) {
                                                    return get.attitude(player, target) * Math.sqrt(target.countCards('h') + 1);
                                                });
                                            ('step 1');
                                            if (result.bool) {
                                                player.swapHandcards(result.targets[0]);
                                            } else event.finish();
                                            ('step 2');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '选择【' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '】的目标';
                                },
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var event = _status.event;
                                    var nh = player.countCards('h');
                                    if (
                                        game.hasPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.countCards('h') < nh;
                                        })
                                    ) {
                                        if (event.type == 'dying') {
                                            if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) {
                                                return 0.5;
                                            }
                                        } else {
                                            if ((event.filterCard && event.filterCard({ name: 'tao' }, player, event)) || event.filterCard({ name: 'shan' }, player, event)) {
                                                return 4;
                                            }
                                            if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                                return 2.9;
                                            }
                                        }
                                    }
                                    return 0;
                                },
                                save: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    var nh = player.countCards('h');
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.countCards('h') < nh;
                                    });
                                },
                                result: {
                                    player(player) {
                                        if (_status.event.type == 'dying') {
                                            return get.attitude(player, _status.event.dying);
                                        } else {
                                            return 1;
                                        }
                                    },
                                },
                            },
                            usable: 1,
                        },
                    },
                };
                lib.config.all.characters.add('脑洞大开');
                lib.config.characters.add('脑洞大开');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:脑洞大开/image/${i}.jpg`);
                }
                lib.translate['脑洞大开_character_config'] = `脑洞大开`;
                return QQQ;
            });
        },
        config: {
            naodong_name: {
                name: '武将前缀',
                intro: '选择是否显示<陰>武将前缀',
                init: 'hide',
                item: {
                    hide: '隐藏',
                    show: '显示',
                },
            },
        },
        package: {
            card: {
                card: {
                    ls_tianyan: {
                        type: 'special',
                        fullimage: true,
                        enable: true,
                        filterTarget: true,
                        content() { },
                        selectTarget: 1,
                    },
                },
                translate: {
                    ls_tianyan: '天演',
                    ls_tianyan_info: '天演',
                },
            },
            intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>未经允许禁止转发{官方群号:595882148}",
            author: '不想要好名',
            version: '1.3.4',
        },
    };
});

import { lib, game, ui, get, ai, _status } from '../../../noname.js';
const packs = function () {
    var qx_characterPack = {
        name: 'qx_characterPack',
        characterSort: {
            qx_characterPack: {
                qx_神武再世: ['qx_shen_pangtong', 'qx_shen_zhonghui', 'qx_shen_wangmang', 'qx_jiangtaixu', 'qx_shen_sunjian'],
                qx_正音雅乐: ['qx_yue_zhugeliang', 'qx_yue_zhouyu'],
                qx_星河璀璨: ['qx_star_liubei', 'qx_star_zhaoyun', 'qx_star_zhugeliang', 'qx_star_liufeng', 'qx_star_liushan', 'qx_star_liuyong', 'qx_star_liuli', 'qx_star_caozhang', 'qx_star_zhonghui', 'qx_star_zhangliao', 'qx_star_dianwei', 'qx_star_caocao', 'qx_star_caopi', 'qx_star_caochong', 'qx_star_xuyou'],
                qx_锦瑟良缘: ['qx_qizhanggongzhu', 'qx_baifuren', 'qx_liwan', 'qx_bianfuren', 'qx_cuifei', 'qx_wuxian', 'qx_yangwang', 'qx_hedoulingshi', 'qx_chenggongzhiqiong', 'qx_lizhaoyi', 'qx_huaxiaoman', 'qx_yanfuren', 'qx_zhaoji', 'qx_doumiao', 'qx_liangna', 'qx_dengsui'],
                qx_上兵伐谋: ['qx_sb_xusheng', 'qx_sb_lingtong', 'qx_sb_jiangqin', 'qx_sb_dingfeng', 'qx_sb_sunxiu', 'qx_sb_chengpu'],
                qx_群贤毕至: ['qx_kongxiu', 'qx_chenshou', 'qx_yinfan', 'qx_wenhu', 'qx_spf_simashi', 'qx_spf_simazhao'],
                qx_国之大者: ['qx_weiyao', 'qx_marong', 'qx_douwu', 'qx_wanyu'],
            },
        },
        character: {
            qx_shen_pangtong: ['male', 'shen', 4, ['qx_huansheng', 'qx_fenshen', 'qx_guice'], ['shu']],
            qx_shen_zhonghui: ['male', 'shen', 4, ['qx_enan', 'qx_zaiyi'], ['wei']],
            qx_shen_wangmang: ['male', 'shen', 4, ['qx_tongyu', 'qx_mingxin', 'qx_zhaoran'], ['qx_han']],
            qx_jiangtaixu: ['male', 'shen', 1, ['qx_xuwu', 'qx_xukong', 'qx_xuyan'], ['qx_han']],
            qx_shen_sunjian: ['male', 'shen', 4, ['qx_qingjiang', 'qx_reliejue', 'qx_shentao'], ['wu']],
            qx_yue_zhugeliang: ['male', 'shu', 3, ['qx_guqin', 'qx_longyin']],
            qx_yue_zhouyu: ['male', 'wu', 3, ['qx_siqin', 'qx_qugu']],
            qx_star_caozhang: ['male', 'wei', 4, ['qx_kedi', 'qx_reqinhu']],
            qx_star_zhonghui: ['male', 'wei', 4, ['qx_shenji', 'qx_deshi', 'qx_moumo'], []],
            qx_star_zhangliao: ['male', 'wei', 4, ['qx_guanzhen', 'qx_zhenpo']],
            qx_star_dianwei: ['male', 'wei', 4, ['qx_xiongba']],
            qx_star_caocao: ['male', 'wei', 4, ['qx_linghou', 'qx_fuyi', 'qx_xionglve'], ['zhu']],
            qx_star_caopi: ['male', 'wei', 4, ['qx_wentao', 'qx_dianlun', 'qx_guxing']],
            qx_star_caochong: ['male', 'wei', 3, ['qx_huairen', 'qx_congying']],
            qx_star_xuyou: ['male', 'wei', 3, ['qx_juao', 'qx_juezhang'], ['border:qun']],
            qx_star_liubei: ['male', 'shu', 4, ['qx_hongzhi', 'qx_shuyu', 'qx_renzhi'], ['zhu']],
            qx_star_zhaoyun: ['male', 'shu', 4, ['qx_liyong', 'qx_moutong']],
            qx_star_zhugeliang: ['male', 'shu', 3, ['qx_guanshi', 'qx_yinlve']],
            qx_star_liufeng: ['male', 'shu', 4, ['qx_yuheng', 'qx_kanzhan']],
            qx_star_liushan: ['male', 'shu', 3, ['qx_yanzheng', 'qx_renquan', 'qx_siye'], ['zhu']],
            qx_star_liuyong: ['male', 'shu', 4, ['qx_bianjian', 'qx_xingfa']],
            qx_star_liuli: ['male', 'shu', 4, ['qx_zunxiu', 'qx_zhenfan']],
            qx_yanfuren: ['female', 'qun', 3, ['qx_cangdi', 'qx_wumou']],
            qx_zhaoji: ['female', 'wu', 3, ['qx_jieji', 'qx_shenhao']],
            qx_doumiao: ['female', 'qx_han', 3, ['qx_yingfeng', 'qx_jiren']],
            qx_liangna: ['female', 'qx_han', 3, ['qx_zhangrong', 'qx_tingzheng']],
            qx_dengsui: ['female', 'qx_han', 3, ['qx_cien', 'qx_shengde']],
            qx_qizhanggongzhu: ['female', 'wei', 3, ['qx_shangli', 'qx_shibo']],
            qx_baifuren: ['female', 'wei', 3, ['qx_jieyu', 'qx_xinyou']],
            qx_liwan: ['female', 'wei', 3, ['qx_miaoci', 'qx_mita']],
            qx_bianfuren: ['female', 'wei', 3, ['qx_wanxian', 'qx_rouqing']],
            qx_cuifei: ['female', 'wei', 3, ['qx_dieyin', 'qx_dieyun']],
            qx_wuxian: ['female', 'shu', '3/4', ['qx_yichao', 'qx_chizheng', 'qx_huangdi'], ['zhu']],
            qx_yangwang: ['female', 'jin', 3, ['qx_wenhui', 'qx_shuyi', 'qx_qianci'], ['doublegroup:wei:jin']],
            qx_hedoulingshi: ['female', 'qun', 3, ['qx_tanze', 'qx_duantuan'], ['doublegroup:wei:qun']],
            qx_chenggongzhiqiong: ['female', 'qun', 3, ['qx_yuanhe', 'qx_yilv'], ['doublegroup:wei:qun']],
            qx_lizhaoyi: ['female', 'shu', 3, ['qx_wenjue', 'qx_jieyi', 'qx_linan']],
            qx_huaxiaoman: ['female', 'shu', 3, ['qx_feihua', 'qx_zhuye', 'qx_lingzong']],
            qx_sb_xusheng: ['male', 'wu', 4, ['qx_quedi']],
            qx_sb_lingtong: ['male', 'wu', 4, ['qx_yongjin', 'qx_xuanlve']],
            qx_sb_jiangqin: ['male', 'wu', 4, ['qx_fendi', 'qx_tianxiang']],
            qx_sb_dingfeng: ['male', 'wu', 4, ['qx_jubing', 'qx_rebujun']],
            qx_sb_sunxiu: ['male', 'wu', 4, ['qx_yaoyan', 'qx_zhuning', 'qx_shibei'], ['zhu']],
            qx_sb_chengpu: ['male', 'wu', 4, ['qx_haozhong', 'qx_quqian']],
            qx_kongxiu: ['male', 'jin', 4, ['qx_moushi', 'qx_cange', 'qx_yanluan']],
            qx_chenshou: ['male', 'shu', 3, ['qx_xiushi', 'qx_wangli'], ['border:jin']],
            qx_yinfan: ['male', 'wu', 3, ['qx_yinhu', 'qx_leiqi', 'qx_guihuo'], ['border:wei']],
            qx_wenhu: ['male', 'jin', 4, ['qx_bingdao', 'qx_dianbing', 'qx_fulve'], ['border:wei']],
            qx_spf_simashi: ['male', 'jin', 4, ['qx_dongxi']],
            qx_spf_simazhao: ['male', 'jin', 4, ['qx_yilve']],
            qx_weiyao: ['male', 'wu', 4, ['qx_kanzhu', 'qx_yiyan']],
            qx_marong: ['male', 'qx_han', 3, ['qx_kanji', 'qx_tongru']],
            qx_douwu: ['male', 'qx_han', 4, ['qx_moujian', 'qx_duduan', 'qx_kanmie']],
            qx_wanyu: ['male', 'wu', 4, ['qx_dianjiao', 'qx_mihu']],
        },
        characterIntro: {
            qx_zhaoji: '赵姬,颍川赵氏的女儿,嫁给桐乡令东郡虞韪为妻,才思敏捷,博学多览.赵姬要嫁女儿,女儿准备离开时,赵姬告诫道:<女儿,你嫁到夫家去之后,千万不要表现好.<女儿问:<不做好事,难道做坏事吗？>赵姬说道:<好事尚且不能做,更何况是坏事呢？>后来虞韪去世,吴大帝敬爱她的文才,招进宫中的官署做女官.皇帝准备亲征公孙渊时,赵姬上书劝谏.她为列女传做的注解,号为<赵母注>.赤乌六年去世',
            qx_doumiao: '窦妙(？―172年),女,扶风平陵(今陕西省咸阳市秦都区)人.东汉时期皇后,大将军窦武长女,东汉<六后临朝>中第五位临朝称制的皇太后.延熹八年(165年),选入掖庭,受封贵人.同年,在太尉陈蕃的主张下,窦妙被汉桓帝立为第三任皇后,但很少受到宠爱.而窦妙生性妒忌残忍,在汉桓帝去世后,砍死其宠妃田圣,又欲杀尽汉桓帝册封过的所有贵人,最终在中常侍管霸、苏康的极力苦谏才作罢.随后,窦妙拥立汉灵帝刘宏,成为皇太后.窦妙临朝期间,委任贤臣陈蕃辅政,与父亲窦武勠力同心,匡扶汉室,广征天下名贤列于朝廷,设立女尚书辅佐朝政,处死挑起党锢之祸的宦官管霸、苏康,起用李膺、杜密等遭受党锢的党人,使得<天地清明,人鬼欢喜>,天下之士无不想望太平.军事上,拨款增助军费,升任段颎为破羌将军,击溃西羌.然而窦妙纵容依附于自己的宦官,使东汉出现宦官与女尚书<并乱天下>的局面.而窦妙拒不采纳陈蕃<杀尽宦官、罢黜女尚书>的提议,陈蕃遂与窦武合谋发动政变诛杀宦官,最终兵败自杀,汉灵帝在乳母赵娆和宦官的帮助下亲政,将窦妙迁居南宫云台.熹平元年(172年7月18日)窦妙去世,谥号为思,陪葬于宣陵,史称<桓思皇后>',
            qx_liangna: '梁妠(116年-150年4月6日),一说生于106年,安定郡乌氏县(今宁夏泾源县)人.汉顺帝刘保的皇后,大将军梁商之女,东汉<六后临朝>中第四位临朝称制的皇太后,有贤后之称.梁妠聪明贤惠,善做女红,精通经史.十三岁入宫,被封为贵人.阳嘉元年(132年),被立为皇后.建康元年(144年),汉顺帝驾崩,梁妠成为太后,先后拥立汉冲帝刘炳、汉质帝刘缵、汉桓帝刘志,三度临朝称制.梁妠临朝期间,夙夜勤劳,拔用忠良,重用李固、杜乔等贤臣,驱逐宦官,推崇节俭,严惩贪污,兴办教育,使洛阳太学达到3万余生,创下两汉最高纪录.军事上,剿灭<黄帝>马勉与<黑帝>华孟等江淮大盗,讨平西羌、鲜卑及日南蛮夷,使得<海内肃然,宗庙安宁>.外交上,接纳亚美尼亚国王安世高驻华.然而梁妠不能裁抑亲戚,致使兄长大将军梁冀专权暴滥,妹妹皇后梁女莹恣极奢靡,后又诛杀贤相李固、宠溺宦官(有争议),导致天下失望.和平元年(150年),还政于汉桓帝,同年去世,时年三十五(一说四十五)岁,谥号顺烈皇后,与汉顺帝合葬于宪陵',
            qx_dengsui: '和熹皇后邓绥(81年－121年4月17日),南阳郡新野县(今河南省新野县)人,汉和帝刘肇第二任皇后,东汉<六后临朝>中的最贤者,中国历史上最杰出的女政治家之一,被史学界誉为<皇后之冠>.邓绥是东汉开国元勋邓禹的孙女、护羌校尉邓训的女儿.永元七年(95年)入宫,次年(96年)封为贵人.永元十四年(102年)汉和帝废黜阴皇后,改立邓绥为皇后.汉和帝驾崩后,邓绥先后拥立汉殇帝和汉安帝,以<女君>之名亲政长达十六年.邓绥临朝期间,因陨石撞击导致灾难空前,四夷各族趁机入侵,东汉岌岌可危.邓绥夙夜勤劳,推行一系列改革,选贤任能,躬行节俭,救灾安民,复苏经济,兴办科技教育,破除迷信,解放思想,压制外戚,推行半钱半谷制,移民开发江南,带领东汉克服了有史以来最严重的十年天灾;同时派兵征服南匈奴、鲜卑、乌桓等外患,剿灭海盗,平定西羌,使危机四伏的东汉转危为安;设立西域副校尉,回复东汉对西域的羁縻;收服岭南三十六个民族,并将高句丽、徼外夜郎纳入版图,扩张领土1840里,时人颂曰<兴灭国,继绝世>.邓绥兼通天文、算数,曾引导蔡伦改进造纸术,任用张衡研制浑天仪、地动仪等仪器,锻造中尚方弩机、拓建大型军马场以提升军备力量,创办史上最早的男女同校学堂,为女子提供学堂教育;又命许慎等人到东观矫正文字,推动世界第一部字典<说文解字>问世,苏辙称之为<和熹盛东汉>.永宁二年(公元121年),邓绥去世,谥号<和熹皇后>,与汉和帝合葬于慎陵',
            qx_jiangtaixu: '太虚钓鱼,牢萌上钩',
            qx_kongxiu: '孙秀(？－301/302年),字彦才,吴郡富春县(今浙江省杭州市富阳区)人.三国西晋时孙吴宗室、将领,乌程侯孙匡之孙、长水校尉孙泰之子、吴大帝孙权侄孙.孙秀出身宗室,又拥兵在外,被吴末帝孙皓忌惮.吴建衡二年(270年),孙皓派宠臣何定带士兵到夏口狩猎,孙秀害怕自己会遭到诛杀,便携妻室及亲兵数百人投奔西晋,被晋武帝任命为骠骑将军、交州牧、开府仪同三司,封会稽公.西晋灭吴后不久,被降职为伏波将军、开府如故.永宁(301年－302年)年间,孙秀逝世,获赠骠骑将军、开府仪同三司',
            qx_chenshou: '陈寿(233年－297年),字承祚,巴西郡安汉县(今四川省南充市)人.三国蜀汉时至西晋官员、史学家.陈寿少时好学,师事同郡学者谯周,在蜀汉时曾任卫将军主簿、东观秘书郎、观阁令史、散骑黄门侍郎等职.当时,宦官黄皓专权,大臣都曲意附从.陈寿因为不肯屈从黄皓,所以屡遭遣黜.蜀汉灭亡后,<沉滞者累年>.后受张华荐举,在西晋历任著作郎、长广太守、治书侍御史、太子中庶子等职.晚年多次被贬,屡次受人非议.元康七年(297年)病逝,享年六十五岁.太康元年(280年),晋灭吴结束了分裂局面后,陈寿历经十年的艰辛,终于完成了纪传体史学巨著<三国志>.此书脱稿后,颇受称赞,时人谓其善叙史,有良史之才.<三国志>完整地记叙了自汉末至晋初近百年间中国由分裂走向统一的历史全貌,与<史记><汉书><后汉书>并称<前四史>.陈寿的著作还有<益部耆旧传><古国志>,今已佚失',
            qx_yinfan: '隐蕃(生卒年不详),三国时魏官吏.青州(治今山东临淄)人.有口才,魏太和四年/吴黄龙二年(公元230年),奉魏明帝命,诈叛归吴,任廷尉监.蕃交结豪杰,与众官交好.后谋叛,事觉伏诛',
            qx_wenhu: '文虎(？－约291年),谯郡(今安徽亳州)人.三国时期将领,文稷之孙,文钦之子,文鸯的兄弟.诸葛诞发起叛乱时,与父兄一同率领吴军参战.当文钦向诸葛诞进谏言被斩后,文虎和文鸯一起越过城墙,重新投回魏国',
            qx_weiyao: '韦曜(204年―273年),本名韦昭,字弘嗣,吴郡云阳县(今江苏省丹阳市)人.三国时期孙吴重臣、史学家.少时好学,善于作文.早年曾任丞相掾、西安县令、尚书郎、太子中庶子、黄门侍郎、太史令等职.吴景帝孙休时期,担任中书郎、博士祭酒,管理国子学.吴末帝孙皓即位后,韦曜受封高陵亭侯,迁中书仆射、侍中,领左国史.凤凰二年(273年),被赐死,时年七十岁.韦曜著有<吴书>(合著)、<汉书音义><国语注><官职训><三吴郡国志>等.作为中国古代从事史书编纂时间最长的史学家,后世<三国志>大多取材<吴书>',
            qx_marong: '马融(79年－166年),字季长,扶风茂陵(今陕西省兴平市)人.东汉官员、经学家,东汉名将马援的从孙.马融自少<美辞貌,有俊才>,早年随儒士挚恂游学,以数次拒绝朝廷辟命而名重关西.汉安帝时,马融入仕大将军邓骘幕府,历任校书郎、郡功曹、议郎、大将军从事中郎及武都、南郡太守等职,后因得罪大将军梁冀而被剃发流放,途中自杀未遂,得以免罪召还.再任议郎,又在东观校勘儒学典籍,后因病离职.汉桓帝延熹九年(166年),马融去世,年八十八.唐代时配享孔庙,宋代时被追封为扶风伯.马融学识渊博,尤长于古文经学.他综合各家学说,遍注群经,使古文经学开始达到成熟的境地,预示着汉代经学发展将步入新的时期.他设帐授徒,不拘儒者礼节,门人常有千人之多,卢植、郑玄等都是其门徒.另有赋、颂等作品,其文集已佚,明人辑有<马季长集>',
            qx_douwu: '窦武(？～168年),字游平.扶风平陵(今陕西省咸阳市)人.东汉时期外戚、学者,大司空窦融玄孙、定襄太守窦奉之子,与刘淑、陈蕃合称<三君>.年轻时以经术德行而著名,名显关西.延熹八年(165年),因长女窦妙被立为皇后,于是以郎中迁越骑校尉,封槐里侯.次年,拜城门校尉.窦武任职时,辟召名士,所得两宫赏赐,也都捐助给太学生,得到士大夫的拥护.灵帝继位,拜大将军.辅佐朝政,不久,与太傅陈蕃定计翦除诸宦官.但因不听陈蕃建议,致使谋划泄露, 结果兵败自杀,被枭首于洛阳都亭',
            qx_wanyu: '万彧(？～272年),三国时期东吴重臣.初为乌程令,与孙皓相善,后任左典军,与濮阳兴、张布共立孙皓为帝,累迁散骑中常侍、右丞相.孙皓率大众出华里时,万彧因与丁奉、留平商议退还而被孙皓记恨,后被赐毒酒,因传酒之人减少毒量而幸免,但最终选择自杀,家族子弟也被迁徙到庐陵',
            qx_qizhanggongzhu: '齐长公主,是三国时期魏明帝曹叡之女,生卒年不详.据<三国志>和<晋书>,她先后嫁给李韬(生年不详—254年)和任恺(223年—284年),史书对她的记载,都是针对她的婚姻',
            qx_baifuren: '柏夫人(生卒年不详),柏氏,三国时期曹魏权臣司马懿的宠姬,生下司马懿第九子赵王司马伦.其子司马伦在八王之乱中称帝',
            qx_cuifei: '崔妃(？-？),清河郡东武城县(今河北故城)人,崔妃出身河北高门士族清河崔氏,崔妃的叔叔为名士崔琰.之后出嫁权臣曹操之子曹植为妻.因衣装过于华美,曹操登台看到后,认为她违反了穿着朴素的禁令,回家后崔妃就被赐死了',
            get qx_yangwang() {
                return lib?.characterIntro?.yanghuiyu ?? '' + lib?.characterIntro?.wangyuanji;
            },
            qx_hedoulingshi: '神元皇后纥豆陵氏(？－248年),没鹿回部大人窦宾之女,魏神元帝拓跋力微的妻子.纥豆陵氏,孝文帝时改为窦氏.北魏道武帝拓跋珪称帝后,追尊拓跋力微为神元皇帝,纥豆陵氏为神元皇后,并和拓跋力微配飨',
            qx_chenggongzhiqiong: '成公知琼,为女仙.记载于晋·干宝<搜神记>.女仙.知或作智.晋·干宝<搜神记>卷一:三国魏时人弦超,独宿,梦有神女来从,自称天上玉女,东郡(在今河南濮阳南)人,姓成公,字知琼.早失父母,天帝哀其孤苦,遣令下嫁.自言年七十,而视如十五六.注<易>七卷,有卦有象,可占吉凶.作夫妇七八年,父母为弦超别娶妇,知琼与之分日而宴,分夕而寝.后弦超漏泄其事,女求去,登车如飞.后五年,弦超奉使至洛,过济北(今山东东阿)鱼山下,遇知琼,同至洛为室家,至晋太康中尚在.张华为之作<神女赋>',
            qx_lizhaoyi: '李昭仪,三国时期蜀汉后主刘禅的昭仪.景耀六年(263年),魏征西将军邓艾攻至成都,后主投降.魏国把蜀汉后宫宫女赏赐给没有妻子的诸位将军,李昭仪自杀身亡',
            qx_huaxiaoman: '原创角色,设计背景是花鬘和关索的女儿',
        },
        skill: {
            qx_huansheng: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'dying' },
                filter(event, player) {
                    return player.getStorage('qx_huansheng').length;
                },
                forced: true,
                async content(event, trigger, player) {
                    const result = await player
                        .chooseButton(
                            [
                                '选择一个武将牌并获得其至多两个技能(非主公技、使命技、觉醒技)',
                                [player.getStorage('qx_huansheng'), 'character'],
                                [
                                    player
                                        .getStorage('qx_huansheng')
                                        .slice()
                                        .map((name) => {
                                            return get.character(name).skills.filter((skill) => {
                                                const list = get.skillCategoriesOf(skill);
                                                return !['主公技', '使命技', '觉醒技'].some((item) => list.includes(item));
                                            });
                                        })
                                        .flat()
                                        .map((skill) => [skill, get.translation(skill)]),
                                    'tdnodes',
                                ],
                            ],
                            [2, 3],
                            true
                        )
                        .set('filterButton', (button) => {
                            const player = get.player();
                            return (
                                !ui.selected.buttons.length
                                    ? player.getStorage('qx_huansheng')
                                    : get.character(ui.selected.buttons[0].link).skills.filter((skill) => {
                                        const list = get.skillCategoriesOf(skill);
                                        return !['主公技', '使命技', '觉醒技'].some((item) => list.includes(item));
                                    })
                            ).includes(button.link);
                        })
                        .set('ai', () => 1 + Math.random())
                        .forResult();
                    if (result?.bool && result.links?.length) {
                        const skills = result.links.slice(1);
                        player.flashAvatar('qx_huansheng', result.links[0]);
                        player.unmarkAuto('qx_huansheng', [result.links[0]]);
                        _status.characterlist.add(result.links[0]);
                        for (const skill of skills) player.popup(skill);
                        await player.addSkills(skills);
                    }
                },
                group: 'qx_huansheng_init',
                mark: true,
                intro: {
                    onunmark(storage = []) {
                        _status.characterlist.addArray(storage);
                        storage = [];
                    },
                    mark(dialog, storage = []) {
                        if (storage.length) dialog.addSmall([storage, 'character']);
                        return '当前暂未拥有武将牌';
                    },
                },
                subSkill: {
                    init: {
                        audio: 'qx_huansheng',
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        filter(event, player) {
                            return event.name !== 'phase' || game.phaseNumber === 0;
                        },
                        forced: true,
                        content() {
                            if (!_status.characterlist) lib.skill.pingjian.initList();
                            let names = [];
                            while (
                                _status.characterlist.some((name) => {
                                    if (
                                        !get.character(name).skills?.some((skill) => {
                                            const list = get.skillCategoriesOf(skill);
                                            return !['主公技', '使命技', '觉醒技'].some((item) => list.includes(item));
                                        })
                                    )
                                        return false;
                                    return !names
                                        .slice()
                                        .map((i) => {
                                            return get.is.double(i) ? get.is.double(i, true) : [get.character(i).group];
                                        })
                                        .flat()
                                        .some((group) => {
                                            return (get.is.double(name) ? get.is.double(name, true) : [get.character(name).group]).includes(group);
                                        });
                                })
                            ) {
                                names.push(
                                    _status.characterlist
                                        .filter((name) => {
                                            if (
                                                !get.character(name).skills?.some((skill) => {
                                                    const list = get.skillCategoriesOf(skill);
                                                    return !['主公技', '使命技', '觉醒技'].some((item) => list.includes(item));
                                                })
                                            )
                                                return false;
                                            return !names
                                                .slice()
                                                .map((i) => {
                                                    return get.is.double(i) ? get.is.double(i, true) : [get.character(i).group];
                                                })
                                                .flat()
                                                .some((group) => {
                                                    return (get.is.double(name) ? get.is.double(name, true) : [get.character(name).group]).includes(group);
                                                });
                                        })
                                        .randomRemove()
                                );
                                if (names.length >= 4) break;
                            }
                            if (names.length) {
                                lib.skill.rehuashen.drawCharacter(player, names);
                                player.markAuto('qx_huansheng', names);
                            }
                        },
                    },
                },
            },
            qx_fenshen: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return player.getHp() > 1;
                },
                check(event, player) {
                    if (player.maxHp - 2 <= 0) return false;
                    return (
                        game.countPlayer((target) => {
                            if (target === player) return 0;
                            return get.damageEffect(target, player, player, 'fire');
                        }) > 0
                    );
                },
                prompt2: () => '失去体力至1点,对所有其他角色各造成你已损失体力值的火属性伤害',
                async content(event, trigger, player) {
                    await player.loseHp(player.hp - 1);
                    const num = player.getDamagedHp() - 1,
                        targets = game.filterPlayer((i) => i !== player).sortBySeat();
                    if (num > 0 && targets.length) {
                        player.line(targets);
                        for (const i of targets) await i.damage(num, 'fire');
                    }
                },
                group: 'qx_fenshen_end',
                subSkill: {
                    end: {
                        audio: 'qx_fenshen',
                        trigger: { player: 'phaseJieshuBegin' },
                        forced: true,
                        content() {
                            player.draw(player.getDamagedHp() + 1);
                            if (player.isDamaged()) player.recoverTo(player.maxHp);
                        },
                    },
                },
            },
            qx_guice: {
                mark: true,
                marktext: '☯',
                intro: {
                    content(storage) {
                        if (storage) return '当一名角色受到火焰伤害时,你可以令此伤害-1,然后观看其手牌并获得其中一种类型的所有牌';
                        return '当一名角色受到火焰伤害时,你可以令此伤害+1,然后弃置其一半手牌(向下取整)';
                    },
                },
                zhuanhuanji: true,
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'damageBegin2' },
                filter: (event) => event.hasNature('fire'),
                logTarget: 'player',
                prompt2: (event, player) => lib.skill.qx_guice.intro.content(player.storage.qx_guice),
                check(event, player) {
                    const target = event.player;
                    if (!player.storage.qx_guice)
                        return (
                            get.damageEffect(target, event.source, player, event.nature) +
                            get.effect(
                                target,
                                {
                                    name: 'guohe_copy',
                                    position: 'h',
                                },
                                player,
                                player
                            ) *
                            Math.min(Math.floor(target.countCards('h') / 2), target.countDiscardableCards(player, 'h')) >
                            0
                        );
                    return true;
                },
                async content(event, trigger, player) {
                    const target = trigger.player;
                    player.changeZhuanhuanji(event.name);
                    if (player.storage[event.name]) {
                        trigger.num++;
                        game.log(player, '令对', target, '造成的伤害', '#y+1');
                        if (target.countCards('h') > 1) {
                            await player.discardPlayerCard(target, 'h', true, Math.floor(target.countCards('h') / 2));
                        }
                    } else {
                        trigger.num--;
                        game.log(player, '令对', target, '造成的伤害', '#g-1');
                        if (target.countCards('h') && target !== player) {
                            const types = target
                                .getCards('h')
                                .slice()
                                .map((i) => get.type2(i))
                                .sort((a, b) => {
                                    const list = ['basic', 'trick', 'equip'];
                                    return list.indexOf(b) - list.indexOf(a);
                                })
                                .unique()
                                .reverse();
                            const result = await player
                                .chooseControl(types)
                                .set('dialog', ['诡策:获得' + get.translation(target) + '一种类别的所有牌', target.getCards('h')])
                                .set('ai', () => {
                                    const player = get.player(),
                                        target = get.event().target,
                                        att = -get.sgn(get.sgn(get.attitude(player, target) - 0.5));
                                    let controls = get.event().controls.slice();
                                    return controls.sort((a, b) => {
                                        return att * (target.countGainableCards(player, 'h', (card) => get.type2(card) === b) - target.countGainableCards(player, 'h', (card) => get.type2(card) === a));
                                    })[0];
                                })
                                .set('target', target)
                                .forResult();
                            if (result.control) {
                                await player.gain(
                                    target.getGainableCards(player, 'h', (card) => get.type2(card) === result.control),
                                    target,
                                    'giveAuto',
                                    'bySelf'
                                );
                            }
                        }
                    }
                },
            },
            qx_enan: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: ['roundStart', 'damageEnd'] },
                filter(event, player) {
                    if (event.name === 'damage' && !event.player.isIn()) return false;
                    return game.hasPlayer((target) => ['jiyi', 'huoluan', 'hannue'].some((item) => !target.hasMark('qx_enan_' + item)));
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2('qx_enan'), (card, player, target) => {
                            return ['jiyi', 'huoluan', 'hannue'].some((item) => !target.hasMark('qx_enan_' + item));
                        })
                        .set('ai', (target) => {
                            const player = get.player();
                            return -get.attitude(player, target) * (_status.currentPhase === target ? 10 : 1);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        list = ['jiyi', 'huoluan', 'hannue'].filter((item) => !target.hasMark('qx_enan_' + item));
                    const result =
                        list.length > 1
                            ? await player
                                .chooseButton(
                                    [
                                        '厄难:令' + get.translation(target) + '获得一个<疫>',
                                        [
                                            list.map((item) => {
                                                return [item, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation('qx_enan_' + item) + '】</div><div>' + lib.translate['qx_enan_' + item + '_info'] + '</div></div>'];
                                            }),
                                            'textbutton',
                                        ],
                                    ],
                                    true
                                )
                                .set('ai', () => 1 + Math.random())
                                .forResult()
                            : { bool: true, links: list };
                    if (result?.bool && result.links?.length) {
                        const item = 'qx_enan_' + result.links[0];
                        target.addSkill(item, 'phaseAfter');
                        player.addExpose(0.2);
                    }
                },
                subSkill: {
                    jiyi: {
                        mark: true,
                        marktext: '疫',
                        nopop: true,
                        charlotte: true,
                        intro: { content: () => lib.translate.qx_enan_jiyi_info },
                        trigger: { player: 'useCard' },
                        forced: true,
                        content() {
                            player.loseHp();
                        },
                    },
                    huoluan: {
                        mark: true,
                        marktext: '疫',
                        nopop: true,
                        charlotte: true,
                        intro: { content: () => lib.translate.qx_enan_huoluan_info },
                        mod: {
                            playerEnabled(card, player, target) {
                                if (player.inRange(target)) return false;
                            },
                        },
                    },
                    hannue: {
                        mark: true,
                        marktext: '疫',
                        nopop: true,
                        charlotte: true,
                        intro: { content: () => lib.translate.qx_enan_hannue_info },
                        trigger: { player: 'useCard' },
                        forced: true,
                        content() {
                            const cards = player.getDiscardableCards(player, 'he');
                            if (cards.length) player.discard(cards.randomGets(1));
                        },
                    },
                },
            },
            qx_zaiyi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    return ['jiyi', 'huoluan', 'hannue'].some((item) => event.player.hasSkill('qx_enan_' + item));
                },
                forced: true,
                logTarget: 'player',
                async content(event, trigger, player) {
                    const target = trigger.player;
                    const skills = ['jiyi', 'huoluan', 'hannue'].filter((item) => target.hasSkill('qx_enan_' + item));
                    target.removeSkill(skills.map((item) => 'qx_enan_' + item));
                    if (skills.includes('jiyi')) {
                        if (!_status.characterlist) lib.skill.pingjian.initList();
                        const name = _status.characterlist
                            .filter((name) => {
                                const info = get.character(name);
                                return info?.group === 'wei' && info.skills?.some((skill) => !player.hasSkill(skill, null, false, false));
                            })
                            .randomGet();
                        if (name) {
                            player.flashAvatar(event.name, name);
                            await player.addSkills(get.character(name).skills.filter((skill) => !player.hasSkill(skill, null, false, false)));
                        }
                    }
                    if (skills.includes('huoluan')) {
                        const num = player.getAllHistory('useSkill', (evt) => evt.skill === 'qx_enan').length;
                        if (num > 0) await player.draw(num);
                        player.addSkill(event.name + '_hand');
                        player.addMark(event.name + '_hand', 1, false);
                    }
                    if (skills.includes('hannue')) {
                        await player.gainMaxHp();
                        await player.recover();
                    }
                },
                ai: { combo: 'qx_enan' },
                subSkill: {
                    hand: {
                        charlotte: true,
                        mod: {
                            maxHandcard(player, num) {
                                return num + player.countMark('qx_zaiyi_hand');
                            },
                        },
                        markimage: 'image/card/handcard.png',
                        intro: { content: '手牌上限+#' },
                    },
                },
            },
            qx_guqin: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    if (!player.countCards('h')) return false;
                    return event.name !== 'phase' || game.phaseNumber === 0;
                },
                forced: true,
                content() {
                    player.addGaintag(player.getCards('h'), 'qx_guqin');
                },
                mod: {
                    ignoredHandcard(card, player) {
                        if (card.hasGaintag('qx_guqin')) return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name === 'phaseDiscard' && card.hasGaintag('qx_guqin')) return false;
                    },
                },
                group: 'qx_guqin_change',
                subSkill: {
                    change: {
                        audio: 'qx_guqin',
                        trigger: { player: 'phaseDrawEnd' },
                        filter(event, player) {
                            return player.countCards('h');
                        },
                        check(event, player) {
                            const num = player.countCards('h');
                            return player.countCards('h', (card) => card.hasGaintag('qx_guqin')) * 2 < num;
                        },
                        prompt2: () => '交换手牌中的两种标记',
                        content() {
                            const cards = player.getCards('h', (card) => !card.hasGaintag('qx_guqin'));
                            player.removeGaintag('qx_guqin');
                            player.addGaintag(cards, 'qx_guqin');
                        },
                    },
                },
            },
            qx_longyin: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'useCard' },
                filter(event, player) {
                    if (player.hasCard((card) => card.hasGaintag('qx_longyin'), 'h')) return false;
                    if (!ui.cardPile.childNodes.length || get.color(ui.cardPile.childNodes[0]) !== 'red') return false;
                    return player.countCards('h', (card) => card.hasGaintag('qx_guqin')) !== player.countCards('h', (card) => !card.hasGaintag('qx_guqin'));
                },
                prompt2(event, player) {
                    const num = Math.abs(player.countCards('h', (card) => card.hasGaintag('qx_guqin')) - player.countCards('h', (card) => !card.hasGaintag('qx_guqin')));
                    return '亮出牌堆顶连续' + get.cnNumber(2 * num) + '张红色牌并可以使用其中任意张牌,本阶段结束时,你摸剩余未使用牌数张牌';
                },
                async content(event, trigger, player) {
                    const num = Math.abs(player.countCards('h', (card) => card.hasGaintag('qx_guqin')) - player.countCards('h', (card) => !card.hasGaintag('qx_guqin')));
                    let list = [];
                    while (list.length < num) {
                        const card = ui.cardPile.childNodes[list.length];
                        if (card && get.color(card) === 'red') list.push(card);
                        else break;
                    }
                    const next = game.cardsGotoOrdering(list);
                    await next;
                    list = next.cards;
                    await player.showCards(list, get.translation(player) + '发动了【' + get.translation(event.name) + '】');
                    while (list.some((card) => player.hasUseTarget(card))) {
                        const result = await player
                            .chooseButton(['是否使用其中的一张牌？', list])
                            .set('filterButton', (button) => {
                                return get.player().hasUseTarget(button.link);
                            })
                            .set('ai', (button) => {
                                if (button.link.name == 'jiu') return 10;
                                return get.player().getUseValue(button.link);
                            })
                            .forResult();
                        if (result.links?.length) {
                            const card = result.links[0];
                            list.remove(card);
                            player.$gain2(card, false);
                            await player.chooseUseTarget(true, card, false);
                        } else break;
                    }
                    if (list.length) {
                        player
                            .when({ global: (lib.phaseName || []).map((i) => i + 'After') })
                            .filter((evt) => (lib.phaseName || []).some((evtName) => evt === trigger.getParent(evtName, true)))
                            .then(() => (player.draw(num).gaintag = [namex]))
                            .vars({ num: list.length, namex: event.name });
                    }
                },
                mod: {
                    targetInRange(card, player) {
                        if (player.hasCard((card) => card.hasGaintag('qx_longyin'), 'h')) return;
                        const color = get.color(card);
                        if (color === 'unsure' || color === 'red') return true;
                    },
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (player.hasCard((card) => card.hasGaintag('qx_longyin'), 'h')) return false;
                        return arg && get.color(arg.card) === 'black';
                    },
                },
                group: 'qx_longyin_effect',
                subSkill: {
                    effect: {
                        audio: 'qx_longyin',
                        trigger: { player: 'useCard1' },
                        filter(event, player) {
                            if (player.hasCard((card) => card.hasGaintag('qx_longyin'), 'h')) return false;
                            return get.color(event.card) === 'black';
                        },
                        forced: true,
                        content() {
                            trigger.directHit.addArray(game.players);
                            game.log(trigger.card, '不可被响应');
                        },
                    },
                },
            },
            qx_siqin: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    if (!player.countCards('h')) return false;
                    return event.name !== 'phase' || game.phaseNumber === 0;
                },
                forced: true,
                content() {
                    const cards = player.getCards('h');
                    player.addGaintag(cards, 'qx_siqin');
                    player.markAuto('qx_siqin', cards);
                },
                mod: {
                    ignoredHandcard(card, player) {
                        if (card.hasGaintag('qx_siqin')) return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name === 'phaseDiscard' && card.hasGaintag('qx_siqin')) return false;
                    },
                },
                group: ['qx_siqin_change', 'qx_siqin_gain'],
                subSkill: {
                    change: {
                        audio: 'qx_siqin',
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            if (!player.hasCard((card) => card.hasGaintag('qx_siqin'))) return false;
                            return lib.skill.dcshixian.filterx(event);
                        },
                        check(event, player) {
                            return (
                                (event.targets.reduce((sum, target) => {
                                    return sum + get.effect(target, event.card, event.player, player);
                                }, 0) <
                                    0) ^
                                !get.tag(event.card, 'norepeat')
                            );
                        },
                        prompt2(event, player) {
                            const num = player
                                .getCards((card) => card.hasGaintag('qx_siqin'))
                                .map((card) => card.suit)
                                .unique().length;
                            return '令' + get.translation(event.card) + '额外结算' + get.cnNumber(num) + '次';
                        },
                        content() {
                            const num = player
                                .getCards((card) => card.hasGaintag('qx_siqin'))
                                .map((card) => card.suit)
                                .unique().length;
                            trigger.effectCount += num;
                            game.log(trigger.card, '额外结算' + get.cnNumber(num) + '次');
                        },
                    },
                    gain: {
                        audio: 'qx_siqin',
                        trigger: { global: 'roundStart' },
                        filter(event, player) {
                            const targets = game.players.slice().concat(game.dead);
                            return targets.some((target) => target.getStorage('qx_siqin').someInD('d'));
                        },
                        forced: true,
                        content() {
                            const targets = game.players.slice().concat(game.dead);
                            const cards = targets.reduce((list, target) => list.addArray(target.getStorage('qx_siqin').filterInD('d')), []);
                            player.gain(cards, 'gain2').gaintag.add('qx_siqin');
                        },
                    },
                },
            },
            // 出牌阶段,你可以弃置任意张牌,视为使用这些牌字数之和的一张基本牌或普通锦囊牌,然后若弃牌数和这些牌的字数之和相等,你摸一张牌
            qx_qugu: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    const hs = player.getDiscardableCards(player, 'he');
                    if (!hs.length) return false;
                    const numx = hs.reduce((sum, i) => sum + get.cardNameLength(i), 0);
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                num = get.cardNameLength(name);
                            const type = get.type(name);
                            return ['basic', 'trick'].includes(type) && numx > num;
                        })//QQQ
                        .some((item) => player.hasUseTarget({ name: item[2], nature: item[3] }));
                },
                filterCard(card, player) {
                    if (!lib.filter.cardDiscardable(card, player)) return false;
                    const hs = [card].concat(ui.selected.cards);
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                num = get.cardNameLength(name);
                            if (hs.reduce((sum, i) => sum + get.cardNameLength(i), 0) > num) return false;
                            const type = get.type(name);
                            return ['basic', 'trick'].includes(type);
                        })
                        .some((item) => player.hasUseTarget({ name: item[2], nature: item[3] }));
                },
                position: 'he',
                selectCard: [1, Infinity],
                complexCard: true,
                filterOk() {
                    const player = get.player(),
                        hs = ui.selected.cards;
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                num = get.cardNameLength(name);
                            if (hs.reduce((sum, i) => sum + get.cardNameLength(i), 0) !== num) return false;
                            const type = get.type(name);
                            return ['basic', 'trick'].includes(type);
                        })
                        .some((item) => player.hasUseTarget({ name: item[2], nature: item[3] }));
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseButton(
                            [
                                '曲顾:请选择一张牌使用',
                                [
                                    get
                                        .inpileVCardList((info) => {
                                            const name = info[2],
                                                num = get.cardNameLength(name);
                                            if (event.cards.reduce((sum, i) => sum + get.cardNameLength(i), 0) !== num) return false;
                                            const type = get.type(name);
                                            return ['basic', 'trick'].includes(type);
                                        })
                                        .filter((item) => player.hasUseTarget({ name: item[2], nature: item[3] })),
                                    'vcard',
                                ],
                            ],
                            true
                        )
                        .set('ai', (button) => {
                            const player = get.player(),
                                item = button.link;
                            return player.getUseValue({ name: item[2], nature: item[3] });
                        })
                        .forResult();
                    if (result?.bool && result.links?.length) {
                        const [item] = result.links,
                            card = new lib.element.VCard({ name: item[2], nature: item[3] });
                        const resultx = await player.chooseUseTarget(card, true, false).forResult();
                        if (resultx?.bool && event.cards.length === get.cardNameLength(card)) await player.draw();
                    }
                },
                ai: {
                    order(item, player) {
                        if (player) {
                            const event = get.event();
                            const hs = player.getDiscardableCards(player, 'he');
                            const numx = hs.reduce((sum, i) => sum + get.cardNameLength(i), 0);
                            const cards = get
                                .inpileVCardList((info) => {
                                    const name = info[2],
                                        num = get.cardNameLength(name);
                                    const type = get.type(name);
                                    return ['basic', 'trick'].includes(type) && numx > num;
                                })
                                .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event))
                                .sort((a, b) => {
                                    return player.getUseValue({ name: b[2], nature: b[3] }) - player.getUseValue({ name: a[2], nature: a[3] });
                                });
                            if (cards.length) {
                                const card = { name: cards[0][2], nature: cards[0][3] };
                                if (player.getUseValue(card) > 0) return 0.1 + get.order(card, player);
                            }
                            return 0;
                        }
                        return 0;
                    },
                    result: { player: 1 },
                },
            },
            qx_kedi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    if (
                        !player.hasCard((card) => {
                            if (get.position(card) === 'h' && _status.connectMode) return true;
                            return lib.filter.cardDiscardable(card, player);
                        }, 'he')
                    )
                        return false;
                    if (event.player.getHistory('useCard').length > event.player.maxHp) return false;
                    return player.canUse({ name: 'sha', nature: 'thunder' }, event.player, false);
                },
                async cost(event, trigger, player) {
                    const target = trigger.player,
                        list = ['qx_kedi', target];
                    event.result = await player
                        .chooseToDiscard(get.prompt2(...list), 'he')
                        .set('ai', (card) => {
                            if (!get.event().goon) return false;
                            return get.cardNameLength(card) + 3;
                        })
                        .set(
                            'goon',
                            (() => {
                                return get.effect(target, new lib.element.VCard({ name: 'sha', nature: 'thunder' }), player, player) > 0;
                            })()
                        )
                        .forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    const target = trigger.player,
                        card = new lib.element.VCard({ name: 'sha', nature: 'thunder' });
                    let num = get.cardNameLength(event.cards[0]);
                    while (num > 0 && player.canUse(card, target, false)) {
                        num--;
                        await player.useCard(card, target, false);
                    }
                    if (target.hasHistory('damage', (evt) => evt.getParent(event.name) === event && evt._dyinged)) {
                        let list = [],
                            skills = [];
                        if (get.mode() === 'guozhan') {
                            list.addArray(
                                Object.keys(lib.characterPack.mode_guozhan).filter((i) => {
                                    if (i.indexOf('gz_jun') === 0 || lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                    return lib.character[i];
                                })
                            );
                        } else if (_status.connectMode) list = get.charactersOL();
                        else {
                            list.addArray(
                                Object.keys(lib.character).filter((i) => {
                                    if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                    return lib.character[i];
                                })
                            );
                        }
                        for (const name of list) {
                            for (const skill of get.character(name)?.skills ?? []) {
                                if (player.getSkills(null, false, false).includes(skill) || skills.includes(skill) || get.skillCategoriesOf(skill, player).length) continue;
                                const info = get.info(skill);
                                if (!info || info.charlotte || info.init || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                                if (get.plainText(get.skillInfoTranslation(skill)).includes('【杀】')) skills.add(skill);
                            }
                        }
                        if (skills.length) await player.addSkills(skills.randomGet());
                        await player.draw(3);
                    }
                },
            },
            qx_qinhu: {
                audio: 'ext:群星荟萃/audio/skill:2',
                mod: {
                    globalTo(from, to, distance) {
                        if (from !== to) return distance + to.countCards('e');
                    },
                },
            },
            qx_reqinhu: {
                audio: 'qx_qinhu',
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name === 'sha') return num + game.countPlayer((i) => i.countDisabledSlot()) + 1;
                    },
                },
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    return event.card && get.tag(event.card, 'damage') >= 0.5 && event.player.isIn() && event.player.hasEnabledSlot();
                },
                forced: true,
                logTarget: 'player',
                async content(event, trigger, player) {
                    let list = [],
                        target = trigger.player;
                    for (let i = 1; i <= 5; i++) list.push(...Array.from({ length: target.countEnabledSlot(i) }).map(() => 'equip' + i));
                    const result =
                        list.length > 1
                            ? await player
                                .chooseButton([get.translation(event.name) + ':选择废除' + get.translation(target) + '的一个装备栏', [list.map((l) => [l, get.translation(l)]), 'tdnodes']], true)
                                .set('ai', (button) => {
                                    const { player, target } = get.event(),
                                        type = button.link,
                                        att = get.attitude(player, target) > 0;
                                    return !att ^ target.hasEnabledSlot(type) ? 1 : -1;
                                })
                                .set('target', target)
                                .forResult()
                            : { bool: true, links: list };
                    if (result?.bool && result.links?.length) {
                        const links = result.links;
                        target.addSkill('qx_reqinhu_effect');
                        target.markAuto('qx_reqinhu_effect', links);
                        await target.disableEquip(links);
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        trigger: { player: 'useCardAfter' },
                        filter(event, player) {
                            return get.tag(event.card, 'damage') >= 0.5;
                        },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            const types = player.getStorage(event.name);
                            player.removeSkill(event.name);
                            await player.enableEquip(types);
                        },
                    },
                },
            },
            qx_shenji: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    const target = event.player;
                    return target.countCards('h') && target.hasHistory('useCard', (evt) => ['basic', 'trick', 'equip'].includes(get.type2(evt.card)));
                },
                check(event, player) {
                    const target = event.player;
                    return get.effect(target, { name: 'guohe_copy', position: 'h' }, player, player) > 0;
                },//QQQ
                logTarget: 'player',
                async content(event, trigger, player) {
                    const target = trigger.player;
                    let types = ['basic', 'trick', 'equip'];
                    while (target.countCards('h') && types.length) {
                        const type = types.shift();
                        if (target.hasHistory('useCard', (evt) => get.type2(evt.card) === type)) {
                            switch (type) {
                                case 'basic':
                                    const result = await player.choosePlayerCard(target, 'h', 'visible', true, '将其中任意张牌与牌堆顶的牌进行交换', [1, Infinity]).forResult();
                                    if (result?.bool && result.cards.length) {
                                        await target.gain(get.cards(result.cards.length), 'draw');
                                        target.$throw(result.cards.length, 1000);
                                        await target.lose(result.cards, ui.cardPile, 'insert');
                                    }
                                    break;
                                default:
                                    await player[type === 'trick' ? 'gainPlayerCard' : 'discardPlayerCard'](target, Math.ceil(target.countCards('h')), true, 'h');
                                    break;
                            }
                        }
                    }
                },
            },
            qx_deshi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    global: 'roundStart',
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return player.hasCard((card) => !card.hasGaintag('qx_deshi_ban'), 'h');
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseCard(get.prompt2('qx_deshi'), 'h')
                        .set('ai', (card) => 10 - get.useful(card))
                        .forResult();
                },
                async content(event, trigger, player) {
                    const skill = event.name + '_ban';
                    player.addTempSkill(skill, { player: 'phaseBegin' });
                    player.addGaintag(event.cards, skill);
                    await player.showCards(event.cards, get.translation(player) + '发动了【' + get.translation(event.name) + '】');
                    await player.draw(get.cardNameLength(event.cards[0]));
                },
                subSkill: {
                    ban: {
                        charlotte: true,
                        onremove(player, skill) {
                            player.removeGaintag(skill);
                        },
                        mod: {
                            cardEnabled(card) {
                                if ([card].concat(card.cards || []).some((i) => i.hasGaintag('qx_deshi_ban'))) return false;
                            },
                            cardSavable(card) {
                                if ([card].concat(card.cards || []).some((i) => i.hasGaintag('qx_deshi_ban'))) return false;
                            },
                        },
                    },
                },
            },
            // 准备阶段,你可以失去任意点体力,然后选择获得随机X张魏势力武将牌上的各一个技能直到你的下个回合开始
            qx_moumo: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return player.getHp() > 0;
                },
                async cost(event, trigger, player) {
                    const list = Array.from({ length: player.hp + 1 }).map((_, i) => `${i}点`);
                    const result = await player
                        .chooseControl(list)
                        .set('ai', (e, p) => list.randomGet())//QQQ
                        .set('prompt', get.prompt2('qx_moumo')).forResult();
                    event.result = {
                        bool: (result.index > 0),
                        cost_data: result.index,
                    };
                },
                async content(event, trigger, player) {
                    const { cost_data: numx } = event;
                    await player.loseHp(numx);
                    const num = player.getDamagedHp();
                    if (!num || !_status.characterlist) lib.skill.pingjian.initList();
                    let names = [];
                    while (names.length < num) {
                        const name = _status.characterlist
                            .filter((name) => {
                                if (names.includes(name)) return false;
                                const info = get.character(name);
                                return (
                                    info?.group === 'wei' &&
                                    info.skills?.some((skill) => !player.hasSkill(skill, null, false, false)) &&
                                    info.skills.every((skill) => {
                                        return !names
                                            .reduce((list, namex) => {
                                                return list.addArray(get.character(namex).skills.filter((skill) => !player.hasSkill(skill, null, false, false)));
                                            }, [])
                                            .includes(skill);
                                    })
                                );
                            })
                            .randomGet();
                        if (name) names.add(name);
                        else break;
                    }
                    if (names?.length) {
                        const skills = names.reduce((list, namex) => {
                            return list.addArray(get.character(namex).skills.filter((skill) => !player.hasSkill(skill, null, false, false)));
                        }, []);
                        await Promise.all(event.next);
                        if (player.isUnderControl()) game.swapPlayerAuto(player);
                        const switchToAuto = function () {
                            _status.imchoosing = false;
                            if (event.dialog) event.dialog.close();
                            if (event.control) event.control.close();
                            return Promise.resolve({
                                bool: true,
                                skills: names.reduce((list, namex) => {
                                    return list.add(
                                        get
                                            .character(namex)
                                            .skills.filter((skill) => !player.hasSkill(skill, null, false, false))
                                            .randomGet()
                                    );
                                }, []),
                            });
                        };
                        const chooseButton = function (player, names, skills) {
                            const { promise, resolve } = Promise.withResolvers();
                            const event = _status.event;
                            player = player || event.player;
                            if (!event._result) event._result = {};
                            if (!event._result.skills) event._result.skills = [];
                            let rSkill = event._result.skills;
                            const dialog = ui.create.dialog('选择获得这' + get.cnNumber(names) + '张武将牌的各一个技能', [names, 'character']);
                            event.dialog = dialog;
                            const table = document.createElement('div');
                            table.classList.add('add-setting');
                            table.style.margin = '0';
                            table.style.width = '100%';
                            table.style.position = 'relative';
                            for (let i = 0; i < skills.length; i++) {
                                const td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                td.link = skills[i];
                                table.appendChild(td);
                                td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                    if (_status.dragged || _status.justdragged) return;
                                    _status.tempNoButton = true;
                                    setTimeout(() => (_status.tempNoButton = false), 500);
                                    const link = this.link;
                                    if (!this.classList.contains('bluebg')) {
                                        if (
                                            rSkill.length >= names.length ||
                                            rSkill.some((skill) => {
                                                return names.some((name) => {
                                                    return [link, skill].every((i) => get.character(name).skills.includes(i));
                                                });
                                            })
                                        )
                                            return;
                                        rSkill.add(link);
                                        this.classList.add('bluebg');
                                    } else {
                                        this.classList.remove('bluebg');
                                        rSkill.remove(link);
                                    }
                                });
                            }
                            dialog.content.appendChild(table);
                            dialog.add('　　');
                            dialog.open();
                            event.switchToAuto = function () {
                                event.dialog.close();
                                event.control.close();
                                game.resume();
                                _status.imchoosing = false;
                            };
                            event.control = ui.create.control('ok', function () {
                                if (rSkill.length !== names.length) return;
                                event.dialog.close();
                                event.control.close();
                                game.resume();
                                _status.imchoosing = false;
                                resolve(event._result);
                            });
                            for (let i = 0; i < event.dialog.buttons.length; i++) {
                                event.dialog.buttons[i].classList.add('selectable');
                            }
                            return promise;
                        };
                        let next;
                        if (event.isMine()) next = chooseButton(player, names, skills);
                        else if (event.isOnline()) {
                            const { promise, resolve } = Promise.withResolvers();
                            event.player.send(chooseButton, event.player, names, skills);
                            event.player.wait(async (result) => {
                                if (result == 'ai') result = await switchToAuto();
                                resolve(result);
                            });
                            game.pause();
                            next = promise;
                        } else next = switchToAuto();
                        const result = await next;
                        game.resume();
                        if (!result?.skills?.length) return;
                        for (const name of names) player.flashAvatar(event.name, name);
                        await player.addTempSkills(result.skills, { player: 'phaseBegin' });
                    }
                },
            },
            qx_cangdi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    player: 'damageBegin4',
                    global: 'judgeEnd',
                },
                filter(event, player) {
                    return event.name === 'judge' || game.hasPlayer((target) => target.countDiscardableCards(player, 'j'));
                },
                async cost(event, trigger, player) {
                    if (trigger.name === 'damage') {
                        event.result = await player
                            .chooseTarget(get.prompt('qx_cangdi'), (card, player, target) => {
                                return target.countDiscardableCards(player, 'j');
                            })
                            .set('prompt2', '弃置场上的一张判定牌,防止此伤害')
                            .set('ai', (target) => {
                                const { player } = get.event(),
                                    trigger = get.event().getTrigger();
                                return get.effect(target, { name: 'guohe_copy', position: 'j' }, player, player) - get.damageEffect(player, trigger.source, player, trigger.nature) * trigger.num;
                            })
                            .set('animate', false)
                            .forResult();
                    } else event.result = { bool: true };
                },
                popup: false,
                async content(event, trigger, player) {
                    if (trigger.name === 'damage') {
                        const from = event.targets[0];
                        await player.discardPlayerCard(from, 'j', true);
                        trigger.cancel();
                    } else {
                        await player.draw(3);
                    }
                },
                group: 'qx_cangdi_effect',
                subSkill: {
                    backup: {},
                    effect: {
                        audio: 'qx_cangdi',
                        enable: 'phaseUse',
                        filter(event, player) {
                            if (!player.countDiscardableCards(player, 'he')) return false;
                            return game.hasPlayer((target) =>
                                get
                                    .inpileVCardList((info) => {
                                        return get.type(info[2]) === 'delay';
                                    })
                                    .some((info) => target.canAddJudge({ name: info[2] }, []))
                            );
                        },
                        usable: 1,
                        prompt: '弃置一种类别的所有牌并令至多等量名角色视为置入一张延时锦囊牌',
                        chooseButton: {
                            dialog(event, player) {
                                return ui.create.dialog('###' + lib.translate.qx_cangdi + '###<div class="text center">弃置一种类别的所有牌并令至多等量名角色视为置入一张延时锦囊牌</div>');
                            },
                            chooseControl(event, player) {
                                let list = player
                                    .getDiscardableCards(player, 'he')
                                    .map((i) => get.type2(i))
                                    .unique()
                                    .sort((a, b) => {
                                        const types = ['basic', 'trick', 'equip'];
                                        return types.indexOf(b) - types.indexOf(a);
                                    })
                                    .reverse();
                                return list.concat(['cancel2']);
                            },
                            check(event, player) {
                                let list = player
                                    .getDiscardableCards(player, 'he')
                                    .map((i) => get.type2(i))
                                    .unique(),
                                    map = { cancel2: 0 };
                                for (const type of list) {
                                    map[type] = (() => {
                                        const num = player.countDiscardableCards(player, 'he', (card) => get.type2(card) === type);
                                        return game
                                            .filterPlayer((target) =>
                                                get
                                                    .inpileVCardList((info) => {
                                                        return get.type(info[2]) === 'delay';
                                                    })
                                                    .some((info) => target.canAddJudge({ name: info[2] }, []))
                                            )
                                            .map((target) => {
                                                return Math.max(
                                                    ...get
                                                        .inpileVCardList((info) => {
                                                            return get.type(info[2]) === 'delay';
                                                        })
                                                        .filter((info) => {
                                                            return target.canAddJudge({ name: info[2] }, []);
                                                        })
                                                        .map((info) => {
                                                            const card = new lib.element.VCard({ name: info[2] });
                                                            return get.effect(target, card, player, player);
                                                        })
                                                );
                                            })
                                            .sort((a, b) => b - a)
                                            .slice(0, num);
                                    })();
                                }
                                return Object.keys(map).sort((a, b) => map[b] - map[a])[0];
                            },
                            backup(result) {
                                return {
                                    audio: 'qx_cangdi',
                                    type: result.control,
                                    filterCard(card, player) {
                                        return lib.filter.cardDiscardable(card, player) && get.type2(card) === lib.skill.qx_cangdi_effect_backup.type;
                                    },
                                    selectCard: -1,
                                    filterTarget(card, player, target) {
                                        return get
                                            .inpileVCardList((info) => {
                                                return get.type(info[2]) === 'delay';
                                            })
                                            .some((info) => target.canAddJudge({ name: info[2] }, []));
                                    },
                                    check: () => 1,
                                    position: 'he',
                                    selectTarget: () => [1, ui.selected.cards.length],
                                    async content(event, trigger, player) {
                                        const { target } = event,
                                            names = lib.inpile.filter((name) => {
                                                if (get.type(name) !== 'delay') return false;
                                                return target.canAddJudge({ name }, []);
                                            });
                                        const name =
                                            names.length > 1
                                                ? await player
                                                    .chooseButton(['请选择一个延时锦囊牌牌名', '<div class="text center">令' + get.translation(target) + '视为置入任意延时锦囊牌</div>', [names, 'vcard']], true)
                                                    .set('target', target)
                                                    .set('filterButton', (button) => {
                                                        const { target } = get.event(),
                                                            name = button.link[2];
                                                        return target.canAddJudge({ name }, []);
                                                    })
                                                    .set('ai', (button) => {
                                                        const { player, target } = get.event(),
                                                            name = button.link[2];
                                                        return get.effect(target, { name }, player, player);
                                                    })
                                                    .forResult('links')
                                                : [['萌新转型中', '随性似风', names[0]]];
                                        if (name?.length) {
                                            player.line(target);
                                            await target.addJudge({ name: name[0][2] }, []);
                                        }
                                    },
                                    ai: {
                                        result: {
                                            player(player, target) {
                                                return Math.max(
                                                    ...get
                                                        .inpileVCardList((info) => {
                                                            return get.type(info[2]) === 'delay';
                                                        })
                                                        .filter((info) => {
                                                            return target.canAddJudge({ name: info[2] }, []);
                                                        })
                                                        .map((info) => {
                                                            const card = new lib.element.VCard({ name: info[2] });
                                                            return get.effect(target, card, player, player);
                                                        })
                                                );
                                            },
                                        },
                                    },
                                };
                            },
                            prompt: (result) => '###' + lib.translate.qx_cangdi + '###<div class="text center">弃置所有' + get.translation(result.control) + '牌并令至多等量名角色视为置入一张延时锦囊牌</div>',
                        },
                        ai: {
                            order: 10,
                            result: { player: 1 },
                        },
                    },
                },
            },
            qx_wumou: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseDiscardEnd' },
                filter(event, player) {
                    return lib.skill.twlijian.getCards(event).length && game.hasPlayer((target) => target !== player);
                },
                async cost(event, trigger, player) {
                    const cards = lib.skill.twlijian.getCards(trigger);
                    event.result = await player
                        .chooseButton([get.prompt2('qx_wumou'), cards], [1, Infinity])
                        .set('filterButton', (button) => {
                            return !ui.selected.buttons.some((but) => get.type2(but.link) === get.type2(button.link));
                        })
                        .set('ai', (button) => {
                            const player = get.player();
                            if (
                                game.hasPlayer((current) => {
                                    return current !== player && get.attitude(player, current) > 0;
                                })
                            )
                                return Math.abs(get.value(button.link, 'raw')) + 1;
                            return -get.value(button.link, 'raw');
                        })
                        .forResult();
                    if (event.result?.links?.length) event.result.cards = event.result.links;
                    return;
                    event.result.targets = await player
                        .chooseTarget('令一名其他角色获得' + get.translation(event.result.cards) + '并获得【踌躇】直到其回合结束', lib.filter.notMe)
                        .set('ai', (target) => {
                            const player = get.player();
                            return (
                                get.attitude(player, target) *
                                get
                                    .event()
                                    .parent
                                    .result.cards.reduce((sum, card) => {
                                        return sum + get.value(card, target);
                                    }, 0) *
                                (target.hasSkillTag('nogain') ? 0.1 : 1)
                            );
                        })
                        .forResult('targets');
                    event.result.bool = Boolean(event.result?.targets?.length);
                },
                async content(event, trigger, player) {
                    const { targets, cards } = event,
                        [target] = targets;
                    await target.gain(cards, 'gain2');
                    await target.addTempSkills('qx_chouchu', { player: 'phaseEnd' });
                },
                derivation: 'qx_chouchu',
            },
            qx_chouchu: {
                mod: {
                    playerEnabled(card, player, target) {
                        if (card.name === 'sha' && !card?.storage?.qx_chouchu && !target.countCards('j')) return false;
                    },
                    targetInRange(card, player, target) {
                        if (card.name === 'sha' && card?.storage?.qx_chouchu) return true;
                    },
                },
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'chooseToUse',
                filter(event, player) {
                    if (event.qx_chouchu || !event.filterCard({ name: 'sha', storage: { qx_chouchu: true } }, player, event)) return false;
                    return game.hasPlayer((target) => target !== player && target.countDiscardableCards(player, 'j'));
                },
                filterCard: () => false,
                selectCard: -1,
                viewAs: { name: 'sha', storage: { qx_chouchu: true } },
                async precontent(event, _, player) {
                    const targets = await player
                        .chooseTarget(
                            '弃置一名角色判定区的一张牌',
                            (card, player, target) => {
                                return (target) => target !== player && target.countDiscardableCards(player, 'j');
                            },
                            true
                        )
                        .set('ai', (target) => {
                            const player = get.player();
                            return get.effect(target, { name: 'guohe_copy', position: 'j' }, player, player);
                        })
                        .set('animate', false)
                        .forResult('targets');
                    if (targets?.length) {
                        const [target] = targets;
                        const result = await player.discardPlayerCard(target, 'j', true).forResult();
                        if (result?.bool && result.cards?.length) return event.finish();
                    }
                    const evt = event.parent;
                    evt.set('qx_chouchu', true);
                    evt.goto(0);
                },
                prompt: '弃置一名其他角色判定区的一张牌,视为使用一张无距离限制的【杀】',
                ai: {
                    respondSha: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg === 'respond' || _status.event?.qx_chouchu) return false;
                        return game.hasPlayer((target) => target !== player && target.countDiscardableCards(player, 'j'));
                    },
                },
            },
            qx_jieji: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'useCard' },
                filter(event, player) {
                    const target = event.player;
                    if (target.hasHistory('useCard', (evt) => evt.targets?.some((i) => i !== target)) && target.hasHistory('damage')) return false;
                    const name = lib.phaseName.find((name) => event.getParent(name, true));
                    return name && !player.storage.qx_jieji_effect?.[target.playerid]?.includes(event.getParent(name, true));
                },
                logTarget: 'player',
                check(event, player) {
                    return get.attitude(player, event.player) > 0;
                },
                async content(event, trigger, player) {
                    player.addSkill('qx_jieji_effect');
                    const target = trigger.player,
                        name = lib.phaseName.find((name) => trigger.getParent(name, true));
                    if (!player.storage.qx_jieji_effect[target.playerid]) player.storage.qx_jieji_effect[target.playerid] = [target];
                    player.storage.qx_jieji_effect[target.playerid].add(trigger.getParent(name, true));
                    player.markSkill('qx_jieji_effect');
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        init: (player, skill) => (player.storage[skill] = player.storage[skill] || {}),
                        mark: true,
                        intro: {
                            markcount: (storage = {}) => Object.keys(storage).length,
                            content(storage = {}) {
                                if (!Object.keys(storage).length) return '暂无角色记录';
                                const targets = Object.values(storage)
                                    .map((list) => list[0])
                                    .sortBySeat();
                                const ids = Object.keys(storage).sort((a, b) => targets.indexOf(storage[a][0]) - targets.indexOf(storage[b][0]));
                                return ids
                                    .map((id) => {
                                        const [target, ...phaseList] = storage[id];
                                        let str = '<li>' + get.translation(target) + ':<br>';
                                        str += phaseList
                                            .map((event, index) => {
                                                return (
                                                    (phaseList.length > 1 ? (index + 1).toString() + '.' : '') +
                                                    get.translation(event.name) +
                                                    '共使用' +
                                                    target.getAllHistory('useCard', (evt) => {
                                                        return evt.getParent(event.name, true) === event;
                                                    }).length +
                                                    '张牌'
                                                );
                                            })
                                            .join('<br>');
                                        return str;
                                    })
                                    .join('<br>');
                            },
                        },
                        audio: 'qx_chouchu',
                        trigger: { global: ['phaseEnd', 'die'] },
                        filter(event, player) {
                            return player.storage.qx_jieji_effect?.[event.player.playerid];
                        },
                        forced: true,
                        logTarget: 'player',
                        async content(eventx, trigger, player) {
                            let [target, ...phaseList] = player.storage[eventx.name][trigger.player.playerid];
                            delete player.storage[eventx.name][trigger.player.playerid];
                            player[Object.keys(player.storage[eventx.name]).length ? 'markSkill' : 'removeSkill'](eventx.name);
                            while (target.isIn() && phaseList.length) {
                                const event = phaseList.shift();
                                const num = target.getAllHistory('useCard', (evt) => {
                                    return evt.getParent(event.name, true) === event;
                                }).length;
                                let list = ['摸牌'];
                                if (target.countCards('he')) list.push('重铸');
                                const result = await player
                                    .chooseControl(list, 'cancel2')
                                    .set('target', target)
                                    .set('ai', () => {
                                        const { player, target, controls } = get.event();
                                        return get.effect(target, { name: 'draw' }, player, player) > 0 ? '摸牌' : get.attitude(target, player) > 0 && controls.includes('重铸') ? '重铸' : 'cancel2';
                                    })
                                    .set('prompt', '是否令' + get.translation(target) + '摸' + get.cnNumber(num) + '张牌或重铸任意张牌？')
                                    .forResult();
                                if (result.control !== 'cancel2') {
                                    if (result.control === '摸牌') await target.draw(num);
                                    else if (target.hasCard((card) => target.canRecast(card), 'he')) {
                                        const { resultx } = await target.chooseCard('he', true, '重铸任意张牌', lib.filter.cardRecastable, [1, Infinity]).set('ai', lib.skill.zhiheng.check);
                                        if (resultx?.bool && resultx.cards?.length) await target.recast(resultx.cards);
                                    }
                                }
                            }
                        },
                    },
                },
            },
            qx_shenhao: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'useCard' },
                filter(event, player) {
                    return (
                        player
                            .getHistory('useCard', (evt) => {
                                const type = get.type2(evt.card);
                                return ['basic', 'trick', 'equip'].includes(type) && get.type2(event.card) === type;
                            })
                            .indexOf(event) === 0
                    );
                },
                forced: true,
                content() {
                    let list = [];
                    while (true) {
                        const card = get.cardPile2((card) => {
                            return !list.some((cardx) => {
                                const sub = { basic: 'type2', trick: 'suit', equip: 'number' }[get.type2(trigger.card)];
                                return get[sub](cardx) === get[sub](card);
                            });
                        });
                        if (card) list.push(card);
                        else break;
                    }
                    if (list.length) player.gain(list, 'gain2');
                },
            },
            qx_yingfeng: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.hasCard((card) => card.name !== 'shan', 'h') && game.hasPlayer((target) => target !== player);
                },
                usable: 1,
                filterTarget: lib.filter.notMe,
                filterCard(card, player) {
                    return card.name !== 'shan';
                },
                check: () => 1,
                lose: false,
                discard: false,
                delay: false,
                selectCard: () => -ui.selected.targets.length,
                complexSelect: true,
                async content(event, trigger, player) {
                    const { cards, targets } = event,
                        [target] = targets;
                    await player.give(cards, target);
                    const next = target.phase('nodelay');
                    player.addSkill('qx_yingfeng_effect');
                    player.markAuto('qx_yingfeng_effect', [next]);
                },
                ai: {
                    order: 1,
                    result: {
                        player(player, target) {
                            if (target.hasJudge('lebu') || get.attitude(player, target) <= 0) return -1;
                            if (target.isTurnedOver()) return 0.18;
                            return get.threaten(target) / Math.sqrt(target.getHp() + 1) / Math.sqrt(target.countCards('h') + 1);
                        },
                    },
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        audio: 'qx_yingfeng',
                        trigger: { global: 'useCard' },
                        filter(event, player) {
                            const maxHp = event.player.maxHp;
                            if (typeof maxHp !== 'number' || maxHp <= 0) return false;
                            const eventx = event.getParent('phase', true);
                            return eventx?.player === event.player && player.getStorage('qx_yingfeng_effect').includes(eventx);
                        },
                        forced: true,
                        logTarget: 'player',
                        content() {
                            player.draw(trigger.player.maxHp);
                            player.gainMaxHp();
                        },
                    },
                },
            },
            qx_jiren: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: ['gainMaxHpEnd', 'loseMaxHpEnd'] },
                filter(event, player) {
                    return game.hasPlayer((target) => {
                        return lib.inpile.some((name) => {
                            if (get.type(name) !== 'trick') return false;
                            return player.canUse({ name }, target, false);
                        });
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2('qx_jiren'), (card, player, target) => {
                            return lib.inpile.some((name) => {
                                if (get.type(name) !== 'trick') return false;
                                return player.canUse({ name }, target, false);
                            });
                        })
                        .set('ai', (target) => {
                            const player = get.player(),
                                event = get.event().getTrigger();
                            return lib.inpile
                                .filter((name) => {
                                    if (get.type(name) !== 'trick') return false;
                                    return player.canUse({ name }, target, false);
                                })
                                .sort((a, b) => {
                                    return get.effect(target, new lib.element.VCard({ name: b }), player, player) - get.effect(target, new lib.element.VCard({ name: a }), player, player);
                                })[0];
                        })
                        .set('animate', false)
                        .forResult();
                    if (!event.result?.bool || !event.result.targets?.length) return;
                    const [target] = event.result.targets,
                        list = lib.inpile.filter((name) => {
                            if (get.type(name) !== 'trick') return false;
                            return player.canUse({ name }, target, false);
                        });
                    const result =
                        list.length > 1
                            ? await player
                                .chooseButton(['请选择其中一张牌视为对其使用', [list, 'vcard']], true)
                                .set('ai', (button) => {
                                    const player = get.player(),
                                        [target] = get.event().parent.result.targets;
                                    return get.effect(target, new lib.element.VCard({ name: button.link[2] }), player, player);
                                })
                                .forResult()
                            : { bool: true, links: [['萌新转型中', '随性似风', list[0]]] };
                    event.result.bool = result?.bool && result.links?.length;
                    if (event.result.bool) event.result.cost_data = result.links[0][2];
                },
                popup: false,
                content() {
                    player.useCard({ name: event.cost_data }, event.targets, false);
                },
            },
            qx_zhangrong: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    return get.type2(event.card) === 'trick' && player.maxHp > 0;
                },
                forced: true,
                async content(event, trigger, player) {
                    const num = player.maxHp;
                    const color = await player.judge().forResult('color');
                    if (color === 'red') {
                        await player.draw(num);
                        await player.gainMaxHp();
                    }
                    if (color === 'black') {
                        if (!_status.characterlist) lib.skill.pingjian.initList();
                        const names = _status.characterlist
                            .filter((name) => {
                                const info = get.character(name);
                                return ['double', 'female'].includes(info.sex) && info.skills?.some((skill) => !player.hasSkill(null, false, false));
                            })
                            .randomGets(num);
                        if (names?.length) {
                            for (const name of names) {
                                player.flashAvatar(event.name, name);
                                await player.addTempSkills(get.character(name).skills.randomGet(), { player: 'phaseEnd' });
                            }
                        }
                    }
                },
            },
            qx_tingzheng: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'useCardToPlayer' },
                filter(event, player) {
                    return event.isFirstTarget && event.targets.some((i) => i !== player);
                },
                forced: true,
                async content(event, trigger, player) {
                    await player.draw(trigger.targets.length);
                    const targets = game.filterPlayer((target) => player.inRange(target)).sortBySeat();
                    if (targets.length) {
                        player.line(targets);
                        for (const target of targets) {
                            const result = await target
                                .chooseToDiscard(
                                    'he',
                                    (card, player) => {
                                        return get.type2(card) === get.type2(get.event().getTrigger().card);
                                    },
                                    '弃置一张' + get.translation(get.type2(trigger.card)) + '牌,或令所有非锁定技失效直到下个回合开始'
                                )
                                .set('ai', (card) => {
                                    const player = get.player();
                                    return (
                                        player.getSkills(null, false, false).reduce((sum, skill) => {
                                            return sum + get.skillRank(skill, 'out');
                                        }, 0) - get.value(card)
                                    );
                                })
                                .forResult();
                            if (!result?.bool) target.addTempSkill('fengyin', { player: 'phaseBegin' });
                        }
                    }
                },
            },
            qx_quedi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'useCardToPlayered' },
                filter(event, player) {
                    if (event.player === event.target) return false;
                    if (player.storage.qx_quedi && !event.target.countCards('hej')) return false;
                    if (
                        !player.storage.qx_quedi &&
                        !event.player.getSkills(null, false, false).some((skill) => {
                            const info = get.info(skill);
                            return info && !info.charlotte;
                        })
                    )
                        return false;
                    return event.card && event.card.name === 'sha' || (get.type(event.card) === 'trick' && get.tag(event.card, 'damage'));
                },
                check(event, player) {
                    return get.attitude(player, event.target) < 0;
                },
                prompt2(event, player) {
                    const storage = player.storage.qx_quedi;
                    let str = get.info('qx_quedi').intro.content(storage);
                    if (!storage) {
                        const skills = event.target.getSkills(null, false, false).filter((skill) => {
                            const info = get.info(skill);
                            return info && !info.charlotte;
                        });
                        return str
                            .replace(
                                '当前拥有的所有武将牌上的技能',
                                skills
                                    .map((skill) => {
                                        return '【' + get.translation(skill) + '】';
                                    })
                                    .join('、')
                            )
                            .replace('其失去技能数', get.cnNumber(skills.length));
                    }
                    return str;
                },
                logTarget: 'target',
                async content(event, trigger, player) {
                    const { target } = trigger;
                    player.changeZhuanhuanji(event.name);
                    if (player.storage[event.name]) {
                        const skills = target.getSkills(null, false, false).filter((skill) => {
                            const info = get.info(skill);
                            return info && !info.charlotte;
                        });
                        if (skills.length) {
                            await target.removeSkills(skills);
                            target
                                .when({ global: 'useCardAfter' })
                                .filter((evt) => evt === trigger.parent)
                                .then(() => player.addSkills(skills))
                                .vars({ skills: skills });
                        }
                    } else {
                        const cards = target.getCards('hej');
                        await (() => {
                            const next = target.addToExpansion(cards, 'giveAuto', target);
                            next.gaintag.add('qx_quedi_cards');
                            return next;
                        })();
                        target
                            .when({ global: 'useCardAfter' })
                            .filter((evt) => evt === trigger.parent)
                            .then(() => player.gain(player.getExpansions('qx_quedi_cards'), 'gain2'));
                        const id = target.playerid;
                        const map = trigger.parent.customArgs;
                        if (!map[id]) map[id] = {};
                        if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
                        map[id].extraDamage += cards.length;
                        game.log(trigger.card, '对', target, '造成的伤害', '#y+' + cards.length);
                    }
                },
                ai: {
                    ignoreSkill: true,
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (!arg || arg.isLink || !arg.card || !arg.card.name === 'sha' || (get.type(arg.card) === 'trick' && get.tag(arg.card, 'damage'))) return false;
                        if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
                        if (tag === 'directHit_ai') return player.storage.qx_quedi;
                        return (
                            !player.storage.qx_quedi &&
                            arg.skill &&
                            arg.target
                                .getSkills(null, false, false)
                                .filter((skill) => {
                                    const info = get.info(skill);
                                    return info && !info.charlotte;
                                })
                                .includes(arg.skill)
                        );
                    },
                },
                mark: true,
                marktext: '☯',
                zhuanhuanji: true,
                intro: {
                    content(storage) {
                        return (
                            '当你使用【杀】或伤害类锦囊牌指定一名其他角色为目标后,你可以' +
                            (() => {
                                if (!storage) return '令其失去当前拥有的所有武将牌上的技能,于此牌结算完毕后获得之,然后你摸其失去技能数张牌';
                                return '将其区域里的所有牌移出游戏,于此牌结算完毕后获得之,然后此牌对其造成的伤害+其移去的牌数';
                            })()
                        );
                    },
                },
                group: 'qx_quedi_change',
                subSkill: {
                    cards: {
                        intro: {
                            markcount: 'expansion',
                            mark(dialog, storage, player) {
                                const cards = player.getExpansions('qx_quedi_card');
                                if (player.isUnderControl(true)) dialog.addAuto(cards);
                                return '共有' + get.cnNumber(cards.length) + '张牌';
                            },
                        },
                    },
                    change: {
                        audio: 'qx_quedi',
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        filter(event, player) {
                            return event.name !== 'phase' || game.phaseNumber === 0;
                        },
                        prompt2(event, player) {
                            return '将【' + get.translation('qx_quedi') + '】切换至' + (player.storage.qx_quedi ? '阴' : '阳') + '状态';
                        },
                        check: () => Math.random() > 0.5,
                        content() {
                            player.changeZhuanhuanji('qx_quedi');
                        },
                    },
                },
            },
            qx_yongjin: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseEnd' },
                filter(event, player) {
                    return player.countDiscardableCards(player, 'he');
                },
                async cost(event, trigger, player) {
                    const num = player.getHistory('useCard').length;
                    const cards = player.getDiscardableCards(player, 'he');
                    const choices = cards
                        .map((card) => get.type2(card))
                        .unique()
                        .sort((a, b) => {
                            const list = ['basic', 'trick', 'equip'];
                            return list.indexOf(b) - list.indexOf(a);
                        })
                        .reverse();
                    const result =
                        choices.length > 1
                            ? await player
                                .chooseControl(choices)
                                .set('prompt', '勇进:请选择一个类别')
                                .set('ai', () => {
                                    const { player, cards, controls } = get.event();
                                    return controls.slice().sort((a, b) => {
                                        return (
                                            cards
                                                .filter((card) => {
                                                    return get.type2(card) === a;
                                                })
                                                .reduce((sum, card) => {
                                                    return sum + get.value(card, player);
                                                }, 0) -
                                            cards
                                                .filter((card) => {
                                                    return get.type2(card) === b;
                                                })
                                                .reduce((sum, card) => {
                                                    return sum + get.value(card, player);
                                                }, 0)
                                        );
                                    })[0];
                                })
                                .set('cards', cards)
                                .set('prompt2', '弃置一种类别的所有牌' + (num > 0 ? ',然后摸' + get.cnNumber(num) + '张牌(本轮不计入手牌上限)' : ''))
                                .forResult()
                            : { control: choices[0] };
                    event.result = { bool: true, cost_data: result.control };
                },
                async content(event, trigger, player) {
                    await player.discard(player.getDiscardableCards(player, 'he', (card) => get.type2(card) === event.cost_data));
                    const num = player.getHistory('useCard').length;
                    if (num > 0) {
                        player.addTempSkill('qx_yongjin_effect', 'roundStart');
                        await (() => {
                            const next = player.draw(num);
                            next.gaintag = ['qx_yongjin_effect'];
                            return next;
                        })();
                    }
                },
                group: 'qx_yongjin_xuanfeng',
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove(player, skill) {
                            player.removeGaintag(skill);
                        },
                        mod: {
                            ignoredHandcard(card, player) {
                                if (card.hasGaintag('qx_yongjin_effect')) return true;
                            },
                            cardDiscardable(card, player, name) {
                                if (name === 'phaseDiscard' && card.hasGaintag('qx_yongjin_effect')) return false;
                            },
                        },
                    },
                    xuanfeng: {
                        audio: 'qx_yongjin',
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            return game.hasPlayer((target) => target.countCards('h'));
                        },
                        async cost(event, trigger, player) {
                            const num = player.getHistory('useCard').length;
                            event.result = await player
                                .chooseTarget(get.prompt('qx_yongjin'), '令一名角色弃置' + get.cnNumber(num) + '张手牌')
                                .set('ai', (target) => {
                                    const { player, num } = get.event();
                                    return get.effect(target, { name: 'guohe_copy', position: 'h' }, player, player) * Math.sqrt(Math.min(num, target.countDiscardableCards(target, 'h')));
                                })
                                .set('num', num)
                                .forResult();
                        },
                        content() {
                            const [target] = event.targets,
                                num = player.getHistory('useCard').length;
                            target.chooseToDiscard(num, 'h', true);
                        },
                    },
                },
            },
            qx_xuanlve: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter'] },
                getIndex(event, player, triggername) {
                    return event.getd().filter((card) => {
                        const type = get.type2(card, false);
                        return type === 'basic' || type === 'trick' || (type === 'equip' && game.hasPlayer((target) => player.inRange(target)));
                    });
                },
                async cost(event, trigger, player) {
                    const card = event.indexedData,
                        type = get.type2(card, false);
                    if (type === 'basic' || type === 'trick') event.result = { bool: true };
                    else
                        event.result = await player
                            .chooseTarget(get.prompt('qx_xuanlve'), '对一名攻击范围内的角色造成1点伤害', (card, player, target) => {
                                return player.inRange(target);
                            })
                            .set('ai', (target) => {
                                const player = get.player();
                                return get.damageEffect(target, player, player);
                            })
                            .forResult();
                },
                async content(event, trigger, player) {
                    const card = event.indexedData,
                        type = get.type2(card, false);
                    switch (type) {
                        case 'basic':
                            player.draw();
                            break;
                        case 'trick':
                            player.addSkill('qx_xuanlve_hand');
                            player.addMark('qx_xuanlve_hand', 1, false);
                            break;
                        case 'equip':
                            await event.targets[0].damage();
                            break;
                    }
                },
                subSkill: {
                    hand: {
                        charlotte: true,
                        markimage: 'image/card/handcard.png',
                        intro: { content: '手牌上限+#' },
                        mod: {
                            maxHandcard(player, num) {
                                return num + player.countMark('qx_xuanlve_hand');
                            },
                        },
                    },
                },
            },
            qx_fendi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    if (!event.card || event.player === player || !event.player.countCards('h')) return false;
                    return event.card && event.card.name === 'sha' || (get.type(event.card) === 'trick' && get.tag(event.card, 'damage'));
                },
                check(event, player) {
                    return get.effect(event.player, { name: 'shunshou_copy', position: 'h' }, player, player) > 0;
                },
                usable: 2,
                logTarget: 'player',
                async content(event, trigger, player) {
                    const target = trigger.player;
                    const cards = target.getGainableCards(player, 'he');
                    const choices = cards
                        .map((card) => get.type2(card))
                        .unique()
                        .sort((a, b) => {
                            const list = ['basic', 'trick', 'equip'];
                            return list.indexOf(b) - list.indexOf(a);
                        })
                        .reverse();
                    if (choices.length) {
                        const result =
                            choices.length > 1
                                ? await player
                                    .chooseControl(choices)
                                    .set('prompt', '请选择一个类别')
                                    .set('ai', () => {
                                        const { player, cards, controls } = get.event();
                                        return controls.slice().sort((a, b) => {
                                            return (
                                                cards
                                                    .filter((card) => {
                                                        return get.type2(card) === b;
                                                    })
                                                    .reduce((sum, card) => {
                                                        return sum + get.value(card, player);
                                                    }, 0) -
                                                cards
                                                    .filter((card) => {
                                                        return get.type2(card) === a;
                                                    })
                                                    .reduce((sum, card) => {
                                                        return sum + get.value(card, player);
                                                    }, 0)
                                            );
                                        })[0];
                                    })
                                    .set('cards', cards)
                                    .set('dialog', ['获得' + get.translation(target) + '一种类别的所有手牌', 'hidden', target.getCards('h')])
                                    .forResult()
                                : { control: choices[0] };
                        const type = result.control;
                        if (type)
                            await player.gain(
                                target.getCards('h', (card) => get.type2(card) === type),
                                target,
                                'giveAuto'
                            );
                    } else {
                        player.viewHandcards(target);
                    }
                },
            },
            qx_tianxiang: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    if (event.player === player) return false;
                    return event.player.getHistory('useCard').length > event.player.getHp() && get.info('qx_tianxiang').getCards(event.player).length;
                },
                getCards(player) {
                    return player
                        .getAllHistory('lose', (evt) => {
                            return evt.position === ui.discardPile;
                        })
                        .reduce((list, evt) => list.addArray(evt.cards2.filterInD('d')), [])
                        .concat(
                            game
                                .getAllGlobalHistory('cardMove', (evt) => {
                                    if (evt.name !== 'cardsDiscard') return false;
                                    const evtx = evt.parent;
                                    if (evtx.name !== 'orderingDiscard') return false;
                                    const evt2 = evtx.relatedEvent || evtx.parent;
                                    const current = evt2.player;
                                    if (evt2.name === 'phaseJudge' || current !== player) return false;
                                    return current.hasAllHistory('lose', (evtx3) => {
                                        const evtx4 = evtx3.relatedEvent || evtx3.parent;
                                        if (evt2 != evtx4) return false;
                                        return evtx3.getl(current).cards2.length;
                                    });
                                })
                                .reduce((list, evt) => list.addArray(evt.cards.filterInD('d')), [])
                        );
                },
                prompt2(event, player) {
                    return '获得' + get.translation(get.info('qx_tianxiang').getCards(event.player)) + '并执行一个额外的出牌阶段';
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    await player.gain(get.info('qx_tianxiang').getCards(trigger.player));
                    await player.phaseUse();
                },
            },
            qx_jubing: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'useCardToPlayered' },
                filter(event, player) {
                    return (
                        event.target !== player &&
                        event.target.hasCard((card) => {
                            return !player.getStorage('qx_jubing_used').includes(get.type2(card));
                        }, 'hej')
                    );
                },
                async cost(event, trigger, player) {
                    const target = trigger.target;
                    event.result = player
                        .choosePlayerCard(target, 'he', get.prompt2('qx_jubing', target))
                        .set('filterButton', (button) => {
                            const player = get.player(),
                                card = button.link;
                            return !player.getStorage('qx_jubing_used').includes(get.type2(card));
                        })
                        .forResult();
                },
                logTarget: 'target',
                content() {
                    player.addTempSkill('qx_jubing_used');
                    player.markAuto('qx_jubing_used', event.cards.map((i) => get.type2(i)).unique());
                    player.addToExpansion(trigger.target, event.cards, 'give').gaintag.add('qx_jubing');
                },
                marktext: '兵',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    player.removeGaintag(skill);
                    const cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                mod: {
                    ignoredHandcard(card, player) {
                        if (card.hasGaintag('qx_jubing')) return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name === 'phaseDiscard' && card.hasGaintag('qx_jubing')) return false;
                    },
                },
                group: 'qx_jubing_gain',
                subSkill: {
                    used: {
                        charlotte: true,
                    },
                    gain: {
                        audio: 'qx_jubing',
                        trigger: { player: 'phaseEnd' },
                        filter(event, player) {
                            return player.getExpansions('qx_jubing').length;
                        },
                        forced: true,
                        content() {
                            player.gain(player.getExpansions('qx_jubing'), player, 'give').gaintag.add('qx_jubing');
                        },
                    },
                },
            },
            // 当你需要使用牌时,你可以将武将牌上的任意张<兵>置入弃牌堆,然后视为使用一张与这些<兵>牌名字数之和相等的牌,你可以令以此法使用的牌额外结算X次(X为你的体力上限)
            qx_bujun: {
                hiddenCard(player, namex) {
                    const hs = player.getExpansions('qx_jubing');
                    if (!hs.length) return false;
                    const numx = hs.reduce((sum, i) => sum + get.cardNameLength(i), 0);
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                num = get.cardNameLength(name);
                            const type = get.type(name);
                            return ['basic', 'trick'].includes(type) && numx > num;
                        })
                        .map((info) => info[2])
                        .includes(namex);
                },
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'chooseToUse',
                filter(event, player) {
                    const hs = player.getExpansions('qx_jubing');
                    if (!hs.length) return false;
                    const numx = hs.reduce((sum, i) => sum + get.cardNameLength(i), 0);
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                num = get.cardNameLength(name);
                            const type = get.type(name);
                            return ['basic', 'trick'].includes(type) && numx > num;
                        })
                        .some((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                },
                chooseButton: {
                    dialog(event, player) {
                        const hs = player.getExpansions('qx_jubing');
                        const numx = hs.reduce((sum, i) => sum + get.cardNameLength(i), 0);
                        const list = get
                            .inpileVCardList((info) => {
                                const name = info[2],
                                    num = get.cardNameLength(name);
                                const type = get.type(name);
                                return ['basic', 'trick'].includes(type) && numx > num;
                            })
                            .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                        return ui.create.dialog('布军', '<div class="text center">请选择视为使用的牌</div>', [list, 'vcard'], '<div class="text center">请选择你要移去的<兵></div>', hs, 'hidden');
                    },
                    filter(button) {
                        if (Boolean(ui.selected.buttons.length) !== (get.itemtype(button.link) === 'card')) return false;
                        if (ui.selected.buttons.length) {
                            const name = ui.selected.buttons[0].link[2],
                                num = get.cardNameLength(name);
                            return (
                                num -
                                ui.selected.buttons
                                    .slice(1)
                                    .map((i) => i.link)
                                    .reduce((sum, card) => sum + get.cardNameLength(card), 0) >=
                                get.cardNameLength(button.link)
                            );
                        }
                        return true;
                    },
                    check(button) {
                        const player = _status.event.player;
                        const num = player.getUseValue(
                            {
                                name: button.link[2],
                                nature: button.link[3],
                            },
                            null,
                            true
                        );
                        return number0(num) + 10;
                    },//QQQ
                    select: [2, Infinity],
                    filterOk() {
                        if (!ui.selected.buttons.length) return false;
                        const [viewAs, ...cards] = ui.selected.buttons.map((i) => i.link);
                        return get.cardNameLength(viewAs[2]) === cards.reduce((sum, card) => sum + get.cardNameLength(card), 0);
                    },
                    backup(links, player) {
                        const [viewAs, ...cards] = links;
                        return {
                            audio: 'qx_bujun',
                            filterCard: () => false,
                            selectCard: -1,
                            popname: true,
                            removeCards: cards,
                            viewAs: { name: viewAs[2], nature: viewAs[3], storage: { qx_bujun: true } },
                            precontent() {
                                player.addTempSkill('qx_bujun_effect');
                                player.loseToDiscardpile(get.info('qx_bujun_backup').removeCards);
                            },
                        };
                    },
                    prompt(links) {
                        const [viewAs, ...cards] = links;
                        return '###布军###<div class="text center">移去' + get.translation(cards) + ',视为' + (get.translation(viewAs[3]) || '') + '【' + get.translation(viewAs[2]) + '】</div>';
                    },
                },
                ai: {
                    combo: 'qx_jubing',
                    fireAttack: true,
                    respondSha: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg === 'respond') return false;
                        if (!player.getExpansions('qx_jubing').length) return false;
                    },
                    order(item, player) {
                        const event = get.event();
                        if (player && event?.type === 'phase') {
                            const hs = player.getExpansions('qx_jubing');
                            const numx = hs.reduce((sum, i) => sum + get.cardNameLength(i), 0);
                            const cards = get
                                .inpileVCardList((info) => {
                                    const name = info[2],
                                        num = get.cardNameLength(name);
                                    const type = get.type(name);
                                    return ['basic', 'trick'].includes(type) && numx > num;
                                })
                                .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event))
                                .sort((a, b) => {
                                    return player.getUseValue({ name: b[2], nature: b[3] }) - player.getUseValue({ name: a[2], nature: a[3] });
                                });
                            if (cards.length) {
                                const card = { name: cards[0][2], nature: cards[0][3] };
                                if (player.getUseValue(card) > 0) return 0.1 + get.order(card, player);
                            }
                            return 0;
                        }
                        return 0.5;
                    },
                    result: {
                        player(player) {
                            const event = get.event();
                            if (event?.dying) return get.attitude(player, event?.dying);
                            return 1;
                        },
                    },
                },
                subSkill: {
                    backup: {},
                    effect: {
                        charlotte: true,
                        audio: 'qx_bujun',
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            if (!event.card?.storage?.qx_bujun) return false;
                            return player.maxHp > 0 && lib.skill.dcshixian.filterx(event);
                        },
                        check(event, player) {
                            return (
                                (event.targets?.reduce((sum, target) => {
                                    return sum + get.effect(target, event.card, event.player, player);
                                }, 0) <
                                    0) ^
                                !get.tag(event.card, 'norepeat')
                            );
                        },
                        prompt2(event, player) {
                            return '令' + get.translation(event.card) + '额外结算' + get.cnNumber(player.maxHp) + '次';
                        },
                        content() {
                            trigger.effectCount += player.maxHp;
                            game.log(trigger.card, '额外结算' + get.cnNumber(player.maxHp) + '次');
                        },
                    },
                },
            },
            qx_rebujun: {
                enable: 'phaseUse',
                audio: 'ext:群星荟萃/audio/skill:2',
                filter(event, player) {
                    if (!player.getExpansions('qx_jubing').length < Math.max(1, player.getHp())) return false;
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                type = get.type(name);
                            return type === 'basic' || type === 'trick';
                        })
                        .some((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                },
                usable: 1,
                chooseButton: {
                    dialog(event, player) {
                        const hs = player.getExpansions('qx_jubing');
                        const list = get
                            .inpileVCardList((info) => {
                                const name = info[2],
                                    type = get.type(name);
                                return type === 'basic' || type === 'trick';
                            })
                            .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                        return ui.create.dialog('布军', '<div class="text center">请选择视为使用的牌</div>', [list, 'vcard'], '<div class="text center">请选择你要移去的<兵></div>', hs, 'hidden');
                    },
                    select: () => Math.max(1, get.player().getHp()) + 1,
                    filter(button, player) {
                        if (Boolean(ui.selected.buttons.length) !== player.getStorage('qx_jubing').includes(button.link)) return false;
                        if (!ui.selected.buttons.length) return get.player().hasUseTarget({ name: button.link[2], nature: button.link[3] });
                        return true;
                    },
                    check(button) {
                        if (get.itemtype(button.link) === 'vcard') return get.player().getUseValue({ name: button.link[2], nature: button.link[3] });
                        return 1;
                    },
                    backup(links, player) {
                        const [viewAs, ...cards] = links;
                        return {
                            audio: 'qx_bujun',
                            filterCard: () => false,
                            selectCard: -1,
                            popname: true,
                            removeCards: cards,
                            viewAs: { name: viewAs[2], nature: viewAs[3], storage: { qx_rebujun: true } },
                            precontent() {
                                player.addTempSkill('qx_rebujun_effect');
                                player.loseToDiscardpile(get.info('qx_rebujun_backup').removeCards);
                            },
                        };
                    },
                    prompt(links) {
                        const [viewAs, ...cards] = links;
                        return '###布军###<div class="text center">移去' + get.translation(cards) + ',视为' + (get.translation(viewAs[3]) || '') + '【' + get.translation(viewAs[2]) + '】</div>';
                    },
                },
                ai: {
                    combo: 'qx_jubing',
                    order(item, player) {
                        const event = get.event();
                        if (player && event?.type === 'phase') {
                            const cards = get
                                .inpileVCardList((info) => {
                                    const name = info[2],
                                        type = get.type(name);
                                    return type === 'basic' || type === 'trick';
                                })
                                .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event))//QQQ
                                .sort((a, b) => {
                                    return player.getUseValue({ name: b[2], nature: b[3] }) - player.getUseValue({ name: a[2], nature: a[3] });
                                });
                            if (cards.length) {
                                const card = { name: cards[0][2], nature: cards[0][3] };
                                if (player.getUseValue(card) > 0) return 0.1 + get.order(card, player);
                            }
                            return 0;
                        }
                        return 0.5;
                    },
                    result: {
                        player(player) {
                            const event = get.event();
                            if (event?.dying) return get.attitude(player, event?.dying);
                            return 1;
                        },
                    },
                },
                subSkill: {
                    backup: {},
                    effect: {
                        charlotte: true,
                        audio: 'qx_bujun',
                        trigger: { player: 'useCard2' },
                        filter(event, player) {
                            return event.card?.storage?.qx_rebujun && get.type(event.card) === 'basic';
                        },
                        async cost(event, trigger, player) {
                            event.result = await player
                                .chooseTarget(
                                    '是否为' + get.translation(trigger.card) + '添加至多两个目标',
                                    (card, player, target) => {
                                        const evt = get.event().getTrigger();
                                        return !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
                                    },
                                    [1, 2]
                                )
                                .set('ai', (target) => {
                                    const player = get.player(),
                                        evt = get.event().getTrigger();
                                    return get.effect(target, evt.card, evt.player, player);
                                })
                                .forResult();
                        },
                        content() {
                            trigger.targets.addArray(event.targets);
                            game.log(event.targets, '成为了', trigger.card, '的额外目标');
                        },
                        group: 'qx_rebujun_trick',
                    },
                    trick: {
                        charlotte: true,
                        audio: 'qx_bujun',
                        trigger: { player: 'useCardAfter' },
                        filter(event, player) {
                            if (!event.card?.storage?.qx_rebujun || event.all_excluded || event.parent.name === 'qx_rebujun_trick') return false;
                            return event.targets?.some((i) => player.canUse(event.card, i, false)) && get.type(event.card) === 'trick';
                        },
                        prompt2(event, player) {
                            return '再次对' + get.translation(event.targets.filter((i) => player.canUse(event.card, i, false))) + '使用' + get.translation(event.card);
                        },
                        check(event, player) {
                            return event.targets.reduce((sum, target) => sum + get.effect(target, event.card, player, player), 0) > 0;
                        },
                        logTarget(event, player) {
                            return event.targets.filter((i) => player.canUse(event.card, i, false)).sortBySeat();
                        },
                        content() {
                            player.useCard(trigger.card, event.targets, false).set('cards', trigger.cards || []);
                        },
                    },
                },
            },
            qx_yaoyan: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return game.hasPlayer((t) => t !== player);
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2('qx_yaoyan'), lib.filter.notMe)
                        .set('ai', (target) => {
                            const player = get.player();
                            if (get.attitude(player, target) <= 0) return 0;
                            const list = get.info('qx_yaoyan').getList(player, target);
                            const list1 = list.map((listx) => listx[0][1]).filter((effect) => !effect.filter || effect.filter(player));
                            const list2 = list.map((listx) => listx[0][1]).filter((effect) => !effect.filter || effect.filter(target));
                            return Math.max(...list1.map((effect) => effect.ai(player))) + Math.max(...list2.map((effect) => effect.ai(target)));
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const [target] = event.targets;
                    let list = get
                        .info('qx_yaoyan')
                        .getList(player, target)
                        .map((choice) => {
                            if (choice[0].includes('#')) {
                                choice[0] = choice[0].replaceAll('#', player.maxHp);
                            }
                            return [choice, choice[0]];
                        });
                    for (const current of [player, target]) {
                        const result = await current
                            .chooseButton(['邀宴:请选择执行其中一项', [list, 'textbutton']], true)
                            .set('filterButton', (button) => {
                                const effect = button.link[1];
                                return !effect.filter || effect.filter(get.player());
                            })
                            .set('ai', (button) => button.link[1].ai(get.event().player, get.event().parent.player))
                            .forResult();
                        if (result.bool) {
                            list = list.filter((choice) => !result.links.includes(choice[0]));
                            await result.links[0][1].content(current, player);
                        }
                    }
                },
                getList(player, target) {
                    let list = [
                        [
                            '使用牌无距离和次数限制直到自己的回合结束',
                            {
                                async content(player) {
                                    player.addTempSkill('qx_yaoyan_use', { player: 'phaseEnd' });
                                },
                                ai(player) {
                                    return player.getCards('hs', (card) => player.hasValueTarget(card)).reduce((sum, card) => sum + player.getUseValue(card), 0);
                                },
                            },
                        ],
                        [
                            '重铸所有基本牌',
                            {
                                filter(player) {
                                    return player.hasCard((card) => get.type(card) === 'basic' && player.canRecast(card), 'h');
                                },
                                async content(player) {
                                    const cards = player.getCards('h', (card) => get.type(card) === 'basic' && player.canRecast(card));
                                    await player.recast(cards);
                                },
                                ai(player) {
                                    const cards = player.getCards('h', (card) => get.type(card) === 'basic' && player.canRecast(card));
                                    return get.effect(player, { name: 'draw' }, player, player) * cards.length + cards.reduce((sum, card) => sum + get.info('zhiheng').check(card), 0);
                                },
                            },
                        ],
                        [
                            '跳过下个判定阶段和弃牌阶段',
                            {
                                async content(player) {
                                    player.skip('phaseJudge');
                                    player.skip('phaseDiscard');
                                },
                                ai: () => 2,
                            },
                        ],
                    ];
                    if (get.mode() === 'guozhan' ? target.isFriendsOf(player) : target.group === player.group) {
                        list.addArray([
                            [
                                '摸牌阶段额外摸#张牌',
                                {
                                    async content(player, source) {
                                        player.addSkill('qx_yaoyan_draw');
                                        player.addMark('qx_yaoyan_draw', source.maxHp, false);
                                    },
                                    ai(player, source) {
                                        return get.effect(player, { name: 'draw' }, player, player) * source.maxHp;
                                    },
                                },
                            ],
                            [
                                '随机获得#个吴势力武将牌上的各一个技能直到自己的回合开始',
                                {
                                    async content(player, source) {
                                        if (!_status.characterlist) lib.skill.pingjian.initList();
                                        let names = [],
                                            skills = [];
                                        while (names.length < source.maxHp) {
                                            const name = _status.characterlist
                                                .filter((name) => {
                                                    if (names.includes(name)) return false;
                                                    const info = get.character(name);
                                                    return (
                                                        info?.group === 'wu' &&
                                                        info.skills?.some((skill) => !player.hasSkill(skill, null, false, false)) &&
                                                        info.skills.every((skill) => {
                                                            return !skills.includes(skill);
                                                        })
                                                    );
                                                })
                                                .randomGet();
                                            if (name) {
                                                names.add(name);
                                                skills.add(
                                                    get
                                                        .character(name)
                                                        .skills.filter((skill) => !player.hasSkill(skill, null, false, false))
                                                        .randomGet()
                                                );
                                            } else break;
                                        }
                                        if (skills.length) await player.addTempSkills(skills, { player: 'phaseBegin' });
                                    },
                                    ai(player, source) {
                                        return 3 * source.maxHp;
                                    },
                                },
                            ],
                        ]);
                    }
                    return list;
                },
                subSkill: {
                    use: {
                        charlotte: true,
                        mark: true,
                        intro: { content: '使用牌无距离和次数限制' },
                        mod: {
                            cardUsable: () => Infinity,
                            targetInRange: () => true,
                        },
                    },
                    draw: {
                        charlotte: true,
                        intro: { content: '摸牌阶段额外摸#张牌' },
                        trigger: { player: 'phaseDrawBegin2' },
                        filter(event, player) {
                            return !event.numFixed && player.hasMark('qx_yaoyan_draw');
                        },
                        forced: true,
                        content() {
                            trigger.num += player.countMark(event.name);
                        },
                    },
                },
            },
            qx_zhuning: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    if (event.player === player) return false;
                    return event.player.getHistory('useCard').length > event.player.getHp();
                },
                logTarget: 'player',
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                async content(event, trigger, player) {
                    const target = trigger.player;
                    const cards = target.getDiscardableCards(player, 'he', (card) => get.type(card) === 'basic');
                    if (cards.length) await target.discard(cards).set('discarder', player);
                    await target.damage();
                },
            },
            qx_shibei: {
                zhuSkill: true,
                audio: 'ext:群星荟萃/audio/skill:2',
                global: 'qx_shibei_global',
                subSkill: {
                    global: {
                        audio: 'qx_shibei',
                        forceaudio: true,
                        enable: 'phaseUse',
                        filter(event, player) {
                            if (!player.countCards('he')) return false;
                            return game.hasPlayer((target) => get.info('qx_shibei_global').filterTarget(null, player, target));
                        },
                        filterTarget(孩子们这是牢萌的水印, player, target) {
                            return target !== player && target.hasZhuSkill('qx_shibei', player);
                        },
                        usable: 1,
                        filterCard: true,
                        position: 'he',
                        check(card) {
                            const player = get.player(),
                                cards = player
                                    .getCards('hs', (card) => {
                                        return get.type(card) === 'basic' && player.hasValueTarget(card, false);
                                    })
                                    .sort((a, b) => player.getUseValue(b) - player.getUseValue(a));
                            if (card === cards[0]) return 0;
                            return 7 - get.value(card);
                        },
                        lose: false,
                        discard: false,
                        delay: false,
                        prompt() {
                            const player = get.player(),
                                str = '出牌阶段限一次,你可以交给一名拥有【势备】的角色一张牌,然后你本回合使用基本牌的数值+1';
                            return str + (player.group === 'wu' ? ',使用牌无距离限制,可以令使用的牌额外结算一次' : '');
                        },
                        async content(event, trigger, player) {
                            await player.give(event.cards, event.target);
                            player.addTempSkill('qx_shibei_effect');
                            player.addMark('qx_shibei_effect', 1, false);
                        },
                    },
                    effect: {
                        charlotte: true,
                        intro: {
                            content(num = 0, player) {
                                return [
                                    '使用基本牌数值+' + num,
                                    ...(() => {
                                        if (player.group !== 'wu') return [];
                                        return ['使用牌无距离限制', '使用牌时,可以令此牌额外结算' + num + '次'];
                                    })(),
                                ]
                                    .map((str) => '<li>' + str)
                                    .join('<br>');
                            },
                        },
                        mod: { targetInRange: () => true },
                        audio: 'qx_shibei',
                        trigger: { player: ['useCard1', 'useCard'] },
                        filter(event, player, name) {
                            if (!player.hasMark('qx_shibei_effect')) return false;
                            if (name === 'useCard1') return get.type(event.card) === 'basic';
                            return get.info('dcshixian').filterx(event);
                        },
                        async cost(event, trigger, player) {
                            const name = event.triggername;
                            if (name === 'useCard1') event.result = { bool: true };
                            else {
                                event.result = await player
                                    .chooseBool('是否令' + get.translation(trigger.card) + '额外结算' + get.cnNumber(player.countMark('qx_shibei_effect')) + '次')
                                    .set(
                                        'choice',
                                        (() => {
                                            return (
                                                (trigger.targets?.reduce((sum, target) => {
                                                    return sum + get.effect(target, trigger.card, trigger.player, player);
                                                }, 0) <
                                                    0) ^
                                                !get.tag(trigger.card, 'norepeat')
                                            );
                                        })()
                                    )
                                    .forResult();
                            }
                        },
                        async content(event, trigger, player) {
                            const name = event.triggername,
                                num = player.countMark('qx_shibei_effect');
                            if (name === 'useCard1') {
                                trigger.baseDamage += num;
                                game.log(trigger.card, '数值', '#y+' + num);
                            } else {
                                trigger.effectCount += num;
                                game.log(trigger.card, '额外结算' + get.cnNumber(num) + '次');
                            }
                        },
                    },
                },
            },
            qx_haozhong: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    source: 'damageSource',
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return player.getExpansions('qx_haozhong').length < 10;
                },
                forced: true,
                prompt2: () => '将牌堆或弃牌堆中的一张基本牌置于武将牌上,称为<醇>',
                content() {
                    const card = get.cardPile((card) => get.type(card) === 'basic');
                    if (card) player.addToExpansion([card], 'gain2').gaintag.add('qx_haozhong');
                },
                marktext: '醇',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    const cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                mod: {
                    maxHandcard(player, num) {
                        return num + player.getExpansions('qx_haozhong').length;
                    },
                },
                group: 'qx_haozhong_yingzi',
                subSkill: {
                    yingzi: {
                        audio: 'qx_haozhong',
                        trigger: { player: 'phaseDrawBegin2' },
                        filter(event, player) {
                            return !event.numFixed && player.getExpansions('qx_haozhong').length;
                        },
                        forced: true,
                        content() {
                            trigger.num += player.getExpansions('qx_haozhong').length;
                        },
                    },
                },
            },
            qx_quqian: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    if (!player.getExpansions('qx_haozhong').length) return false;
                    return game.hasPlayer((target) => get.info('qx_quqian').filterTarget(null, player, target));
                },
                filterTarget(孩子们这是牢萌的水印, player, target) {
                    const card = new lib.element.VCard({ name: 'sha', nature: 'fire', storage: { qx_quqian: true } });
                    return player.canUse(card, target, false);
                },
                selectTarget() {
                    return [1, get.player().getExpansions('qx_haozhong').length];
                },
                usable: 1,
                multiline: true,
                multitarget: true,
                async content(event, trigger, player) {
                    const targets = event.targets.sortBySeat();
                    await player.loseToDiscardpile(player.getExpansions('qx_haozhong').slice(0, targets.length));
                    const card = new lib.element.VCard({ name: 'sha', nature: 'fire', storage: { qx_quqian: true } });
                    const next = player.useCard(card, targets, false);
                    next.oncard = function () {
                        const event = get.event();
                        event.directHit.addArray(game.players);
                    };
                    await next;
                    if (player.hasHistory('sourceDamage', (evt) => evt.getParent('useCard') === next)) {
                        await player.draw(player.getHistory('sourceDamage', (evt) => evt.getParent('useCard') === next).reduce((sum, evt) => sum + evt.num, 0));
                    }
                },
                ai: {
                    combo: 'qx_haozhong',
                    order(item, player) {
                        const card = new lib.element.VCard({ name: 'sha', nature: 'fire', storage: { qx_quqian: true } });
                        return get.order(card, player) + 0.2;
                    },
                    result: {
                        player(player, target) {
                            const card = new lib.element.VCard({ name: 'sha', nature: 'fire', storage: { qx_quqian: true } });
                            return get.effect(target, card, player, player);
                        },
                    },
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (!arg || !arg.card || !arg.target) return false;
                        return arg.card?.storage?.qx_quqian;
                    },
                },
            },
            qx_guanzhen: {
                mod: {
                    globalTo(player, target, num) {
                        return num + game.countGroup();
                    },
                    attackRange(player, num) {
                        return num + game.countGroup();
                    },
                },
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseDrawBegin2' },
                filter(event, player) {
                    return !event.numFixed;
                },
                forced: true,
                content() {
                    trigger.num += game.countGroup();
                },
            },
            qx_zhenpo: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    const hs = player.getDiscardableCards(player, 'he');
                    if (!hs.length) return false;
                    const numx = hs.reduce((sum, i) => sum + get.cardNameLength(i), 0);
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                num = get.cardNameLength(name);
                            const type = get.type(name);
                            return ['basic', 'trick'].includes(type) && numx > num;
                        })
                        .some((item) => player.hasUseTarget({ name: item[2], nature: item[3] }));
                },
                filterCard(card, player) {
                    if (!lib.filter.cardDiscardable(card, player)) return false;
                    const hs = [card].concat(ui.selected.cards);
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                num = get.cardNameLength(name);
                            if (hs.reduce((sum, i) => sum + get.cardNameLength(i), 0) > num) return false;
                            const type = get.type(name);
                            return type === 'basic' || type === 'trick';
                        })
                        .some((item) => player.hasUseTarget({ name: item[2], nature: item[3] }));
                },
                position: 'he',
                selectCard: [1, Infinity],
                complexCard: true,
                filterOk() {
                    const player = get.player(),
                        hs = ui.selected.cards;
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                num = get.cardNameLength(name);
                            if (hs.reduce((sum, i) => sum + get.cardNameLength(i), 0) !== num) return false;
                            const type = get.type(name);
                            return type === 'basic' || type === 'trick';
                        })
                        .some((item) => player.hasUseTarget({ name: item[2], nature: item[3] }));
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseButton(
                            [
                                '震魄:请选择一张牌使用',
                                [
                                    get
                                        .inpileVCardList((info) => {
                                            const name = info[2],
                                                num = get.cardNameLength(name);
                                            if (event.cards.reduce((sum, i) => sum + get.cardNameLength(i), 0) !== num) return false;
                                            const type = get.type(name);
                                            return type === 'basic' || type === 'trick';
                                        })
                                        .filter((item) => player.hasUseTarget({ name: item[2], nature: item[3] })),
                                    'vcard',
                                ],
                            ],
                            true
                        )
                        .set('ai', (button) => {
                            const player = get.player(),
                                item = button.link;
                            return player.getUseValue({ name: item[2], nature: item[3] });
                        })
                        .forResult();
                    if (result?.bool && result.links?.length) {
                        const [item] = result.links,
                            card = new lib.element.VCard({ name: item[2], nature: item[3], storage: { qx_zhenpo: true } });
                        player.addTempSkill('qx_zhenpo_effect');
                        await player.chooseUseTarget(card, true, false);
                    }
                },
                ai: {
                    order(item, player) {
                        if (player) {
                            const event = get.event();
                            const hs = player.getDiscardableCards(player, 'he');
                            const numx = hs.reduce((sum, i) => sum + get.cardNameLength(i), 0);
                            const cards = get
                                .inpileVCardList((info) => {
                                    const name = info[2],
                                        num = get.cardNameLength(name);
                                    const type = get.type(name);
                                    return ['basic', 'trick'].includes(type) && numx > num;
                                })
                                .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event))
                                .sort((a, b) => {
                                    return player.getUseValue({ name: b[2], nature: b[3] }) - player.getUseValue({ name: a[2], nature: a[3] });
                                });
                            if (cards.length) {
                                const card = { name: cards[0][2], nature: cards[0][3] };
                                if (player.getUseValue(card) > 0) return 0.1 + get.order(card, player);
                            }
                            return 0;
                        }
                        return 0;
                    },
                    result: { player: 1 },
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        audio: 'qx_zhenpo',
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            return event.card?.storage?.qx_zhenpo;
                        },
                        getIndex(event, player, triggername) {
                            return game.filterPlayer((target) => player.inRange(target) && target.countCards('h'));
                        },
                        forced: true,
                        content() {
                            const target = event.indexedData;
                            player.gainPlayerCard(target, 'h');
                        },
                    },
                },
            },
            qx_xiongba: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    if (event.player === player) return false;
                    return event.player.isIn() && event.player.countGainableCards(player, 'h');
                },//QQQ
                forced: true,
                logTarget: 'player',
                async content(event, trigger, player) {
                    const target = trigger.player;
                    const cards = await player.gainPlayerCard(target, 'h', true).forResult('cards');
                    if (cards?.length) {
                        const [card] = cards,
                            type = get.type2(card, false);
                        switch (type) {
                            case 'basic':
                            case 'equip':
                                player.addTempSkill(event.name + '_' + type);
                                player.addMark(event.name + '_' + type, 1, false);
                                break;
                            case 'trick':
                                const skills = target.getStockSkills(true, true).filter((skill) => get.info(skill) && !get.info(skill).charlotte && !player.hasSkill(skill, null, false, false));
                                if (skills.length) {
                                    const skill =
                                        skills.length > 1
                                            ? await player
                                                .chooseControl(skills)
                                                .set(
                                                    'choiceList',
                                                    skills.map((i) => {
                                                        return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                                                    })
                                                )
                                                .set('displayIndex', false)
                                                .set('prompt', '熊霸:选择获得' + get.translation(target) + '武将牌上的一个技能直到你的下个回合开始')
                                                .set('ai', () => {
                                                    let list = get.event().controls.slice();
                                                    return list.sort((a, b) => get.skillRank(b, 'in') - get.skillRank(a, 'in'))[0];
                                                })
                                                .forResult('control')
                                            : skills[0];
                                    if (skill) {
                                        player.popup(skill);
                                        await player.addTempSkills(skill, { player: 'phaseBegin' });
                                    }
                                }
                                break;
                        }
                    }
                },
                subSkill: {
                    basic: {
                        charlotte: true,
                        marktext: '基',
                        intro: { content: '使用牌不可被响应且造成的伤害+#' },
                        trigger: { player: 'useCard' },
                        forced: true,
                        content() {
                            trigger.directHit.addArray(game.players);
                            trigger.baseDamage += player.countMark(event.name);
                        },
                        ai: { directHit_ai: true },
                    },
                    equip: {
                        charlotte: true,
                        marktext: '装',
                        intro: { content: '计算与其他角色的距离-#' },
                        mod: {
                            globalFrom(player, target, num) {
                                return num - player.countMark('qx_xiongba_equip');
                            },
                        },
                    },
                },
            },
            qx_cien: {
                mark: true,
                marktext: '☯',
                intro: {
                    content(storage) {
                        return (
                            (() => {
                                if (storage) return '当你成为锦囊牌的目标后,你可以观看牌堆顶X张牌,然后你获得其中一种类别的所有牌';
                                return '当你使用锦囊牌指定目标后,你可以摸X-1张牌,然后你将武将牌翻面';
                            })() + '(X为此牌目标数).若你以此法获得的牌数大于你的体力上限,则你增加体力上限至本次获得的牌数'
                        );
                    },
                },
                zhuanhuanji: true,
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    player: 'useCardToPlayered',
                    target: 'useCardToTargeted',
                },
                filter(event, player, name) {
                    if (get.type(event.card) !== 'trick') return false;
                    const goon = name === 'useCardToPlayered';
                    if (goon === Boolean(player.storage.qx_cien)) return false;
                    if (goon && (!event.isFirstTarget || event.targets.length <= 1)) return false;
                    return true;
                },
                prompt2(event, player, name) {
                    const num = event.targets.length;
                    if (name === 'useCardToPlayered') return '摸' + get.cnNumber(num - 1) + '张牌,然后你将武将牌翻面';
                    return '观看牌堆底' + get.cnNumber(num) + '张牌,然后获得其中一种类别的所有牌';
                },
                async content(event, trigger, player) {
                    const num = trigger.targets.length;
                    player.changeZhuanhuanji(event.name);
                    if (player.storage[event.name]) {
                        const { cards } = await player.draw(num - 1).forResult();
                        await player.turnOver();
                        if (Array.isArray(cards) && cards.length > player.maxHp) {
                            await player.gainMaxHp(cards.length - player.maxHp);
                        }
                    } else {
                        let cards = get.bottomCards(num, true);
                        const types = cards
                            .slice()
                            .map((i) => get.type2(i))
                            .sort((a, b) => {
                                const list = ['basic', 'trick', 'equip'];
                                return list.indexOf(b) - list.indexOf(a);
                            })
                            .unique()
                            .reverse();
                        const result =
                            types.length > 1
                                ? await player
                                    .chooseControl(types)
                                    .set('dialog', ['慈恩:选择获得一种类别的所有牌', cards])
                                    .set('ai', () => {
                                        const { cards, controls } = get.event();
                                        return controls.slice().sort((a, b) => {
                                            return cards.filter((card) => get.type2(card) === b).reduce((sum, card) => sum + get.value(card), 0) - cards.filter((card) => get.type2(card) === a).reduce((sum, card) => sum + get.value(card), 0);
                                        })[0];
                                    })
                                    .set('cards', cards)
                                    .forResult()
                                : { control: types[0] };
                        if (result.control) {
                            cards = cards.filter((card) => get.type2(card) === result.control);
                            await player.gain(cards, 'gain2');
                            if (cards.length > player.maxHp) await player.gainMaxHp(cards.length - player.maxHp);
                        }
                    }
                },
            },
            qx_shengde: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return game.hasPlayer((t) => t !== player);
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2('qx_shengde'), lib.filter.notMe)
                        .set('ai', (target) => {
                            const player = get.player();
                            if (get.attitude(player, target) <= 0) return 0;
                            const list = get.info('qx_shengde').getList(player, target);
                            const list1 = list.map((listx) => listx[0][1]).filter((effect) => !effect.filter || effect.filter(player));
                            const list2 = list.map((listx) => listx[0][1]).filter((effect) => !effect.filter || effect.filter(target));
                            return Math.max(...list1.map((effect) => effect.ai(player))) + Math.max(...list2.map((effect) => effect.ai(target)));
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const [target] = event.targets;
                    let list = get
                        .info('qx_shengde')
                        .getList(player, target)
                        .map((choice) => {
                            if (choice[0].includes('#')) {
                                choice[0] = choice[0].replaceAll('#', player.maxHp);
                            }
                            return [choice, choice[0]];
                        });
                    for (const current of [player, target]) {
                        const result = await current
                            .chooseButton(['圣德:请选择执行其中一项', [list, 'textbutton']], true)
                            .set('filterButton', (button) => {
                                const effect = button.link[1];
                                return !effect.filter || effect.filter(get.player());
                            })
                            .set('ai', (button) => button.link[1].ai(get.event().player, get.event().parent.player))
                            .forResult();
                        if (result.bool) {
                            list = list.filter((choice) => !result.links.includes(choice[0]));
                            await result.links[0][1].content(current, player);
                        }
                    }
                },
                getList(player, target) {
                    let list = [
                        [
                            '摸#张牌',
                            {
                                async content(player, source) {
                                    await player.draw(source.maxHp);
                                },
                                ai(player, source) {
                                    return get.effect(player, { name: 'draw' }, player, player) * source.maxHp;
                                },
                            },
                        ],
                        [
                            '复原武将牌并将体力值回复至体力上限',
                            {
                                filter(player) {
                                    return ['Damaged', 'TurnedOver', 'Linked'].some((item) => player['is' + item]());
                                },
                                async content(player) {
                                    await player.turnOver(false);
                                    await player.link(false);
                                    await player.recoverTo(player.maxHp);
                                },
                                ai(player) {
                                    return ['Damaged', 'TurnedOver', 'Linked'].filter((item) => player['is' + item]()).length * 2;
                                },
                            },
                        ],
                        [
                            '计算与其他角色的距离-#',
                            {
                                async content(player, source) {
                                    player.addSkill('qx_shengde_dist');
                                    player.addMark('qx_shengde_dist', source.maxHp, false);
                                },
                                ai: () => 1,
                            },
                        ],
                    ];
                    if (get.mode() === 'guozhan' ? target.isEnemiesOf(player) : target.group !== player.group) {
                        list.addArray([
                            [
                                '手牌上限+#',
                                {
                                    async content(player, source) {
                                        player.addSkill('qx_shengde_hand');
                                        player.addMark('qx_shengde_hand', source.maxHp, false);
                                    },
                                    ai: () => 2,
                                },
                            ],
                            [
                                '随机获得#个女性/男性武将牌上的各一个技能直到自己的回合开始',
                                {
                                    async content(player, source) {
                                        if (!_status.characterlist) lib.skill.pingjian.initList();
                                        let names = [],
                                            skills = [];
                                        while (names.length < source.maxHp) {
                                            const name = _status.characterlist
                                                .filter((name) => {
                                                    if (names.includes(name)) return false;
                                                    const info = get.character(name),
                                                        sex = info.sex;
                                                    if (
                                                        (() => {
                                                            if (sex === 'unknown') return true;
                                                            if (sex === 'double') return false;
                                                            return (player === source) === (sex === 'male');
                                                        })()
                                                    )
                                                        return false;
                                                    return (
                                                        info.skills?.some((skill) => !player.hasSkill(skill, null, false, false)) &&
                                                        info.skills.every((skill) => {
                                                            return !skills.includes(skill);
                                                        })
                                                    );
                                                })
                                                .randomGet();
                                            if (name) {
                                                names.add(name);
                                                skills.add(
                                                    get
                                                        .character(name)
                                                        .skills.filter((skill) => !player.hasSkill(skill, null, false, false))
                                                        .randomGet()
                                                );
                                            } else break;
                                        }
                                        if (skills.length) await player.addTempSkills(skills, { player: 'phaseBegin' });
                                    },
                                    ai(player, source) {
                                        return 3 * source.maxHp;
                                    },
                                },
                            ],
                        ]);
                    }
                    return list;
                },
                subSkill: {
                    dist: {
                        charlotte: true,
                        intro: { content: '计算与其他角色的距离-#' },
                        mod: {
                            globalFrom(player, target, num) {
                                return num - player.countMark('qx_shengde_dist');
                            },
                        },
                    },
                    hand: {
                        charlotte: true,
                        intro: { content: '手牌上限+#' },
                        mod: {
                            maxHandcard(player, num) {
                                return num + player.countMark('qx_shengde_hand');
                            },
                        },
                    },
                },
            },
            qx_tongyu: {
                mod: {
                    globalTo(player, target, num) {
                        return num + game.countPlayer();
                    },
                    attackRange(player, num) {
                        return num + game.countPlayer();
                    },
                },
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    player: 'phaseDrawBegin2',
                    global: 'dieAfter',
                },
                filter(event, player) {
                    return event.name === 'die' || !event.numFixed;
                },
                forced: true,
                content() {
                    if (trigger.name === 'die') player.removeSkills(event.name);
                    else trigger.num += game.countPlayer();
                },
            },
            qx_mingxin: {
                mode: ['identity'],
                available(mode) {
                    if (_status.mode === 'purple') return false;
                },
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseBegin' },
                filter(event, player) {
                    return !player.hasAllHistory('useSkill', (evt) => evt.skill === 'qx_mingxin' && evt.targets?.includes(event.player));
                },
                check(event, player) {
                    if (event.player !== player && ['nei', 'ye'].includes(player.identity)) return false;
                    return get.attitude(player, event.player) > 0;
                },
                logTarget: 'player',
                content() {
                    const target = trigger.player;
                    target.addExpose(9991919810);
                    const identity = target.identity === 'mingzhong' ? 'zhong' : target.identity;
                    game.broadcastAll(
                        (target, identity) => {
                            target.setIdentity(target.identity);
                            target.node.identity.firstChild.innerHTML = get.translation('qx_mingxin_' + identity);
                            target.node.identity.classList.remove('guessing');
                            target[identity + 'fixed'] = true;
                            if (!target.ai) target.ai = {};
                            target.ai.identity_mark = 'finished';
                        },
                        target,
                        identity
                    );
                    target.addSkill('qx_mingxin_' + identity);
                },
                derivation: ['zhu', 'zhong', 'fan', 'nei'].map((i) => 'qx_mingxin_' + i),
                subSkill: {
                    zhu: {
                        nopop: true,
                        mark: true,
                        charlotte: true,
                        intro: { content: () => lib.translate.qx_mingxin_zhu_info },
                        trigger: { player: ['phaseJudgeBegin', 'phaseDrawBegin2'] },
                        filter(event, player) {
                            return event.name === 'phaseJudge' || (!event.numFixed && player.getHp() > 0);
                        },
                        async cost(event, trigger, player) {
                            if (trigger.name === 'phaseJudge') {
                                const result = await player
                                    .chooseButton(['###帝王:是否选择一种花色？###<div class="text center">本阶段判定牌的花色均视为此花色</div>', [lib.suit.map((i) => ['', '', 'lukai_' + i]).reverse(), 'vcard']])
                                    .set('ai', (button) => {
                                        const player = get.player(),
                                            cards = player.getVCards('j', (card) => {
                                                const cardName = card.name,
                                                    cardInfo = lib.card[cardName],
                                                    currentCards = player.getCards('j');
                                                return !cardInfo.noEffect && !card.cards?.some((card) => !currentCards.includes(card));
                                            }),
                                            suit = button.link[2].slice(6);
                                        return cards.reduce((all, judgeCard) => {
                                            return (
                                                all +
                                                Array.from({ length: 13 })
                                                    .map((_, i) => game.createCard('', suit, i + 1))
                                                    .reduce((sum, card) => {
                                                        if (lib.card[judgeCard.name].judge) sum += lib.card[judgeCard.name].judge(card);
                                                        return sum;
                                                    }, 0)
                                            );
                                        }, 0);
                                    })
                                    .forResult();
                                event.result = result;
                                event.result.cost_data = result?.links?.[0][2].slice(6);
                            } else event.result = { bool: true };
                        },
                        content() {
                            if (trigger.name === 'phaseJudge') {
                                player.popup(event.cost_data);
                                game.log(player, '声明了', '#g' + get.translation(event.cost_data));
                                player.addTempSkill('qx_mingxin_zhu2', 'phaseJudgeAfter');
                                player.storage['qx_mingxin_zhu2'] = event.cost_data;
                            } else trigger.num += player.getHp();
                        },
                        mod: {
                            maxHandcard(player, num) {
                                return num + 1;
                            },
                            cardUsable(card, player) {
                                if (card.name === 'sha' && player.isPhaseUsing()) return Infinity;
                            },
                            targetInRange(card, player) {
                                if (card.name === 'sha' && player.isPhaseUsing()) return true;
                            },
                        },
                    },
                    zhu2: {
                        charlotte: true,
                        mod: {
                            suit(card) {
                                const event = get.event();
                                if (!event?.getParent('phaseJudge', true)) return;
                                const player = get.owner(card) || event.player;
                                if (!player || !player.judging || player.judging[0] !== card) return;
                                const suit = player.storage['qx_mingxin_zhu2'];
                                if (suit) return suit;
                            },
                        },
                    },
                    zhong: {
                        nopop: true,
                        mark: true,
                        charlotte: true,
                        intro: { content: () => lib.translate.qx_mingxin_zhong_info },
                        mod: {
                            cardname(card, player) {
                                if (card.name === 'sha' && _status.currentPhase !== player) return 'tao';
                            },
                            cardnature(card, player) {
                                if (card.name === 'sha' && _status.currentPhase !== player) return false;
                            },
                        },
                        trigger: {
                            source: 'damageBegin1',
                            player: ['recoverBegin', 'useCard'],
                        },
                        filter(event, player) {
                            if (event.name !== 'useCard') return _status.currentPhase === player && get.zhu(player)?.isIn() && get.zhu(player).isDamaged();
                            return event.card && event.card.name === 'tao' && _status.currentPhase !== player;
                        },
                        prompt2(event, player) {
                            if (event.name !== 'useCard') return '令' + get.translation(get.zhu(player)) + '回复1点体力';
                            return '摸一张牌';
                        },
                        content() {
                            if (trigger.name !== 'useCard') {
                                trigger.cancel();
                                player.line(get.zhu(player), 'green');
                                get.zhu(player).recover();
                            } else {
                                player.draw();
                            }
                        },
                    },
                    fan: {
                        nopop: true,
                        mark: true,
                        charlotte: true,
                        intro: { content: () => lib.translate.qx_mingxin_fan_info },
                        trigger: { player: 'useCard2' },
                        filter(event, player) {
                            return player.isMaxHandcard() && (event.card.name === 'sha' || (get.type(event.card) === 'trick' && get.tag(event.card, 'damage')));
                        },
                        forced: true,
                        async content(event, trigger, player) {
                            trigger.directHit.addArray(game.players);
                            game.log(trigger.card, '不可被响应');
                            if (
                                game.hasPlayer((target) => {
                                    return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
                                })
                            ) {
                                const result = await player
                                    .chooseTarget('是否为' + get.translation(trigger.card) + '增加一个目标？', (card, player, target) => {
                                        const trigger = get.event().getTrigger();
                                        return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
                                    })
                                    .set('ai', (target) => {
                                        const player = get.player(),
                                            trigger = get.event().getTrigger();
                                        return get.effect(target, trigger.card, player, player);
                                    })
                                    .forResult();
                                if (result?.bool && result.targets?.length) {
                                    player.line(result.targets, trigger.card.nature);
                                    trigger.targets.addArray(result.targets);
                                }
                            }
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                if (!arg || !arg.card || !(arg.card.name === 'sha' || (get.type(arg.card) === 'trick' && get.tag(arg.card, 'damage')))) return false;
                                const filter = (card) => !ui.selected.cards.includes(card) && !arg.card?.cards?.includes(card);
                                return player.countCards('h', filter) === Math.max(...game.filterPlayer((target) => target.countCards('h', filter)));
                            },
                        },
                        group: 'qx_mingxin_fan2',
                    },
                    fan2: {
                        charlotte: true,
                        trigger: { player: 'useCard1' },
                        filter(event, player) {
                            return player.isMinHp() && (event.card.name === 'sha' || (get.type(event.card) === 'trick' && get.tag(event.card, 'damage')));
                        },
                        forced: true,
                        content() {
                            trigger.baseDamage++;
                            game.log(trigger.card, '伤害值', '#y+1');
                        },
                    },
                    nei: {
                        nopop: true,
                        mark: true,
                        charlotte: true,
                        intro: { content: () => lib.translate.qx_mingxin_nei_info },
                        enable: 'chooseToUse',
                        hiddenCard(player, name) {
                            if (_status.currentPhase === player) return false;
                            return get.type(name) === 'basic' && player.hasCard((card) => _status.connectMode || get.type(card) === 'basic', 'hs');
                        },
                        filter(event, player) {
                            return get
                                .inpileVCardList((info) => {
                                    return get.type(info[2]) === 'basic';
                                })
                                .some((card) =>
                                    player.hasCard((cardx) => {
                                        if (get.type(cardx) !== 'basic') return false;
                                        return event.filterCard({ name: card[2], nature: card[3], cards: [cardx] }, player, event);
                                    }, 'hs')
                                );
                        },
                        chooseButton: {
                            dialog(event, player) {
                                const list = get
                                    .inpileVCardList((info) => {
                                        return get.type(info[2]) === 'basic';
                                    })
                                    .filter((card) =>
                                        player.hasCard((cardx) => {
                                            if (get.type(cardx) !== 'basic') return false;
                                            return event.filterCard({ name: card[2], nature: card[3], cards: [cardx] }, player, event);
                                        }, 'hs')
                                    );
                                return ui.create.dialog('佞臣', [list, 'vcard']);
                            },
                            filter(button, player) {
                                const event = get.event().parent;
                                return event.filterCard({ name: button.link[2], nature: button.link[3] }, player, event);
                            },
                            check(button) {
                                const event = get.event().parent;
                                if (event.type !== 'phase') return 1;
                                return get.player().getUseValue({ name: button.link[2], nature: button.link[3] });
                            },
                            backup(links, player) {
                                return {
                                    filterCard: { type: 'basic' },
                                    popname: true,
                                    check(card) {
                                        return 15 - get.value(card);
                                    },
                                    position: 'hs',
                                    viewAs: { name: links[0][2], nature: links[0][3] },
                                    precontent() {
                                        player.addTempSkill('qx_mingxin_effect');
                                    },
                                };
                            },
                            prompt(links, player) {
                                return '将一张基本牌牌当作' + (get.translation(links[0][3]) || '') + '【' + get.translation(links[0][2]) + '】使用';
                            },
                        },
                        ai: {
                            fireAttack: true,
                            respondSha: true,
                            skillTagFilter(player, tag, arg) {
                                if (arg === 'respond' || _status.currentPhase === player) return false;
                                if (!player.hasCard((card) => _status.connectMode || get.type(card) === 'basic', 'hs')) return false;
                            },
                            order: 10,
                            result: {
                                player(player) {
                                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                    return 1;
                                },
                            },
                        },
                        mod: {
                            cardUsable(card) {
                                if (get.color(card) === 'red') return Infinity;
                            },
                        },
                        group: 'qx_mingxin_nei2',
                    },
                    nei_backup: {},
                    effect: {
                        charlotte: true,
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            return event.skill === 'qx_mingxin_nei_backup';
                        },
                        forced: true,
                        popup: false,
                        content() {
                            player.draw();
                        },
                    },
                    nei2: {
                        charlotte: true,
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            return _status.currentPhase === player && get.color(event.card) === 'black';
                        },
                        forced: true,
                        content() {
                            trigger.directHit.addArray(game.players);
                            game.log(trigger.card, '不可被响应');
                            trigger.baseDamage++;
                            game.log(trigger.card, '伤害值', '#y+1');
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                if (!arg || !arg.card || get.color(arg.card) !== 'black' || _status.currentPhase !== player) return false;
                            },
                        },
                    },
                },
            },
            qx_zhaoran: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.getHp() > 0;
                },
                usable: 1,
                async content(event, trigger, player) {
                    const hp = Array.from({ length: player.getHp() }).map((_, i) => i + 1 + '点');
                    const result =
                        hp.length > 1
                            ? await player
                                .chooseControl(hp)
                                .set('ai', () => {
                                    return get.player.getHp() - 2;
                                })
                                .set('prompt', '请选择失去的体力值')
                                .forResult()
                            : { control: hp[0] };
                    if (result) {
                        await player.loseHp(result.index + 1);
                        await player.draw(result.index + 1);
                        player.addTempSkill('qx_zhaoran_effect');
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player(player) {
                            return player.getHp() - 1;
                        },
                    },
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        mark: true,
                        intro: {
                            content: ['使用基本牌无次数限制', '使用锦囊牌无距离限制且可以令此牌额外结算一次', '回合结束时,将体力值回复至体力上限'].map((str) => '<li>' + str).join('<br>'),
                        },
                        mod: {
                            cardUsable(card) {
                                if (get.type(card) === 'basic') return Infinity;
                            },
                            targetInRange(card) {
                                if (get.type2(card) === 'trick') return true;
                            },
                        },
                        audio: 'qx_zhaoran',
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            return get.type(event.card) === 'trick' && lib.skill.dcshixian.filterx(event);
                        },
                        check(event, player) {
                            return (
                                (event.targets.reduce((sum, target) => {
                                    return sum + get.effect(target, event.card, event.player, player);
                                }, 0) <
                                    0) ^
                                !get.tag(event.card, 'norepeat')
                            );
                        },
                        prompt2(event, player) {
                            return '令' + get.translation(event.card) + '额外结算一次';
                        },
                        content() {
                            trigger.effectCount++;
                            game.log(trigger.card, '额外结算一次');
                        },
                        group: 'qx_zhaoran_recover',
                    },
                    recover: {
                        charlotte: true,
                        audio: 'qx_zhaoran',
                        trigger: { player: 'phaseEnd' },
                        forced: true,
                        content() {
                            player.recoverTo(player.maxHp);
                        },
                    },
                },
            },
            qx_moushi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    if (event.player === player) return false;
                    if (!game.hasPlayer((target) => event.player.canUse({ name: 'sha', nature: 'thunder' }, target, null, false))) return false;
                    const num = player.countCards('e');
                    return (
                        Math.max(
                            event.player.getHistory('useCard').length,
                            event.player.getHistory('sourceDamage').reduce((sum, evt) => sum + evt.num, 0)
                        ) >= num
                    );
                },
                logTarget: 'player',
                check(event, player) {
                    const card = new lib.element.VCard({ name: 'sha', nature: 'thunder' });
                    return (
                        get.effect(
                            game
                                .filterPlayer((target) => {
                                    return event.player.canUse(card, target, null, false);
                                })
                                .sort((a, b) => {
                                    return get.effect(b, card, event.player, event.player) - get.effect(a, card, event.player, event.player);
                                })[0],//QQQ
                            card,
                            event.player,
                            player
                        ) > 0
                    );
                },
                async content(event, trigger, player) {
                    const target = trigger.player,
                        card = new lib.element.VCard({ name: 'sha', nature: 'thunder' });
                    const result = await target
                        .chooseTarget(
                            '视为对一名角色使用一张无次数限制的【杀】',
                            (card, player, target) => {
                                return player.canUse({ name: 'sha', nature: 'thunder' }, target, null, false);
                            },
                            '若此【杀】造成伤害,则' + get.translation(player) + '再对你选择的角色造成1点伤害'
                        )
                        .set('ai', (target) => {
                            const player = get.player(),
                                card = new lib.element.VCard({ name: 'sha', nature: 'thunder' });
                            return get.effect(target, card, player, player);
                        })
                        .forResult();
                    if (result?.bool && result.targets?.length) {
                        const [aim] = result.targets;
                        const next = target.useCard(card, aim, false);
                        await next;
                        if (
                            game.hasPlayer2((current) => {
                                return current.hasHistory('damage', (evt) => evt.getParent(next.name) === next);
                            })
                        ) {
                            player.line(aim);
                            await aim.damage();
                        }
                    }
                },
            },
            qx_cange: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    source: 'damageSource',
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return get.cardPile((card) => get.type(card) === 'equip' && player.canEquip(card, true));
                },
                async content(event, trigger, player) {
                    const card = get.cardPile((card) => get.type(card) === 'equip' && player.canEquip(card, true));
                    const next = await player.equip(card);
                    await next;
                    if (next.getl?.(player)?.es?.length) {
                        const num = player.countCards('e');
                        if (num > 0) await player.draw(num);
                    }
                },
            },
            qx_yanluan: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { target: 'useCardToTarget' },
                filter(event, player) {
                    if (event.card.name !== 'sha') return false;
                    return game.hasPlayer((target) => target.countDiscardableCards(player, 'e'));
                },
                async cost(event, trigger, player) {
                    let prompt = '弃置场上的一张装备牌';
                    const targets = game.filterPlayer((target) => {
                        if (![player.next, player.previous].includes(target)) return false;
                        return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                    });
                    if (targets.length) prompt += ',令' + get.translation(targets) + '也成为' + get.translation(trigger.card) + '的目标';
                    event.result = await player
                        .chooseTarget(get.prompt('qx_yanluan'), prompt, (card, player, target) => {
                            return target.countDiscardableCards(player, 'e');
                        })
                        .set('ai', (target) => {
                            const player = get.player(),
                                trigger = get.event().getTrigger();
                            return (
                                get.effect(target, { name: 'guohe_copy', position: 'e' }, player, player) +
                                targets.reduce((sum, current) => {
                                    return sum + get.effect(current, trigger.card, trigger.player, player);
                                }, 0)
                            );
                        })
                        .set('targets', targets)
                        .forResult();
                },
                async content(event, trigger, player) {
                    const [target] = event.targets,
                        targets = game.filterPlayer((target) => {
                            if (![player.next, player.previous].includes(target)) return false;
                            return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                        });
                    await player.discardPlayerCard(target, 'e', true);
                    if (targets.length) {
                        player.line(targets);
                        game.log(targets, '成为了', trigger.card, '的额外目标');
                        trigger.parent.targets.addArray(targets);
                    }
                },
            },
            qx_xiushi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseEnd' },
                filter(event, player) {
                    return event.player !== player && event.player.hasHistory('useCard', (evt) => get.type(evt.card) !== 'equip');
                },
                forced: true,
                async content(event, trigger, player) {
                    const types = trigger.player.getHistory('useCard', (evt) => get.type(evt.card) !== 'equip').map((evt) => get.type2(evt.card));
                    let gains = [];
                    for (const type of types) {
                        const card = get.cardPile((card) => {
                            return !gains.includes(card) && get.type2(card) === type;
                        });
                        if (card) gains.push(card);
                    }
                    if (gains.length) await player.gain(gains, 'gain2');
                },
            },
            qx_wangli: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                filter(event, player) {
                    if (event.getParent(2).name === 'recast') return false;
                    if (event.getParent(3).name === 'qx_wangli') return false;
                    if (['useCard', 'respond'].includes(event.parent.name)) return false;
                    return event.getl?.(player)?.cards2?.length;
                },
                forced: true,
                content() {
                    player.chooseToDiscard('he', true);
                },
                group: 'qx_wangli_draw',
                subSkill: {
                    draw: {
                        audio: 'qx_wangli',
                        trigger: { global: ['useSkill', 'logSkillBegin', 'recast'] },
                        filter(event, player) {
                            if (player.countMark('qx_wangli_count') >= 8) return false;
                            if (event.name === 'recast') return true;
                            if (event.type !== 'player') return false;
                            const infox = get.info(event.skill);
                            if (!infox || infox.charlotte) return false;
                            const skill = get.sourceSkillFor(event);
                            if (!skill || skill.includes('qx_wangli')) return false;
                            const info = get.info(skill);
                            return info && !info.charlotte;
                        },
                        forced: true,
                        popup: false,
                        content() {
                            player.addTempSkill('qx_wangli_count', 'roundStart');
                            player.draw();
                        },
                    },
                    count: {
                        charlotte: true,
                        trigger: { player: 'drawEnd' },
                        filter(event, player) {
                            return event.result?.length && event.parent.name === 'qx_wangli';
                        },
                        forced: true,
                        firstDo: true,
                        content() {
                            player.addMark(event.name, trigger.result.length, false);
                        },
                    },
                },
            },
            qx_yinhu: {
                mark: true,
                marktext: '☯',
                intro: {
                    content(storage) {
                        return (
                            '锁定技,一名角色造成伤害时,' +
                            (() => {
                                if (storage) return '若其手牌数为全场最多,则你与其各失去1点体力';
                                return '若其体力值为全场最大,则你与其各摸两张牌,你以此法获得的牌均视为【酒】且不计入手牌上限';
                            })()
                        );
                    },
                },
                zhuanhuanji: true,
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'damageBegin2' },
                filter(event, player) {
                    if (!event.source?.isIn()) return false;
                    const storage = player.storage.qx_yinhu;
                    return event.source[storage ? 'isMaxHandcard' : 'isMaxHp']();
                },
                forced: true,
                logTarget: 'source',
                async content(event, trigger, player) {
                    player.changeZhuanhuanji(event.name);
                    if (player.storage[event.name]) {
                        player.addSkill('qx_yinhu_effect');
                        const next = player.draw(2, 'nodelay');
                        next.gaintag = ['qx_yinhu_effect'];
                        await next;
                        const next2 = trigger.source.draw(2);
                        if (trigger.source === player) next2.gaintag = ['qx_yinhu_effect'];
                        await next2;
                    } else {
                        await player.loseHp();
                        await trigger.source.loseHp();
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        mod: {
                            cardname(card) {
                                if (get.itemtype(card) == 'card' && card.hasGaintag('qx_yinhu_effect')) return 'jiu';
                            },
                            cardnature(card) {
                                if (get.itemtype(card) == 'card' && card.hasGaintag('qx_yinhu_effect')) return false;
                            },
                            ignoredHandcard(card) {
                                if (card.hasGaintag('qx_yinhu_effect')) return true;
                            },
                            cardDiscardable(card, player, name) {
                                if (name === 'phaseDiscard' && card.hasGaintag('qx_yinhu_effect')) return false;
                            },
                        },
                    },
                },
            },
            qx_leiqi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'loseHpBegin' },
                filter(event, player) {
                    if (event.parent.name !== 'qx_yinhu') return false;
                    return player.hasCard((card) => {
                        if (get.position(card) === 'h' && _status.connectMode) return true;
                        return get.type(card) === 'equip' && lib.filter.cardDiscardable(card, player);
                    }, 'he');
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseToDiscard(get.prompt2('qx_leiqi'), 'he', { type: 'equip' })
                        .set('ai', (card) => {
                            const player = get.player();
                            if (player.getHp() <= 1) {
                                if (player.hasCard((cardx) => player.canSaveCard(cardx, player), 'hs')) return 7 - get.value(card);
                                return -1;
                            }
                            return 18 - 2 * Math.min(4, player.getHp()) - get.value(card);
                        })
                        .forResult();
                },
                popup: false,
                content() {
                    trigger.cancel();
                },
                ai: { combo: 'qx_yinhu' },
            },
            qx_guihuo: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    return event.player !== player && get.info('qx_guihuo').getCards(event.player).length;
                },
                check(event, player) {
                    const cards = get.info('qx_guihuo').getCards(event.player);
                    return cards.length <= player.maxHp && cards.reduce((sum, card) => sum + get.value(card, player), 0) >= 0;
                },
                prompt2(event, player) {
                    const cards = get.info('qx_guihuo').getCards(event.player);
                    const sum = Math.floor(
                        (player
                            .getRoundHistory('gain', (evt) => {
                                return evt.parent.name === 'qx_guihuo';
                            })
                            .reduce((sum, evt) => sum + (evt.getg?.(player)?.length || 0), 0) +
                            cards.length) /
                        player.maxHp
                    );
                    return '获得' + get.translation(cards) + (cards.length > player.maxHp && sum > 0 ? ',你受到的伤害+' + sum : '');
                },
                async content(event, trigger, player) {
                    const next = player.gain(get.info('qx_guihuo').getCards(trigger.player), 'gain2');
                    await next;
                    if ((next.getg?.(player)?.length || 0) > player.maxHp) {
                        const sum = Math.floor(
                            player
                                .getRoundHistory('gain', (evt) => {
                                    return evt.parent.name === 'qx_guihuo';
                                })
                                .reduce((sum, evt) => sum + (evt.getg?.(player)?.length || 0), 0) / player.maxHp
                        );
                        if (sum > 0) {
                            player.addSkill('qx_guihuo_effect');
                            player.addMark('qx_guihuo_effect', sum, false);
                        }
                    }
                },
                getCards(player) {
                    let cards = [];
                    const history = player.getHistory('lose', (evt) => evt.position === ui.discardPile);
                    if (history.length) {
                        for (const evt of history) cards.addArray(evt.cards2.filterInD('d'));
                    }
                    const historyx = game.getGlobalHistory('cardMove', (evt) => {
                        if (evt.name !== 'cardsDiscard') return false;
                        const evtx = evt.parent;
                        if (evtx.name !== 'orderingDiscard') return false;
                        const evt2 = evtx.relatedEvent || evtx.parent;
                        const current = evt2.player;
                        if (evt2.name === 'phaseJudge' || current !== player) return false;
                        return current.hasHistory('lose', (evtx3) => {
                            const evtx4 = evtx3.relatedEvent || evtx3.parent;
                            if (evt2 !== evtx4) return false;
                            return evtx3.getl(current).cards2.length;
                        });
                    });
                    if (historyx.length) {
                        for (const evtx of historyx) cards.addArray(evtx.cards.filterInD('d'));
                    }
                    return cards.filter((card) => get.tag(card, 'damage') >= 0.5);
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        intro: { content: '受到的伤害+#' },
                        trigger: { player: 'damageBegin2' },
                        forced: true,
                        popup: false,
                        content() {
                            trigger.num += player.countMark(event.name);
                        },
                    },
                },
            },
            qx_bingdao: {
                audio: 'ext:群星荟萃/audio/skill:2',
                filter(event, player) {
                    return game.hasPlayer((target) => get.info('qx_bingdao').filterTarget(null, player, target));
                },
                filterTarget(萌新转型中, player, target) {
                    return target !== player ? target.countCards('h') > 0 : target.countDiscardableCards(player, 'h');
                },
                usable: () => Math.min(3, game.countGroup()),
                async content(event, trigger, player) {
                    const [card] = await player.discardPlayerCard(event.target, 'h', true).forResult('cards');
                    if (card && ['basic', 'trick'].includes(get.type(card))) {
                        if (player.hasUseTarget(card)) await player.chooseUseTarget(card, true, false);
                    }
                },
                ai: {
                    order(item, player) {
                        return get.order({ name: 'guohe_copy', position: 'h' }, player);
                    },
                    result: {
                        player(player, target) {
                            return get.effect(target, { name: 'guohe_copy', position: 'h' }, player, player);
                        },
                    },
                },
                mod: {
                    playerEnabled(card, player, target) {
                        const event = get.event();
                        if ((event.name === 'qx_bingdao' && event.player === player) || (event.parent.name === 'qx_bingdao' && event.parent.player === player)) {
                            if (get.type(card) === 'basic' && !(event.name === 'qx_bingdao' ? event.target : event.parent.target).inRange(target)) return false;
                        }
                    },
                },
            },
            qx_dianbing: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    player: 'useCardToPlayer',
                    target: 'useCardToTarget',
                },
                filter(event, player) {
                    if (event.player === event.target) return false;
                    return player.canMoveCard() || player.countMark('qx_dianbing') < 5 || !event[event.name === 'useCardToPlayer' ? 'target' : 'player'].hasSkill('fengyin');
                },
                async cost(event, trigger, player) {
                    const target = trigger[trigger.name === 'useCardToPlayer' ? 'target' : 'player'];
                    event.result = await player
                        .chooseControl(
                            (() => {
                                let list = [];
                                if (player.canMoveCard()) list.push('声东击西');
                                if (player.countMark('qx_dianbing') < 5) list.push('多多益善');
                                if (!target.hasSkill('fengyin')) list.push('十面埋伏');
                                return list;
                            })(),
                            'cancel2'
                        )
                        .set('target', target)
                        .set('prompt', get.prompt('qx_dianbing'))
                        .set(
                            'choiceList',
                            (() => {
                                let choiceList = [];
                                if (player.canMoveCard()) choiceList.push(['声东击西', '移动场上的一张牌']);
                                if (player.countMark('qx_dianbing') < 5) choiceList.push(['多多益善', '获得1枚<伏兵>标记']);
                                if (!target.hasSkill('fengyin')) choiceList.push(['十面埋伏', '令' + get.translation(target) + '本回合非锁定技失效']);
                                return choiceList.map((list) => '<div class="skill">' + list[0] + '</div><div>' + list[1] + '</div>');
                            })()
                        )
                        .set('ai', () => {
                            const { player, target, controls } = get.event();
                            if (player.canMoveCard(true)) return '声东击西';
                            if (get.attitude(player, target) < 0 && controls.includes('十面埋伏')) return '十面埋伏';
                            return controls.includes('多多益善') ? '多多益善' : 'cancel2';
                        })
                        .set('displayIndex', false)
                        .forResult();
                    const control = event.result.control;
                    event.result.bool = control && control !== 'cancel2';
                    event.result.cost_data = control;
                },
                logTarget(event, player) {
                    return event[event.name === 'useCardToPlayer' ? 'target' : 'player'];
                },
                async content(event, trigger, player) {
                    player.popup(event.cost_data);
                    game.log(player, '选择了', '#y' + event.cost_data);
                    switch (event.cost_data) {
                        case '声东击西':
                            await player.moveCard(true);
                            break;
                        case '多多益善':
                            player.addMark('qx_dianbing', 1);
                            break;
                        case '十面埋伏':
                            const target = trigger[trigger.name === 'useCardToPlayer' ? 'target' : 'player'];
                            target.addTempSkill('fengyin');
                            break;
                    }
                },
                intro: {
                    name: '伏兵',
                    content: 'mark',
                },
            },
            qx_fulve: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return player.hasMark('qx_dianbing');
                },
                async content(event, trigger, player) {
                    const num = player.countMark('qx_dianbing');
                    player.clearMark('qx_dianbing');
                    if (num > 0) {
                        const choices = await player
                            .chooseButton(
                                [
                                    '点兵:请选择至多' + get.cnNumber(num) + '项执行',
                                    [
                                        [
                                            ['draw', '摸' + get.cnNumber(player.maxHp) + '张牌'],
                                            ['damage', '对至多' + get.cnNumber(num) + '名角色各造成1点伤害'],
                                            ['discard', '弃置至多' + get.cnNumber(num) + '名角色各一张手牌'],
                                        ],
                                        'textbutton',
                                    ],
                                ],
                                [1, num],
                                true
                            )
                            .set('filterButton', (button) => {
                                return button.link !== 'discard' || game.hasPlayer((target) => get.info('qx_bingdao').filterTarget(null, player, target));
                            })
                            .set('ai', (button) => {
                                const { player, num } = get.event();
                                switch (button.link) {
                                    case 'draw':
                                        return get.effect(player, { name: 'draw' }, player, player) * player.maxHp;
                                    case 'damage':
                                        return game
                                            .filterPlayer()
                                            .reduce((a, b) => {
                                                return get.damageEffect(b, player, player) - get.damageEffect(a, player, player);
                                            })
                                            .slice(0, num)
                                            .reduce((sum, target) => sum + get.damageEffect(target, player, player), 0);
                                    case 'discard':
                                        return game
                                            .filterPlayer((target) => get.info('qx_bingdao').filterTarget(null, player, target))
                                            .reduce((a, b) => {
                                                return get.effect(b, { name: 'guohe_copy', position: 'h' }, player, player) - get.effect(a, { name: 'guohe_copy', position: 'h' }, player, player);
                                            })
                                            .slice(0, num)
                                            .reduce((sum, target) => sum + get.effect(target, { name: 'guohe_copy', position: 'h' }, player, player), 0);
                                }
                            })
                            .set('num', num)
                            .forResult('links');
                        if (choices?.length) {
                            if (choices.includes('draw')) await player.draw(player.maxHp);
                            if (choices.includes('damage')) {
                                const result = await player
                                    .chooseTarget('对至多' + get.cnNumber(num) + '名角色各造成1点伤害', [1, num], true)
                                    .set('ai', (target) => {
                                        const player = get.player();
                                        return get.damageEffect(target, player, player);
                                    })
                                    .forResult();
                                if (result?.bool && result.targets?.length) {
                                    const targets = result.targets.sortBySeat();
                                    player.line(targets);
                                    for (const i of targets) await i.damage();
                                }
                            }
                            if (choices.includes('discard')) {
                                const result = await player
                                    .chooseTarget('弃置至多' + get.cnNumber(num) + '名角色各一张手牌', get.info('qx_bingdao').filterTarget, [1, num], true)
                                    .set('ai', (target) => {
                                        const player = get.player();
                                        return get.effect(target, { name: 'guohe_copy', position: 'h' }, player, player);
                                    })
                                    .forResult();
                                if (result?.bool && result.targets?.length) {
                                    const targets = result.targets.sortBySeat();
                                    player.line(targets);
                                    for (const i of targets) await player.discardPlayerCard(i, 'h', true);
                                }
                            }
                        }
                    }
                },
            },
            qx_dongxi: {
                categories: () => ['连携技'],
                audio: 'ext:群星荟萃/audio/skill:4',
                trigger: {
                    source: 'damageSource',
                    player: ['damageEnd', 'phaseZhunbeiBegin', 'phaseJieshuBegin'],
                },
                forced: true,
                async content(event, trigger, player) {
                    const list = get.info(event.name).qx_lianxieSkill;
                    const used = event.name + '_used',
                        num = player.storage[used];
                    for (let i = 0; i < list.length; i++) {
                        if (typeof num === 'number' && num >= i + 1) continue;
                        const item = list[i];
                        if (item.filter(trigger, player)) {
                            await item.content(event, trigger, player);
                            if (event?.result?.bool) {
                                if (i + 1 === list.length) player.removeSkill(used);
                                else {
                                    player.addSkill(used);
                                    player.storage[used] = i + 1;
                                }
                                break;
                            } else if (typeof num === 'number') break;
                        }
                    }
                },
                subSkill: {
                    used: {
                        charlotte: true,
                    },
                    sishi: {
                        mod: {
                            cardEnabled(card) {
                                if (get.itemtype(card) === 'card' && card.hasGaintag('qx_dongxi_sishi')) return false;
                            },
                            cardSavable(card) {
                                if (get.itemtype(card) === 'card' && card.hasGaintag('qx_dongxi_sishi')) return false;
                            },
                            canBeDiscarded(card) {
                                if (get.itemtype(card) === 'card' && card.hasGaintag('qx_dongxi_sishi')) return false;
                            },
                            cardDiscardable(card) {
                                if (get.itemtype(card) === 'card' && card.hasGaintag('qx_dongxi_sishi')) return false;
                            },
                        },
                    },
                },
                qx_lianxieSkill: [
                    {
                        filter: () => true,
                        async content(event, trigger, player) {
                            const num = game.countPlayer();
                            const result = (event.result = await player.chooseBool(get.prompt(event.name), '观看牌堆顶' + get.cnNumber(num) + '张牌并获得其中任意张花色相同的牌').forResult());
                            if (result?.bool) {
                                const cards = get.cards(num, true);
                                const gains = await player
                                    .chooseButton(['洞悉:获得其中任意张花色相同的牌', cards], [1, Infinity], true)
                                    .set('cards', cards)
                                    .set('filterButton', (button) => {
                                        return !ui.selected.buttons?.some((but) => but.link.suit !== button.link.suit);
                                    })
                                    .set('ai', (button) => {
                                        const { player, cards } = get.event();
                                        const suits = cards.map((card) => card.suit).unique();
                                        suits.sort((a, b) => {
                                            return (
                                                cards
                                                    .filter((card) => {
                                                        return card.suit === b;
                                                    })
                                                    .reduce((sum, card) => {
                                                        return sum + get.value(card, player);
                                                    }, 0) -
                                                cards
                                                    .filter((card) => {
                                                        return card.suit === a;
                                                    })
                                                    .reduce((sum, card) => {
                                                        return sum + get.value(card, player);
                                                    }, 0)
                                            );
                                        });
                                        return button.link.suit === suits[0] ? get.value(button.link, player) : 0;
                                    })
                                    .forResult('links');
                                if (gains?.length) await player.gain(gains, 'gain2');
                            }
                        },
                    },
                    {
                        filter(event, player) {
                            return game.hasPlayer((target) => {
                                if (target === player) return false;
                                return target.hasCard((card) => {
                                    if (get.position(card) === 'h') return true;
                                    return lib.filter.cardDiscardable(card, target);
                                }, 'he');
                            });
                        },
                        async content(event, trigger, player) {
                            const num = game.countPlayer();
                            const result = (event.result = await player
                                .chooseTarget(
                                    get.prompt(event.name),
                                    (card, player, target) => {
                                        if (target === player) return false;
                                        return target.hasCard((card) => {
                                            if (get.position(card) === 'h') return true;
                                            return lib.filter.cardDiscardable(card, target);
                                        }, 'he');
                                    },
                                    '令一名其他角色弃置' + get.cnNumber(num) + '张牌'
                                )
                                .set('ai', (target) => {
                                    const player = get.player(),
                                        num =
                                            Math.min(
                                                target.countCards('he', (card) => {
                                                    return lib.filter.cardDiscardable(card, target);
                                                }),
                                                game.countPlayer()
                                            ) + 1;
                                    return get.effect(target, { name: 'guohe_copy2' }, target, player) * num;
                                })
                                .forResult());
                            if (result?.bool) {
                                const target = result.targets[0];
                                await target.chooseToDiscard('he', num, true);
                            }
                        },
                    },
                    {
                        filter: () => true,
                        async content(event, trigger, player) {
                            const result = (event.result = await player
                                .chooseTarget(get.prompt(event.name), '选择一名角色和一个花色,标记其手牌所有此花色的所有牌为<死士>')
                                .set('ai', (target) => {
                                    const player = get.player();
                                    return (
                                        -Math.sign(get.attitude(player, target)) *
                                        (() => {
                                            const map = lib.suit.reduce((map, suit) => {
                                                map[suit] = 1;
                                                return map;
                                            }, {});
                                            for (const suit of lib.suit) {
                                                map[suit] += target.countCards('h', { suit: suit });
                                            }
                                            return Math.max(...Object.values(map));
                                        })()
                                    );
                                })
                                .set('animate', false)
                                .forResult());
                            if (result?.bool) {
                                const target = result.targets[0];
                                const suit = await player
                                    .chooseControl(lib.suit.slice().reverse())
                                    .set('ai', () => {
                                        const map = lib.suit.reduce((map, suit) => {
                                            map[suit] = 1;
                                            return map;
                                        }, {});
                                        for (const suit of lib.suit) {
                                            map[suit] += target.countCards('h', { suit: suit });
                                        }
                                        return lib.suit.slice().sort((a, b) => map[b] - map[a])[0];
                                    })//QQQ
                                    .set('prompt', '请选择一个花色')
                                    .forResult('control');
                                player.popup(suit);
                                game.log(player, '选择了', '#y' + get.translation(suit));
                                target.addSkill(event.name + '_sishi');
                                const cards = target.getCards('h', { suit: suit });
                                if (cards.length) target.addGaintag(cards, event.name + '_sishi');
                            }
                        },
                    },
                    {
                        filter(event, player) {
                            return game.hasPlayer((target) => {
                                if (![player.next, player.previous].includes(target)) return false;
                                return target.countCards('h');
                            });
                        },
                        async content(event, trigger, player) {
                            const targets = game
                                .filterPlayer((target) => {
                                    if (![player.next, player.previous].includes(target)) return false;
                                    return target.countCards('h');
                                })
                                .sortBySeat(player);
                            const result = (event.result = await player
                                .chooseBool(get.prompt(event.name), '获得' + get.translation(targets) + (targets.length > 1 ? '各' : '的') + '一张手牌')
                                .set(
                                    'choice',
                                    (() => {
                                        return targets.reduce((sum, target) => sum + get.effect(target, { name: 'shunshou_copy', position: 'h' }, player, player), 0) >= 0;
                                    })()
                                )
                                .forResult());
                            if (result?.bool) {
                                for (const i of targets) {
                                    await player.gainPlayerCard(i, 'h', true);
                                }
                            }
                        },
                    },
                ],
            },
            qx_yilve: {
                categories: () => ['连携技'],
                audio: 'ext:群星荟萃/audio/skill:4',
                trigger: { global: ['roundStart', 'damageEnd', 'phaseBegin', 'phaseEnd'] },
                forced: true,
                async content(event, trigger, player) {
                    const list = get.info(event.name).qx_lianxieSkill;
                    const used = event.name + '_used',
                        num = player.storage[used];
                    for (let i = 0; i < list.length; i++) {
                        if (typeof num === 'number' && num >= i + 1) continue;
                        const item = list[i];
                        if (item.filter(trigger, player)) {
                            const next = item.content(event, trigger, player);
                            await next;
                            if (next?.result?.bool) {
                                if (i + 1 === list.length) player.removeSkill(used);
                                else {
                                    player.addSkill(used);
                                    player.storage[used] = i + 1;
                                }
                                break;
                            } else if (typeof num === 'number') break;
                        }
                    }
                },
                subSkill: {
                    used: {
                        charlotte: true,
                    },
                    pojun: {
                        charlotte: true,
                        intro: {
                            content: 'expansion',
                            markcount: 'expansion',
                        },
                        onremove(player, skill) {
                            const cards = player.getExpansions(skill);
                            if (cards.length) player.gain(cards, 'gain2');
                        },
                        trigger: { player: 'phaseEnd' },
                        forced: true,
                        popup: false,
                        content() {
                            get.info(event.name).onremove(player, event.name);
                        },
                    },
                },
                ai: {
                    nokeep: true,
                    skillTagFilter(player, tag, arg) {
                        if (!_status._qx_yilve_check) return false;
                        return (!arg || (arg && arg.card && arg.card.name === 'tao')) && player.hasCard((card) => card.name !== 'tao', 'h');
                    },
                },
                qx_lianxieSkill: [
                    {
                        filter(event, player) {
                            return player.hasCard((card) => {
                                if (get.color(card) !== 'black') return false;
                                return game.hasPlayer((target) => target.hasCard((cardx) => cardx !== card, 'h'));
                            }, 'he');
                        },
                        async content(event, trigger, player) {
                            const result = (event.result = await player
                                .chooseCardTarget({
                                    prompt: get.prompt(event.name),
                                    prompt2: '将一张黑色牌置于一名角色的武将牌上,然后其将所有手牌置于武将牌上,其回合结束时获得武将牌上的所有牌',
                                    filterCard: { color: 'black' },
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        return target.hasCard((cardx) => !ui.selected.cards?.includes(cardx), 'h');
                                    },
                                    ai1(card) {
                                        return 6 - get.value(card);
                                    },
                                    ai2(target) {
                                        const player = get.player();
                                        return -Math.sign(get.attitude(player, target)) * target.countCards('h');
                                    },
                                })
                                .forResult());
                            if (result?.bool) {
                                const {
                                    cards,
                                    targets: [target],
                                } = result;
                                const pojun = event.name + '_pojun';
                                target.addTempSkill(pojun, { player: 'phaseAfter' });
                                const next = target.addToExpansion(cards, player, 'give');
                                next.gaintag.add(pojun);
                                await next;
                                const next2 = target.addToExpansion(target.getCards('h'), target, 'give');
                                next2.gaintag.add(pojun);
                                await next2;
                            }
                        },
                    },
                    {
                        filter(event, player) {
                            return game.hasPlayer((target) => {
                                return game.hasPlayer((current) => target.canCompare(current));
                            });
                        },
                        async content(event, trigger, player) {
                            const resultx = (event.result = await player
                                .chooseTarget(
                                    get.prompt(event.name),
                                    (card, player, target) => {
                                        if (!ui.selected.targets.length) return game.hasPlayer((current) => target.canCompare(current));
                                        return target.canCompare(ui.selected.targets[0]);
                                    },
                                    '将武将牌翻面并令两名角色拼点,若双方点数之差:大于6,则你复原武将牌并摸两张牌;小于等于6,双方各减1点体力上限'
                                )
                                .set('ai', (target) => {
                                    const player = get.player();
                                    return -get.attitude(player, target);
                                })
                                .set('multitarget', true)
                                .set('selectTarget', 2)
                                .set('targetprompt', ['发起者', '被拼者'])
                                .forResult());
                            if (resultx?.bool) {
                                const targets = resultx.targets;
                                const result = targets[0].chooseToCompare(targets[1]);
                                await result;
                                if (Math.abs(result.num1 - result.num2) > 6) {
                                    if (player.isTurnedOver()) await player.turnOver(false);
                                    if (player.isLinked()) await player.link(false);
                                    await player.draw(2);
                                } else {
                                    for (const i of targets.sortBySeat()) await i.loseMaxHp();
                                }
                            }
                        },
                    },
                    {
                        filter(event, player) {
                            return player.hasCard((card) => lib.filter.cardDiscardable(card, player), 'he');
                        },
                        async content(event, trigger, player) {
                            const result = (event.result = await player
                                .chooseToDiscard(get.prompt(event.name), 'he', [1, Infinity])
                                .set('ai', (card) => {
                                    _status._qx_yilve_check = true;
                                    const num = get.info('rezhiheng').check(card);
                                    delete _status._qx_yilve_check;
                                    return num;
                                })
                                .set('chooseonly', true)
                                .set('prompt2', '弃置任意张牌并从牌堆底摸等量张牌.若你因此失去所有手牌,则你额外摸一张牌')
                                .forResult());
                            if (result?.bool) {
                                let num = 1,
                                    hs = player.getCards('h');
                                if (!hs.length || hs.some((card) => !result.cards?.includes(card))) num = 0;
                                await player.discard(result.cards);
                                await player.draw(num + result.cards.length);
                            }
                        },
                    },
                    {
                        filter(event, player) {
                            if (!player.hasCard((card) => lib.filter.cardDiscardable(card, player), 'he')) return false;
                            const history = player
                                .getHistory('useCard', (evt) => !['equip', 'delay'].includes(get.type(evt.card)))
                                .slice()
                                .reverse();
                            return (
                                history[0] &&
                                player.hasUseTarget(
                                    new lib.element.VCard({
                                        name: history[0].card.name,
                                        nature: history[0].card.nature,
                                    })
                                )
                            );
                        },
                        async content(event, trigger, player) {
                            const history = player
                                .getHistory('useCard', (evt) => !['equip', 'delay'].includes(get.type(evt.card)))
                                .slice()
                                .reverse();
                            const card = new lib.element.VCard({ name: history[0].card.name, nature: history[0].card.nature });
                            const result = (event.result = await player
                                .chooseToDiscard(get.prompt(event.name), 'he')
                                .set('ai', (card) => {
                                    const { player, card: cardx } = get.event();
                                    return player.getUseValue(cardx) - get.value(card);
                                })
                                .set('card', card)
                                .set('prompt2', '弃置一张牌,视为使用' + get.translation(card))
                                .forResult());
                            if (result?.bool) await player.chooseUseTarget(card, true, false);
                        },
                    },
                ],
            },
            qx_kanzhu: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'useCard' },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseNumbers(get.translation('qx_kanzhu'), [
                            {
                                prompt: '请选择你要观看的牌数',
                                min: 1,
                                max: player.maxHp,
                            },
                        ])
                        .set('processAI', () => [6])
                        .forResult();
                    if (event.result?.numbers?.length) event.result.cost_data = event.result.numbers[0];
                },
                usable: 1,
                async content(event, trigger, player) {
                    let cards = get.cards(event.cost_data, true);
                    await player.chooseControl('ok').set('dialog', ['牌堆顶的牌', cards]);
                    const gains = cards.filter((card) => get.color(card) === get.color(trigger.card));
                    if (gains.length) await player.gain(gains, 'gain2');
                    if (gains.length < player.maxHp) {
                        let choice = ['加上限'],
                            choiceList = ['本回合手牌上限+1'];
                        if (player.hasCard((card) => lib.filter.cardDiscardable(card, player))) {
                            choice.push('砸人血');
                            choiceList.push('弃置一张手牌并对一名角色造成1点伤害');
                        }
                        choice.push('cancel2');
                        const result = await player
                            .chooseControl(choice)
                            .set('ai', () => {
                                const { player, controls } = get.event();
                                if (controls.includes('砸人血') && game.hasPlayer((target) => get.damageEffect(target, player, player) > 0)) return '砸人血';
                                return '加上限';
                            })
                            .set('choiceList', choiceList)
                            .forResult();
                        if (result.control === 'cancel2') return;
                        if (result.control === '加上限') {
                            player.addTempSkill('qx_kanzhu_hand');
                            player.addMark('qx_kanzhu_hand', 1, false);
                        } else {
                            const result2 = await player
                                .chooseCardTarget({
                                    prompt: '弃置一张手牌并对一名角色造成1点伤害',
                                    filterTarget: true,
                                    filterCard: lib.filter.cardDiscardable,
                                    position: 'h',
                                    ai1(card) {
                                        return 8 - get.value(card);
                                    },
                                    ai2(target) {
                                        const player = get.player();
                                        return get.damageEffect(target, player, player);
                                    },
                                    forced: true,
                                })
                                .forResult();
                            if (result2?.bool && result2.cards?.length && result2.targets?.length) {
                                player.line(result2.targets);
                                await player.discard(result2.cards);
                                await result2.targets[0].damage();
                            }
                        }
                    }
                },
                subSkill: {
                    hand: {
                        charlotte: true,
                        onremovce: true,
                        intro: { content: '手牌上限+#' },
                        mod: {
                            maxHandcard(player, num) {
                                return num + player.countMark('qx_kanzhu_hand');
                            },
                        },
                    },
                },
            },
            qx_yiyan: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    global: 'roundStart',
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return player.hasCard((card) => {
                        if (get.position(card) === 'h' && _status.connectMode) return true;
                        return lib.filter.cardDiscardable(card, player) && get.tag(card, 'damage') < 0.5;
                    }, 'he');
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseToDiscard(
                            get.prompt2('qx_yiyan'),
                            (card, player) => {
                                return get.tag(card, 'damage') < 0.5;
                            },
                            [1, Infinity]
                        )
                        .set('chooseonly', true)
                        .set('ai', get.info('zhiheng').check)
                        .forResult();
                },
                async content(event, trigger, player) {
                    const cards = event.cards;
                    await player.discard(cards);
                    player.addSkill('qx_yiyan_effect');
                    const next = player.drawTo(Math.min(player.maxHp, player.countCards('h') + cards.length));
                    next.gaintag = ['qx_yiyan_effect'];
                    await next;
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove(player, skill) {
                            player.removeGaintag(skill);
                        },
                        mod: {
                            ignoredHandcard(card) {
                                if (card.hasGaintag('qx_yiyan_effect')) return true;
                            },
                            cardDiscardable(card, player, name) {
                                if (name === 'phaseDiscard' && card.hasGaintag('qx_yiyan_effect')) return false;
                            },
                        },
                    },
                },
            },
            qx_kanji: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseBegin' },
                filter(event, player) {
                    return event.player !== player;
                },
                check(event, player) {
                    const att = get.attitude(player, event.player);
                    if (att <= 0) return att !== 0;
                    return event.player.hasCard((card) => {
                        return event.player.hasValueTarget(card, false) && !event.player.hasValueTarget(card);
                    }, 'hs');
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    const result = await trigger.player.judge((card) => (get.color(card) === 'black' ? -1 : 1)).forResult();
                    if (['red', 'black'].includes(result.color)) trigger.player.addTempSkill('qx_kanji_' + result.color);
                },
                subSkill: {
                    red: {
                        charlotte: true,
                        mark: true,
                        intro: { content: '使用牌无距离限制' },
                        mod: { targetInRange: () => true },
                    },
                    black: {
                        charlotte: true,
                        mark: true,
                        intro: { content: '不能使用伤害牌' },
                        mod: {
                            cardEnabled(card) {
                                if (get.tag(card, 'damage') >= 0.5) return false;
                            },
                        },
                    },
                },
            },
            qx_tongru: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return player.maxHp > 0 && game.hasPlayer((t) => t !== player);
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2('qx_tongru'), lib.filter.notMe)
                        .set('ai', (target) => {
                            const player = get.player();
                            if (get.attitude(player, target) <= 0) return 0;
                            const list = get.info('qx_tongru').getList;
                            const list1 = list.map((listx) => listx[0][1]).filter((effect) => !effect.filter || effect.filter(player));
                            const list2 = list.map((listx) => listx[0][1]).filter((effect) => !effect.filter || effect.filter(target));
                            return Math.max(...list1.map((effect) => effect.ai(player, player))) + Math.max(...list2.map((effect) => effect.ai(target, player)));
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const [target] = event.targets;
                    let list = get.info('qx_tongru').getList.map((choice) => {
                        if (choice[0].includes('#')) {
                            choice[0] = choice[0].replaceAll('#', player.maxHp);
                        }
                        return [choice, choice[0]];
                    });
                    for (const current of [player, target]) {
                        const result = await current
                            .chooseButton(['通儒:请选择执行其中一项', [list, 'textbutton']], true)
                            .set('filterButton', (button) => {
                                const effect = button.link[1];
                                return !effect.filter || effect.filter(get.player());
                            })
                            .set('ai', (button) => button.link[1].ai(get.event().player, get.event().parent.player))
                            .forResult();
                        if (result.bool) {
                            list = list.filter((choice) => !result.links.includes(choice[0]));
                            await result.links[0][1].content(current, player);
                        }
                    }
                    if (list.length) {
                        player.addTempSkill('qx_tongru_end');
                        player.markAuto(
                            'qx_tongru_end',
                            list.map((listx) => listx[0][1])
                        );
                    }
                },
                subSkill: {
                    end: {
                        charlotte: true,
                        trigger: { player: 'phaseEnd' },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            let list = player.getStorage(event.name).slice();
                            while (list.length) {
                                const choice = list.shift();
                                if (!choice.filter || choice.filter(player)) await choice.content(player, player);
                            }
                        },
                    },
                    ban: {
                        charlotte: true,
                        mark: true,
                        marktext: '禁',
                        intro: { content: '不能使用$牌' },
                        mod: {
                            cardEnabled(card, player) {
                                if (player.getStorage('qx_tongru_ban').includes(get.type2(card))) return false;
                            },
                            cardSavable(card, player) {
                                if (player.getStorage('qx_tongru_ban').includes(get.type2(card))) return false;
                            },
                        },
                    },
                },
                getList: [
                    [
                        '观看牌堆底2*#张牌并获得其中任意张花色相同的牌',
                        {
                            async content(player, source) {
                                const cards = get.bottomCards(source.maxHp * 2, true);
                                const gains = await player
                                    .chooseButton(['通儒:获得其中任意张花色相同的牌', cards], [1, Infinity], true)
                                    .set('cards', cards)
                                    .set('filterButton', (button) => {
                                        return !ui.selected.buttons?.some((but) => but.link.suit !== button.link.suit);
                                    })
                                    .set('ai', (button) => {
                                        const { player, cards } = get.event();
                                        const suits = cards.map((card) => card.suit).unique();
                                        suits.sort((a, b) => {
                                            return (
                                                cards
                                                    .filter((card) => {
                                                        return card.suit === b;
                                                    })
                                                    .reduce((sum, card) => {
                                                        return sum + get.value(card, player);
                                                    }, 0) -
                                                cards
                                                    .filter((card) => {
                                                        return card.suit === a;
                                                    })
                                                    .reduce((sum, card) => {
                                                        return sum + get.value(card, player);
                                                    }, 0)
                                            );
                                        });
                                        return button.link.suit === suits[0] ? get.value(button.link, player) : 0;
                                    })
                                    .forResult('links');
                                if (gains?.length) await player.gain(gains, 'gain2');
                            },
                            ai(player, source) {
                                const cards = Array.from(ui.cardPile.childNodes)
                                    .reverse()
                                    .slice(0, Math.min(2 * source.maxHp, Array.from(ui.cardPile.childNodes).length));
                                const suits = cards.map((card) => card.suit).unique();
                                return Math.max(...suits.map((suit) => cards.filter((card) => card.suit === suit).reduce((sum, card) => sum + get.value(card, player), 0)));
                            },
                        },
                    ],
                    [
                        '令一名角色不能使用一种类别的牌直到其回合结束',
                        {
                            filter() {
                                return game.hasPlayer((target) => target.getStorage('qx_tongru_ban').length < 3);
                            },
                            async content(player) {
                                const resultx = await player
                                    .chooseTarget(
                                        '通儒:令一名角色不能使用一种类别的牌直到其回合结束',
                                        (card, player, target) => {
                                            return target.getStorage('qx_tongru_ban').length < 3;
                                        },
                                        true
                                    )
                                    .set('ai', (target) => {
                                        const player = get.player();
                                        if (get.attitude(player, target) >= 0) return 0;
                                        const cards = target.getCards('hs', (card) => target.hasValueTarget(card));
                                        const types = cards.map((card) => get.type2(card)).unique();
                                        return (
                                            Math.max(
                                                ...[0].concat(
                                                    types.map((type) => {
                                                        return cards.filter((card) => get.type2(card) === type).reduce((sum, card) => sum + target.getUseValue(card), 0);
                                                    })
                                                )
                                            ) + 1
                                        );
                                    })
                                    .forResult();
                                if (resultx?.bool && resultx.targets?.length) {
                                    const [target] = resultx.targets;
                                    player.line(target);
                                    const types = ['basic', 'trick', 'equip'].filter((type) => !target.getStorage('qx_tongru_ban').includes(type));
                                    const result =
                                        types.length > 1
                                            ? await player
                                                .chooseControl(types)
                                                .set('ai', () => {
                                                    const { target, controls } = get.event();
                                                    const cards = target.getCards('hs', (card) => target.hasValueTarget(card));
                                                    const types = cards.map((card) => get.type2(card)).unique();
                                                    const map = (() => {
                                                        let map = {};
                                                        for (const type of types) {
                                                            map[type] = cards.filter((card) => get.type2(card) === type).reduce((sum, card) => sum + target.getUseValue(card), 0);
                                                        }
                                                        return map;
                                                    })();
                                                    return controls.slice().sort((a, b) => map[b] || 0 - map[a] || 0)[0];
                                                })
                                                .set('target', target)
                                                .set('prompt', '通儒:请禁用' + get.translation(target) + '一个类别的使用权')
                                                .forResult()
                                            : { control: types[0] };
                                    target.addTempSkill('qx_tongru_ban', { player: 'phaseEnd' });
                                    target.markAuto('qx_tongru_ban', [result.control]);
                                }
                            },
                            ai(player) {
                                return (
                                    Math.max(
                                        ...[-1].concat(
                                            game
                                                .filterPlayer((target) => get.attitude(player, target) < 0 && target.getStorage('qx_tongru_ban').length < 3)
                                                .map((target) => {
                                                    const cards = target.getCards('hs', (card) => target.hasValueTarget(card));
                                                    const types = cards.map((card) => get.type2(card)).unique();
                                                    return Math.max(
                                                        ...[0].concat(
                                                            types.map((type) => {
                                                                return cards.filter((card) => get.type2(card) === type).reduce((sum, card) => sum + target.getUseValue(card), 0);
                                                            })
                                                        )
                                                    );
                                                })
                                        )
                                    ) + 1
                                );
                            },
                        },
                    ],
                    [
                        '使用牌堆顶的#张牌',
                        {
                            async content(player, source) {
                                let cards = get.cards(source.maxHp, true);
                                while (cards.some((card) => player.hasUseTarget(card, true))) {
                                    const result = await player
                                        .chooseButton(['通儒:使用其中的一张牌', cards])
                                        .set('filterButton', (button) => {
                                            return get.player().hasUseTarget(button.link);
                                        })
                                        .set('ai', (button) => {
                                            if (button.link.name === 'jiu') return 10;
                                            return get.player().getUseValue(button.link);
                                        })
                                        .forResult();
                                    if (result?.bool && result.links?.length) {
                                        const card = result.links[0];
                                        cards.remove(card);
                                        player.$gain2(card, false);
                                        await player.chooseUseTarget(card, true, false);
                                    }
                                }
                            },
                            ai(player, source) {
                                const cards = Array.from(ui.cardPile.childNodes).slice(0, Math.min(source.maxHp, Array.from(ui.cardPile.childNodes).length));
                                return cards.filter((card) => player.hasUseTarget(card)).reduce((sum, card) => sum + player.getUseValue(card), 0);
                            },
                        },
                    ],
                ],
            },
            qx_moujian: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer((target) => get.info('qx_moujian').filterTarget(null, player, target));
                },
                filterTarget(card, player, target) {
                    return target.hasCard((card) => {
                        if (get.position(card) === 'h' && target !== player) return true;
                        return lib.filter.cardDiscardable(card, target);
                    }, 'he');
                },
                selectTarget: () => [1, get.player().maxHp],
                multiline: true,
                multitarget: true,
                usable: 1,
                async content(event, trigger, player) {
                    const targets = event.targets.sortBySeat();
                    for (const i of targets) await i.chooseToDiscard('he', true);
                    const cards = targets.reduce((list, target) => {
                        return list.addArray(
                            target
                                .getHistory('lose', (evt) => evt.getParent(3) === event)
                                .map((evt) => evt.getl(target).cards2)
                                .flat()
                        );
                    }, []);
                    if (cards.length) {
                        const names = cards.map((card) => card.name).unique();
                        if (names.length === 1) {
                            for (const i of targets) {
                                await i.damage();
                            }
                        }
                        else {
                            if (names.length === cards.length) {
                                if (cards.someInD('d')) {
                                    await player.gain(cards.filterInD('d'), 'gain2');
                                }
                                delete player.getStat('skill')[event.name];
                            }//QQQ
                        }
                    }
                },
                ai: {
                    order(item, player) {
                        return get.order({ name: 'guohe_copy2' }, player) + 0.1;
                    },
                    result: {
                        player(player, target) {
                            return get.effect(target, { name: 'guohe_copy2' }, target, player);
                        },
                    },
                },
            },
            qx_duduan: {
                initSkills() {
                    let list,
                        skills = [];
                    if (get.mode() == 'guozhan') {
                        list = Object.keys(lib.characterPack.mode_guozhan).filter((i) => lib.character[i]);
                    } else if (_status.connectMode) list = get.charactersOL();
                    else
                        list = (() => {
                            if (!_status.characterlist) get.info('pingjian').initList();
                            return _status.characterlist;
                        })();
                    for (const i of list) {
                        const iskills = get.character(i).skills || [];
                        if (i.indexOf('gz_jun') === 0 || !iskills.length) continue;
                        skills.addArray(
                            iskills.filter((j) => {
                                const info = get.info(j) || {};
                                return info.limited && !info.combo && !info.charlotte;
                            })
                        );
                    }
                    _status._qx_duduan_list = skills;
                },
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    global: 'roundStart',
                    source: 'damageSource',
                },
                filter(event, player) {
                    if (!_status._qx_duduan_list) get.info('qx_duduan').initSkills();
                    return _status._qx_duduan_list.some((skill) => {
                        return !player.awakenedSkills.includes(skill) && !player.hasSkill(skill, null, false, false);
                    });
                },
                forced: true,
                async content(event, trigger, player) {
                    const skill = _status._qx_duduan_list
                        .filter((skill) => {
                            return !player.awakenedSkills.includes(skill) && !player.hasSkill(skill, null, false, false);
                        })
                        .randomGet();
                    player.popup(skill);
                    await player.addAdditionalSkills(event.name, skill, true);
                    const skills = player.additionalSkills?.[event.name] || [];
                    const num = skills.length - player.maxHp;
                    if (num > 0) {
                        const result =
                            skills.length > num
                                ? await player
                                    .chooseButton(
                                        [
                                            '独断:技能上限已满,请失去' + get.cnNumber(num) + '个以此法获得的的限定技',
                                            [
                                                skills.map((skill) => {
                                                    return [skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>'];
                                                }),
                                                'textbutton',
                                            ],
                                        ],
                                        num,
                                        true
                                    )//QQQ
                                    .set('ai', (button) => {
                                        const skill = button.link;
                                        if (player.awakenedSkills.includes(skill)) return 10;
                                        return -get.skillRank(skill);
                                    })
                                    .forResult()
                                : { bool: true, links: skills };
                        if (result?.links?.length) {
                            await player.changeSkills([], result.links).set('$handle', (player, addSkills, removeSkills) => {
                                game.log(player, '失去了技能', ...removeSkills.map((i) => '#g【' + get.translation(i) + '】'));
                                player.removeSkill(removeSkills);
                                if (player.additionalSkills?.qx_duduan?.length) {
                                    player.additionalSkills.qx_duduan.removeArray(removeSkills);
                                    if (!player.additionalSkills.qx_duduan.length) delete player.additionalSkills.qx_duduan;
                                }
                            });
                        }
                    }
                },
            },
            qx_kanmie: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'useCardToPlayer' },
                filter(event, player) {
                    return event.card && event.card.name === 'sha' && event.player !== event.target && event.target.countCards('h');
                },
                popup: false,
                async cost(event, trigger, player) {
                    const target = trigger.target,
                        list = ['qx_kanmie', target];
                    event.result = await player
                        .discardPlayerCard(target, 'h')
                        .set('prompt', get.prompt(...list))
                        .forResult();
                },
                async content(event, trigger, player) {
                    if (typeof trigger.card.number === 'number') {
                        if (event.cards.some((card) => card.number < trigger.card.number)) {
                            trigger.parent.effectCount++;
                            trigger.parent.baseDamage++;
                        }
                    }
                },
            },
            qx_dianjiao: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: ['damageSource', 'damageEnd'] },
                filter(event, player, name) {
                    const source = event[name === 'damageSource' ? 'source' : 'player'];
                    if (player.getStorage('qx_dianjiao_used').includes(source)) return false;
                    if (!ui.cardPile.childNodes.length || !event.card || event.card.name !== 'sha') return false;
                    return source?.isIn() && game.hasPlayer((target) => !source.inRange(target));
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(
                            get.prompt2('qx_dianjiao'),
                            (card, player, target) => {
                                const event = get.event(),
                                    source = event.getTrigger()[event.parent.triggername === 'damageSource' ? 'source' : 'player'];
                                return !source.inRange(target);
                            },
                            [1, Infinity]
                        )
                        .set('ai', (target) => {
                            const player = get.player();
                            return get.damageEffect(target, player, player, 'thunder');
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    player.addTempSkill('qx_dianjiao_used');
                    player.markAuto('qx_dianjiao_used', [trigger[event.triggername === 'damageSource' ? 'source' : 'player']]);
                    const cards = get.cards();
                    await game.cardsDiscard(cards);
                    game.log(cards, '进入了弃牌堆');
                    for (const i of event.targets.sortBySeat()) await i.damage(1, 'thunder');
                },
                subSkill: {
                    used: {
                        charlotte: true,
                    },
                },
            },
            qx_mihu: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    player: 'damageBegin4',
                    target: 'useCardToTargeted',
                },
                filter(event, player) {
                    return (
                        game
                            .getAllGlobalHistory(
                                'everything',
                                (evt) => {
                                    if (event.name === 'damage') return evt.name === 'damage' && evt.player === player;
                                    return evt.name === 'useCard' && evt.targets?.includes(player);
                                },
                                event
                            )
                            .indexOf(event) === 0
                    );
                },
                forced: true,
                async content(event, trigger, player) {
                    const source = trigger[trigger.name === 'damage' ? 'source' : 'player'];
                    if (trigger.name === 'damage') trigger.cancel();
                    else {
                        trigger.parent.excluded.add(player);
                        game.log(trigger.card, '对', player, '无效');
                    }
                    if (source?.isIn()) {
                        player.addSkill('qx_mihu_effect');
                        const next = source.chooseToGive(player, 'he');
                        if (
                            game.getGlobalHistory('everything', (evt) => {
                                return evt.name === event.name && evt.result?.bool && evt.result.cards?.length;
                            }).length < 2
                        )
                            next.gaintag.add('qx_mihu_effect');
                        const result = (event.result = await next.forResult());
                        if (!result?.cards?.length) await source.chooseToDiscard('he', true, 2);
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        mod: {
                            cardname(card) {
                                if (get.itemtype(card) == 'card' && card.hasGaintag('qx_mihu_effect')) return 'tao';
                            },
                            cardnature(card) {
                                if (get.itemtype(card) == 'card' && card.hasGaintag('qx_mihu_effect')) return false;
                            },
                            ignoredHandcard(card) {
                                if (card.hasGaintag('qx_mihu_effect')) return true;
                            },
                            cardDiscardable(card, player, name) {
                                if (name === 'phaseDiscard' && card.hasGaintag('qx_mihu_effect')) return false;
                            },
                        },
                    },
                },
            },
            // 神隐技.①游戏开始时,你进入修整状态.②当你登场后,令全场获得<寂海无垠>光环直到你死亡
            qx_xuwu: {
                audio: 'ext:群星荟萃/audio/skill:2',
                categories: () => ['神隐技'],
                trigger: {
                    global: ['gameStart'],
                },
                forced: true,
                async content(event, trigger, player) {
                    player.classList.add('out');
                    player.$fullscreenpop('寂海无垠', 'thunder');
                    for (const i of game.players) {
                        i.addSkillBlocker('qx_xuwu_jihaiwuyin');
                    }
                    if (get.is.phoneLayout()) {
                        ui._qx_jihaiwuyin = ui.create.div('.touchinfo.left', ui.window);
                    }
                    else {
                        ui._qx_jihaiwuyin = ui.create.div(ui.gameinfo);
                    }
                    ui._qx_jihaiwuyin.innerHTML = '寂海无垠';
                },
                group: ['qx_xuwu_init', 'qx_xuwu_dead'],
                global: ['qx_xuwu_jihaiwuyin'],
                subSkill: {
                    init: {
                        trigger: {
                            global: ['damageEnd', 'loseHpEnd'],
                        },
                        filter(event, player) {
                            return player.isOut() && game.getAllGlobalHistory('everything', evt => {
                                return ['damage', 'loseHp'].includes(evt.name);
                            }).map(evt => evt.player).unique().length >= 2;
                        },
                        forced: true,
                        forceOut: true,
                        async content(event, trigger, player) {
                            const result = await player.chooseBool('###神隐###<div class="text center">已有至少两名角色受到伤害或失去体力,是否回到游戏？</div>').set('includeOut', true).forResult();
                            if (result?.bool) {
                                player.in();
                            }
                        },
                    },
                    dead: {
                        charlotte: true,
                        trigger: { player: 'dieAfter' },
                        firstDo: true,
                        forced: true,
                        popup: false,
                        forceDie: true,
                        content() {
                            ui._qx_jihaiwuyin.remove();
                            game.removeGlobalSkill('qx_xuwu_jihaiwuyin');
                            for (const i of game.players.slice().concat(game.dead)) {
                                i.removeSkillBlocker('qx_xuwu_jihaiwuyin');
                            }
                        },
                    },
                    // 锁定技,当弃牌堆中的黑色牌/红色牌不小于全场存活角色数时,所有角色的非锁定技失效/受到的伤害+1
                    jihaiwuyin: {
                        skillBlocker(skill, player) {
                            const info = get.info(skill);
                            if (get.is.locked(skill, player) || info?.charlotte || info?.persevereSkill) return false;
                            return Array.from(ui.discardPile.childNodes).filter((card) => get.color(card) === 'black').length >= game.countPlayer(null, true);
                        },
                        trigger: { player: 'damageBegin2' },
                        filter(event, player) {
                            return Array.from(ui.discardPile.childNodes).filter((card) => get.color(card) === 'red').length >= game.countPlayer(null, true);
                        },
                        forced: true,
                        popup: false,
                        content() {
                            trigger.num++;
                        },
                    },
                },
            },
            qx_xukong: {
                audio: 'ext:群星荟萃/audio/skill:2',
                mod: {
                    targetEnabled(card, player, target) {
                        if (player.countCards('h') > target.getHp() || player.countCards('e') > target.getHp()) return false;
                    },
                },
            },
            qx_xuyan: {
                init(player) {
                    game.broadcastAll((player) => {
                        const qx_update = player.$update;
                        player.$update = function () {
                            const player = this;
                            if (player.maxHp !== 1 && player.hasSkill('qx_xuyan')) player.maxHp = 1;
                            return qx_update.apply(this, arguments);
                        };
                        const gameDraw = game.gameDraw;
                        game.gameDraw = function () {
                            const next = gameDraw.apply(this, arguments);
                            if (next.player === game.me) next.includeOut = true;
                            return next;
                        };
                    }, player);
                },
                mod: { maxHandcardFinal: () => 1 },
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    player: 'loseAfter',
                    global: ['cardsDiscardAfter', 'loseAsyncAfter', 'gainAfter', 'equipAfter'],
                },
                getIndex(event, player, triggername) {
                    if (event.name === 'cardsDiscard') {
                        if (!event.cards.someInD('d')) return false;
                        const evt = event.parent;
                        if (evt.name !== 'orderingDiscard') return false;
                        const evtx = evt.relatedEvent || evt.parent;
                        if (evtx.player !== player) return false;
                        return player
                            .getHistory('lose', (evtxx) => {
                                return evtx === (evtxx.relatedEvent || evtxx.parent) && evtxx.hs.length;
                            })
                            .map((evtxx) => evtxx.hs)
                            .flat();
                    } else if (event.name === 'gain' || (event.name === 'loseAsync' && event.type === 'gain')) {
                        const cards = event.getl?.(player)?.hs || [];
                        return cards.filter((card) => {
                            return game.hasPlayer((target) => target !== player && (event.getg?.(target) || []).includes(card));
                        });
                    } return event.getd(player, 'hs');
                },
                filter(event, player, name, card) {
                    switch (get.type2(card)) {
                        case 'basic':
                            return game.hasPlayer((target) => target !== player && target.countCards('h'));
                        case 'trick':
                            return (
                                player.hasUseTarget(card) ||
                                game.hasPlayer((target) => {
                                    return target.getSkills(null, false, false).some((skill) => {
                                        const info = get.info(skill);
                                        return info && !info.charlotte;
                                    });
                                })
                            );
                        case 'equip':
                            return game.hasPlayer((target) => {
                                return target !== player && target.hasEnabledSlot();
                            });
                        default:
                            return false;
                    }
                },
                async cost(event, trigger, player) {
                    const card = event.indexedData;
                    switch (get.type2(card)) {
                        case 'basic':
                            event.result = await player
                                .chooseTarget(
                                    get.prompt('qx_xuyan'),
                                    (card, player, target) => {
                                        return target !== player && target.countCards('h');
                                    },
                                    '令一名其他角色展示手牌,然后弃置所有【' + get.translation(card.name) + '】'
                                )
                                .set('ai', (target) => {
                                    const { player, card } = get.event();
                                    return (1 + target.countCards('h', { name: card.name })) * Math.sign(-get.attitude(player, target));
                                })
                                .set('card', card)
                                .forResult();
                            break;
                        case 'trick':
                            let addIndex = 0,
                                choiceList = [];
                            if (player.hasUseTarget(card)) choiceList.push('使用' + get.translation(card));
                            else addIndex++;
                            if (
                                game.hasPlayer((target) => {
                                    return target.getSkills(null, false, false).some((skill) => {
                                        const info = get.info(skill);
                                        return info && !info.charlotte;
                                    });
                                })
                            )
                                choiceList.push('令一名其他角色失去武将牌上的一个技能');
                            const result = await player
                                .chooseControl(
                                    Array.from({ length: choiceList.length }).map((_, i) => {
                                        return '选项' + get.cnNumber(i + 1, true);
                                    }),
                                    'cancel2'
                                )
                                .set('choiceList', choiceList)
                                .set('prompt', get.prompt('qx_xuyan'))
                                .set('card', card)
                                .set('ai', () => {
                                    const { player, card, addIndex } = get.event();
                                    if (player.hasValueTarget(card)) return 0;
                                    if (
                                        game.hasPlayer((target) => {
                                            if (get.attitude(player, target) >= 0) return false;
                                            return (
                                                Math.min(
                                                    ...target
                                                        .getSkills(null, false, false)
                                                        .filter((skill) => {
                                                            const info = get.info(skill);
                                                            return info && !info.charlotte;
                                                        })
                                                        .map((skill) => {
                                                            _status.event.skillRankPlayer = target;
                                                            const num = get.skillRank(skill);
                                                            delete _status.event.skillRankPlayer;
                                                            return num;
                                                        })
                                                ) >= 0
                                            );
                                        })
                                    )
                                        return 1 - addIndex;
                                    return 'cancel2';
                                })
                                .set('addIndex', addIndex)
                                .forResult();
                            if (result.control === 'cancel2') event.result = { bool: false };
                            else {
                                switch (result.index + addIndex) {
                                    case 0:
                                        await player.chooseUseTarget(card, true, false);
                                        event.result = { bool: false };
                                        break;
                                    case 1:
                                        event.result = await player
                                            .chooseTarget('令一名其他角色失去一个武将牌上的技能', lib.filter.notMe, true)
                                            .set('ai', (target) => {
                                                const player = get.player();
                                                if (get.attitude(player, target) >= 0) return false;
                                                return Math.min(
                                                    ...target
                                                        .getSkills(null, false, false)
                                                        .filter((skill) => {
                                                            const info = get.info(skill);
                                                            return info && !info.charlotte;
                                                        })
                                                        .map((skill) => {
                                                            _status.event.skillRankPlayer = target;
                                                            const num = get.skillRank(skill);
                                                            delete _status.event.skillRankPlayer;
                                                            return num;
                                                        })
                                                );
                                            })
                                            .forResult();
                                        break;
                                }
                            }
                            break;
                        case 'equip':
                            event.result = {
                                bool: true,
                                targets: game
                                    .filterPlayer((target) => {
                                        return target !== player && target.hasEnabledSlot();
                                    })
                                    .randomGets(1),
                            };
                            break;
                    }
                },
                async content(event, trigger, player) {
                    const card = event.indexedData,
                        [target] = event.targets;
                    switch (get.type2(card)) {
                        case 'basic':
                            await target.showHandcards();
                            const cards = target.getDiscardableCards(target, 'h', (card2) => card2.name === card.name);
                            if (cards.length) await target.discard(cards);
                            break;
                        case 'trick':
                            const skills = target.getSkills(null, false, false).filter((skill) => {
                                const info = get.info(skill);
                                return info && !info.charlotte;
                            });
                            const skill =
                                skills.length > 1
                                    ? await target
                                        .chooseControl(skills)
                                        .set('ai', () => {
                                            let controls = get.event().controls.slice();
                                            controls.sort((a, b) => get.skillRank(b) - get.skillRank(a));
                                            return controls[0];
                                        })
                                        .forResult('control')
                                    : skills[0];
                            if (skill) {
                                target.popup(skill);
                                await target.removeSkills(skill);
                            }
                            break;
                        case 'equip':
                            await target.disableEquip(
                                Array.from({ length: 5 })
                                    .map((_, i) => i + 1)
                                    .filter((num) => target.hasEnabledSlot(num))
                                    .randomGet()
                            );
                            break;
                    }
                },
                group: 'qx_xuyan_cancel',
                subSkill: {
                    cancel: {
                        audio: 'qx_xuyan',
                        trigger: { player: ['gainMaxHpBegin', 'loseMaxHpBegin'] },
                        forced: true,
                        content() {
                            trigger.cancel();
                        },
                    },
                },
            },
            qx_qingjiang: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter', 'equipAfter'] },
                getIndex: (event) => event.getd().filter((card) => get.type(card) === 'equip'),
                filter(event, player, name, card) {
                    return !player.getStorage('qx_qingjiang_used').includes(card.name);
                },
                prompt2(event, player, name, card) {
                    return '将' + get.translation(card) + '置于武将牌上,然后摸' + get.cnNumber(Math.ceil(get.cardNameLength(card) / 2)) + '张牌';
                },
                async content(event, trigger, player) {
                    const card = event.indexedData;
                    player.addSkill('qx_qingjiang_used');
                    player.markAuto('qx_qingjiang_used', [card.name]);
                    const next = player.addToExpansion(card, 'gain2');
                    next.gaintag.add('qx_qingjiang');
                    await next;
                    await player.draw(Math.ceil(get.cardNameLength(card) / 2));
                },
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    player.removeGaintag(skill);
                    const cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                subSkill: {
                    used: {
                        charlotte: true,
                        intro: { content: '本局游戏已通过$发动过此技能' },
                    },
                },
            },
            qx_liejue: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    if (!player.getExpansions('qx_qingjiang').length) return false;
                    return player.hasUseTarget({ name: 'sha' }, false);
                },
                usable(skill, player) {
                    const num = player.storage.qx_liejue_effect;
                    return typeof num === 'number' ? num : 1;
                },
                chooseButton: {
                    dialog(event, player) {
                        return ui.create.dialog('###烈绝###<div class="text center">' + lib.translate.qx_liejue_info + '</div>', player.getExpansions('qx_qingjiang'), 'hidden');
                    },
                    check(button) {
                        const player = get.player(),
                            skills = (get.info(button.link).skills || []).filter((skill) => !player.hasSkill(skill, null, null, false));
                        player.addSkill(skills);
                        const num = player.getUseValue({ name: 'sha' }, false);
                        player.removeSkill(skills);
                        return num;
                    },
                    backup(links, player) {
                        return {
                            audio: 'olfushi',
                            cards: links,
                            filterTarget: lib.filter.targetEnabled,
                            filterCard: () => false,
                            selectCard: -1,
                            viewAs: {
                                name: 'sha',
                                storage: { qx_liejue: links },
                            },
                            precontent() {
                                player.addTempSkill('qx_liejue_effect');
                                player.loseToDiscardpile(get.info('qx_liejue_backup').cards);
                            },
                        };
                    },
                    prompt(links) {
                        return '###烈绝###<div class="text center">将' + get.translation(links) + '置入弃牌堆,视为使用一张无距离和任何次数限制的【杀】</div>';
                    },
                },
                ai: {
                    combo: 'qx_qingjiang',
                    order(item, player) {
                        return get.order({ name: 'sha' }, player) + 0.1;
                    },
                    result: { player: 1 },
                },
                subSkill: {
                    backup: {},
                    effect: {
                        charlotte: true,
                        trigger: { player: 'useCard1' },
                        filter(event, player) {
                            return event.skill === 'qx_liejue_backup';
                        },
                        forced: true,
                        popup: false,
                        content() {
                            if (!trigger.addCount !== false) {
                                trigger.addCount = false;
                                if (player.getStat('card')[trigger.card.name] > 0) player.getStat('card')[trigger.card.name]--;
                            }
                            const cards = trigger.card.storage.qx_liejue;
                            if (Array.isArray(cards)) {
                                const skills = cards.reduce((list, card) => {
                                    return list.addArray((get.info(card).skills || []).filter((skill) => !player.hasSkill(skill, null, null, false)));
                                }, []);
                                player.addTempSkill(skills);
                                player
                                    .when({ global: 'useCardAfter' })
                                    .filter((evt) => evt === trigger)
                                    .then(() => player.removeSkill(skills))
                                    .vars({ skills: skills });
                            }
                        },
                        intro: {
                            markcount: (storage = 0) => storage.toString(),
                            content: '发动次数为#',
                        },
                        group: 'qx_liejue_damage',
                    },
                    damage: {
                        charlotte: true,
                        trigger: { source: 'damageSource' },
                        filter(event, player) {
                            const cards = event.card.storage.qx_liejue;
                            return Array.isArray(cards) && cards.length;
                        },
                        forced: true,
                        popup: false,
                        content() {
                            const cards = trigger.card.storage.qx_liejue;
                            player.storage.qx_liejue_effect = player.getEquipRange(cards);
                            player.markSkill('qx_liejue_effect');
                        },
                    },
                },
            },
            qx_reliejue: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    if (!player.hasCard((card) => lib.filter.cardDiscardable(card, player), 'h')) return false;
                    return player.getExpansions('qx_qingjiang').some((card) => {
                        const subtypes = get.subtypes(card);
                        if (subtypes.includes('equip2') || subtypes.includes('equip3') || subtypes.includes('equip4')) return true;
                        return subtypes.includes('equip1') && player.hasUseTarget({ name: 'sha' }, false);
                    });
                },
                usable(skill, player) {
                    return 1 + player.countMark('qx_reliejue_count');
                },
                filterCard: lib.filter.cardDiscardable,
                position: 'h',
                check(card) {
                    return 8 - get.value(card);
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseButton(['烈绝:将一张符合条件的<擎江>牌置入弃牌堆', player.getExpansions('qx_qingjiang')])
                        .set('filterButton', (button) => {
                            const player = get.player(),
                                card = button.link,
                                subtypes = get.subtypes(card);
                            if (subtypes.includes('equip2') || subtypes.includes('equip3') || subtypes.includes('equip4')) return true;
                            return subtypes.includes('equip1') && player.hasUseTarget({ name: 'sha' }, false);
                        })
                        .set('ai', (button) => {
                            const player = get.player(),
                                card = button.link,
                                subtypes = get.subtypes(card);
                            if (subtypes.includes('equip1')) return player.getUseValue({ name: 'sha' }, false);
                            return 0;
                        })
                        .forResult();
                    if (result?.bool && result.links?.length) {
                        const card = result.links[0],
                            subtypes = get.subtypes(card);
                        await player.loseToDiscardpile([card]);
                        if (subtypes.includes('equip2') || subtypes.includes('equip3') || subtypes.includes('equip4')) {
                            player.addTempSkill('qx_reliejue_equip');
                            player.markAuto('qx_reliejue_equip', [card]);
                            player.addAdditionalSkill(
                                'qx_reliejue_equip',
                                player
                                    .getStorage('qx_reliejue_equip')
                                    .map((name) => lib.card[name[2]]?.skills ?? [])
                                    .flat()
                            );
                        }
                        if (subtypes.includes('equip1')) {
                            const sha = new lib.element.VCard({ name: 'sha', storage: { qx_reliejue: true } });
                            if (player.hasUseTarget(sha)) {
                                player.addTempSkill('qx_reliejue_effect');
                                await player.chooseUseTarget(sha, true, false);
                            }
                        }
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            return player.getExpansions('qx_qingjiang').some((card) => {
                                const subtypes = get.subtypes(card);
                                return subtypes.includes('equip1') && player.hasValueTarget({ name: 'sha' }, false);
                            })
                                ? 1
                                : 0;
                        },
                    },
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        trigger: { global: 'damageSource' },
                        filter(event, player) {
                            if (!event.card?.storage?.qx_reliejue) return false;
                            return event.getParent(4).name === 'qx_reliejue' && event.getParent(4).player === player;
                        },
                        forced: true,
                        content() {
                            player.addTempSkill('qx_reliejue_count');
                            player.addMark('qx_reliejue_count', 1, false);
                            game.log(player, '发动', '#g【烈绝】', '的次数', '#y+1');
                        },
                    },
                    count: {
                        charlotte: true,
                    },
                    equip: {
                        charlotte: true,
                        mod: {
                            globalFrom(from, to, distance) {
                                return distance + from.getStorage('qx_reliejue_equip').reduce((sum, name) => sum + (lib.card[name[2]]?.distance?.globalFrom || 0), 0);
                            },
                            globalTo(from, to, distance) {
                                return distance + to.getStorage('qx_reliejue_equip').reduce((sum, name) => sum + (lib.card[name[2]]?.distance?.globalTo || 0), 0);
                            },
                            attackRange(from, distance) {
                                return distance - from.getStorage('qx_reliejue_equip').reduce((sum, name) => sum + (lib.card[name[2]]?.distance?.attackFrom || 0), 0);
                            },
                            attackTo(from, to, distance) {
                                return distance + to.getStorage('qx_reliejue_equip').reduce((sum, name) => sum + (lib.card[name[2]]?.distance?.attackTo || 0), 0);
                            },
                        },
                        onremove(player, skill) {
                            delete player.storage[skill];
                            player.removeAdditionalSkill(skill);
                        },
                        intro: {
                            mark(dialog, storage = []) {
                                if (!storage.length) return '当前未视为装备任意牌';
                                dialog.addText('当前视为装备');
                                dialog.addSmall(storage);
                            },
                        },
                    },
                },
            },
            qx_shentao: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                forced: true,
                async content(event, trigger, player) {
                    let cards = [];
                    while (true) {
                        const cardx = await player.judge((card) => (get.type(card) === 'equip' ? -1 : 1)).forResult('card');
                        if (!cardx || get.type(cardx) === 'equip') break;
                        const card = (() => {
                            return player.hasUseTarget(cardx) ? cardx : new lib.element.VCard({ name: 'sha', storage: { qx_shentao: true } });
                        })();
                        if (player.hasUseTarget(card)) {
                            await player.chooseUseTarget(card, null, false).set('oncard', () => {
                                const event = get.event();
                                if (event?.card?.storage?.qx_shentao) {
                                    event.directHit.addArray(game.players);
                                    game.log(event.card, '不可被响应');
                                }
                            });
                        }
                        if (cards.length && !cards.some((cardxx) => get.cardNameLength(cardxx) === get.cardNameLength(cardx))) break;
                        cards.push(cardx);
                        const result = await player.chooseBool('是否继续进行判定？').set('frequentSkill', event.name).forResult();
                        if (!result?.bool) break;
                    }
                },
                ai: {
                    order: 10,
                    result: { player: 1 },
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        return arg?.card?.storage?.qx_shentao;
                    },
                },
            },
            qx_linghou: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countDiscardableCards(player, 'he') && game.hasPlayer((target) => target !== player);
                },
                filterCard: lib.filter.cardDiscardable,
                filterTarget: lib.filter.notMe,
                selectTarget: [1, 2],
                usable: 1,
                async content(event, trigger, player) {
                    const target = event.target,
                        str = get.translation(player);
                    let choices = [],
                        result;
                    if (target.countCards('h')) choices.push('交出手牌');
                    let suits = target
                        .getCards('he')
                        .map((card) => card.suit)
                        .filter((suit) => target.canUse({ name: 'sha' }, player, false));
                    if (suits.length) {
                        suits.sort((a, b) => lib.suit.indexOf(a) - lib.suit.indexOf(b));
                        choices.addArray(suits);
                    }
                    if (!choices.length) return;
                    if (choices.length === 1) result = { control: choices[0] };
                    else
                        result = await target
                            .chooseControl(choices)
                            .set(
                                'prompt',
                                (() => {
                                    let list = [];
                                    if (choices.includes('交出手牌')) list.push('交给' + str + '一张手牌');
                                    if (!choices.includes('交出手牌') || choices.length > 1) list.push('将一种花色的所有牌当作【杀】对' + str + '使用');
                                    return list.join(',或');
                                })()
                            )
                            .set('ai', () => {
                                let controls = get.event().controls.slice();
                                const {
                                    player,
                                    target,
                                    cards: [discard],
                                } = get.event().parent;
                                let map = controls.reduce((map, control) => {
                                    if (control === '交出手牌') {
                                        map[control] = Math.min(...target.getCards('h').map((card) => get.value(card) - (get.type2(card) === get.type2(discard, player) ? get.effect(target, { name: 'shunshou_copy2' }, player, target) : 0)));
                                    } else {
                                        const cards = target.getCards('he', { suit: control });
                                        map[control] = get.effect(player, { name: 'sha' }, target, player) - cards.reduce((sum, card) => sum + get.value(card), 0);
                                    }
                                    return map;
                                }, {});
                                return controls.sort((a, b) => map[b] - map[a])[0];
                            })
                            .forResult();
                    if (result.control === '交出手牌') {
                        const result2 = await target.chooseToGive(player, 'h', true).forResult();
                        if (result2?.bool && result2.cards?.length && get.type2(event.cards[0], player) === get.type2(result2.cards[0], target)) {
                            await player.gainPlayerCard(target, 'he', true);
                        }
                    } else {
                        const card = { name: 'sha' };
                        if (target.canUse(card, player, false)) await target.useCard(card, player, false);
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            return Math.max(
                                get.effect(target, { name: 'shunshou_copy', position: 'h' }, player, player),
                                ...(() => {
                                    if (get.effect(target, { name: 'guohe_copy', position: 'h' }, player, player) <= 0) return [];
                                    let suits = target
                                        .getCards('he')
                                        .map((card) => card.suit)
                                        .filter((suit) => target.canUse({ name: 'sha' }, player, false));
                                    if (!suits.length) return [];
                                    return suits.map((suit) => {
                                        const cards = target.getCards('he', { suit: suit });
                                        return cards.reduce((sum, card) => sum + get.value(card), 0) - get.effect(player, { name: 'sha' }, target, player);
                                    });
                                })()
                            );
                        },
                    },
                },
            },
            qx_fuyi: {
                mark: true,
                marktext: '☯',
                intro: {
                    content(storage) {
                        return (
                            '锁定技,转换技,当你受到伤害后,' +
                            (() => {
                                if (storage) return '你视为对至多两名角色各使用一张不计入次数的【杀】';
                                return '你令至多两名角色各摸一张牌';
                            })()
                        );
                    },
                },
                zhuanhuanji: true,
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    if (player.storage.qx_fuyi) return player.hasUseTarget({ name: 'sha' });
                    return true;
                },//QQQ
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(
                            '请选择【' + get.translation(event.skill) + '】的目标',
                            (card, player, target) => {
                                return !player.storage.qx_fuyi ? target.countCards('he') : player.hasUseTarget({ name: 'sha' });
                            },
                            get.info(event.skill).intro.content(player.storage[event.skill]),
                            [1, 2],
                            true
                        )
                        .set('ai', (target) => {
                            const player = get.player();
                            return get.effect(target, new lib.element.VCard({ name: player.storage.qx_fuyi ? 'sha' : 'guohe_copy2' }), player, player);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    player.changeZhuanhuanji(event.name);
                    if (player.storage[event.name]) {
                        for (const target of event.targets.sortBySeat()) await target.chooseToDiscard('he', true);
                    } else {
                        for (const target of event.targets.sortBySeat()) {
                            const sha = new lib.element.VCard({ name: 'sha' });
                            if (player.canUse(sha, target, false)) await player.useCard(sha, target, false).set('animate', false);
                        }
                    }
                },
            },
            qx_xionglve: {
                audio: 'ext:群星荟萃/audio/skill:2',
                global: 'qx_xionglve_global',
                zhuSkill: true,
                subSkill: {
                    global: {
                        audio: 'qx_xionglve',
                        forceaudio: true,
                        enable: 'phaseUse',
                        filter(event, player) {
                            if (player.group !== 'wei' || !player.hasCard((card) => get.info('qx_xionglve_global').filterCard(card, player), 'he')) return false;
                            return game.hasPlayer((target) => get.info('qx_xionglve_global').filterTarget(null, player, target));
                        },
                        filterTarget(card, player, target) {
                            return target !== player && target.hasZhuSkill('qx_xionglve', player);
                        },
                        filterCard(card, player) {
                            return get.type2(card) !== 'equip';
                        },
                        lose: false,
                        discard: false,
                        delay: false,
                        usable: 1,
                        prompt: () => lib.translate.qx_xionglve_info,
                        async content(event, trigger, player) {
                            const { cards, target } = event;
                            await player.give(cards, target);
                            player.addTempSkill('qx_xionglve_effect');
                            target.addTempSkill('qx_xionglve_draw');
                            player.storage.qx_xionglve_effect[0]++;
                            player.storage.qx_xionglve_effect[1].push(target);
                            player.markSkill('qx_xionglve_effect');
                        },
                        ai: {
                            order: 7,
                            result: { target: 1 },
                        },
                    },
                    effect: {
                        charlotte: true,
                        init(player, skill) {
                            player.storage[skill] ??= [0, []];
                        },
                        intro: {
                            markcount: (storage) => storage?.[0] ?? 0,
                            content(storage = [0, ['空气']]) {
                                return ['使用【杀】的次数上限' + storage[0], '使用【杀】造成伤害后,' + get.translation(storage[1]) + '与你各摸一张牌'].map((str) => '<li>' + str).join('<br>');
                            },
                        },
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name === 'sha') return num + player.storage.qx_xionglve_effect?.[0] ?? 0;
                            },
                        },
                    },
                    draw: {
                        charlotte: true,
                        audio: 'qx_xionglve',
                        trigger: { global: 'damageSource' },
                        filter(event, player) {
                            return event.card?.name === 'sha' && event.source?.isIn() && (event.source.storage.qx_xionglve_effect?.[1] ?? []).includes(player);
                        },
                        forced: true,
                        logTarget: 'source',
                        content() {
                            game.asyncDraw([player, trigger.source]);
                        },
                    },
                },
            },
            qx_wentao: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: ['phaseZhunbeiBegin', 'damageEnd'] },
                filter(event, player) {
                    return get.info('qx_wentao').getList.some((item) => {
                        return game.hasPlayer((target) => item.backup.filterTarget(null, player, target));
                    });
                },
                async cost(event, trigger, player) {
                    const result = await player
                        .chooseButton([get.prompt(event.skill), [get.info('qx_wentao').getList.map((item) => [item, item.prompt]), 'textbutton']])
                        .set('filterButton', (button) => {
                            const player = get.player(),
                                item = button.link;
                            return game.hasPlayer((target) => item.backup.filterTarget(null, player, target));
                        })
                        .set('ai', (button) => {
                            return get.info('qx_wentao').chooseButton.check(button);
                        })
                        .forResult();
                    if (!(result?.bool && result.links?.length)) {
                        event.result = { bool: false };
                        return;
                    }
                    const choice = result.links[0],
                        item = choice.backup;
                    event.result = await player
                        .chooseTarget(choice.prompt, item.filterTarget, true, [1, player.getHp()])
                        .set('ai', (target) => {
                            const { player, item } = get.event();
                            return item.ai.result.player(player, target);
                        })
                        .set('item', item)
                        .forResult();
                    event.result.cost_data = item;
                },
                async content(event, trigger, player) {
                    await event.cost_data.content(event, trigger, player);
                },
                chooseButton: {
                    dialog(event, player) {
                        const dialog = ui.create.dialog('文韬:弃置任意张手牌…', 'hidden');
                        dialog.add([get.info('qx_wentao').getList.map((item) => [item, item.prompt]), 'textbutton']);
                        return dialog;
                    },
                    filter(button, player) {
                        const item = button.link;
                        return game.hasPlayer((target) => item.backup.filterTarget(null, player, target));
                    },
                    check(button) {
                        const player = get.player(),
                            item = button.link;
                        const chuqibuyi = new lib.element.VCard({ name: 'chuqibuyi' });
                        if (item.name === 'chuqibuyi') return player.hasValueTarget(chuqibuyi, false) ? 10 : 0;
                        return item.name === 'recast' ? 2 : 1;
                    },
                    prompt(links) {
                        return '###文韬###弃置任意张手牌,' + links[0].prompt;
                    },
                    backup(links) {
                        const item = links[0];
                        return {
                            item: item,
                            audio: 'qx_wentao',
                            filterCard: lib.filter.cardDiscardable,
                            selectCard: [1, Infinity],
                            ai1(card) {
                                return 7 - get.value(card);
                            },
                            complexSelect: true,
                            selectTarget: () => ui.selected.cards.length,
                            ...item.backup,
                        };
                    },
                },
                ai: {
                    order: 8,
                    result: { player: 1 },
                },
                subSkill: {
                    backup: {},
                    used: {
                        charlotte: true,
                    },
                },
                getList: [
                    {
                        name: 'debate',
                        prompt: '与至多体力值名角色议事,若议事情结果为:红色,你与意见为红色的角色各摸一张牌;黑色,意见为红色的角色本回合非锁定技失效',
                        backup: {
                            filterTarget(card, player, target) {
                                return target !== player && target.countCards('h');
                            },
                            filterOk() {
                                return get.player().hasCard((card) => !ui.selected.cards.includes(card), 'h');
                            },
                            multiline: true,
                            multitarget: true,
                            async content(event, trigger, player) {
                                await player
                                    .chooseToDebate(
                                        game.filterPlayer((target) => {
                                            return [player, ...event.targets].includes(target);
                                        })
                                    )
                                    .set('callback', async (event) => {
                                        const result = event.debateResult,
                                            targets = (result.red?.map((i) => i[0]) ?? []).sortBySeat();
                                        if (result.bool && ['red', 'black'].includes(result.opinion) && targets.length) {
                                            player.line(targets);
                                            if (result.opinion === 'red') {
                                                await game.asyncDraw([player].concat(targets).sortBySeat());
                                            } else {
                                                for (const target of targets) target.addTempSkill('fengyin');
                                            }
                                        }
                                    });
                            },
                            ai: {
                                result: {
                                    player(player, target) {
                                        return Math.sign(get.attitude(player, target));
                                    },
                                },
                            },
                        },
                    },
                    {
                        name: 'recast',
                        prompt: '令至多体力值名角色依次重铸一张手牌,然后你获得其中的黑色牌',
                        backup: {
                            filterTarget(card, player, target) {
                                return target.countCards('h');
                            },
                            multiline: true,
                            multitarget: true,
                            async content(event, trigger, player) {
                                let cards = [];
                                for (const target of event.targets.sortBySeat()) {
                                    const result = await target
                                        .chooseCard(
                                            get.translation(event.name) + ':请重铸一张手牌',
                                            (card, player) => {
                                                return player.canRecast(card);
                                            },
                                            true
                                        )
                                        .set('ai', get.info('zhiheng').check)
                                        .forResult();
                                    if (result?.bool && result.cards?.length) {
                                        await target.recast(result.cards);
                                        cards.addArray(result.cards);
                                    }
                                }
                                cards = cards.filterInD('od').filter((card) => get.color(card) === 'black');
                                if (cards.length) await player.gain(cards, 'gain2');
                            },
                            ai: {
                                result: {
                                    player(player, target) {
                                        const att = Math.sign(get.attitude(player, target));
                                        if (att <= 0 && target.hasCard((card) => target.canRecast(card) && get.color(card) !== 'black', 'h')) return 0;
                                        return 2 + att;
                                    },
                                },//QQQ
                            },
                        },
                    },
                ],
            },
            qx_dianlun: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    if (event.name === 'chooseToUse' && player.hasSkill('qx_dianlun_used')) return false;
                    return get.info('qx_dianlun').getList.some((item) => item.filter(player));
                },
                async cost(event, trigger, player) {
                    const result = (event.result = await player
                        .chooseButton([get.prompt(event.skill), [get.info('qx_dianlun').getList.map((item) => [item, item.prompt]), 'textbutton']])
                        .set('filterButton', (button) => {
                            return get.info('qx_dianlun').chooseButton.filter(button, get.player());
                        })
                        .set('ai', (button) => {
                            return get.info('qx_dianlun').chooseButton.check(button);
                        })
                        .forResult());
                    if (result?.bool && result.links?.length) event.result.cost_data = result.links[0];
                },
                async content(event, trigger, player) {
                    await event.cost_data.backup.content(event, trigger, player);
                },
                chooseButton: {
                    dialog(event, player) {
                        const dialog = ui.create.dialog('典论:请选择一项', 'hidden');
                        dialog.add([get.info('qx_dianlun').getList.map((item) => [item, item.prompt]), 'textbutton']);
                        return dialog;
                    },
                    filter(button, player) {
                        const item = button.link;
                        return item.filter(player);
                    },
                    check(button) {
                        const item = button.link;
                        return item.name === 'skill' ? 2 : 1;
                    },
                    prompt(links) {
                        return '###典论###' + links[0].prompt;
                    },
                    backup(links) {
                        const item = links[0];
                        return {
                            item: item,
                            audio: 'qx_dianlun',
                            ...item.backup,
                        };
                    },
                },
                ai: {
                    order: 8,
                    result: { player: 1 },
                },
                subSkill: {
                    backup: {},
                    used: { charlotte: true },
                    count: {
                        charlotte: true,
                        onremove(player, skill) {
                            delete player.storage[skill];
                            player.removeGaintag(skill);
                        },
                    },
                },
                intro: {
                    onunmark(storage = []) {
                        _status.characterlist.addArray(storage);
                        storage = [];
                    },
                    mark(dialog, content = []) {
                        if (content.length) dialog.addSmall([content, 'character']);
                        return '暂未拥有候选武将牌';
                    },
                },
                getList: [
                    {
                        name: 'show',
                        prompt: '展示一张手牌,获得一张含此牌牌名或花色的武将牌',
                        filter: (player) => player.hasCard((card) => !card.hasGaintag('qx_dianlun_count'), 'h'),
                        backup: {
                            filterCard: (card) => !card.hasGaintag('qx_dianlun_count'),
                            check: () => 1 + Math.random(),
                            lose: false,
                            discard: false,
                            delay: false,
                            async content(event, trigger, player) {
                                const item = event.cost_data || get.info(event.name).item;
                                player.storage.qx_dianlun_last = item.name;
                                if (event.getParent(2).name === 'chooseToUse') player.addTempSkill('qx_dianlun_used', 'phaseUseAfter');
                                const cards = event.cards || (await player.chooseCard('###典论###' + item.prompt, true).forResult('cards'));
                                player.addTempSkill('qx_dianlun_count');
                                player.addGaintag('qx_dianlun_count', cards);
                                await player.showCards(cards, get.translation(player) + '发动了【' + get.translation(event.name) + '】');
                                const card = cards[0],
                                    { name: cardname, suit } = card;
                                if (!_status.characterlist) get.info('pingjian').initList();
                                const names = _status.characterlist.filter((name) => {
                                    const skills = get.character(name).skills;
                                    return skills?.some((skill) => {
                                        const info = get.info(skill);
                                        if (!info || info.charlotte) return false;
                                        return [cardname, suit].some((item) => {
                                            if (!item || !lib.translate[item]) return false;
                                            let list = [item];
                                            if (lib.suits.includes(item)) list.push(item + '2');
                                            return list.some((itm) => get.plainText(lib.translate[skill + '_info'] || '').includes(get.plainText(lib.translate[itm])));
                                        });
                                    });
                                });
                                if (names.length) {
                                    const gains = names.randomGets(1);
                                    _status.characterlist.removeArray(gains);
                                    game.broadcastAll(
                                        (player, list) => {
                                            player.$draw(
                                                list.map((name) => {
                                                    const cardname = 'huashen_card_' + name;
                                                    if (!lib.card[cardname]) {
                                                        lib.card[cardname] = {
                                                            fullimage: true,
                                                            image: 'character:' + name,
                                                        };
                                                        lib.translate[cardname] = get.rawName2(name);
                                                    }
                                                    return game.createCard(cardname, '', '');
                                                }),
                                                'nobroadcast'
                                            );
                                        },
                                        player,
                                        gains
                                    );
                                    player.markAuto('qx_dianlun', gains);
                                }
                            },
                        },
                    },
                    {
                        name: 'character',
                        prompt: '使用一张<典论>替换一名角色的一张武将牌',
                        filter: (player) => player.getStorage('qx_dianlun') > 0 && game.hasPlayer((target) => !player.getStorage('qx_dianlun_count').includes(target)),
                        backup: {
                            filterTarget(card, player, target) {
                                return !player.getStorage('qx_dianlun_count').includes(target);
                            },
                            async content(event, trigger, player) {
                                const item = event.cost_data || get.info(event.name).item;
                                player.storage.qx_dianlun_last = item.name;
                                if (event.getParent(2).name === 'chooseToUse') player.addTempSkill('qx_dianlun_used', 'phaseUseAfter');
                                const target =
                                    event.target ||
                                    (await player
                                        .chooseTarget('###典论###' + item.prompt, item.backup.filterTarget, true)
                                        .set('ai', (target) => {
                                            const { player, item } = get.event();
                                            return item.backup.ai.result.player(player, target);
                                        })
                                        .set('item', item)
                                        .forResult('targets')[0]);
                                player.addTempSkill('qx_dianlun_count');
                                player.markAuto('qx_dianlun_count', [target]);
                                if (event.getParent(2).name !== 'chooseToUse') player.line(target);
                                const names = player.getStorage('qx_dianlun'),
                                    characterNames = get.nameList(target);
                                const result =
                                    names.length > 1 || characterNames.length > 1
                                        ? await player
                                            .chooseButton(['请选择一张<典论>替换其一张武将牌', [names, 'character'], [characterNames.map((name) => [name, get.translation(name)]), 'tdnodes']], 2, true)
                                            .set('ai', (button) => {
                                                const player = get.player();
                                                if (ui.selected.buttons.length) {
                                                    if (player.getStorage('qx_dianlun').includes(button.link) === player.getStorage('qx_dianlun').includes(ui.selected.buttons[0].link)) return false;
                                                }
                                                return true;
                                            })
                                            .forResult()
                                        : { bool: true, links: [names[0], characterNames[0]] };
                                if (result?.bool && result.links?.length) {
                                    let choices = result.links;
                                    if (!names.includes(choices[1])) choices.reverse();
                                    player.unmarkAuto('qx_dianlun', [choices[1]]);
                                    await target.reinitCharacter(...choices);
                                }
                            },
                            ai: {
                                result: {
                                    player(player, target) {
                                        const names = get.nameList(target),
                                            att = Math.sign(get.attitude(player, target));
                                        if (att === 0) return 0;
                                        let list = player.getStorage('qx_dianlun').reduce((list, name) => {
                                            const num = get.rank(name, true);
                                            for (const name2 of names) list.add(num - get.rank(name2));
                                            return list;
                                        }, []);
                                        list.sort((a, b) => b - a);
                                        return Math.max(att * list[0], att * list[list.length - 1]);
                                    },
                                },
                            },
                        },
                    },
                    {
                        name: 'skill',
                        prompt: '弃置两张<典论>,拼接这两张武将牌上的各一个技能',
                        filter: (player) =>
                            player
                                .getStorage('qx_dianlun')
                                .reduce((list, name) => {
                                    return list.addArray(get.character(name).skills ?? []);
                                }, [])
                                .filter((skill) => !get.skillCategoriesOf(skill, player).includes('觉醒技', '限定技', '使命技')).length > 1,
                        backup: {
                            async content(event, trigger, player) {
                                const item = event.cost_data || get.info(event.name).item;
                                player.storage.qx_dianlun_last = item.name;
                                if (event.getParent(2).name === 'chooseToUse') player.addTempSkill('qx_dianlun_used', 'phaseUseAfter');
                                const remove = await player
                                    .chooseButton(['###典论###' + item.prompt, [player.getStorage('qx_dianlun'), 'character']], 2, true)
                                    .set('filterButton', (button) => {
                                        const player = get.player(),
                                            skills = get.character(button.link).skills ?? [];
                                        if (!skills.some((skill) => !get.skillCategoriesOf(skill, player).includes('觉醒技', '限定技', '使命技'))) return false;
                                        if (ui.selected.buttons.length) {
                                            return (
                                                ui.selected.buttons
                                                    .reduce(
                                                        (list, but) => {
                                                            return list.addArray(get.character(but.link).skills ?? []);
                                                        },
                                                        [...skills]
                                                    )
                                                    .filter((skill) => {
                                                        return !get.skillCategoriesOf(skill, player).includes('觉醒技', '限定技', '使命技');
                                                    }).length > 1
                                            );
                                        }
                                        return get
                                            .player()
                                            .getStorage('qx_dianlun')
                                            .some((name) => {
                                                return (
                                                    name !== button.link &&
                                                    [...skills, ...(get.character(name).skills ?? [])]
                                                        .filter((skill) => {
                                                            return !get.skillCategoriesOf(skill, player).includes('觉醒技', '限定技', '使命技');
                                                        })
                                                        .unique().length > 1
                                                );
                                            });
                                    })
                                    .set('ai', (button) => {
                                        return get.rank(button.link, true);
                                    })
                                    .forResult();
                                if (remove?.bool && remove.links?.length) {
                                    player.unmarkAuto('qx_dianlun', remove.links);
                                    const [from, to] = remove.links;
                                    let result;
                                    const fromSkills = get.character(from).skills,
                                        toSkills = get.character(to).skills;
                                    if (fromSkills.slice().concat(toSkills).length === 2) result = { bool: true, links: fromSkills.slice().concat(toSkills) };
                                    else
                                        result = await player
                                            .chooseButton(['请选择需要结合的两个技能', [fromSkills.map((skill) => [skill, get.translation(skill) || '']), 'tdnodes'], [toSkills.map((skill) => [skill, get.translation(skill) || '']), 'tdnodes']], 2, true)
                                            .set('filterButton', (button) => {
                                                return !ui.selected.buttons.length || button.link !== ui.selected.buttons[0].link;
                                            })
                                            .forResult();
                                    if (result?.bool && result.links?.length) {
                                        const skill = 'qx_dianlun_' + result.links[0] + result.links[1];
                                        if (!lib.skill[skill]) {
                                            game.broadcastAll(
                                                (skill, skills) => {
                                                    const [from, to] = skills;
                                                    const info1 = get.info(from) || {};
                                                    const info2 = get.info(to) || {};
                                                    lib.skill[skill] = {
                                                        nobracket: true,
                                                        global: [...(info1.global ?? []), ...(info2.global ?? [])].unique(),
                                                        group: [from, to, ...(info1.group ?? []), ...(info2.group ?? [])],
                                                        combinedSkills: skills,
                                                        categories(skill, player) {
                                                            return get.info(skill).combinedSkills.reduce((list, item) => {
                                                                return list.addArray(get.skillCategoriesOf(item, player));
                                                            }, []);
                                                        },
                                                    };
                                                    lib.translate[skill] = skills.map((item) => get.translation(item) || '').join('');
                                                    lib.translate[skill + '_info'] = skills.map((item) => '<li>' + (get.translation(item + '_info') || '')).join('<br>');
                                                    lib.dynamicTranslate[skill] = (player, skill) => {
                                                        const skills = get.info(skill).combinedSkills;
                                                        return skills.map((item) => '<li>' + get.skillInfoTranslation(item, player)).join('<br>');
                                                    };
                                                },
                                                skill,
                                                result.links
                                            );
                                        }
                                        await player.addAdditionalSkills('qx_dianlun', skill, true);
                                        const skills = player.additionalSkills?.qx_dianlun ?? [];
                                        if (skills.length > 3) {
                                            const links = await player
                                                .chooseButton(
                                                    [
                                                        '典论:请选择失去' + get.cnNumber(skills.length - 2) + '个溢出的技能',
                                                        [
                                                            skills.map((skill) => {
                                                                return [skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>'];
                                                            }),
                                                            'textbutton',
                                                        ],
                                                    ],
                                                    true,
                                                    skills.length - 3
                                                )
                                                .set('ai', (button) => -get.skillRank(button.link))
                                                .forResult('links');
                                            if (links?.length) {
                                                await player.changeSkills([], links).set('$handle', (player, addSkills, removeSkills) => {
                                                    for (const skill of removeSkills) player.popup(skill);
                                                    game.log(player, '失去了技能', ...removeSkills.map((i) => '#g【' + get.translation(i) + '】'));
                                                    player.removeSkill(removeSkills);
                                                    if (Array.isArray(player.additionalSkills?.qx_dianlun)) {
                                                        player.additionalSkills.qx_dianlun.removeArray(removeSkills);
                                                        if (!player.additionalSkills.qx_dianlun.length) delete player.additionalSkills.qx_dianlun;
                                                    }
                                                });
                                            }
                                        }
                                    }
                                }
                            },
                            ai: {
                                result: {
                                    player(player, target) {
                                        const names = get.nameList(target),
                                            att = Math.sign(get.attitude(player, target));
                                        if (att === 0) return 0;
                                        let list = player.getStorage('qx_dianlun').reduce((list, name) => {
                                            const num = get.rank(name, true);
                                            for (const name2 of names) list.add(num - get.rank(name2));
                                            return list;
                                        }, []);
                                        list.sort((a, b) => b - a);
                                        return Math.max(att * list[0], att * list[list.length - 1]);
                                    },
                                },
                            },
                        },
                    },
                ],
            },
            qx_guxing: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'dying' },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseButton([
                            get.prompt2(event.skill),
                            [[['qx_guxing_recover', '将体力值回复至体力上限,然后进入隐匿状态']], 'textbutton'],
                            ...(() => {
                                const characters = player.getStorage('qx_dianlun');
                                if (!characters.length) return ['<div class="text center" style="opacity:0.5;">暂无<典论></div>'];
                                return ['<div class="text center">选择一张<典论>替换武将牌</div>', [characters, 'character']];
                            })(),
                        ])
                        .set('ai', (button) => {
                            return button.link === 'qx_guxing_recover'
                                ? 100
                                : get.rank(button.link, true) -
                                get
                                    .nameList(player)
                                    .filter((name) => {
                                        return get.character(name).skills?.includes('qx_guxing');
                                    })
                                    .reduce((sum, name) => sum + get.rank(name, true), 0);
                        })
                        .forResult();
                    if (event.result?.bool && event.result.links?.length) event.result.cost_data = event.result.links[0];
                },
                limited: true,
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    if (event.cost_data === 'qx_guxing_recover') {
                        await player.recoverTo(player.maxHp);
                        player.storage.rawHp = player.hp;
                        player.storage.rawMaxHp = player.maxHp;
                        if (player.skills.length) {
                            if (!player.hiddenSkills) {
                                player.hiddenSkills = [];
                            }
                            for (const i of player.skills.slice()) {
                                player.removeSkill(i);
                                player.hiddenSkills.add(i);
                            }
                        }
                        player.classList.add('unseen');
                        player.name = 'unknown';
                        player.sex = 'male';
                        player.storage.nohp = true;
                        player.node.hp.hide();
                        player.addSkill('g_hidden_ai');
                        player.hp = 1;
                        player.maxHp = 1;
                        player.update();
                    } else {
                        player.removeSkill('qx_dianlun_effect');
                        const names = get.nameList(player).filter((name) => get.character(name).skills?.includes('qx_guxing'));
                        if (names.length) {
                            for (const name of names) await player.reinitCharacter(name, event.cost_data);
                        }
                        await player.recoverTo(player.maxHp);
                    }
                },
            },
            qx_huairen: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: ['phaseZhunbeiBegin', 'damageEnd'] },
                forced: true,
                async content(event, trigger, player) {
                    const card = get.cardPile((card) => ['shan', 'tao', 'jiu'].includes(card.name));
                    if (card) {
                        player.addMark(event.name, 1, false);
                        await player.gain(card, 'gain2');
                    }
                    if (player.countMark(event.name) >= 3) {
                        player.clearMark(event.name, false);
                        const vcards = get.inpileVCardList((info) => get.type(info[2]) === 'trick');
                        if (vcards.some((info) => player.hasUseTarget({ name: info[2] }))) {
                            const result = await player
                                .chooseButtonTarget({
                                    createDialog: ['是否视为对一名角色使用一张锦囊牌？', [vcards, 'vcard']],
                                    filterButton(button) {
                                        const player = get.player();
                                        return player.hasUseTarget({ name: button.link[2] });
                                    },
                                    filterTarget(card, player, target) {
                                        if (!ui.selected.buttons.length) return false;
                                        return player.canUse({ name: ui.selected.buttons[0].link[2] }, target);
                                    },
                                    ai1(button) {
                                        const player = get.player(),
                                            card = new lib.element.VCard({ name: button.link[2] });
                                        return Math.max(
                                            ...game
                                                .filterPlayer((target) => {
                                                    return player.canUse(card, target);
                                                })
                                                .map((target) => get.effect(target, card, player, player))
                                        );
                                    },
                                    ai2(target) {
                                        const player = get.player(),
                                            card = new lib.element.VCard({ name: ui.selected.buttons[0].link[2] });
                                        return get.effect(target, card, player, player);
                                    },
                                })
                                .forResult();
                            if (result?.bool && result.links?.length && result.targets?.length) {
                                const player = get.player(),
                                    card = new lib.element.VCard({ name: result.links[0][2] });
                                await player.useCard(card, result.targets.sortBySeat(), false);
                            }
                        }
                    }
                },
                intro: { content: '当前因此获得#张牌' },
            },
            qx_congying: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseEnd' },
                filter(event, player) {
                    return player.getExpansions('qx_congying').length;
                },
                prompt2: () => '将所有<象>置入弃牌堆并亮出牌堆顶等量张牌,然后你依次使用其中的非基本牌',
                async content(event, trigger, player) {
                    let cards = player.getExpansions(event.name);
                    await player.loseToDiscardpile(cards);
                    cards = await game.cardsGotoOrdering(get.cards(cards.length)).forResult('cards');
                    if (cards.length) {
                        await player.showCards(cards, get.translation(player) + '发动了【' + get.translation(event.name) + '】');
                        while (cards.some((card) => get.type(card) !== 'basic' && player.hasUseTarget(card))) {
                            const result = await player
                                .chooseButton([get.translation(event.name) + ':请选择一张非基本牌使用', cards], true)
                                .set('filterButton', (button) => {
                                    if (get.type(button.link) === 'basic') return false;
                                    return get.player().hasUseTarget(button.link);
                                })
                                .set('ai', (button) => {
                                    return get.player().getUseValue(button.link);
                                })
                                .forResult();
                            if (result?.bool && result.links?.length) {
                                const card = result.links[0];
                                cards.remove(card);
                                player.$gain2(card, false);
                                await player.chooseUseTarget(card, true, false);
                            }
                        }
                    }
                },
                group: ['qx_congying_show', 'qx_congying_put'],
                subfrequeut: ['put'],
                marktext: '象',
                intro: {
                    markcount(num, player) {
                        return (typeof num === 'number' ? num : '无') + '/' + player.getExpansions('qx_congying').length;
                    },
                    mark(dialog, num, player) {
                        if (typeof num === 'number') dialog.addText('当前记录点数为' + num);
                        const cards = player.getExpansions('qx_congying');
                        if (cards.length) dialog.addSmall(cards);
                    },
                },
                onremove(player, skill) {
                    delete player.storage[skill];
                    const cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                subSkill: {
                    show: {
                        audio: 'qx_congying',
                        trigger: { global: 'roundStart' },
                        prompt(event, player) {
                            const num = player.storage.qx_congying;
                            return get.prompt('qx_congying') + (typeof num === 'number' ? '(当前点数:' + num + ')' : '');
                        },
                        check(event, player) {
                            const num = player.storage.qx_congying;
                            if (typeof num !== 'number') return true;
                            if (!ui.cardPile.childElementCount) return num <= 6;
                            return num < get.number(get.cards(1, true)[0], false);
                        },
                        prompt2: () => '展示牌堆顶的一张牌并记录此牌点数',
                        async content(event, trigger, player) {
                            const cards = get.cards(1, true);
                            await player.showCards(cards, get.translation(player) + '发动了【' + get.translation(event.name) + '】');
                            player.storage.qx_congying = cards[0].number;
                            player.markSkill('qx_congying');
                        },
                    },
                    put: {
                        audio: 'qx_congying',
                        trigger: { player: 'useCardAfter' },
                        filter(event, player) {
                            if (!event.cards?.someInD('ode')) return false;
                            const num = player.storage.qx_congying;
                            if (typeof num !== 'number' || typeof event.card.number !== 'number') return false;
                            return event.card && event.card.number <= num;
                        },
                        frequent: (event) => !event.cards.someInD('e'),
                        check(event, player) {
                            if (!event.cards.someInD('e')) return true;
                            if (get.type(event.card) === 'equip') {
                                if (get.subtype(event.card) === 'equip6') return true;
                                if (get.equipResult(player, player, event.card) <= 0) return true;
                                const eff1 = player.getUseValue(event.card);
                                const subtype = get.subtype(event.card);
                                return player.hasCard((card) => get.subtype(card) === subtype && player.getUseValue(card) >= eff1, 'hs');
                            }
                            return true;
                        },
                        prompt2: (event) => '将' + get.translation(event.cards.filterInD('ode')) + '置于武将牌上',
                        async content(event, trigger, player) {
                            const next = player.addToExpansion(trigger.cards.filterInD('ode'), 'gain2');
                            next.gaintag.add('qx_congying');
                            await next;
                        },
                    },
                },
            },
            qx_juao: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    player: 'damageEnd',
                    source: 'damageSource',
                },
                filter(event, player, name) {
                    if (name === 'damageSource') return true;
                    if (!event.source?.isIn() || event.source === player) return false;
                    return event.num > 1 && event.source.countCards('h');
                },
                forced: true,
                logTarget: 'source',
                async content(event, trigger, player) {
                    if (event.triggername === 'damageSource') await player.draw();
                    else {
                        await trigger.source.chooseToDiscard('he', true);
                        player.addTempSkill('qx_juao_effect');
                        player.addMark('qx_juao_effect', 1, false);
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        intro: { content: '使用牌的基础数值+#' },
                        trigger: { player: 'useCard' },
                        forced: true,
                        popup: false,
                        content() {
                            const num = player.countMark(event.name);
                            trigger.baseDamage += num;
                            game.log(trigger.card, '的基础数值+', num);
                        },
                    },
                },
            },
            qx_juezhang: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'eventNeutralized' },
                filter(event, player) {
                    if (event.type !== 'card') return false;
                    if (
                        !player.hasCard((card) => {
                            if (get.position(card) === 'h' && _status.connectMode) return true;
                            return get.type2(card) === 'trick' && lib.filter.cardDiscardable(card, player);
                        }, 'he')
                    )
                        return false;
                    const evt = event._neutralize_event;
                    if (evt.type !== 'card') return false;
                    const user = event.player,
                        responder = evt.player;
                    if (user !== player) return false;
                    return player.canUse({ name: event.card.name }, responder, false);
                },
                usable: (skill, player) => player.getHp(),
                async cost(event, trigger, player) {
                    const target = trigger._neutralize_event.player,
                        card = new lib.element.VCard({ name: trigger.card.name });
                    const effect = get.effect(target, card, player, player),
                        list = [event.skill, target];
                    event.result = await player
                        .chooseToDiscard(
                            get.prompt(...list),
                            (card, player) => {
                                return get.type2(card) === 'trick';
                            },
                            '弃置一张锦囊牌,视为对' + get.translation(target) + '使用' + get.translation(card),
                            'he'
                        )
                        .set('ai', (card) => {
                            const { effect } = get.event();
                            if (effect < 0) return 0;
                            return effect - get.value(card);
                        })
                        .set('effect', effect)
                        .forResult();
                },
                popup: false,
                content() {
                    player.useCard({ name: trigger.card.name }, trigger._neutralize_event.player, false);
                },
            },
            qx_hongzhi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countDiscardableCards(player, 'h') > 0;
                },
                filterCard(card, player) {
                    return lib.filter.cardDiscardable(card, player) && !ui.selected.cards.some((i) => i.suit === card.suit);
                },
                usable: 1,
                complexCard: true,
                check(card) {
                    return 7 - get.value(card);
                },
                selectCard: [1, 3],
                complexSelect: true,
                filterTarget: true,
                selectTarget: () => ui.selected.cards.length,
                multiline: true,
                multitarget: true,
                content() {
                    const skill = event.name + '_effect';
                    player.addTempSkill(skill, { player: 'phaseBegin' });
                    player.storage[skill][0].addArray(cards.map((card) => card.suit));
                    player.storage[skill][1].addArray(targets);
                    player.storage[skill][0].sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                    player.storage[skill][1].sortBySeat();
                    player.markSkill(skill);
                    player.addTip(skill, [skill, ...player.storage[skill][0]].map((i) => get.translation(i)).join(''));
                },
                ai: {
                    order: 7,
                    result: {
                        player(player, target) {
                            return target.countCards('h');
                        },
                    },
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        init(player, skill) {
                            player.storage[skill] ??= [[], []];
                        },
                        onremove(player, skill) {
                            delete player.storage[skill];
                            player.removeTip(skill);
                        },
                        intro: {
                            markcount(storage = [[], []]) {
                                const [suits, targets] = storage;
                                return suits.length + '/' + targets.length;
                            },
                            content(storage = [[], []]) {
                                const [suits, targets] = storage;
                                return [suits.length ? '花色:' + suits.map((i) => get.translation(i)).join('') : '暂未记录花色', targets.length ? '角色:' + get.translation(targets) : '暂未选择角色'].map((str) => '<li>' + str).join('<br>');
                            },
                        },
                        audio: 'qx_hongzhi',
                        trigger: { global: 'useCard' },
                        filter(event, player) {
                            const storage = player.storage.qx_hongzhi_effect || [[], []];
                            return storage[0].includes(event.card.suit) && storage[1].includes(event.player);
                        },
                        forced: true,
                        logTarget: 'player',
                        content() {
                            player.draw();
                        },
                    },
                },
            },
            qx_shuyu: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'damageBegin4' },
                filter(event, player) {
                    if (game.getAllGlobalHistory('damage', (evt) => event.player === player && evt !== event, event).length) return false;
                    return event.source?.isIn() && !event.source.inRange(player);
                },
                forced: true,
                logTarget: 'source',
                async content(event, trigger, player) {
                    trigger.num--;
                    const source = trigger.source,
                        str = get.translation(player);
                    const result = await source.chooseToDiscard('弃置一张手牌,或令' + str + '下个出牌阶段使用【杀】的次数+1').forResult();
                    if (!result?.bool) {
                        player.addTempSkill('qx_shuyu_effect', { player: 'phaseUseBegin' });
                        player.addMark('qx_shuyu_effect', 1, false);
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove(player, skill) {
                            player.addTempSkill('qx_shuyu_buff', 'phaseUseAfter');
                            player.addMark('qx_shuyu_buff', player.countMark(skill), false);
                            delete player.storage[skill];
                        },
                        intro: { content: '下个出牌阶段使用【杀】的次数+#' },
                    },
                    buff: {
                        charlotte: true,
                        intro: { content: '使用【杀】的次数+#' },
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name === 'sha') return num + player.countMark('qx_shuyu_buff');
                            },
                        },
                    },
                },
            },
            qx_renzhi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'useCardToTargeted' },
                filter(event, player) {
                    if (!player.hasCard((card) => _status.connectMode || lib.filter.cardDiscardable(card, player), 'h') || !event.cards?.someInD()) return false;
                    return get.type(event.card) === 'delay' && event.target.group === 'shu' && ![player, ...player.getStorage('qx_renzhi_used')].includes(target);
                },
                popup: false,
                zhuSkill: true,
                async cost(event, trigger, player) {
                    const target = trigger.target,
                        list = [event.skill, target];
                    event.result = await player
                        .chooseToDiscard(get.prompt(...list), '弃置一张手牌,令' + get.translation(target) + '获得' + get.translation(trigger.cards.filterInD()))
                        .set('ai', (card) => {
                            const { effect } = get.event();
                            if (effect >= 0) return 0;
                            return -effect - get.value(card);
                        })
                        .set('effect', get.effect(target, trigger.card, trigger.player, player))
                        .forResult();
                },
                async content(event, trigger, player) {
                    player.addTempSkill('qx_renzhi_used', 'roundStart');
                    player.markAuto('qx_renzhi_used', [trigger.target]);
                    trigger.parent.excluded.add(trigger.target);
                    await trigger.target.gain(trigger.cards.filterInD(), 'gain2');
                },
                mod: {
                    targetEnabled(card) {
                        if (get.type(card) === 'delay') return false;
                    },
                },
                subSkill: {
                    used: {
                        charlotte: true,
                    },
                },
            },
            qx_liyong: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (event.type === 'wuxie') return false;
                    if (
                        !player.hasCard((card) => {
                            if (get.position(card) === 'h' && _status.connectMode) return true;
                            return get.type2(card) !== 'basic';
                        }, 'hes')
                    )
                        return false;
                    return get.inpileVCardList((info) => {
                        if (get.type(info[2]) !== 'basic') return false;
                        return event.filterCard({ name: info[2], nature: info[3] }, player, event);
                    }).length;
                },
                chooseButton: {
                    dialog(event, player) {
                        const vcards = get.inpileVCardList((info) => {
                            if (get.type(info[2]) !== 'basic') return false;
                            return event.filterCard({ name: info[2], nature: info[3] }, player, event);
                        });
                        return ui.create.dialog('励勇', [vcards, 'vcard']);
                    },
                    check(button) {
                        if (get.event().parent.type !== 'phase') return 1;
                        return get.player().getUseValue({ name: button.link[2], nature: button.link[3] });
                    },
                    prompt(links) {
                        return '###励勇###将一张非基本牌当' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
                    },
                    backup(links) {
                        return {
                            audio: 'qx_liyong',
                            popname: true,
                            viewAs: { name: links[0][2], nature: links[0][3] },
                            filterCard(card) {
                                return get.type2(card) !== 'basic';
                            },
                            selectCard: 1,
                            position: 'hes',
                            precontent() {
                                player.addTempSkill('qx_liyong_effect');
                            },
                        };
                    },
                },
                hiddenCard(player, name) {
                    return (
                        get.type(name) === 'basic' &&
                        player.hasCard((card) => {
                            if (get.position(card) === 'h' && _status.connectMode) return true;
                            return get.type2(card) !== 'basic';
                        }, 'hes')
                    );
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player) {
                        return player.hasCard((card) => {
                            if (get.position(card) === 'h' && _status.connectMode) return true;
                            return get.type2(card) !== 'basic';
                        }, 'hes');
                    },
                    order: 0.5,
                    result: {
                        player(player) {
                            if (get.event().dying) return get.attitude(player, get.event().dying);
                            return 1;
                        },
                    },
                },
                subSkill: {
                    backup: {},
                    effect: {
                        charlotte: true,
                        trigger: { player: ['useCard', 'respond'] },
                        filter(event, player) {
                            return event.skill === 'qx_liyong_backup';
                        },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            if (trigger.name !== 'useCard' || !lib.skill.dcshixian.filterx(trigger)) {
                                await player.draw();
                                return;
                            }
                            const result = await player
                                .chooseControl()
                                .set('choiceList', ['摸一张牌', '令' + get.translation(trigger.card) + '额外结算一次'])
                                .set('ai', () => {
                                    const { effect } = get.event(),
                                        trigger = get.event().getTrigger();
                                    return effect > 0 && !get.tag(trigger.card, 'norepeat') ? 1 : 0;
                                })
                                .set(
                                    'effect',
                                    trigger.targets.reduce((sum, target) => {
                                        return sum + get.effect(target, trigger.card, trigger.player, player);
                                    }, 0)
                                )
                                .forResult();
                            if (result.index === 0) await player.draw();
                            else {
                                trigger.effectCount++;
                                game.log(trigger.card, '额外结算一次');
                            }
                        },
                    },
                },
            },
            qx_moutong: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'useCard' },
                filter(event, player) {
                    const storage = player.getStorage('qx_moutong');
                    return player.getHistory('useCard', (evt) => storage.includes(evt.card.suit)).indexOf(event) === 0;
                },
                forced: true,
                async content(event, trigger, player) {
                    const type = get.type(trigger.card);
                    if (type === 'basic') {
                        trigger.baseDamage++;
                        game.log(trigger.card, '的基础数值+1');
                        if (trigger.addCount !== false) {
                            trigger.addCount = false;
                            game.log(trigger.card, '不计入次数');
                            if (player.getStat('card')[trigger.card.name] > 0) player.getStat('card')[trigger.card.name]--;
                        }
                    }
                    if (type === 'trick') {
                        if (lib.skill.dcshixian.filterx(trigger)) {
                            trigger.effectCount++;
                            game.log(trigger.card, '额外结算一次');
                        }
                        if (
                            trigger.targets &&
                            game.hasPlayer((target) => {
                                if (trigger.targets.includes(target)) return false;
                                return lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
                            })
                        ) {
                            const result = await player
                                .chooseTarget('是否为' + get.translation(trigger.card) + '增加一个目标？', (card, player, target) => {
                                    const evt = get.event().getTrigger();
                                    return !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
                                })
                                .set('ai', (target) => {
                                    const player = get.player(),
                                        evt = get.event().getTrigger();
                                    return get.effect(target, evt.card, evt.player, player);
                                })
                                .forResult();
                            if (result?.bool && result.targets?.length) {
                                const targets = result.targets.sortBySeat();
                                player.line(targets, trigger.card.nature);
                                trigger.targets.addArray(targets);
                                game.log(targets, '成为了', trigger.card, '的所有目标');
                            }
                        }
                    }
                },
                group: 'qx_moutong_effect',
                intro: { content: '已记录花色:$' },
                subfrequeut: ['effect'],
                subSkill: {
                    effect: {
                        audio: 'qx_moutong',
                        trigger: { player: 'useCardAfter' },
                        filter(event, player) {
                            const suit = event.card.suit;
                            return lib.suit.includes(suit) && !player.getStorage('qx_moutong').includes(suit);
                        },
                        forced: true,
                        prompt2: (event) => '记录' + get.translation(event.card) + '的花色',
                        content() {
                            player.markAuto('qx_moutong', [trigger.card.suit]);
                            player.storage.qx_moutong.sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                            player.addTip('qx_moutong', ['qx_moutong', ...player.storage.qx_moutong].map((i) => get.translation(i)).join(''));
                        },
                    },
                },
            },
            qx_guanshi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { target: 'useCardToTarget' },
                filter(event, player) {
                    return player.getStorage('qx_guanshi').includes(event.card.name);
                },
                check(event, player) {
                    return get.effect(player, event.card, event.player, player) < 0;
                },
                prompt2: (event) => '移去' + get.translation(event.card.name) + ',令' + get.translation(event.card) + '无效' + (event.cards?.someInD() ? '并获得之' : ''),
                async content(event, trigger, player) {
                    player.unmarkAuto(event.name, [trigger.card.name]);
                    trigger.parent.targets.length = 0;
                    trigger.parent.all_excluded = true;
                    trigger.parent.excluded.addArray(trigger.targets);
                    game.log(trigger.card, '被无效了');
                    if (trigger.cards?.someInD()) await player.gain(trigger.cards.filterInD(), 'gain2');
                },
                intro: {
                    content(storage = []) {
                        if (!storage.length) return '暂无记录';
                        const names = storage.unique();
                        return names.map((name) => '<li>' + get.translation(name) + ':' + storage.filter((i) => i === name).length + '个').join('<br>');
                    },
                },
                group: 'qx_guanshi_effect',
                subSkill: {
                    effect: {
                        audio: 'qx_guanshi',
                        trigger: { global: 'useCardAfter' },
                        filter(event, player) {
                            if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                            const id = event.player.playerid;
                            const tempID = player.storage.qx_guanshi_round?.[id] ?? 0;
                            const forevID = player.storage.qx_guanshi_count?.[id] ?? 0;
                            return tempID < 1 && forevID < 3;
                        },
                        logTarget: 'player',
                        prompt2: (event) => '记录' + get.translation(event.card.name),
                        content() {
                            const id = trigger.player.playerid;
                            player.addTempSkill('qx_guanshi_round');
                            player.setStorage('qx_guanshi', [...player.getStorage('qx_guanshi'), trigger.card.name], true);
                            player.storage.qx_guanshi_round[id] = 1 + (player.storage.qx_guanshi_round[id] || 0);
                            player.storage.qx_guanshi_count[id] = 1 + (player.storage.qx_guanshi_count[id] || 0);
                        },
                    },
                    round: {
                        charlotte: true,
                        init(player, skill) {
                            player.storage[skill] = {};
                        },
                    },
                },
                init(player, skill) {
                    player.storage[skill + '_count'] = {};
                },
                onremove(player, skill) {
                    delete player.storage[skill + '_count'];
                },
            },
            qx_yinlve: {
                mark: true,
                marktext: '☯',
                intro: {
                    content(storage) {
                        return (
                            '锁定技,转换技,当你使用牌指定唯一其他目标时,' +
                            (() => {
                                if (storage) return '你令其弃置所有非锦囊牌';
                                return '你令其重铸所有非基本牌';
                            })()
                        );
                    },
                },
                zhuanhuanji: true,
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'useCardToPlayer' },
                filter(event, player) {
                    return event.isFirstTarget && event.targets.length === 1 && event.target !== player;
                },
                forced: true,
                logTarget: 'target',
                async content(event, trigger, player) {
                    let target = trigger.target,
                        cards;
                    player.changeZhuanhuanji(event.name);
                    if (player.storage[event.name]) {
                        cards = target.getCards('he', (card) => get.type(card) !== 'basic' && target.canRecast(card));
                        if (cards.length) await target.recast(cards);
                    } else {
                        cards = target.getDiscardableCards(target, 'he', (card) => get.type(card) !== 'trick');
                        if (cards.length) await target.discard(cards).set('discarder', player);
                    }
                },
            },
            qx_yuheng: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseJieshuBegin' },
                filter(event, player) {
                    if (event.player === player || event.player.getHistory('useCard').length > event.player.getHp()) return false;
                    return get.info('qx_yuheng').getCards(event.player, true);
                },
                getCards(player, bool) {
                    let cards = [];
                    const history = player.getHistory('lose', (evt) => evt.position == ui.discardPile);
                    if (history.length) {
                        if (bool) {
                            if (history.some((evt) => evt.cards.someInD('d'))) return true;
                        } else {
                            for (const evt of history) cards.addArray(evt.cards2.filterInD('d'));
                        }
                    }
                    const historyx = game.getGlobalHistory('cardMove', (evt) => {
                        if (evt.name !== 'cardsDiscard') return false;
                        const evtx = evt.parent;
                        if (evtx.name !== 'orderingDiscard') return false;
                        const evt2 = evtx.relatedEvent || evtx.parent;
                        const current = evt2.player;
                        if (evt2.name === 'phaseJudge' || current !== player) return false;
                        return current.hasHistory('lose', (evtx3) => {
                            const evtx4 = evtx3.relatedEvent || evtx3.parent;
                            if (evt2 !== evtx4) return false;
                            return evtx3.getl(current).cards2.length;
                        });
                    });
                    if (historyx.length) {
                        if (bool) {
                            if (historyx.some((evtx) => evtx.cards.someInD('d'))) return true;
                        } else {
                            for (const evtx of historyx) cards.addArray(evtx.cards.filterInD('d'));
                        }
                    }
                    return bool ? false : cards;
                },
                forced: true,
                async content(event, trigger, player) {
                    let cards = get.info(event.name).getCards(trigger.player);
                    const types = cards.map((card) => get.type2(card)).unique();
                    const gains = types.reduce((list, type) => list.add(cards.filter((i) => get.type2(i) === type).randomGet()), []);
                    if (gains.length) await player.gain(gains, 'gain2');
                    await player.changeHujia(1, null, true);
                },
                mod: {
                    maxHandcard(player, num) {
                        return num + player.hujia;
                    },
                },
            },
            qx_kanzhan: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countDiscardableCards(player, 'he') > 0 && game.hasPlayer((target) => player.canUse({ name: 'juedou' }, target, false));
                },
                filterCard: lib.filter.cardDiscardable,
                filterTarget(card, player, target) {
                    return player.canUse({ name: 'juedou' }, target, false);
                },
                selectTarget: [1, 2],
                check(card) {
                    return 7 - get.value(card);
                },
                usable: 1,
                async content(event, trigger, player) {
                    const target = event.target;
                    const next = player.useCard({ name: 'juedou' }, target, false);
                    await next;
                    const targets = next.targets;
                    if (!player.hasHistory('damage', (evt) => evt.getParent('useCard') === next)) {
                        const targets2 = targets?.filter((i) => i.countGainableCards(player, 'he')).sortBySeat();
                        if (Array.isArray(targets2) && targets2.length) {
                            player.line(targets2);
                            await player.gainMultiple(targets2, 'he');
                        }
                    } else {
                        await player.loseHp();
                        if (Array.isArray(targets) && targets.length) {
                            player.addTempSkill(event.name + '_buff');
                            player.markAuto(event.name + '_buff', targets);
                        }
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            return get.effect(target, new lib.element.VCard({ name: 'juedou' }), player, player);
                        },
                    },
                },
                subSkill: {
                    buff: {
                        charlotte: true,
                        intro: { content: '不能对$使用牌' },
                        mod: {
                            playerEnabled(card, player, target) {
                                if (player.getStorage('qx_kanzhan_buff').includes(target)) return false;
                            },
                        },
                    },
                },
            },
            qx_yanzheng: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                usable: () => game.countPlayer((i) => i.group === 'shu'),
                filter(event, player) {
                    return game.hasPlayer((target) => target !== player && target.countCards('h'));
                },
                async content(event, trigger, player) {
                    const targets = game.filterPlayer((target) => target !== player && target.countCards('h'));
                    player.line(targets);
                    await player.chooseToDebate(targets).set('callback', async (event) => {
                        const result = event.debateResult,
                            targets = (result.red?.map((i) => i[0]) ?? []).sortBySeat();
                        if (result.bool && ['red', 'black'].includes(result.opinion) && targets.length) {
                            player.line(targets);
                            if (result.opinion === 'red') {
                                const gains = targets.reduce((list, target) => {
                                    const cards = target.getGainableCards(player, 'he', (card) => get.type(card) !== 'equip');
                                    if (cards.length) list.add(cards.randomGet());
                                    return list;
                                }, []);
                                if (gains.length) await player.gain(gains, 'give');
                            } else {
                                for (const target of targets) target.addTempSkill('qx_yanzheng_ban');
                            }
                        }
                    });
                },
                ai: {
                    order: 8,
                    result: { player: 1 },
                },
                subSkill: {
                    ban: {
                        charlotte: true,
                        mark: true,
                        intro: { content: '不能使用非基本牌' },
                        mod: {
                            cardEnabled(card) {
                                if (get.type(card) !== 'basic') return false;
                            },
                            cardSavable(card) {
                                if (get.type(card) !== 'basic') return false;
                            },
                        },
                    },
                },
            },
            qx_renquan: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filterTarget: lib.filter.notMe,
                usable: 1,
                async content(event, trigger, player) {
                    const target = event.target;
                    await target.drawTo(target.maxHp);
                    const result = await target
                        .chooseControl()
                        .set('choiceList', ['下回合开始时,执行一个额外的出牌阶段', '使用牌无距离和次数限制直到自己的回合结束'])
                        .set('ai', () => {
                            const player = get.player();
                            return player.countCards('h') > 3 ? 1 : get.rand(0, 1);
                        })
                        .forResult();
                    if (result.index === 0) {
                        target.addSkill('qx_renquan_phase');
                        target.addMark('qx_renquan_phase', 1, false);
                    } else {
                        target.addTempSkill('qx_renquan_effect', { player: 'phaseEnd' });
                    }
                },
                ai: {
                    order: 9,
                    result: {
                        player(player, target) {
                            return Math.max(0, target.maxHp - target.countCards('h')) + 1;
                        },
                    },
                },
                subSkill: {
                    phase: {
                        charlotte: true,
                        intro: { content: '回合开始时,执行#个额外的出牌阶段' },
                        trigger: { player: 'phaseBegin' },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            let num = player.countMark(event.name);
                            while (num > 0) {
                                num--;
                                trigger.phaseList.splice(trigger.num, 0, `phaseUse|${event.name}`);
                            }
                            player.removeSkill(event.name);
                        },
                    },
                    effect: {
                        charlotte: true,
                        mark: true,
                        intro: { content: '使用牌无距离和次数限制' },
                        mod: {
                            cardUsableTarget: () => true,
                            targetInRange: () => true,
                        },
                    },
                },
            },
            qx_siye: {
                audio: 'ext:群星荟萃/audio/skill:2',
                zhuSkill: true,
                global: 'qx_siye_global',
                subSkill: {
                    global: {
                        audio: 'qx_siye',
                        forceaudio: true,
                        enable: 'phaseUse',
                        filter(event, player) {
                            if (player.group !== 'shu' || !player.countCards('he')) return false;
                            return game.hasPlayer((target) => lib.skill.qx_siye_global.filterTarget(null, player, target));
                        },
                        filterTarget(card, player, target) {
                            return target !== player && target.hasZhuSkill('qx_siye', player);
                        },
                        filterCard: true,
                        check(card) {
                            return 7 - get.value(card);
                        },
                        usable: 1,
                        position: 'he',
                        lose: false,
                        discard: false,
                        delay: false,
                        prompt: () => lib.translate.qx_siye_info,
                        async content(event, trigger, player) {
                            const target = event.target;
                            target.addSkill('qx_siye_tao');
                            const next = player.give(event.cards, event.target);
                            next.gaintag.add('qx_siye_tao');
                            await next;
                            const juedou = new lib.element.VCard({ name: 'juedou' });
                            if (player.hasUseTarget(juedou)) await player.chooseUseTarget(juedou, true, false);
                        },
                        ai: {
                            order: 10,
                            result: {
                                target(player) {
                                    const juedou = new lib.element.VCard({ name: 'juedou' });
                                    if (player.hasUseTarget(juedou) && !player.hasValueTarget(juedou)) return 0;
                                    return 1;
                                },
                            },
                        },
                    },
                    tao: {
                        charlotte: true,
                        mod: {
                            cardname(card) {
                                if (get.itemtype(card) === 'card' && card.hasGaintag('qx_siye_tao')) return 'tao';
                            },
                            cardnature(card) {
                                if (get.itemtype(card) === 'card' && card.hasGaintag('qx_siye_tao')) return false;
                            },
                            ignoredHandcard(card) {
                                if (card.hasGaintag('qx_siye_tao')) return true;
                            },
                            cardDiscardable(card, player, name) {
                                if (name === 'phaseDiscard' && card.hasGaintag('qx_siye_tao')) return false;
                            },
                        },
                    },
                },
            },
            qx_bianjian: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer((target) => lib.skill.qx_bianjian.filterTarget(null, player, target));
                },
                filterTarget(card, player, target) {
                    return player.inRange(target) && target.countCards('h');
                },
                usable: 1,
                async content(event, trigger, player) {
                    await player.gainPlayerCard(event.target, 'h', true);
                    const list = get
                        .inpileVCardList((info) => {
                            return ['basic', 'trick'].includes(get.type(info[2]));
                        })
                        .filter((info) => player.hasUseTarget({ name: info[2], nature: info[3] }));
                    if (list.length) {
                        const result = await player
                            .chooseButton(['是否视为使用一张牌？', [list, 'vcard']])
                            .set('ai', (button) => {
                                return get.player().getUseValue({ name: button.link[2], nature: button.link[3] });
                            })
                            .forResult();
                        if (result?.bool && result.links?.length) {
                            await player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, true, false);
                            if (
                                !player.hasHistory('sourceDamage', (evt) => {
                                    if (!evt.card) return false;
                                    const evtx = evt.getParent('useCard');
                                    return evtx.card == evt.card && evtx.getParent(2) == event;
                                })
                            ) {
                                const num = Math.max(1, game.countPlayer());
                                const result2 = await player
                                    .chooseTarget('是否令一名其他角色的攻击范围视为' + num + '直到其下个回合开始？')
                                    .set('ai', (target) => {
                                        const { player, num: range } = get.event();
                                        if (lib.skill.qx_xingfa.filterTargetx(null, player, target) || get.attitude(player, target) > 0) return get.attitude(player, target) * (range - target.getAttackRange());
                                        if (player.hasUnknown() || get.distance(target, player) - (range - target.getAttackRange()) > 0) return 0;
                                        let num = 0,
                                            current = player.next;
                                        while (true) {
                                            num -= get.sgn(get.attitude(player, current));
                                            if (current == target) break;
                                            current = current.next;
                                        }
                                        while (true) {
                                            if (current == player) break;
                                            num += get.sgn(get.attitude(player, current)) * 1.1;
                                            current = current.next;
                                        }
                                        return num + 1;
                                    })
                                    .set('num', num)
                                    .forResult();
                                if (result2?.bool && result2.targets?.length) {
                                    const target = result2.targets[0];
                                    player.line(target);
                                    target.storage.qx_bianjian_range = num;
                                    target.addTempSkill('qx_bianjian_range', { player: 'phaseBegin' });
                                }
                            }
                        }
                    }
                },
                ai: {
                    order(item, player) {
                        return get.order({ name: 'shunshou_copy', position: 'h' }, player) + 0.1;
                    },
                    result: {
                        player(player, target) {
                            return get.effect(target, { name: 'shunshou_copy', position: 'h' }, player, player);
                        },
                    },
                },
                subSkill: {
                    range: {
                        charlotte: true,
                        mark: true,
                        intro: { content: '攻击范围视为#' },
                        mod: { attackRange: (player) => player.countMark('qx_bianjian_range') },
                    },
                },
            },
            qx_xingfa: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return game.hasPlayer((target) => lib.skill.qx_xingfa.filterTargetx(null, player, target));
                },
                filterTargetx(card, player, target) {
                    return target.inRange(player) && target.getHp() >= player.getHp();
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), lib.skill.qx_xingfa.filterTargetx)
                        .set('ai', (target) => {
                            const player = get.player();
                            if (player.hasUnknown()) return 0;
                            let num = 0,
                                current = player.next;
                            while (true) {
                                num -= get.sgn(get.attitude(player, current));
                                if (current == target) break;
                                current = current.next;
                            }
                            while (true) {
                                if (current == player) break;
                                num += get.sgn(get.attitude(player, current)) * 1.1;
                                current = current.next;
                            }
                            return num + 1;
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    game.broadcastAll((target1, target2) => game.swapSeat(target1, target2), player, target);
                    await player.draw();
                    player.addTempSkill('qx_xingfa_rangex', { player: 'phaseBegin' });
                    player.addMark('qx_xingfa_rangex', 1, false);
                },
                subSkill: {
                    rangex: {
                        charlotte: true,
                        onremove(player, skill) {
                            player.addTempSkill('qx_xingfa_range');
                            player.addMark('qx_xingfa_range', player.countMark(skill), false);
                            delete player.storage[skill];
                        },
                        intro: { content: '下回合攻击范围+#' },
                    },
                    range: {
                        charlotte: true,
                        intro: { content: '攻击范围+#' },
                        mod: {
                            attackRange(player, num) {
                                return num + player.countMark('qx_xingfa_range');
                            },
                        },
                    },
                },
            },
            qx_zunxiu: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h') && game.hasPlayer((target) => lib.skill.qx_zunxiu.filterTarget(null, player, target));
                },
                filterTarget(card, player, target) {
                    return player.canCompare(target);
                },
                selectTarget: [1, 3],
                filterCard: true,
                check(card) {
                    return card.number + 1;
                },
                usable(skill, player) {
                    return player.getHp();
                },
                lose: false,
                discard: false,
                delay: false,
                multiline: true,
                multitarget: true,
                async content(event, trigger, player) {
                    const {
                        cards: [card],
                        targets,
                    } = event;
                    const next = player.chooseToCompare(targets);
                    next.set('fixedResult', { [player.playerid]: card });
                    next.setContent('chooseToCompareMeanwhile');
                    const result2 = await next.forResult();
                    if (result2?.winner && result2.winner === player) {
                        let result;
                        if (targets.every((i) => !i.countCards('he'))) result = { index: 1 };
                        else {
                            const str = get.translation(targets);
                            result = await player
                                .chooseControl()
                                .set('choiceList', ['获得' + str + '各一张牌', '令' + str + '下回合摸牌阶段少摸一张牌'])
                                .set('ai', () => {
                                    const { player, targets } = get.event();
                                    return targets.reduce((sum, target) => {
                                        sum += get.effect(target, { name: 'bingliang' }, player, player);
                                        sum -= get.effect(target, { name: 'shunshou_copy2' }, player, player);
                                        return sum;
                                    }, 0) > 0
                                        ? 1
                                        : 0;
                                })
                                .set('targets', targets)
                                .forResult();
                        }
                        if (result.index === 0) await player.gainMultiple(targets, 'he');
                        else {
                            for (const target of targets) {
                                target.addTempSkill('qx_zunxiu_draw', { player: 'phaseEnd' });
                                target.addMark('qx_zunxiu_draw', 1, false);
                            }
                        }
                    } else {
                        player.addTempSkill('qx_zunxiu_hand');
                        player.addMark('qx_zunxiu_hand', 1, false);
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            const hs = player.getCards('h').sort((a, b) => b.number - a.number);
                            const ts = target.getCards('h').sort((a, b) => b.number - a.number);
                            if (!hs.length || !ts.length || hs[0].number <= ts[0].number) return 0;
                            return Math.max(get.effect(target, { name: 'bingliang' }, player, player), get.effect(target, { name: 'shunshou_copy2' }, player, player));
                        },
                    },
                },
                subSkill: {
                    draw: {
                        charlotte: true,
                        intro: { content: '摸牌阶段少摸#张牌' },
                        trigger: { player: 'phaseDrawBegin' },
                        forced: true,
                        popup: false,
                        content() {
                            trigger.num -= player.countMark(event.name);
                        },
                    },
                    hand: {
                        charlotte: true,
                        intro: { content: '手牌上限-#' },
                        mod: {
                            maxHandcard(player, num) {
                                return num - player.countMark('qx_zunxiu_hand');
                            },
                        },
                    },
                },
            },
            qx_zhenfan: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer((target) => target !== player);
                },
                usable: 1,
                filterTarget: lib.filter.notMe,
                async content(event, trigger, player) {
                    const target = event.target;
                    let list = get.info('qx_zhenfan').getList.map((choice) => [choice, choice[0]]);
                    for (const current of [player, target]) {
                        if (!list.some((effect) => !effect[1].filter || effect[1].filter(current))) continue;
                        const result = await current
                            .chooseButton(['通儒:请选择执行其中一项', [list, 'textbutton']], true)
                            .set('filterButton', (button) => {
                                const effect = button.link[1];
                                return !effect.filter || effect.filter(get.player());
                            })
                            .set('ai', (button) => button.link[1].ai(get.player()))
                            .forResult();
                        if (result.bool) {
                            list = list.filter((choice) => !result.links.includes(choice[0]));
                            await result.links[0][1].content(current, player);
                        }
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        player(player, target) {
                            if (get.attitude(player, target) <= 0) return 0;
                            const list = get.info('qx_zhenfan').getList;
                            const list1 = list.map((listx) => listx[0][1]).filter((effect) => !effect.filter || effect.filter(player));
                            const list2 = list.map((listx) => listx[0][1]).filter((effect) => !effect.filter || effect.filter(target));
                            return Math.max(...list1.map((effect) => effect.ai(player, player))) + Math.max(...list2.map((effect) => effect.ai(target, player)));
                        },
                    },
                },
                global: 'qx_zhenfa_global',
                subSkill: {
                    global: {
                        ai: {
                            unequip: true,
                            skillTagFilter(player, tag, arg) {
                                if (!arg?.card?.storage?.qx_zhenfan) return false;
                            },
                        },
                    },
                    range: {
                        charlotte: true,
                        mark: true,
                        intro: { content: '使用牌无距离限制' },
                        mod: { targetInRange: () => true },
                    },
                },
                getList: [
                    [
                        '将手牌数补至体力值',
                        {
                            filter(player) {
                                return player.countCards('h') < player.getHp();
                            },
                            async content(player) {
                                await player.drawTo(player.getHp());
                            },
                            ai(player) {
                                return get.effect(player, { name: 'draw' }, player, player) * (player.getHp() - player.countCards('h'));
                            },
                        },
                    ],
                    [
                        '视为使用一张无视防具的【杀】',
                        {
                            filter(player) {
                                return player.hasUseTarget(new lib.element.VCard({ name: 'sha', storage: { qx_zhenfan: true } }));
                            },
                            async content(player) {
                                await player.chooseUseTarget(new lib.element.VCard({ name: 'sha', storage: { qx_zhenfan: true } }), true, false);
                            },
                            ai(player) {
                                return player.getUseValue(new lib.element.VCard({ name: 'sha', storage: { qx_zhenfan: true } }));
                            },
                        },
                    ],
                    [
                        '使用牌无距离限制直到回合结束',
                        {
                            async content(player) {
                                player.addTempSkill('qx_zhenfan_range', { player: 'phaseEnd' });
                            },
                            ai(player) {
                                const cards = player.getCards('hs', (card) => !player.hasValueTarget(card) && player.hasValueTarget(card, false));
                                return cards.reduce((sum, card) => sum + get.value(card), 0);
                            },
                        },
                    ],
                ],
            },
            qx_shangli: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'roundStart' },
                async cost(event, trigger, player) {
                    const { suit, inpile } = lib;
                    const result = (event.result = await player
                        .chooseButton(
                            [
                                '###请选择花色和类别###<div class="text center">' + lib.translate[event.skill + '_info'] + '</div>',
                                [suit.map((i) => [i + '|suit', get.translation(i.split('|')[0])]).reverse(), 'tdnodes'],
                                [
                                    inpile
                                        .map((i) => get.type2(i) + '|type')
                                        .unique()
                                        .map((i) => [i, get.translation(i.split('|')[0])]),
                                    'tdnodes',
                                ],
                            ],
                            2,
                            true
                        )
                        .set('filterButton', (button) => {
                            if (!ui.selected.buttons.length) return true;
                            return ui.selected.buttons[0].link.endsWith('|suit') !== button.link.endsWith('|suit');
                        })
                        .set('ai', () => 1 + Math.random())
                        .forResult());
                    if (result?.bool && result.links?.length) {
                        const suit = result.links.find((i) => i.endsWith('|suit'));
                        const type = result.links.find((i) => i.endsWith('|type'));
                        event.result.cost_data = { suit: suit.split('|')[0], type: type.split('|')[0] };
                    }
                },
                async content(event, trigger, player) {
                    player.storage.qx_shangli_effect = event.cost_data;
                    player.addTempSkill('qx_shangli_effect', 'roundStart');
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        mark: true,
                        intro: {
                            markcount(storage) {
                                if (!storage) return 0;
                                return get.translation(storage.suit) + get.translation(storage.type)[0];
                            },
                            content(storage) {
                                if (!storage) return '暂未选择花色类别';
                                return '已选择' + get.translation(storage.suit) + '和' + get.translation(storage.type);
                            },
                        },
                        trigger: {
                            player: 'useCard',
                            target: 'useCardToTarget',
                        },
                        filter(event, player) {
                            const storage = player.storage.qx_shangli_effect;
                            if (!storage) return false;
                            const { suit, type } = storage;
                            return (event.card.suit === suit && !player.getStorage('qx_shangli_used').includes([event.name, suit].join('|'))) || (get.type2(event.card) === type && !player.getStorage('qx_shangli_used').includes([event.name, type].join('|')));
                        },
                        forced: true,
                        async content(event, trigger, player) {
                            const storage = player.storage[event.name];
                            const { suit, type } = storage;
                            player.addTempSkill('qx_shangli_used');
                            player.addTempSkill('qx_shangli_count');
                            if (trigger.card.suit === suit && !player.getStorage('qx_shangli_used').includes([trigger.name, suit].join('|'))) {
                                await player.draw();
                                player.markAuto('qx_shangli_used', [[trigger.name, suit].join('|')]);
                                player.addMark('qx_shangli_count', 1, false);
                            }
                            if (get.type2(trigger.card) === type && !player.getStorage('qx_shangli_used').includes([trigger.name, type].join('|'))) {
                                await player.draw();
                                player.markAuto('qx_shangli_used', [[trigger.name, type].join('|')]);
                                player.addMark('qx_shangli_count', 1, false);
                            }
                            if (player.countMark('qx_shangli_count') > 3) await player.gainMaxHp();
                        },
                    },
                    used: {
                        charlotte: true,
                    },
                    count: {
                        charlotte: true,
                    },
                },
            },
            qx_shibo: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseUseEnd' },
                filter(event, player) {
                    return event.player !== player;
                },
                check(event, player) {
                    if (get.attitude(player, event.player) > 0 || event.player.needsToDiscard()) return true;
                    return !event.player.hasCard((card) => get.type(card) !== 'equip' && lib.filter.cardDiscardable(card, player), 'he');
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    const target = trigger.player;
                    let result;
                    if (!target.hasCard((card) => get.type(card) !== 'equip' && lib.filter.cardDiscardable(card, player), 'he')) result = { index: 0 };
                    else {
                        result = await target
                            .chooseControl(['交给' + get.translation(player) + '一张牌,然后从牌堆底摸一张牌', '弃置一张非装备牌,然后从牌堆顶摸一张牌'])
                            .set('ai', () => {
                                const { player, source } = get.event();
                                return get.attitude(player, source) > 0 ? 1 : 0;
                            })
                            .set('source', player)
                            .forResult();
                    }
                    if (result.index === 0) {
                        await target.chooseToGive(player, 'he', true);
                        await target.draw('bottom');
                    } else {
                        await target.chooseToDiscard('he', true, (card) => get.type(card) !== 'equip');
                        await target.draw();
                    }
                },
            },
            qx_jieyu: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    return game.hasPlayer((i) => i.isMinHp() && !i.hasHistory('damage'));
                },
                forced: true,
                async content(event, trigger, player) {
                    const suit = await player.judge().forResult('suit');
                    if (!player.hasCard((card) => card.suit === suit && game.checkMod(card, player, 'unchanged', 'cardEnabled2', player), 'hes')) return;
                    const targets = game.filterPlayer((i) => i.isMinHp() && !i.hasHistory('damage'));
                    const list = get
                        .inpileVCardList((info) => {
                            return ['basic', 'trick'].includes(get.type(info[2])) && get.tag({ name: info[2] }, 'damage') >= 0.5;
                        })
                        .filter((info) => player.hasUseTarget(new lib.element.VCard({ name: info[2], nature: info[3], storage: { qx_jieyu: targets } })));
                    if (list.length) {
                        const result = await player
                            .chooseButton(['###是否选择一个伤害类卡牌？###<div class="text center">将任意张' + get.translation(suit) + '牌当作此牌对' + get.translation(targets) + '使用</div>', [list, 'vcard']])
                            .set('ai', (button) => {
                                const { player, targets } = get.event();
                                return player.getUseValue({ name: button.link[2], nature: button.link[3], storage: { qx_jieyu: targets } });
                            })
                            .set('targets', targets)
                            .forResult();
                        if (result?.bool && result.links?.length) {
                            const viewAs = { name: result.links[0][2], nature: result.links[0][3], storage: { qx_jieyu: targets } };
                            game.broadcastAll(
                                (suit, viewAs) => {
                                    lib.skill.qx_jieyu_backup.suit = suit;
                                    lib.skill.qx_jieyu_backup.viewAs = viewAs;
                                },
                                suit,
                                viewAs
                            );
                            const next = player.chooseToUse();
                            next.set('openskilldialog', '是否将任意张' + get.translation(suit) + '牌当作' + (get.translation(viewAs.nature) || '') + get.translation(viewAs.name) + '对' + get.translation(targets) + '使用？');
                            next.set('norestore', true);
                            next.set('_backupevent', 'qx_jieyu_backup');
                            next.set('custom', {
                                add: {},
                                replace: { window() { } },
                            });
                            next.backup('qx_jieyu_backup');
                            next.set('targetRequired', true);
                            next.set('complexSelect', true);
                            next.set('addCount', false);
                            const result2 = await next.forResult();
                            if (result2?.bool) {
                                const recovers = targets.filter((target) => !target.hasHistory('damage', (evt) => evt.getParent(event.name) === event && evt._dyinged));
                                if (recovers.length) {
                                    await player.recover();
                                    for (const i of recovers) await i.recover();
                                }
                            }
                        }
                    }
                },
                mod: {
                    playerEnabled(card, player, target) {
                        if (!card?.storage?.qx_jieyu?.includes(target)) return false;
                    },
                },
                subSkill: {
                    backup: {
                        filterCard: (card) => card.suit === lib.skill.qx_jieyu_backup.suit,
                        selectCard: [1, Infinity],
                        position: 'hes',
                        check: (card) => 7 - get.value(card),
                    },
                },
            },
            qx_xinyou: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { source: 'damageBegin1' },
                filter(event, player) {
                    const cards = player.getCards('h');
                    return !cards.some((i) => i.suit === 'heart') || cards.every((i) => i.suit === 'heart');
                },
                forced: true,
                async content(event, trigger, player) {
                    const cards = player.getCards('h');
                    if (!cards.some((i) => i.suit === 'heart')) trigger.num++;
                    if (cards.every((i) => i.suit === 'heart')) {
                        trigger.cancel();
                        if (game.hasPlayer((i) => i !== player)) {
                            const result = await player
                                .chooseTarget('令一名其他角色摸两张牌', lib.filter.notMe, true)
                                .set('ai', (target) => {
                                    const player = get.player();
                                    return get.effect(target, { name: 'draw' }, player, player) * 2;
                                })
                                .forResult();
                            if (result?.bool && result.targets?.length) {
                                player.line(result.targets);
                                await result.targets[0].draw(2);
                            }
                        }
                    }
                },
            },
            qx_miaoci: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'useCard' },
                filter(event, player) {
                    const phaseName = lib.phaseName.find((i) => event.getParent(i, true));
                    if (!phaseName) return false;
                    return player.getHistory('useCard', (evt) => evt.getParent(phaseName) === event.getParent(phaseName)).indexOf(event) + 1 === get.cardNameLength(event.card);
                },
                forced: true,
                content() {
                    const card = get.cardPile((card) => get.cardNameLength(card) === get.cardNameLength(trigger.card));
                    if (card) player.gain(card, 'gain2');
                },
                mod: {
                    aiOrder(player, card, num) {
                        const event = get.event();
                        const phaseName = lib.phaseName.find((i) => event.getParent(i, true));
                        if (!phaseName) return;
                        if (get.cardNameLength(card) - 1 === player.getHistory('useCard', (evt) => evt.getParent(phaseName) === event.getParent(phaseName))) return num + 15;
                    },
                },
            },
            qx_mita: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseUseEnd' },
                filter(event, player) {
                    return player.countCards('h') > 0;
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseCard(get.prompt2(event.skill))
                        .set('ai', (card) => {
                            let player = get.player(),
                                num = player.getHp();
                            num = game.checkMod(player, num, 'maxHandcardBase', player);
                            return get.cardNameLength(card) - num;
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    await player.showCards(event.cards, get.translation(player) + '发动了【' + get.translation(event.name) + '】');
                    player.storage.qx_mita_hand = get.cardNameLength(event.cards[0]);
                    player.addTempSkill('qx_mita_hand', { player: 'phaseBegin' });
                },
                subSkill: {
                    hand: {
                        charlotte: true,
                        mark: true,
                        intro: { content: '手牌上限视为#' },
                        mod: { maxHandcardBase: (player) => player.countMark('qx_mita_hand') },
                    },
                },
            },
            qx_wanxian: {
                zhuanhuanji: true,
                mark: true,
                intro: {
                    markcount(storage, player) {
                        return (storage ? '阴' : '阳') + '/' + (player.storage.qx_wanxian_zhuanyun ? '仄' : '平');
                    },
                    content(storage, player) {
                        return '一名角色的弃牌阶段开始时,你可将其区域内的一张牌当作【' + (storage ? '树上开花' : '无中生有') + '】对其使用,然后若其' + ['无需弃牌,其将因此获得的牌交给你', '仍需弃牌,你令其受到1点冰属性伤害'][player.storage.qx_wanxian_zhuanyun ? 1 : 0];
                    },
                },
                categories: () => ['韵律技'],
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseDiscardBegin' },
                filter(event, player) {
                    return event.player.hasCard((card) => {
                        return lib.filter.targetEnabled2({ name: player.storage.qx_wanxian ? 'kaihua' : 'wuzhong' }, player, event.player);
                    }, 'he');
                },
                async cost(event, trigger, player) {
                    const target = trigger.player;
                    event.result = await player
                        .choosePlayerCard(target, 'he', get.prompt2(event.skill, target))
                        .set('filterButton', (button) => {
                            const { player, target } = get.event();
                            return lib.filter.targetEnabled2({ name: player.storage.qx_wanxian ? 'kaihua' : 'wuzhong' }, player, target);
                        })
                        .set('ai', (button) => {
                            const { player, target } = get.event(),
                                card = button.link;
                            return get.attitude(player, target) > 0 ? 7 - get.value(card) : 0;
                        })
                        .forResult();
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    const target = trigger.player,
                        card = { name: player.storage[event.name] ? 'kaihua' : 'wuzhong' };
                    player.storage[event.name] = !player.storage[event.name];
                    player.markSkill(event.name);
                    const next = player.useCard(card, target, false);
                    await next;
                    if (!player.storage[event.name + '_zhuanyun'] && !player.needsToDiscard()) {
                        const cards = player.getHistory('gain', (evt) => evt.getParent(next.name) === next)?.[0]?.getg?.(player) ?? [];
                        await player.gain(cards, 'give');
                    }
                    if (player.storage[event.name + '_zhuanyun'] && player.needsToDiscard()) await target.damage(1, 'ice');
                },
                group: 'qx_wanxian_zhuanyun',
                subSkill: {
                    zhuanyun: {
                        audio: 'qx_wanxian',
                        trigger: {
                            player: 'gainAfter',
                            global: 'loseAsyncAfter',
                        },
                        filter(event, player) {
                            return (event.getg?.(player) ?? []).length;
                        },
                        forced: true,
                        content() {
                            player.storage[event.name] = !player.storage[event.name];
                            player.markSkill(get.sourceSkillFor(event));
                            game.log(player, '转换了', '#g【' + get.translation(get.sourceSkillFor(event)) + '】', '的韵律');
                        },
                    },
                },
            },
            qx_rouqing: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseUseEnd' },
                filter(event, player) {
                    if (event.player === player || player.getStorage('qx_rouqing_round').includes(event.player)) return false;
                    return event.player.countCards('h') > 0;
                },
                async cost(event, trigger, player) {
                    const target = trigger.player;
                    event.result = await player
                        .choosePlayerCard(target, 'h', [1, 2], get.prompt2(event.skill, target))
                        .set('ai', (button) => {
                            const { player, target } = get.event(),
                                card = button.link;
                            return get.attitude(player, target) > 0 ? get.value(card) : 0;
                        })
                        .forResult();
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    const target = trigger.player,
                        str = get.translation(target);
                    player.addTempSkill('qx_rouqing_round', 'roundStart');
                    player.markAuto('qx_rouqing_round', [target]);
                    target.addTempSkill('qx_rouqing_effect');
                    const next = target.addToExpansion(event.cards, target, 'give');
                    next.gaintag.add('qx_rouqing_effect');
                    await next;
                    const result = await player
                        .chooseControl()
                        .set('choiceList', ['令' + str + '执行一个额外的摸牌阶段', '令' + str + '摸两张牌,然后其交给你一张牌'])
                        .set('ai', () => {
                            const { player, target } = get.event();
                            return get.attitude(player, target) <= 0 || target.needsToDiscard(2) ? 1 : 0;
                        })
                        .set('target', target)
                        .forResult();
                    if (result.index === 0) {
                        const evt = trigger.getParent('phase', true);
                        if (evt) evt.phaseList.splice(evt.num, 0, `phaseDraw|${event.name}`);
                    } else {
                        await target.draw(2);
                        await target.chooseToGive(player, 'he', true);
                    }
                },
                subSkill: {
                    round: {
                        charlotte: true,
                    },
                    effect: {
                        charlotte: true,
                        intro: {
                            content: 'expansion',
                            markcount: 'expansion',
                        },
                        onremove(player, skill) {
                            const cards = player.getExpansions(skill);
                            if (cards.length) player.loseToDiscardpile(cards);
                        },
                        trigger: { global: 'phaseEnd' },
                        forced: true,
                        popup: false,
                        content() {
                            const cards = player.getExpansions(event.name);
                            if (cards.length) player.gain(cards, 'gain2');
                        },
                    },
                },
            },
            qx_dieyin: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    global: 'roundStart',
                    player: 'damageEnd',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.addMark(event.name + '2', 1, false);
                    player.addMark(event.name, 1);
                    if (player.countMark(event.name + '2') % 4 === 0) {
                        const names = get.inpileVCardList((info) => get.type(info[2]) === 'trick');
                        if (names.some((item) => player.hasUseTarget({ name: item[2] })) > 0) {
                            const result = await player
                                .chooseButton([get.translation(event.name) + ':是否失去所有<蝶>标记并视为使用一张普通锦囊牌？', [names, 'vcard']])
                                .set('filterButton', (button) => {
                                    const player = get.player();
                                    return player.hasUseTarget({ name: button.link[2] });
                                })
                                .set('ai', (button) => {
                                    const player = get.player();
                                    return player.getUseValue({ name: button.link[2] });
                                })
                                .forResult();
                            if (result?.bool && result.links?.length) {
                                await player.chooseUseTarget({ name: result.links[0][2] }, true, false).set('oncard', () => get.player().clearMark('qx_dieyin'));
                            }
                        }
                    }
                },
                mark: true,
                marktext: '蝶',
                intro: {
                    markcount: (storage = 0, player) => storage + '/' + (player.countMark('qx_dieyin2') % 4),
                    content: 'mark',
                },
            },
            qx_dieyun: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'dying' },
                filter(event, player) {
                    if (player.countMark('qx_dieyin') <= player.countCards('h')) return false;
                    return game.getGlobalHistory('everything', (evt) => evt.name === 'dying' && evt.player === player, event).indexOf(event) === 0;
                },
                forced: true,
                async content(event, trigger, player) {
                    await player.drawTo(player.countMark('qx_dieyin'));
                    await player.recoverTo(player.maxHp);
                    let list = [],
                        skills = [];
                    if (get.mode() === 'guozhan') {
                        list.addArray(
                            Object.keys(lib.characterPack.mode_guozhan).filter((i) => {
                                if (i.indexOf('gz_jun') === 0 || lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                return lib.character[i];
                            })
                        );
                    } else if (_status.connectMode) list = get.charactersOL();
                    else {
                        list.addArray(
                            Object.keys(lib.character).filter((i) => {
                                if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                return lib.character[i];
                            })
                        );
                    }
                    for (const name of list) {
                        for (const skill of get.character(name)?.skills ?? []) {
                            if (player.getSkills(null, false, false).includes(skill) || skills.includes(skill)) continue;
                            const info = get.info(skill);
                            if (!info || info.charlotte || info.init || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                            if (['濒死', '回复'].some((control) => get.plainText(get.skillInfoTranslation(skill)).includes(get.translation(control)))) skills.add(skill);
                        }
                    }
                    if (skills.length) await player.addAdditionalSkills(event.name, skills.randomGet(), true);
                    return;
                    skills = player.additionalSkills?.[event.name] ?? [];
                    if (skills.length > 2) {
                        const links = await player
                            .chooseButton(
                                [
                                    get.translation(event.name) + ':请选择失去' + get.cnNumber(skills.length - 2) + '个溢出的技能',
                                    [
                                        skills.map((skill) => {
                                            return [skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>'];
                                        }),
                                        'textbutton',
                                    ],
                                ],
                                true,
                                skills.length - 2
                            )
                            .set('ai', (button) => -get.skillRank(button.link))
                            .forResult('links');
                        if (links?.length) {
                            await player.changeSkills([], links).set('$handle', (player, addSkills, removeSkills) => {
                                for (const skill of removeSkills) player.popup(skill);
                                game.log(player, '失去了技能', ...removeSkills.map((i) => '#g【' + get.translation(i) + '】'));
                                player.removeSkill(removeSkills);
                                if (Array.isArray(player.additionalSkills?.qx_dieyun)) {
                                    player.additionalSkills.qx_dieyun.removeArray(removeSkills);
                                    if (!player.additionalSkills.qx_dieyun.length) delete player.additionalSkills.qx_dieyun;
                                }
                            });
                        }
                    }
                },
                ai: { combo: 'qx_dieyin' },
            },
            qx_yichao: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    return !event.player.hasHistory('damage');
                },
                round: 1,
                logTarget: 'player',
                async cost(event, trigger, player) {
                    const target = trigger.player,
                        control = await player
                            .chooseControl(lib.phaseName, 'cancel2')
                            .set('ai', () => {
                                const { player, target, controls } = get.event(),
                                    att = get.attitude(player, target);
                                if (att > 0) return controls.includes('phaseDraw') ? 'phaseDraw' : 'cancel2';
                                if (att < 0 && target.needsToDiscard() && controls.includes('phaseDiscard')) return 'phaseDiscard';
                                return target.hasCard((card) => player.hasValueTarget(card), 'hs') && controls.includes('phaseUse') ? 'phaseUse' : 'cancel2';
                            })
                            .set('prompt', get.prompt2(event.skill, target))
                            .set('target', target)
                            .forResult('control');
                    event.result = { bool: control && control !== 'cancel2', cost_data: control };
                },
                content() {
                    if (trigger.player !== player) player.addTempSkill('qx_yichao_control');
                    trigger.phaseList.splice(trigger.num, 0, [event.cost_data, event.name + player.playerid].join('|'));
                },
                subSkill: {
                    control: {
                        charlotte: true,
                        trigger: {
                            get player() {
                                return (lib.phaseName ?? []).map((i) => [i + 'Before', i + 'After']).flat();
                            },
                        },
                        filter(event, player) {
                            if (event.player === player) return false;
                            const extraPhaseReason = event._extraPhaseReason;
                            if (!extraPhaseReason?.startsWith('qx_yichao')) return false;
                            return (_status.connectMode ? lib.playerOL : game.playerMap)[extraPhaseReason.slice('qx_yichao'.length)] === player;
                        },
                        forced: true,
                        popup: false,
                        content() {
                            const target = trigger.player;
                            if (event.triggername.endsWith('Before')) {
                                target._trueMe = player;
                                game.addGlobalSkill('autoswap');
                                if (target === game.me) {
                                    game.notMe = true;
                                    if (!_status.auto) ui.click.auto();
                                }
                            } else {
                                delete target._trueMe;
                                if (target === game.me) {
                                    if (!game.notMe) game.swapPlayerAuto(target._trueMe);
                                    else delete game.notMe;
                                    if (_status.auto) ui.click.auto();
                                }
                            }
                        },
                    },
                },
            },
            qx_chizheng: {
                dutySkill: true,
                audio: 'ext:群星荟萃/audio/skill:2',
                inherit: 'qx_chizheng_rewrite',
                group: ['qx_chizheng_achieve', 'qx_chizheng_fail'],
                subSkill: {
                    zhengsu: {
                        charlotte: true,
                        audio: 'qx_chizheng',
                        trigger: { player: 'phaseDiscardEnd' },
                        getIndex(event, player, triggername) {
                            return player.getStorage('qx_chizheng_zhengsu');
                        },
                        forced: true,
                        async content(event, trigger, player) {
                            player.unmarkAuto(event.name, event.indexedData);
                            const goon = (event.goon = player.storage[event.indexedData]);
                            if (!goon) {
                                player.popup('整肃失败', 'fire');
                                game.log(player, '整肃失败');
                                return;
                            }
                            player.popup('整肃成功', 'wood');
                            game.log(player, '整肃成功');
                            await player.chooseDrawRecover(2, '整肃奖励:选择摸两张牌或回复1点体力', true);
                        },
                    },
                    achieve: {
                        audio: 'qx_chizheng',
                        trigger: { player: 'qx_chizheng_zhengsuAfter' },
                        filter(event, player) {
                            let zhengsuEvent = game.getAllGlobalHistory('everything', (evt) => evt.name === event.name && evt.player === event.player, event);
                            if (zhengsuEvent.length < 3) return false;
                            zhengsuEvent = [...zhengsuEvent].reverse().slice(0, 3);
                            return zhengsuEvent.every((evt) => evt.goon) && zhengsuEvent.reduce((list, evt) => list.add(evt.indexedData), []).length === 3;
                        },
                        forced: true,
                        async content(event, trigger, player) {
                            player.awakenSkill('qx_chizheng');
                            game.log(player, '成功完成使命');
                            let list = [],
                                skills = ['qx_huangdi'];
                            if (get.mode() === 'guozhan') {
                                list.addArray(
                                    Object.keys(lib.characterPack.mode_guozhan).filter((i) => {
                                        if (i.indexOf('gz_jun') === 0 || lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                        return lib.character[i];
                                    })
                                );
                            } else if (_status.connectMode) list = get.charactersOL();
                            else {
                                list.addArray(
                                    Object.keys(lib.character).filter((i) => {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                        return lib.character[i];
                                    })
                                );
                            }
                            for (const name of list) {
                                for (const skill of get.character(name)?.skills ?? []) {
                                    if (player.getSkills(null, false, false).includes(skill) || skills.includes(skill)) continue;
                                    const info = get.info(skill);
                                    if (!info || info.charlotte || info.init || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                                    if (info.zhuSkill) skills.add(skill);
                                }
                            }
                            if (skills.length) {
                                const links = await player
                                    .chooseButton(
                                        [
                                            get.translation(event.name) + ':请选择你要获得的技能',
                                            [
                                                skills.map((skill) => {
                                                    return [skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>'];
                                                }),
                                                'textbutton',
                                            ],
                                        ],
                                        true
                                    )
                                    .set('ai', (button) => get.skillRank(button.link))
                                    .forResult('links');
                                if (links?.length) await player.addSkills(links);
                            }
                        },
                    },
                    fail: {
                        audio: 'qx_chizheng',
                        trigger: { player: 'dying' },
                        forced: true,
                        content() {
                            player.awakenSkill('qx_chizheng');
                            game.log(player, '使命失败');
                        },
                    },
                },
            },
            qx_chizheng_rewrite: {
                audio: 'qx_chizheng',
                trigger: { player: 'phaseUseBegin' },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt(event.skill), lib.translate.qx_chizheng_rewrite_info)
                        .set('ai', (target) => {
                            const player = get.player(),
                                att = get.attitude(player, target);
                            return Math.max(get.effect(player, { name: 'draw' }, target, player) * 2, ...target.getCards('hs', { name: 'sha' }).map((card) => Math.sign(att) * target.getUseValue(card, false)));
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        str = get.translation(player),
                        skill = event.name;
                    const bool = await target
                        .chooseToUse(
                            function (card, player, event) {
                                if (card.name !== 'sha') return false;
                                return lib.filter.cardEnabled.apply(this, arguments);
                            },
                            get.translation(skill) + ':是否使用一张【杀】？'
                        )
                        .set('filterTarget', lib.filter.targetEnabled)
                        .set('addCount', false)
                        .forResult('bool');
                    if (bool) return event.finish();
                    const result = await target
                        .chooseControl()
                        .set('prompt', get.translation(skill) + ':请选择一项')
                        .set('choiceList', [(target === player ? '' : '令' + str) + '摸两张牌', (target === player ? '' : '令' + str) + '执行整肃'])
                        .set('att', get.attitude(target, player))
                        .set('ai', () => (get.event().att > 0 ? 0 : 1))
                        .forResult();
                    target.line(player);
                    if (result.index === 0) await player.draw(2);
                    else {
                        const zhengsu = await player
                            .chooseButton([get.prompt('spyanji'), [['zhengsu_leijin', 'zhengsu_bianzhen', 'zhengsu_mingzhi'].filter((i) => !player.hasSkill(i)), 'vcard']], true)
                            .set('ai', () => Math.random())
                            .forResult('links');
                        if (Array.isArray(zhengsu) && zhengsu.length) {
                            const name = zhengsu[0][2];
                            player.popup(name, 'thunder');
                            player.addTempSkill(['qx_chizheng_zhengsu', name], { player: ['phaseDiscardAfter', 'phaseAfter'] });
                            player.markAuto('qx_chizheng_zhengsu', [name]);
                        }
                    }
                },
            },
            qx_huangdi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return game.hasPlayer((target) => {
                        if (player.getStorage('qx_huangdi').includes(target)) return false;
                        return (player.hasSkill('qx_chizheng', null, null, false) && player.storage.qx_chizheng) || !target.hasSkill('bazhen', null, null, false);
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(
                            get.prompt(event.skill),
                            (card, player, target) => {
                                if (player.getStorage('qx_huangdi').includes(target)) return false;
                                return (player.hasSkill('qx_chizheng', null, null, false) && player.storage.qx_chizheng) || !target.hasSkill('bazhen', null, null, false);
                            },
                            lib.translate[event.skill + '_info'].split('①')[1].split('②')[0]
                        )
                        .set('ai', (target) => {
                            const player = get.player();
                            return get.attitude(player, target);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.markAuto(event.name, [target]);
                    let list = [],
                        choiceList = [],
                        skill;
                    if (player.hasSkill('qx_chizheng', null, null, false) && player.storage.qx_chizheng) {
                        let history = player.getAllHistory('useSkill', (evt) => ['qx_chizheng_achieve', 'qx_chizheng_fail'].includes(evt.skill));
                        if (history.length) {
                            skill = history[history.length - 1].skill;
                            list.push('饬政');
                            choiceList.push((target === player ? '' : '令' + get.translation(player)) + (skill.endsWith('achieve') ? '修改【饬政】为非使命技且仅保留使命分支效果' : '复原【饬政】'));
                        }
                    }
                    if (!target.hasSkill('bazhen', null, null, false)) {
                        list.push('八阵');
                        choiceList.push('获得【八阵】,将势力变更至蜀');
                    }
                    const result =
                        choiceList.length > 1
                            ? await target
                                .chooseControl(list)
                                .set('ai', () => 0)
                                .set('choiceList', choiceList)
                                .set('source', player)
                                .set('prompt', get.translation(event.name) + ':请选择一项')
                                .forResult()
                            : { control: list[0] };
                    if (result.control === '饬政') {
                        player.popup('qx_chizheng');
                        if (skill.endsWith('achieve')) {
                            player.removeSkill('qx_chizheng');
                            player.addSkill('qx_chizheng_rewrite');
                            game.log(player, '修改了技能', '#g【' + get.translation('qx_chizheng') + '】');
                        } else {
                            player.restoreSkill('qx_chizheng');
                            game.log(player, '复原了技能', '#g【' + get.translation('qx_chizheng') + '】');
                        }
                    } else {
                        await target.addSkills('bazhen');
                        await target.changeGroup('shu');
                    }
                },
                zhuSkill: true,
                intro: { content: '已对$发动过此技能' },
                derivation: 'bazhen',
                group: 'qx_huangdi_zhuisi',
                subSkill: {
                    zhuisi: {
                        audio: 'qx_huangdi',
                        enable: 'phaseUse',
                        filter(event, player) {
                            if (player.storage.qx_huangdi_zhuisi) return false;
                            return game.dead.some((target) => target.group === 'shu' && target.getStockSkills(true, true).some((i) => get.info(i) && !get.info(i).charlotte));
                        },
                        filterTarget(card, player, target) {
                            if (!target.isDead()) return false;
                            return target.getStockSkills(true, true).some((i) => get.info(i) && !get.info(i).charlotte);
                        },
                        selectTarget() {
                            const event = get.event(),
                                player = get.player();
                            const func = () => {
                                const targets = game.dead.filter((target) => target.group === 'shu' && target.getStockSkills(true, true).some((i) => get.info(i) && !get.info(i).charlotte));
                                for (const target of targets) {
                                    const skills = target.getStockSkills(true, true).filter((skill) => get.info(skill) && !get.info(skill).charlotte);
                                    target.prompt(skills.map((i) => get.translation(i)).join('<br>'));
                                }
                            };
                            if (event.player == game.me) func();
                            else if (event.isOnline()) player.send(func);
                            return [1, 1];
                        },
                        prompt: '获得一名已阵亡角色的武将牌上的所有技能,然后失去武将牌上的所有技能',
                        deadTarget: true,
                        async content(event, trigger, player) {
                            const target = event.target;
                            player.storage[event.name] = true;
                            await player.changeSkills(
                                target.getStockSkills(true, true).filter((skill) => get.info(skill) && !get.info(skill).charlotte),
                                ['qx_chizheng_rewrite'].concat(player.getStockSkills(true, true).filter((skill) => get.info(skill) && !get.info(skill).charlotte))
                            );
                        },
                        ai: {
                            result: {
                                player(player, target) {
                                    return (
                                        target.getStockSkills(true, true).reduce((sum, skill) => {
                                            if (!(get.info(skill) && !get.info(skill).charlotte)) return sum;
                                            return sum + get.skillRank(skill);
                                        }, 0) -
                                        player.getStockSkills(true, true).reduce((sum, skill) => {
                                            if (!(get.info(skill) && !get.info(skill).charlotte)) return sum;
                                            return sum + get.skillRank(skill);
                                        }, 0)
                                    );
                                },
                            },
                        },
                    },
                },
            },
            qx_wenhui: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'useCard' },
                filter(event, player) {
                    if (event.all_excluded || event.player === player) return false;
                    return event.player.getHistory('useCard').indexOf(event) == 1 && ['basic', 'trick'].includes(get.type(event.card));
                },
                check(event, player) {
                    return get.info('sbkanpo').subSkill.kanpo.check(event, player);
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    trigger.targets.length = 0;
                    trigger.all_excluded = true;
                    game.log(trigger.card, '被无效了');
                    if (trigger.cards?.someInD()) {
                        const skill = event.name + '_effect';
                        player.addSkill(skill);
                        const next = player.gain(trigger.cards.filterInD(), 'gain2');
                        next.gaintag.add(skill);
                        await next;
                    }
                },
                global: 'qx_wenhui_ai',
                subSkill: {
                    ai: {
                        mod: {
                            aiOrder(player, card, num) {
                                if (
                                    player.getHistory('useCard').length > 1 ||
                                    !game.hasPlayer((current) => {
                                        return current !== player && (get.realAttitude || get.attitude)(current, player) < 0 && current.hasSkill('qx_wenhui');
                                    })
                                )
                                    return;
                                if (player.getHistory('useCard').length === 0) {
                                    if (['basic', 'trick'].includes(get.type(card))) return num + 10;
                                    return;
                                }
                                if (!['basic', 'trick'].includes(get.type(card))) return num + 10;
                                if (!player._qx_wenhui_temp) {
                                    player._qx_wenhui_temp = true;
                                    num /= Math.max(1, player.getUseValue(card));
                                }
                                delete player._qx_wenhui_temp;
                                return num;
                            },
                        },
                    },
                    effect: {
                        charlotte: true,
                        mod: {
                            ignoredHandcard(card) {
                                if (card.hasGaintag('qx_wenhui_effect')) return true;
                            },
                            cardDiscardable(card, player, name) {
                                if (name === 'phaseDiscard' && card.hasGaintag('qx_wenhui_effect')) return false;
                            },
                        },
                    },
                },
            },
            qx_shuyi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    return event.source?.isIn();
                },
                forced: true,
                logTarget: 'source',
                async content(event, trigger, player) {
                    const source = trigger.source,
                        str = get.translation(player);
                    const result = await source.chooseToDiscard('弃置一张手牌且本回合不能对' + str + '使用牌,或令' + str + '摸一张牌').forResult();
                    if (result?.bool) {
                        source.addTempSkill('qx_shuyi_effect');
                        source.markAuto('qx_shuyi_effect', [source]);
                    } else await player.draw();
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        intro: { content: '不能对$使用牌' },
                        mod: {
                            playerEnabled(card, player, target) {
                                if (player.getStorage('qx_shuyi_effect').includes(target)) return false;
                            },
                        },
                    },
                },
            },
            qx_qianci: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'dying' },
                filter(event, player) {
                    return player.isMinHandcard();
                },
                limited: true,
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    await player.drawTo(player.maxHp);
                    await player.recoverTo(player.maxHp);
                    const names = get.nameList(player).filter((name) => get.character(name).skills?.includes(event.name));
                    if (!names.length) return event.finish();
                    if (!_status.characterlist) get.info('pingjian').initList();
                    const characters = _status.characterlist.filter((name) => ['王元姬', '羊徽瑜'].includes(get.rawName(name)));
                    const result =
                        characters.length > 1
                            ? await player
                                .chooseButton([get.translation(event.name) + ':请选择你要替换的武将牌', [characters, 'character']], true)
                                .set('ai', (button) => get.rank(button.link, true))
                                .forResult()
                            : { bool: true, links: characters };
                    if (result?.bool && result.links?.length) {
                        const character = result.links[0];
                        for (const name of names) await player.reinitCharacter(name, character);
                    }
                },
            },
            qx_tanze: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    if (!game.hasPlayer((target) => target !== player && !player.getStorage('qx_tanze_used').includes(target))) return false;
                    return get.inpileVCardList((info) => ['basic', 'trick'].includes(get.type(info[2]))).some((item) => event.filterCard({ name: item[2], nature: item[3] }, player, event));
                },
                chooseButton: {
                    dialog(event, player) {
                        const list = get.inpileVCardList((info) => ['basic', 'trick'].includes(get.type(info[2])));
                        return ui.create.dialog('探赜', [list, 'vcard'], 'hidden');
                    },
                    filter(button, player) {
                        return player.hasUseTarget({ name: button.link[2], nature: button.link[3] });
                    },
                    check(button) {
                        const player = get.player();
                        return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    },
                    prompt(links) {
                        return '###探赜###请选择' + get.translation(links[0][3] || '') + '【' + get.translation(links[0][2]) + '】的目标';
                    },
                    backup(links) {
                        return {
                            filterCard: () => false,
                            selectCard: -1,
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            async precontent(event, trigger, player) {
                                const targets = game.filterPlayer((target) => target !== player && !player.getStorage('qx_tanze_used').includes(target));
                                const result2 =
                                    targets.length > 1
                                        ? await player
                                            .chooseTarget(
                                                '请选择一名其他角色,弃置其装备区内的一张牌,视为使用此牌',
                                                (card, player, target) => {
                                                    return target !== player && !player.getStorage('qx_tanze_used').includes(target);
                                                },
                                                true
                                            )
                                            .set('ai', (target) => {
                                                const player = get.player();
                                                return get.effect(target, { name: 'guohe_copy', position: 'e' }, player, player);
                                            })
                                            .forResult()
                                        : { bool: true, targets: targets };
                                if (result2?.bool && result2.targets?.length) {
                                    const target = result2.targets[0];
                                    if (target.storage.qx_tanze_effect?.[player.playerid]) {
                                        delete target.storage.qx_tanze_effect[player.playerid];
                                    }
                                    player.addTempSkill('qx_tanze_used', 'phaseUseAfter');
                                    player.markAuto('qx_tanze_used', [target]);
                                    const result = await player.discardPlayerCard(target, 'e', true).forResult();
                                    if (result?.bool && result.cards?.length) {
                                        target.addSkill('qx_tanze_effect');
                                        target.storage.qx_tanze_effect[player.playerid] = result.cards
                                            .map((card) => get.subtypes(card))
                                            .flat()
                                            .unique();
                                        return;
                                    }
                                }
                                const evt = event.parent;
                                evt.set('dcshizong', true);
                                evt.goto(0);
                            },
                        };
                    },
                },
                subSkill: {
                    backup: {},
                    used: {
                        charlotte: true,
                    },
                    effect: {
                        charlotte: true,
                        init(player, skill) {
                            player.storage[skill] ??= {};
                        },
                        mod: {
                            cardUsable(card, player) {
                                if (Object.values(player.storage.qx_tanze_effect).flat().includes(get.subtypes(card))) return false;
                            },
                            cardSavable(card, player) {
                                if (Object.values(player.storage.qx_tanze_effect).flat().includes(get.subtypes(card))) return false;
                            },//QQQ
                        },
                    },
                },
                ai: {
                    order(item, player) {
                        const event = get.event();
                        player = player || event.player;
                        if (!player) return 1;
                        let list = get.inpileVCardList((info) => ['basic', 'trick'].includes(get.type(info[2]))).filter((item) => event.filterCard({ name: item[2], nature: item[3] }, player, event));
                        list.sort((a, b) => player.getUseValue({ name: b[2], nature: b[3] }) - player.getUseValue({ name: a[2], nature: a[3] }));
                        const order = get.order({ name: list[0][2], nature: list[0][3] });
                        return order > 0 ? order + 0.1 : order;
                    },
                    result: {
                        player(player) {
                            if (_status.event.type === 'dying') return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            qx_duantuan: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return game.hasPlayer((target) => !player.inRange(target));
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(
                            '请选择【' + get.translation(event.skill) + '】的目标',
                            (card, player, target) => {
                                return !player.inRange(target);
                            },
                            true,
                            lib.translate[event.skill + '_info']
                        )
                        .set('ai', (target) => {
                            const player = get.player();
                            return -get.attitude(player, target);
                        })
                        .forResult();
                },
                content() {
                    player.addTempSkill('qx_duantuan_effect', 'roundStart');
                    player.markAuto('qx_duantuan_effect', event.targets);
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        intro: { content: '集火$!' },
                        trigger: { global: ['useCard2', 'dieAfter'] },
                        filter(event, player) {
                            const targets = player.getStorage('qx_duantuan_effect');
                            if (event.name === 'useCard') {
                                if (!(event.card.name === 'sha' || (get.type(event.card) === 'trick' && get.tag(event.card, 'damage') >= 0.5))) return false;
                                return game.hasPlayer((target) => target !== event.player && targets.includes(target) && lib.filter.targetEnabled2(event.card, player, target));
                            }
                            return true;
                        },
                        forced: true,
                        logTarget(event, player) {
                            return (() => {
                                const targets = player.getStorage('qx_duantuan_effect');
                                if (event.name === 'useCard') return game.filterPlayer((target) => target !== event.player && targets.includes(target) && lib.filter.targetEnabled2(event.card, player, target));
                                return game.filterPlayer((target) => target.getRoundHistory('sourceDamage', (evt) => evt.player === event.player).length, [player]);
                            })().sortBySeat();
                        },
                        content() {
                            if (trigger.name === 'useCard') {
                                trigger.targets.addArray(event.targets);
                                game.log(event.targets, '成为了', trigger.card, '的额外目标');
                            } else game.asyncDraw(event.targets);
                        },
                    },
                },
            },
            // 准备阶段,你可与一名其他角色依次执行以下效果:①重铸一张牌;②交换一张牌;③展示一张牌.你与其每有一项执行效果所选卡牌与以下序号相同:①颜色;②类型;③字数;你本回合摸牌阶段的摸牌数+1
            qx_yuanhe: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return (
                        player.hasCard((card) => player.canRecast(card), 'he') &&
                        game.hasPlayer(
                            (target) =>
                                target !== player &&
                                target.hasCard((card) => {
                                    if (get.position(card) === 'h' && _status.connectMode) return true;
                                    return target.canRecast(card);
                                }, 'he')
                        )
                    );
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), (card, player, target) => {
                            return target.hasCard((card) => {
                                if (get.position(card) === 'h' && _status.connectMode) return true;
                                return target.canRecast(card);
                            }, 'he');
                        })
                        .set('ai', (target) => {
                            const player = get.player();
                            return get.attitude(player, target);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    const filter = [
                        ['he', (card, player) => player.canRecast(card), '请重铸一张牌'],
                        ['he', () => true, '请选择交换的牌'],
                        ['h', () => true, '请选择展示的牌'],
                    ];
                    const bool = ['color', 'type2', 'cardNameLength'];
                    for (let count = 0; count < filter.length; count++) {
                        if ([player, target].every((current) => current.hasCard((card) => filter[count][1](card, current), filter[count][0]))) {
                            const list = [];
                            for (const npc of [player, target]) {
                                const { cards } = await npc.chooseCard(true, ...filter[count])
                                    .set('ai', (c) => - get.value(c)).forResult();
                                if (cards?.length) {
                                    list.push(cards[0]);
                                }
                            }//QQQ
                            if (list.length > 1) {
                                switch (count) {
                                    case 0:
                                        for (const card of list) {
                                            const owner = get.owner(card);
                                            if (owner) {
                                                await owner.recast(card);
                                            }
                                        }
                                        break;
                                    case 1:
                                        await game
                                            .loseAsync({
                                                player: player,
                                                target: target,
                                                cards1: [list[0]],
                                                cards2: [list[1]],
                                            })
                                            .setContent('swapHandcardsx');
                                        await game
                                            .loseAsync({
                                                gain_list: [
                                                    [player, [list[1]]],
                                                    [target, [list[0]]],
                                                ],
                                            })
                                            .setContent('gaincardMultiple');
                                        break;
                                    case 2:
                                        for (const card of list) {
                                            const owner = get.owner(card);
                                            if (owner) {
                                                await owner.showCards(card);
                                            }
                                        }
                                        break;
                                }
                                if (list.map((card) => get[bool[count]](card)).unique().length === 1) {
                                    player.addTempSkill(event.name + '_effect');
                                    player.addMark(event.name + '_effect', 1, false);
                                }
                            }
                        }
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        intro: { content: '摸牌阶段额外摸#张牌' },
                        trigger: { player: 'phaseDrawBegin2' },
                        forced: true,
                        popup: false,
                        content() {
                            trigger.num += player.countMark(event.name);
                        },
                    },
                },
            },
            qx_yilv: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                usable: 1,
                async content(event, trigger, player) {
                    await player.loseHp();
                    const phase = player.getHistory('useCard', (evt) => evt.getParent('phaseUse') === event.getParent(2) && get.type(evt.card) !== 'basic').length;
                    const result =
                        phase !== player.countCards('h')
                            ? await player
                                .chooseControl()
                                .set('choiceList', ['将手牌数调整至' + get.cnNumber(phase) + '张', '获得一个描述包含<回复体力>的技能直到下个回合开始'])
                                .set('phase', phase)
                                .set('ai', () => {
                                    const { player, phase } = get.event();
                                    return player.countCards('h') < phase ? 0 : 1;
                                })
                                .forResult()
                            : { index: 1 };
                    if (result.index === 0) {
                        if (player.countCards('h') < phase) await player.drawTo(phase);
                        else await player.chooseToDiscard(player.countCards('h') - phase, true);
                    } else {
                        let list = [],
                            skills = [];
                        if (get.mode() === 'guozhan') {
                            list.addArray(
                                Object.keys(lib.characterPack.mode_guozhan).filter((i) => {
                                    if (i.indexOf('gz_jun') === 0 || lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                    return lib.character[i];
                                })
                            );
                        } else if (_status.connectMode) list = get.charactersOL();
                        else {
                            list.addArray(
                                Object.keys(lib.character).filter((i) => {
                                    if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                    return lib.character[i];
                                })
                            );
                        }
                        for (const name of list) {
                            for (const skill of get.character(name)?.skills ?? []) {
                                if (player.getSkills(null, false, false).includes(skill) || skills.includes(skill)) continue;
                                const info = get.info(skill);
                                if (!info || info.charlotte || info.init || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                                if (get.plainText(get.skillInfoTranslation(skill)).includes('回复体力')) skills.add(skill);
                            }
                        }
                        if (skills.length) await player.addTempSkills(skills.randomGet(), { player: 'phaseBegin' });
                    }
                },
                ai: {
                    order: 1,
                    result: { player: (player) => player.getHp() - 1 },
                },
            },
            qx_wenjue: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                usable: 1,
                async content(event, trigger, player) {
                    await player.damage(1, 'fire');
                    const result = !player.hasSkill('qx_guixin', null, null, false) ? await player.chooseControl('摸牌阶段', '获得技能').set('prompt', '选择执行一个摸牌阶段或者于本回合获得技能【劌心】').forResult() : { index: 1 };
                    if (result.index === 0) await player.phaseDraw();
                    else await player.addTempSkills('qx_guixin');
                },
                derivation: 'qx_guixin',
                ai: {
                    order: 7,
                    result: { player: (player) => player.getHp() - 1 },
                },
            },
            qx_guixin: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    const storage = player.getStorage('qx_guixin_used');
                    return player.countDiscardableCards(player, 'he', (card) => !player.hasUseTarget(card, null, true)) > (storage.length ? Math.min(...storage) : 0);
                },
                filterCard(card, player) {
                    return lib.filter.cardDiscardable(card, player) && !player.hasUseTarget(card, null, true);
                },
                selectCard() {
                    const player = get.player(),
                        storage = player.getStorage('qx_guixin_used');
                    return [(storage.length ? Math.min(...storage) : 0) + 1, Infinity];
                },
                position: 'he',
                check(card) {
                    return 7 - get.value(card);
                },
                prompt: () => lib.translate.qx_guixin_info.split('②')[0].slice(1),
                async content(event, trigger, player) {
                    player.addTempSkill('qx_guixin_used');
                    player.markAuto('qx_guixin_used', [event.cards.length]);
                    const result = await player
                        .chooseControl('顺时针', '逆时针')
                        .set('prompt', '请选择执行顺序')
                        .set('ai', () => (get.player().getHp() > 1 ? get.rand(0, 1) : 0))
                        .forResult();
                    let list = get.info(event.name).list.slice();
                    if (event.cards.length === list.length) delete player.storage.qx_guixin_damage;
                    else player.storage.qx_guixin_damage = list.slice(event.cards.length, list.length);
                    if (result.index === 1) list.reverse();
                    for (const item of list.slice(0, event.cards.lengh)) await item[1](player);
                },
                ai: {
                    order: 7,
                    result: { player: 1 },
                },
                list: [
                    ['废除一个装备栏', async (player) => player.chooseToDisable(), (target, player) => -get.attitude(player, target) * (target.countCards('e') + 1)],
                    ['回复1点体力', async (player) => player.recover(), (player, source) => get.recoverEffect(player, source, source)],
                    ['摸三张牌', async (player) => player.draw(3), (player, source) => get.recoverEffect(player, source, source)],
                    ['失去1点体力', async (player) => player.loseHp(), (player, source) => get.effect(player, { name: 'losehp' }, source, source)],
                ],
                group: ['qx_guixin_damage'],
                subSkill: {
                    used: {
                        charlotte: true,
                    },//QQQ
                    damage: {
                        audio: 'qx_guixin',
                        trigger: { player: 'damageEnd' },
                        filter(event, player) {
                            return Array.isArray(player.storage.qx_guixin_damage) && player.storage.qx_guixin_damage.length;
                        },
                        async cost(event, trigger, player) {
                            const list = player.storage[event.skill];
                            event.result = await player
                                .chooseTarget(get.prompt(event.skill), '与一名其他角色执行上次的未执行项(' + list.map((i) => i[0]).join('、') + ')', lib.filter.notMe)
                                .set('ai', (target) => {
                                    const { player, list } = get.event();
                                    return [player, target].reduce((sum, current) => sum + list.reduce((num, item) => num + item[2](current, player), 0), 0);
                                })
                                .set('list', list)
                                .forResult();
                        },
                        async content(event, trigger, player) {
                            const target = event.targets[0],
                                list = player.storage[event.name];
                            for (const current of [player, target]) {
                                for (const item of list) await item[1](current);
                            }
                        },
                    },
                },
            },
            qx_jieyi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                filter(event, player) {
                    if (!player.hasDisabledSlot()) return false;
                    return event.getl(player).es.length;
                },
                forced: true,
                async content(event, trigger, player) {
                    const num = player.countDisabledSlot();
                    await player.draw(num);
                    const juedou = new lib.element.VCard({ name: 'juedou', storage: { qx_jieyi: num } });
                    if (player.hasUseTarget(juedou)) await player.chooseUseTarget(juedou, true, false).set('oncard', () => get.player().addTempSkill('qx_jieyi_global'));
                },
                mod: {
                    playerEnabled(card, player, target) {
                        if (card?.storage?.qx_jieyi > 0 && target.getHp() > player.getHp()) return false;
                    },
                },
                subSkill: {
                    global: {
                        charlotte: true,
                        global: 'qx_jieyi_juedou',
                    },
                    juedou: {
                        charlotte: true,
                        trigger: { player: 'chooseToRespondBegin' },
                        filter(event, player) {
                            const evt = event.parent;
                            return evt.name === 'juedou' && evt.card?.storage?.qx_jieyi > 0;
                        },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            trigger.untrigger();
                            trigger.set('responded', true);
                            const evt = trigger.parent,
                                num = evt.card.storage.qx_jieyi;
                            const next = player.chooseToDiscard(num, 'he');
                            next.set('prompt', '是否弃置' + get.cnNumber(num) + '张牌响应【' + get.translation(evt.card) + '】？');
                            if (evt.shaRequired > 1) next.set('prompt2', '共需打出' + evt.shaRequired + '张【杀】');
                            next.set('ai', (card) => {
                                const { event, splayer: player, starget: target, tdamage, pdamage } = get.event();
                                if (player.hasSkillTag('notricksource') || target.hasSkillTag('notrick')) return 0;
                                if (event.shaRequired > 1 && player.countCards('h', 'sha') < event.shaRequired) return 0;
                                if (event.player === target) {
                                    if (tdamage >= 0) return -1;
                                    if (get.attitude(target, player) <= 0 || (event.player.hp <= 1 && tdamage < pdamage)) return get.order(card);
                                    return -1;
                                }
                                if (pdamage >= 0) return -1;
                                if (get.attitude(player, target) <= 0 || (event.player.hp <= 1 && tdamage > pdamage)) return get.order(card);
                                return -1;
                            });
                            next.set('splayer', player);
                            next.set('starget', evt.target);
                            next.set('pdamage', get.damageEffect(player, evt.target, evt.turn));
                            next.set('tdamage', get.damageEffect(evt.target, player, evt.turn));
                            next.set('shaRequired', evt.shaRequired);
                            next.set('respondTo', [player, evt.card]);
                            next.set('source', evt.turn === evt.target ? player : evt.target);
                            const result = await next.forResult();
                            trigger.result = { bool: result?.bool, card: { name: 'sha' } };
                        },
                    },
                },
            },
            qx_linan: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'dyingAfter' },
                filter(event, player) {
                    return player.hasCard((card) => player.canRecast(card), 'h');
                },
                forced: true,
                async content(event, trigger, player) {
                    const cards = player.getCards('h', (card) => player.canRecast(card));
                    await player.recast(cards);
                    if (cards.some((i) => get.type(i) === 'basic')) await player.recover(cards.filter((i) => get.type(i) === 'basic').length);
                    if (cards.some((i) => get.type(i) === 'equip')) {
                        const num = Math.min(player.countDisabledSlot(), cards.filter((i) => get.type(i) === 'equip').length);
                        if (num > 0) {
                            let list = [];
                            for (let i = 1; i < 6; i++) {
                                if (player.hasDisabledSlot(i)) {
                                    for (let j = 0; j < player.countDisabledSlot(i); j++) {
                                        list.push('equip' + i);
                                    }
                                }
                            }
                            const { bool, links } = await player.chooseButton(['请选择你要回复的装备栏', [list.map((i) => [i, get.translation(i)]), 'tdnodes']], Math.min(list.length, num), true).set('ai', (button) => ['equip5', 'equip4', 'equip1', 'equip3', 'equip2'].indexOf(button.link) + 2).forResult();
                            if (bool) await player.enableEquip(links);
                        }
                    }
                },
            },
            qx_feihua: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'damageBegin3' },
                filter(event, player) {
                    return (
                        player.hasCard((card) => {
                            if (get.position(card) === 'h' && _status.connectMode) return true;
                            return card.suit === 'heart' && lib.filter.cardDiscardable(card, player);
                        }, 'he') && event.num > 0
                    );
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseCardTarget({
                        prompt: get.prompt(event.skill),
                        prompt2: '弃置一张♥️️️牌,将伤害转移给一名其他角色',
                        filterCard(card, player) {
                            return card.suit === 'heart' && lib.filter.cardDiscardable(card, player);
                        },
                        position: 'he',
                        filterTarget: lib.filter.notMe,
                        ai1(card) {
                            return 10 - get.value(card);
                        },
                        ai2(target) {
                            const player = get.player(),
                                trigger = get.event().getTrigger();
                            return get.damageEffect(target, trigger.source, player, trigger.nature) - get.damageEffect(player, trigger.source, player, trigger.nature);
                        },
                    });
                },
                async content(event, trigger, player) {
                    await player.discard(event.cards);
                    await event.targets[0]
                        .damage(trigger.source ? trigger.source : 'nosource', trigger.nature, trigger.num)
                        .set('card', trigger.card)
                        .set('cards', trigger.cards);
                },
                ai: {
                    maixie_defend: true,
                    effect: {
                        target(card, player, target) {
                            if (player.hasSkillTag('jueqing', false, target)) return;
                            if (get.tag(card, 'damage') && target.countCards('h') > 1) return 0.7;
                        },
                    },
                    threaten(player, target) {
                        if (!target.countCards('h')) return 2;
                    },
                },
                group: 'qx_feihua_nanman',
                subSkill: {
                    nanman: {
                        audio: 'qx_feihua',
                        trigger: { target: 'useCardToTarget' },
                        filter(event, player) {
                            return get.type2(event.card) === 'trick';
                        },
                        check(event, player) {
                            return (
                                event.targets.reduce((sum, target) => {
                                    sum + get.effect(target, { name: 'nanman' }, player, player);
                                    sum - get.effect(target, event.card, player, player);
                                    return sum;
                                }, 0) > 0
                            );
                        },
                        prompt2: () => '将此牌效果改为【南蛮入侵】并摸一张牌',
                        content() {
                            player.addTempSkill('qx_feihua_effect');
                            trigger.card.qx_feihua = true;
                            player.draw();
                        },
                    },
                    effect: {
                        charlotte: true,
                        trigger: { global: 'useCardToBefore' },
                        filter(event, player) {
                            return event.type === 'card' && event.card.qx_feihua;
                        },
                        forced: true,
                        popup: false,
                        firstDo: true,
                        _priority: 100,
                        content() {
                            trigger.setContent(lib.card.nanman.content);
                        },
                    },
                },
            },
            qx_zhuye: {
                audio: 'ext:群星荟萃/audio/skill:3',
                trigger: {
                    player: ['loseAfter', 'qx_zhuyeEffect'],
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                filter(event, player, name) {
                    if (!(name === 'qx_zhuyeEffect' || (event.getl?.(player)?.hs ?? []).length || (event.getg?.(player) ?? []).length)) return false;
                    return game.hasPlayer((target) => target.countCards('he') > 0);
                },
                async cost(event, trigger, player) {
                    let choice = [],
                        choiceList = [],
                        lastChoice = player.storage[event.skill + '_used'];
                    if (lastChoice !== '攻心' && game.hasPlayer((target) => target !== player && target.countCards('h'))) {
                        choice.push('攻心');
                        choiceList.push('观看一名其他角色的至多三张手牌');
                    }
                    if (lastChoice !== '观骨' && game.hasPlayer((target) => target.hasCard((card) => target !== player || (get.type(card) !== 'basic' && player.hasUseTarget(card)), 'h'))) {
                        choice.push('观骨');
                        choiceList.push('使用一名角色的一张随机非基本牌');
                    }
                    if (lastChoice !== '奇袭' && game.hasPlayer((target) => target.countCards('he'))) {
                        choice.push('奇袭');
                        choiceList.push('令至多两名角色弃置一张牌');
                    }
                    const control = await player
                        .chooseControl(choice, 'cancel2')
                        .set('ai', () => {
                            const { player, controls } = get.event(),
                                map = {
                                    攻心: Math.max(
                                        ...game
                                            .filterPlayer((target) => {
                                                return target !== player && target.countCards('h');
                                            })
                                            .map((target) => get.effect(target, 'gongxin', player, player))
                                    ),
                                    观骨: Math.max(
                                        0,
                                        ...game
                                            .filterPlayer((target) =>
                                                target.hasCard((card) => {
                                                    return get.type(card) !== 'basic';
                                                }, 'h')
                                            )
                                            .map((target) => {
                                                const cards = target.getCards('h', (card) => get.type(card) !== 'basic');
                                                return cards.map((card) => player.getUseValue(card));
                                            })
                                            .flat()
                                    ),
                                    奇袭: (() => {
                                        let list = game.filterPlayer((target) => target.countCards('he')).map((target) => get.effect(target, { name: 'guohe_copy2' }, player, player));
                                        list.sort((a, b) => b - a);
                                        return list.filter((i) => i > 0).reduce((sum, i) => sum + i, 0);
                                    })(),
                                    cancel2: 0,
                                };
                            return controls.slice().sort((a, b) => map[b] - map[a])[0];
                        })
                        .set('choiceList', choiceList)
                        .set('prompt', get.prompt(event.skill))
                        .forResult('control');
                    if (!control || control === 'cancel2') {
                        event.result = { bool: false };
                        return;
                    }
                    let result;
                    switch (control) {
                        case '攻心':
                            result = await player
                                .chooseTarget(
                                    '观看一名角色的至多三张手牌',
                                    (card, player, target) => {
                                        return target !== player && target.countCards('h');
                                    },
                                    true
                                )
                                .set('ai', (target) => {
                                    const player = get.player();
                                    return get.effect(target, 'gongxin', player, player);
                                })
                                .forResult();
                            break;
                        case '观骨':
                            result = await player
                                .chooseTarget(
                                    '使用一名角色的一张随机非基本牌',
                                    (card, player, target) => {
                                        return target.hasCard((card) => target !== player || (get.type(card) !== 'basic' && player.hasUseTarget(card)), 'h');
                                    },
                                    true
                                )
                                .set('ai', (target) => {
                                    const player = get.player(),
                                        att = get.attitude(player, target),
                                        cards = target.getCards('h', (card) => get.type(card) !== 'basic');
                                    return (Math.sign(att) + 2) * Math.max(0, ...cards.map((card) => player.getUseValue(card)));
                                })
                                .forResult();
                            break;
                        case '奇袭':
                            result = await player
                                .chooseTarget('令至多两名角色弃置一张牌', (card, player, target) => target.countCards('he'), [1, 2], true)
                                .set('ai', (target) => {
                                    const player = get.player();
                                    return get.effect(target, { name: 'guohe_copy2' }, player, player);//QQQ
                                })
                                .forResult();
                            break;
                    }
                    event.result = { bool: true, targets: result.targets.sortBySeat(), cost_data: control };
                },
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        choice = event.cost_data;
                    player.storage[event.name + '_used'] = choice;
                    player.markAuto(event.name, [choice]);
                    switch (choice) {
                        case '攻心':
                            const result = await player.choosePlayerCard(target, 'h', [1, 3], true).forResult();
                            if (result?.bool && result.cards?.length) {
                                game.log(player, '观看了', target, '的部分手牌');
                                await player.chooseControl('ok').set('dialog', [get.translation(target) + '的部分手牌', result.cards]);
                            }
                            break;
                        case '观骨':
                            const cards = target.getCards('h', (card) => get.type(card) !== 'basic' && player.hasUseTarget(card));
                            if (cards.length) {
                                const card = cards.randomGet();
                                await player.chooseUseTarget(card, true, false);
                            }
                            break;
                        case '奇袭':
                            for (const i of event.targets) await i.chooseToDiscard('he', true);
                            break;
                    }
                    if (player.getStorage(event.name).length >= 3) {
                        player.unmarkSkill(event.name);
                        delete player.storage[event.name];
                        player.addSkill(event.name + '_effect');
                        player.addMark(event.name + '_effect', 1, false);
                    }
                },
                intro: { content: '已执行过$项' },
                init(player, skill) {
                    player.addSkill(skill + '_dist');
                },
                onremove(player, skill) {
                    player.removeSkill(skill + '_dist');
                },
                subSkill: {
                    dist: {
                        charlotte: true,
                        init: (player, skill) => lib.skill[skill].updateDistanceMap(player, skill),
                        updateDistanceMap: (player, skill) => (player.storage[skill] = player.getAttackRange()),
                        hasDistanceChanged(player, skill) {
                            let bool = player.storage[skill] !== player.getAttackRange();
                            lib.skill[skill].updateDistanceMap(player, skill);
                            return bool;
                        },
                        trigger: { global: ['logSkill', 'useSkillEnd', 'changeHp', 'equipEnd', 'changeSkillsEnd', 'phaseBefore', 'phaseAfter'] },
                        filter(event, player) {
                            const skill = 'qx_zhuye_dist';
                            return lib.skill[skill].hasDistanceChanged(player, skill);
                        },
                        forced: true,
                        popup: false,
                        content() {
                            event.trigger('qx_zhuyeEffect');
                        },
                    },
                    effect: {
                        charlotte: true,
                        intro: { content: '手牌上限+#,使用基本牌的次数+#' },
                        mod: {
                            maxHandcard(player, num) {
                                return num + player.countMark('qx_zhuye_effect');
                            },
                            cardUsable(card, player, num) {
                                if (get.type(card) === 'basic' && typeof num === 'number' && num !== Infinity) return num + player.countMark('qx_zhuye_effect');
                            },
                        },
                    },
                },
            },
            qx_lingzong: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'dying' },
                filter(event, player) {
                    return player.getHp() > 0;
                },
                forced: true,
                async content(event, trigger, player) {
                    await player.draw(player.getHp());
                    let list = [],
                        skills = [];
                    if (get.mode() === 'guozhan') {
                        list.addArray(
                            Object.keys(lib.characterPack.mode_guozhan).filter((i) => {
                                if (i.indexOf('gz_jun') === 0 || lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                return lib.character[i];
                            })
                        );
                    } else if (_status.connectMode) list = get.charactersOL();
                    else {
                        list.addArray(
                            Object.keys(lib.character).filter((i) => {
                                if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                return lib.character[i];
                            })
                        );
                    }
                    for (const name of list) {
                        for (const skill of get.character(name)?.skills ?? []) {
                            if (player.hasSkill(skill, null, false, false) || skills.includes(skill)) continue;
                            const info = get.info(skill);
                            if (!info || info.charlotte || info.init || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                            if (get.plainText(get.skillInfoTranslation(skill)).includes('【南蛮入侵】')) skills.add(skill);
                        }
                    }
                    if (skills.length) await player.addSkills(skills.randomGet());
                },
            },
        },
        dynamicTranslate: {
            qx_guice(player) {
                const storage = player.storage.qx_guice;
                let str = '转换技,当一名角色受到火属性伤害时:';
                if (!storage) str += '<span class="bluetext">';
                str += '阳:你可以令此伤害+1,然后弃置其一半手牌(向下取整);';
                if (!storage) str += '</span>';
                if (storage) str += '<span class="bluetext">';
                str += '阴:你可以令此伤害-1,然后观看其手牌并获得其中一种类型的所有牌';
                if (storage) str += '</span>';
                return str;
            },
            qx_quedi(player) {
                const storage = player.storage.qx_quedi;
                let str = '转换技.①游戏开始时,你可以自选此技能的阴阳状态.②当你使用【杀】或伤害类锦囊牌指定一名其他角色为目标后,你可以:';
                if (!storage) str += '<span class="bluetext">';
                str += '阳,令其失去当前拥有的所有武将牌上的技能,于此牌结算完毕后获得之,然后你摸其失去技能数张牌;';
                if (!storage) str += '</span>';
                if (storage) str += '<span class="bluetext">';
                str += '阴,将其区域里的所有牌移出游戏,于此牌结算完毕后获得之,然后此牌对其造成的伤害+其移去的牌数';
                if (storage) str += '</span>';
                return str;
            },
            qx_cien(player) {
                const storage = player.storage.qx_cien;
                let str = '转换技';
                if (!storage) str += '<span class="bluetext">';
                str += '阳,当你使用锦囊牌指定目标后,你可以摸X-1张牌,然后你将武将牌翻面;';
                if (!storage) str += '</span>';
                if (storage) str += '<span class="bluetext">';
                str += '阴,当你成为锦囊牌的目标后,你可以观看牌堆顶X张牌,然后你获得其中一种类别的所有牌';
                if (storage) str += '</span>';
                return str + '若你以此法获得的牌数大于你的体力上限,则你增加体力上限至本次获得的牌数(X为此牌目标数)';
            },
            qx_yinhu(player) {
                const storage = player.storage.qx_yinhu;
                let str = '转换技,锁定技.当一名角色造成伤害时:';
                if (!storage) str += '<span class="bluetext">';
                str += '阳,若其体力值为全场最大,则你与其各摸两张牌,你以此法获得的牌均视为【酒】且不计入手牌上限';
                if (!storage) str += '</span>';
                if (storage) str += '<span class="bluetext">';
                str += '阴,若其手牌数为全场最多,则你与其各失去1点体力';
                if (storage) str += '</span>';
                return str;
            },
            qx_dongxi(player) {
                const num = player.storage.qx_dongxi_used;
                return [
                    '连携技,当你造成伤害后/当你受到伤害后/准备阶段/结束阶段',
                    ...['你可以观看牌堆顶X张牌并获得其中任意张花色相同的牌', '你可以令一名其他角色弃置X张牌', '你可以选择一名角色和一种花色,标记其手牌所有此花色的所有牌为<死士>(<死士>牌不能被弃置且其不能使用和弃置<死士>牌)', '你可以获得相邻角色的各一张手牌'].map((str, index) => {
                        let strx = '(' + (index + 1) + ')' + str + '';
                        if (typeof num === 'number' && num === index) strx = '<span class="bluetext">' + strx + '</span>';
                        return strx;
                    }),
                    '(X为场上存活角色数)',
                ].join('<br>');
            },
            qx_yilve(player) {
                const num = player.storage.qx_yilve_used;
                return [
                    '连携技,每轮开始时/一名角色的回合开始时/一名角色受到伤害后/一名角色的回合结束时',
                    ...['你可以将一张黑色牌置于一名角色的武将牌上,然后其将所有手牌置于武将牌上,其回合结束时获得武将牌上的所有牌', '你可以将武将牌翻面并令两名角色拼点,若双方点数之差:大于6,则你复原武将牌并摸两张牌;小于等于6,双方各减1点体力上限', '你可以弃置任意张牌并从牌堆底摸等量张牌.若你因此失去所有手牌,则你额外摸一张牌', '你可以弃置一张牌,然后视为使用本回合你使用的上一张非装备非延时锦囊牌'].map((str, index) => {
                        let strx = '(' + (index + 1) + ')' + str + '';
                        if (typeof num === 'number' && num === index) strx = '<span class="bluetext">' + strx + '</span>';
                        return strx;
                    }),
                ].join('<br>');
            },
            qx_fuyi(player, skill) {
                const storage = player.storage[skill];
                let str = '转换技,锁定技.当你受到伤害后';
                if (!storage) str += '<span class="bluetext">';
                str += '阳:你令至多两名角色各弃置一张牌;';
                if (!storage) str += '</span>';
                if (storage) str += '<span class="bluetext">';
                str += '阴:你视为对至多两名角色各使用一张不计入次数的【杀】';
                if (storage) str += '</span>';
                return str;
            },
            qx_yinlve(player, skill) {
                const storage = player.storage[skill];
                let str = '锁定技,转换技,当你使用牌指定唯一其他目标时';
                if (!storage) str += '<span class="bluetext">';
                str += '阳:你令其重铸所有非基本牌;';
                if (!storage) str += '</span>';
                if (storage) str += '<span class="bluetext">';
                str += '阴:你令其弃置所有非锦囊牌';
                if (storage) str += '</span>';
                return str;
            },
            qx_wanxian(player, skill) {
                let str = '转换技,韵律技.一名角色的弃牌阶段开始时,你可将其区域内的一张牌当作{';
                const storage = player.storage[skill];
                if (!storage) str += '<span class="bluetext">';
                str += '阳,【无中生有】';
                if (!storage) str += '</span>';
                str += ';';
                if (storage) str += '<span class="bluetext">';
                str += '阴,【树上开花】';
                if (storage) str += '</span>';
                str += '}对其使用,然后若其:';
                const yunlv = player.storage[skill + '_zhuanyun'];
                if (!yunlv) str += '<span class="bluetext">';
                str += '平,无需弃牌,其将因此获得的牌交给你;';
                if (!yunlv) str += '</span>';
                if (yunlv) str += '<span class="bluetext">';
                str += '仄,仍需弃牌,你令其受到1点冰属性伤害';
                if (yunlv) str += '</span>';
                return str;
            },
        },
        translate: {
            qx_神武再世: '神武再世',
            qx_正音雅乐: '正音雅乐',
            qx_星河璀璨: '星河璀璨',
            qx_锦瑟良缘: '锦瑟良缘',
            qx_上兵伐谋: '上兵伐谋',
            qx_群贤毕至: '群贤毕至',
            qx_国之大者: '国之大者',
            qx_shen_pangtong: '神庞统',
            qx_shen_pangtong_prefix: '神',
            qx_huansheng: '幻生',
            qx_huansheng_info: '锁定技.①游戏开始时,你将四张势力各不相同的武将牌置于武将牌上.②一名角色进入濒死状态时,你选择一张<幻生>武将牌置回武将牌堆并获得此武将牌上的至多两个技能(主公技、使命技、觉醒技除外)',
            qx_fenshen: '焚身',
            qx_fenshen_info: '①准备阶段,你可以失去体力至1点,然后对其他角色各造成X-1点火属性伤害.②结束阶段,你摸X+1张牌,将体力回复至上限.(X为你已损失的体力值)',
            qx_guice: '诡策',
            qx_guice_info: '转换技,当一名角色受到火属性伤害时:阳:你可以令此伤害+1,然后弃置其一半手牌(向下取整);阴:你可以令此伤害-1,然后观看其手牌并获得其中一种类型的所有牌',
            qx_shen_zhonghui: '神钟会',
            qx_shen_zhonghui_prefix: '神',
            qx_enan_jiyi: '疾疫',
            qx_enan_jiyi_info: '本回合使用牌时失去1点体力',
            qx_enan_huoluan: '霍乱',
            qx_enan_huoluan_info: '本回合使用牌不能指定攻击范围内的角色为目标',
            qx_enan_hannue: '寒疟',
            qx_enan_hannue_info: '本回合使用牌时随机弃置一张牌',
            qx_enan: '厄难',
            qx_enan_info: [
                '一轮游戏开始时/一名角色受到伤害后,你可以选择一名角色并令其获得1枚<疫>:',
                ...[
                    ['疾疫', '本回合使用牌时失去1点体力'],
                    ['霍乱', '本回合使用牌不能指定攻击范围内的角色为目标'],
                    ['寒疟', '本回合使用牌时随机弃置一张牌'],
                ].map((list) => list.join(':')),
            ].join('<br><li>'),
            qx_zaiyi: '灾翳',
            qx_zaiyi_info: [
                '有<疫>的角色的回合结束时,你移去其所有<疫>,然后根据移去的<疫>执行对应效果',
                ...[
                    ['疾疫', '你随机获得一个魏势力武将的技能'],
                    ['霍乱', '你摸X张牌(X为你发动【厄难】的次数),手牌上限+1'],
                    ['寒疟', '你增加1点体力上限并回复1点体力'],
                ].map((list) => list.join(':')),
            ].join('<br><li>'),
            qx_yue_zhugeliang: '乐诸葛亮',
            qx_yue_zhugeliang_prefix: '乐',
            qx_guqin: '古琴',
            qx_guqin_info: '①游戏开始时,你将手牌标记为<古琴>.②你的<古琴>牌不计入手牌上限.③摸牌阶段结束时,你可以交换手牌中<古琴>牌和非<古琴>牌的标记',
            qx_longyin: '龙吟',
            qx_longyin_info: '若你的手牌中没有以此法获得的牌,则:①当你使用锦囊牌时或当你受到伤害后,你可以亮出牌堆顶连续2X张红色牌并使用其中任意张牌,此阶段结束时,你摸剩余未使用的牌数张牌(X为手牌中<古琴>牌和非<古琴>牌的差值).②你使用的红色牌无距离限制,你使用的黑色牌不能被响应',
            qx_yue_zhouyu: '乐周瑜',
            qx_yue_zhouyu_prefix: '乐',
            qx_siqin: '思琴',
            qx_siqin_info: '①游戏开始时,你将手牌标记为<思琴>.②你的<思琴>牌不计入手牌上限.③当你使用牌时,你可以令此牌额外结算X次(X为你手牌中的<思琴>牌花色数).③一轮游戏开始时,你获得弃牌堆中的所有<思琴>牌',
            qx_qugu: '曲顾',
            qx_qugu_info: '出牌阶段,你可以弃置任意张牌,视为使用这些牌字数之和的一张基本牌或普通锦囊牌,然后若弃牌数和这些牌的字数之和相等,你摸一张牌',
            qx_star_caozhang: '星曹彰',
            qx_star_caozhang_prefix: '星',
            qx_kedi: '克敌',
            qx_kedi_info: '一名角色的回合结束时,若其本回合使用过的牌数小于等于其体力值,则你可以弃置一张牌,视为对其使用X张雷【杀】(X为此牌牌名字数),然后若其因此进入过濒死状态,则你获得一个技能描述中包含【杀】的无标签技能并摸三张牌',
            qx_qinhu: '擒虎',
            qx_qinhu_info: '锁定技,其他角色计算与你的距离+X(X为你装备区的牌数)',
            qx_reqinhu: '擒虎',
            qx_reqinhu_info: '锁定技.①你使用【杀】的次数+X(X为场上已废除装备栏数+1).②当你使用伤害牌对一名角色造成伤害后,你废除其一个装备栏直到其使用伤害牌后',
            qx_star_zhonghui: '星钟会',
            qx_star_zhonghui_prefix: '星',
            qx_shenji: '深嫉',
            qx_shenji_info: [
                '一名角色的回合结束时,若其本回合使用过基本牌/锦囊牌/装备牌,则你可以依次执行对应项:',
                ...[
                    ['基本牌', '你观看其手牌将其中任意张牌与牌堆顶等两张牌交换'],
                    ['锦囊牌', '你获得其一半手牌(向上取整)'],
                    ['装备牌', '你弃置其一半手牌(向上取整)'],
                ].map((list) => list.join(':')),
            ].join('<br><li>'),
            qx_deshi: '得势',
            qx_deshi_info: '一轮游戏开始时/当你受到伤害后,你可以展示一张牌并摸X张牌(X为此牌牌名字数),且你不能使用此牌直到你的下个回合开始',
            qx_moumo: '谋谟',
            qx_moumo_info: '准备阶段,你可以失去任意点体力,然后选择获得随机X张魏势力武将牌上的各一个技能直到你的下个回合开始',
            qx_yanfuren: '严夫人',
            qx_cangdi: '藏邸',
            qx_cangdi_effect_backup: '藏邸',
            qx_cangdi_info: ['①出牌阶段限一次,你可以弃置一种类别的所有牌并令至多等量名角色视为置入一张延时锦囊牌', '②一名角色的判定牌生效时,你可以摸三张牌)', '③当你受到伤害时,你可以弃置场上的一张判定牌,然后防止此伤害'].join(''),
            qx_wumou: '误谋',
            qx_wumou_info: '弃牌阶段结束时,你可以将本阶段进入弃牌堆的任意张类别不同的牌交给一名其他角色并令其获得【踌躇】直到其下个回合结束时',
            qx_chouchu: '踌躇',
            qx_chouchu_info: '①你可以弃置其他角色判定区内的一张牌并视为使用一张无距离限制的【杀】.②你不因【踌躇①】使用的【杀】不能指定判定区没有牌的角色为目标',
            qx_zhaoji: '赵姬',
            qx_jieji: '戒急',
            qx_jieji_info: '一名角色使用牌时,若其本回合未对另一名角色使用过牌或未造成过伤害,则你可以记录此阶段.其回合结束时,你可以令其摸X张牌或重铸任意张牌(X为其本阶段使用的牌数)',
            qx_shenhao: '慎好',
            qx_shenhao_info: '锁定技,当你每回合首次使用或打出基本牌/锦囊牌/装备牌时,你从牌堆中获得不同类别/花色/点数的牌各一张',
            qx_doumiao: '窦妙',
            qx_yingfeng: '迎奉',
            qx_yingfeng_info: '出牌阶段限一次,你可以将所有不为【闪】的手牌交给一名其他角色,令其于此回合结束后执行一个额外回合.其于此回合使用牌时,你摸X张牌并增加1点体力上限(X为其体力上限)',
            qx_jiren: '忌忍',
            qx_jiren_info: '当你的体力上限变化后,你可以视为对一名角色使用一张无距离限制的普通锦囊牌',
            qx_liangna: '梁纳',
            qx_zhangrong: '彰戎',
            qx_zhangrong_info: '当你成为锦囊牌的目标后,你可以进行一次判定,若判定结果为红色,你摸X张牌并增加1点体力上限;若判定结果为黑色,你随机获得X张女性武将牌上的各一个技能直到你的回合结束(X为你的体力上限)',
            qx_tingzheng: '听政',
            qx_tingzheng_info: '当你使用牌指定第一个目标时,若目标角色包含其他角色,则你摸Y张牌(Y为目标数),然后你令攻击范围内的角色依次选择一项:①弃置一张与此牌类别相同的牌;②非锁定技失效直到其下个回合开始',
            qx_sb_xusheng: '谋徐盛',
            qx_sb_xusheng_prefix: '谋',
            qx_quedi: '炔敌',
            qx_quedi_info: '转换技.①游戏开始时,你可以自选此技能的阴阳状态.②当你使用【杀】或伤害类锦囊牌指定一名其他角色为目标后,你可以:阳,令其失去当前拥有的所有武将牌上的技能,于此牌结算完毕后获得之,然后你摸其失去技能数张牌;阴,将其区域里的所有牌移出游戏,于此牌结算完毕后获得之,然后此牌对其造成的伤害+其移去的牌数',
            qx_sb_lingtong: '谋凌统',
            qx_sb_lingtong_prefix: '谋',
            qx_yongjin: '勇进',
            qx_yongjin_info: '①当你使用牌时,你可以令一名角色弃置X张手牌(X为你本回合使用牌的次数).②回合结束时,你弃置一种类别的所有牌,然后摸X张牌(这些牌本轮不计入手牌上限)',
            qx_xuanlve: '旋略',
            qx_xuanlve_info: '当一张牌进入弃牌堆后,若此牌为:①基本牌,你摸一张牌;②锦囊牌,你的手牌上限+1;③装备牌,你可以对攻击范围内的一名角色造成1点伤害',
            qx_sb_jiangqin: '谋蒋钦',
            qx_sb_jiangqin_prefix: '谋',
            qx_fendi: '奋敌',
            qx_fendi_info: '每回合限两次,当你使用【杀】或伤害类锦囊牌对其他角色造成伤害后,你可以观看其手牌并获得其中一种类别的牌',
            qx_tianxiang: '天翔',
            qx_tianxiang_info: '其他角色的回合结束时,若其本回合使用的牌数大于其体力值,则你可以获得其进入弃牌堆的所有牌并执行一个额外的出牌阶段',
            qx_sb_dingfeng: '谋丁奉',
            qx_sb_dingfeng_prefix: '谋',
            qx_jubing: '钜兵',
            qx_jubing_info: '①当你使用牌指定一名其他角色为目标后,你可以将其区域内的一张牌置于武将牌上(每回合每种类别的牌限一次),称为<兵>.②回合结束时,你获得武将牌上的所有<兵>(这些牌不计入手牌上限)',
            qx_bujun: '布军',
            qx_bujun_info: '当你需要使用牌时,你可以将武将牌上的任意张<兵>置入弃牌堆,然后视为使用一张与这些<兵>牌名字数之和相等的牌,你可以令以此法使用的牌额外结算X次(X为你的体力上限)',
            qx_rebujun: '布军',
            qx_rebujun_info: ['出牌阶段限一次,你可以将X张<兵>置入弃牌堆(X为你的体力值),然后你选择一项:', '①视为使用一张基本牌(可以额外指定两个目标)', '②视为使用一张普通锦囊牌(此牌结算完毕后,若此牌存在指向性且此牌未失效,则你可以再次对原目标使用此牌)'].join('<br>'),
            qx_sb_sunxiu: '谋孙休',
            qx_sb_sunxiu_prefix: '谋',
            qx_yaoyan: '邀宴',
            qx_yaoyan_info: '准备阶段,你可以选择一名其他角色,然后依次与其选择并执行不同的一项:<br>' + ['使用牌无距离和次数限制直到自己的回合结束', '重铸所有基本牌', '跳过下个判定阶段和弃牌阶段'].map((str) => '<li>' + str + '').join('<br>') + '<br>若其与你的势力相同,则额外增加两个可选项:<br>' + ['摸牌阶段额外摸X张牌', '随机获得X个吴势力角色武将牌上的各一个技能直到自己的回合开始'].map((str) => '<li>' + str + '').join('<br>') + '(X为你的体力上限)',
            qx_zhuning: '诛佞',
            qx_zhuning_info: '其他角色的回合结束时,若其本回合使用的牌数大于其体力值,则你可以弃置其所有基本牌并对其造成1点伤害',
            qx_shibei: '势备',
            qx_shibei_info: '主公技,其他角色的出牌阶段限一次,其可以交给你一张牌,然后其本回合使用基本牌的数值+1.若其为吴势力,则其本回合使用牌无距离限制,使用牌时可以令此牌额外结算一次',
            qx_sb_chengpu: '谋程普',
            qx_sb_chengpu_prefix: '谋',
            qx_haozhong: '豪重',
            qx_haozhong_info: '①当你造成或受到伤害后,你可以将牌堆或弃牌堆中的一张基本牌置于武将牌上,称为<醇>(至多十张).②摸牌阶段,你额外摸X张牌;你的手牌上限+X(X为你武将牌上的<醇>数)',
            qx_quqian: '驱前',
            qx_quqian_info: '出牌阶段限一次,你可以将任意张<醇>置入弃牌堆,视为使用一张指定等量角色的火【杀】(无距离和次数限制且不计入次数、无法被响应),然后你摸Y张牌(Y为此牌造成的伤害数)',
            qx_star_zhangliao: '星张辽',
            qx_star_zhangliao_prefix: '星',
            qx_guanzhen: '观阵',
            qx_guanzhen_info: '锁定技.①其他角色计算与你的距离-X;②你的攻击范围+X;③摸牌阶段,你额外摸X张牌.(X为全场势力数)',
            qx_zhenpo: '震魄',
            qx_zhenpo_info: '出牌阶段,你可以弃置任意张牌,视为使用这些牌字数之和的一张基本牌或普通锦囊牌.你以此法使用牌时,你可以获得攻击范围内任意名角色的各一张手牌',
            qx_star_dianwei: '星典韦',
            qx_star_dianwei_prefix: '星',
            qx_xiongba: '熊罢',
            qx_xiongba_info: '锁定技,当你对其他角色造成伤害后,你获得其一张手牌,若此牌为:' + ['基本牌:本回合你使用牌不可被响应且造成的伤害+1', '锦囊牌:获得其武将牌上的一个技能直到你的下个回合开始', '装备牌:本回合你计算与其他角色的距离-1'].join(';<br>') + '',
            qx_dengsui: '邓绥',
            qx_cien: '慈恩',
            qx_cien_info: '转换技.阳,当你使用锦囊牌指定目标后,你可以摸X-1张牌,然后你将武将牌翻面;阴,当你成为锦囊牌的目标后,你可以观看牌堆顶X张牌,然后你获得其中一种类别的所有牌.若你以此法获得的牌数大于你的体力上限,则你增加体力上限至本次获得的牌数(X为此牌目标数)',
            qx_shengde: '圣德',
            qx_shengde_info: '准备阶段,你可以选择一名其他角色,然后依次与其选择并执行不同的一项:<br>' + ['摸X张牌', '重置武将牌,将体力值回复至上限', '计算与其他角色的距离-X'].map((str) => '<li>' + str + '').join('<br>') + '<br>若其与你的势力不同,则额外增加两个可选项:<br>' + ['手牌上限+X', '随机获得X个女性/男性角色武将牌上的各一个技能直到自己的回合开始'].map((str) => '<li>' + str + '').join('<br>') + '(X为你的体力上限)',
            qx_shen_wangmang: '王莽',
            qx_tongyu: '统御',
            qx_tongyu_info: '锁定技.①其他角色计算与你的距离-X;②你的攻击范围+X;③摸牌阶段,你额外摸X张牌;④一名角色死亡后,你失去此技能.(X为全场角色数)',
            qx_mingxin: '明心',
            qx_mingxin_info: '每局游戏每名角色限一次,一名角色的回合开始时,你可以明置其身份牌,然后根据其身份获得对应身份加强效果',
            qx_mingxin_zhu: '帝王',
            qx_mingxin_zhu2: '帝王',
            qx_mingxin_zhu_info: ['判定阶段开始时,你可以声明一个花色,本阶段你的所有判定牌花色视为此花色', '摸牌阶段,你额外摸X张牌(X为你的体力值)', '出牌阶段,你使用【杀】无距离和次数限制', '你的手牌上限+1'].map((str) => '<li>' + str + '').join('<br>'),
            qx_mingxin_zhong: '贤臣',
            qx_mingxin_zhong_info: ['当你于回合内造成伤害或回复体力时,你可以取消之并令主公回复1点体力', '你的回合外,你的【杀】均视为【桃】,且当你使用【桃】时,你摸一张牌'].map((str) => '<li>' + str + '').join('<br>'),
            qx_mingxin_fan: '异族',
            qx_mingxin_fan2: '异族',
            qx_mingxin_fan_info: ['若你的体力值为全场最少,你使用【杀】或伤害类锦囊牌的伤害值+1', '若你的手牌数为全场最多,你使用【杀】或伤害类锦囊牌不可被响应且可以为此牌额外指定一个目标'].map((str) => '<li>' + str + '').join('<br>'),
            qx_mingxin_nei: '佞臣',
            qx_mingxin_nei2: '佞臣',
            qx_mingxin_nei_info: ['你的回合内,你使用的黑色牌不可被响应且伤害值+1', '你使用红色牌无次数限制', '你的回合外,你可将一张基本牌当作任意基本牌使用,你以此法使用牌时摸一张牌'].map((str) => '<li>' + str + '').join('<br>'),
            qx_zhaoran: '昭然',
            qx_zhaoran_info: '出牌阶段限一次,你可以失去任意点体力并摸等量张牌,若如此做,你本回合使用基本牌无次数限制,本回合使用锦囊牌无距离限制且可以令此牌额外结算一次,本回合结束时你将体力值回复至体力上限',
            qx_jiangtaixu: '姜太虚',
            qx_shen_sunjian: '神孙坚',
            qx_shen_sunjian_prefix: '神',
            qx_kongxiu: '孔秀',
            qx_moushi: '谋噬',
            qx_moushi_info: '其他角色的回合结束时,若其本回合造成的伤害数或其本回合使用的牌数大于等于你装备区的牌数,你可以令其选择一名角色,其视为对其选择的角色使用一张无次数限制的雷【杀】(目标须合法),若此【杀】造成了伤害,则你再对其选择的角色造成1点伤害',
            qx_cange: '藏恶',
            qx_cange_info: '当你造成或受到伤害后,你可以将牌堆或弃牌堆中的一张装备牌置入装备区,若你因此替换了装备,则你摸等同于你装备区牌数张牌',
            qx_yanluan: '延乱',
            qx_yanluan_info: '当你成为【杀】的目标时,你可以弃置场上的一张装备牌.若如此做,你令你的上下家也成为此牌的目标',
            qx_chenshou: '陈寿',
            qx_xiushi: '修史',
            qx_xiushi_info: '其他角色的回合结束时,你可以从牌堆或弃牌堆中获得其本回合使用的所有非装备牌对应副类别的一张牌',
            qx_wangli: '往历',
            qx_wangli_info: '锁定技.①一名角色发动非【往历】技能或重铸牌时,你摸一张牌(每轮你至多以此法摸八张牌).②当你不因使用、打出、重铸或【往历】失去牌后,你弃置一张牌',
            qx_yinfan: '隐蕃',
            qx_yinhu: '隐虎',
            qx_yinhu_info: '转换技,锁定技.当一名角色造成伤害时:阳,若其体力值为全场最大,则你与其各摸两张牌,你以此法获得的牌均视为【酒】且不计入手牌上限.阴,若其手牌数为全场最多,则你与其各失去1点体力',
            qx_leiqi: '累器',
            qx_leiqi_info: '当你因【隐虎】失去体力时,你可以弃置一张装备牌并防止之',
            qx_guihuo: '归祸',
            qx_guihuo_info: '其他角色的回合结束时,你可以获得所有其本回合进入弃牌堆的伤害类卡牌,若你因此获得了超过体力上限张牌,则你受到的伤害+X(X为本轮你以此法获得的牌数/你的体力上限,向下取整)',
            qx_wenhu: '文虎',
            qx_bingdao: '兵道',
            qx_bingdao_info: '出牌阶段限X次(X为场上势力数且至多为3),你可以弃置一名角色的一张手牌,若你弃置了:基本牌,你视为使用此牌(须指定其攻击范围内的角色);锦囊牌,你视为使用此牌(无距离限制)',
            qx_dianbing: '点兵',
            qx_dianbing_info: [
                '当你使用牌指定其他角色为目标时或当你成为其他角色使用牌的目标时,你可以选择一项:',
                ...[
                    ['声东击西', '移动场上的一张牌'],
                    ['多多益善', '获得1枚<伏兵>标记(至多为5)'],
                    ['十面埋伏', '令其本回合非锁定技失效'],
                ].map((list) => list.join(':')),
            ].join('<br>'),
            qx_fulve: '伏略',
            qx_fulve_info: ['结束阶段,你可以移去所有<伏兵>标记,然后选择至多等量项执行(不可重复):', '①摸体力上限张牌', '②对至多等量名角色各造成1点伤害', '③弃置至多等量名角色各一张手牌'].join('<br>'),
            qx_spf_simashi: 'SPF司马师',
            qx_spf_simashi_ab: '司马师',
            qx_dongxi: '洞悉',
            qx_dongxi_sishi: '死士',
            qx_dongxi_info: ['连携技,当你造成伤害后/当你受到伤害后/准备阶段/结束阶段', ...['你可以观看牌堆顶X张牌并获得其中任意张花色相同的牌', '你可以令一名其他角色弃置X张牌', '你可以选择一名角色和一种花色,标记其手牌所有此花色的所有牌为<死士>(<死士>牌不能被弃置且其不能使用和弃置<死士>牌)', '你可以获得相邻角色的各一张手牌'].map((str, index) => '(' + (index + 1) + ')' + str + ''), '(X为场上存活角色数)'].join('<br>'),
            qx_spf_simazhao: 'SPF司马昭',
            qx_spf_simazhao_ab: '司马昭',
            qx_yilve: '异略',
            qx_yilve_info: ['连携技,每轮开始时/一名角色的回合开始时/一名角色受到伤害后/一名角色的回合结束时', ...['你可以将一张黑色牌置于一名角色的武将牌上,然后其将所有手牌置于武将牌上,其回合结束时获得武将牌上的所有牌', '你可以将武将牌翻面并令两名角色拼点,若双方点数之差:大于6,则你复原武将牌并摸两张牌;小于等于6,双方各减1点体力上限', '你可以弃置任意张牌并从牌堆底摸等量张牌.若你因此失去所有手牌,则你额外摸一张牌', '你可以弃置一张牌,然后视为使用本回合你使用的上一张非装备非延时锦囊牌'].map((str, index) => '(' + (index + 1) + ')' + str + '')].join('<br>'),
            qx_weiyao: '韦曜',
            qx_kanzhu: '勘注',
            qx_kanzhu_info: '每回合限一次,当你使用牌时,你可以观看牌堆顶至多X张牌(X为你的体力上限),然后获得其中所有与此牌花色相同的牌,若你获得的牌小于X,则你可以选择一项:①令本回合手牌上限+1;②弃置一张手牌并对一名角色造成1点伤害',
            qx_yiyan: '弈言',
            qx_yiyan_info: '每轮开始时或当你受到伤害后,你可以弃置任意张非伤害牌并摸等量张牌(至多摸至体力上限数),这些牌本回合不计入手牌上限',
            qx_marong: '马融',
            qx_kanji: '勘籍',
            qx_kanji_info: ['其他角色的回合开始时,你可以令其进行判定,若判定结果为:', '红色:其本回合使用牌无距离限制', '黑色:其本回合不能使用伤害牌'].join('<br>'),
            qx_tongru: '通儒',
            qx_tongru_info: '准备阶段,你可以选择一名其他角色,然后依次与其选择并执行不同的一项:<br>' + ['观看牌堆底2X张牌并获得其中任意张花色相同的牌', '令一名角色不能使用一种类别的牌直到其回合结束', '使用牌堆顶的X张牌'].map((str) => '<li>' + str + '').join('<br>') + '<br>然后你于本回合结束时执行剩余未选项(X为你的体力上限)',
            qx_douwu: '窦武',
            qx_moujian: '谋翦',
            qx_moujian_info: ['出牌阶段限一次,你可以令至多X名角色依次弃置一张牌(X为你的体力上限),若这些角色弃置的牌名:', '均相同:你对这些角色各造成1点伤害', '均不相同:你获得这些角色弃置的牌并重置此技能'].join('<br>'),
            qx_duduan: '独断',
            qx_duduan_info: '锁定技,每轮开始时或当你造成伤害后,你随机获得一个限定技(你至多以此法拥有体力上限个技能)',
            qx_kanmie: '勘灭',
            qx_kanmie_info: '当你使用【杀】指定一名其他角色为目标后,你可以弃置目标角色一张手牌,若此牌点数小于此【杀】点数,此【杀】额外结算一次且伤害值+1',
            qx_wanyu: '万彧',
            qx_dianjiao: '点蛟',
            qx_dianjiao_info: '每回合每名角色限一次,一名角色使用【杀】造成伤害后或受到【杀】造成的伤害后,你可以将牌堆顶的首张牌置入弃牌堆并对其攻击范围外的任意名角色各造成1点雷属性伤害',
            qx_mihu: '密护',
            qx_mihu_info: '锁定技,当你首次{受到伤害时}/{成为牌的目标时},你{防止此伤害}/{令此牌对你无效},然后{伤害来源}/{使用者}选择交给你一张牌或弃置两张牌,你每回合以此法获得的前两张牌视为【桃】且不计入手牌上限',
            qx_xuwu: '虚无',
            qx_xuwu_info: '神隐技.①游戏开始时,你进入修整状态.②当你登场后,你可以令全场获得<寂海无垠>光环直到你死亡',
            qx_xuwu_jihaiwuyin: '寂海无垠',
            qx_xuwu_jihaiwuyin_info: '锁定技,当弃牌堆中的黑色牌/红色牌不小于全场存活角色数时,所有角色的非锁定技失效/受到的伤害+1',
            qx_xukong: '虚空',
            qx_xukong_info: '锁定技,手牌数或装备区牌数大于你的体力值角色使用牌不能指定你为目标',
            qx_xuyan: '虚言',
            qx_xuyan_info: ['锁定技', '①你的体力上限和手牌上限始终为1', '②当你的手牌被别人获得或进入弃牌堆后,你根据此牌类别执行对应项:', ...['基本牌:令一名角色展示手牌,然后弃置所有同名牌', '锦囊牌:使用此牌,或令一名其他角色失去一个技能', '装备牌:随机废除一名其他角色的一个装备栏'].map((str, index) => '(' + (index + 1) + ')' + str + '')].join('<br>'),
            qx_qingjiang: '擎江',
            qx_qingjiang_info: '每局每种牌名限一次,当一张装备牌进入弃牌堆后,你可以将此牌置于武将牌上,然后摸X张牌(X为此牌牌名字数/2,向上取整)',
            qx_liejue: '烈绝',
            qx_liejue_info: '出牌阶段限一次,你可以将一张<擎江>牌置入弃牌堆,然后视为使用一张无距离和任何次数限制的【杀】(你于此【杀】结算中视为拥有此<擎江>牌的装备技能).若此【杀】造成了伤害,则本回合将此技能的发动次数改为此<擎江>牌的攻击距离',
            qx_reliejue: '烈绝',
            qx_reliejue_info: ['出牌阶段限一次,你可以弃置一张手牌,然后选择一项:', '①将一张<擎江>武器牌置入弃牌堆,视为使用一张无距离和次数限制的【杀】.此【杀】造成伤害后,本回合可发动【烈绝】的次数+1', '②将一张<擎江>防具牌或坐骑牌置入弃牌堆,本回合视为装备这些牌'].join('<br>'),
            qx_shentao: '神涛',
            qx_shentao_info: '出牌阶段,你可以进行一次判定,若此牌不为装备牌,则你可以使用此牌(若此牌无法被使用则改为视为使用不可被响应的【杀】),然后你可以重复此流程,直到判定出与此前的判定牌名字数均不相等的牌',
            qx_star_caocao: '星曹操',
            qx_star_caocao_prefix: '星',
            qx_linghou: '令侯',
            qx_linghou_info: '出牌阶段限一次,你可弃置一张牌并选择至多两名其他角色,这些角色依次选择一项执行:①交给你一张手牌,若类型与你弃置的牌相同,你获得其一张牌;②将一种花色的所有牌当作【杀】对你使用(无距离限制)',
            qx_fuyi: '负义',
            qx_fuyi_info: '转换技,锁定技.当你受到伤害后.阳:你令至多两名角色各弃置一张牌;阴:你视为对至多两名角色各使用一张不计入次数的【杀】',
            qx_xionglve: '雄略',
            qx_xionglve_info: '主公技.其他魏势力角色的出牌阶段限一次,其可以交给你一张非装备牌,然后其本回合使用【杀】的次数上限+1,其使用【杀】造成伤害后,你与其各摸一张牌',
            qx_star_caopi: '星曹丕',
            qx_star_caopi_prefix: '星',
            qx_wentao: '文韬',
            qx_wentao_info: [
                '准备阶段或当你受到伤害后,你可以选择一项:',
                '①与至多X角色议事,若议事情结果为:',
                '红色,你与意见为红色的角色各摸一张牌;',
                '黑色,意见为红色的角色本回合非锁定技失效',
                '②令至多X角色依次重铸一张手牌,然后你获得其中的黑色牌',
                '(X为你的体力值)',
            ].join('<br>'),
            qx_dianlun: '典论',
            qx_dianlun_info: ['出牌阶段限一次或当你受到伤害后,你可选择一项执行(不能执行上次执行的选项):', '①展示一张手牌,获得一张含此牌牌名或花色的武将牌(每回合每张牌限一次)', '②使用一张<典论>替换一名角色的一张武将牌(每回合每名角色限一次)', '③弃置两张<典论>,拼接这两张武将牌上的各一个技能(觉醒技、限定技、使命技除外;上限为3)'].join('<br>'),
            qx_guxing: '孤行',
            qx_guxing_info: '限定技,当你进入濒死状态时,你可以选择一项:①将体力值回复至体力上限,然后进入隐匿状态;②选择一张<典论>替换此武将牌,弃置其余<典论>,然后将体力值回复至体力上限',
            qx_star_caochong: '星曹冲',
            qx_star_caochong_prefix: '星',
            qx_huairen: '怀仁',
            qx_huairen_info: '准备阶段或当你受到伤害后,你可以从牌堆或弃牌堆获得一张【闪】/【桃】/【酒】.你每以此法获得三张牌后,你可以视为对一名角色使用一张锦囊牌',
            qx_congying: '聪颖',
            qx_congying_info: '①每轮开始时,你可以展示牌堆顶的一张牌并记录此牌点数.②你使用点数小于等于记录点数的牌结算完毕后,你可以将此牌对应的实体牌称为<象>置于武将牌上.③回合结束时,你可以将所有<象>置入弃牌堆并亮出牌堆顶等量张牌,然后你依次使用其中的非基本牌',
            qx_star_xuyou: '星许攸',
            qx_star_xuyou_prefix: '星',
            qx_juao: '倨傲',
            qx_juao_info: '锁定技.①当你造成伤害后,你摸一张牌.②其他角色对你造成大于1点伤害后,其弃置一张手牌,你本回合使用牌的数值+1',
            qx_juezhang: '决漳',
            qx_juezhang_info: '每回合限X次(X为你的体力值),当你使用的普通锦囊牌被抵消后,你可以弃置一张锦囊牌,视为对抵消此牌的角色使用一张相同牌名的被抵消牌(不计入次数)',
            qx_star_liubei: '星刘备',
            qx_star_liubei_prefix: '星',
            qx_hongzhi: '宏志',
            qx_hongzhi_info: '出牌阶段限一次,你可以弃置至多三张花色各不相同的手牌并选择等量角色.直到你的下个回合开始,这些角色使用你弃置牌的花色时,你摸一张牌',
            qx_shuyu: '殊遇',
            qx_shuyu_info: '锁定技,当你首次受到伤害时,若存在伤害来源且你不在其攻击范围,则此伤害-1,然后其选择一项:①弃置一张手牌;②令你下个出牌阶段使用【杀】的次数+1',
            qx_renzhi: '仁治',
            qx_renzhi_info: '主公技,锁定技.①你不能成为延时锦囊牌的目标.②每轮每名角色限一次,其他蜀势力角色成为延时锦囊牌的目标后,你可以弃置一张手牌,令其获得此牌对应的实体牌',
            qx_star_zhaoyun: '星赵云',
            qx_star_zhaoyun_prefix: '星',
            qx_liyong: '励勇',
            qx_liyong_info: '你可将一张非基本牌当作任意基本牌使用或打出.你以此法使用或打出的牌时选择一项:①摸一张牌;②令此牌额外结算一次',
            qx_moutong: '谋统',
            qx_moutong_info: ['①当你使用牌结算后,你可记录此牌花色', '②当你每回合首次使用与记录花色相同的牌时,若此牌为:', ...['基本牌:你令此牌基础值+1且不计入使用次数', '锦囊牌:你令此牌额外执行一次,且可以令一名角色成为此牌的额外目标'].map((str) => '<li>' + str)].join('<br>'),
            qx_star_zhugeliang: '星诸葛亮',
            qx_star_zhugeliang_prefix: '星',
            qx_guanshi: '观势',
            qx_guanshi_info: '①每名角色每回合限一次,每名角色每局游戏限三次,一名角色使用基本牌或普通锦囊牌结算完毕后,你可以记录此牌牌名.②当你成为一名角色使用牌的目标时,你可以移去一个记录的此牌牌名,令此牌无效并获得之',
            qx_yinlve: '隐略',
            qx_yinlve_info: '锁定技,转换技,当你使用牌指定唯一其他目标时.阳:你令其重铸所有非基本牌;阴:你令其弃置所有非锦囊牌',
            qx_star_liufeng: '星刘封',
            qx_star_liufeng_prefix: '星',
            qx_yuheng: '御横',
            qx_yuheng_info: '①一名其他角色的结束阶段,若其本回合使用牌数不大于其体力值,你可获得其本回合进入弃牌堆中每种类型的牌各一张,然后你获得1点护甲(至多为5).②你的手牌上限+X(X为你拥有的护甲值)',
            qx_kanzhan: '勘战',
            qx_kanzhan_info: '出牌阶段限一次,你可以弃置一张牌,视为对至多两名角色各使用一张【决斗】.因此使用的【决斗】若:你未受到此牌造成的伤害,则你获得目标角色的一张牌;你受到此牌造成的伤害,则你失去1点体力,本回合不能对目标角色使用牌',
            qx_star_liushan: '星刘禅',
            qx_star_liushan_prefix: '星',
            qx_yanzheng: '言政',
            qx_yanzheng_info: '出牌阶段限X次(X为场上蜀势力角色数且至多为3),你可以令所有其他角色议事,若议事结果为:红色,你获得意见为红色的角色的各一张非装备牌;黑色,意见为红色的角色本回合非锁定技失效',
            qx_renquan: '任权',
            qx_renquan_info: '出牌阶段限一次,你可以选择一名其他角色,其将手牌摸至体力上限,然后其选择一项:①于下个回合开始时执行一个额外的出牌阶段;②使用牌无距离和次数限制直到下回合结束',
            qx_siye: '嗣业',
            qx_siye_info: '主公技,其他蜀势力角色的出牌阶段限一次,其可以交给你一张牌(视为【桃】且不计入手牌上限),然后其视为使用【决斗】',
            qx_star_liuyong: '星刘永',
            qx_star_liuyong_prefix: '星',
            qx_bianjian: '辨奸',
            qx_bianjian_info: '出牌阶段限一次,你可以获得攻击范围内的一名角色的一张手牌,然后视为使用一张基本牌或普通锦囊牌,若此牌未造成伤害,则你可以令一名角色的攻击范围视为X直到其下个回合开始(X为存活角色数且至少为1)',
            qx_xingfa: '兴伐',
            qx_xingfa_info: '结束阶段,你可以与一名攻击范围包含你且体力值大于等于你的角色交换座次,然后你摸一张牌且下回合攻击范围+1',
            qx_star_liuli: '星刘理',
            qx_star_liuli_prefix: '星',
            qx_zunxiu: '尊脩',
            qx_zunxiu_info: '出牌阶段限X次(X为你的体力值),你可以使用一张手牌与三名角色同时拼点.若你赢,则你选择一项:①获得这些角色各一张牌;②这些角色下回合摸牌阶段少摸一张牌.若你没赢,你本回合手牌上限-1',
            qx_zhenfan: '振藩',
            qx_zhenfan_info: '出牌阶段限一次,你可以选择一名其他角色,然后依次与其选择并执行不同的一项:<br>' + ['将手牌摸至体力值', '视为使用一张无视防具的【杀】(不计入次数)', '使用牌无距离限制直到自己的回合结束'].map((str) => '<li>' + str + '').join('<br>'),
            qx_qizhanggongzhu: '齐长公主',
            qx_shangli: '尚礼',
            qx_shangli_info: '每轮开始时,你选择一个花色和类别.当你每回合首次达成以下一个条件时,你摸一张牌:①使用此花色的牌;②使用此类别的牌;③成为此花色的牌的目标;④成为此类别的牌的目标.你每回合触发所有条件后,你增加1点体力上限',
            qx_shibo: '施帛',
            qx_shibo_info: '其他角色的出牌阶段结束时,你可令其选择一项:①交给你一张牌,然后从牌堆底摸一张牌;②弃置一张非装备牌,然后从牌堆顶摸一张牌',
            qx_baifuren: '柏夫人',
            qx_jieyu: '解语',
            qx_jieyu_info: '锁定技,每回合结束时,若场上体力值最低的角色未受到过伤害,你进行一次判定,然后你可以将任意张与此牌花色相同的牌当作一张伤害类卡牌对其使用.若此牌未令其进入濒死状态,则你与其各回复1点体力',
            qx_xinyou: '心囿',
            qx_xinyou_info: '锁定技,当你造成伤害时,若你的手牌中:①没有♥️️️牌,此伤害+1;②均为♥️️️牌,防止此伤害,令一名其他角色摸两张牌',
            qx_liwan: '李婉',
            qx_miaoci: '妙辞',
            qx_miaoci_info: '当你使用牌时,若此牌牌名字数与本阶段使用牌的次数相同,则你从牌堆或弃牌堆中获得一张此牌字数的牌',
            qx_mita: '靡它',
            qx_mita_info: '出牌阶段结束时,你可展示一张手牌.若如此做,你将手牌上限改为X直到下回合开始(X为此牌牌名字数)',
            qx_bianfuren: '卞夫人',
            qx_wanxian: '挽弦',
            qx_wanxian_info: '转换技,韵律技.一名角色的弃牌阶段开始时,你可将其区域内的一张牌当作{阳,【无中生有】;阴,【树上开花】}对其使用,然后若其:平,无需弃牌,其将因此获得的牌交给你;仄,仍需弃牌,你令其受到1点冰属性伤害',
            qx_rouqing: '柔情',
            qx_rouqing_info: '每轮每名角色限一次,一名角色的出牌阶段结束时,你可以将其至多两张手牌置于其武将牌上(其于本回合结束时获得之),然后令其选择一项:①执行一个额外的出牌阶段;②摸两张牌,然后交给你一张牌',
            qx_cuifei: '崔妃',
            qx_dieyin: '蝶引',
            qx_dieyin_info: '锁定技,每轮开始时或当你受到伤害后,你获得1枚<蝶>标记.你每以此法获得超过3枚<蝶>标记后,你可以失去所有<蝶>标记并视为使用一张普通锦囊牌',
            qx_dieyun: '蝶陨',
            qx_dieyun_info: '当你每回合首次进入濒死状态时,若你的<蝶>标记数大于手牌数,你可以将手牌数摸至<蝶>标记数并将体力值回复至体力上限,然后你随机获得一个描述包含<濒死>或<回复>的技能(上限为2)',
            qx_wuxian: '吴苋',
            qx_wuxian_ab: '吴皇后',
            qx_yichao: '翊朝',
            qx_yichao_info: '每轮限一次,一名角色的回合结束时,若其本回合未造成过伤害,则你可以令其执行一个阶段(由你操纵)',
            qx_chizheng_rewrite: '饬政',
            qx_chizheng_rewrite_info: '出牌阶段开始时,你可以令一名角色选择一项:①使用一张【杀】(无距离限制);②令你摸两张牌;③令你进行一次<整肃>',
            qx_chizheng: '饬政',
            qx_chizheng_info: ['使命技', '使命:出牌阶段开始时,你可以令一名角色选择一项:①使用一张【杀】(无距离限制);②令你摸两张牌;③令你进行一次<整肃>', '成功:当你连续三次条件各不相同的【饬政】整肃成功后,你选择获得一个主公技', '失败:使命成功前进入濒死状态'].join('<br>'),
            qx_huangdi: '凰滌',
            qx_huangdi_info: '主公技.①每名角色每局游戏限一次,准备阶段,你可以令一名角色选择一项:Ⅰ,若你已成功完成【饬政】使命,则修改【饬政】为非使命技且仅保留使命分支效果;Ⅱ,若你【饬政】使命已失败,则复原【饬政】;Ⅲ,获得【八阵】,将势力变更为蜀.②每局游戏限一次,出牌阶段,你可以获得一名已阵亡蜀势力角色的所有技能,然后失去武将牌上的所有技能',
            qx_yangwang: '羊徽瑜王元姬',
            qx_wenhui: '温慧',
            qx_wenhui_info: '一名其他角色使用基本牌或普通锦囊牌时,若此牌是其本回合使用的第二张牌,你可令此牌无效并获得之,你以此法获得的牌不计入手牌上限',
            qx_shuyi: '淑懿',
            qx_shuyi_info: '锁定技,当你受到有来源造成的伤害后,伤害来源需选择一项:①弃置一张手牌且本回合不能对你使用牌;②令你摸一张牌',
            qx_qianci: '谦辞',
            qx_qianci_info: '限定技,当你进入濒死状态时,若你的手牌数为全场最少,你可以将手牌摸至体力上限,将体力回复至体力上限,然后将武将牌替换为王元姬或羊徽瑜',
            qx_hedoulingshi: '纥豆陵氏',
            qx_tanze: '探赜',
            qx_tanze_info: '出牌阶段每名角色限一次,你可以弃置一名其他角色装备区内的一张牌,视为使用一张基本牌和普通锦囊牌.其不能使用同类型装备牌直到你再次对其发动此技能',
            qx_duantuan: '断彖',
            qx_duantuan_info: '锁定技,每轮开始时,你选择攻击范围外的一名角色.本轮内:①其成为除其以外的所有角色使用【杀】或伤害类锦囊牌的额外目标;②其死亡后,你与本轮所有对其造成过伤害的角色各摸一张牌',
            qx_chenggongzhiqiong: '成公知琼',
            qx_yuanhe: '缘何',
            qx_yuanhe_info: '准备阶段,你可与一名其他角色依次执行以下效果:①重铸一张牌;②交换一张牌;③展示一张牌.你与其每有一项执行效果所选卡牌与以下序号相同:①颜色;②类型;③字数;你本回合摸牌阶段的摸牌数+1',
            qx_yilv: '伊虑',
            qx_yilv_info: '出牌阶段限一次,你可失去1点体力,然后选择一项:①将手牌数调整至X(X为你本阶段使用的非基本牌牌数);②获得一个描述包含<回复体力>的技能直到下回合开始',
            qx_lizhaoyi: '李昭仪',
            qx_wenjue: '刎诀',
            qx_wenjue_info: '出牌阶段限一次,你可对自己造成1点火焰伤害,然后选择一项:①执行一个的摸牌阶段;②本回合获得【劌心】',
            qx_guixin: '劌心',
            qx_guixin_info: '①出牌阶段,你可以弃置任意张不可使用的牌(不能是本回合以此法弃置过的牌数),然后依次执行前等量项或后等量项:1.废除一个装备栏;2.回复1点体力;3.摸三张牌;4.失去1点体力.②当你受到伤害后,你可与一名其他角色执行上次的未执行项',
            qx_jieyi: '节仪',
            qx_jieyi_info: '当你的装备牌进入弃牌堆后,你摸X张牌并视为使用一张仅能指定体力值不大于你的角色的【决斗】.此【决斗】仅能以弃置X张牌的方式响应(X为你废除的装备栏数)',
            qx_linan: '罹难',
            qx_linan_info: '锁定技,当你脱离濒死状态后,你重铸所有手牌,每有一张基本牌/装备牌时,你回复1点体力/回复一个已被废除的装备栏',
            qx_huaxiaoman: '花小鬘',
            qx_feihua: '飞花',
            qx_feihua_info: '①当你成为锦囊牌的目标时,你可以将此牌效果改为【南蛮入侵】并摸一张牌.②当你受到伤害时,你可以弃置一张♥️️️牌,将伤害转移给一名其他角色',
            qx_zhuye: '逐叶',
            qx_zhuye_info: '当你的手牌数或攻击范围变化后,你选择一项(不能选择上次选择的选项):①观看一名其他角色的至多三张牌,然后弃置其中一张牌;②使用一名角色的一张随机非基本牌;③令至多两名角色各弃置一张牌.然后若你三项均执行过,则你手牌上限+1,使用基本牌的次数+1',
            qx_lingzong: '灵踪',
            qx_lingzong_info: '锁定技,一名角色进入濒死状态时,你摸X张牌,然后你获得一个技能描述中包含【南蛮入侵】的技能(X为你当前体力值)',
        },
    };
    for (const i in qx_characterPack.character) {
        if (!qx_characterPack.character[i][4]) qx_characterPack.character[i][4] = [];
        qx_characterPack.character[i][4].push('ext:群星荟萃/image/character/' + i + '.jpg');
        qx_characterPack.character[i][4].push('die:ext:群星荟萃/audio/die:true');
    }
    lib.config.all.characters.add('qx_characterPack');
    lib.config.characters.add('qx_characterPack');
    lib.translate.qx_characterPack_character_config = '群星荟萃';
    return qx_characterPack;
};
export default packs;


game.import('character', function (lib, game, ui, get, ai, _status) {
    var xbsj = {
        name: 'xbsj',
        connect: true,
        character: {
            siji_anmo: ['male', 'siji', 4, ['siji_yijie', 'siji_xiaohun'], ['des:']],
            siji_yibianshi: ['female', 'siji', 5, ['siji_shiyi', 'siji_shibian'], [], ['des:凝变之失.']],
            siji_yibianshen: ['female', 'siji', 5, ['siji_shenyi', 'siji_shenbian'], [], ['des:凝变之神']],
            siji_yibianbing: ['female', 'siji', 5, ['siji_bingyi', 'siji_bingbian'], [], ['des:凝变之冰.']],
            siji_yibianlei: ['male', 'siji', 5, ['siji_leiyi', 'siji_leibian'], [], ['des:凝变之雷']],
            siji_yibianhuo: ['male', 'siji', 5, ['siji_huoyi', 'siji_huobian'], [], ['des:凝变之火.']],
            siji_xuejue: ['male', 'siji', 4, ['siji_jijue', 'siji_jueming'], ['des:每逢战斗,必汲尽其可尽之命,以守护其家国.']],
            siji_siji: ['male', 'siji', 3, ['siji_gaozhu', 'siji_guangji'], ['des:死亡沉寂.']],
            fuhuajuejun: ['male', 'siji', 16, ['siji_fubian', 'siji_fuyou', 'siji_suiyi', 'siji_suimeng', 'siji_fushi', 'siji_fuhui', 'siji_fushou', '渐渐的腐烂'], [], ['des:腐化之主.']],
            siji_xuemo: ['male', 'siji', 4, ['siji_xueshi', 'siji_xuejian', 'siji_xiaohun'], ['des:血色泡沫.']],
            siji_xuefeng: ['male', 'siji', '3/4', ['siji_xueshi', 'siji_tianchi', 'siji_xuehu', 'siji_fengsuo', 'siji_niliu'], ['des:血色封印.']],
            siji_gaoda: ['male', 'siji', 1, ['boss_juejing', 'gaodatt', 'longyin', 'zhanjiang', 'jiexingchenshouhu'], ['des:高达一号,你懂得.']],
            siji_zhou: ['male', 'siji', '4/5', ['siji_anzhou'], ['des:咒.']],
            siji_youzhousihai: ['none', 'siji', 4, ['chengxiang', 'renxin', 'jiang', 'hunzi', 'oldzhenlie', 'oldmiji', 'jueqing', 'shangshi', 'tiandu', 'new_reyiji'], ['des:四害合一,超越宇宙']],
            siji_zhenyujin: ['male', 'siji', 4, ['yizhong', 'decadezhenjun', 'rejieyue', 'mouxiayuan', 'moujieyue'], ['des:真于禁,真的是于禁吗？']],
            siji_yuangubashen: ['none', 'siji', 4, ['guanxing', 'kongcheng', 'tuxi', 'yongsi', 'weidi', 'quhu', 'jieming', 'zhiheng', 'haoshi', 'dimeng', 'rende', 'lijian', 'biyue'], ['des:八神合一,福禄永驻']],
            siji_yuangubafei: ['male', 'siji', 4, ['jushou', 'reyicong', 'qianxun', 'lianying', 'xinzhan', 'huilei', 'kuanggu', 'yizhong', 'leiji', 'guidao', 'buqu'], ['des:仙福永享,寿与天齐']],
            siji_xueying: ['female', 'siji', 5, ['siji_zhanmeng2', 'siji_yingdun', 'siji_shoujue'], ['des:血色暗影.']],
            xuemeng: ['female', 'siji', 6, ['xinghongzhishou', 'xuehongzhiyue', 'shaluzhiyan', 'xinghongxinyang', 'xinghongshizi', 'jiejiaojiezao'], ['des:1']],
            siji_duohuamochen: ['male', 'siji', '4/6', ['siji_sihun', 'siji_chixin', 'siji_miezhi', 'siji_sixue', 'siji_buzhe', 'xuegaosi'], [], ['des:原本只是想独身的默陈,喜欢上了一个女孩,为之付出了一切,但换来的却是无情的背叛与杀身之祸,然而天不绝他,默陈很幸运的没有死去,但也因此堕化……之后获得了天道馈赠而变的极强的他,击杀了背叛他的那个女人以及他所有的仇人,但默陈也再也变不回原来的默陈了,只能继续走着堕化的路……']],
            jiesxliuyingsx: ['female', 'siji', 5, ['samjijia', 'jietianhuochongji', 'jiewanquanranshao'], []],
            sxliuyingsx: ['female', 'siji', 5, ['sam', 'tianhuochongji', 'wanquanranshao'], []],
            fuhuamochensi: ['male', 'siji', 8, ['fulanbukanzhihun', 'canpobukanzhixin', 'qinshifulanzhixue', 'posuibuzhengzhizhi', 'mochen_sishengsi', 'mochen_busizhoujuesi', '渐渐的腐烂(默)', '默陈自我封印躯壳'], ['des:即使成功的击杀了当年所有的仇人,以及<她>.但默陈依然忘不掉当年的一切爱恨情仇,他想忘记重新开始,但他永远无法做到,只能在堕化中继续沉沦.<br><br>&nbsp;&nbsp;终于在某一天,他在一次战斗中,以一己之力独战某个属于<禁区>的数大高手.却被再次打到快死.他那不折之躯也快要倒下了……<br><br>&nbsp;&nbsp;这一生,如此不堪入目……就连死前,都要被这些记忆折磨么……<br><br>&nbsp;&nbsp;默陈眼前浮现出了当年他爱惨了的那个女孩……以及……她将自己推入深渊,宣告自己的死亡……<br><br>&nbsp;&nbsp;……<br><br>&nbsp;&nbsp;不!我还不能!我!还!不!能!!<br><br>&nbsp;&nbsp;感受到了自己的身体,再度充满了无尽的力量,而身体,开始渐渐的……渐渐的……如同曾经见过的的<他>一样.<br><br>&nbsp;&nbsp;<他>的原因,是永远的失去……而<我>的原因,是永远无法忘却……<br><br>&nbsp;&nbsp;……<br><br>&nbsp;&nbsp;是谁？<br><br>&nbsp;&nbsp;睁开眼睛,却发现自己并不在那破碎的战场上,而是在一个小山洞里……<br><br>&nbsp;&nbsp;一个清脆好听的声音:<你醒了？><br><br>&nbsp;&nbsp;映入眼帘的,是一个女孩……<br><br>&nbsp;&nbsp;……<br><br>&nbsp;&nbsp;直到现在,默陈依旧不明白,为什么女孩会救他,明明已做好了死掉的准备……但和她相处了一段时间后,默陈似乎有了新的希望.他也知道了女孩的名字<br><br>&nbsp;&nbsp;<流萤><br><br>&nbsp;&nbsp;很好听的名字,和她的声音一样,而在这个名字中,默陈看到了很多东西,她的路,她的命运,以及,自己未来可能要扮演的角色.<br><br>&nbsp;&nbsp;而见到了TA的时候,默陈彻底确定了……<br><br>&nbsp;&nbsp;与此同时,默陈似乎也看到了新的世界……<br><br>&nbsp;&nbsp;……<br><br>&nbsp;&nbsp;或许……']],
            siji_juejin: ['male', 'siji', '4/8', ['siji_zhenchan', 'siji_yinghu', 'siji_diaoyi', 'siji_mengbian', 'siji_jiejiu', 'siji_yihua'], [], ['des:绝君,未腐化的绝君.']],
            siji_zhenshen: ['male', 'siji', '8/10', ['siji_shenli', 'siji_shenshang', 'siji_shenchi', 'siji_yinghu', 'siji_shenduo'], ['des:所谓真神.']],
            siji_duohuazhenshen: ['male', 'siji', '6/10', ['siji_duohua', 'siji_duoshang', 'siji_shenjue', 'siji_yingyou', 'siji_shengui'], ['des:神也会堕化吗？']],
            siji_duohuajuejun: ['male', 'siji', '4/8', ['siji_juechan', 'siji_yingyou', 'siji_sanyi', 'siji_mengshi', 'siji_juehui', 'siji_fuhua'], [], ['des:堕化的绝君.']],
            siji_mochen: ['male', 'siji', 4, ['siji_bihun', 'siji_suoxin', 'siji_zhanzhi', 'siji_xueling', 'siji_xueduo'], ['des:原本只是想独身的默陈,喜欢上了一个女孩,为之付出了一切,但换来的却是无情的背叛与杀身之祸,然而天不绝他,默陈很幸运的没有死去,但也因此堕化……之后因天道馈赠而变的极强的他,击杀了背叛他的那个女人以及他所有的仇人,但默陈也再也变不回原来的默陈了,只能继续走着堕化的路……']],
            siji_zhentiandao: ['none', 'siji', '3/6', ['tiandao_Angel', 'siji_xuelan', 'siji_tianyi', 'siji_daohui'], ['des:真天道.']],
            siji_duohuatianhou: ['male', 'siji', 6, ['dawu', 'siji_baofeng', 'siji_tianxing'], ['des:天候也有堕化的一日.']],
            siji_duohuaziming: ['male', 'siji', 6, ['siji_shelie', 'siji_gongxin'], ['des:白衣渡江的小人.']],
            siji_duohuayunchang: ['male', 'siji', 6, ['siji_wushen', 'siji_wuhun'], ['des:武圣之殇.']],
            siji_duohuaboyan: ['male', 'siji', 6, ['siji_junlue', 'siji_cuike', 'siji_zhanhuo'], ['des:堕化的君子,还是谦谦君子吗？']],
            siji_duohuafengxian: ['male', 'siji', 8, ['siji_kuangbao', 'siji_wumou', 'siji_wuqian', 'siji_shenfen'], ['des:原本就武力值强大,现在应该爆表了吧.']],
            siji_duohuaxuande: ['male', 'siji', 8, ['nzry_jieying', 'siji_longnu'], ['des:龙怒降临,岂是尔等凡人可抗.']],
            siji_duohuagaoda: ['male', 'siji', 2, ['longhunsx', 'zhanjiang', 'siji_juejing'], ['des:长坂坡的那个男人,是我们一生的噩梦']],
            siji_duohuaxuemiu: ['male', 'siji', 30, ['longyin', 'godan_feiqu', 'benghuai', 'weikui', 'spduanzhi', 'gzyinghun', 'ranshang', 'hanyong', 'qiangxix', 'siji_anzhou'], ['des:堕入血狱之牛']],
            siji_xueniu: ['male', 'siji', 18, ['godan_feiqu', 'spduanzhi', 'qiangxix', 'lizhan'], ['des:血厚,所以叫血牛.']],
            bh_kongling: ['male', 'siji', 6, ['linghunxuesuo', 'linghunbenghui', 'linghunxukong', 'linghunshouhubh', 'linghunsuimeng'], ['des:']],
            jiekongling: ['male', 'siji', 6, ['jielinghunbisuo', 'jielinghunbaolie', 'jielinghunhuilang', 'jielinghunshouhu', 'jielinghunhuimeng'], ['des:']],
            kongling: ['male', 'siji', 6, ['linghunbisuo', 'linghunzhuore', 'linghunhuilang', 'linghunshouhu', 'linghunhuimeng'], ['des:空灵曾经遭受过很多次女性的背叛,这使得他对女性极为敏感,能够感受到很远的距离外的女性的存在,而一旦被靠近,空灵就会回忆起那些痛苦的往事,这使得他内心再度受伤,并且会将自己封闭起来.<br><br>&nbsp;&nbsp;空灵还是有着一些女性朋友的,甚至其中有人喜欢他,但或许是因为那些往事……对他影响太大了？空灵对她们每个人都有着防备之心,这让她们非常头疼,她们想方设法要打开他的心扉,但是没一个成功的.<br><br>&nbsp;&nbsp;空灵的身边有着自身的分魂护身(只有他能看见),这些分魂皆是从本体灵魂中分出来的,但是看过去会发现,这些分魂有着破碎的迹象,这也是空灵内心受伤的表现,他本体的灵魂也是处于破碎迹象的状态.<br><br>&nbsp;&nbsp;空灵的分魂护身可以抵挡掉一些外界对他的伤害,但无法抵挡他内心的伤痛.分魂也可以以灼热的方式攻击敌人,但也会使自己灵魂受伤.<br><br>&nbsp;&nbsp;空灵有时会被带入一个未知的回廊,不知为何,他在这里的内心会平静下来,虽然时间不太固定,但在此期间,他的灵魂伤痛(或者内心伤痛)会得到一定的平复,不过也是有限的,一旦伤痛过多,回廊的作用也就会下降.']],
            jiezhixiang: ['female', 'siji', 6, ['jiexinlingbingbao', 'jiexinlinggongtong', 'jiexinlingjuxiang', 'jiexinlingfeijian', 'jiexinlingpingzhang', 'jiexinlinghuanbian'], []],
            zhixiang: ['female', 'siji', 6, ['xinlingbingfeng', 'xinlinggongtong', 'xinlingjuxiang', 'xinlingfeijian', 'xinlingpingzhang', 'xinlinghuanbian'], []],
            zhangejisi: ['female', 'siji', 5, ['zhanzhenggeyao', 'zhanyigongming', 'xingshizhange', 'yingxiongzhange', '星杯传说的应战机制扭曲版'], ['des:见识下歌声的威力吧,演出已经开始了喔!.']],
            jiezhangejisi: ['female', 'siji', 5, ['jiezhanzhenggeyao', 'jiezhanyigongming', 'xingshizhange', 'jieyingxiongzhange', '星杯传说的应战机制扭曲版'], ['des:见识下歌声的威力吧,演出已经开始了喔!.']],
            jiewux: ['female', 'siji', 6, ['zhujue', 'tongxin', 'zhugu'], ['des:']],
            chaofengzhe: ['male', 'siji', 5, ['sigong', 'chaofeng49', 'xingshichaofeng', 'juechao'], []],
            jiechaofengzhe: ['male', 'siji', 5, ['jiesigong', 'jiechaofeng', 'xingshichaofeng', 'juechao'], []],
            sibier: ['female', 'siji', 5, ['huiyao', 'chengjie', 'shengji', 'tianqiang', 'diqiang', 'xingshishengqiang', 'shengguangqiyu', '星杯传说的应战机制扭曲版'], ['des:<font color=red>红莲的故事</font>']],
            jiesibier: ['female', 'siji', 5, ['jiehuiyao', 'jiechengjie', 'jieshengji', 'jietianqiang', 'jiediqiang', 'xingshishengqiang', 'jieshengguangqiyu', '星杯传说的应战机制扭曲版'], ['des:<font color=red>红莲的故事</font>']],
            siji_ajite: ['male', 'siji', 5, ['siji_kuanghua', 'siji_xingshikuangzhan', 'xueyingkuangdao', 'xuexingpaoxiao', 'siji_silie', '狂战准备语音', '星杯传说的应战机制扭曲版'], ['des:<font color=red>艾瑞斯时被冤枉,后转鲜血议会,晚年被剑帝设计跌下悬崖,转生为大地武士.</font>']],
            jieajite: ['male', 'siji', 5, ['jiekuanghua', 'jiexueyingkuangdao', 'jiexuexingpaoxiao', 'siji_xingshikuangzhan', 'jiesilie', '狂战准备语音', '星杯传说的应战机制扭曲版'], ['des:<font color=red>艾瑞斯时被冤枉,后转鲜血议会,晚年被剑帝设计跌下悬崖,转生为大地武士.</font>']],
            silingfashi: ['male', 'siji', 5, ['buxiu', 'wenyi', 'shengdu', 'siwangzhichu', 'xingshiwenyi', 'mubeiyunluo', '死灵法师准备语音', '星杯传说的应战机制扭曲版'], []],
            jiesilingfashi: ['male', 'siji', 5, ['jiebuxiu', 'jieshengdu', 'jiewenyi', 'jiesiwangzhichu', 'xingshijiesilingfashi', 'jiemubeiyunluo', '死灵法师准备语音', '星杯传说的应战机制扭曲版'], ['des:']],
            shuangxuegongzhu: ['female', 'siji', 5, ['bingshuanglingyu', 'shuijingdaoqiang', 'linfengzhufu', 'xingshishuangxue', 'shuangyuzhihuan', '星杯传说的应战机制扭曲版'], ['des:被大司祭所救,在裁决者的队伍里面']],
            jieshuangxuegongzhu: ['female', 'siji', 5, ['jiebingshuanglingyu', 'jieshuijingdaoqiang', 'jielinfengzhufu', 'xingshishuangxue', 'jieshuangyuzhihuan', '星杯传说的应战机制扭曲版'], ['des:被大司祭所救,在裁决者的队伍里面']],
            faluo: ['female', 'siji', 5, ['weilicifu', 'xunjiecifu', 'heianzuzhou', 'guanghuixinyang', 'qidao', 'xingshiqidao', 'falichaoxi', '星杯传说的应战机制扭曲版'], ['des:']],
            jiefaluo: ['female', 'siji', 5, ['jieweilicifu', 'jiexunjiecifu', 'jieheianzuzhou', 'jieguanghuixinyang', 'jieqidao', 'xingshiqidao', 'jiefalichaoxi', '星杯传说的应战机制扭曲版'], ['des:']],
            xingwenshi: ['male', 'siji', 5, ['mingyundiaoke', 'xingchenshouhu', 'xingshisitong', 'xingwenyongdong', '星杯传说的应战机制扭曲版'], ['des:<font color=purple>从咏歌城叛逃到幻影联盟,占星家哥哥,因事故导致地方崩塌,父亲死亡,被妹妹软禁,后逃脱,偷了星之圣典,通过星之圣典操作命运,带来极夜预言,战争领导者.</font><br><br>&nbsp;&nbsp;技能背景详解:<br><br>&nbsp;&nbsp;<font color=purple>【星辰守护】</font><br><br>&nbsp;&nbsp; 斯通从未研习过战斗法术,为了在战斗中保护自己,他选择模拟星象中卫星守护恒星的方式用星芒水晶球环绕自己并阻挡偏斜袭来的攻击或法术,但这样做的效果如同星象不可预测一般时好时坏.<br><br>&nbsp;&nbsp;<font color=purple>【命运雕刻】</font><br><br>&nbsp;&nbsp; 被其妹蒂雅(占星家)认为是禁忌之术的星纹法术,本质上是通过改变星象即将运行的轨迹来改变现在和未来的命运.只有对斯通完全信赖的人才能够完成这个法术,因为这个法术的危险性完全不可预测,后被咏歌城内部列为禁用法术.<br><br>&nbsp;&nbsp;<font color=purple>【星纹涌动】</font><br><br>&nbsp;&nbsp; 斯通的星纹法术大多会造成时间或者命运的乱流,在这种情况下长时间内都无法观测到正常的星象,更别提对命运进行变更.在一次施法结束后,斯通突发奇想,把星石中的能量强行注入了自己的占卜道具中,结果暴乱的星象不可思议的得到了抑制.<br><br>&nbsp;&nbsp;人物背景:<br><br>&nbsp;&nbsp;斯通本来被誉为咏歌城有史以来最具有天赋的占星家,他和其胞妹蒂雅(占星家)在星辰法术上的杰出造诣,让他们获得了命运的双子星这个称号,但他最终也因为和蒂雅在星纹法术上的分歧和误解而分道扬镳,在一次意外事故中被蒂雅认为是使用了禁用法术而导致大半个星辰圣所崩塌的理由监禁起来.最终他利用伪造的星纹法术躲开了监视叛逃到幻影联盟,并在那里完善着自己的星纹法术,没有人愿意和自己的命运作对,因此他也成为了绝大多数人最想拥有的队友和最不愿面对的敌人.']],
            jiexingwenshi: ['male', 'siji', 5, ['jiemingyundiaoke', 'jiexingchenshouhu', 'xingshisitong', 'jiexingwenyongdong', '星杯传说的应战机制扭曲版'], ['des:<font color=purple>从咏歌城叛逃到幻影联盟,占星家哥哥,因事故导致地方崩塌,父亲死亡,被妹妹软禁,后逃脱,偷了星之圣典,通过星之圣典操作命运,带来极夜预言,战争领导者.</font><br><br>&nbsp;&nbsp;技能背景详解:<br><br>&nbsp;&nbsp;<font color=purple>【星辰守护】</font><br><br>&nbsp;&nbsp; 斯通从未研习过战斗法术,为了在战斗中保护自己,他选择模拟星象中卫星守护恒星的方式用星芒水晶球环绕自己并阻挡偏斜袭来的攻击或法术,但这样做的效果如同星象不可预测一般时好时坏.<br><br>&nbsp;&nbsp;<font color=purple>【命运雕刻】</font><br><br>&nbsp;&nbsp; 被其妹蒂雅(占星家)认为是禁忌之术的星纹法术,本质上是通过改变星象即将运行的轨迹来改变现在和未来的命运.只有对斯通完全信赖的人才能够完成这个法术,因为这个法术的危险性完全不可预测,后被咏歌城内部列为禁用法术.<br><br>&nbsp;&nbsp;<font color=purple>【星纹涌动】</font><br><br>&nbsp;&nbsp; 斯通的星纹法术大多会造成时间或者命运的乱流,在这种情况下长时间内都无法观测到正常的星象,更别提对命运进行变更.在一次施法结束后,斯通突发奇想,把星石中的能量强行注入了自己的占卜道具中,结果暴乱的星象不可思议的得到了抑制.<br><br>&nbsp;&nbsp;人物背景:<br><br>&nbsp;&nbsp;斯通本来被誉为咏歌城有史以来最具有天赋的占星家,他和其胞妹蒂雅(占星家)在星辰法术上的杰出造诣,让他们获得了命运的双子星这个称号,但他最终也因为和蒂雅在星纹法术上的分歧和误解而分道扬镳,在一次意外事故中被蒂雅认为是使用了禁用法术而导致大半个星辰圣所崩塌的理由监禁起来.最终他利用伪造的星纹法术躲开了监视叛逃到幻影联盟,并在那里完善着自己的星纹法术,没有人愿意和自己的命运作对,因此他也成为了绝大多数人最想拥有的队友和最不愿面对的敌人.']],
            shenzhuge: ['male', 'siji', 5, ['tianxing1', 'baofeng', 'tianwu1'], []],
            wunian: ['male', 'siji', 5, ['fanshi1', 'siji_shuiying', 'siji_xingshiansha', 'qianxing1', '星杯传说的应战机制扭曲版'], ['des:<font color=red>雇佣兵</font>']],
            jiewunian: ['male', 'siji', 5, ['jiefanshi', 'jieshuiying', 'siji_xingshiansha', 'qianxing1', '星杯传说的应战机制扭曲版'], ['des:<font color=red>雇佣兵</font>']],
            dadiwushixb: ['male', 'siji', 5, ['dimaizhilixb', 'poxiezhanxb', 'shengshengbuxixb', 'xingshidadiwu', '星杯传说的应战机制扭曲版', 'gaiyahuashenxb'], []],
            luoge: ['male', 'siji', 5, ['shengguangshanyao', 'jiushu', 'xingshiluoge', 'shenshengcaijue', '星杯传说的应战机制扭曲版'], ['des:<font color=blue>提倡英灵,救了霜雪公主,出访咏歌城被困.</font><br><br>&nbsp;&nbsp;技能背景详解:<br><br>&nbsp;&nbsp;<font color=blue>【圣光闪耀】</font><br><br>&nbsp;&nbsp; 光辉祭司的必修技能,运用自然间存在的法术力量呼唤圣光降临来治疗或保护队友,根据法术水平和信仰强度这个技能由不同的人所释放的结果可谓是天差地别,而罗德里格斯对于这个技能的运用显然已经达到了出神入化的地步,即使是心志坚定的他,也偶尔会为神恩的浪费而幸福的烦恼.<br><br>&nbsp;&nbsp;<font color=blue>【救赎】</font><br><br>&nbsp;&nbsp; 丰富的施法经验让罗德里格斯能够在最短的时间和最危急的时刻给自己和盟友提供治疗和救援,虽然这个能力在强大的伤害面前显得有些微不足道,但罗德里格斯年轻时曾在无数次关键性的时刻凭借这个能力转危为安,即使是他早已不在第一线战斗的现在,依然没有人怀疑他这个神奇的能力会有所退步.<br><br>&nbsp;&nbsp;<font color=blue>【神圣裁决】</font><br><br>&nbsp;&nbsp; 虔诚的信仰和研修光明法术的经验让罗德里格斯拥有类似言灵的能力,虽然这种能力对于他的身体负担巨大,但偶然间发现星石的纯净能量供给可以满足这种需求使得这种能力变成了现实.<赐予平等的新生或毁灭>,由罗德里格斯作为媒介施放的这个裁决之术可谓是上位力量的极致,就连同源的神圣能量也无法抵挡其分毫.<br><br>&nbsp;&nbsp;人物背景:<br><br>&nbsp;&nbsp;罗德里格斯是神圣教廷中极为罕见的另类天才,他作为一名圣战士在教廷的战场上立下赫赫战功,但在少年得意时突然转职为纯粹的神职人员,在经过十几年的默默无闻之后,他又在教廷危难之际挺身而出,一出手便发挥了决定性的逆转作用,并被教皇授予<圣·罗德里格斯>的封号.如今的他虽然退居幕后,成为了神圣教廷的神职者们导师一般的角色,但大家依然相信,在教廷遭遇危机之时,他必然会毫不犹豫地再次出手,缔造新的传奇.']],
            jieluoge: ['male', 'siji', 5, ['jieshengguangshanyao', 'jiejiushu', 'xingshiluoge', 'jieshenshengcaijue', '星杯传说的应战机制扭曲版'], ['des:<font color=blue>提倡英灵,救了霜雪公主,出访咏歌城被困.</font><br><br>&nbsp;&nbsp;技能背景详解:<br><br>&nbsp;&nbsp;<font color=blue>【圣光闪耀】</font><br><br>&nbsp;&nbsp; 光辉祭司的必修技能,运用自然间存在的法术力量呼唤圣光降临来治疗或保护队友,根据法术水平和信仰强度这个技能由不同的人所释放的结果可谓是天差地别,而罗德里格斯对于这个技能的运用显然已经达到了出神入化的地步,即使是心志坚定的他,也偶尔会为神恩的浪费而幸福的烦恼.<br><br>&nbsp;&nbsp;<font color=blue>【救赎】</font><br><br>&nbsp;&nbsp; 丰富的施法经验让罗德里格斯能够在最短的时间和最危急的时刻给自己和盟友提供治疗和救援,虽然这个能力在强大的伤害面前显得有些微不足道,但罗德里格斯年轻时曾在无数次关键性的时刻凭借这个能力转危为安,即使是他早已不在第一线战斗的现在,依然没有人怀疑他这个神奇的能力会有所退步.<br><br>&nbsp;&nbsp;<font color=blue>【神圣裁决】</font><br><br>&nbsp;&nbsp; 虔诚的信仰和研修光明法术的经验让罗德里格斯拥有类似言灵的能力,虽然这种能力对于他的身体负担巨大,但偶然间发现星石的纯净能量供给可以满足这种需求使得这种能力变成了现实.<赐予平等的新生或毁灭>,由罗德里格斯作为媒介施放的这个裁决之术可谓是上位力量的极致,就连同源的神圣能量也无法抵挡其分毫.<br><br>&nbsp;&nbsp;人物背景:<br><br>&nbsp;&nbsp;罗德里格斯是神圣教廷中极为罕见的另类天才,他作为一名圣战士在教廷的战场上立下赫赫战功,但在少年得意时突然转职为纯粹的神职人员,在经过十几年的默默无闻之后,他又在教廷危难之际挺身而出,一出手便发挥了决定性的逆转作用,并被教皇授予<圣·罗德里格斯>的封号.如今的他虽然退居幕后,成为了神圣教廷的神职者们导师一般的角色,但大家依然相信,在教廷遭遇危机之时,他必然会毫不犹豫地再次出手,缔造新的传奇.']],
            fengbaozhizheng: ['male', 'siji', 5, ['baofenglingyuxb', 'yizhengxb', 'xingshizhizheng', 'jifengzhouyuxb', '星杯传说的应战机制扭曲版'], ['des:剑帝弟子']],
            huangjiashiwei: ['female', 'siji', 5, ['xishengxx', 'shenshenghuwei', 'shenshengbihu', 'juedifanji', 'xingshihuangjia', '星杯传说的应战机制扭曲版'], ['des:<font color=blue>已死,被王国后裔召唤,常驻.</font><br><br>&nbsp;&nbsp;技能背景详解:<br><br>&nbsp;&nbsp;<font color=blue>【牺牲】</font><br><br>&nbsp;&nbsp;在战场上,皇家侍卫总是出现在最重要的位置,而作为风光的代价,他们同样承担着最大的风险,加上永不退却的战斗风格,这支部队的战损率一向高得惊人.<br><br>&nbsp;&nbsp;<font color=blue>【神圣护卫】</font><br><br>&nbsp;&nbsp; 在战场上皇家侍卫的职责便是掩护受伤的队友,用自己的盾牌和身躯给他们争取足够的撤离和回复的时间.精湛的技艺和非凡的身体素质令皇家侍卫们在完成这一工作时显得游刃有余.<br><br>&nbsp;&nbsp;<font color=blue>【神圣庇护】</font><br><br>&nbsp;&nbsp; 贝拉维恩被神圣教廷召唤,转变为英灵形态后所特有的能力.英灵的特性会在受伤时会产生神圣的能量治疗伤口,这使得原本防御力就十分强大的皇家侍卫更变成了一个难以攻破的堡垒.<br><br>&nbsp;&nbsp;<font color=blue>【绝地反击】</font><br><br>&nbsp;&nbsp;贝拉维恩的成名绝技,在关键的时刻放弃所有防御,一击破敌逆转的奇妙剑技,而拥有神兵的英灵贝拉维恩更是能运用星石,将自己周围的神圣能量全部提取进这一击当中.<br><br>&nbsp;&nbsp;人物背景:<br><br>&nbsp;&nbsp;皇家侍卫自从帝国覆灭之后便再也未曾出现过,直到贝拉维恩,这位帝国历史上最强大的皇家侍卫长,被王室的后裔所召唤,在新一轮的大陆争霸中为神圣教廷而战,英灵化的贝拉维恩能用星石维持自己的形态和日常消耗,在战斗中作为教廷最坚固的盾永远冲锋在战场的最前线.']],
            jiebeilaweien: ['female', 'siji', 5, ['jiexishengxx', 'jieshenshenghuwei', 'jieshenshengbihu', 'jiejuedifanji', 'xingshihuangjia', '星杯传说的应战机制扭曲版'], ['des:<font color=blue>已死,被王国后裔召唤,常驻.</font><br><br>&nbsp;&nbsp;技能背景详解:<br><br>&nbsp;&nbsp;<font color=blue>【牺牲】</font><br><br>&nbsp;&nbsp;在战场上,皇家侍卫总是出现在最重要的位置,而作为风光的代价,他们同样承担着最大的风险,加上永不退却的战斗风格,这支部队的战损率一向高得惊人.<br><br>&nbsp;&nbsp;<font color=blue>【神圣护卫】</font><br><br>&nbsp;&nbsp; 在战场上皇家侍卫的职责便是掩护受伤的队友,用自己的盾牌和身躯给他们争取足够的撤离和回复的时间.精湛的技艺和非凡的身体素质令皇家侍卫们在完成这一工作时显得游刃有余.<br><br>&nbsp;&nbsp;<font color=blue>【神圣庇护】</font><br><br>&nbsp;&nbsp; 贝拉维恩被神圣教廷召唤,转变为英灵形态后所特有的能力.英灵的特性会在受伤时会产生神圣的能量治疗伤口,这使得原本防御力就十分强大的皇家侍卫更变成了一个难以攻破的堡垒.<br><br>&nbsp;&nbsp;<font color=blue>【绝地反击】</font><br><br>&nbsp;&nbsp;贝拉维恩的成名绝技,在关键的时刻放弃所有防御,一击破敌逆转的奇妙剑技,而拥有神兵的英灵贝拉维恩更是能运用星石,将自己周围的神圣能量全部提取进这一击当中.<br><br>&nbsp;&nbsp;人物背景:<br><br>&nbsp;&nbsp;皇家侍卫自从帝国覆灭之后便再也未曾出现过,直到贝拉维恩,这位帝国历史上最强大的皇家侍卫长,被王室的后裔所召唤,在新一轮的大陆争霸中为神圣教廷而战,英灵化的贝拉维恩能用星石维持自己的形态和日常消耗,在战斗中作为教廷最坚固的盾永远冲锋在战场的最前线.']],
            saierna: ['female', 'siji', 5, ['zhongcaifaze', 'morishenpan', 'shenpanlangchao', 'shenpanpailin', 'zhongcaiyishi', 'yishizhongduan', 'panjuetianping', 'xingshizhongcai', '星杯传说的应战机制扭曲版'], []],
            jiesaierna: ['female', 'siji', 5, ['jiezhongcaifaze', 'jiemorishenpan', 'jieshenpanlangchao', 'jieshenpanpailin', 'jiezhongcaiyishi', 'jieyishizhongduan', 'jiepanjuetianping', 'xingshizhongcai', '星杯传说的应战机制扭曲版'], []],
            gongzhinvshen: ['female', 'siji', 5, ['shandianjianx', 'guanchuansheji', 'shanguangxianjing', 'jingzhunsheji', 'xingshishenjian', 'juji10', '弓之女神准备语音', '星杯传说的应战机制扭曲版'], ['des:<font color=green>三姐妹中最大的</font>;<font color=red>史话</font>']],
            jiegongzhinvshen: ['female', 'siji', 5, ['jieshandianjianx', 'jieguanchuansheji', 'jieshanguangxianjing', 'jingzhunsheji', 'xingshishenjian', 'jiejuji10', '弓之女神准备语音', '星杯传说的应战机制扭曲版'], ['des:<font color=green>三姐妹中最大的</font>;<font color=red>史话</font>']],
            suoersi: ['male', 'siji', 5, ['yuansufashuyunshi', 'yuansufashubingdong', 'yuansufashuleiji', 'yuansufashufengren', 'yuansufashuhuoqiu', 'yuansuxishou', 'yuansudianran', 'siji_xingshiyuansu', 'yuansufashuyueguang', '元素准备语音', '星杯传说的应战机制扭曲版'], ['des:']],
            jiesuoersi: ['male', 'siji', 5, ['jieyuansufashuyunshi', 'jieyuansufashubingdong', 'jieyuansufashuleiji', 'jieyuansufashufengren', 'jieyuansufashuhuoqiu', 'jieyuansuxishou', 'jieyuansudianran', 'siji_xingshiyuansu', 'yuansufashuyueguang', '元素准备语音', '星杯传说的应战机制扭曲版'], ['des:']],
            siji_duohuaxuejue: ['male', 'siji', 5, ['jinji', 'nisheng'], ['des:']],
            siji_yibian: ['female', 'siji', 5, ['siji_yibian'], []],
            yezoushi: ['male', 'siji', 5, ['sizou', 'tiaolusxsx', 'tiaolusx'], ['des:<font color=red>永恒死灭的乐奏师,对女性好感度固定为-∞,极度厌恶.</font>']],
            sxNagatosx: ['male', 'siji', 5, ['cmlunhuisx', 'cmxiuluodao', 'cmrenjiandao', 'cmeguidao', 'cmdiyudao', 'cmwanxiangtianyin', 'xingshichangmen', 'cmshenluotianzheng', 'cmdibaotianxing'], []],
        },
        characterSort: {
            xbsj: {
                xbcs: ['siji_ajite', 'wunian', 'jiewunian', 'gongzhinvshen', 'jiegongzhinvshen', 'suoersi', 'saierna', 'jiesaierna', 'sibier', 'jiesibier', 'jieajite', 'faluo', 'jiefaluo', 'silingfashi', 'jiesilingfashi', 'shuangxuegongzhu', 'jieshuangxuegongzhu', 'jiesuoersi', 'zhangejisi', 'jiezhangejisi', 'xingwenshi', 'jiexingwenshi', 'luoge', 'jieluoge', 'fengbaozhizheng', 'huangjiashiwei', 'jiebeilaweien', 'dadiwushixb'],
                sjcs: ['siji_zhou', 'siji_juejin', 'siji_zhenshen', 'siji_duohuazhenshen', 'siji_xueniu', 'siji_duohuaxuemiu', 'siji_zhentiandao', 'siji_mochen', 'siji_duohuajuejun', 'sxliuyingsx', 'jiesxliuyingsx', 'fuhuamochensi', 'siji_duohuamochen', 'siji_xueying', 'xuemeng', 'siji_yuangubafei', 'siji_yuangubashen', 'siji_zhenyujin', 'siji_youzhousihai', 'siji_zhou', 'siji_gaoda', 'siji_xuefeng', 'siji_xuemo', 'siji_anmo', 'siji_yibianshi', 'siji_yibianshen', 'siji_yibianbing', 'siji_yibianlei', 'siji_yibianhuo', 'siji_yibian', 'siji_xuejue', 'siji_duohuaxuejue', 'chaofengzhe', 'jiechaofengzhe', 'jiekongling', 'kongling', 'bh_kongling', 'shenzhuge', 'siji_siji', 'fuhuajuejun', 'fuhuajuejunx', 'zhixiang', 'jiezhixiang', 'jiewux', 'sxNagatosx', 'yezoushi'],
                cqjq: ['siji_duohuagaoda', 'siji_duohuaxuande', 'siji_duohuafengxian', 'siji_duohuaboyan', 'siji_duohuayunchang', 'siji_duohuaziming', 'siji_duohuatianhou'],
            },
        },
        characterTitle: {
            fuhuajuejun: '<font color=#f06>腐化的守护</font>',
            sxliuyingsx: '<font color=#f06></font>',
            jiesxliuyingsx: '<font color=#f06></font>',
            fuhuajuejunx: '<font color=#f06>腐化的守护</font>',
            siji_xuefeng: '<font color=#f01>天褫君魂</font>',
            siji_xuejue: '<font color=#f01>汲尽命天</font>',
            siji_ajite: '<font color=#f06>狂战士</font>',
            jieajite: '<font color=#f06>狂战士</font>',
            silingfashi: '<font color=#f06>死灵法师</font>',
            jiesilingfashi: '<font color=#f06>死灵法师</font>',
            shuangxuegongzhu: '<font color=#f06>霜雪公主</font>',
            jieshuangxuegongzhu: '<font color=#f06>霜雪公主</font>',
            xingwenshi: '<font color=#f06>星纹师</font>',
            jiexingwenshi: '<font color=#f06>星纹师</font>',
            faluo: '<font color=#f06>祈祷师</font>',
            jiefaluo: '<font color=#f06>祈祷师</font>',
            chaofengzhe: '<font color=#f06>嘲讽者</font>',
            jiechaofengzhe: '<font color=#f06>嘲讽者</font>',
            zhangejisi: '<font color=#f06>战歌祭司</font>',
            jiezhangejisi: '<font color=#f06>战歌祭司</font>',
            huangjiashiwei: '<font color=#f06>皇家侍卫</font>',
            jiebeilaweien: '<font color=#f06>皇家侍卫</font>',
            fengbaozhizheng: '<font color=#f06>风暴执政官</font>',
            sibier: '<font color=#f06>圣枪</font>',
            jiesibier: '<font color=#f06>圣枪</font>',
            wunian: '<font color=#f06>暗杀者</font>',
            jiewunian: '<font color=#f06>暗杀者</font>',
            saierna: '<font color=#f06>仲裁者</font>',
            jiesaierna: '<font color=#f06>仲裁者</font>',
            dadiwushixb: '<font color=#f06>大地武士</font>',
            jieluoge: '<font color=#f06>大司祭</font>',
            luoge: '<font color=#f06>大司祭</font>',
            gongzhinvshen: '<font color=#f06>弓之女神</font>',
            jiegongzhinvshen: '<font color=#f06>弓之女神</font>',
            suoersi: '<font color=#f06>元素师</font>',
            jiesuoersi: '<font color=#f06>元素师</font>',
            yezoushi: '<font color=#f06>乐奏调律</font>',
        },
        translate: {
            tiandao_Angel: '天道',
            tiandao_Angel_info: '①每名角色的回合限4次,一名角色声明使用一张未被<天道>记录的非装备牌后,你可以令此牌不能被响应(或无效),你记录此牌(每名角色回合结束时清除所有记录)并选择一项:1.你不能成为此牌的目标直至当前回合结束;2.你视为使用此牌(无距离限制,若此时在你的回合内则此牌无次数限制),若你无法使用则改为摸1张牌.②每名角色的回合限2次,一名角色造成伤害或失去体力时,你可以防止之,你的体力值固定为你当前体力值直至当前回合结束.',
            siji_fushou: '腐守',
            siji_fushou_info: '结束阶段,你选择一名其他角色,直到你下回合开始或你死亡,所有角色对其使用的伤害类牌视为对你使用.',
            siji_fushou2: '腐守',
            siji_fushou2_info: '',
            siji_fushou3: '腐守',
            siji_fushou3_info: '',
            dingshou: '定守',
            dingshou_info: '<font color=orange>锁定技,</font><br>一名其他角色的回合开始时,根据你当前手牌数你获得以下效果:为偶数且不为0,本回合锦囊牌对你无效;为奇数,本回合基本牌对你无效;为0,本回合你不会受到任何伤害.',
            dingshou_jiben: '定守(基本)',
            dingshou_jiben_info: '',
            dingshou_jinnang: '定守(锦囊)',
            dingshou_jinnang_info: '',
            dingshou_wushang: '定守(无伤)',
            dingshou_wushang_info: '',
            wuxiao: '无效',
            wuxiao_info: '',
            jijue_mopai: '汲绝',
            jijue_mopai_info: '',
            jijue_chupai: '汲绝',
            jijue_chupai_info: '',
            jijue_jieshu: '汲绝',
            jijue_jieshu_info: '',
            星杯传说的应战机制扭曲版: '星杯传说的应战机制扭曲版',
            星杯传说的应战机制扭曲版_info: '',
            siji_juejing: '绝境',
            siji_juejing_info: '<font color=orange>锁定技,</font><br>游戏开始时,你摸2张牌;你的手牌数大于(或小于)6时,你将手牌弃置至(或摸至)6张.',
            longhunsx: '龙魂',
            longhunsx_info: '你可以将同花色的一至两张牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当普【无懈可击】.若你以此法使用了两张红色牌,则此牌回复值或伤害值+1.若你以此法使用了两张黑色牌,则你弃置当前回合角色一张牌.',
            siji_longnu: '龙怒',
            siji_longnu_info: '转换技,<font color=orange>锁定技,</font><br>阴:出牌阶段开始时,你失去1点体力并摸3张牌,本阶段内你的红色手牌均视为火【杀】且无距离限制.阳:出牌阶段开始时,你减1点体力上限并摸3张牌,本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制.',
            siji_kuangbao: '狂暴',
            siji_kuangbao_info: '<font color=orange>锁定技,</font><br>游戏开始时,你获得6枚<暴怒>标记;<font color=orange>锁定技,</font><br>当你造成/受到1点伤害后,你获得1枚<暴怒>标记.',
            siji_wumou: '无谋',
            siji_wumou_info: '<font color=orange>锁定技,</font><br>当你使用普通锦囊牌时,你选择一项:1.弃置2枚<暴怒>标记;2.失去2点体力.',
            siji_wuqian: '无前',
            siji_wuqian_info: '出牌阶段,你可以弃置2枚<暴怒>标记并选择一名本回合内未选择过的其他角色,你获得技能〖无双〗并令其防具无效直到回合结束.',
            siji_shenfen: '神愤',
            siji_shenfen_info: '出牌阶段限一次,你可以弃置6枚<暴怒>标记并选择所有其他角色,对这些角色各造成2点伤害.这些角色先各弃置其装备区里的牌,再弃置所有手牌.最后你将你的武将牌翻面.',
            siji_junlue: '军略',
            siji_junlue_info: '<font color=orange>锁定技,</font><br>当你受到或造成伤害后,你获得X个<军略>标记(X为伤害点数)',
            siji_cuike: '摧克',
            siji_cuike_info: '出牌阶段开始时,若<军略>标记的数量为奇数,你可以对一名角色造成一点伤害;若<军略>标记的数量为偶数,你可以横置一名角色并弃置其区域内的一张牌.若<军略>标记的数量超过7个,你可以移去全部<军略>标记并对所有其他角色造成2点伤害',
            siji_zhanhuo: '绽火',
            siji_zhanhuo_info: '限定技,出牌阶段,你可以移去全部<军略>标记,令至多等量的已横置角色弃置所有装备区内的牌.你对其中一名角色造成2点火焰伤害.',
            siji_wushen: '武神',
            siji_wushen_info: '<font color=orange>锁定技,</font><br>你的♥️️手牌均视为【杀】;<font color=orange>锁定技,</font><br>你使用【杀】无距离和次数限制且不可被响应.',
            siji_wuhun: '武魂',
            siji_wuhun_info: '<font color=orange>锁定技,</font><br>当你受到伤害后,伤害来源获得X个<梦魇>标记(X为伤害点数).<font color=orange>锁定技,</font><br>当你死亡时,你选择一名<梦魇>标记数量最多的其他角色.该角色进行判定:若判定结果不为【桃园结义】,则该角色死亡.',
            siji_kuangfeng: '狂风',
            siji_kuangfeng_info: '',
            siji_baofeng: '暴风',
            siji_baofeng_info: '结束阶段,你可以弃置1张<星>并指定一名角色,本局内该角色受到火焰伤害时,此伤害+2.',
            siji_tianxing: '天星',
            siji_tianxing_info: '游戏开始时,你将牌堆顶的21张牌置于你的武将牌上,称之为<星>./摸牌阶段结束后,你可用任意数量的手牌等量交换这些<星>.',
            siji_shelie: '涉猎',
            siji_shelie_info: '摸牌阶段,你可以改为从牌堆顶亮出10张牌,选择获得不同花色的牌各一张.',
            siji_gongxin: '攻心',
            siji_gongxin_info: '出牌阶段限两次,你可以观看一名其他角色的手牌,并可以展示其中一张红色牌,将其弃置或置于牌堆顶.',
            siji_mengbian: '梦变',
            siji_mengbian_info: '一名角色的判定结果即将生效时,你可以打出一张牌替换之.',
            siji_diaoyi: '凋忆',
            siji_diaoyi_info: '<font color=orange>锁定技,</font><br>①你的手牌上限+2,准备阶段和结束阶段开始时,你摸2+X张牌,回复1点体力并执行一个额外的出牌阶段(X为游戏轮数,至多为3);②出牌阶段,你使用【杀】次数上限和攻击范围+2.',
            siji_shenshang: '神殇',
            siji_shenshang_info: '<font color=orange>锁定技,</font><br>①你造成的伤害视为神属性;②你防止你受到的属性伤害.',
            siji_yingyou: '影佑',
            siji_yingyou_info: '<font color=orange>锁定技,</font><br>①你的体力上限不会减少;②其他角色即将获得你的牌或你交给其他角色非【毒】牌时,你取消之,对其造成1点伤害;③若你未进入濒死状态,你不会死亡;④你使用【杀】指定目标后,若目标体力上限大于33,此【杀】伤害值改为其体力上限.',
            siji_shenli: '神力',
            siji_shenli_info: '<font color=orange>锁定技,</font><br>你摸牌阶段额外摸x张牌,出牌阶段使用【杀】次数上限和攻击范围额外+x.(x为你已损失体力值)',
            siji_shenchi: '神褫',
            siji_shenchi_info: '<font color=orange>锁定技,</font><br>每当你受到1点伤害后,你摸2张牌,伤害来源弃置2张牌.',
            siji_shenjue: '神绝',
            siji_shenjue_info: '<font color=orange>锁定技,</font><br>每当你受到1点伤害后,你摸3张牌,伤害来源受到以你为来源的1点伤害并弃置3张牌.',
            siji_duoshang: '堕殇',
            siji_duoshang_info: '<font color=orange>锁定技,</font><br>①你造成的伤害视为神属性;②你防止你受到的属性伤害;③你不会被翻面;④准备阶段开始时,你令一名其他角色的全部技能失效直至该角色下回合结束.',
            siji_sanyi: '散忆',
            siji_sanyi_info: '<font color=orange>锁定技,</font><br>①你的手牌上限-2,准备阶段和结束阶段开始时,你摸2+X张牌,回复1点体力并执行一个额外的出牌阶段(X为游戏轮数,至多为4);②出牌阶段,你使用【杀】次数上限和攻击范围+1.',
            siji_zhenchan: '震颤',
            siji_zhenchan_info: '<font color=orange>锁定技,</font><br>①【杀】、伤害类锦囊牌对你无效,且你不能成为延时类锦囊牌的目标;②当你成为【杀】或伤害类锦囊牌的目标后,若你已横置,则你重置.',
            xinghongzhishou: '腥红之守',
            xinghongzhishou_info: '<br><br>&nbsp;&nbsp;①(一名其他角色受到非你造成的伤害,失去体力,失去体力上限时可发动,对自己造成5点伤害)你取消之.<br><br>&nbsp;&nbsp;②(你因①受到伤害后,若伤害值曾被减少则可发动)令一名其他友方角色获得x护甲.(x为5-本次伤害数)否则你+5<血约>',
            xuehongzhiyue: '血红之约',
            xuehongzhiyue_info: '<br><br>&nbsp;&nbsp;①(你弃置牌/使用基本牌时可发动)你+等量/1<血约>;<br><br>&nbsp;&nbsp;②(你受到来自自己的伤害时可发动,移除至多为伤害数的<血约>)抵挡等量的伤害并摸等量的牌',
            shaluzhiyan: '杀戮盛宴',
            shaluzhiyan_info: '(你于回合内使用杀造成伤害时可发动,对自己造成3点伤害)本次伤害额外+2.本回合不能发动<腥红十字>.本技能一回合只能发动一次.',
            xinghongxinyang: '腥红信仰',
            xinghongxinyang_info: '<br><br>&nbsp;&nbsp;①(你脱离濒死状态后锁定发动)直到你下回合结束前,你进入<热血沸腾>状态.此状态下你受到伤害,失去体力,减少体力上限时,改为摸等量的牌.<br><br>&nbsp;&nbsp;②(以①的方式摸牌后若你的手牌数高于6则锁定发动)你将手牌弃置至6张,若你的<血约>数>1,移除1<血约>.',
            xinghongshizi: '腥红十字',
            xinghongshizi_info: '(出牌阶段可发动,弃2张非基本牌并对自己造成4点伤害)对一名其他角色造成3点伤害.本回合<杀戮盛宴>不再触发.本技能一回合只能发动一次.',
            jiejiaojiezao: '戒骄戒躁',
            jiejiaojiezao_info: '(<腥红十字>或<杀戮盛宴>触发后可发动,解除<热血沸腾>状态)清除技能使用限制并+2<血约>',
            xuesejingji: '血色荆棘',
            xuesejingji_info: '使用',
            siji_juechan: '绝颤',
            siji_juechan_info: '<font color=orange>锁定技,</font><br>①伤害类基本牌和伤害类锦囊牌对你无效;②你不能成为延时类锦囊牌的目标,当你翻面或横置或重置时,你摸2张牌(若你已受伤改为回复1点体力);③当你成为伤害类基本牌或伤害类锦囊牌的目标后,若你已横置,则你重置;④你发动<绝颤①>的效果后,若你当前体力值小于4,你回复1点体力,否则失去1点体力;⑤每名角色的结束阶段,你回复1点体力.',
            siji_mengshi: '梦逝',
            siji_mengshi_info: '①一名角色的判定结果即将生效时,你摸1张牌并可以打出一张牌替换之;②你使用【杀】指定目标后,若其未因此技能导致全部技能失效,你令其本回合内全部技能失效且不能响应此【杀】.',
            mengshi: '梦逝',
            mengshi_info: '你使用【杀】指定目标后,若其未因此技能导致全部技能失效,你令其本回合内全部技能失效且不能响应此【杀】.',
            siji_bihun: '闭魂',
            siji_bihun_info: '<font color=orange>锁定技,</font><br>①你的判定区被废除,其他角色计算与你的距离+1,你的手牌上限等于你的体力上限+2;②你成为一名角色使用伤害类基本牌的目标后,若你已受伤,此牌对你无效,且你获得此牌对应的所有实体牌,若你未受伤,则你摸2张牌.',
            siji_zhanzhi: '斩指',
            siji_zhanzhi_info: '当你成为其他角色使用的牌的目标后,你可以弃置其至多3张牌,该角色与你各失去1点体力.',
            siji_xueling: '血灵',
            siji_xueling_info: '<font color=orange>锁定技,</font><br>①你回复体力时,令回复量+1;②你使用【桃】的回复效果+1;③你的准备阶段开始时,若你手牌中没有【桃】,则你获得一张【桃】并摸1张牌.',
            siji_suoxin: '锁心',
            siji_suoxin_info: '<font color=orange>锁定技,</font><br>每当你成为一名角色使用普通锦囊牌的目标后,若你不是此牌的唯一目标,则你选择一项:1.令此牌对所有其他目标无效;2.令此牌对你无效.',
            siji_sihun: '死魂',
            siji_sihun_info: '<font color=orange>锁定技,</font><br>①你的判定区被废除,其他角色计算与你的距离+2,你的手牌上限等于你的体力上限+4;②你成为一名角色使用伤害类基本牌的目标后,若你已受伤,此牌对你无效,且你获得此牌对应的所有实体牌,若你未受伤,则你摸3张牌;③你的回合内,其他角色的全部技能失效,且每名角色回合开始时,你移去所有额外获得的技能.',
            siji_sihun_1: '死魂',
            siji_sihun_1_info: '',
            siji_sihun_2: '死魂',
            siji_sihun_2_info: '',
            siji_chixin: '褫心',
            siji_chixin_info: '<font color=orange>锁定技,</font><br>每当你成为一名角色使用普通锦囊牌的目标后,若你不是此牌的唯一目标,则你选择一项:1.令此牌对所有其他目标无效;2.令此牌对你无效.选择完成后,你回复1点体力并摸2张牌.',
            siji_miezhi: '灭指',
            siji_miezhi_info: '当你成为其他角色使用的牌的目标后,你可以弃置其至多4张牌,该角色失去1点体力,你失去2点体力.',
            siji_sixue: '死血',
            siji_sixue_info: '<font color=orange>锁定技,</font><br>①你回复体力时,令回复量+1;②你使用基本牌(【闪】除外)的效果+1;③你的准备阶段开始时,若你手牌中没有【桃】,则你获得一张【桃】并摸1张牌;④你的体力上限不会减少.',
            siji_xueduo: '血堕',
            siji_xueduo_info: '觉醒技:你即将死亡时,你不死亡并体力回复至2点,将武将牌替换为【堕化默陈】',
            siji_duohua: '堕化',
            siji_duohua_info: '<font color=orange>锁定技,</font><br>①你摸牌阶段额外摸x张牌,出牌阶段使用【杀】次数上限和攻击范围额外+x;②你的手牌上限+x.(x为你已损失体力值)',
            siji_buzhe: '不折',
            siji_buzhe_info: '限定技,<font color=orange>锁定技,</font><br>你死亡前,你不死亡并将体力值回复至2点.发动此技能后,所有其他技能描述中的数字+2(不显示在技能描述上).',
            cmlunhuisx: '轮回',
            cmlunhuisx_info: '(准备阶段可发动,弃1张牌,无牌则不弃)选择一项:<br><br>&nbsp;&nbsp;1.进入【修罗道】形态,有角色对你使用杀造成伤害则你脱离此形态.<br><br>&nbsp;&nbsp;2.进入【人间道】形态,下个回合开始时(先于<轮回>触发)脱离此形态.<br><br>&nbsp;&nbsp;选择完成后,你摸3张牌.',
            cmxiuluodao: '修罗道',
            cmxiuluodao_info: '(处于【修罗道】形态时锁定发动)你使用杀造成的所有伤害额外+2,你不能使用伤害类锦囊牌.处于此形态时,不能发动<轮回>',
            cmrenjiandao: '人间道',
            cmrenjiandao_info: '(处于【人间道】形态时锁定发动)你造成的所有伤害改为减少等量体力上限.',
            cmdiyudao: '地狱道',
            cmdiyudao_info: '(你即将对一名其他角色造成伤害时,若你的体力值小于其则锁定发动)本次伤害额外+1且你回复1点体力.',
            cmeguidao: '饿鬼道',
            cmeguidao_info: '①(锁定发动)你不能失去体力和减少体力上限,所有对你造成的伤害每次至多为2点.②(你单次受到大于等于2点的伤害时锁定发动)本次伤害改为2且你+1护甲.③(你受到伤害后,若你的护甲为0则锁定发动)你回复1点体力,若你没有受伤则改为+1护甲.',
            xingshichangmen: '星石',
            xingshichangmen_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<宝石>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<宝石>.选择完成后你结束此回合.',
            cmwanxiangtianyin: '天道·万象天引',
            cmwanxiangtianyin_info: '(一名其他角色使用杀指定一名除你外的其他角色时可发动,弃1张牌)将此牌目标改为你.本技能发动前你摸1张牌.',
            cmshenluotianzheng: '天道·神罗天征',
            cmshenluotianzheng_info: '(一名敌方角色对一名我方角色造成伤害时可发动,移除1<宝石>)本次伤害改为0,对所有敌方角色各造成1点伤害.',
            cmdibaotianxing: '天道·地爆天星',
            cmdibaotianxing_info: '(出牌阶段,若场上没有<地爆天星>则可发动,移除x宝石,弃3-x张基本牌,1≤x≤3)令一名敌方角色获得<地爆天星>.(地爆天星:拥有此标记的角色跳过其下个回合,其下个回合开始前可以选择将体力调整为1且受到一点大地伤害并取消<地爆天星>的效果,不论效果是否发动,触发后移除此标记.)',
            siji_zhanmeng: '战梦',
            siji_zhanmeng_info: '准备阶段和结束阶段开始时,你可以将1至4名角色区域内的各一张牌置于你的武将牌上,称为<战梦>;当一名角色需要对你使用【杀】时,其可以移去两张<战梦>,视为对你使用了一张【杀】.',
            xuegaosi: '告死',
            xuegaosi_info: '死亡前,若<不折>已发动,则将武将牌替换为<腐化默陈>并将体力回复至上限.',
            fulanbukanzhihun: '腐魂',
            fulanbukanzhihun_info: '锁定技,①你的判定区被置入牌时,你立刻获得这些牌,你跳过判定阶段;②男性角色计算与你的距离+x(x为场上存活人数+2),其他性别角色计算与你的距离+∞;③你的手牌上限为你体力上限的2倍;④你成为一名角色使用伤害类基本牌的目标后,若你已受伤,此牌对你无效,且你获得此牌对应的所有实体牌并摸2张牌,若你未受伤,则你选择对自己造成1点伤害或摸4张牌.(若在？？情况下,则……)',
            canpobukanzhixin: '残心',
            canpobukanzhixin_info: '锁定技,每当你成为一名角色使用牌的目标后,若此牌不为基本牌或装备牌且你不是此牌的唯一目标,则你选择一项:1.令此牌对所有其他目标无效,你摸1张牌;2.令此牌对你无效并对你自己造成1点伤害(若在？？情况下,则……).',
            posuibuzhengzhizhi: '碎指',
            posuibuzhengzhizhi_info: '你成为其他角色使用牌的目标后,你可观看其手牌并弃置其3张牌(不足全弃),你与其各失去1点体力.(若在？？情况下,则……)',
            qinshifulanzhixue: '腐血',
            qinshifulanzhixue_info: '①你回复体力时,令回复量+2;②你使用基本牌(【闪】除外)的效果+2;③你的准备阶段开始时,若你手牌中没有【桃】,则你获得一张【桃】并摸1张牌;④你的体力上限不会减少.(若处于？？状态下……)',
            mochen_sishengsi: '...',
            mochen_sishengsi_info: '若……则',
            mochen_busizhoujuesi: '默陈不死咒绝',
            mochen_busizhoujuesi_info: '',
            sam: '装甲',
            sam_info: '锁定技,每轮开始时,你和护甲值大于5的角色将护甲值调整为5,没有护甲值的角色获得5护甲.',
            tianhuochongji: '天火冲击',
            tianhuochongji_info: '蓄力技(5/10),你造成伤害时,若不处于<完全燃烧>形态,则失去2点体力(保留1点体力),获得5蓄力点,若此时蓄力点已满,则移除自身当前存在的负面buff(当然,不可能所有的都移除),且直到你的回合开始时,若你的判定区被置入牌,你获得这些牌.',
            wanquanranshao: '完全燃烧',
            wanquanranshao_info: '若你的蓄力点已满且你不处于<完全燃烧>形态,则可消耗所有蓄力点,进入<完全燃烧>形态直至回合结束,此形态下,你的非桃酒的基本牌以及所有延时类锦囊牌均视为杀,你使用杀无距离限制且指定目标时,回复1点体力,获得1蓄力点,则此杀可额外指定2名其他角色为目标,你对有护甲/无护甲的其他角色使用杀造成的伤害额外+2/1,(①若因此击破其他角色护甲,则你获得1张杀(概率获得暗灭)且对该角色造成的所有伤害额外+1,本回合你使用杀次数额外+1;②若你击杀了一名其他角色,则你获得1张杀(概率获得暗灭)且本回合你使用杀次数额外+1.以上效果持续至你退出<完全燃烧>形态).',
            samjijia: '装甲',
            samjijia_info: '锁定技,每轮开始时,你和护甲值大于5的角色将护甲值调整为5,没有护甲值的角色获得5护甲,你获得1张暗灭.',
            jietianhuochongji: '天火冲击',
            jietianhuochongji_info: '蓄力技(5/10)<br><br>&nbsp;&nbsp;① 你造成伤害时,若不处于<完全燃烧>形态,则失去2点体力(保留1点体力),获得5蓄力点;<br><br>&nbsp;&nbsp;② 你受到伤害或不因①失去体力时,获得等量蓄力点.<br><br>&nbsp;&nbsp;③ 若①或②触发后蓄力点已满,则移除自身当前存在的负面buff(当然,不可能所有的都移除),且直到你的回合开始时,若你的判定区被置入牌,你获得这些牌. ',
            jiewanquanranshao: '完全燃烧',
            jiewanquanranshao_info: '若你的蓄力点已满且你不处于<完全燃烧>形态,则可消耗所有蓄力点,令你本回合使用杀的次数额外+1并进入<完全燃烧>形态直至回合结束,此形态下,你的非桃酒的基本牌以及所有延时类锦囊牌均视为杀,你使用杀无距离限制且指定目标时,回复1点体力,获得1蓄力点,则此杀可额外指定2名其他角色为目标,你对有护甲/无护甲的其他角色使用杀造成的伤害额外+2/1,(①若因此击破其他角色护甲,则你获得1张暗灭且对该角色造成的所有伤害额外+1,本回合你使用杀次数额外+1;②若你击杀了一名其他角色,则你获得1张暗灭且本回合你使用杀次数额外+1.以上效果持续至你退出<完全燃烧>形态).',
            jiposuodian: '弱点击破',
            jiporuodian_info: '',
            默陈誓锁: '默陈誓锁',
            默陈誓锁_info: '锁定技,所有其他角色的触发技能无效.',
            默陈自我封印躯壳: '默陈自我封印',
            默陈自我封印躯壳_info: '',
            '渐渐的腐烂(默)': '默陈的反色哀歌',
            '渐渐的腐烂(默)_info': '',
            狂刀暴乱: '狂刀暴乱',
            狂刀暴乱_info: '锁定技,你的非桃基本牌视为杀,你使用的杀无视距离和次数限制,伤害+2且对体力值大于等于你的体力值的目标强制命中.(若场上存在<GOD>,则他也获得此效果.若拥有此效果时命中流萤,则不会对她造成伤害并改为额外为她+2护甲)',
            枭魂暴乱: '枭魂暴乱',
            枭魂暴乱_info: '锁定技,所有角色回复体力后弃置等同于当前体力值的牌且使用的杀和桃无效直至腐化默陈回合结束(本技能对GOD,流萤和腐化默陈无效)',
            绝箭暴乱: '绝箭暴乱',
            绝箭暴乱_info: '你可以弃1张非基本牌,视为使用一张<万剑齐发>,你的<万箭齐发>造成的所有伤害额外+2.若有角色使用<闪>响应你的<万剑齐发>,对该角色造成5次1点伤害.(本技能不会对GOD,流萤和腐化默陈造成伤害.)',
            shisiwuhuan: '誓死',
            shisiwuhuan_info: '①每受到1点伤害,失去1点体力或失去1点护甲,+1<誓>;每有5<誓>,你造成的所有伤害额外+1,攻击范围额外+1;每有10<誓>,你每回合使用杀的限制次数和回闪量额外+1.',
            shisibuhuan: '誓死',
            shisibuhuan_info: '①无法回复体力和减少体力上限,改为获得2倍量的护甲和体力上限;②你的体力大于1时,则:单次只会受到1点伤害,每受到1次伤害或失去1点体力+1护甲,你的护甲不为你抵挡伤害,你不会死亡且你的体力最多被减至1;③体力为1时,若你有护甲,则:单次最多受到3点伤害,你的体力不会低于1且你不会死亡.',
            mouxiayuan: '挟援',
            mouxiayuan_info: '每轮限一次,拥有护甲的一名其他角色受到伤害后,若其因此失去了所有护甲,你可以弃置两张手牌并令其获得原先护甲值的护甲.',
            moujieyue: '节钺',
            moujieyue_info: '结束阶段,你可以选择一名其他角色,其获得一点护甲,摸两张牌,交给你两张牌.',
            siji_zhanmeng2: '战梦',
            siji_zhanmeng2_info: '',
            equit_wugai: '无改',
            equit_wugai_info: '',
            equit_bugai: '无改',
            equit_wugai_info: '',
            siji_yingdun: '影遁',
            siji_yingdun_info: '<font color=orange>锁定技,</font><br>①你的判定区被废除,你计算与其他角色的距离+1,你的手牌上限等于你的体力上限+2;②你成为一名角色使用伤害类基本牌的目标后,若你已受伤,此牌对你无效,且你获得此牌对应的所有实体牌,若你未受伤,则你摸2张牌.',
            siji_shoujue: '兽绝',
            siji_shoujue_info: '<font color=orange>锁定技,</font><br>你的回合内,其他角色的全部技能失效;准备阶段和结束阶段开始时,你视为使用了一张【南蛮入侵】.',
            siji_shoujue1: '兽绝',
            siji_shoujue1_info: '',
            siji_shoujue2: '兽绝',
            siji_shoujue2_info: '',
            siji_yihua: '异化',
            siji_yihua_info: '觉醒技:你进入濒死状态时,你将武将牌替换为【堕化绝君】,你将体力值回复至4点.',
            siji_shenduo: '神堕',
            siji_shenduo_info: '觉醒技:你即将死亡时,你不死亡并体力回复至6点,将武将牌替换为【堕化真神】',
            siji_shengui: '神归',
            siji_shengui_info: '限定技,<font color=orange>锁定技,</font><br>你死亡前,你不死亡并将体力值回复至6点',
            siji_yinghu: '影护',
            siji_yinghu_info: '<font color=orange>锁定技,</font><br>①你的体力上限不会减少;②其他角色即将获得你的牌或你交给其他角色非【毒】牌时,你取消之,对其造成1点伤害;③若你没有进入濒死状态,你不会死亡;④你使用【杀】指定目标后,若目标体力上限大于33,此【杀】伤害值改为其体力上限.',
            siji_anzhou: '暗咒',
            siji_anzhou_info: '出牌阶段限一次,你可以指定一名其他角色并选择一项:1.令其加一点体力上限,回复1点体力,其弃置其区域内的所有牌;2.令其减1点体力上限,失去1点体力,其摸体力上限数张牌(至多为5).若指定的角色为你,则你选择选项1时额外回复1点体力;选择选项2时额外摸你体力上限数的牌(至多为5).',
            siji_daohui: '道回',
            siji_daohui_info: '限定技,<font color=orange>锁定技,</font><br>你死亡前,你不死亡并将体力值回复至2点',
            siji_xuelan: '血蓝',
            siji_xuelan_info: '<font color=orange>锁定技,</font><br>①你回复体力时,令回复量+1;②你使用基本牌(【闪】除外)的效果+1;③你的准备阶段开始时,你摸1张牌,若你手牌中没有【桃】,则你获得一张【桃】并摸1张牌;④你的技能<天道>和<血蓝>不会失去或失效,你的体力上限不会减少,你的判定区被废除;⑤你的回合内,其他角色的所有技能失效.',
            siji_tianyi: '天意',
            siji_tianyi_info: '①一名角色的判定结果即将生效时,你可以摸2张牌,你可以打出一张牌替换之;②<font color=orange>锁定技,</font><br>若你没有进入濒死状态,你不会死亡.',
            siji_tianyi1: '天意',
            siji_tianyi1_info: '',
            siji_xueshi: '血噬',
            siji_xueshi_info: '<font color=orange>锁定技,</font><br>你造成伤害后,回复等同于伤害值数的体力,溢出的回复量改为摸等量的牌.',
            siji_tianchi: '天褫',
            siji_tianchi_info: '你造成伤害时,可令伤害增加至多x点(x为你的当前体力值-1),若此伤害值大于2,你须先失去等量体力.',
            siji_xuehu: '血护',
            siji_xuehu_info: '<font color=orange>锁定技,</font><br>①你的技能不会失去或失效,你的体力上限不会减少;②你防止你受到的属性伤害,且你每次受到的伤害值至多为1;③你的回合内,其他角色的全部技能失效;④若你没有进入濒死状态,你不会死亡.',
            siji_niliu: '逆流',
            siji_niliu_info: '限定技,<font color=orange>锁定技,</font><br>你死亡前,你不死亡并将体力值回复至3点,加4点体力上限并获得<腐变>,<腐佑>,<碎忆>,<腐守>,<碎梦>,<腐回>,<义结>,<枭魂>.',
            siji_fengsuo1: '封锁',
            siji_fengsuo1_info: '不能使用或打出牌',
            siji_fengsuo: '封锁',
            siji_fengsuo_info: '封锁',
            siji_fubian: '腐变',
            siji_fubian_info: '<font color=orange>锁定技,</font><br>①伤害类基本牌和伤害类锦囊牌对你无效;②你不能成为延时类锦囊牌的目标,当你翻面或横置或重置时,你摸3张牌(若你已受伤改为回复1点体力并摸3张牌);③当你成为伤害类基本牌或伤害类锦囊牌的目标后,若你已横置,则你重置;④你发动<腐变①>的效果后,你失去1点体力并摸2张牌;⑤每名角色的结束阶段,你回复1点体力,若你未受伤则摸2张牌.',
            siji_fuyou: '腐佑',
            siji_fuyou_info: '<font color=orange>锁定技,</font><br>①你防止你的体力上限的减少并摸1张牌;②其他角色即将获得你的牌或你交给其他角色非【毒】牌时,你取消之,对其造成1点伤害,且你回复1点体力;③每名角色的回合开始时,你移除所有额外获得的技能;④你使用【杀】指定目标后,若目标体力上限大于21,此【杀】伤害值增加x(x为其体力上限);⑤若你未进入濒死状态,你不会死亡.',
            siji_suiyi: '碎忆',
            siji_suiyi_info: '<font color=orange>锁定技,</font><br>①你的手牌上限-6,准备阶段和结束阶段开始时,你摸4+X张牌,回复2点体力并执行一个额外的出牌阶段(X为游戏轮数,至多为6);②出牌阶段,你使用【杀】次数上限和攻击范围+3.',
            siji_suimeng: '碎梦',
            siji_suimeng_info: '①一名角色的判定结果即将生效时,你摸2张牌并可以打出一张牌替换之;②你使用【杀】指定目标后,你令其本回合内全部技能失效且不能响应此【杀】.',
            siji_suimeng1: '碎梦',
            siji_suimeng1_info: '你使用【杀】指定目标后,你令其本回合内全部技能失效且不能响应此【杀】.',
            siji_suimeng2: '碎梦',
            siji_suimeng2_info: '',
            siji_qufuyaogao: '祛腐药膏',
            siji_qufuyaogao_info: '出牌阶段结束时,你回复3点体力,持续1回合.',
            siji_yijie: '义结',
            siji_yijie_info: '你可以将你的一张牌当【桃】或【桃园结义】使用;你使用的【桃园结义】不能被响应.',
            siji_xiaohun: '枭魂',
            siji_xiaohun_info: '一名其他角色于你的回合内回复体力后,你可以选择一项:1.弃置该角色x张牌(x为其当前体力值);2.令该角色使用或打出的【杀】和【桃】无效直至该角色下回合结束.',
            siji_xiaohun_noUse: '枭魂',
            siji_xiaohun_noUse_info: '使用或打出的【杀】和【桃】无效.',
            siji_jiejiu: '解救',
            siji_jiejiu_info: '一名其他角色进入濒死状态时,你可以失去1点体力,弃置一张牌(无牌则不弃),令其回复体力至2点并摸2张牌,',
            siji_yibian: '疑变',
            siji_yibian_info: '锁定技,①游戏开始时,你从5张<疑变>武将牌中选择一张,将你的武将牌替换为该武将牌;②每名角色回合开始时,你检索当前的武将牌,若是<疑变>武将牌,则你可以替换为其他<疑变>武将牌,否则你的武将牌随机替换为一名<疑变>武将牌.',
            siji_juehui: '绝回',
            siji_juehui_info: '一名其他角色进入濒死状态时,你可以失去2点体力,弃置一张牌(无牌则不弃),令其回复体力至3点,摸3张牌并复原武将牌,你回复1点体力.',
            siji_fuhui: '腐回',
            siji_fuhui_info: '一名其他角色进入濒死状态时,你可以失去任意点体力(至多为该角色的体力上限与你当前体力值中的最小值),令其回复体力至x点,摸3+x张牌并复原武将牌,你回复1点体力(x为你以此法失去的体力值数).<font color=#339900>就算腐烂至死,也要救下你!</font>',
            siji_fushi: '腐蚀',
            siji_fushi_info: '<font color=orange>锁定技,</font><br>①所有角色展示武将牌后,你的回合内或你受到一次伤害后,其他角色的所有技能失效(持续时间:1.若为所有人展示武将牌后,则持续至第一个回合结束;若为你的回合内或你受到伤害后,则持续至当前回合结束);②你于出牌阶段内使用或打出2或2的倍数张牌后,你失去1点体力.',
            siji_fuhua: '腐化',
            siji_fuhua_info: '限定技,<font color=orange>锁定技,</font><br>你死亡前,你不死亡并将武将牌替换为<腐化绝君>,将体力值回复至上限.',
            siji_xuejian_huifu: '血剑',
            siji_xuejian_huifu_info: '',
            siji_xuejian1: '血剑',
            siji_xuejian1_info: '',
            siji_xuejian_jiashang1: '血剑',
            siji_xuejian_jiashang1_info: '',
            siji_xuejian: '血剑',
            siji_xuejian_info: '<font color=orange>锁定技,</font><br>你使用的牌不能被响应,你造成伤害时,可以弃置2+x张牌(x为当前伤害值,不足全弃,无牌不弃),令此伤害+2,令受伤角色回复2点体力(分2次,每次回复1点).',
            siji_guangji: '广积',
            siji_guangji_info: '<font color=orange>锁定技,</font><br>一名角色使用或打出一张牌时,你摸一张牌',
            siji_gaozhu: '高筑',
            siji_gaozhu_info: '<font color=orange>锁定技,</font><br>一名角色造成伤害或失去体力时,你回复1点体力,若你未受伤则改为获得1点护甲',
            siji_pofang: '破防',
            siji_pofang_info: '破防',
            siji_jijue: '汲绝',
            siji_jijue_info: '准备阶段,你可以将体力值减为1,若如此做,本回合你跳过判定阶段,摸牌阶段额外摸x张牌,出牌阶段使用【杀】限制次数和攻击范围+x且以你为来源的伤害+x,本回合手牌上限+x(x为你以此法减少的体力值数);你本回合获得<血噬>.',
            siji_jueming: '绝命',
            siji_jueming_info: '出牌阶段限一次,若你的体力值为1,你可以指定任意名其他角色,失去1点体力,若你脱离了濒死状态,则你对这些角色造成2x点伤害(x为你已损失的体力上限+1),你减1点体力上限.',
            siji_huoyi: '火疑',
            siji_huoyi_info: '一名角色受到非火属性伤害时,你可弃置x张牌(x为伤害数),令此伤害改为火属性且伤害值+1.<font color=#f00>注:<火疑>转化的火属性伤害不会发动<火变>.</font>',
            siji_huobian: '火变',
            siji_huobian_info: '一名角色受到火属性伤害时,你可以摸x张牌(x为伤害数),去除伤害属性,你令此伤害+1或-1.<font color=#f00>注:<火变>转化的无属性伤害不会发动<火疑>.</font>',
            siji_leiyi: '雷疑',
            siji_leiyi_info: '一名角色受到非雷属性伤害时,你可弃置x张牌(x为伤害数),令此伤害改为雷属性且伤害值+1.<font color=#8B008B>注:<雷疑>转化的雷属性伤害不会发动<雷变>.</font>',
            siji_leibian: '雷变',
            siji_leibian_info: '一名角色受到雷属性伤害时,你可以摸x张牌(x为伤害数),去除伤害属性,你令此伤害+1或-1.<font color=#8B008B>注:<雷变>转化的无属性伤害不会发动<雷疑>.</font>',
            siji_shibian: '失变',
            siji_shibian_info: '一名角色即将失去体力时,你可以摸x张牌(x为本次失去体力数),将其改为伤害,你令此伤害+1或-1.<font color=#2F4F4F>注:<失变>转化的伤害无来源且不会发动<失疑>.</font>',
            siji_shiyi: '失疑',
            siji_shiyi_info: '一名角色受到伤害时,你可弃置x张牌(x为伤害数),令此伤害改为失去体力且数值+1.<font color=#2F4F4F>注:<失疑>转化的失去体力不会发动<失变>.</font>',
            siji_shenyi: '神疑',
            siji_shenyi_info: '一名角色受到非神属性伤害时,你可弃置x张牌(x为伤害数),令此伤害改为神属性且伤害值+1.<font color=#D9D919>注:<神疑>转化的神属性伤害不会发动<神变>.</font>',
            siji_shenbian: '神变',
            siji_shenbian_info: '一名角色受到神属性伤害时,你可以摸x张牌(x为伤害数),去除伤害属性,你令此伤害+1或-1.<font color=#D9D919>注:<神变>转化的无属性伤害不会发动<神疑>.</font>',
            siji_bingyi: '冰疑',
            siji_bingyi_info: '一名角色受到非冰属性伤害时,你可弃置x张牌(x为伤害数),令此伤害改为冰属性且伤害值+1.<font color=#51808F>注:<冰疑>转化的冰属性伤害不会发动<冰变>.</font>',
            siji_bingbian: '冰变',
            siji_bingbian_info: '一名角色受到冰属性伤害时,你可以摸x张牌(x为伤害数),去除伤害属性,你令此伤害+1或-1.<font color=#51808F>注:<冰变>转化的无属性伤害不会发动<冰疑>.</font>',
            siji_zhenwu: '真无',
            siji_zhenwu_info: '所有技能无效',
            siji_wuxiao: '无效',
            siji_wuxiao_info: '所有技能无效,此技能对腐化绝君无效,对血封部分无效',
            fanshi1: '反噬',
            fanshi1_info: '(你受到伤害后锁定发动)伤害来源受到1点无来源伤害.',
            shuiying: '水影',
            shuiying_info: '(你受到伤害时可发动,弃置任意数量的非基本牌且至多为伤害数)抵消等量的伤害.',
            jiefanshi: '反噬',
            jiefanshi_info: '(你受到伤害后且伤害来源不为你时锁定发动)伤害来源受到x点无来源伤害(x为本次伤害数且至少为1).',
            jieshuiying: '水影',
            jieshuiying_info: '(你损失体力时可发动,弃置任意数量的非基本牌且至多为本次损失体力数)减少等量的损失体力数值,你摸x张牌(x为你以此法弃置牌的数量).',
            狂战准备语音: '狂战准备语音',
            狂战准备语音_info: '',
            元素准备语音: '元素准备语音',
            元素准备语音_info: '',
            死灵法师准备语音: '死灵法师准备语音',
            死灵法师准备语音_info: '',
            渐渐的腐烂: '绝君的哀歌',
            渐渐的腐烂_info: '',
            qianxing1: '潜行',
            qianxing1_info: '(准备阶段开始时可发动,移除1<宝石>)获得状态<潜行>(持续至你下个回合开始),在此状态下你不能成为其他角色使用牌的目标,你的手牌上限-1,且你使用的杀不能被响应且伤害+x(x为你剩余<宝石>数量).本回合你不能发动技能<星石>.',
            siji_xingshiansha: '星石',
            siji_xingshiansha_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<宝石>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<宝石>.选择完成后你结束此回合.',
            qianxing2: '潜行',
            qianxing2_info: '',
            xingshiansha: '星石',
            xingshiansha_info: '',
            tianxing1: '天星',
            tianxing1_info: '①游戏开始时,你将牌堆顶28张牌扣置于你的武将牌上,称为<星>,/摸牌阶段开始时,你可以用任意数量手牌交换等量的<星>;②你每失去1张<星>,你加2点体力上限并回复体力至上限;③你的准备阶段开始时,若你没有<星>,你永久获得1个<天雾>标记,且直至游戏结束你的体力上限不再变化.<br><br>&nbsp;&nbsp;<font color=#f00>(仅挑战模式下且神诸葛亮不为boss时生效:1.天星①中的28改为49;2.游戏开始时,废除敌方所有角色的装备区且不能回复;3.敌方角色不能获得我方角色的牌且敌方角色的体力上限大于等于25时,任意角色每使用一张牌,则神诸葛亮对该敌方角色造成1点无视技能和护甲且不显示在武将牌上的伤害).</font>',
            tianxingx: '天星',
            tianxingx_info: '',
            baofeng: '暴风',
            baofeng_info: '结束阶段,你可以弃置任意数量的<星>,令等量角色获得<暴风>标记,拥有<暴风>标记的角色受到的火焰伤害+3,且其受到火焰伤害后,你加等量的护甲并摸等量的牌.',
            baofeng2: '暴风',
            baofeng2_info: '',
            tianwu1: '天雾',
            tianwu1_info: '结束阶段开始时,你可以弃置任意数量的<星>,指定等量角色获得<天雾>标记直至你的下个回合开始时,拥有<天雾>标记的角色不能成为伤害牌和黑色牌的目标,且防止所有伤害和失去体力.',
            tianwu2a: '天雾',
            tianwu2a_info: '',
            tianwu3: '天雾',
            tianwu3_info: '',
            tianxing3: '天星',
            tianxing3_info: '',
            baofeng3: '暴风',
            baofeng3_info: '',
            tianxing4: '天星',
            tianxing4_info: '',
            tianwu4: '天雾',
            tianwu4_info: '',
            sigong: '死攻',
            sigong_info: '锁定技,你进入或脱离濒死状态时,视为对令你进入濒死状态的其他角色使用了一张【杀】或【决斗】.',
            jiesigong: '死攻',
            jiesigong_info: '锁定技,你进入或脱离濒死状态时,视为对令你进入濒死状态的角色(没有则改为一名敌方角色)使用了一张【杀】或【决斗】,此【杀】伤害+1;此【决斗】不能被【无懈可击】响应.',
            chaofeng49: '嘲讽',
            chaofeng49_info: '每名其他角色的回合开始时,你可以令其本回合内单次摸牌数固定为1并令其选择一项:1.跳过此回合摸牌阶段并对你造成x点伤害,你回复至y-1点(y>1)/1点(y=1)体力.(x等于y+你当前的护甲值数,y等于你发动此技能前的体力值数);2.(仅手牌数不小于3时可选)弃置3张手牌,本回合其使用牌只能指定你为目标,且所有我方角色+1护甲.',
            jiechaofeng: '嘲讽',
            jiechaofeng_info: '每名其他角色回合开始时,你可以令该角色跳过摸牌阶段且其回合内摸牌数固定为1,令其选择一项:1.对你造成x点伤害,你回复至y-1点(y>1)/1点(y=1)体力(x=y+你拥有的护甲值数,y为你的体力值);2.(仅手牌数大于等于4时可选)弃置4张手牌并摸1张牌,本回合使用牌只能指定你为目标,且我方所有角色+1护甲.',
            chaofeng36: '嘲讽',
            chaofeng36_info: '',
            chaofeng99: '嘲讽',
            chaofeng99_info: '',
            chaofeng999: '嘲讽',
            chaofeng999_info: '',
            狂战准备语音: '狂战准备语音',
            狂战准备语音_info: '',
            弓之女神准备语音: '弓之女神准备语音',
            弓之女神准备语音_info: '',
            '1_info': '',
            xingshichaofeng: '星石',
            xingshichaofeng_info: '出牌阶段开始时,你可以选择一项:1.摸3张牌,你+2<宝石>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<宝石>.选择完成后你结束此回合.',
            juechao20: '绝嘲',
            juechao20_info: '',
            juechao: '绝嘲',
            juechao_info: '濒死阶段,若为触发嘲讽1选项且y小于等于2,你可移除1<宝石>,令y值+5.',
            huiyao: '辉耀',
            huiyao_info: '(出牌阶段可发动,弃1张非基本牌)令所有角色+1护甲后你本回合使用杀的次数+1,本回合你不能发动技能<惩戒>和<圣光祈愈>.本技能一回合只能发动一次.',
            chengjie: '惩戒',
            chengjie_info: '(出牌阶段可发动,弃1张非基本牌)移除一名其他角色的1护甲(若该角色没有护甲改为获得其一张牌),你+1护甲且你本回合使用杀的次数+1,本回合你不能发动技能<辉耀>和<圣光祈愈>.本技能一回合只能发动一次.',
            shengji: '圣击',
            shengji_info: '(你使用杀造成伤害后可发动)+1护甲.',
            tianqiang: '天枪',
            tianqiang_info: '(你使用杀指定目标时可发动,移除2护甲)此杀不能被响应且此杀造成伤害后不能发动<圣击>.',
            diqiang: '地枪',
            diqiang_info: '(你使用杀造成伤害时可发动,移除至多4护甲)本次伤害额外+x(x为你以此法移除的护甲值数),且此杀造成伤害后不能发动<圣击>.',
            shengguangqiyu: '圣光祈愈',
            shengguangqiyu_info: '(出牌阶段可发动,移除1<宝石>)+2护甲且你本回合使用杀的次数+1,本回合你不能发动技能<天枪>,<辉耀>和<惩戒>.本技能一回合只能发动一次.',
            xingshishengqiang: '星石',
            xingshishengqiang_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<宝石>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<宝石>.选择完成后你结束此回合.',
            baoshi: '宝石',
            baoshi_info: '',
            juedifanji: '绝地反击',
            juedifanji_info: '(使用杀对一名敌方角色造成伤害时可发动,移除你的1<宝石>和本方角色所有护甲)本次伤害额外+1+x(x为以此法移除的护甲值数)',
            xishengxx: '牺牲',
            xishengxx_info: '(回合开始时,若你当前体力值>1则锁定发动)对自己造成1点无视护甲的伤害,此伤害不会触发<神圣庇护>.',
            shenshenghuwei: '神圣护卫',
            shenshenghuwei_info: '(当有本方角色受到的原伤害超过1时锁定发动)该角色+1护甲.',
            shenshengbihu: '神圣庇护',
            shenshengbihu_info: '(你受到伤害后锁定发动)你+1护甲.',
            xingshihuangjia: '星石',
            xingshihuangjia_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<宝石>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<宝石>.选择完成后你结束此回合.',
            jiejuedifanji: '绝地反击',
            jiejuedifanji_info: '(使用杀对一名敌方角色造成伤害时可发动,移除你的1<宝石>和本方角色所有护甲并将你的体力值和体力上限调整为1)本次伤害额外+1+x.(x为以此法移除的护甲值数+以此法失去的体力数+以此法失去的体力上限数)伤害结算后将体力上限调整至初始值.',
            jiexishengxx: '牺牲',
            jiexishengxx_info: '(回合开始时锁定发动,摸1张牌)若当前体力值>1则对自己造成1点无视护甲的伤害,此伤害不会触发<神圣庇护>.',
            jieshenshenghuwei: '神圣护卫',
            jieshenshenghuwei_info: '(当有本方角色受到的原伤害超过1时锁定发动)该角色+2护甲.你+1护甲',
            jieshenshengbihu: '神圣庇护',
            jieshenshengbihu_info: '(你受到伤害后锁定发动)你+1护甲并获得一张杀(概率获得暗灭)和一张闪.',
            jiehuiyao: '辉耀',
            jiehuiyao_info: '(出牌阶段可发动,弃1张非基本牌)你+2护甲并令所有其他角色+1护甲,你本回合使用杀的次数+1,本回合你不能发动技能<惩戒>和<圣光祈愈>.本技能一回合只能发动一次.',
            jiechengjie: '惩戒',
            jiechengjie_info: '(出牌阶段可发动,弃1张非基本牌)移除一名其他角色的所有护甲(若该角色没有护甲改为获得其一张牌),你增加等量护甲(该角色没有护甲则改为你+1护甲)且你本回合使用杀的次数+1,本回合你不能发动技能<辉耀>和<圣光祈愈>.本技能一回合只能发动一次.',
            jieshengji: '圣击',
            jieshengji_info: '①(使用杀命中目标后可发动)+1护甲;②(使用杀造成伤害后可发动)+1护甲',
            jiediqiang: '地枪',
            jiediqiang_info: '(你使用杀造成伤害时可发动,移除x护甲)本次伤害额外+x(x至多为你当前拥有的护甲值数),且此杀造成伤害后不能发动<圣击②>.',
            jieshengguangqiyu: '圣光祈愈',
            jieshengguangqiyu_info: '(出牌阶段可发动,移除1<宝石>)+2护甲且你本回合使用杀的次数+1,本回合你不能发动技能<辉耀>和<惩戒>.本技能一回合只能发动一次.',
            jietianqiang: '天枪',
            jietianqiang_info: '(你使用杀指定目标时可发动,移除2护甲)此杀不能被响应且此杀命中或造成伤害后不能发动<圣击>.',
            linghunbisuo: '灵魂闭锁',
            linghunbisuo_info: '①(仅女性角色回合开始时可发动,对自己造成3点伤害)本回合其不能对你使用牌,无法对你造成伤害;此回合结束时,你回复1点体力.②(锁定发动)你计算与所有女性角色和所有女性角色计算与你的距离均+∞.',
            linghunzhuore: '灵魂灼热',
            linghunzhuore_info: '(出牌阶段可发动,弃3张牌并对自己造成3点火属性伤害)对一名其他角色造成3点神火属性伤害.一回合只能发动一次.',
            linghunhuilang: '灵魂回廊',
            linghunhuilang_info: '(使用一张♥️️️牌或一张♠️️️牌时可发动,弃1张牌)你+1护甲(护甲值为2时不再获得护甲)且摸1张牌,可令一名其他角色回复1点体力.',
            linghunshouhu: '灵魂守护',
            linghunshouhu_info: '(锁定发动)①你无法失去体力和减少体力上限,所有对你造成的伤害每次至多为3点;②你受到超过3的伤害时(先于①发动),你回复1点体力或+1<回梦>.',
            linghunhuimeng: '灵魂回梦',
            linghunhuimeng_info: '①(锁定发动)每2轮开始时,你+1<回梦>;②(有<回梦>时锁定发动)灵魂闭锁和灵魂灼热的条件改为移除1<回梦>.',
            wupaiwushang: '灵魂闭锁',
            wupaiwushang_info: '',
            wupaiwushangbh: '灵魂血锁',
            wupaiwushangbh_info: '',
            huimengx: '回梦',
            huimengx_info: '',
            xinlinggongtong: '心灵共通',
            xinlinggongtong_info: '(出牌阶段可发动,自身受到1点冰属性伤害)指定一名友方角色,本回合你/其的手牌对其/你可见,该角色交给你至多3张手牌,你交还其等量的牌,你选择一名敌方角色,你与其分别视为对该敌方角色使用一张<杀>.本技能一回合只能发动一次.',
            xinlingjuxiang: '心灵具象',
            xinlingjuxiang_info: '(一名其他角色对你使用转化牌或虚拟牌时可发动,自身受到1点冰属性伤害)令此牌无效或对你结算2次,你获得1张同名牌,之后你可以使用此牌',
            xinlingbingfeng: '心灵冰封',
            xinlingbingfeng_info: '(仅敌方角色回合开始时可发动,自身受到3点冰属性伤害)该角色跳过此回合,其可选择受到3点冰属性伤害来取消之.',
            xinlingfeijian: '心灵扉间',
            xinlingfeijian_info: '(使用一张♦️️️牌或一张♣️️️牌时可发动,弃1张牌)你+1护甲(护甲值为2时不再获得护甲)且摸1张牌,可令一名其他角色回复1点体力.',
            xinlingpingzhang: '心灵屏障',
            xinlingpingzhang_info: '(锁定发动)①你无法失去体力和减少体力上限,所有对你造成的伤害每次至多为3点;②你受到超过3的伤害时(先于①发动),你回复1点体力或+1<幻变>.',
            huanbianx: '幻变',
            huanbianx_info: '',
            xinlinghuanbian: '心灵幻变',
            xinlinghuanbian_info: '①(锁定发动)每2轮开始时,你+1<幻变>;②(有<幻变>时锁定发动)心灵冰封,心灵共通和心灵具象的条件改为移除1<幻变>.',
            jielinghunbisuo: '灵魂闭锁',
            jielinghunbisuo_info: '①(仅女性角色回合开始时可发动,对自己造成2点伤害)本回合其不能对你使用牌,无法对你造成伤害;此回合结束时,你回复1点体力.②(锁定发动)你计算与所有女性角色和所有女性角色计算与你的距离均+∞.',
            jielinghunhuilang: '灵魂回廊',
            jielinghunhuilang_info: '(使用一张♥️️️牌或一张♠️️️牌时可发动,弃1张牌)你+1护甲且摸1张牌,可令一名其他角色回复1点体力.',
            jielinghunshouhu: '灵魂守护',
            jielinghunshouhu_info: '(锁定发动)①你无法失去体力和减少体力上限,所有对你造成的伤害每次至多为2点;②你受到超过2的伤害时(先于①发动),你回复1点体力或+1<回梦>.',
            jielinghunhuimeng: '灵魂回梦',
            jielinghunhuimeng_info: '①(锁定发动)每轮开始时,你+1<回梦>;②(有<回梦>时锁定发动)灵魂闭锁和灵魂爆裂的条件改为移除1<回梦>.',
            jielinghunbaolie: '灵魂爆裂',
            jielinghunbaolie_info: '(出牌阶段可发动,弃2张牌并对自己造成2点火属性伤害)对一名其他角色造成3点神火属性伤害,若发动此技能前你的体力值小于目标角色,则改为对目标角色造成4点神火属性伤害.本技能一回合只能发动一次.',
            jiexinlinggongtong: '心灵共通',
            jiexinlinggongtong_info: '(出牌阶段可发动,自身受到1点冰属性伤害)指定一名友方角色,本回合你/其的手牌对其/你可见,该角色交给你至多4张手牌,你交还其等量的牌,你选择一名敌方角色,你与其分别视为对该敌方角色使用一张<杀>且各摸1张牌.本技能一回合只能发动一次.',
            jiexinlingjuxiang: '心灵具象',
            jiexinlingjuxiang_info: '(一名其他角色对你使用转化牌或虚拟牌时可发动,自身受到1点冰属性伤害)令此牌无效或对你结算2次,你获得2张同名牌,之后你可以使用这些牌',
            jiexinlingbingbao: '心灵冰爆',
            jiexinlingbingbao_info: '(仅敌方角色回合开始时可发动,自身受到2点冰属性伤害)该角色跳过此回合,其可选择受到3点冰属性伤害并弃3张手牌来取消之,若你发动此技能前该角色体力值大于你,则其改为受到4点冰属性伤害并弃4张手牌.选择完成后你回复1点体力.',
            jiexinlingfeijian: '心灵扉间',
            jiexinlingfeijian_info: '(使用一张♦️️️牌或一张♣️️️牌时可发动,弃1张牌)你+1护甲且摸1张牌,可令一名其他角色回复1点体力.',
            jiexinlingpingzhang: '心灵屏障',
            jiexinlingpingzhang_info: '(锁定发动)①你无法失去体力和减少体力上限,所有对你造成的伤害每次至多为2点;②你受到超过2的伤害时(先于①发动),你回复1点体力或+1<幻变>.',
            huanbianx: '幻变',
            huanbianx_info: '',
            jiexinlinghuanbian: '心灵幻变',
            jiexinlinghuanbian_info: '①(锁定发动)每轮开始时,你+1<幻变>;②(有<幻变>时锁定发动)心灵冰封,心灵共通和心灵具象的条件改为移除1<幻变>.',
            siji_suimeng3: '碎梦',
            siji_suimeng3_info: '',
            linghunxuesuo: '灵魂血锁',
            linghunxuesuo_info: '①(仅女性角色回合开始前可发动,对自己造成2点伤害)你与其各+2<崩毁>.本回合其不能对你使用牌,无法对你造成伤害.此回合结束时,你回复1点体力.②(锁定发动)你计算与所有女性角色和所有女性角色计算与你的距离均+∞.',
            linghunbenghui: '灵魂崩毁',
            linghunbenghui_info: '(出牌阶段可发动,弃2张牌并对自己造成2点火属性伤害)对一名其他角色造成3点火属性伤害.若发动此技能前目标角色的体力值比你多,本次伤害额外+1.若目标有<崩毁>,本次伤害额外+x(x为<崩毁>数目),伤害结算完毕后移除目标所有<崩毁>.',
            linghunxukong: '灵魂虚空',
            linghunxukong_info: '(使用或打出一张♥️️️或♠️️️牌时可发动,弃1张牌)+1护甲且你摸1张牌,可令一名角色回复1点体力.若其没有<崩毁>,你可令其+1<崩毁>,若其有<崩毁>则改为可以令其+1或-1<崩毁>.',
            linghunshouhubh: '灵魂守护',
            linghunshouhubh_info: '①(锁定发动)你不会失去体力或减少体力上限,所有对你造成的伤害每次至多为2点;②(你受到大于2的伤害时锁定发动)将伤害改为2且你选择一项:1.回复1点体力,若你没有<崩毁>则+1<崩毁>;2.+1<碎梦>,若你有<崩毁>且数目>2,则可额外+x<碎梦>并-2x<崩毁>.(x为<崩毁>数目的一半且向下取整)',
            linghunsuimeng: '灵魂碎梦',
            linghunsuimeng_info: '①(每轮游戏开始时锁定发动)+1<碎梦>;②(有<碎梦>时锁定发动)<灵魂血锁>和<灵魂崩毁>的发动条件改为移除1<碎梦>.',
            siji_kuanghua: '狂化',
            siji_kuanghua_info: '(锁定发动)你造成的伤害+1;准备阶段,若你装备区里没有<血魇天镰>但牌堆或弃牌堆中有,则你装备之.',
            siji_xingshikuangzhan: '星石',
            siji_xingshikuangzhan_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<宝石>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<宝石>.选择完成后你结束此回合.',
            shuijing: '水晶',
            shuijing_info: '',
            siji_silie: '撕裂',
            siji_silie_info: '(你造成伤害时可发动,移除1<宝石>)本次伤害额外+2.',
            xueyingkuangdao: '血影狂刀',
            xueyingkuangdao_info: '(你使用【杀】造成伤害时概率触发)本次伤害额外+x-1(x为该角色的体力上限).',
            xuexingpaoxiao2: '血腥咆哮',
            xuexingpaoxiao2_info: '',
            xuexingpaoxiao: '血腥咆哮',
            xuexingpaoxiao_info: '①(锁定发动)你使用杀攻击指定目标时,无视目标防具,②(目标护甲值为奇数时锁定发动)本次攻击强制命中.',
            weilicifu: '威力赐福',
            weilicifu_info: '(出牌阶段可发动,弃1张非基本牌)令一名角色获得1<威力赐福>.若如此做,本回合你不能发动技能<黑暗诅咒>,<光辉信仰>和<迅捷赐福>.本技能一回合只能发动一次.',
            xunjiecifu: '迅捷赐福',
            xunjiecifu_info: '(出牌阶段可发动,弃1张非基本牌)令一名角色获得1<迅捷赐福>.若如此做,本回合你不能发动技能<黑暗诅咒>,<光辉信仰>和<威力赐福>.本技能一回合只能发动一次.',
            heianzuzhou: '黑暗诅咒',
            heianzuzhou_info: '(出牌阶段可发动,移除1<祈祷符文>)令一名其他角色与你各受到1点伤害,其弃置2张牌,你摸2张牌,本回合你不能发动技能<迅捷赐福>,<威力赐福>和<光辉信仰>.本技能一回合只能发动一次.',
            guanghuixinyang: '光辉信仰',
            guanghuixinyang_info: '(出牌阶段可发动,移除1<祈祷符文>)与一名其他角色各摸2张牌,你可以令一名角色回复1点体力(该角色未受伤则改为获得1点护甲).本回合你不能发动<黑暗诅咒>,<迅捷赐福>和<威力赐福>.本技能一回合只能发动一次.',
            qidao: '祈祷',
            qidao_info: '(宝石技,准备阶段可发动,移除1<宝石>)进入<祈祷形态>.此形态下你使用一张杀指定目标时,你+2<祈祷符文>(上限为3),本回合你不能发动<星石>.',
            falichaoxi: '法力潮汐',
            falichaoxi_info: '(水晶技,你发动你的非<祈祷>和<法力潮汐>技能后可发动,移除1<水晶>)回复所有技能限制.',
            weilicifumark: '威力赐福',
            weilicifumark_info: '',
            weilicifux: '威力赐福',
            weilicifux_info: '',
            xunjiecifumark: '迅捷赐福',
            xunjiecifumark_info: '',
            xunjiecifux: '迅捷赐福',
            xunjiecifux_info: '',
            xunjie: '迅捷',
            xunjie_info: '',
            jieweilicifu: '威力赐福',
            jieweilicifu_info: '(出牌阶段可发动,弃1张非基本牌)令一名角色获得1<威力赐福>.若如此做,本回合你不能发动技能<黑暗诅咒>,<光辉信仰>和<迅捷赐福>.本技能一回合只能发动一次.',
            jiexunjiecifu: '迅捷赐福',
            jiexunjiecifu_info: '(出牌阶段可发动,弃1张非基本牌)令一名角色获得1<迅捷赐福>.若如此做,本回合你不能发动技能<黑暗诅咒>,<光辉信仰>和<威力赐福>.本技能一回合只能发动一次.',
            jieheianzuzhou: '黑暗诅咒',
            jieheianzuzhou_info: '(出牌阶段可发动,移除1<祈祷符文>)令一名敌方角色与你各受到1点伤害,其弃置3张牌,你摸3张牌,本回合你不能发动技能<迅捷赐福>,<威力赐福>和<光辉信仰>.本技能一回合只能发动一次.',
            jieguanghuixinyang: '光辉信仰',
            jieguanghuixinyang_info: '(出牌阶段可发动,移除1<祈祷符文>)与一名其他友方角色各摸3张牌,你可以令一名友方角色回复1点体力(该角色未受伤则改为获得1点护甲).本回合你不能发动<黑暗诅咒>,<迅捷赐福>和<威力赐福>.本技能一回合只能发动一次.',
            jieqidao: '祈祷',
            jieqidao_info: '(宝石技,准备阶段可发动,移除1<宝石>)进入<祈祷形态>.此形态下你使用一张杀指定目标时,你+2<祈祷符文>(上限为4),本回合你不能发动<星石>.',
            jiefalichaoxi: '法力潮汐',
            jiefalichaoxi_info: '(水晶技,你发动你的非<祈祷>和<法力潮汐>技能后可发动,移除1<水晶>)回复所有技能限制并摸2张牌.',
            jieweilicifumark: '威力赐福',
            jieweilicifumark_info: '',
            jieweilicifux: '威力赐福',
            jieweilicifux_info: '',
            jiexunjiecifumark: '迅捷赐福',
            jiexunjiecifumark_info: '',
            jiexunjiecifux: '迅捷赐福',
            jiexunjiecifux_info: '',
            jiexunjie: '迅捷',
            jiexunjie_info: '',
            xingshiqidao: '星石',
            xingshiqidao_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+1<宝石>和1<水晶>;2.弃置3张牌并视为使用一张无距离限制的杀,你+1<宝石>和2<水晶>.选择完成后你结束此回合.',
            jieqidaofuwenx: '祈祷符文',
            jieqidaofuwenx_info: '',
            jieqidaoxingtai: '祈祷形态',
            jieqidaoxingtai_info: '',
            qidaofuwenx: '祈祷符文',
            qidaofuwenx_info: '',
            qidaoxingtai: '祈祷形态',
            qidaoxingtai_info: '',
            jiexueyingkuangdao: '血影狂刀',
            jiexueyingkuangdao_info: '(你使用【杀】造成伤害时概率触发)本次伤害额外+x(x为该角色的体力上限与该角色的护甲值之和).',
            jiexuexingpaoxiao: '血腥咆哮',
            jiexuexingpaoxiao_info: '①(锁定发动)你使用杀攻击指定目标时,无视目标防具;②(目标护甲值为奇数或目标体力值大于你的体力值时锁定发动)本次攻击强制命中.',
            jiesilie: '撕裂',
            jiesilie_info: '(你对其他角色造成伤害时可发动,移除1<宝石>)本次伤害额外+2.',
            jiekuanghua: '狂化',
            jiekuanghua_info: '(锁定发动)你对其他角色造成的所有伤害+1;准备阶段和结束阶段,若你装备区没有<血魇天镰>但牌堆或弃牌堆中有,则你装备之.',
            siji_shuiying: '水影',
            siji_shuiying_info: '(你损失体力时可发动,弃置任意数量的非基本牌且至多为本次损失体力数)减少等量的损失体力数值.',
            guanchuansheji: '贯穿射击',
            guanchuansheji_info: '(使用杀未命中目标时可发动)摸1张牌,目标弃置2张手牌.(不足全弃,无牌不弃)',
            shanguangxianjing: '闪光陷阱',
            shanguangxianjing_info: '(出牌阶段可发动,弃1张闪)对一名角色造成2点雷电伤害.本技能一回合只能发动一次.',
            jingzhunsheji: '精准射击',
            jingzhunsheji_info: '(使用杀指定目标时可发动)此杀强制命中,你弃1张牌(无牌则不弃).',
            juji10: '狙击',
            juji10_info: '(出牌阶段可发动,移除1<水晶>)令一名角色将手牌弃置至1张,你本回合使用杀次数+1.本技能一回合只能发动一次.',
            xingshishenjian: '星石',
            xingshishenjian_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<水晶>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<水晶>.选择完成后你结束此回合.',
            shandianjianx: '闪电箭',
            shandianjianx_info: '(锁定发动)①你的黑色【杀】均视为雷属性【杀】;②你的雷属性【杀】和【惊雷闪】不能被响应.',
            jieshandianjianx: '闪电箭',
            jieshandianjianx_info: '(锁定发动)①你的黑色【杀】均视为雷属性【杀】;②你的雷属性【杀】和【惊雷闪】不能被响应;③你的【闪电箭】改为直接造成1点雷属性伤害.',
            guanchuansheji: '贯穿射击',
            guanchuansheji_info: '(使用杀未命中目标时可发动)摸1张牌,目标弃置2张手牌.(不足全弃,无牌不弃)',
            jieguanchuansheji: '贯穿射击',
            jieguanchuansheji_info: '(杀未命中目标角色时可以发动,摸1张牌)目标角色选择一项:1.你观看其手牌并弃置其2张手牌(不足全弃);2.你对其造成1点雷属性伤害.',
            jieshanguangxianjing: '闪光陷阱',
            jieshanguangxianjing_info: '(出牌阶段可发动,弃1张闪)对一名角色造成2点雷属性伤害,该角色每满足以下一项条件,本次伤害额外+1.<br><br>&nbsp;&nbsp;1.体力值大于你<br>&nbsp; 2.有护甲.<br><br>&nbsp;&nbsp; 本技能一回合只能发动一次.',
            jiejingzhunsheji: '精准射击',
            jiejingzhunsheji_info: '(使用杀指定目标时可发动)此杀强制命中,你弃1张牌(无牌则不弃).',
            jiejuji10: '狙击',
            jiejuji10_info: '(出牌阶段可发动,移除1<水晶>)你观看一名目标角色的手牌,保留其1张牌,弃置其余牌,你本回合使用杀的次数额外+1.本技能一回合只能发动一次.',
            cishu: '次数',
            cishu_info: '',
            yuansufashuyunshi: '元素法术·陨石',
            yuansufashuyunshi_info: '①(出牌阶段可发动,弃1张🃏牌)对一名角色造成1点<font color=#9F9F5F>大地属性</font>伤害,你可以无视限制再发动任意一个元素法术(或者在拥有3个<元素>时发动<元素点燃>).②(以此法造成伤害前可发动,弃1张🃏牌)本次伤害额外+1.',
            yuansufashufengren: '元素法术·风刃',
            yuansufashufengren_info: '①(出牌阶段可发动,弃1张🃏牌)对一名角色造成1点<font color=#0aba0a>风属性</font>伤害,你本回合使用杀的次数额外+1.②(以此法造成伤害前可发动,弃1张🃏牌)本次伤害额外+1.',
            yuansufashubingdong: '元素法术·冰冻',
            yuansufashubingdong_info: '①(出牌阶段可发动,弃1张♦️️️牌)对一名角色造成1点<font color=#51808F>冰属性</font>伤害,你可以令一名角色回复1点体力(该角色未受伤则改为+1护甲).②(以此法造成伤害前可发动,弃1张♦️️️牌)本次伤害额外+1.本技能一回合只能发动一次.',
            yuansufashuleiji: '元素法术·雷击',
            yuansufashuleiji_info: '①(出牌阶段可发动,弃1张♠️️️牌)对一名角色造成1点<font color=#8B008B>雷属性</font>伤害,你+1<宝石>.②(以此法造成伤害前可发动,弃1张♠️️️牌)本次伤害额外+1.本技能一回合只能发动一次.',
            yuansudianran: '元素点燃',
            yuansudianran_info: '(出牌阶段可发动,移除3<元素>)对一名角色造成2点伤害,你可以再发动任意一个元素法术.(<元素>的上限为3)',
            jieyuansudianran: '元素点燃',
            jieyuansudianran_info: '(出牌阶段可发动,移除3<元素>)对一名角色造成2点伤害,你可以再发动任意一个元素法术.(<元素>的上限为6)',
            jinyong: '禁用',
            jinyong_info: '',
            yuansui: '元素',
            yuansui_info: '',
            yuansu1: '元素',
            yuansu1_info: '',
            yuansufashuhuoqiu: '元素法术·火球',
            yuansufashuhuoqiu_info: '①(出牌阶段可发动,弃1张♥️️️牌)对一名角色造成2点<font color=#f00>火属性</font>伤害.②(以此法造成伤害前可发动,弃1张♥️️️牌)本次伤害额外+1.本技能一回合只能发动一次.',
            yuansuxishou: '元素吸收',
            yuansuxishou_info: '(发动任意一个元素法术后锁定发动)你+1<元素>.',
            jieyuansuxishou: '元素吸收',
            jieyuansuxishou_info: '(满足任一条件时锁定发动:1.造成属性伤害后;2.发动<元素法术·月光>后)你+2<元素>(不能超过上限)',
            jieyuansufashuyunshi: '元素法术·陨石',
            jieyuansufashuyunshi_info: '①(出牌阶段可发动,弃1张🃏牌)对一名角色造成1点<font color=#9F9F5F>大地属性</font>伤害,你可以无视限制再发动任意一个元素法术(或者在拥有大于等于3个<元素>时发动<元素点燃>).②(以此法造成伤害前可发动,弃1张牌)本次伤害额外+1,若弃置的牌花色为无色,本次伤害额外+1.',
            jieyuansufashufengren: '元素法术·风刃',
            jieyuansufashufengren_info: '①(出牌阶段可发动,弃1张♣️️️牌)对一名角色造成1点<font color=#0aba0a>风属性</font>伤害,你本回合使用杀的次数额外+1.②(以此法造成伤害前可发动,弃1张牌)本次伤害额外+1,若弃置的牌花色为♣️️️,本次伤害额外+1.',
            jieyuansufashuhuoqiu: '元素法术·火球',
            jieyuansufashuhuoqiu_info: '①(出牌阶段可发动,弃1张♥️️️牌)对一名角色造成2点<font color=#f00>火属性</font>伤害.②(以此法造成伤害前可发动,弃1张牌)本次伤害额外+1,若弃置的牌花色为♥️️️,本次伤害额外+1.本技能一回合只能发动一次.',
            jieyuansufashubingdong: '元素法术·冰冻',
            jieyuansufashubingdong_info: '①(出牌阶段可发动,弃1张♦️️️牌)对一名角色造成1点<font color=#51808F>冰属性</font>伤害,你可以令一名角色回复1点体力(该角色未受伤则改为+1护甲).②(以此法造成伤害前可发动,弃1张牌)本次伤害额外+1,若弃置的牌花色为♦️️️,本次伤害额外+1.本技能一回合只能发动一次.',
            jieyuansufashuleiji: '元素法术·雷击',
            jieyuansufashuleiji_info: '①(出牌阶段可发动,弃1张♠️️️牌)对一名角色造成1点<font color=#8B008B>雷属性</font>伤害,你+1<宝石>.②(以此法造成伤害前可发动,弃1张牌)本次伤害额外+1,若弃置的牌花色为♠️️️,本次伤害额外+1.本技能一回合只能发动一次.',
            siji_xingshiyuansu: '星石',
            siji_xingshiyuansu_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<宝石>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<宝石>.选择完成后你结束此回合.',
            yuansufashuyueguang: '元素法术·月光',
            yuansufashuyueguang_info: '(出牌阶段可发动,移除1<宝石>)对一名角色造成x点伤害(x为剩余<宝石>的数量+1).',
            jiashang2: '加伤',
            jiashang2_info: '',
            jiashang1: '加伤',
            jiashang1_info: '',
            jiashang: '加伤',
            jiashang_info: '',
            jiashang3: '加伤',
            jiashang3_info: '',
            jiashang4: '加伤',
            jiashang4_info: '',
            baofenglingyuxb: '暴风领域',
            baofenglingyuxb_info: '(锁定发动)你使用的雷属性杀和风属性杀造成的所有伤害额外+1.',
            yizhengxb: '议政',
            yizhengxb_info: '(出牌阶段可发动)你将1张手牌交给一名队友或指定一名队友将1张手牌交与你,本回合你使用杀的次数额外+1.本技能一回合只能发动一次.',
            xingshizhizheng: '星石',
            xingshizhizheng_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<水晶>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<水晶>.选择完成后你结束此回合.',
            jifengzhouyuxb: '疾风骤雨',
            jifengzhouyuxb_info: '(出牌阶段可发动,移除1<水晶>)本回合你使用杀的次数额外+1.',
            nisheng: '逆生',
            nisheng_info: '锁定技,你进入濒死状态时,有概率将体力值回复至1,体力值越少,游戏轮数越高,概率越高,最高90%.',
            jinji: '尽汲',
            jinji_info: '出牌阶段限一次,你可以获得x个<尽汲>标记并弃置所有牌,失去所有体力(若你有护甲,同时移除所有护甲);若如此做且你脱离了濒死状态,则你令所有其他角色技能本回合内失效,且你摸2x张牌并回复所有体力,本回合你攻击范围,使用杀的次数,以你为来源的伤害均+2x,且你造成伤害后,你+x/2(向下取整)护甲(x为你以此法弃置的牌数与失去体力数与失去护甲数之和).',
            jinjimark: '尽汲标记',
            jinjimark_info: '',
            jinji2: '尽汲',
            jinji2_info: '',
            jinji3: '尽汲',
            jinji3_info: '',
            gaodatt: '龙魂',
            gaodatt_info: '你可以将一张:♥️️️牌当【桃】,♦️️️牌当【火杀】,♣️️️牌当【闪】,♠️️️牌当【无懈可击】使用',
            dimaizhilixb: '地脉之力',
            dimaizhilixb_info: '(锁定发动)你的地属性杀和暗灭造成的所有伤害+1.',
            poxiezhanxb: '破邪斩',
            poxiezhanxb_info: '你可以将2张同颜色牌当地属性杀,或者将3张同颜色牌当暗灭使用.',
            shengshengbuxixb: '生生不息',
            shengshengbuxixb_info: '(出牌阶段可发动,弃1张牌)摸2张牌,本回合你使用杀次数额外+1.本回合你不能再发动<破邪斩>.本技能一回合只能发动一次.',
            xingshidadiwu: '星石',
            xingshidadiwu_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<宝石>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<宝石>.选择完成后你结束此回合.',
            gaiyahuashenxb: '盖亚化身',
            gaiyahuashenxb_info: '(回合结束后或<星石>发动后可发动,移除1<宝石>)进入<盖亚化身>形态.此形态下你不能发动<盖亚化身>,你的所有手牌均可当做地属性杀或闪使用,你造成的所有伤害额外+1.若有角色使用杀对你造成伤害,则你脱离此形态.',
            gaiyadadixb: '盖亚化身形态',
            gaiyadadixb_info: '',
            shengguangshanyao: '圣光闪耀',
            shengguangshanyao_info: '(出牌阶段可发动,弃1张非基本牌)任意分配3护甲给至多3名角色.本回合不能发动<救赎>和<神圣裁决>.本技能一回合只能发动一次.',
            jiushu: '救赎',
            jiushu_info: '(出牌阶段可发动,弃1张牌)你与一名友方角色各+1护甲,本回合不能发动<圣光闪耀>和<神圣裁决>.本技能一回合只能发动一次.',
            shenshengcaijue: '神圣裁决',
            shenshengcaijue_info: '(出牌阶段可发动,移除1<水晶>)指定一名其他角色与你各受到2点无视护甲的伤害或各回复2点体力.本回合不能发动<圣光闪耀>和<救赎>.本技能一回合只能发动一次.',
            jieshengguangshanyao: '圣光闪耀',
            jieshengguangshanyao_info: '(出牌阶段可发动,弃1张非基本牌)任意分配3护甲给至多3名角色,以此法获得最少护甲的一名随机角色额外+1护甲.本回合不能发动<救赎>和<神圣裁决>.本技能一回合只能发动一次.',
            jiejiushu: '救赎',
            jiejiushu_info: '①(出牌阶段可发动,弃1张牌)你与一名友方角色各+1护甲,本回合不能发动<圣光闪耀>和<神圣裁决>.本技能一回合只能发动一次;②(锁定发动)你在场时,若存在有护甲的友方角色,则该角色每回合结束时回复1点体力',
            jieshenshengcaijue: '神圣裁决',
            jieshenshengcaijue_info: '(出牌阶段可发动,移除1<水晶>)指定一名其他角色与你各受到2点无视护甲的伤害(若该角色体力值多于你则本次对其伤害+1)或各回复3点体力(发动此效果前体力值多的角色少回复1点体力).本回合不能发动<圣光闪耀>和<救赎>.本技能一回合只能发动一次.',
            zhongcaifaze: '仲裁法则',
            zhongcaifaze_info: '(锁定发动)游戏开始时,你+2<水晶>.',
            morishenpan: '末日审判',
            morishenpan_info: '(出牌阶段可发动,指定一名角色,移除任意数量的<审判>)对其造成等量伤害.本技能一回合只能发动一次.',
            shenpanlangchao: '审判浪潮',
            shenpanlangchao_info: '(锁定发动)你受到伤害时,你+1<审判>.(<审判>的上限为4)',
            shenpanpailin: '审判迫临',
            shenpanpailin_info: '(准备阶段开始时,若你的<审判>达到了上限则锁定发动)你只能发动技能<末日审判>,不能使用或打出牌,不能发动技能<星石>和<判决天平>.',
            zhongcaiyishi: '仲裁仪式',
            zhongcaiyishi_info: '(宝石技,准备阶段可发动,移除1<宝石>)进入<审判形态>,此形态下你的手牌上限恒定为你的体力上限-1,且你每回合开始前,你+1<审判>.本回合你不能发动技能<星石>和<仪式中断>.',
            yishizhongduan: '仪式中断',
            yishizhongduan_info: '(准备阶段开始时,若你处于<审判形态>则可发动)脱离此形态并+1<宝石>,本回合你不能发动技能<星石>和<仲裁仪式>.',
            panjuetianping: '判决天平',
            panjuetianping_info: '(水晶技,出牌阶段可发动,移除1<水晶>,+1<审判>)选择一项:1.弃置所有手牌,你+1<宝石>;2.将手牌补至手牌上限.本技能一回合只能发动一次.',
            panjuetianping1: '判决天平',
            panjuetianping1_info: '',
            jieshenpanlangchao1: '审判',
            jieshenpanlangchao1_info: '',
            shenpanlangchao1: '审判',
            shenpanlangchao1_info: '',
            zhongcaiyishi1: '仪式',
            zhongcaiyishi1_info: '',
            shenpanpailin1: '审判迫临',
            shenpanpailin1_info: '',
            jinyong2: '禁用',
            jinyong2_info: '',
            shenpanxingtai: '审判形态',
            shenpanxingtai_info: '',
            jieshenpanxingtai: '审判形态',
            jieshenpanxingtai_info: '',
            jinyong3: '禁用',
            jinyong3_info: '',
            xingshizhongcai: '星石',
            xingshizhongcai_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+1<宝石>和1<水晶>;2.弃置3张牌并视为使用一张无距离限制的杀,你+1<宝石>和2<水晶>.选择完成后你结束此回合.',
            jiezhongcaifaze: '仲裁法则',
            jiezhongcaifaze_info: '(锁定发动)游戏开始时,你+2<水晶>和1<宝石>.',
            jiemorishenpan: '末日审判',
            jiemorishenpan_info: '(出牌阶段可发动,指定一名其他角色,移除任意数量的<审判>)对其造成等量伤害.本技能一回合只能发动一次.',
            jieshenpanlangchao: '审判浪潮',
            jieshenpanlangchao_info: '(锁定发动)你每受到1点伤害时,你+1<审判>.(<审判>的上限为6)',
            jieshenpanpailin: '审判迫临',
            jieshenpanpailin_info: '(准备阶段开始时,若你的<审判>达到了上限则锁定发动)你不能执行除发动技能<末日审判>,以及使用或打出基本牌外的任何操作,且不能发动技能<星石>和<判决天平>.',
            jiezhongcaiyishi: '仲裁仪式',
            jiezhongcaiyishi_info: '(宝石技,准备阶段可发动,移除1<宝石>)进入<审判形态>,此形态下你的手牌上限恒定为你的体力上限,且你每回合开始前,你+1<审判>.本回合你不能发动技能<星石>和<仪式中断>.',
            jieyishizhongduan: '仪式中断',
            jieyishizhongduan_info: '(准备阶段开始时,若你处于<审判形态>则可发动,摸2张牌)脱离此形态并+1<宝石>,本回合你不能发动技能<星石>和<仲裁仪式>.',
            jiepanjuetianping: '判决天平',
            jiepanjuetianping_info: '(水晶技,出牌阶段可发动,移除1<水晶>,+1<审判>)选择一项:1.弃置所有手牌,你+1<宝石>,若你不处于<审判形态>,则可移除1<宝石>令你进入;2.将手牌补至手牌上限.本技能一回合只能发动一次.',
            shenpanpailin1: '审判迫临',
            shenpanpailin1_info: '',
            jieshenpanpailin1: '审判迫临',
            jieshenpanpailin1_info: '',
            shengdu: '圣渎',
            shengdu_info: '(锁定发动)你的护甲无法抵挡杀的伤害;游戏开始时,你+3护甲.',
            shengdux: '圣渎',
            shengdux_info: '',
            wenyi: '瘟疫',
            wenyi_info: '(出牌阶段可发动,弃1张♣️️️牌)对所有其他角色造成1点伤害,本回合不能发动<死亡之触>和<墓碑陨落>.本技能一回合只能发动一次.',
            buxiu: '不朽',
            buxiu_info: '(满足以下任一条件时锁定发动:1.使用一张非基本牌结算完毕后;2.发动技能<瘟疫>或<墓碑陨落>后)你+1护甲.',
            siwangzhichu: '死亡之触',
            siwangzhichu_info: '(出牌阶段可发动,弃x张同类别牌并移除y点护甲.x≥2,y≥2)对一名角色造成x+y-3点伤害,本回合不能发动<瘟疫>和<墓碑陨落>.本技能一回合只能发动一次.',
            mubeiyunluo: '墓碑陨落',
            mubeiyunluo_info: '(出牌阶段可发动,移除1<宝石>)对所有其他角色造成2点伤害,你+1护甲,本回合不能发动<瘟疫>和<死亡之触>.本技能一回合只能发动一次.',
            xingshiwenyi: '星石',
            xingshiwenyi_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<宝石>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<宝石>.选择完成后你结束此回合.',
            jiebuxiu: '不朽',
            jiebuxiu_info: '(满足以下条件时锁定发动:1.使用一张非基本牌结算完毕后;发动<瘟疫>或<墓碑陨落>后)你+1护甲,若你有<宝石>,额外+1护甲.',
            jieshengdu: '圣渎',
            jieshengdu_info: '(锁定发动)你的护甲无法抵挡杀的伤害;游戏开始时,你+3护甲和1<宝石>.',
            jiewenyi: '瘟疫',
            jiewenyi_info: '(出牌阶段可发动,弃一张♣️️️牌)对所有其他角色造成1点伤害.本回合不能发动<死亡之触>和<墓碑陨落>.若有角色因<瘟疫>进入了濒死状态.本回合不能再发动<瘟疫>.',
            jiesiwangzhichu: '死亡之触',
            jiesiwangzhichu_info: '(出牌阶段可发动,弃x张牌并移除y护甲.x≥1,y≥1)对一名角色造成x+y-1点伤害.本回合不能发动<瘟疫>和<墓碑陨落>.本技能一回合只能发动一次.',
            jiemubeiyunluo: '墓碑陨落',
            jiemubeiyunluo_info: '(出牌阶段可发动,移除1<宝石>)对所有其他角色各造成1+x点伤害,你+1护甲.本回合不能发动<瘟疫>和<死亡之触>.本技能一回合只能发动一次.(x为发动此技能前<宝石>数量)',
            xingshijiesilingfashi: '星石',
            xingshijiesilingfashi_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<宝石>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<宝石>.选择完成后你结束此回合.',
            bingshuanglingyu: '冰霜领域',
            bingshuanglingyu_info: '(游戏开始时锁定发动)你+2护甲,本方所有其他角色+1护甲.',
            shuijingdaoqiang: '水晶刀墙',
            shuijingdaoqiang_info: '(使用杀命中目标时可发动,移除x护甲),对目标角色造成x点伤害.',
            linfengzhufu: '凛风祝福',
            linfengzhufu_info: '(使用杀未命中目标时可发动)令一名角色+1护甲,若其没有护甲,则改为+2护甲.',
            shuangyuzhihuan: '霜语之环',
            shuangyuzhihuan_info: '(出牌阶段可发动,移除1<水晶>) 为本方所有没有护甲的角色+2护甲,你本回合使用杀的次数+1.',
            jiebingshuanglingyu: '冰霜领域',
            jiebingshuanglingyu_info: '(游戏开始时锁定发动)本方角色+2护甲并摸2张牌.',
            jieshuijingdaoqiang: '水晶刀墙',
            jieshuijingdaoqiang_info: '(使用杀命中目标时可发动,移除x护甲),对目标角色造成x点伤害,若目标有护甲,本次伤害额外+y(y为该角色护甲值数).',
            jielinfengzhufu: '凛风祝福',
            jielinfengzhufu_info: '(使用杀未命中目标时可发动)令一名友方角色+2护甲.',
            jieshuangyuzhihuan: '霜语之环',
            jieshuangyuzhihuan_info: '(出牌阶段可发动,移除1<水晶>) 为本方所有角色+2护甲,你本回合使用杀的次数+1.',
            shuangyu: '霜语之环的出杀增益',
            shuangyu_info: '',
            shuangyumark: '霜语之环标记',
            shuangyumark_info: '',
            xingshishuangxue: '星石',
            xingshishuangxue_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<水晶>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<水晶>.选择完成后你结束此回合.',
            mingyundiaoke: '命运雕刻',
            mingyundiaoke_info: '(出牌阶段可发动,弃1张牌,若无牌则不弃)获得一名牌数大于0的其他角色的所有牌,你交还其至多等量的牌并对自己造成x点伤害.(x为你因本技能获得的牌-你因本技能交出的牌)本技能一回合只能发动一次.',
            xingchenshouhu: '星辰守护',
            xingchenshouhu_info: '(你损失体力时可发动,弃置任意数量的非基本牌且至多为本次损失体力数)减少等量的损失体力数值,你摸x张牌(x为你以此法弃置牌的数量).',
            xingshisitong: '星石',
            xingshisitong_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<水晶>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<水晶>.选择完成后你结束此回合.',
            xingwenyongdong: '星纹涌动',
            xingwenyongdong_info: '(发动<命运雕刻>后可发动,移除1<水晶>)摸2张牌,清除<命运雕刻>发动限制.',
            jiemingyundiaoke: '命运雕刻',
            jiemingyundiaoke_info: '(出牌阶段可发动,从牌堆或弃牌堆中获得1张非基本牌)获得一名牌数大于0的其他角色的所有牌,你交还其至多等量的牌并对自己造成x点伤害.(x为你因本技能获得的牌-你因本技能交出的牌)本技能一回合只能发动一次.',
            jiexingchenshouhu: '星辰守护',
            jiexingchenshouhu_info: '①(你损失体力时锁定发动,弃置任意数量的非基本牌且至多为本次损失体力数)减少等量的损失体力数值,你摸x张牌(x为你以此法弃置牌的数量).若不选择弃置或弃置牌数为0,从牌堆或弃牌堆中获得等同于本次损失体力数量的非基本牌.②(锁定发动)你无法失去体力上限并改为摸1张牌.',
            xingshisitong: '星石',
            xingshisitong_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<水晶>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<水晶>.选择完成后你结束此回合.',
            xingshiluoge: '星石',
            xingshiluoge_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<水晶>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<水晶>.选择完成后你结束此回合.',
            jiexingwenyongdong: '星纹涌动',
            jiexingwenyongdong_info: '(发动<命运雕刻>后可发动,移除1<水晶>)摸2张牌并从牌堆或弃牌堆中获得1张非基本牌,清除<命运雕刻>发动限制.',
            zhanzhenggeyao: '战争歌谣',
            zhanzhenggeyao_info: '(出牌阶段可发动)指定一名对手,你与其各弃1张牌,你的所有队友摸1张牌.本回合你不能发动<英雄战歌>.本技能一回合只能发动一次.',
            zhanyigongming: '战意共鸣',
            zhanyigongming_info: '(使用杀命中目标时且你手牌中有杀时可发动)选择一名队友获得你手牌中的一张杀,你+1<宝石>并摸2张牌.',
            yingxiongzhange: '英雄战歌',
            yingxiongzhange_info: '(出牌阶段可发动,移除1<宝石>)令一名友方角色获得<希望之歌>,本回合你使用杀的次数+1.本回合你不能发动<战争歌谣>.若有角色拥有<希望之歌>,本技能不能发动.',
            yingxiongzhangex: '希望之歌',
            yingxiongzhangex_info: '①(使用杀造成伤害时可发动,移除<希望之歌>)本次伤害额外+2;②(回合结束时锁定发动)+1护甲.',
            xingshizhange: '星石',
            xingshizhange_info: '(出牌阶段开始时可发动)选择一项:1.摸3张牌,你+2<宝石>;2.弃置3张牌并视为使用一张无距离限制的杀,你+3<宝石>.选择完成后你结束此回合.',
            jiezhanzhenggeyao: '战争歌谣',
            jiezhanzhenggeyao_info: '①(出牌阶段可发动)指定一名对手,你与其各弃1张牌,你的所有队友摸1张牌.本回合你不能发动<英雄战歌>.本技能一回合只能发动一次.②(锁定发动)你每弃1张牌,则对你态度小于0的所有人各弃1张牌.③(准备阶段和结束阶段锁定发动)若你装备区没有<圣歌>但牌堆或弃牌堆中有,则你装备之.',
            jieyingxiongzhange: '英雄战歌',
            jieyingxiongzhange_info: '(出牌阶段可发动,移除1<宝石>)令一名友方角色+1<希望之歌>,本回合你使用杀的次数+1.本回合你不能发动<战争歌谣>.',
            jieyingxiongzhangex: '希望之歌',
            jieyingxiongzhangex_info: '①(使用杀造成伤害时可发动,移除1<希望之歌>)本次伤害额外+2;②(回合结束时锁定发动)回复等同于<希望之歌>数的体力,溢出的回复量改为护甲.',
            jiezhanyigongming: '战意共鸣',
            jiezhanyigongming_info: '(使用杀命中目标时且你手牌中有杀时可发动)选择一名队友获得你手牌中的一张杀,你+1<宝石>并摸2张牌;若你没有队友,改为摸3张牌.',
            zhujue: '助绝',
            zhujue_info: '锁定技,你受到1点伤害/失去1点体力/减少1点体力上限后,所有友方角色摸2张牌并交给你2张牌.',
            tongxin: '同心',
            tongxin_info: '锁定技,①游戏开始时,你令所有友方角色获得【助绝】;②敌方角色不能获得我方角色的牌;③你与友方角色受到伤害/失去体力/减少体力上限时,若对应的数值大于2,则将该数值改为2.',
            zhugu: '注孤',
            zhugu_info: '锁定技,①若你有队友,则游戏开始时,你与所有友方角色增加x点体力上限并回复x点体力;②若你没有队友,你增加x点体力上限并回复x点体力,永久获得技能<天道>直至游戏结束.(x为你的体力上限)',
            tiandao_zhugu: '天道',
            tiandao_zhugu_info: '①每名角色的回合限4次,一名角色声明使用一张未被<天道>记录的非装备牌后,你可以令此牌不能被响应(或无效),你记录此牌(每名角色回合结束时清除所有记录)并选择一项:1.你不能成为此牌的目标直至当前回合结束;2.你视为使用此牌(无距离限制,若此时在你的回合内则此牌无次数限制),若你无法使用则改为摸1张牌.②每名角色的回合限2次,一名角色造成伤害或失去体力时,你可以防止之,你的体力值固定为你当前体力值直至当前回合结束.',
            sizou: '死奏/音符缭绕',
            sizou_info: '①锁定技,女性角色对你使用的【桃】改为【杀】;②你的回合开始和回合结束时,你弃掉所有手牌,将你的手牌摸至8.③你进入或脱离濒死状态时,令所有敌方角色获得1<调律>;④…….',
            tiaolusxsx: '调律',
            tiaolusxsx_info: '锁定技,你造成伤害/受到伤害时,令受伤角色/伤害来源获得等同于未被改变的伤害值数的<调律>,你不会因此技能获得<调律>,若你获得了<调律>,则你不受<调律>影响.',
            tiaolusx: '洗炼乐章',
            tiaolusx_info: '①锁定技,正常情况下,你不会失去体力和减少体力上限,且你受到的伤害不会超过1;②一名角色的回合结束时,为所有已受伤的我方角色回复1点体力(体力等于上限时改为+1护甲);③若你当前处于<太虚幻境>,你受到1次伤害后,你额外获得1技能槽.',
            sxtiaolvsx: '调律',
            sxtiaolvsx_info: '',
            yongshangzhou: '永伤咒',
            yongshangzhou_info: '(锁定发动)你受到伤害时,为自身附加1层<永伤咒>',
            sjcs: '死寂传说',
            xbcs: '星杯传说',
            cqjq: '初期数值加强',
            siji_anmo: '暗沫',
            siji_yibianshi: '疑变·失',
            siji_yibianshen: '疑变·神',
            siji_yibianbing: '疑变·冰',
            siji_yibianlei: '疑变·雷',
            siji_yibianhuo: '疑变·火',
            siji_xuejue: '血绝',
            siji_siji: '死寂',
            fuhuajuejun: '腐化绝君',
            fuhuajuejunx: '腐化绝君',
            siji_xuemo: '血沫',
            siji_xuefeng: '血封',
            siji_gaoda: '高达一号',
            siji_zhou: '咒',
            siji_youzhousihai: '宇宙四害',
            siji_zhenyujin: '真于禁',
            siji_yuangubashen: '远古八神',
            siji_yuangubafei: '远古八废',
            siji_xueying: '血影',
            xuemeng: '血梦',
            siji_duohuamochen: '堕化默陈',
            sxliuyingsx: '流萤',
            jiesxliuyingsx: '界流萤',
            fuhuamochensi: '腐化默陈',
            siji_juejin: '绝君',
            siji_zhenshen: '真神',
            siji_duohuazhenshen: '堕化真神',
            siji_duohuajuejun: '堕化绝君',
            siji_mochen: '默陈',
            siji_zhentiandao: '真天道',
            siji_duohuatianhou: '堕化天候',
            siji_duohuaziming: '堕化子明',
            siji_duohuayunchang: '堕化云长',
            siji_duohuaboyan: '堕化伯言',
            siji_duohuafengxian: '堕化奉先',
            siji_duohuaxuande: '堕化玄德',
            siji_duohuagaoda: '堕化高达',
            siji_duohuaxuemiu: '堕化血牛',
            siji_xueniu: '血牛',
            bh_kongling: '空灵',
            jiekongling: '界空灵',
            kongling: '空灵',
            jiezhixiang: '界纸香',
            zhixiang: '纸香',
            jiewux: '无',
            chaofengzhe: '血嘲',
            jiechaofengzhe: '界血嘲',
            zhangejisi: '法芙娜',
            jiezhangejisi: '界法芙娜',
            sibier: '斯庇尔',
            jiesibier: '界斯庇尔',
            jiebeilaweien: '界贝拉维恩',
            huangjiashiwei: '贝拉维恩',
            fengbaozhizheng: '莱茵哈特',
            siji_ajite: '阿基特',
            wunian: '无念',
            jiewunian: '界无念',
            jieajite: '界阿基特',
            silingfashi: '塔格奥',
            jiesilingfashi: '界塔格奥',
            shuangxuegongzhu: '萨纹雷缇',
            jieshuangxuegongzhu: '界萨纹雷缇',
            faluo: '珐珞',
            jiefaluo: '界珐珞',
            xingwenshi: '斯通',
            jiexingwenshi: '界斯通',
            saierna: '塞尔娜',
            jiesaierna: '界塞尔娜',
            dadiwushixb: 'z阿基特',
            luoge: '罗格',
            jieluoge: '界罗格',
            gongzhinvshen: '安娜',
            jiegongzhinvshen: '界安娜',
            suoersi: '索尔斯',
            jiesuoersi: '界索尔斯',
            shenzhuge: '神诸葛亮',
            siji_duohuaxuejue: '堕化血绝',
            sxNagatosx: '长门',
            yezoushi: '默陈(调律)',
        },
        skill: {
            linghunbisuo: {
                nobracket: true,
                mod: {
                    globalFrom(from, to, distance) {
                        if (to.sex == 'female') return distance + Infinity;
                    },
                    globalTo(from, to, distance) {
                        if (from.sex == 'female') return distance + Infinity;
                    },
                },
                trigger: {
                    global: 'phaseBegin',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.player.sex == 'female';
                },
                content() {
                    'step 0';
                    if (player.countMark('huimengx') > 0) {
                        player.removeMark('huimengx');
                    } else player.damage(3);
                    ('step 1');
                    player.addTempSkill('wupaiwushang');
                },
                group: 'linghunbisuo_1',
                subSkill: {
                    1: {
                        trigger: {
                            global: 'phaseJieshuBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (player.hasSkill('wupaiwushang')) return true;
                            return false;
                        },
                        content() {
                            player.removeSkill('wupaiwushang');
                        },
                    },
                },
            },
            linghunzhuore: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    if (player.countMark('huimengx') > 0) {
                        return player.countMark('huimengx') > 0;
                    } else return player.countCards('he') >= 3;
                },
                filterTarget(card, player, target) {
                    return target != player;
                },
                content() {
                    'step 0';
                    if (player.countMark('huimengx') > 0) {
                        player.removeMark('huimengx');
                    } else {
                        player.chooseToDiscard(3, 'he', true);
                        player.damage(3, 'fire');
                    }
                    ('step 1');
                    target.damage(3, 'fire', 'player')._triggered = null;
                },
            },
            linghunhuilang: {
                nobracket: true,
                trigger: {
                    player: 'useCard',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                popup: false,
                filter(event, player) {
                    return event.card.suit == 'heart' || event.card.suit == 'spade';
                },
                content() {
                    'step 0';
                    player.chooseToDiscard('he', true);
                    if (player.hujia < 2) {
                        player.changeHujia();
                    }
                    player.draw();
                    player.chooseTarget(get.prompt2('linghunhuilang'), function (card, player, target) {
                        if (target != player) return true;
                        return false;
                    });
                    ('step 1');
                    if (result.bool) {
                        result.targets[0].recover();
                    } else event.finish();
                },
            },
            linghunshouhu: {
                nobracket: true,
                trigger: {
                    player: ['loseHpBefore', 'loseMaxHpBefore'],
                },
                forced: true,
                lastDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    trigger.cancel();
                },
                group: ['linghunshouhu_1', 'linghunshouhu_2'],
                subSkill: {
                    1: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        lastDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.num < 3) return false;
                            return true;
                        },
                        content() {
                            trigger.num = 3;
                            trigger.num.fixed;
                        },
                    },
                    2: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.num <= 3) return false;
                            return true;
                        },
                        content() {
                            'step 0';
                            if (trigger.num > 3) {
                                if (player.hp == player.maxHp) {
                                    player
                                        .chooseControl('+1<回梦>')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            return 1;
                                        });
                                } else {
                                    player
                                        .chooseControl('+1<回梦>', '回复1点体力')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            return 1;
                                        });
                                }
                            } else {
                                event.finish();
                            }
                            ('step 1');
                            if (result.index == 0) {
                                player.addMark('huimengx');
                            } else {
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                } else player.addMark('huimengx');
                            }
                        },
                    },
                },
            },
            linghunhuimeng: {
                nobracket: true,
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return game.roundNumber > 1 && game.roundNumber % 2 == 0;
                },
                content() {
                    player.addMark('huimengx');
                },
            },
            wupaiwushang: {
                init(player) { },
                onremove(player) {
                    player.recover();
                },
                mod: {
                    targetEnabled(card, player, target, current) {
                        if (player != target && current != player) return false;
                    },
                },
                trigger: {
                    player: 'damageBefore',
                },
                forced: true,
                charlotte: true,
                filter(event, player, current) {
                    return event.source && event.source.sex == 'female';
                },
                content() {
                    trigger.untrigger();
                    trigger.finish();
                    player.hp == player.hp;
                },
            },
            wupaiwushangbh: {
                init(player) { },
                onremove(player) {
                    player.recover();
                },
                mod: {
                    targetEnabled(card, player, target, current) {
                        if (player != target && current != player) return false;
                    },
                },
                trigger: {
                    player: 'damageBefore',
                },
                forced: true,
                charlotte: true,
                filter(event, player, current) {
                    return event.source && event.source.sex == 'female';
                },
                content() {
                    trigger.untrigger();
                    trigger.finish();
                    player.hp == player.hp;
                },
            },
            huimengx: {
                marktext: '回梦',
                intro: {
                    name: '回梦',
                    content: '技能【灵魂闭锁】和【灵魂灼热】发动条件改为移除1<回梦>',
                },
            },
            xinlinggongtong: {
                nobracket: true,
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target.isFriendsOf(player) && target.countCards('h') > 0 && target != player;
                },
                content() {
                    'step 0';
                    if (player.countMark('huanbianx') > 0) {
                        player.removeMark('huanbianx');
                    } else {
                        player.damage('ice', 'nosource');
                    }
                    ('step 1');
                    player.addTempSkill('xinlinggongtong_see');
                    var target = targets[0];
                    target.addTempSkill('xinlinggongtong_see');
                    event.target = target;
                    target.chooseCard('h', '将至多三张牌交给' + get.translation(player) + '', [1, 3], true).set('ai', function (card) {
                        var att = get.attitude(target, player);
                        if (att > 0 && att < 10) {
                            att = 10;
                        }
                        return att - get.value(card);
                    });
                    ('step 2');
                    var cards = result.cards;
                    if (cards) {
                        var target = event.target;
                        event.target.give(cards, player, 'giveAuto');
                        var num = cards.length;
                        player.chooseCard('h', '将' + num + '张牌交给' + get.translation(event.target) + '', num, true).set('ai', function (card) {
                            var att = get.attitude(player, target);
                            if (att > 0 && att < 10) {
                                att = 10;
                            }
                            return att - get.value(card);
                        });
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    player.give(result.cards, event.target, 'giveAuto');
                    player.chooseTarget('心灵共通', '选择一名敌方角色', function (card, player, target) {
                        return target.isEnemiesOf(player);
                    });
                    ('step 4');
                    var tx = result.targets[0];
                    player.useCard({ name: 'sha' }, tx);
                    player.getStat().card.sha--;
                    if (tx.isAlive()) {
                        event.target.useCard({ name: 'sha' }, tx);
                    }
                },
                subSkill: {
                    see: {
                        charlotte: true,
                        ai: {
                            viewHandcard: true,
                            skillTagFilter(player, tag, arg) {
                                if (player == arg) return false;
                                return player.hasSkill('xinlinggongtong_see') && arg.hasSkill('xinlinggongtong_see');
                            },
                        },
                    },
                },
            },
            xinlingjuxiang: {
                nobracket: true,
                trigger: {
                    target: 'useCardToBegin',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    var cards = event.cards;
                    if (!cards[0]) {
                        return true;
                    }
                    return !event.card.isCard;
                },
                content() {
                    'step 0';
                    if (player.countMark('huanbianx') > 0) {
                        player.removeMark('huanbianx');
                    } else player.damage('ice', 'nosource')._triggered = null;
                    ('step 1');
                    var card = trigger.card;
                    player.chooseControl('令【' + get.translation(card.name) + '】对你无效', '令【' + get.translation(card.name) + '】对你结算两次');
                    ('step 2');
                    var inx = result.index;
                    if (inx == 0) {
                        trigger.cancel();
                    } else if (inx == 1) {
                        var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                        trigger.player.useCard(card, player);
                    }
                    var cardx = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                    player.gain(cardx, 'gain2');
                    player.chooseToUse(cardx, '心灵具象:是否使用【' + get.translation(cardx.name) + '】？');
                },
            },
            xinlingbingfeng: {
                nobracket: true,
                trigger: {
                    global: 'phaseBegin',
                },
                forceDie: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.isEnemiesOf(event.player);
                },
                content() {
                    'step 0';
                    if (player.countMark('huanbianx') > 0) {
                        player.removeMark('huanbianx');
                    } else player.damage(3, 'ice', 'nosource')._triggered = null;
                    ('step 1');
                    trigger.player
                        .chooseControl('跳过此回合', '受到3点冰属性伤害')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 2;
                        });
                    ('step 2');
                    if (result.index == 0) {
                        trigger.cancel();
                    } else trigger.player.damage(3, 'ice', 'nosource')._triggered = null;
                },
            },
            xinlingfeijian: {
                nobracket: true,
                trigger: {
                    player: 'useCard',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                popup: false,
                filter(event, player) {
                    return event.card.suit == 'club' || event.card.suit == 'diamond';
                },
                content() {
                    'step 0';
                    player.chooseToDiscard('he', true);
                    if (player.hujia < 2) {
                        player.changeHujia();
                    }
                    player.draw();
                    player.chooseTarget(get.prompt2('xinlingfeijian'), function (card, player, target) {
                        if (target != player) return true;
                        return false;
                    });
                    ('step 1');
                    if (result.bool) {
                        result.targets[0].recover();
                    } else event.finish();
                },
            },
            xinlingpingzhang: {
                nobracket: true,
                trigger: {
                    player: ['loseHpBefore', 'loseMaxHpBefore'],
                },
                forced: true,
                lastDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    trigger.cancel();
                },
                group: ['xinlingpingzhang_1', 'xinlingpingzhang_2'],
                subSkill: {
                    1: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        lastDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.num < 3) return false;
                            return true;
                        },
                        content() {
                            trigger.num = 3;
                            trigger.num.fixed;
                        },
                    },
                    2: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.num <= 3) return false;
                            return true;
                        },
                        content() {
                            'step 0';
                            if (trigger.num > 3) {
                                if (player.hp == player.maxHp) {
                                    player
                                        .chooseControl('+1<幻变>')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            return 1;
                                        });
                                } else {
                                    player
                                        .chooseControl('+1<幻变>', '回复1点体力')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            return 1;
                                        });
                                }
                            } else {
                                event.finish();
                            }
                            ('step 1');
                            if (result.index == 0) {
                                player.addMark('huanbianx');
                            } else {
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                } else player.addMark('huanbianx');
                            }
                        },
                    },
                },
            },
            huanbianx: {
                marktext: '幻变',
                intro: {
                    name: '幻变',
                    content: '技能【心灵冰封】,【心灵共通】和【心灵具象】发动条件改为移除1<幻变>',
                },
            },
            xinlinghuanbian: {
                nobracket: true,
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return game.roundNumber > 1 && game.roundNumber % 2 == 0;
                },
                content() {
                    player.addMark('huanbianx');
                },
            },
            jiexinlinggongtong: {
                nobracket: true,
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return player.getFriends(true).includes(target) && target.countCards('h') > 0 && target != player;
                },
                content() {
                    'step 0';
                    if (player.countMark('huanbianx') > 0) {
                        player.removeMark('huanbianx');
                    } else {
                        player.damage('ice', 'nosource');
                    }
                    ('step 1');
                    player.addTempSkill('xinlinggongtong_see');
                    var target = targets[0];
                    target.addTempSkill('xinlinggongtong_see');
                    event.target = target;
                    target.chooseCard('h', '将至多四张牌交给' + get.translation(player) + '', [1, 4], true).set('ai', function (card) {
                        var att = get.attitude(target, player);
                        if (att > 0 && att < 10) {
                            att = 10;
                        }
                        return att - get.value(card);
                    });
                    ('step 2');
                    var cards = result.cards;
                    if (cards) {
                        var tar = event.target;
                        event.target.give(cards, player, 'giveAuto');
                        var num = cards.length;
                        player.chooseCard('h', '将' + num + '张牌交给' + get.translation(event.target) + '', num, true).set('ai', function (card) {
                            var att = get.attitude(player, tar);
                            if (att > 0 && att < 10) {
                                att = 10;
                            }
                            return att - get.value(card);
                        });
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    player.give(result.cards, event.target, 'giveAuto');
                    player.chooseTarget('心灵共通', '选择一名敌方角色', function (card, player, target) {
                        return target.isEnemiesOf(player);
                    });
                    ('step 4');
                    var tx = result.targets[0];
                    player.useCard({ name: 'sha' }, tx);
                    player.getStat().card.sha--;
                    if (tx.isAlive()) {
                        event.target.useCard({ name: 'sha' }, tx);
                    }
                    ('step 5');
                    player.draw();
                    event.target.draw();
                },
                subSkill: {
                    see: {
                        charlotte: true,
                        ai: {
                            viewHandcard: true,
                            skillTagFilter(player, tag, arg) {
                                if (player == arg) return false;
                                return player.hasSkill('xinlinggongtong_see') && arg.hasSkill('xinlinggongtong_see');
                            },
                        },
                    },
                },
            },
            jiexinlingjuxiang: {
                nobracket: true,
                trigger: {
                    target: 'useCardToBegin',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    var cards = event.cards;
                    if (!cards[0]) {
                        return true;
                    }
                    return !event.card.isCard;
                },
                content() {
                    'step 0';
                    if (player.countMark('huanbianx') > 0) {
                        player.removeMark('huanbianx');
                    } else player.damage('ice', 'nosource')._triggered = null;
                    ('step 1');
                    var card = trigger.card;
                    player.chooseControl('令【' + get.translation(card.name) + '】对你无效', '令【' + get.translation(card.name) + '】对你结算两次');
                    ('step 2');
                    var inx = result.index;
                    if (inx == 0) {
                        trigger.cancel();
                    } else if (inx == 1) {
                        var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                        trigger.player.useCard(card, player);
                    }
                    var cardx = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                    var cardy = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                    player.gain([cardx, cardy], 'gain2');
                    player.chooseToUse(cardx, '心灵具象:是否使用【' + get.translation(cardx.name) + '】？');
                    player.chooseToUse(cardy, '心灵具象:是否使用【' + get.translation(cardx.name) + '】？');
                },
            },
            jiexinlingbingbao: {
                nobracket: true,
                trigger: {
                    global: 'phaseBegin',
                },
                forceDie: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.isEnemiesOf(event.player);
                },
                content() {
                    'step 0';
                    if (player.hp < trigger.player.hp) {
                        player.storage.jiexinlingbingfengm = 3;
                        return 1;
                    }
                    ('step 1');
                    if (player.countMark('huanbianx') > 0) {
                        player.removeMark('huanbianx');
                    } else player.damage(2, 'ice', 'nosource')._triggered = null;
                    ('step 2');
                    trigger.player
                        .chooseControl('跳过此回合', '受到3点冰属性伤害并弃3张牌')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 3;
                        });
                    ('step 3');
                    if (result.index == 0) {
                        trigger.cancel();
                    } else {
                        if (player.storage.jiexinlingbingfengm == 3) {
                            trigger.player.damage(4, 'ice', 'nosource')._triggered = null;
                            trigger.player.chooseToDiscard(4, 'h', true);
                            player.storage.jiexinlingbingfengm == 0;
                        } else {
                            trigger.player.damage(3, 'ice', 'nosource')._triggered = null;
                            trigger.player.chooseToDiscard(3, 'h', true);
                        }
                    }
                    ('step 4');
                    player.hp += 1;
                    game.broadcastAll(function (player) {
                        if (lib.config.animation && !lib.config.low_performance) {
                            player.$recover();
                        }
                    }, player);
                    player.$damagepop(1, 'wood');
                    game.log(player, '回复了一点体力');
                    if (player.hp > player.maxHp) {
                        player.hp = player.maxHp;
                    }
                    player.update();
                },
            },
            jiexinlingfeijian: {
                nobracket: true,
                trigger: {
                    player: 'useCard',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                popup: false,
                filter(event, player) {
                    return event.card.suit == 'club' || event.card.suit == 'diamond';
                },
                content() {
                    'step 0';
                    player.chooseToDiscard('he', true);
                    player.changeHujia();
                    player.draw();
                    player.chooseTarget(get.prompt2('jiexinlingfeijian'), function (card, player, target) {
                        if (target != player) return true;
                        return false;
                    });
                    ('step 1');
                    if (result.bool) {
                        result.targets[0].recover();
                    } else event.finish();
                },
            },
            jiexinlingpingzhang: {
                nobracket: true,
                trigger: {
                    player: ['loseHpBefore', 'loseMaxHpBefore'],
                },
                forced: true,
                lastDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    trigger.cancel();
                },
                group: ['jiexinlingpingzhang_1', 'jiexinlingpingzhang_2'],
                subSkill: {
                    1: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        lastDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.num < 2) return false;
                            return true;
                        },
                        content() {
                            trigger.num = 2;
                            trigger.num.fixed;
                        },
                    },
                    2: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.num <= 2) return false;
                            return true;
                        },
                        content() {
                            'step 0';
                            if (trigger.num > 2) {
                                if (player.hp == player.maxHp) {
                                    player
                                        .chooseControl('+1<幻变>')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            return 1;
                                        });
                                } else {
                                    player
                                        .chooseControl('+1<幻变>', '回复1点体力')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            return 1;
                                        });
                                }
                            } else {
                                event.finish();
                            }
                            ('step 1');
                            if (result.index == 0) {
                                player.addMark('huanbianx');
                            } else {
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                } else player.addMark('huanbianx');
                            }
                        },
                    },
                },
            },
            huanbianx: {
                marktext: '幻变',
                intro: {
                    name: '幻变',
                    content: '技能【心灵冰封】,【心灵共通】和【心灵具象】发动条件改为移除1<幻变>',
                },
            },
            jiexinlinghuanbian: {
                nobracket: true,
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return game.roundNumber > 0;
                },
                content() {
                    player.addMark('huanbianx');
                },
            },
            jielinghunbisuo: {
                nobracket: true,
                mod: {
                    globalFrom(from, to, distance) {
                        if (to.sex == 'female') return distance + Infinity;
                    },
                    globalTo(from, to, distance) {
                        if (from.sex == 'female') return distance + Infinity;
                    },
                },
                trigger: {
                    global: 'phaseBefore',
                },
                firstDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.player.sex == 'female';
                },
                content() {
                    'step 0';
                    if (player.countMark('huimengx') > 0) {
                        player.removeMark('huimengx');
                    } else player.damage(2);
                    ('step 1');
                    player.addTempSkill('wupaiwushang');
                },
                group: 'jielinghunbisuo_1',
                subSkill: {
                    1: {
                        trigger: {
                            global: 'phaseJieshuBegin',
                        },
                        firstDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        forced: true,
                        filter(event, player) {
                            if (player.hasSkill('wupaiwushang')) return true;
                            return false;
                        },
                        content() {
                            player.removeSkill('wupaiwushang');
                        },
                    },
                },
            },
            jielinghunhuilang: {
                nobracket: true,
                trigger: {
                    player: 'useCard',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                popup: false,
                filter(event, player) {
                    return event.card.suit == 'heart' || event.card.suit == 'spade';
                },
                content() {
                    'step 0';
                    player.chooseToDiscard('he', true);
                    player.changeHujia();
                    player.draw();
                    player.chooseTarget(get.prompt2('jielinghunhuilang'), function (card, player, target) {
                        if (target != player) return true;
                        return false;
                    });
                    ('step 1');
                    if (result.bool) {
                        result.targets[0].recover();
                    } else event.finish();
                },
            },
            jielinghunshouhu: {
                nobracket: true,
                trigger: {
                    player: ['loseHpBefore', 'loseMaxHpBefore'],
                },
                forced: true,
                lastDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    trigger.cancel();
                },
                group: ['jielinghunshouhu_1', 'jielinghunshouhu_2'],
                subSkill: {
                    1: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        lastDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.num < 2) return false;
                            return true;
                        },
                        content() {
                            trigger.num = 2;
                            trigger.num.fixed;
                        },
                    },
                    2: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.num <= 2) return false;
                            return true;
                        },
                        content() {
                            'step 0';
                            if (trigger.num > 2) {
                                if (player.hp == player.maxHp) {
                                    player
                                        .chooseControl('+1<回梦>')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            return 1;
                                        });
                                } else {
                                    player
                                        .chooseControl('+1<回梦>', '回复1点体力')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            return 1;
                                        });
                                }
                            } else {
                                event.finish();
                            }
                            ('step 1');
                            if (result.index == 0) {
                                player.addMark('huimengx');
                            } else {
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                } else player.addMark('huimengx');
                            }
                        },
                    },
                },
            },
            jielinghunhuimeng: {
                nobracket: true,
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    player.addMark('huimengx');
                },
            },
            jielinghunbaolie: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    if (player.countMark('huimengx') > 0) {
                        return player.countMark('huimengx') > 0;
                    } else return player.countCards('he') >= 2;
                },
                filterTarget(card, player, target) {
                    return target != player;
                },
                content() {
                    'step 0';
                    if (player.hp < target.hp) {
                        player.storage.jielinghunzhuore = 3;
                    }
                    ('step 1');
                    if (player.countMark('huimengx') > 0) {
                        player.removeMark('huimengx');
                    } else {
                        player.chooseToDiscard(2, 'he', true);
                        player.damage(2, 'fire');
                    }
                    ('step 2');
                    if (player.storage.jielinghunzhuore == 3) {
                        target.damage(4, 'fire', 'player')._triggered = null;
                        player.storage.jielinghunzhuore = 0;
                    } else target.damage(3, 'fire', 'player')._triggered = null;
                },
            },
            linghunxuesuo: {
                init(player) {
                    player.storage.linghunsuimeng = 0;
                    player.storage.linghunxuesuo = 0;
                },
                nobracket: true,
                mod: {
                    globalFrom(from, to, distance) {
                        if (to.sex == 'female') return distance + Infinity;
                    },
                    globalTo(from, to, distance) {
                        if (from.sex == 'female') return distance + Infinity;
                    },
                },
                trigger: {
                    global: 'phaseBeforeEnd',
                },
                marktext: '崩毁',
                intro: {
                    name: '崩毁',
                    markcount(storage) {
                        return storage;
                    },
                    content(storage) {
                        return '共有' + storage + '个<崩毁>,你每回合结束需弃' + storage * 2 + '张牌,否则每少弃2张牌,-1体力上限.空灵拥有<崩毁>则改为弃1张牌(无牌则不弃)并对自己造成' + storage + '点伤害.';
                    },
                },
                firstDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.player.sex == 'female';
                },
                content() {
                    'step 0';
                    if (player.storage.linghunsuimeng > 0) {
                        player.storage.linghunsuimeng--;
                        player.markSkill('linghunsuimeng');
                        player.update();
                    } else player.damage(2);
                    ('step 1');
                    player.storage.linghunxuesuo += 2;
                    player.markSkill('linghunxuesuo');
                    player.update();
                    if (!trigger.player.storage.linghunxuesuo) {
                        trigger.player.storage.linghunxuesuo = 0;
                        trigger.player.markSkill('linghunxuesuo');
                    }
                    trigger.player.storage.linghunxuesuo += 2;
                    trigger.player.markSkill('linghunxuesuo');
                    trigger.player.update();
                    ('step 2');
                    player.addSkill('wupaiwushangbh');
                },
                group: ['linghunxuesuo_1', 'linghunxuesuo_2'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'phaseJieshuBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (player.hasSkill('wupaiwushangbh')) return true;
                            return false;
                        },
                        content() {
                            player.removeSkill('wupaiwushangbh');
                        },
                    },
                    2: {
                        trigger: {
                            global: 'phaseEnd',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.player.storage.linghunxuesuo > 0;
                        },
                        content() {
                            'step 0';
                            if ((trigger.player.name == 'bh_kongling' && trigger.player.name1 == 'bh_kongling') || (trigger.player.name == 'bh_kongling' && trigger.player.name2 == 'bh_kongling') || (trigger.player.name1 == 'bh_kongling' && trigger.player.name2 == 'bh_kongling')) {
                                trigger.player.chooseToDiscard('he', true);
                                trigger.player.damage(trigger.player.storage.linghunxuesuo);
                            } else {
                                if (trigger.player.countCards('he') >= 2 * trigger.player.storage.linghunxuesuo) {
                                    trigger.player.chooseToDiscard('he', 2 * trigger.player.storage.linghunxuesuo, true);
                                } else {
                                    var num1 = 2 * trigger.player.storage.linghunxuesuo - trigger.player.countCards('he');
                                    trigger.player.chooseToDiscard('he', trigger.player.countCards('he'), true);
                                    trigger.player.loseMaxHp(Math.floor(num1 / 2));
                                }
                            }
                        },
                    },
                },
            },
            linghunxukong: {
                nobracket: true,
                trigger: {
                    player: 'respond',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                popup: false,
                filter(event, player) {
                    return event.card.suit == 'heart' || event.card.suit == 'spade';
                },
                content() {
                    'step 0';
                    player.chooseToDiscard('he', true);
                    player.changeHujia();
                    player.draw();
                    player.chooseTarget(get.prompt2('linghunxukong'), function (card, player, target) {
                        return true;
                    });
                    ('step 1');
                    if (result.bool) {
                        var terr = result.targets[0];
                        event.terr = terr;
                        terr.recover();
                        if (terr.storage.linghunxuesuo == 0) {
                            player
                                .chooseControl('令其+1<崩毁>')
                                .set('prompt', '请选择一项')
                                .set('ai', function () {
                                    return 1;
                                });
                        } else {
                            player
                                .chooseControl('令其+1<崩毁>', '令其-1<崩毁>')
                                .set('prompt', '请选择一项')
                                .set('ai', function () {
                                    return 0;
                                });
                        }
                    } else event.finish();
                    ('step 2');
                    if (result.index == 0) {
                        event.terr.storage.linghunxuesuo++;
                        player.markSkill('linghunxuesuo');
                        player.update();
                    } else {
                        if (event.terr.storage.linghunxuesuo > 0) {
                            event.terr.storage.linghunxuesuo--;
                            player.markSkill('linghunxuesuo');
                            player.update();
                        } else event.finish();
                    }
                },
                group: ['linghunxukong_1', 'linghunxukong_2'],
                subSkill: {
                    1: {
                        init(player) {
                            player.storage.fff = false;
                        },
                        trigger: {
                            global: 'roundStart',
                        },
                        forced: true,
                        silent: true,
                        superCharlotte: true,
                        xikiyouku: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return !player.storage.fff;
                        },
                        content() {
                            game.countPlayer(function (current) {
                                if (current != player) {
                                    current.storage.linghunxuesuo = 0;
                                    player.storage.fff = true;
                                }
                            });
                        },
                    },
                    2: {
                        nobracket: true,
                        trigger: {
                            player: 'useCard',
                        },
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        popup: false,
                        filter(event, player) {
                            return event.card.suit == 'heart' || event.card.suit == 'spade';
                        },
                        content() {
                            'step 0';
                            player.chooseToDiscard('he', true);
                            player.changeHujia();
                            player.draw();
                            player.chooseTarget(get.prompt2('linghunxukong'), function (card, player, target) {
                                return true;
                            });
                            ('step 1');
                            if (result.bool) {
                                var terr = result.targets[0];
                                event.terr = terr;
                                terr.recover();
                                if (terr.storage.linghunxuesuo == 0) {
                                    player
                                        .chooseControl('令其+1<崩毁>')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            return 1;
                                        });
                                } else {
                                    player
                                        .chooseControl('令其+1<崩毁>', '令其-1<崩毁>')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            return 0;
                                        });
                                }
                            } else event.finish();
                            ('step 2');
                            if (result.index == 0) {
                                event.terr.storage.linghunxuesuo++;
                                event.terr.markSkill('linghunxuesuo');
                                event.terr.update();
                            } else {
                                if (event.terr.storage.linghunxuesuo > 0) {
                                    event.terr.storage.linghunxuesuo--;
                                    event.terr.markSkill('linghunxuesuo');
                                    event.terr.update();
                                } else event.finish();
                            }
                        },
                    },
                },
            },
            linghunshouhubh: {
                nobracket: true,
                trigger: {
                    player: ['loseHpBefore', 'loseMaxHpBefore'],
                },
                forced: true,
                lastDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    trigger.cancel();
                },
                group: ['linghunshouhubh_1', 'linghunshouhubh_2'],
                subSkill: {
                    1: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        lastDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.num < 2) return false;
                            return true;
                        },
                        content() {
                            trigger.num = 2;
                            trigger.num.fixed;
                        },
                    },
                    2: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.num <= 2) return false;
                            return true;
                        },
                        content() {
                            'step 0';
                            if (trigger.num > 2) {
                                if (player.hp == player.maxHp) {
                                    player
                                        .chooseControl('+1<碎梦>')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            return 1;
                                        });
                                } else {
                                    player
                                        .chooseControl('+1<碎梦>', '回复1点体力')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            return 1;
                                        });
                                }
                            } else {
                                event.finish();
                            }
                            ('step 1');
                            if (result.index == 0) {
                                player.storage.linghunsuimeng++;
                                player.markSkill('linghunsuimeng');
                                player.update();
                                if (player.storage.linghunxuesuo > 2) {
                                    event.mmdd = Math.floor(player.storage.linghunxuesuo / 2);
                                    event.mmddd = 2 * Math.floor(player.storage.linghunxuesuo / 2);
                                    player
                                        .chooseControl('额外+' + event.mmdd + '个<碎梦>,并-' + event.mmddd + '个<崩毁>', '取消')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            return 1;
                                        });
                                    event.goto(2);
                                } else event.finish();
                            } else {
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                    if (player.storage.linghunxuesuo == 0) {
                                        player.storage.linghunxuesuo++;
                                        player.markSkill('linghunxuesuo');
                                        player.update();
                                    }
                                } else {
                                    player.storage.linghunsuimeng++;
                                    player.markSkill('linghunsuimeng');
                                    player.update();
                                    if (player.storage.linghunxuesuo > 2) {
                                        event.mmdd = Math.floor(player.storage.linghunxuesuo / 2);
                                        event.mmddd = 2 * Math.floor(player.storage.linghunxuesuo / 2);
                                        player
                                            .chooseControl('额外+' + event.mmdd + '个<碎梦>,并-' + event.mmddd + '个<崩毁>', '取消')
                                            .set('prompt', '请选择一项')
                                            .set('ai', function () {
                                                return 1;
                                            });
                                        event.goto(2);
                                    } else event.finish();
                                }
                            }
                            ('step 2');
                            if (result.index == 0) {
                                player.storage.linghunsuimeng += event.mmdd;
                                player.markSkill('linghunsuimeng');
                                player.update();
                                player.storage.linghunxuesuo -= event.mmddd;
                                player.markSkill('linghunxuesuo');
                                player.update();
                            } else {
                                event.finish();
                            }
                        },
                    },
                },
            },
            linghunsuimeng: {
                nobracket: true,
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                marktext: '碎梦',
                intro: {
                    name: '碎梦',
                },
                content() {
                    player.storage.linghunsuimeng++;
                    player.markSkill('linghunsuimeng');
                    player.update();
                    game.countPlayer(function (current) {
                        if (current != player && !current.storage.linghunxuesuo) {
                            current.storage.linghunxuesuo = 1;
                            current.markSkill('linghunxuesuo');
                            current.update();
                        }
                    });
                },
            },
            linghunbenghui: {
                init(player) {
                    player.storage.linghunbenghui = false;
                },
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    if (player.storage.linghunsuimeng > 0) {
                        return player.storage.linghunsuimeng > 0;
                    } else return player.countCards('he') >= 2;
                },
                filterTarget(card, player, target) {
                    return target != player;
                },
                content() {
                    'step 0';
                    if (player.hp < target.hp) {
                        player.storage.linghunbenghui = true;
                    }
                    ('step 1');
                    if (player.storage.linghunsuimeng > 0) {
                        player.storage.linghunsuimeng--;
                        player.markSkill('linghunsuimeng');
                        player.update();
                    } else {
                        player.chooseToDiscard(2, 'he', true);
                        player.damage(2, 'fire');
                    }
                    ('step 2');
                    if (player.storage.linghunbenghui) {
                        if (target.storage.linghunxuesuo > 0) {
                            target.damage(4 + target.storage.linghunxuesuo, 'fire', 'player')._triggered = null;
                            player.storage.linghunbenghui = false;
                            target.storage.linghunxuesuo = 0;
                            target.markSkill('linghunxuesuo');
                            target.update();
                        } else {
                            target.damage(4, 'fire', 'player')._triggered = null;
                            player.storage.linghunbenghui = false;
                            target.storage.linghunxuesuo = 0;
                            target.markSkill('linghunxuesuo');
                            target.update();
                        }
                    } else {
                        if (target.storage.linghunxuesuo > 0) {
                            target.damage(3 + target.storage.linghunxuesuo, 'fire', 'player')._triggered = null;
                            player.storage.linghunbenghui = false;
                            target.storage.linghunxuesuo = 0;
                            target.markSkill('linghunxuesuo');
                            target.update();
                        } else {
                            target.damage(3, 'fire', 'player')._triggered = null;
                            player.storage.linghunbenghui = false;
                            target.storage.linghunxuesuo = 0;
                            target.markSkill('linghunxuesuo');
                            target.update();
                        }
                    }
                },
            },
            siji_kuanghua: {
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                trigger: {
                    source: 'damageBegin',
                },
                content() {
                    game.log(player, '的<span class="greentext">【狂化】</span class>被触发');
                    game.log(player, '对', trigger.player, '发动了技能<span class="greentext">【狂化】</span class>,本次伤害额外', '+', 1);
                    trigger.num++;
                },
                group: ['siji_kuanghua_1', 'siji_kuanghua_2'],
                subSkill: {
                    1: {
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        forced: true,
                        filter(event, player) {
                            if (!lib.inpile.includes('siji_xueyantianlian')) return true;
                            return !!get.cardPile(function (card) {
                                return card.name == 'siji_xueyantianlian';
                            });
                        },
                        content() {
                            let card = get.cardPile('siji_xueyantianlian', 'field');
                            if (!card) {
                                card = game.createCard('siji_xueyantianlian');
                            }
                            player.equip(card);
                        },
                    },
                    2: {
                        trigger: {
                            player: 'dieBefore',
                        },
                        forced: true,
                        charlotte: true,
                        superCharlotte: true,
                        fixed: true,
                        silent: true,
                        lastDo: true,
                        mark: true,
                        intro: {
                            content: 'limited',
                        },
                        limited: true,
                        init(player, skill) {
                            player.storage[skill] = false;
                        },
                        content() {
                            'step 0';
                            trigger.cancel();
                            player.skills = [];
                            ('step 1');
                            player.init('dadiwushixb');
                            player.hp = player.maxHp;
                            player.update();
                            ('step 2');
                            player.storage.siji_kuanghua_2 = true;
                            player.awakenSkill('siji_kuanghua_2');
                            player.update();
                        },
                    },
                },
            },
            siji_xingshikuangzhan: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('baoshi', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('baoshi', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('baoshi', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            siji_silie: {
                trigger: {
                    source: 'damageBegin4',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hasMark('baoshi');
                },
                content() {
                    player.removeMark('baoshi', 1, true);
                    if (player.getEquip(1) && player.getEquip(1).name == 'siji_xueyantianlian') {
                        game.log(player, '对', trigger.player, '发动了技能<span class="greentext">【撕裂】</span class>,本次伤害额外', '+', 4);
                        trigger.num = trigger.num + 4;
                    } else {
                        game.log(player, '对', trigger.player, '发动了技能<span class="greentext">【撕裂】</span class>,本次伤害额外', '+', 2);
                        trigger.num += 2;
                    }
                },
            },
            xueyingkuangdao: {
                nobracket: true,
                trigger: {
                    source: 'damageBegin3',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    if (player.getEquip(1) && player.getEquip(1).name == 'siji_xueyantianlian') return event.card && event.card.name == 'sha' && Math.random() <= 1;
                    else return event.card && event.card.name == 'sha' && Math.random() <= 0.35;
                },
                content() {
                    player.say('血影狂刀!杀!!');
                    game.log(player, ':血影狂刀!杀!!');
                    var nas = trigger.player.maxHp - 1;
                    game.log(player, '的<span class="greentext">【血影狂刀】</span class>触发');
                    game.log(player, '对', trigger.player, '发动了技能<span class="greentext">【血影狂刀】</span class>,本次伤害额外', '+', nas);
                    trigger.num += nas;
                },
            },
            xuexingpaoxiao2: {
                trigger: {
                    global: 'useCard2',
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && player.hujia % 2 == 1;
                },
                superCharlotte: true,
                silent: true,
                forced: true,
                firstDo: true,
                charlotte: true,
                fixed: true,
                forced: true,
                content() {
                    trigger.directHit.push(player);
                },
                popup: false,
            },
            xuexingpaoxiao: {
                nobracket: true,
                inherit: 'qinggang_skill',
                equipSkill: false,
                trigger: {
                    player: 'useCardToTargeted',
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                logTarget: 'target',
                content() {
                    trigger.target.addTempSkill('qinggang2');
                    trigger.target.storage.qinggang2.add(trigger.card);
                },
                audio: 'ext:死星/audio:true',
                ai: {
                    unequip: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg && arg.name == 'sha') return true;
                        return false;
                    },
                },
                group: 'xuexingpaoxiao_1',
                subSkill: {
                    1: {
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        popup: false,
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && event.target.hujia % 2 == 1;
                        },
                        logTarget: 'target',
                        content() {
                            trigger.parent.directHit.add(trigger.target);
                            game.log(player, '的<span class="greentext">【血腥咆哮】</span class>被触发');
                            game.log(trigger.card, '强制命中');
                            game.log(player, '命中了', trigger.target);
                            trigger.trigger('shaHit');
                            trigger._result.bool = false;
                            trigger._result.result = null;
                        },
                    },
                },
            },
            狂战准备语音: {
                trigger: {
                    player: 'phaseBefore',
                },
                forced: true,
                silent: true,
                xikiyouku: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    game.playAudio('../extension/死星/audio/kuangzhan.mp3');
                },
            },
            jiexueyingkuangdao: {
                nobracket: true,
                trigger: {
                    source: 'damageBegin2',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    if (player.getEquip(1) && player.getEquip(1).name == 'siji_xueyantianlian') return event.card && event.card.name == 'sha' && Math.random() <= 1;
                    else return event.card && event.card.name == 'sha' && Math.random() <= 0.5;
                },
                content() {
                    player.say('血影狂刀!杀!!');
                    var nas = trigger.player.maxHp + trigger.player.hujia;
                    game.log(player, '的<span class="greentext">【血影狂刀】</span class>触发');
                    game.log(player, '对', trigger.player, '发动了技能<span class="greentext">【血影狂刀】</span class>,本次伤害额外', '+', nas);
                    trigger.num += nas;
                },
            },
            jiexuexingpaoxiao: {
                nobracket: true,
                inherit: 'qinggang_skill',
                equipSkill: false,
                trigger: {
                    player: 'useCardToTargeted',
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                logTarget: 'target',
                content() {
                    trigger.target.addTempSkill('qinggang2');
                    trigger.target.storage.qinggang2.add(trigger.card);
                },
                audio: 'ext:死星/audio:true',
                ai: {
                    unequip: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg && arg.name == 'sha') return true;
                        return false;
                    },
                },
                group: 'jiexuexingpaoxiao_1',
                subSkill: {
                    1: {
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        popup: false,
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && (event.target.hujia % 2 == 1 || event.target.hp > player.hp);
                        },
                        logTarget: 'target',
                        content() {
                            trigger.parent.directHit.add(trigger.target);
                            game.log(player, '的<span class="greentext">【血腥咆哮】</span class>被触发');
                            game.log(trigger.card, '强制命中');
                            game.log(player, '命中了', trigger.target);
                            trigger.trigger('shaHit');
                            trigger._result.bool = false;
                            trigger._result.result = null;
                        },
                    },
                },
            },
            jiesilie: {
                trigger: {
                    source: 'damageBegin4',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hasMark('baoshi') && event.player != player;
                },
                content() {
                    player.removeMark('baoshi', 1, true);
                    if (player.getEquip(1) && player.getEquip(1).name == 'siji_xueyantianlian') {
                        game.log(player, '对', trigger.player, '发动了技能<span class="greentext">【撕裂】</span class>,本次伤害额外', '+', 4);
                        trigger.num = trigger.num + 4;
                    } else {
                        game.log(player, '对', trigger.player, '发动了技能<span class="greentext">【撕裂】</span class>,本次伤害额外', '+', 2);
                        trigger.num += 2;
                    }
                },
            },
            jiekuanghua: {
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                trigger: {
                    source: 'damageBegin',
                },
                filter(event, player) {
                    return event.player != player;
                },
                content() {
                    game.log(player, '的<span class="greentext">【狂化】</span class>触发');
                    game.log(player, '对', trigger.player, '发动了技能<span class="greentext">【狂化】</span class>,本次伤害额外', '+', 1);
                    trigger.num++;
                },
                group: ['jiekuanghua_1', 'jiekuanghua_2'],
                subSkill: {
                    1: {
                        trigger: {
                            player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                        },
                        forced: true,
                        filter(event, player) {
                            if (!lib.inpile.includes('siji_xueyantianlian')) return true;
                            return !!get.cardPile(function (card) {
                                return card.name == 'siji_xueyantianlian';
                            });
                        },
                        content() {
                            let card = get.cardPile('siji_xueyantianlian', 'field');
                            if (!card) {
                                card = game.createCard('siji_xueyantianlian');
                            }
                            player.equip(card);
                        },
                    },
                    2: {
                        trigger: {
                            player: 'dieBefore',
                        },
                        forced: true,
                        charlotte: true,
                        superCharlotte: true,
                        fixed: true,
                        silent: true,
                        lastDo: true,
                        mark: true,
                        intro: {
                            content: 'limited',
                        },
                        limited: true,
                        init(player, skill) {
                            player.storage[skill] = false;
                        },
                        content() {
                            'step 0';
                            trigger.cancel();
                            player.skills = [];
                            ('step 1');
                            player.init('dadiwushixb');
                            player.hp = player.maxHp;
                            player.update();
                            ('step 2');
                            player.storage.jiekuanghua_2 = true;
                            player.awakenSkill('jiekuanghua_2');
                            player.update();
                        },
                    },
                },
            },
            weilicifu: {
                nobracket: true,
                enable: 'phaseUse',
                filter(event, player) {
                    return !player.hasSkill('jinyong2');
                },
                filterTarget(player, target) {
                    return target != player || (target = player);
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.chooseToDiscard('he', '弃置1张非基本牌', function (card) {
                        return get.type(card) !== 'basic';
                    });
                    ('step 1');
                    if (result.bool && target.countMark('weilicifumark') < 1) {
                        target.addMark('weilicifumark');
                    } else event.finish();
                    ('step 2');
                    player.addTempSkill('jinyong2');
                    game.addGlobalSkill('weilicifux');
                },
            },
            xunjiecifu: {
                nobracket: true,
                enable: 'phaseUse',
                filter(event, player) {
                    return !player.hasSkill('jinyong2');
                },
                filterTarget(player, target) {
                    return target != player || (target = player);
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.chooseToDiscard('he', '弃置1张非基本牌', function (card) {
                        return get.type(card) !== 'basic';
                    });
                    ('step 1');
                    if (result.bool && target.countMark('xunjiecifumark') < 1) {
                        target.addMark('xunjiecifumark');
                    } else event.finish();
                    ('step 2');
                    player.addTempSkill('jinyong2');
                    game.addGlobalSkill('xunjiecifux');
                },
            },
            heianzuzhou: {
                nobracket: true,
                enable: 'phaseUse',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hasMark('qidaofuwenx') && !player.hasSkill('jinyong2');
                },
                filterTarget(card, player, target) {
                    return target != player;
                },
                contentBefore() {
                    player.removeMark('qidaofuwenx');
                },
                content() {
                    'step 0';
                    target.damage();
                    player.damage();
                    ('step 1');
                    target.chooseToDiscard('he', 2, true);
                    player.draw(2);
                    ('step 2');
                    player.addTempSkill('jinyong2');
                },
            },
            guanghuixinyang: {
                nobracket: true,
                enable: 'phaseUse',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hasMark('qidaofuwenx') && !player.hasSkill('jinyong2');
                },
                filterTarget(card, player, target) {
                    return target != player;
                },
                contentBefore() {
                    player.removeMark('qidaofuwenx');
                },
                content() {
                    'step 0';
                    target.draw(2);
                    player.draw(2);
                    ('step 1');
                    player.chooseTarget({
                        filterTarget: true,
                    });
                    ('step 2');
                    if (result.bool) {
                        if (result.targets[0].hp < result.targets[0].maxHp) {
                            result.targets[0].recover();
                        } else {
                            result.targets[0].changeHujia();
                        }
                    } else {
                        player.addTempSkill('jinyong2');
                        event.finish();
                    }
                    ('step 3');
                    player.addTempSkill('jinyong2');
                },
            },
            qidao: {
                trigger: {
                    player: 'phaseBegin',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hasMark('baoshi') && !player.hasSkill('qidaoxingtai');
                },
                content() {
                    player.removeMark('baoshi', 1);
                    player.addSkills('qidaoxingtai');
                    player.addTempSkill('jinyong3');
                },
            },
            falichaoxi: {
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                trigger: {
                    player: ['weilicifuAfter', 'xunjiecifuAfter', 'heianzuzhouAfter', 'guanghuixinyangAfter'],
                },
                filter(event, player) {
                    return player.hasMark('shuijing') || player.hasMark('baoshi');
                },
                content() {
                    'step 0';
                    if (player.hasMark('shuijing') && player.hasMark('baoshi')) {
                        player
                            .chooseControl('移去1个<水晶>', '移去1个<宝石>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (!player.hasMark('shuijing') && player.hasMark('baoshi')) {
                            player.removeMark('baoshi', 1);
                            event.goto(2);
                        } else {
                            if (!player.hasMark('baoshi') && player.hasMark('shuijing')) {
                                player.removeMark('shuijing', 1);
                                event.goto(2);
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('shuijing');
                    } else {
                        player.removeMark('baoshi');
                    }
                    ('step 2');
                    player.removeSkill('jinyong2');
                },
            },
            weilicifumark: {
                marktext: '威力',
                intro: {
                    name: '威力赐福',
                    content: '你造成伤害时,可移除1<威力赐福>,本次伤害额外+2',
                },
            },
            weilicifux: {
                trigger: {
                    source: 'damageBegin4',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hasMark('weilicifumark');
                },
                content() {
                    player.removeMark('weilicifumark', 1, true);
                    game.log(player, '移除了1<威力赐福>,本次伤害额外+2');
                    trigger.num += 2;
                },
            },
            xunjiecifumark: {
                marktext: '迅捷',
                intro: {
                    name: '迅捷赐福',
                    content: '你使用杀结算完毕时,可移除1<迅捷赐福>,令你本回合使用杀的次数额外+1',
                },
            },
            xunjiecifux: {
                trigger: {
                    player: 'useCardAfter',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player == _status.currentPhase && player.hasMark('xunjiecifumark') && event.card && event.card.name == 'sha';
                },
                content() {
                    player.removeMark('xunjiecifumark', 1, true);
                    game.log(player, '移除了1<迅捷赐福>,本回合使用杀次数额外+1');
                    player.getStat().card.sha--;
                },
            },
            xunjie: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return (num += 1 + player.countMark('xunjiecifux'));
                    },
                },
            },
            xingshiqidao: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong3') && !player.hasSkill('jinyong2');
                },
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('baoshi');
                        player.addMark('shuijing');
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('baoshi');
                            player.addMark('shuijing', 2);
                        } else {
                            player.draw(3, true);
                            player.addMark('baoshi');
                            player.addMark('shuijing', 1);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            qidaofuwenx: {
                marktext: '符文',
                intro: {
                    name: '祈祷符文',
                    content: '你需要发动<黑暗诅咒>或<光辉信仰>时,需要移除1<祈祷符文>',
                },
            },
            qidaoxingtai: {
                mark: true,
                nopop: true,
                init(player) {
                    game.log(player, '进入了', '【祈祷形态】');
                },
                intro: {
                    content: '锁定技,你使用杀指定目标时,你+2<祈祷符文>',
                },
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                content() {
                    if (player.countMark('qidaofuwenx') < 2) {
                        player.addMark('qidaofuwenx', 2);
                    } else {
                        if (player.countMark('qidaofuwenx') == 2) {
                            player.addMark('qidaofuwenx', 1);
                        } else {
                            if (player.countMark('qidaofuwenx') == 3) {
                                event.finish();
                            }
                        }
                    }
                },
            },
            jieweilicifu: {
                nobracket: true,
                enable: 'phaseUse',
                filter(event, player) {
                    return !player.hasSkill('jinyong2');
                },
                filterTarget(player, target) {
                    return target != player || (target = player);
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.chooseToDiscard('he', '弃置1张非基本牌', function (card) {
                        return get.type(card) !== 'basic';
                    });
                    ('step 1');
                    if (result.bool) {
                        target.addMark('jieweilicifumark');
                        event.goto(2);
                    } else event.finish();
                    ('step 2');
                    player.addTempSkill('jinyong2');
                    game.addGlobalSkill('jieweilicifux');
                },
            },
            jiexunjiecifu: {
                nobracket: true,
                enable: 'phaseUse',
                filter(event, player) {
                    return !player.hasSkill('jinyong2');
                },
                filterTarget(player, target) {
                    return target != player || (target = player);
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.chooseToDiscard('he', '弃置1张非基本牌', function (card) {
                        return get.type(card) !== 'basic';
                    });
                    ('step 1');
                    if (result.bool) {
                        target.addMark('jiexunjiecifumark');
                        event.goto(2);
                    } else event.finish();
                    ('step 2');
                    player.addTempSkill('jinyong2');
                    game.addGlobalSkill('jiexunjiecifux');
                },
            },
            jieheianzuzhou: {
                nobracket: true,
                enable: 'phaseUse',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hasMark('jieqidaofuwenx') && !player.hasSkill('jinyong2');
                },
                filterTarget(card, player, target) {
                    return target != player && player.getEnemies().includes(target);
                },
                contentBefore() {
                    player.removeMark('jieqidaofuwenx');
                },
                content() {
                    'step 0';
                    target.damage();
                    player.damage();
                    ('step 1');
                    target.chooseToDiscard('he', 3, true);
                    player.draw(3);
                    ('step 2');
                    player.addTempSkill('jinyong2');
                },
            },
            jieguanghuixinyang: {
                nobracket: true,
                enable: 'phaseUse',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hasMark('jieqidaofuwenx') && !player.hasSkill('jinyong2');
                },
                filterTarget(card, player, target) {
                    return target != player && player.getFriends().includes(target);
                },
                contentBefore() {
                    player.removeMark('jieqidaofuwenx');
                },
                content() {
                    'step 0';
                    target.draw(3);
                    player.draw(3);
                    ('step 1');
                    player.chooseTarget(true, get.prompt('jieguanghuixinyang'), function (card, player, target) {
                        return target == player || player.getFriends().includes(target);
                    });
                    ('step 2');
                    if (result.bool) {
                        if (result.targets[0].hp < result.targets[0].maxHp) {
                            result.targets[0].recover();
                        } else {
                            result.targets[0].changeHujia();
                        }
                    } else {
                        player.addTempSkill('jinyong2');
                        event.finish();
                    }
                    ('step 3');
                    player.addTempSkill('jinyong2');
                },
            },
            jieqidao: {
                trigger: {
                    player: 'phaseBegin',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hasMark('baoshi') && !player.hasSkill('jieqidaoxingtai');
                },
                content() {
                    player.removeMark('baoshi', 1);
                    player.addSkills('jieqidaoxingtai');
                    player.addMark('jieqidaofuwenx', 1);
                    player.addTempSkill('jinyong3');
                },
            },
            jiefalichaoxi: {
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                trigger: {
                    player: ['jieweilicifuAfter', 'jiexunjiecifuAfter', 'jieheianzuzhouAfter', 'jieguanghuixinyangAfter'],
                },
                filter(event, player) {
                    return player.hasMark('shuijing') || player.hasMark('baoshi');
                },
                content() {
                    'step 0';
                    if (player.hasMark('shuijing') && player.hasMark('baoshi')) {
                        player
                            .chooseControl('移去1个<水晶>', '移去1个<宝石>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (!player.hasMark('shuijing') && player.hasMark('baoshi')) {
                            player.removeMark('baoshi', 1);
                            event.goto(2);
                        } else {
                            if (!player.hasMark('baoshi') && player.hasMark('shuijing')) {
                                player.removeMark('shuijing', 1);
                                event.goto(2);
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('shuijing');
                    } else {
                        player.removeMark('baoshi');
                    }
                    ('step 2');
                    player.removeSkill('jinyong2');
                    player.draw(2);
                },
            },
            jieweilicifumark: {
                marktext: '威力',
                intro: {
                    name: '威力赐福',
                    content: '你造成伤害时,可移除1<威力赐福>,本次伤害额外+3',
                },
            },
            jieweilicifux: {
                trigger: {
                    source: 'damageBegin4',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hasMark('jieweilicifumark');
                },
                content() {
                    player.removeMark('jieweilicifumark', 1, true);
                    game.log(player, '移除了1<威力赐福>,本次伤害额外+3');
                    trigger.num += 3;
                },
            },
            jiexunjiecifumark: {
                marktext: '迅捷',
                intro: {
                    name: '迅捷赐福',
                    content: '你使用杀结算完毕时,可移除1<迅捷赐福>,令你本回合使用杀的次数额外+1且获得一张杀',
                },
            },
            jiexunjiecifux: {
                trigger: {
                    player: 'useCardAfter',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player == _status.currentPhase && player.hasMark('jiexunjiecifumark') && event.card && event.card.name == 'sha';
                },
                content() {
                    player.removeMark('jiexunjiecifumark', 1, true);
                    game.log(player, '移除了1<迅捷赐福>,本回合使用杀次数额外+1且获得一张杀');
                    player.getStat().card.sha--;
                    var cards = get.cardPile(function (card) {
                        var naas = [0, 1, 2, 3].randomGet();
                        if (naas == 1) {
                            return card.name == 'sha' && card.nature == 'xb_anmie';
                        } else {
                            return card.name == 'sha';
                        }
                    });
                    if (cards) player.gain(cards, player, 'gain2');
                },
            },
            jiexunjie: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return (num += 1 + player.countMark('jiexunjiecifux'));
                    },
                },
            },
            jieqidaofuwenx: {
                marktext: '符文',
                intro: {
                    name: '祈祷符文',
                    content: '你需要发动<黑暗诅咒>或<光辉信仰>时,需要移除1<祈祷符文>',
                },
            },
            jieqidaoxingtai: {
                mark: true,
                nopop: true,
                init(player) {
                    game.log(player, '进入了', '【祈祷形态】');
                },
                intro: {
                    content: '锁定技,你使用杀指定目标时,你+2<祈祷符文>',
                },
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                content() {
                    if (player.countMark('jieqidaofuwenx') < 3) {
                        player.addMark('jieqidaofuwenx', 2);
                    } else {
                        if (player.countMark('jieqidaofuwenx') == 3) {
                            player.addMark('jieqidaofuwenx', 1);
                        } else {
                            if (player.countMark('jieqidaofuwenx') == 4) {
                                event.finish();
                            }
                        }
                    }
                },
            },
            shuijing: {
                marktext: '水晶',
                intro: {
                    name: '水晶',
                    content: '<移除<水晶>来发动的技能可通过移除<宝石>发动,但移除<宝石>来发动的技能不能通过移除<水晶>发动.',
                },
            },
            baoshi: {
                marktext: '宝石',
                intro: {
                    name: '宝石',
                    content: '<移除<水晶>来发动的技能可通过移除<宝石>发动,但移除<宝石>来发动的技能不能通过移除<水晶>发动.',
                },
            },
            siji_shuiying: {
                trigger: {
                    player: ['damageBegin4', 'loseHpBegin'],
                },
                filter(event, player) {
                    return player.countCards('he') > player.countCards('he', { type: 'basic' });
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    var num = trigger.num;
                    player.chooseToDiscard([0, num], 'he', '弃置至多等于损失体力数的非基本牌', function (card) {
                        return get.type(card) !== 'basic';
                    });
                    ('step 1');
                    if (result.bool) {
                        trigger.num -= result.cards.length;
                    } else event.finish();
                },
            },
            fanshi1: {
                trigger: {
                    player: ['damageEnd', 'damageZero'],
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.source && event.source.isAlive();
                },
                logSkill: 'source',
                check(event, player) {
                    return get.damageEffect(event.source, player, player) > 0;
                },
                content() {
                    trigger.source.damage('nosource');
                },
                ai: {
                    threaten: 0.6,
                    maixie: true,
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                return [1, 1];
                            }
                        },
                    },
                },
            },
            siji_xingshiansha: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('qianxing2');
                },
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('baoshi', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('baoshi', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('baoshi', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            qianxing1: {
                trigger: {
                    player: 'phaseBegin',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hasMark('baoshi');
                },
                content() {
                    player.removeMark('baoshi', 1);
                    player.addTempSkill('qianxing2', { player: 'phaseBefore' });
                },
            },
            qianxing2: {
                mark: true,
                nopop: true,
                init(player) {
                    game.log(player, '获得了', '【潜行】');
                },
                intro: {
                    content: '锁定技,你不能成为其他角色的卡牌的目标且你的手牌上限-1',
                },
                mod: {
                    targetEnabled(card, player, target, event) {
                        if (player != target) return false;
                    },
                    targetInRange(card) {
                        if ((card.name = 'sha')) return true;
                    },
                    maxHandcard: (player, num) => num - 1,
                },
                trigger: {
                    source: 'damageBegin4',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return player.hasMark('baoshi') && event.card && event.card.name == 'sha';
                },
                content() {
                    trigger.num += player.countMark('baoshi');
                },
                group: 'qianxing2_1',
                subSkill: {
                    1: {
                        shaRelated: true,
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        forced: true,
                        fixed: true,
                        check(event, player) {
                            return get.attitude(player, event.target) <= 0;
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        logTarget: 'target',
                        content() {
                            trigger.parent.directHit.add(trigger.target);
                        },
                    },
                },
            },
            jiefanshi: {
                trigger: {
                    player: ['damageEnd', 'damageZero'],
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.source && event.source.isAlive() && event.source != player;
                },
                logSkill: 'source',
                check(event, player) {
                    return get.damageEffect(event.source, player, player) > 0;
                },
                content() {
                    trigger.source.damage(Math.max(1, trigger.num), 'nosource');
                },
                ai: {
                    threaten: 0.6,
                    maixie: true,
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                return [1, 1];
                            }
                        },
                    },
                },
            },
            jieshuiying: {
                trigger: {
                    player: ['damageBegin4', 'loseHpBegin'],
                },
                filter(event, player) {
                    return player.countCards('he') > player.countCards('he', { type: 'basic' });
                },
                content() {
                    'step 0';
                    var num = trigger.num;
                    player.chooseToDiscard([0, num], 'he', '弃置至多等于损失体力数的非基本牌', function (card) {
                        return get.type(card) !== 'basic';
                    });
                    ('step 1');
                    if (result.bool) {
                        trigger.num -= result.cards.length;
                        player.draw(result.cards.length);
                    } else event.finish();
                },
            },
            guanchuansheji: {
                nobracket: true,
                trigger: {
                    player: ['shaMiss', 'shaCancelled'],
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.target != player;
                },
                content() {
                    player.draw();
                    trigger.target.chooseToDiscard(2, 'h', true);
                },
            },
            shanguangxianjing: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.countCards('h', 'shan') > 0;
                },
                filterTarget: true,
                filterCard: {
                    name: 'shan',
                },
                content() {
                    target.damage(2, 'thunder');
                },
            },
            jingzhunsheji: {
                nobracket: true,
                trigger: {
                    player: 'useCard',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.addTempSkill('unequip', { player: 'useCardAfter' });
                    trigger.directHit.addArray(game.players);
                    ('step 1');
                    player.chooseToDiscard('he', true);
                },
            },
            juji10: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.hasMark('shuijing') || player.hasMark('baoshi');
                },
                filterTarget: true,
                content() {
                    'step 0';
                    if (player.hasMark('shuijing') && player.hasMark('baoshi')) {
                        player
                            .chooseControl('移去1个<水晶>', '移去1个<宝石>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (!player.hasMark('shuijing') && player.hasMark('baoshi')) {
                            player.removeMark('baoshi', 1);
                            event.goto(2);
                        } else {
                            if (!player.hasMark('baoshi') && player.hasMark('shuijing')) {
                                player.removeMark('shuijing', 1);
                                event.goto(2);
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('shuijing');
                    } else {
                        player.removeMark('baoshi');
                    }
                    ('step 2');
                    target.chooseToDiscard('h', target.countCards('h') - 1, true);
                    player.addTempSkill('cishu');
                },
            },
            xingshishenjian: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('shuijing', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('shuijing', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('shuijing', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            shandianjianx: {
                mod: {
                    cardname(card, player) {
                        if (get.color(card) == 'black' && card.name == 'sha') return 'sha';
                    },
                    cardnature(card, player) {
                        if (get.color(card) == 'black' && card.name == 'sha') return 'thunder';
                    },
                },
                nobracket: true,
                group: 'shandianjianx_1',
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    if (event.card && event.card.name == 'sha' && event.card.nature == 'thunder') return true;
                    return false;
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    trigger.directHit.addArray(game.players);
                    game.log(trigger.card, '不可被响应');
                },
                ai: {
                    directHit_ai: true,
                },
                subSkill: {
                    1: {
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'jingleishan';
                        },
                        logTarget: 'target',
                        content() {
                            'step 0';
                            game.countPlayer(function (current) {
                                if (current != player) current.damage('thunder');
                            });
                            ('step 1');
                            trigger.cancel();
                            ('step 2');
                            event.finish();
                        },
                    },
                },
            },
            cishu: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + 1;
                    },
                },
            },
            弓之女神准备语音: {
                trigger: {
                    player: 'phaseBefore',
                },
                forced: true,
                silent: true,
                xikiyouku: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    game.playAudio('../extension/死星/audio/gongnv.mp3');
                },
            },
            jieshandianjianx: {
                mod: {
                    cardname(card, player) {
                        if (get.color(card) == 'black' && card.name == 'sha') return 'sha';
                    },
                    cardnature(card, player) {
                        if (get.color(card) == 'black' && card.name == 'sha') return 'thunder';
                    },
                },
                nobracket: true,
                group: ['jieshandianjianx_1', 'jieshandianjianx_2'],
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    if (event.card && event.card.name == 'sha' && event.card.nature == 'thunder') return true;
                    return false;
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    trigger.directHit.addArray(game.players);
                    game.log(trigger.card, '不可被响应');
                },
                ai: {
                    directHit_ai: true,
                },
                subSkill: {
                    1: {
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'jingleishan';
                        },
                        logTarget: 'target',
                        content() {
                            'step 0';
                            game.countPlayer(function (current) {
                                if (current != player) current.damage('thunder');
                            });
                            ('step 1');
                            trigger.cancel();
                            ('step 2');
                            event.finish();
                        },
                    },
                    2: {
                        trigger: {
                            player: 'useCardToTargeted',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'shandianjian';
                        },
                        logTarget: 'target',
                        content() {
                            'step 0';
                            trigger.target.damage('thunder');
                            ('step 1');
                            trigger.cancel();
                            ('step 2');
                            event.finish();
                        },
                    },
                },
            },
            jieguanchuansheji: {
                nobracket: true,
                trigger: {
                    player: ['shaMiss', 'shaCancelled'],
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.target != player;
                },
                content() {
                    'step 0';
                    player.draw();
                    trigger.target
                        .chooseControl()
                        .set('choiceList', ['令弓之女神观看你的手牌并弃置其中2张', '受到弓之女神对你造成的1点雷电伤害'])
                        .set('ai', function () {
                            var num = [0, 1].randomGet();
                            return num;
                        });
                    ('step 1');
                    if (result.index == 0) {
                        player.discardPlayerCard(trigger.target, 'visible', true, 'h', 2);
                    } else trigger.target.damage('thunder');
                },
            },
            jieshanguangxianjing: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.countCards('h', 'shan') > 0;
                },
                filterTarget: true,
                filterCard: {
                    name: 'shan',
                },
                content() {
                    if (target.hp > player.hp && target.hujia > 0) {
                        target.damage(4, 'thunder');
                    } else {
                        if ((target.hp > player.hp && target.hujia == 0) || (target.hp <= player.hp && target.hujia > 0)) {
                            target.damage(3, 'thunder');
                        } else target.damage(2, 'thunder');
                    }
                },
            },
            jiejingzhunsheji: {
                nobracket: true,
                trigger: {
                    player: 'useCard',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.addTempSkills('unequip', { player: 'useCardAfter' });
                    trigger.directHit.addArray(game.players);
                    ('step 1');
                    player.chooseToDiscard('he', true);
                },
            },
            jiejuji10: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.hasMark('shuijing') || player.hasMark('baoshi');
                },
                filterTarget: true,
                content() {
                    'step 0';
                    if (player.hasMark('shuijing') && player.hasMark('baoshi')) {
                        player
                            .chooseControl('移去1个<水晶>', '移去1个<宝石>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (!player.hasMark('shuijing') && player.hasMark('baoshi')) {
                            player.removeMark('baoshi', 1);
                            event.goto(2);
                        } else {
                            if (!player.hasMark('baoshi') && player.hasMark('shuijing')) {
                                player.removeMark('shuijing', 1);
                                event.goto(2);
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('shuijing');
                    } else {
                        player.removeMark('baoshi');
                    }
                    ('step 2');
                    player.choosePlayerCard(target, 'h', 'visible', '<div class="text center">选择其中1张牌,保留此牌弃置剩余的牌</div>');
                    ('step 3');
                    if (result?.cards?.length) {//QQQ
                        var cards = target.getCards('he');
                        cards.remove(result.cards[0]);
                        target.discard(cards, true);
                        player.addTempSkill('cishu');
                    }
                },
            },
            元素准备语音: {
                trigger: {
                    player: 'phaseBefore',
                },
                forced: true,
                silent: true,
                xikiyouku: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    game.playAudio('../extension/死星/audio/yuansu.mp3');
                },
            },
            yuansufashuyunshi: {
                nobracket: true,
                enable: 'phaseUse',
                popup: false,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter: (event, player, target) => !player.hasSkill('jinyong') && player.countCards('he', { suit: 'none' }) > 0,
                filterTarget: true,
                filterCard: {
                    suit: 'none',
                },
                position: 'he',
                content() {
                    'step 1';
                    target.addTempSkill('jiashang2', 'damageEnd');
                    target.damage('nocard', 'xb_dadi');
                },
                group: ['yuansufashuyunshi_1'],
                subSkill: {
                    1: {
                        trigger: {
                            source: 'damageBegin4',
                        },
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.player.hasSkill('jiashang2') && player.countCards('he', { suit: 'none' }) > 0;
                        },
                        content() {
                            'step 0';
                            player.chooseToDiscard('弃置1张🃏牌', function (card) {
                                return card.suit == 'none';
                            });
                            ('step 1');
                            if (result.bool) {
                                trigger.num++;
                            }
                        },
                        forced: true,
                        popup: false,
                    },
                },
            },
            yuansufashufengren: {
                init(player) {
                    player.storage.风 = 0;
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + player.storage.风;
                    },
                },
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                position: 'he',
                popup: false,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter: (event, player, target) => !player.hasSkill('jinyong') && player.countCards('he', { suit: 'club' }) > 0,
                filterTarget: true,
                filterCard: {
                    suit: 'club',
                },
                content() {
                    'step 0';
                    target.addTempSkill('jiashang4', 'damageEnd');
                    target.damage('xb_wind', 'nocard');
                    player.storage.风 = 1;
                    ('step 1');
                    player.addTempSkill('jinyong');
                },
                group: ['yuansufashufengren_1', 'yuansufashufengren_2'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'damageBegin4',
                        },
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.player.hasSkill('jiashang4') && player.countCards('he', { suit: 'club' }) > 0;
                        },
                        content() {
                            'step 0';
                            player.chooseToDiscard('弃置1张♣️️ 牌', function (card) {
                                return card.suit == 'club';
                            });
                            ('step 1');
                            if (result.bool) {
                                trigger.num++;
                            }
                        },
                        forced: true,
                        popup: false,
                    },
                    2: {
                        trigger: {
                            player: 'phaseJieshuEnd',
                        },
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            player.storage.风 = 0;
                        },
                    },
                },
            },
            yuansufashubingdong: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                position: 'he',
                popup: false,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter: (event, player, target) => !player.hasSkill('jinyong') && player.countCards('he', { suit: 'diamond' }) > 0,
                filterTarget: true,
                filterCard: {
                    suit: 'diamond',
                },
                content() {
                    'step 0';
                    target.addTempSkill('jiashang', 'damageEnd');
                    target.damage('ice', 'nocard');
                    ('step 1');
                    player.chooseTarget({
                        filterTarget: true,
                    });
                    ('step 2');
                    if (result.bool) {
                        if (result.targets[0].hp < result.targets[0].maxHp) {
                            result.targets[0].recover();
                        } else {
                            result.targets[0].changeHujia();
                        }
                    } else {
                        player.addTempSkill('jinyong');
                        event.finish();
                    }
                    ('step 3');
                    player.addTempSkill('jinyong');
                },
                group: ['yuansufashubingdong_1'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'damageBegin4',
                        },
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.player.hasSkill('jiashang') && player.countCards('he', { suit: 'diamond' }) > 0;
                        },
                        content() {
                            'step 0';
                            player.chooseToDiscard('弃置1张♦️️️牌', function (card) {
                                return card.suit == 'diamond';
                            });
                            ('step 1');
                            if (result.bool) {
                                trigger.num++;
                            }
                        },
                        forced: true,
                        popup: false,
                    },
                },
            },
            yuansufashuleiji: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                position: 'he',
                popup: false,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter: (event, player, target) => !player.hasSkill('jinyong') && player.countCards('he', { suit: 'spade' }) > 0,
                filterTarget: true,
                filterCard: {
                    suit: 'spade',
                },
                content() {
                    'step 0';
                    target.addTempSkill('jiashang3', 'damageEnd');
                    target.damage('thunder', 'nocard');
                    ('step 1');
                    player.addTempSkill('jinyong');
                    player.addMark('siji_xingshiyuansu');
                },
                group: ['yuansufashuleiji_1'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'damageBegin4',
                        },
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.player.hasSkill('jiashang3') && player.countCards('he', { suit: 'spade' }) > 0;
                        },
                        content() {
                            'step 0';
                            player.chooseToDiscard('弃置1张♠️️️牌', function (card) {
                                return card.suit == 'spade';
                            });
                            ('step 1');
                            if (result.bool) {
                                trigger.num++;
                            }
                        },
                        forced: true,
                        popup: false,
                    },
                },
            },
            yuansudianran: {
                nobracket: true,
                enable: 'phaseUse',
                popup: false,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong') && player.countMark('yuansu1') == 3;
                },
                content() {
                    'step 0';
                    player.chooseTarget({
                        filterTarget: true,
                    });
                    ('step 1');
                    player.removeMark('yuansu1', 3);
                    result.targets[0].damage(2);
                },
            },
            yuansufashuyueguang: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                popup: false,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong') && player.countMark('baoshi') > 0;
                },
                content() {
                    'step 0';
                    player.chooseTarget({
                        filterTarget: true,
                    });
                    ('step 1');
                    var num = player.countMark('baoshi');
                    result.targets[0].damage(num, 'nocard');
                    player.removeMark('baoshi');
                    ('step 2');
                    player.addTempSkill('jinyong');
                },
            },
            jiashang2: {},
            jiashang1: {},
            jiashang: {},
            jiashang3: {},
            jiashang4: {},
            yuansu1: {
                marktext: '元',
                intro: {
                    name: '元素',
                    content: '<元素>上限为3,出牌阶段,若<元素>达到上限,则可移去所有<元素>对一名角色造成2点伤害',
                },
            },
            yuansufashuhuoqiu: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                position: 'he',
                popup: false,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter: (event, player, target) => !player.hasSkill('jinyong') && player.countCards('he', { suit: 'heart' }) > 0,
                filterTarget: true,
                filterCard: {
                    suit: 'heart',
                },
                content() {
                    'step 0';
                    target.addTempSkill('jiashang1', 'damageEnd');
                    target.damage(2, 'fire', 'nocard');
                    ('step 1');
                    player.addTempSkill('jinyong');
                },
                group: ['yuansufashuhuoqiu_1'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'damageBegin4',
                        },
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.player.hasSkill('jiashang1') && player.countCards('he', { suit: 'heart' }) > 0;
                        },
                        content() {
                            'step 0';
                            player.chooseToDiscard('弃置1张♥️️️牌', function (card) {
                                return card.suit == 'heart';
                            });
                            ('step 1');
                            if (result.bool) {
                                trigger.num++;
                            }
                        },
                        forced: true,
                        popup: false,
                    },
                },
            },
            jinyong: {
                popup: false,
                silent: true,
            },
            jinyong2: {
                popup: false,
                silent: true,
            },
            jinyong3: {},
            jieyuansudianran: {
                nobracket: true,
                enable: 'phaseUse',
                popup: false,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong') && player.countMark('yuansui') >= 3;
                },
                content() {
                    'step 0';
                    player.chooseTarget({
                        filterTarget: true,
                    });
                    ('step 1');
                    player.removeMark('yuansui', 3);
                    result.targets[0].damage(2);
                },
            },
            yuansui: {
                marktext: '元',
                intro: {
                    name: '元素',
                    content: '<元素>上限为6,出牌阶段,若<元素>大于等于3,则可移除3<元素>对一名角色造成2点伤害',
                },
            },
            jieyuansufashuyunshi: {
                nobracket: true,
                enable: 'phaseUse',
                popup: false,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter: (event, player, target) => !player.hasSkill('jinyong') && player.countCards('he', { suit: 'none' }) > 0,
                filterTarget: true,
                filterCard: {
                    suit: 'none',
                },
                position: 'he',
                content() {
                    'step 1';
                    target.addTempSkill('jiashang2', 'damageEnd');
                    target.damage('nocard', 'xb_dadi');
                },
                group: ['jieyuansufashuyunshi_1'],
                subSkill: {
                    1: {
                        trigger: {
                            source: 'damageBegin4',
                        },
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.player.hasSkill('jiashang2') && player.countCards('he') > 0;
                        },
                        content() {
                            'step 0';
                            player.chooseToDiscard('弃置1张牌', 'he');
                            ('step 1');
                            if (result.bool) {
                                trigger.num++;
                            }
                            if (result.bool && result.cards[0].suit == 'none') {
                                trigger.num++;
                            }
                        },
                        forced: true,
                        popup: false,
                    },
                },
            },
            jieyuansufashufengren: {
                init(player) {
                    player.storage.风 = 0;
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + player.storage.风;
                    },
                },
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                position: 'he',
                popup: false,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter: (event, player, target) => !player.hasSkill('jinyong') && player.countCards('he', { suit: 'club' }) > 0,
                filterTarget: true,
                filterCard: {
                    suit: 'club',
                },
                content() {
                    'step 0';
                    target.addTempSkill('jiashang4', 'damageEnd');
                    target.damage('xb_wind', 'nocard');
                    ('step 1');
                    player.addTempSkill('jinyong');
                },
                group: ['jieyuansufashufengren_1', 'jieyuansufashufengren_2'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'damageBegin4',
                        },
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.player.hasSkill('jiashang4') && player.countCards('he') > 0;
                        },
                        content() {
                            'step 0';
                            player.chooseToDiscard('弃置1张牌', 'he');
                            ('step 1');
                            if (result.bool) {
                                trigger.num++;
                            }
                            if (result.bool && result.cards[0].suit == 'club') {
                                trigger.num++;
                            }
                        },
                        forced: true,
                        popup: false,
                    },
                    2: {
                        trigger: {
                            player: 'phaseJieshuEnd',
                        },
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            player.storage.风 = 0;
                        },
                    },
                },
            },
            jieyuansufashuhuoqiu: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                position: 'he',
                popup: false,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter: (event, player, target) => !player.hasSkill('jinyong') && player.countCards('he', { suit: 'heart' }) > 0,
                filterTarget: true,
                filterCard: {
                    suit: 'heart',
                },
                content() {
                    'step 0';
                    target.addTempSkill('jiashang1', 'damageEnd');
                    target.damage(2, 'fire', 'nocard');
                    ('step 1');
                    player.addTempSkill('jinyong');
                },
                group: ['jieyuansufashuhuoqiu_1'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'damageBegin4',
                        },
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.player.hasSkill('jiashang1') && player.countCards('he') > 0;
                        },
                        content() {
                            'step 0';
                            player.chooseToDiscard('弃置1张牌', 'he');
                            ('step 1');
                            if (result.bool) {
                                trigger.num++;
                            }
                            if (result.bool && result.cards[0].suit == 'heart') {
                                trigger.num++;
                            }
                        },
                        forced: true,
                        popup: false,
                    },
                },
            },
            jieyuansufashubingdong: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                position: 'he',
                popup: false,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter: (event, player, target) => !player.hasSkill('jinyong') && player.countCards('he', { suit: 'diamond' }) > 0,
                filterTarget: true,
                filterCard: {
                    suit: 'diamond',
                },
                content() {
                    'step 0';
                    target.addTempSkill('jiashang', 'damageEnd');
                    target.damage('ice', 'nocard');
                    ('step 1');
                    player.chooseTarget({
                        filterTarget: true,
                    });
                    ('step 2');
                    if (result.bool) {
                        if (result.targets[0].hp < result.targets[0].maxHp) {
                            result.targets[0].recover();
                        } else {
                            result.targets[0].changeHujia();
                        }
                    } else {
                        player.addTempSkill('jinyong');
                        event.finish();
                    }
                    ('step 3');
                    player.addTempSkill('jinyong');
                },
                group: ['jieyuansufashubingdong_1'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'damageBegin4',
                        },
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.player.hasSkill('jiashang') && player.countCards('he') > 0;
                        },
                        content() {
                            'step 0';
                            player.chooseToDiscard('弃置1张牌', 'he');
                            ('step 1');
                            if (result.bool) {
                                trigger.num++;
                            }
                            if (result.bool && result.cards[0].suit == 'diamond') {
                                trigger.num++;
                            }
                        },
                        forced: true,
                        popup: false,
                    },
                },
            },
            jieyuansufashuleiji: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                position: 'he',
                popup: false,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter: (event, player, target) => !player.hasSkill('jinyong') && player.countCards('he', { suit: 'spade' }) > 0,
                filterTarget: true,
                filterCard: {
                    suit: 'spade',
                },
                content() {
                    'step 0';
                    target.addTempSkill('jiashang3', 'damageEnd');
                    target.damage('thunder', 'nocard');
                    ('step 1');
                    player.addTempSkill('jinyong');
                    player.addMark('baoshi');
                },
                group: ['jieyuansufashuleiji_1'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'damageBegin4',
                        },
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.player.hasSkill('jiashang3') && player.countCards('he') > 0;
                        },
                        content() {
                            'step 0';
                            player.chooseToDiscard('弃置1张牌', 'he');
                            ('step 1');
                            if (result.bool) {
                                trigger.num++;
                            }
                            if (result.bool && result.cards[0].suit == 'spade') {
                                trigger.num++;
                            }
                        },
                        forced: true,
                        popup: false,
                    },
                },
            },
            yuansuxishou: {
                nobracket: true,
                silent: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                trigger: {
                    player: ['yuansufashubingdongAfter', 'yuansufashuyunshiAfter', 'yuansufashuleijiAfter', 'yuansufashuhuoqiuAfter', 'yuansufashuyueguangAfter'],
                },
                content() {
                    'step 0';
                    if (player.countMark('yuansu1') == 0) {
                        player.addMark('yuansu1', 1, true);
                    } else {
                        if (player.countMark('yuansu1') == 1) {
                            player.addMark('yuansu1', 1, true);
                        } else {
                            if (player.countMark('yuansu1') == 2) {
                                player.addMark('yuansu1', 1, true);
                            } else event.finish();
                        }
                    }
                },
                popup: false,
            },
            jieyuansuxishou: {
                nobracket: true,
                silent: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                trigger: {
                    player: ['yuansufashuyueguangAfter'],
                },
                content() {
                    'step 0';
                    if (player.countMark('yuansui') == 0) {
                        player.addMark('yuansui', 2, true);
                    } else {
                        if (player.countMark('yuansui') == 1) {
                            player.addMark('yuansui', 2, true);
                        } else {
                            if (player.countMark('yuansui') == 2) {
                                player.addMark('yuansui', 2, true);
                            } else {
                                if (player.countMark('yuansui') == 3) {
                                    player.addMark('yuansui', 2, true);
                                } else {
                                    if (player.countMark('yuansui') == 4) {
                                        player.addMark('yuansui', 2, true);
                                    } else {
                                        if (player.countMark('yuansui') == 5) {
                                            player.addMark('yuansui', 1, true);
                                        } else event.finish();
                                    }
                                }
                            }
                        }
                    }
                },
                popup: false,
                group: 'jieyuansuxishou_1',
                subSkill: {
                    1: {
                        nobracket: true,
                        silent: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        trigger: {
                            source: 'damageAfter',
                        },
                        filter(event, player) {
                            return event.nature && event.num >= 0;
                        },
                        content() {
                            'step 0';
                            if (player.countMark('yuansui') == 0) {
                                player.addMark('yuansui', 2, true);
                            } else {
                                if (player.countMark('yuansui') == 1) {
                                    player.addMark('yuansui', 2, true);
                                } else {
                                    if (player.countMark('yuansui') == 2) {
                                        player.addMark('yuansui', 2, true);
                                    } else {
                                        if (player.countMark('yuansui') == 3) {
                                            player.addMark('yuansui', 2, true);
                                        } else {
                                            if (player.countMark('yuansui') == 4) {
                                                player.addMark('yuansui', 2, true);
                                            } else {
                                                if (player.countMark('yuansui') == 5) {
                                                    player.addMark('yuansui', 1, true);
                                                } else event.finish();
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    },
                },
            },
            siji_xingshiyuansu: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('baoshi', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('baoshi', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('baoshi', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            xinghongzhishou: {
                trigger: {
                    global: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore'],
                },
                group: ['xinghongzhishou_1', 'xinghongzhishou_2'],
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.source != player && event.player != player;
                },
                content() {
                    trigger.untrigger();
                    trigger.finish();
                    player.damage(5);
                },
                subSkill: {
                    1: {
                        trigger: {
                            player: ['damageCancelled', 'damageZero', 'damageAfter'],
                        },
                        nobracket: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player, name) {
                            if (event.getParent(2).skill == 'xinghongzhishou') {
                                if (name == 'damageCancelled') return true;
                                for (var i of event.change_history) {
                                    if (i < 0) return true;
                                }
                            }
                            return false;
                        },
                        content() {
                            'step 0';
                            if (event.triggername == 'damageCancelled') {
                                event.goto(1);
                            }
                            if (event.triggername == 'damageZero') {
                                event.goto(1);
                            }
                            if (event.triggername == 'damageAfter') {
                                event.goto(3);
                            }
                            ('step 1');
                            player.chooseTarget('选择一名目标队友', '令其获得5护甲', function (card, player, target) {
                                return target != player && target.isFriendsOf(player);
                            });
                            ('step 2');
                            if (result.bool) {
                                result.targets[0].changeHujia(5);
                                event.finish();
                            } else event.finish();
                            ('step 3');
                            player.chooseTarget('选择一名目标队友', '令其获得等量护甲', function (card, player, target) {
                                return target != player && target.isFriendsOf(player);
                            });
                            ('step 4');
                            if (result.bool) {
                                result.targets[0].changeHujia(5 - trigger.num);
                                event.finish();
                            } else event.finish();
                        },
                    },
                    2: {
                        trigger: {
                            player: ['damageAfter'],
                        },
                        forced: true,
                        nobracket: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player, name) {
                            if (event.getParent(2).skill == 'xinghongzhishou') {
                                for (var i of event.change_history) {
                                    if (i < 0) return false;
                                }
                            }
                            return true;
                        },
                        content() {
                            if (trigger.num >= 5) {
                                player.storage.xuehongzhiyue += 5;
                                player.markSkill('xuehongzhiyue');
                                player.update();
                            }
                        },
                    },
                },
            },
            xuehongzhiyue: {
                init(player) {
                    player.storage.xuehongzhiyue = 0;
                },
                group: 'xueyue_wugai',
                trigger: {
                    player: ['damageBegin4', 'useCard', 'discardBefore'],
                },
                marktext: '血',
                intro: {
                    name: '血约',
                    markcount(storage) {
                        return storage;
                    },
                    content(storage) {
                        return '共有' + storage + '个<血约>,可抵挡' + storage + '点来源为自己伤害.';
                    },
                },
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player, name) {
                    if (name == 'damageBegin4') {
                        return player.storage.xuehongzhiyue > 0 && event.source == player;
                    }
                    if (name == 'useCard') {
                        return event.card && get.type(event.card) == 'basic';
                    }
                    if (name == 'discardBefore') {
                        return event.cards && event.cards.length;
                    }
                },
                content() {
                    'step 0';
                    if (event.triggername == 'damageBegin4') {
                        event.goto(1);
                    }
                    if (event.triggername == 'useCard') {
                        event.goto(5);
                    }
                    if (event.triggername == 'respond') {
                        event.goto(5);
                    }
                    if (event.triggername == 'discardBefore') {
                        event.goto(7);
                    }
                    ('step 1');
                    var map = {};
                    var list = [];
                    for (var i = 1; i <= Math.min(player.storage.xuehongzhiyue, trigger.num); i++) {
                        var cn = get.cnNumber(i, true);
                        map[cn] = i;
                        list.push(cn);
                    }
                    event.map = map;
                    player
                        .chooseControl(list, function () {
                            return get.cnNumber(_status.event.goon, true);
                        })
                        .set('prompt', '移除任意数量<血约>并抵挡等量的伤害')
                        .set('goon', num);
                    ('step 2');
                    var num = event.map[result.control] || 1;
                    player.storage.xuehongzhiyue -= num;
                    player.markSkill('xuehongzhiyue');
                    player.update();
                    ('step 3');
                    var num = event.map[result.control] || 1;
                    trigger.num -= num;
                    player.draw(num);
                    ('step 4');
                    event.finish();
                    ('step 5');
                    player.storage.xuehongzhiyue += 1;
                    player.markSkill('xuehongzhiyue');
                    player.update();
                    ('step 6');
                    event.goto(4);
                    ('step 7');
                    player.storage.xuehongzhiyue += trigger.cards.length;
                    player.markSkill('xuehongzhiyue');
                    player.update();
                    ('step 8');
                    event.goto(4);
                },
                group: 'xuehongzhiyue_1',
                subSkill: {
                    1: {
                        trigger: {
                            player: ['respond'],
                        },
                        nobracket: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.card && get.type(event.card) == 'basic';
                        },
                        content() {
                            player.storage.xuehongzhiyue += 1;
                            player.markSkill('xuehongzhiyue');
                            player.update();
                        },
                    },//QQQ
                },
            },
            shaluzhiyan: {
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                trigger: {
                    source: 'damageBegin3',
                },
                filter(event, player) {
                    return !player.hasSkill('jinyong2') && event.player != player && event.card && event.card.name == 'sha' && _status.currentPhase == player;
                },
                content() {
                    'step 0';
                    player.damage(3);
                    ('step 1');
                    trigger.num += 2;
                    ('step 2');
                    player.addTempSkill('jinyong2');
                },
            },
            xinghongxinyang: {
                init(player) {
                    player.storage.xhxy = false;
                },
                trigger: {
                    player: 'dyingAfter',
                },
                nobracket: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hp > 0 && !player.storage.xhxy;
                },
                content() {
                    'step 0';
                    player.addMark('xinghongxinyangex', 1);
                    player.storage.xhxy = true;
                    ('step 1');
                    lib.skill.xinghongxinyangex.checkMarkSkill();
                },
                derivation: ['xinghongxinyangex'],
                nobracket: true,
            },
            xinghongxinyangex: {
                marktext: '热血沸腾',
                intro: {
                    name: '热血沸腾',
                    content: '防止受到伤害,失去体力,减少体力上限,改为摸等量的牌.',
                },
                nobracket: true,
                trigger: {
                    player: 'phaseEnd',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                group: 'xinghongxinyangex_1',
                checkMarkSkill() {
                    game.countPlayer(function (current) {
                        if (!current.hasMark('xinghongxinyangex')) {
                            current.removeAdditionalSkill('xinghongxinyang');
                        } else if (!current.hasSkill('xinghongxinyangex')) {
                            current.addAdditionalSkill('xinghongxinyang', 'xinghongxinyangex');
                        }
                    });
                },
                filter(event, player) {
                    return player.hasMark('xinghongxinyangex') && player.storage.xhxy;
                },
                content() {
                    'step 0';
                    player.removeMark('xinghongxinyangex', 1);
                    ('step 1');
                    lib.skill.xinghongxinyangex.checkMarkSkill();
                    ('step 2');
                    player.storage.xhxy = false;
                },
                subSkill: {
                    1: {
                        trigger: {
                            player: ['damageBefore', 'loseHpBegin', 'loseMaxHpBefore'],
                        },
                        nobracket: true,
                        firstDo: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return player.storage.xhxy;
                        },
                        content() {
                            'step 0';
                            trigger.cancel();
                            player.draw(trigger.num);
                            ('step 1');
                            var numcv = player.countCards('h') - 6;
                            if (numcv > 0) {
                                player.chooseToDiscard('h', true, numcv);
                            }
                            ('step 2');
                            if (player.storage.xuehongzhiyue >= 1) {
                                player.storage.xuehongzhiyue -= 1;
                                player.markSkill('xuehongzhiyue');
                                player.update();
                            }
                        },
                    },
                },
            },
            xinghongshizi: {
                enable: 'phaseUse',
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.countCards('he') - player.countCards('he', { type: 'basic' }) >= 2 && !player.hasSkill('jinyong2');
                },
                content() {
                    'step 0';
                    player.chooseToDiscard(2, 'he', '弃置2张非基本牌', function (card) {
                        return get.type(card) !== 'basic';
                    });
                    ('step 1');
                    if (result.bool) {
                        player.addTempSkill('jinyong2');
                        player.damage(4);
                        player
                            .chooseTarget('选择一名其他角色', '对该角色造成3点伤害', true, function (card, player, target) {
                                return target != player;
                            })
                            .set('ai', function (target) {
                                return get.attitude(player, target);
                            });
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    result.targets[0].damage(3);
                    event.finish();
                },
            },
            jiejiaojiezao: {
                nobracket: true,
                trigger: {
                    player: ['shaluzhiyanAfter', 'xinghongshiziAfter'],
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.storage.xhxy && player.hasSkill('jinyong2');
                },
                content() {
                    'step 0';
                    player.removeSkill('jinyong2');
                    player.removeMark('xinghongxinyangex', 1);
                    ('step 1');
                    lib.skill.xinghongxinyangex.checkMarkSkill();
                    ('step 2');
                    player.storage.xhxy = false;
                    player.storage.xuehongzhiyue += 2;
                    player.markSkill('xuehongzhiyue');
                    player.update();
                },
            },
            nisheng: {
                trigger: {
                    player: 'dying',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    if (player.hp == 0) return Math.random() <= 0.1 + Math.min(8, game.roundNumber) / 10;
                    if (player.hp == -1) return Math.random() <= 0.3 + Math.min(6, game.roundNumber) / 10;
                    if (player.hp == -2) return Math.random() <= 0.5 + Math.min(4, game.roundNumber) / 10;
                    if (player.hp == -3) return Math.random() <= 0.7 + Math.min(2, game.roundNumber) / 10;
                    if (player.hp <= -4) return Math.random() <= 0.9;
                },
                content() {
                    var num = 1 - player.hp;
                    player.recover(num);
                },
            },
            jinji: {
                enable: 'phaseUse',
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hp > 0;
                },
                contentBefore() {
                    player.addMark('jinjimark', player.hp);
                    player.addMark('jinjimark', player.countCards('he'));
                    if (player.hujia > 0) {
                        player.addMark('jinjimark', player.hujia);
                    }
                },
                content() {
                    player.discard(player.getCards('he'));
                    player.loseHp(player.hp);
                    player.changeHujia(-player.hujia);
                },
                contentAfter() {
                    if (player.hp > 0) player.hp = player.maxHp;
                    player.draw(2 * player.countMark('jinjimark'));
                    player.addTempSkill('jinji2');
                    player.addTempSkill('jinji3', 'phaseAfter');
                    game.countPlayer(function (current) {
                        if (current != player) current.addTempSkill('siji_wuxiao');
                    });
                },
            },
            jinjimark: {
                marktext: '尽',
                intro: {
                    name: '尽汲',
                    content: '若你发动了技能<尽汲>且存活,则本回合你的攻击范围,使用杀次数,造成伤害增加此标记数的2倍',
                },
            },
            jinji2: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + 2 * player.countMark('jinjimark');
                    },
                    attackRange(player, num) {
                        return num + 2 * player.countMark('jinjimark');
                    },
                },
                trigger: {
                    source: 'damageBegin4',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    var naa = player.countMark('jinjimark');
                    trigger.num += 2 * naa;
                    player.changeHujia(Math.floor(naa / 2), true);
                },
            },
            jinji3: {
                trigger: {
                    player: 'phaseDiscardBegin',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hasMark('jinjimark');
                },
                content() {
                    player.removeMark('jinjimark', player.countMark('jinjimark'));
                },
            },
            sigong: {
                trigger: {
                    player: ['dyingBefore', 'dyingAfter'],
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                filter(event, player) {
                    return event.source && event.source.isIn() && event.source.hp > 0 && event.source != player;
                },
                logTarget: 'source',
                content() {
                    'step 0';
                    player
                        .chooseControl('视为使用一张无距离限制的杀', '视为使用一张决斗')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 1;
                        });
                    ('step 1');
                    if (result.index == 0) {
                        player.useCard({ name: 'sha' }, trigger.source)._triggered = null;
                    } else player.useCard({ name: 'juedou' }, trigger.source)._triggered = null;
                },
            },
            chaofeng49: {
                trigger: {
                    global: 'phaseBegin',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.player != player;
                },
                content() {
                    'step 0';
                    if (trigger.player.countCards('h') <= 2) {
                        trigger.player
                            .chooseControl('跳过此回合摸牌阶段并对嘲讽你的角色造成x点伤害')
                            .set('prompt', '做出你的选择')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        trigger.player
                            .chooseControl('跳过此回合摸牌阶段并对嘲讽你的角色造成x点伤害', '弃置3张手牌')
                            .set('prompt', '做出你的选择')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        trigger.player.skip('phaseDraw');
                        player.addMark('chaofeng36', player.hp);
                        player.damage(player.hp + player.hujia, trigger.player);
                        trigger.player.addTempSkill('chaofeng999');
                    } else {
                        if (trigger.player.countCards('h') >= 3) {
                            trigger.player.chooseToDiscard('h', 3, true);
                            player.addTempSkill('chaofeng99');
                            trigger.player.addTempSkill('chaofeng999');
                            player.changeHujia();
                            game.countPlayer(function (current) {
                                if (current != player && player.getFriends().includes(current)) current.changeHujia();
                            });
                        } else {
                            player.say('呵呵,你没有别的选择');
                            game.log(trigger.player, '无法执行选项2,强制执行选项1');
                            trigger.player.skip('phaseDraw');
                            player.addMark('chaofeng36', player.hp);
                            player.damage(player.hp + player.hujia, trigger.player);
                            trigger.player.addTempSkill('chaofeng999');
                        }
                    }
                },
                group: ['chaofeng49_1', 'chaofeng49_2'],
                subSkill: {
                    1: {
                        trigger: {
                            player: ['dying', 'damageEnd'],
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        forced: true,
                        filter(event, player) {
                            return player.countMark('chaofeng36') > 0;
                        },
                        content() {
                            'step 1';
                            var nua = player.countMark('chaofeng36') - 1;
                            if (nua + 1 > 1) {
                                player.recover(nua - player.hp);
                            } else {
                                player.recover(nua + 1 - player.hp);
                            }
                            ('step 2');
                            player.removeMark('chaofeng36', nua + 1);
                        },
                    },
                    2: {
                        trigger: {
                            player: ['dyingAfter', 'damageAfter'],
                        },
                        forced: true,
                        lastDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        forced: true,
                        filter(event, player) {
                            return player.countMark('chaofeng36') > 0;
                        },
                        content() {
                            player.removeMark('chaofeng36', player.countMark('chaofeng36'));
                        },
                    },
                },
            },
            chaofeng99: {
                global: 'chaofeng99_disable',
                trigger: {
                    global: 'useCard1',
                },
                forced: true,
                charlotte: true,
                silent: true,
                filter(event, player) {
                    return event.targets.includes(player) && player != event.player;
                },
                content() { },
                gainable: true,
                subSkill: {
                    disable: {
                        mod: {
                            targetEnabled(card, player, target) {
                                if (player.hasSkill('chaofeng99')) return;
                                if (target.hasSkill('chaofeng99')) return;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.hasSkill('chaofeng99');
                                    })
                                ) {
                                    return false;
                                }
                            },
                        },
                    },
                },
                popup: false,
            },
            chaofeng999: {
                trigger: {
                    player: 'drawBefore',
                },
                forced: true,
                charlotte: true,
                silent: true,
                content() {
                    trigger.num = 1;
                },
                popup: false,
            },
            chaofeng36: {
                marktext: '嘲',
                intro: {
                    name: '嘲讽',
                    content: '挨打了呢',
                },
            },
            xingshichaofeng: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('baoshi', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('baoshi', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('baoshi', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            juechao: {
                trigger: {
                    player: 'dying',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                firstDo: true,
                filter(event, player) {
                    return player.countMark('chaofeng36') > 0 && player.countMark('chaofeng36') < 3 && player.countMark('chaofeng36') && player.countMark('baoshi') > 0;
                },
                content() {
                    player.removeMark('baoshi');
                    player.addMark('chaofeng36', 5);
                },
            },
            juechao100: {
                charlotte: true,
            },
            jiechaofeng: {
                trigger: {
                    global: 'phaseBegin',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.player != player;
                },
                content() {
                    'step 0';
                    if (trigger.player.countCards('h') <= 3) {
                        trigger.player
                            .chooseControl('对嘲讽你的角色造成x点伤害')
                            .set('prompt', '做出你的选择')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        trigger.player
                            .chooseControl('对嘲讽你的角色造成x点伤害', '弃置4张手牌并摸1张牌')
                            .set('prompt', '做出你的选择')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        trigger.player.skip('phaseDraw');
                        player.addMark('chaofeng36', player.hp);
                        player.damage(player.hp + player.hujia, trigger.player);
                        trigger.player.addTempSkill('chaofeng999');
                    } else {
                        if (trigger.player.countCards('h') >= 4) {
                            trigger.player.skip('phaseDraw');
                            trigger.player.chooseToDiscard('h', 4, true);
                            trigger.player.draw();
                            player.addTempSkill('chaofeng99');
                            trigger.player.addTempSkill('chaofeng999');
                            player.changeHujia();
                            game.countPlayer(function (current) {
                                if (current != player && player.getFriends().includes(current)) current.changeHujia();
                            });
                        } else {
                            player.say('呵呵,你没有别的选择');
                            game.log(trigger.player, '无法执行选项2,强制执行选项1');
                            trigger.player.skip('phaseDraw');
                            player.addMark('chaofeng36', player.hp);
                            player.damage(player.hp + player.hujia, trigger.player);
                            trigger.player.addTempSkill('chaofeng999');
                        }
                    }
                },
                group: ['chaofeng49_1', 'chaofeng49_2'],
                subSkill: {
                    1: {
                        trigger: {
                            player: ['dying', 'damageEnd'],
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        forced: true,
                        filter(event, player) {
                            return player.countMark('chaofeng36') > 0;
                        },
                        content() {
                            'step 1';
                            var nua = player.countMark('chaofeng36') - 1;
                            if (nua + 1 > 1) {
                                player.recover(nua - player.hp);
                            } else {
                                player.recover(nua + 1 - player.hp);
                            }
                            ('step 2');
                            player.removeMark('chaofeng36', nua + 1);
                        },
                    },
                    2: {
                        trigger: {
                            player: ['dyingAfter', 'damageAfter'],
                        },
                        forced: true,
                        lastDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        forced: true,
                        filter(event, player) {
                            return player.countMark('chaofeng36') > 0;
                        },
                        content() {
                            player.removeMark('chaofeng36', player.countMark('chaofeng36'));
                        },
                    },
                },
            },
            jiesigong: {
                trigger: {
                    player: ['dyingBefore', 'dyingAfter'],
                },
                group: ['jiesigongx'],
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                filter(event, player) {
                    return event.source && event.source.isIn() && event.source.hp > 0 && event.source != player;
                },
                logTarget: 'source',
                content() {
                    'step 0';
                    player
                        .chooseControl('视为使用一张无距离限制的杀', '视为使用一张决斗')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 1;
                        });
                    ('step 1');
                    if (result.index == 0) {
                        player.useCard({ name: 'sha' }, trigger.source)._triggered = null;
                        trigger.source.addSkill('jiashangsigong')._triggered = null;
                    } else player.useCard({ name: 'juedou' }, trigger.source, 'nowuxie');
                },
            },
            jiesigongx: {
                trigger: {
                    player: ['dyingBefore', 'dyingAfter'],
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                filter(event, player) {
                    return !event.source && event.source != player;
                },
                content() {
                    'step 0';
                    player.chooseTarget(true, get.prompt('jiesigong'), function (card, player, target) {
                        return target != player && player.getEnemies().includes(target);
                    }).ai = function (target) {
                        var att = get.attitude(player, target);
                        if (target.hp > 2) {
                            if (att > 0) {
                                return att + 5;
                            }
                            return -1;
                        }
                    };
                    ('step 1');
                    if (result.bool) {
                        event.target = result.targets[0];
                        player
                            .chooseControl('视为使用一张无距离限制的杀', '视为使用一张决斗')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 2;
                            });
                    }
                    ('step 2');
                    if (result.index == 0) {
                        player.useCard({ name: 'sha' }, event.target);
                        event.target.addSkill('jiashangsigong');
                    } else player.useCard({ name: 'juedou' }, event.target, 'nowuxie');
                },
            },
            jiashangsigong: {
                trigger: {
                    player: 'damageBegin4',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && event.player.hasSkill('jiashangsigong');
                },
                content() {
                    trigger.num++;
                    player.removeSkill('jiashangsigong');
                },
            },
            huiyao: {
                enable: 'phaseUse',
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.countCards('he') > player.countCards('he', { type: 'basic' }) && !player.hasSkill('jinyong2');
                },
                content() {
                    'step 0';
                    player.chooseToDiscard('he', '弃置1张非基本牌', function (card) {
                        return get.type(card) !== 'basic';
                    });
                    ('step 1');
                    game.countPlayer(function (current) {
                        current.changeHujia();
                    });
                    ('step 3');
                    player.addTempSkill('cishu');
                    player.addTempSkill('jinyong2');
                },
            },
            chengjie: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return !player.hasSkill('jinyong2');
                },
                filterTarget(card, target, player) {
                    return target != player;
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.chooseToDiscard('he', '弃置1张非基本牌', function (card) {
                        return get.type(card) !== 'basic';
                    });
                    if (target.hujia > 0) {
                        target.changeHujia(-1);
                    } else player.gainPlayerCard('he', target, true);
                    ('step 1');
                    player.changeHujia();
                    ('step 2');
                    player.addTempSkill('cishu');
                    player.addTempSkill('jinyong2');
                },
            },
            shengji: {
                trigger: {
                    source: ['damageEnd', 'damageZero'],
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && !player.hasSkill('jinyong3');
                },
                content() {
                    player.changeHujia();
                },
            },
            tianqiang: {
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && player.hujia >= 2 && !player.hasSkill('jinyong');
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    trigger.directHit.addArray(game.players);
                    ('step 1');
                    player.changeHujia(-2);
                    player.addTempSkill('jinyong3', { player: 'useCardAfter' });
                },
            },
            diqiang: {
                trigger: {
                    source: 'damageBegin4',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && player.hujia > 0;
                },
                content() {
                    'step 0';
                    if (player.hujia == 1) {
                        player
                            .chooseControl('移除1护甲')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (player.hujia == 2) {
                            player
                                .chooseControl('移除1护甲', '移除2护甲')
                                .set('prompt', '请选择一项')
                                .set('ai', function () {
                                    return 1;
                                });
                        } else {
                            if (player.hujia == 3) {
                                player
                                    .chooseControl('移除1护甲', '移除2护甲', '移除3护甲')
                                    .set('prompt', '请选择一项')
                                    .set('ai', function () {
                                        return 1;
                                    });
                            } else {
                                if (player.hujia >= 4) {
                                    player
                                        .chooseControl('移除1护甲', '移除2护甲', '移除3护甲', '移除4护甲')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            return 1;
                                        });
                                }
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.changeHujia(-1);
                        trigger.num++;
                    }
                    if (result.index == 1) {
                        player.changeHujia(-2);
                        trigger.num += 2;
                    }
                    if (result.index == 2) {
                        player.changeHujia(-3);
                        trigger.num += 3;
                    }
                    if (result.index == 3) {
                        player.changeHujia(-4);
                        trigger.num += 4;
                    }
                    ('step 2');
                    player.addTempSkill('jinyong3', { player: 'damageAfter' });
                },
            },
            shengguangqiyu: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.countMark('baoshi') > 0 && !player.hasSkill('jinyong2');
                },
                content() {
                    'step 0';
                    player.removeMark('baoshi');
                    ('step 1');
                    player.changeHujia(2);
                    ('step 2');
                    player.addTempSkill('cishu');
                    player.addTempSkill('jinyong2');
                    player.addTempSkill('jinyong');
                },
            },
            xingshishengqiang: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('baoshi', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('baoshi', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('baoshi', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            jiehuiyao: {
                enable: 'phaseUse',
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.countCards('he') > player.countCards('he', { type: 'basic' }) && !player.hasSkill('jinyong2');
                },
                content() {
                    'step 0';
                    player.chooseToDiscard('he', '弃置1张非基本牌', function (card) {
                        return get.type(card) !== 'basic';
                    });
                    ('step 1');
                    game.countPlayer(function (current) {
                        if (current != player) {
                            current.changeHujia();
                        } else current.changeHujia(2);
                    });
                    ('step 3');
                    player.addTempSkill('cishu');
                    player.addTempSkill('jinyong2');
                },
            },
            jiechengjie: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return !player.hasSkill('jinyong2');
                },
                filterTarget(card, target, player) {
                    return target != player;
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.chooseToDiscard('he', '弃置1张非基本牌', function (card) {
                        return get.type(card) !== 'basic';
                    });
                    if (target.hujia > 0) {
                        player.changeHujia(target.hujia);
                    } else {
                        player.gainPlayerCard('he', target, true);
                        player.changeHujia();
                    }
                    ('step 1');
                    target.changeHujia(-target.hujia);
                    ('step 2');
                    player.addTempSkill('cishu');
                    player.addTempSkill('jinyong2');
                },
            },
            jieshengji: {
                trigger: {
                    source: ['damageEnd', 'damageZero'],
                    player: 'shaHit',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && !player.hasSkill('jinyong3');
                },
                content() {
                    player.changeHujia();
                },
            },
            jiediqiang: {
                trigger: {
                    source: 'damageBegin4',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && player.hujia > 0;
                },
                content() {
                    'step 0';
                    var num = player.hujia;
                    var map = {};
                    var list = [];
                    for (var i = 1; i <= num; i++) {
                        var cn = get.cnNumber(i, true);
                        map[cn] = i;
                        list.push(cn);
                    }
                    event.map = map;
                    player
                        .chooseControl(list, function () {
                            return get.cnNumber(_status.event.goon, true);
                        })
                        .set('prompt', '移除x点护甲')
                        .set('goon', num);
                    ('step 1');
                    var num = event.map[result.control] || 2;
                    event.i = num;
                    player.changeHujia(-num);
                    ('step 2');
                    trigger.num += event.i;
                },
            },
            jieshengguangqiyu: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.countMark('baoshi') > 0 && !player.hasSkill('jinyong2');
                },
                content() {
                    'step 0';
                    player.removeMark('baoshi');
                    ('step 1');
                    player.changeHujia(2);
                    ('step 2');
                    player.addTempSkill('cishu');
                    player.addTempSkill('jinyong2');
                },
            },
            jietianqiang: {
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && player.hujia >= 2;
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    trigger.directHit.addArray(game.players);
                    ('step 1');
                    player.changeHujia(-2);
                    player.addTempSkill('jinyong3', { player: 'useCardAfter' });
                },
            },
            xishengxx: {
                trigger: {
                    player: 'phaseBegin',
                },
                forced: true,
                superCharlotte: true,
                lastDo: true,
                charlotte: true,
                silent: true,
                fixed: true,
                filter(event, player) {
                    return player.hp > 1;
                },
                content() {
                    game.broadcastAll(function (num) {
                        if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                    }, num);
                    game.log(player, '受到了一点伤害');
                    player.hp -= 1;
                    player.$damagepop(-1);
                    player.update();
                    if (player.hp <= 0 && !event.nodying) {
                        event._dyinged = true;
                        player.dying(event);
                    }
                },
                popup: false,
            },
            juedifanji: {
                trigger: {
                    source: 'damageBegin4',
                },
                nobracket: true,
                superCharlotte: true,
                lastDo: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.player.isEnemiesOf(player) && event.card && event.card.name == 'sha' && player.hasMark('baoshi');
                },
                content() {
                    'step 0';
                    player.removeMark('baoshi');
                    ('step 1');
                    var targets = player.getFriends();
                    var num = 0;
                    var numa = player.hujia;
                    for (var target of targets) {
                        num += target.hujia;
                    }
                    game.countPlayer(function (current) {
                        if (current == player || player.getFriends().includes(current)) {
                            current.changeHujia(-current.hujia);
                        }
                    });
                    trigger.num += 1 + num + numa;
                },
            },
            shenshenghuwei: {
                init(player) {
                    player.storage.sshw = 0;
                },
                trigger: {
                    global: ['damageBefore', 'damageEnd'],
                },
                nobracket: true,
                forced: true,
                superCharlotte: true,
                lastDo: true,
                charlotte: true,
                silent: true,
                fixed: true,
                filter(event, player) {
                    return event.player.isFriendsOf(player);
                },
                content() {
                    'step 0';
                    if (event.triggername == 'damageBefore') {
                        event.goto(1);
                    } else event.goto(3);
                    ('step 1');
                    player.storage.sshw += trigger.num;
                    ('step 2');
                    event.finish();
                    ('step 3');
                    if (player.storage.sshw > 1) {
                        trigger.player.changeHujia();
                        player.storage.sshw = 0;
                        event.goto(2);
                    }
                },
            },
            shenshengbihu: {
                trigger: {
                    player: ['damageEnd'],
                },
                nobracket: true,
                forced: true,
                superCharlotte: true,
                lastDo: true,
                charlotte: true,
                silent: true,
                fixed: true,
                content() {
                    player.changeHujia();
                },
            },
            xingshihuangjia: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('baoshi', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('baoshi', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('baoshi', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            jiexishengxx: {
                trigger: {
                    player: 'phaseBegin',
                },
                forced: true,
                superCharlotte: true,
                lastDo: true,
                charlotte: true,
                silent: true,
                fixed: true,
                filter(event, player) {
                    return player.hp > 1;
                },
                content() {
                    player.draw();
                    if (player.hp > 1) {
                        game.broadcastAll(function (num) {
                            if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                        }, num);
                        game.log(player, '受到了一点伤害');
                        player.hp -= 1;
                        player.$damagepop(-1);
                        player.update();
                        if (player.hp <= 0 && !event.nodying) {
                            event._dyinged = true;
                            player.dying(event);
                        }
                    }
                },
                popup: false,
            },
            jiejuedifanji: {
                init(player) {
                    player.storage.juedifanjixb = player.maxHp;
                    player.storage.juedifanjixbb = 0;
                },
                trigger: {
                    source: 'damageBegin4',
                },
                group: 'jiejuedifanji_1',
                nobracket: true,
                superCharlotte: true,
                lastDo: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.player.isEnemiesOf(player) && event.card && event.card.name == 'sha' && player.hasMark('baoshi');
                },
                content() {
                    'step 0';
                    player.removeMark('baoshi');
                    ('step 1');
                    var targets = player.getFriends();
                    var num = 0;
                    var numa = player.hujia;
                    var numb = Math.max(1, player.hp - 1);
                    var numc = player.maxHp - 1;
                    for (var target of targets) {
                        num += target.hujia;
                    }
                    player.hp = 1;
                    player.maxHp = 1;
                    game.countPlayer(function (current) {
                        if (current == player || player.getFriends().includes(current)) {
                            current.changeHujia(-current.hujia);
                        }
                    });
                    trigger.num += 1 + num + numa + numb + numc;
                    player.storage.juedifanjixbb = 1;
                },
                subSkill: {
                    1: {
                        trigger: {
                            source: 'damageEnd',
                        },
                        nobracket: true,
                        superCharlotte: true,
                        lastDo: true,
                        charlotte: true,
                        fixed: true,
                        forced: true,
                        filter(event, player) {
                            return player.storage.juedifanjixbb == 1;
                        },
                        content() {
                            player.storage.juedifanjixbb = 0;
                            player.maxHp = player.storage.juedifanjixb;
                            player.update();
                        },
                    },
                },
            },
            jieshenshenghuwei: {
                init(player) {
                    player.storage.sshw = 0;
                },
                trigger: {
                    global: ['damageBefore', 'damageEnd'],
                },
                nobracket: true,
                forced: true,
                superCharlotte: true,
                lastDo: true,
                charlotte: true,
                silent: true,
                fixed: true,
                filter(event, player) {
                    return event.player.isFriendsOf(player);
                },
                content() {
                    'step 0';
                    if (event.triggername == 'damageBefore') {
                        event.goto(1);
                    } else event.goto(3);
                    ('step 1');
                    player.storage.sshw += trigger.num;
                    ('step 2');
                    event.finish();
                    ('step 3');
                    if (player.storage.sshw > 1) {
                        trigger.player.changeHujia(2);
                        player.changeHujia();
                        player.storage.sshw = 0;
                        event.goto(2);
                    }
                },
            },
            jieshenshengbihu: {
                trigger: {
                    player: ['damageEnd'],
                },
                nobracket: true,
                forced: true,
                superCharlotte: true,
                lastDo: true,
                charlotte: true,
                silent: true,
                fixed: true,
                content() {
                    player.changeHujia();
                    var cards = get.cardPile(function (card) {
                        var naas = [0, 1, 2, 3].randomGet();
                        if (naas == 1) {
                            return card.name == 'sha' && card.nature == 'xb_anmie';
                        } else {
                            return card.name == 'sha';
                        }
                    });
                    var cards2 = get.cardPile(function (card) {
                        return card.name == 'shan';
                    });
                    if (cards) player.gain(cards, player, 'gain2');
                    if (cards2) player.gain(cards2, player, 'gain2');
                },
            },
            baofenglingyuxb: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return (num = num + player.storage.baofengzhizhengsha);
                    },
                },
                forced: true,
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forceDie: true,
                trigger: {
                    source: 'damageBegin1',
                    player: 'phaseEnd',
                },
                filter(event, player) {
                    if (name == 'damageBegin1') {
                        return (event.nature == 'thunder' || event.nature == 'xb_wind') && event.card.name == 'sha' && event.card;
                        return false;
                    } else return true;
                },
                content() {
                    if (event.triggername == 'damageBegin1') {
                        if (trigger.nature == 'xb_wind' || trigger.nature == 'thunder') {
                            trigger.num++;
                        }
                    } else {
                        player.storage.baofengzhizhengsha = 0;
                    }
                },
            },
            yizhengxb: {
                init(player) {
                    player.storage.baofengzhizhengsha = 0;
                },
                enable: 'phaseUse',
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forceDie: true,
                filterTarget(event, player, target) {
                    return target != player && player.getFriends().includes(target) && target.countCards('h') + player.countCards('h') > 0;
                },
                content() {
                    'step 0';
                    player
                        .chooseControl('交给该角色一张手牌', '令该角色将一张手牌交给你')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 1;
                        });
                    ('step 1');
                    if (result.index == 0) {
                        event.goto(3);
                    } else {
                        event.goto(5);
                    }
                    ('step 2');
                    player.storage.baofengzhizhengsha += 1;
                    event.finish();
                    ('step 3');
                    var target = targets[0];
                    event.target = target;
                    player.chooseCard('h', '将1张牌交给' + get.translation(target) + '', 1, true).set('ai', function (card) {
                        var att = get.attitude(target, player);
                        if (att > 0 && att < 10) {
                            att = 10;
                        }
                        return att - get.value(card);
                    });
                    ('step 4');
                    var cards = result.cards;
                    if (cards) {
                        var target = event.target;
                        player.give(cards, event.target, 'giveAuto');
                    }
                    event.goto(2);
                    ('step 5');
                    var target = targets[0];
                    event.target = target;
                    target.chooseCard('h', '将1张牌交给' + get.translation(player) + '', 1, true).set('ai', function (card) {
                        var att = get.attitude(target, player);
                        if (att > 0 && att < 10) {
                            att = 10;
                        }
                        return att - get.value(card);
                    });
                    ('step 6');
                    var cards = result.cards;
                    if (cards) {
                        var target = event.target;
                        event.target.give(cards, player, 'giveAuto');
                    }
                    event.goto(2);
                },
            },
            xingshizhizheng: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('shuijing', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('shuijing', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('shuijing', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            jifengzhouyuxb: {
                enable: 'phaseUse',
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hasMark('shuijing') || player.hasMark('baoshi');
                },
                content() {
                    'step 0';
                    if (player.hasMark('shuijing') && player.hasMark('baoshi')) {
                        player
                            .chooseControl('移去1个<水晶>', '移去1个<宝石>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (!player.hasMark('shuijing') && player.hasMark('baoshi')) {
                            player.removeMark('baoshi', 1);
                            event.goto(2);
                        } else {
                            if (!player.hasMark('baoshi') && player.hasMark('shuijing')) {
                                player.removeMark('shuijing', 1);
                                event.goto(2);
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('shuijing');
                    } else {
                        player.removeMark('baoshi');
                    }
                    ('step 2');
                    player.storage.baofengzhizhengsha += 1;
                    player.update();
                },
            },
            dimaizhilixb: {
                init(player) {
                    player.storage.dadiwushisha = 0;
                    player.storage.gaiyajiashang = false;
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return (num = num + player.storage.dadiwushisha);
                    },
                },
                forced: true,
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                popup: false,
                forceDie: true,
                trigger: {
                    source: 'damageBegin1',
                    global: 'phaseEnd',
                },
                content() {
                    'step 0';
                    if (event.triggername == 'damageBegin1') {
                        event.goto(1);
                    } else event.goto(3);
                    ('step 1');
                    if (!player.storage.gaiyajiashang) {
                        if (trigger.nature == 'xb_dadi' || trigger.nature == 'xb_anmie') {
                            trigger.num++;
                            event.goto(2);
                        }
                    }
                    if (player.storage.gaiyajiashang) {
                        if ((trigger.card && trigger.card.name == 'sha' && trigger.nature == 'xb_dadi') || (trigger.card && trigger.card.name == 'sha' && trigger.nature == 'xb_anmie')) {
                            trigger.num += 2;
                            event.goto(2);
                        } else {
                            trigger.num++;
                            event.goto(2);
                        }
                    }
                    ('step 2');
                    event.finish();
                    ('step 3');
                    if (player.hasSkill('gaiyadadixb') && player.storage.gaiyashang) {
                        player.storage.dadiwushisha = 0;
                        event.goto(2);
                    } else {
                        player.storage.dadiwushisha = 0;
                        event.goto(2);
                    }
                },
            },
            poxiezhanxb: {
                group: 'poxiezhanxb_1',
                audio: 'ext:死星/audio:2',
                enable: 'phaseUse',
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                position: 'hes',
                prompt(links, player) {
                    return '破邪斩-大地';
                },
                viewAs: {
                    name: 'sha',
                    nature: 'xb_dadi',
                },
                filter(event, player) {
                    return !player.hasSkill('jinyong2');
                },
                filterCard(card, player) {
                    if (ui.selected.cards.length) {
                        return get.color(card) == get.color(ui.selected.cards[0]);
                    }
                    var cards = player.getCards('hs');
                    if (Array.isArray(cards)) for (var i of cards) {
                        if (card != i) {
                            if (get.color(card) == get.color(i)) return true;
                        }
                    }
                    return false;
                },
                selectCard: 2,
                complexCard: true,
                check(card) {
                    var player = _status.event.player;
                    var targets = game.filterPlayer(function (current) {
                        return player.canUse('sha', current);
                    });
                    var num = 0;
                    for (var i = 0; i < targets.length; i++) {
                        var eff = get.sgn(get.effect(targets[i], { name: 'sha' }, player, player));
                        if (targets[i].hp == 1) {
                            eff *= 1.5;
                        }
                        num += eff;
                    }
                    if (!player.needsToDiscard(-1)) {
                        if (targets.length >= 1) {
                            if (num < 2) return 0;
                        } else if (targets.length >= 5) {
                            if (num < 1.5) return 0;
                        }
                    }
                    return 6 - get.value(card);
                },
                ai: {
                    basic: {
                        order: 8.5,
                    },
                },
                subSkill: {
                    1: {
                        audio: 'ext:死星/audio:2',
                        enable: 'phaseUse',
                        nobracket: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        position: 'hes',
                        prompt(links, player) {
                            return '破邪斩-暗灭';
                        },
                        viewAs: {
                            name: 'sha',
                            nature: 'xb_anmie',
                        },
                        filter(event, player) {
                            return !player.hasSkill('jinyong2');
                        },
                        filterCard(card, player) {
                            if (ui.selected.cards.length) {
                                return get.color(card) == get.color(ui.selected.cards[0]);
                            }
                            var cards = player.getCards('hs');
                            if (Array.isArray(cards)) for (var i of cards) {
                                if (card != i) {
                                    if (get.color(card) == get.color(i)) return true;
                                }
                            }
                            return false;
                        },
                        selectCard: 3,
                        complexCard: true,
                        check(card) {
                            var player = _status.event.player;
                            var targets = game.filterPlayer(function (current) {
                                return player.canUse('sha', current);
                            });
                            var num = 0;
                            for (var i = 0; i < targets.length; i++) {
                                var eff = get.sgn(get.effect(targets[i], { name: 'sha' }, player, player));
                                if (targets[i].hp == 1) {
                                    eff *= 1.5;
                                }
                                num += eff;
                            }
                            if (!player.needsToDiscard(-1)) {
                                if (targets.length >= 1) {
                                    if (num < 2) return 0;
                                } else if (targets.length >= 5) {
                                    if (num < 1.5) return 0;
                                }
                            }
                            return 6 - get.value(card);
                        },
                        ai: {
                            basic: {
                                order: 8.5,
                            },
                        },
                    },
                },
            },
            shengshengbuxixb: {
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                filter(event, player) {
                    return player.countCards('he') > 0;
                },
                content() {
                    'step 0';
                    player.draw(2, true);
                    ('step 1');
                    player.storage.dadiwushisha += 1;
                    ('step 2');
                    player.addTempSkill('jinyong2');
                },
            },
            xingshidadiwu: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('baoshi', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('baoshi', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('baoshi', 2);
                        }
                    }
                    ('step 2');
                    if (!player.hasSkill('gaiyadadixb') || !player.storage.gaiyaxianzhi) {
                        player.useResult({ skill: 'gaiyahuashenxb' }, event);
                    }
                    ('step 3');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            gaiyahuashenxb: {
                init(player) {
                    player.storage.gaiyaxianzhi = false;
                },
                trigger: {
                    player: ['phaseEnd'],
                },
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.storage.gaiyaxianzhi && player.countMark('baoshi') > 0;
                },
                content() {
                    'step 0';
                    player.removeMark('baoshi');
                    ('step 1');
                    if (!player.hasSkill('gaiyadadixb')) {
                        player.addSkill('gaiyadadixb');
                        player.storage.gaiyaxianzhi = true;
                        player.storage.gaiyajiashang = true;
                    } else {
                        player.storage.gaiyaxianzhi = true;
                        player.storage.gaiyajiashang = true;
                    }
                },
            },
            gaiyadadixb: {
                init(player) {
                    player.storage.gaiyashang = false;
                    player.storage.gaiyajiashang = true;
                },
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                xikiyouku: true,
                filter(event, player) {
                    return player.storage.gaiyaxianzhi && event.card && event.card.name == 'sha';
                },
                content() {
                    player.storage.gaiyaxianzhi = false;
                    player.storage.gaiyajiashang = false;
                },
                group: ['gaiyadadixb_dadi', 'gaiyadadixb_shan'],
                subSkill: {
                    dadi: {
                        enable: 'chooseToUse',
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        xikiyouku: true,
                        filter(event, player) {
                            return player.storage.gaiyaxianzhi && player.countCards('he');
                        },
                        viewAs: {
                            name: 'sha',
                            nature: 'xb_dadi',
                        },
                        position: 'hs',
                        selectCard: 1,
                        filterCard: true,
                        mark: false,
                        prompt: '盖亚化身-大地杀',
                    },
                    shan: {
                        enable: 'chooseToUse',
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        xikiyouku: true,
                        filter(event, player) {
                            return player.storage.gaiyaxianzhi && player.countCards('he');
                        },
                        mark: false,
                        viewAs: {
                            name: 'shan',
                        },
                        position: 'hs',
                        selectCard: 1,
                        filterCard: true,
                        prompt: '盖亚化身-闪',
                    },
                },
            },
            shengguangshanyao: {
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forceDie: true,
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return true;
                },
                filter(event, player) {
                    return !player.hasSkill('jinyong2') && player.countCards('he') > player.countCards('he', { type: 'basic' });
                },
                filterCard(card, player) {
                    if (get.type(card) == 'basic') return false;
                    return true;
                },
                multitarget: true,
                multiline: true,
                check() {
                    return -1;
                },
                selectTarget: [1, 3],
                targetprompt: ['目标一', '目标二', '目标三'],
                content() {
                    'step 0';
                    targets.sortBySeat();
                    ('step 1');
                    if (targets.length == 3) {
                        for (var i = 0; i < targets.length; i++) {
                            targets[i].hujia += 1;
                            targets[i].update();
                        }
                        player.addTempSkill('jinyong2');
                        event.finish();
                    } else if (targets.length == 2) {
                        player
                            .chooseTarget('请选择获得2护甲的角色', true, function (card, player, target) {
                                return _status.event.targets.includes(target);
                            })
                            .set('ai', function (target) {
                                return 1;
                            })
                            .set('forceDie', true)
                            .set('targets', targets);
                        event.goto(2);
                    } else if (targets.length == 1) {
                        targets[0].hujia += 3;
                        targets[0].update();
                        player.addTempSkill('jinyong2');
                        event.finish();
                    }
                    ('step 2');
                    if (result.bool) {
                        result.targets[0].hujia += 2;
                        result.targets[0].update();
                        for (var i = 0; i < targets.length; i++) {
                            if (result.targets[0] != targets[i]) {
                                targets[i].changeHujia();
                                targets[i].update();
                                ('step 3');
                                player.addTempSkill('jinyong2');
                            }
                        }
                    }
                },
            },
            jiushu: {
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forceDie: true,
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target.isFriendsOf(player) && target != player;
                },
                filter(event, player) {
                    return !player.hasSkill('jinyong2') && player.countCards('he') > 0;
                },
                filterCard: true,
                position: 'he',
                check() {
                    return -1;
                },
                content() {
                    'step 0';
                    player.hujia += 1;
                    target.hujia += 1;
                    ('step 1');
                    player.update();
                    target.update();
                    ('step 2');
                    player.addTempSkill('jinyong2');
                },
            },
            xingshiluoge: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('shuijing', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('shuijing', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('shuijing', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            shenshengcaijue: {
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forceDie: true,
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target != player;
                },
                filter(event, player) {
                    return !player.hasSkill('jinyong2') && (player.hasMark('baoshi') || player.hasMark('shuijing'));
                },
                content() {
                    'step 0';
                    if (player.hasMark('shuijing') && player.hasMark('baoshi')) {
                        player
                            .chooseControl('移去1个<水晶>', '移去1个<宝石>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (!player.hasMark('shuijing') && player.hasMark('baoshi')) {
                            player.removeMark('baoshi', 1);
                            event.goto(2);
                        } else {
                            if (!player.hasMark('baoshi') && player.hasMark('shuijing')) {
                                player.removeMark('shuijing', 1);
                                event.goto(2);
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('shuijing');
                    } else {
                        player.removeMark('baoshi');
                    }
                    ('step 2');
                    player
                        .chooseControl('受到伤害', '回复体力')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 3;
                        });
                    ('step 3');
                    if (result.index == 0) {
                        game.broadcastAll(function (num) {
                            if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                        }, num);
                        game.log(target, '受到了两点伤害');
                        target.hp -= 2;
                        target.$damagepop(-2);
                        target.update();
                        if (target.hp <= 0 && !event.nodying) {
                            event._dyinged = true;
                            target.dying(event).source = player;
                        }
                        event.goto(5);
                    } else {
                        target.recover(2);
                        player.recover(2);
                        event.goto(4);
                    }
                    ('step 4');
                    player.addTempSkill('jinyong2');
                    event.finish();
                    ('step 5');
                    game.log(player, '受到了两点伤害');
                    player.hp -= 2;
                    player.$damagepop(-2);
                    player.update();
                    if (player.hp <= 0 && !event.nodying) {
                        event._dyinged = true;
                        player.dying(event).source = player;
                    }
                    event.goto(4);
                },
            },
            jieshengguangshanyao: {
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forceDie: true,
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return true;
                },
                filter(event, player) {
                    return !player.hasSkill('jinyong2') && player.countCards('he') > player.countCards('he', { type: 'basic' });
                },
                filterCard(card, player) {
                    if (get.type(card) == 'basic') return false;
                    return true;
                },
                multitarget: true,
                multiline: true,
                check() {
                    return -1;
                },
                selectTarget: [1, 3],
                targetprompt: ['目标一', '目标二', '目标三'],
                content() {
                    'step 0';
                    targets.sortBySeat();
                    ('step 1');
                    if (targets.length == 3) {
                        ('step 0');
                        targets[0].hujia += 1;
                        targets[0].update();
                        targets[1].hujia += 1;
                        targets[1].update();
                        targets[2].hujia += 1;
                        targets[2].update();
                        ('step 1');
                        var num = [114, 514, 1919810].randomGet();
                        if (num == 114) {
                            targets[0].hujia += 1;
                            targets[0].update();
                            player.addTempSkill('jinyong2');
                            event.finish();
                        } else {
                            if (num == 514) {
                                targets[1].hujia += 1;
                                targets[1].update();
                                player.addTempSkill('jinyong2');
                                event.finish();
                            } else {
                                if (num == 1919810) {
                                    targets[2].hujia += 1;
                                    targets[2].update();
                                    player.addTempSkill('jinyong2');
                                    event.finish();
                                }
                            }
                        }
                    } else if (targets.length == 2) {
                        player
                            .chooseTarget('请选择获得2护甲的角色', true, function (card, player, target) {
                                return _status.event.targets.includes(target);
                            })
                            .set('ai', function (target) {
                                return 1;
                            })
                            .set('forceDie', true)
                            .set('targets', targets);
                        event.goto(2);
                    } else if (targets.length == 1) {
                        targets[0].hujia += 3;
                        targets[0].update();
                        targets[0].hujia += 1;
                        targets[0].update();
                        player.addTempSkill('jinyong2');
                        event.finish();
                    }
                    ('step 2');
                    if (result.bool) {
                        result.targets[0].hujia += 2;
                        result.targets[0].update();
                        for (var i = 0; i < targets.length; i++) {
                            if (result.targets[0] != targets[i]) {
                                targets[i].hujia += 1;
                                targets[i].update();
                                targets[i].hujia += 1;
                                targets[i].update();
                                ('step 3');
                                player.addTempSkill('jinyong2');
                            }
                        }
                    }
                },
            },
            jiejiushu: {
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forceDie: true,
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target.isFriendsOf(player) && target != player;
                },
                filter(event, player) {
                    return !player.hasSkill('jinyong2') && player.countCards('he') > 0;
                },
                filterCard: true,
                position: 'he',
                content() {
                    'step 0';
                    player.draw();
                    target.draw();
                    player.changeHujia(1);
                    target.changeHujia(1);
                    ('step 1');
                    player.addTempSkill('jinyong2');
                },
                group: 'jiejiushu_1',
                subSkill: {
                    1: {
                        trigger: {
                            global: 'phaseJieshuEnd',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return (event.player == player || event.player.isFriendsOf(player)) && event.player.hujia > 0;
                        },
                        content() {
                            trigger.player.hp += 1;
                            trigger.player.update();
                        },
                    },
                },
            },
            jieshenshengcaijue: {
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forceDie: true,
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target != player;
                },
                filter(event, player) {
                    return !player.hasSkill('jinyong2') && (player.hasMark('baoshi') || player.hasMark('shuijing'));
                },
                content() {
                    'step 0';
                    if (player.hasMark('shuijing') && player.hasMark('baoshi')) {
                        player
                            .chooseControl('移去1个<水晶>', '移去1个<宝石>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (!player.hasMark('shuijing') && player.hasMark('baoshi')) {
                            player.removeMark('baoshi', 1);
                            event.goto(2);
                        } else {
                            if (!player.hasMark('baoshi') && player.hasMark('shuijing')) {
                                player.removeMark('shuijing', 1);
                                event.goto(2);
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('shuijing');
                    } else {
                        player.removeMark('baoshi');
                    }
                    ('step 2');
                    player
                        .chooseControl('受到伤害', '回复体力')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 3;
                        });
                    ('step 3');
                    if (result.index == 0) {
                        if (target.hp > player.hp) {
                            game.broadcastAll(function (num) {
                                if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                            }, num);
                            game.log(target, '受到了三点伤害');
                            target.hp -= 3;
                            target.$damagepop(-3);
                            target.update();
                            if (target.hp <= 0 && !event.nodying) {
                                event._dyinged = true;
                                target.dying(event).source = player;
                            }
                            event.goto(5);
                        } else {
                            game.broadcastAll(function (num) {
                                if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                            }, num);
                            game.log(target, '受到了两点伤害');
                            target.hp -= 2;
                            target.$damagepop(-2);
                            target.update();
                            if (target.hp <= 0 && !event.nodying) {
                                event._dyinged = true;
                                target.dying(event).source = player;
                            }
                            event.goto(5);
                        }
                    } else {
                        if (target.hp > player.hp) {
                            target.recover(2);
                            player.recover(3);
                            event.goto(4);
                        } else {
                            if (player.hp > target.hp) {
                                target.recover(3);
                                player.recover(2);
                                event.goto(4);
                            } else {
                                target.recover(3);
                                player.recover(3);
                                event.goto(4);
                            }
                        }
                    }
                    ('step 4');
                    player.addTempSkill('jinyong2');
                    event.finish();
                    ('step 5');
                    game.log(player, '受到了两点伤害');
                    player.hp -= 2;
                    player.$damagepop(-2);
                    player.update();
                    if (player.hp <= 0 && !event.nodying) {
                        event._dyinged = true;
                        player.dying(event).source = player;
                    }
                    event.goto(4);
                },
            },
            jiezhongcaifaze: {
                nobracket: true,
                trigger: {
                    global: 'gameStart',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    player.addMark('shuijing', 2);
                    player.addMark('baoshi', 1);
                },
            },
            jiemorishenpan: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong') && player.hasMark('jieshenpanlangchao1');
                },
                filterTarget: true,
                content() {
                    'step 0';
                    if (player.countMark('jieshenpanlangchao1') == 1) {
                        player
                            .chooseControl('取消', '移除1个<审判>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (player.countMark('jieshenpanlangchao1') == 2) {
                            player
                                .chooseControl('取消', '移除1个<审判>', '移除2个<审判>')
                                .set('prompt', '请选择一项')
                                .set('ai', function () {
                                    var num = [2, 1].randomGet();
                                    return num;
                                });
                        } else {
                            if (player.countMark('jieshenpanlangchao1') == 3) {
                                player
                                    .chooseControl('取消', '移除1个<审判>', '移除2个<审判>', '移除3个<审判>')
                                    .set('prompt', '请选择一项')
                                    .set('ai', function () {
                                        var num = [3, 1, 2].randomGet();
                                        return num;
                                    });
                            } else {
                                if (player.countMark('jieshenpanlangchao1') == 4) {
                                    player
                                        .chooseControl('取消', '移除1个<审判>', '移除2个<审判>', '移除3个<审判>', '移除4个<审判>')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            var num = [4, 1, 2, 3].randomGet();
                                            return num;
                                        });
                                } else {
                                    if (player.countMark('jieshenpanlangchao1') == 5) {
                                        player
                                            .chooseControl('取消', '移除1个<审判>', '移除2个<审判>', '移除3个<审判>', '移除4个<审判>', '移除5个<审判>')
                                            .set('prompt', '请选择一项')
                                            .set('ai', function () {
                                                var num = [5, 1, 2, 3, 4].randomGet();
                                                return num;
                                            });
                                    } else {
                                        if (player.countMark('jieshenpanlangchao1') >= 6) {
                                            player
                                                .chooseControl('取消', '移除1个<审判>', '移除2个<审判>', '移除3个<审判>', '移除4个<审判>', '移除5个<审判>', '移除6个<审判>')
                                                .set('prompt', '请选择一项')
                                                .set('ai', function () {
                                                    var num = [6, 1, 2, 3, 4, 5].randomGet();
                                                    return num;
                                                });
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        event.finish();
                    }
                    if (result.index == 1) {
                        player.removeMark('jieshenpanlangchao1', 1, true);
                        target.damage();
                    }
                    if (result.index == 2) {
                        player.removeMark('jieshenpanlangchao1', 2, true);
                        target.damage(2);
                    }
                    if (result.index == 3) {
                        player.removeMark('jieshenpanlangchao1', 3, true);
                        target.damage(3);
                    }
                    if (result.index == 4) {
                        player.removeMark('jieshenpanlangchao1', 4, true);
                        target.damage(4);
                    }
                    if (result.index == 5) {
                        player.removeMark('jieshenpanlangchao1', 5, true);
                        target.damage(5);
                    }
                    if (result.index == 6) {
                        player.removeMark('jieshenpanlangchao1', 6, true);
                        target.damage(6);
                    }
                    ('step 2');
                    player.addTempSkill('jinyong');
                },
            },
            jieshenpanlangchao: {
                nobracket: true,
                trigger: {
                    player: 'damageBegin4',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                lastDo: true,
                content() {
                    'step 0';
                    event.count = Math.min(trigger.num, 9);
                    ('step 1');
                    event.count--;
                    if (player.countMark('jieshenpanlangchao1') <= 5) {
                        player.addMark('jieshenpanlangchao1', 1);
                    } else event.finish();
                    ('step 2');
                    if (event.count > 0 && player.countMark('jieshenpanlangchao1') <= 5) event.goto(1);
                },
            },
            jieshenpanpailin: {
                nobracket: true,
                trigger: {
                    player: 'phaseBegin',
                },
                forced: true,
                firstDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.countMark('jieshenpanlangchao1') >= 6;
                },
                content() {
                    player.addTempSkill('jinyong2');
                    player.addTempSkill('jieshenpanpailin1');
                },
            },
            jiezhongcaiyishi: {
                nobracket: true,
                trigger: {
                    player: 'phaseBegin',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong3') && !player.hasSkill('jieshenpanxingtai') && player.hasMark('baoshi');
                },
                content() {
                    player.removeMark('baoshi');
                    player.addSkills('jieshenpanxingtai');
                    player.addTempSkill('jinyong3');
                },
            },
            jieyishizhongduan: {
                nobracket: true,
                trigger: {
                    player: 'phaseBegin',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong3') && player.hasSkill('jieshenpanxingtai');
                },
                content() {
                    player.draw(2);
                    player.addMark('baoshi');
                    player.removeSkill('jieshenpanxingtai');
                    player.addTempSkill('jinyong3');
                },
            },
            jiepanjuetianping: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong2') && !player.hasSkill('jinyong') && (player.hasMark('shuijing') || player.hasMark('baoshi'));
                },
                content() {
                    'step 0';
                    if (player.hasMark('shuijing') && player.hasMark('baoshi')) {
                        player
                            .chooseControl('移去1个<水晶>', '移去1个<宝石>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (!player.hasMark('baoshi') && player.hasMark('shuijing')) {
                            player.removeMark('shuijing', 1);
                            event.goto(2);
                        } else {
                            if (!player.hasMark('shuijing') && player.hasMark('baoshi')) {
                                player.removeMark('baoshi', 1);
                                event.goto(2);
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('shuijing');
                    } else {
                        player.removeMark('baoshi');
                    }
                    ('step 2');
                    if (player.countMark('jieshenpanlangchao1') <= 5) {
                        player.addMark('jieshenpanlangchao1', 1);
                    } else {
                    }
                    ('step 3');
                    player
                        .chooseControl('弃置所有手牌,获得1个<宝石>', '将手牌补至手牌上限')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 4;
                        });
                    ('step 4');
                    if (result.index == 0) {
                        player.chooseToDiscard('h', Infinity, true);
                        player.addMark('baoshi');
                        if (!player.hasSkill('jieshenpanxingtai')) {
                            player.removeMark('baoshi');
                            player.addSkills('jieshenpanxingtai');
                        } else event.finish();
                    } else {
                        var num = player.getHandcardLimit() - player.countCards('h');
                        player.draw(num);
                    }
                    ('step 5');
                    player.addTempSkill('jinyong');
                },
            },
            zhongcaifaze: {
                nobracket: true,
                trigger: {
                    global: 'gameStart',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    player.addMark('shuijing', 2);
                },
            },
            morishenpan: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong') && player.hasMark('shenpanlangchao1');
                },
                filterTarget: true,
                content() {
                    'step 0';
                    if (player.countMark('shenpanlangchao1') == 1) {
                        player
                            .chooseControl('移除1个<审判>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (player.countMark('shenpanlangchao1') == 2) {
                            player
                                .chooseControl('移除1个<审判>', '移除2个<审判>')
                                .set('prompt', '请选择一项')
                                .set('ai', function () {
                                    return 1;
                                });
                        } else {
                            if (player.countMark('shenpanlangchao1') == 3) {
                                player
                                    .chooseControl('移除1个<审判>', '移除2个<审判>', '移除3个<审判>')
                                    .set('prompt', '请选择一项')
                                    .set('ai', function () {
                                        return 1;
                                    });
                            } else {
                                if (player.countMark('shenpanlangchao1') >= 4) {
                                    player
                                        .chooseControl('移除1个<审判>', '移除2个<审判>', '移除3个<审判>', '移除4个<审判>')
                                        .set('prompt', '请选择一项')
                                        .set('ai', function () {
                                            return 1;
                                        });
                                }
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('shenpanlangchao1', 1, true);
                        target.damage();
                    }
                    if (result.index == 1) {
                        player.removeMark('shenpanlangchao1', 2, true);
                        target.damage(2);
                    }
                    if (result.index == 2) {
                        player.removeMark('shenpanlangchao1', 3, true);
                        target.damage(3);
                    }
                    if (result.index == 3) {
                        player.removeMark('shenpanlangchao1', 4, true);
                        target.damage(4);
                    }
                    ('step 2');
                    player.addTempSkill('jinyong');
                },
            },
            shenpanlangchao: {
                nobracket: true,
                trigger: {
                    player: 'damageBegin4',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                lastDo: true,
                content() {
                    if (player.countMark('shenpanlangchao1') <= 3) {
                        player.addMark('shenpanlangchao1', 1);
                    } else event.finish();
                },
            },
            shenpanpailin: {
                nobracket: true,
                trigger: {
                    player: 'phaseBegin',
                },
                forced: true,
                firstDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.countMark('shenpanlangchao1') >= 4;
                },
                content() {
                    player.addTempSkill('jinyong2');
                    player.addTempSkill('shenpanpailin1');
                },
            },
            zhongcaiyishi: {
                nobracket: true,
                trigger: {
                    player: 'phaseBegin',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong3') && !player.hasSkill('shenpanxingtai') && player.hasMark('baoshi');
                },
                content() {
                    player.removeMark('baoshi');
                    player.addSkills('shenpanxingtai');
                    player.addTempSkill('jinyong3');
                },
            },
            yishizhongduan: {
                nobracket: true,
                trigger: {
                    player: 'phaseBegin',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong3') && player.hasSkill('shenpanxingtai');
                },
                content() {
                    player.addMark('baoshi');
                    player.removeSkill('shenpanxingtai');
                    player.addTempSkill('jinyong3');
                },
            },
            panjuetianping: {
                nobracket: true,
                enable: 'phaseUse',
                usable: 1,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong2') && !player.hasSkill('jinyong') && (player.hasMark('shuijing') || player.hasMark('baoshi'));
                },
                content() {
                    'step 0';
                    if (player.hasMark('shuijing') && player.hasMark('baoshi')) {
                        player
                            .chooseControl('移去1个<水晶>', '移去1个<宝石>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (!player.hasMark('baoshi') && player.hasMark('shuijing')) {
                            player.removeMark('shuijing', 1);
                            event.goto(2);
                        } else {
                            if (!player.hasMark('shuijing') && player.hasMark('baoshi')) {
                                player.removeMark('baoshi', 1);
                                event.goto(2);
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('shuijing');
                    } else {
                        player.removeMark('baoshi');
                    }
                    ('step 2');
                    if (player.countMark('shenpanlangchao1') <= 3) {
                        player.addMark('shenpanlangchao1', 1);
                    } else {
                    }
                    ('step 3');
                    player
                        .chooseControl('弃置所有手牌,获得1个<宝石>', '将手牌补至手牌上限')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 4;
                        });
                    ('step 4');
                    if (result.index == 0) {
                        player.chooseToDiscard('h', Infinity, true);
                        player.addMark('baoshi');
                    } else {
                        var num = player.getHandcardLimit() - player.countCards('h');
                        player.draw(num);
                    }
                    ('step 5');
                    player.addTempSkill('jinyong');
                },
            },
            shenpanlangchao1: {
                marktext: '审',
                intro: {
                    name: '审判',
                    content: '上限为4,若准备阶段开始时<审判>已达上限,则出牌阶段你不能执行<末日审判>外的任何操作',
                },
            },
            jieshenpanlangchao1: {
                marktext: '审',
                intro: {
                    name: '审判',
                    content: '上限为6,若准备阶段开始时<审判>已达上限,则出牌阶段你不能执行除<末日审判>,以及使用或打出基本牌外的任何操作',
                },
            },
            shenpanpailin1: {
                mod: {
                    cardEnabled(card) {
                        return false;
                    },
                    cardEnabled2(card) {
                        return false;
                    },
                    cardUsable(card) {
                        return false;
                    },
                    cardRespondable(card) {
                        return false;
                    },
                    cardSavable(card) {
                        return false;
                    },
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
            },
            jieshenpanpailin1: {
                mod: {
                    cardEnabled(card) {
                        if (get.type(card) != 'basic') return false;
                    },
                    cardEnabled2(card) {
                        if (get.type(card) != 'basic') return false;
                    },
                    cardUsable(card) {
                        if (get.type(card) != 'basic') return false;
                    },
                    cardRespondable(card) {
                        if (get.type(card) != 'basic') return false;
                    },
                    cardSavable(card) {
                        if (get.type(card) != 'basic') return false;
                    },
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
            },
            shenpanxingtai: {
                mark: true,
                nopop: true,
                init(player) {
                    game.log(player, '进入了', '【审判形态】');
                },
                intro: {
                    content: '锁定技,你的手牌上限恒定为你的体力上限-1,你的回合开始前,你+1<审判>',
                },
                mod: {
                    maxHandcard(player, num) {
                        return (num = player.maxHp - 1);
                    },
                },
                trigger: {
                    player: 'phaseBefore',
                },
                forced: true,
                firstDo: true,
                forced: true,
                charlotte: true,
                content() {
                    if (player.countMark('shenpanlangchao1') <= 3) {
                        player.addMark('shenpanlangchao1', 1);
                    } else event.finish();
                },
            },
            jieshenpanxingtai: {
                mark: true,
                nopop: true,
                init(player) {
                    game.log(player, '进入了', '【审判形态】');
                },
                intro: {
                    content: '锁定技,你的手牌上限恒定为你的体力上限,你的回合开始前,你+1<审判>',
                },
                mod: {
                    maxHandcard(player, num) {
                        return (num = player.maxHp);
                    },
                },
                trigger: {
                    player: 'phaseBefore',
                },
                forced: true,
                firstDo: true,
                forced: true,
                charlotte: true,
                content() {
                    if (player.countMark('jieshenpanlangchao1') <= 5) {
                        player.addMark('jieshenpanlangchao1', 1);
                    } else event.finish();
                },
            },
            xingshizhongcai: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong3') && !player.hasSkill('jinyong2');
                },
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('baoshi');
                        player.addMark('shuijing');
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('baoshi');
                            player.addMark('shuijing', 2);
                        } else {
                            player.draw(3, true);
                            player.addMark('baoshi');
                            player.addMark('shuijing', 1);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            shengdu: {
                trigger: {
                    player: 'damageBegin4',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                content() {
                    player.addTempSkill('shengdux');
                },
                group: ['shengdu_1', 'shengdu_2', 'shengdu_3'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'gameStart',
                        },
                        forced: true,
                        firstDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            player.changeHujia(3);
                        },
                    },
                    2: {
                        trigger: {
                            player: 'damageEnd',
                        },
                        forced: true,
                        firstDo: true,
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        content() {
                            player.removeSkill('shengdux');
                        },
                        popup: false,
                    },
                    3: {
                        trigger: {
                            player: ['damageBegin4', 'damageBegin5'],
                        },
                        forced: true,
                        firstDo: true,
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.card && event.card.name == 'sha' && !player.hasSkill('shengdux')) return false;
                            return true;
                        },
                        content() {
                            player.removeSkill('shengdux');
                        },
                        popup: false,
                    },
                },
            },
            shengdux: {
                init(player) {
                    game.log(player, '获得了', '【圣渎】');
                },
                onremove(player) {
                    game.log(player, '移除了', '【圣渎】');
                },
                forced: true,
                charlotte: true,
                ai: {
                    nohujia: true,
                    skillTagFilter(player, card) {
                        return player.hasSkill('shengdux');
                    },
                    threaten(player, target) {
                        if (!target.hujia) return 0.8;
                    },
                    effect: {
                        target(card, player, target) {
                            if (get.type(card, 'basic') && get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                return 0.8;
                            }
                        },
                    },
                },
            },
            wenyi: {
                enable: 'phaseUse',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filterCard: {
                    suit: 'club',
                },
                filter(event, player) {
                    return !player.hasSkill('jinyong2') && player.countCards('he', { suit: 'club' }) > 0;
                },
                content() {
                    'step 0';
                    game.countPlayer(function (current) {
                        if (current != player) current.damage('nocard', 'player')._triggered = null;
                    });
                    ('step 1');
                    player.addTempSkill('jinyong2');
                },
            },
            buxiu: {
                trigger: {
                    player: ['wenyiAfter', 'mubeiyunluoAfter'],
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    player.changeHujia();
                },
                group: 'buxiu_1',
                subSkill: {
                    1: {
                        trigger: {
                            player: 'useCardAfter',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player, card) {
                            return get.type(event.card) !== 'basic';
                        },
                        content() {
                            player.changeHujia();
                        },
                    },
                },
            },
            siwangzhichu: {
                nobracket: true,
                enable: 'phaseUse',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filterTarget(card, player, target) {
                    return target != player;
                },
                selectCard: [2, Infinity],
                position: 'he',
                complexCard: true,
                filterCard(card, player) {
                    var list = [];
                    for (var i of player.getCards('he')) {
                        var last = 0;
                        if (list.length == 0) {
                            list[0] = [get.type(i), 1];
                        } else {
                            for (var j = 0; j < list.length; j++)
                                if (get.type(i) == list[j][0]) {
                                    list[j][1]++;
                                    last = 1;
                                }
                            if (last != 1) {
                                list[list.length] = [get.type(i), 1];
                            }
                        }
                    }
                    var list1 = [];
                    for (var i of list) if (i[1] >= 2) list1.push(i[0]);
                    if (!ui.selected.cards.length) return list1.includes(get.type(card));
                    return get.type(card) == get.type(ui.selected.cards[0]);
                },
                filter(event, player, card) {
                    if (player.hasSkill('jinyong2')) return false;
                    var list = [];
                    for (var i of player.getCards('he')) {
                        var last = 0;
                        if (list.length == 0) {
                            list[0] = [get.type(i), 1];
                        } else {
                            for (var j = 0; j < list.length; j++)
                                if (get.type(i) == list[j][0]) {
                                    list[j][1]++;
                                    last = 1;
                                }
                            if (last != 1) {
                                list[list.length] = [get.type(i), 1];
                            }
                        }
                    }
                    var list1 = [];
                    for (var i of list) if (i[1] >= 2) list1.push(i[0]);
                    return player.hujia >= 2 && list1.length != 0;
                },
                content() {
                    'step 0';
                    var num = player.hujia;
                    var map = {};
                    var list = [];
                    for (var i = 2; i <= num; i++) {
                        var cn = get.cnNumber(i, true);
                        map[cn] = i;
                        list.push(cn);
                    }
                    event.map = map;
                    player
                        .chooseControl(list, function () {
                            return get.cnNumber(_status.event.goon, true);
                        })
                        .set('prompt', '移除y点护甲')
                        .set('goon', num);
                    ('step 1');
                    var num = event.map[result.control] || 2;
                    event.i = num;
                    player.changeHujia(-num);
                    ('step 2');
                    target.damage(event.i + cards.length - 3);
                    ('step 3');
                    player.addTempSkill('jinyong2');
                },
            },
            mubeiyunluo: {
                nobracket: true,
                enable: 'phaseUse',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong2') && player.countMark('baoshi') > 0;
                },
                content() {
                    'step 0';
                    player.removeMark('baoshi');
                    ('step 1');
                    game.countPlayer(function (current) {
                        if (current != player) current.damage(2, 'nocard', 'player')._triggered = null;
                    });
                    ('step 2');
                    player.changeHujia();
                    ('step 3');
                    player.addTempSkill('jinyong2');
                },
            },
            xingshiwenyi: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong3') && !player.hasSkill('jinyong2');
                },
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('baoshi', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('baoshi', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('baoshi', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            死灵法师准备语音: {
                trigger: {
                    player: 'phaseBefore',
                },
                forced: true,
                silent: true,
                xikiyouku: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    game.playAudio('../extension/死星/audio/silingfashi.mp3');
                },
            },
            jiebuxiu: {
                trigger: {
                    player: ['jiewenyiAfter', 'jiemubeiyunluoAfter'],
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    if (player.hasMark('baoshi')) {
                        player.hujia += 2;
                        player.update();
                    } else {
                        player.hujia += 1;
                        player.update();
                    }
                },
                group: 'jiebuxiu_1',
                subSkill: {
                    1: {
                        trigger: {
                            player: 'useCardAfter',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player, card) {
                            return get.type(event.card) !== 'basic';
                        },
                        content() {
                            if (player.hasMark('baoshi')) {
                                player.hujia += 2;
                                player.update();
                            } else {
                                player.hujia += 1;
                                player.update();
                            }
                        },
                    },
                },
            },
            jieshengdu: {
                trigger: {
                    player: 'damageBegin4',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                content() {
                    player.addTempSkill('shengdux');
                },
                group: ['jieshengdu_1', 'jieshengdu_2', 'jieshengdu_3'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'gameStart',
                        },
                        forced: true,
                        firstDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            player.hujia += 3;
                            player.update();
                            player.addMark('baoshi');
                        },
                    },
                    2: {
                        trigger: {
                            player: 'damageEnd',
                        },
                        forced: true,
                        firstDo: true,
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        content() {
                            player.removeSkill('shengdux');
                        },
                        popup: false,
                        _priority: 1,
                    },
                    3: {
                        trigger: {
                            player: ['damageBegin4', 'damageBegin5'],
                        },
                        forced: true,
                        firstDo: true,
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.card && event.card.name == 'sha' && !player.hasSkill('shengdux')) return false;
                            return true;
                        },
                        content() {
                            player.removeSkill('shengdux');
                        },
                        popup: false,
                        _priority: 1,
                    },
                },
            },
            jiewenyi: {
                enable: 'phaseUse',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filterCard: {
                    suit: 'club',
                },
                filter(event, player) {
                    return !player.hasSkill('jinyong2') && player.countCards('he', { suit: 'club' }) > 0;
                },
                content() {
                    'step 0';
                    game.countPlayer(function (current) {
                        if (current != player) {
                            current.damage('nocard', 'player')._triggered = null;
                        }
                    });
                    ('step 1');
                    player.addTempSkill('jinyong3');
                },
                group: 'jiewenyi_1',
                subSkill: {
                    1: {
                        trigger: {
                            global: 'dying',
                        },
                        forced: true,
                        firstDo: true,
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.reason && event.reason.parent.name == 'jiewenyi';
                        },
                        content() {
                            player.addTempSkill('jinyong2', { player: 'phaseEnd' });
                        },
                    },
                },
            },
            jiesiwangzhichu: {
                nobracket: true,
                enable: 'phaseUse',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filterTarget(card, player, target) {
                    return target != player;
                },
                selectCard: [1, Infinity],
                position: 'he',
                complexCard: true,
                filterCard(card, player) {
                    var list = [];
                    for (var i of player.getCards('he')) {
                        var last = 0;
                        if (list.length == 0) {
                            list[0] = [get.type(i), 1];
                        } else {
                            for (var j = 0; j < list.length; j++)
                                if (get.type(i) == list[j][0]) {
                                    list[j][1]++;
                                    last = 1;
                                }
                            if (last != 1) {
                                list[list.length] = [get.type(i), 1];
                            }
                        }
                    }
                    var list1 = [];
                    for (var i of list) if (i[1] >= 1) list1.push(i[0]);
                    if (!ui.selected.cards.length) return list1.includes(get.type(card));
                    return get.type(card) == get.type(ui.selected.cards[0]);
                },
                filter(event, player, card) {
                    if (player.hasSkill('jinyong3')) return false;
                    var list = [];
                    for (var i of player.getCards('he')) {
                        var last = 0;
                        if (list.length == 0) {
                            list[0] = [get.type(i), 1];
                        } else {
                            for (var j = 0; j < list.length; j++)
                                if (get.type(i) == list[j][0]) {
                                    list[j][1]++;
                                    last = 1;
                                }
                            if (last != 1) {
                                list[list.length] = [get.type(i), 1];
                            }
                        }
                    }
                    var list1 = [];
                    for (var i of list) if (i[1] >= 1) list1.push(i[0]);
                    return player.hujia >= 1 && list1.length != 0;
                },
                content() {
                    'step 0';
                    var num = player.hujia;
                    var map = {};
                    var list = [];
                    for (var i = 1; i <= num; i++) {
                        var cn = get.cnNumber(i, true);
                        map[cn] = i;
                        list.push(cn);
                    }
                    event.map = map;
                    player
                        .chooseControl(list, function () {
                            return get.cnNumber(_status.event.goon, true);
                        })
                        .set('prompt', '移除y点护甲')
                        .set('goon', num);
                    ('step 1');
                    var num = event.map[result.control] || 1;
                    event.i = num;
                    player.changeHujia(-num);
                    ('step 2');
                    target.damage(event.i + cards.length - 1);
                    ('step 3');
                    player.addTempSkill('jinyong3');
                    player.addTempSkill('jinyong2');
                },
            },
            jiemubeiyunluo: {
                nobracket: true,
                enable: 'phaseUse',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong3') && player.countMark('baoshi') > 0;
                },
                content() {
                    'step 0';
                    player.removeMark('baoshi');
                    ('step 1');
                    var numa = 1 + player.countMark('baoshi');
                    game.countPlayer(function (current) {
                        if (current != player) current.damage(1 + numa, 'nocard', 'player')._triggered = null;
                    });
                    ('step 2');
                    player.hujia += 1;
                    player.update();
                    ('step 3');
                    player.addTempSkill('jinyong3');
                    player.addTempSkill('jinyong2');
                },
            },
            xingshijiesilingfashi: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong3') && !player.hasSkill('jinyong2');
                },
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('baoshi', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('baoshi', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('baoshi', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            bingshuanglingyu: {
                nobracket: true,
                trigger: {
                    global: 'gameStart',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.changeHujia(2);
                    ('step 1');
                    game.countPlayer(function (current) {
                        if (current != player && player.getFriends().includes(current)) current.changeHujia();
                    });
                },
            },
            shuijingdaoqiang: {
                nobracket: true,
                trigger: {
                    player: 'shaHit',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.target != player && player.hujia > 0;
                },
                content() {
                    'step 0';
                    var num = player.hujia;
                    var map = {};
                    var list = [];
                    for (var i = 1; i <= num; i++) {
                        var cn = get.cnNumber(i, true);
                        map[cn] = i;
                        list.push(cn);
                    }
                    event.map = map;
                    player
                        .chooseControl(list, function () {
                            return get.cnNumber(_status.event.goon, true);
                        })
                        .set('prompt', '移除x点护甲')
                        .set('goon', num);
                    ('step 1');
                    var num = event.map[result.control] || 2;
                    event.i = num;
                    player.changeHujia(-num);
                    ('step 2');
                    trigger.target.damage(event.i);
                },
            },
            linfengzhufu: {
                nobracket: true,
                trigger: {
                    player: ['shaMiss', 'shaCancelled'],
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.chooseTarget(get.prompt('linfengzhufu'));
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        player.line(target, 'blue');
                        if (target.hujia > 0) {
                            target.changeHujia();
                        } else target.changeHujia(2);
                    }
                },
            },
            shuangyuzhihuan: {
                nobracket: true,
                enable: 'phaseUse',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hasMark('shuijing') || player.hasMark('baoshi');
                },
                content() {
                    'step 0';
                    if (player.hasMark('shuijing') && player.hasMark('baoshi')) {
                        player
                            .chooseControl('移去1个<水晶>', '移去1个<宝石>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (!player.hasMark('shuijing') && player.hasMark('baoshi')) {
                            player.removeMark('baoshi', 1);
                            event.goto(2);
                        } else {
                            if (!player.hasMark('baoshi') && player.hasMark('shuijing')) {
                                player.removeMark('shuijing', 1);
                                event.goto(2);
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('shuijing');
                    } else {
                        player.removeMark('baoshi');
                    }
                    ('step 2');
                    if (player.hujia == 0) {
                        player.changeHujia(2);
                    } else return 3;
                    return 3;
                    ('step 3');
                    game.countPlayer(function (current) {
                        if (current.hujia == 0 && player.getFriends().includes(current)) current.changeHujia(2);
                    });
                    ('step 4');
                    player.addTempSkill('shuangyu', { player: 'phaseUseAfter' });
                    player.addMark('shuangyumark', 1, false);
                },
                group: 'shuangyuzhihuan_1',
                subSkill: {
                    1: {
                        trigger: {
                            player: 'phaseUseAfter',
                        },
                        forced: true,
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return player.hasMark('shuangyumark');
                        },
                        content() {
                            player.removeMark('shuangyumark', Infinity);
                        },
                        popup: false,
                    },
                },
            },
            星杯传说的应战机制扭曲版: {
                init(player) {
                    var a = window.setInterval(function () {
                        if (player.hasSkill('星杯传说的应战机制扭曲版')) {
                            player.storage.应战机制 = true;
                        } else {
                            game.addGlobalSkill('星杯传说的应战机制扭曲版');
                            window.clearInterval(a);
                        }
                    }, 1000);
                },
                init2(player) {
                    player.turnOver = game.kongfunc;
                },
                nobracket: true,
                trigger: {
                    global: ['shaMiss', 'shaCancelled'],
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return event.target == player && player.storage.应战机制;
                },
                content() {
                    'step 0';
                    game.log(player, '的<span class="greentext">【应战机制】</span class>被触发');
                    player.chooseTarget('请选择应战的目标', true, lib.translate.星杯传说的应战机制扭曲版_info, function (card, player, target) {
                        return target != player && player.getEnemies().includes(target);
                    });
                    ('step 1');
                    var tar = result.targets[0];
                    event.tar = tar;
                    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].randomGet();
                    if (num == 3 || num == 6 || num == 9) {
                        player.useCard({ name: 'sha', suit: 'spade', nature: 'xb_anmie' }, event.tar, false);
                    } else player.useCard({ name: 'sha' }, event.tar, true);
                },
                _priority: 1,
            },
            jiebingshuanglingyu: {
                nobracket: true,
                trigger: {
                    global: 'gameStart',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.changeHujia(2);
                    player.draw(2);
                    ('step 1');
                    game.countPlayer(function (current) {
                        if (current != player && player.getFriends().includes(current)) {
                            current.changeHujia(2);
                            current.draw(2);
                        }
                    });
                },
            },
            jieshuijingdaoqiang: {
                nobracket: true,
                trigger: {
                    player: 'shaHit',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.target != player && player.hujia > 0;
                },
                content() {
                    'step 0';
                    var num = player.hujia;
                    var map = {};
                    var list = [];
                    for (var i = 1; i <= num; i++) {
                        var cn = get.cnNumber(i, true);
                        map[cn] = i;
                        list.push(cn);
                    }
                    event.map = map;
                    player
                        .chooseControl(list, function () {
                            return get.cnNumber(_status.event.goon, true);
                        })
                        .set('prompt', '移除x点护甲')
                        .set('goon', num);
                    ('step 1');
                    var num = event.map[result.control] || 2;
                    event.i = num;
                    player.changeHujia(-num);
                    ('step 2');
                    var num = trigger.target.hujia;
                    trigger.target.damage(event.i + num);
                },
            },
            jielinfengzhufu: {
                nobracket: true,
                trigger: {
                    player: ['shaMiss', 'shaCancelled'],
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.chooseTarget('请选择一名友方目标', true, lib.translate.jielinfengzhufu_info, function (card, player, target) {
                        return target == player || player.getFriends().includes(target);
                    });
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        player.line(target, 'blue');
                        target.changeHujia(2);
                    }
                },
            },
            jieshuangyuzhihuan: {
                nobracket: true,
                enable: 'phaseUse',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hasMark('shuijing') || player.hasMark('baoshi');
                },
                content() {
                    'step 0';
                    if (player.hasMark('shuijing') && player.hasMark('baoshi')) {
                        player
                            .chooseControl('移去1个<水晶>', '移去1个<宝石>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (!player.hasMark('shuijing') && player.hasMark('baoshi')) {
                            player.removeMark('baoshi', 1);
                            event.goto(2);
                        } else {
                            if (!player.hasMark('baoshi') && player.hasMark('shuijing')) {
                                player.removeMark('shuijing', 1);
                                event.goto(2);
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('shuijing');
                    } else {
                        player.removeMark('baoshi');
                    }
                    ('step 2');
                    player.changeHujia(2);
                    return 3;
                    ('step 3');
                    game.countPlayer(function (current) {
                        if (player.getFriends().includes(current)) current.changeHujia(2);
                    });
                    ('step 4');
                    player.addTempSkill('shuangyu', { player: 'phaseUseAfter' });
                    player.addMark('shuangyumark', 1, false);
                },
                group: 'jieshuangyuzhihuan_1',
                subSkill: {
                    1: {
                        trigger: {
                            player: 'phaseUseAfter',
                        },
                        forced: true,
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return player.hasMark('shuangyumark');
                        },
                        content() {
                            player.removeMark('shuangyumark', Infinity);
                        },
                        popup: false,
                    },
                },
            },
            shuangyu: {
                charlotte: true,
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + player.countMark('shuangyumark');
                    },
                },
            },
            shuangyumark: {
                marktext: '霜语增益',
                intro: {
                    name: '霜语之环出杀增益',
                    content: '每有一个<增益>,本回合使用杀次数便+1',
                },
            },
            xingshishuangxue: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('shuijing', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('shuijing', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('shuijing', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            mingyundiaoke: {
                nobracket: true,
                audio: 'ext:死星/audio:2',
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return player != target && target.countCards('he') > 0;
                },
                filter(event, player) {
                    return !player.hasSkill('jinyong2');
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filterCard: true,
                position: 'he',
                content() {
                    'step 0';
                    var naa = target.countCards('he');
                    player.gainPlayerCard(target, true, 'he', naa);
                    ('step 1');
                    var num = result.cards.length;
                    event.si = num;
                    var map = {};
                    var list = [];
                    for (var i = 0; i <= num; i++) {
                        var cn = get.cnNumber(i, true);
                        map[cn] = i;
                        list.push(cn);
                    }
                    event.map = map;
                    player
                        .chooseControl(list, function () {
                            return get.cnNumber(_status.event.goon, true);
                        })
                        .set('prompt', '指定交还牌数')
                        .set('goon', num);
                    ('step 2');
                    event.na = event.map[result.control] || 0;
                    event.i = event.na;
                    player.chooseCard(event.i, 'he', true);
                    ('step 3');
                    player.give(result.cards, target);
                    player.damage(event.si - event.i);
                    ('step 4');
                    player.addTempSkill('jinyong2');
                },
            },
            xingchenshouhu: {
                trigger: {
                    player: ['damageBegin4', 'loseHpBegin'],
                },
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.countCards('he') > player.countCards('he', { type: 'basic' });
                },
                content() {
                    'step 0';
                    var num = trigger.num;
                    player.chooseToDiscard([0, num], 'he', '弃置至多等于损失体力数的非基本牌', function (card) {
                        return get.type(card) !== 'basic';
                    });
                    ('step 1');
                    if (result.bool) {
                        trigger.num -= result.cards.length;
                        player.draw(result.cards.length);
                    } else event.finish();
                },
            },
            xingshisitong: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong3') && !player.hasSkill('jinyong2');
                },
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('shuijing', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('shuijing', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('shuijing', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            xingwenyongdong: {
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                trigger: {
                    player: 'mingyundiaokeAfter',
                },
                filter(event, player) {
                    return player.hasMark('shuijing') || player.hasMark('baoshi');
                },
                content() {
                    'step 0';
                    if (player.hasMark('shuijing') && player.hasMark('baoshi')) {
                        player
                            .chooseControl('移去1个<水晶>', '移去1个<宝石>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (!player.hasMark('shuijing') && player.hasMark('baoshi')) {
                            player.removeMark('baoshi', 1);
                            event.goto(2);
                        } else {
                            if (!player.hasMark('baoshi') && player.hasMark('shuijing')) {
                                player.removeMark('shuijing', 1);
                                event.goto(2);
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('shuijing');
                    } else {
                        player.removeMark('baoshi');
                    }
                    ('step 2');
                    player.draw(2);
                    ('step 3');
                    player.removeSkill('jinyong2');
                },
            },
            jiemingyundiaoke: {
                nobracket: true,
                audio: 'ext:死星/audio:2',
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return player != target && target.countCards('he') > 0;
                },
                filter(event, player) {
                    return !player.hasSkill('jinyong2');
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                contentBefore() {
                    var card = get.cardPile(function (card) {
                        return get.type2(card) != 'basic';
                    });
                    if (card) {
                        player.gain(card, 'gain2');
                    }
                },
                content() {
                    'step 0';
                    var naa = target.countCards('he');
                    player.gainPlayerCard(target, true, 'he', naa);
                    ('step 1');
                    var num = result.cards.length;
                    event.si = num;
                    var map = {};
                    var list = [];
                    for (var i = 0; i <= num; i++) {
                        var cn = get.cnNumber(i, true);
                        map[cn] = i;
                        list.push(cn);
                    }
                    event.map = map;
                    player
                        .chooseControl(list, function () {
                            return get.cnNumber(_status.event.goon, true);
                        })
                        .set('prompt', '指定交还牌数')
                        .set('goon', num);
                    ('step 2');
                    event.na = event.map[result.control] || 0;
                    event.i = event.na;
                    player.chooseCard(event.i, 'he', true);
                    ('step 3');
                    player.give(result.cards, target);
                    player.damage(event.si - event.i);
                    ('step 4');
                    player.addTempSkill('jinyong2');
                },
            },
            jiexingchenshouhu: {
                init(player) {
                    player.loseMaxHp = function (all) {
                        player.draw();
                        return game.kong;
                    };
                },
                trigger: {
                    player: ['damageBegin4', 'loseHpBegin'],
                },
                nobracket: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.countCards('he') > player.countCards('he', { type: 'basic' }) || player.countCards('he') == 0;
                },
                content() {
                    'step 0';
                    var num = trigger.num;
                    player.chooseToDiscard([0, num], 'he', '弃置至多等于损失体力数的非基本牌', function (card) {
                        return get.type(card) !== 'basic';
                    });
                    ('step 1');
                    if (!result.bool || (result.bool && result.cards.length == 0)) {
                        var num = trigger.num;
                        var cards = [];
                        for (var i = 0; i < num; i++) {
                            var card = get.cardPile(function (card) {
                                return get.type2(card) != 'basic' && !cards.includes(card);
                            });
                            if (card) cards.push(card);
                        }
                        if (cards.length) player.gain(cards, 'gain2');
                    } else {
                        trigger.num -= result.cards.length;
                        player.draw(result.cards.length);
                    }
                },
            },
            xingshisitong: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong3') && !player.hasSkill('jinyong2');
                },
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('shuijing', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('shuijing', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('shuijing', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            jiexingwenyongdong: {
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                trigger: {
                    player: 'jiemingyundiaokeAfter',
                },
                filter(event, player) {
                    return player.hasMark('shuijing') || player.hasMark('baoshi');
                },
                content() {
                    'step 0';
                    if (player.hasMark('shuijing') && player.hasMark('baoshi')) {
                        player
                            .chooseControl('移去1个<水晶>', '移去1个<宝石>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (!player.hasMark('shuijing') && player.hasMark('baoshi')) {
                            player.removeMark('baoshi', 1);
                            event.goto(2);
                        } else {
                            if (!player.hasMark('baoshi') && player.hasMark('shuijing')) {
                                player.removeMark('shuijing', 1);
                                event.goto(2);
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('shuijing');
                    } else {
                        player.removeMark('baoshi');
                    }
                    ('step 2');
                    player.draw(2);
                    ('step 3');
                    var card = get.cardPile(function (card) {
                        return get.type2(card) != 'basic';
                    });
                    if (card) {
                        player.gain(card, 'gain2');
                    }
                    ('step 4');
                    player.removeSkill('jinyong2');
                },
            },
            zhanzhenggeyao: {
                nobracket: true,
                enable: 'phaseUse',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong2');
                },
                filterTarget(card, player, target) {
                    return target != player && player.getEnemies().includes(target);
                },
                content() {
                    'step 0';
                    target.chooseToDiscard('he', true);
                    player.chooseToDiscard('he', true);
                    ('step 1');
                    game.countPlayer(function (current) {
                        if (current != player && player.getFriends().includes(current)) current.draw();
                    });
                    ('step 2');
                    player.addTempSkill('jinyong2');
                },
            },
            zhanyigongming: {
                nobracket: true,
                trigger: {
                    player: 'shaHit',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.countCards('h', 'sha') > 0;
                },
                content() {
                    'step 0';
                    player.chooseCardTarget({
                        prompt: '令一名队友获得你选定的牌',
                        filterCard: {
                            name: 'sha',
                        },
                        filterTarget(card, player, target) {
                            return target != player && target.isFriendsOf(player);
                        },
                        position: 'h',
                    });
                    ('step 1');
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.give(result.cards, target);
                        player.draw(2);
                        player.addMark('baoshi');
                    }
                },
            },
            yingxiongzhange: {
                init(player) {
                    player.storage.zhange = 0;
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + player.storage.zhange;
                    },
                },
                derivation: ['yingxiongzhangex'],
                nobracket: true,
                enable: 'phaseUse',
                group: 'yingxiongzhange_1',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return (
                        !player.hasSkill('jinyong2') &&
                        player.hasMark('baoshi') &&
                        !game.hasPlayer(function (current) {
                            return current.hasMark('yingxiongzhangex');
                        })
                    );
                },
                filterTarget(card, player, target) {
                    return target.isFriendsOf(player);
                },
                content() {
                    'step 0';
                    player.removeMark('baoshi', 1);
                    ('step 1');
                    target.addMark('yingxiongzhangex', 1);
                    player.storage.zhange += 1;
                    ('step 2');
                    lib.skill.yingxiongzhangex.checkMarkSkill();
                    ('step 3');
                    player.addTempSkill('jinyong2');
                },
                subSkill: {
                    1: {
                        trigger: {
                            player: 'phaseEnd',
                        },
                        forced: true,
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            player.storage.zhange = 0;
                        },
                        popup: false,
                    },
                },
            },
            yingxiongzhangex: {
                marktext: '希望之歌',
                intro: {
                    name: '希望之歌',
                    content: '你使用杀造成伤害时,可移除1<希望之歌>,本次伤害额外+2;回合结束时,+1护甲',
                },
                nobracket: true,
                trigger: {
                    source: 'damageBegin4',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                checkMarkSkill() {
                    game.countPlayer(function (current) {
                        if (!current.hasMark('yingxiongzhangex')) {
                            current.removeAdditionalSkill('yingxiongzhange');
                        } else if (!current.hasSkill('yingxiongzhangex')) {
                            current.addAdditionalSkill('yingxiongzhange', 'yingxiongzhangex');
                        }
                    });
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && player.hasMark('yingxiongzhangex');
                },
                content() {
                    'step 0';
                    player.removeMark('yingxiongzhangex', 1);
                    trigger.num += 2;
                    ('step 1');
                    lib.skill.yingxiongzhangex.checkMarkSkill();
                },
                group: 'yingxiongzhangex_a',
                subSkill: {
                    a: {
                        nobracket: true,
                        trigger: {
                            player: 'phaseEnd',
                        },
                        forced: true,
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            player.changeHujia();
                        },
                        popup: false,
                    },
                },
            },
            xingshizhange: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('baoshi', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('baoshi', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('baoshi', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            jiezhanzhenggeyao: {
                nobracket: true,
                enable: 'phaseUse',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong3') && !player.hasSkill('jinyong2');
                },
                filterTarget(card, player, target) {
                    return target != player && player.getEnemies().includes(target);
                },
                content() {
                    'step 0';
                    target.chooseToDiscard('he', true)._triggered = null;
                    player.chooseToDiscard('he', true);
                    ('step 1');
                    game.countPlayer(function (current) {
                        if (current != player && player.getFriends().includes(current)) current.draw();
                    });
                    ('step 2');
                    player.addTempSkills('jinyong2');
                },
                group: ['jiezhanzhenggeyao_1', 'jiezhanzhenggeyao_2'],
                subSkill: {
                    1: {
                        nobracket: true,
                        trigger: {
                            player: 'loseEnd',
                        },
                        _priority: 3,
                        popup: false,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.type == 'use' || event.type == 'respond') return false;
                            if (event.cards) {
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if ((i.original = 'hej')) return true;
                                }
                            }
                            return false;
                        },
                        content() {
                            'step 0';
                            event.list = player.getFriends().sortBySeat();
                            ('step 1');
                            var num = 0;
                            if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                if ((i.original = 'hej')) num++;
                            }
                            for (var i of game.players) {
                                if (get.attitude(i, player) <= 0) {
                                    i.chooseToDiscard('he', true, num, 'notrigger')._triggered = null;
                                }
                            }
                            ('step 2');
                            event.list = player.getFriends().sortBySeat();
                            ('step 3');
                            for (var i of game.players) {
                                if (get.attitude(i, player) <= 0) {
                                    if (i.hp <= 0) {
                                        i.dying();
                                    }
                                }
                            }
                        },
                    },
                    2: {
                        trigger: {
                            player: ['phaseZhunbeiBegin', 'phaseJieshuEnd'],
                        },
                        forced: true,
                        filter(event, player) {
                            if (!lib.inpile.includes('jisishengge')) return true;
                            return !!get.cardPile(function (card) {
                                return card.name == 'jisishengge';
                            });
                        },
                        content() {
                            let card = get.cardPile('jisishengge', 'field');
                            if (!card) {
                                card = game.createCard('jisishenggen');
                            }
                            player.equip(card);
                        },
                        silent: true,
                    },
                },
            },
            jieyingxiongzhange: {
                init(player) {
                    player.storage.zhange = 0;
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + player.storage.zhange;
                    },
                },
                derivation: ['jieyingxiongzhangex'],
                nobracket: true,
                enable: 'phaseUse',
                group: 'jieyingxiongzhange_1',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return !player.hasSkill('jinyong2') && player.hasMark('baoshi');
                },
                filterTarget(card, player, target) {
                    return target.isFriendsOf(player);
                },
                content() {
                    'step 0';
                    player.removeMark('baoshi', 1);
                    ('step 1');
                    target.addMark('jieyingxiongzhangex', 1);
                    player.storage.zhange += 1;
                    ('step 2');
                    lib.skill.jieyingxiongzhangex.checkMarkSkill();
                    ('step 3');
                    player.addTempSkills('jinyong3');
                },
                subSkill: {
                    1: {
                        trigger: {
                            player: 'phaseEnd',
                        },
                        forced: true,
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            player.storage.zhange = 0;
                        },
                        popup: false,
                    },
                },
            },
            jieyingxiongzhangex: {
                marktext: '希望之歌',
                intro: {
                    name: '希望之歌',
                    content: '你使用杀造成伤害时,可移除1<希望之歌>,本次伤害额外+2;回合结束时,回复等同于<希望之歌>数的体力,溢出的回复量改为护甲.',
                },
                nobracket: true,
                trigger: {
                    source: 'damageBegin4',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                checkMarkSkill() {
                    game.countPlayer(function (current) {
                        if (!current.hasMark('jieyingxiongzhangex')) {
                            current.removeAdditionalSkills('jieyingxiongzhange');
                        } else if (!current.hasSkill('jieyingxiongzhangex')) {
                            current.addAdditionalSkills('jieyingxiongzhange', 'jieyingxiongzhangex');
                        }
                    });
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && player.hasMark('jieyingxiongzhangex');
                },
                content() {
                    player.removeMark('jieyingxiongzhangex', 1);
                    if (
                        game.hasPlayer(function (current) {
                            return current.getEquip(5) && current.getEquip(5).name == 'jisishengge';
                        })
                    ) {
                        trigger.num += 4;
                    } else {
                        trigger.num += 2;
                    }
                    lib.skill.jieyingxiongzhangex.checkMarkSkill();
                },
                group: 'jieyingxiongzhangex_a',
                subSkill: {
                    a: {
                        nobracket: true,
                        trigger: {
                            player: 'phaseEnd',
                        },
                        forced: true,
                        silent: true,
                        lastDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            if (
                                game.hasPlayer(function (current) {
                                    return current.getEquip(5) && current.getEquip(5).name == 'jisishengge';
                                })
                            ) {
                                var nus = player.maxHp - player.hp + 1;
                                var naa = player.countMark('jieyingxiongzhangex');
                                if (2 * naa <= nus - 1) {
                                    player.hp += 2 * naa;
                                    player.update();
                                    event.finish();
                                } else {
                                    if (naa <= nus - 1 < 2 * naa) {
                                        player.hp += nus - 1;
                                        player.hujia += 2 * (2 * naa - nus + 1);
                                        player.update();
                                        event.finish();
                                    } else {
                                        if (0 < nus - 1 < naa) {
                                            player.hp += nus - 1;
                                            player.hujia += 2 * (2 * naa - nus + 1);
                                            player.update();
                                            event.finish();
                                        } else {
                                            player.hujia += (2 * naa)._triggered = null;
                                            player.update();
                                            event.finish();
                                        }
                                    }
                                }
                            } else {
                                var nps = player.maxHp - player.hp + 1;
                                var npa = player.countMark('jieyingxiongzhangex');
                                if (npa <= nps - 1) {
                                    player.hp += npa;
                                    player.update();
                                    event.finish();
                                } else {
                                    player.hp += nps;
                                    player.hujia += npa - nps + 1;
                                    player.update();
                                    event.finish();
                                }
                            }
                        },
                        popup: false,
                    },
                },
            },
            jiezhanyigongming: {
                nobracket: true,
                trigger: {
                    player: 'shaHit',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.countCards('h', 'sha') > 0;
                },
                content() {
                    'step 0';
                    player.chooseCardTarget({
                        prompt: '令一名队友获得你选定的牌',
                        filterCard: {
                            name: 'sha',
                        },
                        filterTarget(card, player, target) {
                            return target != player && target.isFriendsOf(player);
                        },
                        position: 'h',
                    });
                    ('step 1');
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.give(result.cards, target);
                        player.draw(2);
                        player.addMark('baoshi');
                    }
                    if (!result.bool) {
                        if (player.getFriends().length == 0) {
                            player.draw(3);
                        }
                    }
                },
            },
            zhujue: {
                init(player) {
                    var a = window.setInterval(function () {
                        if (player.hasSkill('zhujue')) {
                            player.storage.zhujue = true;
                        } else {
                            game.addGlobalSkill('zhujue');
                            game.addGlobalSkill('zhujue_1');
                            game.addGlobalSkill('zhujue_2');
                            player.say('休想动摇我们');
                            window.clearInterval(a);
                        }
                    }, 1000);
                },
                trigger: {
                    global: ['damageEnd', 'loseHpEnd', 'loseMaxHpEnd'],
                },
                forced: true,
                filter(event, player) {
                    if (!player.storage.zhujue) return false;
                    return player.getFriends().includes(event.player);
                },
                logTarget: 'player',
                check(event, player) {
                    if (get.attitude(player, event.player) < 5) return false;
                    if (player.maxHp - player.hp >= 2) return false;
                    if (player.hp == 1) return false;
                    if (player.hp == 2 && player.countCards('h') < 2) return false;
                    if (event.player.countCards('h') >= event.player.hp) return false;
                    return true;
                },
                content() {
                    'step 0';
                    event.count = Math.min(trigger.num, 9);
                    ('step 1');
                    event.count--;
                    player.draw(2);
                    ('step 2');
                    player.chooseCard(2, 'he', true, '交给' + get.translation(trigger.player) + '两张牌').set('ai', function (card) {
                        if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return -1;
                        if (get.tag(card, 'damage')) return 1;
                        if (get.type(card) == 'equip') return 1;
                        return 0;
                    });
                    ('step 3');
                    player.give(result.cards, trigger.player);
                    if (event.count > 0) event.goto(1);
                },
                group: ['zhujue_1', 'zhujue_2'],
                ai: {
                    threaten: 1.1,
                    expose: 0.3,
                },
                subSkill: {
                    1: {
                        trigger: {
                            player: ['damageBegin4', 'loseHpBegin', 'loseMaxHpBegin'],
                        },
                        forced: true,
                        lastDo: true,
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (!player.storage.zhujue) return false;
                            if (event.num < 2) return false;
                            return true;
                        },
                        content() {
                            game.log(player, '发动了', '#g【同心】');
                            player.popup('同心');
                            trigger.num = 2;
                            trigger.num.fixed;
                        },
                    },
                    2: {
                        trigger: {
                            source: 'gainBefore',
                        },
                        forced: true,
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        forced: true,
                        filter(event, player) {
                            if (!player.storage.zhujue) return false;
                            return event.player && event.player != player && player.getEnemies().includes(event.player);
                        },
                        content() {
                            game.log(player, '发动了', '#g【同心】');
                            player.popup('同心');
                            trigger.cancel();
                        },
                    },
                },
            },
            tongxin: {
                init(player) {
                    var a = window.setInterval(function () {
                        if (player.hasSkill('tongxin')) {
                            player.storage.tongxin = true;
                        } else {
                            game.addGlobalSkill('tongxin');
                            player.say('呵呵……妄想');
                            window.clearInterval(a);
                        }
                    }, 1000);
                },
                init2(player) {
                    var p = player;
                    var php = p.maxHp;
                    player.erea = player.maxHp;
                    p.update();
                    p.maxHp = php + php;
                    p.hp = php + php;
                    p.update();
                },
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player) {
                    if (!player.storage.tongxin) return false;
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                content() {
                    game.countPlayer(function (current) {
                        if (current != player && player.isFriendsOf(current)) {
                            current.addSkills('zhujue');
                            current.storage.zhujue = true;
                            current.maxHp = current.maxHp + player.erea;
                            current.hp = current.maxHp + player.erea;
                            current.update();
                        }
                    });
                    game.log(player, '令所有友方角色获得了技能', '#g【助绝】');
                },
            },
            zhugu: {
                init(player) {
                    var a = window.setInterval(function () {
                        if (player.hasSkill('zhugu')) {
                            player.storage.zhugu = true;
                        } else {
                            game.addGlobalSkill('zhugu');
                            game.addGlobalSkill('zhugu_1');
                            player.say('我……注定孤独');
                            window.clearInterval(a);
                        }
                    }, 1000);
                },
                group: ['zhugu_1'],
                trigger: {
                    global: 'dieAfter',
                },
                forced: true,
                filter(event, player) {
                    if (!player.storage.zhugu) return false;
                    return !player.hasSkill('tiandao_zhugu') && player.getFriends().length == 0 && event.player != player;
                },
                content() {
                    player.addSkills('tiandao_zhugu');
                },
                subSkill: {
                    1: {
                        trigger: {
                            global: 'gameStart',
                        },
                        forced: true,
                        filter(event, player) {
                            if (!player.storage.zhugu) return false;
                            return !player.hasSkill('tiandao_zhugu') && player.getFriends().length == 0;
                        },
                        content() {
                            player.addSkills('tiandao_zhugu');
                        },
                    },
                },
            },
            tiandao_zhugu: {
                trigger: {
                    global: 'useCard',
                },
                init(player) {
                    player.storage.td = 0;
                    player.storage.tiandao_zhugu_1 = [];
                    player.storage.zhugutiandao = true;
                },
                init2(player) {
                    var a = window.setInterval(function () {
                        if (player.hasSkill('tiandao_zhugu')) {
                            player.storage.zhugutiandao = true;
                        } else {
                            game.addGlobalSkill('tiandao_zhugu');
                            game.addGlobalSkill('tiandao_zhugu_2');
                            player.storage.zhugutiandao = true;
                            player.say('我……注定孤独');
                            window.clearInterval(a);
                        }
                    }, 1000);
                },
                group: 'tiandao_zhugu_2',
                onremove(player) {
                    game.over(true);
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                usable: 4,
                filter(event, player) {
                    if (!player.storage.zhugutiandao) return false;
                    return get.type2(event.card) != 'equip' && !player.getStorage('tiandao_zhugu').includes(event.card.name);
                },
                content() {
                    'step 0';
                    player.addTempSkill('tiandao_zhugu_4');
                    player.chooseControl().set('choiceList', ['令' + get.translation(trigger.card) + '无效', '令' + get.translation(trigger.card) + '不可响应']);
                    ('step 1');
                    if (result.index == 0) {
                        trigger.targets.length = 0;
                        if (trigger.card.name == 'shan' || trigger.card.name == 'wuxie') trigger.cancel();
                        game.log('' + get.translation(trigger.player) + '使用的【' + get.translation(trigger.card) + '】失效');
                    } else {
                        game.log(trigger.card, '不可被响应');
                        trigger.directHit.addArray(game.filterPlayer());
                    }
                    player.markAuto('tiandao_zhugu', [trigger.card.name]);
                    player.chooseControl().set('choiceList', ['令本回合' + get.translation(trigger.card.name) + '不能指定你为目标', '你视为使用' + get.translation(trigger.card.name) + '(若不可使用则摸一张牌)']);
                    ('step 2');
                    if (result.index == 0) {
                        player.storage.tiandao_zhugu_1.add(trigger.card.name);
                        player.update();
                        player.addTempSkill('tiandao_zhugu_1');
                        player.markAuto('tiandao_zhugu_1', player.storage.tiandao_zhugu_1);
                        event.finish();
                    } else {
                        var list = [];
                        list.add(trigger.card.name);
                        player.chooseButton(
                            [
                                '天道:选择要使用的牌(点击取消摸一张牌)',
                                [
                                    list.map(function (name) {
                                        return [get.type(trigger.card), '', name];
                                    }),
                                    'vcard',
                                ],
                            ],
                            function (button) {
                                return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                            },
                            function (button) {
                                return _status.event.player.hasUseTarget({ name: button.link[2], nature: button.link[3] });
                            }
                        );
                    }
                    ('step 3');
                    if (!result.bool) player.draw();
                    else player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, false, true, 'nodistance');
                },
                subSkill: {
                    1: {
                        mod: {
                            targetEnabled(card, player, target) {
                                if (target.getStorage('tiandao_zhugu_1').includes(card.name)) return false;
                            },
                        },
                        onremove(player) {
                            player.storage.tiandao_zhugu_1 = [];
                        },
                        mark: true,
                        intro: {
                            content(event, player) {
                                return '本回合' + get.translation(player.storage.tiandao_zhugu_1) + '不能指定你为目标';
                            },
                        },
                    },
                    2: {
                        trigger: {
                            global: ['damageBegin', 'loseHpBegin'],
                        },
                        usable: 2,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (!player.storage.zhugutiandao) return false;
                            return true;
                        },
                        content() {
                            trigger.cancel();
                            player.storage.td = player.hp;
                            player.addTempSkill('tiandao_zhugu_3');
                        },
                    },
                    3: {
                        trigger: {
                            player: ['damageEnd', 'loseHpEnd', 'recoverBegin'],
                        },
                        forced: true,
                        content() {
                            player.hp = player.storage.td;
                            player.update();
                        },
                    },
                    4: {
                        onremove(player) {
                            player.unmarkAuto('tiandao_zhugu', player.getStorage('tiandao_zhugu'));
                        },
                    },
                },
                intro: {
                    content: '已记录牌名:$',
                },
            },
            cmlunhuisx: {
                init(player) {
                    player.storage.xiuluosx = false;
                    player.storage.renjiansx = false;
                },
                trigger: {
                    player: 'phaseBegin',
                },
                nobracket: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                silent: true,
                fixed: true,
                filter(event, player) {
                    return !player.storage.xiuluosx && !player.storage.renjiansx;
                },
                content() {
                    'step 0';
                    player.chooseToDiscard(1, '弃1张牌以选择进入形态', true);
                    player
                        .chooseControl('进入【修罗道】形态', '进入【人间道】形态')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            var num = [0, 1].randomGet();
                            return num;
                        });
                    ('step 1');
                    if (result.index == 0) {
                        player.storage.xiuluosx = true;
                    } else player.storage.renjiansx = true;
                    ('step 2');
                    player.draw(3);
                },
            },
            cmxiuluodao: {
                mod: {
                    cardEnabled(card, player) {
                        if (player.storage.xiuluosx && get.type2(card) == 'trick' && get.tag(card, 'damage') > 0) return false;
                    },
                    cardUsable(card, player) {
                        if (player.storage.xiuluosx && get.type2(card) == 'trick' && get.tag(card, 'damage') > 0) return false;
                    },
                },
                trigger: {
                    source: 'damageBegin4',
                },
                group: 'cmxiuluodao_1',
                nobracket: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                silent: true,
                fixed: true,
                filter(event, player) {
                    return player.storage.xiuluosx && event.player != player && event.card && event.card.name == 'sha';
                },
                content() {
                    trigger.num += 2;
                    game.playJQaAudio('cmxiuluodao');
                },
                subSkill: {
                    1: {
                        trigger: {
                            player: 'damageEnd',
                        },
                        nobracket: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        silent: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.card && (event.card.name = 'sha') && player.storage.xiuluosx && event.source != player) return true;
                        },
                        async content(event, trigger, player) {
                            player.storage.xiuluosx = false;
                        },
                    },
                },
            },
            cmrenjiandao: {
                trigger: {
                    source: 'damageBegin',
                },
                group: 'cmrenjiandao_1',
                nobracket: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                silent: true,
                fixed: true,
                filter(event, player) {
                    return event.player != player && player.storage.renjiansx;
                },
                content() {
                    trigger.untrigger();
                    trigger.finish();
                    trigger.player.loseMaxHp(trigger.num);
                    game.playJQaAudio('cmrenjiandao');
                },
                subSkill: {
                    1: {
                        trigger: {
                            player: 'phaseBefore',
                        },
                        nobracket: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        silent: true,
                        fixed: true,
                        filter(event, player) {
                            return player.storage.renjiansx;
                        },
                        async content(event, trigger, player) {
                            player.storage.renjiansx = false;
                        },
                    },
                },
            },
            cmdiyudao: {
                trigger: {
                    source: 'damageBefore',
                },
                nobracket: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                silent: true,
                fixed: true,
                filter(event, player) {
                    return event.player != player && event.player.hp > player.hp;
                },
                async content(event, trigger, player) {
                    game.playJQaAudio('cmdiyudao');
                    trigger.num++;
                    await player.recover();
                },
            },
            cmeguidao: {
                nobracket: true,
                trigger: {
                    player: ['loseHpBefore', 'loseMaxHpBefore'],
                },
                forced: true,
                lastDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    trigger.cancel();
                    game.playJQaAudio('cmeguidao');
                },
                group: ['cmeguidao_1', 'cmeguidao_2', 'cmeguidao_3'],
                subSkill: {
                    1: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        lastDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.num < 2) return false;
                            return true;
                        },
                        async content(event, trigger, player) {
                            trigger.num = 2;
                            trigger.num.fixed;
                            player.changeHujia();
                            game.playJQaAudio('cmeguidao');
                        },
                    },
                    2: {
                        trigger: {
                            player: 'damageEnd',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.hujia && !event.player.hujia && event.player.isIn() && event.player == player;
                        },
                        async content(event, trigger, player) {
                            if (player.hp == player.maxHp) {
                                await player.changeHujia();
                            } else {
                                await player.recover();
                            }
                        },
                    },
                    3: {
                        trigger: {
                            player: 'dieBefore',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return player.hp > 0;
                        },
                        content() {
                            trigger.cancel();
                            game.playJQaAudio('cmeguidao');
                        },
                    },
                },
            },
            cmwanxiangtianyin: {
                trigger: {
                    global: 'shaBefore',
                },
                nobracket: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                _priority: 5,
                filter(event, player) {
                    return player != event.target && player != event.player;
                },
                content() {
                    'step 0';
                    var save = false;
                    if (get.attitude(player, trigger.target) > 2) {
                        if (player.countCards('h', 'shan') || player.getEquip(2) || trigger.target.hp == 1 || player.hp > trigger.target.hp + 1) {
                            if (!trigger.target.countCards('h', 'shan') || trigger.target.countCards('h') < player.countCards('h')) {
                                save = true;
                            }
                        }
                    }
                    player.draw();
                    var next = player.chooseToDiscard('he', get.prompt('cmwanxiangtianyin'));
                    next.ai = function (card) {
                        if (save) {
                            return 7 - get.value(card);
                        }
                        return 0;
                    };
                    ('step 1');
                    if (result.bool) {
                        trigger.target = player;
                    }
                },
                ai: {
                    effect: {
                        target_use(card) {
                            if (card.name == 'sha') return 1.3;
                        },
                    },
                },
                _priority: 500,
            },
            xingshichangmen: {
                trigger: {
                    player: 'phaseUseBefore',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    trigger.cancel();
                    if (player.countCards('he') < 3) {
                        player
                            .chooseControl('摸3张牌')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        player
                            .chooseControl('摸3张牌', '弃置3张牌并视为使用一张无距离限制的杀')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(3, true);
                        player.addMark('baoshi', 2);
                    } else {
                        if (player.countCards('he') >= 3) {
                            player.chooseToDiscard(3, 'he', true);
                            player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                            player.addMark('baoshi', 3);
                        } else {
                            player.draw(3, true);
                            player.addMark('baoshi', 2);
                        }
                    }
                    ('step 2');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = trigger.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        game.log(evt.player, '结束了回合');
                        evt.finish();
                        evt.untrigger(true);
                    }
                },
            },
            cmshenluotianzheng: {
                trigger: {
                    global: 'damageBefore',
                },
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.player.isFriendsOf(player) && player.hasMark('baoshi');
                },
                async content(event, trigger, player) {
                    player.removeMark('baoshi');
                    trigger.untrigger();
                    trigger.finish();
                    game.playJQaAudio('cmshenluotianzheng');
                    game.countPlayer(function (current) {
                        if (current.isEnemiesOf(player)) current.damage('nocard');
                    });
                },
            },
            cmdibaotianxing: {
                enable: 'phaseUse',
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filterTarget(card, player, target) {
                    return target != player;
                },
                filter(event, player, card) {
                    return (
                        player.hasMark('baoshi') &&
                        !game.hasPlayer(function (current) {
                            return current.hasMark('cmdibaotianxingsx');
                        })
                    );
                },
                content() {
                    'step 0';
                    if (player.countMark('baoshi') == 1) {
                        player
                            .chooseControl('移除1个<宝石>')
                            .set('prompt', '请选择一项')
                            .set('ai', function () {
                                return 1;
                            });
                    } else {
                        if (player.countMark('baoshi') == 2) {
                            player
                                .chooseControl('移除1个<宝石>', '移除2个<宝石>')
                                .set('prompt', '请选择一项')
                                .set('ai', function () {
                                    return 1;
                                });
                        } else {
                            if (player.countMark('baoshi') >= 3) {
                                player
                                    .chooseControl('移除1个<宝石>', '移除2个<宝石>', '移除3个<宝石>')
                                    .set('prompt', '请选择一项')
                                    .set('ai', function () {
                                        return 1;
                                    });
                            }
                        }
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('baoshi', 1, true);
                        player.chooseToDiscard(2, '弃置2张基本牌', function (card) {
                            return get.type(card) == 'basic';
                        });
                        event.goto(2);
                    }
                    if (result.index == 1) {
                        player.removeMark('baoshi', 2, true);
                        player.chooseToDiscard('弃置1张基本牌', function (card) {
                            return get.type(card) == 'basic';
                        });
                        event.goto(3);
                    }
                    if (result.index == 2) {
                        player.removeMark('baoshi', 3, true);
                        game.playJQaAudio('cmdibaotianxing');
                        target.addMark('cmdibaotianxingsx');
                    }
                    ('step 2');
                    if (!result.bool) {
                        player.addMark('baoshi');
                    } else {
                        target.addMark('cmdibaotianxingsx');
                        game.playJQaAudio('cmdibaotianxing');
                    }
                    event.goto(4);
                    ('step 3');
                    if (!result.bool) {
                        player.addMark('baoshi', 2);
                    } else {
                        target.addMark('cmdibaotianxingsx');
                        game.playJQaAudio('cmdibaotianxing');
                    }
                    event.goto(4);
                    ('step 4');
                    event.finish();
                },
            },
            cmdibaotianxingsx: {
                marktext: '地爆天星',
                intro: {
                    name: '地爆天星',
                    content: '下一回合被封印',
                },
            },
            siji_yijie: {
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                xikiyouku: true,
                group: ['siji_yijie_tao', 'siji_yijie_taoyuan', 'siji_yijie_directHit'],
                subSkill: {
                    tao: {
                        enable: 'chooseToUse',
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        xikiyouku: true,
                        filter(event, player) {
                            return player.countCards('he');
                        },
                        viewAs: {
                            name: 'tao',
                        },
                        position: 'hes',
                        selectCard: 1,
                        filterCard: true,
                        mark: false,
                        prompt: '视为使用一张桃',
                        ai: {
                            basic: {
                                order(card, player) {
                                    if (player.hasSkillTag('pretao')) return 5;
                                    return 2;
                                },
                                useful: [6.5, 4, 3, 2],
                                value: [6.5, 4, 3, 2],
                            },
                            result: {
                                target: 2,
                                target_use(player, target) {
                                    if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                    var nd = player.needsToDiscard();
                                    var keep = false;
                                    if (nd <= 0) {
                                        keep = true;
                                    } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                        keep = true;
                                    }
                                    var mode = get.mode();
                                    if (target.hp >= 2 && keep && target.hasFriend()) {
                                        if (target.hp > 2 || nd == 0) return 0;
                                        if (target.hp == 2) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    if (target != current && get.attitude(target, current) >= 3) {
                                                        if (current.hp <= 1) return true;
                                                        if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                    }
                                                })
                                            ) {
                                                return 0;
                                            }
                                        }
                                    }
                                    if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                    var att = get.attitude(player, target);
                                    if (att < 3 && att >= 0 && player != target) return 0;
                                    var tri = _status.event.getTrigger();
                                    if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                        if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                            var num = game.countPlayer(function (current) {
                                                if (current.identity == 'fan') {
                                                    return current.countCards('h', 'tao');
                                                }
                                            });
                                            if (num > 1 && player == target) return 2;
                                            return 0;
                                        }
                                    }
                                    if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                        if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                            return 0;
                                        }
                                    }
                                    if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                                        return 0;
                                    }
                                    return 2;
                                },
                            },
                            tag: {
                                recover: 1,
                                save: 1,
                            },
                        },
                    },
                    taoyuan: {
                        enable: 'chooseToUse',
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        xikiyouku: true,
                        filter(event, player) {
                            return player.countCards('he');
                        },
                        mark: false,
                        viewAs: {
                            name: 'taoyuan',
                        },
                        position: 'hes',
                        selectCard: 1,
                        filterCard: true,
                        prompt: '视为使用一张桃园结义',
                        ai: {
                            basic: {
                                order() {
                                    return 11;
                                },
                                useful: [3, 1],
                                value: 0,
                            },
                            result: {
                                target(player, target) {
                                    return target.hp < target.maxHp ? 2 : 0;
                                },
                            },
                            tag: {
                                recover: 0.5,
                                multitarget: 1,
                            },
                        },
                    },
                    directHit: {
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        xikiyouku: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'taoyuan';
                        },
                        forced: true,
                        content() {
                            trigger.directHit.addArray(game.players);
                            game.log(trigger.card, '不可被响应');
                        },
                    },
                },
            },
            siji_xiaohun: {
                trigger: {
                    global: 'recoverAfter',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                xikiyouku: true,
                filter(event, player, name) {
                    return _status.currentPhase == player && event.player != player;
                },
                logTarget: 'target',
                content() {
                    'step 0';
                    player
                        .chooseControl('弃置该角色x张牌', '令该角色使用或打出的【杀】和【桃】无效直至该角色下回合结束')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 1;
                        });
                    ('step 1');
                    if (result.index == 0) {
                        var num = trigger.player.hp;
                        player.discardPlayerCard(trigger.player, 'he', num, true);
                    } else {
                        trigger.player.addTempSkill('siji_xiaohun_noUse', { player: 'phaseAfter' });
                    }
                },
            },
            siji_xiaohun_noUse: {
                trigger: {
                    player: ['shaBegin', 'taoBegin', 'respondShaBegin', 'respondTaoBegin'],
                },
                skillname: '枭魂',
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                xikiyouku: true,
                content() {
                    trigger.cancel();
                },
            },
            siji_huoyi: {
                trigger: {
                    global: 'damageBegin4',
                },
                charlotte: true,
                group: 'siji_huoyi_jieshu',
                filter(event, player) {
                    if (event.nature !== 'fire' && player.countCards('he') >= event.num && player.storage.siji_huobian != 1) return true;
                },
                content() {
                    'step 0';
                    player.chooseToDiscard(trigger.num, 'he', true);
                    player.storage.siji_huoyi = 1;
                    player.storage.siji_huobian = 2;
                    ('step 1');
                    trigger.nature = 'fire';
                    trigger.num += 1;
                },
                subSkill: {
                    jieshu: {
                        trigger: {
                            global: 'damageAfter',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            player.storage.siji_huoyi = 2;
                            player.storage.siji_huobian = 2;
                        },
                        popup: false,
                    },
                },
            },
            siji_huobian: {
                trigger: {
                    global: 'damageBegin4',
                },
                charlotte: true,
                group: 'siji_huobian_jieshu',
                filter: (event, player) => player.storage.siji_huoyi != 1 && event.nature == 'fire',
                content() {
                    'step 0';
                    var nus = trigger.num;
                    player.draw(nus, true);
                    trigger.nature = 0;
                    player.storage.siji_huoyi = 2;
                    player.storage.siji_huobian = 1;
                    ('step 1');
                    player
                        .chooseControl('令此伤害+1', '令此伤害-1')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 2;
                        });
                    ('step 2');
                    if (result.index == 0) {
                        trigger.num += 1;
                    } else trigger.num -= 1;
                },
                subSkill: {
                    jieshu: {
                        trigger: {
                            global: 'damageAfter',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            player.storage.siji_huoyi = 2;
                            player.storage.siji_huobian = 2;
                        },
                        popup: false,
                    },
                },
            },
            siji_leiyi: {
                trigger: {
                    global: 'damageBegin4',
                },
                charlotte: true,
                group: 'siji_leiyi_jieshu',
                filter(event, player) {
                    if (event.nature !== 'thunder' && player.countCards('he') >= event.num && player.storage.siji_leibian != 1) return true;
                },
                content() {
                    'step 0';
                    player.chooseToDiscard(trigger.num, 'he', true);
                    player.storage.siji_leiyi = 1;
                    player.storage.siji_leibian = 2;
                    ('step 1');
                    trigger.nature = 'thunder';
                    trigger.num += 1;
                },
                subSkill: {
                    jieshu: {
                        trigger: {
                            global: 'damageAfter',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            player.storage.siji_leiyi = 2;
                            player.storage.siji_leibian = 2;
                        },
                        popup: false,
                    },
                },
            },
            siji_leibian: {
                trigger: {
                    global: 'damageBegin4',
                },
                charlotte: true,
                group: 'siji_leibian_jieshu',
                filter: (event, player) => player.storage.siji_leiyi != 1 && event.nature == 'thunder',
                content() {
                    'step 0';
                    var nus = trigger.num;
                    player.draw(nus, true);
                    trigger.nature = 0;
                    player.storage.siji_leibian = 1;
                    player.storage.siji_leiyi = 2;
                    ('step 1');
                    player
                        .chooseControl('令此伤害+1', '令此伤害-1')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 2;
                        });
                    ('step 2');
                    if (result.index == 0) {
                        trigger.num += 1;
                    } else trigger.num -= 1;
                },
                subSkill: {
                    jieshu: {
                        trigger: {
                            global: 'damageAfter',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            player.storage.siji_leibian = 2;
                            player.storage.siji_leiyi = 2;
                        },
                        popup: false,
                    },
                },
            },
            siji_shibian: {
                trigger: {
                    global: 'loseHpBefore',
                },
                charlotte: true,
                group: 'siji_shibian_jieshu',
                filter: (event, player) => player.storage.siji_shiyi != 1,
                content() {
                    'step 0';
                    var nus = trigger.num;
                    player.draw(nus, true);
                    player.storage.siji_shibian = 1;
                    player.storage.siji_shiyi = 2;
                    trigger.cancel();
                    ('step 1');
                    player
                        .chooseControl('令此伤害+1', '令此伤害-1')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 2;
                        });
                    ('step 2');
                    if (result.index == 0) {
                        var nus = trigger.num;
                        trigger.player.damage(nus + 1, 'nosource');
                    } else {
                        var nus = trigger.num;
                        trigger.player.damage(nus - 1, 'nosource');
                    }
                },
                subSkill: {
                    jieshu: {
                        trigger: {
                            global: 'damageAfter',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            player.storage.siji_shibian = 2;
                            player.storage.siji_shiyi = 2;
                        },
                        popup: false,
                    },
                },
            },
            siji_shiyi: {
                trigger: {
                    global: 'damageBegin4',
                },
                charlotte: true,
                group: 'siji_shiyi_jieshu',
                filter(event, player) {
                    if (player.countCards('he') >= event.num && player.storage.siji_shibian != 1) return true;
                },
                content() {
                    'step 0';
                    player.chooseToDiscard(trigger.num, 'he', true);
                    player.storage.siji_shiyi = 1;
                    player.storage.siji_shibian = 2;
                    ('step 1');
                    var nus = 1 + trigger.num;
                    trigger.cancel();
                    trigger.player.loseHp(nus);
                },
                subSkill: {
                    jieshu: {
                        trigger: {
                            global: 'loseHpAfter',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            player.storage.siji_shiyi = 2;
                            player.storage.siji_shibian = 2;
                        },
                        popup: false,
                    },
                },
            },
            siji_shenyi: {
                trigger: {
                    global: 'damageBegin1',
                },
                charlotte: true,
                group: 'siji_shenyi_jieshu',
                filter(event, player) {
                    if (event.nature !== 'kami' && player.countCards('he') >= event.num && player.storage.siji_shenbian != 1) return true;
                },
                content() {
                    'step 0';
                    player.chooseToDiscard(trigger.num, 'he', true);
                    player.storage.siji_shenyi = 1;
                    player.storage.siji_shenbian = 2;
                    ('step 1');
                    trigger.nature = 'kami';
                    trigger.num += 1;
                },
                subSkill: {
                    jieshu: {
                        trigger: {
                            global: 'damageAfter',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            player.storage.siji_shenyi = 2;
                            player.storage.siji_shenbian = 2;
                        },
                        popup: false,
                    },
                },
            },
            siji_shenbian: {
                trigger: {
                    global: 'damageBegin4',
                },
                charlotte: true,
                group: 'siji_shenbian_jieshu',
                filter: (event, player) => player.storage.siji_shenyi != 1 && event.nature == 'kami',
                content() {
                    'step 0';
                    var nus = trigger.num;
                    player.draw(nus, true);
                    trigger.nature = 0;
                    player.storage.siji_shenbian = 1;
                    player.storage.siji_shenyi = 2;
                    ('step 1');
                    player
                        .chooseControl('令此伤害+1', '令此伤害-1')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 2;
                        });
                    ('step 2');
                    if (result.index == 0) {
                        trigger.num += 1;
                    } else trigger.num -= 1;
                },
                subSkill: {
                    jieshu: {
                        trigger: {
                            global: 'damageAfter',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            player.storage.siji_shenyi = 2;
                            player.storage.siji_shenbian = 2;
                        },
                        popup: false,
                    },
                },
            },
            siji_bingyi: {
                trigger: {
                    global: 'damageBegin4',
                },
                charlotte: true,
                group: 'siji_bingyi_jieshu',
                filter(event, player) {
                    if (event.nature !== 'ice' && player.countCards('he') >= event.num && player.storage.siji_bingbian != 1) return true;
                },
                content() {
                    'step 0';
                    player.chooseToDiscard(trigger.num, 'he', true);
                    player.storage.siji_bingyi = 1;
                    player.storage.siji_bingbian = 2;
                    ('step 1');
                    trigger.nature = 'ice';
                    trigger.num += 1;
                },
                subSkill: {
                    jieshu: {
                        trigger: {
                            global: 'damageAfter',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            player.storage.siji_bingyi = 2;
                            player.storage.siji_bingbian = 2;
                        },
                        popup: false,
                    },
                },
            },
            siji_bingbian: {
                trigger: {
                    global: 'damageBegin4',
                },
                charlotte: true,
                group: 'siji_bingbian_jieshu',
                filter: (event, player) => player.storage.siji_bingyi != 1 && event.nature == 'ice',
                content() {
                    'step 0';
                    var nus = trigger.num;
                    player.draw(nus, true);
                    trigger.nature = 0;
                    player.storage.siji_bingbian = 1;
                    player.storage.siji_bingyi = 2;
                    ('step 1');
                    player
                        .chooseControl('令此伤害+1', '令此伤害-1')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 2;
                        });
                    ('step 2');
                    if (result.index == 0) {
                        trigger.num += 1;
                    } else trigger.num -= 1;
                },
                subSkill: {
                    jieshu: {
                        trigger: {
                            global: 'damageAfter',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            player.storage.siji_bingyi = 2;
                            player.storage.siji_bingbian = 2;
                        },
                        popup: false,
                    },
                },
            },
            siji_yibian: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                forced: true,
                superCharlotte: true,
                content() {
                    'step 0';
                    var list = ['siji_yibianshi', 'siji_yibianshen', 'siji_yibianhuo', 'siji_yibianlei', 'siji_yibianbing'];
                    player.chooseControl(list).set('dialog', ['请选择一张疑变武将牌,替换之', [list, 'character']]);
                    ('step 1');
                    player.init(result.control);
                },
                group: 'siji_yibian_before',
                subSkill: {
                    before: {
                        trigger: {
                            global: 'phaseBegin',
                        },
                        forced: true,
                        content() {
                            'step 0';
                            event.list = ['siji_yibianshi', 'siji_yibianshen', 'siji_yibianhuo', 'siji_yibianlei', 'siji_yibianbing'];
                            event.num = player.hp;
                            if (event.list.includes(player.name)) {
                                event.list.remove(player.name);
                                player.chooseControl(event.list).set('dialog', ['请选择一张非当前武将牌的疑变武将牌,替换之', [event.list, 'character']]);
                            } else {
                                player.init(event.list.randomGet());
                                event.goto(2);
                            }
                            ('step 1');
                            player.init(result.control);
                            ('step 2');
                            if (player.maxHp > event.num) {
                                player.hp = event.num;
                                player.update();
                            }
                        },
                    },
                },
            },
            gaodatt: {
                audio: 'longhun',
                enable: ['chooseToUse', 'chooseToRespond'],
                prompt: '将♦️️牌当做杀,♥️️牌当做桃,♣️️牌当做闪,♠️️牌当做无懈可击使用或打出',
                viewAs(cards, player) {
                    var name = false;
                    var nature = null;
                    switch (cards[0]?.suit) {//QQQ
                        case 'club':
                            name = 'shan';
                            break;
                        case 'diamond':
                            name = 'sha';
                            nature = 'fire';
                            break;
                        case 'spade':
                            name = 'wuxie';
                            break;
                        case 'heart':
                            name = 'tao';
                            break;
                    }
                    if (name) return { name: name, nature: nature };
                    return null;
                },
                check(card) {
                    var player = _status.event.player;
                    if (_status.event.type == 'phase') {
                        var max = 0;
                        var name2;
                        var list = ['sha', 'tao'];
                        var map = { sha: 'diamond', tao: 'heart' };
                        for (var i = 0; i < list.length; i++) {
                            var name = list[i];
                            if (
                                player.countCards('hes', function (card) {
                                    return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                }) > 0 &&
                                player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                            ) {
                                var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                if (temp > max) {
                                    max = temp;
                                    name2 = map[name];
                                }
                            }
                        }
                        if (name2 == card.suit) return name2 == 'diamond' ? 5 - get.value(card) : 20 - get.value(card);
                        return 0;
                    }
                    return 1;
                },
                position: 'hes',
                filterCard(card, player, event) {
                    event = event || _status.event;
                    var filter = event._backup.filterCard;
                    var name = card.suit;
                    if (name == 'club' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                    if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
                    if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
                    if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                    return false;
                },
                filter(event, player) {
                    var filter = event.filterCard;
                    if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hes', { suit: 'diamond' })) return true;
                    if (filter({ name: 'shan' }, player, event) && player.countCards('hes', { suit: 'club' })) return true;
                    if (filter({ name: 'tao' }, player, event) && player.countCards('hes', { suit: 'heart' })) return true;
                    if (filter({ name: 'wuxie' }, player, event) && player.countCards('hes', { suit: 'spade' })) return true;
                    return false;
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag) {
                        var name;
                        switch (tag) {
                            case 'respondSha':
                                name = 'diamond';
                                break;
                            case 'respondShan':
                                name = 'club';
                                break;
                            case 'save':
                                name = 'heart';
                                break;
                        }
                        if (!player.countCards('hes', { suit: name })) return false;
                    },
                    order(item, player) {
                        if (player && _status.event.type == 'phase') {
                            var max = 0;
                            var list = ['sha', 'tao'];
                            var map = { sha: 'diamond', tao: 'heart' };
                            for (var i = 0; i < list.length; i++) {
                                var name = list[i];
                                if (
                                    player.countCards('hes', function (card) {
                                        return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                    }) > 0 &&
                                    player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                ) {
                                    var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                    if (temp > max) max = temp;
                                }
                            }
                            max /= 1.1;
                            return max;
                        }
                        return 2;
                    },
                },
                hiddenCard(player, name) {
                    if (name == 'wuxie' && _status.connectMode && player.countCards('hes') > 0) return true;
                    if (name == 'wuxie') return player.countCards('hes', { suit: 'spade' }) > 0;
                    if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0;
                },
            },
            tiandao_Angel: {
                trigger: {
                    global: 'useCard',
                },
                group: 'tiandao_Angel_2',
                init(player) {
                    player.storage.td = 0;
                    player.storage.tiandao_Angel_1 = [];
                },
                onremove(player) {
                    game.over(true);
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                usable: 4,
                filter(event, player) {
                    return get.type2(event.card) != 'equip' && !player.getStorage('tiandao_Angel').includes(event.card.name);
                },
                content() {
                    'step 0';
                    player.addTempSkill('tiandao_Angel_4');
                    player.chooseControl().set('choiceList', ['令' + get.translation(trigger.card) + '无效', '令' + get.translation(trigger.card) + '不可响应']);
                    ('step 1');
                    if (result.index == 0) {
                        trigger.targets.length = 0;
                        if (trigger.card.name == 'shan' || trigger.card.name == 'wuxie') trigger.cancel();
                        game.log('' + get.translation(trigger.player) + '使用的【' + get.translation(trigger.card) + '】失效');
                    } else {
                        game.log(trigger.card, '不可被响应');
                        trigger.directHit.addArray(game.filterPlayer());
                    }
                    player.markAuto('tiandao_Angel', [trigger.card.name]);
                    player.chooseControl().set('choiceList', ['令本回合' + get.translation(trigger.card.name) + '不能指定你', '你视为使用' + get.translation(trigger.card.name) + '(若不可使用则摸一张牌)']);
                    ('step 2');
                    if (result.index == 0) {
                        player.storage.tiandao_Angel_1.add(trigger.card.name);
                        player.update();
                        player.addTempSkill('tiandao_Angel_1');
                        player.markAuto('tiandao_Angel_1', player.storage.tiandao_Angel_1);
                        event.finish();
                    } else {
                        var list = [];
                        list.add(trigger.card.name);
                        player.chooseButton(
                            [
                                '天道:选择要使用的牌(点击取消摸一张牌)',
                                [
                                    list.map(function (name) {
                                        return [get.type(trigger.card), '', name];
                                    }),
                                    'vcard',
                                ],
                            ],
                            function (button) {
                                return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                            },
                            function (button) {
                                return _status.event.player.hasUseTarget({ name: button.link[2], nature: button.link[3] });
                            }
                        );
                    }
                    ('step 3');
                    if (!result.bool) player.draw();
                    else player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, false, true, 'nodistance');
                },
                subSkill: {
                    1: {
                        mod: {
                            targetEnabled(card, player, target) {
                                if (target.getStorage('tiandao_Angel_1').includes(card.name)) return false;
                            },
                        },
                        onremove(player) {
                            player.storage.tiandao_Angel_1 = [];
                        },
                        mark: true,
                        intro: {
                            content(event, player) {
                                return '本回合' + get.translation(player.storage.tiandao_Angel_1) + '不可指定你';
                            },
                        },
                    },
                    2: {
                        trigger: {
                            global: ['damageBegin', 'loseHpBegin'],
                        },
                        usable: 2,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            trigger.cancel();
                            player.storage.td = player.hp;
                            player.addTempSkill('tiandao_Angel_3');
                        },
                    },
                    3: {
                        trigger: {
                            player: ['damageEnd', 'loseHpEnd', 'recoverBegin'],
                        },
                        forced: true,
                        content() {
                            player.hp = player.storage.td;
                            player.update();
                        },
                    },
                    4: {
                        onremove(player) {
                            player.unmarkAuto('tiandao_Angel', player.getStorage('tiandao_Angel'));
                        },
                    },
                },
                intro: {
                    content: '已记录牌名:$',
                },
            },
            siji_daohui: {
                trigger: {
                    player: 'dieBefore',
                },
                forced: true,
                charlotte: true,
                superCharlotte: true,
                fixed: true,
                mark: true,
                intro: {
                    content: 'limited',
                },
                limited: true,
                init(player, skill) {
                    player.storage[skill] = false;
                },
                content() {
                    'step 0';
                    trigger.cancel();
                    ('step 1');
                    var num = 2 - player.hp;
                    player.recover(num);
                    ('step 2');
                    player.storage.siji_daohui = true;
                    player.awakenSkill('siji_daohui');
                },
            },
            siji_xuelan: {
                mod: {
                    targetInRange(card, player, target) {
                        return true;
                    },
                },
                init(player) {
                    player.$disableJudge();
                    player.disableJudge();
                },
                audio: 'ext:死星/audio:2',
                trigger: {
                    player: ['taoBegin', 'jiuBegin', 'shaBegin'],
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    if (event.player == player) return true;
                    return false;
                },
                content() {
                    trigger.baseDamage++;
                },
                group: ['siji_xuelan_1', 'siji_xuelan_2', 'siji_xuelan_3', 'siji_xuelan_4'],
                subSkill: {
                    1: {
                        trigger: {
                            player: ['recoverBegin'],
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            trigger.num++;
                        },
                    },
                    2: {
                        trigger: {
                            player: ['phaseZhunbeiBegin'],
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter: (event, player) => !player.hasCard('tao', 'h'),
                        content() {
                            player.draw();
                            var list = ['tao'];
                            player.gain(game.createCard(list.randomGet()));
                            player.$draw();
                            player.draw();
                        },
                    },
                    3: {
                        trigger: {
                            player: 'loseMaxHpBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            trigger.cancel();
                        },
                    },
                    4: {
                        trigger: {
                            player: 'phaseBegin',
                        },
                        forced: true,
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        forced: true,
                        content() {
                            game.countPlayer(function (current) {
                                if (current != player) current.addTempSkill('baiban');
                            });
                        },
                        popup: false,
                    },
                },
            },
            siji_tianyi: {
                audio: 'ext:死星/audio:2',
                trigger: {
                    global: 'judge',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.draw(2);
                    player
                        .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('siji_tianyi'), 'hes', function (card) {
                            var player = _status.event.player;
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                            if (mod != 'unchanged') return mod;
                            return true;
                        })
                        .set('ai', function (card) {
                            var trigger = _status.event.getTrigger();
                            var player = _status.event.player;
                            var judging = _status.event.judging;
                            var result = trigger.judge(card) - trigger.judge(judging);
                            var attitude = get.attitude(player, trigger.player);
                            if (attitude == 0 || result == 0) {
                                if (trigger.player != player) return 0;
                                if (
                                    game.hasPlayer(function (current) {
                                        return get.attitude(player, current) < 0;
                                    })
                                ) {
                                    var checkx = lib.skill.xinleiji.judgeCheck(card, true) - lib.skill.xinleiji.judgeCheck(judging);
                                    if (checkx > 0) return checkx;
                                }
                                return 0;
                            }
                            if (attitude > 0) {
                                return result;
                            } else {
                                return -result;
                            }
                        })
                        .set('judging', trigger.player.judging[0]);
                    ('step 1');
                    if (result.bool) {
                        player.respond(result.cards, 'highlight', 'siji_tianyi', 'noOrdering');
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.bool) {
                        player.$gain2(trigger.player.judging[0]);
                        player.gain(trigger.player.judging[0]);
                        var card = result.cards[0];
                        if (card.suit == ('black' || 'red') && card.number > 1 && card.number < 10) player.draw('nodelay');
                        trigger.player.judging[0] = result.cards[0];
                        trigger.orderingCards.addArray(result.cards);
                        game.log(trigger.player, '的判定牌改为', result.cards[0]);
                    }
                    ('step 3');
                },
                group: ['siji_tianyi1'],
            },
            siji_tianyi1: {
                trigger: {
                    player: 'diebefore',
                },
                forced: true,
                silent: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hp > 0;
                },
                content() {
                    trigger.untrigger();
                    trigger.finish();
                    player.hp == player.hp;
                },
                popup: false,
            },
            siji_longnu: {
                mark: true,
                zhuanhuanji: true,
                marktext: '☯',
                intro: {
                    content(storage, player, skill) {
                        if (player.storage.nzry_longnu == true) return '<font color=orange>锁定技,</font><br>出牌阶段开始时,你减1点体力上限并摸3张牌,本阶段内你的锦囊牌均视为雷杀且无使用次数限制';
                        return '<font color=orange>锁定技,</font><br>出牌阶段开始时,你流失一点体力并摸3张牌,本阶段内你的红色手牌均视为火杀且无距离限制';
                    },
                },
                audio: 'nzry_longnu',
                trigger: {
                    player: 'phaseUseBegin',
                },
                forced: true,
                content() {
                    'step 0';
                    player.changeZhuanhuanji('nzry_longnu');
                    if (player.storage.nzry_longnu != true) {
                        player.loseMaxHp();
                    } else {
                        player.loseHp();
                    }
                    player.draw(3);
                    ('step 1');
                    if (player.storage.nzry_longnu != true) {
                        player.addTempSkill('nzry_longnu_2', 'phaseUseAfter');
                    } else {
                        player.addTempSkill('nzry_longnu_1', 'phaseUseAfter');
                    }
                },
                subSkill: {
                    1: {
                        mod: {
                            cardname(card, player) {
                                if (get.color(card) == 'red') return 'sha';
                            },
                            cardnature(card, player) {
                                if (get.color(card) == 'red') return 'fire';
                            },
                            targetInRange(card) {
                                if (get.color(card) == 'red') return true;
                            },
                        },
                        ai: {
                            effect: {
                                target(card, player, target, current) {
                                    if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                },
                            },
                            respondSha: true,
                        },
                    },
                    2: {
                        mod: {
                            cardname(card, player) {
                                if (['trick', 'delay'].includes(lib.card[card.name].type)) return 'sha';
                            },
                            cardnature(card, player) {
                                if (['trick', 'delay'].includes(lib.card[card.name].type)) return 'thunder';
                            },
                            cardUsable(card, player) {
                                if (card.name == 'sha' && card.nature == 'thunder') return Infinity;
                            },
                        },
                        ai: {
                            effect: {
                                target(card, player, target, current) {
                                    if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                },
                            },
                            respondSha: true,
                        },
                    },
                },
                ai: {
                    fireAttack: true,
                    halfneg: true,
                    threaten: 1.05,
                },
            },
            siji_kuangbao: {
                audio: 'baonu',
                marktext: '暴',
                trigger: {
                    source: 'damageSource',
                    player: ['damageEnd', 'enterGame'],
                    global: 'phaseBefore',
                },
                forced: true,
                filter(event, player) {
                    return (event.name != 'damage' && (event.name != 'phase' || game.phaseNumber == 0)) || event.num > 0;
                },
                content() {
                    player.addMark('baonu', trigger.name == 'damage' ? trigger.num : 6);
                },
                intro: {
                    name: '暴怒',
                    content: 'mark',
                },
                ai: {
                    combo: 'ol_shenfen',
                    maixie: true,
                    maixie_hp: true,
                },
            },
            siji_wumou: {
                audio: 'wumou',
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                filter(event, player) {
                    return get.type(event.card) == 'trick';
                },
                content() {
                    'step 0';
                    if (player.hasMark('baonu')) {
                        player.chooseControlList(['移去2枚【暴怒】标记', '失去2点体力'], true).set('ai', function (event, player) {
                            if (player.storage.baonu > 6) return 0;
                            if (player.hp + player.countCards('h', 'tao') > 3) return 1;
                            return 0;
                        });
                    } else {
                        player.loseHp(2);
                        event.finish();
                    }
                    ('step 1');
                    if (result.index == 0) {
                        player.removeMark('baonu', 2);
                    } else {
                        player.loseHp(2);
                    }
                },
                ai: {
                    effect: {
                        player_use(card, player) {
                            if (get.type(card) == 'trick' && get.value(card) < 6) {
                                return [0, -2];
                            }
                        },
                    },
                },
            },
            siji_wuqian: {
                audio: 'wuqian',
                enable: 'phaseUse',
                derivation: 'wushuang',
                filter(event, player) {
                    return player.countMark('baonu') >= 2;
                },
                filterTarget(card, player, target) {
                    return target != player && !target.hasSkill('siji_wuqian_targeted');
                },
                content() {
                    player.removeMark('baonu', 2);
                    player.addTempSkill('wushuang');
                    player.storage.siji_wuqian_target = target;
                    player.addTempSkill('siji_wuqian_target');
                    target.addTempSkill('siji_wuqian_targeted');
                },//QQQ
                subSkill: {
                    equip: {
                        ai: {
                            unequip: true,
                            skillTagFilter(player, tag, arg) {
                                if (arg && arg.target && arg.target.hasSkill('siji_wuqian_targeted')) return true;
                                return false;
                            },
                        },
                    },
                    targeted: {
                        ai: {
                            unequip2: true,
                        },
                    },
                    target: {
                        intro: {
                            content: '获得无双且$防具失效直到回合结束',
                        },
                    },
                },
            },
            siji_shenfen: {
                audio: 'shenfen',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countMark('baonu') >= 6;
                },
                usable: 1,
                content() {
                    'step 0';
                    player.removeMark('baonu', 6);
                    event.targets = game.filterPlayer();
                    event.targets.remove(player);
                    event.targets.sort(lib.sort.seat);
                    player.line(event.targets, 'green');
                    event.targets2 = event.targets.slice(0);
                    event.targets3 = event.targets.slice(0);
                    ('step 1');
                    if (event.targets2.length) {
                        event.targets2.shift().damage(2);
                        event.redo();
                    }
                    ('step 2');
                    if (event.targets.length) {
                        event.current = event.targets.shift();
                        event.current.discard(event.current.getCards('e')).delay = false;
                    }
                    ('step 3');
                    if (event.targets.length) event.goto(2);
                    ('step 4');
                    if (event.targets3.length) {
                        var target = event.targets3.shift();
                        target.chooseToDiscard(Infinity, 'h', true).delay = false;
                    }
                    ('step 5');
                    if (event.targets3.length) event.goto(4);
                    ('step 6');
                    player.turnOver();
                },
                ai: {
                    combo: 'baonu',
                    order: 10,
                    result: {
                        player(player) {
                            return game.countPlayer(function (current) {
                                if (current != player) {
                                    return get.sgn(get.damageEffect(current, player, player));
                                }
                            });
                        },
                    },
                },
            },
            siji_junlue: {
                audio: 'nzry_junlve',//QQQ
                intro: {
                    content: '当前有#个标记',
                },
                trigger: {
                    player: 'damageAfter',
                    source: 'damageSource',
                },
                forced: true,
                content() {
                    player.addMark('siji_junlue', trigger.num);
                },
            },
            siji_cuike: {
                audio: 'nzry_cuike',
                trigger: {
                    player: 'phaseUseBegin',
                },
                forced: true,
                content() {
                    'step 0';
                    if (player.countMark('siji_junlue') % 2 == 1) {
                        player.chooseTarget('是否发动【摧克】,对一名角色造成一点伤害？').ai = function (target) {
                            return -get.attitude(player, target);
                        };
                    } else {
                        player.chooseTarget('是否发动【摧克】,横置一名角色并弃置其区域内的一张牌？').ai = function (target) {
                            return -get.attitude(player, target);
                        };
                    }
                    ('step 1');
                    if (result.bool) {
                        if (player.countMark('siji_junlue') % 2 == 1) {
                            result.targets[0].damage();
                        } else {
                            result.targets[0].link(true);
                            player.discardPlayerCard(result.targets[0], 1, 'hej', true);
                        }
                    }
                    ('step 2');
                    if (player.countMark('siji_junlue') > 7) {
                        player
                            .chooseBool()
                            .set('ai', function () {
                                return true;
                            })
                            .set('prompt', '是否弃置所有<军略>标记并对所有其他角色造成2点伤害？');
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    if (result.bool) {
                        var players = game.players.slice(0).sortBySeat();
                        player.line(players);
                        player.removeMark('siji_junlue', player.countMark('siji_junlue'));
                        for (var i of players) {
                            if (i != player) i.damage(2);
                        }
                    }
                },
            },
            siji_zhanhuo: {
                audio: 'nzry_zhanhuo',
                limited: true,
                init(player) {
                    player.storage.nzry_dinghuo = false;
                },
                intro: {
                    content: 'limited',
                },
                mark: true,
                enable: 'phaseUse',
                filter(event, player) {
                    return !player.storage.nzry_dinghuo && player.countMark('siji_junlue') > 0;
                },
                check(event, player) {
                    var num = game.countPlayer(function (current) {
                        return get.attitude(player, current) < 0 && current.isLinked();
                    });
                    return (
                        player.storage.siji_junlue >= num &&
                        num ==
                        game.countPlayer(function (current) {
                            return get.attitude(player, current) < 0;
                        })
                    );
                },
                filterTarget(card, player, target) {
                    return target.isLinked();
                },
                selectTarget() {
                    return [1, _status.event.player.countMark('siji_junlue')];
                },
                multiline: true,
                multitarget: true,
                content() {
                    'step 0';
                    player.awakenSkill('nzry_dinghuo');
                    player.storage.nzry_dinghuo = true;
                    ('step 1');
                    player.removeMark('siji_junlue', player.countMark('siji_junlue'));
                    for (var i = 0; i < targets.length; i++) {
                        targets[i].discard(targets[i].getCards('e'));
                    }
                    player
                        .chooseTarget(true, '对一名目标角色造成2点火焰伤害', function (card, player, target) {
                            return _status.event.targets.includes(target);
                        })
                        .set('targets', targets).ai = function () {
                            return 1;
                        };
                    ('step 2');
                    if (result.bool) {
                        result.targets[0].damage('fire', 2);
                    }
                },
                ai: {
                    order: 1,
                    fireAttack: true,
                    result: {
                        target(player, target) {
                            if (target.hasSkillTag('nofire')) return 0;
                            if (lib.config.mode == 'versus') return -1;
                            if (player.hasUnknown()) return 0;
                            return get.damageEffect(target, player) - target.countCards('e');
                        },
                    },
                },
            },
            siji_wushen: {
                mod: {
                    cardname(card, player, name) {
                        if (card.suit == 'heart') return 'sha';
                    },
                    cardnature(card, player) {
                        if (card.suit == 'heart') return false;
                    },
                    targetInRange(card) {
                        if (card.name == 'sha') return true;
                    },
                    cardUsable(card) {
                        if (card.name == 'sha') return Infinity;
                    },
                },
                audio: 'wushen',
                trigger: {
                    player: 'useCard',
                    source: 'damagebegin1',
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                content() {
                    trigger.directHit.addArray(game.players);
                    if (trigger.addCount !== false) {
                        trigger.addCount = false;
                        if (player.stat[player.stat.length - 1].card.sha > 0) {
                            player.stat[player.stat.length - 1].card.sha--;
                        }
                    }
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                        },
                    },
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        return arg.card.name == 'sha';
                    },
                },
            },
            siji_wuhun: {
                intro: {
                    content: '当前有#个标记',
                },
                audio: 'wuhun',//QQQ
                group: ['siji_wuhun_die', 'wuhun22', 'wuhun23'],
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    return event.source != undefined;
                },
                content() {
                    trigger.source.addMark('siji_wuhun', trigger.num);
                },
                subSkill: {
                    die: {
                        trigger: {
                            player: 'die',
                        },
                        forced: true,
                        forceDie: true,
                        forced: true,
                        filter(event, player) {
                            return game.hasPlayer(function (current) {
                                return current != player && current.hasMark('siji_wuhun');
                            });
                        },
                        content() {
                            'step 0';
                            var num = 0;
                            for (var i of game.players) {
                                var current = i;
                                if (current != player && current.countMark('siji_wuhun') > num) {
                                    num = current.countMark('siji_wuhun');
                                }
                            }
                            player
                                .chooseTarget(true, '请选择【武魂】的目标', function (card, player, target) {
                                    return target != player && target.countMark('siji_wuhun') == _status.event.num;
                                })
                                .set('ai', function (target) {
                                    return -get.attitude(_status.event.player, target);
                                })
                                .set('forceDie', true)
                                .set('num', num);
                            ('step 1');
                            if (result.targets?.length) {
                                var target = result.targets[0];
                                event.target = target;
                                player.line(target, { color: [255, 255, 0] });
                            }
                            ('step 2');
                            target.judge(function (card) {
                                if (['taoyuan'].includes(card.name)) return 10;
                                return -10;
                            }).judge2 = function (result) {
                                return result.bool == false ? true : false;
                            };
                            ('step 3');
                            if (!result.bool) {
                                const next = game.createEvent('diex', false);
                                next.source = player;
                                next.player = target;
                                next._triggered = null;
                                next.restMap = { type: null, count: null, audio: null };
                                next.excludeMark = [];
                                next.setContent('die');
                            }
                        },
                    },
                },
                ai: {
                    threaten: 0.01,
                    notemp: true,
                },
            },
            siji_shelie: {
                audio: 'shelie',
                trigger: {
                    player: 'phaseDrawBegin1',
                },
                filter(event, player) {
                    return !event.numFixed;
                },
                content() {
                    'step 0';
                    trigger.changeToZero();
                    event.cards = get.cards(10);
                    game.cardsGotoOrdering(event.cards);
                    event.videoId = lib.status.videoId++;
                    game.broadcastAll(
                        function (player, id, cards) {
                            var str = '涉猎:获取花色各不相同的牌';
                            var dialog = ui.create.dialog(str, cards);
                            dialog.videoId = id;
                        },
                        player,
                        event.videoId,
                        event.cards
                    );
                    event.time = get.utc();
                    game.addVideo('showCards', player, ['涉猎', get.cardsInfo(event.cards)]);
                    game.addVideo('delay', null, 2);
                    ('step 1');
                    var next = player.chooseButton([0, 10], true);
                    next.set('dialog', event.videoId);
                    next.set('filterButton', function (button) {
                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                            if (ui.selected.buttons[i].link.suit == button.link.suit) return false;
                        }
                        return true;
                    });
                    next.set('ai', function (button) {
                        return get.value(button.link, _status.event.player);
                    });
                    ('step 2');
                    if (result.bool && result.links) {
                        event.cards2 = result.links;
                    } else {
                        event.finish();
                    }
                    var time = 1000 - (get.utc() - event.time);
                    if (time > 0) {
                    }
                    ('step 3');
                    game.broadcastAll('closeDialog', event.videoId);
                    var cards2 = event.cards2;
                    player.gain(cards2, 'log', 'gain2');
                },
                ai: {
                    threaten: 1.2,
                },
            },
            siji_gongxin: {
                audio: 'gongxin',
                audioname: ['re_lvmeng', 'gexuan'],
                enable: 'phaseUse',
                usable: 2,
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
                            return button.link.suit == ['heart'];
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
            longhunsx: {
                enable: ['chooseToUse', 'chooseToRespond'],
                prompt: '将♦️️牌当做杀,♥️️牌当做桃,♣️️牌当做闪,♠️️牌当做无懈可击使用或打出',
                viewAs(cards, player) {
                    var name = false,
                        nature = null;
                    switch (cards[0]?.suit) {
                        case 'club':
                            name = 'shan';
                            audio: 'longhun4';
                            break;
                        case 'diamond':
                            name = 'sha';
                            nature = 'fire';
                            audio: 'longhun2';
                            break;
                        case 'spade':
                            name = 'wuxie';
                            audio: 'longhun3';
                            break;
                        case 'heart':
                            name = 'tao';
                            audio: 'longhun1';
                            break;
                    }
                    if (name) return { name: name, nature: nature };
                    return null;
                },
                check(card) {
                    if (ui.selected.cards.length) return 0;
                    var player = _status.event.player;
                    if (_status.event.type == 'phase') {
                        var max = 0;
                        var name2;
                        var list = ['sha', 'tao'];
                        var map = { sha: 'diamond', tao: 'heart' };
                        for (var i = 0; i < list.length; i++) {
                            var name = list[i];
                            if (
                                player.countCards('hes', function (card) {
                                    return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                }) > 0 &&
                                player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                            ) {
                                var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                if (temp > max) {
                                    max = temp;
                                    name2 = map[name];
                                }
                            }
                        }
                        if (name2 == card.suit) return name2 == 'diamond' ? 5 - get.value(card) : 20 - get.value(card);
                        return 0;
                    }
                    return 1;
                },
                selectCard: [1, 2],
                complexCard: true,
                position: 'hes',
                filterCard(card, player, event) {
                    if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
                    event = event || _status.event;
                    var filter = event._backup.filterCard;
                    var name = card.suit;
                    if (name == 'club' && filter({ name: 'shan' }, player, event)) return true;
                    if (name == 'diamond' && filter({ name: 'sha', nature: 'fire' }, player, event)) return true;
                    if (name == 'spade' && filter({ name: 'wuxie' }, player, event)) return true;
                    if (name == 'heart' && filter({ name: 'tao' }, player, event)) return true;
                    return false;
                },
                filter(event, player) {
                    var filter = event.filterCard;
                    if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hes', { suit: 'diamond' })) return true;
                    if (filter({ name: 'shan' }, player, event) && player.countCards('hes', { suit: 'club' })) return true;
                    if (filter({ name: 'tao' }, player, event) && player.countCards('hes', { suit: 'heart' })) return true;
                    if (filter({ name: 'wuxie' }, player, event) && player.countCards('hes', { suit: 'spade' })) return true;
                    return false;
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag) {
                        var name;
                        switch (tag) {
                            case 'respondSha':
                                name = 'diamond';
                                break;
                            case 'respondShan':
                                name = 'club';
                                break;
                            case 'save':
                                name = 'heart';
                                break;
                        }
                        if (!player.countCards('hes', { suit: name })) return false;
                    },
                    order(item, player) {
                        if (player && _status.event.type == 'phase') {
                            var max = 0;
                            var list = ['sha', 'tao'];
                            var map = { sha: 'diamond', tao: 'heart' };
                            for (var i = 0; i < list.length; i++) {
                                var name = list[i];
                                if (
                                    player.countCards('hes', function (card) {
                                        return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                    }) > 0 &&
                                    player.getUseValue({
                                        name: name,
                                        nature: name == 'sha' ? 'fire' : null,
                                    }) > 0
                                ) {
                                    var temp = get.order({
                                        name: name,
                                        nature: name == 'sha' ? 'fire' : null,
                                    });
                                    if (temp > max) max = temp;
                                }
                            }
                            max /= 1.1;
                            return max;
                        }
                        return 2;
                    },
                },
                hiddenCard(player, name) {
                    if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) return true;
                    if (name == 'wuxie') return player.countCards('hes', { suit: 'spade' }) > 0;
                    if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0;
                },
                group: ['longhunsx_num', 'longhunsx_discard'],
                subSkill: {
                    num: {
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        popup: false,
                        filter(event) {
                            var evt = event;
                            return ['sha', 'tao'].includes(evt.card.name) && evt.skill == 'longhunsx' && evt.cards && evt.cards.length == 2;
                        },
                        content() {
                            trigger.baseDamage++;
                        },
                        sourceSkill: 'longhunsx',
                    },
                    discard: {
                        trigger: {
                            player: ['useCardAfter', 'respondAfter'],
                        },
                        forced: true,
                        popup: false,
                        logTarget() {
                            return _status.currentPhase;
                        },
                        autodelay(event) {
                            return event.name == 'respond' ? 0.5 : false;
                        },
                        filter(evt, player) {
                            return ['shan', 'wuxie'].includes(evt.card.name) && evt.skill == 'longhunsx' && evt.cards && evt.cards.length == 2 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, 'he');
                        },
                        content() {
                            player.line(_status.currentPhase, 'green');
                            player.discardPlayerCard(_status.currentPhase, 'he', true);
                        },
                        sourceSkill: 'longhunsx',
                    },
                },
            },
            siji_juejing: {
                audio: 'boss_juejing2',
                trigger: {
                    player: ['loseAfter', 'enterGame'],
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                filter(event, player) {
                    if (event.name == 'gain' && event.player == player) return player.countCards('h') > 6;
                    var evt = event.getl(player);
                    if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= 6) return false;
                    var evt = event;
                    for (var i = 0; i < 6; i++) {
                        evt = evt.getParent('siji_juejing');
                        if (evt.name != 'siji_juejing') return true;
                    }
                    return false;
                },
                content() {
                    var num = 6 - player.countCards('h');
                    if (num > 0) player.draw(num);
                    else player.chooseToDiscard('h', true, -num);
                },
                group: ['siji_juejing_1'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'gameDrawBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            player.draw(2);
                        },
                    },
                },
            },
            siji_kuangfeng: {
                trigger: {
                    player: 'damageBegin3',
                },
                filter(event, player) {
                    if (event.nature == 'fire') return true;
                    return false;
                },
                mark: true,
                intro: {
                    markcount: () => 1,
                    content: '共有1个标记',
                },
                forced: true,
                content() {
                    trigger.num += 2;
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, 'fireDamage')) return 1.5;
                        },
                    },
                },
            },
            siji_baofeng: {
                audio: 'kuangfeng',
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                filter(event, player) {
                    return player.getExpansions('qixing').length;
                },
                content() {
                    'step 0';
                    player.chooseTarget(get.prompt('kuangfeng'), '令一名角色获得<狂风>标记').ai = function (target) {
                        return -1;
                    };
                    ('step 1');
                    if (result.bool) {
                        var length = result.targets.length;
                        for (var i = 0; i < length; i++) {
                            result.targets[i].addSkill('siji_kuangfeng');
                        }
                        player.chooseCardButton('弃置' + get.cnNumber(length) + '枚星', length, player.getExpansions('qixing'), true);
                        player.addSkill('dawu3');
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    player.loseToDiscardpile(result.links);
                },
                ai: {
                    combo: 'qixing',
                },
            },
            siji_tianxing: {
                audio: 'qixing',
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                content() {
                    'step 0';
                    player.addToExpansion(get.cards(21), 'gain2').gaintag.add('qixing');
                    ('step 1');
                    var cards = player.getExpansions('qixing');
                    if (!cards.length || !player.countCards('h')) {
                        event.finish();
                        return;
                    }
                    var next = player.chooseToMove('天星:是否交换<星>和手牌？');
                    next.set('list', [
                        [get.translation(player) + '(你)的星', cards],
                        ['手牌区', player.getCards('h')],
                    ]);
                    next.set('filterMove', function (from, to) {
                        return typeof to != 'number';
                    });
                    next.set('processAI', function (list) {
                        var player = _status.event.player,
                            cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                return get.useful(a) - get.useful(b);
                            }),
                            cards2 = cards.splice(0, player.getExpansions('qixing').length);
                        return [cards2, cards];
                    });
                    ('step 2');
                    if (result.bool) {
                        var pushs = result.moved[0],
                            gains = result.moved[1];
                        pushs.removeArray(player.getExpansions('qixing'));
                        gains.removeArray(player.getCards('h'));
                        if (!pushs.length || pushs.length != gains.length) return;
                        player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('qixing');
                        game.log(player, '将', pushs, '作为<星>置于武将牌上');
                        player.gain(gains, 'gain2');
                    }
                },
                intro: {
                    markcount: 'expansion',
                    mark(dialog, content, player) {
                        var content = player.getExpansions('qixing');
                        if (content && content.length) {
                            if (player == game.me || player.isUnderControl()) {
                                dialog.addAuto(content);
                            } else {
                                return '共有' + get.cnNumber(content.length) + '张星';
                            }
                        }
                    },
                    content(content, player) {
                        var content = player.getExpansions('qixing');
                        if (content && content.length) {
                            if (player == game.me || player.isUnderControl()) {
                                return get.translation(content);
                            }
                            return '共有' + get.cnNumber(content.length) + '张星';
                        }
                    },
                },
                group: ['qixing2'],
                ai: {
                    combo: 'dawu',
                },
            },
            tianxing1: {
                audio: 'qixing',
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                content() {
                    'step 0';
                    if (get.mode() == 'boss' && player != 'boss') {
                        player.addToExpansion(get.cards(49), 'gain2').gaintag.add('tianxing1');
                    } else {
                        player.addToExpansion(get.cards(28), 'gain2').gaintag.add('tianxing1');
                    }
                    ('step 1');
                    var cards = player.getExpansions('tianxing1');
                    if (!cards.length || !player.countCards('h')) {
                        event.finish();
                        return;
                    }
                    var next = player.chooseToMove('天星:是否交换<星>和手牌？');
                    next.set('list', [
                        [get.translation(player) + '(你)的星', cards],
                        ['手牌区', player.getCards('h')],
                    ]);
                    next.set('filterMove', function (from, to) {
                        return typeof to != 'number';
                    });
                    next.set('processAI', function (list) {
                        var player = _status.event.player,
                            cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                return get.useful(a) - get.useful(b);
                            }),
                            cards2 = cards.splice(0, player.getExpansions('tianxing1').length);
                        return [cards2, cards];
                    });
                    ('step 2');
                    if (result.bool) {
                        var pushs = result.moved[0],
                            gains = result.moved[1];
                        pushs.removeArray(player.getExpansions('tianxing1'));
                        gains.removeArray(player.getCards('h'));
                        if (!pushs.length || pushs.length != gains.length) return;
                        player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('tianxing1');
                        game.log(player, '将', pushs, '作为<星>置于武将牌上');
                        player.gain(gains, 'gain2');
                    }
                },
                intro: {
                    markcount: 'expansion',
                    mark(dialog, content, player) {
                        var content = player.getExpansions('tianxing1');
                        if (content && content.length) {
                            if (player == game.me || player.isUnderControl()) {
                                dialog.addAuto(content);
                            } else {
                                return '共有' + get.cnNumber(content.length) + '张星';
                            }
                        }
                    },
                    content(content, player) {
                        var content = player.getExpansions('tianxing1');
                        if (content && content.length) {
                            if (player == game.me || player.isUnderControl()) {
                                return get.translation(content);
                            }
                            return '共有' + get.cnNumber(content.length) + '张星';
                        }
                    },
                },
                group: ['tianxingx', 'tianxing3', 'tianxing4', 'tianxing5', 'tianxing6', 'tianxing7'],
                ai: {
                    combo: 'dawu',
                },
            },
            tianxingx: {
                trigger: {
                    player: 'phaseDrawAfter',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                filter(event, player) {
                    return player.getExpansions('tianxing1').length && player.countCards('h') > 0;
                },
                content() {
                    'step 0';
                    var cards = player.getExpansions('tianxing1');
                    if (!cards.length || !player.countCards('h')) {
                        event.finish();
                        return;
                    }
                    var next = player.chooseToMove('七星:是否交换<星>和手牌？');
                    next.set('list', [
                        [get.translation(player) + '(你)的星', cards],
                        ['手牌区', player.getCards('h')],
                    ]);
                    next.set('filterMove', function (from, to) {
                        return typeof to != 'number';
                    });
                    next.set('processAI', function (list) {
                        var player = _status.event.player,
                            cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                return get.value(a) - get.value(b);
                            }),
                            cards2 = cards.splice(0, player.getExpansions('tianxing1').length);
                        return [cards2, cards];
                    });
                    ('step 1');
                    if (result.bool) {
                        var pushs = result.moved[0],
                            gains = result.moved[1];
                        pushs.removeArray(player.getExpansions('tianxing1'));
                        gains.removeArray(player.getCards('h'));
                        if (!pushs.length || pushs.length != gains.length) return;
                        player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('tianxing1');
                        game.log(player, '将', pushs, '作为<星>置于武将牌上');
                        player.gain(gains, 'gain2');
                    }
                },
            },
            baofeng: {
                audio: 'ext:死星/audio:2',
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.getExpansions('tianxing1').length;
                },
                content() {
                    'step 0';
                    var num = Math.min(game.countPlayer(), player.getExpansions('tianxing1').length);
                    player
                        .chooseTarget(get.prompt('baofeng'), '令至多' + get.cnNumber(num) + '名角色获得<暴风>标记', [1, num])
                        .set('ai', function (target) {
                            if (target.isMin()) return 0;
                            if (target.hasSkill('biantian2')) return 0;
                            var att = get.attitude(player, target);
                            return -att;
                        })
                        .set(
                            'allUse',
                            player.getExpansions('tianxing1').length >=
                            game.countPlayer(function (current) {
                                return get.attitude(player, current) > 4;
                            }) *
                            2
                        );
                    ('step 1');
                    if (result.bool) {
                        game.playJQaAudio('kuangfeng1');
                        var length = result.targets.length;
                        for (var i = 0; i < length; i++) {
                            result.targets[i].addSkill('baofeng2');
                            player.addSkills('baofeng3');
                        }
                        player.chooseCardButton('弃置' + get.cnNumber(length) + '枚星', length, player.getExpansions('tianxing1'), true);
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    player.loseToDiscardpile(result.links);
                },
                ai: {
                    combo: 'tianxing1',
                },
            },
            baofeng2: {
                trigger: {
                    player: 'damageBegin3',
                },
                filter(event, player) {
                    if (event.nature == 'fire') return true;
                    return false;
                },
                mark: true,
                intro: {
                    markcount: () => 1,
                    content: '共有1个标记,拥有此标记的角色受到的火焰伤害+3',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    trigger.num += 3;
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, 'fireDamage')) return 1.5;
                        },
                    },
                },
            },
            tianwu1: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.getExpansions('tianxing1').length;
                },
                audio: 'ext:死星/audio:2',
                content() {
                    'step 0';
                    var num = Math.min(game.countPlayer(), player.getExpansions('tianxing1').length);
                    player
                        .chooseTarget(get.prompt('tianwu1'), '令至多' + get.cnNumber(num) + '名角色获得<天雾>标记', [1, num])
                        .set('ai', function (target) {
                            if (target.isMin()) return 0;
                            if (target.hasSkill('biantian2')) return 0;
                            var att = get.attitude(player, target);
                            if (att >= 4) {
                                if (_status.event.allUse) return att;
                                if (target.hp == 1) return att;
                                if (target.hp == 2 && target.countCards('he') <= 2) return att * 0.7;
                                return 0;
                            }
                            return -1;
                        })
                        .set(
                            'allUse',
                            player.getExpansions('tianxing1').length >=
                            game.countPlayer(function (current) {
                                return get.attitude(player, current) > 4;
                            }) *
                            2
                        );
                    ('step 1');
                    if (result.bool) {
                        game.playJQaAudio('dawu1');
                        var length = result.targets.length;
                        for (var i = 0; i < length; i++) {
                            result.targets[i].addSkill('tianwu2a');
                        }
                        player.chooseCardButton('选择弃置' + get.cnNumber(length) + '张<星>', length, player.getExpansions('tianxing1'), true);
                        player.addSkill('tianwu3');
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    player.loseToDiscardpile(result.links);
                },
                ai: {
                    combo: 'tianxing1',
                },
            },
            tianwu2a: {
                mod: {
                    targetEnabled(card, event) {
                        if ((get.type(card) == 'trick' || get.type(card) == 'delay' || get.type(card) == 'spell' || get.type(card) == 'jiguan') && get.color(card) == 'black') return false;
                        if (get.tag(card, 'damage')) return false;
                    },
                },
                trigger: {
                    player: ['damageBegin4', 'loseHpBefore'],
                },
                mark: true,
                forced: true,
                charlotte: true,
                content() {
                    trigger.cancel();
                },
                ai: {
                    nofire: true,
                    nodamage: true,
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, 'damage') && !get.tag(card, 'thunderDamage')) return [0, 0];
                        },
                    },
                },
                intro: {
                    markcount: () => 1,
                    content: '共有1个标记,拥有此标记的角色防止受到伤害和失去体力,且不能成为伤害牌和黑色牌的目标',
                },
            },
            tianwu3: {
                trigger: {
                    player: ['phaseBegin', 'dieBegin'],
                },
                silent: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                content() {
                    for (var i of game.players) {
                        if (i.hasSkill('tianwu2a')) {
                            i.removeSkill('tianwu2a');
                        }
                    }
                    player.removeSkill('tianwu3');
                },
                popup: false,
            },
            tianxing3: {
                trigger: {
                    player: 'loseToDiscardpileBegin',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                content() {
                    'step 0';
                    player.gainMaxHp(2 * trigger.cards.length);
                    ('step 1');
                    player.hp = player.maxHp;
                    ('step 2');
                    player.storage.tianxing1 -= 1;
                },
            },
            baofeng3: {
                trigger: {
                    global: 'damageEnd',
                },
                filter(event, player) {
                    if (!event.player.hasSkill('baofeng2')) return false;
                    if (event.nature !== 'fire') return false;
                    return true;
                },
                mark: true,
                intro: {
                    content: '有角色受到火属性伤害后,你获得等量的护甲且摸等量的牌',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                content() {
                    player.changeHujia(trigger.num);
                    player.draw(trigger.num);
                },
            },
            tianxing4: {
                trigger: {
                    player: 'phaseBegin',
                },
                filter(event, player) {
                    return player.getExpansions('tianxing1').length == 0;
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                content() {
                    player.addSkills('tianwu4');
                },
            },
            tianxing5: {
                trigger: {
                    global: ['phaseBegin', 'gameStart'],
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                content() {
                    if (get.mode() == 'boss' && player != 'boss') {
                        game.countPlayer(function (current) {
                            if (current != player && player.getEnemies().includes(current)) {
                                current.disableEquip('equip1')._triggered = null;
                                current.disableEquip('equip2')._triggered = null;
                                current.disableEquip('equip3')._triggered = null;
                                current.disableEquip('equip4')._triggered = null;
                                current.disableEquip('equip5')._triggered = null;
                                current.enableEquip = game.kongfunc;
                                current.gainPlayerCard = game.kongfunc;
                            }
                        });
                    }
                },
            },
            tianxing6: {
                trigger: {
                    global: 'useCard',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                content() {
                    'step 0';
                    if (get.mode() == 'boss' && player != 'boss') {
                        game.countPlayer(function (current) {
                            if (current != player && player.getEnemies().includes(current) && current.maxHp >= 25) {
                                current.$damage();
                                game.log(current, '受到了来自', player, '的1点伤害');
                                current.hp = current.hp - 1;
                                if (current.hp <= 0) {
                                    current.dying();
                                }
                            }
                        });
                    }
                },
            },
            tianxing7: {
                trigger: {
                    global: 'gainBefore',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                filter(event, player) {
                    if ((event.parent.name == 'draw' && event.getParent(2).name == 'phaseDraw') || event.player.isFriendsOf(player) || event.player == player) return false;
                    return true;
                },
                content() {
                    if (get.mode() == 'boss' && player != 'boss') {
                        trigger.cancel();
                    } else {
                    }
                },
            },
            tianwu4: {
                mod: {
                    targetEnabled(card, event) {
                        if ((get.type(card) == 'trick' || get.type(card) == 'delay' || get.type(card) == 'spell' || get.type(card) == 'jiguan') && get.color(card) == 'black') return false;
                        if (get.tag(card, 'damage')) return false;
                    },
                },
                trigger: {
                    player: ['damageBegin4', 'loseHpBefore'],
                },
                mark: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                content() {
                    trigger.cancel();
                },
                ai: {
                    nofire: true,
                    nodamage: true,
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, 'damage') && !get.tag(card, 'thunderDamage')) return [0, 0];
                        },
                    },
                },
                intro: {
                    content: '防止受到伤害和失去体力,且不能成为伤害牌和黑色牌的目标',
                },
                group: 'tianwu4_1',
                subSkill: {
                    1: {
                        trigger: {
                            player: ['loseMaxHpBegin', 'gainMaxHpBegin'],
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            trigger.cancel();
                        },
                    },
                },
            },
            siji_anzhou: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return (target = player || target != player);
                },
                content() {
                    'step 0';
                    player
                        .chooseControl('令目标加1点体力上限,回复1点体力,弃置其区域内的所有牌', '令目标减1点体力上限,失去1点体力,摸体力上限数张牌')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 1;
                        });
                    ('step 1');
                    if (result.index == 0) {
                        player.say('提升了一些,但这就是代价');
                        target.gainMaxHp();
                        target.recover();
                        target.chooseToDiscard(Infinity, 'hej', true);
                    } else {
                        player.say('这样虽可解一时困难,但却有损根基');
                        target.loseMaxHp();
                        target.loseHp();
                        target.draw(Math.min(5, target.maxHp - 1));
                    }
                },
                group: ['siji_anzhou_1', 'siji_anzhou_2'],
                subSkill: {
                    1: {
                        trigger: {
                            player: 'gainMaxHpBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            player.recover(1);
                        },
                    },
                    2: {
                        trigger: {
                            player: 'loseMaxHpBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            player.draw(Math.min(5, player.maxHp - 1));
                        },
                    },
                },
            },
            siji_xueshi: {
                trigger: {
                    source: 'damageEnd',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    var nus = player.maxHp - player.hp;
                    if (trigger.num <= nus) {
                        player.recover(trigger.num);
                    } else {
                        player.recover(nus);
                        player.draw(trigger.num - nus);
                    }
                },
            },
            siji_tianchi: {
                audio: 'ext:死星/audio:2',
                trigger: {
                    source: 'damageBegin1',
                },
                logTarget: 'player',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    var num = player.hp - 1;
                    var map = {};
                    var list = [];
                    for (var i = 1; i <= num; i++) {
                        var cn = get.cnNumber(i, true);
                        map[cn] = i;
                        list.push(cn);
                    }
                    event.map = map;
                    player
                        .chooseControl(list, 'cancel2', function () {
                            if (!lib.skill.spjiedao.check(_status.event.getTrigger(), player)) return 'cancel2';
                            return get.cnNumber(_status.event.goon, true);
                        })
                        .set('prompt', get.prompt2('天褫', trigger.player))
                        .set('goon', num);
                    ('step 1');
                    if (result.control == 'cancel2') return;
                    var num = event.map[result.control] || 1;
                    trigger.num += num;
                    if (trigger.num > 2) {
                        player.loseHp(trigger.num);
                    }
                },
                audioname2: {
                    JX_shen_caocao: 'DIY_guixin',
                },
            },
            siji_xuehu: {
                trigger: {
                    player: 'damageBegin4',
                },
                forced: true,
                side: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                lastDo: true,
                filter(event, player) {
                    if (event.nature) return true;
                    return false;
                },
                content() {
                    trigger.cancel();
                },
                group: ['siji_xuehu_one', 'siji_xuehu_two', 'siji_xuehu_three', 'siji_xuehu_four'],
                subSkill: {
                    one: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        lastDo: true,
                        content() {
                            trigger.num = 1;
                        },
                        audioname2: {
                            JX_shen_caocao: 'DIY_guixin',
                        },
                    },
                    two: {
                        trigger: {
                            player: 'loseMaxHpBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            trigger.cancel();
                        },
                        audioname2: {
                            JX_shen_caocao: 'DIY_guixin',
                        },
                    },
                    three: {
                        trigger: {
                            player: 'phaseBegin',
                        },
                        forced: true,
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        forced: true,
                        content() {
                            game.countPlayer(function (current) {
                                if (current != player) current.addTempSkill('siji_wuxiao');
                            });
                        },
                        popup: false,
                        audioname2: {
                            JX_shen_caocao: 'DIY_guixin',
                        },
                    },
                    four: {
                        trigger: {
                            player: 'diebefore',
                        },
                        forced: true,
                        silent: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return player.hp > 0;
                        },
                        content() {
                            trigger.untrigger();
                            trigger.finish();
                            player.hp == player.hp;
                        },
                        popup: false,
                        audioname2: {
                            JX_shen_caocao: 'DIY_guixin',
                        },
                    },
                },
                audioname2: {
                    JX_shen_caocao: 'DIY_guixin',
                },
            },
            siji_niliu: {
                trigger: {
                    player: 'dieBefore',
                },
                juexingji: true,
                forced: true,
                charlotte: true,
                superCharlotte: true,
                fixed: true,
                xikiyouku: true,
                mark: true,
                intro: {
                    content: 'limited',
                },
                limited: true,
                init(player, skill) {
                    player.storage[skill] = false;
                },
                content() {
                    'step 0';
                    trigger.cancel();
                    ('step 1');
                    player.gainMaxHp(12);
                    var num = 12 - player.hp;
                    player.recover(num);
                    ('step 2');
                    player.addSkills('siji_yijie');
                    player.addSkills('siji_xiaohun');
                    ('step 3');
                    player.storage.siji_niliu = true;
                    player.awakenSkill('siji_niliu');
                },
                audioname2: {
                    JX_shen_caocao: 'DIY_guixin',
                },
            },
            siji_fengsuo1: {
                mod: {
                    cardEnabled() {
                        return false;
                    },
                    cardUsable() {
                        return false;
                    },
                    cardRespondable() {
                        return false;
                    },
                    cardSavable() {
                        return false;
                    },
                },
                skillname: '封锁',
                xikiyouku: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
            },
            siji_fengsuo: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.chooseTarget(get.prompt('封锁'), function (card, player, target) {
                        return target != player && !target.hasSkill('siji_fengsuo1');
                    }).ai = function (target) {
                        var att = get.attitude(player, target);
                        if (att >= 0) return 0;
                        var skills = target.getSkills();
                        for (var i = 0; i < skills.length; i++) {
                            if (!get.is.locked(skills[i])) {
                                if (target.hasSkillTag('maixie')) return 2;
                                return get.threaten(target);
                            }
                        }
                        return 0;
                    };
                    ('step 1');
                    if (result.bool) {
                        result.targets[0].addTempSkill('siji_fengsuo1', { player: 'phaseAfter' });
                    }
                },
                audioname2: {
                    JX_shen_caocao: 'DIY_guixin',
                },
            },
            siji_jijue: {
                trigger: {
                    player: 'phaseBegin',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.hp > 1;
                },
                content() {
                    var nuu = player.hp - 1;
                    player.storage.siji_jijue = nuu;
                    player.hp = 1;
                    player.skip('phaseJudge');
                    player.addTempSkill('jijue_mopai');
                    player.addTempSkill('jijue_chupai');
                    player.addTempSkill('jijue_jieshu');
                    player.addTempSkill('siji_xueshi');
                },
            },
            siji_jueming: {
                enable: 'phaseUse',
                usable: 1,
                init(player) {
                    player.ere = 1;
                    player.storage.maxHp = player.ere + player.maxHp;
                    player.update();
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                selectTarget: [1, Infinity],
                filter(event, player) {
                    if (player.hp != 1) return false;
                    return true;
                },
                filterTarget(card, player, target) {
                    return target != player;
                },
                contentBefore() {
                    player.loseHp();
                },
                content() {
                    if (player.identity == 'zhu') {
                        var x = player.ere + player.storage.maxHp - player.maxHp;
                    } else {
                        var x = player.storage.maxHp - player.maxHp;
                    }
                    target.damage(2 * x)._triggered = null;
                },
                contentAfter() {
                    player.loseMaxHp();
                },
            },
            jijue_mopai: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + player.storage.siji_jijue;
                    },
                    attackRange(player, num) {
                        return num + player.storage.siji_jijue;
                    },
                    maxHandcard(player, num) {
                        return num + player.storage.siji_jijue;
                    },
                },
                trigger: {
                    player: 'phaseDrawBegin',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    trigger.num += player.storage.siji_jijue;
                },
            },
            jijue_chupai: {
                trigger: {
                    source: 'damageBegin4',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    trigger.num += player.storage.siji_jijue;
                },
            },
            jijue_jieshu: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    player.storage.siji_jijue = 0;
                },
            },
            siji_fuhui: {
                trigger: {
                    global: 'dying',
                },
                _priority: -666666,
                xikiyouku: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.player.hp <= 0 && event.player != player;
                },
                logTarget: 'player',
                check(event, player) {
                    return get.attitude(player, event.player) > 1;
                },
                content() {
                    'step 0';
                    var num = player.hp - 1;
                    if (player.countCards('hs', { name: ['tao', 'jiu'] })) {
                        num = player.hp;
                    }
                    var map = {};
                    var list = [];
                    if (player.countCards('hs', { name: ['tao', 'jiu'] })) {
                        for (var i = 1; i <= Math.min(player.hp, trigger.player.maxHp); i++) {
                            var cn = get.cnNumber(i, true);
                            map[cn] = i;
                            list.push(cn);
                        }
                    } else {
                        for (var i = 1; i <= Math.min(player.hp - 1, trigger.player.maxHp); i++) {
                            var cn = get.cnNumber(i, true);
                            map[cn] = i;
                            list.push(cn);
                        }
                    }
                    event.map = map;
                    player
                        .chooseControl(list, function () {
                            return get.cnNumber(_status.event.goon, true);
                        })
                        .set('prompt', '失去任意点体力')
                        .set('goon', num);
                    ('step 1');
                    var num = event.map[result.control] || 1;
                    player.loseHp(num);
                    ('step 2');
                    var num = event.map[result.control] || 1;
                    event.naaasd = num - trigger.player.hp;
                    event.dddd = num;
                    trigger.player.recover(num - trigger.player.hp);
                    trigger.player.draw(3 + num);
                    trigger.player.turnOver(false);
                    trigger.player.link(false);
                    ('step 3');
                    var num = event.map[result.control] || 1;
                    if (player.storage.fengrao) {
                        game.countPlayer(function (current) {
                            if (current != player && current.isFriendsOf(player)) {
                                current.recover(event.naaasd);
                                current.draw(3 + event.dddd);
                                current.turnOver(false);
                                current.link(false);
                            }
                        });
                    }
                    player.recover();
                },
                ai: {
                    threaten: 0.5,
                },
            },
            siji_fubian: {
                mod: {
                    targetEnabled(card, player, target) {
                        if (get.type(card) == 'delay') return false;
                    },
                },
                trigger: {
                    player: 'linkBegin',
                    target: 'useCardToBegin',
                },
                forced: true,
                xikiyouku: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                audio: 'ext:死星/audio:2',
                filter(event, player, card) {
                    if (!['basic', 'trick', 'spell', 'jiguan'].includes(get.type(event.card))) return false;
                    if (get.tag(event.card, 'damage')) return true;
                    else if (event.card && event.card.name == 'dpcqr_nature_sha') return true;
                    else if (event.card && event.card.name == 'gw_niuquzhijing') return true;
                    return false;
                    if (!player.isLinked()) return true;
                },
                content() {
                    'step 0';
                    trigger.cancel();
                    player.link(false);
                    ('step 1');
                    player.loseHp();
                    player.draw(2);
                },
                group: ['siji_fubian_1', 'siji_fubian_2', 'siji_fubian_3'],
                subSkill: {
                    1: {
                        trigger: {
                            player: 'turnOverBegin',
                            global: 'phaseJieshuBegin',
                        },
                        xikiyouku: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            if (event.triggername == 'phaseJieshuBegin') {
                                if (player.hp < player.maxHp) player.recover();
                                else player.draw(2, true);
                            }
                            if (event.triggername == 'turnOverBegin') {
                                if (player.isDamaged()) {
                                    player.recover();
                                    player.draw(3);
                                } else {
                                    player.draw(3);
                                }
                            }
                        },
                    },
                    2: {
                        trigger: {
                            player: 'linkEnd',
                        },
                        xikiyouku: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            if (player.hp < player.maxHp) {
                                player.recover();
                                player.draw(3);
                            } else {
                                player.draw(3);
                            }
                        },
                    },
                    3: {
                        trigger: {
                            global: ['tgtt_mtcunhuBefore', 'tgtt_mtfengraoBefore'],
                        },
                        xikiyouku: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            if (event.triggername == 'tgtt_mtcunhuBefore') {
                                player.storage.cunhu = true;
                            } else {
                                if (event.triggername == 'tgtt_mtfengraoBefore') {
                                    player.storage.fengrao = true;
                                }
                            }
                        },
                    },
                },
                ai: {
                    threaten: 50,
                },
            },
            siji_fuyou: {
                trigger: {
                    source: 'gainBefore',
                },
                init(player) {
                    player.storage.腐佑 = player;
                    player.storage.maxHp = player.maxHp;
                    player.update();
                },
                filter(event, player) {
                    var TrueOfFalse = true;
                    if (event.cards.length) {
                        if (Array.isArray(event.cards)) for (var i of event.cards) {
                            if (event.cards[0].name == 'du') TrueOfFalse = false;
                        }
                    }
                    if (!TrueOfFalse) return false;
                    return event.player && event.player != player && event.player.isIn();
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                xikiyouku: true,
                fixed: true,
                content() {
                    trigger.player.damage(player);
                    trigger.cancel();
                    player.recover();
                },
                group: ['siji_fuyou_1', 'siji_fuyou_2', 'siji_fuyou_3', 'siji_fuyou_4', 'siji_fuyou_6', 'siji_fuyou_7', 'siji_fuyou_8'],
                subSkill: {
                    1: {
                        audio: 'ext:死星/audio:2',
                        trigger: {
                            source: 'damageBegin4',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        xikiyouku: true,
                        logTarget: 'player',
                        filter(event, player) {
                            if (event.player.maxHp >= 21 && event.parent.name == 'sha') return true;
                            return false;
                        },
                        content() {
                            var target = trigger.player;
                            if (target.maxHp < 21) { }
                            else trigger.num += trigger.player.maxHp;
                        },
                    },
                    2: {
                        trigger: {
                            global: ['phaseBefore', 'judgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'discardBefore', 'phaseJieShuBefore'],
                            player: 'damageAfter',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        xikiyouku: true,
                        async content(event, trigger, player) {
                            player.clearSkills()._trigged = null;
                            player.unMad();
                            player.storage = {};//QQQ
                            player.update();
                        },
                    },
                    3: {
                        trigger: {
                            player: 'loseMaxHpBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        xikiyouku: true,
                        content() {
                            trigger.cancel();
                            player.draw();
                        },
                    },
                    4: {
                        trigger: {
                            player: 'dieBefore',
                        },
                        forced: true,
                        silent: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        xikiyouku: true,
                        filter(event, player) {
                            return player.hp > 0;
                        },
                        content() {
                            trigger.untrigger();
                            trigger.finish();
                            player.hp == player.hp;
                        },
                        popup: false,
                    },
                    6: {
                        trigger: {
                            player: ['damageBegin4', 'changeHujiaBegin'],
                        },
                        forced: true,
                        xikiyouku: true,
                        _priority: null,
                        lastDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            if (event.triggername == 'damageBegin4') {
                                trigger.num = 1;
                            } else {
                                if (player.storage.cunhu) {
                                    game.countPlayer(function (current) {
                                        if (current != player && current.isFriendsOf(player)) current.changeHujia(trigger.num);
                                    });
                                }
                            }
                        },
                    },
                    7: {
                        trigger: {
                            player: ['recoverBefore'],
                        },
                        forced: true,
                        xikiyouku: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        lastDo: true,
                        async content(event, trigger, player) {//QQQ
                            if (event.triggername == 'recoverBefore') {
                                if (lib.config.background_audio) {
                                    game.playAudio('effect/recover');
                                }
                                game.broadcast(function () {
                                    if (lib.config.background_audio) {
                                        game.playAudio('effect/recover');
                                    }
                                });
                                if (trigger.num > player.maxHp - player.hp) {
                                    trigger.num = player.maxHp - player.hp;
                                    event.num = Math.min(trigger.num, 9);
                                }
                                if (trigger.num > 0) {
                                    player.hp += trigger.num;
                                    game.broadcastAll(function (player) {
                                        if (lib.config.animation && !lib.config.low_performance) {
                                            player.$recover();
                                        }
                                    }, player);
                                    player.$damagepop(trigger.num, 'wood');
                                    game.log(player, '回复了' + get.cnNumber(trigger.num) + '点体力');
                                    player.update();
                                }
                                trigger.cancel();
                                if (player.storage.fengrao) {
                                    game.countPlayer(function (current) {
                                        if (current != player && current.isFriendsOf(player)) current.recover(trigger.num);
                                    });
                                }
                            } else {
                                if (player.storage.siqiyu) {
                                    trigger.num = 0;
                                    player.storage.siqiyu = false;
                                    player.update();
                                }
                            }
                        },
                    },
                    8: {
                        trigger: {
                            player: ['loseHpBefore'],
                        },
                        forced: true,
                        xikiyouku: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        lastDo: true,
                        content() {
                            'step 0';
                            if (lib.config.background_audio) {
                                game.playAudio('effect/loseHp');
                            }
                            game.broadcast(function () {
                                if (lib.config.background_audio) {
                                    game.playAudio('effect/loseHp');
                                }
                            });
                            game.log(player, '失去了' + get.cnNumber(trigger.num) + '点体力');
                            player.hp -= trigger.num;
                            player.$damagepop(-trigger.num);
                            player.update();
                            ('step 1');
                            if (player.hp <= 0 && !event.nodying) {
                                event._dyinged = true;
                                player.dying(event);
                            }
                            ('step 2');
                            trigger.cancel();
                            player.changeHujia(trigger.num);
                        },
                    },
                },
            },
            siji_suiyi: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + 3;
                    },
                    attackRange(rin, ball) {
                        return ball + 3;
                    },
                    maxHandcard: (player, num) => num - 6,
                },
                audio: 'ext:死星/audio:1',
                trigger: {
                    player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                },
                forced: true,
                xikiyouku: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    var num = game.roundNumber;
                    if (num && typeof num == 'number') player.draw(4 + Math.min(6, num));
                    ('step 1');
                    var next = player.phaseUse();
                    event.next.remove(next);
                    trigger.next.push(next);
                    player.recover(2);
                },
            },
            siji_suimeng: {
                trigger: {
                    global: 'judge',
                },
                xikiyouku: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.draw(2);
                    player
                        .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('siji_suimeng'), 'hes', function (card) {
                            var player = _status.event.player;
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                            if (mod != 'unchanged') return mod;
                            return true;
                        })
                        .set('ai', function (card) {
                            var trigger = _status.event.getTrigger();
                            var player = _status.event.player;
                            var judging = _status.event.judging;
                            var result = trigger.judge(card) - trigger.judge(judging);
                            var attitude = get.attitude(player, trigger.player);
                            if (attitude == 0 || result == 0) {
                                if (trigger.player != player) return 0;
                                if (
                                    game.hasPlayer(function (current) {
                                        return get.attitude(player, current) < 0;
                                    })
                                ) {
                                    var checkx = lib.skill.xinleiji.judgeCheck(card, true) - lib.skill.xinleiji.judgeCheck(judging);
                                    if (checkx > 0) return checkx;
                                }
                                return 0;
                            }
                            if (attitude > 0) {
                                return result;
                            } else {
                                return -result;
                            }
                        })
                        .set('judging', trigger.player.judging[0]);
                    ('step 1');
                    if (result.bool) {
                        player.respond(result.cards, 'highlight', 'siji_suimeng', 'noOrdering');
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.bool) {
                        player.$gain2(trigger.player.judging[0]);
                        player.gain(trigger.player.judging[0]);
                        var card = result.cards[0];
                        if (card.suit == ('black' || 'red') && card.number > 1 && card.number < 10) player.draw('nodelay');
                        trigger.player.judging[0] = result.cards[0];
                        trigger.orderingCards.addArray(result.cards);
                        game.log(trigger.player, '的判定牌改为', result.cards[0]);
                    }
                    ('step 3');
                },
                group: ['siji_suimeng_1', 'siji_suimeng_2'],
                subSkill: {
                    1: {
                        shaRelated: true,
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        xikiyouku: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        check(event, player) {
                            return get.attitude(player, event.target) <= 0;
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        logTarget: 'target',
                        content() {
                            'step 0';
                            trigger.target.addTempSkill('siji_pofang');
                            ('step 1');
                            if (!trigger.target.hasSkill('baiban')) {
                                trigger.target.addTempSkill('baiban');
                            }
                            trigger.parent.directHit.add(trigger.target);
                        },
                    },
                    2: {
                        trigger: {
                            source: 'damageBegin4',
                        },
                        forced: true,
                        silent: true,
                        xikiyouku: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            var nua = player.maxHp - player.hp;
                            trigger.num += 2 * nua;
                        },
                        popup: false,
                    },
                },
            },
            siji_fushi: {
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    return _status.currentPhase == player;
                },//QQQ
                forced: true,
                xikiyouku: true,
                popup: false,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                init(player) {
                    if (!player.storage.siji_fushi) player.storage.siji_fushi = 0;
                },
                content() {
                    'step 0';
                    player.storage.siji_fushi++;
                    ('step 1');
                    if (player.storage.siji_fushi >= 2) {
                        player.storage.siji_fushi = 0;
                        player.loseHp();
                    }
                },
                group: ['siji_fushi_jieshu', 'siji_fushi_wuxiao', 'siji_fushi_qipai', 'siji_fushi_hushen'],
                subSkill: {
                    jieshu: {
                        forced: true,
                        xikiyouku: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        popup: false,
                        _priority: 9999,
                        forced: true,
                        mark: false,
                        trigger: {
                            player: 'phaseUseAfter',
                        },
                        content() {
                            player.storage.siji_fushi = 0;
                        },
                    },
                    wuxiao: {
                        trigger: {
                            global: ['gameStart', 'roundStart'],
                            player: ['phaseBefore', 'judgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'discardBefore', 'damageBegin4', 'loseHpBefore'],
                        },
                        forced: true,
                        silent: true,
                        xikiyouku: true,
                        superCharlotte: true,
                        charlotte: true,
                        firstDo: true,
                        fixed: true,
                        forced: true,
                        content() {
                            if (game.roundNumber == 1) {
                                game.countPlayer(function (current) {
                                    if (current != player) current.addTempSkill('siji_wuxiao', 'phaseEnd');
                                });
                            } else {
                                game.countPlayer(function (current) {
                                    if (current != player) current.addTempSkill('siji_wuxiao', 'phaseEnd');
                                });
                            }
                        },
                        popup: false,
                    },
                    qipai: {
                        trigger: {
                            global: ['phaseBefore'],
                        },
                        xikiyouku: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        firstDo: true,
                        filter(event, player) {
                            return event.player !== player;
                        },
                        content() {
                            player.chooseToDiscard('he', true);
                            game.countPlayer(function (current) {
                                if (current != player) current.addTempSkill('siji_wuxiao', 'phaseEnd');
                            });
                        },
                    },
                    hushen: {
                        trigger: {
                            player: 'loseHpBefore',
                        },
                        forced: true,
                        xikiyouku: true,
                        firstDo: true,
                        _priority: null,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter: (event, player) => event.parent.name != 'siji_fushi' && event.parent.name != 'siji_fubian' && event.parent.name != 'siji_fuhui',
                        content() {
                            player.storage.siqiyu = true;
                        },
                    },
                },
                audioname2: {
                    tgtt_dijun: '腐蚀',
                },
            },
            siji_fushou: {
                audio: 'ext:死星/audio:2',
                trigger: {
                    player: 'phaseEnd',
                },
                _priority: 15,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                xikiyouku: true,
                filter(event, player) {
                    return game.players.length > 1;
                },
                content() {
                    'step 0';
                    player
                        .chooseTarget('选择【腐守】的目标', lib.translate.siji_fushou_info, true, function (card, player, target) {
                            return target != player;
                        })
                        .set('ai', function (target) {
                            return get.attitude(player, target);
                        });
                    ('step 1');
                    if (result.bool) {
                        var target = result.targets[0];
                        player.line(target, 'green');
                        game.log(target, '成为了', '【腐守】', '的目标');
                        target.storage.siji_fushou2 = player;
                        target.addSkill('siji_fushou2');
                    } else {
                        event.finish();
                    }
                },
                ai: {
                    expose: 0.5,
                },
            },
            siji_fushou2: {
                audio: 'ext:死星/audio:2',
                intro: {
                    content: '放心吧,就算腐烂至死,我也会守护你!',
                },
                nopop: true,
                _priority: 15,
                trigger: {
                    target: ['shaBefore', 'juedouBefore', 'huogongBefore', 'nanmanBefore', 'wanjianBefore', 'huoshaolianyingBefore', 'qizhengxiangshengBefore', 'chuqibuyiBefore', 'shuiyanqijunxBefore', 'bingpotongBefore', 'jiguantongBefore', 'jiguanfengBefore', 'dpcqr_nature_shaBefore', 'shenhuofeiyaBefore', 'feibiaoBefore', 'mianlizhenBefore', 'shandianfengbaoBefore', 'xinghuoliaoyuanBefore', 'linghunzhihuoBefore', 'shandianjianBefore', 'yuansuhuimieBefore', 'gw_aozuzhileiBefore', 'wy_xiaolicangdaoBefore', 'gw_zhihuanjunBefore', 'gw_zhuoshaoBefore', 'gw_laduoweideBefore', 'gw_anshaBefore', 'gw_niuquzhijingBefore', 'qin_shangyangbianfaBefore', 'shoulijianBefore', 'gw_jieluoteBefore', 'gw_haluoBefore', 'gw_yigeniyinBefore', 'hsdusu_huoyanhuaBefore', 'hsmengjing_feicuiyoulongBefore', 'hsqizhou_fengBefore', 'hsqizhou_huoBefore', 'hsmengjing_suxingBefore', 'hsshenqi_kongbusangzhongBefore', 'hsqingyu_shandianBefore', 'leitingwanjunBefore', 'lihuomieshiBefore'],
                },
                forced: true,
                charlotte: true,
                xikiyouku: true,
                popup: false,
                filter(event, player) {
                    return player.isAlive();
                },
                content() {
                    var target = player.storage.siji_fushou2;
                    trigger.player.line(target, 'green');
                    trigger.targets.remove(player);
                    trigger.targets.push(target);
                    trigger.target = target;
                },
            },
            siji_fushou3: {
                trigger: {
                    player: ['phaseBegin', 'dieBegin'],
                },
                silent: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                xikiyouku: true,
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return current.hasSkill('siji_fushou2');
                    });
                },
                content() {
                    for (var i of game.players) {
                        if (i.hasSkill('siji_fushou2')) {
                            i.removeSkill('siji_fushou2');
                        }
                    }
                },
                forced: true,
                popup: false,
            },
            siji_pofang: {
                firstDo: true,
                ai: {
                    unequip2: true,
                },
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
                xikiyouku: true,
                filter(event, player) {
                    return player.storage.siji_pofang && event.card && player.storage.siji_pofang.includes(event.card) && (event.name != 'damage' || event.notLink());
                },
                silent: true,
                side: true,
                forced: true,
                popup: false,
                _priority: 12,
                content() {
                    player.storage.siji_pofang.remove(trigger.card);
                    if (!player.storage.siji_pofang.length) player.removeSkill('siji_pofang');
                },
                marktext: '※',
                intro: {
                    content: '当前防具技能已失效',
                },
            },
            渐渐的腐烂: {
                trigger: {
                    player: 'phaseBefore',
                },
                init() {
                    ui.backgroundMusic.src = 'extension/死星/audio/腐化.mp3';
                },
                init2(player) {
                    player.addSkills('siji_fushou3');
                    player.addSkills('siji_wuxiao');
                },
                forced: true,
                charlotte: true,
                superCharlotte: true,
                fixed: true,
                forced: true,
                silent: true,
                content() {
                    ui.backgroundMusic.src = 'extension/死星/audio/腐化.mp3';
                },
                popup: false,
            },
            siji_zhenwu: {
                init(player, skill) {
                    player.addSkillBlocker(skill);
                },
                onremove(player, skill) {
                    player.removeSkillBlocker(skill);
                },
                group: 'wuxiao',
                charlotte: true,
                xikiyouku: true,
                ai: {
                    unequip: true,
                },
                skillBlocker(skill, player, card) {
                    if (lib.skill[skill].charlotte) return true;
                    else if (!lib.skill[skill].charlotte) return true;
                    return false;
                },
                intro: {
                    content(storage, player, skill) {
                        var list = player.getSkills(null, false, false).filter(function (i) {
                            return lib.skill.siji_zhenwu.skillBlocker(i, player);
                        });
                        if (list.length) return '失效技能:' + get.translation(list);
                        return '无失效技能';
                    },
                },
            },
            siji_wuxiao: {
                init(player, skill) {
                    player.addSkillBlocker(skill);
                },
                onremove(player, skill) {
                    player.removeSkillBlocker(skill);
                },
                charlotte: true,
                xikiyouku: true,
                ai: {
                    unequip: true,
                },
                skillBlocker(skill, player) {
                    if (lib.skill[skill].xikiyouku && !lib.skill[skill].equipSkill) return false;
                    return true;
                },
                intro: {
                    content(storage, player, skill) {
                        var list = player.getSkills(null, false, false).filter(function (i) {
                            return lib.skill.siji_wuxiao.skillBlocker(i, player);
                        });
                        if (list.length) return '失效技能:' + get.translation(list);
                        return '无失效技能';
                    },
                },
            },
            sam: {
                init(player) {
                    if (!player.storage.bujuesidou) {
                        player.storage.bujuesidou = 0;
                    }
                    player.storage.wanquanranshaosx = false;
                    if (!player.xulishangxian) {
                        player.xulishangxian = 0;
                    }
                    player.xulishangxian += 10;
                    var num = player.xulishangxian - player.countMark('charge');
                    player.addMark('charge', Math.min(5, num));
                },
                nobracket: true,
                trigger: { global: 'roundStart' },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    game.countPlayer(function (current) {
                        if (current == player) {
                            var num = 5 - current.hujia;
                            if (num > 0) current.changeHujia(num);
                            if (num < 0) current.changeHujia(num);
                        } else {
                            var num = 5 - current.hujia;
                            if (num == 5) current.changeHujia(5);
                            if (num < 0) current.changeHujia(num);
                        }
                    });
                },
            },
            tianhuochongji: {
                trigger: {
                    global: 'damageBefore',
                },
                nobracket: true,
                chargeSkill: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.player != player && event.source == player && !player.storage.wanquanranshaosx;
                },
                content() {
                    'step 0';
                    if (player.hp >= 3) {
                        player.loseHp(2);
                        if (player.countMark('charge') < 10) {
                            player.addMark('charge', Math.min(5, player.xulishangxian - player.countMark('charge')));
                        }
                    }
                    if (player.hp == 2) {
                        player.loseHp(1);
                        if (player.countMark('charge') < 10) {
                            player.addMark('charge', Math.min(5, 10 - player.countMark('charge')));
                        }
                    }
                    if (player.hp == 1) {
                        if (player.countMark('charge') < 10) {
                            player.addMark('charge', Math.min(5, player.xulishangxian - player.countMark('charge')));
                        }
                    }
                    ('step 1');
                    if (player.countMark('charge') == player.xulishangxian) {
                        var skills = player.getSkills(true, false, false);
                        for (const skill of skills) {
                            if (player.getOriginalSkills().includes(skill)) continue;
                            if (lib.translate[skill + '_info']) continue;
                            if (skill == 'shoujiliuying') continue;
                            if (skill == 'mad') {
                                player.removeSkill(skill);
                            }
                            if (lib.skill[skill].ai && lib.skill[skill].ai.neg) {
                                player.removeSkill(skill);
                            }
                            if (lib.skill[skill].ai && lib.skill[skill].ai.nohujia) {
                                player.removeSkill(skill);
                            }
                            if (lib.skill[skill].skillBlocker) {
                                player.removeSkill(skill);
                            }
                        }
                        player.addSkill('shoujiliuying', { player: 'phaseBefore' });
                    }
                },
            },
            shoujiliuying: {
                trigger: {
                    player: 'addJudgeEnd',
                },
                nobracket: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    if (event.triggername == 'addJudgeEnd') {
                        var cards = player.getCards('j');
                        player.gain(cards, 'gain2');
                    }
                },
            },
            wanquanranshao: {
                mod: {
                    cardname(card, player, name) {
                        if (player.storage.wanquanranshaosx) {
                            var type = lib.card[card.name].type;
                            if ((type == 'basic' || type == 'delay') && card.name != 'tao' && card.name != 'jiu') return 'sha';
                        }
                    },
                    cardUsable(card, player, num) {
                        if (card.name == 'sha' && player.storage.wanquanranshaosx) return num + player.storage.bujuesidou;
                    },
                    targetInRange(card, player) {
                        if (card.name == 'sha' && player.storage.wanquanranshaosx) return true;
                    },
                    selectTarget(card, player, range) {
                        if (card.name == 'sha' && player.storage.wanquanranshaosx) range[1] += 2;
                    },
                },
                enable: 'phaseUse',
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.countMark('charge') == 10 && !player.storage.wanquanranshaosx;
                },
                content() {
                    player.removeMark('charge', 10, true);
                    player.storage.wanquanranshaosx = true;
                },
                group: ['wanquanranshao_1', 'wanquanranshao_2', 'wanquanranshao_3', 'wanquanranshao_4', 'wanquanranshao_5'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'damageBegin3',
                        },
                        nobracket: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.player != player && event.source && event.source == player && player.storage.wanquanranshaosx;
                        },
                        content() {
                            if (trigger.card && trigger.card.name == 'sha' && trigger.player.hujia > 0) {
                                trigger.num += 2;
                            }
                            if (trigger.player.hujia == 0) {
                                trigger.num++;
                            }
                            if (trigger.player.hujia == 0 && trigger.player.hasSkill('jiporuodiansx')) {
                                trigger.num++;
                            }
                        },
                    },
                    2: {
                        trigger: {
                            global: 'damageEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.hujia && !event.player.hujia && event.player.isIn() && event.player != player && event.source && event.source == player;
                        },
                        nobracket: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            'step 0';
                            trigger.player.addTempSkill('jiporuodiansx');
                            ('step 1');
                            var cards = get.cardPile(function (card) {
                                var naas = [0, 1, 2, 3].randomGet();
                                if (naas == 1) {
                                    return card.name == 'sha' && card.nature == 'xb_anmie';
                                } else {
                                    return card.name == 'sha';
                                }
                            });
                            if (cards) player.gain(cards, player, 'gain2');
                            ('step 2');
                            player.storage.bujuesidou += 1;
                            player.update();
                        },
                    },
                    3: {
                        trigger: {
                            player: 'useCard',
                        },
                        nobracket: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && player.storage.wanquanranshaosx;
                        },
                        content() {
                            player.recover();
                            if (player.countMark('charge') <= 9) {
                                player.addMark('charge', 1, true);
                            }
                            if (player.countMark('charge') == 10) {
                            }
                        },
                    },
                    4: {
                        trigger: {
                            player: 'phaseEnd',
                        },
                        nobracket: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            player.storage.bujuesidou = 0;
                            player.storage.wanquanranshaosx = false;
                        },
                    },
                    5: {
                        trigger: {
                            global: 'die',
                        },
                        nobracket: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.player != player && event.source && event.source == player && player.storage.wanquanranshaosx && _status.currentPhase == player;
                        },
                        content() {
                            'step 0';
                            var cards = get.cardPile(function (card) {
                                var naas = [0, 1, 2, 3].randomGet();
                                if (naas == 1) {
                                    return card.name == 'sha' && card.nature == 'xb_anmie';
                                } else {
                                    return card.name == 'sha';
                                }
                            });
                            if (cards) player.gain(cards, player, 'gain2');
                            ('step 1');
                            player.storage.bujuesidou += 1;
                            player.update();
                        },
                    },
                },
            },
            jiporuodiansx: {},
            samjijia: {
                nobracket: true,
                init(player) {
                    if (!player.storage.bujuesidou) {
                        player.storage.bujuesidou = 0;
                    }
                    player.storage.wanquanranshaosx = false;
                    if (!player.xulishangxian) {
                        player.xulishangxian = 0;
                    }
                    player.xulishangxian += 10;
                    var num = player.xulishangxian - player.countMark('charge');
                    player.addMark('charge', Math.min(5, num));
                },
                nobracket: true,
                trigger: { global: 'roundStart' },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    game.countPlayer(function (current) {
                        if (current == player) {
                            var num = 5 - current.hujia;
                            if (num > 0) current.changeHujia(num);
                            if (num < 0) current.changeHujia(num);
                        } else {
                            var num = 5 - current.hujia;
                            if (num == 5) current.changeHujia(5);
                            if (num < 0) current.changeHujia(num);
                        }
                    });
                    var cards = get.cardPile(function (card) {
                        return card.name == 'sha' && card.nature == 'xb_anmie';
                    });
                    if (cards) player.gain(cards, player, 'gain2');
                },
            },
            jietianhuochongji: {
                nobracket: true,
                trigger: {
                    global: 'damageBefore',
                },
                group: 'jietianhuochongji_1',
                chargeSkill: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.player != player && event.source == player && !player.storage.wanquanranshaosx;
                },
                content() {
                    'step 0';
                    if (player.hp >= 3) {
                        player.loseHp(2);
                        if (player.countMark('charge') < 10) {
                            player.addMark('charge', Math.min(5, 10 - player.countMark('charge')));
                        }
                    }
                    if (player.hp == 2) {
                        player.loseHp(1);
                        if (player.countMark('charge') < 10) {
                            player.addMark('charge', Math.min(5, 10 - player.countMark('charge')));
                        }
                    }
                    if (player.hp == 1) {
                        if (player.countMark('charge') < 10) {
                            player.addMark('charge', Math.min(5, 10 - player.countMark('charge')));
                        }
                    }
                    ('step 1');
                    if (player.countMark('charge') == player.xulishangxian) {
                        player.clearSkills();
                        var skills = player.getSkills(true, false, false);
                        for (const skill of skills) {
                            if (player.getOriginalSkills().includes(skill)) continue;
                            if (lib.translate[skill + '_info']) continue;
                            if (skill == 'shoujiliuying') continue;
                            if (skill == 'mad') {
                                player.removeSkill(skill);
                            }
                            if (lib.skill[skill].ai && lib.skill[skill].ai.neg) {
                                player.removeSkill(skill);
                            }
                            if (lib.skill[skill].ai && lib.skill[skill].ai.nohujia) {
                                player.removeSkill(skill);
                            }
                            if (lib.skill[skill].skillBlocker) {
                                player.removeSkill(skill);
                            }
                        }
                        player.addTempSkill('shoujiliuying', { player: 'phaseBegin' });
                    }
                },
                subSkill: {
                    1: {
                        trigger: {
                            player: ['damageEnd', 'loseHpBegin', 'loseMaxHpBefore'],
                        },
                        nobracket: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player, name) {
                            if (name == 'loseHpBegin') {
                                return event.parent.name != 'jietianhuochongji';
                            } else return true;
                        },
                        content() {
                            'step 0';
                            if (event.triggername == 'loseMaxHpBefore') {
                                if (player.countMark('charge') < 10) {
                                    player.addMark('charge', Math.min(trigger.num, 10 - player.countMark('charge')));
                                }
                                trigger.untrigger();
                                trigger.finish();
                            } else {
                                if (player.countMark('charge') < 10) {
                                    player.addMark('charge', Math.min(trigger.num, 10 - player.countMark('charge')));
                                }
                            }
                            ('step 1');
                            if (player.countMark('charge') == player.xulishangxian) {
                                var skills = player.getSkills(true, false, false);
                                for (const skill of skills) {
                                    if (player.getOriginalSkills().includes(skill)) continue;
                                    if (lib.translate[skill + '_info']) continue;
                                    if (skill == 'shoujiliuying') continue;
                                    if (skill == 'mad') {
                                        player.removeSkill(skill);
                                    }
                                    if (lib.skill[skill].ai && lib.skill[skill].ai.neg) {
                                        player.removeSkill(skill);
                                    }
                                    if (lib.skill[skill].ai && lib.skill[skill].ai.nohujia) {
                                        player.removeSkill(skill);
                                    }
                                    if (lib.skill[skill].skillBlocker) {
                                        player.removeSkill(skill);
                                    }
                                }
                                player.addSkill('shoujiliuying', { player: 'phaseBegin' });
                            }
                        },
                    },
                },
            },
            jiewanquanranshao: {
                mod: {
                    cardname(card, player, name) {
                        if (player.storage.wanquanranshaosx) {
                            var type = lib.card[card.name].type;
                            if ((type == 'basic' || type == 'delay') && card.name != 'tao' && card.name != 'jiu') return 'sha';
                        }
                    },
                    cardUsable(card, player, num) {
                        if (card.name == 'sha' && player.storage.wanquanranshaosx) return num + player.storage.bujuesidou;
                    },
                    targetInRange(card, player) {
                        if (card.name == 'sha' && player.storage.wanquanranshaosx) return true;
                    },
                    selectTarget(card, player, range) {
                        if (card.name == 'sha' && player.storage.wanquanranshaosx) range[1] += 2;
                    },
                },
                enable: 'phaseUse',
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return player.countMark('charge') == 10 && !player.storage.wanquanranshaosx;
                },
                content() {
                    player.removeMark('charge', 10, true);
                    player.storage.wanquanranshaosx = true;
                    player.storage.bujuesidou += 1;
                    player.update();
                },
                group: ['jiewanquanranshao_1', 'jiewanquanranshao_2', 'jiewanquanranshao_3', 'jiewanquanranshao_4', 'jiewanquanranshao_5', 'jiewanquanranshao_6'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'damageBegin4',
                        },
                        nobracket: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        silent: true,
                        lastDo: true,
                        filter(event, player) {
                            return event.player != player && event.source && event.source == player && player.storage.wanquanranshaosx;
                        },
                        content() {
                            if (trigger.card && trigger.card.name == 'sha' && trigger.player.hujia > 0) {
                                trigger.num += 2;
                            }
                            if (trigger.player.hujia == 0) {
                                trigger.num++;
                            }
                            if (trigger.player.hujia == 0 && trigger.player.hasSkill('jiporuodiansx')) {
                                trigger.num++;
                            }
                        },
                    },
                    2: {
                        trigger: {
                            global: 'damageEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.hujia && !event.player.hujia && event.player.isIn() && event.player != player && event.source && event.source == player;
                        },
                        nobracket: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            'step 0';
                            trigger.player.addTempSkill('jiporuodiansx');
                            ('step 1');
                            var cards = get.cardPile(function (card) {
                                return card.name == 'sha' && card.nature == 'xb_anmie';
                            });
                            if (cards) player.gain(cards, player, 'gain2');
                            ('step 2');
                            player.storage.bujuesidou += 1;
                            player.update();
                        },
                    },
                    3: {
                        trigger: {
                            player: 'useCard',
                        },
                        nobracket: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && player.storage.wanquanranshaosx;
                        },
                        content() {
                            player.recover();
                            if (player.countMark('charge') <= 9) {
                                player.addMark('charge', 1, true);
                            }
                            if (player.countMark('charge') == 10) {
                            }
                        },
                    },
                    4: {
                        trigger: {
                            player: 'phaseEnd',
                        },
                        nobracket: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            player.storage.bujuesidou = 0;
                            player.storage.wanquanranshaosx = false;
                        },
                    },
                    5: {
                        trigger: {
                            global: 'die',
                        },
                        nobracket: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.player != player && event.source && event.source == player && player.storage.wanquanranshaosx && _status.currentPhase == player;
                        },
                        content() {
                            'step 0';
                            var cards = get.cardPile(function (card) {
                                return card.name == 'sha' && card.nature == 'xb_anmie';
                            });
                            if (cards) player.gain(cards, player, 'gain2');
                            ('step 1');
                            player.storage.bujuesidou += 1;
                            player.update();
                        },
                    },
                    6: {
                        trigger: {
                            global: 'damageBegin4',
                        },
                        nobracket: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        _priority: -Infinity,
                        lastDo: true,
                        filter(event, player) {
                            return event.player != player && event.source && event.source == player && player.storage.wanquanranshaosx;
                        },
                        content() {
                            trigger.nature = 'fire';
                        },
                    },
                },
            },
            siji_xuejian_huifu: {
                equipSkill: true,
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                popup: false,
                content() {
                    if (trigger.xuejian_jiashang) player.recover();
                    player.recover();
                    player.removeSkill('siji_xuejian_huifu');
                },
            },
            siji_xuejian1: {
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    return get.type(event.card) == 'basic' || get.type(event.card) == 'trick' || get.type(event.card) == 'spell' || get.type(event.card) == 'food' || get.type(event.card) == 'jiguan';
                },
                forced: true,
                content() {
                    trigger.directHit.addArray(game.players);
                },
                ai: {
                    directHit_ai: true,
                },
            },
            siji_xuejian_jiashang1: {
                trigger: {
                    source: 'damageBegin',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    player.chooseToDiscard(trigger.num + 2, 'he', true);
                    trigger.num += 2;
                    trigger.xuejian_jiashang = true;
                    trigger.player.addSkill('siji_xuejian_huifu');
                },
            },
            siji_xuejian: {
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                group: ['siji_xuejian_jiashang1', 'siji_xuejian1'],
            },
            siji_guangji: {
                trigger: {
                    global: ['useCardBegin', 'respondBegin'],
                },
                forced: true,
                charlotte: true,
                content() {
                    player.draw();
                },
            },
            siji_gaozhu: {
                audio: 'ext:死星/audio:2',
                trigger: {
                    global: ['damageBegin', 'loseHpBegin'],
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    var nus = player.maxHp - player.hp;
                    if (trigger.num <= nus) {
                        player.recover(trigger.num);
                    } else {
                        player.recover(nus);
                        player.changeHujia(trigger.num - nus);
                    }
                },
            },
            fulanbukanzhihun: {
                forced: true,
                global: 'fulanbukanzhihun',
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                xikiyouku: true,
                forced: true,
            },
            canpobukanzhixin: {
                init(player) {
                    var a = window.setInterval(function () {
                        if (player.hasSkill('canpobukanzhixin')) {
                            player.storage.canxina = true;
                        } else {
                            game.addGlobalSkill('canpobukanzhixin');
                            window.clearInterval(a);
                        }
                    }, 1000);
                },
                filter(event, player) {
                    return get.type(event.card) != 'basic' && get.type(event.card) != 'equip' && event.targets && event.targets.length > 1 && player.storage.mosidexuetong;
                },
                check(event, player) {
                    return event.parent.excluded.includes(player) || get.tag(event.card, 'multineg') || get.effect(player, event.card, event.player, player) <= 0;
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                xikiyouku: true,
                fixed: true,
                trigger: {
                    target: 'useCardToTargeted',
                },
                content() {
                    'step 0';
                    player
                        .chooseControl('令此牌对所有其他目标无效', '令此牌对你无效')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 1;
                        });
                    ('step 1');
                    if (result.index == 0) {
                        var listPlayer = trigger.targets;
                        for (var i = 0; i < listPlayer.length; i++) if (listPlayer[i] != player) trigger.parent.excluded.add(listPlayer[i]);
                        player.draw();
                        event.goto(3);
                    } else {
                        trigger.parent.excluded.add(player);
                        if (player.storage.誓死) {
                            event.finish();
                        } else event.goto(2);
                    }
                    ('step 2');
                    player.damage();
                    ('step 3');
                    event.finish();
                },
            },
            posuibuzhengzhizhi: {
                init(player) {
                    var a = window.setInterval(function () {
                        if (player.hasSkill('posuibuzhengzhizhi')) {
                            player.storage.suiliedezhi = true;
                        } else {
                            game.addGlobalSkill('posuibuzhengzhizhi');
                            window.clearInterval(a);
                        }
                    }, 1000);
                },
                trigger: {
                    target: 'useCardToTargeted',
                },
                xikiyouku: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                logTarget: 'player',
                check(event, player) {
                    var target = event.player;
                    if (
                        get.attitude(player, target) >= -3 ||
                        target.countCards('he', function (card) {
                            return get.value(card, target) > 5;
                        }) < 3
                    )
                        return false;
                    if (player.hp > 2) return true;
                    if (player.hp == 1) {
                        if (get.tag(event.card, 'respondSha')) {
                            if (player.countCards('h', { name: 'sha' }) == 0) {
                                return true;
                            }
                        } else if (get.tag(event.card, 'respondShan')) {
                            if (player.countCards('h', { name: 'shan' }) == 0) {
                                return true;
                            }
                        } else if (get.tag(event.card, 'damage')) {
                            if (event.card && event.card.name == 'shuiyanqijunx') return player.countCards('e') == 0;
                            return true;
                        }
                    }
                    return false;
                },
                filter(event, player) {
                    return player != event.player && event.player.countDiscardableCards(player, 'he') >= 0 && player.storage.mosidexuetong;
                },
                content() {
                    var trr = trigger.player.countCards('he');
                    if (player.storage.誓死) {
                        if (trr > player.hp) {
                            player.discardPlayerCard(trigger.player, 'visible', true, 'he', Math.max(trr - player.hp, 5));
                            trigger.player.loseHp(2);
                        } else {
                            if ((trr = 0)) {
                                trigger.player.loseHp(2);
                            } else {
                                player.discardPlayerCard(trigger.player, 'visible', true, 'he', 5);
                                trigger.player.loseHp(2);
                            }
                        }
                    } else {
                        if ((trr = 3)) {
                            player.discardPlayerCard(trigger.player, 'visible', true, 'he', 3);
                            trigger.player.loseHp();
                            player.loseHp();
                        } else {
                            if ((trr = 0)) {
                                trigger.player.loseHp();
                                player.loseHp();
                            } else {
                                player.discardPlayerCard(trigger.player, 'visible', true, 'he', Math.min(trr, 3));
                                trigger.player.loseHp();
                                player.loseHp();
                            }
                        }
                    }
                },
            },
            qinshifulanzhixue: {
                init(player) {
                    var a = window.setInterval(function () {
                        if (player.hasSkill('qinshifulanzhixue')) {
                            player.storage.qinshidexue = true;
                        } else {
                            game.addGlobalSkill('qinshifulanzhixue');
                            game.addGlobalSkill('qinshifulanzhixue_1');
                            game.addGlobalSkill('qinshifulanzhixue_2');
                            game.addGlobalSkill('qinshifulanzhixue_3');
                            game.addGlobalSkill('qinshifulanzhixue_4');
                            game.addGlobalSkill('qinshifulanzhixue_5');
                            window.clearInterval(a);
                        }
                    }, 1000);
                },
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (target == player && target.hp == target.maxHp && card.name == 'tao') {
                            return true;
                        }
                    },
                    targetEnabled2(card, player, target, now) {
                        if (target == player && target.hp == target.maxHp && card.name == 'tao') {
                            return true;
                        }
                    },
                    cardEnabled(card, player, forceEnable, now) {
                        if (player.hp == player.maxHp && card.name == 'tao') {
                            return true;
                        }
                    },
                },
                audio: 'ext:死星/audio:2',
                trigger: {
                    player: ['taoBegin', 'jiuBegin', 'shaBegin'],
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                xikiyouku: true,
                filter(event, player) {
                    if (event.player == player && player.storage.mosidexuetong) return true;
                    return false;
                },
                content() {
                    if (event.trigger.name == 'taoBegin') {
                        if (player.storage.誓死 && player.hp == player.maxHp) {
                            trigger.cancel();
                            player.maxHp += 5;
                            player.update();
                        } else {
                            if (player.storage.誓死 && player.hp < player.maxHp) {
                                trigger.baseDamage += 4;
                            } else trigger.baseDamage += 2;
                        }
                    } else {
                        if (player.storage.誓死) trigger.baseDamage += 4;
                        else trigger.baseDamage += 2;
                    }
                },
                group: ['qinshifulanzhixue_1', 'qinshifulanzhixue_2', 'qinshifulanzhixue_3', 'qinshifulanzhixue_4', 'qinshifulanzhixue_5'],
                subSkill: {
                    1: {
                        trigger: {
                            player: ['recoverBefore'],
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        xikiyouku: true,
                        fixed: true,
                        _priority: 1234567890,
                        firstDo: true,
                        filter(event, player) {
                            if (player.storage.mosidexuetong) return true;
                            return false;
                        },
                        content() {
                            if (player.storage.誓死) {
                                player.changeHujia(2 * trigger.num);
                                player.storage.护甲 += 2 * trigger.num;
                                player.maxHp += trigger.num;
                                player.update();
                                trigger.untrigger();
                                trigger.finish();
                                player.hp == player.hp;
                                player.storage.生命 = player.hp;
                                trigger.cancel();
                            } else trigger.num += 2;
                        },
                    },
                    2: {
                        trigger: {
                            player: ['phaseZhunbeiBegin'],
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        xikiyouku: true,
                        fixed: true,
                        filter: (event, player) => !player.hasCard('tao', 'h') && player.storage.mosidexuetong,
                        content() {
                            var list = ['tao'];
                            player.gain(game.createCard(list.randomGet()));
                            if (player.storage.誓死) {
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.draw(3);
                            } else {
                                player.$draw();
                                player.draw();
                            }
                        },
                    },
                    3: {
                        trigger: {
                            player: 'loseMaxHpBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        xikiyouku: true,
                        filter(event, player) {
                            if (player.storage.mosidexuetong) return true;
                            return false;
                        },
                        content() {
                            if (player.storage.誓死) {
                            } else trigger.cancel();
                        },
                    },
                    4: {
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        xikiyouku: true,
                        filter(event, player) {
                            return player.storage.qinshidexue && event.card && event.card.name == 'tao' && player.hp == player.maxHp;
                        },
                        content() {
                            if (player.storage.誓死) {
                                trigger.cancel();
                                player.changeHujia(10);
                                player.maxHp += 5;
                                player.update();
                            } else {
                                trigger.cancel();
                                player.maxHp += 5;
                                player.update();
                            }
                        },
                    },
                    5: {
                        trigger: {
                            player: 'damageBefore',
                            global: 'damageBegin4',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        xikiyouku: true,
                        fixed: true,
                        firstDo: true,
                        _priority: null,
                        filter(event, player) {
                            if (player.storage.mosidexuetong) return true;
                            return false;
                        },
                        content() {
                            if (event.triggername == 'damageBefore') {
                                if (trigger.player == player && player.storage.誓死) {
                                    if (player.hp > 1 && trigger.player == player && trigger.num > 0) {
                                        game.broadcastAll(function (num) {
                                            if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                        }, num);
                                        game.log(player, '受到了' + get.cnNumber(trigger.num) + '点伤害,实际受到一点伤害');
                                        player.$damagepop(-trigger.num);
                                        player.hp -= 1;
                                        player.storage.生命 -= 1;
                                        trigger.untrigger();
                                        trigger.finish();
                                        player.hp == player.hp;
                                        trigger.cancel();
                                        player.storage.生命 = player.hp;
                                        player.changeHujia();
                                        player.storage.护甲 += 1;
                                        player.storage.shisiwuhuan += 1;
                                        player.markSkill('shisiwuhuan');
                                        player.update();
                                        if (player.hp <= 0 && !event.nodying) {
                                            event._dyinged = true;
                                            player.dying(event);
                                        }
                                        game.roundNumber += 3;
                                        game.updateRoundNumber();
                                    } else {
                                        if (player.hp == 1 && player.hujia > 0 && trigger.player == player) {
                                            if (trigger.num > 3) {
                                                game.broadcastAll(function (num) {
                                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                                }, num);
                                                game.log(player, '受到了' + get.cnNumber(trigger.num) + '点伤害,实际受到三点伤害');
                                                game.log(player, '的护甲抵挡了三点伤害');
                                                player.changeHujia(-3).type = 'damage';
                                                player.$damagepop(-3);
                                                trigger.cancel();
                                                trigger.untrigger();
                                                trigger.finish();
                                                player.hp == player.hp;
                                                player.storage.生命 = player.hp;
                                                player.storage.护甲 -= 3;
                                                player.storage.shisiwuhuan += 3;
                                                player.markSkill('shisiwuhuan');
                                                game.roundNumber += 3;
                                                game.updateRoundNumber();
                                            } else {
                                                if (0 < trigger.num <= 3 && trigger.num < player.hujia) {
                                                    game.broadcastAll(function (num) {
                                                        if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                                    }, num);
                                                    game.log(player, '受到了' + get.cnNumber(trigger.num) + '点伤害');
                                                    game.log(player, '的护甲抵挡了' + get.cnNumber(trigger.num) + '点伤害');
                                                    player.$damagepop(-trigger.num);
                                                    player.changeHujia(-trigger.num).type = 'damage';
                                                    player.storage.护甲 -= trigger.num;
                                                    player.storage.shisiwuhuan += trigger.num;
                                                    player.markSkill('shisiwuhuan');
                                                    trigger.cancel();
                                                    trigger.untrigger();
                                                    trigger.finish();
                                                    player.hp == player.hp;
                                                    player.storage.生命 = player.hp;
                                                    game.roundNumber += 3;
                                                    game.updateRoundNumber();
                                                } else {
                                                    if (0 < trigger.num <= 3 && trigger.num >= player.hujia) {
                                                        game.broadcastAll(function (num) {
                                                            if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                                        }, num);
                                                        game.log(player, '受到了' + get.cnNumber(trigger.num) + '点伤害,实际受到' + get.cnNumber(player.hujia) + '点伤害');
                                                        game.log(player, '的护甲抵挡了' + get.cnNumber(player.hujia) + '点伤害');
                                                        player.$damagepop(-trigger.num);
                                                        player.changeHujia(-player.hujia).type = 'damage';
                                                        player.storage.shisiwuhuan += player.hujia;
                                                        player.markSkill('shisiwuhuan');
                                                        player.storage.护甲 -= player.hujia;
                                                        trigger.cancel();
                                                        trigger.untrigger();
                                                        trigger.finish();
                                                        player.hp == player.hp;
                                                        player.storage.生命 = player.hp;
                                                        game.roundNumber += 3;
                                                        game.updateRoundNumber();
                                                    }
                                                }
                                            }
                                        }
                                        if (player.hp == 1 && player.hujia == 0 && trigger.player == player) {
                                            player.hp -= 1;
                                            player.storage.生命 -= 1;
                                            trigger.cancel();
                                            trigger.untrigger();
                                            trigger.finish();
                                            player.hp == player.hp;
                                            player.storage.生命 = player.hp;
                                            player.storage.shisiwuhuan += 1;
                                            player.markSkill('shisiwuhuan');
                                            player.update();
                                            game.roundNumber += 3;
                                            game.updateRoundNumber();
                                        }
                                    }
                                }
                            }
                        },
                    },
                },
            },
            //每次对其他角色造成伤害时,对自己造成1点(体力>1时)/3点(体力=1时)伤害并令本次伤害额外+2且伤害属性改为冰属性
            gaosihanshuang: {
                trigger: {
                    source: ['damageBefore'],
                },
                forced: true,
                async content(event, trigger, player) {
                    if (player.hp > 1) {
                        if (!player.storage.最终) {
                            var chat = ['还记得当年你做了什么吗？', '呵呵,我来帮你回忆回忆!!'].randomGet();
                            player.say(chat);
                            player.damage();
                        }
                        if (player.storage.最终) {
                            var chat = ['寒霜,见证了我的一次死亡……', '被推下悬崖,在寒霜中听着你宣告我的死去……', '如今,也要你体会一下何为告死寒霜!!'].randomGet();
                            player.say(chat);
                            player.damage();
                        }
                    }
                    else if (player.hp == 1) {
                        player.say('……');
                        if (player.hujia >= 3) {
                            player.damage(3);
                        }
                        if (player.hujia > 0 && player.hujia < 3) {
                            player.damage(player.hujia);
                        }
                        if (player.hujia == 0) {
                            player.damage();
                        }
                    }
                    trigger.num += 2;
                    trigger.nature = 'ice';
                },
            },
            //准备阶段和结束阶段额外失去1~3点体力(体力为1时不再失去)
            xuesitongyi: {
                trigger: {
                    global: ['phaseBefore', 'phaseEnd'],
                },
                forced: true,
                async content(event, trigger, player) {
                    if (!player.storage.最终 && player.hp > 1) {
                        var chat = ['为什么？你死了也要纠缠我……', '为什么,我一直忘不掉你,忘不掉你带给我的痛苦？'].randomGet();
                        player.say(chat);
                    }
                    if (player.storage.最终 && player.hp > 1) {
                        var chat = ['被你伤害着,如今的样子,你满意了吧……', '身体各处的疼痛,哪怕你死了,也要你时刻体会品尝!!', '绝不会就此倒下!绝  对  不  会!!'].randomGet();
                        player.say(chat);
                    }
                    var num = [1, 2, 3].randomGet();
                    if (num == 1) {
                        player.loseHp();
                    }
                    if (num == 2) {
                        player.loseHp(2);
                    }
                    if (num == 3) {
                        player.loseHp(3);
                    }
                },
            },
            mochen_sishengsi: {
                nobracket: true,
                global: 'mochen_sishengsi',
                forced: true,
                superCharlotte: true,
                xikiyouku: true,
                charlotte: true,
                fixed: true,
                trigger: { player: 'dyingBefore' },
                filter(event, player) {
                    if (!player.storage.誓死) {
                        return true;
                    }
                    return player.storage.誓死 && !event.reason;
                },
                content() {
                    if (event.triggername == 'dyingBefore' && player.storage.誓死) {
                        player.say(['想用这种方式击杀我？不!!可!!能!!!'].randomGet());
                        trigger.cancel();
                        player.hp = 1;
                        player.storage.shisiwuhuan = player.storage.shisiwuhuan + player.maxHp;
                        player.markSkill('shisiwuhuan');
                        player.update();
                    }
                    if (event.triggername == 'dyingBefore' && !player.storage.誓死) {
                        trigger.cancel();
                        trigger.untrigger();
                        trigger.finish();
                        player.storage.shisiwuhuan = 0;
                        player.storage.cunhu = true;
                        player.maxHp += 20;
                        player.hp = player.maxHp;
                        player.storage.生命 = player.hp;
                        player.changeHujia(2);
                        player.storage.护甲 += 2;
                        player.enableEquip('equip1');
                        player.enableEquip('equip2');
                        player.enableEquip('equip3');
                        player.enableEquip('equip4');
                        player.enableEquip('equip5');
                        player.enableEquip('equip6');
                        player.update();
                        game.addGlobalSkill('shisiwuhuan');
                        game.addGlobalSkill('sidoubuxiu');
                        game.addGlobalSkill('sidoubuxiu_1');
                        player.addSkills('shisibuhuan');
                        player.storage.誓死 = true;
                        player.storage.死斗 = true;
                        game.broadcastAll(function (user) {
                            user.node.name.innerHTML = '腐化默陈';
                        }, player);
                        player.node.avatar.setBackgroundImage('extension/死星/image/character/fuhuamochenx6.jpg');
                        let card = get.cardPile('xuesitongyi', 'field');
                        if (!card) {
                            card = game.createCard('xuesitongyi');
                        }
                        player.equip(card);
                        let cardx = get.cardPile('gaosihanshuang', 'field');
                        if (!cardx) {
                            cardx = game.createCard('gaosihanshuang');
                        }
                        player.equip(cardx);
                        if (!_status.fmbszj && [get.translation(player.name), get.translation(player.name1), get.translation(player.name2)].includes('腐化默陈')) {
                            _status.fmbszj = true;
                            ui.backgroundMusic.src = false;
                            ui.backgroundMusic.autoplay = false;
                            ui.backgroundMusic.addEventListener(
                                'play',
                                function (event) {
                                    event.stopPropagation();
                                    this.src = '';
                                    this.pause();
                                },
                                true
                            );
                            var fmbszjbackgroundMusic = new Audio();
                            fmbszjbackgroundMusic.autoplay = true;
                            fmbszjbackgroundMusic.src = 'extension/死星/audio/まんぼう二等兵-月下美人.mp3';
                            fmbszjbackgroundMusic.play();
                            fmbszjbackgroundMusic.addEventListener('ended', function (event) {
                                this.src = 'extension/死星/audio/まんぼう二等兵-月下美人.mp3';
                                this.play();
                            });
                            setTimeout(function () {
                                player.say('……');
                            }, 5000);
                            setTimeout(function () {
                                player.say('曾经的我们有多么美好,如今的我,便有多恨你……');
                            }, 10000);
                            setTimeout(function () {
                                player.say('在此,弹奏我们的终曲,斩断我们的过去,迎来你,或者我的终结……');
                            }, 15000);
                            setTimeout(function () {
                                player.say('来吧……');
                            }, 20000);
                        }
                        game.countPlayer(function (current) {
                            if (current.isEnemiesOf(player) && (current.maxHp < 40 || current.maxHp == Infinity)) {
                                current.addMark('sxtiaolvsx');
                                current.hp = 0;
                                current.maxHp = 40;
                                current.recover(current.maxHp - current.hp);
                                current.update();
                            }
                            if (current.isEnemiesOf(player) && current.maxHp >= 40 && current.maxHp != Infinity) {
                                current.addMark('sxtiaolvsx');
                            }
                            if (current.isFriendsOf(player)) {
                                current.maxHp += 10;
                                current.hp += 10;
                                current.hujia += 4;
                                current.recover(current.maxHp - current.hp);
                                current.update();
                            }
                        });
                        event.finish();
                    }
                },
                silent: true,
            },
            mochen_busizhoujuesi: {
                forced: true,
                superCharlotte: true,
                global: 'mochen_busizhoujuesi',
                charlotte: true,
                silent: true,
                fixed: true,
                xikiyouku: true,
                forceDie: true,
            },
            '渐渐的腐烂(默)': {
                trigger: {
                    player: 'phaseBefore',
                    global: ['dieBefore'],
                },
                init() {
                    ui.backgroundMusic.src = 'extension/死星/audio/腐化(默).mp3';
                },
                group: ['渐渐的腐烂(默)_1', '渐渐的腐烂(默)_2'],
                forced: true,
                silent: true,
                _priority: -Infinity,
                lastDo: true,
                superCharlotte: true,
                xikiyouku: true,
                charlotte: true,
                fixed: true,
                content() {
                    if (event.triggername == 'phaseBefore') {
                        ui.backgroundMusic.src = 'extension/死星/audio/腐化(默).mp3';
                    }
                    if (event.triggername == 'dieBefore') {
                        trigger.cancel();
                        trigger.player.hp = trigger.player.maxHp;
                        trigger.player.update();
                        game.countPlayer(function (current) {
                            if (current.name == 'tgtt_sjsrgod' || current.name == 'fuhuamochensi') {
                                current.addSkills('狂刀暴乱');
                            }
                        });
                        player.addSkills('枭魂暴乱');
                        player.addSkills('绝箭暴乱');
                    }
                },
                subSkill: {
                    1: {
                        trigger: {
                            global: 'tgtt_mtcunhuBefore',
                        },
                        forced: true,
                        silent: true,
                        _priority: -Infinity,
                        lastDo: true,
                        superCharlotte: true,
                        xikiyouku: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return player.storage.mosidexuetong;
                        },
                        content() {
                            player.storage.cunhu = true;
                        },
                    },
                    2: {
                        trigger: {
                            global: 'phaseEnd',
                        },
                        forced: true,
                        silent: true,
                        _priority: -Infinity,
                        lastDo: true,
                        superCharlotte: true,
                        xikiyouku: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            game.countPlayer(function (current) {
                                current.removeSkill('mochen_jieshi');
                            });
                        },
                    },
                },
                popup: false,
            },
            狂刀暴乱: {
                mod: {
                    cardname(card, player, name) {
                        var type = lib.card[card.name].type;
                        if (type == 'basic' && card.name != 'tao') return 'sha';
                    },
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return Infinity;
                    },
                    targetInRange(card) {
                        if (card.name == 'sha') return true;
                    },
                },
                nobracket: true,
                inherit: 'qinggang_skill',
                equipSkill: false,
                trigger: {
                    player: 'useCardToTargeted',
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                xikiyouku: true,
                logTarget: 'target',
                content() {
                    trigger.target.addTempSkill('qinggang2');
                    trigger.target.storage.qinggang2.add(trigger.card);
                },
                audio: 'ext:死星/audio:true',
                ai: {
                    unequip: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg && arg.name == 'sha') return true;
                        return false;
                    },
                },
                group: ['狂刀暴乱_1', '狂刀暴乱_2'],
                subSkill: {
                    1: {
                        forced: true,
                        superCharlotte: true,
                        xikiyouku: true,
                        charlotte: true,
                        fixed: true,
                        popup: false,
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && event.target.hp >= player.hp;
                        },
                        logTarget: 'target',
                        content() {
                            trigger.parent.directHit.add(trigger.target);
                            game.log(player, '的<span class="greentext">【狂刀暴乱】</span class>被触发');
                            game.log(trigger.card, '强制命中');
                        },
                    },
                    2: {
                        forced: true,
                        silent: true,
                        forced: true,
                        superCharlotte: true,
                        xikiyouku: true,
                        charlotte: true,
                        fixed: true,
                        popup: false,
                        trigger: {
                            source: 'damageBegin4',
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        content() {
                            trigger.cancel();
                            trigger.player.changeHujia(2);
                        },
                    },
                },
            },
            枭魂暴乱: {
                trigger: {
                    global: 'recoverAfter',
                },
                forced: true,
                nobracket: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                xikiyouku: true,
                filter(event, player, name) {
                    return event.player.name != 'tgtt_sjtsliuying' && event.player.name != 'sxliuyingsx' && event.player.name != 'jiesxliuyingsx' && event.player.name != 'tgtt_sjsrgod' && event.player != player;
                },
                logTarget: 'target',
                content() {
                    'step 0';
                    var num = trigger.player.hp;
                    player.discardPlayerCard(trigger.player, 'he', num, true);
                    trigger.player.addTempSkill('siji_xiaohun_noUse', { player: 'phaseAfter' });
                },
            },
            绝箭暴乱: {
                trigger: {
                    player: 'useCardToTargeted',
                },
                forced: true,
                nobracket: true,
                superCharlotte: true,
                lastDo: true,
                silent: true,
                charlotte: true,
                fixed: true,
                xikiyouku: true,
                filter(event, player) {
                    return event.card && event.card.name == 'wanjian';
                },
                content() {
                    var targetjjbl = game.filterPlayer();
                    trigger.parent.excluded.remove(targetjjbl);
                    trigger.parent.excluded.add(player);
                },
                group: ['绝箭暴乱_1', '绝箭暴乱_2', '绝箭暴乱_3', '绝箭暴乱_4'],
                subSkill: {
                    1: {
                        enable: 'phaseUse',
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        xikiyouku: true,
                        content() {
                            'step 0';
                            player.chooseToDiscard(1, 'he', '弃一张非基本牌', function (card) {
                                return get.type(card) !== 'basic';
                            });
                            ('step 1');
                            if (result.bool) {
                                player.chooseUseTarget({ name: 'wanjian' }, true);
                            } else event.finish();
                        },
                    },
                    2: {
                        trigger: {
                            global: ['respond', 'useCard'],
                        },
                        forced: true,
                        silent: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        xikiyouku: true,
                        filter(event, player) {
                            return event.getParent(2).name == 'wanjian';
                        },
                        content() {
                            if (trigger.player.name != 'jiesxliuyingsx' && trigger.player.name != 'sxliuyingsx' && trigger.player.name != 'tgtt_sjtsliuying' && trigger.player.name != 'tgtt_sjsrgod' && trigger.player.name != 'fuhuamochensi') {
                                trigger.player.damage();
                                trigger.player.damage();
                                trigger.player.damage();
                                trigger.player.damage();
                                trigger.player.damage();
                            }
                        },
                    },
                    3: {
                        trigger: {
                            player: 'wanjianBegin',
                        },
                        forced: true,
                        nobracket: true,
                        superCharlotte: true,
                        lastDo: true,
                        silent: true,
                        charlotte: true,
                        fixed: true,
                        xikiyouku: true,
                        content() {
                            trigger.baseDamage += 2;
                        },
                    },
                    4: {
                        trigger: {
                            global: 'useCardToCancelled',
                        },
                        forced: true,
                        nobracket: true,
                        superCharlotte: true,
                        lastDo: true,
                        silent: true,
                        charlotte: true,
                        fixed: true,
                        xikiyouku: true,
                        filter(event, player) {
                            return event.getParent(2).name == 'wanjian';
                        },
                        content() {
                            if (trigger.player.name != 'jiesxliuyingsx' && trigger.player.name != 'sxliuyingsx' && trigger.player.name != 'tgtt_sjtsliuying' && trigger.player.name != 'tgtt_sjsrgod' && triggewr.player.name != 'fuhuamochensi') {
                                trigger.player.damage();
                                trigger.player.damage();
                                trigger.player.damage();
                                trigger.player.damage();
                                trigger.player.damage();
                            }
                        },
                    },
                },
            },
            shisiwuhuan: {
                mod: {
                    cardUsable(card, player, num) {
                        var numm = player.storage.shisiwuhuan;
                        if (card.name == 'sha') return (num += Math.floor(numm / 10));
                    },
                },
                trigger: {
                    player: ['dyingBefore'],
                },
                marktext: '誓',
                intro: {
                    name: '誓死',
                    markcount(storage) {
                        return storage;
                    },
                    content(storage) {
                        return '共有' + storage + '个<誓>,你造成的所有伤害额外+' + Math.floor(storage / 5) + ',你每回合使用杀的次数额外+' + Math.floor(storage / 10) + ',回闪量额外+' + Math.floor(storage / 10) + ',攻击范围额外+' + Math.floor(storage / 5) + '.';
                    },
                },
                forced: true,
                superCharlotte: true,
                xikiyouku: true,
                charlotte: true,
                silent: true,
                fixed: true,
                content() {
                    if (!player.hasHistory('damage') || player.hp > 0) {
                        trigger.untrigger();
                        trigger.finish();
                        player.hp == player.hp;
                    }
                },
                ai: {
                    nohujia: true,
                    maixie: true,
                    maixie_hp: true,
                    skillTagFilter(player) {
                        if (player.hp >= 2) return true;
                        return false;
                    },
                    threaten(player, target) {
                        if (!target.hujia) return 0.8;
                    },
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                return 0.8;
                            }
                        },
                    },
                },
                popup: false,
            },
            默陈自我封印躯壳: {
                init(player, skill) {
                    player.addSkillBlocker(skill);
                    player.storage.最终 = false;
                },
                onremove(player, skill) {
                    player.removeSkillBlocker(skill);
                },
                charlotte: true,
                forced: true,
                _priority: null,
                superCharlotte: true,
                lastDo: true,
                silent: true,
                fixed: true,
                xikiyouku: true,
                ai: {
                    unequip: true,
                },
                skillBlocker(skill, player, card) {
                    if (lib.skill[skill].xikiyouku) return false;
                    else if (lib.skill[skill].TaiguSkill) return false;
                    return true;
                },
                intro: {
                    content(storage, player, skill) {
                        var list = player.getSkills(null, false, false).filter(function (i) {
                            return lib.skill.默陈自我封印躯壳.skillBlocker(i, player);
                        });
                        if (list.length) return '失效技能:' + get.translation(list);
                        return '无失效技能';
                    },
                },
            },
            sidoubuxiu: {
                trigger: {
                    source: 'damageBegin4',
                    global: ['phaseBegin', 'phaseEnd'],
                },
                forced: true,
                _priority: null,
                superCharlotte: true,
                lastDo: true,
                charlotte: true,
                silent: true,
                fixed: true,
                xikiyouku: true,
                content() {
                    if (event.triggername == 'damageBegin4') {
                        var numm = player.storage.shisiwuhuan;
                        if (numm > 4) {
                            trigger.num += Math.floor(numm / 5) + Math.floor(player.storage.sxchongzhisx / 10);
                        }
                    }
                    if (event.triggername == 'phaseBegin' || event.triggername == 'phaseEnd') {
                        if (player.hp > 1) {
                            player.loseHp();
                        }
                    }
                },
                group: 'sidoubuxiu_1',
                subSkill: {
                    1: {
                        nobracket: true,
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        _priority: -26945,
                        forced: true,
                        superCharlotte: true,
                        xikiyouku: true,
                        lastDo: true,
                        charlotte: true,
                        silent: true,
                        fixed: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                        },
                        logTarget: 'target',
                        async content(event, trigger, player) {
                            const num = Math.floor(player.storage.shisiwuhuan / 10) + 1;
                            const id = trigger.target.playerid;
                            const map = trigger.parent.customArgs;
                            if (!map[id]) map[id] = {};
                            if (typeof map[id].shanRequired == 'number') {
                                map[id].shanRequired += num;
                            } else {
                                map[id].shanRequired = num;
                            }
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                var num = Math.floor(player.storage.shisiwuhuan / 10) + 1;
                                if (arg && arg.card.name != 'sha' || arg.target.countCards('h', 'shan') > num) return false;
                            },
                        },
                        _priority: 1,
                    },
                },
            },
            sxchongzhisx: {
                marktext: '音',
                intro: {
                    name: '音躁',
                    markcount(storage) {
                        return storage;
                    },
                    content(storage) {
                        return '共有' + storage + '个<音>,你造成的所有伤害额外+' + Math.floor(storage / 10) + '.';
                    },
                },
            },
            shisibuhuan: {
                forced: true,
                superCharlotte: true,
                xikiyouku: true,
                charlotte: true,
                silent: true,
                fixed: true,
                ai: {
                    nohujia: true,
                    maixie: true,
                    maixie_hp: true,
                    skillTagFilter(player) {
                        if (player.hp >= 2) return true;
                        return false;
                    },
                    threaten(player, target) {
                        if (!target.hujia) return 0.8;
                    },
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                return 0.8;
                            }
                        },
                    },
                },
                popup: false,
            },
            siji_shenli: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + player.maxHp - player.hp;
                    },
                    attackRange(player, num) {
                        return num + player.maxHp - player.hp;
                    },
                },
                trigger: {
                    player: 'phaseDrawBegin',
                },
                forced: true,
                charlotte: true,
                content() {
                    trigger.num += player.maxHp - player.hp;
                },
            },
            siji_shenchi: {
                audio: 'ext:死星/audio:2',
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.source && event.source.countGainableCards(player, 'he') && event.num > 0 && event.source != player;
                },
                content() {
                    'step 0';
                    event.count = Math.min(trigger.num, 9);
                    ('step 1');
                    event.count--;
                    trigger.player.draw(2);
                    trigger.source.chooseToDiscard('he', 2, true);
                    ('step 2');
                    if (result.bool && event.count > 0 && trigger.source.countGainableCards(player, 'he') > 0) event.goto(1);
                },
            },
            siji_shenshang: {
                group: ['siji_shenshang_one', 'siji_shenshang_two'],
                forced: true,
                charlotte: true,
                subSkill: {
                    one: {
                        trigger: {
                            player: 'damageBegin1',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.nature) return true;
                            else return false;
                        },
                        content() {
                            trigger.cancel();
                        },
                    },
                    two: {
                        trigger: {
                            source: 'damageBegin1',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.nature != 'kami';
                        },
                        content() {
                            trigger.nature = 'kami';
                        },
                    },
                },
            },
            siji_yinghu: {
                trigger: {
                    source: 'gainBefore',
                },
                init(player) {
                    player.storage.sjkz_yingyou = player;
                    player.storage.maxHp = player.maxHp;
                    player.update();
                },
                filter(event, player) {
                    var TrueOfFalse = true;
                    if (event.cards.length) {
                        if (Array.isArray(event.cards)) for (var i of event.cards) {
                            if (event.cards[0].name == 'du') TrueOfFalse = false;
                        }
                    }
                    if (!TrueOfFalse) return false;
                    return event.player && event.player != player && event.player.isIn();
                },
                forced: true,
                charlotte: true,
                content() {
                    trigger.player.damage(player);
                    trigger.cancel();
                },
                group: ['siji_yinghu_1', 'siji_yinghu_2', 'siji_yinghu_3'],
                subSkill: {
                    1: {
                        audio: 'ext:死星/audio:2',
                        trigger: {
                            source: 'damageBegin4',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        logTarget: 'player',
                        filter(event, player) {
                            if (event.player.maxHp >= 34 && event.parent.name == 'sha') return true;
                            return false;
                        },
                        content() {
                            var target = trigger.player;
                            if (target.maxHp < 34) trigger.num == trigger.num;
                            else trigger.num = trigger.player.maxHp;
                        },
                    },
                    2: {
                        trigger: {
                            player: 'loseMaxHpBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            trigger.cancel();
                        },
                    },
                    3: {
                        trigger: {
                            player: 'diebefore',
                        },
                        forced: true,
                        silent: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return player.hp > 0;
                        },
                        content() {
                            trigger.untrigger();
                            trigger.finish();
                            player.hp == player.hp;
                        },
                        popup: false,
                    },
                },
            },
            siji_shenduo: {
                trigger: {
                    player: 'dieBegin',
                },
                limited: true,
                forced: true,
                charlotte: true,
                content() {
                    'step 0';
                    player.say('没用的,来体会堕化的力量吧!');
                    trigger.cancel();
                    ('step 1');
                    var num = 6 - player.hp;
                    player.recover(num);
                    ('step 2');
                    player.init('siji_duohuazhenshen');
                    player.hp = 6;
                    player.update();
                },
                mark: true,
                intro: {
                    content: 'limited',
                },
                init(player, skill) {
                    player.storage[skill] = false;
                },
            },
            siji_duohua: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + player.maxHp - player.hp;
                    },
                    attackRange(player, num) {
                        return num + player.maxHp - player.hp;
                    },
                    maxHandcard(player, num) {
                        return (num = player.maxHp);
                    },
                },
                trigger: {
                    player: 'phaseDrawBegin',
                },
                forced: true,
                charlotte: true,
                content() {
                    trigger.num += player.maxHp - player.hp;
                },
            },
            siji_yingyou: {
                trigger: {
                    source: 'gainBefore',
                },
                init(player) {
                    player.storage.sjkz_yingyou = player;
                    player.storage.maxHp = player.maxHp;
                    player.update();
                },
                filter(event, player) {
                    var TrueOfFalse = true;
                    if (event.cards.length) {
                        if (Array.isArray(event.cards)) for (var i of event.cards) {
                            if (event.cards[0].name == 'du') TrueOfFalse = false;
                        }
                    }
                    if (!TrueOfFalse) return false;
                    return event.player && event.player != player && event.player.isIn();
                },
                forced: true,
                charlotte: true,
                content() {
                    trigger.player.damage(player);
                    trigger.cancel();
                },
                group: ['siji_yingyou_1', 'siji_yingyou_2', 'siji_yingyou_3'],
                subSkill: {
                    1: {
                        audio: 'ext:死星/audio:2',
                        trigger: {
                            source: 'damageBegin4',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        logTarget: 'player',
                        filter(event, player) {
                            if (event.player.maxHp >= 34 && event.parent.name == 'sha') return true;
                            return false;
                        },
                        content() {
                            var target = trigger.player;
                            if (target.maxHp < 34) trigger.num == trigger.num;
                            else trigger.num = trigger.player.maxHp;
                        },
                    },
                    2: {
                        trigger: {
                            player: 'diebefore',
                        },
                        forced: true,
                        silent: true,
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return player.hp > 0;
                        },
                        content() {
                            trigger.untrigger();
                            trigger.finish();
                            player.hp == player.hp;
                        },
                        popup: false,
                    },
                    3: {
                        trigger: {
                            player: 'loseMaxHpBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            trigger.cancel();
                        },
                    },
                },
            },
            siji_duoshang: {
                group: ['siji_duoshang_one', 'siji_duoshang_two', 'siji_duoshang_three', 'siji_duoshang_four'],
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                subSkill: {
                    one: {
                        trigger: {
                            player: 'damageBegin1',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            if (event.nature) return true;
                            else return false;
                        },
                        content() {
                            trigger.cancel();
                        },
                        audioname2: {
                            key_shiki: 'shiki_omusubi',
                        },
                    },
                    two: {
                        trigger: {
                            source: 'damageBegin1',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return event.nature != 'kami';
                        },
                        content() {
                            trigger.nature = 'kami';
                        },
                        audioname2: {
                            key_shiki: 'shiki_omusubi',
                        },
                    },
                    three: {
                        trigger: {
                            player: 'turnOverBefore',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            trigger.cancel();
                        },
                        audioname2: {
                            key_shiki: 'shiki_omusubi',
                        },
                    },
                    four: {
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            'step 0';
                            player.chooseTarget(get.prompt('堕殇'), function (card, player, target) {
                                return target != player && !target.hasSkill('baiban');
                            }).ai = function (target) {
                                var att = get.attitude(player, target);
                                if (att >= 0) return 0;
                                var skills = target.getSkills();
                                for (var i = 0; i < skills.length; i++) {
                                    if (!get.is.locked(skills[i])) {
                                        if (target.hasSkillTag('maixie')) return 2;
                                        return get.threaten(target);
                                    }
                                }
                                return 0;
                            };
                            ('step 1');
                            if (result.bool) {
                                result.targets[0].addTempSkill('baiban', { player: 'phaseAfter' });
                            }
                        },
                        ai: {
                            expose: 0.2,
                            threaten: 1.4,
                        },
                    },
                },
            },
            siji_shenjue: {
                audio: 'ext:死星/audio:2',
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    return event.source && event.source.countGainableCards(player, 'he') && event.num > 0 && event.source != player;
                },
                content() {
                    'step 0';
                    event.count = Math.min(trigger.num, 9);
                    ('step 1');
                    event.count--;
                    trigger.player.draw(3);
                    trigger.source.damage();
                    trigger.source.chooseToDiscard('he', 3, true);
                    ('step 2');
                    if (result.bool && event.count > 0 && trigger.source.countGainableCards(player, 'he') > 0) event.goto(1);
                },
            },
            siji_shengui: {
                trigger: {
                    player: 'dieBefore',
                },
                forced: true,
                charlotte: true,
                superCharlotte: true,
                fixed: true,
                mark: true,
                intro: {
                    content: 'limited',
                },
                limited: true,
                init(player, skill) {
                    player.storage[skill] = false;
                },
                content() {
                    'step 0';
                    trigger.cancel();
                    ('step 1');
                    var num = 6 - player.hp;
                    player.recover(num);
                    ('step 2');
                    player.storage.siji_shengui = true;
                    player.awakenSkill('siji_shengui');
                },
            },
            mouxiayuan: {
                audio: 'ext:死星/audio:2',
                trigger: {
                    global: 'clearHujia',
                },
                filter(event, player) {
                    if (player.countCards('h') < 2 || event.player == player || player.hasSkill('mouxiayuan_silent')) return false;
                    return event.type == 'damage';
                },
                forced: true,
                content() {
                    'step 0';
                    player.chooseCard(get.prompt('mouxiayuan', trigger.player), '弃置两张手牌并令' + get.translation(trigger.player) + '回复' + get.cnNumber(trigger.player.LastHujia) + '点护甲', 'h', 2).set('ai', function (card) {
                        var player = _status.event.player;
                        if (get.attitude(player, _status.event.getTrigger().player) > 3) return 11 - get.value(card);
                        return -1;
                    });
                    ('step 1');
                    if (result.bool) {
                        player.discard(result.cards);
                        player.addTempSkills('mouxiayuan_silent', 'roundStart');
                        trigger.player.changeHujia(trigger.player.LastHujia);
                    }
                },
                subSkill: {
                    silent: {
                        charlotte: true,
                        mark: true,
                        intro: {
                            content: '本轮已发动此技能',
                        },
                    },
                },
            },
            moujieyue: {
                audio: 'ext:死星/audio:2',
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                content() {
                    'step 0';
                    player.chooseTarget(get.prompt2('moujieyue'), lib.filter.notMe).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.attitude(player, target) * (5 - target.hujia) * (target.hujia >= 5 ? -0.25 : 1) + (target.hujia == 5 ? get.attitude(player, target) : 0);
                    });
                    ('step 1');
                    if (result.bool) {
                        var target = result.targets[0];
                        target.changeHujia(1);
                        target.draw(2);
                        target.chooseCard('he', 2, true, '节钺:将两张牌交给' + get.translation(player));
                        event.target = target;
                    }
                    ('step 2');
                    if (result.bool) target.give(result.cards, player, true);
                },
            },
            ai: {
                threaten: 1.3,
                expose: 0.2,
            },
            siji_zhenchan: {
                mod: {
                    targetEnabled(card, player, target, event) {
                        if (get.tag(card, 'damage')) return false;
                        else if (get.type(card) == 'delay') return false;
                        else if (card.name == 'dpcqr_nature_sha') return false;
                        else if (card.name == 'gw_niuquzhijing') return false;
                        return true;
                    },
                },
                trigger: {
                    player: 'linkBegin',
                    target: 'useCardToBefore',
                },
                forced: true,
                charlotte: true,
                audio: 'ext:死星/audio:2',
                filter(event, player, card) {
                    if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                    if (get.tag(event.card, 'damage')) return true;
                    else if (event.card && event.card.name == 'dpcqr_nature_sha') return true;
                    else if (event.card && event.card.name == 'huogong') return true;
                    return false;
                    if (!player.isLinked()) return true;
                },
                content() {
                    trigger.cancel();
                    player.link(false);
                },
            },
            siji_mengbian: {
                audio: 'ext:死星/audio:1',
                trigger: {
                    global: 'judge',
                },
                forced: true,
                charlotte: true,
                content() {
                    'step 0';
                    player
                        .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('siji_mengbian'), 'hes', function (card) {
                            var player = _status.event.player;
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                            if (mod != 'unchanged') return mod;
                            return true;
                        })
                        .set('ai', function (card) {
                            var trigger = _status.event.getTrigger();
                            var player = _status.event.player;
                            var judging = _status.event.judging;
                            var result = trigger.judge(card) - trigger.judge(judging);
                            var attitude = get.attitude(player, trigger.player);
                            if (attitude == 0 || result == 0) {
                                if (trigger.player != player) return 0;
                                if (
                                    game.hasPlayer(function (current) {
                                        return get.attitude(player, current) < 0;
                                    })
                                ) {
                                    var checkx = lib.skill.xinleiji.judgeCheck(card, true) - lib.skill.xinleiji.judgeCheck(judging);
                                    if (checkx > 0) return checkx;
                                }
                                return 0;
                            }
                            if (attitude > 0) {
                                return result;
                            } else {
                                return -result;
                            }
                        })
                        .set('judging', trigger.player.judging[0]);
                    ('step 1');
                    if (result.bool) {
                        player.respond(result.cards, 'highlight', 'siji_mengbian', 'noOrdering');
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.bool) {
                        player.$gain2(trigger.player.judging[0]);
                        player.gain(trigger.player.judging[0]);
                        var card = result.cards[0];
                        if (card.suit == ['black', 'red'] && card.number > 1 && card.number < 10) player.draw('nodelay');
                        trigger.player.judging[0] = result.cards[0];
                        trigger.orderingCards.addArray(result.cards);
                        game.log(trigger.player, '的判定牌改为', result.cards[0]);
                    }
                    ('step 3');
                },
                ai: {
                    rejudge: true,
                    tag: {
                        rejudge: 1,
                    },
                },
            },
            siji_diaoyi: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + 2;
                    },
                    attackRange(rin, ball) {
                        return ball + 2;
                    },
                    maxHandcard: (player, num) => num + 2,
                },
                audio: 'ext:死星/audio:1',
                trigger: {
                    player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                },
                forced: true,
                charlotte: true,
                content() {
                    'step 0';
                    var num = game.roundNumber;
                    if (num && typeof num == 'number') player.draw(2 + Math.min(3, num));
                    ('step 1');
                    var next = player.phaseUse();
                    event.next.remove(next);
                    trigger.next.push(next);
                    player.recover();
                },
            },
            siji_yihua: {
                trigger: {
                    player: 'dying',
                },
                limited: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                mark: true,
                intro: {
                    content: 'limited',
                },
                init(player, skill) {
                    player.storage[skill] = false;
                },
                content() {
                    'step 0';
                    player.say('没用的,来体会堕化的力量吧!');
                    ('step 1');
                    player.init('siji_duohuajuejun');
                    player.update();
                    ('step 2');
                    var num = 4 - player.hp;
                    player.recover(num);
                    ('step 3');
                    player.storage.siji_yihua = true;
                    player.awakenSkill('siji_yihua');
                },
            },
            siji_jiejiu: {
                trigger: {
                    global: 'dying',
                },
                _priority: 6,
                charlotte: true,
                filter(event, player) {
                    return event.player.hp <= 0 && event.player != player;
                },
                logTarget: 'player',
                check(event, player) {
                    return get.attitude(player, event.player) > 1;
                },
                content() {
                    'step 0';
                    player.loseHp();
                    player.chooseToDiscard(target, 'hej', 1, true);
                    ('step 1');
                    trigger.player.recover(2 - trigger.player.hp);
                    ('step 2');
                    trigger.player.draw(2);
                },
                ai: {
                    threaten: 0.5,
                },
            },
            siji_sanyi: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + 1;
                    },
                    attackRange(rin, ball) {
                        return ball + 1;
                    },
                    maxHandcard: (player, num) => num - 2,
                },
                audio: 'ext:死星/audio:1',
                trigger: {
                    player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                },
                forced: true,
                charlotte: true,
                content() {
                    'step 0';
                    var num = game.roundNumber;
                    if (num && typeof num == 'number') player.draw(2 + Math.min(4, num));
                    ('step 1');
                    var next = player.phaseUse();
                    event.next.remove(next);
                    trigger.next.push(next);
                    player.recover();
                },
            },
            siji_juechan: {
                mod: {
                    targetEnabled(card, player, target) {
                        if (get.tag(card, 'damage')) return false;
                        else if (get.type(card) == 'delay') return false;
                        else if (card.name == 'dpcqr_nature_sha') return false;
                        else if (card.name == 'gw_niuquzhijing') return false;
                        return true;
                    },
                },
                trigger: {
                    player: 'linkBegin',
                    target: 'useCardToBegin',
                },
                forced: true,
                charlotte: true,
                audio: 'ext:死星/audio:2',
                filter(event, player, card) {
                    if (!['basic', 'trick', 'spell', 'jiguan'].includes(get.type(event.card))) return false;
                    if (get.tag(event.card, 'damage')) return true;
                    else if (event.card && event.card.name == 'dpcqr_nature_sha') return true;
                    else if (event.card && event.card.name == 'gw_niuquzhijing') return true;
                    return false;
                    if (!player.isLinked()) return true;
                },
                content() {
                    'step 0';
                    trigger.cancel();
                    player.link(false);
                    ('step 1');
                    if (player.hp < 4) player.recover();
                    else player.loseHp();
                },
                group: ['siji_juechan_1', 'siji_juechan_2', 'siji_juechan_3'],
                subSkill: {
                    1: {
                        trigger: {
                            player: 'turnOverBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            if (player.isDamaged()) player.recover();
                            else player.draw(2);
                        },
                    },
                    2: {
                        trigger: {
                            player: 'linkBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            if (player.isDamaged()) player.recover();
                            else player.draw(2);
                        },
                    },
                    3: {
                        trigger: {
                            global: 'phaseJieshuBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            if (player.isDamaged()) player.recover();
                        },
                    },
                },
                ai: {
                    threaten: 5,
                },
            },
            siji_mengshi: {
                audio: 'ext:死星/audio:2',
                audioname: ['梦逝4', '梦逝5'],
                trigger: {
                    global: 'judge',
                },
                forced: true,
                charlotte: true,
                content() {
                    'step 0';
                    player.draw();
                    player
                        .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('siji_mengshi'), 'hes', function (card) {
                            var player = _status.event.player;
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                            if (mod != 'unchanged') return mod;
                            return true;
                        })
                        .set('ai', function (card) {
                            var trigger = _status.event.getTrigger();
                            var player = _status.event.player;
                            var judging = _status.event.judging;
                            var result = trigger.judge(card) - trigger.judge(judging);
                            var attitude = get.attitude(player, trigger.player);
                            if (attitude == 0 || result == 0) {
                                if (trigger.player != player) return 0;
                                if (
                                    game.hasPlayer(function (current) {
                                        return get.attitude(player, current) < 0;
                                    })
                                ) {
                                    var checkx = lib.skill.xinleiji.judgeCheck(card, true) - lib.skill.xinleiji.judgeCheck(judging);
                                    if (checkx > 0) return checkx;
                                }
                                return 0;
                            }
                            if (attitude > 0) {
                                return result;
                            } else {
                                return -result;
                            }
                        })
                        .set('judging', trigger.player.judging[0]);
                    ('step 1');
                    if (result.bool) {
                        player.respond(result.cards, 'highlight', 'siji_mengshi', 'noOrdering');
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.bool) {
                        player.$gain2(trigger.player.judging[0]);
                        player.gain(trigger.player.judging[0]);
                        var card = result.cards[0];
                        if (card.suit == ('black' || 'red') && card.number > 1 && card.number < 10) player.draw('nodelay');
                        trigger.player.judging[0] = result.cards[0];
                        trigger.orderingCards.addArray(result.cards);
                        game.log(trigger.player, '的判定牌改为', result.cards[0]);
                    }
                    ('step 3');
                },
                group: ['mengshi'],
            },
            mengshi: {
                audio: 'ext:死星/audio:2',
                audioname: ['梦逝4', '梦逝5'],
                shaRelated: true,
                trigger: {
                    player: 'useCardToPlayered',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                check(event, player) {
                    return get.attitude(player, event.target) <= 0;
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                logTarget: 'target',
                content() {
                    if (!trigger.target.hasSkill('baiban')) {
                        trigger.target.addTempSkill('baiban');
                        trigger.parent.directHit.add(trigger.target);
                    }
                },
            },
            siji_juehui: {
                trigger: {
                    global: 'dying',
                },
                _priority: 6,
                charlotte: true,
                filter(event, player) {
                    return event.player.hp <= 0 && event.player != player;
                },
                logTarget: 'player',
                check(event, player) {
                    return get.attitude(player, event.player) > 1;
                },
                content() {
                    'step 0';
                    player.loseHp(2);
                    player.chooseToDiscard(target, 'hej', 1, true);
                    ('step 1');
                    trigger.player.recover(3 - trigger.player.hp);
                    trigger.player.draw(3);
                    trigger.player.turnOver(false);
                    trigger.player.link(false);
                    ('step 2');
                    player.recover();
                },
                ai: {
                    threaten: 0.5,
                },
            },
            siji_fuhua: {
                trigger: {
                    player: 'dieBefore',
                },
                limited: true,
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                mark: true,
                intro: {
                    content: 'limited',
                },
                init(player, skill) {
                    player.storage[skill] = false;
                },
                content() {
                    'step 0';
                    player.say('你们!不要太嚣张了!!呃呃呃啊啊啊啊啊啊啊!!!!!!!');
                    trigger.cancel();
                    ('step 1');
                    player.init('fuhuajuejun');
                    player.hp = 0;
                    player.update();
                    ('step 2');
                    var num = player.maxHp - player.hp;
                    player.recover(num);
                    ('step 3');
                    player.storage.siji_fuhua = true;
                    player.awakenSkill('siji_fuhua');
                    ('step 4');
                    game.countPlayer(function (current) {
                        if (current != player) current.addTempSkill('siji_wuxiao');
                    });
                },
            },
            siji_bihun: {
                mod: {
                    globalTo(from, to, distance) {
                        return distance + 1;
                    },
                    maxHandcard: (player, num) => player.maxHp + 2,
                },
                init(player) {
                    player.$disableJudge();
                },
                trigger: {
                    target: 'useCardToTargeted',
                },
                audio: 'ext:死星/audio:2',
                forced: true,
                charlotte: true,
                forced: true,
                preHidden: true,
                filter(event, player) {
                    return event.card && (event.card.name == 'sha' || event.card.name == 'dpcqr_nature_sha');
                },
                content() {
                    if (player.isDamaged()) {
                        event.cards = trigger.cards.filterInD();
                        player.gain(event.cards, 'gain2');
                        trigger.excluded.push(player);
                    } else player.draw(2);
                },
            },
            siji_zhanzhi: {
                trigger: {
                    target: 'useCardToTargeted',
                },
                charlotte: true,
                logTarget: 'player',
                check(event, player) {
                    var target = event.player;
                    if (
                        get.attitude(player, target) >= -3 ||
                        target.countCards('he', function (card) {
                            return get.value(card, target) > 5;
                        }) < 3
                    )
                        return false;
                    if (player.hp > 2) return true;
                    if (player.hp == 1) {
                        if (get.tag(event.card, 'respondSha')) {
                            if (player.countCards('h', { name: 'sha' }) == 0) {
                                return true;
                            }
                        } else if (get.tag(event.card, 'respondShan')) {
                            if (player.countCards('h', { name: 'shan' }) == 0) {
                                return true;
                            }
                        } else if (get.tag(event.card, 'damage')) {
                            if (event.card && event.card.name == 'shuiyanqijunx') return player.countCards('e') == 0;
                            return true;
                        }
                    }
                    return false;
                },
                filter(event, player) {
                    return player != event.player && event.player.countDiscardableCards(player, 'he') > 0;
                },
                content() {
                    player.discardPlayerCard(trigger.player, true, 'he', [1, 3]);
                    trigger.player.loseHp();
                    player.loseHp();
                },
            },
            siji_xueling: {
                audio: 'ext:死星/audio:2',
                trigger: {
                    player: ['taoBegin'],
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (event.player == player) return true;
                    return false;
                },
                content() {
                    trigger.baseDamage++;
                },
                group: ['siji_xueling_1', 'siji_xueling_2'],
                subSkill: {
                    1: {
                        trigger: {
                            player: ['recoverBegin'],
                        },
                        forced: true,
                        charlotte: true,
                        content() {
                            trigger.num++;
                        },
                    },
                    2: {
                        trigger: {
                            player: ['phaseZhunbeiBegin'],
                        },
                        forced: true,
                        charlotte: true,
                        filter: (event, player) => !player.hasCard('tao', 'h'),
                        content() {
                            var list = ['tao'];
                            player.gain(game.createCard(list.randomGet()));
                            player.$draw();
                            player.draw();
                        },
                    },
                },
            },
            siji_suoxin: {
                filter(event, player) {
                    return get.type(event.card) == 'trick' && event.targets && event.targets.length > 1;
                },
                check(event, player) {
                    return event.parent.excluded.includes(player) || get.tag(event.card, 'multineg') || get.effect(player, event.card, event.player, player) <= 0;
                },
                forced: true,
                charlotte: true,
                trigger: {
                    target: 'useCardToTargeted',
                },
                content() {
                    'step 0';
                    player
                        .chooseControl('令此牌对所有其他目标无效', '令此牌对你无效')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 1;
                        });
                    ('step 1');
                    if (result.index == 0) {
                        var listPlayer = trigger.targets;
                        for (var i = 0; i < listPlayer.length; i++) if (listPlayer[i] != player) trigger.parent.excluded.add(listPlayer[i]);
                    } else trigger.parent.excluded.add(player);
                },
            },
            siji_xueduo: {
                trigger: {
                    player: 'dieBefore',
                },
                limited: true,
                forced: true,
                charlotte: true,
                lastDo: true,
                global: 'siji_xueduo',
                content() {
                    'step 0';
                    trigger.cancel();
                    player.skills = [];
                    ('step 1');
                    var num = 2 - player.hp;
                    player.recover(num);
                    ('step 2');
                    player.init('siji_duohuamochen');
                    player.hp = 3;
                    player.update();
                },
                mark: true,
                intro: {
                    content: 'limited',
                },
                init(player, skill) {
                    player.storage[skill] = false;
                },
            },
            siji_sihun: {
                mod: {
                    globalTo(from, to, distance) {
                        if (to.storage.buzhe == 1) return distance + 4;
                        else return distance + 2;
                    },
                    maxHandcard(player, num) {
                        if (player.storage.buzhe == 1) return (num = player.maxHp + 6);
                        else return (num = player.maxHp + 4);
                    },
                },
                init(player) {
                    player.$disableJudge();
                },
                init2(player) {
                    player.storage.buzhe == 0;
                },
                trigger: {
                    target: 'useCardToTargeted',
                },
                audio: 'ext:死星/audio:2',
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                preHidden: true,
                filter(event, player) {
                    return event.card && (event.card.name == 'sha' || event.card.name == 'dpcqr_nature_sha');
                },
                content() {
                    if (player.isDamaged()) {
                        event.cards = trigger.cards.filterInD();
                        player.gain(event.cards, 'gain2');
                        trigger.excluded.push(player);
                    } else {
                        if (player.storage.buzhe == 1) player.draw(5);
                        else player.draw(3);
                    }
                },
                group: ['siji_sihun_1', 'siji_sihun_2'],
            },
            siji_sihun_1: {
                trigger: {
                    player: 'phaseBegin',
                },
                forced: true,
                silent: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                content() {
                    game.countPlayer(function (current) {
                        if (current != player) current.addTempSkill('baiban');
                    });
                },
                popup: false,
            },
            siji_sihun_2: {
                trigger: {
                    global: 'phaseZhunbeiBegin',
                },
                forced: true,
                silent: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                content() {
                    'step 0';
                    player.removeSkill('dpcqr_laoyin_you');
                    ('step 1');
                    player.clearSkills();
                    player.unMad();
                },
                popup: false,
            },
            siji_chixin: {
                filter(event, player) {
                    return get.type(event.card) == 'trick' && event.targets && event.targets.length > 1;
                },
                check(event, player) {
                    return event.parent.excluded.includes(player) || get.tag(event.card, 'multineg') || get.effect(player, event.card, event.player, player) <= 0;
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                trigger: {
                    target: 'useCardToTargeted',
                },
                content() {
                    'step 0';
                    player
                        .chooseControl('令此牌对所有其他目标无效', '令此牌对你无效')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            return 1;
                        });
                    ('step 1');
                    if (result.index == 0) {
                        var listPlayer = trigger.targets;
                        for (var i = 0; i < listPlayer.length; i++) if (listPlayer[i] != player) trigger.parent.excluded.add(listPlayer[i]);
                    } else trigger.parent.excluded.add(player);
                    ('step 2');
                    if (player.storage.buzhe == 1) {
                        player.recover(3);
                        player.draw(4);
                    } else {
                        player.recover();
                        player.draw(2);
                    }
                },
            },
            siji_miezhi: {
                trigger: {
                    target: 'useCardToTargeted',
                },
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                logTarget: 'player',
                check(event, player) {
                    var target = event.player;
                    if (
                        get.attitude(player, target) >= -3 ||
                        target.countCards('he', function (card) {
                            return get.value(card, target) > 5;
                        }) < 3
                    )
                        return false;
                    if (player.hp > 2) return true;
                    if (player.hp == 1) {
                        if (get.tag(event.card, 'respondSha')) {
                            if (player.countCards('h', { name: 'sha' }) == 0) {
                                return true;
                            }
                        } else if (get.tag(event.card, 'respondShan')) {
                            if (player.countCards('h', { name: 'shan' }) == 0) {
                                return true;
                            }
                        } else if (get.tag(event.card, 'damage')) {
                            if (event.card && event.card.name == 'shuiyanqijunx') return player.countCards('e') == 0;
                            return true;
                        }
                    }
                    return false;
                },
                filter(event, player) {
                    return player != event.player && event.player.countDiscardableCards(player, 'he') > 0;
                },
                content() {
                    if (player.storage.buzhe == 1) {
                        player.discardPlayerCard(trigger.player, true, 'he', [1, 6]);
                        trigger.player.loseHp(3);
                        player.loseHp(4);
                    } else {
                        player.discardPlayerCard(trigger.player, true, 'he', [1, 4]);
                        trigger.player.loseHp(1);
                        player.loseHp(2);
                    }
                },
            },
            siji_sixue: {
                audio: 'ext:死星/audio:2',
                trigger: {
                    player: ['taoBegin', 'jiuBegin', 'shaBegin'],
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    if (event.player == player) return true;
                    return false;
                },
                content() {
                    if (player.storage.buzhe == 1) {
                        trigger.baseDamage += 3;
                    } else trigger.baseDamage++;
                },
                group: ['siji_sixue_1', 'siji_sixue_2', 'siji_sixue_3'],
                subSkill: {
                    1: {
                        trigger: {
                            player: ['recoverBegin'],
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            if (player.storage.buzhe == 1) trigger.num += 3;
                            else trigger.num++;
                        },
                    },
                    2: {
                        trigger: {
                            player: ['phaseZhunbeiBegin'],
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter: (event, player) => !player.hasCard('tao', 'h'),
                        content() {
                            var list = ['tao'];
                            player.gain(game.createCard(list.randomGet()));
                            if (player.storage.buzhe == 1) {
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.draw(3);
                            } else {
                                player.$draw();
                                player.draw();
                            }
                        },
                    },
                    3: {
                        trigger: {
                            player: 'loseMaxHpBegin',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        content() {
                            trigger.cancel();
                        },
                    },
                },
            },
            siji_buzhe: {
                trigger: {
                    player: 'dieBefore',
                },
                forced: true,
                charlotte: true,
                superCharlotte: true,
                fixed: true,
                mark: true,
                global: 'siji_buzhe',
                intro: {
                    content: 'limited',
                },
                firstDo: true,
                limited: true,
                init(player, skill) {
                    player.storage[skill] = false;
                },
                content() {
                    'step 0';
                    game.removeGlobalSkill('siji_buzhe');
                    trigger.untrigger();
                    trigger.finish();
                    ('step 1');
                    var num = 2 - player.hp;
                    player.recover(num);
                    ('step 2');
                    player.storage.siji_buzhe = true;
                    player.awakenSkill('siji_buzhe');
                    player.storage.buzhe = 1;
                    player.update();
                },
            },
            xuegaosi: {
                trigger: {
                    player: 'dieBefore',
                },
                forced: true,
                charlotte: true,
                superCharlotte: true,
                fixed: true,
                global: 'xuegaosi',
                lastDo: true,
                mark: true,
                intro: {
                    content: 'limited',
                },
                limited: true,
                init(player, skill) {
                    player.storage[skill] = false;
                },
                filter(event, player) {
                    return player.storage.siji_buzhe && player.storage.buzhe == 1;
                },
                content() {
                    'step 0';
                    trigger.cancel();
                    player.skills = [];
                    ('step 1');
                    player.init('fuhuamochensi');
                    player.hp = player.maxHp;
                    player.update();
                    ('step 2');
                    player.storage.xuegaosi = true;
                    player.awakenSkill('xuegaosi');
                    player.update();
                },
            },
            siji_zhanmeng: {
                audio: 'ext:死星/audio:2',
                trigger: {
                    player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                },
                forced: true,
                content() {
                    'step 0';
                    player.chooseTarget(
                        get.prompt2(event.name),
                        [1, 4],
                        function (card, player, target) {
                            return target.countCards('hej') > 0;
                        },
                        function (target) {
                            return -get.attitude(_status.event.player, target);
                        }
                    );
                    ('step 1');
                    if (result.bool) {
                        result.targets.sortBySeat();
                        event.targets = result.targets;
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (event.targets.length) {
                        var target = event.targets.shift();
                        event.current = target;
                        player.choosePlayerCard(target, 'hej', true);
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    if (result.bool) {
                        player.addToExpansion(result.cards, event.current, 'give').gaintag.add('战梦');
                        event.goto(2);
                    }
                },
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player) {
                    var cards = player.getExpansions('战梦');
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                ai: {
                    threaten: 2,
                },
                global: 'siji_zhanmeng2',
                group: 'siji_zhanmeng2',
            },
            siji_zhanmeng2: {
                enable: 'chooseToUse',
                audio: 'ext:死星/audio:true',
                popup: false,
                viewAs: {
                    name: 'sha',
                },
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return current.hasSkill('siji_zhanmeng') && current.getExpansions('战梦').length > 1 && event.filterTarget({ name: 'sha' }, player, current);
                    });
                },
                filterTarget(card, player, target) {
                    var bool = false;
                    var players = ui.selected.targets.slice(0);
                    for (var i of players) {
                        if (i.hasSkill('siji_zhanmeng') && i.getExpansions('战梦').length > 1) bool = true;
                        break;
                    }
                    if (!bool && (!target.hasSkill('siji_zhanmeng') || target.getExpansions('战梦').length <= 1)) return false;
                    return _status.event._backup.filterTarget.apply(this, arguments);
                },
                complexSelect: true,
                selectCard: -1,
                filterCard() {
                    return false;
                },
                forceaudio: true,
                forced: true,
                prompt: '弃置一名有【战梦】的角色的两张【战梦】,视为对包含其在内的角色使用【杀】.',
                delay: false,
                log: false,
                precontent() {
                    'step 0';
                    var targets = event.result.targets.filter(function (current) {
                        return current.getExpansions('战梦').length > 1 && current.hasSkill('siji_zhanmeng');
                    });
                    if (targets.length == 1) {
                        event.target = targets[0];
                        event.goto(2);
                    } else if (targets.length) {
                        player
                            .chooseTarget(true, '选择弃置【战梦】牌的目标', function (card, player, target) {
                                return _status.event.list.includes(target);
                            })
                            .set('list', targets)
                            .set('ai', function (target) {
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
                        if (event.target.getExpansions('战梦').length == 2) {
                            event.directresult = event.target.getExpansions('战梦').slice(0);
                        } else {
                            player.chooseCardButton('移去两张<战梦>', 2, event.target.getExpansions('战梦'), true);
                        }
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    if (event.directresult || result.bool) {
                        var links = event.directresult || result.links;
                        target.loseToDiscardpile(links);
                    }
                },
                ai: {
                    order() {
                        return get.order({ name: 'sha' }) + 0.05;
                    },
                    yingbian(card, player, targets, viewer) {
                        if (get.attitude(viewer, player) <= 0) return 0;
                        var base = 0,
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
                            var eff = (function () {
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
                        player(player, target, card) {
                            if (_status.mode == 'normal') {
                                var numz = game.countPlayer(function (current) {
                                    return current.identity == 'zhong' || current.identity == 'mingzhong';
                                });
                                var numf = game.countPlayer(function (current) {
                                    return current.identity == 'fan';
                                });
                                if (player.identity == 'nei' && numf > 0 && numz > 0 && (player.hasSkill('shanheyonggu_tz') || player.hasSkill('shanheyonggu_tf'))) {
                                    if (target.identity == 'zhu') {
                                        return -999;
                                    }
                                }
                            }
                        },
                    },
                    tag: {
                        respond: 1,
                        respondShan: 1,
                        damage(card) {
                            if (card.nature == 'poison') return;
                            return 1;
                        },
                        natureDamage(card) {
                            if (card.nature) return 1;
                        },
                        fireDamage(card, nature) {
                            if (card.nature == 'fire') return 1;
                        },
                        thunderDamage(card, nature) {
                            if (card.nature == 'thunder') return 1;
                        },
                        poisonDamage(card, nature) {
                            if (card.nature == 'poison') return 1;
                        },
                        jy_duDamage(card, nature) {
                            if (card.nature == 'jy_du') return 1;
                        },
                        jy_xieDamage(card, nature) {
                            if (card.nature == 'jy_xie') return 1;
                        },
                    },
                },
            },
            siji_yingdun: {
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - 1;
                    },
                    maxHandcard: (player, num) => player.maxHp + 2,
                },
                init(player) {
                    player.$disableJudge();
                },
                trigger: {
                    target: 'useCardToTargeted',
                },
                audio: 'ext:死星/audio:2',
                forced: true,
                charlotte: true,
                forced: true,
                preHidden: true,
                filter(event, player) {
                    return event.card && (event.card.name == 'sha' || event.card.name == 'dpcqr_nature_sha');
                },
                content() {
                    if (player.isDamaged()) {
                        event.cards = trigger.cards.filterInD();
                        player.gain(event.cards, 'gain2');
                        trigger.excluded.push(player);
                    } else player.draw(2);
                },
            },
            siji_shoujue: {
                audio: 'ext:约会大作战/audio:2',
                trigger: {
                    player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                },
                forced: true,
                firstDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                content() {
                    player.chooseUseTarget({ name: 'nanman' }, true);
                },
                group: ['siji_shoujue_1', 'siji_shoujue_2'],
            },
            siji_shoujue1: {
                trigger: {
                    player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                },
                forced: true,
                silent: true,
                popup: false,
                firstDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                content() {
                    game.countPlayer(function (current) {
                        if (current != player) current.addTempSkill('baiban');
                    });
                },
            },
            siji_shoujue2: {
                trigger: {
                    player: ['phaseZhunbeiAfter', 'phaseJieshuAfter'],
                },
                forced: true,
                silent: true,
                popup: false,
                firstDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                content() {
                    game.countPlayer(function (current) {
                        if (current != player) current.addTempSkill('baiban');
                    });
                },
            },
            siji_qufuyaogao: {
                mark: 'card',
                trigger: {
                    player: 'phaseEnd',
                },
                forced: true,
                popup: false,
                nopop: true,
                intro: {
                    content(storage, player) {
                        return '出牌阶段结束时,你回复3点体力(剩余' + player.storage.qufuyaogao_markcount + '回合)';
                    },
                },
                content() {
                    player.storage.qufuyaogao_markcount--;
                    if (player.storage.qufuyaogao_markcount == 0) {
                        delete player.storage.qufuyaogao;
                        delete player.storage.qufuyaogao_markcount;
                        player.removeSkill('siji_qufuyaogao');
                    } else {
                    }
                },
                group: 'qufuyaogao_draw',
                subSkill: {
                    draw: {
                        trigger: {
                            player: 'phaseUseEnd',
                        },
                        forced: true,
                        content() {
                            player.recover(3);
                        },
                    },
                },
            },
            sizou: {
                init(player) {
                    player.calll = 1;
                    if (get.mode() == 'taixuhuanjing' && player.maxHp >= 20) {
                        player.storage.yongzouye = false;
                    } else {
                        player.storage.yongzouye = true;
                    }
                },
                trigger: {
                    player: ['dyingBefore', 'dyingAfter'],
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                filter(event, player, name) {
                    var name = [event.player.name, event.player.name1, event.player.name2];
                    return name.includes('yezoushi');
                },
                content() {
                    game.countPlayer(function (current) {
                        if (current.isEnemiesOf(player)) current.addMark('sxtiaolvsx');
                    });
                    if (player.storage.yongzouye) {
                        if (game.roundNumber < 10) {
                            game.roundNumber = 10;
                            game.updateRoundNumber();
                        }
                        trigger.cancel();
                        trigger.untrigger();
                        player.maxHp += 3;
                        player.maxHp += 2 * player.maxHp;
                        player.hp = player.maxHp;
                        player.update();
                        player.revive(player.maxHp);
                        player.storage.yongzouye = false;
                        if (!_status.yzszj && [get.translation(player.name), get.translation(player.name1), get.translation(player.name2)].includes('默陈(调律)')) {
                            _status.yzszj = true;
                            ui.backgroundMusic.src = false;
                            ui.backgroundMusic.autoplay = false;
                            ui.backgroundMusic.addEventListener(
                                'play',
                                function (event) {
                                    event.stopPropagation();
                                    this.src = '';
                                    this.pause();
                                },
                                true
                            );
                            var yzszjbackgroundMusic = new Audio();
                            yzszjbackgroundMusic.autoplay = true;
                            yzszjbackgroundMusic.src = 'extension/死星/audio/まんぼう二等兵-月下美人.mp3';
                            yzszjbackgroundMusic.play();
                            yzszjbackgroundMusic.addEventListener('ended', function (event) {
                                this.src = 'extension/死星/audio/まんぼう二等兵-月下美人.mp3';
                                this.play();
                            });
                            setTimeout(function () {
                                player.say('……');
                            }, 5000);
                            setTimeout(function () {
                                player.say('果然呢,最终只会变成这样……');
                            }, 10000);
                            setTimeout(function () {
                                player.say('那便在此,奏响永恒死灭的乐章,并在此见证你,或者我的终章……');
                            }, 15000);
                            setTimeout(function () {
                                player.say('来吧……');
                            }, 20000);
                        }
                        game.countPlayer(function (current) {
                            if (current.isEnemiesOf(player) && (current.maxHp < 40 || current.maxHp == Infinity)) {
                                current.addMark('sxtiaolvsx');
                                current.hp = 0;
                                current.maxHp = 40;
                                current.recover(current.maxHp - current.hp);
                                current.update();
                            }
                            if (current.isEnemiesOf(player) && current.maxHp >= 40 && current.maxHp != Infinity) {
                                current.addMark('sxtiaolvsx');
                            }
                            if (current.isFriendsOf(player)) {
                                current.maxHp += 10;
                                current.hp += 10;
                                current.hujia += 4;
                                current.recover(current.maxHp - current.hp);
                                current.update();
                            }
                        });
                    }
                },
                group: ['sizou_1', 'sizou_2'],
                subSkill: {
                    1: {
                        trigger: {
                            target: ['taoBegin'],
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        firstDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        forced: true,
                        filter(event, player) {
                            return event.player.sex == 'female';
                        },
                        content() {
                            trigger.untrigger();
                            trigger.finish();
                            trigger.player.useCard({ name: 'sha' }, player, 'noai').animate = false;
                        },
                    },
                    2: {
                        trigger: {
                            player: 'damageEnd',
                        },
                        usable: 5,
                        silent: true,
                        popup: false,
                        firstDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        filter(event, player) {
                            return get.mode() == 'taixuhuanjing';
                        },
                        async content(event, trigger, player) {
                            if (player.storage.yongzouye && trigger.source == player) {
                                player.maxHp += 1;
                                player.damage();
                            }
                            if (!player.storage.yongzouye && trigger.source == player) {
                                player.damage();
                            }
                        },
                    },
                },
            },
            tiaolusxsx: {
                trigger: {
                    source: ['damageBefore', 'damageZero', 'damageCancelled'],
                },
                forced: true,
                silent: true,
                popup: false,
                firstDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                async content(event, trigger, player) {
                    if (event.triggername == 'damageBefore') {
                        if (trigger.num > 0) {
                            if (!player.storage.yongzouye) {
                                if (trigger.player != player && trigger.player.hasMark('sxtiaolvsx')) {
                                    if (trigger.player.sex != 'female') {
                                        var num = trigger.player.countMark('sxtiaolvsx');
                                        if (trigger.player.hujia >= trigger.player.countMark('sxtiaolvsx')) {
                                            game.broadcastAll(function (num) {
                                                if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                            }, num);
                                            game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                            game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                            trigger.player.$damagepop(-trigger.player.countMark('sxtiaolvsx'));
                                            trigger.player.changeHujia(-trigger.player.countMark('sxtiaolvsx')).type = 'damage';
                                        }
                                        if (trigger.player.hujia < trigger.player.countMark('sxtiaolvsx')) {
                                            game.broadcastAll(function (num) {
                                                if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                            }, num);
                                            game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                            if (trigger.player.hujia != 0) {
                                                game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.hujia) + '点伤害');
                                            }
                                            trigger.player.$damagepop(-trigger.player.countMark('sxtiaolvsx'));
                                            trigger.player.changeHujia(-trigger.player.hujia).type = 'damage';
                                            trigger.player.hp -= trigger.player.countMark('sxtiaolvsx') - trigger.player.hujia;
                                            if (isNaN(trigger.player.hp)) {
                                                trigger.player.hp = 0;
                                            }
                                            trigger.player.update();
                                            if (trigger.player.hp <= 0 && !event.nodying) {
                                                if (trigger.player.isDying()) {
                                                } else {
                                                    if (trigger.player == trigger.die || trigger.player == trigger.dieBefore || trigger.player == trigger.dieBegin || trigger.player == trigger.dieEnd || trigger.player == trigger.dieAfter) {
                                                    } else {
                                                        event._dyinged = true;
                                                        trigger.player.dying(event).source = player.source = player;
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        var num = 2 + trigger.player.countMark('sxtiaolvsx');
                                        if (trigger.player.hujia >= 2 + trigger.player.countMark('sxtiaolvsx')) {
                                            game.broadcastAll(function (num) {
                                                if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                            }, num);
                                            game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                            game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                            trigger.player.$damagepop(-trigger.player.countMark('sxtiaolvsx'));
                                            trigger.player.changeHujia(-trigger.player.countMark('sxtiaolvsx')).type = 'damage';
                                        }
                                        if (trigger.player.hujia < 2 + trigger.player.countMark('sxtiaolvsx')) {
                                            game.broadcastAll(function (num) {
                                                if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                            }, num);
                                            game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                            if (trigger.player.hujia != 0) {
                                                game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.hujia) + '点伤害');
                                            }
                                            trigger.player.$damagepop(-(2 + trigger.player.countMark('sxtiaolvsx')));
                                            trigger.player.changeHujia(-trigger.player.hujia).type = 'damage';
                                            trigger.player.hp -= 2 + trigger.player.countMark('sxtiaolvsx') - trigger.player.hujia;
                                            if (isNaN(trigger.player.hp)) {
                                                trigger.player.hp = 0;
                                            }
                                            trigger.player.update();
                                            if (trigger.player.hp <= 0 && !event.nodying) {
                                                if (trigger.player.isDying()) {
                                                } else {
                                                    if (trigger.player == trigger.die || trigger.player == trigger.dieBefore || trigger.player == trigger.dieBegin || trigger.player == trigger.dieEnd || trigger.player == trigger.dieAfter) {
                                                    } else {
                                                        event._dyinged = true;
                                                        trigger.player.dying(event).source = player.source = player;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            trigger.player.addMark('sxtiaolvsx', trigger.num);
                        } else {
                            if (trigger.num < 0) {
                                if (!player.storage.yongzouye) {
                                    if (trigger.player != player && trigger.player.hasMark('sxtiaolvsx')) {
                                        if (trigger.player.sex != 'female') {
                                            var num = trigger.player.countMark('sxtiaolvsx');
                                            if (trigger.player.hujia >= trigger.player.countMark('sxtiaolvsx')) {
                                                game.broadcastAll(function (num) {
                                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                                }, num);
                                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                trigger.player.$damagepop(-trigger.player.countMark('sxtiaolvsx'));
                                                trigger.player.changeHujia(-trigger.player.countMark('sxtiaolvsx')).type = 'damage';
                                            }
                                            if (trigger.player.hujia < trigger.player.countMark('sxtiaolvsx')) {
                                                game.broadcastAll(function (num) {
                                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                                }, num);
                                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                if (trigger.player.hujia != 0) {
                                                    game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.hujia) + '点伤害');
                                                }
                                                trigger.player.$damagepop(-trigger.player.countMark('sxtiaolvsx'));
                                                trigger.player.changeHujia(-trigger.player.hujia).type = 'damage';
                                                trigger.player.hp -= trigger.player.countMark('sxtiaolvsx') - trigger.player.hujia;
                                                if (isNaN(trigger.player.hp)) {
                                                    trigger.player.hp = 0;
                                                }
                                                trigger.player.update();
                                                if (trigger.player.hp <= 0 && !event.nodying) {
                                                    if (trigger.player.isDying()) {
                                                    } else {
                                                        if (trigger.player == trigger.die || trigger.player == trigger.dieBefore || trigger.player == trigger.dieBegin || trigger.player == trigger.dieEnd || trigger.player == trigger.dieAfter) {
                                                        } else {
                                                            event._dyinged = true;
                                                            trigger.player.dying(event).source = player.source = player;
                                                        }
                                                    }
                                                }
                                            }
                                        } else {
                                            var num = 2 + trigger.player.countMark('sxtiaolvsx');
                                            if (trigger.player.hujia >= 2 + trigger.player.countMark('sxtiaolvsx')) {
                                                game.broadcastAll(function (num) {
                                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                                }, num);
                                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                trigger.player.$damagepop(-(2 + trigger.player.countMark('sxtiaolvsx')));
                                                trigger.player.changeHujia(-(2 + trigger.player.countMark('sxtiaolvsx'))).type = 'damage';
                                            }
                                            if (trigger.player.hujia < 2 + trigger.player.countMark('sxtiaolvsx')) {
                                                game.broadcastAll(function (num) {
                                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                                }, num);
                                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                if (trigger.player.hujia != 0) {
                                                    game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.hujia) + '点伤害');
                                                }
                                                trigger.player.$damagepop(-(2 + trigger.player.countMark('sxtiaolvsx')));
                                                trigger.player.changeHujia(-trigger.player.hujia).type = 'damage';
                                                trigger.player.hp -= 2 + trigger.player.countMark('sxtiaolvsx') - trigger.player.hujia;
                                                if (isNaN(trigger.player.hp)) {
                                                    trigger.player.hp = 0;
                                                }
                                                trigger.player.update();
                                                if (trigger.player.hp <= 0 && !event.nodying) {
                                                    if (trigger.player.isDying()) {
                                                    } else {
                                                        if (trigger.player == trigger.die || trigger.player == trigger.dieBefore || trigger.player == trigger.dieBegin || trigger.player == trigger.dieEnd || trigger.player == trigger.dieAfter) {
                                                        } else {
                                                            event._dyinged = true;
                                                            trigger.player.dying(event).source = player;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                trigger.player.addMark('sxtiaolvsx', -trigger.num);
                            }
                        }
                    }
                    if (event.triggername == 'damageZero') {
                        trigger.player.addMark('sxtiaolvsx', 1);
                    }
                    if (event.triggername == 'damageCancelled') {
                        trigger.player.addMark('sxtiaolvsx', 1);
                    }
                },
                group: ['tiaolusxsx_1', 'tiaolusxsx_2', 'tiaolusxsx_3'],
                subSkill: {
                    1: {
                        trigger: {
                            global: ['damageBegin4'],
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        lastDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        forced: true,
                        filter(event, player, name) {
                            var name = [event.player.name, event.player.name1, event.player.name2];
                            return name.includes('yezoushi');
                        },
                        async content(event, trigger, player) {
                            trigger.source.addMark('sxtiaolvsx', trigger.num);
                            if (trigger.num >= 1) {
                                trigger.num = 1;
                            }
                        },
                    },
                    2: {
                        trigger: {
                            player: ['loseHpBefore', 'loseMaxHpBefore'],
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        firstDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        forced: true,
                        filter(event, player, name) {
                            var name = [event.player.name, event.player.name1, event.player.name2];
                            return name.includes('yezoushi');
                        },
                        async content(event, trigger, player) {
                            trigger.num = 0;
                            trigger.finish();
                        },
                    },
                    3: {
                        trigger: {
                            player: 'dieBefore',
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        firstDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        forced: true,
                        filter(event, player, name) {
                            var name = [event.player.name, event.player.name1, event.player.name2];
                            return name.includes('yezoushi');
                        },
                        async content(event, trigger, player) {
                            if (player.storage.yongzouye) {
                                if (game.roundNumber < 10) {
                                    game.roundNumber = 10;
                                    game.updateRoundNumber();
                                }
                                trigger.untrigger();
                                trigger.cancel();
                                player.maxHp += 3;
                                player.maxHp += 2 * player.maxHp;
                                player.hp = player.maxHp;
                                player.storage.yongzouye = false;
                                game.countPlayer(function (current) {
                                    if (current.isEnemiesOf(player) && (current.maxHp < 40 || current.maxHp == Infinity)) {
                                        current.addMark('sxtiaolvsx');
                                        current.hp = 0;
                                        current.maxHp = 40;
                                        current.recover(current.maxHp - current.hp);
                                        current.update();
                                    }
                                    if (current.isEnemiesOf(player) && current.maxHp >= 40 && current.maxHp != Infinity) {
                                        current.addMark('sxtiaolvsx');
                                    }
                                    if (current.isFriendsOf(player)) {
                                        current.maxHp += 10;
                                        current.hp += 10;
                                        current.hujia += 4;
                                        current.recover(current.maxHp - current.hp);
                                        current.update();
                                    }
                                });
                                if (!_status.yzszj && [get.translation(player.name), get.translation(player.name1), get.translation(player.name2)].includes('默陈(调律)')) {
                                    _status.yzszj = true;
                                    ui.backgroundMusic.src = false;
                                    ui.backgroundMusic.autoplay = false;
                                    ui.backgroundMusic.addEventListener(
                                        'play',
                                        function (event) {
                                            event.stopPropagation();
                                            this.src = '';
                                            this.pause();
                                        },
                                        true
                                    );
                                    var yzszjbackgroundMusic = new Audio();
                                    yzszjbackgroundMusic.autoplay = true;
                                    yzszjbackgroundMusic.src = 'extension/死星/audio/まんぼう二等兵-月下美人.mp3';
                                    yzszjbackgroundMusic.play();
                                    yzszjbackgroundMusic.addEventListener('ended', function (event) {
                                        this.src = 'extension/死星/audio/まんぼう二等兵-月下美人.mp3';
                                        this.play();
                                    });
                                    setTimeout(function () {
                                        player.say('……');
                                    }, 5000);
                                    setTimeout(function () {
                                        player.say('果然呢,最终只会变成这样……');
                                    }, 10000);
                                    setTimeout(function () {
                                        player.say('那便在此,奏响永恒死灭的乐章,并在此见证你,或者我的终章……');
                                    }, 15000);
                                    setTimeout(function () {
                                        player.say('来吧……');
                                    }, 20000);
                                }
                                game.countPlayer(function (current) {
                                    if (current.isEnemiesOf(player) && (current.maxHp < 40 || current.maxHp == Infinity)) {
                                        current.addMark('sxtiaolvsx');
                                        current.hp = 0;
                                        current.maxHp = 40;
                                        current.recover(current.maxHp - current.hp);
                                        current.update();
                                    }
                                    if (current.isEnemiesOf(player) && current.maxHp >= 40 && current.maxHp != Infinity) {
                                        current.addMark('sxtiaolvsx');
                                    }
                                    if (current.isFriendsOf(player)) {
                                        current.maxHp += 10;
                                        current.hp += 10;
                                        current.hujia += 4;
                                        current.recover(current.maxHp - current.hp);
                                        current.update();
                                    }
                                });
                                player.hp = player.hp;
                                trigger.finish();
                            } else {
                                if (player.hp > 0) {
                                    trigger.untrigger();
                                    trigger.cancel();
                                    player.hp = player.hp;
                                    trigger.finish();
                                }
                            }
                        },
                    },
                },
            },
            tiaolusx: {
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    var name = [event.player.name, event.player.name1, event.player.name2];
                    return (
                        !name.includes('yezoushi') &&
                        event.player != player &&
                        event.player.hasMark('sxtiaolvsx') &&
                        event.player.getHistory('useCard', function (card) {
                            return get.tag(card.card, 'recover');
                        }).length == 0
                    );
                },
                forced: true,
                silent: true,
                popup: false,
                firstDo: true,
                superCharlotte: true,
                forceDie: true,
                charlotte: true,
                fixed: true,
                forced: true,
                async content(event, trigger, player) {
                    if (trigger.player.hasMark('sxtiaolvsx')) {
                        if (trigger.player.sex != 'female') {
                            var num = trigger.player.countMark('sxtiaolvsx');
                            if (trigger.player.hujia >= trigger.player.countMark('sxtiaolvsx')) {
                                game.broadcastAll(function (num) {
                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                }, num);
                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                trigger.player.$damagepop(-trigger.player.countMark('sxtiaolvsx'));
                                trigger.player.changeHujia(-trigger.player.countMark('sxtiaolvsx')).type = 'damage';
                            }
                            if (trigger.player.hujia < trigger.player.countMark('sxtiaolvsx')) {
                                game.broadcastAll(function (num) {
                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                }, num);
                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                if (trigger.player.hujia != 0) {
                                    game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.hujia) + '点伤害');
                                }
                                trigger.player.$damagepop(-trigger.player.countMark('sxtiaolvsx'));
                                trigger.player.changeHujia(-trigger.player.hujia).type = 'damage';
                                trigger.player.hp -= trigger.player.countMark('sxtiaolvsx') - trigger.player.hujia;
                                if (isNaN(trigger.player.hp)) {
                                    trigger.player.hp = 0;
                                }
                                trigger.player.update();
                                if (trigger.player.hp <= 0 && !event.nodying) {
                                    if (trigger.player.isDying()) {
                                    } else {
                                        if (trigger.player == trigger.die || trigger.player == trigger.dieBefore || trigger.player == trigger.dieBegin || trigger.player == trigger.dieEnd || trigger.player == trigger.dieAfter) {
                                        } else {
                                            event._dyinged = true;
                                            trigger.player.dying(event).source = player.source = player;
                                        }
                                    }
                                }
                            }
                        } else {
                            var num = 2 + trigger.player.countMark('sxtiaolvsx');
                            if (trigger.player.hujia >= 2 + trigger.player.countMark('sxtiaolvsx')) {
                                game.broadcastAll(function (num) {
                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                }, num);
                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                trigger.player.$damagepop(-(2 + trigger.player.countMark('sxtiaolvsx')));
                                trigger.player.changeHujia(-(2 + trigger.player.countMark('sxtiaolvsx'))).type = 'damage';
                            }
                            if (trigger.player.hujia < 2 + trigger.player.countMark('sxtiaolvsx')) {
                                game.broadcastAll(function (num) {
                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                }, num);
                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                if (trigger.player.hujia != 0) {
                                    game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.hujia) + '点伤害');
                                }
                                trigger.player.$damagepop(-(2 + trigger.player.countMark('sxtiaolvsx')));
                                trigger.player.changeHujia(-trigger.player.hujia).type = 'damage';
                                trigger.player.hp -= 2 + trigger.player.countMark('sxtiaolvsx') - trigger.player.hujia;
                                if (isNaN(trigger.player.hp)) {
                                    trigger.player.hp = 0;
                                }
                                trigger.player.update();
                                if (trigger.player.hp <= 0 && !event.nodying) {
                                    if (trigger.player.isDying()) {
                                    } else {
                                        if (trigger.player == trigger.die || trigger.player == trigger.dieBefore || trigger.player == trigger.dieBegin || trigger.player == trigger.dieEnd || trigger.player == trigger.dieAfter) {
                                        } else {
                                            event._dyinged = true;
                                            trigger.player.dying(event).source = player.source = player;
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                group: ['tiaolusx_1', 'tiaolusx_2', 'tiaolusx_3', 'tiaolusx_4'],
                subSkill: {
                    1: {
                        trigger: {
                            global: ['useCard', 'respond'],
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        firstDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        forceDie: true,
                        forced: true,
                        filter(event, player) {
                            var name = [event.player.name, event.player.name1, event.player.name2];
                            return !name.includes('yezoushi') && event.player != player && event.player.hasMark('sxtiaolvsx');
                        },
                        async content(event, trigger, player) {
                            if (trigger.player.hasMark('sxtiaolvsx')) {
                                if (event.triggername == 'useCard' || event.triggername == 'respond') {
                                    if (
                                        (event.triggername == 'useCard' &&
                                            trigger.player.getHistory('useCard', function (card) {
                                                return card.card.name == 'shan';
                                            }).length >
                                            player.calll - 1) ||
                                        (event.triggername == 'respond' &&
                                            trigger.player.getHistory('respond', function (card) {
                                                return card.card.name == 'shan';
                                            }).length >
                                            player.calll - 1)
                                    ) {
                                        player.calll = player.calll + 1;
                                        if (trigger.player.sex != 'female' && trigger.player.countMark('sxtiaolvsx') > 1) {
                                            trigger.player.removeMark('sxtiaolvsx', Math.floor(trigger.player.countMark('sxtiaolvsx') / 2));
                                        }
                                        if (trigger.player.sex != 'female') {
                                            var num = trigger.player.countMark('sxtiaolvsx');
                                            if (trigger.player.hujia >= trigger.player.countMark('sxtiaolvsx')) {
                                                game.broadcastAll(function (num) {
                                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                                }, num);
                                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                trigger.player.$damagepop(-trigger.player.countMark('sxtiaolvsx'));
                                                trigger.player.changeHujia(-trigger.player.countMark('sxtiaolvsx')).type = 'damage';
                                            }
                                            if (trigger.player.hujia < trigger.player.countMark('sxtiaolvsx')) {
                                                game.broadcastAll(function (num) {
                                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                                }, num);
                                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                if (trigger.player.hujia != 0) {
                                                    game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.hujia) + '点伤害');
                                                }
                                                trigger.player.$damagepop(-trigger.player.countMark('sxtiaolvsx'));
                                                trigger.player.changeHujia(-trigger.player.hujia).type = 'damage';
                                                trigger.player.hp -= trigger.player.countMark('sxtiaolvsx') - trigger.player.hujia;
                                                if (isNaN(trigger.player.hp)) {
                                                    trigger.player.hp = 0;
                                                }
                                                trigger.player.update();
                                                if (trigger.player.hp <= 0 && !event.nodying) {
                                                    if (trigger.player.isDying()) {
                                                    } else {
                                                        if (trigger.player == trigger.die || trigger.player == trigger.dieBefore || trigger.player == trigger.dieBegin || trigger.player == trigger.dieEnd || trigger.player == trigger.dieAfter) {
                                                        } else {
                                                            event._dyinged = true;
                                                            trigger.player.dying(event).source = player.source = player;
                                                        }
                                                    }
                                                }
                                            }
                                        } else {
                                            var num = 2 + trigger.player.countMark('sxtiaolvsx');
                                            if (trigger.player.hujia >= 2 + trigger.player.countMark('sxtiaolvsx')) {
                                                game.broadcastAll(function (num) {
                                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                                }, num);
                                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                trigger.player.$damagepop(-(2 + trigger.player.countMark('sxtiaolvsx')));
                                                trigger.player.changeHujia(-(2 + trigger.player.countMark('sxtiaolvsx'))).type = 'damage';
                                            }
                                            if (trigger.player.hujia < 2 + trigger.player.countMark('sxtiaolvsx')) {
                                                game.broadcastAll(function (num) {
                                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                                }, num);
                                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                if (trigger.player.hujia != 0) {
                                                    game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.hujia) + '点伤害');
                                                }
                                                trigger.player.$damagepop(-(2 + trigger.player.countMark('sxtiaolvsx')));
                                                trigger.player.changeHujia(-trigger.player.hujia).type = 'damage';
                                                trigger.player.hp -= 2 + trigger.player.countMark('sxtiaolvsx') - trigger.player.hujia;
                                                if (isNaN(trigger.player.hp)) {
                                                    trigger.player.hp = 0;
                                                }
                                                trigger.player.update();
                                                if (trigger.player.hp <= 0 && !event.nodying) {
                                                    if (trigger.player.isDying()) {
                                                    } else {
                                                        if (trigger.player == trigger.die || trigger.player == trigger.dieBefore || trigger.player == trigger.dieBegin || trigger.player == trigger.dieEnd || trigger.player == trigger.dieAfter) {
                                                        } else {
                                                            event._dyinged = true;
                                                            trigger.player.dying(event).source = player.source = player;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        if (trigger.player.sex != 'female') {
                                            var num = trigger.player.countMark('sxtiaolvsx');
                                            if (trigger.player.hujia >= trigger.player.countMark('sxtiaolvsx')) {
                                                game.broadcastAll(function (num) {
                                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                                }, num);
                                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                trigger.player.$damagepop(-trigger.player.countMark('sxtiaolvsx'));
                                                trigger.player.changeHujia(-trigger.player.countMark('sxtiaolvsx')).type = 'damage';
                                            }
                                            if (trigger.player.hujia < trigger.player.countMark('sxtiaolvsx')) {
                                                game.broadcastAll(function (num) {
                                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                                }, num);
                                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                if (trigger.player.hujia != 0) {
                                                    game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.hujia) + '点伤害');
                                                }
                                                trigger.player.$damagepop(-trigger.player.countMark('sxtiaolvsx'));
                                                trigger.player.changeHujia(-trigger.player.hujia).type = 'damage';
                                                trigger.player.hp -= trigger.player.countMark('sxtiaolvsx') - trigger.player.hujia;
                                                if (isNaN(trigger.player.hp)) {
                                                    trigger.player.hp = 0;
                                                }
                                                trigger.player.update();
                                                if (trigger.player.hp <= 0 && !event.nodying) {
                                                    if (trigger.player.isDying()) {
                                                    } else {
                                                        if (trigger.player == trigger.die || trigger.player == trigger.dieBefore || trigger.player == trigger.dieBegin || trigger.player == trigger.dieEnd || trigger.player == trigger.dieAfter) {
                                                        } else {
                                                            event._dyinged = true;
                                                            trigger.player.dying(event).source = player;
                                                        }
                                                    }
                                                }
                                            }
                                        } else {
                                            var num = 2 + trigger.player.countMark('sxtiaolvsx');
                                            if (trigger.player.hujia >= 2 + trigger.player.countMark('sxtiaolvsx')) {
                                                game.broadcastAll(function (num) {
                                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                                }, num);
                                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                trigger.player.$damagepop(-(2 + trigger.player.countMark('sxtiaolvsx')));
                                                trigger.player.changeHujia(-(2 + trigger.player.countMark('sxtiaolvsx'))).type = 'damage';
                                            }
                                            if (trigger.player.hujia < 2 + trigger.player.countMark('sxtiaolvsx')) {
                                                game.broadcastAll(function (num) {
                                                    if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                                }, num);
                                                game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                                if (trigger.player.hujia != 0) {
                                                    game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.hujia) + '点伤害');
                                                }
                                                trigger.player.$damagepop(-(2 + trigger.player.countMark('sxtiaolvsx')));
                                                trigger.player.changeHujia(-trigger.player.hujia).type = 'damage';
                                                trigger.player.hp -= 2 + trigger.player.countMark('sxtiaolvsx') - trigger.player.hujia;
                                                if (isNaN(trigger.player.hp)) {
                                                    trigger.player.hp = 0;
                                                }
                                                trigger.player.update();
                                                if (trigger.player.hp <= 0 && !event.nodying) {
                                                    if (trigger.player.isDying()) {
                                                    } else {
                                                        if (trigger.player == trigger.die || trigger.player == trigger.dieBefore || trigger.player == trigger.dieBegin || trigger.player == trigger.dieEnd || trigger.player == trigger.dieAfter) {
                                                        } else {
                                                            event._dyinged = true;
                                                            trigger.player.dying(event).source = player;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    },
                    2: {
                        nobracket: true,
                        trigger: { global: 'phaseEnd' },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        silent: true,
                        content() {
                            player.calll = 1;
                            if (player.hp < player.maxHp) {
                                player.recover();
                            } else player.changeHujia();
                            game.countPlayer(function (current) {
                                if (current != player && player.getFriends().includes(current)) {
                                    if (current.hp < current.maxHp) {
                                        current.recover();
                                    } else current.changeHujia();
                                }
                            });
                        },
                    },
                    3: {
                        trigger: {
                            global: ['loseAfter'],
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        silent: true,
                        filter(event, player, name) {
                            var name = [event.player.name, event.player.name1, event.player.name2];
                            return !name.includes('yezoushi') && !['useCard', 'respond', 'die'].includes(event.parent.name) && event.player != player && event.player.hasMark('sxtiaolvsx') && event.parent.name != '_yezoushin';
                        },
                        async content(event, trigger, player) {
                            if (trigger.player.hasMark('sxtiaolvsx')) {
                                if (trigger.player.sex != 'female') {
                                    var num = trigger.player.countMark('sxtiaolvsx');
                                    if (trigger.player.hujia >= trigger.player.countMark('sxtiaolvsx')) {
                                        game.broadcastAll(function (num) {
                                            if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                        }, num);
                                        game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                        game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                        trigger.player.$damagepop(-trigger.player.countMark('sxtiaolvsx'));
                                        trigger.player.changeHujia(-trigger.player.countMark('sxtiaolvsx')).type = 'damage';
                                    }
                                    if (trigger.player.hujia < trigger.player.countMark('sxtiaolvsx')) {
                                        game.broadcastAll(function (num) {
                                            if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                        }, num);
                                        game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                        if (trigger.player.hujia != 0) {
                                            game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.hujia) + '点伤害');
                                        }
                                        trigger.player.$damagepop(-trigger.player.countMark('sxtiaolvsx'));
                                        trigger.player.changeHujia(-trigger.player.hujia).type = 'damage';
                                        trigger.player.hp -= trigger.player.countMark('sxtiaolvsx') - trigger.player.hujia;
                                        if (isNaN(trigger.player.hp)) {
                                            trigger.player.hp = 0;
                                        }
                                        trigger.player.update();
                                        if (trigger.player.hp <= 0 && !event.nodying) {
                                            if (trigger.player.isDying()) {
                                            } else {
                                                if (trigger.player == trigger.die || trigger.player == trigger.dieBefore || trigger.player == trigger.dieBegin || trigger.player == trigger.dieEnd || trigger.player == trigger.dieAfter) {
                                                } else {
                                                    event._dyinged = true;
                                                    trigger.player.dying(event).source = player;
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    var num = 2 + trigger.player.countMark('sxtiaolvsx');
                                    if (trigger.player.hujia >= 2 + trigger.player.countMark('sxtiaolvsx')) {
                                        game.broadcastAll(function (num) {
                                            if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                        }, num);
                                        game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                        game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                        trigger.player.$damagepop(-(2 + trigger.player.countMark('sxtiaolvsx')));
                                        trigger.player.changeHujia(-(2 + trigger.player.countMark('sxtiaolvsx'))).type = 'damage';
                                    }
                                    if (trigger.player.hujia < 2 + trigger.player.countMark('sxtiaolvsx')) {
                                        game.broadcastAll(function (num) {
                                            if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                        }, num);
                                        game.log(trigger.player, '受到了来自', player, '的' + get.cnNumber(2 + trigger.player.countMark('sxtiaolvsx')) + '点伤害');
                                        if (trigger.player.hujia != 0) {
                                            game.log(trigger.player, '的护甲抵挡了' + get.cnNumber(trigger.player.hujia) + '点伤害');
                                        }
                                        trigger.player.$damagepop(-(2 + trigger.player.countMark('sxtiaolvsx')));
                                        trigger.player.changeHujia(-trigger.player.hujia).type = 'damage';
                                        trigger.player.hp -= 2 + trigger.player.countMark('sxtiaolvsx') - trigger.player.hujia;
                                        if (isNaN(trigger.player.hp)) {
                                            trigger.player.hp = 0;
                                        }
                                        trigger.player.update();
                                        if (trigger.player.hp <= 0 && !event.nodying) {
                                            if (trigger.player.isDying()) {
                                            } else {
                                                if (trigger.player == trigger.die || trigger.player == trigger.dieBefore || trigger.player == trigger.dieBegin || trigger.player == trigger.dieEnd || trigger.player == trigger.dieAfter) {
                                                } else {
                                                    event._dyinged = true;
                                                    trigger.player.dying(event).source = player;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    },
                    4: {
                        nobracket: true,
                        trigger: { global: ['phaseBefore', 'gameStart'] },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        silent: true,
                        content() {
                            player.storage.yongzouye = false;
                        },
                    },
                },
            },
            sxtiaolvsx: {
                mark: true,
                intro: {
                    content: '当前有#个<调律>,回合结束时或每次失去牌则受到#点伤害.使用【闪】时会在受伤前先减少一半的<调律>,回合结束时若当回合使用过回复类牌则不会受到伤害.若对女性角色则……,若？？？时则……',
                },
            },
            yongshangzhou: {
                init(player) {
                    if (!player.yongshangzhoud) {
                        player.yongshangzhoud = 0;
                    }
                },
                trigger: {
                    player: 'recoverBegin',
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return player.yongshangzhoud > 0;
                },
                content() {
                    'step 0';
                    event.num = Math.min(trigger.num, 9);
                    if (player.maxHp - player.yongshangzhoud < player.hp) {
                        trigger.cancel();
                        event.num += player.hp - (player.maxHp - player.yongshangzhoud);
                        player.hp = Math.max(1, player.maxHp - player.yongshangzhoud);
                        player.update();
                        event.goto(1);
                    }
                    if (player.maxHp - player.yongshangzhoud == player.hp) {
                        trigger.cancel();
                        player.hp = Math.max(1, player.hp);
                        player.update();
                        event.goto(1);
                    }
                    if (player.maxHp - player.yongshangzhoud > player.hp) {
                        event.numa = player.maxHp - player.yongshangzhoud - player.hp;
                        if (event.num <= event.numa) {
                            player.hp += event.num;
                            player.update();
                            trigger.cancel();
                            event.goto(2);
                        } else {
                            player.hp += event.numa;
                            event.numm = event.num - event.numa;
                            player.update();
                            trigger.cancel();
                            event.goto(2);
                        }
                    }
                    ('step 1');
                    var lent = game.filterPlayer(function (t) {
                        return get.attitude(t, player) <= 0;
                    }).length;
                    event.num = event.num * lent;
                    event.goto(9);
                    ('step 2');
                    event.list = player.getFriends().sortBySeat();
                    ('step 3');
                    var len = game.filterPlayer(function (t) {
                        return get.attitude(t, player) <= 0;
                    }).length;
                    event.numm = event.numm * len;
                    ('step 4');
                    for (var i of game.players) {
                        if (i.isEnemiesOf(player) || get.attitude(i, player) <= 0) {
                            event.cards = i.getCards('he').randomGets(1);
                            if (event.cards.length) {
                                i.lose(event.cards)._triggered = null;
                                i.$throw(event.cards);
                            } else {
                                i.damage()._triggered = null;
                            }
                            event.numm--;
                        }
                    }
                    ('step 5');
                    if (event.numm > 0) {
                        event.goto(4);
                    }
                    ('step 6');
                    event.list = player.getFriends().sortBySeat();
                    ('step 7');
                    for (var i of game.players) {
                        if (get.attitude(i, player) <= 0) {
                            if (i.hp <= 0) {
                                i.dying().source = player;
                            }
                        }
                    }
                    ('step 8');
                    event.finish();
                    ('step 9');
                    for (var i of game.players) {
                        if (i.isEnemiesOf(player) || get.attitude(i, player) <= 0) {
                            event.cards = i.getCards('he').randomGets(1);
                            if (event.cards.length) {
                                i.lose(event.cards)._triggered = null;
                                i.$throw(event.cards);
                            } else {
                                i.damage()._triggered = null;
                            }
                            event.num--;
                        }
                    }
                    ('step 10');
                    if (event.num > 0) {
                        event.goto(9);
                    }
                    ('step 11');
                    event.list = player.getFriends().sortBySeat();
                    ('step 12');
                    for (var i of game.players) {
                        if (get.attitude(i, player) <= 0) {
                            if (i.hp <= 0) {
                                i.dying().source = player;
                            }
                        }
                    }
                    event.goto(8);
                },
                group: ['yongshangzhou_1', 'yongshangzhou_2'],
                subSkill: {
                    1: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        lastDo: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        silent: true,
                        filter(event, player, name) {
                            return event.source && event.source != player;
                            var name = [player.name, player.name1, player.name2];
                            return name.includes('测试的地方');
                        },
                        content() {
                            if (!trigger.source.yongshangzhoud || trigger.source.yongshangzhoud <= 0) {
                                if (player.yongshangzhoud == 0) {
                                    player.yongshangzhoud = 1;
                                    player.removeMark('yongshangzhouf', Infinity);
                                    player.addMark('yongshangzhouf');
                                } else {
                                    player.yongshangzhoud += 1;
                                    player.removeMark('yongshangzhouf', Infinity);
                                    player.addMark('yongshangzhouf', player.yongshangzhoud);
                                }
                            } else {
                                if (player.yongshangzhoud == 0) {
                                    player.yongshangzhoud = 3;
                                    player.removeMark('yongshangzhouf', Infinity);
                                    player.addMark('yongshangzhouf');
                                } else {
                                    player.yongshangzhoud += 3;
                                    player.removeMark('yongshangzhouf', Infinity);
                                    player.addMark('yongshangzhouf', player.yongshangzhoud);
                                }
                            }
                        },
                    },
                    2: {
                        trigger: {
                            player: 'recoverBefore',
                        },
                        forced: true,
                        superCharlotte: true,
                        charlotte: true,
                        fixed: true,
                        silent: true,
                        filter(event, player) {
                            return event.source && event.source != player && event.source.isIn();
                        },
                        content() {
                            if (!trigger.source.yongshangzhoud || (trigger.source.yongshangzhoud = 0)) {
                                trigger.source.yongshangzhoud = 1;
                            } else trigger.source.yongshangzhoud += 1;
                        },
                    },
                },
            },
            yongshangzhouf: {
                marktext: '伤',
                intro: {
                    name: '永伤咒',
                    content: '当前有#个<永伤咒>,体力回复上限-#',
                },
            },
        },
    };
    for (var i in xbsj.character) {
        xbsj.character[i][4].push('ext:死星/image/character/' + i + '.jpg');
        if (i.includes('bh_')) {
            if (xbsj.translate[i]) xbsj.translate[i] = '<font color=black>崩毁</font>' + xbsj.translate[i];
            xbsj.translate[i + '_prefix'] = '崩毁';
        }
    }
    lib.config.characters.add('xbsj');
    lib.config.all.characters.add('xbsj');
    lib.translate.xbsj_character_config = '死星';
    return xbsj;
});
